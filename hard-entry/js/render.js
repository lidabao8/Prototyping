"use strict";
// =====================================================================
//  HARD ENTRY — rendering
// =====================================================================
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const FLOOR_COL = { '.': '#5e4932', ',': '#868b8e', '_': '#434d5c', '=': '#6a6963', ':': '#2f3134', '"': '#34492a' };

function buildStatic(L) {
  const c = document.createElement('canvas'); c.width = L.w * TS; c.height = L.h * TS;
  const g = c.getContext('2d');
  const R = mulberry32(1234);
  // floors
  for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) {
    const i = L.idx(tx, ty), x = tx * TS, y = ty * TS, s = L.style[i];
    g.fillStyle = FLOOR_COL[s] || '#555'; g.fillRect(x, y, TS, TS);
    if (s === '.') {
      for (let k = 0; k < 4; k++) { g.fillStyle = `rgba(${R() < 0.5 ? '0,0,0' : '255,220,170'},${0.03 + R() * 0.06})`; g.fillRect(x, y + k * 8, TS, 8); }
      g.fillStyle = 'rgba(0,0,0,0.28)'; for (let k = 0; k < 4; k++) g.fillRect(x, y + k * 8 + 7, TS, 1);
      g.fillRect(x + ((ty * 13 + tx * 7) % 4) * 8, y, 1, TS);
    } else if (s === ',') {
      g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x, y, TS, 1); g.fillRect(x, y + 16, TS, 1); g.fillRect(x, y, 1, TS); g.fillRect(x + 16, y, 1, TS);
      g.fillStyle = `rgba(255,255,255,${R() * 0.05})`; g.fillRect(x + 1, y + 1, 15, 15);
    } else if (s === '_') {
      for (let k = 0; k < 14; k++) { g.fillStyle = `rgba(${R() < 0.5 ? '0,0,0' : '255,255,255'},0.06)`; g.fillRect(x + R() * TS, y + R() * TS, 2, 2); }
    } else if (s === '=') {
      for (let k = 0; k < 6; k++) { g.fillStyle = `rgba(0,0,0,${R() * 0.08})`; g.beginPath(); g.arc(x + R() * TS, y + R() * TS, R() * 6, 0, TAU); g.fill(); }
      if (tx % 4 === 0) { g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(x, y, 1, TS); }
    } else if (s === ':') {
      for (let k = 0; k < 10; k++) { g.fillStyle = `rgba(255,255,255,${R() * 0.06})`; g.fillRect(x + R() * TS, y + R() * TS, 1.5, 1.5); }
    } else if (s === '"') {
      for (let k = 0; k < 12; k++) { g.fillStyle = R() < 0.5 ? 'rgba(80,110,50,0.5)' : 'rgba(20,35,15,0.4)'; g.fillRect(x + R() * TS, y + R() * TS, 1.5, 3); }
    }
  }
  // parking lines on asphalt that borders a building
  // furniture
  for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) {
    const i = L.idx(tx, ty), x = tx * TS, y = ty * TS, t = L.t[i], d = L.deco[i];
    if (t === T.LOW && d === 'T') {
      const same = (dx, dy) => L.deco[L.inb(tx + dx, ty + dy) ? L.idx(tx + dx, ty + dy) : 0] === 'T' && L.inb(tx + dx, ty + dy);
      const l = same(-1, 0) ? 0 : 3, r = same(1, 0) ? 0 : 3, u = same(0, -1) ? 0 : 3, b = same(0, 1) ? 0 : 3;
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x + l + 2, y + u + 3, TS - l - r, TS - u - b);
      g.fillStyle = '#6e5236'; g.fillRect(x + l, y + u, TS - l - r, TS - u - b);
      g.fillStyle = '#86663f'; g.fillRect(x + l + 1, y + u + 1, TS - l - r - 2, TS - u - b - 4);
      if (R() < 0.35) { g.fillStyle = pick(['#d8d8d0', '#3a6ea5', '#b04040', '#e0c060']); g.fillRect(x + 8 + R() * 10, y + 8 + R() * 10, 6, 4); }
    } else if (t === T.LOW && d === 'k') {
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x + 5, y + 6, TS - 6, TS - 6);
      g.fillStyle = '#7a5c34'; g.fillRect(x + 3, y + 3, TS - 6, TS - 6);
      g.strokeStyle = '#5a4224'; g.lineWidth = 2; g.strokeRect(x + 4, y + 4, TS - 8, TS - 8);
      g.beginPath(); g.moveTo(x + 4, y + 4); g.lineTo(x + TS - 4, y + TS - 4); g.moveTo(x + TS - 4, y + 4); g.lineTo(x + 4, y + TS - 4); g.stroke();
    } else if (t === T.HIGH) {
      g.fillStyle = 'rgba(0,0,0,0.4)'; g.fillRect(x + 3, y + 4, TS - 2, TS - 2);
      g.fillStyle = '#39404b'; g.fillRect(x + 1, y + 1, TS - 2, TS - 2);
      for (let k = 0; k < 6; k++) { g.fillStyle = pick(['#a0503a', '#d0b060', '#5a8ab0', '#70a060', '#c8c8c8', '#8a5aa0']); g.fillRect(x + 3 + (k % 3) * 9, y + 3 + Math.floor(k / 3) * 14, 7, 11); }
    }
  }
  // wall shadows
  g.fillStyle = 'rgba(0,0,0,0.35)';
  for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) {
    const t = L.t[L.idx(tx, ty)];
    if (t === T.WALL || t === T.WINDOW) g.fillRect(tx * TS + 4, ty * TS + 5, TS, TS);
  }
  // walls and windows
  for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) {
    const t = L.t[L.idx(tx, ty)], x = tx * TS, y = ty * TS;
    if (t !== T.WALL && t !== T.WINDOW) continue;
    const isW = (dx, dy) => { const q = L.tileAt(tx + dx, ty + dy); return q === T.WALL || q === T.WINDOW || q === T.DOOR; };
    const outer = tx === 0 || ty === 0 || tx === L.w - 1 || ty === L.h - 1;
    g.fillStyle = outer ? '#17191c' : '#2a2d33'; g.fillRect(x, y, TS, TS);
    g.fillStyle = outer ? '#202327' : '#3b4048';
    g.fillRect(x + 2, y + 2, TS - 4, TS - 4);
    g.fillStyle = 'rgba(255,255,255,0.08)';
    if (!isW(0, -1)) g.fillRect(x, y, TS, 2);
    if (!isW(-1, 0)) g.fillRect(x, y, 2, TS);
    g.fillStyle = 'rgba(0,0,0,0.35)';
    if (!isW(0, 1)) g.fillRect(x, y + TS - 2, TS, 2);
    if (!isW(1, 0)) g.fillRect(x + TS - 2, y, 2, TS);
    if (t === T.WINDOW) {
      const horiz = isW(-1, 0) || isW(1, 0);
      g.fillStyle = '#1d2024'; g.fillRect(x, y, TS, TS);
      g.fillStyle = 'rgba(150,200,230,0.55)';
      if (horiz) g.fillRect(x, y + 12, TS, 8); else g.fillRect(x + 12, y, 8, TS);
      g.fillStyle = 'rgba(255,255,255,0.35)';
      if (horiz) g.fillRect(x, y + 13, TS, 1); else g.fillRect(x + 13, y, 1, TS);
      g.fillStyle = '#4a4f57';
      if (horiz) { g.fillRect(x, y + 10, TS, 2); g.fillRect(x, y + 20, TS, 2); g.fillRect(x + TS - 1, y + 10, 1, 12); }
      else { g.fillRect(x + 10, y, 2, TS); g.fillRect(x + 20, y, 2, TS); g.fillRect(x + 10, y + TS - 1, 12, 1); }
    }
  }
  return c;
}

function drawDoor(ctx, d) {
  const x0 = d.tx * TS, y0 = d.ty * TS;
  // frame
  ctx.fillStyle = '#2a2d33';
  if (d.orient === 'h') { ctx.fillRect(x0, y0 + 11, 3, 10); ctx.fillRect(x0 + TS - 3, y0 + 11, 3, 10); }
  else { ctx.fillRect(x0 + 11, y0, 10, 3); ctx.fillRect(x0 + 11, y0 + TS - 3, 10, 3); }
  if (d.state === 'broken') {
    ctx.fillStyle = '#6a4c30';
    const R = mulberry32(d.id * 7 + 3);
    for (let k = 0; k < 5; k++) { ctx.save(); ctx.translate(x0 + R() * TS, y0 + R() * TS); ctx.rotate(R() * TAU); ctx.fillRect(-5, -1.5, 10, 3); ctx.restore(); }
    return;
  }
  const target = d.state === 'open' ? 1 : 0;
  d.swing = lerp(d.swing, target, 0.25);
  const hingeX = d.orient === 'h' ? (d.hinge < 0 ? x0 + 2 : x0 + TS - 2) : x0 + TS / 2;
  const hingeY = d.orient === 'h' ? y0 + TS / 2 : (d.hinge < 0 ? y0 + 2 : y0 + TS - 2);
  const closedAng = d.orient === 'h' ? (d.hinge < 0 ? 0 : Math.PI) : (d.hinge < 0 ? Math.PI / 2 : -Math.PI / 2);
  // open angle: rotate 90deg toward openSide
  let openAng;
  if (d.orient === 'h') openAng = d.openSide > 0 ? Math.PI / 2 : -Math.PI / 2;
  else openAng = d.openSide > 0 ? 0 : Math.PI;
  const a = closedAng + angDiff(closedAng, openAng) * d.swing;
  const len = TS - 4;
  ctx.save(); ctx.translate(hingeX, hingeY); ctx.rotate(a);
  ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(1, -1, len, 6);
  ctx.fillStyle = d.hp < 60 ? '#6b4d30' : '#8a6440'; ctx.fillRect(0, -3, len, 6);
  ctx.fillStyle = '#a07a50'; ctx.fillRect(0, -3, len, 2);
  ctx.fillStyle = '#d0c070'; ctx.fillRect(len - 6, -4, 3, 2);
  ctx.restore();
}

function personColors(p) {
  if (p.kind === 'player') return { body: '#2b3542', patch: TEAM_COLORS.gold };
  if (p.kind === 'officer') return { body: '#2b3542', patch: TEAM_COLORS[p.team] };
  return { body: p.cloth, patch: null };
}
function drawPerson(ctx, p) {
  const { body, patch } = personColors(p);
  ctx.save(); ctx.translate(p.x, p.y);
  if (p.status !== 'ok') {
    ctx.rotate(p.angle + (p.fallRot || 0));
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(1, 2, 16, 9, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = p.status === 'dead' ? shade(body, -0.35) : body;
    ctx.beginPath(); ctx.ellipse(-2, 0, 14, 8, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = p.swat ? '#1d232b' : shade(p.skin || '#c99a74', p.status === 'dead' ? -0.3 : 0); ctx.beginPath(); ctx.arc(13, 0, 5.5, 0, TAU); ctx.fill();
    if (p.restrained) { ctx.strokeStyle = '#f0f0f0'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(-8, -4); ctx.lineTo(-8, 4); ctx.stroke(); }
    ctx.restore(); return;
  }
  if (p.tasedT > 0) {
    ctx.rotate(p.angle);
    ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(-2, 0, 14, 8, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = p.skin || '#c99a74'; ctx.beginPath(); ctx.arc(13, 0, 5.5, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#9fdcff'; ctx.lineWidth = 1; ctx.beginPath();
    for (let k = 0; k < 5; k++) { const a = Math.random() * TAU; ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * 14, Math.sin(a) * 10); }
    ctx.stroke(); ctx.restore(); return;
  }
  ctx.rotate(p.angle);
  const crouch = p.restrained || (p.compliant && !p.restrained) || p.state === 'cower' ? 0.86 : 1;
  ctx.scale(crouch, crouch);
  // shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(2, 3, 9, 12, 0, 0, TAU); ctx.fill();
  const armed = p.swat || p.weapon;
  const handsUp = (p.compliant && !p.restrained) || p.state === 'hostage';
  const skin = p.swat ? '#2a2f36' : p.skin;
  // arms / weapon
  if (p.restrained) {
    ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(-9, -3, 3, 0, TAU); ctx.arc(-9, 3, 3, 0, TAU); ctx.fill();
    ctx.fillStyle = '#f2f2f2'; ctx.fillRect(-11, -1, 4, 2);
  } else if (handsUp) {
    ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(3, -12, 3.2, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(3, 12, 3.2, 0, TAU); ctx.fill();
  } else if (p.state === 'cower') {
    ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(5, -5, 3, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(5, 5, 3, 0, TAU); ctx.fill();
  } else if (armed) {
    const long = p.swat ? (p.kind === 'player' ? (p.equip === 'primary') : true) : (p.weapon !== 'pistol');
    const gl = long ? 22 : 15;
    ctx.fillStyle = '#16181b'; ctx.fillRect(6, -2, gl, 4);
    if (p.kind === 'player' && p.equip === 'primary' && G.loadout.primary === 'beanbag') { ctx.fillStyle = '#c8a020'; ctx.fillRect(8, -2.5, 8, 5); }
    if (p.kind === 'player' && p.equip === 'secondary' && G.loadout.secondary === 'taser') { ctx.fillStyle = '#e0c020'; ctx.fillRect(6, -2, 10, 4); }
    if (p.kind === 'player' && G.loadout.primary === 'pepperball' && p.equip === 'primary') { ctx.fillStyle = '#3a8a50'; ctx.fillRect(8, -3, 10, 6); }
    ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(9, 3, 3, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(long ? 17 : 13, -1, 3, 0, TAU); ctx.fill();
  } else {
    ctx.fillStyle = skin; ctx.beginPath(); ctx.arc(4, -8, 3, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(4, 8, 3, 0, TAU); ctx.fill();
  }
  // torso
  ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(0, 0, 7.5, 11, 0, 0, TAU); ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 1; ctx.stroke();
  if (patch) { ctx.fillStyle = patch; ctx.fillRect(-4, -10, 4, 3); ctx.fillRect(-4, 7, 4, 3); }
  if (p.swat) { ctx.fillStyle = '#3b4655'; ctx.fillRect(-5, -6, 9, 12); }
  // head
  if (p.swat) {
    ctx.fillStyle = '#20262e'; ctx.beginPath(); ctx.arc(1, 0, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = patch; ctx.fillRect(-3, -1, 5, 2);
    if (p.kind === 'player' && G.loadout.head === 'gasmask') { ctx.fillStyle = '#555'; ctx.beginPath(); ctx.arc(6, 0, 2.5, 0, TAU); ctx.fill(); }
  } else {
    ctx.fillStyle = p.skin; ctx.beginPath(); ctx.arc(1, 0, 5.5, 0, TAU); ctx.fill();
    ctx.fillStyle = p.hair; ctx.beginPath(); ctx.arc(-0.5, 0, 5.2, Math.PI * 0.55, Math.PI * 1.45); ctx.fill();
    if (p.mask) { ctx.fillStyle = '#151515'; ctx.beginPath(); ctx.arc(1, 0, 5.6, -1.2, 1.2); ctx.fill(); }
  }
  ctx.restore();
  // effects
  if (p.flashT > 0 || p.stunT > 0.4) {
    ctx.fillStyle = '#ffffff';
    for (let k = 0; k < 3; k++) { const a = G.time * 4 + k * 2.1; ctx.fillRect(p.x + Math.cos(a) * 12 - 1, p.y + Math.sin(a) * 12 - 1, 2, 2); }
  }
  if (p.gasT > 0 || p.pepperT > 0) { ctx.fillStyle = 'rgba(200,220,120,0.5)'; ctx.beginPath(); ctx.arc(p.x + Math.sin(G.time * 5 + p.id) * 4, p.y - 12, 2, 0, TAU); ctx.fill(); }
}
function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16); let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = clamp(Math.round(r * (1 + f)), 0, 255); g = clamp(Math.round(g * (1 + f)), 0, 255); b = clamp(Math.round(b * (1 + f)), 0, 255);
  return `rgb(${r},${g},${b})`;
}
function npcRingColor(p) {
  if (p.restrained) return '#8a8f96';
  if (p.compliant) return '#5aa0ff';
  if (p.kind === 'civ') return '#e8d070';
  return p.weapon ? '#ff4a3a' : '#ff9a4a';
}

// ---------- fog / visibility ----------
function viewers() {
  const v = [];
  const p = G.player;
  if (p.ok) v.push({ x: p.eyeX, y: p.eyeY, R: p.ads ? 900 : 760, cone: p.ads ? 0.95 : 1.25, ang: p.angle, who: p });
  for (const o of G.officers) if (o.ok) v.push({ x: o.x, y: o.y, R: 440, cone: null, who: o });
  if (G.mirrorView && G.mirrorView.t > 0) v.push({ x: G.mirrorView.x, y: G.mirrorView.y, R: 560, cone: null, mirror: true });
  return v;
}
function canViewerSee(v, x, y) {
  const d = dist(v.x, v.y, x, y);
  if (d > v.R) return false;
  if (v.cone != null && d > 56 && Math.abs(angDiff(v.ang, Math.atan2(y - v.y, x - v.x))) > v.cone) return false;
  return G.level.los(v.x, v.y, x, y);
}
function updateVisibility(dt) {
  const L = G.level, V = viewers();
  G.viewers = V;
  // people
  for (const n of G.persons) {
    if (n.swat) { n.visible = true; continue; }
    const vis = V.some(v => canViewerSee(v, n.x, n.y));
    if (vis) { n.visible = true; n.seen = true; n.ghost = null; }
    else { if (n.visible && n.ok) n.ghost = { x: n.x, y: n.y, t: 3, angle: n.angle }; n.visible = false; }
    if (n.ghost) { n.ghost.t -= dt; if (n.ghost.t <= 0) n.ghost = null; }
  }
  // explored tiles (throttled)
  G.exploreT -= dt;
  if (G.exploreT <= 0) {
    G.exploreT = 0.18; G.visGen++;
    const eg = G.exploredCtx;
    for (const v of V) {
      const R = Math.min(v.R, 620), rt = Math.ceil(R / TS);
      const cx = Math.floor(v.x / TS), cy = Math.floor(v.y / TS);
      for (let ty = cy - rt; ty <= cy + rt; ty++) for (let tx = cx - rt; tx <= cx + rt; tx++) {
        if (!L.inb(tx, ty)) continue;
        const px = (tx + 0.5) * TS, py = (ty + 0.5) * TS, d = dist(v.x, v.y, px, py);
        if (d > R) continue;
        if (v.cone != null && d > 60 && Math.abs(angDiff(v.ang, Math.atan2(py - v.y, px - v.x))) > v.cone + 0.1) continue;
        if (!L.losToTile(v.x, v.y, tx, ty)) continue;
        const i = L.idx(tx, ty);
        L.visStamp[i] = G.visGen;
        if (!L.explored[i]) { L.explored[i] = 1; eg.fillRect(tx, ty, 1, 1); }
      }
    }
    for (const it of G.items) if (!it.seen && L.visStamp[L.idx(Math.floor(it.x / TS), Math.floor(it.y / TS))] === G.visGen) it.seen = true;
    // reveal traps seen from their own side
    for (const d of L.doors) {
      if (!d.trap || d.trapKnown) continue;
      for (const s of G.swat) {
        if (!s.ok) continue;
        if (dist(s.x, s.y, d.x, d.y) < 190 && L.sideOf(d, s.x, s.y) === d.trapSide && L.los(s.x, s.y, d.x, d.y)) {
          d.trapKnown = true;
          if (s.kind === 'officer') callout(s, 'Trap on that door!', true); else G.flashMsg('You spot a trap on the door', '#ff9a5a');
          break;
        }
      }
    }
  }
  if (G.mirrorView) { G.mirrorView.t -= dt; if (G.mirrorView.t <= 0 && !G.mirrorActive) G.mirrorView = null; }
}

// ---------- main world render ----------
function renderWorld(ctx) {
  const L = G.level, cam = G.cam, sc = cam.scale;
  const W = G.cssW, H = G.cssH;
  ctx.setTransform(G.dpr, 0, 0, G.dpr, 0, 0);
  ctx.fillStyle = '#07090c'; ctx.fillRect(0, 0, W, H);
  const sx = (Math.random() - 0.5) * G.shake, sy = (Math.random() - 0.5) * G.shake;
  const ox = W / 2 - cam.x * sc + sx, oy = H / 2 - cam.y * sc + sy;
  ctx.setTransform(G.dpr * sc, 0, 0, G.dpr * sc, G.dpr * ox, G.dpr * oy);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(G.staticC, 0, 0);
  ctx.drawImage(G.decalC, 0, 0);
  // gas
  for (const c of G.gas) {
    const a = Math.min(1, c.t / 3) * 0.32;
    for (let k = 0; k < 5; k++) {
      const ang = c.seed + k * 1.3 + G.time * 0.2, rr = c.r * (0.55 + 0.1 * k);
      const gx = c.x + Math.cos(ang) * c.r * 0.3, gy = c.y + Math.sin(ang) * c.r * 0.3;
      const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, rr);
      gr.addColorStop(0, `rgba(200,215,170,${a})`); gr.addColorStop(1, 'rgba(200,215,170,0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(gx, gy, rr, 0, TAU); ctx.fill();
    }
  }
  // doors
  for (const d of L.doors) drawDoor(ctx, d);
  for (const d of L.doors) if (d.c2) {
    const [nx, ny] = L.doorNormal(d);
    ctx.fillStyle = '#d5d0c0'; ctx.fillRect(d.x + nx * d.c2.side * 6 - 5, d.y + ny * d.c2.side * 6 - 5, 10, 10);
    ctx.fillStyle = Math.sin(G.time * 10) > 0 ? '#ff3020' : '#501010'; ctx.fillRect(d.x + nx * d.c2.side * 6 - 1.5, d.y + ny * d.c2.side * 6 - 1.5, 3, 3);
  }
  for (const d of L.doors) if (d.wedged) {
    const [nx, ny] = L.doorNormal(d), s = G.level.sideOf(d, G.player.x, G.player.y);
    ctx.fillStyle = '#c49a6c'; ctx.beginPath(); ctx.arc(d.x + nx * s * 10, d.y + ny * s * 10, 4, 0, TAU); ctx.fill();
  }
  // bomb
  if (G.bomb) {
    const b = G.bomb;
    ctx.fillStyle = '#2a2a2a'; ctx.fillRect(b.x - 10, b.y - 8, 20, 16);
    ctx.fillStyle = '#c03020'; ctx.fillRect(b.x - 8, b.y - 6, 5, 12); ctx.fillRect(b.x + 3, b.y - 6, 5, 12);
    ctx.fillStyle = b.defused ? '#40ff60' : (Math.sin(G.time * 8) > 0 ? '#ff2020' : '#400000'); ctx.fillRect(b.x - 2, b.y - 3, 4, 4);
  }
  // items
  for (const it of G.items) {
    if (it.collected) continue;
    ctx.save(); ctx.translate(it.x, it.y); ctx.rotate(it.rot);
    if (it.kind === 'weapon') { ctx.fillStyle = '#121416'; ctx.fillRect(-9, -2, 18, 4); ctx.fillRect(-9, 0, 4, 6); }
    else { ctx.fillStyle = '#d8d0b0'; ctx.fillRect(-6, -5, 12, 10); ctx.fillStyle = '#a03030'; ctx.fillRect(-6, -1, 12, 2); }
    ctx.restore();
  }
  // bodies
  for (const p of G.persons) if (p.status !== 'ok' && (p.seen || p.swat)) drawPerson(ctx, p);
  // ghosts (last known)
  for (const p of G.npcs) if (p.ghost && p.ok) {
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.setLineDash([3, 3]); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(p.ghost.x, p.ghost.y, 11, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
  }
  // living people
  for (const p of G.persons) {
    if (p.status !== 'ok') continue;
    if (!p.swat && !p.visible && p.spottedT <= 0) continue;
    if (!p.swat) { ctx.strokeStyle = hexA(npcRingColor(p), p.visible ? 0.75 : 0.45); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, p.y, 15, 0, TAU); ctx.stroke(); }
    drawPerson(ctx, p);
  }
  // taser wires
  for (const w of G.wires) { ctx.strokeStyle = `rgba(200,230,255,${w.life})`; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(w.a.x, w.a.y); ctx.quadraticCurveTo((w.a.x + w.b.x) / 2 + 6, (w.a.y + w.b.y) / 2 - 6, w.b.x, w.b.y); ctx.stroke(); }
  // grenades
  for (const g of G.grenades) {
    ctx.save(); ctx.translate(g.x, g.y); ctx.rotate(g.rot);
    ctx.fillStyle = GEAR[g.type].color; ctx.fillRect(-3, -4.5, 6, 9); ctx.fillStyle = '#333'; ctx.fillRect(-3, -4.5, 6, 2);
    ctx.restore();
  }
  // tracers
  for (const t of G.tracers) { ctx.strokeStyle = t.color; ctx.globalAlpha = t.life / 0.07; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(t.x0, t.y0); ctx.lineTo(t.x1, t.y1); ctx.stroke(); }
  ctx.globalAlpha = 1;
  // particles
  for (const q of G.particles) {
    const a = q.life / q.max;
    if (q.glow) {
      const gr = ctx.createRadialGradient(q.x, q.y, 0, q.x, q.y, q.size);
      gr.addColorStop(0, hexA(q.color, a)); gr.addColorStop(1, hexA(q.color, 0));
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(q.x, q.y, q.size, 0, TAU); ctx.fill();
    } else if (q.soft) { ctx.fillStyle = hexA(q.color, a * 0.5); ctx.beginPath(); ctx.arc(q.x, q.y, q.size * (2 - a), 0, TAU); ctx.fill(); }
    else { ctx.fillStyle = hexA(q.color, a); ctx.fillRect(q.x - q.size / 2, q.y - q.size / 2, q.size, q.size); }
  }
  // fog of war
  renderFog(ctx, ox, oy, sc);
  ctx.setTransform(G.dpr * sc, 0, 0, G.dpr * sc, G.dpr * ox, G.dpr * oy);
  // overlays above fog
  drawWorldOverlays(ctx);
}
function renderFog(ctx, ox, oy, sc) {
  const f = G.fogC, fc = G.fogCtx, L = G.level;
  if (f.width !== G.canvas.width || f.height !== G.canvas.height) { f.width = G.canvas.width; f.height = G.canvas.height; }
  fc.setTransform(1, 0, 0, 1, 0, 0);
  fc.globalCompositeOperation = 'source-over';
  fc.fillStyle = '#05070a'; fc.fillRect(0, 0, f.width, f.height);
  fc.setTransform(G.dpr * sc, 0, 0, G.dpr * sc, G.dpr * ox, G.dpr * oy);
  fc.globalCompositeOperation = 'destination-out';
  fc.imageSmoothingEnabled = true;
  fc.globalAlpha = 0.5; fc.drawImage(G.exploredC, 0, 0, L.w * TS, L.h * TS);
  fc.globalAlpha = 1;
  fc.fillStyle = '#fff';
  for (const v of G.viewers || []) {
    const pts = L.visPoly(v.x, v.y, v.R);
    const path = new Path2D();
    path.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) path.lineTo(pts[i], pts[i + 1]);
    path.closePath();
    if (v.cone != null) {
      fc.save();
      const clip = new Path2D();
      clip.moveTo(v.x, v.y); clip.arc(v.x, v.y, v.R * 1.5, v.ang - v.cone, v.ang + v.cone); clip.closePath();
      clip.moveTo(v.x + 64, v.y); clip.arc(v.x, v.y, 64, 0, TAU);
      fc.clip(clip, 'nonzero');
      fc.fill(path);
      fc.restore();
    } else {
      fc.globalAlpha = v.mirror ? 0.85 : 0.82; fc.fill(path); fc.globalAlpha = 1;
    }
  }
  fc.globalCompositeOperation = 'source-over';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 0.94; ctx.drawImage(f, 0, 0); ctx.globalAlpha = 1;
}
function drawWorldOverlays(ctx) {
  const L = G.level, sc = G.cam.scale;
  const fs = 11 / sc;
  // door icons
  for (const d of L.doors) {
    if (!L.explored[L.idx(d.tx, d.ty)]) continue;
    if (d.state === 'closed' && d.locked && d.lockKnown) icon(ctx, d.x, d.y - 3, '#ff6a5a', 'L', fs);
    if (d.trap && d.trapKnown) icon(ctx, d.x + 8, d.y + 8, '#ffb02a', '!', fs);
  }
  // evidence markers (seen)
  for (const it of G.items) if (!it.collected && it.seen) { ctx.strokeStyle = 'rgba(120,200,255,0.8)'; ctx.lineWidth = 1.5 / sc * 1.2; ctx.beginPath(); ctx.arc(it.x, it.y, 13, 0, TAU); ctx.stroke(); }
  // unreported bodies
  for (const p of G.persons) if (p.status !== 'ok' && !p.reported && (p.seen || p.swat) && p !== G.player) icon(ctx, p.x, p.y - 18, '#c8c8c8', 'R', fs);
  // entry markers
  for (const e of G.entries) {
    for (let i = 0; i < e.members.length; i++) {
      const pt = e.stackPts[i];
      ctx.strokeStyle = hexA(TEAM_COLORS[e.members[i].team], 0.5); ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(pt.x, pt.y, 6, 0, TAU); ctx.stroke();
    }
    if (e.phase === 'waiting') { ctx.fillStyle = '#e6c35c'; ctx.font = `bold ${fs}px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('READY — [X] GO', e.door.x, e.door.y - 22); }
  }
  for (const o of G.officers) {
    if (!o.ok) continue;
    if (o.order.type === 'move' || o.order.type === 'hold' || o.order.type === 'cover') {
      const x = o.order.x, y = o.order.y; ctx.strokeStyle = hexA(TEAM_COLORS[o.team], 0.45); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4); ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4); ctx.stroke();
    }
    ctx.font = `${fs * 0.9}px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = hexA(TEAM_COLORS[o.team], 0.85);
    ctx.fillText(o.name, o.x, o.y + 25);
    if (o.actProg > 0) progressRing(ctx, o.x, o.y, 17, o.actProg, TEAM_COLORS[o.team]);
    if (o.task && o.task.prog > 0) progressRing(ctx, o.x, o.y, 17, o.task.prog / TASK_DUR[o.task.type], TEAM_COLORS[o.team]);
  }
  // command target highlight
  if (Cmd.open && Cmd.target) {
    const t = Cmd.target; ctx.strokeStyle = TEAM_COLORS[G.teamSel]; ctx.lineWidth = 2;
    if (t.kind === 'door') ctx.strokeRect(t.obj.tx * TS + 1, t.obj.ty * TS + 1, TS - 2, TS - 2);
    else if (t.kind === 'person' || t.kind === 'item') { ctx.beginPath(); ctx.arc(t.obj.x, t.obj.y, 18, 0, TAU); ctx.stroke(); }
    else { ctx.beginPath(); ctx.arc(t.x, t.y, 9, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(t.x, t.y, 2, 0, TAU); ctx.stroke(); }
  }
  // player action ring
  const p = G.player;
  if (p.action) progressRing(ctx, p.x, p.y, 19, p.action.t / p.action.dur, '#e6c35c');
  if (p.reloadT > 0 && p.reloadGun) progressRing(ctx, p.x, p.y, 19, 1 - p.reloadT / p.reloadGun.def.reload, '#9fd3a0');
  // grenade aim arc
  if (p.ok && (p.equip === 'grenade') && !Cmd.open) {
    const mw = G.mouseWorld, d = Math.min(360, dist(p.x, p.y, mw.x, mw.y)), a = Math.atan2(mw.y - p.y, mw.x - p.x);
    ctx.strokeStyle = 'rgba(230,195,92,0.5)'; ctx.setLineDash([4, 5]); ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + Math.cos(a) * d, p.y + Math.sin(a) * d); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(p.x + Math.cos(a) * d, p.y + Math.sin(a) * d, p.grenadeSel === 'stinger' ? 30 : 22, 0, TAU); ctx.stroke();
  }
  // speech bubbles
  ctx.textAlign = 'center';
  for (const q of G.persons) {
    if (!q.bubble || q.status !== 'ok') continue;
    if (!q.swat && !q.visible && q.spottedT <= 0) continue;
    const a = Math.min(1, q.bubble.t * 2);
    ctx.font = `bold ${fs}px ${FONT}`;
    const w = ctx.measureText(q.bubble.text).width + 8 / sc;
    const bx = q.x, by = q.y - 26;
    ctx.fillStyle = `rgba(10,12,16,${0.75 * a})`; ctx.fillRect(bx - w / 2, by - fs, w, fs * 1.45);
    ctx.fillStyle = q.swat ? hexA(q.kind === 'player' ? '#e6c35c' : TEAM_COLORS[q.team], a) : q.kind === 'civ' ? `rgba(240,225,160,${a})` : `rgba(255,150,130,${a})`;
    ctx.fillText(q.bubble.text, bx, by);
  }
}
function icon(ctx, x, y, color, ch, fs) {
  ctx.fillStyle = 'rgba(10,12,16,0.8)'; ctx.beginPath(); ctx.arc(x, y, fs * 0.75, 0, TAU); ctx.fill();
  ctx.strokeStyle = color; ctx.lineWidth = fs * 0.12; ctx.stroke();
  ctx.fillStyle = color; ctx.font = `bold ${fs}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ch, x, y + fs * 0.05); ctx.textBaseline = 'alphabetic';
}
function progressRing(ctx, x, y, r, t, color) {
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, r, -Math.PI / 2, -Math.PI / 2 + TAU * clamp(t, 0, 1)); ctx.stroke();
}

// =====================================================================
//  HUD
// =====================================================================
function panel(ctx, x, y, w, h, a = 0.62) { ctx.fillStyle = `rgba(8,10,14,${a})`; ctx.fillRect(x, y, w, h); ctx.fillStyle = 'rgba(230,195,92,0.6)'; ctx.fillRect(x, y, 2, h); }
function txt(ctx, s, x, y, size, color, align = 'left', bold = false, font = FONT) { ctx.font = `${bold ? 'bold ' : ''}${size}px ${font}`; ctx.textAlign = align; ctx.fillStyle = color; ctx.fillText(s, x, y); }
function renderHUD(ctx) {
  const W = G.cssW, H = G.cssH, p = G.player;
  ctx.setTransform(G.dpr, 0, 0, G.dpr, 0, 0);
  // screen effects
  if (G.hurtFx > 0.01) {
    const gr = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.3, W / 2, H / 2, Math.max(W, H) * 0.7);
    gr.addColorStop(0, 'rgba(160,0,0,0)'); gr.addColorStop(1, `rgba(160,0,0,${0.55 * G.hurtFx})`);
    ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
  }
  const lowHp = p.ok && p.hp < 35;
  if (lowHp) { ctx.fillStyle = `rgba(120,0,0,${0.12 + Math.sin(G.time * 4) * 0.05})`; ctx.fillRect(0, 0, W, H); }
  if (p.gasT > 0 && G.loadout.head !== 'gasmask') { ctx.fillStyle = 'rgba(170,190,110,0.22)'; ctx.fillRect(0, 0, W, H); }
  if (G.flashFx > 0.01) { ctx.fillStyle = `rgba(255,255,255,${Math.min(1, G.flashFx * 1.1)})`; ctx.fillRect(0, 0, W, H); }

  // objectives (top-left)
  const obj = G.objectives();
  const lines = obj.list;
  panel(ctx, 14, 14, 300, 52 + lines.length * 20);
  txt(ctx, G.mission.name + '  ·  ' + G.mission.title, 24, 34, 13, '#e6c35c', 'left', true);
  txt(ctx, 'ELAPSED ' + fmtTime(G.time) + (G.bomb && !G.bomb.defused ? '    DEVICE  ' + fmtTime(G.bomb.t) : ''), 24, 52, 11, G.bomb && !G.bomb.defused && G.bomb.t < 60 ? '#ff6a5a' : '#9aa3ad', 'left', false, MONO);
  lines.forEach((l, i) => {
    const y = 74 + i * 20;
    ctx.fillStyle = l.done ? '#7fd07a' : l.optional ? '#7d8790' : '#d8d2c0';
    ctx.fillRect(24, y - 9, 9, 9);
    if (!l.done) { ctx.fillStyle = 'rgba(8,10,14,0.9)'; ctx.fillRect(25.5, y - 7.5, 6, 6); }
    txt(ctx, l.text, 40, y, 12, l.done ? '#9fd39a' : l.optional ? '#8a949e' : '#e6e0cf');
  });
  if (obj.complete && G.state === 'playing') {
    const a = 0.6 + Math.sin(G.time * 3) * 0.3;
    panel(ctx, W / 2 - 230, 70, 460, 40, 0.8);
    txt(ctx, 'ALL REQUIRED OBJECTIVES COMPLETE — press ENTER to end mission', W / 2, 95, 13, `rgba(127,208,122,${a + 0.2})`, 'center', true);
  }
  // radio log (top-right)
  const rl = G.radio.filter(r => G.time - r.t < 14).slice(-7);
  if (rl.length) {
    panel(ctx, W - 380, 14, 366, 18 + rl.length * 18);
    rl.forEach((r, i) => {
      const a = clamp(14 - (G.time - r.t), 0, 1);
      txt(ctx, r.who + ':', W - 368, 30 + i * 18, 11, hexA(r.color.startsWith('#') ? r.color : '#cccccc', a), 'left', true, MONO);
      txt(ctx, r.text, W - 368 + 76, 30 + i * 18, 12, `rgba(225,225,215,${a})`);
    });
  }
  // flash messages
  G.msgs = G.msgs.filter(m => G.time - m.t < 2.6);
  G.msgs.forEach((m, i) => { const a = clamp(2.6 - (G.time - m.t), 0, 1); txt(ctx, m.text, W / 2, 140 + i * 22, 15, hexA(m.color, a), 'center', true); });

  // bottom-left: health + weapon + gear
  const bx = 14, by = H - 120;
  panel(ctx, bx, by, 330, 106);
  txt(ctx, 'HEALTH', bx + 12, by + 20, 10, '#8a949e', 'left', true);
  ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.fillRect(bx + 64, by + 12, 140, 9);
  ctx.fillStyle = p.hp > 60 ? '#7fd07a' : p.hp > 30 ? '#e6c35c' : '#ff5a4a'; ctx.fillRect(bx + 64, by + 12, 140 * clamp(p.hp / 100, 0, 1), 9);
  txt(ctx, ARMORS[G.loadout.armor].name + ' · ' + HEADGEAR[G.loadout.head].name, bx + 212, by + 20, 10, '#8a949e');
  const g = currentGun(p);
  if (g) {
    txt(ctx, g.def.name.toUpperCase() + (g.def.ll ? '  [LESS-LETHAL]' : ''), bx + 12, by + 44, 13, g.def.ll ? '#9fdcff' : '#e6e0cf', 'left', true);
    txt(ctx, String(g.cur), bx + 12, by + 80, 30, g.cur === 0 ? '#ff5a4a' : '#ffffff', 'left', true, MONO);
    txt(ctx, '/' + g.def.mag, bx + 12 + ctx.measureText(String(g.cur)).width + 4, by + 80, 13, '#8a949e', 'left', false, MONO);
    g.mags.forEach((m, i) => { const h = 22 * m / g.def.mag; ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fillRect(bx + 110 + i * 9, by + 58, 6, 22); ctx.fillStyle = '#d8d2c0'; ctx.fillRect(bx + 110 + i * 9, by + 80 - h, 6, h); });
    if (p.reloadT > 0) txt(ctx, 'RELOADING', bx + 110, by + 96, 11, '#9fd3a0', 'left', true);
    else if (g.cur === 0) txt(ctx, g.mags.length ? 'PRESS R TO RELOAD' : 'OUT OF AMMO', bx + 110, by + 96, 11, '#ff6a5a', 'left', true);
  } else if (p.equip === 'grenade') {
    txt(ctx, (GEAR[p.grenadeSel] ? GEAR[p.grenadeSel].name : 'Grenade').toUpperCase(), bx + 12, by + 44, 13, '#e6e0cf', 'left', true);
    txt(ctx, 'x' + (G.inv[p.grenadeSel] || 0), bx + 12, by + 80, 28, '#fff', 'left', true, MONO);
    txt(ctx, '[3] cycle type · click or [G] to throw', bx + 90, by + 76, 11, '#8a949e');
  } else {
    const t = p.tacSel;
    const name = t === 'mirror' || t === 'ram' ? LONG_TACTICAL[t].name : GEAR[t].name;
    txt(ctx, name.toUpperCase(), bx + 12, by + 44, 13, '#e6e0cf', 'left', true);
    const hint = t === 'c2' ? (G.playerC2 ? 'CHARGE ARMED — click to DETONATE' : 'Hold click on a door to place  (x' + G.inv.c2 + ')') : t === 'wedge' ? 'Hold click on a closed door  (x' + G.inv.wedge + ')' : t === 'mirror' ? 'Hold click at a door to peek under it' : 'Click a door to smash it open';
    txt(ctx, hint, bx + 12, by + 72, 12, t === 'c2' && G.playerC2 ? '#ff6a5a' : '#c8c2b0');
    txt(ctx, '[4] cycle tactical item', bx + 12, by + 92, 11, '#8a949e');
  }
  // gear strip
  const gx = bx + 222;
  ['flash', 'stinger', 'cs', 'c2', 'wedge'].forEach((k, i) => {
    const y = by + 40 + i * 13;
    txt(ctx, GEAR[k].name, gx, y, 10, G.inv[k] ? '#c8c2b0' : '#5a626a');
    txt(ctx, 'x' + G.inv[k], gx + 96, y, 10, G.inv[k] ? '#e6e0cf' : '#5a626a', 'right', true, MONO);
  });

  // bottom-right: team
  const tw = 300, tx = W - tw - 14, offs = G.officers.length;
  const th = 48 + offs * 22;
  const ty = H - th - 14;
  panel(ctx, tx, ty, tw, th);
  txt(ctx, 'ELEMENT', tx + 12, ty + 20, 10, '#8a949e', 'left', true);
  ['gold', 'red', 'blue'].forEach((t, i) => {
    const x = tx + 80 + i * 70, sel = G.teamSel === t;
    ctx.fillStyle = sel ? hexA(TEAM_COLORS[t], 0.9) : 'rgba(255,255,255,0.06)'; ctx.fillRect(x, ty + 8, 62, 17);
    txt(ctx, t.toUpperCase(), x + 31, ty + 21, 11, sel ? '#0a0c10' : TEAM_COLORS[t], 'center', true);
  });
  G.officers.forEach((o, i) => {
    const y = ty + 46 + i * 22;
    ctx.fillStyle = TEAM_COLORS[o.team]; ctx.fillRect(tx + 12, y - 9, 4, 12);
    txt(ctx, o.name, tx + 22, y, 12, o.ok ? '#e6e0cf' : '#6a6f76', 'left', true);
    ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.fillRect(tx + 86, y - 7, 50, 6);
    ctx.fillStyle = o.hp > 60 ? '#7fd07a' : o.hp > 30 ? '#e6c35c' : '#ff5a4a'; ctx.fillRect(tx + 86, y - 7, 50 * clamp(o.hp / 100, 0, 1), 6);
    txt(ctx, officerStatus(o), tx + 146, y, 11, o.ok ? '#a8b0b8' : '#ff6a5a');
  });
  txt(ctx, 'Team gear  F' + G.teamGear.flash + ' S' + G.teamGear.stinger + ' G' + G.teamGear.cs + ' C2:' + G.teamGear.c2 + ' W' + G.teamGear.wedge, tx + 12, ty + th - 8, 10, '#6f7880', 'left', false, MONO);

  // interaction prompt
  if (p.ok && !Cmd.open) {
    const it = p.action ? null : findInteract(p);
    const pr = p.action ? (p.action.label || p.action.type) + '…' : interactPrompt(it);
    if (pr) {
      ctx.font = `bold 14px ${FONT}`; const w = ctx.measureText(pr).width + 28;
      panel(ctx, W / 2 - w / 2, H - 92, w, 30, 0.75);
      txt(ctx, pr, W / 2, H - 72, 14, '#e6e0cf', 'center', true);
      if (p.action) { ctx.fillStyle = '#e6c35c'; ctx.fillRect(W / 2 - w / 2, H - 64, w * p.action.t / p.action.dur, 2); }
    }
  }
  // hints
  if (G.showHelp) drawHelp(ctx);
  else txt(ctx, '[H] controls   [Z / MMB] command team   [C] select team   [TAB] map', W / 2, H - 16, 11, 'rgba(200,200,190,0.45)', 'center');
  // crosshair
  if (p.ok && !Cmd.open && !G.showMap) {
    const mx = Input.mouse.x, my = Input.mouse.y;
    let gap = 6;
    if (g) { const dd = dist(p.x, p.y, G.mouseWorld.x, G.mouseWorld.y) * G.cam.scale; gap = Math.max(4, Math.tan(g.def.spread * (p.ads ? 0.5 : 1) + g.def.moveSpread * p.speedFrac + p.recoil) * dd); }
    ctx.strokeStyle = g && g.def.ll ? '#9fdcff' : '#e6e0cf'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(mx - gap - 7, my); ctx.lineTo(mx - gap, my); ctx.moveTo(mx + gap, my); ctx.lineTo(mx + gap + 7, my);
    ctx.moveTo(mx, my - gap - 7); ctx.lineTo(mx, my - gap); ctx.moveTo(mx, my + gap); ctx.lineTo(mx, my + gap + 7);
    ctx.stroke();
    ctx.fillStyle = '#e6e0cf'; ctx.fillRect(mx - 1, my - 1, 2, 2);
  }
  if (Cmd.open) drawCmd(ctx);
  if (G.showMap) drawMap(ctx);
  if (!p.ok) { ctx.fillStyle = 'rgba(60,0,0,0.5)'; ctx.fillRect(0, 0, W, H); txt(ctx, 'YOU ARE DOWN', W / 2, H / 2, 34, '#ff6a5a', 'center', true); }
}
function officerStatus(o) {
  if (o.status === 'dead') return 'KIA'; if (!o.ok) return 'DOWN';
  if (o.threat) return 'ENGAGING';
  if (o.task) return { restrain: 'Restraining', collect: 'Collecting', report: 'Reporting' }[o.task.type];
  const ord = o.order;
  if (ord.type === 'entry') {
    const e = ord.e;
    return { stack: 'Stacking', waiting: 'Ready — waiting', breach: { open: 'Opening', kick: 'Kicking', ram: 'Ramming', c2: 'C2 breach', mirror: 'Mirroring', pick: 'Picking lock', wedge: 'Wedging', disarm: 'Disarming', close: 'Closing', move: 'Moving in' }[e.method] || 'Breaching', grenade: 'Grenade out', enter: 'Clearing', clear: 'Clearing', held: 'Holding door' }[e.phase] || 'On door';
  }
  return { follow: 'Following', move: 'Moving', hold: 'Holding', cover: 'Covering', secure: 'Securing' }[ord.type] || ord.type;
}
function drawCmd(ctx) {
  const rowH = 24, w = 250;
  const n = Cmd.items.length;
  let x = Cmd.sx + 16, y = Cmd.sy - 10;
  if (x + w > G.cssW - 10) x = Cmd.sx - w - 16;
  if (y + 36 + n * rowH > G.cssH - 10) y = G.cssH - 46 - n * rowH;
  y = Math.max(10, y);
  panel(ctx, x, y, w, 36 + n * rowH + 22, 0.88);
  ctx.fillStyle = TEAM_COLORS[G.teamSel]; ctx.fillRect(x, y, w, 3);
  txt(ctx, Cmd.title, x + 12, y + 23, 12, TEAM_COLORS[G.teamSel], 'left', true);
  Cmd.rects = [];
  const mx = Input.mouse.x, my = Input.mouse.y;
  Cmd.hover = -1;
  Cmd.items.forEach((it, i) => {
    const ry = y + 34 + i * rowH;
    Cmd.rects.push({ x, y: ry, w, h: rowH });
    const hov = mx >= x && mx <= x + w && my >= ry && my < ry + rowH;
    if (hov) { Cmd.hover = i; ctx.fillStyle = 'rgba(230,195,92,0.16)'; ctx.fillRect(x + 2, ry, w - 2, rowH); }
    txt(ctx, String((i + 1) % 10), x + 14, ry + 16, 12, it.disabled ? '#4a5058' : '#e6c35c', 'left', true, MONO);
    txt(ctx, it.label, x + 34, ry + 16, 13, it.disabled ? '#5a626a' : '#e6e0cf');
  });
  txt(ctx, 'Hold SHIFT: wait for GO [X]', x + 12, y + 36 + n * rowH + 14, 10, '#7d8790');
}
function drawMap(ctx) {
  const L = G.level, W = G.cssW, H = G.cssH;
  ctx.fillStyle = 'rgba(4,6,9,0.86)'; ctx.fillRect(0, 0, W, H);
  const s = Math.min((W - 80) / (L.w * TS), (H - 120) / (L.h * TS));
  const ox = (W - L.w * TS * s) / 2, oy = (H - L.h * TS * s) / 2 + 10;
  ctx.save(); ctx.translate(ox, oy); ctx.scale(s, s);
  ctx.drawImage(G.staticC, 0, 0);
  ctx.fillStyle = '#05070a';
  for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) if (!L.explored[L.idx(tx, ty)]) ctx.fillRect(tx * TS - 0.5, ty * TS - 0.5, TS + 1, TS + 1);
  for (const d of L.doors) if (L.explored[L.idx(d.tx, d.ty)]) drawDoor(ctx, d);
  for (const it of G.items) if (it.seen && !it.collected) { ctx.fillStyle = '#78c8ff'; ctx.beginPath(); ctx.arc(it.x, it.y, 8, 0, TAU); ctx.fill(); }
  for (const p of G.npcs) {
    if (!p.seen) continue;
    const x = p.visible || !p.ok ? p.x : p.ghost ? p.ghost.x : null; if (x == null) continue;
    const y = p.visible || !p.ok ? p.y : p.ghost.y;
    ctx.fillStyle = !p.ok ? '#666' : npcRingColor(p); ctx.beginPath(); ctx.arc(x, y, 11, 0, TAU); ctx.fill();
  }
  for (const o of G.swat) { ctx.fillStyle = o.kind === 'player' ? '#e6c35c' : TEAM_COLORS[o.team]; if (!o.ok) ctx.fillStyle = '#555'; ctx.beginPath(); ctx.arc(o.x, o.y, 13, 0, TAU); ctx.fill(); }
  ctx.restore();
  txt(ctx, 'TACTICAL MAP — ' + G.mission.location, W / 2, 34, 16, '#e6c35c', 'center', true);
  txt(ctx, '● you   ● officers   ● armed suspect   ● unarmed suspect   ● civilian   ● compliant   ● evidence', W / 2, H - 24, 12, '#a8b0b8', 'center');
}
function drawHelp(ctx) {
  const W = G.cssW, H = G.cssH;
  const rows = [
    ['WASD', 'Move  (SHIFT sprint — noisy)'], ['Mouse', 'Aim  ·  LMB fire / use  ·  RMB aim down sights'], ['Q / E', 'Lean left / right (peek corners)'],
    ['F', 'Yell for compliance'], ['SPACE', 'Interact: doors, restrain, collect evidence, report, defuse'], ['V', 'Kick door'],
    ['R', 'Reload (magazines keep partial rounds)'], ['1 / 2', 'Primary / sidearm'], ['3', 'Grenades (press again to cycle)  ·  G quick-throw'], ['4', 'Tactical: C2, wedge, mirror / ram (press again to cycle)'],
    ['Z / MMB', 'Squad command menu on door / person / ground'], ['C', 'Cycle element: GOLD / RED / BLUE'], ['SHIFT+cmd', 'Issue breach "on my command"   ·   X = GO'],
    ['TAB', 'Tactical map'], ['ENTER', 'End mission (when complete)'], ['ESC', 'Pause'],
  ];
  const w = 560, h = 40 + rows.length * 21;
  const x = W / 2 - w / 2, y = H / 2 - h / 2;
  panel(ctx, x, y, w, h, 0.9);
  txt(ctx, 'CONTROLS', x + 16, y + 26, 14, '#e6c35c', 'left', true);
  rows.forEach((r, i) => { txt(ctx, r[0], x + 16, y + 52 + i * 21, 12, '#e6c35c', 'left', true, MONO); txt(ctx, r[1], x + 120, y + 52 + i * 21, 13, '#e6e0cf'); });
}
