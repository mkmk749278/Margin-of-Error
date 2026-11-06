import React from 'react';
import {AbsoluteFill, Img, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {SfxCue} from '../../../../lib/remotion/sfx';
import {RecordPage} from '../docs';
import {ActTitle, media, Mount, STRIP, useFilmFrame} from '../kit';
import {Card, Honesty, Hopper, lit, mono, offW, onW, Pop, ROUTE, RouteLine, sAtMP} from '../parts';
import {BearingSection, LagChart, Ladder, Rung} from '../parts2';
import {ef, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT II · THE MECHANISM (sentences 32–66). Choreography table: scenes/choreography/act2.md.

const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});

// ── 1 · The bearing, and the detectors that watch it (s32–s34) ──────────────────────────────────────────────────

const Bearing: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const spin = f >= wf(32, 'turns') ? (f - wf(32, 'turns')) / 60 : 0;
	const heat = Math.max(0.3 * lead(f, wf(33, 'friction'), 16), lead(f, wf(33, 'heat'), 20) * 0.9);
	const jitter = lead(f, wf(33, 'starts'), 12);
	const strip = lead(f, wf(34, 'railroads'), 18);
	const wheelX = tween(f, wf(34, 'each') - 10, wf(34, 'passes') + 20, 60, 1500, ease.camera);
	const dets = [200, 520, 840, 1160, 1480];
	const shrink = tween(f, wf(34, 'so') - 6, wf(34, 'railroads') + 10, 0, 1, ease.camera);
	return (
		<>
			<Mount x={96} y={96} w={1728} h={880} source="TAPERED ROLLER BEARING · AFTER NTSB RIR-24-05 P. 46 N. 75 (REFERENCE: FIG. 17)" labels={['ILLUSTRATION', 'NOT TO SCALE']} start={sf(32) - 10} end={sf(35) + 14}>
				<div style={{position: 'absolute', left: 0, top: 0, transform: `translate(${(-120 * shrink).toFixed(1)}px, ${(-70 * shrink).toFixed(1)}px) scale(${(1 - 0.32 * shrink).toFixed(4)})`, transformOrigin: '0 0'}}>
					<BearingSection
						f={f}
						x={240}
						y={110}
						axleOn={wf(32, 'axle')}
						cupOn={wf(32, 'inside')}
						rollersOn={wf(32, 'turns')}
						sealsOn={wf(32, 'sealed')}
						greaseOn={wf(32, 'packed')}
						heat={heat}
						spin={spin}
						jitter={jitter}
						labels={[
							{t: 'AXLE END', at: wf(32, 'end'), x: 20, y: 210},
							{t: 'ROLLER BEARING', at: wf(32, 'roller'), x: 520, y: 110, tone: colors.cyan},
							{t: 'SEALS', at: wf(32, 'sealed'), x: 290, y: 520, tone: colors.amber},
							{t: 'GREASE', at: wf(32, 'grease'), x: 760, y: 520, tone: colors.amber},
							{t: 'FRICTION → HEAT', at: wf(33, 'friction'), x: 560, y: 600, tone: colors.red},
						]}
					/>
				</div>
				<Pop f={f} fps={fps} on={wf(32, 'railcar')} style={{position: 'absolute', right: 40, top: 30}}>
					<div style={T(36, {color: colors.ink})}>8 BEARINGS A CAR · NTSB FIG. 4</div>
				</Pop>
				<Pop f={f} fps={fps} on={wf(33, 'fail')} style={{position: 'absolute', right: 40, top: 90}}>
					<div style={T(36, {fontWeight: 700, color: colors.red})}>WHEN IT STARTS TO FAIL</div>
				</Pop>
				{strip > 0 ? (
					<div style={{position: 'absolute', left: 0, top: 520, width: 1728, height: 300 - STRIP + 60, opacity: strip}}>
						<svg width={1728} height={300}>
							<line x1={40} y1={220} x2={1690} y2={220} stroke={colors.sub} strokeWidth={5} />
							{dets.map((dx, i) => (
								<g key={dx} opacity={lead(f, wf(34, 'detectors') + i * 6, 8)}>
									<rect x={dx - 26} y={228} width={52} height={22} fill={colors.card} stroke={colors.cyan} strokeWidth={3} />
									<polygon points={`${dx - 10},228 ${dx - 34},${120} ${dx + 34},${120} ${dx + 10},228`} fill={colors.cyan} opacity={0.22 * lead(f, wf(34, 'look'), 12) * (1 + 1.5 * (Math.abs(wheelX - dx) < 60 ? 1 : 0))} />
								</g>
							))}
							{f >= wf(34, 'each') - 10 ? <circle cx={wheelX} cy={160} r={56} fill={colors.card} stroke={colors.ink} strokeWidth={4} /> : null}
							{f >= wf(34, 'each') - 10 ? <rect x={wheelX - 18} y={142} width={36} height={36} fill={colors.void} stroke={colors.amber} strokeWidth={3} /> : null}
						</svg>
						<div style={{position: 'absolute', left: 40, top: 0, ...T(36, {...lit(f, wf(34, 'tracks'), colors.ink)})}}>DETECTORS ALONG THE TRACK</div>
						<div style={{position: 'absolute', right: 40, top: 0, display: 'flex', gap: 16, alignItems: 'baseline'}}>
							<span style={T(36, {opacity: onW(f, wf(34, 'measure'), 8), ...lit(f, wf(34, 'hotter'), colors.amber)})}>HOW MUCH HOTTER</span>
							<span style={T(36, {fontWeight: 700, opacity: onW(f, wf(34, 'air'), 8), color: colors.amber})}>THAN THE AIR</span>
						</div>
					</div>
				) : null}
			</Mount>
		</>
	);
};

// ── 2 · NS's three lines, and where 103 sat (s35–s44) ───────────────────────────────────────────────────────────

const rungs90_170 = (): Rung[] => [
	{at: wf(36, 'ninety'), value: 90, tone: colors.amber, sub: 'ABOVE THE AIR', subAt: wf(36, 'air'), subOff: wf(40, 'one'), title: 'ALERT → WAYSIDE HELP DESK', titleAt: wf(36, 'alert'), lines: [{t: 'NO MESSAGE TO THE CREW', at: wf(36, 'help')}, {t: 'THE DESK WATCHES THE NEXT READINGS', at: wf(36, 'watches')}]},
	{at: wf(37, 'one'), value: 170, cardDy: 40, tone: colors.amber, title: 'MESSAGE', titleAt: wf(37, 'message'), title2: 'TO THE CREW', title2At: wf(37, 'crew'), lines: [{t: 'SLOW DOWN', at: wf(37, 'slow')}, {t: 'THEN STOP TO INSPECT', at: wf(37, 'stop')}]},
];

const LadderScene: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const rungs: Rung[] = [
		...rungs90_170(),
		{at: wf(38, 'critical'), value: 200, cardDy: -84, tone: colors.red, title: 'CRITICAL ALARM', titleAt: wf(38, 'alarm'), lines: [{t: 'THE CREW:', at: wf(38, 'crew')}, {t: 'STOP AT ONCE', at: wf(38, 'stop')}, {t: 'LINE AS OF 03 FEB 2023 · NTSB P. 43', at: wf(39, 'degrees')}]},
	];
	const q = lead(f, wf(44, 'how'), 10);
	return (
		<>
			<Card x={96} y={110} w={1728} h={860}>
				<span />
			</Card>
			<div style={{position: 'absolute', left: 140, top: 140, display: 'flex', gap: 24, alignItems: 'baseline', opacity: offW(f, wf(44, 'how') - 12, 12)}}>
				<span style={T(44, {fontWeight: 700, opacity: onW(f, wf(35, 'norfolk')), ...lit(f, wf(35, 'southern'), colors.ink)})}>NORFOLK SOUTHERN</span>
				<span style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(35, 'three')), transform: `scale(${bump(f, fps, wf(35, 'three') + LAND).toFixed(4)})`, display: 'inline-block'})}>3 LINES</span>
				<span style={T(36, {color: colors.ink, opacity: onW(f, wf(35, 'decided'), 10)})}>°F ABOVE AMBIENT</span>
			</div>
			<Ladder
				f={f}
				fps={fps}
				x={140}
				y={260}
				h={640}
				axisOn={wf(35, 'lines')}
				axisFlash={wf(35, 'next')}
				rungs={rungs}
				reading={{at: wf(40, 'three'), value: 103, label: 'SALEM'}}
				litRung={[
					{value: 90, at: wf(41, 'first')},
					{value: 170, at: wf(42, 'second')},
					{value: 200, at: wf(39, 'critical')},
				]}
			/>
			{/* the critical number lands on its own sentence */}
			{f >= wf(39, 'before') - 10 ? (
				<div style={{position: 'absolute', right: 140, top: 130, textAlign: 'right', opacity: Math.min(onW(f, wf(39, 'before'), 10), offW(f, wf(44, 'how') - 12, 12))}}>
					<div style={T(36, {color: colors.ink})}>
						BEFORE <span style={{opacity: onW(f, wf(39, 'accident'), 8)}}>THIS ACCIDENT</span>
					</div>
					<div style={T(26, {color: colors.ink, opacity: onW(f, wf(39, 'norfolk'), 8)})}>NORFOLK SOUTHERN SET</div>
					<div style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(39, 'two'), 8), transform: `scale(${bump(f, fps, wf(39, 'hundred') + LAND).toFixed(4)})`, transformOrigin: '0 50%'})}>CRITICAL = 200°F</div>
				</div>
			) : null}
			<div style={{position: 'absolute', left: 140, top: 920, display: 'flex', gap: 28}}>
				<span style={T(36, {opacity: onW(f, wf(40, 'salem'), 8), ...lit(f, wf(40, 'reading'), colors.amber)})}>SALEM · 8:13 P.M.</span>
				<span style={T(36, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(41, 'above'), 8)})}>ABOVE THE FIRST LINE</span>
				<span style={T(36, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(42, 'below'), 8)})}>BELOW THE SECOND</span>
			</div>
			{/* the camera's fire beside the reading */}
			{f >= wf(43, 'camera') - 10 ? (
				<Card x={1270} y={640} w={520} h={250} o={onW(f, wf(43, 'camera'), 12)} accent={colors.red}>
					<svg width={520} height={200}>
						<Hopper x={80} y={170} w={360} tone={colors.amber} fire={lead(f, wf(43, 'fire'), 8)} />
					</svg>
					<div style={{position: 'absolute', left: 24, bottom: 14, ...T(26, {...lit(f, wf(43, 'showed'), colors.ink)})}}>SALEM CAMERA · FIRE ON THE L1 BEARING</div>
				</Card>
			) : null}
			{q > 0 ? (
				<div style={{position: 'absolute', left: 140, top: 130, opacity: q, background: colors.card, padding: '6px 18px', border: `1px solid ${colors.border}`}}>
					<span style={T(56, {fontWeight: 700, color: colors.ink})}>HOW COULD IT </span>
					<span style={T(56, {fontWeight: 700, opacity: onW(f, wf(44, 'read'), 8), color: colors.ink})}>READ </span>
					<span style={T(56, {fontWeight: 700, opacity: onW(f, wf(44, 'low'), 8), color: colors.amber})}>SO LOW?</span>
				</div>
			) : null}
		</>
	);
};

// ── 3 · What the detector sees: the cup's inner edge; the outside lags (s45–s46) ──────────────────────────────

const CupView: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const heat = lead(f, wf(46, 'heats'), 30);
	const outside = lead(f, wf(46, 'outside'), 60) * 0.4;
	const figO = Math.min(onW(f, wf(45, 'inner'), 12), offW(f, wf(46, 'a') - 4, 14));
	const chart = lead(f, wf(46, 'failing'), 14);
	return (
		<>
			<Mount x={96} y={96} w={1728} h={880} source="THE DETECTOR'S VIEW · AFTER NTSB RIR-24-05 FIG. 14, P. 4 N. 11, P. 105" labels={['ILLUSTRATION']} start={sf(45) - 10} end={sf(47) + 14}>
				<div style={{position: 'absolute', left: -60, top: 150, transform: 'scale(0.7)', transformOrigin: '0 0'}}>
					<BearingSection
						f={f}
						x={0}
						y={0}
						axleOn={sf(45) - 30}
						cupOn={sf(45) - 30}
						rollersOn={sf(45) - 30}
						sealsOn={sf(45) - 30}
						greaseOn={sf(45) - 30}
						heat={heat}
						outsideHeat={outside}
						scanOn={wf(45, 'looking')}
						labels={[
							{t: 'OUTER CUP', at: wf(45, 'outer'), x: 360, y: 130, tone: colors.cyan},
							{t: 'INNER EDGE', at: wf(45, 'inner'), x: 160, y: 520, tone: colors.cyan},
						]}
					/>
				</div>
				<div style={{position: 'absolute', left: 40, top: 30, display: 'flex', gap: 18}}>
					<span style={T(36, {...lit(f, wf(45, 'pair'), colors.cyan), opacity: onW(f, wf(45, 'detector'), 8)})}>A PAIR OF</span>
					<span style={T(36, {opacity: onW(f, wf(45, 'infrared'), 8), ...lit(f, wf(45, 'sensors'), colors.cyan)})}>INFRARED SENSORS</span>
					<span style={T(36, {opacity: onW(f, wf(45, 'up'), 8), color: colors.ink})}>LOOKING UP</span>
					<span style={T(36, {opacity: onW(f, wf(45, 'track'), 8), color: colors.ink})}>FROM THE TRACK</span>
				</div>
				<Pop f={f} fps={fps} on={wf(45, 'salem')} style={{position: 'absolute', left: 40, top: 90}}>
					<div style={T(36, {color: colors.amber})}>AT SALEM: THE INNER EDGE OF THE OUTER CUP · NTSB P. 105</div>
				</Pop>
				{figO > 0 ? (
					<div style={{position: 'absolute', left: 940, top: 170, width: 740, opacity: figO, background: colors.paper, padding: 10, boxShadow: '0 20px 60px rgba(0,0,0,0.5)'}}>
						<Img src={media('fig/fig14_hbd_scan_location.png')} style={{width: 720, height: 444}} />
						<div style={{...T(26, {color: colors.paper_ink}), padding: '6px 4px 0'}}>NTSB RIR-24-05 FIG. 14 · DIAGRAM OF HBD SCAN LOCATION</div>
					</div>
				) : null}
				{chart > 0 ? (
					<div style={{position: 'absolute', left: 920, top: 160, width: 760, opacity: chart}}>
						<LagChart f={f} x={0} y={60} w={720} h={420} insideAt={wf(46, 'inside')} outsideAt={wf(46, 'outside')} gapAt={wf(46, 'lags')} />
						<div style={{position: 'absolute', left: 0, top: 0, ...T(36, {color: colors.ink})}}>
							A FAILING BEARING <span style={{opacity: onW(f, wf(46, 'heats'), 8), color: colors.red}}>HEATS FROM THE INSIDE</span>
						</div>
						<div style={{position: 'absolute', left: 0, top: 540, ...T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'})}}>ILLUSTRATIVE VALUES</div>
						<div style={{position: 'absolute', left: 300, top: 540, ...T(26, {color: colors.ink, opacity: onW(f, wf(46, 'behind'), 8)})}}>NTSB FINDING 5 · P. 166</div>
					</div>
				) : null}
			</Mount>
		</>
	);
};

// ── 4 · Findings 4 and the testing the NTSB cites (s47–s48) ────────────────────────────────────────────────────

const Findings: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RecordPage set="rir" start={sf(47) - 12} end={ef(47) + 24} label="NTSB FINDING 4" hl={[{key: 'C17', at: wf(47, 'reflect'), ats: [wf(47, 'reflect'), wf(47, 'true')]}]} pushTo={wf(47, 'found')} />
			<RecordPage set="rir" start={ef(47) + 8} end={sf(49) + 14} label="NTSB RIR-24-05" title="FAILURE SCENARIOS" hl={[{key: 'C119', at: wf(48, 'go'), ats: [wf(48, 'go'), wf(48, 'seized'), wf(48, 'minute')]}]} pushTo={wf(48, 'report')} />
			<Pop f={f} fps={fps} on={wf(47, 'b')} off={ef(47) + 8} style={{position: 'absolute', left: 1160, top: 810}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>NTSB FINDING 4</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(47, 'salem')} off={ef(47) + 8} style={{position: 'absolute', left: 1160, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>THE SALEM READING</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(48, 'failing')} style={{position: 'absolute', left: 1060, top: 740}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px'})}>ONCE A BEARING IS FAILING</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(48, 'below')} style={{position: 'absolute', left: 1060, top: 810}}>
				<div style={T(36, {color: colors.amber, background: colors.card, padding: '4px 14px'})}>
					BELOW AN <span style={{opacity: onW(f, wf(48, 'alarm'), 8)}}>ALARM</span> <span style={{opacity: onW(f, wf(48, 'seized'), 8)}}>→ SEIZED</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(48, 'notes')} style={{position: 'absolute', left: 1060, top: 880}}>
				<div style={T(36, {color: colors.ink, background: colors.card, border: `1px solid ${colors.border}`, padding: '6px 14px'})}>TESTING CITED BY THE NTSB</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(48, 'less')} style={{position: 'absolute', left: 1060, top: 950}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.red, padding: '4px 14px'})}>&lt; 1 MINUTE</div>
			</Pop>
		</>
	);
};

// ── 5 · The help desk (s49–s51) ─────────────────────────────────────────────────────────────────────────────────

const Desk: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const pageO = lead(f, wf(51, 'investigators'), 14);
	const others = ['ALERT', 'ALERT', 'ALERT', 'ALERT'];
	return (
		<>
			<AbsoluteFill style={{opacity: offW(f, wf(51, 'investigators') + 6, 16)}}>
				<Card x={140} y={170} w={1640} h={720} accent={colors.amber}>
					<div style={{position: 'absolute', left: 50, top: 40}}>
						<div style={T(44, {fontWeight: 700, ...lit(f, wf(49, 'help'), colors.ink)})}>WAYSIDE HELP DESK · ATLANTA</div>
						<div style={T(36, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(49, 'analyst'), 8)})}>THE ANALYST ON DUTY · NTSB P. 40, P. 104</div>
					</div>
					<div style={{position: 'absolute', left: 50, top: 220, width: 620, height: 160, background: colors.void, border: `2px dashed ${f >= wf(49, 'see') ? colors.sub : colors.amber}`, padding: 24, opacity: onW(f, wf(49, 'salem'), 8)}}>
						<div style={T(36, {fontWeight: 700, color: f >= wf(49, 'see') ? colors.sub : colors.amber})}>SALEM ALERT · 8:13 P.M.</div>
						<div style={T(44, {fontWeight: 700, color: colors.ink, marginTop: 12, opacity: onW(f, wf(49, 'see'), 8), transform: `scale(${bump(f, fps, wf(49, 'alert') + LAND).toFixed(4)})`, transformOrigin: '0 50%'})}>NOT SEEN</div>
					</div>
					<div style={{position: 'absolute', left: 820, top: 200}}>
						<div style={T(36, {color: colors.ink, opacity: onW(f, wf(50, 'working'), 8)})}>WORKING ON</div>
						{others.map((t, i) => (
							<div key={i} style={{marginTop: 14, opacity: onW(f, wf(50, 'other') + i * 10, 8), ...T(36, {fontWeight: 700, color: colors.void, background: f >= wf(50, 'higher-priority') ? colors.red : colors.sub, padding: '6px 16px', width: 520})}}>
								HIGHER-PRIORITY {t}
							</div>
						))}
						<div style={T(26, {color: colors.ink, marginTop: 14, opacity: onW(f, wf(50, 'alerts'), 8)})}>ILLUSTRATION · NO DETAIL IN THE RECORD</div>
					</div>
				</Card>
			</AbsoluteFill>
			{pageO > 0 ? (
				<>
					<RecordPage set="rir" start={wf(51, 'investigators') - 10} end={sf(52) + 14} label="NTSB RIR-24-05" title="THE HELP DESK" hl={[{key: 'C09', at: wf(51, 'changed'), ats: [wf(51, 'changed'), wf(51, 'outcome')]}]} pushTo={wf(51, 'found')} />
					<div style={{position: 'absolute', left: 760, top: 900, display: 'flex', gap: 14, background: colors.card, border: `1px solid ${colors.border}`, padding: '6px 14px', opacity: onW(f, wf(51, 'train'), 8)}}>
						<span style={T(36, {color: colors.ink})}>THE TRAIN</span>
						<span style={T(36, {color: colors.ink, opacity: onW(f, wf(51, 'derailed'), 8)})}>DERAILED</span>
						<span style={T(36, {color: colors.ink, opacity: onW(f, wf(51, 'procedures'), 8)})}>BEFORE HIS PROCEDURES</span>
					</div>
					<div style={{position: 'absolute', left: 760, top: 966, background: colors.card, padding: '4px 14px', opacity: onW(f, wf(51, 'required'), 8)}}>
						<span style={T(36, {fontWeight: 700, color: colors.amber, display: 'inline-block', transform: `scale(${bump(f, fps, wf(51, 'act') + LAND).toFixed(4)})`})}>REQUIRED HIM TO ACT</span>
					</div>
				</>
			) : null}
		</>
	);
};

// ── 6 · The simple answer, held (s52–s55) ───────────────────────────────────────────────────────────────────────

const Grease: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const flip = tween(f, wf(53, 'hold') - 6, wf(53, 'thought') + 10, 0, 1, ease.camera);
	const face = flip < 0.5;
	const line = lead(f, wf(55, 'line'), 18);
	return (
		<>
			<div style={{position: 'absolute', left: 260, top: 200, width: 1400, height: 420, transform: `perspective(1200px) rotateY(${(flip * 180).toFixed(1)}deg)`, transformStyle: 'preserve-3d'}}>
				<div style={{position: 'absolute', inset: 0, background: colors.card, border: `1px solid ${colors.border}`, padding: '50px 60px', backfaceVisibility: 'hidden', opacity: face ? 1 : 0}}>
					<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: colors.amber}} />
					<div style={T(36, {color: colors.ink, opacity: onW(f, wf(52, 'read'), 10)})}>
						IF YOU HAVE READ ABOUT <span style={{...lit(f, wf(52, 'derailment'), colors.ink)}}>THIS DERAILMENT</span>
					</div>
					<div style={T(36, {marginTop: 8, opacity: onW(f, wf(52, 'may'), 10), ...lit(f, wf(52, 'simple'), colors.sub)})}>YOU MAY HAVE HEARD <span style={{opacity: onW(f, wf(52, 'heard'), 8)}}>THE SIMPLE</span> <span style={{opacity: onW(f, wf(52, 'answer'), 8)}}>ANSWER:</span></div>
					<div style={{marginTop: 30}}>
						<div style={T(64, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(52, 'skipped'), 8)})}>
							“A SKIPPED <span style={{opacity: onW(f, wf(52, 'repair'), 8)}}>REPAIR.</span>
						</div>
						<div style={T(64, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(52, 'bearing'), 8)})}>
							A BEARING WITH <span style={{opacity: onW(f, wf(52, 'grease'), 8), display: 'inline-block', transform: `scale(${bump(f, fps, wf(52, 'grease') + LAND).toFixed(4)})`}}>NO GREASE.”</span>
						</div>
					</div>
				</div>
				<div style={{position: 'absolute', inset: 0, background: colors.paper, transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', opacity: face ? 0 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(44, {fontWeight: 700, color: colors.paper_ink})}>VERDICT LATER IN THIS FILM</div>
				</div>
			</div>
			<Pop f={f} fps={fps} on={wf(54, 'confirm')} style={{position: 'absolute', left: 260, top: 660}}>
				<div style={T(44, {fontWeight: 700, color: colors.ink, border: `3px solid ${colors.ink}`, padding: '8px 20px'})}>THE RECORD CAN'T CONFIRM IT</div>
			</Pop>
			<div style={{position: 'absolute', left: 260, top: 790, opacity: onW(f, wf(55, 'show'), 10), display: 'flex', gap: 30, alignItems: 'center'}}>
				<span style={T(36, {...lit(f, wf(55, 'stranger'), colors.ink)})}>WHAT IT SHOWS:</span>
				<span style={T(36, {fontWeight: 700, opacity: onW(f, wf(55, 'where'), 8), color: colors.amber})}>WHERE <span style={{opacity: onW(f, wf(55, 'warning'), 8)}}>THE WARNING LINE</span></span>
				<div style={{width: 300 * line, height: 5, background: colors.amber}} />
				<span style={T(56, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(55, 'from'), 8)})}>170°F ?</span>
			</div>
		</>
	);
};

// ── 7 · How far apart: 19 miles, 13.9, 40, Sebring, 30 (s56–s63) ───────────────────────────────────────────────

const Spacing: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const sSeb = ROUTE.nodeS[0];
	const sSal = ROUTE.nodeS[1];
	const sEP = ROUTE.nodeS[2];
	const s19 = lead(f, wf(57, 'salem'), 30);
	const s30 = lead(f, wf(61, 'broken'), 30);
	const stretch = f >= wf(61, 'from') ? {s0: sSeb, s1: sSeb + (sAtMP(49.5) - sSeb) * s30, tone: colors.red, o: 1, dash: true} : {s0: sSal, s1: sSal + (sEP - sSal) * s19, tone: colors.amber, o: s19};
	const avg = rollTo(f, [{frame: wf(58, 'thirteen') - 12, value: 0}, {frame: wf(58, 'thirteen') + LAND, value: 13}, {frame: wf(58, 'nine') - 6, value: 13}, {frame: wf(58, 'nine') + LAND, value: 13.9}]);
	const build = lead(f, wf(62, 'slow'), 40);
	const spike = lead(f, wf(62, 'failure'), 10);
	return (
		<>
			<Card x={96} y={96} w={1728} h={600}>
				<span />
			</Card>
			<RouteLine
				f={f}
				fps={fps}
				box={{x: 260, y: 140, w: 1400}}
				draw={1}
				nodeOn={[wf(60, 'detector'), wf(56, 'detectors'), wf(56, 'detectors') + 12]}
				nodeTone={[colors.cyan, colors.amber, colors.red]}
				stretch={stretch}
			/>
			<div style={{position: 'absolute', left: 140, top: 124, display: 'flex', gap: 30}}>
				<span style={T(36, {...lit(f, wf(56, 'miles'), colors.ink)})}>DETECTORS</span>
				<span style={T(36, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(56, 'apart'), 8)})}>MILES APART</span>
			</div>
			<Pop f={f} fps={fps} on={wf(57, 'east')} style={{position: 'absolute', left: 1000, top: 236}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 12px'})}>SALEM → <span style={{...lit(f, wf(57, 'palestine'), colors.ink)}}>EAST PALESTINE</span></div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(57, 'nineteen')} style={{position: 'absolute', left: 1000, top: 300}}>
				<div style={T(56, {fontWeight: 700, color: colors.amber, background: colors.card, padding: '4px 12px'})}>≈19 MI · NTSB P. 105</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(60, 'before')} style={{position: 'absolute', left: 200, top: 196}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 12px'})}>THE DETECTOR BEFORE SALEM</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(60, 'eleven')} style={{position: 'absolute', left: 200, top: 250}}>
				<div style={T(44, {fontWeight: 700, color: colors.cyan, background: colors.card, padding: '4px 12px'})}>≈11 MI <span style={{opacity: onW(f, wf(60, 'back'), 8)}}>BACK (BY MILEPOST)</span></div>
			</Pop>
			{/* the facts below the map, each on its words */}
			<div style={{position: 'absolute', left: 120, top: 716, width: 840}}>
				<Card x={0} y={0} w={820} h={134} o={onW(f, wf(58, 'norfolk'), 10)}>
					<div style={{padding: '10px 24px'}}>
						<div style={T(26, {...lit(f, wf(58, 'testified'), colors.ink)})}>NS AT THE NTSB HEARING · DAY 2 P. 259</div>
						<div style={T(56, {fontWeight: 700, color: colors.cyan, marginTop: 6})}>
							{f < wf(58, 'thirteen') - 12 ? '—' : avg.toFixed(1)} MI <span style={T(30, {color: colors.ink, opacity: onW(f, wf(58, 'average'), 8)})}>AVERAGE,</span> <span style={T(30, {color: colors.ink, opacity: onW(f, wf(58, 'routes'), 8)})}>KEY ROUTES</span>
						</div>
					</div>
				</Card>
				<Card x={0} y={146} w={820} h={134} o={onW(f, wf(59, 'spacing'), 10)}>
					<div style={{padding: '10px 24px'}}>
						<div style={T(26, {...lit(f, wf(59, 'recommended'), colors.ink)})}>AAR RECOMMENDED <span style={{...lit(f, wf(59, 'practice'), colors.ink)}}>PRACTICE</span> · NTSB P. 107</div>
						<div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 6})}>
							<span style={{opacity: onW(f, wf(59, 'forty'), 8)}}>≤ 40 MI</span> <span style={T(36, {color: colors.cyan, opacity: onW(f, wf(59, 'met'), 8)})}>MET</span>
						</div>
					</div>
				</Card>
			</div>
			<div style={{position: 'absolute', left: 980, top: 716, width: 840}}>
				<Card x={0} y={0} w={840} h={134} o={onW(f, wf(60, 'sebring'), 10)} accent={colors.cyan}>
					<div style={{padding: '10px 24px'}}>
						<div style={{...T(26, {color: colors.ink}), whiteSpace: 'nowrap'}}>SEBRING · MP 79.8 · 7:37 P.M. · <span style={{...lit(f, wf(60, 'same'), colors.cyan)}}>SAME BEARING</span></div>
						<div style={T(56, {fontWeight: 700, color: colors.cyan, marginTop: 6})}>
							<span style={{opacity: onW(f, wf(60, 'thirty-eight'), 8)}}>+38</span><span style={{opacity: onW(f, wf(60, 'degrees'), 6)}}>°F</span> <span style={T(30, {color: colors.ink, opacity: onW(f, wf(60, 'below'), 8)})}>BELOW THE ALERT LINE · P. 5</span>
						</div>
					</div>
				</Card>
				<Card x={0} y={146} w={840} h={134} o={onW(f, wf(61, 'from'), 10)} accent={colors.red}>
					<div style={{padding: '10px 24px'}}>
						<div style={T(26, {color: colors.ink})}>BELOW ALERT LINE → <span style={{...lit(f, wf(61, 'axle'), colors.red)}}>BROKEN AXLE</span> · P. 107</div>
						<div style={T(56, {fontWeight: 700, color: colors.red, marginTop: 6, opacity: onW(f, wf(61, 'thirty'), 8)})}>≈30 MI</div>
					</div>
				</Card>
			</div>
			{/* both true at once: a slow build, then under a minute (ILLUSTRATION) */}
			{f >= wf(62, 'both') - 10 ? (
				<Card x={540} y={140} w={840} h={440} o={Math.min(onW(f, wf(62, 'both'), 12), offW(f, wf(63, 'at') - 4, 12))} accent={colors.amber}>
					<svg width={840} height={360} style={{position: 'absolute', left: 0, top: 60}}>
						<line x1={40} y1={300} x2={800} y2={300} stroke={colors.sub} strokeWidth={2} />
						<path d={`M 40 290 Q 400 ${290 - 60 * build} ${40 + 680 * build} ${290 - 90 * build}`} fill="none" stroke={colors.amber} strokeWidth={6} strokeDasharray="14 10" />
						{spike > 0 ? <line x1={720} y1={200} x2={740} y2={200 - 180 * spike} stroke={colors.red} strokeWidth={8} /> : null}
						<text x={60} y={340} fontFamily={mono} fontSize={30} fill={colors.ink} opacity={onW(f, wf(62, 'many'), 8)}>MANY MILES</text>
						<text x={600} y={340} fontFamily={mono} fontSize={30} fill={colors.red} opacity={onW(f, wf(62, 'minute'), 8)}>&lt; 1 MINUTE</text>
					</svg>
					<div style={{position: 'absolute', left: 24, top: 14, ...T(36, {fontWeight: 700, ...lit(f, wf(62, 'true'), colors.ink)})}}>BOTH CAN BE TRUE</div>
					<div style={{position: 'absolute', right: 20, top: 18, ...T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'})}}>ILLUSTRATION</div>
				</Card>
			) : null}
			{/* s63: Salem between the lines */}
			{f >= wf(63, 'at') - 10 ? (
				<Card x={540} y={180} w={840} h={260} o={onW(f, wf(63, 'at'), 12)} accent={colors.amber}>
					<div style={{padding: '24px 30px'}}>
						<div style={T(36, {...lit(f, wf(63, 'salem'), colors.ink)})}>SALEM · <span style={{opacity: onW(f, wf(63, 'reading'), 8)}}>+103°F</span></div>
						<div style={T(38, {fontWeight: 700, color: colors.amber, marginTop: 14, opacity: onW(f, wf(63, 'over'), 8)})}>OVER <span style={{opacity: onW(f, wf(63, 'help'), 8)}}>THE HELP-DESK LINE (90)</span></div>
						<div style={T(38, {fontWeight: 700, color: colors.ink, marginTop: 6, opacity: onW(f, wf(63, 'under'), 8)})}>UNDER <span style={{opacity: onW(f, wf(63, 'crew'), 8)}}>THE CREW LINE (170)</span></div>
					</div>
				</Card>
			) : null}
			<div style={{position: 'absolute', left: 140, top: 596, ...T(26, {color: colors.sub})}}>ROUTE AFTER NTSB RIR-24-05 FIGS. 3, 29 · RECONSTRUCTION</div>
		</>
	);
};

// ── 8 · Had the crew line been lower (s64–s65) ─────────────────────────────────────────────────────────────────

const Lower: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const drop = tween(f, wf(64, 'lower') - 10, wf(64, 'lower') + 30, 170, 95, ease.camera);
	const pageAt = wf(65, 'n');
	const ladderO = offW(f, pageAt - 6, 16);
	return (
		<>
			{ladderO > 0 ? (
				<AbsoluteFill style={{opacity: ladderO}}>
					<Card x={96} y={110} w={1728} h={860}>
						<span />
					</Card>
					<Ladder
						f={f}
						fps={fps}
						x={140}
						y={260}
						h={640}
						axisOn={sf(64) - 40}
						rungs={[
							{at: sf(64) - 40, value: 170, tone: colors.amber, title: 'THE CREW LINE', lines: [{t: 'AS IT WAS', at: sf(64) - 40}]},
							...(f >= wf(64, 'lower') - 10 ? [{at: wf(64, 'lower') - 10, value: Math.round(drop), tone: colors.cyan, noNum: true, title: 'HYPOTHETICAL: A LOWER CREW LINE', lines: [{t: 'THE CREW', at: wf(64, 'crew', 1)}, {t: 'TOLD', at: wf(64, 'told')}], dashed: true}] : []),
						]}
						reading={{at: sf(64) - 40, value: 103, label: 'SALEM'}}
					/>
					<div style={{position: 'absolute', left: 140, top: 140, ...T(44, {fontWeight: 700, ...lit(f, wf(64, 'crew'), colors.ink)})}}>HAD THE CREW LINE BEEN LOWER</div>
					<Honesty text="HYPOTHETICAL" x={1784} y={140} anchor="right" o={onW(f, wf(64, 'lower'), 10)} />
					<Pop f={f} fps={fps} on={wf(65, 'stopped')} style={{position: 'absolute', left: 140, top: 900}}>
						<div style={T(36, {color: colors.ink})}>WOULD THAT HAVE STOPPED THIS TRAIN <span style={{color: colors.amber, opacity: onW(f, wf(65, 'time'), 8)}}>IN TIME?</span></div>
					</Pop>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={pageAt - 10} end={ef(65) + 30} label="NTSB RIR-24-05" title="EXECUTIVE SUMMARY" hl={[{key: 'C179', at: wf(65, 'research'), ats: [wf(65, 'research'), wf(65, 'thresholds'), wf(65, 'improvement')]}]} pushTo={wf(65, 'found')} />
			<div style={{position: 'absolute', left: 900, top: 900, display: 'flex', gap: 14, opacity: onW(f, wf(65, 'decide'), 8)}}>
				<span style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>NOT DECIDED</span>
				<span style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px', opacity: onW(f, wf(65, 'needed'), 8)})}>RESEARCH NEEDED</span>
			</div>
			<Pop f={f} fps={fps} on={wf(65, 'lower')} style={{position: 'absolute', left: 900, top: 820}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px'})}>LOWER LINES: <span style={{color: colors.amber, opacity: onW(f, wf(65, 'significant'), 8)}}>A SIGNIFICANT SAFETY GAIN?</span></div>
			</Pop>
		</>
	);
};

// ── 9 · Where did 170 come from? The transcript turns face up (s66, the act turn) ──────────────────────────────

const Turn: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const flip = tween(f, ef(66) + 8, ef(66) + 56, 0, 1, ease.camera);
	const cardO = offW(f, ef(66) + 4, 16);
	return (
		<>
			{cardO > 0 ? (
				<AbsoluteFill style={{opacity: cardO, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(36, {color: colors.ink, opacity: onW(f, wf(66, 'either'), 8)})}>EITHER WAY</div>
					<div style={T(200, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(66, 'one'), 8), transform: `scale(${bump(f, fps, wf(66, 'seventy') + LAND).toFixed(4)})`})}>170°F</div>
					<div style={T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(66, 'where'), 8)})}>
						WHERE DID IT <span style={{opacity: onW(f, wf(66, 'come'), 8), color: colors.amber}}>COME FROM?</span>
					</div>
				</AbsoluteFill>
			) : null}
			{flip > 0 && f < sf(67) + 30 ? (
				<AbsoluteFill style={{opacity: offW(f, sf(67) - 100, 20)}}>
					<div style={{position: 'absolute', left: 560, top: 120, width: 800, height: 1035 * 0.8, transform: `perspective(1400px) rotateX(10deg) rotateY(${(180 - flip * 180).toFixed(1)}deg)`, transformStyle: 'preserve-3d'}}>
						<div style={{position: 'absolute', inset: 0, background: colors.paper, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}} />
						<div style={{position: 'absolute', inset: 0, backfaceVisibility: 'hidden', overflow: 'hidden', background: colors.paper}}>
							<Img src={media('pages/hearing_p040.jpg')} style={{width: 800, height: 1035}} />
						</div>
					</div>
					<div style={{position: 'absolute', left: 560, top: 60, ...T(26, {color: colors.ink, opacity: flip})}}>NTSB HEARING TRANSCRIPT · DAY 2 · P. 214</div>
				</AbsoluteFill>
			) : null}
			<ActTitle n="III" title="The Boardroom" start={sf(67) - 92} end={sf(67) + 24} sub="WHERE THE LINE CAME FROM" />
		</>
	);
};

const cue = (frame: number, sfx: SfxCue['sfx'], gainDb = -18): SfxCue => ({frame, sfx, gainDb});

export const act2: SceneDef[] = [
	{id: 'a2_bearing', from: sf(32) - 30, to: sf(35) + 14, C: Bearing, cues: [cue(wf(32, 'axle'), 'pen_scratch', -24), cue(wf(32, 'sealed'), 'relay_click'), cue(wf(33, 'friction'), 'transformer_hum', -26), cue(wf(34, 'detectors'), 'relay_click', -22)]},
	{id: 'a2_ladder', from: sf(35) - 20, to: sf(45), C: LadderScene, cues: [cue(wf(36, 'ninety'), 'quartz_tick'), cue(wf(37, 'seventy'), 'quartz_tick'), cue(wf(38, 'critical'), 'cockpit_chime', -26), cue(wf(39, 'hundred'), 'quartz_tick'), cue(wf(40, 'three'), 'relay_click'), cue(wf(43, 'fire'), 'whoosh', -24)]},
	{id: 'a2_cup', from: sf(45) - 20, to: sf(47) + 14, C: CupView, cues: [cue(wf(45, 'looking'), 'relay_click', -22), cue(wf(46, 'lags'), 'pen_scratch', -24)]},
	{id: 'a2_findings', from: sf(47) - 20, to: sf(49) + 14, C: Findings, cues: [cue(sf(47) - 12, 'paper_slide'), cue(wf(47, 'reflect') - 15, 'highlighter', -22), cue(ef(47) + 8, 'paper_slide'), cue(wf(48, 'seized') - 15, 'highlighter', -22)]},
	{id: 'a2_desk', from: sf(49) - 20, to: sf(52) + 14, C: Desk, cues: [cue(wf(49, 'see'), 'relay_click', -22), cue(wf(51, 'investigators') - 10, 'paper_slide'), cue(wf(51, 'changed') - 15, 'highlighter', -22)]},
	{id: 'a2_grease', from: sf(52) - 20, to: ef(55) + 30, C: Grease, cues: [cue(wf(52, 'grease'), 'stamp', -22), cue(wf(53, 'hold'), 'paper_slide'), cue(wf(54, 'confirm'), 'stamp', -20)]},
	{id: 'a2_spacing', from: sf(56) - 20, to: ef(63) + 30, C: Spacing, cues: [cue(wf(57, 'nineteen'), 'quartz_tick'), cue(wf(58, 'nine'), 'quartz_tick'), cue(wf(59, 'forty'), 'quartz_tick'), cue(wf(60, 'thirty-eight'), 'quartz_tick'), cue(wf(61, 'thirty'), 'quartz_tick'), cue(wf(62, 'failure'), 'metal_snap_sub', -24)]},
	{id: 'a2_lower', from: sf(64) - 30, to: ef(65) + 40, C: Lower, cues: [cue(wf(64, 'lower'), 'pen_scratch', -24), cue(wf(65, 'n') - 10, 'paper_slide'), cue(wf(65, 'research') - 15, 'highlighter', -22)]},
	{id: 'a2_turn', from: sf(66) - 20, to: sf(67) + 30, C: Turn, cues: [cue(wf(66, 'seventy'), 'quartz_tick'), cue(ef(66) + 10, 'paper_slide', -16), cue(sf(67) - 92, 'stamp', -22)]},
];

