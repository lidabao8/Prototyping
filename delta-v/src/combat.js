import * as THREE from 'three';
import { raySphere, randomPerp, rand } from './math.js';
import { HITBOXES, TOWERS } from './soldier.js';
import { GRENADE, MELEE } from './weapons.js';
import { COLORS } from './effects.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q = new THREE.Quaternion();
const _hc = new THREE.Vector3();

export class Combat {
  constructor(game) {
    this.game = game;
    this.projectiles = [];
    this.grenades = [];
    const gGeo = new THREE.IcosahedronGeometry(0.12, 0);
    this.gGeo = gGeo;
    this.gMat = [0x3f8cff, 0xff8a2a].map((c) => new THREE.MeshStandardMaterial({ color: 0x333333, emissive: c, emissiveIntensity: 0.9 }));
    this.rGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.22, 6).rotateX(Math.PI / 2);
    this.rMat = new THREE.MeshStandardMaterial({ color: 0x999999, emissive: 0xff5520, emissiveIntensity: 0.4 });
    this.colors = {};
  }

  color(hex) { return this.colors[hex] || (this.colors[hex] = new THREE.Color(hex)); }

  muzzlePoint(s, out) {
    return out.set(0.18, -0.14, -0.85).applyQuaternion(s.aimQuat(_q)).add(s.eye(_v3));
  }

  /** Attempt to fire the current weapon. Returns true when a shot went off. */
  fire(s) {
    const w = s.weapon, def = w.def, g = this.game;
    if (!s.alive || s.switchT > 0 || w.cool > 0) return false;
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
    const n = def.kind === 'pellets' ? def.pellets : 1;
    for (let i = 0; i < n; i++) {
      const d = aim.clone();
      const sp = def.spread * (s.grab ? 0.6 : 1) * Math.sqrt(Math.random());
      if (sp > 0) d.addScaledVector(randomPerp(aim, _v), Math.tan(sp)).normalize();
      const p = {
        pos: eye.clone().addScaledVector(d, 0.35), vel: s.vel.clone().addScaledVector(d, def.speed),
        dir: d, owner: s, def, age: 0, kind: def.kind, color: this.color(def.tracer), tail: def.kind === 'rocket' ? 0.02 : 0.012,
        visOff: muzzle.clone().sub(eye), // tracer starts at the muzzle and converges onto the sight line
      };
      if (def.kind === 'rocket') {
        p.mesh = new THREE.Mesh(this.rGeo, this.rMat);
        p.mesh.position.copy(p.pos); p.mesh.lookAt(_v.copy(p.pos).add(d));
        g.scene.add(p.mesh);
      }
      this.projectiles.push(p);
    }
    // recoil: momentum of the ejecta pushes you back, applied at the muzzle (off the centre of mass -> spin)
    const momentum = def.ejecta != null ? def.ejecta : def.projMass * def.speed;
    s.applyImpulse(_v.copy(aim).multiplyScalar(-momentum), muzzle);
    s.kick.x += def.kick * (0.7 + Math.random() * 0.6);
    s.kick.y += def.kick * (Math.random() - 0.5) * 0.8;
    s.addAim(def.kick * (Math.random() - 0.5) * 0.5, def.kick * (0.6 + Math.random() * 0.5));
    g.fx.muzzle(muzzle, aim, s.vel, def.kind === 'pellets');
    g.onShot(s, def);
    if (w.mag === 0 && w.reserve > 0) setTimeout(() => { if (s.alive && s.weapon === w) s.startReload(); }, 250);
    return true;
  }

  throwGrenade(s) {
    if (!s.alive || s.grenades <= 0 || s.grenadeCool > 0) return false;
    s.grenades--; s.grenadeCool = 1.0;
    const aim = s.aimDir(new THREE.Vector3());
    const pos = s.eye(new THREE.Vector3()).addScaledVector(aim, 0.6);
    const vel = s.vel.clone().addScaledVector(aim, GRENADE.speed);
    s.applyImpulse(_v.copy(aim).multiplyScalar(-GRENADE.mass * GRENADE.speed), pos);
    const mesh = new THREE.Mesh(this.gGeo, this.gMat[s.team]);
    mesh.position.copy(pos);
    this.game.scene.add(mesh);
    this.grenades.push({ pos, vel, owner: s, fuse: GRENADE.fuse, mesh, spin: new THREE.Vector3(rand(-8, 8), rand(-8, 8), rand(-8, 8)) });
    this.game.audio.play('throw');
    s.spawnProtect = 0;
    return true;
  }

  melee(s) {
    if (!s.alive || s.meleeCool > 0) return false;
    s.meleeCool = MELEE.cooldown;
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
      best.angVel.add(_v2.set(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize().multiplyScalar(MELEE.spin));
      s.applyImpulse(J.clone().multiplyScalar(-0.5), eye);
      if (best.team !== s.team) g.damage(best, MELEE.dmg, s, 'hammer', hitPt, 'body');
      g.fx.sparks(hitPt, 14, aim.clone().negate(), 5);
      return true;
    }
    // hammer on a pod or wall: push yourself away (or the pod)
    const h = g.world.raycast(eye, aim, MELEE.range);
    if (h) {
      const J = aim.clone().multiplyScalar(MELEE.impulse * 0.6);
      if (h.kind === 'pod') { h.obj.vel.addScaledVector(J, 1 / h.obj.mass); s.applyImpulse(J.negate().multiplyScalar(0.5), eye); }
      else s.applyImpulse(J.negate(), eye);
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
      const sp = p.vel.length();
      const dir = _v.copy(p.vel).divideScalar(sp);
      const len = sp * dt;
      let bestT = len, hitKind = null, hitObj = null, hitPart = null, hitN = null;
      const h = world.raycast(p.pos, dir, len);
      if (h) { bestT = h.t; hitKind = h.kind; hitObj = h.obj; hitN = h.n.clone(); }
      for (const s of g.soldiers) {
        if (!s.alive) continue;
        if (s === p.owner && (p.kind !== 'rocket' || p.age < 0.4)) continue;
        // coarse reject: distance from segment to soldier centre
        const rel = _v2.subVectors(s.pos, p.pos);
        const along = Math.max(0, Math.min(len, rel.dot(dir)));
        if (rel.addScaledVector(dir, -along).lengthSq() > 1.8) continue;
        for (const hb of HITBOXES) {
          _hc.copy(hb.p).applyQuaternion(s.quat).add(s.pos);
          const t = raySphere(p.pos, dir, _hc, hb.r, bestT);
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
      if (p.visOff) { p.visOff.multiplyScalar(Math.exp(-dt * 25)); }
      if (p.age > 3.5) this.removeProj(i);
    }
    // grenades
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const gr = this.grenades[i];
      gr.fuse -= dt;
      gr.pos.addScaledVector(gr.vel, dt);
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
        if (part.part !== 'leg' && Math.random() < 0.35 && s.leaks.length < 3) s.leaks.push({ p: bodyP.clone(), n: outN.clone(), t: 4 + Math.random() * 3 });
        g.damage(s, dmg, p.owner, def.id, hp, part.part);
      }
      g.fx.suitHit(hp, dir.clone().negate(), s.vel);
      if (def.kind === 'rocket') this.explode(hp, p.owner, def.splash, def.splashDmg, 140, def.id, s);
    } else {
      if (kind === 'pod') obj.vel.addScaledVector(dir, (def.kind === 'rocket' ? 60 : momentum) / obj.mass);
      if (def.kind === 'rocket') this.explode(hp, p.owner, def.splash, def.splashDmg, 140, def.id);
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
      if (Math.random() < 0.5 * f && s.leaks.length < 3) {
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
      const blink = (gr.fuse % 0.5) < 0.12 || gr.fuse < 0.6;
      gr.mesh.material.emissiveIntensity = blink ? 2.5 : 0.5;
    }
  }

  tracerList() {
    // bullets (not rockets) as streaks; visual offset converges from muzzle to the sight line
    const out = this._tl || (this._tl = []);
    out.length = 0;
    for (const p of this.projectiles) {
      if (p.kind === 'rocket') continue;
      const vp = p._vp || (p._vp = new THREE.Vector3());
      vp.copy(p.pos).add(p.visOff);
      out.push({ pos: vp, vel: p.vel, color: p.color, tail: Math.min(p.tail, p.age + 0.004) });
    }
    return out;
  }
}
