// Persistent user settings with graphics presets. Every visual feature can be turned off.
const KEY = 'fireline.settings.v1';

export const PRESETS = {
  low: {
    renderScale: 0.75, shadows: 'off', ssao: false, bloom: false, dof: false, motionBlur: false,
    colorGrading: true, filmGrain: false, vignette: true, chromatic: false, antialias: 'fxaa',
    fog: true, atmosphere: true, ibl: false, grass: 'off', treeWind: false, waterReflections: false,
    waterWaves: true, particles: 'low', decals: true, debris: false, viewDistance: 500,
  },
  medium: {
    renderScale: 1, shadows: 'medium', ssao: false, bloom: true, dof: false, motionBlur: false,
    colorGrading: true, filmGrain: true, vignette: true, chromatic: false, antialias: 'fxaa',
    fog: true, atmosphere: true, ibl: true, grass: 'low', treeWind: true, waterReflections: false,
    waterWaves: true, particles: 'medium', decals: true, debris: true, viewDistance: 700,
  },
  high: {
    renderScale: 1, shadows: 'high', ssao: true, bloom: true, dof: true, motionBlur: true,
    colorGrading: true, filmGrain: true, vignette: true, chromatic: true, antialias: 'msaa',
    fog: true, atmosphere: true, ibl: true, grass: 'medium', treeWind: true, waterReflections: true,
    waterWaves: true, particles: 'high', decals: true, debris: true, viewDistance: 900,
  },
  ultra: {
    renderScale: 1, shadows: 'ultra', ssao: true, bloom: true, dof: true, motionBlur: true,
    colorGrading: true, filmGrain: true, vignette: true, chromatic: true, antialias: 'msaa',
    fog: true, atmosphere: true, ibl: true, grass: 'high', treeWind: true, waterReflections: true,
    waterWaves: true, particles: 'high', decals: true, debris: true, viewDistance: 1200,
  },
};

export const DEFAULTS = Object.assign({
  preset: 'high',
  fov: 95, sensitivity: 1.0, adsSensitivity: 0.85, invertY: false,
  volume: 0.8, musicVolume: 0.5, showFps: true, screenShake: true, headBob: true,
  difficulty: 'veteran', crosshair: true, nameTags: true, crouchMode: 'toggle', adsMode: 'hold', leanMode: 'hold', hitmarkerSound: true,
}, PRESETS.high);

// Describes the settings UI. type: bool | select | range
export const SETTINGS_SCHEMA = [
  { group: 'Display' },
  { key: 'preset', label: 'Quality preset', type: 'select', options: ['low', 'medium', 'high', 'ultra', 'custom'] },
  { key: 'renderScale', label: 'Render scale', type: 'range', min: 0.5, max: 1.5, step: 0.05 },
  { key: 'fov', label: 'Field of view (horizontal)', type: 'range', min: 70, max: 115, step: 1 },
  { key: 'viewDistance', label: 'View distance (m)', type: 'range', min: 300, max: 1500, step: 50 },
  { key: 'antialias', label: 'Anti-aliasing', type: 'select', options: ['off', 'fxaa', 'msaa'] },
  { key: 'showFps', label: 'Show FPS', type: 'bool' },
  { group: 'Lighting' },
  { key: 'shadows', label: 'Shadows', type: 'select', options: ['off', 'low', 'medium', 'high', 'ultra'], hint: 'high/ultra use cascaded shadow maps' },
  { key: 'ssao', label: 'Ambient occlusion (GTAO)', type: 'bool' },
  { key: 'ibl', label: 'Image-based lighting', type: 'bool' },
  { key: 'atmosphere', label: 'Atmospheric sky', type: 'bool' },
  { key: 'fog', label: 'Fog / aerial haze', type: 'bool' },
  { group: 'Post-processing' },
  { key: 'bloom', label: 'Bloom', type: 'bool' },
  { key: 'dof', label: 'Depth of field (ADS / menus)', type: 'bool' },
  { key: 'motionBlur', label: 'Motion blur', type: 'bool' },
  { key: 'colorGrading', label: 'Color grading', type: 'bool' },
  { key: 'filmGrain', label: 'Film grain', type: 'bool' },
  { key: 'vignette', label: 'Vignette', type: 'bool' },
  { key: 'chromatic', label: 'Chromatic aberration', type: 'bool' },
  { group: 'World' },
  { key: 'grass', label: 'Grass', type: 'select', options: ['off', 'low', 'medium', 'high'] },
  { key: 'treeWind', label: 'Wind sway (trees & grass)', type: 'bool' },
  { key: 'waterReflections', label: 'Water reflections', type: 'bool' },
  { key: 'waterWaves', label: 'Water waves & foam', type: 'bool' },
  { group: 'Effects' },
  { key: 'particles', label: 'Particle quality', type: 'select', options: ['low', 'medium', 'high'] },
  { key: 'decals', label: 'Decals (bullet holes, scorch)', type: 'bool' },
  { key: 'debris', label: 'Destruction debris physics', type: 'bool' },
  { key: 'screenShake', label: 'Screen shake', type: 'bool' },
  { key: 'headBob', label: 'Head bob', type: 'bool' },
  { group: 'Gameplay' },
  { key: 'difficulty', label: 'Bot difficulty', type: 'select', options: ['recruit', 'regular', 'veteran', 'elite'] },
  { key: 'crosshair', label: 'Crosshair', type: 'bool' },
  { key: 'nameTags', label: 'Friendly name tags', type: 'bool' },
  { group: 'Controls & audio' },
  { key: 'sensitivity', label: 'Mouse sensitivity', type: 'range', min: 0.1, max: 3, step: 0.05 },
  { key: 'adsSensitivity', label: 'ADS sensitivity', type: 'range', min: 0.2, max: 1.5, step: 0.05 },
  { key: 'invertY', label: 'Invert Y', type: 'bool' },
  { key: 'crouchMode', label: 'Crouch key', type: 'select', options: ['toggle', 'hold'] },
  { key: 'adsMode', label: 'Aim down sights', type: 'select', options: ['hold', 'toggle'] },
  { key: 'leanMode', label: 'Lean keys', type: 'select', options: ['hold', 'toggle'] },
  { key: 'hitmarkerSound', label: 'Hitmarker sound', type: 'bool' },
  { key: 'volume', label: 'Master volume', type: 'range', min: 0, max: 1, step: 0.05 },
];

class Settings {
  constructor() {
    this.values = Object.assign({}, DEFAULTS);
    this.listeners = [];
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) Object.assign(this.values, JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
  }
  get(k) { return this.values[k]; }
  set(k, v) {
    this.values[k] = v;
    if (k === 'preset' && PRESETS[v]) Object.assign(this.values, PRESETS[v]);
    else if (k in PRESETS.high && k !== 'preset') this.values.preset = 'custom';
    this.save();
    for (const l of this.listeners) l(k, v);
  }
  onChange(fn) { this.listeners.push(fn); }
  save() { try { localStorage.setItem(KEY, JSON.stringify(this.values)); } catch (e) { /* ignore */ } }
}

export const settings = new Settings();
