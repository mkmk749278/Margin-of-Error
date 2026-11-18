import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {beatScale, camAt, dolly, Hull3D} from '../hull3d';
import {RecordPage} from '../docs';
import {ActTitle, media, Mount, Photo, useFilmFrame} from '../kit';
import {Chip, clamp, lit, RealFootage, sans, span, T, T_EVENT, TimeTrace, vis, Wd} from '../parts';
import {FILM_FRAMES} from '../timing';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT IV · THE CASCADE (sentences 200–216) and ACT V · THE VERDICT (217–252, the outro).
// Choreography: scenes/choreography/act45.md (generated from this file). No animation of the collapse with people
// aboard: the last dive is a depth readout and a line that stops.

// ── 1 · 2023: four shallow dives, a second damage, three reports (s200–s207) ───────────────────────────────────

const Year2023: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(201, 'twenty'), wf(201, 'twenty-three'), wf(201, "titan's"), wf(201, 'first'), wf(201, 'four'), wf(201, 'dives'), wf(201, 'deeper'), wf(201, 'ten'), wf(201, 'metres'), wf(202, 'after'), wf(202, 'eighty-two'), wf(202, 'hull'), wf(202, 'again'), wf(203, 'calls'), wf(203, 'damage'), wf(203, 'unknown'), wf(204, 'says'), wf(204, 'dive'), wf(204, 'eighty'), wf(204, 'likely'), wf(204, 'worse'), wf(204, 'outdoors'), wf(204, 'points'), wf(204, 'towing'), wf(205, 'weaken'), wf(206, 'investigators'), wf(206, 'differ'), wf(207, 'b'), wf(207, 'two'), wf(207, 'events'), wf(207, 'dive'), wf(207, 'eighty'), wf(207, 'something'), wf(207, 'dive', 1), wf(207, 'eighty-two'), wf(208, 'transportation'), wf(208, 'safety'), wf(208, 'found'), wf(208, 'likely'), wf(208, 'progressively'), wf(208, 'with'), wf(208, 'accumulating'), wf(208, 'during')];
	const cam = dolly(camAt(f, [
		{f: sf(201) - 10, cam: {pos: [30, 10, 12], look: [0, -2, 0.6], fov: 32}},
		{f: wf(202, 'damaged'), cam: {pos: [16, 12, 14], look: [0, 0.2, 2], fov: 30}},
		{f: sf(205), cam: {pos: [22, 13, 20], look: [0, -0.4, 1], fov: 30}},
		{f: ef(208) + 20, cam: {pos: [16, 13, 16], look: [0, 0.4, 1.6], fov: 30}},
	]), f, BEATS);
	const atSea = 1 - lead(f, wf(202, 'some'), 16);
	const dmg = lead(f, wf(202, 'damaged'), 10);
	const prog = f >= wf(208, 'progressively') ? flash(f, wf(208, 'each'), 0) : 0;
	const dives = ['84', '85', '86', '87'];
	return (
		<>
			<ActTitle n="IV" title="The Cascade" start={hold(200).from + 6} end={sf(201) - 6} />
			<AbsoluteFill style={{opacity: vis(f, sf(201) - 10, ef(208) + 20)}}>
				<Hull3D width={1920} height={1080} cam={cam} cut={0.6 * (1 - atSea)} g4={lead(f, wf(207, 'eighty'), 8)} sensors={0.2} crackle={prog} interfaces={Math.max(dmg, lead(f, wf(207, 'something'), 8))} sea={atSea} bench={1} />
				<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', width: 1640}}>
					{f < wf(202, 'some') ? (
						<>
							<Chip text="2023 · DIVES" tone={colors.amber} size={32} />
							{dives.map((d, i) => (f >= wf(201, 'four') + i * 8 - 10 ? <Chip key={d} text={d} tone={colors.ink} size={32} style={{transform: `scale(${bump(f, fps, wf(201, 'four') + i * 8).toFixed(4)})`}} /> : null))}
							{f >= wf(201, 'ten') - 10 ? <Chip text="≤ 10 M" tone={colors.cyan} size={32} /> : null}
						</>
					) : null}
					{f >= wf(202, 'after') - 10 && f < sf(205) ? <Chip text="AFTER DIVE 82: DAMAGED AGAIN" tone={colors.red} size={30} /> : null}
					{f >= wf(203, 'n') - 10 && f < sf(205) ? <Chip text="NTSB: OF UNKNOWN ORIGIN" tone={colors.cyan} size={30} /> : null}
					{f >= wf(204, 'coast') - 10 && f < sf(205) ? <Chip text="USCG BOARD: LIKELY MADE WORSE BY THE WINTER OUTDOORS AND THE TOWING" tone={colors.amber} size={28} /> : null}
					{f >= wf(207, 'n') - 10 ? <Chip text="NTSB: TWO EVENTS · DIVE 80 · AFTER DIVE 82" tone={colors.cyan} size={30} /> : null}
					{f >= wf(208, "canada's") - 10 ? <Chip text="TSB: LIKELY PROGRESSIVE · DAMAGE EACH DIVE" tone={colors.amber} size={30} /> : null}
				</div>
				<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · 2023 DIVES: NTSB MIR-25-36 TABLE 6</div>
			</AbsoluteFill>
		</>
	);
};

// ── 2 · 18 JUN 2023: the last dive, the buckling, the forward end (s208–s212) ──────────────────────────────────

const LastDive: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const dive = vis(f, sf(209) - 10, ef(209) + 20);
	// the dive's depth rolls under the cut and never lands on a number no record gives (forensic 2.8)
	const depth = rollTo(f, [{frame: wf(209, 'titan'), value: 0}, {frame: ef(209) + 200, value: 3350}]);
	const buck = vis(f, sf(211) - 10, ef(212) + 16);
	const split = lead(f, wf(211, 'splits'), 14);
	const load = span(f, wf(211, 'buckle') - 6, wf(211, 'easily') + 10);
	const local = span(f, wf(212, 'changes') - 4, wf(212, 'way') + 10);
	const fwd = vis(f, sf(213) - 10, ef(213) + 24);
	const bs = beatScale(f, [wf(209, 'june'), wf(209, 'made'), wf(209, 'first'), wf(209, 'deep'), wf(209, 'eleven'), wf(210, 'b'), wf(210, 'existing'), wf(210, 'delaminations'), wf(210, 'and'), wf(210, 'damage'), wf(210, 'likely'), wf(210, 'local'), wf(210, 'failure'), wf(211, 'splits'), wf(211, 'one'), wf(211, 'thick'), wf(211, 'layer'), wf(211, 'two'), wf(211, 'thinner'), wf(211, 'ones'), wf(211, 'thinner', 1), wf(211, 'more'), wf(212, 'buckle'), wf(212, 'one'), wf(212, 'part'), wf(212, 'changes'), wf(212, 'shape'), wf(212, 'gives')], 0.02);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			{dive > 0 ? (
				<AbsoluteFill style={{opacity: dive}}>
					<RealFootage f={f} start={sf(209) - 10} end={ef(209) + 20} src="footage/atl_swell.mp4" date="" what="THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY" source="SAGA47SWAN / YOUTUBE · CC BY" push={0.06} />
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center'}}>
						<DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(209, 'eighteenth')} monthWord={wf(209, 'june')} fromDay={18} size={40} />
						{f >= wf(209, 'first') - 10 ? <Chip text="DIVE 88 · FIRST DEEP DIVE IN 11 MONTHS" tone={colors.amber} size={32} /> : null}
					</div>
					<div style={{position: 'absolute', right: 120, top: 160, textAlign: 'right', opacity: lead(f, wf(209, 'made'), 10)}}>
						<div style={T(30, {color: colors.cyan})}>TITAN · DEPTH</div>
						<div style={{...T(96, {color: colors.ink, fontWeight: 700}), textShadow: '0 4px 20px rgba(0,0,0,0.8)'}}>{Math.round(depth).toLocaleString('en-US')} <span style={{fontSize: 44}}>M</span></div>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(210) - 14} end={ef(210) + 20} hl={[{key: 'buckling', at: wf(210, 'buckling')}]} label="ANALYSIS" pushTo={wf(210, 'found')} />
			{buck > 0 ? (
				<AbsoluteFill style={{opacity: buck}}>
					<Mount x={140} y={130} w={1640} h={800} start={sf(211) - 10} end={ef(212) + 16} source="WHY A DELAMINATION WEAKENS A WALL · NTSB MIR-25-36" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* left: one thick layer; right: the same layer split in two, under the same end load */}
						<rect x={300} y={420} width={520} height={80} fill={colors.cyan} opacity={0.3} stroke={colors.cyan} strokeWidth={2} />
						<text x={300} y={400} style={T(28, {fill: colors.ink})}>ONE THICK LAYER</text>
						{[0, 1].map((k) => {
							const y = 420 + k * (40 + 10 * split) ;
							const sag = (k === 0 ? -1 : 1) * 46 * load * split;
							return (
								<path key={k} d={`M 1100 ${y} Q 1360 ${y + sag} 1620 ${y} L 1620 ${y + 38} Q 1360 ${y + 38 + sag} 1100 ${y + 38} Z`} fill={colors.amber} opacity={0.32} stroke={colors.amber} strokeWidth={2} />
							);
						})}
						<text x={1100} y={400} style={T(28, lit(f, wf(211, 'two'), colors.amber, colors.ink))} opacity={split}>SPLIT INTO TWO THINNER LAYERS</text>
						{/* the same load at both ends */}
						{[[280, 460, 1], [840, 460, -1], [1080, 480, 1], [1640, 480, -1]].map(([x, y, s], i) => (
							<g key={i} opacity={lead(f, wf(211, 'buckle'), 10)}>
								<line x1={x - 40 * s} x2={x} y1={y} y2={y} stroke={colors.ink} strokeWidth={4} />
								<polygon points={`${x},${y - 10} ${x},${y + 10} ${x + 14 * s},${y}`} fill={colors.ink} />
							</g>
						))}
						<text x={1100} y={640} style={T(30, lit(f, wf(211, 'buckle'), colors.red, colors.ink))} opacity={lead(f, wf(211, 'thinner', 1), 8)}>THINNER LAYERS BUCKLE MORE EASILY</text>
					</svg>

					{local > 0 ? <div style={{position: 'absolute', left: 1100, top: 560, ...T(28, {color: colors.red}), opacity: local}}>A LOCAL CHANGE OF SHAPE</div> : null}
				</AbsoluteFill>
			) : null}
			{fwd > 0 ? (
				<AbsoluteFill style={{opacity: fwd}}>
					<div style={{position: 'absolute', left: 0, top: 0, width: 1140, height: 1080}}>
						<Hull3D width={1140} height={1080} cam={dolly(camAt(f, [{f: sf(213) - 10, cam: {pos: [16, 12, 16], look: [0, 0.4, 2.4], fov: 30}}, {f: ef(213) + 24, cam: {pos: [9, 12, 12], look: [0, 1.4, 3.8], fov: 28}}]), f, [wf(213, 'eighty'), wf(213, 'found'), wf(213, 'reached'), wf(213, 'forward'), wf(213, 'cylinder'), wf(213, 'that'), wf(213, 'gauge'), wf(213, 'change')])} cut={0.6} g4={lead(f, wf(213, 'gauge'), 10)} sensors={0.2} interfaces={lead(f, wf(213, 'forward'), 10)} bench={1} />
					</div>
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 12}}>
						{f >= wf(213, 'forward') - 10 ? <Chip text="DIVE 80'S DAMAGE: THE FORWARD END · NTSB" tone={colors.red} size={30} /> : null}
						{f >= wf(213, 'gauge') - 10 ? <Chip text="WHERE GAUGE GROUP 4 SAT" tone={colors.cyan} size={30} /> : null}
					</div>
					<RealFootage f={f} start={sf(213) - 10} end={ef(213) + 24} src="footage/rov_debris.mp4" date="22 JUN 2023" what="ROV VIDEO · FORWARD DEBRIS FIELD" source="USCG MBI · DVIDS" push={0.03} box={{x: 1180, y: 130, w: 640, h: 360}} under />
					<RealFootage f={f} start={sf(213)} end={ef(213) + 24} src="photos/cf_debris.jpg" video={false} date="" what="RECOVERED HULL PIECES" source="USCG · DVIDS" push={0.04} box={{x: 1180, y: 560, w: 540, h: 360}} under />
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};

// ── 3 · Signature 3: the dive record complete (s213–s216, then 2 s of room tone) ─────────────────────────────────

type Row = {d: string; m: number; date: string};
const ROWS: Row[] = [
	{d: '75', m: 3840, date: '03 JUL'},
	{d: '76', m: 3840, date: '06 JUL'},
	{d: '77', m: 30, date: '08 JUL'},
	{d: '78', m: 10, date: '11 JUL'},
	{d: '79', m: 3840, date: '14 JUL'},
	{d: '80', m: 3840, date: '15 JUL'},
	{d: '81', m: 3840, date: '19 JUL'},
	{d: '82', m: 3840, date: '22 JUL'},
	{d: '83', m: 2954, date: '23 JUL'},
	{d: '84', m: 8, date: '22 MAY'},
	{d: '85', m: 10, date: '31 MAY'},
	{d: '86', m: 10, date: '05 JUN'},
	{d: '87', m: 10, date: '12 JUN'},
	{d: '88', m: 3363, date: '18 JUN'},
];
const xOf = (i: number): number => 250 + i * 92 + (i >= 9 ? 150 : 0);
const Y0 = 556;
const yD = (m: number): number => Y0 + (m / 4000) * 300;

const Record: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const rowAt = (i: number) => wf(214, 'seventy-five') + Math.round(((wf(214, 'eighty-eight') - wf(214, 'seventy-five')) * i) / 12);
	// the decisions, each pinned beside the dive it followed (dated in the record), arriving in order on "each dated decision"
	const pins: {i: number; row: number; text: string; tone: string}[] = [
		{i: 5, row: 0, text: '15 JUL · BANG · "DIVE AGAIN"', tone: colors.red},
		{i: 6, row: 1, text: '19 JUL · THE BEND, IN THE DATA', tone: colors.amber},
		{i: 8, row: 2, text: '26 JUL · PARKING LOT, UNCOVERED', tone: colors.amber},
		{i: 8, row: 3, text: '28 JUL · CA$1,750 COVER · NO ANSWER', tone: colors.amber},
		{i: 9, row: 0, text: 'WINTER OUTSIDE · −17 → 29°C', tone: colors.cyan},
		{i: 9, row: 1, text: 'EARLY 2023 · ENGINEERING POST VACANT', tone: colors.red},
		{i: 10, row: 2, text: 'TOWED BEHIND A SMALLER SHIP', tone: colors.amber},
	];
	const pinAt = (k: number) => wf(214, 'each') + k * 10;
	const six = ['75', '76', '79', '80', '81', '82'];
	const sixO = lead(f, wf(215, 'six'), 12);
	const n13 = Math.round(rollTo(f, [{frame: wf(216, 'thirteen') - 12, value: 6}, {frame: wf(216, 'thirteen') + LAND, value: 13}]));
	// dive 88: the line draws on "one line" and stops on "stops"; no flash, no sound: the line ends
	const d88 = span(f, wf(217, 'line') - 4, wf(217, 'stops') + LAND);
	const gap = lead(f, wf(217, 'five'), 14);
	return (
		<>
			<Mount x={120} y={100} w={1680} h={860} start={sf(214) - 12} end={hold(217).from + hold(217).frames + 20} source="DIVES 75–88: NTSB MIR-25-36, TABLES 5–6 · DECISIONS: USCG MBI, CG 112, NTSB" labels={['DEPTHS TO SCALE']} lean={3} />
			<div style={{position: 'absolute', left: 200, top: 130, ...T(32, {}), fontWeight: 700}}>
				<Wd f={f} at={wf(214, 'dive')} lightAt={wf(214, 'record')} tone={colors.ink} bold>THE DIVE RECORD · </Wd>
				<Wd f={f} at={wf(214, 'seventy-five')} tone={colors.cyan} bold>75 </Wd>
				<Wd f={f} at={wf(214, 'to')} tone={colors.cyan} bold>→ </Wd>
				<Wd f={f} at={wf(214, 'eighty-eight')} tone={colors.cyan} bold>88 · </Wd>
				<Wd f={f} at={wf(214, 'each')} lightAt={wf(214, 'decision')} tone={colors.amber}>EACH DATED DECISION </Wd>
				<Wd f={f} at={wf(214, 'beside')} lightAt={wf(214, 'followed')} tone={colors.amber}>BESIDE THE DIVE IT FOLLOWED</Wd>
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<line x1={220} x2={1720} y1={Y0} y2={Y0} stroke={colors.sub} strokeWidth={2} />
				<line x1={220} x2={1720} y1={yD(3840)} y2={yD(3840)} stroke={colors.cyan} strokeWidth={2} strokeDasharray="8 8" opacity={lead(f, wf(215, 'three'), 12)} />
				<text x={1720} y={yD(3840) + 36} textAnchor="end" style={T(28, lit(f, wf(215, 'forty'), colors.cyan))} opacity={lead(f, wf(215, 'three'), 10)}><tspan style={lit(f, wf(215, 'thousand'), colors.cyan)}>3,</tspan><tspan style={lit(f, wf(215, 'eight'), colors.cyan)}>8</tspan><tspan style={lit(f, wf(215, 'hundred'), colors.cyan)}>4</tspan>0 M · THE WRECK</text>
				{/* the 2022–23 winter gap */}
				<text x={(xOf(8) + xOf(9)) / 2} y={yD(2000)} textAnchor="middle" style={T(26, {fill: colors.ink})} opacity={lead(f, wf(214, 'dated'), 10)}>WINTER</text>
				{ROWS.map((row, i) => {
					if (row.d === '88') return null;
					const at = rowAt(i);
					const k = interpolate(f, [at - 8, at + 12], [0, 1], clamp);
					const isSix = six.includes(row.d);
					const tone = row.d === '80' ? colors.red : isSix ? colors.cyan : colors.sub;
					return (
						<g key={row.d} opacity={Math.max(0.2, k)}>
							<rect x={xOf(i) - 14} y={Y0} width={28} height={(yD(row.m) - Y0) * k + 2} fill={tone} opacity={isSix ? 0.6 + 0.4 * sixO : 0.7} />
							<text x={xOf(i)} y={Y0 - 14} textAnchor="middle" style={T(26, {fill: colors.ink, fontWeight: 700})}>{row.d}</text>
						</g>
					);
				})}
				{/* dive 88 */}
				<g opacity={lead(f, wf(217, 'one'), 8)}>
					<rect x={xOf(13) - 14} y={Y0} width={28} height={(yD(3363) - Y0) * d88 + 2} fill={colors.ink} />
					<text x={xOf(13)} y={Y0 - 14} textAnchor="middle" style={T(26, {fill: colors.ink, fontWeight: 700})}>88</text>
				</g>
				{gap > 0 ? (
					<g opacity={gap}>
						<line x1={xOf(13) - 22} x2={xOf(13) - 22} y1={yD(3363)} y2={yD(3363) + (yD(3840) - yD(3363)) * gap} stroke={colors.amber} strokeWidth={3} />
						<text x={xOf(13) - 30} y={yD(3600) + 10} textAnchor="end" style={T(28, lit(f, wf(217, 'hundred'), colors.amber))}>≈ 500 M SHORT</text>
					</g>
				) : null}
			</svg>
			{/* the pinned decisions, in order on "each dated decision" */}
			<div style={{position: 'absolute', left: 200, top: 186, width: 1180, display: 'flex', flexDirection: 'column', gap: 6}}>
				{pins.map((p, k) => (
					<span key={k} style={{opacity: lead(f, pinAt(k), 8), transform: `scale(${bump(f, fps, pinAt(k) + LAND, 0.05).toFixed(4)})`, display: 'inline-block'}}>
						<Chip text={`${p.i < 9 ? 'AFTER ' + ROWS[p.i].d : 'BEFORE 84'} · ${p.text}`} tone={p.tone} size={26} style={{whiteSpace: 'nowrap', padding: '1px 10px 0'}} />
					</span>
				))}
			</div>
			<div style={{position: 'absolute', left: 1420, top: 186, width: 330, display: 'flex', flexDirection: 'column', gap: 4, opacity: lead(f, wf(215, 'six'), 8)}}>
				<span style={{...T(56, {color: colors.cyan, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(216, 'thirteen') + LAND).toFixed(4)})`}}>{f >= wf(216, 'thirteen') - 12 ? n13 : 6}</span>
				<span style={T(26, {color: colors.ink})}>{f >= wf(216, 'all') ? 'TO 3,840 M · IN ALL, 2021–22' : 'OF THESE REACHED 3,840 M'}</span>
			</div>
		</>
	);
};

// ── 4 · Act V: two things often said; the findings; the referral; the day; the company; what now (s217–s245) ────

const Verdict: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const myths = vis(f, sf(218) - 10, ef(218) + 12);
	const day = vis(f, sf(232) - 10, ef(233) + 14);
	const company = vis(f, sf(237) - 10, sf(239) - 14);
	const recs = vis(f, sf(239) - 10, ef(246) + 30);
	const recList: [string, [string, number][], number][] = [
		['M-25-015', [['IMO ', wf(241, 'international')], ['SUBMERSIBLE GUIDANCE ', wf(241, 'submersibles')], ['→ ', wf(241, 'make')], ['MANDATORY', wf(241, 'mandatory')]], wf(241, 'one')],
		['M-25-012', [['STUDY ', wf(242, 'study')], ['PRESSURE VESSELS ', wf(242, 'pressure')], ['THAT CARRY ', wf(242, 'carry')], ['PEOPLE', wf(242, 'people')]], wf(242, 'two')],
		['M-25-013', [['WRITE ', wf(243, 'write')], ['RULES ', wf(243, 'rules')], ['FOR THEM', wf(243, 'them')]], wf(243, 'three')],
		['M-25-014', [['BRING ', wf(244, 'bring')], ['THE 1993 ', wf(244, 'nineteen')], ['GUIDANCE ', wf(244, 'guidance')], ['UP TO DATE ', wf(244, 'date')], ['WITH THE ', wf(244, 'law')], ['1993 LAW', wf(244, 'year')]], wf(244, 'four')],
	];
	const bs = beatScale(f, [wf(218, 'two'), wf(218, 'often'), wf(218, 'titan'), wf(219, 'controller'), wf(219, 'on'), wf(219, 'eighty-one'), wf(219, 'thruster'), wf(219, 'controls'), wf(219, 'found'), wf(219, 'reverse'), wf(219, 'the', 1), wf(219, 'controller', 1), wf(219, 'around'), wf(220, 'three'), wf(220, 'reports'), wf(220, 'controller'), wf(220, 'cause'), wf(221, 'window'), wf(221, 'coast'), wf(221, 'criticised'), wf(221, 'as'), wf(221, 'untested'), wf(221, 'uncertified'), wf(221, 'but'), wf(221, 'unlikely'), wf(221, 'window', 1), wf(221, 'implosion'), wf(222, 'three'), wf(222, 'place'), wf(222, 'failure'), wf(223, 'probable'), wf(223, 'cause'), wf(223, "oceangate's"), wf(223, 'inadequate'), wf(223, 'engineering'), wf(223, 'process'), wf(223, 'failed'), wf(223, 'establish'), wf(223, 'actual'), wf(223, 'durability'), wf(223, 'titan'), wf(224, 'guidance'), wf(224, 'rules'), wf(224, 'make'), wf(224, 'meet'), wf(224, 'standards'), wf(224, 'the', 3), wf(224, 'analysis'), wf(224, 'own'), wf(224, 'data'), wf(225, 'marine'), wf(225, 'called'), wf(225, 'preventable'), wf(225, 'tragedy'), wf(226, 'transportation'), wf(226, 'safety'), wf(226, 'found'), wf(226, 'received'), wf(226, 'oversight'), wf(226, 'transport'), wf(226, 'canada'), wf(226, 'sailed'), wf(226, "john's"), wf(226, 'canadian'), wf(227, 'board'), wf(227, 'wrote'), wf(227, 'about'), wf(228, "company's"), wf(228, 'executive'), wf(228, 'its'), wf(229, 'incident'), wf(229, 'board'), wf(229, 'recommended'), wf(229, 'commandant'), wf(229, 'refer'), wf(229, 'matter'), wf(229, 'department'), wf(229, 'justice'), wf(229, 'its'), wf(229, 'consideration'), wf(229, 'whether'), wf(229, 'separate'), wf(229, 'investigation'), wf(230, 'crime'), wf(230, 'committed'), wf(230, 'board'), wf(230, 'wrote'), wf(230, 'the', 1), wf(230, 'department'), wf(230, 'decide'), wf(230, 'and'), wf(230, 'happen'), wf(231, 'died'), wf(232, 'one'), wf(232, 'concerns'), wf(232, 'eighteenth'), wf(232, 'june'), wf(232, 'itself'), wf(233, "company's"), wf(233, 'communications'), wf(233, 'plan'), wf(233, 'first'), wf(233, 'rescuers'), wf(233, 'more'), wf(233, 'seven'), wf(233, 'hours'), wf(233, 'that', 1), wf(233, 'rescue'), wf(233, 'standing'), wf(234, 'implosion'), wf(234, 'caused'), wf(234, 'loss'), wf(234, 'lives'), wf(234, 'before'), wf(234, 'distress'), wf(235, 'found'), wf(235, 'rescue'), wf(235, 'have'), wf(236, 'ready'), wf(236, 'found'), wf(236, 'titan'), wf(236, 'likely'), wf(236, 'found', 1), wf(237, 'suspended'), wf(237, 'operations'), wf(237, 'july'), wf(237, 'twenty'), wf(237, 'twenty-three'), wf(238, 'report'), wf(238, 'came'), wf(238, 'company'), wf(238, 'spokesperson'), wf(238, 'oceangate'), wf(238, 'wound'), wf(238, 'down'), wf(238, 'fully'), wf(238, 'cooperating'), wf(238, 'investigation'), wf(238, 'and'), wf(238, 'condolences'), wf(238, 'families'), wf(239, 'now'), wf(240, 'b'), wf(240, 'four'), wf(240, 'recommendations'), wf(240, 'the', 1), wf(240, 'guard'), wf(241, 'one'), wf(241, 'propose'), wf(241, 'international'), wf(241, 'maritime'), wf(241, 'organization'), wf(241, 'make'), wf(241, 'submersibles'), wf(241, 'mandatory'), wf(242, 'two'), wf(242, 'study'), wf(242, 'vessels'), wf(242, 'people'), wf(243, 'three'), wf(243, 'write'), wf(244, 'four'), wf(244, 'bring'), wf(244, 'nineteen'), wf(244, 'ninety-three'), wf(244, 'guidance'), wf(244, 'date'), wf(244, 'passed'), wf(244, 'year'), wf(245, 'agreed'), wf(245, 'update'), wf(245, 'guidance'), wf(245, 'and'), wf(245, 'agreed', 1), wf(246, 'october'), wf(246, 'twenty'), wf(246, 'twenty-six'), wf(246, 'all'), wf(246, 'four'), wf(246, 'recommendations'), wf(246, 'remain')], 0.016);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			{myths > 0 ? (
				<AbsoluteFill style={{opacity: myths}}>
					<Hull3D width={1920} height={1080} cam={dolly(camAt(f, [{f: sf(218) - 10, cam: {pos: [24, 10, 26], look: [0, -0.6, 2], fov: 30}}, {f: ef(218) + 12, cam: {pos: [16, 8, 24], look: [0, 0, 4.5], fov: 30}}]), f, [wf(218, 'things'), wf(218, 'often'), wf(218, 'titan')])} cut={0} g4={0} sensors={0} interfaces={0} domesLit={lead(f, wf(218, 'titan'), 10)} bench={1} />
				</AbsoluteFill>
			) : null}
			{/* each myth beside its page (forensic v2, idea 3): the board's own paragraph, highlighted on the words said */}
			<RecordPage set="roi" start={sf(219) - 14} end={ef(220) + 16} page={235} hl={[{key: 'mapping', at: wf(219, 'mapped')}, {key: 'turned', at: wf(219, 'turned')}]} label="THE CONTROLLER" title="4.34.9 · DIVE 81" pushTo={wf(219, 'thruster')} />
			<RecordPage set="roi" start={sf(221) - 14} end={ef(221) + 12} page={280} hl={[{key: 'windowok', at: wf(221, 'unlikely')}]} label="THE WINDOW" title="5.5 · THE ACRYLIC WINDOW" pushTo={wf(221, 'criticised')} />
			<AbsoluteFill style={{opacity: vis(f, sf(222) - 10, ef(222) + 20, 10, 12)}}>
				<Photo src={media('photos/pieces_recovered.jpg')} iw={1609} ih={1490} start={sf(222) - 10} end={ef(222) + 20} source="RECOVERED PIECES OF TITAN'S CARBON FIBRE HULL · NTSB MIR-25-36 FIG. 13" from={{x: 0, y: 0, w: 1609, h: 1490}} to={{x: 100, y: 120, w: 1400, h: 700}} box={{x: 150, y: 110, w: 1620, h: 820}} labels={['NTSB PHOTO']} />
				<div style={{position: 'absolute', left: 170, top: 130, opacity: lead(f, wf(222, 'reports'), 8)}}><Chip text="NTSB · USCG BOARD · TSB: THE FAILURE WAS IN THE HULL" tone={colors.red} size={32} /></div>
			</AbsoluteFill>
			<ActTitle n="V" title="The Verdict" start={ef(222) + 24} end={sf(223) + 6} />
			<RecordPage set="mir" start={sf(223) - 6} end={ef(224) + 20} page={74} hl={[{key: 'probable', at: wf(223, 'inadequate')}, {key: 'flawedanalysis', at: wf(224, 'flawed')}]} label="PROBABLE CAUSE" pushTo={wf(223, 'cause')} />
			<RecordPage set="roi" start={sf(225) - 14} end={ef(225) + 16} hl={[{key: 'preventable', at: wf(225, 'preventable')}]} label="EXHIBIT" pushTo={wf(225, 'marine')} />
			<AbsoluteFill style={{opacity: vis(f, sf(226) - 10, ef(226) + 20, 10, 12)}}>
				<RealFootage f={f} start={sf(226) - 10} end={ef(226) + 20} src="footage/stj_aerial.mp4" date="" what="ST. JOHN'S · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.06} />
				<div style={{position: 'absolute', left: 140, top: 110, display: 'flex', gap: 12, flexWrap: 'wrap', width: 1640}}>
					<Chip text="TSB CANADA · M23A0169" tone={colors.amber} size={32} />
					{f >= wf(226, 'oversight') - 10 ? <Chip text="NO OVERSIGHT FROM TRANSPORT CANADA" tone={colors.red} size={32} style={{transform: `scale(${bump(f, fps, wf(226, 'oversight')).toFixed(4)})`}} /> : null}
				</div>
			</AbsoluteFill>
			<RecordPage set="roi" start={sf(227) - 14} end={ef(231) + 20} hl={[{key: 'survived', at: wf(229, 'survived')}, {key: 'doj', at: wf(230, 'crime')}, {key: 'willnot', at: wf(230, 'will')}]} label="EXHIBIT" title="6.5 · THE BOARD'S REFERRAL SECTION" pushTo={wf(229, 'had')} />
			{day > 0 ? (
				<AbsoluteFill style={{opacity: day}}>
					<RealFootage f={f} start={sf(232) - 10} end={ef(233) + 14} src="photos/search_sea.jpg" video={false} date="21 JUN 2023" what="COAST GUARD AIR CREW, SEARCHING" source="U.S. COAST GUARD · DVIDS" push={0.08} focus={[0.5, 0.5]} />
					<AbsoluteFill style={{background: 'rgba(10,13,18,0.45)'}} />
					<div style={{position: 'absolute', left: 220, top: 170, display: 'flex', gap: 16, alignItems: 'center'}}>
						<Wd f={f} at={wf(232, 'one')} lightAt={wf(232, 'finding')} style={T(32, {})}>ONE MORE FINDING </Wd><Wd f={f} at={wf(232, 'concerns')} style={T(32, {})}>· </Wd>
						<DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(232, 'eighteenth')} monthWord={wf(232, 'june')} fromDay={18} size={30} />
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<line x1={260} x2={1660} y1={420} y2={420} stroke={colors.sub} strokeWidth={2} opacity={lead(f, wf(233, 'communications'), 10)} />
						<circle cx={260} cy={420} r={14} fill={colors.ink} opacity={lead(f, wf(233, 'communications'), 10)} />
						<text x={260} y={390} style={T(28, {fill: colors.ink})} opacity={lead(f, wf(233, 'communications'), 10)}>10:47 · LAST MESSAGE</text>
						<rect x={260} y={406} width={1300 * span(f, wf(233, 'delayed') - 6, wf(233, 'hours') + 10)} height={28} fill={colors.amber} opacity={0.35} />
						<text x={1560} y={390} textAnchor="end" style={T(30, lit(f, wf(233, 'hours'), colors.amber))} opacity={lead(f, wf(233, 'seven'), 8)}>FIRST CALL TO RESCUERS: 7+ HOURS</text>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 500, display: 'flex', gap: 12, flexWrap: 'wrap', width: 1480}}>
						{f >= wf(233, 'board') - 10 ? <Chip text="USCG BOARD: THE COMPANY'S OWN COMMUNICATIONS PLAN" tone={colors.amber} size={30} /> : null}
						{f >= wf(233, 'seven') - 10 ? <Chip text="NO DEEP-WATER RESCUE VEHICLE STANDING BY" tone={colors.red} size={30} /> : null}
					</div>
				</AbsoluteFill>
			) : null}
			{/* the findings on their pages (forensic v2, idea 2): the board's summary, then the NTSB's conclusion */}
			<RecordPage set="roi" start={sf(234) - 14} end={ef(234) + 16} hl={[{key: 'immediate', at: wf(234, 'immediate')}]} label="EXHIBIT" pushTo={wf(234, 'implosion')} />
			<RecordPage set="mir" start={sf(235) - 14} end={ef(236) + 20} page={66} hl={[{key: 'couldnotsave', at: wf(235, 'not')}, {key: 'sooner', at: wf(236, 'likely')}]} label="EXHIBIT" title="2.5 · SEARCH AND RESCUE" pushTo={wf(235, 'search')} />
			{company > 0 ? (
				<AbsoluteFill style={{opacity: company}}>
					<Photo src={media('photos/fwd_segment_fbi.jpg')} iw={1159} ih={848} start={sf(237) - 10} end={sf(239) - 14} source="TITAN'S FORWARD SEGMENT, RECOVERED · 05 JUL 2023 · FBI · USCG ROI FIG. 159" from={{x: 0, y: 0, w: 1159, h: 848}} to={{x: 120, y: 80, w: 900, h: 660}} box={{x: 150, y: 110, w: 1620, h: 820}} labels={['RECORD PHOTO']} />
					<div style={{position: 'absolute', left: 170, top: 130, display: 'flex', gap: 12, flexWrap: 'wrap', width: 1580}}>
						<Chip text="OCEANGATE · OPERATIONS SUSPENDED JUL 2023" tone={colors.ink} size={30} />
						{f >= wf(238, 'spokesperson') - 10 ? <Chip text="AUG 2025 · COMPANY SPOKESPERSON: WOUND DOWN, COOPERATING, CONDOLENCES" tone={colors.ink} size={28} /> : null}
					</div>
				</AbsoluteFill>
			) : null}
			{recs > 0 ? (
				<AbsoluteFill style={{opacity: recs}}>
					<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080}}>
						<RecordPage set="mir" start={sf(239) - 10} end={ef(246) + 30} page={75} hl={[{key: 'rec015', at: wf(241, 'one')}, {key: 'rec012', at: wf(242, 'two')}, {key: 'rec013', at: wf(243, 'three')}, {key: 'rec014', at: wf(244, 'four')}]} label="RECOMMENDATIONS" title="4.1 · TO THE US COAST GUARD" pushTo={wf(240, 'four')} />
					</div>
					<div style={{position: 'absolute', left: 120, top: 220, display: 'flex', flexDirection: 'column', gap: 26}}>
						{recList.map(([id, , at]) => (
							<div key={id} style={{display: 'flex', flexDirection: 'column', gap: 8, opacity: Math.max(0.25, lead(f, at, 10))}}>
								<span style={{...T(36, {color: f >= at ? colors.cyan : colors.sub, fontWeight: 700}), transform: `scale(${bump(f, fps, at).toFixed(4)})`, transformOrigin: 'left center', display: 'inline-block'}}>{id}</span>
								<span style={{opacity: lead(f, wf(246, 'remain'), 8)}}><Chip text={f >= wf(246, 'open') ? 'OPEN · ACCEPTABLE RESPONSE · OCT 2026' : 'OPEN'} tone={colors.amber} size={26} /></span>
							</div>
						))}
						<div style={{opacity: lead(f, wf(245, 'agreed'), 8)}}><Chip text="USCG: AGREED TO M-25-014" tone={colors.ink} size={26} /></div>
					</div>
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};

// ── 5 · Sign-off (s246–s252), then the outro ────────────────────────────────────────────────────────────────────

const StatusFlipLite: React.FC<{f: number; at: number}> = ({f, at}) => (
	<span style={{opacity: lead(f, at, 8)}}>
		<Chip text="ELEVEN MONTHS LATER · 18 JUN 2023" tone={colors.amber} size={32} />
	</span>
);

const SignOff: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const trace = vis(f, sf(247) - 10, ef(248) + 30);
	const tEnd = rollTo(f, [{frame: sf(247), value: 14.9}, {frame: wf(247, 'changed') + LAND, value: T_EVENT + 0.05}, {frame: ef(247), value: 15.7}]);
	const names: [string, number][] = [
		['STOCKTON RUSH', wf(249, 'stockton')],
		['PAUL-HENRI NARGEOLET', wf(250, 'paul-henri')],
		['SHAHZADA DAWOOD', wf(251, 'shahzada')],
		['SULEMAN DAWOOD', wf(252, 'suleman')],
		['HAMISH HARDING', wf(253, 'hamish')],
	];
	const namesO = vis(f, sf(249) - 20, ef(253) + 240);
	const outroAt = ef(253) + 260;
	const outro = vis(f, outroAt, FILM_FRAMES + 60, 30, 1);
	return (
		<>
			{trace > 0 ? (
				<AbsoluteFill style={{opacity: trace}}>
					<div style={{position: 'absolute', left: 0, top: 0, width: 1060, height: 1080}}>
						<Hull3D width={1060} height={1080} cam={dolly(camAt(f, [{f: sf(247) - 10, cam: {pos: [23, 13, 26], look: [0, -0.2, 1.2], fov: 30}}, {f: ef(248) + 30, cam: {pos: [26, 13, 28], look: [0, -0.4, 1], fov: 30}}]), f, [wf(247, 'july'), wf(247, 'twenty'), wf(247, 'twenty-two'), wf(247, "titan's"), wf(247, 'changed'), wf(247, 'its'), wf(247, 'recorded'), wf(248, 'eleven'), wf(248, 'later'), wf(248, 'first'), wf(248, 'since'), wf(248, 'five'), wf(248, 'aboard')])} cut={0.6} g4={lead(f, wf(247, 'sensors'), 10)} sensors={0.25} aeDark={[0, lead(f, wf(247, 'recorded'), 10), 0, 0, 0, 0, 0, 0]} interfaces={lead(f, wf(247, 'changed'), 10)} bench={1} />
					</div>
					<div style={{position: 'absolute', left: 1000, top: 170, width: 860, height: 560, background: 'rgba(10,13,18,0.55)', borderLeft: `2px solid ${colors.cyan}`}}>
						<TimeTrace f={f} w={860} h={560} tEnd={tEnd} ae={lead(f, wf(247, 'recorded'), 10)} jump={lead(f, wf(247, 'changed'), 8)} showDepth={0} stroke={colors.ink} />
					</div>
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 16, alignItems: 'center'}}>
						<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(247, 'fifteenth')} monthWord={wf(247, 'july')} yearWord={wf(247, 'twenty-two')} fromYear={2022} size={34} />
						{f >= wf(248, 'eleven') - 10 ? <StatusFlipLite f={f} at={wf(248, 'later')} /> : null}
					</div>
					<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>STRAIN: TRACED, NTSB 24-012 FIG. 26 · HULL: ILLUSTRATION</div>
				</AbsoluteFill>
			) : null}
			{namesO > 0 ? (
				<AbsoluteFill style={{background: colors.void, alignItems: 'center', justifyContent: 'center', opacity: namesO}}>
					<AbsoluteFill style={{opacity: 0.45}}>
						<RealFootage f={f} start={sf(249) - 20} end={outroAt + 10} src="footage/atl_surface.mp4" rate={0.5} date="" what="" source="" push={0.04} />
					</AbsoluteFill>
					<div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26, textShadow: '0 2px 18px rgba(0,0,0,0.9)'}}>
						{names.map(([n, at]) => (
							<div key={n} style={{fontFamily: sans, fontWeight: 600, fontSize: 56, letterSpacing: 6, color: colors.ink, opacity: lead(f, at, 14)}}>
								{n}
							</div>
						))}
						<div style={{width: 520 * lead(f, wf(253, 'harding') + 40, 30), height: 1, background: colors.sub, marginTop: 14}} />
						<div style={{...T(30, {color: colors.ink, letterSpacing: 4}), opacity: lead(f, wf(253, 'harding') + 50, 20)}}>18 JUN 2023</div>
					</div>
				</AbsoluteFill>
			) : null}
			{outro > 0 ? (
				<AbsoluteFill style={{background: colors.void, alignItems: 'center', justifyContent: 'center', opacity: outro}}>
					<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, letterSpacing: 14, color: colors.ink, marginRight: -14}}>MARGIN OF ERROR</div>
					<div style={{marginTop: 30, ...T(26, {color: colors.ink, letterSpacing: 2})}}>SOURCES: NTSB MIR-25-36 · NTSB DOCKET DCA23FM036 · USCG MARINE BOARD REPORT · TSB M23A0169</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

export const act45: SceneDef[] = [
	{
		id: 'a4-2023',
		from: hold(200).from,
		to: ef(208) + 30,
		C: Year2023,
		cues: [
			{frame: hold(200).from + 8, sfx: 'whoosh', gainDb: -26},
			{frame: wf(202, 'damaged'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(206, 'differ'), sfx: 'stamp', gainDb: -26},
		],
	},
	{
		id: 'a4-last-dive',
		from: sf(209) - 14,
		to: ef(213) + 34,
		C: LastDive,
		cues: [
			{frame: wf(209, 'eighteenth'), sfx: 'quartz_tick', gainDb: -24},
			{frame: wf(210, 'delaminations') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(211, 'splits'), sfx: 'relay_click', gainDb: -24},
		],
	},
	{
		id: 'a4-record',
		from: sf(214) - 14,
		to: hold(217).from + hold(217).frames + 24,
		C: Record,
		// signature 3: no sound effect on the line that stops (2 s of room tone in the mix)
		cues: [
			{frame: wf(214, 'seventy-five'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(216, 'thirteen'), sfx: 'quartz_tick', gainDb: -24},
		],
	},
	{
		id: 'a5-verdict',
		from: sf(218) - 14,
		to: ef(246) + 40,
		C: Verdict,
		cues: [
			{frame: sf(219) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(219, 'mapped') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(219, 'turned') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: sf(221) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(221, 'unlikely') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: sf(234) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(234, 'immediate') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: sf(235) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(235, 'not') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(236, 'likely') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(220, 'none'), sfx: 'stamp', gainDb: -26},
			{frame: ef(222) + 26, sfx: 'whoosh', gainDb: -26},
			{frame: wf(223, 'inadequate') - 15, sfx: 'highlighter', gainDb: -20},
			{frame: wf(225, 'preventable') - 15, sfx: 'highlighter', gainDb: -20},
			{frame: wf(229, 'survived') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(240, 'four'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(246, 'open'), sfx: 'stamp', gainDb: -24},
		],
	},
	{id: 'a5-signoff', from: sf(247) - 14, to: FILM_FRAMES, C: SignOff, cues: [{frame: wf(247, 'changed'), sfx: 'relay_click', gainDb: -24}]},
];

