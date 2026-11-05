import * as THREE from 'three';
import { raySphere, randomPerp, rand, interceptTime } from './math.js';
import { HITBOXES, TOWERS, THROW_TIME } from './soldier.js';
import { GRENADE, MELEE } from './weapons.js';
import { COLORS } from './effects.js';
import { buildGrenade } from './models.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q = new THREE.Quaternion();
const _hc = new THREE.Vector3();

export class Combat {
  constructor(game) {
    this.game = game;
    this.projectiles = [];
    this.grenades = [];
    this.beams = [];
    this.gProto = [0x3f8cff, 0xff8a2a].map((c) => buildGrenade(c));
    this.rGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.22, 6).rotateX(Math.PI / 2);
    this.rMat = new THREE.MeshStandardMaterial({ color: 0x999999, emissive: 0xff5520, emissiveIntensity: 0.4 });
    this.colors = {};
  }

  color(hex) { return this.colors[hex] || (this.colors[hex] = new THREE.Color(hex)); }

  /** Current cone half-angle: loose from the hip, tight down the sights, steadier when anchored. */
  spreadOf(s, def) {
    const hip = def.hipSpread != null ? def.hipSpread : def.spread * 2.5;
    const ads = def.adsSpread != null ? def.adsSpread : def.spread * 0.4;
    return (hip + (ads - hip) * (s.adsAmt || 0)) * (s.grab ? 0.7 : 1);
  }

  /** World position of the barrel tip: the first-person gun for the player, the held gun for everyone else. */
  muzzlePoint(s, out) {
    const g = this.game;
    if (s.isPlayer && g.vmMuzzleCam && g.vm && g.vm.visible) return g.camera.localToWorld(out.copy(g.vmMuzzleCam));
    const gm = s.gunMeshes && s.gunMeshes[s.weapon.def.id];
    const m = gm && gm.userData.muzzle;
    out.set(0.13 + (m ? m.x : 0), 0.35 + (m ? m.y : 0), -0.4 + (m ? m.z : -0.75));
    return out.applyQuaternion(s.quat).add(s.pos);
  }

  /** Where the crosshair points: first surface or body along the sight line (rounds converge on it). */
  aimPoint(s, eye, aim, out) {
    const h = this.game.world.raycast(eye, aim, 400);
    let t = h ? h.t : 400;
    const hs = this.raySoldier(eye, aim, t, s);
    if (hs) t = hs.t;
    return out.copy(eye).addScaledVector(aim, Math.max(2, t));
  }

  /** Attempt to fire the current weapon. Returns true when a shot went off. */
  fire(s) {
    const w = s.weapon, def = w.def, g = this.game;
    if (!s.alive || s.switchT > 0 || w.cool > 0 || s.throwT > 0) return false;
    if (def.kind === 'beam') return this.fireBeam(s, w, def);
    if (w.reloadT > 0) {
      if (def.perShell && w.mag > 0) { w.reloadT = 0; } else return false;
    }
    if (w.mag <= 0) {
      if (!s.startReload() && s.isPlayer) g.audio.play('empty');
      w.cool = 0.25;
      return false;
    }
    w.mag--;
    w.cool = 60 / def.rpm;
    s.spawnProtect = 0;
    s.lastFireT = g.time;
    const eye = s.eye(new THREE.Vector3());
    const aim = s.aimDir(new THREE.Vector3());
    const muzzle = this.muzzlePoint(s, new THREE.Vector3());
    // fire from the barrel toward the crosshair point (unless the barrel is poking through a wall)
    const toM = _v2.subVectors(muzzle, eye);
    const ml = toM.length();
    const blocked = ml > 1e-3 && this.game.world.raycast(eye, toM.divideScalar(ml), ml + 0.05);
    const origin = blocked ? eye.clone().addScaledVector(aim, 0.3) : muzzle.clone();
    const target = this.aimPoint(s, eye, aim, new THREE.Vector3());
    const base = target.sub(origin).normalize();
    const n = def.kind === 'pellets' ? def.pellets : 1;
    const lock = def.homing ? this.homingTarget(s, eye, aim, def.homing.cone) : null;
    for (let i = 0; i < n; i++) {
      const d = base.clone();
      const sp = this.spreadOf(s, def) * Math.sqrt(Math.random());
      if (sp > 0) d.addScaledVector(randomPerp(base, _v), Math.tan(sp)).normalize();
      const p = {
        pos: origin.clone(), vel: s.vel.clone().addScaledVector(d, def.speed), start: origin.clone(),
        dir: d, owner: s, def, age: 0, kind: def.kind, color: this.color(def.tracer), tail: def.kind === 'rocket' ? 0.02 : (def.tracerLen || 4) / def.speed,
      };
      if (lock) p.homing = lock;
      if (def.kind === 'rocket') {
        p.mesh = new THREE.Mesh(this.rGeo, this.rMat);
        p.mesh.position.copy(p.pos); p.mesh.lookAt(_v.copy(p.pos).add(d));
        g.scene.add(p.mesh);
      }
      this.projectiles.push(p);
    }
    // recoil: momentum of the ejecta pushes you back, applied at the muzzle (off the centre of mass -> spin)
    const momentum = def.ejecta != null ? def.ejecta : def.projMass * def.speed;
    s.applyImpulse(_v.copy(aim).multiplyScalar(-momentum), muzzle, 'recoil');
    s.kick.x += def.kick * (0.7 + Math.random() * 0.6);
    s.kick.y += def.kick * (Math.random() - 0.5) * 0.8;
    s.addAim(def.kick * (Math.random() - 0.5) * 0.5, def.kick * (0.6 + Math.random() * 0.5));
    g.fx.muzzle(muzzle, aim, s.vel, def.kind === 'pellets');
    if (def.backblast) this.backblast(s, aim, muzzle, def.backblast);
    g.onShot(s, def);
    if (w.mag === 0 && w.reserve > 0) setTimeout(() => { if (s.alive && s.weapon === w) s.startReload(); }, 250);
    return true;
  }

  /** Enemy closest to the line of fire inside the guidance cone, with line of sight. */
  homingTarget(s, eye, aim, cone) {
    let best = null, bestA = cone;
    for (const o of this.game.soldiers) {
      if (!o.alive || o.team === s.team) continue;
      const d = _v.subVectors(o.pos, eye);
      const dist = d.length();
      const a = Math.acos(Math.max(-1, Math.min(1, d.dot(aim) / dist)));
      if (a < bestA && dist < 250 && this.game.world.los(eye, o.pos)) { bestA = a; best = o; }
    }
    return best;
  }

  /** Steer a guided round toward its target's intercept point with limited lateral acceleration. */
  guide(p, dt) {
    const t = p.homing;
    if (!t.alive || p.age > 2.5) { p.homing = null; return; }
    const sp = p.vel.length();
    const u = _v.copy(p.vel).divideScalar(sp);
    const rel = _v2.subVectors(t.pos, p.pos);
    const tt = interceptTime(rel, t.vel, sp);
    if (tt > 0) rel.addScaledVector(t.vel, tt);
    const d = rel.normalize();
    if (d.dot(u) < 0.85) { p.homing = null; return; } // overshot or target broke away: go ballistic
    const lat = d.addScaledVector(u, -d.dot(u));
    const l = lat.length();
    if (l < 1e-6) return;
    const acc = Math.min(p.def.homing.accel, l * sp * 25);
    p.vel.addScaledVector(lat, acc * dt / l).setLength(sp);
  }

  /** First soldier hit along a ray (hitbox spheres). */
  raySoldier(o, dir, maxT, skip) {
    let best = maxT, sol = null, part = null;
    for (const s of this.game.soldiers) {
      if (!s.alive || s === skip) continue;
      const rel = _v2.subVectors(s.pos, o);
      const along = Math.max(0, Math.min(maxT, rel.dot(dir)));
      if (rel.addScaledVector(dir, -along).lengthSq() > 1.8) continue;
      for (const hb of HITBOXES) {
        _hc.copy(hb.p).applyQuaternion(s.quat).add(s.pos);
        const t = raySphere(o, dir, _hc, hb.r, best);
        if (t >= 0 && t < best) { best = t; sol = s; part = hb; }
      }
    }
    return sol ? { t: best, s: sol, part } : null;
  }

  /** Continuous beam: called every frame the trigger is held; damage scales with frame time. */
  fireBeam(s, w, def) {
    const g = this.game;
    if (w.overheat) { if (s.isPlayer && w.cool <= 0) { g.audio.play('empty'); w.cool = 0.3; } return false; }
    const dt = Math.min(0.05, g.frameDt || 1 / 60);
    w.heat += def.heatRate * dt;
    if (w.heat >= 1) { w.heat = 1; w.overheat = true; if (s.isPlayer) g.hud.message('MASER OVERHEATED – VENTING', '#ffcc4d', 1.2); }
    s.spawnProtect = 0;
    s.lastFireT = g.time;
    const eye = s.eye(new THREE.Vector3());
    const d = s.aimDir(new THREE.Vector3()); // beams are steady: no per-frame jitter
    const h = g.world.raycast(eye, d, def.range);
    let end = h ? h.t : def.range;
    const fb = g.world.barrierCross(eye, _v3.copy(eye).addScaledVector(d, end), 1 - s.team);
    if (fb >= 0) { end *= fb; g.world.barriers[1 - s.team].mat.uniforms.flash.value = 1; }
    const hit = this.raySoldier(eye, d, end, s);
    if (hit) end = hit.t;
    const hp = eye.clone().addScaledVector(d, end);
    const muzzle = this.muzzlePoint(s, new THREE.Vector3());
    // one live beam per shooter, refreshed each frame
    if (!s.beam || s.beam.life <= 0) { s.beam = { a: new THREE.Vector3(), b: new THREE.Vector3(), life: 0 }; this.beams.push(s.beam); }
    if (s.beam.life > 0) s.beam.b.lerp(hp, Math.min(1, dt * 30)); else s.beam.b.copy(hp);
    s.beam.a.copy(muzzle); s.beam.life = 0.14;
    if (hit) {
      const t = hit.s;
      if (t.team !== s.team && t.spawnProtect <= 0) {
        const dmg = def.dps * dt * (hit.part.part === 'head' ? def.headMul : hit.part.part === 'leg' ? 0.75 : 1);
        if (g.rules.breaches && hit.part.part !== 'leg' && Math.random() < 0.2 * dt && t.leaks.length < 3) {
          const bp = hp.clone().sub(t.pos).applyQuaternion(_q.copy(t.quat).invert());
          t.leaks.push({ p: bp, n: bp.clone().sub(hit.part.p).normalize(), t: 4 });
        }
        g.damage(t, dmg, s, def.id, hp, hit.part.part);
      }
    }
    // steady impact: fixed-rate sparks plus a constant glow
    w.sparkAcc = (w.sparkAcc || 0) + dt * 40;
    while (w.sparkAcc >= 1) { w.sparkAcc -= 1; g.fx.sparks(hp, 1, hit ? d.clone().negate() : (h ? h.n : d.clone().negate()), 2.5, COLORS.beam); }
    g.fx.add.spawn(hp, null, COLORS.beam, 0.32, 0.05, { alpha: 0.8 });
    w.sndT = (w.sndT || 0) - dt;
    if (w.sndT <= 0) { w.sndT = 0.12; g.onShot(s, def); }
    return true;
  }

  backblast(s, aim, muzzle, bb) {
    const g = this.game;
    const back = muzzle.clone().addScaledVector(aim, -1.4);
    g.fx.muzzle(back, aim.clone().negate(), s.vel, true);
    for (let i = 0; i < 14; i++) {
      const v = aim.clone().multiplyScalar(-(4 + Math.random() * 8)).add(_v.randomDirection().multiplyScalar(2)).add(s.vel);
      g.fx.alpha.spawn(back, v, COLORS.smoke, 0.4, 1.2, { grow: 3, alpha: 0.4 });
    }
    for (const o of g.soldiers) {
      if (o === s || !o.alive) continue;
      const rel = _v.subVectors(o.pos, back);
      const d = rel.length();
      if (d > bb.range || d < 1e-3 || -rel.dot(aim) / d < 0.6 || !g.world.los(back, o.pos, true)) continue;
      const f = 1 - d / bb.range;
      o.applyImpulse(aim.clone().multiplyScalar(-bb.impulse * f), o.pos);
      if (o.team !== s.team) g.damage(o, bb.dmg * f, s, 'backblast', o.pos, 'body');
    }
  }

  /** Start the throw animation; the grenade leaves the hand partway through (releaseGrenade). */
  throwGrenade(s, dir = null) {
    if (!s.alive || s.grenades <= 0 || s.grenadeCool > 0 || s.throwT > 0) return false;
    s.grenadeCool = s.isBot ? 6 : 1.0;
    s.throwT = THROW_TIME;
    s.throwDir = dir ? dir.clone().normalize() : null;
    if (s.weapon.reloadT > 0) s.weapon.reloadT = 0;
    s.spawnProtect = 0;
    return true;
  }

  releaseGrenade(s) {
    if (!s.alive || s.grenades <= 0) return false;
    s.grenades--;
    const aim = s.throwDir || s.aimDir(new THREE.Vector3());
    const pos = s.eye(new THREE.Vector3()).addScaledVector(aim, 0.6);
    const vel = s.vel.clone().addScaledVector(aim, GRENADE.speed);
    s.applyImpulse(_v.copy(aim).multiplyScalar(-GRENADE.mass * GRENADE.speed), pos, 'recoil');
    const mesh = this.gProto[s.team].clone(true);
    mesh.scale.setScalar(1.4);
    // each grenade blinks on its own fuse
    const lamp = mesh.children.find((c) => c.geometry && c.geometry.type === 'SphereGeometry');
    if (lamp) { lamp.material = lamp.material.clone(); mesh.userData.lamp = lamp; mesh.userData.lampColor = lamp.material.color.clone(); }
    mesh.position.copy(pos);
    this.game.scene.add(mesh);
    this.grenades.push({ pos, vel, owner: s, fuse: GRENADE.fuse, mesh, spin: new THREE.Vector3(rand(-8, 8), rand(-8, 8), rand(-8, 8)) });
    this.game.audio.play('throw', s.isPlayer ? 0 : this.game.distToListener(pos));
    this.game.onThrow(s, pos);
    return true;
  }

  melee(s) {
    if (!s.alive || s.meleeCool > 0 || s.throwT > 0) return false;
    s.meleeCool = MELEE.cooldown;
    s.meleeT = 0.35;
    s.spawnProtect = 0;
    const g = this.game;
    const eye = s.eye(new THREE.Vector3()), aim = s.aimDir(new THREE.Vector3());
    let best = null, bestD = MELEE.range + 0.7;
    for (const o of g.soldiers) {
      if (o === s || !o.alive) continue;
      const d = _v.subVectors(o.pos, eye);
      const dist = d.length();
      if (dist < bestD && d.dot(aim) / dist > 0.55) { best = o; bestD = dist; }
    }
    g.audio.play('melee', s.isPlayer ? 0 : g.distToListener(s.pos));
    if (best) {
      const J = aim.clone().multiplyScalar(MELEE.impulse);
      const hitPt = best.pos.clone().add(randomPerp(aim, _v).multiplyScalar(0.4));
      best.applyImpulse(J, hitPt);
      // momentum hammer: induced tumble
      if (g.rules.knockback) best.angVel.add(_v2.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(MELEE.spin));
      s.applyImpulse(J.clone().multiplyScalar(-0.5), eye, 'recoil');
      if (best.team !== s.team) g.damage(best, MELEE.dmg, s, 'hammer', hitPt, 'body');
      g.fx.sparks(hitPt, 14, aim.clone().negate(), 5);
      return true;
    }
    // hammer on a pod or wall: push yourself away (or the pod)
    const h = g.world.raycast(eye, aim, MELEE.range);
    if (h) {
      const J = aim.clone().multiplyScalar(MELEE.impulse * 0.6);
      if (h.kind === 'pod') { h.obj.vel.addScaledVector(J, 1 / h.obj.mass); s.applyImpulse(J.negate().multiplyScalar(0.5), eye, 'recoil'); }
      else s.applyImpulse(J.negate(), eye, 'recoil');
      g.fx.sparks(eye.clone().addScaledVector(aim, h.t), 10, h.n, 4);
      g.audio.play('clank');
    }
    return false;
  }

  step(dt) {
    const g = this.game, world = g.world;
    const list = this.projectiles;
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.age += dt;
      if (p.kind === 'rocket' && p.age < p.def.burn) p.vel.addScaledVector(p.dir, p.def.accel * dt);
      if (p.homing) this.guide(p, dt);
      const sp = p.vel.length();
      const dir = _v.copy(p.vel).divideScalar(sp);
      const len = sp * dt;
      let bestT = len, hitKind = null, hitObj = null, hitPart = null, hitN = null;
      const h = world.raycast(p.pos, dir, len);
      if (h) { bestT = h.t; hitKind = h.kind; hitObj = h.obj; hitN = h.n.clone(); }
      // enemy spawn shields stop incoming fire
      const fb = world.barrierCross(p.pos, _v3.copy(p.pos).addScaledVector(dir, len), 1 - p.owner.team);
      if (fb >= 0 && fb * len < bestT) { bestT = fb * len; hitKind = 'barrier'; hitObj = world.barriers[1 - p.owner.team]; hitN = new THREE.Vector3(p.owner.team === 0 ? -1 : 1, 0, 0); }
      for (const s of g.soldiers) {
        if (!s.alive) continue;
        if (s === p.owner && (p.kind !== 'rocket' || p.age < 0.4)) continue;
        // coarse reject: distance from segment to soldier centre
        const rel = _v2.subVectors(s.pos, p.pos);
        const along = Math.max(0, Math.min(len, rel.dot(dir)));
        if (rel.addScaledVector(dir, -along).lengthSq() > 1.8 + (p.def.projRadius || 0) * 3) continue;
        for (const hb of HITBOXES) {
          _hc.copy(hb.p).applyQuaternion(s.quat).add(s.pos);
          const t = raySphere(p.pos, dir, _hc, hb.r + (p.def.projRadius || 0), bestT);
          if (t >= 0 && t < bestT) { bestT = t; hitKind = 'soldier'; hitObj = s; hitPart = hb; }
        }
      }
      if (hitKind) {
        const hp = p.pos.clone().addScaledVector(dir, bestT);
        this.onHit(p, hp, dir.clone(), hitKind, hitObj, hitPart, hitN);
        this.removeProj(i);
        continue;
      }
      p.pos.addScaledVector(p.vel, dt);
      if (p.age > 3.5) this.removeProj(i);
    }
    for (const b of this.beams) b.life -= dt;
    if (this.beams.length) this.beams = this.beams.filter((b) => b.life > 0);
    // grenades
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const gr = this.grenades[i];
      gr.fuse -= dt;
      if (world.omega) { gr.vel.addScaledVector(world.gravityAt(gr.pos, _v), dt); gr.vel.addScaledVector(world.coriolis(gr.vel, _v2), dt); }
      const prev = _v3.copy(gr.pos);
      gr.pos.addScaledVector(gr.vel, dt);
      if (world.barrierCross(prev, gr.pos, 1 - gr.owner.team) >= 0) { gr.pos.copy(prev); gr.vel.x *= -GRENADE.restitution; world.barriers[1 - gr.owner.team].mat.uniforms.flash.value = 1; }
      world.sphereContacts(gr.pos, 0.12, (n, depth) => {
        gr.pos.addScaledVector(n, depth);
        const vn = gr.vel.dot(n);
        if (vn < 0) { gr.vel.addScaledVector(n, -(1 + GRENADE.restitution) * vn); if (-vn > 2) g.audio.play('bounce', g.distToListener(gr.pos)); }
      });
      for (const s of g.soldiers) {
        if (!s.alive || (s === gr.owner && gr.fuse > GRENADE.fuse - 0.3)) continue;
        const n = _v.subVectors(gr.pos, s.pos); const d = n.length();
        if (d < 0.8 && d > 1e-4) {
          n.divideScalar(d);
          const rv = _v2.subVectors(gr.vel, s.vel).dot(n);
          if (rv < 0) gr.vel.addScaledVector(n, -1.6 * rv);
          gr.pos.copy(s.pos).addScaledVector(n, 0.8);
        }
      }
      if (gr.fuse <= 0) {
        this.explode(gr.pos, gr.owner, GRENADE.radius, GRENADE.dmg, GRENADE.impulse, 'grenade');
        g.scene.remove(gr.mesh);
        this.grenades.splice(i, 1);
      }
    }
  }

  removeProj(i) {
    const p = this.projectiles[i];
    if (p.mesh) this.game.scene.remove(p.mesh);
    this.projectiles.splice(i, 1);
  }

  onHit(p, hp, dir, kind, obj, part, n) {
    const g = this.game, def = p.def;
    if (kind === 'barrier') {
      obj.mat.uniforms.flash.value = 1;
      g.fx.sparks(hp, 10, n, 4, obj.mat.uniforms.color.value);
      return;
    }
    const momentum = def.projMass ? def.projMass * def.speed : 2;
    if (kind === 'soldier') {
      const s = obj;
      const relV = _v.subVectors(p.vel, s.vel);
      const J = relV.clone().normalize().multiplyScalar(def.kind === 'rocket' ? 60 : momentum);
      s.applyImpulse(J, hp);
      if ((s.team !== p.owner.team || s === p.owner) && s.spawnProtect <= 0) {
        let dmg = def.dmg;
        if (part.part === 'head') dmg *= def.headMul;
        else if (part.part === 'leg') dmg *= 0.75;
        const bodyP = _v2.subVectors(hp, s.pos).applyQuaternion(_q.copy(s.quat).invert());
        const outN = _v3.subVectors(bodyP, part.p).normalize();
        // thruster tower damage
        let tower = -1, td = 0.42;
        for (let k = 0; k < 4; k++) { const d = bodyP.distanceTo(TOWERS[k].pos); if (d < td) { td = d; tower = k; } }
        if (part.part === 'pack' && tower < 0) tower = Math.floor(Math.random() * 4);
        if (tower >= 0) g.damageTower(s, tower, dmg * (part.part === 'pack' ? 0.6 : 0.9));
        // suit breach -> venting gas leak
        if (g.rules.breaches && part.part !== 'leg' && Math.random() < 0.35 && s.leaks.length < 3) s.leaks.push({ p: bodyP.clone(), n: outN.clone(), t: 4 + Math.random() * 3 });
        g.damage(s, dmg, p.owner, def.id, hp, part.part);
      }
      g.fx.suitHit(hp, dir.clone().negate(), s.vel);
      if (def.splash) this.explode(hp, p.owner, def.splash, def.splashDmg, def.splashImpulse || 140, def.id, s);
    } else {
      if (kind === 'pod') obj.vel.addScaledVector(dir, (def.kind === 'rocket' ? 60 : momentum) / obj.mass);
      if (def.splash) this.explode(hp, p.owner, def.splash, def.splashDmg, def.splashImpulse || 140, def.id);
      else {
        g.fx.impact(hp, n || dir.clone().negate());
        const d = g.distToListener(hp);
        if (d < 25) g.audio.play('clank', d);
      }
    }
  }

  explode(pos, owner, radius, dmg, impulse, cause, skip = null) {
    const g = this.game;
    g.fx.explosion(pos, radius * 0.35);
    g.audio.play('explosion', g.distToListener(pos));
    g.onExplosion(pos, owner);
    for (const s of g.soldiers) {
      const d = s.pos.distanceTo(pos);
      if (d > radius) continue;
      if (s.team !== owner.team && g.world.inSpawn(s.pos, s.team)) continue; // shielded bay
      if (!g.world.los(pos, s.pos, true)) continue;
      const f = 1 - d / radius;
      const dir = _v.subVectors(s.pos, pos);
      if (dir.lengthSq() < 1e-6) dir.set(0, 1, 0);
      dir.normalize();
      // blast hits off-centre -> tumble
      const hitPt = s.pos.clone().addScaledVector(dir, -0.4).add(randomPerp(dir, _v2).multiplyScalar(0.35));
      s.applyImpulse(dir.clone().multiplyScalar(impulse * f), hitPt);
      if (!s.alive || s === skip || s.spawnProtect > 0) continue;
      if (s.team === owner.team && s !== owner) continue;
      g.damage(s, dmg * f * (s === owner ? 0.6 : 1), owner, cause, hitPt, 'body');
      if (Math.random() < f) g.damageTower(s, Math.floor(Math.random() * 4), 25 * f);
      if (g.rules.breaches && Math.random() < 0.5 * f && s.leaks.length < 3) {
        s.leaks.push({ p: new THREE.Vector3(rand(-0.2, 0.2), rand(-0.1, 0.4), rand(-0.15, 0.3)), n: new THREE.Vector3().randomDirection(), t: 5 });
      }
    }
    for (const pod of g.world.pods) {
      const d = pod.pos.distanceTo(pos);
      if (d < radius && d > 1e-3) {
        pod.vel.addScaledVector(_v.subVectors(pod.pos, pos).normalize(), impulse * (1 - d / radius) / pod.mass);
        pod.angVel.add(_v2.randomDirection().multiplyScalar(0.8));
      }
    }
  }

  syncMeshes(dt) {
    for (const p of this.projectiles) if (p.mesh) {
      p.mesh.position.copy(p.pos);
      p.mesh.lookAt(_v.copy(p.pos).add(p.vel));
      if (p.age < p.def.burn) {
        const back = _v2.copy(p.vel).normalize().multiplyScalar(-0.15).add(p.pos);
        this.game.fx.add.spawn(back, p.vel.clone().multiplyScalar(0.6), COLORS.fire, 0.25, 0.06);
        this.game.fx.alpha.spawn(back, p.vel.clone().multiplyScalar(0.2), COLORS.smoke, 0.2, 0.7, { grow: 3, alpha: 0.3 });
      }
    }
    for (const gr of this.grenades) {
      gr.mesh.position.copy(gr.pos);
      gr.mesh.rotation.x += gr.spin.x * dt; gr.mesh.rotation.y += gr.spin.y * dt;
      // fuse lamp blinks faster as it runs down
      const period = gr.fuse < 1 ? 0.15 : 0.5;
      const blink = (gr.fuse % period) < period * 0.35;
      const lamp = gr.mesh.userData.lamp;
      if (lamp) lamp.material.color.copy(gr.mesh.userData.lampColor).multiplyScalar(blink ? 1.6 : 0.15);
    }
  }

  tracerList() {
    // bullets (not rockets) as streaks; visual offset converges from muzzle to the sight line
    const out = this._tl || (this._tl = []);
    out.length = 0;
    for (const p of this.projectiles) {
      if (p.kind === 'rocket') continue;
      // streak never extends behind the muzzle it left from
      const travelled = p.pos.distanceTo(p.start);
      const sp = p.vel.length();
      out.push({ pos: p.pos, vel: p.vel, color: p.color, tail: Math.min(p.tail, travelled / Math.max(1, sp)), width: p.def.tracerW || 0.03 });
    }
    const bc = this.color(0xffd23a);
    for (const b of this.beams) {
      b._v = b._v || new THREE.Vector3();
      b._v.subVectors(b.b, b.a);
      out.push({ pos: b.b, vel: b._v, color: bc, tail: 1, width: 0.035, beam: true });
    }
    return out;
  }
}
