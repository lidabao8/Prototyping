// Heightfield terrain: generation (noise + rivers + roads + flattened building pads), queries and rendering.
import * as THREE from 'three';
import { clamp, lerp, smoothstep, makeNoise2D, distToSegment2 } from '../core/math.js';
import { getTexture } from '../render/textures.js';
import { patchMaterial } from '../render/materials.js';

export class Terrain {
  constructor(def, layout) {
    this.def = def;
    this.size = def.size;
    this.half = def.size / 2;
    this.cell = def.cell;
    this.n = Math.round(def.size / def.cell) + 1;
    this.waterLevel = def.waterLevel;
    this.noise = makeNoise2D(def.seed);
    this.noise2 = makeNoise2D(def.seed + 101);
    this.layout = layout;
    this.heights = new Float32Array(this.n * this.n);
    this.roadMask = new Float32Array(this.n * this.n);
    this.riverDist = new Float32Array(this.n * this.n).fill(1e4);
    this.splat = new Float32Array(this.n * this.n * 4);
    this.grass = new Uint8Array(this.n * this.n);
    this.generate();
  }

  idx(i, j) { return j * this.n + i; }
  worldX(i) { return -this.half + i * this.cell; }

  generate() {
    const { n, cell, half, def, noise } = this;
    const H = this.heights;
    // 1. base
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = -half + i * cell, z = -half + j * cell;
      H[j * n + i] = def.height(x, z, noise, this.noise2);
    }
    // 2. rivers
    for (const rv of this.layout.rivers || []) {
      const pts = rv.points;
      for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
        const x = -half + i * cell, z = -half + j * cell;
        let best = 1e12;
        for (let k = 0; k < pts.length - 1; k++) {
          const d2 = distToSegment2(x, z, pts[k][0], pts[k][1], pts[k + 1][0], pts[k + 1][1]);
          if (d2 < best) best = d2;
        }
        const d = Math.sqrt(best) + noise(x * 0.03, z * 0.03) * 2.5;
        const id = j * n + i;
        if (d < this.riverDist[id]) this.riverDist[id] = d;
        const hw = rv.width / 2;
        let depth = rv.depth;
        for (const f of rv.fords || []) {
          const fd = Math.hypot(x - f.x, z - f.z);
          if (fd < f.r) depth = lerp(f.depth, depth, smoothstep(f.r * 0.5, f.r, fd));
        }
        let target;
        if (d < hw) target = this.waterLevel - depth * (1 - (d / hw) * (d / hw)) - 0.3;
        else target = this.waterLevel - 0.3 + (d - hw) * rv.bankSlope;
        if (target < H[id]) H[id] = target;
      }
    }
    // 3. roads: blend toward blurred height
    const blurred = this.blur(H, 4);
    for (const rd of this.layout.roads || []) {
      const pts = rd.points, hw = rd.width / 2;
      const minX = Math.min(...pts.map(p => p[0])) - hw - 8, maxX = Math.max(...pts.map(p => p[0])) + hw + 8;
      const minZ = Math.min(...pts.map(p => p[1])) - hw - 8, maxZ = Math.max(...pts.map(p => p[1])) + hw + 8;
      const i0 = Math.max(0, Math.floor((minX + half) / cell)), i1 = Math.min(n - 1, Math.ceil((maxX + half) / cell));
      const j0 = Math.max(0, Math.floor((minZ + half) / cell)), j1 = Math.min(n - 1, Math.ceil((maxZ + half) / cell));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const x = -half + i * cell, z = -half + j * cell;
        let best = 1e12;
        for (let k = 0; k < pts.length - 1; k++) {
          const d2 = distToSegment2(x, z, pts[k][0], pts[k][1], pts[k + 1][0], pts[k + 1][1]);
          if (d2 < best) best = d2;
        }
        const d = Math.sqrt(best);
        const m = 1 - smoothstep(hw * 0.7, hw + 1.5, d);
        const id = j * n + i;
        if (m > this.roadMask[id]) this.roadMask[id] = m;
        const flat = 1 - smoothstep(hw, hw + 7, d);
        if (this.riverDist[id] > 3) H[id] = lerp(H[id], blurred[id] - 0.08 * m, flat * 0.85);
      }
    }
    // 4. flat zones (building pads, flags, HQ)
    for (const zn of this.layout.flatZones || []) {
      const target = zn.h !== undefined ? zn.h : this.sampleAvg(H, zn.x, zn.z, zn.hw, zn.hd);
      zn.h = target;
      const m = zn.margin || 4;
      const i0 = Math.max(0, Math.floor((zn.x - zn.hw - m + half) / cell)), i1 = Math.min(n - 1, Math.ceil((zn.x + zn.hw + m + half) / cell));
      const j0 = Math.max(0, Math.floor((zn.z - zn.hd - m + half) / cell)), j1 = Math.min(n - 1, Math.ceil((zn.z + zn.hd + m + half) / cell));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const x = -half + i * cell, z = -half + j * cell;
        const dx = Math.max(0, Math.abs(x - zn.x) - zn.hw), dz = Math.max(0, Math.abs(z - zn.z) - zn.hd);
        const d = Math.sqrt(dx * dx + dz * dz);
        const w = 1 - smoothstep(0, m, d);
        const id = j * n + i;
        H[id] = lerp(H[id], target, w * (zn.strength ?? 1));
        if (zn.noGrass && d < 1.5) this.grass[id] = 255; // mark (temp) -> handled in splat
      }
    }
    this.computeNormals();
    this.computeSplat();
    let maxH = -Infinity, minH = Infinity;
    for (let i = 0; i < H.length; i++) { if (H[i] > maxH) maxH = H[i]; if (H[i] < minH) minH = H[i]; }
    this.maxH = maxH; this.minH = minH;
  }

  blur(src, rad) {
    const { n } = this;
    const tmp = new Float32Array(src.length), out = new Float32Array(src.length);
    for (let j = 0; j < n; j++) {
      let acc = 0, cnt = 0;
      for (let i = -rad; i <= rad; i++) { const ii = clamp(i, 0, n - 1); acc += src[j * n + ii]; cnt++; }
      for (let i = 0; i < n; i++) {
        tmp[j * n + i] = acc / cnt;
        const a = clamp(i - rad, 0, n - 1), b = clamp(i + rad + 1, 0, n - 1);
        acc += src[j * n + b] - src[j * n + a];
      }
    }
    for (let i = 0; i < n; i++) {
      let acc = 0, cnt = 0;
      for (let j = -rad; j <= rad; j++) { const jj = clamp(j, 0, n - 1); acc += tmp[jj * n + i]; cnt++; }
      for (let j = 0; j < n; j++) {
        out[j * n + i] = acc / cnt;
        const a = clamp(j - rad, 0, n - 1), b = clamp(j + rad + 1, 0, n - 1);
        acc += tmp[b * n + i] - tmp[a * n + i];
      }
    }
    return out;
  }

  sampleAvg(H, x, z, hw, hd) {
    let s = 0, c = 0;
    for (let dz = -hd; dz <= hd; dz += Math.max(1, hd / 3)) for (let dx = -hw; dx <= hw; dx += Math.max(1, hw / 3)) { s += this.heightAtArr(H, x + dx, z + dz); c++; }
    return s / c;
  }

  heightAtArr(H, x, z) {
    const { n, cell, half } = this;
    let gx = (x + half) / cell, gz = (z + half) / cell;
    gx = clamp(gx, 0, n - 1.001); gz = clamp(gz, 0, n - 1.001);
    const i = Math.floor(gx), j = Math.floor(gz);
    const fx = gx - i, fz = gz - j;
    const a = H[j * n + i], b = H[j * n + i + 1], c = H[(j + 1) * n + i], d = H[(j + 1) * n + i + 1];
    return (a * (1 - fx) + b * fx) * (1 - fz) + (c * (1 - fx) + d * fx) * fz;
  }

  heightAt(x, z) { return this.heightAtArr(this.heights, x, z); }

  computeNormals() {
    const { n, cell } = this;
    const H = this.heights;
    this.normals = new Float32Array(n * n * 3);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const hl = H[j * n + Math.max(0, i - 1)], hr = H[j * n + Math.min(n - 1, i + 1)];
      const hd = H[Math.max(0, j - 1) * n + i], hu = H[Math.min(n - 1, j + 1) * n + i];
      let nx = (hl - hr), ny = 2 * cell, nz = (hd - hu);
      const l = Math.hypot(nx, ny, nz);
      const k = (j * n + i) * 3;
      this.normals[k] = nx / l; this.normals[k + 1] = ny / l; this.normals[k + 2] = nz / l;
    }
  }

  normalAt(x, z) {
    const { n, cell, half } = this;
    const i = clamp(Math.round((x + half) / cell), 0, n - 1), j = clamp(Math.round((z + half) / cell), 0, n - 1);
    const k = (j * n + i) * 3;
    return [this.normals[k], this.normals[k + 1], this.normals[k + 2]];
  }

  computeSplat() {
    const { n, cell, half, def } = this;
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const id = j * n + i;
      const x = -half + i * cell, z = -half + j * cell;
      const h = this.heights[id];
      const slope = 1 - this.normals[id * 3 + 1];
      const pad = this.grass[id] === 255;
      const w = def.splat(x, z, h, slope, this.roadMask[id], this.riverDist[id], this.noise, pad);
      let s = w[0] + w[1] + w[2] + w[3] || 1;
      this.splat[id * 4] = w[0] / s; this.splat[id * 4 + 1] = w[1] / s; this.splat[id * 4 + 2] = w[2] / s; this.splat[id * 4 + 3] = w[3] / s;
      let g = def.grassDensity(x, z, h, slope, this.roadMask[id], this.riverDist[id], this.noise, w);
      if (pad) g = 0;
      if (this.waterLevel !== null && h < this.waterLevel + 0.3) g = 0;
      this.grass[id] = clamp(Math.round(g * 255), 0, 254);
    }
  }

  // Ray march against heightfield; returns t or Infinity.
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    if (oy > this.maxH && dy >= 0) return Infinity;
    const step = Math.max(0.5, this.cell * 0.5);
    let t = 0, prevT = 0;
    let prevDiff = oy - this.heightAt(ox, oz);
    if (prevDiff < 0) return 0;
    while (t < maxT) {
      t = Math.min(maxT, t + step);
      const x = ox + dx * t, y = oy + dy * t, z = oz + dz * t;
      if (y > this.maxH + 0.1 && dy >= 0) return Infinity;
      const diff = y - this.heightAt(x, z);
      if (diff < 0) {
        // refine by bisection
        let a = prevT, b = t;
        for (let k = 0; k < 6; k++) {
          const m = (a + b) * 0.5;
          const dm = (oy + dy * m) - this.heightAt(ox + dx * m, oz + dz * m);
          if (dm < 0) b = m; else a = m;
        }
        return a;
      }
      prevT = t; prevDiff = diff;
      if (t >= maxT) break;
    }
    return Infinity;
  }

  // --- Rendering ---
  buildMesh(scene) {
    const { n, cell, half, def } = this;
    const group = new THREE.Group();
    group.name = 'terrain';
    const tex = def.terrainTextures.map(getTexture);
    const noiseTex = getTexture('noise');
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0 });
    const uniforms = {
      uT0: { value: tex[0] }, uT1: { value: tex[1] }, uT2: { value: tex[2] }, uT3: { value: tex[3] },
      uNoise: { value: noiseTex },
      uTint0: { value: new THREE.Color().setRGB(...def.palette.t0) }, uTint1: { value: new THREE.Color().setRGB(...def.palette.t1) },
      uTint2: { value: new THREE.Color().setRGB(...def.palette.t2) }, uTint3: { value: new THREE.Color().setRGB(...def.palette.t3) },
      uMacro: { value: new THREE.Color().setRGB(...def.palette.macro) },
    };
    patchMaterial(mat, 'terrain', (shader) => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nattribute vec4 splat;\nvarying vec4 vSplat;\nvarying vec3 vTPos;\nvarying vec3 vTNrm;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSplat = splat;\nvTPos = (modelMatrix * vec4(position,1.0)).xyz;\nvTNrm = normal;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform sampler2D uT0; uniform sampler2D uT1; uniform sampler2D uT2; uniform sampler2D uT3; uniform sampler2D uNoise;
          uniform vec3 uTint0; uniform vec3 uTint1; uniform vec3 uTint2; uniform vec3 uTint3; uniform vec3 uMacro;
          varying vec4 vSplat; varying vec3 vTPos; varying vec3 vTNrm;`)
        .replace('#include <map_fragment>', `
          vec2 tuv = vTPos.xz * 0.16;
          float macroN = texture2D(uNoise, vTPos.xz * 0.0035).r;
          float macroN2 = texture2D(uNoise, vTPos.xz * 0.019).g;
          vec3 c0 = texture2D(uT0, tuv).rgb * uTint0;
          vec3 c0b = texture2D(uT0, tuv * 0.37 + 0.5).rgb * uTint0;
          c0 = mix(c0, c0b, 0.45);
          vec3 c1 = texture2D(uT1, tuv * 0.8).rgb * uTint1;
          vec3 an = abs(normalize(vTNrm)); an = pow(an, vec3(3.0)); an /= (an.x + an.y + an.z);
          vec3 c2 = (texture2D(uT2, vTPos.zy * 0.12).rgb * an.x + texture2D(uT2, vTPos.xz * 0.12).rgb * an.y + texture2D(uT2, vTPos.xy * 0.12).rgb * an.z) * uTint2;
          vec3 c3 = texture2D(uT3, tuv * 1.2).rgb * uTint3;
          vec4 sw = vSplat;
          // sharpen blend with noise for natural edges
          float hn = macroN2 * 0.5;
          sw = max(sw + vec4(hn, 0.0, 0.0, 0.0) * sw.x - 0.08, 0.0);
          sw /= max(sw.x + sw.y + sw.z + sw.w, 0.0001);
          vec3 tcol = c0 * sw.x + c1 * sw.y + c2 * sw.z + c3 * sw.w;
          tcol *= mix(vec3(1.0), uMacro, smoothstep(0.35, 0.75, macroN) * 0.6);
          tcol *= 0.88 + macroN2 * 0.24;
          diffuseColor.rgb *= tcol;`);
    });
    mat.userData.terrainUniforms = uniforms;
    this.material = mat;

    const CH = 48; // cells per chunk
    const cells = n - 1;
    for (let cj = 0; cj < cells; cj += CH) for (let ci = 0; ci < cells; ci += CH) {
      const w = Math.min(CH, cells - ci), d = Math.min(CH, cells - cj);
      const vcount = (w + 1) * (d + 1);
      const pos = new Float32Array(vcount * 3), nrm = new Float32Array(vcount * 3), spl = new Float32Array(vcount * 4);
      let k = 0;
      for (let j = 0; j <= d; j++) for (let i = 0; i <= w; i++) {
        const gi = ci + i, gj = cj + j, id = gj * n + gi;
        pos[k * 3] = -half + gi * cell; pos[k * 3 + 1] = this.heights[id]; pos[k * 3 + 2] = -half + gj * cell;
        nrm[k * 3] = this.normals[id * 3]; nrm[k * 3 + 1] = this.normals[id * 3 + 1]; nrm[k * 3 + 2] = this.normals[id * 3 + 2];
        spl[k * 4] = this.splat[id * 4]; spl[k * 4 + 1] = this.splat[id * 4 + 1]; spl[k * 4 + 2] = this.splat[id * 4 + 2]; spl[k * 4 + 3] = this.splat[id * 4 + 3];
        k++;
      }
      const idxArr = new Uint32Array(w * d * 6);
      let q = 0;
      for (let j = 0; j < d; j++) for (let i = 0; i < w; i++) {
        const a = j * (w + 1) + i, b = a + 1, c = a + (w + 1), e = c + 1;
        // alternate diagonal for less artifacting
        if ((i + j) & 1) { idxArr[q++] = a; idxArr[q++] = c; idxArr[q++] = b; idxArr[q++] = b; idxArr[q++] = c; idxArr[q++] = e; }
        else { idxArr[q++] = a; idxArr[q++] = c; idxArr[q++] = e; idxArr[q++] = a; idxArr[q++] = e; idxArr[q++] = b; }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
      g.setAttribute('splat', new THREE.BufferAttribute(spl, 4));
      g.setIndex(new THREE.BufferAttribute(idxArr, 1));
      g.computeBoundingBox(); g.computeBoundingSphere();
      const m = new THREE.Mesh(g, mat);
      m.receiveShadow = true; m.castShadow = true;
      group.add(m);
    }
    scene.add(group);
    this.mesh = group;

    // Data textures for GPU-side grass & water
    const hdata = new Uint16Array(n * n);
    for (let i = 0; i < n * n; i++) hdata[i] = THREE.DataUtils.toHalfFloat(this.heights[i]);
    this.heightTex = new THREE.DataTexture(hdata, n, n, THREE.RedFormat, THREE.HalfFloatType);
    this.heightTex.minFilter = this.heightTex.magFilter = THREE.LinearFilter;
    this.heightTex.needsUpdate = true;
    this.grassTex = new THREE.DataTexture(this.grass, n, n, THREE.RedFormat, THREE.UnsignedByteType);
    this.grassTex.minFilter = this.grassTex.magFilter = THREE.LinearFilter;
    this.grassTex.needsUpdate = true;
    return group;
  }

  // Top-down colored map image for minimap/big map.
  renderMapImage(size = 512, structures) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const img = g.createImageData(size, size);
    const d = img.data;
    const pal = this.def.mapColors;
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const wx = -this.half + (x + 0.5) / size * this.size, wz = -this.half + (y + 0.5) / size * this.size;
      const h = this.heightAt(wx, wz);
      const i = Math.round((wx + this.half) / this.cell), j = Math.round((wz + this.half) / this.cell);
      const id = clamp(j, 0, this.n - 1) * this.n + clamp(i, 0, this.n - 1);
      const s = [this.splat[id * 4], this.splat[id * 4 + 1], this.splat[id * 4 + 2], this.splat[id * 4 + 3]];
      let r = 0, gg = 0, b = 0;
      for (let k = 0; k < 4; k++) { r += pal[k][0] * s[k]; gg += pal[k][1] * s[k]; b += pal[k][2] * s[k]; }
      // hillshade
      const hx = this.heightAt(wx + 2, wz) - this.heightAt(wx - 2, wz);
      const hz = this.heightAt(wx, wz + 2) - this.heightAt(wx, wz - 2);
      const shade = clamp(1 - (hx * 0.5 + hz * 0.5) * 0.12, 0.6, 1.35);
      r *= shade; gg *= shade; b *= shade;
      if (this.waterLevel !== null && h < this.waterLevel) { const dep = clamp((this.waterLevel - h) / 4, 0, 1); r = lerp(90, 40, dep); gg = lerp(130, 85, dep); b = lerp(150, 120, dep); }
      const k = (y * size + x) * 4;
      d[k] = clamp(r, 0, 255); d[k + 1] = clamp(gg, 0, 255); d[k + 2] = clamp(b, 0, 255); d[k + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    if (structures) {
      const sc = size / this.size;
      for (const s of structures) {
        g.fillStyle = s.color || 'rgba(70,64,58,0.9)';
        g.fillRect((s.minX + this.half) * sc, (s.minZ + this.half) * sc, Math.max(1, (s.maxX - s.minX) * sc), Math.max(1, (s.maxZ - s.minZ) * sc));
      }
    }
    return c;
  }
}
