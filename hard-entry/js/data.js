"use strict";
// =====================================================================
//  HARD ENTRY — weapons, gear and missions
// =====================================================================

// ---- Player / officer weapons ----
const WEAPONS = {
  carbine:    { name: '5.56 Carbine', slot: 'primary', auto: true, rof: 0.09, mag: 30, mags: 5, dmg: 40, spread: 0.022, moveSpread: 0.07, recoil: 0.022, reload: 2.3, lethal: true, doorDmg: 9, snd: 'rifle', moveMul: 0.95, desc: 'Full-auto rifle. Lethal, accurate, loud.' },
  smg:        { name: '9mm SMG', slot: 'primary', auto: true, rof: 0.075, mag: 30, mags: 5, dmg: 28, spread: 0.028, moveSpread: 0.045, recoil: 0.016, reload: 2.0, lethal: true, doorDmg: 5, snd: 'smg', moveMul: 1.0, desc: 'Compact, controllable, fast to move with.' },
  shotgun:    { name: '12ga Breaching Shotgun', slot: 'primary', auto: false, rof: 0.7, mag: 7, mags: 4, dmg: 14, pellets: 8, spread: 0.085, moveSpread: 0.03, recoil: 0.05, reload: 2.8, lethal: true, doorDmg: 20, snd: 'shotgun', moveMul: 0.95, desc: 'Devastating up close. Blows locks off doors.' },
  beanbag:    { name: 'Beanbag Shotgun', slot: 'primary', auto: false, rof: 0.75, mag: 6, mags: 5, dmg: 6, spread: 0.02, moveSpread: 0.03, recoil: 0.04, reload: 2.6, lethal: false, ll: 'beanbag', doorDmg: 2, snd: 'shotgun_ll', moveMul: 0.95, desc: 'LESS-LETHAL. Staggers and breaks resistance.' },
  pepperball: { name: 'Pepperball Launcher', slot: 'primary', auto: true, rof: 0.14, mag: 40, mags: 4, dmg: 1, spread: 0.03, moveSpread: 0.04, recoil: 0.008, reload: 2.2, lethal: false, ll: 'pepper', doorDmg: 0, snd: 'pop', moveMul: 1.0, desc: 'LESS-LETHAL. Irritant rounds. Pressures compliance.' },
  pistol:     { name: '.45 Pistol', slot: 'secondary', auto: false, rof: 0.16, mag: 10, mags: 4, dmg: 32, spread: 0.03, moveSpread: 0.04, recoil: 0.03, reload: 1.6, lethal: true, doorDmg: 6, snd: 'pistol', moveMul: 1.05, desc: 'Reliable lethal sidearm.' },
  taser:      { name: 'Taser', slot: 'secondary', auto: false, rof: 0.4, mag: 1, mags: 7, dmg: 0, spread: 0.015, moveSpread: 0.02, recoil: 0, reload: 1.8, lethal: false, ll: 'taser', range: 270, doorDmg: 0, snd: 'taser', moveMul: 1.05, desc: 'LESS-LETHAL. Short range. Drops almost anyone.' },
};
const PRIMARIES = ['carbine', 'smg', 'shotgun', 'beanbag', 'pepperball'];
const SECONDARIES = ['pistol', 'taser'];
const ARMORS = {
  light: { name: 'Light Armor', prot: 0.35, speed: 1.0, desc: '35% protection. Full mobility.' },
  heavy: { name: 'Heavy Armor', prot: 0.55, speed: 0.86, desc: '55% protection. Slower movement.' },
};
const HEADGEAR = {
  helmet: { name: 'Ballistic Helmet', prot: 0.08, desc: 'Extra protection. No gas protection.' },
  gasmask: { name: 'Gas Mask', prot: 0, desc: 'Immune to CS gas and pepper.' },
};
const LONG_TACTICAL = {
  mirror: { name: 'Mirror Gun', desc: 'Peek under doors: reveals people and traps.' },
  ram: { name: 'Battering Ram', desc: 'Opens any door in one hit. Loud.' },
};
const GEAR = {
  flash:   { name: 'Flashbang', kind: 'grenade', color: '#dfe6ee', desc: 'Blinds and deafens. Huge compliance boost.' },
  stinger: { name: 'Stinger', kind: 'grenade', color: '#e0b252', desc: 'Rubber pellet burst. Stuns and hurts a little.' },
  cs:      { name: 'CS Gas', kind: 'grenade', color: '#9fcf6a', desc: 'Lingering gas cloud. Wear a mask.' },
  c2:      { name: 'C2 Charge', kind: 'tactical', color: '#d5d0c0', desc: 'Destroys a door and stuns everyone behind it.' },
  wedge:   { name: 'Door Wedge', kind: 'tactical', color: '#c49a6c', desc: 'Jams a door shut so nobody can open it.' },
};
const GEAR_KEYS = ['flash', 'stinger', 'cs', 'c2', 'wedge'];

// ---- Suspect weapons ----
const NPC_GUNS = {
  pistol:  { name: 'Pistol', dmg: 20, rof: 0.42, spread: 0.075, burst: 1, mag: 12, reload: 1.8, snd: 'pistol' },
  smg:     { name: 'SMG', dmg: 15, rof: 0.085, spread: 0.11, burst: 5, mag: 30, reload: 2.2, snd: 'smg' },
  shotgun: { name: 'Shotgun', dmg: 10, pellets: 6, rof: 0.95, spread: 0.15, burst: 1, mag: 6, reload: 3.0, snd: 'shotgun' },
  rifle:   { name: 'Rifle', dmg: 25, rof: 0.12, spread: 0.06, burst: 3, mag: 30, reload: 2.5, snd: 'rifle' },
};

const OFFICER_DEFS = [
  { name: 'Okafor', team: 'red' },
  { name: 'Brandt', team: 'red' },
  { name: 'Vance', team: 'blue' },
  { name: 'Lin', team: 'blue' },
];
const TEAM_COLORS = { gold: '#e6c35c', red: '#e0574f', blue: '#4f97e8' };

// =====================================================================
//  MAPS
//  Legend:  # wall   W window   D door   T counter/table (low cover)
//           k crate (low cover)   B shelf / high furniture
//  floors:  . wood   , tile   _ carpet   = concrete   : asphalt   " grass
//  markers: P team spawn   x suspect spawn   c civilian spawn
//           h hostage-taker spawn   e evidence   O explosive device
// =====================================================================
const MAP_STORE = [
  '####################################',
  '#::::::::::::::::::::::::::::::::::#',
  '#::::::::::::::::::::::::::::::::::#',
  '#::::#########D################::::#',
  '#::::#=========#______#,,,,,,,#::::#',
  '#::::#=kk===x==#__T___#,,,c,,,#::::#',
  '#::::#=kk======#__T_x_#,,,,,,,#::::#',
  '#::::#=c==e====#_c__e_#,,,,,x,#::::#',
  '#::::#=====x===#______#,,,,,,,#::::#',
  '#::::#####D#######D#######D####::::#',
  '#::::#........................D::::#',
  '#::::#......x...........c.....#::::#',
  '#::::###D##################..##::::#',
  '#::::#........................#::::#',
  '#::::#..BBBBBB..BBBBBB..x.....#::::#',
  '#::::#....c..........x........#::::#',
  '#::::#..BBBBBB..BBBBBB........#::::#',
  '#::::#..........c.....TTT.TT..#::::#',
  '#::::#........x..........c....#::::#',
  '#::::##WWWWWWWW##DD##WWWWWWWW##::::#',
  '#::::::::::::::::::::::::::::::::::#',
  '#::::::::::::::::::::::::::::::::::#',
  '#::::::::::::::::P:::::::::::::::::#',
  '#::::::::::::::::::::::::::::::::::#',
  '####################################',
];

const MAP_HOUSE = (() => {
  const L = '#"""""', R = ':::::#';
  const yard = '#' + '"'.repeat(37) + R;
  return [
    '#'.repeat(44),
    yard, yard, yard,
    L + '####D#######WWWWWWW#############' + R,
    L + '#' + 'TTT,,TTT' + '#' + '...........' + '#' + '=======BB' + '#' + R,
    L + '#' + ',,,,,,,x' + '#' + '..c........' + '#' + '=kk====BB' + '#' + R,
    L + '#' + 'T,,,,,,,' + '#' + '...TTTTT...' + '#' + '=kk=x====' + '#' + R,
    L + '#' + ',,c,,,,,' + 'D' + '...TTTTT...' + '#' + '=========' + 'D' + R,
    L + '#' + 'T,,,,,e,' + '#' + '...TTTTT.x.' + '#' + '==e===kk=' + '#' + R,
    L + '#' + ',,,,,,,,' + '#' + '...........' + '#' + '=x====kk=' + '#' + R,
    L + '#' + ',,,,,,,,' + '#' + '..........c' + '#' + '=========' + '#' + R,
    L + '####D#########..##########D#####' + R,
    L + '#' + '..............x...............' + '#' + R,
    L + '#' + '.....e........................' + '#' + R,
    L + '######D#########D####D#####D####' + R,
    L + '#' + '___________' + '#' + '......' + '#' + ',,,' + '#' + '_______' + '#' + R,
    L + '#' + '_TTT_______' + '#' + 'TT....' + '#' + ',x,' + '#' + '_____TT' + '#' + R,
    L + 'W' + '_TTT___c___' + '#' + 'TT..x.' + '#' + ',,,' + '#' + '__c__TT' + '#' + R,
    L + 'W' + '___________' + '#' + 'TT....' + '#' + ',,,' + '#' + '_____TT' + '#' + R,
    L + 'W' + '____x______' + '#' + '......' + '#' + ',,,' + '#' + '_______' + '#' + R,
    L + 'W' + '__TTTT_____' + '#' + '..c...' + '#' + ',,,' + '#' + '_x_____' + '#' + R,
    L + '#' + '___________' + '#' + '....BB' + '#' + ',,,' + '#' + '______e' + '#' + R,
    L + '#' + 'B_________x' + '#' + 'e...BB' + '#' + ',,,' + '#' + 'BB_____' + '#' + R,
    L + '#' + 'B__________' + '#' + '......' + '#' + ',,,' + '#' + 'BB_____' + '#' + R,
    L + '##WWW#D#WWW###WWWW#######WWWWW##' + R,
    yard, yard,
    '#' + '"'.repeat(11) + 'P' + '"'.repeat(25) + R,
    '#' + '='.repeat(37) + R,
    '#' + ':'.repeat(42) + '#',
    '#'.repeat(44),
  ];
})();

const MAP_OFFICE = (() => {
  const L = '#::', R = '::#';
  const lot = '#' + ':'.repeat(46) + '#';
  const north = [
    ['_______', '_______', '____________', 'B,,,B', 'kk,BB'],
    ['_TTT___', '___TTT_', '____________', 'B,O,B', 'k,,,,'],
    ['__x____', '____x__', '___TTTTTT___', 'B,,,B', ',,,,e'],
    ['______c', '_c_____', '_c_TTTTTT_x_', 'B,x,B', ',,x,,'],
    ['_B_____', '_____B_', '____________', ',,,,,', 'kk,,,'],
    ['_B__e__', '_____B_', '___x____c___', ',,,,,', 'kk,,,'],
  ].map(r => L + '#' + r[0] + '#' + r[1] + '#' + r[2] + '#' + r[3] + '#' + r[4] + '#' + R);
  const cub = ['.............', '.TTT.TTT.TTT.', '.T.x.T.c.T...', '.............', '.............', '.TTT.TTT.TTT.', '.T.c.T.x.T.c.', '.............', '.............', '.TTT.TTT.TTT.', '.T.x.T.h.T.e.', '.............', '.............'];
  const lob = ['............', '.B........B.', '............', '.....x......', '............', '..h.........', '............', '..TTT..TTT..', '...c....c...', '............', '.B........B.', '............', '............'];
  const east = [',,,,,,#,,,,,,', ',B,B,B#B,B,B,', ',,,,,,#,,,,,,', ',,c,,,#,,,x,,', ',,,,,,#,,,,,,', '#############', '.....TT......', '..x..TT...c..', '.............', '...........BB', '..TTT........', '..TTT...h....', '.........e...'];
  const mid = [];
  for (let i = 0; i < 13; i++) {
    const y = 14 + i;
    const w3 = (y >= 16 && y <= 18) || (y >= 22 && y <= 24) ? 'W' : '#';
    const w17 = y === 17 ? 'D' : '#';
    const w30 = y === 23 ? 'D' : '#';
    const w44 = y === 24 ? 'D' : '#';
    mid.push(L + w3 + cub[i] + w17 + lob[i] + w30 + east[i] + w44 + R);
  }
  return [
    '#'.repeat(48), lot, lot,
    L + '###################WWWWWWWW###########D###' + R,
    ...north,
    L + '####D#######D#########D#########D#####D###' + R,
    L + '#' + ',,,,,,,,,,,,,,,,,,,,,x,,,,,,,,,,,,,,,,,,' + 'D' + R,
    L + '#' + ',,,,,,,,,c,,,,,,,,,,,,,,,,,,,,x,,,,,,,,,' + '#' + R,
    L + '#####,,#############DD#########D#####D####' + R,
    ...mid,
    L + '################WWWWDDWWWW################' + R,
    '#' + '='.repeat(46) + '#',
    '#' + '='.repeat(22) + 'P' + '='.repeat(23) + '#',
    lot, lot, lot,
    '#'.repeat(48),
  ];
})();

const MAP_MOTEL = (() => {
  const W = 52, H = 26;
  const g = [];
  for (let y = 0; y < H; y++) g.push(new Array(W).fill(':'));
  const set = (x, y, c) => { g[y][x] = c; };
  const fill = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) set(x, y, c); };
  // border
  for (let x = 0; x < W; x++) { set(x, 0, '#'); set(x, H - 1, '#'); }
  for (let y = 0; y < H; y++) { set(0, y, '#'); set(W - 1, y, '#'); }
  // building shell
  fill(2, 3, 49, 17, '#');
  fill(3, 4, 48, 5, '=');            // maintenance corridor
  set(10, 3, 'D'); set(26, 3, 'D');  // rear exits
  // office
  fill(3, 7, 8, 16, '_'); set(7, 6, 'D'); set(5, 17, 'D'); set(3, 17, 'W'); set(7, 17, 'W');
  fill(4, 11, 7, 11, 'T'); set(3, 14, 'B'); set(8, 8, 'B');
  set(5, 9, 'c'); set(6, 13, 'x'); set(4, 15, 'e');
  // laundry
  fill(46, 7, 48, 16, '='); set(47, 6, 'D'); set(47, 17, 'D');
  fill(46, 8, 46, 10, 'B'); fill(48, 8, 48, 10, 'B'); set(48, 14, 'k');
  set(47, 12, 'c'); set(46, 15, 'x');
  // guest rooms
  const rooms = [
    { m: [[2, 12, 'x'], [3, 15, 'c'], [1, 8, 'e']] },
    { m: [[2, 13, 'x'], [1, 8, 'x'], [4, 15, 'e']] },
    { m: [[3, 12, 'c'], [2, 15, 'x'], [1, 8, 'c']] },
    { m: [[2, 12, 'x'], [4, 14, 'e'], [1, 8, 'x']] },
    { m: [[3, 13, 'x'], [2, 15, 'c'], [1, 7, 'e']] },
    { m: [[2, 12, 'x'], [3, 15, 'x'], [1, 8, 'c']] },
  ];
  for (let i = 0; i < 6; i++) {
    const x0 = 10 + 6 * i;
    if (i % 2 === 0) set(x0 + 4, 6, 'D');                  // rear door from corridor
    fill(x0, 7, x0 + 2, 9, ',');                           // bathroom
    fill(x0 + 4, 7, x0 + 4, 10, '_');                      // closet passage
    set(x0 + 1, 10, 'D');                                  // bathroom door
    fill(x0, 11, x0 + 4, 16, '_');                         // bedroom
    fill(x0, 12, x0 + 1, 14, 'T');                         // bed
    set(x0 + 4, 12, 'B');                                  // dresser
    set(x0, 17, 'W'); set(x0 + 1, 17, 'W'); set(x0 + 3, 17, 'D');
    for (const [dx, y, c] of rooms[i].m) set(x0 + dx, y, c);
  }
  fill(2, 18, 49, 18, '=');           // covered walkway
  set(14, 4, 'x'); set(33, 5, 'x'); set(40, 4, 'e');
  set(26, 22, 'P');
  return g.map(r => r.join(''));
})();

const MISSIONS = [
  {
    id: 'gasngo', name: 'GAS-N-GO', title: 'Armed Robbery In Progress', difficulty: 1,
    location: 'Gas-N-Go convenience store, 1180 Ridgeline Ave', time: '23:42',
    brief: 'Dispatch received a silent alarm followed by a 911 call from a customer hiding in the restroom. Two to three armed males entered the store and forced the night staff into the back. Patrol units have the perimeter. Your element will make entry, secure every person inside and recover the stolen cash.',
    intel: ['Suspects: 3 (pistols, possibly a shotgun)', 'Civilians: 4 (staff and customers)', 'Doors: some back-room doors may be locked', 'Entry points: front glass doors, east side door, rear alley door'],
    suspects: 3, civilians: 4, hostagePairs: 0, locked: 0.25, trap: 0, traps: {}, faker: 0.1,
    persona: { normal: 4, coward: 3, aggressive: 2 }, guns: { pistol: 5, shotgun: 2, smg: 1 },
    evidenceNames: ['Bag of stolen cash', 'Stolen register drawer'], requireEvidence: false, map: MAP_STORE,
  },
  {
    id: 'maple', name: 'MAPLE STREET', title: 'High-Risk Narcotics Warrant', difficulty: 2,
    location: 'Single-family residence, 42 Maple Street', time: '05:10',
    brief: 'Narcotics detectives hold a no-knock warrant for a residence used to cut and distribute fentanyl. Occupants are known to be armed and paranoid; an informant reports doors rigged with alarms and possibly worse. Secure all occupants and seize the narcotics and ledgers as evidence.',
    intel: ['Suspects: 5 (mixed small arms)', 'Civilians: 2 (residents, uninvolved)', 'Doors: expect locked and TRAPPED doors — use the mirror', 'Objective: seize all narcotics evidence'],
    suspects: 5, civilians: 2, hostagePairs: 0, locked: 0.5, trap: 0.3, traps: { alarm: 2, flash: 2, bomb: 1 }, faker: 0.2,
    persona: { normal: 3, aggressive: 3, coward: 2, fanatic: 1 }, guns: { pistol: 3, smg: 2, shotgun: 2, rifle: 1, none: 1 },
    evidenceNames: ['Fentanyl press', 'Packaged narcotics', 'Distribution ledger', 'Cash bundle'], requireEvidence: true, map: MAP_HOUSE,
  },
  {
    id: 'harbor', name: 'HARBORVIEW', title: 'Hostage Crisis / Explosive Device', difficulty: 3,
    location: 'Harborview Logistics, 3rd floor offices', time: '14:25',
    brief: 'A group of disgruntled ex-contractors has taken the Harborview offices. They are holding staff at gunpoint and claim to have planted an explosive device in the server room. Negotiations have collapsed. You have limited time: neutralize the threat, rescue the hostages and DEFUSE THE DEVICE before it detonates.',
    intel: ['Suspects: 6 (rifles and SMGs)', 'Civilians: 7 — some are being used as human shields', 'Explosive device: north server room, timer running', 'Doors: some locked, a few trapped'],
    suspects: 6, civilians: 7, hostagePairs: 2, locked: 0.35, trap: 0.15, traps: { alarm: 2, flash: 1 }, faker: 0.15,
    persona: { aggressive: 3, normal: 3, fanatic: 2, coward: 1 }, guns: { smg: 2, rifle: 3, pistol: 2 },
    evidenceNames: ['Detonator remote', 'Floor plan with notes', 'Burner phone'], requireEvidence: false, bomb: 540, map: MAP_OFFICE,
  },
  {
    id: 'motel', name: 'SUNSET MOTEL', title: 'Barricaded Fugitives', difficulty: 4,
    location: 'Sunset Motor Lodge, Route 9', time: '02:55',
    brief: 'A crew wanted for a string of armored-car robberies has gone to ground at the Sunset Motor Lodge, occupying several rooms. They have prepared for a siege. Expect heavy resistance, barricaded doors and booby traps. Some guests and the night clerk are still inside. Arrest the fugitives — they are wanted alive if possible.',
    intel: ['Suspects: 7 (shotguns, rifles) — highly hostile', 'Civilians: 4 (guests, night clerk)', 'Doors: mostly locked, ~30% trapped', 'Rear maintenance corridor connects several rooms'],
    suspects: 7, civilians: 4, hostagePairs: 0, locked: 0.6, trap: 0.3, traps: { alarm: 2, flash: 2, bomb: 2 }, faker: 0.25,
    persona: { aggressive: 4, fanatic: 2, normal: 2, coward: 1 }, guns: { pistol: 3, shotgun: 3, smg: 2, rifle: 2 },
    evidenceNames: ['Armored-car cash bag', 'Stolen ID cards', 'Getaway car keys', 'Police scanner', 'Robbery plans'], requireEvidence: false, map: MAP_MOTEL,
  },
];
