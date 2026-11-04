// Collision world: terrain heightfield + axis-aligned boxes in a uniform spatial grid.
// Provides raycasts (with penetration info) and character movement resolution.

const CELL = 4;

export class CollisionWorld {
  constructor(terrain) {
    this.terrain = terrain;
    this.half = terrain.half;
    this.dim = Math.ceil(terrain.size / CELL);
    this.cells = new Array(this.dim * this.dim);
    for (let i = 0; i < this.cells.length; i++) this.cells[i] = [];
    this.boxes = [];
    this.stamp = 1;
    this.softOccluders = []; // dynamic: {x,y,z,r,strength,until,grow}
    this.softGrid = null;
  }

  cellIndex(x, z) {
    const cx = Math.floor((x + this.half) / CELL), cz = Math.floor((z + this.half) / CELL);
    if (cx < 0 || cz < 0 || cx >= this.dim || cz >= this.dim) return -1;
    return cz * this.dim + cx;
  }

  addBox(b) {
    b.id = this.boxes.length;
    b.alive = true;
    b._stamp = 0;
    this.boxes.push(b);
    const x0 = Math.max(0, Math.floor((b.minX + this.half) / CELL)), x1 = Math.min(this.dim - 1, Math.floor((b.maxX + this.half) / CELL));
    const z0 = Math.max(0, Math.floor((b.minZ + this.half) / CELL)), z1 = Math.min(this.dim - 1, Math.floor((b.maxZ + this.half) / CELL));
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) this.cells[z * this.dim + x].push(b);
    return b;
  }

  removeBox(b) {
    if (!b.alive) return;
    b.alive = false;
    const x0 = Math.max(0, Math.floor((b.minX + this.half) / CELL)), x1 = Math.min(this.dim - 1, Math.floor((b.maxX + this.half) / CELL));
    const z0 = Math.max(0, Math.floor((b.minZ + this.half) / CELL)), z1 = Math.min(this.dim - 1, Math.floor((b.maxZ + this.half) / CELL));
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      const arr = this.cells[z * this.dim + x];
      const i = arr.indexOf(b);
      if (i >= 0) { arr[i] = arr[arr.length - 1]; arr.pop(); }
    }
  }

  // Calls fn(box) for each live box overlapping the xz rectangle (deduplicated).
  query(minX, minZ, maxX, maxZ, fn) {
    const st = ++this.stamp;
    const x0 = Math.max(0, Math.floor((minX + this.half) / CELL)), x1 = Math.min(this.dim - 1, Math.floor((maxX + this.half) / CELL));
    const z0 = Math.max(0, Math.floor((minZ + this.half) / CELL)), z1 = Math.min(this.dim - 1, Math.floor((maxZ + this.half) / CELL));
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      const arr = this.cells[z * this.dim + x];
      for (let i = 0; i < arr.length; i++) {
        const b = arr[i];
        if (b._stamp === st) continue;
        b._stamp = st;
        if (b.maxX < minX || b.minX > maxX || b.maxZ < minZ || b.minZ > maxZ) continue;
        if (fn(b) === false) return;
      }
    }
  }

  // Ray vs box slab test. Returns [tEnter, tExit, axis] or null.
  static rayBox(ox, oy, oz, idx, idy, idz, b, maxT) {
    let t1 = (b.minX - ox) * idx, t2 = (b.maxX - ox) * idx;
    let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2), axis = 0;
    t1 = (b.minY - oy) * idy; t2 = (b.maxY - oy) * idy;
    let a = Math.min(t1, t2), c = Math.max(t1, t2);
    if (a > tmin) { tmin = a; axis = 1; }
    if (c < tmax) tmax = c;
    t1 = (b.minZ - oz) * idz; t2 = (b.maxZ - oz) * idz;
    a = Math.min(t1, t2); c = Math.max(t1, t2);
    if (a > tmin) { tmin = a; axis = 2; }
    if (c < tmax) tmax = c;
    if (tmax < 0 || tmin > tmax || tmin > maxT) return null;
    return [tmin, tmax, axis];
  }

  // Raycast. dir must be normalized. opts.ignore(box) => bool, opts.terrain (default true)
  // Returns {t, x,y,z, nx,ny,nz, box, thickness} or null.
  raycast(ox, oy, oz, dx, dy, dz, maxDist, opts = null) {
    const idx = 1 / (dx || 1e-9), idy = 1 / (dy || 1e-9), idz = 1 / (dz || 1e-9);
    let best = maxDist, bestBox = null, bestAxis = 0, bestExit = 0;
    const st = ++this.stamp;
    const ignore = opts && opts.ignore;
    // 2D DDA over grid cells
    let cx = Math.floor((ox + this.half) / CELL), cz = Math.floor((oz + this.half) / CELL);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const nextX = ((cx + (stepX > 0 ? 1 : 0)) * CELL - this.half);
    const nextZ = ((cz + (stepZ > 0 ? 1 : 0)) * CELL - this.half);
    let tMaxX = Math.abs(dx) < 1e-9 ? Infinity : (nextX - ox) / dx;
    let tMaxZ = Math.abs(dz) < 1e-9 ? Infinity : (nextZ - oz) / dz;
    const tDX = Math.abs(dx) < 1e-9 ? Infinity : CELL / Math.abs(dx);
    const tDZ = Math.abs(dz) < 1e-9 ? Infinity : CELL / Math.abs(dz);
    let tCell = 0;
    for (let iter = 0; iter < 2000; iter++) {
      if (cx >= 0 && cz >= 0 && cx < this.dim && cz < this.dim) {
        const arr = this.cells[cz * this.dim + cx];
        for (let i = 0; i < arr.length; i++) {
          const b = arr[i];
          if (b._stamp === st) continue;
          b._stamp = st;
          if (ignore && ignore(b)) continue;
          const r = CollisionWorld.rayBox(ox, oy, oz, idx, idy, idz, b, best);
          if (r && r[0] >= 0 && r[0] < best) { best = r[0]; bestBox = b; bestAxis = r[2]; bestExit = r[1]; }
          else if (r && r[0] < 0 && r[1] > 0 && 0 < best && !(opts && opts.skipInside)) { best = 0; bestBox = b; bestAxis = r[2]; bestExit = r[1]; }
        }
      }
      tCell = Math.min(tMaxX, tMaxZ);
      if (tCell > best) break;
      if (tMaxX < tMaxZ) { tMaxX += tDX; cx += stepX; } else { tMaxZ += tDZ; cz += stepZ; }
      if ((cx < -1 && stepX < 0) || (cx > this.dim && stepX > 0) || (cz < -1 && stepZ < 0) || (cz > this.dim && stepZ > 0)) break;
    }
    // terrain
    let terrainT = Infinity;
    if (!opts || opts.terrain !== false) terrainT = this.terrain.raycast(ox, oy, oz, dx, dy, dz, best);
    if (terrainT < best) {
      const x = ox + dx * terrainT, y = oy + dy * terrainT, z = oz + dz * terrainT;
      const n = this.terrain.normalAt(x, z);
      return { t: terrainT, x, y, z, nx: n[0], ny: n[1], nz: n[2], box: null, thickness: 99 };
    }
    if (!bestBox) return null;
    const x = ox + dx * best, y = oy + dy * best, z = oz + dz * best;
    let nx = 0, ny = 0, nz = 0;
    if (bestAxis === 0) nx = dx > 0 ? -1 : 1; else if (bestAxis === 1) ny = dy > 0 ? -1 : 1; else nz = dz > 0 ? -1 : 1;
    return { t: best, x, y, z, nx, ny, nz, box: bestBox, thickness: bestExit - best };
  }

  // Line of sight test between two points (true if clear).
  los(ax, ay, az, bx, by, bz, opts) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (d < 0.01) return true;
    const h = this.raycast(ax, ay, az, dx / d, dy / d, dz / d, d - 0.05, opts);
    return !h;
  }

  // Static soft occluders (foliage) live in a coarse grid; dynamic ones (smoke) in a short list.
  addSoft(o) {
    if (!this.softGrid) { this.softDim = Math.ceil(this.terrain.size / 16); this.softGrid = new Array(this.softDim * this.softDim); for (let i = 0; i < this.softGrid.length; i++) this.softGrid[i] = []; }
    const x0 = Math.max(0, Math.floor((o.x - o.r + this.half) / 16)), x1 = Math.min(this.softDim - 1, Math.floor((o.x + o.r + this.half) / 16));
    const z0 = Math.max(0, Math.floor((o.z - o.r + this.half) / 16)), z1 = Math.min(this.softDim - 1, Math.floor((o.z + o.r + this.half) / 16));
    o._s = 0;
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) this.softGrid[z * this.softDim + x].push(o);
  }
  addDynamicSoft(o) { this.softOccluders.push(o); }

  static _softTest(o, ax, ay, az, dx, dy, dz, L2, now) {
    const wx = o.x - ax, wy = o.y - ay, wz = o.z - az;
    const t = (wx * dx + wy * dy + wz * dz) / L2;
    if (t < 0 || t > 1) return false;
    const px = ax + dx * t - o.x, py = ay + dy * t - o.y, pz = az + dz * t - o.z;
    const r = o.r * (o.grow ? o.grow(now) : 1);
    return px * px + py * py + pz * pz < r * r;
  }

  // Soft occlusion along a line (foliage + smoke). Returns visibility multiplier 0..1.
  softVisibility(ax, ay, az, bx, by, bz, now) {
    let vis = 1;
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const L2 = dx * dx + dy * dy + dz * dz;
    if (L2 < 1e-6) return 1;
    // dynamic (smoke)
    for (let i = this.softOccluders.length - 1; i >= 0; i--) {
      const o = this.softOccluders[i];
      if (o.until && o.until < now) { this.softOccluders.splice(i, 1); continue; }
      if (CollisionWorld._softTest(o, ax, ay, az, dx, dy, dz, L2, now)) { vis *= (1 - o.strength); if (vis < 0.02) return 0; }
    }
    if (!this.softGrid) return vis;
    // static grid DDA (16m cells); skip the first ~1.5m near the viewer (own cover)
    const st = ++this.stamp;
    const L = Math.sqrt(L2);
    const steps = Math.ceil(L / 8) + 1;
    let lastCell = -1;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = ax + dx * t, z = az + dz * t;
      const cx = Math.floor((x + this.half) / 16), cz = Math.floor((z + this.half) / 16);
      if (cx < 0 || cz < 0 || cx >= this.softDim || cz >= this.softDim) continue;
      const ci = cz * this.softDim + cx;
      if (ci === lastCell) continue;
      lastCell = ci;
      const arr = this.softGrid[ci];
      for (let i = 0; i < arr.length; i++) {
        const o = arr[i];
        if (o._s === st) continue;
        o._s = st;
        if (CollisionWorld._softTest(o, ax, ay, az, dx, dy, dz, L2, now)) {
          // ignore foliage that contains the target/viewer itself only partially
          vis *= (1 - o.strength);
          if (vis < 0.02) return 0;
        }
      }
    }
    return vis;
  }

  // Ground height under (x,z) at or below `fromY` considering walkable box tops.
  groundAt(x, z, fromY, radius = 0.25) {
    let g = this.terrain.heightAt(x, z);
    this.query(x - radius, z - radius, x + radius, z + radius, (b) => {
      if (b.maxY <= fromY + 0.05 && b.maxY > g && !b.noStand) g = b.maxY;
    });
    return g;
  }

  // Character movement: body is an AABB of half-size r and height h, feet at pos.
  // Mutates pos and vel. Returns state {grounded, hitWall, stepped, ceiling}.
  move(pos, vel, dt, r, h, stepH, state) {
    state.hitWall = false; state.ceiling = false; state.stepped = false;
    const wasGrounded = state.grounded;
    // horizontal: x then z
    for (let axis = 0; axis < 2; axis++) {
      const d = (axis === 0 ? vel.x : vel.z) * dt;
      if (d === 0) continue;
      if (axis === 0) pos.x += d; else pos.z += d;
      this._resolveHorizontal(pos, r, h, axis, d, stepH, wasGrounded, state);
    }
    // vertical
    pos.y += vel.y * dt;
    state.grounded = false;
    const terrH = this.terrain.heightAt(pos.x, pos.z);
    let ground = terrH;
    let ceil = Infinity;
    this.query(pos.x - r, pos.z - r, pos.x + r, pos.z + r, (b) => {
      if (b.noCollide) return;
      if (pos.x + r <= b.minX || pos.x - r >= b.maxX || pos.z + r <= b.minZ || pos.z - r >= b.maxZ) return;
      // box top below feet+step -> candidate ground
      if (b.maxY <= pos.y + 0.35 + (vel.y < 0 ? -vel.y * dt : 0)) { if (b.maxY > ground) ground = b.maxY; }
      else if (b.minY >= pos.y + h * 0.5) { if (b.minY < ceil) ceil = b.minY; }
    });
    if (pos.y + h > ceil && vel.y > 0) { pos.y = ceil - h; vel.y = 0; state.ceiling = true; }
    if (pos.y <= ground + 0.001) {
      pos.y = ground; if (vel.y < 0) vel.y = 0; state.grounded = true;
    } else if (wasGrounded && vel.y <= 0 && pos.y - ground < stepH * 0.9) {
      // stick to ground when walking down slopes/steps
      pos.y = ground; vel.y = 0; state.grounded = true;
    }
    state.groundY = ground;
    state.onTerrain = ground === terrH;
    // world bounds
    const lim = this.half - 2;
    if (pos.x < -lim) pos.x = -lim; if (pos.x > lim) pos.x = lim;
    if (pos.z < -lim) pos.z = -lim; if (pos.z > lim) pos.z = lim;
    return state;
  }

  _resolveHorizontal(pos, r, h, axis, d, stepH, grounded, state) {
    let iter = 0;
    let blocked = true;
    while (blocked && iter++ < 4) {
      blocked = false;
      let hit = null;
      this.query(pos.x - r, pos.z - r, pos.x + r, pos.z + r, (b) => {
        if (b.noCollide) return;
        if (pos.x + r <= b.minX || pos.x - r >= b.maxX || pos.z + r <= b.minZ || pos.z - r >= b.maxZ) return;
        if (b.maxY <= pos.y + 0.02 || b.minY >= pos.y + h) return;
        hit = b; return false;
      });
      if (!hit) break;
      // try step up
      if (grounded && hit.maxY - pos.y <= stepH) {
        const ny = hit.maxY;
        if (!this.overlapsAny(pos.x, ny + 0.01, pos.z, r, h)) { pos.y = ny; state.stepped = true; blocked = true; continue; }
      }
      state.hitWall = true;
      if (axis === 0) pos.x = d > 0 ? hit.minX - r - 0.001 : hit.maxX + r + 0.001;
      else pos.z = d > 0 ? hit.minZ - r - 0.001 : hit.maxZ + r + 0.001;
      blocked = true;
    }
  }

  overlapsAny(x, y, z, r, h) {
    let found = false;
    this.query(x - r, z - r, x + r, z + r, (b) => {
      if (b.noCollide) return;
      if (x + r <= b.minX || x - r >= b.maxX || z + r <= b.minZ || z - r >= b.maxZ) return;
      if (b.maxY <= y || b.minY >= y + h) return;
      found = true; return false;
    });
    return found;
  }
}
