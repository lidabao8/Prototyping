// Low-poly blocky models: weapons (with attachments), gadgets and rigged soldiers.
import * as THREE from 'three';
import { G } from '../render/geo.js';
import { WEAPONS } from '../data/loadout.js';
import { vertexColorMaterial } from '../render/materials.js';

const geoCache = new Map();

export function buildWeaponGeo(wid, att = {}) {
  const key = wid + JSON.stringify(att);
  if (geoCache.has(key)) return geoCache.get(key);
  const w = WEAPONS[wid];
  const L = w.look || { len: 0.8, color: 0x2a2a2a };
  const lift = (hx) => new THREE.Color(hx).lerp(new THREE.Color(0x7a7a7a), 0.3).getHex();
  const c = lift(L.color), dark = lift(0x1c1c1c), wood = lift(L.wood || L.color), metal = lift(0x3a3a3a);
  const parts = [];
  let sightY = 0.105, muzzleZ, sightZ = -0.05;
  const len = L.len;
  if (w.type === 'pistol') {
    parts.push(G.box(0.03, 0.034, len, c, 0, 0.045, -len * 0.35));
    parts.push(G.box(0.028, 0.025, len * 0.8, dark, 0, 0.018, -len * 0.3));
    parts.push(G.box(0.028, 0.095, 0.04, dark, 0, -0.03, 0.01, 0.25));
    parts.push(G.box(0.006, 0.012, 0.006, dark, 0, 0.068, -len * 0.8));
    parts.push(G.box(0.02, 0.01, 0.008, dark, 0, 0.066, 0.02));
    muzzleZ = -len * 0.85; sightY = 0.072;
    if (att.sight === 'reddot') { parts.push(G.box(0.026, 0.028, 0.035, dark, 0, 0.078, -0.03)); sightY = 0.084; }
  } else {
    const isBull = L.stock === 'bullpup';
    const recZ = isBull ? -len * 0.05 : -len * 0.12;
    parts.push(G.box(0.058, 0.085, len * 0.42, c, 0, 0.045, recZ));
    parts.push(G.box(0.05, 0.02, len * 0.36, metal, 0, 0.096, recZ - 0.02));
    // handguard
    parts.push(G.box(0.062, 0.065, len * 0.26, L.wood && w.type !== 'lmg' ? wood : c, 0, 0.04, -len * 0.42));
    // barrel
    const bz0 = -len * 0.55, bz1 = -len * 0.66;
    parts.push(G.cyl(0.012, 0.012, Math.abs(bz1 - bz0) + 0.05, 6, dark, 0, 0.05, (bz0 + bz1) / 2, Math.PI / 2));
    muzzleZ = bz1 - 0.02;
    // grip
    parts.push(G.box(0.034, 0.1, 0.045, dark, 0, -0.04, isBull ? -0.18 : 0.02, 0.3));
    // stock
    if (L.stock === 'tube') { parts.push(G.cyl(0.014, 0.014, len * 0.3, 6, dark, 0, 0.05, len * 0.2, Math.PI / 2)); parts.push(G.box(0.045, 0.11, 0.05, dark, 0, 0.03, len * 0.34)); }
    else if (L.stock === 'solid') parts.push(G.box(0.05, 0.1, len * 0.3, L.wood ? wood : c, 0, 0.03, len * 0.2, -0.06));
    else if (isBull) parts.push(G.box(0.06, 0.1, len * 0.22, c, 0, 0.03, len * 0.22));
    // magazine
    const magZ = isBull ? len * 0.12 : -0.1;
    if (L.mag === 'curve') parts.push(G.box(0.028, 0.16, 0.06, dark, 0, -0.06, magZ, 0.3));
    else if (L.mag === 'straight') parts.push(G.box(0.028, 0.13, 0.05, dark, 0, -0.05, magZ, 0.12));
    else if (L.mag === 'box') parts.push(G.box(0.09, 0.1, 0.11, 0x3a4030, 0.02, -0.04, -0.08));
    else if (L.mag === 'top') parts.push(G.box(0.05, 0.03, len * 0.45, 0x2a2a28, 0, 0.1, -len * 0.18));
    else if (L.mag === 'tube') { parts.push(G.cyl(0.013, 0.013, len * 0.45, 6, dark, 0, 0.012, -len * 0.42, Math.PI / 2)); parts.push(G.box(0.05, 0.045, 0.13, wood, 0, 0.01, -len * 0.42)); }
    if (L.bipod) { parts.push(G.box(0.01, 0.01, 0.22, dark, -0.015, 0.0, -len * 0.5)); parts.push(G.box(0.01, 0.01, 0.22, dark, 0.015, 0.0, -len * 0.5)); }
    if (w.bolt) parts.push(G.cyl(0.008, 0.008, 0.06, 5, metal, 0.04, 0.07, 0.0, 0, 0, Math.PI / 2));
    // sights
    const s = att.sight || 'iron';
    const sz = -0.04;
    if (s === 'iron') {
      parts.push(G.box(0.006, 0.045, 0.006, dark, 0, 0.105, -len * 0.5)); parts.push(G.box(0.01, 0.03, 0.012, dark, -0.012, 0.11, 0.02)); parts.push(G.box(0.01, 0.03, 0.012, dark, 0.012, 0.11, 0.02)); parts.push(G.box(0.034, 0.008, 0.012, dark, 0, 0.098, 0.02));
      sightY = 0.123; sightZ = 0.02;
    } else if (s === 'reddot') { parts.push(G.tube(0.021, 0.05, 10, dark, 0, 0.13, sz)); parts.push(G.box(0.02, 0.012, 0.04, dark, 0, 0.104, sz)); sightY = 0.13; sightZ = sz; }
    else if (s === 'holo') { parts.push(G.box(0.05, 0.008, 0.07, dark, 0, 0.107, sz)); parts.push(G.box(0.006, 0.045, 0.07, dark, -0.022, 0.13, sz)); parts.push(G.box(0.006, 0.045, 0.07, dark, 0.022, 0.13, sz)); parts.push(G.box(0.05, 0.006, 0.07, dark, 0, 0.153, sz)); sightY = 0.13; sightZ = sz; }
    else if (s === 'x2') { parts.push(G.tube(0.022, 0.09, 8, dark, 0, 0.13, sz)); parts.push(G.box(0.03, 0.014, 0.06, dark, 0, 0.102, sz)); sightY = 0.13; sightZ = sz; }
    else if (s === 'acog') { parts.push(G.box(0.044, 0.05, 0.12, 0x3a3a30, 0, 0.13, sz)); parts.push(G.cyl(0.026, 0.026, 0.03, 8, 0x3a3a30, 0, 0.133, sz - 0.07, Math.PI / 2)); sightY = 0.133; sightZ = sz; }
    else if (s === 'scope8') { parts.push(G.cyl(0.02, 0.02, 0.28, 8, dark, 0, 0.14, sz - 0.04, Math.PI / 2)); parts.push(G.cyl(0.03, 0.026, 0.06, 8, dark, 0, 0.14, sz - 0.18, Math.PI / 2)); parts.push(G.cyl(0.026, 0.03, 0.05, 8, dark, 0, 0.14, sz + 0.1, Math.PI / 2)); parts.push(G.box(0.02, 0.03, 0.03, dark, 0, 0.11, sz)); sightY = 0.14; sightZ = sz + 0.1; }
    // barrel attachments
    if (att.barrel === 'suppressor') { parts.push(G.cyl(0.022, 0.022, 0.17, 8, 0x222222, 0, 0.05, muzzleZ - 0.08, Math.PI / 2)); muzzleZ -= 0.17; }
    else if (att.barrel && att.barrel !== 'none') { parts.push(G.cyl(0.018, 0.016, 0.055, 6, 0x262626, 0, 0.05, muzzleZ - 0.02, Math.PI / 2)); muzzleZ -= 0.055; }
    // underbarrel
    const gz = -len * 0.42;
    if (att.grip === 'vertical') parts.push(G.box(0.026, 0.085, 0.03, dark, 0, -0.03, gz));
    else if (att.grip === 'angled') parts.push(G.box(0.026, 0.04, 0.07, dark, 0, -0.005, gz, -0.5));
    else if (att.grip === 'stubby') parts.push(G.box(0.026, 0.045, 0.03, dark, 0, -0.01, gz));
    else if (att.grip === 'bipod' && !L.bipod) { parts.push(G.box(0.01, 0.01, 0.2, dark, -0.015, 0.0, gz - 0.06)); parts.push(G.box(0.01, 0.01, 0.2, dark, 0.015, 0.0, gz - 0.06)); }
    if (att.rail === 'laser') { parts.push(G.box(0.022, 0.024, 0.06, dark, 0.042, 0.04, gz + 0.02)); parts.push(G.box(0.008, 0.008, 0.004, 0xff2020, 0.042, 0.04, gz - 0.012)); }
    else if (att.rail === 'flashlight') parts.push(G.cyl(0.016, 0.018, 0.08, 8, dark, 0.042, 0.04, gz, Math.PI / 2));
  }
  const geo = G.merge(parts);
  const res = { geo, sightY, sightZ, muzzle: new THREE.Vector3(0, w.type === 'pistol' ? 0.045 : 0.05, muzzleZ), len };
  geoCache.set(key, res);
  return res;
}

export function buildGadgetGeo(id) {
  const key = 'g_' + id;
  if (geoCache.has(key)) return geoCache.get(key);
  let parts;
  switch (id) {
    case 'frag': case 'impact': parts = [G.ico(0.04, 1, id === 'impact' ? 0x7a6a3a : 0x3f4a2e, 0, 0.0, 0), G.box(0.015, 0.03, 0.015, 0x888888, 0, 0.045, 0), G.box(0.008, 0.06, 0.012, 0x777777, 0.02, 0.03, 0)]; break;
    case 'smoke': case 'flash': parts = [G.cyl(0.032, 0.032, 0.12, 8, id === 'flash' ? 0x2a2a2a : 0x6a6e70, 0, 0, 0), G.box(0.015, 0.025, 0.015, 0x888888, 0, 0.07, 0)]; break;
    case 'm320': parts = [G.cyl(0.03, 0.03, 0.3, 8, 0x2a2a2a, 0, 0.04, -0.15, Math.PI / 2), G.box(0.03, 0.1, 0.04, 0x1c1c1c, 0, -0.03, 0.02, 0.3), G.box(0.04, 0.05, 0.15, 0x333333, 0, 0.06, 0.04)]; break;
    case 'rpg': parts = [G.cyl(0.035, 0.035, 0.95, 8, 0x4a5a3a, 0, 0.06, -0.15, Math.PI / 2), G.cone(0.055, 0.2, 8, 0x5a6a4a, 0, 0.06, -0.72), G.box(0.03, 0.09, 0.04, 0x1c1c1c, 0, -0.02, 0.0, 0.3), G.box(0.03, 0.09, 0.04, 0x1c1c1c, 0, -0.02, -0.25, 0.3), G.box(0.03, 0.04, 0.05, 0x222222, -0.04, 0.12, -0.1)]; break;
    case 'medkit': parts = [G.box(0.18, 0.12, 0.08, 0xe8e8e8, 0, 0, 0), G.box(0.06, 0.02, 0.085, 0xd02020, 0, 0, 0), G.box(0.02, 0.06, 0.085, 0xd02020, 0, 0, 0)]; break;
    case 'ammobox': parts = [G.box(0.25, 0.14, 0.14, 0x4a5a2a, 0, 0, 0), G.box(0.1, 0.02, 0.06, 0x222222, 0, 0.08, 0)]; break;
    case 'c4': parts = [G.box(0.12, 0.05, 0.08, 0xc8b88a, 0, 0, 0), G.box(0.03, 0.02, 0.06, 0x222222, 0.03, 0.035, 0), G.box(0.04, 0.09, 0.025, 0x2a2a2a, -0.12, 0.0, 0.02)]; break;
    case 'claymore': parts = [G.box(0.18, 0.1, 0.04, 0x4a5a2e, 0, 0, 0), G.box(0.01, 0.06, 0.01, 0x333333, -0.06, -0.07, 0), G.box(0.01, 0.06, 0.01, 0x333333, 0.06, -0.07, 0)]; break;
    case 'beacon': parts = [G.box(0.14, 0.18, 0.1, 0x3a4a5a, 0, 0, 0), G.box(0.01, 0.2, 0.01, 0x222222, 0.04, 0.18, 0), G.box(0.03, 0.03, 0.03, 0x30ff60, 0.04, 0.29, 0)]; break;
    case 'rally': parts = [G.box(0.16, 0.12, 0.1, 0x4a4a3a, 0, 0, 0), G.box(0.01, 0.35, 0.01, 0x222222, -0.05, 0.22, 0), G.box(0.12, 0.08, 0.005, 0xf0e070, 0.01, 0.34, 0)]; break;
    case 'binoculars': parts = [G.cyl(0.025, 0.025, 0.12, 8, 0x2a2a2a, -0.035, 0, 0, Math.PI / 2), G.cyl(0.025, 0.025, 0.12, 8, 0x2a2a2a, 0.035, 0, 0, Math.PI / 2), G.box(0.04, 0.02, 0.04, 0x222222, 0, 0, 0)]; break;
    case 'sandbags': parts = [G.box(0.3, 0.12, 0.18, 0xb8a37a, 0, 0, 0)]; break;
    case 'bandage': parts = [G.cyl(0.035, 0.035, 0.07, 8, 0xeeeeee, 0, 0, 0, 0, 0, Math.PI / 2)]; break;
    default: parts = [G.box(0.1, 0.1, 0.1, 0x888888)];
  }
  const geo = G.merge(parts);
  geoCache.set(key, geo);
  return geo;
}

export const TEAM_COLORS = [
  { uniform: 0x5b6b46, vest: 0x3c4932, helmet: 0x4d5c3c, accent: 0x3d8de0, pack: 0x46523a, pants: 0x55633f, name: 'NORTHWIND', css: '#4a9cf0' },
  { uniform: 0x9c8a66, vest: 0x6c5d43, helmet: 0x7e6f53, accent: 0xe0503d, pack: 0x7a6a4d, pants: 0x8d7c5b, name: 'IRONSIDE', css: '#f05a48' },
];
const SKINS = [0xe0b48f, 0xc69070, 0x8d5a3c, 0xf0c8a8, 0xa8754f];

// limb box aligned between two points
function limb(ax, ay, az, bx, by, bz, t, color) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const L = Math.hypot(dx, dy, dz);
  const g = G.box(t, t, L, color);
  const m = new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), new THREE.Vector3(dx, dy, dz), new THREE.Vector3(0, 1, 0));
  g.applyMatrix4(m);
  g.translate((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
  return g;
}

export function buildSoldier(team, cls, seed = 0) {
  const T = TEAM_COLORS[team];
  const skin = SKINS[seed % SKINS.length];
  const mat = vertexColorMaterial('soldier', { roughness: 0.85 });
  const key = `s_${team}_${cls}_${seed % SKINS.length}`;
  let geos = geoCache.get(key);
  if (!geos) {
    geos = {};
    geos.hips = G.merge([G.box(0.34, 0.16, 0.2, T.pants, 0, 0, 0), G.box(0.36, 0.04, 0.22, 0x2a2a22, 0, 0.07, 0)]);
    const torso = [G.box(0.38, 0.5, 0.22, T.uniform, 0, 0.27, 0), G.box(0.4, 0.38, 0.26, T.vest, 0, 0.3, -0.005), G.box(0.12, 0.08, 0.05, T.vest, -0.1, 0.24, -0.14), G.box(0.12, 0.08, 0.05, T.vest, 0.1, 0.24, -0.14)];
    torso.push(G.box(0.3, 0.36, 0.16, T.pack, 0, 0.3, 0.19));
    if (cls === 'medic') { torso.push(G.box(0.12, 0.04, 0.01, 0xd02020, 0, 0.36, 0.275)); torso.push(G.box(0.04, 0.12, 0.01, 0xd02020, 0, 0.36, 0.275)); }
    if (cls === 'support') torso.push(G.box(0.24, 0.12, 0.12, 0x3a4a2a, 0, 0.1, 0.22));
    if (cls === 'engineer') torso.push(G.cyl(0.05, 0.05, 0.5, 6, 0x4a5a3a, 0.14, 0.42, 0.22, 0.4));
    if (cls === 'leader') torso.push(G.box(0.02, 0.35, 0.02, 0x222222, -0.1, 0.62, 0.2));
    torso.push(G.box(0.08, 0.06, 0.24, T.accent, 0.205, 0.38, 0)); // armband
    geos.torso = G.merge(torso);
    const head = [G.box(0.2, 0.22, 0.2, skin, 0, 0.11, 0)];
    if (cls === 'recon') head.push(G.box(0.36, 0.03, 0.36, T.helmet, 0, 0.22, 0), G.box(0.22, 0.08, 0.22, T.helmet, 0, 0.26, 0));
    else if (cls === 'leader') head.push(G.box(0.23, 0.1, 0.23, T.helmet, 0, 0.23, 0.0), G.box(0.22, 0.02, 0.1, T.helmet, 0, 0.19, -0.15), G.box(0.04, 0.08, 0.08, 0x222222, 0.12, 0.12, 0));
    else head.push(G.box(0.26, 0.12, 0.27, T.helmet, 0, 0.23, 0.01), G.box(0.27, 0.05, 0.28, T.helmet, 0, 0.17, 0.01));
    head.push(G.box(0.17, 0.03, 0.01, 0x222222, 0, 0.14, -0.101));
    geos.head = G.merge(head);
    geos.thigh = G.merge([G.box(0.15, 0.46, 0.16, T.pants, 0, -0.23, 0), G.box(0.06, 0.12, 0.1, T.vest, 0.08, -0.25, 0)]);
    geos.shin = G.merge([G.box(0.13, 0.42, 0.14, T.pants, 0, -0.21, 0), G.box(0.15, 0.1, 0.24, 0x2a2622, 0, -0.43, -0.04)]);
    // arms in aim pose relative to aim pivot (chest); right hand at grip (0.04,-0.12,-0.34)
    geos.armR = G.merge([limb(0.2, 0.0, 0.0, 0.12, -0.2, -0.2, 0.11, T.uniform), limb(0.12, -0.2, -0.2, 0.05, -0.13, -0.34, 0.1, T.uniform), G.box(0.08, 0.08, 0.09, 0x2e2e2a, 0.045, -0.13, -0.36)]);
    geos.armL = G.merge([limb(0, 0, 0, 0.0, -0.22, -0.22, 0.11, T.uniform), limb(0.0, -0.22, -0.22, 0.17, -0.1, -0.5, 0.1, T.uniform), G.box(0.08, 0.08, 0.09, 0x2e2e2a, 0.17, -0.1, -0.52)]);
    geoCache.set(key, geos);
  }
  const mk = (g) => { const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; return m; };
  const root = new THREE.Group();
  const hips = new THREE.Group(); hips.position.y = 0.95; root.add(hips);
  hips.add(mk(geos.hips));
  const torso = new THREE.Group(); torso.position.y = 0.06; hips.add(torso);
  torso.add(mk(geos.torso));
  const head = new THREE.Group(); head.position.y = 0.55; torso.add(head);
  head.add(mk(geos.head));
  const aim = new THREE.Group(); aim.position.set(0, 0.42, 0); torso.add(aim);
  aim.add(mk(geos.armR));
  const armL = new THREE.Group(); armL.position.set(-0.2, 0, 0); aim.add(armL);
  armL.add(mk(geos.armL));
  const weapon = new THREE.Group(); weapon.position.set(0.05, -0.1, -0.34); aim.add(weapon);
  const legs = [];
  for (const side of [-1, 1]) {
    const thigh = new THREE.Group(); thigh.position.set(side * 0.1, -0.04, 0); hips.add(thigh);
    thigh.add(mk(geos.thigh));
    const shin = new THREE.Group(); shin.position.y = -0.46; thigh.add(shin);
    shin.add(mk(geos.shin));
    legs.push({ thigh, shin });
  }
  return { root, hips, torso, head, aim, armL, weapon, legs, weaponMesh: null, mat };
}

export function setRigWeapon(rig, geo) {
  if (rig.weaponMesh) { rig.weapon.remove(rig.weaponMesh); }
  const m = new THREE.Mesh(geo, vertexColorMaterial('weapon', { roughness: 0.6, metalness: 0.25 }));
  m.castShadow = true;
  rig.weapon.add(m);
  rig.weaponMesh = m;
}
