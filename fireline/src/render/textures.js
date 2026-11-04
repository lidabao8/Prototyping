// Procedural canvas textures. Everything is generated at runtime so the game has no asset files.
import * as THREE from 'three';
import { makeNoise2D, makeRng } from '../core/math.js';

const cache = new Map();

function canvasTex(size, draw, { srgb = true, repeat = true } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  return t;
}

function noiseFill(g, size, base, vary, scale, seed, oct = 4) {
  const n = makeNoise2D(seed);
  const img = g.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // tileable noise via torus mapping
      const a = (x / size) * Math.PI * 2, b = (y / size) * Math.PI * 2;
      const nx = Math.cos(a) * scale, ny = Math.sin(a) * scale, nz = Math.cos(b) * scale, nw = Math.sin(b) * scale;
      const v = (n.fbm(nx + nz * 0.7, ny + nw * 0.7, oct) + n.fbm(nz - 3.1, nw + 1.7, oct) * 0.6) * 0.5;
      const i = (y * size + x) * 4;
      d[i] = Math.max(0, Math.min(255, base[0] + v * vary[0]));
      d[i + 1] = Math.max(0, Math.min(255, base[1] + v * vary[1]));
      d[i + 2] = Math.max(0, Math.min(255, base[2] + v * vary[2]));
      d[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
}

function speckle(g, size, count, colors, rmin, rmax, seed, alpha = 0.5) {
  const r = makeRng(seed);
  for (let i = 0; i < count; i++) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    g.globalAlpha = alpha * (0.4 + r() * 0.6);
    const x = r() * size, y = r() * size, s = rmin + r() * (rmax - rmin);
    for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
      g.fillRect(x + ox, y + oy, s, s * (0.6 + r() * 0.8));
    }
  }
  g.globalAlpha = 1;
}

export function getTexture(name) {
  if (cache.has(name)) return cache.get(name);
  let t;
  switch (name) {
    case 'grass': t = canvasTex(256, (g, s) => { noiseFill(g, s, [118, 128, 118], [40, 45, 30], 3, 11); speckle(g, s, 900, ['#9fb07a', '#5f7046', '#b7c48b', '#4d5c38'], 1, 3, 2, 0.45); }); break;
    case 'drygrass': t = canvasTex(256, (g, s) => { noiseFill(g, s, [150, 135, 100], [40, 35, 25], 3, 12); speckle(g, s, 900, ['#c9b68a', '#8f7b55', '#d8c79d', '#a39064'], 1, 3, 3, 0.5); }); break;
    case 'dirt': t = canvasTex(256, (g, s) => { noiseFill(g, s, [128, 112, 96], [45, 40, 35], 4, 13); speckle(g, s, 700, ['#8a7560', '#a8927a', '#5e4f40', '#c2ae95'], 1, 4, 4, 0.5); }); break;
    case 'rock': t = canvasTex(256, (g, s) => {
      noiseFill(g, s, [130, 128, 124], [55, 55, 55], 5, 14, 5);
      const r = makeRng(9); g.strokeStyle = 'rgba(40,40,40,0.35)'; g.lineWidth = 1.2;
      for (let i = 0; i < 40; i++) { g.beginPath(); let x = r() * s, y = r() * s; g.moveTo(x, y); for (let k = 0; k < 5; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; g.lineTo(x, y); } g.stroke(); }
    }); break;
    case 'sand': t = canvasTex(256, (g, s) => { noiseFill(g, s, [196, 178, 140], [30, 28, 22], 6, 15); speckle(g, s, 1200, ['#d9c8a0', '#b19a72', '#e8dcb8'], 1, 2, 6, 0.4); }); break;
    case 'gravel': t = canvasTex(256, (g, s) => { noiseFill(g, s, [140, 132, 118], [35, 32, 30], 6, 16); speckle(g, s, 1600, ['#7d766a', '#b5ab98', '#5d564b', '#cfc5b0'], 1, 4, 7, 0.65); }); break;
    case 'asphalt': t = canvasTex(256, (g, s) => { noiseFill(g, s, [92, 92, 94], [24, 24, 24], 8, 17); speckle(g, s, 1500, ['#6b6b6e', '#4a4a4c', '#8a8a8a'], 1, 2, 8, 0.5); }); break;
    case 'plaster': t = canvasTex(256, (g, s) => { noiseFill(g, s, [222, 220, 214], [30, 30, 30], 5, 18); speckle(g, s, 300, ['#bdb8ae', '#e9e6df'], 2, 8, 10, 0.25); }); break;
    case 'brick': t = canvasTex(256, (g, s) => {
      g.fillStyle = '#bfb6aa'; g.fillRect(0, 0, s, s);
      const r = makeRng(21); const bh = s / 16, bw = s / 8;
      for (let row = 0; row < 16; row++) for (let col = -1; col < 9; col++) {
        const off = (row % 2) * bw * 0.5; const v = 200 + r() * 55;
        g.fillStyle = `rgb(${v},${v * 0.92},${v * 0.86})`;
        g.fillRect(col * bw + off + 1, row * bh + 1, bw - 2, bh - 2);
      }
      speckle(g, s, 400, ['#8d857a', '#ffffff'], 1, 3, 11, 0.2);
    }); break;
    case 'wood': t = canvasTex(256, (g, s) => {
      const r = makeRng(31); const pw = s / 8;
      for (let i = 0; i < 8; i++) { const v = 190 + r() * 60; g.fillStyle = `rgb(${v},${v * 0.9},${v * 0.82})`; g.fillRect(0, i * pw, s, pw); }
      g.strokeStyle = 'rgba(60,40,25,0.5)'; for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(0, i * pw); g.lineTo(s, i * pw); g.stroke(); }
      g.strokeStyle = 'rgba(90,60,35,0.18)'; for (let i = 0; i < 120; i++) { const y = r() * s; g.beginPath(); g.moveTo(r() * s, y); g.lineTo(r() * s, y + (r() - 0.5) * 4); g.stroke(); }
    }); break;
    case 'concrete': t = canvasTex(256, (g, s) => { noiseFill(g, s, [196, 194, 188], [30, 30, 30], 7, 19); speckle(g, s, 500, ['#a8a59e', '#d9d6cf', '#8c8982'], 1, 3, 12, 0.35); g.strokeStyle = 'rgba(80,80,80,0.25)'; g.strokeRect(0.5, 0.5, s - 1, s - 1); }); break;
    case 'metal': t = canvasTex(256, (g, s) => {
      const grd = g.createLinearGradient(0, 0, s / 16, 0);
      grd.addColorStop(0, '#d8d8d8'); grd.addColorStop(0.5, '#f4f4f4'); grd.addColorStop(1, '#bcbcbc');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
      for (let i = 0; i < 16; i++) { g.fillStyle = i % 2 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)'; g.fillRect(i * s / 16, 0, s / 32, s); }
      speckle(g, s, 260, ['#8a6a4a', '#6b5038'], 1, 5, 13, 0.25);
    }); break;
    case 'sandbag': t = canvasTex(256, (g, s) => {
      g.fillStyle = '#bba57c'; g.fillRect(0, 0, s, s);
      const r = makeRng(41); const bh = s / 4, bw = s / 2;
      for (let row = 0; row < 4; row++) for (let col = -1; col < 3; col++) {
        const off = (row % 2) * bw * 0.5; const v = 170 + r() * 40;
        g.fillStyle = `rgb(${v},${v * 0.9},${v * 0.7})`;
        g.beginPath(); g.ellipse(col * bw + off + bw / 2, row * bh + bh / 2, bw / 2 - 3, bh / 2 - 3, 0, 0, Math.PI * 2); g.fill();
      }
      speckle(g, s, 500, ['#7f6d4d', '#d4c29b'], 1, 2, 14, 0.3);
    }); break;
    case 'hay': t = canvasTex(256, (g, s) => { noiseFill(g, s, [200, 172, 96], [40, 35, 20], 9, 20); g.strokeStyle = 'rgba(120,90,30,0.35)'; const r = makeRng(5); for (let i = 0; i < 300; i++) { const x = r() * s, y = r() * s; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 20, y + (r() - 0.5) * 6); g.stroke(); } }); break;
    case 'roof': t = canvasTex(256, (g, s) => {
      g.fillStyle = '#c8c0b8'; g.fillRect(0, 0, s, s);
      const r = makeRng(51); for (let row = 0; row < 10; row++) for (let col = -1; col < 11; col++) {
        const off = (row % 2) * s / 20; const v = 175 + r() * 60;
        g.fillStyle = `rgb(${v},${v * 0.95},${v * 0.92})`; g.fillRect(col * s / 10 + off + 1, row * s / 10 + 1, s / 10 - 2, s / 10 - 1);
        g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(col * s / 10 + off, row * s / 10 + s / 10 - 3, s / 10, 3);
      }
    }); break;
    case 'cloth': t = canvasTex(128, (g, s) => { noiseFill(g, s, [230, 230, 230], [20, 20, 20], 4, 22); g.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 0; i < s; i += 16) g.fillRect(i, 0, 8, s); }); break;
    case 'noise': t = canvasTex(256, (g, s) => noiseFill(g, s, [128, 128, 128], [127, 127, 127], 2, 23, 5), { srgb: false }); break;
    case 'smoke': t = canvasTex(128, (g, s) => {
      const n = makeNoise2D(77); const img = g.createImageData(s, s); const d = img.data;
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
        const dx = (x - s / 2) / (s / 2), dy = (y - s / 2) / (s / 2); const r = Math.sqrt(dx * dx + dy * dy);
        const v = Math.max(0, 1 - r) * (0.65 + 0.35 * n.fbm(x / 22, y / 22, 4));
        const i = (y * s + x) * 4; d[i] = d[i + 1] = d[i + 2] = 255; d[i + 3] = Math.max(0, Math.min(255, Math.pow(v, 1.4) * 255));
      }
      g.putImageData(img, 0, 0);
    }, { repeat: false, srgb: false }); break;
    case 'spark': t = canvasTex(64, (g, s) => {
      const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,255,255,0.8)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
    }, { repeat: false, srgb: false }); break;
    case 'flash': t = canvasTex(128, (g, s) => {
      g.translate(s / 2, s / 2);
      for (let i = 0; i < 7; i++) {
        g.rotate(Math.PI * 2 / 7 + 0.3);
        const grd = g.createLinearGradient(0, 0, s / 2, 0); grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = grd; g.beginPath(); g.moveTo(0, -6); g.lineTo(s / 2, 0); g.lineTo(0, 6); g.fill();
      }
      const grd = g.createRadialGradient(0, 0, 0, 0, 0, s / 3); grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(-s / 2, -s / 2, s, s);
    }, { repeat: false, srgb: false }); break;
    case 'bullethole': t = canvasTex(64, (g, s) => {
      const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      grd.addColorStop(0, 'rgba(10,10,10,1)'); grd.addColorStop(0.18, 'rgba(20,18,16,1)'); grd.addColorStop(0.32, 'rgba(60,55,50,0.7)'); grd.addColorStop(1, 'rgba(60,55,50,0)');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
    }, { repeat: false }); break;
    case 'scorch': t = canvasTex(128, (g, s) => {
      const n = makeNoise2D(99); const img = g.createImageData(s, s); const d = img.data;
      for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
        const dx = (x - s / 2) / (s / 2), dy = (y - s / 2) / (s / 2); const r = Math.sqrt(dx * dx + dy * dy);
        const v = Math.max(0, 1 - r * (0.8 + 0.4 * n.fbm(x / 14, y / 14, 3)));
        const i = (y * s + x) * 4; d[i] = 15; d[i + 1] = 12; d[i + 2] = 10; d[i + 3] = Math.min(255, v * 330);
      }
      g.putImageData(img, 0, 0);
    }, { repeat: false }); break;
    default: throw new Error('unknown texture ' + name);
  }
  cache.set(name, t);
  return t;
}
