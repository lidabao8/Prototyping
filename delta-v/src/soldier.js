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

export const NOZZLE_F = 110;     // N per nozzle (nominal)
// Each thruster quad is fed from a small plenum: a fresh burst runs at 2x, sustained firing tapers to 1x.
// Drain and refill run at the same rate (k = drain/refill = 1): that's the tightest setting where
// pulsing at any duty cycle d averages d*(2 - d) <= 1, i.e. never more than simply holding the key.
export const PLENUM = { max: 2.0, min: 1.0, drain: 2.0, refill: 2.0 };
export const VE = 700;           // m/s cold-gas exhaust velocity
export const GAS_MAX = 10;       // kg of N2
export const BASE_MASS = 112;    // kg (person + suit, without weapons or gas)
export const BODY_R = 0.7;       // collision radius
export const MAX_HP = 125;       // suit integrity points
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
  constructor(game, team, name, isPlayer = false, forceId = null) {
    this.id = forceId != null ? forceId : NEXT_ID++;
    if (forceId != null) NEXT_ID = Math.max(NEXT_ID, forceId + 1);
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
    this.health = MAX_HP;
    this.o2 = 100;
    this.gas = GAS_MAX;
    this.vel.set(0, 0, 0);
    this.angVel.set(0, 0, 0);
    this.aimYaw = this.aimPitch = 0;
    this.holdQ = null;
    this.grab = null;
    this.leaks = [];
    this.towers = TOWERS.map(() => ({ hp: 30, dead: false, press: 1 }));
    this.weapons = (this.loadout || ['rifle', 'shotgun']).map((id) => new WeaponState(WEAPONS[id] || WEAPONS.rifle));
    this.cur = 0; this.switchT = 0;
    this.grenades = GRENADE.count;
    this.grenadeCool = 0;
    this.meleeCool = 0;
    this.throwT = 0; this.throwDir = null; this.meleeT = 0;
    this.ads = false; this.adsAmt = 0;
    this.walking = false; this.jumpGrace = 0; this.walkTarget = null;
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
    if (this.walking) {
      // upright on a floor: yaw the body about local up, pitch only the head
      const up = _v4.set(0, 1, 0).applyQuaternion(this.quat);
      const dp = _v.copy(d).addScaledVector(up, -d.dot(up));
      if (dp.lengthSq() > 1e-6) {
        dp.normalize();
        const f = this.forward(_v2); f.addScaledVector(up, -f.dot(up)).normalize();
        const ang = Math.atan2(up.dot(_v3.crossVectors(f, dp)), f.dot(dp));
        this.quat.premultiply(_q.setFromAxisAngle(up, ang)).normalize();
      }
      this.aimPitch = Math.asin(clamp(d.dot(up) / d.length(), -1, 1));
      this.aimPitch = clamp(this.aimPitch, -1.45, 1.45);
      return;
    }
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
    if (this.walking) {
      this.quat.multiply(_q.setFromAxisAngle(_AY, dYaw)).normalize();
      this.aimPitch = clamp(this.aimPitch + dPitch, -1.45, 1.45);
      return;
    }
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
    this.walking = false; this.aimPitch = 0; this.aimYaw = 0;
  }

  /** Impulse J (world, N·s) applied at world point p. */
  applyImpulse(J, p, unintended = true) {
    if (unintended === 'recoil' ? !this.game.rules.recoil : unintended && !this.game.rules.knockback) return;
    // a remote human flies their own suit: forward the shove to their machine
    if (this.remote) { this.game.net.onImpulse(this, J, p); return; }
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
    const autoStop = this.isPlayer && this.game.settings.autoStop;
    const autoMatch = autoStop || (!manual && (c.brake || (mode === 3 && !this.isBot)));
    if (autoMatch) {
      // auto-stop always holds still relative to the map; brake / velocity match use the locked target if any
      const ref = !autoStop || c.brake ? (this.refTarget && this.refTarget.alive !== false ? this.refTarget.vel : _zero) : _zero;
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
    // plenum pressure sets each quad's thrust this instant; gas use follows the actual force
    const fac = this._fac || (this._fac = new Float32Array(4));
    let need = 0;
    for (let i = 0; i < 4; i++) {
      const st = this.towers[i];
      fac[i] = (PLENUM.min + (PLENUM.max - PLENUM.min) * st.press) * (this.game.rules.thrust || 1);
      let ti = 0; for (let k = 0; k < 6; k++) ti += th[i * 6 + k];
      need += ti * NOZZLE_F * fac[i] / VE * dt;
    }
    let scale = 1;
    if (this.game.rules.infiniteGas) need = 0;
    if (need > this.gas) { scale = this.gas / need; need = this.gas; }
    this.gas -= need;
    if (scale < 1) for (let k = 0; k < 24; k++) th[k] *= scale;
    for (let i = 0; i < 4; i++) {
      let ti = 0; for (let k = 0; k < 6; k++) ti += th[i * 6 + k];
      const st = this.towers[i];
      st.press = Math.max(0, st.press - PLENUM.drain * ti * dt);
    }
    for (let i = 0; i < 4; i++) {
      const tw = TOWERS[i];
      _f.set(0, 0, 0);
      for (let k = 0; k < 6; k++) { const t = th[i * 6 + k]; if (t > 0) _f.addScaledVector(NOZ_DIR[k], t * NOZZLE_F * fac[i]); }
      F.add(_f);
      T.add(_v2.crossVectors(tw.pos, _f));
    }
    if (sum * scale > 0.05) this.lastThrustT = this.game.time;
    return sum * scale;
  }

  // ---------- Physics step ----------
  step(dt) {
    if (this.remote || this.netRemote) return; // state streams in over the network
    const world = this.game.world;
    const I = this.inertia(_I);
    const m = this.mass;

    if (this.alive && this.grab) {
      this.stepGrabbed(dt);
      return;
    }
    if (this.alive && this.walking) { this.stepWalk(dt, world); return; }
    let F = null, T = null;
    if (this.alive) {
      this.flightComputer(dt);
      F = _F; T = _T;
    } else { this.throttle.fill(0); }
    // world-frame force
    const Fw = _Fw.set(0, 0, 0), Tb = _Tb.set(0, 0, 0);
    if (F && this.throttle.some((x) => x > 0)) { Fw.copy(F).applyQuaternion(this.quat); Tb.copy(T); }
    // suit leaks: gas escapes along leak normal, pushing the body the other way
    if (world.omega && !this.grab) {
      // rotating frame: centrifugal pull outward from the axis, Coriolis sideways
      Fw.addScaledVector(world.gravityAt(this.pos, _g1), m);
      Fw.addScaledVector(world.coriolis(this.vel, _g1), m);
    }
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
    if (this.alive) this.tryLand(world);
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

  /** On a spinning map: touching the floor feet-down switches to walking. */
  /** Mag boots: touching any surface feet-first locks you onto it (walk it like a floor). */
  tryLand(world) {
    if (this.jumpGrace > 0) return;
    if (this.isPlayer && this.game.settings.magBoots === false) return;
    const bodyUp = _v4.set(0, 1, 0).applyQuaternion(this.quat);
    const h = world.raycast(this.pos, _w2.copy(bodyUp).negate(), 1.3, true);
    if (!h || h.n.dot(bodyUp) < 0.6) return; // feet aren't toward that surface: no boot contact
    const up = _w1.copy(h.n);
    if (this.vel.dot(up) > 0.8) return; // still moving away from it
    // legs absorb more than a body slam
    const vn = -this.vel.dot(up);
    if (vn > 11) this.game.damage(this, (vn - 11) * 16, null, 'landing', this.pos.clone().addScaledVector(up, -1));
    if (vn > 2) this.game.onImpact(this, vn, this.pos.clone().addScaledVector(up, -1.05), up.clone());
    const view = this.aimDir(_w3).clone();
    this.quat.premultiply(_q.setFromUnitVectors(bodyUp, up)).normalize();
    this.aimPitch = 0; this.aimYaw = 0;
    this.walking = true; this.holdQ = null;
    this.walkUp = (this.walkUp || new THREE.Vector3()).copy(up);
    this.angVel.set(0, 0, 0);
    this.vel.addScaledVector(up, -this.vel.dot(up));
    this.setAimDir(view);
    if (this.isPlayer && !world.omega) this.game.audio.play('grab');
  }

  leaveWalk() {
    // fold head pitch back into the body so the view doesn't jump
    this.walking = false;
    this.quat.multiply(_q.setFromAxisAngle(_AX, this.aimPitch)).normalize();
    this.aimPitch = 0; this.aimYaw = 0;
    this.jumpGrace = this.jumped ? 0.6 : 0.35;
    if (this.jumped && this.isPlayer) this.game.hud.message('FLIGHT MODE – RCS ONLINE', '#9fe8ff', 1.2);
    this.jumped = false;
  }

  /** Mag-boot walking on any surface (and the drum floor): no RCS, legs and friction do the work. */
  stepWalk(dt, world) {
    this.throttle.fill(0);
    if (!this.walkUp) this.walkUp = world.upAt(this.pos, new THREE.Vector3());
    const up = _w1.copy(this.walkUp);
    const h = world.raycast(this.pos, _w2.copy(up).negate(), 1.6, true);
    if (!h || h.n.dot(up) < 0.45) { this.leaveWalk(); return; }
    // follow the surface's own normal (the drum floor curves as you walk)
    up.lerp(h.n, Math.min(1, dt * 12)).normalize();
    this.walkUp.copy(up);
    const bodyUp = _v4.set(0, 1, 0).applyQuaternion(this.quat);
    this.quat.premultiply(_q.setFromUnitVectors(bodyUp, up)).normalize();
    this.angVel.set(0, 0, 0);
    // desired ground velocity
    const tgt = _w3.set(0, 0, 0);
    if (this.walkTarget) tgt.copy(this.walkTarget);
    else {
      const f = this.forward(_v).addScaledVector(up, -this.forward(_v2).dot(up)).normalize();
      const r = _v2.crossVectors(f, up).normalize();
      tgt.addScaledVector(r, this.ctrl.move.x).addScaledVector(f, -this.ctrl.move.z);
      if (tgt.lengthSq() > 1) tgt.normalize();
      tgt.multiplyScalar(5.2);
    }
    tgt.addScaledVector(up, -tgt.dot(up));
    if (tgt.length() > 6) tgt.setLength(6);
    const vt = _v.copy(this.vel).addScaledVector(up, -this.vel.dot(up));
    vt.lerp(tgt, Math.min(1, dt * 10));
    let vn = this.vel.dot(up);
    // unstick: pushing a direction but not getting anywhere for a second -> small hop
    const wants = this.walkTarget ? this.walkTarget.lengthSq() > 1 : (this.ctrl.move.x !== 0 || this.ctrl.move.z !== 0);
    if (wants) {
      this.stuckAcc = (this.stuckAcc || 0) + dt;
      if (!this.stuckRef) this.stuckRef = this.pos.clone();
      if (this.stuckAcc > 1) {
        const hop = this.pos.distanceTo(this.stuckRef) < 0.25;
        this.stuckAcc = 0; this.stuckRef.copy(this.pos);
        if (hop) { this.vel.addScaledVector(up, 2.6); this.pos.addScaledVector(up, 0.05); this.leaveWalk(); return; }
      }
    } else { this.stuckAcc = 0; this.stuckRef = null; }
    // jump off the surface into flight
    const jump = this.walkTarget ? this.walkJump : this.ctrl.move.y > 0.5;
    if (jump && this.jumpGrace <= 0) { vn = 4.5; this.walkJump = false; this.jumped = true; }
    this.vel.copy(vt).addScaledVector(up, vn);
    if (vn > 1.5) { this.pos.addScaledVector(this.vel, dt); this.leaveWalk(); return; }
    // stand at hip height on the surface
    const hgt = 1.05;
    this.pos.addScaledVector(vt, dt).addScaledVector(h.n, (hgt - h.t) * Math.min(1, dt * 20));
    this.vel.addScaledVector(up, -this.vel.dot(up));
    // walking into a wall steps the boots onto it (inside corners)
    this.wallStepCool = Math.max(0, (this.wallStepCool || 0) - dt);
    let stepTo = null;
    const moveDir = _v2.copy(tgt); const ml = moveDir.length();
    world.sphereContacts(this.pos, BODY_R, (n, depth) => {
      if (n.dot(up) > 0.95) return; // the surface we're standing on: handled by the stance spring
      if (ml > 1 && this.wallStepCool <= 0 && Math.abs(n.dot(up)) < 0.35 && n.dot(moveDir) / ml < -0.5 && (!this.isPlayer || this.game.settings.magBoots !== false)) stepTo = n.clone();
      this.pos.addScaledVector(n, depth);
      const vn2 = this.vel.dot(n);
      if (vn2 < 0) this.vel.addScaledVector(n, -vn2);
    });
    if (stepTo) {
      // tip forward onto the new surface; the old floor becomes the wall behind you
      const view = this.aimDir(_w3).clone();
      this.walkUp.copy(stepTo);
      this.quat.premultiply(_q.setFromUnitVectors(_v4.set(0, 1, 0).applyQuaternion(this.quat), stepTo)).normalize();
      this.aimPitch = 0;
      this.setAimDir(view);
      this.vel.set(0, 0, 0);
      this.wallStepCool = 0.5;
    }
  }

  /** World point the hand is holding (static surface or cargo pod), or null. */
  grabPoint(out) {
    const g = this.grab;
    if (!g) return null;
    if (g.kind === 'pod' && g.obj) return out.copy(g.offset).normalize().multiplyScalar(g.obj.r).add(g.obj.pos);
    if (g.point) return out.copy(g.point);
    return null;
  }

  /** Hand-over-hand crawl along a grabbed surface (no gas). Wraps around edges; lets go past the end of a surface. */
  crawl(dt) {
    const g = this.grab, world = this.game.world;
    this.vel.set(0, 0, 0);
    const c = this.ctrl.move;
    if ((c.x === 0 && c.y === 0 && c.z === 0) || !g.normal) return true;
    // view-relative crawl: W/S go "forward" along the surface as seen from your view. When you
    // look straight at the surface, forward becomes up-the-surface (your view's up direction).
    const n = g.normal, aq = this.aimQuat(_q);
    const tang = (v) => v.addScaledVector(n, -v.dot(n));
    const f = tang(_w1.set(0, 0, -1).applyQuaternion(aq));
    const u = tang(_w2.set(0, 1, 0).applyQuaternion(aq));
    const r = tang(_w3.set(1, 0, 0).applyQuaternion(aq));
    const fl = f.length();
    const fwd = fl > 0.45 ? f.divideScalar(fl) : f.lerp(u, 1 - fl / 0.45).normalize();
    if (r.lengthSq() < 0.04) r.crossVectors(fwd, n);
    r.normalize();
    const mv = _v.set(0, 0, 0).addScaledVector(fwd, -c.z).addScaledVector(r, c.x);
    if (c.y) mv.addScaledVector(u.lengthSq() > 0.04 ? u.normalize() : fwd, c.y);
    const out = 0;
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
    this.jumpGrace = Math.max(0, this.jumpGrace - dt);
    for (const st of this.towers) st.press = Math.min(1, st.press + PLENUM.refill * (1 - st.press) * dt);
    this.adsAmt += ((this.ads ? 1 : 0) - this.adsAmt) * Math.min(1, dt * 9);
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
          if (w.mag < w.def.mag && w.reserve > 0 && !w.cancel) w.reloadT = w.def.reload;
          else { w.reloadT = 0; if (w.emptyReload) { w.rackT = this.game.time; w.rackSnd = false; } }
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
    if (t - this.lastDamageT > 5 && this.health < MAX_HP) this.health = Math.min(MAX_HP, this.health + 16 * dt);
    // aim kick recovery
    this.kick.multiplyScalar(Math.exp(-dt * 10));
  }

  startReload() {
    const w = this.weapon;
    if (w.def.kind === 'beam' || w.reloadT > 0 || w.mag >= w.def.mag || w.reserve <= 0) return false;
    w.reloadT = w.def.reload; w.cancel = false;
    w.emptyReload = w.mag === 0;
    if (!this.isPlayer && !w.def.perShell) this.game.dropMag(this, w);
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
    if (this.grab) {
      // reach for the handhold: aim the left arm (shoulder -> hand) at the grab point
      const gp = this.grabPoint(_w3);
      if (gp) {
        m.upper.updateMatrixWorld(true);
        const tl = m.upper.worldToLocal(gp.clone()).sub(la.position);
        if (tl.lengthSq() > 1e-4) {
          const d0 = _v.set(0.38, -0.08, -0.68).normalize();
          const k = Math.min(1, (this.game.time - (this.grabT0 || 0)) / 0.2);
          la.quaternion.setFromUnitVectors(d0, tl.normalize());
          if (k < 1) la.quaternion.slerp(_q2.identity(), 1 - k);
        }
        gm.rotation.z += 0.2; gm.position.y -= 0.04;
      }
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
const _g1 = new THREE.Vector3(), _w1 = new THREE.Vector3(), _w2 = new THREE.Vector3(), _w3 = new THREE.Vector3();
const _v3 = new THREE.Vector3(), _v4 = new THREE.Vector3();
const _AX = new THREE.Vector3(1, 0, 0), _AY = new THREE.Vector3(0, 1, 0);
