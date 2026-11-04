// Main-menu diorama and the deploy screen's rotating weapon preview.
import * as THREE from 'three';
import { G } from '../render/geo.js';
import { buildSoldier, setRigWeapon, buildWeaponGeo } from '../entities/models.js';
import { getTexture } from '../render/textures.js';

function pine(x, z, s) {
  return G.merge([G.cyl(0.16 * s, 0.26 * s, 3 * s, 6, 0x5a4232, x, 1.5 * s, z), G.cone(2.2 * s, 3.2 * s, 7, 0x2f5a2e, x, 3.4 * s, z, 0.12), G.cone(1.7 * s, 2.7 * s, 7, 0x356535, x, 5.1 * s, z, 0.12), G.cone(1.1 * s, 2.2 * s, 7, 0x3c7039, x, 6.6 * s, z, 0.12)]);
}

export class Showcase {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9fb4c4);
    this.scene.fog = new THREE.Fog(0x9fb4c4, 30, 75);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
    this.t = 0;
    this.build();
  }

  build() {
    const sc = this.scene;
    const hemi = new THREE.HemisphereLight(0xc8dcf0, 0x5a5040, 1.2); sc.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff0d8, 3.2);
    sun.position.set(12, 18, 8); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const c = sun.shadow.camera; c.left = -14; c.right = 14; c.top = 14; c.bottom = -14; c.near = 1; c.far = 60;
    sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03;
    sc.add(sun);
    // ground: low-poly disc with jittered heights and dirt patches
    const g = new THREE.CircleGeometry(60, 64, 0, Math.PI * 2);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const a = new THREE.Color(0x6a8f3c), b = new THREE.Color(0x8a7556), cc = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const r = Math.hypot(x, z);
      pos.setY(i, Math.sin(x * 0.35) * 0.15 + Math.cos(z * 0.27) * 0.15 + Math.max(0, r - 18) * 0.12 + (r > 20 ? Math.sin(x * 0.2 + z * 0.15) * 1.5 : 0));
      const dirt = Math.max(0, 1 - Math.hypot(x - 1, z + 1) / 5) + (Math.sin(x * 0.7) * Math.cos(z * 0.5) > 0.6 ? 0.4 : 0);
      cc.copy(a).lerp(b, Math.min(1, dirt));
      col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    const ground = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, map: getTexture('grass') }));
    ground.receiveShadow = true;
    sc.add(ground);
    const props = [];
    for (let i = 0; i < 6; i++) props.push(G.box(1, 0.95, 0.6, 0xb8a37a, -2.5 + i * 1.0, 0.47, -2.2, 0, 0.05 * (i % 2)));
    for (let i = 0; i < 4; i++) props.push(G.box(1, 0.5, 0.6, 0xa8936a, -2.0 + i * 1.0, 1.2, -2.2));
    props.push(G.box(1.2, 1.2, 1.2, 0x9c7b52, 4.2, 0.6, 1.5, 0, 0.3), G.box(1.0, 1.0, 1.0, 0xb08d5f, 4.6, 1.7, 1.4, 0, 0.6));
    props.push(G.box(2.4, 2.6, 6, 0x2f5f8b, -7, 1.3, 4, 0, 0.4));
    for (const [x, z, s] of [[-9, -8, 1.2], [8, -10, 1.0], [11, 4, 1.3], [-12, 2, 0.9], [3, -14, 1.1], [-4, 12, 1.0], [14, -4, 0.8]]) props.push(pine(x, z, s));
    const propMesh = new THREE.Mesh(G.merge(props), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true }));
    propMesh.castShadow = true; propMesh.receiveShadow = true;
    sc.add(propMesh);
    // soldiers
    this.rigs = [];
    const add = (team, cls, wid, x, z, yaw, pose) => {
      const rig = buildSoldier(team, cls, Math.floor(Math.random() * 5));
      const w = buildWeaponGeo(wid, { sight: 'reddot' });
      setRigWeapon(rig, w.geo, w.pistol ? 'pistol' : 'rifle');
      rig.root.position.set(x, 0, z); rig.root.rotation.y = yaw;
      rig.root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      sc.add(rig.root);
      this.rigs.push({ rig, pose, phase: Math.random() * 6 });
      return rig;
    };
    add(0, 'assault', 'm4a1', -0.8, -1.2, 0.2, 'kneel');
    add(0, 'support', 'm249', 1.6, -1.0, -0.15, 'stand');
    add(0, 'medic', 'mp7', 0.2, 1.6, 2.6, 'crouchwalk');
    add(0, 'recon', 'l96', -3.2, 1.0, 0.5, 'prone');
  }

  pose(r, t) {
    const { rig, pose } = r;
    const br = Math.sin(t * 1.6 + r.phase) * 0.01;
    rig.body.position.y = 0.95 + br; rig.aim.rotation.x = 0.02 + br; rig.spine.rotation.x = 0.03;
    const L = rig.legs;
    if (pose === 'kneel') {
      rig.body.position.y = 0.62 + br; rig.body.rotation.x = -0.08;
      L[0].thigh.rotation.x = 0.25; L[0].shin.rotation.x = -1.75; L[1].thigh.rotation.x = 1.1; L[1].shin.rotation.x = -1.65;
      rig.aim.rotation.x = 0.05 + br; rig.head.rotation.y = Math.sin(t * 0.4) * 0.15;
    } else if (pose === 'prone') {
      rig.body.position.y = 0.2; rig.body.rotation.x = -1.47; rig.aim.rotation.x = 1.47; rig.head.rotation.x = 1.15;
      L[0].thigh.rotation.z = 0.18; L[1].thigh.rotation.z = -0.18;
    } else if (pose === 'crouchwalk') {
      rig.body.position.y = 0.66 + br; rig.spine.rotation.x = 0.08;
      L[0].thigh.rotation.x = 0.9; L[0].shin.rotation.x = -1.4; L[1].thigh.rotation.x = 0.6; L[1].shin.rotation.x = -1.2;
      rig.aim.rotation.x = -0.25;
    } else {
      rig.spine.rotation.y = Math.sin(t * 0.3 + r.phase) * 0.12; rig.head.rotation.x = -0.05;
      L[0].thigh.rotation.x = 0.08; L[1].thigh.rotation.x = -0.05; L[0].thigh.rotation.z = 0.06; L[1].thigh.rotation.z = -0.06;
    }
  }

  render(dt, w, h) {
    this.t += dt;
    const t = this.t;
    const a = t * 0.06 + 0.9;
    this.camera.position.set(Math.cos(a) * 9.5, 2.6 + Math.sin(t * 0.13) * 0.4, Math.sin(a) * 9.5);
    this.camera.lookAt(-0.6, 0.9, 0);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    for (const r of this.rigs) this.pose(r, t);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  }
}

// Small dedicated renderer for the loadout weapon preview.
export class WeaponPreview {
  constructor(canvas) {
    this.canvas = canvas;
    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) { this.renderer = null; return; }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight(0xe8eef8, 0x403830, 1.6));
    const d = new THREE.DirectionalLight(0xffffff, 2.4); d.position.set(2, 3, 2); this.scene.add(d);
    const d2 = new THREE.DirectionalLight(0x9ab8ff, 1.0); d2.position.set(-3, 1, -2); this.scene.add(d2);
    this.camera = new THREE.PerspectiveCamera(30, 2, 0.05, 20);
    this.group = new THREE.Group(); this.scene.add(this.group);
    this.mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.25, side: THREE.DoubleSide });
    this.t = 0; this.key = null;
  }
  set(wid, att) {
    if (!this.renderer) return;
    const key = wid + JSON.stringify(att);
    if (key === this.key) return;
    this.key = key;
    this.group.clear();
    const m = buildWeaponGeo(wid, att);
    const mesh = new THREE.Mesh(m.geo, this.mat);
    m.geo.computeBoundingBox();
    const bb = m.geo.boundingBox, c = bb.getCenter(new THREE.Vector3());
    mesh.position.set(-c.x, -c.y, -c.z);
    this.group.add(mesh);
    this.size = bb.getSize(new THREE.Vector3()).length();
  }
  render(dt) {
    if (!this.renderer) return;
    this.t += dt;
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (!w || !h) return;
    if (this.canvas.width !== Math.floor(w * this.renderer.getPixelRatio())) this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    const dist = (this.size || 1) * 1.05;
    this.camera.position.set(0.15 * dist, 0.18 * dist, dist); this.camera.lookAt(0, 0, 0);
    this.group.rotation.y = Math.PI / 2 + Math.sin(this.t * 0.6) * 0.5;
    this.group.rotation.x = Math.sin(this.t * 0.4) * 0.05;
    this.renderer.render(this.scene, this.camera);
  }
}
