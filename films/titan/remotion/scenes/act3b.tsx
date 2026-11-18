import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {RecordPage} from '../docs';
import {media, Mount, Photo, useFilmFrame} from '../kit';
import {beatScale, camAt, dolly, Hull3D} from '../hull3d';
import {Chip, lit, T, vis, Wd} from '../parts';
import {DIVE_TONE, ramp, Replot} from '../replot';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part B (sentences 120–158): the re-plot (signature 2), the hindsight test (our reading,
// labelled), the mechanism. Choreography: scenes/choreography/act3b.md (generated from this file).

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

// ── 2 · Could they have seen it? (s136–s144): the board's finding on its page; our reading, labelled, on the hull ──

const Hindsight: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(136, 'seen'), wf(137, 'found'), wf(137, 'oceangate'), wf(137, 'the', 1), wf(137, 'needed'), wf(137, "hull's"), wf(137, 'changed'), wf(137, 'analysing'), wf(137, 'against'), wf(137, 'time'), wf(137, 'reveal'), wf(138, 'follows'), wf(138, 'own'), wf(138, 'record'), wf(138, 'finding'), wf(138, 'report'), wf(139, 'right'), wf(139, 'no'), wf(140, 'changed'), wf(140, 'slope'), wf(140, 'against'), wf(140, 'time'), wf(140, 'change'), wf(140, 'slope', 1), wf(140, 'hard'), wf(141, 'eighty'), wf(141, 'itself'), wf(141, 'nothing'), wf(141, 'last'), wf(142, "b's"), wf(142, 'plots'), wf(142, 'bend'), wf(142, 'first'), wf(142, 'appears'), wf(142, 'eighty-one'), wf(143, "company's"), wf(143, 'computer'), wf(143, 'after'), wf(144, 'depth'), wf(144, 'shown'), wf(144, 'before'), wf(144, 'eighty-two'), wf(144, 'three'), wf(144, 'days'), wf(144, 'later'), wf(144, 'before', 1), wf(144, 'eighty-three')];
	const ours = vis(f, wf(138, 'timing') - 6, ef(144) + 20);
	const panels = vis(f, sf(139) - 10, ef(141) + 10, 12, 12);
	const strip = vis(f, sf(142) - 10, ef(144) + 20, 12, 12);
	const dates: {d: string; dive: string; at: number; tone: string; note: string; noteAt: number}[] = [
		{d: '15 JUL', dive: '80', at: wf(142, 'n') - 10, tone: '#7dd3fc', note: 'BANG · JUMP', noteAt: wf(142, 'n') - 10},
		{d: '19 JUL', dive: '81', at: wf(142, 'eighty-one'), tone: colors.amber, note: 'BEND IN THE DATA', noteAt: wf(142, 'bend')},
		{d: '22 JUL', dive: '82', at: wf(144, 'eighty-two'), tone: '#fb923c', note: 'DIVED', noteAt: wf(144, 'later')},
		{d: '23 JUL', dive: '83', at: wf(144, 'eighty-three'), tone: colors.red, note: 'DIVED', noteAt: wf(144, 'eighty-three')},
	];
	const window = lead(f, wf(144, 'before'), 14);
	const cam = dolly(camAt(f, [
		{f: sf(138) - 10, cam: {pos: [22, 13, 22], look: [0, -0.4, 1], fov: 30}},
		{f: ef(144) + 20, cam: {pos: [14, 13, 16], look: [0, 0.6, 2.6], fov: 30}},
	]), f, BEATS);
	const X0 = 300;
	const DX = 400;
	const Y = 820;
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(138) - 12, ef(144) + 20)}}>
				<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={lead(f, wf(141, 'eighty'), 10)} sensors={0.2} interfaces={0.8 * lead(f, wf(142, 'bend'), 10)} bench={1} />
			</AbsoluteFill>
			<RecordPage set="roi" start={sf(136) - 14} end={ef(137) + 24} hl={[{key: 'sufficient', at: wf(137, 'data')}, {key: 'elapsed', at: wf(137, 'elapsed')}]} label="EXHIBIT" title="FINDINGS" pushTo={wf(137, 'elapsed')} />
			<div style={{position: 'absolute', right: 96, top: 84, opacity: ours, transform: `scale(${bump(f, fps, wf(138, 'our') + LAND, 0.06).toFixed(4)})`, transformOrigin: '100% 50%'}}>
				<Chip text="OUR READING OF THE RECORD · NOT A FINDING" tone={colors.amber} size={36} />
			</div>
			{panels > 0 ? (
				<AbsoluteFill style={{opacity: panels}}>
					<Mount x={160} y={170} w={1600} h={640} start={sf(139) - 10} end={ef(141) + 10} source="DIVES 75, 80, 81 IN RECORDED ORDER · OUR RE-PLOT OF NTSB 24-012 FIGS. 29–31" labels={['RECONSTRUCTION']} lean={2}>
						<svg width={1600} height={580} style={{position: 'absolute', left: 0, top: 0}}>
							<Replot m={0} z={0} show={{'75': 1, '80': 1, '81': 1, '82': 0, '83': 0}} hi={{'75': 0, '80': lead(f, wf(141, 'eighty'), 8), '81': lead(f, wf(140, 'slope'), 8), '82': 0, '83': 0}} box={{x: 0, y: 0, w: 1600, h: 580}} />
						</svg>
					</Mount>
				</AbsoluteFill>
			) : null}
			{strip > 0 ? (
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: strip}}>
					<rect x={X0 - 120} y={Y - 110} width={DX * 3 + 240} height={230} fill="rgba(10,13,18,0.85)" stroke={colors.border} strokeWidth={1} />
					<line x1={X0 - 40} x2={X0 + DX * 3 + 40} y1={Y} y2={Y} stroke={colors.sub} strokeWidth={2} />
					<rect x={X0 + DX * 1} y={Y - 90} width={(DX * 2) * window} height={180} fill={colors.amber} opacity={0.14 * window} />
					{dates.map((d, i) => {
						const k = lead(f, d.at, 12);
						const x = X0 + DX * i;
						return (
							<g key={d.dive} opacity={Math.max(0.3, k)}>
								<circle cx={x} cy={Y} r={18 * bump(f, fps, d.at + LAND, 0.2)} fill={k > 0.5 ? d.tone : colors.card} stroke={d.tone} strokeWidth={3} />
								<text x={x} y={Y - 36} textAnchor="middle" style={T(30, {fill: colors.ink, fontWeight: 700})}>DIVE {d.dive}</text>
								<text x={x} y={Y + 52} textAnchor="middle" style={T(28, {fill: colors.ink})}>{d.d}</text>
								<text x={x} y={Y + 88} textAnchor="middle" style={T(26, lit(f, d.noteAt, d.tone))} opacity={lead(f, d.noteAt, 8)}>{d.note}</text>
							</g>
						);
					})}
				</svg>
			) : null}
		</>
	);
};

// ── 3 · Not a faulty gauge (s145–s147); Canada's measure (s148–s150): where each investigator looked, on the hull ──

const Gauges: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const plot = vis(f, sf(145) - 10, wf(146, 'which') - 4);
	const show = {'75': 0, '80': 1, '81': 1, '82': 0, '83': 0};
	const hi = {'75': 0, '80': 0.6, '81': 0.6, '82': 0, '83': 0};
	const deep = lead(f, wf(146, 'deeper'), 14);
	const tsb = vis(f, sf(148) - 10, ef(150) + 30);
	const dbl = Math.round(rollTo(f, [{frame: wf(149, 'nearly') - 10, value: 0}, {frame: wf(149, 'double') + LAND, value: 98}]));
	const BEATS = [wf(145, 'faulty'), wf(146, 'curves'), wf(146, 'match'), wf(146, 'the', 1), wf(146, 'said'), wf(146, 'gauges'), wf(146, 'changed'), wf(147, 'hull'), wf(148, 'investigators'), wf(148, 'later'), wf(148, 'strain'), wf(148, 'depth'), wf(148, 'way'), wf(148, 'measuring'), wf(148, 'dive'), wf(148, 'itself'), wf(149, 'july'), wf(149, 'one'), wf(149, 'gauge'), wf(149, 'hull'), wf(149, 'slope'), wf(149, 'ten'), wf(149, 'to'), wf(149, 'three'), wf(149, 'hundred'), wf(149, 'metres'), wf(149, 'nearly'), wf(149, 'slope', 1), wf(149, 'dive'), wf(150, 'smaller'), wf(150, 'year'), wf(150, 'earlier'), wf(150, 'august'), wf(150, 'twenty'), wf(150, 'twenty-one'), wf(150, 'could'), wf(150, 'whether'), wf(150, 'caused')];
	const cam = dolly(camAt(f, [
		{f: sf(148) - 10, cam: {pos: [20, 14, 18], look: [0, 0.4, 1.8], fov: 30}},
		{f: wf(149, 'top'), cam: {pos: [12, 15, 10], look: [0, 1.4, 0.6], fov: 30}},
		{f: ef(150) + 30, cam: {pos: [16, 14, 14], look: [0, 0.8, 1.2], fov: 30}},
	]), f, BEATS);
	return (
		<>
			{plot > 0 ? (
				<AbsoluteFill style={{opacity: plot}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(145) - 10} end={ef(146)} source="DIVES 80 AND 81, WHOLE DIVE · NTSB MATERIALS LAB 24-012, FIG. 30" labels={['NTSB DATA · REDRAWN']} lean={3} />
					<Replot m={1} z={0} show={show} hi={hi} deep={deep} box={BOX} />
					<div style={{position: 'absolute', left: 1310, top: 160, display: 'flex', flexDirection: 'column', gap: 14}}>
						<div style={{opacity: lead(f, wf(145, 'faulty'), 8)}}><Chip text="NOT A FAULTY GAUGE · NTSB" tone={colors.cyan} size={30} /></div>
						<div style={{opacity: lead(f, wf(146, 'match'), 8), transform: `scale(${bump(f, fps, wf(146, 'match')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="DEEP END: THE CURVES MATCH" tone={colors.cyan} size={30} /></div>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={wf(146, 'which') - 16} end={ef(147) + 24} hl={[{key: 'gages', at: wf(146, 'gauges')}]} label="EXHIBIT" title="FOOTNOTE 42" pushTo={wf(146, 'gauges') + 10} />
			{tsb > 0 ? (
				<AbsoluteFill style={{opacity: tsb}}>
					<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.5 * lead(f, wf(148, 'own'), 10)} gTop={lead(f, wf(149, 'gauge'), 10)} sensors={0.15} interfaces={0} bench={1} />
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', width: 1640}}>
						<Chip text="TSB CANADA · M23A0169" tone={colors.ink} size={30} />
						{f >= wf(148, 'own') - 10 ? <Chip text="EACH DIVE AGAINST ITSELF" tone={colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(148, 'itself')).toFixed(4)})`}} /> : null}
						{f >= wf(149, 'nineteenth') - 10 ? <DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(149, 'nineteenth')} monthWord={wf(149, 'july')} fromDay={15} size={32} /> : null}
						{f >= wf(149, 'gauge') - 10 ? <Chip text="ONE GAUGE · CENTRE TOP · 10–300 M" tone={colors.amber} size={30} /> : null}
					</div>
					<div style={{position: 'absolute', right: 120, top: 200, textAlign: 'right', opacity: lead(f, wf(149, 'nearly'), 8)}}>
						<div style={{...T(120, {color: f >= wf(149, 'double') + LAND ? colors.red : colors.sub, fontWeight: 700}), transform: `scale(${bump(f, fps, wf(149, 'double') + LAND).toFixed(4)})`, transformOrigin: 'right center'}}>+{dbl}%</div>
						<div style={T(30, {color: colors.ink})}>VS THE WHOLE DIVE · TSB</div>
					</div>
					<div style={{position: 'absolute', right: 120, top: 420, opacity: lead(f, wf(150, 'august'), 8), display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end'}}>
						<Chip text="05 AUG 2021 · A SMALLER BEND" tone={colors.amber} size={30} style={{transform: `scale(${bump(f, fps, wf(150, 'smaller')).toFixed(4)})`}} />
						<div style={{opacity: lead(f, wf(150, 'determine'), 8)}}><Chip text="TSB: LINK TO THE BANG NOT DETERMINED" tone={colors.ink} size={28} /></div>
					</div>
					<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · AMBER: TSB'S GAUGE · CYAN: NTSB'S GAUGE GROUP 4</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 4 · Why only near the surface (s151–s159): the NTSB's photo of the voids; the separated layer; the wall changed ─

const Mechanism: React.FC = () => {
	const f = useFilmFrame();
	const fps0 = useVideoConfig().fps;
	const BEATS = [wf(151, 'hull'), wf(151, 'only'), wf(151, 'surface'), wf(152, 'found'), wf(152, 'voids'), wf(152, 'between'), wf(152, 'first'), wf(152, 'second'), wf(152, 'layers'), wf(152, 'between', 1), wf(152, 'third'), wf(152, 'fourth'), wf(153, 'separates'), wf(153, 'the', 1), wf(153, 'cylinder'), wf(153, 'move'), wf(153, 'under'), wf(154, 'found'), wf(154, 'layers'), wf(154, 'like'), wf(154, 'hull'), wf(155, 'three'), wf(155, 'more'), wf(155, 'july'), wf(156, 'two'), wf(156, 'eighty-one'), wf(156, 'eighty-two'), wf(156, 'still'), wf(156, 'titanic'), wf(156, 'the', 1), wf(156, 'said'), wf(156, 'first'), wf(156, 'damage'), wf(156, 'enough'), wf(156, 'implode'), wf(157, 'delamination'), wf(157, 'is'), wf(157, 'through'), wf(158, 'wall'), wf(158, 'longer'), wf(158, 'what'), wf(159, 'finding'), wf(159, 'because'), wf(159, 'analysis'), wf(159, 'flawed'), wf(159, 'oceangate'), wf(159, 'unable'), wf(159, 'identify'), wf(159, 'titan'), wf(159, 'damaged'), wf(159, 'dive'), wf(159, 'eighty'), wf(159, 'needed'), wf(159, 'immediately'), wf(159, 'removed'), wf(159, 'service')];
	const bs = beatScale(f, BEATS, 0.018);
	const q = vis(f, sf(151) - 8, ef(151) + 14);
	const wall = vis(f, sf(153) - 10, ef(154) + 16);
	const deep = ramp(f, wf(154, 'deeper') - 6, wf(154, 'down') + 20);
	const flex = lead(f, wf(153, 'move'), 14) * (1 - deep);
	const t = (f % 90) / 90;
	const wob = Math.sin(t * Math.PI * 2) * 14 * flex;
	const L = 300;
	const W = 1320;
	const top = 380;
	const lh = 44;
	const july = vis(f, sf(155) - 6, ef(158) + 20);
	const cam = dolly(camAt(f, [
		{f: sf(155) - 6, cam: {pos: [20, 13, 20], look: [0, -0.2, 1.6], fov: 30}},
		{f: wf(157, 'crack'), cam: {pos: [8, 12, 11], look: [0, 1.6, 3.6], fov: 28}},
		{f: ef(158) + 20, cam: {pos: [6, 11, 9.5], look: [0, 1.9, 4], fov: 27}},
	]), f, BEATS);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`}}>
			{q > 0 ? (
				<AbsoluteFill style={{opacity: q}}>
					<Photo src={media('photos/voids_layers.jpg')} iw={1431} ih={626} start={sf(151) - 8} end={ef(151) + 14} source="LAYERS 1 AND 2, WITH VOIDS IN THE ADHESIVE · NTSB MIR-25-36 FIG. 17" from={{x: 0, y: 0, w: 1431, h: 626}} to={{x: 0, y: 280, w: 900, h: 340}} box={{x: 150, y: 180, w: 1620, h: 720}} labels={['NTSB PHOTO']} />
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(152) - 14} end={ef(152) + 20} hl={[{key: 'voidsfig', at: wf(152, 'voids')}]} label="EXHIBIT" title="FIGURE 17 · LAYERS 1 AND 2" focus={{x: 200, y: 360, w: 1470, h: 1100}} pushTo={wf(152, 'third')} />
			{wall > 0 ? (
				<AbsoluteFill style={{opacity: wall}}>
					<Mount x={120} y={100} w={1680} h={860} start={sf(153) - 10} end={ef(154) + 16} source="THE CYLINDER'S END · AS THE NTSB DESCRIBED IT, MIR-25-36 P. 51" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{Array.from({length: 9}).map((_, i) => (
							<g key={i} opacity={lead(f, wf(153, 'light'), 10)}>
								<line x1={L + 80 + i * 145} x2={L + 80 + i * 145} y1={top - 120} y2={top - 30 - 50 * deep} stroke={colors.cyan} strokeWidth={2 + 4 * deep} />
								<polygon points={`${L + 72 + i * 145},${top - 40 - 50 * deep} ${L + 88 + i * 145},${top - 40 - 50 * deep} ${L + 80 + i * 145},${top - 22 - 50 * deep}`} fill={colors.cyan} />
							</g>
						))}
						<text x={L} y={top - 150} style={T(30, {fill: deep > 0.5 ? colors.cyan : colors.ink, fontWeight: 700})}>{deep > 0.5 ? 'HEAVY PRESSURE · DEEPER DOWN' : 'LIGHT PRESSURE · NEAR THE SURFACE'}</text>
						{Array.from({length: 5}).map((_, i) => {
							const sep = i === 0 ? lead(f, wf(153, 'separates'), 14) * (1 - 0.8 * deep) : 0;
							const y = top + i * (lh + 6);
							const bend = i === 0 ? -(26 * sep) + wob : 0;
							return (
								<path key={i} d={`M ${L} ${y + bend} Q ${L + 260} ${y + bend * 0.4} ${L + 520} ${y} L ${L + W} ${y} L ${L + W} ${y + lh} L ${L + 520} ${y + lh} Q ${L + 260} ${y + lh + bend * 0.4} ${L} ${y + lh + bend} Z`} fill={colors.cyan} opacity={0.2 + 0.08 * (i % 2)} stroke={i === 0 && sep > 0.5 ? colors.amber : colors.cyan} strokeWidth={i === 0 && sep > 0.5 ? 3 : 1.5} />
							);
						})}
						{[1, 3].map((j) => (
							<g key={j} opacity={lead(f, wf(153, 'layer'), 10)}>
								{Array.from({length: 6}).map((_, k) => (
									<ellipse key={k} cx={L + 70 + k * 80} cy={top + j * (lh + 6) + 4} rx={26} ry={5} fill={colors.void} stroke={colors.red} strokeWidth={2} />
								))}
							</g>
						))}
						<text x={L} y={top + 5 * (lh + 6) + 40} style={T(28, {fill: colors.ink})}>← THE CYLINDER'S END</text>
						<text x={L + W} y={top + 5 * (lh + 6) + 40} textAnchor="end" style={T(28, {fill: colors.ink})}>TOWARD THE MIDDLE →</text>
						<text x={L} y={top + 5 * (lh + 6) + 100} style={T(30, {fill: colors.amber, fontWeight: 700})} opacity={lead(f, wf(153, 'separates'), 8) * (1 - deep)}>LAYER 1 SEPARATED: IT MOVES ON ITS OWN</text>
						<text x={L} y={top + 5 * (lh + 6) + 100} style={T(30, {fill: colors.cyan, fontWeight: 700})} opacity={deep}>DEEPER: LIKE THE INTACT HULL</text>
					</svg>
				</AbsoluteFill>
			) : null}
			{july > 0 ? (
				<AbsoluteFill style={{opacity: july}}>
					<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.6} sensors={0.2} interfaces={lead(f, wf(157, 'delamination'), 10)} bench={1} />
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', width: 1640}}>
						<Chip text="JULY 2022 · 3 MORE DIVES" tone={colors.amber} size={32} style={{transform: `scale(${bump(f, fps0, wf(155, 'three')).toFixed(4)})`}} />
						{f >= wf(156, 'eighty-one') - 10 ? <Chip text="81 · 82: THE TITANIC'S DEPTH" tone={colors.cyan} size={30} /> : null}
						{f >= wf(156, 'n') - 10 ? <Chip text="NTSB: FIRST DAMAGE NOT ENOUGH TO IMPLODE" tone={colors.ink} size={28} /> : null}
					</div>
					<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · AMBER: THE LAYER BONDS</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(159) - 16} end={hold(159).from + hold(159).frames + 10} hl={[{key: 'unable', at: wf(159, 'unable')}, {key: 'removed', at: wf(159, 'immediately')}]} label="FINDING" title="CONCLUSION" pushTo={wf(159, 'unable')} />
		</AbsoluteFill>
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

