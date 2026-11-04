import * as THREE from 'three';
import { clamp, DEG } from './math.js';
import { WEAPONS, WeaponState, GRENADE } from './weapons.js';
import { buildGun, buildSoldier } from './models.js';

export const TEAM_COLORS = [0x3f8cff, 0xff8a2a];
export const TEAM_NAMES = ['BLUE', 'ORANGE'];
export const MODES = ['MANUAL', 'RATE DAMP', 'ATT HOLD', 'VEL MATCH'];
export const MODE_DESC = [
  'No assists. Every rotation and stop is your own counter-burn.',
  'Rotation is damped automatically when you stop steering. Linear drift remains.',
  'Holds your body attitude while you translate (PD controller).',
  'Attitude hold + auto-burn to match the velocity of the station or a locked target.',
];

export const NOZZLE_F = 110;     // N per nozzle
export const VE = 700;           // m/s cold-gas exhaust velocity
export const GAS_MAX = 10;       // kg of N2
export const BASE_MASS = 112;    // kg (person + suit, without weapons or gas)
export const BODY_R = 0.7;       // collision radius
export const ROLL_RATE = 1.5;
const RATE_K = 3.2;
const TA = 0.42, TB = 0.5;       // thruster tower lateral/vertical offset (m)
export const THROW_TIME = 0.6;  // s, grenade throw animation (released 40% in)
export const HIT_THRESH = 8;     // m/s wall impact before damage
export const CRAWL_SPEED = 2.2;  // m/s hand-over-hand along a surface

// tower positions (body frame) and signs
export const TOWERS = [
  { sx: -1, sy: 1 }, { sx: 1, sy: 1 }, { sx: -1, sy: -1 }, { sx: 1, sy: -1 },
].map((t) => ({ ...t, pos: new THREE.Vector3(t.sx * TA, t.sy * TB, 0) }));
// nozzle k pushes the body along NOZ_DIR[k]; exhaust leaves along -NOZ_DIR[k]
export const NOZ_DIR = [
  new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1),
];

export const HITBOXES = [
  { p: new THREE.Vector3(0, 0.6, -0.02), r: 0.21, part: 'head' },
  { p: new THREE.Vector3(0, 0.22, 0), r: 0.34, part: 'chest' },
  { p: new THREE.Vector3(0, -0.18, 0), r: 0.3, part: 'body' },
  { p: new THREE.Vector3(0, 0.15, 0.3), r: 0.28, part: 'pack' },
  { p: new THREE.Vector3(-0.14, -0.62, -0.08), r: 0.17, part: 'leg' },
  { p: new THREE.Vector3(0.14, -0.62, -0.08), r: 0.17, part: 'leg' },
  { p: new THREE.Vector3(-0.14, -0.95, 0.08), r: 0.15, part: 'leg' },
  { p: new THREE.Vector3(0.14, -0.95, 0.08), r: 0.15, part: 'leg' },
];

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(0, 0, 0, 'YXZ');

// ---------------- Model ----------------
const gunCache = new Map();
/** Guns are built once per (weapon, team) and cloned: clones share geometry and materials. */
export function makeGunMesh(id, teamColor, opts = {}) {
  const key = id + ':' + teamColor + ':' + !!opts.noShadow;
  let proto = gunCache.get(key);
  if (!proto) { proto = buildGun(id, teamColor, opts); proto.userData.magIndex = proto.children.indexOf(proto.userData.mag); gunCache.set(key, proto); }
  const ud = proto.userData;
  proto.userData = {};
  const g = proto.clone(true);
  proto.userData = ud;
  g.userData = { ...ud, sight: ud.sight.clone(), hand: ud.hand.clone(), grip: ud.grip.clone(), magRest: ud.magRest.clone(), mag: g.children[ud.magIndex] };
  return g;
}

// Inverted-hull outline: back faces pushed out along the vertex direction by a roughly constant pixel width.
export const OUTLINE_MAT = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  uniforms: { color: { value: new THREE.Color(0xff3b2f) }, thick: { value: 0.0032 } },
  vertexShader: `uniform float thick;
    void main(){
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 dir = normalize(normalMatrix * normal);
      mv.xyz += dir * thick * max(1.5, -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: 'uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }',
});

function addOutlines(root) {
  const meshes = [];
  root.traverse((o) => { if (o.isMesh && !o.userData.noOutline) meshes.push(o); });
  const outlines = [];
  for (const m of meshes) {
    const o = new THREE.Mesh(m.geometry, OUTLINE_MAT);
    o.position.copy(m.position); o.quaternion.copy(m.quaternion); o.scale.copy(m.scale);
    o.visible = false;
    o.userData.noOutline = true;
    m.parent.add(o);
    outlines.push(o);
  }
  return outlines;
}

function buildModel(team) {
  const m = buildSoldier(TEAM_COLORS[team], TOWERS, NOZ_DIR);
  const root = m.root;
  // thruster flames
  const flameGeo = new THREE.ConeGeometry(0.055, 0.42, 6, 1, true); flameGeo.translate(0, -0.21, 0);
  const flameMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xcfe8ff).multiplyScalar(1.6), transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [];
  const up = new THREE.Vector3(0, 1, 0);
  for (const t of TOWERS) {
    for (let k = 0; k < 6; k++) {
      const f = new THREE.Mesh(flameGeo, flameMat);
      const exhaust = NOZ_DIR[k].clone().negate();
      f.quaternion.setFromUnitVectors(up, exhaust.clone().negate());
      f.position.copy(t.pos).addScaledVector(exhaust, 0.09);
      f.visible = false;
      f.userData.noOutline = true;
      root.add(f);
      flames.push(f);
    }
  }
  const outlines = addOutlines(root);
  return { ...m, flames, outlines };
}

// ---------------- Soldier ----------------
let NEXT_ID = 1;

export class Soldier {
  constructor(game, team, name, isPlayer = false) {
    this.id = NEXT_ID++;
    this.game = game;
    this.team = team;
    this.name = name;
    this.isPlayer = isPlayer;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.quat = new THREE.Quaternion();
    this.angVel = new THREE.Vector3(); // body frame (pitch x, yaw y, roll z)
    this.aimYaw = 0; this.aimPitch = 0;
    this.mode = 1;
    this.holdQ = null;
    this.ctrl = { move: new THREE.Vector3(), roll: 0, killRot: false, brake: false };
    this.throttle = new Float32Array(24);
    this.kills = 0; this.deaths = 0; this.score = 0;
    this.alive = false;
    this.respawnT = 0;
    this.refTarget = null;
    this.model = buildModel(team);
    game.scene.add(this.model.root);
    this.gunMeshes = {};
    for (const k of Object.keys(WEAPONS)) {
      const m = makeGunMesh(k, TEAM_COLORS[team]);
      m.visible = false;
      this.model.gunMount.add(m);
      this.gunMeshes[k] = m;
      // gun outlines (enemy highlight) share the model's outline list
      for (const o of addOutlines(m)) this.model.outlines.push(o);
    }
    this.reset();
  }

  reset() {
    this.health = 100;
    this.o2 = 100;
    this.gas = GAS_MAX;
    this.vel.set(0, 0, 0);
    this.angVel.set(0, 0, 0);
    this.aimYaw = this.aimPitch = 0;
    this.holdQ = null;
    this.grab = null;
    this.leaks = [];
    this.towers = TOWERS.map(() => ({ hp: 30, dead: false }));
    this.weapons = (this.loadout || ['rifle', 'shotgun']).map((id) => new WeaponState(WEAPONS[id] || WEAPONS.rifle));
    this.cur = 0; this.switchT = 0;
    this.grenades = GRENADE.count;
    this.grenadeCool = 0;
    this.meleeCool = 0;
    this.throwT = 0; this.throwDir = null; this.meleeT = 0;
    this.ads = false; this.adsAmt = 0;
    this.lastDamageT = -99;
    this.lastThrustT = -99;
    this.lastAttacker = null;
    this.spawnProtect = 2.0;
    this.kick = new THREE.Vector2();
    this.pushCharge = 0;
    this.lastFireT = -99;
    this.throttle.fill(0);
    this.impactCool = 0;
  }

  get weapon() { return this.weapons[this.cur]; }

  get mass() {
    let m = BASE_MASS + this.gas;
    for (const w of this.weapons) m += w.def.mass;
    return m;
  }

  // inertia tensor (body frame diagonal). Taller pitch/roll axes, slim yaw axis -> intermediate-axis tumbling is possible.
  inertia(out) {
    const k = this.mass / 125;
    return out.set(21 * k, 9 * k, 19 * k);
  }

  get dv() { // remaining delta-v from the rocket equation
    const m0 = this.mass, mf = m0 - this.gas;
    return VE * Math.log(m0 / mf);
  }

  eye(out) { return out.copy(_v.set(0, 0.6, -0.05).applyQuaternion(this.quat)).add(this.pos); }

  aimQuat(out) {
    _e.set(this.aimPitch, this.aimYaw, 0, 'YXZ');
    return out.setFromEuler(_e).premultiply(this.quat);
  }

  aimDir(out) { return out.set(0, 0, -1).applyQuaternion(this.aimQuat(_q)); }

  forward(out) { return out.set(0, 0, -1).applyQuaternion(this.quat); }

  /** Turn the body so it faces a world direction (shortest arc). The attitude-hold target turns with it. */
  setAimDir(d) {
    const f = this.forward(_v2);
    _q.setFromUnitVectors(f, _v.copy(d).normalize());
    this.quat.premultiply(_q).normalize();
    if (this.holdQ) this.holdQ.premultiply(_q).normalize();
  }

  /** Roll about the body's forward axis so its up vector leans toward upWorld, at most maxAng radians. */
  rollToward(upWorld, maxAng) {
    const f = this.forward(_v2);
    const up = _v.set(0, 1, 0).applyQuaternion(this.quat);
    const d = _v3.copy(upWorld).addScaledVector(f, -upWorld.dot(f));
    if (d.lengthSq() < 0.01) return;
    d.normalize();
    const ang = Math.atan2(f.dot(_v4.crossVectors(up, d)), up.dot(d));
    const a = Math.max(-maxAng, Math.min(maxAng, ang));
    if (Math.abs(a) < 1e-4) return;
    _q.setFromAxisAngle(f, a);
    this.quat.premultiply(_q).normalize();
    if (this.holdQ) this.holdQ.premultiply(_q).normalize();
  }

  /** Mouse look: yaw about the body's own up axis, pitch about its right axis (no world "up" in orbit). */
  addAim(dYaw, dPitch) {
    _q.setFromAxisAngle(_AY, dYaw);
    _q2.setFromAxisAngle(_AX, dPitch);
    _q.multiply(_q2);
    this.quat.multiply(_q).normalize();
    if (this.holdQ) this.holdQ.multiply(_q).normalize();
  }

  spawn(pos, facing) {
    this.reset();
    this.alive = true;
    this.pos.copy(pos);
    this.quat.setFromUnitVectors(new THREE.Vector3(0, 0, -1), facing.clone().normalize());
    this.model.root.visible = !this.isPlayer;
  }

  /** Impulse J (world, N·s) applied at world point p. */
  applyImpulse(J, p, unintended = true) {
    if (unintended === 'recoil' ? !this.game.rules.recoil : unintended && !this.game.rules.knockback) return;
    if (this.grab && this.grab.kind !== 'pod') {
      // anchored: a strong hit can knock you off the handhold
      if (J.length() > 120) this.grab = null; else return;
    }
    const m = this.mass;
    this.vel.addScaledVector(J, 1 / m);
    if (p) {
      const r = _v.subVectors(p, this.pos);
      const tau = _v2.crossVectors(r, J).applyQuaternion(_q.copy(this.quat).invert());
      const I = this.inertia(_v);
      this.angVel.x += tau.x / I.x; this.angVel.y += tau.y / I.y; this.angVel.z += tau.z / I.z;
    }
  }

  // ---------- Flight computer + thruster allocation ----------
  flightComputer(dt) {
    const c = this.ctrl, mode = this.mode;
    const rollIn = c.roll;
    const cmdR = _cmdR.set(0, 0, 0);
    const w = this.angVel;
    const manual = mode === 0 && !this.isBot;
    const kill = c.killRot;
    if (manual && !kill) {
      // Newtonian: roll keys fire roll jets directly; any spin stays until you counter it (X)
      cmdR.set(0, 0, rollIn);
      this.holdQ = null;
    } else {
      const wDes = _wDes.set(0, 0, kill ? 0 : rollIn * ROLL_RATE);
      const holdMode = (mode >= 2 || this.isBot) && !kill && rollIn === 0;
      if (holdMode) {
        if (!this.holdQ && w.lengthSq() < 0.02) this.holdQ = this.quat.clone();
        if (this.holdQ) {
          // error rotation in body frame
          _q.copy(this.quat).invert().multiply(this.holdQ);
          if (_q.w < 0) { _q.x = -_q.x; _q.y = -_q.y; _q.z = -_q.z; _q.w = -_q.w; }
          const s = Math.sqrt(1 - Math.min(1, _q.w * _q.w));
          const ang = 2 * Math.acos(clamp(_q.w, -1, 1));
          if (s > 1e-5) wDes.set(_q.x / s, _q.y / s, _q.z / s).multiplyScalar(Math.min(1.2, ang * 4));
        }
      } else this.holdQ = null;
      const err = _v.subVectors(wDes, w);
      const db = this.isBot ? 0.02 : 0.004;
      cmdR.set(
        Math.abs(err.x) < db ? 0 : clamp(err.x * RATE_K, -1, 1),
        Math.abs(err.y) < db ? 0 : clamp(err.y * RATE_K, -1, 1),
        Math.abs(err.z) < db ? 0 : clamp(err.z * RATE_K, -1, 1),
      );
    }
    // translation
    const cmdT = _cmdT.copy(c.move);
    const autoMatch = !manual && (c.brake || (mode === 3 && !this.isBot));
    if (autoMatch) {
      const ref = this.refTarget && this.refTarget.alive !== false ? this.refTarget.vel : _zero;
      const vr = _v.subVectors(this.vel, ref).applyQuaternion(_q.copy(this.quat).invert());
      for (const k of ['x', 'y', 'z']) {
        if (c.brake || cmdT[k] === 0) {
          const e = -vr[k];
          cmdT[k] = Math.abs(e) < 0.04 ? 0 : clamp(e * 1.3, -1, 1);
        }
      }
    }
    return this.allocate(cmdT, cmdR, dt);
  }

  /** Map translation/rotation commands onto 24 on/off (PWM) nozzles. Returns body-frame force & torque. */
  allocate(cmdT, cmdR, dt) {
    const F = _F.set(0, 0, 0), T = _T.set(0, 0, 0);
    let sum = 0;
    const th = this.throttle;
    for (let i = 0; i < 4; i++) {
      const tw = TOWERS[i], st = this.towers[i];
      const dx = clamp(cmdT.x - cmdR.z * tw.sy, -1, 1);
      const dy = clamp(cmdT.y + cmdR.z * tw.sx, -1, 1);
      const dzz = clamp(cmdT.z + cmdR.x * tw.sy - cmdR.y * tw.sx, -1, 1);
      const b = i * 6;
      th[b + 0] = dx > 0 ? dx : 0; th[b + 1] = dx < 0 ? -dx : 0;
      th[b + 2] = dy > 0 ? dy : 0; th[b + 3] = dy < 0 ? -dy : 0;
      th[b + 4] = dzz > 0 ? dzz : 0; th[b + 5] = dzz < 0 ? -dzz : 0;
      if (st.dead) for (let k = 0; k < 6; k++) th[b + k] = 0;
      for (let k = 0; k < 6; k++) sum += th[b + k];
    }
    if (sum <= 0) return sum;
    let need = sum * NOZZLE_F / VE * dt;
    let scale = 1;
    if (this.game.rules.infiniteGas) need = 0;
    if (need > this.gas) { scale = this.gas / need; need = this.gas; }
    this.gas -= need;
    if (scale < 1) for (let k = 0; k < 24; k++) th[k] *= scale;
    for (let i = 0; i < 4; i++) {
      const tw = TOWERS[i];
      _f.set(0, 0, 0);
      for (let k = 0; k < 6; k++) { const t = th[i * 6 + k]; if (t > 0) _f.addScaledVector(NOZ_DIR[k], t * NOZZLE_F); }
      F.add(_f);
      T.add(_v2.crossVectors(tw.pos, _f));
    }
    if (sum * scale > 0.05) this.lastThrustT = this.game.time;
    return sum * scale;
  }

  // ---------- Physics step ----------
  step(dt) {
    const world = this.game.world;
    const I = this.inertia(_I);
    const m = this.mass;

    if (this.alive && this.grab) {
      this.stepGrabbed(dt);
      return;
    }
    let F = null, T = null;
    if (this.alive) {
      this.flightComputer(dt);
      F = _F; T = _T;
    } else { this.throttle.fill(0); }
    // world-frame force
    const Fw = _Fw.set(0, 0, 0), Tb = _Tb.set(0, 0, 0);
    if (F && this.throttle.some((x) => x > 0)) { Fw.copy(F).applyQuaternion(this.quat); Tb.copy(T); }
    // suit leaks: gas escapes along leak normal, pushing the body the other way
    if (this.game.rules.breaches) for (const lk of this.leaks) {
      const f = _v.copy(lk.n).multiplyScalar(-28);
      Tb.add(_v2.crossVectors(lk.p, f));
      Fw.add(f.applyQuaternion(this.quat));
    }
    // integrate linear
    this.vel.addScaledVector(Fw, dt / m);
    this.pos.addScaledVector(this.vel, dt);
    // Euler's rotation equations: dw/dt = I^-1 (tau - w x Iw)
    const w = this.angVel;
    const Iw = _v.set(I.x * w.x, I.y * w.y, I.z * w.z);
    const gyro = _v2.crossVectors(w, Iw);
    w.x += (Tb.x - gyro.x) / I.x * dt;
    w.y += (Tb.y - gyro.y) / I.y * dt;
    w.z += (Tb.z - gyro.z) / I.z * dt;
    const wl = w.length();
    if (wl > 12) w.multiplyScalar(12 / wl);
    // quaternion integration (body-frame rates)
    const q = this.quat;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const hx = w.x * dt * 0.5, hy = w.y * dt * 0.5, hz = w.z * dt * 0.5;
    q.x += qw * hx + qy * hz - qz * hy;
    q.y += qw * hy + qz * hx - qx * hz;
    q.z += qw * hz + qx * hy - qy * hx;
    q.w += -qx * hx - qy * hy - qz * hz;
    q.normalize();
    // collisions
    this.collide(dt, world);
  }

  stepGrabbed(dt) {
    const g = this.grab;
    this.throttle.fill(0);
    _F.set(0, 0, 0);
    if (g.kind === 'pod') {
      const pod = g.obj;
      // thrusters still work while hauling a pod: the combined mass is pushed (mass matters)
      const cmdT = _cmdT.copy(this.ctrl.move);
      if (this.ctrl.brake && !(this.mode === 0 && !this.isBot)) {
        const vr = _v.copy(pod.vel).applyQuaternion(_q.copy(this.quat).invert());
        for (const k of ['x', 'y', 'z']) cmdT[k] = Math.abs(vr[k]) < 0.04 ? 0 : clamp(-vr[k] * 1.3, -1, 1);
      }
      if (cmdT.lengthSq() > 0 && this.allocate(cmdT, _cmdR.set(0, 0, 0), dt) > 0) {
        pod.vel.addScaledVector(_F.applyQuaternion(this.quat), dt / (this.mass + pod.mass));
      }
      this.pos.copy(pod.pos).add(g.offset);
      this.vel.copy(pod.vel);
    } else if (!this.crawl(dt)) return;
    // anchored: hands stop any spin; roll keys twist you around the handhold for free
    const wDes = _wDes.set(0, 0, this.ctrl.roll * 1.0);
    this.angVel.lerp(wDes, Math.min(1, dt * 8));
    const w = this.angVel, wl = w.length();
    if (wl > 1e-6) {
      _q.setFromAxisAngle(_v.copy(w).divideScalar(wl), wl * dt);
      this.quat.multiply(_q).normalize();
    }
  }

  /** Hand-over-hand crawl along a grabbed surface (no gas). Wraps around edges; lets go past the end of a surface. */
  crawl(dt) {
    const g = this.grab, world = this.game.world;
    this.vel.set(0, 0, 0);
    const mv = _v.copy(this.ctrl.move);
    if (mv.lengthSq() === 0 || !g.normal) return true;
    mv.applyQuaternion(this.quat).normalize();
    const out = mv.dot(g.normal);
    mv.addScaledVector(g.normal, -out);
    let l = mv.length();
    if (l < 0.3 && out > 0 && g.prevNormal) {
      // key points off the surface right after an edge: keep going over the edge
      mv.copy(g.prevNormal).negate().addScaledVector(g.normal, g.prevNormal.dot(g.normal));
      l = mv.length();
    }
    if (l < 1e-3) return true;
    mv.multiplyScalar(CRAWL_SPEED / l);
    this.vel.copy(mv);
    this.pos.addScaledVector(mv, dt);
    const d0 = g.dist || BODY_R + 0.2;
    const sf = world.nearestSurface(this.pos, d0 + 0.7);
    if (!sf || sf.kind === 'pod') {
      // crawled off the end of the surface: let go, keeping the crawl velocity
      this.grab = null; this.holdQ = null;
      return false;
    }
    if (sf.normal.dot(g.normal) < 0.97) g.prevNormal = g.normal.clone();
    g.normal = sf.normal; g.point = sf.point; g.kind = sf.kind; g.obj = sf.obj;
    this.pos.copy(sf.point).addScaledVector(sf.normal, d0);
    world.sphereContacts(this.pos, BODY_R, (n, depth) => this.pos.addScaledVector(n, depth));
    return true;
  }

  collide(dt, world) {
    const self = this;
    this.impactCool -= dt;
    world.sphereContacts(this.pos, BODY_R, (n, depth, kind) => {
      self.pos.addScaledVector(n, depth);
      const vn = self.vel.dot(n);
      if (vn < 0) {
        const speed = -vn;
        self.vel.addScaledVector(n, -(1.3) * vn);
        // friction -> tangential slowdown and a bit of spin
        const vt = _v.copy(self.vel).addScaledVector(n, -self.vel.dot(n));
        self.vel.addScaledVector(vt, -0.18);
        const I = self.inertia(_I);
        if (!self.game.rules.knockback) vt.set(0, 0, 0);
        const tau = _v2.crossVectors(n, vt).multiplyScalar(-self.mass * 0.18 * BODY_R).applyQuaternion(_q.copy(self.quat).invert());
        self.angVel.x += tau.x / I.x; self.angVel.y += tau.y / I.y; self.angVel.z += tau.z / I.z;
        if (speed > 1.2 && self.impactCool <= 0) {
          self.impactCool = 0.25;
          const cp = self.pos.clone().addScaledVector(n, -BODY_R);
          self.game.onImpact(self, speed, cp, n.clone());
          if (speed > HIT_THRESH && self.alive) {
            self.game.damage(self, (speed - HIT_THRESH) * 16, null, 'impact', cp);
            if (self.game.rules.breaches && speed > HIT_THRESH + 2 && self.leaks.length < 3) {
              self.leaks.push({ p: _v.copy(n).negate().multiplyScalar(0.3).applyQuaternion(_q.copy(self.quat).invert()).clone(), n: n.clone().negate().applyQuaternion(_q.copy(self.quat).invert()), t: 4 });
            }
          }
        }
      }
    });
  }

  /** Called once per frame (not per substep). */
  update(dt) {
    const t = this.game.time;
    if (!this.alive) return;
    this.spawnProtect -= dt;
    this.grenadeCool -= dt; this.meleeCool -= dt;
    this.meleeT = Math.max(0, this.meleeT - dt);
    this.adsAmt += ((this.ads && !this.grab ? 1 : 0) - this.adsAmt) * Math.min(1, dt * 9);
    if (this.throwT > 0) {
      const before = this.throwT;
      this.throwT -= dt;
      if (before > THROW_TIME * 0.6 && this.throwT <= THROW_TIME * 0.6) this.game.combat.releaseGrenade(this);
      if (this.throwT < 0) this.throwT = 0;
    }
    // weapon timers
    for (const w of this.weapons) {
      w.cool -= dt;
      if (w.def.kind === 'beam') {
        w.heat = Math.max(0, w.heat - w.def.coolRate * dt);
        if (w.overheat && w.heat < 0.35) w.overheat = false;
      }
    }
    const w = this.weapon;
    if (this.switchT > 0) this.switchT -= dt;
    if (w.reloadT > 0) {
      w.reloadT -= dt;
      if (w.reloadT <= 0) {
        if (w.def.perShell) {
          if (w.reserve > 0 && w.mag < w.def.mag) { w.mag++; w.reserve--; }
          if (w.mag < w.def.mag && w.reserve > 0 && !w.cancel) w.reloadT = w.def.reload; else w.reloadT = 0;
        } else {
          const n = Math.min(w.def.mag - w.mag, w.reserve);
          w.mag += n; w.reserve -= n; w.reloadT = 0;
        }
      }
    }
    // fuel regeneration (suit compressor) after a short idle
    // suit compressor refills the tank quickly once the jets go quiet
    if (this.game.rules.infiniteGas) this.gas = GAS_MAX;
    else if (t - this.lastThrustT > 0.6) this.gas = Math.min(GAS_MAX, this.gas + dt * (this.grab ? 2.2 : 1.1));
    // leaks
    if (!this.game.rules.breaches) this.leaks.length = 0;
    for (const lk of this.leaks) lk.t -= dt;
    this.leaks = this.leaks.filter((l) => l.t > 0);
    if (this.leaks.length) this.o2 = Math.max(0, this.o2 - this.leaks.length * 3 * dt);
    else this.o2 = Math.min(100, this.o2 + 4 * dt);
    if (this.o2 <= 0) this.game.damage(this, 12 * dt, null, 'hypoxia');
    // health regen
    if (t - this.lastDamageT > 5 && this.health < 100) this.health = Math.min(100, this.health + 14 * dt);
    // aim kick recovery
    this.kick.multiplyScalar(Math.exp(-dt * 10));
  }

  startReload() {
    const w = this.weapon;
    if (w.def.kind === 'beam' || w.reloadT > 0 || w.mag >= w.def.mag || w.reserve <= 0) return false;
    w.reloadT = w.def.reload; w.cancel = false;
    return true;
  }

  switchTo(i) {
    if (i === this.cur || i < 0 || i >= this.weapons.length) return;
    this.weapon.reloadT = 0;
    this.lastCur = this.cur;
    this.cur = i; this.switchT = 0.45;
  }

  /** Third-person animation from gameplay timers: reload, grenade throw, hammer swing, recoil. */
  animate3P(m) {
    const w = this.weapon, t = this.game.time;
    const bell = (x) => Math.sin(Math.max(0, Math.min(1, x)) * Math.PI);
    const gm = m.gunMount, la = m.leftArm;
    gm.position.set(0.13, -0.1, -0.4); gm.rotation.set(0, 0, 0);
    la.rotation.set(0, 0, 0);
    m.nade.visible = false;
    if (!this.alive) return;
    const kick = Math.max(0, 1 - (t - this.lastFireT) / 0.12);
    gm.position.z += kick * 0.05; gm.rotation.x += kick * 0.12;
    if (w.reloadT > 0 && w.def.reload > 0) {
      const r = 1 - w.reloadT / w.def.reload, b = bell(r);
      gm.rotation.z = 0.55 * b; gm.rotation.x += 0.35 * b; gm.position.y -= 0.05 * b;
      la.rotation.x = 0.9 * bell(r * 1.3); la.rotation.z = -0.3 * b;
    }
    if (this.throwT > 0) {
      const p = 1 - this.throwT / THROW_TIME;
      gm.position.y -= 0.12 * bell(p); gm.rotation.x -= 0.7 * bell(p);
      la.rotation.x = p < 0.55 ? 1.9 * (p / 0.55) : 1.9 - 3.6 * Math.min(1, (p - 0.55) / 0.2);
      m.nade.visible = p > 0.1 && p < 0.65;
    }
    if (this.meleeT > 0) {
      const p = 1 - this.meleeT / 0.35;
      gm.position.z -= 0.25 * bell(p); gm.rotation.y = 0.5 * bell(p); gm.rotation.x -= 0.4 * bell(p);
    }
    if (this.switchT > 0) { const p = this.switchT / 0.45; gm.position.y -= 0.2 * p; gm.rotation.x -= 0.8 * p; }
  }

  syncModel(dt) {
    const m = this.model;
    m.root.position.copy(this.pos);
    m.root.quaternion.copy(this.quat);
    this.animate3P(m);
    for (const k in this.gunMeshes) this.gunMeshes[k].visible = this.alive && k === this.weapon.def.id;
    const pl = this.game.player;
    const outline = this.alive && !!pl && pl !== this && pl.team !== this.team && this.game.settings.outlines;
    if (outline !== this._outlined) { this._outlined = outline; for (const o of m.outlines) o.visible = outline; }
    for (let i = 0; i < 24; i++) {
      const t = this.throttle[i];
      const f = m.flames[i];
      if (t > 0.03 && this.alive) { f.visible = true; const s = 0.4 + t * 0.8 + Math.random() * 0.25; f.scale.set(0.7 + t * 0.5, s, 0.7 + t * 0.5); }
      else f.visible = false;
    }
  }
}

const _cmdR = new THREE.Vector3(), _cmdT = new THREE.Vector3(), _wDes = new THREE.Vector3(), _zero = new THREE.Vector3();
const _F = new THREE.Vector3(), _T = new THREE.Vector3(), _f = new THREE.Vector3(), _Fw = new THREE.Vector3(), _Tb = new THREE.Vector3();
const _I = new THREE.Vector3(), _q2 = new THREE.Quaternion();
const _v3 = new THREE.Vector3(), _v4 = new THREE.Vector3();
const _AX = new THREE.Vector3(1, 0, 0), _AY = new THREE.Vector3(0, 1, 0);
