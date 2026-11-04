// In-game HUD (DOM + 2D canvases): flags/tickets, compass, minimap, ammo & gadgets, health, squad,
// killfeed, score toasts, hitmarkers, damage direction, 3D world markers, scoreboard, big map, scope overlay.
import * as THREE from 'three';
import { clamp, DEG } from '../core/math.js';
import { TEAM_COLORS } from '../entities/models.js';
import { CLASSES } from '../data/loadout.js';
import { keybinds } from '../core/keybinds.js';

const FRIEND = '#4aa8ff', SQUAD = '#86e05a', ENEMY = '#ff4b3a', NEUTRAL = '#c8c8c8';
const _p = new THREE.Vector3();

function el(tag, cls, parent, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; }

export class HUD {
  constructor(game) {
    this.game = game;
    const root = this.root = el('div', 'hud', document.getElementById('ui'));
    this.markers = el('canvas', 'markers', root);
    this.mctx = this.markers.getContext('2d');
    this.top = el('div', 'hud-top', root);
    this.ticketsEl = el('div', 'tickets', this.top);
    this.flagsEl = el('div', 'flagrow', this.top);
    this.compass = el('canvas', 'compass', this.top); this.compass.width = 520; this.compass.height = 30;
    this.capEl = el('div', 'capbar', root); this.capEl.innerHTML = '<div class="caplabel"></div><div class="captrack"><div class="capfill"></div></div>';
    this.minimap = el('canvas', 'minimap', root); this.minimap.width = this.minimap.height = 220;
    this.feed = el('div', 'killfeed', root);
    this.squadEl = el('div', 'squadlist', root);
    this.vitals = el('div', 'vitals', root);
    this.vitals.innerHTML = '<div class="hpnum">100</div><div class="hpbar"><div class="hpfill"></div></div><div class="vstat"></div>';
    this.weaponEl = el('div', 'weaponbox', root);
    this.crosshair = el('div', 'crosshair', root); this.crosshair.innerHTML = '<i class="ch-t"></i><i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i><i class="ch-d"></i>';
    this.hitmarker = el('div', 'hitmarker', root); this.hitmarker.innerHTML = '<i></i><i></i><i></i><i></i>';
    this.prompt = el('div', 'prompt', root);
    this.progress = el('div', 'progress', root); this.progress.innerHTML = '<div></div>';
    this.toasts = el('div', 'scoretoasts', root);
    this.msg = el('div', 'hudmsg', root);
    this.scope = el('canvas', 'scopecv', root); this.scopeCtx = this.scope.getContext('2d');
    this.downedEl = el('div', 'downed', root);
    this.oob = el('div', 'oob', root);
    this.fps = el('div', 'fps', root);
    this.flashEl = el('div', 'flashbang', root);
    this.banner = el('div', 'killbanner', root);
    this.ammoHint = el('div', 'ammohint', root);
    this.breathEl = el('div', 'breath', root); this.breathEl.innerHTML = '<span>HOLD BREATH</span><div><i></i></div>';
    this.order = el('div', 'orderline', root);
    this.board = el('div', 'scoreboard', root);
    this.bigmap = el('canvas', 'bigmap', root); this.bigmap.width = this.bigmap.height = 760;
    this.dmg = []; this.hitT = 0; this.hitKill = false; this.feedItems = []; this.toastItems = [];
    this.giveUp = 0; this.fpsAcc = 0; this.fpsN = 0; this.fpsT = 0;
    this.lastWeaponKey = ''; this.lastFlagsKey = '';
    this.resize();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.markers.width = Math.floor(window.innerWidth * dpr); this.markers.height = Math.floor(window.innerHeight * dpr);
    this.dpr = dpr;
  }

  setVisible(v) { this.root.style.display = v ? '' : 'none'; }

  // ---------- events ----------
  addKill(killer, victim, weapon, head, downed) {
    const kc = killer ? (killer.team === this.game.player.team ? (killer.squad === this.game.player.squad ? SQUAD : FRIEND) : ENEMY) : NEUTRAL;
    const vc = victim.team === this.game.player.team ? (victim.squad === this.game.player.squad ? SQUAD : FRIEND) : ENEMY;
    const me = killer === this.game.player || victim === this.game.player;
    const row = el('div', 'kf' + (me ? ' me' : ''), this.feed, `${killer && killer !== victim ? `<b style="color:${kc}">${killer.name}</b>` : ''} <span class="kfw">${downed ? '▼ ' : ''}${weapon || ''}${head ? ' ✸' : ''}</span> <b style="color:${vc}">${victim.name}</b>`);
    this.feedItems.push({ row, t: 7 });
    if (this.feedItems.length > 7) { const o = this.feedItems.shift(); o.row.remove(); }
  }
  addRevive(by, who) {
    const c = by.team === this.game.player.team ? FRIEND : ENEMY;
    const row = el('div', 'kf', this.feed, `<b style="color:${c}">${by.name}</b> <span class="kfw" style="color:#7fe07a">✚ revived</span> <b style="color:${c}">${who.name}</b>`);
    this.feedItems.push({ row, t: 5 });
    if (this.feedItems.length > 7) { const o = this.feedItems.shift(); o.row.remove(); }
  }
  scorePopup(text, pts) {
    const row = el('div', 'toast', this.toasts, pts ? `<b>+${pts}</b> ${text}` : text);
    this.toastItems.push({ row, t: 2.2 });
    if (this.toastItems.length > 5) { const o = this.toastItems.shift(); o.row.remove(); }
  }
  killBanner(name, head, downed) {
    this.banner.innerHTML = `<div class="kb-x">✕</div><div class="kb-t">${downed ? 'ENEMY DOWN' : 'ENEMY KILLED'}${head ? ' <b>HEADSHOT</b>' : ''}</div><div class="kb-n">${name}</div>`;
    this.banner.classList.remove('show'); void this.banner.offsetWidth; this.banner.classList.add('show');
    clearTimeout(this._bt); this._bt = setTimeout(() => this.banner.classList.remove('show'), 2200);
  }
  toast(text, dur = 2.5) { this.msg.textContent = text; this.msg.style.opacity = 1; this.msgT = dur; }
  hit(kill, head) { this.hitT = 0.16; this.hitKill = kill; this.hitHead = head; }
  damageFrom(dir) {
    if (!dir) return;
    const p = this.game.player;
    const ang = Math.atan2(-dir.x, -dir.z) - p.yaw + Math.PI; // direction toward source
    this.dmg.push({ a: ang, t: 1.4 });
  }

  // ---------- per-frame ----------
  update(dt) {
    const g = this.game, p = g.player;
    if (!p) return;
    // fps
    this.fpsAcc += dt; this.fpsN++; this.fpsT -= dt;
    if (this.fpsT <= 0) { this.fps.textContent = g.settings.get('showFps') ? `${Math.round(this.fpsN / this.fpsAcc)} FPS` : ''; this.fpsAcc = 0; this.fpsN = 0; this.fpsT = 0.5; }
    for (const arr of [this.feedItems, this.toastItems]) for (let i = arr.length - 1; i >= 0; i--) { arr[i].t -= dt; if (arr[i].t <= 0) { arr[i].row.remove(); arr.splice(i, 1); } else if (arr[i].t < 0.5) arr[i].row.style.opacity = arr[i].t / 0.5; }
    if (this.msgT !== undefined) { this.msgT -= dt; if (this.msgT <= 0) this.msg.style.opacity = 0; }
    this.updateTop();
    this.updateWeapon();
    this.updateVitals();
    this.updateSquad();
    this.updateCrosshair(dt);
    this.drawMinimap();
    this.drawMarkers(dt);
    this.updateCapture();
    const scoped = g.playerCtl && g.playerCtl.isScoped();
    this.scope.style.display = scoped ? 'block' : 'none';
    if (scoped) {
      const kind = p.weapon && p.weapon.id === 'binoculars' ? 'binoc' : (p.gun && p.gun.stats.sightId === 'scope8' ? 'scope8' : 'acog');
      this.drawScope(kind, p, dt);
    }
    // hold-breath meter while scoped
    const ctl = g.playerCtl;
    const showBreath = scoped && p.gun && ctl;
    this.breathEl.style.display = showBreath ? 'block' : 'none';
    if (showBreath) { this.breathEl.querySelector('i').style.width = `${ctl.breath * 100}%`; this.breathEl.classList.toggle('on', !!ctl.holding); this.breathEl.querySelector('span').textContent = `HOLD [${keybinds.name('sprint')}] TO STEADY`; }
    // ammo hints
    const gg = p.gun;
    let hint = '';
    if (p.state === 'alive' && gg && p.reloadT <= 0) {
      if (gg.mag === 0 && gg.reserve === 0) hint = '<b class="bad">NO AMMO</b> · find an ammo box or switch weapons';
      else if (gg.mag === 0) hint = `<b class="bad">RELOAD</b> [${keybinds.name('reload')}]`;
      else if (gg.mag <= Math.ceil(gg.stats.mag * 0.25) && gg.reserve > 0) hint = `LOW AMMO · [${keybinds.name('reload')}]`;
    }
    if (hint !== this._hint) { this._hint = hint; this.ammoHint.innerHTML = hint; }
    this.flashEl.style.opacity = clamp(p.flashed * 1.4, 0, 1);
    // prompt
    const pr = g.playerCtl && g.playerCtl.prompt;
    this.prompt.textContent = pr || '';
    this.prompt.style.display = pr && p.state === 'alive' ? 'block' : 'none';
    const showAct = p.action && !['throw', 'throwC4', 'reloadGadget', 'melee'].includes(p.action.name);
    const prog = p.reviveProgress > 0 ? p.reviveProgress : showAct ? 1 - p.actionT / p.actionDur : 0;
    this.progress.style.display = prog > 0 && p.state === 'alive' ? 'block' : 'none';
    this.progress.firstChild.style.width = `${prog * 100}%`;
    // downed overlay
    if (p.state === 'downed') {
      this.downedEl.style.display = 'block';
      const reviver = p.reviver && p.reviver.state === 'alive' && p.reviver.reviveProgress > 0;
      this.downedEl.innerHTML = `<div class="dt">YOU ARE DOWN</div><div class="ds">${reviver ? `${p.reviver.name} is reviving you…` : 'Wait for a teammate to revive you'}</div><div class="dbar"><div style="width:${clamp(p.downedHp, 0, 100)}%"></div></div><div class="dk">Hold [${keybinds.name('jump')}] to give up ${this.giveUp > 0 ? Math.round(this.giveUp * 100) + '%' : ''}</div>`;
    } else this.downedEl.style.display = 'none';
    // out of bounds
    const oob = g.oobTime;
    this.oob.style.display = oob > 0 ? 'block' : 'none';
    if (oob > 0) this.oob.innerHTML = `RETURN TO THE BATTLEFIELD<br><b>${Math.ceil(oob)}</b>`;
    // order line
    const sq = p.squad;
    if (sq && sq.order) {
      const o = sq.order;
      const label = o.type === 'follow' ? 'FOLLOW SQUAD LEADER' : o.type === 'move' ? 'MOVE TO MARKER' : `${o.type.toUpperCase()} ${o.flag && o.flag.id ? o.flag.id + ' · ' + o.flag.name : ''}`;
      this.order.innerHTML = `<b>${sq.name}</b> ${label}${sq.leader === p ? ` <span>[${keybinds.name('spot')}] give orders</span>` : ''}`;
    } else this.order.textContent = '';
    // scoreboard / big map
    const showBoard = keybinds.down(g.input, 'scoreboard') && !g.uiBlocking();
    this.board.style.display = showBoard ? 'block' : 'none';
    if (showBoard) this.drawBoard();
    const showMap = keybinds.down(g.input, 'map') && !g.uiBlocking();
    this.bigmap.style.display = showMap ? 'block' : 'none';
    if (showMap) this.drawMap(this.bigmap, false);
  }

  updateTop() {
    const g = this.game, m = g.mode, p = g.player;
    const my = p.team, en = 1 - my;
    const tdm = m.type === 'tdm';
    const a = tdm ? m.kills[my] : m.tickets[my], b = tdm ? m.kills[en] : m.tickets[en];
    const rem = Math.max(0, m.timeLimit - m.time);
    const mm = Math.floor(rem / 60), ss = Math.floor(rem % 60);
    const pa = tdm ? a / m.maxTickets : a / m.maxTickets, pb = tdm ? b / m.maxTickets : b / m.maxTickets;
    const key = `${a}|${b}|${mm}|${ss}`;
    if (key !== this.lastTicketKey) {
      this.lastTicketKey = key;
      this.ticketsEl.innerHTML = `<div class="tk mine"><span>${TEAM_COLORS[my].name}</span><b>${a}</b><div class="tkbar"><div style="width:${pa * 100}%"></div></div></div><div class="clock">${mm}:${String(ss).padStart(2, '0')}</div><div class="tk theirs"><b>${b}</b><span>${TEAM_COLORS[en].name}</span><div class="tkbar"><div style="width:${pb * 100}%"></div></div></div>`;
    }
    const fk = m.flags.map(f => `${f.id}${f.owner}${Math.round(f.progress * 20)}${f.contested ? 1 : 0}${f.capTeam}`).join(',');
    if (fk !== this.lastFlagsKey) {
      this.lastFlagsKey = fk;
      this.flagsEl.innerHTML = m.flags.map(f => {
        const own = f.owner === -1 ? 'n' : f.owner === my ? 'f' : 'e';
        const prog = Math.abs(f.progress);
        const progTeam = f.progress > 0 ? 0 : 1;
        const col = f.progress === 0 ? NEUTRAL : progTeam === my ? FRIEND : ENEMY;
        const lock = m.type === 'frontline' && !m.capturable(f, my) && f.owner !== my ? ' locked' : '';
        return `<div class="flag ${own}${f.contested ? ' contested' : ''}${lock}" style="--p:${prog * 100}%;--c:${col}"><span>${f.id}</span></div>`;
      }).join('');
    }
    // compass
    const c = this.compass.getContext('2d');
    c.clearRect(0, 0, 520, 30);
    const yawDeg = ((-p.yaw / DEG) % 360 + 360) % 360;
    c.font = '600 12px Rajdhani, Bahnschrift, sans-serif'; c.textAlign = 'center';
    for (let d = -100; d <= 100; d += 5) {
      const h = Math.round(yawDeg + d);
      const hh = ((h % 360) + 360) % 360;
      const x = 260 + (d - (yawDeg - Math.round(yawDeg))) * 2.5;
      if (hh % 15 !== 0) continue;
      c.fillStyle = 'rgba(255,255,255,0.75)';
      const lab = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' }[hh];
      if (lab) { c.fillStyle = hh % 90 === 0 ? '#ffd76a' : '#fff'; c.fillText(lab, x, 13); }
      else { c.fillRect(x - 0.5, 4, 1, 6); c.fillStyle = 'rgba(255,255,255,0.5)'; c.fillText(String(hh), x, 22); }
    }
    // flag ticks on compass
    for (const f of m.flags) {
      const b2 = Math.atan2(f.x - p.pos.x, -(f.z - p.pos.z)) / DEG;
      let d = ((b2 - yawDeg + 540) % 360) - 180;
      if (Math.abs(d) > 100) continue;
      const x = 260 + d * 2.5;
      c.fillStyle = f.owner === -1 ? NEUTRAL : f.owner === my ? FRIEND : ENEMY;
      c.fillText(f.id, x, 29);
    }
    c.fillStyle = '#ffd76a'; c.fillRect(259, 0, 2, 7);
  }

  updateWeapon() {
    const p = this.game.player;
    const w = p.weapon;
    if (!w) return;
    let main = '', ammo = '', mode = '';
    if (w.kind === 'gun') { main = w.stats.name; ammo = `<b>${w.mag}</b><span>/${w.reserve}</span>`; mode = w.stats.modes[w.mode].toUpperCase(); }
    else { main = w.def.name; ammo = w.def.count === Infinity ? '<b>∞</b>' : `<b>${w.count}</b>`; if (w.id === 'c4' && p.c4s && p.c4s.length) mode = `${p.c4s.length} PLACED · RMB DETONATE`; if ((w.id === 'rpg' || w.id === 'm320') && !w.loaded) mode = 'RELOADING'; }
    const slots = p.slots.map((s, i) => {
      if (!s) return '';
      const name = s.kind === 'gun' ? s.stats.name : s.def.name;
      const cnt = s.kind === 'gun' ? '' : (s.def.count === Infinity ? '' : `<em>${s.count}</em>`);
      return `<div class="slot${i === p.active ? ' on' : ''}${s.kind === 'gadget' && s.count <= 0 && s.def.count !== Infinity ? ' empty' : ''}"><i>${keybinds.name('slot' + (i + 1))}</i>${name}${cnt}</div>`;
    }).join('');
    const key = main + ammo + mode + slots + p.bandages + (p.reloadT > 0);
    if (key === this.lastWeaponKey) return;
    this.lastWeaponKey = key;
    this.weaponEl.innerHTML = `<div class="wname">${main}${p.reloadT > 0 ? ' <span class="rl">RELOADING</span>' : ''}</div><div class="ammo">${ammo}<div class="fmode">${mode}</div></div><div class="slots">${slots}<div class="slot"><i>${keybinds.name('bandage')}</i>Bandage<em>${p.bandages}</em></div></div>`;
  }

  updateVitals() {
    const p = this.game.player;
    const hp = p.state === 'alive' ? Math.max(0, Math.ceil(p.hp)) : 0;
    if (hp !== this.lastHp || p.bleed > 0 !== this.lastBleed || p.stance !== this.lastStance) {
      this.lastHp = hp; this.lastBleed = p.bleed > 0; this.lastStance = p.stance;
      this.vitals.querySelector('.hpnum').textContent = hp;
      const f = this.vitals.querySelector('.hpfill');
      f.style.width = `${hp}%`;
      f.style.background = hp < 30 ? '#e8443a' : hp < 60 ? '#e8b23a' : '#e9eef2';
      this.vitals.querySelector('.vstat').innerHTML = `${p.bleed > 0 ? `<span class="bleed">BLEEDING · [${keybinds.name('bandage')}] bandage</span>` : ''}<span class="stance">${p.stance.toUpperCase()}</span><span class="cls" style="color:${CLASSES[p.cls].color}">${CLASSES[p.cls].name.toUpperCase()}</span>`;
    }
  }

  updateSquad() {
    const p = this.game.player, sq = p.squad;
    if (!sq) return;
    const key = sq.members.map(m => m.name + m.state + (m === sq.leader) + m.cls).join('|');
    if (key === this.lastSquadKey) return;
    this.lastSquadKey = key;
    this.squadEl.innerHTML = `<div class="sqname">${sq.name} SQUAD</div>` + sq.members.map(m => `<div class="sqm ${m.state}${m === p ? ' me' : ''}"><span class="sqc" style="background:${CLASSES[m.cls].color}"></span>${m === sq.leader ? '★ ' : ''}${m.name}<em>${m.state === 'downed' ? 'DOWN' : m.state === 'dead' ? 'KIA' : ''}</em></div>`).join('');
  }

  updateCrosshair(dt) {
    const g = this.game, p = g.player;
    const show = g.settings.get('crosshair') && p.state === 'alive' && p.adsT < 0.5 && !p.sprinting && !g.uiBlocking();
    this.crosshair.style.display = show ? 'block' : 'none';
    if (show) {
      const spread = p.gun ? p.spread() : 1.2;
      const cam = g.camera;
      const px = Math.tan(spread * 0.5 * DEG) / Math.tan(cam.fov * 0.5 * DEG) * window.innerHeight * 0.5;
      this.crosshair.style.setProperty('--gap', `${clamp(px, 3, 140)}px`);
    }
    this.hitT -= dt;
    this.hitmarker.style.opacity = this.hitT > 0 ? 1 : 0;
    this.hitmarker.className = 'hitmarker' + (this.hitKill ? ' kill' : '') + (this.hitHead ? ' head' : '');
  }

  updateCapture() {
    const g = this.game, p = g.player;
    let f = null;
    if (p.state === 'alive') for (const fl of g.mode.flags) if (Math.hypot(p.pos.x - fl.x, p.pos.z - fl.z) < fl.r && Math.abs(p.pos.y - fl.y) < 14) { f = fl; break; }
    if (!f) { this.capEl.style.display = 'none'; return; }
    this.capEl.style.display = 'block';
    const my = p.team;
    const lab = this.capEl.querySelector('.caplabel');
    const st = f.contested ? 'CONTESTED' : f.capTeam === my ? (f.owner === -1 ? 'CAPTURING' : 'NEUTRALIZING') : f.capTeam === 1 - my ? 'LOSING' : f.owner === my ? 'SECURED' : (g.mode.capturable(f, my) ? '' : 'LOCKED');
    lab.innerHTML = `<b>${f.id}</b> ${f.name} <span>${st}</span> <i>${f.counts[my]} vs ${f.counts[1 - my]}</i>`;
    const fill = this.capEl.querySelector('.capfill');
    const prog = Math.abs(f.progress);
    const team = f.progress >= 0 ? 0 : 1;
    fill.style.width = `${prog * 100}%`;
    fill.style.background = f.progress === 0 ? NEUTRAL : team === my ? FRIEND : ENEMY;
  }

  // ---------- scope overlay ----------
  drawScope(kind, p, dt) {
    const cv = this.scope, dpr = this.dpr;
    const W = Math.floor(window.innerWidth * dpr), H = Math.floor(window.innerHeight * dpr);
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    const c = this.scopeCtx;
    c.clearRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) * (kind === 'binoc' ? 0.36 : 0.43);
    const circles = kind === 'binoc' ? [[cx - R * 0.55, cy, R], [cx + R * 0.55, cy, R]] : [[cx, cy, R]];
    // eye-relief shadow follows sway and movement
    this._sbob = (this._sbob || 0) + dt * Math.hypot(p.vel.x, p.vel.z) * 2.2;
    const mv = Math.min(1, Math.hypot(p.vel.x, p.vel.z) / 3);
    const ox = (p.swayY * 900 + Math.sin(this._sbob) * 10 * mv) * dpr, oy = (p.swayP * 900 + Math.abs(Math.cos(this._sbob)) * 12 * mv) * dpr;
    // mask
    c.fillStyle = '#050505'; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'destination-out';
    for (const [x, y, r] of circles) { c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); }
    c.globalCompositeOperation = 'source-over';
    c.save();
    c.beginPath(); for (const [x, y, r] of circles) { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); } c.clip();
    for (const [x, y, r] of circles) {
      const sh = c.createRadialGradient(x + ox, y + oy, r * 0.72, x + ox, y + oy, r * 1.08);
      sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(0.7, 'rgba(0,0,0,0.55)'); sh.addColorStop(1, 'rgba(0,0,0,0.98)');
      c.fillStyle = sh; c.fillRect(x - r, y - r, r * 2, r * 2);
      const tint = c.createRadialGradient(x, y, 0, x, y, r);
      tint.addColorStop(0, 'rgba(120,160,200,0.0)'); tint.addColorStop(1, 'rgba(60,90,130,0.18)');
      c.fillStyle = tint; c.fillRect(x - r, y - r, r * 2, r * 2);
      c.strokeStyle = 'rgba(255,255,255,0.07)'; c.lineWidth = r * 0.06; c.beginPath(); c.arc(x, y, r * 0.86, Math.PI * 1.08, Math.PI * 1.42); c.stroke();
    }
    c.restore();
    // reticle
    const k = dpr;
    c.save();
    c.beginPath(); for (const [x, y, r] of circles) { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); } c.clip();
    c.lineCap = 'butt';
    if (kind === 'scope8') {
      c.fillStyle = c.strokeStyle = '#0a0a0a';
      const post = 7 * k, thin = 1.4 * k, inner = R * 0.42;
      c.fillRect(cx - R, cy - post / 2, R - inner, post); c.fillRect(cx + inner, cy - post / 2, R - inner, post);
      c.fillRect(cx - post / 2, cy + inner, post, R - inner); c.fillRect(cx - post / 2, cy - R, post, R - inner);
      c.fillRect(cx - inner, cy - thin / 2, inner * 2, thin); c.fillRect(cx - thin / 2, cy - inner, thin, inner * 2);
      for (let i = 1; i <= 5; i++) { const d = i * inner / 5.5; for (const [dx, dy] of [[d, 0], [-d, 0], [0, d], [0, -d]]) { c.beginPath(); c.arc(cx + dx, cy + dy, 2.4 * k, 0, 7); c.fill(); } }
      c.fillStyle = '#ff3a2a'; c.shadowColor = '#ff3a2a'; c.shadowBlur = 6 * k; c.beginPath(); c.arc(cx, cy, 1.8 * k, 0, 7); c.fill(); c.shadowBlur = 0;
    } else if (kind === 'acog') {
      c.strokeStyle = '#0a0a0a'; c.lineWidth = 1.6 * k;
      c.beginPath(); c.moveTo(cx - R, cy); c.lineTo(cx - R * 0.22, cy); c.moveTo(cx + R * 0.22, cy); c.lineTo(cx + R, cy); c.stroke();
      c.beginPath(); c.moveTo(cx, cy + R * 0.05); c.lineTo(cx, cy + R * 0.55); c.stroke();
      const ticks = [[0.13, 0.08, '4'], [0.22, 0.06, '5'], [0.31, 0.045, '6'], [0.42, 0.03, '8']];
      c.font = `600 ${11 * k}px Rajdhani, sans-serif`; c.fillStyle = '#0a0a0a'; c.textAlign = 'left';
      for (const [y, w, lab] of ticks) { c.beginPath(); c.moveTo(cx - R * w, cy + R * y); c.lineTo(cx + R * w, cy + R * y); c.stroke(); c.fillText(lab, cx + R * w + 4 * k, cy + R * y + 4 * k); }
      c.strokeStyle = '#ff4a26'; c.shadowColor = '#ff4a26'; c.shadowBlur = 8 * k; c.lineWidth = 3 * k; c.lineJoin = 'miter';
      c.beginPath(); c.moveTo(cx - R * 0.045, cy + R * 0.05); c.lineTo(cx, cy); c.lineTo(cx + R * 0.045, cy + R * 0.05); c.stroke(); c.shadowBlur = 0;
    } else {
      c.strokeStyle = 'rgba(10,10,10,0.85)'; c.lineWidth = 1.4 * k; c.fillStyle = 'rgba(10,10,10,0.85)';
      c.beginPath(); c.moveTo(cx - R * 0.6, cy); c.lineTo(cx + R * 0.6, cy); c.stroke();
      for (let i = -6; i <= 6; i++) { const x = cx + i * R * 0.1; c.beginPath(); c.moveTo(x, cy - (i % 2 ? 4 : 9) * k); c.lineTo(x, cy); c.stroke(); }
      c.beginPath(); c.moveTo(cx, cy - R * 0.12); c.lineTo(cx, cy + R * 0.12); c.stroke();
      c.font = `600 ${11 * k}px Rajdhani, sans-serif`; c.textAlign = 'center'; c.fillText('SPOT [LMB]', cx, cy + R * 0.3);
    }
    c.restore();
    // fade in as the sight comes up
    const a = Math.min(1, Math.max(0, (p.adsT - 0.9) / 0.1));
    cv.style.opacity = a;
  }

  // ---------- minimap & map ----------
  worldToMap(x, z, size) {
    const half = this.game.world.terrain.half;
    return [(x + half) / (half * 2) * size, (z + half) / (half * 2) * size];
  }

  drawMinimap() {
    const g = this.game, p = g.player, c = this.minimap.getContext('2d');
    const S = 220, R = 110;
    const img = g.world.mapImage;
    const half = g.world.terrain.half;
    const range = 170; // meters radius
    const sc = R / range;
    c.save();
    c.clearRect(0, 0, S, S);
    c.beginPath(); c.arc(R, R, R - 2, 0, Math.PI * 2); c.clip();
    c.fillStyle = '#1a1f22'; c.fillRect(0, 0, S, S);
    c.translate(R, R);
    c.rotate(p.yaw);
    const ipm = img.width / (half * 2);
    c.globalAlpha = 0.92;
    c.drawImage(img, (-half - p.pos.x) * sc, (-half - p.pos.z) * sc, half * 2 * sc, half * 2 * sc);
    void ipm;
    c.globalAlpha = 1;
    const toM = (x, z) => [(x - p.pos.x) * sc, (z - p.pos.z) * sc];
    // flags
    for (const f of g.mode.flags) {
      const [x, y] = toM(f.x, f.z);
      c.strokeStyle = f.owner === -1 ? NEUTRAL : f.owner === p.team ? FRIEND : ENEMY;
      c.lineWidth = 2; c.globalAlpha = 0.5; c.beginPath(); c.arc(x, y, f.r * sc, 0, Math.PI * 2); c.stroke(); c.globalAlpha = 1;
    }
    this.drawUnits(c, toM, p, 3.2, range);
    c.restore();
    // flag letters upright
    c.save(); c.translate(R, R);
    for (const f of g.mode.flags) {
      let [x, y] = toM(f.x, f.z);
      const cs = Math.cos(p.yaw), sn = Math.sin(p.yaw);
      let rx = x * cs - y * sn, ry = x * sn + y * cs;
      const d = Math.hypot(rx, ry);
      if (d > R - 12) { rx *= (R - 12) / d; ry *= (R - 12) / d; }
      c.fillStyle = 'rgba(0,0,0,0.6)'; c.beginPath(); c.arc(rx, ry, 8, 0, 7); c.fill();
      c.fillStyle = f.owner === -1 ? NEUTRAL : f.owner === p.team ? FRIEND : ENEMY;
      c.font = 'bold 11px Rajdhani, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(f.id, rx, ry + 1);
    }
    // player arrow
    c.fillStyle = '#ffd76a'; c.beginPath(); c.moveTo(0, -7); c.lineTo(5, 6); c.lineTo(0, 3); c.lineTo(-5, 6); c.closePath(); c.fill();
    c.restore();
    c.strokeStyle = 'rgba(255,255,255,0.25)'; c.lineWidth = 2; c.beginPath(); c.arc(R, R, R - 2, 0, Math.PI * 2); c.stroke();
  }

  drawUnits(c, toM, p, size, range) {
    const g = this.game, now = g.time;
    for (const s of g.soldiers) {
      if (s === p || s.state === 'dead') continue;
      const friendly = s.team === p.team;
      const seen = friendly || s.spotUntil > now || (now - s.lastLoudShot < 1.2 && s.pos.distanceTo(p.pos) < 160);
      if (!seen) continue;
      const [x, y] = toM(s.pos.x, s.pos.z);
      if (range && Math.hypot(x, y) > 1e9) continue;
      c.fillStyle = friendly ? (s.squad === p.squad ? SQUAD : FRIEND) : ENEMY;
      if (s.state === 'downed') { c.fillRect(x - size, y - 1, size * 2, 2); c.fillRect(x - 1, y - size, 2, size * 2); continue; }
      c.save(); c.translate(x, y); c.rotate(-s.yaw);
      c.beginPath(); c.moveTo(0, -size * 1.4); c.lineTo(size, size); c.lineTo(-size, size); c.closePath(); c.fill();
      c.restore();
    }
    for (const pl of g.combat.placed) {
      if (pl.team !== p.team || (pl.type !== 'rally' && pl.type !== 'beacon') || pl.squad !== p.squad) continue;
      const [x, y] = toM(pl.x, pl.z);
      c.fillStyle = pl.type === 'rally' ? '#f0e070' : '#30ff80'; c.fillRect(x - 3, y - 3, 6, 6);
    }
    const sq = p.squad;
    if (sq && sq.order && sq.order.type === 'move') { const [x, y] = toM(sq.order.x, sq.order.z); c.strokeStyle = SQUAD; c.lineWidth = 2; c.beginPath(); c.arc(x, y, 5, 0, 7); c.stroke(); }
  }

  drawMap(canvas, deploy, spawns, selected) {
    const g = this.game, p = g.player, c = canvas.getContext('2d');
    const S = canvas.width;
    c.clearRect(0, 0, S, S);
    c.drawImage(g.world.mapImage, 0, 0, S, S);
    const half = g.world.terrain.half;
    const toM = (x, z) => [(x + half) / (half * 2) * S, (z + half) / (half * 2) * S];
    // play area
    const ph = g.world.def.playHalf;
    const [a0, b0] = toM(-ph, -ph), [a1, b1] = toM(ph, ph);
    c.strokeStyle = 'rgba(255,80,60,0.6)'; c.setLineDash([8, 6]); c.lineWidth = 2; c.strokeRect(a0, b0, a1 - a0, b1 - b0); c.setLineDash([]);
    // HQs
    g.world.def.hq.forEach((h, t) => { const [x, y] = toM(h.x, h.z); c.fillStyle = t === p.team ? FRIEND : ENEMY; c.globalAlpha = 0.25; c.beginPath(); c.arc(x, y, h.r / (half * 2) * S, 0, 7); c.fill(); c.globalAlpha = 1; c.font = 'bold 14px Rajdhani'; c.textAlign = 'center'; c.fillText('HQ', x, y + 5); });
    for (const f of g.mode.flags) {
      const [x, y] = toM(f.x, f.z);
      const col = f.owner === -1 ? NEUTRAL : f.owner === p.team ? FRIEND : ENEMY;
      c.fillStyle = 'rgba(0,0,0,0.55)'; c.beginPath(); c.arc(x, y, 16, 0, 7); c.fill();
      c.strokeStyle = col; c.lineWidth = 3; c.beginPath(); c.arc(x, y, 16, 0, 7); c.stroke();
      c.fillStyle = col; c.font = 'bold 18px Rajdhani'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(f.id, x, y + 1);
      c.font = '600 12px Rajdhani'; c.fillStyle = '#fff'; c.fillText(f.name, x, y + 28);
    }
    c.textBaseline = 'alphabetic';
    if (p.state !== 'dead' || !deploy) this.drawUnits(c, toM, p, 4, 0);
    if (p.state !== 'dead') { const [x, y] = toM(p.pos.x, p.pos.z); c.save(); c.translate(x, y); c.rotate(-p.yaw); c.fillStyle = '#ffd76a'; c.beginPath(); c.moveTo(0, -9); c.lineTo(6, 7); c.lineTo(-6, 7); c.closePath(); c.fill(); c.restore(); }
    if (spawns) {
      for (const sp of spawns) {
        const [x, y] = toM(sp.x, sp.z);
        const on = selected === sp;
        c.fillStyle = on ? '#ffd76a' : sp.kind === 'squad' ? SQUAD : sp.kind === 'rally' ? '#f0e070' : sp.kind === 'beacon' ? '#30ff80' : FRIEND;
        c.strokeStyle = '#000'; c.lineWidth = 2;
        const r = on ? 11 : 8;
        c.beginPath(); c.moveTo(x, y - r); c.lineTo(x + r, y); c.lineTo(x, y + r); c.lineTo(x - r, y); c.closePath(); c.fill(); c.stroke();
        if (on || sp.kind !== 'flag') { c.font = 'bold 12px Rajdhani'; c.fillStyle = '#fff'; c.textAlign = 'center'; c.fillText(sp.label, x, y - r - 5); }
        sp._mx = x; sp._my = y;
      }
    }
  }

  // ---------- 3D markers ----------
  drawMarkers(dt) {
    const g = this.game, p = g.player, c = this.mctx, cam = g.camera;
    const W = this.markers.width, H = this.markers.height, dpr = this.dpr;
    c.clearRect(0, 0, W, H);
    // damage indicators
    for (let i = this.dmg.length - 1; i >= 0; i--) {
      const d = this.dmg[i]; d.t -= dt;
      if (d.t <= 0) { this.dmg.splice(i, 1); continue; }
      c.save(); c.translate(W / 2, H / 2); c.rotate(-d.a);
      c.strokeStyle = `rgba(255,50,40,${Math.min(1, d.t)})`; c.lineWidth = 6 * dpr;
      c.beginPath(); c.arc(0, 0, 90 * dpr, -Math.PI / 2 - 0.25, -Math.PI / 2 + 0.25); c.stroke();
      c.restore();
    }
    if (g.uiBlocking() && p.state === 'dead') return;
    const proj = (x, y, z) => {
      _p.set(x, y, z).applyMatrix4(cam.matrixWorldInverse);
      if (_p.z > -0.2) return null; // behind camera
      _p.applyMatrix4(cam.projectionMatrix);
      return [(_p.x * 0.5 + 0.5) * W, (-_p.y * 0.5 + 0.5) * H];
    };
    const clampEdge = (x, y) => [clamp(x, 30 * dpr, W - 30 * dpr), clamp(y, 30 * dpr, H - 30 * dpr)];
    c.textAlign = 'center'; c.textBaseline = 'middle';
    // flags
    for (const f of g.mode.flags) {
      const sp = proj(f.x, f.y + 7, f.z);
      const col = f.owner === -1 ? NEUTRAL : f.owner === p.team ? FRIEND : ENEMY;
      const dist = Math.hypot(f.x - p.pos.x, f.z - p.pos.z);
      if (!sp) continue;
      const [x, y] = clampEdge(sp[0], sp[1]);
      const ord = p.squad && p.squad.order && p.squad.order.flag === f;
      c.globalAlpha = dist < f.r ? 0.5 : 0.95;
      c.fillStyle = 'rgba(0,0,0,0.5)'; c.beginPath(); c.arc(x, y, 13 * dpr, 0, 7); c.fill();
      c.strokeStyle = col; c.lineWidth = 2.5 * dpr; c.beginPath(); c.arc(x, y, 13 * dpr, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.abs(f.progress)); c.stroke();
      c.fillStyle = col; c.font = `bold ${15 * dpr}px Rajdhani, sans-serif`; c.fillText(f.id, x, y + 1 * dpr);
      c.font = `600 ${11 * dpr}px Rajdhani, sans-serif`; c.fillStyle = '#fff'; c.fillText(`${Math.round(dist)}m`, x, y + 22 * dpr);
      if (ord) { c.fillStyle = SQUAD; c.fillText(p.squad.order.type.toUpperCase(), x, y - 22 * dpr); }
      c.globalAlpha = 1;
    }
    // squad move marker
    const sq = p.squad;
    if (sq && sq.order && sq.order.type === 'move') {
      const sp = proj(sq.order.x, g.world.terrain.heightAt(sq.order.x, sq.order.z) + 2, sq.order.z);
      if (sp) { c.strokeStyle = SQUAD; c.lineWidth = 2 * dpr; c.beginPath(); c.arc(sp[0], sp[1], 8 * dpr, 0, 7); c.stroke(); c.fillStyle = SQUAD; c.font = `600 ${11 * dpr}px Rajdhani`; c.fillText('MOVE', sp[0], sp[1] - 16 * dpr); }
    }
    const now = g.time;
    const nameTags = g.settings.get('nameTags');
    for (const s of g.soldiers) {
      if (s === p || s.state === 'dead') continue;
      const d = s.pos.distanceTo(cam.position);
      if (s.team === p.team) {
        const squadMate = s.squad === p.squad;
        if (s.state === 'downed' && d < 90) {
          const sp = proj(s.pos.x, s.pos.y + 1.0, s.pos.z);
          if (sp) { c.fillStyle = '#ff5a4a'; const r = 7 * dpr; c.fillRect(sp[0] - r, sp[1] - r * 0.33, r * 2, r * 0.66); c.fillRect(sp[0] - r * 0.33, sp[1] - r, r * 0.66, r * 2); c.font = `600 ${10 * dpr}px Rajdhani`; c.fillStyle = '#fff'; c.fillText(`${Math.round(d)}m`, sp[0], sp[1] + 14 * dpr); }
          continue;
        }
        if (!nameTags || d > (squadMate ? 250 : 45)) continue;
        const sp = proj(s.pos.x, s.pos.y + s.bodyH + 0.5, s.pos.z);
        if (!sp) continue;
        c.fillStyle = squadMate ? SQUAD : FRIEND;
        c.globalAlpha = clamp(1.3 - d / (squadMate ? 250 : 45), 0.35, 0.95);
        c.beginPath(); c.moveTo(sp[0] - 5 * dpr, sp[1] - 4 * dpr); c.lineTo(sp[0] + 5 * dpr, sp[1] - 4 * dpr); c.lineTo(sp[0], sp[1] + 3 * dpr); c.closePath(); c.fill();
        if (d < 30) { c.font = `600 ${11 * dpr}px Rajdhani`; c.fillText(s.name, sp[0], sp[1] - 12 * dpr); }
        c.globalAlpha = 1;
      } else if (s.spotUntil > now && s.state === 'alive') {
        const sp = proj(s.pos.x, s.pos.y + s.bodyH + 0.45, s.pos.z);
        if (!sp) continue;
        // only when you could actually see them: no markers through walls, terrain or smoke
        const hs = s.hitSpheres(), cp = cam.position, coll = g.world.collision;
        const seen = (coll.los(cp.x, cp.y, cp.z, hs[0][0], hs[0][1], hs[0][2]) || coll.los(cp.x, cp.y, cp.z, hs[1][0], hs[1][1], hs[1][2])) && coll.softVisibility(cp.x, cp.y, cp.z, hs[1][0], hs[1][1], hs[1][2], now) > 0.1;
        if (!seen) continue;
        const r = 5 * dpr;
        c.fillStyle = ENEMY;
        c.beginPath(); c.moveTo(sp[0], sp[1] - r); c.lineTo(sp[0] + r, sp[1]); c.lineTo(sp[0], sp[1] + r); c.lineTo(sp[0] - r, sp[1]); c.closePath(); c.fill();
      }
    }
    // incoming grenades / launcher rounds near the player
    for (const pr of g.combat.projectiles) {
      if (!['frag', 'impact', 'launcher', 'flash'].includes(pr.type)) continue;
      const d = Math.hypot(pr.x - p.pos.x, pr.y - p.pos.y, pr.z - p.pos.z);
      if (d > 12 || p.state === 'dead') continue;
      let sp = proj(pr.x, pr.y + 0.3, pr.z);
      const pulse = 0.6 + 0.4 * Math.sin(now * 18);
      if (!sp) { const rel = Math.atan2(pr.x - p.pos.x, -(pr.z - p.pos.z)) + p.yaw; sp = [W / 2 + Math.sin(rel) * 140 * dpr, H / 2 - Math.cos(rel) * 140 * dpr]; }
      const [gx, gy] = clampEdge(sp[0], sp[1]);
      c.globalAlpha = pulse;
      c.fillStyle = 'rgba(0,0,0,0.55)'; c.beginPath(); c.arc(gx, gy, 15 * dpr, 0, 7); c.fill();
      c.strokeStyle = '#ff5a3a'; c.lineWidth = 2.5 * dpr; c.beginPath(); c.arc(gx, gy, 15 * dpr, 0, 7); c.stroke();
      c.fillStyle = '#ff5a3a'; c.beginPath(); c.arc(gx, gy + 2 * dpr, 6 * dpr, 0, 7); c.fill(); c.fillRect(gx - 2 * dpr, gy - 9 * dpr, 4 * dpr, 6 * dpr);
      c.font = `700 ${10 * dpr}px Rajdhani, sans-serif`; c.fillText(`${d.toFixed(0)}m`, gx, gy + 26 * dpr);
      c.globalAlpha = 1;
    }
    // rally / beacon
    for (const pl of g.combat.placed) {
      if (pl.team !== p.team || pl.squad !== p.squad || (pl.type !== 'rally' && pl.type !== 'beacon')) continue;
      const sp = proj(pl.x, pl.y + 1.5, pl.z);
      if (!sp) continue;
      c.fillStyle = pl.type === 'rally' ? '#f0e070' : '#30ff80'; c.font = `bold ${11 * dpr}px Rajdhani`; c.fillText(pl.type === 'rally' ? '▲ RALLY' : '▲ BEACON', sp[0], sp[1]);
    }
    // laser dot
    if (p.state === 'alive' && p.gun && p.gun.stats.laser && p.adsT < 0.6) {
      const e = p.eye(new THREE.Vector3()), dir = p.aimDir(new THREE.Vector3());
      const h = g.world.collision.raycast(e.x, e.y, e.z, dir.x, dir.y, dir.z, 60, {});
      if (h) { const sp = proj(h.x, h.y, h.z); if (sp) { c.fillStyle = 'rgba(255,40,40,0.9)'; c.beginPath(); c.arc(sp[0], sp[1], 2.5 * dpr, 0, 7); c.fill(); } }
    }
  }

  drawBoard() {
    const g = this.game, p = g.player;
    const team = (t) => {
      const list = g.teams[t].slice().sort((a, b) => b.stats.score - a.stats.score);
      const tdm = g.mode.type === 'tdm';
      return `<div class="sbteam t${t === p.team ? 'f' : 'e'}"><div class="sbh"><b>${TEAM_COLORS[t].name}</b><span>${tdm ? g.mode.kills[t] + ' kills' : g.mode.tickets[t] + ' tickets'}</span></div>
        <table><tr><th></th><th>Name</th><th>Squad</th><th>K</th><th>D</th><th>A</th><th>Rev</th><th>Score</th></tr>
        ${list.map(s => `<tr class="${s === p ? 'me' : ''} ${s.state}"><td><i style="background:${CLASSES[s.cls].color}"></i></td><td>${s.squad && s.squad.leader === s ? '★ ' : ''}${s.name}</td><td>${s.squad ? s.squad.name : ''}</td><td>${s.stats.kills}</td><td>${s.stats.deaths}</td><td>${s.stats.assists}</td><td>${s.stats.revives}</td><td>${s.stats.score}</td></tr>`).join('')}</table></div>`;
    };
    this.board.innerHTML = `<div class="sbtitle">${g.world.def.name} · ${g.modeName}</div><div class="sbcols">${team(p.team)}${team(1 - p.team)}</div>`;
  }

  dispose() { this.root.remove(); }
}
