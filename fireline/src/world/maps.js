// Four original maps: Ironworks (foundry), Brennhof (canal town), Outpost Zero (desert base), Frostpine (winter village).
// Each map defines terrain shaping, materials, objectives, HQs and a procedural-but-seeded layout.
import { smoothstep, clamp, lerp, distToSegment2, makeRng } from '../core/math.js';

const BDIMS = {
  house: [5, 4], house2: [5, 4], shop: [4, 4], barn: [6, 5], warehouse: [10, 6], shed: [2, 2],
  bunker: [3, 3], church: [5, 13], ruin: [4, 4], pumphouse: [4, 3],
};
const snap = (v) => Math.floor(v) + 0.5;

export class Layout {
  constructor(def) {
    this.def = def;
    this.rng = makeRng(def.seed);
    this.buildings = []; this.props = []; this.flatZones = []; this.fps = [];
    this.roads = def.roads; this.rivers = def.rivers || [];
    this.bridges = []; this.noTree = [];
  }
  riverDist(x, z) {
    let best = 1e9;
    for (const r of this.rivers) for (let k = 0; k < r.points.length - 1; k++) {
      const d = Math.sqrt(distToSegment2(x, z, r.points[k][0], r.points[k][1], r.points[k + 1][0], r.points[k + 1][1])) - r.width / 2;
      if (d < best) best = d;
    }
    return best;
  }
  roadDist(x, z) {
    let best = 1e9;
    for (const r of this.roads) for (let k = 0; k < r.points.length - 1; k++) {
      const d = Math.sqrt(distToSegment2(x, z, r.points[k][0], r.points[k][1], r.points[k + 1][0], r.points[k + 1][1])) - r.width / 2;
      if (d < best) best = d;
    }
    return best;
  }
  rectRoadClear(x, z, hw, hd, gap) {
    // sample rectangle border + center
    for (let i = -1; i <= 1; i += 0.5) for (let j = -1; j <= 1; j += 0.5) {
      const px = x + i * hw, pz = z + j * hd;
      if (this.roadDist(px, pz) < gap) return false;
      if (this.riverDist(px, pz) < gap + 4) return false;
      if (this.def.isWater && this.def.isWater(px, pz)) return false;
    }
    return true;
  }
  overlaps(x, z, hw, hd, gap) {
    for (const f of this.fps) if (x - hw - gap < f.maxX && x + hw + gap > f.minX && z - hd - gap < f.maxZ && z + hd + gap > f.minZ) return true;
    return false;
  }
  inBounds(x, z, hw, hd) { const L = this.def.playHalf - 8; return Math.abs(x) + hw < L && Math.abs(z) + hd < L; }
  b(type, x, z, rot = 0, opts = {}, force = false) {
    x = snap(x); z = snap(z);
    const dims = BDIMS[type];
    const w = opts.w || dims[0], d = opts.d || dims[1];
    const hw = (rot & 1) ? d : w, hd = (rot & 1) ? w : d;
    if (!force) {
      if (!this.inBounds(x, z, hw, hd)) return false;
      if (this.overlaps(x, z, hw, hd, opts.gap ?? 2.5)) return false;
      if (!this.rectRoadClear(x, z, hw + 1, hd + 1, opts.roadGap ?? 1.5)) return false;
    }
    this.buildings.push({ type, x, z, rot, opts });
    this.fps.push({ minX: x - hw, maxX: x + hw, minZ: z - hd, maxZ: z + hd });
    this.flatZones.push({ x, z, hw: hw + 1.2, hd: hd + 1.2, margin: 5, noGrass: true });
    return true;
  }
  p(type, x, z, rot = 0, opts = {}, hw = 0, hd = 0) {
    if (hw > 0) {
      if (this.overlaps(x, z, hw, hd, 0.6)) return false;
      this.fps.push({ minX: x - hw, maxX: x + hw, minZ: z - hd, maxZ: z + hd });
      if (opts.flat) this.flatZones.push({ x, z, hw: hw + 0.5, hd: hd + 0.5, margin: 3, noGrass: true });
    }
    this.props.push({ type, x, z, rot, opts });
    return true;
  }
  flat(x, z, hw, hd, margin = 6, h, noGrass = false, strength = 1) { this.flatZones.push({ x, z, hw, hd, margin, h, noGrass, strength }); }
  line(type, x0, z0, x1, z1, seg = 2) {
    // axis-aligned runs only: split into props of n segments
    const horiz = Math.abs(x1 - x0) >= Math.abs(z1 - z0);
    const len = horiz ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
    const n = Math.max(1, Math.floor(len / (seg * 2)));
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      const x = lerp(x0, x1, t), z = lerp(z0, z1, t);
      if (this.roadDist(x, z) < 1 || this.riverDist(x, z) < 1) continue;
      this.props.push({ type, x, z, rot: horiz ? 0 : 1, opts: { n: seg } });
    }
  }
  scatter(cx, cz, rMin, rMax, count, types, rotRandom = true, opts = {}) {
    let placed = 0;
    for (let tries = 0; tries < count * 12 && placed < count; tries++) {
      const a = this.rng() * Math.PI * 2, r = lerp(rMin, rMax, Math.sqrt(this.rng()));
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      const type = types[Math.floor(this.rng() * types.length)];
      // face nearest road roughly
      const rot = rotRandom ? Math.floor(this.rng() * 4) : 0;
      if (this.b(type, x, z, rot, Object.assign({}, opts))) placed++;
    }
    return placed;
  }
  reserve(x, z, hw, hd) { this.fps.push({ minX: x - hw, maxX: x + hw, minZ: z - hd, maxZ: z + hd }); }
  fillBlock(x0, x1, z0, z1) {
    // pack a street block with houses on a rough grid
    if (x1 - x0 < 8 || z1 - z0 < 8) return;
    const rng = this.rng;
    const cols = Math.max(1, Math.floor((x1 - x0) / 12)), rows = Math.max(1, Math.floor((z1 - z0) / 12));
    for (let a = 0; a < cols; a++) for (let c = 0; c < rows; c++) {
      if (rng() < 0.12) continue;
      const cx = x0 + (a + 0.5) * (x1 - x0) / cols, cz = z0 + (c + 0.5) * (z1 - z0) / rows;
      const w = 3 + Math.floor(rng() * 2), d = 3 + Math.floor(rng() * 2);
      this.b(rng() < 0.55 ? 'house2' : 'house', cx, cz, Math.floor(rng() * 4) & 2, { w, d, gap: 1.6, roadGap: 0.6 });
    }
    if (rng() < 0.5) this.p(rng() < 0.5 ? 'crateStack' : 'barrels', (x0 + x1) / 2 + rng() * 4, (z0 + z1) / 2, 0, {}, 1.3, 0.7);
  }
  hq(team) {
    // Each HQ is a compound of bulletproof T-walls (3.6 m). The front and both sides each have one
    // 6 m opening with a baffle wall behind it, so nobody outside can see into the spawn area.
    const h = this.def.hq[team];
    this.flat(h.x, h.z, 34, 22, 14, undefined, false);
    const s = team === 0 ? 1 : -1;
    const W = (x, z, rot, len) => this.p('blastWall', h.x + x, h.z + z * s, rot, { n: len / 2, h: this.def.hqWallH || 3.6 });
    W(-15, 16, 0, 24); W(15, 16, 0, 24); W(0, 11, 0, 18);           // front with centre gap + baffle
    for (const sx of [-1, 1]) {
      W(27 * sx, 10, 1, 12); W(27 * sx, -9, 1, 14);                 // side with a gap at z -2..4
      W(22 * sx, 1, 1, 14);                                         // side baffle
      this.p('container', h.x + 33 * sx, h.z + 21 * s, 0, {}, 1.3, 3.1);
    }
    this.p('tent', h.x - 13, h.z - 7 * s, 0, {}, 2.5, 3);
    this.p('tent', h.x + 13, h.z - 7 * s, 0, {}, 2.5, 3);
    this.p('tent', h.x, h.z - 11 * s, 1, {}, 3, 2.5);
    this.p('crateStack', h.x - 6, h.z + 2 * s, 0, {}, 1.3, 0.7);
    this.p('crate', h.x + 7, h.z + 3 * s, 0, {}, 0.7, 0.7);
    this.noTree.push({ x: h.x, z: h.z, r: 34 });
    this.reserve(h.x, h.z, 38, 20); // keep the base and its exits clear of filler
  }
}

// ---------------------------------------------------------------------------------------------
// Close-quarters maps, sized close to the small maps (about 215 m of play area)
const ironworks = {
  id: 'ironworks', name: 'Ironworks',
  desc: 'A shut-down foundry under grey skies. Fight through the furnace hall, a rail yard of boxcars, the smelter courtyard and the loading docks, with a control block in the middle.',
  size: 252, cell: 2, seed: 9091, waterLevel: null, playHalf: 108, biome: 'industrial', time: 'overcast', flatRoofs: true, cqb: true,
  terrainTextures: ['gravel', 'dirt', 'rock', 'asphalt'],
  palette: { t0: [0.72, 0.7, 0.66], t1: [0.8, 0.7, 0.6], t2: [0.85, 0.85, 0.85], t3: [1.0, 1.0, 1.05], macro: [0.75, 0.72, 0.66] },
  mapColors: [[132, 128, 120], [118, 104, 90], [120, 118, 112], [88, 88, 92]],
  wallColors: [0xb8b4aa, 0xa9a49a, 0xc4bcae, 0x9aa0a4, 0xb0a894],
  roofColors: [0x6a6e70],
  grassColor: [0x6a7040, 0x7a8048, 0x8a9050],
  trees: { types: ['birch', 'oak', 'pine'], weights: [0.5, 0.3, 0.2], scatter: 1 / 9000, bush: 1 / 2500, rock: 1 / 3500 },
  hq: [{ x: 0, z: -94, r: 16 }, { x: 0, z: 94, r: 16 }],
  flags: [
    { id: 'A', name: 'Furnace Hall', x: -46, z: -38, r: 14 },
    { id: 'B', name: 'Rail Yard', x: 48, z: -30, r: 14 },
    { id: 'C', name: 'Smelter', x: -48, z: 30, r: 14 },
    { id: 'D', name: 'Loading Docks', x: 46, z: 38, r: 14 },
  ],
  rivers: [],
  roads: [
    { points: [[0, -112], [0, -64]], width: 7 }, { points: [[0, 64], [0, 112]], width: 7 },
    { points: [[-96, -64], [96, -64]], width: 6 }, { points: [[-96, 64], [96, 64]], width: 6 },
    { points: [[-84, -64], [-84, 64]], width: 5 }, { points: [[84, -64], [84, 64]], width: 5 },
    { points: [[-84, 0], [-16, 0]], width: 6 }, { points: [[16, 0], [84, 0]], width: 6 },
  ],
  height(x, z, n, n2) {
    let h = 4 + 0.6 * n.fbm(x / 80, z / 80, 3);
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(96, 124, e) * (11 + 4 * n2.fbm(x / 30, z / 30, 2));
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.2, 0.36, slope);
    const asphalt = road * 1.6 + (pad ? 0.7 : 0);
    const dirt = smoothstep(0.2, 0.6, n(x / 30 + 3, z / 30)) * 0.8;
    return [Math.max(0.2, 1 - rock - asphalt - dirt * 0.5), dirt, rock, asphalt];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) {
    return clamp((w[1] / (w[0] + w[1] + w[2] + w[3])) * (1 - road) * 0.7 * (0.3 + 0.7 * n(x / 12, z / 12)), 0, 0.6);
  },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    // centre: a two-storey control block sits on the HQ-to-HQ axis, with container screens either side
    L.b('house2', 0, 0, 0, { cat: 'concrete', flat: true, w: 6, d: 5, color: 0xb0aca2 }, true);
    L.p('container', 0, -34, 1, { stack: true }, 3.1, 1.3); L.p('container', 0, 34, 1, { stack: true }, 3.1, 1.3);
    L.p('crateStack', -8, -20, 0, {}, 1.3, 0.7); L.p('crateStack', 8, 20, 0, {}, 1.3, 0.7);
    L.p('jersey', 10, -14, 0, { n: 2 }, 2, 0.4); L.p('jersey', -10, 14, 0, { n: 2 }, 2, 0.4);
    // A: furnace hall, a big open-sided hall with furnaces inside
    const A = F[0];
    L.b('warehouse', A.x, A.z, 0, { w: 12, d: 7, H: 9, gap: 1 }, true);
    for (const [dx, dz] of [[-9, -3], [0, 3], [9, -3]]) L.p('tank', A.x + dx, A.z + dz, 0, { color: 0x6a5a4a }, 0, 0);
    L.p('pipe', A.x, A.z - 10, 0, { len: 18 }, 0, 0);
    L.p('chimney', A.x - 20, A.z - 5, 0, { h: 24 }, 1.7, 1.7); L.p('chimney', A.x - 20, A.z + 5, 0, { h: 20 }, 1.7, 1.7);
    L.p('crateStack', A.x + 16, A.z + 11, 0, {}, 1.3, 0.7); L.p('crateStack', A.x - 10, A.z + 12, 0, {}, 1.3, 0.7);
    L.b('house2', A.x + 26, A.z - 14, 1, { cat: 'concrete', flat: true, w: 4, d: 3, color: 0xb0aca2 });
    L.b('shed', A.x - 18, A.z + 20, 0, { cat: 'metal' });
    // B: rail yard, rows of boxcars and container lanes
    const B = F[1];
    for (const lane of [-12, 0, 12]) L.p('rails', B.x + lane, B.z, 1, { len: 56 });
    for (const lane of [-12, 0, 12]) for (let i = -1; i <= 1; i++) { if (rng() < 0.2 && i !== 0) continue; L.p('traincar', B.x + lane + 0.5, B.z + i * 16, 0, {}, 1.5, 7.2); }
    for (let i = 0; i < 6; i++) L.p('container', B.x + 24 + (i % 2) * 6, B.z - 20 + Math.floor(i / 2) * 14, 0, { stack: rng() < 0.4 }, 1.3, 3.1);
    L.b('shop', B.x - 26, B.z - 18, 0, { cat: 'brick', w: 3, d: 3, floors: 1 });
    L.p('jersey', B.x - 22, B.z + 14, 1, { n: 3 }, 0.4, 3.1); L.p('sandbagRing', B.x - 20, B.z + 2, 1, {}, 2, 2.5);
    // C: smelter courtyard with tanks, pipes and pump houses
    const C = F[2];
    for (const [dx, dz] of [[-9, -9], [9, -9], [-9, 9], [9, 9]]) L.p('tank', C.x + dx, C.z + dz, 0, { color: 0xa8a49a }, 1.7, 1.7);
    L.p('pipe', C.x, C.z - 9, 0, { len: 14 }, 0, 0); L.p('pipe', C.x, C.z + 9, 0, { len: 14 }, 0, 0); L.p('pipe', C.x - 9, C.z, 1, { len: 14 }, 0, 0);
    L.b('pumphouse', C.x + 22, C.z - 4, 1, {}, true); L.b('pumphouse', C.x - 24, C.z + 6, 1, {});
    L.p('chimney', C.x + 2, C.z + 22, 0, { h: 26 }, 1.7, 1.7);
    L.b('warehouse', C.x, C.z - 20, 0, { w: 8, d: 3, H: 6 }, true); // casting shed between Smelter and Furnace Hall
    L.p('barrels', C.x + 4, C.z + 2, 0, {}, 1, 0.4); L.p('crateStack', C.x - 3, C.z - 3, 0, {}, 1.3, 0.7);
    // D: loading docks, two warehouses with crates, trucks and a dock platform
    const D = F[3];
    L.b('warehouse', D.x - 18, D.z - 8, 1, { w: 6, d: 4, H: 6 }, true); L.b('warehouse', D.x + 18, D.z - 8, 1, { w: 6, d: 4, H: 6 }, true);
    L.p('platform', D.x, D.z + 13, 0, { len: 26, w: 4 }, 13, 2);
    for (let i = 0; i < 4; i++) L.p('crateStack', D.x - 9 + i * 6, D.z + 4, 0, {}, 1.3, 0.7);
    L.p('car', D.x - 5, D.z - 6, 1, { color: 0x6a6a5a }, 2.2, 1); L.p('car', D.x + 6, D.z - 2, 0, { color: 0x8a4a2a }, 1, 2.2);
    L.p('container', D.x, D.z - 20, 1, { stack: true }, 3.1, 1.3);
    // break the sightlines between neighbouring flags
    L.b('house2', A.x, A.z + 21, 0, { cat: 'concrete', flat: true, w: 5, d: 3, color: 0xb4b0a6 }, true);
    L.b('warehouse', -14, 36, 1, { w: 6, d: 4, H: 6 }, true); L.b('house2', 16, 40, 0, { cat: 'concrete', flat: true, w: 4, d: 4, color: 0xb0aca2 }, true);
    L.p('container', 40, 10, 1, { stack: true }, 3.1, 1.3); L.p('container', 52, 12, 1, { stack: true }, 3.1, 1.3); L.p('container', 60, 7, 1, {}, 3.1, 1.3);
    // keep each capture zone partly open, then fill the blocks between them
    for (const f of F) L.reserve(f.x, f.z, 8, 8);
    const fill = [[-22, -22], [22, 22], [-22, 22], [22, -20], [-62, -82], [62, 82], [-62, 82], [62, -82], [-70, 0], [70, 0]];
    for (const [x, z] of fill) {
      const t = rng();
      if (t < 0.4) L.b('house2', x, z, Math.floor(rng() * 4), { cat: 'concrete', flat: true, w: 4, d: 3, color: 0xb4b0a6 });
      else if (t < 0.65) L.b('warehouse', x, z, Math.floor(rng() * 2), { w: 5, d: 4, H: 6 });
      else if (t < 0.85) { L.p('container', x, z, 0, { stack: true }, 1.3, 3.1); L.p('container', x + 4, z, 0, {}, 1.3, 3.1); }
      else L.b('ruin', x, z, Math.floor(rng() * 4), { cat: 'brick' });
    }
    L.scatter(0, 0, 18, 92, 16, ['warehouse', 'shed', 'house2', 'pumphouse', 'shop'], true, { w: 4, d: 3, cat: 'metal', flat: true, gap: 3 });
    for (let i = 0; i < 14; i++) {
      const a = rng() * Math.PI * 2, r = 16 + rng() * 76;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (L.roadDist(x, z) < 5) continue;
      const rot = rng() < 0.5 ? 0 : 1;
      L.p('container', x, z, rot, { stack: rng() < 0.35 }, rot ? 3.2 : 1.4, rot ? 1.4 : 3.2);
      if (rng() < 0.6) L.p('crateStack', x + (rot ? 0 : 3), z + (rot ? 3 : 0), 0, {}, 1.3, 0.7);
    }
    for (let i = 0; i < 8; i++) { const x = (rng() - 0.5) * 170, z = (rng() - 0.5) * 150; L.p(rng() < 0.5 ? 'hesco' : 'jersey', x, z, Math.floor(rng() * 2), { n: 3 }, 2, 2); }
    L.forests = [[-96, -96, 10], [96, 96, 10], [96, -40, 8], [-96, 40, 8]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.4 });
  },
};

const brennhof = {
  id: 'brennhof', name: 'Brennhof',
  desc: 'A tight old town split by a canal. Narrow streets and alleys, the station, a brewery, the church and town hall, and three bridges over the water. Every corner is a fight.',
  size: 248, cell: 2, seed: 7171, waterLevel: 0, playHalf: 106, biome: 'temperate', time: 'dusk', cqb: true,
  terrainTextures: ['grass', 'dirt', 'rock', 'gravel'],
  palette: { t0: [0.55, 0.75, 0.32], t1: [1.0, 0.86, 0.68], t2: [0.95, 0.95, 0.95], t3: [1.05, 1.02, 0.98], macro: [0.95, 0.92, 0.6] },
  mapColors: [[104, 136, 70], [146, 124, 96], [132, 130, 124], [150, 146, 138]],
  wallColors: [0xe8e0d0, 0xe0c8a8, 0xd8d0c0, 0xc8d4d0, 0xe8d8b8, 0xd8b8a0, 0xf0e8d8, 0xc0b8a8],
  roofColors: [0x8a3a2e, 0x7b4a36, 0x5a4c44, 0x6a3a30, 0x4f5a66],
  grassColor: [0x587a30, 0x6e943a, 0x8cae50],
  trees: { types: ['oak', 'birch', 'pine'], weights: [0.6, 0.3, 0.1], scatter: 1 / 6000, bush: 1 / 2200, rock: 1 / 6000 },
  hq: [{ x: 0, z: -92, r: 16 }, { x: 0, z: 92, r: 16 }],
  flags: [
    { id: 'A', name: 'Station', x: -72, z: -46, r: 14 },
    { id: 'B', name: 'Brewery', x: 72, z: -44, r: 14 },
    { id: 'C', name: 'Canal Bridge', x: 0.5, z: 4.5, r: 13 },
    { id: 'D', name: 'Church', x: -72, z: 46, r: 14 },
    { id: 'E', name: 'Town Hall', x: 72, z: 48, r: 14 },
  ],
  rivers: [{ points: [[-124, 4], [-60, 2.5], [0, 4], [60, 5.5], [124, 4]], width: 12, depth: 2.4, bankSlope: 0.9 }],
  roads: [
    { points: [[0, -112], [0, -66]], width: 7 }, { points: [[0, 66], [0, 112]], width: 7 },
    { points: [[-100, -66], [100, -66]], width: 6 }, { points: [[-100, 66], [100, 66]], width: 6 },
    { points: [[-100, -28], [100, -28]], width: 5 }, { points: [[-100, 32], [100, 32]], width: 5 },
    { points: [[-54, -66], [-54, -7]], width: 6 }, { points: [[-54, 13], [-54, 66]], width: 6 },
    { points: [[54, -66], [54, -5]], width: 6 }, { points: [[54, 15], [54, 66]], width: 6 },
    { points: [[0, -28], [0, -7]], width: 6 }, { points: [[0, 16], [0, 32]], width: 6 },
  ],
  height(x, z, n, n2) {
    let h = 3.2 + 0.4 * n.fbm(x / 100, z / 100, 3);
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(94, 122, e) * (13 + 5 * n2.fbm(x / 30, z / 30, 2));
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.22, 0.4, slope);
    const cobble = road * 1.6 + (pad ? 0.6 : 0) + (1 - smoothstep(4, 8, riverD)) * 1.2;
    const dirt = smoothstep(0.35, 0.65, n(x / 30, z / 30)) * 0.5;
    return [Math.max(0.05, 1 - rock - cobble - dirt), dirt, rock, cobble];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) {
    return clamp((w[0] / (w[0] + w[1] + w[2] + w[3])) * (1 - road) * (0.5 + 0.5 * n(x / 18, z / 18)), 0, 1);
  },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    L.bridges.push({ x: 0.5, z: 4.5, len: 22, w: 8 }, { x: -53.5, z: 3, len: 20, w: 6 }, { x: 54.5, z: 5.5, len: 20, w: 6 });
    for (const b of L.bridges) L.fps.push({ minX: b.x - b.w / 2 - 1, maxX: b.x + b.w / 2 + 1, minZ: b.z - b.len / 2, maxZ: b.z + b.len / 2 });
    // quay walls along the canal
    for (const side of [-1, 1]) for (let x = -98; x < 100; x += 8) { if (Math.abs(x) < 7 || Math.abs(x + 54) < 7 || Math.abs(x - 54) < 7) continue; L.p('stoneWall', x, 4 + side * 9, 0, { n: 2 }); }
    // A: station with platform, rails and boxcars
    const A = F[0], B = F[1], C = F[2], D = F[3], E = F[4];
    L.b('warehouse', A.x, A.z - 10, 0, { cat: 'brick', w: 10, d: 4, H: 6, color: 0xb87a5a }, true);
    L.p('platform', A.x, A.z + 1, 0, { len: 34, w: 4 }, 17, 2);
    L.p('rails', A.x - 4, A.z + 7, 0, { len: 50 }); L.p('traincar', A.x - 12, A.z + 7, 1, {}, 7.2, 1.5); L.p('traincar', A.x + 6, A.z + 7, 1, {}, 7.2, 1.5);
    // B: brewery hall with tanks and a yard
    L.b('warehouse', B.x, B.z - 6, 1, { cat: 'brick', w: 7, d: 5, H: 7, color: 0xa86a4a }, true);
    for (const [dx, dz] of [[-11, 6], [-11, -6]]) L.p('tank', B.x + dx, B.z + dz, 0, { color: 0xb08a5a }, 1.7, 1.7);
    L.p('barrels', B.x + 10, B.z + 10, 0, {}, 1, 0.4); L.p('crateStack', B.x - 6, B.z + 10, 0, {}, 1.3, 0.7);
    // C: the canal bridge, with sandbag posts at each end and a market on the south side
    L.p('sandbags', C.x + 6, C.z - 13, 0, { n: 3 }, 1.6, 0.4); L.p('sandbags', C.x - 6, C.z + 13, 0, { n: 3 }, 1.6, 0.4);
    L.p('car', C.x - 12, C.z - 15, 1, {}, 2.2, 1); L.p('car', C.x + 12, C.z + 15, 1, {}, 2.2, 1);
    for (let i = 0; i < 4; i++) L.p('stall', -10.5 + i * 7, -36, 0, {}, 1.7, 1.3);
    for (let i = 0; i < 4; i++) L.p('stall', -10.5 + i * 7, 40, 2, {}, 1.7, 1.3);
    // houses that break the sightlines between neighbouring flags (A-C, C-E, B-E, A-D)
    L.b('house2', -36, -17, 0, { w: 5, d: 3, color: 0xe0c8a8 }, true); L.b('house2', 36, 23, 0, { w: 5, d: 3, color: 0xd8d0c0 }, true);
    L.b('house2', 74, -17, 0, { w: 5, d: 3, color: 0xe8d8b8 }, true); L.b('house2', 70, 23, 0, { w: 5, d: 3, color: 0xc8d4d0 }, true);
    L.b('house', -72, -18, 0, { w: 5, d: 3, color: 0xd8b8a0 }, true); L.b('house', -74, 22, 0, { w: 5, d: 3, color: 0xf0e8d8 }, true);
    // D: church and graveyard
    L.b('church', D.x, D.z + 2, 0, {}, true);
    for (let gx = 0; gx < 3; gx++) for (let gz = 0; gz < 3; gz++) L.p('grave', D.x + 13 + gx * 3, D.z - 4 + gz * 3.2, 0, {}, 0.4, 0.2);
    // E: town hall on its square
    L.b('house2', E.x, E.z + 6, 0, { cat: 'brick', w: 6, d: 4, color: 0xd8b898 }, true);
    L.p('fountain', E.x - 2, E.z - 8, 0, {}, 4, 4);
    // buildings on the HQ-to-HQ axis so no street runs straight between the bases
    L.b('house2', 0, -47, 0, { cat: 'brick', w: 7, d: 5, color: 0xd8c8a8 }, true);
    L.b('house2', 0, 49, 0, { cat: 'brick', w: 7, d: 5, color: 0xc8b8a0 }, true);
    for (const f of F) if (f.id !== 'C') L.reserve(f.x, f.z, 7, 7);
    // town blocks between the streets, packed with houses and narrow alleys
    const blocks = [
      [-100, -54, -100, -66], [54, 100, -100, -66], [-54, -30, -100, -66], [30, 54, -100, -66],
      [-100, -54, -66, -28], [-54, 54, -66, -28], [54, 100, -66, -28],
      [-100, -54, -28, -8], [-54, 0, -28, -8], [0, 54, -28, -8], [54, 100, -28, -8],
      [-100, -54, 16, 32], [-54, 0, 16, 32], [0, 54, 16, 32], [54, 100, 16, 32],
      [-100, -54, 32, 66], [-54, 54, 32, 66], [54, 100, 32, 66],
      [-100, -54, 66, 100], [54, 100, 66, 100], [-54, -30, 66, 100], [30, 54, 66, 100],
    ];
    for (const [x0, x1, z0, z1] of blocks) L.fillBlock(x0 + 4, x1 - 4, z0 + 4, z1 - 4);
    L.forests = [[-92, -92, 9], [92, 92, 9], [92, -92, 8], [-92, 92, 8]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.2 });
  },
};

// ---------------------------------------------------------------------------------------------
// Small maps: compact overall footprint
const outpost = {
  id: 'outpost', name: 'Outpost Zero',
  desc: 'A small walled desert base. Barracks rows, a comms tower and a motor pool packed inside a hesco perimeter, with guard towers on every corner.',
  size: 260, cell: 2, seed: 3131, waterLevel: null, playHalf: 112, biome: 'arid', time: 'noon', flatRoofs: true, cqb: true, small: true,
  terrainTextures: ['sand', 'drygrass', 'rock', 'asphalt'],
  palette: { t0: [1.0, 0.9, 0.72], t1: [1.0, 0.92, 0.7], t2: [1.0, 0.92, 0.82], t3: [1.2, 1.2, 1.25], macro: [1.0, 0.85, 0.65] },
  mapColors: [[200, 182, 140], [168, 150, 104], [150, 136, 118], [110, 110, 112]],
  wallColors: [0xd9c7a4, 0xcbb38a, 0xe3d3b0, 0xc8c0a8],
  roofColors: [0xb5a68c],
  grassColor: [0xa89a5a, 0xb8a868, 0x8f8a4a],
  trees: { types: ['acacia', 'shrub', 'palm'], weights: [0.4, 0.4, 0.2], scatter: 1 / 5000, bush: 1 / 1500, rock: 1 / 1500 },
  hq: [{ x: 0, z: -98, r: 16 }, { x: 0, z: 98, r: 16 }],
  flags: [
    { id: 'A', name: 'Barracks', x: -40, z: -36, r: 13 },
    { id: 'B', name: 'Comms Tower', x: 4, z: 4, r: 13 },
    { id: 'C', name: 'Motor Pool', x: 40, z: 40, r: 13 },
  ],
  rivers: [],
  roads: [{ points: [[0, -120], [0, 120]], width: 6 }, { points: [[-120, 0], [120, 0]], width: 6 }],
  height(x, z, n, n2) {
    let h = 3 + 0.5 * n.fbm(x / 60, z / 60, 3);
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(100, 128, e) * (9 + 3 * n2.fbm(x / 25, z / 25, 2));
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.2, 0.36, slope);
    const asphalt = road * 1.6 + (pad ? 0.4 : 0);
    const dry = smoothstep(0.2, 0.6, n(x / 30, z / 30)) * 0.7;
    return [Math.max(0.15, 1 - rock - asphalt - dry * 0.5), dry, rock, asphalt];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) { return clamp((w[1] / (w[0] + w[1] + w[2] + w[3])) * (1 - road) * 0.8, 0, 0.7); },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    // hesco perimeter with gates
    for (let i = -80; i <= 80; i += 4) {
      if (Math.abs(i) > 8) { L.p('hesco', -80, i, 1, { n: 3 }); L.p('hesco', 80, i, 1, { n: 3 }); }
      if (Math.abs(i) > 32) { L.p('hesco', i, -80, 0, { n: 3 }); L.p('hesco', i, 80, 0, { n: 3 }); } // the HQ blast walls close the gap
    }
    for (const [x, z] of [[-76, -76], [76, -76], [-76, 76], [76, 76]]) L.p('watchtower', x, z, 0, {}, 2, 2);
    // A barracks rows
    const A = F[0];
    for (let r = -1; r <= 1; r++) L.b('house', A.x + r * 14, A.z - 4, 1, { cat: 'concrete', flat: true, w: 6, d: 2, noInterior: true, gap: 1 }, true);
    L.p('sandbags', A.x, A.z + 12, 0, { n: 4 }, 2.1, 0.4); L.p('sandbagRing', A.x - 18, A.z + 14, 0, {}, 2.5, 2);
    L.p('crateStack', A.x + 18, A.z + 12, 0, {}, 1.3, 0.7);
    // B comms
    const B = F[1];
    L.p('radioTower', B.x + 7, B.z - 7, 0, { h: 26 }, 3, 3);
    L.b('bunker', B.x - 8, B.z + 6, 0, {}, true);
    L.p('sandbagRing', B.x + 10, B.z + 10, 2, {}, 2.5, 2); L.p('sandbagRing', B.x - 12, B.z - 10, 0, {}, 2.5, 2);
    L.p('container', B.x + 18, B.z - 2, 0, {}, 1.3, 3.1); L.p('container', B.x - 20, B.z, 0, { stack: true }, 1.3, 3.1);
    // C motor pool
    const C = F[2];
    L.b('warehouse', C.x, C.z - 6, 0, { w: 7, d: 4, H: 5.5 }, true);
    for (let i = 0; i < 4; i++) L.p('car', C.x - 12 + i * 8, C.z + 10, 0, { color: [0x6a6a4a, 0x7a7262, 0x5e6b4a, 0x8a8f94][i] }, 1, 2.2);
    L.p('tank', C.x + 20, C.z - 18, 0, { color: 0xb8b0a0 }, 1.7, 1.7); L.p('barrels', C.x - 18, C.z - 14, 0, {}, 1, 0.4);
    // buildings and container stacks breaking the sightlines between neighbouring flags
    L.b('shop', -18, -16, 0, { w: 4, d: 4, floors: 2, flat: true, cat: 'concrete', color: 0xd9c7a4 }, true);
    L.b('shop', 22, 22, 0, { w: 4, d: 4, floors: 2, flat: true, cat: 'concrete', color: 0xcbb38a }, true);
    L.p('container', -10, -26, 0, { stack: true }, 1.3, 3.1); L.p('container', -27, -8, 1, { stack: true }, 3.1, 1.3);
    L.p('container', 31, 14, 1, { stack: true }, 3.1, 1.3); L.p('container', 14, 31, 0, { stack: true }, 1.3, 3.1);
    // cover scattered between objectives
    const fill = [[-40, 20], [40, -30], [-10, -50], [20, 55], [-55, 50], [55, -55], [-20, 30], [25, -15], [-60, -5], [60, 10]];
    for (const [x, z] of fill) {
      const t = rng();
      if (t < 0.35) L.b(rng() < 0.5 ? 'shop' : 'bunker', x, z, Math.floor(rng() * 4), { w: 3, d: 3, floors: 1, gap: 2 });
      else if (t < 0.65) { L.p('container', x, z, Math.floor(rng() * 2), { stack: rng() < 0.4 }, 3.2, 3.2); }
      else { L.p('jersey', x, z, Math.floor(rng() * 2), { n: 2 }, 2.2, 2.2); L.p('crateStack', x + 3, z + 3, 0, {}, 1.3, 0.7); }
    }
    L.forests = [];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.5 });
    L.noTree.push({ x: 0, z: 0, r: 85 });
  },
};

const frostpine = {
  id: 'frostpine', name: 'Frostpine',
  desc: 'A snowed-in mountain village. A timber ski lodge, cabins among snowy pines, a frozen pond in the middle and a sawmill, all within a few hundred metres.',
  size: 280, cell: 2, seed: 6262, waterLevel: null, playHalf: 122, biome: 'winter', time: 'snow', weather: 'snow', small: true, hqWallH: 4.6,
  terrainTextures: ['snow', 'dirt', 'rock', 'ice'],
  palette: { t0: [1.0, 1.0, 1.0], t1: [0.95, 0.88, 0.82], t2: [0.92, 0.94, 0.98], t3: [1.0, 1.0, 1.0], macro: [0.92, 0.95, 1.0] },
  mapColors: [[228, 232, 238], [168, 150, 130], [150, 152, 158], [176, 204, 222]],
  wallColors: [0x8a6a4c, 0x7a5a40, 0x9a7a58, 0x6e5440],
  roofColors: [0xe6ecf0, 0xdce4ea],
  grassColor: [0x6a7050, 0x7a8058, 0x8a9060],
  trees: { types: ['snowpine'], weights: [1], scatter: 1 / 900, bush: 1 / 1400, rock: 1 / 2500 },
  hq: [{ x: 0, z: -108, r: 16 }, { x: 0, z: 108, r: 16 }],
  flags: [
    { id: 'A', name: 'Ski Lodge', x: -42, z: -40, r: 14 },
    { id: 'B', name: 'Frozen Pond', x: 6, z: 4, r: 15 },
    { id: 'C', name: 'Sawmill', x: 44, z: 44, r: 14 },
  ],
  rivers: [],
  roads: [{ points: [[0, -130], [-20, -60], [-42, -40], [-26, -8], [6, 4], [30, 25], [44, 44], [20, 90], [0, 130]], width: 5 }],
  height(x, z, n, n2) {
    let h = 7 + 3.5 * n.fbm(x / 90, z / 90, 3) + 1.2 * n2.fbm(x / 30, z / 30, 2);
    h -= 3 * Math.exp(-((x - 6) ** 2 + (z - 4) ** 2) / (2 * 26 * 26));
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(105, 138, e) * (16 + 6 * n2.fbm(x / 30, z / 30, 2));
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.24, 0.42, slope);
    const ice = 1 - smoothstep(16, 20, Math.hypot(x - 6, z - 4));
    const dirt = road * 0.9 + (pad ? 0.25 : 0);
    return [Math.max(0.1, 1.2 - rock - dirt - ice * 2), dirt, rock, ice * 2];
  },
  grassDensity() { return 0; },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    L.flat(6, 4, 20, 20, 8, undefined, true, 0.85);
    // A ski lodge
    const A = F[0];
    L.b('barn', A.x, A.z - 4, 0, { w: 7, d: 5, H: 6, color: 0x7a5a40 }, true);
    L.b('house2', A.x + 22, A.z + 6, 1, { cat: 'wood', w: 3, d: 4 }); L.b('shed', A.x - 22, A.z + 10, 0, { color: 0x6e5440 });
    L.p('logs', A.x + 4, A.z + 14, 0, {}, 2.6, 1.3); L.line('fence', A.x - 28, A.z + 22, A.x + 10, A.z + 22);
    // B frozen pond with a boathouse and jetty cover
    const B = F[1];
    L.b('shed', B.x + 22, B.z - 8, 1, { color: 0x6e5440 }); L.p('crateStack', B.x - 18, B.z + 6, 0, {}, 1.3, 0.7);
    L.p('logs', B.x - 8, B.z - 14, 1, {}, 1.3, 2.6); L.p('logs', B.x + 10, B.z + 16, 0, {}, 2.6, 1.3);
    L.p('sandbags', B.x, B.z, 0, { n: 3 }, 1.6, 0.4); L.p('haystack', B.x - 20, B.z - 18, 0, {}, 1.3, 0.9);
    // C sawmill
    const C = F[2];
    L.b('warehouse', C.x - 4, C.z - 6, 1, { cat: 'wood', w: 7, d: 4, H: 5, color: 0x7a5a40 }, true);
    for (let i = 0; i < 4; i++) L.p('logs', C.x + 12, C.z - 14 + i * 7, 1, {}, 1.3, 2.6);
    L.p('crane', C.x - 18, C.z + 18, 0, {}, 4.4, 1.9); L.b('shed', C.x + 16, C.z + 16, 0, { color: 0x6e5440 });
    // cabins between neighbouring flags so the pond is not overlooked from the lodge or sawmill
    L.b('house2', -16, -17, 0, { cat: 'wood', w: 4, d: 3 }, true); L.b('house', -6, -28, 0, { cat: 'wood', w: 3, d: 3 }, true);
    L.b('house2', 18, 32, 1, { cat: 'wood', w: 4, d: 3 }, true); L.b('house', 37, 13, 0, { cat: 'wood', w: 3, d: 3 }, true);
    L.p('logs', -30, -24, 1, {}, 1.3, 2.6); L.p('logs', 28, 30, 0, {}, 2.6, 1.3);
    // cabins through the woods
    const cabins = [[-60, 10], [-30, 40], [30, -40], [60, -10], [-10, 60], [10, -60], [-70, -70], [70, 70], [-60, 60], [60, -60], [-25, -75], [25, 75]];
    for (const [x, z] of cabins) L.b(rng() < 0.4 ? 'house2' : 'house', x, z, Math.floor(rng() * 4), { cat: 'wood', w: 3, d: 3, gap: 3 });
    for (let i = 0; i < 8; i++) { const x = (rng() - 0.5) * 180, z = (rng() - 0.5) * 180; L.p(rng() < 0.5 ? 'logs' : 'crateStack', x, z, Math.floor(rng() * 2), {}, 2.6, 2.6); }
    L.forests = [[-80, 20, 30], [80, -20, 30], [-30, 80, 26], [30, -80, 26], [-85, -85, 22], [85, 85, 22], [60, 40, 14], [-60, -30, 14]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.3 });
    L.noTree.push({ x: 6, z: 4, r: 24 });
  },
};

export const MAPS = { ironworks, brennhof, outpost, frostpine };
