import * as THREE from 'three';
import { clamp, interceptTime, interceptTimeRocket, raySphere } from './math.js';
import { GAS_MAX, MODES, TEAM_COLORS, TEAM_NAMES, TOWERS, BODY_R, HIT_THRESH } from './soldier.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _q = new THREE.Quaternion();
const css = (hex) => '#' + hex.toString(16).padStart(6, '0');
const BLUE = css(TEAM_COLORS[0]), ORANGE = css(TEAM_COLORS[1]);
const HUD_C = '#9fe8ff', WARN = '#ffcc4d', DANGER = '#ff4b3a', OK = '#7dff9a';

export class HUD {
  constructor(game, canvas) {
    this.game = game;
    this.cv = canvas;
    this.g = canvas.getContext('2d');
    this.msgs = [];
    this.feed = [];
    this.hitT = 0; this.hitHead = false; this.hitKill = false;
    this.dmgDirs = [];
    this.collWarnT = 0;
    this.impactT = 0; this.impactSev = 0; this.cracks = [];
    this.font = "'Rajdhani','Bahnschrift','Segoe UI',Arial,sans-serif";
    this.resize();
  }

  resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.dpr = dpr;
    this.W = window.innerWidth; this.H = window.innerHeight;
    this.cv.width = this.W * dpr; this.cv.height = this.H * dpr;
    this.cv.style.width = this.W + 'px'; this.cv.style.height = this.H + 'px';
  }

  message(text, color = WARN, dur = 2.2, big = false) {
    this.msgs = this.msgs.filter((m) => m.text !== text);
    this.msgs.push({ text, color, t: dur, dur, big });
    if (this.msgs.length > 4) this.msgs.shift();
  }

  kill(killer, victim, cause, head) {
    this.feed.unshift({ killer, victim, cause, head, t: 6 });
    if (this.feed.length > 6) this.feed.pop();
  }

  hit(head, kill) { this.hitT = 0.22; this.hitHead = head; this.hitKill = kill; }

  impact(severity) {
    this.impactT = 1; this.impactSev = Math.min(1, severity);
    if (severity > 0.25) {
      // visor crack: a few jagged lines from a random point
      const cx = this.W * (0.25 + Math.random() * 0.5), cy = this.H * (0.25 + Math.random() * 0.5);
      const lines = [];
      const n = 5 + Math.floor(severity * 6);
      for (let i = 0; i < n; i++) {
        let a = Math.random() * Math.PI * 2, x = cx, y = cy;
        const pts = [[x, y]];
        const len = 40 + Math.random() * 160 * severity;
        for (let k = 0; k < 5; k++) { a += (Math.random() - 0.5) * 0.9; x += Math.cos(a) * len / 5; y += Math.sin(a) * len / 5; pts.push([x, y]); }
        lines.push(pts);
      }
      this.cracks.push({ lines, t: 2.5 });
      if (this.cracks.length > 3) this.cracks.shift();
    }
  }

  drawImpact(dt) {
    const g = this.g;
    if (this.impactT > 0) {
      this.impactT -= dt * 2.5;
      g.fillStyle = `rgba(255,${Math.round(90 - 60 * this.impactSev)},40,${Math.max(0, this.impactT) * (0.15 + 0.35 * this.impactSev)})`;
      g.fillRect(0, 0, this.W, this.H);
    }
    for (const c of this.cracks) {
      c.t -= dt;
      g.strokeStyle = `rgba(230,245,255,${Math.min(1, c.t / 1.2) * 0.75})`; g.lineWidth = 1.2;
      for (const pts of c.lines) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (const [x, y] of pts.slice(1)) g.lineTo(x, y); g.stroke(); }
    }
    this.cracks = this.cracks.filter((c) => c.t > 0);
    g.lineWidth = 1.5;
  }

  damageFrom(pos) { if (pos) this.dmgDirs.push({ pos: pos.clone(), t: 1.2 }); }

  project(p, out) {
    const cam = this.game.camera;
    _v3.copy(p).applyMatrix4(cam.matrixWorldInverse);
    const behind = _v3.z > 0;
    _v3.applyMatrix4(cam.projectionMatrix);
    out.x = (_v3.x * 0.5 + 0.5) * this.W;
    out.y = (-_v3.y * 0.5 + 0.5) * this.H;
    out.behind = behind;
    out.on = !behind && out.x > -20 && out.x < this.W + 20 && out.y > -20 && out.y < this.H + 20;
    return out;
  }

  text(t, x, y, size = 14, color = HUD_C, align = 'left', weight = 600) {
    const g = this.g;
    g.font = `${weight} ${size}px ${this.font}`;
    g.textAlign = align; g.fillStyle = color;
    g.fillText(t, x, y);
  }

  draw(dt) {
    const g = this.g, game = this.game, p = game.player;
    g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    g.clearRect(0, 0, this.W, this.H);
    if (game.state === 'menu') return;
    const W = this.W, H = this.H, cx = W / 2, cy = H / 2;
    g.lineWidth = 1.5;
    g.textBaseline = 'middle';

    this.drawScore();
    this.drawFeed(dt);
    if (!p) return;
    if (p.alive) {
      if (game.showGrid || p.angVel.length() > 1.4) { /* grid drawn in 3D */ }
      this.drawMarkers();
      this.drawVelocityMarkers();
      this.drawCrosshair(cx, cy, dt);
      this.drawRates(cx, cy);
      this.drawTargetInfo(cx, cy);
      this.drawCollision(cx, cy, dt);
      this.drawStatus();
      this.drawSuit();
      this.drawWeapon();
      this.drawDamage(cx, cy, dt);
      this.drawHints(cx, cy);
      this.drawBounds(cx, cy);
      this.drawImpact(dt);
    } else {
      this.drawDeath(cx, cy);
    }
    this.drawMessages(cx, dt);
  }

  drawScore() {
    const g = this.g, game = this.game, cx = this.W / 2;
    const s = game.teamScore;
    g.fillStyle = 'rgba(8,12,16,0.55)';
    g.fillRect(cx - 150, 10, 300, 40);
    g.fillStyle = BLUE; g.fillRect(cx - 150, 10, 4, 40);
    g.fillStyle = ORANGE; g.fillRect(cx + 146, 10, 4, 40);
    this.text(String(s[0]), cx - 60, 31, 28, BLUE, 'center', 700);
    this.text(String(s[1]), cx + 60, 31, 28, ORANGE, 'center', 700);
    const tl = Math.max(0, game.timeLimit - game.matchTime);
    const mm = Math.floor(tl / 60), ss = Math.floor(tl % 60);
    this.text(`${mm}:${ss.toString().padStart(2, '0')}`, cx, 25, 18, '#e9eef2', 'center', 700);
    this.text(`FIRST TO ${game.scoreLimit}`, cx, 41, 10, '#93a0ab', 'center');
    // score bars
    const f0 = s[0] / game.scoreLimit, f1 = s[1] / game.scoreLimit;
    g.fillStyle = BLUE; g.fillRect(cx - 146, 50, 140 * f0, 3);
    g.fillStyle = ORANGE; g.fillRect(cx + 6 + 140 * (1 - f1), 50, 140 * f1, 3);
  }

  drawFeed(dt) {
    const g = this.g;
    let y = 22;
    for (const f of this.feed) {
      f.t -= dt;
      const a = clamp(f.t, 0, 1);
      g.globalAlpha = a;
      const kc = f.killer ? css(TEAM_COLORS[f.killer.team]) : '#cccccc';
      const vc = css(TEAM_COLORS[f.victim.team]);
      const x = this.W - 16;
      const cause = `[${f.cause.toUpperCase()}${f.head ? ' ⦿' : ''}]`;
      g.font = `600 14px ${this.font}`;
      const vw = g.measureText(f.victim.name).width;
      const cw = g.measureText(cause).width;
      g.fillStyle = 'rgba(8,12,16,0.5)';
      const kw = f.killer ? g.measureText(f.killer.name).width : 0;
      g.fillRect(x - vw - cw - kw - 24, y - 10, vw + cw + kw + 30, 20);
      this.text(f.victim.name, x, y, 14, vc, 'right');
      this.text(cause, x - vw - 8, y, 12, '#c9d3dc', 'right');
      if (f.killer) this.text(f.killer.name, x - vw - cw - 16, y, 14, kc, 'right');
      y += 22;
    }
    this.feed = this.feed.filter((f) => f.t > 0);
    g.globalAlpha = 1;
  }

  drawMarkers() {
    const game = this.game, p = game.player, g = this.g;
    const eye = p.eye(new THREE.Vector3());
    const def = p.weapon.def;
    const pt = {};
    for (const s of game.soldiers) {
      if (s === p || !s.alive) continue;
      const head = _v.set(0, 1.0, 0).applyQuaternion(s.quat).add(s.pos);
      this.project(head, pt);
      if (!pt.on) continue;
      const dist = s.pos.distanceTo(eye);
      if (s.team === p.team) {
        g.fillStyle = BLUE;
        g.beginPath(); g.moveTo(pt.x - 6, pt.y - 10); g.lineTo(pt.x + 6, pt.y - 10); g.lineTo(pt.x, pt.y - 2); g.fill();
        if (dist < 40) this.text(s.name, pt.x, pt.y - 18, 11, BLUE, 'center');
        continue;
      }
      if (!game.world.los(eye, s.pos)) continue;
      const c = this.project(s.pos, {});
      // lead indicator: where to aim so a round hits if the target does not accelerate.
      // Drawn small and fades out when it nearly overlaps the target itself.
      const rel = _v.subVectors(s.pos, eye), vRel = _v2.subVectors(s.vel, p.vel);
      const t = def.kind === 'rocket' ? interceptTimeRocket(rel, vRel, def.speed, def.accel, def.burn) : interceptTime(rel, vRel, def.speed);
      if (t > 0 && vRel.length() > 0.15) {
        const lp = this.project(_v3.copy(s.pos).addScaledVector(vRel, t), {});
        const sep = Math.hypot(lp.x - c.x, lp.y - c.y);
        const a = clamp((sep - 6) / 45, 0, 1) * 0.7;
        if (lp.on && a > 0.04) {
          g.strokeStyle = `rgba(255,110,90,${a})`; g.lineWidth = 1.2;
          const r = 4;
          g.beginPath(); g.moveTo(lp.x, lp.y - r); g.lineTo(lp.x + r, lp.y); g.lineTo(lp.x, lp.y + r); g.lineTo(lp.x - r, lp.y); g.closePath(); g.stroke();
          g.lineWidth = 1.5;
        }
      }
      const sz = clamp(500 / dist, 8, 60);
      if (dist < 120) this.text(`${dist.toFixed(0)}m`, c.x + sz * 0.6 + 4, c.y - sz * 0.6, 10, 'rgba(255,120,100,0.75)');
    }
  }

  drawVelocityMarkers() {
    const p = this.game.player, g = this.g;
    const ref = p.refTarget && p.refTarget.alive !== false ? p.refTarget.vel : null;
    const v = _v2.copy(p.vel); if (ref) v.sub(ref);
    const sp = v.length();
    if (sp < 0.05) return;
    const eye = p.eye(new THREE.Vector3());
    const pro = this.project(_v.copy(v).divideScalar(sp).multiplyScalar(200).add(eye), {});
    const retro = this.project(_v.copy(v).divideScalar(-sp).multiplyScalar(200).add(eye), {});
    const col = OK;
    if (pro.on) {
      g.strokeStyle = col; g.lineWidth = 2;
      g.beginPath(); g.arc(pro.x, pro.y, 8, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.moveTo(pro.x, pro.y - 8); g.lineTo(pro.x, pro.y - 15); g.moveTo(pro.x - 8, pro.y); g.lineTo(pro.x - 15, pro.y); g.moveTo(pro.x + 8, pro.y); g.lineTo(pro.x + 15, pro.y); g.stroke();
      g.fillStyle = col; g.beginPath(); g.arc(pro.x, pro.y, 2, 0, Math.PI * 2); g.fill();
      this.text(`${sp.toFixed(1)} m/s`, pro.x + 18, pro.y + 12, 12, col);
    }
    if (retro.on) {
      g.strokeStyle = '#d8b84a'; g.lineWidth = 2;
      g.beginPath(); g.arc(retro.x, retro.y, 8, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.moveTo(retro.x - 5, retro.y - 5); g.lineTo(retro.x + 5, retro.y + 5); g.moveTo(retro.x + 5, retro.y - 5); g.lineTo(retro.x - 5, retro.y + 5); g.stroke();
      g.beginPath(); g.moveTo(retro.x, retro.y - 8); g.lineTo(retro.x, retro.y - 15); g.stroke();
    }
    g.lineWidth = 1.5;
  }

  drawBounds(cx, cy) {
    const game = this.game, p = game.player, w = game.world;
    if (w.enclosed) return;
    const out = w.outside(p.pos);
    const near = Math.max(...[0, 1, 2].map((i) => Math.abs(p.pos.getComponent(i)) - w.bounds.max[i] + 15));
    if (out > 0) {
      const left = Math.max(0, 5 - p.oobT);
      this.text('LEAVING COMBAT AREA', cx, cy - 150, 24, (game.time * 3) % 1 < 0.6 ? DANGER : WARN, 'center', 700);
      this.text(left > 0 ? `Suit telemetry lost in ${left.toFixed(1)} s – turn back` : 'SUIT FAILING – RETURN TO THE COMBAT AREA', cx, cy - 126, 13, DANGER, 'center');
    } else if (near > 0) this.text('approaching combat-area edge', cx, cy - 150, 12, WARN, 'center');
  }

  drawCrosshair(cx, cy, dt) {
    const g = this.g, p = this.game.player;
    const enemy = this.aimInfo && this.aimInfo.soldier && this.aimInfo.soldier.team !== p.team;
    const col = enemy ? DANGER : '#e9f6ff';
    const sp = p.weapon.def.spread;
    const gap = 4 + Math.tan(sp) * this.H / (2 * Math.tan(this.game.camera.fov * Math.PI / 360)) + Math.abs(p.kick.x) * 400;
    g.strokeStyle = col; g.lineWidth = 2;
    g.beginPath();
    g.moveTo(cx - gap - 8, cy); g.lineTo(cx - gap, cy);
    g.moveTo(cx + gap, cy); g.lineTo(cx + gap + 8, cy);
    g.moveTo(cx, cy + gap); g.lineTo(cx, cy + gap + 8);
    g.moveTo(cx, cy - gap); g.lineTo(cx, cy - gap - 8);
    g.stroke();
    g.fillStyle = col; g.fillRect(cx - 1, cy - 1, 2, 2);
    if (this.hitT > 0) {
      this.hitT -= dt;
      g.strokeStyle = this.hitKill ? DANGER : this.hitHead ? WARN : '#ffffff'; g.lineWidth = this.hitKill ? 3 : 2;
      const a = 6, b = 13;
      g.beginPath();
      g.moveTo(cx - a, cy - a); g.lineTo(cx - b, cy - b); g.moveTo(cx + a, cy - a); g.lineTo(cx + b, cy - b);
      g.moveTo(cx - a, cy + a); g.lineTo(cx - b, cy + b); g.moveTo(cx + a, cy + a); g.lineTo(cx + b, cy + b);
      g.stroke();
    }
    g.lineWidth = 1.5;
  }

  drawRates(cx, cy) {
    // rotation-rate arcs around the reticle: yaw (top), pitch (right), roll (bottom)
    const g = this.g, w = this.game.player.angVel;
    const R = 58, max = 2.5;
    const arc = (center, rate, color, label) => {
      const span = clamp(rate / max, -1, 1) * (Math.PI / 3);
      g.strokeStyle = 'rgba(159,232,255,0.15)'; g.lineWidth = 3;
      g.beginPath(); g.arc(cx, cy, R, center - Math.PI / 3, center + Math.PI / 3); g.stroke();
      if (Math.abs(rate) > 0.02) {
        g.strokeStyle = Math.abs(rate) > 1.6 ? WARN : color; g.lineWidth = 3;
        g.beginPath(); g.arc(cx, cy, R, Math.min(center, center + span), Math.max(center, center + span)); g.stroke();
      }
      g.lineWidth = 1;
      const lx = cx + Math.cos(center) * (R + 10), ly = cy + Math.sin(center) * (R + 10);
      this.text(label, lx, ly, 9, 'rgba(159,232,255,0.6)', 'center');
    };
    arc(-Math.PI / 2, -w.y, HUD_C, 'Y');
    arc(0, -w.x, HUD_C, 'P');
    arc(Math.PI / 2, w.z, HUD_C, 'R');
  }

  computeAimInfo() {
    const game = this.game, p = game.player;
    const eye = p.eye(new THREE.Vector3()), dir = p.aimDir(new THREE.Vector3());
    const h = game.world.raycast(eye, dir, 400);
    let best = h ? h.t : 400, sol = null;
    for (const s of game.soldiers) {
      if (s === p || !s.alive) continue;
      const t = raySphere(eye, dir, s.pos, 0.75, best);
      if (t >= 0 && t < best) { best = t; sol = s; }
    }
    const info = { dist: best, soldier: sol, kind: sol ? 'soldier' : h ? h.kind : null, obj: sol || (h ? h.obj : null) };
    let refVel = _v.set(0, 0, 0);
    if (sol) refVel = sol.vel; else if (h && h.kind === 'pod') refVel = h.obj.vel;
    info.vRel = _v2.subVectors(p.vel, refVel).clone();
    info.closing = info.vRel.dot(dir);
    this.aimInfo = info;
    return info;
  }

  drawTargetInfo(cx, cy) {
    const info = this.computeAimInfo(), p = this.game.player;
    const y = cy + 80;
    if (info.dist >= 399) return;
    const label = info.soldier ? info.soldier.name : info.kind === 'pod' ? 'CARGO POD' : 'HULL';
    const col = info.soldier ? (info.soldier.team === p.team ? BLUE : DANGER) : HUD_C;
    this.text(`${label}  ${info.dist.toFixed(1)} m`, cx + 70, cy + 34, 12, col);
    const cl = info.closing;
    this.text(`Vrel ${info.vRel.length().toFixed(2)}  ${cl >= 0 ? 'CLOSING' : 'OPENING'} ${Math.abs(cl).toFixed(2)} m/s`, cx + 70, cy + 50, 11, 'rgba(159,232,255,0.8)');
    if (p.refTarget) this.text(`REF LOCK: ${p.refTarget.name || 'CARGO POD'}`, cx + 70, cy + 64, 10, WARN);
  }

  drawCollision(cx, cy, dt) {
    const game = this.game, p = game.player;
    if (p.grab) return;
    const sp = p.vel.length();
    if (sp < 1.5) return;
    const dir = _v.copy(p.vel).divideScalar(sp);
    const h = game.world.raycast(p.pos, dir, sp * 6, false);
    if (!h) return;
    const d = Math.max(0, h.t - BODY_R);
    const into = -p.vel.dot(h.n);
    if (into < 1.2) return;
    const tti = d / into;
    if (tti > 4) return;
    const danger = into > HIT_THRESH;
    const blink = danger && (game.time * 4) % 1 < 0.5;
    const col = danger ? DANGER : WARN;
    if (!blink) this.text(`COLLISION ${tti.toFixed(1)} s`, cx, cy - 110, 22, col, 'center', 700);
    this.text(danger ? `IMPACT ${into.toFixed(1)} m/s – BRAKE (${game.keyLabel('brake')}) OR GRAB` : `impact ${into.toFixed(1)} m/s`, cx, cy - 88, 12, col, 'center');
    this.collWarnT -= dt;
    if (danger && this.collWarnT <= 0) { game.audio.play('warn'); this.collWarnT = 0.5; }
  }

  bar(x, y, w, h, f, color, bg = 'rgba(255,255,255,0.08)') {
    const g = this.g;
    g.fillStyle = bg; g.fillRect(x, y, w, h);
    g.fillStyle = color; g.fillRect(x, y, w * clamp(f, 0, 1), h);
  }

  drawStatus() {
    const g = this.g, p = this.game.player, H = this.H;
    const x = 20, y = H - 150;
    g.fillStyle = 'rgba(8,12,16,0.55)'; g.fillRect(x - 8, y - 18, 250, 150);
    const dv = p.dv, frac = p.gas / GAS_MAX;
    this.text('Δv', x, y, 13, '#93a0ab');
    this.text(this.game.rules.infiniteGas ? '∞' : `${dv.toFixed(1)} m/s`, x + 26, y, 22, frac < 0.2 ? DANGER : '#e9eef2', 'left', 700);
    this.text(`N₂ ${p.gas.toFixed(2)} kg`, x + 150, y, 12, '#93a0ab');
    this.bar(x, y + 14, 230, 5, frac, frac < 0.2 ? DANGER : HUD_C);
    this.text('HP', x, y + 36, 13, '#93a0ab');
    this.text(`${Math.ceil(p.health)}`, x + 26, y + 36, 20, p.health < 35 ? DANGER : '#e9eef2', 'left', 700);
    this.bar(x + 70, y + 32, 160, 6, p.health / 100, p.health < 35 ? DANGER : OK);
    this.text('O₂', x, y + 58, 13, '#93a0ab');
    this.text(`${Math.ceil(p.o2)}%`, x + 26, y + 58, 16, p.o2 < 30 ? DANGER : '#e9eef2', 'left', 700);
    this.bar(x + 70, y + 55, 160, 5, p.o2 / 100, p.leaks.length ? WARN : '#8fb8ff');
    if (p.leaks.length) this.text(`SUIT BREACH ×${p.leaks.length} – VENTING`, x + 70, y + 68, 10, (this.game.time * 3) % 1 < 0.6 ? DANGER : WARN);
    this.text(`RCS: ${MODES[p.mode]}`, x, y + 88, 14, WARN, 'left', 700);
    this.text(`[${this.game.keyLabel('mode')}] cycle`, x + 140, y + 88, 10, '#93a0ab');
    const st = p.grab ? (p.grab.kind === 'pod' ? 'HOLDING POD' : 'ANCHORED') : p.ctrl.brake ? 'MATCHING VEL' : p.ctrl.killRot ? 'KILL ROTATION' : 'FREE FLIGHT';
    this.text(st, x, y + 108, 12, p.grab ? OK : HUD_C);
    const thr = p.throttle.reduce((a, b) => a + b, 0);
    if (thr > 0.05) this.text(`RCS FIRING ${thr.toFixed(1)}`, x + 120, y + 108, 11, '#cfe8ff');
  }

  drawSuit() {
    // suit integrity diagram: torso + 4 thruster quads, nozzle activity, leaks
    const g = this.g, p = this.game.player;
    const ox = 300, oy = this.H - 80, s = 55;
    g.fillStyle = 'rgba(8,12,16,0.55)'; g.fillRect(ox - 62, oy - 70, 124, 140);
    this.text('SUIT', ox, oy - 58, 10, '#93a0ab', 'center');
    g.strokeStyle = 'rgba(159,232,255,0.5)'; g.lineWidth = 1.5;
    g.strokeRect(ox - 14, oy - 30, 28, 40);
    g.beginPath(); g.arc(ox, oy - 40, 9, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.moveTo(ox - 8, oy + 10); g.lineTo(ox - 10, oy + 42); g.moveTo(ox + 8, oy + 10); g.lineTo(ox + 10, oy + 42); g.stroke();
    TOWERS.forEach((t, i) => {
      const st = p.towers[i];
      const x = ox + t.pos.x * s * 1.6, y = oy - 10 - t.pos.y * s * 0.9;
      const f = st.hp / 30;
      const col = st.dead ? '#555' : f > 0.6 ? OK : f > 0.3 ? WARN : DANGER;
      g.fillStyle = col; g.fillRect(x - 6, y - 6, 12, 12);
      if (st.dead) { g.strokeStyle = DANGER; g.beginPath(); g.moveTo(x - 7, y - 7); g.lineTo(x + 7, y + 7); g.moveTo(x + 7, y - 7); g.lineTo(x - 7, y + 7); g.stroke(); g.strokeStyle = 'rgba(159,232,255,0.5)'; }
      let act = 0; for (let k = 0; k < 6; k++) act += p.throttle[i * 6 + k];
      if (act > 0.05) { g.strokeStyle = '#cfe8ff'; g.beginPath(); g.arc(x, y, 9 + act * 2, 0, Math.PI * 2); g.stroke(); g.strokeStyle = 'rgba(159,232,255,0.5)'; }
    });
    for (const lk of p.leaks) {
      const x = ox + lk.p.x * s * 1.6, y = oy - 10 - lk.p.y * s * 0.9;
      g.fillStyle = (this.game.time * 5) % 1 < 0.5 ? DANGER : '#fff';
      g.beginPath(); g.arc(x, y, 3, 0, Math.PI * 2); g.fill();
    }
    g.lineWidth = 1.5;
  }

  drawWeapon() {
    const g = this.g, p = this.game.player, W = this.W, H = this.H;
    const w = p.weapon;
    const x = W - 20, y = H - 110;
    g.fillStyle = 'rgba(8,12,16,0.55)'; g.fillRect(x - 240, y - 50, 248, 148);
    this.text(w.def.name, x, y, 14, '#e9eef2', 'right', 700);
    if (w.def.kind === 'beam') {
      this.text(w.overheat ? 'OVERHEAT' : 'HEAT', x - 170, y + 30, 12, w.overheat ? DANGER : '#93a0ab');
      this.bar(x - 170, y + 40, 165, 6, w.heat, w.overheat ? DANGER : w.heat > 0.7 ? WARN : HUD_C);
    } else {
      this.text(`${w.mag}`, x - 60, y + 34, 38, w.mag === 0 ? DANGER : '#e9eef2', 'right', 700);
      this.text(`/ ${w.reserve}`, x, y + 38, 18, '#93a0ab', 'right');
    }
    if (w.reloadT > 0) {
      this.text('RELOADING', x - 120, y + 64, 12, WARN, 'center');
      this.bar(x - 200, y + 74, 160, 3, 1 - w.reloadT / w.def.reload, WARN);
    }
    this.text(`GRENADES ${'●'.repeat(p.grenades)}${'○'.repeat(Math.max(0, 2 - p.grenades))}`, x, y + 88, 12, '#93a0ab', 'right');
    const names = p.weapons.map((ws, i) => `${this.game.keyLabel('weapon' + (i + 1))} ${ws.def.short}`);
    names.forEach((n, i) => this.text(n, x - 232 + i * 100, y - 36, 12, i === p.cur ? WARN : '#8a96a0', 'left', 700));
  }

  drawDamage(cx, cy, dt) {
    const g = this.g, p = this.game.player;
    const inv = _q.copy(this.game.camera.quaternion).invert();
    for (const d of this.dmgDirs) {
      d.t -= dt;
      const rel = _v.subVectors(d.pos, p.pos).applyQuaternion(inv);
      const ang = Math.atan2(rel.z - rel.y, rel.x);
      g.strokeStyle = `rgba(255,60,40,${clamp(d.t, 0, 1) * 0.9})`; g.lineWidth = 5;
      g.beginPath(); g.arc(cx, cy, 120, ang - 0.25, ang + 0.25); g.stroke();
    }
    this.dmgDirs = this.dmgDirs.filter((d) => d.t > 0);
    g.lineWidth = 1.5;
    if (p.health < 35) {
      const grd = g.createRadialGradient(cx, cy, Math.min(cx, cy) * 0.6, cx, cy, Math.max(cx, cy) * 1.2);
      grd.addColorStop(0, 'rgba(120,0,0,0)'); grd.addColorStop(1, `rgba(140,0,0,${0.5 * (1 - p.health / 35)})`);
      g.fillStyle = grd; g.fillRect(0, 0, this.W, this.H);
    }
  }

  drawHints(cx, cy) {
    const game = this.game, p = game.player;
    if (p.grab) {
      const c = p.pushCharge;
      this.text(c > 0 ? `PUSH ${(2 + 5 * c).toFixed(1)} m/s` : `HOLD ${game.keyLabel('up')}: PUSH OFF TOWARDS AIM   ${game.keyLabel('grab')}: RELEASE`, cx, cy + 120, 13, OK, 'center', 700);
      if (p.grab.kind !== 'pod' && !c) this.text('MOVE KEYS: CRAWL ALONG THE SURFACE (NO GAS)', cx, cy + 138, 11, OK, 'center');
      if (p.grab.kind === 'pod' && !c) this.text(`MOVE KEYS: HAUL POD (${(p.mass + p.grab.obj.mass).toFixed(0)} kg combined)`, cx, cy + 138, 11, OK, 'center');
      if (c > 0) this.bar(cx - 80, cy + 132, 160, 4, c, OK);
    } else {
      const s = game.world.nearestSurface(p.pos, BODY_R + 0.85);
      if (s) {
        const ref = s.kind === 'pod' ? s.obj.vel : null;
        const rv = ref ? _v.subVectors(p.vel, ref).length() : p.vel.length();
        this.text(rv > 4.5 ? `TOO FAST TO GRAB (${rv.toFixed(1)} m/s)` : `[${game.keyLabel('grab')}] GRAB`, cx, cy + 120, 13, rv > 4.5 ? DANGER : OK, 'center', 700);
      }
    }
  }

  drawMessages(cx, dt) {
    let y = this.H * 0.3;
    for (const m of this.msgs) {
      m.t -= dt;
      this.g.globalAlpha = clamp(m.t / 0.4, 0, 1);
      this.text(m.text, cx, y, m.big ? 30 : 18, m.color, 'center', 700);
      y += m.big ? 38 : 26;
    }
    this.g.globalAlpha = 1;
    this.msgs = this.msgs.filter((m) => m.t > 0);
  }

  drawDeath(cx, cy) {
    const game = this.game, p = game.player;
    this.g.fillStyle = 'rgba(40,0,0,0.25)'; this.g.fillRect(0, 0, this.W, this.H);
    this.text('ELIMINATED', cx, cy - 40, 40, DANGER, 'center', 700);
    if (p.killedBy) this.text(`by ${p.killedBy.name} (${p.killCause})`, cx, cy, 18, '#e9eef2', 'center');
    else this.text(`(${p.killCause || 'environment'})`, cx, cy, 18, '#e9eef2', 'center');
    this.text(`Redeploying in ${Math.max(0, p.respawnT).toFixed(1)} s`, cx, cy + 34, 16, '#93a0ab', 'center');
  }
}
