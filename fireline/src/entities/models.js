// Low-poly models: weapons (with attachments and a detachable magazine), gadgets and rigged soldiers.
import * as THREE from 'three';
import { G } from '../render/geo.js';
import { WEAPONS } from '../data/loadout.js';
import { vertexColorMaterial } from '../render/materials.js';

const geoCache = new Map();
const lift = (hx, k = 0.3) => new THREE.Color(hx).lerp(new THREE.Color(0x7a7a7a), k).getHex();

function helmetGeo(r, color, y, sx = 1, sy = 0.85, sz = 1.05) {
  const g = new THREE.SphereGeometry(r, 9, 5, 0, Math.PI * 2, 0, Math.PI * 0.56);
  g.scale(sx, sy, sz); g.translate(0, y, 0);
  return G.colorize(g, color);
}

// Weapon: origin at the pistol grip (right hand), barrel along -Z. Returns full geometry plus body/mag split.
export function buildWeaponGeo(wid, att = {}) {
  const key = wid + JSON.stringify(att);
  if (geoCache.has(key)) return geoCache.get(key);
  const w = WEAPONS[wid];
  const L = w.look || { len: 0.8, color: 0x2a2a2a };
  const c = lift(L.color), c2 = lift(L.color, 0.18), dark = lift(0x1c1c1c), wood = lift(L.wood || L.color, 0.2), metal = lift(0x3a3a3a);
  const parts = [], mag = [], lenses = [];
  let sightY = 0.105, muzzleZ, sightZ = -0.05, reticleZ = null;
  const magPos = new THREE.Vector3();
  const len = L.len;
  if (w.type === 'pistol') {
    parts.push(G.box(0.03, 0.034, len, c, 0, 0.047, -len * 0.35));
    for (let i = 0; i < 4; i++) parts.push(G.box(0.032, 0.026, 0.004, dark, 0, 0.05, 0.03 - i * 0.012));
    parts.push(G.box(0.027, 0.024, len * 0.78, dark, 0, 0.02, -len * 0.3));
    parts.push(G.box(0.028, 0.06, 0.04, dark, 0, -0.012, 0.012, 0.22));
    parts.push(G.box(0.006, 0.022, 0.03, dark, 0, -0.004, -0.04));
    parts.push(G.box(0.006, 0.012, 0.006, dark, 0, 0.07, -len * 0.8));
    parts.push(G.box(0.02, 0.01, 0.008, dark, 0, 0.068, 0.02));
    mag.push(G.box(0.024, 0.075, 0.034, lift(0x262626), 0, -0.037, 0, 0.22));
    magPos.set(0, -0.025, 0.018);
    muzzleZ = -len * 0.85; sightY = 0.074;
    if (att.sight === 'reddot') {
      parts.push(G.box(0.028, 0.008, 0.036, dark, 0, 0.068, -0.03));
      parts.push(G.box(0.004, 0.024, 0.008, dark, -0.012, 0.084, -0.042), G.box(0.004, 0.024, 0.008, dark, 0.012, 0.084, -0.042), G.box(0.028, 0.005, 0.008, dark, 0, 0.098, -0.042));
      parts.push(G.box(0.026, 0.01, 0.014, dark, 0, 0.076, -0.018));
      lenses.push({ type: 'rect', w: 0.02, h: 0.022, y: 0.085, z: -0.042 });
      sightY = 0.085; reticleZ = -0.038;
    }
    if (att.barrel === 'suppressor') { parts.push(G.cyl(0.017, 0.017, 0.13, 8, 0x222222, 0, 0.047, muzzleZ - 0.06, Math.PI / 2)); muzzleZ -= 0.13; }
  } else {
    const isBull = L.stock === 'bullpup';
    const recZ = isBull ? -len * 0.05 : -len * 0.12;
    const recL = len * 0.42;
    // upper / lower receiver
    parts.push(G.box(0.056, 0.045, recL, c, 0, 0.068, recZ));
    parts.push(G.box(0.05, 0.045, recL * 0.8, c2, 0, 0.024, recZ + recL * 0.06));
    parts.push(G.box(0.003, 0.018, 0.06, dark, 0.029, 0.07, recZ + 0.02)); // ejection port
    parts.push(G.box(0.02, 0.012, 0.03, dark, 0, 0.094, recZ + recL * 0.5 - 0.01)); // charging handle
    // top rail with ribs
    parts.push(G.box(0.03, 0.01, recL * 0.95, metal, 0, 0.095, recZ - 0.01));
    for (let i = 0; i < 7; i++) parts.push(G.box(0.034, 0.006, 0.008, dark, 0, 0.101, recZ - recL * 0.42 + i * recL * 0.13));
    // trigger guard
    parts.push(G.box(0.008, 0.006, 0.07, dark, 0, -0.01, -0.03));
    parts.push(G.box(0.006, 0.03, 0.006, dark, 0, -0.02, 0.0));
    // handguard with vents
    const hgZ = -len * 0.42, hgL = len * 0.27;
    const hgCol = L.wood && w.type !== 'lmg' ? wood : c;
    parts.push(G.box(0.062, 0.062, hgL, hgCol, 0, 0.045, hgZ));
    for (let i = 0; i < 4; i++) { parts.push(G.box(0.064, 0.012, 0.025, dark, 0, 0.05, hgZ - hgL * 0.35 + i * hgL * 0.23)); }
    if (L.wood) parts.push(G.cyl(0.011, 0.011, hgL, 6, metal, 0, 0.09, hgZ, Math.PI / 2)); // gas tube
    // barrel + gas block + muzzle
    const bz0 = hgZ - hgL / 2, bz1 = -len * 0.68;
    parts.push(G.cyl(0.011, 0.012, Math.abs(bz1 - bz0) + 0.02, 7, dark, 0, 0.05, (bz0 + bz1) / 2, Math.PI / 2));
    parts.push(G.box(0.026, 0.03, 0.03, dark, 0, 0.06, bz0 - 0.03));
    muzzleZ = bz1 - 0.01;
    // grip
    parts.push(G.box(0.032, 0.095, 0.044, dark, 0, -0.04, isBull ? -0.18 : 0.02, 0.3));
    // stock
    if (L.stock === 'tube') {
      parts.push(G.cyl(0.015, 0.015, len * 0.26, 7, dark, 0, 0.055, len * 0.17, Math.PI / 2));
      parts.push(G.box(0.044, 0.05, len * 0.14, dark, 0, 0.045, len * 0.25));
      parts.push(G.box(0.046, 0.12, 0.035, dark, 0, 0.03, len * 0.33));
    } else if (L.stock === 'solid') {
      const sc = L.wood ? wood : c;
      parts.push(G.box(0.046, 0.07, len * 0.3, sc, 0, 0.05, len * 0.2, -0.05));
      parts.push(G.box(0.044, 0.05, len * 0.22, sc, 0, 0.0, len * 0.24, 0.18));
      parts.push(G.box(0.048, 0.13, 0.03, dark, 0, 0.02, len * 0.355));
    } else if (isBull) parts.push(G.box(0.06, 0.1, len * 0.22, c, 0, 0.03, len * 0.22));
    // detachable magazine (geometry origin = top of the magazine, inside the mag well)
    const magZ = isBull ? len * 0.12 : -0.1;
    const mc = lift(0x222222, 0.25);
    if (L.mag === 'curve') { mag.push(G.box(0.028, 0.08, 0.058, mc, 0, -0.04, 0, 0.12)); mag.push(G.box(0.028, 0.08, 0.056, mc, 0, -0.11, -0.025, 0.42)); magPos.set(0, 0.0, magZ); }
    else if (L.mag === 'straight') { mag.push(G.box(0.028, 0.13, 0.05, mc, 0, -0.065, 0, 0.1)); mag.push(G.box(0.032, 0.012, 0.054, dark, 0, -0.13, 0.006, 0.1)); magPos.set(0, 0.0, magZ); }
    else if (L.mag === 'box') { mag.push(G.box(0.09, 0.1, 0.11, 0x3a4030, 0.02, -0.05, 0)); magPos.set(0, 0.0, -0.08); }
    else if (L.mag === 'top') { mag.push(G.box(0.05, 0.03, len * 0.45, 0x2a2a28, 0, 0.0, 0)); magPos.set(0, 0.11, -len * 0.18); }
    else if (L.mag === 'tube') { parts.push(G.cyl(0.013, 0.013, len * 0.45, 6, dark, 0, 0.012, -len * 0.42, Math.PI / 2)); parts.push(G.box(0.05, 0.045, 0.13, wood, 0, 0.01, -len * 0.42)); for (let i = 0; i < 3; i++) parts.push(G.box(0.052, 0.006, 0.01, dark, 0, 0.012, -len * 0.42 - 0.04 + i * 0.04)); mag.push(G.cyl(0.011, 0.011, 0.05, 6, 0xb03020, 0, 0, 0, Math.PI / 2)); magPos.set(0, 0.0, -0.05); }
    if (L.bipod) { parts.push(G.box(0.01, 0.01, 0.22, dark, -0.015, 0.0, -len * 0.5)); parts.push(G.box(0.01, 0.01, 0.22, dark, 0.015, 0.0, -len * 0.5)); }
    if (w.bolt) { parts.push(G.cyl(0.008, 0.008, 0.06, 5, metal, 0.04, 0.07, 0.0, 0, 0, Math.PI / 2)); parts.push(G.ico(0.012, 0, metal, 0.07, 0.07, 0.0)); }
    // sights
    const s = att.sight || 'iron';
    const sz = -0.04;
    const blk = lift(0x181818, 0.22), od = lift(0x3a3a30, 0.2);
    if (s === 'iron') {
      const fz = -len * 0.5;
      parts.push(G.box(0.02, 0.024, 0.022, dark, 0, 0.094, fz));
      parts.push(G.box(0.004, 0.02, 0.004, blk, 0, 0.113, fz));
      parts.push(G.box(0.004, 0.03, 0.014, dark, -0.011, 0.11, fz), G.box(0.004, 0.03, 0.014, dark, 0.011, 0.11, fz));
      parts.push(G.box(0.03, 0.012, 0.024, dark, 0, 0.1, 0.02));
      parts.push(G.box(0.006, 0.026, 0.018, dark, -0.015, 0.117, 0.02), G.box(0.006, 0.026, 0.018, dark, 0.015, 0.117, 0.02));
      parts.push(...G.sleeve(0.009, 0.0042, 0.006, 12, blk, 0, 0.123, 0.02));
      parts.push(G.box(0.022, 0.006, 0.006, dark, 0, 0.112, 0.02));
      sightY = 0.123; sightZ = 0.02;
    } else if (s === 'reddot') {
      parts.push(G.box(0.022, 0.016, 0.046, dark, 0, 0.104, sz), G.box(0.03, 0.006, 0.05, dark, 0, 0.099, sz));
      parts.push(...G.sleeve(0.021, 0.0175, 0.052, 14, blk, 0, 0.131, sz));
      parts.push(...G.sleeve(0.0235, 0.0175, 0.008, 14, blk, 0, 0.131, sz - 0.026));
      parts.push(...G.sleeve(0.0225, 0.0175, 0.006, 14, blk, 0, 0.131, sz + 0.026));
      parts.push(G.cyl(0.008, 0.008, 0.012, 8, dark, 0.026, 0.131, sz, 0, 0, Math.PI / 2), G.cyl(0.008, 0.008, 0.012, 8, dark, 0, 0.156, sz));
      parts.push(G.box(0.006, 0.006, 0.006, 0x993322, 0.033, 0.131, sz));
      lenses.push({ type: 'circle', r: 0.0175, y: 0.131, z: sz - 0.024 });
      sightY = 0.131; sightZ = sz; reticleZ = sz - 0.02;
    } else if (s === 'holo') {
      parts.push(G.box(0.046, 0.016, 0.09, dark, 0, 0.104, sz + 0.005));
      parts.push(G.box(0.042, 0.016, 0.03, blk, 0, 0.112, sz + 0.04));
      parts.push(G.box(0.008, 0.005, 0.006, 0x4a4a4a, -0.012, 0.1125, sz + 0.057), G.box(0.008, 0.005, 0.006, 0x4a4a4a, 0.012, 0.1125, sz + 0.057));
      parts.push(G.box(0.006, 0.046, 0.034, blk, -0.025, 0.136, sz - 0.018), G.box(0.006, 0.046, 0.034, blk, 0.025, 0.136, sz - 0.018));
      parts.push(G.box(0.056, 0.007, 0.034, blk, 0, 0.16, sz - 0.018));
      parts.push(G.box(0.044, 0.004, 0.004, dark, 0, 0.158, sz - 0.034), G.box(0.044, 0.004, 0.004, dark, 0, 0.114, sz - 0.034));
      lenses.push({ type: 'rect', w: 0.044, h: 0.04, y: 0.136, z: sz - 0.02 });
      sightY = 0.136; sightZ = sz; reticleZ = sz - 0.016;
    } else if (s === 'x2') {
      parts.push(G.box(0.026, 0.014, 0.06, dark, 0, 0.104, sz));
      parts.push(...G.sleeve(0.02, 0.0165, 0.07, 12, blk, 0, 0.132, sz));
      parts.push(...G.sleeve(0.024, 0.0165, 0.012, 12, blk, 0, 0.132, sz - 0.038));
      parts.push(...G.sleeve(0.022, 0.0165, 0.01, 12, blk, 0, 0.132, sz + 0.036));
      parts.push(G.box(0.02, 0.012, 0.04, blk, 0, 0.157, sz), G.cyl(0.006, 0.006, 0.012, 8, dark, 0.024, 0.132, sz + 0.01, 0, 0, Math.PI / 2));
      lenses.push({ type: 'circle', r: 0.0165, y: 0.132, z: sz - 0.042 }, { type: 'circle', r: 0.0165, y: 0.132, z: sz + 0.04, back: true });
      sightY = 0.132; sightZ = sz; reticleZ = sz - 0.03;
    } else if (s === 'acog') {
      parts.push(G.box(0.03, 0.014, 0.07, od, 0, 0.104, sz));
      parts.push(G.cyl(0.018, 0.027, 0.12, 12, od, 0, 0.134, sz, Math.PI / 2));
      parts.push(...G.sleeve(0.029, 0.023, 0.01, 12, od, 0, 0.134, sz - 0.062));
      parts.push(G.box(0.012, 0.009, 0.08, 0x2a2a24, 0, 0.162, sz), G.box(0.006, 0.004, 0.06, 0x9a3a2a, 0, 0.167, sz));
      parts.push(G.cyl(0.007, 0.007, 0.012, 8, od, 0.026, 0.134, sz, 0, 0, Math.PI / 2));
      lenses.push({ type: 'circle', r: 0.024, y: 0.134, z: sz - 0.067 }, { type: 'circle', r: 0.017, y: 0.134, z: sz + 0.061, back: true });
      sightY = 0.134; sightZ = sz + 0.06;
    } else if (s === 'scope8') {
      const tz = sz - 0.03;
      parts.push(G.cyl(0.017, 0.017, 0.2, 12, blk, 0, 0.142, tz, Math.PI / 2));
      parts.push(G.cyl(0.02, 0.032, 0.07, 14, blk, 0, 0.142, tz - 0.135, Math.PI / 2));
      parts.push(...G.sleeve(0.033, 0.029, 0.01, 14, blk, 0, 0.142, tz - 0.172));
      parts.push(G.cyl(0.025, 0.019, 0.06, 12, blk, 0, 0.142, tz + 0.13, Math.PI / 2));
      parts.push(G.cyl(0.024, 0.024, 0.014, 14, lift(0x2a2a2a), 0, 0.142, tz + 0.09, Math.PI / 2));
      parts.push(G.cyl(0.011, 0.011, 0.03, 10, blk, 0, 0.17, tz), G.cyl(0.011, 0.011, 0.03, 10, blk, 0.03, 0.142, tz, 0, 0, Math.PI / 2));
      for (const rz of [tz - 0.06, tz + 0.06]) { parts.push(...G.sleeve(0.021, 0.0172, 0.014, 12, dark, 0, 0.142, rz)); parts.push(G.box(0.02, 0.03, 0.014, dark, 0, 0.115, rz)); }
      lenses.push({ type: 'circle', r: 0.029, y: 0.142, z: tz - 0.176 }, { type: 'circle', r: 0.021, y: 0.142, z: tz + 0.16, back: true });
      sightY = 0.142; sightZ = tz + 0.16;
    }
    // barrel attachments
    if (att.barrel === 'suppressor') { parts.push(G.cyl(0.022, 0.022, 0.17, 8, 0x222222, 0, 0.05, muzzleZ - 0.08, Math.PI / 2)); muzzleZ -= 0.17; }
    else if (att.barrel && att.barrel !== 'none') { parts.push(G.cyl(0.018, 0.016, 0.055, 6, 0x262626, 0, 0.05, muzzleZ - 0.02, Math.PI / 2)); muzzleZ -= 0.055; }
    else { parts.push(G.cyl(0.015, 0.014, 0.04, 6, dark, 0, 0.05, muzzleZ - 0.015, Math.PI / 2)); muzzleZ -= 0.04; }
    // underbarrel
    const gz = -len * 0.42;
    if (att.grip === 'vertical') parts.push(G.box(0.026, 0.085, 0.03, dark, 0, -0.03, gz));
    else if (att.grip === 'angled') parts.push(G.box(0.026, 0.04, 0.07, dark, 0, -0.005, gz, -0.5));
    else if (att.grip === 'stubby') parts.push(G.box(0.026, 0.045, 0.03, dark, 0, -0.01, gz));
    else if (att.grip === 'bipod' && !L.bipod) { parts.push(G.box(0.01, 0.01, 0.2, dark, -0.015, 0.0, gz - 0.06)); parts.push(G.box(0.01, 0.01, 0.2, dark, 0.015, 0.0, gz - 0.06)); }
    if (att.rail === 'laser') { parts.push(G.box(0.022, 0.024, 0.06, dark, 0.042, 0.04, gz + 0.02)); parts.push(G.box(0.008, 0.008, 0.004, 0xff2020, 0.042, 0.04, gz - 0.012)); }
    else if (att.rail === 'flashlight') parts.push(G.cyl(0.016, 0.018, 0.08, 8, dark, 0.042, 0.04, gz, Math.PI / 2));
  }
  const bodyGeo = G.merge(parts);
  const magGeo = mag.length ? G.merge(mag) : null;
  const full = magGeo ? G.merge([bodyGeo.clone(), magGeo.clone().translate(magPos.x, magPos.y, magPos.z)]) : bodyGeo;
  const res = { geo: full, bodyGeo, magGeo, magPos, sightY, sightZ, lenses, reticleZ, muzzle: new THREE.Vector3(0, w.type === 'pistol' ? 0.047 : 0.05, muzzleZ), len, pistol: w.type === 'pistol' };
  geoCache.set(key, res);
  return res;
}

export function buildGadgetGeo(id) {
  const key = 'g_' + id;
  if (geoCache.has(key)) return geoCache.get(key);
  let parts;
  switch (id) {
    case 'frag': case 'impact': parts = [G.ico(0.04, 1, id === 'impact' ? 0x7a6a3a : 0x3f4a2e, 0, 0.0, 0), G.box(0.015, 0.03, 0.015, 0x888888, 0, 0.045, 0), G.box(0.008, 0.06, 0.012, 0x777777, 0.02, 0.03, 0)]; break;
    case 'smoke': case 'flash': parts = [G.cyl(0.032, 0.032, 0.12, 8, id === 'flash' ? 0x2a2a2a : 0x6a6e70, 0, 0, 0), G.box(0.015, 0.025, 0.015, 0x888888, 0, 0.07, 0), G.cyl(0.033, 0.033, 0.02, 8, id === 'flash' ? 0x666666 : 0xd0d0d0, 0, 0.02, 0)]; break;
    case 'm320': parts = [G.cyl(0.03, 0.03, 0.3, 8, 0x2a2a2a, 0, 0.04, -0.15, Math.PI / 2), G.box(0.03, 0.1, 0.04, 0x1c1c1c, 0, -0.03, 0.02, 0.3), G.box(0.04, 0.05, 0.15, 0x333333, 0, 0.06, 0.04), G.box(0.05, 0.1, 0.03, 0x2a2a2a, 0, 0.03, 0.14)]; break;
    case 'rpg': parts = [G.cyl(0.035, 0.035, 0.95, 8, 0x4a5a3a, 0, 0.06, -0.15, Math.PI / 2), G.cone(0.055, 0.2, 8, 0x5a6a4a, 0, 0.06, -0.72), G.box(0.03, 0.09, 0.04, 0x1c1c1c, 0, -0.02, 0.0, 0.3), G.box(0.03, 0.09, 0.04, 0x1c1c1c, 0, -0.02, -0.25, 0.3), G.box(0.03, 0.04, 0.05, 0x222222, -0.04, 0.12, -0.1), G.cyl(0.045, 0.04, 0.1, 8, 0x6a5a3a, 0, 0.06, 0.32, Math.PI / 2)]; break;
    case 'medkit': parts = [G.box(0.18, 0.12, 0.08, 0xe8e8e8, 0, 0, 0), G.box(0.06, 0.02, 0.085, 0xd02020, 0, 0, 0), G.box(0.02, 0.06, 0.085, 0xd02020, 0, 0, 0), G.box(0.06, 0.02, 0.02, 0x666666, 0, 0.07, 0)]; break;
    case 'ammobox': parts = [G.box(0.25, 0.14, 0.14, 0x4a5a2a, 0, 0, 0), G.box(0.1, 0.02, 0.06, 0x222222, 0, 0.08, 0), G.box(0.26, 0.02, 0.15, 0x3a4a22, 0, 0.06, 0)]; break;
    case 'c4': parts = [G.box(0.12, 0.05, 0.08, 0xc8b88a, 0, 0, 0), G.box(0.03, 0.02, 0.06, 0x222222, 0.03, 0.035, 0), G.box(0.04, 0.09, 0.025, 0x2a2a2a, -0.12, 0.0, 0.02), G.box(0.01, 0.01, 0.01, 0xff2020, 0.03, 0.05, 0)]; break;
    case 'claymore': parts = [G.box(0.18, 0.1, 0.04, 0x4a5a2e, 0, 0, 0), G.box(0.01, 0.06, 0.01, 0x333333, -0.06, -0.07, 0), G.box(0.01, 0.06, 0.01, 0x333333, 0.06, -0.07, 0)]; break;
    case 'beacon': parts = [G.box(0.14, 0.18, 0.1, 0x3a4a5a, 0, 0, 0), G.box(0.01, 0.2, 0.01, 0x222222, 0.04, 0.18, 0), G.box(0.03, 0.03, 0.03, 0x30ff60, 0.04, 0.29, 0)]; break;
    case 'rally': parts = [G.box(0.16, 0.12, 0.1, 0x4a4a3a, 0, 0, 0), G.box(0.01, 0.35, 0.01, 0x222222, -0.05, 0.22, 0), G.box(0.12, 0.08, 0.005, 0xf0e070, 0.01, 0.34, 0)]; break;
    case 'binoculars': parts = [G.cyl(0.025, 0.025, 0.12, 8, 0x2a2a2a, -0.035, 0, 0, Math.PI / 2), G.cyl(0.025, 0.025, 0.12, 8, 0x2a2a2a, 0.035, 0, 0, Math.PI / 2), G.box(0.04, 0.02, 0.04, 0x222222, 0, 0, 0)]; break;
    case 'sandbags': parts = [G.box(0.3, 0.12, 0.18, 0xb8a37a, 0, 0, 0)]; break;
    case 'knife': parts = [G.box(0.012, 0.03, 0.14, 0xb8bcc0, 0, 0, -0.1), G.box(0.022, 0.03, 0.09, 0x2a2a26, 0, -0.005, 0.02), G.box(0.05, 0.012, 0.012, 0x3a3a36, 0, 0, -0.03)]; break;
    case 'bandage': parts = [G.cyl(0.035, 0.035, 0.07, 8, 0xeeeeee, 0, 0, 0, 0, 0, Math.PI / 2)]; break;
    default: parts = [G.box(0.1, 0.1, 0.1, 0x888888)];
  }
  const geo = G.merge(parts);
  geoCache.set(key, geo);
  return geo;
}

export const TEAM_COLORS = [
  { uniform: 0x5b6b46, uniform2: 0x4c5a3a, vest: 0x3c4932, helmet: 0x4d5c3c, accent: 0x3d8de0, pack: 0x46523a, pants: 0x55633f, glove: 0x2f3328, name: 'NORTHWIND', css: '#4a9cf0' },
  { uniform: 0x9c8a66, uniform2: 0x857552, vest: 0x6c5d43, helmet: 0x7e6f53, accent: 0xe0503d, pack: 0x7a6a4d, pants: 0x8d7c5b, glove: 0x3a3226, name: 'IRONSIDE', css: '#f05a48' },
];
const SKINS = [0xe0b48f, 0xc69070, 0x8d5a3c, 0xf0c8a8, 0xa8754f];

// Box aligned between two points.
export function limb(ax, ay, az, bx, by, bz, t, color, t2) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const L = Math.hypot(dx, dy, dz);
  const g = G.box(t, t2 || t, L, color);
  const m = new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), new THREE.Vector3(dx, dy, dz), new THREE.Vector3(0, 1, 0));
  g.applyMatrix4(m);
  g.translate((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
  return g;
}

// Arm geometry relative to the shoulder pivot: upper arm, forearm, glove. pose: rifle | pistol | gadget
const ARM_POSES = {
  R: { rifle: [[-0.03, -0.24, -0.1], [-0.15, -0.14, -0.33]], pistol: [[-0.04, -0.22, -0.14], [-0.17, -0.12, -0.42]], gadget: [[-0.04, -0.26, -0.08], [-0.12, -0.2, -0.3]] },
  L: { rifle: [[0.06, -0.24, -0.3], [0.24, -0.12, -0.66]], pistol: [[0.08, -0.24, -0.16], [0.22, -0.14, -0.4]], gadget: [[0.02, -0.28, -0.06], [0.1, -0.26, -0.24]] },
};
function armGeo(side, pose, T) {
  const [e, h] = ARM_POSES[side][pose];
  return G.merge([
    G.box(0.13, 0.12, 0.13, T.uniform, 0, -0.02, 0),
    limb(0, -0.02, 0, e[0], e[1], e[2], 0.11, T.uniform, 0.105),
    G.box(0.1, 0.1, 0.1, T.uniform2, e[0], e[1], e[2]),
    limb(e[0], e[1], e[2], h[0], h[1], h[2], 0.095, T.uniform2, 0.09),
    G.box(0.085, 0.085, 0.1, T.glove, h[0], h[1] + 0.005, h[2]),
  ]);
}

export function buildSoldier(team, cls, seed = 0) {
  const T = TEAM_COLORS[team];
  const skin = SKINS[seed % SKINS.length];
  const mat = vertexColorMaterial('soldier', { roughness: 0.85 });
  const key = `s2_${team}_${cls}_${seed % SKINS.length}`;
  let geos = geoCache.get(key);
  if (!geos) {
    geos = {};
    geos.pelvis = G.merge([
      G.box(0.34, 0.17, 0.21, T.pants, 0, -0.03, 0),
      G.box(0.36, 0.05, 0.23, 0x2b2a24, 0, 0.06, 0),
      G.box(0.04, 0.04, 0.03, 0x8a7a50, 0, 0.06, -0.12),
      G.box(0.07, 0.13, 0.06, 0x2a2a26, 0.2, -0.04, 0.02), // holster
      G.box(0.08, 0.08, 0.07, T.vest, -0.19, 0.0, 0.04),
    ]);
    const torso = [
      G.box(0.31, 0.2, 0.19, T.uniform, 0, 0.1, 0),
      G.box(0.39, 0.28, 0.23, T.uniform, 0, 0.34, 0),
      G.box(0.35, 0.3, 0.06, T.vest, 0, 0.29, -0.125),
      G.box(0.35, 0.32, 0.06, T.vest, 0, 0.3, 0.125),
      G.box(0.06, 0.22, 0.24, T.vest, -0.19, 0.27, 0), G.box(0.06, 0.22, 0.24, T.vest, 0.19, 0.27, 0),
      G.box(0.07, 0.1, 0.05, lift(T.vest, 0.1), -0.1, 0.2, -0.17), G.box(0.07, 0.1, 0.05, lift(T.vest, 0.1), 0, 0.2, -0.17), G.box(0.07, 0.1, 0.05, lift(T.vest, 0.1), 0.1, 0.2, -0.17),
      G.box(0.06, 0.07, 0.04, 0x2a2a26, 0.12, 0.36, -0.165),
      G.box(0.03, 0.02, 0.32, 0x2a2a26, -0.12, 0.47, 0), G.box(0.03, 0.02, 0.32, 0x2a2a26, 0.12, 0.47, 0),
      G.box(0.13, 0.07, 0.13, skin, 0, 0.52, 0),
      G.box(0.09, 0.07, 0.01, T.accent, 0.205, 0.38, -0.02), // shoulder patch side (team color)
    ];
    const pack = T.pack;
    if (cls === 'medic') torso.push(G.box(0.28, 0.3, 0.13, 0xd8d8d0, 0, 0.3, 0.2), G.box(0.1, 0.035, 0.01, 0xd02020, 0, 0.32, 0.27), G.box(0.035, 0.1, 0.01, 0xd02020, 0, 0.32, 0.27));
    else if (cls === 'support') torso.push(G.box(0.3, 0.32, 0.15, pack, 0, 0.3, 0.2), G.box(0.24, 0.12, 0.12, 0x3a4a2a, 0, 0.08, 0.22));
    else if (cls === 'engineer') torso.push(G.box(0.26, 0.3, 0.13, pack, 0, 0.28, 0.19), G.cyl(0.05, 0.05, 0.62, 7, 0x4a5a3a, 0.13, 0.46, 0.22, 0.35));
    else if (cls === 'recon') torso.push(G.box(0.26, 0.26, 0.12, pack, 0, 0.26, 0.19), G.cyl(0.07, 0.07, 0.32, 8, 0x5a5640, 0, 0.46, 0.22, 0, 0, Math.PI / 2));
    else if (cls === 'leader') torso.push(G.box(0.24, 0.28, 0.12, pack, 0, 0.28, 0.19), G.box(0.015, 0.4, 0.015, 0x222222, -0.09, 0.62, 0.22));
    else torso.push(G.box(0.26, 0.24, 0.1, pack, 0, 0.27, 0.18), G.box(0.12, 0.12, 0.05, lift(pack, 0.1), 0, 0.22, 0.25));
    geos.torso = G.merge(torso);
    const head = [
      G.box(0.2, 0.22, 0.21, skin, 0, 0.12, 0),
      G.box(0.04, 0.05, 0.03, lift(skin, 0.05), 0, 0.11, -0.115),
      G.box(0.035, 0.02, 0.01, 0x222222, -0.05, 0.15, -0.106), G.box(0.035, 0.02, 0.01, 0x222222, 0.05, 0.15, -0.106),
      G.box(0.03, 0.06, 0.05, skin, -0.105, 0.12, 0), G.box(0.03, 0.06, 0.05, skin, 0.105, 0.12, 0),
    ];
    if (cls === 'recon') head.push(G.cyl(0.21, 0.21, 0.02, 10, T.helmet, 0, 0.215, 0), G.cyl(0.12, 0.13, 0.1, 10, T.helmet, 0, 0.27, 0));
    else if (cls === 'leader') head.push(G.box(0.23, 0.09, 0.23, T.helmet, 0, 0.245, 0.0), G.box(0.21, 0.02, 0.09, T.helmet, 0, 0.21, -0.14), G.box(0.04, 0.09, 0.08, 0x222222, 0.12, 0.13, 0), G.box(0.04, 0.09, 0.08, 0x222222, -0.12, 0.13, 0), G.box(0.24, 0.015, 0.03, 0x222222, 0, 0.21, 0));
    else {
      head.push(helmetGeo(0.155, T.helmet, 0.17), G.box(0.3, 0.02, 0.3, T.helmet, 0, 0.17, 0.0));
      head.push(G.box(0.05, 0.04, 0.03, 0x2a2a26, 0, 0.25, -0.15));
      if (team === 1) head.push(G.box(0.19, 0.04, 0.02, 0x222222, 0, 0.2, -0.155)); // goggles band
      if (cls === 'medic') head.push(G.box(0.05, 0.015, 0.01, 0xd02020, 0, 0.27, 0.15), G.box(0.015, 0.05, 0.01, 0xd02020, 0, 0.27, 0.15));
    }
    geos.head = G.merge(head);
    geos.thigh = G.merge([G.box(0.15, 0.44, 0.17, T.pants, 0, -0.22, 0), G.box(0.04, 0.12, 0.1, lift(T.pants, 0.08), 0.085, -0.24, 0)]);
    geos.shin = G.merge([G.box(0.13, 0.4, 0.14, T.pants, 0, -0.2, 0), G.box(0.14, 0.12, 0.05, T.vest, 0, -0.03, -0.08), G.box(0.15, 0.11, 0.27, 0x2a2622, 0, -0.42, -0.04), G.box(0.155, 0.03, 0.28, 0x1a1816, 0, -0.475, -0.04)]);
    for (const pose of ['rifle', 'pistol', 'gadget']) { geos['armR_' + pose] = armGeo('R', pose, T); geos['armL_' + pose] = armGeo('L', pose, T); }
    geoCache.set(key, geos);
  }
  const mk = (g) => { const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; return m; };
  const root = new THREE.Group();
  const body = new THREE.Group(); body.position.y = 0.95; root.add(body);
  const pelvis = new THREE.Group(); body.add(pelvis); pelvis.add(mk(geos.pelvis));
  const spine = new THREE.Group(); spine.position.y = 0.06; body.add(spine); spine.add(mk(geos.torso));
  const head = new THREE.Group(); head.position.y = 0.55; spine.add(head); head.add(mk(geos.head));
  const aim = new THREE.Group(); aim.position.set(0, 0.44, 0); spine.add(aim);
  const armR = new THREE.Group(); armR.position.set(0.21, 0, 0); aim.add(armR);
  const armL = new THREE.Group(); armL.position.set(-0.21, 0, 0); aim.add(armL);
  const armRMesh = mk(geos.armR_rifle), armLMesh = mk(geos.armL_rifle);
  armR.add(armRMesh); armL.add(armLMesh);
  const weapon = new THREE.Group(); weapon.position.set(0.06, -0.11, -0.33); aim.add(weapon);
  const legs = [];
  for (const side of [-1, 1]) {
    const thigh = new THREE.Group(); thigh.position.set(side * 0.095, -0.06, 0); pelvis.add(thigh);
    thigh.add(mk(geos.thigh));
    const shin = new THREE.Group(); shin.position.y = -0.44; thigh.add(shin);
    shin.add(mk(geos.shin));
    legs.push({ thigh, shin });
  }
  return { root, body, pelvis, spine, hips: body, torso: spine, head, aim, armR, armL, armRMesh, armLMesh, weapon, legs, weaponMesh: null, mat, geos, pose: 'rifle' };
}

export function setRigWeapon(rig, geo, pose = 'rifle') {
  if (rig.weaponMesh) rig.weapon.remove(rig.weaponMesh);
  const m = new THREE.Mesh(geo, vertexColorMaterial('weapon', { roughness: 0.6, metalness: 0.25 }));
  m.castShadow = true;
  rig.weapon.add(m);
  rig.weaponMesh = m;
  if (pose !== rig.pose) {
    rig.pose = pose;
    rig.armRMesh.geometry = rig.geos['armR_' + pose];
    rig.armLMesh.geometry = rig.geos['armL_' + pose];
    rig.weapon.position.set(0.06, -0.11, pose === 'pistol' ? -0.42 : pose === 'gadget' ? -0.3 : -0.33);
  }
  if (rig.outlined) { refreshRigOutline(rig); if (rig.outlines) for (const o of rig.outlines) o.visible = rig.outlineOn !== false; }
}

// ---- Enemy outline: inverted hull with smoothed normals, constant on-screen width, depth-tested so
// walls, terrain and props hide it exactly like they hide the soldier.
export const outlineMaterial = new THREE.ShaderMaterial({
  uniforms: { uColor: { value: new THREE.Color(1.0, 0.1, 0.06) }, uWidth: { value: 0.0032 } },
  vertexShader: `
    uniform float uWidth;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vec3 n = normalize(normalMatrix * normal);
      float d = clamp(-mv.z, 1.2, 40.0); // constant on screen up close, thinner far away
      mv.xyz += n * uWidth * d;
      mv.z -= 0.09; // sit just behind the soldier's own parts so only the silhouette shows
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: `uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 1.0); }`,
  side: THREE.BackSide,
});

const outlineCache = new WeakMap();
export function outlineGeometry(geo) {
  if (outlineCache.has(geo)) return outlineCache.get(geo);
  const pos = geo.attributes.position;
  const sums = new Map();
  const key = (i) => `${Math.round(pos.getX(i) * 1e3)},${Math.round(pos.getY(i) * 1e3)},${Math.round(pos.getZ(i) * 1e3)}`;
  const nrm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const k = key(i);
    const v = sums.get(k) || [0, 0, 0];
    v[0] += nrm.getX(i); v[1] += nrm.getY(i); v[2] += nrm.getZ(i);
    sums.set(k, v);
  }
  const out = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const v = sums.get(key(i)); const l = Math.hypot(v[0], v[1], v[2]) || 1;
    out[i * 3] = v[0] / l; out[i * 3 + 1] = v[1] / l; out[i * 3 + 2] = v[2] / l;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', pos);
  g.setAttribute('normal', new THREE.BufferAttribute(out, 3));
  if (geo.index) g.setIndex(geo.index);
  g.boundingSphere = geo.boundingSphere; g.boundingBox = geo.boundingBox;
  outlineCache.set(geo, g);
  return g;
}

function attachOutline(mesh, rig) {
  if (mesh.userData.outline) { mesh.userData.outline.geometry = outlineGeometry(mesh.geometry); return; }
  const o = new THREE.Mesh(outlineGeometry(mesh.geometry), outlineMaterial);
  o.castShadow = false; o.receiveShadow = false; o.renderOrder = 1;
  o.userData.isOutline = true;
  mesh.add(o);
  mesh.userData.outline = o;
  rig.outlines.push(o);
}

export function enableRigOutline(rig, on = true) {
  if (!rig.outlines) {
    rig.outlines = [];
    const meshes = [];
    rig.root.traverse(o => { if (o.isMesh && !o.userData.isOutline) meshes.push(o); });
    for (const m of meshes) attachOutline(m, rig);
    rig.outlined = true;
  }
  for (const o of rig.outlines) o.visible = on;
}

export function refreshRigOutline(rig) {
  if (!rig.outlined) return;
  const meshes = [];
  rig.root.traverse(o => { if (o.isMesh && !o.userData.isOutline) meshes.push(o); });
  for (const m of meshes) attachOutline(m, rig);
}
