import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const randSign = () => (Math.random() < 0.5 ? -1 : 1);
export const DEG = Math.PI / 180;

export function randomUnit(out = new THREE.Vector3()) {
  const u = Math.random() * 2 - 1;
  const th = Math.random() * Math.PI * 2;
  const s = Math.sqrt(1 - u * u);
  return out.set(s * Math.cos(th), u, s * Math.sin(th));
}

// Random vector perpendicular to n (unit)
export function randomPerp(n, out = new THREE.Vector3()) {
  const a = Math.abs(n.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const u = new THREE.Vector3().crossVectors(n, a).normalize();
  const v = new THREE.Vector3().crossVectors(n, u);
  const th = Math.random() * Math.PI * 2;
  return out.copy(u).multiplyScalar(Math.cos(th)).addScaledVector(v, Math.sin(th));
}

/**
 * Ray / segment vs axis-aligned box (slab method).
 * box: {min:[x,y,z], max:[x,y,z]}. Returns entry distance or -1. Writes normal into out.n (array).
 * If the origin is inside the box, returns 0 with the normal opposing the ray.
 */
export function rayBox(o, d, box, maxT, out) {
  let tmin = 0, tmax = maxT, axis = -1, sign = 0;
  const oa = [o.x, o.y, o.z], da = [d.x, d.y, d.z];
  for (let i = 0; i < 3; i++) {
    const oi = oa[i], di = da[i], lo = box.min[i], hi = box.max[i];
    if (Math.abs(di) < 1e-12) {
      if (oi < lo || oi > hi) return -1;
      continue;
    }
    const inv = 1 / di;
    let t1 = (lo - oi) * inv, t2 = (hi - oi) * inv, s = -1;
    if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; s = 1; }
    if (t1 > tmin) { tmin = t1; axis = i; sign = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (out) {
    out.n[0] = out.n[1] = out.n[2] = 0;
    if (axis >= 0) out.n[axis] = sign;
    else { out.n[0] = -d.x; out.n[1] = -d.y; out.n[2] = -d.z; }
  }
  return tmin;
}

/** Ray vs sphere; returns first positive hit distance or -1 (0 if inside). */
export function raySphere(o, d, c, r, maxT) {
  const ox = o.x - c.x, oy = o.y - c.y, oz = o.z - c.z;
  const b = ox * d.x + oy * d.y + oz * d.z;
  const cc = ox * ox + oy * oy + oz * oz - r * r;
  if (cc <= 0) return 0;
  if (b > 0) return -1;
  const disc = b * b - cc;
  if (disc < 0) return -1;
  const t = -b - Math.sqrt(disc);
  return t <= maxT ? t : -1;
}

/** Closest point on box to p. */
export function closestOnBox(p, box, out) {
  out.x = clamp(p.x, box.min[0], box.max[0]);
  out.y = clamp(p.y, box.min[1], box.max[1]);
  out.z = clamp(p.z, box.min[2], box.max[2]);
  return out;
}

/** Shortest time t>=0 for |p + v t| = s t (projectile of speed s intercepting target at relative pos p, rel vel v). */
export function interceptTime(p, v, s) {
  const a = v.dot(v) - s * s;
  const b = 2 * p.dot(v);
  const c = p.dot(p);
  if (Math.abs(a) < 1e-6) {
    if (Math.abs(b) < 1e-9) return -1;
    const t = -c / b;
    return t > 0 ? t : -1;
  }
  const disc = b * b - 4 * a * c;
  if (disc < 0) return -1;
  const sq = Math.sqrt(disc);
  const t1 = (-b - sq) / (2 * a), t2 = (-b + sq) / (2 * a);
  const t = Math.min(t1, t2) > 0 ? Math.min(t1, t2) : Math.max(t1, t2);
  return t > 0 ? t : -1;
}

/** Distance travelled by a projectile with initial speed s0, accel a for burn seconds, then coasting. */
export function rocketDistance(t, s0, a, burn) {
  if (t <= burn) return s0 * t + 0.5 * a * t * t;
  const vb = s0 + a * burn;
  return s0 * burn + 0.5 * a * burn * burn + vb * (t - burn);
}

/** Intercept for an accelerating projectile: iterate on time. */
export function interceptTimeRocket(p, v, s0, a, burn, maxT = 4) {
  // bisection on f(t) = |p + v t| - dist(t)
  const tmp = new THREE.Vector3();
  const f = (t) => tmp.copy(p).addScaledVector(v, t).length() - rocketDistance(t, s0, a, burn);
  let lo = 0, hi = 0.05;
  if (f(lo) <= 0) return 0;
  while (f(hi) > 0) { hi *= 1.6; if (hi > maxT) return -1; }
  for (let i = 0; i < 30; i++) {
    const m = (lo + hi) * 0.5;
    if (f(m) > 0) lo = m; else hi = m;
  }
  return hi;
}

export class MinHeap {
  constructor() { this.a = []; }
  push(item, pri) {
    const a = this.a; a.push([pri, item]);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p][0] <= a[i][0]) break;
      [a[p], a[i]] = [a[i], a[p]]; i = p;
    }
  }
  pop() {
    const a = this.a; const top = a[0]; const last = a.pop();
    if (a.length) {
      a[0] = last; let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < a.length && a[l][0] < a[m][0]) m = l;
        if (r < a.length && a[r][0] < a[m][0]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; i = m;
      }
    }
    return top[1];
  }
  get size() { return this.a.length; }
}
