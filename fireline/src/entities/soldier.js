// Soldier: shared by the player and bots. Controllers write `input`, yaw and pitch; the soldier
// handles movement physics, stance, vaulting, swimming, weapons, gadgets, health, bleeding, downed state and animation.
import * as THREE from 'three';
import { clamp, lerp, damp, rand, wrapAngle } from '../core/math.js';
import { weaponStats, GADGETS, CLASSES, WEAPONS } from '../data/loadout.js';
import { buildSoldier, buildWeaponGeo, buildGadgetGeo, setRigWeapon, enableRigOutline } from './models.js';

const STANCE = {
  stand: { h: 1.8, eye: 1.62, speed: 4.3 },
  crouch: { h: 1.25, eye: 1.12, speed: 2.5 },
  prone: { h: 0.62, eye: 0.42, speed: 1.0 },
};
export const SPRINT_SPEED = 6.7;
const GRAVITY = 20;

let NEXT_ID = 1;

export class Soldier {
  constructor(game, team, name, isPlayer = false) {
    this.game = game;
    this.id = NEXT_ID++;
    this.team = team; this.name = name; this.isPlayer = isPlayer;
    this.squad = null;
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0; this.lean = 0; this.leanTarget = 0;
    this.stance = 'stand'; this.eyeH = 1.62; this.bodyH = 1.8;
    this.move = { grounded: true, hitWall: false };
    this.input = { mx: 0, mz: 0, sprint: false, jump: false, crouch: false, prone: false, fire: false, ads: false, lean: 0 };
    this.state = 'dead';
    this.hp = 100; this.bleed = 0; this.downedHp = 100; this.downedTime = 0;
    this.lastDamage = -99; this.lastAttacker = null; this.damagers = new Map();
    this.stats = { kills: 0, deaths: 0, assists: 0, revives: 0, score: 0, caps: 0, heals: 0 };
    this.slots = []; this.active = 0; this.prevActive = 0;
    this.fireCd = 0; this.reloadT = 0; this.switchT = 0; this.actionT = 0; this.action = null;
    this.adsT = 0; this.bloom = 0; this.triggerHeld = false; this.burst = 0; this.boltT = 0;
    this.recoilPitch = 0; this.recoilYaw = 0;
    this.spotUntil = 0; this.lastShotTime = -99; this.lastLoudShot = -99;
    this.walkPhase = 0; this.vault = null; this.swimming = false; this.inWater = false;
    this.fallVel = 0; this.spawnProtect = 0;
    this.reviveTarget = null; this.reviveProgress = 0;
    this.suppression = 0; this.flashed = 0;
    this.flashlightOn = false;
    this.rig = null;
    this.deathPose = 0; this.deathDir = 1; this.deadTime = 0;
    this.stepAcc = 0;
    this.healT = 0; this.bandages = 4; this.medkitCd = 0;
    this.swayP = 0; this.swayY = 0; this.holdingBreath = false;
  }

  get alive() { return this.state === 'alive'; }
  get downed() { return this.state === 'downed'; }
  get cls() { return this.loadout ? this.loadout.cls : 'assault'; }
  get isMedic() { return this.cls === 'medic'; }

  ensureRig() {
    const seed = this.id * 7;
    if (this.rig && this.rigCls === this.cls) return;
    if (this.rig) this.game.scene.remove(this.rig.root);
    this.rig = buildSoldier(this.team, this.cls, seed);
    this.rigCls = this.cls;
    this.rig.root.visible = !this.isPlayer;
    this.game.scene.add(this.rig.root);
    if (this.game.player && this.team !== this.game.player.team || (!this.game.player && this.team !== (this.game.config.team ?? 0))) {
      this.rig.outlineOn = this.game.settings.get('enemyOutline') !== false;
      enableRigOutline(this.rig, this.rig.outlineOn);
    }
  }

  setLoadout(lo) {
    this.loadout = lo;
    const mkW = (wid, att) => {
      const s = weaponStats(wid, att);
      return { kind: 'gun', id: wid, att, stats: s, mag: s.mag, reserve: s.mag * s.mags, mode: 0, model: buildWeaponGeo(wid, att) };
    };
    const C = CLASSES[lo.cls];
    const mkG = (gid) => ({ kind: 'gadget', id: gid, def: GADGETS[gid], count: GADGETS[gid].count, loaded: true, model: buildGadgetGeo(gid) });
    this.slots = [mkW(lo.primary, lo.att), mkW(lo.secondary, lo.satt), mkG(C.gadgets[0]), mkG(C.gadgets[1]),
      Object.assign(mkG(lo.throwable), { count: C.throwables })];
    this.bandages = 4;
    this.heavy = lo.armor === 'heavy';
    this.ensureRig();
  }

  get weapon() { return this.slots[this.active]; }
  get gun() { const w = this.slots[this.active]; return w && w.kind === 'gun' ? w : null; }

  spawn(x, y, z, yaw) {
    this.pos.set(x, y, z); this.vel.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0; this.lean = 0;
    this.state = 'alive'; this.hp = 100; this.bleed = 0; this.stance = 'stand'; this.eyeH = 1.62; this.bodyH = 1.8;
    this.active = 0; this.switchT = 0.4; this.reloadT = 0; this.fireCd = 0; this.action = null; this.actionT = 0;
    this.adsT = 0; this.bloom = 0; this.recoilPitch = 0; this.recoilYaw = 0; this.vault = null;
    this.damagers.clear(); this.lastAttacker = null; this.lastDamage = -99;
    this.spawnProtect = 2.5; this.suppression = 0; this.flashed = 0; this.deathPose = 0; this.reviveProgress = 0;
    this.swimming = false;
    this.move.grounded = true;
    this.ensureRig();
    this.rig.root.visible = !this.isPlayer;
    this.syncWeaponModel();
    this.spawnTime = this.game.time;
  }

  syncWeaponModel() {
    const w = this.weapon;
    if (!this.rig || !w) return;
    const pose = w.kind === 'gun' ? (w.model.pistol ? 'pistol' : 'rifle') : (w.id === 'rpg' || w.id === 'm320' ? 'rifle' : 'gadget');
    setRigWeapon(this.rig, w.kind === 'gun' ? w.model.geo : w.model, pose);
  }

  // --- geometry helpers ---
  eye(out = new THREE.Vector3()) {
    const r = this.right();
    out.set(this.pos.x + r.x * this.lean * 0.58, this.pos.y + this.eyeH - Math.abs(this.lean) * 0.1, this.pos.z + r.z * this.lean * 0.58);
    return out;
  }
  forward(out = new THREE.Vector3()) { return out.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  right(out = new THREE.Vector3()) { return out.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)); }
  aimDir(out = new THREE.Vector3()) {
    const p = this.pitch + this.swayP, y = this.yaw + this.swayY;
    const cp = Math.cos(p);
    return out.set(-Math.sin(y) * cp, Math.sin(p), -Math.cos(y) * cp);
  }
  center(out = new THREE.Vector3()) { return out.set(this.pos.x, this.pos.y + this.bodyH * 0.6, this.pos.z); }
  headPos(out = new THREE.Vector3()) {
    const hs = this.hitSpheres();
    return out.set(hs[0][0], hs[0][1], hs[0][2]);
  }

  // [x,y,z,r,part]
  hitSpheres() {
    if (this.rigHS && this.state !== 'dead' && this.game.frame - this.rigHSFrame < 6) {
      const S = this._hs || (this._hs = [[0, 0, 0, 0, 'head'], [0, 0, 0, 0, 'body'], [0, 0, 0, 0, 'body'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg']]);
      const dx = this.pos.x - this.rigHSPos.x, dy = this.pos.y - this.rigHSPos.y, dz = this.pos.z - this.rigHSPos.z;
      const R = this.rigHS;
      for (let i = 0; i < 7; i++) { S[i][0] = R[i * 4] + dx; S[i][1] = R[i * 4 + 1] + dy; S[i][2] = R[i * 4 + 2] + dz; S[i][3] = R[i * 4 + 3]; }
      return S;
    }
    const p = this.pos, f = this.forward(_f), r = this.right(_r);
    const L = this.lean * 0.5;
    const S = this._hs || (this._hs = [[0, 0, 0, 0, 'head'], [0, 0, 0, 0, 'body'], [0, 0, 0, 0, 'body'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg'], [0, 0, 0, 0, 'leg']]);
    const set = (i, fx, y, sx, rad) => { S[i][0] = p.x + f.x * fx + r.x * sx; S[i][1] = p.y + y; S[i][2] = p.z + f.z * fx + r.z * sx; S[i][3] = rad; };
    if (this.state === 'downed' || this.state === 'dead' || this.stance === 'prone') {
      const k = this.state === 'alive' ? 1 : -1;
      set(0, 0.78 * k, 0.28, 0, 0.14); set(1, 0.42 * k, 0.24, 0, 0.22); set(2, 0.05 * k, 0.22, 0, 0.21);
      set(3, -0.4 * k, 0.15, -0.12, 0.13); set(4, -0.4 * k, 0.15, 0.12, 0.13); set(5, -0.8 * k, 0.13, -0.12, 0.12); set(6, -0.8 * k, 0.13, 0.12, 0.12);
    } else if (this.stance === 'crouch') {
      set(0, 0.04, 1.34, L * 1.2, 0.15); set(1, 0.02, 1.0, L, 0.23); set(2, 0, 0.77, L * 0.5, 0.2);
      set(3, 0.2, 0.5, 0.1, 0.12); set(4, -0.05, 0.42, -0.1, 0.12); set(5, 0.38, 0.22, 0.1, 0.11); set(6, -0.3, 0.12, -0.1, 0.11);
    } else {
      set(0, 0.02, 1.69, L * 1.2, 0.15); set(1, 0, 1.36, L, 0.23); set(2, 0, 1.1, L * 0.5, 0.2);
      set(3, 0, 0.72, -0.1, 0.14); set(4, 0, 0.72, 0.1, 0.14); set(5, 0, 0.3, -0.1, 0.13); set(6, 0, 0.3, 0.1, 0.13);
    }
    return S;
  }

  // --- movement ---
  setStance(s) {
    if (s === this.stance) return true;
    const h = STANCE[s].h;
    if (h > this.bodyH + 0.01 && this.game.world.collision.overlapsAny(this.pos.x, this.pos.y + 0.05, this.pos.z, 0.28, h - 0.05)) return false;
    this.stance = s; this.bodyH = h;
    return true;
  }

  speedTarget() {
    if (this.swimming) return 2.2;
    let sp = STANCE[this.stance].speed;
    const g = this.gun;
    const mul = g ? g.stats.moveMul : 1.02;
    if (this.sprinting) sp = SPRINT_SPEED;
    else if (this.adsT > 0.5) sp = Math.min(sp, this.stance === 'stand' ? 2.7 : sp * 0.8);
    if (this.heavy) sp *= 0.94;
    if (this.bleed > 0 && this.hp < 30) sp *= 0.85;
    return sp * mul;
  }

  updateMovement(dt) {
    const coll = this.game.world.collision;
    const inp = this.input;
    if (this.vault) { this.updateVault(dt); return; }
    // stance requests
    if (inp.prone && this.stance !== 'prone') { if (this.setStance('prone')) inp.prone = false; }
    else if (inp.crouch && this.stance === 'stand') this.setStance('crouch');
    else if (!inp.crouch && !inp.proneHold && this.stance === 'crouch' && !(this.slideT > 0)) this.setStance('stand');
    const wantsMove = Math.abs(inp.mx) + Math.abs(inp.mz) > 0.05;
    this.sprinting = inp.sprint && wantsMove && inp.mz < -0.3 && this.stance !== 'prone' && !this.swimming && this.adsT < 0.3 && this.actionT <= 0;
    if (this.sprinting && this.stance === 'crouch') this.setStance('stand');
    if (this.sprinting && this.reloadT > 0 && !this.isPlayer) this.sprinting = false;
    // slide: crouch while sprinting
    if (inp.slide) {
      inp.slide = false;
      if (this.wasSprinting && this.move.grounded && !this.swimming) {
        const hs = Math.hypot(this.vel.x, this.vel.z) || 1;
        const boost = Math.max(hs, 8.4) / hs;
        this.vel.x *= boost; this.vel.z *= boost;
        this.slideT = 0.85; this.stance = 'crouch'; this.bodyH = STANCE.crouch.h;
        this.game.onVault(this);
      }
    }
    this.wasSprinting = this.sprinting;
    const sliding = this.slideT > 0;
    if (sliding) { this.slideT -= dt; this.sprinting = false; if (Math.hypot(this.vel.x, this.vel.z) < 2.6 || !this.move.grounded) this.slideT = 0; }
    // wish direction
    const f = this.forward(_f), r = this.right(_r);
    let wx = f.x * -inp.mz + r.x * inp.mx, wz = f.z * -inp.mz + r.z * inp.mx;
    const wl = Math.hypot(wx, wz);
    if (wl > 1) { wx /= wl; wz /= wl; }
    let sp = this.speedTarget();
    if (inp.mz > 0.3 && !this.swimming) sp *= 0.8; // backpedal slower
    const tx = wx * sp, tz = wz * sp;
    const accel = this.move.grounded || this.swimming ? (wantsMove ? 38 : 26) : 5;
    if (sliding) {
      const fr = Math.max(0, 1 - 1.4 * dt);
      this.vel.x = this.vel.x * fr + tx * 0.6 * dt; this.vel.z = this.vel.z * fr + tz * 0.6 * dt;
    } else {
      this.vel.x += (tx - this.vel.x) * Math.min(1, accel * dt / 4);
      this.vel.z += (tz - this.vel.z) * Math.min(1, accel * dt / 4);
    }
    // water
    const wl2 = this.game.world.terrain.waterLevel;
    const terrH = this.game.world.terrain.heightAt(this.pos.x, this.pos.z);
    this.inWater = wl2 !== null && this.pos.y < wl2 - 0.2;
    const deep = wl2 !== null && terrH < wl2 - 1.25 && this.pos.y < wl2 - 1.1;
    if (deep && !this.swimming) { this.swimming = true; this.setStance('stand'); }
    if (this.swimming && (!deep || terrH > wl2 - 1.2)) this.swimming = false;
    if (this.swimming) {
      const target = wl2 - 1.35;
      this.vel.y += (target - this.pos.y) * 6 * dt - this.vel.y * 3 * dt;
      if (inp.jump && this.pos.y > target - 0.3) { this.tryVault(true); }
    } else {
      this.vel.y -= GRAVITY * dt;
      if (inp.jump) {
        inp.jump = false;
        if (!this.tryVault(false) && this.move.grounded) {
          if (this.stance !== 'stand') this.setStance('stand');
          else { this.vel.y = 5.4; this.move.grounded = false; }
        }
      }
    }
    const preVy = this.vel.y;
    const wasGrounded = this.move.grounded;
    coll.move(this.pos, this.vel, dt, 0.3, this.bodyH, this.move.grounded ? 0.48 : 0.1, this.move);
    // fall damage
    if (this.move.grounded && !wasGrounded && preVy < -12.5 && !this.swimming) {
      this.takeDamage((-preVy - 12.5) * 9, null, 'fall', 'Fall', null, false);
    }
    // footsteps
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.move.grounded && hs > 0.5) {
      this.walkPhase += hs * dt * (this.sprinting ? 1.7 : 2.1);
      this.stepAcc += hs * dt;
      const stride = this.sprinting ? 1.9 : 1.5;
      if (this.stepAcc > stride) {
        this.stepAcc = 0;
        this.game.onFootstep(this, this.sprinting ? 1 : this.stance === 'stand' ? 0.6 : 0.3);
      }
    }
  }

  // Vault/climb onto/over obstacles in front (0.5..2.2m), like ledges, walls, windows.
  tryVault(fromWater) {
    if (this.stance === 'prone' || this.state !== 'alive') return false;
    const coll = this.game.world.collision;
    const f = this.forward(_f);
    const feet = this.pos.y;
    // obstacle at knee/waist height in front?
    let blocked = false;
    for (const hh of [0.6, 1.0, 1.4]) {
      const h = coll.raycast(this.pos.x, feet + hh, this.pos.z, f.x, 0, f.z, 0.9, { terrain: true });
      if (h && h.t < 0.85) { blocked = true; break; }
    }
    if (!blocked) return false;
    // find top surface by casting down from above
    for (const dist of [0.55, 0.8, 1.05]) {
      const px = this.pos.x + f.x * dist, pz = this.pos.z + f.z * dist;
      const top = coll.raycast(px, feet + 2.5, pz, 0, -1, 0, 2.5, {});
      if (!top) continue;
      const rise = top.y - feet;
      if (rise < 0.45 || rise > (fromWater ? 2.6 : 2.25)) continue;
      // space above?
      if (coll.overlapsAny(px, top.y + 0.05, pz, 0.28, 1.2)) {
        // window / low wall: try going over to the other side
        const ox = this.pos.x + f.x * 1.6, oz = this.pos.z + f.z * 1.6;
        if (rise < 1.3 && !coll.overlapsAny(ox, feet + 0.05, oz, 0.28, 1.2)) {
          this.startVault(ox, coll.groundAt(ox, oz, feet + 1.5), oz, 0.55, top.y);
          return true;
        }
        continue;
      }
      // vault over thin obstacles if low, else climb on top
      const ox = this.pos.x + f.x * 1.7, oz = this.pos.z + f.z * 1.7;
      const farTop = coll.raycast(ox, feet + 2.5, oz, 0, -1, 0, 3.5, {});
      if (rise < 1.3 && farTop && farTop.y < top.y - 0.4 && !coll.overlapsAny(ox, farTop.y + 0.05, oz, 0.28, 1.6)) {
        this.startVault(ox, farTop.y, oz, 0.5, top.y);
      } else {
        this.startVault(px, top.y, pz, rise > 1.3 ? 0.75 : 0.42, top.y);
      }
      return true;
    }
    return false;
  }
  startVault(x, y, z, dur, apex) {
    this.vault = { sx: this.pos.x, sy: this.pos.y, sz: this.pos.z, x, y, z, t: 0, dur, apex: Math.max(apex, y) + 0.25 };
    this.vel.set(0, 0, 0);
    this.swimming = false;
    if (this.stance !== 'stand') this.setStance('stand');
    this.game.onVault(this);
  }
  updateVault(dt) {
    const v = this.vault;
    v.t += dt / v.dur;
    const t = Math.min(1, v.t);
    const up = Math.min(1, t / 0.55);
    this.pos.x = lerp(v.sx, v.x, t < 0.4 ? t * 0.3 : 0.12 + (t - 0.4) / 0.6 * 0.88);
    this.pos.z = lerp(v.sz, v.z, t < 0.4 ? t * 0.3 : 0.12 + (t - 0.4) / 0.6 * 0.88);
    this.pos.y = t < 0.55 ? lerp(v.sy, v.apex, Math.sin(up * Math.PI / 2)) : lerp(v.apex, v.y, (t - 0.55) / 0.45);
    if (t >= 1) { this.pos.set(v.x, v.y, v.z); this.vault = null; this.move.grounded = true; }
  }

  // --- combat ---
  spread() {
    const g = this.gun;
    if (!g) return 2;
    const s = g.stats;
    const hs = Math.hypot(this.vel.x, this.vel.z);
    const mv = Math.min(1.5, hs / 4.3);
    // hip fire: unchanged from before
    const hipS = s.spreadHip * s.hipMul * (1 + mv * 0.9);
    // aimed fire: tighter, smaller movement penalty, precise first shot from a still stance
    let adsS = s.spreadAds * 0.55 * (1 + mv * 0.35);
    if (this.burst <= 1 && hs < 0.5) adsS *= 0.35;
    const a = this.adsT * this.adsT * (3 - 2 * this.adsT);
    let base = lerp(hipS, adsS, a);
    if (this.stance === 'crouch') base *= 0.8;
    else if (this.stance === 'prone') base *= 0.6;
    if (!this.move.grounded) base *= 2.5;
    base += this.bloom * lerp(1, 0.18, a);
    if (Math.abs(this.lean) > 0.5 && this.adsT > 0.5) base *= 0.85; // braced against cover
    if (s.type === 'sniper' && this.adsT > 0.95) base = 0.0;
    return base;
  }

  recoilFactor() {
    let f = 1;
    if (this.stance === 'crouch') f *= 0.82;
    if (this.stance === 'prone') f *= 0.65;
    const g = this.gun;
    if (g && (g.stats.bipod) && (this.stance === 'prone' || this.stance === 'crouch')) f *= 0.45;
    if (this.adsT < 0.5) f *= 1.15;
    return f;
  }

  canFire() {
    return this.state === 'alive' && this.switchT <= 0 && this.reloadT <= 0 && this.actionT <= 0 && !this.sprinting && !this.vault && !this.swimming && this.boltT <= 0;
  }

  // Returns true if a shot was fired this frame.
  updateWeapon(dt, now) {
    this.fireCd -= dt; this.boltT -= dt;
    if (this.switchT > 0) { this.switchT -= dt; }
    if (this.medkitCd > 0) this.medkitCd -= dt;
    if (this.actionT > 0) {
      this.actionT -= dt;
      if (this.actionT <= 0) this.finishAction();
    }
    if (this.reloadT > 0) {
      this.reloadT -= dt;
      const g = this.gun;
      if (g && g.stats.shellReload && this.reloadT <= 0) {
        if (g.reserve > 0 && g.mag < g.stats.mag) { g.mag++; g.reserve--; this.game.onReloadSound(this, 'magIn'); }
        if (g.mag < g.stats.mag && g.reserve > 0 && !this.input.fire) this.reloadT = g.stats.reload;
      } else if (g && this.reloadT <= 0) {
        const need = g.stats.mag - g.mag;
        const take = Math.min(need, g.reserve);
        g.mag += take; g.reserve -= take;
        this.game.onReloadSound(this, 'magIn');
      }
    }
    this.bloom = Math.max(0, this.bloom - dt * 6);
    // ADS
    const g = this.gun;
    const wantAds = this.input.ads && this.state === 'alive' && !this.sprinting && this.switchT <= 0 && !this.swimming && !this.vault && (g || (this.weapon && this.weapon.id === 'binoculars'));
    const adsSpeed = g ? 1 / (g.stats.adsTime * g.stats.adsMul) : 6;
    this.adsT = clamp(this.adsT + (wantAds ? adsSpeed : -adsSpeed * 1.4) * dt, 0, 1);
    // recoil recovery
    const rec = Math.min(1, dt * 7);
    const rp = this.recoilPitch * rec, ry = this.recoilYaw * rec;
    this.recoilPitch -= rp; this.recoilYaw -= ry;
    if (!this.triggerHeld || this.fireCd < -0.1) { const ar = this.adsT > 0.5; this.pitch -= rp * (ar ? 0.7 : 0.55); this.yaw -= ry * (ar ? 0.6 : 0.4); }
    if (!g) { this.triggerHeld = this.input.fire; return false; }
    const s = g.stats;
    const mode = s.modes[g.mode] || 'auto';
    const pressed = this.input.fire && !this.triggerHeld;
    this.triggerHeld = this.input.fire;
    if (this.input.fire && g.stats.shellReload && this.reloadT > 0 && g.mag > 0) this.reloadT = 0;
    if (!this.input.fire) { this.burst = 0; return false; }
    if (!this.canFire()) return false;
    if (mode !== 'auto' && !pressed && !(this.autoRepeat && mode === 'semi')) return false;
    if (this.fireCd > 0) return false;
    if (g.mag <= 0) {
      if (pressed) this.game.onDryFire(this);
      if (g.reserve > 0) this.reload();
      return false;
    }
    g.mag--;
    this.fireCd = s.interval;
    if (s.bolt || s.pump) this.boltT = s.interval * 0.9;
    this.burst++;
    this.lastShotTime = now;
    if (!s.suppressed) this.lastLoudShot = now;
    const pellets = s.pellets || 1;
    for (let i = 0; i < pellets; i++) this.game.combat.fireBullet(this, g, i);
    // recoil
    const rf = this.recoilFactor();
    const n = this.burst;
    const seed = (s.rpm % 7) + s.mag * 0.13;
    const aimed = this.adsT > 0.5;
    // aimed: learnable pattern with a little randomness; hip: the original random kick
    const kickV = aimed ? s.recoilV * s.recoilVMul * rf * (n > 1 ? 1 - Math.min(0.25, n * 0.015) : 1.15) * (0.92 + Math.random() * 0.16)
      : s.recoilV * s.recoilVMul * rf * (n > 1 ? 1 : 1.25);
    const kickH = aimed ? (Math.sin(n * 0.55 + seed) * 0.75 + (Math.random() - 0.5) * 0.5) * s.recoilH * s.recoilHMul * rf
      : (Math.random() - 0.5) * 2 * s.recoilH * s.recoilHMul * rf;
    this.pitch += kickV * Math.PI / 180;
    this.yaw -= kickH * Math.PI / 180;
    this.recoilPitch += kickV * Math.PI / 180; this.recoilYaw -= kickH * Math.PI / 180;
    this.bloom = Math.min(s.type === 'lmg' ? 3 : 2.2, this.bloom + s.recoilV * 0.6);
    this.pitch = clamp(this.pitch, -1.5, 1.5);
    this.game.onShot(this, g);
    if (g.mag === 0 && g.reserve > 0 && !this.isPlayer) this.reload();
    return true;
  }

  reload() {
    const g = this.gun;
    if (!g || this.reloadT > 0 || g.mag >= g.stats.mag || g.reserve <= 0 || this.state !== 'alive' || this.actionT > 0) return false;
    this.reloadT = g.stats.shellReload ? g.stats.reload + 0.3 : (g.mag === 0 ? g.stats.reloadEmpty : g.stats.reload);
    this.reloadTotal = this.reloadT;
    this.game.onReloadSound(this, 'magOut');
    return true;
  }

  switchTo(i) {
    if (i === this.active || !this.slots[i] || this.state !== 'alive') return;
    const s = this.slots[i];
    if (s.kind === 'gadget' && s.count <= 0 && s.def.kind !== 'medkit' && s.def.kind !== 'binoculars' && !(s.def.kind === 'c4' && this.c4s && this.c4s.length)) return;
    this.prevActive = this.active;
    this.active = i; this.switchT = 0.45; this.reloadT = 0; this.action = null; this.actionT = 0;
    this.adsT = Math.min(this.adsT, 0.2);
    this.syncWeaponModel();
    this.game.onSwitch(this);
  }

  cycleMode() {
    const g = this.gun; if (!g || g.stats.modes.length < 2) return;
    g.mode = (g.mode + 1) % g.stats.modes.length;
  }

  // Start a timed action (bandage, throw, place, heal). The effect happens in finishAction.
  startAction(name, dur, data) {
    if (this.actionT > 0 || this.state !== 'alive') return false;
    this.action = { name, data }; this.actionT = dur; this.actionDur = dur;
    this.reloadT = 0;
    return true;
  }

  finishAction() {
    const a = this.action; this.action = null;
    if (!a || this.state !== 'alive') return;
    this.game.combat.finishAction(this, a);
  }

  bandage() {
    if (this.bandages <= 0 || (this.bleed <= 0 && this.hp >= 100)) return false;
    if (this.startAction('bandage', 1.8)) { this.game.onBandage(this); return true; }
    return false;
  }

  // --- damage ---
  takeDamage(amount, attacker, part, weaponName, dir, explosive) {
    if (this.state === 'dead') return;
    if (this.spawnProtect > 0 && attacker && attacker !== this) return;
    if (attacker && attacker !== this && attacker.team === this.team) return; // no friendly fire
    const now = this.game.time;
    if (this.heavy && part !== 'head') amount *= 0.86;
    this.lastDamage = now;
    if (attacker && attacker !== this) {
      this.lastAttacker = attacker;
      this.damagers.set(attacker, (this.damagers.get(attacker) || 0) + amount);
      this.lastDamageDir = dir ? dir.clone() : null;
    }
    if (this.state === 'downed') {
      this.downedHp -= amount * 1.5;
      if (this.downedHp <= 0) this.die(attacker, weaponName, part === 'head', true);
      return;
    }
    this.hp -= amount;
    if (amount >= 12 && part !== 'fall') this.bleed = Math.min(3.5, this.bleed + amount * 0.012);
    this.game.onDamaged(this, attacker, amount, part, dir);
    if (this.hp <= 0) {
      const overkill = -this.hp;
      const instant = overkill > 70 || (part === 'head' && amount > 90) || (explosive && overkill > 40) || this.swimming;
      if (instant) this.die(attacker, weaponName, part === 'head', false);
      else this.goDown(attacker, weaponName, part === 'head');
    }
  }

  goDown(attacker, weaponName, head) {
    this.state = 'downed'; this.hp = 0; this.downedHp = 100; this.downedTime = 0;
    this.setStance('prone');
    this.stance = 'prone'; this.bodyH = 0.6;
    this.vel.x = this.vel.z = 0;
    this.adsT = 0; this.reloadT = 0; this.action = null; this.actionT = 0; this.vault = null;
    this.reviveProgress = 0;
    this.game.onDowned(this, attacker, weaponName, head);
  }

  die(attacker, weaponName, head, finished) {
    if (this.state === 'dead') return;
    const wasDowned = this.state === 'downed';
    this.state = 'dead';
    this.deadTime = 0; this.deathDir = Math.random() < 0.5 ? -1 : 1;
    this.stats.deaths++;
    this.game.onKilled(this, attacker || this.lastAttacker, weaponName, head, wasDowned);
  }

  revive(by) {
    if (this.state !== 'downed') return;
    this.state = 'alive';
    this.hp = by && by.isMedic ? 100 : 40;
    this.bleed = 0;
    this.setStance('crouch');
    this.spawnProtect = 1.2;
    this.game.onRevived(this, by);
  }

  heal(amount) { this.hp = Math.min(100, this.hp + amount); }

  // Scope sway (player only): stance, bipod, breath and suppression all matter.
  updateSway(dt, now) {
    const g = this.gun;
    const scoped = this.isPlayer && g && this.adsT > 0.3 && (g.stats.zoom >= 3.5 || g.stats.type === 'sniper' || g.stats.type === 'dmr');
    let A = 0;
    if (scoped) {
      A = (g.stats.type === 'sniper' ? 0.55 : 0.35) * Math.PI / 180;
      if (this.stance === 'crouch') A *= 0.6; else if (this.stance === 'prone') A *= 0.3;
      if (g.stats.bipod && this.stance !== 'stand') A *= 0.4;
      if (Math.abs(this.lean) > 0.5) A *= 0.7;
      if (Math.hypot(this.vel.x, this.vel.z) > 0.5) A *= 1.8;
      if (this.holdingBreath) A *= 0.08;
      A *= 1 + this.suppression * 2.5;
    }
    const ty = Math.sin(now * 0.83) * A + Math.sin(now * 2.1 + 1) * A * 0.35;
    const tp = Math.sin(now * 1.37 + 2) * A * 0.8 + Math.sin(now * 2.9) * A * 0.25;
    const k = 1 - Math.exp(-dt * 6);
    this.swayY += (ty - this.swayY) * k; this.swayP += (tp - this.swayP) * k;
  }

  // per-frame non-movement update (health, bleeding, timers)
  updateVitals(dt, now) {
    this.updateSway(dt, now);
    if (this.spawnProtect > 0) { this.spawnProtect -= dt; if (this.input.fire || Math.hypot(this.vel.x, this.vel.z) > 2) this.spawnProtect = Math.min(this.spawnProtect, 0.5); }
    this.suppression = Math.max(0, this.suppression - dt * 0.35);
    this.flashed = Math.max(0, this.flashed - dt * 0.4);
    this.lean = damp(this.lean, this.state === 'alive' && !this.sprinting ? this.leanTarget : 0, 12, dt);
    const eyeT = this.state === 'alive' ? STANCE[this.stance].eye : 0.35;
    this.eyeH = damp(this.eyeH, eyeT, 10, dt);
    if (this.state === 'alive') {
      if (this.bleed > 0) { this.hp -= this.bleed * dt; if (this.hp <= 0) { this.hp = 0; this.goDown(this.lastAttacker, 'Bleeding', false); } }
      else if (now - this.lastDamage > 7 && this.hp < 60) this.hp = Math.min(60, this.hp + 4 * dt);
      if (this.healT > 0) { const h = Math.min(this.healT, 30 * dt); this.healT -= h; this.heal(h); }
    } else if (this.state === 'downed') {
      this.downedTime += dt;
      this.downedHp -= dt * 100 / 28;
      if (this.downedHp <= 0) this.die(this.lastAttacker, 'Bled out', false, true);
    } else if (this.state === 'dead') this.deadTime += dt;
  }

  // --- animation ---
  updateAnim(dt, camPos) {
    const rig = this.rig;
    if (!rig) return;
    if (this.isPlayer) { rig.root.visible = false; return; }
    if (this.state === 'dead' && this.deadTime > 25) { rig.root.visible = false; return; }
    if (rig.outlines) { const on = rig.outlineOn !== false && this.state !== 'dead'; if (on !== rig._olv) { rig._olv = on; for (const o of rig.outlines) o.visible = on; } }
    rig.root.visible = true;
    const d2 = (this.pos.x - camPos.x) ** 2 + (this.pos.z - camPos.z) ** 2;
    const far = d2 > 160 * 160;
    if (far && (this.id + this.game.frame) % 3 !== 0 && this.state === 'alive') { rig.root.position.copy(this.pos); rig.root.rotation.y = this.yaw; return; }
    const castShadow = d2 < 90 * 90;
    if (castShadow !== this._cs) { this._cs = castShadow; rig.root.traverse(o => { if (o.isMesh) o.castShadow = castShadow; }); }
    rig.root.position.copy(this.pos);
    rig.root.rotation.y = this.yaw;
    const A = this.anim || (this.anim = { phase: 0, legYaw: 0, lastYaw: this.yaw, shuffle: 0, throwT: 0, meleeT: 0, death: null });
    const t = this.game.time;
    // local-space velocity -> gait
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    const vf = this.vel.x * fx + this.vel.z * fz, vr = this.vel.x * rx + this.vel.z * rz;
    const hs = Math.hypot(vf, vr);
    const back = vf < -0.4;
    const yawRate = wrapAngle(this.yaw - A.lastYaw) / Math.max(dt, 1e-3); A.lastYaw = this.yaw;
    let legTarget = 0;
    if (hs > 0.5 && this.stance !== 'prone' && this.state === 'alive') {
      let a = Math.atan2(vr, vf);
      if (Math.abs(a) > Math.PI / 2) a = wrapAngle(a - Math.PI);
      legTarget = -Math.max(-1.05, Math.min(1.05, a));
    }
    A.legYaw = damp(A.legYaw, legTarget, 9, dt);
    const stride = this.stance === 'crouch' ? 2.7 : this.sprinting ? 1.45 : this.stance === 'prone' ? 3.2 : 2.05;
    A.phase += hs * dt * stride * (back ? -1 : 1);
    if (hs < 0.4 && Math.abs(yawRate) > 1.2 && this.state === 'alive' && this.stance !== 'prone') { A.shuffle = Math.min(1, A.shuffle + dt * 6); A.phase += dt * 7; }
    else A.shuffle = Math.max(0, A.shuffle - dt * 4);
    const s = Math.sin(A.phase), c = Math.cos(A.phase);
    const ampT = Math.max(Math.min(1, hs / (this.sprinting ? 6 : this.stance === 'crouch' ? 2.4 : 4)), A.shuffle * 0.35);
    A.amp = damp(A.amp ?? ampT, ampT, 8, dt);
    const amp = A.amp;
    // targets
    let bodyY = 0.95, bodyRX = 0, bodyRZ = 0, bodyX = this.lean * 0.12;
    let spineRX = this.pitch * 0.25, spineRY = -A.legYaw * 0.85, spineRZ = -this.lean * 0.42;
    let headRX = this.pitch * 0.3, aimRX = this.pitch * 0.72, aimRY = 0;
    let armRX = 0, armRZ = 0, armLX = 0, armLZ = 0, wRX = 0, wRZ = 0, wZ = 0;
    let tL = 0, tR = 0, kL = 0, kR = 0, tLz = 0, tRz = 0;
    if (this.state === 'dead') {
      if (!A.death) A.death = { dir: this.deathDir, roll: (Math.random() - 0.5) * 0.8, arms: Math.random() };
      this.deathPose = Math.min(1, this.deathPose + dt * 2.2);
      const p = this.deathPose, e = 1 - Math.pow(1 - p, 3);
      const D = A.death;
      bodyY = lerp(0.95, 0.17, e); bodyRX = 1.52 * D.dir * e; bodyRZ = D.roll * e;
      spineRX = 0.15 * e; spineRY = 0; spineRZ = D.roll * 0.3 * e; headRX = (D.dir > 0 ? -0.5 : 0.6) * e;
      aimRX = lerp(this.pitch, D.dir > 0 ? 1.2 : -1.3, e); armRZ = -0.6 * e * D.arms; armLZ = 0.7 * e;
      tL = 0.25 * e; tR = -0.15 * e; kL = -0.4 * e; kR = -0.15 * e; tLz = 0.15 * e; tRz = -0.1 * e;
      wRZ = 1.2 * e;
    } else if (this.state === 'downed') {
      const w = Math.sin(this.downedTime * 2.4) * 0.06;
      bodyY = 0.2; bodyRX = 1.48; bodyRZ = 0.2 + w;
      spineRX = -0.25; spineRY = 0; headRX = -0.7; aimRX = -0.9 + w; aimRY = 0.4;
      armLX = -0.6; armLZ = 0.4; armRX = -0.3;
      tL = 0.45 + w; kL = -0.9; tR = 0.15; kR = -0.35; tLz = 0.1; tRz = -0.12;
      wRZ = 1.3;
    } else if (this.stance === 'prone') {
      bodyY = 0.2; bodyRX = -1.47; spineRX = 0; spineRY = 0; headRX = 1.15 + this.pitch * 0.4; aimRX = 1.47 + this.pitch * 0.8;
      const cr = s * amp;
      tL = 0.05 + cr * 0.3; tR = 0.05 - cr * 0.3; kL = -0.15 - Math.max(0, cr) * 0.9; kR = -0.15 - Math.max(0, -cr) * 0.9;
      tLz = 0.18; tRz = -0.18; bodyRZ = cr * 0.05;
      armLX = cr * 0.15; armRX = -cr * 0.15;
    } else if (this.stance === 'crouch') {
      // kneel on the left knee, right foot planted; blend to a crouch-walk when moving
      const kneel = 1 - amp;
      bodyY = lerp(0.66, 0.62, kneel); bodyRX = -0.08;
      tL = lerp(0.9 + s * 0.45, 0.25, kneel); kL = lerp(-1.35 - Math.max(0, c) * 0.5, -1.75, kneel);
      tR = lerp(0.9 - s * 0.45, 1.1, kneel); kR = lerp(-1.35 - Math.max(0, -c) * 0.5, -1.65, kneel);
      spineRX += 0.08; aimRX -= 0.08;
      bodyY += -Math.abs(s) * 0.02 * amp;
    } else {
      const swing = this.sprinting ? 0.8 : 0.48;
      tL = s * swing * amp; tR = -s * swing * amp;
      kL = -(Math.max(0, c) * (this.sprinting ? 1.4 : 0.95) + 0.06) * amp;
      kR = -(Math.max(0, -c) * (this.sprinting ? 1.4 : 0.95) + 0.06) * amp;
      bodyY = 0.95 - Math.abs(Math.sin(A.phase)) * 0.035 * amp + (this.sprinting ? -0.03 : 0);
      bodyRZ = s * 0.03 * amp;
      if (this.sprinting) {
        spineRX = -0.22; aimRX = -0.75; aimRY = 0.55; wRZ = 0.9; wRX = 0.2; headRX = 0.15;
        armRX = s * 0.25; armLX = -s * 0.25;
      } else spineRY += s * 0.04 * amp;
      if (this.slideT > 0) { bodyY = 0.5; bodyRX = 0.35; tL = 1.25; kL = -0.3; tR = 0.5; kR = -1.4; spineRX = -0.1; aimRX = this.pitch * 0.7 - 0.35; }
      if (!this.move.grounded && !this.swimming && !this.vault) { tL = 0.75; kL = -1.15; tR = 0.15; kR = -0.6; }
      if (this.vault) { tL = 1.2; kL = -1.6; tR = 0.8; kR = -1.2; bodyRX = -0.2; aimRX = -0.5; }
      if (this.swimming) { bodyY = 0.95; tL = s * 0.4; tR = -s * 0.4; kL = -0.3; kR = -0.3; aimRX = -0.5; armRX = c * 0.4; armLX = -c * 0.4; }
    }
    if (this.state === 'alive') {
      // reload: left hand to the magazine and back, weapon tilted
      if (this.reloadT > 0) {
        const tot = this.reloadTotal || 2, k2 = 1 - this.reloadT / tot;
        const dip = k2 < 0.25 ? k2 / 0.25 : k2 < 0.65 ? 1 : k2 < 0.85 ? 1 - (k2 - 0.65) / 0.2 : 0;
        armLX = -0.55 * dip; armLZ = 0.25 * dip; wRZ += 0.45 * Math.sin(Math.min(1, k2) * Math.PI); wRX += 0.15 * dip;
        aimRX -= 0.18 * Math.sin(Math.min(1, k2) * Math.PI);
      }
      if (this.action) {
        const k2 = 1 - this.actionT / (this.actionDur || 1);
        if (this.action.name === 'throw' || this.action.name === 'throwC4') {
          const wind = k2 < 0.55 ? k2 / 0.55 : 1 - (k2 - 0.55) / 0.45;
          armRX = 2.6 * wind - 0.6 * (1 - wind) * (k2 > 0.55 ? 1 : 0); armRZ = -0.3 * wind; aimRX = this.pitch * 0.7 - 0.3; wZ = 0.2;
          spineRY += 0.35 * wind;
        } else if (this.action.name === 'melee') {
          const sw = Math.sin(Math.min(1, k2 * 1.6) * Math.PI);
          aimRY = -0.6 * sw; wZ = -0.25 * sw; spineRY += -0.4 * sw;
        } else { armLX = -0.9; armRX = -0.5; aimRX -= 0.6; wRZ += 0.8; }
      }
      if (this.reviveProgress > 0) { aimRX = -1.1; armLX = -0.4; armRX = -0.3; wRZ = 1.0; }
      // firing kick
      const since = t - this.lastShotTime;
      if (since < 0.08) { wZ += 0.05 * (1 - since / 0.08); aimRX += 0.04 * (1 - since / 0.08); }
    }
    // per-channel blend rates: legs settle quickly, the body and spine ease between stances
    const kFast = 1 - Math.exp(-dt * (this.state === 'dead' ? 26 : 16));
    const kMid = 1 - Math.exp(-dt * (this.state === 'dead' ? 22 : 10));
    const kSlow = 1 - Math.exp(-dt * (this.state === 'dead' ? 18 : 7));
    let k = kFast;
    const ap = (o, prop, v) => { o[prop] += (v - o[prop]) * k; };
    k = kSlow;
    ap(rig.body.position, 'y', bodyY); ap(rig.body.position, 'x', bodyX);
    ap(rig.body.rotation, 'x', bodyRX); ap(rig.body.rotation, 'z', bodyRZ);
    k = kMid;
    ap(rig.pelvis.rotation, 'y', A.legYaw * (this.stance === 'prone' || this.state !== 'alive' ? 0 : 1));
    ap(rig.spine.rotation, 'x', spineRX); ap(rig.spine.rotation, 'y', spineRY); ap(rig.spine.rotation, 'z', spineRZ);
    ap(rig.head.rotation, 'x', headRX);
    k = kFast;
    ap(rig.aim.rotation, 'x', aimRX); ap(rig.aim.rotation, 'y', aimRY);
    ap(rig.armR.rotation, 'x', armRX); ap(rig.armR.rotation, 'z', armRZ);
    ap(rig.armL.rotation, 'x', armLX); ap(rig.armL.rotation, 'z', armLZ);
    ap(rig.weapon.rotation, 'x', wRX); ap(rig.weapon.rotation, 'z', wRZ);
    const baseZ = rig.pose === 'pistol' ? -0.42 : rig.pose === 'gadget' ? -0.3 : -0.33;
    ap(rig.weapon.position, 'z', baseZ + wZ);
    const L = rig.legs;
    ap(L[0].thigh.rotation, 'x', tL); ap(L[1].thigh.rotation, 'x', tR);
    ap(L[0].thigh.rotation, 'z', tLz); ap(L[1].thigh.rotation, 'z', tRz);
    ap(L[0].shin.rotation, 'x', kL); ap(L[1].shin.rotation, 'x', kR);
    if (this.state !== 'dead') A.death = null;
    // hitboxes follow the animated skeleton
    rig.root.updateMatrixWorld(true);
    const R = this.rigHS || (this.rigHS = new Float32Array(28));
    const put = (i, obj, x, y, z, rad) => { _hv.set(x, y, z); obj.localToWorld(_hv); R[i * 4] = _hv.x; R[i * 4 + 1] = _hv.y; R[i * 4 + 2] = _hv.z; R[i * 4 + 3] = rad; };
    put(0, rig.head, 0, 0.14, 0, 0.15); put(1, rig.spine, 0, 0.33, 0, 0.23); put(2, rig.spine, 0, 0.09, 0, 0.2);
    put(3, L[0].thigh, 0, -0.22, 0, 0.12); put(4, L[1].thigh, 0, -0.22, 0, 0.12); put(5, L[0].shin, 0, -0.24, 0, 0.11); put(6, L[1].shin, 0, -0.24, 0, 0.11);
    this.rigHSPos = (this.rigHSPos || new THREE.Vector3()).copy(this.pos);
    this.rigHSFrame = this.game.frame;
  }

  muzzleWorld(out = new THREE.Vector3()) {
    if (this.rig && this.rig.weaponMesh && !this.isPlayer) {
      const g = this.gun;
      const m = g ? g.model.muzzle : _zero;
      this.rig.weapon.updateWorldMatrix(true, false);
      return out.copy(m).applyMatrix4(this.rig.weapon.matrixWorld);
    }
    return this.eye(out);
  }

  removeFromScene() { if (this.rig) this.game.scene.remove(this.rig.root); }
}

const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _zero = new THREE.Vector3(), _hv = new THREE.Vector3();
export { STANCE };
void wrapAngle; void rand; void WEAPONS;
