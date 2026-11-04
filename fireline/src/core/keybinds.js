// Rebindable controls. Codes are KeyboardEvent.code values or Mouse0..Mouse4 for mouse buttons.
const KEY = 'fireline.keybinds.v1';

export const ACTIONS = [
  { group: 'Movement' },
  { id: 'forward', label: 'Move forward', def: 'KeyW' },
  { id: 'back', label: 'Move back', def: 'KeyS' },
  { id: 'left', label: 'Strafe left', def: 'KeyA' },
  { id: 'right', label: 'Strafe right', def: 'KeyD' },
  { id: 'sprint', label: 'Sprint · hold breath when scoped', def: 'ShiftLeft' },
  { id: 'jump', label: 'Jump / vault / climb', def: 'Space' },
  { id: 'crouch', label: 'Crouch (slide while sprinting)', def: 'KeyC' },
  { id: 'crouchHold', label: 'Crouch (always hold)', def: 'ControlLeft' },
  { id: 'prone', label: 'Prone', def: 'KeyZ' },
  { id: 'leanL', label: 'Lean left', def: 'KeyQ' },
  { id: 'leanR', label: 'Lean right', def: 'KeyE' },
  { group: 'Combat' },
  { id: 'fire', label: 'Fire', def: 'Mouse0' },
  { id: 'ads', label: 'Aim down sights · detonate C4', def: 'Mouse2' },
  { id: 'reload', label: 'Reload', def: 'KeyR' },
  { id: 'firemode', label: 'Fire mode', def: 'KeyB' },
  { id: 'melee', label: 'Melee (knife)', def: 'KeyV' },
  { id: 'grenade', label: 'Quick grenade', def: 'KeyG' },
  { id: 'slot1', label: 'Primary weapon', def: 'Digit1' },
  { id: 'slot2', label: 'Sidearm', def: 'Digit2' },
  { id: 'slot3', label: 'Gadget 1', def: 'Digit3' },
  { id: 'slot4', label: 'Gadget 2', def: 'Digit4' },
  { id: 'slot5', label: 'Throwable', def: 'Digit5' },
  { group: 'Squad & utility' },
  { id: 'interact', label: 'Revive / heal (hold)', def: 'KeyF' },
  { id: 'bandage', label: 'Bandage', def: 'KeyX' },
  { id: 'spot', label: 'Spot enemy · squad order', def: 'KeyT' },
  { id: 'light', label: 'Flashlight', def: 'KeyL' },
  { id: 'scoreboard', label: 'Scoreboard', def: 'Tab' },
  { id: 'map', label: 'Map', def: 'KeyM' },
  { group: 'Trackpad & accessibility' },
  { id: 'lookLeft', label: 'Look left', def: 'ArrowLeft' },
  { id: 'lookRight', label: 'Look right', def: 'ArrowRight' },
  { id: 'lookUp', label: 'Look up', def: 'ArrowUp' },
  { id: 'lookDown', label: 'Look down', def: 'ArrowDown' },
];

const NAMES = {
  Mouse0: 'LMB', Mouse1: 'MMB', Mouse2: 'RMB', Mouse3: 'Mouse 4', Mouse4: 'Mouse 5', Space: 'Space', Tab: 'Tab', Escape: 'Esc',
  ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', ControlLeft: 'L-Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'L-Alt', AltRight: 'R-Alt',
  Backquote: '`', Minus: '-', Equal: '=', BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Backslash: '\\',
  CapsLock: 'Caps', Enter: 'Enter', Backspace: 'Bksp', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
};

export function keyName(code) {
  if (!code) return '—';
  if (NAMES[code]) return NAMES[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code;
}

class Keybinds {
  constructor() {
    this.map = {};
    for (const a of ACTIONS) if (a.id) this.map[a.id] = a.def;
    try { const raw = localStorage.getItem(KEY); if (raw) Object.assign(this.map, JSON.parse(raw)); } catch (e) { /* storage unavailable */ }
  }
  code(id) { return this.map[id]; }
  name(id) { return keyName(this.map[id]); }
  set(id, code) { this.map[id] = code; this.save(); }
  reset() { for (const a of ACTIONS) if (a.id) this.map[a.id] = a.def; this.save(); }
  save() { try { localStorage.setItem(KEY, JSON.stringify(this.map)); } catch (e) { /* ignore */ } }
  // Actions whose binding is shared with another action (allowed for sprint/hold breath only).
  conflicts() {
    const seen = {}, out = new Set();
    for (const [id, code] of Object.entries(this.map)) { if (seen[code]) { out.add(id); out.add(seen[code]); } else seen[code] = id; }
    return out;
  }
  down(input, id) { return input.isDown(this.map[id]); }
  hit(input, id) { return input.isHit(this.map[id]); }
  released(input, id) { return input.isReleased(this.map[id]); }
}

export const keybinds = new Keybinds();
