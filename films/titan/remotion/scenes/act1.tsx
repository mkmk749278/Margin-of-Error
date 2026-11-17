import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {BracketLock, bump, DatePill, flash, LAND, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {Mount, STRIP, useFilmFrame} from '../kit';
import {AE_POS, Card, Chip, clamp, hhmm, HULL, HullLines, lit, Pop, RealFootage, sans, SG_POS, span, T, T0, T_EVENT, TimeTrace, traceX, vis} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT I · THE INCIDENT (sentences 0–21). Choreography table: scenes/choreography/act1.md. Every cue is a literal
// wf(sentence, 'word') on the measured narration (vo/timing.json, scripts/word_align.py).

const PLATE = {x: 140, y: 150, w: 1640, h: 770};
const INNER = PLATE.h - STRIP;

// ── 1 · Cold open: dive 80's strain trace draws against its clock, the bang, the shift (s0–s2) ──────────────────

const ColdOpen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	// one driver: the trace, the depth line and the clock all read tEnd (hours, NDT)
	const tEnd = rollTo(f, [
		{frame: 0, value: T0},
		{frame: wf(1, 'hull'), value: 14.9},
		{frame: wf(1, 'burst') + LAND, value: T_EVENT - 0.004},
		{frame: wf(1, 'shift') - 6, value: T_EVENT + 0.004},
		{frame: wf(1, 'shift') + LAND + 10, value: 15.62},
		{frame: ef(1) + 50, value: 17.1},
	]);
	const ae = lead(f, wf(1, 'burst'), 10);
	const jump = lead(f, wf(1, 'shift'), 10);
	// s2: eleven months later, the chart steps back; the last dive draws on the right
	const back = span(f, wf(2, 'eleven') - 6, wf(2, 'later') + 10);
	const W = PLATE.w;
	const evX = PLATE.x + traceX(W, T_EVENT);
	const descent = span(f, wf(2, 'way') - 4, wf(2, 'failed') + LAND);
	const failed = lead(f, wf(2, 'failed'), 6);
	const colX = 1420;
	const colTop = 250;
	const colH = 600;
	const yOf = (m: number) => colTop + (m / 4000) * colH;
	return (
		<>
			<AbsoluteFill style={{transform: `translateX(${(-60 * back).toFixed(1)}px) scale(${(1 - 0.3 * back).toFixed(4)})`, transformOrigin: '0% 50%', opacity: 1 - 0.55 * back}}>
				<Mount x={PLATE.x} y={PLATE.y} w={PLATE.w} h={PLATE.h} start={-20} end={sf(3) + 30} source="DIVE 80 · OCEANGATE DATA · NTSB MATERIALS LAB 24-012, FIG. 26" labels={['TRACED FROM THE NTSB FIGURE']} lean={3}>
					<TimeTrace f={f} w={W} h={INNER} tEnd={tEnd} ae={ae} jump={jump} showDepth={0} />
				</Mount>
				{/* the clock reads the same driver as the trace */}
				<div style={{position: 'absolute', left: PLATE.x + PLATE.w - 330, top: PLATE.y + 22, ...T(40, {color: colors.ink, fontWeight: 700})}}>
					{hhmm(tEnd)} <span style={{fontSize: 26, color: colors.sub}}>NDT</span>
				</div>
				<div style={{position: 'absolute', left: evX - 360, top: PLATE.y + 90, width: 330, textAlign: 'right', opacity: lead(f, wf(1, 'sound'), 10)}}>
					<Chip text="ACOUSTIC CH 2 · 25,687 mV" tone={colors.red} style={{transform: `scale(${bump(f, fps, wf(1, 'sound') + LAND, 0.06).toFixed(4)})`}} />
				</div>
				<div style={{position: 'absolute', left: evX - 470, top: PLATE.y + 520, width: 430, textAlign: 'right', opacity: lead(f, wf(1, 'strain'), 10)}}>
					<Chip text="STRAIN SHIFT · 15:26:45" tone={colors.amber} style={{transform: `scale(${bump(f, fps, wf(1, 'strain') + LAND, 0.06).toFixed(4)})`}} />
				</div>
			</AbsoluteFill>
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 16, alignItems: 'center'}}>
				{f < wf(2, 'later') - 6 ? (
					<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0, 'fifteenth')} monthWord={wf(0, 'july')} yearWord={wf(0, 'twenty-two')} fromYear={2022} fromDay={1} size={36} />
				) : (
					<StatusFlip f={f} fps={fps} word={wf(2, 'later')} from="15 JUL 2022" to="18 JUN 2023" toneFrom="amber" toneTo="amber" size={36} />
				)}
				<div style={{opacity: lead(f, wf(1, 'eighty'), 8) * (1 - back), transform: `scale(${bump(f, fps, wf(1, 'eighty') + LAND).toFixed(4)})`}}>
					<Chip text="DIVE 80" tone={colors.ink} size={36} />
				</div>
				<div style={{opacity: lead(f, wf(1, 'titan'), 8) * (1 - back), ...T(30, lit(f, wf(1, 'titan')))}}>TITAN</div>
				<div style={{opacity: lead(f, wf(1, 'monitor'), 8) * (1 - back)}}>
					<Chip text="HULL MONITOR" tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(1, 'monitor') + LAND, 0.06).toFixed(4)})`}} />
				</div>
			</div>
			{/* s2: the last dive, on the way down to the Titanic */}
			{back > 0.01 ? (
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: back}}>
					<line x1={colX - 120} x2={colX + 120} y1={colTop} y2={colTop} stroke={colors.sub} strokeWidth={2} />
					<text x={colX + 130} y={colTop + 9} style={T(26, {fill: colors.ink})}>SURFACE</text>
					<line x1={colX - 120} x2={colX + 120} y1={yOf(3840)} y2={yOf(3840)} stroke={colors.cyan} strokeWidth={2} strokeDasharray="8 8" opacity={lead(f, wf(2, 'titanic'), 12)} />
					<text x={colX + 130} y={yOf(3840) + 9} style={T(30, lit(f, wf(2, 'titanic'), colors.cyan))} opacity={lead(f, wf(2, 'titanic'), 12)}>THE TITANIC</text>
					<line x1={colX} x2={colX} y1={colTop} y2={colTop + (yOf(3363) - colTop) * descent} stroke={colors.ink} strokeWidth={4} />
					<circle cx={colX} cy={colTop + (yOf(3363) - colTop) * descent} r={8} fill={colors.ink} opacity={1 - failed} />
					<line x1={colX - 26} x2={colX + 26} y1={yOf(3363)} y2={yOf(3363)} stroke={colors.red} strokeWidth={5} opacity={failed} />
					<text x={colX - 40} y={yOf(3363) + 9} textAnchor="end" style={T(30, {fill: colors.red, fontWeight: 700})} opacity={failed}>HULL FAILED</text>
				</svg>
			) : null}
		</>
	);
};

// ── 2 · The five, in type only (s3), then the dark hold ─────────────────────────────────────────────────────────

const Names: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const names: [string, number][] = [
		['STOCKTON RUSH', wf(3, 'stockton')],
		['PAUL-HENRI NARGEOLET', wf(3, 'paul-henri')],
		['SHAHZADA DAWOOD', wf(3, 'shahzada')],
		['SULEMAN DAWOOD', wf(3, 'suleman')],
		['HAMISH HARDING', wf(3, 'hamish')],
	];
	return (
		<AbsoluteFill style={{background: colors.void, alignItems: 'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26}}>
				{names.map(([n, at]) => (
					<Pop key={n} f={f} fps={fps} at={at} dur={12} style={{transformOrigin: '50% 60%'}}>
						<div style={{fontFamily: sans, fontWeight: 600, fontSize: 56, letterSpacing: 6, color: colors.ink}}>{n}</div>
					</Pop>
				))}
				<div style={{width: 520 * lead(f, wf(3, 'died'), 18), height: 1, background: colors.sub, marginTop: 14}} />
				<div style={{...T(30, {color: colors.ink, letterSpacing: 4}), opacity: lead(f, wf(3, 'died'), 14)}}>18 JUN 2023</div>
			</div>
		</AbsoluteFill>
	);
};

// ── 3 · The monitor the company relied on (s4–s9) ───────────────────────────────────────────────────────────────

const DEAD = [0, 2, 4]; // AE channels 1, 3, 5 (C09), shown on the first three positions: ILLUSTRATION
const Monitor: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const {cx, cy, len, r} = HULL;
	const draw = span(f, wf(4, "titan's") - 10, wf(4, 'hull') + 30);
	const hard = lead(f, wf(4, 'hard'), 10);
	const wall = lead(f, wf(4, 'inspect'), 12);
	const weak = lead(f, wf(4, 'weakening'), 14);
	const sensorsOn = (i: number) => lead(f, wf(4, 'monitor') + i * 3, 8);
	const gaugesOn = (i: number) => lead(f, wf(4, 'monitor') + 10 + i * 3, 8);
	const gaps = lead(f, wf(7, 'gaps'), 8);
	const warnPulse = f >= wf(4, 'warn') ? flash(f, wf(4, 'warn'), 0.4) : 0;
	// s5–s6: the claim people make, then the record
	const myth = vis(f, wf(5, 'often'), wf(7, 'monitor') - 10);
	// s7: the hull steps back to make room for the three findings; at "time", the trace
	const toTrace = span(f, wf(7, 'strain') - 10, wf(8, 'implosion') + 10);
	const hullO = 1 - toTrace;
	const tEnd = 17.1;
	// the axis is promised, not swapped: TIME slides left and dims, "→ DEPTH" arrives beside it and stays (viewer panel v2:
	// a crossfade in one place garbled the two words, and flicking back read as a broken promise)
	const depthTease = interpolate(f, [wf(8, 'against') - 2, wf(8, 'depth') + LAND], [0, 1], clamp);
	const W = 1240;
	const H = 600;
	const tx = interpolate(toTrace, [0, 1], [1080, 340]);
	const ty = interpolate(toTrace, [0, 1], [640, 170]);
	const ts = interpolate(toTrace, [0, 1], [0.42, 1]);
	const traceO = Math.min(lead(f, wf(7, 'strain'), 10), 1);
	const same = Math.max(flash(f, wf(8, 'plotted'), 0), flash(f, wf(8, 'same'), 0), flash(f, wf(9, 'chart'), 0));
	const ntsb = lead(f, wf(8, 'n'), 8);
	const draw9 = span(f, wf(9, 'draw') - 6, wf(9, 'chart') + 20);
	return (
		<>
			{hullO > 0.01 ? (
				<AbsoluteFill style={{opacity: hullO * (1 - 0.55 * myth)}}>
					<Mount x={160} y={110} w={1600} h={800} start={sf(4) - 14} end={ef(9) + 60} source="TITAN'S PRESSURE HULL · SENSOR COUNT: USCG MBI REPORT" labels={['ILLUSTRATION · NOT TO SCALE']} lean={4} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<g transform={`translate(0 -40)`}>
							<HullLines draw={draw} wall={wall} tone={weak > 0 ? colors.cyan : colors.cyan} />
							{AE_POS.map(([u, v], i) => {
								const x = cx + u * len;
								const y = cy + v * (r + 18);
								const dead = DEAD.includes(i) ? gaps : 0;
								const c = dead > 0.5 ? colors.muted : colors.cyan;
								return (
									<g key={`ae${i}`} opacity={sensorsOn(i)}>
										<circle cx={x} cy={y} r={14 * bump(f, fps, wf(4, 'monitor') + i * 3 + LAND, 0.2)} fill={c} opacity={0.9} />
										{dead > 0 ? <path d={`M ${x - 12} ${y - 12} L ${x + 12} ${y + 12} M ${x + 12} ${y - 12} L ${x - 12} ${y + 12}`} stroke={colors.red} strokeWidth={4} opacity={dead} /> : null}
										{warnPulse > 0 && dead < 0.5 ? <circle cx={x} cy={y} r={14 + 26 * warnPulse} fill="none" stroke={colors.amber} strokeWidth={2} opacity={warnPulse} /> : null}
									</g>
								);
							})}
							{SG_POS.map(([u, v], i) => {
								const x = cx + u * len;
								const y = cy + v * r;
								return (
									<g key={`sg${i}`} opacity={gaugesOn(i)}>
										<rect x={x - 12} y={y - 7} width={24} height={14} fill="none" stroke={colors.ink} strokeWidth={2} />
										<rect x={x - 7} y={y - 12} width={14} height={24} fill="none" stroke={colors.ink} strokeWidth={2} opacity={0.7} />
									</g>
								);
							})}
							<BracketLock f={f} fps={fps} word={wf(4, 'hard')} x={cx - len / 2 - 60} y={cy - r - 40} w={len + 120} h={2 * r + 80} tone="amber" until={wf(4, 'oceangate') + 10} />
						</g>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 160, display: 'flex', gap: 16, alignItems: 'center'}}>
						<div style={{...T(30, lit(f, wf(4, 'titan\'s'))), opacity: lead(f, wf(4, 'titan\'s'), 8)}}>TITAN · PRESSURE HULL</div>
						<div style={{opacity: hard}}>
							<Chip text="HARD TO INSPECT" style={{transform: `scale(${bump(f, fps, wf(4, 'hard') + LAND, 0.06).toFixed(4)})`}} />
						</div>
						<div style={{opacity: lead(f, wf(4, 'oceangate'), 8), ...T(30, lit(f, wf(4, 'oceangate')))}}>· OCEANGATE</div>
						<div style={{opacity: lead(f, wf(4, 'relied'), 8), ...T(30, lit(f, wf(4, 'relied'), colors.cyan))}}>RELIED ON THIS</div>
					</div>
					<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 22, opacity: 1 - lead(f, wf(7, 'gaps'), 8)}}>
						<div style={{opacity: lead(f, wf(4, 'monitor'), 8), ...T(30, lit(f, wf(4, 'monitor'), colors.cyan))}}>● 8 ACOUSTIC SENSORS</div>
						<div style={{opacity: lead(f, wf(4, 'monitor') + 12, 8), ...T(30, lit(f, wf(4, 'monitor') + 12))}}>▭ 16 STRAIN GAUGES</div>
						<div style={{opacity: lead(f, wf(4, 'warn'), 8)}}>
							<Chip text={f >= wf(4, 'weakening') ? 'TO WARN · HULL WEAKENING' : 'TO WARN'} style={{transform: `scale(${bump(f, fps, wf(4, 'warn') + LAND, 0.06).toFixed(4)})`}} />
						</div>
					</div>
					{/* s7: the three findings arrive on their words */}
					<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 18, opacity: lead(f, wf(7, 'gaps'), 8)}}>
						<Chip text="CH 1, 3, 5 · DEAD ALL OF 2022" tone={colors.red} style={{transform: `scale(${bump(f, fps, wf(7, 'gaps') + LAND, 0.06).toFixed(4)})`}} />
						<div style={{opacity: lead(f, wf(7, 'alerts'), 8)}}>
							<Chip text={f >= wf(7, 'other') ? 'ALERT CRITERIA · FROM OTHER HULLS' : 'ALERT CRITERIA'} style={{transform: `scale(${bump(f, fps, wf(7, 'hulls') + LAND, 0.06).toFixed(4)})`}} />
						</div>
					</div>
				</AbsoluteFill>
			) : null}
			{/* s5–s6: "It is often said…" / "The record is more complicated." */}
			<Card x={520} y={300} w={880} o={myth * (1 - toTrace)} accent={colors.amber} style={{padding: '30px 40px 30px'}}>
				<div style={{...T(26, {color: colors.amber, letterSpacing: 3}), opacity: lead(f, wf(5, 'often'), 8)}}>IT IS OFTEN SAID</div>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 54, lineHeight: 1.2, marginTop: 14, color: f >= wf(6, 'record') ? colors.sub : colors.ink}}>
					<span style={{opacity: lead(f, wf(5, 'warning'), 8)}}>The warning </span>
					<span style={{opacity: lead(f, wf(5, 'worked'), 8)}}>worked, </span>
					<br />
					<span style={{opacity: lead(f, wf(5, 'ignored'), 8)}}>and was ignored.</span>
				</div>
				<div style={{marginTop: 22, display: 'flex', gap: 14, alignItems: 'center', opacity: lead(f, wf(6, 'record'), 8)}}>
					<Chip text="THE RECORD" tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(6, 'record') + LAND, 0.06).toFixed(4)})`}} />
					<span style={{...T(34, lit(f, wf(6, 'complicated'))), fontWeight: 700}}>{f >= wf(6, 'complicated') - 4 ? 'IS MORE COMPLICATED' : ''}</span>
				</div>
			</Card>
			{/* s7 "read against time" → s8 the same numbers → s9 we draw it */}
			{traceO > 0 ? (
				<div style={{position: 'absolute', left: tx, top: ty, width: W, height: H, transform: `scale(${ts.toFixed(4)})`, transformOrigin: '0 0', opacity: traceO}}>
					<div style={{position: 'absolute', inset: 0, background: colors.card, border: `1px solid ${colors.border}`, boxShadow: `0 0 ${(40 * same).toFixed(0)}px rgba(56,189,248,${(0.5 * same).toFixed(2)})`}} />
					<TimeTrace
						f={f}
						w={W}
						h={H}
						tEnd={tEnd}
						showDepth={0}
						axisLabel={
							<g>
								<text x={-110 * depthTease} textAnchor="middle" style={T(34, {fill: depthTease > 0.5 ? colors.sub : colors.amber, letterSpacing: 6, fontWeight: 700})}>TIME</text>
								<text x={40 + 30 * depthTease} textAnchor="start" style={T(34, {fill: colors.cyan, letterSpacing: 6, fontWeight: 700})} opacity={depthTease}>→ DEPTH</text>
							</g>
						}
					/>
					<svg width={W} height={H} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
						<BracketLock f={f} fps={fps} word={wf(7, 'time')} x={W / 2 - 120} y={H - 70} w={240} h={56} tone="amber" until={wf(8, 'after')} />
					</svg>
				</div>
			) : null}
			<div style={{position: 'absolute', left: 340, top: 96, display: 'flex', gap: 18, alignItems: 'center', opacity: ntsb * (1 - lead(f, wf(9, 'reports'), 12))}}>
				<Chip text="N-T-S-B" tone={colors.cyan} size={34} style={{transform: `scale(${bump(f, fps, wf(8, 'n') + LAND, 0.06).toFixed(4)})`}} />
				<span style={{...T(28, lit(f, wf(8, 'investigator'))), opacity: lead(f, wf(8, "america's"), 8)}}>U.S. NATIONAL TRANSPORTATION SAFETY BOARD</span>
			</div>
			<div style={{position: 'absolute', left: 340, top: 800, ...T(30, lit(f, wf(8, 'same'), colors.cyan)), opacity: lead(f, wf(8, 'same'), 8) * (1 - lead(f, wf(9, 'reports'), 12))}}>THE SAME NUMBERS · PLOTTED AGAINST DEPTH</div>
			{/* s9: the records we draw it from */}
			<div style={{position: 'absolute', left: 340, top: 790, display: 'flex', flexDirection: 'column', gap: 12, opacity: draw9 > 0 ? 1 : 0}}>
				{(
					[
						['NTSB MIR-25-36 · FINAL REPORT · 02 OCT 2025', wf(9, 'reports')],
						['USCG MARINE BOARD · REPORT OF INVESTIGATION · 04 AUG 2025', wf(9, 'reports') + 12],
						['USCG HEARING · SWORN TESTIMONY · SEP 2024', wf(9, 'sworn')],
					] as [string, number][]
				).map(([t, at]) => (
					<Pop key={t} f={f} fps={fps} at={at}>
						<Chip text={t} tone={colors.ink} size={28} />
					</Pop>
				))}
			</div>
		</>
	);
};

// ── 4 · 18 JUN 2023: the last dive's log (s10–s16) ──────────────────────────────────────────────────────────────

type Msg = {t: string; text: string; who: 'TITAN' | 'POLAR PRINCE'; at: number; tone?: string; note?: string};
const LastDive: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const sea = vis(f, wf(11, 'at') - 10, ef(12) + 20);
	// one driver for the clock and the depth (§10.3): both roll from the 09:00 release and land together on
	// "forty-seven" (10:47, ≈3,350 m, C37/C50); the narration then confirms the depth
	const drive = rollTo(f, [{frame: wf(13, 'at') - 16, value: 0}, {frame: wf(13, 'forty-seven') + LAND, value: 1}]);
	const depth = 10 + 3340 * drive;
	const clockMin = Math.round(9 * 60 + 107 * drive);
	const log = vis(f, wf(13, 'at') - 16, ef(16) + 40);
	const msgs: Msg[] = [
		{t: '10:47', text: 'DROPPED TWO WTS', who: 'TITAN', at: wf(13, 'dropping'), tone: colors.ink},
		{t: '10:48', text: 'ACKNOWLEDGED', who: 'POLAR PRINCE', at: wf(15, 'acknowledged'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(15, 'sending'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(15, 'messages'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(15, 'hours'), tone: colors.cyan},
	];
	const noReply = lead(f, wf(16, 'reply'), 10);
	const last = lead(f, wf(14, 'last'), 10);
	return (
		<>
			{/* s10: the date, alone */}
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: vis(f, sf(10) - 20, wf(11, 'at') + 6)}}>
				<DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(10, 'eighteenth')} monthWord={wf(10, 'june')} yearWord={wf(10, 'twenty-three')} fromYear={2023} fromDay={1} size={64} />
			</AbsoluteFill>
			{sea > 0 ? (
				<AbsoluteFill style={{opacity: sea}}>
					<RealFootage f={f} start={wf(11, 'at') - 10} end={ef(12) + 30} src="footage/atl_swell.mp4" date="" what="THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY" source="SAGA47SWAN / YOUTUBE · CC BY" push={0.06} />
					<Card x={96} y={96} w={720} o={lead(f, wf(11, 'nine') - 8, 10)} style={{padding: '22px 28px'}}>
						<div style={{...T(26, {color: colors.amber, letterSpacing: 3})}}>18 JUN 2023 · DIVE 88</div>
						<div style={{display: 'flex', gap: 18, marginTop: 10, alignItems: 'baseline'}}>
							<span style={{...T(44, lit(f, wf(11, 'nine'))), fontWeight: 700, opacity: lead(f, wf(11, 'nine'), 8)}}>≈ 09:00</span>
							<span style={{...T(34, lit(f, wf(11, 'titan'))), opacity: lead(f, wf(11, 'titan'), 8)}}>TITAN</span>
							<span style={{...T(34, lit(f, wf(11, 'released'), colors.cyan)), opacity: lead(f, wf(11, 'released'), 8)}}>RELEASED</span>
						</div>
						<div style={{...T(26, {color: colors.ink}), marginTop: 6, opacity: lead(f, wf(11, 'platform'), 8)}}>FROM ITS LAUNCH PLATFORM</div>
						<div style={{marginTop: 16, display: 'flex', gap: 12, ...T(30, {})}}>
							<span style={{opacity: lead(f, wf(12, 'first'), 8), ...lit(f, wf(12, 'first'))}}>FIRST DIVE</span>
							<span style={{opacity: lead(f, wf(12, "year's"), 8), ...lit(f, wf(12, "year's"))}}>OF 2023</span>
							<span style={{opacity: lead(f, wf(12, 'deeper'), 8), ...lit(f, wf(12, 'deeper'), colors.cyan)}}>BELOW</span>
							<span style={{opacity: lead(f, wf(12, 'ten'), 8), ...lit(f, wf(12, 'ten'), colors.cyan), fontWeight: 700}}>10 M</span>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			{log > 0 ? (
				<AbsoluteFill style={{opacity: log}}>
					<Mount x={150} y={110} w={1620} h={820} start={wf(13, 'at') - 16} end={ef(16) + 40} source="DIVE 88 TEXT LOG · TIMES AND WORDING: NTSB MIR-25-36 · USCG MBI REPORT" labels={['RECONSTRUCTION']} lean={3}>
						<div style={{position: 'absolute', left: 60, top: 50, ...T(26, {color: colors.sub, letterSpacing: 3})}}>DEPTH</div>
						<div style={{position: 'absolute', left: 60, top: 86, ...T(84, {color: colors.ink, fontWeight: 700})}}>
							<span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(13, 'ten'), 0), flash(f, wf(13, 'three'), 0), flash(f, wf(13, 'hundred'), 0), flash(f, wf(13, 'fifty'), 0))).toFixed(1)}px ${colors.cyan}`}}>{Math.round(depth).toLocaleString('en-US')}</span>
							<span style={{fontSize: 40, color: colors.sub}}> M</span>
						</div>
						<div style={{position: 'absolute', left: 60, top: 196, ...T(30, {color: colors.ink}), opacity: lead(f, wf(13, 'at') - 16, 8)}}>
							CLOCK <span style={{fontWeight: 700, ...lit(f, wf(15, 'later'), colors.cyan, colors.ink)}}>{f >= wf(15, 'later') ? '10:48' : `${String(Math.floor(clockMin / 60)).padStart(2, '0')}:${String(clockMin % 60).padStart(2, '0')}`}</span>
						</div>
						<div style={{position: 'absolute', left: 60, top: 290, width: 420, ...T(28, {color: colors.ink, lineHeight: 1.45}), opacity: lead(f, wf(13, 'standard'), 8)}}>
							<span style={lit(f, wf(13, 'standard'), colors.cyan)}>STANDARD</span> <span style={{opacity: lead(f, wf(13, 'depth'), 8), ...lit(f, wf(13, 'depth'), colors.cyan)}}>AT THAT DEPTH</span>
							<br />
							<span style={{opacity: lead(f, wf(13, 'slow'), 8)}}>TO SLOW THE DESCENT</span>
						</div>
						<div style={{position: 'absolute', left: 560, top: 50, right: 50, bottom: 40, borderLeft: `1px solid ${colors.border}`, paddingLeft: 40}}>
							{msgs.map((m, i) => {
								const k = lead(f, i === 0 ? wf(13, 'titan') : m.at, 10);
								const kText = lead(f, m.at, 8);
								const isTitan = m.who === 'TITAN';
								return (
									<div key={i} style={{display: 'flex', gap: 22, alignItems: 'baseline', marginBottom: 26, opacity: k, transform: `translateY(${((1 - k) * 16).toFixed(1)}px)`}}>
										<span style={{...T(30, {color: colors.ink}), width: 100}}>{m.t}</span>
										<span style={{...T(26, {color: isTitan ? colors.amber : colors.cyan}), width: 230}}>{m.who}</span>
										<span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteSpace: 'nowrap'}}>{isTitan ? <>“dropped <span style={lit(f, wf(13, 'two'), colors.amber, colors.ink)}>two</span> <span style={lit(f, wf(13, 'weights'), colors.amber, colors.ink)}>wts</span>”</> : m.text}</span>
										{isTitan ? <span style={{opacity: lead(f, wf(13, 'routine'), 8) * (1 - lead(f, wf(13, 'dropping'), 8))}}><Chip text={f >= wf(13, 'message') ? 'ROUTINE MESSAGE' : 'ROUTINE'} tone={colors.ink} size={26} /></span> : null}
										{!isTitan && i > 1 ? <span style={{...T(28, {color: colors.red}), opacity: noReply}}>NO REPLY</span> : null}
									</div>
								);
							})}
							<div style={{marginTop: 4, opacity: last, boxShadow: `0 0 ${(30 * flash(f, wf(14, 'sent'), 0)).toFixed(0)}px rgba(245,158,11,0.6)`, display: 'inline-block'}}>
								<Chip text="THE LAST MESSAGE TITAN SENT" tone={colors.amber} size={28} style={{transform: `scale(${bump(f, fps, wf(14, 'last') + LAND, 0.06).toFixed(4)})`}} />
							</div>
							<div style={{marginTop: 18, opacity: lead(f, wf(15, 'hours'), 8), ...T(30, lit(f, wf(15, 'hours')))}}>… FOR HOURS</div>
						</div>
					</Mount>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 5 · Four days later: the ROV finds the tail cone (s17) ─────────────────────────────────────────────────────

const Rov: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RealFootage f={f} start={sf(17) - 14} end={ef(17) + 30} src="footage/rov_tailcone.mp4" date="22 JUN 2023" what="ROV VIDEO · TAIL CONE ON THE SEA FLOOR" source="USCG MBI · DVIDS" push={0.03} focus={[0.6, 0.5]} box={{x: 96, y: 96, w: 1300, h: 731}} under />
			<div style={{position: 'absolute', left: 1420, top: 120, width: 400, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Pop f={f} fps={fps} at={wf(17, 'four')}>
					<Chip text={f >= wf(17, 'later') ? 'FOUR DAYS LATER' : 'FOUR DAYS'} tone={colors.amber} size={34} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'operated')}>
					<Chip text="REMOTE VEHICLE (ROV)" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'found')}>
					<div style={{...T(30, lit(f, wf(17, 'found')))}}>FOUND:</div>
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'tail')}>
					<Chip text="TAIL CONE" tone={colors.cyan} size={30} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'both')}>
					<Chip text={f >= wf(17, 'domes') ? 'BOTH TITANIUM DOMES' : 'BOTH TITANIUM'} tone={colors.cyan} size={30} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'sea')}>
					<Chip text="ON THE SEA FLOOR" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(17, 'hundred')}>
					<Chip text="A FEW HUNDRED M" tone={colors.ink} size={28} />
					<div style={{...T(28, lit(f, wf(17, 'bow'))), marginTop: 8, opacity: lead(f, wf(17, "titanic's"), 8)}}>FROM THE TITANIC'S BOW</div>
				</Pop>
			</div>
		</>
	);
};

// ── 6 · Thirteen times to the wreck, and the last dive short (s18–s21) ──────────────────────────────────────────

const Thirteen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const X0 = 370;
	const DX = 78;
	const Y0 = 270;
	const H = 500;
	const yOf = (m: number) => Y0 + (m / 4000) * H;
	const ref = lead(f, wf(18, 'wreck'), 14);
	const firstDrop = wf(18, 'three') - 10;
	const lastDrop = wf(18, 'thirteen');
	const dropAt = (i: number) => firstDrop + ((lastDrop - firstDrop) * i) / 12;
	// the count is the bars that have landed: picture and number share one driver
	const n = Array.from({length: 13}).filter((_, i) => f >= dropAt(i) + 4).length;
	const d88 = span(f, wf(19, 'last') - 4, wf(19, 'failed') + LAND);
	const stop = lead(f, wf(19, 'failed'), 6);
	const gap = lead(f, wf(19, 'five'), 14);
	const margin = flash(f, wf(20, 'margin'), 0.45);
	const x88 = X0 + DX * 12 + 120;
	const back = lead(f, wf(21, 'start'), 14);
	return (
		<>
			<Mount x={150} y={110} w={1620} h={820} start={sf(18) - 14} end={hold(21).from + hold(21).frames + 20} source="TITAN'S DIVE LOG, USCG MBI REPORT · DIVE 88: NTSB MIR-25-36" labels={['DEPTHS TO SCALE']} lean={3} />
			<div style={{position: 'absolute', left: 230, top: 150, ...T(30, lit(f, wf(18, 'log'))), opacity: lead(f, wf(18, 'dive'), 8)}}><span style={lit(f, wf(18, 'titan'), colors.cyan, colors.ink)}>TITAN'S</span> DIVE LOG</div>
			<div style={{position: 'absolute', left: 620, top: 132, display: 'flex', alignItems: 'baseline', gap: 14}}>
				<span style={{...T(84, {color: colors.ink, fontWeight: 700}), transform: `scale(${bump(f, fps, lastDrop + LAND, 0.08).toFixed(4)})`, display: 'inline-block'}}>{n}</span>
				<span style={{...T(30, lit(f, wf(18, 'times')))}}>× TO THE WRECK</span>
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<line x1={X0 - 60} x2={x88 + 80} y1={Y0} y2={Y0} stroke={colors.sub} strokeWidth={2} />
				<text x={X0 - 70} y={Y0 + 9} textAnchor="end" style={T(26, {fill: colors.ink})}>0 M</text>
				<line x1={X0 - 60} x2={x88 + 80} y1={yOf(3840)} y2={yOf(3840)} stroke={colors.cyan} strokeWidth={2} strokeDasharray="8 8" opacity={ref} />
				<text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit(f, wf(18, 'forty'), colors.cyan))} opacity={lead(f, wf(18, 'three'), 10)}>{Math.round(rollTo(f, [{frame: wf(18, 'three'), value: 3000}, {frame: wf(18, 'eight') + LAND, value: 3800}, {frame: wf(18, 'forty') + LAND, value: 3840}])).toLocaleString('en-US')} M</text>
				<text x={X0 - 70} y={yOf(3840) + 44} textAnchor="end" style={T(26, lit(f, wf(18, 'wreck'), colors.cyan))} opacity={ref}>THE WRECK</text>
				{Array.from({length: 13}).map((_, i) => {
					const k = interpolate(f, [dropAt(i) - 14, dropAt(i) + 4], [0, 1], {...clamp, easing: ease.arrive});
					return k > 0 ? <rect key={i} x={X0 + i * DX - 11} y={Y0} width={22} height={(yOf(3840) - Y0) * k} fill={colors.cyan} opacity={0.85 - 0.45 * back} /> : null;
				})}
				{d88 > 0 ? <rect x={x88 - 12} y={Y0} width={24} height={(yOf(3363) - Y0) * d88} fill={colors.ink} /> : null}
				<line x1={x88 - 30} x2={x88 + 30} y1={yOf(3363)} y2={yOf(3363)} stroke={colors.red} strokeWidth={5} opacity={stop} />
				<text x={x88} y={Y0 - 22} textAnchor="middle" style={T(28, lit(f, wf(19, 'last'), colors.ink))} opacity={lead(f, wf(19, 'last'), 8)}>DIVE 88</text>
				{gap > 0 ? (
					<g opacity={gap}>
						<line x1={x88 + 60} x2={x88 + 60} y1={yOf(3363)} y2={yOf(3363) + (yOf(3840) - yOf(3363)) * gap} stroke={colors.amber} strokeWidth={3} />
						<line x1={x88 + 48} x2={x88 + 72} y1={yOf(3363)} y2={yOf(3363)} stroke={colors.amber} strokeWidth={3} />
						<line x1={x88 + 48} x2={x88 + 72} y1={yOf(3840)} y2={yOf(3840)} stroke={colors.amber} strokeWidth={3} />
						<rect x={x88 - 30} y={yOf(3363)} width={90} height={yOf(3840) - yOf(3363)} fill={colors.amber} opacity={0.18 * margin} />
					</g>
				) : null}
			</svg>
			<div style={{position: 'absolute', left: x88 + 84, top: yOf(3600) - 22, opacity: gap, transform: `scale(${bump(f, fps, wf(19, 'hundred') + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 50%'}}>
				<Chip text="≈ 500 M SHALLOWER" size={28} />
			</div>
			<div style={{position: 'absolute', left: X0 - 11, width: DX * 12 + 22, top: yOf(3840) + 26, textAlign: 'center', ...T(28, {color: colors.ink}), opacity: lead(f, wf(18, 'thirteen'), 10) * (1 - back)}}>2021–2022</div>
			{/* s21: back to where it began: dive 80 */}
			<div style={{position: 'absolute', left: X0 - 11, top: yOf(3840) + 16, display: 'flex', gap: 16, alignItems: 'center', opacity: back}}>
				<Chip text="DIVE 80 · 15 JUL 2022" tone={colors.ink} size={30} style={{transform: `scale(${bump(f, fps, wf(21, 'start') + LAND, 0.06).toFixed(4)})`}} />
				<span style={{...T(30, lit(f, wf(21, 'go')))}}>WHEN DID THE HULL START TO GO?</span>
			</div>
		</>
	);
};

export const act1: SceneDef[] = [
	{
		id: 'a1-cold-open',
		from: 0,
		to: sf(3) - 4,
		C: ColdOpen,
		cues: [
			{frame: wf(0, 'fifteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(1, 'burst'), sfx: 'metal_snap_sub', gainDb: -20},
			{frame: wf(1, 'shift'), sfx: 'relay_click', gainDb: -20},
			{frame: wf(2, 'later'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(2, 'failed'), sfx: 'pressure_drop', gainDb: -26},
		],
	},
	{id: 'a1-names', from: sf(3) - 18, to: sf(4) - 4, C: Names, cues: []},
	{
		id: 'a1-monitor',
		from: sf(4) - 16,
		to: ef(9) + 50,
		C: Monitor,
		cues: [
			{frame: wf(4, 'hull'), sfx: 'pen_scratch', gainDb: -26},
			{frame: wf(4, 'monitor'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(4, 'warn'), sfx: 'cockpit_chime', gainDb: -30},
			{frame: wf(5, 'often'), sfx: 'paper_slide', gainDb: -26},
			{frame: wf(6, 'record'), sfx: 'stamp', gainDb: -26},
			{frame: wf(7, 'gaps'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(7, 'time'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(8, 'depth'), sfx: 'whoosh', gainDb: -28},
			{frame: wf(9, 'reports'), sfx: 'paper_slide', gainDb: -24},
		],
	},
	{
		id: 'a1-last-dive',
		from: sf(10) - 30,
		to: sf(17) - 2,
		C: LastDive,
		cues: [
			{frame: wf(10, 'eighteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(13, 'forty-seven'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(13, 'dropping'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(15, 'acknowledged'), sfx: 'relay_click', gainDb: -26},
		],
	},
	{id: 'a1-rov', from: sf(17) - 16, to: ef(17) + 30, C: Rov, cues: [{frame: wf(17, 'tail'), sfx: 'relay_click', gainDb: -26}]},
	{
		id: 'a1-thirteen',
		from: sf(18) - 16,
		to: hold(21).from + hold(21).frames + 30,
		C: Thirteen,
		cues: [
			{frame: wf(18, 'thirteen'), sfx: 'stamp', gainDb: -24},
			{frame: wf(19, 'failed'), sfx: 'relay_click', gainDb: -24},
		],
	},
];
