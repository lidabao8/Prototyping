import * as THREE from 'three';

const VS = `
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC;
uniform float scale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(size * scale / max(0.1, -mv.z), 0.0, 256.0);
  vA = alpha; vC = color;
}`;
const FS = `
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = (1.0 - r);
  gl_FragColor = vec4(vC, vA * a * a);
}`;

class ParticleSet {
  constructor(scene, max, additive) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.a0 = new Float32Array(max);
    this.n = 0;
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('color', this.aCol);
    g.setAttribute('size', this.aSize); g.setAttribute('alpha', this.aAlpha);
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { scale: { value: 600 } },
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.geo = g;
    scene.add(this.points);
  }

  spawn(p, v, color, size, life, opts = {}) {
    let i = this.n;
    if (i >= this.max) i = Math.floor(Math.random() * this.max); else this.n++;
    this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
    this.vel[i * 3] = v ? v.x : 0; this.vel[i * 3 + 1] = v ? v.y : 0; this.vel[i * 3 + 2] = v ? v.z : 0;
    const c = color;
    this.col[i * 3] = c.r; this.col[i * 3 + 1] = c.g; this.col[i * 3 + 2] = c.b;
    this.size0[i] = size; this.size[i] = size;
    this.life[i] = life; this.maxLife[i] = life;
    this.grow[i] = opts.grow || 0; this.drag[i] = opts.drag || 0;
    this.a0[i] = opts.alpha != null ? opts.alpha : 1;
    this.alpha[i] = this.a0[i];
  }

  update(dt) {
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        n--;
        if (i !== n) this.copy(n, i);
        i--;
        continue;
      }
      const k = i * 3, d = this.drag[i] ? Math.exp(-this.drag[i] * dt) : 1;
      this.vel[k] *= d; this.vel[k + 1] *= d; this.vel[k + 2] *= d;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      const f = this.life[i] / this.maxLife[i];
      this.alpha[i] = this.a0[i] * f;
      this.size[i] = this.size0[i] * (1 + this.grow[i] * (1 - f));
    }
    this.n = n;
    this.geo.setDrawRange(0, n);
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aSize.needsUpdate = this.aAlpha.needsUpdate = true;
  }

  copy(from, to) {
    for (let c = 0; c < 3; c++) {
      this.pos[to * 3 + c] = this.pos[from * 3 + c];
      this.vel[to * 3 + c] = this.vel[from * 3 + c];
      this.col[to * 3 + c] = this.col[from * 3 + c];
    }
    this.size[to] = this.size[from]; this.alpha[to] = this.alpha[from]; this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from]; this.size0[to] = this.size0[from]; this.grow[to] = this.grow[from];
    this.drag[to] = this.drag[from]; this.a0[to] = this.a0[from];
  }
}

const C = (hex) => new THREE.Color(hex);
const COLORS = { spark: C(0xffc977), white: C(0xffffff), gas: C(0xc8d8ea), fire: C(0xff7a2a), smoke: C(0x5a5f66), blood: C(0xa01818), cyan: C(0x9fe8ff) };

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.add = new ParticleSet(scene, 6000, true);
    this.alpha = new ParticleSet(scene, 3000, false);
    // tracers
    const MAXT = 400;
    this.trPos = new Float32Array(MAXT * 6);
    this.trCol = new Float32Array(MAXT * 6);
    const g = new THREE.BufferGeometry();
    this.trA = new THREE.BufferAttribute(this.trPos, 3).setUsage(THREE.DynamicDrawUsage);
    this.trC = new THREE.BufferAttribute(this.trCol, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.trA); g.setAttribute('color', this.trC);
    this.tracers = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.tracers.frustumCulled = false;
    this.trGeo = g; this.trMax = MAXT;
    scene.add(this.tracers);
    // flash lights
    this.lights = [0, 1, 2].map(() => { const l = new THREE.PointLight(0xffaa55, 0, 40, 1.2); scene.add(l); return { l, t: 0, i0: 0 }; });
    // decals
    this.decals = [];
    this.decalGeo = new THREE.CircleGeometry(0.09, 6);
    this.decalMat = new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    this.decalIdx = 0;
    this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3();
  }

  setScale(h, fov) { const s = h / (2 * Math.tan(fov * Math.PI / 360)); this.add.mat.uniforms.scale.value = s; this.alpha.mat.uniforms.scale.value = s; }

  sparks(p, n, normal, speed = 6, color = COLORS.spark) {
    const v = this._v;
    for (let i = 0; i < n; i++) {
      v.randomDirection();
      if (normal && v.dot(normal) < 0) v.addScaledVector(normal, -2 * v.dot(normal));
      v.multiplyScalar(speed * (0.3 + Math.random()));
      this.add.spawn(p, v, color, 0.05 + Math.random() * 0.05, 0.25 + Math.random() * 0.4);
    }
  }

  impact(p, n) {
    this.sparks(p, 7, n, 7);
    this.alpha.spawn(p, this._v2.copy(n).multiplyScalar(0.8), COLORS.smoke, 0.35, 0.8, { grow: 2, alpha: 0.5 });
    this.decal(p, n);
  }

  decal(p, n) {
    let d;
    if (this.decals.length < 160) { d = new THREE.Mesh(this.decalGeo, this.decalMat); this.scene.add(d); this.decals.push(d); }
    else { d = this.decals[this.decalIdx]; this.decalIdx = (this.decalIdx + 1) % this.decals.length; }
    d.position.copy(p).addScaledVector(n, 0.02);
    d.lookAt(this._v.copy(d.position).add(n));
  }

  suitHit(p, n, vel) {
    for (let i = 0; i < 8; i++) {
      const v = this._v.copy(n).multiplyScalar(2 + Math.random() * 3).add(this._v2.randomDirection().multiplyScalar(1.5));
      if (vel) v.add(vel);
      this.alpha.spawn(p, v, COLORS.gas, 0.18, 0.6, { grow: 3, alpha: 0.55 });
    }
    for (let i = 0; i < 5; i++) {
      const v = this._v.copy(n).multiplyScalar(1 + Math.random() * 2).add(this._v2.randomDirection());
      if (vel) v.add(vel);
      this.alpha.spawn(p, v, COLORS.blood, 0.06, 1.2, { alpha: 0.9 });
    }
  }

  gasJet(p, dir, vel, strength = 1) {
    const v = this._v.copy(dir).multiplyScalar(4 + Math.random() * 3).add(this._v2.randomDirection().multiplyScalar(0.8));
    if (vel) v.add(vel);
    this.alpha.spawn(p, v, COLORS.gas, 0.08 * strength, 0.35, { grow: 4, alpha: 0.35 });
  }

  thrusterPuff(p, dir, vel) {
    const v = this._v.copy(dir).multiplyScalar(6 + Math.random() * 4).add(this._v2.randomDirection().multiplyScalar(1.2));
    if (vel) v.add(vel);
    this.add.spawn(p, v, COLORS.cyan, 0.09, 0.18, { grow: 3, alpha: 0.25 });
  }

  muzzle(p, dir, vel, big) {
    const v = this._v;
    this.add.spawn(p, vel, COLORS.fire, big ? 0.6 : 0.35, 0.05, { alpha: 1 });
    this.add.spawn(p, vel, COLORS.white, big ? 0.3 : 0.18, 0.04, { alpha: 1 });
    for (let i = 0; i < (big ? 10 : 4); i++) {
      v.copy(dir).multiplyScalar(4 + Math.random() * 6).add(this._v2.randomDirection().multiplyScalar(2));
      if (vel) v.add(vel);
      this.alpha.spawn(p, v, COLORS.smoke, 0.12, 0.5, { grow: 3, alpha: 0.35 });
    }
  }

  explosion(p, r) {
    this.add.spawn(p, null, COLORS.white, r * 0.9, 0.12, { grow: 1 });
    this.add.spawn(p, null, COLORS.fire, r * 0.7, 0.35, { grow: 1.5 });
    const v = this._v;
    for (let i = 0; i < 90; i++) {
      v.randomDirection().multiplyScalar(r * (1 + Math.random() * 3));
      this.add.spawn(p, v, Math.random() < 0.5 ? COLORS.spark : COLORS.fire, 0.08 + Math.random() * 0.1, 0.5 + Math.random() * 0.8);
    }
    for (let i = 0; i < 26; i++) {
      v.randomDirection().multiplyScalar(r * 0.5 * Math.random());
      this.alpha.spawn(p, v, COLORS.smoke, 0.8 + Math.random() * 0.8, 1.6 + Math.random(), { grow: 3, alpha: 0.45 });
    }
    this.flash(p, 0xffaa55, 200);
  }

  flash(p, color, intensity) {
    const L = this.lights.reduce((a, b) => (a.t < b.t ? a : b));
    L.l.position.copy(p); L.l.color.setHex(color); L.t = 0.25; L.i0 = intensity; L.l.intensity = intensity;
  }

  update(dt, tracerList) {
    this.add.update(dt);
    this.alpha.update(dt);
    for (const L of this.lights) { if (L.t > 0) { L.t -= dt; L.l.intensity = Math.max(0, L.i0 * L.t / 0.25); } else L.l.intensity = 0; }
    // tracers
    let n = 0;
    for (const t of tracerList) {
      if (n >= this.trMax) break;
      const k = n * 6;
      this.trPos[k] = t.pos.x; this.trPos[k + 1] = t.pos.y; this.trPos[k + 2] = t.pos.z;
      const len = t.tail;
      this.trPos[k + 3] = t.pos.x - t.vel.x * len; this.trPos[k + 4] = t.pos.y - t.vel.y * len; this.trPos[k + 5] = t.pos.z - t.vel.z * len;
      const c = t.color;
      this.trCol[k] = c.r; this.trCol[k + 1] = c.g; this.trCol[k + 2] = c.b;
      this.trCol[k + 3] = c.r * 0.1; this.trCol[k + 4] = c.g * 0.1; this.trCol[k + 5] = c.b * 0.1;
      n++;
    }
    this.trGeo.setDrawRange(0, n * 2);
    this.trA.needsUpdate = this.trC.needsUpdate = true;
  }
}
export { COLORS };
