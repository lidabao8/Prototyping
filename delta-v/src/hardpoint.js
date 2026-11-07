import * as THREE from 'three';
import { TEAM_COLORS } from './soldier.js';

// Hardpoint: one capture zone at a time, rotating round the map. A team scores a point a second while
// only its players are inside; with both teams inside it's contested and nobody scores.
export const HP = { radius: 7, rotate: 60, warn: 10, limitMul: 5 };

/** Spread-out zone centres in the contested middle of the map (never in or near a spawn). */
export function pickHardpoints(world) {
  const lim = world.barrierX * 0.6;
  const B = world.def.bounds;
  // middle band of the volume: not hugging the ceiling / floor / side walls
  const ok = world.nav.filter((nd) => !nd.surf && Math.abs(nd.pos.x) < lim && Math.abs(nd.pos.y) < B[1] * 0.55 && Math.abs(nd.pos.z) < B[2] * 0.55 &&
    !world.inSpawn(nd.pos, 0) && !world.inSpawn(nd.pos, 1));
  const pool = ok.filter((nd) => { const c = world.clearance(nd.pos); return c > 2.2 && c < 12; });
  const src = pool.length > 8 ? pool : ok;
  if (!src.length) return [new THREE.Vector3()];
  // first zone: closest to the map centre; then farthest-point sampling for an even spread
  let first = src[0];
  // (equidistant from both spawns matters most: weight x heavily)
  const cScore = (p) => Math.abs(p.x) * 3 + Math.abs(p.y) + Math.abs(p.z);
  for (const nd of src) if (cScore(nd.pos) < cScore(first.pos)) first = nd;
  const pts = [first.pos.clone()];
  while (pts.length < 4) {
    let best = null, bd = -1;
    for (const nd of src) {
      let d = Infinity;
      for (const p of pts) d = Math.min(d, nd.pos.distanceTo(p));
      // keep zones off the extreme edges: prefer the middle band in x
      d -= Math.abs(nd.pos.x) * 0.25 + (Math.abs(nd.pos.y) + Math.abs(nd.pos.z)) * 0.35;
      if (d > bd) { bd = d; best = nd; }
    }
    if (!best) break;
    pts.push(best.pos.clone());
  }
  // visiting order: centre, then alternate sides so neither team gets two home zones in a row; which side
  // comes first is random per match
  const c = pts.shift();
  const flip = Math.random() < 0.5 ? 1 : -1;
  pts.sort((a, b) => (a.x - b.x) * flip);
  const order = [c];
  while (pts.length) { order.push(pts.shift()); if (pts.length) order.push(pts.pop()); }
  return order;
}

const NEUTRAL = new THREE.Color(0xe9f6ff), CONTEST = new THREE.Color(0xffcc4d);

export class Hardpoint {
  constructor(game, pts) {
    this.game = game;
    this.pts = pts;
    this.idx = 0;
    this.t = HP.rotate;            // seconds left at this location
    this.owner = -1;               // team scoring right now, -1 none
    this.contested = false;
    this.count = [0, 0];
    this.acc = [0, 0];
    this.buildVisual();
  }

  get center() { return this.pts[this.idx]; }
  /** Is a point inside the live zone? */
  inside(p) { return p.distanceToSquared(this.center) < HP.radius * HP.radius; }

  buildVisual() {
    const g = new THREE.Group();
    const col = { value: NEUTRAL.clone() };
    this.uCol = col;
    this.uTime = { value: 0 };
    // fresnel shell: clear in the middle, glowing at the rim, slow scan bands
    const shell = new THREE.Mesh(new THREE.SphereGeometry(HP.radius, 48, 24), new THREE.ShaderMaterial({
      uniforms: { col, time: this.uTime },
      vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP;
        void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 col; uniform float time; varying vec3 vN; varying vec3 vV; varying vec3 vP;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.4);
          float bands = 0.5 + 0.5 * sin(vP.y * 2.2 - time * 2.0);
          float a = rim * 0.55 + rim * bands * 0.25 + 0.025;
          gl_FragColor = vec4(col * a, a);
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    }));
    g.add(shell);
    // equator + two meridian rings so the boundary reads from any angle
    this.ringMat = new THREE.MeshBasicMaterial({ color: NEUTRAL.clone(), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending });
    for (const [rx, ry] of [[Math.PI / 2, 0], [0, 0], [0, Math.PI / 2]]) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(HP.radius, 0.035, 6, 96), this.ringMat);
      r.rotation.set(rx, ry, 0);
      g.add(r);
    }
    // core beacon: a slowly turning octahedron and a tall thin beam, visible across the map
    this.coreMat = new THREE.MeshBasicMaterial({ color: NEUTRAL.clone().multiplyScalar(1.6) });
    this.core = new THREE.Mesh(new THREE.OctahedronGeometry(0.45, 0), this.coreMat);
    g.add(this.core);
    this.beamMat = new THREE.MeshBasicMaterial({ color: NEUTRAL.clone(), transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 60, 8, 1, true), this.beamMat);
    g.add(beam);
    for (const o of [shell, beam, this.core]) o.userData.noOutline = true;
    g.traverse((o) => { o.castShadow = false; o.receiveShadow = false; });
    this.group = g;
    g.position.copy(this.center);
    this.game.scene.add(g);
  }

  dispose() { this.game.scene.remove(this.group); }

  /** Host: occupancy, scoring, rotation. */
  update(dt) {
    const g = this.game;
    this.count = [0, 0];
    for (const s of g.soldiers) if (s.alive && this.inside(s.pos)) this.count[s.team]++;
    this.contested = this.count[0] > 0 && this.count[1] > 0;
    this.owner = this.contested ? -1 : this.count[0] > 0 ? 0 : this.count[1] > 0 ? 1 : -1;
    if (this.owner >= 0 && g.state === 'playing') {
      this.acc[this.owner] += dt;
      while (this.acc[this.owner] >= 1) {
        this.acc[this.owner] -= 1;
        g.teamScore[this.owner]++;
        for (const s of g.soldiers) if (s.alive && s.team === this.owner && this.inside(s.pos)) s.score += 5;
        if (g.teamScore[this.owner] >= g.scoreLimit) { g.endMatch(); return; }
      }
    }
    const before = this.t;
    this.t -= dt;
    if (before > HP.warn && this.t <= HP.warn) g.hud.message(`HARDPOINT MOVING IN ${HP.warn}`, '#ffcc4d', 2);
    if (this.t <= 0) this.rotate();
  }

  rotate() {
    this.idx = (this.idx + 1) % this.pts.length;
    this.t = HP.rotate;
    this.acc = [0, 0];
    this.group.position.copy(this.center);
    this.game.hud.message('NEW HARDPOINT', '#9fe8ff', 2.2);
    this.game.audio.play('spawn');
  }

  /** Client: state from the host's snapshot. */
  applyNet(a) {
    const [idx, t, owner, contested, c0, c1] = a;
    if (idx !== this.idx) { this.idx = idx; this.group.position.copy(this.center); this.game.hud.message('NEW HARDPOINT', '#9fe8ff', 2.2); }
    this.t = t; this.owner = owner; this.contested = !!contested; this.count = [c0, c1];
  }
  netState() { return [this.idx, Math.round(this.t * 10) / 10, this.owner, this.contested ? 1 : 0, this.count[0], this.count[1]]; }

  /** Every frame: tint by owner, pulse when contested, spin the core. */
  sync(time) {
    this.uTime.value = time;
    const target = this.contested ? CONTEST : this.owner >= 0 ? new THREE.Color(TEAM_COLORS[this.owner]) : NEUTRAL;
    const k = this.contested ? 0.75 + 0.25 * Math.sin(time * 9) : 1;
    this.uCol.value.lerp(target, 0.12);
    this.ringMat.color.copy(this.uCol.value).multiplyScalar(k);
    this.beamMat.color.copy(this.uCol.value);
    this.coreMat.color.copy(this.uCol.value).multiplyScalar(1.6 * k);
    this.core.rotation.y = time * 0.8; this.core.rotation.x = Math.sin(time * 0.5) * 0.4;
    // the beam runs along the local "up" of the station (y), long enough to see over cover
  }
}
