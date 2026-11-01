"use strict";
// =====================================================================
//  HARD ENTRY — game state, mission setup, loop, scoring, menus
// =====================================================================
const DIFFS = {
  recruit: { name: 'Recruit', react: 1.4, spread: 1.4, pause: 1.4, desc: 'Suspects react slowly and miss more.' },
  officer: { name: 'Officer', react: 1.0, spread: 1.0, pause: 1.0, desc: 'The intended experience.' },
  elite:   { name: 'Elite', react: 0.78, spread: 0.85, pause: 0.75, desc: 'Fast, accurate, unforgiving suspects.' },
};
const G = {
  state: 'menu', time: 0, cam: { x: 0, y: 0, scale: 1 }, mouseWorld: { x: 0, y: 0 },
  persons: [], npcs: [], officers: [], swat: [], items: [], grenades: [], gas: [], particles: [], tracers: [], wires: [], entries: [],
  trail: [], radio: [], msgs: [], penalties: [], penaltyKeys: new Set(), teamSel: 'gold', goTime: -1,
  shake: 0, hurtFx: 0, flashFx: 0, deafT: 0, exploreT: 0, visGen: 1, showMap: false, showHelp: false,
  flashMsg(text, color = '#e6e0cf') { this.msgs.push({ text, color, t: this.time }); if (this.msgs.length > 4) this.msgs.shift(); },
};
const DEFAULT_LOADOUT = { primary: 'carbine', secondary: 'pistol', armor: 'light', head: 'helmet', long: 'mirror', tac: ['flash', 'flash', 'stinger', 'c2', 'wedge'], diff: 'officer' };
let LOADOUT = Object.assign({}, DEFAULT_LOADOUT, store('hardentry.loadout') || {});
if (!Array.isArray(LOADOUT.tac) || LOADOUT.tac.length !== 5) LOADOUT.tac = DEFAULT_LOADOUT.tac.slice();

// ---------------------------------------------------------------------
//  canvas
// ---------------------------------------------------------------------
G.canvas = document.getElementById('game');
G.ctx = G.canvas.getContext('2d');
G.fogC = document.createElement('canvas'); G.fogCtx = G.fogC.getContext('2d');
bindMouse(G.canvas);
function resize() {
  G.dpr = Math.min(window.devicePixelRatio || 1, 2);
  G.cssW = window.innerWidth; G.cssH = window.innerHeight;
  G.canvas.width = Math.floor(G.cssW * G.dpr); G.canvas.height = Math.floor(G.cssH * G.dpr);
  G.canvas.style.width = G.cssW + 'px'; G.canvas.style.height = G.cssH + 'px';
}
window.addEventListener('resize', resize); resize();

// ---------------------------------------------------------------------
//  mission setup
// ---------------------------------------------------------------------
function startMission(mission) {
  const L = new Level(mission);
  Object.assign(G, {
    mission, level: L, time: 0, persons: [], npcs: [], officers: [], swat: [], items: [], grenades: [], gas: [], particles: [], tracers: [], wires: [], entries: [],
    trail: [], radio: [], msgs: [], penalties: [], penaltyKeys: new Set(), civInjuredByTeam: new Set(), civKilledByTeam: new Set(),
    teamSel: 'gold', goTime: -1, shake: 0, hurtFx: 0, flashFx: 0, deafT: 0, exploreT: 0, visGen: 1, showMap: false, showHelp: false,
    bomb: null, playerC2: null, mirrorView: null, mirrorActive: false, completeAnnounced: false, endReason: null,
    stats: { shots: 0 }, diff: DIFFS[LOADOUT.diff] || DIFFS.officer,
  });
  G.loadout = JSON.parse(JSON.stringify(LOADOUT));
  G.armorProt = ARMORS[G.loadout.armor].prot + HEADGEAR[G.loadout.head].prot;
  G.inv = { flash: 0, stinger: 0, cs: 0, c2: 0, wedge: 0 };
  for (const t of G.loadout.tac) G.inv[t] += t === 'wedge' ? 2 : 1;
  G.teamGear = { flash: 6, stinger: 4, cs: 3, c2: 3, wedge: 4 };
  NEXT_ID = 1;

  // doors: locks + traps
  const done = new Set();
  for (const d of L.doors) {
    if (done.has(d)) continue;
    const grp = L.doorGroup(d); grp.forEach(x => done.add(x));
    const locked = Math.random() < mission.locked;
    grp.forEach(x => { x.locked = locked; });
    if (!d.partner && mission.trap && Math.random() < mission.trap) {
      const out0 = L.isOutdoor(d.rooms[0]), out1 = L.isOutdoor(d.rooms[1]);
      if (out0 && out1) continue;
      d.trap = weighted(mission.traps);
      d.trapSide = out0 ? 1 : out1 ? -1 : (Math.random() < 0.5 ? -1 : 1);
    }
  }
  // player + team
  const P = L.spawns.P[0];
  const player = new Person('player', (P.tx + 0.5) * TS, (P.ty + 0.5) * TS);
  player.name = 'Lead'; player.angle = -Math.PI / 2;
  player.guns = { primary: makeGun(G.loadout.primary), secondary: makeGun(G.loadout.secondary) };
  player.equip = 'primary'; player.grenadeSel = 'flash'; player.tacSel = 'c2'; player.reloadT = 0; player.recoil = 0; player.lean = 0;
  player.eyeX = player.x; player.eyeY = player.y;
  G.player = player; G.persons.push(player); G.swat.push(player);
  const near = [];
  for (let r = 1; r < 6 && near.length < 4; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    if (Math.max(Math.abs(dx), Math.abs(dy)) !== r || near.length >= 4) continue;
    const tx = P.tx + dx, ty = P.ty + dy;
    if (L.walkableTile(tx, ty) && dy >= 0) near.push({ tx, ty });
  }
  OFFICER_DEFS.forEach((def, i) => {
    const s = near[i] || P;
    const o = new Person('officer', (s.tx + 0.5) * TS, (s.ty + 0.5) * TS);
    o.name = def.name; o.team = def.team; o.order = { type: 'follow' }; o.task = null; o.angle = -Math.PI / 2; o.react = 0; o.reactTime = 0.3;
    G.officers.push(o); G.persons.push(o); G.swat.push(o);
  });
  // npcs
  const xs = shuffle(L.spawns.x.slice()), cs = shuffle(L.spawns.c.slice()), hs = shuffle(L.spawns.h.slice());
  const makeNPC = (kind, tx, ty) => {
    const n = new Person(kind, (tx + 0.5) * TS + rand(-4, 4), (ty + 0.5) * TS + rand(-4, 4));
    n.angle = Math.random() * TAU; n.skin = pick(SKIN); n.hair = pick(['#1a1410', '#3a2a1a', '#6a4a2a', '#b09060', '#2a2a2a', '#8a8a8a', '#a04a20']);
    if (kind === 'suspect') {
      n.persona = weighted(mission.persona);
      const gun = weighted(mission.guns); n.weapon = gun === 'none' ? null : gun;
      n.faker = Math.random() < mission.faker; n.cloth = pick(CLOTHES_SUSPECT); n.mask = Math.random() < 0.4;
    } else { n.cloth = pick(CLOTHES_CIV); n.hp = n.maxHp = 80; }
    G.npcs.push(n); G.persons.push(n);
    return n;
  };
  let pairs = 0;
  for (let i = 0; i < (mission.hostagePairs || 0) && hs.length; i++) {
    const h = hs.pop();
    const s = makeNPC('suspect', h.tx, h.ty);
    s.persona = 'captor'; s.weapon = Math.random() < 0.6 ? 'pistol' : 'smg'; s.faker = false;
    let ct = null;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1]]) if (L.walkableTile(h.tx + dx, h.ty + dy)) { ct = { tx: h.tx + dx, ty: h.ty + dy }; break; }
    const c = makeNPC('civ', ct.tx, ct.ty);
    s.hostage = c; pairs++;
  }
  for (let i = 0; i < mission.suspects - pairs && xs.length; i++) { const t = xs.pop(); makeNPC('suspect', t.tx, t.ty); }
  for (let i = 0; i < mission.civilians - pairs && cs.length; i++) { const t = cs.pop(); makeNPC('civ', t.tx, t.ty); }
  // evidence + bomb
  L.spawns.e.forEach((e, i) => spawnItem((e.tx + 0.5) * TS, (e.ty + 0.5) * TS, mission.evidenceNames[i % mission.evidenceNames.length], 'item', !!mission.requireEvidence));
  if (mission.bomb && L.spawns.O.length) { const o = L.spawns.O[0]; G.bomb = { x: (o.tx + 0.5) * TS, y: (o.ty + 0.5) * TS, t: mission.bomb, defused: false }; }
  // canvases
  G.staticC = buildStatic(L);
  G.decalC = document.createElement('canvas'); G.decalC.width = L.w * TS; G.decalC.height = L.h * TS; G.decalCtx = G.decalC.getContext('2d');
  G.exploredC = document.createElement('canvas'); G.exploredC.width = L.w; G.exploredC.height = L.h; G.exploredCtx = G.exploredC.getContext('2d');
  G.exploredCtx.fillStyle = '#fff';
  // the staging area is known
  const startRoom = L.roomAt(player.x, player.y);
  for (const i of L.roomTiles[startRoom] || []) { L.explored[i] = 1; G.exploredCtx.fillRect(i % L.w, (i / L.w) | 0, 1, 1); }
  for (let i = 0; i < L.N; i++) {
    if (L.explored[i]) continue;
    const x = i % L.w, y = (i / L.w) | 0;
    if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => L.inb(x + dx, y + dy) && L.room[L.idx(x + dx, y + dy)] === startRoom)) { L.explored[i] = 2; }
  }
  for (let i = 0; i < L.N; i++) if (L.explored[i] === 2) { L.explored[i] = 1; G.exploredCtx.fillRect(i % L.w, (i / L.w) | 0, 1, 1); }
  G.cam.x = player.x; G.cam.y = player.y;
  G.state = 'playing';
  Input.blockGameKeys = true;
  showScreen(null);
  radio(null, `All units, ${mission.name} is a go. Element is cleared hot.`, '#9fd3a0');
  setTimeout(() => { if (G.state === 'playing' && G.player.ok) radio(G.officers[0], 'Element ready. Awaiting orders, Lead.'); }, 1800);
  Sfx.unlock();
}

// ---------------------------------------------------------------------
//  objectives / scoring
// ---------------------------------------------------------------------
G.objectives = function () {
  const sus = G.npcs.filter(n => n.kind === 'suspect'), civ = G.npcs.filter(n => n.kind === 'civ');
  const susDone = sus.filter(n => n.restrained || !n.ok).length;
  const civDone = civ.filter(n => n.restrained || !n.ok).length;
  const evTotal = G.items.length + sus.filter(n => n.weapon).length;
  const evDone = G.items.filter(i => i.collected).length;
  const rep = G.persons.filter(p => p !== G.player && !p.ok);
  const repDone = rep.filter(p => p.reported).length;
  const list = [
    { text: `Arrest or neutralize suspects   ${susDone}/${sus.length}`, done: susDone === sus.length },
    { text: `Rescue all civilians   ${civDone}/${civ.length}`, done: civDone === civ.length },
  ];
  if (G.bomb) list.push({ text: 'Defuse the explosive device', done: G.bomb.defused });
  if (G.mission.requireEvidence) {
    const req = G.items.filter(i => i.required);
    list.push({ text: `Seize narcotics evidence   ${req.filter(i => i.collected).length}/${req.length}`, done: req.every(i => i.collected) });
  }
  list.push({ text: `Collect evidence   ${evDone}/${evTotal}`, done: evDone >= evTotal, optional: true });
  list.push({ text: `Report status to TOC   ${repDone}/${rep.length}`, done: repDone >= rep.length, optional: true });
  return { list, complete: list.filter(l => !l.optional).every(l => l.done) };
};
function computeScore(reason) {
  const sus = G.npcs.filter(n => n.kind === 'suspect'), civ = G.npcs.filter(n => n.kind === 'civ');
  const arrested = sus.filter(n => n.restrained && n.ok).length, neutralized = sus.filter(n => !n.ok).length;
  const killedSus = sus.filter(n => n.status === 'dead').length;
  const rescued = civ.filter(n => n.restrained && n.ok).length;
  const civDead = civ.filter(n => n.status === 'dead').length;
  const ev = G.items.filter(i => i.collected).length, evT = G.items.length + sus.filter(n => n.weapon).length;
  const rep = G.persons.filter(p => p !== G.player && !p.ok), repD = rep.filter(p => p.reported).length;
  const obj = G.objectives();
  let team = 10;
  if (G.player.hp < 100) team -= G.player.hp < 50 ? 3 : 1;
  for (const o of G.officers) { if (!o.ok) team -= 5; else if (o.hp < 100) team -= o.hp < 50 ? 2 : 1; }
  team = Math.max(0, team);
  const lines = [
    { label: 'Mission objectives complete', pts: obj.complete ? 20 : 0, max: 20 },
    { label: `Suspects: ${arrested} arrested, ${neutralized} neutralized of ${sus.length}`, pts: sus.length ? Math.round((30 * arrested + 15 * neutralized) / sus.length) : 30, max: 30 },
    { label: `Civilians rescued: ${rescued} of ${civ.length}`, pts: civ.length ? Math.round(20 * rescued / civ.length) : 20, max: 20 },
    { label: `Evidence collected: ${ev} of ${evT}`, pts: evT ? Math.round(10 * ev / evT) : 10, max: 10 },
    { label: `Reports to TOC: ${repD} of ${rep.length}`, pts: rep.length ? Math.round(10 * repD / rep.length) : 10, max: 10 },
    { label: 'Team status', pts: team, max: 10 },
  ];
  const pens = G.penalties.slice();
  for (const id of G.civKilledByTeam) pens.push({ label: 'Civilian killed by SWAT', pts: -20 });
  for (const o of G.officers) if (!o.ok) pens.push({ label: `Officer ${o.name} ${o.status === 'dead' ? 'killed' : 'incapacitated'}`, pts: -10 });
  const injured = [...G.civInjuredByTeam].filter(id => !G.civKilledByTeam.has(id)).length;
  for (let i = 0; i < injured; i++) pens.push({ label: 'Civilian injured by SWAT', pts: -5 });
  let total = lines.reduce((a, l) => a + l.pts, 0) + pens.reduce((a, p) => a + p.pts, 0);
  total = clamp(total, 0, 100);
  let failReason = null;
  if (reason === 'dead') failReason = 'Lead officer down.';
  else if (reason === 'bomb') failReason = 'The device detonated.';
  else if (!obj.complete) failReason = 'Mission aborted before objectives were complete.';
  else if (total < 50) failReason = 'Score below 50 — conduct unbecoming.';
  const grade = failReason ? 'F' : total >= 95 ? 'A+' : total >= 90 ? 'A' : total >= 80 ? 'B' : total >= 70 ? 'C' : total >= 60 ? 'D' : 'F';
  return { lines, pens, total, grade, success: !failReason, failReason, stats: { arrested, neutralized, killedSus, rescued, civDead, time: G.time, shots: G.stats.shots } };
}
function endMission(reason) {
  if (G.state !== 'playing' && G.state !== 'paused' && G.state !== 'ending') return;
  G.state = 'debrief';
  Input.blockGameKeys = false;
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { /* noop */ }
  Sfx.setMuffle(0);
  const s = computeScore(reason);
  G.lastScore = s;
  const key = 'hardentry.best.' + G.mission.id;
  const best = store(key);
  if (s.success && (!best || s.total > best.total)) store(key, { total: s.total, grade: s.grade });
  renderDebrief(s);
  showScreen('debrief');
}
G.onPlayerDown = function () {
  radio(null, 'LEAD IS DOWN. Abort, abort!', '#ff6a5a');
  setTimeout(() => endMission('dead'), 2200);
};

// ---------------------------------------------------------------------
//  update
// ---------------------------------------------------------------------
function updateCamera(dt) {
  const p = G.player, sc = Math.min(G.cssW / 1150, G.cssH / 700) * (p.ads ? 0.9 : 1);
  G.cam.scale = lerp(G.cam.scale || sc, sc, 1 - Math.exp(-6 * dt));
  const mx = (Input.mouse.x - G.cssW / 2) / G.cam.scale, my = (Input.mouse.y - G.cssH / 2) / G.cam.scale;
  const look = p.ads ? 0.45 : 0.28;
  const tx = p.x + clamp(mx, -700, 700) * look, ty = p.y + clamp(my, -500, 500) * look;
  G.cam.x = lerp(G.cam.x, tx, 1 - Math.exp(-8 * dt));
  G.cam.y = lerp(G.cam.y, ty, 1 - Math.exp(-8 * dt));
  G.mouseWorld.x = (Input.mouse.x - G.cssW / 2) / G.cam.scale + G.cam.x;
  G.mouseWorld.y = (Input.mouse.y - G.cssH / 2) / G.cam.scale + G.cam.y;
}
function separate() {
  const ps = G.persons.filter(p => p.status === 'ok');
  for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
    const a = ps[i], b = ps[j];
    if (a.hostage === b || b.hostage === a) continue;
    const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy), m = a.r + b.r - 2;
    if (d >= m || d < 0.001) continue;
    const push = (m - d);
    const wa = a.restrained || a.compliant || a.state === 'hostage' ? 0.15 : a.kind === 'player' ? 0.3 : 0.5;
    const wb = b.restrained || b.compliant || b.state === 'hostage' ? 0.15 : b.kind === 'player' ? 0.3 : 0.5;
    const t = wa + wb;
    a.x -= dx / d * push * wa / t; a.y -= dy / d * push * wa / t;
    b.x += dx / d * push * wb / t; b.y += dy / d * push * wb / t;
    G.level.collide(a); G.level.collide(b);
  }
}
function handleGlobalKeys() {
  if (Input.hit('Escape')) { if (Cmd.open) closeCmd(); else if (G.showHelp) G.showHelp = false; else pauseGame(); return; }
  if (Input.hit('KeyH')) G.showHelp = !G.showHelp;
  G.showMap = Input.down('Tab');
  if (Input.hit('KeyC')) { G.teamSel = { gold: 'red', red: 'blue', blue: 'gold' }[G.teamSel]; Sfx.ui(); if (Cmd.open) buildCmd(Cmd.target); }
  if (Input.hit('KeyX')) goSignal();
  if (Input.hit('Enter') && G.objectives().complete) { endMission('complete'); return; }
  const shift = Input.down('ShiftLeft') || Input.down('ShiftRight');
  if (Cmd.open) {
    for (let i = 0; i < 10; i++) {
      const code = 'Digit' + ((i + 1) % 10);
      if (Input.hit(code)) { Input.pressed[code] = false; chooseCmd(i, shift); return; }
    }
    if (Input.mouse.lp) { if (Cmd.hover >= 0) chooseCmd(Cmd.hover, shift); else closeCmd(); Input.mouse.lp = false; Input.mouse.l = false; return; }
    if (Input.mouse.rp || Input.hit('KeyZ') || Input.mouse.mp) { closeCmd(); return; }
  } else if ((Input.hit('KeyZ') || Input.mouse.mp) && G.player.ok) openCmd();
}
function update(dt) {
  handleGlobalKeys();
  if (G.state !== 'playing') return;
  G.time += dt;
  updateCamera(dt);
  Sfx.listener.x = G.player.x; Sfx.listener.y = G.player.y;
  updatePlayer(G.player, dt);
  for (const o of G.officers) updateOfficer(o, dt);
  updateEntries(dt);
  for (const n of G.npcs) updateNPC(n, dt);
  separate();
  updateGrenades(dt);
  for (const q of G.particles) { q.life -= dt; q.x += q.vx * dt; q.y += q.vy * dt; q.vx *= 0.92; q.vy *= 0.92; }
  G.particles = G.particles.filter(q => q.life > 0);
  for (const t of G.tracers) t.life -= dt; G.tracers = G.tracers.filter(t => t.life > 0);
  for (const w of G.wires) w.life -= dt; G.wires = G.wires.filter(w => w.life > 0);
  updateVisibility(dt);
  // timers / fx
  G.shake = Math.max(0, G.shake - dt * 25);
  G.hurtFx = Math.max(0, G.hurtFx - dt * 0.8);
  G.flashFx = Math.max(0, G.flashFx - dt * 0.28);
  G.deafT = Math.max(0, G.deafT - dt);
  Sfx.setMuffle(clamp(G.deafT / 4, 0, 1));
  if (G.bomb && !G.bomb.defused) {
    const before = G.bomb.t; G.bomb.t -= dt;
    if (Math.floor(before) !== Math.floor(G.bomb.t) && G.bomb.t < 60) Sfx.beep(G.bomb.x, G.bomb.y);
    if (before > 120 && G.bomb.t <= 120) radio(null, 'Two minutes on the device!', '#ff9a5a');
    if (before > 60 && G.bomb.t <= 60) radio(null, 'SIXTY SECONDS! Get to that device!', '#ff6a5a');
    if (G.bomb.t <= 0) {
      explosionFx(G.bomb.x, G.bomb.y, 3); Sfx.boom(G.bomb.x, G.bomb.y, 3); G.shake = 20;
      radio(null, 'The device detonated...', '#ff6a5a');
      G.bomb.t = 0; G.bomb.defused = false;
      setTimeout(() => endMission('bomb'), 1600);
      G.state = 'ending';
    }
  }
  const obj = G.objectives();
  if (obj.complete && !G.completeAnnounced) {
    G.completeAnnounced = true;
    radio(null, 'All objectives complete. Good work, team. Press ENTER when ready to end the mission.', '#9fd3a0');
    Voice.say('All objectives complete.', { force: true });
  }
}
let lastT = performance.now();
function frame(ts) {
  const dt = Math.min(0.05, (ts - lastT) / 1000); lastT = ts;
  try {
    if (G.state === 'playing') update(dt);
    else if (G.state === 'paused' && Input.hit('Escape') && document.getElementById('pause').classList.contains('show')) resumeGame();
    else if (G.state === 'ending') { G.time += dt; for (const q of G.particles) { q.life -= dt; } G.particles = G.particles.filter(q => q.life > 0); }
    if (G.level && (G.state === 'playing' || G.state === 'paused' || G.state === 'ending')) { renderWorld(G.ctx); renderHUD(G.ctx); }
  } catch (e) { console.error(e); }
  Input.endFrame();
  requestAnimationFrame(frame);
}

// ---------------------------------------------------------------------
//  DOM screens
// ---------------------------------------------------------------------
const $ = id => document.getElementById(id);
function showScreen(id) {
  for (const s of document.querySelectorAll('.screen')) s.classList.toggle('show', s.id === id);
  G.canvas.style.cursor = id ? 'default' : 'none';
}
function pauseGame() { if (G.state !== 'playing') return; G.state = 'paused'; Input.blockGameKeys = false; showScreen('pause'); $('voiceBtn2').textContent = 'Voice callouts: ' + (Voice.on ? 'ON' : 'OFF'); }
function resumeGame() { G.state = 'playing'; Input.blockGameKeys = true; showScreen(null); Input.keys = {}; }
let SELECTED = MISSIONS[0];
function renderTitle() {
  const list = $('missions'); list.innerHTML = '';
  for (const m of MISSIONS) {
    const best = store('hardentry.best.' + m.id);
    const el = document.createElement('button'); el.className = 'mission';
    el.innerHTML = `<div class="m-top"><span class="m-name">${m.name}</span><span class="pips">${'■'.repeat(m.difficulty)}<i>${'■'.repeat(4 - m.difficulty)}</i></span></div>
      <div class="m-title">${m.title}</div><div class="m-loc">${m.location}</div>
      <div class="m-best">${best ? 'BEST: <b>' + best.grade + '</b> (' + best.total + ')' : 'NOT COMPLETED'}</div>`;
    el.onclick = () => { Sfx.unlock(); Sfx.ui(); SELECTED = m; openBriefing(m); };
    list.appendChild(el);
  }
  $('voiceBtn').textContent = 'Voice callouts: ' + (Voice.on ? 'ON' : 'OFF');
}
function openBriefing(m) {
  $('b-name').textContent = m.name; $('b-title').textContent = m.title;
  $('b-loc').textContent = m.location + '  ·  ' + m.time;
  $('b-brief').textContent = m.brief;
  $('b-intel').innerHTML = m.intel.map(s => `<li>${s}</li>`).join('');
  // map preview
  const L = new Level(m), c = $('b-map'), st = buildStatic(L);
  const s = Math.min(c.width / st.width, c.height / st.height);
  const g = c.getContext('2d'); g.fillStyle = '#05070a'; g.fillRect(0, 0, c.width, c.height);
  const ox = (c.width - st.width * s) / 2, oy = (c.height - st.height * s) / 2;
  g.drawImage(st, ox, oy, st.width * s, st.height * s);
  for (const d of L.doors) { g.fillStyle = '#8a6440'; g.fillRect(ox + d.tx * TS * s, oy + d.ty * TS * s, TS * s, TS * s); }
  const P = L.spawns.P[0];
  g.fillStyle = '#e6c35c'; g.beginPath(); g.arc(ox + (P.tx + 0.5) * TS * s, oy + (P.ty + 0.5) * TS * s, 6, 0, TAU); g.fill();
  g.font = `bold 11px ${FONT}`; g.fillText('STAGING', ox + (P.tx + 0.5) * TS * s + 9, oy + (P.ty + 0.5) * TS * s + 4);
  renderLoadout();
  showScreen('brief');
}
function cycle(arr, cur, dir) { const i = arr.indexOf(cur); return arr[(i + dir + arr.length) % arr.length]; }
function renderLoadout() {
  const rows = [
    { label: 'Primary', val: WEAPONS[LOADOUT.primary].name, desc: WEAPONS[LOADOUT.primary].desc, set: d => LOADOUT.primary = cycle(PRIMARIES, LOADOUT.primary, d) },
    { label: 'Sidearm', val: WEAPONS[LOADOUT.secondary].name, desc: WEAPONS[LOADOUT.secondary].desc, set: d => LOADOUT.secondary = cycle(SECONDARIES, LOADOUT.secondary, d) },
    { label: 'Armor', val: ARMORS[LOADOUT.armor].name, desc: ARMORS[LOADOUT.armor].desc, set: d => LOADOUT.armor = cycle(Object.keys(ARMORS), LOADOUT.armor, d) },
    { label: 'Headgear', val: HEADGEAR[LOADOUT.head].name, desc: HEADGEAR[LOADOUT.head].desc, set: d => LOADOUT.head = cycle(Object.keys(HEADGEAR), LOADOUT.head, d) },
    { label: 'Long tactical', val: LONG_TACTICAL[LOADOUT.long].name, desc: LONG_TACTICAL[LOADOUT.long].desc, set: d => LOADOUT.long = cycle(Object.keys(LONG_TACTICAL), LOADOUT.long, d) },
    ...LOADOUT.tac.map((t, i) => ({ label: 'Tactical ' + (i + 1), val: GEAR[t].name + (t === 'wedge' ? ' ×2' : ''), desc: GEAR[t].desc, set: d => LOADOUT.tac[i] = cycle(GEAR_KEYS, LOADOUT.tac[i], d) })),
    { label: 'Difficulty', val: DIFFS[LOADOUT.diff].name, desc: DIFFS[LOADOUT.diff].desc, set: d => LOADOUT.diff = cycle(Object.keys(DIFFS), LOADOUT.diff, d) },
  ];
  const box = $('loadout'); box.innerHTML = '';
  rows.forEach(r => {
    const el = document.createElement('div'); el.className = 'lrow';
    el.innerHTML = `<span class="ll">${r.label}</span><button class="arr">‹</button><span class="lv"><b>${r.val}</b><small>${r.desc}</small></span><button class="arr">›</button>`;
    const [a, b] = el.querySelectorAll('button');
    a.onclick = () => { r.set(-1); Sfx.ui(); store('hardentry.loadout', LOADOUT); renderLoadout(); };
    b.onclick = () => { r.set(1); Sfx.ui(); store('hardentry.loadout', LOADOUT); renderLoadout(); };
    box.appendChild(el);
  });
}
function renderDebrief(s) {
  $('d-status').textContent = s.success ? 'MISSION SUCCESS' : 'MISSION FAILED';
  $('d-status').className = s.success ? 'ok' : 'bad';
  $('d-reason').textContent = s.failReason || G.mission.name + ' — ' + G.mission.title;
  $('d-grade').textContent = s.grade; $('d-grade').className = 'grade g' + s.grade[0];
  $('d-total').textContent = s.total + ' / 100';
  $('d-lines').innerHTML = s.lines.map(l => `<tr><td>${l.label}</td><td class="pts">${l.pts} / ${l.max}</td></tr>`).join('') +
    (s.pens.length ? s.pens.map(p => `<tr class="pen"><td>${p.label}</td><td class="pts">${p.pts}</td></tr>`).join('') : '<tr class="clean"><td>No penalties — textbook conduct</td><td></td></tr>');
  const st = s.stats;
  $('d-stats').innerHTML = `<span>Time <b>${fmtTime(st.time)}</b></span><span>Rounds fired <b>${st.shots}</b></span><span>Suspects arrested <b>${st.arrested}</b></span><span>Suspects killed <b>${st.killedSus}</b></span><span>Civilians rescued <b>${st.rescued}</b></span><span>Civilian deaths <b>${st.civDead}</b></span>`;
}
function wireUI() {
  $('voiceBtn').onclick = $('voiceBtn2').onclick = () => {
    Voice.on = !Voice.on; store('hardentry.voice', Voice.on);
    $('voiceBtn').textContent = $('voiceBtn2').textContent = 'Voice callouts: ' + (Voice.on ? 'ON' : 'OFF');
  };
  $('helpBtn').onclick = () => showScreen('help');
  $('helpBack').onclick = () => { if (G.state === 'paused') showScreen('pause'); else { renderTitle(); showScreen('title'); } };
  $('b-back').onclick = () => { renderTitle(); showScreen('title'); };
  $('b-deploy').onclick = () => { Sfx.unlock(); store('hardentry.loadout', LOADOUT); startMission(SELECTED); };
  $('p-resume').onclick = resumeGame;
  $('p-restart').onclick = () => startMission(G.mission);
  $('p-help').onclick = () => showScreen('help');
  $('p-end').onclick = () => { G.state = 'playing'; endMission(G.objectives().complete ? 'complete' : 'abort'); };
  $('p-menu').onclick = () => { G.state = 'menu'; G.level = null; Input.blockGameKeys = false; renderTitle(); showScreen('title'); };
  $('d-retry').onclick = () => startMission(G.mission);
  $('d-brief').onclick = () => openBriefing(G.mission);
  $('d-menu').onclick = () => { G.state = 'menu'; G.level = null; renderTitle(); showScreen('title'); };
}
wireUI();
renderTitle();
showScreen('title');
requestAnimationFrame(frame);
