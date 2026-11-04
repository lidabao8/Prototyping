// 1m navigation grid with A*, cover values and incremental updates when structures are destroyed.
import { MinHeap, clamp } from '../core/math.js';

const BLOCKED = 1, VAULT = 2, WATER = 4, STEEP = 8, DEEP = 16;
const SQ2 = Math.SQRT2;

export class NavGrid {
  constructor(world) {
    this.world = world;
    this.terrain = world.terrain;
    this.coll = world.collision;
    this.size = Math.floor(this.terrain.size);
    this.half = this.terrain.half;
    this.dim = this.size; // 1m cells
    const N = this.dim * this.dim;
    this.flags = new Uint8Array(N);
    this.floor = new Float32Array(N);
    this.cover = new Uint8Array(N);
    this.g = new Float32Array(N);
    this.parent = new Int32Array(N);
    this.stamp = new Uint32Array(N);
    this.closed = new Uint32Array(N);
    this.curStamp = 1;
    this.heap = new MinHeap(4096);
    this.dirty = [];
    this.build();
  }

  cellOf(x, z) {
    const i = Math.floor(x + this.half), j = Math.floor(z + this.half);
    if (i < 0 || j < 0 || i >= this.dim || j >= this.dim) return -1;
    return j * this.dim + i;
  }
  cx(c) { return (c % this.dim) - this.half + 0.5; }
  cz(c) { return Math.floor(c / this.dim) - this.half + 0.5; }

  build() {
    const { dim } = this;
    for (let j = 0; j < dim; j++) for (let i = 0; i < dim; i++) this.evalCell(j * dim + i);
    this.computeCover(0, 0, dim - 1, dim - 1);
  }

  evalCell(c) {
    const x = this.cx(c), z = this.cz(c);
    const t = this.terrain;
    const th = t.heightAt(x, z);
    let floor = th;
    let fl = 0;
    const r = 0.2;
    // nav floors (bridges, slabs)
    this.coll.query(x - 0.05, z - 0.05, x + 0.05, z + 0.05, (b) => {
      if (b.navFloor && b.maxY > floor && b.maxY < th + 12 && x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) floor = b.maxY;
    });
    this.coll.query(x - r, z - r, x + r, z + r, (b) => {
      if (b.noCollide || b.navFloor) return;
      if (x + r <= b.minX || x - r >= b.maxX || z + r <= b.minZ || z - r >= b.maxZ) return;
      if (b.maxY <= floor + 0.45 || b.minY >= floor + 1.75) return;
      if (b.vault && b.maxY <= floor + 1.25) fl |= VAULT; else fl |= BLOCKED;
    });
    if (floor === th) {
      const n = t.normalAt(x, z);
      if (n[1] < 0.72) fl |= STEEP;
      if (t.waterLevel !== null && th < t.waterLevel - 0.4) { fl |= WATER; if (th < t.waterLevel - 1.3) fl |= DEEP; }
    }
    this.flags[c] = fl;
    this.floor[c] = floor;
  }

  computeCover(i0, j0, i1, j1) {
    const { dim } = this;
    const R = 2;
    for (let j = Math.max(0, j0); j <= Math.min(dim - 1, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(dim - 1, i1); i++) {
      const c = j * dim + i;
      if (this.flags[c] & BLOCKED) { this.cover[c] = 0; continue; }
      let n = 0;
      for (let dj = -R; dj <= R; dj++) for (let di = -R; di <= R; di++) {
        const ii = i + di, jj = j + dj;
        if (ii < 0 || jj < 0 || ii >= dim || jj >= dim) continue;
        if (this.flags[jj * dim + ii] & (BLOCKED | VAULT)) n++;
      }
      this.cover[c] = Math.min(255, n * 20);
    }
  }

  markDirty(box) { this.dirty.push(box); }

  processDirty() {
    if (!this.dirty.length) return;
    const list = this.dirty; this.dirty = [];
    for (const b of list) {
      const i0 = Math.floor(b.minX + this.half) - 1, i1 = Math.floor(b.maxX + this.half) + 1;
      const j0 = Math.floor(b.minZ + this.half) - 1, j1 = Math.floor(b.maxZ + this.half) + 1;
      for (let j = Math.max(0, j0); j <= Math.min(this.dim - 1, j1); j++) for (let i = Math.max(0, i0); i <= Math.min(this.dim - 1, i1); i++) this.evalCell(j * this.dim + i);
      this.computeCover(i0 - 2, j0 - 2, i1 + 2, j1 + 2);
    }
  }

  walkable(c) { return c >= 0 && !(this.flags[c] & (BLOCKED | STEEP)); }
  isBlocked(c) { return c < 0 || (this.flags[c] & BLOCKED) !== 0; }
  isVault(c) { return c >= 0 && (this.flags[c] & VAULT) !== 0; }
  isWater(c) { return c >= 0 && (this.flags[c] & WATER) !== 0; }

  cost(c, opts) {
    const f = this.flags[c];
    let k = 1;
    if (f & VAULT) k += 4;
    if (f & WATER) k += (f & DEEP) ? 14 : 4;
    if (opts && opts.coverBias) k += (1 - this.cover[c] / 255) * opts.coverBias;
    if (opts && opts.avoid) {
      const x = this.cx(c), z = this.cz(c);
      for (const a of opts.avoid) { const dx = x - a.x, dz = z - a.z; const d2 = dx * dx + dz * dz; if (d2 < a.r * a.r) k += a.w * (1 - d2 / (a.r * a.r)); }
    }
    return k;
  }

  nearestWalkable(x, z, maxR = 6) {
    let c = this.cellOf(x, z);
    if (this.walkable(c)) return c;
    const i0 = Math.floor(x + this.half), j0 = Math.floor(z + this.half);
    for (let r = 1; r <= maxR; r++) {
      for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
        if (Math.abs(di) !== r && Math.abs(dj) !== r) continue;
        const i = i0 + di, j = j0 + dj;
        if (i < 0 || j < 0 || i >= this.dim || j >= this.dim) continue;
        const cc = j * this.dim + i;
        if (this.walkable(cc)) return cc;
      }
    }
    return -1;
  }

  // A* from world point to world point. Returns array of [x,z] waypoints (smoothed) or null.
  findPath(sx, sz, tx, tz, opts = {}) {
    const start = this.nearestWalkable(sx, sz, 4), goal = this.nearestWalkable(tx, tz, 8);
    if (start < 0 || goal < 0) return null;
    if (start === goal) return [[tx, tz]];
    const { dim } = this;
    const maxNodes = opts.maxNodes || 40000;
    const w = opts.weight || 1.35;
    const st = ++this.curStamp;
    const heap = this.heap; heap.clear();
    const gx = goal % dim, gz = Math.floor(goal / dim);
    const h = (c) => { const dx = Math.abs((c % dim) - gx), dz = Math.abs(Math.floor(c / dim) - gz); return (dx + dz + (SQ2 - 2) * Math.min(dx, dz)) * w; };
    this.g[start] = 0; this.stamp[start] = st; this.parent[start] = -1;
    heap.push(start, h(start));
    let best = start, bestH = h(start), expanded = 0;
    let found = false;
    while (heap.size) {
      const c = heap.pop();
      if (this.closed[c] === st) continue;
      this.closed[c] = st;
      if (c === goal) { found = true; break; }
      if (++expanded > maxNodes) break;
      const ci = c % dim, cj = (c - ci) / dim;
      const gc = this.g[c];
      for (let k = 0; k < 8; k++) {
        const di = k < 4 ? [1, -1, 0, 0][k] : [1, 1, -1, -1][k - 4];
        const dj = k < 4 ? [0, 0, 1, -1][k] : [1, -1, 1, -1][k - 4];
        const ni = ci + di, nj = cj + dj;
        if (ni < 0 || nj < 0 || ni >= dim || nj >= dim) continue;
        const nc = nj * dim + ni;
        if (!this.walkable(nc) || this.closed[nc] === st) continue;
        // floor step check
        if (Math.abs(this.floor[nc] - this.floor[c]) > 0.9 && !(this.flags[nc] & VAULT)) continue;
        if (k >= 4) { // no corner cutting
          if (!this.walkable(cj * dim + ni) || !this.walkable(nj * dim + ci)) continue;
        }
        const ng = gc + (k < 4 ? 1 : SQ2) * this.cost(nc, opts);
        if (this.stamp[nc] !== st || ng < this.g[nc]) {
          this.stamp[nc] = st; this.g[nc] = ng; this.parent[nc] = c;
          const hh = h(nc);
          heap.push(nc, ng + hh);
          if (hh < bestH) { bestH = hh; best = nc; }
        }
      }
    }
    const end = found ? goal : best;
    if (end === start) return null;
    const cells = [];
    let c = end;
    let guard = 0;
    while (c !== -1 && guard++ < 100000) { cells.push(c); if (c === start) break; c = this.parent[c]; }
    cells.reverse();
    // string-pull smoothing
    const pts = [];
    let anchor = 0;
    pts.push([this.cx(cells[0]), this.cz(cells[0])]);
    let i = 1;
    while (i < cells.length) {
      let far = i;
      for (let k = i; k < Math.min(cells.length, anchor + 60); k++) {
        if (this.lineWalkable(cells[anchor], cells[k])) far = k; else break;
      }
      pts.push([this.cx(cells[far]), this.cz(cells[far])]);
      anchor = far; i = far + 1;
    }
    if (found) pts[pts.length - 1] = [tx, tz];
    pts.partial = !found;
    return pts;
  }

  // Bresenham-ish supercover line test on grid (also refuses vault/water cells for smoothing).
  lineWalkable(a, b) {
    const { dim } = this;
    let x0 = a % dim, y0 = Math.floor(a / dim);
    const x1 = b % dim, y1 = Math.floor(b / dim);
    const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;
    const f0 = this.floor[a];
    for (let n = 0; n < 400; n++) {
      const c = y0 * dim + x0;
      if (!this.walkable(c) || (this.flags[c] & (VAULT | WATER))) return false;
      if (Math.abs(this.floor[c] - f0) > 1.2) return false;
      if (x0 === x1 && y0 === y1) return true;
      const e2 = 2 * err;
      if (e2 > -dy && e2 < dx) {
        // diagonal step: check both neighbors to avoid squeezing corners
        if (!this.walkable(y0 * dim + x0 + sx) || !this.walkable((y0 + sy) * dim + x0)) return false;
      }
      if (e2 > -dy) { err -= dy; x0 += sx; }
      if (e2 < dx) { err += dx; y0 += sy; }
    }
    return false;
  }

  // Find cover spots near (x,z) that hide from threat point (tx,ty,tz) when crouched.
  findCover(x, z, threat, radius, opts = {}) {
    const results = [];
    const R = Math.ceil(radius);
    const i0 = Math.floor(x + this.half), j0 = Math.floor(z + this.half);
    const { dim } = this;
    const samples = [];
    for (let dj = -R; dj <= R; dj += 1) for (let di = -R; di <= R; di += 1) {
      const d2 = di * di + dj * dj;
      if (d2 > R * R) continue;
      const i = i0 + di, j = j0 + dj;
      if (i < 1 || j < 1 || i >= dim - 1 || j >= dim - 1) continue;
      const c = j * dim + i;
      if (!this.walkable(c) || this.cover[c] < 30 || (this.flags[c] & WATER)) continue;
      samples.push([c, d2]);
    }
    // sample subset to bound raycasts
    samples.sort((a, b) => b[0] % 7 - a[0] % 7 + (a[1] - b[1]) * 0.02);
    const maxTests = opts.maxTests || 28;
    let tests = 0;
    for (const [c, d2] of samples) {
      if (tests++ > maxTests) break;
      const cx = this.cx(c), cz = this.cz(c), fy = this.floor[c];
      // direction toward threat should be blocked low and open high (peekable)
      const lowBlocked = !this.coll.los(cx, fy + 0.95, cz, threat.x, threat.y, threat.z);
      if (!lowBlocked) continue;
      const highOpen = this.coll.los(cx, fy + 1.6, cz, threat.x, threat.y, threat.z);
      const tdx = threat.x - cx, tdz = threat.z - cz;
      const td = Math.hypot(tdx, tdz);
      if (opts.minThreatDist && td < opts.minThreatDist) continue;
      // corner cover: can we lean out to one side and see the threat?
      let lean = null;
      if (!highOpen && td > 0.1) {
        const px = -tdz / td, pz = tdx / td;
        for (const sg of [1, -1]) {
          const lx = cx + px * sg * 0.6, lz = cz + pz * sg * 0.6;
          if (this.coll.los(lx, fy + 1.5, lz, threat.x, threat.y, threat.z) && this.coll.los(cx, fy + 1.5, cz, lx, fy + 1.5, lz)) { lean = { x: px * sg, z: pz * sg }; break; }
        }
      }
      let score = (highOpen ? 3 : lean ? 2.7 : 1) - Math.sqrt(d2) * 0.12 + this.cover[c] / 255;
      if (opts.prefer) score -= Math.hypot(cx - opts.prefer.x, cz - opts.prefer.z) * 0.04;
      if (opts.occupied && opts.occupied(cx, cz)) score -= 4;
      results.push({ x: cx, z: cz, y: fy, peek: highOpen, lean, score });
    }
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  randomWalkableNear(x, z, r, rng = Math.random) {
    for (let k = 0; k < 20; k++) {
      const a = rng() * Math.PI * 2, d = Math.sqrt(rng()) * r;
      const c = this.cellOf(x + Math.cos(a) * d, z + Math.sin(a) * d);
      if (this.walkable(c) && !(this.flags[c] & WATER)) return [this.cx(c), this.cz(c), this.floor[c]];
    }
    const c = this.nearestWalkable(x, z, 10);
    if (c >= 0) return [this.cx(c), this.cz(c), this.floor[c]];
    return [x, z, this.terrain.heightAt(x, z)];
  }
}
NavGrid.BLOCKED = BLOCKED; NavGrid.VAULT = VAULT; NavGrid.WATER = WATER;
