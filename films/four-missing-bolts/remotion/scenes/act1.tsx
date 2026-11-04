import React from 'react';
import {AbsoluteFill, Img, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {Exhibit} from '../../../../lib/remotion/Exhibit';
import {beat, BracketLock, bump, flash, LAND, lead, rollTo, STAGGER, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease, envelope, settle, tween} from '../../../../lib/remotion/motion';
import phrases from '../data/phrases.json';
import {altArr, altFt, cabinPsi, CAUTION_T, clockText, EVENT_T, GEAR_AIR_T, GEAR_GROUND_T, latArr, lonArr, WARN_T} from '../fdr';
import {ActTitle, Fade, media, mono, Mount, Photo, sans, Stamp, useFilmFrame} from '../kit';
import {ef, FPS, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT I · THE INCIDENT (screenplay rows 1–9). Cold open on the record: the real FDR (docket DCA24MA063, attachment 1).
// Word-level choreography (PLAYBOOK §10.6): every beat below sits on a MEASURED word (vo/timing.json); the table that
// describes them is scenes/choreography/act1.md. Sentence ids are literal so scripts/sync_audit.py can resolve them.

/** Text that takes the light on its word: `sub` before, `tone` after, with a glow that guides the eye. */
const litStyle = (f: number, on: number, tone: string = colors.ink): React.CSSProperties => ({
	color: f >= on ? tone : colors.sub,
	textShadow: `0 0 ${(18 * flash(f, on, 0)).toFixed(1)}px ${tone}`,
});

/** A word or figure that arrives on its own syllable: rises 12 px and fades in, completing on the word, then bumps. */
const Arrive: React.FC<{f: number; fps: number; on: number; children: React.ReactNode; style?: React.CSSProperties; dur?: number}> = ({f, fps, on, children, style, dur = 8}) => {
	const k = lead(f, on, dur);
	return <span style={{display: 'inline-block', opacity: k, transform: `translateY(${((1 - k) * 12).toFixed(2)}px) scale(${bump(f, fps, on + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 70%', ...style}}>{children}</span>;
};

// ---------- the flight clock: real time until the pressure drop, then a quarter-speed replay so each recorded event
// lands on the words that name it (C02, FDR discretes). The drop is anchored to "dropped"; at ×0.25 the recorded cabin
// altitude warning (+0.587 s) then lands on "warning" and the master caution (+1.447 s) on "caution", as recorded.
const F_EVENT = wf(2, 'dropped') - 6;
const REPLAY = 0.25;
const flightT = (f: number): number => (f < F_EVENT ? EVENT_T - (F_EVENT - f) / FPS : EVENT_T + ((f - F_EVENT) / FPS) * REPLAY);
const F_WARN = Math.round(F_EVENT + ((WARN_T - EVENT_T) / REPLAY) * FPS);
const F_CAUT = Math.round(F_EVENT + ((CAUTION_T - EVENT_T) / REPLAY) * FPS);

const Panel: React.FC<{x: number; y: number; w: number; h: number; title: string; on?: number; tone?: string; children?: React.ReactNode; right?: React.ReactNode}> = ({x, y, w, h, title, on, tone = colors.cyan, children, right}) => {
	const f = useFilmFrame();
	const lit = on === undefined ? 0 : lead(f, on, 12);
	const glow = on === undefined ? 0 : flash(f, on, 0.25);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: 'rgba(10,13,18,0.6)', border: `1px solid ${lit > 0.5 ? tone : colors.border}`, boxShadow: glow > 0.01 ? `0 0 ${(28 * glow).toFixed(1)}px ${tone}44` : 'none'}}>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px 0', fontFamily: mono, fontSize: 16, letterSpacing: 2.6, color: lit > 0.5 ? colors.ink : colors.sub}}>
				<span>{title}</span>
				{right}
			</div>
			{children}
		</div>
	);
};

const Annunciator: React.FC<{label: string; on: number; tone: 'red' | 'amber'; x: number; y: number}> = ({label, on, tone, x, y}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const active = f >= on;
	const lit = active ? 0.75 + 0.25 * Math.cos(((f - on) / FPS) * Math.PI * 2 * 1.2) : 0;
	const c = colors[tone];
	return (
		<div
			style={{
				position: 'absolute',
				left: x,
				top: y,
				width: 330,
				height: 74,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontFamily: mono,
				fontWeight: 700,
				fontSize: 24,
				letterSpacing: 3,
				color: active ? '#0a0d12' : colors.sub,
				background: active ? c : 'transparent',
				opacity: active ? lit : 1,
				border: `1px solid ${active ? c : colors.border}`,
				boxShadow: active ? `0 0 ${30 * lit}px ${c}55` : 'none',
				transform: `scale(${bump(f, fps, on).toFixed(4)})`,
			}}
		>
			{label}
		</div>
	);
};

const FdrOpen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const t = flightT(f);
	const panelIn = sf(1) - 24;
	const end = sf(5) + 10;
	const alt = altFt(t);
	const psi = cabinPsi(t);
	// trace: the 60 s before the playhead, sampled at 0.25 s
	const tw = 60;
	const gx = 750;
	const gy = 150;
	const gw = 860;
	const gh = 360;
	const altY = (a: number) => gy + gh - ((Math.min(17000, Math.max(13000, a)) - 13000) / 4000) * gh;
	const pts: string[] = [];
	const redPts: string[] = [];
	const altPts: string[] = [];
	for (let k = 0; k <= 240; k++) {
		const tt = t - tw + (k / 240) * tw;
		if (tt < 0) continue;
		const v = cabinPsi(tt);
		const px = gx + (k / 240) * gw;
		const py = gy + gh - ((v - 7) / (15 - 7)) * gh;
		(tt <= EVENT_T ? pts : redPts).push(`${px.toFixed(1)},${py.toFixed(1)}`);
		altPts.push(`${px.toFixed(1)},${altY(altFt(tt)).toFixed(1)}`);
	}
	if (redPts.length && pts.length) redPts.unshift(pts[pts.length - 1]);
	const draw = tween(f, panelIn + 10, panelIn + 70, 0, 1, ease.draw);
	const dateO = envelope(f, 0, panelIn + 30, 1, 30);
	const rate = f >= F_EVENT ? '×0.25' : '×1.00';
	const shake = f >= F_EVENT ? Math.exp(-((f - F_EVENT) / fps) * 3) * Math.sin(((f - F_EVENT) / fps) * 2 * Math.PI * 9) * 6 : 0;

	// s0 · the date, said and built piece by piece
	const D = {day: wf(0, 'fifth'), month: wf(0, 'january'), cent: wf(0, 'twenty'), year: wf(0, 'twenty-four')};
	// s1 · the event time, the aircraft, the altitude, the place
	const E = {
		min: wf(1, 'twelve'),
		sec: wf(1, 'thirty-three'),
		hour: wf(1, 'five'),
		pm: wf(1, 'afternoon'),
		boeing: wf(1, 'boeing'),
		seven: wf(1, 'seven'),
		nine: wf(1, 'nine'),
		climbed: wf(1, 'climbed'),
		fourteen: wf(1, 'fourteen'),
		thousand: wf(1, 'thousand'),
		eight: wf(1, 'eight'),
		thirty: wf(1, 'thirty'),
		feet: wf(1, 'feet'),
		portland: wf(1, 'portland'),
		oregon: wf(1, 'oregon'),
	};
	// s2–s4 · the drop and the two recorded alarms
	const P = {cabin: wf(2, 'cabin'), pressure: wf(2, 'pressure'), dropped: wf(2, 'dropped'), altitude: wf(3, 'altitude'), one: wf(4, 'one'), second: wf(4, 'second'), master: wf(4, 'master')};

	const evMin = f >= E.min ? '12' : '--';
	const evSec = f >= E.sec ? '33' : '--';
	const evHour = f >= E.hour ? '17' : '--';
	// the NTSB's altitude at the drop, rolled onto the words that say it (C02: about 14,830 ft)
	const evAlt = Math.round(rollTo(f, [{frame: E.fourteen - 4, value: 14000}, {frame: E.thousand + LAND, value: 14000}, {frame: E.eight + LAND + 10, value: 14800}, {frame: E.thirty + LAND, value: 14830}], true));
	const markK = interpolate01(f, E.fourteen - 12, E.thirty + LAND);
	const markY = altY(14830);
	const oneSec = lead(f, P.second, 18);
	return (
		<>
			{/* s0 · the date, alone, before anything moves: each part on its word */}
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: dateO}}>
				<div style={{fontFamily: mono, fontSize: 92, fontWeight: 700, letterSpacing: 10, color: colors.ink, whiteSpace: 'nowrap'}}>
					<Arrive f={f} fps={fps} on={D.day}>05</Arrive>
					<span> </span>
					<Arrive f={f} fps={fps} on={D.month}>JAN</Arrive>
					<span> </span>
					<Arrive f={f} fps={fps} on={D.cent}>20</Arrive>
					<Arrive f={f} fps={fps} on={D.year} style={{color: f >= D.year ? colors.ink : colors.sub}}>
						24
					</Arrive>
				</div>
				<div style={{marginTop: 26, fontFamily: mono, fontSize: 26, letterSpacing: 5, color: colors.sub, opacity: tween(f, D.year + 10, D.year + 40, 0, 1)}}>ALASKA AIRLINES FLIGHT 1282 · BOEING 737-9 · N704AL</div>
			</AbsoluteFill>
			<Mount x={110} y={96} w={1700} h={860} source="DISPLAY REDRAWN FROM NTSB DOCKET DCA24MA063 · FDR TABULAR DATA, ATT. 1" tag="FDR" start={panelIn} end={end} lean={2} labels={['RECONSTRUCTION', 'PLAYBACK ' + rate]}>
				<div style={{position: 'absolute', inset: 0, transform: `translateX(${shake}px)`}}>
					{/* clock, and the event time built on "twelve minutes / thirty-three seconds / past five / afternoon" */}
					<Panel x={40} y={40} w={640} h={180} title="TIME · PST" on={E.min}>
						<div style={{position: 'absolute', left: 18, top: 56, fontFamily: mono, fontSize: 68, fontWeight: 700, color: colors.ink, fontVariantNumeric: 'tabular-nums'}}>{clockText(t)}</div>
						<div style={{position: 'absolute', left: 462, top: 44, fontFamily: mono, opacity: lead(f, E.min, 12)}}>
							<div style={{fontSize: 26, letterSpacing: 3, color: colors.amber}}>EVENT</div>
							<div style={{fontSize: 34, fontWeight: 700, color: colors.ink, fontVariantNumeric: 'tabular-nums', marginTop: 2}}>
								<span style={litStyle(f, E.hour, colors.ink)}>{evHour}</span>:<span style={litStyle(f, E.min, colors.amber)}>{evMin}</span>:<span style={litStyle(f, E.sec, colors.amber)}>{evSec}</span>
							</div>
							<div style={{fontSize: 26, letterSpacing: 3, marginTop: 4, opacity: lead(f, E.pm, 10), ...litStyle(f, E.pm, colors.ink)}}>5:12 PM</div>
						</div>
					</Panel>
					{/* altitude: lights on "climbed" */}
					<Panel
						x={40}
						y={250}
						w={640}
						h={300}
						title="PRESSURE ALTITUDE"
						on={E.climbed}
						right={<span style={{color: colors.cyan, fontSize: 22, display: 'inline-block', transform: `scale(${bump(f, fps, E.climbed + LAND).toFixed(4)})`, textShadow: `0 0 ${(16 * flash(f, E.climbed, 0)).toFixed(1)}px ${colors.cyan}`}}>CLIMBING</span>}
					>
						<div style={{position: 'absolute', left: 18, top: 60, fontFamily: mono, fontSize: 132, fontWeight: 700, color: colors.ink, fontVariantNumeric: 'tabular-nums', letterSpacing: -2}}>
							{Math.round(alt).toLocaleString('en-US')}
							<span style={{fontSize: 34, color: colors.sub, marginLeft: 14, letterSpacing: 2}}>FT</span>
						</div>
						<div style={{position: 'absolute', left: 22, top: 222, fontFamily: mono, fontSize: 26, color: colors.sub, fontVariantNumeric: 'tabular-nums', letterSpacing: 2}}>
							{Math.round(alt * 0.3048).toLocaleString('en-US')} M
						</div>
					</Panel>
					{/* cabin pressure: lights on "cabin", the reading is bracketed on "pressure", the status flips on "dropped" */}
					<Panel
						x={720}
						y={40}
						w={940}
						h={510}
						title="CABIN PRESSURE · CPC1"
						on={P.cabin}
						right={<StatusFlip f={f} fps={fps} word={P.dropped} from="NOMINAL" to="PRESSURE LOSS" toneFrom="cyan" toneTo="red" size={20} style={{padding: '2px 10px'}} />}
					>
						<div style={{position: 'absolute', left: 18, top: 52, fontFamily: mono, fontSize: 64, fontWeight: 700, color: f >= F_EVENT ? colors.red : colors.ink, fontVariantNumeric: 'tabular-nums'}}>
							{psi.toFixed(2)}
							<span style={{fontSize: 26, color: colors.sub, marginLeft: 10}}>PSI</span>
							<span style={{fontSize: 26, color: colors.sub, marginLeft: 22}}>{(psi * 6.89476).toFixed(1)} KPA</span>
						</div>
					</Panel>
					<svg width={1700} height={860} style={{position: 'absolute', left: 0, top: 0, opacity: draw}}>
						{[8, 10, 12, 14].map((v) => {
							const y = gy + gh - ((v - 7) / 8) * gh;
							return (
								<g key={v}>
									<line x1={gx} x2={gx + gw} y1={y} y2={y} stroke={colors.border} strokeWidth={1} />
									<text x={gx + gw + 10} y={y + 5} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={16}>
										{v}
									</text>
								</g>
							);
						})}
						<polyline points={altPts.join(' ')} fill="none" stroke={colors.sub} strokeWidth={2} strokeDasharray="6 5" opacity={0.7} />
						{/* the NTSB's altitude at the drop: an amber line that strokes across on "fourteen thousand … thirty" */}
						{markK > 0 ? (
							<g>
								<line x1={gx} x2={gx + gw * markK} y1={markY} y2={markY} stroke={colors.amber} strokeWidth={2} strokeDasharray="10 6" />
								<text x={gx + gw - 8} y={markY - 12} textAnchor="end" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26} letterSpacing={1} opacity={markK}>
									{evAlt.toLocaleString('en-US')}
									<tspan opacity={lead(f, E.feet, 8)}> FT · NTSB</tspan>
								</text>
							</g>
						) : null}
						<text x={gx + 8} y={gy + gh - 12} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={16} letterSpacing={2}>
							- - ALTITUDE 13,000–17,000 FT
						</text>
						<polyline points={pts.join(' ')} fill="none" stroke={colors.cyan} strokeWidth={3} strokeDasharray={4000} strokeDashoffset={4000 * (1 - draw)} />
						{redPts.length > 1 ? <polyline points={redPts.join(' ')} fill="none" stroke={colors.red} strokeWidth={4} /> : null}
						<line x1={gx + gw} x2={gx + gw} y1={gy - 10} y2={gy + gh + 10} stroke={colors.sub} strokeWidth={1} strokeDasharray="4 6" />
						<text x={gx} y={gy + gh + 34} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={16} letterSpacing={2}>
							−60 S
						</text>
						<text x={gx + gw - 44} y={gy + gh + 34} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={16} letterSpacing={2}>
							NOW
						</text>
					</svg>
					{/* annunciators: FDR discretes, drawn as plain tiles (not a cockpit panel) */}
					<div style={{position: 'absolute', left: 40, top: 590, fontFamily: mono, fontSize: 16, letterSpacing: 2.6, color: colors.sub}}>RECORDED DISCRETES</div>
					<Annunciator label="CABIN ALT WARNING" on={F_WARN} tone="red" x={40} y={625} />
					<Annunciator label="MASTER CAUTION" on={F_CAUT} tone="amber" x={400} y={625} />
					<svg width={1700} height={860} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
						<BracketLock f={f} fps={fps} word={P.pressure} x={730} y={92} w={300} h={84} tone="cyan" until={F_EVENT + 90} />
						<BracketLock f={f} fps={fps} word={P.altitude} x={40} y={625} w={330} h={74} tone="red" until={P.master} />
						<BracketLock f={f} fps={fps} word={P.master} x={400} y={625} w={330} h={74} tone="amber" until={end - 20} />
						{/* "one second later": the recorded interval between the two discretes */}
						{oneSec > 0 ? (
							<g opacity={oneSec}>
								<line x1={205} x2={205 + 360 * oneSec} y1={614} y2={614} stroke={colors.amber} strokeWidth={2} />
								<line x1={205} x2={205} y1={606} y2={622} stroke={colors.amber} strokeWidth={2} />
								<line x1={205 + 360 * oneSec} x2={205 + 360 * oneSec} y1={606} y2={622} stroke={colors.amber} strokeWidth={2} />
								<text x={385} y={604} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26} transform={`translate(385 596) scale(${bump(f, fps, P.second + LAND).toFixed(4)}) translate(-385 -596)`}>
									+1 S
								</text>
							</g>
						) : null}
					</svg>
					<div style={{position: 'absolute', left: 760, top: 592, width: 900, fontFamily: mono, fontSize: 26, letterSpacing: 1.4, color: '#cbd5e1', lineHeight: 1.5, opacity: tween(f, F_EVENT + 20, F_EVENT + 60, 0, 1)}}>
						<div>17:12:33 · CPC1 14.08 → 9.08 PSI IN 2 S</div>
						<div style={{color: colors.sub}}>NTSB: CLIMBING THROUGH ABOUT 14,830 FT</div>
					</div>
					{/* the aircraft and the place, each on its word */}
					<div style={{position: 'absolute', left: 40, top: 724, display: 'flex', gap: 22, alignItems: 'baseline', fontFamily: mono, fontSize: 30, fontWeight: 700, letterSpacing: 2.4, opacity: lead(f, E.boeing, 12)}}>
						<span style={litStyle(f, E.boeing)}>BOEING</span>
						<span style={{display: 'inline-block', transform: `scale(${bump(f, fps, E.nine + LAND).toFixed(4)})`}}>
							<span style={litStyle(f, E.seven, colors.cyan)}>737</span>
							<span style={litStyle(f, E.nine, colors.cyan)}>-9</span>
						</span>
						<span style={litStyle(f, E.nine + STAGGER)}>N704AL</span>
						<span style={{color: colors.sub}}>·</span>
						<span style={{color: colors.sub, opacity: lead(f, E.portland, 8)}}>OVER</span>
						<Arrive f={f} fps={fps} on={E.portland} style={litStyle(f, E.portland)}>
							PORTLAND,
						</Arrive>
						<Arrive f={f} fps={fps} on={E.oregon} style={litStyle(f, E.oregon)}>
							OREGON
						</Arrive>
					</div>
				</div>
			</Mount>
		</>
	);
};

/** 0 → 1 between two frames, clamped, on the pen's easing. */
function interpolate01(f: number, a: number, b: number): number {
	return tween(f, a, b, 0, 1, ease.draw);
}

const fdrCues = () => {
	const cues = [];
	for (let k = 0; k < 14; k++) cues.push({frame: sf(1) + k * 60, sfx: 'quartz_tick' as const, gainDb: -16});
	cues.push({frame: F_EVENT, sfx: 'pressure_drop' as const, gainDb: -6});
	cues.push({frame: F_WARN, sfx: 'cockpit_chime' as const, gainDb: -12});
	cues.push({frame: F_CAUT, sfx: 'cockpit_chime' as const, gainDb: -14});
	return cues;
};

// ---------- the crew's words (C06): the attribution on "captain" / "first officer", each quoted word on its own word
const WordQuote: React.FC<{words: {t: string; at: number}[]; who: string; whoAt: number; whereAt: number; start: number; end: number; x: number; y: number; w: number; size?: number}> = ({
	words,
	who,
	whoAt,
	whereAt,
	start,
	end,
	x,
	y,
	w,
	size = 70,
}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const o = envelope(f, start, end, 16, 16);
	const a = settle(f, fps, start);
	if (o <= 0) return null;
	const last = words[words.length - 1];
	return (
		<div style={{position: 'absolute', left: x, top: y + (1 - a) * 30, width: w, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '34px 40px 28px'}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: colors.amber, transform: `scaleY(${lead(f, whoAt, 14).toFixed(3)})`, transformOrigin: '50% 0'}} />
			<div style={{fontFamily: sans, fontWeight: 600, fontSize: size, lineHeight: 1.22, color: colors.ink, letterSpacing: -0.3, minHeight: size * 1.22}}>
				{words.map((wd, i) => (
					<Arrive key={i} f={f} fps={fps} on={wd.at} style={{marginRight: '0.26em'}}>
						{i === 0 ? '“' : ''}
						{wd.t}
						{wd === last ? '”' : ''}
					</Arrive>
				))}
			</div>
			<div style={{marginTop: 22, fontFamily: mono, fontSize: 26, letterSpacing: 2.6}}>
				<span style={{...litStyle(f, whoAt, colors.amber), opacity: lead(f, whoAt, 10)}}>{who}</span>
				<span style={{marginLeft: 16, color: colors.sub, opacity: lead(f, whereAt, 12)}}>AS REPORTED IN NTSB AIR-25-04</span>
			</div>
		</div>
	);
};

const Crew: React.FC = () => {
	const a = sf(5);
	const end = sf(7) + 6;
	const f = useFilmFrame();
	return (
		<>
			<Photo
				src={media('img/fig09_psu_doors_open.jpg')}
				iw={1133}
				ih={879}
				start={a - 10}
				end={end}
				source="NTSB AIR-25-04 · FIG. 9 · THE CABIN AFTER THE FLIGHT"
				tag="FIG. 9"
				from={{x: 0, y: 0, w: 1133, h: 879}}
				to={{x: 120, y: 60, w: 900, h: 700}}
				path={[
					{frame: a - 10, r: {x: 0, y: 0, w: 1133, h: 879}},
					{frame: wf(5, 'explosive') + 30, r: {x: 60, y: 30, w: 1000, h: 780}},
					{frame: wf(6, 'chaos') + 20, r: {x: 140, y: 80, w: 860, h: 660}},
					{frame: end, r: {x: 150, y: 90, w: 840, h: 640}},
				]}
			/>
			<AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(10,13,18,0.82) 0%, rgba(10,13,18,0.55) 55%, rgba(10,13,18,0.15) 100%)', opacity: envelope(f, a - 10, end, 16, 16)}} />
			<WordQuote
				words={[
					{t: 'an', at: wf(5, 'an')},
					{t: 'explosive', at: wf(5, 'explosive')},
					{t: 'experience', at: wf(5, 'experience')},
				]}
				who="THE CAPTAIN"
				whoAt={wf(5, 'captain')}
				whereAt={wf(5, 'describe')}
				start={a - 4}
				end={end}
				x={220}
				y={270}
				w={1060}
			/>
			<WordQuote
				words={[
					{t: 'it', at: wf(6, 'it')},
					{t: 'was', at: wf(6, 'was')},
					{t: 'chaos', at: wf(6, 'chaos')},
				]}
				who="THE FIRST OFFICER"
				whoAt={wf(6, 'first')}
				whereAt={wf(6, 'said')}
				start={sf(6) - 4}
				end={end}
				x={220}
				y={590}
				w={1060}
			/>
		</>
	);
};

// ---------- the hole (C70, C09): an NTSB photograph, unaltered; the camera goes where the words go
const EXT = {w: 3200, h: 2133};
const SIDE = {x: 0, y: 300, w: 3200, h: 1530};
const WING = {x: 0, y: 1150, w: 1700, h: 810};
const HOLE = {x: 780, y: 600, w: 1680, h: 805};
const Hole: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(7) - 10;
	const b = sf(9) - 8;
	const H = {
		behind: wf(7, 'behind'),
		wing: wf(7, 'wing'),
		left: wf(7, 'left'),
		side: wf(7, 'side'),
		there: wf(7, 'there'),
		hole: wf(7, 'hole'),
		fuselage: wf(7, 'fuselage'),
		rect: wf(8, 'rectangle'),
		w29: wf(8, 'twenty-nine'),
		inW: wf(8, 'inches'),
		wide: wf(8, 'wide'),
		h59: wf(8, 'fifty-nine'),
		inH: wf(8, 'inches', 1),
		high: wf(8, 'high'),
	};
	const rectK = lead(f, H.rect, 22);
	const wK = lead(f, H.w29, 18);
	const hK = lead(f, H.h59, 18);
	const n29 = Math.round(rollTo(f, [{frame: H.w29 - 16, value: 0}, {frame: H.w29 + LAND, value: 29}], true));
	const n59 = Math.round(rollTo(f, [{frame: H.h59 - 16, value: 0}, {frame: H.h59 + LAND, value: 59}], true));
	const capO = envelope(f, H.wing - 10, H.rect - 4, 10, 12);
	return (
		<>
			<Photo
				src={media('img/flickr_53449315887.jpg')}
				iw={EXT.w}
				ih={EXT.h}
				start={a}
				end={b + 10}
				source="N704AL AFTER THE ACCIDENT · NTSB PHOTO (PUBLIC DOMAIN)"
				tag="PHOTO"
				from={SIDE}
				to={HOLE}
				path={[
					{frame: a, r: SIDE},
					{frame: H.behind, r: {x: 0, y: 380, w: 3000, h: 1434}},
					{frame: H.wing + 14, r: WING},
					{frame: H.left, r: WING},
					{frame: H.side + 18, r: SIDE},
					{frame: H.there, r: SIDE},
					{frame: H.hole + 10, r: HOLE},
					{frame: b + 10, r: {x: 830, y: 625, w: 1590, h: 762}},
				]}
			>
				{({sx, sy}) => {
					const x0 = sx(1455);
					const x1 = sx(1790);
					const y0 = sy(705);
					const y1 = sy(1305);
					const per = 2 * (x1 - x0 + (y1 - y0));
					return (
						<svg width={1620} height={776} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
							{/* "behind the wing": the wing root lights in cyan; "hole": a red bracket locks on the opening */}
							<BracketLock f={f} fps={fps} arm={30} word={H.wing} x={sx(40)} y={sy(1420)} w={sx(900) - sx(40)} h={sy(1900) - sy(1420)} tone="cyan" until={H.side} />
							<BracketLock f={f} fps={fps} arm={30} word={H.hole} x={x0} y={y0} w={x1 - x0} h={y1 - y0} tone="red" until={H.rect + 8} />
							{rectK > 0 ? <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill="none" stroke={colors.red} strokeWidth={3} strokeDasharray={per} strokeDashoffset={per * (1 - rectK)} /> : null}
							{wK > 0 ? (
								<g>
									<line x1={x0} x2={x0 + (x1 - x0) * wK} y1={y0 - 26} y2={y0 - 26} stroke={colors.amber} strokeWidth={3} />
									<text x={(x0 + x1) / 2} y={y0 - 40} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={30} opacity={wK} stroke={colors.void} strokeWidth={8} paintOrder="stroke" strokeLinejoin="round" transform={`translate(${(x0 + x1) / 2} ${y0 - 50}) scale(${bump(f, fps, H.wide + LAND).toFixed(4)}) translate(${-(x0 + x1) / 2} ${-(y0 - 50)})`}>
										{n29} IN<tspan opacity={lead(f, H.inW, 8)}> · 74 CM</tspan>
									</text>
								</g>
							) : null}
							{hK > 0 ? (
								<g>
									<line x1={x0 - 26} x2={x0 - 26} y1={y0} y2={y0 + (y1 - y0) * hK} stroke={colors.amber} strokeWidth={3} />
									<text x={x0 - 48} y={(y0 + y1) / 2} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={30} opacity={hK} stroke={colors.void} strokeWidth={8} paintOrder="stroke" strokeLinejoin="round" transform={`rotate(-90 ${x0 - 48} ${(y0 + y1) / 2}) translate(${x0 - 48} ${(y0 + y1) / 2}) scale(${bump(f, fps, H.high + LAND).toFixed(4)}) translate(${-(x0 - 48)} ${-(y0 + y1) / 2})`}>
										{n59} IN<tspan opacity={lead(f, H.inH, 8)}> · 150 CM</tspan>
									</text>
								</g>
							) : null}
						</svg>
					);
				}}
			</Photo>
			{/* the place, said and shown: BEHIND THE WING on "wing", then LEFT SIDE on "left" */}
			<div style={{position: 'absolute', left: 72, top: 960, opacity: capO, fontFamily: mono, fontSize: 30, letterSpacing: 3, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', whiteSpace: 'nowrap', display: 'flex', gap: 18}}>
				<span style={litStyle(f, H.wing, colors.cyan)}>BEHIND THE WING</span>
				<span style={{opacity: lead(f, H.left, 8), ...litStyle(f, H.left, colors.ink)}}>· LEFT SIDE</span>
				<span style={{opacity: lead(f, H.fuselage, 8), ...litStyle(f, H.fuselage, colors.red)}}>· FUSELAGE</span>
			</div>
			<div style={{position: 'absolute', left: 72, top: 960, opacity: envelope(f, H.high - 4, b, 12, 14), fontFamily: mono, fontSize: 30, letterSpacing: 3, color: colors.amber, background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', whiteSpace: 'nowrap'}}>
				MID EXIT DOOR PLUG · APPROX. OUTLINE
			</div>
		</>
	);
};

// ---------- the empty seats (C08): NTSB Fig. 1, its own seat labels; "two" locks two seat chips, "empty" flips them
const Seats: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(9) - 14;
	const end = sf(10) + 8;
	const S = {two: wf(9, 'two'), seats: wf(9, 'seats'), beside: wf(9, 'beside'), empty: wf(9, 'empty')};
	const FULL = {x: 0, y: 0, w: 1430, h: 848};
	return (
		<>
			<Photo
				src={media('img/fig01_interior_hole_row26.jpg')}
				iw={1430}
				ih={848}
				start={a}
				end={end}
				source="NTSB AIR-25-04 · FIG. 1 · ROW 26, LEFT SIDE"
				tag="FIG. 1"
				from={FULL}
				to={FULL}
				path={[
					{frame: a, r: FULL},
					{frame: S.seats + 16, r: {x: 0, y: 0, w: 1430, h: 685}},
					{frame: end, r: {x: 40, y: 0, w: 1300, h: 622}},
				]}
			>
				{({sx, sy}) => (
					<svg width={1620} height={776} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
						<BracketLock f={f} fps={fps} arm={30} word={S.seats} x={sx(180)} y={sy(120)} w={sx(420) - sx(180)} h={sy(480) - sy(120)} tone="cyan" />
						<BracketLock f={f} fps={fps} arm={30} word={S.beside} x={sx(430)} y={sy(50)} w={sx(770) - sx(430)} h={sy(500) - sy(50)} tone="red" />
					</svg>
				)}
			</Photo>
			<div style={{position: 'absolute', left: 190, top: 790, display: 'flex', gap: 18, opacity: envelope(f, S.two - 10, end, 10, 14)}}>
				{['26A', '26B'].map((id, i) => {
					const on = S.two + i * STAGGER;
					const k = lead(f, on, 8);
					return (
						<div key={id} style={{opacity: k, transform: `translateY(${((1 - k) * 14).toFixed(1)}px)`, background: colors.card, padding: 6}}>
							<StatusFlip f={f} fps={fps} word={S.empty + i * 4} from={`SEAT ${id}`} to={`${id} UNOCCUPIED`} toneFrom="ink" toneTo="cyan" size={30} />
						</div>
					);
				})}
			</div>
		</>
	);
};

// ---------- back on the ground (C04, C05): the real GPS track
const Track: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(10) - 10;
	const end = sf(13) + 6;
	const T = {
		fourteen: wf(10, 'fourteen'),
		minutes: wf(10, 'minutes'),
		later: wf(10, 'later'),
		alaska: wf(10, 'alaska'),
		twelve: wf(10, 'twelve'),
		eightyTwo: wf(10, 'eighty-two'),
		back: wf(10, 'back'),
		ground: wf(10, 'ground'),
		portland: wf(10, 'portland'),
		eight: wf(11, 'eight'),
		minor: wf(11, 'minor'),
		injuries: wf(11, 'injuries'),
		one: wf(12, 'one'),
		seriously: wf(12, 'seriously'),
	};
	const box = {x: 110, y: 96, w: 1700, h: 860};
	const i0 = Math.floor(GEAR_AIR_T) - 40;
	const i1 = Math.min(latArr.length - 1, Math.ceil(GEAR_GROUND_T) + 30);
	const lat0 = 45.55;
	const kx = Math.cos((lat0 * Math.PI) / 180);
	let minX = Infinity;
	let maxX = -Infinity;
	let minY = Infinity;
	let maxY = -Infinity;
	for (let i = i0; i <= i1; i++) {
		const x = lonArr[i] * kx;
		const y = latArr[i];
		minX = Math.min(minX, x);
		maxX = Math.max(maxX, x);
		minY = Math.min(minY, y);
		maxY = Math.max(maxY, y);
	}
	const W = 1100;
	const H = 680;
	const s = Math.min(W / (maxX - minX), H / (maxY - minY));
	const px = (i: number) => 60 + (lonArr[i] * kx - minX) * s + (W - (maxX - minX) * s) / 2;
	const py = (i: number) => 60 + (maxY - latArr[i]) * s + (H - (maxY - minY) * s) / 2;
	// the track runs from take-off and touches down on "ground" (gear-on-ground discrete, C04)
	const tLand = GEAR_GROUND_T;
	const tAt = rollTo(f, [{frame: a + 20, value: i0}, {frame: T.ground + LAND, value: tLand}, {frame: end, value: i1}]);
	const t = Math.min(i1, tAt);
	const head = Math.round(t);
	const path: string[] = [];
	const red: string[] = [];
	for (let i = i0; i <= head; i++) (i <= EVENT_T ? path : red).push(`${px(i).toFixed(1)},${py(i).toFixed(1)}`);
	if (red.length) red.unshift(path[path.length - 1]);
	const injuries = Math.round(rollTo(f, [{frame: T.eight - 16, value: 0}, {frame: T.eight + LAND, value: 8}], true));
	const pdx = {x: px(i0), y: py(i0)};
	return (
		<Mount x={box.x} y={box.y} w={box.w} h={box.h} source="TRACK DRAWN FROM NTSB DOCKET DCA24MA063 · FDR GPS POSITION, ATT. 1" tag="FDR" start={a} end={end} lean={2} labels={['RECONSTRUCTION']}>
			<svg width={box.w} height={box.h - 34} style={{position: 'absolute', left: 0, top: 0}}>
				<polyline points={path.join(' ')} fill="none" stroke={colors.cyan} strokeWidth={3} />
				{red.length > 1 ? <polyline points={red.join(' ')} fill="none" stroke={colors.amber} strokeWidth={3} /> : null}
				<circle cx={pdx.x} cy={pdx.y} r={7} fill={colors.ink} />
				<text x={pdx.x + 16} y={pdx.y + 8} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={2} fill={f >= T.portland ? colors.cyan : colors.ink} stroke={colors.card} strokeWidth={10} paintOrder="stroke" strokeLinejoin="round">
					PORTLAND INTL · PDX
				</text>
				<BracketLock f={f} fps={fps} word={T.portland} x={pdx.x - 18} y={pdx.y - 18} w={36} h={36} tone="cyan" />
				{head >= EVENT_T ? (
					<g>
						<circle cx={px(EVENT_T)} cy={py(EVENT_T)} r={10} fill="none" stroke={colors.red} strokeWidth={3} />
						<text x={px(EVENT_T) + 18} y={py(EVENT_T) - 12} fill={colors.red} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={2} stroke={colors.card} strokeWidth={10} paintOrder="stroke" strokeLinejoin="round">
							17:12:33 · PLUG SEPARATES
						</text>
					</g>
				) : null}
				<circle cx={px(head)} cy={py(head)} r={7} fill={t >= tLand ? colors.ink : colors.amber} />
			</svg>
			<div style={{position: 'absolute', left: 1250, top: 44, width: 420, fontFamily: mono, color: colors.ink}}>
				{/* "Alaska Airlines flight twelve eighty-two": the flight lights, its number lands in two parts */}
				<div style={{fontSize: 26, letterSpacing: 2.6, opacity: lead(f, T.alaska, 10), ...litStyle(f, T.alaska)}}>ALASKA AIRLINES</div>
				<div style={{fontSize: 40, fontWeight: 700, letterSpacing: 2, marginTop: 2, display: 'flex', gap: 14}}>
					<span style={{opacity: lead(f, T.alaska + 20, 10), color: colors.sub}}>FLIGHT</span>
					<span>
						<Arrive f={f} fps={fps} on={T.twelve} style={{color: colors.ink}}>
							12
						</Arrive>
						<Arrive f={f} fps={fps} on={T.eightyTwo} style={{color: colors.ink}}>
							82
						</Arrive>
					</span>
				</div>
				<div style={{fontSize: 22, letterSpacing: 2.6, color: colors.sub, marginTop: 24}}>TIME · PST</div>
				<div style={{fontSize: 52, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>{clockText(Math.min(t, GEAR_GROUND_T + 5))}</div>
				<div style={{fontSize: 22, letterSpacing: 2.6, color: colors.sub, marginTop: 14}}>PRESSURE ALTITUDE</div>
				<div style={{fontSize: 40, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>
					{Math.max(0, Math.round(altArr[Math.min(head, altArr.length - 1)])).toLocaleString('en-US')} <span style={{fontSize: 26, color: colors.sub}}>FT</span>
				</div>
				<div style={{marginTop: 20}}>
					<StatusFlip f={f} fps={fps} word={T.ground} from="RETURNING" to="LANDED 17:26:46" toneFrom="amber" toneTo="cyan" size={28} />
				</div>
				{/* "Fourteen minutes later": the interval locks on its first word */}
				<div style={{marginTop: 18, display: 'flex', alignItems: 'baseline', gap: 12, opacity: lead(f, T.fourteen, 8)}}>
					<span style={{fontSize: 40, fontWeight: 700, color: colors.amber, display: 'inline-block', transform: `scale(${bump(f, fps, T.fourteen + LAND).toFixed(4)})`, transformOrigin: '0 60%'}}>+14</span>
					<span style={{fontSize: 26, letterSpacing: 2, opacity: lead(f, T.minutes, 8), ...litStyle(f, T.minutes, colors.amber)}}>MIN</span>
					<span style={{fontSize: 26, letterSpacing: 1.4, color: colors.sub, opacity: lead(f, T.later, 10)}}>AFTER 17:12:33</span>
				</div>
				<div style={{marginTop: 28, opacity: lead(f, T.eight, 12)}}>
					<div style={{fontSize: 22, letterSpacing: 2.6, color: colors.sub}}>INJURIES · NTSB</div>
					<div style={{display: 'flex', gap: 40, marginTop: 6}}>
						<div>
							<div style={{fontSize: 56, fontWeight: 700, color: colors.amber, fontVariantNumeric: 'tabular-nums', display: 'inline-block', transform: `scale(${bump(f, fps, T.eight + LAND).toFixed(4)})`}}>{injuries}</div>
							<div style={{fontSize: 26, letterSpacing: 2, ...litStyle(f, T.minor, colors.amber)}}>MINOR</div>
						</div>
						<div style={{opacity: lead(f, T.one, 10)}}>
							<div style={{fontSize: 56, fontWeight: 700, color: colors.ink, display: 'inline-block', transform: `scale(${bump(f, fps, T.one + LAND).toFixed(4)})`}}>0</div>
							<div style={{fontSize: 26, letterSpacing: 2, ...litStyle(f, T.seriously, colors.ink)}}>SERIOUS</div>
						</div>
					</div>
					<div style={{fontSize: 26, letterSpacing: 1.4, color: colors.ink, marginTop: 10, lineHeight: 1.35, opacity: lead(f, T.injuries, 12)}}>
						<div>1 FLIGHT ATTENDANT</div>
						<div>7 PASSENGERS</div>
					</div>
				</div>
			</div>
		</Mount>
	);
};

// ---------- no voices; paper (C07, C82, C51)
const Paper: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(13) - 10;
	const C = {
		no: wf(13, 'no'),
		recording: wf(13, 'recording'),
		said: wf(13, 'said'),
		cockpit: wf(13, 'cockpit'),
		recorder: wf(14, 'recorder'),
		running: wf(14, 'running'),
		landing: wf(14, 'landing'),
		recorded: wf(14, 'recorded'),
		flight: wf(14, 'flight'),
		investigation: wf(15, 'investigation'),
		not: wf(15, 'not'),
		voices: wf(15, 'voices'),
		built: wf(16, 'built'),
		paper: wf(16, 'paper'),
		paper2: wf(17, 'paper'),
		leads: wf(17, 'leads'),
	};
	const pIn = C.built - 8;
	const end = wf(17, 'photograph') + 24;
	const cvrO = envelope(f, a, pIn + 20, 16, 20);
	// the recording as a tape: ACCIDENT FLIGHT, then AFTER LANDING. ILLUSTRATION · NOT TO SCALE.
	const bx = 30;
	const bw = 1140;
	const split = 700;
	const flat = lead(f, C.said, 40);
	const headX = rollTo(f, [{frame: C.recorder, value: split}, {frame: C.running, value: split}, {frame: C.landing + 30, value: bw - 6}, {frame: C.recorded - 2, value: bw - 6}, {frame: C.recorded + 6, value: 0}, {frame: C.flight + LAND, value: split}]);
	const wrapped = f >= C.recorded + 6;
	const over = wrapped ? headX : 0;
	const drop = beat(f, C.voices, 24);
	const strike = lead(f, C.not, 20);
	return (
		<>
			<AbsoluteFill style={{opacity: cvrO * (1 - 0.55 * drop), transform: `translateY(${(drop * 40).toFixed(1)}px)`}}>
				<div style={{position: 'absolute', left: 360, top: 220, fontFamily: mono, fontSize: 26, letterSpacing: 3, opacity: lead(f, C.investigation, 12), ...litStyle(f, C.investigation, colors.ink)}}>NTSB INVESTIGATION · DCA24MA063</div>
				<div style={{position: 'absolute', left: 360, top: 280, width: 1200, height: 420, background: colors.card, border: `1px solid ${colors.border}`}}>
					<div style={{position: 'absolute', left: 30, top: 24, fontFamily: mono, fontSize: 26, letterSpacing: 3, ...litStyle(f, C.recording, colors.ink)}}>
						COCKPIT VOICE RECORDER
						<div style={{position: 'absolute', left: -6, right: -6, top: 16, height: 3, background: colors.red, transform: `scaleX(${strike.toFixed(3)})`, transformOrigin: '0 50%'}} />
					</div>
					<div style={{position: 'absolute', right: 30, top: 26, fontFamily: mono, fontSize: 20, letterSpacing: 2.4, color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'}}>ILLUSTRATION · NOT TO SCALE</div>
					<svg width={bw + 20} height={150} style={{position: 'absolute', left: bx, top: 80, overflow: 'visible'}}>
						{/* the two stretches of the recording */}
						<rect x={0} y={30} width={split} height={60} fill="rgba(56,189,248,0.06)" stroke={f >= C.cockpit ? colors.cyan : colors.border} strokeWidth={f >= C.cockpit ? 2 : 1} />
						<rect x={split} y={30} width={bw - split} height={60} fill="rgba(245,158,11,0.06)" stroke={f >= C.landing ? colors.amber : colors.border} strokeWidth={f >= C.landing ? 2 : 1} />
						{/* no audio: a flat line, drawn on "said" */}
						<line x1={0} x2={split * flat} y1={60} y2={60} stroke={colors.sub} strokeWidth={2} />
						{/* "recorded over the flight": the overwrite runs back over the flight's stretch */}
						{over > 0 ? <rect x={0} y={30} width={Math.min(split, over)} height={60} fill={colors.red} opacity={0.42} /> : null}
						{f >= C.recorder ? <line x1={headX} x2={headX} y1={18} y2={102} stroke={colors.ink} strokeWidth={3} opacity={lead(f, C.recorder, 8)} /> : null}
						<text x={split} y={18} textAnchor="middle" fontFamily="JetBrains Mono" fontSize={24} letterSpacing={2} fill={colors.amber} opacity={lead(f, C.landing, 8)}>
							▲ LANDING 17:26:46
						</text>
					</svg>
					<div style={{position: 'absolute', left: bx, top: 184, fontFamily: mono, fontSize: 26, letterSpacing: 2.4, opacity: lead(f, C.cockpit, 10)}}>
						<StatusFlip f={f} fps={fps} word={C.flight} from="ACCIDENT FLIGHT" to="OVERWRITTEN" toneFrom="cyan" toneTo="red" size={24} style={{padding: '2px 10px', background: f >= C.flight ? colors.red : 'rgba(10,13,18,0.85)'}} />
					</div>
					<div style={{position: 'absolute', left: bx + split + 4, top: 188, fontFamily: mono, fontSize: 24, letterSpacing: 2.4, color: colors.amber, opacity: lead(f, C.running, 10)}}>AFTER LANDING</div>
					<div style={{position: 'absolute', left: 30, top: 270, fontFamily: mono, fontSize: 40, fontWeight: 700, letterSpacing: 4, color: colors.ink, whiteSpace: 'nowrap'}}>
						<Arrive f={f} fps={fps} on={C.no}>
							NO AUDIO
						</Arrive>
						<span style={{opacity: lead(f, C.cockpit, 12)}}> FROM THE ACCIDENT FLIGHT</span>
					</div>
					<div style={{position: 'absolute', left: 30, top: 340, fontFamily: mono, fontSize: 26, letterSpacing: 2, color: colors.sub, opacity: lead(f, C.recorder, 14)}}>RECORDING CONTINUED AFTER LANDING · NTSB AIR-25-04</div>
				</div>
			</AbsoluteFill>
			{f >= pIn - 4 ? (
				<Fade start={pIn} end={end}>
					{/* "built on paper": the report's title page; on "leads" it slides aside toward the photograph */}
					<AbsoluteFill style={{transform: `translateX(${(-180 * beat(f, C.paper2, 50)).toFixed(1)}px) scale(${(1 - 0.2 * beat(f, C.paper2, 50)).toFixed(4)})`}}>
						<Exhibit page={{w: 1870, h: 2420}} start={pIn} push={{from: C.paper - 10, to: C.paper2 + 40, focus: {x: 60, y: 120, w: 1750, h: 1000}}} highlights={phrases.title_block.rects.map((r) => ({...r, start: C.paper - 15, draw: 24}))} label="EXHIBIT 01" source="NTSB AIR-25-04 · ADOPTED 24 JUNE 2025">
							<Img src={media('pages/p001_title.jpg')} style={{width: 1870, height: 2420}} />
						</Exhibit>
					</AbsoluteFill>
				</Fade>
			) : null}
		</>
	);
};

// ---------- the photograph, 108 days earlier (C69, C35): the open loop, named with the minute it lands
export const PendingExhibit: React.FC<{start: number; end: number; small?: boolean}> = ({start, end, small = false}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const o = envelope(f, start, end, 18, 18);
	if (o <= 0) return null;
	if (small) {
		// the open loop kept in view, quietly: one line, top right, until the photograph is in evidence
		return (
			<div style={{position: 'absolute', right: 72, top: 34, opacity: o * 0.9, fontFamily: mono, fontSize: 17, letterSpacing: 2.4, color: colors.sub, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 10}}>
				<span style={{width: 14, height: 10, border: `1px dashed ${colors.amber}`}} />
				<span style={{color: colors.amber}}>PENDING</span>
				<span>EXHIBIT · PHOTOGRAPH · 19 SEP 2023</span>
			</div>
		);
	}
	const L = {leads: wf(17, 'leads'), photo: wf(17, 'photograph'), taken: wf(17, 'taken'), factory: wf(17, 'factory'), shows: wf(18, 'shows'), exactly: wf(18, 'exactly'), missing: wf(18, 'missing'), come: wf(19, 'come'), five: wf(19, 'five')};
	// "We will come to it": the envelope starts toward the corner where it waits for the rest of the film
	const away = beat(f, L.come, 70);
	// "the paper leads to a photograph": the envelope slides in from the right on "leads" and lands on "photograph"
	const slideIn = 1 - lead(f, L.photo, L.photo - L.leads);
	return (
		<div style={{position: 'absolute', left: 1120, top: 210, width: 600, opacity: o, transform: `translate(${(away * 40 + slideIn * 420).toFixed(1)}px, ${(-away * 60).toFixed(1)}px) scale(${((1 - 0.16 * away) * bump(f, fps, L.photo + LAND, 0.05)).toFixed(4)})`, transformOrigin: '50% 50%'}}>
			<div style={{width: 600, height: 380, background: '#c9b48a', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.6)', transform: `rotate(${-2 + tween(f, start, end, 0, 1.2)}deg) translateY(${tween(f, start, end, 0, -14)}px)`, overflow: 'hidden'}}>
				{/* "It shows": a sheen crosses the envelope on the verb */}
				<div style={{position: 'absolute', top: 0, bottom: 0, width: 160, left: tween(f, L.shows - 6, L.shows + 60, -200, 760), background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.22), rgba(255,255,255,0))'}} />
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 120, background: '#b9a274', clipPath: 'polygon(0 0, 100% 0, 50% 100%)'}} />
				<div style={{position: 'absolute', left: 40, top: 150, right: 40, fontFamily: mono, color: '#2a2216'}}>
					<div style={{fontSize: 26, fontWeight: 700, letterSpacing: 4}}>EXHIBIT · PHOTOGRAPH</div>
					<div style={{fontSize: 26, letterSpacing: 2, marginTop: 12, opacity: lead(f, L.taken, 10)}}>19 SEP 2023 · ABOUT 18:39</div>
					<div style={{fontSize: 26, letterSpacing: 2, marginTop: 6, opacity: lead(f, L.factory, 10)}}>BOEING · RENTON, WASHINGTON</div>
					<div style={{fontSize: 22, letterSpacing: 2, marginTop: 16, color: '#4a3d28'}}>NTSB AIR-25-04 · FIG. 18</div>
				</div>
			</div>
			<svg width={600} height={380} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<BracketLock f={f} fps={fps} word={L.exactly} x={-12} y={-12} w={624} h={404} tone="cyan" until={L.come} />
			</svg>
			<Stamp text="SEALED" start={L.missing + LAND} x={440} y={86} rot={-8} tone="red" size={40} />
			<div style={{position: 'absolute', left: 0, top: 404}}>
				<StatusFlip f={f} fps={fps} word={L.five} from="WHAT WAS MISSING" to="IN ABOUT 5 MIN" toneFrom="red" toneTo="amber" size={28} style={{opacity: lead(f, L.missing, 10), background: f >= L.five ? colors.amber : 'rgba(10,13,18,0.85)'}} />
			</div>
		</div>
	);
};

const Loop: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = wf(17, 'leads') - 10;
	const end = sf(20) + 10;
	const L = {one: wf(17, 'one'), eight: wf(17, 'eight'), days: wf(17, 'days'), before: wf(17, 'before'), afternoon: wf(17, 'afternoon')};
	// "one hundred and eight days": the bar runs and its counter lands on 108 on "eight"
	const bar = tween(f, L.one - 14, L.eight + LAND, 0, 1, ease.draw);
	const days = Math.round(rollTo(f, [{frame: L.one - 14, value: 0}, {frame: L.eight + LAND, value: 108}], true));
	const x0 = 260;
	const x1 = 1660;
	const tlO = lead(f, L.one, 16);
	return (
		<>
			<PendingExhibit start={wf(17, 'leads') - 6} end={end} />
			<Fade start={a} end={end}>
				<div style={{position: 'absolute', left: x0 - 20, top: 760, width: x1 - x0 + 40, height: 170, background: colors.card, border: `1px solid ${colors.border}`, opacity: tlO}} />
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: tlO}}>
					<line x1={x0} x2={x0 + (x1 - x0) * bar} y1={826} y2={826} stroke={colors.amber} strokeWidth={3} />
					<circle cx={x0} cy={826} r={10} fill={colors.amber} />
					<circle cx={x1} cy={826} r={10} fill={f >= L.afternoon ? colors.red : colors.border} />
					<text x={x0} y={884} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={2} fill={f >= L.before ? colors.amber : colors.ink}>
						19 SEP 2023 · RENTON
					</text>
					<text x={x1} y={884} textAnchor="end" fontFamily="JetBrains Mono" fontSize={26} letterSpacing={2} fill={f >= L.afternoon ? colors.red : colors.ink}>
						05 JAN 2024 · PORTLAND
					</text>
					<g transform={`translate(${(x0 + x1) / 2} 800) scale(${bump(f, fps, L.days + LAND).toFixed(4)})`}>
						<text x={0} y={0} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={34} letterSpacing={4}>
							{days}
							<tspan opacity={lead(f, L.days, 8)}> DAYS</tspan>
						</text>
					</g>
				</svg>
			</Fade>
		</>
	);
};

// ---------- every layer (framing, no new fact): the question, built on its words
const Layers: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(20) - 10;
	const end = ef(22) + 70;
	const Q = {
		question: wf(20, 'question'),
		never: wf(20, 'never'),
		why: wf(20, 'why'),
		door: wf(20, 'door'),
		plug: wf(20, 'plug'),
		failed: wf(20, 'failed'),
		why2: wf(21, 'why'),
		every: wf(21, 'every'),
		built: wf(21, 'built'),
		stop: wf(21, 'stop'),
		failed2: wf(21, 'failed'),
		first: wf(21, 'first'),
	};
	const ask = [
		{t: 'WHERE', at: wf(22, 'where')},
		{t: 'DID', at: wf(22, 'did')},
		{t: 'THE', at: wf(22, 'the')},
		{t: 'MARGIN', at: wf(22, 'margin')},
		{t: 'OF', at: wf(22, 'of')},
		{t: 'ERROR', at: wf(22, 'error')},
		{t: 'RUN', at: wf(22, 'run')},
		{t: 'OUT?', at: wf(22, 'out')},
	];
	const titles = ['THE BOLTS', 'THE REMOVAL RECORD', 'THE INSPECTION', 'THE REGULATOR'];
	// the red thread runs through the four layers on "failed" and has crossed them all by "first"
	const thread = tween(f, Q.failed2 - 10, Q.first + 10, 0, 1, ease.draw);
	const o = envelope(f, a, end, 18, 24);
	const dim = 1 - 0.45 * tween(f, ask[0].at - 10, ask[0].at + 20, 0, 1);
	const plugK = lead(f, Q.door, 12);
	const plugRed = f >= Q.failed + LAND;
	return (
		<AbsoluteFill style={{opacity: o}}>
			{/* "The question was never only why…" */}
			<div style={{position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'center', fontFamily: mono, fontSize: 30, letterSpacing: 4, lineHeight: 1.6, opacity: dim}}>
				<span style={{opacity: lead(f, Q.question, 10), ...litStyle(f, Q.question, colors.ink)}}>THE QUESTION</span>
				<span style={{opacity: lead(f, Q.never, 10), color: colors.amber}}> · NOT ONLY</span>
				<span style={{opacity: lead(f, Q.why, 10), color: colors.ink}}> WHY THE PLUG FAILED</span>
				<div style={{opacity: lead(f, Q.why2, 10), color: colors.red}}>WHY EVERY LAYER FAILED FIRST</div>
			</div>
			<div style={{position: 'absolute', inset: 0, perspective: 1400, opacity: dim}}>
				<div style={{position: 'absolute', left: 0, top: 70, width: 1920, height: 760, transformStyle: 'preserve-3d', transform: `rotateY(${-26 + tween(f, a, end, 0, 5)}deg) translateX(-40px)`}}>
					{titles.map((t, i) => {
						const inF = Q.every + i * STAGGER;
						const k = settle(f, 60, inF - 6);
						const cyan = f >= Q.built;
						const ringOn = Q.stop + i * 6;
						const ringRed = f >= Q.failed2 + 4 + i * 7;
						const allRed = f >= Q.first + LAND;
						return (
							<div
								key={t}
								style={{
									position: 'absolute',
									left: 250 + i * 300,
									top: 170,
									width: 270,
									height: 400,
									border: `2px solid ${allRed ? colors.red : cyan ? colors.cyan : colors.border}`,
									background: 'rgba(18,24,36,0.92)',
									transform: `translateZ(${-i * 40}px) translateY(${((1 - k) * 40).toFixed(1)}px) scale(${bump(f, fps, Q.first + LAND, 0.05).toFixed(4)})`,
									opacity: f < inF - 8 ? 0 : k,
								}}
							>
								<div style={{position: 'absolute', left: 103, top: 180 + i * 6, width: 64, height: 64, borderRadius: 32, background: colors.void, border: `3px solid ${ringRed ? colors.red : f >= ringOn ? colors.cyan : colors.border}`, boxShadow: f >= ringOn && !ringRed ? `0 0 ${(18 * flash(f, ringOn, 0.2)).toFixed(1)}px ${colors.cyan}` : 'none'}} />
								<div style={{position: 'absolute', left: 18, top: 18, right: 14, fontFamily: mono, fontSize: 26, fontWeight: 700, lineHeight: 1.25, letterSpacing: 1.4, color: colors.ink}}>{t}</div>
							</div>
						);
					})}
					{/* the door plug: lights on "door plug", turns red on "failed" */}
					<div
						style={{
							position: 'absolute',
							left: 1470,
							top: 200,
							width: 200,
							height: 340,
							border: `3px solid ${plugRed ? colors.red : colors.cyan}`,
							borderRadius: 18,
							background: plugRed ? 'rgba(239,68,68,0.12)' : 'rgba(56,189,248,0.06)',
							transform: `translateZ(-200px) scale(${bump(f, fps, Q.failed + LAND).toFixed(4)})`,
							opacity: plugK,
						}}
					>
						<div style={{position: 'absolute', left: 14, top: 14, right: 10, fontFamily: mono, fontSize: 26, fontWeight: 700, lineHeight: 1.2, color: plugRed ? colors.red : colors.ink}}>THE DOOR PLUG</div>
					</div>
				</div>
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={200} x2={200 + 1420 * thread} y1={468} y2={468 + 20 * thread} stroke={colors.red} strokeWidth={3} />
				</svg>
			</div>
			{/* "Where did the margin of error run out?": each word on its word */}
			<div style={{position: 'absolute', left: 0, right: 0, top: 800, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 58, letterSpacing: 2, color: colors.ink, whiteSpace: 'nowrap'}}>
				{ask.map((w, i) => (
					<Arrive key={i} f={f} fps={fps} on={w.at} style={{marginRight: i < ask.length - 1 ? '0.32em' : 0}}>
						{w.t}
					</Arrive>
				))}
			</div>
		</AbsoluteFill>
	);
};

const ActII: React.FC = () => <ActTitle n="II" title="The Mechanism" start={ef(22) + 50} end={sf(23) + 30} sub="HOW THE PLUG IS HELD" />;

export const act1: SceneDef[] = [
	{id: 'fdr', from: 0, to: sf(5) + 20, C: FdrOpen, cues: fdrCues()},
	{id: 'crew', from: sf(5) - 10, to: sf(7) + 30, C: Crew, cues: [{frame: sf(5), sfx: 'paper_slide', gainDb: -18}]},
	{id: 'hole', from: sf(7) - 20, to: sf(9) + 20, C: Hole, cues: [{frame: wf(8, 'rectangle'), sfx: 'pen_scratch', gainDb: -16}]},
	{id: 'seats', from: sf(9) - 20, to: sf(10) + 20, C: Seats},
	{id: 'track', from: sf(10) - 20, to: sf(13) + 20, C: Track, cues: [{frame: wf(10, 'ground'), sfx: 'relay_click', gainDb: -14}]},
	{id: 'paper', from: sf(13) - 20, to: wf(17, 'photograph') + 40, C: Paper, cues: [{frame: wf(16, 'built') - 8, sfx: 'paper_slide', gainDb: -12}, {frame: wf(16, 'paper') - 15, sfx: 'highlighter', gainDb: -16}]},
	{id: 'loop', from: wf(17, 'leads') - 20, to: sf(20) + 20, C: Loop, cues: [{frame: wf(17, 'one') - 14, sfx: 'pen_scratch', gainDb: -18}, {frame: wf(18, 'missing') + LAND, sfx: 'stamp', gainDb: -16}]},
	{id: 'layers', from: sf(20) - 20, to: ef(22) + 80, C: Layers, cues: [{frame: wf(21, 'failed'), sfx: 'metal_snap_sub', gainDb: -14}]},
	{id: 'act2title', from: ef(22) + 40, to: sf(23) + 40, C: ActII, cues: [{frame: ef(22) + 50, sfx: 'whoosh', gainDb: -20}]},
];

