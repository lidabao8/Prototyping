# FIRELINE

A 16 vs 16 low-poly infantry shooter for the browser with AI bots. You play alongside 31 AI soldiers in eight four-person squads. There are four maps (two large, two built for close quarters), three game modes and destructible buildings. Every visual effect can be turned off in the settings, and every key can be rebound.

This game is separate from the other prototypes in this repository. It lives entirely in `fireline/`, has its own build, and needs no asset files: all models, textures and sounds are generated in code when the game starts.

## Play

Open `fireline/index.html` in a desktop browser (Chrome, Edge or Firefox), or serve the folder:

```bash
cd fireline && python3 -m http.server 8080
```

Then open http://localhost:8080. Click **Play**, choose a map and mode, pick a class, loadout and spawn point, then deploy.

To rebuild after changing the source:

```bash
cd fireline && npm install && npm run build
```

## Features

**Combat**
- Projectile ballistics with bullet drop, travel time, damage falloff, and head and limb multipliers.
- Bullets penetrate walls depending on the material and the weapon's power (wood, plaster, sheet metal).
- Recoil, spread bloom, ADS zoom per optic, and fire modes (auto, semi, bolt, pump).
- 19 weapons: assault rifles, carbines, SMGs, LMGs, DMRs, sniper rifles, shotguns and pistols.
- Attachments: sights (iron, red dot, holographic, 2x, 4x, 8x scope), barrel (suppressor, compensator, muzzle brake, flash hider), grip (vertical, angled, stubby, bipod) and rail (laser, flashlight).
- **Downed and revive system:** lethal damage usually knocks you down instead of killing you. Any teammate can revive you; medics revive faster and to full health. You can give up, and enemies can finish you off.
- **Bleeding:** heavy hits make you bleed. Bandage with [X]; the medic's medkit also heals squadmates.
- Suppression (blur and desaturation), flashbangs, smoke screens that block bot vision, and fall damage.

**Movement**
- Sprint, slide (crouch while sprinting), crouch, prone, and lean left/right.
- Vault over low cover, climb ledges, windows and containers, and swim.

**Leaning and positioning**
- Leaning moves your head and shoulders about 0.6m out while your body stays behind cover, and it steadies your aim slightly while aiming.
- Bots notice you much more slowly when only your head is exposed, and they can only shoot at the part of you they can see.
- Lean, crouch and aim can each be set to hold or toggle.
- Scoped weapons sway. Crouching, going prone, a bipod and leaning all reduce sway; hold Sprint while scoped to hold your breath.
- Knife melee: a strike from behind or on a downed enemy kills outright.

**Classes and gadgets**
| Class | Gadgets |
|---|---|
| Assault | M320 grenade launcher, extra frag grenades |
| Medic | Medkit (heals self and others, fast full revives), smoke |
| Engineer | RPG-7 and C4, both of which destroy walls |
| Support | Ammo box (resupplies nearby players), sandbag walls you can build |
| Recon | Claymores, spawn beacon |
| Squad leader | Rally point, binoculars for spotting, squad orders |

Every class also gets a sidearm, a throwable of your choice (frag, smoke, impact or flash), bandages, and light or heavy armor.

**Squads and teamwork**
- Spawn on your squad leader, a squadmate, a rally point, a beacon, an owned flag or HQ.
- Squad leaders press [T] to order an attack or defense of a flag, a move to a marker, or follow-me.
- Spot enemies with [T]. Unsuppressed gunfire shows the shooter on the minimap.

**Destruction**
- Buildings are made of thousands of separate wall pieces. Explosives blow holes in them, and unsupported pieces above a hole collapse.
- Destroyed pieces leave physics debris and dust. The bots' navigation grid updates live when walls come down.

**Game modes**
- **Conquest:** holding more flags drains enemy tickets.
- **Frontline:** flags must be taken in order along the front.
- **Team Deathmatch.**

**HUD:** minimap, compass, flag and ticket bar, killfeed, score pop-ups, hitmarkers, damage direction indicators, 3D markers, scoreboard [Tab] and full map [M].

**Progression:** you earn XP each match, and your rank is saved in the browser.

## AI bots

Bots fill input exactly as the player does: they move, aim and shoot through the same soldier code, with the same spread and recoil rules.

- **Perception:** each bot has a field of view and needs line of sight. Distance, stance, movement, muzzle flashes, night, foliage, smoke and spotting all change how quickly it notices you. Bots hear gunshots and footsteps, react to near misses and incoming damage, and share sightings with their squad.
- **Aiming:** bots have a reaction time and an initial aim error that shrinks while they track you. They also have aim jitter, which suppression and flashbangs increase. They lead moving targets, compensate for bullet drop, and only partly control recoil (how well depends on difficulty). They fire bursts that suit the distance, tap-fire at range, and switch to the pistol when out of ammo at close range.
- **Tactics:** bots search the nav grid for cover that hides them crouched and lets them either peek over it standing or lean around a corner, then alternate peeking and hiding. In open ground they strafe and crouch-spam. Attackers bound from cover to cover toward the objective, and bots on long-range weapons go prone. They throw grenades at enemies who break line of sight, and use RPGs and launchers on entrenched enemies.
- **Teamwork:** bots revive downed teammates (throwing smoke first if needed), heal each other, place ammo boxes, claymores, sandbags, rally points and beacons, and investigate sounds.
- **Movement:** A* pathfinding on a 1m grid prefers routes near cover, with path smoothing. Bots keep their spacing, vault low obstacles, recover when stuck, sprint only when it is safe, and glance toward likely threats while moving.
- **Commander:** each team has a commander that spreads squads across objectives, always keeps at least two squads attacking, and becomes more aggressive when losing.
- **Difficulty:** Recruit, Regular, Veteran (default) and Elite. In headless duel tests against a stationary player at 30m, Elite bots downed the player in about 1 second, Veteran in about 2, Regular in about 3 and Recruit in about 5.

## Maps
- **Greenhollow** (960 × 960 m, morning): farmland split by a river with two bridges and a ford. Flags are Farmstead, Radio Hill, Mill Bridge (a village), Lumber Mill and Chapel.
- **Port Kessar** (720 × 720 m, afternoon): a desert harbor town with a dense street grid. Flags are Ridge Outpost, Container Depot, Old Town, Pump Station and Harbor (with piers on the sea).
- **Ironworks** (440 × 440 m, overcast, close quarters): a foundry with a furnace hall, a rail yard of boxcars, a smelter courtyard and loading docks. Four flags.
- **Brennhof** (400 × 400 m, dusk, close quarters): a packed old town split by a canal, with narrow streets, a market square, station, brewery, church and town hall. Five flags.

You can switch any map to morning, noon, afternoon, dusk, overcast or night. At night, use the flashlight [L].

## Graphics (each one can be toggled in Settings)
Quality presets go from Low to Ultra. Individual settings:
- Shadows: off, a single shadow map, or cascaded shadow maps (CSM) with 3–4 cascades
- GTAO ambient occlusion
- Image-based lighting
- Physically based sky
- Fog
- Bloom
- Depth of field (when aiming and in menus)
- Camera motion blur
- Color grading
- Film grain
- Vignette
- Chromatic aberration
- FXAA or MSAA anti-aliasing
- Render scale
- View distance
- GPU-instanced grass with wind
- Tree wind sway
- Planar water reflections
- Water waves and foam
- Particle quality
- Decals
- Debris physics
- Screen shake and head bob

## Controls
Every action can be rebound under **Controls** in the main or pause menu. Defaults:

| Key | Action |
|---|---|
| WASD / Shift / Space | Move / sprint (hold breath when scoped) / jump, vault, climb |
| C, Ctrl / Z | Crouch (slide while sprinting) / prone |
| Q / E | Lean |
| Mouse 1 / Mouse 2 | Fire / aim (Mouse 2 also detonates C4) |
| R / B / V | Reload / fire mode / knife |
| 1–5, wheel / G | Select weapon or gadget / quick grenade |
| X | Bandage |
| F (hold) | Revive, or heal with the medkit |
| T | Spot enemies; squad leaders also give orders |
| L | Flashlight |
| Tab / M / Esc | Scoreboard / map / pause |

## Code layout
`src/core` (math, settings, audio, input) · `src/world` (terrain, maps, buildings, vegetation, collision) · `src/render` (materials, sky and shadows, water, post-processing, textures) · `src/entities` (soldier, player, models) · `src/ai` (navigation grid, bot brain) · `src/game` (match flow, combat, modes, squads) · `src/ui` (HUD, menus). The build uses three.js r170 and is bundled with esbuild into `dist/fireline.js`.

URL options for testing: `?autostart=1&autodeploy=1&map=kessar&mode=frontline&time=night&preset=low`.
