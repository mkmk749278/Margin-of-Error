import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {RecordPage} from '../docs';
import {Mount, useFilmFrame} from '../kit';
import {Card, Chip, lit, sans, T, vis, Wd} from '../parts';
import {DIVE_TONE, ramp, Replot} from '../replot';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part B (sentences 120–158): the re-plot (signature 2), the hindsight test (our reading,
// labelled), the mechanism. Choreography: scenes/choreography/act3b.md (generated from this file).

const Note: React.FC<{o: number; children: React.ReactNode; tone?: string; y?: number}> = ({o, children, tone = colors.amber, y = 930}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: 96, right: 96, bottom: 1080 - y - 70, opacity: o, display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
			<div style={{background: 'rgba(18,24,36,0.96)', border: `1px solid ${colors.border}`, borderLeft: `3px solid ${tone}`, padding: '12px 22px', ...T(36, {color: colors.ink}), lineHeight: 1.35, maxWidth: 1680, textAlign: 'center'}}>{children}</div>
		</div>
	);

// ── 1 · The re-plot (s120–s134) ────────────────────────────────────────────────────────────────────────────────

const BOX = {x: 150, y: 120, w: 1120, h: 790};

const RePlot: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	// s120–s121: each dive its own shape, side by side
	const showT = (d: string, at: number) => lead(f, at, 14);
	// s123: the axis turns: the same points move to depth (no music under the turn)
	const m = ramp(f, wf(123, 'against') - 20, wf(123, 'depth') + 70);
	// s126: the zoom to the first 1,000 m begins as dive 81 is named
	const z = ramp(f, wf(125, 'end') + 6, wf(126, 'eighty-one') + 20);
	const show: Record<string, number> = {
		'75': Math.max(showT('75', wf(120, 'shape')), 0),
		'80': showT('80', wf(120, 'pace')),
		'81': showT('81', wf(120, 'stops')),
		'82': lead(f, wf(127, 'eighty-two'), 10),
		'83': lead(f, wf(128, 'eighty-three'), 10),
	};
	const pulse = (at: number) => Math.max(flash(f, at, 0.25), 0);
	const hi: Record<string, number> = {
		'75': Math.max(pulse(wf(124, 'seventy-five')), lead(f, wf(131, 'five'), 8) * (1 - lead(f, wf(132, 'after'), 10))),
		'80': Math.max(pulse(wf(125, 'eighty')), lead(f, wf(131, 'four'), 8) * (1 - lead(f, wf(132, 'after'), 10))),
		'81': Math.max(pulse(wf(126, 'eighty-one')), lead(f, wf(129, 'bends'), 10) * 0.8),
		'82': Math.max(pulse(wf(127, 'eighty-two')), lead(f, wf(129, 'bends'), 10) * 0.8),
		'83': Math.max(pulse(wf(128, 'eighty-three')), lead(f, wf(129, 'bends'), 10) * 0.8),
	};
	const band = lead(f, wf(129, 'five'), 14) * (1 - lead(f, wf(130, 'fitted'), 12) * 0.7);
	const fit = ramp(f, wf(130, 'line') - 10, wf(130, 'fifty') + 10);
	const event = lead(f, wf(125, 'event'), 8) * (1 - z);
	// the right-hand column: what the narration is saying, on its words
	const R = {x: 1310, y: 130, w: 500};
	// each slope is read digit by digit: every digit lands on its own spoken word
	const slopes: [string, [string, number][], number][] = [
		['75', [['5', wf(131, 'five')], ['.', wf(131, 'point')], ['0', wf(131, 'zero')], ['0', wf(131, 'zero', 1)]], wf(131, 'zero', 1)],
		['80', [['4', wf(131, 'four')], ['.', wf(131, 'point', 1)], ['7', wf(131, 'seven')], ['4', wf(131, 'four', 1)]], wf(131, 'four', 1)],
		['81', [['8', wf(132, 'eight')], ['.', wf(132, 'point')], ['7', wf(132, 'seven')], ['6', wf(132, 'six')]], wf(132, 'six')],
		['82', [['8', wf(132, 'eight', 1)], ['.', wf(132, 'point', 1)], ['0', wf(132, 'zero')], ['9', wf(132, 'nine')]], wf(132, 'nine')],
		['83', [['8', wf(132, 'eight', 2)], ['.', wf(132, 'point', 2)], ['7', wf(132, 'seven', 1)], ['7', wf(132, 'seven', 2)]], wf(132, 'seven', 2)],
	];
	const pct = Math.round(rollTo(f, [{frame: wf(134, 'three') - 14, value: 0}, {frame: wf(134, 'quarters') + LAND, value: 75}]));
	return (
		<>
			<Mount x={120} y={100} w={1680} h={860} start={sf(120) - 12} end={ef(134) + 40} source="GROUP 4 HOOP GAUGE · THE NTSB'S PLOTTED POINTS: MATERIALS LAB 24-012, FIGS. 29–31 · SLOPES: P. 7" labels={['NTSB DATA · REDRAWN']} lean={3} />
			<Replot m={m} z={z} show={show} hi={hi} band={band} fit={fit} event={event} box={BOX} />
			{/* the right-hand column */}
			<div style={{position: 'absolute', left: R.x, top: R.y, width: R.w}}>
				<div style={{opacity: 1 - lead(f, wf(122, 'n'), 10), ...T(30, {}), lineHeight: 1.55}}>
					<Wd f={f} at={wf(120, 'every')} lightAt={wf(120, 'shape')} tone={colors.amber}>EVERY DIVE: ITS OWN SHAPE,</Wd>
					<br />
					<Wd f={f} at={wf(120, 'pace')} tone={colors.amber}>ITS OWN PACE,</Wd>
					<br />
					<Wd f={f} at={wf(120, 'stops')} tone={colors.amber}>ITS OWN STOPS</Wd>
					<br />
					<br />
					<Wd f={f} at={wf(121, 'laid')} lightAt={wf(121, 'side')}>SIDE BY SIDE: </Wd>
					<Wd f={f} at={wf(121, 'dives')}>THE DIVES: </Wd><Wd f={f} at={wf(121, 'hard')} lightAt={wf(121, 'compare')} tone={colors.red}>HARD TO COMPARE</Wd>
				</div>
				<div style={{position: 'absolute', top: 0, opacity: vis(f, wf(122, 'n'), wf(124, 'dive') - 6), ...T(30, {}), lineHeight: 1.55}}>
					<Chip text="THE N-T-S-B" tone={colors.cyan} size={30} />
					<div style={{marginTop: 14}}>
						<Wd f={f} at={wf(122, 'more')} lightAt={wf(122, 'appropriate')}>A MORE APPROPRIATE WAY: </Wd>
						<Wd f={f} at={wf(122, 'plot')} lightAt={wf(122, 'strain')}>STRAIN </Wd>
						<Wd f={f} at={wf(122, 'against')} lightAt={wf(122, 'depth')} tone={colors.cyan} bold>AGAINST DEPTH</Wd>
						<br />
						<Wd f={f} at={wf(122, 'because')}>BECAUSE </Wd>
						<Wd f={f} at={wf(122, 'depth', 1)} tone={colors.cyan}>DEPTH </Wd>
						<Wd f={f} at={wf(122, 'sets')} lightAt={wf(122, 'pressure')} tone={colors.cyan}>SETS THE PRESSURE</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(123, 'same')} lightAt={wf(123, 'data')} tone={colors.amber} bold>THE SAME DATA</Wd>
						<Wd f={f} at={wf(123, 'against')} lightAt={wf(123, 'depth')} tone={colors.cyan} bold> → DEPTH</Wd>
					</div>
				</div>
				{/* the dives, named on their words, then their slopes */}
				<div style={{position: 'absolute', top: 0, opacity: lead(f, wf(124, 'dive'), 10)}}>
					<div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: lead(f, wf(130, 'number'), 8)}}>
						SLOPE, 15–150 M · <span style={lit(f, wf(130, 'millivolt'), colors.cyan, colors.ink)}>M PER mV</span>
					</div>
					{slopes.map(([d, v, at], i) => {
						const named = [wf(124, 'seventy-five'), wf(125, 'eighty'), wf(126, 'eighty-one'), wf(127, 'eighty-two'), wf(128, 'eighty-three')][i];
						const k = lead(f, at, 8);
						return (
							<div key={d} style={{marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 18, opacity: lead(f, named, 10)}}>
								<span style={{...T(34, {color: DIVE_TONE[d], fontWeight: 700}), width: 170, display: 'inline-block', transform: `scale(${bump(f, fps, named + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 50%'}}>DIVE {d}</span>
								<span style={{...T(28, {color: colors.ink}), width: 230}}>
									{i === 0 ? (f >= wf(124, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(125, 'end') ? 'STRAIGHT · EVENT AT END' : f >= wf(125, 'straight') ? 'STRAIGHT' : '') : f >= wf(129, 'bends') ? 'BENDS AWAY' : ''}
								</span>
								<span style={{...T(40, {color: i < 2 ? colors.cyan : colors.red, fontWeight: 700}), opacity: Math.max(k, lead(f, v[0][1], 6)), display: 'inline-block', transform: `scale(${bump(f, fps, at + LAND, 0.1).toFixed(4)})`}}>{v.map(([c, t], j) => <span key={j} style={{opacity: f >= t - 3 ? 1 : 0}}>{c}</span>)}</span>
							</div>
						);
					})}
					<div style={{marginTop: 22, ...T(28, {}), opacity: lead(f, wf(131, 'before'), 8)}}>
						<Wd f={f} at={wf(131, 'before')} tone={colors.cyan}>BEFORE THE EVENT · </Wd>
						<Wd f={f} at={wf(132, 'after')} tone={colors.red}>AFTER IT</Wd>
					</div>
					<div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: lead(f, wf(133, 'same'), 8)}}>
						<Wd f={f} at={wf(133, 'gauge')}>SAME GAUGE · </Wd>
						<Wd f={f} at={wf(133, 'hull')}>SAME HULL · </Wd>
						<Wd f={f} at={wf(133, 'sea')}>SAME SEA</Wd>
					</div>
					<div style={{marginTop: 22, display: 'flex', gap: 16, alignItems: 'baseline', opacity: lead(f, wf(134, 'response'), 8)}}>
						<Wd f={f} at={wf(134, 'response')} lightAt={wf(134, 'changed')} style={T(28, {})}>RESPONSE CHANGED</Wd>
						<span style={{...T(64, {color: f >= wf(134, 'quarters') + LAND ? colors.red : colors.sub, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(134, 'quarters') + LAND).toFixed(4)})`}}>{f >= wf(134, 'three') - 14 ? `≈ +${pct}%` : ''}</span>
					</div>
				</div>
			</div>
			{/* the turn's caption over the chart */}
			<div style={{position: 'absolute', left: 290, top: 140, ...T(30, {}), opacity: lead(f, wf(129, 'first'), 8) * (1 - lead(f, wf(130, 'fitted'), 10))}}>
				<Wd f={f} at={wf(129, 'first')} lightAt={wf(129, 'hundred')} tone={colors.amber}>THE FIRST 500 M: </Wd>
				<Wd f={f} at={wf(129, 'every')} lightAt={wf(129, 'one')} tone={colors.red}>EVERY ONE OF THEM </Wd>
				<Wd f={f} at={wf(129, 'bends')} lightAt={wf(129, 'away')} tone={colors.red} bold>BENDS AWAY</Wd>
			</div>
			<div style={{position: 'absolute', left: 290, top: 140, width: 960, ...T(28, {}), lineHeight: 1.45, opacity: lead(f, wf(130, 'fitted'), 8) * (1 - lead(f, wf(131, 'before'), 10))}}>
				<Wd f={f} at={wf(130, 'n')} tone={colors.cyan}>THE N-T-S-B: </Wd><Wd f={f} at={wf(130, 'fitted')} lightAt={wf(130, 'line')} tone={colors.cyan}>A LINE FITTED </Wd>
				<Wd f={f} at={wf(130, 'shallowest')} lightAt={wf(130, 'stretch')}>TO THE SHALLOWEST STRETCH:</Wd>
				<br />
				<Wd f={f} at={wf(130, 'fifteen')} tone={colors.cyan} bold>15–</Wd><Wd f={f} at={wf(130, 'hundred')} tone={colors.cyan} bold>1</Wd><Wd f={f} at={wf(130, 'fifty')} tone={colors.cyan} bold>50 M</Wd>
				<Wd f={f} at={wf(130, 'metres', 1)} lightAt={wf(130, 'depth')}> · METRES OF DEPTH </Wd>
				<Wd f={f} at={wf(130, 'each')} lightAt={wf(130, 'gauge')}>PER mV FROM THE GAUGE</Wd>
			</div>
		</>
	);
};

// ── 2 · Could they have seen it? The hindsight test, as our reading (s135–s149) ─────────────────────────────────

const Hindsight: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const ours = vis(f, wf(137, 'timing') - 6, ef(143) + 20);
	const ledgerO = vis(f, sf(138) - 10, ef(143) + 20);
	const dates: {d: string; dive: string; at: number; tone: string; note: string; noteAt: number}[] = [
		{d: '15 JUL', dive: '80', at: wf(140, 'eighty'), tone: '#7dd3fc', note: 'BANG · JUMP', noteAt: wf(140, 'minutes')},
		{d: '19 JUL', dive: '81', at: wf(141, 'eighty-one'), tone: colors.amber, note: 'BEND IN THE DATA', noteAt: wf(141, 'bend')},
		{d: '22 JUL', dive: '82', at: wf(143, 'eighty-two'), tone: '#fb923c', note: 'DIVED', noteAt: wf(143, 'later')},
		{d: '23 JUL', dive: '83', at: wf(143, 'eighty-three'), tone: colors.red, note: 'DIVED', noteAt: wf(143, 'eighty-three')},
	];
	const X0 = 260;
	const DX = 380;
	const Y = 560;
	const window = lead(f, wf(143, 'before'), 14);
	return (
		<>
			<RecordPage set="roi" start={sf(135) - 14} end={ef(136) + 24} hl={[{key: 'sufficient', at: wf(136, 'data')}, {key: 'elapsed', at: wf(136, 'elapsed')}]} label="EXHIBIT" title="FINDINGS" pushTo={wf(136, 'found')} />
			<Note o={vis(f, sf(135) - 4, ef(136) + 14)}>
				<Wd f={f} at={wf(135, 'could')} lightAt={wf(135, 'seen')} tone={colors.amber}>COULD OCEANGATE HAVE SEEN THIS? · </Wd>
				<Wd f={f} at={wf(136, 'coast')} lightAt={wf(136, 'board')}>THE COAST GUARD BOARD: </Wd>
				<Wd f={f} at={wf(136, 'all')} lightAt={wf(136, 'data')} tone={colors.cyan}>ALL THE DATA </Wd><Wd f={f} at={wf(136, 'needed')} lightAt={wf(136, 'show')} tone={colors.cyan}>TO SHOW </Wd><Wd f={f} at={wf(136, "hull's")} lightAt={wf(136, 'changed')} tone={colors.cyan}>THE HULL HAD CHANGED · </Wd><Wd f={f} at={wf(136, 'analysing')} lightAt={wf(136, 'strain')}>STRAIN VS </Wd>
				<Wd f={f} at={wf(136, 'elapsed')} lightAt={wf(136, 'time')} tone={colors.red}>ELAPSED TIME </Wd>
				<Wd f={f} at={wf(136, 'failed')} lightAt={wf(136, 'reveal')} tone={colors.red}>FAILED TO REVEAL IT</Wd>
			</Note>
			{/* our reading, labelled for the whole passage */}
			<div style={{position: 'absolute', right: 96, top: 84, opacity: ours, transform: `scale(${bump(f, fps, wf(137, 'our') + LAND, 0.06).toFixed(4)})`, transformOrigin: '100% 50%'}}>
				<Chip text="OUR READING OF THE RECORD · NOT A FINDING" tone={colors.amber} size={30} />
			</div>
			<AbsoluteFill style={{opacity: vis(f, sf(137) - 10, sf(138) + 6)}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 440, textAlign: 'center', ...T(40, {}), fontWeight: 700}}>
					<Wd f={f} at={wf(137, 'timing')} tone={colors.ink}>THE TIMING THAT FOLLOWS: </Wd>
					<Wd f={f} at={wf(137, 'our')} lightAt={wf(137, 'reading')} tone={colors.amber}>OUR OWN READING</Wd>
				</div>
				<div style={{position: 'absolute', left: 0, right: 0, top: 510, textAlign: 'center', ...T(30, {})}}>
					<Wd f={f} at={wf(137, 'not')} lightAt={wf(137, 'finding')}>NOT A FINDING </Wd>
					<Wd f={f} at={wf(137, 'any')} lightAt={wf(137, 'report')}>OF ANY REPORT</Wd>
				</div>
			</AbsoluteFill>
			{ledgerO > 0 ? (
				<AbsoluteFill style={{opacity: ledgerO}}>
					<Mount x={120} y={150} w={1680} h={760} start={sf(138) - 10} end={ef(143) + 20} source="DIVE DATES: NTSB MIR-25-36 · DATA DOWNLOADED AFTER EACH DIVE: USCG MBI REPORT 5.7" labels={['OUR READING']} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 200, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(138, 'brooks')} lightAt={wf(138, 'right')}>BROOKS WAS RIGHT: </Wd>
						<Wd f={f} at={wf(138, 'no')} lightAt={wf(138, 'jump')} tone={colors.cyan}>NO NEW JUMP</Wd>
						<br />
						<Wd f={f} at={wf(139, 'changed')} lightAt={wf(139, 'slope')} tone={colors.amber} bold>WHAT CHANGED WAS THE SLOPE · </Wd>
						<Wd f={f} at={wf(139, 'against')} lightAt={wf(139, 'time')}>AGAINST TIME, </Wd>
						<Wd f={f} at={wf(139, 'change')} lightAt={wf(139, 'slope', 1)}>A SLOPE CHANGE IS </Wd><Wd f={f} at={wf(139, 'hard')} lightAt={wf(139, 'see')} tone={colors.red}>HARD TO SEE</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<line x1={X0 - 40} x2={X0 + DX * 3 + 120} y1={Y} y2={Y} stroke={colors.sub} strokeWidth={2} />
						{/* the window: data on the computer before 82 and 83 */}
						<rect x={X0 + DX * 1} y={Y - 90} width={(DX * 2) * window} height={180} fill={colors.amber} opacity={0.12 * window} />
						{dates.map((d, i) => {
							const k = lead(f, d.at, 12);
							const x = X0 + DX * i;
							return (
								<g key={d.dive} opacity={Math.max(0.25, k)}>
									<circle cx={x} cy={Y} r={18 * bump(f, fps, d.at + LAND, 0.2)} fill={k > 0.5 ? d.tone : colors.card} stroke={d.tone} strokeWidth={3} />
									<text x={x} y={Y - 40} textAnchor="middle" style={T(30, {fill: colors.ink, fontWeight: 700})}>DIVE {d.dive}</text>
									<text x={x} y={Y + 56} textAnchor="middle" style={T(28, {fill: colors.ink})}>{d.d}</text>
									<text x={x} y={Y + 96} textAnchor="middle" style={T(26, lit(f, d.noteAt, d.tone))} opacity={lead(f, d.noteAt, 8)}>{d.note}</text>
								</g>
							);
						})}
					</svg>
					<div style={{position: 'absolute', left: 220, top: 720, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(140, 'dive')} lightAt={wf(140, 'itself')}>DIVE 80 ITSELF: </Wd>
						<Wd f={f} at={wf(140, 'nothing')} lightAt={wf(140, 'until')} tone={colors.cyan}>NOTHING UNTIL </Wd>
						<Wd f={f} at={wf(140, 'last')} lightAt={wf(140, 'minutes')}>ITS LAST MINUTES · </Wd>
						<Wd f={f} at={wf(141, 'n')} lightAt={wf(141, 'plots')} tone={colors.amber}>NTSB PLOTS: </Wd><Wd f={f} at={wf(141, 'bend')} lightAt={wf(141, 'first')} tone={colors.amber}>BEND FIRST </Wd><Wd f={f} at={wf(141, 'appears')} lightAt={wf(141, 'eighty-one')} tone={colors.amber}>IN 81</Wd>
						<br />
						<Wd f={f} at={wf(142, 'data')} lightAt={wf(142, 'computer')} tone={colors.cyan}>THAT DATA: ON THE COMPANY'S COMPUTER </Wd>
						<Wd f={f} at={wf(142, 'after')} lightAt={wf(142, 'dive')} tone={colors.cyan}>AFTER DIVE 81</Wd>
						<br />
						<Wd f={f} at={wf(143, 'plotted')} lightAt={wf(143, 'depth')}>PLOTTED AGAINST DEPTH: </Wd>
						<Wd f={f} at={wf(143, 'shown')} lightAt={wf(143, 'bend')} tone={colors.amber}>THE BEND, </Wd>
						<Wd f={f} at={wf(143, 'before')} lightAt={wf(143, 'eighty-two')} tone={colors.amber} bold>BEFORE DIVE 82, </Wd>
						<Wd f={f} at={wf(143, 'three')} lightAt={wf(143, 'days')} tone={colors.amber}>3 DAYS LATER, </Wd>
						<Wd f={f} at={wf(143, 'before', 1)} lightAt={wf(143, 'eighty-three')} tone={colors.red} bold>AND BEFORE 83</Wd>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 3 · Not a faulty gauge; Canada's test (s144–s149) ───────────────────────────────────────────────────────────

const Gauges: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const plot = vis(f, sf(144) - 10, wf(145, 'which') - 4);
	const show = {'75': 0, '80': 1, '81': 1, '82': 0, '83': 0};
	const hi = {'75': 0, '80': 0.6, '81': 0.6, '82': 0, '83': 0};
	const deep = lead(f, wf(145, 'deeper'), 14);
	const tsb = vis(f, sf(147) - 10, ef(149) + 30);
	const dbl = Math.round(rollTo(f, [{frame: wf(148, 'nearly') - 10, value: 0}, {frame: wf(148, 'double') + LAND, value: 98}]));
	return (
		<>
			{plot > 0 ? (
				<AbsoluteFill style={{opacity: plot}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(144) - 10} end={ef(145)} source="DIVES 80 AND 81, WHOLE DIVE · NTSB MATERIALS LAB 24-012, FIG. 30" labels={['NTSB DATA · REDRAWN']} lean={3} />
					<Replot m={1} z={0} show={show} hi={hi} deep={deep} box={BOX} />
					<div style={{position: 'absolute', left: 1310, top: 160, width: 480, ...T(32, {}), lineHeight: 1.55}}>
						<Wd f={f} at={wf(144, 'not')} lightAt={wf(144, 'faulty')} tone={colors.cyan}>NOT A FAULTY </Wd>
						<Wd f={f} at={wf(144, 'gauge')} tone={colors.cyan}>GAUGE</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(145, 'deeper')} lightAt={wf(145, 'down')}>DEEPER DOWN: </Wd>
						<Wd f={f} at={wf(145, 'curves')} lightAt={wf(145, 'match')} tone={colors.cyan} bold>THE CURVES STILL MATCH</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={wf(145, 'which') - 16} end={ef(146) + 24} hl={[{key: 'gages', at: wf(145, 'gauges')}]} label="EXHIBIT" title="FOOTNOTE 42" pushTo={wf(145, 'gauges') + 10} />
			<Note o={vis(f, wf(145, 'which') - 4, ef(146) + 14)} tone={colors.red}>
				<Wd f={f} at={wf(145, 'n')} lightAt={wf(145, 'said')} tone={colors.cyan}>N-T-S-B: </Wd>
				<Wd f={f} at={wf(145, 'gauges')} lightAt={wf(145, 'changed')}>THE GAUGES HAD NOT CHANGED · </Wd>
				<Wd f={f} at={wf(146, 'hull')} lightAt={wf(146, 'had')} tone={colors.red} bold>THE HULL HAD</Wd>
			</Note>
			{tsb > 0 ? (
				<AbsoluteFill style={{opacity: tsb}}>
					<Card x={300} y={180} w={1320} o={1} accent={colors.cyan} style={{padding: '30px 40px'}}>
						<Chip text="TSB CANADA · M23A0169" tone={colors.ink} size={30} />
						<div style={{marginTop: 14, ...T(30, {}), whiteSpace: 'nowrap'}}>
							<Wd f={f} at={wf(147, "canada's")} lightAt={wf(147, 'investigators')}>CANADA'S INVESTIGATORS, </Wd>
							<Wd f={f} at={wf(147, 'later')}>LATER, </Wd>
							<Wd f={f} at={wf(147, 'ran')} lightAt={wf(147, 'own')} tone={colors.cyan}>RAN THE SAME TEST ON THEIR OWN</Wd>
						</div>
						<div style={{marginTop: 26, display: 'flex', gap: 22, alignItems: 'baseline'}}>
							<DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(148, 'nineteenth')} monthWord={wf(148, 'july')} fromDay={15} size={32} />
							<Wd f={f} at={wf(148, 'slope')} lightAt={wf(148, 'surface')} style={T(30, {})}>SLOPE NEAR THE SURFACE</Wd>
						</div>
						<div style={{marginTop: 14, display: 'flex', gap: 22, alignItems: 'baseline'}}>
							<span style={{...T(80, {color: f >= wf(148, 'double') + LAND ? colors.red : colors.sub, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(148, 'double') + LAND).toFixed(4)})`}}>{f >= wf(148, 'nearly') - 10 ? `+${dbl}%` : ''}</span>
							<Wd f={f} at={wf(148, 'double')} style={T(30, {})} tone={colors.red}>NEARLY DOUBLE </Wd><Wd f={f} at={wf(148, 'whole')} lightAt={wf(148, 'dive')} style={T(30, {})} tone={colors.red}>THE WHOLE-DIVE SLOPE</Wd>
						</div>
						<div style={{marginTop: 26, display: 'flex', gap: 22, alignItems: 'baseline'}}>
							<Wd f={f} at={wf(149, 'august')} lightAt={wf(149, 'twenty-one')} tone={colors.amber} bold style={T(32, {})}>05 AUG 2021</Wd>
							<Wd f={f} at={wf(149, 'smaller')} lightAt={wf(149, 'bend')} style={T(30, {})} tone={colors.amber}>A SMALLER BEND · </Wd>
							<Wd f={f} at={wf(149, 'year')} lightAt={wf(149, 'earlier')} style={T(30, {})}>A YEAR EARLIER</Wd>
						</div>
						<div style={{marginTop: 26, ...T(30, {})}}>
							<Wd f={f} at={wf(149, 'could')} lightAt={wf(149, 'determine')} tone={colors.ink}>COULD NOT DETERMINE </Wd>
							<Wd f={f} at={wf(149, 'whether')} lightAt={wf(149, 'bang')}>WHETHER THE BANG </Wd>
							<Wd f={f} at={wf(149, 'caused')} lightAt={wf(149, 'change')}>CAUSED THE CHANGE</Wd>
						</div>
					</Card>
					<div style={{position: 'absolute', left: 300, top: 860, ...T(26, {color: colors.ink})}}>SOURCE: TSB MARINE INVESTIGATION REPORT M23A0169</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 4 · Why only near the surface: the voids, the separated layer (s150–s158) ──────────────────────────────────

const Mechanism: React.FC = () => {
	const f = useFilmFrame();
	const q = vis(f, sf(150) - 8, ef(150) + 14);
	const wall = vis(f, sf(152) - 10, ef(157) + 20);
	// pressure: light near the surface, heavy at depth; the separated layer flexes under light, closes under heavy
	const deep = ramp(f, wf(153, 'deeper') - 6, wf(153, 'down') + 20);
	const flex = lead(f, wf(152, 'move'), 14) * (1 - deep);
	const t = (f % 90) / 90;
	const wob = Math.sin(t * Math.PI * 2) * 14 * flex;
	const L = 300;
	const W = 1320;
	const top = 330;
	const lh = 44;
	const july = vis(f, sf(154) - 6, ef(157) + 20);
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 60, color: colors.ink}}>
					<Wd f={f} at={wf(150, 'why')} base={colors.ink}>Why would a </Wd>
					<Wd f={f} at={wf(150, 'damaged')} lightAt={wf(150, 'hull')} tone={colors.red}>damaged hull </Wd>
					<Wd f={f} at={wf(150, 'bend')} tone={colors.amber}>bend </Wd>
					<Wd f={f} at={wf(150, 'only')} lightAt={wf(150, 'surface')} base={colors.ink}>only near the surface?</Wd>
				</div>
			</AbsoluteFill>
			<RecordPage set="mir" start={sf(151) - 14} end={ef(151) + 20} hl={[{key: 'voidsfig', at: wf(151, 'voids')}]} label="EXHIBIT" title="FIGURE 17 · LAYERS 1 AND 2" focus={{x: 200, y: 360, w: 1480, h: 820}} pushTo={wf(151, 'bond')} />
			<Note o={vis(f, sf(151), ef(151) + 10)}>
				<Wd f={f} at={wf(151, 'found')} tone={colors.cyan}>N-T-S-B: </Wd>
				<Wd f={f} at={wf(151, 'long')} lightAt={wf(151, 'voids')} tone={colors.red}>LONG VOIDS IN THE BOND · </Wd>
				<Wd f={f} at={wf(151, 'first')} lightAt={wf(151, 'second')} tone={colors.amber}>LAYERS 1–2 </Wd><Wd f={f} at={wf(151, 'layers')} tone={colors.amber}>· </Wd>
				<Wd f={f} at={wf(151, 'third')} lightAt={wf(151, 'fourth')} tone={colors.amber}>LAYERS 3–4</Wd>
			</Note>
			{wall > 0 ? (
				<AbsoluteFill style={{opacity: wall}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(152) - 10} end={ef(157) + 20} source="THE WALL AT THE CYLINDER'S END · AS THE NTSB DESCRIBED IT, MIR-25-36 P. 51" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* outside water pressure: arrows, light then heavy */}
						{Array.from({length: 9}).map((_, i) => (
							<g key={i} opacity={lead(f, wf(152, 'light'), 10)}>
								<line x1={L + 80 + i * 145} x2={L + 80 + i * 145} y1={top - 120} y2={top - 30 - 50 * deep} stroke={colors.cyan} strokeWidth={2 + 4 * deep} />
								<polygon points={`${L + 72 + i * 145},${top - 40 - 50 * deep} ${L + 88 + i * 145},${top - 40 - 50 * deep} ${L + 80 + i * 145},${top - 22 - 50 * deep}`} fill={colors.cyan} />
							</g>
						))}
						<text x={L} y={top - 140} style={T(30, {fill: deep > 0.5 ? colors.cyan : colors.ink, fontWeight: 700})}>{deep > 0.5 ? 'HEAVY PRESSURE · DEEPER DOWN' : 'LIGHT PRESSURE · NEAR THE SURFACE'}</text>
						{/* five layers; layer 1 separated at the end (left), the gap opens on 'separates' */}
						{Array.from({length: 5}).map((_, i) => {
							const sep = i === 0 ? lead(f, wf(152, 'separates'), 14) * (1 - 0.8 * deep) : 0;
							const y = top + i * (lh + 6);
							const bend = i === 0 ? -(26 * sep) + wob : 0;
							return (
								<path
									key={i}
									d={`M ${L} ${y + bend} Q ${L + 260} ${y + bend * 0.4} ${L + 520} ${y} L ${L + W} ${y} L ${L + W} ${y + lh} L ${L + 520} ${y + lh} Q ${L + 260} ${y + lh + bend * 0.4} ${L} ${y + lh + bend} Z`}
									fill={colors.cyan}
									opacity={0.2 + 0.08 * (i % 2)}
									stroke={i === 0 && sep > 0.5 ? colors.amber : colors.cyan}
									strokeWidth={i === 0 && sep > 0.5 ? 3 : 1.5}
								/>
							);
						})}
						{/* the voids: between 1–2 and 3–4 */}
						{[1, 3].map((j) => (
							<g key={j} opacity={lead(f, wf(152, 'layer'), 10)}>
								{Array.from({length: 6}).map((_, k) => (
									<ellipse key={k} cx={L + 70 + k * 80} cy={top + j * (lh + 6) + 4} rx={26} ry={5} fill={colors.void} stroke={colors.red} strokeWidth={2} />
								))}
							</g>
						))}
						<text x={L} y={top + 5 * (lh + 6) + 34} style={T(26, {fill: colors.ink})}>← THE CYLINDER'S END</text>
						<text x={L + W} y={top + 5 * (lh + 6) + 34} textAnchor="end" style={T(26, {fill: colors.ink})}>TOWARD THE MIDDLE →</text>
					</svg>
					<div style={{position: 'absolute', left: L, top: 690, width: 1320, ...T(32, {}), lineHeight: 1.5, opacity: 1 - lead(f, wf(154, 'titan'), 12)}}>
						<Wd f={f} at={wf(152, 'where')} lightAt={wf(152, 'separates')} tone={colors.amber}>WHERE A LAYER SEPARATES </Wd>
						<Wd f={f} at={wf(152, 'end')} lightAt={wf(152, 'cylinder')}>AT THE CYLINDER'S END, </Wd>
						<Wd f={f} at={wf(152, 'move')} lightAt={wf(152, 'own')} tone={colors.amber} bold>IT CAN MOVE ON ITS OWN </Wd>
						<Wd f={f} at={wf(152, 'light')} lightAt={wf(152, 'pressure')}>UNDER LIGHT PRESSURE</Wd>
						<br />
						<Wd f={f} at={wf(153, 'deeper')} lightAt={wf(153, 'down')} tone={colors.cyan}>DEEPER DOWN: </Wd>
						<Wd f={f} at={wf(153, 'found')} lightAt={wf(153, 'layers')} tone={colors.cyan}>THE LAYERS </Wd><Wd f={f} at={wf(153, 'respond')} lightAt={wf(153, 'intact')} tone={colors.cyan} bold>RESPOND LIKE THE INTACT HULL</Wd>
					</div>
					{july > 0 ? (
						<Card x={L} y={640} w={1320} o={july} accent={colors.amber} style={{padding: '16px 24px'}}>
							<div style={T(28, {})}>
								<Wd f={f} at={wf(154, 'three')} lightAt={wf(154, 'dives')} tone={colors.amber} bold>3 MORE DIVES · </Wd><Wd f={f} at={wf(154, 'july')} tone={colors.amber} bold>JULY 2022</Wd>
							</div>
							<div style={{marginTop: 8, ...T(28, {}), lineHeight: 1.45}}>
								<Wd f={f} at={wf(155, 'two')}>TWO: </Wd><Wd f={f} at={wf(155, 'eighty-one')} tone={colors.amber}>81 </Wd>
								<Wd f={f} at={wf(155, 'eighty-two')} tone={colors.amber}>· 82 </Wd>
								<Wd f={f} at={wf(155, 'reached')} lightAt={wf(155, 'titanic')} tone={colors.cyan}>REACHED THE TITANIC</Wd>
								<br />
								<Wd f={f} at={wf(155, 'which')} lightAt={wf(155, 'said')} tone={colors.cyan}>N-T-S-B: </Wd><Wd f={f} at={wf(155, 'first')} lightAt={wf(155, 'damage')}>FIRST DAMAGE </Wd>
								<Wd f={f} at={wf(155, 'not')} lightAt={wf(155, 'implode')} tone={colors.ink}>NOT ENOUGH TO IMPLODE</Wd>
								<br />
								<Wd f={f} at={wf(156, 'not')} lightAt={wf(156, 'wall')} tone={colors.amber}>NOT A CRACK THROUGH THE WALL</Wd>
								<br />
								<Wd f={f} at={wf(157, 'no')} lightAt={wf(157, 'been')} tone={colors.red} bold>NO LONGER WHAT IT HAD BEEN</Wd>
							</div>
						</Card>
					) : null}
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(158) - 16} end={hold(158).from + hold(158).frames + 10} hl={[{key: 'unable', at: wf(158, 'unable')}, {key: 'removed', at: wf(158, 'immediately')}]} label="FINDING" title="CONCLUSION" pushTo={wf(158, 'flawed')} />
			<Note o={vis(f, sf(158), hold(158).from + hold(158).frames)} tone={colors.red}>
				<Wd f={f} at={wf(158, 'finding')} tone={colors.cyan}>N-T-S-B: </Wd><Wd f={f} at={wf(158, 'because')} lightAt={wf(158, 'analysis')} tone={colors.cyan}>ANALYSIS </Wd><Wd f={f} at={wf(158, 'flawed')} tone={colors.cyan}>FLAWED · </Wd><Wd f={f} at={wf(158, 'oceangate')}>OCEANGATE </Wd>
				<Wd f={f} at={wf(158, 'unable')} lightAt={wf(158, 'identify')}>UNABLE TO IDENTIFY </Wd>
				<Wd f={f} at={wf(158, 'titan')} lightAt={wf(158, 'damaged')} tone={colors.red}>DAMAGE </Wd><Wd f={f} at={wf(158, 'after')} lightAt={wf(158, 'eighty')} tone={colors.red}>AFTER DIVE 80 · </Wd>
				<Wd f={f} at={wf(158, 'needed')} tone={colors.red} bold>REMOVE </Wd><Wd f={f} at={wf(158, 'immediately')} lightAt={wf(158, 'service')} tone={colors.red} bold>FROM SERVICE, IMMEDIATELY</Wd>
			</Note>
		</>
	);
};

export const act3b: SceneDef[] = [
	{
		id: 'a3-replot',
		from: sf(120) - 14,
		to: ef(134) + 44,
		C: RePlot,
		cues: [
			{frame: wf(123, 'depth'), sfx: 'whoosh', gainDb: -24},
			{frame: wf(126, 'eighty-one'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(127, 'eighty-two'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(128, 'eighty-three'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(132, 'six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(134, 'quarters'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-hindsight',
		from: sf(135) - 16,
		to: ef(143) + 30,
		C: Hindsight,
		cues: [
			{frame: wf(136, 'elapsed') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(137, 'our'), sfx: 'stamp', gainDb: -26},
			{frame: wf(141, 'eighty-one'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(143, 'eighty-two'), sfx: 'relay_click', gainDb: -24},
		],
	},
	{
		id: 'a3-gauges',
		from: sf(144) - 14,
		to: ef(149) + 34,
		C: Gauges,
		cues: [
			{frame: wf(145, 'gauges') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(146, 'had'), sfx: 'stamp', gainDb: -24},
			{frame: wf(148, 'double'), sfx: 'quartz_tick', gainDb: -22},
		],
	},
	{
		id: 'a3-mechanism',
		from: sf(150) - 12,
		to: hold(158).from + hold(158).frames + 14,
		C: Mechanism,
		cues: [
			{frame: wf(151, 'voids'), sfx: 'paper_slide', gainDb: -24},
			{frame: wf(152, 'separates'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(158, 'immediately') - 15, sfx: 'highlighter', gainDb: -20},
		],
	},
];

