import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {ActTitle, Mount, useFilmFrame} from '../kit';
import {AE_POS, Card, Chip, clamp, HULL, HullLines, lit, Pop, RealFootage, sans, SG_POS, span, T, vis, Wd} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT II · THE MECHANISM (sentences 22–57). Choreography: scenes/choreography/act2.md (generated from this file).
// Real footage carries the place and the machine; drawings carry the mechanism, labelled.

const fmt = (v: number): string => Math.round(v).toLocaleString('en-US');

// ── 1 · 3,840 metres: the pressure (s22) ────────────────────────────────────────────────────────────────────────

const Pressure: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const depth = rollTo(f, [{frame: wf(22, 'three') - 10, value: 0}, {frame: wf(22, 'thousand') + LAND, value: 3000}, {frame: wf(22, 'eight') + LAND, value: 3800}, {frame: wf(22, 'hundred') + LAND, value: 3800}, {frame: wf(22, 'forty') + LAND, value: 3840}]);
	const times = rollTo(f, [{frame: wf(22, 'three', 1) - 12, value: 1}, {frame: wf(22, 'hundred', 1) + LAND, value: 300}, {frame: wf(22, 'eighty') + LAND, value: 380}]);
	const psi = lead(f, wf(22, 'pressure'), 10);
	const press = lead(f, wf(22, 'presses'), 14);
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(22) - 30, sf(23) + 200)}}>
				<ActTitle n="II" title="The Mechanism" start={hold(21).from + 10} end={sf(22) + 10} />
			</AbsoluteFill>
			<RealFootage f={f} start={sf(22) - 4} end={ef(22) + 34} src="footage/noaa_bow.mp4" date="2004" what="THE TITANIC'S BOW, ≈3,800 M DOWN" source="NOAA · PUBLIC DOMAIN" push={0.05} focus={[0.55, 0.45]} box={{x: 96, y: 120, w: 1260, h: 709}} under />
			<Card x={1390} y={120} w={434} o={Math.min(lead(f, wf(22, 'three'), 10), 1 - lead(f, ef(22) + 30, 12))} style={{padding: '22px 26px', minHeight: 650}}>
				<div style={T(26, {color: colors.sub, letterSpacing: 3})}>DEPTH</div>
				<div style={{...T(64, {color: colors.ink, fontWeight: 700})}}>
					{fmt(depth)}
					<span style={{fontSize: 34, color: colors.sub}}> M</span>
				</div>
				<div style={{marginTop: 26, ...T(26, {letterSpacing: 3}), ...lit(f, wf(22, 'presses'), colors.amber), opacity: lead(f, wf(22, 'ocean'), 8)}}>{f >= wf(22, 'surface') ? 'ON EVERY SURFACE' : f >= wf(22, 'presses') ? 'THE OCEAN PRESSES' : 'THE OCEAN'}</div>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4, opacity: press}}>
					<span style={{...T(64, {color: colors.amber, fontWeight: 700}), transform: `scale(${bump(f, fps, wf(22, 'eighty') + LAND).toFixed(4)})`, display: 'inline-block', transformOrigin: '0 60%'}}>≈ {fmt(times)}×</span>
				</div>
				<div style={{...T(28, lit(f, wf(22, 'times'), colors.ink)), opacity: press}}>THE PRESSURE AT THE SURFACE</div>
				<div style={{marginTop: 26, opacity: psi, ...T(40, {color: colors.ink, fontWeight: 700})}}>5,627 PSI</div>
				<div style={{opacity: psi, ...T(30, {color: colors.ink})}}>38.8 MPA</div>
			</Card>
		</>
	);
};

// ── 2 · How it was built (s23–s25): sphere vs cylinder, the wall in five layers, rings, domes ───────────────────────

const Build: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const {cx, cy, len, r, ring} = HULL;
	const sphere = lead(f, wf(23, 'deep'), 14);
	const titan = lead(f, wf(23, 'titan'), 12) * span(f, wf(24, 'cylinder') - 10, wf(24, 'cylinder') + 14);
	const toCyl = span(f, wf(24, 'cylinder') - 8, wf(24, 'cylinder') + 24);
	const carbon = lead(f, wf(24, 'carbon'), 12);
	const layerAt = (i: number) => wf(24, 'five') + i * 5;
	const bonded = lead(f, wf(24, 'bonded'), 14);
	const ringsO = lead(f, wf(25, 'rings'), 12);
	const ringBond = lead(f, wf(25, 'bonded'), 10);
	const domesO = lead(f, wf(25, 'domes'), 12);
	const bolts = lead(f, wf(25, 'bolted'), 10);
	const sphereX = interpolate(toCyl, [0, 1], [560, 260]);
	// the wall section inset: five layers, about an inch each
	const IX = 1080;
	const IY = 660;
	const LW = 380;
	const LH = 30;
	return (
		<>
			<Mount x={120} y={100} w={1680} h={840} start={sf(23) - 14} end={ef(25) + 30} source="TITAN'S PRESSURE HULL · CONSTRUCTION: NTSB MIR-25-36, USCG MBI REPORT" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{/* the usual way: a sphere */}
				<g opacity={sphere * (1 - toCyl)}>
					<circle cx={sphereX} cy={430} r={150 * (1 - 0.35 * toCyl)} fill="none" stroke={colors.sub} strokeWidth={3} strokeDasharray="10 8" />
				</g>
				{/* Titan: a cylinder, carbon wall, titanium rings and domes */}
				<g transform={`translate(${interpolate(toCyl, [0, 1], [380, 120])} ${-10}) scale(${0.82})`} opacity={titan}>
					<HullLines draw={Math.max(0.15, toCyl)} ringsLit={ringsO} domesLit={domesO} wall={carbon} />
					{carbon > 0 ? <rect x={cx - len / 2} y={cy - r} width={len} height={2 * r} fill={colors.cyan} opacity={0.08 * carbon} /> : null}
					{[0, 1].map((side) => {
						const x = side ? cx + len / 2 + ring : cx - len / 2 - ring;
						return (
							<g key={side} opacity={bolts}>
								{[-0.8, -0.4, 0, 0.4, 0.8].map((v) => (
									<circle key={v} cx={x + (side ? 6 : -6)} cy={cy + v * r} r={7 * bump(f, fps, wf(25, 'bolted') + LAND, 0.3)} fill={colors.ink} />
								))}
							</g>
						);
					})}
					{ringBond > 0 ? (
						<g opacity={ringBond}>
							<line x1={cx - len / 2} x2={cx - len / 2} y1={cy - r - 10} y2={cy + r + 10} stroke={colors.amber} strokeWidth={4} />
							<line x1={cx + len / 2} x2={cx + len / 2} y1={cy - r - 10} y2={cy + r + 10} stroke={colors.amber} strokeWidth={4} />
						</g>
					) : null}
				</g>
				{/* the wall, in section */}
				<g opacity={lead(f, wf(24, 'five'), 10)}>
					{Array.from({length: 5}).map((_, i) => {
						const k = interpolate(f, [layerAt(i) - 8, layerAt(i) + 6], [0, 1], {...clamp, easing: ease.arrive});
						const gap = 10 * (1 - bonded);
						return <rect key={i} x={IX} y={IY + i * (LH + gap)} width={LW * k} height={LH} fill={colors.cyan} opacity={0.25 + 0.15 * (i % 2)} stroke={colors.cyan} strokeWidth={1.5} />;
					})}
					<text x={IX} y={IY - 18} style={T(26, {fill: colors.ink})}>THE WALL, IN SECTION</text>
				</g>
			</svg>
			<div style={{position: 'absolute', left: 200, top: 150, display: 'flex', gap: 18, alignItems: 'center'}}>
				<div style={{opacity: (1 - toCyl), ...T(30, {})}}>
					<Wd f={f} at={wf(23, 'built')} tone={colors.amber}>NOT BUILT THE USUAL WAY · </Wd>
					<Wd f={f} at={wf(23, 'deep')} lightAt={wf(23, 'usually')}>DEEP SUBMERSIBLES: USUALLY A SPHERE</Wd>
				</div>
			</div>
			<div style={{position: 'absolute', left: 200, top: 150, display: 'flex', gap: 16, alignItems: 'center', opacity: toCyl}}>
				<span style={{...T(30, lit(f, wf(24, 'cylinder'), colors.ink))}}>TITAN: A CYLINDER</span>
				<span style={{opacity: carbon}}>
					<Chip text="CARBON FIBRE" tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(24, 'carbon') + LAND, 0.06).toFixed(4)})`}} />
				</span>
			</div>
			<div style={{position: 'absolute', left: IX + LW + 24, top: IY - 6, display: 'flex', flexDirection: 'column', gap: 10}}>
				<span style={{...T(34, lit(f, wf(24, 'layers'), colors.ink)), fontWeight: 700, opacity: lead(f, wf(24, 'five'), 8)}}>5 LAYERS</span>
				<span style={{...T(28, lit(f, wf(24, 'inch'), colors.ink)), opacity: lead(f, wf(24, 'inch'), 8)}}>≈ 1 IN EACH</span>
				<span style={{...T(28, lit(f, wf(24, 'bonded'), colors.amber)), opacity: lead(f, wf(24, 'bonded'), 8)}}>BONDED</span>
				<span style={{...T(28, lit(f, wf(24, 'next'), colors.ink)), opacity: lead(f, wf(24, 'one'), 8)}}>ONE ONTO THE NEXT</span>
			</div>
			<div style={{position: 'absolute', left: 200, top: 820, display: 'flex', gap: 16}}>
				<span style={{opacity: ringsO}}>
					<Chip text={f >= wf(25, 'end') ? 'TITANIUM RINGS · BONDED TO EACH END' : 'TITANIUM RINGS'} tone={colors.ink} size={28} />
				</span>
				<span style={{opacity: domesO}}>
					<Chip text={f >= wf(25, 'bolted') ? 'TITANIUM DOMES · BOLTED' : 'TITANIUM DOMES'} tone={colors.ink} size={28} style={{transform: `scale(${bump(f, fps, wf(25, 'bolted') + LAND, 0.06).toFixed(4)})`}} />
				</span>
			</div>
		</>
	);
};

// ── 3 · Why carbon fibre, as reported (s26–s27): real fibre placement, the beliefs as his ─────────────────────────

const WhyCarbon: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const split = sf(27) + 10;
	const items: [string, number, string, number][] = [
		['LIGHTER', wf(27, 'lighter'), colors.ink, wf(27, 'lighter')],
		['LESS BUOYANCY NEEDED', wf(27, 'buoyancy'), colors.ink, wf(27, 'buoyancy')],
		['LAUNCHED FROM MANY MORE KINDS OF SHIP', wf(27, 'launched'), colors.ink, wf(27, 'kinds')],
		['NOT A PURPOSE-BUILT ONE', wf(27, 'purpose-built'), colors.ink, wf(27, 'one')],
		['CARRY MORE PEOPLE', wf(27, 'carry'), colors.amber, wf(27, 'people')],
	];
	return (
		<>
			<RealFootage f={f} start={sf(26) - 14} end={split + 14} src="footage/afp_place.mp4" date="" what="CARBON-FIBRE MATERIAL LAID BY MACHINE · REFERENCE, NOT TITAN" source="TECNALIA / YOUTUBE · CC BY" push={0.06} />
			<RealFootage f={f} start={split} end={ef(27) + 30} src="footage/afp_robot.mp4" date="" what="AUTOMATED COMPOSITE MANUFACTURING · REFERENCE, NOT TITAN" source="TECNALIA / YOUTUBE · CC BY" push={0.06} />
			<Card x={96} y={96} w={1010} o={Math.min(lead(f, wf(26, 'according'), 10), 1 - lead(f, ef(27) + 26, 12))} accent={colors.amber} style={{padding: '24px 30px'}}>
				<div style={{...T(26, {letterSpacing: 2}), ...lit(f, wf(26, 'operations'), colors.amber)}}>
					{f >= wf(26, 'former') ? 'A FORMER DIRECTOR OF MARINE OPERATIONS · NTSB P. 25' : 'ACCORDING TO'}
				</div>
				<div style={{marginTop: 14, display: 'flex', gap: 14, alignItems: 'baseline', ...T(34, {})}}>
					<span style={{opacity: lead(f, wf(26, "company's"), 8), ...lit(f, wf(26, 'executive'))}}>THE CEO</span>
					<span style={{opacity: lead(f, wf(26, 'chose'), 8), ...lit(f, wf(26, 'chose'))}}>CHOSE</span>
					<span style={{opacity: lead(f, wf(26, 'carbon'), 8), ...lit(f, wf(26, 'fibre'), colors.cyan), fontWeight: 700}}>CARBON FIBRE</span>
				</div>
				<div style={{marginTop: 10, ...T(30, {}), opacity: lead(f, wf(26, 'believed'), 8), display: f >= wf(26, 'believed') - 12 ? 'block' : 'none'}}>
					<span style={lit(f, wf(26, 'believed'), colors.sub)}>HE BELIEVED: </span>
					<span style={{opacity: lead(f, wf(26, 'compression'), 8), ...lit(f, wf(26, 'compression'), colors.cyan)}}>BETTER IN COMPRESSION</span>
					<span style={{opacity: lead(f, wf(26, 'tension'), 8), ...lit(f, wf(26, 'tension'), colors.ink)}}> THAN IN TENSION</span>
				</div>
				<div style={{marginTop: 16, display: f >= wf(27, 'also') - 12 ? 'flex' : 'none', flexDirection: 'column', gap: 8, opacity: lead(f, wf(27, 'also'), 8)}}>
					<div style={{...T(26, {letterSpacing: 2}), ...lit(f, wf(27, 'believed'), colors.amber)}}>HE ALSO BELIEVED</div>
					{items.filter(([, at]) => f >= at - 12).map(([t, at, tone, light]) => (
						<Pop key={t} f={f} fps={fps} at={at}>
							<span style={{...T(30, lit(f, light, tone, colors.ink))}}>— {t}</span>
						</Pop>
					))}
				</div>
			</Card>
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
	// s29: the goal, its factor, the line it implies
	const factorFlip = wf(30, 'one');
	// s31: the analysis line slides from 13,500 to 7,500 on its words
	const target = rollTo(f, [
		{frame: wf(29, 'thirteen') - 14, value: 6000},
		{frame: wf(29, 'half') + LAND, value: 13500},
		{frame: wf(31, 'seven') - 6, value: 13500},
		{frame: wf(31, 'hundred') + LAND, value: 7500},
	]);
	const targetO = lead(f, wf(29, 'thirteen'), 12);
	const ghost = lead(f, wf(33, 'perfect'), 14);
	const unlikely = lead(f, wf(46, 'unlikely'), 14);
	const neverLine = interpolate(f, [wf(45, 'tested') - 10, wf(45, 'failure') + 20, hold(45).from + hold(45).frames], [0, 0.42, 0.42], clamp);
	const models = (m: number, at: number) => lead(f, at, 10) * (m > 0 ? 1 : 0);
	const testLine = lead(f, wf(43, 'test'), 12);
	const panelO = (a: number, b: number) => vis(f, a, b, 12, 14);
	// right-hand panels change through the passage; the gauge carries the whole stretch
	const P = {x: 1000, y: 190, w: 770};
	return (
		<>
			<Mount x={120} y={100} w={1680} h={860} start={sf(28) - 14} end={ef(46) + 40} source="DESIGN GOAL, ANALYSIS, MODELS, TESTS: NTSB MIR-25-36 · USCG MBI REPORT · TSB M23A0169" labels={['DEPTHS TO SCALE']} lean={3} />
			<div style={{position: 'absolute', left: 200, top: 120, ...T(34, lit(f, wf(28, 'strong'), colors.ink)), fontWeight: 700, opacity: lead(f, wf(28, 'how'), 10)}}>HOW STRONG WAS IT?</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{/* the depth scale */}
				<line x1={G.x - 40} x2={G.x - 40} y1={G.top} y2={G.bottom} stroke={colors.sub} strokeWidth={2} />
				{[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000].map((m) => (
					<g key={m}>
						<line x1={G.x - 52} x2={G.x - 40} y1={gy(m)} y2={gy(m)} stroke={colors.sub} strokeWidth={2} />
						<text x={G.x - 62} y={gy(m) + 9} textAnchor="end" style={T(26, {fill: colors.sub})}>
							{m === 0 ? '0 M' : fmt(m)}
						</text>
					</g>
				))}
				{/* the Titanic, for scale (s32) */}
				<GaugeLine f={f} fps={fps} m={3840} at={wf(32, 'depth')} label="THE TITANIC · 3,840 M" tone={colors.cyan} dash={false} w={300} />
				{/* s29: design goal 6,000 m */}
				<GaugeLine f={f} fps={fps} m={6000} at={wf(29, 'six')} label={f >= wf(29, 'thousand') ? '6,000 M · DESIGN GOAL' : '6,'} tone={colors.ink} w={300} out={wf(31, 'analysis')} />
				{/* the factor line: 13,500 → 7,500 */}
				{targetO > 0 ? (
					<g opacity={targetO * (1 - 0.7 * unlikely)}>
						<line x1={G.x - 40} x2={G.x + 260} y1={gy(target)} y2={gy(target)} stroke={colors.amber} strokeWidth={3} strokeDasharray={ghost > 0 ? '4 10' : '10 8'} />
						<text x={G.x + 276} y={gy(target) + 10} style={T(30, {fill: colors.amber, fontWeight: 700})}>
							≈ {fmt(target)} M
						</text>
						<text x={G.x + 276} y={gy(target) + 44} style={T(26, {fill: colors.ink})}>
							{f >= wf(31, 'seven') ? (ghost > 0.5 ? 'IN THEORY: PERFECT GEOMETRY' : 'THE ANALYSIS · 6,000 × 1.25: OUR ARITHMETIC') : 'SHOULD NOT FAIL ABOVE'}
						</text>
					</g>
				) : null}
				{/* s34: the scale models */}
				{models(1, wf(34, 'imploded')) > 0 ? (
					<g opacity={models(1, wf(34, 'imploded'))}>
						<line x1={G.x - 40} x2={G.x + 160} y1={gy(2800)} y2={gy(2800)} stroke={colors.red} strokeWidth={5} />
						<text x={G.x - 20} y={gy(2500) - 18} style={T(26, {fill: colors.red, fontWeight: 700})}>MODELS: IMPLODED 2,800 M</text>
					</g>
				) : null}
				{models(1, wf(34, 'nearly')) > 0 ? (
					<g opacity={models(1, wf(34, 'nearly'))}>
						<line x1={G.x - 40} x2={G.x + 160} y1={gy(2500)} y2={gy(2500)} stroke={colors.red} strokeWidth={3} strokeDasharray="6 6" />
						<text x={G.x + 372} y={gy(2500) - 18} style={T(26, {fill: colors.red})}>· STOPPED 2,500 M</text>
					</g>
				) : null}
				{/* s43: the test limit, set by a titanium dome */}
				{testLine > 0 ? (
					<g opacity={testLine}>
						<line x1={G.x - 40} x2={G.x + 260} y1={gy(4200)} y2={gy(4200)} stroke={colors.cyan} strokeWidth={4} />
						<text x={G.x + 276} y={gy(4200) + 34} style={T(28, {fill: colors.cyan, fontWeight: 700})}>4,200 M · PROOF TEST</text>
						<text x={G.x + 276} y={gy(4200) + 68} style={T(26, lit(f, wf(43, 'dome'), colors.ink))}>LIMIT: A TITANIUM DOME</text>
					</g>
				) : null}
				{/* s45: the cylinder's own line: never drawn */}
				{neverLine > 0 ? (
					<g>
						{/* the hull's own limit has no line: a band of unknown between what was proved (4,200 m) and what was predicted */}
						<rect x={G.x - 40} y={gy(4200)} width={22} height={(gy(7500) - gy(4200)) * Math.min(1, neverLine / 0.42)} fill={colors.red} opacity={0.55} />
						<text x={G.x - 20} y={gy(9600)} style={T(30, {fill: colors.red, fontWeight: 700})} opacity={lead(f, wf(45, 'failure'), 10)}>
							THE HULL'S OWN LIMIT:
						</text>
						<text x={G.x - 20} y={gy(9600) + 38} style={T(30, {fill: colors.red, fontWeight: 700})} opacity={lead(f, wf(45, 'failure'), 10)}>
							NEVER MEASURED
						</text>
					</g>
				) : null}
			</svg>
			{/* s29–s31 factor chip */}
			<div style={{position: 'absolute', left: G.x + 276, top: gy(6000) + 30, opacity: lead(f, wf(29, 'safety'), 10) * (1 - lead(f, wf(31, 'analysis'), 12))}}>
				{f < factorFlip - 8 ? (
					<span style={{...T(30, lit(f, wf(29, 'five'), colors.amber)), fontWeight: 700}}>SAFETY FACTOR × {f >= wf(29, 'two') ? (f >= wf(29, 'five') ? '2.25' : '2.') : ''}</span>
				) : (
					<span style={{display: 'flex', gap: 14, alignItems: 'center'}}>
						<span style={T(30, {color: colors.amber, fontWeight: 700})}>SAFETY FACTOR</span>
						<StatusFlip f={f} fps={fps} word={factorFlip} from="× 2.25" to="× 1.25" toneFrom="amber" toneTo="amber" size={30} />
					</span>
				)}
			</div>
			{/* right-hand panels, one per passage */}
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(29, "company's"), wf(30, "canada's") - 6), ...T(32, {}), lineHeight: 1.5}}>
				<div><Wd f={f} at={wf(29, "company's")}>THE COMPANY'S </Wd><Wd f={f} at={wf(29, 'original')} tone={colors.amber} lightAt={wf(29, 'goal')}>ORIGINAL GOAL</Wd></div>
				<div><Wd f={f} at={wf(29, 'hull')}>A HULL </Wd><Wd f={f} at={wf(29, 'rated')}>RATED TO </Wd><Wd f={f} at={wf(29, 'six')} tone={colors.ink} lightAt={wf(29, 'metres')} bold>6,000 M</Wd></div>
				<div><Wd f={f} at={wf(29, 'with')}>WITH </Wd><Wd f={f} at={wf(29, 'safety')} tone={colors.amber}>A SAFETY FACTOR OF </Wd><Wd f={f} at={wf(29, 'two')} tone={colors.amber} bold>2</Wd><Wd f={f} at={wf(29, 'point')} tone={colors.amber} bold>.</Wd><Wd f={f} at={wf(29, 'two', 1)} tone={colors.amber} bold>2</Wd><Wd f={f} at={wf(29, 'five')} tone={colors.amber} bold>5</Wd></div>
				<div style={{marginTop: 18}}><Wd f={f} at={wf(29, 'hull', 1)}>SHOULD </Wd><Wd f={f} at={wf(29, 'not')} tone={colors.amber}>NOT </Wd><Wd f={f} at={wf(29, 'fail')} tone={colors.amber}>FAIL UNTIL </Wd><Wd f={f} at={wf(29, 'thirteen')} tone={colors.amber} lightAt={wf(29, 'thousand', 1)} bold>≈13,500 M</Wd></div>
				<div style={{marginTop: 18, ...T(26, {color: colors.ink})}}><Wd f={f} at={wf(29, 'metres', 1)} base={colors.ink}>6,000 × 2.25 = 13,500 · OUR ARITHMETIC</Wd></div>
			</div>
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(31, 'analysis') - 6, wf(33, 'n') - 6), ...T(32, {}), lineHeight: 1.5}}>
				<div><Wd f={f} at={wf(31, 'analysis')} tone={colors.amber}>THE ANALYSIS </Wd><Wd f={f} at={wf(31, 'hull')}>FOR THIS HULL:</Wd></div>
				<div><Wd f={f} at={wf(31, 'carbon')}>THE CARBON </Wd><Wd f={f} at={wf(31, 'cylinder')}>CYLINDER </Wd><Wd f={f} at={wf(31, 'hold')}>HOLDS TO</Wd></div>
				<div style={{...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(31, 'seven')} tone={colors.amber} lightAt={wf(31, 'thousand')} bold>≈7,</Wd><Wd f={f} at={wf(31, 'five')} tone={colors.amber} lightAt={wf(31, 'hundred')} bold>500 M</Wd></div>
				<div style={{marginTop: 10, ...T(44, {}), fontWeight: 700}}><Wd f={f} at={wf(31, 'six')} lightAt={wf(31, 'thousand', 1)} bold>6,000 </Wd><Wd f={f} at={wf(31, 'times')} bold>× </Wd><Wd f={f} at={wf(31, 'one')} tone={colors.amber} lightAt={wf(31, 'two')} bold>1.2</Wd><Wd f={f} at={wf(31, 'five', 1)} tone={colors.amber} bold>5</Wd></div>
				<div style={{marginTop: 26}}><Wd f={f} at={wf(32, 'less')} tone={colors.cyan}>LESS THAN </Wd><Wd f={f} at={wf(32, 'twice')} tone={colors.cyan} bold>TWICE </Wd><Wd f={f} at={wf(32, 'depth')} lightAt={wf(32, 'titanic')} tone={colors.cyan}>THE TITANIC'S DEPTH</Wd></div>
			</div>
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(30, "canada's"), wf(31, 'analysis') - 6)}}>
				<Pop f={f} fps={fps} at={wf(30, "canada's")}>
					<Chip text="TSB CANADA · REPORT M23A0169" tone={colors.ink} size={30} />
				</Pop>
				<div style={{marginTop: 10, ...T(28, {})}}><Wd f={f} at={wf(30, 'transportation')} lightAt={wf(30, 'board')}>TRANSPORTATION SAFETY BOARD</Wd></div>
				<div style={{marginTop: 18, ...T(32, {})}}><Wd f={f} at={wf(30, 'found')}>FOUND </Wd><Wd f={f} at={wf(30, 'oceangate')}>OCEANGATE </Wd><Wd f={f} at={wf(30, 'later')} tone={colors.amber}>LATER</Wd></div>
				<div style={{...T(32, {})}}><Wd f={f} at={wf(30, 'changed')} tone={colors.amber}>CHANGED </Wd><Wd f={f} at={wf(30, 'safety')} lightAt={wf(30, 'factor')}>THE SAFETY FACTOR</Wd></div>
				<div style={{marginTop: 18, ...T(64, {}), fontWeight: 700}}><Wd f={f} at={wf(30, 'one')} tone={colors.amber} bold>1</Wd><Wd f={f} at={wf(30, 'point')} tone={colors.amber} bold>.</Wd><Wd f={f} at={wf(30, 'two')} tone={colors.amber} bold>2</Wd><Wd f={f} at={wf(30, 'five')} tone={colors.amber} bold>5</Wd></div>
			</div>
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(33, 'n') - 6, wf(34, 'scale') - 6)}}>
				<Pop f={f} fps={fps} at={wf(33, 'n')}>
					<Chip text="THE N-T-S-B NOTED" tone={colors.cyan} size={30} />
				</Pop>
				<div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10, ...T(32, {})}}>
					<span style={{...T(28, {})}}><Wd f={f} at={wf(33, 'noted')}>NOTED: </Wd></span>
					<span style={{opacity: lead(f, wf(33, 'analysis'), 8), ...lit(f, wf(33, 'assumed'))}}>THE ANALYSIS ASSUMED:</span>
					<span style={{opacity: lead(f, wf(33, 'geometry'), 8), ...lit(f, wf(33, 'geometry'), colors.amber)}}>— PERFECT GEOMETRY</span>
					<span style={{opacity: lead(f, wf(33, 'fibres'), 8), ...lit(f, wf(33, 'aligned'), colors.amber)}}>— PERFECTLY ALIGNED FIBRES</span>
					<span style={{opacity: lead(f, wf(33, 'hull'), 8), ...lit(f, wf(33, 'built'), colors.red), fontWeight: 700}}>NOT THE HULL <span style={lit(f, wf(33, 'actually'), colors.red)}>ACTUALLY</span> BUILT</span>
				</div>
			</div>
			{/* s34–s38: the models */}
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(34, 'scale') - 6, wf(37, "canada's") - 8)}}>
				<div style={{...T(30, lit(f, wf(34, 'models'))), opacity: lead(f, wf(34, 'scale'), 8)}}>SCALE MODELS <Wd f={f} at={wf(34, 'built')}>· BUILT WITH </Wd><Wd f={f} at={wf(34, 'new')} lightAt={wf(34, 'materials')} tone={colors.amber}>NEW MATERIALS</Wd></div>
				<div style={{marginTop: 8, ...T(30, lit(f, wf(34, 'thousand'), colors.red)), fontWeight: 700, opacity: lead(f, wf(34, 'shallower'), 8)}}>BOTH FAILED SHALLOWER THAN <span style={lit(f, wf(34, 'three'), colors.red)}>3,000 M</span></div>
				<div style={{marginTop: 22, ...T(28, {})}}><Wd f={f} at={wf(35, 'oceangate')}>OCEANGATE </Wd><Wd f={f} at={wf(35, 'traced')}>TRACED </Wd><Wd f={f} at={wf(35, 'failures')}>THE FAILURES TO</Wd></div>
				<div style={{marginTop: 6, display: 'flex', gap: 16, alignItems: 'center', opacity: lead(f, wf(35, 'wrinkles'), 8)}}>
					<svg width={180} height={60}>
						<path d={`M 0 30 ${Array.from({length: 12}).map((_, i) => `Q ${i * 15 + 7.5} ${30 + (i % 2 ? 1 : -1) * 18 * lead(f, wf(35, 'wrinkles'), 14)} ${(i + 1) * 15} 30`).join(' ')}`} fill="none" stroke={colors.amber} strokeWidth={3} />
					</svg>
					<span style={{...T(30, lit(f, wf(35, 'wrinkles'), colors.amber))}}>WRINKLES <Wd f={f} at={wf(35, 'carbon')} tone={colors.amber}>IN THE CARBON</Wd></span>
				</div>
				<div style={{marginTop: 12, ...T(28, lit(f, wf(35, 'method'), colors.ink)), opacity: lead(f, wf(35, 'changed'), 8)}}>→ <span style={lit(f, wf(36, 'method'), colors.cyan, colors.ink)}>NEW METHOD</span>: <span style={lit(f, wf(36, 'bonding'), colors.cyan, colors.ink)}>LAYERS BONDED</span> <span style={lit(f, wf(36, 'one'), colors.cyan, colors.ink)}>ONE ONTO THE NEXT</span></div>
				<div style={{marginTop: 22, display: 'flex', gap: 18, alignItems: 'baseline', opacity: lead(f, wf(36, 'new'), 8)}}>
					<span style={T(30, lit(f, wf(36, 'tested'), colors.ink))}>MODELS <span style={lit(f, wf(36, 'next'), colors.ink)}>BUILT THAT WAY</span> <span style={lit(f, wf(36, 'never'), colors.red)}>AND TESTED</span></span>
					<span style={{...T(64, {color: colors.red, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(36, 'model') + LAND).toFixed(4)})`}}>0</span>
				</div>
			</div>
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(37, "canada's") - 6, wf(39, 'in') - 6)}}>
				<Card x={0} y={0} w={P.w} o={lead(f, wf(37, "canada's"), 10)} accent={colors.amber} style={{padding: '22px 28px'}}>
					<div style={T(26, lit(f, wf(37, 'investigators'), colors.amber))}>TSB CANADA FOUND</div>
					<div style={{marginTop: 8, ...T(30, {}), lineHeight: 1.4}}>
						<span style={{opacity: lead(f, wf(37, 'found'), 8), ...lit(f, wf(37, 'scale'))}}>A SCALE </span><span style={{opacity: lead(f, wf(37, 'model'), 8), ...lit(f, wf(37, 'model'))}}>MODEL BUILT THAT WAY </span>
						<span style={{opacity: lead(f, wf(37, 'discussed'), 8), ...lit(f, wf(37, 'discussed'))}}>WAS DISCUSSED, </span>
						<span style={{opacity: lead(f, wf(37, 'not'), 8), ...lit(f, wf(37, 'built'), colors.red), fontWeight: 700}}>NOT BUILT, </span>
						<span style={{opacity: lead(f, wf(37, 'save'), 8), ...lit(f, wf(37, 'money'), colors.amber), fontWeight: 700}}>TO SAVE MONEY</span>
					</div>
				</Card>
				<div style={{position: 'absolute', left: 0, top: 280, display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'baseline', opacity: lead(f, wf(38, 'only'), 8)}}>
					<span style={{...T(64, {color: colors.ink, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(38, 'one') + LAND).toFixed(4)})`}}>1</span>
					<span style={T(30, lit(f, wf(38, 'built')))}>BUILT:</span>
					<span style={{...T(30, lit(f, wf(38, 'people'), colors.amber)), fontWeight: 700, opacity: lead(f, wf(38, 'hull'), 8)}}>THE HULL THAT <span style={lit(f, wf(38, 'carried'), colors.amber)}>CARRIED</span> PEOPLE</span>
				</div>
			</div>
			{/* s39–s44: the 2021 pressure tests */}
			<Tests f={f} fps={fps} x={P.x} y={P.y} w={P.w} />
			{/* s45–s46: the verdict on its strength */}
			<div style={{position: 'absolute', left: P.x, top: P.y, width: P.w, opacity: panelO(wf(45, 'never') - 6, ef(46) + 40)}}>
				<div style={{...T(40, lit(f, wf(45, 'failure'), colors.red)), fontWeight: 700}}>NEVER TESTED TO FAILURE</div>
				<div style={{marginTop: 34, opacity: lead(f, wf(46, 'n'), 8)}}>
					<Chip text="N-T-S-B · FINDINGS" tone={colors.cyan} size={30} />
				</div>
				<div style={{marginTop: 18, ...T(32, {}), lineHeight: 1.45}}>
					<div style={{opacity: lead(f, wf(46, 'unlikely'), 8), ...lit(f, wf(46, 'unlikely'), colors.amber)}}>UNLIKELY <Wd f={f} at={wf(46, 'hull')}>THE HULL </Wd><Wd f={f} at={wf(46, 'ever')}>EVER HAD</Wd></div>
					<div style={{opacity: lead(f, wf(46, 'strength'), 8), ...lit(f, wf(46, 'predicted'), colors.ink)}}>THE PREDICTED STRENGTH</div>
					<div style={{marginTop: 14, opacity: lead(f, wf(46, 'company'), 8), ...lit(f, wf(46, 'know'), colors.ink)}}>THE COMPANY DID NOT KNOW</div>
					<div style={{opacity: lead(f, wf(46, 'actual'), 8), ...lit(f, wf(46, 'strength', 1), colors.red), fontWeight: 700}}>ITS ACTUAL STRENGTH</div>
				</div>
			</div>
		</>
	);
};

const Tests: React.FC<{f: number; fps: number; x: number; y: number; w: number}> = ({f, fps, x, y, w}) => {
	const o = vis(f, wf(39, 'in') - 6, wf(45, 'never') - 24, 12, 14);
	if (o <= 0) return null;
	// the four test days: the plan (4,200 m on days 1–3) beside what the facility's logbook shows
	const days: {d: string; plan: boolean; log: string; logAt: number; tone: string}[] = [
		{d: '26 FEB', plan: true, log: '≈4,000 M · 2 × ≈70 MIN', logAt: wf(44, 'four'), tone: colors.ink},
		{d: '01 MAR', plan: true, log: '4,200 M · 20 MIN', logAt: wf(41, 'once'), tone: colors.amber},
		{d: '02 MAR', plan: true, log: '3,840 M · 240 MIN', logAt: wf(44, 'forty'), tone: colors.cyan},
		{d: '03 MAR', plan: false, log: '3,840 M · 240 MIN', logAt: wf(44, 'twice'), tone: colors.cyan},
	];
	const planAt = (i: number) => wf(40, 'three', 0) + i * 8;
	const logO = lead(f, wf(41, 'logbook'), 10);
	const tableO = lead(f, wf(40, 'test'), 10);
	const C = {day: 230, plan: 170};
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o}}>
			<div style={{display: 'flex', gap: 14, alignItems: 'center', height: 50}}>
				{f < wf(42, 'first') - 10 ? (
					<span style={{...T(30, lit(f, wf(39, 'twenty-one'), colors.amber)), fontWeight: 700, border: `2px solid ${colors.amber}`, padding: '4px 12px', opacity: lead(f, wf(39, 'early'), 8)}}>EARLY 2021</span>
				) : (
					<DatePill f={f} fps={fps} day={1} month={3} year={2021} dayWord={wf(42, 'first')} monthWord={wf(42, 'march')} size={30} />
				)}
				<span style={{...T(30, {}), whiteSpace: 'nowrap'}}>
					<Wd f={f} at={wf(39, 'hull')}>THE HULL </Wd>
					<Wd f={f} at={wf(39, 'went')} tone={colors.cyan}>→ </Wd>
				</span>
			</div>
			<div style={{marginTop: 10, ...T(30, {}), whiteSpace: 'nowrap'}}>
				<Wd f={f} at={wf(39, 'pressure')} lightAt={wf(39, 'facility')}>PRESSURE TEST FACILITY</Wd>
			</div>
			<div style={{...T(30, {}), whiteSpace: 'nowrap'}}>
				<Wd f={f} at={wf(39, 'maryland')}>BETHESDA, MARYLAND</Wd>
			</div>
			{/* the table */}
			<div style={{marginTop: 26, opacity: tableO, borderTop: `1px solid ${colors.border}`, paddingTop: 12}}>
				<div style={{display: 'flex', ...T(26, {letterSpacing: 2}), whiteSpace: 'nowrap'}}>
					<span style={{width: C.day, color: colors.sub}}>DAY</span>
					<span style={{width: C.plan, ...lit(f, wf(40, 'plan'), colors.ink)}}>PLAN</span>
					<span style={{...lit(f, wf(41, 'logbook'), colors.ink), opacity: Math.max(0.35, logO)}}>LOGBOOK</span>
				</div>
				{days.map((d, i) => {
					const planned = d.plan && f >= planAt(i);
					return (
						<div key={d.d} style={{marginTop: 10, display: 'flex', alignItems: 'center', height: 40, whiteSpace: 'nowrap'}}>
							<span style={{width: C.day, ...T(28, {color: colors.ink})}}>{`${i + 1} · ${d.d}`}</span>
							<span style={{width: C.plan}}>
								<span style={{...T(28, {color: planned ? colors.amber : colors.sub, fontWeight: planned ? 700 : 400}), transform: `scale(${planned ? bump(f, fps, planAt(i) + LAND, 0.06).toFixed(4) : 1})`, display: 'inline-block'}}>{d.plan ? (planned ? '4,200 M' : '·') : '—'}</span>
							</span>
							<span style={{...T(28, {color: d.tone, fontWeight: 700}), opacity: lead(f, d.logAt, 8), transform: `scale(${bump(f, fps, d.logAt + LAND, 0.05).toFixed(4)})`, display: 'inline-block', transformOrigin: '0 50%'}}>{f >= d.logAt - 8 ? d.log : ''}</span>
						</div>
					);
				})}
			</div>
			<div style={{marginTop: 10, ...T(26, {}), whiteSpace: 'nowrap', opacity: lead(f, wf(40, 'pressure'), 8) * (1 - lead(f, wf(41, 'shows'), 10))}}>
				<span style={lit(f, wf(40, 'pressure'), colors.ink)}>PLANNED PRESSURE: </span>
				<span style={lit(f, wf(40, 'four'), colors.amber)}>4,</span>
				<span style={lit(f, wf(40, 'two'), colors.amber)}>2</span>
				<span style={lit(f, wf(40, 'hundred'), colors.amber)}>00</span>
				<span style={lit(f, wf(40, 'metres'), colors.amber)}> M </span>
				<span style={lit(f, wf(40, 'three'), colors.ink)}>· 3 </span><span style={lit(f, wf(40, 'four', 1), colors.ink)}>OF 4 </span><span style={lit(f, wf(40, 'days'), colors.ink)}>DAYS</span>
			</div>
			<div style={{position: 'absolute', left: 0, top: 470, width: w}}>
				<div style={{display: 'flex', gap: 14, alignItems: 'baseline', whiteSpace: 'nowrap', opacity: lead(f, wf(41, 'shows'), 8) * (1 - lead(f, wf(43, 'according'), 10))}}>
					<span style={{...T(34, lit(f, wf(41, 'once'), colors.amber)), fontWeight: 700}}>
						4,200 M <Wd f={f} at={wf(41, 'reached')} lightAt={wf(41, 'pressure')} tone={colors.amber} base={colors.amber}>REACHED</Wd> ONCE
					</span>
					<span style={{...T(30, lit(f, wf(42, 'minutes'), colors.ink)), opacity: lead(f, wf(42, 'twenty'), 8)}}>· {Math.round(rollTo(f, [{frame: wf(42, 'twenty') - 12, value: 0}, {frame: wf(42, 'twenty') + LAND, value: 20}]))} MIN</span>
				</div>
				<div style={{position: 'absolute', top: 0, ...T(28, {}), lineHeight: 1.45, opacity: lead(f, wf(43, 'according'), 8) * (1 - lead(f, wf(44, 'other'), 10))}}>
					<span style={lit(f, wf(43, 'analysis'), colors.ink)}>ANALYSIS </span>
					<span style={lit(f, wf(43, 'company'), colors.ink)}>FOR THE COMPANY: </span>
					<span style={{opacity: lead(f, wf(43, 'limited'), 8), ...lit(f, wf(43, 'limited'), colors.ink)}}>TEST DEPTH LIMITED BY </span>
					<span style={{opacity: lead(f, wf(43, 'titanium'), 8), ...lit(f, wf(43, 'dome'), colors.cyan), fontWeight: 700}}>A TITANIUM DOME, </span>
					<span style={{opacity: lead(f, wf(43, 'carbon'), 8), ...lit(f, wf(43, 'carbon'), colors.amber), fontWeight: 700}}>NOT THE CARBON</span>
				</div>
				<div style={{position: 'absolute', top: 0, ...T(30, {}), lineHeight: 1.45, opacity: lead(f, wf(44, 'other'), 8)}}>
					<div>
						<Wd f={f} at={wf(44, 'other')} lightAt={wf(44, 'days')}>OTHER DAYS: </Wd>
						<Wd f={f} at={wf(44, 'hull')}>THE HULL </Wd>
						<Wd f={f} at={wf(44, 'held')} tone={colors.cyan}>HELD </Wd>
						<Wd f={f} at={wf(44, 'near')}>NEAR </Wd>
						<Wd f={f} at={wf(44, 'four')} lightAt={wf(44, 'thousand')} tone={colors.cyan} bold>4,000 M</Wd>
					</div>
					<div>
						<Wd f={f} at={wf(44, 'then')}>THEN </Wd>
						<Wd f={f} at={wf(44, 'three')} lightAt={wf(44, 'thousand', 1)} tone={colors.cyan} bold>3,</Wd>
						<Wd f={f} at={wf(44, 'eight')} lightAt={wf(44, 'hundred')} tone={colors.cyan} bold>8</Wd>
						<Wd f={f} at={wf(44, 'forty')} tone={colors.cyan} bold>40 M</Wd>
						<Wd f={f} at={wf(44, 'four', 1)} lightAt={wf(44, 'hours')} tone={colors.amber} bold> · 4 HOURS</Wd>
						<Wd f={f} at={wf(44, 'twice')} tone={colors.amber} bold>, TWICE</Wd>
					</div>
				</div>
			</div>
			<div style={{position: 'absolute', right: 0, top: 620}}>
				<Chip text="LOGBOOK: TRANSCRIPTION · USCG ROI" tone={colors.amber} size={26} o={logO} />
			</div>
		</div>
	);
};

// ── 5 · Listen to it (s47–s57): the acoustic monitor, its limits, its threshold ─────────────────────────────────

const DEAD = [0, 2, 4];
const Listen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const {cx, cy, len, r} = HULL;
	const q = vis(f, sf(47) - 10, wf(48, 'listen') + 4, 10, 12);
	const ring = vis(f, wf(48, 'listen') - 8, sf(49) + 20);
	const hull = vis(f, sf(49) - 6, ef(50) + 20);
	const crackle = f >= wf(50, 'crackle') ? flash(f, wf(50, 'crackle'), 0) : 0;
	const panels = vis(f, sf(51) - 10, ef(57) + 120);
	const pilot = lead(f, wf(52, 'pilot'), 10);
	const after = lead(f, wf(52, 'downloaded'), 10);
	const win = lead(f, wf(53, 'dive'), 12);
	const surf = lead(f, wf(53, 'surface'), 10);
	const stor = lead(f, wf(53, 'storage'), 10);
	const dead = lead(f, wf(54, 'three'), 10);
	const people = lead(f, wf(55, 'emailed'), 10);
	const thr = lead(f, wf(56, 'alert'), 12);
	return (
		<>
			{/* s47: the question, alone */}
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink, letterSpacing: 1}}>
					<span style={{opacity: lead(f, wf(47, 'how'), 8)}}>How would anyone </span>
					<span style={{opacity: lead(f, wf(47, 'know'), 8), color: f >= wf(47, 'failing') ? colors.amber : colors.ink}}>know?</span>
				</div>
			</AbsoluteFill>
			{ring > 0 ? (
				<AbsoluteFill style={{opacity: ring}}>
					<RealFootage f={f} start={wf(48, 'listen') - 8} end={sf(49) + 34} src="footage/ndt_ring.mp4" date="" what="ACOUSTIC SIGNALS FROM A COMPOSITE RING · REFERENCE, NOT TITAN" source="J P / YOUTUBE · CC BY" push={0.06} />
					<div style={{position: 'absolute', left: 96, top: 96}}>
						<Pop f={f} fps={fps} at={wf(48, "oceangate's")}>
							<Chip text={f >= wf(48, 'listen') ? "OCEANGATE'S ANSWER: LISTEN TO IT" : f >= wf(48, 'answer') ? "OCEANGATE'S ANSWER" : 'OCEANGATE'} tone={colors.cyan} size={34} />
						</Pop>
					</div>
				</AbsoluteFill>
			) : null}
			{hull > 0 ? (
				<AbsoluteFill style={{opacity: hull}}>
					<Mount x={160} y={110} w={1600} h={800} start={sf(49) - 6} end={ef(50) + 20} source="TITAN'S HULL MONITOR · SENSOR COUNT: USCG MBI REPORT" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<g transform="translate(0 -40)">
							<HullLines draw={1} wall={1} />
							{AE_POS.map(([u, v], i) => {
								const at = wf(49, 'eight') + i * 3;
								const x = cx + u * len;
								const y = cy + v * (r + 18);
								return (
									<g key={i} opacity={lead(f, at, 8)}>
										<circle cx={x} cy={y} r={14 * bump(f, fps, at + LAND, 0.2)} fill={colors.cyan} />
										{crackle > 0 ? <circle cx={x} cy={y} r={14 + 40 * crackle} fill="none" stroke={colors.amber} strokeWidth={2} opacity={crackle} /> : null}
									</g>
								);
							})}
							{SG_POS.map(([u, v], i) => {
								const at = wf(49, 'sixteen') + i * 2;
								const x = cx + u * len;
								const y = cy + v * r;
								return (
									<g key={i} opacity={lead(f, at, 8)}>
										<rect x={x - 12} y={y - 7} width={24} height={14} fill="none" stroke={colors.ink} strokeWidth={2} />
										<rect x={x - 7} y={y - 12} width={14} height={24} fill="none" stroke={colors.ink} strokeWidth={2} opacity={0.7} />
									</g>
								);
							})}
						</g>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 160, display: 'flex', gap: 22, ...T(30, {})}}>
						<span style={{opacity: lead(f, wf(49, 'eight'), 8), ...lit(f, wf(49, 'sensors'), colors.cyan)}}>● 8 ACOUSTIC SENSORS</span>
						<span style={{opacity: lead(f, wf(49, 'sixteen'), 8), ...lit(f, wf(49, 'gauges'))}}>▭ 16 STRAIN GAUGES</span>
						<span style={{opacity: lead(f, wf(49, 'inside'), 8), ...lit(f, wf(49, 'hull'))}}>INSIDE THE HULL</span>
					</div>
					<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 18, alignItems: 'center', ...T(30, {})}}>
						<span style={{opacity: lead(f, wf(50, 'theory'), 8), ...lit(f, wf(50, 'theory'), colors.amber)}}>THE THEORY:</span>
						<span style={{opacity: lead(f, wf(50, 'crackle'), 8), ...lit(f, wf(50, 'crackle'), colors.amber), fontWeight: 700}}>IT WOULD CRACKLE</span>
						<span style={{opacity: lead(f, wf(50, 'weakened'), 8), ...lit(f, wf(50, 'weakened'))}}>AS IT WEAKENED</span>
						<Wd f={f} at={wf(50, 'company')}>THE COMPANY WOULD</Wd>
						<span style={{opacity: lead(f, wf(50, 'retire'), 8)}}>
							<Chip text={f >= wf(50, 'time') ? 'RETIRE IT IN TIME' : 'RETIRE IT'} tone={colors.cyan} size={30} />
						</span>
					</div>
				</AbsoluteFill>
			) : null}
			{panels > 0 ? (
				<AbsoluteFill style={{opacity: panels}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(51) - 10} end={ef(57) + 120} source="HOW THE MONITOR WAS USED: NTSB MIR-25-36 · USCG MBI REPORT" labels={['RECONSTRUCTION']} lean={3} />
					<div style={{position: 'absolute', left: 200, top: 140, ...T(40, lit(f, wf(51, 'limits'), colors.amber)), fontWeight: 700, opacity: lead(f, wf(51, 'system'), 8)}}>{f >= wf(51, 'limits') ? 'THE SYSTEM HAD LIMITS' : 'THE SYSTEM'}</div>
					{/* A · s52–s55: what it saw, when, and who read it */}
					<AbsoluteFill style={{opacity: 1 - lead(f, wf(56, 'alert'), 12)}}>
						<div style={{position: 'absolute', left: 200, top: 222, display: 'flex', gap: 22, alignItems: 'center', opacity: pilot, whiteSpace: 'nowrap'}}>
							<Chip text="PILOT · LIVE READINGS" tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(52, 'live') + LAND, 0.06).toFixed(4)})`}} />
							<span style={{opacity: lead(f, wf(52, 'full'), 8), ...T(30, lit(f, wf(52, 'data')))}}>FULL DATA:</span>
							<span style={{opacity: after}}>
								<Chip text={f >= wf(52, 'dive') ? 'DOWNLOADED ONLY AFTER EACH DIVE' : f >= wf(52, 'only') ? 'DOWNLOADED ONLY AFTER' : 'DOWNLOADED'} tone={colors.amber} size={30} />
							</span>
						</div>
						<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
							<g opacity={lead(f, wf(53, 'acoustic'), 10)}>
								<text x={200} y={330} style={T(28, lit(f, wf(53, 'analysed'), colors.ink))}>ACOUSTIC DATA ANALYSED:</text>
								<text x={640} y={330} style={T(28, lit(f, wf(53, 'damage'), colors.red))} opacity={lead(f, wf(53, 'damage'), 8)}>DAMAGE AT THE SURFACE OR IN STORAGE?</text>
								<rect x={200} y={350} width={1520} height={70} fill="none" stroke={colors.border} strokeWidth={2} />
								<rect x={620} y={350} width={680 * win} height={70} fill={colors.cyan} opacity={0.3} />
								<text x={960} y={395} textAnchor="middle" style={T(30, {fill: colors.ink, fontWeight: 700})} opacity={win}>THE DIVE ITSELF</text>
								<g opacity={surf}>
									<rect x={200} y={350} width={420} height={70} fill={colors.red} opacity={0.14} />
									<text x={410} y={395} textAnchor="middle" style={T(28, lit(f, wf(53, 'surface'), colors.red))}>AT THE SURFACE</text>
								</g>
								<g opacity={stor}>
									<rect x={1300} y={350} width={420} height={70} fill={colors.red} opacity={0.14} />
									<text x={1510} y={395} textAnchor="middle" style={T(28, lit(f, wf(53, 'storage'), colors.red))}>IN STORAGE</text>
								</g>
								<text x={200} y={462} style={T(30, lit(f, wf(53, 'alert'), colors.red))} opacity={lead(f, wf(53, 'raise'), 8)}>
									OUTSIDE THE DIVE: NO ALERT POSSIBLE
								</text>
							</g>
							{/* s54: three of eight channels silent all 2022 */}
							<g opacity={lead(f, wf(54, 'twenty'), 10)}>
								<text x={200} y={540} style={T(28, lit(f, wf(54, 'twenty-two'), colors.ink))}>2022 ·</text>
								<text x={310} y={540} style={T(28, lit(f, wf(54, 'eight'), colors.cyan))} opacity={lead(f, wf(54, 'eight'), 8)}>8 ACOUSTIC CHANNELS</text>
								<text x={680} y={540} style={T(28, lit(f, wf(54, 'registered'), colors.ink))} opacity={lead(f, wf(54, 'registered'), 8)}>REGISTERED:</text>
								{Array.from({length: 8}).map((_, i) => {
									const off = DEAD.includes(i) ? dead : 0;
									return (
										<g key={i}>
											<circle cx={226 + i * 66} cy={590} r={22} fill={off > 0.5 ? colors.card : colors.cyan} stroke={off > 0.5 ? colors.red : colors.cyan} strokeWidth={3} />
											<text x={226 + i * 66} y={599} textAnchor="middle" style={T(26, {fill: off > 0.5 ? colors.red : colors.void, fontWeight: 700})}>{i + 1}</text>
										</g>
									);
								})}
								<text x={770} y={600} style={T(30, lit(f, wf(54, 'events'), colors.red))} opacity={lead(f, wf(54, 'no'), 8)}>
									{f >= wf(54, 'season') ? 'CH 1, 3, 5: NO ACOUSTIC EVENTS · ALL SEASON' : 'CH 1, 3, 5: NO ACOUSTIC EVENTS'}
								</text>
							</g>
							{/* s55: looked at first, then emailed to eight to ten people */}
							<g opacity={lead(f, wf(55, 'after'), 10)}>
								<text x={200} y={690} style={T(28, lit(f, wf(55, 'dive'), colors.cyan))}>AFTER EACH DIVE</text>
								<rect x={200} y={712} width={370} height={70} fill={colors.card} stroke={f >= wf(55, 'looked') ? colors.cyan : colors.border} strokeWidth={2} opacity={lead(f, wf(55, 'engineering'), 8)} />
								<text x={385} y={756} textAnchor="middle" style={T(28, lit(f, wf(55, 'director'), colors.ink))} opacity={lead(f, wf(55, 'engineering'), 8)}>ENGINEERING DIRECTOR</text>
								<text x={385} y={820} textAnchor="middle" style={T(28, lit(f, wf(55, 'first'), colors.cyan))} opacity={lead(f, wf(55, 'looked'), 8)}>LOOKS FIRST</text>
								{Array.from({length: 10}).map((_, i) => {
									const k = lead(f, wf(55, 'eight') + i * 3, 8) * people;
									const x = 720 + i * 100;
									const ceo = i === 0;
									return (
										<g key={i} opacity={k}>
											<line x1={570} y1={747} x2={x - 22} y2={747} stroke={colors.border} strokeWidth={1.5} />
											<circle cx={x} cy={747} r={20} fill={ceo && f >= wf(55, 'chief') ? colors.amber : 'none'} stroke={i >= 8 ? colors.sub : colors.ink} strokeWidth={2} strokeDasharray={i >= 8 ? '4 4' : undefined} />
										</g>
									);
								})}
								<text x={720} y={820} style={T(28, lit(f, wf(55, 'people'), colors.ink))} opacity={lead(f, wf(55, 'eight'), 8)}>
									EMAILED TO ≈ 8–<tspan style={lit(f, wf(55, 'ten'), colors.ink)}>10</tspan> PEOPLE
								</text>
								<text x={720} y={700} textAnchor="middle" style={T(28, lit(f, wf(55, 'executive'), colors.amber))} opacity={lead(f, wf(55, 'chief'), 8)}>THE CEO</text>
							</g>
						</svg>
					</AbsoluteFill>
					{/* B · s56–s57: the threshold, and where it came from */}
					<AbsoluteFill style={{opacity: thr}}>
						<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
							{/* an acoustic trace under a threshold line (ILLUSTRATIVE), the line's source on its words */}
							<path d={`M 200 640 ${Array.from({length: 120}).map((_, i) => `L ${200 + i * 13} ${640 - Math.abs(Math.sin(i * 1.7) * Math.sin(i * 0.37)) * 120}`).join(' ')}`} fill="none" stroke={colors.cyan} strokeWidth={2} opacity={0.75} />
							<line x1={200} x2={200 + 1540 * lead(f, wf(56, 'criteria'), 16)} y1={430} y2={430} stroke={colors.amber} strokeWidth={4} strokeDasharray="14 10" />
							<text x={200} y={410} style={T(30, lit(f, wf(56, 'criteria'), colors.amber))}>ALERT THRESHOLD</text>
							<text x={200} y={700} style={T(26, {fill: colors.ink})}>ILLUSTRATIVE VALUES</text>
						</svg>
						<div style={{position: 'absolute', left: 560, top: 380, ...T(30, {}), whiteSpace: 'nowrap'}}>
							<Wd f={f} at={wf(56, 'set')} tone={colors.amber}>SET ON </Wd>
							<Wd f={f} at={wf(56, 'sounds')} tone={colors.amber}>THE SOUNDS OF </Wd>
							<Wd f={f} at={wf(56, 'earlier')} lightAt={wf(56, 'hulls')} tone={colors.amber} bold>EARLIER HULLS</Wd>
							<Wd f={f} at={wf(56, 'scale')} lightAt={wf(56, 'models')} tone={colors.amber} bold> + SCALE MODELS</Wd>
						</div>
						<div style={{position: 'absolute', left: 560, top: 470, ...T(30, {}), whiteSpace: 'nowrap'}}>
							<Wd f={f} at={wf(56, 'built')}>BUILT </Wd>
							<Wd f={f} at={wf(56, 'different')} lightAt={wf(56, 'way')} tone={colors.amber} bold>A DIFFERENT WAY</Wd>
						</div>
						<Card x={200} y={760} w={1520} o={lead(f, wf(57, 'no'), 10)} accent={colors.red} style={{padding: '20px 28px'}}>
							<div style={{display: 'flex', gap: 26, alignItems: 'baseline', ...T(32, {}), whiteSpace: 'nowrap'}}>
								<span>
									<Wd f={f} at={wf(57, 'no')} lightAt={wf(57, 'model')}>MODELS </Wd>
									<Wd f={f} at={wf(57, 'built')}>BUILT </Wd>
									<Wd f={f} at={wf(57, "hull's")} lightAt={wf(57, 'way')}>THIS HULL'S WAY: </Wd>
									<span style={{color: colors.red, fontWeight: 700}}>0</span>
								</span>
								<span style={{opacity: lead(f, wf(57, 'n'), 8)}}>
									<Chip text="N-T-S-B FOUND" tone={colors.cyan} size={28} />
								</span>
							</div>
							<div style={{marginTop: 10, ...T(34, {}), fontWeight: 700, whiteSpace: 'nowrap'}}>
								<Wd f={f} at={wf(57, 'oceangate')}>OCEANGATE HAD </Wd>
								<Wd f={f} at={wf(57, 'no', 1)} lightAt={wf(57, 'data')} tone={colors.red}>NO DATA </Wd>
								<Wd f={f} at={wf(57, 'how')} lightAt={wf(57, 'one')} tone={colors.red}>ON HOW THIS ONE </Wd>
								<Wd f={f} at={wf(57, 'sound')} lightAt={wf(57, 'failed')} tone={colors.red}>WOULD SOUND AS IT FAILED</Wd>
							</div>
						</Card>
					</AbsoluteFill>
				</AbsoluteFill>
			) : null}
		</>
	);
};

export const act2: SceneDef[] = [
	{
		id: 'a2-pressure',
		from: hold(21).from,
		to: ef(22) + 40,
		C: Pressure,
		cues: [
			{frame: hold(21).from + 12, sfx: 'whoosh', gainDb: -26},
			{frame: wf(22, 'forty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(22, 'eighty'), sfx: 'pressure_drop', gainDb: -26},
		],
	},
	{
		id: 'a2-build',
		from: sf(23) - 16,
		to: ef(25) + 36,
		C: Build,
		cues: [
			{frame: wf(24, 'cylinder'), sfx: 'pen_scratch', gainDb: -26},
			{frame: wf(24, 'five'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(24, 'bonded'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(25, 'bolted'), sfx: 'relay_click', gainDb: -22},
		],
	},
	{id: 'a2-why-carbon', from: sf(26) - 16, to: ef(27) + 36, C: WhyCarbon, cues: [{frame: wf(26, 'according'), sfx: 'paper_slide', gainDb: -26}]},
	{
		id: 'a2-margin',
		from: sf(28) - 16,
		to: ef(46) + 50,
		C: Margin,
		cues: [
			{frame: wf(29, 'six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(29, 'half'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(30, 'one'), sfx: 'stamp', gainDb: -24},
			{frame: wf(31, 'hundred'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(34, 'imploded'), sfx: 'metal_snap_sub', gainDb: -24},
			{frame: wf(36, 'model'), sfx: 'stamp', gainDb: -24},
			{frame: wf(37, 'money'), sfx: 'stamp', gainDb: -26},
			{frame: wf(41, 'once'), sfx: 'stamp', gainDb: -24},
			{frame: wf(43, 'carbon'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(45, 'failure'), sfx: 'pen_scratch', gainDb: -24},
		],
	},
	{
		id: 'a2-listen',
		from: sf(47) - 16,
		to: hold(57).from + hold(57).frames,
		C: Listen,
		cues: [
			{frame: wf(49, 'eight'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(50, 'crackle'), sfx: 'pen_scratch', gainDb: -26},
			{frame: wf(53, 'surface'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(54, 'three'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(55, 'emailed'), sfx: 'whoosh', gainDb: -30},
			{frame: wf(57, 'data'), sfx: 'stamp', gainDb: -24},
		],
	},
];
