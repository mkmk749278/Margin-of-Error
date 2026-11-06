import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {BracketLock, bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {SfxCue} from '../../../../lib/remotion/sfx';
import {RecordPage} from '../docs';
import {ActTitle, Mount, STRIP, useFilmFrame} from '../kit';
import {Card, Dateline, Gauge, Honesty, Hopper, lit, mono, offW, onW, Pop, ROUTE, RouteLine, span} from '../parts';
import {ef, sf, wf} from '../timing';
import er from '../data/er_ns4178.json';
import {SceneDef} from './types';

// ACT I · THE INCIDENT (sentences 0–31). Choreography table: scenes/choreography/act1.md. Every cue is a literal
// wf(sentence, 'word') on the measured narration (vo/timing.json, scripts/word_align.py).

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});

// ── 1 · Salem: the dateline, then the camera's view (s0–s5) ─────────────────────────────────────────────────────

const CAM = {x: 120, y: 96, w: 1680, h: 860};
const CAM_IH = CAM.h - STRIP;

const Salem: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const dateO = offW(f, wf(3, 'freight') - 6, 18);
	// the train eases to a stop with car 23 inside the camera's view
	const carW = 250;
	const gap = 14;
	const x23 = tween(f, wf(3, 'passing') - 40, wf(4, 'twenty-third') - 10, -420, 640, ease.arrive);
	// the camera pushes in on the leading wheelset of car 23 from "fire" (s5) to "wheel"
	const wheelX = x23 + carW * 0.86;
	const railY = 560;
	const z = 1 + 1.9 * span(f, wf(5, 'fire'), wf(5, 'wheel') + 8);
	const zx = interpolate(z, [1, 2.9], [CAM.w / 2, wheelX], clamp);
	const zy = interpolate(z, [1, 2.9], [CAM_IH / 2, railY - 30], clamp);
	const g = `translate(${CAM.w / 2} ${CAM_IH / 2}) scale(${z.toFixed(4)}) translate(${-zx} ${-zy})`;
	const factory = lead(f, wf(3, 'factory'), 24);
	const camOn = Math.max(0.5 * lead(f, wf(3, 'surveillance'), 10), lead(f, wf(3, 'camera'), 14));
	const rec = flash(f, wf(3, 'records'), 0.25);
	const fire = lead(f, wf(3, 'fire'), 10);
	const n23 = Math.round(rollTo(f, [{frame: wf(4, 'twenty-third') - 16, value: 1}, {frame: wf(4, 'twenty-third') + LAND, value: 23}]));
	const cars = [-3, -2, -1, 0, 1, 2, 3];
	const diagO = Math.min(lead(f, wf(3, 'freight') + 4, 18), 1);
	return (
		<>
			<Dateline f={f} fps={fps} day={wf(0, 'third')} month={wf(0, 'february')} yearA={wf(0, 'twenty')} year={wf(0, 'twenty-three')} clock={wf(1, 'eight')} clockMin={wf(1, 'thirteen')} place={wf(2, 'salem')} state={wf(2, 'ohio')} o={dateO} />
			{diagO > 0 ? (
				<AbsoluteFill style={{opacity: diagO}}>
					<Mount x={CAM.x} y={CAM.y} w={CAM.w} h={CAM.h} source="SALEM, OHIO · 03 FEB 2023 · 8:13 P.M. · THE REAL FRAME: NTSB RIR-24-05, FIG. 5" start={wf(3, 'freight') - 14} end={ef(5) + 40}>
						<svg width={CAM.w} height={CAM_IH} viewBox={`0 0 ${CAM.w} ${CAM_IH}`}>
							<g transform={g}>
								{/* ground and track */}
								<line x1={-400} y1={railY + 4} x2={2200} y2={railY + 4} stroke={colors.sub} strokeWidth={4} />
								{Array.from({length: 60}, (_, i) => (
									<line key={i} x1={-400 + i * 44} y1={railY + 8} x2={-400 + i * 44 - 10} y2={railY + 22} stroke={colors.border} strokeWidth={3} />
								))}
								{/* the factory and its camera */}
								<rect x={1060} y={170} width={560} height={300} fill="none" stroke={colors.cyan} strokeWidth={3} strokeDasharray={1720} strokeDashoffset={1720 * (1 - factory)} />
								<text x={1340} y={250} textAnchor="middle" fontFamily={mono} fontSize={36} fill={colors.ink} opacity={factory} letterSpacing={3}>
									FACTORY
								</text>
								<g opacity={camOn}>
									<polygon points={`1080,200 260,${railY - 40} 1000,${railY - 40}`} fill={colors.amber} opacity={0.06 + 0.14 * rec} />
									<line x1={1080} y1={200} x2={260} y2={railY - 40} stroke={colors.amber} strokeWidth={2} strokeDasharray="10 8" />
									<line x1={1080} y1={200} x2={1000} y2={railY - 40} stroke={colors.amber} strokeWidth={2} strokeDasharray="10 8" />
									<rect x={1066} y={186} width={34} height={22} fill={colors.amber} />
									<text x={1080} y={150} textAnchor="middle" fontFamily={mono} fontSize={36} fill={colors.amber} letterSpacing={2}>
										SURVEILLANCE CAMERA
									</text>
								</g>
								{/* the train: car 23 and its neighbours; the car ahead of it is to the right (eastbound) */}
								{cars.map((k) => {
									const x = x23 + k * (carW + gap);
									const is23 = k === 0;
									return <Hopper key={k} x={x} y={railY} w={carW} tone={is23 && f >= wf(4, 'twenty-third') ? colors.amber : colors.sub} fire={is23 ? fire : 0} lightWheel={is23 && f >= wf(5, 'wheel') ? 1 : 0} />;
								})}
								{/* the bearing at the end of the leading axle (L1), then its label */}
								{f >= wf(5, 'bearing') - 12 ? (
									<g opacity={lead(f, wf(5, 'bearing'), 12)}>
										<circle cx={wheelX} cy={railY - carW * 0.045} r={5.5} fill={colors.amber} />
									</g>
								) : null}
							</g>
							<BracketLock f={f} fps={fps} word={wf(4, 'twenty-third')} x={x23 - 8} y={railY - carW * 0.36 - 14} w={carW + 16} h={carW * 0.36 + 22} tone="amber" until={wf(5, 'fire') - 6} />
							<BracketLock f={f} fps={fps} word={wf(5, 'bearing')} x={CAM.w / 2 - 70} y={CAM_IH / 2 - 70} w={140} h={140} tone="amber" />
						</svg>
						{/* car 23: the count lands on its word, then the type */}
						{f >= wf(4, 'twenty-third') - 16 && f < wf(5, 'fire') + 10 ? (
							<div style={{position: 'absolute', left: Math.max(40, x23), top: 300, opacity: Math.min(lead(f, wf(4, 'twenty-third') - 6, 14), offW(f, wf(5, 'fire') - 4, 12))}}>
								<div style={T(64, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(4, 'twenty-third') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>CAR {n23}</div>
								<Pop f={f} fps={fps} on={wf(4, 'covered')}>
									<div style={T(36, {color: colors.ink, marginTop: 6})}>COVERED HOPPER · GPLX75465</div>
								</Pop>
							</div>
						) : null}
						{f >= wf(5, 'wheel') - 8 ? (
							<div style={{position: 'absolute', right: 40, top: 110, background: 'rgba(10,13,18,0.92)', border: `1px solid ${colors.border}`, padding: '18px 24px'}}>
								<Pop f={f} fps={fps} on={wf(5, 'wheel')}>
									<div style={T(36, {...lit(f, wf(5, 'wheel'), colors.ink)})}>WHEELSET</div>
								</Pop>
								<Pop f={f} fps={fps} on={wf(5, 'bearing')}>
									<div style={T(44, {fontWeight: 700, color: colors.amber, marginTop: 10})}>BEARING</div>
								</Pop>
								<Pop f={f} fps={fps} on={wf(5, 'leading')}>
									<div style={T(36, {color: colors.ink, marginTop: 10})}>LEADING AXLE · L1</div>
								</Pop>
								<Pop f={f} fps={fps} on={wf(5, 'axle')}>
									<div style={T(26, {color: colors.sub, marginTop: 10})}>FIRE ON THE L1 BEARING · NTSB P. 104</div>
								</Pop>
							</div>
						) : null}
						<Pop f={f} fps={fps} on={wf(3, 'train')} style={{position: 'absolute', left: 40, top: CAM_IH - 80}}>
							<div style={T(36, {color: colors.ink})}>FREIGHT TRAIN · EASTBOUND →</div>
						</Pop>
						{f >= wf(3, 'one') - 4 && f < wf(4, 'twenty-third') ? (
							<div style={{position: 'absolute', left: Math.max(40, x23), top: 320, opacity: Math.min(lead(f, wf(3, 'one'), 6), offW(f, wf(4, 'twenty-third') - 26, 8)), ...T(36, {color: colors.amber})}}>ONE OF ITS CARS</div>
						) : null}
						<Honesty text="RECONSTRUCTION" x={CAM.w - 40} y={30} anchor="right" />
					</Mount>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 2 · The detector reads 103 (s6–s11) ────────────────────────────────────────────────────────────────────────────

const Detector: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const elevO = offW(f, wf(9, 'so') - 8, 16);
	const flowO = lead(f, wf(9, 'so') + 6, 16);
	// the wheelset rolls in over the detector on "crosses"
	const wx = tween(f, wf(6, 'crosses') - 30, wf(6, 'hot') + 4, -260, 520, ease.arrive);
	const railY = 500;
	const box = lead(f, wf(6, 'detector'), 14);
	const ir = lead(f, wf(6, 'infrared'), 18);
	const scan = flash(f, wf(7, 'reads'), 0.2);
	const L = {x: 96, y: 150, w: 1080, h: 790};
	return (
		<>
			{elevO > 0 ? (
				<AbsoluteFill style={{opacity: elevO}}>
					<Mount x={L.x} y={L.y} w={L.w} h={L.h} source="HOT BEARING DETECTOR · AFTER NTSB RIR-24-05 FIGS. 13–14, P. 4 N. 11" labels={['ILLUSTRATION']} start={sf(6) - 10} end={wf(9, 'so') + 20}>
						<svg width={L.w} height={L.h - STRIP} viewBox={`0 0 ${L.w} ${L.h - STRIP}`}>
							<line x1={0} y1={railY} x2={L.w} y2={railY} stroke={colors.sub} strokeWidth={6} />
							<rect x={0} y={railY + 3} width={L.w} height={14} fill={colors.border} />
							{/* the wheelset, end on: wheel, axle end, bearing cup outboard of the wheel */}
							<g transform={`translate(${wx} 0)`}>
								<circle cx={0} cy={railY - 120} r={120} fill={colors.card} stroke={colors.sub} strokeWidth={4} />
								<rect x={-40} y={railY - 160} width={80} height={80} fill={colors.void} stroke={f >= wf(7, 'bearing') ? colors.amber : colors.sub} strokeWidth={4} />
								<text x={0} y={railY - 300} textAnchor="middle" fontFamily={mono} fontSize={36} fill={colors.ink} opacity={lead(f, wf(6, 'train'), 10)}>
									{f >= wf(7, 'bearing') ? 'L1 BEARING' : 'CAR 23 · AXLE 1'}
								</text>
							</g>
							{/* the detector box beside the rail, its two upward infrared eyes */}
							<g opacity={box}>
								<rect x={470} y={railY + 24} width={100} height={54} fill={colors.card} stroke={colors.cyan} strokeWidth={3} />
								<text x={520} y={railY + 128} textAnchor="middle" fontFamily={mono} fontSize={36} fill={colors.cyan} letterSpacing={2}>
									HOT BEARING DETECTOR
								</text>
							</g>
							{[490, 550].map((x0, i) => (
								<polygon key={x0} points={`${x0},${railY + 24} ${x0 - 60 + i * 40},${railY - 200} ${x0 + 20 + i * 40},${railY - 200}`} fill={colors.cyan} opacity={ir * (0.18 + 0.4 * scan)} />
							))}
							<text x={640} y={railY - 210} fontFamily={mono} fontSize={36} fill={colors.ink} opacity={lead(f, wf(6, 'sensor'), 10)}>
								2 INFRARED EYES
							</text>
							<BracketLock f={f} fps={fps} word={wf(6, 'beside')} x={455} y={railY + 12} w={130} h={78} tone="cyan" />
						</svg>
						<div style={{position: 'absolute', left: 40, top: 40, display: 'flex', gap: 22, alignItems: 'baseline', opacity: onW(f, wf(8, 'crew'), 10)}}>
							<span style={T(36, {...lit(f, wf(8, 'crew'), colors.ink)})}>AT THE LINE, THE CREW:</span>
							<span style={T(36, {fontWeight: 700, opacity: onW(f, wf(8, 'slow'), 8), ...lit(f, wf(8, 'slow'), colors.amber)})}>SLOW DOWN</span>
							<span style={T(36, {fontWeight: 700, opacity: onW(f, wf(8, 'stop'), 8), ...lit(f, wf(8, 'stop'), colors.amber)})}>STOP</span>
						</div>
					</Mount>
				</AbsoluteFill>
			) : null}
			{/* the reading and the stop line: one driver for bar and number */}
			<Gauge
				f={f}
				fps={fps}
				x={1220}
				y={190}
				h={600}
				on={wf(6, 'detector')}
				keys={[
					{frame: wf(7, 'one') - 10, value: 0},
					{frame: wf(7, 'three') + LAND, value: 103},
				]}
				stopLine={wf(8, 'line')}
				stopKeys={[
					{frame: wf(8, 'one') - 6, value: 0},
					{frame: wf(8, 'hundred') + LAND, value: 100},
					{frame: wf(8, 'seventy') - 10, value: 100},
					{frame: wf(8, 'seventy') + LAND, value: 170},
				]}
				unitAt={wf(7, 'fahrenheit')}
				subAt={wf(7, 'air')}
				o={offW(f, ef(11) + 6, 16)}
				source="SALEM · MP 69.01 · NTSB P. 6, P. 104"
			/>
			{/* the alert: where it went, where it did not */}
			{flowO > 0 ? (
				<AbsoluteFill style={{opacity: flowO}}>
					<Card x={96} y={210} w={1080} h={640}>
						<div style={{position: 'absolute', left: 40, top: 40}}>
							<div style={T(36, {...lit(f, wf(9, 'detector'), colors.cyan)})}>DETECTOR · MP 69.01</div>
						</div>
						<svg style={{position: 'absolute', left: 0, top: 0}} width={1080} height={640}>
							<line x1={200} y1={110} x2={200 + 560 * lead(f, wf(10, 'help'), 20)} y2={110 + 300 * lead(f, wf(10, 'help'), 20)} stroke={colors.amber} strokeWidth={4} />
							<line x1={200} y1={110} x2={200} y2={110 + 300 * lead(f, wf(10, 'train'), 16)} stroke={f >= wf(10, 'not') ? colors.border : colors.sub} strokeWidth={4} strokeDasharray="12 10" />
						</svg>
						<Pop f={f} fps={fps} on={wf(9, 'alert')} style={{position: 'absolute', left: 380, top: 120}}>
							<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>ALERT</div>
						</Pop>
						<div style={{position: 'absolute', left: 60, top: 430, width: 320, opacity: onW(f, wf(10, 'train'), 10)}}>
							<div style={T(36, {color: f >= wf(11, 'cab') ? colors.ink : colors.sub})}>TRAIN CREW</div>
							<div style={T(36, {color: colors.sub})}>IN THE CAB</div>
							<div style={T(44, {fontWeight: 700, marginTop: 14, opacity: onW(f, wf(11, 'nothing'), 8), color: colors.sub, transform: `scale(${bump(f, fps, wf(11, 'nothing') + LAND).toFixed(4)})`, transformOrigin: '0 50%'})}>NO ALARM</div>
						</div>
						<div style={{position: 'absolute', left: 620, top: 430, width: 420, opacity: onW(f, wf(10, 'help'), 10)}}>
							<div style={T(36, {fontWeight: 700, ...lit(f, wf(10, 'desk'), colors.amber)})}>WAYSIDE HELP DESK</div>
							<div style={T(26, {color: colors.ink, marginTop: 8})}>NON-CRITICAL ALERT · NTSB P. 7</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 3 · The train: 32N, 149 cars, 9,309 feet (s12) ────────────────────────────────────────────────────────────────

const Consist: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const n = Math.round(rollTo(f, [{frame: wf(12, 'one') - 4, value: 0}, {frame: wf(12, 'forty-nine') + LAND, value: 149}]));
	const ft = Math.round(rollTo(f, [{frame: wf(12, 'nine') - 6, value: 0}, {frame: wf(12, 'thousand') + LAND, value: 9000}, {frame: wf(12, 'three') - 4, value: 9000}, {frame: wf(12, 'nine', 1) + LAND, value: 9309}]));
	const x0 = 150;
	const x1 = 1770;
	const per = (x1 - x0 - 3 * 34) / 149;
	const y = 560;
	const dim = lead(f, wf(12, 'nine'), 20);
	return (
		<Card x={96} y={200} w={1728} h={660}>
			<div style={{position: 'absolute', left: 54, top: 44, display: 'flex', gap: 30, alignItems: 'baseline'}}>
				<span style={T(44, {fontWeight: 700, opacity: onW(f, wf(12, 'norfolk')), ...lit(f, wf(12, 'norfolk'))})}>NORFOLK SOUTHERN</span>
				<span style={T(64, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(12, 'thirty-two')), transform: `scale(${bump(f, fps, wf(12, 'thirty-two') + LAND).toFixed(4)})`, display: 'inline-block'})}>TRAIN 32N</span>
			</div>
			<svg style={{position: 'absolute', left: 0, top: 0}} width={1728} height={660}>
				{[0, 1, 2].map((i) => (
					<rect key={i} x={x0 - 96 + i * 34} y={y - 300 - 26} width={30} height={26} fill={colors.cyan} opacity={onW(f, wf(12, 'train'), 10)} />
				))}
				{Array.from({length: n}, (_, i) => (
					<rect key={i} x={x0 - 96 + 3 * 34 + i * per} y={y - 300 - 22} width={Math.max(2, per - 2)} height={22} fill={i === 22 ? colors.amber : colors.sub} />
				))}
				{dim > 0 ? (
					<g opacity={dim}>
						<line x1={x0 - 96} y1={y - 250} x2={x0 - 96 + (x1 - x0) * dim} y2={y - 250} stroke={colors.ink} strokeWidth={2} />
						<line x1={x0 - 96} y1={y - 262} x2={x0 - 96} y2={y - 238} stroke={colors.ink} strokeWidth={2} />
						{dim >= 0.99 ? <line x1={x1 - 96} y1={y - 262} x2={x1 - 96} y2={y - 238} stroke={colors.ink} strokeWidth={2} /> : null}
					</g>
				) : null}
			</svg>
			<div style={{position: 'absolute', left: 54, top: 380, display: 'flex', gap: 80}}>
				<div style={{opacity: onW(f, wf(12, 'one') - 6, 10)}}>
					<div style={T(96, {fontWeight: 700, color: colors.ink, transform: `scale(${bump(f, fps, wf(12, 'cars') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>{n}</div>
					<div style={T(36, {color: colors.sub})}>CARS · 3 LOCOMOTIVES</div>
				</div>
				<div style={{opacity: dim}}>
					<div style={T(96, {fontWeight: 700, color: colors.ink, transform: `scale(${bump(f, fps, wf(12, 'feet') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>{ft.toLocaleString('en-US')} FT</div>
					<div style={T(36, {color: colors.sub})}>LONG · 2,837 M · NTSB P. 4</div>
				</div>
				<div style={{opacity: onW(f, wf(12, 'forty-nine') + 20, 12)}}>
					<div style={T(96, {fontWeight: 700, color: colors.amber})}>23</div>
					<div style={T(36, {color: colors.sub})}>THE BURNING CAR</div>
				</div>
			</div>
		</Card>
	);
};

// ── 4 · Loop 1: why 170 is on the record (s13–s14) ──────────────────────────────────────────────────────────────

const Loop1: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const paper = lead(f, wf(13, 'record'), 22);
	const lift = flash(f, wf(14, 'film'), 0);
	return (
		<>
			<Card x={140} y={250} w={640} h={520} accent={colors.amber}>
				<div style={{position: 'absolute', left: 50, top: 50}}>
					<div style={T(36, {...lit(f, wf(13, 'why'), colors.ink)})}>WHY THE LINE SAT AT</div>
					<div style={T(150, {fontWeight: 700, color: colors.amber, marginTop: 10, opacity: onW(f, wf(13, 'one'), 10), transform: `scale(${bump(f, fps, wf(13, 'seventy') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>170°F</div>
					<div style={T(36, {marginTop: 30, opacity: onW(f, wf(13, 'railroad')), ...lit(f, wf(13, 'railroad'))})}>IN THE RAILROAD</div>
					<div style={T(36, {opacity: onW(f, wf(13, 'own')), ...lit(f, wf(13, 'own'))})}>INDUSTRY'S OWN WORDS</div>
				</div>
			</Card>
			{/* the hearing transcript, face down on the desk until Act III */}
			<div style={{position: 'absolute', left: 900, top: 190 + (1 - paper) * 90, width: 760, height: 640, opacity: paper, transform: `perspective(1000px) rotateX(${(14 - 10 * paper + 4 * lift).toFixed(2)}deg) rotateZ(-3deg)`, transformOrigin: '50% 100%', background: colors.paper, boxShadow: '0 40px 90px rgba(0,0,0,0.6)'}}>
				<div style={{position: 'absolute', inset: 40, border: `2px solid ${colors.sub}`, opacity: 0.35}} />
				<div style={{position: 'absolute', right: -14, top: 60, background: colors.amber, padding: '6px 14px', ...T(26, {fontWeight: 700, color: colors.void})}}>HEARING TRANSCRIPT · FACE DOWN</div>
			</div>
			<Card x={930} y={760} w={760} o={onW(f, wf(13, 'federal'), 12)}>
				<div style={{padding: '18px 24px'}}>
					<div style={T(36, {fontWeight: 700, ...lit(f, wf(13, 'hearing'), colors.ink)})}>NTSB INVESTIGATIVE HEARING</div>
					<div style={T(26, {color: colors.ink, marginTop: 8})}>DAY 2 · 23 JUN 2023 · EAST PALESTINE, OHIO</div>
				</div>
			</Card>
			<Pop f={f} fps={fps} on={wf(14, 'later')} style={{position: 'absolute', left: 1180, top: 120}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '6px 16px'})}>LATER IN THIS FILM</div>
			</Pop>
		</>
	);
};

// ── 5 · Thirty-nine minutes later: East Palestine reads 253 (s15–s18) ───────────────────────────────────────────

const EastPalestine: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const draw = tween(f, sf(15) - 10, wf(15, 'salem'), 0.15, 1, ease.draw);
	const mm = Math.round(rollTo(f, [{frame: wf(15, 'thirty-nine') - 8, value: 13}, {frame: wf(15, 'minutes') + LAND, value: 52}]));
	const head = tween(f, wf(15, 'crosses') - 20, wf(15, 'palestine') + 6, 69.01, 49.81, ease.camera);
	return (
		<>
			<Card x={96} y={150} w={1120} h={720}>
				<span />
			</Card>
			<RouteLine f={f} fps={fps} box={{x: 120, y: 260, w: 1070}} draw={draw} nodeOn={[null, wf(15, 'salem'), wf(15, 'detector')]} nodeTone={[colors.cyan, colors.amber, colors.red]} head={f >= wf(15, 'thirty-nine') ? head : null} />
			<div style={{position: 'absolute', left: 150, top: 190, display: 'flex', gap: 30, alignItems: 'baseline'}}>
				<span style={T(64, {fontWeight: 700, color: colors.cyan})}>8:{String(mm).padStart(2, '0')} P.M.</span>
				<span style={T(36, {color: colors.amber, opacity: onW(f, wf(15, 'minutes'), 8), transform: `scale(${bump(f, fps, wf(15, 'minutes') + LAND).toFixed(4)})`, display: 'inline-block'})}>+39 MIN</span>
			</div>
			<div style={{position: 'absolute', left: 150, top: 760, opacity: onW(f, wf(15, 'east'), 10)}}>
				<div style={T(44, {fontWeight: 700, ...lit(f, wf(15, 'palestine'), colors.ink)})}>EAST PALESTINE, OHIO · MP 49.81</div>
			</div>
			<Gauge
				f={f}
				fps={fps}
				x={1220}
				y={190}
				h={600}
				on={sf(15) - 10}
				keys={[
					{frame: wf(16, 'two') - 12, value: 103},
					{frame: wf(16, 'fifty-three') + LAND, value: 253},
				]}
				stopLine={sf(15) - 10}
				maxAt={wf(17, 'highest')}
				higherAt={wf(18, 'may')}
				unitAt={wf(16, 'degrees')}
				subAt={wf(16, 'air')}
				source="MP 49.81 · NTSB P. 7, P. 8 N. 15"
			/>
			<Pop f={f} fps={fps} on={wf(16, 'reading')} style={{position: 'absolute', left: 1246, top: 110}}>
				<div style={T(36, {color: colors.ink})}>READING AT MP 49.81</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(18, 'higher')} style={{position: 'absolute', left: 1246, top: 900}}>
				<div style={T(26, {color: colors.red})}>NTSB P. 8 N. 15</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(17, 'detector')} style={{position: 'absolute', left: 1246, top: 940}}>
				<div style={T(26, {color: colors.ink})}>THE TOP OF THIS DETECTOR'S RANGE</div>
			</Pop>
		</>
	);
};

// ── 6 · In the cab: the alarm, as text (s19–s21) ────────────────────────────────────────────────────────────────

const ER = er as {t: number[]; clock: string[]; mph: number[]; db: string[]};
const erAt = (clock: string): number => ER.clock.indexOf(clock);

const Cab: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const waves = lead(f, wf(19, 'announce'), 16);
	// the event recorder, 20:53:30 → 20:54:20, run across "slow the train" (TIME COMPRESSED)
	const i0 = erAt('20:53:30');
	const i1 = erAt('20:54:20');
	const k = Math.round(interpolate(f, [wf(21, 'slow'), ef(21) + 40], [i0, i1], clamp));
	const words: [string, number][] = [
		['CRITICAL', wf(20, 'critical', 0)],
		['ALARM,', wf(20, 'alarm', 0)],
		['CRITICAL', wf(20, 'critical', 1)],
		['ALARM,', wf(20, 'alarm', 1)],
		['CRITICAL', wf(20, 'critical', 2)],
		['ALARM.', wf(20, 'alarm', 2)],
	];
	return (
		<>
			<Card x={140} y={150} w={1640} h={760} accent={colors.red}>
				<div style={{position: 'absolute', left: 60, top: 50, display: 'flex', gap: 24, alignItems: 'center'}}>
					<span style={T(44, {fontWeight: 700, ...lit(f, wf(19, 'cab'), colors.ink)})}>IN THE CAB</span>
					<svg width={120} height={70} style={{opacity: onW(f, wf(19, 'speakers'), 10)}}>
						<polygon points="10,25 30,25 55,5 55,65 30,45 10,45" fill={colors.ink} />
						{[0, 1, 2].map((i) => (
							<path key={i} d={`M ${68 + i * 16} 15 Q ${82 + i * 16} 35 ${68 + i * 16} 55`} fill="none" stroke={colors.red} strokeWidth={4} opacity={waves * (0.4 + 0.6 * flash(f, wf(20, 'alarm', i), 0))} />
						))}
					</svg>
				</div>
				<div style={{position: 'absolute', left: 60, top: 120, ...T(26, {color: colors.ink}), opacity: onW(f, wf(19, 'speakers'), 10)}}>IN-CAB AUDIO, AS THE NTSB TRANSCRIBED IT · P. 8</div>
				<div style={{position: 'absolute', left: 60, top: 180, width: 1520}}>
					{[0, 1, 2].map((line) => (
						<div key={line} style={{display: 'flex', gap: 28, marginBottom: 6}}>
							{words.slice(line * 2, line * 2 + 2).map(([w, at], j) => (
								<span key={j} style={T(92, {fontWeight: 700, opacity: onW(f, at, 6), color: colors.red, transform: `scale(${bump(f, fps, at + LAND, 0.05).toFixed(4)})`, display: 'inline-block', transformOrigin: '0 60%'})}>
									{w}
								</span>
							))}
						</div>
					))}
					<div style={T(26, {color: colors.ink, marginTop: 14, opacity: onW(f, wf(20, 'alarm', 2) + 18, 12)})}>NORFOLK SOUTHERN MILEPOST 49.8, TRACK 1 HOTBOX, AXLE 101, SOUTH SIDE · NTSB P. 8</div>
				</div>
				{f >= wf(21, 'engineer') - 10 ? (
					<div style={{position: 'absolute', left: 60, top: 600, display: 'flex', gap: 60, alignItems: 'baseline', opacity: onW(f, wf(21, 'engineer'), 10)}}>
						<span style={T(36, {...lit(f, wf(21, 'engineer'), colors.ink)})}>ENGINEER</span>
						<span style={T(56, {fontWeight: 700, color: colors.cyan})}>{ER.mph[k]} MPH</span>
						<span style={T(36, {color: f >= wf(21, 'slow') ? colors.amber : colors.sub})}>DYNAMIC BRAKE {ER.db[k]}</span>
					</div>
				) : null}
				<div style={{position: 'absolute', left: 60, top: 690, opacity: onW(f, wf(21, 'slow'), 10)}}>
					<span style={T(26, {color: colors.ink})}>NTSB EVENT RECORDER DATA · NS 4178 · {ER.clock[k]} EST · TIME COMPRESSED</span>
				</div>
				<div style={{position: 'absolute', right: 40, top: 40}}>
					<span style={T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '4px 10px'})}>TRANSCRIPTION · TEXT ONLY</span>
				</div>
			</Card>
		</>
	);
};

// ── 7 · The NTSB's finding 1 (s22) ──────────────────────────────────────────────────────────────────────────────

const Finding1: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const letters: [string, number][] = [
		['N', wf(22, 'n')],
		['T', wf(22, 't')],
		['S', wf(22, 's')],
		['B', wf(22, 'b')],
	];
	return (
		<>
			<RecordPage set="rir" start={sf(22) - 10} end={ef(22) + 30} label="NTSB FINDING 1" hl={[{key: 'C15', at: wf(22, 'handled'), ats: [wf(22, 'handled'), wf(22, 'properly'), wf(22, 'alarm')]}]} pushTo={wf(22, 'find')} />
			<Pop f={f} fps={fps} on={wf(22, 'responded')} style={{position: 'absolute', left: 880, top: 800}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>CREW: DID NOT CONTRIBUTE</div>
			</Pop>
			<Card x={880} y={880} w={940} o={Math.min(onW(f, wf(22, 'n'), 8), offW(f, ef(22) + 20))}>
				<div style={{padding: '14px 22px', display: 'flex', gap: 16, alignItems: 'baseline', whiteSpace: 'nowrap'}}>
					{letters.map(([l, at]) => (
						<span key={l} style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, at, 4), display: 'inline-block', transform: `scale(${bump(f, fps, at + LAND).toFixed(4)})`})}>
							{l}
						</span>
					))}
					<span style={T(26, {color: colors.ink, opacity: onW(f, wf(22, "america's"), 8)})}>U.S.</span>
					<span style={T(26, {opacity: onW(f, wf(22, 'accident'), 8), ...lit(f, wf(22, 'investigator'), colors.ink)})}>NATIONAL TRANSPORTATION SAFETY BOARD</span>
				</div>
			</Card>
		</>
	);
};

// ── 8 · The derailment: 38 cars, fire, a 1-mile zone (s23–s25) ─────────────────────────────────────────────────

const MI = 300; // px per mile: the train (9,309 ft = 1.76 mi) and the 1-mile zone on one scale
const Derail: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const cx = 1080;
	const cy = 560;
	const carPx = (1.76 * MI) / 152;
	const apart = wf(23, 'came');
	const leave = wf(24, 'left');
	const scatter = tween(f, leave - 6, leave + 50, 0, 1, ease.arrive);
	const nDer = Math.round(rollTo(f, [{frame: wf(24, 'thirty-eight') - 18, value: 0}, {frame: wf(24, 'thirty-eight') + LAND, value: 38}], true));
	const people = Math.round(rollTo(f, [{frame: wf(25, 'two') - 16, value: 0}, {frame: wf(25, 'thousand') + LAND, value: 2000}]) / 10) * 10;
	const ring = lead(f, wf(25, 'leave'), 30);
	const fire = Math.max(0.35 * lead(f, wf(24, 'wreckage'), 12), lead(f, wf(24, 'fire'), 14));
	// the head end stops east of the pileup; cars 23 onward (38 of them) leave the track
	const headX = cx + 22 * carPx + 120;
	const carX = (i: number): number => headX - 3 * 10 - i * carPx;
	return (
		<>
			<Card x={96} y={140} w={1728} h={800}>
				<span />
			</Card>
			<svg style={{position: 'absolute', left: 0, top: 0}} width={1920} height={1080}>
				<line x1={140} y1={cy} x2={1780} y2={cy} stroke={colors.sub} strokeWidth={3} />
				{[0, 1, 2].map((i) => (
					<rect key={`l${i}`} x={headX - 30 + i * 10} y={cy - 6} width={9} height={12} fill={colors.cyan} />
				))}
				{Array.from({length: 149}, (_, i) => {
					const derailed = i >= 22 && i < 22 + 38;
					const k = derailed ? scatter : 0;
					const j = i - 22;
					// a pileup: derailed cars fold into a cluster west of the point of derailment (illustrative arrangement)
					const ang = derailed ? Math.sin(j * 1.7) * 60 * k : 0;
					const dx = derailed ? -j * carPx * 0.55 * k : 0;
					const dy = derailed ? Math.sin(j * 2.3) * 28 * k : 0;
					const tone = i === 22 && f >= wf(23, 'axle') ? colors.red : derailed && f >= leave ? colors.amber : colors.sub;
					return <rect key={i} x={carX(i) + dx} y={cy - 8 + dy} width={carPx - 0.8} height={16} fill={tone} transform={`rotate(${ang.toFixed(1)} ${carX(i) + dx + carPx / 2} ${cy + dy})`} />;
				})}
				{f >= apart - 4 ? <circle cx={carX(22) + carPx} cy={cy} r={30 * flash(f, apart, 0.3) + 6} fill="none" stroke={colors.red} strokeWidth={4} opacity={lead(f, apart, 6)} /> : null}
				{fire > 0 ? <ellipse cx={carX(40)} cy={cy} rx={120} ry={60} fill={colors.red} opacity={0.25 * fire} /> : null}
				{fire > 0 ? <ellipse cx={carX(36)} cy={cy - 6} rx={70} ry={36} fill={colors.amber} opacity={0.3 * fire} /> : null}
				{ring > 0 ? <circle cx={carX(40)} cy={cy} r={MI} fill="none" stroke={colors.amber} strokeWidth={4} strokeDasharray={2 * Math.PI * MI} strokeDashoffset={2 * Math.PI * MI * (1 - ring)} /> : null}
				{ring > 0 ? <line x1={carX(40)} y1={cy} x2={carX(40) + MI * ring} y2={cy - 1} stroke={colors.amber} strokeWidth={2} strokeDasharray="8 6" /> : null}
			</svg>
			<div style={{position: 'absolute', left: 150, top: 180}}>
				<div style={{display: 'flex', gap: 18}}>
					<Pop f={f} fps={fps} on={wf(23, 'minute')}>
						<div style={T(44, {fontWeight: 700, color: colors.ink})}>&lt; 1 MINUTE</div>
					</Pop>
					<Pop f={f} fps={fps} on={wf(23, 'alarm')}>
						<div style={T(44, {fontWeight: 700, color: colors.red})}>AFTER THE ALARM</div>
					</Pop>
				</div>
				<Pop f={f} fps={fps} on={wf(23, 'apart')}>
					<div style={T(36, {color: colors.red, marginTop: 10})}>THE AXLE SEPARATES · NTSB P. 106</div>
				</Pop>
			</div>
			<div style={{position: 'absolute', left: 150, top: 650, opacity: onW(f, wf(24, 'thirty-eight') - 10, 10)}}>
				<div style={T(96, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(24, 'thirty-eight') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>{nDer}</div>
				<div style={T(36, {color: colors.ink})}>CARS DERAILED · NTSB P. X</div>
				<div style={T(36, {color: colors.red, marginTop: 6, opacity: onW(f, wf(24, 'track'), 8)})}>OFF THE TRACK</div>
			</div>
			<div style={{position: 'absolute', left: 1330, top: 180, opacity: onW(f, wf(25, 'about'), 10), textAlign: 'right', width: 450}}>
				<div style={T(72, {fontWeight: 700, color: colors.ink, transform: `scale(${bump(f, fps, wf(25, 'thousand') + LAND).toFixed(4)})`, transformOrigin: '100% 60%'})}>~{people.toLocaleString('en-US')}</div>
				<div style={T(36, {color: colors.ink})}>RESIDENTS</div>
				<div style={T(36, {color: colors.amber, marginTop: 6, opacity: onW(f, wf(25, 'leave'), 10)})}>1-MILE EVACUATION ZONE</div>
			</div>
			<Honesty text="RECONSTRUCTION" x={1784} y={870} anchor="right" />
			<div style={{position: 'absolute', left: 150, top: 880, ...T(26, {color: colors.sub})}}>TRAIN AND ZONE TO ONE SCALE · PILEUP ARRANGEMENT ILLUSTRATIVE</div>
		</>
	);
};

// ── 9 · What this film follows (s26–s27) ────────────────────────────────────────────────────────────────────────

const Scope: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const aside = tween(f, wf(27, 'separate') - 4, wf(27, 'story') + 20, 0, 1, ease.camera);
	return (
		<>
			<div style={{position: 'absolute', left: 140, top: 150, ...T(36, {...lit(f, wf(26, 'film'), colors.sub)})}}>THIS FILM FOLLOWS</div>
			<Card x={140} y={240} w={780} h={300} o={onW(f, wf(26, 'warning'), 12)} accent={colors.cyan}>
				<div style={{padding: '50px 40px'}}>
					<div style={T(56, {fontWeight: 700, ...lit(f, wf(26, 'system'), colors.cyan)})}>THE WARNING SYSTEM</div>
					<div style={T(26, {color: colors.ink, marginTop: 18})}>DETECTORS · THRESHOLDS · ALARMS</div>
				</div>
			</Card>
			<Card x={1000} y={240} w={780} h={300} o={onW(f, wf(26, 'decisions'), 12)} accent={colors.amber}>
				<div style={{padding: '50px 40px'}}>
					<div style={T(56, {fontWeight: 700, ...lit(f, wf(26, 'decisions'), colors.amber)})}>THE DECISIONS</div>
					<div style={T(36, {color: colors.ink, marginTop: 14, opacity: onW(f, wf(26, 'followed'), 10)})}>THAT FOLLOWED</div>
				</div>
			</Card>
			<Card x={140 + 420 * aside} y={640} w={1220 - 200 * aside} h={200} o={onW(f, wf(27, 'health'), 12) * (1 - 0.45 * aside)}>
				<div style={{padding: '40px 40px'}}>
					<div style={T(44, {color: colors.ink})}>
						HEALTH <span style={{opacity: onW(f, wf(27, 'environmental'), 8)}}>AND ENVIRONMENTAL</span> <span style={{opacity: onW(f, wf(27, 'effects'), 8)}}>EFFECTS</span>
					</div>
					<div style={T(36, {color: colors.sub, marginTop: 12, opacity: onW(f, wf(27, 'separate'), 10), transform: `scale(${bump(f, fps, wf(27, 'story') + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'})}>A SEPARATE STORY</div>
				</div>
			</Card>
		</>
	);
};

// ── 10 · Loop 2: a second number, three days later (s28–s30) ──────────────────────────────────────────────────

const Tank: React.FC<{x: number; y: number; w: number; tone: string; o: number}> = ({x, y, w, tone, o}) => (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={w * 0.32} rx={w * 0.16} fill={colors.card} stroke={tone} strokeWidth={4} />
		<rect x={x + w * 0.45} y={y - 14} width={w * 0.1} height={14} fill={tone} />
	</g>
);

const Loop2: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const split = lead(f, wf(30, 'two'), 16);
	const top = offW(f, wf(30, 'two') - 4, 14);
	const band = lead(f, wf(28, 'second'), 16);
	const marks = ['OCPX80370', 'OCPX80235', 'OCPX80179', 'GATX95098', 'TILX402025'];
	return (
		<>
			{top > 0 ? (
				<AbsoluteFill style={{opacity: top}}>
					<div style={{position: 'absolute', left: 140, top: 120}}>
						<DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(28, 'later')} fromDay={3} size={44} />
						<Pop f={f} fps={fps} on={wf(28, 'three')} style={{display: 'inline-block', marginLeft: 20}}>
							<span style={T(44, {fontWeight: 700, color: colors.amber})}>+3 DAYS</span>
						</Pop>
					</div>
					<Card x={96} y={240} w={1728} h={660}>
						<span />
					</Card>
					<svg style={{position: 'absolute', left: 0, top: 0}} width={1920} height={1080}>
						{band > 0 ? <rect x={160} y={300} width={1600 * band} height={120} fill={colors.amber} opacity={0.18 + 0.15 * flash(f, wf(28, 'decide'), 0)} /> : null}
						{marks.map((m, i) => (
							<Tank key={m} x={190 + i * 315} y={600} w={270} tone={f >= wf(28, 'vinyl') ? colors.amber : colors.sub} o={onW(f, wf(28, 'five') + i * 8, 8)} />
						))}
					</svg>
					{band > 0 ? (
						<div style={{position: 'absolute', left: 200, top: 320, display: 'flex', gap: 40, alignItems: 'baseline', opacity: band}}>
							<span style={T(72, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(28, 'number') + LAND).toFixed(4)})`, display: 'inline-block'})}>?°F</span>
							<span style={T(36, {...lit(f, wf(28, 'number'), colors.ink)})}>A SECOND NUMBER</span>
						</div>
					) : null}
					{marks.map((m, i) => (
						<div key={m} style={{position: 'absolute', left: 190 + i * 315, top: 720, width: 270, textAlign: 'center', opacity: onW(f, wf(28, 'tank') + i * 6, 8), ...T(26, {color: colors.ink})}}>
							{m}
						</div>
					))}
					<div style={{position: 'absolute', left: 200, top: 790, opacity: onW(f, wf(28, 'vinyl'), 10), ...T(36, {fontWeight: 700, color: colors.amber})}}>5 TANK CARS OF VINYL CHLORIDE</div>
					<div style={{position: 'absolute', left: 1500, top: 830, ...T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'})}}>ILLUSTRATION</div>
					<div style={{position: 'absolute', left: 200, top: 450, opacity: onW(f, wf(29, 'find'), 10)}}>
						<div style={T(36, {fontWeight: 700, ...lit(f, wf(29, 'guidance'), colors.ink)})}>NOT FOUND IN THE WRITTEN GUIDANCE</div>
						<div style={T(36, {color: colors.ink, opacity: onW(f, wf(29, 'scene'), 10)})}>USED AT THE SCENE · NTSB RIR-24-05 P. 28 N. 55</div>
					</div>
				</AbsoluteFill>
			) : null}
			{split > 0 ? (
				<AbsoluteFill style={{opacity: split}}>
					<div style={{position: 'absolute', left: 0, right: 0, top: 160, textAlign: 'center', ...T(44, {fontWeight: 700, ...lit(f, wf(30, 'numbers'), colors.ink)})}}>TWO NUMBERS</div>
					<Card x={160} y={290} w={760} h={520} o={onW(f, wf(30, 'one', 0), 10)} accent={colors.amber}>
						<div style={{padding: '60px 50px'}}>
							<div style={T(150, {fontWeight: 700, color: colors.amber})}>170°F</div>
							<div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(30, 'first'), 10)})}>03 FEB 2023</div>
							<div style={T(44, {fontWeight: 700, ...lit(f, wf(30, 'night'), colors.ink), opacity: onW(f, wf(30, 'first'), 10)})}>THE FIRST NIGHT</div>
						</div>
					</Card>
					<Card x={1000} y={290} w={760} h={520} o={onW(f, wf(30, 'one', 1), 10)} accent={colors.amber}>
						<div style={{padding: '60px 50px'}}>
							<div style={T(150, {fontWeight: 700, color: colors.amber})}>?°F</div>
							<div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(30, 'fourth'), 10)})}>06 FEB 2023</div>
							<div style={T(44, {fontWeight: 700, ...lit(f, wf(30, 'day'), colors.ink), opacity: onW(f, wf(30, 'fourth'), 10)})}>THE FOURTH DAY</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 11 · The act question, then Act II (s31) ───────────────────────────────────────────────────────────────────

const Question: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const s0 = ROUTE.nodeS[1];
	const s1 = ROUTE.nodeS[2];
	const gapO = lead(f, wf(31, 'margin'), 18);
	const outO = offW(f, ef(31) + 70, 20);
	const stretchEnd = s0 + (s1 - s0) * lead(f, wf(31, 'error'), 30);
	return (
		<>
			<AbsoluteFill style={{opacity: outO}}>
				<Card x={96} y={150} w={1728} h={760}>
					<span />
				</Card>
				<RouteLine f={f} fps={fps} box={{x: 140, y: 300, w: 1640}} draw={1} nodeOn={[sf(31) - 20, sf(31) - 20, sf(31) - 20]} nodeTone={[colors.cyan, colors.amber, f >= wf(31, 'run') ? colors.red : colors.amber]} stretch={{s0, s1: stretchEnd, tone: colors.amber, o: gapO}} />
				<div style={{position: 'absolute', left: 140, top: 200, display: 'flex', gap: 60}}>
					<span style={T(44, {fontWeight: 700, color: colors.cyan})}>+38°F</span>
					<span style={T(44, {fontWeight: 700, color: colors.amber})}>+103°F</span>
					<span style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(31, 'run'), 8)})}>+253°F</span>
				</div>
				<div style={{position: 'absolute', left: 1060, top: 190, opacity: gapO, background: colors.card, padding: '8px 16px', whiteSpace: 'nowrap'}}>
					<div style={T(56, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(31, 'error') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>19 MILES</div>
					<div style={T(36, {color: colors.ink})}>BETWEEN TWO READINGS · NTSB P. 105</div>
				</div>
				<div style={{position: 'absolute', left: 140, top: 950, ...T(26, {color: colors.sub})}}>ROUTE AFTER NTSB RIR-24-05 FIGS. 3, 29 · RECONSTRUCTION</div>
			</AbsoluteFill>
			<ActTitle n="II" title="The Mechanism" start={ef(31) + 60} end={sf(32) + 30} sub="HOW THE SYSTEM WAS MEANT TO CATCH IT" />
		</>
	);
};

const cue = (frame: number, sfx: SfxCue['sfx'], gainDb = -18): SfxCue => ({frame, sfx, gainDb});

export const act1: SceneDef[] = [
	{
		id: 'a1_salem',
		from: 0,
		to: ef(5) + 50,
		C: Salem,
		cues: [cue(wf(0, 'third'), 'quartz_tick'), cue(wf(1, 'thirteen'), 'quartz_tick'), cue(wf(2, 'ohio'), 'relay_click'), cue(wf(3, 'factory') - 20, 'pen_scratch', -24), cue(wf(3, 'fire'), 'whoosh', -22), cue(wf(4, 'twenty-third'), 'relay_click'), cue(wf(5, 'bearing'), 'relay_click')],
	},
	{
		id: 'a1_detector',
		from: sf(6) - 20,
		to: ef(11) + 30,
		C: Detector,
		cues: [cue(wf(6, 'detector'), 'relay_click'), cue(wf(6, 'infrared'), 'transformer_hum', -26), cue(wf(7, 'three'), 'quartz_tick'), cue(wf(8, 'seventy'), 'quartz_tick'), cue(wf(9, 'alert'), 'cockpit_chime', -26), cue(wf(11, 'nothing'), 'relay_click', -24)],
	},
	{id: 'a1_consist', from: sf(12) - 20, to: ef(12) + 30, C: Consist, cues: [cue(wf(12, 'thirty-two'), 'stamp', -22), cue(wf(12, 'forty-nine'), 'quartz_tick'), cue(wf(12, 'feet'), 'quartz_tick')]},
	{id: 'a1_loop1', from: sf(13) - 20, to: ef(14) + 30, C: Loop1, cues: [cue(wf(13, 'seventy'), 'quartz_tick'), cue(wf(13, 'record'), 'paper_slide'), cue(wf(14, 'later'), 'relay_click', -24)]},
	{id: 'a1_eastpalestine', from: sf(15) - 20, to: ef(18) + 30, C: EastPalestine, cues: [cue(wf(15, 'minutes'), 'quartz_tick'), cue(wf(15, 'detector'), 'relay_click'), cue(wf(16, 'fifty-three'), 'quartz_tick', -16), cue(wf(17, 'highest'), 'stamp', -20)]},
	{id: 'a1_cab', from: sf(19) - 20, to: ef(21) + 50, C: Cab, cues: [cue(wf(20, 'critical', 0), 'cockpit_chime', -20), cue(wf(20, 'critical', 1), 'cockpit_chime', -20), cue(wf(20, 'critical', 2), 'cockpit_chime', -20)]},
	{id: 'a1_finding1', from: sf(22) - 20, to: ef(22) + 40, C: Finding1, cues: [cue(sf(22) - 10, 'paper_slide'), cue(wf(22, 'handled') - 15, 'highlighter', -22)]},
	{id: 'a1_derail', from: sf(23) - 20, to: ef(25) + 30, C: Derail, cues: [cue(wf(23, 'came'), 'metal_snap_sub', -14), cue(wf(24, 'thirty-eight'), 'quartz_tick'), cue(wf(25, 'thousand'), 'quartz_tick')]},
	{id: 'a1_scope', from: sf(26) - 20, to: ef(27) + 30, C: Scope, cues: [cue(wf(26, 'warning'), 'relay_click', -24), cue(wf(26, 'decisions'), 'relay_click', -24)]},
	{id: 'a1_loop2', from: sf(28) - 20, to: ef(30) + 30, C: Loop2, cues: [cue(wf(28, 'later'), 'quartz_tick'), cue(wf(28, 'number'), 'relay_click'), cue(wf(30, 'two'), 'stamp', -22)]},
	{id: 'a1_question', from: sf(31) - 20, to: sf(32) + 40, C: Question, cues: [cue(wf(31, 'margin'), 'pen_scratch', -24), cue(wf(31, 'run'), 'relay_click')]},
];
