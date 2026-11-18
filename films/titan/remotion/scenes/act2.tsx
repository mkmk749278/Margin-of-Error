import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, flash, LAND, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {ActTitle, media, Mount, Photo, useFilmFrame} from '../kit';
import {beatScale, camAt, dolly, Hull3D} from '../hull3d';
import {Card, Chip, clamp, lit, RealFootage, sans, span, T, vis} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT II · THE MECHANISM (sentences 22–57). Choreography: scenes/choreography/act2.md (generated from this file).
// Real footage carries the place and the machine; drawings carry the mechanism, labelled.

const fmt = (v: number): string => Math.round(v).toLocaleString('en-US');

// ── 1 · 3,840 metres: the pressure (s22) ────────────────────────────────────────────────────────────────────────

const Pressure: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const depth = rollTo(f, [{frame: wf(23, 'three') - 10, value: 0}, {frame: wf(23, 'thousand') + LAND, value: 3000}, {frame: wf(23, 'eight') + LAND, value: 3800}, {frame: wf(23, 'hundred') + LAND, value: 3800}, {frame: wf(23, 'forty') + LAND, value: 3840}]);
	const times = rollTo(f, [{frame: wf(23, 'three', 1) - 12, value: 1}, {frame: wf(23, 'hundred', 1) + LAND, value: 300}, {frame: wf(23, 'eighty') + LAND, value: 380}]);
	const psi = lead(f, wf(23, 'pressure'), 10);
	const press = lead(f, wf(23, 'presses'), 14);
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(23) - 30, sf(24) + 200)}}>
				<ActTitle n="II" title="The Mechanism" start={hold(22).from + 10} end={sf(23) + 10} />
			</AbsoluteFill>
			<RealFootage f={f} start={sf(23) - 4} end={ef(23) + 34} src="footage/noaa_bow.mp4" date="2004" what="THE TITANIC'S BOW, ≈3,800 M DOWN" source="NOAA · PUBLIC DOMAIN" push={0.05} focus={[0.55, 0.45]} box={{x: 96, y: 120, w: 1260, h: 709}} under />
			<Card x={1390} y={120} w={434} o={Math.min(lead(f, wf(23, 'three'), 10), 1 - lead(f, ef(23) + 30, 12))} style={{padding: '22px 26px', minHeight: 650}}>
				<div style={T(26, {color: colors.sub, letterSpacing: 3})}>DEPTH</div>
				<div style={{...T(64, {color: colors.ink, fontWeight: 700})}}>
					{fmt(depth)}
					<span style={{fontSize: 34, color: colors.sub}}> M</span>
				</div>
				<div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf(23, 'presses'), colors.amber), opacity: lead(f, wf(23, 'ocean'), 8)}}>{f >= wf(23, 'surface') ? 'ON EVERY SURFACE' : f >= wf(23, 'presses') ? 'THE OCEAN PRESSES' : 'THE OCEAN'}</div>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4, opacity: press}}>
					<span style={{...T(64, {color: colors.amber, fontWeight: 700}), transform: `scale(${bump(f, fps, wf(23, 'eighty') + LAND).toFixed(4)})`, display: 'inline-block', transformOrigin: '0 60%'}}>≈ {fmt(times)}×</span>
				</div>
				<div style={{...T(28, lit(f, wf(23, 'times'), colors.ink)), opacity: press}}>THE PRESSURE AT THE SURFACE</div>
				<div style={{marginTop: 26, opacity: psi, ...T(40, {color: colors.ink, fontWeight: 700})}}>5,627 PSI</div>
				<div style={{opacity: psi, ...T(30, {color: colors.ink})}}>38.8 MPA</div>
			</Card>
		</>
	);
};

// ── 2 · How it was built (s24–s26): the 3D hull from the record; the wall's five layers in the NTSB's own section ─────

const Build: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(24, 'built'), wf(24, 'submersibles'), wf(24, 'usually'), wf(25, 'hull'), wf(25, 'cylinder'), wf(25, 'carbon'), wf(25, 'fibre'), wf(25, 'five'), wf(25, 'each'), wf(25, 'thick'), wf(25, 'bonded'), wf(25, 'one'), wf(25, 'next'), wf(26, 'rings'), wf(26, 'each'), wf(26, 'titanium', 1), wf(26, 'domes'), wf(26, 'bolted')];
	const cam = dolly(camAt(f, [
		{f: sf(24) - 16, cam: {pos: [34, 11, -2], look: [0, -0.5, -5], fov: 32}},
		{f: wf(24, 'usually'), cam: {pos: [32, 11, 0], look: [0, -0.5, -4.5], fov: 32}},
		{f: wf(25, 'cylinder'), cam: {pos: [14, 10, 20], look: [0, -0.3, 0.6], fov: 30}},
		{f: wf(25, 'five'), cam: {pos: [9, 11, 13], look: [0, 1.6, 2.2], fov: 28}},
		{f: wf(25, 'bonded') + 30, cam: {pos: [7.5, 10.5, 12], look: [0, 2, 2.6], fov: 27}},
		{f: wf(26, 'titanium'), cam: {pos: [12, 8, 19], look: [0, 0, 3], fov: 30}},
		{f: wf(26, 'domes'), cam: {pos: [10, 6, 21], look: [0, 0, 4.6], fov: 30}},
		{f: ef(26) + 30, cam: {pos: [9, 6, 21.5], look: [0, 0, 4.8], fov: 30}},
	]), f, BEATS);
	const sphere = lead(f, wf(24, 'deep'), 12) * (1 - lead(f, wf(25, 'cylinder'), 16));
	const hullO = 0.35 + 0.65 * lead(f, wf(24, 'titan'), 10) * (1 - 0.6 * sphere);
	const cut = interpolate(f, [wf(25, 'five') - 16, wf(25, 'five') + 20], [0, 0.6], {...clamp, easing: ease.camera});
	const inter = lead(f, wf(25, 'bonded'), 10);
	const photoO = Math.min(lead(f, wf(25, 'layers'), 12), 1 - lead(f, wf(26, 'titanium') - 6, 12));
	const drawO = Math.min(lead(f, wf(26, 'rings'), 12), 1 - lead(f, ef(26) + 24, 12));
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={cut} g4={0} sensors={0} interfaces={inter} sphere={sphere} hullO={hullO} ringsLit={lead(f, wf(26, 'rings'), 10) * (1 - 0.5 * lead(f, wf(26, 'domes'), 10))} domesLit={lead(f, wf(26, 'domes'), 10)} bench={1} />
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 16}}>
				<div style={{opacity: sphere}}><Chip text="THE USUAL DEEP HULL: A SPHERE" tone={colors.sub} size={30} /></div>
				<div style={{opacity: lead(f, wf(25, 'carbon'), 8), transform: `scale(${bump(f, fps, wf(25, 'carbon')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="CARBON FIBRE CYLINDER" tone={colors.cyan} size={30} /></div>
				<div style={{opacity: lead(f, wf(25, 'inch'), 8), transform: `scale(${bump(f, fps, wf(25, 'inch')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="5 × ~1 IN = 5 IN WALL" tone={colors.ink} size={30} /></div>
			</div>
			{photoO > 0 ? (
				<AbsoluteFill style={{opacity: photoO}}>
					<Photo src={media('photos/layers_section.jpg')} iw={814} ih={546} start={wf(25, 'layers') - 12} end={wf(26, 'titanium')} source="TITAN'S CUT-OFF END, IN SECTION · NTSB MATERIALS LAB REPORT 24-012" from={{x: 0, y: 0, w: 814, h: 546}} to={{x: 60, y: 40, w: 700, h: 470}} box={{x: 1000, y: 170, w: 820, h: 620}} labels={['NTSB PHOTO']} />
				</AbsoluteFill>
			) : null}
			{drawO > 0 ? (
				<AbsoluteFill style={{opacity: drawO}}>
					<Photo src={media('photos/ntsb_cyl_drawing.jpg')} iw={1950} ih={1323} start={wf(26, 'rings') - 12} end={ef(26) + 30} source="CYLINDER AND TITANIUM END SEGMENTS · NTSB MIR-25-36 FIG. 2" from={{x: 0, y: 0, w: 1950, h: 1323}} to={{x: 80, y: 40, w: 1700, h: 1150}} box={{x: 1060, y: 170, w: 760, h: 560}} labels={['NTSB DRAWING']} />
				</AbsoluteFill>
			) : null}
			<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · HULL FROM NTSB MIR-25-36, USCG ROI</div>
		</>
	);
};

// ── 3 · Why carbon fibre, as reported (s27–s28): real fibre placement; only the attribution is on screen ──────────

const WhyCarbon: React.FC = () => {
	const f = useFilmFrame();
	const split = wf(28, 'lighter');
	// the camera finds a new detail on each belief, so the picture moves with the sentence (no list on screen)
	const push = (a: number, b: number) => 0.05 * span(f, a, b);
	const k1 = 1 + push(wf(27, 'chose'), wf(27, 'fibre') + 20) + push(wf(27, 'compression'), wf(27, 'tension') + 20);
	const k2 = 1 + push(wf(28, 'buoyancy') - 10, wf(28, 'buoyancy') + 30) + push(wf(28, 'launched'), wf(28, 'ship') + 20) + push(wf(28, 'carry'), wf(28, 'people') + 30);
	const attrib = Math.min(lead(f, wf(27, 'according'), 10), 1 - lead(f, ef(28) + 26, 12));
	const bs = beatScale(f, [wf(27, 'director'), wf(27, 'operations'), wf(27, "company's"), wf(27, 'executive'), wf(27, 'carbon'), wf(27, 'fibre'), wf(27, 'believed'), wf(27, 'better'), wf(27, 'compression'), wf(27, 'tension'), wf(28, 'believed'), wf(28, 'was'), wf(28, 'lighter'), wf(28, 'need'), wf(28, 'buoyancy'), wf(28, 'be'), wf(28, 'more'), wf(28, 'instead'), wf(28, 'purpose-built'), wf(28, 'one'), wf(28, 'more', 1)]);
	return (
		<>
			<AbsoluteFill style={{transform: `scale(${(k1 * bs).toFixed(4)})`, transformOrigin: '40% 45%'}}>
				<RealFootage f={f} start={sf(27) - 14} end={split + 14} src="footage/afp_place.mp4" date="" what="CARBON-FIBRE MATERIAL LAID BY MACHINE · REFERENCE, NOT TITAN" source="TECNALIA / YOUTUBE · CC BY" push={0.06} />
			</AbsoluteFill>
			<AbsoluteFill style={{transform: `scale(${(k2 * bs).toFixed(4)})`, transformOrigin: '60% 40%'}}>
				<RealFootage f={f} start={split} end={ef(28) + 30} src="footage/afp_robot.mp4" from={1.4} date="" what="AUTOMATED COMPOSITE MANUFACTURING · REFERENCE, NOT TITAN" source="TECNALIA / YOUTUBE · CC BY" push={0.06} />
			</AbsoluteFill>
			<div style={{position: 'absolute', left: 96, top: 120, opacity: attrib, padding: '14px 22px', background: 'rgba(10,13,18,0.8)', borderLeft: `3px solid ${colors.amber}`}}>
				<div style={T(30, {color: f >= wf(27, 'operations') ? colors.amber : colors.ink})}>ACCORDING TO A FORMER DIRECTOR OF MARINE OPERATIONS</div>
				<div style={{marginTop: 6, ...T(26, {color: f >= wf(27, 'believed') ? colors.ink : colors.sub})}}>THE CEO'S REASONS, AS HE DESCRIBED THEM · NTSB MIR-25-36 P. 25</div>
			</div>
		</>
	);
};

// ── 4 · How strong was it? The unmeasured margin (s28–s46): the gauge, every line on its word ─────────────────────

const G = {x: 260, top: 240, bottom: 860, max: 14000};
const gy = (m: number): number => G.top + (m / G.max) * (G.bottom - G.top);

const GaugeLine: React.FC<{f: number; fps: number; m: number; at: number; label: string; tone: string; dash?: boolean; out?: number; w?: number; sub?: string}> = ({f, fps, m, at, label, tone, dash = true, out, w = 420, sub}) => {
	const k = lead(f, at, 14);
	const o = out === undefined ? 1 : 1 - lead(f, out, 14);
	if (k <= 0) return null;
	return (
		<>
			<line x1={G.x - 40} x2={G.x - 40 + w * k} y1={gy(m)} y2={gy(m)} stroke={tone} strokeWidth={3} strokeDasharray={dash ? '10 8' : undefined} opacity={o} />
			<text x={G.x - 40 + w + 16} y={gy(m) + 10} style={{...T(30, {fill: tone, fontWeight: 700})}} opacity={o * k} transform={`scale(1)`}>
				{label}
			</text>
			{sub ? (
				<text x={G.x - 40 + w + 16} y={gy(m) + 44} style={T(26, {fill: colors.ink})} opacity={o * k}>
					{sub}
				</text>
			) : null}
			<circle cx={G.x - 40} cy={gy(m)} r={7 * bump(f, fps, at + LAND, 0.4)} fill={tone} opacity={o} />
		</>
	);
};

const Margin: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const factorFlip = wf(31, 'one');
	// the analysis line slides from 13,500 to 7,500 on its words (one driver for the line and its readout)
	const target = rollTo(f, [
		{frame: wf(30, 'thirteen') - 14, value: 6000},
		{frame: wf(30, 'half') + LAND, value: 13500},
		{frame: wf(32, 'seven') - 6, value: 13500},
		{frame: wf(32, 'hundred') + LAND, value: 7500},
	]);
	const targetO = lead(f, wf(30, 'thirteen'), 12);
	const ghost = lead(f, wf(34, 'perfect'), 14);
	const unlikely = lead(f, wf(47, 'unlikely'), 14);
	const neverLine = interpolate(f, [wf(46, 'tested') - 10, wf(46, 'failure') + 20, hold(46).from + hold(46).frames], [0, 0.42, 0.42], clamp);
	const testLine = lead(f, wf(41, 'four'), 12);
	// the right half: the hull and its models, then the record's own photographs of the 2021 tests
	const R = {x: 980, y: 150, w: 840, h: 660};
	const photoWin = (a: number, b: number) => vis(f, a, b, 12, 12);
	const hullO = 1 - Math.max(photoWin(sf(40) - 10, ef(41) + 4), photoWin(sf(42) - 10, ef(43) + 4), photoWin(sf(45) - 10, ef(45) + 6));
	const BEATS = [wf(29, 'strong'), wf(30, 'original'), wf(30, 'goal'), wf(30, 'rated'), wf(30, 'six'), wf(30, 'thousand'), wf(30, 'metres'), wf(30, 'safety'), wf(30, 'factor'), wf(30, 'two'), wf(30, 'point'), wf(30, 'two', 1), wf(30, 'five'), wf(30, 'a', 2), wf(30, 'should'), wf(30, 'until'), wf(30, 'thirteen'), wf(30, 'half'), wf(30, 'thousand', 1), wf(31, 'transportation'), wf(31, 'safety'), wf(31, 'found'), wf(31, 'oceangate'), wf(31, 'changed'), wf(31, 'factor'), wf(31, 'one'), wf(31, 'point'), wf(31, 'two'), wf(31, 'five'), wf(32, 'hull'), wf(32, 'carbon'), wf(32, 'cylinder'), wf(32, 'hold'), wf(32, 'seven'), wf(32, 'thousand'), wf(32, 'five'), wf(32, 'hundred'), wf(32, 'metres'), wf(32, 'six'), wf(32, 'thousand', 1), wf(32, 'times'), wf(32, 'one'), wf(32, 'point'), wf(32, 'two'), wf(32, 'five', 1), wf(33, 'depth'), wf(33, 'titanic'), wf(34, 't'), wf(34, 'noted'), wf(34, 'analysis'), wf(34, 'assumed'), wf(34, 'geometry'), wf(34, 'perfectly'), wf(34, 'fibres'), wf(34, 'not'), wf(34, 'actually'), wf(35, 'built'), wf(35, 'materials'), wf(35, 'imploded'), wf(35, 'or'), wf(35, 'imploded', 1), wf(35, 'shallower'), wf(35, 'three'), wf(35, 'thousand'), wf(36, 'those'), wf(36, 'wrinkles'), wf(36, 'carbon'), wf(36, 'changed'), wf(36, 'prevent'), wf(37, 'method'), wf(37, 'bonding'), wf(37, 'layers'), wf(37, 'one'), wf(37, 'next'), wf(37, 'never'), wf(37, 'model'), wf(38, 'investigators'), wf(38, 'found'), wf(38, 'model'), wf(38, 'built'), wf(38, 'discussed'), wf(38, 'was', 1), wf(38, 'built', 1), wf(38, 'order'), wf(39, 'one'), wf(39, 'built'), wf(39, 'hull'), wf(39, 'people'), wf(40, 'twenty'), wf(40, 'twenty-one'), wf(40, 'that'), wf(40, 'pressure'), wf(40, 'facility'), wf(40, 'maryland'), wf(41, 'going'), wf(41, 'four'), wf(41, 'thousand'), wf(41, 'two'), wf(41, 'hundred'), wf(41, 'three'), wf(41, 'four', 1), wf(41, 'days'), wf(42, 'logbook'), wf(42, 'reached'), wf(42, 'once'), wf(43, 'first'), wf(43, 'march'), wf(43, 'twenty'), wf(44, 'done'), wf(44, 'company'), wf(44, 'test'), wf(44, 'limited'), wf(44, 'titanium'), wf(44, 'dome'), wf(44, 'the', 2), wf(45, 'days'), wf(45, 'hull'), wf(45, 'four'), wf(45, 'thousand'), wf(45, 'metres'), wf(45, 'then'), wf(45, 'three'), wf(45, 'thousand', 1), wf(45, 'eight'), wf(45, 'hundred'), wf(45, 'forty'), wf(45, 'four', 1), wf(45, 'twice'), wf(46, 'tested'), wf(47, 'found'), wf(47, 'unlikely'), wf(47, 'hull'), wf(47, 'strength'), wf(47, 'predicted'), wf(47, 'that', 1), wf(47, 'company'), wf(47, 'know'), wf(47, 'strength', 1)];
	const bs = beatScale(f, BEATS, 0.02);
	const cam = dolly(camAt(f, [
		{f: sf(29) - 14, cam: {pos: [36, 15, 30], look: [1, -1, 0], fov: 30}},
		{f: wf(34, 'perfect'), cam: {pos: [32, 14, 27], look: [1, -0.6, 0.5], fov: 30}},
		{f: wf(34, 'built'), cam: {pos: [20, 17, 18], look: [0, 1, 1.5], fov: 30}},
		{f: wf(35, 'scale'), cam: {pos: [26, 11, 20], look: [4, -2.4, 0], fov: 30}},
		{f: wf(37, 'bonding'), cam: {pos: [22, 16, 19], look: [1.5, 0.4, 1], fov: 30}},
		{f: wf(38, 'scale'), cam: {pos: [22, 9, 12], look: [5, -2.6, -3], fov: 30}},
		{f: wf(39, 'hull'), cam: {pos: [34, 14, 28], look: [1, -0.8, 0.4], fov: 30}},
		{f: wf(44, 'titanium'), cam: {pos: [22, 8, 30], look: [0, 0, 4.5], fov: 30}},
		{f: wf(46, 'never'), cam: {pos: [36, 15, 30], look: [1, -1, 0], fov: 30}},
	]), f, BEATS);
	const cut = Math.max(lead(f, wf(34, 'built'), 14) * (1 - lead(f, wf(35, 'scale'), 14)), lead(f, wf(37, 'bonding'), 14) * (1 - lead(f, wf(38, "canada's"), 14))) * 0.6;
	const models = [
		{o: lead(f, wf(35, 'scale'), 10), fail: lead(f, wf(35, 'imploded'), 6)},
		{o: lead(f, wf(35, 'models'), 10), fail: 0.55 * lead(f, wf(35, 'nearly'), 6)},
		{o: lead(f, wf(37, 'never'), 10) * (1 - lead(f, wf(38, 'not'), 18)), fail: 0, ghost: true},
	].map((m) => ({...m, o: m.o * (1 - lead(f, wf(39, 'only'), 16))}));
	return (
		<>
			<Mount x={120} y={100} w={840} h={860} start={sf(29) - 14} end={ef(47) + 40} source="NTSB MIR-25-36 · USCG MBI · TSB M23A0169" labels={['DEPTHS TO SCALE']} lean={3} />
			<div style={{position: 'absolute', left: 200, top: 120, ...T(34, lit(f, wf(29, 'strong'), colors.ink)), fontWeight: 700, opacity: lead(f, wf(29, 'how'), 10)}}>HOW STRONG WAS IT?</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<line x1={G.x - 40} x2={G.x - 40} y1={G.top} y2={G.bottom} stroke={colors.sub} strokeWidth={2} />
				{[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000].map((m) => (
					<g key={m}>
						<line x1={G.x - 52} x2={G.x - 40} y1={gy(m)} y2={gy(m)} stroke={colors.sub} strokeWidth={2} />
						<text x={G.x - 62} y={gy(m) + 9} textAnchor="end" style={T(26, {fill: colors.sub})}>{m === 0 ? '0 M' : fmt(m)}</text>
					</g>
				))}
				<GaugeLine f={f} fps={fps} m={3840} at={wf(33, 'depth')} label="THE TITANIC · 3,840 M" tone={colors.cyan} dash={false} w={200} />
				<GaugeLine f={f} fps={fps} m={6000} at={wf(30, 'six')} label={f >= wf(30, 'thousand') ? '6,000 M · DESIGN GOAL' : '6,'} tone={colors.ink} w={200} out={wf(32, 'analysis')} />
				{targetO > 0 ? (
					<g opacity={targetO * (1 - 0.7 * unlikely)}>
						<line x1={G.x - 40} x2={G.x + 160} y1={gy(target)} y2={gy(target)} stroke={colors.amber} strokeWidth={3} strokeDasharray={ghost > 0 ? '4 10' : '10 8'} />
						<text x={G.x + 176} y={gy(target) + 10} style={T(30, {fill: colors.amber, fontWeight: 700})}>≈ {fmt(target)} M</text>
						<text x={G.x + 176} y={gy(target) + 44} style={T(26, {fill: colors.ink})}>
							{f >= wf(32, 'seven') ? (ghost > 0.5 ? 'IN THEORY: PERFECT GEOMETRY' : '6,000 × 1.25: OUR ARITHMETIC') : '6,000 × 2.25: OUR ARITHMETIC'}
						</text>
					</g>
				) : null}
				{lead(f, wf(35, 'imploded'), 10) > 0 ? (
					<g opacity={lead(f, wf(35, 'imploded'), 10) * (1 - 0.6 * lead(f, wf(40, 'early'), 14))}>
						<line x1={G.x - 40} x2={G.x + 160} y1={gy(2800)} y2={gy(2800)} stroke={colors.red} strokeWidth={5} />
						<text x={G.x - 20} y={gy(2500) - 18} style={T(26, {fill: colors.red, fontWeight: 700})}>MODELS: 2,800 M · 2,500 M</text>
					</g>
				) : null}
				{testLine > 0 ? (
					<g opacity={testLine}>
						<line x1={G.x - 40} x2={G.x + 160} y1={gy(4200)} y2={gy(4200)} stroke={colors.cyan} strokeWidth={4} />
						<text x={G.x + 176} y={gy(4200) + 38} style={T(28, {fill: colors.cyan, fontWeight: 700})}>4,200 M · {f >= wf(42, 'once') ? 'REACHED ONCE' : 'PLANNED, 3 OF 4 DAYS'}</text>
						<text x={G.x + 176} y={gy(4200) + 72} style={T(26, lit(f, wf(44, 'dome'), colors.ink))} opacity={lead(f, wf(43, 'first'), 8)}>
							{f >= wf(45, 'three') ? '3,840 M: 4 H, TWICE' : f >= wf(44, 'titanium') ? 'LIMIT: A TITANIUM DOME' : '01 MAR 2021 · 20 MIN'}
						</text>
					</g>
				) : null}
				{neverLine > 0 ? (
					<g>
						<rect x={G.x - 40} y={gy(4200)} width={22} height={(gy(7500) - gy(4200)) * Math.min(1, neverLine / 0.42)} fill={colors.red} opacity={0.55} />
						<text x={G.x - 20} y={gy(9600)} style={T(30, {fill: colors.red, fontWeight: 700})} opacity={lead(f, wf(46, 'failure'), 10)}>THE HULL'S OWN LIMIT:</text>
						<text x={G.x - 20} y={gy(9600) + 38} style={T(30, {fill: colors.red, fontWeight: 700})} opacity={lead(f, wf(46, 'failure'), 10)}>NEVER MEASURED</text>
					</g>
				) : null}
			</svg>
			<div style={{position: 'absolute', left: G.x + 276, top: gy(6000) + 30, opacity: lead(f, wf(30, 'safety'), 10) * (1 - lead(f, wf(32, 'analysis'), 12))}}>
				{f < factorFlip - 8 ? (
					<span style={{...T(30, lit(f, wf(30, 'five'), colors.amber)), fontWeight: 700}}>SAFETY FACTOR × {f >= wf(30, 'two') ? (f >= wf(30, 'five') ? '2.25' : '2.') : ''}</span>
				) : (
					<span style={{display: 'flex', gap: 14, alignItems: 'center'}}>
						<span style={T(30, {color: colors.amber, fontWeight: 700})}>FACTOR</span>
						<StatusFlip f={f} fps={fps} word={factorFlip} from="× 2.25" to="× 1.25" toneFrom="amber" toneTo="amber" size={30} />
					</span>
				)}
				<div style={{marginTop: 10, opacity: lead(f, wf(31, "canada's"), 8)}}>
					<Chip text="TSB CANADA · M23A0169" tone={f >= wf(31, 'found') ? colors.ink : colors.sub} size={26} />
				</div>
			</div>
			{/* the right half: the hull and its models (ILLUSTRATION), on the bench */}
			<div style={{position: 'absolute', left: R.x - 20, top: 0, width: 1920 - R.x + 20, height: 1080, opacity: hullO}}>
				<Hull3D width={1920 - R.x + 20} height={1080} cam={cam} cut={cut} g4={0} sensors={0} interfaces={cut > 0.1 ? 1 : 0} domesLit={lead(f, wf(44, 'dome'), 10) * (1 - lead(f, wf(45, 'other'), 10))} models={models} bench={1} />
				<div style={{position: 'absolute', left: 40, top: 86, display: 'flex', gap: 12}}>
					{f < wf(35, 'scale') + 10 ? <div style={{opacity: lead(f, wf(34, 'n'), 8) * (1 - lead(f, wf(35, 'scale'), 10))}}><Chip text="NTSB · ANALYSIS ASSUMED A PERFECT HULL" tone={colors.cyan} size={26} /></div> : null}
					{f >= wf(35, 'scale') - 12 && f < wf(38, "canada's") ? <div style={{opacity: models[0].o}}><Chip text="ONE-THIRD SCALE MODELS" tone={colors.ink} size={26} /></div> : null}
					{f >= wf(38, "canada's") - 12 ? <div style={{opacity: lead(f, wf(38, "canada's"), 8) * (1 - lead(f, wf(39, 'only'), 10))}}><Chip text="TSB · NOT BUILT, TO SAVE MONEY" tone={colors.amber} size={26} /></div> : null}
				</div>
				<div style={{position: 'absolute', left: 40, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · NOT TO SCALE</div>
			</div>
			{/* 2021: the record's own photographs (DOTF, U.S. Navy facility; the board's red arrows) */}
			{photoWin(sf(40) - 10, ef(41) + 4) > 0 ? (
				<AbsoluteFill style={{opacity: photoWin(sf(40) - 10, ef(41) + 4), transform: `scale(${bs.toFixed(4)})`, transformOrigin: '70% 45%'}}>
					<Photo src={media('photos/dotf_hull.jpg')} iw={1042} ih={777} start={sf(40) - 10} end={ef(41) + 4} source="TITAN'S FINAL HULL AT THE DEEP OCEAN TEST FACILITY · 25 FEB 2021 · USCG ROI FIG. 149" from={{x: 0, y: 0, w: 1042, h: 777}} to={{x: 200, y: 140, w: 640, h: 480}} path={[{frame: sf(40), r: {x: 0, y: 0, w: 1042, h: 777}}, {frame: wf(40, 'facility'), r: {x: 120, y: 80, w: 800, h: 600}}, {frame: ef(41), r: {x: 200, y: 140, w: 640, h: 480}}]} box={R} labels={['RECORD PHOTO']} />
				</AbsoluteFill>
			) : null}
			{photoWin(sf(42) - 10, ef(43) + 4) > 0 ? (
				<AbsoluteFill style={{opacity: photoWin(sf(42) - 10, ef(43) + 4), transform: `scale(${bs.toFixed(4)})`, transformOrigin: '70% 45%'}}>
					<Photo src={media('photos/dotf_log_0301.jpg')} iw={827} ih={509} start={sf(42) - 10} end={ef(43) + 4} source="DOTF LOGBOOK · 01 MAR 2021 · ARROW ADDED BY THE MBI · USCG ROI FIG. 151" from={{x: 0, y: 0, w: 827, h: 509}} to={{x: 0, y: 170, w: 827, h: 339}} path={[{frame: sf(42), r: {x: 0, y: 0, w: 827, h: 509}}, {frame: wf(42, 'once'), r: {x: 0, y: 170, w: 827, h: 339}}]} box={R} labels={['RECORD']} />
				</AbsoluteFill>
			) : null}
			{photoWin(sf(45) - 10, ef(45) + 6) > 0 ? (
				<AbsoluteFill style={{opacity: photoWin(sf(45) - 10, ef(45) + 6), transform: `scale(${bs.toFixed(4)})`, transformOrigin: '70% 45%'}}>
					<Photo src={media('photos/dotf_log_0302.jpg')} iw={847} ih={380} start={sf(45) - 10} end={ef(45) + 6} source="DOTF LOGBOOK · 02–03 MAR 2021 · ARROWS ADDED BY THE MBI · USCG ROI FIG. 152" from={{x: 0, y: 0, w: 847, h: 380}} to={{x: 0, y: 140, w: 560, h: 240}} path={[{frame: sf(45), r: {x: 0, y: 0, w: 847, h: 380}}, {frame: wf(45, 'then'), r: {x: 0, y: 0, w: 560, h: 250}}, {frame: wf(45, 'twice'), r: {x: 0, y: 140, w: 560, h: 240}}]} box={R} labels={['RECORD']} />
				</AbsoluteFill>
			) : null}
			<div style={{position: 'absolute', left: R.x + 20, top: 86, opacity: lead(f, wf(47, 'n'), 8)}}>
				<Chip text="NTSB · FINDINGS · MIR-25-36" tone={f >= wf(47, 'know') ? colors.red : colors.cyan} size={30} />
			</div>
		</>
	);
};

// ── 5 · Listen to it (s47–s57): the acoustic monitor, its limits, its threshold ─────────────────────────────────

const Listen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	// the hull carries the whole passage; real footage cuts in on "listen" (a composite ring, reference) and on the man
	// who read the data after each dive; no sentence is written on screen
	const ringWin = vis(f, wf(49, 'listen') - 8, sf(50) + 20, 10, 12);
	const brooksWin = vis(f, wf(56, 'engineering') - 10, ef(56) + 6, 10, 12);
	const thr = vis(f, wf(57, 'alert') - 10, ef(58) + 60, 12, 14);
	const BEATS = [wf(48, 'know'), wf(49, 'answer'), wf(49, 'listen'), wf(50, 'eight'), wf(50, 'sensors'), wf(50, 'sixteen'), wf(50, 'gauges'), wf(50, 'fixed'), wf(50, 'hull'), wf(51, 'hull'), wf(51, 'went'), wf(51, 'crackle'), wf(51, 'weakened'), wf(51, 'company'), wf(51, 'retire'), wf(51, 'time'), wf(52, 'limits'), wf(53, 'live'), wf(53, 'readings'), wf(53, 'full'), wf(53, 'downloaded'), wf(53, 'after'), wf(54, 'analysed'), wf(54, 'only'), wf(54, 'itself'), wf(54, 'damage'), wf(54, 'surface'), wf(54, 'storage'), wf(54, 'not'), wf(55, 'twenty'), wf(55, 'twenty-two'), wf(55, 'three'), wf(55, 'eight'), wf(55, 'acoustic'), wf(55, 'registered'), wf(55, 'acoustic', 1), wf(55, 'events'), wf(55, 'season'), wf(56, 'dive'), wf(56, 'engineering'), wf(56, 'looked'), wf(56, 'first'), wf(56, 'emailed'), wf(56, 'eight'), wf(56, 'ten'), wf(56, 'people'), wf(56, 'chief'), wf(56, 'among'), wf(57, 'criteria'), wf(57, 'set'), wf(57, 'earlier'), wf(57, 'scale'), wf(57, 'built'), wf(58, 'ever'), wf(58, "hull's"), wf(58, 'so'), wf(58, 't'), wf(58, 'found'), wf(58, 'oceangate'), wf(58, 'data'), wf(58, 'one'), wf(58, 'failed')];
	const bs = beatScale(f, BEATS, 0.02);
	const cam = dolly(camAt(f, [
		{f: sf(48) - 10, cam: {pos: [30, 14, 26], look: [0, -0.8, 0], fov: 30}},
		{f: wf(48, 'failing'), cam: {pos: [26, 13, 22], look: [0, -0.4, 0.6], fov: 30}},
		{f: wf(50, 'eight'), cam: {pos: [12, 14, 12], look: [0, 0.6, 0.4], fov: 32}},
		{f: wf(51, 'crackle'), cam: {pos: [10, 13, 10], look: [0, 0.8, 0.8], fov: 32}},
		{f: wf(53, 'pilot'), cam: {pos: [7, 6, 18], look: [0, 0.4, 5.5], fov: 30}},
		{f: wf(54, 'acoustic'), cam: {pos: [16, 12, 16], look: [0, 0, 0.6], fov: 30}},
		{f: wf(55, 'three'), cam: {pos: [10, 14, 10], look: [0, 0.8, 0.6], fov: 32}},
		{f: wf(57, 'alert'), cam: {pos: [22, 13, 20], look: [-3, -0.8, 0], fov: 30}},
		{f: ef(58), cam: {pos: [24, 12, 22], look: [-3, -1, 0], fov: 30}},
	]), f, BEATS);
	const cut = 0.6 * lead(f, wf(50, 'inside'), 14);
	const crackle = f >= wf(51, 'crackle') ? flash(f, wf(51, 'crackle'), 0) : 0;
	const dead = lead(f, wf(55, 'three'), 10);
	// the window the acoustic data were analysed in: the dive only (s54), as a strip under the hull
	const win = lead(f, wf(54, 'dive'), 12);
	const strip = vis(f, wf(54, 'acoustic') - 8, ef(54) + 20, 10, 12);
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={cut} g4={0} sensors={0} aeOn={lead(f, wf(50, 'eight'), 10)} sgOn={lead(f, wf(50, 'sixteen'), 10)} crackle={crackle} aeDark={[dead, 0, dead, 0, dead, 0, 0, 0]} interfaces={0} models={[{o: 0, fail: 0}, {o: 0, fail: 0}, {o: lead(f, wf(58, 'model'), 10), fail: 0, ghost: true}]} bench={1} />
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, flexWrap: 'wrap', width: 1640}}>
				{f >= wf(50, 'eight') - 12 && f < wf(52, 'system') ? (
					<div style={{opacity: lead(f, wf(50, 'eight'), 8)}}><Chip text={f >= wf(50, 'sixteen') ? '8 ACOUSTIC SENSORS · 16 STRAIN GAUGES' : '8 ACOUSTIC SENSORS'} tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, f >= wf(50, 'sixteen') ? wf(50, 'sixteen') : wf(50, 'eight')).toFixed(4)})`, transformOrigin: 'left center'}} /></div>
				) : null}
				{f >= wf(53, 'pilot') - 12 && f < wf(54, 'acoustic') ? (
					<>
						<div style={{opacity: lead(f, wf(53, 'live'), 8)}}><Chip text="PILOT · LIVE READINGS" tone={colors.cyan} size={30} /></div>
						<div style={{opacity: lead(f, wf(53, 'downloaded'), 8), transform: `scale(${bump(f, fps, wf(53, 'dive')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="FULL DATA · AFTER THE DIVE" tone={colors.amber} size={30} /></div>
					</>
				) : null}
				{f >= wf(55, 'twenty') - 12 && f < wf(56, 'after') ? (
					<div style={{opacity: lead(f, wf(55, 'twenty'), 8), transform: `scale(${bump(f, fps, wf(55, 'three')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text={f >= wf(55, 'three') ? '2022 · CHANNELS 1, 3, 5: NO EVENTS' : '2022'} tone={f >= wf(55, 'three') ? colors.red : colors.ink} size={30} /></div>
				) : null}
				{f >= wf(58, 'n') - 12 ? (
					<div style={{opacity: lead(f, wf(58, 'n'), 8)}}><Chip text="NTSB · MIR-25-36" tone={f >= wf(58, 'data') ? colors.red : colors.cyan} size={30} /></div>
				) : null}
			</div>
			{strip > 0 ? (
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: strip}}>
					<rect x={200} y={820} width={1520} height={70} fill="rgba(10,13,18,0.85)" stroke={colors.border} strokeWidth={2} />
					<rect x={620} y={820} width={680 * win} height={70} fill={colors.cyan} opacity={0.3} />
					<text x={960} y={866} textAnchor="middle" style={T(30, {fill: colors.ink, fontWeight: 700})} opacity={win}>ANALYSED: THE DIVE</text>
					<g opacity={lead(f, wf(54, 'surface'), 10)}>
						<rect x={200} y={820} width={420} height={70} fill={colors.red} opacity={0.14} />
						<text x={410} y={866} textAnchor="middle" style={T(28, lit(f, wf(54, 'surface'), colors.red))}>AT THE SURFACE</text>
					</g>
					<g opacity={lead(f, wf(54, 'storage'), 10)}>
						<rect x={1300} y={820} width={420} height={70} fill={colors.red} opacity={0.14} />
						<text x={1510} y={866} textAnchor="middle" style={T(28, lit(f, wf(54, 'storage'), colors.red))}>IN STORAGE</text>
					</g>
				</svg>
			) : null}
			{ringWin > 0 ? (
				<AbsoluteFill style={{opacity: ringWin, transform: `scale(${bs.toFixed(4)})`}}>
					<RealFootage f={f} start={wf(49, 'listen') - 8} end={sf(50) + 34} src="footage/ndt_ring.mp4" date="" what="ACOUSTIC SIGNALS FROM A COMPOSITE RING · REFERENCE, NOT TITAN" source="J P / YOUTUBE · CC BY" push={0.06} />
				</AbsoluteFill>
			) : null}
			{brooksWin > 0 ? (
				<AbsoluteFill style={{opacity: brooksWin, transform: `scale(${bs.toFixed(4)})`, transformOrigin: '70% 40%'}}>
					<RealFootage f={f} start={wf(56, 'engineering') - 10} end={ef(56) + 6} src="footage/h_brooks_oath.mp4" from={6} date="23 SEP 2024" what="MARINE BOARD HEARING" source="U.S. COAST GUARD · PUBLIC DOMAIN" push={0.06} focus={[0.6, 0.4]} />
					<div style={{position: 'absolute', left: 96, top: 110, padding: '18px 24px', background: 'rgba(10,13,18,0.8)', borderLeft: `3px solid ${colors.amber}`}}>
						<div style={{fontFamily: sans, fontWeight: 700, fontSize: 44, color: colors.ink}}>PHIL BROOKS</div>
						<div style={{marginTop: 6, ...T(28, {color: colors.amber})}}>DIRECTOR OF ENGINEERING 2021–23</div>
						<div style={{marginTop: 12, opacity: lead(f, wf(56, 'emailed'), 8), transform: `scale(${bump(f, fps, wf(56, 'ten')).toFixed(4)})`, transformOrigin: 'left center'}}>
							<Chip text={f >= wf(56, 'chief') ? 'DATA EMAILED TO ≈ 8–10 · THE CEO AMONG THEM' : 'DATA EMAILED TO ≈ 8–10'} tone={colors.ink} size={28} />
						</div>
					</div>
				</AbsoluteFill>
			) : null}
			{thr > 0 ? (
				<AbsoluteFill style={{opacity: thr}}>
					<Mount x={960} y={560} w={860} h={360} start={wf(57, 'alert') - 10} end={ef(58) + 60} source="ALERT THRESHOLD: SET ON EARLIER HULLS AND MODELS · NTSB" labels={['ILLUSTRATIVE VALUES']} lean={2}>
						<svg width={860} height={300} style={{position: 'absolute', left: 0, top: 0}}>
							<path d={`M 30 230 ${Array.from({length: 62}).map((_, i) => `L ${30 + i * 13} ${230 - Math.abs(Math.sin(i * 1.7) * Math.sin(i * 0.37)) * 120}`).join(' ')}`} fill="none" stroke={colors.cyan} strokeWidth={2} opacity={0.8} />
							<line x1={30} x2={30 + 800 * lead(f, wf(57, 'criteria'), 16)} y1={70} y2={70} stroke={colors.amber} strokeWidth={4} strokeDasharray="14 10" />
							<text x={30} y={52} style={T(28, lit(f, wf(57, 'earlier'), colors.amber))}>ALERT THRESHOLD</text>
						</svg>
					</Mount>
				</AbsoluteFill>
			) : null}
			<div style={{position: 'absolute', left: 140, bottom: 54, opacity: 1 - Math.max(ringWin, brooksWin), ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · SENSOR COUNT: NTSB MIR-25-36 · POSITIONS ILLUSTRATIVE</div>
		</>
	);
};

export const act2: SceneDef[] = [
	{
		id: 'a2-pressure',
		from: hold(22).from,
		to: ef(23) + 40,
		C: Pressure,
		cues: [
			{frame: hold(22).from + 12, sfx: 'whoosh', gainDb: -26},
			{frame: wf(23, 'forty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(23, 'eighty'), sfx: 'pressure_drop', gainDb: -26},
		],
	},
	{
		id: 'a2-build',
		from: sf(24) - 16,
		to: ef(26) + 36,
		C: Build,
		cues: [
			{frame: wf(25, 'cylinder'), sfx: 'pen_scratch', gainDb: -26},
			{frame: wf(25, 'five'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(25, 'bonded'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(26, 'bolted'), sfx: 'relay_click', gainDb: -22},
		],
	},
	{id: 'a2-why-carbon', from: sf(27) - 16, to: ef(28) + 36, C: WhyCarbon, cues: [{frame: wf(27, 'according'), sfx: 'paper_slide', gainDb: -26}]},
	{
		id: 'a2-margin',
		from: sf(29) - 16,
		to: ef(47) + 50,
		C: Margin,
		cues: [
			{frame: wf(30, 'six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(30, 'half'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(31, 'one'), sfx: 'stamp', gainDb: -24},
			{frame: wf(32, 'hundred'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(35, 'imploded'), sfx: 'metal_snap_sub', gainDb: -24},
			{frame: wf(37, 'model'), sfx: 'stamp', gainDb: -24},
			{frame: wf(38, 'money'), sfx: 'stamp', gainDb: -26},
			{frame: sf(40) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: sf(42) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(42, 'once') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(42, 'once'), sfx: 'stamp', gainDb: -24},
			{frame: wf(44, 'carbon'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(46, 'failure'), sfx: 'pen_scratch', gainDb: -24},
		],
	},
	{
		id: 'a2-listen',
		from: sf(48) - 16,
		to: hold(58).from + hold(58).frames,
		C: Listen,
		cues: [
			{frame: wf(50, 'eight'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(51, 'crackle'), sfx: 'pen_scratch', gainDb: -26},
			{frame: wf(54, 'surface'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(55, 'three'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(56, 'emailed'), sfx: 'whoosh', gainDb: -30},
			{frame: wf(58, 'data'), sfx: 'stamp', gainDb: -24},
		],
	},
];
