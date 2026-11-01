"use strict";
// =====================================================================
//  HARD ENTRY — people, combat, ROE, compliance, doors, grenades, items
// =====================================================================
let NEXT_ID = 1;
class Person {
  constructor(kind, x, y) {
    this.id = NEXT_ID++; this.kind = kind; this.x = x; this.y = y; this.r = 10;
    this.angle = 0; this.hp = 100; this.maxHp = 100; this.status = 'ok';
    this.compliant = false; this.restrained = false; this.reported = false; this.state = 'idle';
    this.stunT = 0; this.flashT = 0; this.gasT = 0; this.pepperT = 0; this.tasedT = 0; this.hurtT = 0;
    this.bubble = null; this.path = null; this.pathI = 0; this.doorT = 0; this.repathT = 0; this.stuckT = 0;
    this.moving = false; this.visible = false; this.seen = false; this.ghost = null; this.spottedT = 0;
    this.pressure = 0; this.yellCD = 0; this.fireCD = 0; this.claim = null; this.injuredBy = null;
  }
  get swat() { return this.kind === 'player' || this.kind === 'officer'; }
  get ok() { return this.status === 'ok'; }
}
const PERSONA = {
  coward:     { comply: 0.30, react: [0.75, 1.15], acc: 0.7, flee: 0.7, push: 0.05, label: 'Coward' },
  normal:     { comply: 0.13, react: [0.55, 0.9], acc: 1.0, flee: 0.3, push: 0.2, label: 'Suspect' },
  aggressive: { comply: 0.06, react: [0.4, 0.65], acc: 1.15, flee: 0.08, push: 0.5, label: 'Aggressive' },
  fanatic:    { comply: 0.0, react: [0.32, 0.55], acc: 1.25, flee: 0.0, push: 0.65, label: 'Fanatic' },
  captor:     { comply: 0.09, react: [0.45, 0.7], acc: 1.1, flee: 0.0, push: 0.0, label: 'Hostage-taker' },
};
const CLOTHES_SUSPECT = ['#5a2e2e', '#3b3b3b', '#4a3f2a', '#2f3b2c', '#5b4a3a', '#3a2f45', '#6b3d2a'];
const CLOTHES_CIV = ['#b7a27a', '#6f8fb0', '#a86f6f', '#8fa87a', '#c7c0b0', '#9c86b0', '#d0a050', '#7aa0a0'];
const SKIN = ['#e0b896', '#c99a74', '#a8764f', '#7a5236', '#f0cfb0', '#5e3d27'];

function say(p, text, t = 2.2) { p.bubble = { text, t }; }
function radio(who, text, color) {
  G.radio.push({ who: who ? (who.kind === 'player' ? 'LEAD' : who.name ? who.name.toUpperCase() : who) : 'TOC', text, t: G.time, color: color || (who && who.team ? TEAM_COLORS[who.team] : who && who.kind === 'player' ? '#e6c35c' : '#9fd3a0') });
  if (G.radio.length > 40) G.radio.shift();
  Sfx.radio();
}
function toc(text) { setTimeout(() => { if (G.state === 'playing') radio(null, text, '#9fd3a0'); }, 700); }
function angleTo(a, b) { return Math.atan2(b.y - a.y, b.x - a.x); }
function swatList() { return G.swat.filter(s => s.ok); }
function moveActor(a, dx, dy) { G.level.move(a, dx, dy); }

// =====================================================================
//  NOISE / HEARING
// =====================================================================
function makeNoise(x, y, radius, kind) {
  const L = G.level;
  for (const n of G.npcs) {
    if (!n.ok || n.restrained) continue;
    const d = dist(x, y, n.x, n.y);
    if (d > radius) continue;
    if (d > radius * 0.55 && !L.los(x, y, n.x, n.y)) continue;
    npcHear(n, x, y, kind);
  }
}

// =====================================================================
//  DAMAGE / ROE
// =====================================================================
function isLawfulTarget(p) {
  if (p.kind !== 'suspect' || !p.ok || p.compliant || p.restrained) return false;
  if (p.weapon) return true;
  return p.firedT && G.time - p.firedT < 3;
}
function penalty(key, label, pts) {
  if (G.penaltyKeys.has(key)) return;
  G.penaltyKeys.add(key);
  G.penalties.push({ label, pts });
  G.flashMsg(label + '  ' + pts, '#ff6a5a');
}
// evaluate rules of engagement for a hit from `src` on `p`. force: 'lethal' | 'less'
function roeCheck(p, src, force) {
  if (!src || src.kind !== 'player') return;
  if (p.kind === 'officer') { penalty('ff' + p.id, 'Friendly fire on ' + p.name, -5); return; }
  if (p.kind === 'player') return;
  if (force === 'lethal') {
    if (!isLawfulTarget(p)) penalty('udf' + p.id, 'Unauthorized use of deadly force', -15);
  } else {
    if (p.compliant || p.restrained || !p.ok) penalty('uf' + p.id, 'Unauthorized use of force', -5);
  }
}
function damage(p, amount, src, info = {}) {
  if (p.status === 'dead') return;
  if (p.swat && amount > 0) {
    const prot = p.kind === 'player' ? G.armorProt : 0.45;
    amount *= 1 - prot;
  }
  if (p.kind === 'player' && G.godMode) amount = 0;
  p.hp -= amount; p.hurtT = 0.35;
  if (src && src.swat && p.kind === 'civ') G.civInjuredByTeam.add(p.id);
  if (p.kind === 'player') { G.hurtFx = Math.min(1, G.hurtFx + amount / 40); G.shake = Math.min(10, G.shake + amount / 4); }
  if (amount > 3) {
    bloodSplat(p.x, p.y, info.angle, Math.min(1.5, amount / 25));
    p.pressure += 0.12;
  }
  if (p.hp <= 0) {
    if (info.nonLethal) { p.hp = 1; p.stunT = Math.max(p.stunT, 2.5); return; }
    const wasStatus = p.status;
    if (wasStatus === 'down' || p.kind === 'player' || p.hp < -40 || Math.random() < 0.5) p.status = 'dead';
    else p.status = 'down';
    p.killedBy = src; p.path = null; p.bubble = null; p.compliant = p.compliant && p.restrained;
    dropWeapon(p);
    if (p.state === 'shield') releaseHostage(p);
    if (p.captor) { const c = p.captor; if (c.hostage === p) releaseHostage(c); }
    if (p.kind === 'player') { G.onPlayerDown(); return; }
    if (p.kind === 'officer' && wasStatus === 'ok') {
      radio(null, `Officer down! ${p.name} is ${p.status === 'dead' ? 'KIA' : 'down'}.`, '#ff6a5a');
      Voice.say('Officer down!', { force: true });
    }
    if (p.kind === 'civ' && p.status === 'dead' && src && src.swat) G.civKilledByTeam.add(p.id);
    if (src && src.kind === 'player' && info.explosive && p.status === 'dead' && p.kind === 'suspect' && !info.wasLawful) penalty('udf' + p.id, 'Unauthorized use of deadly force', -15);
    if (src && src.swat && p.kind === 'suspect') G.flashMsg(p.status === 'dead' ? 'Suspect neutralized' : 'Suspect incapacitated', '#e6c35c');
  }
}
function dropWeapon(p) {
  if (p.weapon) {
    spawnItem(p.x + rand(-10, 10), p.y + rand(-10, 10), NPC_GUNS[p.weapon].name, 'weapon');
    p.weapon = null;
  }
}
function bloodSplat(x, y, ang, s = 1) {
  const c = G.decalCtx; if (!c) return;
  ang = ang == null ? Math.random() * TAU : ang;
  c.fillStyle = 'rgba(110,10,12,0.55)';
  for (let i = 0; i < 4 + s * 4; i++) {
    const d = rand(4, 22) * s, a = ang + rand(-0.6, 0.6);
    c.beginPath(); c.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, rand(1.5, 4.5) * s, 0, TAU); c.fill();
  }
}
function decalMark(x, y, color, r) { const c = G.decalCtx; if (!c) return; c.fillStyle = color; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }

// =====================================================================
//  SHOOTING (hitscan)
// =====================================================================
function fireShot(shooter, angle, w) {
  const L = G.level, range = w.range || 1500;
  const ca = Math.cos(angle), sa = Math.sin(angle);
  let x0 = shooter.x + ca * (shooter.r + 3), y0 = shooter.y + sa * (shooter.r + 3);
  if (L.solid(Math.floor(x0 / TS), Math.floor(y0 / TS))) { x0 = shooter.x; y0 = shooter.y; }
  const x1 = x0 + ca * range, y1 = y0 + sa * range;
  let hitKind = null, hitDoor = null, wallT = 1;
  const hit = L.traverse(x0, y0, x1, y1, (tx, ty, t) => {
    const tt = L.tileAt(tx, ty);
    if (tt === T.WALL || tt === T.HIGH) { hitKind = 'wall'; return true; }
    if (tt === T.DOOR) { const d = L.doorAtTile(tx, ty); if (d.state === 'closed') { hitKind = 'door'; hitDoor = d; return true; } }
    if (tt === T.LOW && t * range > 44 && Math.random() < 0.4) { hitKind = 'cover'; return true; }
    if (tt === T.WINDOW && Math.random() < 0.3) { G.particles.push({ x: (tx + 0.5) * TS, y: (ty + 0.5) * TS, vx: rand(-40, 40), vy: rand(-40, 40), life: 0.4, max: 0.4, color: '#bfe3ff', size: 2 }); }
    return false;
  });
  if (hit) wallT = hit.t;
  let victim = null, vt = wallT;
  for (const p of G.persons) {
    if (p === shooter || p.status !== 'ok') continue;
    const t = segCircle(x0, y0, x1, y1, p.x, p.y, p.r);
    if (t >= 0 && t < vt) { vt = t; victim = p; }
  }
  const ex = x0 + (x1 - x0) * vt, ey = y0 + (y1 - y0) * vt;
  G.tracers.push({ x0, y0, x1: ex, y1: ey, life: 0.07, color: w.ll ? '#9fdcff' : (shooter.swat ? '#ffe7a8' : '#ffb27a') });
  if (victim) applyHit(victim, shooter, w, angle, ex, ey);
  else if (hitKind === 'door') { damageDoor(hitDoor, w.doorDmg || 0, shooter); sparks(ex, ey, '#c49a6c', 4); }
  else if (hitKind) { sparks(ex, ey, hitKind === 'cover' ? '#b08a5a' : '#d8d2c0', 3); decalMark(ex - ca * 1.5, ey - sa * 1.5, 'rgba(20,20,20,0.6)', 1.6); }
  return victim;
}
function sparks(x, y, color, n) {
  for (let i = 0; i < n; i++) G.particles.push({ x, y, vx: rand(-90, 90), vy: rand(-90, 90), life: rand(0.15, 0.3), max: 0.3, color, size: rand(1, 2.2) });
}
function applyHit(p, src, w, angle, x, y) {
  Sfx.hit(x, y);
  if (w.ll === 'taser') {
    if (dist(src.x, src.y, p.x, p.y) > (w.range || 270)) return;
    roeCheck(p, src, 'less');
    G.wires.push({ a: src, b: p, life: 1.2 });
    tasePerson(p, src);
    return;
  }
  if (w.ll === 'beanbag') {
    roeCheck(p, src, 'less');
    const close = dist(src.x, src.y, p.x, p.y) < 70;
    damage(p, w.dmg * (close ? 3 : 1), src, { angle, nonLethal: !close });
    if (!p.ok) return;
    p.stunT = Math.max(p.stunT, 1.7); p.pressure += 0.3;
    if (p.weapon && Math.random() < 0.35) dropWeapon(p);
    if (p.state === 'shield') releaseHostage(p);
    say(p, pick(['Agh!', 'Ow!', 'Ugh!']), 1);
    return;
  }
  if (w.ll === 'pepper') {
    roeCheck(p, src, 'less');
    if (!(p.swat && (p.kind === 'officer' || G.loadout.head === 'gasmask'))) { p.pepperT = Math.max(p.pepperT, 4); p.pressure += 0.05; }
    p.stunT = Math.max(p.stunT, 0.25);
    puff(x, y, '#e0e0a0');
    return;
  }
  roeCheck(p, src, 'lethal');
  damage(p, w.dmg * rand(0.85, 1.15), src, { angle });
  if (p.ok && !p.swat) { p.stunT = Math.max(p.stunT, 0.25); if (p.state === 'shield' && Math.random() < 0.5) releaseHostage(p); }
}
function puff(x, y, color) { for (let i = 0; i < 5; i++) G.particles.push({ x, y, vx: rand(-30, 30), vy: rand(-30, 30), life: 0.6, max: 0.6, color, size: rand(3, 6), soft: true }); }
function tasePerson(p, src) {
  if (!p.ok) return;
  p.tasedT = 3.2; p.stunT = 0; p.path = null; p.pressure += 0.5;
  if (p.swat) { p.tasedT = 1.2; return; }
  dropWeapon(p);
  if (p.state === 'shield') releaseHostage(p);
  say(p, 'AAAGH!', 1.5);
}

// =====================================================================
//  COMPLIANCE
// =====================================================================
const YELLS_PLAYER = ['POLICE! SHOW ME YOUR HANDS!', 'GET ON THE GROUND!', 'DROP THE WEAPON!', 'POLICE! DON\'T MOVE!', 'HANDS UP! NOW!'];
const YELLS_OFFICER = ['Police! Hands!', 'On the ground!', 'Drop it!', 'Show me your hands!', 'Get down!'];
function yell(src) {
  const L = G.level;
  const line = pick(src.kind === 'player' ? YELLS_PLAYER : YELLS_OFFICER);
  say(src, line, 1.4);
  Sfx.yell(src.x, src.y, src.kind === 'player' ? 1 : 0.8 + Math.random() * 0.3);
  if (src.kind === 'player') Voice.say(line.toLowerCase(), { pitch: 0.8, rate: 1.4 });
  makeNoise(src.x, src.y, 360, 'yell');
  for (const n of G.npcs) {
    if (!n.ok || n.compliant || n.restrained || n.state === 'hostage') continue;
    const d = dist(src.x, src.y, n.x, n.y);
    const heard = d < 190 || (d < 520 && L.los(src.x, src.y, n.x, n.y));
    if (!heard) continue;
    if (!n.warnedT) n.warnedT = G.time;
    let bonus = 0;
    if (src.kind === 'player' && Math.abs(angDiff(src.angle, angleTo(src, n))) < 0.2 && L.los(src.x, src.y, n.x, n.y)) bonus += 0.1;
    tryComply(n, bonus);
  }
}
function swatSeeing(n) {
  let c = 0;
  for (const s of G.swat) if (s.ok && dist(s.x, s.y, n.x, n.y) < 600 && G.level.los(s.x, s.y, n.x, n.y)) c++;
  return c;
}
function tryComply(n, bonus = 0) {
  if (!n.ok || n.compliant || n.restrained || n.yellCD > 0) return;
  n.yellCD = 0.75;
  const P = n.kind === 'civ' ? { comply: 0.42 } : PERSONA[n.persona];
  let ch = P.comply + n.pressure + bonus;
  const disabled = n.flashT > 0 || n.stunT > 0 || n.tasedT > 0;
  if (disabled) ch += 0.35;
  if (n.gasT > 0 || n.pepperT > 0) ch += 0.25;
  if (n.hp < n.maxHp * 0.6) ch += 0.15;
  ch += 0.07 * Math.min(3, swatSeeing(n));
  if (n.kind === 'suspect' && n.state === 'combat' && !disabled) ch -= 0.08;
  if (n.persona === 'fanatic') ch = disabled ? 0.1 + n.pressure * 0.3 : 0;
  if (n.kind === 'civ' && n.state === 'flee') ch -= 0.15;
  n.pressure += n.kind === 'civ' ? 0.13 : 0.045;
  if (Math.random() < ch) comply(n);
  else if (Math.random() < 0.5) say(n, n.kind === 'civ' ? pick(['Please don\'t shoot!', 'What\'s happening?!', 'No no no!', 'I didn\'t do anything!']) : pick(['Screw you!', 'Never!', 'Back off!', 'Not going back!', 'Make me!']), 1.4);
}
function comply(n) {
  if (n.state === 'shield') releaseHostage(n);
  n.compliant = true; n.state = 'surrender'; n.path = null;
  if (n.kind === 'suspect') {
    if (n.faker) { n.hiddenWeapon = 'pistol'; n.fakeT = rand(4, 9); }
    dropWeapon(n);
    say(n, pick(['Okay! Okay! Don\'t shoot!', 'I give up!', 'Alright, alright!', 'Don\'t shoot!']), 2);
  } else say(n, pick(['Okay! Okay!', 'Please, I\'m unarmed!', 'Don\'t shoot me!']), 2);
}
function restrainPerson(p, by) {
  p.restrained = true; p.compliant = true; p.state = 'restrained'; p.claim = null; p.path = null;
  Sfx.zip(p.x, p.y);
  if (p.hiddenWeapon) {
    spawnItem(p.x + 10, p.y + 8, 'Concealed ' + NPC_GUNS[p.hiddenWeapon].name.toLowerCase(), 'weapon');
    p.hiddenWeapon = null;
    radio(by, 'Found a concealed weapon on this one.');
  }
  radio(by, p.kind === 'suspect' ? 'TOC, suspect in custody.' : 'TOC, civilian secured.');
  toc(pick(['Copy.', 'TOC copies.', 'Good work.']));
}
function reportPerson(p, by) {
  p.reported = true;
  const who = p.kind === 'suspect' ? 'suspect' : p.kind === 'civ' ? 'civilian' : 'officer ' + p.name;
  radio(by, `TOC, ${who} ${p.status === 'dead' ? 'deceased' : 'incapacitated'}.`);
  toc('Copy, we\'ll send medical.');
}
function collectItem(it, by) {
  it.collected = true; it.claim = null;
  radio(by, 'Evidence collected: ' + it.name + '.');
  Sfx.click(it.x, it.y);
}
function releaseHostage(captor) {
  const h = captor.hostage;
  if (captor.state === 'shield') captor.state = 'combat';
  if (h && h.state === 'hostage') { h.state = 'cower'; h.captor = null; if (h.ok) say(h, 'Help me!', 1.5); }
}
function spawnItem(x, y, name, kind, required = false) {
  const it = { id: NEXT_ID++, x, y, name, kind, collected: false, required, seen: false, claim: null, rot: Math.random() * TAU };
  G.items.push(it);
  return it;
}

// =====================================================================
//  DOORS
// =====================================================================
function openDoor(d, by, forced = false) {
  const L = G.level;
  for (const dd of L.doorGroup(d)) {
    if (dd.state !== 'closed') continue;
    dd.state = forced ? 'broken' : 'open';
    if (forced) dd.locked = false;
    dd.openSide = by ? -L.sideOf(dd, by.x, by.y) : 1;
    dd.wedged = false;
  }
  L.markDirty();
  Sfx.door(d.x, d.y, false);
  makeNoise(d.x, d.y, forced ? 650 : 140, forced ? 'breach' : 'door');
  if (d.trap) triggerTrap(d, by);
  else if (d.partner && d.partner.trap) triggerTrap(d.partner, by);
  if (forced && by) {
    const s = -L.sideOf(d, by.x, by.y), [nx, ny] = L.doorNormal(d);
    for (const p of G.persons) if (p.ok && !p.swat && dist(p.x, p.y, d.x + nx * s * TS * 0.8, d.y + ny * s * TS * 0.8) < 30) { p.stunT = Math.max(p.stunT, 1.4); p.pressure += 0.2; }
  }
}
function closeDoor(d) {
  const L = G.level;
  for (const dd of L.doorGroup(d)) {
    if (dd.state !== 'open') return false;
    for (const p of G.persons) {
      if (p.status === 'dead' && dist(p.x, p.y, dd.x, dd.y) > 22) continue;
      const cx = clamp(p.x, dd.tx * TS, dd.tx * TS + TS), cy = clamp(p.y, dd.ty * TS, dd.ty * TS + TS);
      if ((p.x - cx) ** 2 + (p.y - cy) ** 2 < (p.r + 1) ** 2) return false;
    }
  }
  for (const dd of L.doorGroup(d)) dd.state = 'closed';
  L.markDirty(); Sfx.door(d.x, d.y, true); makeNoise(d.x, d.y, 160, 'door');
  return true;
}
function damageDoor(d, amount, by) {
  if (d.state !== 'closed' || amount <= 0) return;
  d.hp -= amount;
  if (d.locked && d.hp < 70) { d.locked = false; }
  if (d.hp <= 0) {
    Sfx.splinter(d.x, d.y);
    for (let i = 0; i < 14; i++) G.particles.push({ x: d.x, y: d.y, vx: rand(-120, 120), vy: rand(-120, 120), life: rand(0.4, 0.9), max: 0.9, color: '#8a6440', size: rand(1.5, 3) });
    openDoor(d, by, true);
  }
}
function kickDoor(d, by) {
  Sfx.kick(d.x, d.y); makeNoise(d.x, d.y, 550, 'breach');
  if (d.state !== 'closed') return 'open';
  if (d.wedged) { d.lockKnown = true; return 'wedged'; }
  if (!d.locked || Math.random() < 0.38) { openDoor(d, by, d.locked); return 'ok'; }
  d.lockKnown = true;
  for (const dd of G.level.doorGroup(d)) dd.lockKnown = true;
  return 'fail';
}
function ramDoor(d, by) {
  Sfx.kick(d.x, d.y); Sfx.splinter(d.x, d.y); makeNoise(d.x, d.y, 750, 'breach');
  for (const dd of G.level.doorGroup(d)) dd.wedged = false;
  if (d.state === 'closed') openDoor(d, by, true);
  G.shake = Math.max(G.shake, 4);
}
function detonateC2(d, by) {
  const L = G.level, side = d.c2 ? d.c2.side : (by ? L.sideOf(d, by.x, by.y) : 1);
  for (const dd of L.doorGroup(d)) { dd.c2 = null; dd.state = 'broken'; dd.locked = false; dd.wedged = false; }
  L.markDirty();
  explosionFx(d.x, d.y, 1);
  Sfx.boom(d.x, d.y, 1); makeNoise(d.x, d.y, 1200, 'explosion');
  G.shake = Math.max(G.shake, 8);
  if (d.trap) triggerTrap(d, by);
  for (const p of G.persons) {
    if (p.status === 'dead') continue;
    const dd = dist(p.x, p.y, d.x, d.y); if (dd > 230) continue;
    const far = L.sideOf(d, p.x, p.y) !== side;
    if (!L.los(d.x, d.y, p.x, p.y) && dd > 24) continue;
    const wasLawful = isLawfulTarget(p);
    if (far && dd < 110) damage(p, 50 * (1 - dd / 110) + 5, by, { explosive: true, wasLawful });
    else if (!far && dd < 34) damage(p, 25, by, { explosive: true, wasLawful });
    if (p.ok && far) { p.stunT = Math.max(p.stunT, 2.6 * (1 - dd / 230) + 0.8); p.pressure += 0.35; if (p.state === 'shield') releaseHostage(p); }
  }
}
function triggerTrap(d, by) {
  const trap = d.trap; if (!trap) return;
  d.trap = null; d.trapKnown = false;
  const L = G.level, [nx, ny] = L.doorNormal(d);
  const x = d.x + nx * d.trapSide * 10, y = d.y + ny * d.trapSide * 10;
  if (trap === 'alarm') {
    radio(null, 'Alarm trap tripped — they know you\'re coming!', '#ff9a5a');
    for (let i = 0; i < 6; i++) Sfx.tone(1400 + (i % 2) * 400, 0.15, 0.25, x, y, { delay: i * 0.18 });
    makeNoise(x, y, 4000, 'alarm');
  } else if (trap === 'flash') {
    radio(null, 'Flash trap!', '#ff9a5a');
    detonateGrenade({ type: 'flash', x, y, src: null });
  } else if (trap === 'bomb') {
    radio(null, 'IED on the door!', '#ff6a5a');
    explosionFx(x, y, 1.3); Sfx.boom(x, y, 1.3); makeNoise(x, y, 1500, 'explosion'); G.shake = Math.max(G.shake, 12);
    for (const dd of L.doorGroup(d)) dd.state = 'broken';
    L.markDirty();
    for (const p of G.persons) {
      if (p.status === 'dead') continue;
      const r = dist(p.x, p.y, x, y);
      if (r < 150 && (L.los(x, y, p.x, p.y) || r < 30)) damage(p, 85 * (1 - r / 150) + 10, null, { explosive: true });
      if (p.ok && r < 220) p.stunT = Math.max(p.stunT, 1.5);
    }
  }
}
function mirrorDoor(d, by) {
  const L = G.level, s = -L.sideOf(d, by.x, by.y), [nx, ny] = L.doorNormal(d);
  const vx = d.x + nx * s * 18, vy = d.y + ny * s * 18;
  let sus = 0, civ = 0;
  for (const n of G.npcs) {
    if (n.status === 'dead') continue;
    if (dist(vx, vy, n.x, n.y) < 560 && L.los(vx, vy, n.x, n.y)) {
      n.spottedT = 5; n.seen = true;
      if (n.ok && !n.restrained) { if (n.kind === 'suspect') sus++; else civ++; }
    }
  }
  for (const dd of L.doorGroup(d)) if (dd.trap) dd.trapKnown = true;
  return { sus, civ, trap: L.doorGroup(d).some(dd => dd.trap), vx, vy };
}

// =====================================================================
//  GRENADES / GAS / EXPLOSIONS
// =====================================================================
function throwGrenade(src, type, tx, ty, fromX, fromY) {
  const ox = fromX == null ? src.x : fromX, oy = fromY == null ? src.y : fromY;
  const d = Math.min(dist(ox, oy, tx, ty), 360), a = Math.atan2(ty - oy, tx - ox), k = 3;
  G.grenades.push({ type, x: ox + Math.cos(a) * 8, y: oy + Math.sin(a) * 8, vx: Math.cos(a) * d * k, vy: Math.sin(a) * d * k, fuse: type === 'cs' ? 1.1 : 1.5, src, spin: rand(-12, 12), rot: 0, k });
  Sfx.click(ox, oy);
  makeNoise(ox, oy, 200, 'throw');
}
function updateGrenades(dt) {
  const L = G.level;
  for (const g of G.grenades) {
    g.fuse -= dt; g.rot += g.spin * dt;
    const f = Math.exp(-g.k * dt);
    const nx = g.x + g.vx * dt;
    if (L.solid(Math.floor(nx / TS), Math.floor(g.y / TS))) { g.vx *= -0.45; Sfx.click(g.x, g.y); } else g.x = nx;
    const ny = g.y + g.vy * dt;
    if (L.solid(Math.floor(g.x / TS), Math.floor(ny / TS))) { g.vy *= -0.45; } else g.y = ny;
    g.vx *= f; g.vy *= f;
    if (g.fuse <= 0) { g.dead = true; detonateGrenade(g); }
  }
  G.grenades = G.grenades.filter(g => !g.dead);
  for (const c of G.gas) {
    c.t -= dt; c.r = Math.min(c.maxR, c.r + 70 * dt);
    if (c.t < 3) c.r = Math.max(10, c.r - 10 * dt);
    for (const p of G.persons) {
      if (!p.ok) continue;
      if (dist(p.x, p.y, c.x, c.y) > c.r) continue;
      if (p.kind === 'officer' || (p.kind === 'player' && G.loadout.head === 'gasmask')) continue;
      p.gasT = Math.max(p.gasT, 1.3);
      if (!p.swat) p.pressure = Math.min(p.pressure + dt * 0.05, 0.6);
    }
  }
  G.gas = G.gas.filter(c => c.t > 0);
}
function detonateGrenade(g) {
  const L = G.level;
  if (g.type === 'flash') {
    Sfx.bang(g.x, g.y); makeNoise(g.x, g.y, 1100, 'explosion');
    G.particles.push({ x: g.x, y: g.y, vx: 0, vy: 0, life: 0.25, max: 0.25, color: '#ffffff', size: 90, glow: true });
    for (const p of G.persons) {
      if (!p.ok) continue;
      const d = dist(p.x, p.y, g.x, g.y); if (d > 420) continue;
      if (!L.los(g.x, g.y, p.x, p.y) && d > 40) continue;
      const I = 1 - d / 420;
      const facing = Math.cos(angDiff(p.angle, angleTo(p, g))) > 0.1 ? 1 : 0.45;
      if (p.kind === 'player') {
        const e = clamp(I * facing * 1.4, 0, 1);
        G.flashFx = Math.max(G.flashFx, e); G.deafT = Math.max(G.deafT, 1 + 5 * e); Sfx.ring(e);
      } else if (p.kind === 'officer') p.flashT = Math.max(p.flashT, 0.8 * I * facing);
      else {
        p.flashT = Math.max(p.flashT, 1.5 + 4.8 * I * facing); p.pressure += 0.35 * I;
        if (p.state === 'shield') releaseHostage(p);
        say(p, pick(['My eyes!', 'Aaagh!', 'I can\'t see!']), 1.6);
      }
    }
  } else if (g.type === 'stinger') {
    Sfx.bang(g.x, g.y); Sfx.noise(0.3, 1200, 0.6, g.x, g.y); makeNoise(g.x, g.y, 900, 'explosion');
    for (let i = 0; i < 26; i++) { const a = Math.random() * TAU, s = rand(200, 420); G.particles.push({ x: g.x, y: g.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 0.35, max: 0.35, color: '#222', size: 1.8 }); }
    for (const p of G.persons) {
      if (!p.ok) continue;
      const d = dist(p.x, p.y, g.x, g.y); if (d > 270) continue;
      if (!L.los(g.x, g.y, p.x, p.y) && d > 30) continue;
      const I = 1 - d / 270;
      damage(p, 8 * I, g.src, { nonLethal: true });
      if (!p.ok) continue;
      if (p.kind === 'player') { G.shake = Math.max(G.shake, 5 * I); continue; }
      p.stunT = Math.max(p.stunT, (p.kind === 'officer' ? 0.4 : 1) + 2.6 * I);
      if (!p.swat) { p.pressure += 0.3 * I; if (p.state === 'shield') releaseHostage(p); if (p.weapon && Math.random() < 0.2 * I) dropWeapon(p); }
    }
  } else if (g.type === 'cs') {
    Sfx.hiss(g.x, g.y); makeNoise(g.x, g.y, 300, 'throw');
    G.gas.push({ x: g.x, y: g.y, r: 15, maxR: 125, t: 17, seed: Math.random() * 100 });
  }
}
function explosionFx(x, y, s) {
  G.particles.push({ x, y, vx: 0, vy: 0, life: 0.35, max: 0.35, color: '#ffd28a', size: 70 * s, glow: true });
  for (let i = 0; i < 30; i++) { const a = Math.random() * TAU, v = rand(60, 260) * s; G.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rand(0.4, 1.0), max: 1, color: pick(['#5a5a5a', '#3a3a3a', '#ffb050', '#7a6a5a']), size: rand(2, 5), soft: true }); }
  decalMark(x, y, 'rgba(10,10,10,0.45)', 26 * s);
}
