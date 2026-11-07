import * as THREE from 'three';
import { rayBox, raySphere, closestOnBox, clamp, MinHeap, rand } from './math.js';
import { buildPod } from './models.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const HX = 72, HY = 36, HZ = 36;

export const MAPS = {
  hangar: { name: 'Hangar Bay', desc: 'Enclosed 144 m hangar. Walls everywhere to push off.', enclosed: true, bounds: [72, 36, 36], navStep: [6, 7.5], navR: 10.5, spawnX: 64, barrierX: 55.8 },
  spin: { name: 'Spin Drum', desc: 'Rotating drum station at 2.25 rpm: 0.2 g on the rim, fading to zero at the axis. Walk the floor, jump into flight, fly the core.', enclosed: true, drum: 36, omega: 0.2357, bounds: [70, 36, 36], navStep: [6, 7], navR: 10.5, spawnX: 64, barrierX: 55.8 },
  yard: { name: 'Derelict Yard', desc: 'Open orbit, 300 m across. No walls: drift too far and your suit runs out of luck.', enclosed: false, bounds: [150, 70, 70], navStep: [11, 11], navR: 19.5, spawnX: 124, barrierX: 112 },
  // A 120 m habitat wheel spinning about y. The teams spawn on opposite sides of the rim (±x) and fight
  // round two looping streets (north +z, south -z) under a ceiling deck, or cut across the low-g core.
  carousel: {
    name: 'Carousel', builder: 'carousel',
    desc: 'Habitat wheel at 1.7 rpm: 0.2 g on a looping rim street whose floor curves up into the ceiling, low-g decks above it, a zero-g hub at the centre.',
    enclosed: true, drum: 60, spinAxis: 1, omega: 0.1808, bounds: [60, 14, 60], navStep: [6, 6], navR: 9.5,
    spawnX: 56, barrierX: 52, spawnY: [-9, -3, 3, 9], spawnZ: [-14, -5, 5, 14], floorRows: [-10, -3.5, 3.5, 10], floorNodes: 64,
    patrolAny: true, menuK: 0.6, pods: [],
    pickups: [[0, -9, 57], [0, 9, -57], [26, 6, 12], [-26, 6, 12], [26, -6, -12], [-26, -6, -12]],
    hardpoints: [[0, -6, 53], [-26, 5, -14], [26, 5, -14], [0, 6, -53]],
  },
  // Close quarters: a 112 m hall packed with a 3D grid of blocks. Six-metre lanes on all three axes, a
  // junction every 16 m, two hollow rooms beside a central reactor chamber.
  warren: {
    name: 'The Warren', builder: 'warren',
    desc: 'Close quarters. A hall packed with a 3D grid of blocks: 6 m lanes on every axis, a junction every 16 m, a reactor chamber in the middle.',
    enclosed: true, bounds: [56, 24, 24], navStep: [4, 4], navR: 8.5, spawnX: 50, barrierX: 42.7, menuK: 0.2,
    pods: [[0, 7, -6], [0, -7, 6]],
    pickups: [[16, 0, 0], [-16, 0, 0], [16, 14.5, -14.5], [-16, 14.5, -14.5], [16, -14.5, 14.5], [-16, -14.5, 14.5]],
  },
  // Long range: a 300 m ship frame in a 420 m dry dock. Fight down the protected lane inside the frame
  // or along the exposed lanes outside it, between gantry towers and floating hull stock.
  drydock: {
    name: 'Dry Dock', builder: 'drydock',
    desc: 'Long range, 420 m. A half-built ship frame in a gantry: a covered lane inside the ribs, open lanes outside them. No walls past the gantry.',
    enclosed: false, bounds: [210, 60, 60], navStep: [12, 12], navR: 21, spawnX: 196, barrierX: 186, menuK: 3, surfStep: 8,
    pods: [[30, 32, 32], [-30, 32, 32], [80, -36, -32], [-80, -36, -32], [132, 30, -36], [-132, 30, -36]],
    pickups: [[40, 0, 0], [-40, 0, 0], [100, -32, 32], [-100, -32, 32], [0, 30, 0], [0, -30, 0]],
  },
};

/** Normal map from a texture's luminance (grooves and bolts read as relief). */
function normalFromCanvas(src, strength = 2.5) {
  const w = src.width, h = src.height;
  const sd = src.getContext('2d').getImageData(0, 0, w, h).data;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  const out = g.createImageData(w, h);
  const L = (x, y) => { x = (x + w) % w; y = (y + h) % h; const i = (y * w + x) * 4; return (sd[i] * 0.3 + sd[i + 1] * 0.59 + sd[i + 2] * 0.11) / 255; };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (L(x + 1, y) - L(x - 1, y)) * strength, dy = (L(x, y + 1) - L(x, y - 1)) * strength;
    const n = 1 / Math.hypot(dx, dy, 1);
    const i = (y * w + x) * 4;
    out.data[i] = (-dx * n * 0.5 + 0.5) * 255; out.data[i + 1] = (dy * n * 0.5 + 0.5) * 255; out.data[i + 2] = (n * 0.5 + 0.5) * 255; out.data[i + 3] = 255;
  }
  g.putImageData(out, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function panelMat(base, line, accent, size, cells, opts) {
  const map = panelTexture(base, line, accent, size, cells);
  return new THREE.MeshStandardMaterial({ map, normalMap: normalFromCanvas(map.image), normalScale: new THREE.Vector2(0.8, 0.8), ...opts });
}

function panelTexture(base, line, accent, size = 256, cells = 2) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  // noise
  const img = g.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 14;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
  const s = size / cells;
  g.strokeStyle = line; g.lineWidth = 3;
  for (let i = 0; i < cells; i++) for (let j = 0; j < cells; j++) {
    g.strokeRect(i * s + 3, j * s + 3, s - 6, s - 6);
    g.fillStyle = line;
    for (const [bx, by] of [[10, 10], [s - 10, 10], [10, s - 10], [s - 10, s - 10]]) {
      g.beginPath(); g.arc(i * s + bx, j * s + by, 2.5, 0, Math.PI * 2); g.fill();
    }
  }
  if (accent) {
    g.fillStyle = accent;
    g.fillRect(0, size * 0.48, size, size * 0.04);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function hazardTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#2a2d31'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#c9a227';
  for (let i = -128; i < 256; i += 32) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 16, 0); g.lineTo(i + 16 - 128, 128); g.lineTo(i - 128, 128); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function containerTexture(color) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.fillStyle = color; g.fillRect(0, 0, 256, 128);
  for (let x = 0; x < 256; x += 12) {
    g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x, 0, 4, 128);
    g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(x + 5, 0, 2, 128);
  }
  g.strokeStyle = 'rgba(0,0,0,0.5)'; g.lineWidth = 6; g.strokeRect(0, 0, 256, 128);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function contMat(color) {
  const map = containerTexture(color);
  return new THREE.MeshStandardMaterial({ map, normalMap: normalFromCanvas(map.image, 3), roughness: 0.7, metalness: 0.45 });
}

function planetTexture() {
  const W = 1024, H = 512;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#123a6b'; g.fillRect(0, 0, W, H);
  // continents: blobs
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * W, y = H * 0.15 + Math.random() * H * 0.7, r = 10 + Math.random() * 70;
    g.fillStyle = Math.random() < 0.5 ? '#3d6b35' : '#7a6a45';
    g.globalAlpha = 0.85;
    g.beginPath(); g.ellipse(x, y, r * 1.6, r, Math.random() * 3, 0, Math.PI * 2); g.fill();
  }
  // ice caps
  g.globalAlpha = 1; g.fillStyle = '#e8eef5';
  g.fillRect(0, 0, W, H * 0.06); g.fillRect(0, H * 0.94, W, H * 0.06);
  // clouds
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * W, y = Math.random() * H, r = 6 + Math.random() * 40;
    g.globalAlpha = 0.25 + Math.random() * 0.35; g.fillStyle = '#ffffff';
    g.beginPath(); g.ellipse(x, y, r * 2.5, r * 0.6, 0, 0, Math.PI * 2); g.fill();
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function boxGeo(sx, sy, sz, tile) {
  const geo = new THREE.BoxGeometry(sx, sy, sz);
  const uv = geo.attributes.uv;
  // face order: px, nx, py, ny, pz, nz (4 verts each)
  const dims = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]];
  for (let f = 0; f < 6; f++) {
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      uv.setXY(i, uv.getX(i) * dims[f][0] / tile, uv.getY(i) * dims[f][1] / tile);
    }
  }
  return geo;
}

export class World {
  constructor(scene, mapId = 'hangar') {
    this.scene = scene;
    this.mapId = MAPS[mapId] ? mapId : 'hangar';
    this.def = MAPS[this.mapId];
    this.enclosed = this.def.enclosed;
    this.drum = this.def.drum || 0;          // radius of a spinning drum hull about the spin axis, 0 if none
    this.omega = this.def.omega || 0;        // spin rate (rad/s): centrifugal + Coriolis in the rotating frame
    // spin axis (0 = x, 1 = y); u, v span the plane of rotation and angles run from u toward v
    this.axis = this.def.spinAxis || 0;
    this.au = (this.axis + 1) % 3; this.av = (this.axis + 2) % 3;
    // flat hull walls: every face of an enclosed box hall, only the end caps of a drum
    this.hullAxes = this.drum ? [this.axis] : this.enclosed ? [0, 1, 2] : [];
    const B = this.def.bounds;
    this.bounds = { min: [-B[0], -B[1], -B[2]], max: [B[0], B[1], B[2]] };
    this.boxes = [];
    this.spheres = [];
    this.arcs = [];
    this.pods = [];
    this.group = new THREE.Group();
    scene.add(this.group);
    this._hit = { t: 0, n: new THREE.Vector3(), kind: '', obj: null };
    this._rb = { n: [0, 0, 0] };
    this._arcN = new THREE.Vector3();
    this._arcP = new THREE.Vector3();
    this.mats = {
      hull: panelMat('#59616a', '#3a4047', null, 256, 2, { roughness: 0.8, metalness: 0.4 }),
      hullBlue: panelMat('#3d5470', '#26364a', '#3f8cff', 256, 2, { roughness: 0.75, metalness: 0.4 }),
      hullOrange: panelMat('#6e5440', '#4a3626', '#ff8a2a', 256, 2, { roughness: 0.75, metalness: 0.4 }),
      deck: panelMat('#3e4349', '#2b2f33', '#c9a227', 256, 4, { roughness: 0.85, metalness: 0.35 }),
      ceil: panelMat('#7c848c', '#5c636a', null, 256, 4, { roughness: 0.8, metalness: 0.35 }),
      steel: panelMat('#80878e', '#5a6067', null, 128, 1, { roughness: 0.5, metalness: 0.7 }),
      girder: new THREE.MeshStandardMaterial({ map: hazardTexture(), roughness: 0.7, metalness: 0.5 }),
      cRed: contMat('#8c3a2b'),
      cTeal: contMat('#2b6f73'),
      cYel: contMat('#a88a2c'),
      cGrey: contMat('#5b6168'),
      stripW: new THREE.MeshBasicMaterial({ color: new THREE.Color(0xcfe6ff).multiplyScalar(1.8) }),
      stripB: new THREE.MeshBasicMaterial({ color: new THREE.Color(0x3f8cff).multiplyScalar(1.8) }),
      stripO: new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff8a2a).multiplyScalar(1.8) }),
      glyphB: new THREE.MeshBasicMaterial({ color: 0x1d4a8a }),
      glyphO: new THREE.MeshBasicMaterial({ color: 0x8a4a16 }),
    };
    const builder = this.def.builder;
    if (builder === 'carousel') this.buildCarousel();
    else if (builder === 'warren') this.buildWarren();
    else if (builder === 'drydock') this.buildDryDock();
    else if (this.drum) this.buildDrum();
    else if (this.enclosed) { this.buildHull(); this.buildInterior(); }
    else this.buildYard();
    this.buildSpace();
    this.buildPods();
    this.buildNav();
    this.spawns = [this.makeSpawns(-1), this.makeSpawns(1)];
    this.buildBarriers();
    this.pickupSpots = this.makePickupSpots();
  }

  // ---------- Rotating frame ----------
  /** Centrifugal acceleration (outward from the spin axis), zero on non-spinning maps. */
  gravityAt(p, out) {
    if (!this.omega) return out.set(0, 0, 0);
    const w2 = this.omega * this.omega;
    return out.copy(p).multiplyScalar(w2).setComponent(this.axis, 0);
  }

  /** Coriolis acceleration -2 Ω×v, Ω along the spin axis. */
  coriolis(v, out) {
    if (!this.omega) return out.set(0, 0, 0);
    const k = 2 * this.omega;
    return this.axis === 1 ? out.set(-k * v.z, 0, k * v.x) : out.set(0, k * v.z, -k * v.y);
  }

  /** "Up" on the drum floor: toward the axis. */
  upAt(p, out) {
    out.copy(p).setComponent(this.axis, 0);
    const r = out.length();
    return r > 1e-6 ? out.multiplyScalar(-1 / r) : out.set(0, 0, 0).setComponent(this.au, 1);
  }

  /** Distance from the spin axis. */
  radial(p) { return Math.hypot(p.getComponent(this.au), p.getComponent(this.av)); }

  /**
   * Spawn orientation for maps where "up" isn't +y at the spawn: stand upright on the drum floor, facing
   * along the street toward the nearer bay exit. Null keeps the default (facing the enemy, +y up).
   */
  spawnPose(p) {
    if (!this.omega || this.axis === 0) return null;
    const up = this.upAt(p, new THREE.Vector3());
    const f = new THREE.Vector3(0, 0, p.z >= 0 ? 1 : -1);
    f.addScaledVector(up, -f.dot(up)).normalize();
    return { facing: f, up };
  }

  buildDrum() {
    const M = this.mats, R = this.drum, HXd = this.def.bounds[0];
    // shell: three panel bands with two window bands between them (stars wheel past outside)
    const shell = (x0, x1, mat, glass = false) => {
      const g = new THREE.CylinderGeometry(R, R, x1 - x0, 72, 1, true);
      g.rotateZ(Math.PI / 2);
      const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (2 * Math.PI * R) / 8, uv.getY(i) * (x1 - x0) / 8);
      const m = new THREE.Mesh(g, glass ? new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.06, side: THREE.BackSide, depthWrite: false }) : mat);
      if (!glass) { m.material = mat.clone(); m.material.side = THREE.BackSide; m.receiveShadow = true; }
      m.position.x = (x0 + x1) / 2;
      this.group.add(m);
    };
    shell(-HXd, -34, M.deck); shell(-34, -26, null, true); shell(-26, 26, M.deck); shell(26, 34, null, true); shell(34, HXd, M.deck);
    for (const x of [-34, -26, 26, 34]) { const r = new THREE.Mesh(new THREE.TorusGeometry(R - 0.2, 0.35, 8, 96), M.steel); r.rotation.y = Math.PI / 2; r.position.x = x; this.group.add(r); }
    for (const x of [-56, -45, -12, 0, 12, 45, 56]) { const r = new THREE.Mesh(new THREE.TorusGeometry(R - 0.1, 0.18, 6, 96), M.steel); r.rotation.y = Math.PI / 2; r.position.x = x; this.group.add(r); }
    // end caps (team colours)
    for (const s of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.CircleGeometry(R, 72), (s < 0 ? M.hullBlue : M.hullOrange).clone());
      cap.material.side = THREE.DoubleSide;
      cap.rotation.y = s < 0 ? Math.PI / 2 : -Math.PI / 2; cap.position.x = s * HXd; cap.receiveShadow = true;
      this.group.add(cap);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(R * 0.6, 0.25, 6, 64), s < 0 ? M.stripB : M.stripO);
      ring.rotation.y = Math.PI / 2; ring.position.x = s * (HXd - 0.2); this.group.add(ring);
    }
    // light strips along the floor in the four cardinal "streets"
    for (let k = 0; k < 8; k++) {
      const a = k / 8 * Math.PI * 2;
      const m = new THREE.Mesh(new THREE.BoxGeometry(2 * HXd - 10, 0.08, 0.25), k % 2 ? M.stripW : (k < 4 ? M.stripB : M.stripO));
      m.position.set(0, Math.cos(a) * (R - 0.05), Math.sin(a) * (R - 0.05));
      m.rotation.x = a;
      this.group.add(m);
    }
    // ---- floor cover in the four cardinal streets (axis-aligned boxes standing on the rim) ----
    const floorBox = (dir, x0, x1, lat, w, h, mat) => {
      // dir: 0 = -y floor, 1 = +y, 2 = -z, 3 = +z (floor point at that cardinal)
      const ax = dir < 2 ? 1 : 2, s = dir % 2 === 0 ? -1 : 1, lax = ax === 1 ? 2 : 1;
      const min = [x0, 0, 0], max = [x1, 0, 0];
      const floor = s * R, inner = s * (R - h);
      min[ax] = Math.min(floor + s * 1.5, inner); max[ax] = Math.max(floor + s * 1.5, inner);
      min[lax] = lat - w / 2; max[lax] = lat + w / 2;
      this.addBox(min, max, mat, { tile: 3 });
    };
    const C = [M.cRed, M.cTeal, M.cYel, M.cGrey];
    for (let dir = 0; dir < 4; dir++) {
      for (const sx of [-1, 1]) {
        const X = (a, b) => (sx > 0 ? [a, b] : [-b, -a]);
        floorBox(dir, ...X(10, 11), 0, 7, 1.5, M.steel);           // low wall across the street
        floorBox(dir, ...X(18, 20.5), 5, 2.5, 2.5, C[dir]);        // crate
        floorBox(dir, ...X(19, 21.5), -6, 2.5, 2.5, C[(dir + 1) % 4]);
        floorBox(dir, ...X(30, 31), (dir % 2 ? 4 : -4), 6, 1.6, M.steel);
        floorBox(dir, ...X(38, 48), (dir % 2 ? -5 : 5), 7, 5, M.hull);   // two-storey block
        floorBox(dir, ...X(50, 51.2), 0, 10, 2.2, M.steel);
      }
    }
    // more street cover: barricades and crate stacks between the existing pieces
    for (let dir = 0; dir < 4; dir++) {
      for (const sx of [-1, 1]) {
        const X = (a, b) => (sx > 0 ? [a, b] : [-b, -a]);
        floorBox(dir, ...X(4, 5.2), (dir % 2 ? -5 : 5), 4, 1.8, M.steel);
        floorBox(dir, ...X(14, 16.5), (dir % 2 ? 6 : -6), 2.5, 3.5, C[(dir + 2) % 4]);
        floorBox(dir, ...X(24, 25.2), 0, 5, 1.6, M.steel);
        floorBox(dir, ...X(26, 28.5), (dir % 2 ? -7 : 7), 2.5, 2.5, C[(dir + 3) % 4]);
        floorBox(dir, ...X(34, 36.5), 3, 2.5, 2.5, C[dir]);
        floorBox(dir, ...X(34, 36.5), -3, 2.5, 5, C[(dir + 1) % 4]);
      }
    }
    // crates half-buried in the curved floor between the streets (45 deg sectors)
    const C2 = [M.cGrey, M.cRed, M.cTeal, M.cYel];
    for (let k = 0; k < 4; k++) {
      const a = Math.PI / 4 + k * Math.PI / 2;
      const cy = Math.cos(a) * (R - 1.3), cz = Math.sin(a) * (R - 1.3);
      for (const x of [-46, -32, -16, -6, 6, 16, 32, 46]) {
        const h = 1.4 + ((k + Math.abs(x)) % 3) * 0.4;
        this.addBox([x - 1.4, cy - h, cz - h], [x + 1.4, cy + h, cz + h], C2[(k + (x > 0 ? 1 : 0)) % 4], { tile: 3 });
      }
    }
    // plates that break the long axial sightlines (offset from the axis truss)
    this.addMirrored([40, -7, 2], [40.5, 1, 10], M.steel, M.steel, { tile: 3 });
    this.addMirrored([40, -1, -10], [40.5, 7, -2], M.steel, M.steel, { tile: 3 });
    this.addMirrored([50, 4, 4], [50.5, 12, 12], M.steel, M.steel, { tile: 3 });
    this.addMirrored([50, -12, -12], [50.5, -4, -4], M.steel, M.steel, { tile: 3 });
    this.addMirrored([17, 3, -5], [19.6, 5.6, -2.4], M.cYel, M.cTeal, { tile: 3 });
    this.addMirrored([17, -5.6, 2.4], [19.6, -3, 5], M.cRed, M.cGrey, { tile: 3 });
    // mid-air cover between the core and the floor (r ~ 16-24): floating crates and plates
    for (const sx of [-1, 1]) {
      for (let k = 0; k < 6; k++) {
        const a = k / 6 * Math.PI * 2 + (sx > 0 ? 0.3 : 0.8), rr = 17 + (k % 3) * 3;
        const y = Math.cos(a) * rr, z = Math.sin(a) * rr, x = sx * (10 + (k % 3) * 11);
        if (k % 2) this.addBox([x - 1.3, y - 1.3, z - 1.3], [x + 1.3, y + 1.3, z + 1.3], C2[k % 4], { tile: 3 });
        else this.addBox([x - 0.25, y - 3, z - 3], [x + 0.25, y + 3, z + 3], M.steel, { tile: 3 });
      }
    }
    // ---- zero-g core: hub, spokes, floating platforms ----
    this.addBox([-5, -4, -4], [5, 4, 4], M.hull, { tile: 4 });
    this.addBox([-1, -1, -1], [1, 1, 1], null);
    for (const x of [-24, 24]) {
      this.addBox([x - 0.6, 4, -0.6], [x + 0.6, R + 1, 0.6], M.girder, { tile: 2 });
      this.addBox([x - 0.6, -R - 1, -0.6], [x + 0.6, -4, 0.6], M.girder, { tile: 2 });
      this.addBox([x - 0.6, -0.6, 4], [x + 0.6, 0.6, R + 1], M.girder, { tile: 2 });
      this.addBox([x - 0.6, -0.6, -R - 1], [x + 0.6, 0.6, -4], M.girder, { tile: 2 });
      this.addBox([x - 3, -3, -3], [x + 3, 3, 3], M.steel, { tile: 3 });
    }
    this.addBox([-1.2, -1.2, -1.2], [1.2, 1.2, 1.2], null);
    // axial truss through the core
    this.addMirrored([5, -0.5, -0.5], [21, 0.5, 0.5], M.girder, M.girder, { tile: 2 });
    this.addMirrored([27, -0.5, -0.5], [44, 0.5, 0.5], M.girder, M.girder, { tile: 2 });
    // floating platforms (low gravity decks facing the axis) and cover plates near the centre
    this.addMirrored([6, -11.4, -5], [16, -11, 5], M.steel, M.steel, { tile: 3 });
    this.addMirrored([6, 11, -5], [16, 11.4, 5], M.steel, M.steel, { tile: 3 });
    this.addMirrored([30, -5, -12.4], [40, 5, -12], M.steel, M.steel, { tile: 3 });
    this.addMirrored([30, -5, 12], [40, 5, 12.4], M.steel, M.steel, { tile: 3 });
    this.addMirrored([12, 5, 7], [14.6, 7.6, 9.6], M.cYel, M.cTeal, { tile: 3 });
    this.addMirrored([34, -9, -8], [36.6, -6.4, -5.4], M.cRed, M.cGrey, { tile: 3 });
    // spawn bulkheads at the caps (rings with openings)
    for (const sx of [-1, 1]) {
      const X = sx > 0 ? [55, 56.6] : [-56.6, -55];
      for (let k = 0; k < 8; k++) {
        const a = (k + 0.5) / 8 * Math.PI * 2;
        const c = Math.cos(a) * 26, d = Math.sin(a) * 26;
        this.addBox([X[0], c - 4, d - 4], [X[1], c + 4, d + 4], sx > 0 ? M.hullOrange : M.hullBlue, { tile: 3 });
      }
    }
    // lighting: soft fill, axial lamps, team glows
    this.group.add(new THREE.HemisphereLight(0xc8d8ff, 0x3a3630, 1.0));
    const sun = new THREE.DirectionalLight(0xfff0dd, 1.6); sun.position.set(0.3, 1, 0.4); this.group.add(sun);
    this.sun = sun;
    for (const x of [-40, 0, 40]) { const l = new THREE.PointLight(0xe8f0ff, 70, 70, 1); l.position.set(x, 0, 0); this.group.add(l); }
    const lb = new THREE.PointLight(0x3f8cff, 30, 40, 1); lb.position.set(-62, 0, 0); this.group.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 30, 40, 1); lo.position.set(62, 0, 0); this.group.add(lo);
  }

  // ---------- Spawn shields ----------
  /** Plane |x| = barrierX closes off each team's spawn bay: blue at -x, orange at +x. */
  buildBarriers() {
    this.barrierX = this.def.barrierX;
    const B = this.def.bounds;
    this.barriers = [];
    for (const team of [0, 1]) {
      const col = new THREE.Color(team === 0 ? 0x3f8cff : 0xff8a2a);
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
        uniforms: { time: { value: 0 }, color: { value: col }, flash: { value: 0 } },
        vertexShader: 'varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
        fragmentShader: `uniform float time; uniform vec3 color; uniform float flash; varying vec2 vUv; varying vec3 vW;
          float hex(vec2 p){ p.x *= 1.1547; p.y += mod(floor(p.x), 2.0)*0.5; p = abs(fract(p) - 0.5); return abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0); }
          void main(){
            vec2 p = vW.zy * 0.45;
            float h = smoothstep(0.08, 0.0, hex(p));
            float scan = 0.5 + 0.5*sin(vW.y*0.6 - time*2.0);
            float edge = smoothstep(0.0, 0.04, vUv.x) * smoothstep(0.0, 0.04, 1.0 - vUv.x) * smoothstep(0.0, 0.04, vUv.y) * smoothstep(0.0, 0.04, 1.0 - vUv.y);
            float a = (0.035 + h*0.16*(0.6 + 0.4*scan) + flash*0.25) * edge;
            gl_FragColor = vec4(color*1.6, a);
          }`,
      });
      // the shield fills the hall's cross-section at |x| = barrierX: a disc across a drum spinning about x,
      // a chord-cut rectangle across a wheel spinning about y, the whole bounds face otherwise
      const geo = this.drum && this.axis === 0 ? new THREE.CircleGeometry(this.drum, 64)
        : this.drum ? new THREE.PlaneGeometry(2 * Math.sqrt(Math.max(1, this.drum * this.drum - this.barrierX * this.barrierX)), 2 * B[1])
        : new THREE.PlaneGeometry(2 * B[2], 2 * B[1]);
      const m = new THREE.Mesh(geo, mat);
      m.rotation.y = Math.PI / 2;
      m.position.set((team === 0 ? -1 : 1) * this.barrierX, 0, 0);
      m.renderOrder = 5;
      this.group.add(m);
      this.barriers.push({ mesh: m, mat, team });
    }
  }

  /** True when p is inside the spawn bay that protects `team`. */
  inSpawn(p, team) { return team === 0 ? p.x < -this.barrierX : p.x > this.barrierX; }

  /** If segment a->b crosses into `team`'s spawn bay, returns the fraction along it, else -1. */
  barrierCross(a, b, team) {
    const X = team === 0 ? -this.barrierX : this.barrierX;
    const da = a.x - X, db = b.x - X;
    const inside = (v) => (team === 0 ? v < 0 : v > 0);
    if (inside(da) || !inside(db)) return -1;
    return da / (da - db);
  }

  updateBarriers(time) { for (const b of this.barriers) { b.mat.uniforms.time.value = time; b.mat.uniforms.flash.value *= 0.9; } }

  // ---------- Ammo depots ----------
  makePickupSpots() {
    if (this.def.pickups) return this.def.pickups.map(([x, y, z]) => this.nav[this.nearestNode(new THREE.Vector3(x, y, z), false)].pos.clone());
    const k = this.def.bounds[0] / 72, ky = this.def.bounds[1] / 36;
    const half = this.drum
      ? [[24, 0, -9], [15, -33, 0], [42, 0, 33]]
      : this.enclosed
      ? [[30, 18, 2], [12, -16, 26], [40, -6, -22]]
      : [[60, 12, 14], [40, 30, -30], [90, -22, 24]];
    const pts = [];
    for (const [x, y, z] of half) { pts.push([x, y, z], [-x, -y, -z]); }
    pts.push(this.drum ? [0, 0, 9] : this.enclosed ? [0, 26, -14] : [0, 40, 12], this.drum ? [0, 33, 0] : this.enclosed ? [0, -26, 14] : [0, -40, -12]);
    void k; void ky;
    return pts.map(([x, y, z]) => {
      const i = this.nearestNode(new THREE.Vector3(x, y, z), false);
      return this.nav[i].pos.clone();
    });
  }

  dispose() { this.scene.remove(this.group); }

  addBox(min, max, mat, opts = {}) {
    const b = { min, max, kind: opts.kind || 'box' };
    this.boxes.push(b);
    if (mat) {
      const sx = max[0] - min[0], sy = max[1] - min[1], sz = max[2] - min[2];
      const mesh = new THREE.Mesh(boxGeo(sx, sy, sz, opts.tile || 4), mat);
      mesh.position.set((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.group.add(mesh);
      b.mesh = mesh;
    }
    return b;
  }

  // Mirror helper: adds box and its mirror across x=0
  addMirrored(min, max, matPos, matNeg, opts) {
    this.addBox(min, max, matPos, opts);
    this.addBox([-max[0], min[1], min[2]], [-min[0], max[1], max[2]], matNeg || matPos, opts);
  }

  // ---------- Arc solids ----------
  // An annular sector about the spin axis: angles a0..a1 (degrees, measured from the u axis toward v),
  // radii r0..r1 and axial span h0..h1. On a spinning station these follow the curve of the floor, so
  // ceilings, bulkheads and street cover line up with the rim instead of jutting out of it.
  addArc(a0d, a1d, r0, r1, h0, h1, mat, opts = {}) {
    const TAU = Math.PI * 2;
    let a0 = a0d * Math.PI / 180, span = (a1d - a0d) * Math.PI / 180;
    const full = span >= TAU - 1e-6;
    if (full) { a0 = 0; span = TAU; }
    if (!full && span > Math.PI) throw new Error('arc span must be under 180 degrees (split it)');
    a0 = ((a0 % TAU) + TAU) % TAU;
    const A = { kind: 'arc', a0, span, full, r0, r1, h0, h1, min: [0, 0, 0], max: [0, 0, 0] };
    if (opts.deco) { // visual only: no collision
      const mesh = new THREE.Mesh(this.arcGeo(A, opts.tile || 4), mat);
      mesh.receiveShadow = true; this.group.add(mesh);
      return A;
    }
    // axis-aligned bounds: the corners plus any quarter-turn the arc sweeps through
    const ax = this.axis, u = this.au, v = this.av;
    let umin = Infinity, umax = -Infinity, vmin = Infinity, vmax = -Infinity;
    const take = (ang, rr) => { const cu = Math.cos(ang) * rr, cv = Math.sin(ang) * rr; umin = Math.min(umin, cu); umax = Math.max(umax, cu); vmin = Math.min(vmin, cv); vmax = Math.max(vmax, cv); };
    if (full) { umin = vmin = -r1; umax = vmax = r1; }
    else {
      for (const rr of [r0, r1]) { take(a0, rr); take(a0 + span, rr); }
      for (let q = Math.ceil(a0 / (Math.PI / 2)) * Math.PI / 2; q < a0 + span; q += Math.PI / 2) take(q, r1);
    }
    A.min[u] = umin; A.max[u] = umax; A.min[v] = vmin; A.max[v] = vmax; A.min[ax] = h0; A.max[ax] = h1;
    this.arcs.push(A);
    if (mat) {
      const mesh = new THREE.Mesh(this.arcGeo(A, opts.tile || 4), mat);
      mesh.castShadow = opts.shadow !== false; mesh.receiveShadow = true;
      this.group.add(mesh);
      A.mesh = mesh;
    }
    return A;
  }

  /** Arc mirrored across x = 0 (the team mirror): on a wheel spinning about y that's angle -> -angle. */
  addArcMirrored(a0d, a1d, r0, r1, h0, h1, matPos, matNeg, opts) {
    this.addArc(a0d, a1d, r0, r1, h0, h1, matPos, opts);
    if (this.axis === 1) this.addArc(-a1d, -a0d, r0, r1, h0, h1, matNeg || matPos, opts);
  }

  /** Extruded annular sector, laid out with shape x -> u, shape y -> v, extrusion -> spin axis. */
  arcGeo(A, tile) {
    const shape = new THREE.Shape();
    const a1 = A.a0 + A.span;
    if (A.full) {
      shape.absarc(0, 0, A.r1, 0, Math.PI * 2, false);
      if (A.r0 > 0) { const hole = new THREE.Path(); hole.absarc(0, 0, A.r0, 0, Math.PI * 2, true); shape.holes.push(hole); }
    } else {
      shape.moveTo(Math.cos(A.a0) * A.r1, Math.sin(A.a0) * A.r1);
      shape.absarc(0, 0, A.r1, A.a0, a1, false);
      if (A.r0 > 0) { shape.lineTo(Math.cos(a1) * A.r0, Math.sin(a1) * A.r0); shape.absarc(0, 0, A.r0, a1, A.a0, true); }
      else shape.lineTo(0, 0);
      shape.closePath();
    }
    const segs = Math.max(2, Math.ceil(A.span * A.r1 / 4)); // arcs get 2x this many segments: about 2 m each
    const g = new THREE.ExtrudeGeometry(shape, { depth: A.h1 - A.h0, bevelEnabled: false, curveSegments: segs });
    g.translate(0, 0, A.h0);
    // permute (x, y, z) -> world (u, v, axis); (axis, u, v) is a cyclic order, so winding is kept
    const pa = g.attributes.position, na = g.attributes.normal;
    const ax = this.axis, u = this.au, v = this.av, t = [0, 0, 0];
    for (const at of [pa, na]) for (let i = 0; i < at.count; i++) {
      t[u] = at.getX(i); t[v] = at.getY(i); t[ax] = at.getZ(i);
      at.setXYZ(i, t[0], t[1], t[2]);
    }
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / tile, uv.getY(i) / tile);
    g.computeBoundingSphere();
    return g;
  }

  /**
   * Closest point of an arc solid to p. Returns the distance (outside) or minus the penetration depth
   * (inside); outP gets the surface point, outN the outward normal there.
   */
  arcProbe(p, A, outP, outN) {
    const ax = this.axis, u = this.au, v = this.av;
    const pu = p.getComponent(u), pv = p.getComponent(v), ph = p.getComponent(ax);
    const r = Math.hypot(pu, pv), TAU = Math.PI * 2;
    const th = Math.atan2(pv, pu);
    const d = A.full ? 0 : (((th - A.a0) % TAU) + TAU) % TAU;
    if (A.full || d <= A.span) {
      let cu, cv;
      if (r > 1e-9) { cu = pu / r; cv = pv / r; } else { const m = A.a0 + A.span / 2; cu = Math.cos(m); cv = Math.sin(m); }
      const rc = clamp(r, A.r0, A.r1), hc = clamp(ph, A.h0, A.h1);
      if (rc !== r || hc !== ph) {
        outP.set(0, 0, 0).setComponent(u, cu * rc).setComponent(v, cv * rc).setComponent(ax, hc);
        outN.subVectors(p, outP);
        const dist = outN.length();
        if (dist > 1e-9) outN.divideScalar(dist); else outN.set(0, 0, 0).setComponent(u, cu).setComponent(v, cv);
        return dist;
      }
      // inside: leave through the nearest face
      let best = A.r1 - r, nu = cu, nv = cv, nh = 0;
      if (A.r0 > 0 && r - A.r0 < best) { best = r - A.r0; nu = -cu; nv = -cv; }
      if (ph - A.h0 < best) { best = ph - A.h0; nu = 0; nv = 0; nh = -1; }
      if (A.h1 - ph < best) { best = A.h1 - ph; nu = 0; nv = 0; nh = 1; }
      if (!A.full) {
        const d0 = r * Math.sin(Math.min(d, Math.PI / 2)), d1 = r * Math.sin(Math.min(A.span - d, Math.PI / 2));
        if (d0 < best) { best = d0; nu = Math.sin(A.a0); nv = -Math.cos(A.a0); nh = 0; }
        if (d1 < best) { const a1 = A.a0 + A.span; best = d1; nu = -Math.sin(a1); nv = Math.cos(a1); nh = 0; }
      }
      outN.set(0, 0, 0).setComponent(u, nu).setComponent(v, nv).setComponent(ax, nh);
      outP.copy(p).addScaledVector(outN, best);
      return -best;
    }
    // outside the angular range: the nearest point is on one of the two end faces
    let bestD = Infinity;
    for (const ang of [A.a0, A.a0 + A.span]) {
      const c = Math.cos(ang), sn = Math.sin(ang);
      const sr = clamp(pu * c + pv * sn, A.r0, A.r1), hc = clamp(ph, A.h0, A.h1);
      const qu = c * sr, qv = sn * sr;
      const dd = Math.hypot(pu - qu, pv - qv, ph - hc);
      if (dd < bestD) { bestD = dd; outP.set(0, 0, 0).setComponent(u, qu).setComponent(v, qv).setComponent(ax, hc); }
    }
    outN.subVectors(p, outP);
    if (bestD > 1e-9) outN.divideScalar(bestD);
    return bestD;
  }

  /**
   * Ray vs arc solid grown by g (g > 0 for swept-sphere tests). Returns the entry distance, 0 when the
   * ray starts inside, or -1 for a miss. n (optional) gets the surface normal at the hit.
   */
  rayArc(o, d, A, maxT, g, n) {
    const ax = this.axis, u = this.au, v = this.av, TAU = Math.PI * 2;
    const ou = o.getComponent(u), ov = o.getComponent(v), oh = o.getComponent(ax);
    const du = d.getComponent(u), dv = d.getComponent(v), dh = d.getComponent(ax);
    const r0 = Math.max(0, A.r0 - g), r1 = A.r1 + g, h0 = A.h0 - g, h1 = A.h1 + g;
    const ga = A.full ? 0 : Math.min(0.5, g / Math.max(A.r0, 2));
    const a0 = A.a0 - ga, span = A.span + 2 * ga;
    const inAng = (pu, pv) => A.full || (((Math.atan2(pv, pu) - a0) % TAU) + TAU) % TAU <= span;
    // starting inside counts as an immediate hit (as rayBox does)
    const or = Math.hypot(ou, ov);
    if (or >= r0 && or <= r1 && oh >= h0 && oh <= h1 && inAng(ou, ov)) {
      if (n) n.copy(d).negate();
      return 0;
    }
    let best = maxT, bu = 0, bv = 0, bh = 0, hit = false;
    const a = du * du + dv * dv, b = ou * du + ov * dv;
    if (a > 1e-12) {
      // outer face: entering root
      let disc = b * b - a * (ou * ou + ov * ov - r1 * r1);
      if (disc >= 0) {
        const t = (-b - Math.sqrt(disc)) / a;
        if (t >= 0 && t < best) {
          const hh = oh + dh * t, pu = ou + du * t, pv = ov + dv * t;
          if (hh >= h0 && hh <= h1 && inAng(pu, pv)) { best = t; hit = true; bu = pu / r1; bv = pv / r1; bh = 0; }
        }
      }
      // inner face: where the ray leaves the hole in the middle
      if (r0 > 0) {
        disc = b * b - a * (ou * ou + ov * ov - r0 * r0);
        if (disc >= 0) {
          const t = (-b + Math.sqrt(disc)) / a;
          if (t >= 0 && t < best) {
            const hh = oh + dh * t, pu = ou + du * t, pv = ov + dv * t;
            if (hh >= h0 && hh <= h1 && inAng(pu, pv)) { best = t; hit = true; bu = -pu / r0; bv = -pv / r0; bh = 0; }
          }
        }
      }
    }
    if (Math.abs(dh) > 1e-12) {
      const t = dh > 0 ? (h0 - oh) / dh : (h1 - oh) / dh;
      if (t >= 0 && t < best) {
        const pu = ou + du * t, pv = ov + dv * t, rr = Math.hypot(pu, pv);
        if (rr >= r0 && rr <= r1 && inAng(pu, pv)) { best = t; hit = true; bu = 0; bv = 0; bh = dh > 0 ? -1 : 1; }
      }
    }
    if (!A.full) for (const [ang, sgn] of [[A.a0, -1], [A.a0 + A.span, 1]]) {
      const c = Math.cos(ang), sn = Math.sin(ang), nu = -sn * sgn, nv = c * sgn;
      const dn = du * nu + dv * nv;
      if (dn >= -1e-12) continue;
      const t = (g - (ou * nu + ov * nv)) / dn;
      if (t < 0 || t >= best) continue;
      const pu = ou + du * t, pv = ov + dv * t, hh = oh + dh * t;
      const sr = pu * c + pv * sn;
      if (sr >= r0 && sr <= r1 && hh >= h0 && hh <= h1) { best = t; hit = true; bu = nu; bv = nv; bh = 0; }
    }
    if (!hit) return -1;
    if (n) n.set(0, 0, 0).setComponent(u, bu).setComponent(v, bv).setComponent(ax, bh);
    return best;
  }

  strip(x0, y0, z0, x1, y1, z1, mat) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(Math.max(0.05, x1 - x0), Math.max(0.05, y1 - y0), Math.max(0.05, z1 - z0)), mat);
    m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    this.group.add(m);
    return m;
  }

  buildHull() {
    const T = 1;
    const g = this.group;
    const wall = (sx, sy, sz, x, y, z, mat, tile = 6) => {
      const m = new THREE.Mesh(boxGeo(sx, sy, sz, tile), mat);
      m.position.set(x, y, z); m.receiveShadow = true; g.add(m); return m;
    };
    // x walls (team ends)
    wall(T, 2 * HY, 2 * HZ, -HX - T / 2, 0, 0, this.mats.hullBlue, 8);
    wall(T, 2 * HY, 2 * HZ, HX + T / 2, 0, 0, this.mats.hullOrange, 8);
    // y walls
    wall(2 * HX, T, 2 * HZ, 0, -HY - T / 2, 0, this.mats.deck, 8);
    wall(2 * HX, T, 2 * HZ, 0, HY + T / 2, 0, this.mats.ceil, 8);
    // z walls with windows (opening x in [-30,30], y in [-11,11])
    for (const s of [-1, 1]) {
      const z = s * (HZ + T / 2);
      wall(2 * HX, HY - 11, T, 0, (HY + 11) / 2, z, this.mats.hull, 8);
      wall(2 * HX, HY - 11, T, 0, -(HY + 11) / 2, z, this.mats.hull, 8);
      wall(HX - 30, 22, T, -(HX + 30) / 2, 0, z, this.mats.hull, 8);
      wall(HX - 30, 22, T, (HX + 30) / 2, 0, z, this.mats.hull, 8);
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(60, 22),
        new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.07, side: THREE.DoubleSide, depthWrite: false }));
      glass.position.set(0, 0, s * HZ); g.add(glass);
      // window frame strips
      this.strip(-30.3, 11, s * HZ - 0.2, 30.3, 11.3, s * HZ + 0.2, this.mats.stripW);
      this.strip(-30.3, -11.3, s * HZ - 0.2, 30.3, -11, s * HZ + 0.2, this.mats.stripW);
      for (let x = -30; x <= 30; x += 15) this.strip(x - 0.25, -11, s * HZ - 0.3, x + 0.25, 11, s * HZ + 0.3, this.mats.steel);
    }
    // Structural rib rings (colliders too)
    for (const x0 of [-48, -24, 24, 48]) {
      const a = x0 - 0.7, b = x0 + 0.7, d = 1.6;
      const m = this.mats.steel;
      this.addBox([a, -HY, -HZ], [b, -HY + d, HZ], m, { tile: 2 });
      this.addBox([a, HY - d, -HZ], [b, HY, HZ], m, { tile: 2 });
      this.addBox([a, -HY + d, -HZ], [b, HY - d, -HZ + d], m, { tile: 2 });
      this.addBox([a, -HY + d, HZ - d], [b, HY - d, HZ], m, { tile: 2 });
      const sm = x0 < 0 ? this.mats.stripB : this.mats.stripO;
      this.strip(x0 - 0.1, -HY + d, -HZ + 4, x0 + 0.1, -HY + d + 0.06, HZ - 4, sm);
      this.strip(x0 - 0.1, HY - d - 0.06, -HZ + 4, x0 + 0.1, HY - d, HZ - 4, sm);
    }
    // deck & ceiling light strips along x
    for (const z of [-20, 0, 20]) {
      this.strip(-HX + 2, -HY + 0.02, z - 0.15, HX - 2, -HY + 0.08, z + 0.15, this.mats.stripW);
      this.strip(-HX + 2, HY - 0.08, z - 0.15, HX - 2, HY - 0.02, z + 0.15, this.mats.stripW);
    }
    // team wall glyphs (big emissive bars) to help orientation
    for (const s of [-1, 1]) {
      const mat = s < 0 ? this.mats.stripB : this.mats.stripO;
      const x = s * (HX - 0.05);
      for (let i = -2; i <= 2; i++) this.strip(x - 0.05, i * 7 - 0.12, -20, x + 0.05, i * 7 + 0.12, 20, s < 0 ? this.mats.glyphB : this.mats.glyphO);
    }
  }

  buildInterior() {
    const M = this.mats;
    // ---- Central reactor ----
    this.spheres.push({ c: new THREE.Vector3(0, 0, 0), r: 6 });
    const reactor = new THREE.Mesh(new THREE.IcosahedronGeometry(6, 3), new THREE.MeshStandardMaterial({ color: 0x6a737c, roughness: 0.35, metalness: 0.85, flatShading: true }));
    reactor.castShadow = true; reactor.receiveShadow = true;
    this.group.add(reactor);
    const core = new THREE.Mesh(new THREE.TorusGeometry(6.15, 0.35, 8, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x5ff6ff).multiplyScalar(2.2) }));
    core.rotation.x = Math.PI / 2; this.group.add(core);
    const core2 = core.clone(); core2.rotation.set(0, Math.PI / 2, 0); this.group.add(core2);
    this.reactorRings = [core, core2];
    const rl = new THREE.PointLight(0x5ff6ff, 60, 60, 1); this.group.add(rl);
    // spine through the reactor
    this.addBox([-1.2, -HY, -1.2], [1.2, -6, 1.2], M.girder, { tile: 2 });
    this.addBox([-1.2, 6, -1.2], [1.2, HY, 1.2], M.girder, { tile: 2 });
    // ring catwalk around reactor
    const R = 11, t = 0.6;
    this.addBox([-R, -t, R - 1.2], [R, t, R], M.steel, { tile: 2 });
    this.addBox([-R, -t, -R], [R, t, -R + 1.2], M.steel, { tile: 2 });
    this.addBox([R - 1.2, -t, -R + 1.2], [R, t, R - 1.2], M.steel, { tile: 2 });
    this.addBox([-R, -t, -R + 1.2], [-R + 1.2, t, R - 1.2], M.steel, { tile: 2 });

    // ---- Spawn bulkheads (x = ±55) ----
    const bx0 = 55, bx1 = 56.6;
    const B = (y0, y1, z0, z1) => this.addMirrored([bx0, y0, z0], [bx1, y1, z1], M.hullOrange, M.hullBlue, { tile: 4 });
    B(-HY, -15, -HZ, HZ);
    B(15, HY, -HZ, HZ);
    B(-15, 15, -HZ, -19);
    B(-15, 15, 19, HZ);
    B(-4, 4, -4, 4);
    B(-15, -10, -19, 19);
    B(10, 15, -6, 6);
    // ---- Containers ----
    this.addMirrored([36, 8, -14], [48, 10.6, -11.4], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([30, -12, 10], [32.6, 0, 12.6], M.cYel, M.cYel, { tile: 3 });
    this.addMirrored([40, -22, 0], [42.6, -19.4, 12], M.cTeal, M.cRed, { tile: 3 });
    this.addMirrored([20, 20, 18], [32, 22.6, 20.6], M.cGrey, M.cGrey, { tile: 3 });
    this.addMirrored([22, -24, -24], [24.6, -21.4, -12], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([44, -4, 16], [50, -1.4, 25], M.cGrey, M.cGrey, { tile: 3 });
    this.addMirrored([10, 22, -8], [22, 24.6, -5.4], M.cYel, M.cYel, { tile: 3 });
    this.addMirrored([33, 12, 22], [35.6, 24, 24.6], M.cTeal, M.cRed, { tile: 3 });
    this.addMirrored([14, -8, -30], [16.6, 4, -27.4], M.cGrey, M.cGrey, { tile: 3 });
    // ---- Floating shields / plates ----
    this.addMirrored([24, -6, -6], [24.6, 6, 6], M.steel, M.steel, { tile: 3 });
    this.addMirrored([14, 12, -20], [22, 12.5, -12], M.steel, M.steel, { tile: 3 });
    this.addMirrored([12, -16, 22], [18, -10, 22.5], M.steel, M.steel, { tile: 3 });
    this.addMirrored([44, 18, -6], [44.5, 26, 6], M.steel, M.steel, { tile: 3 });
    this.addMirrored([36, -30, -28], [44, -29.5, -20], M.steel, M.steel, { tile: 3 });
    // ---- Sightline breakers (long spawn-to-spawn lanes) ----
    this.addMirrored([44, 8, 10], [44.6, 18, 22], M.steel, M.steel, { tile: 3 });
    this.addMirrored([44, -20, -4], [44.6, -10, 6], M.steel, M.steel, { tile: 3 });
    this.addMirrored([36, -4, -32], [38.6, 8, -29.4], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([30, 24, -24], [42, 26.6, -21.4], M.cGrey, M.cGrey, { tile: 3 });
    this.addMirrored([8, -12, -28], [8.6, -4, -18], M.steel, M.steel, { tile: 3 });
    this.addMirrored([8, 14, 6], [8.6, 24, 16], M.steel, M.steel, { tile: 3 });
    this.addMirrored([8, -28, 6], [8.6, -18, 14], M.steel, M.steel, { tile: 3 });
    this.addMirrored([16, 26, 2], [19, 29, 5], M.cYel, M.cYel, { tile: 3 });
    this.addMirrored([17, -8, 9], [20, -5, 12], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([26, 4, -14], [29, 7, -11], M.cGrey, M.cGrey, { tile: 3 });
    this.addMirrored([48, -26, -26], [50.6, -23.4, -23.4], M.cTeal, M.cRed, { tile: 3 });
    this.addMirrored([48, 22, 24], [50.6, 24.6, 26.6], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([30, -30, 24], [36, -29.5, 32], M.steel, M.steel, { tile: 3 });
    this.addMirrored([20, 0, 26], [20.6, 10, 34], M.steel, M.steel, { tile: 3 });
    // ---- Girders spanning the hall ----
    this.addMirrored([17.4, -28.6, -HZ], [18.6, -27.4, HZ], M.girder, M.girder, { tile: 2 });
    this.addMirrored([37.4, 25.4, -HZ], [38.6, 26.6, HZ], M.girder, M.girder, { tile: 2 });
    this.addMirrored([45.4, -HY, -26.6], [46.6, HY, -25.4], M.girder, M.girder, { tile: 2 });
    this.addBox([-HX, -0.6, 27.4], [HX, 0.6, 28.6], M.girder, { tile: 2 });
    this.addBox([-HX, 17.4, -28.6], [HX, 18.6, -27.4], M.girder, { tile: 2 });
    // central cross plates (mid cover high/low)
    this.addBox([-6, 18, -0.3], [6, 26, 0.3], M.steel, { tile: 3 });
    this.addBox([-6, -26, -0.3], [6, -18, 0.3], M.steel, { tile: 3 });
    this.addBox([-0.3, -6, 16], [0.3, 6, 22], M.steel, { tile: 3 });
    this.addBox([-0.3, -6, -22], [0.3, 6, -16], M.steel, { tile: 3 });

    // Lights
    const hemi = new THREE.HemisphereLight(0xbfd4ff, 0x4a4036, 1.1);
    this.group.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff2dd, 2.2);
    sun.position.set(0.4, 0.3, 1); this.group.add(sun);
    this.sun = sun;
    this.buildHangarDetail();
    const fill = new THREE.DirectionalLight(0x9db8ff, 0.6);
    fill.position.set(-0.5, -0.6, -1); this.group.add(fill);
    const lb = new THREE.PointLight(0x3f8cff, 22, 50, 1); lb.position.set(-62, 0, 0); this.group.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 22, 50, 1); lo.position.set(62, 0, 0); this.group.add(lo);
  }

  buildSpace() {
    this.space = new THREE.Group();
    this.group.add(this.space);
    // stars
    const N = 3000, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    const v = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      v.randomDirection().multiplyScalar(3500);
      pos.set([v.x, v.y, v.z], i * 3);
      const b = 0.5 + Math.random() * 0.5;
      col.set([b, b, b * (0.85 + Math.random() * 0.3)], i * 3);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    sg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.space.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, vertexColors: true, fog: false })));
    // planet beyond +z window
    const planet = new THREE.Mesh(new THREE.SphereGeometry(900, 64, 32),
      new THREE.MeshStandardMaterial({ map: planetTexture(), roughness: 1, metalness: 0 }));
    if (this.enclosed) planet.position.set(250, -620, 1700);
    else { planet.position.set(300, -1500, 900); planet.scale.setScalar(1.4); }
    planet.rotation.z = 0.3;
    this.space.add(planet);
    this.planet = planet;
    const atmo = new THREE.Mesh(new THREE.SphereGeometry(935, 64, 32), new THREE.ShaderMaterial({
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide,
      uniforms: {},
      vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
      fragmentShader: 'varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)),3.0); gl_FragColor = vec4(0.35,0.6,1.0,1.0)*f*1.4; }',
    }));
    atmo.position.copy(planet.position); atmo.scale.copy(planet.scale); this.space.add(atmo);
    // sun disc beyond -z window
    const sunTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 128;
      const g = c.getContext('2d');
      const gr = g.createRadialGradient(64, 64, 4, 64, 64, 64);
      gr.addColorStop(0, 'rgba(255,255,240,1)'); gr.addColorStop(0.2, 'rgba(255,240,200,0.9)'); gr.addColorStop(1, 'rgba(255,200,120,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(c);
    })();
    const sunSpr = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, blending: THREE.AdditiveBlending, depthWrite: false }));
    sunSpr.position.set(-600, 300, -2500); sunSpr.scale.set(500, 500, 1);
    this.space.add(sunSpr);
  }

  buildPods() {
    const proto = buildPod();
    const places = this.def.pods ? this.def.pods : this.drum ? [] : this.enclosed
      ? [[8, 14, 12], [-8, -14, -12], [30, 0, -24], [-30, 0, 24], [50, 26, 10], [-50, -26, -10], [0, 28, 20], [0, -28, -20]]
      : [[20, 30, 20], [-20, -30, -20], [60, -15, 35], [-60, 15, -35], [95, 25, 10], [-95, -25, -10], [40, 40, -40], [-40, -40, 40], [0, 35, -30], [0, -35, 30], [75, -45, -30], [-75, 45, 30]];
    places.forEach((p, i) => {
      const mesh = proto.clone();
      this.group.add(mesh);
      const pod = {
        pos: new THREE.Vector3(...p), vel: new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(0.8),
        r: 1.1, mass: 180, mesh, quat: new THREE.Quaternion(), angVel: new THREE.Vector3(rand(-0.4, 0.4), rand(-0.4, 0.4), rand(-0.4, 0.4)),
        holders: 0,
      };
      mesh.position.copy(pod.pos);
      this.pods.push(pod);
    });
  }

  // ---------- Decorative detail (no collision) ----------
  deco(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    m.castShadow = false; m.receiveShadow = true;
    this.group.add(m);
    return m;
  }

  buildHangarDetail() {
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x8a6f4a, roughness: 0.45, metalness: 0.8 });
    const pipeMat2 = new THREE.MeshStandardMaterial({ color: 0x5d6b78, roughness: 0.4, metalness: 0.85 });
    const fixture = new THREE.MeshStandardMaterial({ color: 0x2c3137, roughness: 0.6, metalness: 0.6 });
    const lampMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff1d6).multiplyScalar(2.2) });
    const red = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff3020).multiplyScalar(2) });
    // pipe runs along the z-walls (above and below the windows)
    for (const s of [-1, 1]) for (const [y, r, m] of [[15, 0.35, pipeMat], [16.2, 0.22, pipeMat2], [-15, 0.35, pipeMat2], [-16.3, 0.25, pipeMat]]) {
      const pipe = this.deco(new THREE.CylinderGeometry(r, r, 2 * HX - 4, 12), m, 0, y, s * (HZ - 0.6 - r), 0, 0, Math.PI / 2);
      void pipe;
      for (let x = -HX + 8; x < HX - 4; x += 12) this.deco(new THREE.TorusGeometry(r + 0.04, 0.06, 6, 14), fixture, x, y, s * (HZ - 0.6 - r), 0, Math.PI / 2, 0);
    }
    // wall lamps with bloom
    for (const s of [-1, 1]) for (let x = -60; x <= 60; x += 20) {
      this.deco(new THREE.BoxGeometry(2.2, 0.5, 0.4), fixture, x, 24, s * (HZ - 0.2));
      this.deco(new THREE.BoxGeometry(2.0, 0.22, 0.1), lampMat, x, 24, s * (HZ - 0.42));
      this.deco(new THREE.BoxGeometry(2.2, 0.5, 0.4), fixture, x, -24, s * (HZ - 0.2));
      this.deco(new THREE.BoxGeometry(2.0, 0.22, 0.1), lampMat, x, -24, s * (HZ - 0.42));
    }
    // floor/ceiling vents and hazard beacons
    for (let x = -60; x <= 60; x += 15) for (const y of [-HY + 0.05, HY - 0.05]) {
      this.deco(new THREE.BoxGeometry(3, 0.1, 1.6), fixture, x, y, -30);
      this.deco(new THREE.BoxGeometry(3, 0.1, 1.6), fixture, x, y, 30);
    }
    for (const x of [-56, 56]) for (const y of [-15, 15]) for (const z of [-19, 19]) this.deco(new THREE.SphereGeometry(0.25, 10, 8), red, x * 1.0 + (x > 0 ? 0.8 : -0.8), y, z);
    // spawn-bay consoles
    for (const s of [-1, 1]) for (const z of [-24, 24]) {
      const c = this.deco(new THREE.BoxGeometry(1.2, 2.4, 3.2), fixture, s * 70.6, -6, z);
      void c;
      this.deco(new THREE.PlaneGeometry(2.6, 1.4), new THREE.MeshBasicMaterial({ color: new THREE.Color(s < 0 ? 0x3f8cff : 0xff8a2a).multiplyScalar(1.4) }), s * 69.95, -5.6, z, 0, -s * Math.PI / 2, 0);
    }
  }

  buildYardDetail() {
    const mast = new THREE.MeshStandardMaterial({ color: 0x9aa2aa, roughness: 0.35, metalness: 0.85 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x2c3137, roughness: 0.6, metalness: 0.6 });
    const dish = new THREE.MeshStandardMaterial({ color: 0xd5d9de, roughness: 0.4, metalness: 0.4, side: THREE.DoubleSide });
    const blinkG = new THREE.MeshBasicMaterial({ color: new THREE.Color(0x40ff70).multiplyScalar(2.5) });
    const blinkR = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff3020).multiplyScalar(2.5) });
    const win = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffd9a0).multiplyScalar(1.6) });
    // antenna masts and a dish on the hub
    this.deco(new THREE.CylinderGeometry(0.15, 0.15, 14, 8), mast, 0, 27, 0);
    this.deco(new THREE.SphereGeometry(0.4, 10, 8), blinkR, 0, 34.2, 0);
    const d = this.deco(new THREE.SphereGeometry(5, 24, 8, 0, Math.PI * 2, 0, 0.7), dish, 0, -28, 0, Math.PI, 0, 0);
    d.castShadow = true;
    this.deco(new THREE.CylinderGeometry(0.2, 0.2, 6, 8), mast, 0, -24, 0);
    // lit windows along the hub module
    for (let x = -12; x <= 12; x += 3) for (const z of [-7.02, 7.02]) this.deco(new THREE.PlaneGeometry(1.4, 0.8), win, x, 3, z, 0, z > 0 ? 0 : Math.PI, 0);
    // navigation lights at the dock corners
    for (const s of [-1, 1]) for (const y of [-20, 20]) for (const z of [-30, 30]) this.deco(new THREE.SphereGeometry(0.5, 10, 8), s < 0 ? blinkG : blinkR, s * 129, y, z);
    // truss cable runs
    for (const s of [-1, 1]) this.deco(new THREE.CylinderGeometry(0.12, 0.12, 100, 6), dark, s * 65, 0, 0, 0, 0, Math.PI / 2);
  }

  // ---------- Queries ----------
  /** Raycast against static geometry, the hull and pods. Returns shared hit object or null. */
  raycast(o, d, maxT, ignorePods = false) {
    let best = maxT, kind = '', obj = null;
    const hit = this._hit, rb = this._rb;
    const ex = o.x + d.x * maxT, ey = o.y + d.y * maxT, ez = o.z + d.z * maxT;
    const sx0 = Math.min(o.x, ex), sx1 = Math.max(o.x, ex), sy0 = Math.min(o.y, ey), sy1 = Math.max(o.y, ey), sz0 = Math.min(o.z, ez), sz1 = Math.max(o.z, ez);
    for (let i = 0; i < this.boxes.length; i++) {
      const b = this.boxes[i];
      if (b.max[0] < sx0 || b.min[0] > sx1 || b.max[1] < sy0 || b.min[1] > sy1 || b.max[2] < sz0 || b.min[2] > sz1) continue;
      const t = rayBox(o, d, b, best, rb);
      if (t >= 0 && t < best) { best = t; kind = 'box'; obj = b; hit.n.set(rb.n[0], rb.n[1], rb.n[2]).normalize(); }
    }
    for (const s of this.spheres) {
      const t = raySphere(o, d, s.c, s.r, best);
      if (t >= 0 && t < best) { best = t; kind = 'sphere'; obj = s; hit.n.set(o.x + d.x * t - s.c.x, o.y + d.y * t - s.c.y, o.z + d.z * t - s.c.z).normalize(); }
    }
    for (let i = 0; i < this.arcs.length; i++) {
      const A = this.arcs[i];
      if (A.max[0] < sx0 || A.min[0] > sx1 || A.max[1] < sy0 || A.min[1] > sy1 || A.max[2] < sz0 || A.min[2] > sz1) continue;
      const t = this.rayArc(o, d, A, best, 0, this._arcN);
      if (t >= 0 && t < best) { best = t; kind = 'arc'; obj = A; hit.n.copy(this._arcN); }
    }
    if (!ignorePods) for (const p of this.pods) {
      const t = raySphere(o, d, p.pos, p.r, best);
      if (t >= 0 && t < best) { best = t; kind = 'pod'; obj = p; hit.n.set(o.x + d.x * t - p.pos.x, o.y + d.y * t - p.pos.y, o.z + d.z * t - p.pos.z).normalize(); }
    }
    // hull (inside of the bounds box)
    const oa = [o.x, o.y, o.z], da = [d.x, d.y, d.z];
    if (this.drum) {
      // inside of the drum: exit through the cylinder wall
      const u = this.au, v = this.av;
      const a = da[u] * da[u] + da[v] * da[v];
      if (a > 1e-12) {
        const b = 2 * (oa[u] * da[u] + oa[v] * da[v]), c = oa[u] * oa[u] + oa[v] * oa[v] - this.drum * this.drum;
        const disc = b * b - 4 * a * c;
        if (disc >= 0) {
          const t = (-b + Math.sqrt(disc)) / (2 * a);
          if (t >= 0 && t < best) { best = t; kind = 'wall'; obj = null; hit.n.set(o.x + d.x * t, o.y + d.y * t, o.z + d.z * t).setComponent(this.axis, 0).negate().normalize(); }
        }
      }
    }
    for (const i of this.hullAxes) {
      if (Math.abs(da[i]) < 1e-12) continue;
      const lim = da[i] > 0 ? this.bounds.max[i] : this.bounds.min[i];
      const t = (lim - oa[i]) / da[i];
      if (t >= 0 && t < best) { best = t; kind = 'wall'; obj = null; hit.n.set(0, 0, 0).setComponent(i, da[i] > 0 ? -1 : 1); }
    }
    if (!kind) return null;
    hit.t = best; hit.kind = kind; hit.obj = obj;
    return hit;
  }

  /** True if a sphere of radius r can sweep from a to b without touching static geometry (approx). */
  segmentClear(a, b, r = 0.7, ignorePods = true) {
    const d = new THREE.Vector3().subVectors(b, a);
    const len = d.length();
    if (len < 1e-6) return this.clearance(a) > r;
    d.divideScalar(len);
    for (let i = 0; i < 3; i++) {
      const lo = this.bounds.min[i] + r, hi = this.bounds.max[i] - r;
      const av = a.getComponent(i), bv = b.getComponent(i);
      if (av < lo || av > hi || bv < lo || bv > hi) return false;
    }
    if (this.drum) { // the drum is convex: both ends inside means the whole segment is
      const lim = this.drum - r;
      if (this.radial(a) > lim || this.radial(b) > lim) return false;
    }
    const sx0 = Math.min(a.x, b.x) - r, sx1 = Math.max(a.x, b.x) + r, sy0 = Math.min(a.y, b.y) - r, sy1 = Math.max(a.y, b.y) + r, sz0 = Math.min(a.z, b.z) - r, sz1 = Math.max(a.z, b.z) + r;
    const eb = { min: [0, 0, 0], max: [0, 0, 0] };
    for (const bx of this.boxes) {
      if (bx.max[0] < sx0 || bx.min[0] > sx1 || bx.max[1] < sy0 || bx.min[1] > sy1 || bx.max[2] < sz0 || bx.min[2] > sz1) continue;
      for (let i = 0; i < 3; i++) { eb.min[i] = bx.min[i] - r; eb.max[i] = bx.max[i] + r; }
      if (rayBox(a, d, eb, len, null) >= 0) return false;
    }
    for (const s of this.spheres) if (raySphere(a, d, s.c, s.r + r, len) >= 0) return false;
    for (const A of this.arcs) {
      if (A.max[0] < sx0 || A.min[0] > sx1 || A.max[1] < sy0 || A.min[1] > sy1 || A.max[2] < sz0 || A.min[2] > sz1) continue;
      if (this.rayArc(a, d, A, len, r, null) >= 0) return false;
    }
    if (!ignorePods) for (const p of this.pods) if (raySphere(a, d, p.pos, p.r + r, len) >= 0) return false;
    return true;
  }

  /** Line of sight (thin ray). */
  los(a, b, ignorePods = false) {
    const d = new THREE.Vector3().subVectors(b, a);
    const len = d.length();
    if (len < 1e-4) return true;
    d.divideScalar(len);
    const h = this.raycast(a, d, len - 0.05, ignorePods);
    return !h;
  }

  /** Distance from p to nearest static surface (incl. hull). */
  clearance(p) {
    let best = this.drum ? this.drum - this.radial(p) : 1e9;
    for (const i of this.hullAxes) { const v = p.getComponent(i); best = Math.min(best, v - this.bounds.min[i], this.bounds.max[i] - v); }
    const c = new THREE.Vector3();
    for (const b of this.boxes) {
      closestOnBox(p, b, c);
      const d = c.distanceTo(p);
      if (d < best) best = d;
      if (d === 0) {
        return -1;
      }
    }
    for (const s of this.spheres) best = Math.min(best, p.distanceTo(s.c) - s.r);
    for (const A of this.arcs) {
      const d = this.arcProbe(p, A, c, this._arcN);
      if (d <= 0) return -1;
      if (d < best) best = d;
    }
    return best;
  }

  /**
   * Resolve a sphere against static geometry. Calls onContact(normal, depth, kind) for each contact.
   * Returns nothing; caller handles velocity response.
   */
  sphereContacts(p, r, cb) {
    const c = new THREE.Vector3(), n = new THREE.Vector3();
    if (this.drum) {
      const rr = this.radial(p), lim = this.drum - r;
      if (rr > lim && rr > 1e-6) { this.upAt(p, n); cb(n, rr - lim, 'wall', null); }
    }
    for (const i of this.hullAxes) {
      const lo = this.bounds.min[i] + r, hi = this.bounds.max[i] - r;
      const v = p.getComponent(i);
      if (v < lo) { n.set(0, 0, 0).setComponent(i, 1); cb(n, lo - v, 'wall', null); }
      else if (v > hi) { n.set(0, 0, 0).setComponent(i, -1); cb(n, v - hi, 'wall', null); }
    }
    for (const b of this.boxes) {
      if (p.x + r < b.min[0] || p.x - r > b.max[0] || p.y + r < b.min[1] || p.y - r > b.max[1] || p.z + r < b.min[2] || p.z - r > b.max[2]) continue;
      closestOnBox(p, b, c);
      n.subVectors(p, c);
      const d = n.length();
      if (d < r) {
        if (d > 1e-6) { n.divideScalar(d); cb(n, r - d, 'box', b); }
        else {
          // centre inside box: push out along least-penetration axis
          let bestA = 0, bestD = Infinity, bestS = 1;
          for (let i = 0; i < 3; i++) {
            const v = p.getComponent(i);
            const dl = v - b.min[i], dh = b.max[i] - v;
            if (dl < bestD) { bestD = dl; bestA = i; bestS = -1; }
            if (dh < bestD) { bestD = dh; bestA = i; bestS = 1; }
          }
          n.set(0, 0, 0).setComponent(bestA, bestS);
          cb(n, bestD + r, 'box', b);
        }
      }
    }
    for (const s of this.spheres) {
      n.subVectors(p, s.c);
      const d = n.length();
      if (d < r + s.r) { n.divideScalar(Math.max(d, 1e-6)); cb(n, r + s.r - d, 'sphere', s); }
    }
    for (const A of this.arcs) {
      if (p.x + r < A.min[0] || p.x - r > A.max[0] || p.y + r < A.min[1] || p.y - r > A.max[1] || p.z + r < A.min[2] || p.z - r > A.max[2]) continue;
      const d = this.arcProbe(p, A, c, n);
      if (d < r) cb(n, r - d, 'arc', A);
    }
  }

  /** Nearest grabbable surface point within range. Returns {point, normal, kind, obj} or null. */
  nearestSurface(p, range) {
    let best = null, bestD = range;
    const c = new THREE.Vector3();
    if (this.drum) {
      const rr = this.radial(p), d = this.drum - rr;
      if (d < bestD && rr > 1e-6) { bestD = d; const n = this.upAt(p, new THREE.Vector3()); best = { point: p.clone().addScaledVector(n, -d), normal: n, kind: 'wall', obj: null }; }
    }
    for (const i of this.hullAxes) {
      for (const s of [-1, 1]) {
        const lim = s > 0 ? this.bounds.max[i] : this.bounds.min[i];
        const d = Math.abs(lim - p.getComponent(i));
        if (d < bestD) {
          bestD = d;
          const pt = p.clone(); pt.setComponent(i, lim);
          best = { point: pt, normal: new THREE.Vector3().setComponent(i, -s), kind: 'wall', obj: null };
        }
      }
    }
    for (const b of this.boxes) {
      closestOnBox(p, b, c);
      const d = c.distanceTo(p);
      if (d < bestD && d > 1e-6) {
        bestD = d;
        best = { point: c.clone(), normal: p.clone().sub(c).normalize(), kind: 'box', obj: b };
      }
    }
    for (const s of this.spheres) {
      const d = p.distanceTo(s.c) - s.r;
      if (d < bestD) {
        bestD = d;
        const n = p.clone().sub(s.c).normalize();
        best = { point: s.c.clone().addScaledVector(n, s.r), normal: n, kind: 'sphere', obj: s };
      }
    }
    for (const A of this.arcs) {
      const d = this.arcProbe(p, A, c, this._arcN);
      if (d < bestD && d > 1e-6) { bestD = d; best = { point: c.clone(), normal: this._arcN.clone(), kind: 'arc', obj: A }; }
    }
    for (const pod of this.pods) {
      const d = p.distanceTo(pod.pos) - pod.r;
      if (d < bestD) {
        bestD = d;
        const n = p.clone().sub(pod.pos).normalize();
        best = { point: pod.pos.clone().addScaledVector(n, pod.r), normal: n, kind: 'pod', obj: pod };
      }
    }
    if (best) best.dist = bestD;
    return best;
  }

  updatePods(dt, time) {
    const pods = this.pods;
    for (const pod of pods) {
      pod.pos.addScaledVector(pod.vel, dt);
      if (!this.enclosed) for (let i = 0; i < 3; i++) {
        // tethered cargo field: pods turn back at the edge of the play area
        const v = pod.pos.getComponent(i), lim = this.bounds.max[i] - 4;
        if (Math.abs(v) > lim && Math.sign(pod.vel.getComponent(i)) === Math.sign(v)) pod.vel.setComponent(i, -pod.vel.getComponent(i));
      }
      this.sphereContacts(pod.pos, pod.r, (n, depth) => {
        pod.pos.addScaledVector(n, depth);
        const vn = pod.vel.dot(n);
        if (vn < 0) pod.vel.addScaledVector(n, -1.6 * vn);
      });
      const w = pod.angVel.length();
      if (w > 1e-5) {
        const q = new THREE.Quaternion().setFromAxisAngle(pod.angVel.clone().divideScalar(w), w * dt);
        pod.quat.premultiply(q);
      }
    }
    for (let i = 0; i < pods.length; i++) for (let j = i + 1; j < pods.length; j++) {
      const a = pods[i], b = pods[j];
      const n = new THREE.Vector3().subVectors(b.pos, a.pos);
      const d = n.length();
      if (d < a.r + b.r && d > 1e-6) {
        n.divideScalar(d);
        const pen = a.r + b.r - d;
        a.pos.addScaledVector(n, -pen / 2); b.pos.addScaledVector(n, pen / 2);
        const rv = new THREE.Vector3().subVectors(b.vel, a.vel).dot(n);
        if (rv < 0) {
          const j2 = -(1.8) * rv / (1 / a.mass + 1 / b.mass);
          a.vel.addScaledVector(n, -j2 / a.mass); b.vel.addScaledVector(n, j2 / b.mass);
        }
      }
    }
    // gentle reactor ring spin (visual)
    if (this.reactorRings) { this.reactorRings[0].rotation.z = time * 0.4; this.reactorRings[1].rotation.x = time * 0.3; }
  }

  syncPodMeshes() {
    for (const pod of this.pods) { pod.mesh.position.copy(pod.pos); pod.mesh.quaternion.copy(pod.quat); }
  }

  // ---------- Navigation graph ----------
  buildNav() {
    const nodes = [];
    const tmp = new THREE.Vector3();
    // free-space lattice
    const [sx, sy] = this.def.navStep, B = this.def.bounds;
    const fx = Math.floor((B[0] - 4) / sx) * sx, fy = Math.floor((B[1] - 4) / sy) * sy, fz = Math.floor((B[2] - 4) / sy) * sy;
    for (let x = -fx; x <= fx; x += sx) for (let y = -fy; y <= fy; y += sy) for (let z = -fz; z <= fz; z += sy) {
      tmp.set(x, y, z);
      if (this.clearance(tmp) >= 1.6) nodes.push({ pos: tmp.clone(), surf: false, normal: null });
    }
    // surface nodes on boxes
    const off = 1.15, sStep = this.def.surfStep || 5;
    const addSurf = (p, n) => {
      if (Math.abs(p.x) > B[0] || Math.abs(p.y) > B[1] || Math.abs(p.z) > B[2]) return; // never route bots out of bounds
      if (this.clearance(p) >= off - 0.05) nodes.push({ pos: p.clone(), surf: true, normal: n.clone() });
    };
    for (const b of this.boxes) {
      for (let ax = 0; ax < 3; ax++) for (const s of [-1, 1]) {
        const u = (ax + 1) % 3, v = (ax + 2) % 3;
        const ul = b.max[u] - b.min[u], vl = b.max[v] - b.min[v];
        if (ul < 1.5 && vl < 1.5) continue;
        const nu = Math.max(1, Math.round(ul / sStep)), nv = Math.max(1, Math.round(vl / sStep));
        const n = new THREE.Vector3().setComponent(ax, s);
        for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
          tmp.setComponent(ax, (s > 0 ? b.max[ax] : b.min[ax]) + s * off);
          tmp.setComponent(u, b.min[u] + ul * (i + 0.5) / nu);
          tmp.setComponent(v, b.min[v] + vl * (j + 0.5) / nv);
          addSurf(tmp, n);
        }
      }
    }
    // drum floor: standing positions all around the rim
    if (this.drum) {
      const ax = this.axis, u = this.au, v = this.av, nA = this.def.floorNodes || 28;
      const rows = this.def.floorRows || [];
      if (!rows.length) for (let x = -this.bounds.max[ax] + 6; x < this.bounds.max[ax] - 3; x += 7) rows.push(x);
      for (const x of rows) for (let k = 0; k < nA; k++) {
        const a = k / nA * Math.PI * 2, n = new THREE.Vector3().setComponent(u, -Math.cos(a)).setComponent(v, -Math.sin(a));
        tmp.set(0, 0, 0).setComponent(ax, x).setComponent(u, Math.cos(a) * (this.drum - off)).setComponent(v, Math.sin(a) * (this.drum - off));
        addSurf(tmp, n);
      }
    }
    // arc surfaces: the inner (axis-facing) and outer faces, both axial faces, and broad end faces
    for (const A of this.arcs) {
      const ax = this.axis, u = this.au, v = this.av;
      const put = (ang, rr, h, nr, nh) => {
        const c = Math.cos(ang), sn = Math.sin(ang);
        tmp.set(0, 0, 0).setComponent(u, c * rr).setComponent(v, sn * rr).setComponent(ax, h);
        const n = new THREE.Vector3().setComponent(u, c * nr).setComponent(v, sn * nr).setComponent(ax, nh);
        addSurf(tmp, n);
      };
      const hl = A.h1 - A.h0, nh = Math.max(1, Math.round(hl / 5));
      for (const [rr, sgn] of [[A.r0 - off, -1], [A.r1 + off, 1]]) {
        if (rr < 1.5 || (hl < 1.5 && A.span * rr < 1.5)) continue;
        const na = Math.max(1, Math.round(A.span * rr / 5));
        for (let i = 0; i < na; i++) for (let j = 0; j < nh; j++) put(A.a0 + A.span * (i + 0.5) / na, rr, A.h0 + hl * (j + 0.5) / nh, sgn, 0);
      }
      const rl = A.r1 - A.r0;
      if (rl >= 1.5) for (const [h, sgn] of [[A.h0 - off, -1], [A.h1 + off, 1]]) {
        const nr = Math.max(1, Math.round(rl / 5));
        for (let k = 0; k < nr; k++) {
          const rr = A.r0 + rl * (k + 0.5) / nr, na = Math.max(1, Math.round(A.span * rr / 5));
          for (let i = 0; i < na; i++) put(A.a0 + A.span * (i + 0.5) / na, rr, h, 0, sgn);
        }
      }
      if (!A.full && rl >= 1.5 && hl >= 1.5) for (const [ang, sgn] of [[A.a0, -1], [A.a0 + A.span, 1]]) {
        // end face: the plane through the axis at that angle, pushed out along its normal
        const nr = Math.max(1, Math.round(rl / 5)), c = Math.cos(ang), sn = Math.sin(ang);
        const nu = -sn * sgn, nv = c * sgn;
        for (let k = 0; k < nr; k++) for (let j = 0; j < nh; j++) {
          const rr = A.r0 + rl * (k + 0.5) / nr, h = A.h0 + hl * (j + 0.5) / nh;
          tmp.set(0, 0, 0).setComponent(u, c * rr + nu * off).setComponent(v, sn * rr + nv * off).setComponent(ax, h);
          addSurf(tmp, new THREE.Vector3().setComponent(u, nu).setComponent(v, nv));
        }
      }
    }
    // hull surface nodes
    for (const ax of this.hullAxes) for (const s of [-1, 1]) {
      const u = (ax + 1) % 3, v = (ax + 2) % 3;
      const n = new THREE.Vector3().setComponent(ax, -s);
      const step = 10;
      for (let a = this.bounds.min[u] + 6; a < this.bounds.max[u] - 3; a += step)
        for (let c = this.bounds.min[v] + 6; c < this.bounds.max[v] - 3; c += step) {
          tmp.setComponent(ax, (s > 0 ? this.bounds.max[ax] : this.bounds.min[ax]) - s * off);
          tmp.setComponent(u, a); tmp.setComponent(v, c);
          addSurf(tmp, n);
        }
    }
    // sphere (reactor / asteroid) surface nodes
    for (const sp of this.spheres) {
      const k = Math.round(10 + sp.r * 2);
      for (let i = 0; i < k; i++) {
        const n = new THREE.Vector3().randomDirection();
        tmp.copy(sp.c).addScaledVector(n, sp.r + off);
        if (Math.abs(tmp.x) < B[0] && Math.abs(tmp.y) < B[1] && Math.abs(tmp.z) < B[2]) addSurf(tmp, n);
      }
    }
    // spatial hash
    this.navCell = 10;
    this.navHash = new Map();
    nodes.forEach((nd, i) => {
      nd.i = i; nd.nb = []; nd.cost = [];
      const k = this.hashKey(nd.pos);
      if (!this.navHash.has(k)) this.navHash.set(k, []);
      this.navHash.get(k).push(i);
    });
    this.nav = nodes;
    const R = this.def.navR;
    for (const a of nodes) {
      this.forNear(a.pos, R, (j) => {
        if (j <= a.i) return;
        const b = nodes[j];
        const d = a.pos.distanceTo(b.pos);
        if (d > R) return;
        if (this.segmentClear(a.pos, b.pos, 0.6)) {
          a.nb.push(j); a.cost.push(d);
          b.nb.push(a.i); b.cost.push(d);
        }
      });
    }
  }

  hashKey(p) {
    const c = this.navCell;
    return ((Math.floor(p.x / c) + 64) * 4096) + ((Math.floor(p.y / c) + 32) * 64) + (Math.floor(p.z / c) + 32);
  }

  forNear(p, r, fn) {
    const c = this.navCell;
    const x0 = Math.floor((p.x - r) / c), x1 = Math.floor((p.x + r) / c);
    const y0 = Math.floor((p.y - r) / c), y1 = Math.floor((p.y + r) / c);
    const z0 = Math.floor((p.z - r) / c), z1 = Math.floor((p.z + r) / c);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const arr = this.navHash.get((x + 64) * 4096 + (y + 32) * 64 + (z + 32));
      if (arr) for (const i of arr) fn(i);
    }
  }

  nearestNode(p, needClear = true) {
    let best = -1, bestD = Infinity;
    for (const r of [8, 16, 32]) {
      this.forNear(p, r, (i) => {
        const d = this.nav[i].pos.distanceToSquared(p);
        if (d < bestD && (!needClear || this.segmentClear(p, this.nav[i].pos, 0.4))) { bestD = d; best = i; }
      });
      if (best >= 0) return best;
    }
    // fallback: brute force without clear check
    for (const nd of this.nav) { const d = nd.pos.distanceToSquared(p); if (d < bestD) { bestD = d; best = nd.i; } }
    return best;
  }

  /** A* over the nav graph; returns array of Vector3 (excluding start). */
  /** A* over the nav graph; returns array of Vector3 (excluding start). Buffers are reused between searches. */
  findPath(from, goalIdx, avoid = null) {
    const start = this.nearestNode(from);
    if (start < 0 || goalIdx < 0) return null;
    const N = this.nav.length;
    if (!this._astar || this._astar.g.length !== N) this._astar = { g: new Float32Array(N), came: new Int32Array(N), seen: new Uint32Array(N), closed: new Uint32Array(N), stamp: 0, heap: new MinHeap() };
    const A = this._astar;
    const st = ++A.stamp;
    const G = (i) => (A.seen[i] === st ? A.g[i] : Infinity);
    const goal = this.nav[goalIdx].pos;
    const heap = A.heap; heap.a.length = 0;
    A.seen[start] = st; A.g[start] = 0; A.came[start] = -1;
    heap.push(start, this.nav[start].pos.distanceTo(goal));
    let iter = 0, found = start === goalIdx;
    while (heap.size && iter++ < 4000) {
      const cur = heap.pop();
      if (cur === goalIdx) { found = true; break; }
      if (A.closed[cur] === st) continue;
      A.closed[cur] = st;
      const nd = this.nav[cur];
      const gc = A.g[cur];
      for (let k = 0; k < nd.nb.length; k++) {
        const j = nd.nb[k];
        if (A.closed[j] === st) continue;
        let c = nd.cost[k];
        if (avoid) c += avoid(this.nav[j]);
        const ng = gc + c;
        if (ng < G(j)) { A.seen[j] = st; A.g[j] = ng; A.came[j] = cur; heap.push(j, ng + this.nav[j].pos.distanceTo(goal) * 1.15); }
      }
    }
    if (!found) return null;
    const path = [];
    let c = goalIdx;
    while (c >= 0 && c !== start) { path.push(this.nav[c].pos.clone()); c = A.came[c]; }
    path.reverse();
    if (!path.length) path.push(this.nav[goalIdx].pos.clone());
    return path;
  }

  /**
   * How many of a team's known threats can see nav node i. Shared by every bot on the team and
   * refreshed once a second, so the raycasts behind it are paid once instead of per bot per search.
   */
  exposureOf(i, team, threats, now) {
    this._exp = this._exp || [null, null];
    let c = this._exp[team];
    if (!c || c.vals.length !== this.nav.length) c = this._exp[team] = { vals: new Int8Array(this.nav.length), t: -99, threats: [] };
    if (now - c.t > 1) { c.vals.fill(-1); c.t = now; c.threats = threats.map((p) => p.clone()); }
    let v = c.vals[i];
    if (v < 0) {
      // spread the raycasts over frames: unknown nodes count as unexposed until their turn
      if ((this.expBudget || 0) <= 0) return 0;
      this.expBudget--;
      v = 0;
      const p = this.nav[i].pos;
      for (const tp of c.threats) if (tp.distanceToSquared(p) < 120 * 120 && this.los(p, tp, true)) v++;
      c.vals[i] = v;
    }
    return v;
  }

  makeSpawns(side) {
    const pts = [];
    const X = this.def.spawnX;
    const zs = this.def.spawnZ || (this.enclosed ? [-14, -5, 5, 14] : [-20, -7, 7, 20]);
    for (const y of this.def.spawnY || [-10, -3, 4, 10]) for (const z of zs) pts.push(new THREE.Vector3(side * X, y, z));
    return pts;
  }

  /** How far outside the play area p is (0 inside). */
  outside(p) {
    let d = 0;
    for (let i = 0; i < 3; i++) d = Math.max(d, Math.abs(p.getComponent(i)) - this.bounds.max[i]);
    return d;
  }

  // ---------- Open-space map: derelict shipyard ----------
  buildYard() {
    const M = this.mats;
    const HXy = this.def.bounds[0];
    // central hub station
    this.addBox([-14, -7, -7], [14, 7, 7], M.hull, { tile: 4 });
    this.addBox([-5, -5, 7], [5, 5, 22], M.ceil, { tile: 4 });
    this.addBox([-5, -5, -22], [5, 5, -7], M.ceil, { tile: 4 });
    this.addBox([-4, 7, -4], [4, 20, 4], M.hull, { tile: 4 });
    this.addBox([-4, -20, -4], [4, -7, 4], M.hull, { tile: 4 });
    // docking ring around the hub (y-z plane)
    this.addBox([-1.5, 24, -26], [1.5, 26, 26], M.girder, { tile: 2 });
    this.addBox([-1.5, -26, -26], [1.5, -24, 26], M.girder, { tile: 2 });
    this.addBox([-1.5, -24, 24], [1.5, 24, 26], M.girder, { tile: 2 });
    this.addBox([-1.5, -24, -26], [1.5, 24, -24], M.girder, { tile: 2 });
    this.strip(-14.05, -0.2, -7.05, 14.05, 0.2, 7.05, this.mats.stripW);
    // main truss from hub to each base: four longerons plus cross frames
    for (const y of [-3, 3]) for (const z of [-3, 3]) this.addMirrored([14, y - 0.5, z - 0.5], [116, y + 0.5, z + 0.5], M.girder, M.girder, { tile: 2 });
    for (const x of [34, 58, 82, 104]) {
      this.addMirrored([x, -3.5, -3.5], [x + 1, -2.5, 3.5], M.steel, M.steel, { tile: 2 });
      this.addMirrored([x, 2.5, -3.5], [x + 1, 3.5, 3.5], M.steel, M.steel, { tile: 2 });
    }
    // solar arrays
    this.addMirrored([46, 3.6, 6], [70, 4.0, 30], M.cTeal, M.cTeal, { tile: 3 });
    this.addMirrored([46, -4.0, -30], [70, -3.6, -6], M.cTeal, M.cTeal, { tile: 3 });
    this.addMirrored([86, 6, -0.4], [98, 30, 0.4], M.cTeal, M.cTeal, { tile: 3 });
    // team docks
    this.addMirrored([128, -20, -30], [130, 20, 30], M.hullOrange, M.hullBlue, { tile: 6 });
    this.addMirrored([116, -20, -30], [130, -18, 30], M.deck, M.deck, { tile: 6 });
    this.addMirrored([116, 18, -30], [130, 20, 30], M.deck, M.deck, { tile: 6 });
    this.addMirrored([113, -6, -18], [115, 6, -10], M.hullOrange, M.hullBlue, { tile: 3 });
    this.addMirrored([113, -6, 10], [115, 6, 18], M.hullOrange, M.hullBlue, { tile: 3 });
    this.addMirrored([113, 9, -4], [115, 14, 4], M.hullOrange, M.hullBlue, { tile: 3 });
    // drifting container clusters and debris plates
    const C = [M.cRed, M.cYel, M.cGrey, M.cTeal];
    const cont = [
      [[30, 14, 18], [42, 16.6, 20.6]], [[36, -18, -26], [38.6, -6, -23.4]], [[52, 22, -14], [54.6, 24.6, -2]],
      [[64, -24, 14], [76, -21.4, 16.6]], [[78, 12, 30], [80.6, 24, 32.6]], [[96, -14, -36], [108, -11.4, -33.4]],
      [[22, -34, 4], [24.6, -31.4, 16]], [[100, 30, 18], [102.6, 32.6, 30]], [[60, 40, -40], [72, 42.6, -37.4]],
      [[88, -40, 2], [90.6, -28, 4.6]], [[16, 30, -36], [28, 32.6, -33.4]],
    ];
    cont.forEach(([a, b], i) => this.addMirrored(a, b, C[i % 4], C[(i + 1) % 4], { tile: 3 }));
    const plates = [
      [[26, -8, 30], [34, 0, 30.6]], [[70, 8, -22], [70.6, 18, -12]], [[44, -30, 8], [52, -29.5, 18]], [[108, 0, 40], [108.6, 10, 50]],
    ];
    plates.forEach(([a, b]) => this.addMirrored(a, b, M.steel, M.steel, { tile: 3 }));
    // extra sightline breakers across the open field
    const extra = [
      [[24, 10, -20], [24.6, 22, -8]], [[24, -22, 10], [24.6, -10, 22]], [[50, -10, -46], [50.6, 2, -34]], [[52, 30, 6], [52.6, 42, 18]],
      [[78, -6, -14], [78.6, 6, -2]], [[80, 20, 40], [80.6, 32, 52]], [[96, -30, 10], [96.6, -18, 22]], [[40, -48, -6], [52, -47.4, 6]],
    ];
    extra.forEach(([a, b]) => this.addMirrored(a, b, M.steel, M.steel, { tile: 3 }));
    const boxes2 = [[[36, 2, 38], [38.6, 4.6, 50]], [[66, 28, -28], [68.6, 40, -25.4]], [[88, -18, -50], [100, -15.4, -47.4]], [[14, -12, -50], [16.6, 0, -47.4]]];
    boxes2.forEach(([a, b], i) => this.addMirrored(a, b, C[(i + 2) % 4], C[(i + 3) % 4], { tile: 3 }));
    // asteroids (collision spheres)
    const rocks = [[45, 35, 30, 9], [75, -40, -20, 12], [30, -30, 45, 7], [100, 40, -45, 10], [60, 20, -52, 6], [112, -38, 42, 8], [20, 46, -28, 5], [86, 0, 54, 7], [130, 50, 0, 9]];
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x6b625a, roughness: 0.95, metalness: 0.05, flatShading: true });
    const addRock = (x, y, z, r) => {
      const g = new THREE.IcosahedronGeometry(r, 2);
      const pa = g.attributes.position, v = new THREE.Vector3();
      const seed = Math.random() * 10;
      for (let i = 0; i < pa.count; i++) {
        v.fromBufferAttribute(pa, i);
        const k = 1 + 0.07 * Math.sin(v.x * 0.9 + seed) * Math.cos(v.y * 1.1 - seed) + 0.04 * Math.sin(v.z * 2.3 + seed * 2);
        v.multiplyScalar(k); pa.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, rockMat);
      m.castShadow = true; m.receiveShadow = true;
      m.position.set(x, y, z); m.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      this.group.add(m);
      this.spheres.push({ c: new THREE.Vector3(x, y, z), r });
    };
    for (const [x, y, z, r] of rocks) { addRock(x, y, z, r); addRock(-x, -y, -z, r); }
    addRock(0, 50, 40, 8); addRock(0, -50, -40, 8);
    // boundary beacons at the corners of the combat area
    const bm = new THREE.MeshBasicMaterial({ color: 0xff4b3a });
    const B = this.def.bounds;
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
      const b = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), bm);
      b.position.set(x * B[0], y * B[1], z * B[2]); this.group.add(b);
    }
    // lighting: hard sunlight, dim earthshine
    this.group.add(new THREE.HemisphereLight(0x9ab4ff, 0x2a3348, 0.7));
    const sun = new THREE.DirectionalLight(0xfff2dd, 3.2); sun.position.set(-0.3, 0.5, -1); this.group.add(sun);
    this.sun = sun;
    this.buildYardDetail();
    const earth = new THREE.DirectionalLight(0x6f9cff, 0.8); earth.position.set(0.2, -1, 0.5); this.group.add(earth);
    const lb = new THREE.PointLight(0x3f8cff, 30, 60, 1); lb.position.set(-122, 0, 0); this.group.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 30, 60, 1); lo.position.set(122, 0, 0); this.group.add(lo);
    void HXy;
  }

  // ---------- Carousel: a habitat wheel spinning about y ----------
  // Angles run from +z (0, the north midfield) toward +x (90, the orange bay); -90 is the blue bay and
  // 180 the south midfield. The rim street (r 46-60) loops all the way round under a ceiling deck with
  // skylights; the core inside it (r < 44) is low-g fading to zero at the hub.
  buildCarousel() {
    const M = this.mats, R = this.drum, H = this.def.bounds[1];
    const C0 = 44, C1 = 46; // ceiling deck between the rim street and the core
    const glow = (hex, k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k) });
    const amber = glow(0xffb347, 1.8), teal = glow(0x4dffc3, 1.6), white = M.stripW;
    const hullAmber = panelMat('#6a5a3e', '#463a26', '#ffb347', 256, 2, { roughness: 0.75, metalness: 0.4 });
    const hullTeal = panelMat('#3c6458', '#264238', '#4dffc3', 256, 2, { roughness: 0.75, metalness: 0.4 });
    const half = (south) => (south ? hullTeal : hullAmber);   // north street amber, south street teal
    const team = (s) => (s > 0 ? M.hullOrange : M.hullBlue);
    const C = [M.cRed, M.cTeal, M.cYel, M.cGrey];
    // Four-fold placement by quadrant angle phi (0 = midfield, 90 = spawn bay). The x-mirror swaps the
    // teams (theta -> -theta). The south street is the north one turned 180 degrees about x (theta ->
    // 180 - theta, y -> -y), so the two streets differ but both teams see the same map.
    const quads = [[1, false], [-1, false], [1, true], [-1, true]];
    const Q = (p0, p1, r0, r1, y0, y1, mat, opts) => {
      for (const [s, south] of quads) {
        const a0 = south ? 180 - p1 : p0, a1 = south ? 180 - p0 : p1;
        const m = typeof mat === 'function' ? mat(s, south) : mat;
        this.addArc(s > 0 ? a0 : -a1, s > 0 ? a1 : -a0, r0, r1, south ? -y1 : y0, south ? -y0 : y1, m, opts);
      }
    };
    // pieces straddling the midfield lines (phi = 0 north, 180 south)
    const MID = (hs, r0, r1, y0, y1, mat, opts) => {
      this.addArc(-hs, hs, r0, r1, y0, y1, typeof mat === 'function' ? mat(false) : mat, opts);
      this.addArc(180 - hs, 180 + hs, r0, r1, -y1, -y0, typeof mat === 'function' ? mat(true) : mat, opts);
    };
    // boxes at a polar position (phi, radius, axial y), placed four-fold like Q
    const QB = (phi, r, y, h, mat) => {
      for (const [s, south] of quads) {
        const th = (south ? 180 - phi : phi) * Math.PI / 180;
        const x = s * Math.sin(th) * r, z = Math.cos(th) * r, yy = south ? -y : y;
        this.addBox([x - h, yy - h, z - h], [x + h, yy + h, z + h], typeof mat === 'function' ? mat(s, south) : mat, { tile: 3 });
      }
    };

    // ---- hull: the rim floor and two end caps (the +y cap has a window ring onto the stars) ----
    const shellG = new THREE.CylinderGeometry(R, R, 2 * H, 160, 1, true);
    const suv = shellG.attributes.uv;
    for (let i = 0; i < suv.count; i++) suv.setXY(i, suv.getX(i) * (2 * Math.PI * R) / 8, suv.getY(i) * (2 * H) / 8);
    const shellM = M.deck.clone(); shellM.side = THREE.BackSide;
    const shell = new THREE.Mesh(shellG, shellM); shell.receiveShadow = true; this.group.add(shell);
    const disc = (r0, r1, y, mat) => {
      const g = new THREE.RingGeometry(r0, r1, 128, 1);
      const uv = g.attributes.uv, k = (2 * r1) / 8;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * k, uv.getY(i) * k);
      g.rotateX(y > 0 ? Math.PI / 2 : -Math.PI / 2);
      const m = new THREE.Mesh(g, mat); m.position.y = y; m.receiveShadow = true; this.group.add(m);
      return m;
    };
    const capM = M.hull.clone(); capM.side = THREE.DoubleSide;
    const capD = M.ceil.clone(); capD.side = THREE.DoubleSide;
    disc(C0, R, H, capM); disc(0, 10, H, capM);
    disc(10, C0, H, new THREE.MeshBasicMaterial({ color: 0x88aacc, transparent: true, opacity: 0.06, side: THREE.DoubleSide, depthWrite: false }));
    disc(0, R, -H, capD);
    // window struts and frame rings on the +y cap
    const strut = new THREE.MeshStandardMaterial({ color: 0x80878e, roughness: 0.5, metalness: 0.7 });
    for (let k = 0; k < 12; k++) {
      const a = k / 12 * Math.PI * 2, rm = (10 + C0) / 2;
      this.deco(new THREE.BoxGeometry(0.5, 0.5, C0 - 10), strut, Math.sin(a) * rm, H - 0.3, Math.cos(a) * rm, 0, a, 0);
    }
    for (const rr of [10, 27, C0]) { const t = this.deco(new THREE.TorusGeometry(rr, 0.3, 6, 96), strut, 0, H - 0.3, 0, Math.PI / 2, 0, 0); void t; }
    // big orientation glyphs on the -y cap: an amber half (north) and a teal half (south)
    for (const [mat, rot] of [[amber, 0], [teal, Math.PI]]) {
      for (const rr of [20, 36]) {
        const g = new THREE.TorusGeometry(rr, 0.25, 4, 96, Math.PI);
        const m = this.deco(g, mat, 0, -H + 0.08, 0, Math.PI / 2, 0, rot); void m; // XYZ Euler: rz turns the half-ring before rx lays it flat
      }
    }
    // rim floor light strips: amber round the north street, teal round the south
    for (const y of [-9, 9]) for (const [mat, rot] of [[amber, 0], [teal, Math.PI]]) {
      const g = new THREE.TorusGeometry(R - 0.06, 0.07, 4, 160, Math.PI);
      this.deco(g, mat, 0, y, 0, Math.PI / 2, 0, rot);
    }

    // ---- ceiling deck with skylights at the midfields (14 deg), phi 45 (8 deg) and over the bays (10 deg) ----
    Q(7, 41, C0, C1, -H, H, M.ceil, { tile: 6 });
    Q(49, 85, C0, C1, -H, H, M.ceil, { tile: 6 });
    // skylight rims glow so you can find the way up
    for (const [p0, p1] of [[6.6, 7], [41, 41.4], [48.6, 49], [85, 85.4]]) Q(p0, p1, C1, C1 + 0.12, -H, H, (s, south) => (south ? teal : amber), { deco: true });

    // ---- the rim streets (phi from the midfield toward the bay) ----
    // midfield plaza round the spoke foot
    MID(6, 58.5, R, 8, 9.5, M.steel, { tile: 3 });
    MID(6, 58.5, R, -9.5, -8, M.steel, { tile: 3 });
    // alternating barricades
    Q(9, 10.6, 57.8, R, -H, -3, M.steel, { tile: 3 });
    Q(14, 15.6, 57.8, R, 3, H, M.steel, { tile: 3 });
    // two-storey block against one wall; its roof is a walkable ledge 8 m up
    Q(19, 27, 52, R, -H, -5, (s, south) => half(south), { tile: 4 });
    Q(21, 23.5, 57.5, R, 4, 6.5, C[0], { tile: 3 });
    // bulkhead frame: two 6 m doors under a lintel, the skylight at phi 45 is the way round it
    const frame = (p0, p1, mat, doorOut, doorIn) => {
      Q(p0, p1, 50, R, -H, -doorOut, mat, { tile: 3 });
      Q(p0, p1, 50, R, -doorIn, doorIn, mat, { tile: 3 });
      Q(p0, p1, 50, R, doorOut, H, mat, { tile: 3 });
      Q(p0, p1, C1, 50, -H, H, mat, { tile: 3 });
    };
    frame(30, 31.2, (s, south) => half(south), 8, 2);
    Q(35, 38, 57.4, R, -H, -11.4, C[1], { tile: 3 });   // flush to the cap: no slot to snag in
    Q(37, 40, 55, R, 1, 4, C[2], { tile: 3 });
    // pop-up cover under the phi-45 skylight
    Q(46, 47.4, 58.4, R, -5, 5, M.steel, { tile: 3 });
    // block shading the bay approach (flush against the bay bulkhead above its door), a crate across from it
    Q(50, 57, 53, R, 9, H, (s, south) => half(south), { tile: 4 });
    Q(51, 53.5, 57.5, R, -11, -8.5, C[3], { tile: 3 });
    // the bay's own bulkhead in team colours, just outside the shield
    frame(57, 58.2, (s) => team(s), 9, 2.5);
    // inside the bay: low cover so a spawn isn't a free shot through the doors
    Q(66, 68, 58.4, R, -6, -1.5, M.steel, { tile: 3 });
    Q(70, 72, 58.4, R, 2, 6, M.steel, { tile: 3 });
    // bay floor markings
    for (const y of [-12, 12]) Q(60, 90, R - 0.08, R - 0.02, y - 0.25, y + 0.25, (s) => (s > 0 ? M.stripO : M.stripB), { deco: true });

    // ---- the core: hub, spokes, a rail hoop, low-g decks, fins and drifting crates ----
    this.addArc(0, 360, 0, 6, -H, H, M.hull, { tile: 4 });       // the axle, cap to cap
    this.addArc(0, 360, 6, 9, -3, 3, M.steel, { tile: 3 });      // hub collar
    this.addArc(0, 360, 9, 9.08, -0.4, 0.4, white, { deco: true });
    // spokes along z run all the way to the rim floor through the midfield skylights (a ladder between
    // the streets and the core); the spokes along x stop short of the bay skylights
    this.addBox([-1, -1, 9], [1, 1, R], M.girder, { tile: 2 });
    this.addBox([-1, -1, -R], [1, 1, -9], M.girder, { tile: 2 });
    this.addMirrored([9, -1, -1], [40, 1, 1], M.girder, M.girder, { tile: 2 });
    this.addArc(0, 360, 24, 25, -0.6, 0.6, M.steel, { tile: 2 }); // rail hoop to crawl round
    // low-g decks facing the axis (about 0.11 g), one high and one low per quadrant
    Q(14.5, 30.5, 32, 33, 2, 12, M.steel, { tile: 3 });
    Q(59.5, 75.5, 32, 33, -12, -2, M.steel, { tile: 3 });
    Q(14.5, 30.5, 31.9, 31.96, 6.8, 7.2, (s, south) => (south ? teal : amber), { deco: true });
    Q(59.5, 75.5, 31.9, 31.96, -7.2, -6.8, (s, south) => (south ? teal : amber), { deco: true });
    // radial fins to break the core's long sightlines
    Q(39.4, 40.6, 12, 22, -7, 7, M.steel, { tile: 3 });
    Q(54.4, 55.6, 28, 38, 2, 11, M.steel, { tile: 3 });
    // drifting crates
    QB(12, 17, -6, 1.3, C[0]);
    QB(28, 20, 7, 1.3, C[1]);
    QB(66, 18, 4, 1.3, C[2]);
    QB(80, 26, -7, 1.3, C[3]);
    QB(44, 36, -9, 1.2, C[1]);

    // ---- lighting ----
    this.group.add(new THREE.HemisphereLight(0xc8d8ff, 0x3a3630, 0.95));
    const sun = new THREE.DirectionalLight(0xfff0dd, 1.5); sun.position.set(0.25, 1, 0.3); this.group.add(sun);
    this.sun = sun;
    const hub = new THREE.PointLight(0xe8f0ff, 60, 60, 1); this.group.add(hub);
    const ln = new THREE.PointLight(0xffb347, 45, 55, 1); ln.position.set(0, 0, 52); this.group.add(ln);
    const ls = new THREE.PointLight(0x4dffc3, 45, 55, 1); ls.position.set(0, 0, -52); this.group.add(ls);
    const lb = new THREE.PointLight(0x3f8cff, 30, 40, 1); lb.position.set(-55, 0, 0); this.group.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 30, 40, 1); lo.position.set(55, 0, 0); this.group.add(lo);
  }

  // ---------- The Warren: close quarters in a 3D grid of blocks ----------
  // Blocks sit on a 16 m pitch (5 along x, 3 along y and z), leaving 6 m lanes on all three axes and a
  // junction every 16 m. Every hull wall has its own colour (blue/orange ends, amber deck, pale ceiling,
  // green -z, violet +z), blocks are coloured by layer and belted by row, so you can tell which way is
  // which from inside any lane.
  buildWarren() {
    const M = this.mats, [HXw, HYw, HZw] = this.def.bounds, g = this.group;
    const glow = (hex, k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k) });
    const green = glow(0x5fff9a, 1.6), violet = glow(0xc07bff, 1.7), white = M.stripW;
    const hullGreen = panelMat('#3e5c4a', '#27392e', '#5fff9a', 256, 2, { roughness: 0.75, metalness: 0.4 });
    const hullViolet = panelMat('#55456e', '#352b47', '#c07bff', 256, 2, { roughness: 0.75, metalness: 0.4 });
    // ---- hull walls (the bounds box is the collider) ----
    const T = 1;
    const wall = (sx, sy, sz, x, y, z, mat) => { const m = new THREE.Mesh(boxGeo(sx, sy, sz, 6), mat); m.position.set(x, y, z); m.receiveShadow = true; g.add(m); };
    wall(T, 2 * HYw, 2 * HZw, -HXw - T / 2, 0, 0, M.hullBlue);
    wall(T, 2 * HYw, 2 * HZw, HXw + T / 2, 0, 0, M.hullOrange);
    wall(2 * HXw, T, 2 * HZw, 0, -HYw - T / 2, 0, M.deck);
    wall(2 * HXw, T, 2 * HZw, 0, HYw + T / 2, 0, M.ceil);
    wall(2 * HXw, 2 * HYw, T, 0, 0, -HZw - T / 2, hullGreen);
    wall(2 * HXw, 2 * HYw, T, 0, 0, HZw + T / 2, hullViolet);

    // emissive trim is merged into one mesh per colour
    const trim = new Map();
    const strip = (x0, y0, z0, x1, y1, z1, mat) => {
      const bg = new THREE.BoxGeometry(Math.max(0.05, x1 - x0), Math.max(0.05, y1 - y0), Math.max(0.05, z1 - z0));
      bg.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
      if (!trim.has(mat)) trim.set(mat, []);
      trim.get(mat).push(bg);
    };

    // ---- the block grid ----
    const XS = [[-37, -27], [-21, -11], [-5, 5], [11, 21], [27, 37]];
    const YZ = [[-18, -11], [-5, 5], [11, 18]];
    const removed = new Set(['0,0,0', '1,1,-1', '-1,1,-1', '1,-1,1', '-1,-1,1', '2,0,0', '-2,0,0']);
    const layer = [M.cYel, M.cGrey, M.cTeal];   // low / middle / high layer
    const belt = [green, white, violet];       // -z / middle / +z row
    // hollow room: 1 m walls with a 4 m door in the middle of every face
    const room = (lo, hi, mat) => {
      const t = 1, D = 2;
      for (let a = 0; a < 3; a++) for (const side of [0, 1]) {
        const b = (a + 1) % 3, c = (a + 2) % 3;
        const cb = (lo[b] + hi[b]) / 2, cc = (lo[c] + hi[c]) / 2;
        const pieces = [[[lo[b], cb - D], [lo[c], hi[c]]], [[cb + D, hi[b]], [lo[c], hi[c]]], [[cb - D, cb + D], [lo[c], cc - D]], [[cb - D, cb + D], [cc + D, hi[c]]]];
        for (const [[b0, b1], [c0, c1]] of pieces) {
          const mn = [0, 0, 0], mx = [0, 0, 0];
          mn[a] = side ? hi[a] - t : lo[a]; mx[a] = side ? hi[a] : lo[a] + t;
          mn[b] = b0; mx[b] = b1; mn[c] = c0; mx[c] = c1;
          this.addBox(mn, mx, mat, { tile: 3 });
        }
      }
    };
    for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) {
      if (removed.has(`${i},${j},${k}`)) continue;
      const [x0, x1] = XS[i + 2], [y0, y1] = YZ[j + 1], [z0, z1] = YZ[k + 1];
      if (j === 0 && k === 0 && Math.abs(i) === 1) { room([x0, y0, z0], [x1, y1, z1], i > 0 ? M.hullOrange : M.hullBlue); continue; }
      this.addBox([x0, y0, z0], [x1, y1, z1], layer[j + 1], { tile: 3 });
      // belt round the block: its colour names the row (green -z, white middle, violet +z)
      const cx = (x0 + x1) / 2, m = belt[k + 1], e = 0.06, w = 0.18;
      strip(cx - w, y1, z0, cx + w, y1 + e, z1, m); strip(cx - w, y0 - e, z0, cx + w, y0, z1, m);
      strip(cx - w, y0, z1, cx + w, y1, z1 + e, m); strip(cx - w, y0, z0 - e, cx + w, y1, z0, m);
    }
    // the rooms' doorways glow in the team colour
    for (const s of [-1, 1]) {
      const m = s > 0 ? M.stripO : M.stripB, x0 = s * 11, x1 = s * 21;
      for (const x of [x0, x1]) { strip(x - 0.06, -2.1, -2.1, x + 0.06, -1.95, 2.1, m); strip(x - 0.06, 1.95, -2.1, x + 0.06, 2.1, 2.1, m); }
    }

    // ---- junction pillars: every x-lane gets two (at |x| = 8 or 24), so no lane runs spawn to spawn ----
    const lanes = [-21, -8, 8, 21];
    lanes.forEach((y, iy) => lanes.forEach((z, iz) => {
      const p = (iy + iz) % 2 ? 8 : 24;
      this.addMirrored([p - 1.5, y - 1.5, z - 1.5], [p + 1.5, y + 1.5, z + 1.5], M.steel, M.steel, { tile: 2 });
    }));

    // ---- reactor in the central chamber ----
    this.spheres.push({ c: new THREE.Vector3(0, 0, 0), r: 3.5 });
    const reactor = new THREE.Mesh(new THREE.IcosahedronGeometry(3.5, 3), new THREE.MeshStandardMaterial({ color: 0x6a737c, roughness: 0.35, metalness: 0.85, flatShading: true }));
    reactor.castShadow = true; reactor.receiveShadow = true; g.add(reactor);
    const core = new THREE.Mesh(new THREE.TorusGeometry(3.65, 0.22, 8, 48), glow(0x5ff6ff, 2.2));
    core.rotation.x = Math.PI / 2; g.add(core);
    const core2 = core.clone(); core2.rotation.set(0, Math.PI / 2, 0); g.add(core2);
    this.reactorRings = [core, core2];

    // ---- spawn bulkheads at |x| = 42: five 6 m doors, one per lane plus the middle ----
    const BH = (y0, y1, z0, z1) => this.addMirrored([42, y0, z0], [43.5, y1, z1], M.hullOrange, M.hullBlue, { tile: 4 });
    BH(-24, -11, -24, 24); BH(-11, -5, -24, -11); BH(-11, -5, -5, 5); BH(-11, -5, 11, 24);
    BH(-5, -3, -24, 24); BH(-3, 3, -24, -3); BH(-3, 3, 3, 24); BH(3, 5, -24, 24);
    BH(5, 11, -24, -11); BH(5, 11, -5, 5); BH(5, 11, 11, 24); BH(11, 24, -24, 24);
    for (const s of [-1, 1]) {
      const m = s > 0 ? M.stripO : M.stripB, x = s * 41.95;
      for (const [yc, zc] of [[-8, -8], [-8, 8], [8, -8], [8, 8], [0, 0]]) {
        strip(x - 0.04, yc - 3.1, zc - 3.1, x + 0.04, yc - 2.9, zc + 3.1, m); strip(x - 0.04, yc + 2.9, zc - 3.1, x + 0.04, yc + 3.1, zc + 3.1, m);
      }
      // team glyphs on the end wall and consoles in the bay
      const gm = s > 0 ? M.glyphO : M.glyphB;
      for (let n = -2; n <= 2; n++) strip(s * (HXw - 0.05) - 0.05, n * 6 - 0.12, -14, s * (HXw - 0.05) + 0.05, n * 6 + 0.12, 14, gm);
    }
    // ---- lane markers on deck and ceiling: white runs along every x-lane ----
    for (const z of lanes) for (const y of [-HYw + 0.03, HYw - 0.03]) strip(-41, y - 0.03, z - 0.12, 41, y + 0.03, z + 0.12, white);
    for (const [mat, list] of trim) { const mesh = new THREE.Mesh(mergeGeometries(list, false), mat); g.add(mesh); }

    // ---- lighting ----
    g.add(new THREE.HemisphereLight(0xbfd4ff, 0x4a4036, 1.05));
    const sun = new THREE.DirectionalLight(0xfff2dd, 1.7); sun.position.set(0.35, 0.9, 0.25); g.add(sun);
    this.sun = sun;
    const fill = new THREE.DirectionalLight(0x9db8ff, 0.55); fill.position.set(-0.5, -0.6, -1); g.add(fill);
    const rl = new THREE.PointLight(0x5ff6ff, 40, 30, 1); g.add(rl);
    const lb = new THREE.PointLight(0x3f8cff, 26, 40, 1); lb.position.set(-50, 0, 0); g.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 26, 40, 1); lo.position.set(50, 0, 0); g.add(lo);
  }

  // ---------- Dry Dock: long range around a half-built ship ----------
  // A 300 m ship frame (40 m square ribs every 30 m) lies along x between the two spawn docks. Inside the
  // frame is a covered lane broken by tanks, decks and part bulkheads; outside it are open lanes with
  // gantry towers, crane loads and floating hull stock as stepping stones. Spawn to spawn is 400 m.
  buildDryDock() {
    const M = this.mats, g = this.group;
    const glow = (hex, k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k) });
    const F = 20, G = 1.6; // frame half-size, girder thickness
    // ---- ribs (x = 0, ±30 ... ±150) and longerons ----
    const rib = (x, mirror) => {
      const add = mirror ? (a, b, m) => this.addMirrored(a, b, m, m, { tile: 2 }) : (a, b, m) => this.addBox(a, b, m, { tile: 2 });
      add([x - G / 2, F - G, -F], [x + G / 2, F, F], M.girder);
      add([x - G / 2, -F, -F], [x + G / 2, -F + G, F], M.girder);
      add([x - G / 2, -F + G, F - G], [x + G / 2, F - G, F], M.girder);
      add([x - G / 2, -F + G, -F], [x + G / 2, F - G, -F + G], M.girder);
    };
    rib(0, false);
    for (const x of [30, 60, 90, 120, 150]) rib(x, true);
    for (const y of [-1, 1]) for (const z of [-1, 1]) {
      this.addBox([-150, y > 0 ? F - G : -F, z > 0 ? F - G : -F], [150, y > 0 ? F : -F + G, z > 0 ? F : -F + G], M.steel, { tile: 2 });
    }
    this.addBox([-150, -F + G, -1.5], [150, -F + G + 2, 1.5], M.steel, { tile: 2 }); // keel
    // ---- hull plating: patches that alternate cover and windows down the frame ----
    const P = 0.6;
    this.addBox([-90, -F - P, -F], [90, -F, F], M.hull, { tile: 6 });                     // bottom, midships
    this.addMirrored([30, -F, F], [60, F, F + P], M.hull, M.hull, { tile: 6 });           // +z side
    this.addMirrored([90, -F, F], [120, F, F + P], M.hull, M.hull, { tile: 6 });
    this.addBox([-30, -F, -F - P], [30, F, -F], M.hull, { tile: 6 });                     // -z side
    this.addMirrored([60, -F, -F - P], [90, F, -F], M.hull, M.hull, { tile: 6 });
    this.addBox([-15, F, -F], [15, F + P, F], M.hull, { tile: 6 });                       // top
    this.addMirrored([120, F, -F], [150, F + P, F], M.hull, M.hull, { tile: 6 });
    // ---- inside the frame ----
    this.addBox([-8, -F + G, -10], [8, -6, 10], M.steel, { tile: 4 }); // midship machinery
    this.addBox([-4, -6, -4], [4, 2, 4], M.hull, { tile: 4 });                              // bridge on top
    this.addMirrored([16, 8, 2], [28, 8.6, F - G], M.steel, M.steel, { tile: 3 });           // deck high
    this.addMirrored([96, -0.3, -F + G], [114, 0.3, -2], M.steel, M.steel, { tile: 3 });     // deck low
    // part bulkheads: lower-left at the ±60 ribs, upper-right at the ±120 ribs, so the inside lane jogs
    this.addMirrored([61, -F + G, -F + G], [62, 6, 4], M.hull, M.hull, { tile: 4 });
    this.addMirrored([118, -4, -4], [119, F - G, F - G], M.hull, M.hull, { tile: 4 });
    this.addMirrored([36, -F + G, 8], [38.6, -F + G + 2.6, 16], M.cRed, M.cTeal, { tile: 3 });
    this.addMirrored([82, 10, -16], [84.6, 12.6, -8], M.cYel, M.cYel, { tile: 3 });
    this.addMirrored([136, -F + G, -14], [138.6, -F + G + 5.2, -11.4], M.cGrey, M.cGrey, { tile: 3 });
    // fuel tanks
    const tankMat = new THREE.MeshStandardMaterial({ color: 0xc9cdd2, roughness: 0.35, metalness: 0.6 });
    const tank = (x, y, z, r) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 20), tankMat);
      m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; g.add(m);
      const band = new THREE.Mesh(new THREE.TorusGeometry(r + 0.05, 0.18, 6, 48), M.steel); band.position.copy(m.position); band.rotation.y = Math.PI / 2; g.add(band);
      this.spheres.push({ c: new THREE.Vector3(x, y, z), r });
    };
    for (const s of [-1, 1]) { tank(s * 45, 7, -9, 6); tank(s * 75, -8, 9, 6); }
    // ---- the ship's ends: engine blocks with nozzles, the staging area behind them ----
    this.addMirrored([152, -14, -14], [164, 14, 14], M.hull, M.hull, { tile: 4 });
    const noz = new THREE.MeshStandardMaterial({ color: 0x3a3f45, roughness: 0.4, metalness: 0.8, side: THREE.DoubleSide });
    for (const s of [-1, 1]) for (const [y, z] of [[-7, -7], [-7, 7], [7, -7], [7, 7]]) {
      const n = new THREE.Mesh(new THREE.CylinderGeometry(4, 2.4, 6, 24, 1, true), noz); // flares outward
      n.position.set(s * 167, y, z); n.rotation.z = -s * Math.PI / 2; g.add(n);
    }
    // ---- gantry: towers on the floor slab, crane arms over the ship with hull plates on the hooks ----
    this.addBox([-175, -54, -34], [175, -52, 34], M.deck, { tile: 8 });                   // dock floor
    for (const [x, z] of [[40, 40], [110, -40]]) {
      this.addMirrored([x - 3, -52, z - 3], [x + 3, 42, z + 3], M.girder, M.girder, { tile: 3 });
      this.addMirrored([x - 1.2, 38, -44], [x + 1.2, 41, 44], M.girder, M.girder, { tile: 2 });
      this.addMirrored([x - 6, 26, -6], [x + 6, 26.6, 6], M.steel, M.steel, { tile: 3 });  // plate on the hook
    }
    // ---- floating hull stock: stepping stones across the outside lanes ----
    const C = [M.cRed, M.cYel, M.cGrey, M.cTeal];
    const stock = [
      // below the ship
      [[20, -34, -12], [32, -33.4, 0]], [[50, -40, 6], [62, -37.4, 8.6]], [[80, -30, 10], [92, -29.4, 22]], [[128, -44, -20], [130.6, -32, -17.4]],
      // above
      [[18, 32, 8], [30, 34.6, 10.6]], [[64, 30, -20], [76, 30.6, -8]], [[96, 40, 14], [98.6, 50, 16.6]], [[140, 34, -6], [152, 34.6, 6]],
      // +z side
      [[26, -6, 34], [38, 6, 34.6]], [[70, 8, 30], [72.6, 10.6, 42]], [[100, -16, 46], [112, -4, 46.6]], [[140, -4, 30], [142.6, 8, 32.6]],
      // -z side
      [[14, -10, -34], [26, -7.4, -31.4]], [[52, 0, -46], [64, 12, -45.4]], [[86, -18, -30], [88.6, -6, -27.4]], [[134, 6, -46], [146, 18, -45.4]],
    ];
    stock.forEach(([a, b], i) => {
      const thin = Math.min(b[0] - a[0], b[1] - a[1], b[2] - a[2]) < 1;
      this.addMirrored(a, b, thin ? M.steel : C[i % 4], thin ? M.steel : C[(i + 1) % 4], { tile: 3 });
    });
    this.addBox([-6, 30, -30], [6, 32.6, -27.4], C[2], { tile: 3 });
    this.addBox([-6, -36, 26], [6, -35.4, 38], M.steel, { tile: 3 });
    this.addBox([-1.3, -6, 34], [1.3, 6, 36.6], C[0], { tile: 3 });
    // ---- spawn docks ----
    this.addMirrored([204, -30, -34], [206, 30, 34], M.hullOrange, M.hullBlue, { tile: 6 });
    this.addMirrored([192, -30, -34], [206, -28, 34], M.deck, M.deck, { tile: 6 });
    this.addMirrored([192, 28, -34], [206, 30, 34], M.deck, M.deck, { tile: 6 });
    this.addMirrored([188, -8, -24], [190, 6, -14], M.hullOrange, M.hullBlue, { tile: 3 });
    this.addMirrored([188, -8, 14], [190, 6, 24], M.hullOrange, M.hullBlue, { tile: 3 });
    this.addMirrored([188, 10, -5], [190, 16, 5], M.hullOrange, M.hullBlue, { tile: 3 });

    // ---- detail: floodlights on the towers, nav lights on the frame, a hull number ----
    const lamp = glow(0xfff1d6, 2.2), red = glow(0xff3020, 2.5), grn = glow(0x40ff70, 2.5);
    for (const s of [-1, 1]) for (const [x, z] of [[40, 40], [110, -40]]) {
      for (const y of [-20, 10, 40]) this.deco(new THREE.BoxGeometry(2.4, 0.6, 0.3), lamp, s * x, y, z - Math.sign(z) * 3.2);
    }
    for (const x of [-150, 150]) for (const y of [-F, F]) for (const z of [-F, F]) this.deco(new THREE.SphereGeometry(0.5, 10, 8), x < 0 ? grn : red, x, y, z);
    for (let k = -2; k <= 2; k++) this.strip(-90, -F - P - 0.08, k * 3 - 0.15, 90, -F - P - 0.02, k * 3 + 0.15, k ? M.glyphB : M.stripW); // belly stripes
    // nav lights at the dock corners, as in the yard
    for (const s of [-1, 1]) for (const y of [-28, 28]) for (const z of [-34, 34]) this.deco(new THREE.SphereGeometry(0.5, 10, 8), s < 0 ? grn : red, s * 204, y, z);
    // boundary beacons at the corners of the combat area
    const bm = new THREE.MeshBasicMaterial({ color: 0xff4b3a });
    const B = this.def.bounds;
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
      const b = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), bm); b.position.set(x * B[0], y * B[1], z * B[2]); g.add(b);
    }
    // ---- lighting: hard sunlight, earthshine, team glows ----
    g.add(new THREE.HemisphereLight(0x9ab4ff, 0x2a3348, 0.75));
    const sun = new THREE.DirectionalLight(0xfff2dd, 3.1); sun.position.set(-0.3, 0.6, -1); g.add(sun);
    this.sun = sun;
    const earth = new THREE.DirectionalLight(0x6f9cff, 0.8); earth.position.set(0.2, -1, 0.5); g.add(earth);
    const lb = new THREE.PointLight(0x3f8cff, 30, 60, 1); lb.position.set(-196, 0, 0); g.add(lb);
    const lo = new THREE.PointLight(0xff8a2a, 30, 60, 1); lo.position.set(196, 0, 0); g.add(lo);
  }
}
