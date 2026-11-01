"use strict";
// =====================================================================
//  HARD ENTRY — player controller, interactions, squad command menu
// =====================================================================
function makeGun(key) {
  const def = WEAPONS[key];
  return { key, def, cur: def.mag, mags: new Array(def.mags - 1).fill(def.mag) };
}
function currentGun(p) { return p.equip === 'primary' ? p.guns.primary : p.equip === 'secondary' ? p.guns.secondary : null; }
function grenadeTypes() { return ['flash', 'stinger', 'cs'].filter(k => G.inv[k] > 0); }
function tacTypes() {
  const t = [];
  if (G.inv.c2 > 0 || G.playerC2) t.push('c2');
  if (G.inv.wedge > 0) t.push('wedge');
  t.push(G.loadout.long);
  return t;
}
function equip(p, slot) {
  if (slot === 'grenade' && !grenadeTypes().length) { G.flashMsg('No grenades left', '#ccc'); return; }
  if (p.equip === slot) {
    if (slot === 'grenade') { const g = grenadeTypes(); p.grenadeSel = g[(g.indexOf(p.grenadeSel) + 1) % g.length]; }
    if (slot === 'tactical') { const t = tacTypes(); p.tacSel = t[(t.indexOf(p.tacSel) + 1) % t.length]; }
  } else {
    p.equip = slot; p.reloadT = 0; p.switchT = 0.3;
    if (slot === 'grenade' && !grenadeTypes().includes(p.grenadeSel)) p.grenadeSel = grenadeTypes()[0];
    if (slot === 'tactical' && !tacTypes().includes(p.tacSel)) p.tacSel = tacTypes()[0];
  }
  Sfx.click(p.x, p.y);
}
function startAction(p, type, dur, target, hold, label) { p.action = { type, dur, t: 0, target, hold, label }; }
function playerReachDoor(p, reach = 54) {
  let best = null, bs = 1e9;
  for (const d of G.level.doors) {
    const dd = dist(p.x, p.y, d.x, d.y); if (dd > reach) continue;
    const ad = Math.abs(angDiff(p.angle, Math.atan2(d.y - p.y, d.x - p.x)));
    if (dd > 24 && ad > 1.25) continue;
    const s = dd + ad * 20; if (s < bs) { bs = s; best = d; }
  }
  return best;
}
function findInteract(p) {
  let best = null, bs = 1e9;
  const consider = (obj, x, y, reach, kind, bias = 0) => {
    const d = dist(p.x, p.y, x, y); if (d > reach) return;
    const ad = Math.abs(angDiff(p.angle, Math.atan2(y - p.y, x - p.x)));
    if (d > 20 && ad > 1.3) return;
    const s = d + ad * 25 + bias; if (s < bs) { bs = s; best = { obj, kind }; }
  };
  for (const n of G.persons) {
    if (n === p) continue;
    if (n.ok && n.compliant && !n.restrained && n.state !== 'hostage' && !n.swat) consider(n, n.x, n.y, 46, 'restrain', -10);
    if (!n.ok && !n.reported) consider(n, n.x, n.y, 50, 'report');
  }
  for (const it of G.items) if (!it.collected) consider(it, it.x, it.y, 42, 'collect', -5);
  if (G.bomb && !G.bomb.defused) consider(G.bomb, G.bomb.x, G.bomb.y, 46, 'defuse', -20);
  const d = playerReachDoor(p, 52);
  if (d) consider(d, d.x, d.y, 52, 'door', 12);
  return best;
}
function interactPrompt(it) {
  if (!it) return null;
  const o = it.obj;
  switch (it.kind) {
    case 'restrain': return '[Hold SPACE] Restrain' + (o.kind === 'civ' ? ' civilian' : ' suspect');
    case 'report': return '[SPACE] Report ' + (o.kind === 'officer' ? 'downed officer' : o.kind === 'civ' ? 'civilian' : 'suspect') + ' to TOC';
    case 'collect': return '[Hold SPACE] Collect evidence: ' + o.name;
    case 'defuse': return '[Hold SPACE] Defuse explosive device';
    case 'door': {
      if (o.wedged) return '[Hold SPACE] Remove wedge';
      if (o.trap && o.trapKnown) return '[Hold SPACE] Disarm trap   ·   [V] Kick (sets it off!)';
      if (o.state === 'closed' && o.locked && o.lockKnown) return '[Hold SPACE] Pick lock   ·   [V] Kick';
      if (o.state === 'closed') return '[SPACE] Open door   ·   [V] Kick';
      if (o.state === 'open') return '[SPACE] Close door';
      return null;
    }
  }
  return null;
}
function doInteract(p, it) {
  const o = it.obj;
  switch (it.kind) {
    case 'restrain': startAction(p, 'restrain', 1.3, o, 'space', 'Restraining'); o.claim = p; break;
    case 'report': reportPerson(o, p); break;
    case 'collect': startAction(p, 'collect', 0.7, o, 'space', 'Collecting'); break;
    case 'defuse': startAction(p, 'defuse', 6, o, 'space', 'Defusing'); break;
    case 'door': {
      const d = o;
      if (d.wedged) { startAction(p, 'unwedge', 1.0, d, 'space', 'Removing wedge'); break; }
      if (d.trap && d.trapKnown) { startAction(p, 'disarm', 3.0, d, 'space', 'Disarming trap'); break; }
      if (d.state === 'closed') {
        if (d.locked) {
          if (!d.lockKnown) { for (const dd of G.level.doorGroup(d)) dd.lockKnown = true; Sfx.rattle(d.x, d.y); say(p, 'Locked.', 1.2); }
          else startAction(p, 'pick', 4.0, d, 'space', 'Picking lock');
        } else openDoor(d, p);
      } else if (d.state === 'open') { if (!closeDoor(d)) say(p, 'Something\'s in the way.', 1.2); }
      break;
    }
  }
}
function finishAction(p, a) {
  const o = a.target;
  switch (a.type) {
    case 'restrain': if (o.ok && o.compliant && !o.restrained) restrainPerson(o, p); break;
    case 'collect': if (!o.collected) collectItem(o, p); break;
    case 'defuse': G.bomb.defused = true; radio(p, 'Device defused!'); toc('Outstanding. Device is safe.'); Sfx.beep(o.x, o.y); break;
    case 'unwedge': for (const dd of G.level.doorGroup(o)) dd.wedged = false; G.inv.wedge++; break;
    case 'disarm': for (const dd of G.level.doorGroup(o)) { dd.trap = null; dd.trapKnown = false; } radio(p, 'Trap disarmed.'); Sfx.click(o.x, o.y); break;
    case 'pick': for (const dd of G.level.doorGroup(o)) { dd.locked = false; dd.lockKnown = true; } say(p, 'Unlocked.', 1); Sfx.click(o.x, o.y); break;
    case 'kick': {
      const r = kickDoor(o, p);
      if (r === 'fail') say(p, 'Kick failed!', 1); else if (r === 'wedged') say(p, 'It\'s wedged.', 1.2);
      break;
    }
    case 'ram': ramDoor(o, p); break;
    case 'c2': {
      if (o.state !== 'closed') break;
      G.inv.c2--; o.c2 = { side: G.level.sideOf(o, p.x, p.y), by: p }; G.playerC2 = o;
      G.flashMsg('C2 placed — move clear and press FIRE to detonate', '#e6c35c'); Sfx.beep(o.x, o.y); break;
    }
    case 'wedge': if (o.state === 'closed') { for (const dd of G.level.doorGroup(o)) dd.wedged = true; G.inv.wedge--; Sfx.click(o.x, o.y); } break;
    case 'reload': break;
  }
}
function playerReload(p) {
  const g = currentGun(p); if (!g || p.reloadT > 0) return;
  if (!g.mags.length || g.cur >= g.def.mag && g.mags.every(m => m <= g.cur)) { G.flashMsg(g.mags.length ? 'Magazine full' : 'No spare magazines', '#ccc'); return; }
  p.reloadT = g.def.reload; p.reloadGun = g; Sfx.reload(p.x, p.y);
}
function finishReload(p) {
  const g = p.reloadGun; if (!g) return;
  let bi = 0; for (let i = 1; i < g.mags.length; i++) if (g.mags[i] > g.mags[bi]) bi = i;
  const next = g.mags[bi];
  g.mags.splice(bi, 1);
  if (g.cur > 0) g.mags.push(g.cur);
  g.cur = next; p.reloadGun = null;
}
function updatePlayer(p, dt) {
  if (!p.ok) return;
  tickEffects(p, dt);
  const L = G.level, mw = G.mouseWorld;
  p.switchT = Math.max(0, (p.switchT || 0) - dt);
  p.recoil = Math.max(0, p.recoil - dt * 0.18);
  // aim
  p.angle = Math.atan2(mw.y - p.y, mw.x - p.x);
  p.ads = Input.mouse.r && !Cmd.open;
  // lean
  const leanTarget = (Input.down('KeyE') ? 1 : 0) - (Input.down('KeyQ') ? 1 : 0);
  p.lean = lerp(p.lean || 0, leanTarget, 1 - Math.exp(-12 * dt));
  let lx = -Math.sin(p.angle) * p.lean * 15, ly = Math.cos(p.angle) * p.lean * 15;
  for (let k = 0; k < 4 && L.circleSolid(p.x + lx, p.y + ly, 4); k++) { lx *= 0.6; ly *= 0.6; }
  p.eyeX = p.x + lx; p.eyeY = p.y + ly;
  // movement
  let mx = (Input.down('KeyD') ? 1 : 0) - (Input.down('KeyA') ? 1 : 0);
  let my = (Input.down('KeyS') ? 1 : 0) - (Input.down('KeyW') ? 1 : 0);
  const ml = Math.hypot(mx, my); if (ml) { mx /= ml; my /= ml; }
  const g = currentGun(p);
  const sprint = (Input.down('ShiftLeft') || Input.down('ShiftRight')) && !p.ads && !Cmd.open;
  let speed = 128 * ARMORS[G.loadout.armor].speed * (g ? g.def.moveMul : 1);
  if (sprint) speed *= 1.5; if (p.ads) speed *= 0.6; if (Math.abs(p.lean) > 0.3) speed *= 0.6;
  if (p.gasT > 0) speed *= 0.75; if (p.stunT > 0 || p.tasedT > 0) speed *= 0.3;
  if (p.action && ml) { if (p.action.hold) p.action = null; }
  if (p.action) speed = 0;
  const bx = p.x, by = p.y;
  if (ml) L.move(p, mx * speed * dt, my * speed * dt);
  const moved = dist(bx, by, p.x, p.y);
  p.speedFrac = clamp(moved / dt / 190, 0, 1);
  p.stepT = (p.stepT || 0) - moved;
  if (p.stepT <= 0) { p.stepT = 46; makeNoise(p.x, p.y, sprint ? 300 : 70, 'step'); }
  // follow trail
  if (!G.trail.length || dist(G.trail[0].x, G.trail[0].y, p.x, p.y) > 16) { G.trail.unshift({ x: p.x, y: p.y }); if (G.trail.length > 80) G.trail.pop(); }
  // timed actions
  if (p.action) {
    const a = p.action;
    if ((a.hold === 'space' && !Input.down('Space')) || (a.hold === 'lmb' && !Input.mouse.l)) { if (a.target && a.target.claim === p) a.target.claim = null; p.action = null; }
    else { a.t += dt; if (a.t >= a.dur) { p.action = null; finishAction(p, a); } }
  }
  // reload
  if (p.reloadT > 0) { p.reloadT -= dt; if (p.reloadT <= 0) { p.reloadT = 0; finishReload(p); } }
  if (Cmd.open) return;
  // keys
  if (Input.hit('Digit1')) equip(p, 'primary');
  if (Input.hit('Digit2')) equip(p, 'secondary');
  if (Input.hit('Digit3')) equip(p, 'grenade');
  if (Input.hit('Digit4')) equip(p, 'tactical');
  if (Input.wheel) {
    const slots = ['primary', 'secondary', 'grenade', 'tactical'].filter(s => s !== 'grenade' || grenadeTypes().length);
    const i = slots.indexOf(p.equip); equip(p, slots[(i + Input.wheel + slots.length) % slots.length]);
  }
  if (Input.hit('KeyR')) playerReload(p);
  if (Input.hit('KeyF') && (p.yellCD || 0) <= 0) { yell(p); p.yellCD = 0.55; }
  if (Input.hit('Space') && !p.action) { const it = findInteract(p); if (it) doInteract(p, it); }
  if (Input.hit('KeyV') && !p.action) {
    const d = playerReachDoor(p, 50);
    if (d && d.state === 'closed') startAction(p, 'kick', 0.45, d, null, 'Kicking');
  }
  if (Input.hit('KeyG') && !p.action && p.fireCD <= 0) {
    const gt = grenadeTypes().includes(p.grenadeSel) ? p.grenadeSel : grenadeTypes()[0];
    if (gt) { throwGrenade(p, gt, mw.x, mw.y); G.inv[gt]--; p.fireCD = 0.7; }
    else G.flashMsg('No grenades left', '#ccc');
  }
  // fire / use
  G.mirrorActive = false;
  if (p.switchT > 0 || p.action || p.tasedT > 0) return;
  if (g) {
    if (p.reloadT > 0) return;
    const want = g.def.auto ? Input.mouse.l : Input.mouse.lp;
    if (want && p.fireCD <= 0) {
      if (g.cur <= 0) { Sfx.shot('empty', p.x, p.y); p.fireCD = 0.3; return; }
      g.cur--; G.stats.shots++;
      const def = g.def;
      const spread = def.spread * (p.ads ? 0.5 : 1) + def.moveSpread * p.speedFrac + p.recoil + (p.gasT > 0 ? 0.04 : 0) + (p.flashT > 0 ? 0.06 : 0);
      const ox = p.x, oy = p.y; p.x = p.eyeX; p.y = p.eyeY;
      for (let i = 0; i < (def.pellets || 1); i++) fireShot(p, p.angle + (Math.random() - 0.5) * 2 * spread, def);
      p.x = ox; p.y = oy;
      p.recoil = Math.min(0.12, p.recoil + def.recoil);
      p.fireCD = def.rof;
      Sfx.shot(def.snd, p.x, p.y);
      if (!def.ll || def.ll === 'beanbag') G.particles.push({ x: p.eyeX + Math.cos(p.angle) * 17, y: p.eyeY + Math.sin(p.angle) * 17, vx: 0, vy: 0, life: 0.05, max: 0.05, color: '#ffe0a0', size: 10, glow: true });
      G.shake = Math.max(G.shake, def.pellets ? 3 : def.lethal ? 1.2 : 0.5);
      makeNoise(p.x, p.y, def.ll === 'taser' ? 160 : def.ll === 'pepper' ? 280 : 1100, def.lethal ? 'gunshot' : 'pop');
    }
    return;
  }
  if (p.equip === 'grenade') {
    if (Input.mouse.lp && p.fireCD <= 0) {
      const gt = p.grenadeSel;
      if (gt && G.inv[gt] > 0) { throwGrenade(p, gt, mw.x, mw.y); G.inv[gt]--; p.fireCD = 0.7; if (!G.inv[gt]) { const n = grenadeTypes(); if (n.length) p.grenadeSel = n[0]; else equip(p, 'primary'); } }
    }
    return;
  }
  if (p.equip === 'tactical') {
    const t = p.tacSel;
    if (t === 'c2' && G.playerC2) {
      if (Input.mouse.lp) {
        const d = G.playerC2; G.playerC2 = null;
        if (d.c2) detonateC2(d, p);
        if (!G.inv.c2) { p.tacSel = tacTypes()[0]; }
      }
      return;
    }
    if (t === 'mirror') {
      if (Input.mouse.l) {
        const d = playerReachDoor(p, 56);
        if (d) {
          G.mirrorActive = true;
          p.mirrorT = (p.mirrorT || 0) + dt;
          if (p.mirrorT > 0.35) {
            const r = mirrorDoor(d, p);
            G.mirrorView = { x: r.vx, y: r.vy, t: 0.15 };
            if (r.trap && !p.mirrorTrapMsg) { p.mirrorTrapMsg = true; G.flashMsg('Door is TRAPPED', '#ff9a5a'); }
          }
        } else if (Input.mouse.lp) G.flashMsg('Aim at a nearby door to use the mirror', '#ccc');
      } else { p.mirrorT = 0; p.mirrorTrapMsg = false; }
      return;
    }
    if (Input.mouse.lp) {
      const d = playerReachDoor(p, 52);
      if (!d) { G.flashMsg('Aim at a nearby door', '#ccc'); return; }
      if (t === 'ram') { if (d.state === 'closed') startAction(p, 'ram', 0.6, d, null, 'Ramming'); return; }
      if (t === 'c2') { if (d.state === 'closed' && G.inv.c2 > 0) startAction(p, 'c2', 1.5, d, 'lmb', 'Placing C2'); return; }
      if (t === 'wedge') { if (d.state === 'closed' && G.inv.wedge > 0) startAction(p, 'wedge', 1.0, d, 'lmb', 'Placing wedge'); else if (d.state !== 'closed') G.flashMsg('Close the door first', '#ccc'); return; }
    }
  }
}

// =====================================================================
//  SQUAD COMMAND MENU
// =====================================================================
const Cmd = { open: false, sx: 0, sy: 0, target: null, items: [], title: '', rects: [], hover: -1 };
function selectedOfficers() { return G.officers.filter(o => o.ok && (G.teamSel === 'gold' || o.team === G.teamSel)); }
function cmdTargetAt(wx, wy) {
  let best = null, bd = 24;
  for (const p of G.persons) {
    if (p === G.player || p.swat) continue;
    if (!(p.visible || p.spottedT > 0 || (!p.ok && p.seen))) continue;
    const d = dist(p.x, p.y, wx, wy); if (d < bd) { bd = d; best = { kind: 'person', obj: p }; }
  }
  for (const o of G.officers) if (!o.ok && !o.reported) { const d = dist(o.x, o.y, wx, wy); if (d < bd) { bd = d; best = { kind: 'person', obj: o }; } }
  if (best) return best;
  for (const it of G.items) if (!it.collected && it.seen && dist(it.x, it.y, wx, wy) < 18) return { kind: 'item', obj: it };
  const d = G.level.doorNear(wx, wy, 38);
  if (d && G.level.explored[G.level.idx(d.tx, d.ty)]) return { kind: 'door', obj: d };
  return { kind: 'ground', x: wx, y: wy };
}
function openCmd() {
  Cmd.open = true; Cmd.sx = Input.mouse.x; Cmd.sy = Input.mouse.y;
  Cmd.target = cmdTargetAt(G.mouseWorld.x, G.mouseWorld.y);
  buildCmd(Cmd.target);
  Sfx.ui();
}
function closeCmd() { Cmd.open = false; }
function grenadeSub(method, label) {
  return () => {
    Cmd.title = label + ' — grenade?';
    const tg = G.teamGear;
    Cmd.items = [
      { label: 'No grenade', fn: w => issueEntry(method, null, w) },
      { label: `Flashbang (${tg.flash})`, fn: w => issueEntry(method, 'flash', w), disabled: tg.flash <= 0 },
      { label: `Stinger (${tg.stinger})`, fn: w => issueEntry(method, 'stinger', w), disabled: tg.stinger <= 0 },
      { label: `CS Gas (${tg.cs})`, fn: w => issueEntry(method, 'cs', w), disabled: tg.cs <= 0 },
      { label: '‹ Back', fn: () => { buildCmd(Cmd.target); return 'keep'; } },
    ];
    return 'keep';
  };
}
function buildCmd(t) {
  const team = G.teamSel.toUpperCase();
  const items = [];
  if (t.kind === 'door') {
    const d = t.obj;
    Cmd.title = `${team} TEAM ▸ DOOR`;
    if (d.state === 'closed') {
      items.push({ label: 'Stack Up', fn: w => issueEntry('stack', null, w) });
      items.push({ label: 'Open & Clear ›', fn: grenadeSub('open', 'Open & Clear') });
      items.push({ label: 'Kick & Clear ›', fn: grenadeSub('kick', 'Kick & Clear') });
      items.push({ label: 'Ram & Clear ›', fn: grenadeSub('ram', 'Ram & Clear') });
      items.push({ label: `C2 & Clear (${G.teamGear.c2}) ›`, fn: grenadeSub('c2', 'C2 & Clear'), disabled: G.teamGear.c2 <= 0 });
      items.push({ label: 'Mirror Under Door', fn: w => issueEntry('mirror', null, w) });
      if (d.locked && d.lockKnown) items.push({ label: 'Pick Lock', fn: w => issueEntry('pick', null, w) });
      items.push({ label: `Wedge Door (${G.teamGear.wedge})`, fn: w => issueEntry('wedge', null, w), disabled: G.teamGear.wedge <= 0 });
      if (G.level.doorGroup(d).some(dd => dd.trap && dd.trapKnown)) items.push({ label: 'Disarm Trap', fn: w => issueEntry('disarm', null, w) });
    } else {
      items.push({ label: 'Move & Clear ›', fn: grenadeSub('move', 'Move & Clear') });
      items.push({ label: 'Stack Up', fn: w => issueEntry('stack', null, w) });
      if (d.state === 'open') items.push({ label: 'Close Door', fn: w => issueEntry('close', null, w) });
      if (d.state === 'open') items.push({ label: `Close & Wedge (${G.teamGear.wedge})`, fn: w => issueEntry('wedge', null, w), disabled: G.teamGear.wedge <= 0 });
    }
  } else if (t.kind === 'person') {
    const p = t.obj;
    Cmd.title = `${team} TEAM ▸ ${p.kind === 'civ' ? 'CIVILIAN' : p.kind === 'officer' ? 'OFFICER' : 'SUSPECT'}`;
    if (p.ok && p.compliant && !p.restrained) items.push({ label: 'Restrain', fn: () => assignTask('restrain', p) });
    if (!p.ok && !p.reported) items.push({ label: 'Report to TOC', fn: () => assignTask('report', p) });
    if (p.ok && !p.compliant) items.push({ label: 'Cover Target', fn: () => groundOrder('cover', p.x, p.y) });
    items.push({ label: 'Move Here', fn: () => groundOrder('move', p.x, p.y) });
  } else if (t.kind === 'item') {
    Cmd.title = `${team} TEAM ▸ EVIDENCE`;
    items.push({ label: 'Collect Evidence', fn: () => assignTask('collect', t.obj) });
    items.push({ label: 'Move Here', fn: () => groundOrder('move', t.obj.x, t.obj.y) });
  } else {
    Cmd.title = `${team} TEAM`;
    items.push({ label: 'Fall In', fn: () => groundOrder('follow') });
    items.push({ label: 'Move Here', fn: () => groundOrder('move', t.x, t.y) });
    items.push({ label: 'Hold Position', fn: () => groundOrder('hold') });
    items.push({ label: 'Cover Area', fn: () => groundOrder('cover', t.x, t.y) });
    items.push({ label: 'Search & Secure', fn: () => groundOrder('secure') });
    if (G.entries.some(e => e.phase === 'waiting')) items.push({ label: 'GO! (execute held orders)', fn: () => { goSignal(); } });
  }
  Cmd.items = items;
}
function chooseCmd(i, wait) {
  const it = Cmd.items[i]; if (!it || it.disabled) return;
  Sfx.ui();
  const r = it.fn(wait);
  if (r !== 'keep') closeCmd();
}
function goSignal() {
  if (!G.entries.some(e => e.phase === 'waiting' || e.phase === 'stack')) return;
  G.goTime = G.time + 0.001;
  radio(G.player, 'Execute! Execute! Execute!');
  Voice.say('Execute!', { force: true, pitch: 0.8 });
}
function ack(members, text) { if (members.length) callout(members[0], text); }
function issueEntry(method, grenade, wait) {
  const m = selectedOfficers();
  if (!m.length) { G.flashMsg('No officers available on ' + G.teamSel + ' team', '#ff9a5a'); return; }
  const d = Cmd.target.obj;
  G.entries.push(new Entry(m, d, method, grenade, !!wait && BREACH_METHODS.includes(method)));
  const lbl = { stack: 'Stacking up.', open: 'Copy, open and clear.', kick: 'Copy, kicking it.', ram: 'Copy, ramming it.', c2: 'Copy, C2 breach.', move: 'Moving to clear.', mirror: 'Checking under the door.', pick: 'Picking the lock.', wedge: 'Wedging the door.', disarm: 'Disarming the trap.', close: 'Closing the door.' }[method];
  ack(m, (wait && BREACH_METHODS.includes(method) ? 'On your command. ' : '') + lbl);
}
function assignTask(type, target) {
  const m = selectedOfficers().filter(o => !o.task);
  const pool = m.length ? m : selectedOfficers();
  if (!pool.length) { G.flashMsg('No officers available', '#ff9a5a'); return; }
  pool.sort((a, b) => dist(a.x, a.y, target.x, target.y) - dist(b.x, b.y, target.x, target.y));
  const o = pool[0];
  if (o.task && o.task.target) o.task.target.claim = null;
  if (o.order.type === 'entry') o.order = { type: 'hold', x: o.x, y: o.y, angle: o.angle };
  o.task = { type, target, prog: 0 }; target.claim = o;
  callout(o, { restrain: 'On it, restraining.', report: 'Reporting it.', collect: 'Grabbing the evidence.' }[type]);
}
function groundOrder(type, x, y) {
  const m = selectedOfficers();
  if (!m.length) { G.flashMsg('No officers available', '#ff9a5a'); return; }
  m.forEach((o, i) => {
    if (o.task && o.task.target) o.task.target.claim = null; o.task = null; o.path = null;
    if (type === 'follow') o.order = { type: 'follow' };
    else if (type === 'hold') o.order = { type: 'hold', x: o.x, y: o.y, angle: o.angle };
    else if (type === 'secure') o.order = { type: 'secure' };
    else if (type === 'move') {
      const a = i * TAU / Math.max(1, m.length) + 0.4, r = m.length > 1 ? 18 : 0;
      let gx = x + Math.cos(a) * r, gy = y + Math.sin(a) * r;
      if (G.level.circleSolid(gx, gy, 10)) { gx = x; gy = y; }
      o.order = { type: 'move', x: gx, y: gy, angle: Math.atan2(gy - G.player.y, gx - G.player.x) };
    } else if (type === 'cover') o.order = { type: 'cover', x: o.x, y: o.y, ax: x, ay: y };
  });
  ack(m, { follow: 'Falling in.', hold: 'Holding here.', move: 'Moving.', cover: 'Covering.', secure: 'Copy, searching and securing.' }[type]);
}
