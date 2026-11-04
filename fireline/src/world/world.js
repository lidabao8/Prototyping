// Builds a playable world from a map definition: layout -> terrain -> collision -> structures -> vegetation -> nav.
import * as THREE from 'three';
import { Layout, coastX } from './maps.js';
import { Terrain } from './terrain.js';
import { CollisionWorld } from './collision.js';
import { Structures } from './buildings.js';
import { Vegetation } from './vegetation.js';
import { NavGrid } from '../ai/nav.js';
import { makeNoise2D } from '../core/math.js';
import { G } from '../render/geo.js';
import { vertexColorMaterial } from '../render/materials.js';

const frame = () => new Promise(r => setTimeout(r, 0));

export class World {
  constructor(def, scene) { this.def = def; this.scene = scene; }

  async build(progress) {
    const def = this.def, scene = this.scene;
    def._n = makeNoise2D(def.seed);
    progress('Planning layout', 0.05); await frame();
    const layout = new Layout(def);
    layout.noise = def._n;
    def.layout(layout);
    this.layout = layout;
    progress('Shaping terrain', 0.15); await frame();
    this.terrain = new Terrain(def, layout);
    this.terrain.buildMesh(scene);
    this.collision = new CollisionWorld(this.terrain);
    progress('Constructing buildings', 0.35); await frame();
    this.structures = new Structures(this);
    for (const b of layout.buildings) this.structures.building(b.type, b.x, b.z, b.rot, b.opts);
    for (const p of layout.props) this.structures.prop(p.type, p.x, p.z, p.rot, p.opts);
    for (const b of layout.bridges) {
      const h1 = this.terrain.heightAt(b.x, b.z - b.len / 2 - 1), h2 = this.terrain.heightAt(b.x, b.z + b.len / 2 + 1);
      const deckY = Math.max(h1, h2, (this.terrain.waterLevel ?? 0) + 2) + 0.15;
      this.structures.prop('bridge', b.x, b.z, 0, { len: b.len + 4, w: b.w, deckY, y: deckY - 3 });
      this.structures.footprints.push({ minX: b.x - b.w / 2, maxX: b.x + b.w / 2, minZ: b.z - b.len / 2, maxZ: b.z + b.len / 2, color: 'rgba(160,155,145,0.95)' });
      b.deckY = deckY;
    }
    for (const p of layout.piers || []) {
      const cx = coastX(p.z, def._n);
      this.structures.prop('pier', Math.floor(cx - 14) + 0.5, Math.floor(p.z) + 0.5, 3, { len: 50, w: 6, deckY: 2.25, y: 0 });
    }
    this.flagPoles(scene);
    this.structures.finalize(scene);
    progress('Growing vegetation', 0.6); await frame();
    this.vegetation = new Vegetation(this);
    this.vegetation.build(scene, layout);
    progress('Building navigation mesh', 0.75); await frame();
    this.nav = new NavGrid(this);
    progress('Drawing maps', 0.92); await frame();
    this.mapImage = this.terrain.renderMapImage(768, this.structures.footprints);
    return this;
  }

  flagPoles(scene) {
    const geos = [];
    for (const f of this.def.flags) {
      const y = this.terrain.heightAt(f.x, f.z);
      geos.push(G.cyl(0.07, 0.09, 9, 6, 0xd8d8d8, f.x, y + 4.5, f.z));
      geos.push(G.cyl(0.4, 0.5, 0.4, 8, 0x6a6a6a, f.x, y + 0.2, f.z));
    }
    const mesh = new THREE.Mesh(G.merge(geos), vertexColorMaterial('poles', { roughness: 0.6 }));
    mesh.castShadow = true;
    scene.add(mesh);
    // cloth flags (recolored at runtime by owner)
    this.flagCloth = this.def.flags.map(f => {
      const y = this.terrain.heightAt(f.x, f.z);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.1, 6, 3), new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.DoubleSide, roughness: 0.9 }));
      m.geometry.translate(0.9, 0, 0);
      m.position.set(f.x + 0.08, y + 8.3, f.z);
      m.castShadow = true;
      scene.add(m);
      return m;
    });
  }

  updateFlags(mode, time) {
    if (!this.flagCloth) return;
    mode.flags.forEach((f) => {
      const i = this.def.flags.findIndex(d => d.id === f.id);
      const m = this.flagCloth[i];
      if (!m) return;
      const col = f.owner === 0 ? 0x3d8de0 : f.owner === 1 ? 0xe0503d : 0xd0d0d0;
      m.material.color.setHex(col);
      // flag height follows capture progress
      const base = this.terrain.heightAt(f.x, f.z);
      m.position.y = base + 1.8 + Math.abs(f.progress) * 6.5;
      const p = m.geometry.attributes.position;
      if (!m.userData.base) m.userData.base = p.array.slice();
      const b = m.userData.base;
      for (let k = 0; k < p.count; k++) { const x = b[k * 3]; p.array[k * 3 + 2] = Math.sin(x * 2.4 - time * 5 + f.x) * 0.12 * x; }
      p.needsUpdate = true;
      m.rotation.y = 0.6;
    });
    // TDM: hide flags
    if (!mode.flags.length) for (const m of this.flagCloth) m.visible = false;
  }
}
