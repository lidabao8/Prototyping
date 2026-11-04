// Instanced trees, bushes and rocks with wind sway, plus GPU grass driven by terrain data textures.
import * as THREE from 'three';
import { G } from '../render/geo.js';
import { windPatch, patchMaterial, shared } from '../render/materials.js';
import { makeRng, makeNoise2D, smoothstep } from '../core/math.js';

function treeGeo(type, biome) {
  switch (type) {
    case 'pine': return G.merge([
      G.cyl(0.16, 0.28, 3.2, 6, 0x5a4232, 0, 1.6, 0),
      G.cone(2.4, 3.4, 7, 0x2f5a2e, 0, 3.6, 0, 0.12), G.cone(1.85, 2.9, 7, 0x356535, 0, 5.4, 0, 0.12), G.cone(1.2, 2.4, 7, 0x3c7039, 0, 7.0, 0, 0.12),
    ]);
    case 'oak': return G.merge([
      G.cyl(0.24, 0.36, 3.6, 6, 0x5e4634, 0, 1.8, 0),
      G.ico(2.3, 0, 0x4f7a32, 0, 4.9, 0, 1, 0.85, 1, 0.15, 0.15), G.ico(1.7, 0, 0x5a8638, 1.3, 4.2, 0.6, 1, 0.9, 1, 0.15, 0.2), G.ico(1.6, 0, 0x46702c, -1.2, 4.4, -0.7, 1, 0.9, 1, 0.15, 0.2), G.ico(1.4, 0, 0x5d8c3a, 0.2, 6.0, -0.4, 1, 0.9, 1, 0.15, 0.2),
    ]);
    case 'birch': return G.merge([
      G.cyl(0.12, 0.18, 5.5, 5, 0xe6e2d6, 0, 2.75, 0),
      G.ico(1.4, 0, 0x7ea04a, 0, 5.6, 0, 1, 1.3, 1, 0.15, 0.15), G.ico(1.0, 0, 0x8cae55, 0.6, 4.6, 0.3, 1, 1.2, 1, 0.15, 0.2),
    ]);
    case 'palm': {
      const parts = [];
      let x = 0, y = 0;
      for (let i = 0; i < 6; i++) { parts.push(G.cyl(0.17, 0.22, 1.25, 6, i % 2 ? 0x8a7454 : 0x7a6448, x, y + 0.62, 0, 0, 0, -0.06 * i)); x += 0.08 * i; y += 1.2; }
      for (let k = 0; k < 7; k++) {
        const a = k / 7 * Math.PI * 2;
        const fr = G.box(0.5, 0.06, 3.2, 0x5f8a3a, 0, 0, 1.5, -0.35, 0, 0);
        fr.rotateY(a); fr.translate(x, y, 0); parts.push(fr);
      }
      parts.push(G.ico(0.4, 0, 0x6a5030, x, y, 0));
      return G.merge(parts);
    }
    case 'acacia': return G.merge([
      G.cyl(0.14, 0.24, 3.4, 5, 0x6a5440, 0, 1.7, 0, 0, 0, 0.12), G.cyl(0.1, 0.14, 1.6, 5, 0x6a5440, 0.5, 3.4, 0, 0, 0, -0.5),
      G.ico(2.6, 0, 0x7a8a42, 0.3, 4.3, 0, 1.2, 0.32, 1.1, 0.12, 0.2), G.ico(1.8, 0, 0x6f803b, -1.2, 4.0, 0.5, 1.1, 0.3, 1, 0.12, 0.2),
    ]);
    case 'shrub': return G.merge([G.ico(1.0, 0, 0x7d7d48, 0, 0.6, 0, 1.3, 0.75, 1.2, 0.18, 0.25), G.ico(0.7, 0, 0x8a8a50, 0.6, 0.5, 0.3, 1, 0.8, 1, 0.18, 0.25)]);
  }
}

const TREE_COLLIDE = { pine: 0.3, oak: 0.38, birch: 0.2, palm: 0.25, acacia: 0.25, shrub: 0 };
const CANOPY = { pine: [4.8, 2.2], oak: [4.9, 2.6], birch: [5.2, 1.4], palm: [7.2, 2.2], acacia: [4.2, 2.4], shrub: [0.7, 1.1] };

export class Vegetation {
  constructor(world) {
    this.world = world;
    this.meshes = [];
  }

  build(scene, layout) {
    const { terrain, collision, def } = this.world;
    const rng = makeRng(def.seed + 999);
    const noise = makeNoise2D(def.seed + 5);
    const half = def.playHalf + 30;
    const blocked = (x, z, pad = 2) => {
      for (const f of layout.fps) if (x > f.minX - pad && x < f.maxX + pad && z > f.minZ - pad && z < f.maxZ + pad) return true;
      if (layout.roadDist(x, z) < 1.5) return true;
      if (layout.riverDist(x, z) < 2) return true;
      for (const n of layout.noTree) if ((x - n.x) ** 2 + (z - n.z) ** 2 < n.r * n.r) return true;
      const h = terrain.heightAt(x, z);
      if (terrain.waterLevel !== null && h < terrain.waterLevel + 0.6) return true;
      if (terrain.normalAt(x, z)[1] < 0.8) return true;
      return false;
    };
    const types = def.trees.types, weights = def.trees.weights;
    const pickType = () => { let r = rng(), acc = 0; for (let i = 0; i < types.length; i++) { acc += weights[i]; if (r < acc) return types[i]; } return types[0]; };
    const instances = {}; for (const t of types) instances[t] = [];
    const addTree = (type, x, z) => {
      const s = 0.75 + rng() * 0.6;
      const y = terrain.heightAt(x, z) - 0.15;
      instances[type].push([x, y, z, rng() * Math.PI * 2, s]);
      const cr = TREE_COLLIDE[type] * s;
      if (cr > 0) collision.addBox({ minX: x - cr, maxX: x + cr, minZ: z - cr, maxZ: z + cr, minY: y - 0.5, maxY: y + 5 * s, mat: 'wood', cat: 'tree', destructible: false, pen: 3, noStand: true });
      const [ch, r] = CANOPY[type];
      collision.addSoft({ x, y: y + ch * s, z, r: r * s, strength: type === 'shrub' ? 0.6 : 0.5 });
    };
    // forests
    for (const [fx, fz, fr] of layout.forests || []) {
      const count = Math.floor(fr * fr * Math.PI / 70);
      for (let i = 0; i < count; i++) {
        const a = rng() * Math.PI * 2, r = Math.sqrt(rng()) * fr * (0.8 + 0.3 * noise(Math.cos(a) * 2, Math.sin(a) * 2));
        const x = fx + Math.cos(a) * r, z = fz + Math.sin(a) * r;
        if (blocked(x, z, 2.5)) continue;
        addTree(pickType(), x, z);
      }
    }
    // scattered trees
    const area = (half * 2) ** 2;
    const scatterN = Math.floor(area * def.trees.scatter);
    for (let i = 0; i < scatterN; i++) {
      const x = (rng() - 0.5) * half * 2, z = (rng() - 0.5) * half * 2;
      if (noise(x / 120, z / 120) < -0.1) continue;
      if (blocked(x, z, 3)) continue;
      addTree(pickType(), x, z);
    }
    // build tree meshes
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    for (const t of types) {
      const list = instances[t];
      if (!list.length) continue;
      const geo = treeGeo(t, def.biome);
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true });
      windPatch(mat, t === 'palm' ? 0.025 : 0.018, 1.5, 1.2);
      const mesh = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([x, y, z, ry, s], i) => { q.setFromAxisAngle(up, ry); p.set(x, y, z); sc.set(s, s * (0.9 + (i % 5) * 0.05), s); m4.compose(p, q, sc); mesh.setMatrixAt(i, m4); });
      mesh.castShadow = true; mesh.receiveShadow = true;
      mesh.computeBoundingSphere();
      scene.add(mesh); this.meshes.push(mesh);
      this.windMats = (this.windMats || []).concat(mat);
    }
    this.treeCount = types.reduce((a, t) => a + instances[t].length, 0);
    // bushes
    const bushN = Math.floor(area * def.trees.bush);
    const bushes = [];
    for (let i = 0; i < bushN; i++) {
      let x = (rng() - 0.5) * half * 2, z = (rng() - 0.5) * half * 2;
      if (blocked(x, z, 1.5)) continue;
      bushes.push([x, terrain.heightAt(x, z) - 0.1, z, rng() * 6.28, 0.7 + rng() * 0.8]);
    }
    // hedgerows near forests' edges
    for (const [fx, fz, fr] of layout.forests || []) {
      for (let i = 0; i < fr * 0.8; i++) {
        const a = rng() * Math.PI * 2; const x = fx + Math.cos(a) * fr * (1 + rng() * 0.2), z = fz + Math.sin(a) * fr * (1 + rng() * 0.2);
        if (blocked(x, z, 1.5)) continue;
        bushes.push([x, terrain.heightAt(x, z) - 0.1, z, rng() * 6.28, 0.8 + rng() * 0.7]);
      }
    }
    if (bushes.length) {
      const bc = def.biome === 'arid' ? [0x7d7a48, 0x8a8650] : [0x46702e, 0x55803a];
      const geo = G.merge([G.ico(1.0, 0, bc[0], 0, 0.55, 0, 1.3, 0.8, 1.2, 0.2, 0.3), G.ico(0.75, 0, bc[1], 0.55, 0.75, 0.25, 1, 0.9, 1, 0.2, 0.3), G.ico(0.7, 0, bc[0], -0.5, 0.5, -0.3, 1, 0.8, 1, 0.2, 0.3)]);
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });
      windPatch(mat, 0.05, 0.2, 1.8);
      const mesh = new THREE.InstancedMesh(geo, mat, bushes.length);
      bushes.forEach(([x, y, z, ry, s], i) => {
        q.setFromAxisAngle(up, ry); p.set(x, y, z); sc.set(s, s, s); m4.compose(p, q, sc); mesh.setMatrixAt(i, m4);
        collision.addSoft({ x, y: y + 0.7 * s, z, r: 1.15 * s, strength: 0.65 });
      });
      mesh.castShadow = true; mesh.receiveShadow = true; mesh.computeBoundingSphere();
      scene.add(mesh); this.meshes.push(mesh);
    }
    // rocks
    const rockN = Math.floor(area * def.trees.rock);
    const rocks = [];
    for (let i = 0; i < rockN; i++) {
      const x = (rng() - 0.5) * half * 2, z = (rng() - 0.5) * half * 2;
      let isBlocked = false;
      for (const f of layout.fps) if (x > f.minX - 2 && x < f.maxX + 2 && z > f.minZ - 2 && z < f.maxZ + 2) { isBlocked = true; break; }
      if (isBlocked || layout.roadDist(x, z) < 1.5) continue;
      const h = terrain.heightAt(x, z);
      if (terrain.waterLevel !== null && h < terrain.waterLevel - 1) continue;
      const slope = 1 - terrain.normalAt(x, z)[1];
      if (rng() > 0.35 + slope * 3) continue;
      const s = 0.5 + Math.pow(rng(), 2.5) * 3.2;
      rocks.push([x, h - s * 0.3, z, rng() * 6.28, s]);
    }
    if (rocks.length) {
      const rc = def.biome === 'arid' ? 0xa8957a : 0x8d8a84;
      const geo = G.merge([G.dodeca(1, rc, 0, 0, 0, 1.2, 0.75, 1, 0.15), G.dodeca(0.6, rc, 0.7, -0.1, 0.3, 1, 0.8, 1, 0.15)]);
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true });
      patchMaterial(mat, 'rock', () => {});
      const mesh = new THREE.InstancedMesh(geo, mat, rocks.length);
      rocks.forEach(([x, y, z, ry, s], i) => {
        q.setFromAxisAngle(up, ry); p.set(x, y, z); sc.set(s, s, s); m4.compose(p, q, sc); mesh.setMatrixAt(i, m4);
        if (s > 0.9) {
          const r = s * 0.9;
          collision.addBox({ minX: x - r, maxX: x + r, minZ: z - r, maxZ: z + r, minY: y - s, maxY: y + s * 0.62 + s * 0.3, mat: 'stone', cat: 'rock', destructible: false, pen: 9, vault: s * 0.92 < 1.25 });
        }
      });
      mesh.castShadow = true; mesh.receiveShadow = true; mesh.computeBoundingSphere();
      scene.add(mesh); this.meshes.push(mesh);
    }
    this.rockCount = rocks.length;
  }

  setWind(on) { shared.uWind.value = on ? 1 : 0; }
}

// GPU grass: a fixed grid of instanced blade clumps that follows the camera; heights & density come
// from terrain data textures, so the CPU never touches individual blades.
export class Grass {
  constructor(world, scene) {
    this.world = world; this.scene = scene; this.mesh = null; this.level = 'off';
  }
  setLevel(level) {
    if (level === this.level) return;
    this.level = level;
    if (this.mesh) { this.scene.remove(this.mesh); this.mesh.geometry.dispose(); this.mesh = null; }
    if (level === 'off') return;
    const cfg = { low: [120, 0.7], medium: [190, 0.52], high: [260, 0.42] }[level];
    const [N, spacing] = cfg;
    const t = this.world.terrain, def = this.world.def;
    // clump geometry: 4 bent blades
    const pos = [], col = [], nrm = [];
    const base = new THREE.Color(def.grassColor[0]), mid = new THREE.Color(def.grassColor[1]), tip = new THREE.Color(def.grassColor[2]);
    for (let b = 0; b < 4; b++) {
      const a = b / 4 * Math.PI * 2 + 0.4;
      const ox = Math.cos(a * 1.7) * 0.12, oz = Math.sin(a * 1.3) * 0.12;
      const dx = Math.cos(a), dz = Math.sin(a);
      const w = 0.04, h = 0.24 + (b % 2) * 0.1, bend = 0.09;
      const px = -dz * w, pz = dx * w;
      const v = [
        [ox - px, 0, oz - pz], [ox + px, 0, oz + pz], [ox + dx * bend * 0.4 + px * 0.6, h * 0.55, oz + dz * bend * 0.4 + pz * 0.6],
        [ox - px, 0, oz - pz], [ox + dx * bend * 0.4 + px * 0.6, h * 0.55, oz + dz * bend * 0.4 + pz * 0.6], [ox + dx * bend * 0.4 - px * 0.6, h * 0.55, oz + dz * bend * 0.4 - pz * 0.6],
        [ox + dx * bend * 0.4 - px * 0.6, h * 0.55, oz + dz * bend * 0.4 - pz * 0.6], [ox + dx * bend * 0.4 + px * 0.6, h * 0.55, oz + dz * bend * 0.4 + pz * 0.6], [ox + dx * bend, h, oz + dz * bend],
      ];
      const cs = [base, base, mid, base, mid, mid, mid, mid, tip];
      for (let i = 0; i < 9; i++) { pos.push(...v[i]); col.push(cs[i].r, cs[i].g, cs[i].b); nrm.push(0, 1, 0); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide });
    const uniforms = {
      uCenter: { value: new THREE.Vector3() }, uCam: { value: new THREE.Vector3() },
      uSpacing: { value: spacing }, uN: { value: N }, uHeight: { value: t.heightTex }, uMask: { value: t.grassTex },
      uSize: { value: t.size }, uHalf: { value: t.half }, uTexN: { value: t.n }, uRadius: { value: N * spacing * 0.5 },
    };
    this.uniforms = uniforms;
    patchMaterial(mat, 'grass', (shader) => {
      Object.assign(shader.uniforms, uniforms);
      shader.uniforms.uTime = shared.uTime; shader.uniforms.uWind = shared.uWind;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>
          uniform vec3 uCenter; uniform vec3 uCam; uniform float uSpacing; uniform float uN; uniform sampler2D uHeight; uniform sampler2D uMask;
          uniform float uSize; uniform float uHalf; uniform float uTexN; uniform float uRadius; uniform float uTime; uniform float uWind;
          vec2 ghash(vec2 p) { p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }`)
        .replace('#include <begin_vertex>', `
          float gid = float(gl_InstanceID);
          float gz = floor(gid / uN); float gx = gid - gz * uN;
          vec2 cell = (vec2(gx, gz) - uN * 0.5) * uSpacing + uCenter.xz;
          vec2 hh = ghash(cell);
          vec2 wp = cell + (hh - 0.5) * uSpacing * 0.9;
          vec2 tuv = ((wp + uHalf) / uSize) * ((uTexN - 1.0) / uTexN) + 0.5 / uTexN;
          float gh = texture(uHeight, tuv).r;
          float dens = texture(uMask, tuv).r;
          float dd = distance(wp, uCam.xz);
          float fade = 1.0 - smoothstep(uRadius * 0.55, uRadius * 0.98, dd);
          float keep = step(hh.y, dens * 1.05);
          float s = keep * fade * (0.65 + hh.x * 0.7);
          float ang = hh.x * 6.2831;
          float ca = cos(ang), sa = sin(ang);
          vec3 transformed = vec3(position.x * ca - position.z * sa, position.y, position.x * sa + position.z * ca) * s;
          float tipW = position.y * 2.2;
          float ph = uTime * 2.1 + wp.x * 0.35 + wp.y * 0.27;
          transformed.x += (sin(ph) * 0.09 + sin(ph * 2.7) * 0.03) * tipW * uWind * s;
          transformed.z += (cos(ph * 0.8) * 0.07) * tipW * uWind * s;
          transformed += vec3(wp.x, gh - 0.03, wp.y);`);
    });
    const mesh = new THREE.InstancedMesh(geo, mat, N * N);
    mesh.frustumCulled = false;
    mesh.castShadow = false; mesh.receiveShadow = true;
    this.mesh = mesh;
    this.scene.add(mesh);
  }
  update(camPos) {
    if (!this.mesh) return;
    const s = this.uniforms.uSpacing.value;
    this.uniforms.uCenter.value.set(Math.round(camPos.x / s) * s, 0, Math.round(camPos.z / s) * s);
    this.uniforms.uCam.value.copy(camPos);
  }
}
