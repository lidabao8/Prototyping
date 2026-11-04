// Player controller: maps keyboard/mouse to the soldier, drives the camera (bob, lean, recoil, shake, ADS zoom)
// and renders a first-person viewmodel with arms, weapon, reticles, reload/sprint/switch animations.
import * as THREE from 'three';
import { clamp, lerp, damp, DEG } from '../core/math.js';
import { G } from '../render/geo.js';
import * as _THREE from 'three';
const lift = (hx) => new _THREE.Color(hx).lerp(new _THREE.Color(0x7a7a7a), 0.25).getHex();
import { TEAM_COLORS, buildWeaponGeo, buildGadgetGeo } from './models.js';
import { keybinds, keyName } from '../core/keybinds.js';

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
    this.breath = 1; this.holding = false; this.adsToggle = false; this.leanToggle = 0;
  }

  buildViewmodel() {
    const s = this.s, w = s.weapon;
    if (!w) return;
    const key = s.active + ':' + (w.kind === 'gun' ? w.id + JSON.stringify(w.att) : w.id) + ':' + s.team;
    if (key === this.vmKey) return;
    this.vmKey = key;
    for (const k of ['vmMesh', 'vmMag', 'vmArmR', 'vmArmL', 'reticle']) if (this[k]) { this[k].parent && this[k].parent.remove(this[k]); this[k] = null; }
    if (!this.vmArmLGroup) { this.vmArmLGroup = new THREE.Group(); this.vmRoot.add(this.vmArmLGroup); }
    if (!this.vmKnife) {
      this.vmKnife = new THREE.Group();
      const kn = new THREE.Mesh(buildGadgetGeo('knife'), this.vmMat); kn.rotation.x = -0.2; this.vmKnife.add(kn);
      const T0 = TEAM_COLORS[this.s.team];
      const hand = new THREE.Mesh(G.merge([G.box(0.07, 0.075, 0.09, T0.glove, 0, -0.01, 0.03), G.box(0.022, 0.03, 0.05, T0.glove, -0.035, 0.02, 0.0), limbGeo(0.0, -0.05, 0.06, 0.08, -0.2, 0.32, 0.08, T0.uniform2)]), this.vmMat); this.vmKnife.add(hand);
      this.vmKnife.visible = false; this.vmScene.add(this.vmKnife);
    }
    const T = TEAM_COLORS[s.team];
    let geo, magGeo = null, gripL, gripR = new THREE.Vector3(0, -0.035, 0.02);
    this.magPos = null;
    if (w.kind === 'gun') {
      const m = w.model;
      geo = m.bodyGeo; magGeo = m.magGeo; this.magPos = m.magPos.clone();
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
    this.gripL = gripL;
    this.vmMesh = new THREE.Mesh(geo, this.vmMat);
    this.vmRoot.add(this.vmMesh);
    if (magGeo) { this.vmMag = new THREE.Mesh(magGeo, this.vmMat); this.vmMag.position.copy(this.magPos); this.vmRoot.add(this.vmMag); }
    // arms: sleeve, cuff, glove with knuckles and thumb
    const hand = (x, y, z, flip) => [
      G.box(0.062, 0.066, 0.085, T.glove, x, y, z),
      G.box(0.064, 0.02, 0.03, lift(T.glove), x, y + 0.03, z - 0.035),
      G.box(0.02, 0.025, 0.05, T.glove, x + 0.03 * flip, y + 0.01, z - 0.02),
    ];
    const armR = [
      limbGeo(0.16, -0.32, 0.32, gripR.x + 0.035, gripR.y - 0.035, gripR.z + 0.08, 0.075, T.uniform),
      limbGeo(gripR.x + 0.06, gripR.y - 0.06, gripR.z + 0.14, gripR.x + 0.02, gripR.y - 0.02, gripR.z + 0.05, 0.08, T.uniform2),
      ...hand(gripR.x + 0.012, gripR.y, gripR.z, -1),
      G.box(0.075, 0.03, 0.05, T.accent, 0.12, -0.21, 0.2),
    ];
    const armL = [
      limbGeo(-0.2, -0.32, 0.14, gripL.x - 0.035, gripL.y - 0.045, gripL.z + 0.08, 0.075, T.uniform),
      limbGeo(gripL.x - 0.06, gripL.y - 0.07, gripL.z + 0.15, gripL.x - 0.02, gripL.y - 0.035, gripL.z + 0.05, 0.08, T.uniform2),
      ...hand(gripL.x - 0.01, gripL.y - 0.025, gripL.z, 1),
    ];
    this.vmArmR = new THREE.Mesh(G.merge(armR), this.vmMat); this.vmRoot.add(this.vmArmR);
    this.vmArmL = new THREE.Mesh(G.merge(armL), this.vmMat); this.vmArmLGroup.add(this.vmArmL);
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
    const K = keybinds;
    si.mx = 0; si.mz = 0; si.fire = false; si.ads = false; si.sprint = false;
    if (canControl) {
      if (K.down(inp, 'forward')) si.mz -= 1; if (K.down(inp, 'back')) si.mz += 1;
      if (K.down(inp, 'left')) si.mx -= 1; if (K.down(inp, 'right')) si.mx += 1;
      const sprintKey = K.down(inp, 'sprint');
      si.sprint = sprintKey && !(s.adsT > 0.5);
      if (K.hit(inp, 'jump')) si.jump = true;
      const crouchHit = K.hit(inp, 'crouch'), crouchHoldHit = K.hit(inp, 'crouchHold');
      const holdMode = S.get('crouchMode') === 'hold';
      if ((crouchHit || crouchHoldHit) && s.sprinting) { si.slide = true; this.crouchToggle = holdMode ? false : true; }
      else if (crouchHit && !holdMode) { this.crouchToggle = !this.crouchToggle; if (s.stance === 'prone') { this.crouchToggle = true; s.setStance('crouch'); } }
      if (K.hit(inp, 'prone')) { if (s.stance === 'prone') { s.setStance('crouch') && (this.crouchToggle = true); } else { si.prone = true; this.crouchToggle = false; } }
      if (si.sprint && si.mz < 0 && s.stance === 'crouch' && this.crouchToggle && !(s.slideT > 0)) this.crouchToggle = false;
      if (si.sprint && si.mz < 0 && s.stance === 'prone') { s.setStance('stand'); }
      si.crouch = this.crouchToggle || K.down(inp, 'crouchHold') || (holdMode && K.down(inp, 'crouch'));
      si.proneHold = s.stance === 'prone';
      si.fire = K.down(inp, 'fire');
      // aim: hold or toggle
      if (S.get('adsMode') === 'toggle') { if (K.hit(inp, 'ads')) this.adsToggle = !this.adsToggle; if (s.sprinting || s.reloadT > 0 && false) this.adsToggle = false; si.ads = this.adsToggle; }
      else si.ads = K.down(inp, 'ads');
      // lean: hold or toggle; blocked by walls on that side
      let lean = 0;
      if (S.get('leanMode') === 'toggle') {
        if (K.hit(inp, 'leanL')) this.leanToggle = this.leanToggle === -1 ? 0 : -1;
        if (K.hit(inp, 'leanR')) this.leanToggle = this.leanToggle === 1 ? 0 : 1;
        if (s.sprinting) this.leanToggle = 0;
        lean = this.leanToggle || 0;
      } else { if (K.down(inp, 'leanL')) lean -= 1; if (K.down(inp, 'leanR')) lean += 1; }
      if (lean !== 0) {
        const r = s.right(new THREE.Vector3()).multiplyScalar(lean);
        const h = game.world.collision.raycast(s.pos.x, s.pos.y + s.eyeH, s.pos.z, r.x, 0, r.z, 0.85, {});
        if (h) lean *= clamp((h.t - 0.25) / 0.6, 0, 1);
      }
      s.leanTarget = lean;
      // hold breath while scoped
      const scopedNow = s.adsT > 0.6 && s.gun && (s.gun.stats.zoom >= 3.5 || s.gun.stats.type === 'sniper' || s.gun.stats.type === 'dmr');
      if (scopedNow && sprintKey && this.breath > 0) { this.holding = true; this.breath = Math.max(0, this.breath - dt / 5); }
      else { this.holding = false; this.breath = Math.min(1, this.breath + dt / (sprintKey ? 8 : 3.5)); }
      s.holdingBreath = this.holding;
      if (K.hit(inp, 'reload')) s.reload();
      if (K.hit(inp, 'firemode')) { s.cycleMode(); game.audio.play2d('switch', { vol: 0.4 }); }
      if (K.hit(inp, 'bandage')) s.bandage();
      if (K.hit(inp, 'light')) this.toggleLight();
      if (K.hit(inp, 'melee')) game.combat.melee(s);
      for (let i = 0; i < 5; i++) if (K.hit(inp, 'slot' + (i + 1))) s.switchTo(i);
      if (inp.mouse.wheel) {
        let i = s.active;
        for (let k = 0; k < 5; k++) { i = (i + (inp.mouse.wheel > 0 ? 1 : 4)) % 5; const sl = s.slots[i]; if (sl && (sl.kind === 'gun' || sl.count > 0 || sl.def.count === Infinity)) break; }
        s.switchTo(i);
      }
      if (K.hit(inp, 'grenade')) this.quickThrow();
      if (K.hit(inp, 'spot')) this.spotOrOrder();
      // gadgets
      if (s.weapon && s.weapon.kind === 'gadget') {
        game.combat.useGadget(s, K.hit(inp, 'fire'), K.hit(inp, 'ads'));
        si.fire = false;
        if (s.weapon.id !== 'binoculars' && s.weapon.id !== 'rpg' && s.weapon.id !== 'm320') si.ads = false;
      }
      // interaction (revive / heal)
      this.interact(dt, K.down(inp, 'interact'));
    } else {
      s.leanTarget = 0;
      si.crouch = false;
      this.adsToggle = false;
    }
    // downed: give up
    if (s.state === 'downed' && !menuOpen) {
      if (K.down(inp, 'jump')) { this.giveUpT += dt; if (this.giveUpT > 1.5) { this.giveUpT = 0; s.die(s.lastAttacker, 'Gave up', false, true); } }
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
      this.prompt = `Hold [${keybinds.name('interact')}] to revive ${target.name}`;
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
        this.prompt = `[${keybinds.name('interact')}] Heal ${mate.name}`;
        if (keybinds.hit(game.input, 'interact') && s.medkitCd <= 0) s.startAction('medkitOther', 0.9, { target: mate });
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
    cam.rotation.set(s.pitch + s.swayP + shP, s.yaw + s.swayY + shY + bobX * 0.15, this.camRoll + shR);
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
    const hip = new THREE.Vector3(0.155, -0.2, -0.6);
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
    // reload: tilt the weapon, drop the magazine, bring a fresh one up with the left hand
    let magOff = null, armOff = null;
    if (s.reloadT > 0 && isGun) {
      const tot = s.reloadTotal || 2; const k = Math.min(1, 1 - s.reloadT / tot);
      const tilt = Math.sin(k * Math.PI);
      p.y -= 0.06 * tilt; rz += 0.45 * tilt; rx += 0.06 * tilt; p.x -= 0.03 * tilt;
      if (this.vmMag && !w.stats.shellReload) {
        if (k < 0.22) magOff = [0, -0.35 * (k / 0.22) ** 2, 0.05 * (k / 0.22), 0.6 * (k / 0.22)];
        else if (k < 0.42) magOff = [0, -0.5, 0.0, 0.0];
        else if (k < 0.7) { const u = (k - 0.42) / 0.28; magOff = [0, -0.22 * (1 - u) * (1 - u), 0.03 * (1 - u), 0.15 * (1 - u)]; }
        else magOff = [0, 0, 0, 0];
        const handT = k < 0.15 ? k / 0.15 : k < 0.75 ? 1 : 1 - (k - 0.75) / 0.25;
        const mp = this.magPos, gl = this.gripL;
        const follow = k > 0.42 && k < 0.7 ? magOff[1] : k < 0.42 ? -0.18 : 0;
        armOff = [(mp.x - gl.x) * handT, (mp.y - 0.06 - gl.y + follow) * handT, (mp.z - gl.z) * handT];
        if (k > 0.78 && k < 0.95 && s.reloadTotal > (w.stats.reload + 0.01)) { const u = (k - 0.78) / 0.17; p.z += 0.03 * Math.sin(u * Math.PI); rx -= 0.05 * Math.sin(u * Math.PI); }
      } else if (w.stats.shellReload) {
        const cyc = (game.time * 3) % 1;
        armOff = [0.02, -0.08 * Math.sin(cyc * Math.PI), 0.12];
      }
    }
    // bolt / pump cycling after a shot
    if (isGun && s.boltT > 0 && (w.stats.bolt || w.stats.pump)) {
      const u = 1 - s.boltT / (w.stats.interval * 0.9);
      const cyc = Math.sin(Math.min(1, u) * Math.PI);
      if (w.stats.bolt) { rz -= 0.25 * cyc; p.y -= 0.02 * cyc; p.x += 0.02 * cyc; }
      else { armOff = [0, 0, 0.09 * cyc]; p.z += 0.015 * cyc; }
    }
    if (s.switchT > 0) { const k = s.switchT / 0.45; p.y -= 0.35 * k; rx -= 0.6 * k; }
    // melee: lower the weapon and slash with the knife
    const knife = this.vmKnife;
    if (knife) knife.visible = false;
    if (s.action) {
      const k = 1 - s.actionT / (s.actionDur || 1);
      if (s.action.name === 'throw' || s.action.name === 'throwC4') { p.y -= 0.1; rx += Math.sin(k * Math.PI) * 0.9; p.z += 0.08 * Math.sin(k * Math.PI); }
      else if (s.action.name === 'melee') {
        p.y -= 0.25 * Math.sin(k * Math.PI); p.x += 0.12 * Math.sin(k * Math.PI); rz -= 0.5 * Math.sin(k * Math.PI);
        if (knife) {
          knife.visible = true;
          const a = Math.min(1, k * 1.5);
          const e = a < 0.25 ? a / 0.25 * 0.2 : 0.2 + (a - 0.25) / 0.75 * 0.8;
          knife.position.set(0.32 - e * 0.55, -0.16 + Math.sin(e * Math.PI) * 0.08, -0.45 + Math.sin(e * Math.PI) * -0.12);
          knife.rotation.set(-0.3, 0.9 - e * 1.6, -0.6 + e * 1.2);
        }
      }
      else { p.y -= 0.12 * Math.sin(k * Math.PI); rz -= 0.3 * Math.sin(k * Math.PI); }
    }
    if (this.vmMag && this.magPos) {
      if (magOff) { this.vmMag.position.set(this.magPos.x + magOff[0], this.magPos.y + magOff[1], this.magPos.z + magOff[2]); this.vmMag.rotation.x = magOff[3]; this.vmMag.visible = !(magOff[1] <= -0.49); }
      else { this.vmMag.position.copy(this.magPos); this.vmMag.rotation.x = 0; this.vmMag.visible = true; }
    }
    if (this.vmArmLGroup) {
      const t = armOff || [0, 0, 0];
      const g = this.vmArmLGroup.position;
      const kk = 1 - Math.exp(-dt * 18);
      g.x += (t[0] - g.x) * kk; g.y += (t[1] - g.y) * kk; g.z += (t[2] - g.z) * kk;
    }
    if (s.state === 'alive' && s.vault) { p.y -= 0.1; rx -= 0.3; }
    if (s.slideT > 0) { rz += 0.25; p.y -= 0.03; }
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
