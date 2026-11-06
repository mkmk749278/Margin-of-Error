import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {Exhibit} from '../../../../lib/remotion/Exhibit';
import {ease, envelope, settle, shudder, tween} from '../../../../lib/remotion/motion';
import phrases from '../data/phrases.json';
import {Camera, projectPoint} from '../engine3d';
import {BracketLock, bump, flash, LAND, lead, rollTo, STAGGER, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {Arrive, litStyle, on, WordLine} from '../beats';
import {ActTitle, Fade, media, mono, Mount, Photo, sans, useFilmFrame} from '../kit';
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

const Readout: React.FC<{start: number; end: number; title: string; value: string; tone: 'cyan' | 'amber' | 'red'; sub?: string; x?: number; y?: number}> = ({start, end, title, value, tone, sub, x = 1340, y = 150}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 14, 14);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 420, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '14px 20px 14px', fontFamily: mono}}>
			<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>{title}</div>
			<div style={{fontSize: 34, fontWeight: 700, color: colors[tone], marginTop: 6, letterSpacing: 1, whiteSpace: 'nowrap'}}>{value}</div>
			{sub ? <div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 6}}>{sub}</div> : null}
		</div>
	);
};

// ---------- the opening, and why there is a plug (C70): the camera and the labels follow the words
const Opening: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(23) - 30;
	const O = {
		nine: wf(23, 'nine'),
		opening: wf(23, 'opening'),
		each: wf(23, 'each'),
		fuselage: wf(23, 'fuselage'),
		behind: wf(23, 'behind'),
		wing: wf(23, 'wing'),
		emergency: wf(23, 'emergency'),
		exit: wf(23, 'exit'),
		airlines: wf(24, 'airlines'),
		not: wf(24, 'not'),
		exit2: wf(24, 'exit'),
		plug: wf(24, 'plug'),
		instead: wf(24, 'instead'),
		lighter: wf(24, 'lighter'),
		simpler: wf(24, 'simpler'),
		fills: wf(24, 'fills'),
		hole: wf(24, 'hole'),
	};
	const toPlug = O.exit2 - 10;
	const end = sf(25) + 20;
	// one circle per side, drawn on "opening" and "each"
	const c1 = lead(f, O.opening, 24);
	const c2 = lead(f, O.each, 24);
	const FULL = {x: 0, y: 40, w: 1430, h: 672};
	const OPEN = {x: 380, y: 270, w: 820, h: 385};
	const WING = {x: 420, y: 330, w: 680, h: 320};
	return (
		<>
			<Fade start={a} end={toPlug + 30}>
				<Photo
					src={media('img/fig02_med_plug_locations.jpg')}
					iw={1430}
					ih={880}
					start={a}
					end={toPlug + 30}
					source="NTSB AIR-25-04 · FIG. 2 · MID EXIT DOOR PLUG LOCATIONS"
					tag="FIG. 2"
					from={FULL}
					to={OPEN}
					path={[
						{frame: a, r: FULL},
						{frame: O.opening - 20, r: FULL},
						{frame: O.each + 20, r: OPEN},
						{frame: O.behind - 6, r: OPEN},
						{frame: O.wing + 16, r: WING},
						{frame: toPlug + 30, r: {x: 450, y: 345, w: 640, h: 300}},
					]}
				>
					{({sx, sy}) => (
						<svg width={1620} height={786} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
							{[
								[713, 456, c1],
								[797, 490, c2],
							].map(([x, y, k]) => (
								<circle key={x} cx={sx(x)} cy={sy(y)} r={46} fill="none" stroke={colors.cyan} strokeWidth={3} strokeDasharray={`${290 * k} 400`} />
							))}
							{/* "behind the wing": an amber marker on the wing root, aft of which the openings sit */}
							<BracketLock f={f} fps={fps} word={O.wing} arm={24} x={sx(560)} y={sy(520)} w={sx(720) - sx(560)} h={sy(620) - sy(520)} tone="amber" until={toPlug} />
						</svg>
					)}
				</Photo>
				<div style={{position: 'absolute', left: 150, top: 952, display: 'flex', gap: 14, fontFamily: mono, fontSize: 28, letterSpacing: 1.2, background: colors.card, border: `1px solid ${colors.border}`, padding: '8px 16px 6px', whiteSpace: 'nowrap', opacity: on(f, O.nine, 10)}}>
					<span style={litStyle(f, O.nine, colors.ink)}>737-9</span>
					<span style={{opacity: on(f, O.each, 8), ...litStyle(f, O.fuselage, colors.cyan)}}>· AN OPENING EACH SIDE</span>
					<span style={{opacity: on(f, O.wing, 8), ...litStyle(f, O.wing, colors.amber)}}>· AFT OF THE WING</span>
					<span style={{opacity: on(f, O.emergency, 8), ...litStyle(f, O.emergency, colors.cyan), display: 'inline-block', transform: `scale(${bump(f, fps, O.exit + LAND).toFixed(4)})`}}>· FOR AN EXTRA EMERGENCY EXIT</span>
				</div>
			</Fade>
			<Fade start={toPlug} end={end}>
				<Stage start={toPlug} end={end}>
					<div style={{position: 'absolute', inset: 0, opacity: on(f, O.plug, 16)}}>
						<PlugSvg cam={camAt(f, [{f: toPlug, yaw: 0, pitch: 0.02, dist: 170}, {f: O.fills, yaw: 0.06, pitch: 0.04, dist: 160}, {f: end, yaw: 0.12, pitch: 0.05, dist: 150}])} state={{...defaultState, bolts: allBolts(0), stopGlow: 0.6 * flash(f, O.fills, 0)}} />
					</div>
					<OpenDoorGhost start={toPlug} out={O.instead} />
				</Stage>
				{/* "Airlines that do not need that exit get a plug instead — a lighter, simpler panel that fills the hole." */}
				<div style={{position: 'absolute', left: 150, top: 846, display: 'flex', gap: 16, fontFamily: mono, fontSize: 30, letterSpacing: 1.4, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px'}}>
					<span style={{opacity: on(f, O.airlines, 8), ...litStyle(f, O.not, colors.ink)}}>EXIT NOT NEEDED</span>
					<span style={{opacity: on(f, O.plug, 8), ...litStyle(f, O.plug, colors.cyan)}}>→ A PLUG</span>
					<span style={{opacity: on(f, O.lighter, 8), ...litStyle(f, O.lighter, colors.ink)}}>· LIGHTER</span>
					<span style={{opacity: on(f, O.simpler, 8), ...litStyle(f, O.simpler, colors.ink)}}>· SIMPLER</span>
					<span style={{opacity: on(f, O.fills, 8), ...litStyle(f, O.fills, colors.cyan), display: 'inline-block', transform: `scale(${bump(f, fps, O.hole + LAND).toFixed(4)})`}}>· FILLS THE HOLE</span>
				</div>
			</Fade>
		</>
	);
};

const OpenDoorGhost: React.FC<{start: number; out: number}> = ({start, out}) => {
	const f = useFilmFrame();
	const o = Math.min(on(f, start + 16, 16), 1 - tween(f, out - 6, out + 30, 0, 1));
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: 960 - 190, top: 520 - 330, width: 380, height: 660, border: `2px dashed ${colors.sub}`, borderRadius: 40, opacity: o * 0.8}}>
			<div style={{position: 'absolute', top: -40, left: 0, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, whiteSpace: 'nowrap'}}>EMERGENCY EXIT DOOR</div>
		</div>
	);
};

// ---------- two restraints (C10, C11, C87)
const Restraints: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(25) - 10;
	const R = {
		weighs: wf(25, 'weighs'),
		w63: wf(25, 'sixty-three'),
		pounds: wf(25, 'pounds'),
		two: wf(26, 'two'),
		restraint: wf(26, 'restraint'),
		place: wf(26, 'place'),
		difference: wf(26, 'difference'),
		between: wf(26, 'between'),
		whole: wf(26, 'whole'),
		twelve: wf(27, 'twelve'),
		six: wf(27, 'six'),
		side: wf(27, 'side'),
		moving: wf(27, 'moving'),
		outward: wf(27, 'outward'),
		pins: wf(28, 'pins'),
		bear: wf(28, 'bear'),
		pads: wf(28, 'pads'),
		frame: wf(28, 'frame'),
	};
	const stopsIn = R.twelve - 10;
	const end = sf(29) + 10;
	const cam = camAt(f, [
		{f: a, yaw: 0.12, pitch: 0.05, dist: 150},
		{f: stopsIn, yaw: 0.62, pitch: 0.16, dist: 140},
		{f: R.pins, yaw: 0.8, pitch: 0.18, dist: 132},
		{f: end, yaw: 0.92, pitch: 0.2, dist: 130},
	]);
	// "Twelve stop fittings, six down each side": all twelve flash on "twelve", then light down the sides to "side"
	const lit = rollTo(f, [{frame: R.twelve - 4, value: 0}, {frame: R.twelve + LAND, value: 2}, {frame: R.side + LAND, value: 12}]);
	const glow = Math.max(lead(f, R.twelve, 12), flash(f, R.twelve, 0));
	const press = lead(f, R.moving, 24);
	const state: PlugState = {...defaultState, bolts: allBolts(0), stopGlow: glow, stopsLit: lit};
	// pressure arrows: from the cabin side (−z) outward onto the plug's inner face, a 3 × 4 field
	const arrows: React.ReactNode[] = [];
	if (press > 0) {
		for (let i = 0; i < 3; i++)
			for (let j = 0; j < 4; j++) {
				const x = -9 + i * 9;
				const y = 9 + j * 14;
				const push = press + 0.15 * flash(f, R.bear, 0);
				const p0 = projectPoint(cam, [x, y, -26 + 14 * push]);
				const p1 = projectPoint(cam, [x, y, -4]);
				arrows.push(
					<g key={`${i}${j}`} opacity={press}>
						<line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke={colors.cyan} strokeWidth={2.5} />
						<circle cx={p1.x} cy={p1.y} r={4} fill={colors.cyan} />
					</g>,
				);
			}
	}
	const lb = Math.round(rollTo(f, [{frame: R.w63 - 18, value: 0}, {frame: R.w63 + LAND, value: 63}], true));
	const stopLabel = (i: number, side: 1 | -1) => {
		const p = projectPoint(cam, [side * (PLUG.w / 2 + 6.5), STOP_Y[i], -0.5]);
		return (
			<text key={`${i}${side}`} x={p.x} y={p.y + 5} textAnchor="middle" fill={colors.cyan} fontFamily="JetBrains Mono" fontSize={26} opacity={Math.max(0, Math.min(1, lit - i * 2 - (side > 0 ? 0 : 1))) * glow}>
				{i + 1}
				{side > 0 ? 'F' : 'A'}
			</text>
		);
	};
	const pin = anchor(state, cam, 'stopTopFwd');
	const padP = anchor(state, cam, 'padTopFwd');
	return (
		<Stage start={a} end={end}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					<>
						{arrows}
						{[0, 1, 2, 3, 4, 5].flatMap((i) => [stopLabel(i, 1), stopLabel(i, -1)])}
						<BracketLock f={f} fps={fps} word={R.pins} x={pin.x - 26} y={pin.y - 26} w={52} h={52} tone="cyan" until={end - 20} />
						<BracketLock f={f} fps={fps} word={R.pads} x={padP.x - 20} y={padP.y - 20} w={40} h={40} tone="ink" until={end - 20} />
					</>
				}
			/>
			{/* "The plug weighs sixty-three pounds": the weight rolls and lands on its word */}
			<div style={{position: 'absolute', left: 1340, top: 150, width: 420, opacity: envelope(f, a + 10, stopsIn + 10, 14, 14), background: colors.card, border: `1px solid ${f >= R.weighs ? colors.cyan : colors.border}`, padding: '14px 20px 14px', fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, R.weighs, colors.ink)}}>PLUG WEIGHT · 1 G · NTSB</div>
				<div style={{fontSize: 34, fontWeight: 700, color: colors.cyan, marginTop: 6, display: 'inline-block', transform: `scale(${bump(f, fps, R.w63 + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
					{lb} <span style={{opacity: on(f, R.pounds, 8)}}>LB</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 6, opacity: on(f, R.pounds, 10)}}>28.6 KG</div>
			</div>
			{/* "Two kinds of restraint …, and the difference between them is the whole story." */}
			<div style={{position: 'absolute', left: 150, top: 140, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.ink, opacity: envelope(f, R.two - 10, end, 12, 14)}}>
				<div style={{fontSize: 30, marginBottom: 14, ...litStyle(f, R.two, colors.ink)}}>
					<Arrive f={f} fps={fps} on={R.two}>2</Arrive> KINDS OF RESTRAINT
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, opacity: on(f, R.restraint, 10)}}>
					<span style={{width: 26, height: 10, background: colors.cyan}} />
					STOPS · AGAINST <span style={{...litStyle(f, R.difference, colors.cyan), fontWeight: 700}}>OUTWARD</span>
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 12, opacity: on(f, R.place, 10), transform: `scale(${bump(f, fps, R.whole + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
					<span style={{width: 26, height: 10, background: colors.amber}} />
					BOLTS · AGAINST <span style={{...litStyle(f, R.between, colors.amber), fontWeight: 700}}>UPWARD</span>
				</div>
			</div>
			{/* "Twelve … six down each side": the count, said and shown */}
			<div style={{position: 'absolute', left: 1340, top: 150, width: 420, opacity: envelope(f, R.twelve - 8, end, 10, 14), background: colors.card, border: `1px solid ${colors.cyan}`, padding: '14px 20px 14px', fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, wf(27, 'fittings'), colors.ink)}}>STOP FITTINGS · NTSB</div>
				<div style={{fontSize: 34, fontWeight: 700, color: colors.cyan, marginTop: 6}}>
					<Arrive f={f} fps={fps} on={R.twelve}>12</Arrive>
					<span style={{fontSize: 26, marginLeft: 14, opacity: on(f, R.six, 8), ...litStyle(f, R.six, colors.ink)}}>6 EACH SIDE</span>
				</div>
			</div>
			<div style={{position: 'absolute', left: 150, top: 846, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', opacity: envelope(f, R.outward - 8, end, 10, 14)}}>
				<span style={litStyle(f, R.outward, colors.cyan)}>CABIN PRESSURE PUSHES OUTWARD</span>
				<span style={{opacity: on(f, R.bear, 8), ...litStyle(f, R.bear, colors.ink)}}> · PINS BEAR ON PADS</span>
				<span style={{opacity: on(f, R.frame, 8), ...litStyle(f, R.frame, colors.cyan)}}> · 12 STOPS CARRY IT</span>
			</div>
		</Stage>
	);
};

// ---------- the one direction the stops cannot hold (C13, C88)
const OneDirection: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(29) - 10;
	const D = {
		stops: wf(29, 'stops'),
		one: wf(29, 'one'),
		direction: wf(29, 'direction'),
		lift: wf(30, 'lift'),
		half: wf(30, 'half'),
		inch: wf(30, 'inch'),
		pins: wf(30, 'pins'),
		clear: wf(30, 'clear'),
		pads: wf(30, 'pads'),
		top: wf(31, 'top'),
		swing: wf(31, 'swing'),
		out: wf(31, 'out'),
	};
	const end = sf(32) + 6;
	const cam = camAt(f, [
		{f: a, yaw: 0.92, pitch: 0.2, dist: 130},
		{f: D.lift, yaw: 1.02, pitch: 0.14, dist: 118, ty: 34},
		{f: D.top, yaw: 1.08, pitch: 0.12, dist: 125, ty: 32},
		{f: end, yaw: 1.15, pitch: 0.14, dist: 140, ty: 30},
	]);
	// the lift starts on "Lift" and the pins clear the pads exactly on "clear"
	const T = CLEAR_TRUE_IN * LIFT_EXAG;
	const lift = rollTo(f, [{frame: D.lift, value: 0}, {frame: D.clear + LAND, value: T}, {frame: D.pads + 24, value: T * 1.08}]);
	const swing = tween(f, D.swing, D.swing + 70, 0, (12 * Math.PI) / 180, ease.camera);
	const state: PlugState = {...defaultState, bolts: allBolts(0), stopGlow: 1, lift, swing};
	const pad = anchor(state, cam, 'padTopFwd');
	const pin = anchor(state, cam, 'stopTopFwd');
	const top = anchor(state, cam, 'topCentre');
	const cleared = f >= D.clear + LAND;
	const shown = Math.min(lift / LIFT_EXAG, CLEAR_TRUE_IN);
	return (
		<Stage start={a} end={end} labels={['ILLUSTRATION', 'NOT TO SCALE']}>
			<PlugSvg
				cam={cam}
				state={state}
				extra={
					<>
						{f > D.lift - 10 ? (
							<g opacity={tween(f, D.lift - 10, D.lift + 10, 0, 1)}>
								<line x1={pad.x + 40} x2={pad.x + 140} y1={pad.y} y2={pad.y} stroke={f >= D.pads ? colors.red : colors.amber} strokeWidth={2} strokeDasharray="6 5" />
								<line x1={pin.x + 40} x2={pin.x + 140} y1={pin.y} y2={pin.y} stroke={cleared ? colors.red : colors.cyan} strokeWidth={2} />
							</g>
						) : null}
						<BracketLock f={f} fps={fps} word={D.pins} x={pin.x - 26} y={pin.y - 26} w={52} h={52} tone="cyan" until={D.top} />
						<BracketLock f={f} fps={fps} word={D.top} x={top.x - 90} y={top.y - 30} w={180} h={60} tone="red" />
					</>
				}
			/>
			{/* "But stops only work in one direction": an outward arrow holds (cyan); the upward one does not (red) */}
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
				<g opacity={on(f, D.one, 10)}>
					<line x1={260} x2={260 + 140 * lead(f, D.one, 14)} y1={300} y2={300} stroke={colors.cyan} strokeWidth={5} />
					<text x={260} y={280} fill={colors.cyan} fontFamily="JetBrains Mono" fontSize={26}>OUTWARD · HELD</text>
				</g>
				<g opacity={on(f, D.direction, 10)}>
					<line x1={330} x2={330} y1={520} y2={520 - 140 * lead(f, D.direction, 14)} stroke={colors.red} strokeWidth={5} />
					<text x={360} y={460} fill={colors.red} fontFamily="JetBrains Mono" fontSize={26}>UP · NOT HELD</text>
				</g>
			</svg>
			<div style={{position: 'absolute', left: 1340, top: 150, width: 420, opacity: envelope(f, D.lift - 10, end, 14, 14), background: colors.card, border: `1px solid ${cleared ? colors.red : colors.border}`, padding: '14px 20px 14px', fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>CRITICAL CLEARANCE THRESHOLD</div>
				<div style={{fontSize: 34, fontWeight: 700, color: cleared ? colors.red : colors.cyan, marginTop: 6, whiteSpace: 'nowrap'}}>
					{shown.toFixed(2)} <span style={{...litStyle(f, D.half, colors.amber), display: 'inline-block', transform: `scale(${bump(f, fps, D.inch + LAND).toFixed(4)})`}}>/ 0.50 IN</span>
				</div>
				<div style={{marginTop: 8}}>
					<StatusFlip f={f} fps={fps} word={D.clear} from="PINS BEARING ON PADS" to="PINS CLEAR OF THE PADS" toneFrom="cyan" toneTo="red" size={26} />
				</div>
			</div>
			<div style={{position: 'absolute', left: 150, top: 846, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', opacity: envelope(f, D.stops - 8, end, 10, 14)}}>
				<span style={litStyle(f, D.stops, colors.cyan)}>STOPS HOLD OUTWARD</span>
				<span style={{opacity: on(f, D.direction, 8), color: colors.red}}> · NOT UPWARD</span>
				<span style={{opacity: on(f, D.swing, 8), ...litStyle(f, D.out, colors.red)}}> · TOP SWINGS OUT ABOUT THE LOWER HINGES</span>
			</div>
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
	// round 3: wide enough that every part and label stays inside the mount (the cotter pin was cut off)
	return (
		<Mount x={980} y={630} w={840} h={300} source="ILLUSTRATION · AFTER NTSB AIR-25-04 P. 12" start={start} end={end} lean={2}>
			<svg width={840} height={244}>
				{parts.map((p, i) => {
					const px = x + i * 56 * spread;
					const on = tween(f, ons[i], ons[i] + 14, 0, 1, ease.arrive);
					x += p.w + 6;
					return (
						<g key={i}>
							<rect x={px} y={120 - p.h / 2 - (1 - on) * 30} width={p.w} height={p.h} fill={i === 0 ? '#7a4e08' : '#5c3d0a'} stroke={colors.amber} strokeWidth={1.5} rx={i === 3 ? 4 : 2} opacity={on} />
							{i === 0 ? <rect x={px - 30} y={120 - 26 - (1 - on) * 30} width={30} height={52} fill="#7a4e08" stroke={colors.amber} strokeWidth={1.5} opacity={on} /> : null}
							<text x={px + p.w / 2} y={i % 2 ? 200 : 62} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1} opacity={Math.min(spread, on)}>
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
	const B = {
		four: wf(32, 'four'),
		top: wf(33, 'top'),
		guide: wf(33, 'guide'),
		bottom: wf(34, 'bottom'),
		hinges: wf(34, 'hinges'),
		one: wf(35, 'one'),
		job: wf(36, 'job'),
		stop: wf(36, 'stop'),
		moving: wf(36, 'moving'),
		up: wf(36, 'up'),
	};
	const upIn = wf(33, 'two') - 4;
	const lowIn = wf(34, 'two') - 4;
	const stackIn = wf(35, 'each');
	const jobAt = B.job;
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
	const nudge = Math.max(0, shudder(f, fps, B.moving, 1.2, 6, 4.5));
	const state: PlugState = {...defaultState, lift: CLEAR_TRUE_IN * LIFT_EXAG * 1.08 * reset + nudge, swing: ((12 * Math.PI) / 180) * reset, stopGlow: 0.35, boltGlow: 1, bolts: {upperFwd: up, upperAft: up, lowerFwd: low, lowerAft: low}};
	const callout = (name: string, text: string, on: number) => {
		const p = anchor(state, cam, name);
		const o = tween(f, on, on + 16, 0, 1);
		// round 3: the lower right label gives way to the fastener stack when it arrives (they shared the space)
		const textO = name === 'lowerFwd' ? 1 - tween(f, stackIn - 14, stackIn + 6, 0, 1) : 1;
		return (
			<g key={name} opacity={o}>
				<circle cx={p.x} cy={p.y} r={18} fill="none" stroke={colors.amber} strokeWidth={2} />
				<text x={p.x + (name.includes('Fwd') ? 30 : -30)} y={p.y + 6} textAnchor={name.includes('Fwd') ? 'start' : 'end'} fill={colors.amber} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1} opacity={textO}>
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
						{callout('upperFwd', 'UPPER GUIDE TRACK BOLT', B.top - 8)}
						{callout('upperAft', 'UPPER GUIDE TRACK BOLT', B.top + 4)}
						{callout('lowerFwd', 'ARRESTOR BOLT', B.bottom - 8)}
						{callout('lowerAft', 'ARRESTOR BOLT', B.bottom + 4)}
						{(['upperFwd', 'upperAft'] as const).map((id, i) => {
							const p = anchor(state, cam, id);
							return <BracketLock key={id} f={f} fps={fps} word={B.guide + i * 6} x={p.x - 28} y={p.y - 28} w={56} h={56} tone="amber" until={stackIn} />;
						})}
						{(['lowerFwd', 'lowerAft'] as const).map((id, i) => {
							const p = anchor(state, cam, id);
							return <BracketLock key={id} f={f} fps={fps} word={B.hinges + i * 6} x={p.x - 28} y={p.y - 28} w={56} h={56} tone="amber" until={stackIn} />;
						})}
					</>
				}
			/>
			<BoltStack start={stackIn - 10} end={end} ons={[B.one - 4, wf(35, 'washers') - 6, wf(35, 'washers') + 6, wf(35, 'castle') - 6, wf(35, 'cotter') - 6]} />
			{/* "That is why there are four bolts": four slots, one after another, then filled as each pair is said */}
			<div style={{position: 'absolute', left: 150, top: 150, fontFamily: mono, opacity: envelope(f, B.four - 10, end, 10, 14)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, B.four, colors.amber)}}>4 BOLTS · AGAINST UPWARD</div>
				<div style={{display: 'flex', gap: 10, marginTop: 10}}>
					{[0, 1, 2, 3].map((i) => {
						const filled = f >= (i < 2 ? upIn + 6 : lowIn + 6) + (i % 2) * 6;
						return <div key={i} style={{width: 72, height: 18, border: `1px solid ${colors.amber}`, background: filled ? colors.amber : 'transparent', opacity: on(f, B.four + i * STAGGER, 6)}} />;
					})}
				</div>
			</div>
			<div style={{position: 'absolute', left: 150, top: 846, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', opacity: envelope(f, jobAt - 8, end, 10, 14)}}>
				<span style={litStyle(f, jobAt, colors.amber)}>THEIR ONLY JOB:</span>
				<span style={{opacity: on(f, B.stop, 8), color: colors.amber}}> STOP</span>
				<span style={{opacity: on(f, B.up, 8), color: colors.amber}}> UPWARD MOVEMENT</span>
			</div>
		</Stage>
	);
};

// ---------- SIGNATURE 1: the margin (C14). Bolts out one at a time, on the words; the retention holds as the record says.
const Margin: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(37) - 10;
	const M = {
		margin: wf(37, 'margin'),
		accident: wf(38, 'accident'),
		engineers: wf(38, 'engineers'),
		worked: wf(38, 'worked'),
		many: wf(38, 'many'),
		bolts: wf(38, 'bolts'),
		needed: wf(38, 'needed'),
		one: wf(39, 'one'),
		lower: wf(39, 'lower'),
		own: wf(39, 'own'),
		held: wf(39, 'held'),
		down: wf(39, 'down'),
		two: wf(40, 'two'),
		upper: wf(40, 'upper'),
		own2: wf(40, 'own'),
		kept: wf(40, 'kept'),
		stops: wf(40, 'stops'),
		four: wf(41, 'four'),
		single: wf(41, 'single'),
		done: wf(41, 'done'),
		margin2: wf(42, 'margin'),
		error: wf(42, 'error'),
		built: wf(42, 'built'),
		steel: wf(42, 'steel'),
	};
	const docA = M.accident - 20;
	const docB = sf(39) - 6;
	const end = sf(43) - 4;
	const cam = camAt(f, [
		{f: a, yaw: 0.5, pitch: 0.2, dist: 135, ty: 29, cx: 760},
		{f: M.one, yaw: 0.35, pitch: 0.14, dist: 128, ty: 29, cx: 760},
		{f: end, yaw: 0.28, pitch: 0.12, dist: 124, ty: 29, cx: 760},
	]);
	// "One lower bolt, on its own": the other three come out between "one" and "own"
	const out = (s0: number) => 1 - tween(f, s0, s0 + 24, 0, 1, ease.camera);
	const back = (s0: number) => tween(f, s0, s0 + 24, 0, 1, ease.arrive);
	let bolts: Record<BoltId, number> = allBolts(1);
	if (f >= M.one - 10 && f < M.two - 10) bolts = {upperFwd: out(M.one - 6), upperAft: out(M.one + 16), lowerAft: out(M.own - 20), lowerFwd: 1};
	// "The two upper bolts, on their own": one swap on "two": the lower bolt out as the uppers go back, so the
	// readout goes 1 -> 2 and never passes 3 (forensic review r3b: it read 3 OF 4 for about a second)
	if (f >= M.two - 10 && f < M.four - 10) bolts = {upperFwd: back(M.two - 10), upperAft: back(M.two - 4), lowerAft: 0, lowerFwd: out(M.two - 12)};
	// "Four bolts": all back
	if (f >= M.four - 10) bolts = {upperFwd: 1, upperAft: 1, lowerAft: back(M.four - 14), lowerFwd: back(M.four - 8)};
	const physical = BOLT_IDS.filter((id) => bolts[id] > 0.5).length;
	// the number is the state the narration names: 2 from "two" until all four come back
	const count = f >= M.two && f < M.four - 10 ? 2 : physical;
	const state: PlugState = {...defaultState, stopGlow: 0.35 + 0.65 * flash(f, M.stops, 0), boltGlow: Math.min(1, 0.7 + 0.3 * flash(f, M.steel, 0)), bolts};
	const sub = f >= M.four ? 'MARGIN: 4 WHERE 1 HOLDS' : f >= M.kept ? 'TWO UPPER ALONE: KEPT ON ITS STOPS' : f >= M.two ? 'TESTING: TWO UPPER BOLTS' : f >= M.held ? 'ONE LOWER BOLT ALONE: HELD' : f >= M.one ? 'TESTING: ONE LOWER BOLT' : 'ALL FOUR INSTALLED';
	const docO = envelope(f, docA, docB, 14, 14);
	const k = lead(f, M.done, 14);
	const lowF = anchor(state, cam, 'lowerFwd');
	const upF = anchor(state, cam, 'upperFwd');
	const upA = anchor(state, cam, 'upperAft');
	return (
		<>
			<Stage start={a} end={end} labels={['ILLUSTRATION']}>
				<PlugSvg
					cam={cam}
					state={state}
					extra={
						<>
							<BracketLock f={f} fps={fps} word={M.lower} x={lowF.x - 30} y={lowF.y - 30} w={60} h={60} tone="cyan" until={M.two} />
							<BracketLock f={f} fps={fps} word={M.upper} x={upF.x - 30} y={upF.y - 30} w={60} h={60} tone="cyan" until={M.four} />
							<BracketLock f={f} fps={fps} word={M.upper + 6} x={upA.x - 30} y={upA.y - 30} w={60} h={60} tone="cyan" until={M.four} />
							<BracketLock f={f} fps={fps} word={M.single} x={lowF.x - 30} y={lowF.y - 30} w={60} h={60} tone="amber" />
						</>
					}
				/>
				<div style={{position: 'absolute', left: 1340, top: 180, width: 420, opacity: envelope(f, M.margin - 10, end, 14, 14), background: colors.card, border: `1px solid ${colors.cyan}`, padding: '14px 20px 14px', fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, M.margin, colors.ink)}}>UPWARD RETENTION</div>
					<div style={{fontSize: 34, fontWeight: 700, color: colors.cyan, marginTop: 6, display: 'inline-block', transform: `scale(${Math.max(bump(f, fps, M.held + LAND), bump(f, fps, M.down + LAND), bump(f, fps, M.kept + LAND)).toFixed(4)})`, transformOrigin: '0 50%'}}>HOLDS</div>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 6}}>{sub}</div>
				</div>
				<div style={{position: 'absolute', left: 1380, top: 420, width: 380, fontFamily: mono, opacity: envelope(f, M.one - 10, end, 14, 10)}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>BOLTS INSTALLED</div>
					<div style={{display: 'flex', gap: 10, marginTop: 10}}>
						{BOLT_IDS.map((id) => (
							<div key={id} style={{width: 72, height: 18, background: bolts[id] > 0.5 ? colors.amber : 'transparent', border: `1px solid ${colors.amber}`, opacity: 0.4 + 0.6 * bolts[id]}} />
						))}
					</div>
					<div style={{fontSize: 30, fontWeight: 700, color: colors.ink, marginTop: 10, display: 'inline-block', transform: `scale(${Math.max(bump(f, fps, M.own + LAND), bump(f, fps, M.four + LAND)).toFixed(4)})`, transformOrigin: '0 50%'}}>{count} OF 4</div>
				</div>
				{/* "Four bolts, where a single lower bolt would have done. / A margin of error, built in steel." */}
				<div style={{position: 'absolute', left: 1340, top: 560, fontFamily: sans, fontWeight: 700, fontSize: 44, letterSpacing: 4, color: colors.ink, opacity: k, transform: `translateY(${((1 - k) * 20).toFixed(1)}px) scale(${bump(f, fps, M.margin2 + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>
					4 WHERE 1 HOLDS
				</div>
				<div style={{position: 'absolute', left: 1340, top: 630, width: 460, fontFamily: mono, fontSize: 30, letterSpacing: 1.6, lineHeight: 1.4, color: colors.amber}}>
					<WordLine f={f} fps={fps} words={[['A MARGIN OF ERROR,', M.error], ['BUILT', M.built], ['IN STEEL', M.steel]]} />
				</div>
				<div style={{position: 'absolute', left: 1340, top: 730, width: 460, fontFamily: mono, fontSize: 26, letterSpacing: 1, lineHeight: 1.3, color: colors.sub, opacity: k}}>BOEING ENGINEERING REVIEW · REPORTED IN NTSB AIR-25-04 P. 33</div>
			</Stage>
			{docO > 0 ? (
				<AbsoluteFill style={{opacity: docO}}>
					<AbsoluteFill style={{background: 'rgba(10,13,18,0.75)'}} />
					<Exhibit page={{w: 1870, h: 2420}} start={docA} push={{from: M.worked - 10, to: docB - 20, focus: {x: 140, y: 360, w: 1600, h: 330}}} highlights={phrases.one_bolt.rects.map((r, i) => ({...r, start: [M.many, M.bolts, M.needed, M.needed + 16][i] - 15, draw: 24}))} label="EXHIBIT 02" source="NTSB AIR-25-04 · P. 33 · DESIGN CAPABILITY WITH VARIOUS MISSING BOLTS">
						<Img src={media('pages/p047_design_capability.jpg')} style={{width: 1870, height: 2420}} />
					</Exhibit>
					<div style={{position: 'absolute', left: 150, top: 960, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '8px 14px', opacity: on(f, M.engineers, 10), ...litStyle(f, M.engineers, colors.ink)}}>
						BOEING ENGINEERING · AFTER THE ACCIDENT
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ---------- all four missing (C15)
const Missing: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(43) - 8;
	const gone = wf(43, 'four') - 6;
	const N = {airplane: wf(43, 'airplane'), missing: wf(43, 'missing')};
	const end = sf(44) + 10;
	const cam = camAt(f, [
		{f: a, yaw: 0.28, pitch: 0.12, dist: 124, ty: 29, cx: 760},
		{f: end, yaw: 0.2, pitch: 0.1, dist: 112, ty: 29, cx: 820},
	]);
	const v = 1 - tween(f, gone, gone + 26, 0, 1);
	const state: PlugState = {...defaultState, stopGlow: 0.25, boltGlow: 1, bolts: allBolts(1), boltOpacity: v, emptyHoles: tween(f, gone + 14, N.missing + LAND, 0, 1)};
	return (
		<Stage start={a} end={end}>
			<PlugSvg cam={cam} state={state} />
			<Readout start={a} end={end} title={f >= N.airplane ? 'N704AL · LEFT PLUG' : 'UPWARD RETENTION'} value={f >= N.missing ? 'NONE' : 'HOLDS'} sub={f >= N.missing ? '0 OF 4 BOLTS' : 'MARGIN: 4 WHERE 1 HOLDS'} tone={f >= N.missing ? 'red' : 'cyan'} y={180} />
		</Stage>
	);
};

// ---------- the holes (C15, C71): NTSB laboratory photographs, unaltered; brackets on the record's own callouts
const Holes: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const H = {
		investigators: wf(44, 'investigators'),
		tell: wf(44, 'tell'),
		holes: wf(44, 'holes'),
		none: wf(45, 'none'),
		mark: wf(45, 'mark'),
		bolt: wf(45, 'bolt'),
		faint: wf(46, 'faint'),
		upper: wf(46, 'upper'),
		holes2: wf(46, 'holes'),
		washers: wf(46, 'washers'),
		there: wf(46, 'there'),
		bolts: wf(47, 'bolts'),
		fitted: wf(47, 'fitted'),
		taken: wf(47, 'taken'),
	};
	const a = sf(44) - 14;
	const swap = H.faint - 14;
	const end = sf(48) + 40; // fades out under the question, never onto a bare desk
	const F13 = {x: 0, y: 90, w: 1289, h: 606};
	const F12 = {x: 0, y: 40, w: 839, h: 395};
	// the four bolt holes the NTSB's own arrows point to
	const holes13: [number, number][] = [
		[300, 325],
		[965, 325],
		[340, 615],
		[945, 615],
	];
	return (
		<>
			<Photo
				src={media('img/fig13_arrestor_bolt_holes.jpg')}
				iw={1289}
				ih={793}
				start={a}
				end={swap + 16}
				source="NTSB AIR-25-04 · FIG. 13 · VERTICAL MOVEMENT ARRESTOR BOLT HOLES"
				tag="FIG. 13"
				from={F13}
				to={F13}
				path={[
					{frame: a, r: F13},
					{frame: H.holes + 12, r: {x: 60, y: 160, w: 1170, h: 550}},
					{frame: swap + 16, r: {x: 120, y: 200, w: 1050, h: 494}},
				]}
			>
				{({sx, sy}) => (
					<svg width={1620} height={786} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
						{holes13.map(([x, y], i) => (
							<BracketLock key={i} f={f} fps={fps} word={H.holes + i * 6} arm={22} x={sx(x - 45)} y={sy(y - 35)} w={sx(x + 45) - sx(x - 45)} h={sy(y + 35) - sy(y - 35)} tone={f >= H.mark ? 'red' : 'cyan'} />
						))}
					</svg>
				)}
			</Photo>
			<div style={{position: 'absolute', left: 72, top: 960, fontFamily: mono, fontSize: 30, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', whiteSpace: 'nowrap', opacity: envelope(f, H.investigators - 6, swap, 10, 12)}}>
				<span style={litStyle(f, H.investigators, colors.ink)}>NTSB LABORATORY</span>
				<span style={{opacity: on(f, H.tell, 8), color: colors.ink}}> · THE BOLT HOLES</span>
				<span style={{opacity: on(f, H.none, 8), color: colors.red}}> · NO BOLT CONTACT DAMAGE</span>
				<span style={{opacity: on(f, H.bolt, 8), color: colors.red, display: 'inline-block', transform: `scale(${bump(f, fps, H.bolt + LAND).toFixed(4)})`}}>&nbsp;· IN ANY OF THEM</span>
			</div>
			<Photo
				src={media('img/fig12_upper_guide_fitting.jpg')}
				iw={839}
				ih={966}
				start={swap}
				end={end}
				source="NTSB AIR-25-04 · FIG. 12 · UPPER GUIDE FITTING, BOLT HOLES"
				tag="FIG. 12"
				from={F12}
				to={F12}
				path={[
					{frame: swap, r: F12},
					{frame: H.upper + 10, r: {x: 0, y: 60, w: 560, h: 264}},
					{frame: end, r: {x: 40, y: 80, w: 480, h: 226}},
				]}
			>
				{({sx, sy}) => (
					<svg width={1620} height={786} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
						<BracketLock f={f} fps={fps} word={H.holes2} arm={26} x={sx(110)} y={sy(150)} w={sx(350) - sx(110)} h={sy(300) - sy(150)} tone="amber" />
					</svg>
				)}
			</Photo>
			<div style={{position: 'absolute', left: 72, top: 960, fontFamily: mono, fontSize: 30, letterSpacing: 1.6, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', whiteSpace: 'nowrap', opacity: envelope(f, H.faint - 6, end, 10, 14)}}>
				<span style={{opacity: on(f, H.bolts, 8), ...litStyle(f, H.bolts, colors.ink)}}>THE BOLTS · </span>
				<span style={litStyle(f, H.washers, colors.amber)}>FAINT WASHER OUTLINES</span>
				<span style={{opacity: on(f, H.there, 8), color: colors.amber}}> · UPPER HOLES</span>
				<span style={{opacity: on(f, H.fitted, 8), ...litStyle(f, H.fitted, colors.cyan)}}> · FITTED</span>
				<span style={{opacity: on(f, H.taken, 8), ...litStyle(f, H.taken, colors.red)}}> · THEN TAKEN OUT</span>
			</div>
		</>
	);
};

// ---------- the question (framing)
const Question: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(48) - 10;
	const end = ef(48) + 120;
	const {fps} = useVideoConfig();
	const o = envelope(f, a, end, 16, 24);
	return (
		<AbsoluteFill style={{opacity: o, alignItems: 'center', justifyContent: 'center'}}>
			<div style={{fontFamily: sans, fontWeight: 700, fontSize: 56, letterSpacing: 1, color: colors.ink, textAlign: 'center', lineHeight: 1.3}}>
				<div style={{fontFamily: mono, fontSize: 30, letterSpacing: 3, color: colors.sub, marginBottom: 20}}>
					<span style={{opacity: on(f, wf(48, 'question'), 10), ...litStyle(f, wf(48, 'question'), colors.ink)}}>THE QUESTION</span>
					<span style={{opacity: on(f, wf(48, 'became'), 10), color: colors.amber}}> BECAME</span>
				</div>
				<WordLine f={f} fps={fps} words={[['WHO', wf(48, 'who')], ['TOOK', wf(48, 'took')], ['THEM', wf(48, 'them')], ['OUT,', wf(48, 'out')]]} />
				<br />
				<WordLine f={f} fps={fps} words={[['AND', wf(48, 'and')], ['WHY', wf(48, 'why')], ['WERE', wf(48, 'were')], ['THEY', wf(48, 'they')], ['NEVER', wf(48, 'never')], ['PUT', wf(48, 'put')], ['BACK?', wf(48, 'back')]]} />
			</div>
		</AbsoluteFill>
	);
};

const ActIII: React.FC = () => <ActTitle n="III" title="The Boardroom" start={ef(48) + 110} end={sf(49) + 40} sub="THE FACTORY RECORD" />;

export const act2: SceneDef[] = [
	{id: 'opening', from: sf(23) - 40, to: sf(25) + 30, C: Opening, cues: [{frame: wf(23, 'each'), sfx: 'pen_scratch', gainDb: -18}, {frame: sf(24) - 10, sfx: 'relay_click', gainDb: -16}]},
	{id: 'restraints', from: sf(25) - 20, to: sf(29) + 20, C: Restraints, cues: [...Array.from({length: 6}, (_, i) => ({frame: wf(27, 'twelve') + i * 24, sfx: 'relay_click' as const, gainDb: -18})), {frame: wf(27, 'moving'), sfx: 'whoosh' as const, gainDb: -20}]},
	{id: 'onedir', from: sf(29) - 20, to: sf(32) + 16, C: OneDirection, cues: [{frame: wf(30, 'clear'), sfx: 'relay_click', gainDb: -12}]},
	{id: 'fourbolts', from: sf(32) - 20, to: sf(37) + 20, C: FourBolts, cues: [{frame: wf(33, 'two'), sfx: 'relay_click', gainDb: -12}, {frame: wf(34, 'two'), sfx: 'relay_click', gainDb: -12}, {frame: wf(36, 'moving'), sfx: 'metal_snap_sub', gainDb: -20}]},
	{id: 'margin', from: sf(37) - 20, to: sf(43) + 6, C: Margin, cues: [{frame: wf(38, 'accident') - 20, sfx: 'paper_slide', gainDb: -14}, {frame: wf(38, 'many') - 15, sfx: 'highlighter', gainDb: -16}, {frame: wf(39, 'one') - 6, sfx: 'relay_click', gainDb: -16}, {frame: wf(39, 'one') + 16, sfx: 'relay_click', gainDb: -16}, {frame: wf(39, 'own') - 20, sfx: 'relay_click', gainDb: -16}, {frame: wf(41, 'four') - 10, sfx: 'relay_click', gainDb: -14}, {frame: wf(41, 'done'), sfx: 'stamp', gainDb: -14}]},
	{id: 'missing', from: sf(43) - 16, to: sf(44) + 20, C: Missing, cues: [{frame: wf(43, 'four') - 6, sfx: 'metal_snap_sub', gainDb: -10}]},
	{id: 'holes', from: sf(44) - 24, to: sf(48) + 50, C: Holes, cues: [{frame: sf(44), sfx: 'paper_slide', gainDb: -16}]},
	{id: 'question', from: sf(48) - 20, to: ef(48) + 130, C: Question},
	{id: 'act3title', from: ef(48) + 100, to: sf(49) + 50, C: ActIII, cues: [{frame: ef(48) + 110, sfx: 'whoosh', gainDb: -20}]},
];

