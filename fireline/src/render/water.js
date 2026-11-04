// Water surface: planar reflections (toggle), vertex waves, procedural normals, depth tint and shore foam.
import * as THREE from 'three';
import { getTexture } from './textures.js';
import { shared } from './materials.js';

export class Water {
  constructor(world, scene, env) {
    this.world = world; this.scene = scene; this.env = env;
    const t = world.terrain;
    this.level = t.waterLevel;
    this.rt = new THREE.WebGLRenderTarget(512, 512, { type: THREE.HalfFloatType });
    this.textureMatrix = new THREE.Matrix4();
    this.virtualCam = new THREE.PerspectiveCamera();
    const deep = world.def.biome === 'arid' ? [0.02, 0.12, 0.16] : [0.03, 0.09, 0.08];
    const shallow = world.def.biome === 'arid' ? [0.12, 0.38, 0.38] : [0.12, 0.24, 0.17];
    this.uniforms = {
      uTime: shared.uTime,
      uReflection: { value: this.rt.texture }, uTexMat: { value: this.textureMatrix }, uUseRefl: { value: 1 },
      uNoise: { value: getTexture('noise') }, uHeight: { value: t.heightTex },
      uSize: { value: t.size }, uHalf: { value: t.half }, uTexN: { value: t.n }, uLevel: { value: this.level },
      uSunDir: { value: new THREE.Vector3() }, uSunColor: { value: new THREE.Color() }, uSkyColor: { value: new THREE.Color() },
      uFogColor: { value: new THREE.Color() }, uFogDensity: { value: 0.001 }, uWaves: { value: 1 },
      uDeep: { value: new THREE.Color().setRGB(...deep) }, uShallow: { value: new THREE.Color().setRGB(...shallow) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, transparent: true, depthWrite: true,
      vertexShader: `
        uniform float uTime; uniform float uWaves; uniform mat4 uTexMat;
        varying vec3 vW; varying vec4 vMirror; varying float vFogDepth;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          float w = sin(wp.x * 0.13 + uTime * 1.1) * 0.09 + sin(wp.z * 0.19 + uTime * 0.85) * 0.07 + sin((wp.x + wp.z) * 0.37 + uTime * 1.9) * 0.035;
          wp.y += w * uWaves;
          vW = wp.xyz;
          vMirror = uTexMat * (modelMatrix * vec4(position, 1.0));
          vec4 mv = viewMatrix * wp;
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform float uTime; uniform sampler2D uReflection; uniform float uUseRefl; uniform sampler2D uNoise; uniform sampler2D uHeight;
        uniform float uSize; uniform float uHalf; uniform float uTexN; uniform float uLevel; uniform float uWaves;
        uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uSkyColor; uniform vec3 uFogColor; uniform float uFogDensity;
        uniform vec3 uDeep; uniform vec3 uShallow;
        varying vec3 vW; varying vec4 vMirror; varying float vFogDepth;
        void main() {
          vec2 p = vW.xz;
          vec2 n1 = texture2D(uNoise, p * 0.035 + vec2(uTime * 0.012, uTime * 0.008)).rg - 0.5;
          vec2 n2 = texture2D(uNoise, p * 0.11 - vec2(uTime * 0.02, -uTime * 0.017)).rg - 0.5;
          vec2 n3 = texture2D(uNoise, p * 0.31 + vec2(uTime * 0.04, uTime * 0.03)).rg - 0.5;
          vec2 pert = (n1 * 0.6 + n2 * 0.45 + n3 * 0.25) * (0.35 + 0.65 * uWaves);
          vec3 N = normalize(vec3(pert.x, 1.0, pert.y));
          vec3 V = normalize(cameraPosition - vW);
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0);
          vec3 refl;
          if (uUseRefl > 0.5) {
            vec4 mc = vMirror; mc.xy += pert * 1.4 * mc.w * 0.08;
            refl = texture2DProj(uReflection, mc).rgb;
          } else {
            vec3 R = reflect(-V, N);
            refl = mix(uFogColor, uSkyColor, smoothstep(-0.05, 0.4, R.y));
          }
          vec2 tuv = ((vW.xz + uHalf) / uSize) * ((uTexN - 1.0) / uTexN) + 0.5 / uTexN;
          float ground = texture2D(uHeight, tuv).r;
          float depth = max(uLevel - ground, 0.0);
          vec3 body = mix(uShallow, uDeep, smoothstep(0.2, 3.5, depth));
          vec3 col = mix(body, refl, clamp(fres, 0.0, 1.0));
          vec3 H = normalize(uSunDir + V);
          float spec = pow(max(dot(N, H), 0.0), 220.0) * 3.0;
          col += uSunColor * spec;
          float foamN = texture2D(uNoise, p * 0.25 + vec2(uTime * 0.05, 0.0)).b;
          float foam = (1.0 - smoothstep(0.0, 0.55, depth)) * smoothstep(0.35, 0.65, foamN + sin(uTime * 1.6 + depth * 9.0) * 0.18) * uWaves;
          col = mix(col, vec3(0.85, 0.88, 0.86) * (0.4 + 0.6 * uSunColor), foam * 0.8);
          float alpha = clamp(0.55 + depth * 0.25 + fres * 0.3, 0.0, 0.96);
          alpha = max(alpha * smoothstep(0.0, 0.25, depth + 0.05), foam * 0.8);
          float fogF = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
          col = mix(col, uFogColor, clamp(fogF, 0.0, 1.0));
          gl_FragColor = vec4(col, alpha);
        }`,
    });
    const size = t.size + 400;
    const geo = new THREE.PlaneGeometry(size, size, 160, 160);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.y = this.level;
    this.mesh.renderOrder = 2;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.hideList = [];
  }

  setQuality(reflections, waves) {
    this.reflections = reflections;
    this.uniforms.uUseRefl.value = reflections ? 1 : 0;
    this.uniforms.uWaves.value = waves ? 1 : 0;
  }

  update(env) {
    const u = this.uniforms;
    u.uSunDir.value.copy(env.sunDir);
    u.uSunColor.value.copy(env.sun.color).multiplyScalar(env.time.night ? 0.4 : 1);
    u.uSkyColor.value.setRGB(...env.time.sky);
    u.uFogColor.value.copy(env.fog.color);
    u.uFogDensity.value = env.fog.density;
  }

  renderReflection(renderer, scene, camera, w, h) {
    if (!this.reflections) return;
    const camPos = camera.position;
    if (camPos.y < this.level) return;
    const rw = Math.max(256, Math.floor(w * 0.5)), rh = Math.max(256, Math.floor(h * 0.5));
    if (this.rt.width !== rw || this.rt.height !== rh) this.rt.setSize(rw, rh);
    const vc = this.virtualCam;
    vc.copy(camera, false);
    // mirror position & orientation about plane y = level
    vc.position.set(camPos.x, 2 * this.level - camPos.y, camPos.z);
    const dir = new THREE.Vector3(); camera.getWorldDirection(dir);
    dir.y = -dir.y;
    vc.up.set(0, 1, 0);
    vc.lookAt(vc.position.clone().add(dir));
    vc.updateMatrixWorld();
    vc.projectionMatrix.copy(camera.projectionMatrix);
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(vc.projectionMatrix);
    this.textureMatrix.multiply(vc.matrixWorldInverse);
    // oblique clip plane
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.level);
    plane.applyMatrix4(vc.matrixWorldInverse);
    const clip = new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const pm = vc.projectionMatrix;
    const q = new THREE.Vector4(
      (Math.sign(clip.x) + pm.elements[8]) / pm.elements[0],
      (Math.sign(clip.y) + pm.elements[9]) / pm.elements[5],
      -1, (1 + pm.elements[10]) / pm.elements[14]);
    clip.multiplyScalar(2 / clip.dot(q));
    pm.elements[2] = clip.x; pm.elements[6] = clip.y; pm.elements[10] = clip.z + 1 - 0.003; pm.elements[14] = clip.w;
    this.mesh.visible = false;
    const hidden = [];
    for (const o of this.hideList) { if (o && o.visible) { o.visible = false; hidden.push(o); } }
    const prevAuto = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    const prevRT = renderer.getRenderTarget();
    renderer.setRenderTarget(this.rt);
    renderer.clear();
    renderer.render(scene, vc);
    renderer.setRenderTarget(prevRT);
    renderer.shadowMap.autoUpdate = prevAuto;
    for (const o of hidden) o.visible = true;
    this.mesh.visible = true;
  }
}
