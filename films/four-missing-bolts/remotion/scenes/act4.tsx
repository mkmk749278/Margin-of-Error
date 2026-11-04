import React from 'react';
import {interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {ease, envelope, shudder, tween} from '../../../../lib/remotion/motion';
import {Camera} from '../engine3d';
import {ActTitle, Caption, media, mono, Mount, Photo, useFilmFrame} from '../kit';
import {anchor, BoltId, CLEAR_TRUE_IN, defaultState, LIFT_EXAG, PlugState, PlugSvg} from '../PlugModel';
import {clearance, flight, plugLoads} from '../telemetry';
import {ef, sf, wef, wf} from '../timing';
import {SceneDef} from './types';
import {bump, LAND, rollTo} from '../../../../lib/remotion/Kinetic';

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

const Panel: React.FC<{start: number; end: number; title: string; value: string; tone: 'cyan' | 'amber' | 'red' | 'ink'; sub?: string; y: number; big?: number; scale?: number}> = ({start, end, title, value, tone, sub, y, big = 56, scale = 1}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 14, 14);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: 1250, top: y, width: 560, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '16px 22px 18px', fontFamily: mono}}>
			<div style={{fontSize: 26, letterSpacing: 1.2, lineHeight: 1.25, color: colors.sub}}>{title}</div>
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
	const pull = sf(133);
	const two = sf(134);
	const end = sf(135) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.35, pitch: 0.12, dist: 150},
		{f: end, yaw: 0.6, pitch: 0.14, dist: 140},
	]);
	const gauge = tween(f, pull + 20, ef(133) - 30, 0, plugLoads.liftNoMove.value, ease.camera);
	const strain = f > pull + 20 && f < two ? shudder(f, fps, pull + 60, 0.25, 9, 2.5) : 0;
	const moved = tween(f, two + 10, two + 40, 0, 1.6, ease.arrive);
	const state: PlugState = {...defaultState, bolts: none, emptyHoles: f < pull ? 1 : 0.4, stopGlow: 0.25, lift: Math.abs(strain) + moved};
	return (
		<Stage start={a} end={end} source="RECONSTRUCTION · NTSB TEST ON THE RIGHT PLUG OF N704AL, BOLTS REMOVED, ON THE GROUND" labels={['RECONSTRUCTION']}>
			<PlugSvg cam={cam} state={state} />
			<Panel start={pull} end={end} title="UPWARD PULL · FORCE GAUGE" value={`${Math.round(gauge)} LB`} sub={f < two ? 'TO THE GAUGE LIMIT · NO MOVEMENT' : 'NO MOVEMENT'} tone="cyan" y={150} />
			<Panel start={two} end={end} title="TWO PEOPLE · ESTIMATED" value={`> ${plugLoads.liftMoved.value} LB`} sub="THE PLUG MOVED UP" tone="amber" y={400} />
			<Caption text="SISTER PLUG · SAME AIRPLANE" start={sf(133)} end={end} x={150} y={846} />
		</Stage>
	);
};

// ---------- in flight it weighs less (C19, C20); the g trace's shape is illustrative, its low point is the record's
const Flight: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(135) - 10;
	const dip = wf(139, 'twenty-five') - 60;
	const end = sf(140) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.6, pitch: 0.14, dist: 140},
		{f: end, yaw: 0.75, pitch: 0.16, dist: 135},
	]);
	const vib = f >= sf(136) ? Math.sin((f / 60) * 2 * Math.PI * 7) * 0.12 * tween(f, sf(136), sf(136) + 20, 0, 1) : 0;
	const state: PlugState = {...defaultState, bolts: none, emptyHoles: 0.4, stopGlow: 0.25, lift: 0.1 + vib};
	// trace: seeded sum of sines around 1 g; the dip to 0.40 g is placed on the narration's "twenty-five"
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
	// the line starts down on "drops", reaches its lowest point on "lowest" (round 3: one driver with the readout)
	const reveal = interpolate(f, [sf(138) - 10, wf(138, 'drops'), wf(139, 'lowest'), dip + 40], [0, 0.66, 0.72, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	// the readout is driven by the trace: the record's 63 lb at 1 g, scaled by the dip the line has drawn so far, and
	// holding its lowest value (the record's low point, 0.40 g ≈ 25 lb). The wiggle is illustrative and is left out.
	const lowest = reveal >= 0.72 ? 0.4 : 1 - 0.6 * dipOf(reveal); // the dip deepens monotonically up to its low point
	const shownLb = Math.max(plugLoads.effectiveWeightMin.value, plugLoads.weight.value * lowest);
	const atLow = shownLb <= plugLoads.effectiveWeightMin.value + 0.5;
	const falling = shownLb < plugLoads.weight.value - 0.5;
	const said = wf(139, 'twenty-five');
	const pulse = 1 + 0.08 * Math.max(0, 1 - Math.abs(f - said) / 24);
	const pts: string[] = [];
	for (let i = 0; i <= 300 * reveal; i++) {
		const u = i / 300;
		pts.push(`${(x0 + u * W).toFixed(1)},${(y0 + H - ((gAt(u) - 0.2) / 1.0) * H).toFixed(1)}`);
	}
	const lowSeen = reveal >= 0.72;
	const yG = (g: number) => y0 + H - ((g - 0.2) / 1.0) * H;
	return (
		<Stage start={a} end={end} labels={['ILLUSTRATION', 'ILLUSTRATIVE TRACE SHAPE']}>
			<PlugSvg cam={cam} state={state} />
			<Panel start={a + 10} end={end} title="EFFECTIVE WEIGHT OF THE PLUG" value={`${atLow ? 'LOWEST ' : ''}${Math.round(shownLb)} LB`} sub={atLow ? 'AT 0.40–0.45 G · NTSB · WAS 63 LB AT 1 G' : falling ? 'FALLING WITH THE LOAD · 63 LB AT 1 G' : 'AT 1 G: 63 LB · NTSB'} tone={falling ? 'amber' : 'cyan'} y={150} scale={pulse} />
			<div style={{position: 'absolute', left: x0 - 20, top: y0 - 60, width: W + 60, height: H + 110, background: 'rgba(10,13,18,0.7)', border: `1px solid ${colors.border}`, opacity: tween(f, sf(138) - 20, sf(138), 0, 1)}} />
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: tween(f, sf(138) - 20, sf(138), 0, 1)}}>
				<text x={x0} y={y0 - 30} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
					VERTICAL LOAD ON THE PLUG · G
				</text>
				{[1, 0.45, 0.4].map((g) => (
					<line key={g} x1={x0} x2={x0 + W} y1={yG(g)} y2={yG(g)} stroke={g === 1 ? colors.border : colors.amber} strokeDasharray={g === 1 ? undefined : '5 6'} strokeWidth={1} opacity={g === 1 ? 1 : 0.7} />
				))}
				<text x={x0 + W - 4} y={yG(1) - 10} textAnchor="end" fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26}>
					1 G
				</text>
				<text x={x0 + W - 4} y={yG(0.4) + 34} textAnchor="end" fill={colors.amber} fontFamily="JetBrains Mono" fontSize={26}>
					0.40–0.45 G
				</text>
				<polyline points={pts.join(' ')} fill="none" stroke={lowSeen ? colors.amber : colors.cyan} strokeWidth={2.5} />
			</svg>
			<Caption text="IT VIBRATES · IT FLEXES" start={sf(136)} end={sf(138) + 20} x={150} y={846} />
		</Stage>
	);
};

// ---------- SIGNATURE 3: 154 flights (C16, C22); each low-load moment lets it rise a little
const Creep: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(140) - 10;
	// word-level (PLAYBOOK §10.6): the count climbs under "rise a little" / "fractions of an inch", passes 100 on
	// "one hundred" and lands on 154 on "fifty-four"; the last of the rise runs on "walked itself upward"
	const c0 = sf(140) + 10;
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
	// staircase: lift grows in steps with the count (one per ~8 cycles shown) to 85%, then the walk to just short
	// of the design clearance on "walked itself upward"
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
			<Panel start={a + 10} end={end} title="FLIGHT CYCLES SINCE DELIVERY" value={`${cyc}`} sub="NTSB: 154 CYCLES · 510 HOURS" tone={f >= k154 ? 'amber' : 'ink'} y={150} big={Math.round(64 * bump(f, 60, k154))} />
			<Panel start={c0} end={end} title="RISE TOWARD THE CLEARANCE THRESHOLD" value={`${Math.round((lift / (CLEAR_TRUE_IN * LIFT_EXAG)) * 100)}%`} sub={'ILLUSTRATIVE VALUES\nTHRESHOLD: STOP PINS CLEAR THE PADS (DESIGN)'} tone={lift > top * 0.8 ? 'amber' : 'cyan'} y={420} />
			<Caption text="FRACTIONS OF AN INCH · EACH FLIGHT" start={sf(141)} end={end} x={150} y={846} tone="amber" />
		</Stage>
	);
};

// ---------- the record of the climb (C17)
const Seal: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(143) - 10;
	const end = sf(144) + 6;
	const n = Math.round(tween(f, a + 30, ef(143), 0, 9));
	return (
		<Mount x={260} y={150} w={1400} h={700} source="AFTER NTSB AIR-25-04 · LINES NEAR THE UPPER SEAL" start={a} end={end} labels={['ILLUSTRATION', 'NOT TO SCALE']}>
			<svg width={1400} height={666}>
				<rect x={0} y={0} width={1400} height={330} fill="#1b2433" />
				<rect x={0} y={330} width={1400} height={50} fill="#2b3647" />
				<text x={30} y={300} fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
					FRAME
				</text>
				<text x={30} y={364} fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1}>
					SEAL · PLUG EDGE
				</text>
				{Array.from({length: n}, (_, i) => (
					<line key={i} x1={120} x2={1280} y1={400 + i * 22} y2={400 + i * 22} stroke="#b08a4a" strokeWidth={6} opacity={0.75 + 0.025 * i} />
				))}
				<text x={1280} y={400 + Math.max(0, n - 1) * 22 + 48} fill={colors.amber} fontFamily="JetBrains Mono" fontSize={28} textAnchor="end" opacity={n > 2 ? 1 : 0}>
					DUST · DIRT · PETROLEUM JELLY
				</text>
			</svg>
		</Mount>
	);
};

// ---------- too small to see (C21): the NTSB's own photographs of the exemplar plug
const Gap: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(144) - 10;
	const end = sf(146) + 6;
	const vals = [clearance.gapFullyDown, clearance.gapMiddle, clearance.gapAtInstability];
	return (
		<>
			<Photo src={media('img/fig14_exemplar_right_plug_gap.jpg')} iw={1374} ih={526} start={a} end={end} source="NTSB AIR-25-04 · FIG. 14 · EXEMPLAR RIGHT PLUG, BOLTS REMOVED" tag="FIG. 14" from={{x: 0, y: 0, w: 1374, h: 526}} to={{x: 30, y: 10, w: 1320, h: 506}} box={{x: 150, y: 110, w: 1620, h: 660}} />
			<div style={{position: 'absolute', left: 150, top: 800, width: 1620, display: 'flex', justifyContent: 'space-between', fontFamily: mono}}>
				{vals.map((v, i) => (
					<div key={v.label} style={{width: 500, textAlign: 'center', opacity: tween(f, a + 30 + i * 24, a + 44 + i * 24, 0, 1)}}>
						<div style={{fontSize: 40, fontWeight: 700, color: i === 2 ? colors.amber : colors.ink}}>{v.value.toFixed(3)} IN</div>
						<div style={{fontSize: 26, letterSpacing: 1.6, color: colors.sub, marginTop: 6}}>{v.label}</div>
					</div>
				))}
			</div>
			<Caption text="CHANGE FROM FULLY DOWN: ABOUT 0.55 IN" start={a + 110} end={sf(145)} tone="amber" y={970} />
			<Caption text="NOT READILY DETECTABLE ON A WALK-AROUND · NTSB" start={sf(145)} end={end} tone="amber" y={970} />
		</>
	);
};

// ---------- 5 January: the separation, from the fracture evidence (C16, C76)
const Separation: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(146) - 10;
	const off = wf(147, 'pads');
	const split = wf(148, 'split') - 10;
	const twist = wf(149, 'twisted') - 10;
	const go = wf(150, 'up');
	const end = ef(150) + 150;
	const cam = camOf(f, [
		{f: a, yaw: 1.0, pitch: 0.14, dist: 78, ty: 50},
		{f: split + 30, yaw: 0.92, pitch: 0.16, dist: 70, ty: 52},
		{f: twist, yaw: 0.85, pitch: 0.18, dist: 90, ty: 20},
		{f: go, yaw: 0.85, pitch: 0.18, dist: 140, ty: 32},
		{f: end, yaw: 0.8, pitch: 0.2, dist: 170, ty: 34},
	]);
	// round 3: the plug stays solid while it rises and swings out, and fades only once it has cleared the frame
	const lift = interpolate(f, [a, sf(147), off + 20, go, go + 40, go + 80], [CLEAR_TRUE_IN * LIFT_EXAG * 0.94, CLEAR_TRUE_IN * LIFT_EXAG * 1.0, CLEAR_TRUE_IN * LIFT_EXAG * 1.15, CLEAR_TRUE_IN * LIFT_EXAG * 1.2, 30, 95], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const swing = interpolate(f, [twist, go, go + 50, go + 80], [0, 0.18, 1.3, 1.5], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const away = tween(f, go + 70, go + 92, 1, 0);
	const jolt = shudder(f, fps, split, 0.6, 11, 6) + shudder(f, fps, twist, 0.4, 8, 6);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 1, guideGlow: f >= split ? 1 : 0.3, lift: lift + jolt, swing, plugAlpha: away, context: 1};
	const g1 = anchor(state, cam, 'upperFwd');
	const g2 = anchor(state, cam, 'upperAft');
	const hit = tween(f, split, split + 10, 0, 1) * (1 - tween(f, split + 40, split + 90, 0, 1));
	return (
		<Stage start={a} end={end} source="RECONSTRUCTION · SEPARATION SEQUENCE FROM THE NTSB'S FRACTURE EVIDENCE" labels={['RECONSTRUCTION', 'NOT TO SCALE']}>
			{away > 0.01 ? (
				<PlugSvg
					cam={cam}
					state={state}
					extra={
						<g opacity={hit}>
							<circle cx={g1.x} cy={g1.y} r={46} fill="rgba(239,68,68,0.2)" stroke={colors.red} strokeWidth={3} />
							<circle cx={g2.x} cy={g2.y} r={46} fill="rgba(239,68,68,0.2)" stroke={colors.red} strokeWidth={3} />
						</g>
					}
				/>
			) : (
				<PlugSvg cam={cam} state={{...state, plugAlpha: 0}} />
			)}
			<Panel start={a + 6} end={end} title="05 JAN 2024 · CLIMBING OUT OF PORTLAND" value={f >= off ? 'PINS OFF THE PADS' : 'TOP OF THE STOPS'} tone={f >= off ? 'red' : 'amber'} y={150} big={34} />
			<Panel start={split} end={end} title="UPPER GUIDE FITTINGS" value="SPLIT BY THE ROLLERS" tone="red" y={330} big={32} />
			<Panel start={twist} end={end} title="LOWER HINGE FITTINGS" value="TWISTED" tone="red" y={470} big={32} />
			<Panel start={go} end={end} title="THE PLUG" value="UP · OUT · AFT" tone="red" y={610} big={34} />
			<Caption text="17:12:33 PST · ABOUT 14,830 FT" start={a + 20} end={end} x={150} y={846} tone="red" />
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
	{id: 'ground', from: sf(131) - 20, to: sf(135) + 16, C: Ground, cues: [{frame: sf(133) + 20, sfx: 'quartz_tick', gainDb: -14}, {frame: sf(134) + 10, sfx: 'relay_click', gainDb: -12}]},
	{id: 'flight', from: sf(135) - 20, to: sf(140) + 16, C: Flight, cues: [{frame: sf(136), sfx: 'transformer_hum', gainDb: -24}]},
	{id: 'creep', from: sf(140) - 20, to: sf(143) + 16, C: Creep, cues: Array.from({length: 19}, (_, i) => ({frame: sf(140) + 10 + Math.round(((wf(142, 'fifty-four') + 2 - sf(140) - 10) / 18) * i), sfx: 'quartz_tick' as const, gainDb: -18}))},
	{id: 'seal', from: sf(143) - 20, to: sf(144) + 16, C: Seal, cues: [{frame: sf(143) + 20, sfx: 'pen_scratch', gainDb: -18}]},
	{id: 'gap', from: sf(144) - 20, to: sf(146) + 16, C: Gap},
	{id: 'separation', from: sf(146) - 20, to: ef(150) + 160, C: Separation, cues: [{frame: wf(147, 'pads'), sfx: 'relay_click', gainDb: -10}, {frame: wf(148, 'split') - 10, sfx: 'metal_snap_sub', gainDb: -6}, {frame: wf(149, 'twisted') - 10, sfx: 'metal_snap_sub', gainDb: -10}, {frame: wf(150, 'up'), sfx: 'pressure_drop', gainDb: -6}]},
	{id: 'recovered', from: ef(150) + 110, to: sf(151) - 90, C: Recovered},
	{id: 'act5title', from: sf(151) - 90, to: sf(151) + 40, C: ActV, cues: [{frame: sf(151) - 80, sfx: 'whoosh', gainDb: -20}]},
];

