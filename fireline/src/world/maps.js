// Two original maps: Greenhollow (temperate river valley) and Port Kessar (arid coastal town).
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
  hq(team) {
    const h = this.def.hq[team];
    this.flat(h.x, h.z, 30, 22, 14, undefined, false);
    const s = team === 0 ? 1 : -1;
    this.p('tent', h.x - 14, h.z - 6 * s, 0, {}, 2.5, 3);
    this.p('tent', h.x + 14, h.z - 6 * s, 0, {}, 2.5, 3);
    this.p('tent', h.x, h.z - 10 * s, 1, {}, 3, 2.5);
    this.p('crateStack', h.x - 6, h.z + 2 * s, 0, {}, 1.3, 0.7);
    this.p('crate', h.x + 7, h.z + 3 * s, 0, {}, 0.7, 0.7);
    this.p('container', h.x + 22, h.z + 6 * s, 0, {}, 1.3, 3.1);
    this.p('container', h.x - 22, h.z + 6 * s, 0, {}, 1.3, 3.1);
    for (let i = -3; i <= 3; i++) this.p('hesco', h.x + i * 7, h.z + 22 * s, 0, { n: 3 }, 1.7, 0.6);
    this.noTree.push({ x: h.x, z: h.z, r: 40 });
  }
}

// ---------------------------------------------------------------------------------------------
const greenhollow = {
  id: 'greenhollow', name: 'Greenhollow',
  desc: 'Rolling farmland and woods split by a slow river. Long sightlines over the fields, close fights in the village by the mill bridge.',
  size: 960, cell: 3, seed: 1337, waterLevel: 0, playHalf: 440, biome: 'temperate', time: 'morning',
  terrainTextures: ['grass', 'dirt', 'rock', 'gravel'],
  palette: { t0: [0.55, 0.78, 0.30], t1: [1.0, 0.86, 0.68], t2: [0.95, 0.95, 0.95], t3: [0.95, 0.92, 0.85], macro: [0.95, 0.92, 0.55] },
  mapColors: [[104, 138, 66], [146, 124, 96], [132, 130, 124], [158, 150, 132]],
  wallColors: [0xe8e0d0, 0xd8cbb0, 0xc9d1d6, 0xe6d9c0, 0xbfae94, 0xd6c7a8],
  roofColors: [0x8a3a2e, 0x5a4c44, 0x6a6e70, 0x7b4a36, 0x4f5a66],
  grassColor: [0x587a30, 0x6e943a, 0x8cae50],
  trees: { types: ['pine', 'oak', 'birch'], weights: [0.5, 0.38, 0.12], scatter: 1 / 2600, bush: 1 / 1300, rock: 1 / 3200 },
  hq: [{ x: 0, z: -420, r: 45 }, { x: 0, z: 420, r: 45 }],
  flags: [
    { id: 'A', name: 'Farmstead', x: -260, z: -250, r: 22 },
    { id: 'B', name: 'Radio Hill', x: 250, z: -230, r: 20 },
    { id: 'C', name: 'Mill Bridge', x: -35, z: 8, r: 24 },
    { id: 'D', name: 'Lumber Mill', x: -280, z: 232, r: 22 },
    { id: 'E', name: 'Chapel', x: 240, z: 300, r: 22 },
  ],
  rivers: [{
    points: [[-500, -175], [-360, -122], [-240, -86], [-130, -40], [-40, 8], [50, 40], [150, 80], [250, 150], [340, 210], [500, 255]],
    width: 22, depth: 3.2, bankSlope: 0.32, fords: [{ x: -240, z: -86, r: 22, depth: 0.55 }],
  }],
  roads: [
    { points: [[0, -440], [-80, -330], [-260, -250]], width: 6 },
    { points: [[0, -440], [20, -250], [-20, -120], [-35, -40], [-35, 60], [-90, 150], [-280, 232]], width: 7 },
    { points: [[-260, -250], [-150, -180], [-20, -120]], width: 5 },
    { points: [[250, -230], [120, -330], [0, -440]], width: 6 },
    { points: [[250, -230], [265, -100], [270, 60], [270, 140], [270, 190], [240, 300]], width: 6 },
    { points: [[-35, 60], [80, 130], [150, 250], [240, 300]], width: 6 },
    { points: [[-280, 232], [-150, 380], [0, 440]], width: 6 },
    { points: [[240, 300], [120, 400], [0, 440]], width: 6 },
    { points: [[-260, -250], [-250, -140], [-240, -86], [-262, 60], [-280, 232]], width: 4 },
  ],
  height(x, z, n, n2) {
    let h = 9 + 6.5 * n.fbm(x / 320, z / 320, 4) + 2.6 * n2.fbm(x / 85, z / 85, 3);
    h += 26 * Math.exp(-((x - 250) ** 2 + (z + 230) ** 2) / (2 * 80 * 80));
    h += 10 * Math.exp(-((x + 300) ** 2 + (z - 300) ** 2) / (2 * 120 * 120));
    h += 8 * Math.exp(-((x - 380) ** 2 + (z - 30) ** 2) / (2 * 90 * 90));
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(400, 478, e) * (30 + 12 * n.fbm(x / 60, z / 60, 2));
    return Math.max(h, 2.4 + n2(x / 40, z / 40) * 0.3);
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.2, 0.38, slope) + smoothstep(32, 40, h) * 0.6;
    const gravel = (1 - smoothstep(9, 15, riverD)) * 1.2;
    const field = smoothstep(0.42, 0.6, n(x / 70 + 13, z / 70 - 7)) * (1 - smoothstep(25, 35, h)) * 0.75;
    const dirt = road * 1.4 + (pad ? 0.9 : 0) + field;
    const grass = Math.max(0.05, 1 - rock - gravel - dirt);
    return [grass, dirt, rock, gravel];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) {
    return clamp((w[0] / (w[0] + w[1] + w[2] + w[3])) * (1 - road) * (0.55 + 0.45 * n(x / 25, z / 25)) * 1.2, 0, 1);
  },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    // Bridges (N-S decks)
    L.bridges.push({ x: -35.5, z: 9.5, len: 44, w: 8 }, { x: 270.5, z: 163.5, len: 52, w: 7 });
    for (const b of L.bridges) L.fps.push({ minX: b.x - b.w / 2 - 1, maxX: b.x + b.w / 2 + 1, minZ: b.z - b.len / 2, maxZ: b.z + b.len / 2 });
    // A Farmstead
    const A = F[0];
    L.b('barn', A.x - 14, A.z - 8, 0, {}, true);
    L.b('house2', A.x + 15, A.z - 12, 1, {}, true);
    L.b('shed', A.x - 26, A.z + 12, 0); L.b('shed', A.x + 17, A.z + 13, 2);
    L.b('house', A.x + 6, A.z + 26, 0);
    L.p('waterTower', A.x + 2, A.z + 13, 0, {}, 2, 2);
    L.p('haystack', A.x - 3, A.z - 1, 0, {}, 1.3, 0.9); L.p('hay', A.x + 5, A.z + 4, 1, {}, 0.9, 0.7); L.p('hay', A.x - 7, A.z + 7, 0, {}, 0.7, 0.9);
    L.p('car', A.x + 6, A.z - 3, 1, {}, 2.2, 1);
    L.p('logs', A.x - 18, A.z + 4, 1, {}, 1.3, 2.6);
    L.line('fence', A.x - 60, A.z - 40, A.x - 30, A.z - 40); L.line('fence', A.x - 60, A.z - 40, A.x - 60, A.z + 20);
    L.line('fence', A.x + 30, A.z + 40, A.x + 70, A.z + 40); L.line('fence', A.x + 70, A.z + 40, A.x + 70, A.z - 10);
    L.line('stoneWall', A.x - 40, A.z + 30, A.x - 10, A.z + 30);
    // B Radio Hill
    const B = F[1];
    L.p('radioTower', B.x + 8, B.z + 6, 0, {}, 3, 3);
    L.b('bunker', B.x - 8, B.z - 8, 0, {}, true);
    L.b('house', B.x - 17, B.z + 13, 1, { cat: 'concrete', flat: true, color: 0xb9b6ab });
    L.p('sandbagRing', B.x + 2, B.z - 15, 0, {}, 2.5, 2); L.p('sandbagRing', B.x - 20, B.z - 2, 1, {}, 2, 2.5); L.p('sandbagRing', B.x + 17, B.z + 19, 2, {}, 2.5, 2);
    L.p('container', B.x + 17, B.z - 6, 0, {}, 1.3, 3.1); L.p('container', B.x + 22, B.z - 4, 0, {}, 1.3, 3.1);
    L.p('sandbags', B.x - 2, B.z + 18, 0, { n: 3 }, 1.6, 0.4); L.p('sandbags', B.x + 12, B.z - 22, 0, { n: 3 }, 1.6, 0.4);
    L.p('crateStack', B.x - 4, B.z + 5, 0, {}, 1.3, 0.7);
    // C Mill Bridge village
    const C = F[2];
    L.b('warehouse', C.x + 46, C.z - 22, 0, { cat: 'wood', w: 7, d: 4, H: 5 });
    const villageSpots = [[-62, -30, 0], [-12, -32, 1], [-68, -58, 1], [-10, -62, 0], [-48, -90, 0], [-90, -40, 1], [-70, 48, 2], [-5, 52, 3], [-60, 80, 0], [10, 85, 2], [30, 62, 1], [-100, 60, 0], [25, -60, 0], [-30, -66, 2]];
    for (const [dx, dz, r] of villageSpots) L.b(rng() < 0.35 ? 'house2' : 'house', C.x + dx, C.z + dz, r, { w: rng() < 0.5 ? 4 : 5, d: rng() < 0.5 ? 3 : 4 });
    L.scatter(C.x, C.z, 40, 110, 6, ['shed', 'house', 'ruin']);
    L.p('car', C.x - 31, C.z - 52, 0, {}, 1, 2.2); L.p('car', C.x - 41, C.z + 46, 0, {}, 1, 2.2);
    L.p('sandbags', C.x - 32, C.z - 20, 0, { n: 2 }, 1.1, 0.4); L.p('sandbags', C.x - 38, C.z + 38, 0, { n: 2 }, 1.1, 0.4);
    L.p('crateStack', C.x - 45, C.z - 18, 0, {}, 1.3, 0.7); L.p('barrels', C.x - 22, C.z + 30, 0, {}, 1, 0.4);
    // D Lumber Mill
    const D = F[3];
    L.b('warehouse', D.x - 6, D.z - 12, 0, { cat: 'wood', w: 8, d: 5, H: 5.5 }, true);
    L.b('house', D.x + 18, D.z + 8, 1); L.b('shed', D.x - 22, D.z + 13, 0); L.b('house2', D.x - 26, D.z + 34, 0); L.b('shed', D.x + 10, D.z + 26, 1);
    for (let i = 0; i < 5; i++) L.p('logs', D.x - 8 + i * 6.5, D.z + 6 + (i % 2) * 6, 1, {}, 1.3, 2.6);
    L.p('crateStack', D.x + 12, D.z - 6, 0, {}, 1.3, 0.7); L.p('car', D.x + 4, D.z - 26, 1, {}, 2.2, 1);
    L.p('sandbags', D.x - 18, D.z - 2, 1, { n: 2 }, 0.4, 1.1);
    // E Chapel
    const E = F[4];
    L.b('church', E.x - 2, E.z + 6, 0, {}, true);
    for (let gx = 0; gx < 4; gx++) for (let gz = 0; gz < 5; gz++) L.p('grave', E.x + 16 + gx * 3, E.z - 2 + gz * 3.2, 0, {}, 0.4, 0.2);
    L.line('stoneWall', E.x + 12, E.z - 6, E.x + 30, E.z - 6); L.line('stoneWall', E.x + 30, E.z - 6, E.x + 30, E.z + 16);
    L.b('house', E.x - 26, E.z - 12, 0); L.b('house2', E.x - 26, E.z + 22, 1); L.b('shed', E.x + 20, E.z - 18, 0); L.b('house', E.x + 6, E.z + 40, 2);
    L.p('sandbagRing', E.x - 4, E.z - 18, 0, {}, 2.5, 2); L.p('car', E.x - 12, E.z - 22, 0, {}, 1, 2.2);
    // farms & ruins across the map
    const farms = [[-100, -270], [130, -290], [380, -120], [-400, 80], [-170, 120], [90, 200], [380, 330], [-380, -200], [150, -60], [-200, 360], [60, -360], [-60, 330], [330, 40], [-330, -20]];
    for (const [x, z] of farms) {
      const t = rng();
      if (t < 0.2) L.b('ruin', x, z, Math.floor(rng() * 4));
      else if (t < 0.45) { L.b('barn', x, z, Math.floor(rng() * 4)); L.b('shed', x + 18, z + 6, 0); }
      else { L.b(rng() < 0.4 ? 'house2' : 'house', x, z, Math.floor(rng() * 4)); L.b('shed', x - 14, z + 9, 1); L.p('hay', x + 12, z - 10, 0, {}, 0.7, 0.9); }
      if (rng() < 0.5) L.line('fence', x - 30, z + 22, x + 20, z + 22);
    }
    for (const [x, z] of [[60, -170], [-120, -60], [200, 40], [-210, 320], [110, -210], [-150, 220]]) L.b('ruin', x, z, Math.floor(rng() * 4));
    for (let i = 0; i < 6; i++) { const x = (rng() - 0.5) * 700, z = (rng() - 0.5) * 700; L.p('sandbagRing', x, z, Math.floor(rng() * 4), {}, 2.5, 2.5); }
    L.forests = [[-400, -20, 90], [130, -20, 62], [-140, 300, 80], [390, 40, 70], [-390, -360, 70], [390, -390, 60], [390, 400, 60], [-110, -340, 50], [60, 330, 45], [-330, 140, 55], [330, -60, 40], [-200, -150, 35], [180, -150, 30], [-60, 180, 35]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 0.8 });
  },
};

// ---------------------------------------------------------------------------------------------
const coastX = (z, n) => 238 + 16 * n(z / 130, 3.3);
const portKessar = {
  id: 'kessar', name: 'Port Kessar',
  desc: 'A sun-baked harbor town. Dense alleys in the old town, a container depot, a ridge outpost with long sightlines and the docks on the sea.',
  size: 720, cell: 2.5, seed: 4242, waterLevel: 0, playHalf: 330, biome: 'arid', time: 'afternoon', flatRoofs: true,
  terrainTextures: ['sand', 'drygrass', 'rock', 'asphalt'],
  palette: { t0: [1.0, 0.9, 0.72], t1: [1.0, 0.92, 0.7], t2: [1.0, 0.92, 0.82], t3: [1.25, 1.25, 1.3], macro: [1.0, 0.85, 0.65] },
  mapColors: [[200, 182, 140], [168, 150, 104], [150, 136, 118], [96, 96, 98]],
  wallColors: [0xe3d3b0, 0xd9c49a, 0xefe6d2, 0xcbb38a, 0xe0c9a6, 0xf0dcc0, 0xc8d0d0, 0xe8c8a8],
  roofColors: [0xb5a68c],
  grassColor: [0xa89a5a, 0xb8a868, 0x8f8a4a],
  trees: { types: ['palm', 'acacia', 'shrub'], weights: [0.45, 0.35, 0.2], scatter: 1 / 4500, bush: 1 / 1800, rock: 1 / 1400 },
  hq: [{ x: -30, z: -316, r: 42 }, { x: -30, z: 316, r: 42 }],
  flags: [
    { id: 'A', name: 'Ridge Outpost', x: -225, z: -192, r: 20 },
    { id: 'B', name: 'Container Depot', x: 118, z: -172, r: 22 },
    { id: 'C', name: 'Old Town', x: -20, z: 0, r: 20 },
    { id: 'D', name: 'Pump Station', x: -212, z: 172, r: 22 },
    { id: 'E', name: 'Harbor', x: 182, z: 168, r: 22 },
  ],
  rivers: [],
  roads: [
    { points: [[-30, -340], [-25, -200], [-20, 0], [-25, 200], [-30, 340]], width: 10 },
    { points: [[-230, 0], [160, 6]], width: 9 },
    { points: [[-25, -200], [-225, -192]], width: 6 },
    { points: [[-20, -90], [118, -172]], width: 7 },
    { points: [[-20, 90], [-212, 172]], width: 7 },
    { points: [[-20, 60], [182, 168]], width: 7 },
    { points: [[118, -172], [200, -40], [195, 60], [182, 168]], width: 7 },
    { points: [[-110, -60], [70, -60]], width: 6 }, { points: [[-110, 60], [70, 60]], width: 6 },
    { points: [[-110, -30], [70, -30]], width: 5 }, { points: [[-110, 30], [70, 30]], width: 5 },
    { points: [[-110, -60], [-110, 60]], width: 5 }, { points: [[-80, -60], [-80, 60]], width: 5 },
    { points: [[-50, -60], [-50, 60]], width: 5 }, { points: [[10, -60], [10, 60]], width: 5 },
    { points: [[40, -60], [40, 60]], width: 5 }, { points: [[70, -60], [70, 60]], width: 5 },
  ],
  isWater(x, z) { return x > coastX(z, this._n || ((a) => 0)) - 6; },
  height(x, z, n, n2) {
    this._n = n;
    let h = 5 + 3 * n.fbm(x / 210, z / 210, 4) + 1.4 * n2.fbm(x / 55, z / 55, 3);
    h += 15 * Math.exp(-((x + 228) ** 2 + (z + 196) ** 2) / (2 * 50 * 50)) * (0.85 + 0.3 * n2(x / 18, z / 18));
    h += smoothstep(-200, -335, x) * (16 + 8 * n.fbm(x / 70, z / 70, 3));
    h += smoothstep(285, 355, Math.abs(z)) * (22 + 8 * n.fbm(x / 50, z / 50, 2));
    h += 6 * Math.exp(-((x + 120) ** 2 + (z - 250) ** 2) / (2 * 60 * 60));
    h = Math.max(h, 2.6);
    const cx = coastX(z, n);
    const s = smoothstep(cx - 28, cx + 26, x);
    h = lerp(h, -8, s);
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.18, 0.34, slope) * 1.3 + smoothstep(13, 19, h) * 0.5;
    const asphalt = road * 1.6;
    const dry = smoothstep(0.15, 0.5, n(x / 90 - 5, z / 90 + 3)) * 0.9 + (pad ? 0.25 : 0);
    const sand = Math.max(0.1, 1.1 - rock - asphalt - dry * 0.6) + (h < 1.2 ? 1 : 0);
    return [sand, dry, rock, asphalt];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) {
    const s = w[0] + w[1] + w[2] + w[3];
    return clamp((w[1] / s) * (1 - road) * 1.3 * (0.4 + 0.6 * n(x / 18, z / 18)), 0, 0.85);
  },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    // C Old Town: blocks between street lines, plaza at center
    const xs = [-110, -80, -50, -20, 10, 40, 70], zs = [-60, -30, 0, 30, 60];
    for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < zs.length - 1; j++) {
      const x0 = xs[i] + 3.5, x1 = xs[i + 1] - 3.5, z0 = zs[j] + 3.5, z1 = zs[j + 1] - 3.5;
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const nearPlaza = Math.hypot(cx - F[2].x, cz - F[2].z) < 22;
      if (nearPlaza) continue;
      if (rng() < 0.12) { L.p('car', cx, cz, Math.floor(rng() * 2), {}, 2.2, 2.2); L.p('crate', cx + 4, cz + 3, 0, {}, 0.7, 0.7); continue; }
      const quads = [[x0, z0], [cx + 0.5, z0], [x0, cz + 0.5], [cx + 0.5, cz + 0.5]];
      for (const [qx, qz] of quads) {
        if (rng() < 0.16) continue;
        const w = 2 + Math.floor(rng() * 2), d = 2 + Math.floor(rng() * 2);
        L.b('shop', qx + w + 0.6, qz + d + 0.6, Math.floor(rng() * 4) & 2, { w, d, gap: 1.4, roadGap: 0.4 });
      }
    }
    const C = F[2];
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + 0.3; L.p('stall', C.x + Math.cos(a) * 11, C.z + Math.sin(a) * 11, i & 1, {}, 1.7, 1.3); }
    L.p('car', C.x + 6, C.z - 16, 1, {}, 2.2, 1); L.p('jersey', C.x - 14, C.z + 6, 1, { n: 2 }, 0.4, 2.1); L.p('sandbags', C.x + 4, C.z + 14, 0, { n: 3 }, 1.6, 0.4);
    // A Ridge Outpost
    const A = F[0];
    L.flat(A.x, A.z, 22, 18, 10, undefined, true, 0.9);
    L.b('bunker', A.x - 6, A.z - 4, 0, {}, true);
    L.p('watchtower', A.x + 14, A.z - 12, 0, {}, 2, 2); L.p('watchtower', A.x - 16, A.z + 12, 2, {}, 2, 2);
    L.p('radioTower', A.x + 8, A.z + 10, 0, { h: 20 }, 3, 3);
    for (let i = -3; i <= 3; i++) { if (i === 0) continue; L.p('hesco', A.x + i * 3.6, A.z - 24, 0, { n: 3 }, 1.7, 0.6); L.p('hesco', A.x + i * 3.6, A.z + 24, 0, { n: 3 }, 1.7, 0.6); }
    for (let i = -2; i <= 2; i++) { if (i === 0) continue; L.p('hesco', A.x - 26, A.z + i * 3.6, 1, { n: 3 }, 0.6, 1.7); L.p('hesco', A.x + 26, A.z + i * 3.6, 1, { n: 3 }, 0.6, 1.7); }
    L.p('sandbagRing', A.x + 6, A.z - 14, 0, {}, 2.5, 2); L.p('container', A.x - 14, A.z - 10, 1, {}, 3.1, 1.3); L.p('crateStack', A.x + 2, A.z + 4, 0, {}, 1.3, 0.7);
    // B Container Depot
    const B = F[1];
    L.flat(B.x, B.z, 46, 34, 8, undefined, true);
    L.b('warehouse', B.x - 22, B.z - 18, 0, {}, true); L.b('warehouse', B.x + 26, B.z + 16, 1, { w: 8, d: 6 }, true);
    for (let i = 0; i < 6; i++) for (let j = 0; j < 2; j++) {
      if (rng() < 0.2) continue;
      L.p('container', B.x - 14 + i * 5.2, B.z + 6 + j * 13, 0, { stack: rng() < 0.45 }, 1.3, 3.1);
    }
    L.p('crane', B.x + 4, B.z - 30, 0, {}, 4.4, 1.9);
    L.p('jersey', B.x - 30, B.z + 14, 1, { n: 3 }, 0.4, 3.1); L.p('jersey', B.x + 2, B.z - 4, 0, { n: 2 }, 2.1, 0.4);
    L.p('crateStack', B.x + 6, B.z + 2, 0, {}, 1.3, 0.7); L.p('barrels', B.x - 8, B.z - 2, 0, {}, 1, 0.4);
    // D Pump Station
    const D = F[3];
    L.flat(D.x, D.z, 32, 28, 8, undefined, true);
    L.b('pumphouse', D.x - 8, D.z - 8, 0, {}, true); L.b('pumphouse', D.x + 14, D.z + 12, 1, {}, true);
    L.b('house', D.x - 20, D.z + 16, 0, { flat: true, w: 4, d: 3 });
    L.p('tank', D.x + 10, D.z - 12, 0, {}, 1.7, 1.7); L.p('tank', D.x + 16, D.z - 12, 0, {}, 1.7, 1.7); L.p('tank', D.x + 22, D.z - 12, 0, { color: 0xb8b0a0 }, 1.7, 1.7);
    L.p('pipe', D.x + 2, D.z - 2, 0, { len: 12 }, 6, 0.4); L.p('pipe', D.x - 10, D.z + 6, 1, { len: 8 }, 0.4, 4);
    L.p('barrels', D.x + 2, D.z + 6, 0, {}, 1, 0.4); L.p('sandbagRing', D.x - 2, D.z + 22, 2, {}, 2.5, 2);
    L.line('compoundWall', D.x - 32, D.z - 28, D.x - 8, D.z - 28); L.line('compoundWall', D.x + 8, D.z - 28, D.x + 32, D.z - 28);
    L.line('compoundWall', D.x - 32, D.z + 28, D.x - 6, D.z + 28); L.line('compoundWall', D.x + 10, D.z + 28, D.x + 32, D.z + 28);
    L.line('compoundWall', D.x - 32, D.z - 26, D.x - 32, D.z - 6); L.line('compoundWall', D.x - 32, D.z + 8, D.x - 32, D.z + 26);
    // E Harbor
    const E = F[4];
    const qx = coastX(E.z, L.noise || (() => 0));
    L.flat(E.x + 10, E.z, 46, 40, 6, 2.2, true);
    L.b('warehouse', E.x - 12, E.z - 22, 0, { w: 9, d: 5 }, true); L.b('warehouse', E.x - 16, E.z + 22, 0, { w: 8, d: 5 }, true);
    for (let i = 0; i < 4; i++) L.p('container', E.x + 6 + i * 5, E.z - 6, 0, { stack: rng() < 0.4 }, 1.3, 3.1);
    for (let i = 0; i < 3; i++) L.p('container', E.x + 8 + i * 5, E.z + 10, 0, {}, 1.3, 3.1);
    L.p('crateStack', E.x - 2, E.z + 2, 0, {}, 1.3, 0.7); L.p('crate', E.x + 2, E.z - 12, 0, {}, 0.7, 0.7); L.p('barrels', E.x - 4, E.z + 8, 0, {}, 1, 0.4);
    L.p('crane', E.x + 30, E.z + 28, 1, {}, 1.9, 4.4);
    L.piers = [{ z: E.z - 26 }, { z: E.z + 2 }, { z: E.z + 40 }];
    // walled farm compounds and ruins
    const comps = [[-120, -200], [40, -262], [-262, -40], [-150, 132], [60, 200], [-100, 262], [150, -60], [200, -262], [-240, 70], [100, 120]];
    for (const [x, z] of comps) {
      if (!L.b('house', x, z, Math.floor(rng() * 4), { flat: true, w: 4, d: 3, gap: 6 })) continue;
      L.line('compoundWall', x - 14, z - 12, x + 14, z - 12); L.line('compoundWall', x - 14, z + 12, x + 4, z + 12);
      L.line('compoundWall', x - 14, z - 10, x - 14, z + 10);
      L.p('car', x + 9, z + 18, 0, {}, 1, 2.2);
    }
    for (const [x, z] of [[-160, -100], [120, -110], [-180, 250], [80, 250], [-280, 120], [20, -150]]) L.b('ruin', x, z, Math.floor(rng() * 4));
    L.forests = [[-300, -100, 40], [-280, 260, 50], [120, 260, 40], [-140, 200, 30], [220, -120, 30], [-60, -240, 30], [200, 260, 25]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r });
    L.noTree.push({ x: -20, z: 0, r: 95 });
  },
};

// ---------------------------------------------------------------------------------------------
// Close-quarters maps
const ironworks = {
  id: 'ironworks', name: 'Ironworks',
  desc: 'A shut-down foundry under grey skies. Fight through the furnace hall, a rail yard of boxcars and container lanes, the smelter courtyard and the loading docks.',
  size: 440, cell: 2, seed: 9091, waterLevel: null, playHalf: 196, biome: 'industrial', time: 'overcast', flatRoofs: true, cqb: true,
  terrainTextures: ['gravel', 'dirt', 'rock', 'asphalt'],
  palette: { t0: [0.72, 0.7, 0.66], t1: [0.8, 0.7, 0.6], t2: [0.85, 0.85, 0.85], t3: [1.0, 1.0, 1.05], macro: [0.75, 0.72, 0.66] },
  mapColors: [[132, 128, 120], [118, 104, 90], [120, 118, 112], [88, 88, 92]],
  wallColors: [0xb8b4aa, 0xa9a49a, 0xc4bcae, 0x9aa0a4, 0xb0a894],
  roofColors: [0x6a6e70],
  grassColor: [0x6a7040, 0x7a8048, 0x8a9050],
  trees: { types: ['birch', 'oak', 'pine'], weights: [0.5, 0.3, 0.2], scatter: 1 / 9000, bush: 1 / 2500, rock: 1 / 3500 },
  hq: [{ x: 0, z: -174, r: 24 }, { x: 0, z: 174, r: 24 }],
  flags: [
    { id: 'A', name: 'Furnace Hall', x: -62, z: -78, r: 16 },
    { id: 'B', name: 'Rail Yard', x: 72, z: -52, r: 18 },
    { id: 'C', name: 'Smelter', x: -66, z: 66, r: 17 },
    { id: 'D', name: 'Loading Docks', x: 70, z: 82, r: 17 },
  ],
  rivers: [],
  roads: [
    { points: [[0, -200], [0, 200]], width: 9 },
    { points: [[-180, 0], [180, 0]], width: 8 },
    { points: [[-150, -130], [150, -130]], width: 6 }, { points: [[-150, 130], [150, 130]], width: 6 },
    { points: [[-125, -130], [-125, 130]], width: 6 }, { points: [[125, -130], [125, 130]], width: 6 },
  ],
  height(x, z, n, n2) {
    let h = 4 + 0.8 * n.fbm(x / 120, z / 120, 3);
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(170, 215, e) * (12 + 4 * n2.fbm(x / 40, z / 40, 2));
    return h;
  },
  splat(x, z, h, slope, road, riverD, n, pad) {
    const rock = smoothstep(0.2, 0.36, slope);
    const asphalt = road * 1.6 + (pad ? 0.7 : 0);
    const dirt = smoothstep(0.2, 0.6, n(x / 40 + 3, z / 40)) * 0.8;
    return [Math.max(0.2, 1 - rock - asphalt - dirt * 0.5), dirt, rock, asphalt];
  },
  grassDensity(x, z, h, slope, road, riverD, n, w) {
    return clamp((w[1] / (w[0] + w[1] + w[2] + w[3])) * (1 - road) * 0.7 * (0.3 + 0.7 * n(x / 12, z / 12)), 0, 0.6);
  },
  layout(L) {
    const F = this.flags, rng = L.rng;
    L.hq(0); L.hq(1);
    // A: furnace hall, a huge open-sided hall with furnaces inside
    const A = F[0];
    L.b('warehouse', A.x, A.z, 0, { w: 13, d: 8, H: 9, gap: 1 }, true);
    for (const [dx, dz] of [[-12, -4], [0, 4], [12, -4]]) L.p('tank', A.x + dx, A.z + dz, 0, { color: 0x6a5a4a }, 0, 0);
    L.p('pipe', A.x, A.z - 9, 0, { len: 18 }, 0, 0);
    L.p('crateStack', A.x - 18, A.z + 9, 0, {}, 0, 0); L.p('crateStack', A.x + 18, A.z + 9, 0, {}, 0, 0);
    L.p('chimney', A.x - 34, A.z - 6, 0, { h: 28 }, 1.7, 1.7); L.p('chimney', A.x - 34, A.z + 6, 0, { h: 24 }, 1.7, 1.7);
    L.b('house2', A.x + 36, A.z - 12, 1, { cat: 'concrete', flat: true, w: 4, d: 4, color: 0xb0aca2 });
    L.b('shed', A.x - 30, A.z + 24, 0, { cat: 'metal' });
    // B: rail yard, rows of boxcars and container lanes
    const B = F[1];
    L.p('rails', B.x - 14, B.z, 1, { len: 140 }); L.p('rails', B.x, B.z, 1, { len: 140 }); L.p('rails', B.x + 14, B.z, 1, { len: 140 });
    for (const lane of [-14, 0, 14]) for (let i = -2; i <= 2; i++) { if (rng() < 0.25) continue; L.p('traincar', B.x + lane + 0.5, B.z + i * 16, 0, {}, 1.5, 7.2); }
    for (let i = 0; i < 6; i++) L.p('container', B.x + 30 + (i % 2) * 6, B.z - 24 + Math.floor(i / 2) * 15, 0, { stack: rng() < 0.4 }, 1.3, 3.1);
    L.b('shop', B.x - 34, B.z - 20, 0, { cat: 'brick', w: 3, d: 3, floors: 1 });
    L.p('jersey', B.x - 24, B.z + 20, 1, { n: 3 }, 0.4, 3.1); L.p('sandbagRing', B.x + 22, B.z + 28, 2, {}, 2.5, 2);
    // C: smelter courtyard with tanks, pipes and pump houses
    const C = F[2];
    for (const [dx, dz] of [[-10, -10], [10, -10], [-10, 10], [10, 10]]) L.p('tank', C.x + dx, C.z + dz, 0, { color: 0xa8a49a }, 1.7, 1.7);
    L.p('pipe', C.x, C.z - 10, 0, { len: 16 }, 0, 0); L.p('pipe', C.x, C.z + 10, 0, { len: 16 }, 0, 0); L.p('pipe', C.x - 10, C.z, 1, { len: 16 }, 0, 0);
    L.b('pumphouse', C.x + 26, C.z - 4, 1, {}, true); L.b('pumphouse', C.x - 28, C.z + 4, 1, {});
    L.p('chimney', C.x + 2, C.z + 30, 0, { h: 30 }, 1.7, 1.7);
    L.p('crane', C.x - 8, C.z - 30, 0, {}, 4.4, 1.9);
    L.p('barrels', C.x + 4, C.z + 2, 0, {}, 1, 0.4); L.p('crateStack', C.x - 3, C.z - 3, 0, {}, 1.3, 0.7);
    // D: loading docks, a row of warehouses with crates and trucks
    const D = F[3];
    L.b('warehouse', D.x - 22, D.z - 8, 1, { w: 8, d: 5, H: 6 }, true); L.b('warehouse', D.x + 22, D.z - 8, 1, { w: 8, d: 5, H: 6 }, true);
    L.p('platform', D.x, D.z + 18, 0, { len: 40, w: 5 }, 20, 2.5);
    for (let i = 0; i < 4; i++) L.p('crateStack', D.x - 12 + i * 8, D.z + 4, 0, {}, 1.3, 0.7);
    L.p('car', D.x - 6, D.z - 6, 1, { color: 0x6a6a5a }, 2.2, 1); L.p('car', D.x + 7, D.z - 2, 0, { color: 0x8a4a2a }, 1, 2.2);
    for (let i = 0; i < 3; i++) L.p('container', D.x - 8 + i * 8, D.z + 34, 1, { stack: i === 1 }, 3.1, 1.3);
    // filler: offices, sheds, container stacks, walls
    const fill = [[-140, -60], [-140, 40], [140, -80], [140, 30], [-20, -100], [30, 100], [-30, 40], [30, -10], [-100, -150], [100, 150], [-100, 150], [100, -150], [40, -90], [-40, 110]];
    for (const [x, z] of fill) {
      const t = rng();
      if (t < 0.35) L.b('house2', x, z, Math.floor(rng() * 4), { cat: 'concrete', flat: true, w: 4, d: 3, color: 0xb4b0a6 });
      else if (t < 0.6) L.b('warehouse', x, z, Math.floor(rng() * 2), { w: 6, d: 4, H: 6 });
      else if (t < 0.8) { L.p('container', x, z, 0, { stack: true }, 1.3, 3.1); L.p('container', x + 4, z, 0, {}, 1.3, 3.1); L.p('container', x + 8, z + 2, 0, { stack: rng() < 0.5 }, 1.3, 3.1); }
      else L.b('ruin', x, z, Math.floor(rng() * 4), { cat: 'brick' });
    }
    for (let i = 0; i < 10; i++) { const x = (rng() - 0.5) * 300, z = (rng() - 0.5) * 300; L.p(rng() < 0.5 ? 'hesco' : 'jersey', x, z, Math.floor(rng() * 2), { n: 3 }, 2, 2); }
    L.line('compoundWall', -150, -40, -150, 40); L.line('compoundWall', 150, -40, 150, 40);
    // dense industrial filler so no lane is a shooting gallery
    L.scatter(0, 0, 25, 165, 26, ['warehouse', 'shed', 'house2', 'pumphouse', 'shop'], true, { w: 5, d: 4, cat: 'metal', flat: true, gap: 3 });
    for (let i = 0; i < 18; i++) {
      const a = rng() * Math.PI * 2, r = 30 + rng() * 140;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (L.roadDist(x, z) < 6) continue;
      const rot = rng() < 0.5 ? 0 : 1;
      L.p('container', x, z, rot, { stack: rng() < 0.35 }, rot ? 3.2 : 1.4, rot ? 1.4 : 3.2);
      if (rng() < 0.6) L.p('crateStack', x + (rot ? 0 : 3), z + (rot ? 3 : 0), 0, {}, 1.3, 0.7);
    }
    L.forests = [[-175, -170, 18], [175, 170, 18], [175, -100, 14], [-175, 100, 14]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.4 });
  },
};

const brennhof = {
  id: 'brennhof', name: 'Brennhof',
  desc: 'A tight old town split by a canal. Narrow streets and alleys, a market square, the train station, a brewery, the church and town hall. Every corner is a fight.',
  size: 400, cell: 2, seed: 7171, waterLevel: 0, playHalf: 178, biome: 'temperate', time: 'dusk', cqb: true,
  terrainTextures: ['grass', 'dirt', 'rock', 'gravel'],
  palette: { t0: [0.55, 0.75, 0.32], t1: [1.0, 0.86, 0.68], t2: [0.95, 0.95, 0.95], t3: [1.05, 1.02, 0.98], macro: [0.95, 0.92, 0.6] },
  mapColors: [[104, 136, 70], [146, 124, 96], [132, 130, 124], [150, 146, 138]],
  wallColors: [0xe8e0d0, 0xe0c8a8, 0xd8d0c0, 0xc8d4d0, 0xe8d8b8, 0xd8b8a0, 0xf0e8d8, 0xc0b8a8],
  roofColors: [0x8a3a2e, 0x7b4a36, 0x5a4c44, 0x6a3a30, 0x4f5a66],
  grassColor: [0x587a30, 0x6e943a, 0x8cae50],
  trees: { types: ['oak', 'birch', 'pine'], weights: [0.6, 0.3, 0.1], scatter: 1 / 6000, bush: 1 / 2200, rock: 1 / 6000 },
  hq: [{ x: 0, z: -158, r: 22 }, { x: 0, z: 158, r: 22 }],
  flags: [
    { id: 'A', name: 'Station', x: -78, z: -112, r: 16 },
    { id: 'B', name: 'Brewery', x: 76, z: -98, r: 15 },
    { id: 'C', name: 'Canal Bridge', x: 0.5, z: 5, r: 15 },
    { id: 'D', name: 'Church', x: -74, z: 102, r: 16 },
    { id: 'E', name: 'Town Hall', x: 76, z: 108, r: 15 },
  ],
  rivers: [{ points: [[-220, 5], [-80, 2], [0, 5], [80, 8], [220, 5]], width: 14, depth: 2.6, bankSlope: 0.9 }],
  roads: [
    { points: [[0, -190], [0, -8]], width: 8 }, { points: [[0, 18], [0, 190]], width: 8 },
    { points: [[-170, -60], [170, -60]], width: 7 }, { points: [[-170, 66], [170, 66]], width: 7 },
    { points: [[-60, -170], [-60, -8]], width: 6 }, { points: [[60, -170], [60, -8]], width: 6 },
    { points: [[-60, 18], [-60, 170]], width: 6 }, { points: [[60, 18], [60, 170]], width: 6 },
    { points: [[-120, -170], [-120, 170]], width: 5 }, { points: [[120, -170], [120, 170]], width: 5 },
    { points: [[-170, -125], [170, -125]], width: 5 }, { points: [[-170, 130], [170, 130]], width: 5 },
  ],
  height(x, z, n, n2) {
    let h = 3.2 + 0.6 * n.fbm(x / 140, z / 140, 3);
    const e = Math.max(Math.abs(x), Math.abs(z));
    h += smoothstep(160, 198, e) * (14 + 5 * n2.fbm(x / 40, z / 40, 2));
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
    L.bridges.push({ x: 0.5, z: 5.5, len: 26, w: 8 }, { x: -89.5, z: 2.5, len: 24, w: 6 }, { x: 90.5, z: 8.5, len: 24, w: 6 });
    for (const b of L.bridges) L.fps.push({ minX: b.x - b.w / 2 - 1, maxX: b.x + b.w / 2 + 1, minZ: b.z - b.len / 2, maxZ: b.z + b.len / 2 });
    // quay walls along the canal
    for (const side of [-1, 1]) for (let x = -165; x < 165; x += 12) { if (Math.abs(x) < 8 || Math.abs(x + 90) < 8 || Math.abs(x - 90) < 8) continue; L.p('stoneWall', x, 5 + side * 10, 0, { n: 3 }); }
    // flags
    const A = F[0], B = F[1], D = F[3], E = F[4];
    L.b('warehouse', A.x, A.z - 12, 0, { cat: 'brick', w: 12, d: 4, H: 6, color: 0xb87a5a }, true);
    L.p('platform', A.x, A.z + 2, 0, { len: 44, w: 5 }, 22, 2.5);
    L.p('rails', A.x, A.z + 9, 0, { len: 150 }); L.p('traincar', A.x - 14, A.z + 9, 1, {}, 7.2, 1.5); L.p('traincar', A.x + 16, A.z + 9, 1, {}, 7.2, 1.5);
    L.b('warehouse', B.x, B.z - 6, 1, { cat: 'brick', w: 8, d: 6, H: 7, color: 0xa86a4a }, true);
    for (const [dx, dz] of [[14, 8], [18, -2], [14, -12]]) L.p('tank', B.x + dx, B.z + dz, 0, { color: 0xb08a5a }, 1.7, 1.7);
    L.p('barrels', B.x - 12, B.z + 10, 0, {}, 1, 0.4); L.p('crateStack', B.x - 14, B.z - 2, 0, {}, 1.3, 0.7);
    L.b('church', D.x, D.z + 4, 0, {}, true);
    for (let gx = 0; gx < 3; gx++) for (let gz = 0; gz < 4; gz++) L.p('grave', D.x + 16 + gx * 3, D.z + gz * 3.2, 0, {}, 0.4, 0.2);
    L.b('house2', E.x, E.z - 6, 0, { cat: 'brick', w: 7, d: 5, color: 0xd8b898 }, true);
    L.p('fountain', E.x - 2, E.z + 12, 0, {}, 4, 4);
    L.p('fountain', -30, -40, 0, {}, 4, 4);
    // market square stalls north of the central bridge
    for (let i = 0; i < 5; i++) L.p('stall', -14 + i * 7, -30, 0, {}, 1.7, 1.3);
    L.p('sandbags', 0, -14, 0, { n: 3 }, 1.6, 0.4); L.p('sandbags', 0, 24, 0, { n: 3 }, 1.6, 0.4);
    L.p('car', 10, -22, 1, {}, 2.2, 1); L.p('car', -12, 30, 0, {}, 1, 2.2);
    // town blocks: houses packed around each street block
    const xs = [-170, -120, -60, 0, 60, 120, 170], zs = [-170, -125, -60, -8, 18, 66, 130, 170];
    for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < zs.length - 1; j++) {
      if (zs[j] === -8) continue; // canal band
      const x0 = xs[i] + 4, x1 = xs[i + 1] - 4, z0 = zs[j] + 4, z1 = zs[j + 1] - 4;
      if (x1 - x0 < 10 || z1 - z0 < 10) continue;
      const cols = Math.max(1, Math.floor((x1 - x0) / 13)), rows = Math.max(1, Math.floor((z1 - z0) / 13));
      for (let a = 0; a < cols; a++) for (let c = 0; c < rows; c++) {
        if (rng() < 0.12) continue;
        const cx = x0 + (a + 0.5) * (x1 - x0) / cols, cz = z0 + (c + 0.5) * (z1 - z0) / rows;
        const w = 3 + Math.floor(rng() * 2), d = 3 + Math.floor(rng() * 2);
        L.b(rng() < 0.55 ? 'house2' : 'house', cx, cz, Math.floor(rng() * 4) & 2, { w, d, gap: 1.6, roadGap: 0.6 });
      }
      if (rng() < 0.5) L.p(rng() < 0.5 ? 'crateStack' : 'barrels', (x0 + x1) / 2 + rng() * 4, (z0 + z1) / 2, 0, {}, 1.3, 0.7);
    }
    L.forests = [[-150, -150, 14], [150, 150, 14], [150, -150, 12], [-150, 150, 12], [-30, -40, 8]];
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
      if (Math.abs(i) > 8) { L.p('hesco', i, -80, 0, { n: 3 }); L.p('hesco', i, 80, 0, { n: 3 }); L.p('hesco', -80, i, 1, { n: 3 }); L.p('hesco', 80, i, 1, { n: 3 }); }
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
  size: 280, cell: 2, seed: 6262, waterLevel: null, playHalf: 122, biome: 'winter', time: 'snow', weather: 'snow', small: true,
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
  roads: [{ points: [[0, -130], [-20, -60], [-42, -40], [-20, -10], [6, 4], [30, 25], [44, 44], [20, 90], [0, 130]], width: 5 }],
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
    // cabins through the woods
    const cabins = [[-60, 10], [-30, 40], [30, -40], [60, -10], [-10, 60], [10, -60], [-70, -70], [70, 70], [-60, 60], [60, -60], [-25, -75], [25, 75]];
    for (const [x, z] of cabins) L.b(rng() < 0.4 ? 'house2' : 'house', x, z, Math.floor(rng() * 4), { cat: 'wood', w: 3, d: 3, gap: 3 });
    for (let i = 0; i < 8; i++) { const x = (rng() - 0.5) * 180, z = (rng() - 0.5) * 180; L.p(rng() < 0.5 ? 'logs' : 'crateStack', x, z, Math.floor(rng() * 2), {}, 2.6, 2.6); }
    L.forests = [[-80, 20, 30], [80, -20, 30], [-30, 80, 26], [30, -80, 26], [-85, -85, 22], [85, 85, 22], [60, 40, 14], [-60, -30, 14]];
    for (const f of F) L.noTree.push({ x: f.x, z: f.z, r: f.r * 1.3 });
    L.noTree.push({ x: 6, z: 4, r: 24 });
  },
};

export const MAPS = { greenhollow, kessar: portKessar, ironworks, brennhof, outpost, frostpine };
export { coastX };
