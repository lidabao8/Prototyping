// Procedural audio: every sound is synthesized at startup into AudioBuffers. Spatialized with
// distance attenuation, air absorption (low-pass), speed-of-sound delay, stereo panning and a reverb send.
export class GameAudio {
  constructor() {
    this.ctx = null; this.buffers = {}; this.voices = 0; this.volume = 0.8;
    this.listener = { x: 0, y: 0, z: 0, fx: 0, fz: -1 };
    this.loops = {};
  }

  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
    } catch (e) { this.ctx = null; return; }
    const ctx = this.ctx;
    this.master = ctx.createGain(); this.master.gain.value = this.volume;
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -14; this.comp.ratio.value = 4; this.comp.attack.value = 0.003; this.comp.release.value = 0.25;
    this.master.connect(this.comp); this.comp.connect(ctx.destination);
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.6, 2.2);
    this.reverbGain = ctx.createGain(); this.reverbGain.gain.value = 0.32;
    this.reverb.connect(this.reverbGain); this.reverbGain.connect(this.master);
    this.generate();
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  makeImpulse(dur, decay) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * dur);
    const b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) { const t = i / len; d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < 400 ? i / 400 : 1); }
    }
    return b;
  }

  buf(dur, fn) {
    const ctx = this.ctx, sr = ctx.sampleRate, len = Math.max(1, Math.floor(sr * dur));
    const b = ctx.createBuffer(1, len, sr);
    const d = b.getChannelData(0);
    fn(d, sr, len);
    let peak = 0; for (let i = 0; i < len; i++) peak = Math.max(peak, Math.abs(d[i]));
    if (peak > 0) for (let i = 0; i < len; i++) d[i] /= peak;
    return b;
  }

  // filtered noise helpers
  static lp(d, a) { let y = 0; for (let i = 0; i < d.length; i++) { y += a * (d[i] - y); d[i] = y; } }
  static hp(d, a) { let y = 0, px = 0; for (let i = 0; i < d.length; i++) { y = a * (y + d[i] - px); px = d[i]; d[i] = y; } }

  gun(dur, body, crack, thumpHz, tail, lpA) {
    return this.buf(dur, (d, sr, len) => {
      const n = new Float32Array(len);
      for (let i = 0; i < len; i++) n[i] = Math.random() * 2 - 1;
      GameAudio.lp(n, lpA);
      for (let i = 0; i < len; i++) {
        const t = i / sr;
        const env = Math.exp(-t * body) * 0.8 + Math.exp(-t * tail) * 0.25;
        const cr = Math.exp(-t * 300) * crack * (Math.random() * 2 - 1);
        const th = Math.sin(2 * Math.PI * thumpHz * t * (1 - t * 2)) * Math.exp(-t * 28) * 0.9;
        d[i] = n[i] * env * 2.2 + cr + th;
      }
    });
  }

  generate() {
    const B = this.buffers;
    B.rifle = this.gun(0.9, 30, 1.0, 85, 5, 0.45);
    B.carbine = this.gun(0.8, 34, 1.0, 95, 6, 0.5);
    B.smg = this.gun(0.55, 48, 0.8, 120, 9, 0.55);
    B.pistol = this.gun(0.5, 45, 0.9, 140, 9, 0.6);
    B.lmg = this.gun(1.0, 26, 1.1, 70, 4, 0.4);
    B.sniper = this.gun(1.8, 16, 1.3, 55, 2.2, 0.35);
    B.dmr = this.gun(1.3, 22, 1.2, 65, 3, 0.38);
    B.shotgun = this.gun(1.1, 18, 0.9, 60, 3.5, 0.3);
    B.suppressed = this.buf(0.25, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 45) * 0.6 + Math.sin(2 * Math.PI * 180 * t) * Math.exp(-t * 60) * 0.5; } GameAudio.lp(d, 0.25); });
    B.far = this.buf(1.6, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * (Math.exp(-t * 14) + Math.exp(-t * 3) * 0.3); } GameAudio.lp(d, 0.06); GameAudio.lp(d, 0.1); });
    B.explosion = this.buf(3.2, (d, sr, len) => {
      for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * (Math.exp(-t * 3.2) + Math.exp(-t * 18) * 1.5) + Math.sin(2 * Math.PI * (55 - t * 12) * t) * Math.exp(-t * 4) * 1.2; }
      GameAudio.lp(d, 0.08); GameAudio.lp(d, 0.18);
    });
    B.explosionFar = this.buf(3.5, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 2.2) + Math.sin(2 * Math.PI * 40 * t) * Math.exp(-t * 3); } GameAudio.lp(d, 0.025); GameAudio.lp(d, 0.05); });
    const step = (hard) => this.buf(0.12, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * (hard ? 70 : 45)) * (t < 0.004 ? t / 0.004 : 1); } GameAudio.lp(d, hard ? 0.5 : 0.18); });
    B.stepGrass = step(false); B.stepHard = step(true);
    B.stepWater = this.buf(0.3, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 14) * (0.5 + 0.5 * Math.sin(t * 300)); } GameAudio.lp(d, 0.3); });
    const click = (f, dur, decay) => this.buf(dur, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.sin(2 * Math.PI * f * t) * 0.6 + (Math.random() * 2 - 1) * 0.5) * Math.exp(-t * decay); } });
    B.magOut = click(900, 0.15, 40); B.magIn = click(1300, 0.12, 55); B.bolt = this.buf(0.3, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; const a = t < 0.12 ? Math.exp(-(t) * 60) : Math.exp(-(t - 0.15) * 60) * (t > 0.15 ? 1 : 0); d[i] = (Math.sin(2 * Math.PI * 1500 * t) * 0.5 + (Math.random() * 2 - 1) * 0.6) * a; } });
    B.dry = click(2400, 0.06, 120); B.pin = click(3000, 0.18, 30); B.switch = click(700, 0.1, 50);
    B.hit = this.buf(0.07, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = Math.sin(2 * Math.PI * 2200 * t) * Math.exp(-t * 70); } });
    B.headshot = this.buf(0.35, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.sin(2 * Math.PI * 1760 * t) + Math.sin(2 * Math.PI * 2640 * t) * 0.5) * Math.exp(-t * 12); } });
    B.kill = this.buf(0.25, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = Math.sin(2 * Math.PI * (900 + t * 1200) * t) * Math.exp(-t * 14) + (Math.random() * 2 - 1) * Math.exp(-t * 60) * 0.3; } });
    B.hurt = this.buf(0.2, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = Math.sin(2 * Math.PI * (120 - t * 200) * t) * Math.exp(-t * 18) + (Math.random() * 2 - 1) * Math.exp(-t * 40) * 0.4; } GameAudio.lp(d, 0.3); });
    B.whiz = this.buf(0.35, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; const e = Math.sin(Math.PI * t / 0.35); d[i] = (Math.random() * 2 - 1) * e * e; } GameAudio.hp(d, 0.92); GameAudio.lp(d, 0.4); });
    B.crack = this.buf(0.09, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 90) + (t < 0.002 ? 1 : 0); } GameAudio.hp(d, 0.8); });
    const imp = (lpA, decay, ring) => this.buf(0.25, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * decay) + (ring ? Math.sin(2 * Math.PI * ring * t) * Math.exp(-t * 20) * 0.6 : 0); } GameAudio.lp(d, lpA); });
    B.impactDirt = imp(0.15, 50, 0); B.impactHard = imp(0.55, 70, 0); B.impactMetal = imp(0.7, 40, 2900); B.impactWood = imp(0.3, 45, 420); B.impactFlesh = imp(0.12, 35, 0);
    B.impactWater = this.buf(0.4, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.exp(-t * 12) * (0.6 + 0.4 * Math.sin(t * 900)); } GameAudio.lp(d, 0.25); });
    const brk = (lpA, dur, ring) => this.buf(dur, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * (Math.exp(-t * 6) * (0.5 + Math.random() * 0.5)) + (ring ? Math.sin(2 * Math.PI * ring * t * (1 + t)) * Math.exp(-t * 5) * 0.4 : 0); } GameAudio.lp(d, lpA); });
    B.breakWood = brk(0.25, 0.9, 300); B.breakStone = brk(0.12, 1.4, 0); B.breakMetal = brk(0.5, 1.2, 1200);
    const tone = (fs, dur) => this.buf(dur, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; const k = Math.min(fs.length - 1, Math.floor(t / dur * fs.length)); d[i] = Math.sin(2 * Math.PI * fs[k] * t) * Math.min(1, (dur - t) * 10) * Math.min(1, t * 200) * 0.6; } });
    B.capture = tone([660, 880, 1320], 0.5); B.lost = tone([880, 660, 440], 0.5); B.beep = tone([1200], 0.12); B.ui = tone([900], 0.05); B.deploy = tone([440, 660], 0.3);
    B.heartbeat = this.buf(0.8, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; const b1 = Math.exp(-((t - 0.05) ** 2) / 0.0004), b2 = Math.exp(-((t - 0.28) ** 2) / 0.0004) * 0.7; d[i] = Math.sin(2 * Math.PI * 55 * t) * (b1 + b2); } });
    B.bandage = this.buf(0.6, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * (0.4 + 0.6 * Math.abs(Math.sin(t * 40))) * Math.exp(-t * 3); } GameAudio.hp(d, 0.7); });
    B.throw = this.buf(0.25, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * t / 0.25); } GameAudio.lp(d, 0.2); });
    B.bounce = imp(0.4, 60, 1800);
    B.rocket = this.buf(1.2, (d, sr, len) => { for (let i = 0; i < len; i++) { const t = i / sr; d[i] = (Math.random() * 2 - 1) * (Math.exp(-t * 25) * 1.5 + Math.exp(-t * 2) * 0.5); } GameAudio.lp(d, 0.2); });
    B.wind = this.buf(6, (d, sr, len) => { let b = 0; for (let i = 0; i < len; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; const t = i / sr; d[i] = b * (0.6 + 0.4 * Math.sin(t * 0.9) * Math.sin(t * 0.37 + 1)); } const f = Math.floor(sr * 0.3); for (let i = 0; i < f; i++) { const a = i / f; d[i] = d[i] * a + d[len - f + i] * (1 - a); } });
    B.birds = this.buf(8, (d, sr, len) => {
      for (let k = 0; k < 14; k++) {
        const st = Math.random() * 7.2, f0 = 2500 + Math.random() * 2500, n = 2 + Math.floor(Math.random() * 4);
        for (let c = 0; c < n; c++) {
          const s0 = Math.floor((st + c * 0.13) * sr), dur = Math.floor(0.08 * sr);
          for (let i = 0; i < dur && s0 + i < len; i++) { const t = i / sr; d[s0 + i] += Math.sin(2 * Math.PI * (f0 + Math.sin(t * 90) * 600) * t) * Math.sin(Math.PI * i / dur) * 0.3; }
        }
      }
    });
  }

  setListener(x, y, z, fx, fz) { const L = this.listener; L.x = x; L.y = y; L.z = z; const l = Math.hypot(fx, fz) || 1; L.fx = fx / l; L.fz = fz / l; }

  _out(vol, pan, cutoff, reverb, delay) {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = vol;
    let node = g;
    if (cutoff < 19000) { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff; g.connect(f); node = f; }
    let outNode = node;
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; node.connect(p); outNode = p; }
    outNode.connect(this.master);
    if (reverb > 0) { const rg = ctx.createGain(); rg.gain.value = reverb; outNode.connect(rg); rg.connect(this.reverb); }
    return g;
  }

  play2d(name, o = {}) {
    if (!this.ctx || !this.buffers[name]) return;
    if (this.voices > 60) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers[name];
    src.playbackRate.value = (o.rate || 1) * (o.vary ? 1 + (Math.random() - 0.5) * o.vary : 1);
    const g = this._out(o.vol ?? 1, o.pan || 0, o.cutoff || 20000, o.reverb ?? 0.05);
    src.connect(g);
    this.voices++;
    src.onended = () => { this.voices--; try { g.disconnect(); } catch (e) { /* noop */ } };
    src.start(this.ctx.currentTime + (o.delay || 0));
    return src;
  }

  play3d(name, x, y, z, o = {}) {
    if (!this.ctx) return;
    const L = this.listener;
    const dx = x - L.x, dy = y - L.y, dz = z - L.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const maxD = o.maxDist || 120;
    if (d > maxD) return;
    const ref = o.ref || 6;
    let vol = (o.vol ?? 1) * ref / (ref + Math.max(0, d - ref) * (o.rolloff || 1));
    vol *= 1 - Math.pow(d / maxD, 3);
    if (vol < 0.004) return;
    if (this.voices > 48 && vol < 0.15) return;
    // pan from listener-relative direction (right vector = (-fz, fx))
    const rx = -L.fz, rz = L.fx;
    const pan = d > 0.5 ? Math.max(-1, Math.min(1, (dx * rx + dz * rz) / Math.max(1, Math.hypot(dx, dz)) * 0.85)) : 0;
    const cutoff = o.occluded ? Math.min(2500, 20000 / (1 + d * 0.02)) : 20000 / (1 + d * 0.012);
    const delay = d > 60 ? d / 343 : 0;
    this.play2d(name, { vol, pan, cutoff, rate: o.rate, vary: o.vary ?? 0.08, reverb: (o.reverb ?? 0.18) * Math.min(1, 0.4 + d / 80), delay });
  }

  gunshot(sound, x, y, z, suppressed, isLocal) {
    if (!this.ctx) return;
    if (suppressed) { this.play3d('suppressed', x, y, z, { vol: isLocal ? 0.55 : 0.6, maxDist: 60, ref: 4 }); return; }
    if (isLocal) { this.play2d(sound, { vol: 0.62, vary: 0.06, reverb: 0.28 }); return; }
    const L = this.listener;
    const d = Math.hypot(x - L.x, y - L.y, z - L.z);
    if (d < 90) this.play3d(sound, x, y, z, { vol: 0.95, maxDist: 160, ref: 10, rolloff: 0.8 });
    if (d > 40) this.play3d('far', x, y, z, { vol: 0.55 * Math.min(1, (d - 40) / 60), maxDist: 900, ref: 60, rolloff: 0.5, reverb: 0.5 });
  }

  explosion(x, y, z) {
    if (!this.ctx) return;
    const L = this.listener;
    const d = Math.hypot(x - L.x, y - L.y, z - L.z);
    if (d < 150) this.play3d('explosion', x, y, z, { vol: 1.2, maxDist: 250, ref: 14, rolloff: 0.7, reverb: 0.4 });
    this.play3d('explosionFar', x, y, z, { vol: 0.9, maxDist: 1200, ref: 80, rolloff: 0.5, reverb: 0.6 });
  }

  startAmbience(biome, night) {
    if (!this.ctx) return;
    this.stopAmbience();
    const mk = (name, vol) => {
      const src = this.ctx.createBufferSource(); src.buffer = this.buffers[name]; src.loop = true;
      const g = this.ctx.createGain(); g.gain.value = vol; src.connect(g); g.connect(this.master); src.start();
      return { src, g };
    };
    this.loops.wind = mk('wind', biome === 'arid' ? 0.22 : 0.14);
    if (!night && biome !== 'arid') this.loops.birds = mk('birds', 0.06);
  }
  stopAmbience() { for (const k in this.loops) { try { this.loops[k].src.stop(); } catch (e) { /* noop */ } } this.loops = {}; }
}
