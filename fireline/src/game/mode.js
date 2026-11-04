// Game modes: Conquest (ticket bleed), Frontline (sequential push) and Team Deathmatch.
export const MODES = {
  conquest: { name: 'Conquest', desc: 'Capture and hold flags. Holding the majority drains enemy tickets; every death costs one.', tickets: 350, time: 25 * 60 },
  frontline: { name: 'Frontline', desc: 'Flags fall in order. Push the line flag by flag; only the front flags can be captured.', tickets: 300, time: 25 * 60 },
  tdm: { name: 'Team Deathmatch', desc: 'First team to the kill limit wins. Squad spawns keep the fight rolling.', tickets: 150, time: 15 * 60 },
};

export class GameMode {
  constructor(game, type, opts = {}) {
    this.game = game; this.type = type;
    const M = MODES[type];
    this.maxTickets = opts.tickets || M.tickets;
    this.tickets = [this.maxTickets, this.maxTickets];
    this.kills = [0, 0];
    this.timeLimit = opts.time || M.time;
    this.time = 0; this.over = false; this.winner = -1;
    this.bleedAcc = 0; this.tick = 0;
    const def = game.world.def;
    this.flags = type === 'tdm' ? [] : def.flags.map((f, i) => ({
      id: f.id, name: f.name, x: f.x, z: f.z, r: f.r, y: game.world.terrain.heightAt(f.x, f.z), index: i,
      owner: -1, progress: 0, counts: [0, 0], contested: false, capTeam: -1,
    }));
    if (type === 'frontline') {
      // order flags from team 0 HQ side (north, -z) to team 1 (south, +z)
      this.flags.sort((a, b) => a.z - b.z);
      this.flags.forEach((f, i) => { f.index = i; });
      const n = this.flags.length;
      this.flags.forEach((f, i) => { if (i < Math.floor(n / 2)) { f.owner = 0; f.progress = 1; } else if (i >= n - Math.floor(n / 2)) { f.owner = 1; f.progress = -1; } });
    }
  }

  capturable(f, team) {
    if (this.type === 'conquest') return true;
    if (this.type !== 'frontline') return false;
    if (f.owner === team) return true; // can always re-secure own flag progress
    const i = f.index, fl = this.flags;
    // team 0 pushes toward higher indices, team 1 toward lower
    if (team === 0) return i === 0 || fl[i - 1].owner === 0;
    return i === fl.length - 1 || fl[i + 1].owner === 1;
  }

  update(dt) {
    if (this.over) return;
    this.time += dt;
    this.tick += dt;
    if (this.tick >= 0.25) { this.updateFlags(this.tick); this.tick = 0; }
    if (this.type === 'conquest') {
      const held = [0, 0];
      for (const f of this.flags) if (f.owner >= 0) held[f.owner]++;
      const diff = held[0] - held[1];
      if (diff !== 0) {
        this.bleedAcc += dt * Math.abs(diff) / 4.5;
        while (this.bleedAcc >= 1) { this.bleedAcc -= 1; this.tickets[diff > 0 ? 1 : 0] = Math.max(0, this.tickets[diff > 0 ? 1 : 0] - 1); }
      }
    }
    // end conditions
    if (this.type === 'tdm') {
      if (this.kills[0] >= this.maxTickets) this.end(0); else if (this.kills[1] >= this.maxTickets) this.end(1);
    } else {
      if (this.tickets[0] <= 0) this.end(1); else if (this.tickets[1] <= 0) this.end(0);
      if (this.type === 'frontline') {
        if (this.flags.every(f => f.owner === 0)) this.end(0); else if (this.flags.every(f => f.owner === 1)) this.end(1);
      }
    }
    if (!this.over && this.time >= this.timeLimit) {
      const a = this.type === 'tdm' ? this.kills[0] : this.tickets[0], b = this.type === 'tdm' ? this.kills[1] : this.tickets[1];
      this.end(a === b ? -1 : a > b ? 0 : 1);
    }
  }

  updateFlags(dt) {
    const soldiers = this.game.soldiers;
    for (const f of this.flags) {
      f.counts[0] = 0; f.counts[1] = 0;
      for (const s of soldiers) {
        if (s.state !== 'alive') continue;
        const dx = s.pos.x - f.x, dz = s.pos.z - f.z;
        if (dx * dx + dz * dz < f.r * f.r && Math.abs(s.pos.y - f.y) < 14) f.counts[s.team]++;
      }
      const a = f.counts[0], b = f.counts[1];
      f.contested = a > 0 && b > 0;
      const diff = a - b;
      const prev = f.progress, prevOwner = f.owner;
      f.capTeam = -1;
      if (diff !== 0) {
        const t = diff > 0 ? 0 : 1;
        if (this.capturable(f, t)) {
          const rate = (1 / 22) * Math.pow(Math.min(Math.abs(diff), 5), 0.6);
          const dir = t === 0 ? 1 : -1;
          if (f.progress * dir < 1) f.capTeam = t;
          f.progress = Math.max(-1, Math.min(1, f.progress + dir * rate * dt));
        }
      } else if (a === 0 && b === 0) {
        // drift back toward owner state
        const target = f.owner === 0 ? 1 : f.owner === 1 ? -1 : 0;
        const r = 0.02 * dt;
        f.progress += Math.max(-r, Math.min(r, target - f.progress));
      }
      // ownership transitions
      if (f.owner === 0 && f.progress <= 0) { f.owner = -1; this.game.onFlagEvent(f, 'neutralized', 1, prevOwner); }
      if (f.owner === 1 && f.progress >= 0) { f.owner = -1; this.game.onFlagEvent(f, 'neutralized', 0, prevOwner); }
      if (f.owner !== 0 && f.progress >= 1) { f.owner = 0; this.game.onFlagEvent(f, 'captured', 0, prevOwner); }
      if (f.owner !== 1 && f.progress <= -1) { f.owner = 1; this.game.onFlagEvent(f, 'captured', 1, prevOwner); }
      void prev;
    }
  }

  onDeath(team) {
    if (this.type !== 'tdm') this.tickets[team] = Math.max(0, this.tickets[team] - 1);
  }
  onKill(team) { this.kills[team]++; }

  end(winner) {
    if (this.over) return;
    this.over = true; this.winner = winner;
    this.game.onMatchEnd(winner);
  }

  // Valid flag spawns for a team: owned and not currently contested by enemies.
  flagSpawns(team) {
    return this.flags.filter(f => f.owner === team && f.counts[1 - team] === 0);
  }
}
