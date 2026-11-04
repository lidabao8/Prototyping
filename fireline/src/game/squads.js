// Squads (4 per team) and a per-team commander that hands out attack/defend orders to bot-led squads.
import { rand } from '../core/math.js';

const NAMES = [['ALPHA', 'BRAVO', 'CHARLIE', 'DELTA'], ['ECHO', 'FOXTROT', 'GOLF', 'HOTEL']];

export class Squads {
  constructor(game) {
    this.game = game;
    this.list = [[], []];
    this.evalT = [0, 2];
    this.enemyHeat = [null, null];
  }

  build(teams, perSquad = 4) {
    for (let t = 0; t < 2; t++) {
      this.list[t] = [];
      const members = teams[t];
      const n = Math.ceil(members.length / perSquad);
      for (let i = 0; i < n; i++) {
        const sq = { id: i, team: t, name: NAMES[t][i] || `S${i}`, members: [], leader: null, order: null, orderT: 0 };
        this.list[t].push(sq);
      }
      members.forEach((s, i) => { const sq = this.list[t][Math.floor(i / perSquad)]; sq.members.push(s); s.squad = sq; });
      for (const sq of this.list[t]) this.pickLeader(sq);
    }
  }

  pickLeader(sq) {
    const p = sq.members.find(m => m.isPlayer && m.loadout && m.loadout.cls === 'leader');
    sq.leader = p || sq.members.find(m => m.loadout && m.loadout.cls === 'leader') || sq.members.find(m => !m.isPlayer) || sq.members[0];
  }

  playerIsLeader(sq) { return sq.leader && sq.leader.isPlayer; }

  objectiveFor(s) {
    const sq = s.squad;
    const order = sq && sq.order;
    if (!order) { const h = this.game.world.def.hq[1 - s.team]; return { x: h.x * 0.3, z: h.z * 0.3, r: 30, hold: false }; }
    if (order.type === 'follow') {
      const L = sq.leader;
      if (L && L.state === 'alive') {
        const i = sq.members.indexOf(s);
        const a = i * 1.9 + 0.7;
        return { x: L.pos.x + Math.cos(a) * 5, z: L.pos.z + Math.sin(a) * 5, r: 6, hold: false };
      }
    }
    // spread members around the objective
    const i = sq.members.indexOf(s);
    const a = i * 1.7 + sq.id;
    const off = order.flag ? order.flag.r * 0.35 : 4;
    return { x: order.x + Math.cos(a) * off, z: order.z + Math.sin(a) * off, r: order.flag ? order.flag.r : 15, hold: order.type !== 'move', cx: order.x, cz: order.z, type: order.type };
  }

  orderType(s) { return s.squad && s.squad.order ? s.squad.order.type : 'attack'; }

  // Where the enemy is expected to come from relative to an objective.
  threatPoint(team, obj) {
    const heat = this.enemyHeat[team];
    if (heat && this.game.time - heat.t < 20) return heat;
    const mode = this.game.mode;
    let best = null, bd = 1e9;
    for (const f of mode.flags) {
      if (f.owner !== 1 - team) continue;
      const d = Math.hypot(f.x - obj.x, f.z - obj.z);
      if (d < bd && d > 5) { bd = d; best = f; }
    }
    if (best) return { x: best.x, y: best.y, z: best.z };
    const h = this.game.world.def.hq[1 - team];
    return { x: h.x, y: this.game.world.terrain.heightAt(h.x, h.z), z: h.z };
  }

  setOrder(sq, type, flag, x, z) {
    sq.order = { type, flag: flag || null, x: flag ? flag.x : x, z: flag ? flag.z : z, t: this.game.time };
    for (const m of sq.members) if (m.brain) { m.brain.holdSpot = null; m.brain.path = null; }
  }

  update(dt) {
    const game = this.game;
    for (let t = 0; t < 2; t++) {
      // enemy heat: centroid of recently known enemy positions
      let sx = 0, sz = 0, n = 0;
      for (const s of game.teams[t]) {
        if (!s.brain || s.state !== 'alive') continue;
        for (const [, k] of s.brain.known) if (game.time - k.t < 5) { sx += k.x; sz += k.z; n++; }
      }
      if (n > 0) this.enemyHeat[t] = { x: sx / n, y: game.world.terrain.heightAt(sx / n, sz / n), z: sz / n, t: game.time };
      this.evalT[t] -= dt;
      if (this.evalT[t] > 0) continue;
      this.evalT[t] = 5;
      this.assign(t);
    }
  }

  assign(team) {
    const game = this.game, mode = game.mode;
    const squads = this.list[team].filter(sq => !this.playerIsLeader(sq));
    if (mode.type === 'tdm') {
      const heat = this.enemyHeat[team];
      const flags = game.world.def.flags;
      for (const sq of squads) {
        if (sq.order && game.time - sq.order.t < 25 && Math.random() < 0.7) continue;
        let target;
        if (heat && Math.random() < 0.6) {
          let best = null, bd = 1e9;
          for (const f of flags) { const d = Math.hypot(f.x - heat.x, f.z - heat.z) + rand(0, 60); if (d < bd) { bd = d; best = f; } }
          target = best;
        } else target = flags[Math.floor(Math.random() * flags.length)];
        this.setOrder(sq, 'attack', null, target.x + rand(-15, 15), target.z + rand(-15, 15));
        sq.order.flag = { x: sq.order.x, z: sq.order.z, r: 22 };
      }
      return;
    }
    const flags = mode.flags;
    const assigned = new Map();
    for (const sq of this.list[team]) if (sq.order && sq.order.flag && this.playerIsLeader(sq)) assigned.set(sq.order.flag, (assigned.get(sq.order.flag) || 0) + 1);
    // losing side gets more aggressive
    const held = [0, 0]; for (const f of flags) if (f.owner >= 0) held[f.owner]++;
    const losing = held[team] < held[1 - team] || mode.tickets[team] < mode.tickets[1 - team] - 30;
    const threatened = (f) => f.counts[1 - team] > 0 || f.capTeam === 1 - team || Math.abs(f.progress) < 0.85;
    const choose = (sq, allowSafeDefend) => {
      const c = this.centroid(sq);
      let best = null, bestS = -1e9;
      for (const f of flags) {
        let v;
        if (f.owner === team) {
          if (threatened(f)) v = 1.45;
          else if (!allowSafeDefend) continue;
          else v = 0.1;
          if (mode.type === 'frontline') { const front = flags.some(g => g.owner !== team && Math.abs(g.index - f.index) === 1); v += front ? 0.35 : -0.4; }
        } else if (!mode.capturable(f, team)) continue;
        else v = (f.owner === -1 ? 1.2 : 1.0) + (losing ? 0.25 : 0);
        const dist = c ? Math.hypot(c.x - f.x, c.z - f.z) : 300;
        v -= dist / 1400;
        const n = assigned.get(f) || 0;
        v -= n * (f.owner === team && !threatened(f) ? 1.2 : 0.45);
        if (sq.order && sq.order.flag === f) v += 0.25;
        v += rand(0, 0.12);
        if (v > bestS) { bestS = v; best = f; }
      }
      return best;
    };
    let attackers = 0;
    const picks = [];
    for (const sq of squads) {
      const best = choose(sq, true);
      if (!best) continue;
      assigned.set(best, (assigned.get(best) || 0) + 1);
      picks.push([sq, best]);
      if (best.owner !== team) attackers++;
    }
    // always keep at least two squads on the offensive when there is something to take
    const minAttack = Math.min(squads.length, losing ? 3 : 2);
    for (const pk of picks) {
      if (attackers >= minAttack) break;
      const [sq, f] = pk;
      if (f.owner === team && !threatened(f)) {
        const alt = choose(sq, false);
        if (alt && alt.owner !== team) { assigned.set(f, assigned.get(f) - 1); assigned.set(alt, (assigned.get(alt) || 0) + 1); pk[1] = alt; attackers++; }
      }
    }
    for (const [sq, best] of picks) {
      if (!sq.order || sq.order.flag !== best) this.setOrder(sq, best.owner === team ? 'defend' : 'attack', best);
      else sq.order.type = best.owner === team ? 'defend' : 'attack';
      sq.order.ownedByUs = best.owner === team;
    }
  }

  centroid(sq) {
    let x = 0, z = 0, n = 0;
    for (const m of sq.members) if (m.state === 'alive') { x += m.pos.x; z += m.pos.z; n++; }
    return n ? { x: x / n, z: z / n } : null;
  }
}
