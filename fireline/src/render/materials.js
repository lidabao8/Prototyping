// Material helpers: chained shader patches that play nicely with cascaded shadow maps (CSM),
// shared wind uniforms, triplanar world-space texturing for instanced boxes.
import * as THREE from 'three';
import { getTexture } from './textures.js';

export const shared = {
  uTime: { value: 0 },
  uWind: { value: 1 },
};

const registry = new Set();
let activeCsm = null;

function rebuild(mat) {
  const patches = mat.userData.patches || [];
  const csmHook = mat.userData.csmHook;
  mat.onBeforeCompile = (shader, renderer) => {
    if (csmHook) csmHook(shader, renderer);
    for (const p of patches) p.fn(shader, renderer);
  };
  const key = patches.map(p => p.name).join('|') + (csmHook ? '|csm' : '');
  mat.customProgramCacheKey = () => key;
  mat.needsUpdate = true;
}

// Add a named shader patch to a material; registers material for CSM handling.
export function patchMaterial(mat, name, fn) {
  mat.userData.patches = mat.userData.patches || [];
  mat.userData.patches.push({ name, fn });
  registerLit(mat);
  rebuild(mat);
  return mat;
}

export function registerLit(mat) {
  if (registry.has(mat)) return mat;
  registry.add(mat);
  if (activeCsm) applyCsm(mat, activeCsm);
  else rebuild(mat);
  return mat;
}

function applyCsm(mat, csm) {
  csm.setupMaterial(mat);
  mat.userData.csmHook = mat.onBeforeCompile;
  rebuild(mat);
}

export function setCsm(csm) {
  if (activeCsm === csm) return;
  for (const mat of registry) {
    if (mat.defines) { delete mat.defines.USE_CSM; delete mat.defines.CSM_CASCADES; delete mat.defines.CSM_FADE; }
    mat.userData.csmHook = null;
  }
  activeCsm = csm;
  for (const mat of registry) {
    if (csm) applyCsm(mat, csm); else rebuild(mat);
  }
}

export function clearRegistry() { registry.clear(); activeCsm = null; }

// Triplanar texturing based on world position & normal (works for instanced, non-uniformly scaled boxes).
export function triplanarPatch(mat, texName, scale = 0.5, strength = 1) {
  const tex = getTexture(texName);
  const uniforms = { uTriMap: { value: tex }, uTriScale: { value: scale }, uTriStrength: { value: strength } };
  return patchMaterial(mat, 'tri_' + texName, (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vTriPos;\nvarying vec3 vTriNrm;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        vec4 triWp = vec4(transformed, 1.0);
        vec3 triN = objectNormal;
        #ifdef USE_INSTANCING
          triWp = instanceMatrix * triWp;
          triN = mat3(instanceMatrix) * triN;
        #endif
        triWp = modelMatrix * triWp;
        vTriPos = triWp.xyz;
        vTriNrm = normalize(mat3(modelMatrix) * triN);`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uTriMap; uniform float uTriScale; uniform float uTriStrength;\nvarying vec3 vTriPos;\nvarying vec3 vTriNrm;')
      .replace('#include <map_fragment>', `
        vec3 tw = abs(normalize(vTriNrm)); tw = pow(tw, vec3(4.0)); tw /= (tw.x + tw.y + tw.z);
        vec3 tp = vTriPos * uTriScale;
        vec4 triC = texture2D(uTriMap, tp.zy) * tw.x + texture2D(uTriMap, tp.xz) * tw.y + texture2D(uTriMap, vec2(tp.x, tp.y)) * tw.z;
        diffuseColor.rgb *= mix(vec3(1.0), triC.rgb, uTriStrength);`);
  });
}

// Vertex wind sway for vegetation; amplitude grows with local height.
export function windPatch(mat, amp = 0.03, base = 0.5, freq = 1.4) {
  return patchMaterial(mat, `wind_${amp}_${base}`, (shader) => {
    shader.uniforms.uTime = shared.uTime;
    shader.uniforms.uWind = shared.uWind;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uWind;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          float hh = max(position.y - ${base.toFixed(3)}, 0.0);
          float ph = uTime * ${freq.toFixed(3)} + ip.x * 0.071 + ip.z * 0.053;
          float gust = 0.6 + 0.4 * sin(uTime * 0.37 + ip.x * 0.01);
          transformed.x += (sin(ph) * 0.7 + sin(ph * 2.3 + position.z) * 0.3) * hh * ${amp.toFixed(4)} * uWind * gust;
          transformed.z += (cos(ph * 0.83) * 0.6 + sin(ph * 1.9 + position.x) * 0.25) * hh * ${amp.toFixed(4)} * uWind * gust;
        }`);
  });
}

// Common flat-shaded vertex-colored material for low-poly models.
const vcCache = new Map();
export function vertexColorMaterial(key = 'default', opts = {}) {
  if (vcCache.has(key)) return vcCache.get(key);
  const m = new THREE.MeshStandardMaterial(Object.assign({ vertexColors: true, roughness: 0.85, metalness: 0.0, flatShading: false, side: key === 'weapon' ? THREE.DoubleSide : THREE.FrontSide }, opts));
  registerLit(m);
  vcCache.set(key, m);
  return m;
}
export function resetMaterialCaches() { vcCache.clear(); }
