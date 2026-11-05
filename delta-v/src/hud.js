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
    this.disp = "'Orbitron','Rajdhani','Bahnschrift',sans-serif";
    this.resize();
  }

  setQuality(g) { this.glow = (g.bloom || 0) > 0; }

  /** Glass plate with clipped top-left / bottom-right corners (the HUD's basic shape). */
  plate(x, y, w, h, c = 8, fill = 'rgba(6,10,16,0.62)', stroke = 'rgba(159,232,255,0.18)') {
    const g = this.g;
    g.beginPath();
    g.moveTo(x + c, y); g.lineTo(x + w, y); g.lineTo(x + w, y + h - c); g.lineTo(x + w - c, y + h); g.lineTo(x, y + h); g.lineTo(x, y + c); g.closePath();
    if (fill) { g.fillStyle = fill; g.fill(); }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = 1; g.stroke(); }
  }

  spaced(t, x, y, size, color, align = 'left', weight = 700, spacing = 2, font = null) {
    const g = this.g;
    g.font = `${weight} ${size}px ${font || this.font}`;
    if ('letterSpacing' in g) g.letterSpacing = spacing + 'px';
    g.textAlign = align; g.fillStyle = color;
    g.fillText(t, x, y);
    if ('letterSpacing' in g) g.letterSpacing = '0px';
  }

  num(t, x, y, size, color, align = 'left') {
    const g = this.g;
    if (this.glow) { g.shadowColor = color; g.shadowBlur = 8; }
    this.spaced(t, x, y, size, color, align, 800, 1, this.disp);
    g.shadowBlur = 0;
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

  hit(head, kill) { this.hitT = kill ? 0.5 : 0.28; this.hitDur = this.hitT; this.hitHead = head; this.hitKill = kill; }

  /** Floating damage numbers; rapid hits on the same target stack into one number. */
  damageNumber(target, point, amount, head, kill) {
    this.nums = this.nums || [];
    const t = this.game.time;
    let n = this.nums.find((x) => x.target === target && t - x.born < 0.5 && !x.kill);
    if (!n) { n = { target, pos: point.clone(), amount: 0, born: t, life: 1.1, jitter: (Math.random() - 0.5) * 30 }; this.nums.push(n); }
    n.amount += amount; n.head = n.head || head; n.kill = kill; n.life = 1.1; n.pos.copy(point); n.pop = 1;
    if (this.nums.length > 12) this.nums.shift();
  }

  drawNumbers(dt) {
    if (!this.nums || !this.nums.length) return;
    const g = this.g;
    for (const n of this.nums) {
      n.life -= dt; n.pop = Math.max(0, (n.pop || 0) - dt * 5);
      const pt = this.project(n.pos, {});
      if (!pt.on) continue;
      const age = 1.1 - n.life;
      const a = clamp(n.life / 0.4, 0, 1);
      g.globalAlpha = a;
      const size = (n.kill ? 22 : n.head ? 19 : 15) * (1 + n.pop * 0.35);
      const col = n.kill ? DANGER : n.head ? WARN : '#ffffff';
      g.font = `700 ${size}px ${this.font}`; g.textAlign = 'center';
      g.lineWidth = 3; g.strokeStyle = 'rgba(0,0,0,0.6)';
      const x = pt.x + n.jitter, y = pt.y - 26 - age * 34;
      const txt = Math.round(n.amount) + (n.kill ? ' ✕' : '');
      g.strokeText(txt, x, y); g.fillStyle = col; g.fillText(txt, x, y);
    }
    g.globalAlpha = 1; g.lineWidth = 1.5;
    this.nums = this.nums.filter((n) => n.life > 0);
  }

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
    this.drawRoom();
    if (!p) return;
    if (p.alive) {
      if (game.showGrid || p.angVel.length() > 1.4) { /* grid drawn in 3D */ }
      if (game.scoped) this.drawScope(cx, cy);
      this.drawMarkers();
      this.drawVelocityMarkers();
      this.drawCrosshair(cx, cy, dt);
      this.drawNumbers(dt);
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
    if (game.state === 'ending') this.drawEnding(cx, cy);
  }

  drawScore() {
    const g = this.g, game = this.game, cx = this.W / 2;
    const sc = game.teamScore, lim = game.scoreLimit;
    const y = 14, h = 40;
    // team plates
    for (const [team, dir] of [[0, -1], [1, 1]]) {
      const col = team === 0 ? BLUE : ORANGE;
      const x = dir < 0 ? cx - 70 - 120 : cx + 70;
      this.plate(x, y, 120, h, 8, 'rgba(6,10,16,0.6)', null);
      g.fillStyle = col; g.globalAlpha = 0.85;
      g.fillRect(dir < 0 ? x : x + 116, y, 4, h);
      g.globalAlpha = 1;
      // label in the outer corner, score toward the timer
      this.spaced(TEAM_NAMES[team], dir < 0 ? x + 12 : x + 108, y + 12, 8, 'rgba(233,238,242,0.65)', dir < 0 ? 'left' : 'right', 700, 3);
      this.num(String(sc[team]), dir < 0 ? x + 106 : x + 14, y + 25, 22, col, dir < 0 ? 'right' : 'left');
      // progress to the score limit
      const f = clamp(sc[team] / lim, 0, 1);
      g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(x, y + h + 4, 120, 3);
      g.fillStyle = col; g.fillRect(dir < 0 ? x + 120 * (1 - f) : x, y + h + 4, 120 * f, 3);
    }
    // timer capsule
    this.plate(cx - 64, y - 2, 128, h + 4, 10, 'rgba(10,16,24,0.78)', 'rgba(159,232,255,0.28)');
    const tl = Math.max(0, game.timeLimit - game.matchTime);
    const mm = Math.floor(tl / 60), ss = Math.floor(tl % 60);
    this.num(`${mm}:${ss.toString().padStart(2, '0')}`, cx, y + 16, 18, tl < 60 ? WARN : '#e9eef2', 'center');
    this.spaced(`FIRST TO ${lim}`, cx, y + 33, 9, '#8996a1', 'center', 700, 3);
  }

  drawRoom() {
    const net = this.game.net;
    if (!net.active || !net.room) return;
    const humans = this.game.soldiers.filter((s) => s.isPlayer || s.remote || (s.netRemote && !/·BOT$/.test(s.name))).length;
    const label = `${net.isHost ? 'HOSTING' : 'ONLINE'} · ROOM ${net.room}`;
    this.plate(18, 14, 210, 24, 6, 'rgba(6,10,16,0.6)', 'rgba(159,232,255,0.3)');
    this.spaced(label, 28, 27, 11, '#9fe8ff', 'left', 700, 2);
    this.spaced(net.isHost ? `${net.clients.size + 1} HUMANS` : '', 220, 27, 9, '#8996a1', 'right', 700, 1);
    void humans;
  }

  drawFeed(dt) {
    const g = this.g;
    let y = 74;
    for (const f of this.feed) {
      f.t -= dt;
      g.globalAlpha = clamp(f.t, 0, 1);
      const kc = f.killer ? css(TEAM_COLORS[f.killer.team]) : '#c9d3dc';
      const vc = css(TEAM_COLORS[f.victim.team]);
      const tag = f.cause.toUpperCase();
      g.font = `700 14px ${this.font}`;
      const vw = g.measureText(f.victim.name).width, kw = f.killer ? g.measureText(f.killer.name).width : 0;
      g.font = `700 10px ${this.font}`;
      const tw = g.measureText(tag).width + 14 + (f.head ? 14 : 0);
      const w = vw + kw + tw + 34, x = this.W - 18 - w;
      const mine = (f.killer && f.killer.isPlayer) || f.victim.isPlayer;
      this.plate(x, y - 11, w, 22, 6, mine ? 'rgba(255,204,77,0.14)' : 'rgba(6,10,16,0.6)', mine ? 'rgba(255,204,77,0.45)' : null);
      let cx = x + 10;
      if (f.killer) { this.spaced(f.killer.name, cx, y + 1, 14, kc, 'left', 700, 0.5); cx += kw + 8; }
      g.fillStyle = 'rgba(233,238,242,0.12)'; g.fillRect(cx, y - 7, tw, 14);
      this.spaced(tag, cx + 7, y + 1, 10, '#dfe6ec', 'left', 700, 1.5);
      if (f.head) { g.strokeStyle = WARN; g.lineWidth = 1.5; g.beginPath(); g.arc(cx + tw - 9, y, 4, 0, Math.PI * 2); g.stroke(); g.fillStyle = WARN; g.fillRect(cx + tw - 10, y - 1, 2, 2); }
      cx += tw + 8;
      this.spaced(f.victim.name, cx, y + 1, 14, vc, 'left', 700, 0.5);
      y += 26;
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
      // Drawn small; always shown, even when it nearly overlaps the target.
      const rel = _v.subVectors(s.pos, eye), vRel = _v2.subVectors(s.vel, p.vel);
      const t = def.kind === 'rocket' ? interceptTimeRocket(rel, vRel, def.speed, def.accel, def.burn) : interceptTime(rel, vRel, def.speed);
      if (t > 0 && vRel.length() > 0.15) {
        const lp = this.project(_v3.copy(s.pos).addScaledVector(vRel, t), {});
        const a = 0.75;
        if (lp.on) {
          g.strokeStyle = `rgba(255,110,90,${a})`; g.lineWidth = 1.2;
          const r = 4;
          g.beginPath(); g.moveTo(lp.x, lp.y - r); g.lineTo(lp.x + r, lp.y); g.lineTo(lp.x, lp.y + r); g.lineTo(lp.x - r, lp.y); g.closePath(); g.stroke();
          g.lineWidth = 1.5;
        }
      }
      const sz = clamp(500 / dist, 8, 60);
      // guided weapon: show which target the round would track
      if (def.homing) {
        const ad = p.aimDir(_v2);
        const toE = _v3.subVectors(s.pos, eye).normalize();
        if (Math.acos(clamp(ad.dot(toE), -1, 1)) < def.homing.cone) {
          const r = sz * 0.9 + 6;
          g.strokeStyle = WARN; g.lineWidth = 1.5;
          for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
            g.beginPath(); g.moveTo(c.x + sx * r, c.y + sy * (r - 6)); g.lineTo(c.x + sx * r, c.y + sy * r); g.lineTo(c.x + sx * (r - 6), c.y + sy * r); g.stroke();
          }
          this.spaced('TRACK', c.x, c.y + r + 12, 9, WARN, 'center', 700, 2);
        }
      }
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

  /** Full-screen optic for scoped weapons: masked window, thin frame, plain crosshair. */
  drawScope(cx, cy) {
    const g = this.g, p = this.game.player, W = this.W, H = this.H;
    const S = Math.min(W, H) * 0.86, r = S * 0.12;
    const x0 = cx - S / 2, y0 = cy - S / 2;
    const round = (x, y, w, h, rr) => { g.moveTo(x + rr, y); g.arcTo(x + w, y, x + w, y + h, rr); g.arcTo(x + w, y + h, x, y + h, rr); g.arcTo(x, y + h, x, y, rr); g.arcTo(x, y, x + w, y, rr); g.closePath(); };
    g.beginPath(); g.rect(0, 0, W, H); round(x0, y0, S, S, r);
    g.fillStyle = 'rgba(2,4,8,0.94)'; g.fill('evenodd');
    const vg = g.createRadialGradient(cx, cy, S * 0.3, cx, cy, S * 0.72);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,10,20,0.55)');
    g.save(); g.beginPath(); round(x0, y0, S, S, r); g.clip(); g.fillStyle = vg; g.fillRect(x0, y0, S, S); g.restore();
    g.strokeStyle = 'rgba(159,232,255,0.55)'; g.lineWidth = 2; g.beginPath(); round(x0, y0, S, S, r); g.stroke();
    g.strokeStyle = 'rgba(159,232,255,0.25)'; g.lineWidth = 1; g.beginPath(); round(x0 + 10, y0 + 10, S - 20, S - 20, r * 0.85); g.stroke();
    // reticle: thin lines with an open centre and a dot
    const col = 'rgba(255,70,50,0.95)', gap = 14, len = S * 0.42;
    g.strokeStyle = col; g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(cx - len, cy); g.lineTo(cx - gap, cy); g.moveTo(cx + gap, cy); g.lineTo(cx + len, cy);
    g.moveTo(cx, cy - len); g.lineTo(cx, cy - gap); g.moveTo(cx, cy + gap); g.lineTo(cx, cy + len);
    g.stroke();
    g.lineWidth = 3; g.beginPath(); g.moveTo(cx - len, cy); g.lineTo(cx - len * 0.7, cy); g.moveTo(cx + len * 0.7, cy); g.lineTo(cx + len, cy); g.moveTo(cx, cy + len * 0.7); g.lineTo(cx, cy + len); g.stroke();
    g.fillStyle = col; g.beginPath(); g.arc(cx, cy, 1.8, 0, Math.PI * 2); g.fill();
    // readouts along the bottom edge of the optic
    const info = this.aimInfo, ud = this.game.vmGuns[p.weapon.def.id].userData;
    this.spaced(`${(ud.zoom || 1).toFixed(1)}×`, x0 + 28, y0 + S - 26, 13, '#9fe8ff', 'left', 700, 2, this.disp);
    if (info && info.dist < 399) this.spaced(`${info.dist.toFixed(0)} m`, x0 + S - 28, y0 + S - 26, 13, '#9fe8ff', 'right', 700, 2, this.disp);
    if (p.weapon.def.homing) this.spaced('GUIDED HE', cx, y0 + S - 26, 11, WARN, 'center', 700, 3);
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
    const sp = this.game.combat.spreadOf(p, p.weapon.def);
    const gap = 4 + Math.tan(sp) * this.H / (2 * Math.tan(this.game.camera.fov * Math.PI / 360)) + Math.abs(p.kick.x) * 400;
    const vis = 1 - clamp((p.adsAmt - 0.35) / 0.3, 0, 1); // the sight's own reticle takes over when aiming
    if (vis > 0.02) {
      g.globalAlpha = vis;
      g.strokeStyle = 'rgba(0,0,0,0.45)'; g.lineWidth = 4;
      const lines = () => { g.beginPath(); g.moveTo(cx - gap - 8, cy); g.lineTo(cx - gap, cy); g.moveTo(cx + gap, cy); g.lineTo(cx + gap + 8, cy); g.moveTo(cx, cy + gap); g.lineTo(cx, cy + gap + 8); g.moveTo(cx, cy - gap); g.lineTo(cx, cy - gap - 8); g.stroke(); };
      lines();
      g.strokeStyle = col; g.lineWidth = 2; lines();
      g.fillStyle = col; g.fillRect(cx - 1, cy - 1, 2, 2);
      g.globalAlpha = 1;
    }
    if (this.hitT > 0) {
      // hitmarker: pops out and fades; yellow for headshots, red ring for kills
      this.hitT -= dt;
      const k = this.hitT / this.hitDur;
      const pop = 1 + (1 - k) * 0.5;
      const col2 = this.hitKill ? DANGER : this.hitHead ? WARN : '#ffffff';
      const a = 5 * pop, b = (this.hitKill ? 17 : 12) * pop;
      g.globalAlpha = clamp(k * 1.6, 0, 1);
      g.lineCap = 'round';
      g.strokeStyle = 'rgba(0,0,0,0.55)'; g.lineWidth = this.hitKill ? 6 : 5;
      const x = () => { g.beginPath(); g.moveTo(cx - a, cy - a); g.lineTo(cx - b, cy - b); g.moveTo(cx + a, cy - a); g.lineTo(cx + b, cy - b); g.moveTo(cx - a, cy + a); g.lineTo(cx - b, cy + b); g.moveTo(cx + a, cy + a); g.lineTo(cx + b, cy + b); g.stroke(); };
      x();
      g.strokeStyle = col2; g.lineWidth = this.hitKill ? 3.5 : 2.5; x();
      if (this.hitKill) { g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, b + 6, 0, Math.PI * 2); g.stroke(); }
      g.globalAlpha = 1; g.lineCap = 'butt';
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
    if (p.grab || p.walking) return;
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
    const g = this.g, p = this.game.player, H = this.H, game = this.game;
    const x = 22, y = H - 128, w = 420, h = 106;
    this.plate(x, y, w, h, 12);
    // delta-v ring gauge
    const gx = x + 52, gy = y + 54, r = 34, frac = p.gas / GAS_MAX;
    g.lineWidth = 6; g.strokeStyle = 'rgba(255,255,255,0.08)';
    g.beginPath(); g.arc(gx, gy, r, Math.PI * 0.75, Math.PI * 2.25); g.stroke();
    const col = game.rules.infiniteGas ? HUD_C : frac < 0.2 ? DANGER : frac < 0.4 ? WARN : HUD_C;
    g.strokeStyle = col;
    if (this.glow) { g.shadowColor = col; g.shadowBlur = 10; }
    g.beginPath(); g.arc(gx, gy, r, Math.PI * 0.75, Math.PI * (0.75 + 1.5 * (game.rules.infiniteGas ? 1 : frac))); g.stroke();
    g.shadowBlur = 0;
    this.num(game.rules.infiniteGas ? '∞' : p.dv.toFixed(0), gx, gy - 2, 20, '#e9eef2', 'center');
    this.spaced('Δv m/s', gx, gy + 16, 9, '#8996a1', 'center', 700, 1.5);
    this.spaced(`N₂ ${p.gas.toFixed(1)}`, gx, gy + 36, 9, '#8996a1', 'center', 700, 1);
    // health: big number + 10 segments
    const hx = x + 104;
    const hc = p.health < 35 ? DANGER : p.health < 60 ? WARN : '#e9eef2';
    this.num(String(Math.ceil(p.health)), hx, y + 30, 28, hc);
    this.spaced('HEALTH', hx + 62, y + 24, 9, '#8996a1', 'left', 700, 3);
    for (let i = 0; i < 10; i++) {
      const on = p.health > i * 10 + 0.5;
      g.fillStyle = on ? (p.health < 35 ? DANGER : OK) : 'rgba(255,255,255,0.08)';
      g.fillRect(hx + i * 15, y + 48, 12, 6);
    }
    // oxygen
    this.spaced('O₂', hx, y + 72, 10, '#8996a1', 'left', 700, 2);
    this.bar(hx + 24, y + 68, 100, 4, p.o2 / 100, p.leaks.length ? WARN : '#8fb8ff');
    this.spaced(`${Math.ceil(p.o2)}%`, hx + 150, y + 72, 11, p.o2 < 30 ? DANGER : '#c9d3dc', 'right', 700, 1);
    if (p.leaks.length) this.spaced(`BREACH ×${p.leaks.length}`, hx, y + 90, 10, (game.time * 3) % 1 < 0.6 ? DANGER : WARN, 'left', 700, 2);
    else {
      const st = p.walking ? 'WALKING · RCS OFF' : p.grab ? (p.grab.kind === 'pod' ? 'HOLDING POD' : 'ANCHORED') : p.ctrl.brake ? 'MATCHING VEL' : p.ctrl.killRot ? 'KILL ROTATION' : 'FREE FLIGHT';
      this.spaced(st, hx, y + 90, 10, p.grab || p.walking ? OK : 'rgba(159,232,255,0.75)', 'left', 700, 2);
      if (game.world.omega) {
        const gl = game.world.gravityAt(p.pos, _v).length() / 9.81;
        this.spaced(`${gl.toFixed(2)} g`, hx + 150, y + 90, 10, '#9fe8ff', 'right', 700, 1.5);
      }
    }
    // RCS mode chip above the cluster
    const mode = `RCS · ${MODES[p.mode]}`;
    g.font = `700 11px ${this.font}`;
    const mw = g.measureText(mode).width + 40;
    this.plate(x, y - 28, mw, 22, 6, 'rgba(255,204,77,0.12)', 'rgba(255,204,77,0.4)');
    this.spaced(mode, x + 10, y - 16, 11, WARN, 'left', 700, 2);
    this.spaced(this.game.keyLabel('mode'), x + mw - 8, y - 16, 9, 'rgba(255,204,77,0.7)', 'right', 700, 1);
    const thr = p.throttle.reduce((a, b) => a + b, 0);
    if (thr > 0.05) {
      this.plate(x + mw + 6, y - 28, 92, 22, 6, 'rgba(159,232,255,0.1)', 'rgba(159,232,255,0.3)');
      this.spaced(`RCS ${thr.toFixed(1)}`, x + mw + 16, y - 16, 11, '#cfe8ff', 'left', 700, 2);
    }
  }

  drawSuit() {
    // suit & RCS schematic (front view): silhouette, four thruster quads with all six nozzles, leaks
    const g = this.g, p = this.game.player, t = this.game.time;
    const ox = 372, oy = this.H - 74, k = 46;
    const P = (x, y) => [ox + x * k, oy - y * k];
    const line = 'rgba(159,232,255,0.55)', faint = 'rgba(159,232,255,0.18)';
    g.lineWidth = 1.2;
    // life-support pack behind the torso
    g.strokeStyle = faint; g.setLineDash([3, 3]);
    let [x, y] = P(-0.3, 0.5); g.strokeRect(x, y, 0.6 * k, 0.75 * k);
    g.setLineDash([]);
    // torso, collar, belt
    g.strokeStyle = line; g.fillStyle = 'rgba(159,232,255,0.06)';
    [x, y] = P(-0.25, 0.46); g.beginPath(); g.roundRect ? g.roundRect(x, y, 0.5 * k, 0.62 * k, 6) : g.rect(x, y, 0.5 * k, 0.62 * k); g.fill(); g.stroke();
    [x, y] = P(-0.26, -0.08); g.strokeRect(x, y, 0.52 * k, 0.1 * k);
    // helmet with visor
    [x, y] = P(0, 0.62); g.beginPath(); g.arc(x, y, 0.2 * k, 0, Math.PI * 2); g.stroke();
    g.fillStyle = 'rgba(255,204,77,0.25)'; g.beginPath(); g.ellipse(x, y + 1, 0.14 * k, 0.09 * k, 0, 0, Math.PI * 2); g.fill();
    // arms and legs
    g.strokeStyle = line; g.lineWidth = 3; g.lineCap = 'round';
    const seg = (a, b) => { const [x1, y1] = P(a[0], a[1]); const [x2, y2] = P(b[0], b[1]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); };
    seg([-0.29, 0.4], [-0.36, 0.08]); seg([-0.36, 0.08], [-0.3, -0.18]);
    seg([0.29, 0.4], [0.36, 0.08]); seg([0.36, 0.08], [0.3, -0.18]);
    seg([-0.14, -0.2], [-0.16, -0.62]); seg([-0.16, -0.62], [-0.14, -0.98]);
    seg([0.14, -0.2], [0.16, -0.62]); seg([0.16, -0.62], [0.14, -0.98]);
    g.lineWidth = 1.2; g.lineCap = 'butt';
    // thruster quads
    let hpSum = 0, thrSum = 0;
    TOWERS.forEach((tw, i) => {
      const st = p.towers[i];
      hpSum += st.hp;
      const [cx, cy] = P(tw.pos.x * 1.25, tw.pos.y * 0.95);
      const f = st.hp / 30;
      const col = st.dead ? '#4a4f55' : f > 0.6 ? OK : f > 0.3 ? WARN : DANGER;
      g.fillStyle = 'rgba(6,10,16,0.9)'; g.fillRect(cx - 7, cy - 7, 14, 14);
      g.strokeStyle = col; g.lineWidth = 1.5; g.strokeRect(cx - 7, cy - 7, 14, 14);
      g.fillStyle = col; g.globalAlpha = 0.25; g.fillRect(cx - 7, cy + 7 - 14 * f, 14, 14 * f); g.globalAlpha = 1;
      // plenum pressure gauge beside the quad (outer side)
      const px = cx + (tw.pos.x < 0 ? -17 : 14), pr = st.press == null ? 1 : st.press;
      g.fillStyle = 'rgba(255,255,255,0.1)'; g.fillRect(px, cy - 7, 3, 14);
      g.fillStyle = pr > 0.5 ? HUD_C : pr > 0.2 ? WARN : DANGER; g.fillRect(px, cy + 7 - 14 * pr, 3, 14 * pr);
      if (st.dead) {
        g.strokeStyle = DANGER; g.beginPath(); g.moveTo(cx - 6, cy - 6); g.lineTo(cx + 6, cy + 6); g.moveTo(cx + 6, cy - 6); g.lineTo(cx - 6, cy + 6); g.stroke();
        return;
      }
      // nozzles: k=0..5 push +x,-x,+y,-y,+z,-z; exhaust leaves the opposite side, so light that side
      const th = (n) => p.throttle[i * 6 + n];
      const tri = (dx, dy, v) => {
        const bx = cx - dx * 10, by = cy + dy * 10; // exhaust side
        g.fillStyle = v > 0.03 ? `rgba(207,232,255,${0.35 + 0.65 * v})` : 'rgba(159,232,255,0.12)';
        g.beginPath();
        if (dx) { g.moveTo(bx, by); g.lineTo(bx - dx * 5, by - 4); g.lineTo(bx - dx * 5, by + 4); }
        else { g.moveTo(bx, by); g.lineTo(bx - 4, by + dy * 5); g.lineTo(bx + 4, by + dy * 5); }
        g.closePath(); g.fill();
        thrSum += v;
      };
      tri(1, 0, th(0)); tri(-1, 0, th(1)); tri(0, 1, th(2)); tri(0, -1, th(3));
      // fore/aft nozzles shown in the centre: ring = aft-firing (pushes forward), dot = fore-firing
      const fwd = th(5), back = th(4);
      thrSum += fwd + back;
      if (fwd > 0.03) { g.strokeStyle = `rgba(207,232,255,${0.4 + 0.6 * fwd})`; g.beginPath(); g.arc(cx, cy, 3.5, 0, Math.PI * 2); g.stroke(); }
      if (back > 0.03) { g.fillStyle = `rgba(207,232,255,${0.4 + 0.6 * back})`; g.beginPath(); g.arc(cx, cy, 2, 0, Math.PI * 2); g.fill(); }
    });
    // suit breaches venting
    for (const lk of p.leaks) {
      const [lx, ly] = P(lk.p.x * 1.25, lk.p.y * 0.95);
      const pulse = 0.5 + 0.5 * Math.sin(t * 12);
      g.fillStyle = DANGER; g.beginPath(); g.arc(lx, ly, 2.5 + pulse * 1.5, 0, Math.PI * 2); g.fill();
      g.strokeStyle = `rgba(255,255,255,${0.3 + 0.5 * pulse})`; g.beginPath(); g.moveTo(lx, ly); g.lineTo(lx + lk.n.x * 12, ly - lk.n.y * 12); g.stroke();
    }
    // readouts
    const integ = Math.round(hpSum / 120 * 100);
    this.spaced('SUIT / RCS', ox, oy - 56, 9, '#8996a1', 'center', 700, 3);
    this.spaced(`QUADS ${integ}%`, ox - 50, oy + 52, 9, integ > 60 ? '#8996a1' : WARN, 'left', 700, 1.5);
    this.spaced(`RCS ${Math.round(Math.min(1, thrSum / 8) * 100)}%`, ox + 50, oy + 52, 9, thrSum > 0.1 ? '#cfe8ff' : '#8996a1', 'right', 700, 1.5);
    g.lineWidth = 1.5;
  }

  /** End-of-match banner during the slow-motion outro. */
  drawEnding(cx, cy) {
    const game = this.game, g = this.g, tt = game.endT || 0;
    const won = game.endWon;
    const title = won === 0 ? 'VICTORY' : won === 1 ? 'DEFEAT' : 'DRAW';
    const col = won === 0 ? BLUE : won === 1 ? ORANGE : '#e9eef2';
    g.fillStyle = `rgba(2,4,9,${Math.min(0.75, tt * 0.3)})`; g.fillRect(0, 0, this.W, this.H);
    const a = clamp((tt - 0.3) / 0.5, 0, 1);
    const w = this.W * Math.min(1, tt * 0.8);
    g.fillStyle = 'rgba(6,10,16,0.75)'; g.fillRect(cx - w / 2, cy - 60, w, 120);
    g.fillStyle = col; g.fillRect(cx - w / 2, cy - 60, w, 2); g.fillRect(cx - w / 2, cy + 58, w, 2);
    g.globalAlpha = a;
    const spacing = 30 - 18 * a;
    if (this.glow) { g.shadowColor = col; g.shadowBlur = 24; }
    this.spaced(title, cx, cy - 6, 64, col, 'center', 800, spacing, this.disp);
    g.shadowBlur = 0;
    this.spaced(`BLUE ${game.teamScore[0]}  —  ${game.teamScore[1]} ORANGE`, cx, cy + 38, 15, '#e9eef2', 'center', 700, 4);
    g.globalAlpha = 1;
  }

  drawWeapon() {
    const g = this.g, p = this.game.player, W = this.W, H = this.H;
    const w = p.weapon, def = w.def;
    const pw = 300, ph = 106, x = W - 22 - pw, y = H - 128;
    this.plate(x, y, pw, ph, 12);
    // weapon slots above
    p.weapons.forEach((ws, i) => {
      const on = i === p.cur;
      const sx = x + pw - (p.weapons.length - i) * 112;
      this.plate(sx, y - 28, 106, 22, 6, on ? 'rgba(159,232,255,0.16)' : 'rgba(6,10,16,0.5)', on ? 'rgba(159,232,255,0.5)' : null);
      this.spaced(this.game.keyLabel('weapon' + (i + 1)), sx + 10, y - 16, 10, on ? WARN : '#8996a1', 'left', 700, 1);
      this.spaced(ws.def.short, sx + 96, y - 16, 12, on ? '#e9eef2' : '#8996a1', 'right', 700, 2);
    });
    this.spaced(def.name, x + pw - 16, y + 20, 12, '#c9d3dc', 'right', 700, 3);
    if (def.kind === 'beam') {
      this.spaced(w.overheat ? 'OVERHEAT' : 'HEAT', x + 18, y + 48, 11, w.overheat ? DANGER : '#8996a1', 'left', 700, 3);
      const segs = 20;
      for (let i = 0; i < segs; i++) {
        const on = w.heat > i / segs;
        g.fillStyle = on ? (w.overheat ? DANGER : i / segs > 0.7 ? WARN : HUD_C) : 'rgba(255,255,255,0.08)';
        g.fillRect(x + 18 + i * 13, y + 58, 10, 10);
      }
    } else {
      this.num(String(w.mag), x + pw - 92, y + 56, 34, w.mag === 0 ? DANGER : w.mag <= Math.ceil(def.mag * 0.25) ? WARN : '#e9eef2', 'right');
      this.spaced(`/ ${w.reserve}`, x + pw - 16, y + 60, 16, '#8996a1', 'right', 700, 1);
      // round pips
      const n = def.mag, maxW = pw - 175;
      const pwid = Math.max(2, Math.min(8, Math.floor(maxW / n) - 2));
      for (let i = 0; i < n; i++) {
        g.fillStyle = i < w.mag ? 'rgba(233,238,242,0.85)' : 'rgba(255,255,255,0.1)';
        g.fillRect(x + 18 + i * (pwid + 2), y + 48, pwid, 14);
      }
    }
    if (w.reloadT > 0 && def.reload > 0) {
      const f = def.perShell ? 1 - w.reloadT / def.reload : 1 - w.reloadT / def.reload;
      this.spaced('RELOADING', x + 18, y + 84, 10, WARN, 'left', 700, 3);
      this.bar(x + 110, y + 80, pw - 128, 3, f, WARN);
    } else {
      // grenades as small hex icons
      this.spaced('GRENADES', x + 18, y + 86, 9, '#8996a1', 'left', 700, 3);
      for (let i = 0; i < 2; i++) {
        const gx = x + 100 + i * 20, gy = y + 83;
        g.beginPath();
        for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; g[k ? 'lineTo' : 'moveTo'](gx + Math.cos(a) * 6, gy + Math.sin(a) * 6); }
        g.closePath();
        if (i < p.grenades) { g.fillStyle = WARN; g.fill(); } else { g.strokeStyle = 'rgba(255,255,255,0.25)'; g.lineWidth = 1; g.stroke(); }
      }
    }
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
    if (p.walking) {
      this.text(`${game.keyLabel('up')}: JUMP INTO FLIGHT`, cx, cy + 120, 12, OK, 'center', 700);
      return;
    }
    if (p.grab) {
      const c = p.pushCharge;
      const pk = game.settings.binds.pushOff;
      void 0;
      this.text(c > 0 ? `PUSH ${(2 + 5 * c).toFixed(1)} m/s` : pk ? `HOLD ${game.keyLabel('pushOff')}: PUSH OFF TOWARDS AIM   ${game.keyLabel('grab')}: RELEASE` : `PUSH OFF IS UNBOUND: SET IT IN CONTROLS   ${game.keyLabel('grab')}: RELEASE`, cx, cy + 120, 13, pk || c > 0 ? OK : WARN, 'center', 700);
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
    let y = this.H * 0.28;
    const g = this.g;
    for (const m of this.msgs) {
      m.t -= dt;
      g.globalAlpha = clamp(m.t / 0.4, 0, 1);
      const size = m.big ? 26 : 15;
      g.font = `700 ${size}px ${this.font}`;
      const w = g.measureText(m.text).width + 60;
      // thin rules either side, like a briefing banner
      const grd = g.createLinearGradient(cx - w / 2 - 80, 0, cx + w / 2 + 80, 0);
      grd.addColorStop(0, 'rgba(0,0,0,0)'); grd.addColorStop(0.2, 'rgba(6,10,16,0.55)'); grd.addColorStop(0.8, 'rgba(6,10,16,0.55)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd; g.fillRect(cx - w / 2 - 80, y - size * 0.8, w + 160, size * 1.6);
      g.fillStyle = m.color; g.globalAlpha *= 0.7;
      g.fillRect(cx - w / 2 - 40, y - size * 0.8, w + 80, 1); g.fillRect(cx - w / 2 - 40, y + size * 0.8, w + 80, 1);
      g.globalAlpha = clamp(m.t / 0.4, 0, 1);
      this.spaced(m.text, cx, y + 1, size, m.color, 'center', 700, m.big ? 5 : 2.5);
      y += m.big ? 46 : 32;
    }
    g.globalAlpha = 1;
    this.msgs = this.msgs.filter((m) => m.t > 0);
  }

  drawDeath(cx, cy) {
    const game = this.game, p = game.player, g = this.g;
    const grd = g.createRadialGradient(cx, cy, 50, cx, cy, Math.max(cx, cy));
    grd.addColorStop(0, 'rgba(60,0,0,0.15)'); grd.addColorStop(1, 'rgba(40,0,0,0.6)');
    g.fillStyle = grd; g.fillRect(0, 0, this.W, this.H);
    const w = 420, h = 150;
    this.plate(cx - w / 2, cy - h / 2, w, h, 14, 'rgba(10,6,8,0.75)', 'rgba(255,75,58,0.5)');
    g.fillStyle = DANGER; g.fillRect(cx - w / 2, cy - h / 2, w, 3);
    this.spaced('ELIMINATED', cx, cy - 34, 30, DANGER, 'center', 800, 8, this.disp);
    const by = p.killedBy ? `by ${p.killedBy.name}` : 'by the environment';
    this.spaced(`${by}  ·  ${(p.killCause || '').toUpperCase()}`, cx, cy + 4, 15, '#e9eef2', 'center', 700, 2);
    const f = 1 - Math.max(0, p.respawnT) / 4;
    this.spaced(`REDEPLOYING IN ${Math.max(0, p.respawnT).toFixed(1)} s`, cx, cy + 36, 11, '#8996a1', 'center', 700, 3);
    this.bar(cx - 150, cy + 50, 300, 3, f, DANGER);
  }

}
