// Minimal synthesized audio. In vacuum you only hear what travels through your suit,
// so distant sounds are heavily muffled and quiet.
export class Audio {
  constructor() { this.ctx = null; this.master = null; this.volume = 0.6; this.hiss = null; }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate * 1.5;
      this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noise.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      // continuous thruster hiss for the local player
      const src = this.ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
      const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 0.6;
      const g = this.ctx.createGain(); g.gain.value = 0;
      src.connect(f); f.connect(g); g.connect(this.master); src.start();
      this.hiss = g;
    } catch (e) { this.ctx = null; }
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  setHiss(level) { if (this.hiss) this.hiss.gain.setTargetAtTime(Math.min(0.25, level * 0.06), this.ctx.currentTime, 0.03); }

  burst({ freq = 800, q = 1, dur = 0.15, gain = 0.5, type = 'lowpass', tone = 0, toneDur = 0.1, dist = 0 }) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const att = 1 / (1 + dist * 0.08);
    if (att < 0.03) return;
    const muffle = dist > 3 ? Math.max(250, freq * 0.25) : freq;
    const src = this.ctx.createBufferSource(); src.buffer = this.noise;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = muffle; f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain * att, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t, Math.random()); src.stop(t + dur + 0.05);
    if (tone) {
      const o = this.ctx.createOscillator(); o.frequency.setValueAtTime(tone, t); o.frequency.exponentialRampToValueAtTime(tone * 0.4, t + toneDur);
      const og = this.ctx.createGain(); og.gain.setValueAtTime(gain * att * 0.6, t); og.gain.exponentialRampToValueAtTime(0.001, t + toneDur);
      o.connect(og); og.connect(this.master); o.start(t); o.stop(t + toneDur + 0.05);
    }
  }

  /** Tone with a fast attack and exponential decay, optional pitch glide. */
  tone(freq, dur, gain, type = 'sine', delay = 0, glideTo = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }

  /** Precisely timed filtered noise hit (no random start offset), for transients. */
  noiseHit(type, freq, q, dur, gain, delay = 0, attack = 0.001) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource(); src.buffer = this.noise;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
  }

  /** Oscillator through a low-pass, for dark tonal layers. */
  darkTone(freq, dur, gain, type = 'sawtooth', cutoff = 900, delay = 0, glideTo = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(cutoff, t); f.frequency.exponentialRampToValueAtTime(Math.max(80, cutoff * 0.3), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }

  /** Hitmarker: a clicky transient with body underneath (no musical ring). Rate-limited for beams. */
  hitTick(head) {
    const now = performance.now();
    if (now - (this._lastHit || 0) < (head ? 45 : 70)) return;
    this._lastHit = now;
    const j = 1 + (Math.random() - 0.5) * 0.06;
    this.noiseHit('highpass', 3200 * j, 0.7, 0.012, 0.42);            // sharp click
    this.noiseHit('bandpass', 1250 * j, 3.5, 0.035, 0.32);            // mid "tock"
    this.tone(200 * j, 0.085, 0.36, 'sine', 0, 80);                // low body thump (depth)
    if (head) {
      this.noiseHit('highpass', 5200, 0.9, 0.009, 0.3, 0.004);       // crisper second transient
      this.darkTone(2290, 0.07, 0.035, 'square', 4200, 0.006);    // short inharmonic metal tick
      this.darkTone(3170, 0.05, 0.025, 'square', 5000, 0.006);
    }
  }

  /** Kill confirm: heavy and grim - sub drop, hard click, muted clank, low filtered power-fifth stab. */
  killConfirm(head) {
    this.tone(120, 0.38, 0.55, 'sine', 0, 38);                     // sub drop
    this.noiseHit('highpass', 2600, 0.7, 0.016, 0.5);                 // hard click
    this.noiseHit('bandpass', 1000, 2.5, 0.05, 0.38);                 // tock
    this.noiseHit('bandpass', 620, 3, 0.2, 0.22, 0.012);              // muted metallic clank
    this.darkTone(110, 0.42, 0.13, 'sawtooth', 950, 0.02);         // low power fifth
    this.darkTone(164.8, 0.4, 0.09, 'sawtooth', 950, 0.02);
    this.darkTone(55, 0.45, 0.12, 'triangle', 400, 0.02);
    if (head) {
      this.noiseHit('highpass', 4500, 0.8, 0.03, 0.32, 0.002);       // crack
      this.darkTone(220, 0.5, 0.05, 'sawtooth', 1600, 0.03);
    }
  }

  beep(freq, dur = 0.08, gain = 0.15, type = 'square') {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }

  play(name, dist = 0) {
    switch (name) {
      case 'rifle': this.burst({ freq: 1800, dur: 0.12, gain: 0.35, tone: 140, toneDur: 0.08, dist }); break;
      case 'shotgun': this.burst({ freq: 900, dur: 0.3, gain: 0.6, tone: 90, toneDur: 0.2, dist }); break;
      case 'gyro': this.burst({ freq: 3000, type: 'highpass', dur: 0.5, gain: 0.25, dist }); break;
      case 'recoilless': this.burst({ freq: 700, dur: 0.6, gain: 0.7, tone: 70, toneDur: 0.35, dist }); break;
      case 'rail': this.burst({ freq: 5200, type: 'highpass', dur: 0.25, gain: 0.55, tone: 55, toneDur: 0.5, dist }); if (dist < 30) this.tone(1900, 0.35, 0.08, 'sawtooth', 0, 120); break;
      case 'railcharge': this.tone(260, 0.9, 0.07, 'sawtooth', 0, 2100); this.tone(520, 0.9, 0.04, 'sine', 0, 4200); break;
      case 'maser': this.beep(2600 + Math.random() * 200, 0.05, dist > 3 ? 0.02 / (1 + dist * 0.05) : 0.05, 'sawtooth'); break;
      case 'explosion': this.burst({ freq: 400, dur: 1.0, gain: 0.9, tone: 60, toneDur: 0.6, dist }); break;
      case 'hit': this.hitTick(false); break;
      case 'head': this.hitTick(true); break;
      case 'kill': this.killConfirm(false); break;
      case 'killhead': this.killConfirm(true); break;
      case 'hurt': this.burst({ freq: 300, dur: 0.25, gain: 0.5, tone: 70, toneDur: 0.2 }); break;
      case 'impact': this.burst({ freq: 200, dur: 0.3, gain: 0.5, tone: 50, toneDur: 0.25, dist }); break;
      case 'clank': this.burst({ freq: 1200, q: 6, type: 'bandpass', dur: 0.15, gain: 0.3, dist }); break;
      case 'reload': this.burst({ freq: 2500, q: 8, type: 'bandpass', dur: 0.06, gain: 0.25 }); break;
      case 'magout': this.burst({ freq: 1800, q: 9, type: 'bandpass', dur: 0.05, gain: 0.3 }); break;
      case 'magin': this.burst({ freq: 900, q: 6, type: 'bandpass', dur: 0.08, gain: 0.45 }); setTimeout(() => this.burst({ freq: 2600, q: 10, type: 'bandpass', dur: 0.03, gain: 0.25 }), 60); break;
      case 'rack': this.burst({ freq: 1400, q: 7, type: 'bandpass', dur: 0.06, gain: 0.35 }); setTimeout(() => this.burst({ freq: 1100, q: 7, type: 'bandpass', dur: 0.07, gain: 0.4 }), 110); break;
      case 'shell': this.burst({ freq: 2000, q: 8, type: 'bandpass', dur: 0.04, gain: 0.25 }); break;
            case 'empty': this.beep(300, 0.04, 0.1); break;
      case 'grab': this.burst({ freq: 700, q: 4, type: 'bandpass', dur: 0.12, gain: 0.35 }); break;
      case 'push': this.burst({ freq: 400, dur: 0.18, gain: 0.3 }); break;
      case 'warn': this.beep(660, 0.1, 0.1, 'sawtooth'); break;
      case 'melee': this.burst({ freq: 500, dur: 0.2, gain: 0.6, tone: 120, toneDur: 0.15, dist }); break;
      case 'throw': this.burst({ freq: 1500, dur: 0.1, gain: 0.15 }); break;
      case 'bounce': this.burst({ freq: 2200, q: 10, type: 'bandpass', dur: 0.08, gain: 0.2, dist }); break;
      case 'mode': this.beep(1000, 0.05, 0.1, 'sine'); break;
      case 'spawn': this.beep(520, 0.1, 0.12, 'sine'); setTimeout(() => this.beep(780, 0.15, 0.12, 'sine'), 110); break;
      default: break;
    }
  }
}
