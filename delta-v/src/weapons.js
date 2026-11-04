// Weapon definitions. Units: SI (m, s, kg, N·s).
export const WEAPONS = {
  rifle: {
    id: 'rifle', name: 'KR-7 KINETIC RIFLE', short: 'KR-7', kind: 'bullet',
    speed: 400, projMass: 0.01, dmg: 20, headMul: 2.2, rpm: 600, mag: 30, reserve: 180, reload: 2.1,
    spread: 0.0016, auto: true, mass: 4.2, kick: 0.004, tracer: 0xfff0b0, sound: 'rifle',
  },
  shotgun: {
    id: 'shotgun', name: 'FL-12 FLECHETTE', short: 'FL-12', kind: 'pellets',
    speed: 320, pellets: 10, ejecta: 100, dmg: 11, headMul: 1.5, rpm: 75, mag: 6, reserve: 30, reload: 0.5, perShell: true,
    spread: 0.045, auto: false, mass: 4.6, kick: 0.03, tracer: 0xffc070, sound: 'shotgun',
  },
  gyrojet: {
    id: 'gyrojet', name: 'GJ-3 GYROJET', short: 'GJ-3', kind: 'rocket',
    speed: 30, accel: 280, burn: 1.3, dmg: 72, headMul: 1.3, splash: 3.2, splashDmg: 45, rpm: 100, mag: 5, reserve: 15, reload: 2.6,
    spread: 0.001, auto: false, mass: 5.0, kick: 0.006, ejecta: 0.6, tracer: 0xff7040, sound: 'gyro',
  },
};

export const GRENADE = { fuse: 3.0, speed: 13, mass: 0.6, radius: 9, dmg: 115, impulse: 520, restitution: 0.85, count: 2 };
export const MELEE = { range: 2.4, dmg: 45, impulse: 420, spin: 4.5, cooldown: 0.9 };

export class WeaponState {
  constructor(def) {
    this.def = def;
    this.mag = def.mag;
    this.reserve = def.reserve;
    this.cool = 0;
    this.reloadT = 0;
  }
}
