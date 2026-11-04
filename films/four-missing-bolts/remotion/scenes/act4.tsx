import React from 'react';
import {interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {ease, envelope, shudder, tween} from '../../../../lib/remotion/motion';
import {Camera} from '../engine3d';
import {KeyLine, litStyle, on} from '../beats';
import {ActTitle, media, mono, Mount, Photo, useFilmFrame} from '../kit';
import {anchor, BoltId, CLEAR_TRUE_IN, defaultState, LIFT_EXAG, PlugState, PlugSvg} from '../PlugModel';
import {clearance, flight, plugLoads} from '../telemetry';
import {ef, sf, wef, wf} from '../timing';
import {SceneDef} from './types';
import {BracketLock, bump, flash, LAND, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';

// ACT IV · THE CASCADE (rows 49–55). Every number from remotion/telemetry.ts (claims C10, C13, C16–C22, C76).
// The clearance figures are never swapped: 0.5 in is the DESIGN clearance (C13); 0.079 / 0.315 / 0.630 in are
// MEASURED lower-edge gaps on the exemplar right plug (C21). Vertical motion is exaggerated: NOT TO SCALE.

const none: Record<BoltId, number> = {upperFwd: 0, upperAft: 0, lowerFwd: 0, lowerAft: 0};
const camOf = (f: number, keys: {f: number; yaw: number; pitch: number; dist: number; cx?: number; ty?: number}[]): Camera => {
	const fr = keys.map((k) => k.f);
	const g = (sel: (k: (typeof keys)[number]) => number) => interpolate(f, fr, keys.map(sel), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	return {target: [0, g((k) => k.ty ?? 29), -2], yaw: g((k) => k.yaw), pitch: g((k) => k.pitch), dist: g((k) => k.dist), focal: 1250, cx: g((k) => k.cx ?? 820), cy: 500};
};

const Stage: React.FC<{start: number; end: number; source?: string; labels?: string[]; children: React.ReactNode; w?: number}> = ({start, end, source = 'ILLUSTRATION · AFTER NTSB AIR-25-04', labels = ['ILLUSTRATION', 'NOT TO SCALE'], children, w = 1728}) => (
	<Mount x={96} y={84} w={w} h={900} source={source} start={start} end={end} lean={1.5} labels={labels}>
		<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>{children}</div>
	</Mount>
);

const Panel: React.FC<{start: number; end: number; title: string; value: string; tone: 'cyan' | 'amber' | 'red' | 'ink'; sub?: string; y: number; big?: number; scale?: number; titleAt?: number}> = ({start, end, title, value, tone, sub, y, big = 56, scale = 1, titleAt}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 14, 14);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: 1250, top: y, width: 560, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '16px 22px 18px', fontFamily: mono}}>
			<div style={{fontSize: 26, letterSpacing: 1.2, lineHeight: 1.25, ...(titleAt === undefined ? {color: colors.sub} : litStyle(f, titleAt, colors.ink))}}>{title}</div>
			<div style={{fontSize: big, fontWeight: 700, color: tone === 'ink' ? colors.ink : colors[tone], marginTop: 6, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', transform: `scale(${scale})`, transformOrigin: '0% 50%'}}>{value}</div>
			{sub ? <div style={{fontSize: 26, letterSpacing: 1, lineHeight: 1.3, color: colors.ink, marginTop: 6, whiteSpace: 'pre-line'}}>{sub}</div> : null}
		</div>
	);
};

// ---------- on the ground it would not move (C18)
const Ground: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(131) - 10;
	const G = {
		plug: wf(131, 'plug'),
		closed: wf(131, 'closed'),
		bolts: wf(131, 'bolts'),
		gone: wf(131, 'gone'),
		ground: wf(132, 'ground'),
		hard: wf(132, 'hard'),
		lift: wf(132, 'lift'),
		sister: wf(133, 'sister'),
		side: wf(133, 'side'),
		airplane: wf(133, 'airplane'),
		taken: wf(133, 'taken'),
		ground2: wf(133, 'ground'),
		n120: wf(133, 'one-hundred-and-twenty-pound'),
		upward: wf(133, 'upward'),
		pull: wf(133, 'pull'),
		not: wf(133, 'not'),
		move: wf(133, 'move'),
		two: wf(134, 'two'),
		people: wf(134, 'people'),
	};
	const end = sf(135) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.35, pitch: 0.12, dist: 150},
		{f: end, yaw: 0.6, pitch: 0.14, dist: 140},
	]);
	const gauge = rollTo(f, [{frame: G.n120 - 30, value: 0}, {frame: G.n120 + LAND, value: plugLoads.liftNoMove.value}]);
	const strain = (f > G.pull && f < G.two ? shudder(f, fps, G.pull, 0.25, 9, 2.5) : 0) + (f > G.lift && f < G.sister ? shudder(f, fps, G.lift, 0.15, 9, 3) : 0);
	const moved = tween(f, G.people, G.people + 30, 0, 1.6, ease.arrive);
	const state: PlugState = {...defaultState, bolts: none, emptyHoles: Math.max(0.4, flash(f, G.bolts, 0.4)), stopGlow: 0.25 + 0.5 * Math.max(flash(f, G.plug, 0), flash(f, wf(132, 'plug'), 0)), lift: Math.abs(strain) + moved};
	return (
		<Stage start={a} end={end} source="RECONSTRUCTION · NTSB TEST ON THE RIGHT PLUG OF N704AL, BOLTS REMOVED, ON THE GROUND" labels={['RECONSTRUCTION']}>
			<PlugSvg cam={cam} state={state} />
			<Panel start={G.n120 - 30} end={end} title="UPWARD PULL · FORCE GAUGE" titleAt={G.upward} value={`${Math.round(gauge)} LB`} sub={f < G.not ? 'TO THE GAUGE LIMIT' : 'TO THE GAUGE LIMIT · NO MOVEMENT'} tone={f >= G.not ? 'red' : 'cyan'} y={150} scale={bump(f, fps, G.move + LAND)} />
			<Panel start={G.two - 10} end={end} title="TWO PEOPLE · ESTIMATED" value={`> ${plugLoads.liftMoved.value} LB`} sub="THE PLUG MOVED UP" tone="amber" y={400} scale={bump(f, fps, G.people + LAND)} />
			<KeyLine f={f} fps={fps} start={sf(131) - 6} end={sf(133) - 6} x={150} y={846} parts={[
				{t: 'THE PLUG', at: G.plug},
				{t: 'CLOSED', at: G.closed, tone: colors.cyan},
				{t: 'IN THE FACTORY', at: wf(131, 'factory')},
				{t: '· BOLTS GONE', at: G.gone, tone: colors.red},
				{t: '· ON THE GROUND', at: G.ground},
				{t: 'HARD TO LIFT', at: G.hard, tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(133) - 6} end={end} x={150} y={846} parts={[
				{t: 'SISTER PLUG', at: G.sister, tone: colors.cyan},
				{t: '· OTHER SIDE', at: G.side},
				{t: '· SAME AIRPLANE', at: G.airplane},
				{t: '· BOLTS OUT', at: G.taken, tone: colors.red},
				{t: '· ON THE GROUND', at: G.ground2},
			]} />
		</Stage>
	);
};

// ---------- in flight it weighs less (C19, C20); the g trace's shape is illustrative, its low point is the record's
const Flight: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(135) - 10;
	const L = {
		flight: wf(135, 'flight'),
		not: wf(135, 'not'),
		still: wf(135, 'still'),
		vibrates: wf(136, 'vibrates'),
		flexes: wf(137, 'flexes'),
		brief: wf(138, 'brief'),
		load: wf(138, 'load'),
		drops: wf(138, 'drops'),
		below: wf(138, 'below'),
		weight: wf(138, 'weight'),
		lowest: wf(139, 'lowest'),
		analysis: wf(139, 'analysis'),
		effective: wf(139, 'effective'),
		weight2: wf(139, 'weight'),
		force: wf(139, 'force'),
		down: wf(139, 'down'),
		fell: wf(139, 'fell'),
		s63: wf(139, 'sixty-three'),
		pounds: wf(139, 'pounds'),
		s25: wf(139, 'twenty-five'),
	};
	const end = sf(140) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.6, pitch: 0.14, dist: 140},
		{f: end, yaw: 0.75, pitch: 0.16, dist: 135},
	]);
	const vib = f >= L.vibrates ? Math.sin((f / 60) * 2 * Math.PI * 7) * 0.12 * tween(f, L.vibrates, L.vibrates + 20, 0, 1) : 0;
	const flex = f >= L.flexes ? 0.02 * Math.sin(((f - L.flexes) / 60) * 2 * Math.PI * 1.3) * tween(f, L.flexes, L.flexes + 16, 0, 1) : 0;
	const state: PlugState = {...defaultState, bolts: none, emptyHoles: 0.4, stopGlow: 0.25, lift: 0.1 + vib, swing: flex};
	// trace: seeded sum of sines around 1 g; ONE driver for the line and the readout. It runs to just before the dip on
	// "drops"; the dip itself is drawn between "fell" and "twenty-five", where the readout falls 63 → 25 lb with it.
	const W = 760;
	const H = 220;
	const x0 = 1000;
	const y0 = 640;
	const dipOf = (u: number) => Math.exp(-Math.pow((u - 0.72) / 0.03, 2));
	const gAt = (u: number) => {
		const base = 1 + 0.06 * Math.sin(u * 23) + 0.04 * Math.sin(u * 57 + 1) + 0.03 * Math.sin(u * 131 + 2);
		const d = dipOf(u);
		return base * (1 - d) + 0.4 * d;
	};
	const reveal = interpolate(f, [L.brief - 10, L.drops, L.fell, L.s25 + LAND, end], [0, 0.64, 0.64, 0.72, 0.86], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const lowest = reveal >= 0.72 ? 0.4 : 1 - 0.6 * dipOf(reveal);
	const shownLb = Math.max(plugLoads.effectiveWeightMin.value, plugLoads.weight.value * lowest);
	const atLow = shownLb <= plugLoads.effectiveWeightMin.value + 0.5;
	const falling = shownLb < plugLoads.weight.value - 0.5;
	const pts: string[] = [];
	for (let i = 0; i <= 300 * reveal; i++) {
		const u = i / 300;
		pts.push(`${(x0 + u * W).toFixed(1)},${(y0 + H - ((gAt(u) - 0.2) / 1.0) * H).toFixed(1)}`);
	}
	const yG = (g: number) => y0 + H - ((g - 0.2) / 1.0) * H;
	const lowX = x0 + 0.72 * W;
	const panelO = on(f, L.brief, 12);
	// "the force holding it down": an amber arrow down through the plug, drawn on the words
	const c0 = anchor(state, cam, 'centre');
	const arrow = lead(f, L.down, 16);
	return (
		<Stage start={a} end={end} labels={['ILLUSTRATION', 'ILLUSTRATIVE TRACE SHAPE']}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					arrow > 0 ? (
						<g opacity={on(f, L.force, 10)}>
							<line x1={c0.x} x2={c0.x} y1={c0.y - 80} y2={c0.y - 80 + 170 * arrow} stroke={colors.amber} strokeWidth={5} />
							<polygon points={`${c0.x - 14},${c0.y - 80 + 170 * arrow - 4} ${c0.x + 14},${c0.y - 80 + 170 * arrow - 4} ${c0.x},${c0.y - 80 + 170 * arrow + 20}`} fill={colors.amber} />
						</g>
					) : null
				}
			/>
			<Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" titleAt={L.effective} value={`${atLow ? 'LOWEST ' : ''}${Math.round(shownLb)} LB`} sub={atLow ? 'AT 0.40–0.45 G · NTSB · WAS 63 LB AT 1 G' : falling ? 'FALLING WITH THE LOAD · 63 LB AT 1 G' : 'AT 1 G: 63 LB · NTSB'} tone={falling ? 'amber' : 'cyan'} y={150} scale={Math.max(bump(f, fps, L.s63 + LAND), bump(f, fps, L.pounds + LAND), bump(f, fps, L.s25 + LAND), bump(f, fps, L.weight + LAND), bump(f, fps, L.weight2 + LAND))} />
			<div style={{position: 'absolute', left: x0 - 20, top: y0 - 60, width: W + 60, height: H + 110, background: 'rgba(10,13,18,0.7)', border: `1px solid ${colors.border}`, opacity: panelO}} />
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: panelO}}>
				<text x={x0} y={y0 - 30} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2} fill={f >= L.load ? colors.ink : colors.sub}>
					VERTICAL LOAD ON THE PLUG · G
				</text>
				{[1, 0.45, 0.4].map((g) => (
					<line key={g} x1={x0} x2={x0 + W} y1={yG(g)} y2={yG(g)} stroke={g === 1 ? colors.border : colors.amber} strokeDasharray={g === 1 ? undefined : '5 6'} strokeWidth={1} opacity={g === 1 ? 1 : 0.7} />
				))}
				<text x={x0 + W - 4} y={yG(1) - 10} textAnchor="end" fill={f >= L.below ? colors.ink : colors.sub} fontFamily="JetBrains Mono" fontSize={26}>
					1 G · ITS OWN WEIGHT
				</text>
				<text x={x0 + W - 4} y={yG(0.4) + 34} textAnchor="end" fill={colors.amber} fontFamily="JetBrains Mono" fontSize={26}>
					0.40–0.45 G
				</text>
				<polyline points={pts.join(' ')} fill="none" stroke={reveal >= 0.72 ? colors.amber : colors.cyan} strokeWidth={2.5} />
				{/* "At the lowest point the analysis found": the place the dip will reach, marked on "lowest" */}
				<g opacity={on(f, L.lowest, 10)}>
					<circle cx={lowX} cy={yG(0.4)} r={18 * (1 + 0.2 * flash(f, L.analysis, 0))} fill="none" stroke={colors.amber} strokeWidth={2} strokeDasharray={f >= wf(139, 'found') ? undefined : '4 4'} />
					<text x={lowX - 26} y={yG(0.4) + 34} textAnchor="end" fill={colors.amber} fontFamily="JetBrains Mono" fontSize={26} opacity={on(f, L.analysis, 8)}>
						LOWEST · NTSB ANALYSIS
					</text>
				</g>
			</svg>
			<KeyLine f={f} fps={fps} start={sf(135) - 6} end={sf(138) + 20} x={150} y={846} parts={[
				{t: 'IN FLIGHT', at: L.flight, tone: colors.cyan},
				{t: 'IT DOES NOT', at: L.not},
				{t: 'SIT STILL', at: L.still},
				{t: '· IT VIBRATES', at: L.vibrates, tone: colors.amber},
				{t: '· IT FLEXES', at: L.flexes, tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={L.force - 10} end={end} x={150} y={846} parts={[
				{t: 'THE FORCE', at: L.force, tone: colors.amber},
				{t: 'HOLDING IT DOWN', at: L.down, tone: colors.amber},
				{t: '· FELL', at: L.fell},
				{t: 'FROM 63 LB', at: L.s63},
				{t: 'TO ABOUT 25', at: L.s25, tone: colors.red},
			]} />
		</Stage>
	);
};

// ---------- SIGNATURE 3: 154 flights (C16, C22); each low-load moment lets it rise a little
const Creep: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(140) - 10;
	// the count climbs under "rise a little" / "fractions of an inch", passes 100 on "one hundred" and lands on 154 on
	// "fifty-four"; the last of the rise runs on "walked itself upward"
	const c0 = wf(140, 'moment');
	const k100 = wf(142, 'hundred') + LAND;
	const k154 = wf(142, 'fifty-four') + LAND;
	const walk = wf(142, 'walked');
	const up = wef(142, 'upward');
	const end = sf(143) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.75, pitch: 0.16, dist: 135},
		{f: up, yaw: 1.0, pitch: 0.14, dist: 118, ty: 40},
		{f: Math.max(up + 1, end), yaw: 1.02, pitch: 0.14, dist: 116, ty: 40},
	]);
	const cyc = Math.round(rollTo(f, [{frame: c0, value: 0}, {frame: k100, value: 100}, {frame: k154, value: flight.cycles.value}]));
	const top = CLEAR_TRUE_IN * LIFT_EXAG * 0.94;
	const steps = Math.floor(cyc / 8) / Math.floor(flight.cycles.value / 8);
	const lift = top * (0.85 * steps + 0.15 * tween(f, walk, up, 0, 1, ease.camera));
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.9, lift};
	const pin = anchor(state, cam, 'stopTopFwd');
	const pad = anchor(state, cam, 'padTopFwd');
	return (
		<Stage start={a} end={end}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					<g>
						<line x1={pad.x + 30} x2={pad.x + 150} y1={pad.y} y2={pad.y} stroke={colors.red} strokeWidth={2} strokeDasharray="6 5" />
						<line x1={pin.x + 30} x2={pin.x + 150} y1={pin.y} y2={pin.y} stroke={colors.amber} strokeWidth={2} />
					</g>
				}
			/>
			<Panel start={a + 10} end={end} title="FLIGHT CYCLES SINCE DELIVERY" titleAt={wf(142, 'flights')} value={`${cyc}`} sub="NTSB: 154 CYCLES · 510 HOURS" tone={f >= k154 ? 'amber' : 'ink'} y={150} big={Math.round(64 * bump(f, 60, k154))} />
			<Panel start={c0} end={end} title="RISE TOWARD THE CLEARANCE THRESHOLD" titleAt={wf(140, 'rise')} value={`${Math.round((lift / (CLEAR_TRUE_IN * LIFT_EXAG)) * 100)}%`} sub={'ILLUSTRATIVE VALUES\nTHRESHOLD: STOP PINS CLEAR THE PADS (DESIGN)'} tone={lift > top * 0.8 ? 'amber' : 'cyan'} y={420} />
			<KeyLine f={f} fps={fps} start={sf(140) - 6} end={end} x={150} y={846} parts={[
				{t: 'EACH LOW-LOAD MOMENT', at: wf(140, 'moment')},
				{t: '· A LITTLE RISE', at: wf(140, 'little'), tone: colors.amber},
				{t: '· FRACTIONS', at: wf(141, 'fractions'), tone: colors.amber},
				{t: 'OF AN INCH', at: wf(141, 'inch'), tone: colors.amber},
				{t: '· WALKED UPWARD', at: walk, tone: colors.red},
			]} />
		</Stage>
	);
};

// ---------- the record of the climb (C17)
const Seal: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(143) - 10;
	const end = sf(144) + 6;
	const S = {record: wf(143, 'record'), climb: wf(143, 'climb'), parallel: wf(143, 'parallel'), lines: wf(143, 'lines'), dust: wf(143, 'dust'), dirt: wf(143, 'dirt'), petroleum: wf(143, 'petroleum'), seal: wf(143, 'seal'), marking: wf(143, 'marking'), steps: wf(143, 'steps')};
	// one line a step, from "parallel" to "steps"
	const n = Math.round(rollTo(f, [{frame: S.parallel - 10, value: 0}, {frame: S.steps + LAND, value: 9}], true));
	return (
		<Mount x={260} y={150} w={1400} h={700} source="AFTER NTSB AIR-25-04 · LINES NEAR THE UPPER SEAL" start={a} end={end} labels={['ILLUSTRATION', 'NOT TO SCALE']}>
			<svg width={1400} height={642}>
				<rect x={0} y={0} width={1400} height={330} fill="#1b2433" />
				<rect x={0} y={330} width={1400} height={50} fill={f >= S.seal ? '#344257' : '#2b3647'} opacity={0.9 + 0.1 * bump(f, fps, S.steps + LAND)} />
				<text x={30} y={60} fontFamily="JetBrains Mono" fontSize={30} letterSpacing={1.2} fill={colors.ink} opacity={on(f, S.record, 10)}>
					A RECORD OF THE CLIMB
				</text>
				<text x={30} y={300} fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
					FRAME
				</text>
				<text x={30} y={364} fill={f >= S.seal ? colors.amber : colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1}>
					SEAL · PLUG EDGE
				</text>
				{Array.from({length: n}, (_, i) => (
					<line key={i} x1={120} x2={1280} y1={400 + i * 22} y2={400 + i * 22} stroke="#b08a4a" strokeWidth={6} opacity={0.75 + 0.025 * i} />
				))}
			</svg>
			<KeyLine f={f} fps={fps} start={S.climb - 10} end={end} x={120} y={110} card={false} parts={[
				{t: 'PARALLEL LINES', at: S.lines, tone: colors.amber},
				{t: '· DUST', at: S.dust},
				{t: '· DIRT', at: S.dirt},
				{t: '· PETROLEUM JELLY', at: S.petroleum},
				{t: '· ALONG THE SEAL', at: S.seal, br: true},
				{t: '· MARKING ITS STEPS', at: S.marking, tone: colors.amber},
			]} />
		</Mount>
	);
};

// ---------- too small to see (C21): the NTSB's own photographs of the exemplar plug
const Gap: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(144) - 10;
	const end = sf(146) + 6;
	const vals = [clearance.gapFullyDown, clearance.gapMiddle, clearance.gapAtInstability];
	const ons = [wf(144, 'outside'), wf(144, 'change'), wf(144, 'edge')];
	return (
		<>
			<Photo src={media('img/fig14_exemplar_right_plug_gap.jpg')} iw={1374} ih={526} start={a} end={end} source="NTSB AIR-25-04 · FIG. 14 · EXEMPLAR RIGHT PLUG, BOLTS REMOVED" tag="FIG. 14" from={{x: 0, y: 0, w: 1374, h: 526}} to={{x: 30, y: 10, w: 1320, h: 506}} box={{x: 150, y: 110, w: 1620, h: 660}} />
			<div style={{position: 'absolute', left: 150, top: 800, width: 1620, display: 'flex', justifyContent: 'space-between', fontFamily: mono}}>
				{vals.map((v, i) => (
					<div key={v.label} style={{width: 500, textAlign: 'center', opacity: on(f, ons[i], 12)}}>
						<div style={{fontSize: 40, fontWeight: 700, color: i === 2 ? colors.amber : colors.ink, display: 'inline-block', transform: `scale(${bump(f, fps, ons[i] + LAND).toFixed(4)})`}}>{v.value.toFixed(3)} IN</div>
						<div style={{fontSize: 26, letterSpacing: 1.6, color: colors.sub, marginTop: 6}}>{v.label}</div>
					</div>
				))}
			</div>
			<KeyLine f={f} fps={fps} start={wf(144, 'lower') - 10} end={sf(145) - 4} x={150} y={964} parts={[
				{t: 'CHANGE AT THE LOWER EDGE', at: wf(144, 'lower')},
				{t: '· ABOUT 0.55 IN', at: wf(144, 'half'), tone: colors.amber},
				{t: '· ABOUT HALF AN INCH', at: wf(144, 'inch'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(145) - 4} end={end} x={150} y={964} parts={[
				{t: 'TOO SMALL', at: wf(145, 'small'), tone: colors.amber},
				{t: '· NTSB', at: wf(145, 'n')},
				{t: 'FOUND:', at: wf(145, 'found')},
				{t: 'NOT READILY DETECTABLE', at: wf(145, 'catch'), tone: colors.amber},
				{t: 'ON A WALK-AROUND', at: wf(145, 'walk-around')},
			]} />
		</>
	);
};

// ---------- 5 January: the separation, from the fracture evidence (C16, C76)
const Separation: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(146) - 10;
	const P = {
		fifth: wf(146, 'fifth'),
		january: wf(146, 'january'),
		climbing: wf(146, 'climbing'),
		portland: wf(146, 'portland'),
		plug: wf(146, 'plug'),
		top: wf(146, 'top'),
		pins: wf(147, 'pins'),
		rode: wf(147, 'rode'),
		pads: wf(147, 'pads'),
		upper: wf(148, 'upper'),
		struck: wf(148, 'struck'),
		rollers: wf(148, 'rollers'),
		split: wf(148, 'split'),
		hinges: wf(149, 'hinges'),
		twisted: wf(149, 'twisted'),
		plug2: wf(150, 'plug'),
		left: wf(150, 'left'),
		up: wf(150, 'up'),
		out: wf(150, 'out'),
		back: wf(150, 'back'),
	};
	const split = P.split - 10;
	const twist = P.twisted - 10;
	const go = P.up;
	const end = ef(150) + 150;
	const cam = camOf(f, [
		{f: a, yaw: 1.0, pitch: 0.14, dist: 78, ty: 50},
		{f: split + 30, yaw: 0.92, pitch: 0.16, dist: 70, ty: 52},
		{f: twist, yaw: 0.85, pitch: 0.18, dist: 90, ty: 20},
		{f: go, yaw: 0.85, pitch: 0.18, dist: 140, ty: 32},
		{f: end, yaw: 0.8, pitch: 0.2, dist: 170, ty: 34},
	]);
	// the plug stays solid while it rises and swings out, and fades only once it has cleared the frame
	const T = CLEAR_TRUE_IN * LIFT_EXAG;
	const lift = interpolate(f, [a, P.top + LAND, P.rode, P.pads + 20, go, go + 40, go + 80], [T * 0.94, T, T, T * 1.15, T * 1.2, 30, 95], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const swing = interpolate(f, [twist, go, P.out + 10, P.back + 10], [0, 0.18, 1.3, 1.5], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const away = tween(f, P.back + 20, P.back + 42, 1, 0);
	const jolt = shudder(f, fps, split, 0.6, 11, 6) + shudder(f, fps, twist, 0.4, 8, 6);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 1, guideGlow: f >= P.struck ? 1 : 0.3, lift: lift + jolt, swing, plugAlpha: away, context: 1};
	const g1 = anchor(state, cam, 'upperFwd');
	const g2 = anchor(state, cam, 'upperAft');
	const hit = tween(f, P.struck, P.struck + 10, 0, 1) * (1 - tween(f, split + 40, split + 90, 0, 1));
	const pin = anchor(state, cam, 'stopTopFwd');
	return (
		<Stage start={a} end={end} source="RECONSTRUCTION · SEPARATION SEQUENCE FROM THE NTSB'S FRACTURE EVIDENCE" labels={['RECONSTRUCTION', 'NOT TO SCALE']}>
			{away > 0.01 ? (
				<PlugSvg
					cam={cam}
					state={state}
					extra={
						<>
							<g opacity={hit}>
								<circle cx={g1.x} cy={g1.y} r={46} fill="rgba(239,68,68,0.2)" stroke={colors.red} strokeWidth={3} />
								<circle cx={g2.x} cy={g2.y} r={46} fill="rgba(239,68,68,0.2)" stroke={colors.red} strokeWidth={3} />
							</g>
							<BracketLock f={f} fps={fps} word={P.pins} x={pin.x - 30} y={pin.y - 30} w={60} h={60} tone="red" until={P.upper} />
						</>
					}
				/>
			) : (
				<PlugSvg cam={cam} state={{...state, plugAlpha: 0}} />
			)}
			<div style={{position: 'absolute', left: 1250, top: 150, width: 560, fontFamily: mono}}>
				<div style={{background: colors.card, border: `1px solid ${colors.border}`, padding: '14px 20px', opacity: on(f, P.plug, 10)}}>
					<StatusFlip f={f} fps={fps} word={P.pads} from="TOP OF THE STOPS" to="PINS OFF THE PADS" toneFrom="amber" toneTo="red" size={32} />
				</div>
				<KeyLine f={f} fps={fps} start={P.upper - 10} end={end} x={0} y={110} w={560} parts={[
					{t: 'UPPER GUIDE FITTINGS', at: P.upper},
					{t: 'STRUCK', at: P.struck, tone: colors.red},
					{t: 'THE ROLLERS', at: P.rollers, tone: colors.red},
					{t: '· SPLIT', at: P.split, tone: colors.red},
				]} />
				<KeyLine f={f} fps={fps} start={P.hinges - 10} end={end} x={0} y={270} w={560} parts={[
					{t: 'LOWER HINGES', at: P.hinges},
					{t: '· TWISTED', at: P.twisted, tone: colors.red},
				]} />
				<KeyLine f={f} fps={fps} start={P.plug2 - 10} end={end} x={0} y={370} w={560} size={34} parts={[
					{t: 'THE PLUG LEFT:', at: P.left, tone: colors.red},
					{t: 'UP', at: P.up, tone: colors.red},
					{t: '· OUT', at: P.out, tone: colors.red},
					{t: '· AFT', at: P.back, tone: colors.red},
				]} />
			</div>
			<KeyLine f={f} fps={fps} start={sf(146) - 6} end={end} x={150} y={846} parts={[
				{t: '05', at: P.fifth, tone: colors.red},
				{t: 'JAN 2024', at: P.january, tone: colors.red},
				{t: '· CLIMBING OUT OF', at: P.climbing},
				{t: 'PORTLAND', at: P.portland},
				{t: '· 17:12:33 PST · ABOUT 14,830 FT', at: P.top},
			]} />
		</Stage>
	);
};

const Recovered: React.FC = () => {
	const a = ef(150) + 120;
	const end = sf(151) - 100;
	return <Photo src={media('img/fig10_left_plug_recovered.jpg')} iw={1431} ih={1116} start={a} end={end} source="NTSB AIR-25-04 · FIG. 10 · THE LEFT PLUG, RECOVERED" tag="FIG. 10" from={{x: 0, y: 0, w: 1431, h: 1116}} to={{x: 100, y: 60, w: 1200, h: 940}} />;
};

const ActV: React.FC = () => <ActTitle n="V" title="The Verdict" start={sf(151) - 80} end={sf(151) + 30} sub="NTSB AIR-25-04" />;

export const act4: SceneDef[] = [
	{id: 'ground', from: sf(131) - 20, to: sf(135) + 16, C: Ground, cues: [{frame: wf(133, 'pull'), sfx: 'quartz_tick', gainDb: -14}, {frame: wf(134, 'people'), sfx: 'relay_click', gainDb: -12}]},
	{id: 'flight', from: sf(135) - 20, to: sf(140) + 16, C: Flight, cues: [{frame: wf(136, 'vibrates'), sfx: 'transformer_hum', gainDb: -24}]},
	{id: 'creep', from: sf(140) - 20, to: sf(143) + 16, C: Creep, cues: Array.from({length: 19}, (_, i) => ({frame: wf(140, 'moment') + Math.round(((wf(142, 'fifty-four') + 2 - wf(140, 'moment')) / 18) * i), sfx: 'quartz_tick' as const, gainDb: -18}))},
	{id: 'seal', from: sf(143) - 20, to: sf(144) + 16, C: Seal, cues: [{frame: wf(143, 'parallel'), sfx: 'pen_scratch', gainDb: -18}]},
	{id: 'gap', from: sf(144) - 20, to: sf(146) + 16, C: Gap},
	{id: 'separation', from: sf(146) - 20, to: ef(150) + 160, C: Separation, cues: [{frame: wf(147, 'pads'), sfx: 'relay_click', gainDb: -10}, {frame: wf(148, 'struck'), sfx: 'metal_snap_sub', gainDb: -6}, {frame: wf(149, 'twisted') - 10, sfx: 'metal_snap_sub', gainDb: -10}, {frame: wf(150, 'up'), sfx: 'pressure_drop', gainDb: -6}]},
	{id: 'recovered', from: ef(150) + 110, to: sf(151) - 90, C: Recovered},
	{id: 'act5title', from: sf(151) - 90, to: sf(151) + 40, C: ActV, cues: [{frame: sf(151) - 80, sfx: 'whoosh', gainDb: -20}]},
];

