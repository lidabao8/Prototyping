"use strict";
// =====================================================================
//  HARD ENTRY — AI: suspects, civilians, SWAT officers, entry orders
// =====================================================================

// ---------- shared movement ----------
function followPath(a, speed, dt) {
  const L = G.level;
  if (!a.path || a.pathI >= a.path.length) { a.moving = false; return true; }
  const p = a.path[a.pathI];
  const dx = p.x - a.x, dy = p.y - a.y, d = Math.hypot(dx, dy);
  const last = a.pathI === a.path.length - 1;
  if (d < (last ? 5 : 11)) { a.pathI++; if (a.pathI >= a.path.length) { a.moving = false; return true; } return false; }
  const ax = a.x + dx / d * (a.r + 9), ay = a.y + dy / d * (a.r + 9);
  const door = L.doorAtTile(Math.floor(ax / TS), Math.floor(ay / TS));
  if (door && door.state === 'closed') {
    a.moving = false; a.doorT += dt;
    if (a.doorT > 0.35) { a.doorT = 0; actorOpenDoor(a, door); }
    return false;
  }
  a.doorT = 0;
  const bx = a.x, by = a.y;
  const step = Math.min(speed * dt, d);
  moveActor(a, dx / d * step, dy / d * step);
  a.moving = true; a.moveAngle = Math.atan2(dy, dx);
  const moved = dist(bx, by, a.x, a.y);
  if (moved < step * 0.25) { a.stuckT += dt; if (a.stuckT > 0.7) { a.stuckT = 0; a.path = null; a.repathT = 0; moveActor(a, rand(-6, 6), rand(-6, 6)); } }
  else a.stuckT = Math.max(0, a.stuckT - dt);
  return false;
}
function actorOpenDoor(a, d) {
  if (d.wedged) { d.lockKnown = true; if (a.swat) callout(a, 'Door\'s wedged shut.'); a.path = null; a.repathT = 0.5; return; }
  if (a.swat) {
    if (d.locked) { for (const dd of G.level.doorGroup(d)) dd.lockKnown = true; callout(a, 'Door\'s locked.'); a.path = null; a.repathT = 0.5; a.blockedDoor = d; return; }
  } else if (d.trap) { a.path = null; a.repathT = 1; return; }
  openDoor(d, a);
}
// go to (gx,gy); returns true when arrived
function navigate(a, gx, gy, speed, dt, who) {
  const L = G.level;
  const d = dist(a.x, a.y, gx, gy);
  if (d < 7) { a.moving = false; a.path = null; return true; }
  a.repathT -= dt;
  if (d < 260 && L.walkClear(a.x, a.y, gx, gy, 9)) {
    a.path = null;
    const step = Math.min(speed * dt, d);
    const bx = a.x, by = a.y;
    moveActor(a, (gx - a.x) / d * step, (gy - a.y) / d * step);
    a.moving = true; a.moveAngle = Math.atan2(gy - by, gx - bx);
    return false;
  }
  if (!a.path || a.repathT <= 0 || !a.pathGoal || dist(a.pathGoal.x, a.pathGoal.y, gx, gy) > 28) {
    a.path = L.findPath(a.x, a.y, gx, gy, who); a.pathI = 0; a.pathGoal = { x: gx, y: gy }; a.repathT = 1.3;
    if (!a.path) { a.moving = false; a.navFail = (a.navFail || 0) + 1; return false; }
    a.navFail = 0;
  }
  followPath(a, speed, dt);
  return false;
}
function tickEffects(p, dt) {
  p.stunT = Math.max(0, p.stunT - dt); p.flashT = Math.max(0, p.flashT - dt); p.gasT = Math.max(0, p.gasT - dt);
  p.pepperT = Math.max(0, p.pepperT - dt); p.hurtT = Math.max(0, p.hurtT - dt); p.yellCD = Math.max(0, p.yellCD - dt);
  p.fireCD -= dt; p.spottedT = Math.max(0, p.spottedT - dt);
  if (p.tasedT > 0) { p.tasedT -= dt; if (p.tasedT <= 0) { p.tasedT = 0; if (!p.swat) afterTase(p); } }
  if (p.bubble) { p.bubble.t -= dt; if (p.bubble.t <= 0) p.bubble = null; }
  p.pressure = Math.max(0, p.pressure - dt * 0.01);
}
function afterTase(p) {
  if (p.compliant || p.restrained) return;
  const ch = p.kind === 'civ' ? 0.95 : p.persona === 'fanatic' ? 0.35 : 0.8;
  if (Math.random() < ch) comply(p); else { p.state = 'flee'; startFlee(p); }
}

// =====================================================================
//  NPC (suspects + civilians)
// =====================================================================
function npcHear(n, x, y, kind) {
  if (n.compliant) return;
  n.alertPos = { x, y, t: G.time, kind };
  if (kind === 'gunshot' || kind === 'explosion' || kind === 'breach' || kind === 'alarm') n.alarmed = true;
  if (n.kind === 'civ' && (kind === 'gunshot' || kind === 'explosion') && dist(x, y, n.x, n.y) < 260) n.pressure += 0.04;
}
function perceive(n) {
  const L = G.level;
  let best = null, bd = 1e9;
  if (n.flashT <= 0) {
    for (const s of G.swat) {
      if (!s.ok) continue;
      const d = dist(n.x, n.y, s.x, s.y); if (d > 720 || d > bd) continue;
      const fov = (n.state === 'combat' || n.state === 'shield') ? 2.3 : 1.45;
      if (d > 64 && Math.abs(angDiff(n.angle, angleTo(n, s))) > fov) continue;
      if (!L.los(n.x, n.y, s.x, s.y)) continue;
      best = s; bd = d;
    }
  }
  n.target = best;
  if (best) { n.lastKnown = { x: best.x, y: best.y, t: G.time }; n.alarmed = true; }
}
function updateNPC(n, dt) {
  if (!n.ok) return;
  tickEffects(n, dt);
  if (n.restrained || n.state === 'hostage') return;
  n.thinkT = (n.thinkT || 0) - dt;
  if (n.thinkT <= 0) { n.thinkT = 0.12 + Math.random() * 0.08; perceive(n); }
  if (n.tasedT > 0) return;
  if (n.compliant) { updateCompliant(n, dt); return; }
  if (n.stunT > 0 || n.flashT > 0) {
    if (n.state === 'shield') releaseHostage(n);
    n.angle += Math.sin(G.time * 6 + n.id) * dt * 2.5;
    if (Math.random() < dt * 2) moveActor(n, rand(-8, 8), rand(-8, 8));
    return;
  }
  if (n.kind === 'civ') civBrain(n, dt); else suspectBrain(n, dt);
}
function updateCompliant(n, dt) {
  n.path = null;
  const near = nearestSwat(n);
  if (near && near.d < 500) n.angle = turnToward(n.angle, angleTo(n, near.s), 2 * dt);
  if (n.hiddenWeapon && !n.restrained) {
    n.fakeT -= dt;
    if (n.fakeT <= 0) {
      const L = G.level;
      const visible = G.swat.filter(s => s.ok && dist(s.x, s.y, n.x, n.y) < 600 && L.los(s.x, s.y, n.x, n.y));
      const watched = visible.some(s => dist(s.x, s.y, n.x, n.y) < 320 && Math.abs(angDiff(s.angle, angleTo(s, n))) < 0.3);
      if (visible.length && !watched) {
        n.compliant = false; n.weapon = n.hiddenWeapon; n.hiddenWeapon = null; n.faker = false;
        n.state = 'combat'; n.react = 0; n.reactTime = 0.2; n.target = visible[0]; n.angle = angleTo(n, visible[0]);
        say(n, pick(['Not today!', 'Surprise!', 'Gotcha!']), 1.5);
      } else n.fakeT = rand(0.8, 2.2);
    }
  }
}
function nearestSwat(n) {
  let best = null, bd = 1e9;
  for (const s of G.swat) { if (!s.ok) continue; const d = dist(s.x, s.y, n.x, n.y); if (d < bd) { bd = d; best = s; } }
  return best ? { s: best, d: bd } : null;
}
function startFlee(n) {
  const L = G.level;
  const here = L.roomAt(n.x, n.y);
  let best = null, bv = -1;
  for (let k = 0; k < 14; k++) {
    let room = randi(0, L.roomCount - 1);
    if (L.isOutdoor(room)) continue;
    if (k < 4) room = here;
    const p = L.randomTileInRoom(room, q => !L.circleSolid(q.x, q.y, 10));
    if (!p) continue;
    let md = 1e9; for (const s of G.swat) if (s.ok) md = Math.min(md, dist(s.x, s.y, p.x, p.y));
    const v = md + (room === here ? -80 : 0) + rand(0, 60);
    if (v > bv) { bv = v; best = p; }
  }
  if (!best) return;
  n.path = L.findPath(n.x, n.y, best.x, best.y, 'npc'); n.pathI = 0;
  n.state = n.path ? 'flee' : 'cower';
}
function idleWander(n, dt) {
  n.idleT = (n.idleT || rand(2, 6)) - dt;
  if (n.path) { followPath(n, 55, dt); return; }
  if (n.idleT <= 0) {
    n.idleT = rand(4, 10);
    if (Math.random() < 0.45) {
      const L = G.level, room = L.roomAt(n.x, n.y);
      const p = L.randomTileInRoom(room, q => dist(q.x, q.y, n.x, n.y) < 4 * TS && !L.circleSolid(q.x, q.y, 10));
      if (p) { n.path = L.findPath(n.x, n.y, p.x, p.y, 'npc'); n.pathI = 0; }
    } else n.idleAngle = n.angle + rand(-1.5, 1.5);
  }
  if (n.idleAngle != null) n.angle = turnToward(n.angle, n.idleAngle, 1.5 * dt);
  if (n.path && n.moving) n.angle = turnToward(n.angle, n.moveAngle, 5 * dt);
}
function civBrain(n, dt) {
  const tgt = n.target;
  const scared = tgt || (n.alarmed && n.alertPos && G.time - n.alertPos.t < 30);
  if (n.state === 'idle' && scared) {
    if (Math.random() < 0.45) startFlee(n); else n.state = 'cower';
    say(n, pick(['Help!', 'Oh my god!', 'Don\'t shoot!', 'What\'s going on?!']), 1.6);
  }
  if (n.state === 'flee') {
    if (followPath(n, 150, dt)) n.state = 'cower';
    if (n.moving) n.angle = turnToward(n.angle, n.moveAngle, 8 * dt);
    return;
  }
  if (n.state === 'cower') {
    if (tgt) n.angle = turnToward(n.angle, angleTo(n, tgt), 3 * dt);
    n.panicT = (n.panicT || rand(5, 12)) - dt;
    if (n.panicT <= 0) { n.panicT = rand(6, 14); if (Math.random() < 0.3 && n.alertPos && G.time - n.alertPos.t < 4) startFlee(n); }
    return;
  }
  idleWander(n, dt);
}
function canGrab(n) {
  const h = n.hostage;
  return h && h.ok && !h.restrained && h.state !== 'hostage' && dist(n.x, n.y, h.x, h.y) < 120;
}
function suspectBrain(n, dt) {
  const P = PERSONA[n.persona];
  const tgt = n.target;
  if (n.state === 'shield') return shieldBrain(n, dt);
  if (!n.weapon) {
    // unarmed suspect: runs or hides, hard to convince
    if (tgt || n.alarmed) {
      if (n.state !== 'flee' && n.state !== 'cower') { if (Math.random() < 0.6) startFlee(n); else n.state = 'cower'; }
      if (n.state === 'flee') { if (followPath(n, 160, dt)) n.state = 'cower'; if (n.moving) n.angle = turnToward(n.angle, n.moveAngle, 8 * dt); }
      else if (tgt) n.angle = turnToward(n.angle, angleTo(n, tgt), 3 * dt);
      return;
    }
    return idleWander(n, dt);
  }
  if (tgt) {
    if (n.persona === 'captor' && canGrab(n) && dist(n.x, n.y, tgt.x, tgt.y) < 520) {
      const h = n.hostage;
      n.state = 'shield'; h.state = 'hostage'; h.captor = n; h.path = null;
      say(n, pick(['Back off or I shoot!', 'Stay back! I\'ll do it!', 'One more step!']), 2.2);
      say(h, 'Please help me!', 2);
      return;
    }
    const a = angleTo(n, tgt);
    if (n.state !== 'combat') {
      n.state = 'combat'; n.react = 0;
      n.reactTime = rand(P.react[0], P.react[1]) * (n.gasT > 0 || n.pepperT > 0 ? 1.5 : 1) * G.diff.react;
      if (Math.abs(angDiff(n.angle, a)) < 0.5) n.reactTime *= 0.55; // already aiming that way (ambush)
      if (Math.random() < 0.5) say(n, pick(['Cops!', 'They\'re here!', 'Light \'em up!', 'Get out!']), 1.2);
      n.path = null;
    }
    n.react += dt;
    n.angle = turnToward(n.angle, a, (n.gasT > 0 ? 3 : 5.5) * dt);
    if (n.react >= n.reactTime && Math.abs(angDiff(n.angle, a)) < 0.25) npcFire(n);
    // reposition / flee
    n.combatT = (n.combatT || 0) + dt;
    if (n.hp < 50 && !n.fledOnce && Math.random() < P.flee * dt * 2) { n.fledOnce = true; startFlee(n); n.state = 'flee'; return; }
    if (n.path) followPath(n, 70, dt);
    else if (n.persona === 'aggressive' && Math.random() < dt * 0.25) {
      const sx = Math.cos(a + Math.PI / 2) * (Math.random() < 0.5 ? -1 : 1);
      const sy = Math.sin(a + Math.PI / 2);
      n.path = [{ x: n.x + sx * 40, y: n.y + sy * 40 }]; n.pathI = 0;
      if (G.level.circleSolid(n.path[0].x, n.path[0].y, 10)) n.path = null;
    }
    return;
  }
  if (n.state === 'flee') {
    if (followPath(n, 150, dt)) { n.state = 'hunt'; }
    if (n.moving) n.angle = turnToward(n.angle, n.moveAngle, 8 * dt);
    return;
  }
  const lk = n.lastKnown;
  if (lk && G.time - lk.t < 12) {
    if (n.state !== 'hunt') {
      n.state = 'hunt'; n.path = null;
      if (Math.random() < P.push) { n.path = G.level.findPath(n.x, n.y, lk.x, lk.y, 'npc'); n.pathI = 0; }
    }
    if (n.path) { if (followPath(n, 85, dt)) n.path = null; }
    n.angle = turnToward(n.angle, Math.atan2(lk.y - n.y, lk.x - n.x), 4 * dt);
    return;
  }
  const ap = n.alertPos;
  if (ap && G.time - ap.t < 25 && n.alarmed) {
    if (n.state !== 'alert') {
      n.state = 'alert'; n.path = null;
      const L = G.level;
      if (Math.random() < P.push * 0.6 && ap.kind !== 'alarm') { n.path = L.findPath(n.x, n.y, ap.x, ap.y, 'npc'); n.pathI = 0; n.investigating = true; }
      else {
        // move to an ambush spot: far corner of the current room facing the noise
        const room = L.roomAt(n.x, n.y);
        let best = null, bv = -1;
        for (let k = 0; k < 10; k++) {
          const p = L.randomTileInRoom(room, q => !L.circleSolid(q.x, q.y, 11)); if (!p) continue;
          const v = dist(p.x, p.y, ap.x, ap.y) - dist(p.x, p.y, n.x, n.y) * 0.3;
          if (v > bv) { bv = v; best = p; }
        }
        if (best && !L.isOutdoor(room)) { n.path = L.findPath(n.x, n.y, best.x, best.y, 'npc'); n.pathI = 0; }
      }
      if (Math.random() < 0.4) say(n, pick(['What was that?', 'Someone\'s here...', 'Get ready!', 'You hear that?']), 1.5);
    }
    if (n.path) {
      if (followPath(n, n.investigating ? 75 : 110, dt)) { n.path = null; n.investigating = false; }
      if (n.moving) n.angle = turnToward(n.angle, n.moveAngle, 6 * dt);
    } else n.angle = turnToward(n.angle, Math.atan2(ap.y - n.y, ap.x - n.x), 3 * dt);
    return;
  }
  n.state = 'idle';
  idleWander(n, dt);
}
function shieldBrain(n, dt) {
  const h = n.hostage;
  if (!h || !h.ok || h.state !== 'hostage') { n.state = 'combat'; return; }
  const tgt = n.target || (n.lastKnown && G.time - n.lastKnown.t < 15 ? n.lastKnown : null);
  if (tgt) n.angle = turnToward(n.angle, Math.atan2(tgt.y - n.y, tgt.x - n.x), 3.5 * dt);
  h.x = n.x + Math.cos(n.angle) * 15; h.y = n.y + Math.sin(n.angle) * 15; h.angle = n.angle;
  G.level.collide(h);
  if (dist(h.x, h.y, n.x, n.y) < 12) { n.x = h.x - Math.cos(n.angle) * 15; n.y = h.y - Math.sin(n.angle) * 15; G.level.collide(n); }
  if (n.target) {
    n.react = (n.react || 0) + dt;
    if (n.react > 0.9 && Math.abs(angDiff(n.angle, angleTo(n, n.target))) < 0.2 && Math.random() < dt * 2.5) npcFire(n);
  } else n.react = 0;
}
function npcFire(n) {
  const g = NPC_GUNS[n.weapon]; if (!g) return;
  if (n.fireCD > 0) return;
  if (n.ammo == null) n.ammo = g.mag;
  if (n.ammo <= 0) { n.ammo = g.mag; n.fireCD = g.reload; say(n, 'Reloading!', 1); return; }
  const P = PERSONA[n.persona] || PERSONA.normal;
  let spread = g.spread / P.acc * G.diff.spread;
  if (n.gasT > 0) spread *= 2.6; if (n.pepperT > 0) spread *= 2; if (n.hp < 60) spread *= 1.3;
  if (n.state === 'shield') spread *= 0.8;
  const pellets = g.pellets || 1;
  for (let i = 0; i < pellets; i++) fireShot(n, n.angle + (Math.random() - 0.5) * 2 * spread, { dmg: g.dmg, doorDmg: 6, range: 1100 });
  Sfx.shot(g.snd, n.x, n.y);
  G.particles.push({ x: n.x + Math.cos(n.angle) * 16, y: n.y + Math.sin(n.angle) * 16, vx: 0, vy: 0, life: 0.05, max: 0.05, color: '#ffd080', size: 9, glow: true });
  makeNoise(n.x, n.y, 1000, 'gunshot');
  n.firedT = G.time; n.ammo--;
  n.burst = (n.burst || 0) + 1;
  if (n.burst >= g.burst) { n.burst = 0; n.fireCD = g.rof + rand(0.3, 0.75) * G.diff.pause; } else n.fireCD = g.rof;
}

// =====================================================================
//  OFFICERS
// =====================================================================
function callout(o, text, voice = false) {
  if (o.calloutCD > 0 && !voice) return;
  o.calloutCD = 1.2;
  say(o, text, 1.8);
  radio(o, text);
  if (voice) Voice.say(text, { pitch: 0.9 + (o.id % 3) * 0.1, rate: 1.3, vol: 0.55 });
}
function officerThreatOf(n) {
  if (n.kind !== 'suspect' || !n.weapon || !n.ok || n.compliant || n.restrained) return false;
  if (n.state === 'combat' || n.state === 'shield' || n.state === 'hunt') return true;
  if (n.firedT && G.time - n.firedT < 4) return true;
  return n.warnedT && G.time - n.warnedT > 1.6;
}
function officerPerceive(o) {
  const L = G.level;
  let threat = null, td = 1e9, yellT = null, restrainT = null, rd = 1e9;
  for (const n of G.npcs) {
    if (!n.ok || n.restrained) continue;
    const d = dist(o.x, o.y, n.x, n.y); if (d > 650) continue;
    if (!L.los(o.x, o.y, n.x, n.y)) continue;
    n.seen = true;
    if (n.compliant) { if (d < 300 && !n.claim && n.state !== 'hostage' && d < rd) { rd = d; restrainT = n; } continue; }
    if (n.state === 'hostage') continue;
    if (officerThreatOf(n)) { const sc = d - (n.state === 'combat' ? 150 : 0); if (sc < td) { td = sc; threat = n; } }
    if (d < 500) yellT = n;
  }
  if (threat !== o.threat) {
    o.react = 0;
    o.reactTime = rand(0.22, 0.4) * (threat && Math.abs(angDiff(o.angle, angleTo(o, threat))) > 1.4 ? 1.8 : 1);
    if (threat && !o.threat && G.time - (G.contactT || -9) > 3.5) { G.contactT = G.time; callout(o, pick(['Contact!', 'Suspect!', 'Gun!', 'Armed suspect!'])); }
  }
  o.threat = threat; o.yellTarget = yellT; o.autoRestrain = restrainT;
}
function lineOfFireClear(o, t) {
  const dT = dist(o.x, o.y, t.x, t.y);
  for (const p of G.persons) {
    if (p === o || p === t || p.status !== 'ok') continue;
    if (dist(o.x, o.y, p.x, p.y) > dT) continue;
    if (pointSegDist(p.x, p.y, o.x, o.y, t.x, t.y) < p.r + 4) {
      if (p.kind === 'suspect' && officerThreatOf(p)) continue;
      return false;
    }
  }
  return true;
}
function officerFire(o, t) {
  const spread = 0.045 * (o.hurtT > 0 ? 1.5 : 1) * (o.gasT > 0 ? 2 : 1);
  fireShot(o, o.angle + (Math.random() - 0.5) * 2 * spread, WEAPONS.carbine);
  Sfx.shot('rifle', o.x, o.y);
  G.particles.push({ x: o.x + Math.cos(o.angle) * 17, y: o.y + Math.sin(o.angle) * 17, vx: 0, vy: 0, life: 0.05, max: 0.05, color: '#ffe0a0', size: 9, glow: true });
  makeNoise(o.x, o.y, 1000, 'gunshot');
  o.burst = (o.burst || 0) + 1;
  if (o.burst >= 3) { o.burst = 0; o.fireCD = rand(0.25, 0.4); } else o.fireCD = 0.1;
}
function updateOfficer(o, dt) {
  if (!o.ok) return;
  tickEffects(o, dt);
  o.calloutCD = Math.max(0, (o.calloutCD || 0) - dt);
  if (o.tasedT > 0) return;
  o.thinkT = (o.thinkT || 0) - dt;
  if (o.thinkT <= 0) { o.thinkT = 0.12; officerPerceive(o); }
  let engaging = false;
  const thr = o.threat;
  if (thr && thr.ok && officerThreatOf(thr) && o.stunT <= 0) {
    engaging = true;
    const a = angleTo(o, thr);
    o.angle = turnToward(o.angle, a, 7 * dt);
    if (o.flashT <= 0) {
      o.react += dt;
      if (o.react > o.reactTime && Math.abs(angDiff(o.angle, a)) < 0.12 && o.fireCD <= 0 && lineOfFireClear(o, thr)) officerFire(o, thr);
    }
  } else o.threat = null;
  if (o.yellTarget && o.yellCD <= 0 && o.stunT <= 0) {
    const yt = o.yellTarget;
    if (yt.ok && !yt.compliant && !yt.restrained) { yell(o); o.yellCD = rand(1.6, 2.5); }
  }
  if (o.stunT > 0) return;
  runOfficerOrder(o, dt, engaging);
}
function officerSpeed(o, d) { return (d > 220 ? 175 : d > 90 ? 140 : 105) * (o.gasT > 0 ? 0.8 : 1); }
function faceIdle(o, ang, dt) { if (!o.threat && ang != null) o.angle = turnToward(o.angle, ang, 4 * dt); }
function trailPoint(distAlong) {
  const tr = G.trail; let acc = 0, px = G.player.x, py = G.player.y;
  for (let i = 0; i < tr.length; i++) {
    const seg = dist(px, py, tr[i].x, tr[i].y);
    if (acc + seg >= distAlong) { const t = (distAlong - acc) / seg; return { x: px + (tr[i].x - px) * t, y: py + (tr[i].y - py) * t }; }
    acc += seg; px = tr[i].x; py = tr[i].y;
  }
  return { x: px, y: py };
}
function runOfficerOrder(o, dt, engaging) {
  const mul = engaging ? 0.45 : 1;
  if (o.task) { if (runTask(o, dt, engaging)) { if (o.task && o.task.target) o.task.target.claim = null; o.task = null; } return; }
  const ord = o.order;
  // automatic restraint of nearby compliant people when not busy
  if (!engaging && o.autoRestrain && ord.type !== 'entry' && !(o.autoRestrain.unreach > G.time) && !o.autoRestrain.claim && o.autoRestrain.compliant && !o.autoRestrain.restrained) {
    o.task = { type: 'restrain', target: o.autoRestrain, prog: 0 }; o.autoRestrain.claim = o; return;
  }
  switch (ord.type) {
    case 'follow': {
      const followers = G.officers.filter(f => f.ok && f.order.type === 'follow');
      const slot = followers.indexOf(o);
      const goal = trailPoint(44 + 34 * slot);
      const d = dist(o.x, o.y, goal.x, goal.y);
      if (d > 14) navigate(o, goal.x, goal.y, officerSpeed(o, d) * mul, dt, 'swat');
      else o.moving = false;
      if (o.moving) faceIdle(o, o.moveAngle, dt);
      else faceIdle(o, slot === followers.length - 1 && followers.length > 1 ? G.player.angle + Math.PI : G.player.angle + (slot % 2 ? 0.5 : -0.5), dt);
      break;
    }
    case 'move': {
      const d = dist(o.x, o.y, ord.x, ord.y);
      if (o.navFail >= 3) { o.navFail = 0; callout(o, 'Can\'t get there.'); o.order = { type: 'hold', x: o.x, y: o.y, angle: o.angle }; break; }
      if (navigate(o, ord.x, ord.y, officerSpeed(o, d) * mul, dt, 'swat')) o.order = { type: 'hold', x: ord.x, y: ord.y, angle: ord.angle != null ? ord.angle : o.angle };
      else if (o.moving) faceIdle(o, o.moveAngle, dt);
      break;
    }
    case 'hold': {
      if (dist(o.x, o.y, ord.x, ord.y) > 20) navigate(o, ord.x, ord.y, 110 * mul, dt, 'swat'); else o.moving = false;
      faceIdle(o, o.moving ? o.moveAngle : ord.angle + Math.sin(G.time * 0.6 + o.id) * 0.35, dt);
      break;
    }
    case 'cover': {
      if (dist(o.x, o.y, ord.x, ord.y) > 20) navigate(o, ord.x, ord.y, 110 * mul, dt, 'swat'); else o.moving = false;
      faceIdle(o, Math.atan2(ord.ay - o.y, ord.ax - o.x), dt);
      break;
    }
    case 'entry': {
      const e = ord.e;
      const goal = e.goal(o, ord.slot);
      if (goal) {
        const d = dist(o.x, o.y, goal.x, goal.y);
        if (d > 6) navigate(o, goal.x, goal.y, (e.phase === 'enter' ? 150 : officerSpeed(o, d)) * mul, dt, 'swat'); else o.moving = false;
        faceIdle(o, o.moving && d > 30 ? o.moveAngle : goal.face, dt);
      }
      break;
    }
    case 'secure': {
      const t = findSecureTask(o);
      if (t) { o.task = t; if (t.target) t.target.claim = o; }
      else {
        if (!ord.done) { ord.done = true; callout(o, 'Nothing left to secure here.'); }
        o.order = { type: 'hold', x: o.x, y: o.y, angle: o.angle };
      }
      break;
    }
  }
}
function findSecureTask(o) {
  let best = null, bd = 1400;
  const skip = q => (q.claim && q.claim !== o) || q.unreach > G.time;
  for (const n of G.npcs) {
    if (skip(n)) continue;
    if (n.ok && n.compliant && !n.restrained && n.seen && n.state !== 'hostage') { const d = dist(o.x, o.y, n.x, n.y); if (d < bd) { bd = d; best = { type: 'restrain', target: n, prog: 0 }; } }
  }
  for (const p of G.persons) {
    if (skip(p)) continue;
    if (p.status !== 'ok' && !p.reported && (p.seen || p.swat) && p !== G.player) { const d = dist(o.x, o.y, p.x, p.y); if (d < bd) { bd = d; best = { type: 'report', target: p, prog: 0 }; } }
  }
  for (const it of G.items) {
    if (skip(it)) continue;
    if (!it.collected && it.seen) { const d = dist(o.x, o.y, it.x, it.y); if (d < bd) { bd = d; best = { type: 'collect', target: it, prog: 0 }; } }
  }
  return best;
}
const TASK_DUR = { restrain: 1.6, collect: 0.9, report: 0.4 };
function runTask(o, dt, engaging) {
  const t = o.task, p = t.target;
  if (t.type === 'restrain' && (!p.ok || !p.compliant || p.restrained || p.state === 'hostage')) return true;
  if (t.type === 'collect' && p.collected) return true;
  if (t.type === 'report' && p.reported) return true;
  const d = dist(o.x, o.y, p.x, p.y);
  if (o.navFail >= 2) { o.navFail = 0; p.unreach = G.time + 20; callout(o, 'Can\'t get to that.'); return true; }
  if (d > 26) { t.prog = 0; navigate(o, p.x, p.y, officerSpeed(o, d) * (engaging ? 0.45 : 1), dt, 'swat'); if (o.moving && !engaging) faceIdle(o, o.moveAngle, dt); return false; }
  o.moving = false;
  faceIdle(o, angleTo(o, p), dt);
  if (engaging) return false;
  t.prog += dt;
  o.actProg = t.prog / TASK_DUR[t.type];
  if (t.prog >= TASK_DUR[t.type]) {
    o.actProg = 0;
    if (t.type === 'restrain') restrainPerson(p, o);
    else if (t.type === 'collect') collectItem(p, o);
    else reportPerson(p, o);
    return true;
  }
  return false;
}

// =====================================================================
//  ENTRY ORDERS (stack / breach / clear and door utilities)
// =====================================================================
const BREACH_METHODS = ['open', 'kick', 'ram', 'c2', 'move'];
class Entry {
  constructor(members, door, method, grenade, wait) {
    const L = G.level;
    this.door = door; this.method = method; this.grenade = grenade; this.wait = wait;
    this.s = L.sideOf(door, G.player.x, G.player.y);
    this.members = members; this.phase = 'stack'; this.t = 0; this.actT = 0; this.tries = 0; this.done = false;
    this.created = G.time;
    this.stackPts = this.computeStack(members.length);
    this.farRoom = L.roomOnSide(door, -this.s);
    this.clearPts = null;
    for (const e of G.entries) e.members = e.members.filter(m => !members.includes(m));
    members.forEach((o, i) => { if (o.task && o.task.target) o.task.target.claim = null; o.task = null; o.order = { type: 'entry', e: this, slot: i }; o.path = null; });
  }
  computeStack(n) {
    const L = G.level, d = this.door, [nx, ny] = L.doorNormal(d), [tx, ty] = L.doorTangent(d), s = this.s;
    const pts = []; const used = [];
    const ok = (x, y) => !L.circleSolid(x, y, 10.5) && L.walkableTile(Math.floor(x / TS), Math.floor(y / TS)) && !used.some(u => dist(u.x, u.y, x, y) < 22);
    const facing = Math.atan2(-ny * s, -nx * s);
    const cands = [];
    const span = d.partner ? 1.5 : 1;
    for (const k of [1, 2, 3]) for (const side of [-1, 1]) {
      let off = side * (span + (k - 1)) * TS;
      if (d.partner) { const pc = (d.partner.tx - d.tx) * tx + (d.partner.ty - d.ty) * ty; off += pc * TS * 0.5; }
      cands.push({ x: d.x + nx * s * TS * 0.92 + tx * off, y: d.y + ny * s * TS * 0.92 + ty * off });
    }
    for (let k = 0; k < 4; k++) cands.push({ x: d.x + nx * s * TS * (1.8 + k * 0.8), y: d.y + ny * s * TS * (1.8 + k * 0.8) });
    for (const c of cands) { if (pts.length >= n) break; if (ok(c.x, c.y)) { pts.push({ x: c.x, y: c.y, face: facing }); used.push(c); } }
    while (pts.length < n) pts.push({ x: d.x + nx * s * TS * 2, y: d.y + ny * s * TS * 2, face: facing });
    return pts;
  }
  goal(o, slot) {
    if (this.phase === 'enter' || this.phase === 'clear') {
      const p = this.clearPts && this.clearPts[slot];
      if (!p) return this.stackPts[slot];
      if (this.enterT < slot * 0.45) return this.stackPts[slot];
      return p;
    }
    return this.stackPts[slot];
  }
  get lead() { return this.members[0]; }
  update(dt) {
    const L = G.level, d = this.door;
    this.members = this.members.filter(o => o.ok && o.order.type === 'entry' && o.order.e === this);
    if (!this.members.length) { this.done = true; return; }
    this.t += dt;
    const arrived = () => this.members.every((o, i) => dist(o.x, o.y, this.stackPts[i].x, this.stackPts[i].y) < 16);
    switch (this.phase) {
      case 'stack':
        if (this.members.some(o => o.navFail >= 3)) {
          callout(this.lead, 'Can\'t reach that door from here.');
          this.members.forEach(m => { m.navFail = 0; m.order = { type: 'hold', x: m.x, y: m.y, angle: m.angle }; });
          this.done = true; break;
        }
        if (arrived() || this.t > 14) {
          if (this.method === 'stack') { this.phase = 'held'; callout(this.lead, pick(['Stacked up.', 'In position.', 'On the door.'])); break; }
          if (BREACH_METHODS.includes(this.method) && d.state === 'closed' && L.doorGroup(d).some(dd => dd.trap && dd.trapKnown)) {
            callout(this.lead, 'Door\'s trapped — disarming first.'); this.afterDisarm = this.method; this.method = 'disarm';
          }
          if (this.wait) { this.phase = 'waiting'; callout(this.lead, pick(['Ready on your command.', 'Standing by.', 'Waiting on your go.'])); }
          else { this.phase = 'breach'; this.actT = 0; }
        }
        break;
      case 'waiting':
        if (G.goTime > this.created) { this.phase = 'breach'; this.actT = 0; }
        break;
      case 'breach': this.doBreach(dt); break;
      case 'grenade': {
        const gr = this.members[1] || this.members[0];
        this.actT += dt;
        if (!this.thrown && this.actT > 0.4) {
          this.thrown = true;
          const [nx, ny] = L.doorNormal(d), [tx, ty] = L.doorTangent(d);
          const fx = d.x - nx * this.s * TS * 3.4 + tx * rand(-20, 20), fy = d.y - ny * this.s * TS * 3.4 + ty * rand(-20, 20);
          throwGrenade(gr, this.grenade, fx, fy, d.x + nx * this.s * 8, d.y + ny * this.s * 8);
          G.teamGear[this.grenade]--;
          callout(gr, { flash: 'Flashbang out!', stinger: 'Stinger out!', cs: 'Gas out!' }[this.grenade], true);
        }
        if (this.thrown && this.actT > (this.grenade === 'cs' ? 1.2 : 1.85)) { this.phase = 'enter'; this.enterT = 0; }
        break;
      }
      case 'enter': {
        if (!this.clearPts) {
          const [nx, ny] = L.doorNormal(d);
          const sx = d.x - nx * this.s * TS, sy = d.y - ny * this.s * TS;
          const outdoor = L.isOutdoor(this.farRoom);
          this.clearPts = this.farRoom >= 0 ? L.clearPoints(this.farRoom, sx, sy, this.members.length, outdoor ? 5 * TS : 9 * TS) : [];
          const face = Math.atan2(-ny * this.s, -nx * this.s);
          this.clearPts = this.clearPts.map(p => ({ x: p.x, y: p.y, face: Math.atan2(p.y - sy, p.x - sx) || face }));
          while (this.clearPts.length < this.members.length) this.clearPts.push({ x: sx - nx * this.s * TS * this.clearPts.length, y: sy - ny * this.s * TS * this.clearPts.length, face });
          if (Math.random() < 0.7) callout(this.lead, pick(['Go go go!', 'Moving in!', 'Entering!']), true);
        }
        this.enterT += dt;
        const done = this.members.every((o, i) => dist(o.x, o.y, this.clearPts[i].x, this.clearPts[i].y) < 18);
        if (done || this.enterT > 16) this.phase = 'clear';
        break;
      }
      case 'clear': {
        const hostiles = G.npcs.filter(n => n.ok && !n.restrained && !n.compliant && L.roomAt(n.x, n.y) === this.farRoom && this.members.some(o => L.los(o.x, o.y, n.x, n.y)));
        const o = pick(this.members);
        if (!hostiles.length) callout(o, pick(['Room clear!', 'Clear!', 'Clear, clear!']), true);
        else callout(o, hostiles.some(n => n.weapon) ? 'Armed suspect in the room!' : 'Room has non-compliant people!');
        this.members.forEach((m, i) => { m.order = { type: 'hold', x: this.clearPts[i].x, y: this.clearPts[i].y, angle: this.clearPts[i].face }; });
        this.done = true;
        break;
      }
      case 'held': break;
    }
  }
  doBreach(dt) {
    const L = G.level, d = this.door, lead = this.lead;
    if (dist(lead.x, lead.y, this.stackPts[0].x, this.stackPts[0].y) > 22) return;
    this.actT += dt;
    lead.actProg = 0;
    const m = this.method;
    const opened = () => {
      if (this.grenade && G.teamGear[this.grenade] > 0) { this.phase = 'grenade'; this.actT = 0; this.thrown = false; }
      else { if (this.grenade) callout(lead, 'We\'re out of those!'); this.phase = 'enter'; this.enterT = 0; }
    };
    if (BREACH_METHODS.includes(m) && d.state !== 'closed') { opened(); return; }
    const dur = { open: 0.45, kick: 0.7, ram: 1.0, c2: 1.6, mirror: 1.8, pick: 4.5, wedge: 1.2, disarm: 3.0, close: 0.3 }[m] || 0.5;
    lead.actProg = Math.min(1, this.actT / dur);
    if (this.actT < dur) return;
    this.actT = 0; lead.actProg = 0;
    switch (m) {
      case 'open':
        if (d.wedged) { callout(lead, 'Door\'s wedged — we need to breach.'); this.phase = 'held'; return; }
        if (d.locked) { for (const dd of L.doorGroup(d)) dd.lockKnown = true; callout(lead, pick(['It\'s locked.', 'Door\'s locked, boss.']), true); Sfx.rattle(d.x, d.y); this.phase = 'held'; return; }
        openDoor(d, lead); opened(); return;
      case 'kick': {
        const r = kickDoor(d, lead);
        if (r === 'ok' || r === 'open') { opened(); return; }
        if (r === 'wedged') { callout(lead, 'It\'s wedged — need the ram or C2.'); this.phase = 'held'; return; }
        if (++this.tries >= 6) { callout(lead, 'It won\'t budge.'); this.phase = 'held'; return; }
        callout(lead, pick(['Again!', 'Hold on!', 'Come on...']));
        return;
      }
      case 'ram': ramDoor(d, lead); callout(lead, 'Breaching!', true); opened(); return;
      case 'c2':
        if (!this.c2Placed) {
          if (G.teamGear.c2 <= 0) { callout(lead, 'We\'re out of C2.'); this.phase = 'held'; return; }
          G.teamGear.c2--; this.c2Placed = true; d.c2 = { side: this.s, by: lead };
          callout(lead, 'Charge set. Breaching!', true); this.actT = 0.8; return;
        }
        detonateC2(d, lead); opened(); return;
      case 'mirror': {
        const r = mirrorDoor(d, lead);
        const parts = [];
        if (r.sus) parts.push(`${r.sus} suspect${r.sus > 1 ? 's' : ''}`);
        if (r.civ) parts.push(`${r.civ} civilian${r.civ > 1 ? 's' : ''}`);
        callout(lead, (parts.length ? 'I see ' + parts.join(', ') + '.' : 'Looks clear.') + (r.trap ? ' Door is TRAPPED!' : ''), true);
        G.mirrorView = { x: r.vx, y: r.vy, t: 2.5 };
        this.phase = 'held'; return;
      }
      case 'pick': for (const dd of L.doorGroup(d)) { dd.locked = false; dd.lockKnown = true; } callout(lead, 'Lock\'s picked.'); Sfx.click(d.x, d.y); this.phase = 'held'; return;
      case 'wedge':
        if (G.teamGear.wedge <= 0) { callout(lead, 'No wedges left.'); this.phase = 'held'; return; }
        if (d.state !== 'closed') closeDoor(d);
        if (d.state !== 'closed') { callout(lead, 'Can\'t close it.'); this.phase = 'held'; return; }
        G.teamGear.wedge--; for (const dd of L.doorGroup(d)) dd.wedged = true; callout(lead, 'Door wedged.'); this.phase = 'held'; return;
      case 'disarm':
        for (const dd of L.doorGroup(d)) { dd.trap = null; dd.trapKnown = false; }
        callout(lead, 'Trap disarmed.'); Sfx.click(d.x, d.y);
        if (this.afterDisarm) { this.method = this.afterDisarm; this.afterDisarm = null; this.actT = 0; return; }
        this.phase = 'held'; return;
      case 'close': closeDoor(d); this.phase = 'held'; return;
    }
  }
}
function updateEntries(dt) {
  for (const e of G.entries) e.update(dt);
  G.entries = G.entries.filter(e => !e.done);
}
