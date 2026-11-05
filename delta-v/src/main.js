import * as THREE from 'three';
import { World, MAPS } from './world.js';
import { Effects } from './effects.js';
import { Audio } from './audio.js';
import { Combat } from './combat.js';
import { HUD } from './hud.js';
import { Bot } from './bot.js';
import { Soldier, MODES, MODE_DESC, TEAM_COLORS, TEAM_NAMES, BODY_R, makeGunMesh, TOWERS, NOZ_DIR, HIT_THRESH } from './soldier.js';
import { WEAPONS, WEAPON_IDS, WEAPON_BLURB } from './weapons.js';
import { Graphics, PRESETS, normalizeGfx } from './graphics.js';
import { buildFPArm, buildGrenade } from './models.js';
import { THROW_TIME } from './soldier.js';
import { clamp, rand, raySphere } from './math.js';

const STEP = 1 / 120;
const CALLSIGNS = ['VEGA', 'KESTREL', 'NOMAD', 'APEX', 'ORBIT', 'HALO', 'RAZOR', 'TALON', 'DRIFT', 'NOVA', 'SPECTER', 'CINDER', 'ECHO', 'PULSAR', 'QUASAR', 'ZENITH'];
export const ACTIONS = [
  ['forward', 'Move forward', 'KeyW'], ['back', 'Move back', 'KeyS'], ['left', 'Move left', 'KeyA'], ['right', 'Move right', 'KeyD'],
  ['fire', 'Fire', 'Mouse0'], ['ads', 'Aim down sights (hold)', 'Mouse2'],
  ['up', 'Move up', 'Space'], ['down', 'Move down', 'ShiftLeft'], ['rollLeft', 'Roll left', 'KeyQ'], ['rollRight', 'Roll right', 'KeyE'],
  ['brake', 'Match velocity (brake)', 'KeyC'], ['killRot', 'Kill rotation', 'KeyX'], ['grab', 'Grab / release', 'KeyF'],
  ['reload', 'Reload', 'KeyR'], ['grenade', 'Grenade', 'KeyG'], ['melee', 'Momentum hammer', 'KeyV'],
  ['weapon1', 'Primary weapon', 'Digit1'], ['weapon2', 'Secondary weapon', 'Digit2'],
  ['nextWeapon', 'Next weapon', 'WheelDown'], ['prevWeapon', 'Previous weapon', 'WheelUp'],
  ['mode', 'Cycle RCS mode', 'KeyT'], ['lockRef', 'Lock velocity reference', 'KeyL'], ['grid', 'Reference grid', 'KeyH'], ['board', 'Scoreboard', 'Tab'],
  // newer actions start unbound: assign them under Controls & keybinds
  ['pushOff', 'Push off (hold while holding on)', ''], ['adsToggle', 'Aim down sights (toggle)', ''],
  ['lastWeapon', 'Last used weapon', ''], ['fullStop', 'Full stop (brake + kill rotation)', ''],
];
const DEFAULT_BINDS = Object.fromEntries(ACTIONS.map((a) => [a[0], a[2]]));
const DEFAULT_RULES = { recoil: true, breaches: true, knockback: true, thrusterDamage: true, infiniteGas: false };
const DEFAULTS = { sens: 1.0, difficulty: 'hard', mode: 1, teamSize: 5, scoreLimit: 30, volume: 0.6, fov: 80, invertY: false, outlines: true, map: 'hangar', loadout: ['rifle', 'shotgun'], dmgNumbers: true, gfx: { preset: 'high', ...PRESETS.high } };

// how well each weapon suits each map (bots weight their loadout picks by this)
const MAP_WEIGHTS = {
  spin: { rifle: 1.0, shotgun: 0.8, gyrojet: 0.7, recoilless: 0.75, maser: 0.9 },
  hangar: { rifle: 1.0, shotgun: 0.95, gyrojet: 0.5, recoilless: 0.6, maser: 0.85 },
  yard: { rifle: 1.0, shotgun: 0.3, gyrojet: 0.95, recoilless: 0.85, maser: 0.9 },
};
const LONG = new Set(['rifle', 'gyrojet', 'recoilless', 'maser']);

export function keyName(code) {
  if (!code) return '—';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num' + code.slice(6);
  const mouse = { Mouse0: 'LMB', Mouse1: 'MMB', Mouse2: 'RMB', Mouse3: 'Mouse 4', Mouse4: 'Mouse 5', WheelUp: 'Wheel ↑', WheelDown: 'Wheel ↓' };
  if (mouse[code]) return mouse[code];
  const map = { Space: 'Space', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', ControlLeft: 'L-Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'L-Alt', AltRight: 'R-Alt', Tab: 'Tab', CapsLock: 'Caps', Backquote: '`', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Enter: 'Enter', Backspace: 'Bksp' };
  return map[code] || code;
}
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q = new THREE.Quaternion();

/**
 * Raw input. Keyboard keys use KeyboardEvent.code; mouse buttons are 'Mouse0'..'Mouse4' and the wheel is
 * 'WheelUp' / 'WheelDown' (one-frame presses), so every action can be bound to any of them.
 */
class Input {
  constructor(el) {
    this.keys = new Set();
    this.pressed = new Set();
    this.mouse = { dx: 0, dy: 0 };
    this.el = el;
    const takeCapture = (code, e) => {
      if (!this.capture) return false;
      e.preventDefault(); e.stopPropagation();
      const cb = this.capture; this.capture = null; cb(code);
      return true;
    };
    window.addEventListener('keydown', (e) => {
      if (takeCapture(e.code, e)) return;
      if (e.code === 'Tab' || e.code === 'Space' || (e.code.startsWith('Arrow') && !(e.target && e.target.tagName === 'SELECT'))) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); });
    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === el || this.forceMouse) { this.mouse.dx += e.movementX || 0; this.mouse.dy += e.movementY || 0; }
    });
    window.addEventListener('mousedown', (e) => { takeCapture('Mouse' + e.button, e); }, true);
    el.addEventListener('mousedown', (e) => {
      const c = 'Mouse' + e.button;
      if (!this.keys.has(c)) this.pressed.add(c);
      this.keys.add(c);
      if (e.button === 1) e.preventDefault();
    });
    window.addEventListener('mouseup', (e) => { this.keys.delete('Mouse' + e.button); });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('wheel', (e) => {
      if (!e.deltaY) return;
      const c = e.deltaY > 0 ? 'WheelDown' : 'WheelUp';
      if (this.capture) { const cb = this.capture; this.capture = null; cb(c); return; }
      this.pressed.add(c);
    }, { passive: true });
  }
  down(c) { return !!c && this.keys.has(c); }
  hit(c) { return !!c && this.pressed.has(c); }
  endFrame() { this.pressed.clear(); this.mouse.dx = this.mouse.dy = 0; }
}

class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x02030a);
    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.04, 6000);
    this.scene.add(this.camera);
    this.settings = this.loadSettings();
    this.time = 0;
    this.state = 'menu';
    this.world = new World(this.scene, this.settings.map);
    this.gfx = new Graphics(this.renderer, this.scene, this.camera);
    this.fx = new Effects(this.scene);
    this.audio = new Audio();
    this.audio.setVolume(this.settings.volume);
    this.combat = new Combat(this);
    this.hud = new HUD(this, document.getElementById('hud'));
    this.input = new Input(this.canvas);
    this.soldiers = []; this.bots = [];
    this.intel = [new Map(), new Map()];
    this.teamScore = [0, 0];
    this.showGrid = false;
    this.buildViewmodel();
    this.buildGrid();
    this.acc = 0;
    this.last = performance.now();
    this.menuCam = 0;
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('pointerlockchange', () => this.onLockChange());
    document.addEventListener('pointerlockerror', () => { if (!this.input.forceMouse) { this.input.forceMouse = true; if (this.state === 'playing') this.hud.message('POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES', '#ffcc4d', 4); } });
    this.setupUI();
    this.applyGraphics();
    this.resize();
    requestAnimationFrame((t) => this.frame(t));
  }

  loadSettings() {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('deltav.settings') || '{}') || {}; } catch (e) { saved = {}; }
    const st = { ...DEFAULTS, ...saved };
    st.binds = { ...DEFAULT_BINDS, ...(saved.binds || {}) };
    st.rules = { ...DEFAULT_RULES, ...(saved.rules || {}) };
    if (!MAPS[st.map]) st.map = 'hangar';
    st.gfx = normalizeGfx({ ...DEFAULTS.gfx, ...(saved.gfx || {}) });
    if (!Array.isArray(st.loadout) || st.loadout.length !== 2 || !st.loadout.every((id) => WEAPONS[id]) || st.loadout[0] === st.loadout[1]) st.loadout = [...DEFAULTS.loadout];
    return st;
  }

  get rules() { return this.settings.rules; }
  keyLabel(action) { return keyName(this.settings.binds[action]); }
  bound(action) { return this.input.down(this.settings.binds[action]); }
  pressedAct(action) { return this.input.hit(this.settings.binds[action]); }
  saveSettings() { try { localStorage.setItem('deltav.settings', JSON.stringify(this.settings)); } catch (e) { /* ignore */ } }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.gfx.resize();
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.hud.resize();
    this.fx.setScale(h * this.renderer.getPixelRatio(), this.camera.fov);
  }

  applyGraphics() {
    const g = this.settings.gfx;
    this.gfx.apply(g, this.world);
    this.fx.density = g.particles;
    this.hud.setQuality(g);
    this.resize();
  }

  buildViewmodel() {
    // first-person rig in camera space: gun holder + two arms aimed at fixed elbow points
    this.vm = new THREE.Group();
    this.camera.add(this.vm);
    this.vmS = 0.62;
    this.vmHolder = new THREE.Group();
    this.vmHolder.scale.setScalar(this.vmS);
    this.vm.add(this.vmHolder);
    this.vmGuns = {};
    for (const k of Object.keys(WEAPONS)) {
      const g = makeGunMesh(k, TEAM_COLORS[0], { noShadow: true });
      g.visible = false;
      this.vmHolder.add(g);
      this.vmGuns[k] = g;
    }
    this.vmArmR = buildFPArm(TEAM_COLORS[0]); this.vmArmR.scale.setScalar(this.vmS); this.vm.add(this.vmArmR);
    this.vmArmL = buildFPArm(TEAM_COLORS[0]); this.vmArmL.scale.setScalar(this.vmS); this.vm.add(this.vmArmL);
    this.vmNade = buildGrenade(TEAM_COLORS[0]);
    this.vmNade.scale.setScalar(0.85);
    this.vmNade.traverse((o) => { o.castShadow = false; });
    this.vmNade.visible = false; this.vm.add(this.vmNade);
    this.vmFlash = new THREE.PointLight(0xffaa66, 0, 6, 1.5);
    this.vmFlash.position.set(0.1, -0.05, -0.6);
    this.vm.add(this.vmFlash);
    this.vmSway = new THREE.Vector2(); this.vmMove = new THREE.Vector3();
    this.vmShell = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.045, 10).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xb8322a, roughness: 0.5, metalness: 0.3 }));
    this.vmShell.visible = false; this.vm.add(this.vmShell);
  }

  buildGrid() {
    if (this.grid) this.scene.remove(this.grid);
    const pts = [];
    const b = this.world.bounds, s = this.world.enclosed ? 12 : 24;
    for (let y = b.min[1]; y <= b.max[1]; y += s) for (let z = b.min[2]; z <= b.max[2]; z += s) pts.push(b.min[0], y, z, b.max[0], y, z);
    for (let x = b.min[0]; x <= b.max[0]; x += s) for (let z = b.min[2]; z <= b.max[2]; z += s) pts.push(x, b.min[1], z, x, b.max[1], z);
    for (let x = b.min[0]; x <= b.max[0]; x += s) for (let y = b.min[1]; y <= b.max[1]; y += s) pts.push(x, y, b.min[2], x, y, b.max[2]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    this.grid = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0x5ff6ff, transparent: true, opacity: 0, depthWrite: false }));
    this.grid.visible = false;
    this.scene.add(this.grid);
  }

  // ---------------- UI ----------------
  setupUI() {
    const $ = (id) => document.getElementById(id);
    this.ui = { main: $('menu'), pause: $('pause'), end: $('end'), board: $('board'), lock: $('lockhint') };
    const st = this.settings;
    const sel = (id, key, parse = (v) => v) => {
      const el = $(id); if (!el) return;
      el.value = String(st[key]);
      el.addEventListener('change', () => { st[key] = parse(el.value); this.saveSettings(); this.applySettings(); });
    };
    sel('optDiff', 'difficulty');
    sel('optTeam', 'teamSize', Number);
    sel('optScore', 'scoreLimit', Number);
    sel('optMode', 'mode', Number);
    sel('optMap', 'map');
    this.setupGraphicsUI();
    $('mapDesc').textContent = MAPS[st.map].desc;
    $('optMap').addEventListener('change', () => { $('mapDesc').textContent = MAPS[st.map].desc; });
    const chk = (id, get, set) => { const el = $(id); if (!el) return; el.checked = get(); el.addEventListener('change', () => { set(el.checked); this.saveSettings(); }); };
    for (const k of Object.keys(DEFAULT_RULES)) chk('rule_' + k, () => st.rules[k], (v) => { st.rules[k] = v; });
    chk('optOutline', () => st.outlines, (v) => { st.outlines = v; });
    this.buildBindUI();
    this.setupLoadoutUI();
    this.setupMenuChrome();
    const rng = (id, key, out, fmt) => {
      const el = $(id); if (!el) return;
      el.value = st[key];
      const o = $(out); if (o) o.textContent = fmt(st[key]);
      el.addEventListener('input', () => { st[key] = Number(el.value); if (o) o.textContent = fmt(st[key]); this.saveSettings(); this.applySettings(); });
    };
    rng('optSens', 'sens', 'optSensV', (v) => v.toFixed(2));
    rng('optFov', 'fov', 'optFovV', (v) => v.toFixed(0) + '°');
    rng('optVol', 'volume', 'optVolV', (v) => Math.round(v * 100) + '%');
    rng('optSens2', 'sens', 'optSens2V', (v) => v.toFixed(2));
    const inv = $('optInv'); if (inv) { inv.checked = st.invertY; inv.addEventListener('change', () => { st.invertY = inv.checked; this.saveSettings(); }); }
    $('modeDesc').textContent = MODE_DESC[st.mode];
    $('optMode').addEventListener('change', () => { $('modeDesc').textContent = MODE_DESC[st.mode]; });
    $('btnDeploy').addEventListener('click', () => { this.audio.init(); this.newMatch(); });
    $('btnResume').addEventListener('click', () => this.resume());
    $('btnQuit').addEventListener('click', () => this.toMenu());
    $('btnAgain').addEventListener('click', () => this.newMatch());
    $('btnMenu').addEventListener('click', () => this.toMenu());
    this.ui.lock.addEventListener('click', () => this.lock());
    this.canvas.addEventListener('click', () => { if (this.state === 'playing' && document.pointerLockElement !== this.canvas) this.lock(); });
  }

  setupGraphicsUI() {
    const $ = (id) => document.getElementById(id);
    const g = this.settings.gfx;
    if (!$('gPreset')) return;
    const pct = (v) => Math.round(v * 100) + '%';
    const sliders = [['gScale', 'scale', pct], ['gBloom', 'bloom', (v) => (v > 0 ? pct(v) : 'Off')], ['gEnv', 'env', (v) => (v > 0 ? pct(v) : 'Off')], ['gParticles', 'particles', pct], ['gExposure', 'exposure', (v) => v.toFixed(2)]];
    const sync = () => {
      $('gPreset').value = g.preset; $('gShadows').value = String(g.shadows); $('gAA').value = String(g.aa);
      for (const [id, k, f] of sliders) { $(id).value = g[k]; const o = $(id + 'V'); if (o) o.textContent = f(g[k]); }
      $('gDmg').checked = this.settings.dmgNumbers;
      for (const id of ['gPreset', 'gShadows', 'gAA']) if ($(id).refreshSeg) $(id).refreshSeg();
    };
    const changed = (custom = true) => { if (custom) g.preset = 'custom'; this.saveSettings(); this.applyGraphics(); sync(); };
    $('gPreset').addEventListener('change', () => { const p = PRESETS[$('gPreset').value]; if (p) { Object.assign(g, p); g.preset = $('gPreset').value; } changed(false); });
    $('gShadows').addEventListener('change', () => { g.shadows = Number($('gShadows').value); changed(); });
    $('gAA').addEventListener('change', () => { g.aa = Number($('gAA').value); changed(); });
    for (const [id, k, f] of sliders) {
      $(id).addEventListener('input', () => { const v = Number($(id).value); const o = $(id + 'V'); if (o) o.textContent = f(v); if (k === 'bloom' || k === 'exposure' || k === 'env') { g[k] = v; g.preset = 'custom'; this.applyGraphics(); } });
      $(id).addEventListener('change', () => { g[k] = Number($(id).value); changed(); });
    }
    $('gDmg').addEventListener('change', () => { this.settings.dmgNumbers = $('gDmg').checked; this.saveSettings(); });
    this.syncGraphicsUI = sync;
    sync();
  }

  /** Replace a <select data-seg> with segmented buttons or cards that drive the hidden select. */
  segmentify(sel, describe) {
    const kind = sel.dataset.seg;
    const wrap = document.createElement('div');
    wrap.className = 'seg' + (kind === 'map' || kind === 'mode' ? ' cards ' + kind : '');
    wrap.setAttribute('role', 'radiogroup');
    const btns = [...sel.options].map((o) => {
      const b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'radio');
      const d = describe && describe(o.value);
      if (d) b.innerHTML = `<b>${o.textContent}</b><span>${d}</span>`; else b.textContent = o.textContent;
      if (kind === 'map' && o.value === 'spin') b.style.backgroundImage = 'linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), radial-gradient(circle at 50% 50%, transparent 0 34%, rgba(159,232,255,0.25) 35% 37%, transparent 38% 60%, rgba(159,232,255,0.12) 61% 63%, transparent 64%), linear-gradient(135deg, #141c26, #0b1018)';
      else if (kind === 'map') b.style.backgroundImage = o.value === 'yard'
        ? 'linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), radial-gradient(circle at 75% 120%, #3b6fb0 0 30%, transparent 31%), radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 60% 20%, #fff, transparent), radial-gradient(1px 1px at 40% 60%, #cde, transparent), linear-gradient(135deg, #070b14, #0c1424)'
        : 'linear-gradient(180deg, rgba(4,8,16,0.2), rgba(4,8,16,0.92)), repeating-linear-gradient(90deg, rgba(159,232,255,0.08) 0 2px, transparent 2px 38px), repeating-linear-gradient(0deg, rgba(159,232,255,0.06) 0 2px, transparent 2px 38px), linear-gradient(135deg, #1a2430, #0d141c)';
      b.addEventListener('click', () => { sel.value = o.value; sel.dispatchEvent(new Event('change')); refresh(); });
      wrap.append(b);
      return b;
    });
    const refresh = () => btns.forEach((b, i) => { const on = sel.options[i].value === sel.value; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
    sel.refreshSeg = refresh;
    sel.classList.add('hidden-select');
    sel.after(wrap);
    refresh();
  }

  setupMenuChrome() {
    const $ = (id) => document.getElementById(id);
    // tabs
    const tabs = [...document.querySelectorAll('.tab')];
    tabs.forEach((t) => t.addEventListener('click', () => {
      tabs.forEach((x) => x.classList.toggle('active', x === t));
      document.querySelectorAll('.pane').forEach((p) => p.classList.toggle('active', p.dataset.pane === t.dataset.tab));
      this.audio.init(); this.audio.play('mode');
    }));
    // segmented controls
    const descs = { optMap: (v) => MAPS[v].desc, optMode: (v) => MODE_DESC[Number(v)] };
    document.querySelectorAll('select[data-seg]').forEach((sel) => this.segmentify(sel, descs[sel.id]));
    // match summary under the tabs
    const st = this.settings;
    const summary = () => {
      const el = $('matchSummary'); if (!el) return;
      el.innerHTML = `<span>MAP <b>${MAPS[st.map].name.toUpperCase()}</b></span><span>BOTS <b>${st.difficulty.toUpperCase()}</b></span><span><b>${st.teamSize}V${st.teamSize}</b></span><span>FIRST TO <b>${st.scoreLimit}</b></span><span>LOADOUT <b>${st.loadout.map((w) => WEAPONS[w].short).join(' + ')}</b></span>`;
    };
    for (const id of ['optMap', 'optDiff', 'optTeam', 'optScore', 'optPri', 'optSec']) { const el = $(id); if (el) el.addEventListener('change', summary); }
    this.refreshSummary = summary;
    summary();
    window.addEventListener('keydown', (e) => { if ((e.code === 'Enter' || e.code === 'NumpadEnter') && this.state === 'menu' && !this.input.capture) { e.preventDefault(); this.audio.init(); this.newMatch(); } });
  }

  setupLoadoutUI() {
    const st = this.settings;
    const pairs = [['optPri', 'optSec'], ['optPri2', 'optSec2']];
    const refresh = () => {
      for (const [a, b] of pairs) {
        const ea = document.getElementById(a), eb = document.getElementById(b);
        if (ea) ea.value = st.loadout[0];
        if (eb) eb.value = st.loadout[1];
      }
      for (const id of ['loadoutDesc', 'loadoutDesc2']) {
        const d = document.getElementById(id);
        const mass = st.loadout.reduce((m, w) => m + WEAPONS[w].mass, 0).toFixed(1);
        if (d) d.textContent = id === 'loadoutDesc'
          ? `Carried weapon mass ${mass} kg. Heavier loadouts accelerate a little slower on the same thrusters. Pick a slot, then a weapon.`
          : st.loadout.map((w) => `${WEAPONS[w].short}: ${WEAPON_BLURB[w]}`).join('  ·  ') + `  (${mass} kg)`;
      }
    };
    for (const [a, b] of pairs) {
      for (const [id, slot] of [[a, 0], [b, 1]]) {
        const el = document.getElementById(id);
        if (!el) continue;
        el.innerHTML = WEAPON_IDS.map((w) => `<option value="${w}">${WEAPONS[w].name}</option>`).join('');
        el.addEventListener('change', () => {
          const other = 1 - slot;
          if (st.loadout[other] === el.value) st.loadout[other] = st.loadout[slot];
          st.loadout[slot] = el.value;
          this.saveSettings(); refresh();
          if (this.state === 'paused') this.hud.message('LOADOUT CHANGES ON NEXT DEPLOY', '#ffcc4d', 2.5);
        });
      }
    }
    refresh();
    this.buildWeaponCards(refresh);
  }

  /** Weapon cards with stat bars; clicking assigns to the active slot. */
  buildWeaponCards(refreshText) {
    const grid = document.getElementById('wgrid');
    if (!grid) return;
    const st = this.settings;
    this.activeSlot = this.activeSlot || 0;
    const stats = (d) => {
      const dmg = d.kind === 'pellets' ? d.dmg * d.pellets : d.kind === 'beam' ? d.dps * 1.2 : d.dmg;
      const rate = d.rpm;
      const speed = d.kind === 'beam' ? 1 : d.kind === 'rocket' ? 0.55 : Math.min(1, d.speed / 420);
      const recoil = d.ejecta != null ? d.ejecta : d.projMass ? d.projMass * d.speed : 0;
      return [['DAMAGE', Math.min(1, dmg / 110)], ['FIRE RATE', Math.min(1, rate / 1200)], ['VELOCITY', speed], ['RECOIL', Math.min(1, recoil / 100)], ['MASS', Math.min(1, d.mass / 7)]];
    };
    const render = () => {
      grid.innerHTML = '';
      for (const id of WEAPON_IDS) {
        const d = WEAPONS[id];
        const slot = st.loadout.indexOf(id);
        const c = document.createElement('button');
        c.type = 'button'; c.className = 'wcard' + (slot >= 0 ? ' eq' : '');
        c.innerHTML = `<span class="badge${slot >= 0 ? '' : ' none'}">${slot === 0 ? 'PRIMARY' : slot === 1 ? 'SECONDARY' : '—'}</span><span class="wn">${d.name}</span><span class="wb">${WEAPON_BLURB[id]}</span>` +
          stats(d).map(([n, v]) => `<span class="stat">${n}<i style="--v:${Math.round(v * 100)}%"></i></span>`).join('');
        c.addEventListener('click', () => {
          const slotI = this.activeSlot;
          const other = 1 - slotI;
          if (st.loadout[other] === id) st.loadout[other] = st.loadout[slotI];
          st.loadout[slotI] = id;
          this.saveSettings();
          for (const sid of ['optPri', 'optSec', 'optPri2', 'optSec2']) { const el = document.getElementById(sid); if (el) el.value = st.loadout[sid.startsWith('optPri') ? 0 : 1]; }
          refreshText(); render(); if (this.refreshSummary) this.refreshSummary();
          this.audio.init(); this.audio.play('reload');
        });
        grid.append(c);
      }
      for (const i of [0, 1]) {
        const sb = document.getElementById('slot' + i), sn = document.getElementById('slot' + i + 'n');
        if (sn) sn.textContent = WEAPONS[st.loadout[i]].name;
        if (sb) sb.classList.toggle('on', this.activeSlot === i);
      }
    };
    for (const i of [0, 1]) {
      const sb = document.getElementById('slot' + i);
      if (sb) sb.addEventListener('click', () => { this.activeSlot = i; render(); });
    }
    render();
  }

  /** Bots pick a loadout weighted by map, match settings, role and what is earning kills this match. */
  botLoadout(s) {
    const st = this.settings, base = MAP_WEIGHTS[this.world.mapId] || MAP_WEIGHTS.hangar;
    const total = Object.values(this.weaponKills).reduce((a, b) => a + b, 0);
    const role = s.bot ? s.bot.role : 'anchor';
    const w = {};
    for (const id of WEAPON_IDS) {
      let v = base[id];
      if (st.teamSize >= 6 && (id === 'gyrojet' || id === 'recoilless')) v *= 1.2;
      if (st.difficulty === 'elite' && (id === 'rifle' || id === 'maser')) v *= 1.2;
      if (st.difficulty === 'easy' && id === 'shotgun') v *= 1.2;
      if (role === 'rusher' && id === 'shotgun') v *= 1.6;
      if (role === 'anchor' && (id === 'rifle' || id === 'gyrojet' || id === 'recoilless')) v *= 1.3;
      if (role === 'flanker' && (id === 'maser' || id === 'rifle')) v *= 1.2;
      v *= 1 + 2.5 * (this.weaponKills[id] || 0) / (total + 6); // the match meta: what's working gets picked more
      w[id] = v;
    }
    const pick = (weights, exclude) => {
      const ids = WEAPON_IDS.filter((id) => id !== exclude);
      let sum = 0; for (const id of ids) sum += weights[id];
      let r = Math.random() * sum;
      for (const id of ids) { r -= weights[id]; if (r <= 0) return id; }
      return ids[0];
    };
    // primary from the long-range pool, secondary complements it
    const pw = { ...w }; pw.shotgun *= role === 'rusher' ? 1 : 0.35;
    const a = pick(pw, null);
    const sw = { ...w };
    for (const id of WEAPON_IDS) sw[id] *= LONG.has(a) ? (id === 'shotgun' ? 2.2 : 0.6) : (LONG.has(id) ? 1.4 : 1);
    const b = pick(sw, a);
    return [a, b];
  }

  buildBindUI() {
    const box = document.getElementById('binds');
    if (!box) return;
    const st = this.settings;
    box.innerHTML = '';
    for (const [id, label] of ACTIONS) {
      const row = document.createElement('div'); row.className = 'bind';
      const l = document.createElement('span'); l.textContent = label;
      const b = document.createElement('button'); b.className = 'key'; b.type = 'button'; b.id = 'bind_' + id;
      b.textContent = st.binds[id] ? keyName(st.binds[id]) : 'unbound';
      if (!st.binds[id]) b.classList.add('unbound');
      b.addEventListener('click', () => {
        b.textContent = 'press key / button…'; b.classList.add('wait');
        this.input.capture = (code) => {
          b.classList.remove('wait');
          if (code === 'Backspace' || code === 'Delete') { st.binds[id] = ''; this.saveSettings(); }
          else if (code !== 'Escape') {
            // a key can only do one thing: swap with whatever used it before
            for (const k of Object.keys(st.binds)) if (st.binds[k] === code && k !== id) st.binds[k] = st.binds[id];
            st.binds[id] = code;
            this.saveSettings();
          }
          this.buildBindUI();
    this.setupLoadoutUI();
    this.setupMenuChrome();
        };
      });
      row.append(l, b); box.append(row);
    }
    const fixed = document.createElement('div'); fixed.className = 'bindnote';
    fixed.textContent = 'Click a binding, then press a key, mouse button or scroll the wheel. Backspace clears it, Esc cancels. Fixed: mouse movement turns your body, Esc pauses.';
    box.append(fixed);
    const reset = document.getElementById('btnResetBinds');
    if (reset && !reset._wired) { reset._wired = true; reset.addEventListener('click', () => { st.binds = { ...DEFAULT_BINDS }; this.saveSettings(); this.buildBindUI(); }); }
  }

  applySettings() {
    this.audio.setVolume(this.settings.volume);
    this.camera.fov = this.settings.fov;
    this.camera.updateProjectionMatrix();
    if (this.player) this.player.mode = this.settings.mode;
  }

  lock() {
    // Pointer lock can be refused (embedded frames, some browsers): fall back to raw mouse movement.
    const fallback = () => {
      if (this.input.forceMouse) return;
      this.input.forceMouse = true;
      if (this.state === 'playing') this.hud.message('POINTER LOCK UNAVAILABLE: MOUSE AIMS DIRECTLY, ESC PAUSES', '#ffcc4d', 4);
    };
    try {
      const r = this.canvas.requestPointerLock();
      if (r && r.catch) r.catch(fallback);
    } catch (e) { fallback(); }
  }

  onLockChange() {
    const locked = document.pointerLockElement === this.canvas;
    if (!locked && this.state === 'playing' && !this.input.forceMouse) this.pause();
    this.ui.lock.style.display = 'none';
  }

  show(name) {
    for (const k of ['main', 'pause', 'end']) this.ui[k].style.display = k === name ? 'flex' : 'none';
  }

  pause() { if (this.state !== 'playing') return; this.state = 'paused'; this.show('pause'); }
  resume() { this.state = 'playing'; this.show(null); this.lock(); this.last = performance.now(); }
  toMenu() {
    this.state = 'menu'; this.show('main');
    if (document.pointerLockElement) document.exitPointerLock();
    this.clearMatch();
  }

  clearMatch() {
    for (const s of this.soldiers) this.scene.remove(s.model.root);
    for (const p of this.combat.projectiles) if (p.mesh) this.scene.remove(p.mesh);
    for (const g of this.combat.grenades) this.scene.remove(g.mesh);
    this.combat.projectiles.length = 0; this.combat.grenades.length = 0;
    this.soldiers = []; this.bots = []; this.player = null;
    this.intel = [new Map(), new Map()];
  }

  newMatch() {
    this.clearMatch();
    const st = this.settings;
    if (this.world.mapId !== st.map) {
      this.world.dispose();
      this.world = new World(this.scene, st.map);
      this.buildGrid();
      this.applyGraphics();
    }
    this.applySettings();
    this.teamScore = [0, 0];
    this.weaponKills = {};
    this.buildPickups();
    this.endT = 0;
    this.scoreLimit = st.scoreLimit;
    this.timeLimit = 10 * 60;
    this.matchTime = 0;
    const names = CALLSIGNS.slice().sort(() => Math.random() - 0.5);
    this.player = new Soldier(this, 0, 'YOU', true);
    this.player.mode = st.mode;
    this.adsToggled = false;
    this.soldiers.push(this.player);
    let ni = 0;
    for (let team = 0; team < 2; team++) {
      const n = team === 0 ? st.teamSize - 1 : st.teamSize;
      for (let i = 0; i < n; i++) {
        const s = new Soldier(this, team, names[ni++ % names.length]);
        s.mode = 2;
        this.soldiers.push(s);
        this.bots.push(new Bot(this, s, st.difficulty, i + team));
      }
    }
    for (const s of this.soldiers) this.respawn(s, true);
    this.state = 'playing';
    this.show(null);
    this.hud.feed = []; this.hud.msgs = [];
    this.hud.message('TEAM DEATHMATCH – ZERO-G', '#9fe8ff', 3, true);
    this.hud.message(`RCS MODE: ${MODES[this.player.mode]}`, '#ffcc4d', 3);
    this.lock();
    try { this.renderer.compile(this.scene, this.camera); } catch (e) { /* optional warm-up */ }
    this.gfx.setupShadows(this.world);
    this.last = performance.now();
  }

  buildPickups() {
    if (this.pickups) for (const pk of this.pickups) this.scene.remove(pk.mesh);
    const body = new THREE.MeshStandardMaterial({ color: 0x3c444c, roughness: 0.5, metalness: 0.7 });
    const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(0x7dff9a).multiplyScalar(2) });
    this.pickups = this.world.pickupSpots.map((pos) => {
      const g = new THREE.Group();
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.45), body); g.add(crate);
      for (const x of [-0.25, 0.25]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.47, 0.47), glow); b.position.x = x; g.add(b); }
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.02, 6, 32), glow); ring.rotation.x = Math.PI / 2; g.add(ring);
      g.position.copy(pos);
      this.scene.add(g);
      return { pos, mesh: g, ring, cool: 0 };
    });
  }

  /** Ammo depots: touch one to refill reserves and grenades; it recharges for 20 s. */
  updatePickups(dt) {
    for (const pk of this.pickups) {
      pk.cool = Math.max(0, pk.cool - dt);
      const ready = pk.cool <= 0;
      pk.mesh.rotation.y += dt * 0.8;
      pk.mesh.scale.setScalar(ready ? 1 + Math.sin(this.time * 3) * 0.04 : 0.55);
      pk.ring.visible = ready;
      if (!ready) continue;
      for (const s of this.soldiers) {
        if (!s.alive || s.pos.distanceTo(pk.pos) > 1.9) continue;
        const need = s.weapons.some((w) => w.def.kind !== 'beam' && w.reserve < w.def.reserve) || s.grenades < 2;
        if (!need) continue;
        for (const w of s.weapons) w.reserve = Math.max(w.reserve, w.def.reserve);
        s.grenades = 2;
        pk.cool = 20;
        if (s.isPlayer) { this.hud.message('AMMO RESUPPLIED', '#7dff9a', 1.6); this.audio.play('reload'); }
        this.fx.sparks(pk.pos, 12, null, 3, new THREE.Color(0x7dff9a));
        break;
      }
    }
  }

  /** Spawn shields: intruders are shoved out and burned; nobody inside can be hurt by the enemy. */
  updateSpawnShields(dt) {
    const w = this.world;
    for (const s of this.soldiers) {
      if (!s.alive) continue;
      const enemy = 1 - s.team;
      if (!w.inSpawn(s.pos, enemy)) { if (s.isPlayer) this.inEnemySpawn = false; continue; }
      const dir = enemy === 0 ? 1 : -1; // back toward mid-map
      s.vel.x += dir * 14 * dt;
      if (s.vel.x * dir < 2) s.vel.x = dir * 2;
      if (s.grab) this.releaseGrab(s);
      this.damage(s, 35 * dt, null, 'spawn shield');
      w.barriers[enemy].mat.uniforms.flash.value = 1;
      if (s.isPlayer && !this.inEnemySpawn) { this.inEnemySpawn = true; this.hud.message('ENEMY SPAWN SHIELD – GET OUT', '#ff4b3a', 1.5); }
    }
  }

  respawn(s, initial = false) {
    const pts = this.world.spawns[s.team];
    let best = pts[0], bestScore = -Infinity;
    for (const p of pts) {
      let minD = 999;
      for (const o of this.soldiers) if (o.alive && o !== s) { const d = o.pos.distanceTo(p); if (o.team !== s.team) minD = Math.min(minD, d); else if (d < 2) minD = Math.min(minD, d * 10); }
      const score = minD + Math.random() * 8;
      if (score > bestScore) { bestScore = score; best = p; }
    }
    const facing = new THREE.Vector3(s.team === 0 ? 1 : -1, 0, 0);
    s.loadout = s.isPlayer ? [...this.settings.loadout] : this.botLoadout(s);
    s.spawn(best, facing);
    s.oobT = 0;
    s.mode = s.isPlayer ? this.settings.mode : 2;
    s.killedBy = null;
    if (s.bot) s.bot.onSpawn();
    if (s.isPlayer && !initial) this.audio.play('spawn');
  }

  // ---------------- Events from simulation ----------------
  distToListener(p) { return this.camera.position.distanceTo(p); }

  reportIntel(team, e, by) {
    const m = this.intel[team];
    let it = m.get(e.id);
    if (!it) { it = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), t: 0, e }; m.set(e.id, it); }
    it.pos.copy(e.pos); it.vel.copy(e.vel); it.t = this.time;
  }

  onShot(s, def) {
    const loud = def.kind === 'rocket' ? 70 : def.kind === 'pellets' ? 55 : 48;
    for (const b of this.bots) b.hear(s, s.pos, loud);
    this.audio.play(def.sound, s.isPlayer ? 0 : this.distToListener(s.pos));
    if (s.isPlayer) this.vmKick = (this.vmKick || 0) + (def.kind === 'pellets' ? 0.09 : def.kind === 'beam' ? 0 : def.id === 'recoilless' ? 0.12 : 0.025);
    if (s.isPlayer) this.vmFlash.intensity = 6;
  }

  onThrow(s, pos) { for (const b of this.bots) b.hear(s, pos, 20); }

  onExplosion(pos, owner) { for (const b of this.bots) b.hear(owner, pos, 80); }

  onImpact(s, speed, point, n) {
    this.audio.play(speed > 5 ? 'impact' : 'clank', s.isPlayer ? 0 : this.distToListener(s.pos));
    const hard = speed > HIT_THRESH;
    if (point && speed > 3) {
      this.fx.sparks(point, Math.round(4 + speed * (hard ? 4 : 1.5)), n, 2 + speed * 0.6);
      if (hard) { this.fx.suitHit(point, n, s.vel); this.fx.alpha.spawn(point, null, new THREE.Color(0x8a9099), 0.6, 1.2, { grow: 3, alpha: 0.4 }); }
    }
    if (s.isPlayer) {
      if (speed > 3) this.hud.message(`IMPACT ${speed.toFixed(1)} m/s`, hard ? '#ff4b3a' : '#ffcc4d', 1.2);
      const sev = hard ? 0.4 + (speed - HIT_THRESH) * 0.12 : (speed - 1.2) * 0.04;
      this.shake = Math.max(this.shake || 0, Math.min(1, sev));
      if (hard) this.hud.impact(sev);
    }
  }

  damageTower(s, i, dmg) {
    if (!this.rules.thrusterDamage) return;
    const t = s.towers[i];
    if (t.dead || !s.alive) return;
    t.hp -= dmg;
    if (t.hp <= 0) {
      t.dead = true; t.hp = 0;
      const wp = TOWERS[i].pos.clone().applyQuaternion(s.quat).add(s.pos);
      this.fx.sparks(wp, 25, null, 6);
      this.fx.gasJet(wp, new THREE.Vector3().randomDirection(), s.vel, 3);
      // rupturing quad kicks the suit
      s.applyImpulse(new THREE.Vector3().randomDirection().multiplyScalar(25), wp);
      if (s.isPlayer) { this.hud.message(`THRUSTER QUAD ${['UL', 'UR', 'LL', 'LR'][i]} DESTROYED – EXPECT COUPLED SPIN`, '#ff4b3a', 3); this.audio.play('warn'); }
    }
  }

  damage(s, amount, attacker, cause, point, part) {
    if (!s.alive) return;
    if (s.spawnProtect > 0 && cause !== 'hypoxia') return;
    if (attacker && attacker.team !== s.team && this.world.inSpawn(s.pos, s.team)) return; // shielded spawn bay
    s.health -= amount;
    s.lastDamageT = this.time;
    if (attacker && attacker !== s) { s.lastAttacker = attacker; s.lastAttackerT = this.time; }
    if (s.bot) s.bot.onDamaged(attacker);
    const killed = s.health <= 0;
    if (attacker === this.player && s !== this.player && amount > 0.3) {
      this.hud.hit(part === 'head', killed);
      if (this.settings.dmgNumbers) this.hud.damageNumber(s, point || s.pos, amount, part === 'head', killed);
      this.audio.play(killed ? 'kill' : part === 'head' ? 'head' : 'hit');
    }
    if (s === this.player && amount > 0.5 && cause !== 'hypoxia') {
      this.hud.damageFrom(attacker ? attacker.pos : point);
      this.audio.play('hurt');
    }
    if (killed) this.kill(s, attacker, cause, part === 'head');
  }

  kill(s, attacker, cause, head) {
    s.alive = false; s.health = 0;
    s.deaths++;
    s.respawnT = 4;
    s.leaks = [];
    s.grab = null;
    let killer = attacker && attacker !== s ? attacker : null;
    // environmental kills credit whoever sent you flying
    if (!killer && s.lastAttacker && this.time - (s.lastAttackerT || 0) < 6) killer = s.lastAttacker;
    if (killer && killer.team !== s.team) {
      killer.kills++; killer.score += 100;
      if (WEAPONS[cause]) this.weaponKills[cause] = (this.weaponKills[cause] || 0) + 1;
      this.teamScore[killer.team]++;
      if (killer.isPlayer) this.hud.message(`ELIMINATED ${s.name}${head ? ' – HEADSHOT' : ''}`, '#ff4b3a', 1.8);
    }
    s.killedBy = killer; s.killCause = cause;
    this.hud.kill(killer, s, cause, head);
    if (s.bot) s.bot.target = null;
    for (const m of this.intel) m.delete(s.id);
    if (this.teamScore[0] >= this.scoreLimit || this.teamScore[1] >= this.scoreLimit) setTimeout(() => this.endMatch(), 1200);
  }

  endMatch() {
    if (this.state !== 'playing' && this.state !== 'paused') return;
    // slow-motion outro with a banner, then the results screen
    this.state = 'ending'; this.endT = 0;
    this.show(null);
    this.endWon = this.teamScore[0] > this.teamScore[1] ? 0 : this.teamScore[1] > this.teamScore[0] ? 1 : -1;
    this.audio.play(this.endWon === 0 ? 'kill' : 'warn');
  }

  tickEnding(dt) {
    this.endT += dt;
    const sdt = dt * Math.max(0.12, 1 - this.endT * 0.6);
    this.time += sdt;
    for (const b of this.bots) b.update(sdt);
    this.acc += sdt;
    let n = 0;
    while (this.acc >= STEP && n < 4) { this.substep(STEP); this.acc -= STEP; n++; }
    for (const s of this.soldiers) if (s.alive) s.update(sdt);
    if (this.endT > 3.2) this.finishMatch();
  }

  finishMatch() {
    this.state = 'ended';
    if (document.pointerLockElement) document.exitPointerLock();
    const won = this.endWon;
    document.getElementById('endTitle').textContent = won === 0 ? 'VICTORY' : won === 1 ? 'DEFEAT' : 'DRAW';
    document.getElementById('endTitle').style.color = won === 0 ? '#3f8cff' : won === 1 ? '#ff8a2a' : '#e9eef2';
    document.getElementById('endScore').textContent = `${this.teamScore[0]} – ${this.teamScore[1]}`;
    document.getElementById('endBoard').innerHTML = this.boardHTML();
    this.show('end');
    // staggered reveal
    const end = this.ui.end;
    end.classList.remove('reveal'); void end.offsetWidth; end.classList.add('reveal');
    end.querySelectorAll('tr').forEach((tr, i) => { tr.style.animationDelay = (0.5 + i * 0.05) + 's'; });
  }

  boardHTML() {
    let h = '';
    for (const team of [0, 1]) {
      const list = this.soldiers.filter((s) => s.team === team).sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
      h += `<div class="bteam" style="--tc:${'#' + TEAM_COLORS[team].toString(16).padStart(6, '0')}"><div class="bhead"><b>${TEAM_NAMES[team]}</b><span>${this.teamScore[team]}</span></div>`;
      h += '<table><tr><th>CALLSIGN</th><th>LOADOUT</th><th>K</th><th>D</th><th>Δv</th></tr>';
      for (const s of list) h += `<tr class="${s.isPlayer ? 'me' : ''}${s.alive ? '' : ' dead'}"><td>${s.name}</td><td class="lo">${(s.loadout || []).map((w) => WEAPONS[w].short).join(' + ')}</td><td>${s.kills}</td><td>${s.deaths}</td><td>${s.alive ? s.dv.toFixed(0) : '—'}</td></tr>`;
      h += '</table></div>';
    }
    return h;
  }

  // ---------------- Grab / push-off ----------------
  tryGrab(s) {
    const surf = this.world.nearestSurface(s.pos, BODY_R + 0.85);
    if (!surf) return false;
    if (s.walking) s.leaveWalk();
    const ref = surf.kind === 'pod' ? surf.obj.vel : _v.set(0, 0, 0);
    const rel = _v2.subVectors(s.vel, ref).length();
    if (rel > 4.5) { if (s.isPlayer) { this.hud.message('TOO FAST TO GRAB', '#ff4b3a', 1.2); } return false; }
    if (surf.kind === 'pod') {
      const pod = surf.obj, m = s.mass, M = pod.mass;
      // perfectly inelastic catch: momentum is shared
      const v = s.vel.clone().multiplyScalar(m).addScaledVector(pod.vel, M).divideScalar(m + M);
      pod.vel.copy(v); s.vel.copy(v);
      s.grab = { kind: 'pod', obj: pod, offset: s.pos.clone().sub(pod.pos), normal: surf.normal };
    } else {
      s.vel.set(0, 0, 0);
      s.grab = { kind: surf.kind, obj: surf.obj, normal: surf.normal, point: surf.point, dist: Math.max(BODY_R + 0.05, surf.dist) };
    }
    s.angVel.multiplyScalar(0.2);
    s.holdQ = null;
    if (s.isPlayer || this.distToListener(s.pos) < 15) this.audio.play('grab', s.isPlayer ? 0 : this.distToListener(s.pos));
    return true;
  }

  releaseGrab(s) { s.grab = null; s.holdQ = null; }

  pushOff(s, dir, speed) {
    const g = s.grab;
    if (!g) return;
    const d = dir.clone().normalize();
    const n = g.normal;
    if (n && d.dot(n) < 0.15) d.addScaledVector(n, -d.dot(n) + 0.35).normalize();
    if (g.kind === 'pod') {
      const pod = g.obj, m = s.mass, M = pod.mass;
      s.vel.copy(pod.vel).addScaledVector(d, speed * M / (m + M));
      pod.vel.addScaledVector(d, -speed * m / (m + M));
    } else s.vel.copy(d).multiplyScalar(speed);
    s.grab = null; s.holdQ = null;
    if (s.isPlayer) this.audio.play('push');
  }

  // ---------------- Player control ----------------
  playerControl(dt) {
    const p = this.player, inp = this.input, c = p.ctrl;
    if (inp.hit('Escape')) { this.pause(); return; }
    if (!p.alive) { c.move.set(0, 0, 0); return; }
    if (this.pressedAct('adsToggle')) this.adsToggled = !this.adsToggled;
    if (this.bound('ads')) this.adsToggled = false;
    p.ads = (this.bound('ads') || this.adsToggled) && p.throwT <= 0;
    const zoom = (this.vmGuns[p.weapon.def.id].userData.zoom || 1.5);
    const sens = 0.0022 * this.settings.sens / (1 + (zoom - 1) * p.adsAmt);
    // mouse turns the body directly
    p.addAim(-inp.mouse.dx * sens, (this.settings.invertY ? 1 : -1) * inp.mouse.dy * sens);
    const k = (a) => (this.bound(a) ? 1 : 0);
    c.move.set(k('right') - k('left'), k('up') - k('down'), k('back') - k('forward'));
    c.roll = k('rollLeft') - k('rollRight');
    c.killRot = this.bound('killRot') || this.bound('fullStop');
    c.brake = this.bound('brake') || this.bound('fullStop');
    if (this.pressedAct('mode')) {
      p.mode = (p.mode + 1) % MODES.length; this.settings.mode = p.mode; this.saveSettings();
      this.hud.message(`RCS MODE: ${MODES[p.mode]}`, '#ffcc4d', 2.5);
      this.hud.message(MODE_DESC[p.mode], '#9fe8ff', 3);
      this.audio.play('mode');
    }
    if (this.pressedAct('grid')) { this.showGrid = !this.showGrid; this.hud.message(this.showGrid ? 'REFERENCE GRID ON' : 'REFERENCE GRID AUTO', '#9fe8ff', 1.5); }
    if (this.pressedAct('lockRef')) {
      const info = this.hud.aimInfo;
      if (info && (info.soldier || info.kind === 'pod') && info.obj !== p.refTarget) { p.refTarget = info.obj; this.hud.message(`VELOCITY REFERENCE: ${info.soldier ? info.soldier.name : 'CARGO POD'}`, '#ffcc4d', 2); }
      else { p.refTarget = null; this.hud.message('VELOCITY REFERENCE: STATION', '#ffcc4d', 2); }
    }
    if (p.refTarget && p.refTarget.alive === false) p.refTarget = null;
    // grab / push-off
    if (this.pressedAct('grab')) { if (p.grab) this.releaseGrab(p); else this.tryGrab(p); }
    if (p.grab) {
      if (this.bound('pushOff')) p.pushCharge = Math.min(1, p.pushCharge + dt / 0.6);
      else if (p.pushCharge > 0) { this.pushOff(p, p.aimDir(new THREE.Vector3()), 2 + 5 * p.pushCharge); p.pushCharge = 0; }
    } else p.pushCharge = 0;
    // weapons
    const nW = p.weapons.length;
    for (let i = 0; i < nW; i++) if (this.pressedAct('weapon' + (i + 1))) p.switchTo(i);
    if (this.pressedAct('nextWeapon')) p.switchTo((p.cur + 1) % nW);
    if (this.pressedAct('prevWeapon')) p.switchTo((p.cur + nW - 1) % nW);
    if (this.pressedAct('lastWeapon') && p.lastCur != null) p.switchTo(p.lastCur);
    if (this.pressedAct('reload')) { if (p.startReload()) this.audio.play('reload'); }
    if (this.pressedAct('grenade')) this.combat.throwGrenade(p);
    if (this.pressedAct('melee')) this.combat.melee(p);
    const def = p.weapon.def;
    if (def.auto ? this.bound('fire') : this.pressedAct('fire')) this.combat.fire(p);
    if (this.pressedAct('board')) this.ui.board.style.display = 'flex';
    if (!this.bound('board')) this.ui.board.style.display = 'none';
    else this.ui.board.innerHTML = this.boardHTML();
  }

  // ---------------- Simulation ----------------
  substep(dt) {
    for (const s of this.soldiers) s.step(dt);
    this.combat.step(dt);
    this.world.updatePods(dt, this.time);
    this.collideBodies();
  }

  collideBodies() {
    const S = this.soldiers;
    const invM = (s) => (s.grab && s.grab.kind !== 'pod' ? 0 : 1 / s.mass);
    for (let i = 0; i < S.length; i++) {
      const a = S[i];
      for (let j = i + 1; j < S.length; j++) {
        const b = S[j];
        const n = _v.subVectors(b.pos, a.pos); const d = n.length();
        const R = BODY_R * 2;
        if (d >= R || d < 1e-5) continue;
        n.divideScalar(d);
        const ia = invM(a), ib = invM(b);
        if (ia + ib === 0) continue;
        const pen = R - d;
        a.pos.addScaledVector(n, -pen * ia / (ia + ib)); b.pos.addScaledVector(n, pen * ib / (ia + ib));
        const rv = _v2.subVectors(b.vel, a.vel).dot(n);
        if (rv < 0) {
          const jj = -(1.3) * rv / (ia + ib);
          a.vel.addScaledVector(n, -jj * ia); b.vel.addScaledVector(n, jj * ib);
          if (-rv > 2) this.audio.play('impact', this.distToListener(a.pos));
        }
      }
      for (const pod of this.world.pods) {
        if (a.grab && a.grab.obj === pod) continue;
        const n = _v.subVectors(pod.pos, a.pos); const d = n.length();
        const R = BODY_R + pod.r;
        if (d >= R || d < 1e-5) continue;
        n.divideScalar(d);
        const ia = invM(a), ib = 1 / pod.mass;
        const pen = R - d;
        a.pos.addScaledVector(n, -pen * ia / (ia + ib)); pod.pos.addScaledVector(n, pen * ib / (ia + ib));
        const rv = _v2.subVectors(pod.vel, a.vel).dot(n);
        if (rv < 0) {
          const jj = -(1.4) * rv / (ia + ib);
          a.vel.addScaledVector(n, -jj * ia); pod.vel.addScaledVector(n, jj * ib);
          if (-rv > 3 && a.alive) this.damage(a, (-rv - 3) * 8, null, 'cargo pod', a.pos, 'body');
        }
      }
    }
  }

  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (!(dt > 0)) dt = 0;
    dt = Math.min(dt, 0.05);
    this.tick(dt);
  }

  tick(dt) {
    this.frameDt = dt;
    if (this.state === 'playing') {
      this.time += dt;
      this.matchTime += dt;
      this.playerControl(dt);
      for (const b of this.bots) b.update(dt);
      this.acc += dt;
      let n = 0;
      while (this.acc >= STEP && n < 8) { this.substep(STEP); this.acc -= STEP; n++; }
      if (n === 8) this.acc = 0;
      for (const s of this.soldiers) {
        if (s.alive && !this.world.enclosed) {
          // open map: 5 s outside the combat area, then the suit starts failing
          if (this.world.outside(s.pos) > 0) { s.oobT = (s.oobT || 0) + dt; if (s.oobT > 5) this.damage(s, 20 * dt, null, 'out of bounds'); }
          else s.oobT = 0;
        }
        if (s.alive) s.update(dt);
        else {
          s.respawnT -= dt;
          if (s.respawnT <= 0) this.respawn(s);
        }
      }
      if (this.matchTime >= this.timeLimit) this.endMatch();
      this.updatePickups(dt);
      this.updateSpawnShields(dt);
      this.emitThrusterFx(dt);
    } else if (this.state === 'menu') {
      this.time += dt;
      this.world.updatePods(dt, this.time);
    }
    if (this.state === 'ending') this.tickEnding(dt);
    this.world.updateBarriers(this.time);
    // the stars wheel past the windows of a spinning station (we live in its rotating frame)
    if (this.world.omega && this.world.space) this.world.space.rotation.x = -this.world.omega * this.time;
    if (this.state !== 'paused') { this.fx.update(dt, this.combat.tracerList()); this.combat.syncMeshes(dt); }
    this.world.syncPodMeshes();
    for (const s of this.soldiers) s.syncModel(dt);
    this.updateCamera(dt);
    this.hud.draw(this.state === 'paused' ? 0 : dt);
    if (this.player) this.gfx.follow(this.camera.position);
    else this.gfx.follow(new THREE.Vector3());
    this.gfx.render();
    this.input.endFrame();
  }

  /** First-person animation: sight alignment, sway, recoil, reloads per weapon type, grenade throw, hammer, swaps. */
  animateViewmodel(p, gun, dt) {
    const ud = gun.userData, w = p.weapon, def = w.def, S = this.vmS, t = this.time;
    const sm = (a, b, x) => { const u = Math.max(0, Math.min(1, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
    const bell = (x) => Math.sin(Math.max(0, Math.min(1, x)) * Math.PI);
    const ads = p.adsAmt;
    // base pose: hip vs sight on the camera axis
    const hip = _v.set(0.17, -0.16, -0.34);
    const adsP = new THREE.Vector3(-ud.sight.x * S, -ud.sight.y * S, -(ud.eyeRelief || 0.25) - ud.sight.z * S);
    const pos = hip.lerp(adsP, ads);
    const rot = new THREE.Euler(0, 0, 0, 'YXZ');
    // sway from mouse motion and RCS acceleration; breathing
    this.vmSway.x += (-this.input.mouse.dx * 0.0009 - this.vmSway.x) * Math.min(1, dt * 10);
    this.vmSway.y += (-this.input.mouse.dy * 0.0009 - this.vmSway.y) * Math.min(1, dt * 10);
    this.vmMove.lerp(_v2.copy(p.ctrl.move).multiplyScalar(-0.012), Math.min(1, dt * 5));
    const k1 = 1 - ads * 0.85;
    rot.y += this.vmSway.x * k1; rot.x += this.vmSway.y * k1;
    pos.addScaledVector(this.vmMove, k1);
    pos.y += Math.sin(t * 1.4) * 0.002 * k1; pos.x += Math.cos(t * 0.7) * 0.0015 * k1;
    // recoil kick
    this.vmKick = (this.vmKick || 0) * Math.exp(-dt * 16);
    pos.z += this.vmKick * (1 - ads * 0.5); rot.x += this.vmKick * 1.6 * (1 - ads * 0.6);
    // left-hand target (camera space) defaults to the handguard; mag offset (gun space)
    let handOverride = null;
    const magOff = new THREE.Vector3();
    let magVis = true;
    const belt = new THREE.Vector3(-0.12, -0.5, -0.22);
    let shellVis = false, magSpin = 0, carry = false;
    if (w.reloadT > 0 && def.reload > 0) {
      const r = 1 - w.reloadT / def.reload;
      if (def.perShell) {
        // flechette: fetch a shell from the belt and thumb it into the loading port, one per cycle
        rot.z += 0.38; rot.x += 0.14; pos.y -= 0.02;
        const port = this.gunPoint(gun, new THREE.Vector3(0, -0.06, -0.05), pos, rot);
        handOverride = r < 0.45 ? belt.clone().lerp(port, sm(0.12, 0.45, r)) : r < 0.7 ? port.clone().add(new THREE.Vector3(0, 0.012 * bell((r - 0.45) / 0.25), -0.02 * sm(0.45, 0.6, r))) : port.clone().lerp(belt, sm(0.72, 1, r) * 0.7);
        shellVis = r > 0.12 && r < 0.55;
        pos.y -= 0.006 * bell((r - 0.5) / 0.15);
      } else if (ud.breech) {
        // recoilless: breech swings open, spent casing drifts out the back, fresh round carried in
        rot.x += 0.5 * bell(r); pos.y -= 0.05 * bell(r); rot.z += 0.15 * bell(r);
        if (r < 0.3) magOff.z = 0.3 * sm(0.08, 0.3, r);
        else if (r < 0.55) magVis = false;
        else magOff.z = 0.36 * (1 - sm(0.55, 0.85, r));
        if (this.prevReloadR != null && this.prevReloadR < 0.3 && r >= 0.3) this.ejectDebris(gun, ud, pos, rot, magOff, p, new THREE.Vector3(0, 0.3, 1.4));
        const breech = this.gunPoint(gun, ud.magRest.clone().add(magOff), pos, rot);
        handOverride = r < 0.3 ? null : r < 0.55 ? belt.clone().lerp(breech, sm(0.42, 0.55, r)) : r < 0.88 ? breech : null;
      } else {
        // box / drum magazines: tilt, release, the old one floats away, new one seated with a slap
        const drum = !!ud.drum;
        rot.z += (drum ? 0.75 : 0.5) * bell(r); rot.x += 0.22 * bell(r); pos.y -= 0.035 * bell(r);
        if (r > 0.08 && r < 0.26) magOff.y = -0.12 * sm(0.08, 0.26, r);
        else if (r >= 0.26 && r < 0.55) magVis = false;
        else if (r >= 0.55 && r < 0.8) magOff.y = -0.3 * (1 - sm(0.55, 0.8, r));
        if (this.prevReloadR != null && this.prevReloadR < 0.26 && r >= 0.26) this.ejectDebris(gun, ud, pos, rot, magOff, p, new THREE.Vector3(0, -1.2, 0.2));
        if (drum && r > 0.8 && r < 0.95) magSpin = sm(0.8, 0.95, r) * Math.PI * 2;
        const magW = this.gunPoint(gun, ud.magRest.clone().add(magOff), pos, rot);
        // hand: thumb the release, down to the belt pouch, back up carrying the fresh mag, seat it
        const pouch = belt.clone().add(new THREE.Vector3(0.04, 0.06, -0.04));
        const below = this.gunPoint(gun, ud.magRest.clone().add(new THREE.Vector3(0, -0.3, 0)), pos, rot);
        handOverride = r < 0.08 ? null : r < 0.26 ? magW : r < 0.4 ? magW.clone().lerp(pouch, sm(0.26, 0.4, r)) : r < 0.55 ? pouch.clone().lerp(below, sm(0.42, 0.55, r)) : r < 0.82 ? magW.clone().add(new THREE.Vector3(0, -0.03, 0)) : null;
        carry = r > 0.4 && r < 0.55;
        if (r > 0.8 && r < 0.88) pos.y += 0.014 * bell((r - 0.8) / 0.08); // slap
        // racking the charging handle after an empty reload
        if (w.emptyReload && r > 0.86) {
          const q = sm(0.86, 0.93, r) - sm(0.95, 1, r);
          const ch = this.gunPoint(gun, new THREE.Vector3(-0.05, 0.04, 0.02 + 0.08 * q), pos, rot);
          handOverride = ch; rot.y += 0.12 * q; pos.x += 0.02 * q;
        }
      }
      // reload foley at fixed points of the animation
      const cross = (x) => this.prevReloadR != null && this.prevReloadR < x && r >= x;
      if (!def.perShell && !ud.breech) { if (cross(0.22)) this.audio.play('magout'); if (cross(0.76)) this.audio.play('magin'); if (w.emptyReload && cross(0.9)) this.audio.play('rack'); }
      if (ud.breech) { if (cross(0.3)) this.audio.play('magout'); if (cross(0.82)) this.audio.play('magin'); }
      if (def.perShell && cross(0.5)) this.audio.play('shell');
      this.prevReloadR = r;
      this.settleT = t;
    } else this.prevReloadR = null;
    // small settle wobble right after a reload finishes
    const st = t - (this.settleT || -9);
    if (st > 0 && st < 0.6 && w.reloadT <= 0) { rot.x += 0.04 * Math.sin(st * 18) * Math.exp(-st * 7); }
    if (def.kind === 'beam' && w.overheat) {
      // vent: tilt the emitter, slide the cell out, steam out of the vents
      rot.z += 0.35; rot.x += 0.22; magOff.x = -0.035; magOff.z = 0.02;
      if (Math.random() < 0.5) { const vp = this.camera.localToWorld(this.gunPoint(gun, new THREE.Vector3(-0.06, 0.05, -0.1), pos, rot)); this.fx.gasJet(vp, _v.set(-1, 0.5, 0).applyQuaternion(this.camera.quaternion), p.vel, 1.5); }
    }
    if (ud.pump && w.reloadT <= 0) {
      // pump cycles after each shot
      const since = t - Math.max(p.lastFireT, w.rackT || -9);
      magOff.z = 0.1 * bell((since - 0.12) / 0.35);
      if (w.rackT && Math.abs(t - w.rackT - 0.2) < 0.02 && !w.rackSnd) { w.rackSnd = true; this.audio.play('rack'); }
    }
    // grenade throw
    let nadeVis = false;
    if (p.throwT > 0) {
      const q = 1 - p.throwT / THROW_TIME;
      pos.y -= 0.2 * bell(q * 1.05); rot.x -= 0.7 * bell(q * 1.05); pos.x += 0.06 * bell(q);
      const down = new THREE.Vector3(-0.14, -0.42, -0.34), wind = new THREE.Vector3(-0.19, 0.0, -0.34), out = new THREE.Vector3(-0.03, -0.03, -0.66);
      if (q < 0.15) handOverride = down.clone();
      else if (q < 0.4) handOverride = down.clone().lerp(wind, sm(0.15, 0.4, q));
      else if (q < 0.55) handOverride = wind.clone().lerp(out, sm(0.4, 0.52, q));
      else handOverride = out.clone().lerp(down, sm(0.55, 0.85, q));
      nadeVis = q > 0.12 && q < 0.4;
    }
    // hammer strike
    if (p.meleeT > 0) { const q = 1 - p.meleeT / 0.35; pos.z -= 0.22 * bell(q); rot.y += 0.45 * bell(q); rot.z -= 0.35 * bell(q); }
    if (p.switchT > 0) { const q = p.switchT / 0.45; pos.y -= 0.28 * q; rot.x -= 0.9 * q; }
    this.vmHolder.position.copy(pos);
    this.vmHolder.quaternion.setFromEuler(rot);
    ud.mag.position.copy(ud.magRest).add(magOff);
    ud.mag.rotation.x = magSpin;
    ud.mag.visible = magVis;
    // muzzle in camera space (rounds and beams leave from here)
    this.vmMuzzleCam = this.gunPoint(gun, ud.muzzle, pos, rot);
    // arms
    const gripW = this.gunPoint(gun, ud.grip, pos, rot);
    const handW = handOverride || this.gunPoint(gun, ud.pump ? ud.hand.clone().add(new THREE.Vector3(0, 0, magOff.z)) : ud.hand, pos, rot);
    this.placeArm(this.vmArmR, gripW, new THREE.Vector3(0.36, -0.62, 0.18));
    this.placeArm(this.vmArmL, handW, new THREE.Vector3(-0.4, -0.58, 0.05));
    this.vmNade.visible = nadeVis;
    this.vmShell.visible = shellVis;
    // the fresh magazine travels up from the pouch in the hand
    if (!this.vmCarry || this.vmCarry.userData.id !== def.id) {
      if (this.vmCarry) this.vm.remove(this.vmCarry);
      this.vmCarry = ud.mag.clone(true); this.vmCarry.userData.id = def.id; this.vmCarry.scale.setScalar(this.vmS); this.vm.add(this.vmCarry);
    }
    this.vmCarry.visible = carry;
    if (carry) { this.vmCarry.position.copy(handW).add(new THREE.Vector3(0.0, 0.04, -0.02)); this.vmCarry.quaternion.setFromEuler(rot).multiply(_q.setFromEuler(new THREE.Euler(0.4, 0, 0.3))); }
    if (shellVis) this.vmShell.position.copy(handW).add(new THREE.Vector3(0.01, 0.03, -0.03));
    if (nadeVis) this.vmNade.position.copy(handW).add(new THREE.Vector3(0.0, 0.035, -0.04));
    this.vmFlash.intensity *= Math.exp(-dt * 30);
  }

  /** Third-person: a bot's spent magazine floats away from its gun. */
  dropMag(s, w) {
    const gm = s.gunMeshes[w.def.id];
    if (!gm || this.distToListener(s.pos) > 60) return;
    const mesh = gm.userData.mag.clone(true);
    mesh.visible = true;
    mesh.position.copy(_v.set(0.13, 0.25, -0.5).applyQuaternion(s.quat).add(s.pos));
    mesh.quaternion.copy(s.quat);
    const vel = _v2.set(rand(-0.3, 0.3), -1, 0.3).applyQuaternion(s.quat).add(s.vel);
    this.fx.debris(mesh, vel.clone(), new THREE.Vector3(rand(-4, 4), rand(-4, 4), rand(-4, 4)), 6);
  }

  /** Spent magazine / casing: a world-space copy of the mag that drifts and tumbles away in zero-g. */
  ejectDebris(gun, ud, pos, rot, magOff, p, kickCam) {
    const local = this.gunPoint(gun, ud.magRest.clone().add(magOff), pos, rot);
    const wpos = this.camera.localToWorld(local.clone());
    const mesh = ud.mag.clone(true);
    mesh.visible = true;
    mesh.scale.setScalar(this.vmS);
    mesh.position.copy(wpos);
    mesh.quaternion.copy(this.camera.quaternion).multiply(_q.setFromEuler(rot));
    const vel = kickCam.clone().applyQuaternion(this.camera.quaternion).add(p.vel);
    this.fx.debris(mesh, vel, new THREE.Vector3(rand(-4, 4), rand(-4, 4), rand(-4, 4)), 6);
  }

  /** Gun-local point -> camera space for a given holder pose. */
  gunPoint(gun, local, pos, rot) {
    return local.clone().multiplyScalar(this.vmS).applyEuler(rot).add(pos);
  }

  placeArm(arm, hand, elbowCam) {
    arm.position.copy(hand);
    arm.up.set(0, 1, 0).applyQuaternion(this.camera.quaternion);
    // aim the forearm (+z) at the elbow; lookAt needs world coordinates
    arm.lookAt(this.vm.localToWorld(elbowCam.clone()));
  }

  emitThrusterFx(dt) {
    for (const s of this.soldiers) {
      if (!s.alive) continue;
      const near = this.distToListener(s.pos) < 60;
      for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 6; k++) {
          const t = s.throttle[i * 6 + k];
          if (t < 0.15 || !near || Math.random() > t * 0.7) continue;
          const p = _v.copy(TOWERS[i].pos).applyQuaternion(s.quat).add(s.pos);
          const ex = _v2.copy(NOZ_DIR[k]).negate().applyQuaternion(s.quat);
          if (!s.isPlayer) this.fx.thrusterPuff(p, ex, s.vel);
        }
      }
      for (const lk of s.leaks) {
        if (Math.random() < 0.6) {
          const p = _v.copy(lk.p).applyQuaternion(s.quat).add(s.pos);
          this.fx.gasJet(p, _v2.copy(lk.n).applyQuaternion(s.quat), s.vel);
        }
      }
      // sparks from destroyed quads
      for (let i = 0; i < 4; i++) if (s.towers[i].dead && Math.random() < 0.08) this.fx.sparks(_v.copy(TOWERS[i].pos).applyQuaternion(s.quat).add(s.pos), 2, null, 2);
    }
    const p = this.player;
    if (p) this.audio.setHiss(p.alive ? p.throttle.reduce((a, b) => a + b, 0) : 0);
  }

  updateCamera(dt) {
    const cam = this.camera, p = this.player;
    if (this.state === 'menu' || !p) {
      this.menuCam += dt * 0.05;
      const k = this.world.enclosed ? 1 : 2.4;
      const r = 46 * k;
      cam.position.set(Math.cos(this.menuCam) * r, Math.sin(this.menuCam * 0.7) * 10 * k, Math.sin(this.menuCam) * 26 * k);
      cam.lookAt(0, 0, 0);
      this.vm.visible = false;
      this.grid.visible = false;
      return;
    }
    p.eye(cam.position);
    this.shake = (this.shake || 0) * Math.exp(-dt * 5);
    const gun = this.vmGuns[p.weapon.def.id];
    const ud = gun.userData;
    if (p.alive) {
      p.aimQuat(cam.quaternion);
      if (this.shake > 0.01) {
        const a = this.shake * 0.06;
        cam.position.add(_v.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(this.shake * 0.08));
        cam.quaternion.multiply(_q.setFromEuler(new THREE.Euler(rand(-a, a), rand(-a, a), rand(-a, a) * 2)));
      }
      const fovT = this.settings.fov / (1 + ((ud.zoom || 1.5) - 1) * p.adsAmt);
      cam.fov += (fovT - cam.fov) * Math.min(1, dt * 16);
      cam.updateProjectionMatrix();
    } else {
      // death cam: look towards the killer
      const k = p.killedBy;
      if (k) {
        const m = new THREE.Matrix4().lookAt(cam.position, k.pos, _v.set(0, 1, 0).applyQuaternion(cam.quaternion));
        _q.setFromRotationMatrix(m);
        cam.quaternion.slerp(_q, Math.min(1, dt * 2));
      }
    }
    cam.updateMatrixWorld();
    for (const k in this.vmGuns) this.vmGuns[k].visible = p.alive && k === p.weapon.def.id;
    this.scoped = p.alive && !!ud.scope && p.adsAmt > 0.9;
    this.vm.visible = p.alive && !this.scoped;
    if (p.alive) this.animateViewmodel(p, gun, dt);
    // reference grid: on demand or when tumbling
    const tumble = p.alive && p.angVel.length() > 1.4;
    const target = this.showGrid ? 0.22 : tumble ? 0.16 : 0;
    const m = this.grid.material;
    m.opacity += (target - m.opacity) * Math.min(1, dt * 4);
    this.grid.visible = m.opacity > 0.01;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.game = new Game();
  } catch (e) {
    console.error(e);
    document.body.insertAdjacentHTML('beforeend', `<pre style="color:#f66;position:fixed;top:10px;left:10px;z-index:99">${e.stack}</pre>`);
  }
});
