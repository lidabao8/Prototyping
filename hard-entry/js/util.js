"use strict";
// =====================================================================
//  HARD ENTRY — shared utilities, input, audio, voice
// =====================================================================
const TS = 32;                      // tile size in world units
const TAU = Math.PI * 2;
const FONT = "'Bahnschrift','DIN Alternate','Roboto Condensed','Arial Narrow',Arial,sans-serif";
const MONO = "'Consolas','SFMono-Regular',Menlo,'DejaVu Sans Mono',monospace";

const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const dist = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay);
function angDiff(a, b) { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; }
function turnToward(a, b, step) { const d = angDiff(a, b); return Math.abs(d) <= step ? b : a + Math.sign(d) * step; }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function weighted(obj) {
  let total = 0; for (const k in obj) total += obj[k];
  let r = Math.random() * total;
  for (const k in obj) { r -= obj[k]; if (r <= 0) return k; }
  return Object.keys(obj)[0];
}
function fmtTime(s) { s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
// first intersection param t in [0,1] of segment (x0,y0)->(x1,y1) with circle, or -1
function segCircle(x0, y0, x1, y1, cx, cy, r) {
  const dx = x1 - x0, dy = y1 - y0, fx = x0 - cx, fy = y0 - cy;
  const a = dx * dx + dy * dy; if (a === 0) return -1;
  const b = 2 * (fx * dx + fy * dy), c = fx * fx + fy * fy - r * r;
  let disc = b * b - 4 * a * c; if (disc < 0) return -1;
  disc = Math.sqrt(disc);
  const t1 = (-b - disc) / (2 * a), t2 = (-b + disc) / (2 * a);
  if (t1 >= 0 && t1 <= 1) return t1;
  if (t1 < 0 && t2 >= 0) return 0;
  return -1;
}
// distance from point to segment
function pointSegDist(px, py, x0, y0, x1, y1) {
  const dx = x1 - x0, dy = y1 - y0, l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - x0) * dx + (py - y0) * dy) / l2 : 0; t = clamp(t, 0, 1);
  return Math.hypot(px - (x0 + dx * t), py - (y0 + dy * t));
}
function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; }
function store(key, val) { try { if (val === undefined) return JSON.parse(localStorage.getItem(key)); localStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; } return val; }

// =====================================================================
//  INPUT
// =====================================================================
const Input = {
  keys: {}, pressed: {}, released: {},
  mouse: { x: 0, y: 0, l: false, r: false, m: false, lp: false, rp: false, mp: false, lr: false },
  wheel: 0, blockGameKeys: false,
  down(code) { return !!this.keys[code]; },
  hit(code) { return !!this.pressed[code]; },
  endFrame() { this.pressed = {}; this.released = {}; this.mouse.lp = this.mouse.rp = this.mouse.mp = this.mouse.lr = false; this.wheel = 0; }
};
const GAME_KEYS = new Set(['Tab', 'Space', 'KeyQ', 'KeyE', 'KeyF', 'KeyG', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyR', 'ArrowUp', 'ArrowDown', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Quote', 'AltLeft', 'AltRight']);
window.addEventListener('keydown', e => {
  if (!Input.keys[e.code]) Input.pressed[e.code] = true;
  Input.keys[e.code] = true;
  if (Input.blockGameKeys && GAME_KEYS.has(e.code)) e.preventDefault();
  Sfx.unlock();
});
window.addEventListener('keyup', e => { Input.keys[e.code] = false; Input.released[e.code] = true; });
window.addEventListener('blur', () => { Input.keys = {}; Input.mouse.l = Input.mouse.r = Input.mouse.m = false; });
function bindMouse(el) {
  el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); Input.mouse.x = e.clientX - r.left; Input.mouse.y = e.clientY - r.top; });
  el.addEventListener('mousedown', e => {
    Sfx.unlock();
    if (e.button === 0) { Input.mouse.l = true; Input.mouse.lp = true; }
    if (e.button === 2) { Input.mouse.r = true; Input.mouse.rp = true; }
    if (e.button === 1) { Input.mouse.m = true; Input.mouse.mp = true; e.preventDefault(); }
  });
  window.addEventListener('mouseup', e => {
    if (e.button === 0) { Input.mouse.l = false; Input.mouse.lr = true; }
    if (e.button === 2) Input.mouse.r = false;
    if (e.button === 1) Input.mouse.m = false;
  });
  el.addEventListener('contextmenu', e => e.preventDefault());
  el.addEventListener('wheel', e => { Input.wheel += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
}

// =====================================================================
//  AUDIO (all synthesized with WebAudio)
// =====================================================================
const Sfx = {
  ctx: null, master: null, filter: null, noiseBuf: null, listener: { x: 0, y: 0 }, muffle: 0, volume: 0.55,
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.filter = this.ctx.createBiquadFilter(); this.filter.type = 'lowpass'; this.filter.frequency.value = 20000;
      this.master = this.ctx.createGain(); this.master.gain.value = this.volume;
      this.filter.connect(this.master); this.master.connect(this.ctx.destination);
      const len = Math.floor(this.ctx.sampleRate * 1.2);
      const b = this.ctx.createBuffer(1, len, this.ctx.sampleRate); const d = b.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = b;
    } catch (e) { this.ctx = null; }
  },
  setMuffle(m) { // 0..1 (flashbang deafness)
    this.muffle = m; if (!this.ctx) return;
    this.filter.frequency.setTargetAtTime(m > 0.01 ? 300 + (1 - m) * 6000 : 20000, this.ctx.currentTime, 0.05);
  },
  att(x, y) {
    if (x == null) return 1;
    const d = dist(x, y, this.listener.x, this.listener.y);
    return clamp(1 - d / 1500, 0.04, 1);
  },
  noise(dur, freq, gain, x, y, opt = {}) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const src = c.createBufferSource(); src.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = opt.type || 'lowpass'; f.frequency.value = freq; f.Q.value = opt.q || 0.8;
    if (opt.sweep) f.frequency.exponentialRampToValueAtTime(opt.sweep, t + dur);
    const g = c.createGain(); const v = gain * this.att(x, y);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0002), t + (opt.attack || 0.003));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.filter);
    src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
  },
  tone(freq, dur, gain, x, y, opt = {}) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + (opt.delay || 0);
    const o = c.createOscillator(); o.type = opt.type || 'square'; o.frequency.setValueAtTime(freq, t);
    if (opt.slide) o.frequency.exponentialRampToValueAtTime(opt.slide, t + dur);
    const g = c.createGain(); const v = gain * this.att(x, y);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(v, 0.0002), t + (opt.attack || 0.005));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(opt.dry ? this.master : this.filter); o.start(t); o.stop(t + dur + 0.05);
  },
  shot(kind, x, y) {
    switch (kind) {
      case 'rifle': this.noise(0.16, 2600, 0.9, x, y); this.tone(140, 0.09, 0.35, x, y, { type: 'triangle', slide: 50 }); break;
      case 'smg': this.noise(0.11, 3200, 0.7, x, y); this.tone(170, 0.06, 0.25, x, y, { type: 'triangle', slide: 60 }); break;
      case 'pistol': this.noise(0.13, 2200, 0.75, x, y); this.tone(190, 0.07, 0.3, x, y, { type: 'triangle', slide: 70 }); break;
      case 'shotgun': this.noise(0.32, 1500, 1.0, x, y); this.tone(90, 0.16, 0.45, x, y, { type: 'triangle', slide: 40 }); break;
      case 'shotgun_ll': this.noise(0.22, 1100, 0.6, x, y); break;
      case 'pop': this.noise(0.06, 900, 0.35, x, y, { type: 'bandpass', q: 2 }); break;
      case 'taser': this.tone(60, 0.5, 0.18, x, y, { type: 'sawtooth' }); this.noise(0.5, 4000, 0.15, x, y, { type: 'highpass' }); break;
      case 'empty': this.tone(1800, 0.03, 0.15, x, y); break;
    }
  },
  boom(x, y, big = 1) { this.noise(0.9 * big, 600, 1.2, x, y, { sweep: 80 }); this.tone(55, 0.6, 0.6, x, y, { type: 'sine', slide: 30 }); },
  bang(x, y) { this.noise(0.5, 3000, 1.3, x, y, { sweep: 300 }); },
  ring(intensity) { this.tone(3800, 2.5 * intensity + 0.5, 0.06 * intensity, null, null, { type: 'sine', dry: true, attack: 0.02 }); },
  kick(x, y) { this.noise(0.14, 500, 0.9, x, y); this.tone(70, 0.15, 0.5, x, y, { type: 'sine', slide: 40 }); },
  splinter(x, y) { this.noise(0.35, 2000, 0.6, x, y, { type: 'bandpass', q: 1.5, sweep: 600 }); },
  door(x, y, close) { this.noise(0.25, close ? 400 : 700, 0.25, x, y, { type: 'bandpass', q: 3 }); if (close) this.kick(x, y); },
  rattle(x, y) { for (let i = 0; i < 3; i++) this.tone(900 + i * 70, 0.05, 0.08, x, y, { delay: i * 0.07 }); },
  click(x, y) { this.tone(2400, 0.025, 0.12, x, y); },
  reload(x, y) { this.tone(700, 0.04, 0.12, x, y); this.tone(500, 0.05, 0.12, x, y, { delay: 0.25 }); this.tone(1100, 0.04, 0.14, x, y, { delay: 0.55 }); },
  zip(x, y) { this.noise(0.35, 5000, 0.25, x, y, { type: 'highpass', sweep: 9000 }); },
  radio() { this.tone(1250, 0.06, 0.07, null, null, { dry: true }); this.tone(1650, 0.06, 0.06, null, null, { delay: 0.07, dry: true }); this.noise(0.12, 3000, 0.05, null, null, { type: 'bandpass' }); },
  yell(x, y, pitch = 1) { this.tone(220 * pitch, 0.18, 0.12, x, y, { type: 'sawtooth', slide: 160 * pitch }); this.noise(0.18, 1200, 0.1, x, y, { type: 'bandpass', q: 2 }); },
  hit(x, y) { this.noise(0.07, 900, 0.4, x, y); },
  ui() { this.tone(900, 0.04, 0.08, null, null, { dry: true }); },
  beep(x, y) { this.tone(2000, 0.08, 0.15, x, y, { type: 'sine' }); },
  hiss(x, y) { this.noise(1.2, 2500, 0.25, x, y, { type: 'highpass' }); },
};

// =====================================================================
//  VOICE (optional browser speech synthesis for yells / callouts)
// =====================================================================
const Voice = {
  on: store('hardentry.voice') !== false, last: 0,
  say(text, opt = {}) {
    if (!this.on || !window.speechSynthesis) return;
    const now = performance.now();
    if (!opt.force && now - this.last < 900) return;
    this.last = now;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.pitch = opt.pitch || 1; u.rate = opt.rate || 1.25; u.volume = opt.vol == null ? 0.7 : opt.vol;
      window.speechSynthesis.speak(u);
    } catch (e) { /* speech unavailable */ }
  }
};
