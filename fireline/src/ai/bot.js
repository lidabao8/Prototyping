// Bot brain: perception (FOV, LOS, foliage/smoke, stance, motion, muzzle flashes, hearing, squad sharing),
// human-like aiming (reaction time, decaying aim error, jitter, imperfect recoil control, target leading and
// bullet drop), cover-based peeking, strafing, grenades/launchers, reviving, healing, resupply and objective play.
import * as THREE from 'three';
import { clamp, lerp, rand, wrapAngle, approachAngle, DEG } from '../core/math.js';
import { Combat } from '../game/combat.js';

export const DIFFICULTY = {
  recruit: { react: 0.7, turn: 150, err0: 7.0, errTau: 1.25, jitter: 0.95, comp: 0.35, head: 0.05, sight: 0.75, cover: 0.45, strafe: 0.4, nade: 0.25, think: 0.6, lead: 0.5, burst: 0.55 },
  regular: { react: 0.48, turn: 230, err0: 4.6, errTau: 0.9, jitter: 0.62, comp: 0.55, head: 0.12, sight: 0.9, cover: 0.65, strafe: 0.65, nade: 0.45, think: 0.45, lead: 0.7, burst: 0.7 },
  veteran: { react: 0.31, turn: 340, err0: 2.9, errTau: 0.62, jitter: 0.4, comp: 0.75, head: 0.22, sight: 1.0, cover: 0.85, strafe: 0.85, nade: 0.65, think: 0.34, lead: 0.85, burst: 0.85 },
  elite: { react: 0.21, turn: 480, err0: 1.9, errTau: 0.43, jitter: 0.25, comp: 0.88, head: 0.32, sight: 1.12, cover: 1.0, strafe: 1.0, nade: 0.8, think: 0.27, lead: 0.95, burst: 0.95 },
};

const PREF_RANGE = { smg: 14, shotgun: 9, carbine: 26, ar: 34, lmg: 40, dmr: 75, sniper: 130, pistol: 12 };
const ENGAGE_RANGE = { smg: 75, shotgun: 40, carbine: 150, ar: 180, lmg: 190, dmr: 280, sniper: 420, pistol: 50 };
const _v = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3();

export class BotBrain {
  constructor(soldier, game) {
    this.s = soldier; this.game = game;
    this.setDifficulty(game.settings.get('difficulty'));
    this.aggro = rand(0.35, 0.95);
    this.known = new Map();
    this.target = null; this.reactT = 0; this.part = 'body';
    this.errY = 0; this.errP = 0; this.ph1 = rand(0, 100); this.ph2 = rand(0, 100);
    this.aiYaw = 0; this.aiPitch = 0; this.recoilOff = 0; this.recoilOffY = 0; this.lastPitch = 0; this.lastYaw = 0;
    this.state = 'objective';
    this.path = null; this.pathI = 0; this.goal = null; this.pathPending = false; this.repathT = 0;
    this.cover = null; this.peekT = 0; this.peeking = false; this.coverSearchT = 0;
    this.strafeDir = 1; this.strafeT = 0;
    this.nextPerceive = rand(0, 0.2); this.nextThink = rand(0, 0.5);
    this.burstLeft = 0; this.holdFire = 0;
    this.nadeCd = rand(4, 12); this.gadgetCd = rand(5, 20);
    this.lookYaw = 0; this.glanceT = rand(1, 3); this.glancing = 0; this.glanceYaw = 0;
    this.stuckT = 0; this.lastPos = new THREE.Vector3(); this.progressT = 0;
    this.holdSpot = null; this.holdT = 0;
    this.reviveMate = null; this.healMate = null;
    this.gadgetTask = null;
    this.investigate = null;
    this.wantStance = 'stand';
  }

  setDifficulty(name) { this.d = DIFFICULTY[name] || DIFFICULTY.veteran; this.diffName = name; }

  reset() {
    this.known.clear(); this.target = null; this.path = null; this.goal = null; this.cover = null; this.holdSpot = null;
    this.reviveMate = null; this.healMate = null; this.gadgetTask = null; this.investigate = null; this.state = 'objective';
    this.aiYaw = this.s.yaw; this.aiPitch = 0; this.recoilOff = 0; this.recoilOffY = 0;
    this.lastPos.copy(this.s.pos); this.stuckT = 0; this.burstLeft = 0; this.pathPending = false;
    this.placedClaymore = false;
  }

  // ---------- information sources ----------
  inform(e, x, y, z, seen, now) {
    if (!e || e.team === this.s.team || e.state === 'dead') return;
    const k = this.known.get(e);
    if (k) { if (now >= k.t) { k.x = x; k.y = y; k.z = z; k.t = now; if (seen) k.seenT = now; } }
    else this.known.set(e, { x, y, z, t: now, seenT: seen ? now : -99, aw: 0, vis: false });
  }
  onDamaged(attacker, dir) {
    const now = this.game.time;
    if (attacker && attacker !== this.s && attacker.team !== this.s.team) {
      const d = this.s.pos.distanceTo(attacker.pos);
      const err = Math.min(12, d * 0.08);
      this.inform(attacker, attacker.pos.x + rand(-err, err), attacker.pos.y, attacker.pos.z + rand(-err, err), false, now);
      const k = this.known.get(attacker);
      if (k) k.aw = Math.max(k.aw, 0.75);
      if (!this.target || this.target.state !== 'alive') { this.target = attacker; }
    }
    this.nextThink = Math.min(this.nextThink, 0.05);
    this.cover = null;
  }
  onNearMiss(shooter) {
    if (!shooter || shooter.team === this.s.team) return;
    const now = this.game.time;
    const d = this.s.pos.distanceTo(shooter.pos);
    const err = Math.min(20, d * 0.12);
    this.inform(shooter, shooter.pos.x + rand(-err, err), shooter.pos.y, shooter.pos.z + rand(-err, err), false, now);
  }
  onSound(x, z, source, loud) {
    if (!source || source.team === this.s.team || source.state === 'dead') return;
    const now = this.game.time;
    const d = Math.hypot(x - this.s.pos.x, z - this.s.pos.z);
    const err = Math.min(25, 3 + d * 0.1);
    this.inform(source, x + rand(-err, err), source.pos.y, z + rand(-err, err), false, now);
    if (!this.target && this.state !== 'revive' && (!this.investigate || now - this.investigate.t > 4)) this.investigate = { x, z, t: now };
  }

  // ---------- perception ----------
  perceive(dt) {
    const s = this.s, now = this.game.time, coll = this.game.world.collision;
    const eye = s.eye(_a);
    const night = this.game.env.time.night;
    const viewDist = (night ? 140 : 380) * this.d.sight;
    for (const e of this.game.teams[1 - s.team]) {
      if (e.state === 'dead') { this.known.delete(e); continue; }
      let k = this.known.get(e);
      const ex = e.pos.x - eye.x, ez = e.pos.z - eye.z;
      const dist = Math.hypot(ex, ez);
      if (k) k.vis = false;
      if (dist > viewDist * 1.1) { if (k) k.aw = Math.max(0, k.aw - dt * 0.6); continue; }
      const bearing = Math.atan2(-ex, -ez);
      const dAng = Math.abs(wrapAngle(bearing - s.yaw)) / DEG;
      const firing = now - e.lastLoudShot < 0.7;
      const fov = dist < 6 ? 140 : (dist < 30 || firing) ? 105 : 62;
      if (dAng > fov) { if (k) k.aw = Math.max(0, k.aw - dt * 0.5); continue; }
      const hs = e.hitSpheres();
      const losHead = coll.los(eye.x, eye.y, eye.z, hs[0][0], hs[0][1], hs[0][2]);
      const losBody = coll.los(eye.x, eye.y, eye.z, hs[1][0], hs[1][1], hs[1][2]) || coll.los(eye.x, eye.y, eye.z, hs[2][0], hs[2][1], hs[2][2]);
      if (!losHead && !losBody) { if (k) k.aw = Math.max(0, k.aw - dt * 0.4); continue; }
      let vis = clamp(1.25 - dist / (viewDist * 0.8), 0.1, 1.0);
      if (e.stance === 'prone' || e.state === 'downed') vis *= dist > 25 ? 0.35 : 0.7;
      else if (e.stance === 'crouch') vis *= 0.75;
      const sp = Math.hypot(e.vel.x, e.vel.z);
      vis *= e.sprinting ? 1.5 : sp > 1 ? 1.25 : 0.8;
      if (firing) vis *= 3;
      if (night) vis *= e.flashlightOn ? 2.5 : (firing ? 1 : 0.45);
      if (dAng > 62) vis *= 0.45;
      if (dist > 5) vis *= coll.softVisibility(eye.x, eye.y, eye.z, hs[1][0], hs[1][1], hs[1][2], now);
      if (e.spotUntil > now) vis *= 1.8;
      if (!losBody) vis *= 0.45; // only a head peeking around cover
      vis *= this.d.sight * (1 - s.suppression * 0.4) * (1 - s.flashed);
      if (vis < 0.02) { if (k) k.aw = Math.max(0, k.aw - dt * 0.4); continue; }
      if (!k) { k = { x: e.pos.x, y: e.pos.y, z: e.pos.z, t: -99, seenT: -99, aw: 0, vis: false }; this.known.set(e, k); }
      const recentlyKnown = now - k.t < 4;
      k.aw = Math.min(1.6, k.aw + vis * dt * (recentlyKnown ? 9 : 4.5));
      if (k.aw >= 1) {
        k.vis = true; k.x = e.pos.x; k.y = e.pos.y; k.z = e.pos.z; k.t = now; k.seenT = now; k.headOnly = !losBody; k.bodyOnly = !losHead;
        if (e.spotUntil < now && Math.random() < dt * 0.6) e.spotUntil = now + 4;
        if (s.squad) for (const m of s.squad.members) if (m !== s && m.brain && m.state === 'alive' && m.pos.distanceTo(s.pos) < 120) m.brain.inform(e, e.pos.x, e.pos.y, e.pos.z, false, now - 0.4);
      }
    }
    // enemies spotted by teammates (markers) are known approximately
    for (const e of this.game.teams[1 - s.team]) {
      if (e.state === 'alive' && e.spotUntil > now && !this.known.get(e)?.vis && Math.abs(e.pos.x - s.pos.x) < 220 && Math.abs(e.pos.z - s.pos.z) < 220) this.inform(e, e.pos.x, e.pos.y, e.pos.z, false, now);
    }
    // forget old info
    for (const [e, k] of this.known) if (e.state === 'dead' || (now - k.t > 14 && k.aw < 0.02)) this.known.delete(e);
    this.selectTarget(now);
  }

  selectTarget(now) {
    const s = this.s;
    let best = null, bestScore = -1e9;
    for (const [e, k] of this.known) {
      if (!k.vis) continue;
      const d = s.pos.distanceTo(e.pos);
      let sc = 120 / (d + 5);
      if (e.state === 'downed') sc -= 30;
      if (s.lastAttacker === e && now - s.lastDamage < 3) sc += 25;
      // is it aiming at me?
      const ad = e.aimDir(_v); const to = _b.subVectors(s.pos, e.pos).normalize();
      if (ad.dot(to) > 0.97) sc += 15;
      if (e === this.target) sc += 12;
      if (sc > bestScore) { bestScore = sc; best = e; }
    }
    if (best && best !== this.target) this.acquire(best, now);
    else if (!best && this.target) {
      const k = this.known.get(this.target);
      if (!k || this.target.state === 'dead' || now - k.t > 10) this.target = null;
    }
  }

  acquire(e, now) {
    const s = this.s;
    const prev = this.target;
    this.target = e;
    const d = s.pos.distanceTo(e.pos);
    const bearing = Math.atan2(-(e.pos.x - s.pos.x), -(e.pos.z - s.pos.z));
    const off = Math.abs(wrapAngle(bearing - s.yaw)) / DEG;
    let react = this.d.react * rand(0.8, 1.35) * (d > 90 ? 1.25 : 1) * (off > 60 ? 1.35 : 1);
    if (prev && prev.state === 'alive' && now - (this.known.get(prev)?.seenT ?? -99) < 1) react *= 0.6; // already in a fight
    this.reactT = react;
    const mag = this.d.err0 * rand(0.6, 1.4) * (1 + d / 140) * (1 + Math.hypot(e.vel.x, e.vel.z) / 8) * DEG;
    const a = rand(0, Math.PI * 2);
    this.errY = Math.cos(a) * mag; this.errP = Math.sin(a) * mag * 0.7;
    const sniper = s.gun && (s.gun.stats.type === 'sniper' || s.gun.stats.type === 'dmr');
    this.part = Math.random() < this.d.head * (sniper ? 1.8 : 1) ? 'head' : 'body';
    this.burstLeft = 0;
  }

  // ---------- main update ----------
  update(dt) {
    const s = this.s, now = this.game.time;
    if (s.state !== 'alive') { s.input.fire = false; return; }
    this.nextPerceive -= dt;
    if (this.nextPerceive <= 0) { const pdt = 0.16 + rand(0, 0.05); this.perceive(pdt); this.nextPerceive = pdt; }
    this.nextThink -= dt;
    if (this.nextThink <= 0) { this.think(now); this.nextThink = this.d.think * rand(0.8, 1.3); }
    const inp = s.input;
    inp.fire = false; inp.jump = false; inp.sprint = false; inp.mx = 0; inp.mz = 0;
    this.wantLean = 0;
    let wishX = 0, wishZ = 0, sprint = false, faceMove = true;
    // --- behaviour
    const tk = this.target ? this.known.get(this.target) : null;
    const visible = !!(tk && tk.vis);
    if (this.gadgetTask) this.runGadgetTask(dt, now);
    switch (this.state) {
      case 'combat': [wishX, wishZ, sprint, faceMove] = this.combatMove(dt, now, tk, visible); break;
      case 'revive': [wishX, wishZ, sprint, faceMove] = this.reviveMove(dt, now); break;
      case 'heal': [wishX, wishZ, sprint, faceMove] = this.healMove(dt, now); break;
      default: [wishX, wishZ, sprint, faceMove] = this.objectiveMove(dt, now);
    }
    // --- separation from teammates
    for (const m of this.game.teams[s.team]) {
      if (m === s || m.state !== 'alive') continue;
      const dx = s.pos.x - m.pos.x, dz = s.pos.z - m.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 1.6 * 1.6 && d2 > 1e-4) { const d = Math.sqrt(d2); wishX += dx / d * (1.6 - d) * 0.9; wishZ += dz / d * (1.6 - d) * 0.9; }
    }
    // --- stuck detection
    const wl = Math.hypot(wishX, wishZ);
    this.progressT += dt;
    if (this.progressT > 1.0) {
      const moved = Math.hypot(s.pos.x - this.lastPos.x, s.pos.z - this.lastPos.z);
      if (wl > 0.3 && moved < 0.35 && !s.action) { this.stuckT += this.progressT; } else this.stuckT = 0;
      this.lastPos.copy(s.pos); this.progressT = 0;
    }
    if (this.stuckT > 0.9) { inp.jump = true; }
    if (this.stuckT > 2.5) { this.path = null; this.cover = null; this.holdSpot = null; this.stuckT = 0; wishX += rand(-1, 1); wishZ += rand(-1, 1); this.requestRepath(); }
    if (s.move.hitWall && wl > 0.3 && Math.random() < dt * 3) inp.jump = true;
    // vault cells on path
    if (this.path && this.pathI < this.path.length && wl > 0.3) {
      const nav = this.game.world.nav;
      const ahead = nav.cellOf(s.pos.x + wishX / Math.max(wl, 0.01) * 0.8, s.pos.z + wishZ / Math.max(wl, 0.01) * 0.8);
      if (nav.isVault(ahead)) inp.jump = true;
    }
    // --- facing & aim
    this.updateAim(dt, now, tk, visible, wishX, wishZ, faceMove, sprint);
    // --- convert world wish to local input
    if (wl > 0.01) {
      const nx = wishX / Math.max(wl, 1), nz = wishZ / Math.max(wl, 1);
      const f = s.forward(_v), r = s.right(_b);
      inp.mz = -(nx * f.x + nz * f.z);
      inp.mx = nx * r.x + nz * r.z;
      inp.sprint = sprint && inp.mz < -0.6;
    }
    inp.crouch = this.wantStance === 'crouch';
    s.leanTarget = this.wantLean;
    // knife enemies who get too close
    if (this.target && tk && tk.vis && this.target.state !== 'dead' && s.pos.distanceTo(this.target.pos) < 1.9 && (s.gun ? s.gun.mag === 0 || s.reloadT > 0 || Math.random() < dt * 2 : true)) this.game.combat.melee(s);
    if (this.wantStance === 'prone' && s.stance !== 'prone') inp.prone = true;
    if (this.wantStance !== 'prone' && s.stance === 'prone' && !inp.crouch) { s.setStance(this.wantStance === 'crouch' ? 'crouch' : 'stand'); }
    if (s.swimming) inp.crouch = false;
  }

  // ---------- decisions ----------
  think(now) {
    const s = this.s;
    const tk = this.target ? this.known.get(this.target) : null;
    const threatVisible = [...this.known.values()].some(k => k.vis);
    // heal self
    if (s.bleed > 0 && !threatVisible && s.actionT <= 0 && s.bandages > 0 && (now - s.lastDamage > 1.2)) {
      if (s.isMedic && s.medkitCd <= 0) s.startAction('medkitSelf', 1.1); else s.bandage();
    } else if (s.isMedic && s.hp < 60 && !threatVisible && s.medkitCd <= 0 && s.actionT <= 0) s.startAction('medkitSelf', 1.1);
    // reload when calm
    const g = s.gun;
    if (g && !threatVisible && g.mag < g.stats.mag * 0.6 && g.reserve > 0) s.reload();
    // switch back to primary if on pistol and primary has ammo
    if (s.active === 1 && s.slots[0].mag + s.slots[0].reserve > 0 && !threatVisible) s.switchTo(0);
    if (s.active >= 2 && !this.gadgetTask && s.actionT <= 0) s.switchTo(0);
    // revive
    if (!threatVisible && !this.reviveMate) {
      const range = s.isMedic ? 50 : 26;
      let best = null, bd = 1e9;
      for (const m of this.game.teams[s.team]) {
        if (m.state !== 'downed' || m === s) continue;
        const d = m.pos.distanceTo(s.pos);
        const lim = (m.squad === s.squad ? range * 1.3 : range);
        if (d > lim || (m.reviver && m.reviver !== s && m.reviver.state === 'alive')) continue;
        if (m.downedHp < 15 && d > 15) continue;
        const sc = d * (m.squad === s.squad ? 0.7 : 1) * (m.isPlayer ? 0.6 : 1);
        if (sc < bd) { bd = sc; best = m; }
      }
      if (best) { this.reviveMate = best; best.reviver = s; this.path = null; this.smokeThrown = false; }
    }
    if (this.reviveMate && (this.reviveMate.state !== 'downed')) { if (this.reviveMate.reviver === s) this.reviveMate.reviver = null; this.reviveMate = null; s.reviveProgress = 0; }
    // medic healing
    if (s.isMedic && !threatVisible && !this.reviveMate && !this.healMate && s.medkitCd <= 0) {
      for (const m of this.game.teams[s.team]) if (m !== s && m.state === 'alive' && (m.hp < 65 || m.bleed > 0) && m.pos.distanceTo(s.pos) < 14) { this.healMate = m; break; }
    }
    if (this.healMate && (this.healMate.state !== 'alive' || this.healMate.hp >= 95 && this.healMate.bleed <= 0)) this.healMate = null;
    // state
    const eng = ENGAGE_RANGE[g ? g.stats.type : 'ar'] || 150;
    const tDist = tk ? Math.hypot(tk.x - s.pos.x, tk.z - s.pos.z) : 1e9;
    const relevant = tk && ((tk.vis && tDist < eng * 1.15) || (now - tk.t < 7 && tDist < Math.min(80, eng)) || (now - s.lastDamage < 3));
    if (this.reviveMate && (!threatVisible || (tk && s.pos.distanceTo(this.target.pos) > 60))) this.state = 'revive';
    else if (relevant) this.state = 'combat';
    else if (this.healMate) this.state = 'heal';
    else this.state = 'objective';
    // low ammo: pistol
    if (g && g.mag === 0 && g.reserve === 0 && s.active === 0) s.switchTo(1);
    // gadgets
    this.gadgetCd -= this.d.think;
    this.nadeCd -= this.d.think;
    if (!this.gadgetTask && this.gadgetCd <= 0) this.considerGadgets(now, threatVisible);
    // cover reevaluation
    if (this.cover && this.target) {
      const e = this.target;
      const c = this.cover;
      const blocked = !this.game.world.collision.los(c.x, c.y + 0.95, c.z, e.pos.x, e.pos.y + 1.2, e.pos.z);
      if (!blocked) this.cover = null;
    }
  }

  considerGadgets(now, threatVisible) {
    const s = this.s;
    const cls = s.cls;
    const order = s.squad && s.squad.order;
    const objDist = order ? Math.hypot(order.x - s.pos.x, order.z - s.pos.z) : 999;
    if (cls === 'support' && !threatVisible && objDist < 40 && s.slots[2].count > 0 && Math.random() < 0.5) {
      const spot = this.game.combat.placementSpot(s);
      if (spot) { s.slots[2].count--; s.startAction('place', 0.6, { gid: 'ammobox', spot }); this.gadgetCd = 40; return; }
    }
    if (cls === 'support' && !threatVisible && objDist < 25 && s.slots[3].count > 0 && order && order.type === 'defend' && Math.random() < 0.4) {
      const spot = this.game.combat.placementSpot(s);
      if (spot) { s.slots[3].count--; s.startAction('place', 0.6, { gid: 'sandbags', spot }); this.gadgetCd = 15; return; }
    }
    if (cls === 'recon' && !threatVisible && objDist < 25 && !this.placedClaymore && s.slots[2].count > 0 && order && (order.type === 'defend' || order.ownedByUs)) {
      const spot = this.game.combat.placementSpot(s);
      if (spot) { s.slots[2].count--; s.startAction('place', 0.6, { gid: 'claymore', spot }); this.placedClaymore = true; this.gadgetCd = 30; return; }
    }
    if ((cls === 'recon' || cls === 'leader') && !threatVisible && objDist > 45 && objDist < 140) {
      const gid = cls === 'recon' ? 'beacon' : 'rally';
      const existing = this.game.combat.placed.find(p => p.owner === s && p.type === gid);
      if (!existing || Math.hypot(existing.x - order.x, existing.z - order.z) > 160) {
        const spot = this.game.combat.placementSpot(s);
        if (spot && this.game.world.nav.cover[this.game.world.nav.cellOf(spot.x, spot.z)] > 40) { s.startAction('place', 0.6, { gid, spot }); this.gadgetCd = 45; return; }
      }
    }
    this.gadgetCd = rand(3, 7);
  }

  // ---------- movement behaviours ----------
  objectiveMove(dt, now) {
    const s = this.s;
    const obj = this.game.squads.objectiveFor(s);
    this.wantStance = 'stand';
    let gx = obj.x, gz = obj.z;
    // investigate sounds first if close-ish
    if (this.investigate && now - this.investigate.t < 12 && Math.hypot(this.investigate.x - s.pos.x, this.investigate.z - s.pos.z) < 70 && this.aggro > 0.45) {
      gx = this.investigate.x; gz = this.investigate.z;
      if (Math.hypot(gx - s.pos.x, gz - s.pos.z) < 6) this.investigate = null;
    }
    const dObj = Math.hypot(obj.x - s.pos.x, obj.z - s.pos.z);
    const inside = dObj < obj.r * 0.85;
    if (inside && obj.hold) {
      // choose a hold spot inside the objective with cover facing the threat
      this.holdT -= dt;
      if (!this.holdSpot || this.holdT <= 0) {
        const threat = this.game.squads.threatPoint(s.team, obj);
        const res = this.game.world.nav.findCover(obj.x, obj.z, { x: threat.x, y: threat.y + 1.4, z: threat.z }, obj.r * 0.75, { maxTests: 22, occupied: (x, z) => this.game.teams[s.team].some(m => m !== s && m.state === 'alive' && m.brain && m.brain.holdSpot && Math.hypot(m.brain.holdSpot.x - x, m.brain.holdSpot.z - z) < 3) });
        const pick = res.length ? res[Math.floor(Math.random() * Math.min(3, res.length))] : null;
        if (pick) this.holdSpot = { x: pick.x, z: pick.z, peek: pick.peek };
        else { const [x, z] = this.game.world.nav.randomWalkableNear(obj.x, obj.z, obj.r * 0.6); this.holdSpot = { x, z, peek: true }; }
        this.holdT = rand(10, 22);
        this.path = null;
      }
      gx = this.holdSpot.x; gz = this.holdSpot.z;
      const dh = Math.hypot(gx - s.pos.x, gz - s.pos.z);
      if (dh < 1.0) {
        this.wantStance = this.holdSpot.peek ? (Math.sin(now * 0.4 + this.ph1) > 0.2 ? 'stand' : 'crouch') : 'crouch';
        return [0, 0, false, false];
      }
    }
    const [wx, wz, arrived] = this.followTo(gx, gz, dt);
    const dist = Math.hypot(gx - s.pos.x, gz - s.pos.z);
    const enemiesNear = [...this.known.values()].some(k => now - k.t < 6 && Math.hypot(k.x - s.pos.x, k.z - s.pos.z) < 80);
    const tvis = this.target && this.known.get(this.target) && this.known.get(this.target).vis;
    const sprint = dist > 25 && !enemiesNear && !tvis && s.hp > 35 && !arrived;
    if (!sprint && dObj < 70) this.wantStance = 'stand';
    return [wx, wz, sprint, sprint || !enemiesNear];
  }

  combatMove(dt, now, tk, visible) {
    const s = this.s, e = this.target;
    if (!e || !tk) { this.state = 'objective'; return [0, 0, false, true]; }
    const dist = Math.hypot(tk.x - s.pos.x, tk.z - s.pos.z);
    const g = s.gun;
    const pref = PREF_RANGE[g ? g.stats.type : 'ar'] || 30;
    const nav = this.game.world.nav;
    this.wantStance = 'stand';
    if (visible) {
      this.lostT = 0;
      // seek cover against this threat
      this.coverSearchT -= dt;
      const underFire = s.suppression > 0.25 || now - s.lastDamage < 1.5;
      if (!this.cover && this.coverSearchT <= 0 && dist > 18 && Math.random() < this.d.cover) {
        this.coverSearchT = rand(1.5, 3);
        const threat = { x: e.pos.x, y: e.pos.y + 1.3, z: e.pos.z };
        const res = nav.findCover(s.pos.x, s.pos.z, threat, underFire ? 9 : 12, { maxTests: 20, minThreatDist: 10, prefer: dist > pref * 1.5 ? { x: lerp(s.pos.x, e.pos.x, 0.25), z: lerp(s.pos.z, e.pos.z, 0.25) } : null, occupied: (x, z) => this.game.teams[s.team].some(m => m !== s && m.brain && m.brain.cover && Math.hypot(m.brain.cover.x - x, m.brain.cover.z - z) < 2) });
        if (res.length) { this.cover = res[0]; this.path = null; this.peekT = 0; }
      }
      // attackers bound toward their objective instead of trading shots forever
      const obj = this.game.squads.objectiveFor(s);
      const objD = Math.hypot(obj.x - s.pos.x, obj.z - s.pos.z);
      const attacking = this.game.squads.orderType(s) !== 'defend';
      if (this.cover && Math.hypot(this.cover.x - s.pos.x, this.cover.z - s.pos.z) < 1) this.coverTime = (this.coverTime || 0) + dt; else if (!this.cover) this.coverTime = 0;
      const coverMax = attacking ? 5 + this.aggro * -2 + rand(0, 4) : 14;
      if (this.cover && this.coverTime > coverMax && (objD > obj.r * 0.8 || !attacking)) {
        // relocate: next cover toward the objective (attack) or a fresh angle (defend)
        const tgt = attacking ? { x: lerp(s.pos.x, obj.x, Math.min(1, 22 / Math.max(objD, 1))), z: lerp(s.pos.z, obj.z, Math.min(1, 22 / Math.max(objD, 1))) } : { x: s.pos.x + rand(-8, 8), z: s.pos.z + rand(-8, 8) };
        const threat = { x: e.pos.x, y: e.pos.y + 1.3, z: e.pos.z };
        const res = nav.findCover(tgt.x, tgt.z, threat, 10, { maxTests: 18, minThreatDist: 8, prefer: tgt });
        this.cover = res.length ? res[0] : null;
        this.coverTime = 0; this.path = null;
        if (!this.cover && attacking && dist > 25) { this.advanceT = rand(2.5, 5); }
      }
      if (this.advanceT > 0) {
        this.advanceT -= dt;
        const [wx, wz] = this.followTo(obj.x, obj.z, dt);
        this.wantStance = 'stand';
        return [wx, wz, false, false];
      }
      if (!this.cover && attacking && dist > 70 && objD > obj.r && Math.random() < dt * 0.5) this.advanceT = rand(2, 4);
      if (this.cover) {
        const dc = Math.hypot(this.cover.x - s.pos.x, this.cover.z - s.pos.z);
        if (dc > 0.9) {
          const [wx, wz] = this.followTo(this.cover.x, this.cover.z, dt);
          const sprint = underFire && dc > 4;
          this.wantStance = 'stand';
          return [wx, wz, sprint, sprint];
        }
        // peek cycle
        this.peekT -= dt;
        if (this.peekT <= 0) {
          this.peeking = !this.peeking;
          this.peekT = this.peeking ? rand(1.4, 3.2) : rand(0.6, 1.6) + s.suppression * 2;
          if (!this.peeking && g && g.mag < g.stats.mag * 0.45) s.reload();
        }
        if (s.reloadT > 0 || s.suppression > 0.75 || s.actionT > 0) this.peeking = false;
        if (this.cover.peek) this.wantStance = this.peeking ? 'stand' : 'crouch';
        else if (this.cover.lean) {
          this.wantStance = this.peeking ? 'stand' : 'crouch';
          if (this.peeking) { const r = s.right(_b); this.wantLean = (this.cover.lean.x * r.x + this.cover.lean.z * r.z) > 0 ? 1 : -1; }
        } else this.wantStance = 'crouch';
        return [0, 0, false, false];
      }
      // open ground: strafe / range management
      this.strafeT -= dt;
      if (this.strafeT <= 0) { this.strafeDir = Math.random() < 0.5 ? -1 : 1; this.strafeT = rand(0.35, 0.95) / (0.4 + this.d.strafe * 0.6); if (Math.random() < 0.15 * this.d.strafe && dist < 25) this.crouchSpamT = 0.35; }
      if (this.crouchSpamT > 0) this.crouchSpamT -= dt;
      const tx = (e.pos.x - s.pos.x) / Math.max(dist, 0.1), tz = (e.pos.z - s.pos.z) / Math.max(dist, 0.1);
      let wx = 0, wz = 0;
      const strafeAmt = dist < 60 ? this.d.strafe : this.d.strafe * 0.4;
      wx += -tz * this.strafeDir * strafeAmt; wz += tx * this.strafeDir * strafeAmt;
      if (dist > pref * 1.4 && this.aggro > 0.5) { wx += tx * 0.6; wz += tz * 0.6; }
      else if (dist < pref * 0.5 && (g && (g.stats.type === 'dmr' || g.stats.type === 'sniper'))) { wx -= tx * 0.7; wz -= tz * 0.7; }
      // don't strafe into walls/water
      const c = nav.cellOf(s.pos.x + wx * 1.2, s.pos.z + wz * 1.2);
      if (!nav.walkable(c) || nav.isWater(c)) { wx = -wx; wz = -wz; this.strafeDir *= -1; }
      if (dist > 70 && g && ['lmg', 'dmr', 'sniper'].includes(g.stats.type) && s.suppression < 0.6) { this.wantStance = 'prone'; return [0, 0, false, false]; }
      if (dist > 40 && Math.random() < 0.5) this.wantStance = 'crouch';
      if (this.crouchSpamT > 0) this.wantStance = 'crouch';
      return [wx, wz, false, false];
    }
    // lost sight
    this.lostT = (this.lostT || 0) + dt;
    const since = now - tk.t;
    if (g && g.mag < g.stats.mag * 0.5) s.reload();
    // grenade at last known position
    if (this.nadeCd <= 0 && since < 5 && dist > 10 && dist < 34 && tk.seenT > now - 6 && Math.random() < this.d.nade * dt * 2) this.throwGrenadeAt(tk.x, tk.y, tk.z);
    // launcher / rpg at entrenched targets
    if (!this.gadgetTask && since < 4 && dist > 18 && dist < 110 && Math.random() < dt * 0.6 * this.d.nade) this.tryHeavyAt(tk);
    if (this.cover) {
      const dc = Math.hypot(this.cover.x - s.pos.x, this.cover.z - s.pos.z);
      if (dc < 1 && this.lostT < 6) {
        // keep peeking: lean out around corner cover or rise over low cover to re-acquire
        this.peekT -= dt;
        if (this.peekT <= 0) { this.peeking = !this.peeking; this.peekT = this.peeking ? rand(1.2, 2.4) : rand(0.7, 1.6) + s.suppression; }
        if (s.reloadT > 0 || s.suppression > 0.75) this.peeking = false;
        if (this.cover.lean && this.peeking) { const r = s.right(_b); this.wantLean = (this.cover.lean.x * r.x + this.cover.lean.z * r.z) > 0 ? 1 : -1; this.wantStance = 'stand'; }
        else this.wantStance = this.cover.peek && this.peeking ? 'stand' : 'crouch';
        return [0, 0, false, false];
      }
    }
    if (this.lostT < 1.6) { this.wantStance = Math.random() < 0.5 ? 'crouch' : 'stand'; return [0, 0, false, false]; }
    // push or disengage
    const push = this.aggro > 0.5 || this.game.squads.orderType(s) === 'attack' || dist < 25;
    if (push && since < 9) {
      this.cover = null;
      const [wx, wz, arrived] = this.followTo(tk.x, tk.z, dt);
      if (arrived) { this.known.delete(e); this.target = null; }
      this.wantStance = 'stand';
      return [wx, wz, false, false];
    }
    this.cover = null;
    return this.objectiveMove(dt, now);
  }

  reviveMove(dt, now) {
    const s = this.s, m = this.reviveMate;
    if (!m || m.state !== 'downed') { this.state = 'objective'; return [0, 0, false, true]; }
    const d = Math.hypot(m.pos.x - s.pos.x, m.pos.z - s.pos.z);
    // smoke cover if enemies are watching
    if (!this.smokeThrown && d < 30 && s.slots[4].id === 'smoke' && s.slots[4].count > 0) {
      const threat = [...this.known.values()].some(k => now - k.t < 6 && Math.hypot(k.x - m.pos.x, k.z - m.pos.z) < 60);
      if (threat) { this.throwGrenadeAt(m.pos.x + rand(-2, 2), m.pos.y, m.pos.z + rand(-2, 2), 'smoke'); this.smokeThrown = true; }
    }
    if (s.isMedic && s.slots[3].id === 'smoke' && !this.smokeThrown && d < 25 && s.slots[3].count > 0) {
      const threat = [...this.known.values()].some(k => now - k.t < 6);
      if (threat) { s.slots[3].count--; this.throwGrenadeAt(m.pos.x, m.pos.y, m.pos.z, 'smoke', true); this.smokeThrown = true; }
    }
    if (d > 1.4) {
      const [wx, wz] = this.followTo(m.pos.x, m.pos.z, dt);
      const sprint = d > 6;
      this.wantStance = 'stand';
      s.reviveProgress = 0;
      return [wx, wz, sprint, true];
    }
    this.wantStance = 'crouch';
    this.lookAt(m.pos.x, m.pos.y + 0.3, m.pos.z, dt, 300);
    this.game.reviveTick(s, m, dt);
    return [0, 0, false, false];
  }

  healMove(dt, now) {
    const s = this.s, m = this.healMate;
    if (!m || m.state !== 'alive') { this.healMate = null; this.state = 'objective'; return [0, 0, false, true]; }
    const d = Math.hypot(m.pos.x - s.pos.x, m.pos.z - s.pos.z);
    if (d > 2.5) { const [wx, wz] = this.followTo(m.pos.x, m.pos.z, dt); return [wx, wz, d > 8, true]; }
    if (s.actionT <= 0 && s.medkitCd <= 0) { s.startAction('medkitOther', 1.0, { target: m }); this.healMate = null; }
    return [0, 0, false, false];
  }

  // ---------- path following ----------
  requestRepath() { this.repathT = 0; this.path = null; }

  followTo(gx, gz, dt) {
    const s = this.s;
    const d = Math.hypot(gx - s.pos.x, gz - s.pos.z);
    if (d < 0.8) return [0, 0, true];
    this.repathT -= dt;
    const goalMoved = !this.goal || Math.hypot(this.goal.x - gx, this.goal.z - gz) > Math.max(3, d * 0.2);
    if ((!this.path || goalMoved || this.repathT <= 0) && !this.pathPending) {
      this.goal = { x: gx, z: gz };
      this.pathPending = true;
      this.game.ai.requestPath(this, gx, gz);
      this.repathT = rand(6, 10);
    }
    if (!this.path) {
      // move directly while waiting for a path if close & visible
      if (d < 12) return [(gx - s.pos.x) / d, (gz - s.pos.z) / d, false];
      return [0, 0, false];
    }
    while (this.pathI < this.path.length) {
      const p = this.path[this.pathI];
      const dd = Math.hypot(p[0] - s.pos.x, p[1] - s.pos.z);
      const last = this.pathI === this.path.length - 1;
      if (dd < (last ? 0.7 : s.sprinting ? 1.6 : 1.1)) this.pathI++;
      else break;
    }
    if (this.pathI >= this.path.length) {
      if (this.path.partial) { this.path = null; return [0, 0, false]; }
      return [(gx - s.pos.x) / d, (gz - s.pos.z) / d, d < 1.5];
    }
    const p = this.path[this.pathI];
    const dx = p[0] - s.pos.x, dz = p[1] - s.pos.z;
    const l = Math.hypot(dx, dz) || 1;
    return [dx / l, dz / l, false];
  }

  onPath(path) {
    this.pathPending = false;
    this.path = path; this.pathI = path && path.length > 1 ? 1 : 0;
  }

  // ---------- aiming ----------
  lookAt(x, y, z, dt, speed) {
    const e = this.s.eye(_a);
    const dx = x - e.x, dy = y - e.y, dz = z - e.z;
    const yaw = Math.atan2(-dx, -dz), pitch = Math.atan2(dy, Math.hypot(dx, dz));
    this.aiYaw = approachAngle(this.aiYaw, yaw, speed * DEG * dt);
    this.aiPitch += clamp(pitch - this.aiPitch, -speed * DEG * dt, speed * DEG * dt);
  }

  updateAim(dt, now, tk, visible, wishX, wishZ, faceMove, sprint) {
    const s = this.s;
    // integrate recoil the soldier experienced since last frame
    const kickP = s.pitch - this.lastPitch, kickY = wrapAngle(s.yaw - this.lastYaw);
    if (Math.abs(kickP) < 0.2) this.recoilOff += kickP * (1 - this.d.comp);
    if (Math.abs(kickY) < 0.2) this.recoilOffY += kickY * (1 - this.d.comp);
    this.recoilOff *= Math.exp(-dt * 5); this.recoilOffY *= Math.exp(-dt * 5);
    let fireOk = false;
    if (this.gadgetTask && this.gadgetTask.aimYaw !== undefined) {
      this.aiYaw = approachAngle(this.aiYaw, this.gadgetTask.aimYaw, this.d.turn * DEG * dt);
      this.aiPitch += clamp(this.gadgetTask.aimPitch - this.aiPitch, -this.d.turn * DEG * dt, this.d.turn * DEG * dt);
    } else if (visible && this.target && this.state !== 'revive') {
      const e = this.target;
      const eye = s.eye(_a);
      const hs = e.hitSpheres();
      const part = tk.headOnly ? 'head' : tk.bodyOnly ? 'body' : this.part;
      const sp = part === 'head' ? hs[0] : hs[1];
      const g = s.gun;
      const vel = g ? g.stats.vel * g.stats.velMul : 800;
      const dist = Math.hypot(sp[0] - eye.x, sp[1] - eye.y, sp[2] - eye.z);
      const t = dist / vel;
      const lead = this.d.lead;
      const tx = sp[0] + e.vel.x * t * lead, ty = sp[1] + e.vel.y * t * lead * 0.3 + 0.5 * 9.81 * t * t * lead, tz = sp[2] + e.vel.z * t * lead;
      const dx = tx - eye.x, dy = ty - eye.y, dz = tz - eye.z;
      const yawT = Math.atan2(-dx, -dz), pitchT = Math.atan2(dy, Math.hypot(dx, dz));
      // error decay & jitter
      const k = Math.exp(-dt / this.d.errTau);
      this.errY *= k; this.errP *= k;
      const moving = Math.hypot(s.vel.x, s.vel.z) > 1 ? 1.6 : 1;
      const jit = this.d.jitter * DEG * moving * (1 + s.suppression * 2.2 + s.flashed * 6);
      const jy = (Math.sin(now * 2.3 + this.ph1) + Math.sin(now * 5.1 + this.ph2) * 0.5) * jit * 0.6;
      const jp = (Math.sin(now * 2.9 + this.ph2) + Math.sin(now * 4.3 + this.ph1) * 0.5) * jit * 0.45;
      const wantY = yawT + this.errY + jy, wantP = pitchT + this.errP + jp;
      const diff = Math.abs(wrapAngle(wantY - this.aiYaw)) + Math.abs(wantP - this.aiPitch);
      const turn = this.d.turn * DEG * dt * (0.25 + 0.75 * Math.min(1, diff / (12 * DEG)));
      this.aiYaw = approachAngle(this.aiYaw, wantY, turn);
      this.aiPitch += clamp(wantP - this.aiPitch, -turn, turn);
      // fire decision against true target direction (incl. recoil drift)
      const curY = this.aiYaw + this.recoilOffY, curP = this.aiPitch + this.recoilOff;
      const angErr = Math.hypot(wrapAngle(curY - yawT), curP - pitchT);
      const radius = part === 'head' ? 0.14 : 0.3;
      const tol = Math.max(0.35 * DEG, Math.atan(radius / Math.max(dist, 1)) * (dist < 15 ? 2.6 : 1.6));
      this.reactT -= dt;
      fireOk = this.reactT <= 0 && angErr < tol * (this.burstLeft > 0 ? 2.2 : 1);
      if (e.state === 'downed' && [...this.known.values()].filter(k => k.vis).length > 1) fireOk = false;
      this.handleTrigger(dt, fireOk, dist, now);
      s.input.ads = !!g && (dist > 14 || g.stats.type === 'sniper' || g.stats.type === 'dmr') && s.reloadT <= 0;
    } else {
      s.input.ads = false;
      this.burstLeft = 0;
      // look: movement direction, threat direction or last known position
      let lookY = null, lookP = 0;
      if (tk && !visible) {
        const eye = s.eye(_a);
        lookY = Math.atan2(-(tk.x - eye.x), -(tk.z - eye.z));
        lookP = Math.atan2(tk.y + 1.3 - eye.y, Math.hypot(tk.x - eye.x, tk.z - eye.z));
      } else if (faceMove && Math.hypot(wishX, wishZ) > 0.2) {
        lookY = Math.atan2(-wishX, -wishZ);
        // occasional glance toward threat direction
        this.glanceT -= dt;
        if (!sprint && this.glanceT <= 0) {
          this.glancing = rand(0.6, 1.2); this.glanceT = rand(2.5, 5);
          const th = this.game.squads.threatPoint(s.team, this.game.squads.objectiveFor(s));
          this.glanceYaw = Math.atan2(-(th.x - s.pos.x), -(th.z - s.pos.z));
        }
        if (this.glancing > 0) { this.glancing -= dt; if (Math.abs(wrapAngle(this.glanceYaw - lookY)) < 1.6) lookY = this.glanceYaw; }
      } else {
        // holding: scan around the threat direction
        const obj = this.game.squads.objectiveFor(s);
        const th = this.game.squads.threatPoint(s.team, obj);
        const base = Math.atan2(-(th.x - s.pos.x), -(th.z - s.pos.z));
        lookY = base + Math.sin(now * 0.35 + this.ph1) * 0.9;
        lookP = -0.04;
      }
      if (lookY !== null) {
        this.aiYaw = approachAngle(this.aiYaw, lookY, (sprint ? 400 : 220) * DEG * dt);
        this.aiPitch += clamp(lookP - this.aiPitch, -2 * dt, 2 * dt);
      }
    }
    s.yaw = this.aiYaw + this.recoilOffY;
    s.pitch = clamp(this.aiPitch + this.recoilOff, -1.4, 1.4);
    this.lastPitch = s.pitch; this.lastYaw = s.yaw;
  }

  handleTrigger(dt, fireOk, dist, now) {
    const s = this.s, g = s.gun;
    if (!g || s.reloadT > 0 || s.actionT > 0) return;
    if (g.mag === 0) {
      if (g.reserve > 0 && dist < 14 && s.slots[1].mag > 0 && Math.random() < 0.5) s.switchTo(1);
      else s.reload();
      return;
    }
    this.holdFire -= dt;
    const st = g.stats;
    const mode = st.modes[g.mode];
    if (this.burstLeft > 0) {
      if (mode === 'auto') { s.input.fire = true; if (s.fireCd <= 0.0001) this.burstLeft--; }
      else if (s.fireCd <= 0) { s.input.fire = !this.prevFire; this.burstLeft -= s.input.fire ? 1 : 0; }
      this.prevFire = s.input.fire;
      if (this.burstLeft <= 0) {
        const pause = dist < 20 ? rand(0.05, 0.18) : dist < 60 ? rand(0.18, 0.4) : rand(0.3, 0.65);
        this.holdFire = pause * (1.6 - this.d.burst);
      }
      return;
    }
    this.prevFire = false;
    if (!fireOk || this.holdFire > 0) return;
    if (mode === 'auto') {
      const n = dist < 20 ? Math.round(rand(6, 14)) : dist < 45 ? Math.round(rand(3, 7)) : dist < 90 ? Math.round(rand(2, 4)) : Math.round(rand(1, 2));
      this.burstLeft = st.type === 'lmg' ? n * 2 : n;
      s.input.fire = true;
    } else {
      s.input.fire = true; this.prevFire = true;
      this.burstLeft = 0;
      this.holdFire = st.interval + (dist > 50 ? rand(0.12, 0.35) : rand(0.03, 0.12)) * (st.bolt ? 0.5 : 1);
    }
  }

  // ---------- gadgets ----------
  throwGrenadeAt(x, y, z, type, fromSlot3) {
    const s = this.s;
    const slot = fromSlot3 ? s.slots[3] : s.slots[4];
    if (!slot || slot.count <= 0 || s.actionT > 0) return false;
    if (!type) { if (slot.id !== 'frag' && slot.id !== 'impact') return false; type = slot.id; }
    else if (!fromSlot3 && slot.id !== type) return false;
    const eye = s.eye(new THREE.Vector3());
    const tgt = new THREE.Vector3(x, y + 0.3, z);
    let v = Combat.solveBallistic(eye, tgt, 17, 15);
    if (!v) v = Combat.solveBallistic(eye, tgt, 22, 15);
    if (!v) return false;
    // don't throw into a wall right in front
    const vl = v.length();
    if (!this.game.world.collision.los(eye.x, eye.y, eye.z, eye.x + v.x / vl * 3, eye.y + v.y / vl * 3, eye.z + v.z / vl * 3)) return false;
    if (!fromSlot3) slot.count--;
    s.throwVel = v;
    s.startAction('throw', 0.5, { type });
    this.aiYaw = Math.atan2(-v.x, -v.z);
    this.nadeCd = rand(10, 18) / this.d.nade;
    return true;
  }

  tryHeavyAt(tk) {
    const s = this.s;
    const idx = s.slots.findIndex((x, i) => i >= 2 && x && (x.id === 'rpg' || x.id === 'm320') && x.count > 0);
    if (idx < 0) return false;
    const eye = s.eye(new THREE.Vector3());
    const tgt = new THREE.Vector3(tk.x, tk.y + 1.0, tk.z);
    const isRpg = s.slots[idx].id === 'rpg';
    const v = Combat.solveBallistic(eye, tgt, isRpg ? 115 : 72, isRpg ? 2.5 : 9.81);
    if (!v) return false;
    if (Math.hypot(tk.x - s.pos.x, tk.z - s.pos.z) < 12) return false;
    this.gadgetTask = { slot: idx, t: 0, aimYaw: Math.atan2(-v.x, -v.z), aimPitch: Math.atan2(v.y, Math.hypot(v.x, v.z)), fired: false };
    s.switchTo(idx);
    return true;
  }

  runGadgetTask(dt, now) {
    const s = this.s, task = this.gadgetTask;
    task.t += dt;
    if (!task.fired && s.switchT <= 0 && task.t > 0.55) {
      const yawOk = Math.abs(wrapAngle(this.aiYaw - task.aimYaw)) < 2 * DEG;
      if (yawOk || task.t > 1.6) { s.input.ads = true; s.adsT = 1; this.game.combat.useGadget(s, true, false); task.fired = true; task.t = 0; }
    }
    if (task.fired && task.t > 0.6) { this.gadgetTask = null; s.switchTo(0); }
    if (task.t > 4) { this.gadgetTask = null; s.switchTo(0); }
    void now;
  }
}

// Manages path requests with a per-frame budget.
export class AIManager {
  constructor(game) { this.game = game; this.queue = []; }
  requestPath(brain, x, z) { if (!this.queue.includes(brain)) this.queue.push(brain); brain._pathGoal = [x, z]; }
  update() {
    const nav = this.game.world.nav;
    nav.processDirty();
    let budget = 3;
    while (budget-- > 0 && this.queue.length) {
      const b = this.queue.shift();
      if (b.s.state !== 'alive') { b.pathPending = false; continue; }
      const [x, z] = b._pathGoal;
      const p = nav.findPath(b.s.pos.x, b.s.pos.z, x, z, { coverBias: 0.6, maxNodes: 30000, weight: 1.45 });
      b.onPath(p);
    }
  }
  clear() { this.queue = []; }
}
