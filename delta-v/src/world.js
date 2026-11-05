import * as THREE from 'three';
import { rayBox, raySphere, closestOnBox, clamp, MinHeap, rand } from './math.js';
import { buildPod } from './models.js';

const HX = 72, HY = 36, HZ = 36;

export const MAPS = {
  hangar: { name: 'Hangar Bay', desc: 'Enclosed 144 m hangar. Walls everywhere to push off.', enclosed: true, bounds: [72, 36, 36], navStep: [6, 7.5], navR: 10.5, spawnX: 64 },
  spin: { name: 'Spin Drum', desc: 'Rotating drum station: 0.5 g on the rim, zero-g at the axis. Walk the floor, fly the core.', enclosed: true, drum: 36, omega: 0.3727, bounds: [70, 36, 36], navStep: [6, 7], navR: 10.5, spawnX: 64 },
  yard: { name: 'Derelict Yard', desc: 'Open orbit, 300 m across. No walls: drift too far and your suit runs out of luck.', enclosed: false, bounds: [150, 70, 70], navStep: [11, 11], navR: 19.5, spawnX: 124 },
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
    this.drum = this.def.drum || 0;          // radius of a spinning drum hull (axis = x), 0 if none
    this.omega = this.def.omega || 0;        // spin rate (rad/s): centrifugal + Coriolis in the rotating frame
    const B = this.def.bounds;
    this.bounds = { min: [-B[0], -B[1], -B[2]], max: [B[0], B[1], B[2]] };
    this.boxes = [];
    this.spheres = [];
    this.pods = [];
    this.group = new THREE.Group();
    scene.add(this.group);
    this._hit = { t: 0, n: new THREE.Vector3(), kind: '', obj: null };
    this._rb = { n: [0, 0, 0] };
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
    if (this.drum) this.buildDrum();
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
    return out.set(0, p.y * w2, p.z * w2);
  }

  /** Coriolis acceleration -2 Ω×v for spin about +x. */
  coriolis(v, out) {
    if (!this.omega) return out.set(0, 0, 0);
    return out.set(0, 2 * this.omega * v.z, -2 * this.omega * v.y);
  }

  /** "Up" on the drum floor: toward the axis. */
  upAt(p, out) {
    const r = Math.hypot(p.y, p.z);
    return r > 1e-6 ? out.set(0, -p.y / r, -p.z / r) : out.set(0, 1, 0);
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
    this.barrierX = this.drum ? 55.8 : this.enclosed ? 55.8 : 112;
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
      const m = new THREE.Mesh(this.drum ? new THREE.CircleGeometry(this.drum, 64) : new THREE.PlaneGeometry(2 * B[2], 2 * B[1]), mat);
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
    const places = this.drum ? [] : this.enclosed
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
    if (!ignorePods) for (const p of this.pods) {
      const t = raySphere(o, d, p.pos, p.r, best);
      if (t >= 0 && t < best) { best = t; kind = 'pod'; obj = p; hit.n.set(o.x + d.x * t - p.pos.x, o.y + d.y * t - p.pos.y, o.z + d.z * t - p.pos.z).normalize(); }
    }
    // hull (inside of the bounds box)
    const oa = [o.x, o.y, o.z], da = [d.x, d.y, d.z];
    if (this.drum) {
      // inside of the drum: exit through the cylinder wall
      const a = d.y * d.y + d.z * d.z;
      if (a > 1e-12) {
        const b = 2 * (o.y * d.y + o.z * d.z), c = o.y * o.y + o.z * o.z - this.drum * this.drum;
        const disc = b * b - 4 * a * c;
        if (disc >= 0) {
          const t = (-b + Math.sqrt(disc)) / (2 * a);
          if (t >= 0 && t < best) { best = t; kind = 'wall'; obj = null; hit.n.set(0, -(o.y + d.y * t), -(o.z + d.z * t)).normalize(); }
        }
      }
    }
    if (this.enclosed) for (let i = 0; i < (this.drum ? 1 : 3); i++) {
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
      const R2 = (this.drum - r) * (this.drum - r);
      if (a.y * a.y + a.z * a.z > R2 || b.y * b.y + b.z * b.z > R2) return false;
    }
    const sx0 = Math.min(a.x, b.x) - r, sx1 = Math.max(a.x, b.x) + r, sy0 = Math.min(a.y, b.y) - r, sy1 = Math.max(a.y, b.y) + r, sz0 = Math.min(a.z, b.z) - r, sz1 = Math.max(a.z, b.z) + r;
    const eb = { min: [0, 0, 0], max: [0, 0, 0] };
    for (const bx of this.boxes) {
      if (bx.max[0] < sx0 || bx.min[0] > sx1 || bx.max[1] < sy0 || bx.min[1] > sy1 || bx.max[2] < sz0 || bx.min[2] > sz1) continue;
      for (let i = 0; i < 3; i++) { eb.min[i] = bx.min[i] - r; eb.max[i] = bx.max[i] + r; }
      if (rayBox(a, d, eb, len, null) >= 0) return false;
    }
    for (const s of this.spheres) if (raySphere(a, d, s.c, s.r + r, len) >= 0) return false;
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
    let best = this.drum ? Math.min(p.x - this.bounds.min[0], this.bounds.max[0] - p.x, this.drum - Math.hypot(p.y, p.z))
      : this.enclosed ? Math.min(p.x - this.bounds.min[0], this.bounds.max[0] - p.x, p.y - this.bounds.min[1], this.bounds.max[1] - p.y, p.z - this.bounds.min[2], this.bounds.max[2] - p.z) : 1e9;
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
    return best;
  }

  /**
   * Resolve a sphere against static geometry. Calls onContact(normal, depth, kind) for each contact.
   * Returns nothing; caller handles velocity response.
   */
  sphereContacts(p, r, cb) {
    const c = new THREE.Vector3(), n = new THREE.Vector3();
    if (this.drum) {
      const rr = Math.hypot(p.y, p.z), lim = this.drum - r;
      if (rr > lim && rr > 1e-6) { n.set(0, -p.y / rr, -p.z / rr); cb(n, rr - lim, 'wall', null); }
    }
    if (this.enclosed) for (let i = 0; i < (this.drum ? 1 : 3); i++) {
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
  }

  /** Nearest grabbable surface point within range. Returns {point, normal, kind, obj} or null. */
  nearestSurface(p, range) {
    let best = null, bestD = range;
    const c = new THREE.Vector3();
    if (this.drum) {
      const rr = Math.hypot(p.y, p.z), d = this.drum - rr;
      if (d < bestD && rr > 1e-6) { bestD = d; best = { point: new THREE.Vector3(p.x, p.y / rr * this.drum, p.z / rr * this.drum), normal: new THREE.Vector3(0, -p.y / rr, -p.z / rr), kind: 'wall', obj: null }; }
    }
    if (this.enclosed) for (let i = 0; i < (this.drum ? 1 : 3); i++) {
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
    const off = 1.15;
    const addSurf = (p, n) => {
      if (this.clearance(p) >= off - 0.05) nodes.push({ pos: p.clone(), surf: true, normal: n.clone() });
    };
    for (const b of this.boxes) {
      for (let ax = 0; ax < 3; ax++) for (const s of [-1, 1]) {
        const u = (ax + 1) % 3, v = (ax + 2) % 3;
        const ul = b.max[u] - b.min[u], vl = b.max[v] - b.min[v];
        if (ul < 1.5 && vl < 1.5) continue;
        const nu = Math.max(1, Math.round(ul / 5)), nv = Math.max(1, Math.round(vl / 5));
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
      for (let x = -this.bounds.max[0] + 6; x < this.bounds.max[0] - 3; x += 7) for (let k = 0; k < 28; k++) {
        const a = k / 28 * Math.PI * 2, n = new THREE.Vector3(0, -Math.cos(a), -Math.sin(a));
        tmp.set(x, Math.cos(a) * (this.drum - off), Math.sin(a) * (this.drum - off));
        addSurf(tmp, n);
      }
    }
    // hull surface nodes
    if (this.enclosed) for (let ax = 0; ax < (this.drum ? 1 : 3); ax++) for (const s of [-1, 1]) {
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
  findPath(from, goalIdx, avoid = null) {
    const start = this.nearestNode(from);
    if (start < 0 || goalIdx < 0) return null;
    const N = this.nav.length;
    const g = new Float32Array(N).fill(Infinity);
    const came = new Int32Array(N).fill(-1);
    const closed = new Uint8Array(N);
    const goal = this.nav[goalIdx].pos;
    const heap = new MinHeap();
    g[start] = 0; heap.push(start, start === goalIdx ? 0 : this.nav[start].pos.distanceTo(goal));
    let iter = 0;
    while (heap.size && iter++ < 6000) {
      const cur = heap.pop();
      if (cur === goalIdx) break;
      if (closed[cur]) continue;
      closed[cur] = 1;
      const nd = this.nav[cur];
      for (let k = 0; k < nd.nb.length; k++) {
        const j = nd.nb[k];
        if (closed[j]) continue;
        let c = nd.cost[k];
        if (avoid) c += avoid(this.nav[j]);
        const ng = g[cur] + c;
        if (ng < g[j]) { g[j] = ng; came[j] = cur; heap.push(j, ng + this.nav[j].pos.distanceTo(goal)); }
      }
    }
    if (came[goalIdx] < 0 && goalIdx !== start) return null;
    const path = [];
    let c = goalIdx;
    while (c >= 0 && c !== start) { path.push(this.nav[c].pos.clone()); c = came[c]; }
    path.reverse();
    if (!path.length) path.push(this.nav[goalIdx].pos.clone());
    return path;
  }

  makeSpawns(side) {
    const pts = [];
    const X = this.def.spawnX;
    const zs = this.enclosed ? [-14, -5, 5, 14] : [-20, -7, 7, 20];
    for (const y of [-10, -3, 4, 10]) for (const z of zs) pts.push(new THREE.Vector3(side * X, y, z));
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
}
