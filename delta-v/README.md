# DELTA-V — zero-g team deathmatch

Two squads of EVA soldiers fight in orbit, on one of two maps: **Hangar Bay**, an enclosed 144 m hall, or **Derelict Yard**, an open 300 m field of station modules, trusses, container clusters and asteroids. On Derelict Yard there are no walls, so you're warned when you leave the combat area and your suit starts failing after 5 s outside it. There is no "up", and nothing gives you momentum for free: every burn, shot, push-off and suit leak changes your trajectory.

Open `index.html` in a browser. It is a prebuilt bundle (`dist/delta-v.js`), so no server or build is needed. To rebuild after editing `src/`:

```bash
npm install
npm run build      # or: npm run watch / npm run serve (http://localhost:8081)
```

## Flight model

* **The suit has 24 RCS nozzles**: four thruster quads with six nozzles each, at the corners of the backpack. Every nozzle applies its force at its own position. Net force and torque are summed as $\vec a = \tfrac{1}{m}\sum \vec F_i$ and $\vec\tau = \sum \vec r_i \times \vec F_i$.
* **Rotation uses Euler's equations** with a non-symmetric inertia tensor: $\dot{\vec\omega} = I^{-1}(\vec\tau - \vec\omega \times I\vec\omega)$. Tumbling about the intermediate axis is possible.
* **Nozzles are on/off.** Player keys fire them at full thrust. The flight computer's assists drive them with pulse-width modulation.
* **Fuel is cold-gas N₂** (10 kg, $v_e$ = 700 m/s). The HUD shows Δv in m/s from the rocket equation, $\Delta v = v_e\ln\frac{m_0}{m_f}$. The gas starts refilling 0.6 s after the jets go quiet: about 1.1 kg/s in free flight, 2.2 kg/s while anchored. Infinite gas is a menu option.
* **Damage matters.** Hits near a thruster quad can destroy it. After that, translating also produces torque, and the assist burns extra gas fighting the spin. Suit breaches vent gas, which pushes and spins you, and drains O₂.
* **Mass matters.** Weapons and gas count towards your mass. Holding a cargo pod and thrusting pushes the combined 300+ kg.
* **The mouse turns your body directly.** The view and gun are fixed to the body. Spin from recoil, hits or lost thrusters still moves your view, until an assist (or you) counters it.

### Assist modes (cycle with T)

| Mode | Behaviour |
| --- | --- |
| Manual / Newtonian | No automatic damping. Roll keys fire the roll jets directly, and any spin stays until you counter it with X. The brake key is disabled. |
| Rate damp (default) | Rotation is damped when you stop steering. Linear drift remains. |
| Attitude hold | A PD controller holds your attitude while you translate and returns you to it after you're bumped. |
| Velocity match | Attitude hold, plus an automatic burn to match the velocity of the station, or of the target locked with L. This uses a lot of gas. |

## Combat

* **Recoil is propulsion.** The ejected momentum pushes you back at the muzzle, which sits off your centre of mass, so it also spins you. A 10 g round at 400 m/s gives a 125 kg soldier about 0.03 m/s. A full magazine gives about 1 m/s.
* **Loadout:** pick a primary and a secondary in the menu (or from the pause menu, for your next deploy). Weapon mass counts towards your suit's mass.
  * **KR-7 kinetic rifle:** rounds travel in straight lines until they hit something.
  * **FL-12 flechette:** heavy recoil (about 0.75 m/s per shot). It doubles as an escape burn.
  * **GJ-3 gyrojet:** a tri-barrel rocket carbine with a drum magazine. Nearly recoilless. The rounds launch slowly and accelerate, have a generous 0.3 m hit radius (30 reserve rockets) and a small splash.
  * **RR-90 recoilless:** a single 88-damage HE slug with a 4 m blast and no recoil. The slug homes slightly: it locks the enemy nearest the crosshair within about 7° (shown as TRACK) and steers at up to 90 m/s² sideways. The backblast shoves (and hurts enemies) up to 7 m behind you. Fully aimed, it switches to a full-screen scope.
  * **LM-2 maser:** a steady continuous beam (gunmetal body, yellow accents), 80 damage per second while held. No recoil, no ammo; it overheats after about 2 s of fire and vents.
* **Grenades:** thrown at 18 m/s on a 3.5 s fuse. They fly straight, bounce elastically off walls, and leave the hand partway through a throw animation.
* **Momentum hammer (V):** sends the target tumbling.
* **Hip-fire vs aiming:** hip-fire spreads several times wider than aiming down the sights. Every gun has a working sight (holographic sights on the rifle, flechette and maser; scopes on the gyrojet and recoilless), aligned to the screen centre when you aim, with its own magnification. Bots aim down the sights once they've settled on a target at range.
* **Tracers:** every round leaves the actual barrel (your viewmodel's muzzle, or a bot's gun) and converges on the crosshair point, drawn as a glowing streak.
* **Lead indicator:** rounds inherit your velocity, so the red diamond is computed from relative velocity $\vec v_{rel} = \vec v_{target} - \vec v_{you}$. For gyrojet rounds it also accounts for their acceleration.
* **Wall and pod impacts:** hitting a wall above 8 m/s does 16 damage per m/s over that. A hard hit cracks your visor, flashes the screen red, shakes the camera, throws sparks, and may breach the suit. Kills caused this way are credited to whoever knocked you into it.

### Spawn shields and ammo depots

* **Spawn shields:** each team's spawn bay is closed off by a hex force field in the team colour.
  * Enemy rounds, beams and grenades stop at it.
  * Nobody inside their own bay can be damaged by the enemy.
  * Intruders are shoved back out and burned.
  * Bots route around enemy bays and don't waste fire on shielded targets.
* **Ammo depots:** glowing canisters at symmetric spots on each map. Touch one to refill reserves and grenades. It recharges for 20 s. Bots running low go and resupply.

### Physics toggles (menu)

Each kind of unintended thrust can be switched off on its own:

* **Recoil thrust:** shots, throws and hammer swings push and spin you.
* **Suit breaches:** venting leaks push you and drain O₂.
* **Hit & blast knockback:** bullets, explosions and the hammer push and spin you, and wall friction adds spin.
* **Thruster damage:** destroyed quads cause coupled spin.

There are also options for infinite gas and enemy outlines.

## Graphics

**Quality presets:** Low, Medium, High and Ultra, plus individual tiers and sliders:

* Render scale (50–150%).
* Sun shadows (Off / Low / High / Ultra), which follow you so they stay crisp on the big map.
* Anti-aliasing (Off / 2× / 4× / 8× MSAA).
* Bloom intensity (0–150%).
* Reflection strength (0–150%).
* Particle density (20–100%).
* Exposure.

**Models and textures:**

* Soldiers, guns, pods and the stations are detailed models built from rounded parts, merged per material so they stay cheap to draw.
* Hull and container textures have generated normal maps.
* The hangar has pipe runs, wall lamps, vents, beacons and spawn consoles. The yard has antennas, a dish, lit windows and navigation lights.

**Animations:** first-person and third-person animations for:

* recoil;
* magazine reloads: the empty mag floats away in zero-g, and the hand fetches a fresh one from the belt pouch (visible in hand), seats it and slaps it. Empty reloads end with a charging-handle rack, and each step has its own click, clack and rack sound;
* the gyrojet's drum swap, finished with a spin;
* shell-by-shell flechette reloads, with a visible shell in the hand;
* the flechette pump after each shot;
* recoilless breech loading: the spent casing drifts out the back;
* maser venting when overheated: the cell slides out and steam escapes;
* grenade wind-up and throw;
* hammer strikes;
* weapon swaps;
* view sway from mouse movement and RCS thrust.

## Interface

**Main menu:** four tabs.

* **Play:** map cards; segmented controls for difficulty, team size and score limit; flight-computer cards.
* **Loadout:** primary and secondary slots, plus weapon cards with stat bars.
* **Settings:** player, graphics and physics.
* **Controls:** keybinds.

A sticky footer shows a match summary and the Deploy button (Enter also deploys).

**In-game HUD:** clipped-corner glass plates and Orbitron numerals.

* A team score header with a timer.
* A vitals cluster: Δv ring gauge, segmented health, O₂, and a suit / RCS schematic. The schematic shows the suit silhouette, each quad's health, all six nozzles per quad lighting with throttle, venting breaches, and quad-integrity and RCS percentages.
* A weapon cluster with ammo pips and grenade icons.
* Kill-feed chips and banner messages.
* A redesigned death screen.

**Sights:** the light guns (rifle, flechette, maser) use frameless projected dots: a slim emitter with the reticle floating in the air. The gyrojet has a framed holographic sight, and the recoilless a scope with a full-screen optic.

**Match end:** a slow-motion outro with a VICTORY / DEFEAT banner, then a results screen whose rows animate in.

**Grenades:** a detailed model with a ribbed body, team band, fuse head, spoon, pin ring, and a fuse lamp that blinks faster as it runs down.

## HUD

The HUD shows:

* Prograde and retrograde markers with your speed.
* Enemies outlined in red. The lead marker is a small diamond that fades out when it nearly overlaps the target.
* Rotation-rate arcs around the reticle for yaw, pitch and roll.
* Range, relative velocity and closing speed to whatever is under the crosshair.
* Hitmarkers that pop and fade: white for body hits, yellow for headshots, red with a ring for kills. Optional floating damage numbers stack rapid hits.
* A `COLLISION x.x s` time-to-impact warning.
* Δv, N₂, HP and O₂ readouts, and a suit diagram showing quad health, nozzle activity and leaks.
* An optional reference grid (H). It also fades in automatically when you tumble.

## Controls

Every action can be rebound in the menu under **Controls & keybinds**. Click a binding, then press a key, click a mouse button (left, middle, right, or side buttons) or scroll the wheel. Backspace clears a binding and Esc cancels. Binding a key that's already in use swaps the two actions. Only mouse movement (turning) and Esc (pause) are fixed.

| Default | Action |
| --- | --- |
| Mouse | Turn your body |
| LMB / RMB | Fire / aim down sights (hold) |
| W/S, A/D | Translate forward/back, left/right (body frame) |
| Space / Left Shift | Translate up / down (also crawl along a held surface) |
| Q / E | Roll |
| C | Match velocity (brake) |
| X | Kill rotation |
| F | Grab or release the nearest surface or pod |
| 1 / 2, wheel | Primary / secondary, next / previous weapon |
| R / G / V | Reload / grenade / hammer |
| T / L / H | Assist mode / lock velocity reference / reference grid |
| Tab | Scoreboard |

These newer actions start **unbound**:

* **Push off:** hold while holding on, release to launch towards your aim at up to 7 m/s.
* **Aim down sights (toggle).**
* **Last used weapon.**
* **Full stop:** brake and kill rotation together.

## Bots

Bots fly the same suit through the same thruster allocation, with the same gas budget, head cone and limited body-turn rate. Nothing about their movement is scripted.

* **Perception:** a view cone with line-of-sight checks. They also notice bright thruster plumes, hear gunfire and explosions with position error, share callouts with their team, and turn towards whoever damaged them.
* **Aim:** they lead with relative velocity, using a lagging and noisy velocity estimate, so targets that accelerate are harder for them to hit. They have a reaction delay before they start tracking a new target. Their aim error starts out large and settles over time, and grows while they are spinning. They turn their aim at a limited rate, fire in bursts at long range, and won't shoot through teammates.
* **Tactics:**
  * They pick combat positions with line of sight at the preferred range for their weapon, favouring handholds, which give stable aim, free push-offs and faster gas refill.
  * They penalise spots that several known enemies can see, spread out from teammates, and flankers take angles away from the team's line of fire.
  * Hurt bots retreat to cover that no known enemy can see.
  * Bots hunt the last known position from a flanking angle while pre-aiming it.
  * Grenades: they throw at anchored or slow targets (up to 55 m), at enemies bunched together, when they're losing a duel, and at enemies who just ducked behind cover. They lead the throw and never throw near teammates.
  * They swap to the flechette up close instead of reloading, and use the gyrojet on slow or anchored targets.
* **Movement:**
  * Paths come from A* over a 3D navigation graph of free-space and surface nodes, smoothed by string-pulling.
  * They fly a braking-distance velocity profile and coast inside a deadband to save gas.
  * They arrive at handholds at about 2.5 m/s and let their arms absorb it, push off walls when they can, dodge sideways when someone aims at them, avoid predicted collisions, and go anchor to refill when their gas runs low.
* **Loadouts:** each respawn, a bot picks two weapons weighted by:
  * the map (more flechettes in the hangar; gyrojets and recoilless rifles in open space);
  * the match settings (team size, difficulty);
  * its role;
  * which weapons are earning kills this match.

  In a fight it switches to whichever carried weapon suits the range, target speed and ammo, manages maser heat, and won't fire the recoilless with a teammate behind it.
* **3D flight:** bots favour attack positions above or below the target's own body plane, bias their jinks along that axis, and roll: they plant their feet on surfaces they're holding, and re-orient every few seconds in flight.
* **Difficulty:** Easy, Normal, Hard and Elite change reaction time, aim settling, error floor, tracking rate, velocity-estimate noise, field of view and aggressiveness.
