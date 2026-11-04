// Sky, sun/moon, fog, image-based lighting and shadows (single map or cascaded), with runtime toggles.
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { CSM } from 'three/examples/jsm/csm/CSM.js';
import { setCsm } from './materials.js';
import { DEG } from '../core/math.js';

export const TIMES = {
  morning: { elev: 32, az: 125, sun: [1.0, 0.93, 0.82], sunI: 3.6, sky: [0.55, 0.68, 0.92], ground: [0.38, 0.34, 0.26], hemiI: 0.55, fog: [0.62, 0.72, 0.84], fogD: 0.0012, turb: 2.6, ray: 1.2, exp: 1.0, skyMul: 0.62, env: 0.35 },
  noon: { elev: 64, az: 160, sun: [1.0, 0.98, 0.94], sunI: 3.8, sky: [0.55, 0.68, 0.94], ground: [0.42, 0.38, 0.3], hemiI: 0.55, fog: [0.66, 0.74, 0.86], fogD: 0.001, turb: 2.4, ray: 1.0, exp: 0.92, skyMul: 0.6, env: 0.35 },
  afternoon: { elev: 26, az: 245, sun: [1.0, 0.86, 0.68], sunI: 3.7, sky: [0.66, 0.68, 0.78], ground: [0.5, 0.42, 0.3], hemiI: 0.55, fog: [0.8, 0.72, 0.6], fogD: 0.0015, turb: 5, ray: 1.4, exp: 0.98, skyMul: 0.62, env: 0.38 },
  dusk: { elev: 6, az: 275, sun: [1.0, 0.6, 0.36], sunI: 2.8, sky: [0.45, 0.42, 0.58], ground: [0.32, 0.24, 0.2], hemiI: 0.45, fog: [0.58, 0.46, 0.42], fogD: 0.0019, turb: 8, ray: 2.4, exp: 1.15, skyMul: 0.7, env: 0.32 },
  overcast: { elev: 48, az: 150, sun: [0.92, 0.94, 1.0], sunI: 1.7, sky: [0.62, 0.66, 0.72], ground: [0.36, 0.35, 0.33], hemiI: 0.95, fog: [0.6, 0.63, 0.67], fogD: 0.0026, turb: 10, ray: 0.6, exp: 1.05, skyMul: 0.55, env: 0.45 },
  night: { elev: 38, az: 200, sun: [0.55, 0.65, 1.0], sunI: 0.42, sky: [0.12, 0.16, 0.28], ground: [0.05, 0.05, 0.07], hemiI: 0.35, fog: [0.03, 0.04, 0.07], fogD: 0.0032, turb: 2, ray: 0.3, exp: 1.25, skyMul: 0.0, env: 0.12, night: true },
};

export class Environment {
  constructor(renderer, scene, camera, settings) {
    this.renderer = renderer; this.scene = scene; this.camera = camera; this.settings = settings;
    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.shadowMode = null;
    this.csm = null;

    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.7);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.04;
    scene.add(this.sun); scene.add(this.sun.target);

    // sky
    this.sky = new Sky();
    this.sky.material.depthWrite = false;
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    this.skyUniforms = { uFogColor: { value: new THREE.Color() }, uHorizon: { value: 1 }, uSkyMul: { value: 1 } };
    Object.assign(this.sky.material.uniforms, this.skyUniforms);
    this.sky.material.fragmentShader = this.sky.material.fragmentShader
      .replace('uniform vec3 up;', 'uniform vec3 up;\nuniform vec3 uFogColor; uniform float uHorizon; uniform float uSkyMul;')
      .replace('gl_FragColor = vec4( retColor, 1.0 );', `
        retColor *= uSkyMul;
        retColor = mix(retColor, uFogColor, smoothstep(0.16, -0.04, direction.y) * uHorizon);
        gl_FragColor = vec4( retColor, 1.0 );`);
    scene.add(this.sky);

    // stars for night
    const sg = new THREE.BufferGeometry();
    const sp = [];
    for (let i = 0; i < 1800; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const y = Math.abs(u);
      sp.push(Math.cos(a) * r, y, Math.sin(a) * r);
    }
    sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.85, depthWrite: false }));
    this.stars.visible = false; this.stars.frustumCulled = false; this.stars.renderOrder = -9;
    scene.add(this.stars);

    this.fog = new THREE.FogExp2(0xaabbcc, 0.0015);
    scene.fog = this.fog;
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envMap = null;
  }

  setTime(name) {
    const t = TIMES[name] || TIMES.morning;
    this.time = t; this.timeName = name;
    const phi = (90 - t.elev) * DEG, theta = t.az * DEG;
    this.sunDir.setFromSphericalCoords(1, phi, theta);
    const u = this.sky.material.uniforms;
    u.turbidity.value = t.turb; u.rayleigh.value = t.ray; u.mieCoefficient.value = 0.005; u.mieDirectionalG.value = 0.8;
    u.sunPosition.value.copy(this.sunDir).multiplyScalar(t.night ? -1 : 1);
    this.skyUniforms.uSkyMul.value = t.skyMul;
    this.sun.color.setRGB(...t.sun); this.sun.intensity = t.sunI;
    this.hemi.color.setRGB(...t.sky); this.hemi.groundColor.setRGB(...t.ground); this.hemi.intensity = t.hemiI;
    this.fogColor = new THREE.Color().setRGB(...t.fog);
    this.fog.color.copy(this.fogColor);
    this.skyUniforms.uFogColor.value.copy(this.fogColor);
    this.stars.visible = !!t.night;
    this.renderer.toneMappingExposure = t.exp;
    if (this.csm) for (const l of this.csm.lights) { l.color.copy(this.sun.color); l.intensity = t.sunI; }
    if (this.csm) this.csm.lightDirection.copy(this.sunDir).negate();
    this.applySettings();
    this.buildEnvMap();
  }

  buildEnvMap() {
    if (this.envMap) { this.envMap.dispose(); this.envMap = null; }
    const t = this.time;
    const envScene = new THREE.Scene();
    const sky2 = new Sky();
    sky2.material.uniforms.turbidity.value = t.turb; sky2.material.uniforms.rayleigh.value = t.ray;
    sky2.material.uniforms.sunPosition.value.copy(this.sunDir);
    sky2.scale.setScalar(1000);
    envScene.add(sky2);
    if (t.night) envScene.background = new THREE.Color(0x0a1020);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(...t.ground).multiplyScalar(0.6) }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -5;
    envScene.add(ground);
    this.envMap = this.pmrem.fromScene(envScene, 0, 0.1, 3000).texture;
    sky2.geometry.dispose(); sky2.material.dispose();
    this.applySettings();
  }

  applySettings() {
    const s = this.settings;
    const t = this.time;
    if (!t) return;
    this.fog.density = s.get('fog') ? t.fogD * (900 / Math.max(500, s.get('viewDistance'))) ** 0.5 : 0.00001;
    this.sky.visible = s.get('atmosphere');
    this.scene.background = s.get('atmosphere') ? null : this.fogColor;
    this.skyUniforms.uHorizon.value = s.get('fog') ? 1 : 0.35;
    this.scene.environment = s.get('ibl') ? this.envMap : null;
    this.scene.environmentIntensity = t.env;
    this.hemi.intensity = t.hemiI * (s.get('ibl') ? 0.8 : 1.25);
    this.setShadows(s.get('shadows'));
  }

  setShadows(mode) {
    if (mode === this.shadowMode) return;
    this.shadowMode = mode;
    if (this.csm) { setCsm(null); this.csm.remove(); this.csm.dispose(); this.csm = null; }
    this.sun.visible = true;
    this.sun.castShadow = false;
    if (mode === 'low' || mode === 'medium') {
      const size = mode === 'low' ? 1024 : 2048, ext = mode === 'low' ? 45 : 75;
      this.sun.castShadow = true;
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
      const c = this.sun.shadow.camera;
      c.left = -ext; c.right = ext; c.top = ext; c.bottom = -ext; c.near = 1; c.far = 600;
      c.updateProjectionMatrix();
      this.shadowExt = ext;
    } else if (mode === 'high' || mode === 'ultra') {
      this.sun.visible = false;
      this.csm = new CSM({
        maxFar: mode === 'ultra' ? 520 : 320, cascades: mode === 'ultra' ? 4 : 3, mode: 'practical',
        parent: this.scene, shadowMapSize: mode === 'ultra' ? 4096 : 2048, lightDirection: this.sunDir.clone().negate(),
        camera: this.camera, lightIntensity: this.time ? this.time.sunI : 3, lightNear: 1, lightFar: 1400, lightMargin: 250, shadowBias: -0.0002,
      });
      for (const l of this.csm.lights) { l.shadow.normalBias = 0.05; if (this.time) l.color.copy(this.sun.color); }
      this.csm.fade = true;
      setCsm(this.csm);
    }
  }

  update(camPos) {
    this.sky.position.copy(camPos);
    const far = this.camera.far;
    this.sky.scale.setScalar(far * 1.0);
    this.stars.position.copy(camPos);
    this.stars.scale.setScalar(far * 0.45);
    if (this.csm) { this.csm.update(); }
    else if (this.sun.castShadow) {
      // snap shadow camera to texel grid to reduce shimmering
      const ext = this.shadowExt, res = this.sun.shadow.mapSize.x;
      const texel = (ext * 2) / res;
      const p = camPos.clone();
      p.x = Math.round(p.x / texel) * texel; p.z = Math.round(p.z / texel) * texel;
      this.sun.target.position.copy(p);
      this.sun.position.copy(p).addScaledVector(this.sunDir, 300);
      this.sun.target.updateMatrixWorld();
    } else {
      this.sun.position.copy(camPos).addScaledVector(this.sunDir, 300);
      this.sun.target.position.copy(camPos);
      this.sun.target.updateMatrixWorld();
    }
  }

  dispose() {
    if (this.csm) { setCsm(null); this.csm.remove(); this.csm.dispose(); this.csm = null; }
    if (this.envMap) this.envMap.dispose();
    this.pmrem.dispose();
  }
}
