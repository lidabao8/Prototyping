// Weapon definitions. Units: SI (m, s, kg, N·s).
export const WEAPONS = {
  rifle: {
    id: 'rifle', hipSpread: 0.0065, adsSpread: 0.0008, name: 'KR-7 KINETIC RIFLE', short: 'KR-7', kind: 'bullet',
    speed: 400, projMass: 0.01, dmg: 20, headMul: 2.2, rpm: 600, mag: 30, reserve: 180, reload: 2.1,
    spread: 0.0016, auto: true, mass: 4.2, kick: 0.004, tracer: 0xffe6a0, tracerW: 0.03, tracerLen: 5, sound: 'rifle',
  },
  shotgun: {
    id: 'shotgun', hipSpread: 0.062, adsSpread: 0.036, name: 'FL-12 FLECHETTE', short: 'FL-12', kind: 'pellets',
    speed: 320, pellets: 10, ejecta: 100, dmg: 11, headMul: 1.5, rpm: 75, mag: 6, reserve: 30, reload: 0.5, perShell: true,
    spread: 0.045, auto: false, mass: 4.6, kick: 0.03, tracer: 0xffb860, tracerW: 0.018, tracerLen: 3, sound: 'shotgun',
  },
  gyrojet: {
    id: 'gyrojet', hipSpread: 0.008, adsSpread: 0.0008, name: 'GJ-3 GYROJET', short: 'GJ-3', kind: 'rocket',
    speed: 30, accel: 280, burn: 1.3, dmg: 72, headMul: 1.3, splash: 3.2, splashDmg: 45, projRadius: 0.3, rpm: 100, mag: 5, reserve: 30, reload: 2.6,
    spread: 0.001, auto: false, mass: 5.0, kick: 0.006, ejecta: 0.6, tracer: 0xff7040, sound: 'gyro',
  },
  recoilless: {
    id: 'recoilless', hipSpread: 0.011, adsSpread: 0.0005, name: 'RR-90 RECOILLESS', short: 'RR-90', kind: 'bullet',
    speed: 260, projMass: 0.25, ejecta: 0, dmg: 88, headMul: 1.4, rpm: 40, mag: 1, reserve: 14, reload: 2.2,
    spread: 0.0008, auto: false, mass: 6.5, kick: 0.02, tracer: 0xff8a40, tracerW: 0.07, tracerLen: 4, sound: 'recoilless',
    backblast: { range: 7, impulse: 260, dmg: 25 },
    splash: 4, splashDmg: 30, splashImpulse: 180, // HE slug: area damage on impact
    homing: { cone: 0.122, accel: 90 }, // slight guidance: ~7 deg lock cone, 90 m/s^2 lateral (~1 m correction at 40 m)
  },
  maser: {
    id: 'maser', hipSpread: 0.005, adsSpread: 0.0004, name: 'LM-2 MASER', short: 'LM-2', kind: 'beam',
    // continuous beam: damage per second while the trigger is held; heats 0.5/s, so ~2 s of fire from cold
    range: 180, dps: 80, dmg: 0, headMul: 1.5, rpm: 3600, mag: 1, reserve: 0, reload: 0, heatRate: 0.5, coolRate: 0.35,
    spread: 0.0004, auto: true, mass: 5.5, kick: 0, tracer: 0xffd23a, sound: 'maser',
  },
};

export const WEAPON_IDS = ['rifle', 'shotgun', 'gyrojet', 'recoilless', 'maser'];
export const WEAPON_BLURB = {
  rifle: 'All-rounder. 400 m/s rounds, light recoil.',
  shotgun: 'Close range. Each shot is a 0.75 m/s escape burn.',
  gyrojet: 'Rockets that accelerate. Deadly on slow or anchored targets.',
  recoilless: 'Slightly guided HE slug with a 4 m blast. No recoil; backblast shoves anyone behind you.',
  maser: 'Continuous yellow beam: steady damage while held, no recoil, no ammo. Overheats.',
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
