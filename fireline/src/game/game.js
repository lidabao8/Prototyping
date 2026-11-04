// Match orchestrator: owns the scene, world, soldiers, AI, combat, modes, effects, rendering and HUD.
import * as THREE from 'three';
import { World } from '../world/world.js';
import { MAPS } from '../world/maps.js';
import { Environment } from '../render/environment.js';
import { Water } from '../render/water.js';
import { Grass } from '../world/vegetation.js';
import { PostFX } from '../render/post.js';
import { shared, clearRegistry, resetMaterialCaches } from '../render/materials.js';
import { Effects } from '../fx/effects.js';
import { Combat } from './combat.js';
import { GameMode, MODES } from './mode.js';
import { Squads } from './squads.js';
import { Soldier } from '../entities/soldier.js';
import { PlayerController } from '../entities/player.js';
import { BotBrain, AIManager } from '../ai/bot.js';
import { HUD } from '../ui/hud.js';
import { randomLoadout, CLASSES } from '../data/loadout.js';
import { rand, clamp } from '../core/math.js';

const BOT_NAMES = ['Viper', 'Hawk', 'Nomad', 'Rook', 'Bishop', 'Ghost', 'Mako', 'Jester', 'Reaper', 'Kodiak', 'Talon', 'Sable', 'Ranger', 'Wolf', 'Cobra', 'Bravo', 'Atlas', 'Raven', 'Moose', 'Hound', 'Diesel', 'Patch', 'Tank', 'Specter', 'Flint', 'Drifter', 'Saint', 'Gunny', 'Sarge', 'Ace', 'Blaze', 'Ox', 'Lynx', 'Falcon', 'Orca', 'Shadow', 'Grizzly', 'Rocco', 'Duke', 'Ziggy', 'Bear', 'Fox', 'Scout', 'Hammer', 'Ice', 'Kilo', 'Mustang', 'Pyro', 'Rex', 'Titan', 'Wasp', 'Yeti', 'Zulu', 'Cricket', 'Doc', 'Smokey', 'Tex', 'Chief', 'Boomer', 'Echo', 'Pilot', 'Sparks', 'Crow', 'Tusk'];
const SQUAD_COMPS = [['leader', 'medic', 'assault', 'support'], ['leader', 'assault', 'engineer', 'medic'], ['leader', 'support', 'recon', 'assault'], ['leader', 'medic', 'engineer', 'assault']];

const GRADES = {
  morning: { sat: 1.1, contrast: 1.06, lift: [0.01, 0.012, 0.02], gamma: [1, 1, 1], gain: [1.03, 1.0, 0.96] },
  noon: { sat: 1.06, contrast: 1.05, lift: [0.0, 0.0, 0.01], gamma: [1, 1, 1], gain: [1.0, 1.0, 0.98] },
  afternoon: { sat: 1.04, contrast: 1.07, lift: [0.015, 0.01, 0.0], gamma: [1, 1, 1], gain: [1.05, 1.0, 0.9] },
  dusk: { sat: 1.12, contrast: 1.08, lift: [0.02, 0.0, 0.02], gamma: [1, 1, 1], gain: [1.08, 0.96, 0.88] },
  night: { sat: 0.85, contrast: 1.05, lift: [0.0, 0.01, 0.03], gamma: [1, 1, 1.05], gain: [0.92, 0.98, 1.1] },
};

export class Game {
  constructor(app, config) {
    this.app = app; this.config = config;
    this.renderer = app.renderer; this.settings = app.settings; this.audio = app.audio; this.input = app.input; this.menus = app.menus;
    this.time = 0; this.frame = 0; this.paused = false;
    this.soldiers = []; this.teams = [[], []];
    this.oobTime = 0; this.respawnAt = 0; this.lastDeath = null; this.ended = false;
  }

  async init(progress) {
    const cfg = this.config;
    const def = MAPS[cfg.map];
    this.def = def;
    clearRegistry(); resetMaterialCaches();
    const scene = this.scene = new THREE.Scene();
    const w = window.innerWidth, h = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(70, w / h, 0.06, this.settings.get('viewDistance'));
    scene.add(this.camera);
    this.vmScene = new THREE.Scene();
    this.vmCamera = new THREE.PerspectiveCamera(58, w / h, 0.01, 10);
    this.vmScene.add(new THREE.HemisphereLight(0xdde8ff, 0x50483e, 1.1));
    this.vmLight = new THREE.DirectionalLight(0xffffff, 1.6);
    this.vmScene.add(this.vmLight);
    this.env = new Environment(this.renderer, scene, this.camera, this.settings);
    const time = cfg.time === 'default' ? def.time : cfg.time;
    this.timeName = time;
    progress('Lighting the sky', 0.02);
    this.world = new World(def, scene);
    await this.world.build(progress);
    this.env.setTime(time);
    this.vmLight.color.copy(this.env.sun.color).multiplyScalar(this.env.time.night ? 0.6 : 1);
    this.vmScene.environment = this.env.envMap;
    this.vmScene.environmentIntensity = 0.6;
    progress('Spawning soldiers', 0.95);
    this.water = this.world.terrain.waterLevel !== null ? new Water(this.world, scene, this.env) : null;
    this.grass = new Grass(this.world, scene);
    this.fx = new Effects(this);
    this.combat = new Combat(this);
    this.mode = new GameMode(this, cfg.mode, cfg.tickets ? { tickets: cfg.tickets } : {});
    this.modeName = MODES[cfg.mode].name;
    this.ai = new AIManager(this);
    this.squads = new Squads(this);
    this.createSoldiers();
    this.post = new PostFX(this.renderer, scene, this.camera, this.vmScene, this.vmCamera, this.settings);
    this.post.hidden = [...this.fx.hidden, ...(this.grass.mesh ? [this.grass.mesh] : [])];
    if (this.water) this.water.hideList = [...this.fx.hidden];
    this.post.setGrade(GRADES[time] || GRADES.morning);
    this.hud = new HUD(this);
    this.playerCtl = new PlayerController(this, this.player);
    this.applySettings();
    this.unsub = (k) => this.applySettings(k);
    this.settings.onChange(this.unsub);
    this.audio.startAmbience(def.biome, this.env.time.night);
    // initial spawn for bots, staggered
    for (const s of this.soldiers) if (!s.isPlayer) s.respawnAt = rand(0, 2.5);
    this.respawnAt = 0;
    this.player.state = 'dead';
    this.deployCam = { a: 0 };
    return this;
  }

  createSoldiers() {
    const playerTeam = this.config.team ?? 0;
    const names = BOT_NAMES.slice().sort(() => Math.random() - 0.5);
    let ni = 0;
    for (let t = 0; t < 2; t++) {
      for (let q = 0; q < 4; q++) {
        for (let i = 0; i < 4; i++) {
          const isPlayer = t === playerTeam && q === 0 && i === 3;
          const role = SQUAD_COMPS[(q + t) % SQUAD_COMPS.length][i];
          const s = new Soldier(this, t, isPlayer ? this.config.name : names[ni++ % names.length], isPlayer);
          s.setLoadout(isPlayer ? JSON.parse(JSON.stringify(this.menus.loadout)) : randomLoadout(role));
          if (!isPlayer) s.brain = new BotBrain(s, this);
          s.state = 'dead'; s.respawnAt = 0;
          this.soldiers.push(s); this.teams[t].push(s);
          if (isPlayer) this.player = s;
        }
      }
    }
    this.squads.build(this.teams, 4);
    for (const sq of this.squads.list[playerTeam]) if (sq.members.includes(this.player)) { this.playerSquad = sq; }
  }

  applySettings(key) {
    const S = this.settings;
    this.env.applySettings();
    this.post.applySettings();
    this.grass.setLevel(S.get('grass'));
    if (this.grass.mesh) this.post.hidden = [...this.fx.hidden, this.grass.mesh];
    else this.post.hidden = [...this.fx.hidden];
    if (this.water) { this.water.setQuality(S.get('waterReflections'), S.get('waterWaves')); this.water.hideList = [...this.fx.hidden, ...(this.grass.mesh ? [this.grass.mesh] : [])]; }
    this.world.vegetation.setWind(S.get('treeWind'));
    this.fx.setQuality(S);
    this.camera.far = S.get('viewDistance');
    this.camera.updateProjectionMatrix();
    this.audio.setVolume(S.get('volume'));
    if (key === 'difficulty') for (const s of this.soldiers) if (s.brain) s.brain.setDifficulty(S.get('difficulty'));
    if (key === 'renderScale' || key === 'antialias' || key === undefined) this.app.resize();
  }

  resize(w, h) {
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.vmCamera.aspect = w / h; this.vmCamera.updateProjectionMatrix();
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.post.setSize(size.x, size.y);
    this.hud.resize();
  }

  uiBlocking() { return this.paused || this.player.state === 'dead' || this.ended; }

  // ---------------- spawning ----------------
  spawnOptions(p) {
    const opts = [];
    const team = p.team;
    const hq = this.def.hq[team];
    opts.push({ kind: 'hq', key: 'hq', label: 'HQ', x: hq.x, z: hq.z });
    for (const f of this.mode.flagSpawns(team)) opts.push({ kind: 'flag', key: 'flag' + f.id, label: `${f.id} · ${f.name}`, x: f.x, z: f.z, flag: f });
    if (p.squad) {
      for (const m of p.squad.members) {
        if (m === p || m.state !== 'alive' || !this.safeToSpawnOn(m)) continue;
        opts.push({ kind: 'squad', key: 'sq' + m.id, label: `${m === p.squad.leader ? '★ ' : ''}${m.name}`, x: m.pos.x, z: m.pos.z, mate: m });
      }
      for (const pl of this.combat.placed) {
        if ((pl.type === 'rally' || pl.type === 'beacon') && pl.squad === p.squad && !pl.blocked) opts.push({ kind: pl.type, key: pl.type + pl.owner.id, label: pl.type === 'rally' ? 'Rally point' : 'Spawn beacon', x: pl.x, z: pl.z, placed: pl });
      }
    }
    return opts;
  }

  safeToSpawnOn(m) {
    if (this.time - m.lastDamage < 6 || m.swimming || m.vault) return false;
    for (const e of this.teams[1 - m.team]) if (e.state === 'alive' && Math.hypot(e.pos.x - m.pos.x, e.pos.z - m.pos.z) < 22) return false;
    if (m.brain) for (const [, k] of m.brain.known) if (k.vis) return false;
    return true;
  }

  resolveSpawn(opt, team) {
    const nav = this.world.nav;
    const enemies = this.teams[1 - team].filter(e => e.state === 'alive');
    const score = (x, z) => { let d = 1e9; for (const e of enemies) d = Math.min(d, Math.hypot(e.pos.x - x, e.pos.z - z)); return d; };
    let x, z, y, yaw;
    const faceTo = (tx, tz) => Math.atan2(-(tx - x), -(tz - z));
    const center = this.mode.flags.length ? this.mode.flags.reduce((a, f) => ({ x: a.x + f.x / this.mode.flags.length, z: a.z + f.z / this.mode.flags.length }), { x: 0, z: 0 }) : { x: 0, z: 0 };
    if (opt.kind === 'squad' && opt.mate && opt.mate.state === 'alive') {
      const m = opt.mate;
      const f = m.forward(new THREE.Vector3());
      const cand = [[m.pos.x - f.x * 1.6, m.pos.z - f.z * 1.6], [m.pos.x + 1.2, m.pos.z], [m.pos.x - 1.2, m.pos.z], [m.pos.x, m.pos.z + 1.2]];
      for (const [cx, cz] of cand) {
        const gy = this.world.collision.groundAt(cx, cz, m.pos.y + 0.6);
        if (Math.abs(gy - m.pos.y) < 0.6 && !this.world.collision.overlapsAny(cx, gy + 0.05, cz, 0.3, 1.7)) { x = cx; z = cz; y = gy; break; }
      }
      if (x === undefined) { x = m.pos.x; z = m.pos.z; y = m.pos.y; }
      yaw = m.yaw;
    } else {
      const r = opt.kind === 'hq' ? 20 : opt.kind === 'flag' ? opt.flag.r * 0.8 : 4;
      let best = null, bs = -1;
      for (let k = 0; k < 8; k++) {
        const [cx, cz, cy] = nav.randomWalkableNear(opt.x, opt.z, r);
        const sc = score(cx, cz) + Math.random() * 5;
        if (sc > bs) { bs = sc; best = [cx, cz, cy]; }
      }
      [x, z, y] = best;
      y = this.world.collision.groundAt(x, z, y + 1.0);
      yaw = faceTo(center.x, center.z);
    }
    return { x, y, z, yaw };
  }

  deployPlayer(loadout, opt) {
    const p = this.player;
    // squad leader handover
    if (p.squad) {
      if (loadout.cls === 'leader') { const old = p.squad.leader; p.squad.leader = p; if (old && old !== p && old.loadout.cls === 'leader') old.setLoadout(randomLoadout('assault')); if (!p.squad.order || p.squad.order.type !== 'follow') this.squads.setOrder(p.squad, 'follow', null, 0, 0); }
      else if (p.squad.leader === p) { this.squads.pickLeader(p.squad); if (p.squad.leader === p) p.squad.leader = p.squad.members.find(m => m !== p) || p; if (p.squad.order && p.squad.order.type === 'follow') p.squad.order = null; }
    }
    p.setLoadout(loadout);
    const sp = this.resolveSpawn(opt, p.team);
    p.spawn(sp.x, sp.y, sp.z, sp.yaw);
    this.playerCtl.vmKey = null;
    this.playerCtl.crouchToggle = false;
    this.menus.hideAll();
    this.hud.setVisible(true);
    this.app.lockPointer();
    this.audio.play2d('deploy', { vol: 0.4 });
    this.oobTime = 0;
  }

  botSpawn(s) {
    const sq = s.squad;
    const opts = [];
    const L = sq && sq.leader;
    const order = sq && sq.order;
    if (L && L !== s && L.state === 'alive' && this.safeToSpawnOn(L) && Math.random() < 0.65) opts.push({ kind: 'squad', mate: L, x: L.pos.x, z: L.pos.z });
    if (!opts.length && sq) {
      const pl = this.combat.placed.find(p => (p.type === 'rally' || p.type === 'beacon') && p.squad === sq && !p.blocked);
      if (pl && Math.random() < 0.8) opts.push({ kind: 'rally', x: pl.x, z: pl.z });
    }
    if (!opts.length && sq && Math.random() < 0.35) {
      const mates = sq.members.filter(m => m !== s && m.state === 'alive' && this.safeToSpawnOn(m));
      if (mates.length) { const m = mates[Math.floor(Math.random() * mates.length)]; opts.push({ kind: 'squad', mate: m, x: m.pos.x, z: m.pos.z }); }
    }
    if (!opts.length) {
      const flags = this.mode.flagSpawns(s.team);
      if (flags.length && order) {
        let best = null, bd = 1e9;
        for (const f of flags) { const d = Math.hypot(f.x - order.x, f.z - order.z); if (d < bd) { bd = d; best = f; } }
        const hq = this.def.hq[s.team];
        if (best && bd < Math.hypot(hq.x - order.x, hq.z - order.z) + 30) opts.push({ kind: 'flag', flag: best, x: best.x, z: best.z });
      }
    }
    if (!opts.length) { const hq = this.def.hq[s.team]; opts.push({ kind: 'hq', x: hq.x, z: hq.z }); }
    const sp = this.resolveSpawn(opts[0], s.team);
    // occasionally refresh loadout (bots "change class")
    if (Math.random() < 0.15 && s.squad && s.squad.leader !== s) s.setLoadout(randomLoadout(s.cls));
    else s.setLoadout(s.loadout);
    s.spawn(sp.x, sp.y, sp.z, sp.yaw);
    s.brain.reset();
  }

  // ---------------- events ----------------
  onShot(s, g) {
    const st = g.stats;
    const isLocal = s === this.player;
    const m = isLocal && s.vmMuzzle ? s.vmMuzzle : s.muzzleWorld(new THREE.Vector3());
    const dir = s.aimDir(new THREE.Vector3());
    if (!isLocal || !this.playerCtl.isScoped()) this.fx.muzzle(m.x, m.y, m.z, dir.x, dir.y, dir.z, st.type === 'lmg' || st.type === 'sniper' ? 1.3 : st.type === 'pistol' || st.type === 'smg' ? 0.7 : 1, st.noFlash, isLocal);
    this.audio.gunshot(st.suppressed ? 'suppressed' : st.sound, s.pos.x, s.pos.y + 1.5, s.pos.z, st.suppressed, isLocal);
    if (isLocal && st.bolt) setTimeout(() => this.audio.play2d('bolt', { vol: 0.5 }), 350);
    if (isLocal && st.pump) setTimeout(() => this.audio.play2d('bolt', { vol: 0.5, rate: 0.8 }), 250);
    const hear = st.suppressed ? 25 : st.type === 'sniper' || st.type === 'lmg' ? 320 : 220;
    for (const e of this.teams[1 - s.team]) {
      if (!e.brain || e.state !== 'alive') continue;
      if (Math.abs(e.pos.x - s.pos.x) > hear || Math.abs(e.pos.z - s.pos.z) > hear) continue;
      if (e.pos.distanceTo(s.pos) < hear) e.brain.onSound(s.pos.x, s.pos.z, s, true);
    }
  }

  onFootstep(s, loud) {
    const L = this.audio.listener;
    const d = Math.hypot(s.pos.x - L.x, s.pos.z - L.z);
    if (d < 40) {
      const onTerrain = s.move.onTerrain;
      const name = s.inWater ? 'stepWater' : onTerrain ? 'stepGrass' : 'stepHard';
      if (s.isPlayer) this.audio.play2d(name, { vol: 0.16 * loud + 0.05, vary: 0.2 });
      else this.audio.play3d(name, s.pos.x, s.pos.y, s.pos.z, { vol: 0.5 * loud, maxDist: 30, ref: 3, vary: 0.2 });
    }
    const r = 9 + loud * 10;
    for (const e of this.teams[1 - s.team]) if (e.brain && e.state === 'alive' && e.pos.distanceTo(s.pos) < r) e.brain.onSound(s.pos.x, s.pos.z, s, false);
  }
  onVault(s) { if (s.isPlayer) this.audio.play2d('stepHard', { vol: 0.35, rate: 0.7 }); }
  onReloadSound(s, kind) { if (s.isPlayer) this.audio.play2d(kind, { vol: 0.5 }); else this.audio.play3d(kind, s.pos.x, s.pos.y + 1.2, s.pos.z, { vol: 0.5, maxDist: 18 }); }
  onDryFire(s) { if (s.isPlayer) this.audio.play2d('dry', { vol: 0.5 }); }
  onSwitch(s) { if (s.isPlayer) this.audio.play2d('switch', { vol: 0.35 }); }
  onBandage(s) { if (s.isPlayer) this.audio.play2d('bandage', { vol: 0.5 }); }
  onGrenadeThrown() { }
  onGadgetFired() { }
  onSpawnPointPlaced(p) { if (p.squad === this.player.squad) this.hud.toast(`${p.owner.name} placed a ${p.type === 'rally' ? 'rally point' : 'spawn beacon'}`); }

  onDamaged(victim, attacker, amount, part, dir) {
    if (victim.brain) victim.brain.onDamaged(attacker, dir);
    if (victim === this.player) {
      this.hud.damageFrom(dir);
      this.audio.play2d('hurt', { vol: 0.5 });
      this.dmgFlash = Math.min(1, (this.dmgFlash || 0) + amount / 50);
      victim.pitch += 0.012 * Math.min(3, amount / 15);
      this.fx.shake(Math.min(0.3, amount / 120));
    }
  }

  onHit(shooter, victim, dmg, part, wasAlive) {
    if (shooter !== this.player) return;
    const kill = victim.state !== 'alive' && wasAlive;
    this.hud.hit(kill, part === 'head');
    this.audio.play2d(part === 'head' ? 'headshot' : 'hit', { vol: part === 'head' ? 0.35 : 0.45 });
  }

  creditKill(killer, victim, weapon, head) {
    if (!killer || killer === victim || killer.team === victim.team) return;
    killer.stats.kills++;
    this.addScore(killer, 100, 'ENEMY DOWN');
    if (head) this.addScore(killer, 25, 'HEADSHOT');
    // defend/attack bonus near flags
    for (const f of this.mode.flags) if (Math.hypot(victim.pos.x - f.x, victim.pos.z - f.z) < f.r * 1.5) { this.addScore(killer, 25, f.owner === killer.team ? 'FLAG DEFEND' : 'FLAG ATTACK'); break; }
    for (const [d, amt] of victim.damagers) if (d !== killer && d.team !== victim.team && amt >= 20) { d.stats.assists++; this.addScore(d, 50, 'ASSIST'); }
    if (killer === this.player) this.audio.play2d('kill', { vol: 0.4 });
  }

  onDowned(victim, attacker, weapon, head) {
    this.hud.addKill(attacker, victim, weapon, head, true);
    this.creditKill(attacker, victim, weapon, head);
    victim.downCredited = true;
    if (victim === this.player) { this.playerCtl.giveUpT = 0; this.audio.play2d('heartbeat', { vol: 0.6 }); }
  }

  onKilled(victim, killer, weapon, head, wasDowned) {
    if (!wasDowned) { this.hud.addKill(killer, victim, weapon, head, false); this.creditKill(killer, victim, weapon, head); }
    else if (killer && victim.lastAttacker && killer !== victim && weapon !== 'Bled out' && weapon !== 'Gave up' && weapon !== 'Redeploy') this.hud.addKill(killer, victim, weapon, head, false);
    this.mode.onDeath(victim.team);
    if (killer && killer.team !== victim.team && this.mode.type === 'tdm') this.mode.onKill(killer.team);
    if (victim.reviver) victim.reviver = null;
    victim.downCredited = false;
    victim.respawnAt = this.time + (victim.isPlayer ? 7 : rand(7, 10));
    if (victim === this.player) {
      const k = killer && killer !== victim ? killer : null;
      this.lastDeath = { killer: k ? k.name : null, weapon, head, dist: k ? k.pos.distanceTo(victim.pos) : 0 };
      this.respawnAt = this.time + (weapon === 'Redeploy' ? 1 : 7);
      this.deathT = 0;
      this.deathPos = victim.pos.clone();
      this.killerRef = k;
      this.app.unlockPointer();
      setTimeout(() => { if (this.player.state === 'dead' && !this.ended) { this.menus.showDeploy(this); } }, weapon === 'Redeploy' ? 50 : 1800);
    }
  }

  onRevived(who, by) {
    if (by) { by.stats.revives++; this.addScore(by, 75, 'REVIVE'); this.hud.addRevive(by, who); }
    who.reviver = null;
    if (who === this.player) this.hud.toast(`Revived by ${by ? by.name : 'a teammate'}`);
  }

  reviveTick(reviver, target, dt) {
    if (target.state !== 'downed' || reviver.state !== 'alive') { reviver.reviveProgress = 0; return; }
    target.reviver = reviver;
    reviver.reviveProgress += dt / (reviver.isMedic ? 1.8 : 4.5);
    if (reviver.reviveProgress >= 1) { reviver.reviveProgress = 0; target.revive(reviver); }
  }

  onFlagEvent(f, ev, team, prevOwner) {
    const p = this.player;
    const mine = team === p.team;
    if (ev === 'captured') {
      this.hud.toast(`${mine ? 'We captured' : 'Enemy captured'} ${f.id} · ${f.name}`, 3);
      this.audio.play2d(mine ? 'capture' : 'lost', { vol: 0.5 });
      for (const s of this.teams[team]) if (s.state === 'alive' && Math.hypot(s.pos.x - f.x, s.pos.z - f.z) < f.r) { s.stats.caps++; this.addScore(s, 150, 'FLAG CAPTURED'); }
    } else if (ev === 'neutralized') {
      if (prevOwner === p.team) { this.hud.toast(`We lost ${f.id} · ${f.name}`, 3); this.audio.play2d('lost', { vol: 0.4 }); }
      for (const s of this.teams[team]) if (s.state === 'alive' && Math.hypot(s.pos.x - f.x, s.pos.z - f.z) < f.r) this.addScore(s, 75, 'FLAG NEUTRALIZED');
    }
  }

  onMatchEnd(winner) {
    this.ended = true;
    this.app.unlockPointer();
    setTimeout(() => { this.hud.setVisible(false); this.menus.showEnd(this, winner); }, 2500);
  }

  addScore(s, pts, label) {
    s.stats.score += pts;
    if (s === this.player) this.hud.scorePopup(label, pts);
  }

  // ---------------- loop ----------------
  update(dt) {
    if (this.paused) return;
    this.time += dt; this.frame++;
    shared.uTime.value += dt;
    const p = this.player;
    this.playerCtl.update(dt);
    for (const s of this.soldiers) {
      if (s.state === 'dead') {
        if (!s.isPlayer && this.time >= s.respawnAt && !this.ended) this.botSpawn(s);
        s.updateVitals(dt, this.time);
        continue;
      }
      if (s.brain) s.brain.update(dt);
      if (s.state === 'alive') {
        const steps = dt > 0.034 ? 2 : 1;
        for (let k = 0; k < steps; k++) s.updateMovement(dt / steps);
        s.updateWeapon(dt, this.time);
      } else if (s.state === 'downed') {
        s.vel.x *= 0.8; s.vel.z *= 0.8; s.vel.y -= 20 * dt;
        this.world.collision.move(s.pos, s.vel, dt, 0.3, 0.6, 0.3, s.move);
      }
      s.updateVitals(dt, this.time);
      this.checkBounds(s, dt);
    }
    this.combat.update(dt);
    this.mode.update(dt);
    this.squads.update(dt);
    this.ai.update();
    this.fx.update(dt);
    this.world.updateFlags(this.mode, this.time);
    for (const s of this.soldiers) s.updateAnim(dt, this.camera.position);
    this.updateCamera(dt);
    this.dmgFlash = Math.max(0, (this.dmgFlash || 0) - dt * 1.5);
    if (!this.ended) {
      this.hud.update(dt);
      if (p.state === 'dead') this.menus.updateDeploy(this);
    }
  }

  // Debug/test helper: advance the simulation quickly without rendering.
  simulate(seconds, dt = 1 / 30) {
    const n = Math.round(seconds / dt);
    for (let i = 0; i < n; i++) this.update(dt);
  }

  checkBounds(s, dt) {
    const ph = this.def.playHalf;
    const hq = this.def.hq[1 - s.team];
    const out = Math.abs(s.pos.x) > ph || Math.abs(s.pos.z) > ph || Math.hypot(s.pos.x - hq.x, s.pos.z - hq.z) < hq.r;
    if (s === this.player) {
      if (out && s.state === 'alive') { if (this.oobTime <= 0) this.oobTime = 10; this.oobTime -= dt; if (this.oobTime <= 0.01) { this.oobTime = 0; s.die(null, 'Deserted', false, false); } }
      else this.oobTime = 0;
    } else if (out && s.state === 'alive') {
      s.oob = (s.oob || 0) + dt;
      if (s.oob > 12) { s.oob = 0; s.die(null, 'Deserted', false, false); }
    } else s.oob = 0;
  }

  updateCamera(dt) {
    const p = this.player, cam = this.camera;
    if (p.state !== 'dead') {
      this.playerCtl.updateCamera(dt);
      this.audio.setListener(cam.position.x, cam.position.y, cam.position.z, -Math.sin(p.yaw), -Math.cos(p.yaw));
      return;
    }
    // death / deploy camera
    this.deathT = (this.deathT || 0) + dt;
    if (this.deathT < 1.8 && this.deathPos) {
      const k = this.killerRef;
      const tgt = k ? k.pos : this.deathPos;
      const pos = this.deathPos.clone().add(new THREE.Vector3(0, 2.5 + this.deathT * 1.5, 0));
      cam.position.lerp(pos, 1 - Math.exp(-dt * 4));
      cam.lookAt(tgt.x, tgt.y + 1.2, tgt.z);
    } else {
      const sel = this.menus.selectedSpawn;
      const target = sel ? new THREE.Vector3(sel.x, this.world.terrain.heightAt(sel.x, sel.z), sel.z) : new THREE.Vector3(0, 0, 0);
      this.deployCam.a += dt * 0.08;
      const r = 70;
      const pos = new THREE.Vector3(target.x + Math.cos(this.deployCam.a) * r, target.y + 55, target.z + Math.sin(this.deployCam.a) * r);
      if (!this.deployCamInit) { cam.position.copy(pos); this.deployCamInit = true; }
      cam.position.lerp(pos, 1 - Math.exp(-dt * 1.5));
      cam.lookAt(target);
    }
    cam.fov = 60; cam.updateProjectionMatrix(); cam.updateMatrixWorld();
    this.playerCtl.vmRoot.visible = false;
    this.audio.setListener(cam.position.x, cam.position.y, cam.position.z, 0, -1);
  }

  render(dt) {
    const cam = this.camera;
    this.env.update(cam.position);
    this.grass.update(cam.position);
    if (this.frame % 30 === 0) this.fx.setLighting(this.env);
    if (this.water) {
      this.water.update(this.env);
      const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
      this.water.renderReflection(this.renderer, this.scene, cam, size.x, size.y);
    }
    const p = this.player;
    let focus = 60;
    if (p.state === 'alive' && p.adsT > 0.3) {
      const e = p.eye(new THREE.Vector3()), d = p.aimDir(new THREE.Vector3());
      const h = this.world.collision.raycast(e.x, e.y, e.z, d.x, d.y, d.z, 300, {});
      focus = h ? h.t : 300;
    }
    const scoped = this.playerCtl.isScoped();
    this.post.render(dt, {
      damage: clamp(this.dmgFlash || 0, 0, 1) * 0.8 + (p.state === 'alive' && p.hp < 35 ? (35 - p.hp) / 35 * 0.5 : 0),
      suppress: p.state === 'alive' ? p.suppression : 0,
      flash: p.flashed > 0.6 ? (p.flashed - 0.6) * 2.5 : 0,
      downed: p.state === 'downed' ? 0.6 + 0.4 * (1 - p.downedHp / 100) : 0,
      ads: p.state === 'alive' && !scoped ? p.adsT * (p.gun && p.gun.stats.zoom > 1.2 ? 1 : 0.6) : 0,
      focus,
      menu: (p.state === 'dead' && this.deathT > 1.8) || this.paused || this.ended,
    });
  }

  dispose() {
    this.audio.stopAmbience();
    this.hud.dispose();
    this.playerCtl.dispose();
    this.env.dispose();
    this.post.composer.dispose();
    this.scene.traverse(o => { if (o.geometry) o.geometry.dispose(); });
    this.settings.listeners = this.settings.listeners.filter(l => l !== this.unsub);
    void CLASSES;
  }
}
