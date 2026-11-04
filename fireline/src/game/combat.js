// Ballistics (projectile bullets with drop, falloff, penetration), suppression, explosives, gadgets & placeables.
import * as THREE from 'three';
import { clamp, lerp, rand, segmentSphere } from '../core/math.js';
import { buildGadgetGeo } from '../entities/models.js';
import { vertexColorMaterial } from '../render/materials.js';

const DEG = Math.PI / 180;
const _v = new THREE.Vector3(), _d = new THREE.Vector3(), _m = new THREE.Vector3();

export class Combat {
  constructor(game) {
    this.game = game;
    this.bullets = [];
    this.projectiles = [];
    this.placed = [];
    this.shotCounter = 0;
  }

  get world() { return this.game.world; }

  // ---------------- bullets ----------------
  fireBullet(shooter, gun, pellet) {
    const s = gun.stats;
    const eye = shooter.eye(new THREE.Vector3());
    const dir = shooter.aimDir(new THREE.Vector3());
    let spread = shooter.spread();
    if (s.pellets) spread = Math.max(spread, s.pelletSpread || 2.5) * (pellet === 0 ? 0.3 : 1);
    if (shooter.suppression > 0.2 && !shooter.isPlayer) spread += shooter.suppression * 0.8;
    if (spread > 0) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * spread * 0.5 * DEG;
      const up = Math.abs(dir.y) > 0.99 ? _v.set(1, 0, 0) : _v.set(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(dir, up).normalize();
      const up2 = new THREE.Vector3().crossVectors(side, dir).normalize();
      dir.addScaledVector(side, Math.cos(a) * Math.tan(r)).addScaledVector(up2, Math.sin(a) * Math.tan(r)).normalize();
    }
    const vel = s.vel * s.velMul;
    const muzzle = shooter.isPlayer && shooter.vmMuzzle ? shooter.vmMuzzle : shooter.muzzleWorld(new THREE.Vector3());
    this.shotCounter++;
    const tracer = !s.suppressed && (s.type === 'sniper' || s.type === 'lmg' || pellet === 0 && (this.shotCounter % (shooter.isPlayer ? 3 : 2) === 0));
    this.bullets.push({
      x: eye.x, y: eye.y, z: eye.z, vx: dir.x * vel, vy: dir.y * vel, vz: dir.z * vel,
      ox: muzzle.x - eye.x, oy: muzzle.y - eye.y, oz: muzzle.z - eye.z,
      shooter, team: shooter.team, s, dmgMul: s.dmgMul, traveled: 0, life: 2.6, penLeft: s.pen, penDmg: 1,
      tracer, whizzed: false, weapon: s.name,
    });
  }

  falloff(s, dist) {
    if (dist <= s.r0) return s.dmg;
    if (dist >= s.r1) return s.dmgMin;
    return lerp(s.dmg, s.dmgMin, (dist - s.r0) / (s.r1 - s.r0));
  }

  updateBullets(dt) {
    const fx = this.game.fx;
    const soldiers = this.game.soldiers;
    const coll = this.world.collision;
    const wl = this.world.terrain.waterLevel;
    fx.tracers.begin();
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i];
      b.life -= dt;
      let remaining = dt;
      let alive = b.life > 0;
      let guard = 0;
      while (alive && remaining > 0 && guard++ < 4) {
        const step = remaining; remaining = 0;
        const vy2 = b.vy - 9.81 * step;
        const nx = b.x + b.vx * step, ny = b.y + (b.vy + vy2) * 0.5 * step, nz = b.z + b.vz * step;
        b.vy = vy2;
        const dx = nx - b.x, dy = ny - b.y, dz = nz - b.z;
        const L = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (L < 1e-6) break;
        const ux = dx / L, uy = dy / L, uz = dz / L;
        const wh = coll.raycast(b.x, b.y, b.z, ux, uy, uz, L, { skipInside: true, ignore: (bx) => bx.cat === 'cloth' });
        let worldT = wh ? wh.t : Infinity;
        // water
        if (wl !== null && (b.y - wl) * (ny - wl) < 0) {
          const t = (b.y - wl) / (b.y - ny) * L;
          if (t < worldT) { fx.impact(b.x + ux * t, wl, b.z + uz * t, 0, 1, 0, 'water'); this.game.audio.play3d('impactWater', b.x + ux * t, wl, b.z + uz * t, { vol: 0.5, maxDist: 60 }); alive = false; break; }
        }
        // soldiers
        let best = null, bestT = worldT, bestPart = null;
        for (let k = 0; k < soldiers.length; k++) {
          const s = soldiers[k];
          if (s === b.shooter || s.state === 'dead' || s.team === b.team) {
            continue;
          }
          const cx = s.pos.x, cy = s.pos.y + 0.9, cz = s.pos.z;
          // closest approach for broadphase & near-miss
          const wx = cx - b.x, wy = cy - b.y, wz = cz - b.z;
          const tProj = clamp(wx * ux + wy * uy + wz * uz, 0, L);
          const px = b.x + ux * tProj - cx, py = b.y + uy * tProj - cy, pz = b.z + uz * tProj - cz;
          const d2 = px * px + py * py + pz * pz;
          if (d2 > 1.6 * 1.6) {
            if (d2 < 4.5 * 4.5 && tProj < bestT) this.nearMiss(b, s, Math.sqrt(d2), b.x + ux * tProj, b.y + uy * tProj, b.z + uz * tProj);
            continue;
          }
          const hs = s.hitSpheres();
          for (let h = 0; h < hs.length; h++) {
            const sp = hs[h];
            const t = segmentSphere(b.x, b.y, b.z, dx, dy, dz, sp[0], sp[1], sp[2], sp[3]);
            if (t >= 0 && t * L < bestT) { bestT = t * L; best = s; bestPart = sp[4]; }
          }
          if (!best || best !== s) { if (tProj < bestT) this.nearMiss(b, s, Math.sqrt(d2) * 0.5, b.x + ux * tProj, b.y + uy * tProj, b.z + uz * tProj); }
        }
        if (best) {
          const hx = b.x + ux * bestT, hy = b.y + uy * bestT, hz = b.z + uz * bestT;
          const dist = b.traveled + bestT;
          let dmg = this.falloff(b.s, dist) * b.dmgMul * b.penDmg;
          const partMul = bestPart === 'head' ? (b.s.headMul || (b.s.type === 'shotgun' ? 1.5 : 1.9)) : bestPart === 'leg' ? 0.78 : 1;
          dmg *= partMul;
          const dirV = new THREE.Vector3(ux, uy, uz);
          const wasAlive = best.state === 'alive';
          best.takeDamage(dmg, b.shooter, bestPart, b.weapon, dirV, false);
          fx.impact(hx, hy, hz, -ux, -uy, -uz, 'flesh');
          this.game.onHit(b.shooter, best, dmg, bestPart, wasAlive);
          alive = false;
          b.x = hx; b.y = hy; b.z = hz;
          break;
        }
        if (wh) {
          const mat = wh.box ? wh.box.mat : this.terrainMat(wh.x, wh.z);
          fx.impact(wh.x, wh.y, wh.z, wh.nx, wh.ny, wh.nz, mat, wh.box);
          if (Math.random() < 0.5) this.game.audio.play3d(this.impactSound(mat), wh.x, wh.y, wh.z, { vol: 0.5, maxDist: 50 });
          // structural damage
          if (wh.box && wh.box.destructible) {
            const sd = this.falloff(b.s, b.traveled + wh.t) * (wh.box.mat === 'wood' || wh.box.mat === 'hay' || wh.box.mat === 'cloth' ? 0.25 : 0.04) * (b.s.pen > 1 ? 1.6 : 1);
            this.world.structures.damagePiece(wh.box, sd, fx, 'bullet');
          }
          // penetration
          if (wh.box && wh.box.alive !== false) {
            const cost = wh.box.pen * Math.min(wh.thickness, 1.5) * 4;
            if (cost < b.penLeft) {
              const frac = 1 - cost / b.penLeft;
              b.penLeft -= cost; b.penDmg *= Math.max(0.2, frac);
              const ex = wh.x + ux * (wh.thickness + 0.02), ey = wh.y + uy * (wh.thickness + 0.02), ez = wh.z + uz * (wh.thickness + 0.02);
              b.traveled += wh.t + wh.thickness;
              b.x = ex; b.y = ey; b.z = ez;
              const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy + b.vz * b.vz) * 0.85;
              b.vx = ux * spd; b.vy = uy * spd; b.vz = uz * spd;
              remaining = step * Math.max(0, (L - wh.t - wh.thickness) / L);
              fx.impact(ex, ey, ez, ux, uy, uz, wh.box.mat, wh.box);
              continue;
            }
          } else if (wh.box) {
            // destroyed by this bullet: continue through
            b.traveled += wh.t; b.x = wh.x + ux * 0.05; b.y = wh.y + uy * 0.05; b.z = wh.z + uz * 0.05; b.penDmg *= 0.7;
            remaining = step * Math.max(0, (L - wh.t) / L);
            continue;
          }
          alive = false;
          b.x = wh.x; b.y = wh.y; b.z = wh.z;
          break;
        }
        b.x = nx; b.y = ny; b.z = nz; b.traveled += L;
      }
      if (b.traveled > 1400 || Math.abs(b.x) > this.world.terrain.half || Math.abs(b.z) > this.world.terrain.half) alive = false;
      // tracer
      if (b.tracer) {
        const sp = Math.hypot(b.vx, b.vy, b.vz);
        const tl = Math.min(b.traveled, sp * 0.03);
        const k = 1 - Math.min(1, b.traveled / 40);
        const ex = b.x + b.ox * k, ey = b.y + b.oy * k, ez = b.z + b.oz * k;
        const k2 = 1 - Math.min(1, Math.max(0, b.traveled - tl) / 40);
        const sx = b.x - b.vx / sp * tl + b.ox * k2, sy = b.y - b.vy / sp * tl + b.oy * k2, sz = b.z - b.vz / sp * tl + b.oz * k2;
        const col = b.team === 0 ? [1.0, 0.85, 0.5] : [1.0, 0.7, 0.4];
        fx.tracers.add(sx, sy, sz, ex, ey, ez, col[0], col[1], col[2], 0.025);
      }
      if (!alive) this.bullets.splice(i, 1);
    }
    fx.tracers.end();
  }

  nearMiss(b, s, d, x, y, z) {
    if (s.state !== 'alive') return;
    if (!b.nm) b.nm = [];
    if (b.nm.includes(s)) return;
    b.nm.push(s);
    s.suppression = Math.min(1, s.suppression + (1 - d / 4.5) * (b.s.type === 'sniper' ? 0.45 : 0.16));
    if (s.isPlayer) {
      const sup = Math.hypot(b.vx, b.vy, b.vz) > 343;
      this.game.audio.play3d(sup ? 'crack' : 'whiz', x, y, z, { vol: 0.65, maxDist: 10, reverb: 0.05 });
    }
    if (s.brain) s.brain.onNearMiss(b.shooter);
  }

  terrainMat(x, z) {
    const t = this.world.terrain;
    const i = Math.round((x + t.half) / t.cell), j = Math.round((z + t.half) / t.cell);
    const id = (clamp(j, 0, t.n - 1) * t.n + clamp(i, 0, t.n - 1)) * 4;
    const s = t.splat;
    if (s[id + 2] > 0.5) return 'rock';
    if (this.world.def.biome === 'arid') return s[id + 3] > 0.5 ? 'concrete' : 'sand';
    return s[id] > 0.5 ? 'grass' : 'dirt';
  }

  impactSound(mat) {
    switch (mat) {
      case 'metal': case 'container': return 'impactMetal';
      case 'wood': case 'hay': return 'impactWood';
      case 'concrete': case 'brick': case 'stone': case 'rock': case 'plaster': return 'impactHard';
      default: return 'impactDirt';
    }
  }

  // ---------------- explosions ----------------
  explode(x, y, z, o) {
    const fx = this.game.fx;
    const radius = o.radius || 7, damage = o.damage || 120;
    const n = this.world.terrain.normalAt(x, z);
    const ground = Math.abs(y - this.world.terrain.heightAt(x, z)) < 0.8;
    fx.explosion(x, y, z, o.scale || 1, { ground, nx: n[0], ny: n[1], nz: n[2], fire: o.fire, dirt: this.world.def.biome === 'arid' ? [0.6, 0.52, 0.38] : [0.42, 0.36, 0.27] });
    this.game.audio.explosion(x, y, z);
    for (const s of this.game.soldiers) {
      if (s.state === 'dead') continue;
      const c = s.center(_v);
      const d = Math.hypot(c.x - x, c.y - y, c.z - z);
      if (o.directional) {
        const fx2 = c.x - x, fz2 = c.z - z; const dl = Math.hypot(fx2, fz2) || 1;
        if ((fx2 / dl) * o.dx + (fz2 / dl) * o.dz < 0.35) continue;
      }
      if (d < radius) {
        let dmg = damage * Math.pow(1 - d / radius, 1.1);
        if (!this.world.collision.los(x, y + 0.3, z, c.x, c.y, c.z)) dmg *= 0.25;
        s.takeDamage(dmg, o.attacker, 'body', o.weapon, _d.set(c.x - x, c.y - y, c.z - z).normalize().clone(), true);
        if (o.attacker && o.attacker !== s && s.team !== o.attacker.team) this.game.onHit(o.attacker, s, dmg, 'body', true);
      }
      if (d < radius * 3 && s.state === 'alive') s.suppression = Math.min(1, s.suppression + (1 - d / (radius * 3)) * 0.8);
      if (s.brain && d < 80) s.brain.onSound(x, z, o.attacker, true);
    }
    if (o.power) this.world.structures.explode(x, y, z, radius * (o.structRadiusMul || 0.8), o.power, fx);
    // chain C4/claymores
    for (const p of this.placed) if ((p.type === 'c4' || p.type === 'claymore') && !p.dead && Math.hypot(p.x - x, p.y - y, p.z - z) < 2.5) { p.dead = true; setTimeout(() => this.detonatePlaced(p), 80); }
  }

  // ---------------- projectiles ----------------
  spawnProjectile(type, owner, pos, vel, extra = {}) {
    const geo = buildGadgetGeo(type === 'launcher' ? 'frag' : type === 'rocket' ? 'rpg' : type);
    const mesh = new THREE.Mesh(type === 'rocket' ? new THREE.ConeGeometry(0.05, 0.4, 6).rotateX(-Math.PI / 2) : geo, vertexColorMaterial('weapon'));
    if (type === 'rocket') mesh.material = new THREE.MeshStandardMaterial({ color: 0x5a6a4a });
    mesh.castShadow = true;
    this.game.scene.add(mesh);
    const p = Object.assign({ type, owner, team: owner.team, x: pos.x, y: pos.y, z: pos.z, vx: vel.x, vy: vel.y, vz: vel.z, t: 0, mesh, bounces: 0, rest: false }, extra);
    p.fuse = { frag: 3.2, smoke: 1.4, flash: 1.6, impact: 8, launcher: 8, rocket: 5, c4: 30 }[type] ?? 3;
    this.projectiles.push(p);
    return p;
  }

  throwGrenade(s, type, vel) {
    const eye = s.eye(new THREE.Vector3());
    const dir = s.aimDir(new THREE.Vector3());
    const pos = eye.clone().addScaledVector(dir, 0.5).add(s.right(new THREE.Vector3()).multiplyScalar(0.15));
    const v = vel || dir.clone().multiplyScalar(type === 'c4' ? 9 : 17).add(new THREE.Vector3(0, 2.2, 0)).add(new THREE.Vector3(s.vel.x * 0.5, 0, s.vel.z * 0.5));
    this.spawnProjectile(type, s, pos, v);
    this.game.audio.play3d('throw', pos.x, pos.y, pos.z, { vol: 0.5, maxDist: 25 });
    if (type !== 'c4') this.game.onGrenadeThrown(s, type);
  }

  updateProjectiles(dt) {
    const coll = this.world.collision;
    const fx = this.game.fx;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.t += dt;
      let explodeNow = p.t >= p.fuse;
      if (!p.rest && !explodeNow) {
        const g = p.type === 'rocket' ? 2.5 : p.type === 'launcher' ? 9.81 : 15;
        p.vy -= g * dt;
        const dx = p.vx * dt, dy = p.vy * dt, dz = p.vz * dt;
        const L = Math.hypot(dx, dy, dz);
        if (L > 1e-5) {
          const ux = dx / L, uy = dy / L, uz = dz / L;
          let h = coll.raycast(p.x, p.y, p.z, ux, uy, uz, L + 0.05, { skipInside: true });
          // direct soldier hit for rockets/launcher
          if (p.type === 'rocket' || p.type === 'launcher' || p.type === 'impact') {
            for (const s of this.game.soldiers) {
              if (s.state === 'dead' || s === p.owner || s.team === p.team) continue;
              const hs = s.hitSpheres();
              for (const sp of hs) { const t = segmentSphere(p.x, p.y, p.z, dx, dy, dz, sp[0], sp[1], sp[2], sp[3] + 0.1); if (t >= 0 && (!h || t * L < h.t)) h = { t: t * L, x: p.x + dx * t, y: p.y + dy * t, z: p.z + dz * t, nx: -ux, ny: -uy, nz: -uz, soldier: s }; }
            }
          }
          if (h) {
            p.x = h.x + h.nx * 0.05; p.y = h.y + h.ny * 0.05; p.z = h.z + h.nz * 0.05;
            if (p.type === 'rocket' || p.type === 'impact' || (p.type === 'launcher' && p.t > 0.12)) explodeNow = true;
            else if (p.type === 'c4') { p.rest = true; p.stuck = true; p.vx = p.vy = p.vz = 0; this.convertToPlaced(p, h); i = Math.min(i, this.projectiles.length); continue; }
            else {
              const vn = p.vx * h.nx + p.vy * h.ny + p.vz * h.nz;
              p.vx -= 1.6 * vn * h.nx; p.vy -= 1.6 * vn * h.ny; p.vz -= 1.6 * vn * h.nz;
              p.vx *= 0.45; p.vy *= 0.45; p.vz *= 0.45;
              if (Math.abs(vn) > 2 && p.bounces++ < 8) this.game.audio.play3d('bounce', p.x, p.y, p.z, { vol: 0.35, maxDist: 30 });
              if (Math.hypot(p.vx, p.vy, p.vz) < 0.6 && h.ny > 0.5) { p.rest = true; p.vx = p.vy = p.vz = 0; }
            }
          } else { p.x += dx; p.y += dy; p.z += dz; }
        }
        if (p.type === 'rocket') {
          fx.smoke.emit(p.x, p.y, p.z, rand(-0.3, 0.3), rand(0, 0.4), rand(-0.3, 0.3), 1.6, 0.25, 1.4, [0.8, 0.8, 0.8, 0.5], [0.7, 0.7, 0.7, 0], 1, -0.2, 1);
          fx.glow.emit(p.x, p.y, p.z, 0, 0, 0, 0.06, 0.5, 0.2, [1, 0.7, 0.3, 1], [1, 0.4, 0.1, 0], 0, 0);
        }
      }
      if (p.mesh) {
        p.mesh.position.set(p.x, p.y, p.z);
        if (p.type === 'rocket') p.mesh.lookAt(p.x + p.vx, p.y + p.vy, p.z + p.vz);
        else if (!p.rest) p.mesh.rotation.x += dt * 8;
      }
      if (explodeNow) {
        this.projectiles.splice(i, 1);
        if (p.mesh) this.game.scene.remove(p.mesh);
        this.detonateProjectile(p);
      }
    }
  }

  detonateProjectile(p) {
    switch (p.type) {
      case 'frag': this.explode(p.x, p.y + 0.15, p.z, { radius: 8, damage: 160, power: 160, attacker: p.owner, weapon: 'Frag grenade', scale: 0.9 }); break;
      case 'impact': this.explode(p.x, p.y + 0.1, p.z, { radius: 5.5, damage: 120, power: 110, attacker: p.owner, weapon: 'Impact grenade', scale: 0.7 }); break;
      case 'launcher': this.explode(p.x, p.y + 0.1, p.z, { radius: 6, damage: 140, power: 260, attacker: p.owner, weapon: 'M320', scale: 0.85 }); break;
      case 'rocket': this.explode(p.x, p.y, p.z, { radius: 6.5, damage: 210, power: 900, structRadiusMul: 0.75, attacker: p.owner, weapon: 'RPG-7', scale: 1.3, fire: 5 }); break;
      case 'smoke': this.game.fx.addSmokeScreen(p.x, p.y, p.z, 18); this.game.audio.play3d('pin', p.x, p.y, p.z, { vol: 0.5, maxDist: 30 }); break;
      case 'flash': this.flashbang(p); break;
    }
  }

  flashbang(p) {
    const fx = this.game.fx;
    fx.flashLight(p.x, p.y + 0.5, p.z, 0xffffff, 120, 25, 0.25);
    fx.flashes.emit(p.x, p.y + 0.3, p.z, 0, 0, 0, 0.15, 2, 5, [1, 1, 1, 1], [1, 1, 1, 0], 0, 0);
    this.game.audio.play3d('explosion', p.x, p.y, p.z, { vol: 0.6, maxDist: 150, rate: 1.6 });
    for (const s of this.game.soldiers) {
      if (s.state !== 'alive') continue;
      const e = s.eye(_v);
      const d = Math.hypot(e.x - p.x, e.y - p.y, e.z - p.z);
      if (d > 18 || !this.world.collision.los(p.x, p.y + 0.3, p.z, e.x, e.y, e.z)) continue;
      const dir = s.aimDir(_d);
      const to = _m.set(p.x - e.x, p.y - e.y, p.z - e.z).normalize();
      const facing = (dir.dot(to) + 1) / 2;
      s.flashed = Math.min(1, s.flashed + (1 - d / 18) * (0.4 + facing * 0.8));
    }
  }

  // ---------------- placeables ----------------
  convertToPlaced(p, h) {
    if (p.mesh) this.game.scene.remove(p.mesh);
    const idx = this.projectiles.indexOf(p);
    if (idx >= 0) this.projectiles.splice(idx, 1);
    this.place('c4', p.owner, p.x, p.y, p.z, 0);
  }

  place(type, owner, x, y, z, yaw) {
    // single-instance items: replace old
    if (type === 'beacon' || type === 'rally') {
      for (const q of this.placed) if (q.type === type && q.owner === owner && !q.dead) this.removePlaced(q);
    }
    const geo = buildGadgetGeo(type === 'sandbags' ? 'sandbags' : type);
    const mesh = new THREE.Mesh(geo, vertexColorMaterial('weapon'));
    mesh.position.set(x, y + (type === 'ammobox' ? 0.07 : type === 'claymore' ? 0.09 : 0.06), z);
    mesh.rotation.y = yaw;
    if (type === 'ammobox' || type === 'beacon' || type === 'rally') mesh.scale.setScalar(2.2);
    mesh.castShadow = true;
    this.game.scene.add(mesh);
    const p = { type, owner, team: owner.team, squad: owner.squad, x, y, z, yaw, mesh, t: 0, dead: false, dx: -Math.sin(yaw), dz: -Math.cos(yaw), tick: 0 };
    this.placed.push(p);
    if (type === 'c4') { owner.c4s = owner.c4s || []; owner.c4s.push(p); }
    if (type === 'rally' || type === 'beacon') this.game.onSpawnPointPlaced(p);
    return p;
  }

  removePlaced(p) {
    p.dead = true;
    if (p.mesh) this.game.scene.remove(p.mesh);
    const i = this.placed.indexOf(p); if (i >= 0) this.placed.splice(i, 1);
    if (p.type === 'c4' && p.owner.c4s) { const k = p.owner.c4s.indexOf(p); if (k >= 0) p.owner.c4s.splice(k, 1); }
  }

  detonatePlaced(p) {
    this.removePlaced(p);
    if (p.type === 'c4') this.explode(p.x, p.y + 0.1, p.z, { radius: 7.5, damage: 240, power: 1500, structRadiusMul: 0.7, attacker: p.owner, weapon: 'C4', scale: 1.4, fire: 4 });
    else if (p.type === 'claymore') this.explode(p.x, p.y + 0.5, p.z, { radius: 7, damage: 180, power: 60, attacker: p.owner, weapon: 'Claymore', scale: 0.7, directional: true, dx: p.dx, dz: p.dz });
  }

  detonateC4(owner) {
    if (!owner.c4s || !owner.c4s.length) return false;
    const list = owner.c4s.slice();
    this.game.audio.play3d('beep', owner.pos.x, owner.pos.y + 1.5, owner.pos.z, { vol: 0.6, maxDist: 20 });
    list.forEach((p, i) => setTimeout(() => { if (!p.dead) this.detonatePlaced(p); }, 150 + i * 90));
    return true;
  }

  updatePlaced(dt) {
    const now = this.game.time;
    for (let i = this.placed.length - 1; i >= 0; i--) {
      const p = this.placed[i];
      p.t += dt;
      if (p.dead) continue;
      if (p.type === 'claymore' && p.t > 1.5) {
        for (const s of this.game.soldiers) {
          if (s.state !== 'alive' || s.team === p.team) continue;
          const dx = s.pos.x - p.x, dz = s.pos.z - p.z, dy = s.pos.y - p.y;
          const d = Math.hypot(dx, dz);
          if (d > 3.6 || Math.abs(dy) > 2 || (s.stance === 'prone' && Math.hypot(s.vel.x, s.vel.z) < 0.8)) continue;
          if ((dx / d) * p.dx + (dz / d) * p.dz < 0.3) continue;
          this.detonatePlaced(p); break;
        }
      } else if (p.type === 'ammobox') {
        p.tick += dt;
        if (p.tick > 1.5) {
          p.tick = 0;
          for (const s of this.game.soldiers) {
            if (s.state !== 'alive' || s.team !== p.team) continue;
            if (Math.hypot(s.pos.x - p.x, s.pos.z - p.z) > 4 || Math.abs(s.pos.y - p.y) > 2.5) continue;
            if (this.resupply(s, 1) && p.owner !== s && p.owner.state !== 'dead') this.game.addScore(p.owner, 10, 'RESUPPLY');
          }
        }
      } else if (p.type === 'rally') {
        // disabled while enemies are close
        p.blocked = this.game.soldiers.some(s => s.state === 'alive' && s.team !== p.team && Math.hypot(s.pos.x - p.x, s.pos.z - p.z) < 18);
        if (p.t > 300) this.removePlaced(p);
      }
      void now;
    }
  }

  resupply(s, amount) {
    let gave = false;
    for (let k = 0; k < 2; k++) {
      const g = s.slots[k];
      if (g && g.reserve < g.stats.mag * g.stats.mags) { g.reserve = Math.min(g.stats.mag * g.stats.mags, g.reserve + Math.ceil(g.stats.mag * 0.5 * amount)); gave = true; }
    }
    s.resupplyAcc = (s.resupplyAcc || 0) + amount;
    if (s.resupplyAcc >= 4) {
      s.resupplyAcc = 0;
      for (let k = 2; k < 5; k++) {
        const gd = s.slots[k];
        if (!gd || gd.def.count === Infinity) continue;
        const max = k === 4 ? (s.loadout.cls === 'assault' ? 3 : 2) : gd.def.count;
        if (gd.count < max && !['beacon', 'rally', 'ammobox'].includes(gd.id)) { gd.count++; gave = true; }
      }
      if (s.bandages < 4) { s.bandages++; gave = true; }
    }
    return gave;
  }

  // ---------------- gadget use ----------------
  // Called when the active slot is a gadget. pressed: fire just pressed; adsPressed: right click just pressed.
  useGadget(s, pressed, adsPressed) {
    const gd = s.weapon;
    if (!gd || gd.kind !== 'gadget' || s.state !== 'alive' || s.switchT > 0 || s.actionT > 0) return;
    const kind = gd.def.kind;
    if (kind === 'throw') {
      if (pressed && gd.count > 0) { gd.count--; s.startAction('throw', 0.42, { type: gd.id }); this.game.audio.play3d('pin', s.pos.x, s.pos.y + 1.5, s.pos.z, { vol: 0.4, maxDist: 15 }); }
    } else if (kind === 'launcher' || kind === 'rpg') {
      if (pressed && gd.count > 0 && gd.loaded) {
        gd.count--; gd.loaded = false;
        const eye = s.eye(new THREE.Vector3()), dir = s.aimDir(new THREE.Vector3());
        const sp = kind === 'rpg' ? (s.adsT > 0.5 ? 0.6 : 3) : (s.adsT > 0.5 ? 0.5 : 2.5);
        dir.x += (Math.random() - 0.5) * sp * DEG; dir.y += (Math.random() - 0.5) * sp * DEG; dir.normalize();
        const v = dir.clone().multiplyScalar(kind === 'rpg' ? 115 : 72);
        this.spawnProjectile(kind === 'rpg' ? 'rocket' : 'launcher', s, eye.clone().addScaledVector(dir, 0.8), v);
        this.game.audio.play3d(kind === 'rpg' ? 'rocket' : 'shotgun', eye.x, eye.y, eye.z, { vol: 0.9, maxDist: 250 });
        s.pitch += (kind === 'rpg' ? 3 : 2) * DEG;
        this.game.onGadgetFired(s, kind);
        if (gd.count > 0) s.startAction('reloadGadget', kind === 'rpg' ? 3.4 : 2.2, { slot: s.active });
      }
    } else if (kind === 'medkit') {
      if (pressed && s.medkitCd <= 0 && (s.hp < 100 || s.bleed > 0)) s.startAction('medkitSelf', 1.1);
    } else if (kind === 'c4') {
      if (adsPressed) this.detonateC4(s);
      else if (pressed && gd.count > 0) { gd.count--; s.startAction('throwC4', 0.4); }
    } else if (kind === 'place') {
      if (pressed && (gd.count > 0 || gd.id === 'beacon' || gd.id === 'rally')) {
        const spot = this.placementSpot(s);
        if (spot) { if (gd.id !== 'beacon' && gd.id !== 'rally') gd.count--; s.startAction('place', 0.6, { gid: gd.id, spot }); }
        else if (s.isPlayer) this.game.hud && this.game.hud.toast('Cannot place here');
      }
    } else if (kind === 'binoculars') {
      if (pressed) this.spot(s, s.adsT > 0.5 ? 12 : 6, s.adsT > 0.5 ? 2.2 : 5);
    }
  }

  placementSpot(s) {
    const coll = this.world.collision;
    const f = s.forward(new THREE.Vector3());
    const px = s.pos.x + f.x * 1.4, pz = s.pos.z + f.z * 1.4;
    const h = coll.raycast(px, s.pos.y + 1.4, pz, 0, -1, 0, 3, {});
    if (!h || h.ny < 0.6) return null;
    if (Math.abs(h.y - s.pos.y) > 1.2) return null;
    if (!coll.los(s.pos.x, s.pos.y + 1.0, s.pos.z, px, h.y + 0.5, pz)) return null;
    return { x: px, y: h.y, z: pz, yaw: s.yaw };
  }

  finishAction(s, a) {
    switch (a.name) {
      case 'throw': this.throwGrenade(s, a.data.type, s.throwVel || null); s.throwVel = null; if (s.weapon.kind === 'gadget' && s.weapon.count <= 0) s.switchTo(s.quickReturn ?? 0); if (s.quickReturn !== undefined && s.quickReturn !== null) { const r = s.quickReturn; s.quickReturn = null; s.switchTo(r); } break;
      case 'melee': this.meleeHit(s); break;
      case 'throwC4': this.throwGrenade(s, 'c4', s.throwVel || null); s.throwVel = null; break;
      case 'bandage': s.bandages--; s.bleed = 0; s.healT += 15; break;
      case 'medkitSelf': s.bleed = 0; s.healT += 50; s.medkitCd = 5; break;
      case 'medkitOther': if (a.data.target.state === 'alive') { a.data.target.bleed = 0; a.data.target.healT += 60; this.game.addScore(s, 20, 'HEAL'); s.stats.heals++; } s.medkitCd = 2.5; break;
      case 'reloadGadget': { const g = s.slots[a.data.slot]; if (g) g.loaded = true; break; }
      case 'place': {
        const { gid, spot } = a.data;
        if (gid === 'sandbags') this.world.structures.addSandbag(spot.x, spot.y, spot.z, s.yaw);
        else this.place(gid, s, spot.x, spot.y, spot.z, s.yaw);
        this.game.audio.play3d('switch', spot.x, spot.y, spot.z, { vol: 0.6, maxDist: 20 });
        const gd = s.slots.find(x => x && x.id === gid);
        if (gd && gd.count <= 0 && gid !== 'beacon' && gid !== 'rally' && s.active >= 2) s.switchTo(0);
        break;
      }
    }
  }

  // Knife: short cone in front; kills from behind or on downed enemies, heavy damage from the front.
  melee(s) {
    if (s.state !== 'alive' || s.actionT > 0 || s.switchT > 0 || s.vault || s.swimming) return false;
    s.reloadT = 0;
    s.startAction('melee', 0.34);
    this.game.audio.play3d('throw', s.pos.x, s.pos.y + 1.4, s.pos.z, { vol: 0.5, maxDist: 20, rate: 1.4 });
    return true;
  }

  meleeHit(s) {
    const eye = s.eye(new THREE.Vector3()), f = s.forward(new THREE.Vector3());
    let best = null, bd = 2.4;
    for (const e of this.game.soldiers) {
      if (e === s || e.team === s.team || e.state === 'dead') continue;
      const c = e.center(_v);
      const dx = c.x - eye.x, dz = c.z - eye.z, d = Math.hypot(dx, dz);
      if (d > bd || Math.abs(c.y - eye.y) > 1.8) continue;
      if ((dx / d) * f.x + (dz / d) * f.z < 0.55) continue;
      if (!this.world.collision.los(eye.x, eye.y - 0.3, eye.z, c.x, c.y, c.z)) continue;
      bd = d; best = e;
    }
    if (!best) { this.game.audio.play3d('impactDirt', eye.x, eye.y, eye.z, { vol: 0.15, maxDist: 10 }); return; }
    const ef = best.forward(_d);
    const behind = ef.x * f.x + ef.z * f.z > 0.4;
    const dmg = best.state === 'downed' || behind ? 250 : 80;
    const wasAlive = best.state === 'alive';
    const c = best.center(_v);
    best.takeDamage(dmg, s, 'body', 'Knife', f.clone(), false);
    this.game.fx.impact(c.x, c.y + 0.2, c.z, -f.x, 0, -f.z, 'flesh');
    this.game.audio.play3d('impactFlesh', c.x, c.y, c.z, { vol: 0.8, maxDist: 25 });
    this.game.onHit(s, best, dmg, 'body', wasAlive);
    if (best.brain) best.brain.onDamaged(s, f);
  }

  // Spot enemies near the aim ray for the shooter's team.
  spot(s, dur = 6, cone = 5) {
    const eye = s.eye(new THREE.Vector3()), dir = s.aimDir(new THREE.Vector3());
    let found = 0;
    for (const e of this.game.soldiers) {
      if (e.team === s.team || e.state === 'dead') continue;
      const c = e.center(_v);
      const to = _m.set(c.x - eye.x, c.y - eye.y, c.z - eye.z);
      const d = to.length();
      if (d > 450) continue;
      to.divideScalar(d);
      const ang = Math.acos(clamp(to.dot(dir), -1, 1)) / DEG;
      if (ang > Math.max(cone, 60 / Math.max(d, 1))) continue;
      if (!this.world.collision.los(eye.x, eye.y, eye.z, c.x, c.y, c.z)) continue;
      e.spotUntil = this.game.time + dur; found++;
    }
    if (found) { this.game.audio.play2d('beep', { vol: s.isPlayer ? 0.3 : 0 }); if (s.isPlayer) this.game.addScore(s, 0, found > 1 ? `SPOTTED ${found}` : 'SPOTTED'); }
    return found;
  }

  update(dt) {
    this.updateBullets(dt);
    this.updateProjectiles(dt);
    this.updatePlaced(dt);
  }

  clear() {
    for (const p of this.projectiles) if (p.mesh) this.game.scene.remove(p.mesh);
    for (const p of this.placed) if (p.mesh) this.game.scene.remove(p.mesh);
    this.bullets = []; this.projectiles = []; this.placed = [];
  }

  // Solve launch velocity to hit target with given speed & gravity (lower arc). Returns Vector3 or null.
  static solveBallistic(from, to, speed, g) {
    const dx = to.x - from.x, dz = to.z - from.z, dy = to.y - from.y;
    const x = Math.hypot(dx, dz);
    const v2 = speed * speed;
    const disc = v2 * v2 - g * (g * x * x + 2 * dy * v2);
    if (disc < 0) return null;
    const ang = Math.atan2(v2 - Math.sqrt(disc), g * x);
    const vh = Math.cos(ang) * speed, vy = Math.sin(ang) * speed;
    return new THREE.Vector3(dx / x * vh, vy, dz / x * vh);
  }
}
