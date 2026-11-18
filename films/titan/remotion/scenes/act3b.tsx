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
	const m = ramp(f, wf(124, 'against') - 20, wf(124, 'depth') + 70);
	// s126: the zoom to the first 1,000 m begins as dive 81 is named
	const z = ramp(f, wf(126, 'end') + 6, wf(127, 'eighty-one') + 20);
	const show: Record<string, number> = {
		'75': Math.max(showT('75', wf(121, 'shape')), 0),
		'80': showT('80', wf(121, 'pace')),
		'81': showT('81', wf(121, 'stops')),
		'82': lead(f, wf(128, 'eighty-two'), 10),
		'83': lead(f, wf(129, 'eighty-three'), 10),
	};
	const pulse = (at: number) => Math.max(flash(f, at, 0.25), 0);
	const hi: Record<string, number> = {
		'75': Math.max(pulse(wf(125, 'seventy-five')), lead(f, wf(132, 'five'), 8) * (1 - lead(f, wf(133, 'after'), 10))),
		'80': Math.max(pulse(wf(126, 'eighty')), lead(f, wf(132, 'four'), 8) * (1 - lead(f, wf(133, 'after'), 10))),
		'81': Math.max(pulse(wf(127, 'eighty-one')), lead(f, wf(130, 'bends'), 10) * 0.8),
		'82': Math.max(pulse(wf(128, 'eighty-two')), lead(f, wf(130, 'bends'), 10) * 0.8),
		'83': Math.max(pulse(wf(129, 'eighty-three')), lead(f, wf(130, 'bends'), 10) * 0.8),
	};
	const band = lead(f, wf(130, 'five'), 14) * (1 - lead(f, wf(131, 'fitted'), 12) * 0.7);
	const fit = ramp(f, wf(131, 'line') - 10, wf(131, 'fifty') + 10);
	const event = lead(f, wf(126, 'event'), 8) * (1 - z);
	// the right-hand column: what the narration is saying, on its words
	const R = {x: 1310, y: 130, w: 500};
	// each slope is read digit by digit: every digit lands on its own spoken word
	const slopes: [string, [string, number][], number][] = [
		['75', [['5', wf(132, 'five')], ['.', wf(132, 'point')], ['0', wf(132, 'zero')], ['0', wf(132, 'zero', 1)]], wf(132, 'zero', 1)],
		['80', [['4', wf(132, 'four')], ['.', wf(132, 'point', 1)], ['7', wf(132, 'seven')], ['4', wf(132, 'four', 1)]], wf(132, 'four', 1)],
		['81', [['8', wf(133, 'eight')], ['.', wf(133, 'point')], ['7', wf(133, 'seven')], ['6', wf(133, 'six')]], wf(133, 'six')],
		['82', [['8', wf(133, 'eight', 1)], ['.', wf(133, 'point', 1)], ['0', wf(133, 'zero')], ['9', wf(133, 'nine')]], wf(133, 'nine')],
		['83', [['8', wf(133, 'eight', 2)], ['.', wf(133, 'point', 2)], ['7', wf(133, 'seven', 1)], ['7', wf(133, 'seven', 2)]], wf(133, 'seven', 2)],
	];
	const pct = Math.round(rollTo(f, [{frame: wf(135, 'three') - 14, value: 0}, {frame: wf(135, 'quarters') + LAND, value: 75}]));
	return (
		<>
			<Mount x={120} y={100} w={1680} h={860} start={sf(121) - 12} end={ef(135) + 40} source="GAUGE GROUP 4 HOOP · NTSB MATERIALS LAB 24-012, FIGS. 29–31, P. 7" labels={['NTSB DATA · REDRAWN']} lean={3} />
			<Replot m={m} z={z} show={show} hi={hi} band={band} fit={fit} event={event} box={BOX} />
			{/* the right-hand column */}
			<div style={{position: 'absolute', left: R.x, top: R.y, width: R.w}}>
				<div style={{opacity: 1 - lead(f, wf(123, 'n'), 10), ...T(30, {}), lineHeight: 1.55}}>
					<Wd f={f} at={wf(121, 'every')} lightAt={wf(121, 'shape')} tone={colors.amber}>EVERY DIVE: ITS OWN SHAPE,</Wd>
					<br />
					<Wd f={f} at={wf(121, 'pace')} tone={colors.amber}>ITS OWN PACE,</Wd>
					<br />
					<Wd f={f} at={wf(121, 'stops')} tone={colors.amber}>ITS OWN STOPS</Wd>
					<br />
					<br />
					<Wd f={f} at={wf(122, 'laid')} lightAt={wf(122, 'side')}>SIDE BY SIDE: </Wd>
					<Wd f={f} at={wf(122, 'dives')}>THE DIVES: </Wd><Wd f={f} at={wf(122, 'hard')} lightAt={wf(122, 'compare')} tone={colors.red}>HARD TO COMPARE</Wd>
				</div>
				<div style={{position: 'absolute', top: 0, opacity: vis(f, wf(123, 'n'), wf(125, 'dive') - 6), ...T(30, {}), lineHeight: 1.55}}>
					<Chip text="THE NTSB" tone={colors.cyan} size={30} />
					<div style={{marginTop: 14}}>
						<Wd f={f} at={wf(123, 'more')} lightAt={wf(123, 'appropriate')}>A MORE APPROPRIATE WAY: </Wd>
						<Wd f={f} at={wf(123, 'plot')} lightAt={wf(123, 'strain')}>STRAIN </Wd>
						<Wd f={f} at={wf(123, 'against')} lightAt={wf(123, 'depth')} tone={colors.cyan} bold>AGAINST DEPTH</Wd>
						<br />
						<Wd f={f} at={wf(123, 'because')}>BECAUSE </Wd>
						<Wd f={f} at={wf(123, 'depth', 1)} tone={colors.cyan}>DEPTH </Wd>
						<Wd f={f} at={wf(123, 'sets')} lightAt={wf(123, 'pressure')} tone={colors.cyan}>SETS THE PRESSURE</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(124, 'same')} lightAt={wf(124, 'data')} tone={colors.amber} bold>THE SAME DATA</Wd>
						<Wd f={f} at={wf(124, 'against')} lightAt={wf(124, 'depth')} tone={colors.cyan} bold> → DEPTH</Wd>
					</div>
				</div>
				{/* the dives, named on their words, then their slopes */}
				<div style={{position: 'absolute', top: 0, opacity: lead(f, wf(125, 'dive'), 10)}}>
					<div style={{...T(26, {color: colors.ink, letterSpacing: 2}), opacity: lead(f, wf(131, 'number'), 8)}}>
						SLOPE, 15–150 M · <span style={lit(f, wf(131, 'millivolt'), colors.cyan, colors.ink)}>M PER mV</span>
					</div>
					{slopes.map(([d, v, at], i) => {
						const named = [wf(125, 'seventy-five'), wf(126, 'eighty'), wf(127, 'eighty-one'), wf(128, 'eighty-two'), wf(129, 'eighty-three')][i];
						const k = lead(f, at, 8);
						return (
							<div key={d} style={{marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 18, opacity: lead(f, named, 10)}}>
								<span style={{...T(34, {color: DIVE_TONE[d], fontWeight: 700}), width: 170, display: 'inline-block', transform: `scale(${bump(f, fps, named + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 50%'}}>DIVE {d}</span>
								<span style={{...T(28, {color: colors.ink}), width: 230}}>
									{i === 0 ? (f >= wf(125, 'straight') ? 'STRAIGHT' : '') : i === 1 ? (f >= wf(126, 'end') ? 'STRAIGHT · EVENT AT END' : f >= wf(126, 'straight') ? 'STRAIGHT' : '') : f >= wf(130, 'bends') ? 'BENDS AWAY' : ''}
								</span>
								<span style={{...T(40, {color: i < 2 ? colors.cyan : colors.red, fontWeight: 700}), opacity: Math.max(k, lead(f, v[0][1], 6)), display: 'inline-block', transform: `scale(${bump(f, fps, at + LAND, 0.1).toFixed(4)})`}}>{v.map(([c, t], j) => <span key={j} style={{opacity: f >= t - 3 ? 1 : 0}}>{c}</span>)}</span>
							</div>
						);
					})}
					<div style={{marginTop: 22, ...T(28, {}), opacity: lead(f, wf(132, 'before'), 8)}}>
						<Wd f={f} at={wf(132, 'before')} tone={colors.cyan}>BEFORE THE EVENT · </Wd>
						<Wd f={f} at={wf(133, 'after')} tone={colors.red}>AFTER IT</Wd>
					</div>
					<div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.4, opacity: lead(f, wf(134, 'same'), 8)}}>
						<Wd f={f} at={wf(134, 'gauge')}>SAME GAUGE · </Wd>
						<Wd f={f} at={wf(134, 'hull')}>SAME HULL · </Wd>
						<Wd f={f} at={wf(134, 'sea')}>SAME SEA</Wd>
					</div>
					<div style={{marginTop: 22, display: 'flex', gap: 16, alignItems: 'baseline', opacity: lead(f, wf(135, 'response'), 8)}}>
						<Wd f={f} at={wf(135, 'response')} lightAt={wf(135, 'changed')} style={T(28, {})}>RESPONSE CHANGED</Wd>
						<span style={{...T(64, {color: f >= wf(135, 'quarters') + LAND ? colors.red : colors.sub, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(135, 'quarters') + LAND).toFixed(4)})`}}>{f >= wf(135, 'three') - 14 ? `≈ +${pct}%` : ''}</span>
					</div>
				</div>
			</div>
			{/* the turn's caption over the chart */}
			<div style={{position: 'absolute', left: 290, top: 140, ...T(30, {}), opacity: lead(f, wf(130, 'first'), 8) * (1 - lead(f, wf(131, 'fitted'), 10))}}>
				<Wd f={f} at={wf(130, 'first')} lightAt={wf(130, 'hundred')} tone={colors.amber}>THE FIRST 500 M: </Wd>
				<Wd f={f} at={wf(130, 'every')} lightAt={wf(130, 'one')} tone={colors.red}>EVERY ONE OF THEM </Wd>
				<Wd f={f} at={wf(130, 'bends')} lightAt={wf(130, 'away')} tone={colors.red} bold>BENDS AWAY</Wd>
			</div>
			<div style={{position: 'absolute', left: 290, top: 140, width: 960, ...T(28, {}), lineHeight: 1.45, opacity: lead(f, wf(131, 'fitted'), 8) * (1 - lead(f, wf(132, 'before'), 10))}}>
				<Wd f={f} at={wf(131, 'n')} tone={colors.cyan}>THE NTSB: </Wd><Wd f={f} at={wf(131, 'fitted')} lightAt={wf(131, 'line')} tone={colors.cyan}>A LINE FITTED </Wd>
				<Wd f={f} at={wf(131, 'shallowest')} lightAt={wf(131, 'stretch')}>TO THE SHALLOWEST STRETCH:</Wd>
				<br />
				<Wd f={f} at={wf(131, 'fifteen')} tone={colors.cyan} bold>15–</Wd><Wd f={f} at={wf(131, 'hundred')} tone={colors.cyan} bold>1</Wd><Wd f={f} at={wf(131, 'fifty')} tone={colors.cyan} bold>50 M</Wd>
				<Wd f={f} at={wf(131, 'metres', 1)} lightAt={wf(131, 'depth')}> · METRES OF DEPTH </Wd>
				<Wd f={f} at={wf(131, 'each')} lightAt={wf(131, 'gauge')}>PER mV FROM THE GAUGE</Wd>
			</div>
		</>
	);
};

// ── 2 · Could they have seen it? The hindsight test, as our reading (s135–s149) ─────────────────────────────────

const Hindsight: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const ours = vis(f, wf(138, 'timing') - 6, ef(144) + 20);
	const ledgerO = vis(f, sf(139) - 10, ef(144) + 20);
	const dates: {d: string; dive: string; at: number; tone: string; note: string; noteAt: number}[] = [
		{d: '15 JUL', dive: '80', at: wf(141, 'eighty'), tone: '#7dd3fc', note: 'BANG · JUMP', noteAt: wf(141, 'minutes')},
		{d: '19 JUL', dive: '81', at: wf(142, 'eighty-one'), tone: colors.amber, note: 'BEND IN THE DATA', noteAt: wf(142, 'bend')},
		{d: '22 JUL', dive: '82', at: wf(144, 'eighty-two'), tone: '#fb923c', note: 'DIVED', noteAt: wf(144, 'later')},
		{d: '23 JUL', dive: '83', at: wf(144, 'eighty-three'), tone: colors.red, note: 'DIVED', noteAt: wf(144, 'eighty-three')},
	];
	const X0 = 260;
	const DX = 380;
	const Y = 560;
	const window = lead(f, wf(144, 'before'), 14);
	return (
		<>
			<RecordPage set="roi" start={sf(136) - 14} end={ef(137) + 24} hl={[{key: 'sufficient', at: wf(137, 'data')}, {key: 'elapsed', at: wf(137, 'elapsed')}]} label="EXHIBIT" title="FINDINGS" pushTo={wf(137, 'found')} />
			<Note o={vis(f, sf(136) - 4, ef(137) + 14)}>
				<Wd f={f} at={wf(136, 'could')} lightAt={wf(136, 'seen')} tone={colors.amber}>COULD OCEANGATE HAVE SEEN THIS? · </Wd>
				<Wd f={f} at={wf(137, 'coast')} lightAt={wf(137, 'board')}>THE COAST GUARD BOARD: </Wd>
				<Wd f={f} at={wf(137, 'all')} lightAt={wf(137, 'data')} tone={colors.cyan}>ALL THE DATA </Wd><Wd f={f} at={wf(137, 'needed')} lightAt={wf(137, 'show')} tone={colors.cyan}>TO SHOW </Wd><Wd f={f} at={wf(137, "hull's")} lightAt={wf(137, 'changed')} tone={colors.cyan}>THE HULL HAD CHANGED · </Wd><Wd f={f} at={wf(137, 'analysing')} lightAt={wf(137, 'strain')}>STRAIN VS </Wd>
				<Wd f={f} at={wf(137, 'elapsed')} lightAt={wf(137, 'time')} tone={colors.red}>ELAPSED TIME </Wd>
				<Wd f={f} at={wf(137, 'failed')} lightAt={wf(137, 'reveal')} tone={colors.red}>FAILED TO REVEAL IT</Wd>
			</Note>
			{/* our reading, labelled for the whole passage */}
			<div style={{position: 'absolute', right: 96, top: 84, opacity: ours, transform: `scale(${bump(f, fps, wf(138, 'our') + LAND, 0.06).toFixed(4)})`, transformOrigin: '100% 50%'}}>
				<Chip text="OUR READING OF THE RECORD · NOT A FINDING" tone={colors.amber} size={30} />
			</div>
			<AbsoluteFill style={{opacity: vis(f, sf(138) - 10, sf(139) + 6)}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 440, textAlign: 'center', ...T(40, {}), fontWeight: 700}}>
					<Wd f={f} at={wf(138, 'timing')} tone={colors.ink}>THE TIMING THAT FOLLOWS: </Wd>
					<Wd f={f} at={wf(138, 'our')} lightAt={wf(138, 'reading')} tone={colors.amber}>OUR OWN READING</Wd>
				</div>
				<div style={{position: 'absolute', left: 0, right: 0, top: 510, textAlign: 'center', ...T(30, {})}}>
					<Wd f={f} at={wf(138, 'not')} lightAt={wf(138, 'finding')}>NOT A FINDING </Wd>
					<Wd f={f} at={wf(138, 'any')} lightAt={wf(138, 'report')}>OF ANY REPORT</Wd>
				</div>
			</AbsoluteFill>
			{ledgerO > 0 ? (
				<AbsoluteFill style={{opacity: ledgerO}}>
					<Mount x={120} y={150} w={1680} h={760} start={sf(139) - 10} end={ef(144) + 20} source="DIVE DATES: NTSB MIR-25-36 · DATA DOWNLOADED AFTER EACH DIVE: USCG MBI REPORT 5.7" labels={['OUR READING']} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 200, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(139, 'brooks')} lightAt={wf(139, 'right')}>BROOKS WAS RIGHT: </Wd>
						<Wd f={f} at={wf(139, 'no')} lightAt={wf(139, 'jump')} tone={colors.cyan}>NO NEW JUMP</Wd>
						<br />
						<Wd f={f} at={wf(140, 'changed')} lightAt={wf(140, 'slope')} tone={colors.amber} bold>WHAT CHANGED WAS THE SLOPE · </Wd>
						<Wd f={f} at={wf(140, 'against')} lightAt={wf(140, 'time')}>AGAINST TIME, </Wd>
						<Wd f={f} at={wf(140, 'change')} lightAt={wf(140, 'slope', 1)}>A SLOPE CHANGE IS </Wd><Wd f={f} at={wf(140, 'hard')} lightAt={wf(140, 'see')} tone={colors.red}>HARD TO SEE</Wd>
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
						<Wd f={f} at={wf(141, 'dive')} lightAt={wf(141, 'itself')}>DIVE 80 ITSELF: </Wd>
						<Wd f={f} at={wf(141, 'nothing')} lightAt={wf(141, 'until')} tone={colors.cyan}>NOTHING UNTIL </Wd>
						<Wd f={f} at={wf(141, 'last')} lightAt={wf(141, 'minutes')}>ITS LAST MINUTES · </Wd>
						<Wd f={f} at={wf(142, 'n')} lightAt={wf(142, 'plots')} tone={colors.amber}>NTSB PLOTS: </Wd><Wd f={f} at={wf(142, 'bend')} lightAt={wf(142, 'first')} tone={colors.amber}>BEND FIRST </Wd><Wd f={f} at={wf(142, 'appears')} lightAt={wf(142, 'eighty-one')} tone={colors.amber}>IN 81</Wd>
						<br />
						<Wd f={f} at={wf(143, 'data')} lightAt={wf(143, 'computer')} tone={colors.cyan}>THAT DATA: ON THE COMPANY'S COMPUTER </Wd>
						<Wd f={f} at={wf(143, 'after')} lightAt={wf(143, 'dive')} tone={colors.cyan}>AFTER DIVE 81</Wd>
						<br />
						<Wd f={f} at={wf(144, 'plotted')} lightAt={wf(144, 'depth')}>PLOTTED AGAINST DEPTH: </Wd>
						<Wd f={f} at={wf(144, 'shown')} lightAt={wf(144, 'bend')} tone={colors.amber}>THE BEND, </Wd>
						<Wd f={f} at={wf(144, 'before')} lightAt={wf(144, 'eighty-two')} tone={colors.amber} bold>BEFORE DIVE 82, </Wd>
						<Wd f={f} at={wf(144, 'three')} lightAt={wf(144, 'days')} tone={colors.amber}>3 DAYS LATER, </Wd>
						<Wd f={f} at={wf(144, 'before', 1)} lightAt={wf(144, 'eighty-three')} tone={colors.red} bold>AND BEFORE 83</Wd>
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
	const plot = vis(f, sf(145) - 10, wf(146, 'which') - 4);
	const show = {'75': 0, '80': 1, '81': 1, '82': 0, '83': 0};
	const hi = {'75': 0, '80': 0.6, '81': 0.6, '82': 0, '83': 0};
	const deep = lead(f, wf(146, 'deeper'), 14);
	const tsb = vis(f, sf(148) - 10, ef(150) + 30);
	const dbl = Math.round(rollTo(f, [{frame: wf(149, 'nearly') - 10, value: 0}, {frame: wf(149, 'double') + LAND, value: 98}]));
	return (
		<>
			{plot > 0 ? (
				<AbsoluteFill style={{opacity: plot}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(145) - 10} end={ef(146)} source="DIVES 80 AND 81, WHOLE DIVE · NTSB MATERIALS LAB 24-012, FIG. 30" labels={['NTSB DATA · REDRAWN']} lean={3} />
					<Replot m={1} z={0} show={show} hi={hi} deep={deep} box={BOX} />
					<div style={{position: 'absolute', left: 1310, top: 160, width: 480, ...T(32, {}), lineHeight: 1.55}}>
						<Wd f={f} at={wf(145, 'not')} lightAt={wf(145, 'faulty')} tone={colors.cyan}>NOT A FAULTY </Wd>
						<Wd f={f} at={wf(145, 'gauge')} tone={colors.cyan}>GAUGE</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(146, 'deeper')} lightAt={wf(146, 'down')}>DEEPER DOWN: </Wd>
						<Wd f={f} at={wf(146, 'curves')} lightAt={wf(146, 'match')} tone={colors.cyan} bold>THE CURVES STILL MATCH</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={wf(146, 'which') - 16} end={ef(147) + 24} hl={[{key: 'gages', at: wf(146, 'gauges')}]} label="EXHIBIT" title="FOOTNOTE 42" pushTo={wf(146, 'gauges') + 10} />
			<Note o={vis(f, wf(146, 'which') - 4, ef(147) + 14)} tone={colors.red}>
				<Wd f={f} at={wf(146, 'n')} lightAt={wf(146, 'said')} tone={colors.cyan}>NTSB: </Wd>
				<Wd f={f} at={wf(146, 'gauges')} lightAt={wf(146, 'changed')}>THE GAUGES HAD NOT CHANGED · </Wd>
				<Wd f={f} at={wf(147, 'hull')} lightAt={wf(147, 'had')} tone={colors.red} bold>THE HULL HAD</Wd>
			</Note>
			{tsb > 0 ? (
				<AbsoluteFill style={{opacity: tsb}}>
					<Card x={300} y={180} w={1320} o={1} accent={colors.cyan} style={{padding: '30px 40px'}}>
						<Chip text="TSB CANADA · M23A0169" tone={colors.ink} size={30} />
						<div style={{marginTop: 14, ...T(30, {}), whiteSpace: 'nowrap'}}>
							<Wd f={f} at={wf(148, "canada's")} lightAt={wf(148, 'investigators')}>CANADA'S INVESTIGATORS, </Wd>
							<Wd f={f} at={wf(148, 'later')}>LATER: </Wd>
							<Wd f={f} at={wf(148, 'plotted')} lightAt={wf(148, 'strain')} tone={colors.cyan}>STRAIN </Wd><Wd f={f} at={wf(148, 'against')} lightAt={wf(148, 'depth')} tone={colors.cyan}>AGAINST DEPTH, </Wd>
							<Wd f={f} at={wf(148, 'own')} lightAt={wf(148, 'way')} tone={colors.cyan}>THEIR OWN WAY</Wd>
						</div>
						<div style={{marginTop: 12, ...T(30, {}), whiteSpace: 'nowrap'}}>
							<Wd f={f} at={wf(148, 'measuring')} lightAt={wf(148, 'dive')} tone={colors.cyan} bold>EACH DIVE </Wd><Wd f={f} at={wf(148, 'against', 1)} lightAt={wf(148, 'itself')} tone={colors.cyan} bold>MEASURED AGAINST ITSELF</Wd>
						</div>
						<div style={{marginTop: 26, display: 'flex', gap: 22, alignItems: 'baseline', whiteSpace: 'nowrap'}}>
							<DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(149, 'nineteenth')} monthWord={wf(149, 'july')} fromDay={15} size={32} />
							<Wd f={f} at={wf(149, 'one')} lightAt={wf(149, 'gauge')} style={T(30, {})}>ONE GAUGE · </Wd><Wd f={f} at={wf(149, 'top')} lightAt={wf(149, 'hull')} style={T(30, {})}>TOP OF THE HULL · </Wd>
							<span style={{...T(30, {}), whiteSpace: 'nowrap'}}>
								<Wd f={f} at={wf(149, 'slope')} tone={colors.amber}>SLOPE </Wd><Wd f={f} at={wf(149, 'ten')} tone={colors.amber} bold>10</Wd><Wd f={f} at={wf(149, 'three')} lightAt={wf(149, 'metres')} tone={colors.amber} bold>–300 M</Wd>
							</span>
						</div>
						<div style={{marginTop: 14, display: 'flex', gap: 22, alignItems: 'baseline'}}>
							<span style={{...T(80, {color: f >= wf(149, 'double') + LAND ? colors.red : colors.sub, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(149, 'double') + LAND).toFixed(4)})`}}>{f >= wf(149, 'nearly') - 10 ? `+${dbl}%` : ''}</span>
							<Wd f={f} at={wf(149, 'double')} style={T(30, {})} tone={colors.red}>NEARLY DOUBLE </Wd><Wd f={f} at={wf(149, 'its')} lightAt={wf(149, 'dive')} style={T(30, {})} tone={colors.red}>ITS SLOPE FOR THE WHOLE DIVE</Wd>
						</div>
						<div style={{marginTop: 26, display: 'flex', gap: 22, alignItems: 'baseline'}}>
							<Wd f={f} at={wf(150, 'august')} lightAt={wf(150, 'twenty-one')} tone={colors.amber} bold style={T(32, {})}>05 AUG 2021</Wd>
							<Wd f={f} at={wf(150, 'smaller')} lightAt={wf(150, 'bend')} style={T(30, {})} tone={colors.amber}>A SMALLER BEND · </Wd>
							<Wd f={f} at={wf(150, 'year')} lightAt={wf(150, 'earlier')} style={T(30, {})}>A YEAR EARLIER</Wd>
						</div>
						<div style={{marginTop: 26, ...T(30, {})}}>
							<Wd f={f} at={wf(150, 'could')} lightAt={wf(150, 'determine')} tone={colors.ink}>COULD NOT DETERMINE </Wd>
							<Wd f={f} at={wf(150, 'whether')} lightAt={wf(150, 'bang')}>WHETHER THE BANG </Wd>
							<Wd f={f} at={wf(150, 'caused')} lightAt={wf(150, 'change')}>CAUSED THE CHANGE</Wd>
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
	const q = vis(f, sf(151) - 8, ef(151) + 14);
	const wall = vis(f, sf(153) - 10, ef(158) + 20);
	// pressure: light near the surface, heavy at depth; the separated layer flexes under light, closes under heavy
	const deep = ramp(f, wf(154, 'deeper') - 6, wf(154, 'down') + 20);
	const flex = lead(f, wf(153, 'move'), 14) * (1 - deep);
	const t = (f % 90) / 90;
	const wob = Math.sin(t * Math.PI * 2) * 14 * flex;
	const L = 300;
	const W = 1320;
	const top = 330;
	const lh = 44;
	const july = vis(f, sf(155) - 6, ef(158) + 20);
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 60, color: colors.ink}}>
					<Wd f={f} at={wf(151, 'why')} base={colors.ink}>Why would a </Wd>
					<Wd f={f} at={wf(151, 'damaged')} lightAt={wf(151, 'hull')} tone={colors.red}>damaged hull </Wd>
					<Wd f={f} at={wf(151, 'bend')} tone={colors.amber}>bend </Wd>
					<Wd f={f} at={wf(151, 'only')} lightAt={wf(151, 'surface')} base={colors.ink}>only near the surface?</Wd>
				</div>
			</AbsoluteFill>
			<RecordPage set="mir" start={sf(152) - 14} end={ef(152) + 20} hl={[{key: 'voidsfig', at: wf(152, 'voids')}]} label="EXHIBIT" title="FIGURE 17 · LAYERS 1 AND 2" focus={{x: 200, y: 360, w: 1480, h: 820}} pushTo={wf(152, 'bond')} />
			<Note o={vis(f, sf(152), ef(152) + 10)}>
				<Wd f={f} at={wf(152, 'found')} tone={colors.cyan}>NTSB: </Wd>
				<Wd f={f} at={wf(152, 'long')} lightAt={wf(152, 'voids')} tone={colors.red}>LONG VOIDS IN THE BOND · </Wd>
				<Wd f={f} at={wf(152, 'first')} lightAt={wf(152, 'second')} tone={colors.amber}>LAYERS 1–2 </Wd><Wd f={f} at={wf(152, 'layers')} tone={colors.amber}>· </Wd>
				<Wd f={f} at={wf(152, 'third')} lightAt={wf(152, 'fourth')} tone={colors.amber}>LAYERS 3–4</Wd>
			</Note>
			{wall > 0 ? (
				<AbsoluteFill style={{opacity: wall}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(153) - 10} end={ef(158) + 20} source="THE CYLINDER'S END · AS THE NTSB DESCRIBED IT, MIR-25-36 P. 51" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* outside water pressure: arrows, light then heavy */}
						{Array.from({length: 9}).map((_, i) => (
							<g key={i} opacity={lead(f, wf(153, 'light'), 10)}>
								<line x1={L + 80 + i * 145} x2={L + 80 + i * 145} y1={top - 120} y2={top - 30 - 50 * deep} stroke={colors.cyan} strokeWidth={2 + 4 * deep} />
								<polygon points={`${L + 72 + i * 145},${top - 40 - 50 * deep} ${L + 88 + i * 145},${top - 40 - 50 * deep} ${L + 80 + i * 145},${top - 22 - 50 * deep}`} fill={colors.cyan} />
							</g>
						))}
						<text x={L} y={top - 140} style={T(30, {fill: deep > 0.5 ? colors.cyan : colors.ink, fontWeight: 700})}>{deep > 0.5 ? 'HEAVY PRESSURE · DEEPER DOWN' : 'LIGHT PRESSURE · NEAR THE SURFACE'}</text>
						{/* five layers; layer 1 separated at the end (left), the gap opens on 'separates' */}
						{Array.from({length: 5}).map((_, i) => {
							const sep = i === 0 ? lead(f, wf(153, 'separates'), 14) * (1 - 0.8 * deep) : 0;
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
							<g key={j} opacity={lead(f, wf(153, 'layer'), 10)}>
								{Array.from({length: 6}).map((_, k) => (
									<ellipse key={k} cx={L + 70 + k * 80} cy={top + j * (lh + 6) + 4} rx={26} ry={5} fill={colors.void} stroke={colors.red} strokeWidth={2} />
								))}
							</g>
						))}
						<text x={L} y={top + 5 * (lh + 6) + 34} style={T(26, {fill: colors.ink})}>← THE CYLINDER'S END</text>
						<text x={L + W} y={top + 5 * (lh + 6) + 34} textAnchor="end" style={T(26, {fill: colors.ink})}>TOWARD THE MIDDLE →</text>
					</svg>
					<div style={{position: 'absolute', left: L, top: 690, width: 1320, ...T(32, {}), lineHeight: 1.5, opacity: 1 - lead(f, wf(155, 'titan'), 12)}}>
						<Wd f={f} at={wf(153, 'where')} lightAt={wf(153, 'separates')} tone={colors.amber}>WHERE A LAYER SEPARATES </Wd>
						<Wd f={f} at={wf(153, 'end')} lightAt={wf(153, 'cylinder')}>AT THE CYLINDER'S END, </Wd>
						<Wd f={f} at={wf(153, 'move')} lightAt={wf(153, 'own')} tone={colors.amber} bold>IT CAN MOVE ON ITS OWN </Wd>
						<Wd f={f} at={wf(153, 'light')} lightAt={wf(153, 'pressure')}>UNDER LIGHT PRESSURE</Wd>
						<br />
						<Wd f={f} at={wf(154, 'deeper')} lightAt={wf(154, 'down')} tone={colors.cyan}>DEEPER DOWN: </Wd>
						<Wd f={f} at={wf(154, 'found')} lightAt={wf(154, 'layers')} tone={colors.cyan}>THE LAYERS </Wd><Wd f={f} at={wf(154, 'respond')} lightAt={wf(154, 'intact')} tone={colors.cyan} bold>RESPOND LIKE THE INTACT HULL</Wd>
					</div>
					{july > 0 ? (
						<Card x={L} y={640} w={1320} o={july} accent={colors.amber} style={{padding: '16px 24px'}}>
							<div style={T(28, {})}>
								<Wd f={f} at={wf(155, 'three')} lightAt={wf(155, 'dives')} tone={colors.amber} bold>3 MORE DIVES · </Wd><Wd f={f} at={wf(155, 'july')} tone={colors.amber} bold>JULY 2022</Wd>
							</div>
							<div style={{marginTop: 8, ...T(28, {}), lineHeight: 1.45}}>
								<Wd f={f} at={wf(156, 'two')}>TWO: </Wd><Wd f={f} at={wf(156, 'eighty-one')} tone={colors.amber}>81 </Wd>
								<Wd f={f} at={wf(156, 'eighty-two')} tone={colors.amber}>· 82 </Wd>
								<Wd f={f} at={wf(156, 'reached')} lightAt={wf(156, 'titanic')} tone={colors.cyan}>REACHED THE TITANIC</Wd>
								<br />
								<Wd f={f} at={wf(156, 'which')} lightAt={wf(156, 'said')} tone={colors.cyan}>NTSB: </Wd><Wd f={f} at={wf(156, 'first')} lightAt={wf(156, 'damage')}>FIRST DAMAGE </Wd>
								<Wd f={f} at={wf(156, 'not')} lightAt={wf(156, 'implode')} tone={colors.ink}>NOT ENOUGH TO IMPLODE</Wd>
								<br />
								<Wd f={f} at={wf(157, 'not')} lightAt={wf(157, 'wall')} tone={colors.amber}>NOT A CRACK THROUGH THE WALL</Wd>
								<br />
								<Wd f={f} at={wf(158, 'no')} lightAt={wf(158, 'been')} tone={colors.red} bold>NO LONGER WHAT IT HAD BEEN</Wd>
							</div>
						</Card>
					) : null}
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(159) - 16} end={hold(159).from + hold(159).frames + 10} hl={[{key: 'unable', at: wf(159, 'unable')}, {key: 'removed', at: wf(159, 'immediately')}]} label="FINDING" title="CONCLUSION" pushTo={wf(159, 'flawed')} />
			<Note o={vis(f, sf(159), hold(159).from + hold(159).frames)} tone={colors.red}>
				<Wd f={f} at={wf(159, 'finding')} tone={colors.cyan}>NTSB: </Wd><Wd f={f} at={wf(159, 'because')} lightAt={wf(159, 'analysis')} tone={colors.cyan}>ANALYSIS </Wd><Wd f={f} at={wf(159, 'flawed')} tone={colors.cyan}>FLAWED · </Wd><Wd f={f} at={wf(159, 'oceangate')}>OCEANGATE </Wd>
				<Wd f={f} at={wf(159, 'unable')} lightAt={wf(159, 'identify')}>UNABLE TO IDENTIFY </Wd>
				<Wd f={f} at={wf(159, 'titan')} lightAt={wf(159, 'damaged')} tone={colors.red}>DAMAGE </Wd><Wd f={f} at={wf(159, 'after')} lightAt={wf(159, 'eighty')} tone={colors.red}>AFTER DIVE 80 · </Wd>
				<Wd f={f} at={wf(159, 'needed')} tone={colors.red} bold>REMOVE </Wd><Wd f={f} at={wf(159, 'immediately')} lightAt={wf(159, 'service')} tone={colors.red} bold>FROM SERVICE, IMMEDIATELY</Wd>
			</Note>
		</>
	);
};

export const act3b: SceneDef[] = [
	{
		id: 'a3-replot',
		from: sf(121) - 14,
		to: ef(135) + 44,
		C: RePlot,
		cues: [
			{frame: wf(124, 'depth'), sfx: 'whoosh', gainDb: -24},
			{frame: wf(127, 'eighty-one'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(128, 'eighty-two'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(129, 'eighty-three'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(133, 'six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(135, 'quarters'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-hindsight',
		from: sf(136) - 16,
		to: ef(144) + 30,
		C: Hindsight,
		cues: [
			{frame: wf(137, 'elapsed') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(138, 'our'), sfx: 'stamp', gainDb: -26},
			{frame: wf(142, 'eighty-one'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(144, 'eighty-two'), sfx: 'relay_click', gainDb: -24},
		],
	},
	{
		id: 'a3-gauges',
		from: sf(145) - 14,
		to: ef(150) + 34,
		C: Gauges,
		cues: [
			{frame: wf(146, 'gauges') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(147, 'had'), sfx: 'stamp', gainDb: -24},
			{frame: wf(149, 'double'), sfx: 'quartz_tick', gainDb: -22},
		],
	},
	{
		id: 'a3-mechanism',
		from: sf(151) - 12,
		to: hold(159).from + hold(159).frames + 14,
		C: Mechanism,
		cues: [
			{frame: wf(152, 'voids'), sfx: 'paper_slide', gainDb: -24},
			{frame: wf(153, 'separates'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(159, 'immediately') - 15, sfx: 'highlighter', gainDb: -20},
		],
	},
];

