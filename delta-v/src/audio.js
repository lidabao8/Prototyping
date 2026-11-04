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
      case 'explosion': this.burst({ freq: 400, dur: 1.0, gain: 0.9, tone: 60, toneDur: 0.6, dist }); break;
      case 'hit': this.beep(1400, 0.05, 0.12, 'triangle'); break;
      case 'head': this.beep(2100, 0.07, 0.15, 'triangle'); break;
      case 'kill': this.beep(880, 0.08, 0.15); setTimeout(() => this.beep(1320, 0.12, 0.15), 80); break;
      case 'hurt': this.burst({ freq: 300, dur: 0.25, gain: 0.5, tone: 70, toneDur: 0.2 }); break;
      case 'impact': this.burst({ freq: 200, dur: 0.3, gain: 0.5, tone: 50, toneDur: 0.25, dist }); break;
      case 'clank': this.burst({ freq: 1200, q: 6, type: 'bandpass', dur: 0.15, gain: 0.3, dist }); break;
      case 'reload': this.burst({ freq: 2500, q: 8, type: 'bandpass', dur: 0.06, gain: 0.25 }); break;
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
