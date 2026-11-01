"use strict";
// =====================================================================
//  HARD ENTRY — level: tiles, doors, rooms, collision, LOS, pathing
// =====================================================================
const T = { FLOOR: 0, WALL: 1, DOOR: 2, WINDOW: 3, LOW: 4, HIGH: 5 };
const FLOOR_CHARS = '.,_=:"';

class Level {
  constructor(mission) {
    const rows = mission.map;
    this.mission = mission;
    this.w = rows[0].length; this.h = rows.length;
    const N = this.w * this.h;
    this.N = N;
    this.t = new Uint8Array(N);
    this.style = new Array(N).fill(null);
    this.deco = new Array(N).fill(null);
    this.doorAt = new Int16Array(N).fill(-1);
    this.room = new Int16Array(N).fill(-1);
    this.explored = new Uint8Array(N);
    this.visStamp = new Uint32Array(N);
    this.doors = [];
    this.spawns = { P: [], x: [], c: [], h: [], e: [], O: [] };
    // pathfinding scratch
    this._g = new Float32Array(N); this._came = new Int32Array(N); this._stamp = new Uint32Array(N); this._closed = new Uint32Array(N); this._gen = 0;

    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) {
      const c = rows[y][x], i = y * this.w + x;
      if (c === '#') this.t[i] = T.WALL;
      else if (c === 'W') this.t[i] = T.WINDOW;
      else if (c === 'D') this.t[i] = T.DOOR;
      else if (c === 'T' || c === 'k') { this.t[i] = T.LOW; this.deco[i] = c; }
      else if (c === 'B') { this.t[i] = T.HIGH; this.deco[i] = c; }
      else if (FLOOR_CHARS.includes(c)) { this.t[i] = T.FLOOR; this.style[i] = c; }
      else { this.t[i] = T.FLOOR; if (this.spawns[c]) this.spawns[c].push({ tx: x, ty: y }); }
    }
    // resolve floor style under markers / furniture from neighbours
    for (let pass = 0; pass < 3; pass++) {
      for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) {
        const i = y * this.w + x;
        if (this.style[i] || this.t[i] === T.WALL || this.t[i] === T.WINDOW) continue;
        const cnt = {};
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
          const s = this.inb(x + dx, y + dy) ? this.style[(y + dy) * this.w + x + dx] : null;
          if (s && this.t[(y + dy) * this.w + x + dx] !== T.DOOR) cnt[s] = (cnt[s] || 0) + 1;
        }
        let best = null, bc = 0; for (const k in cnt) if (cnt[k] > bc) { bc = cnt[k]; best = k; }
        if (best) this.style[i] = best;
      }
    }
    for (let i = 0; i < N; i++) if (!this.style[i]) this.style[i] = '.';

    // doors
    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) {
      const i = y * this.w + x;
      if (this.t[i] !== T.DOOR) continue;
      const walk = (tx, ty) => { const tt = this.tileAt(tx, ty); return tt === T.FLOOR; };
      const orient = (walk(x, y - 1) && walk(x, y + 1)) ? 'h' : 'v';
      const d = {
        id: this.doors.length, tx: x, ty: y, x: (x + 0.5) * TS, y: (y + 0.5) * TS, orient,
        state: 'closed', locked: false, lockKnown: false, trap: null, trapSide: 0, trapKnown: false,
        wedged: false, c2: null, hp: 120, swing: 0, openSide: 1, hinge: Math.random() < 0.5 ? -1 : 1, partner: null, rooms: [-1, -1],
        busy: null,
      };
      this.doorAt[i] = d.id; this.doors.push(d);
    }
    for (const d of this.doors) {
      const [px, py] = d.orient === 'h' ? [d.tx + 1, d.ty] : [d.tx, d.ty + 1];
      const o = this.doorAtTile(px, py);
      if (o && o.orient === d.orient) { d.partner = o; o.partner = d; d.hinge = -1; o.hinge = 1; }
    }
    this.buildRooms();
    this.segDirty = true;
    this.buildSegments();
  }

  // ---------- basics ----------
  inb(tx, ty) { return tx >= 0 && ty >= 0 && tx < this.w && ty < this.h; }
  idx(tx, ty) { return ty * this.w + tx; }
  tileAt(tx, ty) { return this.inb(tx, ty) ? this.t[ty * this.w + tx] : T.WALL; }
  doorAtTile(tx, ty) { if (!this.inb(tx, ty)) return null; const id = this.doorAt[ty * this.w + tx]; return id >= 0 ? this.doors[id] : null; }
  doorNear(x, y, r) {
    let best = null, bd = r;
    for (const d of this.doors) { const dd = dist(x, y, d.x, d.y); if (dd < bd) { bd = dd; best = d; } }
    return best;
  }
  solid(tx, ty) {
    const t = this.tileAt(tx, ty);
    if (t === T.FLOOR) return false;
    if (t === T.DOOR) return this.doors[this.doorAt[ty * this.w + tx]].state === 'closed';
    return true;
  }
  opaque(tx, ty) {
    const t = this.tileAt(tx, ty);
    if (t === T.WALL || t === T.HIGH) return true;
    if (t === T.DOOR) return this.doors[this.doorAt[ty * this.w + tx]].state === 'closed';
    return false;
  }
  walkableTile(tx, ty) { return this.tileAt(tx, ty) === T.FLOOR; }
  roomAt(x, y) {
    const tx = Math.floor(x / TS), ty = Math.floor(y / TS);
    if (!this.inb(tx, ty)) return -1;
    const r = this.room[ty * this.w + tx];
    if (r >= 0) return r;
    const d = this.doorAtTile(tx, ty);
    return d ? d.rooms[0] : -1;
  }
  isOutdoor(room) { return room >= 0 && this.roomOutdoor[room]; }

  // ---------- doors ----------
  doorNormal(d) { return d.orient === 'h' ? [0, 1] : [1, 0]; }
  doorTangent(d) { return d.orient === 'h' ? [1, 0] : [0, 1]; }
  sideOf(d, x, y) { return d.orient === 'h' ? (y < d.y ? -1 : 1) : (x < d.x ? -1 : 1); }
  roomOnSide(d, s) { return d.rooms[s < 0 ? 0 : 1]; }
  doorGroup(d) { return d.partner ? [d, d.partner] : [d]; }
  markDirty() { this.segDirty = true; }

  buildRooms() {
    let id = 0; this.roomTiles = []; this.roomOutdoor = [];
    const inRoomType = t => t === T.FLOOR || t === T.LOW || t === T.HIGH;
    for (let i = 0; i < this.N; i++) {
      if (this.room[i] >= 0 || !inRoomType(this.t[i])) continue;
      const tiles = []; const st = [i]; this.room[i] = id; let outdoor = false;
      while (st.length) {
        const k = st.pop(); tiles.push(k);
        if (this.style[k] === ':' || this.style[k] === '"' ) outdoor = true;
        const x = k % this.w, y = (k / this.w) | 0;
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, ny = y + dy; if (!this.inb(nx, ny)) continue;
          const n = ny * this.w + nx;
          if (this.room[n] < 0 && inRoomType(this.t[n])) { this.room[n] = id; st.push(n); }
        }
      }
      // the outer lot sometimes uses '=' sidewalks: anything touching the map border counts as outdoors
      for (const k of tiles) { const x = k % this.w, y = (k / this.w) | 0; if (x <= 1 || y <= 1 || x >= this.w - 2 || y >= this.h - 2) { outdoor = true; break; } }
      this.roomTiles.push(tiles); this.roomOutdoor.push(outdoor); id++;
    }
    for (const d of this.doors) {
      const [nx, ny] = this.doorNormal(d);
      const a = this.inb(d.tx - nx, d.ty - ny) ? this.room[(d.ty - ny) * this.w + d.tx - nx] : -1;
      const b = this.inb(d.tx + nx, d.ty + ny) ? this.room[(d.ty + ny) * this.w + d.tx + nx] : -1;
      d.rooms = [a, b];
    }
    this.roomCount = id;
  }

  // ---------- vision segments ----------
  buildSegments() {
    const segs = []; const op = (x, y) => this.opaque(x, y);
    for (let y = 0; y <= this.h; y++) {
      let ra = -1, rb = -1;
      for (let x = 0; x <= this.w; x++) {
        const a = x < this.w && y > 0 && op(x, y - 1), b = x < this.w && y < this.h && op(x, y);
        const ea = a && !b, eb = b && !a;
        if (ea) { if (ra < 0) ra = x; } else if (ra >= 0) { segs.push([ra * TS, y * TS, x * TS, y * TS]); ra = -1; }
        if (eb) { if (rb < 0) rb = x; } else if (rb >= 0) { segs.push([rb * TS, y * TS, x * TS, y * TS]); rb = -1; }
      }
    }
    for (let x = 0; x <= this.w; x++) {
      let ra = -1, rb = -1;
      for (let y = 0; y <= this.h; y++) {
        const a = y < this.h && x > 0 && op(x - 1, y), b = y < this.h && x < this.w && op(x, y);
        const ea = a && !b, eb = b && !a;
        if (ea) { if (ra < 0) ra = y; } else if (ra >= 0) { segs.push([x * TS, ra * TS, x * TS, y * TS]); ra = -1; }
        if (eb) { if (rb < 0) rb = y; } else if (rb >= 0) { segs.push([x * TS, rb * TS, x * TS, y * TS]); rb = -1; }
      }
    }
    this.segs = segs; this.segDirty = false;
  }

  visPoly(ox, oy, R) {
    if (this.segDirty) this.buildSegments();
    const segs = [];
    const x0 = ox - R, y0 = oy - R, x1 = ox + R, y1 = oy + R;
    for (const s of this.segs) {
      if ((s[0] < x0 && s[2] < x0) || (s[0] > x1 && s[2] > x1) || (s[1] < y0 && s[3] < y0) || (s[1] > y1 && s[3] > y1)) continue;
      segs.push(s);
    }
    segs.push([x0, y0, x1, y0], [x1, y0, x1, y1], [x1, y1, x0, y1], [x0, y1, x0, y0]);
    const seen = new Set(); const angles = [];
    for (const s of segs) {
      for (let k = 0; k < 4; k += 2) {
        const px = s[k], py = s[k + 1], key = px * 100003 + py;
        if (seen.has(key)) continue; seen.add(key);
        const a = Math.atan2(py - oy, px - ox);
        angles.push(a - 0.0002, a, a + 0.0002);
      }
    }
    angles.sort((a, b) => a - b);
    const pts = new Float32Array(angles.length * 2);
    for (let n = 0; n < angles.length; n++) {
      const a = angles[n], dx = Math.cos(a), dy = Math.sin(a);
      let best = R * 1.5;
      for (let m = 0; m < segs.length; m++) {
        const s = segs[m], sx = s[2] - s[0], sy = s[3] - s[1];
        const den = dx * sy - dy * sx; if (den > -1e-9 && den < 1e-9) continue;
        const qx = s[0] - ox, qy = s[1] - oy;
        const t = (qx * sy - qy * sx) / den; if (t <= 0 || t >= best) continue;
        const u = (qx * dy - qy * dx) / den;
        if (u >= 0 && u <= 1) best = t;
      }
      pts[n * 2] = ox + dx * best; pts[n * 2 + 1] = oy + dy * best;
    }
    return pts;
  }

  // ---------- grid traversal / line of sight ----------
  // calls fn(tx,ty,t) for every tile after the start tile along the segment; returns {tx,ty,t} where fn returned true
  traverse(x0, y0, x1, y1, fn) {
    let tx = Math.floor(x0 / TS), ty = Math.floor(y0 / TS);
    const ex = Math.floor(x1 / TS), ey = Math.floor(y1 / TS);
    const dx = x1 - x0, dy = y1 - y0;
    const sx = dx > 0 ? 1 : -1, sy = dy > 0 ? 1 : -1;
    const tdx = dx !== 0 ? Math.abs(TS / dx) : Infinity, tdy = dy !== 0 ? Math.abs(TS / dy) : Infinity;
    let tmx = dx !== 0 ? (dx > 0 ? (tx + 1) * TS - x0 : x0 - tx * TS) / Math.abs(dx) : Infinity;
    let tmy = dy !== 0 ? (dy > 0 ? (ty + 1) * TS - y0 : y0 - ty * TS) / Math.abs(dy) : Infinity;
    for (let i = 0; i < 400; i++) {
      if (tx === ex && ty === ey) return null;
      let t;
      if (tmx < tmy) { t = tmx; tmx += tdx; tx += sx; } else { t = tmy; tmy += tdy; ty += sy; }
      if (t > 1) return null;
      if (fn(tx, ty, t)) return { tx, ty, t };
    }
    return null;
  }
  los(x0, y0, x1, y1) { return !this.traverse(x0, y0, x1, y1, (tx, ty) => this.opaque(tx, ty)); }
  losToTile(x0, y0, etx, ety) {
    return !this.traverse(x0, y0, (etx + 0.5) * TS, (ety + 0.5) * TS, (tx, ty) => !(tx === etx && ty === ety) && this.opaque(tx, ty));
  }

  // ---------- collision ----------
  collide(a) {
    const r = a.r;
    const tx0 = Math.floor((a.x - r) / TS), tx1 = Math.floor((a.x + r) / TS);
    const ty0 = Math.floor((a.y - r) / TS), ty1 = Math.floor((a.y + r) / TS);
    for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) {
      if (!this.solid(tx, ty)) continue;
      const bx0 = tx * TS, by0 = ty * TS, bx1 = bx0 + TS, by1 = by0 + TS;
      const cx = clamp(a.x, bx0, bx1), cy = clamp(a.y, by0, by1);
      const dx = a.x - cx, dy = a.y - cy, d2 = dx * dx + dy * dy;
      if (d2 >= r * r) continue;
      if (d2 > 1e-6) { const d = Math.sqrt(d2); a.x += dx / d * (r - d); a.y += dy / d * (r - d); }
      else {
        const l = a.x - bx0, rr = bx1 - a.x, u = a.y - by0, dd = by1 - a.y, m = Math.min(l, rr, u, dd);
        if (m === l) a.x = bx0 - r; else if (m === rr) a.x = bx1 + r; else if (m === u) a.y = by0 - r; else a.y = by1 + r;
      }
    }
  }
  move(a, dx, dy) {
    const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 5));
    for (let s = 0; s < steps; s++) { a.x += dx / steps; this.collide(a); a.y += dy / steps; this.collide(a); }
  }
  circleSolid(x, y, r) {
    const tx0 = Math.floor((x - r) / TS), tx1 = Math.floor((x + r) / TS), ty0 = Math.floor((y - r) / TS), ty1 = Math.floor((y + r) / TS);
    for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) {
      if (!this.solid(tx, ty)) continue;
      const cx = clamp(x, tx * TS, tx * TS + TS), cy = clamp(y, ty * TS, ty * TS + TS);
      if ((x - cx) ** 2 + (y - cy) ** 2 < r * r) return true;
    }
    return false;
  }
  walkClear(ax, ay, bx, by, r) {
    const d = dist(ax, ay, bx, by), n = Math.max(1, Math.ceil(d / 7));
    for (let i = 1; i <= n; i++) { const t = i / n; if (this.circleSolid(ax + (bx - ax) * t, ay + (by - ay) * t, r)) return false; }
    return true;
  }

  // ---------- pathfinding ----------
  passable(i, who) {
    const t = this.t[i];
    if (t === T.FLOOR) return true;
    if (t !== T.DOOR) return false;
    const d = this.doors[this.doorAt[i]];
    if (d.state !== 'closed') return true;
    if (d.wedged) return false;
    if (who === 'swat' && d.locked) return false;
    if (who === 'npc' && d.trap) return false;
    return true;
  }
  nearestPassable(tx, ty, who) {
    if (this.inb(tx, ty) && this.passable(this.idx(tx, ty), who)) return [tx, ty];
    for (let r = 1; r <= 4; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
      const x = tx + dx, y = ty + dy;
      if (this.inb(x, y) && this.t[this.idx(x, y)] === T.FLOOR) return [x, y];
    }
    return null;
  }
  findPath(sx, sy, gx, gy, who) {
    const w = this.w;
    const s = this.nearestPassable(Math.floor(sx / TS), Math.floor(sy / TS), who);
    const g = this.nearestPassable(Math.floor(gx / TS), Math.floor(gy / TS), who);
    if (!s || !g) return null;
    const si = s[1] * w + s[0], gi = g[1] * w + g[0];
    if (si === gi) return [{ x: gx, y: gy }];
    const gen = ++this._gen;
    const G = this._g, came = this._came, stamp = this._stamp, closed = this._closed;
    const heap = [];
    const push = (f, i) => { heap.push([f, i]); let k = heap.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; k = m; } } return top; };
    const hx = g[0], hy = g[1];
    const H = i => { const x = i % w, y = (i / w) | 0, dx = Math.abs(x - hx), dy = Math.abs(y - hy); return Math.max(dx, dy) + 0.414 * Math.min(dx, dy); };
    stamp[si] = gen; G[si] = 0; came[si] = -1; push(H(si), si);
    let found = false, iter = 0;
    while (heap.length && iter++ < 6000) {
      const [, cur] = pop();
      if (closed[cur] === gen) continue; closed[cur] = gen;
      if (cur === gi) { found = true; break; }
      const cx = cur % w, cy = (cur / w) | 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = cx + dx, ny = cy + dy; if (!this.inb(nx, ny)) continue;
        const ni = ny * w + nx;
        if (!this.passable(ni, who)) continue;
        if (dx && dy) {
          const a = cy * w + nx, b = ny * w + cx;
          if (this.t[a] !== T.FLOOR || this.t[b] !== T.FLOOR || this.t[ni] !== T.FLOOR) continue;
        }
        let cost = dx && dy ? 1.414 : 1;
        if (this.t[ni] === T.DOOR && this.doors[this.doorAt[ni]].state === 'closed') cost += 3;
        const ng = G[cur] + cost;
        if (stamp[ni] !== gen || ng < G[ni]) { stamp[ni] = gen; G[ni] = ng; came[ni] = cur; push(ng + H(ni), ni); }
      }
    }
    if (!found) return null;
    const tiles = []; for (let k = gi; k !== -1 && k !== si; k = came[k]) tiles.push(k);
    tiles.reverse();
    const pts = tiles.map(k => ({ x: (k % w + 0.5) * TS, y: (((k / w) | 0) + 0.5) * TS }));
    if (pts.length && this.t[gi] === T.FLOOR && dist(gx, gy, pts[pts.length - 1].x, pts[pts.length - 1].y) < TS * 0.75) pts[pts.length - 1] = { x: gx, y: gy };
    return this.smooth(sx, sy, pts);
  }
  smooth(sx, sy, pts) {
    const out = []; let cx = sx, cy = sy, i = 0;
    while (i < pts.length) {
      let j = Math.min(pts.length - 1, i + 10);
      while (j > i && !this.walkClear(cx, cy, pts[j].x, pts[j].y, 9)) j--;
      out.push(pts[j]); cx = pts[j].x; cy = pts[j].y; i = j + 1;
    }
    return out;
  }
  randomTileInRoom(room, filter) {
    const tiles = this.roomTiles[room]; if (!tiles) return null;
    for (let k = 0; k < 30; k++) {
      const i = pick(tiles); if (this.t[i] !== T.FLOOR) continue;
      const p = { x: (i % this.w + 0.5) * TS, y: (((i / this.w) | 0) + 0.5) * TS };
      if (!filter || filter(p)) return p;
    }
    return null;
  }
  // spread points across a room (for officers clearing it). seed = entry point
  clearPoints(room, sx, sy, n, maxR = 9 * TS) {
    const tiles = (this.roomTiles[room] || []).filter(i => this.t[i] === T.FLOOR).map(i => ({ x: (i % this.w + 0.5) * TS, y: (((i / this.w) | 0) + 0.5) * TS }))
      .filter(p => dist(p.x, p.y, sx, sy) <= maxR && dist(p.x, p.y, sx, sy) > TS * 1.2);
    if (!tiles.length) return [];
    // prefer tiles not hugging furniture
    const pts = [];
    const md = tiles.map(p => dist(p.x, p.y, sx, sy) * 0.6);
    for (let k = 0; k < n; k++) {
      let best = -1, bv = -1;
      for (let i = 0; i < tiles.length; i++) {
        const p = tiles[i]; if (this.circleSolid(p.x, p.y, 11)) continue;
        if (md[i] > bv) { bv = md[i]; best = i; }
      }
      if (best < 0) break;
      const b = tiles[best]; pts.push(b);
      for (let i = 0; i < tiles.length; i++) md[i] = Math.min(md[i], dist(tiles[i].x, tiles[i].y, b.x, b.y));
    }
    return pts;
  }
}
