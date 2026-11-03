import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {channel, colors} from '../../../../lib/remotion/brand';
import {ease, envelope, tween} from '../../../../lib/remotion/motion';
import {RecordDoc, ReportPage} from '../docs';
import {Camera} from '../engine3d';
import {Caption, Fade, Label, mono, Mount, QuoteCard, sans, Stamp, useFilmFrame} from '../kit';
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

// ---------- the report and its probable cause (C51, C50)
const Verdict: React.FC = () => (
	<>
		<ReportPage page={1} start={sf(151) - 10} end={sf(153) + 6} hl={[{key: 'title_date', at: wf(151, 'twenty-fourth') - 10}, {key: 'title_block', at: sf(152)}]} label="EXHIBIT 11" title="ADOPTED 24 JUNE 2025" pushTo={sf(152)} pad={[100, 200]} />
		<ReportPage page={136} start={sf(153) - 8} end={sf(155) + 6} hl={[{key: 'pc_main', at: sf(153)}, {key: 'pc_contrib', at: sf(154)}]} label="PROBABLE CAUSE" title="3.2 PROBABLE CAUSE" pushTo={sf(153) + 40} pad={[100, 120]} />
	</>
);

// ---------- the regulator's response (C79, C62, C60, C61)
const Grounded: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(155) - 10;
	const docA = sf(156) - 10;
	const end = sf(158) + 6;
	const n = Math.round(tween(f, wf(155, 'grounded'), wf(155, 'grounded') + 70, 0, 171, ease.camera));
	return (
		<>
			<Fade start={a} end={docA + 20}>
				<div style={{position: 'absolute', left: 300, top: 300, fontFamily: mono}}>
					<div style={{fontSize: 16, letterSpacing: 3, color: colors.muted}}>FAA · EMERGENCY AIRWORTHINESS DIRECTIVE 2024-02-51 · 06 JAN 2024</div>
					<div style={{display: 'flex', alignItems: 'baseline', gap: 30, marginTop: 30}}>
						<span style={{fontSize: 170, fontWeight: 700, color: colors.amber, fontVariantNumeric: 'tabular-nums'}}>{n}</span>
						<span style={{fontSize: 30, color: colors.ink, letterSpacing: 3}}>BOEING 737-9s GROUNDED</span>
					</div>
					<div style={{fontSize: 18, letterSpacing: 2.4, color: colors.sub, marginTop: 10}}>UNTIL THEIR PLUGS WERE INSPECTED · NTSB AIR-25-04</div>
				</div>
				<Stamp text="GROUNDED" start={wf(155, 'grounded') + 30} x={1500} y={420} tone="amber" size={46} />
			</Fade>
			<RecordDoc doc="faa_halt" start={docA} end={end} at={[wf(156, 'production') - 10, sf(157)]} label="EXHIBIT 12" source="FAA NEWS RELEASE · 24 JANUARY 2024 · FAA.GOV" pushTo={sf(157)} />
		</>
	);
};

// ---------- the briefing (C77, C52)
const Briefing: React.FC = () => (
	<ReportPage page={66} start={sf(158) - 8} end={sf(160) + 6} hl={[{key: 'move_crew', at: wf(158, 'knew') - 10}, {key: 'no_tolerate', at: wf(159, 'cut') - 10}]} label="EXHIBIT 13" title="BOEING MEDIA BRIEFING, 25 JUNE 2024" pushTo={sf(159)} pad={[100, 220]} />
);

// ---------- Wichita, part of Boeing again (C63, C64, C53)
const Again: React.FC = () => {
	const f = useFilmFrame();
	const loopA = sf(162) - 10;
	const end = sf(163) + 6;
	return (
		<>
			<RecordDoc doc="boeing_8k_merger" start={sf(160) - 10} end={sf(161) + 6} at={[wf(160, 'buy') - 10]} label="EXHIBIT 14" source="BOEING FORM 8-K · 1 JULY 2024 · SEC EDGAR" pushTo={ef(160)} />
			<RecordDoc doc="boeing_8k_close" start={sf(161) - 6} end={loopA + 10} at={[wf(161, 'completed') - 10]} label="EXHIBIT 15" source="BOEING FORM 8-K · 8 DECEMBER 2025 · SEC EDGAR" pushTo={ef(161)} />
			<Fade start={loopA} end={end}>
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
					<path d="M 560 560 C 760 300, 1160 300, 1360 560" fill="none" stroke={colors.border} strokeWidth={2} />
					<path d="M 560 560 C 760 300, 1160 300, 1360 560" fill="none" stroke={colors.amber} strokeWidth={3} strokeDasharray="1200" strokeDashoffset={1200 * (1 - tween(f, loopA + 10, loopA + 120, 0, 1, ease.draw))} />
				</svg>
				<div style={{position: 'absolute', left: 420, top: 590, width: 280, textAlign: 'center', fontFamily: mono}}>
					<div style={{fontSize: 44, fontWeight: 700, color: colors.ink}}>2005</div>
					<div style={{fontSize: 15, letterSpacing: 2, color: colors.sub, marginTop: 6}}>BOEING SELLS WICHITA</div>
				</div>
				<div style={{position: 'absolute', left: 1204, top: 590, width: 280, textAlign: 'center', fontFamily: mono, opacity: tween(f, loopA + 100, loopA + 130, 0, 1)}}>
					<div style={{fontSize: 44, fontWeight: 700, color: colors.amber}}>2025</div>
					<div style={{fontSize: 15, letterSpacing: 2, color: colors.sub, marginTop: 6}}>PART OF BOEING AGAIN</div>
				</div>
			</Fade>
		</>
	);
};

// ---------- the fix (C65): drawn as an illustration, status as Boeing stated it to the NTSB
const Fix: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(163) - 10;
	const end = sf(168) + 6;
	const cam = camOf(f, [
		{f: a, yaw: 0.2, pitch: 0.1, dist: 150},
		{f: end, yaw: 0.45, pitch: 0.14, dist: 140},
	]);
	const state: PlugState = {...defaultState, bolts: {upperFwd: 1, upperAft: 1, lowerFwd: 1, lowerAft: 1}, stopGlow: 0.3, boltGlow: 0.8};
	const dev = tween(f, sf(164), sf(164) + 30, 0, 1, ease.arrive);
	const lan = tween(f, sf(166), sf(166) + 40, 0, 1, ease.draw);
	const p1 = anchor(state, cam, 'upperFwd');
	const p2 = anchor(state, cam, 'upperAft');
	const bolts = ['upperFwd', 'upperAft', 'lowerFwd', 'lowerAft'].map((n) => anchor(state, cam, n));
	return (
		<Mount x={96} y={84} w={1728} h={900} source="ILLUSTRATION · BOEING/SPIRIT DESIGN ENHANCEMENT AS DESCRIBED IN NTSB AIR-25-04" start={a} end={end} labels={['ILLUSTRATION', 'SUBJECT TO CERTIFICATION']}>
			<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
				<PlugSvg
					cam={cam}
					state={state}
					extra={
						<>
							{[p1, p2].map((p, i) => (
								<g key={i} opacity={dev}>
									<rect x={p.x - 26} y={p.y + 40} width={52} height={70} fill="rgba(56,189,248,0.25)" stroke={colors.cyan} strokeWidth={2.5} />
									<text x={p.x + (i ? -36 : 36)} y={p.y + 80} textAnchor={i ? 'end' : 'start'} fill={colors.cyan} fontFamily="JetBrains Mono" fontSize={14}>
										RETENTION DEVICE
									</text>
								</g>
							))}
							{bolts.map((b, i) => (
								<path key={i} d={`M ${b.x} ${b.y} q ${i % 2 ? -20 : 20} ${60 * lan} ${i % 2 ? -10 : 10} ${110 * lan}`} fill="none" stroke={colors.amber} strokeWidth={2} strokeDasharray="4 4" opacity={lan} />
							))}
						</>
					}
				/>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 70, width: 440, fontFamily: mono}}>
				{[
					{t: '2 DEVICES STOP THE PLUG RISING, EVEN WITH NO BOLTS', on: sf(164)},
					{t: 'CABIN PANELS WILL NOT FIT UNLESS THEY ARE ENGAGED', on: sf(165)},
					{t: 'LANYARDS: A REMOVED BOLT HANGS IN VIEW', on: sf(166)},
				].map((x) => (
					<div key={x.t} style={{fontSize: 18, letterSpacing: 1.6, color: colors.ink, padding: '14px 0', borderBottom: `1px solid ${colors.border}`, opacity: tween(f, x.on, x.on + 16, 0, 1)}}>
						{x.t}
					</div>
				))}
				<div style={{fontSize: 15, letterSpacing: 1.8, color: colors.amber, marginTop: 24, lineHeight: 1.6, opacity: tween(f, sf(167), sf(167) + 20, 0, 1)}}>BOEING TO THE NTSB, MAY 2025: NEW PRODUCTION LIKELY FROM 2026, ONCE CERTIFIED</div>
			</div>
		</Mount>
	);
};

// ---------- every line (C78)
const EveryLine: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(168) - 10;
	const end = sf(171) + 6;
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 300, top: 260, width: 1320, fontFamily: mono}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 76, color: colors.ink, letterSpacing: 3, transform: `scale(${tween(f, a, end, 1, 1.04)})`, transformOrigin: '0 50%'}}>THE FIX IS FOR ONE PLUG</div>
				<div style={{fontSize: 26, letterSpacing: 2.4, color: colors.amber, marginTop: 24, opacity: tween(f, sf(169), sf(169) + 20, 0, 1)}}>THE QUESTION IS EVERY DISTURBED INSTALLATION, ON EVERY LINE</div>
			</div>
			<QuoteCard quote="repeated findings for failure to prevent unauthorized removals" who="BOEING INTERNAL AUDITS · OTHER PRODUCTION LINES · MARCH 2024" where="AS LISTED IN NTSB AIR-25-04" start={sf(170)} end={end} x={300} y={520} w={1320} size={40} />
		</Fade>
	);
};

// ---------- the Board (C67, C81, C66)
const Board: React.FC = () => {
	const a = sf(171) - 10;
	const end = sf(174) + 6;
	return (
		<>
			<QuoteCard quote="I am skeptical Boeing’s systems at the time were equipped to catch these types of errors" who="NTSB MEMBER GRAHAM" where="STATEMENT IN NTSB AIR-25-04" start={a} end={end} x={240} y={170} w={1440} size={38} />
			<Caption text="ALSO NOTED: AT LEAST 20 ACTIONS ALREADY TAKEN BY BOEING" start={sf(172)} end={end} x={240} y={430} />
			<QuoteCard quote="this could have resulted in tragedy if the event had taken place over the Pacific" who="NTSB MEMBER INMAN" where="STATEMENT IN NTSB AIR-25-04" start={sf(173) - 6} end={end} x={240} y={560} w={1440} size={38} />
		</>
	);
};

// ---------- the last image: the four empty holes (framing)
const Last: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(174) - 10;
	const end = FILM_FRAMES - 14 * 60 + 30;
	const cam = camOf(f, [
		{f: a, yaw: 0.0, pitch: 0.04, dist: 150, cx: 960},
		{f: end, yaw: 0.0, pitch: 0.02, dist: 130, cx: 960},
	]);
	const ghost = 1 - tween(f, sf(175), sf(175) + 50, 0, 1);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.15, emptyHoles: 1 - ghost * 0.6};
	const s2: PlugState = {...state, bolts: {upperFwd: 1, upperAft: 1, lowerFwd: 1, lowerAft: 1}, boltOpacity: ghost * 0.9, emptyHoles: 0};
	const o = envelope(f, a, end, 18, 40);
	return (
		<AbsoluteFill style={{opacity: o}}>
			<PlugSvg cam={cam} state={f < sf(175) + 50 ? s2 : state} />
			<div style={{position: 'absolute', left: 0, right: 0, top: 940, textAlign: 'center', fontFamily: mono, fontSize: 16, letterSpacing: 4, color: colors.muted, opacity: tween(f, sf(176), sf(176) + 30, 0, 1)}}>
				N704AL · LEFT MID EXIT DOOR PLUG · 0 OF 4 BOLTS
			</div>
			<Label text="ILLUSTRATION" style={{position: 'absolute', right: 72, top: 940}} />
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
				<div style={{fontFamily: mono, fontSize: 18, letterSpacing: 5, color: colors.sub, marginTop: 24, opacity: tween(f, a + 60, a + 100, 0, 1)}}>{channel.tagline.toUpperCase()}</div>
			</div>
			<div style={{position: 'absolute', left: 0, right: 0, top: 960, textAlign: 'center', fontFamily: mono, fontSize: 18, letterSpacing: 2.4, color: colors.sub, opacity: tween(f, a + 90, a + 130, 0, 1)}}>
				SOURCES: NTSB AIR-25-04 · NTSB DOCKET DCA24MA063 · FAA · SEC EDGAR FILINGS OF BOEING AND SPIRIT AEROSYSTEMS
			</div>
		</AbsoluteFill>
	);
};

export const act5: SceneDef[] = [
	{id: 'verdict', from: sf(151) - 20, to: sf(155) + 16, C: Verdict, cues: [{frame: sf(151) - 10, sfx: 'paper_slide', gainDb: -12}, {frame: sf(153), sfx: 'highlighter', gainDb: -14}, {frame: sf(154), sfx: 'highlighter', gainDb: -14}]},
	{id: 'grounded', from: sf(155) - 20, to: sf(158) + 16, C: Grounded, cues: [{frame: wf(155, 'grounded') + 30, sfx: 'stamp', gainDb: -8}, {frame: sf(156) - 10, sfx: 'paper_slide', gainDb: -14}]},
	{id: 'briefing', from: sf(158) - 16, to: sf(160) + 16, C: Briefing, cues: [{frame: wf(158, 'knew') - 10, sfx: 'highlighter', gainDb: -16}, {frame: wf(159, 'cut') - 10, sfx: 'highlighter', gainDb: -16}]},
	{id: 'again', from: sf(160) - 20, to: sf(163) + 16, C: Again, cues: [{frame: sf(162), sfx: 'pen_scratch', gainDb: -18}]},
	{id: 'fix', from: sf(163) - 20, to: sf(168) + 16, C: Fix, cues: [{frame: sf(164), sfx: 'relay_click', gainDb: -14}, {frame: sf(166), sfx: 'relay_click', gainDb: -16}]},
	{id: 'everyline', from: sf(168) - 20, to: sf(171) + 16, C: EveryLine},
	{id: 'board', from: sf(171) - 20, to: sf(174) + 16, C: Board},
	{id: 'last', from: sf(174) - 20, to: FILM_FRAMES - 14 * 60 + 40, C: Last, cues: [{frame: sf(175) + 10, sfx: 'whoosh', gainDb: -22}]},
	{id: 'outro', from: FILM_FRAMES - 14 * 60, to: FILM_FRAMES, C: Outro, cues: [{frame: FILM_FRAMES - 14 * 60 + 30, sfx: 'transformer_hum', gainDb: -26}]},
];
