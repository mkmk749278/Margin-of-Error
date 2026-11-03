import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {Exhibit} from '../../../../lib/remotion/Exhibit';
import {ease, envelope, settle, shudder, tween} from '../../../../lib/remotion/motion';
import phrases from '../data/phrases.json';
import {Camera, projectPoint} from '../engine3d';
import {ActTitle, Caption, Fade, media, mono, Mount, Photo, sans, TypeOn, useFilmFrame} from '../kit';
import {anchor, BOLT_IDS, BoltId, CLEAR_TRUE_IN, defaultState, LIFT_EXAG, PLUG, PlugState, PlugSvg, STOP_Y} from '../PlugModel';
import {ef, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT II · THE MECHANISM (rows 10–19). The plug, redrawn from NTSB AIR-25-04 Figs 3–6 and the Structures Factual
// (ILLUSTRATION; lift NOT TO SCALE). Viewers' commonest question about this case: "pressure holds a plug in, so how
// could it come out?" (research/benchmark_youtube.md). The answer is drawn before it is said in full: pressure loads
// go outward into 12 stops (C87); the stops cannot stop "up" (C13, C88); the four bolts are the only thing that does (C12).

const allBolts = (v: number): Record<BoltId, number> => ({upperFwd: v, upperAft: v, lowerFwd: v, lowerAft: v});

const camAt = (f: number, keys: {f: number; yaw: number; pitch: number; dist: number; ty?: number; tx?: number; cx?: number}[]): Camera => {
	const fr = keys.map((k) => k.f);
	const g = (sel: (k: (typeof keys)[number]) => number) => interpolate(f, fr, keys.map(sel), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	return {target: [g((k) => k.tx ?? 0), g((k) => k.ty ?? 29), -2], yaw: g((k) => k.yaw), pitch: g((k) => k.pitch), dist: g((k) => k.dist), focal: 1250, cx: g((k) => k.cx ?? 960), cy: 520};
};

const Stage: React.FC<{start: number; end: number; source?: string; labels?: string[]; children: React.ReactNode}> = ({start, end, source = 'ILLUSTRATION · AFTER NTSB AIR-25-04 FIGS. 3–6 AND STRUCTURES FACTUAL', labels = ['ILLUSTRATION'], children}) => (
	<Mount x={96} y={84} w={1728} h={900} source={source} start={start} end={end} lean={1.5} labels={labels}>
		<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>{children}</div>
	</Mount>
);

const Legend: React.FC<{start: number; end: number; items: {c: string; t: string}[]; x?: number; y?: number}> = ({start, end, items, x = 150, y = 140}) => {
	const f = useFilmFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y}}>
			{items.map((it, i) => {
				const o = envelope(f, start + i * 18, end, 14, 14);
				return (
					<div key={it.t} style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, opacity: o, fontFamily: mono, fontSize: 18, letterSpacing: 2.4, color: colors.ink}}>
						<span style={{width: 26, height: 10, background: it.c}} />
						{it.t}
					</div>
				);
			})}
		</div>
	);
};

const Readout: React.FC<{start: number; end: number; title: string; value: string; tone: 'cyan' | 'amber' | 'red'; sub?: string; x?: number; y?: number}> = ({start, end, title, value, tone, sub, x = 1340, y = 150}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 14, 14);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 420, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '14px 20px 14px', fontFamily: mono}}>
			<div style={{fontSize: 14, letterSpacing: 2.6, color: colors.muted}}>{title}</div>
			<div style={{fontSize: 34, fontWeight: 700, color: colors[tone], marginTop: 6, letterSpacing: 1, whiteSpace: 'nowrap'}}>{value}</div>
			{sub ? <div style={{fontSize: 15, letterSpacing: 2, color: colors.sub, marginTop: 6}}>{sub}</div> : null}
		</div>
	);
};

// ---------- the opening, and why there is a plug (C70)
const Opening: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(23) - 30;
	const toPlug = sf(24) - 10;
	const end = sf(25) + 20;
	const circ = tween(f, wf(23, 'each'), wf(23, 'each') + 30, 0, 1, ease.draw);
	return (
		<>
			<Fade start={a} end={toPlug + 30}>
				<Photo src={media('img/fig02_med_plug_locations.jpg')} iw={1430} ih={880} start={a} end={toPlug + 30} source="NTSB AIR-25-04 · FIG. 2 · MID EXIT DOOR PLUG LOCATIONS" tag="FIG. 2" from={{x: 100, y: 40, w: 1300, h: 800}} to={{x: 420, y: 230, w: 760, h: 470}}>
					{({sx, sy}) => (
						<svg width={1620} height={786} style={{position: 'absolute', left: 0, top: 0}}>
							{[
								[713, 456],
								[797, 490],
							].map(([x, y]) => (
								<circle key={x} cx={sx(x)} cy={sy(y)} r={46} fill="none" stroke={colors.cyan} strokeWidth={3} strokeDasharray={`${290 * circ} 400`} />
							))}
						</svg>
					)}
				</Photo>
			</Fade>
			<Fade start={toPlug} end={end}>
				<Stage start={toPlug} end={end}>
					<PlugSvg cam={camAt(f, [{f: toPlug, yaw: 0, pitch: 0.02, dist: 170}, {f: end, yaw: 0.12, pitch: 0.05, dist: 150}])} state={{...defaultState, bolts: allBolts(0)}} />
					<OpenDoorGhost start={toPlug} />
				</Stage>
				<Caption text="EXIT DOOR ONLY WHEN REQUIRED · OTHERWISE A PLUG" start={toPlug + 20} end={end} y={900} x={150} />
			</Fade>
		</>
	);
};

const OpenDoorGhost: React.FC<{start: number}> = ({start}) => {
	const f = useFilmFrame();
	const o = 1 - tween(f, start + 40, start + 110, 0, 1);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: 960 - 190, top: 520 - 330, width: 380, height: 660, border: `2px dashed ${colors.sub}`, borderRadius: 40, opacity: o * 0.8}}>
			<div style={{position: 'absolute', top: -34, left: 0, fontFamily: mono, fontSize: 16, letterSpacing: 2.4, color: colors.sub, whiteSpace: 'nowrap'}}>EMERGENCY EXIT DOOR</div>
		</div>
	);
};

// ---------- two restraints (C10, C11, C87)
const Restraints: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(25) - 10;
	const stopsIn = sf(27);
	const end = sf(29) + 10;
	const cam = camAt(f, [
		{f: a, yaw: 0.12, pitch: 0.05, dist: 150},
		{f: stopsIn, yaw: 0.62, pitch: 0.16, dist: 140},
		{f: end, yaw: 0.92, pitch: 0.2, dist: 130},
	]);
	const lit = tween(f, stopsIn, wf(27, 'side') + 30, 0, 12, ease.camera);
	const glow = tween(f, stopsIn - 10, stopsIn + 20, 0, 1);
	const press = tween(f, wf(28, 'bear') - 10, wf(28, 'bear') + 40, 0, 1, ease.arrive);
	const state: PlugState = {...defaultState, bolts: allBolts(0), stopGlow: glow, stopsLit: lit};
	// pressure arrows: from the cabin side (−z) outward onto the plug's inner face, a 3 × 4 field
	const arrows: React.ReactNode[] = [];
	if (press > 0) {
		for (let i = 0; i < 3; i++)
			for (let j = 0; j < 4; j++) {
				const x = -9 + i * 9;
				const y = 9 + j * 14;
				const p0 = projectPoint(cam, [x, y, -26 + 14 * press]);
				const p1 = projectPoint(cam, [x, y, -4]);
				arrows.push(
					<g key={`${i}${j}`} opacity={press}>
						<line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke={colors.cyan} strokeWidth={2.5} />
						<circle cx={p1.x} cy={p1.y} r={4} fill={colors.cyan} />
					</g>,
				);
			}
	}
	const w = settle(f, fps, a + 20);
	const stopLabel = (i: number, side: 1 | -1) => {
		const p = projectPoint(cam, [side * (PLUG.w / 2 + 6.5), STOP_Y[i], -0.5]);
		return (
			<text key={`${i}${side}`} x={p.x} y={p.y + 5} textAnchor="middle" fill={colors.cyan} fontFamily="JetBrains Mono" fontSize={15} opacity={Math.max(0, Math.min(1, lit - i * 2)) * glow}>
				{i + 1}
				{side > 0 ? 'F' : 'A'}
			</text>
		);
	};
	return (
		<Stage start={a} end={end}>
			<PlugSvg cam={cam} state={state} extra={<>{arrows}{[0, 1, 2, 3, 4, 5].flatMap((i) => [stopLabel(i, 1), stopLabel(i, -1)])}</>} />
			<Readout start={a + 10} end={stopsIn + 10} title="PLUG WEIGHT · 1 G · NTSB" value={`${Math.round(63 * w)} LB`} sub="28.6 KG" tone="cyan" />
			<Legend start={sf(26)} end={end} items={[{c: colors.cyan, t: 'STOPS · AGAINST OUTWARD'}, {c: colors.amber, t: 'BOLTS · AGAINST UPWARD'}]} />
			<Caption text="CABIN PRESSURE PUSHES OUTWARD · 12 STOPS CARRY IT" start={wf(28, 'bear')} end={end} tone="cyan" y={900} x={150} />
		</Stage>
	);
};

// ---------- the one direction the stops cannot hold (C13, C88)
const OneDirection: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(29) - 10;
	const liftA = wf(30, 'lift');
	const liftB = wf(30, 'pads') + 10;
	const swingA = sf(31);
	const swingB = ef(31) + 60;
	const end = sf(32) + 6;
	const cam = camAt(f, [
		{f: a, yaw: 0.92, pitch: 0.2, dist: 130},
		{f: liftA, yaw: 1.02, pitch: 0.14, dist: 118, ty: 34},
		{f: swingA, yaw: 1.08, pitch: 0.12, dist: 125, ty: 32},
		{f: end, yaw: 1.15, pitch: 0.14, dist: 140, ty: 30},
	]);
	const lift = tween(f, liftA, liftB, 0, CLEAR_TRUE_IN * LIFT_EXAG * 1.08, ease.camera);
	const swing = tween(f, swingA, swingB, 0, (12 * Math.PI) / 180, ease.camera);
	const state: PlugState = {...defaultState, bolts: allBolts(0), stopGlow: 1, lift, swing};
	const pad = anchor(state, cam, 'padTopFwd');
	const pin = anchor(state, cam, 'stopTopFwd');
	const cleared = lift >= CLEAR_TRUE_IN * LIFT_EXAG;
	const shown = Math.min(lift / LIFT_EXAG, CLEAR_TRUE_IN);
	return (
		<Stage start={a} end={end} labels={['ILLUSTRATION', 'NOT TO SCALE']}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					f > liftA - 10 ? (
						<g opacity={tween(f, liftA - 10, liftA + 10, 0, 1)}>
							<line x1={pad.x + 40} x2={pad.x + 140} y1={pad.y} y2={pad.y} stroke={colors.amber} strokeWidth={2} strokeDasharray="6 5" />
							<line x1={pin.x + 40} x2={pin.x + 140} y1={pin.y} y2={pin.y} stroke={cleared ? colors.red : colors.cyan} strokeWidth={2} />
						</g>
					) : null
				}
			/>
			<Readout start={liftA - 10} end={end} title="CRITICAL CLEARANCE THRESHOLD" value={`${shown.toFixed(2)} / 0.50 IN`} sub={cleared ? 'STOP PINS CLEAR THE PADS' : 'STOP PINS BEARING ON PADS'} tone={cleared ? 'red' : 'cyan'} />
			<Caption text="STOPS HOLD OUTWARD · NOT UPWARD" start={sf(29) + 10} end={liftA} y={900} x={150} />
			<Caption text="TOP SWINGS OUT ABOUT THE LOWER HINGES" start={swingA + 10} end={end} y={900} x={150} tone="red" />
		</Stage>
	);
};

// ---------- four bolts (C12)
const BoltStack: React.FC<{start: number; end: number; ons: number[]}> = ({start, end, ons}) => {
	const f = useFilmFrame();
	const parts = [
		{t: 'BOLT', w: 300, h: 26},
		{t: 'WASHER', w: 18, h: 64},
		{t: 'WASHER', w: 18, h: 64},
		{t: 'CASTLE NUT', w: 46, h: 70},
		{t: 'COTTER PIN', w: 90, h: 10},
	];
	const spread = tween(f, start + 20, start + 80, 0, 1, ease.arrive);
	let x = 60;
	return (
		<Mount x={1100} y={640} w={680} h={290} source="ILLUSTRATION · AFTER NTSB AIR-25-04 P. 12" start={start} end={end} lean={2}>
			<svg width={700} height={266}>
				{parts.map((p, i) => {
					const px = x + i * 40 * spread;
					const on = tween(f, ons[i], ons[i] + 14, 0, 1, ease.arrive);
					x += p.w + 6;
					return (
						<g key={i}>
							<rect x={px} y={120 - p.h / 2 - (1 - on) * 30} width={p.w} height={p.h} fill={i === 0 ? '#7a4e08' : '#5c3d0a'} stroke={colors.amber} strokeWidth={1.5} rx={i === 3 ? 4 : 2} opacity={on} />
							{i === 0 ? <rect x={px - 30} y={120 - 26 - (1 - on) * 30} width={30} height={52} fill="#7a4e08" stroke={colors.amber} strokeWidth={1.5} opacity={on} /> : null}
							<text x={px + p.w / 2} y={i % 2 ? 196 : 66} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontSize={17} letterSpacing={1.5} opacity={Math.min(spread, on)}>
								{p.t}
							</text>
						</g>
					);
				})}
			</svg>
		</Mount>
	);
};

const FourBolts: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(32) - 10;
	const upIn = sf(33);
	const lowIn = sf(34);
	const stackIn = sf(35);
	const jobAt = sf(36);
	const end = sf(37) + 10;
	const cam = camAt(f, [
		{f: a, yaw: 1.15, pitch: 0.14, dist: 140, ty: 30},
		{f: upIn, yaw: 0.55, pitch: 0.16, dist: 128, ty: 30},
		{f: stackIn, yaw: 0.45, pitch: 0.18, dist: 140, ty: 29, cx: 700},
		{f: end, yaw: 0.5, pitch: 0.2, dist: 135, ty: 29, cx: 760},
	]);
	const reset = tween(f, a, a + 50, 1, 0, ease.camera);
	const up = settle(f, fps, upIn);
	const low = settle(f, fps, lowIn);
	const nudge = Math.max(0, shudder(f, fps, jobAt + 20, 1.2, 6, 4.5));
	const state: PlugState = {...defaultState, lift: CLEAR_TRUE_IN * LIFT_EXAG * 1.08 * reset + nudge, swing: ((12 * Math.PI) / 180) * reset, stopGlow: 0.35, boltGlow: 1, bolts: {upperFwd: up, upperAft: up, lowerFwd: low, lowerAft: low}};
	const callout = (name: string, text: string, on: number) => {
		const p = anchor(state, cam, name);
		const o = tween(f, on, on + 16, 0, 1);
		return (
			<g key={name} opacity={o}>
				<circle cx={p.x} cy={p.y} r={18} fill="none" stroke={colors.amber} strokeWidth={2} />
				<text x={p.x + (name.includes('Fwd') ? 30 : -30)} y={p.y + 6} textAnchor={name.includes('Fwd') ? 'start' : 'end'} fill={colors.amber} fontFamily="JetBrains Mono" fontSize={16} letterSpacing={1.6}>
					{text}
				</text>
			</g>
		);
	};
	return (
		<Stage start={a} end={end}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					<>
						{callout('upperFwd', 'UPPER GUIDE TRACK BOLT', upIn + 10)}
						{callout('upperAft', 'UPPER GUIDE TRACK BOLT', upIn + 16)}
						{callout('lowerFwd', 'ARRESTOR BOLT', lowIn + 10)}
						{callout('lowerAft', 'ARRESTOR BOLT', lowIn + 16)}
					</>
				}
			/>
			<BoltStack start={stackIn - 10} end={end} ons={[stackIn - 4, wf(35, 'washers') - 6, wf(35, 'washers') + 6, wf(35, 'castle') - 6, wf(35, 'cotter') - 6]} />
			<Caption text="THEIR ONLY JOB: STOP UPWARD MOVEMENT" start={jobAt} end={end} tone="amber" y={900} x={150} />
		</Stage>
	);
};

// ---------- SIGNATURE 1: the margin (C14). Bolts out one at a time; the retention holds until the record says it would not.
const Margin: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(37) - 10;
	const docA = sf(38) - 10;
	const docB = sf(39) - 6;
	const oneA = sf(39);
	const twoA = sf(40);
	const allA = sf(41);
	const end = sf(43) - 4;
	const cam = camAt(f, [
		{f: a, yaw: 0.5, pitch: 0.2, dist: 135, ty: 29, cx: 760},
		{f: oneA, yaw: 0.35, pitch: 0.14, dist: 128, ty: 29, cx: 760},
		{f: end, yaw: 0.28, pitch: 0.12, dist: 124, ty: 29, cx: 760},
	]);
	// sequence: one lower bolt alone (three out, one by one); then the two upper alone; then all four
	const out = (s: number) => 1 - tween(f, s, s + 34, 0, 1, ease.camera);
	const back = (s: number) => tween(f, s, s + 34, 0, 1, ease.arrive);
	let bolts: Record<BoltId, number> = allBolts(1);
	if (f >= oneA && f < twoA) bolts = {upperFwd: out(oneA - 40), upperAft: out(oneA - 28), lowerAft: out(oneA - 16), lowerFwd: 1};
	if (f >= twoA && f < allA) bolts = {upperFwd: back(twoA - 20), upperAft: back(twoA - 20), lowerAft: 0, lowerFwd: out(twoA - 50)};
	if (f >= allA) bolts = {upperFwd: 1, upperAft: 1, lowerAft: back(allA + 6), lowerFwd: back(allA + 6)};
	const count = f >= allA + 20 ? 4 : f >= twoA ? 2 : f >= oneA ? 1 : 4;
	const state: PlugState = {...defaultState, stopGlow: 0.35, boltGlow: 1, bolts};
	const sub = f >= allA ? 'MARGIN: 4 WHERE 1 HOLDS' : f >= twoA ? 'TWO UPPER ALONE: KEPT ON ITS STOPS' : f >= oneA ? 'ONE LOWER BOLT ALONE: HELD' : 'ALL FOUR INSTALLED';
	const docO = envelope(f, docA, docB, 14, 14);
	const k = settle(f, fps, allA + 40);
	return (
		<>
			<Stage start={a} end={end} labels={['ILLUSTRATION']}>
				<PlugSvg cam={cam} state={state} />
				<Readout start={a + 6} end={end} title="UPWARD RETENTION" value="HOLDS" sub={sub} tone="cyan" y={180} />
				<div style={{position: 'absolute', left: 1380, top: 360, width: 380, fontFamily: mono, opacity: envelope(f, oneA, end, 14, 10)}}>
					<div style={{fontSize: 14, letterSpacing: 2.6, color: colors.muted}}>BOLTS INSTALLED</div>
					<div style={{display: 'flex', gap: 10, marginTop: 10}}>
						{BOLT_IDS.map((id) => (
							<div key={id} style={{width: 72, height: 18, background: bolts[id] > 0.5 ? colors.amber : 'transparent', border: `1px solid ${colors.amber}`, opacity: 0.4 + 0.6 * bolts[id]}} />
						))}
					</div>
					<div style={{fontSize: 30, fontWeight: 700, color: colors.ink, marginTop: 10}}>{count} OF 4</div>
				</div>
				<div style={{position: 'absolute', left: 150, top: 820, fontFamily: sans, fontWeight: 700, fontSize: 54, letterSpacing: 6, color: colors.ink, opacity: k, transform: `translateY(${(1 - k) * 20}px)`}}>
					4 WHERE 1 HOLDS
				</div>
				<div style={{position: 'absolute', left: 150, top: 890, fontFamily: mono, fontSize: 16, letterSpacing: 2.4, color: colors.sub, opacity: k}}>BOEING ENGINEERING REVIEW · REPORTED IN NTSB AIR-25-04 P. 33</div>
			</Stage>
			{docO > 0 ? (
				<AbsoluteFill style={{opacity: docO}}>
					<AbsoluteFill style={{background: 'rgba(10,13,18,0.75)'}} />
					<Exhibit page={{w: 1870, h: 2420}} start={docA} push={{from: docA + 10, to: docB - 20, focus: {x: 140, y: 360, w: 1600, h: 330}}} highlights={phrases.one_bolt.rects.map((r, i) => ({...r, start: docA + 50 + i * 26, draw: 30}))} label="EXHIBIT 02" source="NTSB AIR-25-04 · P. 33 · DESIGN CAPABILITY WITH VARIOUS MISSING BOLTS">
						<Img src={media('pages/p047_design_capability.jpg')} style={{width: 1870, height: 2420}} />
					</Exhibit>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ---------- all four missing (C15)
const Missing: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(43) - 8;
	const gone = wf(43, 'missing') - 30;
	const end = sf(44) + 10;
	const cam = camAt(f, [
		{f: a, yaw: 0.28, pitch: 0.12, dist: 124, ty: 29, cx: 760},
		{f: end, yaw: 0.2, pitch: 0.1, dist: 112, ty: 29, cx: 820},
	]);
	const v = 1 - tween(f, gone, gone + 26, 0, 1);
	const state: PlugState = {...defaultState, stopGlow: 0.25, boltGlow: 1, bolts: allBolts(1), boltOpacity: v, emptyHoles: tween(f, gone + 20, gone + 40, 0, 1)};
	return (
		<Stage start={a} end={end}>
			<PlugSvg cam={cam} state={state} />
			<Readout start={a} end={end} title="UPWARD RETENTION" value={v > 0.5 ? 'HOLDS' : 'NONE'} sub={v > 0.5 ? 'MARGIN: 4 WHERE 1 HOLDS' : '0 OF 4 BOLTS · N704AL, LEFT PLUG'} tone={v > 0.5 ? 'cyan' : 'red'} y={180} />
		</Stage>
	);
};

// ---------- the holes (C15, C71): NTSB laboratory photographs
const Holes: React.FC = () => {
	const a = sf(44) - 14;
	const swap = sf(46) - 8;
	const end = sf(48) + 6;
	return (
		<>
			<Photo src={media('img/fig13_arrestor_bolt_holes.jpg')} iw={1289} ih={793} start={a} end={swap + 16} source="NTSB AIR-25-04 · FIG. 13 · VERTICAL MOVEMENT ARRESTOR BOLT HOLES" tag="FIG. 13" from={{x: 0, y: 0, w: 1289, h: 793}} to={{x: 60, y: 40, w: 640, h: 500}} />
			<Caption text="NO BOLT CONTACT DAMAGE" start={sf(45)} end={swap} tone="red" />
			<Photo src={media('img/fig12_upper_guide_fitting.jpg')} iw={839} ih={966} start={swap} end={end} source="NTSB AIR-25-04 · FIG. 12 · UPPER GUIDE FITTING, BOLT HOLES" tag="FIG. 12" from={{x: 0, y: 0, w: 839, h: 966}} to={{x: 0, y: 60, w: 430, h: 420}} />
			<Caption text="FAINT WASHER OUTLINES: FITTED, THEN TAKEN OUT" start={sf(46) + 10} end={end} tone="amber" />
		</>
	);
};

// ---------- the question (framing)
const Question: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(48) - 10;
	const end = ef(48) + 120;
	const o = envelope(f, a, end, 16, 24);
	return (
		<AbsoluteFill style={{opacity: o, alignItems: 'center', justifyContent: 'center'}}>
			<div style={{fontFamily: sans, fontWeight: 700, fontSize: 56, letterSpacing: 1, color: colors.ink, textAlign: 'center', lineHeight: 1.3}}>
				<TypeOn text="WHO TOOK THEM OUT," start={Math.min(wf(48, 'who'), sf(48) + 30)} cps={24} caret={false} />
				<br />
				<TypeOn text="AND WHY WERE THEY NEVER PUT BACK?" start={wf(48, 'why')} cps={24} caret={false} />
			</div>
		</AbsoluteFill>
	);
};

const ActIII: React.FC = () => <ActTitle n="III" title="The Boardroom" start={ef(48) + 110} end={sf(49) + 40} sub="THE FACTORY RECORD" />;

export const act2: SceneDef[] = [
	{id: 'opening', from: sf(23) - 40, to: sf(25) + 30, C: Opening, cues: [{frame: wf(23, 'each'), sfx: 'pen_scratch', gainDb: -18}, {frame: sf(24) - 10, sfx: 'relay_click', gainDb: -16}]},
	{id: 'restraints', from: sf(25) - 20, to: sf(29) + 20, C: Restraints, cues: [...Array.from({length: 6}, (_, i) => ({frame: sf(27) + i * 34, sfx: 'relay_click' as const, gainDb: -18})), {frame: wf(28, 'bear'), sfx: 'whoosh' as const, gainDb: -20}]},
	{id: 'onedir', from: sf(29) - 20, to: sf(32) + 16, C: OneDirection, cues: [{frame: wf(30, 'pads'), sfx: 'relay_click', gainDb: -12}]},
	{id: 'fourbolts', from: sf(32) - 20, to: sf(37) + 20, C: FourBolts, cues: [{frame: sf(33), sfx: 'relay_click', gainDb: -12}, {frame: sf(34), sfx: 'relay_click', gainDb: -12}, {frame: sf(36) + 20, sfx: 'metal_snap_sub', gainDb: -20}]},
	{id: 'margin', from: sf(37) - 20, to: sf(43) + 6, C: Margin, cues: [{frame: sf(38), sfx: 'paper_slide', gainDb: -14}, {frame: sf(38) + 60, sfx: 'highlighter', gainDb: -16}, {frame: sf(39) + 10, sfx: 'relay_click', gainDb: -16}, {frame: sf(39) + 50, sfx: 'relay_click', gainDb: -16}, {frame: sf(39) + 90, sfx: 'relay_click', gainDb: -16}, {frame: sf(41) + 6, sfx: 'relay_click', gainDb: -14}, {frame: sf(41) + 40, sfx: 'stamp', gainDb: -14}]},
	{id: 'missing', from: sf(43) - 16, to: sf(44) + 20, C: Missing, cues: [{frame: wf(43, 'missing') - 30, sfx: 'metal_snap_sub', gainDb: -10}]},
	{id: 'holes', from: sf(44) - 24, to: sf(48) + 16, C: Holes, cues: [{frame: sf(44), sfx: 'paper_slide', gainDb: -16}]},
	{id: 'question', from: sf(48) - 20, to: ef(48) + 130, C: Question},
	{id: 'act3title', from: ef(48) + 100, to: sf(49) + 50, C: ActIII, cues: [{frame: ef(48) + 110, sfx: 'whoosh', gainDb: -20}]},
];

