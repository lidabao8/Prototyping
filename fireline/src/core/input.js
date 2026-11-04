// Keyboard/mouse input with pointer lock. Works without lock as a fallback (useful in headless tests).
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set(); this.pressed = new Set(); this.released = new Set();
    this.mouse = { dx: 0, dy: 0, buttons: 0, pressed: new Set(), released: new Set(), wheel: 0 };
    this.locked = false; this.enabled = true;
    this.listeners = [];
    const on = (t, ev, fn, opt) => { t.addEventListener(ev, fn, opt); this.listeners.push([t, ev, fn, opt]); };
    on(window, 'keydown', (e) => {
      if (!this.enabled) return;
      if (['Tab', 'Space', 'KeyF', 'ControlLeft', 'AltLeft'].includes(e.code) || (e.ctrlKey && e.code === 'KeyW')) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
    });
    on(window, 'keyup', (e) => { this.keys.delete(e.code); this.released.add(e.code); });
    on(window, 'blur', () => { this.keys.clear(); this.mouse.buttons = 0; });
    on(canvas, 'mousedown', (e) => { if (!this.enabled) return; this.mouse.buttons |= (1 << e.button); this.mouse.pressed.add(e.button); e.preventDefault(); });
    on(window, 'mouseup', (e) => { this.mouse.buttons &= ~(1 << e.button); this.mouse.released.add(e.button); });
    on(window, 'mousemove', (e) => { if (!this.enabled) return; if (this.locked || this.allowUnlocked) { this.mouse.dx += e.movementX || 0; this.mouse.dy += e.movementY || 0; } });
    on(canvas, 'wheel', (e) => { this.mouse.wheel += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
    on(canvas, 'contextmenu', (e) => e.preventDefault());
    on(document, 'pointerlockchange', () => { this.locked = document.pointerLockElement === canvas; if (this.onLockChange) this.onLockChange(this.locked); });
    on(document, 'pointerlockerror', () => { this.locked = false; });
    this.allowUnlocked = false;
  }
  lock() {
    try {
      const r = this.canvas.requestPointerLock && this.canvas.requestPointerLock();
      if (r && r.catch) r.catch(() => { /* lock refused (e.g. headless) */ });
    } catch (e) { /* ignore */ }
  }
  unlock() { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ } }
  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }
  btn(b) { return (this.mouse.buttons & (1 << b)) !== 0; }
  btnHit(b) { return this.mouse.pressed.has(b); }
  endFrame() { this.pressed.clear(); this.released.clear(); this.mouse.pressed.clear(); this.mouse.released.clear(); this.mouse.dx = 0; this.mouse.dy = 0; this.mouse.wheel = 0; }
  dispose() { for (const [t, ev, fn, opt] of this.listeners) t.removeEventListener(ev, fn, opt); }
}
