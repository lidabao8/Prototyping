// Visual effects: billboard particles (smoke, fire, sparks, dust), tracers, decals, debris chunks,
// flash lights and screen shake. All GPU-instanced; CPU only integrates small arrays.
import * as THREE from 'three';
import { getTexture } from '../render/textures.js';
import { MATS } from '../world/buildings.js';
import { rand } from '../core/math.js';

const QUAD = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
const QIDX = [0, 1, 2, 0, 2, 3];

class Particles {
  constructor(scene, max, texture, additive) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.s0 = new Float32Array(max); this.s1 = new Float32Array(max);
    this.c0 = new Float32Array(max * 4); this.c1 = new Float32Array(max * 4);
    this.rot = new Float32Array(max); this.rotV = new Float32Array(max);
    this.drag = new Float32Array(max); this.grav = new Float32Array(max);
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('corner', new THREE.BufferAttribute(QUAD, 2));
    g.setIndex(QIDX);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aSR = new THREE.InstancedBufferAttribute(new Float32Array(max * 2), 2).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iPos', this.aPos); g.setAttribute('iCol', this.aCol); g.setAttribute('iSR', this.aSR);
    g.instanceCount = 0;
    this.uniforms = { uTex: { value: texture }, uLight: { value: new THREE.Color(1, 1, 1) }, uFogColor: { value: new THREE.Color() }, uFogDensity: { value: 0 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: `
        attribute vec2 corner; attribute vec3 iPos; attribute vec4 iCol; attribute vec2 iSR;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        void main() {
          vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
          vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float c = cos(iSR.y), s = sin(iSR.y);
          vec2 q = vec2(corner.x * c - corner.y * s, corner.x * s + corner.y * c) * iSR.x;
          vec3 wp = iPos + right * q.x + up * q.y;
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          vFog = -mv.z;
          gl_Position = projectionMatrix * mv;
          vUv = corner + 0.5; vCol = iCol;
        }`,
      fragmentShader: `
        uniform sampler2D uTex; uniform vec3 uLight; uniform vec3 uFogColor; uniform float uFogDensity;
        varying vec2 vUv; varying vec4 vCol; varying float vFog;
        void main() {
          vec4 t = texture2D(uTex, vUv);
          vec4 c = vec4(vCol.rgb * ${additive ? '1.0' : 'uLight'}, vCol.a * t.a);
          ${additive ? 'c.rgb *= t.rgb * c.a;' : ''}
          float f = 1.0 - exp(-uFogDensity * uFogDensity * vFog * vFog);
          ${additive ? 'c.rgb *= 1.0 - f;' : 'c.rgb = mix(c.rgb, uFogColor, f);'}
          if (c.a < 0.003) discard;
          gl_FragColor = c;
        }`,
    });
    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = additive ? 6 : 5;
    scene.add(this.mesh);
    this.geo = g;
  }
  emit(x, y, z, vx, vy, vz, life, s0, s1, c0, c1, drag = 0, grav = 0, rotV = 0) {
    let i;
    if (this.n < this.max) i = this.n++;
    else i = Math.floor(Math.random() * this.max);
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life; this.s0[i] = s0; this.s1[i] = s1;
    for (let k = 0; k < 4; k++) { this.c0[i * 4 + k] = c0[k]; this.c1[i * 4 + k] = c1[k]; }
    this.rot[i] = Math.random() * 6.28; this.rotV[i] = rotV * (Math.random() - 0.5);
    this.drag[i] = drag; this.grav[i] = grav;
  }
  update(dt) {
    let i = 0;
    const P = this.aPos.array, C = this.aCol.array, S = this.aSR.array;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // swap-remove
        const j = --this.n;
        if (j !== i) {
          this.pos.copyWithin(i * 3, j * 3, j * 3 + 3); this.vel.copyWithin(i * 3, j * 3, j * 3 + 3);
          this.c0.copyWithin(i * 4, j * 4, j * 4 + 4); this.c1.copyWithin(i * 4, j * 4, j * 4 + 4);
          this.life[i] = this.life[j]; this.maxLife[i] = this.maxLife[j]; this.s0[i] = this.s0[j]; this.s1[i] = this.s1[j];
          this.rot[i] = this.rot[j]; this.rotV[i] = this.rotV[j]; this.drag[i] = this.drag[j]; this.grav[i] = this.grav[j];
        }
        continue;
      }
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.rot[i] += this.rotV[i] * dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      P[i * 3] = this.pos[i * 3]; P[i * 3 + 1] = this.pos[i * 3 + 1]; P[i * 3 + 2] = this.pos[i * 3 + 2];
      for (let k = 0; k < 4; k++) C[i * 4 + k] = this.c0[i * 4 + k] + (this.c1[i * 4 + k] - this.c0[i * 4 + k]) * t;
      // fade in quickly for smoke
      if (t < 0.08) C[i * 4 + 3] *= t / 0.08;
      S[i * 2] = this.s0[i] + (this.s1[i] - this.s0[i]) * Math.sqrt(t); S[i * 2 + 1] = this.rot[i];
      i++;
    }
    this.geo.instanceCount = this.n;
    this.aPos.needsUpdate = true; this.aCol.needsUpdate = true; this.aSR.needsUpdate = true;
    this.aPos.updateRanges = [{ start: 0, count: this.n * 3 }];
  }
}

class Tracers {
  constructor(scene, max = 400) {
    this.max = max;
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('corner', new THREE.BufferAttribute(new Float32Array([0, -1, 1, -1, 1, 1, 0, 1]), 2));
    g.setIndex(QIDX);
    this.aS = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aE = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aC = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iS', this.aS); g.setAttribute('iE', this.aE); g.setAttribute('iC', this.aC);
    g.instanceCount = 0;
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec2 corner; attribute vec3 iS; attribute vec3 iE; attribute vec4 iC;
        varying vec4 vC; varying float vT; varying float vSide;
        void main() {
          vec3 p = mix(iS, iE, corner.x);
          vec3 dir = normalize(iE - iS + 1e-5);
          vec3 vd = normalize(cameraPosition - p);
          vec3 side = normalize(cross(dir, vd) + 1e-5);
          float dist = length(cameraPosition - p);
          float w = iC.a * max(1.0, dist * 0.0022 / iC.a * 0.6);
          p += side * corner.y * w;
          vC = iC; vT = corner.x; vSide = corner.y;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        varying vec4 vC; varying float vT; varying float vSide;
        void main() { float a = vT * vT * (1.0 - abs(vSide)); gl_FragColor = vec4(vC.rgb * a * 2.5, a); }`,
    });
    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 7;
    scene.add(this.mesh);
    this.geo = g; this.n = 0;
  }
  begin() { this.n = 0; }
  add(sx, sy, sz, ex, ey, ez, r, g, b, w) {
    if (this.n >= this.max) return;
    const i = this.n++;
    const S = this.aS.array, E = this.aE.array, C = this.aC.array;
    S[i * 3] = sx; S[i * 3 + 1] = sy; S[i * 3 + 2] = sz; E[i * 3] = ex; E[i * 3 + 1] = ey; E[i * 3 + 2] = ez;
    C[i * 4] = r; C[i * 4 + 1] = g; C[i * 4 + 2] = b; C[i * 4 + 3] = w;
  }
  end() { this.geo.instanceCount = this.n; this.aS.needsUpdate = this.aE.needsUpdate = this.aC.needsUpdate = true; }
}

class Decals {
  constructor(scene, max, texName, size) {
    this.max = max; this.i = 0; this.owners = new Array(max).fill(null);
    const mat = new THREE.MeshStandardMaterial({ map: getTexture(texName), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, roughness: 1 });
    this.mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, max);
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let k = 0; k < max; k++) this.mesh.setMatrixAt(k, zero);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 1;
    this.mesh.receiveShadow = true;
    scene.add(this.mesh);
    this.size = size;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._q2 = new THREE.Quaternion(); this._v = new THREE.Vector3(); this._n = new THREE.Vector3(); this._s = new THREE.Vector3();
  }
  add(x, y, z, nx, ny, nz, owner, sizeMul = 1) {
    const k = this.i; this.i = (this.i + 1) % this.max;
    this._n.set(nx, ny, nz);
    this._q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), this._n);
    this._q2.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.random() * 6.28);
    this._q.multiply(this._q2);
    const s = this.size * sizeMul * (0.8 + Math.random() * 0.4);
    this._v.set(x + nx * 0.012, y + ny * 0.012, z + nz * 0.012); this._s.set(s, s, s);
    this._m.compose(this._v, this._q, this._s);
    this.mesh.setMatrixAt(k, this._m);
    this.mesh.instanceMatrix.needsUpdate = true;
    this.owners[k] = owner || null;
  }
  removeOwner(owner) {
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    let changed = false;
    for (let k = 0; k < this.max; k++) if (this.owners[k] === owner) { this.mesh.setMatrixAt(k, zero); this.owners[k] = null; changed = true; }
    if (changed) this.mesh.instanceMatrix.needsUpdate = true;
  }
}

class Debris {
  constructor(scene, max = 500) {
    this.max = max; this.list = [];
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.9 });
    this.mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, max);
    this.mesh.castShadow = true; this.mesh.receiveShadow = true; this.mesh.frustumCulled = false;
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let k = 0; k < max; k++) { this.mesh.setMatrixAt(k, zero); this.mesh.setColorAt(k, new THREE.Color(1, 1, 1)); }
    scene.add(this.mesh);
    this.free = []; for (let k = max - 1; k >= 0; k--) this.free.push(k);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._e = new THREE.Euler(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(); this._c = new THREE.Color();
  }
  spawn(x, y, z, vx, vy, vz, sx, sy, sz, color, life = 8) {
    let slot;
    if (this.free.length) slot = this.free.pop();
    else { const old = this.list.shift(); slot = old.slot; }
    this.list.push({ slot, x, y, z, vx, vy, vz, rx: Math.random() * 6, ry: Math.random() * 6, rz: Math.random() * 6, ax: rand(-8, 8), ay: rand(-8, 8), az: rand(-8, 8), sx, sy, sz, life, rest: false });
    this._c.set(color).multiplyScalar(0.8 + Math.random() * 0.35);
    this.mesh.setColorAt(slot, this._c);
    this.mesh.instanceColor.needsUpdate = true;
  }
  update(dt, coll) {
    if (!this.list.length) return;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const d = this.list[i];
      d.life -= dt;
      if (d.life <= 0) { this.mesh.setMatrixAt(d.slot, this._m.makeScale(0, 0, 0)); this.free.push(d.slot); this.list.splice(i, 1); continue; }
      if (!d.rest) {
        d.vy -= 18 * dt;
        d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
        d.rx += d.ax * dt; d.ry += d.ay * dt; d.rz += d.az * dt;
        const g = coll.groundAt(d.x, d.z, d.y + 0.3, 0.05) + Math.min(d.sx, d.sy, d.sz) * 0.5;
        if (d.y < g) {
          d.y = g;
          if (Math.abs(d.vy) < 1.5) { d.rest = true; d.vx = d.vz = 0; }
          d.vy = -d.vy * 0.3; d.vx *= 0.55; d.vz *= 0.55; d.ax *= 0.5; d.ay *= 0.5; d.az *= 0.5;
        }
      }
      const shrink = d.life < 1 ? d.life : 1;
      this._e.set(d.rx, d.ry, d.rz); this._q.setFromEuler(this._e);
      this._p.set(d.x, d.y, d.z); this._s.set(d.sx * shrink, d.sy * shrink, d.sz * shrink);
      this._m.compose(this._p, this._q, this._s);
      this.mesh.setMatrixAt(d.slot, this._m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class Effects {
  constructor(game) {
    this.game = game;
    const scene = game.scene;
    this.smoke = new Particles(scene, 3000, getTexture('smoke'), false);
    this.glow = new Particles(scene, 2500, getTexture('spark'), true);
    this.flashes = new Particles(scene, 200, getTexture('flash'), true);
    this.tracers = new Tracers(scene, 1400);
    this.holes = new Decals(scene, 450, 'bullethole', 0.13);
    this.scorch = new Decals(scene, 60, 'scorch', 4.2);
    this.debris = new Debris(scene, 500);
    this.lights = [];
    for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xffaa55, 0, 20, 2); l.castShadow = false; scene.add(l); this.lights.push({ light: l, t: 0, dur: 1, i0: 0 }); }
    this.emitters = [];
    this.trauma = 0;
    this.q = 1;
    this.hidden = [this.smoke.mesh, this.glow.mesh, this.flashes.mesh, this.tracers.mesh, this.holes.mesh, this.scorch.mesh];
  }

  setQuality(s) {
    this.q = { low: 0.35, medium: 0.65, high: 1 }[s.get('particles')] || 1;
    this.decalsOn = s.get('decals');
    this.debrisOn = s.get('debris');
    this.shakeOn = s.get('screenShake');
    this.holes.mesh.visible = this.scorch.mesh.visible = this.decalsOn;
  }

  count(n) { return Math.max(1, Math.round(n * this.q)); }

  flashLight(x, y, z, color, intensity, dist, dur) {
    // pick the slot with lowest remaining intensity
    let best = this.lights[0];
    for (const l of this.lights) if (l.t / l.dur * l.i0 < best.t / best.dur * best.i0) best = l;
    best.light.position.set(x, y, z); best.light.color.set(color); best.light.distance = dist;
    best.i0 = intensity; best.t = dur; best.dur = dur;
  }

  shake(amount, x, y, z) {
    if (!this.shakeOn) return;
    let a = amount;
    if (x !== undefined) {
      const cam = this.game.camera.position;
      const d = Math.hypot(cam.x - x, cam.y - y, cam.z - z);
      a = amount * Math.max(0, 1 - d / 60);
    }
    this.trauma = Math.min(1, this.trauma + a);
  }

  muzzle(x, y, z, dx, dy, dz, scale = 1, suppressed = false, nearCamera = false) {
    if (!suppressed) {
      this.flashes.emit(x, y, z, 0, 0, 0, 0.05, 0.45 * scale, 0.65 * scale, [1, 0.8, 0.45, 1], [1, 0.5, 0.2, 0], 0, 0);
      this.flashes.emit(x + dx * 0.15, y + dy * 0.15, z + dz * 0.15, dx * 2, dy * 2, dz * 2, 0.04, 0.3 * scale, 0.5 * scale, [1, 0.9, 0.6, 1], [1, 0.6, 0.2, 0], 0, 0);
      this.flashLight(x, y, z, 0xffb060, nearCamera ? 6 : 12, 12, 0.06);
    }
    if (Math.random() < this.q) this.smoke.emit(x + dx * 0.2, y + dy * 0.2, z + dz * 0.2, dx * 1.5 + rand(-0.2, 0.2), dy * 1.5 + 0.4, dz * 1.5 + rand(-0.2, 0.2), 0.8, 0.15, 0.9, [0.8, 0.8, 0.8, 0.22], [0.8, 0.8, 0.8, 0], 2, -0.3, 1);
  }

  impact(x, y, z, nx, ny, nz, mat, box) {
    const q = this.q;
    switch (mat) {
      case 'flesh':
        for (let i = 0; i < this.count(6); i++) this.smoke.emit(x, y, z, nx * 1.5 + rand(-1, 1), ny * 1.5 + rand(-0.5, 1), nz * 1.5 + rand(-1, 1), 0.35, 0.08, 0.5, [0.55, 0.04, 0.03, 0.85], [0.4, 0.02, 0.02, 0], 4, 3);
        return;
      case 'water':
        for (let i = 0; i < this.count(10); i++) this.smoke.emit(x, y, z, rand(-1, 1), rand(2, 5), rand(-1, 1), 0.6, 0.1, 0.5, [0.9, 0.95, 1, 0.7], [0.9, 0.95, 1, 0], 1, 9);
        return;
      case 'metal': case 'container':
        for (let i = 0; i < this.count(10); i++) this.glow.emit(x, y, z, nx * 4 + rand(-3, 3), ny * 4 + rand(-1, 4), nz * 4 + rand(-3, 3), rand(0.15, 0.4), 0.06, 0.02, [1, 0.8, 0.4, 1], [1, 0.4, 0.1, 0], 1, 12);
        this.smoke.emit(x, y, z, nx, ny, nz, 0.5, 0.1, 0.4, [0.5, 0.5, 0.5, 0.3], [0.5, 0.5, 0.5, 0], 2, 0);
        break;
      default: {
        const col = this.matColor(mat);
        const n = this.count(5);
        for (let i = 0; i < n; i++) this.smoke.emit(x + nx * 0.05, y + ny * 0.05, z + nz * 0.05, nx * rand(1, 3) + rand(-0.6, 0.6), ny * rand(1, 3) + rand(0, 1.2), nz * rand(1, 3) + rand(-0.6, 0.6), rand(0.5, 1.1), 0.1, rand(0.5, 0.9), [col[0], col[1], col[2], 0.55], [col[0], col[1], col[2], 0], 3, 1.2, 1);
        if (mat === 'stone' || mat === 'concrete' || mat === 'brick' || mat === 'rock') for (let i = 0; i < this.count(3); i++) this.glow.emit(x, y, z, nx * 3 + rand(-2, 2), ny * 3 + rand(0, 3), nz * 3 + rand(-2, 2), 0.12, 0.04, 0.02, [1, 0.85, 0.6, 1], [1, 0.5, 0.2, 0], 1, 10);
        for (let i = 0; i < this.count(4); i++) this.smoke.emit(x, y, z, nx * 3 + rand(-2, 2), ny * 3 + rand(1, 4), nz * 3 + rand(-2, 2), 0.6, 0.04, 0.04, [col[0] * 0.7, col[1] * 0.7, col[2] * 0.7, 1], [col[0] * 0.7, col[1] * 0.7, col[2] * 0.7, 1], 0.5, 14);
      }
    }
    if (this.decalsOn && q > 0.2) this.holes.add(x, y, z, nx, ny, nz, box);
  }

  matColor(mat) {
    switch (mat) {
      case 'wood': return [0.55, 0.42, 0.3];
      case 'plaster': return [0.85, 0.82, 0.76];
      case 'brick': return [0.7, 0.48, 0.38];
      case 'concrete': case 'stone': case 'rock': return [0.68, 0.67, 0.64];
      case 'sand': return [0.78, 0.7, 0.52];
      case 'hay': return [0.85, 0.75, 0.45];
      case 'grass': return [0.45, 0.4, 0.28];
      case 'dirt': return [0.5, 0.42, 0.32];
      default: return [0.55, 0.47, 0.36];
    }
  }

  explosion(x, y, z, scale = 1, opts = {}) {
    const q = this.q;
    this.flashLight(x, y + 1, z, 0xff9a40, 60 * scale, 30 * scale, 0.35);
    this.flashes.emit(x, y + 0.5, z, 0, 0, 0, 0.12, 2 * scale, 6 * scale, [1, 0.8, 0.5, 1], [1, 0.4, 0.1, 0], 0, 0);
    for (let i = 0; i < this.count(18 * scale); i++) {
      const a = Math.random() * 6.28, u = Math.random();
      const sp = rand(3, 9) * scale;
      this.glow.emit(x, y + 0.5, z, Math.cos(a) * sp * (1 - u), rand(2, 8) * scale, Math.sin(a) * sp * (1 - u), rand(0.25, 0.6), 1.6 * scale, 3.5 * scale, [1, 0.62, 0.25, 0.9], [0.8, 0.2, 0.05, 0], 4, -1, 2);
    }
    for (let i = 0; i < this.count(30 * scale); i++) this.glow.emit(x, y + 0.5, z, rand(-14, 14), rand(4, 18), rand(-14, 14), rand(0.4, 1.2), 0.12, 0.05, [1, 0.8, 0.4, 1], [1, 0.4, 0.1, 0], 0.5, 18);
    for (let i = 0; i < this.count(16 * scale); i++) {
      const g = rand(0.12, 0.3);
      this.smoke.emit(x + rand(-1.5, 1.5) * scale, y + rand(0, 2) * scale, z + rand(-1.5, 1.5) * scale, rand(-2, 2), rand(1.5, 5) * scale, rand(-2, 2), rand(4, 9), 2.2 * scale, 8 * scale, [g, g, g * 0.95, 0.75], [0.35, 0.34, 0.33, 0], 0.8, -0.4, 0.6);
    }
    const dcol = opts.dirt || [0.45, 0.38, 0.28];
    for (let i = 0; i < this.count(14 * scale); i++) { const a = Math.random() * 6.28; this.smoke.emit(x, y + 0.2, z, Math.cos(a) * rand(6, 12) * scale, rand(0.2, 1.5), Math.sin(a) * rand(6, 12) * scale, rand(1.5, 3), 1.2 * scale, 4 * scale, [dcol[0], dcol[1], dcol[2], 0.55], [dcol[0], dcol[1], dcol[2], 0], 2.5, 0.2, 0.5); }
    for (let i = 0; i < this.count(16 * scale); i++) this.smoke.emit(x, y + 0.3, z, rand(-7, 7) * scale, rand(5, 14) * scale, rand(-7, 7) * scale, rand(0.8, 1.6), 0.15, 0.15, [dcol[0] * 0.6, dcol[1] * 0.6, dcol[2] * 0.6, 1], [dcol[0] * 0.6, dcol[1] * 0.6, dcol[2] * 0.6, 1], 0.3, 16);
    if (this.debrisOn) for (let i = 0; i < Math.round(8 * scale * q); i++) { const s = rand(0.08, 0.25); this.debris.spawn(x, y + 0.4, z, rand(-7, 7), rand(5, 12), rand(-7, 7), s, s, s, opts.debrisColor || 0x5a4a3a, rand(4, 8)); }
    if (this.decalsOn && opts.ground) this.scorch.add(x, y + 0.02, z, opts.nx ?? 0, opts.ny ?? 1, opts.nz ?? 0, opts.box, scale);
    if (opts.fire) this.addFire(x, y, z, opts.fire, scale * 0.6);
    this.shake(0.55 * scale, x, y, z);
  }

  pieceDestroyed(pc, cause) {
    const m = MATS[pc.mat] || MATS.plaster;
    const cx = (pc.minX + pc.maxX) / 2, cy = (pc.minY + pc.maxY) / 2, cz = (pc.minZ + pc.maxZ) / 2;
    const sx = pc.maxX - pc.minX, sy = pc.maxY - pc.minY, sz = pc.maxZ - pc.minZ;
    const col = this.matColor(pc.mat);
    const n = this.count(6);
    for (let i = 0; i < n; i++) this.smoke.emit(cx + rand(-sx, sx) * 0.4, cy + rand(-sy, sy) * 0.4, cz + rand(-sz, sz) * 0.4, rand(-1, 1), rand(0, 1.5), rand(-1, 1), rand(2.5, 5), 0.8, 3.2, [col[0], col[1], col[2], 0.6], [col[0], col[1], col[2], 0], 1.2, -0.1, 0.5);
    if (this.debrisOn) {
      const chunks = Math.max(2, Math.round(Math.min(8, sx * sy * sz * 14 + 2) * this.q));
      for (let i = 0; i < chunks; i++) {
        const s = Math.min(0.45, Math.max(sx, sy, sz) * rand(0.15, 0.35));
        this.debris.spawn(cx + rand(-sx, sx) * 0.4, cy + rand(-sy, sy) * 0.4, cz + rand(-sz, sz) * 0.4, rand(-3, 3), rand(0, 4), rand(-3, 3), s * rand(0.6, 1.4), s * rand(0.5, 1.2), s * rand(0.6, 1.4), m.debris, rand(6, 12));
      }
    }
    this.holes.removeOwner(pc);
    this.game.audio && this.game.audio.play3d(m.sound === 'wood' ? 'breakWood' : m.sound === 'metal' ? 'breakMetal' : 'breakStone', cx, cy, cz, { vol: 0.8 });
  }

  addSmokeScreen(x, y, z, dur = 16) {
    const now = this.game.time;
    const start = now;
    const o = { x, y: y + 1.5, z, r: 6.5, strength: 0.96, until: now + dur, grow: (t) => Math.min(1, (t - start) / 2.5) * (t > start + dur - 3 ? Math.max(0.2, (start + dur - t) / 3) : 1) };
    this.game.world.collision.addDynamicSoft(o);
    this.emitters.push({ type: 'smoke', x, y, z, t: dur, rate: 26, acc: 0 });
  }

  addFire(x, y, z, dur = 8, scale = 1) { this.emitters.push({ type: 'fire', x, y, z, t: dur, rate: 22 * scale, acc: 0, scale }); }

  update(dt) {
    // emitters
    for (let i = this.emitters.length - 1; i >= 0; i--) {
      const e = this.emitters[i];
      e.t -= dt;
      if (e.t <= 0) { this.emitters.splice(i, 1); continue; }
      e.acc += dt * e.rate * this.q;
      while (e.acc >= 1) {
        e.acc -= 1;
        if (e.type === 'smoke') {
          const g = rand(0.72, 0.88);
          this.smoke.emit(e.x + rand(-0.8, 0.8), e.y + 0.3, e.z + rand(-0.8, 0.8), rand(-1.6, 1.6), rand(0.4, 1.5), rand(-1.6, 1.6), rand(5, 8), 1.5, 9, [g, g, g, 0.7], [g, g, g, 0], 0.35, -0.06, 0.3);
        } else if (e.type === 'fire') {
          const s = e.scale;
          this.glow.emit(e.x + rand(-0.6, 0.6) * s, e.y + 0.2, e.z + rand(-0.6, 0.6) * s, rand(-0.3, 0.3), rand(1.5, 3) * s, rand(-0.3, 0.3), rand(0.4, 0.9), 0.9 * s, 0.2, [1, 0.55, 0.15, 0.9], [0.9, 0.2, 0.05, 0], 0.5, -1, 1);
          if (Math.random() < 0.3) this.smoke.emit(e.x, e.y + 1.5 * s, e.z, rand(-0.4, 0.4), rand(1, 2), rand(-0.4, 0.4), rand(3, 6), 0.8 * s, 4 * s, [0.12, 0.11, 0.1, 0.55], [0.3, 0.3, 0.3, 0], 0.3, -0.3, 0.4);
          if (Math.random() < 0.15) this.flashLight(e.x, e.y + 1, e.z, 0xff8a30, 6 * s, 10, 0.25);
        }
      }
    }
    this.smoke.update(dt); this.glow.update(dt); this.flashes.update(dt);
    this.debris.update(dt, this.game.world.collision);
    for (const l of this.lights) {
      if (l.t > 0) { l.t -= dt; l.light.intensity = Math.max(0, l.t / l.dur) * l.i0; }
      else l.light.intensity = 0;
    }
    this.trauma = Math.max(0, this.trauma - dt * 1.4);
  }

  setLighting(env) {
    const t = env.time;
    const light = new THREE.Color().setRGB(...t.sky).multiplyScalar(t.hemiI * 0.8).add(new THREE.Color().setRGB(...t.sun).multiplyScalar(t.sunI * 0.22));
    this.smoke.uniforms.uLight.value.copy(light);
    for (const p of [this.smoke, this.glow, this.flashes]) { p.uniforms.uFogColor.value.copy(env.fog.color); p.uniforms.uFogDensity.value = env.fog.density; }
  }
}
