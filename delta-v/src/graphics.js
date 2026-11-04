import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// bloom: strength multiplier (0 = off, 1 = default); aa: MSAA samples; env: reflection strength; exposure: tone-mapping exposure
export const PRESETS = {
  low: { scale: 0.6, shadows: 0, bloom: 0, aa: 0, particles: 0.4, env: 0, exposure: 1.05 },
  medium: { scale: 0.85, shadows: 1024, bloom: 0.8, aa: 2, particles: 0.7, env: 0.8, exposure: 1.05 },
  high: { scale: 1, shadows: 2048, bloom: 1, aa: 4, particles: 1, env: 1, exposure: 1.05 },
  ultra: { scale: 1.5, shadows: 4096, bloom: 1.1, aa: 8, particles: 1, env: 1.2, exposure: 1.05 },
};

/** Settings saved by older builds used booleans; map them onto the numeric tiers. */
export function normalizeGfx(g) {
  const out = { ...PRESETS.high, ...g };
  if (out.bloom === true) out.bloom = 1; if (out.bloom === false) out.bloom = 0;
  if (out.aa === true) out.aa = 4; if (out.aa === false) out.aa = 0;
  if (out.env === true) out.env = 1; if (out.env === false) out.env = 0;
  for (const k of ['scale', 'shadows', 'bloom', 'aa', 'particles', 'env', 'exposure']) out[k] = Number(out[k]) || 0;
  if (!out.exposure) out.exposure = 1.05;
  return out;
}

/** Owns everything about how the frame is drawn: resolution, post-processing, shadows, reflections. */
export class Graphics {
  constructor(renderer, scene, camera) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.cfg = { ...PRESETS.high };
    this.compKey = '';
    this.composer = null;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envTex = null;
  }

  apply(cfg, world) {
    const prevShadows = this.cfg.shadows;
    this.cfg = { ...cfg };
    const r = this.renderer;
    const pr = Math.max(0.4, Math.min(2, (window.devicePixelRatio || 1) * cfg.scale));
    r.setPixelRatio(pr);
    // shadows
    r.shadowMap.enabled = cfg.shadows > 0;
    if (world) this.setupShadows(world);
    if ((prevShadows > 0) !== (cfg.shadows > 0)) this.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
    // image-based reflections for metals
    if (cfg.env > 0) {
      if (!this.envTex) this.envTex = this.pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      this.scene.environment = this.envTex;
      this.scene.environmentIntensity = (world && !world.enclosed ? 0.22 : 0.38) * cfg.env;
    } else this.scene.environment = null;
    r.toneMappingExposure = cfg.exposure || 1.05;
    // rebuild post chain only when its structure changes; bloom strength alone is a live tweak
    const key = `${cfg.bloom > 0}|${cfg.aa}|${cfg.scale}`;
    if (key !== this.compKey) { this.compKey = key; this.buildComposer(); }
    if (this.bloom) this.bloom.strength = 0.55 * cfg.bloom;
  }

  setupShadows(world) {
    const sun = world.sun;
    this.sun = sun;
    if (!sun) return;
    const on = this.cfg.shadows > 0;
    sun.castShadow = on;
    if (on) {
      sun.shadow.mapSize.set(this.cfg.shadows, this.cfg.shadows);
      if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
      const c = sun.shadow.camera, half = 55;
      c.left = -half; c.right = half; c.top = half; c.bottom = -half; c.near = 1; c.far = 400;
      c.updateProjectionMatrix();
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
      if (!sun.target.parent) this.scene.add(sun.target);
      this.sunDir = sun.position.clone().normalize();
    }
  }

  /** Keep the shadow frustum centred on the viewer so nearby shadows stay crisp on big maps. */
  follow(p) {
    if (!this.sun || !this.sun.castShadow) return;
    const texel = 110 / this.cfg.shadows;
    const fx = Math.round(p.x / texel) * texel, fy = Math.round(p.y / texel) * texel, fz = Math.round(p.z / texel) * texel;
    this.sun.target.position.set(fx, fy, fz);
    this.sun.position.set(fx, fy, fz).addScaledVector(this.sunDir, 180);
    this.sun.target.updateMatrixWorld();
  }

  buildComposer() {
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    this.bloom = null;
    if (!(this.cfg.bloom > 0) && !(this.cfg.aa > 0)) return;
    const r = this.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: this.cfg.aa || 0 });
    const comp = new EffectComposer(r, rt);
    comp.addPass(new RenderPass(this.scene, this.camera));
    if (this.cfg.bloom > 0) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.55 * this.cfg.bloom, 0.45, 0.92);
      comp.addPass(this.bloom);
    }
    comp.addPass(new OutputPass());
    this.composer = comp;
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    if (this.composer) { this.composer.setPixelRatio(this.renderer.getPixelRatio()); this.composer.setSize(w, h); }
  }

  render() {
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }
}
