import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {channel, colors} from '../../../../lib/remotion/brand';
import {ease, envelope, tween} from '../../../../lib/remotion/motion';
import {RecordDoc, ReportPage} from '../docs';
import {Camera} from '../engine3d';
import {BracketLock, bump, flash, LAND, lead, rollTo, STAGGER} from '../../../../lib/remotion/Kinetic';
import {ChunkQuote, KeyLine, litStyle, on, Part, WordLine} from '../beats';
import {Fade, Label, mono, Mount, sans, Stamp, useFilmFrame} from '../kit';
import {anchor, BoltId, defaultState, PlugState, PlugSvg} from '../PlugModel';
import {ef, FILM_FRAMES, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT V · THE VERDICT (rows 56–66), then the outro: the channel's name appears here and nowhere else.

const none: Record<BoltId, number> = {upperFwd: 0, upperAft: 0, lowerFwd: 0, lowerAft: 0};
const camOf = (f: number, keys: {f: number; yaw: number; pitch: number; dist: number; cx?: number}[]): Camera => {
	const fr = keys.map((k) => k.f);
	const g = (sel: (k: (typeof keys)[number]) => number) => interpolate(f, fr, keys.map(sel), {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	return {target: [0, 29, -2], yaw: g((k) => k.yaw), pitch: g((k) => k.pitch), dist: g((k) => k.dist), focal: 1250, cx: g((k) => k.cx ?? 820), cy: 500};
};

// ---------- the report and its probable cause (C51, C50): the record's own words, highlighted as they are read
const Verdict: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={1} start={sf(151) - 10} end={sf(153) + 6} hl={[{key: 'title_date', at: wf(151, 'twenty-fourth') - 10}, {key: 'title_block', at: wf(152, 'probable') - 15}]} label="EXHIBIT 11" title="ADOPTED 24 JUNE 2025" pushTo={sf(152)} pad={[100, 200]} />
			<ReportPage
				page={136}
				start={sf(153) - 8}
				end={sf(155) + 6}
				hl={[
					{key: 'pc_main', at: wf(153, 'failure') - 15, ats: [wf(153, 'failure') - 15, wf(153, 'manufacturing') - 15, wf(153, 'comply') - 15]},
					{key: 'pc_contrib', at: wf(154, 'contributing') - 15, ats: [wf(154, 'contributing') - 15, wf(154, 'surveillance') - 15]},
				]}
				label="PROBABLE CAUSE"
				title="3.2 PROBABLE CAUSE"
				pushTo={sf(153) + 40}
				pad={[100, 120]}
			/>
			<KeyLine f={f} fps={fps} start={sf(151) - 8} end={sf(152) - 4} x={72} y={950} parts={[
				{t: 'N', at: wf(151, 'n'), tone: colors.cyan, join: true},
				{t: 'T', at: wf(151, 't'), tone: colors.cyan, join: true},
				{t: 'S', at: wf(151, 's'), tone: colors.cyan, join: true},
				{t: 'B', at: wf(151, 'b'), tone: colors.cyan},
				{t: 'ADOPTED', at: wf(151, 'adopted')},
				{t: 'ITS FINAL REPORT', at: wf(151, 'report')},
				{t: '· 24', at: wf(151, 'twenty-fourth'), tone: colors.amber},
				{t: 'JUNE', at: wf(151, 'june'), tone: colors.amber},
				{t: '2025', at: wf(151, 'twenty-five'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(152) - 4} end={sf(153) - 4} x={72} y={950} parts={[
				{t: 'PROBABLE CAUSE', at: wf(152, 'probable'), tone: colors.amber},
				{t: 'NAMES', at: wf(152, 'names')},
				{t: 'A MANUFACTURER', at: wf(152, 'manufacturer'), tone: colors.amber},
				{t: 'AND A REGULATOR', at: wf(152, 'regulator'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(153) - 4} end={sf(154) - 4} x={72} y={900} w={1760} parts={[
				{t: "BOEING'S FAILURE", at: wf(153, 'failure'), tone: colors.red},
				{t: 'TO PROVIDE ADEQUATE', at: wf(153, 'adequate')},
				{t: 'TRAINING', at: wf(153, 'training'), tone: colors.amber},
				{t: '· GUIDANCE', at: wf(153, 'guidance'), tone: colors.amber},
				{t: '· OVERSIGHT', at: wf(153, 'oversight'), tone: colors.amber},
				{t: 'NECESSARY', at: wf(153, 'necessary'), br: true},
				{t: 'SO THAT MANUFACTURING', at: wf(153, 'manufacturing')},
				{t: 'PERSONNEL', at: wf(153, 'personnel')},
				{t: 'CONSISTENTLY', at: wf(153, 'consistently')},
				{t: 'AND CORRECTLY', at: wf(153, 'correctly')},
				{t: 'COMPLY', at: wf(153, 'comply'), tone: colors.cyan},
				{t: 'WITH ITS PARTS', at: wf(153, 'parts')},
				{t: 'REMOVAL PROCESS', at: wf(153, 'removal'), tone: colors.cyan},
			]} />
			<KeyLine f={f} fps={fps} start={sf(154) - 4} end={sf(155) + 4} x={72} y={950} parts={[
				{t: 'CONTRIBUTING:', at: wf(154, 'contributing'), tone: colors.amber},
				{t: 'THE', at: wf(154, 'the')},
				{t: "FAA'S", at: wf(154, 'f'), tone: colors.cyan},
				{t: 'INEFFECTIVE', at: wf(154, 'ineffective'), tone: colors.red},
				{t: 'COMPLIANCE', at: wf(154, 'compliance')},
				{t: 'ENFORCEMENT', at: wf(154, 'enforcement')},
				{t: 'SURVEILLANCE', at: wf(154, 'surveillance')},
				{t: 'AND AUDIT PLANNING', at: wf(154, 'audit')},
			]} />
		</>
	);
};

// ---------- the regulator's response (C79, C62, C60, C61)
const Grounded: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(155) - 10;
	const docA = sf(156) - 10;
	const end = sf(158) + 6;
	const G = {day: wf(155, 'day'), accident: wf(155, 'accident'), grounded: wf(155, 'grounded'), s71: wf(155, 'seventy-one'), t37: wf(155, 'thirty-seven'), nines: wf(155, 'nines'), plugs: wf(155, 'plugs'), inspected: wf(155, 'inspected')};
	const n = Math.round(rollTo(f, [{frame: G.grounded, value: 0}, {frame: G.s71 + LAND, value: 171}], true));
	return (
		<>
			<Fade start={a} end={docA + 20}>
				<div style={{position: 'absolute', left: 300, top: 300, fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, opacity: on(f, G.day, 10), ...litStyle(f, G.accident, colors.ink)}}><span style={litStyle(f, wf(155, 'f'), colors.cyan)}>FAA</span> · EMERGENCY AIRWORTHINESS DIRECTIVE 2024-02-51 · 06 JAN 2024</div>
					<div style={{display: 'flex', alignItems: 'baseline', gap: 30, marginTop: 30, opacity: on(f, G.grounded, 10)}}>
						<span style={{fontSize: 170, fontWeight: 700, color: colors.amber, fontVariantNumeric: 'tabular-nums', display: 'inline-block', transform: `scale(${bump(f, fps, G.s71 + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 60%'}}>{n}</span>
						<span style={{fontSize: 30, letterSpacing: 3}}>
							<span style={{opacity: on(f, G.t37, 8), ...litStyle(f, G.t37, colors.ink)}}>BOEING 737-9s</span> <span style={{opacity: on(f, G.nines, 8), ...litStyle(f, G.nines, colors.amber)}}>GROUNDED</span>
						</span>
					</div>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 10}}>
						<span style={{opacity: on(f, G.plugs, 8), ...litStyle(f, G.plugs, colors.ink)}}>UNTIL THEIR PLUGS</span> <span style={{opacity: on(f, G.inspected, 8), ...litStyle(f, G.inspected, colors.ink)}}>WERE INSPECTED</span> · NTSB AIR-25-04
					</div>
				</div>
				<Stamp text="GROUNDED" start={G.grounded + 30} x={1500} y={420} tone="amber" size={46} />
			</Fade>
			<RecordDoc doc="faa_halt" start={docA} end={end} at={[wf(156, 'production') - 10, wf(157, 'won\'t') - 15]} label="EXHIBIT 12" source="FAA NEWS RELEASE · 24 JANUARY 2024 · FAA.GOV" pushTo={sf(157)} />
			<KeyLine f={f} fps={fps} start={sf(156) - 6} end={sf(157) - 4} x={72} y={950} parts={[
				{t: '24', at: wf(156, 'twenty-fourth'), tone: colors.amber},
				{t: 'JAN 2024', at: wf(156, 'january'), tone: colors.amber},
				{t: '· THE FAA TOLD BOEING', at: wf(156, 'told')},
				{t: 'NO PRODUCTION', at: wf(156, 'no'), tone: colors.amber},
				{t: 'EXPANSION', at: wf(156, 'expansion'), tone: colors.amber},
				{t: 'OF THE MAX', at: wf(156, 'max')},
			]} />
			<KeyLine f={f} fps={fps} start={sf(157) - 4} end={end} x={72} y={950} parts={[
				{t: '“THIS WON’T BE BACK', at: wf(157, "won't")},
				{t: 'TO BUSINESS AS USUAL', at: wf(157, 'business')},
				{t: 'FOR BOEING”', at: wf(157, 'boeing')},
				{t: '· THE FAA ADMINISTRATOR', at: wf(157, 'administrator'), tone: colors.amber},
			]} />
		</>
	);
};

// ---------- the briefing (C77, C52)
const Briefing: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={66} start={sf(158) - 8} end={sf(160) + 6} hl={[{key: 'move_crew', at: wf(158, 'knew') - 10}, {key: 'no_tolerate', at: wf(159, 'cut') - 10}]} label="EXHIBIT 13" title="BOEING MEDIA BRIEFING, 25 JUNE 2024" pushTo={sf(159)} pad={[100, 220]} />
			<KeyLine f={f} fps={fps} start={sf(158) - 6} end={sf(159) - 4} x={72} y={950} parts={[
				{t: 'JUNE', at: wf(158, 'june'), tone: colors.amber},
				{t: '2024', at: wf(158, 'twenty-four'), tone: colors.amber},
				{t: "· BOEING'S", at: wf(158, "boeing's")},
				{t: 'HEAD OF QUALITY', at: wf(158, 'quality')},
				{t: '· MEDIA', at: wf(158, 'media')},
				{t: 'BRIEFING', at: wf(158, 'briefing')},
				{t: '· SAID THE COMPANY', at: wf(158, 'company')},
				{t: 'KNEW', at: wf(158, 'knew'), tone: colors.amber},
				{t: 'THE MOVE CREW', at: wf(158, 'move')},
				{t: 'HAD CLOSED THE PLUG', at: wf(158, 'closed'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(159) - 4} end={sf(160) + 4} x={72} y={950} parts={[
				{t: 'NTSB:', at: wf(159, 'n'), tone: colors.cyan},
				{t: 'ITS INTERVIEWS', at: wf(159, 'interviews')},
				{t: 'IDENTIFIED', at: wf(159, 'identified')},
				{t: 'NO ONE', at: wf(159, 'one'), tone: colors.amber},
				{t: '· CUT', at: wf(159, 'cut'), tone: colors.red},
				{t: 'BOEING OFF', at: wf(159, 'off'), tone: colors.red},
				{t: 'FROM ITS INVESTIGATIVE', at: wf(159, 'investigative')},
				{t: 'INFORMATION', at: wf(159, 'information')},
				{t: '· FOR RELEASING DETAILS', at: wf(159, 'releasing')},
				{t: 'WITHOUT APPROVAL', at: wf(159, 'approval')},
			]} />
		</>
	);
};

// ---------- Wichita, part of Boeing again (C63, C64, C53)
const Again: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const loopA = sf(162) - 10;
	const end = sf(163) + 6;
	const A = {twenty: wf(162, 'twenty'), years: wf(162, 'years'), sold: wf(162, 'sold'), part: wf(162, 'part'), again: wf(162, 'again')};
	const arc = tween(f, A.twenty - 10, A.again + LAND, 0, 1, ease.draw);
	const yrs = Math.round(rollTo(f, [{frame: A.twenty - 16, value: 0}, {frame: A.twenty + LAND, value: 20}], true));
	return (
		<>
			<RecordDoc doc="boeing_8k_merger" start={sf(160) - 10} end={sf(161) + 6} at={[wf(160, 'buy') - 10]} label="EXHIBIT 14" source="BOEING FORM 8-K · 1 JULY 2024 · SEC EDGAR" pushTo={ef(160)} />
			<KeyLine f={f} fps={fps} start={sf(160) - 6} end={sf(161) - 4} x={72} y={950} parts={[
				{t: '30 JUNE 2024', at: wf(160, 'month'), tone: colors.amber},
				{t: '· BOEING', at: wf(160, 'boeing')},
				{t: 'AGREED', at: wf(160, 'agreed')},
				{t: 'TO BUY', at: wf(160, 'buy'), tone: colors.amber},
				{t: 'SPIRIT AEROSYSTEMS', at: wf(160, 'spirit')},
			]} />
			<RecordDoc doc="boeing_8k_close" start={sf(161) - 6} end={loopA + 10} at={[wf(161, 'completed') - 10]} label="EXHIBIT 15" source="BOEING FORM 8-K · 8 DECEMBER 2025 · SEC EDGAR" pushTo={ef(161)} />
			<KeyLine f={f} fps={fps} start={sf(161) - 4} end={loopA + 10} x={72} y={950} parts={[
				{t: 'THE DEAL', at: wf(161, 'deal')},
				{t: 'COMPLETED', at: wf(161, 'completed'), tone: colors.cyan},
				{t: '· 08', at: wf(161, 'eighth'), tone: colors.amber},
				{t: 'DEC', at: wf(161, 'december'), tone: colors.amber},
				{t: '2025', at: wf(161, 'twenty-five'), tone: colors.amber},
			]} />
			<Fade start={loopA} end={end}>
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
					<path d="M 560 560 C 760 300, 1160 300, 1360 560" fill="none" stroke={colors.border} strokeWidth={2} />
					<path d="M 560 560 C 760 300, 1160 300, 1360 560" fill="none" stroke={colors.amber} strokeWidth={3} strokeDasharray="1200" strokeDashoffset={1200 * (1 - arc)} />
					<text x={960} y={330} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={40} opacity={on(f, A.twenty, 8)}>
						{yrs} <tspan opacity={on(f, A.years, 8)}>YEARS</tspan>
					</text>
				</svg>
				<div style={{position: 'absolute', left: 560 - 230, top: 590, width: 460, padding: '14px 0 16px', textAlign: 'center', fontFamily: mono, background: colors.card, border: `1px solid ${f >= A.sold ? colors.ink : colors.border}`}}>
					<div style={{fontSize: 56, fontWeight: 700, color: colors.ink}}>2005</div>
					<div style={{fontSize: 28, letterSpacing: 1.2, marginTop: 6, ...litStyle(f, A.sold, colors.ink)}}>BOEING SELLS WICHITA</div>
				</div>
				<div style={{position: 'absolute', left: 1360 - 230, top: 590, width: 460, padding: '14px 0 16px', textAlign: 'center', fontFamily: mono, background: colors.card, border: `1px solid ${colors.amber}`, opacity: on(f, A.part, 12), transform: `scale(${bump(f, fps, A.again + LAND, 0.05).toFixed(4)})`}}>
					<div style={{fontSize: 56, fontWeight: 700, color: colors.amber}}>2025</div>
					<div style={{fontSize: 28, letterSpacing: 1.2, color: colors.ink, marginTop: 6}}>PART OF BOEING AGAIN</div>
				</div>
			</Fade>
		</>
	);
};

// ---------- the fix (C65): drawn as an illustration, status as Boeing stated it to the NTSB
const Fix: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(163) - 10;
	const end = sf(168) + 6;
	const X = {
		devices: wf(164, 'devices'),
		rising: wf(164, 'rising'),
		no: wf(164, 'no'),
		panels: wf(165, 'panels'),
		cannot: wf(165, 'cannot'),
		unless: wf(165, 'unless'),
		engaged: wf(165, 'engaged'),
		lanyards: wf(166, 'lanyards'),
		removed: wf(166, 'removed'),
		hangs: wf(166, 'hangs'),
		see: wf(166, 'see'),
	};
	const cam = camOf(f, [
		{f: a, yaw: 0.2, pitch: 0.1, dist: 150},
		{f: end, yaw: 0.45, pitch: 0.14, dist: 140},
	]);
	// "even with no bolts in": the bolts fade while the devices hold; they return for the lanyards
	const bo = Math.max(1 - tween(f, X.no, X.no + 20, 0, 1), tween(f, X.lanyards - 20, X.lanyards, 0, 1));
	const state: PlugState = {...defaultState, bolts: {upperFwd: 1, upperAft: 1, lowerFwd: 1, lowerAft: 1}, boltOpacity: bo, stopGlow: 0.3, boltGlow: 0.8};
	const dev = lead(f, X.devices, 16);
	const devGlow = flash(f, X.engaged, 0.3);
	const lan = lead(f, X.lanyards, 30);
	const p1 = anchor(state, cam, 'upperFwd');
	const p2 = anchor(state, cam, 'upperAft');
	const bolts = ['upperFwd', 'upperAft', 'lowerFwd', 'lowerAft'].map((n) => anchor(state, cam, n));
	const items: {parts: Part[]}[] = [
		{parts: [{t: '2', at: wf(164, 'two'), tone: colors.cyan}, {t: 'DEVICES', at: X.devices, tone: colors.cyan}, {t: 'STOP', at: wf(164, 'stop')}, {t: 'THE PLUG RISING,', at: X.rising}, {t: 'EVEN WITH NO BOLTS', at: X.no, tone: colors.amber}]},
		{parts: [{t: 'CABIN PANELS', at: X.panels}, {t: 'WILL NOT FIT', at: X.cannot, tone: colors.amber}, {t: 'UNLESS', at: X.unless}, {t: 'THEY ARE ENGAGED', at: X.engaged, tone: colors.cyan}]},
		{parts: [{t: 'LANYARDS', at: X.lanyards, tone: colors.amber}, {t: 'ON THE BOLTS:', at: wf(166, 'bolts')}, {t: 'A REMOVED BOLT', at: X.removed}, {t: 'HANGS IN VIEW', at: X.hangs, tone: colors.amber}]},
	];
	return (
		<>
			<Mount x={96} y={84} w={1728} h={900} source="BOEING/SPIRIT DESIGN CHANGE AS DESCRIBED IN NTSB AIR-25-04" start={a} end={end} labels={['ILLUSTRATION', 'SUBJECT TO CERTIFICATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg
						cam={cam}
						state={state}
						extra={
							<>
								{[p1, p2].map((p, i) => (
									<g key={i} opacity={dev}>
										<rect x={p.x - 26} y={p.y + 40} width={52} height={70} fill={`rgba(56,189,248,${(0.25 + 0.35 * devGlow).toFixed(3)})`} stroke={colors.cyan} strokeWidth={2.5} />
										<text x={p.x + (i ? -36 : 36)} y={p.y + 80} textAnchor={i ? 'end' : 'start'} fill={colors.cyan} fontFamily="JetBrains Mono" fontSize={26}>
											RETENTION DEVICE
										</text>
									</g>
								))}
								{bolts.map((b, i) => (
									<path key={i} d={`M ${b.x} ${b.y} q ${i % 2 ? -20 : 20} ${60 * lan} ${i % 2 ? -10 : 10} ${110 * lan}`} fill="none" stroke={colors.amber} strokeWidth={2 + 2 * flash(f, X.see, 0)} strokeDasharray="4 4" opacity={lan} />
								))}
							</>
						}
					/>
				</div>
			</Mount>
			<KeyLine f={f} fps={fps} start={sf(163) - 6} end={sf(164) + 4} x={150} y={846} parts={[
				{t: 'THE FIX', at: wf(163, 'fix'), tone: colors.cyan},
				{t: '· BOEING', at: wf(163, 'boeing')},
				{t: 'AND SPIRIT', at: wf(163, 'spirit')},
				{t: 'DESIGNED', at: wf(163, 'designed')},
				{t: '· SIMPLE', at: wf(163, 'simple'), tone: colors.cyan},
			]} />
			{items.map((it, i) => (
				<KeyLine key={i} f={f} fps={fps} start={it.parts[0].at - 12} end={end} x={1336} y={154 + i * 150} w={440} size={26} parts={it.parts} />
			))}
			<KeyLine f={f} fps={fps} start={sf(167) - 6} end={end} x={1336} y={620} w={440} size={26} parts={[
				{t: 'MAY 2025 ·', at: wf(167, 'twenty-five'), tone: colors.amber},
				{t: 'BOEING', at: wf(167, 'boeing')},
				{t: 'TO INVESTIGATORS:', at: wf(167, 'investigators')},
				{t: 'EXPECTED', at: wf(167, 'expected')},
				{t: 'ON NEW AIRPLANES', at: wf(167, 'new')},
				{t: 'IN 2026', at: wf(167, 'twenty-six'), tone: colors.amber},
			]} />
		</>
	);
};

// ---------- every line (C78)
const EveryLine: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(168) - 10;
	const end = sf(171) + 6;
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 300, top: 200, width: 1320, fontFamily: mono}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 76, color: colors.ink, letterSpacing: 3}}>
					<WordLine f={f} fps={fps} words={[['THE FIX', wf(168, 'fix')], ['IS FOR ONE', wf(168, 'one')], ['PLUG', wf(168, 'plug')]]} />
				</div>
				<div style={{fontSize: 30, letterSpacing: 2, color: colors.amber, marginTop: 24}}>
					<WordLine f={f} fps={fps} words={[['THE QUESTION', wf(169, 'question')], ['THE INVESTIGATION RAISED:', wf(169, 'raised')], ['EVERY', wf(169, 'every')], ['DISTURBED', wf(169, 'disturbed')], ['INSTALLATION,', wf(169, 'installation')], ['ON EVERY LINE', wf(169, 'every', 1)]]} />
				</div>
			</div>
			<KeyLine f={f} fps={fps} start={sf(170) - 6} end={end} x={300} y={430} parts={[
				{t: 'MARCH 2024', at: wf(170, 'twenty-four'), tone: colors.amber},
				{t: '· 2 MONTHS AFTER', at: wf(170, 'two')},
				{t: 'THE ACCIDENT', at: wf(170, 'accident')},
				{t: "· BOEING'S", at: wf(170, "boeing's")},
				{t: 'OWN AUDITS', at: wf(170, 'own')},
				{t: '· OTHER', at: wf(170, 'other')},
				{t: 'PRODUCTION LINES', at: wf(170, 'lines')},
			]} />
			<ChunkQuote
				f={f}
				fps={fps}
				chunks={[
					['repeated findings', wf(170, 'repeated')],
					['for failure to prevent', wf(170, 'findings')],
					['unauthorized removals', wf(170, 'unauthorized')],
				]}
				who="BOEING INTERNAL AUDITS · OTHER PRODUCTION LINES · MARCH 2024"
				whoAt={wf(170, 'audits')}
				where="AS LISTED IN NTSB AIR-25-04"
				whereAt={wf(170, 'removals')}
				start={wf(170, 'still') - 12}
				end={end}
				x={300}
				y={540}
				w={1320}
				size={40}
			/>
		</Fade>
	);
};

// ---------- the Board (C67, C81, C66)
const Board: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const end = sf(174) + 6;
	return (
		<>
			<ChunkQuote
				f={f}
				fps={fps}
				chunks={[
					['I am skeptical', wf(171, 'skeptical')],
					['Boeing’s systems', wf(171, 'systems')],
					['at the time', wf(171, 'time')],
					['were equipped to catch', wf(171, 'caught')],
					['these types of errors …', wf(171, 'errors')],
				]}
				who="NTSB MEMBER GRAHAM"
				whoAt={wf(171, 'member')}
				where="STATEMENT IN NTSB AIR-25-04"
				whereAt={wf(171, 'wrote')}
				start={wf(171, 'one') - 12}
				end={end}
				x={240}
				y={170}
				w={1440}
				size={38}
			/>
			<KeyLine f={f} fps={fps} start={sf(172) - 6} end={end} x={240} y={430} parts={[
				{t: 'ALSO NOTED:', at: wf(172, 'noted')},
				{t: 'BOEING HAD ALREADY TAKEN', at: wf(172, 'already')},
				{t: 'AT LEAST 20', at: wf(172, 'twenty'), tone: colors.amber},
				{t: 'CORRECTIVE ACTIONS', at: wf(172, 'corrective')},
			]} />
			<ChunkQuote
				f={f}
				fps={fps}
				chunks={[
					['this could have resulted in tragedy', wf(173, 'said')],
					['if the event had taken place', wf(173, 'over')],
					['over the Pacific', wf(173, 'pacific')],
				]}
				who="NTSB MEMBER INMAN"
				whoAt={wf(173, 'member')}
				where="STATEMENT IN NTSB AIR-25-04"
				whereAt={wf(173, 'could')}
				start={sf(173) - 6}
				end={end}
				x={240}
				y={560}
				w={1440}
				size={38}
			/>
		</>
	);
};

// ---------- the last image: the four bolts that should have been there, then the four empty holes (framing)
const Last: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(174) - 10;
	const end = FILM_FRAMES - 14 * 60 + 30;
	const L = {four: wf(174, 'four'), single: wf(174, 'single'), lower: wf(174, 'lower'), done: wf(174, 'done'), steel: wf(175, 'steel'), spare: wf(175, 'spare'), paperwork: wf(176, 'paperwork'), none: wf(176, 'none')};
	const cam = camOf(f, [
		{f: a, yaw: 0.0, pitch: 0.04, dist: 185, cx: 960},
		{f: end, yaw: 0.0, pitch: 0.02, dist: 162, cx: 960},
	]);
	// the steel "had margin to spare": the ghost bolts fade from "steel"; "none": the holes stay empty
	const ghost = 1 - tween(f, L.steel, L.spare + 20, 0, 1);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.15, emptyHoles: 1 - ghost * 0.6};
	const s2: PlugState = {...state, bolts: {upperFwd: 1, upperAft: 1, lowerFwd: 1, lowerAft: 1}, boltOpacity: ghost * 0.9, emptyHoles: 0};
	const o = envelope(f, a, end, 18, 40);
	const ids = ['upperFwd', 'upperAft', 'lowerFwd', 'lowerAft'] as const;
	return (
		<AbsoluteFill style={{opacity: o}}>
			<PlugSvg
				cam={cam}
				state={f < L.spare + 20 ? s2 : state}
				extra={
					<>
						{ids.map((id, i) => {
							const p = anchor(state, cam, id);
							return <BracketLock key={id} f={f} fps={fps} word={L.four + i * STAGGER} x={p.x - 28} y={p.y - 28} w={56} h={56} tone={id === 'lowerFwd' && f >= L.single ? 'amber' : 'cyan'} until={L.steel} />;
						})}
					</>
				}
			/>
			<div style={{position: 'absolute', left: 0, right: 0, top: 860, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 40, letterSpacing: 3, color: colors.ink, opacity: envelope(f, L.four - 10, end, 10, 30)}}>
				<WordLine f={f} fps={fps} words={[['4 BOLTS,', L.four], ['WHERE A SINGLE', L.single], ['LOWER BOLT', L.lower], ['WOULD HAVE DONE', L.done]]} />
				<div style={{marginTop: 14, fontSize: 34}}>
					<WordLine f={f} fps={fps} words={[['THE STEEL HAD', L.steel], ['MARGIN TO SPARE.', L.spare], ['THE PAPERWORK', L.paperwork], ['HAD NONE.', L.none]]} tone={(i) => (i === 3 ? colors.red : undefined)} />
				</div>
			</div>
			<div style={{position: 'absolute', left: 0, right: 0, top: 976, textAlign: 'center', fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: on(f, L.none, 20)}}>
				N704AL · LEFT MID EXIT DOOR PLUG · 0 OF 4 BOLTS
			</div>
			<Label text="ILLUSTRATION" style={{position: 'absolute', right: 96, top: 90}} />
		</AbsoluteFill>
	);
};

// ---------- outro: the channel's name, once
const Outro: React.FC = () => {
	const f = useFilmFrame();
	const a = FILM_FRAMES - 14 * 60;
	const o = envelope(f, a, FILM_FRAMES + 30, 40, 1);
	const line = tween(f, a + 30, a + 110, 0, 1, ease.draw);
	return (
		<AbsoluteFill style={{opacity: o}}>
			<div style={{position: 'absolute', left: 0, right: 0, top: 170, textAlign: 'center'}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, letterSpacing: 18, color: colors.ink, marginRight: -18}}>{channel.name.toUpperCase()}</div>
				<div style={{width: 640 * line, height: 1, background: colors.amber, margin: '26px auto 0'}} />
				<div style={{fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 24, opacity: tween(f, a + 60, a + 100, 0, 1)}}>{channel.tagline.toUpperCase()}</div>
			</div>
			<div style={{position: 'absolute', left: 0, right: 0, top: 960, textAlign: 'center', fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: tween(f, a + 90, a + 130, 0, 1)}}>
				SOURCES: NTSB AIR-25-04 · NTSB DOCKET DCA24MA063 · FAA · SEC EDGAR FILINGS OF BOEING AND SPIRIT AEROSYSTEMS
			</div>
		</AbsoluteFill>
	);
};

export const act5: SceneDef[] = [
	{id: 'verdict', from: sf(151) - 20, to: sf(155) + 16, C: Verdict, cues: [{frame: sf(151) - 10, sfx: 'paper_slide', gainDb: -12}, {frame: wf(153, 'failure') - 15, sfx: 'highlighter', gainDb: -14}, {frame: wf(154, 'contributing') - 15, sfx: 'highlighter', gainDb: -14}]},
	{id: 'grounded', from: sf(155) - 20, to: sf(158) + 16, C: Grounded, cues: [{frame: wf(155, 'grounded') + 30, sfx: 'stamp', gainDb: -8}, {frame: sf(156) - 10, sfx: 'paper_slide', gainDb: -14}]},
	{id: 'briefing', from: sf(158) - 16, to: sf(160) + 16, C: Briefing, cues: [{frame: wf(158, 'knew') - 10, sfx: 'highlighter', gainDb: -16}, {frame: wf(159, 'cut') - 10, sfx: 'highlighter', gainDb: -16}]},
	{id: 'again', from: sf(160) - 20, to: sf(163) + 16, C: Again, cues: [{frame: wf(162, 'twenty') - 10, sfx: 'pen_scratch', gainDb: -18}]},
	{id: 'fix', from: sf(163) - 20, to: sf(168) + 16, C: Fix, cues: [{frame: wf(164, 'devices'), sfx: 'relay_click', gainDb: -14}, {frame: wf(166, 'lanyards'), sfx: 'relay_click', gainDb: -16}]},
	{id: 'everyline', from: sf(168) - 20, to: sf(171) + 16, C: EveryLine},
	{id: 'board', from: sf(171) - 20, to: sf(174) + 16, C: Board},
	{id: 'last', from: sf(174) - 20, to: FILM_FRAMES - 14 * 60 + 40, C: Last, cues: [{frame: wf(175, 'steel'), sfx: 'whoosh', gainDb: -22}]},
	{id: 'outro', from: FILM_FRAMES - 14 * 60, to: FILM_FRAMES, C: Outro, cues: [{frame: FILM_FRAMES - 14 * 60 + 30, sfx: 'transformer_hum', gainDb: -26}]},
];
