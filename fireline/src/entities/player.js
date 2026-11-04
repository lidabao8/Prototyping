// Player controller: maps keyboard/mouse to the soldier, drives the camera (bob, lean, recoil, shake, ADS zoom)
// and renders a first-person viewmodel with arms, weapon, reticles, reload/sprint/switch animations.
import * as THREE from 'three';
import { clamp, lerp, damp, DEG } from '../core/math.js';
import { G } from '../render/geo.js';
import { TEAM_COLORS, buildWeaponGeo } from './models.js';

function limbGeo(ax, ay, az, bx, by, bz, t, color) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const L = Math.hypot(dx, dy, dz);
  const g = G.box(t, t * 0.9, L, color);
  const m = new THREE.Matrix4().lookAt(new THREE.Vector3(), new THREE.Vector3(dx, dy, dz), new THREE.Vector3(0, 1, 0));
  g.applyMatrix4(m); g.translate((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
  return g;
}

function reticleTexture(kind) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.strokeStyle = g.fillStyle = kind === 'holo' ? '#ff4040' : kind === 'chevron' ? '#ff6020' : '#ff2a2a';
  g.lineWidth = 3;
  if (kind === 'dot') { g.beginPath(); g.arc(32, 32, 4, 0, 7); g.fill(); }
  else if (kind === 'holo') { g.beginPath(); g.arc(32, 32, 20, 0, 7); g.stroke(); g.beginPath(); g.arc(32, 32, 3, 0, 7); g.fill(); }
  else { g.beginPath(); g.moveTo(22, 40); g.lineTo(32, 28); g.lineTo(42, 40); g.stroke(); g.fillRect(31, 27, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class PlayerController {
  constructor(game, soldier) {
    this.game = game; this.s = soldier;
    this.input = game.input;
    this.camera = game.camera;
    this.vmScene = game.vmScene; this.vmCamera = game.vmCamera;
    this.vmRoot = new THREE.Group();
    this.vmScene.add(this.vmRoot);
    this.vmMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.15, side: THREE.DoubleSide });
    this.vmMesh = null; this.vmArms = null; this.reticle = null;
    this.bobPhase = 0; this.swayX = 0; this.swayY = 0; this.kick = 0; this.lastShot = -1;
    this.crouchToggle = false; this.proneToggle = false;
    this.giveUpT = 0; this.interactT = 0;
    this.camRoll = 0; this.landDip = 0; this.prevGrounded = true;
    this.vmKey = null;
    this.flashlight = new THREE.SpotLight(0xfff1d8, 0, 60, 0.42, 0.45, 1.5);
    this.flashlight.castShadow = false;
    this.camera.add(this.flashlight); this.camera.add(this.flashlight.target);
    this.flashlight.position.set(0.2, -0.15, 0); this.flashlight.target.position.set(0, 0, -10);
    this.laserDot = null;
  }

  buildViewmodel() {
    const s = this.s, w = s.weapon;
    if (!w) return;
    const key = s.active + ':' + (w.kind === 'gun' ? w.id + JSON.stringify(w.att) : w.id) + ':' + s.team;
    if (key === this.vmKey) return;
    this.vmKey = key;
    if (this.vmMesh) { this.vmRoot.remove(this.vmMesh); this.vmMesh = null; }
    if (this.vmArms) { this.vmRoot.remove(this.vmArms); this.vmArms.geometry.dispose(); this.vmArms = null; }
    if (this.reticle) { this.vmRoot.remove(this.reticle); this.reticle = null; }
    const T = TEAM_COLORS[s.team];
    let geo, gripL, gripR = new THREE.Vector3(0, -0.035, 0.02);
    if (w.kind === 'gun') {
      const m = w.model;
      geo = m.geo;
      gripL = new THREE.Vector3(0, 0.0, w.stats.type === 'pistol' ? 0.0 : -m.len * 0.42);
      if (w.stats.type === 'pistol') gripL.set(-0.02, -0.04, 0.02);
      this.sightY = m.sightY; this.sightZ = m.sightZ; this.muzzle = m.muzzle.clone();
      if (w.stats.reticle && !w.stats.scope && w.stats.zoom < 3.5) {
        const r = new THREE.Mesh(new THREE.PlaneGeometry(0.03, 0.03), new THREE.MeshBasicMaterial({ map: reticleTexture(w.stats.reticle), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
        r.position.set(0, m.sightY, m.sightZ - 0.03);
        this.reticle = r; this.vmRoot.add(r);
      }
    } else {
      geo = w.model;
      gripL = new THREE.Vector3(-0.1, -0.02, 0.02);
      this.sightY = 0.1; this.sightZ = 0; this.muzzle = new THREE.Vector3(0, 0.05, -0.6);
    }
    this.vmMesh = new THREE.Mesh(geo, this.vmMat);
    this.vmRoot.add(this.vmMesh);
    // arms reaching from below screen to the hands
    const arms = [
      limbGeo(0.16, -0.3, 0.3, gripR.x + 0.03, gripR.y - 0.03, gripR.z + 0.06, 0.07, T.uniform),
      G.box(0.06, 0.07, 0.09, 0x2e2e2a, gripR.x + 0.012, gripR.y, gripR.z),
      limbGeo(-0.2, -0.3, 0.12, gripL.x - 0.03, gripL.y - 0.04, gripL.z + 0.06, 0.07, T.uniform),
      G.box(0.065, 0.06, 0.09, 0x2e2e2a, gripL.x - 0.01, gripL.y - 0.025, gripL.z),
      G.box(0.075, 0.03, 0.05, T.accent, 0.11, -0.2, 0.2),
    ];
    this.vmArms = new THREE.Mesh(G.merge(arms), this.vmMat);
    this.vmRoot.add(this.vmArms);
  }

  // ------------- input -------------
  update(dt) {
    const s = this.s, inp = this.input, game = this.game;
    const S = game.settings;
    const ui = game.hud;
    const menuOpen = game.uiBlocking();
    const canControl = !menuOpen && s.state === 'alive';
    // mouse look
    if (!menuOpen && s.state !== 'dead') {
      const g = s.gun;
      const zoom = s.adsT > 0.5 ? (g ? g.stats.zoom : (s.weapon && s.weapon.id === 'binoculars' ? 6 : 1)) : 1;
      const sens = 0.0021 * S.get('sensitivity') * (s.adsT > 0.5 ? S.get('adsSensitivity') / Math.pow(zoom, 0.85) : 1);
      s.yaw -= inp.mouse.dx * sens;
      s.pitch -= inp.mouse.dy * sens * (S.get('invertY') ? -1 : 1);
      s.pitch = clamp(s.pitch, s.state === 'downed' ? -0.6 : -1.45, s.state === 'downed' ? 0.6 : 1.45);
    }
    const si = s.input;
    si.mx = 0; si.mz = 0; si.fire = false; si.ads = false; si.sprint = false;
    if (canControl) {
      if (inp.down('KeyW')) si.mz -= 1; if (inp.down('KeyS')) si.mz += 1;
      if (inp.down('KeyA')) si.mx -= 1; if (inp.down('KeyD')) si.mx += 1;
      si.sprint = inp.down('ShiftLeft') || inp.down('ShiftRight');
      if (inp.hit('Space')) si.jump = true;
      if ((inp.hit('KeyC') || inp.hit('ControlLeft')) && s.sprinting) { si.slide = true; }
      else if (inp.hit('KeyC')) { this.crouchToggle = !this.crouchToggle; if (s.stance === 'prone') { this.crouchToggle = true; s.setStance('crouch'); } }
      if (inp.hit('KeyZ')) { if (s.stance === 'prone') { s.setStance('crouch') && (this.crouchToggle = true); } else { si.prone = true; this.crouchToggle = false; } }
      if (si.sprint && si.mz < 0 && s.stance === 'crouch' && this.crouchToggle) this.crouchToggle = false;
      if (si.sprint && si.mz < 0 && s.stance === 'prone') { s.setStance('stand'); }
      si.crouch = this.crouchToggle || inp.down('ControlLeft');
      si.proneHold = s.stance === 'prone';
      si.fire = inp.btn(0);
      si.ads = inp.btn(2);
      let lean = 0; if (inp.down('KeyQ')) lean -= 1; if (inp.down('KeyE')) lean += 1;
      // block leaning into walls
      if (lean !== 0) {
        const r = s.right(new THREE.Vector3()).multiplyScalar(lean);
        const e = s.eye(new THREE.Vector3());
        const h = game.world.collision.raycast(s.pos.x, s.pos.y + s.eyeH, s.pos.z, r.x, 0, r.z, 0.7, {});
        if (h) lean *= clamp((h.t - 0.25) / 0.45, 0, 1);
        void e;
      }
      s.leanTarget = lean;
      if (inp.hit('KeyR')) s.reload();
      if (inp.hit('KeyB')) { s.cycleMode(); game.audio.play2d('switch', { vol: 0.4 }); }
      if (inp.hit('KeyX')) s.bandage();
      if (inp.hit('KeyV')) this.toggleLight();
      for (let i = 0; i < 5; i++) if (inp.hit('Digit' + (i + 1))) s.switchTo(i);
      if (inp.mouse.wheel) {
        let i = s.active;
        for (let k = 0; k < 5; k++) { i = (i + (inp.mouse.wheel > 0 ? 1 : 4)) % 5; const sl = s.slots[i]; if (sl && (sl.kind === 'gun' || sl.count > 0 || sl.def.count === Infinity)) break; }
        s.switchTo(i);
      }
      if (inp.hit('KeyG')) this.quickThrow();
      if (inp.hit('KeyT')) this.spotOrOrder();
      // gadgets
      if (s.weapon && s.weapon.kind === 'gadget') {
        game.combat.useGadget(s, inp.btnHit(0), inp.btnHit(2));
        si.fire = false;
        if (s.weapon.id !== 'binoculars' && s.weapon.id !== 'rpg' && s.weapon.id !== 'm320') si.ads = false;
      }
      // interaction (revive / heal)
      this.interact(dt, inp.down('KeyF'));
    } else {
      s.leanTarget = 0;
      si.crouch = false;
    }
    // downed: give up
    if (s.state === 'downed' && !menuOpen) {
      if (inp.down('Space')) { this.giveUpT += dt; if (this.giveUpT > 1.5) { this.giveUpT = 0; s.die(s.lastAttacker, 'Gave up', false, true); } }
      else this.giveUpT = 0;
    }
    if (ui) { ui.giveUp = this.giveUpT / 1.5; }
  }

  toggleLight() {
    const s = this.s;
    const g = s.slots[0];
    if (!g) return;
    s.flashlightOn = !s.flashlightOn;
    this.game.audio.play2d('switch', { vol: 0.35 });
  }

  quickThrow() {
    const s = this.s;
    const t = s.slots[4];
    if (!t || t.count <= 0 || s.actionT > 0 || s.state !== 'alive') return;
    t.count--;
    s.startAction('throw', 0.55, { type: t.id });
    this.game.audio.play2d('pin', { vol: 0.4 });
  }

  spotOrOrder() {
    const s = this.s, game = this.game;
    const n = game.combat.spot(s, 7, 4);
    if (n > 0) return;
    const sq = s.squad;
    if (!sq || sq.leader !== s) return;
    // order: look at a flag or a ground point
    const eye = s.eye(new THREE.Vector3()), dir = s.aimDir(new THREE.Vector3());
    let best = null, bestAng = 7 * DEG;
    for (const f of game.mode.flags) {
      const to = new THREE.Vector3(f.x - eye.x, f.y + 3 - eye.y, f.z - eye.z).normalize();
      const a = Math.acos(clamp(to.dot(dir), -1, 1));
      if (a < bestAng) { bestAng = a; best = f; }
    }
    if (best) {
      game.squads.setOrder(sq, best.owner === s.team ? 'defend' : 'attack', best);
      game.hud.toast(`Squad: ${best.owner === s.team ? 'DEFEND' : 'ATTACK'} ${best.id} — ${best.name}`);
      game.audio.play2d('beep', { vol: 0.4 });
      return;
    }
    const h = game.world.collision.raycast(eye.x, eye.y, eye.z, dir.x, dir.y, dir.z, 350, {});
    if (h) {
      game.squads.setOrder(sq, 'move', null, h.x, h.z);
      sq.order.flag = { x: h.x, z: h.z, r: 12 };
      game.hud.toast('Squad: MOVE to marker');
      game.audio.play2d('beep', { vol: 0.4 });
    } else {
      game.squads.setOrder(sq, 'follow', null, s.pos.x, s.pos.z);
      game.hud.toast('Squad: FOLLOW me');
    }
  }

  interact(dt, held) {
    const s = this.s, game = this.game;
    this.prompt = null;
    // downed teammate nearby?
    let target = null, bd = 2.2;
    for (const m of game.teams[s.team]) {
      if (m === s || m.state !== 'downed') continue;
      const d = Math.hypot(m.pos.x - s.pos.x, m.pos.z - s.pos.z);
      if (d < bd) { bd = d; target = m; }
    }
    if (target) {
      this.prompt = `Hold [F] to revive ${target.name}`;
      if (held) game.reviveTick(s, target, dt); else s.reviveProgress = 0;
      return;
    }
    s.reviveProgress = 0;
    if (s.weapon && s.weapon.id === 'medkit') {
      let mate = null; bd = 3;
      for (const m of game.teams[s.team]) {
        if (m === s || m.state !== 'alive' || (m.hp >= 100 && m.bleed <= 0)) continue;
        const d = Math.hypot(m.pos.x - s.pos.x, m.pos.z - s.pos.z);
        if (d < bd) { bd = d; mate = m; }
      }
      if (mate) {
        this.prompt = `[F] Heal ${mate.name}`;
        if (game.input.hit('KeyF') && s.medkitCd <= 0) s.startAction('medkitOther', 0.9, { target: mate });
      }
    }
  }

  // ------------- camera & viewmodel -------------
  updateCamera(dt) {
    const s = this.s, cam = this.camera, game = this.game, S = game.settings;
    const eye = s.eye(new THREE.Vector3());
    // landing dip
    if (s.move.grounded && !this.prevGrounded && s.state === 'alive') this.landDip = 0.12;
    this.prevGrounded = s.move.grounded;
    this.landDip = damp(this.landDip, 0, 8, dt);
    const hs = Math.hypot(s.vel.x, s.vel.z);
    if (s.move.grounded && hs > 0.3) this.bobPhase += hs * dt * (s.sprinting ? 1.6 : 1.9);
    const bobAmt = S.get('headBob') ? Math.min(1, hs / 5) * (s.adsT > 0.5 ? 0.25 : 1) : 0;
    const bobY = Math.abs(Math.sin(this.bobPhase)) * 0.045 * bobAmt;
    const bobX = Math.cos(this.bobPhase) * 0.025 * bobAmt;
    cam.position.set(eye.x, eye.y + bobY - this.landDip, eye.z);
    // shake
    const tr = game.fx.trauma;
    const sh = tr * tr;
    const t = game.time;
    const shY = sh * 0.06 * Math.sin(t * 37.1), shP = sh * 0.05 * Math.sin(t * 41.7 + 1), shR = sh * 0.05 * Math.sin(t * 29.3 + 2);
    this.camRoll = damp(this.camRoll, -s.lean * 0.17 + (s.state === 'downed' ? 0.35 : 0), 10, dt);
    cam.rotation.order = 'YXZ';
    cam.rotation.set(s.pitch + shP + (s.state === 'downed' ? -0.0 : 0), s.yaw + shY + bobX * 0.15, this.camRoll + shR);
    // FOV
    const g = s.gun;
    const binos = s.weapon && s.weapon.id === 'binoculars';
    const zoom = g ? g.stats.zoom : binos ? 6 : 1;
    const z = lerp(1, zoom, s.adsT);
    const hfov = S.get('fov') * DEG;
    const aspect = cam.aspect;
    const vfov = 2 * Math.atan(Math.tan(hfov / 2) / aspect) / DEG;
    cam.fov = vfov / z * (s.sprinting ? 1.06 : 1);
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
    // flashlight
    const hasLight = s.slots[0] && s.slots[0].stats && s.slots[0].stats.light;
    const night = game.env.time.night;
    this.flashlight.intensity = s.flashlightOn && s.state === 'alive' && (hasLight || night) ? (night ? 26 : 12) : 0;
    this.updateViewmodel(dt, bobX, bobY);
  }

  updateViewmodel(dt, bobX, bobY) {
    const s = this.s, game = this.game;
    this.buildViewmodel();
    const vm = this.vmRoot;
    const scoped = this.isScoped();
    vm.visible = s.state === 'alive' && !scoped;
    if (!vm.visible) { this.updateMuzzleWorld(); return; }
    const w = s.weapon;
    const isGun = w && w.kind === 'gun';
    const ads = isGun ? s.adsT : 0;
    // sway from mouse
    const mdx = game.input.mouse.dx, mdy = game.input.mouse.dy;
    this.swayX = damp(this.swayX, clamp(-mdx * 0.0006, -0.05, 0.05), 10, dt);
    this.swayY = damp(this.swayY, clamp(mdy * 0.0006, -0.05, 0.05), 10, dt);
    if (s.lastShotTime !== this.lastShot) { this.lastShot = s.lastShotTime; this.kick = 1; }
    this.kick = damp(this.kick, 0, 18, dt);
    const hip = new THREE.Vector3(0.15, -0.19, -0.56);
    const ey = isGun && w.stats.zoom > 1.2 ? 0.2 : 0.26;
    const adsP = new THREE.Vector3(0, -this.sightY, -ey - this.sightZ);
    const p = hip.clone().lerp(adsP, ads);
    let rx = 0.035 * (1 - ads), ry = 0.04 * (1 - ads), rz = 0;
    const swayMul = 1 - ads * 0.8;
    p.x += (bobX * 0.5 + this.swayX) * swayMul; p.y += (-bobY * 0.35 + this.swayY) * swayMul;
    // breathing
    const tb = game.time;
    p.y += Math.sin(tb * 1.6) * 0.0025 * (1 - ads * 0.7);
    if (s.sprinting) { p.x += 0.03; p.y -= 0.06; rx -= 0.35; ry += 0.65; }
    if (s.reloadT > 0) {
      const tot = s.reloadTotal || 2; const k = 1 - s.reloadT / tot;
      const dip = Math.sin(Math.min(1, k) * Math.PI);
      p.y -= 0.07 * dip; rz += 0.45 * dip; rx += 0.25 * dip;
    }
    if (s.switchT > 0) { const k = s.switchT / 0.45; p.y -= 0.35 * k; rx -= 0.6 * k; }
    if (s.action) {
      const k = 1 - s.actionT / (s.actionDur || 1);
      if (s.action.name === 'throw' || s.action.name === 'throwC4') { p.y -= 0.1; rx += Math.sin(k * Math.PI) * 0.9; p.z += 0.08 * Math.sin(k * Math.PI); }
      else { p.y -= 0.12 * Math.sin(k * Math.PI); rz -= 0.3 * Math.sin(k * Math.PI); }
    }
    if (s.state === 'alive' && s.vault) { p.y -= 0.1; rx -= 0.3; }
    if (isGun) {
      const kickZ = (w.stats.type === 'sniper' || w.stats.type === 'shotgun' ? 0.09 : 0.035) * this.kick;
      p.z += kickZ; rx += this.kick * (w.stats.type === 'sniper' ? 0.12 : 0.04) * (1 - ads * 0.5);
    }
    vm.position.lerp(p, 1 - Math.exp(-dt * 30));
    vm.rotation.set(rx, ry, rz + s.lean * 0.06);
    if (this.reticle) this.reticle.visible = ads > 0.85;
    // match lighting to world sun in camera space
    const sun = game.env.sunDir.clone().transformDirection(this.camera.matrixWorldInverse);
    game.vmLight.position.copy(sun).multiplyScalar(5);
    this.updateMuzzleWorld();
  }

  updateMuzzleWorld() {
    // compute viewmodel muzzle in world space (for tracers and flashes)
    const s = this.s;
    if (!this.muzzle) return;
    const local = this.muzzle.clone();
    this.vmRoot.updateMatrixWorld();
    local.applyMatrix4(this.vmRoot.matrixWorld); // camera space
    // camera space -> world (vm camera matches main camera orientation)
    s.vmMuzzle = this.camera.localToWorld(local.clone());
  }

  isScoped() {
    const s = this.s, g = s.gun;
    if (s.state !== 'alive') return false;
    if (g && (g.stats.scope || g.stats.zoom >= 3.5) && s.adsT > 0.92) return true;
    if (s.weapon && s.weapon.id === 'binoculars' && s.adsT > 0.9) return true;
    return false;
  }

  dispose() {
    this.vmScene.remove(this.vmRoot);
    this.camera.remove(this.flashlight); this.camera.remove(this.flashlight.target);
  }
}
