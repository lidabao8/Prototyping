// Low-poly geometry builders with baked vertex colors, merged into single draw calls.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const _c = new THREE.Color();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

function colorize(g, color, jitter = 0) {
  g = g.index ? g.toNonIndexed() : g;
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  _c.set(color);
  const base = _c.clone();
  for (let i = 0; i < n; i += 3) {
    const j = jitter ? 1 + (Math.random() - 0.5) * jitter : 1;
    for (let k = 0; k < 3; k++) {
      col[(i + k) * 3] = base.r * j; col[(i + k) * 3 + 1] = base.g * j; col[(i + k) * 3 + 2] = base.b * j;
    }
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (g.attributes.uv) g.deleteAttribute('uv');
  return g;
}

function place(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _e.set(rx, ry, rz); _q.setFromEuler(_e); _p.set(x, y, z); _s.set(sx, sy, sz);
  _m.compose(_p, _q, _s);
  g.applyMatrix4(_m);
  return g;
}

export const G = {
  colorize(g, color) { return colorize(g, color); },
  box(w, h, d, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, jitter = 0) {
    return place(colorize(new THREE.BoxGeometry(w, h, d), color, jitter), x, y, z, rx, ry, rz);
  },
  cyl(rt, rb, h, seg, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, jitter = 0) {
    return place(colorize(new THREE.CylinderGeometry(rt, rb, h, seg), color, jitter), x, y, z, rx, ry, rz);
  },
  tube(r, len, seg, color, x = 0, y = 0, z = 0, rx = Math.PI / 2, ry = 0, rz = 0) {
    return place(colorize(new THREE.CylinderGeometry(r, r, len, seg, 1, true), color), x, y, z, rx, ry, rz);
  },
  ring(rIn, rOut, seg, color, x = 0, y = 0, z = 0) {
    return place(colorize(new THREE.RingGeometry(rIn, rOut, seg), color), x, y, z);
  },
  // hollow sleeve: outer + inner wall + end caps, axis along Z
  sleeve(rOut, rIn, len, seg, color, x = 0, y = 0, z = 0) {
    const parts = [
      place(colorize(new THREE.CylinderGeometry(rOut, rOut, len, seg, 1, true), color), x, y, z, Math.PI / 2),
      place(colorize(new THREE.CylinderGeometry(rIn, rIn, len, seg, 1, true), color), x, y, z, Math.PI / 2),
      place(colorize(new THREE.RingGeometry(rIn, rOut, seg), color), x, y, z + len / 2),
      place(colorize(new THREE.RingGeometry(rIn, rOut, seg), color), x, y, z - len / 2, 0, Math.PI, 0),
    ];
    return parts;
  },
  cone(r, h, seg, color, x = 0, y = 0, z = 0, jitter = 0) {
    return place(colorize(new THREE.ConeGeometry(r, h, seg), color, jitter), x, y, z);
  },
  ico(r, detail, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, jitter = 0.1, deform = 0) {
    let g = new THREE.IcosahedronGeometry(r, detail);
    if (deform) {
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const k = 1 + (Math.sin(p.getX(i) * 12.9 + p.getY(i) * 78.2 + p.getZ(i) * 37.7) * 0.5) * deform;
        p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k);
      }
    }
    return place(colorize(g, color, jitter), x, y, z, 0, 0, 0, sx, sy, sz);
  },
  dodeca(r, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, jitter = 0.12) {
    return place(colorize(new THREE.DodecahedronGeometry(r, 0), color, jitter), x, y, z, 0, 0, 0, sx, sy, sz);
  },
  prism(w, h, d, color, x = 0, y = 0, z = 0, ry = 0) {
    // triangular prism (gable roof), ridge along x
    const s = new THREE.Shape();
    s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, h); s.lineTo(-d / 2, 0);
    let g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false });
    g.translate(0, 0, -w / 2);
    g.rotateY(Math.PI / 2);
    return place(colorize(g, color), x, y, z, 0, ry, 0);
  },
  pyramid(w, h, color, x = 0, y = 0, z = 0) {
    const g = new THREE.ConeGeometry(w * 0.7071, h, 4);
    g.rotateY(Math.PI / 4);
    return place(colorize(g, color), x, y + h / 2, z);
  },
  merge(list) {
    const ok = list.filter(Boolean).map(g => { if (g.attributes.uv) g.deleteAttribute('uv'); if (g.attributes.uv1) g.deleteAttribute('uv1'); return g; });
    const m = mergeGeometries(ok, false);
    m.computeBoundingSphere(); m.computeBoundingBox();
    return m;
  },
};
