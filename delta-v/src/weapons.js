// Weapon definitions. Units: SI (m, s, kg, N·s).
export const WEAPONS = {
  rifle: {
    id: 'rifle', hipSpread: 0.0065, adsSpread: 0.0008, name: 'KR-7 KINETIC RIFLE', short: 'KR-7', kind: 'bullet',
    speed: 400, projMass: 0.01, dmg: 20, headMul: 2.2, rpm: 600, mag: 30, reserve: 180, reload: 2.1,
    spread: 0.0016, auto: true, mass: 4.2, kick: 0.004, tracer: 0xfff0b0, sound: 'rifle',
  },
  shotgun: {
    id: 'shotgun', hipSpread: 0.062, adsSpread: 0.036, name: 'FL-12 FLECHETTE', short: 'FL-12', kind: 'pellets',
    speed: 320, pellets: 10, ejecta: 100, dmg: 11, headMul: 1.5, rpm: 75, mag: 6, reserve: 30, reload: 0.5, perShell: true,
    spread: 0.045, auto: false, mass: 4.6, kick: 0.03, tracer: 0xffc070, sound: 'shotgun',
  },
  gyrojet: {
    id: 'gyrojet', hipSpread: 0.008, adsSpread: 0.0008, name: 'GJ-3 GYROJET', short: 'GJ-3', kind: 'rocket',
    speed: 30, accel: 280, burn: 1.3, dmg: 72, headMul: 1.3, splash: 3.2, splashDmg: 45, rpm: 100, mag: 5, reserve: 15, reload: 2.6,
    spread: 0.001, auto: false, mass: 5.0, kick: 0.006, ejecta: 0.6, tracer: 0xff7040, sound: 'gyro',
  },
  recoilless: {
    id: 'recoilless', hipSpread: 0.011, adsSpread: 0.0005, name: 'RR-90 RECOILLESS', short: 'RR-90', kind: 'bullet',
    speed: 260, projMass: 0.25, ejecta: 0, dmg: 88, headMul: 1.4, rpm: 40, mag: 1, reserve: 14, reload: 2.2,
    spread: 0.0008, auto: false, mass: 6.5, kick: 0.02, tracer: 0xffa860, sound: 'recoilless',
    backblast: { range: 7, impulse: 260, dmg: 25 },
  },
  maser: {
    id: 'maser', hipSpread: 0.005, adsSpread: 0.0004, name: 'LM-2 MASER', short: 'LM-2', kind: 'beam',
    range: 180, dmg: 6, headMul: 1.5, rpm: 1200, mag: 1, reserve: 0, reload: 0, heatPer: 0.055, coolRate: 0.35,
    spread: 0.0006, auto: true, mass: 5.5, kick: 0.0006, tracer: 0x9ff0ff, sound: 'maser',
  },
};

export const WEAPON_IDS = ['rifle', 'shotgun', 'gyrojet', 'recoilless', 'maser'];
export const WEAPON_BLURB = {
  rifle: 'All-rounder. 400 m/s rounds, light recoil.',
  shotgun: 'Close range. Each shot is a 0.75 m/s escape burn.',
  gyrojet: 'Rockets that accelerate. Deadly on slow or anchored targets.',
  recoilless: 'One heavy slug, no recoil. Backblast shoves anyone behind you.',
  maser: 'Hitscan beam, no recoil, no ammo. Overheats.',
};

export const GRENADE = { fuse: 3.5, speed: 18, mass: 0.6, radius: 9, dmg: 115, impulse: 520, restitution: 0.85, count: 2 };
export const MELEE = { range: 2.4, dmg: 45, impulse: 420, spin: 4.5, cooldown: 0.9 };

export class WeaponState {
  constructor(def) {
    this.def = def;
    this.mag = def.mag;
    this.reserve = def.reserve;
    this.cool = 0;
    this.reloadT = 0;
    this.heat = 0;
    this.overheat = false;
  }
}
