// Procedural, destructible structures made of box "pieces". Each piece is a collision box and an
// instance in an InstancedMesh per material, so thousands of pieces cost a handful of draw calls.
import * as THREE from 'three';
import { triplanarPatch, registerLit } from '../render/materials.js';
import { G } from '../render/geo.js';
import { getTexture } from '../render/textures.js';
import { makeRng } from '../core/math.js';

export const MATS = {
  wood: { hp: 70, pen: 0.35, tex: 'wood', scale: 0.55, rough: 0.9, debris: 0x8a6a48, sound: 'wood' },
  plaster: { hp: 170, pen: 0.8, tex: 'plaster', scale: 0.35, rough: 0.95, debris: 0xcfc8bb, sound: 'stone' },
  brick: { hp: 280, pen: 2.0, tex: 'brick', scale: 0.5, rough: 0.92, debris: 0xa0705a, sound: 'stone' },
  concrete: { hp: 420, pen: 3.0, tex: 'concrete', scale: 0.25, rough: 0.9, debris: 0xa9a7a0, sound: 'stone' },
  metal: { hp: 160, pen: 0.55, tex: 'metal', scale: 0.5, rough: 0.55, metal: 0.35, debris: 0x8f9396, sound: 'metal' },
  container: { hp: 3000, pen: 0.9, tex: 'metal', scale: 0.4, rough: 0.6, metal: 0.3, debris: 0x7a6a5a, sound: 'metal' },
  sand: { hp: 260, pen: 6, tex: 'sandbag', scale: 1.0, rough: 1, debris: 0xb8a37a, sound: 'dirt' },
  hay: { hp: 45, pen: 0.6, tex: 'hay', scale: 0.6, rough: 1, debris: 0xd2b46a, sound: 'dirt' },
  cloth: { hp: 25, pen: 0.05, tex: 'cloth', scale: 0.8, rough: 1, debris: 0xcccccc, sound: 'dirt' },
  stone: { hp: 340, pen: 4, tex: 'rock', scale: 0.45, rough: 0.95, debris: 0x8f8b84, sound: 'stone' },
};

const FLOOR_H = 3.0;

export class Structures {
  constructor(world) {
    this.world = world;
    this.coll = world.collision;
    this.terrain = world.terrain;
    this.pieces = []; // all pieces (also collision boxes)
    this.byCat = {};
    this.decor = []; // geometries for static decor (roofs, etc.)
    this.footprints = []; // for minimap and placement
    this.meshes = {};
    this.rng = makeRng(world.def.seed * 7 + 3);
  }

  // --- low-level piece creation (world coordinates) ---
  piece(cat, minX, minY, minZ, maxX, maxY, maxZ, opts = {}) {
    const m = MATS[cat];
    const p = {
      minX: Math.min(minX, maxX), minY: Math.min(minY, maxY), minZ: Math.min(minZ, maxZ),
      maxX: Math.max(minX, maxX), maxY: Math.max(minY, maxY), maxZ: Math.max(minZ, maxZ),
      cat, mat: cat, color: opts.color ?? 0xffffff,
      hp: (opts.hp ?? m.hp) * ((opts.hpMul) || 1), destructible: opts.destructible !== false,
      navFloor: !!opts.navFloor, vault: !!opts.vault, pen: m.pen, noCollide: !!opts.noCollide,
      noStand: !!opts.noStand, below: [], above: [], inst: -1, grounded: opts.grounded !== false,
      building: opts.building || null,
    };
    p.maxHp = p.hp;
    this.coll.addBox(p);
    this.pieces.push(p);
    (this.byCat[cat] = this.byCat[cat] || []).push(p);
    return p;
  }

  // Transform helper for a building local frame (center cx,cz; rotation r in quarter turns; base y)
  frame(cx, cz, rot, y0) {
    const self = this;
    const tf = (lx, lz) => {
      switch (rot & 3) {
        case 0: return [cx + lx, cz + lz];
        case 1: return [cx - lz, cz + lx];
        case 2: return [cx - lx, cz - lz];
        default: return [cx + lz, cz - lx];
      }
    };
    return {
      tf, y0,
      box(cat, lx0, ly0, lz0, lx1, ly1, lz1, opts) {
        const [ax, az] = tf(lx0, lz0), [bx, bz] = tf(lx1, lz1);
        return self.piece(cat, ax, y0 + ly0, az, bx, y0 + ly1, bz, opts);
      },
      decor(geo, lx, ly, lz, extraRot = 0) {
        const [x, z] = tf(lx, lz);
        geo.rotateY(-(rot & 3) * Math.PI / 2 + extraRot);
        geo.translate(x, y0 + ly, z);
        self.decor.push(geo);
      },
    };
  }

  // Build a wall run along local x (axis 'x', at z=fixed) or local z (axis 'z', at x=fixed).
  // mods: array of 'solid'|'window'|'door'|'wide'|'none'|'slit' each 2m (wide spans 2 modules).
  wall(f, cat, axis, fixed, from, mods, yb, H, color, opts = {}) {
    const t = opts.thick || 0.3;
    const pieces = [];
    const add = (a0, a1, y0, y1) => {
      if (a1 - a0 < 0.05 || y1 - y0 < 0.05) return null;
      let p;
      if (axis === 'x') p = f.box(cat, a0, y0, fixed - t / 2, a1, y1, fixed + t / 2, { color, building: opts.building, hpMul: opts.hpMul });
      else p = f.box(cat, fixed - t / 2, y0, a0, fixed + t / 2, y1, a1, { color, building: opts.building, hpMul: opts.hpMul });
      p._a0 = a0; p._a1 = a1; p._y0 = y0; p._y1 = y1;
      pieces.push(p);
      return p;
    };
    const rows = (y0, y1, a0, a1, cols = 1) => {
      const n = Math.max(1, Math.round((y1 - y0) / 1.5));
      const w = (a1 - a0) / cols;
      for (let c = 0; c < cols; c++) for (let r = 0; r < n; r++) add(a0 + c * w, a0 + (c + 1) * w, y0 + (y1 - y0) * r / n, y0 + (y1 - y0) * (r + 1) / n);
    };
    const yTop = yb + H;
    let a = from;
    for (let i = 0; i < mods.length; i++) {
      const m = mods[i];
      const a0 = a, a1 = a + 2;
      if (m === 'solid') rows(yb, yTop, a0, a1, 2);
      else if (m === 'window') {
        rows(yb, yb + 1.0, a0, a1, 2);
        add(a0, a0 + 0.4, yb + 1.0, yb + 2.2); add(a1 - 0.4, a1, yb + 1.0, yb + 2.2);
        rows(yb + 2.2, yTop, a0, a1, 1);
      } else if (m === 'slit') {
        rows(yb, yb + 1.25, a0, a1, 2);
        add(a0, a0 + 0.3, yb + 1.25, yb + 1.65); add(a1 - 0.3, a1, yb + 1.25, yb + 1.65);
        rows(yb + 1.65, yTop, a0, a1, 1);
      } else if (m === 'door') {
        rows(yb, yb + 2.3, a0, a0 + 0.3, 1); rows(yb, yb + 2.3, a1 - 0.3, a1, 1);
        rows(yb + 2.3, yTop, a0, a1, 1);
      } else if (m === 'wide') {
        const a2 = a + 4; const dh = Math.min(H - 0.6, 4.2);
        rows(yb, yb + dh, a0, a0 + 0.3, 1); rows(yb, yb + dh, a2 - 0.3, a2, 1);
        rows(yb + dh, yTop, a0, a2, 2);
        a += 4; continue;
      }
      a += 2;
    }
    // support links: a piece rests on pieces directly below with horizontal overlap
    for (const p of pieces) {
      if (p._y0 <= yb + 0.01) { p.grounded = true; continue; }
      p.grounded = false;
      for (const q of pieces) {
        if (q === p) continue;
        if (Math.abs(q._y1 - p._y0) < 0.02 && q._a1 > p._a0 + 0.05 && q._a0 < p._a1 - 0.05) { p.below.push(q); q.above.push(p); }
      }
      if (p.below.length === 0) p.grounded = true;
    }
    return pieces;
  }

  // Perimeter walls of a rectangular storey.
  storey(f, cat, hw, hd, yb, H, color, mods, opts) {
    // mods: {n:[], s:[], e:[], w:[]} north = -z side, south = +z, east = +x, west = -x
    this.wall(f, cat, 'x', -hd, -hw, mods.n, yb, H, color, opts);
    this.wall(f, cat, 'x', hd, -hw, mods.s, yb, H, color, opts);
    // side walls shortened to avoid overlapping corners
    this.wall(f, cat, 'z', -hw, -hd, mods.w, yb, H, color, opts);
    this.wall(f, cat, 'z', hw, -hd, mods.e, yb, H, color, opts);
  }

  randomMods(count, doorIdx, rng, winP = 0.55, doorType = 'door') {
    const m = [];
    for (let i = 0; i < count; i++) m.push(rng() < winP ? 'window' : 'solid');
    if (doorIdx !== null && doorIdx !== undefined && doorIdx >= 0 && doorIdx < count) m[doorIdx] = doorType;
    return m;
  }

  footprint(cx, cz, rot, hw, hd, color) {
    const odd = rot & 1;
    const fw = odd ? hd : hw, fd = odd ? hw : hd;
    const fp = { minX: cx - fw, maxX: cx + fw, minZ: cz - fd, maxZ: cz + fd, color };
    this.footprints.push(fp);
    return fp;
  }

  // --- Building types. (cx,cz) center on half-integer grid; w,d in 2m modules ---
  building(type, cx, cz, rot = 0, o = {}) {
    const rng = this.rng;
    const g = o.y ?? this.terrain.heightAt(cx, cz);
    const B = { type, cx, cz, rot };
    switch (type) {
      case 'house': return this.house(cx, cz, rot, g, Object.assign({ w: 5, d: 4, floors: 1 }, o), B);
      case 'house2': return this.house(cx, cz, rot, g, Object.assign({ w: 5, d: 4, floors: 2 }, o), B);
      case 'shop': return this.house(cx, cz, rot, g, Object.assign({ w: 4, d: 4, floors: rng() < 0.45 ? 2 : 1, flat: true, cat: 'plaster' }, o), B);
      case 'barn': return this.barn(cx, cz, rot, g, o, B);
      case 'warehouse': return this.warehouse(cx, cz, rot, g, o, B);
      case 'shed': return this.house(cx, cz, rot, g, Object.assign({ w: 2, d: 2, floors: 1, cat: 'wood', H: 2.8, noInterior: true, winP: 0.3, color: 0xa08060 }, o), B);
      case 'bunker': return this.house(cx, cz, rot, g, Object.assign({ w: 3, d: 3, floors: 1, cat: 'concrete', H: 2.7, flat: true, slits: true, noInterior: true, color: 0xb8b4a8 }, o), B);
      case 'church': return this.church(cx, cz, rot, g, o, B);
      case 'ruin': return this.house(cx, cz, rot, g, Object.assign({ w: 4, d: 4, floors: 1, ruin: true, noRoof: true, flat: true }, o), B);
      case 'pumphouse': return this.house(cx, cz, rot, g, Object.assign({ w: 4, d: 3, floors: 1, cat: 'concrete', H: 3.6, flat: true, noInterior: true, color: 0xc7c2b5 }, o), B);
      default: throw new Error('unknown building ' + type);
    }
  }

  house(cx, cz, rot, g, o, B) {
    const rng = this.rng;
    const f = this.frame(cx, cz, rot, g);
    const W = o.w, D = o.d, hw = W, hd = D;
    const H = o.H || FLOOR_H;
    const cat = o.cat || (rng() < 0.3 ? 'brick' : 'plaster');
    const palette = o.palette || (cat === 'brick' ? [0xd8b8a0, 0xc9a08a, 0xe0c8b4] : this.world.def.wallColors);
    const color = o.color ?? palette[Math.floor(rng() * palette.length)];
    const floors = o.floors;
    const bopts = { building: B };
    this.footprint(cx, cz, rot, hw, hd);
    // ground slab
    f.box('concrete', -hw, -0.6, -hd, hw, 0.12, hd, { destructible: false, navFloor: true, color: 0x9d9a92 });
    for (let fl = 0; fl < floors; fl++) {
      const yb = fl * H + (fl > 0 ? 0.12 : -0.15);
      const hh = fl > 0 ? H - 0.12 : H + 0.15;
      const doorN = fl === 0 ? Math.floor(W / 2) : -1;
      const doorS = fl === 0 && rng() < 0.6 ? Math.floor(rng() * W) : -1;
      const doorE = fl === 0 && !o.noSideDoor && rng() < 0.35 ? Math.floor(D / 2) : -1;
      const winP = o.winP ?? 0.55;
      const mods = {
        n: this.randomMods(W, doorN, rng, winP), s: this.randomMods(W, doorS, rng, winP),
        e: this.randomMods(D, doorE, rng, winP), w: this.randomMods(D, -1, rng, winP),
      };
      if (o.slits) for (const k of ['n', 's', 'e', 'w']) mods[k] = mods[k].map(m => (m === 'window' || m === 'solid') && rng() < 0.6 ? 'slit' : m);
      this.storey(f, cat, hw, hd, yb, hh, color, mods, bopts);
      // interior wall on single storey
      if (fl === 0 && floors === 1 && W >= 4 && !o.noInterior) {
        const k = rng() < 0.5 ? 2 : W - 2;
        const im = []; for (let i = 0; i < D; i++) im.push('solid');
        im[Math.floor(rng() * D)] = 'door';
        this.wall(f, 'plaster', 'z', -hw + k * 2, -hd + 0.15, im, yb, hh, 0xe6e1d6, Object.assign({ thick: 0.2 }, bopts));
      }
    }
    if (floors > 1) {
      // stairs along south (+z) wall from west side up to second floor
      const steps = 12, run = 0.28, rise = (H + 0.12 - 0.12) / steps;
      const x0 = -hw + 0.3, zA = hd - 1.25, zB = hd - 0.16;
      for (let i = 0; i < steps; i++) f.box('wood', x0 + i * run, 0.12, zA, x0 + (i + 1) * run, 0.12 + rise * (i + 1), zB, { destructible: false, color: 0x8b6b4a });
      const xs = x0 + steps * run + 0.05;
      for (let fl = 1; fl < floors; fl++) {
        const y = fl * H;
        f.box('concrete', -hw, y - 0.05, -hd, hw, y + 0.12, zA - 0.05, { destructible: false, color: 0xa9a49a });
        f.box('concrete', xs, y - 0.05, zA - 0.05, hw, y + 0.12, hd, { destructible: false, color: 0xa9a49a });
      }
    }
    if (!o.noRoof) {
      const yr = floors * H;
      f.box('concrete', -hw - 0.2, yr, -hd - 0.2, hw + 0.2, yr + 0.25, hd + 0.2, { destructible: false, color: o.flat ? 0xb9b2a5 : 0x8e8a84, noStand: false });
      if (!o.flat && !this.world.def.flatRoofs) {
        const roofCol = this.world.def.roofColors[Math.floor(rng() * this.world.def.roofColors.length)];
        const ridgeAlongX = W >= D;
        const geo = ridgeAlongX ? G.prism(W * 2 + 0.6, Math.min(D, 4) * 0.55, D * 2 + 0.6, roofCol) : G.prism(D * 2 + 0.6, Math.min(W, 4) * 0.55, W * 2 + 0.6, roofCol, 0, 0, 0, Math.PI / 2);
        f.decor(geo, 0, yr + 0.25, 0);
      } else {
        // parapet lip (decor only)
        const c = 0xa8a091;
        f.decor(G.box(hw * 2 + 0.4, 0.35, 0.2, c, 0, 0.17, 0), 0, yr + 0.25, -hd - 0.1);
        f.decor(G.box(hw * 2 + 0.4, 0.35, 0.2, c, 0, 0.17, 0), 0, yr + 0.25, hd + 0.1);
        f.decor(G.box(0.2, 0.35, hd * 2 + 0.4, c, 0, 0.17, 0), -hw - 0.1, yr + 0.25, 0);
        f.decor(G.box(0.2, 0.35, hd * 2 + 0.4, c, 0, 0.17, 0), hw + 0.1, yr + 0.25, 0);
      }
    }
    if (o.ruin) {
      // knock out random pieces silently
      for (const p of this.pieces.slice(-200)) if (p.building === B && p.destructible && p.minY > g + 0.5 && this.rng() < 0.45) { p.alive = false; this.coll.removeBox(p); p.ruined = true; }
      this.prop('rubble', cx + 1.5, cz - 1.5, 0);
    }
    // interior props
    if (!o.ruin && W >= 3 && this.rng() < 0.7) {
      const [px, pz] = f.tf(hw - 1.2, -hd + 1.2);
      this.prop('crate', px, pz, 0, { y: g + 0.12, size: 0.9 });
    }
    return B;
  }

  barn(cx, cz, rot, g, o, B) {
    const f = this.frame(cx, cz, rot, g);
    const W = o.w || 6, D = o.d || 5, hw = W, hd = D, H = o.H || 5.5;
    const color = o.color ?? 0x9a4a3a;
    this.footprint(cx, cz, rot, hw, hd);
    f.box('concrete', -hw, -0.6, -hd, hw, 0.08, hd, { destructible: false, navFloor: true, color: 0x8d8070 });
    const mid = Math.floor(W / 2) - 1;
    const mk = (n, doorAt) => { const m = []; for (let i = 0; i < n; i++) { if (i === doorAt) { m.push('wide'); i++; } else m.push(this.rng() < 0.2 ? 'window' : 'solid'); } return m; };
    this.storey(f, 'wood', hw, hd, -0.15, H + 0.15, color, { n: mk(W, mid), s: mk(W, mid), e: mk(D, -1), w: this.randomMods(D, Math.floor(D / 2), this.rng, 0.2) }, { building: B, thick: 0.25 });
    f.box('wood', -hw - 0.3, H, -hd - 0.3, hw + 0.3, H + 0.2, hd + 0.3, { destructible: false, color: 0x6b5040 });
    f.decor(G.prism(W * 2 + 0.8, 3.2, D * 2 + 0.8, 0x5d5148), 0, H + 0.2, 0);
    // hay inside
    for (let i = 0; i < 4; i++) {
      const [px, pz] = f.tf(-hw + 1.5 + this.rng() * (hw * 2 - 3), (this.rng() < 0.5 ? -1 : 1) * (hd - 1.4));
      this.prop('hay', px, pz, this.rng() < 0.5 ? 0 : 1, { y: g + 0.08 });
    }
    return B;
  }

  warehouse(cx, cz, rot, g, o, B) {
    const f = this.frame(cx, cz, rot, g);
    const W = o.w || 10, D = o.d || 6, hw = W, hd = D, H = o.H || 7;
    const cat = o.cat || 'metal';
    const color = o.color ?? (cat === 'wood' ? 0x8f7254 : [0xa9b3b8, 0xb7ab92, 0x9aa79a][Math.floor(this.rng() * 3)]);
    this.footprint(cx, cz, rot, hw, hd);
    f.box('concrete', -hw, -0.6, -hd, hw, 0.1, hd, { destructible: false, navFloor: true, color: 0x9a978f });
    const mk = (n, door1, door2) => { const m = []; for (let i = 0; i < n; i++) { if (i === door1 || i === door2) { m.push('wide'); i++; } else m.push('solid'); } return m; };
    const sideDoor = Math.floor(D / 2);
    const sm = []; for (let i = 0; i < D; i++) sm.push(i === sideDoor ? 'door' : (this.rng() < 0.25 ? 'window' : 'solid'));
    const sm2 = sm.slice(); sm2[sideDoor] = this.rng() < 0.5 ? 'door' : 'solid';
    this.storey(f, cat, hw, hd, -0.15, H + 0.15, color, { n: mk(W, 1, W - 3), s: mk(W, Math.floor(W / 2) - 1, -9), e: sm, w: sm2 }, { building: B, thick: 0.2 });
    f.box('metal', -hw - 0.3, H, -hd - 0.3, hw + 0.3, H + 0.25, hd + 0.3, { destructible: false, color: 0x777f84 });
    f.decor(G.prism(W * 2 + 0.6, 1.4, D * 2 + 0.6, 0x6f777c), 0, H + 0.25, 0);
    // crates/cover inside
    for (let i = 0; i < 6; i++) {
      const [px, pz] = f.tf(-hw + 2 + this.rng() * (hw * 2 - 4), -hd + 2.5 + this.rng() * (hd * 2 - 5));
      this.prop(this.rng() < 0.4 ? 'crateStack' : 'crate', px, pz, 0, { y: g + 0.1 });
    }
    return B;
  }

  church(cx, cz, rot, g, o, B) {
    const f = this.frame(cx, cz, rot, g);
    const W = 5, D = 9, hw = W, hd = D, H = 6.5;
    const color = 0xd9d2c3;
    this.footprint(cx, cz, rot, hw, hd + 4);
    f.box('concrete', -hw, -0.6, -hd, hw, 0.12, hd, { destructible: false, navFloor: true, color: 0x9a968e });
    const sideMods = []; for (let i = 0; i < D; i++) sideMods.push(i % 2 ? 'window' : 'solid');
    sideMods[2] = 'door';
    const front = ['solid', 'solid', 'door', 'solid', 'solid'];
    this.storey(f, 'brick', hw, hd, -0.15, H + 0.15, color, { n: front, s: ['solid', 'window', 'solid', 'window', 'solid'], e: sideMods, w: sideMods.slice().reverse() }, { building: B, thick: 0.4 });
    f.box('concrete', -hw - 0.3, H, -hd - 0.3, hw + 0.3, H + 0.25, hd + 0.3, { destructible: false, color: 0x7d6e64 });
    f.decor(G.prism(D * 2 + 0.6, 4.2, W * 2 + 0.6, 0x6e5a4c, 0, 0, 0, Math.PI / 2), 0, H + 0.25, 0);
    // tower in front (north side)
    const tz = -hd - 2;
    const tf2 = this.frame(...f.tf(0, tz), rot, g);
    tf2.box('concrete', -2, -0.6, -2, 2, 0.12, 2, { destructible: false, navFloor: true, color: 0x9a968e });
    this.storey(tf2, 'brick', 2, 2, -0.15, 14.15, color, { n: ['door', 'solid'], s: ['solid', 'solid'], e: ['solid', 'solid'], w: ['solid', 'solid'] }, { building: B, thick: 0.4 });
    tf2.box('concrete', -2.2, 14, -2.2, 2.2, 14.3, 2.2, { destructible: false, color: 0x7d6e64 });
    tf2.decor(G.pyramid(4.6, 5, 0x5b4c42), 0, 14.3, 0);
    tf2.decor(G.box(0.15, 1.6, 0.15, 0x444444, 0, 0.8, 0), 0, 19.3, 0);
    tf2.decor(G.box(0.8, 0.15, 0.15, 0x444444, 0, 0, 0), 0, 20.4, 0);
    return B;
  }

  // --- Props ---
  prop(type, x, z, rot = 0, o = {}) {
    const rng = this.rng;
    const y = o.y ?? this.terrain.heightAt(x, z);
    const f = this.frame(x, z, rot, y);
    switch (type) {
      case 'crate': { const s = o.size || 1.2; f.box('wood', -s / 2, 0, -s / 2, s / 2, s, s / 2, { color: o.color ?? [0xb08d5f, 0x9c7b52, 0x7d8a5a][Math.floor(rng() * 3)], hp: 60 }); break; }
      case 'crateStack': {
        f.box('wood', -1.2, 0, -0.6, 0, 1.2, 0.6, { color: 0xa88656 }); f.box('wood', 0, 0, -0.6, 1.2, 1.2, 0.6, { color: 0x9c7b52 });
        const top = f.box('wood', -0.6, 1.2, -0.6, 0.6, 2.4, 0.6, { color: 0xb08d5f }); top.grounded = false; break;
      }
      case 'container': {
        const cols = [0x9b3b2f, 0x2f5f8b, 0x3f7a4a, 0xb98a2e, 0x7d7d7d, 0x8b4f2f];
        const c = o.color ?? cols[Math.floor(rng() * cols.length)];
        const p = f.box('container', -1.22, 0, -3.03, 1.22, 2.6, 3.03, { color: c, destructible: false });
        if (o.stack) { const q = f.box('container', -1.22, 2.6, -3.03, 1.22, 5.2, 3.03, { color: cols[Math.floor(rng() * cols.length)], destructible: false }); q.grounded = false; }
        this.footprint(x, z, rot, 1.22, 3.03, 'rgba(90,80,70,0.9)');
        break;
      }
      case 'sandbags': {
        const n = o.n || 2;
        for (let i = 0; i < n; i++) f.box('sand', -n / 2 + i, 0, -0.3, -n / 2 + i + 1, 0.95, 0.3, { color: 0xffffff, vault: true });
        break;
      }
      case 'sandbagRing': {
        // U-shaped emplacement facing -z
        for (let i = -2; i < 2; i++) f.box('sand', i, 0, -1.6, i + 1, 1.0, -1.0, { vault: true });
        for (let i = -1; i < 1; i++) { f.box('sand', -2.3, 0, i, -1.7, 1.0, i + 1, { vault: true }); f.box('sand', 1.7, 0, i, 2.3, 1.0, i + 1, { vault: true }); }
        break;
      }
      case 'hesco': { const n = o.n || 3; for (let i = 0; i < n; i++) f.box('sand', -n * 0.55 + i * 1.1, 0, -0.55, -n * 0.55 + (i + 1) * 1.1, 1.3, 0.55, { color: 0xc8b48a, hpMul: 2.2 }); break; }
      case 'jersey': { const n = o.n || 1; for (let i = 0; i < n; i++) f.box('concrete', -n + i * 2, 0, -0.28, -n + (i + 1) * 2 - 0.05, 0.85, 0.28, { color: 0xc4c0b6, vault: true }); break; }
      case 'fence': {
        const n = o.n || 4;
        for (let i = 0; i < n; i++) {
          const fy = this.terrain.heightAt(...f.tf(-n + i * 2 + 1, 0)) - y;
          f.box('wood', -n + i * 2, fy, -0.05, -n + (i + 1) * 2, fy + 1.05, 0.05, { color: 0x8a6e50, hp: 30, vault: true });
        }
        break;
      }
      case 'stoneWall': {
        const n = o.n || 4;
        for (let i = 0; i < n; i++) {
          const fy = this.terrain.heightAt(...f.tf(-n + i * 2 + 1, 0)) - y;
          f.box('stone', -n + i * 2, fy - 0.2, -0.3, -n + (i + 1) * 2, fy + 1.0, 0.3, { color: 0xbdb6aa, vault: true });
        }
        break;
      }
      case 'compoundWall': {
        const n = o.n || 4;
        for (let i = 0; i < n; i++) {
          const fy = this.terrain.heightAt(...f.tf(-n + i * 2 + 1, 0)) - y;
          f.box('plaster', -n + i * 2, fy - 0.3, -0.2, -n + i * 2 + 1, fy + 2.3, 0.2, { color: o.color ?? 0xd9c7a4 });
          f.box('plaster', -n + i * 2 + 1, fy - 0.3, -0.2, -n + (i + 1) * 2, fy + 2.3, 0.2, { color: o.color ?? 0xd9c7a4 });
        }
        break;
      }
      case 'hay': f.box('hay', -0.6, 0, -0.8, 0.6, 1.1, 0.8, { color: 0xffffff }); break;
      case 'haystack': { f.box('hay', -1.2, 0, -0.8, 0, 1.1, 0.8, {}); f.box('hay', 0, 0, -0.8, 1.2, 1.1, 0.8, {}); const t = f.box('hay', -0.6, 1.1, -0.8, 0.6, 2.2, 0.8, {}); t.grounded = false; break; }
      case 'car': {
        const cols = [0x6d3a32, 0x4a5a6a, 0x7a7262, 0x5e6b4a, 0x8a8f94, 0x3d3d40];
        const c = o.color ?? cols[Math.floor(rng() * cols.length)];
        f.box('metal', -0.9, 0.25, -2.1, 0.9, 1.05, 2.1, { color: c, destructible: false });
        f.box('metal', -0.8, 1.05, -1.0, 0.8, 1.6, 0.9, { color: c, destructible: false });
        for (const [wx, wz] of [[-0.85, -1.3], [0.85, -1.3], [-0.85, 1.3], [0.85, 1.3]]) f.decor(G.cyl(0.36, 0.36, 0.25, 8, 0x1d1d1d, 0, 0, 0, 0, 0, Math.PI / 2), wx, 0.36, wz);
        f.decor(G.box(1.5, 0.45, 0.06, 0x2a3540, 0, 0, 0, -0.5), 0, 1.33, -1.05);
        this.footprint(x, z, rot, 0.9, 2.1, 'rgba(60,60,60,0.9)');
        break;
      }
      case 'waterTower': {
        for (const [lx, lz] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) f.box('wood', lx - 0.15, 0, lz - 0.15, lx + 0.15, 6, lz + 0.15, { destructible: false, color: 0x6b5a48 });
        f.box('wood', -1.8, 6, -1.8, 1.8, 6.25, 1.8, { destructible: false, color: 0x6b5a48 });
        f.decor(G.cyl(1.7, 1.7, 3.2, 10, 0x7f6a55), 0, 7.85, 0);
        f.decor(G.cone(1.9, 1.0, 10, 0x5a4d40), 0, 9.95, 0);
        break;
      }
      case 'radioTower': {
        const h = o.h || 42;
        const legs = [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]];
        const geos = [];
        for (const [lx, lz] of legs) {
          f.box('metal', lx - 0.2, 0, lz - 0.2, lx + 0.2, 3, lz + 0.2, { destructible: false, color: 0xb03a2e });
          geos.push(G.box(0.18, h, 0.18, 0xb8b8b8, lx * 0.5, h / 2, lz * 0.5, lz * 0.05, 0, -lx * 0.05));
        }
        for (let yy = 4; yy < h; yy += 4) {
          const s = 2.5 * (1 - yy / h * 0.55);
          const col = (yy / 4) % 2 ? 0xc04030 : 0xe8e8e8;
          geos.push(G.box(s * 2, 0.12, 0.12, col, 0, yy, -s)); geos.push(G.box(s * 2, 0.12, 0.12, col, 0, yy, s));
          geos.push(G.box(0.12, 0.12, s * 2, col, -s, yy, 0)); geos.push(G.box(0.12, 0.12, s * 2, col, s, yy, 0));
        }
        geos.push(G.box(0.6, 0.6, 0.6, 0xff3020, 0, h + 0.3, 0));
        f.decor(G.merge(geos), 0, 0, 0);
        break;
      }
      case 'stall': {
        const c = [0xb84a3a, 0x3a7ab8, 0xd8a83a, 0x4a9a5a][Math.floor(rng() * 4)];
        for (const [lx, lz] of [[-1.4, -1], [1.4, -1], [-1.4, 1], [1.4, 1]]) f.box('wood', lx - 0.06, 0, lz - 0.06, lx + 0.06, 2.4, lz + 0.06, { color: 0x6a5240, hp: 40 });
        f.box('cloth', -1.6, 2.4, -1.2, 1.6, 2.5, 1.2, { color: c, noStand: true, grounded: false });
        f.box('wood', -1.3, 0, -0.5, 1.3, 0.9, 0.3, { color: 0x8a6a4a, vault: true });
        break;
      }
      case 'logs': {
        for (let i = 0; i < 3; i++) f.box('wood', -2.5, i * 0.5, -1.2 + i * 0.25, 2.5, (i + 1) * 0.5, 1.2 - i * 0.25, { color: 0x7a5a3a, vault: i === 0 });
        break;
      }
      case 'tank': {
        f.box('metal', -1.6, 0, -1.6, 1.6, 3.4, 1.6, { color: o.color ?? 0xd8d4c8, destructible: false, noCollide: false });
        f.decor(G.cyl(1.75, 1.75, 0.3, 12, 0x9a9a9a), 0, 3.5, 0);
        break;
      }
      case 'pipe': { const n = o.len || 10; f.box('metal', -n / 2, 0.3, -0.35, n / 2, 1.0, 0.35, { color: 0x8a8f94, destructible: false, vault: true }); break; }
      case 'pier': {
        // deck from local z=0 to z=len, width w, at height o.deckY (absolute)
        const len = o.len || 30, w = o.w || 6, dy = (o.deckY ?? 1.6) - y;
        f.box('concrete', -w / 2, dy - 0.8, 0, w / 2, dy, len, { destructible: false, navFloor: true, color: 0xb0aca2 });
        for (let k = 4; k < len; k += 8) for (const sx of [-w / 2 + 0.4, w / 2 - 0.4]) f.box('concrete', sx - 0.3, dy - 8, k - 0.3, sx + 0.3, dy - 0.8, k + 0.3, { destructible: false, color: 0x8f8b82 });
        for (let k = 3; k < len; k += 6) f.decor(G.cyl(0.18, 0.22, 0.5, 6, 0x333333), w / 2 - 0.4, dy + 0.25, k);
        this.footprint(x, z, rot, w / 2, len / 2, 'rgba(150,145,135,0.9)');
        break;
      }
      case 'bridge': {
        const len = o.len || 40, w = o.w || 8, dy = (o.deckY ?? 3) - y;
        f.box('concrete', -w / 2, dy - 0.7, -len / 2, w / 2, dy, len / 2, { destructible: false, navFloor: true, color: 0xa9a59b });
        for (const sx of [-w / 2 + 0.15, w / 2 - 0.15]) f.box('concrete', sx - 0.15, dy, -len / 2, sx + 0.15, dy + 0.9, len / 2, { destructible: false, color: 0xbab5aa });
        for (let k = -len / 2 + 8; k < len / 2 - 4; k += 10) f.box('concrete', -w / 2 + 0.5, dy - 9, k - 0.6, w / 2 - 0.5, dy - 0.7, k + 0.6, { destructible: false, color: 0x8c887f });
        break;
      }
      case 'blastWall': {
        // concrete T-wall sections: tall, bulletproof spawn screens
        const n = o.n || 3, H = o.h || 3.6;
        for (let i = 0; i < n; i++) {
          const x0 = -n + i * 2, fy = this.terrain.heightAt(...f.tf(x0 + 1, 0)) - y;
          f.box('concrete', x0, fy - 0.3, -0.35, x0 + 2, fy + H, 0.35, { color: i % 2 ? 0xb4b0a6 : 0xbcb8ae, destructible: false });
          f.box('concrete', x0 + 0.06, fy - 0.3, -0.55, x0 + 1.94, fy + 0.45, 0.55, { color: 0xa8a49a, destructible: false });
        }
        this.footprint(x, z, rot, n, 0.5, 'rgba(150,146,138,0.95)');
        break;
      }
      case 'tent': {
        const c = o.color ?? 0x6b6e4e;
        f.box('cloth', -2, 0, -2.5, -1.9, 1.6, 2.5, { color: c }); f.box('cloth', 1.9, 0, -2.5, 2, 1.6, 2.5, { color: c });
        f.box('cloth', -2, 0, 2.4, 2, 1.6, 2.5, { color: c });
        f.decor(G.prism(5.2, 1.3, 4.2, c), 0, 1.6, 0);
        break;
      }
      case 'grave': f.box('stone', -0.3, 0, -0.08, 0.3, 0.75, 0.08, { color: 0xa9a49a, vault: true }); break;
      case 'barrels': { for (let i = 0; i < (o.n || 3); i++) f.box('metal', -0.9 + i * 0.65, 0, -0.3, -0.3 + i * 0.65, 0.95, 0.3, { color: [0x3a5a8a, 0x8a3a2a, 0x4a6a3a][i % 3], hp: 80 }); break; }
      case 'watchtower': {
        for (const [lx, lz] of [[-1.3, -1.3], [1.3, -1.3], [-1.3, 1.3], [1.3, 1.3]]) f.box('wood', lx - 0.12, 0, lz - 0.12, lx + 0.12, 5, lz + 0.12, { destructible: false, color: 0x6b5a48 });
        f.box('wood', -1.6, 4.8, -1.6, 1.6, 5.0, 1.6, { destructible: false, color: 0x7a6650 });
        for (const s of [-1, 1]) { f.box('wood', -1.6, 5, s * 1.55 - 0.05, 1.6, 6.0, s * 1.55 + 0.05, { color: 0x8a7660, grounded: false }); f.box('wood', s * 1.55 - 0.05, 5, -1.6, s * 1.55 + 0.05, 6.0, 1.6, { color: 0x8a7660, grounded: false }); }
        f.decor(G.pyramid(3.6, 1.2, 0x5a4a3a), 0, 7.4, 0);
        for (const [lx, lz] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) f.decor(G.box(0.1, 1.4, 0.1, 0x6b5a48, 0, 0.7, 0), lx, 6.0, lz);
        // ladder steps (climbable by player)
        for (let k = 0; k < 9; k++) f.box('wood', -0.4, 0.5 * k, 1.7, 0.4, 0.5 * k + 0.08, 1.95, { destructible: false, color: 0x6b5a48, noCollide: false });
        break;
      }
      case 'rubble': {
        for (let i = 0; i < 4; i++) f.decor(G.dodeca(0.4 + rng() * 0.5, 0xa49c90, 0, 0, 0, 1.4, 0.5, 1.1), (rng() - 0.5) * 3, 0.1, (rng() - 0.5) * 3);
        break;
      }
      case 'chimney': {
        const h = o.h || 24;
        f.box('brick', -1.6, -0.5, -1.6, 1.6, h, 1.6, { destructible: false, color: o.color ?? 0xa86a52 });
        f.decor(G.box(3.8, 0.6, 3.8, 0x6a4a3a, 0, 0, 0), 0, h + 0.3, 0);
        f.decor(G.box(3.4, 0.4, 3.4, 0x222222, 0, 0, 0), 0, h + 0.8, 0);
        for (let k = 4; k < h; k += 6) f.decor(G.box(3.5, 0.3, 3.5, 0x8a5a44, 0, 0, 0), 0, k, 0);
        this.footprint(x, z, rot, 1.6, 1.6, 'rgba(120,80,60,0.95)');
        break;
      }
      case 'platform': {
        const len = o.len || 30, w = o.w || 5;
        f.box('concrete', -len / 2, -0.6, -w / 2, len / 2, 0.42, w / 2, { destructible: false, navFloor: true, color: 0xb5b0a6 });
        f.decor(G.box(len, 0.06, 0.3, 0xd8c040, 0, 0, 0), 0, 0.45, w / 2 - 0.2);
        for (let k = -len / 2 + 6; k < len / 2; k += 12) { f.box('metal', k - 0.1, 0.42, -0.1, k + 0.1, 3.4, 0.1, { destructible: false, color: 0x55606a }); }
        f.box('metal', -len / 2, 3.4, -w / 2 + 0.5, len / 2, 3.55, w / 2 - 0.5, { destructible: false, color: 0x6a747c, noStand: true });
        this.footprint(x, z, rot, len / 2, w / 2, 'rgba(160,155,145,0.95)');
        break;
      }
      case 'fountain': {
        for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; const fx = Math.cos(a) * 3.2, fz = Math.sin(a) * 3.2; f.box('stone', fx - 1.3, 0, fz - 0.35, fx + 1.3, 0.75, fz + 0.35, { color: 0xc8c0b0, vault: true }); }
        f.box('stone', -0.5, 0, -0.5, 0.5, 2.2, 0.5, { destructible: false, color: 0xbdb4a2 });
        f.decor(G.cyl(1.2, 1.0, 0.3, 10, 0xbdb4a2), 0, 2.3, 0);
        f.decor(G.cyl(2.9, 2.9, 0.1, 16, 0x4a7a8a), 0, 0.4, 0);
        break;
      }
      case 'traincar': {
        const c = o.color ?? [0x7a3a2a, 0x3a5a6a, 0x5a5a4a][Math.floor(rng() * 3)];
        f.box('container', -1.4, 0.9, -7, 1.4, 4.0, 7, { color: c, destructible: false });
        f.box('metal', -1.2, 0.3, -6.5, 1.2, 0.9, 6.5, { color: 0x2a2a2a, destructible: false });
        for (const wz of [-5, -3.6, 3.6, 5]) for (const wx of [-0.75, 0.75]) f.decor(G.cyl(0.45, 0.45, 0.2, 8, 0x1d1d1d, 0, 0, 0, 0, 0, Math.PI / 2), wx, 0.45, wz);
        this.footprint(x, z, rot, 1.4, 7, 'rgba(110,70,60,0.95)');
        break;
      }
      case 'rails': {
        const len = o.len || 100;
        f.decor(G.box(0.12, 0.12, len, 0x5a5a5a, 0, 0, 0), -0.75, 0.06, 0); f.decor(G.box(0.12, 0.12, len, 0x5a5a5a, 0, 0, 0), 0.75, 0.06, 0);
        for (let k = -len / 2; k < len / 2; k += 1.2) f.decor(G.box(2.4, 0.08, 0.25, 0x5a4636, 0, 0, 0), 0, 0.02, k);
        break;
      }
      case 'pole': f.box('wood', -0.12, 0, -0.12, 0.12, 8, 0.12, { destructible: false, color: 0x5a4a3a }); f.decor(G.box(1.8, 0.12, 0.12, 0x5a4a3a), 0, 7.4, 0); break;
      case 'crane': {
        for (const [lx, lz] of [[-4, -1.5], [4, -1.5], [-4, 1.5], [4, 1.5]]) f.box('metal', lx - 0.3, 0, lz - 0.3, lx + 0.3, 14, lz + 0.3, { destructible: false, color: 0xd8a02a });
        f.decor(G.box(9, 1.2, 4, 0xd8a02a, 0, 0, 0), 0, 14.6, 0);
        f.decor(G.box(26, 0.8, 1.2, 0xd8a02a, 0, 0, 0), 9, 15.8, 0);
        f.decor(G.box(0.08, 9, 0.08, 0x222222, 0, 0, 0), 18, 11, 0);
        break;
      }
      default: throw new Error('unknown prop ' + type);
    }
  }

  // Build instanced meshes for all pieces and merged decor mesh.
  finalize(scene) {
    const box = new THREE.BoxGeometry(1, 1, 1);
    box.deleteAttribute('uv');
    const m4 = new THREE.Matrix4(), col = new THREE.Color();
    const q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    if (!this.byCat.sand) this.byCat.sand = [];
    for (const cat of Object.keys(this.byCat)) {
      const list = this.byCat[cat];
      const md = MATS[cat];
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: md.rough, metalness: md.metal || 0 });
      triplanarPatch(mat, md.tex, md.scale, 1);
      const spare = cat === 'sand' ? 160 : 0;
      const mesh = new THREE.InstancedMesh(box, mat, list.length + spare);
      for (let i = list.length; i < list.length + spare; i++) { mesh.setMatrixAt(i, new THREE.Matrix4().makeScale(0, 0, 0)); mesh.setColorAt(i, col.set(0xffffff)); }
      if (spare) { this.spareNext = list.length; this.spareMax = list.length + spare; }
      mesh.castShadow = true; mesh.receiveShadow = true;
      for (let i = 0; i < list.length; i++) {
        const pc = list[i];
        pc.inst = i; pc.mesh = mesh;
        if (!pc.alive) { m4.makeScale(0, 0, 0); }
        else {
          p.set((pc.minX + pc.maxX) / 2, (pc.minY + pc.maxY) / 2, (pc.minZ + pc.maxZ) / 2);
          s.set(pc.maxX - pc.minX, pc.maxY - pc.minY, pc.maxZ - pc.minZ);
          m4.compose(p, q, s);
        }
        mesh.setMatrixAt(i, m4);
        col.set(pc.color);
        mesh.setColorAt(i, col);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.computeBoundingSphere();
      scene.add(mesh);
      this.meshes[cat] = mesh;
    }
    if (this.decor.length) {
      const geo = G.merge(this.decor);
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
      triplanarPatch(mat, 'roof', 0.6, 0.6);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true; mesh.receiveShadow = true;
      scene.add(mesh);
      this.decorMesh = mesh;
      this.decor = [];
    }
  }

  // Player/bot-built sandbag wall (2 pieces), snapped to the facing axis.
  addSandbag(x, y, z, yaw) {
    const mesh = this.meshes.sand;
    if (!mesh || this.spareNext + 2 > this.spareMax) return false;
    const q = ((Math.round(yaw / (Math.PI / 2)) % 4) + 4) % 4;
    const alongX = q % 2 === 0;
    const m4 = new THREE.Matrix4(), qq = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    for (let i = 0; i < 2; i++) {
      const o = -1 + i;
      const pc = alongX ? this.piece('sand', x + o, y - 0.1, z - 0.3, x + o + 1, y + 0.95, z + 0.3, { vault: true })
        : this.piece('sand', x - 0.3, y - 0.1, z + o, x + 0.3, y + 0.95, z + o + 1, { vault: true });
      pc.inst = this.spareNext++; pc.mesh = mesh;
      p.set((pc.minX + pc.maxX) / 2, (pc.minY + pc.maxY) / 2, (pc.minZ + pc.maxZ) / 2);
      s.set(pc.maxX - pc.minX, pc.maxY - pc.minY, pc.maxZ - pc.minZ);
      m4.compose(p, qq, s);
      mesh.setMatrixAt(pc.inst, m4);
      if (this.world.nav) this.world.nav.markDirty(pc);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
    return true;
  }

  hidePiece(pc) {
    if (pc.inst < 0 || !pc.mesh) return;
    const m4 = new THREE.Matrix4().makeScale(0, 0, 0);
    pc.mesh.setMatrixAt(pc.inst, m4);
    pc.mesh.instanceMatrix.needsUpdate = true;
  }

  // Damage a piece; returns true if destroyed.
  damagePiece(pc, dmg, fx, cause) {
    if (!pc.alive || !pc.destructible) return false;
    pc.hp -= dmg;
    if (pc.hp > 0) return false;
    this.destroyPiece(pc, fx, cause);
    return true;
  }

  destroyPiece(pc, fx, cause, depth = 0) {
    if (!pc.alive) return;
    this.coll.removeBox(pc);
    this.hidePiece(pc);
    if (fx) fx.pieceDestroyed(pc, cause);
    if (this.world.nav) this.world.nav.markDirty(pc);
    // collapse unsupported pieces above
    if (depth < 12) {
      for (const a of pc.above) {
        if (!a.alive || a.grounded) continue;
        if (a.below.every(b => !b.alive)) {
          setTimeout(() => this.destroyPiece(a, fx, 'collapse', depth + 1), 60 + Math.random() * 120);
        }
      }
    }
  }

  // Apply explosion damage to pieces in radius.
  explode(x, y, z, radius, power, fx) {
    const list = [];
    this.coll.query(x - radius, z - radius, x + radius, z + radius, (b) => { if (b.destructible && b.alive) list.push(b); });
    let destroyed = 0;
    for (const b of list) {
      const cx = Math.max(b.minX, Math.min(x, b.maxX)), cy = Math.max(b.minY, Math.min(y, b.maxY)), cz = Math.max(b.minZ, Math.min(z, b.maxZ));
      const d = Math.hypot(cx - x, cy - y, cz - z);
      if (d > radius) continue;
      const dmg = power * (1 - d / radius) * (1 - d / radius * 0.5);
      if (this.damagePiece(b, dmg, fx, 'explosion')) destroyed++;
    }
    return destroyed;
  }
}
