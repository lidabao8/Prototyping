import * as THREE from 'three';
import { clamp, rand, DEG, interceptTime, interceptTimeRocket, randomPerp } from './math.js';
import { GAS_MAX, NOZZLE_F, THROW_TIME } from './soldier.js';
import { GRENADE, MELEE } from './weapons.js';

export const SKILLS = {
  easy: { reaction: 0.65, err0: 11, settle: 0.85, floor: 2.2, track: 130, velNoise: 0.45, velLag: 0.8, fov: 55, head: 0, jink: 0.3, grenade: 0.03, dodge: 0.05, range: 110, burstPause: 0.6 },
  normal: { reaction: 0.4, err0: 7, settle: 0.55, floor: 1.2, track: 220, velNoise: 0.25, velLag: 0.45, fov: 65, head: 0.03, jink: 0.6, grenade: 0.06, dodge: 0.3 },
  hard: { reaction: 0.25, err0: 4.5, settle: 0.34, floor: 0.6, track: 360, velNoise: 0.12, velLag: 0.3, fov: 78, head: 0.15, jink: 1.0, grenade: 0.1, dodge: 0.65 },
  elite: { reaction: 0.17, err0: 3, settle: 0.24, floor: 0.33, track: 520, velNoise: 0.06, velLag: 0.18, fov: 85, head: 0.35, jink: 1.2, grenade: 0.14, dodge: 0.9 },
};

const ROLES = ['anchor', 'rusher', 'flanker', 'anchor', 'flanker', 'rusher'];
const PREF_RANGE = { rifle: 28, shotgun: 6, gyrojet: 34, recoilless: 26, maser: 24 };
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q = new THREE.Quaternion();
const CHEST = new THREE.Vector3(0, 0.2, 0), HEAD = new THREE.Vector3(0, 0.6, 0);

export class Bot {
  constructor(game, soldier, skillName, idx) {
    this.game = game;
    this.s = soldier;
    soldier.isBot = true;
    soldier.bot = this;
    this.skill = SKILLS[skillName] || SKILLS.hard;
    this.role = ROLES[idx % ROLES.length];
    this.known = new Map();
    this.phase = Math.random();
    this.reset();
  }

  reset() {
    this.state = 'patrol';
    this.target = null;
    this.acquireT = 0;
    this.err = new THREE.Vector2();
    this.path = null;
    this.goal = null; this.goalNode = -1;
    this.goalT = 0;
    this.nextPercept = 0; this.nextThink = 0; this.nextPull = 0;
    this.jink = new THREE.Vector3(); this.jinkT = 0;
    this.burst = 0; this.burstPause = 0;
    this.combatPosT = 0;
    this.lastPos = new THREE.Vector3(); this.stuckT = 0;
    this.velEst = new THREE.Vector3();
    this.aimHead = false;
    this.coast = false;
    this.lookDir = new THREE.Vector3(1, 0, 0);
    this.lookT = 0;
    this.hitsRecent = 0;
    this.retreatUntil = 0;
    this.waitUntil = 0;
    this.known.clear();
  }

  onSpawn() {
    this.reset();
    this.lastPos.copy(this.s.pos);
    this.lookDir.set(this.s.team === 0 ? 1 : -1, 0, 0);
  }

  get eye() { return this.s.eye(this._eye || (this._eye = new THREE.Vector3())); }

  // ---------- Perception ----------
  perceive() {
    const g = this.game, s = this.s, t = g.time;
    const eye = this.eye;
    const aim = s.aimDir(_v3);
    const cosF = Math.cos(this.skill.fov * DEG);
    for (const e of g.soldiers) {
      if (e.team === s.team) continue;
      let k = this.known.get(e.id);
      if (!e.alive) { if (k) this.known.delete(e.id); continue; }
      const d = _v.subVectors(e.pos, eye);
      const dist = d.length();
      let vis = false;
      if (dist < (this.skill.range || (g.world.enclosed ? 170 : 240))) {
        const inView = d.dot(aim) / dist > cosF || dist < 7;
        if (inView && g.world.los(eye, _v2.copy(CHEST).applyQuaternion(e.quat).add(e.pos))) vis = true;
        // thruster plumes are bright: notice firing jets slightly outside the view cone
        if (!vis && dist < 60 && d.dot(aim) / dist > cosF - 0.25 && e.lastThrustT > t - 0.2 && g.world.los(eye, e.pos)) vis = true;
      }
      if (vis) {
        if (!k) { k = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), t: 0, visible: false, first: t, e }; this.known.set(e.id, k); }
        if (!k.visible) k.first = t;
        k.visible = true; k.pos.copy(e.pos); k.vel.copy(e.vel); k.t = t;
        g.reportIntel(s.team, e, s);
      } else if (k) k.visible = false;
    }
    // merge team intel (shared callouts)
    for (const [id, it] of g.intel[s.team]) {
      if (t - it.t > 6) continue;
      const k = this.known.get(id);
      if (!k) this.known.set(id, { pos: it.pos.clone(), vel: it.vel.clone(), t: it.t, visible: false, first: t, e: it.e });
      else if (!k.visible && it.t > k.t) { k.pos.copy(it.pos); k.vel.copy(it.vel); k.t = it.t; }
    }
    for (const [id, k] of this.known) if (t - k.t > 12 || !k.e.alive) this.known.delete(id);
  }

  hear(src, pos, loud) {
    const s = this.s;
    if (!s.alive || src.team === s.team) return;
    const d = s.pos.distanceTo(pos);
    if (d > loud) return;
    let k = this.known.get(src.id);
    const noise = _v.randomDirection().multiplyScalar(d * 0.06);
    if (!k) { k = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), t: 0, visible: false, first: this.game.time, e: src }; this.known.set(src.id, k); }
    if (!k.visible) { k.pos.copy(pos).add(noise); k.vel.copy(src.vel); k.t = this.game.time; }
  }

  onDamaged(attacker) {
    this.hitsRecent += 1;
    if (!attacker || attacker === this.s) return;
    let k = this.known.get(attacker.id);
    if (!k) { k = { pos: attacker.pos.clone(), vel: attacker.vel.clone(), t: this.game.time, visible: false, first: this.game.time, e: attacker }; this.known.set(attacker.id, k); }
    if (!k.visible) { k.pos.copy(attacker.pos); k.vel.copy(attacker.vel); k.t = this.game.time; }
    // hurt and outgunned -> break line of sight
    if (this.s.health < 40 && this.game.time > this.retreatUntil) { this.state = 'retreat'; this.retreatUntil = this.game.time + 4; this.goal = null; this.path = null; }
  }

  // ---------- Decision ----------
  chooseTarget() {
    const s = this.s, eye = this.eye, aim = s.aimDir(_v3);
    let best = null, bestScore = Infinity;
    for (const k of this.known.values()) {
      if (!k.visible) continue;
      const e = k.e;
      const d = _v.subVectors(e.pos, eye);
      const dist = d.length();
      const ang = Math.acos(clamp(d.dot(aim) / dist, -1, 1)) / DEG;
      let score = dist + ang * 0.6;
      // threat: is this enemy pointing at me?
      const ea = e.aimDir(_v2);
      if (-d.dot(ea) / dist > 0.97) score -= 20;
      score -= (100 - e.health) * 0.12;
      if (e === this.target) score -= 15;
      if (score < bestScore) { bestScore = score; best = e; }
    }
    if (best !== this.target) {
      const prev = this.target;
      this.target = best;
      if (best) {
        const d = _v.subVectors(best.pos, eye).normalize();
        const turn = Math.acos(clamp(d.dot(aim), -1, 1)) / DEG;
        const k = this.known.get(best.id);
        const fresh = !prev && this.game.time - k.first < 0.3;
        this.acquireT = this.game.time + this.skill.reaction * (fresh ? 1 : 0.55) * rand(0.8, 1.25);
        const m = this.skill.err0 * DEG * (0.6 + Math.min(1.5, turn / 60));
        const a = Math.random() * Math.PI * 2;
        this.err.set(Math.cos(a) * m, Math.sin(a) * m);
        this.velEst.copy(best.vel);
        this.aimHead = Math.random() < this.skill.head;
      }
    }
  }

  think() {
    const g = this.game, s = this.s, t = g.time;
    this.chooseTarget();
    const fuel = s.gas / GAS_MAX;
    const tgt = this.target;
    const prev = this.state;
    if (tgt) {
      if (this.state === 'retreat' && t < this.retreatUntil) { /* keep retreating */ }
      else if (s.health < 35 && tgt.health > 35 && t > this.retreatUntil + 3) { this.state = 'retreat'; this.retreatUntil = t + 4; }
      else this.state = 'engage';
    } else {
      let freshest = null;
      for (const k of this.known.values()) if (!freshest || k.t > freshest.t) freshest = k;
      if (fuel < 0.14) this.state = 'refuel';
      else if (this.state === 'refuel' && fuel < 0.55 && !freshest) this.state = 'refuel';
      else if (freshest && t - freshest.t < 8) { this.state = 'hunt'; this.huntK = freshest; }
      else this.state = 'patrol';
    }
    if (prev !== this.state) { this.goal = null; this.path = null; this.coast = false; }
    // weapon management
    this.manageWeapons(tgt);
    if (tgt) this.considerGrenade(tgt);
    // goal planning
    if (!this.goal || t > this.goalT) this.planGoal();
    this.hitsRecent *= 0.8;
    // stuck detection
    if (s.pos.distanceTo(this.lastPos) < 0.8 && !s.grab && this.goal && s.pos.distanceTo(this.goal) > 3) {
      this.stuckT += 0.3;
      if (this.stuckT > 3) { this.goal = null; this.path = null; this.stuckT = 0; this.state = 'patrol'; }
    } else this.stuckT = 0;
    this.lastPos.copy(s.pos);
  }

  /** How well a weapon suits the current fight (0 = useless). */
  suit(ws, dist, relSpeed, anchored) {
    const d = ws.def;
    if (d.kind !== 'beam' && ws.mag === 0 && ws.reserve === 0) return 0;
    let v;
    switch (d.id) {
      case 'shotgun': v = dist < 9 ? 1.6 : dist < 16 ? 0.8 : 0.08; break;
      case 'rifle': v = dist < 4 ? 0.7 : 1.0; break;
      case 'gyrojet': v = dist < 9 ? 0.05 : (relSpeed < 2 || anchored) ? 1.35 : 0.55; break;
      case 'recoilless': v = dist < 6 ? 0.1 : (relSpeed < 3 || anchored) ? 1.25 : 0.8; break;
      case 'maser': v = ws.overheat ? 0 : dist < 80 ? 1.15 - ws.heat * 0.5 : 0.4; break;
      default: v = 0.5;
    }
    if (d.kind !== 'beam' && ws.mag === 0) v *= ws === this.s.weapon ? 0.5 : 0.35; // would need a reload first
    return v;
  }

  manageWeapons(tgt) {
    const s = this.s, w = s.weapon;
    if (tgt) {
      const dist = tgt.pos.distanceTo(s.pos);
      const relSpeed = _v.subVectors(tgt.vel, s.vel).length();
      let best = s.cur, bestV = -1;
      s.weapons.forEach((ws, i) => {
        const v = this.suit(ws, dist, relSpeed, !!tgt.grab) * (i === s.cur ? 1.15 : 1); // hysteresis
        if (v > bestV) { bestV = v; best = i; }
      });
      if (best !== s.cur && s.switchT <= 0) s.switchTo(best);
    } else {
      // between fights: hold the most versatile weapon and top it off
      let best = 0, bestV = -1;
      s.weapons.forEach((ws, i) => { const v = this.suit(ws, 25, 2, false); if (v > bestV) { bestV = v; best = i; } });
      if (best !== s.cur && s.switchT <= 0) s.switchTo(best);
      for (const ws of s.weapons) if (ws === w && ws.def.kind !== 'beam' && ws.mag < ws.def.mag * 0.6) s.startReload();
    }
    if (s.weapon.def.kind !== 'beam' && s.weapon.mag === 0) s.startReload();
  }

  planGoal() {
    const g = this.game, s = this.s, w = g.world, t = g.time;
    this.goalT = t + 3 + Math.random() * 2;
    let node = -1;
    if (this.state === 'engage' && this.target) node = this.pickCombatNode(this.target);
    else if (this.state === 'retreat') node = this.pickCoverNode(16, true);
    else if (this.state === 'refuel') { node = this.pickCoverNode(25, true); this.goalT = t + 8; }
    else if (this.state === 'hunt' && this.huntK) node = this.pickHuntNode(this.huntK.pos);
    else node = this.pickPatrolNode();
    if (node < 0) return;
    this.goalNode = node;
    this.goal = w.nav[node].pos.clone();
    const threats = this.threatPositions();
    this.path = w.findPath(s.pos, node, threats.length && this.state !== 'engage' ? (nd) => this.exposure(nd.pos, threats) * 6 : null);
    this.coast = false;
  }

  threatPositions() {
    const out = [];
    for (const k of this.known.values()) if (this.game.time - k.t < 6) out.push(k.pos);
    return out;
  }

  exposure(p, threats) {
    let n = 0;
    for (const tp of threats) if (tp.distanceToSquared(p) < 120 * 120 && this.game.world.los(p, tp, true)) n++;
    return n;
  }

  candidates(center, r, max = 40) {
    const out = [];
    this.game.world.forNear(center, r, (i) => {
      const nd = this.game.world.nav[i];
      if (nd.pos.distanceToSquared(center) < r * r) out.push(nd);
    });
    // random subsample to bound cost
    for (let i = out.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [out[i], out[j]] = [out[j], out[i]]; }
    out.length = Math.min(out.length, max);
    return out;
  }

  teammatePenalty(p) {
    let pen = 0;
    for (const o of this.game.soldiers) {
      if (o === this.s || o.team !== this.s.team || !o.alive) continue;
      const d = o.pos.distanceTo(p);
      if (d < 7) pen += (7 - d) * 1.5;
      if (o.bot && o.bot.goal && o.bot.goal.distanceTo(p) < 5) pen += 6;
    }
    return pen;
  }

  pickCombatNode(tgt) {
    const s = this.s, w = this.game.world;
    const pref = (PREF_RANGE[s.weapon.def.id] || 28) * (this.role === 'rusher' ? 0.6 : this.role === 'anchor' ? 1.2 : 1);
    const tp = _v3.copy(CHEST).applyQuaternion(tgt.quat).add(tgt.pos).clone();
    const threats = this.threatPositions();
    let best = -1, bestScore = Infinity;
    for (const nd of this.candidates(s.pos, 20, 36)) {
      const dist = nd.pos.distanceTo(tp);
      if (dist < 4) continue;
      if (!w.los(nd.pos, tp, true)) continue;
      let score = Math.abs(dist - pref) * 0.5 + nd.pos.distanceTo(s.pos) * 0.35;
      if (nd.surf) score -= 7;           // can anchor there: stable aim, free push-off, fuel regen
      // use the third dimension: attack from above/below the target's own plane, where it has to pitch to answer
      const off = _v.subVectors(nd.pos, tp).normalize();
      const tUp = _v2.set(0, 1, 0).applyQuaternion(tgt.quat);
      score -= Math.abs(off.dot(tUp)) * 6;
      score -= Math.abs(nd.pos.y - s.pos.y) > 5 ? 1.5 : 0;
      score += (this.exposure(nd.pos, threats) - 1) * 8;
      score += this.teammatePenalty(nd.pos);
      if (this.role === 'flanker') {
        // prefer angles that differ from the team's line of fire
        const a = _v.subVectors(nd.pos, tp).normalize();
        for (const o of this.game.soldiers) if (o !== s && o.team === s.team && o.alive) {
          const b = _v2.subVectors(o.pos, tp).normalize();
          score += Math.max(0, a.dot(b)) * 4;
        }
      }
      score += Math.random() * 3;
      if (score < bestScore) { bestScore = score; best = nd.i; }
    }
    return best;
  }

  pickCoverNode(r, preferSurf) {
    const s = this.s, w = this.game.world;
    const threats = this.threatPositions();
    let best = -1, bestScore = Infinity;
    for (const nd of this.candidates(s.pos, r, 40)) {
      let score = nd.pos.distanceTo(s.pos) * 0.4 + this.exposure(nd.pos, threats) * 25;
      if (preferSurf && !nd.surf) score += 12;
      score += this.teammatePenalty(nd.pos) * 0.5 + Math.random() * 2;
      if (score < bestScore) { bestScore = score; best = nd.i; }
    }
    return best;
  }

  pickHuntNode(lkp) {
    const s = this.s, w = this.game.world;
    let best = -1, bestScore = Infinity;
    for (const nd of this.candidates(lkp, 26, 40)) {
      const dist = nd.pos.distanceTo(lkp);
      if (dist < 6) continue;
      if (!w.los(nd.pos, lkp, true)) continue;
      let score = nd.pos.distanceTo(s.pos) * 0.5 + Math.abs(dist - 16) * 0.4;
      if (nd.surf) score -= 3;
      score += this.teammatePenalty(nd.pos);
      if (this.role === 'flanker') {
        const a = _v.subVectors(nd.pos, lkp).normalize(), b = _v2.subVectors(s.pos, lkp).normalize();
        score -= (1 - a.dot(b)) * 6;
      }
      score += Math.random() * 4;
      if (score < bestScore) { bestScore = score; best = nd.i; }
    }
    return best >= 0 ? best : w.nearestNode(lkp, false);
  }

  pickPatrolNode() {
    const s = this.s, w = this.game.world;
    const side = s.team === 0 ? 1 : -1; // direction towards the enemy base
    const B = w.def.bounds, kx = B[0] / 72, ky = B[1] / 36;
    let x;
    const r = Math.random();
    if (this.role === 'rusher') x = side * rand(5, 45) * kx;
    else if (this.role === 'anchor') x = side * rand(-25, 20) * kx;
    else x = side * rand(-10, 40) * kx;
    const p = new THREE.Vector3(x, rand(-31, 31) * ky, rand(-31, 31) * ky);
    if (r < 0.15) p.set(rand(-12, 12) * kx, rand(-20, 20) * ky, rand(-20, 20) * ky);
    let best = -1, bd = Infinity;
    w.forNear(p, 12 * Math.max(1, kx * 0.8), (i) => { const nd = w.nav[i]; const d = nd.pos.distanceTo(p) - (nd.surf ? 6 : 0); if (d < bd) { bd = d; best = i; } });
    return best >= 0 ? best : w.nearestNode(p, false);
  }

  // ---------- Per-frame control ----------
  update(dt) {
    const s = this.s, g = this.game, t = g.time;
    if (!s.alive) return;
    if (t >= this.nextPercept) { this.nextPercept = t + 0.1; this.perceive(); }
    if (t >= this.nextThink) { this.nextThink = t + 0.3; this.think(); }
    if (this.target && (!this.target.alive || !this.known.get(this.target.id) || !this.known.get(this.target.id).visible)) {
      this.target = null;
    }
    this._dt = dt;
    // aim down sights once settled on a target at range
    s.ads = !!this.target && t > this.acquireT && this.target.pos.distanceTo(s.pos) > 10;
    this.steer(dt);
    this.aim(dt);
    this.roll(dt);
    this.actions(dt);
  }

  steer(dt) {
    const s = this.s, g = this.game, w = g.world, t = g.time;
    const ctrl = s.ctrl;
    ctrl.move.set(0, 0, 0); ctrl.roll = 0; ctrl.brake = false; ctrl.killRot = false;
    const fuel = s.gas / GAS_MAX;
    // anchored: decide whether to stay or push off
    if (s.grab) {
      const stay = (this.state === 'engage' && this.target && this.hitsRecent < 1.5 && this.goal && s.pos.distanceTo(this.goal) < 3) ||
        (this.state === 'refuel' && fuel < 0.6) || t < this.waitUntil;
      if (stay || !this.path || !this.path.length) return;
      {
        // push-off toward the furthest clear waypoint (free movement, no fuel)
        let k = 0;
        for (let i = Math.min(this.path.length - 1, 4); i >= 0; i--) if (w.segmentClear(s.pos, this.path[i], 0.6)) { k = i; break; }
        const tgt = this.path[k];
        const dir = _v.subVectors(tgt, s.pos);
        const dist = dir.length(); dir.normalize();
        const n = s.grab.normal || _v2.set(0, 0, 0);
        if (dir.dot(n) > -0.5) {
          this.path.splice(0, k);
          g.pushOff(s, dir, clamp(2 + dist * 0.25, 3, 6.5));
          this.coast = true;
          return;
        }
      }
      g.releaseGrab(s);
    }
    // follow path
    let wp = null, final = false;
    if (this.path && this.path.length) {
      if (t > this.nextPull && this.path.length > 1) {
        this.nextPull = t + 0.25;
        if (w.segmentClear(s.pos, this.path[1], 0.65)) this.path.shift();
      }
      wp = this.path[0];
      if (s.pos.distanceTo(wp) < 2.2 && this.path.length > 1) { this.path.shift(); wp = this.path[0]; }
      final = this.path.length === 1;
    } else if (this.goal) { wp = this.goal; final = true; }

    const vDes = _v2.set(0, 0, 0);
    let cruise = { engage: 3, retreat: 6, refuel: 3.5, hunt: 4.5, patrol: 5 }[this.state] || 4.5;
    if (this.role === 'rusher' && this.state !== 'retreat') cruise *= 1.25;
    if (fuel < 0.35) cruise *= 0.65;
    if (this.coast) cruise = Math.max(cruise, s.vel.length());
    if (wp) {
      const to = _v.subVectors(wp, s.pos);
      const d = to.length();
      const distToGoal = final ? d : d + 6;
      const aBr = 2.0;
      // arriving at a handhold: let the arms absorb the last ~2.5 m/s instead of burning gas
      const goalNd = this.goalNode >= 0 ? w.nav[this.goalNode] : null;
      const vArr = final && goalNd && goalNd.surf && this.state !== 'engage' ? 2.5 : 0;
      const vmax = Math.min(cruise, Math.sqrt(vArr * vArr + 2 * aBr * Math.max(0, distToGoal - 0.6)));
      if (d > 0.01) vDes.copy(to).multiplyScalar(vmax / d);
      if (final && d < 1.8) {
        vDes.multiplyScalar(0.3);
        // reached: anchor on surface nodes
        const nd = this.goalNode >= 0 ? w.nav[this.goalNode] : null;
        if (nd && nd.surf && s.vel.length() < 3.8) { if (g.tryGrab(s)) { this.coast = false; return; } }
        if (d < 1.0 && this.state !== 'engage') { this.goal = null; this.path = null; }
      }
    }
    // combat jinking: lateral velocity changes perpendicular to the line of fire
    if (this.state === 'engage' && this.target && fuel > 0.45) {
      if (t > this.jinkT) {
        const los = _v.subVectors(this.target.pos, s.pos).normalize();
        randomPerp(los, this.jink);
        const tUp = _v3.set(0, 1, 0).applyQuaternion(this.target.quat);
        this.jink.addScaledVector(tUp, (Math.random() < 0.5 ? -1 : 1) * 0.8);
        this.jink.addScaledVector(los, -this.jink.dot(los)).normalize().multiplyScalar(rand(0.8, 1.9) * this.skill.jink);
        this.jinkT = t + rand(1.2, 2.6);
      }
      vDes.add(this.jink);
    } else this.jink.set(0, 0, 0);
    // dodge when an enemy is aiming straight at me
    if (fuel > 0.2 && Math.random() < this.skill.dodge * dt * 4) {
      for (const k of this.known.values()) {
        if (!k.visible) continue;
        const e = k.e;
        const d = _v.subVectors(s.pos, e.pos); const dist = d.length();
        if (d.dot(e.aimDir(_v3)) / dist > 0.995 && t - e.lastFireT < 0.5) { this.jinkT = 0; break; }
      }
    }
    // collision avoidance: predicted impact along velocity
    const sp = s.vel.length();
    if (sp > 1) {
      const dir = _v.copy(s.vel).divideScalar(sp);
      const h = w.raycast(s.pos, dir, sp * 2.2 + 1, true);
      if (h && h.t > 0) {
        const into = -s.vel.dot(h.n);
        if (into > 1.5) vDes.addScaledVector(h.n, into * (1 - h.t / (sp * 2.2 + 1)) * 1.4);
      }
    }
    // open space: stay inside the combat area (predict 2.5 s ahead)
    if (!w.enclosed) for (let i = 0; i < 3; i++) {
      const lim = w.bounds.max[i] - 10, pv = s.pos.getComponent(i) + s.vel.getComponent(i) * 2.5;
      if (Math.abs(pv) > lim) vDes.setComponent(i, vDes.getComponent(i) - Math.sign(pv) * Math.min(4, (Math.abs(pv) - lim) * 0.4 + 1));
    }
    // separation from teammates
    for (const o of g.soldiers) {
      if (o === s || !o.alive || o.team !== s.team) continue;
      const d = _v.subVectors(s.pos, o.pos); const dist = d.length();
      if (dist < 3 && dist > 0.01) vDes.addScaledVector(d, (3 - dist) / dist * 0.8);
    }
    // stand still if nothing to do
    if (!wp && !this.jink.lengthSq()) vDes.set(0, 0, 0);
    // velocity controller with deadband (coasting saves gas)
    const aCmd = _v.subVectors(vDes, s.vel).multiplyScalar(1.6);
    const dead = this.coast ? 0.6 : this.state === 'engage' ? 0.18 : 0.3;
    if (aCmd.length() < dead) aCmd.set(0, 0, 0); else this.coast = false;
    if (s.gas < 0.05) aCmd.set(0, 0, 0); // dry tank: nothing to command
    const aAxis = 4 * NOZZLE_F / s.mass;
    aCmd.applyQuaternion(_q.copy(s.quat).invert()).divideScalar(aAxis);
    ctrl.move.set(clamp(aCmd.x, -1, 1), clamp(aCmd.y, -1, 1), clamp(aCmd.z, -1, 1));
  }

  desiredAimDir(out) {
    const s = this.s, g = this.game, t = g.time;
    const eye = this.eye;
    const tgt = this.target;
    if (tgt) {
      const pt = _v.copy(this.aimHead ? HEAD : CHEST).applyQuaternion(tgt.quat).add(tgt.pos);
      const rel = pt.sub(eye);
      // velocity estimate lags and is noisy -> lead is imperfect against accelerating targets
      const noise = _v2.randomDirection().multiplyScalar(tgt.vel.length() * this.skill.velNoise);
      this.velEst.lerp(_v3.copy(tgt.vel).add(noise), Math.min(1, (this._dt || 1 / 60) / this.skill.velLag));
      const vRel = _v3.copy(this.velEst).sub(s.vel);
      const def = s.weapon.def;
      let tt;
      if (def.kind === 'beam') tt = 0;
      else if (def.kind === 'rocket') tt = interceptTimeRocket(rel, vRel, def.speed, def.accel, def.burn);
      else tt = interceptTime(rel, vRel, def.speed);
      if (tt > 0) rel.addScaledVector(vRel, tt);
      return out.copy(rel).normalize();
    }
    if (this.state === 'hunt' && this.huntK) return out.subVectors(this.huntK.pos, eye).normalize();
    if (this.state === 'retreat' || this.state === 'refuel') {
      const th = this.threatPositions();
      if (th.length) return out.subVectors(th[0], eye).normalize();
    }
    // patrol: look along travel, glancing towards the enemy side and open lanes
    if (t > this.lookT) {
      this.lookT = t + rand(1.2, 2.5);
      const side = s.team === 0 ? 1 : -1;
      const fwd = s.forward(_v);
      if (Math.random() < 0.18) this.lookDir.set(side * rand(0.4, 1), rand(-0.5, 0.5), rand(-0.5, 0.5)).normalize();
      else if (s.vel.lengthSq() > 4 && Math.random() < 0.3 && s.vel.clone().normalize().dot(fwd) > 0.5) this.lookDir.copy(s.vel).normalize();
      else {
        // scan with the head only (inside the neck cone) - no RCS cost
        this.lookDir.copy(fwd).addScaledVector(randomPerp(fwd, _v2), rand(0, 0.75)).normalize();
      }
    }
    return out.copy(this.lookDir);
  }

  aim(dt) {
    const s = this.s, sk = this.skill;
    const want = this.desiredAimDir(this._want || (this._want = new THREE.Vector3()));
    this.trueAim = want;
    // angular error model: decays as the bot settles; grows with own rotation/acceleration
    const decay = Math.exp(-dt / sk.settle);
    this.err.multiplyScalar(decay);
    const jitter = sk.floor * DEG * (1 + s.angVel.length() * 0.8 + (s.grab ? -0.4 : 0));
    this.err.x += (Math.random() - 0.5) * jitter * 0.9;
    this.err.y += (Math.random() - 0.5) * jitter * 0.9;
    const lim = sk.floor * DEG * 1.6;
    if (this.target && this.game.time > this.acquireT + sk.settle * 2) {
      const l = this.err.length(); if (l > lim) this.err.multiplyScalar(lim / l);
    }
    const cmd = _v.copy(want);
    const right = _v2.crossVectors(cmd, Math.abs(cmd.y) < 0.95 ? _v3.set(0, 1, 0) : _v3.set(1, 0, 0)).normalize();
    const up = _v3.crossVectors(right, cmd);
    cmd.addScaledVector(right, this.err.x).addScaledVector(up, this.err.y).normalize();
    // before the reaction time has elapsed, don't track the new target yet
    if (this.target && this.game.time < this.acquireT) return;
    // rotate current aim towards command with a max angular rate (smooth, slightly under-damped)
    const cur = s.aimDir(this._cur || (this._cur = new THREE.Vector3()));
    const ang = Math.acos(clamp(cur.dot(cmd), -1, 1));
    if (ang < 1e-5) return;
    const maxStep = sk.track * DEG * dt;
    const step = Math.min(ang, Math.max(maxStep * 0.15, ang * Math.min(1, dt * 14)), maxStep);
    const axis = _v2.crossVectors(cur, cmd).normalize();
    cur.applyAxisAngle(axis, step);
    s.setAimDir(cur);
  }

  /** Roll the body: feet to the surface when anchored, otherwise re-orient now and then (no fixed "up" in orbit). */
  roll(dt) {
    const s = this.s, t = this.game.time;
    let up = null, rate = 1.3;
    if (s.grab && s.grab.normal && s.grab.kind !== 'pod') up = s.grab.normal;
    else {
      if (!this.upPref || t > this.upT) {
        const combat = this.state === 'engage';
        this.upT = t + (combat ? rand(1.5, 3.5) : rand(3, 7));
        this.upPref = (this.upPref || new THREE.Vector3()).randomDirection();
        this.rollRate = combat ? rand(0.8, 2.0) : rand(0.4, 1.0);
      }
      up = this.upPref; rate = this.rollRate;
    }
    s.rollToward(up, rate * dt);
  }

  actions(dt) {
    const s = this.s, g = this.game, t = g.time;
    const tgt = this.target;
    if (!tgt) { this.flushGrenade(); return; }
    if (t < this.acquireT) return;
    const eye = this.eye;
    const dist = tgt.pos.distanceTo(eye);
    if (dist < MELEE.range && s.meleeCool <= 0) { g.combat.melee(s); return; }
    const aim = s.aimDir(_v);
    const angErr = Math.acos(clamp(aim.dot(this.trueAim), -1, 1));
    const tol = Math.atan(0.42 / dist) * 1.35 + 0.15 * DEG + (s.weapon.def.kind === 'pellets' ? 2.5 * DEG : 0);
    if (angErr > tol || s.weapon.reloadT > 0 || s.switchT > 0) return;
    const wsb = s.weapon;
    if (wsb.def.kind === 'beam') {
      // heat discipline: let the emitter cool before it locks out
      if (wsb.heat > 0.85) this.coolUntil = t + 0.6;
      if (this.coolUntil > t || wsb.overheat) return;
    }
    // recoilless backblast: don't fire with a teammate right behind
    if (wsb.def.backblast) {
      for (const o of g.soldiers) if (o !== s && o.alive && o.team === s.team && o.pos.distanceTo(eye) < 7 && _v2.subVectors(o.pos, eye).dot(aim) < 0) return;
    }
    if (!this.lineClearOfFriends(eye, aim, dist)) return;
    // burst discipline at range so recoil drift and aim kick settle
    if (this.burstPause > t) return;
    if (g.combat.fire(s)) {
      this.burst++;
      const def = s.weapon.def;
      if (def.auto && (dist > 25 || this.skill.burstPause) && this.burst >= 3 + ((Math.random() * 3) | 0)) { this.burst = 0; this.burstPause = t + rand(0.15, 0.32) + (this.skill.burstPause || 0); }
    }
  }

  /** Grenade decisions: anchored or slow targets, enemies bunched together, or a bot that's losing the duel. */
  considerGrenade(tgt) {
    const s = this.s, g = this.game;
    if (s.grenades <= 0 || s.grenadeCool > 0 || s.throwT > 0 || this.game.time < this.acquireT) return;
    const eye = this.eye;
    const dist = tgt.pos.distanceTo(eye);
    if (dist < 8 || dist > 55) return;
    const vRel = _v3.subVectors(tgt.vel, s.vel);
    const slow = tgt.grab || vRel.length() < 2;
    let score = dist < 30 ? 1 : 0.4;
    if (slow) score += 1.2;
    else if (dist > 30) return; // long lobs only at targets that can't dodge
    for (const o of g.soldiers) {
      if (!o.alive || o === tgt) continue;
      const d = o.pos.distanceTo(tgt.pos);
      if (o.team !== s.team && d < 7) score += 0.8;
      if (o.team === s.team && d < 9) return; // never into teammates
    }
    if (s.health < 50) score += 0.4;
    if (Math.random() > this.skill.grenade * 2.2 * score) return;
    const rel = _v2.subVectors(tgt.pos, eye);
    const tt = interceptTime(rel, vRel, GRENADE.speed);
    if (!(tt > 0) || tt > GRENADE.fuse - 0.35) return;
    const dir = rel.addScaledVector(vRel, tt + THROW_TIME * 0.4).normalize();
    if (g.world.raycast(eye, dir, Math.min(dist, 6), true)) return; // would bounce straight back
    g.combat.throwGrenade(s, dir);
  }

  // enemy just ducked behind cover: lob a grenade at the spot to flush them out
  flushGrenade() {
    const s = this.s, g = this.game, k = this.huntK;
    if (this.state !== 'hunt' || !k || s.grenades <= 0 || s.grenadeCool > 0) return;
    if (g.time - k.t > 3 || Math.random() > this.skill.grenade * this._dt * 4) return;
    const eye = this.eye;
    const d = k.pos.distanceTo(eye);
    if (d < 10 || d > 28 || !g.world.los(eye, k.pos, true)) return;
    for (const o of g.soldiers) if (o.alive && o.team === s.team && o.pos.distanceTo(k.pos) < 10) return;
    const dir = _v.subVectors(k.pos, eye).normalize();
    g.combat.throwGrenade(s, dir);
  }

  lineClearOfFriends(eye, aim, dist) {
    for (const o of this.game.soldiers) {
      if (o === this.s || !o.alive || o.team !== this.s.team) continue;
      const rel = _v2.subVectors(o.pos, eye);
      const along = rel.dot(aim);
      if (along < 0 || along > dist) continue;
      if (rel.addScaledVector(aim, -along).lengthSq() < 1.2) return false;
    }
    return true;
  }
}
