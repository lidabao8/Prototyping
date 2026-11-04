// Weapons, attachments, classes and gadgets. Spread/recoil in degrees, velocity in m/s, damage per hit (100 HP).
export const WEAPONS = {
  // Assault rifles / carbines
  m4a1: { name: 'M4A1', type: 'carbine', dmg: 26, dmgMin: 19, r0: 40, r1: 120, rpm: 800, vel: 880, mag: 30, mags: 5, reload: 2.1, reloadEmpty: 2.6, modes: ['auto', 'semi'], recoilV: 0.42, recoilH: 0.22, spreadHip: 2.6, spreadAds: 0.12, adsTime: 0.2, moveMul: 0.97, pen: 0.8, sound: 'carbine', look: { len: 0.82, color: 0x2b2b2b, mag: 'curve', stock: 'tube' } },
  ak74: { name: 'AK-74', type: 'ar', dmg: 28, dmgMin: 20, r0: 45, r1: 130, rpm: 650, vel: 880, mag: 30, mags: 5, reload: 2.4, reloadEmpty: 3.0, modes: ['auto', 'semi'], recoilV: 0.5, recoilH: 0.3, spreadHip: 2.8, spreadAds: 0.13, adsTime: 0.24, moveMul: 0.95, pen: 0.85, sound: 'rifle', look: { len: 0.92, color: 0x3a3028, wood: 0x7a4a2a, mag: 'curve', stock: 'solid' } },
  aug: { name: 'AUG A3', type: 'ar', dmg: 25, dmgMin: 19, r0: 45, r1: 130, rpm: 700, vel: 920, mag: 30, mags: 5, reload: 2.6, reloadEmpty: 3.2, modes: ['auto', 'semi'], recoilV: 0.36, recoilH: 0.18, spreadHip: 2.7, spreadAds: 0.11, adsTime: 0.24, moveMul: 0.95, pen: 0.8, sound: 'rifle', look: { len: 0.78, color: 0x4b5a3b, mag: 'straight', stock: 'bullpup' } },
  scarh: { name: 'SCAR-H', type: 'ar', dmg: 36, dmgMin: 27, r0: 50, r1: 150, rpm: 600, vel: 840, mag: 20, mags: 6, reload: 2.5, reloadEmpty: 3.1, modes: ['auto', 'semi'], recoilV: 0.7, recoilH: 0.32, spreadHip: 3.0, spreadAds: 0.13, adsTime: 0.27, moveMul: 0.93, pen: 1.1, sound: 'rifle', look: { len: 0.95, color: 0xb59a6a, mag: 'straight', stock: 'solid' } },
  g36c: { name: 'G36C', type: 'carbine', dmg: 24, dmgMin: 18, r0: 35, r1: 110, rpm: 750, vel: 800, mag: 30, mags: 5, reload: 2.0, reloadEmpty: 2.5, modes: ['auto', 'semi'], recoilV: 0.36, recoilH: 0.24, spreadHip: 2.4, spreadAds: 0.13, adsTime: 0.19, moveMul: 0.98, pen: 0.75, sound: 'carbine', look: { len: 0.72, color: 0x2e2e2e, mag: 'straight', stock: 'solid' } },
  // SMGs
  mp7: { name: 'MP7', type: 'smg', dmg: 20, dmgMin: 13, r0: 15, r1: 55, rpm: 950, vel: 700, mag: 40, mags: 5, reload: 1.9, reloadEmpty: 2.3, modes: ['auto', 'semi'], recoilV: 0.24, recoilH: 0.2, spreadHip: 1.9, spreadAds: 0.16, adsTime: 0.15, moveMul: 1.04, pen: 0.5, sound: 'smg', look: { len: 0.55, color: 0x262626, mag: 'straight', stock: 'tube' } },
  ump45: { name: 'UMP-45', type: 'smg', dmg: 27, dmgMin: 17, r0: 15, r1: 50, rpm: 620, vel: 420, mag: 25, mags: 6, reload: 2.0, reloadEmpty: 2.5, modes: ['auto', 'semi'], recoilV: 0.3, recoilH: 0.18, spreadHip: 1.9, spreadAds: 0.18, adsTime: 0.16, moveMul: 1.03, pen: 0.45, sound: 'smg', look: { len: 0.6, color: 0x303030, mag: 'straight', stock: 'solid' } },
  p90: { name: 'P90', type: 'smg', dmg: 19, dmgMin: 13, r0: 18, r1: 60, rpm: 900, vel: 715, mag: 50, mags: 4, reload: 2.4, reloadEmpty: 2.9, modes: ['auto', 'semi'], recoilV: 0.22, recoilH: 0.16, spreadHip: 2.0, spreadAds: 0.15, adsTime: 0.16, moveMul: 1.03, pen: 0.5, sound: 'smg', look: { len: 0.52, color: 0x3a3a34, mag: 'top', stock: 'bullpup' } },
  // LMGs
  m249: { name: 'M249', type: 'lmg', dmg: 26, dmgMin: 20, r0: 50, r1: 150, rpm: 750, vel: 900, mag: 100, mags: 3, reload: 5.2, reloadEmpty: 6.0, modes: ['auto'], recoilV: 0.4, recoilH: 0.34, spreadHip: 4.5, spreadAds: 0.18, adsTime: 0.36, moveMul: 0.88, pen: 1.2, sound: 'lmg', look: { len: 1.0, color: 0x2f2f2a, mag: 'box', stock: 'solid', bipod: true } },
  pkm: { name: 'PKM', type: 'lmg', dmg: 33, dmgMin: 25, r0: 55, r1: 160, rpm: 650, vel: 825, mag: 100, mags: 3, reload: 5.6, reloadEmpty: 6.4, modes: ['auto'], recoilV: 0.55, recoilH: 0.38, spreadHip: 4.8, spreadAds: 0.2, adsTime: 0.4, moveMul: 0.86, pen: 1.35, sound: 'lmg', look: { len: 1.1, color: 0x2c2a26, wood: 0x6a3e22, mag: 'box', stock: 'solid', bipod: true } },
  // DMRs
  mk14: { name: 'MK14 EBR', type: 'dmr', dmg: 46, dmgMin: 39, r0: 70, r1: 220, rpm: 420, vel: 850, mag: 20, mags: 5, reload: 2.6, reloadEmpty: 3.1, modes: ['semi'], recoilV: 1.15, recoilH: 0.35, spreadHip: 3.4, spreadAds: 0.05, adsTime: 0.3, moveMul: 0.93, pen: 1.5, sound: 'dmr', sight: 'acog', look: { len: 1.05, color: 0x4a4a42, mag: 'straight', stock: 'solid' } },
  svd: { name: 'SVD', type: 'dmr', dmg: 57, dmgMin: 47, r0: 80, r1: 250, rpm: 300, vel: 830, mag: 10, mags: 6, reload: 2.7, reloadEmpty: 3.3, modes: ['semi'], recoilV: 1.6, recoilH: 0.4, spreadHip: 3.8, spreadAds: 0.04, adsTime: 0.33, moveMul: 0.92, pen: 1.7, sound: 'dmr', sight: 'acog', look: { len: 1.2, color: 0x2a2724, wood: 0x7a4a2a, mag: 'straight', stock: 'solid' } },
  // Snipers
  l96: { name: 'L96A1', type: 'sniper', dmg: 96, dmgMin: 86, r0: 100, r1: 400, rpm: 46, vel: 910, mag: 5, mags: 6, reload: 3.2, reloadEmpty: 3.8, modes: ['bolt'], bolt: true, recoilV: 2.6, recoilH: 0.5, spreadHip: 5, spreadAds: 0.0, adsTime: 0.38, moveMul: 0.92, pen: 2.5, headMul: 3, sound: 'sniper', sight: 'scope8', look: { len: 1.2, color: 0x4a5a3a, mag: 'straight', stock: 'solid' } },
  m200: { name: 'M200', type: 'sniper', dmg: 112, dmgMin: 100, r0: 120, r1: 500, rpm: 38, vel: 980, mag: 7, mags: 5, reload: 3.6, reloadEmpty: 4.2, modes: ['bolt'], bolt: true, recoilV: 3.2, recoilH: 0.6, spreadHip: 5.5, spreadAds: 0.0, adsTime: 0.42, moveMul: 0.9, pen: 3, headMul: 3, sound: 'sniper', sight: 'scope8', look: { len: 1.3, color: 0x3a3a36, mag: 'straight', stock: 'solid' } },
  // Shotguns
  m870: { name: 'M870', type: 'shotgun', dmg: 14, dmgMin: 5, pellets: 9, r0: 8, r1: 32, rpm: 70, vel: 400, mag: 6, mags: 6, reload: 0.55, reloadEmpty: 0.55, shellReload: true, modes: ['pump'], pump: true, recoilV: 2.2, recoilH: 0.6, spreadHip: 4.2, spreadAds: 2.6, pelletSpread: 2.6, adsTime: 0.2, moveMul: 1.0, pen: 0.3, sound: 'shotgun', look: { len: 0.95, color: 0x2a2a2a, wood: 0x6a4428, mag: 'tube', stock: 'solid' } },
  m1014: { name: 'M1014', type: 'shotgun', dmg: 11, dmgMin: 4, pellets: 9, r0: 8, r1: 28, rpm: 260, vel: 400, mag: 7, mags: 5, reload: 0.5, reloadEmpty: 0.5, shellReload: true, modes: ['semi'], recoilV: 1.8, recoilH: 0.6, spreadHip: 4.4, spreadAds: 3.0, pelletSpread: 3.0, adsTime: 0.22, moveMul: 1.0, pen: 0.3, sound: 'shotgun', look: { len: 0.95, color: 0x262626, mag: 'tube', stock: 'solid' } },
  // Pistols
  m9: { name: 'M9', type: 'pistol', dmg: 24, dmgMin: 15, r0: 15, r1: 45, rpm: 420, vel: 380, mag: 15, mags: 4, reload: 1.5, reloadEmpty: 1.9, modes: ['semi'], recoilV: 0.8, recoilH: 0.3, spreadHip: 1.6, spreadAds: 0.25, adsTime: 0.12, moveMul: 1.05, pen: 0.3, sound: 'pistol', look: { len: 0.22, color: 0x2a2a2a } },
  g18: { name: 'Glock 18', type: 'pistol', dmg: 18, dmgMin: 11, r0: 12, r1: 40, rpm: 1100, vel: 375, mag: 19, mags: 4, reload: 1.4, reloadEmpty: 1.8, modes: ['auto', 'semi'], recoilV: 0.5, recoilH: 0.4, spreadHip: 2.0, spreadAds: 0.4, adsTime: 0.12, moveMul: 1.05, pen: 0.3, sound: 'pistol', look: { len: 0.2, color: 0x1e1e1e } },
  deagle: { name: 'Desert Eagle', type: 'pistol', dmg: 48, dmgMin: 30, r0: 20, r1: 55, rpm: 230, vel: 440, mag: 7, mags: 4, reload: 1.8, reloadEmpty: 2.2, modes: ['semi'], recoilV: 2.0, recoilH: 0.6, spreadHip: 2.4, spreadAds: 0.3, adsTime: 0.14, moveMul: 1.03, pen: 0.6, sound: 'pistol', look: { len: 0.27, color: 0x8a8a8a } },
  usp: { name: 'USP', type: 'pistol', dmg: 26, dmgMin: 16, r0: 15, r1: 45, rpm: 400, vel: 370, mag: 12, mags: 4, reload: 1.5, reloadEmpty: 1.9, modes: ['semi'], recoilV: 0.9, recoilH: 0.3, spreadHip: 1.6, spreadAds: 0.25, adsTime: 0.12, moveMul: 1.05, pen: 0.3, sound: 'pistol', look: { len: 0.21, color: 0x2a2a2a } },
};

export const ATTACHMENTS = {
  sight: {
    iron: { name: 'Iron sights', zoom: 1.15 },
    reddot: { name: 'Red dot', zoom: 1.3, reticle: 'dot' },
    holo: { name: 'Holographic', zoom: 1.3, reticle: 'holo' },
    x2: { name: '2x Prism', zoom: 2, reticle: 'chevron' },
    acog: { name: '4x ACOG', zoom: 4, reticle: 'chevron', optic: true },
    scope8: { name: '8x Scope', zoom: 8, scope: true, reticle: 'cross' },
  },
  barrel: {
    none: { name: 'None' },
    suppressor: { name: 'Suppressor', suppressed: true, velMul: 0.92, dmgMul: 0.94, recoilVMul: 0.95, noFlash: true },
    compensator: { name: 'Compensator', recoilHMul: 0.68 },
    brake: { name: 'Muzzle brake', recoilVMul: 0.8, recoilHMul: 1.05 },
    flashhider: { name: 'Flash hider', noFlash: true, recoilVMul: 0.96 },
  },
  grip: {
    none: { name: 'None' },
    vertical: { name: 'Vertical grip', recoilVMul: 0.8 },
    angled: { name: 'Angled grip', adsMul: 0.72, recoilHMul: 0.9 },
    stubby: { name: 'Stubby grip', recoilVMul: 0.9, recoilHMul: 0.88, hipMul: 0.9 },
    bipod: { name: 'Bipod', bipod: true },
  },
  rail: {
    none: { name: 'None' },
    laser: { name: 'Laser', hipMul: 0.62, laser: true },
    flashlight: { name: 'Flashlight', light: true },
  },
};

export function allowedAttachments(wid, slot) {
  const w = WEAPONS[wid];
  const t = w.type;
  const all = Object.keys(ATTACHMENTS[slot]);
  if (t === 'pistol') return slot === 'sight' ? ['iron', 'reddot'] : slot === 'barrel' ? ['none', 'suppressor'] : slot === 'rail' ? all : ['none'];
  if (slot === 'sight') {
    if (t === 'sniper') return ['scope8', 'acog', 'x2', 'reddot', 'iron'];
    if (t === 'shotgun') return ['iron', 'reddot', 'holo'];
    if (t === 'smg') return ['iron', 'reddot', 'holo', 'x2'];
    return ['iron', 'reddot', 'holo', 'x2', 'acog'];
  }
  if (slot === 'grip') {
    if (t === 'sniper' || t === 'lmg' || t === 'dmr') return ['none', 'vertical', 'angled', 'bipod'];
    if (t === 'shotgun') return ['none', 'vertical', 'angled'];
    return ['none', 'vertical', 'angled', 'stubby'];
  }
  if (slot === 'barrel' && t === 'shotgun') return ['none', 'suppressor'];
  return all;
}

export const GADGETS = {
  frag: { name: 'Frag grenade', count: 2, kind: 'throw', key: 'G' },
  smoke: { name: 'Smoke grenade', count: 2, kind: 'throw' },
  impact: { name: 'Impact grenade', count: 2, kind: 'throw' },
  flash: { name: 'Flashbang', count: 2, kind: 'throw' },
  m320: { name: 'M320 launcher', count: 4, kind: 'launcher' },
  medkit: { name: 'Medkit', count: Infinity, kind: 'medkit' },
  rpg: { name: 'RPG-7', count: 3, kind: 'rpg' },
  c4: { name: 'C4', count: 3, kind: 'c4' },
  ammobox: { name: 'Ammo box', count: 2, kind: 'place' },
  sandbags: { name: 'Sandbag kit', count: 5, kind: 'place' },
  claymore: { name: 'Claymore', count: 2, kind: 'place' },
  beacon: { name: 'Spawn beacon', count: 1, kind: 'place' },
  rally: { name: 'Rally point', count: 1, kind: 'place' },
  binoculars: { name: 'Binoculars', count: Infinity, kind: 'binoculars' },
};

export const CLASSES = {
  assault: { name: 'Assault', desc: 'Frontline rifleman. Underbarrel grenade launcher and extra frags.', types: ['ar', 'carbine'], gadgets: ['m320', 'frag'], throwables: 3, color: '#d9a441' },
  medic: { name: 'Medic', desc: 'Fast full-health revives. Medkit heals you and nearby squadmates.', types: ['ar', 'carbine', 'smg'], gadgets: ['medkit', 'smoke'], throwables: 2, color: '#6fd36a' },
  engineer: { name: 'Engineer', desc: 'Breacher. RPG and C4 blow open walls and clear buildings.', types: ['smg', 'shotgun', 'carbine'], gadgets: ['rpg', 'c4'], throwables: 2, color: '#e07a4a' },
  support: { name: 'Support', desc: 'Light machine guns, ammo boxes and sandbag fortifications.', types: ['lmg', 'ar'], gadgets: ['ammobox', 'sandbags'], throwables: 2, color: '#4ab0e0' },
  recon: { name: 'Recon', desc: 'Marksman. Claymores and a spawn beacon for the squad.', types: ['sniper', 'dmr'], gadgets: ['claymore', 'beacon'], throwables: 2, color: '#b48ae6' },
  leader: { name: 'Squad Leader', desc: 'Gives orders, drops a rally point and spots enemies with binoculars.', types: ['ar', 'carbine', 'dmr'], gadgets: ['rally', 'binoculars'], throwables: 2, color: '#f0e070', leader: true },
};

export const THROWABLES = ['frag', 'smoke', 'impact', 'flash'];
export const PISTOLS = ['m9', 'g18', 'deagle', 'usp'];

export function weaponsForClass(cls) {
  const types = CLASSES[cls].types;
  return Object.keys(WEAPONS).filter(k => types.includes(WEAPONS[k].type));
}

export function defaultAttachments(wid) {
  const w = WEAPONS[wid];
  return { sight: w.sight || (w.type === 'pistol' ? 'iron' : 'reddot'), barrel: 'none', grip: 'none', rail: 'none' };
}

export function randomLoadout(cls, rng = Math.random) {
  const list = weaponsForClass(cls);
  const wid = list[Math.floor(rng() * list.length)];
  const w = WEAPONS[wid];
  const att = defaultAttachments(wid);
  const pick = (slot) => { const a = allowedAttachments(wid, slot); return a[Math.floor(rng() * a.length)]; };
  if (w.type !== 'sniper') att.sight = pick('sight');
  if (w.type === 'dmr' && rng() < 0.6) att.sight = 'acog';
  att.barrel = rng() < 0.55 ? pick('barrel') : 'none';
  att.grip = rng() < 0.6 ? pick('grip') : 'none';
  att.rail = rng() < 0.3 ? pick('rail') : 'none';
  const pistol = PISTOLS[Math.floor(rng() * PISTOLS.length)];
  const throwable = cls === 'medic' || cls === 'leader' ? (rng() < 0.6 ? 'smoke' : 'frag') : (rng() < 0.75 ? 'frag' : (rng() < 0.5 ? 'impact' : 'smoke'));
  return { cls, primary: wid, att, secondary: pistol, satt: { sight: 'iron', barrel: rng() < 0.2 ? 'suppressor' : 'none', grip: 'none', rail: 'none' }, throwable, armor: rng() < 0.4 ? 'heavy' : 'light' };
}

// Effective stats with attachments applied.
export function weaponStats(wid, att) {
  const base = WEAPONS[wid];
  const s = Object.assign({}, base);
  s.id = wid;
  s.recoilVMul = 1; s.recoilHMul = 1; s.hipMul = 1; s.adsMul = 1; s.velMul = 1; s.dmgMul = 1;
  s.suppressed = false; s.noFlash = false; s.laser = false; s.light = false; s.bipod = false;
  for (const slot of ['sight', 'barrel', 'grip', 'rail']) {
    const a = ATTACHMENTS[slot][att && att[slot]] || null;
    if (!a) continue;
    for (const k of ['recoilVMul', 'recoilHMul', 'hipMul', 'adsMul', 'velMul', 'dmgMul']) if (a[k]) s[k] *= a[k];
    for (const k of ['suppressed', 'noFlash', 'laser', 'light', 'bipod']) if (a[k]) s[k] = true;
  }
  const sight = ATTACHMENTS.sight[(att && att.sight) || 'iron'] || ATTACHMENTS.sight.iron;
  s.zoom = sight.zoom; s.scope = !!sight.scope; s.reticle = sight.reticle || null; s.sightId = (att && att.sight) || 'iron';
  s.interval = 60 / s.rpm;
  return s;
}
