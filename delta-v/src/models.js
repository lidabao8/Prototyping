import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// ---------------------------------------------------------------------------
// Geometry builder: collect transformed parts per material, merge into one mesh each.
// Keeps detailed models cheap (a handful of draw calls per object).
// ---------------------------------------------------------------------------
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

export class Builder {
  constructor() { this.parts = new Map(); }
  add(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    _m.compose(_p.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
    return this.addMatrix(geo, mat, _m);
  }
  addMatrix(geo, mat, m) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    g.applyMatrix4(m);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!this.parts.has(mat)) this.parts.set(mat, []);
    this.parts.get(mat).push(g);
    return this;
  }
  /** Cylinder spanning two points (limbs, struts). */
  limb(a, b, r0, r1, mat, seg = 8) {
    const d = new THREE.Vector3().subVectors(b, a);
    const len = d.length();
    const g = new THREE.CylinderGeometry(r1, r0, len, seg);
    _q.setFromUnitVectors(UP, d.normalize());
    _m.compose(_p.addVectors(a, b).multiplyScalar(0.5), _q, _s.set(1, 1, 1));
    return this.addMatrix(g, mat, _m);
  }
  build(shadows = true) {
    const grp = new THREE.Group();
    for (const [mat, geos] of this.parts) {
      const merged = mergeGeometries(geos, false);
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = shadows; mesh.receiveShadow = shadows;
      if (mat.userData && mat.userData.glow) { mesh.castShadow = false; mesh.userData.noOutline = true; }
      grp.add(mesh);
    }
    return grp;
  }
}

const RB = (w, h, d, r = 0.02, seg = 2) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3));
const BOX = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const CYL = (r0, r1, h, s = 10) => new THREE.CylinderGeometry(r1, r0, h, s);
const SPH = (r, w = 12, h = 9) => new THREE.SphereGeometry(r, w, h);
const TOR = (r, t, s = 8, ts = 20) => new THREE.TorusGeometry(r, t, s, ts);
const CONE = (r, h, s = 8) => new THREE.ConeGeometry(r, h, s);

// ---------------------------------------------------------------------------
// Materials (cached per team)
// ---------------------------------------------------------------------------
const matCache = {};
function glowMat(color, k = 2.2) {
  const m = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k) });
  m.userData.glow = true;
  return m;
}
export function teamMats(teamColor) {
  const key = 'team' + teamColor;
  if (matCache[key]) return matCache[key];
  const tc = new THREE.Color(teamColor);
  return (matCache[key] = {
    suit: new THREE.MeshStandardMaterial({ color: 0xdfe1e4, roughness: 0.82, metalness: 0.02 }),
    fabric: new THREE.MeshStandardMaterial({ color: 0xb9bdc3, roughness: 0.92, metalness: 0 }),
    hard: new THREE.MeshStandardMaterial({ color: 0x8d949c, roughness: 0.38, metalness: 0.75 }),
    dark: new THREE.MeshStandardMaterial({ color: 0x2c3137, roughness: 0.55, metalness: 0.45 }),
    team: new THREE.MeshStandardMaterial({ color: tc, roughness: 0.5, metalness: 0.2, emissive: tc, emissiveIntensity: 0.25 }),
    visor: new THREE.MeshStandardMaterial({ color: 0x241d10, roughness: 0.06, metalness: 1, emissive: tc, emissiveIntensity: 0.12 }),
    glow: glowMat(teamColor, 2.4),
    white: glowMat(0xdff2ff, 1.8),
  });
}
function gunMats(teamColor) {
  const key = 'gun' + teamColor;
  if (matCache[key]) return matCache[key];
  return (matCache[key] = {
    poly: new THREE.MeshStandardMaterial({ color: 0x24282d, roughness: 0.62, metalness: 0.25 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x8a9198, roughness: 0.3, metalness: 0.85 }),
    gun: new THREE.MeshStandardMaterial({ color: 0x4a525a, roughness: 0.45, metalness: 0.6 }),
    tan: new THREE.MeshStandardMaterial({ color: 0x7d7461, roughness: 0.7, metalness: 0.15 }),
    accent: new THREE.MeshStandardMaterial({ color: teamColor, roughness: 0.45, emissive: teamColor, emissiveIntensity: 0.35 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x7fd8ff, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide }),
    coil: glowMat(0x9ff0ff, 2.5),
    red: glowMat(0xff3a2a, 1.6),
    green: glowMat(0x4dff7a, 1.6),
    orange: glowMat(0xff8a2a, 1.8),
    yellow: glowMat(0xffd23a, 2.4),
    yellowDim: glowMat(0xffc23a, 1.2),
    yellowPaint: new THREE.MeshStandardMaterial({ color: 0xe0b020, roughness: 0.4, metalness: 0.3, emissive: 0x3a2a00, emissiveIntensity: 0.4 }),
  });
}

// ---------------------------------------------------------------------------
// Guns. Origin = pistol grip. userData: sight (centre of the sight glass), hand (support hand),
// grip, muzzle, zoom, mag (animated part) and its rest position.
// ---------------------------------------------------------------------------
/** Simple reticles: a centre dot plus one light element, nothing busier. */
function reticle(kind, mat, scale = 1) {
  const g = new THREE.Group();
  const add = (geo, x = 0, y = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, 0); m.rotation.z = rz; g.add(m); };
  const k = scale;
  add(new THREE.CircleGeometry(0.0011 * k, 12));
  if (kind === 'ticks') {
    // dot with three short ticks: top, left, right
    add(new THREE.PlaneGeometry(0.0006 * k, 0.0026 * k), 0, 0.0042 * k);
    add(new THREE.PlaneGeometry(0.0026 * k, 0.0006 * k), -0.0042 * k, 0);
    add(new THREE.PlaneGeometry(0.0026 * k, 0.0006 * k), 0.0042 * k, 0);
  } else if (kind === 'ring') {
    // dot inside a broken ring (four arcs)
    for (let i = 0; i < 4; i++) add(new THREE.RingGeometry(0.0058 * k, 0.0066 * k, 16, 1, i * Math.PI / 2 + 0.25, Math.PI / 2 - 0.5));
  } else if (kind === 'chevron') {
    add(new THREE.PlaneGeometry(0.0036 * k, 0.0006 * k), -0.0013 * k, -0.0028 * k, 0.6);
    add(new THREE.PlaneGeometry(0.0036 * k, 0.0006 * k), 0.0013 * k, -0.0028 * k, -0.6);
  } else if (kind === 'bars') {
    add(new THREE.PlaneGeometry(0.0034 * k, 0.0006 * k), -0.0042 * k, 0);
    add(new THREE.PlaneGeometry(0.0034 * k, 0.0006 * k), 0.0042 * k, 0);
  } else if (kind === 'cross') {
    // thin crosshair with an open centre
    for (const [x, y, w, h] of [[0.006, 0, 0.007, 0.0005], [-0.006, 0, 0.007, 0.0005], [0, 0.006, 0.0005, 0.007], [0, -0.006, 0.0005, 0.007]]) add(new THREE.PlaneGeometry(w * k, h * k), x * k, y * k);
  }
  return g;
}

/** Sci-fi holographic sight: angular housing, floating window, emitter glow along the bottom edge. */
function holoSight(B, M, y, z, reticleMat, wide = 0.05, kind = 'ticks', edgeMat = null) {
  const h = 0.042, d = 0.06;
  B.add(RB(wide * 0.7, 0.016, 0.085, 0.005), M.poly, 0, y - h / 2 - 0.012, z + 0.005);
  B.add(RB(wide * 0.5, 0.012, 0.03, 0.004), M.gun, 0, y - h / 2 - 0.022, z + 0.03);
  // side fins, raked back
  for (const s of [-1, 1]) {
    B.add(RB(0.007, h + 0.014, d, 0.003), M.poly, s * (wide / 2 + 0.002), y + 0.002, z, -0.18, 0, 0);
    B.add(BOX(0.0025, h * 0.7, 0.004), edgeMat || M.coil, s * (wide / 2 + 0.006), y, z - d / 2 + 0.006);
  }
  B.add(RB(wide + 0.012, 0.007, d * 0.75, 0.003), M.poly, 0, y + h / 2 + 0.008, z + 0.006);
  B.add(BOX(wide * 0.8, 0.003, 0.006), edgeMat || M.coil, 0, y - h / 2 - 0.004, z - d / 2 + 0.004);
  B.add(CYL(0.005, 0.005, 0.012, 8), edgeMat || M.coil, 0, y - h / 2 - 0.006, z + d / 2 - 0.004, Math.PI / 2);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(wide, h), M.glass);
  glass.position.set(0, y, z - 0.01);
  const ret = reticle(kind, reticleMat);
  ret.position.set(0, y, z - 0.011);
  return [glass, ret];
}

/** Frameless reflex sight: a bare pane of glass standing in a slotted foot, on a riser and a rail clamp
 *  (jaws hugging the rail, cross-bolt and thumb nut). The emitter in the foot throws the reticle onto the glass.
 *  railY = top of the rail/receiver the clamp sits on. */
function floatingDot(B, M, y, z, reticleMat, kind, edgeMat, railY) {
  const W = 0.05, H = 0.038, gz = z - 0.01;
  const base = railY, clampH = 0.011, footY = y - H / 2;
  // rail clamp: body, two jaws that wrap down over the rail edges, cross-bolt and a thumb nut
  B.add(RB(0.03, clampH, 0.048, 0.003), M.poly, 0, base + clampH / 2, z + 0.01);
  for (const s of [-1, 1]) B.add(RB(0.005, 0.016, 0.036, 0.0015), M.gun, s * 0.0175, base, z + 0.01);
  B.add(CYL(0.0028, 0.0028, 0.042, 8), M.metal, 0, base - 0.002, z + 0.018, 0, 0, Math.PI / 2);
  B.add(CYL(0.0065, 0.0065, 0.005, 10), M.metal, 0.023, base - 0.002, z + 0.018, 0, 0, Math.PI / 2);
  B.add(CYL(0.0035, 0.0035, 0.003, 6), M.gun, -0.0215, base - 0.002, z + 0.018, 0, 0, Math.PI / 2);
  // riser: a short tapered post from the clamp up to the glass foot, braced at the back
  const rise = footY - 0.004 - (base + clampH);
  if (rise > 0.001) {
    B.add(RB(0.016, rise + 0.002, 0.012, 0.002), M.gun, 0, base + clampH + rise / 2, gz + 0.002);
    B.add(RB(0.01, rise + 0.002, 0.02, 0.002), M.poly, 0, base + clampH + rise / 2, gz + 0.014, -0.25);
  }
  // slotted foot the pane is seated in (holds only the bottom edge), set screws at each end
  B.add(RB(W + 0.006, 0.006, 0.009, 0.002), M.poly, 0, footY - 0.001, gz);
  for (const s of [-1, 1]) B.add(CYL(0.0016, 0.0016, 0.002, 6), M.metal, s * (W / 2 - 0.001), footY - 0.001, gz - 0.0045, Math.PI / 2);
  // emitter window in the foot, behind the glass, facing it
  B.add(BOX(0.008, 0.003, 0.003), edgeMat || reticleMat, 0, footY + 0.0005, gz + 0.006);
  // the pane: faintly tinted glass with brighter polished edges so you can see where it is
  const pane = new THREE.Group();
  const glass = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.0016), new THREE.MeshPhysicalMaterial({ color: 0xbfeaff, roughness: 0.04, metalness: 0, envMapIntensity: 0.25, specularIntensity: 0.4, transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide }));
  glass.position.set(0, y, gz);
  const edgeM = new THREE.MeshBasicMaterial({ color: 0xcff2ff, transparent: true, opacity: 0.3, depthWrite: false });
  const e = 0.0011;
  for (const [ex, ey, ew, eh] of [[0, H / 2 - e / 2, W, e], [-W / 2 + e / 2, 0, e, H], [W / 2 - e / 2, 0, e, H]]) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(ew, eh, 0.0019), edgeM);
    m.position.set(ex, y + ey, gz);
    pane.add(m);
  }
  pane.add(glass);
  const ret = reticle(kind, reticleMat);
  ret.position.set(0, y, gz + 0.0012); ret.renderOrder = 2;
  return [pane, ret];
}

/** Sci-fi scope: a hollow squared tube you can actually look through, glowing objective ring, side rangefinder. */
function scopeSight(B, M, y, z, len, r, reticleMat, edgeMat = null) {
  const W = r * 2.3, T = r * 0.28;          // outer width, wall thickness
  const frame = (zz, depth, grow, mat) => {  // square ring (top, bottom, left, right bars)
    const w = W * grow;
    B.add(RB(w, T * 1.3, depth, T * 0.5), mat, 0, y + w / 2 - T * 0.65, zz);
    B.add(RB(w, T * 1.3, depth, T * 0.5), mat, 0, y - w / 2 + T * 0.65, zz);
    B.add(RB(T * 1.3, w - T * 2.4, depth, T * 0.5), mat, w / 2 - T * 0.65, y, zz);
    B.add(RB(T * 1.3, w - T * 2.4, depth, T * 0.5), mat, -w / 2 + T * 0.65, y, zz);
  };
  frame(z, len, 1, M.poly);                                    // tube walls
  frame(z - len / 2 - 0.012, 0.028, 1.18, M.gun);              // objective hood
  frame(z + len / 2 + 0.01, 0.024, 1.08, M.gun);               // eyepiece
  B.add(TOR(r * 1.02, 0.0022, 6, 24), edgeMat || M.coil, 0, y, z - len / 2 - 0.027);
  B.add(BOX(0.016, 0.026, 0.024), M.gun, 0, y - W / 2 - 0.012, z - len * 0.28);
  B.add(BOX(0.016, 0.026, 0.024), M.gun, 0, y - W / 2 - 0.012, z + len * 0.28);
  B.add(RB(0.016, 0.022, len * 0.45, 0.004), M.poly, W / 2 + 0.009, y + r * 0.3, z);
  B.add(BOX(0.002, 0.008, len * 0.3), edgeMat || M.coil, W / 2 + 0.018, y + r * 0.3, z);
  B.add(BOX(W * 0.7, 0.002, 0.004), edgeMat || M.coil, 0, y + W / 2 + 0.0012, z + len * 0.2);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(W - T * 2.6, W - T * 2.6), M.glass);
  glass.position.set(0, y, z + len / 2 - 0.004);
  const ret = reticle('cross', reticleMat, 0.85);
  ret.position.set(0, y, z + len / 2 - 0.005);
  return [glass, ret];
}

export function buildGun(id, teamColor, opts = {}) {
  const M = gunMats(teamColor);
  const B = new Builder();
  const g = new THREE.Group();
  const ud = { zoom: 1.5, sight: new THREE.Vector3(), hand: new THREE.Vector3(0, -0.04, -0.34), grip: new THREE.Vector3(0, -0.08, 0.01), muzzle: new THREE.Vector3(0, 0.01, -0.75) };
  let extra = [];
  let mag = null;
  const MB = new Builder();
  if (id === 'rifle') {
    B.add(RB(0.07, 0.095, 0.34, 0.012), M.gun, 0, 0, -0.05);
    B.add(RB(0.072, 0.03, 0.2, 0.008), M.poly, 0, -0.055, -0.02);
    B.add(BOX(0.052, 0.014, 0.4), M.metal, 0, 0.055, -0.1);
    for (let i = 0; i < 12; i++) B.add(BOX(0.056, 0.006, 0.012), M.metal, 0, 0.064, -0.28 + i * 0.03);
    B.add(RB(0.078, 0.085, 0.3, 0.02), M.poly, 0, -0.004, -0.37);
    for (let i = 0; i < 5; i++) { B.add(BOX(0.08, 0.012, 0.03), M.dark || M.gun, 0, 0.012, -0.29 - i * 0.045); }
    B.add(BOX(0.079, 0.012, 0.22), M.accent, 0, -0.03, -0.37);
    B.add(CYL(0.013, 0.013, 0.26, 10), M.metal, 0, 0.012, -0.6, Math.PI / 2);
    B.add(CYL(0.021, 0.021, 0.07, 10), M.poly, 0, 0.012, -0.74, Math.PI / 2);
    for (let i = 0; i < 3; i++) B.add(BOX(0.044, 0.008, 0.01), M.gun, 0, 0.012, -0.72 - i * 0.018);
    B.add(RB(0.045, 0.13, 0.062, 0.015), M.poly, 0, -0.1, 0.02, -0.28);
    B.add(TOR(0.028, 0.005, 6, 16), M.gun, 0, -0.065, -0.04, 0, Math.PI / 2);
    B.add(RB(0.05, 0.075, 0.16, 0.015), M.poly, 0, -0.005, 0.19);
    B.add(RB(0.058, 0.11, 0.07, 0.015), M.poly, 0, -0.02, 0.3);
    B.add(BOX(0.06, 0.12, 0.02), M.dark || M.gun, 0, -0.02, 0.34);
    B.add(BOX(0.03, 0.025, 0.05), M.gun, 0.04, 0.02, -0.02);
    MB.add(RB(0.038, 0.17, 0.07, 0.01), M.poly, 0, -0.08, 0, 0.18);
    MB.add(BOX(0.04, 0.02, 0.072), M.metal, 0, -0.165, -0.015, 0.18);
    extra = floatingDot(B, M, 0.1, -0.08, M.red, 'ticks', null, 0.064);
    ud.sight.set(0, 0.1, -0.1); ud.zoom = 1.6; ud.magRest = new THREE.Vector3(0, -0.05, -0.15); ud.muzzle.set(0, 0.012, -0.78);
  } else if (id === 'shotgun') {
    B.add(RB(0.085, 0.11, 0.32, 0.015), M.gun, 0, 0, -0.04);
    B.add(CYL(0.021, 0.021, 0.44, 12), M.metal, 0, 0.025, -0.4, Math.PI / 2);
    B.add(CYL(0.017, 0.017, 0.36, 10), M.gun, 0, -0.022, -0.36, Math.PI / 2);
    B.add(CYL(0.026, 0.026, 0.03, 12), M.poly, 0, 0.025, -0.62, Math.PI / 2);
    B.add(RB(0.05, 0.14, 0.065, 0.015), M.tan, 0, -0.105, 0.03, -0.25);
    B.add(RB(0.06, 0.09, 0.22, 0.02), M.tan, 0, -0.01, 0.22);
    B.add(BOX(0.062, 0.11, 0.025), M.poly, 0, -0.015, 0.34);
    B.add(BOX(0.086, 0.012, 0.2), M.accent, 0, 0.04, -0.05);
    B.add(TOR(0.03, 0.005, 6, 16), M.gun, 0, -0.07, -0.03, 0, Math.PI / 2);
    for (let i = 0; i < 4; i++) B.add(CYL(0.008, 0.008, 0.03, 8), M.red, 0.045, 0.0, -0.1 - i * 0.04, 0, 0, Math.PI / 2);
    MB.add(RB(0.06, 0.06, 0.15, 0.02), M.tan, 0, 0, 0);
    for (let i = 0; i < 5; i++) MB.add(BOX(0.062, 0.006, 0.01), M.poly, 0, 0.0, -0.06 + i * 0.03);
    extra = floatingDot(B, M, 0.092, -0.05, M.green, 'ring', M.green, 0.055);
    ud.sight.set(0, 0.092, -0.07); ud.zoom = 1.25; ud.port = new THREE.Vector3(0, -0.06, -0.05); ud.cartridge = 'shell'; ud.muzzle.set(0, 0.025, -0.64); ud.magRest = new THREE.Vector3(0, -0.022, -0.4); ud.hand.set(0, -0.04, -0.4); ud.pump = true;
  } else if (id === 'gyrojet') {
    // tri-barrel rocket carbine with a drum magazine
    B.add(RB(0.085, 0.11, 0.3, 0.018), M.gun, 0, 0, -0.06);
    B.add(RB(0.09, 0.03, 0.22, 0.01), M.poly, 0, 0.065, -0.06);
    B.add(BOX(0.092, 0.012, 0.18), M.accent, 0, -0.02, -0.08);
    for (let i = 0; i < 3; i++) {
      const a = i * Math.PI * 2 / 3 + Math.PI / 2;
      const bx = Math.cos(a) * 0.024, by = Math.sin(a) * 0.024 + 0.012;
      B.add(CYL(0.016, 0.016, 0.3, 10), M.metal, bx, by, -0.36, Math.PI / 2);
      B.add(CYL(0.019, 0.016, 0.03, 10), M.poly, bx, by, -0.52, Math.PI / 2);
    }
    B.add(CYL(0.05, 0.05, 0.02, 14), M.gun, 0, 0.012, -0.28, Math.PI / 2);
    B.add(CYL(0.05, 0.05, 0.02, 14), M.gun, 0, 0.012, -0.47, Math.PI / 2);
    B.add(TOR(0.05, 0.006, 6, 20), M.orange, 0, 0.012, -0.49);
    for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) B.add(BOX(0.006, 0.05, 0.018), M.poly, sx * 0.045, 0.0, -0.02 - i * 0.04);
    B.add(RB(0.048, 0.14, 0.065, 0.015), M.poly, 0, -0.105, 0.02, -0.26);
    B.add(TOR(0.03, 0.005, 6, 16), M.gun, 0, -0.07, -0.04, 0, Math.PI / 2);
    // skeleton stock
    B.limb(new THREE.Vector3(0, 0.03, 0.08), new THREE.Vector3(0, 0.0, 0.3), 0.01, 0.01, M.metal, 6);
    B.limb(new THREE.Vector3(0, -0.05, 0.08), new THREE.Vector3(0, -0.04, 0.3), 0.01, 0.01, M.metal, 6);
    B.add(RB(0.05, 0.11, 0.025, 0.008), M.poly, 0, -0.02, 0.31);
    // drum (animated): axis along x
    MB.add(CYL(0.062, 0.062, 0.07, 18), M.gun, 0, 0, 0, 0, 0, Math.PI / 2);
    MB.add(CYL(0.064, 0.064, 0.012, 18), M.orange, 0, 0, 0, 0, 0, Math.PI / 2);
    MB.add(CYL(0.02, 0.02, 0.075, 10), M.poly, 0, 0, 0, 0, 0, Math.PI / 2);
    for (let k = 0; k < 5; k++) { const an = k / 5 * Math.PI * 2; MB.add(CYL(0.011, 0.011, 0.074, 8), M.metal, 0, Math.cos(an) * 0.04, Math.sin(an) * 0.04, 0, 0, Math.PI / 2); }
    extra = holoSight(B, M, 0.115, -0.07, M.orange, 0.046, 'chevron', M.orange);
    ud.sight.set(0, 0.115, -0.08); ud.zoom = 1.7; ud.magRest = new THREE.Vector3(0, -0.085, -0.13); ud.hand.set(0, -0.03, -0.36); ud.drum = true; ud.port = new THREE.Vector3(0.045, -0.06, -0.13); ud.cartridge = 'rocket';
    ud.muzzle.set(0, 0.012, -0.54);
  } else if (id === 'recoilless') {
    B.add(CYL(0.068, 0.068, 0.9, 18), M.tan, 0, 0.02, -0.2, Math.PI / 2);
    B.add(CYL(0.07, 0.07, 0.06, 18), M.gun, 0, 0.02, -0.64, Math.PI / 2);
    B.add(CYL(0.11, 0.07, 0.2, 18), M.gun, 0, 0.02, 0.34, Math.PI / 2);
    for (let i = 0; i < 3; i++) B.add(TOR(0.07, 0.007, 6, 22), M.gun, 0, 0.02, -0.4 + i * 0.25);
    B.add(RB(0.05, 0.14, 0.07, 0.015), M.poly, 0, -0.1, 0.0, -0.2);
    B.add(RB(0.05, 0.12, 0.07, 0.015), M.poly, 0, -0.09, -0.3, 0.2);
    B.add(BOX(0.05, 0.02, 0.4), M.accent, -0.07, 0.02, -0.2);
    MB.add(CYL(0.05, 0.05, 0.16, 14), M.metal, 0, 0, 0, Math.PI / 2);
    MB.add(CYL(0.052, 0.052, 0.02, 14), M.red, 0, 0, 0.08, Math.PI / 2);
    extra = scopeSight(B, M, 0.13, -0.12, 0.2, 0.022, M.red);
    ud.sight.set(0, 0.13, -0.12); ud.zoom = 2.6; ud.eyeRelief = 0.2; ud.scope = true; ud.muzzle.set(0, 0.02, -0.67); ud.magRest = new THREE.Vector3(0, 0.02, 0.52); ud.hand.set(0, -0.06, -0.3); ud.breech = true;
  } else {
    // LM-2 maser: dark angular body, exposed yellow energy cells, twin emitter prongs around a glowing core
    B.add(RB(0.085, 0.1, 0.36, 0.02), M.gun, 0, 0, -0.05);
    B.add(RB(0.07, 0.035, 0.3, 0.012), M.poly, 0, 0.06, -0.06);
    B.add(BOX(0.008, 0.004, 0.26), M.yellowDim, 0, 0.079, -0.06);
    for (const sx of [-1, 1]) {
      B.add(RB(0.01, 0.05, 0.2, 0.004), M.poly, sx * 0.046, -0.005, -0.08);
      B.add(BOX(0.004, 0.012, 0.16), M.yellow, sx * 0.0515, -0.005, -0.08);
      B.add(RB(0.016, 0.03, 0.34, 0.006), M.gun, sx * 0.024, 0.006, -0.38);
      B.add(RB(0.02, 0.02, 0.05, 0.006), M.metal, sx * 0.024, 0.006, -0.55);
    }
    B.add(CYL(0.008, 0.008, 0.26, 10), M.yellow, 0, 0.006, -0.4, Math.PI / 2);
    for (let i = 0; i < 3; i++) B.add(TOR(0.032, 0.004, 6, 18), M.yellowDim, 0, 0.006, -0.3 - i * 0.08);
    for (let i = 0; i < 5; i++) B.add(BOX(0.1, 0.03, 0.007), M.poly, 0, 0.09, 0.0 + i * 0.022);
    B.add(RB(0.05, 0.14, 0.07, 0.015), M.poly, 0, -0.11, 0.03, -0.28);
    B.add(RB(0.06, 0.08, 0.17, 0.02), M.poly, 0, -0.015, 0.21);
    B.add(BOX(0.063, 0.004, 0.012), M.yellowDim, 0, 0.0, 0.25);
    MB.add(RB(0.03, 0.06, 0.12, 0.008), M.gun, 0, 0, 0);
    MB.add(BOX(0.032, 0.03, 0.08), M.yellow, 0, 0.0, 0);
    extra = floatingDot(B, M, 0.135, -0.05, M.yellow, 'bars', M.yellow, 0.0775);
    ud.sight.set(0, 0.135, -0.06); ud.zoom = 1.6; ud.magRest = new THREE.Vector3(-0.06, -0.005, -0.07); ud.cell = true;
    // emitter lens capping the core between the prongs: the beam starts here
    B.add(CYL(0.012, 0.009, 0.014, 12), M.metal, 0, 0.006, -0.537, Math.PI / 2);
    B.add(CYL(0.0075, 0.0075, 0.004, 12), M.yellow, 0, 0.006, -0.546, Math.PI / 2);
    ud.muzzle.set(0, 0.006, -0.549);
  }
  const body = B.build(!opts.noShadow);
  g.add(body);
  for (const e of extra) { e.traverse((o) => { o.userData.noOutline = true; }); g.add(e); }
  mag = MB.build(!opts.noShadow);
  mag.position.copy(ud.magRest);
  g.add(mag);
  ud.mag = mag;
  g.userData = ud;
  return g;
}

// ---------------------------------------------------------------------------
// EVA soldier. Body frame: centre of mass at origin, -z forward, +y up (hitboxes match this).
// ---------------------------------------------------------------------------
export function buildSoldier(teamColor, TOWERS, NOZ_DIR) {
  const M = teamMats(teamColor);
  const root = new THREE.Group();
  const B = new Builder();
  // torso
  B.add(RB(0.5, 0.62, 0.34, 0.07, 3), M.suit, 0, 0.15, 0);
  B.add(RB(0.44, 0.3, 0.07, 0.03), M.hard, 0, 0.27, -0.175);
  B.add(RB(0.36, 0.1, 0.05, 0.02), M.team, 0, 0.14, -0.18);
  B.add(BOX(0.1, 0.045, 0.02), M.glow, 0.12, 0.34, -0.215);
  B.add(BOX(0.05, 0.045, 0.02), M.white, -0.13, 0.34, -0.215);
  for (let i = 0; i < 3; i++) B.add(RB(0.47, 0.045, 0.32, 0.018), M.fabric, 0, 0.02 - i * 0.055, 0);
  B.add(RB(0.53, 0.1, 0.37, 0.03), M.hard, 0, -0.13, 0);
  B.add(BOX(0.08, 0.06, 0.02), M.team, 0, -0.13, -0.19);
  for (const s of [-1, 1]) B.add(RB(0.07, 0.07, 0.07, 0.02), M.dark, s * 0.21, -0.13, -0.15);
  B.add(TOR(0.17, 0.04, 8, 24), M.hard, 0, 0.47, 0, Math.PI / 2);
  for (const s of [-1, 1]) B.add(RB(0.17, 0.08, 0.22, 0.035), M.team, s * 0.3, 0.42, 0, 0, 0, -s * 0.35);
  // life-support pack
  B.add(RB(0.56, 0.72, 0.26, 0.06, 3), M.hard, 0, 0.12, 0.3);
  B.add(RB(0.5, 0.6, 0.04, 0.02), M.dark, 0, 0.12, 0.44);
  for (const s of [-1, 1]) {
    B.add(CYL(0.07, 0.07, 0.56, 14), M.suit, s * 0.16, 0.12, 0.47);
    B.add(SPH(0.07, 12, 8), M.suit, s * 0.16, 0.4, 0.47);
    B.add(SPH(0.07, 12, 8), M.suit, s * 0.16, -0.16, 0.47);
    B.add(TOR(0.071, 0.01, 6, 16), M.team, s * 0.16, 0.25, 0.47, Math.PI / 2);
  }
  for (let i = 0; i < 4; i++) B.add(BOX(0.18, 0.012, 0.03), M.dark, 0, -0.05 - i * 0.035, 0.455);
  B.add(BOX(0.57, 0.05, 0.27), M.glow, 0, 0.42, 0.3);
  B.add(CYL(0.006, 0.006, 0.3, 6), M.dark, -0.22, 0.6, 0.38);
  B.add(SPH(0.014, 6, 4), M.glow, -0.22, 0.75, 0.38);
  // thruster quads with six nozzles each
  for (const t of TOWERS) {
    const p = t.pos;
    B.add(RB(0.13, 0.13, 0.15, 0.03), M.dark, p.x, p.y, p.z);
    B.limb(new THREE.Vector3(p.x * 0.55, p.y, 0.2), new THREE.Vector3(p.x, p.y, p.z + 0.06), 0.022, 0.022, M.hard, 6);
    for (const d of NOZ_DIR) {
      // exhaust leaves along -d
      const e = d.clone().negate();
      _q.setFromUnitVectors(new THREE.Vector3(0, -1, 0), e);
      _m.compose(_p.copy(p).addScaledVector(e, 0.075), _q, _s.set(1, 1, 1));
      B.addMatrix(CONE(0.022, 0.04, 8), M.hard, _m);
    }
    B.add(BOX(0.135, 0.025, 0.03), M.glow, p.x, p.y + 0.075, p.z - 0.04);
  }
  // hips & legs (relaxed EVA crouch)
  B.add(RB(0.42, 0.17, 0.3, 0.06), M.suit, 0, -0.25, 0);
  for (const s of [-1, 1]) {
    const hip = new THREE.Vector3(s * 0.14, -0.27, -0.02), knee = new THREE.Vector3(s * 0.15, -0.6, -0.18), ankle = new THREE.Vector3(s * 0.14, -0.94, 0.0);
    B.limb(hip, knee, 0.105, 0.09, M.suit, 10);
    B.limb(knee, ankle, 0.088, 0.075, M.suit, 10);
    B.add(SPH(0.09, 10, 8), M.fabric, knee.x, knee.y, knee.z);
    B.add(RB(0.15, 0.13, 0.08, 0.03), M.team, knee.x, knee.y + 0.01, knee.z - 0.07, 0.3);
    B.add(RB(0.11, 0.2, 0.05, 0.02), M.hard, s * 0.145, -0.78, -0.13, -0.38);
    B.add(RB(0.16, 0.14, 0.28, 0.04), M.hard, s * 0.14, -1.0, 0.05);
    B.add(BOX(0.165, 0.03, 0.29), M.dark, s * 0.14, -1.075, 0.05);
  }
  const body = B.build();
  root.add(body);

  // upper body: helmet, arms, weapon - rotates with animations
  const upper = new THREE.Group();
  upper.position.set(0, 0.45, 0);
  root.add(upper);
  const H = new Builder();
  H.add(SPH(0.215, 18, 14), M.suit, 0, 0.15, -0.02);
  H.add(TOR(0.16, 0.025, 8, 24), M.hard, 0, 0.02, -0.01, Math.PI / 2);
  H.add(SPH(0.2, 18, 12, ), M.visor, 0, 0.15, -0.045, 0, 0, 0, 1.0, 0.82, 1.0);
  H.add(TOR(0.155, 0.012, 6, 24, ), M.hard, 0, 0.15, -0.16, 0, 0, 0, 1.15, 0.85, 1);
  for (const s of [-1, 1]) {
    H.add(CYL(0.03, 0.03, 0.07, 10), M.dark, s * 0.2, 0.2, -0.04, 0, 0, Math.PI / 2);
    H.add(CYL(0.022, 0.022, 0.01, 10), M.white, s * 0.236, 0.2, -0.04, 0, 0, Math.PI / 2);
  }
  H.add(BOX(0.05, 0.03, 0.08), M.team, 0, 0.36, 0.0);
  // right arm (shoulder -> elbow -> grip)
  const rS = new THREE.Vector3(0.28, -0.08, 0.0), rE = new THREE.Vector3(0.27, -0.27, -0.2), rG = new THREE.Vector3(0.13, -0.19, -0.39);
  H.limb(rS, rE, 0.075, 0.07, M.suit, 10);
  H.add(SPH(0.07, 10, 8), M.fabric, rE.x, rE.y, rE.z);
  H.limb(rE, rG, 0.066, 0.058, M.suit, 10);
  H.add(RB(0.08, 0.09, 0.1, 0.025), M.hard, rG.x, rG.y, rG.z);
  H.add(SPH(0.085, 10, 8), M.hard, rS.x, rS.y, rS.z);
  const head = H.build();
  upper.add(head);

  const gunMount = new THREE.Group();
  gunMount.position.set(0.13, -0.1, -0.4);
  upper.add(gunMount);

  // left arm: pivots at the shoulder (animated for reloads / throws)
  const leftArm = new THREE.Group();
  const lS = new THREE.Vector3(-0.28, -0.08, 0.0);
  leftArm.position.copy(lS);
  upper.add(leftArm);
  const L = new Builder();
  const lE = new THREE.Vector3(-0.22, -0.26, -0.22).sub(lS), lH = new THREE.Vector3(0.1, -0.16, -0.68).sub(lS);
  L.add(SPH(0.085, 10, 8), M.hard, 0, 0, 0);
  L.limb(new THREE.Vector3(), lE, 0.075, 0.07, M.suit, 10);
  L.add(SPH(0.07, 10, 8), M.fabric, lE.x, lE.y, lE.z);
  L.limb(lE, lH, 0.066, 0.058, M.suit, 10);
  const wc = lE.clone().lerp(lH, 0.45);
  L.add(RB(0.07, 0.03, 0.09, 0.01), M.dark, wc.x, wc.y + 0.06, wc.z);
  L.add(BOX(0.05, 0.005, 0.06), M.glow, wc.x, wc.y + 0.077, wc.z);
  L.add(RB(0.08, 0.08, 0.1, 0.025), M.hard, lH.x, lH.y, lH.z);
  leftArm.add(L.build());
  const nade = buildGrenade(teamColor);
  nade.scale.setScalar(1.15);
  nade.position.copy(lH).add(new THREE.Vector3(0, 0.03, -0.05));
  nade.visible = false; nade.userData.noOutline = true;
  leftArm.add(nade);

  return { root, upper, gunMount, leftArm, nade, body, head };
}

// first-person arms (camera space). Built along +z from the glove so they can be aimed at an elbow point.
export function buildFPArm(teamColor) {
  const M = teamMats(teamColor);
  const B = new Builder();
  B.add(RB(0.085, 0.09, 0.11, 0.03), M.hard, 0, 0, 0);
  B.add(RB(0.06, 0.03, 0.08, 0.012), M.dark, 0, 0.052, 0.0);
  B.limb(new THREE.Vector3(0, 0, 0.04), new THREE.Vector3(0, 0, 0.42), 0.046, 0.058, M.suit, 12);
  B.add(TOR(0.05, 0.011, 6, 18), M.team, 0, 0, 0.1);
  B.add(BOX(0.05, 0.006, 0.07), M.glow, 0, 0.066, 0.16);
  B.add(RB(0.06, 0.025, 0.09, 0.01), M.dark, 0, 0.055, 0.16);
  return B.build(false);
}

/** Frag grenade: ribbed body, team band, fuse head with spoon and pin ring, blinking fuse lamp (userData.lamp). */
export function buildGrenade(teamColor) {
  const M = teamMats(teamColor);
  const B = new Builder();
  const body = new THREE.MeshStandardMaterial({ color: 0x3a4249, roughness: 0.45, metalness: 0.7 });
  B.add(CYL(0.04, 0.04, 0.085, 18), body, 0, 0, 0);
  for (const y of [-0.03, -0.012, 0.012, 0.03]) B.add(TOR(0.0405, 0.0035, 6, 22), M.dark, 0, y, 0, Math.PI / 2);
  B.add(CYL(0.0415, 0.0415, 0.012, 18), M.glow, 0, 0.0, 0);
  B.add(CYL(0.04, 0.03, 0.018, 18), body, 0, 0.051, 0);
  B.add(CYL(0.03, 0.04, 0.018, 18), body, 0, -0.051, 0);
  B.add(CYL(0.026, 0.026, 0.006, 6), M.dark, 0, -0.062, 0);
  B.add(CYL(0.019, 0.023, 0.026, 12), M.hard, 0, 0.072, 0);
  B.add(RB(0.014, 0.075, 0.006, 0.002), M.hard, 0.0, 0.045, 0.043, 0.12);   // spoon
  B.add(RB(0.014, 0.012, 0.02, 0.002), M.hard, 0.0, 0.082, 0.034);
  B.add(TOR(0.013, 0.0022, 6, 16), M.hard, 0.024, 0.078, 0, 0, Math.PI / 2); // pin ring
  const g = B.build();
  const lampMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(teamColor).multiplyScalar(2.5) });
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), lampMat);
  lamp.position.set(0, 0.088, 0);
  lamp.userData.noOutline = true;
  g.add(lamp);
  g.userData.lamp = lamp;
  return g;
}

export function buildPod() {
  const B = new Builder();
  const shell = new THREE.MeshStandardMaterial({ color: 0xaab3bd, roughness: 0.45, metalness: 0.6 });
  const band = new THREE.MeshStandardMaterial({ color: 0xd8a72a, roughness: 0.5, metalness: 0.3 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x30353b, roughness: 0.6, metalness: 0.5 });
  const lamp = glowMat(0xffc040, 2.5);
  B.add(SPH(1.08, 24, 16), shell);
  B.add(TOR(1.1, 0.07, 8, 32), band, 0, 0, 0, Math.PI / 2);
  B.add(TOR(1.1, 0.07, 8, 32), band, 0, 0, 0, 0, Math.PI / 2);
  for (const s of [-1, 1]) {
    B.add(CYL(0.32, 0.32, 0.08, 16), dark, 0, s * 1.06, 0);
    B.add(CYL(0.05, 0.05, 0.02, 8), lamp, 0, s * 1.11, 0);
    B.add(TOR(0.16, 0.025, 6, 12), dark, s * 1.08, 0.25, 0, 0, Math.PI / 2);
    B.add(TOR(0.16, 0.025, 6, 12), dark, 0, 0.25, s * 1.08);
  }
  return B.build();
}
