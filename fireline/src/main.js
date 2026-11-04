// FIRELINE — app bootstrap: renderer, main loop, menus <-> match lifecycle, pause & pointer lock.
import * as THREE from 'three';
import { settings } from './core/settings.js';
import { GameAudio } from './core/audio.js';
import { Input } from './core/input.js';
import { Menus } from './ui/menus.js';
import { Game } from './game/game.js';

class App {
  constructor() {
    this.canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.settings = settings;
    this.audio = new GameAudio();
    this.input = new Input(this.canvas);
    this.params = new URLSearchParams(location.search);
    if (this.params.get('test')) this.input.allowUnlocked = true;
    if (this.params.get('preset')) settings.set('preset', this.params.get('preset'));
    this.menus = new Menus(this);
    this.matchConfig = { map: this.params.get('map') || 'greenhollow', mode: this.params.get('mode') || 'conquest', time: this.params.get('time') || 'default', team: 0, tickets: 0, name: 'You' };
    this.game = null;
    this.last = performance.now();
    window.addEventListener('resize', () => this.resize());
    const unlockAudio = () => this.audio.unlock();
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    this.input.onLockChange = (locked) => {
      if (!locked) this.lastUnlock = performance.now();
      if (!locked && this.game && !this.game.paused && !this.game.ended && this.game.player.state !== 'dead' && !this.input.allowUnlocked) this.pause();
    };
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'Escape' || !this.game || this.game.ended) return;
      if (performance.now() - (this.lastUnlock || 0) < 400) return; // lock-exit already paused
      if (this.game.paused) this.resume();
      else if (this.game.player.state !== 'dead') this.pause();
    });
    this.canvas.addEventListener('click', () => { if (this.game && !this.game.paused && !this.game.ended && this.game.player.state !== 'dead') this.lockPointer(); });
    this.resize();
    this.menus.showMain();
    requestAnimationFrame((t) => this.loop(t));
    if (this.params.get('autostart')) this.startMatch().then(() => { if (this.params.get('autodeploy')) setTimeout(() => this.autoDeploy(), 300); });
  }

  autoDeploy() {
    const g = this.game;
    if (!g) return;
    this.menus.showDeploy(g);
    g.respawnAt = 0;
    this.menus.updateDeploy(g);
    this.menus.tryDeploy();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const pr = Math.min(window.devicePixelRatio || 1, 2) * settings.get('renderScale');
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    if (this.game) this.game.resize(w, h);
  }

  lockPointer() { if (!this.input.allowUnlocked) this.input.lock(); }
  unlockPointer() { this.input.unlock(); }

  async startMatch() {
    this.audio.unlock();
    if (this.game) { this.game.dispose(); this.game = null; }
    this.menus.showLoading('Preparing', 0);
    const cfg = Object.assign({}, this.matchConfig);
    const game = new Game(this, cfg);
    try {
      await game.init((text, p) => this.menus.showLoading(text, p));
    } catch (e) {
      console.error(e);
      this.menus.showLoading('Failed to load: ' + e.message, 0);
      throw e;
    }
    this.game = game;
    window.__fireline = { app: this, game };
    this.resize();
    this.menus.hideAll();
    this.menus.showDeploy(game);
    this.last = performance.now();
  }

  quitMatch() {
    if (this.game) { this.game.dispose(); this.game = null; }
    this.unlockPointer();
    this.menus.showMain();
  }

  pause() {
    if (!this.game) return;
    this.game.paused = true;
    this.unlockPointer();
    this.menus.showPause(this.game);
  }
  resume() {
    if (!this.game) return;
    this.game.paused = false;
    this.menus.hideAll();
    if (this.game.player.state === 'dead') this.menus.showDeploy(this.game);
    else this.lockPointer();
  }

  loop(t) {
    requestAnimationFrame((tt) => this.loop(tt));
    if (this.halt) { this.last = t; return; }
    let dt = (t - this.last) / 1000;
    this.last = t;
    if (!(dt > 0)) dt = 0.016;
    dt = Math.min(dt, 0.05);
    const g = this.game;
    if (g) {
      try {
        g.update(dt);
        g.render(dt);
      } catch (e) {
        console.error(e);
        this.showError(e);
      }
    } else {
      this.renderer.setClearColor(0x0b0e12, 1);
      this.renderer.clear();
    }
    this.input.endFrame();
  }

  showError(e) {
    if (this.errShown) return;
    this.errShown = true;
    const d = document.createElement('div');
    d.className = 'errbox';
    d.textContent = 'Error: ' + (e && e.message ? e.message : e);
    document.body.appendChild(d);
  }
}

window.addEventListener('DOMContentLoaded', () => { window.fireline = new App(); });
