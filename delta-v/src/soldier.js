import * as THREE from 'three';
import { clamp, DEG } from './math.js';
import { WEAPONS, WeaponState, GRENADE } from './weapons.js';

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
export const CONE_YAW = 60 * DEG;
export const CONE_PITCH = 55 * DEG;
export const MAX_RATE = 2.0;     // rad/s body pitch/yaw rate cap for assisted steering
export const ROLL_RATE = 1.5;
const STEER_K = 3.0;
const RATE_K = 3.2;
const TA = 0.42, TB = 0.5;       // thruster tower lateral/vertical offset (m)
const DEADZONE = [10 * DEG, 4 * DEG, 17 * DEG, 17 * DEG];
const HIT_THRESH = 5.5;          // m/s wall impact before damage

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
const sharedGeo = {};
function geo(key, fn) { return sharedGeo[key] || (sharedGeo[key] = fn()); }

export function makeGunMesh(id, teamColor) {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.5, metalness: 0.6 });
  const light = new THREE.MeshStandardMaterial({ color: 0x8b9298, roughness: 0.5, metalness: 0.5 });
  const accent = new THREE.MeshBasicMaterial({ color: teamColor });
  const add = (geom, mat, x, y, z) => { const m = new THREE.Mesh(geom, mat); m.position.set(x, y, z); g.add(m); return m; };
  if (id === 'rifle') {
    add(new THREE.BoxGeometry(0.07, 0.09, 0.6), dark, 0, 0, -0.1);
    add(new THREE.BoxGeometry(0.05, 0.05, 0.3), light, 0, 0.015, -0.52);
    add(new THREE.BoxGeometry(0.05, 0.14, 0.07), dark, 0, -0.1, -0.08);
    add(new THREE.BoxGeometry(0.06, 0.07, 0.2), dark, 0, -0.02, 0.26);
    add(new THREE.BoxGeometry(0.04, 0.05, 0.12), light, 0, 0.075, -0.05);
    add(new THREE.BoxGeometry(0.075, 0.012, 0.3), accent, 0, 0.05, -0.2);
  } else if (id === 'shotgun') {
    add(new THREE.BoxGeometry(0.1, 0.11, 0.5), dark, 0, 0, -0.05);
    add(new THREE.CylinderGeometry(0.035, 0.035, 0.4, 8).rotateX(Math.PI / 2), light, 0, 0.02, -0.48);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.34, 8).rotateX(Math.PI / 2), dark, 0, -0.045, -0.4);
    add(new THREE.BoxGeometry(0.06, 0.15, 0.08), dark, 0, -0.11, 0.02);
    add(new THREE.BoxGeometry(0.105, 0.015, 0.25), accent, 0, 0.06, -0.1);
  } else {
    add(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 10).rotateX(Math.PI / 2), light, 0, 0.01, -0.15);
    add(new THREE.CylinderGeometry(0.075, 0.06, 0.12, 10).rotateX(Math.PI / 2), dark, 0, 0.01, -0.45);
    add(new THREE.BoxGeometry(0.06, 0.15, 0.08), dark, 0, -0.1, -0.02);
    add(new THREE.BoxGeometry(0.03, 0.06, 0.1), dark, 0, 0.085, -0.1);
    add(new THREE.TorusGeometry(0.062, 0.01, 6, 16), accent, 0, 0.01, -0.3);
  }
  return g;
}

function buildModel(team) {
  const tc = TEAM_COLORS[team];
  const root = new THREE.Group();
  const suit = new THREE.MeshStandardMaterial({ color: 0xd8dade, roughness: 0.75, metalness: 0.05, flatShading: true });
  const grey = new THREE.MeshStandardMaterial({ color: 0x575e66, roughness: 0.7, metalness: 0.3, flatShading: true });
  const teamMat = new THREE.MeshStandardMaterial({ color: tc, roughness: 0.6, emissive: tc, emissiveIntensity: 0.35, flatShading: true });
  const glow = new THREE.MeshBasicMaterial({ color: tc });
  const visor = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.1, metalness: 1, emissive: tc, emissiveIntensity: 0.25 });
  const mesh = (g, m, x, y, z) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); return o; };

  const torso = mesh(geo('torso', () => new THREE.BoxGeometry(0.5, 0.62, 0.34)), suit, 0, 0.15, 0);
  root.add(torso);
  root.add(mesh(geo('belt', () => new THREE.BoxGeometry(0.52, 0.1, 0.36)), teamMat, 0, -0.12, 0));
  root.add(mesh(geo('pack', () => new THREE.BoxGeometry(0.56, 0.72, 0.26)), grey, 0, 0.12, 0.3));
  root.add(mesh(geo('packStripe', () => new THREE.BoxGeometry(0.57, 0.06, 0.27)), glow, 0, 0.38, 0.3));
  // thruster towers & arms
  const towerGeo = geo('tower', () => new THREE.BoxGeometry(0.12, 0.12, 0.14));
  const strut = geo('strut', () => new THREE.BoxGeometry(0.16, 0.05, 0.05));
  const towerMeshes = [];
  for (const t of TOWERS) {
    const tm = mesh(towerGeo, grey, t.pos.x, t.pos.y, t.pos.z);
    root.add(tm); towerMeshes.push(tm);
    root.add(mesh(strut, grey, t.pos.x * 0.8, t.pos.y, 0.15));
    root.add(mesh(geo('tlight', () => new THREE.BoxGeometry(0.13, 0.03, 0.03)), glow, t.pos.x, t.pos.y + 0.075, -0.05));
  }
  // hips & legs (relaxed EVA crouch)
  const thigh = geo('thigh', () => new THREE.CylinderGeometry(0.1, 0.09, 0.42, 7));
  const shin = geo('shin', () => new THREE.CylinderGeometry(0.085, 0.08, 0.4, 7));
  const boot = geo('boot', () => new THREE.BoxGeometry(0.15, 0.12, 0.26));
  for (const s of [-1, 1]) {
    const th = mesh(thigh, suit, s * 0.14, -0.42, -0.08); th.rotation.x = 0.5; root.add(th);
    const sh = mesh(shin, suit, s * 0.14, -0.78, -0.02); sh.rotation.x = -0.35; root.add(sh);
    root.add(mesh(boot, grey, s * 0.14, -1.0, 0.06));
    root.add(mesh(geo('knee', () => new THREE.BoxGeometry(0.16, 0.06, 0.14)), teamMat, s * 0.14, -0.6, -0.17));
  }
  // upper group: head + arms + gun, rotated by aim offsets around the neck
  const upper = new THREE.Group();
  upper.position.set(0, 0.45, 0);
  root.add(upper);
  const helmet = mesh(geo('helmet', () => new THREE.SphereGeometry(0.21, 12, 9)), suit, 0, 0.15, -0.02);
  upper.add(helmet);
  const vis = mesh(geo('visor', () => new THREE.SphereGeometry(0.19, 12, 8, -Math.PI * 0.42, Math.PI * 0.84, Math.PI * 0.28, Math.PI * 0.4).rotateY(Math.PI)), visor, 0, 0.15, -0.045);
  upper.add(vis);
  upper.add(mesh(geo('hlamp', () => new THREE.BoxGeometry(0.05, 0.05, 0.05)), glow, 0.17, 0.2, -0.06));
  // arms
  const upperArm = geo('uarm', () => new THREE.CylinderGeometry(0.075, 0.07, 0.32, 6));
  const fore = geo('farm', () => new THREE.CylinderGeometry(0.065, 0.06, 0.3, 6));
  const ra = mesh(upperArm, suit, 0.27, -0.12, -0.12); ra.rotation.x = 1.2; upper.add(ra);
  const rf = mesh(fore, suit, 0.18, -0.16, -0.36); rf.rotation.set(1.5, 0, 0.5); upper.add(rf);
  const la = mesh(upperArm, suit, -0.27, -0.12, -0.12); la.rotation.x = 1.2; upper.add(la);
  const lf = mesh(fore, suit, -0.1, -0.12, -0.42); lf.rotation.set(1.5, 0, -0.9); upper.add(lf);
  const gunMount = new THREE.Group();
  gunMount.position.set(0.12, -0.1, -0.4);
  upper.add(gunMount);
  // thruster flames
  const flameGeo = geo('flame', () => { const g = new THREE.ConeGeometry(0.055, 0.42, 6, 1, true); g.translate(0, -0.21, 0); return g; });
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [];
  const up = new THREE.Vector3(0, 1, 0);
  for (const t of TOWERS) {
    for (let k = 0; k < 6; k++) {
      const f = new THREE.Mesh(flameGeo, flameMat);
      const exhaust = NOZ_DIR[k].clone().negate();
      // cone points along -y after translate; orient so the flame extends along exhaust dir
      f.quaternion.setFromUnitVectors(up, exhaust.clone().negate());
      f.position.copy(t.pos).addScaledVector(exhaust, 0.07);
      f.visible = false;
      root.add(f);
      flames.push(f);
    }
  }
  return { root, upper, gunMount, flames, towerMeshes };
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
    this.weapons = [new WeaponState(WEAPONS.rifle), new WeaponState(WEAPONS.shotgun), new WeaponState(WEAPONS.gyrojet)];
    this.cur = 0; this.switchT = 0;
    this.grenades = GRENADE.count;
    this.grenadeCool = 0;
    this.meleeCool = 0;
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

  /** Set aim from a world direction; offsets are clamped to the head cone. Returns true if clamped. */
  setAimDir(d) {
    _v2.copy(d).applyQuaternion(_q.copy(this.quat).invert());
    let yaw = Math.atan2(-_v2.x, -_v2.z);
    let pitch = Math.asin(clamp(_v2.y, -1, 1));
    const cy = clamp(yaw, -CONE_YAW, CONE_YAW), cp = clamp(pitch, -CONE_PITCH, CONE_PITCH);
    this.aimYaw = cy; this.aimPitch = cp;
    return cy !== yaw || cp !== pitch;
  }

  addAim(dYaw, dPitch) {
    this.aimYaw = clamp(this.aimYaw + dYaw, -CONE_YAW, CONE_YAW);
    this.aimPitch = clamp(this.aimPitch + dPitch, -CONE_PITCH, CONE_PITCH);
  }

  spawn(pos, facing) {
    this.reset();
    this.alive = true;
    this.pos.copy(pos);
    this.quat.setFromUnitVectors(new THREE.Vector3(0, 0, -1), facing.clone().normalize());
    this.model.root.visible = !this.isPlayer;
  }

  /** Impulse J (world, N·s) applied at world point p. */
  applyImpulse(J, p) {
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
    const dz = this.isBot ? 12 * DEG : DEADZONE[mode];
    const ax = this.aimPitch, ay = this.aimYaw;
    const mag = Math.hypot(ax, ay);
    let ex = 0, ey = 0;
    if (mag > dz) { const s = (mag - dz) / mag; ex = ax * s; ey = ay * s; }
    const rollIn = c.roll;
    const cmdR = _cmdR.set(0, 0, 0);
    const w = this.angVel;
    const manual = mode === 0 && !this.isBot;
    if (manual) {
      cmdR.set(clamp(ex / 0.35, -1, 1), clamp(ey / 0.35, -1, 1), rollIn);
    } else {
      const wDes = _wDes.set(clamp(ex * STEER_K, -MAX_RATE, MAX_RATE), clamp(ey * STEER_K, -MAX_RATE, MAX_RATE), rollIn * ROLL_RATE);
      if (c.killRot) wDes.set(0, 0, 0);
      const steering = !c.killRot && (ex !== 0 || ey !== 0 || rollIn !== 0);
      const holdMode = (mode >= 2 || this.isBot) && !c.killRot;
      if (holdMode && !steering) {
        if (!this.holdQ && w.lengthSq() < 0.02) this.holdQ = this.quat.clone();
        if (this.holdQ) {
          // error rotation in body frame
          _q.copy(this.quat).invert().multiply(this.holdQ);
          if (_q.w < 0) { _q.x = -_q.x; _q.y = -_q.y; _q.z = -_q.z; _q.w = -_q.w; }
          const s = Math.sqrt(1 - Math.min(1, _q.w * _q.w));
          const ang = 2 * Math.acos(clamp(_q.w, -1, 1));
          if (s > 1e-5) wDes.set(_q.x / s, _q.y / s, _q.z / s).multiplyScalar(Math.min(1.2, ang * 2.5));
        }
      } else this.holdQ = null;
      const err = _v.subVectors(wDes, w);
      cmdR.set(
        Math.abs(err.x) < 0.03 ? 0 : clamp(err.x * RATE_K, -1, 1),
        Math.abs(err.y) < 0.03 ? 0 : clamp(err.y * RATE_K, -1, 1),
        Math.abs(err.z) < 0.03 ? 0 : clamp(err.z * RATE_K, -1, 1),
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
    const aim = this.aimDir(_aim);
    const I = this.inertia(_I);
    const m = this.mass;

    if (this.alive && this.grab) {
      this.stepGrabbed(dt, aim);
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
    for (const lk of this.leaks) {
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
    // keep aim world-stable (neck counter-rotates) within the cone
    if (this.alive) this.setAimDir(aim);
  }

  stepGrabbed(dt, aim) {
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
    } else {
      this.vel.set(0, 0, 0);
    }
    // hand-over-hand: body slowly turns to face the aim for free
    const ex = this.aimPitch, ey = this.aimYaw;
    const mag = Math.hypot(ex, ey);
    const wDes = _wDes.set(0, 0, this.ctrl.roll * 1.0);
    if (mag > 8 * DEG) { const s = Math.min(1.4, (mag - 8 * DEG) * 2.5) / mag; wDes.x = ex * s; wDes.y = ey * s; }
    this.angVel.lerp(wDes, Math.min(1, dt * 8));
    const w = this.angVel, wl = w.length();
    if (wl > 1e-6) {
      _q.setFromAxisAngle(_v.copy(w).divideScalar(wl), wl * dt);
      this.quat.multiply(_q).normalize();
    }
    this.setAimDir(aim);
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
        const tau = _v2.crossVectors(n, vt).multiplyScalar(-self.mass * 0.18 * BODY_R).applyQuaternion(_q.copy(self.quat).invert());
        self.angVel.x += tau.x / I.x; self.angVel.y += tau.y / I.y; self.angVel.z += tau.z / I.z;
        if (speed > 1.2 && self.impactCool <= 0) {
          self.impactCool = 0.25;
          self.game.onImpact(self, speed);
          if (speed > HIT_THRESH && self.alive) self.game.damage(self, (speed - HIT_THRESH) * 14, null, 'impact', self.pos.clone().addScaledVector(n, -BODY_R));
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
    // weapon timers
    for (const w of this.weapons) w.cool -= dt;
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
    if (t - this.lastThrustT > 1.2) this.gas = Math.min(GAS_MAX, this.gas + dt * (this.grab ? 1.0 : 0.45));
    // leaks
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
    if (w.reloadT > 0 || w.mag >= w.def.mag || w.reserve <= 0) return false;
    w.reloadT = w.def.reload; w.cancel = false;
    return true;
  }

  switchTo(i) {
    if (i === this.cur || i < 0 || i >= this.weapons.length) return;
    this.weapon.reloadT = 0;
    this.cur = i; this.switchT = 0.45;
  }

  syncModel(dt) {
    const m = this.model;
    m.root.position.copy(this.pos);
    m.root.quaternion.copy(this.quat);
    m.upper.rotation.set(this.aimPitch * 0.9, this.aimYaw * 0.9, 0, 'YXZ');
    for (const k in this.gunMeshes) this.gunMeshes[k].visible = this.alive && k === this.weapon.def.id;
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
const _aim = new THREE.Vector3(), _I = new THREE.Vector3();
