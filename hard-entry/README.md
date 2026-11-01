# HARD ENTRY

A top-down tactical police (SWAT) game in the style of close-quarters tactical shooters. You lead a five-person element through four original operations. Every person inside has to be secured, ideally alive and under the rules of engagement.

This game is completely separate from the arena shooter. It has no build step and no dependencies.

## Play

Open `hard-entry/index.html` in a browser, or serve the folder:

```bash
cd hard-entry && python3 -m http.server 8000
```

Then open http://localhost:8000.

## Core features

- **Compliance and arrests**: yell (`F`) at suspects and civilians. Each warning raises the pressure on them. Compliant people kneel with their hands up, and you restrain them (hold `SPACE`). Some suspects **fake surrender** and draw a hidden pistol if you look away.
- **Rules of engagement**: deadly force is authorized only against armed, non-compliant suspects. Shooting unarmed or surrendered people, friendly fire, and civilian casualties all cost points.
- **Less-lethal options**: beanbag shotgun, pepperball launcher, Taser, flashbangs, stingers and CS gas (wear a gas mask).
- **Doors**: open, close, kick, pick locks, ram, shotgun-breach, C2, wedge shut, or **mirror under** them to see who is inside. Doors can be **locked** or **trapped** (alarm, flash or IED).
- **Squad AI with RED and BLUE elements**: stack up, open/kick/ram/C2 and clear, with an optional flashbang, stinger or CS gas. They can also mirror, pick, wedge or disarm a door, and fall in, move, hold, cover, restrain, collect evidence, report, or search and secure. Hold `SHIFT` when ordering a breach to make the team wait, then press `X` to execute (coordinated two-team entries).
- **Suspect AI**: personalities (coward, normal, aggressive, fanatic, hostage-taker), hearing and line of sight, ambushes from room corners, fleeing, and **hostage-takers using civilians as human shields**.
- **Evidence and reports**: collect dropped weapons and mission evidence, and report every downed or dead person to TOC.
- **Line-of-sight fog of war**: a vision cone, leaning (`Q`/`E`) to peek corners, shared team vision, and a tactical map (`TAB`).
- **Loadout**: primary, sidearm, light or heavy armor, helmet or gas mask, mirror gun or battering ram, five tactical slots, and three difficulty levels.
- **Magazine-based reloading**: partially used magazines are kept.
- **Debrief and grading**: scored out of 100 with a letter grade, a penalties list, and the best grade saved per mission.

## Missions

| Operation | Situation |
|---|---|
| GAS-N-GO | Armed robbery in progress at a convenience store |
| MAPLE STREET | High-risk narcotics warrant at a booby-trapped house |
| HARBORVIEW | Hostage crisis with a timed explosive device to defuse |
| SUNSET MOTEL | Barricaded fugitives across a row of motel rooms |

Suspect and civilian placement, weapons, personalities, locked doors and traps are randomized every run.

## Controls

| Key | Action |
|---|---|
| WASD / Shift | Move / sprint (noisy) |
| Mouse / LMB / RMB | Aim / fire or use item / aim down sights |
| Q / E | Lean |
| F | Yell for compliance |
| Space | Interact (doors, restrain, collect, report, pick, disarm, defuse) |
| V | Kick door |
| R | Reload |
| 1 / 2 / 3 / 4 | Primary / sidearm / grenades (cycle) / tactical items (cycle) |
| G | Quick-throw grenade |
| Z or middle mouse | Squad command menu (context: door, person, evidence, ground) |
| C | Select element: GOLD / RED / BLUE |
| X | GO, which executes held orders |
| Tab / H / Esc | Tactical map / controls / pause |
| Enter | End the mission once objectives are complete |

## Code layout

| File | Purpose |
|---|---|
| `js/util.js` | Math helpers, input, synthesized audio, optional speech callouts |
| `js/data.js` | Weapons, gear, maps, mission definitions |
| `js/world.js` | Tile level, doors, rooms, collision, line of sight, A* pathing, visibility polygons |
| `js/actors.js` | People, ballistics, ROE, compliance, door actions, traps, grenades, evidence |
| `js/ai.js` | Suspect, civilian and officer AI; entry/clear orders |
| `js/player.js` | Player controller, interactions, squad command menu |
| `js/render.js` | Map rendering, fog of war, HUD, command menu, tactical map |
| `js/game.js` | Mission setup, game loop, objectives, scoring, menus |
