import React from 'react';
import {AbsoluteFill, Easing, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {RecordPage} from '../docs';
import {ActTitle, Mount, useFilmFrame} from '../kit';
import {Card, Chip, clamp, HULL, HullLines, lit, RealFootage, sans, SG_POS, span, T, T_EVENT, TimeTrace, vis, Wd} from '../parts';
import {FILM_FRAMES} from '../timing';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT IV · THE CASCADE (sentences 200–216) and ACT V · THE VERDICT (217–252, the outro).
// Choreography: scenes/choreography/act45.md (generated from this file). No animation of the collapse with people
// aboard: the last dive is a depth readout and a line that stops.

const Note: React.FC<{o: number; children: React.ReactNode; tone?: string; y?: number}> = ({o, children, tone = colors.amber, y = 930}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: 96, right: 96, bottom: 1080 - y - 70, opacity: o, display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
			<div style={{background: 'rgba(18,24,36,0.96)', border: `1px solid ${colors.border}`, borderLeft: `3px solid ${tone}`, padding: '12px 22px', ...T(36, {color: colors.ink}), lineHeight: 1.35, maxWidth: 1680, textAlign: 'center'}}>{children}</div>
		</div>
	);

// ── 1 · 2023: four shallow dives, a second damage, three reports (s200–s207) ───────────────────────────────────

const Year2023: React.FC = () => {
	const f = useFilmFrame();
	const dives: [string, number, number][] = [
		['84', 8, wf(201, 'four')],
		['85', 10, wf(201, 'four') + 8],
		['86', 10, wf(201, 'four') + 16],
		['87', 10, wf(201, 'four') + 24],
	];
	const reports = vis(f, sf(205) - 10, ef(208) + 20);
	return (
		<>
			<ActTitle n="IV" title="The Cascade" start={hold(200).from + 6} end={sf(201) - 6} />
			<AbsoluteFill style={{opacity: vis(f, sf(201) - 10, sf(205) - 10)}}>
				<Mount x={140} y={130} w={1640} h={800} start={sf(201) - 10} end={sf(205)} source="2023 DIVES: NTSB MIR-25-36, TABLE 6 · DAMAGE: NTSB, USCG MBI REPORT" labels={['DEPTHS TO SCALE: 0–20 M']} lean={3} />
				<div style={{position: 'absolute', left: 220, top: 180, ...T(34, {}), fontWeight: 700}}>
					<Wd f={f} at={wf(201, 'twenty')} lightAt={wf(201, 'twenty-three')} tone={colors.amber} bold>2023: </Wd>
					<Wd f={f} at={wf(201, "titan's")} lightAt={wf(201, 'first')}>THE FIRST </Wd><Wd f={f} at={wf(201, 'four')} lightAt={wf(201, 'dives')}>FOUR DIVES </Wd>
					<Wd f={f} at={wf(201, 'deeper')} lightAt={wf(201, 'metres')} tone={colors.cyan}>NO DEEPER THAN 10 M</Wd>
				</div>
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
					<line x1={220} x2={1700} y1={300} y2={300} stroke={colors.sub} strokeWidth={2} />
					<text x={210} y={309} textAnchor="end" style={T(26, {fill: colors.ink})}>0 M</text>
					<line x1={220} x2={1700} y1={300 + 10 * 20} y2={300 + 10 * 20} stroke={colors.cyan} strokeWidth={1.5} strokeDasharray="8 8" opacity={lead(f, wf(201, 'ten'), 10)} />
					<text x={210} y={509} textAnchor="end" style={T(26, lit(f, wf(201, 'ten'), colors.cyan))} opacity={lead(f, wf(201, 'ten'), 10)}>10 M</text>
					{dives.map(([d, m, at], i) => {
						const k = interpolate(f, [at - 10, at + 10], [0, 1], clamp);
						return (
							<g key={d} opacity={Math.max(0.15, k)}>
								<rect x={320 + i * 170} y={300} width={60} height={m * 20 * k} fill={colors.cyan} />
								<text x={350 + i * 170} y={290} textAnchor="middle" style={T(28, {fill: colors.ink, fontWeight: 700})}>DIVE {d}</text>
							</g>
						);
					})}
				</svg>
				<Card x={1080} y={360} w={620} o={lead(f, wf(202, 'after'), 10)} accent={colors.red} style={{padding: '20px 26px'}}>
					<div style={{...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(202, 'some')} lightAt={wf(202, 'point')} tone={colors.amber}>AT SOME POINT </Wd><Wd f={f} at={wf(202, 'after')} lightAt={wf(202, 'eighty-two')} tone={colors.amber}>AFTER DIVE 82: </Wd>
						<Wd f={f} at={wf(202, 'hull')} tone={colors.red} bold>THE HULL, </Wd><Wd f={f} at={wf(202, 'damaged')} lightAt={wf(202, 'again')} tone={colors.red} bold>DAMAGED AGAIN</Wd>
						<br />
						<Wd f={f} at={wf(203, 'n')} lightAt={wf(203, 'calls')} tone={colors.cyan}>NTSB: </Wd>
						<Wd f={f} at={wf(203, 'unknown')} lightAt={wf(203, 'origin')} tone={colors.ink} bold>"OF UNKNOWN ORIGIN"</Wd>
						<br />
						<Wd f={f} at={wf(204, 'coast')} lightAt={wf(204, 'board')} tone={colors.cyan}>COAST GUARD BOARD: </Wd>
						<Wd f={f} at={wf(204, 'damage')} lightAt={wf(204, 'eighty')}>DIVE 80'S DAMAGE </Wd>
						<Wd f={f} at={wf(204, 'likely')} lightAt={wf(204, 'worse')} tone={colors.amber}>LIKELY MADE WORSE </Wd>
						<Wd f={f} at={wf(204, 'winter')} lightAt={wf(204, 'outdoors')} tone={colors.amber}>BY THE WINTER OUTDOORS · </Wd>
						<Wd f={f} at={wf(204, 'points')} lightAt={wf(204, 'towing')} tone={colors.amber}>AND THE TOWING</Wd>
					</div>
				</Card>
			</AbsoluteFill>
			{reports > 0 ? (
				<AbsoluteFill style={{opacity: reports}}>
					<div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 56, color: colors.ink}}>
						<Wd f={f} at={wf(205, 'did')} base={colors.ink}>Did every dive </Wd>
						<Wd f={f} at={wf(205, 'weaken')} tone={colors.amber}>weaken it?</Wd>
					</div>
					<div style={{position: 'absolute', left: 0, right: 0, top: 240, textAlign: 'center', ...T(32, {})}}>
						<Wd f={f} at={wf(206, 'investigators')} lightAt={wf(206, 'differ')} tone={colors.amber} bold>HERE THE INVESTIGATORS DIFFER</Wd>
					</div>
					<Card x={220} y={340} w={700} o={lead(f, wf(207, 'n'), 10)} accent={colors.cyan} style={{padding: '22px 28px', minHeight: 380}}>
						<Chip text="NTSB · U.S." tone={colors.cyan} size={30} />
						<div style={{marginTop: 18, ...T(32, {}), lineHeight: 1.5}}>
							<Wd f={f} at={wf(207, 'dates')} lightAt={wf(207, 'two')} tone={colors.cyan} bold>DATES TWO EVENTS:</Wd>
							<br />
							<Wd f={f} at={wf(207, 'dive')} lightAt={wf(207, 'eighty')}>— DIVE 80</Wd>
							<br />
							<Wd f={f} at={wf(207, 'something')} lightAt={wf(207, 'eighty-two')}>— SOMETHING AFTER DIVE 82</Wd>
						</div>
					</Card>
					<Card x={1000} y={340} w={700} o={lead(f, wf(208, "canada's"), 10)} accent={colors.amber} style={{padding: '22px 28px', minHeight: 380}}>
						<Chip text="TSB · CANADA" tone={colors.amber} size={30} />
						<div style={{marginTop: 10, ...T(26, {})}}><Wd f={f} at={wf(208, 'transportation')} lightAt={wf(208, 'board')}>TRANSPORTATION SAFETY BOARD</Wd></div>
						<div style={{marginTop: 18, ...T(32, {}), lineHeight: 1.5}}>
							<Wd f={f} at={wf(208, 'found')} lightAt={wf(208, 'cylinder')}>THE CYLINDER </Wd>
							<Wd f={f} at={wf(208, 'likely')} lightAt={wf(208, 'progressively')} tone={colors.amber} bold>LIKELY FAILED PROGRESSIVELY</Wd>
							<br />
							<Wd f={f} at={wf(208, 'damage')} lightAt={wf(208, 'accumulating')} tone={colors.amber}>DAMAGE ACCUMULATING </Wd>
							<Wd f={f} at={wf(208, 'each')} lightAt={wf(208, 'dive')} tone={colors.amber}>DURING EACH DIVE</Wd>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
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
	const {cx, cy, len, r} = HULL;
	return (
		<>
			{dive > 0 ? (
				<AbsoluteFill style={{opacity: dive}}>
					<div style={{position: 'absolute', left: 0, right: 0, top: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26}}>
						<DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(209, 'eighteenth')} monthWord={wf(209, 'june')} fromDay={18} size={52} />
						<div style={{...T(34, {}), fontWeight: 700}}>
							<Wd f={f} at={wf(209, 'first')} lightAt={wf(209, 'deep')} tone={colors.amber} bold>THE FIRST DEEP DIVE </Wd>
							<Wd f={f} at={wf(209, 'eleven')} lightAt={wf(209, 'months')} tone={colors.amber} bold>IN ELEVEN MONTHS</Wd>
						</div>
						<div style={{...T(72, {color: depth >= 3350 ? colors.ink : colors.sub, fontWeight: 700}), opacity: lead(f, wf(209, 'made'), 10)}}>
							{Math.round(depth).toLocaleString('en-US')} <span style={{fontSize: 36, color: colors.sub}}>M</span>
						</div>
						<div style={T(26, {color: colors.ink})}>DIVE 88 · DEPTH · TIMES: NTSB MIR-25-36</div>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(210) - 14} end={ef(210) + 20} hl={[{key: 'buckling', at: wf(210, 'buckling')}]} label="ANALYSIS" pushTo={wf(210, 'found')} />
			<Note o={vis(f, sf(210), ef(210) + 10)}>
				<Wd f={f} at={wf(210, 'n')} lightAt={wf(210, 'found')} tone={colors.cyan}>NTSB: </Wd>
				<Wd f={f} at={wf(210, 'existing')} lightAt={wf(210, 'delaminations')} tone={colors.amber}>THE EXISTING DELAMINATIONS </Wd>
				<Wd f={f} at={wf(210, 'later')} lightAt={wf(210, 'damage')} tone={colors.amber}>AND THE LATER DAMAGE </Wd>
				<Wd f={f} at={wf(210, 'likely')} lightAt={wf(210, 'led')}>LIKELY LED TO </Wd>
				<Wd f={f} at={wf(210, 'local')} lightAt={wf(210, 'failure')} tone={colors.red} bold>A LOCAL BUCKLING FAILURE</Wd>
			</Note>
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
					<div style={{position: 'absolute', left: 300, top: 720, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(211, 'delamination')} lightAt={wf(211, 'splits')} tone={colors.amber}>A DELAMINATION SPLITS </Wd>
						<Wd f={f} at={wf(211, 'one')} lightAt={wf(211, 'layer')}>ONE THICK LAYER </Wd>
						<Wd f={f} at={wf(211, 'into')} lightAt={wf(211, 'ones')}>INTO TWO THINNER ONES</Wd>
						<br />
						<Wd f={f} at={wf(212, 'local')} lightAt={wf(212, 'buckle')} tone={colors.red}>A LOCAL BUCKLE: </Wd>
						<Wd f={f} at={wf(212, 'one')} lightAt={wf(212, 'wall')}>ONE PART OF THE WALL </Wd>
						<Wd f={f} at={wf(212, 'changes')} lightAt={wf(212, 'shape')} tone={colors.red}>CHANGES SHAPE, </Wd>
						<Wd f={f} at={wf(212, 'gives')} lightAt={wf(212, 'way')} tone={colors.red} bold>GIVES WAY</Wd>
					</div>
					{local > 0 ? <div style={{position: 'absolute', left: 1100, top: 560, ...T(28, {color: colors.red}), opacity: local}}>A LOCAL CHANGE OF SHAPE</div> : null}
				</AbsoluteFill>
			) : null}
			{fwd > 0 ? (
				<AbsoluteFill style={{opacity: fwd}}>
					<Mount x={140} y={130} w={1000} h={760} start={sf(213) - 10} end={ef(213) + 24} source="WHERE THE GAUGE SAT · NTSB MIR-25-36" labels={['ILLUSTRATION']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<g transform="translate(180 210) scale(0.42)">
							<HullLines draw={1} />
							{/* the forward end (right in this drawing), lit as the narration reaches it */}
							<rect x={cx + len / 2 - 200} y={cy - r} width={200} height={2 * r} fill={colors.red} opacity={0.22 * lead(f, wf(213, 'forward'), 12)} />
							<g opacity={lead(f, wf(213, 'gauge'), 10)}>
								<rect x={cx + SG_POS[3][0] * len - 16} y={cy + SG_POS[3][1] * r - 10} width={32} height={20} fill={colors.amber} />
							</g>
						</g>
						<text x={180 + (cx + len / 2 - 100) * 0.42} y={210 + (cy + r + 70) * 0.42} textAnchor="middle" style={T(28, lit(f, wf(213, 'forward'), colors.red))}>FORWARD END</text>
					</svg>
					<div style={{position: 'absolute', left: 200, top: 600, width: 900, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(213, 'damage')} lightAt={wf(213, 'eighty')}>DIVE 80'S DAMAGE </Wd>
						<Wd f={f} at={wf(213, 'reached')} lightAt={wf(213, 'end')} tone={colors.red}>HAD REACHED THE FORWARD END </Wd><Wd f={f} at={wf(213, 'cylinder')} tone={colors.red}>OF THE CYLINDER · </Wd><Wd f={f} at={wf(213, 'where')}>THAT IS </Wd>
						<Wd f={f} at={wf(213, 'gauge')} lightAt={wf(213, 'change')} tone={colors.amber}>WHERE THE GAUGE THAT SHOWED THE CHANGE </Wd>
						<Wd f={f} at={wf(213, 'sat')} tone={colors.amber} bold>SAT</Wd>
					</div>
					<RealFootage f={f} start={sf(213) - 10} end={ef(213) + 24} src="footage/rov_debris.mp4" date="22 JUN 2023" what="ROV VIDEO · FORWARD DEBRIS FIELD" source="USCG MBI · DVIDS" push={0.03} box={{x: 1180, y: 130, w: 640, h: 360}} under />
					<RealFootage f={f} start={sf(213)} end={ef(213) + 24} src="photos/cf_debris.jpg" video={false} date="" what="RECOVERED HULL PIECES" source="USCG · DVIDS" push={0.04} box={{x: 1180, y: 560, w: 540, h: 360}} under />
				</AbsoluteFill>
			) : null}
		</>
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
	return (
		<>
			{myths > 0 ? (
				<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: myths}}>
					<div style={{fontFamily: sans, fontWeight: 700, fontSize: 60, color: colors.ink}}>
						<Wd f={f} at={wf(218, 'two')} lightAt={wf(218, 'things')} base={colors.ink} tone={colors.amber}>Two things </Wd>
						<Wd f={f} at={wf(218, 'often')} lightAt={wf(218, 'said')} base={colors.ink}>often said about Titan</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{/* each myth beside its page (forensic v2, idea 3): the board's own paragraph, highlighted on the words said */}
			<RecordPage set="roi" start={sf(219) - 14} end={ef(220) + 16} page={235} hl={[{key: 'mapping', at: wf(219, 'mapped')}, {key: 'turned', at: wf(219, 'turned')}]} label="THE CONTROLLER" title="4.34.9 · DIVE 81" pushTo={wf(219, 'thruster')} />
			<Note o={vis(f, sf(219) + 10, ef(220) + 6)} tone={colors.amber}>
				{f < sf(220) - 4 ? (
					<>
						<Wd f={f} at={wf(219, 'controller')} tone={colors.amber} bold>THE CONTROLLER · </Wd><Wd f={f} at={wf(219, 'dive')} lightAt={wf(219, 'eighty-one')} tone={colors.amber}>DIVE 81: </Wd>
						<Wd f={f} at={wf(219, 'thruster')} lightAt={wf(219, 'controls')}>THRUSTER CONTROLS </Wd>
						<Wd f={f} at={wf(219, 'mapped')} lightAt={wf(219, 'reverse')} tone={colors.amber} bold>MAPPED IN REVERSE · </Wd>
						<Wd f={f} at={wf(219, 'pilot')} lightAt={wf(219, 'turned')}>THE PILOT TURNED </Wd><Wd f={f} at={wf(219, 'controller', 1)} lightAt={wf(219, 'around')}>IT AROUND</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(220, 'none')} lightAt={wf(220, 'three')} tone={colors.cyan} bold>NONE OF THE THREE </Wd><Wd f={f} at={wf(220, 'reports')} tone={colors.cyan} bold>REPORTS </Wd>
						<Wd f={f} at={wf(220, 'names')} lightAt={wf(220, 'controller')}>NAMES THE CONTROLLER </Wd><Wd f={f} at={wf(220, 'cause')} tone={colors.ink} bold>AS A CAUSE</Wd>
					</>
				)}
			</Note>
			<RecordPage set="roi" start={sf(221) - 14} end={ef(222) + 20} page={280} hl={[{key: 'windowok', at: wf(221, 'unlikely')}]} label="THE WINDOW" title="5.5 · THE ACRYLIC WINDOW" pushTo={wf(221, 'criticised')} />
			<Note o={vis(f, sf(221) + 10, ef(222) + 10)} tone={colors.amber}>
				{f < sf(222) - 4 ? (
					<>
						<Wd f={f} at={wf(221, 'coast')} lightAt={wf(221, 'board')} tone={colors.amber}>THE COAST GUARD BOARD: </Wd>
						<Wd f={f} at={wf(221, 'untested')} lightAt={wf(221, 'uncertified')} tone={colors.amber} bold>UNTESTED, UNCERTIFIED · </Wd>
						<Wd f={f} at={wf(221, 'found')} lightAt={wf(221, 'unlikely')} tone={colors.cyan} bold>UNLIKELY </Wd><Wd f={f} at={wf(221, 'window', 1)} lightAt={wf(221, 'caused')} tone={colors.cyan}>THE WINDOW CAUSED </Wd><Wd f={f} at={wf(221, 'implosion')} tone={colors.cyan}>THE IMPLOSION</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(222, 'all')} lightAt={wf(222, 'three')} tone={colors.ink} bold>ALL THREE </Wd><Wd f={f} at={wf(222, 'reports')} tone={colors.ink} bold>REPORTS: </Wd>
						<Wd f={f} at={wf(222, 'place')} lightAt={wf(222, 'hull')} tone={colors.red} bold>THE FAILURE WAS IN THE HULL</Wd>
						<span style={{...T(26, {color: colors.ink})}}> · NTSB · USCG · TSB</span>
					</>
				)}
			</Note>
			<ActTitle n="V" title="The Verdict" start={ef(222) + 24} end={sf(223) + 6} />
			<RecordPage set="mir" start={sf(223) - 6} end={ef(224) + 20} page={74} hl={[{key: 'probable', at: wf(223, 'inadequate')}, {key: 'flawedanalysis', at: wf(224, 'flawed')}]} label="PROBABLE CAUSE" pushTo={wf(223, 'cause')} />
			<Note o={vis(f, sf(223), ef(224) + 10)}>
				{f < sf(224) - 4 ? (
					<>
						<Wd f={f} at={wf(223, 'probable')} lightAt={wf(223, 'cause')} tone={colors.cyan}>PROBABLE CAUSE: </Wd>
						<Wd f={f} at={wf(223, 'inadequate')} lightAt={wf(223, 'process')} tone={colors.red} bold>AN INADEQUATE ENGINEERING PROCESS </Wd>
						<Wd f={f} at={wf(223, 'failed')} lightAt={wf(223, 'establish')}>THAT FAILED TO ESTABLISH </Wd>
						<Wd f={f} at={wf(223, 'actual')} lightAt={wf(223, 'durability')} tone={colors.amber}>THE ACTUAL STRENGTH AND DURABILITY </Wd><Wd f={f} at={wf(223, 'titan')} lightAt={wf(223, 'vessel')} tone={colors.amber}>OF TITAN'S PRESSURE VESSEL</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(224, 'contributing')} tone={colors.amber}>CONTRIBUTING: </Wd>
						<Wd f={f} at={wf(224, 'guidance')} lightAt={wf(224, 'rules')}>THE GUIDANCE AND THE RULES </Wd><Wd f={f} at={wf(224, 'make')} lightAt={wf(224, 'meet')}>THAT DID NOT MAKE OCEANGATE MEET </Wd><Wd f={f} at={wf(224, "industry's")} lightAt={wf(224, 'standards')}>THE INDUSTRY'S STANDARDS · </Wd>
						<Wd f={f} at={wf(224, "company's")} lightAt={wf(224, 'flawed')} tone={colors.red}>THE COMPANY'S FLAWED </Wd><Wd f={f} at={wf(224, 'analysis')} tone={colors.red}>ANALYSIS </Wd>
						<Wd f={f} at={wf(224, 'own')} lightAt={wf(224, 'data')}>OF ITS OWN MONITORING DATA</Wd>
					</>
				)}
			</Note>
			<RecordPage set="roi" start={sf(225) - 14} end={ef(225) + 16} hl={[{key: 'preventable', at: wf(225, 'preventable')}]} label="EXHIBIT" pushTo={wf(225, 'marine')} />
			<Note o={vis(f, sf(225), ef(225) + 8)}>
				<Wd f={f} at={wf(225, 'coast')} lightAt={wf(225, 'board')} tone={colors.cyan}>THE COAST GUARD'S MARINE BOARD: </Wd>
				<Wd f={f} at={wf(225, 'preventable')} lightAt={wf(225, 'tragedy')} tone={colors.red} bold>"A PREVENTABLE TRAGEDY"</Wd>
			</Note>
			<Card x={300} y={260} w={1320} o={vis(f, sf(226) - 10, ef(226) + 20)} accent={colors.amber} style={{padding: '30px 40px'}}>
				<Chip text="TSB · CANADA" tone={colors.amber} size={30} />
				<div style={{marginTop: 12, ...T(28, {})}}><Wd f={f} at={wf(226, "canada's")}>CANADA'S </Wd><Wd f={f} at={wf(226, 'transportation')} lightAt={wf(226, 'safety')}>TRANSPORTATION SAFETY </Wd><Wd f={f} at={wf(226, 'board')}>BOARD </Wd><Wd f={f} at={wf(226, 'found')}>FOUND:</Wd></div>
				<div style={{marginTop: 20, ...T(36, {}), lineHeight: 1.5}}>
					<Wd f={f} at={wf(226, 'titan')} lightAt={wf(226, 'received')}>TITAN RECEIVED </Wd>
					<Wd f={f} at={wf(226, 'no')} lightAt={wf(226, 'oversight')} tone={colors.red} bold>NO OVERSIGHT </Wd>
					<Wd f={f} at={wf(226, 'from')} lightAt={wf(226, 'canada')}>FROM TRANSPORT CANADA</Wd>
					<br />
					<Wd f={f} at={wf(226, 'though')} lightAt={wf(226, 'sailed')}>THOUGH IT SAILED FROM </Wd>
					<Wd f={f} at={wf(226, 'saint')} lightAt={wf(226, "john's")} tone={colors.amber}>ST. JOHN'S </Wd>
					<Wd f={f} at={wf(226, 'canadian')} lightAt={wf(226, 'ships')} tone={colors.amber}>WITH CANADIAN SHIPS</Wd>
				</div>
			</Card>
			<RecordPage set="roi" start={sf(227) - 14} end={ef(231) + 20} hl={[{key: 'survived', at: wf(229, 'survived')}, {key: 'doj', at: wf(230, 'crime')}, {key: 'willnot', at: wf(230, 'will')}]} label="EXHIBIT" title="6.5 · THE BOARD'S REFERRAL SECTION" pushTo={wf(229, 'had')} />
			<Note o={vis(f, sf(227), ef(231) + 10)}>
				{f < sf(229) - 4 ? (
					<>
						<Wd f={f} at={wf(227, 'coast')} lightAt={wf(227, 'board')} tone={colors.cyan}>THE COAST GUARD BOARD </Wd><Wd f={f} at={wf(227, 'also')} lightAt={wf(227, 'wrote')} tone={colors.cyan}>ALSO WROTE, </Wd>
						<Wd f={f} at={wf(227, 'about')} lightAt={wf(227, 'mr')}>ON MR. RUSH: </Wd>
						<Wd f={f} at={wf(228, 'both')} lightAt={wf(228, 'executive')}>CHIEF EXECUTIVE </Wd>
						<Wd f={f} at={wf(228, 'pilot')}>AND PILOT</Wd>
					</>
				) : f < sf(230) - 4 ? (
					<>
						<Wd f={f} at={wf(229, 'had')} lightAt={wf(229, 'survived')}>HAD HE SURVIVED: </Wd>
						<Wd f={f} at={wf(229, 'incident')} lightAt={wf(229, 'board')}>THE BOARD </Wd><Wd f={f} at={wf(229, 'would')} lightAt={wf(229, 'recommended')}>WOULD HAVE RECOMMENDED </Wd><Wd f={f} at={wf(229, 'commandant')}>THAT THE COMMANDANT </Wd>
						<Wd f={f} at={wf(229, 'refer')} tone={colors.amber}>REFER THE MATTER </Wd><Wd f={f} at={wf(229, 'department')} lightAt={wf(229, 'justice')} tone={colors.amber}>TO THE DEPARTMENT OF JUSTICE, </Wd>
						<Wd f={f} at={wf(229, 'consideration')} lightAt={wf(229, 'whether')}>TO CONSIDER WHETHER </Wd><Wd f={f} at={wf(229, 'pursue')} lightAt={wf(229, 'separate')}>TO PURSUE A SEPARATE </Wd><Wd f={f} at={wf(229, 'criminal')} lightAt={wf(229, 'investigation')}>CRIMINAL INVESTIGATION</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(230, 'whether')} lightAt={wf(230, 'committed')}>WHETHER ANY CRIME WAS COMMITTED, </Wd><Wd f={f} at={wf(230, 'board')} lightAt={wf(230, 'wrote')} tone={colors.cyan}>THE BOARD WROTE, </Wd>
						<Wd f={f} at={wf(230, 'justice')} lightAt={wf(230, 'decide')} tone={colors.amber}>FOR THE DEPARTMENT OF JUSTICE TO DECIDE · </Wd>
						<Wd f={f} at={wf(230, 'will')} lightAt={wf(230, 'happen')} tone={colors.ink} bold>THAT WILL NOT HAPPEN, </Wd><Wd f={f} at={wf(230, 'because')}>BECAUSE </Wd>
						<Wd f={f} at={wf(231, 'rush')} lightAt={wf(231, 'died')}>MR. RUSH DIED</Wd>
					</>
				)}
			</Note>
			{day > 0 ? (
				<AbsoluteFill style={{opacity: day}}>
					<Mount x={140} y={130} w={1640} h={800} start={sf(232) - 10} end={ef(236) + 20} source="18 JUN 2023 · USCG MBI REPORT · NTSB MIR-25-36" labels={[]} lean={3} />
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
					<div style={{position: 'absolute', left: 220, top: 480, width: 1480, ...T(32, {}), lineHeight: 1.55}}>
						<Wd f={f} at={wf(233, 'board')} lightAt={wf(233, 'found')} tone={colors.cyan}>THE BOARD: </Wd>
						<Wd f={f} at={wf(233, "company's")} lightAt={wf(233, 'plan')}>THE COMPANY'S OWN COMMUNICATIONS PLAN </Wd>
						<Wd f={f} at={wf(233, 'delayed')} lightAt={wf(233, 'first')} tone={colors.amber}>DELAYED THE FIRST </Wd><Wd f={f} at={wf(233, 'call')} lightAt={wf(233, 'rescuers')} tone={colors.amber}>CALL </Wd>
						<Wd f={f} at={wf(233, 'more')} lightAt={wf(233, 'hours')} tone={colors.amber} bold>BY MORE THAN 7 HOURS · </Wd>
						<Wd f={f} at={wf(233, 'no')} lightAt={wf(233, 'deep-water')} tone={colors.red}>NO DEEP-WATER </Wd><Wd f={f} at={wf(233, 'rescue')} lightAt={wf(233, 'vehicle')} tone={colors.red}>RESCUE VEHICLE </Wd><Wd f={f} at={wf(233, 'standing')} lightAt={wf(233, 'by')} tone={colors.red}>STANDING BY</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{/* the findings on their pages (forensic v2, idea 2): the board's summary, then the NTSB's conclusion */}
			<RecordPage set="roi" start={sf(234) - 14} end={ef(234) + 16} hl={[{key: 'immediate', at: wf(234, 'immediate')}]} label="EXHIBIT" pushTo={wf(234, 'implosion')} />
			<Note o={vis(f, sf(234) + 10, ef(234) + 6)} tone={colors.ink}>
				<Wd f={f} at={wf(234, 'implosion')} lightAt={wf(234, 'caused')}>THE IMPLOSION CAUSED </Wd>
				<Wd f={f} at={wf(234, 'immediate')} lightAt={wf(234, 'loss')} tone={colors.ink} bold>THE IMMEDIATE LOSS </Wd><Wd f={f} at={wf(234, 'all')} lightAt={wf(234, 'lives')} tone={colors.ink} bold>OF ALL LIVES · </Wd>
				<Wd f={f} at={wf(234, 'before')} lightAt={wf(234, 'call')} tone={colors.amber}>BEFORE ANY DISTRESS CALL</Wd>
			</Note>
			<RecordPage set="mir" start={sf(235) - 14} end={ef(236) + 20} page={66} hl={[{key: 'couldnotsave', at: wf(235, 'not')}, {key: 'sooner', at: wf(236, 'likely')}]} label="EXHIBIT" title="2.5 · SEARCH AND RESCUE" pushTo={wf(235, 'search')} />
			<Note o={vis(f, sf(235) + 10, ef(236) + 10)} tone={colors.cyan}>
				{f < sf(236) - 4 ? (
					<>
						<Wd f={f} at={wf(235, 'n')} lightAt={wf(235, 'found')} tone={colors.cyan}>THE NTSB: </Wd>
						<Wd f={f} at={wf(235, 'search')} lightAt={wf(235, 'rescue')}>SEARCH AND RESCUE </Wd>
						<Wd f={f} at={wf(235, 'not')} lightAt={wf(235, 'saved')} tone={colors.ink} bold>COULD NOT HAVE SAVED THEM</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(236, 'assets')} lightAt={wf(236, 'ready')}>WITH ASSETS READY, </Wd>
						<Wd f={f} at={wf(236, 'titan')} tone={colors.amber}>TITAN </Wd><Wd f={f} at={wf(236, 'likely')} lightAt={wf(236, 'found', 1)} tone={colors.amber}>WOULD LIKELY HAVE BEEN FOUND </Wd><Wd f={f} at={wf(236, 'sooner')} tone={colors.amber} bold>SOONER</Wd>
					</>
				)}
			</Note>
			{company > 0 ? (
				<AbsoluteFill style={{opacity: company}}>
					<Card x={300} y={230} w={1320} o={1} accent={colors.ink} style={{padding: '30px 40px'}}>
						<div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
							<Wd f={f} at={wf(237, 'oceangate')} lightAt={wf(237, 'suspended')} style={T(32, {})} tone={colors.ink} bold>OCEANGATE SUSPENDED </Wd><Wd f={f} at={wf(237, 'operations')} style={T(32, {})} tone={colors.ink} bold>OPERATIONS · </Wd>
							<Wd f={f} at={wf(237, 'july')} lightAt={wf(237, 'twenty-three')} style={T(32, {})} tone={colors.amber} bold>JUL 2023</Wd>
						</div>
						<div style={{marginTop: 26, ...T(28, {color: colors.amber})}}>
							<Wd f={f} at={wf(238, 'when')} lightAt={wf(238, 'report')} tone={colors.amber}>AUG 2025, WHEN THE COAST GUARD REPORT </Wd><Wd f={f} at={wf(238, 'came')} lightAt={wf(238, 'out')} tone={colors.amber}>CAME OUT · </Wd><Wd f={f} at={wf(238, 'company')} lightAt={wf(238, 'spokesperson')} tone={colors.amber}>A COMPANY SPOKESPERSON </Wd><Wd f={f} at={wf(238, 'said')} tone={colors.amber}>SAID:</Wd>
						</div>
						<div style={{marginTop: 18, ...T(34, {}), lineHeight: 1.55}}>
							<Wd f={f} at={wf(238, 'wound')} lightAt={wf(238, 'down')}>— THE COMPANY HAD BEEN WOUND DOWN</Wd>
							<br />
							<Wd f={f} at={wf(238, 'fully')} lightAt={wf(238, 'investigation')}>— FULLY COOPERATING WITH THE INVESTIGATION</Wd>
							<br />
							<Wd f={f} at={wf(238, 'offered')} lightAt={wf(238, 'families')}>— CONDOLENCES TO THE FAMILIES</Wd>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			{recs > 0 ? (
				<AbsoluteFill style={{opacity: recs}}>
					{/* the question lands centre-screen on its word, then rises to head the four answers as they are said */}
					<div style={{position: 'absolute', left: 0, right: 0, top: interpolate(f, [sf(240) - 6, sf(240) + 24], [470, 140], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)}), textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: interpolate(f, [sf(240) - 6, sf(240) + 24], [84, 56], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), color: colors.ink, opacity: lead(f, wf(239, 'what'), 8)}}>
						What now?
					</div>
					<div style={{position: 'absolute', left: 220, top: 240, ...T(30, {})}}>
						<Wd f={f} at={wf(240, 'n')} lightAt={wf(240, 'made')} tone={colors.cyan}>THE NTSB: </Wd>
						<Wd f={f} at={wf(240, 'four')} lightAt={wf(240, 'recommendations')} tone={colors.cyan} bold>4 RECOMMENDATIONS </Wd>
						<Wd f={f} at={wf(240, 'u')} lightAt={wf(240, 'guard')}>TO THE U.S. COAST GUARD</Wd>
					</div>
					{recList.map(([id, text, at], i) => (
						<div key={id} style={{position: 'absolute', left: 220, top: 320 + i * 110, width: 1480, display: 'flex', alignItems: 'center', gap: 24}}>
							{/* four numbered slots land on "four", each fills on its own number (no still stretch before the list) */}
							<span style={{...T(56, {color: f >= at ? colors.cyan : colors.sub, fontWeight: 700}), width: 60, display: 'inline-block', opacity: Math.max(0.45 * lead(f, wf(240, 'four') + i * 6, 8), lead(f, at, 10)), transform: `scale(${bump(f, fps, at + LAND).toFixed(4)})`}}>{i + 1}</span>
							<span style={{...T(28, {color: colors.ink}), width: 200, opacity: lead(f, at, 10)}}>{id}</span>
							<span style={{...T(32, {color: colors.ink, fontWeight: 700}), flex: 1, opacity: lead(f, at, 10)}}>{text.map(([t, ta], j) => <Wd key={j} f={f} at={ta} tone={colors.ink} bold>{t}</Wd>)}</span>
							<span style={{opacity: lead(f, wf(246, 'remain'), 8)}}>
								<Chip text={f >= wf(246, 'open') ? 'OPEN · ACCEPTABLE RESPONSE' : 'OPEN'} tone={colors.amber} size={26} />
							</span>
						</div>
					))}
					<div style={{position: 'absolute', left: 220, top: 780, width: 1480, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(241, 'propose')} lightAt={wf(241, 'organization')}>(1) VIA THE INTERNATIONAL MARITIME ORGANIZATION · </Wd>
						<Wd f={f} at={wf(245, 'agreed')} lightAt={wf(245, 'update')} tone={colors.cyan}>THE COAST GUARD AGREED TO UPDATE </Wd><Wd f={f} at={wf(245, 'guidance')} tone={colors.cyan}>ITS GUIDANCE, </Wd>
						<Wd f={f} at={wf(245, 'partly')} lightAt={wf(245, 'rest')}>PARTLY AGREED WITH THE REST</Wd>
						<br />
						<Wd f={f} at={wf(246, 'october')} lightAt={wf(246, 'twenty-six')} tone={colors.amber} bold>AS OF OCT 2026: </Wd>
						<Wd f={f} at={wf(246, 'all')} lightAt={wf(246, 'four')} tone={colors.amber} bold>ALL FOUR </Wd><Wd f={f} at={wf(246, 'recommendations')} lightAt={wf(246, 'open')} tone={colors.amber} bold>OPEN · NTSB LETTER, 22 OCT 2026</Wd>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 5 · Sign-off (s246–s252), then the outro ────────────────────────────────────────────────────────────────────

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
					<Mount x={160} y={150} w={1600} h={620} start={sf(247) - 10} end={ef(248) + 30} source="DIVE 80 · OCEANGATE DATA · NTSB MATERIALS LAB 24-012, FIG. 26" labels={['TRACED FROM THE NTSB FIGURE']} lean={3}>
						<TimeTrace f={f} w={1600} h={562} tEnd={tEnd} ae={lead(f, wf(247, 'recorded'), 10)} jump={lead(f, wf(247, 'changed'), 8)} showDepth={0} />
					</Mount>
					<div style={{position: 'absolute', left: 160, top: 80, display: 'flex', gap: 16, alignItems: 'center'}}>
						<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(247, 'fifteenth')} monthWord={wf(247, 'july')} yearWord={wf(247, 'twenty-two')} fromYear={2022} size={32} />
						<Wd f={f} at={wf(247, "titan's")} lightAt={wf(247, 'hull')} tone={colors.amber} style={T(30, {})} bold>TITAN'S HULL </Wd><Wd f={f} at={wf(247, 'changed')} tone={colors.amber} style={T(30, {})} bold>CHANGED · </Wd>
						<Wd f={f} at={wf(247, 'sensors')} lightAt={wf(247, 'recorded')} tone={colors.cyan} style={T(30, {})}>ITS OWN SENSORS RECORDED IT</Wd>
					</div>
					<div style={{position: 'absolute', left: 160, top: 820, display: 'flex', gap: 16, alignItems: 'center', ...T(32, {})}}>
						<Wd f={f} at={wf(248, 'eleven')} lightAt={wf(248, 'later')} tone={colors.amber} bold>ELEVEN MONTHS LATER · </Wd>
						<Wd f={f} at={wf(248, 'first')} lightAt={wf(248, 'since')}>ITS FIRST DEEP DIVE SINCE · </Wd>
						<Wd f={f} at={wf(248, 'five')} lightAt={wf(248, 'aboard')} tone={colors.ink} bold>FIVE PEOPLE ABOARD</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{namesO > 0 ? (
				<AbsoluteFill style={{background: colors.void, alignItems: 'center', justifyContent: 'center', opacity: namesO}}>
					<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26}}>
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

