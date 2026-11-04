// Menus: main, match setup, deploy (class/loadout/spawn), pause with settings & controls, end of round, loading.
import { SETTINGS_SCHEMA, PRESETS } from '../core/settings.js';
import { MAPS } from '../world/maps.js';
import { MODES } from '../game/mode.js';
import { CLASSES, WEAPONS, ATTACHMENTS, allowedAttachments, weaponsForClass, defaultAttachments, PISTOLS, THROWABLES, GADGETS } from '../data/loadout.js';
import { TEAM_COLORS } from '../entities/models.js';

const $ = (sel, root = document) => root.querySelector(sel);
function h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

const CONTROLS = [
  ['W A S D', 'Move'], ['Shift', 'Sprint'], ['Space', 'Jump / vault / climb'], ['C / Ctrl', 'Crouch (toggle / hold)'], ['Z', 'Prone'],
  ['Q / E', 'Lean left / right'], ['Mouse 1', 'Fire'], ['Mouse 2', 'Aim down sights · detonate C4'], ['R', 'Reload'], ['B', 'Fire mode'],
  ['1 – 5', 'Primary, sidearm, gadgets, throwable'], ['Wheel', 'Cycle slots'], ['G', 'Quick-throw grenade'], ['X', 'Bandage (stops bleeding)'],
  ['F (hold)', 'Revive downed teammate · heal with medkit'], ['T', 'Spot enemy · squad leader: order flag / move / follow'], ['V', 'Flashlight'],
  ['Tab', 'Scoreboard'], ['M', 'Map'], ['Esc', 'Pause / settings'],
];

export class Menus {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('ui');
    this.screens = {};
    this.loadout = this.loadSavedLoadout();
  }

  loadSavedLoadout() {
    try { const v = JSON.parse(localStorage.getItem('fireline.loadout') || 'null'); if (v && v.cls && WEAPONS[v.primary]) return v; } catch (e) { /* ignore */ }
    return { cls: 'assault', primary: 'm4a1', att: defaultAttachments('m4a1'), secondary: 'm9', satt: { sight: 'iron', barrel: 'none', grip: 'none', rail: 'none' }, throwable: 'frag', armor: 'light' };
  }
  saveLoadout() { try { localStorage.setItem('fireline.loadout', JSON.stringify(this.loadout)); } catch (e) { /* ignore */ } }

  hideAll() { for (const k in this.screens) this.screens[k].style.display = 'none'; }
  screen(name, html) {
    if (this.screens[name]) this.screens[name].remove();
    const e = h(`<div class="screen ${name}">${html}</div>`);
    this.root.appendChild(e);
    this.screens[name] = e;
    return e;
  }
  click(e) { e.addEventListener('click', () => this.app.audio.play2d('ui', { vol: 0.3 })); }

  // ---------------- main ----------------
  showMain() {
    this.hideAll();
    const s = this.screen('main', `
      <div class="title"><h1>FIRE<span>LINE</span></h1><div class="sub">16 vs 16 · infantry combat · destructible battlefield</div></div>
      <div class="menu-col">
        <button class="btn big primary" data-a="play">Play</button>
        <button class="btn big" data-a="settings">Settings</button>
        <button class="btn big" data-a="controls">Controls</button>
      </div>
      <div class="foot">All models, textures and sounds are generated procedurally at runtime.</div>`);
    s.querySelector('[data-a=play]').onclick = () => this.showSetup();
    s.querySelector('[data-a=settings]').onclick = () => this.showSettings(() => this.showMain());
    s.querySelector('[data-a=controls]').onclick = () => this.showControls(() => this.showMain());
    s.querySelectorAll('button').forEach(b => this.click(b));
    s.style.display = 'flex';
  }

  showSetup() {
    this.hideAll();
    const cfg = this.app.matchConfig;
    const maps = Object.values(MAPS);
    const s = this.screen('setup', `
      <div class="panel wide">
        <h2>Match setup</h2>
        <div class="mapcards">${maps.map(m => `<div class="mapcard${cfg.map === m.id ? ' on' : ''}" data-map="${m.id}"><div class="mc-img mc-${m.id}"></div><b>${m.name}</b><span>${m.size}m × ${m.size}m · ${m.biome}</span><p>${m.desc}</p></div>`).join('')}</div>
        <div class="row3">
          <label>Mode<select data-k="mode">${Object.entries(MODES).map(([k, v]) => `<option value="${k}"${cfg.mode === k ? ' selected' : ''}>${v.name}</option>`).join('')}</select><small class="mdesc"></small></label>
          <label>Time of day<select data-k="time"><option value="default">Map default</option>${['morning', 'noon', 'afternoon', 'dusk', 'night'].map(t => `<option value="${t}"${cfg.time === t ? ' selected' : ''}>${t[0].toUpperCase() + t.slice(1)}</option>`).join('')}</select></label>
          <label>Bot difficulty<select data-k="difficulty">${['recruit', 'regular', 'veteran', 'elite'].map(t => `<option value="${t}"${this.app.settings.get('difficulty') === t ? ' selected' : ''}>${t[0].toUpperCase() + t.slice(1)}</option>`).join('')}</select></label>
          <label>Your team<select data-k="team"><option value="0"${cfg.team === 0 ? ' selected' : ''}>${TEAM_COLORS[0].name}</option><option value="1"${cfg.team === 1 ? ' selected' : ''}>${TEAM_COLORS[1].name}</option></select></label>
          <label>Tickets / kill limit<select data-k="tickets"><option value="0">Mode default</option><option value="150">150</option><option value="250">250</option><option value="400">400</option><option value="600">600</option></select></label>
          <label>Callsign<input data-k="name" maxlength="14" value="${cfg.name}"></label>
        </div>
        <div class="note">16 vs 16 — you plus 31 AI soldiers in 8 squads of four.</div>
        <div class="btnrow"><button class="btn" data-a="back">Back</button><button class="btn primary" data-a="start">Start match</button></div>
      </div>`);
    const md = s.querySelector('.mdesc');
    const updDesc = () => { md.textContent = MODES[s.querySelector('[data-k=mode]').value].desc; };
    updDesc();
    s.querySelector('[data-k=mode]').onchange = updDesc;
    s.querySelectorAll('.mapcard').forEach(c => c.onclick = () => { s.querySelectorAll('.mapcard').forEach(x => x.classList.remove('on')); c.classList.add('on'); cfg.map = c.dataset.map; this.app.audio.play2d('ui', { vol: 0.3 }); });
    s.querySelector('[data-a=back]').onclick = () => this.showMain();
    s.querySelector('[data-a=start]').onclick = () => {
      cfg.mode = s.querySelector('[data-k=mode]').value;
      cfg.time = s.querySelector('[data-k=time]').value;
      cfg.team = Number(s.querySelector('[data-k=team]').value);
      cfg.tickets = Number(s.querySelector('[data-k=tickets]').value);
      cfg.name = (s.querySelector('[data-k=name]').value || 'You').slice(0, 14);
      this.app.settings.set('difficulty', s.querySelector('[data-k=difficulty]').value);
      this.app.startMatch();
    };
    s.querySelectorAll('button').forEach(b => this.click(b));
    s.style.display = 'flex';
  }

  showLoading(text, p) {
    let s = this.screens.loading;
    if (!s || s.style.display === 'none') { this.hideAll(); s = this.screen('loading', `<div class="loadbox"><h2>FIRE<span>LINE</span></h2><div class="lt"></div><div class="lbar"><div></div></div><div class="tip"></div></div>`); s.style.display = 'flex'; }
    s.querySelector('.lt').textContent = text;
    s.querySelector('.lbar div').style.width = `${Math.round(p * 100)}%`;
    const tips = ['Downed teammates can be revived by anyone — medics revive to full health.', 'Bandage [X] to stop bleeding before it drops you.', 'Engineers can blow holes in walls with RPGs and C4.', 'Suppressors keep you off the enemy minimap.', 'Bots react to gunfire, footsteps and muzzle flashes. Flank them.', 'Squad leaders press [T] on a flag to give orders.', 'Spawn on your squad leader or a rally point to stay in the fight.'];
    if (!s.dataset.tip) { s.dataset.tip = 1; s.querySelector('.tip').textContent = tips[Math.floor(Math.random() * tips.length)]; }
  }

  // ---------------- deploy ----------------
  showDeploy(game) {
    this.hideAll();
    const s = this.screen('deploy', `
      <div class="deploy-left panel">
        <h3>Class</h3><div class="classes"></div>
        <div class="cdesc"></div>
        <h3>Primary</h3><div class="wlist"></div>
        <div class="wstats"></div>
        <div class="atts"></div>
        <h3>Sidearm & equipment</h3>
        <div class="row2"><label>Sidearm<select data-k="secondary"></select></label><label>Throwable<select data-k="throwable"></select></label><label>Armor<select data-k="armor"><option value="light">Light (faster)</option><option value="heavy">Heavy (−14% body dmg)</option></select></label><label>Sidearm barrel<select data-k="sbarrel"><option value="none">None</option><option value="suppressor">Suppressor</option></select></label></div>
        <div class="gadgets"></div>
      </div>
      <div class="deploy-right panel">
        <div class="dhead"><b class="dteam"></b><span class="dsquad"></span></div>
        <canvas class="dmap" width="720" height="720"></canvas>
        <div class="dfoot"><div class="dkill"></div><div class="dspawn"></div><button class="btn primary big dbtn">Deploy</button></div>
      </div>`);
    this.deployEl = s;
    this.game = game;
    this.buildClassUI();
    const canvas = s.querySelector('.dmap');
    canvas.onclick = (ev) => {
      const r = canvas.getBoundingClientRect();
      const x = (ev.clientX - r.left) / r.width * canvas.width, y = (ev.clientY - r.top) / r.height * canvas.height;
      let best = null, bd = 30;
      for (const sp of this.spawns || []) { const d = Math.hypot(sp._mx - x, sp._my - y); if (d < bd) { bd = d; best = sp; } }
      if (best) { this.selectedSpawn = best; this.app.audio.play2d('ui', { vol: 0.3 }); }
    };
    s.querySelector('.dbtn').onclick = () => this.tryDeploy();
    s.style.display = 'flex';
    this.selectedSpawn = null;
  }

  buildClassUI() {
    const s = this.deployEl, lo = this.loadout;
    s.querySelector('.classes').innerHTML = Object.entries(CLASSES).map(([k, c]) => `<button class="cls${lo.cls === k ? ' on' : ''}" data-c="${k}" style="--cc:${c.color}"><b>${c.name}</b></button>`).join('');
    s.querySelectorAll('.cls').forEach(b => b.onclick = () => {
      lo.cls = b.dataset.c;
      const list = weaponsForClass(lo.cls);
      if (!list.includes(lo.primary)) { lo.primary = list[0]; lo.att = defaultAttachments(lo.primary); }
      if (lo.cls === 'medic' || lo.cls === 'leader') { if (!['smoke', 'frag'].includes(lo.throwable)) lo.throwable = 'smoke'; }
      this.app.audio.play2d('ui', { vol: 0.3 });
      this.buildClassUI();
    });
    const C = CLASSES[lo.cls];
    s.querySelector('.cdesc').innerHTML = `<b style="color:${C.color}">${C.name}</b> — ${C.desc}${lo.cls === 'leader' ? '<br><i>You will lead your squad. Press [T] at a flag to order it.</i>' : ''}`;
    const list = weaponsForClass(lo.cls);
    s.querySelector('.wlist').innerHTML = list.map(w => `<button class="wbtn${lo.primary === w ? ' on' : ''}" data-w="${w}"><b>${WEAPONS[w].name}</b><span>${WEAPONS[w].type.toUpperCase()}</span></button>`).join('');
    s.querySelectorAll('.wbtn').forEach(b => b.onclick = () => { lo.primary = b.dataset.w; lo.att = defaultAttachments(lo.primary); this.app.audio.play2d('ui', { vol: 0.3 }); this.buildClassUI(); });
    const w = WEAPONS[lo.primary];
    const bar = (label, v) => `<div class="stat"><span>${label}</span><div><i style="width:${Math.max(4, Math.min(100, v))}%"></i></div></div>`;
    s.querySelector('.wstats').innerHTML = bar('Damage', w.dmg * (w.pellets || 1) / 1.1) + bar('Fire rate', w.rpm / 11) + bar('Range', w.r1 / 4) + bar('Control', 100 - w.recoilV * 40) + bar('Mobility', (w.moveMul - 0.8) * 400) + `<div class="wnum">${w.rpm} RPM · ${w.vel} m/s · ${w.mag} rds · ${w.modes.join('/')}</div>`;
    s.querySelector('.atts').innerHTML = ['sight', 'barrel', 'grip', 'rail'].map(slot => `<label>${slot[0].toUpperCase() + slot.slice(1)}<select data-slot="${slot}">${allowedAttachments(lo.primary, slot).map(a => `<option value="${a}"${lo.att[slot] === a ? ' selected' : ''}>${ATTACHMENTS[slot][a].name}</option>`).join('')}</select></label>`).join('');
    s.querySelectorAll('.atts select').forEach(sel => sel.onchange = () => { lo.att[sel.dataset.slot] = sel.value; this.saveLoadout(); });
    const sec = s.querySelector('[data-k=secondary]');
    sec.innerHTML = PISTOLS.map(p => `<option value="${p}"${lo.secondary === p ? ' selected' : ''}>${WEAPONS[p].name}</option>`).join('');
    sec.onchange = () => { lo.secondary = sec.value; this.saveLoadout(); };
    const th = s.querySelector('[data-k=throwable]');
    th.innerHTML = THROWABLES.map(t => `<option value="${t}"${lo.throwable === t ? ' selected' : ''}>${GADGETS[t].name}</option>`).join('');
    th.onchange = () => { lo.throwable = th.value; this.saveLoadout(); };
    const ar = s.querySelector('[data-k=armor]'); ar.value = lo.armor || 'light'; ar.onchange = () => { lo.armor = ar.value; this.saveLoadout(); };
    const sb = s.querySelector('[data-k=sbarrel]'); sb.value = lo.satt.barrel; sb.onchange = () => { lo.satt.barrel = sb.value; this.saveLoadout(); };
    s.querySelector('.gadgets').innerHTML = `<h3>Class gadgets</h3>` + C.gadgets.map((g, i) => `<div class="gad"><i>${i + 3}</i>${GADGETS[g].name}${GADGETS[g].count !== Infinity ? ` ×${GADGETS[g].count}` : ''}</div>`).join('') + `<div class="gad"><i>5</i>${GADGETS[lo.throwable].name} ×${C.throwables}</div><div class="gad"><i>X</i>Bandage ×4</div>`;
    this.saveLoadout();
  }

  updateDeploy(game) {
    const s = this.deployEl;
    if (!s || s.style.display === 'none') return;
    const p = game.player;
    this.spawns = game.spawnOptions(p);
    if (!this.selectedSpawn || !this.spawns.find(x => x.key === this.selectedSpawn.key)) {
      this.selectedSpawn = this.spawns.find(x => x.kind === 'squad') || this.spawns.find(x => x.kind === 'flag') || this.spawns[0];
    } else this.selectedSpawn = this.spawns.find(x => x.key === this.selectedSpawn.key);
    game.hud.drawMap(s.querySelector('.dmap'), true, this.spawns, this.selectedSpawn);
    const t = Math.max(0, game.respawnAt - game.time);
    const btn = s.querySelector('.dbtn');
    btn.textContent = t > 0 ? `Deploy in ${t.toFixed(1)}s` : 'Deploy [Space]';
    btn.classList.toggle('wait', t > 0);
    s.querySelector('.dteam').textContent = TEAM_COLORS[p.team].name;
    s.querySelector('.dteam').style.color = TEAM_COLORS[p.team].css;
    s.querySelector('.dsquad').textContent = p.squad ? `${p.squad.name} squad · ${game.modeName} · ${game.world.def.name}` : '';
    s.querySelector('.dspawn').textContent = this.selectedSpawn ? `Spawn: ${this.selectedSpawn.label}` : '';
    const k = game.lastDeath;
    s.querySelector('.dkill').innerHTML = k ? `${k.killer ? `Killed by <b style="color:#ff6a5a">${k.killer}</b>` : 'You died'} ${k.weapon ? `· ${k.weapon}` : ''} ${k.dist ? `· ${Math.round(k.dist)}m` : ''}${k.head ? ' · headshot' : ''}` : 'Choose your class, loadout and spawn point.';
    if (game.input.hit('Space') || game.input.hit('Enter')) this.tryDeploy();
  }

  tryDeploy() {
    const g = this.game;
    if (!g || g.time < g.respawnAt || !this.selectedSpawn) return;
    this.saveLoadout();
    g.deployPlayer(JSON.parse(JSON.stringify(this.loadout)), this.selectedSpawn);
  }

  // ---------------- pause / settings ----------------
  showPause(game) {
    this.hideAll();
    const s = this.screen('pause', `
      <div class="panel">
        <h2>Paused</h2>
        <div class="menu-col">
          <button class="btn big primary" data-a="resume">Resume</button>
          ${game.player.state !== 'dead' ? '<button class="btn big" data-a="redeploy">Redeploy (change class)</button>' : ''}
          <button class="btn big" data-a="settings">Settings</button>
          <button class="btn big" data-a="controls">Controls</button>
          <button class="btn big" data-a="quit">Leave match</button>
        </div>
      </div>`);
    s.querySelector('[data-a=resume]').onclick = () => this.app.resume();
    const rd = s.querySelector('[data-a=redeploy]'); if (rd) rd.onclick = () => { game.player.die(null, 'Redeploy', false, true); this.app.resume(); };
    s.querySelector('[data-a=settings]').onclick = () => this.showSettings(() => this.showPause(game));
    s.querySelector('[data-a=controls]').onclick = () => this.showControls(() => this.showPause(game));
    s.querySelector('[data-a=quit]').onclick = () => this.app.quitMatch();
    s.querySelectorAll('button').forEach(b => this.click(b));
    s.style.display = 'flex';
  }

  showSettings(back) {
    this.hideAll();
    const S = this.app.settings;
    let html = '<div class="panel wide settings"><h2>Settings</h2><div class="setgrid">';
    for (const it of SETTINGS_SCHEMA) {
      if (it.group) { html += `<h3>${it.group}</h3>`; continue; }
      const v = S.get(it.key);
      if (it.type === 'bool') html += `<label class="set"><span>${it.label}</span><input type="checkbox" data-k="${it.key}"${v ? ' checked' : ''}></label>`;
      else if (it.type === 'select') html += `<label class="set"><span>${it.label}${it.hint ? `<small>${it.hint}</small>` : ''}</span><select data-k="${it.key}">${it.options.map(o => `<option value="${o}"${v === o ? ' selected' : ''}>${o}</option>`).join('')}</select></label>`;
      else html += `<label class="set"><span>${it.label}</span><input type="range" data-k="${it.key}" min="${it.min}" max="${it.max}" step="${it.step}" value="${v}"><em>${v}</em></label>`;
    }
    html += '</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>';
    const s = this.screen('settings', html);
    s.querySelectorAll('[data-k]').forEach(inp => {
      const k = inp.dataset.k;
      const evt = inp.type === 'range' ? 'input' : 'change';
      inp.addEventListener(evt, () => {
        let v;
        if (inp.type === 'checkbox') v = inp.checked;
        else if (inp.type === 'range') { v = Number(inp.value); inp.nextElementSibling.textContent = v; }
        else v = inp.value;
        S.set(k, v);
        if (k === 'preset' && PRESETS[v]) this.showSettings(back);
        else if (k !== 'preset') { const ps = s.querySelector('[data-k=preset]'); if (ps) ps.value = S.get('preset'); }
      });
    });
    s.querySelector('[data-a=back]').onclick = back;
    s.style.display = 'flex';
  }

  showControls(back) {
    this.hideAll();
    const s = this.screen('controls', `<div class="panel"><h2>Controls</h2><div class="ctl">${CONTROLS.map(([k, v]) => `<div><kbd>${k}</kbd><span>${v}</span></div>`).join('')}</div><div class="btnrow"><button class="btn" data-a="back">Back</button></div></div>`);
    s.querySelector('[data-a=back]').onclick = back;
    s.style.display = 'flex';
  }

  // ---------------- end ----------------
  showEnd(game, winner) {
    this.hideAll();
    const p = game.player;
    const won = winner === p.team;
    const all = game.soldiers.slice().sort((a, b) => b.stats.score - a.stats.score);
    const mvp = all[0];
    const rank = all.indexOf(p) + 1;
    let xp = 0; try { xp = Number(localStorage.getItem('fireline.xp') || 0); } catch (e) { /* ignore */ }
    const gained = p.stats.score + (won ? 500 : 150);
    const rankOf = (v) => Math.floor(Math.sqrt(v / 400)) + 1;
    const before = rankOf(xp); xp += gained; const after = rankOf(xp);
    try { localStorage.setItem('fireline.xp', String(xp)); } catch (e) { /* ignore */ }
    const s = this.screen('end', `
      <div class="panel wide">
        <h1 class="${winner === -1 ? 'draw' : won ? 'win' : 'lose'}">${winner === -1 ? 'DRAW' : won ? 'VICTORY' : 'DEFEAT'}</h1>
        <div class="endsub">${game.world.def.name} · ${game.modeName} · ${TEAM_COLORS[0].name} ${game.mode.type === 'tdm' ? game.mode.kills[0] : game.mode.tickets[0]} — ${game.mode.type === 'tdm' ? game.mode.kills[1] : game.mode.tickets[1]} ${TEAM_COLORS[1].name}</div>
        <div class="endstats">
          <div><b>${p.stats.score}</b><span>Score (#${rank})</span></div><div><b>${p.stats.kills}</b><span>Kills</span></div><div><b>${p.stats.deaths}</b><span>Deaths</span></div>
          <div><b>${p.stats.assists}</b><span>Assists</span></div><div><b>${p.stats.revives}</b><span>Revives</span></div><div><b>${p.stats.caps}</b><span>Captures</span></div>
        </div>
        <div class="mvp">+${gained} XP · Rank ${after}${after > before ? ' <b style="color:#ffcc4d">RANK UP!</b>' : ''} (${xp} XP total)</div>
        <div class="mvp">MVP: <b style="color:${TEAM_COLORS[mvp.team].css}">${mvp.name}</b> — ${mvp.stats.score} pts, ${mvp.stats.kills} kills</div>
        <div class="btnrow"><button class="btn" data-a="menu">Main menu</button><button class="btn primary" data-a="again">Play again</button></div>
      </div>`);
    s.querySelector('[data-a=menu]').onclick = () => this.app.quitMatch();
    s.querySelector('[data-a=again]').onclick = () => this.app.startMatch();
    s.querySelectorAll('button').forEach(b => this.click(b));
    s.style.display = 'flex';
  }
}
