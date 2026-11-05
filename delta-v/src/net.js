import * as THREE from 'three';
import { Peer } from 'peerjs';
import { WEAPONS } from './weapons.js';
import { Soldier } from './soldier.js';
import { Bot } from './bot.js';

/*
 * Peer-to-peer multiplayer (PeerJS / WebRTC).
 *
 * The host's browser is authoritative for the match: bots, damage, kills, score, pickups, respawns.
 * Each client flies its own soldier locally (instant response) and streams that state to the host,
 * plus discrete actions (shots, grenades, hammer). The host streams snapshots (~20 Hz) of everyone
 * and per-player events (hits, damage, impulses, respawns). Remote soldiers are drawn ~100 ms in the
 * past, interpolated between snapshots.
 */
const PREFIX = 'deltav-v1-';
const SNAP_HZ = 20, STATE_HZ = 30;
const r3 = (x) => Math.round(x * 1000) / 1000;
const v3 = (v) => [r3(v.x), r3(v.y), r3(v.z)];
const q4 = (q) => [r3(q.x), r3(q.y), r3(q.z), r3(q.w)];

/**
 * Signalling server: PeerJS's free public cloud by default. `?peer=host:port[/path]` on the page URL
 * points at a self-hosted PeerServer instead (useful for LAN parties or if the public one is down).
 */
function peerOpts() {
  const o = { debug: 0 };
  try {
    const q = new URLSearchParams(location.search).get('peer');
    if (q) {
      const m = q.match(/^([^:/]+)(?::(\d+))?(\/.*)?$/);
      if (m) { o.host = m[1]; o.port = Number(m[2] || 443); o.path = m[3] || '/'; o.secure = o.port === 443; }
    }
  } catch (e) { /* no URL access */ }
  return o;
}

function code() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 5; i++) s += A[(Math.random() * A.length) | 0];
  return s;
}

export class Net {
  constructor(game) {
    this.game = game;
    this.role = null;          // null | 'host' | 'client'
    this.peer = null;
    this.clients = new Map();  // host: peerId -> { conn, soldier, name, loadout }
    this.conn = null;          // client: connection to host
    this.snapT = 0; this.stateT = 0;
    this.snaps = [];           // client: recent snapshots
    this.status = '';
  }

  get isHost() { return this.role === 'host'; }
  get isClient() { return this.role === 'client'; }
  get active() { return !!this.role; }

  supported() {
    return typeof RTCPeerConnection !== 'undefined';
  }

  setStatus(s) { this.status = s; if (this.onStatus) this.onStatus(s); }

  // ---------------- hosting ----------------
  host(onReady) {
    this.leave();
    this.role = 'host';
    this.room = code();
    this.setStatus('Opening room…');
    const peer = new Peer(PREFIX + this.room, peerOpts());
    this.peer = peer;
    peer.on('open', () => { this.setStatus(`Room ${this.room} open – share the code`); if (onReady) onReady(this.room); });
    peer.on('connection', (conn) => this.acceptClient(conn));
    peer.on('error', (e) => {
      if (e.type === 'unavailable-id') { this.setStatus('Room code clash, retrying…'); this.host(onReady); return; }
      this.setStatus('Network error: ' + (e.type || e.message));
    });
    peer.on('disconnected', () => { if (this.peer === peer && !peer.destroyed) peer.reconnect(); });
  }

  acceptClient(conn) {
    conn.on('open', () => {
      conn.on('data', (msg) => this.onHostMessage(conn, msg));
      conn.on('close', () => this.dropClient(conn.peer));
      conn.on('error', () => this.dropClient(conn.peer));
    });
  }

  /** A human takes over one of the bots (balancing teams by human count). */
  addRemotePlayer(conn, hello) {
    const g = this.game;
    if (g.state !== 'playing' && g.state !== 'paused') { conn.send({ t: 'deny', why: 'The host is not in a match yet.' }); return; }
    const humans = [0, 0];
    for (const s of g.soldiers) if (s.isPlayer || s.remote) humans[s.team]++;
    const team = humans[0] <= humans[1] ? 0 : 1;
    let s = g.soldiers.find((x) => x.team === team && x.bot);
    if (!s) s = g.soldiers.find((x) => x.bot);
    if (!s) { conn.send({ t: 'deny', why: 'The match is full.' }); return; }
    g.bots = g.bots.filter((b) => b !== s.bot);
    s.bot = null; s.isBot = false;
    s.remote = conn;
    s.name = (hello.name || 'PLAYER').slice(0, 12).toUpperCase();
    const lo = Array.isArray(hello.loadout) && hello.loadout.length === 2 && hello.loadout.every((w) => WEAPONS[w]) ? hello.loadout : ['rifle', 'shotgun'];
    s.prefLoadout = lo;
    this.clients.set(conn.peer, { conn, soldier: s });
    const st = g.settings;
    s.remote = null; // respawn quietly; the spawn message goes out after the welcome
    g.respawn(s);
    s.remote = conn;
    conn.send({
      t: 'welcome', id: s.id, team: s.team, room: this.room,
      cfg: { map: g.world.mapId, rules: st.rules, scoreLimit: g.scoreLimit, timeLimit: g.timeLimit },
      roster: this.roster(),
    });
    this.sendSpawn(s);
    g.hud.message(`${s.name} JOINED`, '#9fe8ff', 2.5);
    this.setStatus(`Room ${this.room} · ${this.clients.size} joined`);
  }

  dropClient(peerId) {
    const c = this.clients.get(peerId);
    if (!c) return;
    this.clients.delete(peerId);
    const s = c.soldier, g = this.game;
    s.remote = null; s.prefLoadout = null;
    if (g.soldiers.includes(s)) {
      const b = new Bot(g, s, g.settings.difficulty, g.bots.length);
      g.bots.push(b);
      s.name = s.name + '·BOT';
      if (s.alive) b.onSpawn();
      g.hud.message(`${s.name.replace('·BOT', '')} LEFT – A BOT TAKES OVER`, '#ffcc4d', 2.5);
    }
    this.setStatus(`Room ${this.room} · ${this.clients.size} joined`);
  }

  roster() {
    return this.game.soldiers.map((s) => ({ id: s.id, team: s.team, name: s.name }));
  }

  onHostMessage(conn, m) {
    const g = this.game;
    if (m.t === 'hello') { this.addRemotePlayer(conn, m); return; }
    const c = this.clients.get(conn.peer);
    if (!c) return;
    const s = c.soldier;
    switch (m.t) {
      case 'st': {
        if (!s.alive) return;
        s.pos.fromArray(m.p); s.vel.fromArray(m.v); s.quat.fromArray(m.q);
        s.aimPitch = m.ap || 0; s.walking = !!m.wk; s.ads = !!m.ads;
        s.netThrust = m.th || 0;
        if (m.cur !== s.cur && m.cur >= 0 && m.cur < s.weapons.length) s.cur = m.cur;
        s.netBeam = !!m.bm;
        s.grab = m.gr ? (s.grab || { kind: 'net' }) : null;
        s.lastThrustT = m.th ? g.time : s.lastThrustT;
        break;
      }
      case 'fire': {
        if (!s.alive) return;
        const def = WEAPONS[m.w];
        if (!def) return;
        for (const [o, v] of m.list) g.combat.spawnNetProjectile(s, def, o, v);
        s.lastFireT = g.time; s.spawnProtect = 0;
        g.onShot(s, def);
        this.broadcast({ t: 'shot', s: s.id, w: m.w, list: m.list }, conn.peer);
        break;
      }
      case 'throw': if (s.alive) { g.combat.spawnNetGrenade(s, m.o, m.v); this.broadcast({ t: 'nade', s: s.id, o: m.o, v: m.v }, conn.peer); } break;
      case 'melee': if (s.alive) { s.meleeCool = 0; g.combat.melee(s); } break;
      case 'sd': if (s.alive && m.a > 0 && m.a < 200) g.damage(s, m.a, null, m.c === 'landing' || m.c === 'cargo pod' ? m.c : 'impact', s.pos, 'body'); break;
      default: break;
    }
  }

  broadcast(msg, exceptPeer = null) {
    for (const [id, c] of this.clients) if (id !== exceptPeer && c.conn.open) c.conn.send(msg);
  }

  sendTo(s, msg) { if (s.remote && s.remote.open) s.remote.send(msg); }

  sendSpawn(s) {
    this.sendTo(s, { t: 'spawn', p: v3(s.pos), q: q4(s.quat), lo: s.loadout });
  }

  // host hooks called by the game
  onLocalShot(s, def, list) { if (this.isHost) this.broadcast({ t: 'shot', s: s.id, w: def.id, list }); }
  onLocalThrow(s, o, v) { if (this.isHost) this.broadcast({ t: 'nade', s: s.id, o: v3(o), v: v3(v) }); }
  onKill(killer, victim, cause, head) {
    if (this.isHost) this.broadcast({ t: 'kill', k: killer ? killer.id : -1, v: victim.id, c: cause, h: !!head });
  }
  onDamage(s, amount, attacker, point, part, killed) {
    if (!this.isHost) return;
    if (s.remote) this.sendTo(s, { t: 'hurt', a: r3(amount), f: attacker ? v3(attacker.pos) : point ? v3(point) : null, c: attacker ? attacker.id : -1 });
    if (attacker && attacker.remote && attacker !== s) this.sendTo(attacker, { t: 'hit', a: r3(amount), h: part === 'head', k: !!killed, p: point ? v3(point) : v3(s.pos), id: s.id });
  }
  onImpulse(s, J, p) { this.sendTo(s, { t: 'imp', J: v3(J), p: p ? v3(p) : null }); }
  onRefill(s) { this.sendTo(s, { t: 'refill' }); }
  onEnd(won) { if (this.isHost) this.broadcast({ t: 'end', won, score: this.game.teamScore }); }
  onMessage(s, text, color) { this.sendTo(s, { t: 'msg', text, color }); }

  hostTick(dt) {
    const g = this.game;
    // remote humans with a live beam keep it burning on the host (damage is authoritative here)
    for (const c of this.clients.values()) {
      const s = c.soldier;
      if (s.alive && s.netBeam && s.weapon.def.kind === 'beam') g.combat.fireBeam(s, s.weapon, s.weapon.def, true);
    }
    this.snapT -= dt;
    if (this.snapT > 0 || !this.clients.size) return;
    this.snapT = 1 / SNAP_HZ;
    const base = {
      t: 'snap', time: r3(g.time), mt: r3(g.matchTime), sc: g.teamScore, st: g.state,
      s: g.soldiers.map((s) => this.packSoldier(s)),
      pods: g.world.pods.map((p) => v3(p.pos)),
      pk: (g.pickups || []).map((p) => r3(p.cool)),
    };
    for (const c of this.clients.values()) {
      const s = c.soldier;
      // private part: your own health and suit state
      base.me = { hp: r3(s.health), o2: r3(s.o2), alive: s.alive, rt: r3(s.respawnT || 0), kb: s.killedBy ? s.killedBy.id : -1, kc: s.killCause || '',
        tw: s.towers.map((t) => [r3(t.hp), t.dead ? 1 : 0]), lk: s.leaks.map((l) => [...v3(l.p), ...v3(l.n), r3(l.t)]), gr: s.grenades };
      if (c.conn.open) c.conn.send(base);
    }
  }

  packSoldier(s) {
    let thr = 0;
    for (let i = 0; i < 24; i++) if (s.throttle[i] > 0.15) thr |= 1 << i;
    if (s.remote && s.netThrust) thr = s.netThrust;
    return [s.id, s.team, s.alive ? 1 : 0, ...v3(s.pos), ...q4(s.quat), ...v3(s.vel), r3(s.aimPitch), s.cur, Math.round(s.health), s.walking ? 1 : 0, thr,
      s.kills, s.deaths, (s.beam && s.beam.life > 0) || s.netBeam ? 1 : 0, (s.loadout || []).join(','), s.name];
  }

  // ---------------- joining ----------------
  join(roomCode, name, onWelcome, onFail) {
    this.leave();
    this.role = 'client';
    const room = roomCode.trim().toUpperCase();
    this.setStatus(`Connecting to ${room}…`);
    const peer = new Peer(peerOpts());
    this.peer = peer;
    let opened = false;
    const fail = (why) => { this.setStatus(why); if (onFail) onFail(why); this.leave(); };
    const timer = setTimeout(() => { if (!opened) fail('Could not reach that room (check the code, or the host network may block peer connections).'); }, 15000);
    peer.on('open', () => {
      const conn = peer.connect(PREFIX + room, { reliable: true, serialization: 'json' });
      this.conn = conn;
      conn.on('open', () => {
        opened = true; clearTimeout(timer);
        conn.send({ t: 'hello', name, loadout: this.game.settings.loadout });
        this.setStatus('Joined – waiting for the host…');
      });
      conn.on('data', (m) => this.onClientMessage(m, onWelcome, fail));
      conn.on('close', () => { if (this.isClient) { this.game.netLost('The host closed the room.'); this.leave(); } });
    });
    peer.on('error', (e) => { clearTimeout(timer); fail(e.type === 'peer-unavailable' ? `No room called ${room}.` : 'Network error: ' + (e.type || e.message)); });
  }

  onClientMessage(m, onWelcome, fail) {
    const g = this.game;
    switch (m.t) {
      case 'deny': fail(m.why); break;
      case 'welcome': this.myId = m.id; this.room = m.room; g.startClientMatch(m); if (onWelcome) onWelcome(m); this.setStatus(`In room ${m.room}`); break;
      case 'snap': this.snaps.push(m); if (this.snaps.length > 8) this.snaps.shift(); this.applySnapshot(m); break;
      case 'spawn': g.clientSpawn(m); break;
      case 'shot': g.combat.netShot(m); break;
      case 'nade': g.combat.netGrenade(m); break;
      case 'kill': g.clientKill(m); break;
      case 'hurt': g.clientHurt(m); break;
      case 'hit': g.clientHit(m); break;
      case 'imp': if (g.player && g.player.alive) g.player.applyImpulse(new THREE.Vector3().fromArray(m.J), m.p ? new THREE.Vector3().fromArray(m.p) : null, false); break;
      case 'refill': if (g.player) { for (const w of g.player.weapons) w.reserve = Math.max(w.reserve, w.def.reserve); g.player.grenades = 2; g.hud.message('AMMO RESUPPLIED', '#7dff9a', 1.6); g.audio.play('reload'); } break;
      case 'msg': g.hud.message(m.text, m.color || '#ffcc4d', 2); break;
      case 'end': g.teamScore = m.score; g.endMatch(true, m.won); break;
      default: break;
    }
  }

  /** Client: authoritative bits from the host (score, own health) and roster upkeep. */
  applySnapshot(m) {
    const g = this.game;
    if (!g.player) return;
    g.teamScore = m.sc; g.matchTime = m.mt;
    for (const rec of m.s) g.ensureNetSoldier(rec);
    const me = m.me, p = g.player;
    if (me) {
      p.health = me.hp; p.o2 = me.o2; p.grenades = me.gr;
      me.tw.forEach(([hp, dead], i) => { p.towers[i].hp = hp; p.towers[i].dead = !!dead; });
      p.leaks = me.lk.map((a) => ({ p: new THREE.Vector3(a[0], a[1], a[2]), n: new THREE.Vector3(a[3], a[4], a[5]), t: a[6] }));
      if (p.alive && !me.alive) g.clientDeath(me);
      p.respawnT = me.rt;
    }
    g.world.pods.forEach((pod, i) => { if (m.pods[i]) pod.pos.fromArray(m.pods[i]); });
    (g.pickups || []).forEach((pk, i) => { if (m.pk[i] != null) pk.cool = m.pk[i]; });
    this.lastSnapLocal = performance.now();
  }

  /** Client: place every other soldier at render time = newest snapshot - 100 ms, interpolated. */
  interpolate() {
    const g = this.game;
    if (this.snaps.length < 1) return;
    const newest = this.snaps[this.snaps.length - 1];
    const rt = newest.time + (performance.now() - (this.lastSnapLocal || performance.now())) / 1000 - 0.1;
    let a = this.snaps[0], b = newest;
    for (let i = 0; i < this.snaps.length - 1; i++) if (this.snaps[i].time <= rt && this.snaps[i + 1].time >= rt) { a = this.snaps[i]; b = this.snaps[i + 1]; break; }
    const span = Math.max(1e-3, b.time - a.time);
    const f = Math.max(0, Math.min(1.2, (rt - a.time) / span));
    const mapA = new Map(a.s.map((r) => [r[0], r]));
    const qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
    for (const rb of b.s) {
      const s = g.netSoldiers.get(rb[0]);
      if (!s || s === g.player) continue;
      const ra = mapA.get(rb[0]) || rb;
      s.pos.set(ra[3] + (rb[3] - ra[3]) * f, ra[4] + (rb[4] - ra[4]) * f, ra[5] + (rb[5] - ra[5]) * f);
      qa.set(ra[6], ra[7], ra[8], ra[9]); qb.set(rb[6], rb[7], rb[8], rb[9]);
      s.quat.copy(qa).slerp(qb, Math.min(1, f));
      s.vel.set(rb[10], rb[11], rb[12]);
      s.aimPitch = rb[13];
      s.health = rb[15];
      s.walking = !!rb[16];
      const thr = rb[17];
      for (let i = 0; i < 24; i++) s.throttle[i] = thr & (1 << i) ? 0.8 : 0;
      s.netBeam = !!rb[20];
    }
  }

  clientTick(dt) {
    const g = this.game, p = g.player;
    if (!p || !this.conn || !this.conn.open) return;
    this.interpolate();
    // remote beams: draw them locally from the shooter's aim
    for (const s of g.soldiers) if (s !== p && s.alive && s.netBeam && s.weapon.def.kind === 'beam') g.combat.fireBeam(s, s.weapon, s.weapon.def, true, true);
    this.stateT -= dt;
    if (this.stateT > 0 || !p.alive) return;
    this.stateT = 1 / STATE_HZ;
    let thr = 0;
    for (let i = 0; i < 24; i++) if (p.throttle[i] > 0.15) thr |= 1 << i;
    const beam = p.weapon.def.kind === 'beam' && p.beam && p.beam.life > 0;
    this.conn.send({ t: 'st', p: v3(p.pos), v: v3(p.vel), q: q4(p.quat), ap: r3(p.aimPitch), wk: p.walking ? 1 : 0, th: thr, cur: p.cur, ads: p.ads ? 1 : 0, bm: beam ? 1 : 0, gr: p.grab ? 1 : 0 });
  }

  // client -> host actions
  sendFire(def, list) { if (this.conn && this.conn.open) this.conn.send({ t: 'fire', w: def.id, list }); }
  sendThrow(o, v) { if (this.conn && this.conn.open) this.conn.send({ t: 'throw', o: v3(o), v: v3(v) }); }
  sendMelee() { if (this.conn && this.conn.open) this.conn.send({ t: 'melee' }); }
  sendSelfDamage(a, c) { if (this.conn && this.conn.open) this.conn.send({ t: 'sd', a: r3(a), c }); }

  tick(dt) {
    if (this.isHost) this.hostTick(dt);
    else if (this.isClient) this.clientTick(dt);
  }

  leave() {
    if (this.peer) { try { this.peer.destroy(); } catch (e) { /* ignore */ } }
    if (this.isHost) for (const c of this.clients.values()) { if (c.soldier) c.soldier.remote = null; }
    this.peer = null; this.conn = null; this.clients.clear(); this.snaps = []; this.role = null; this.room = null;
  }
}

export { Soldier };
