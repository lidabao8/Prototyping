// Post-processing chain: GTAO -> DOF -> camera motion blur -> viewmodel -> bloom -> tonemap -> grade/grain/vignette/CA -> FXAA.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

const MotionBlurShader = {
  uniforms: { tDiffuse: { value: null }, uCurInv: { value: new THREE.Matrix4() }, uPrev: { value: new THREE.Matrix4() }, uStrength: { value: 0.6 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform mat4 uCurInv; uniform mat4 uPrev; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec2 ndc = vUv * 2.0 - 1.0;
      vec4 w = uCurInv * vec4(ndc, 1.0, 1.0); w.xyz /= w.w;
      vec4 p = uPrev * vec4(w.xyz, 1.0); p.xy /= p.w;
      vec2 vel = (ndc - p.xy) * 0.5 * uStrength;
      float l = length(vel);
      if (l > 0.035) vel *= 0.035 / l;
      vec4 c = texture2D(tDiffuse, vUv);
      if (l < 0.0006) { gl_FragColor = c; return; }
      vec4 acc = c;
      for (int i = 1; i < 8; i++) { float t = float(i) / 7.0 - 0.5; acc += texture2D(tDiffuse, vUv - vel * t); }
      gl_FragColor = acc / 8.0;
    }`,
};

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) },
    uGrade: { value: 1 }, uGrain: { value: 0.04 }, uVignette: { value: 1 }, uCA: { value: 1 },
    uDamage: { value: 0 }, uSuppress: { value: 0 }, uFlash: { value: 0 }, uDowned: { value: 0 },
    uSat: { value: 1.08 }, uContrast: { value: 1.06 }, uLift: { value: new THREE.Vector3(0.01, 0.01, 0.02) },
    uGamma: { value: new THREE.Vector3(1.0, 1.0, 1.0) }, uGain: { value: new THREE.Vector3(1.02, 1.0, 0.97) }, uTint: { value: new THREE.Vector3(1, 1, 1) },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; uniform vec2 uRes;
    uniform float uGrade; uniform float uGrain; uniform float uVignette; uniform float uCA;
    uniform float uDamage; uniform float uSuppress; uniform float uFlash; uniform float uDowned;
    uniform float uSat; uniform float uContrast; uniform vec3 uLift; uniform vec3 uGamma; uniform vec3 uGain; uniform vec3 uTint;
    varying vec2 vUv;
    void main(){
      vec2 uv = vUv; vec2 d = uv - 0.5;
      float ca = uCA * (0.0012 + uDamage * 0.006 + uSuppress * 0.003 + uDowned * 0.004);
      vec3 col;
      if (ca > 0.00001) { col = vec3(texture2D(tDiffuse, uv + d * ca).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - d * ca).b); }
      else col = texture2D(tDiffuse, uv).rgb;
      float sat = 1.0;
      if (uGrade > 0.5) {
        col = col * uGain + uLift * (1.0 - col);
        col = pow(max(col, 0.0), 1.0 / uGamma);
        col = (col - 0.5) * uContrast + 0.5;
        col *= uTint;
        sat = uSat;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, sat * (1.0 - uSuppress * 0.45 - uDowned * 0.75));
      float r = length(d * vec2(uRes.x / uRes.y, 1.0));
      if (uVignette > 0.5) col *= mix(1.0, smoothstep(0.95, 0.3, r), 0.38);
      col *= mix(1.0, smoothstep(0.95, 0.15, r), uSuppress * 0.55);
      col = mix(col, vec3(0.45, 0.02, 0.02), uDamage * smoothstep(0.25, 0.85, r) * 0.75);
      col = mix(col, vec3(0.18, 0.0, 0.0), uDowned * smoothstep(0.05, 0.75, r) * 0.85);
      col = mix(col, vec3(1.0), clamp(uFlash, 0.0, 1.0));
      if (uGrain > 0.0) {
        float g = fract(sin(dot(floor(uv * uRes) + fract(uTime) * 91.7, vec2(12.9898, 78.233))) * 43758.5453);
        col += (g - 0.5) * uGrain * (1.2 - l);
      }
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
};

class ViewmodelPass extends Pass {
  constructor(scene, camera) { super(); this.scene = scene; this.camera = camera; this.needsSwap = false; this.clear = false; }
  render(renderer, writeBuffer, readBuffer) {
    const ac = renderer.autoClear;
    renderer.autoClear = false;
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    renderer.clearDepth();
    renderer.render(this.scene, this.camera);
    renderer.autoClear = ac;
  }
}

// Wrap passes that re-render the scene with override materials so GPU-positioned objects are hidden.
function withHidden(pass, getHidden) {
  const orig = pass.render.bind(pass);
  pass.render = (...args) => {
    const list = getHidden();
    const vis = list.map(o => o.visible);
    list.forEach(o => { o.visible = false; });
    orig(...args);
    list.forEach((o, i) => { o.visible = vis[i]; });
  };
  return pass;
}

export class PostFX {
  constructor(renderer, scene, camera, vmScene, vmCamera, settings) {
    this.renderer = renderer; this.scene = scene; this.camera = camera; this.vmScene = vmScene; this.vmCamera = vmCamera; this.settings = settings;
    this.hidden = []; // objects hidden in AO/DOF passes
    this.prevRot = new THREE.Matrix4();
    this.focus = 50; this.dofAmount = 0; this.menuBlur = 0;
    this.time = 0;
    this.build();
  }

  build() {
    const r = this.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const aa = this.settings.get('antialias');
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: aa === 'msaa' ? 4 : 0 });
    if (this.composer) this.composer.dispose();
    this.composer = new EffectComposer(r, rt);
    this.composer.setPixelRatio(1);
    this.composer.setSize(size.x, size.y);
    this.aa = aa;
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.gtao = withHidden(new GTAOPass(this.scene, this.camera, size.x, size.y), () => this.hidden);
    this.gtao.updateGtaoMaterial({ radius: 1.4, distanceExponent: 1.5, thickness: 2.5, scale: 1.25, samples: 12, distanceFallOff: 1.0 });
    this.gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    this.gtao.blendIntensity = 0.85;
    this.bokeh = withHidden(new BokehPass(this.scene, this.camera, { focus: 50, aperture: 0.00002, maxblur: 0.008 }), () => this.hidden);
    this.motion = new ShaderPass(MotionBlurShader);
    this.vmPass = new ViewmodelPass(this.vmScene, this.vmCamera);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.28, 0.45, 2.2);
    this.output = new OutputPass();
    this.final = new ShaderPass(FinalShader);
    this.fxaa = new ShaderPass(FXAAShader);
    for (const p of [this.renderPass, this.gtao, this.bokeh, this.motion, this.vmPass, this.bloom, this.output, this.final, this.fxaa]) this.composer.addPass(p);
    this.setSize(size.x, size.y);
    this.applySettings();
  }

  applySettings() {
    const s = this.settings;
    if (s.get('antialias') !== this.aa) { this.build(); return; }
    this.gtao.enabled = s.get('ssao');
    this.bloom.enabled = s.get('bloom');
    this.motion.enabled = s.get('motionBlur');
    this.fxaa.enabled = s.get('antialias') === 'fxaa';
    const u = this.final.uniforms;
    u.uGrade.value = s.get('colorGrading') ? 1 : 0;
    u.uGrain.value = s.get('filmGrain') ? 0.045 : 0;
    u.uVignette.value = s.get('vignette') ? 1 : 0;
    u.uCA.value = s.get('chromatic') ? 1 : 0;
    this.updateDofEnabled();
  }

  setGrade(g) {
    const u = this.final.uniforms;
    u.uSat.value = g.sat; u.uContrast.value = g.contrast;
    u.uLift.value.set(...g.lift); u.uGamma.value.set(...g.gamma); u.uGain.value.set(...g.gain); u.uTint.value.set(...(g.tint || [1, 1, 1]));
  }

  updateDofEnabled() {
    this.bokeh.enabled = this.settings.get('dof') && (this.dofAmount > 0.02 || this.menuBlur > 0.02);
  }

  setSize(w, h) {
    this.composer.setSize(w, h);
    this.final.uniforms.uRes.value.set(w, h);
    this.fxaa.material.uniforms.resolution.value.set(1 / w, 1 / h);
  }

  render(dt, state) {
    this.time += dt;
    const u = this.final.uniforms;
    u.uTime.value = this.time;
    u.uDamage.value = state.damage || 0;
    u.uSuppress.value = state.suppress || 0;
    u.uFlash.value = state.flash || 0;
    u.uDowned.value = state.downed || 0;
    // DOF: autofocus on aim target while aiming; strong blur behind menus
    this.dofAmount = state.ads || 0;
    this.menuBlur = state.menu ? 1 : 0;
    this.updateDofEnabled();
    if (this.bokeh.enabled) {
      const bu = this.bokeh.uniforms;
      this.focus += ((state.focus || 60) - this.focus) * Math.min(1, dt * 8);
      bu.focus.value = this.menuBlur ? 2 : this.focus;
      bu.aperture.value = this.menuBlur ? 0.0012 : 0.00004 * this.dofAmount;
      bu.maxblur.value = this.menuBlur ? 0.012 : 0.006 * this.dofAmount;
    }
    // rotational camera motion blur
    if (this.motion.enabled) {
      const cam = this.camera;
      const rot = new THREE.Matrix4().extractRotation(cam.matrixWorld);
      const viewRot = rot.clone().invert();
      const vp = new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, viewRot);
      this.motion.uniforms.uCurInv.value.copy(vp).invert();
      this.motion.uniforms.uPrev.value.copy(this.prevVP || vp);
      this.motion.uniforms.uStrength.value = Math.min(1, 0.016 / Math.max(dt, 0.001)) * 0.55;
      this.prevVP = vp;
    } else this.prevVP = null;
    this.composer.render(dt);
  }
}
