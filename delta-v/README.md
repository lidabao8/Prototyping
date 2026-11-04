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
* **KR-7 kinetic rifle:** rounds travel in straight lines until they hit something.
* **FL-12 flechette:** heavy recoil (about 0.75 m/s per shot). It doubles as an escape burn.
* **GJ-3 gyrojet:** nearly recoilless. The rounds launch slowly and accelerate, with a small splash.
* **Grenades:** fly straight and bounce elastically off walls.
* **Momentum hammer (V):** sends the target tumbling.
* **Lead indicator:** rounds inherit your velocity, so the red diamond is computed from relative velocity $\vec v_{rel} = \vec v_{target} - \vec v_{you}$. For gyrojet rounds it also accounts for their acceleration.
* **Wall and pod impacts:** hitting a wall above 8 m/s does 16 damage per m/s over that. A hard hit cracks your visor, flashes the screen red, shakes the camera, throws sparks, and may breach the suit. Kills caused this way are credited to whoever knocked you into it.

### Physics toggles (menu)

Each kind of unintended thrust can be switched off on its own:

* **Recoil thrust:** shots, throws and hammer swings push and spin you.
* **Suit breaches:** venting leaks push you and drain O₂.
* **Hit & blast knockback:** bullets, explosions and the hammer push and spin you, and wall friction adds spin.
* **Thruster damage:** destroyed quads cause coupled spin.

There are also options for infinite gas and enemy outlines.

## HUD

The HUD shows:

* Prograde and retrograde markers with your speed.
* Enemies outlined in red. The lead marker is a small diamond that fades out when it nearly overlaps the target.
* Rotation-rate arcs around the reticle for yaw, pitch and roll.
* Range, relative velocity and closing speed to whatever is under the crosshair.
* A `COLLISION x.x s` time-to-impact warning.
* Δv, N₂, HP and O₂ readouts, and a suit diagram showing quad health, nozzle activity and leaks.
* An optional reference grid (H). It also fades in automatically when you tumble.

## Controls

Every key can be rebound in the menu under **Controls & keybinds**. Rebinding a key that's already in use swaps the two actions. Defaults:

| Input | Action |
| --- | --- |
| Mouse | Turn your body |
| W/S, A/D | Translate forward/back, left/right (body frame) |
| Space / Left Shift | Translate up / down. While anchored, Space charges a push-off. |
| Q / E | Roll |
| C | Match velocity (brake) |
| X | Kill rotation |
| F | Grab or release the nearest surface or pod |
| LMB / RMB | Fire / zoom (fixed) |
| 1 2 3, wheel | Switch weapon |
| R / G / V | Reload / grenade / hammer |
| T / L / H | Assist mode / lock velocity reference / reference grid |
| Tab / Esc | Scoreboard / pause (Esc is fixed) |

## Bots

Bots fly the same suit through the same thruster allocation, with the same gas budget, head cone and limited body-turn rate. Nothing about their movement is scripted.

* **Perception:** a view cone with line-of-sight checks. They also notice bright thruster plumes, hear gunfire and explosions with position error, share callouts with their team, and turn towards whoever damaged them.
* **Aim:** they lead with relative velocity, using a lagging and noisy velocity estimate, so targets that accelerate are harder for them to hit. They have a reaction delay before they start tracking a new target. Their aim error starts out large and settles over time, and grows while they are spinning. They turn their aim at a limited rate, fire in bursts at long range, and won't shoot through teammates.
* **Tactics:**
  * They pick combat positions with line of sight at the preferred range for their weapon, favouring handholds, which give stable aim, free push-offs and faster gas refill.
  * They penalise spots that several known enemies can see, spread out from teammates, and flankers take angles away from the team's line of fire.
  * Hurt bots retreat to cover that no known enemy can see.
  * Bots hunt the last known position from a flanking angle while pre-aiming it.
  * They grenade enemies who have just ducked behind cover, and use grenades on anchored targets.
  * They swap to the flechette up close instead of reloading, and use the gyrojet on slow or anchored targets.
* **Movement:**
  * Paths come from A* over a 3D navigation graph of free-space and surface nodes, smoothed by string-pulling.
  * They fly a braking-distance velocity profile and coast inside a deadband to save gas.
  * They arrive at handholds at about 2.5 m/s and let their arms absorb it, push off walls when they can, dodge sideways when someone aims at them, avoid predicted collisions, and go anchor to refill when their gas runs low.
* **Difficulty:** Easy, Normal, Hard and Elite change reaction time, aim settling, error floor, tracking rate, velocity-estimate noise, field of view and aggressiveness.
