import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {ease, envelope, settle, tween} from '../../../../lib/remotion/motion';
import {ReportPage, RecordDoc} from '../docs';
import {beat, BracketLock, bump, DatePill, flash, LAND, lead, rollTo, STAGGER, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {Camera, projectPoint} from '../engine3d';
import {Arrive, ChunkQuote, KeyLine, litStyle, on, WordLine} from '../beats';
import {ActTitle, Fade, Label, media, mono, Mount, sans, Stamp, useFilmFrame} from '../kit';
import {anchor, BoltId, defaultState, PLUG, PlugState, PlugSvg} from '../PlugModel';
import {ef, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM (rows 20–48). The factory record, in the record's own words; where it is silent, the film
// is silent. No person is named (the NTSB names none). Links the record does not draw are not drawn (C47, C84).

const none: Record<BoltId, number> = {upperFwd: 0, upperAft: 0, lowerFwd: 0, lowerAft: 0};
const cam = (yaw: number, pitch: number, dist: number, cx = 960, cy = 500, ty = 29): Camera => ({target: [0, ty, -2], yaw, pitch, dist, focal: 1250, cx, cy});

// ---------- the life of the plug: one bar, March 2023 → January 2024 (the treatment's structure device)
const DAY0 = Date.UTC(2023, 2, 1);
const day = (y: number, m: number, d: number) => (Date.UTC(y, m - 1, d) - DAY0) / 86400000;
const SPAN = day(2024, 1, 20);
type LifeEvent = {d: number; label: string; tone: 'cyan' | 'amber' | 'red' | 'ink'; on: number};

const LifeLine: React.FC<{start: number; end: number; events: LifeEvent[]; head: number; y?: number}> = ({start, end, events, head, y = 846}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 18, 18);
	if (o <= 0) return null;
	const x0 = 200;
	const x1 = 1720;
	const X = (d: number) => x0 + (d / SPAN) * (x1 - x0);
	const months = ['MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN'];
	return (
		<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: o, pointerEvents: 'none'}}>
			<div style={{position: 'absolute', left: x0 - 40, top: y - 40, width: x1 - x0 + 80, height: 170, background: colors.card, border: `1px solid ${colors.border}`}} />
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
				<line x1={x0} x2={x1} y1={y} y2={y} stroke={colors.border} strokeWidth={2} />
				<line x1={x0} x2={X(head)} y1={y} y2={y} stroke={colors.cyan} strokeWidth={2} />
				{months.map((m, i) => {
					const d = i < 10 ? day(2023, 3 + i, 1) : day(2024, 1, 1);
					return (
						<g key={m}>
							<line x1={X(d)} x2={X(d)} y1={y - 6} y2={y + 6} stroke={colors.muted} strokeWidth={1} />
							<text x={X(d) + 4} y={y - 12} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
								{m}
							</text>
						</g>
					);
				})}
				{events.map((e, i) => {
					const k = tween(f, e.on, e.on + 14, 0, 1);
					if (k <= 0) return null;
					const c = e.tone === 'ink' ? colors.ink : colors[e.tone];
					return (
						<g key={i} opacity={k}>
							<circle cx={X(e.d)} cy={y} r={7} fill={c} />
							<text x={X(e.d)} y={y + 36 + (i % 3) * 32} textAnchor={X(e.d) > 1500 ? 'end' : 'start'} fill={c} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={0.8}>
								{e.label}
							</text>
						</g>
					);
				})}
				<circle cx={X(head)} cy={y} r={4} fill={colors.ink} />
			</svg>
		</div>
	);
};

const E = {
	made: day(2023, 3, 24),
	closed: day(2023, 7, 28),
	renton: day(2023, 8, 31),
	rivets: day(2023, 9, 1),
	opened: day(2023, 9, 18),
	shut: day(2023, 9, 19),
	signed: day(2023, 9, 20),
	delivered: day(2023, 10, 31),
	accident: day(2024, 1, 5),
};

// ---------- the journey (C55, C23): word-level choreography, scenes/choreography/journey.md (PLAYBOOK §10.6)
const BOLT_LABEL: Record<BoltId, string> = {upperFwd: 'GUIDE TRACK · FWD', upperAft: 'GUIDE TRACK · AFT', lowerFwd: 'ARRESTOR · FWD', lowerAft: 'ARRESTOR · AFT'};
const BOLT_ORDER: BoltId[] = ['upperFwd', 'upperAft', 'lowerFwd', 'lowerAft']; // Top-L, Top-R, Bottom-L, Bottom-R on screen
const Journey: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(49) - 20;
	const end = sf(51) + 10;
	// the beats, on measured word starts (vo/timing.json, scripts/word_align.py)
	const B = {
		plug: wf(49, 'plug'),
		made: wf(49, 'made'),
		spirit: wf(49, 'spirit'),
		malaysia: wf(49, 'malaysia'),
		march: wf(49, 'march'),
		y2023: wf(49, 'twenty-three'),
		fitted: wf(50, 'fitted'),
		fuselage: wf(50, 'fuselage'),
		wichita: wf(50, 'wichita'),
		kansas: wf(50, 'kansas'),
		d28: wf(50, 'twenty-eighth'),
		july: wf(50, 'july'),
		closed: wf(50, 'closed'),
		four: wf(50, 'four'),
		place: wf(50, 'place'),
	};
	const head = interpolate(f, [a + 20, B.march, B.wichita, B.d28, B.july], [0, E.made, E.made + 40, E.closed - 10, E.closed], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	// the plug: outline on "plug", carried in on "fitted", the fuselage frame on "fuselage", swung shut on "closed"
	const carry = beat(f, B.fitted, 30);
	const swing = interpolate(f, [B.closed - 4, B.closed + 22], [0.42, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.arrive});
	const boltOn = (i: number) => B.four + i * STAGGER;
	const bolts = Object.fromEntries(BOLT_ORDER.map((id, i) => [id, beat(f, boltOn(i), 10)])) as Record<BoltId, number>;
	const state: PlugState = {
		...defaultState,
		swing,
		bolts,
		context: lead(f, B.fuselage, 18) * 0.9,
		plugAlpha: 0.25 + 0.75 * lead(f, B.plug, 16),
		boltGlow: f >= B.place ? 1 - beat(f, B.place + 20, 30) * 0.5 : 0.9,
		stopGlow: 0.15,
	};
	const c = cam(0.2 + 0.12 * (1 - carry), 0.08, 150 + 40 * (1 - carry), 1420 + 120 * (1 - carry), 420);
	const rx = 1044;
	const ry = 84;
	const card = (on: number): React.CSSProperties => ({opacity: tween(f, on - 10, on + 6, 0, 1), transform: `translateY(${(1 - beat(f, on - 10, 16)) * 14}px)`});
	const lit = (on: number, tone: string = colors.ink): React.CSSProperties => ({color: f >= on ? tone : colors.sub, textShadow: `0 0 ${(18 * flash(f, on, 0)).toFixed(1)}px ${tone}`});
	const secured = f >= B.place + LAND;
	return (
		<>
			<div style={{position: 'absolute', left: 120, top: 96, width: 880, fontFamily: mono, color: colors.ink, opacity: envelope(f, a + 10, end, 16, 16)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>LEFT MID EXIT DOOR PLUG · N704AL</div>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 56, letterSpacing: 5, marginTop: 6, ...lit(B.plug)}}>THE LIFE OF A PART</div>
				{/* sentence 49: made · by Spirit · in Malaysia · in March 2023 */}
				<div style={{marginTop: 26, padding: '18px 24px', background: colors.card, border: `1px solid ${f >= B.made ? colors.cyan : colors.border}`, ...card(B.made)}}>
					<div style={{fontSize: 26, letterSpacing: 3, ...lit(B.made, colors.cyan)}}>MADE</div>
					<div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 10}}>
						<div>
							<div style={{fontSize: 30, fontWeight: 700}}><span style={lit(B.spirit)}>SPIRIT</span> <span style={lit(wf(49, 'aerosystems'))}>AEROSYSTEMS</span></div>
							<div style={{fontSize: 30, fontWeight: 700, marginTop: 4, opacity: tween(f, B.malaysia - 8, B.malaysia + 4, 0, 1), ...lit(B.malaysia, colors.cyan)}}>MALAYSIA</div>
						</div>
						<DatePill f={f} fps={fps} day={24} fromDay={24} month={3} year={2023} dayWord={B.march} monthWord={B.march} yearWord={B.y2023} fromYear={2020} />
					</div>
				</div>
				{/* sentence 50: fitted · fuselage · Wichita, Kansas · 28th of July · closed · all four bolts · in place */}
				<div style={{marginTop: 20, padding: '18px 24px', background: colors.card, border: `1px solid ${secured ? colors.amber : f >= B.fitted ? colors.cyan : colors.border}`, ...card(B.fitted)}}>
					<div style={{fontSize: 26, letterSpacing: 3, ...lit(B.fitted, colors.cyan)}}>FITTED TO THE FUSELAGE · FINAL CLOSURE</div>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
						<div style={{fontSize: 30, fontWeight: 700}}>
							<span style={{opacity: tween(f, B.wichita - 8, B.wichita + 4, 0, 1), ...lit(B.wichita)}}>WICHITA, </span>
							<span style={{opacity: tween(f, B.kansas - 8, B.kansas + 4, 0, 1), ...lit(B.kansas)}}>KANSAS</span>
						</div>
						<DatePill f={f} fps={fps} day={28} fromDay={1} month={7} year={2023} dayWord={B.d28} monthWord={B.july} />
					</div>
					<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 18px', marginTop: 18}}>
						{BOLT_ORDER.map((id, i) => (
							<div key={id} style={{display: 'flex', alignItems: 'center', gap: 12, opacity: tween(f, boltOn(i) - 10, boltOn(i) + 2, 0.25, 1)}}>
								<StatusFlip f={f} fps={fps} word={B.place + i * 4} from="OPEN" to="IN" toneFrom="cyan" toneTo="amber" size={26} style={{minWidth: 92, textAlign: 'center'}} />
								<span style={{fontSize: 26, letterSpacing: 1, ...lit(boltOn(i), colors.amber)}}>{BOLT_LABEL[id]}</span>
							</div>
						))}
					</div>
					<div style={{marginTop: 18}}>
						<StatusFlip f={f} fps={fps} word={B.place + 14} from={`BOLTS ${Math.min(4, Math.max(0, Math.floor((f - B.four) / STAGGER) + 1))}/4`} to="SECURED · 4/4" toneFrom="cyan" toneTo="amber" size={30} />
					</div>
				</div>
			</div>
			<Mount x={rx} y={ry} w={790} h={680} source="ILLUSTRATION · AFTER NTSB AIR-25-04 FIGS 3–6" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -rx, top: -ry, width: 1920, height: 1080}}>
					<PlugSvg
						cam={c}
						state={state}
						extra={
							<>
								{BOLT_ORDER.map((id, i) => {
									const p = anchor(state, c, id);
									return <BracketLock key={id} f={f} fps={fps} word={boltOn(i)} x={p.x - 30} y={p.y - 30} w={60} h={60} tone={f >= B.place ? 'amber' : 'cyan'} />;
								})}
							</>
						}
					/>
				</div>
			</Mount>
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.made, label: 'MADE · MALAYSIA', tone: 'cyan', on: wf(49, 'malaysia')},
				{d: E.closed, label: 'CLOSED · 4 BOLTS · WICHITA', tone: 'amber', on: wf(50, 'place')},
			]} />
		</>
	);
};

// ---------- two companies (C53, C54, C72): the filings, with the narration's figures built on their words
const Spirit: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RecordDoc doc="spirit_2005" start={sf(51) - 12} end={sf(53) + 6} at={[wf(52, 'five')]} label="EXHIBIT 03" source="SPIRIT AEROSYSTEMS FORM 10-K, FY 2023 · SEC EDGAR" pushTo={wf(52, 'five')} />
			<RecordDoc doc="spirit_64" start={sf(53) - 30} end={sf(54) + 12} at={[wf(53, 'nearly') - 4]} label="EXHIBIT 04" source="SPIRIT AEROSYSTEMS FORM 10-K, FY 2023 · SEC EDGAR" pushTo={wf(53, 'two')} />
			<KeyLine
				f={f}
				fps={fps}
				start={sf(51) - 10}
				end={sf(53) - 10}
				x={150}
				y={950}
				parts={[
					{t: "SPIRIT'S WICHITA PLANT", at: wf(51, 'wichita')},
					{t: '· ONCE BOEING’S', at: wf(51, 'used'), tone: colors.amber},
					{t: '· 2005', at: wf(52, 'five'), tone: colors.amber},
					{t: 'BOEING SOLD', at: wf(52, 'sold')},
					{t: 'WICHITA', at: wf(52, 'wichita')},
					{t: '→ IT BECAME', at: wf(52, 'became')},
					{t: 'SPIRIT AEROSYSTEMS', at: wf(52, 'aerosystems'), tone: colors.cyan},
					{t: '·', at: wf(52, 'a')},
					{t: 'A MAJOR SUPPLIER', at: wf(52, 'major')},
					{t: 'OF', at: wf(52, 'supplier')},
					{t: '737', at: wf(52, 'thirty-seven')},
					{t: 'FUSELAGES', at: wf(52, 'fuselages')},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(53) - 10}
				end={sf(54) + 6}
				x={150}
				y={950}
				parts={[
					{t: 'BY 2023', at: wf(53, 'twenty-three')},
					{t: '· NEARLY 2/3', at: wf(53, 'two'), tone: colors.amber},
					{t: "OF SPIRIT'S REVENUE", at: wf(53, 'revenue')},
					{t: '· FROM BOEING', at: wf(53, 'boeing'), tone: colors.amber},
				]}
			/>
		</>
	);
};

// ---------- Renton: five rivets, and who may open the plug (C24, C25)
const Renton: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(54) - 16;
	const R = {
		arrived: wf(54, 'arrived'),
		boeing: wf(54, "boeing's"),
		renton: wf(54, 'renton'),
		washington: wf(54, 'washington'),
		d31: wf(54, 'thirty-first'),
		august: wf(54, 'august'),
		day: wf(55, 'day'),
		found: wf(55, 'found'),
		five: wf(55, 'five'),
		frame: wf(55, 'frame'),
		forward: wf(55, 'forward'),
		plug: wf(55, 'plug'),
		rivets: wf(56, 'rivets'),
		installed: wf(56, 'installed'),
		one: wf(56, 'one'),
		suppliers: wf(56, 'suppliers'),
		boeings: wf(57, "boeing's"),
		rules: wf(57, 'rules'),
		spirits: wf(57, "spirit's"),
		allowed: wf(57, 'allowed'),
		apart: wf(57, 'apart'),
		only: wf(58, 'only'),
		boeing58: wf(58, 'boeing'),
		open: wf(58, 'open'),
		plug58: wf(58, 'plug'),
	};
	const end = sf(59) + 10;
	const c = cam(0.22, 0.1, 160, 820, 470);
	const state: PlugState = {...defaultState, stopGlow: 0.2 + 0.6 * flash(f, R.plug, 0), boltGlow: 0.6};
	const rivets = [24, 28, 32, 36, 40].map((y, i) => {
		const p = projectPoint(c, [-(PLUG.w / 2 + 3.8), y, -0.2]);
		const k = lead(f, R.five + i * 8, 10);
		const pulse = 1 + 0.3 * flash(f, R.rivets, 0);
		return <circle key={y} cx={p.x} cy={p.y} r={9 * k * pulse} fill="rgba(239,68,68,0.25)" stroke={colors.red} strokeWidth={2.5} opacity={k} />;
	});
	const fr = projectPoint(c, [-(PLUG.w / 2 + 3.8), 32, -0.2]);
	const head = interpolate(f, [a, R.d31, R.day], [E.closed, E.renton, E.rivets], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	return (
		<>
			<Mount x={96} y={84} w={1060} h={700} source="AFTER NTSB AIR-25-04 · RIVET LOCATIONS" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} extra={<>{rivets}<BracketLock f={f} fps={fps} word={R.frame} x={fr.x - 40} y={fr.y - 110} w={80} h={220} tone="red" until={R.rules} /></>} />
				</div>
			</Mount>
			<div style={{position: 'absolute', left: 1210, top: 120, width: 620, fontFamily: mono, opacity: envelope(f, a + 20, end, 16, 16)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2}}>
					<span style={litStyle(f, R.boeing, colors.ink)}>BOEING</span> <span style={{opacity: on(f, wf(54, 'factory'), 8), color: colors.ink}}>FACTORY ·</span> <span style={{opacity: on(f, R.renton, 8), ...litStyle(f, R.renton, colors.ink)}}>RENTON,</span>{' '}
					<span style={{opacity: on(f, R.washington, 8), ...litStyle(f, R.washington, colors.ink)}}>WASHINGTON</span>
				</div>
				<div style={{fontSize: 30, fontWeight: 700, marginTop: 8, display: 'flex', gap: 14, alignItems: 'center'}}>
					<span style={{opacity: on(f, R.arrived, 8), ...litStyle(f, R.arrived, colors.ink)}}>FUSELAGE ARRIVES</span>
					<DatePill f={f} fps={fps} day={31} fromDay={1} month={8} year={2023} dayWord={R.d31} monthWord={R.august} size={28} />
				</div>
				<div style={{fontSize: 30, fontWeight: 700, letterSpacing: 1.5, color: colors.red, marginTop: 26}}>
					<span style={{opacity: on(f, R.day, 8), ...litStyle(f, R.found, colors.red)}}>01 SEP ·</span> <Arrive f={f} fps={fps} on={R.five}>5</Arrive> <span style={{opacity: on(f, wf(55, 'damaged'), 8)}}>DAMAGED</span> <span style={{opacity: on(f, wf(55, 'rivets'), 8)}}>RIVETS</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.5, color: colors.ink, marginTop: 8}}>
					<span style={{opacity: on(f, R.frame, 8)}}>IN THE EDGE FRAME,</span> <span style={{opacity: on(f, R.forward, 8), ...litStyle(f, R.forward, colors.ink)}}>JUST FORWARD OF THE PLUG</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.5, color: colors.ink, marginTop: 26}}>
					<span style={{opacity: on(f, R.installed, 8)}}>INSTALLED BY</span> <span style={{opacity: on(f, R.one, 8), ...litStyle(f, R.one, colors.amber)}}>ONE OF</span>{' '}
					<span style={{opacity: on(f, R.suppliers, 8), ...litStyle(f, R.suppliers, colors.ink)}}>SPIRIT'S SUPPLIERS</span>
				</div>
			</div>
			<ChunkQuote
				f={f}
				fps={fps}
				chunks={[
					['only Boeing personnel', R.rules],
					['were allowed', R.allowed],
					['to perform such work', R.apart],
				]}
				who="BOEING'S PROCESS"
				whoAt={R.boeings}
				where="AS DESCRIBED IN NTSB AIR-25-04"
				whereAt={R.spirits}
				start={R.boeings - 16}
				end={end}
				x={1210}
				y={460}
				w={610}
				size={32}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={wf(57, 'people') - 12}
				end={R.only - 12}
				x={1210}
				y={706}
				parts={[
					{t: "SPIRIT'S PEOPLE", at: wf(57, 'people')},
					{t: 'NOT ALLOWED', at: wf(57, 'not'), tone: colors.red},
					{t: '· A FINISHED', at: wf(57, 'finished')},
					{t: 'INSTALLATION', at: wf(57, 'installation')},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={R.only - 12}
				end={end}
				x={1210}
				y={706}
				parts={[
					{t: 'ONLY', at: R.only, tone: colors.amber},
					{t: 'BOEING', at: R.boeing58},
					{t: 'COULD OPEN', at: R.open},
					{t: 'THE PLUG', at: R.plug58, tone: colors.amber},
				]}
			/>
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.closed, label: 'CLOSED · WICHITA', tone: 'amber', on: a - 100},
				{d: E.renton, label: 'RENTON 31 AUG', tone: 'cyan', on: R.d31},
				{d: E.rivets, label: '5 RIVETS', tone: 'red', on: R.five},
			]} />
		</>
	);
};

// ---------- the removal record: what it is (C73) and that none was written (C29)
const RemovalForm: React.FC<{start: number; end: number; stamp?: number; x?: number; y?: number; dimmed?: number; lit?: number[]; titleAt?: number}> = ({start, end, stamp, x = 420, y = 90, dimmed = 0, lit = [], titleAt}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = settle(f, fps, start);
	const o = envelope(f, start, end, 14, 16) * (1 - dimmed * 0.6);
	if (o <= 0) return null;
	const rows = ['INSTALLATION DISTURBED', 'STEPS TO RESTORE IT', 'MECHANIC SIGN-OFF', 'QUALITY INSPECTION SIGN-OFF'];
	const tk = titleAt === undefined ? 0 : flash(f, titleAt, 0);
	// sized for a phone (row labels 30 px, notes 26 px), ink on the paper token only
	return (
		<div style={{position: 'absolute', left: x, top: y + (1 - a) * 40, width: 1000, height: 780, opacity: o, background: colors.paper, boxShadow: '0 30px 80px rgba(0,0,0,0.55)', fontFamily: mono, color: colors.paper_ink}}>
			<div style={{position: 'absolute', left: 50, top: 40, fontSize: 46, fontWeight: 700, letterSpacing: 6, transform: `scale(${titleAt === undefined ? 1 : bump(f, fps, titleAt + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%', textShadow: `0 0 ${(14 * tk).toFixed(1)}px ${colors.cyan}`}}>REMOVAL RECORD</div>
			<div style={{position: 'absolute', left: 50, top: 104, fontSize: 26, letterSpacing: 1, opacity: 0.75}}>WHAT THE RECORD CONTAINS · PER NTSB AIR-25-04</div>
			<div style={{position: 'absolute', left: 50, right: 50, top: 150, height: 2, background: colors.paper_ink}} />
			{rows.map((r, i) => {
				const lit_ = lit[i] !== undefined && f >= lit[i];
				return (
					<div key={r} style={{position: 'absolute', left: 50, right: 50, top: 184 + i * 128, height: 104, border: `${lit_ ? 4 : 1}px solid ${lit_ ? colors.cyan : colors.sub}`, background: lit[i] !== undefined ? `rgba(56,189,248,${0.16 * tween(f, lit[i], lit[i] + 14, 0, 1)})` : 'transparent', opacity: tween(f, start + 16 + i * 8, start + 30 + i * 8, 0, 1)}}>
						<div style={{position: 'absolute', left: 18, top: 14, fontSize: 30, fontWeight: 700, letterSpacing: 1.5}}>{r}</div>
						<div style={{position: 'absolute', left: 18, right: 18, bottom: 18, height: 1, borderBottom: `1px dashed ${colors.sub}`}} />
					</div>
				);
			})}
			<div style={{position: 'absolute', left: 50, bottom: 30, fontSize: 26, letterSpacing: 1, opacity: 0.75}}>RECONSTRUCTION · NOT A BOEING DOCUMENT</div>
			{stamp ? <Stamp text="NO RECORD FOUND" start={stamp} x={500} y={420} rot={-9} size={64} /> : null}
		</div>
	);
};

const Record: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const W = {
		process: wf(60, 'process'),
		required: wf(60, 'required'),
		removal: wf(60, 'removal'),
		record: wf(60, 'record'),
		document: wf(60, 'document'),
		lists: wf(60, 'lists'),
		restore: wf(60, 'restore'),
		prove: wf(60, 'prove'),
		done: wf(60, 'done'),
	};
	return (
		<>
			{/* each row lights as it is named: "steps to restore" → row 2, "what was disturbed" → row 1, "the quality sign-offs" → rows 3–4 */}
			<RemovalForm start={sf(60) - 10} end={sf(61) + 10} titleAt={W.removal} lit={[wf(60, 'disturbed') - 12, wf(60, 'steps') - 12, wf(60, 'quality') - 12, wf(60, 'sign-offs') - 6]} />
			<KeyLine
				f={f}
				fps={fps}
				start={sf(60) - 10}
				end={sf(61) + 6}
				x={60}
				y={180}
				w={330}
				size={26}
				parts={[
					{t: "BOEING'S OWN PROCESS", at: W.process},
					{t: 'REQUIRED', at: W.required, tone: colors.amber, br: true},
					{t: 'A REMOVAL RECORD', at: W.record, tone: colors.cyan, br: true},
					{t: 'A DOCUMENT', at: W.document, br: true},
					{t: 'THAT LISTS', at: W.lists, br: true},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={W.restore - 12}
				end={sf(61) + 6}
				x={420}
				y={900}
				parts={[
					{t: 'FORCES THE PART BACK', at: W.restore, tone: colors.amber},
					{t: '· FORCES AN INSPECTION', at: W.prove, tone: colors.amber},
					{t: '· PROVES IT WAS DONE', at: W.done},
				]}
			/>
			<Label text="RECONSTRUCTION" style={{position: 'absolute', left: 1460, top: 96, opacity: envelope(f, sf(60), sf(61), 12, 12)}} />
			<div style={{position: 'absolute', left: 0, right: 0, top: 470, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 46, letterSpacing: 3, color: colors.ink, opacity: envelope(f, sf(59) - 10, sf(60) - 10, 14, 14)}}>
				<WordLine f={f} fps={fps} words={[['OPENING IT', wf(59, 'opening')], ['WAS NOT', wf(59, 'not')], ['ROUTINE', wf(59, 'routine')]]} />
			</div>
		</>
	);
};

// ---------- back and forth (C26, C85)
const Ledger: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(61) - 10;
	const end = sf(65) + 6;
	const L = {
		two: wf(61, 'two'),
		rivets: wf(61, 'rivets'),
		back: wf(61, 'back'),
		forth: wf(61, 'forth'),
		spirit: wf(62, 'spirit'),
		recorded: wf(62, 'recorded'),
		replaced: wf(62, 'replaced'),
		same: wf(63, 'same'),
		quality: wf(63, 'quality'),
		recorded2: wf(63, 'recorded'),
		not: wf(63, 'not'),
		painted: wf(63, 'painted'),
	};
	// "back and forth": a shuttle that crosses on each word
	const shuttle = rollTo(f, [{frame: L.back - 4, value: 0}, {frame: L.back + 10, value: 1}, {frame: L.forth + 10, value: 0}, {frame: L.forth + 30, value: 1}]);
	const row = (who: string, whoAt: number, what: [string, number, string][], tone: string) => (
		<div style={{display: 'flex', alignItems: 'baseline', gap: 30, padding: '22px 0', borderBottom: `1px solid ${colors.border}`, opacity: on(f, whoAt, 10)}}>
			<span style={{width: 380, fontSize: 26, letterSpacing: 1.2, ...litStyle(f, whoAt, colors.ink)}}>{who}</span>
			<span style={{fontSize: 36, fontWeight: 700, color: tone}}>
				{what.map(([t, at, c], i) => (
					<span key={i} style={{opacity: on(f, at, 8), color: c, display: 'inline-block', transform: `scale(${bump(f, fps, at + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 60%', marginRight: 14}}>
						{t}
					</span>
				))}
			</span>
		</div>
	);
	return (
		<>
			<Mount x={200} y={150} w={1520} h={520} source="NTSB AIR-25-04 · RIVET REWORK RECORDS, SEPTEMBER 2023" start={a} end={end} labels={['SUMMARY OF THE RECORD']}>
				<div style={{position: 'absolute', left: 50, top: 40, right: 50, fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, display: 'flex', gap: 18, alignItems: 'center'}}>
						<span style={{opacity: on(f, L.two, 8), ...litStyle(f, L.two, colors.amber)}}>MORE THAN 2 WEEKS</span>
						<span style={{opacity: on(f, L.rivets, 8), ...litStyle(f, L.rivets, colors.ink)}}>· THE SAME RIVETS ·</span>
						<svg width={120} height={30} style={{opacity: on(f, L.back, 8)}}>
							<line x1={8} x2={112} y1={15} y2={15} stroke={colors.amber} strokeWidth={2} />
							<circle cx={8 + 104 * shuttle} cy={15} r={7} fill={colors.amber} />
						</svg>
						<span style={{opacity: on(f, L.same, 8), ...litStyle(f, L.same, colors.ink)}}>06 SEP 2023 · THE SAME DAY</span>
					</div>
					{row('SPIRIT CONTRACT MECHANIC', L.spirit, [['RECORDED:', L.recorded, colors.ink], ['REPLACED', L.replaced, colors.ink]], colors.ink)}
					{row('BOEING QUALITY INSPECTORS', L.quality, [['RECORDED:', L.recorded2, colors.red], ['NOT', L.not, colors.red], ['REPLACED', wf(63, 'replaced'), colors.red], ['“just painted over”', L.painted, colors.red]], colors.red)}
				</div>
			</Mount>
			<ChunkQuote
				f={f}
				fps={fps}
				chunks={[
					['he had confused', wf(64, 'confused')],
					['[the accident] airplane', wf(64, 'airplane')],
					['with another airplane he was working on that day', wf(64, 'another')],
				]}
				who="SPIRIT AEROSYSTEMS"
				whoAt={wf(64, 'spirit')}
				where="AS REPORTED IN NTSB AIR-25-04"
				whereAt={wf(64, 'said')}
				start={sf(64) - 6}
				end={end}
				x={200}
				y={700}
				w={1520}
				size={30}
			/>
		</>
	);
};

// ---------- escalation, and the note (C74, C27, C28)
const Escalation: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(65) - 10;
	const end = sf(66) + 4;
	const ons = [wf(65, 'request'), wf(65, 'escalated'), wf(65, 'twice')];
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 660, top: 220, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, marginBottom: 20, ...litStyle(f, wf(65, 'access'), colors.ink)}}>REQUEST FOR ACCESS · BOEING SHIPSIDE ACTION TRACKER</div>
				{ons.map((o, i) => {
					const k = lead(f, o, 12);
					return (
						<div key={i} style={{marginLeft: i * 120, marginTop: 18, width: 360, padding: '20px 24px', border: `1px solid ${i === 2 ? colors.amber : colors.border}`, background: colors.card, opacity: k, transform: `translateY(${((1 - k) * 16).toFixed(1)}px) scale(${bump(f, fps, o + LAND, 0.05).toFixed(4)})`, fontSize: 26, fontWeight: 700, color: i === 2 ? colors.amber : colors.ink}}>
							TIER {i + 1}
						</div>
					);
				})}
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 30, opacity: on(f, ons[2], 10)}}>ELEVATED TWICE · NTSB AIR-25-04</div>
			</div>
		</Fade>
	);
};

const Note: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={62} start={sf(66) - 8} end={sf(69) + 4} hl={[{key: 'removal_first', at: wf(66, 'removal', 0)}, {key: 'opened_by', at: wf(67, 'opened') - 20}]} label="EXHIBIT 05" title="SHIPSIDE ACTION TRACKER ENTRIES, 17–18 SEP 2023" pushTo={wf(66, 'read')} pad={[100, 220]} />
			<KeyLine
				f={f}
				fps={fps}
				start={sf(66) - 6}
				end={sf(67) - 6}
				x={72}
				y={950}
				parts={[
					{t: '17', at: wf(66, 'seventeenth'), tone: colors.amber},
					{t: 'SEP', at: wf(66, 'september'), tone: colors.amber},
					{t: '· A NOTE', at: wf(66, 'note')},
					{t: "IN BOEING'S TRACKING SYSTEM:", at: wf(66, 'tracking')},
					{t: 'IF REMOVAL NEEDED,', at: wf(66, 'if'), tone: colors.cyan},
					{t: 'A REMOVAL', at: wf(66, 'removal', 1), tone: colors.cyan},
					{t: 'WRITTEN', at: wf(66, 'written'), tone: colors.cyan},
					{t: 'FIRST', at: wf(66, 'first'), tone: colors.cyan},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(67) - 6}
				end={sf(68) - 6}
				x={72}
				y={950}
				parts={[
					{t: '18 SEP · MORNING', at: wf(67, 'morning'), tone: colors.amber},
					{t: '· A BOEING DOOR MANAGER', at: wf(67, 'manager')},
					{t: 'REPORTED', at: wf(67, 'reported')},
					{t: 'THE DOOR', at: wf(67, 'door', 1)},
					{t: 'BEING OPENED', at: wf(67, 'opened'), tone: colors.red},
					{t: 'BY A MECHANIC', at: wf(67, 'mechanic')},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(68) - 6}
				end={sf(69) + 4}
				x={72}
				y={950}
				parts={[
					{t: 'WHICH MECHANIC:', at: wf(68, 'which'), tone: colors.amber},
					{t: 'THE RECORD', at: wf(68, 'record')},
					{t: 'DOES NOT SAY', at: wf(68, 'not'), tone: colors.amber},
				]}
			/>
		</>
	);
};

// ---------- the door team (C31, C32, C80)
const DoorTeam: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(69) - 10;
	const end = sf(73) + 4;
	const D = {
		man: wf(70, 'man'),
		job: wf(70, 'job'),
		y25: wf(70, 'twenty-five'),
		years: wf(70, 'years'),
		doors: wf(70, 'doors'),
		day: wf(71, 'day'),
		next: wf(71, 'next'),
		leave: wf(71, 'leave'),
		none: wf(72, 'none'),
		duty: wf(72, 'duty'),
		ever: wf(72, 'ever'),
		opened: wf(72, 'opened'),
	};
	const yrs = Math.round(rollTo(f, [{frame: D.y25 - 16, value: 0}, {frame: D.y25 + LAND, value: 25}], true));
	const tile = (title: string, titleAt: number, lines: React.ReactNode[], inAt: number, tone: string, x: number) => (
		<div style={{position: 'absolute', left: x, top: 340, width: 600, height: 330, border: `1px solid ${tone}`, background: colors.card, opacity: on(f, inAt, 12), fontFamily: mono, padding: 30}}>
			<div style={{fontSize: 30, letterSpacing: 1.2, ...litStyle(f, titleAt, tone)}}>{title}</div>
			{lines.map((l, i) => (
				<div key={i} style={{fontSize: i === 0 ? 46 : 30, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? colors.ink : colors.sub, marginTop: i === 0 ? 30 : 12, letterSpacing: 1.5}}>
					{l}
				</div>
			))}
		</div>
	);
	return (
		<Fade start={a} end={end}>
			<KeyLine
				f={f}
				fps={fps}
				start={a}
				end={end}
				x={300}
				y={250}
				card={false}
				size={30}
				parts={[
					{t: 'ONLY', at: wf(69, 'only'), tone: colors.amber},
					{t: "BOEING'S DOOR TEAM", at: wf(69, 'door')},
					{t: '· ALLOWED', at: wf(69, 'allowed')},
					{t: 'TO WORK ON A PLUG', at: wf(69, 'plug')},
				]}
			/>
			{tile(
				'USUALLY GIVEN THE JOB',
				D.job,
				[
					<span key="y">
						ABOUT <span style={{color: colors.amber, display: 'inline-block', transform: `scale(${bump(f, fps, D.y25 + LAND).toFixed(4)})`}}>{yrs}</span> <span style={{opacity: on(f, D.years, 8)}}>YEARS</span>
					</span>,
					<span key="d"><span style={{opacity: on(f, wf(70, 'thirty-seven'), 8)}}>ON 737</span> <span style={{opacity: on(f, D.doors, 8)}}>DOORS</span></span>,
					<span key="l">
						<span style={{opacity: on(f, D.day, 8)}}>18 SEP</span> <span style={{opacity: on(f, D.next, 8)}}>· 19 SEP</span> <span style={{opacity: on(f, D.leave, 8), ...litStyle(f, D.leave, colors.amber)}}>· ON LEAVE</span>
					</span>,
				],
				D.man,
				colors.amber,
				300,
			)}
			{tile(
				'THE DOOR TEAM ON DUTY',
				D.duty,
				[
					<span key="n" style={{opacity: on(f, D.ever, 8)}}>NONE HAD EVER</span>,
					<span key="o" style={{opacity: on(f, D.opened, 8), ...litStyle(f, D.opened, colors.red)}}>OPENED A PLUG</span>,
				],
				D.none,
				colors.red,
				1020,
			)}
			<div style={{position: 'absolute', left: 300, top: 726, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: on(f, D.man, 14)}}>NTSB AIR-25-04 · INTERVIEWS AND STATEMENTS · NO NAMES</div>
		</Fade>
	);
};

const NoRecord: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RemovalForm start={sf(73) - 10} end={sf(76) + 6} stamp={wf(74, 'record') - 6} titleAt={wf(74, 'removal')} />
			<div style={{position: 'absolute', left: 420, top: 30, opacity: envelope(f, sf(73) - 10, sf(74), 10, 12)}}>
				<StatusFlip f={f} fps={fps} word={wf(73, 'opened')} from="THE PLUG · CLOSED" to="THE PLUG · OPENED" toneFrom="cyan" toneTo="red" size={30} />
			</div>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(75) - 10}
				end={sf(76) + 4}
				x={420}
				y={900}
				parts={[
					{t: 'NO ONE INTERVIEWED', at: wf(75, 'one'), tone: colors.amber},
					{t: 'SAID THEY KNEW', at: wf(75, 'knew')},
					{t: 'WHO OPENED IT', at: wf(75, 'opened'), tone: colors.amber},
				]}
			/>
			<Label text="RECONSTRUCTION" style={{position: 'absolute', left: 1460, top: 96, opacity: envelope(f, sf(73), sf(76), 12, 12)}} />
		</>
	);
};

// ---------- the strap (C33), RECONSTRUCTION
const Strap: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(76) - 10;
	const end = sf(78) + 10;
	const S = {strap: wf(77, 'strap'), pull: wf(77, 'pull'), up: wf(77, 'up'), hang: wf(77, 'hang'), gap: wf(77, 'gap'), round: wf(77, 'round'), frame: wf(77, 'frame')};
	const c = cam(0.95, 0.14, 150, 760, 500);
	const swing = tween(f, a, a + 60, 0.22, 0.17, ease.camera);
	// "pull it up off the stand … and let it hang": the plug rises on "up" and settles on "hang"
	const lift = rollTo(f, [{frame: S.pull, value: 3.2}, {frame: S.up + 20, value: 4.6}, {frame: S.hang + 20, value: 4.0}]);
	const state: PlugState = {...defaultState, bolts: none, lift, swing, stopGlow: 0.15, context: 0.7 + 0.3 * flash(f, S.frame, 0)};
	const top = anchor(state, c, 'topCentre');
	const hook = projectPoint(c, [0, 70, -6]);
	const k = lead(f, S.strap, 24);
	const le = anchor(state, c, 'leftEdgeMid');
	const re = anchor(state, c, 'rightEdgeMid');
	return (
		<>
			<Mount x={96} y={84} w={1060} h={760} source="FROM THE TECHNICIAN'S ACCOUNT · NTSB AIR-25-04" start={a} end={end} labels={['RECONSTRUCTION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg
						cam={c}
						state={state}
						extra={
							<>
								<line x1={hook.x} y1={hook.y} x2={hook.x + (top.x - hook.x) * k} y2={hook.y + (top.y - hook.y) * k} stroke={colors.amber} strokeWidth={4} />
								<BracketLock f={f} fps={fps} word={S.gap} x={le.x - 40} y={le.y - 120} w={80} h={240} tone="red" />
								<BracketLock f={f} fps={fps} word={S.round} x={re.x - 40} y={re.y - 120} w={80} h={240} tone="red" />
							</>
						}
					/>
				</div>
			</Mount>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(76) - 10}
				end={end}
				x={1200}
				y={140}
				w={620}
				parts={[
					{t: '18 SEP · LATER THAT DAY', at: wf(76, 'day'), tone: colors.amber},
					{t: 'A TECHNICIAN', at: wf(76, 'technician'), br: true},
					{t: 'MOVING EQUIPMENT', at: wf(76, 'moving')},
					{t: 'FOUND THE PLUG', at: wf(76, 'found'), br: true},
					{t: 'OPEN', at: wf(76, 'open'), tone: colors.red},
					{t: 'ON A STAND', at: wf(76, 'stand')},
				]}
			/>
			<ChunkQuote f={f} fps={fps} chunks={[['just strapped it up there', S.strap], ['and let it hang', S.hang]]} who="A TECHNICIAN" whoAt={wf(77, 'he')} where="AS REPORTED IN NTSB AIR-25-04" whereAt={wf(77, 'said')} start={sf(77) - 6} end={end} x={1200} y={420} w={620} size={40} />
			<KeyLine f={f} fps={fps} start={S.gap - 12} end={end} x={1200} y={720} parts={[{t: 'A GAP', at: S.gap, tone: colors.red}, {t: 'ALL ROUND', at: S.round, tone: colors.red}, {t: 'IN THE FRAME', at: S.frame}]} />
		</>
	);
};

// ---------- closed on the evening shift (C34, C30)
const Closed: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(78) - 10;
	const end = sf(80) + 10;
	const C = {
		sometime: wf(79, 'sometime'),
		evening: wf(79, 'evening'),
		nineteenth: wf(79, 'nineteenth'),
		member: wf(79, 'member'),
		working: wf(79, 'working'),
		plug: wf(79, 'plug'),
		closed: wf(79, 'closed'),
	};
	const c = cam(0.5, 0.12, 150, 760, 500);
	const close = tween(f, C.plug - 20, C.closed + 10, 1, 0, ease.camera);
	const state: PlugState = {...defaultState, bolts: none, lift: 3.2 * close, swing: 0.17 * close, stopGlow: 0.15};
	// the open / closed record (report Fig. 17's periods, redrawn by us)
	const x0 = 1180;
	const W = 640;
	const t0 = 0; // 18 SEP 00:00
	const tEnd = 48 * 60; // to 20 SEP 00:00, minutes
	const X = (min: number) => x0 + ((min - t0) / (tEnd - t0)) * W;
	// each bar's label on its own line, left- or right-aligned inside the card (no label crosses another)
	const span = (m0: number, m1: number, col: string, label: string, y: number, onAt: number, side: 'left' | 'right' = 'left', ly = y + 54) => {
		const k = lead(f, onAt, 14);
		return (
			<g opacity={k}>
				<rect x={X(m0)} y={y} width={(X(m1) - X(m0)) * k} height={26} fill={col} opacity={0.85} />
				<text x={side === 'left' ? x0 : x0 + W} textAnchor={side === 'left' ? 'start' : 'end'} y={ly} fill={col} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={0.6}>
					{label}
				</text>
			</g>
		);
	};
	return (
		<>
			<Mount x={96} y={84} w={1000} h={760} source="ILLUSTRATION · AFTER NTSB AIR-25-04" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} />
				</div>
			</Mount>
			<Mount x={1110} y={200} w={714} h={470} source="NTSB AIR-25-04 · PLUG STATUS, 18–19 SEP" start={a + 10} end={end}>
				<svg width={714} height={412}>
					<text x={40} y={50} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
						18 SEP
					</text>
					<text x={40 + W / 2} y={50} fill={f >= wf(79, 'september') ? colors.ink : f >= C.nineteenth ? colors.amber : colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
						19 SEP
					</text>
					<g transform={`translate(${40 - x0}, 0)`}>
						{span(10 * 60 + 53, 24 * 60 + 17 * 60 + 9, colors.amber, 'OPEN · 18 SEP 10:53 → 19 SEP 17:09', 80, a + 20)}
						{span(24 * 60 + 17 * 60 + 10, 24 * 60 + 18 * 60 + 38, colors.sub, 'UNDETERMINED 17:10–18:38', 180, C.sometime, 'right')}
						{span(24 * 60 + 18 * 60 + 39, tEnd, colors.cyan, 'CLOSED BY 18:39', 80, C.closed - 6, 'right', 74)}
						{span(24 * 60 + 13 * 60 + 30, 24 * 60 + 23 * 60 + 30, f >= wf(79, 'no') ? colors.red : colors.sub, f >= wf(79, 'no') ? 'SECOND SHIFT · NO DOOR TEAM ON DUTY' : 'SECOND SHIFT', 290, C.evening, 'right')}
					</g>
				</svg>
			</Mount>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(78) - 6}
				end={sf(79)}
				x={1110}
				y={700}
				parts={[
					{t: '19 SEP', at: wf(78, 'day'), tone: colors.amber},
					{t: '· THE RIVET WORK', at: wf(78, 'rivet')},
					{t: 'FINISHED', at: wf(78, 'finished'), tone: colors.cyan},
				]}
			/>
			<KeyLine
				f={f}
				fps={fps}
				start={sf(79) - 6}
				end={end}
				x={1110}
				y={700}
				parts={[
					{t: 'NO DOOR TEAM', at: C.member, tone: colors.red},
					{t: 'WORKING', at: C.working, tone: colors.red},
					{t: '· THE PLUG', at: C.plug},
					{t: 'CLOSED', at: C.closed, tone: colors.cyan},
				]}
			/>
		</>
	);
};

// ---------- the texts (C35): no real message is shown or invented
const Texts: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(80) - 10;
	const end = sf(82) + 10;
	const o = envelope(f, a, end, 14, 30);
	const T = {
		seven: wf(80, 'seven'),
		workers: wf(80, 'workers'),
		texting: wf(80, 'texting'),
		each: wf(80, 'each'),
		other: wf(80, 'other'),
		putting: wf(80, 'putting'),
		cabin: wf(80, 'cabin'),
		back: wf(80, 'back'),
		one: wf(81, 'one'),
		carried: wf(81, 'carried'),
		photograph: wf(81, 'photograph'),
	};
	const bub = [T.texting, T.each, T.other];
	return (
		<AbsoluteFill style={{opacity: o}}>
			<div style={{position: 'absolute', left: 700, top: 160, width: 520, height: 700, border: `1px solid ${colors.border}`, background: colors.card, borderRadius: 30}}>
				<div style={{position: 'absolute', left: 30, top: 30, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, ...litStyle(f, T.workers, colors.ink)}}>TEXT MESSAGES · BOEING WORKERS</div>
				{bub.map((b, i) => {
					const k = lead(f, b, 12);
					const hot = i === 2 && f >= T.one;
					return <div key={i} style={{position: 'absolute', left: i % 2 ? 150 : 30, top: 100 + i * 110, width: 340, height: 74, borderRadius: 18, background: i % 2 ? '#25506f' : '#2b3a52', border: `${hot ? 3 : 1}px solid ${hot ? colors.amber : colors.sub}`, transform: `translateY(${((1 - k) * 24).toFixed(1)}px)`, opacity: k}} />;
				})}
				<svg width={520} height={700} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={320} x2={320} y1={394} y2={394 + 46 * lead(f, T.carried, 14)} stroke={colors.amber} strokeWidth={3} opacity={on(f, T.carried, 8)} />
				</svg>
				<div style={{position: 'absolute', left: 30, top: 440, width: 460, height: 200, borderRadius: 18, border: `2px dashed ${colors.amber}`, opacity: on(f, T.photograph, 14), transform: `scale(${bump(f, fps, T.photograph + LAND, 0.05).toFixed(4)})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.amber}}>
					PHOTOGRAPH · ABOUT 18:39
				</div>
			</div>
			<div style={{position: 'absolute', left: 1260, top: 200, width: 560, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, color: colors.ink, lineHeight: 1.7}}>
				<div style={{opacity: on(f, T.seven, 8)}}>
					<span style={{...litStyle(f, T.seven, colors.amber), fontSize: 34, fontWeight: 700}}>19 SEP · ABOUT 18:40</span> <span style={{opacity: on(f, wf(80, 'evening'), 8), ...litStyle(f, wf(80, 'evening'), colors.ink)}}>· EVENING</span>
				</div>
				<div style={{marginTop: 14}}>
					<span style={{opacity: on(f, T.putting, 8)}}>SUBJECT: PUTTING THE</span> <span style={{opacity: on(f, T.cabin, 8), ...litStyle(f, T.cabin, colors.ink)}}>CABIN INTERIOR</span>{' '}
					<span style={{opacity: on(f, T.back, 8), ...litStyle(f, T.back, colors.ink)}}>BACK TOGETHER</span>
				</div>
				<div style={{color: colors.sub, marginTop: 20}}>MESSAGE CONTENT NOT SHOWN · NAMES WITHHELD</div>
				<div style={{color: colors.sub}}>NTSB AIR-25-04</div>
				<div style={{marginTop: 20, opacity: on(f, T.one, 8), ...litStyle(f, T.one, colors.amber)}}>ONE MESSAGE CARRIED A PHOTOGRAPH</div>
			</div>
			<Label text="RECONSTRUCTION" style={{position: 'absolute', left: 700, top: 890}} />
		</AbsoluteFill>
	);
};

// ---------- SIGNATURE 2: the photograph (C35), a labelled reconstruction of its view, on exhibit paper (§6.5a)
const Photograph: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(82) - 8;
	const end = sf(89) + 10;
	const P = {
		plug: wf(82, 'plug'),
		closed: wf(82, 'closed'),
		three: wf(83, 'three'),
		four: wf(83, 'four'),
		positions: wf(83, 'positions'),
		view: wf(83, 'view'),
		each: wf(84, 'each'),
		see: wf(84, 'see'),
		nothing: wf(84, 'nothing'),
	};
	// "you can see": the view pushes in toward the empty positions
	const dist = rollTo(f, [{frame: P.see - 6, value: 128}, {frame: P.nothing + 20, value: 118}]);
	const c = cam(0.0, 0.02, dist, 560, 470, 30);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.1, emptyHoles: 0};
	const k = settle(f, fps, a);
	const pos = ['upperFwd', 'lowerFwd', 'lowerAft'] as const;
	const circles = pos.map((p, i) => {
		const q = anchor(state, c, p);
		const d = lead(f, P.three + i * 14, 20);
		const red = f >= P.nothing - 6;
		const r = 44 * (1 + 0.15 * flash(f, P.each + i * 8, 0));
		return <circle key={p} cx={q.x} cy={q.y} r={r} fill="none" stroke={red ? colors.red : colors.ink} strokeWidth={4} strokeDasharray={`${2 * Math.PI * r * d} 400`} />;
	});
	const items: [string, number, number][] = [
		['BOLTS', wf(85, 'no'), wf(85, 'bolts')],
		['WASHERS', wf(86, 'no'), wf(86, 'washers')],
		['NUTS', wf(87, 'no'), wf(87, 'nuts')],
		['PINS', wf(88, 'no'), wf(88, 'pins')],
	];
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 150, top: 80 + (1 - k) * 40, width: 1000, height: 860, background: colors.card, border: `2px solid ${colors.cyan}`, opacity: Math.min(1, k * 1.4), boxShadow: '0 30px 80px rgba(0,0,0,0.6)'}}>
				<div style={{position: 'absolute', left: 30, top: 30, width: 940, height: 740, background: colors.void, overflow: 'hidden'}}>
					<div style={{position: 'absolute', left: -150 - 30, top: -80 - 30, width: 1920, height: 1080}}>
						<PlugSvg cam={c} state={state} extra={<>{circles}</>} />
					</div>
				</div>
				<div style={{position: 'absolute', left: 30, right: 30, bottom: 20, display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 26, letterSpacing: 1, color: colors.ink}}>
					<span style={{color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 10px'}}>RECONSTRUCTION</span>
					<span>VIEW OF 19 SEP 2023 · ABOUT 18:39</span>
				</div>
			</div>
			{/* the honesty line is the size of what it labels (§6.7: 36 px), because only here could a drawing pass for the photograph */}
			<div style={{position: 'absolute', left: 1200, top: 90, width: 640, fontFamily: mono, background: colors.card, border: `2px solid ${colors.amber}`, padding: '16px 20px', fontSize: 36, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0.5, color: colors.amber, opacity: tween(f, a + 10, a + 30, 0, 1)}}>
				RECONSTRUCTION
				<div style={{fontSize: 28, fontWeight: 400, color: colors.ink, marginTop: 8}}>REDRAWN FROM NTSB AIR-25-04 FIG. 18, A BOEING PHOTOGRAPH</div>
			</div>
			<div style={{position: 'absolute', left: 1200, top: 360, width: 640, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1, lineHeight: 1.3, color: colors.sub}}>
					<span style={{opacity: on(f, P.plug, 8), ...litStyle(f, P.plug, colors.ink)}}>THE PLUG,</span> <span style={{opacity: on(f, P.closed, 8), ...litStyle(f, P.closed, colors.ink)}}>CLOSED ·</span>{' '}
					<span style={{opacity: on(f, P.three, 8), ...litStyle(f, P.three, colors.ink)}}>3</span> <span style={{opacity: on(f, P.four, 8), ...litStyle(f, P.four, colors.ink)}}>OF 4</span>{' '}
					<span style={{opacity: on(f, P.positions, 8)}}>BOLT POSITIONS</span> <span style={{opacity: on(f, P.view, 8), ...litStyle(f, P.view, colors.ink)}}>IN VIEW</span>
				</div>
				{items.map(([t, no, noun]) => (
					<div key={t} style={{fontSize: 56, fontWeight: 700, letterSpacing: 6, color: colors.red, marginTop: 26}}>
						<Arrive f={f} fps={fps} on={no}>
							NO
						</Arrive>{' '}
						<Arrive f={f} fps={fps} on={noun}>
							{t}
						</Arrive>
					</div>
				))}
			</div>
			<div style={{position: 'absolute', left: 1200, top: 880, fontFamily: mono, fontSize: 28, letterSpacing: 2, color: colors.amber, opacity: tween(f, sf(88) + 40, sf(88) + 70, 0, 1)}}>108 DAYS BEFORE PORTLAND</div>
		</Fade>
	);
};

// ---------- no video (C36, C68)
const Video: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(89) - 6;
	const end = sf(92) + 6;
	const V = {
		one: wf(89, 'one'),
		knew: wf(89, 'knew'),
		closed: wf(89, 'closed'),
		routine: wf(90, 'routine'),
		kept: wf(90, 'kept'),
		security: wf(90, 'security'),
		thirty: wf(90, 'thirty'),
		days: wf(90, 'days'),
		accident: wf(91, 'accident'),
		long: wf(91, 'long'),
		after: wf(91, 'after'),
	};
	// the retention window fills to 30 days on "thirty", then runs out between "accident" and "after"
	const left = Math.round(rollTo(f, [{frame: V.kept, value: 0}, {frame: V.thirty + LAND, value: 30}, {frame: V.accident, value: 30}, {frame: V.after + LAND, value: 0}], true));
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 300, top: 260, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, opacity: on(f, V.closed, 8), ...litStyle(f, V.closed, colors.amber)}}>WHO CLOSED IT</div>
				<div style={{fontSize: 40, fontWeight: 700, color: colors.ink, marginTop: 12}}>
					<span style={{opacity: on(f, V.one, 8)}}>NO ONE INTERVIEWED</span> <span style={{opacity: on(f, V.knew, 8)}}>SAID THEY KNEW</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 90}}>
					<span style={{opacity: on(f, V.security, 8), ...litStyle(f, V.security, colors.ink)}}>FACTORY SECURITY VIDEO</span> <span style={{opacity: on(f, V.routine, 8)}}>· KEPT AS A MATTER OF ROUTINE</span>
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: 20, opacity: on(f, V.kept, 10)}}>
					<div style={{width: 900, height: 22, border: `1px solid ${colors.border}`}}>
						<div style={{width: `${(left / 30) * 100}%`, height: '100%', background: f < V.accident ? colors.cyan : colors.red}} />
					</div>
					<div style={{fontSize: 40, fontWeight: 700, color: f >= V.after ? colors.red : colors.ink, display: 'inline-block', transform: `scale(${Math.max(bump(f, fps, V.thirty + LAND), bump(f, fps, V.after + LAND)).toFixed(4)})`, transformOrigin: '0 50%'}}>
						{left} <span style={{opacity: on(f, V.days, 8)}}>{left === 1 ? 'DAY' : 'DAYS'}</span>
					</div>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.red, marginTop: 16, opacity: on(f, V.long, 10)}}>THE ACCIDENT CAME 108 DAYS AFTER · NTSB AIR-25-04</div>
			</div>
		</Fade>
	);
};

// ---------- the sign-off (C38, C37)
const SignOff: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={67} start={sf(92) - 8} end={sf(96) + 6} hl={[{key: 'no_looking', at: wf(93, 'involve') - 20}]} label="EXHIBIT 06" title="QUALITY SIGN-OFF, 20 SEP 2023" pushTo={wf(93, 'sign-off')} pad={[200, 300]} />
			<KeyLine f={f} fps={fps} start={sf(92) - 6} end={sf(93) - 4} x={72} y={950} parts={[
				{t: '20', at: wf(92, 'twentieth'), tone: colors.amber},
				{t: 'SEP', at: wf(92, 'september'), tone: colors.amber},
				{t: '· A QUALITY INSPECTOR', at: wf(92, 'inspector')},
				{t: 'SIGNED OFF THE JOB', at: wf(92, 'signed'), tone: colors.cyan},
			]} />
			<KeyLine f={f} fps={fps} start={sf(93) - 4} end={sf(94) - 4} x={72} y={950} parts={[
				{t: 'HER SIGN-OFF', at: wf(93, 'sign-off')},
				{t: '· TO INVESTIGATORS:', at: wf(93, 'investigators')},
				{t: 'DID NOT INVOLVE', at: wf(93, 'not'), tone: colors.amber},
				{t: 'LOOKING AT', at: wf(93, 'looking'), tone: colors.amber},
				{t: 'THE AIRPLANE', at: wf(93, 'airplane'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(94) - 4} end={sf(95) - 4} x={72} y={950} parts={[
				{t: 'SHE CHECKED', at: wf(94, 'checked')},
				{t: 'EVERY STEP', at: wf(94, 'every')},
				{t: 'FOR THE RIVET WORK', at: wf(94, 'rivet')},
				{t: '· SIGNED OFF', at: wf(94, 'signed'), tone: colors.cyan},
			]} />
			<KeyLine f={f} fps={fps} start={sf(95) - 4} end={sf(96) + 4} x={72} y={950} parts={[
				{t: 'NO', at: wf(95, 'no'), tone: colors.red},
				{t: 'REMOVAL RECORD', at: wf(95, 'removal'), tone: colors.red},
				{t: '· THE PAPERWORK', at: wf(95, 'paperwork')},
				{t: 'SAID NOTHING', at: wf(95, 'nothing'), tone: colors.amber},
				{t: 'ABOUT THE PLUG', at: wf(95, 'plug'), tone: colors.amber},
			]} />
		</>
	);
};

// ---------- the wall goes on; 41 days to delivery (C75, C22)
const Wall: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(96) - 10;
	const end = sf(98) + 10;
	const W = {cabin: wf(96, 'cabin'), wall: wf(96, 'wall'), place: wf(96, 'place'), over: wf(96, 'over'), d41: wf(97, 'forty-one'), days: wf(97, 'days'), airplane: wf(97, 'airplane'), delivered: wf(97, 'delivered'), alaska: wf(97, 'alaska')};
	const c = cam(0.35, 0.1, 160, 800, 470);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.1, emptyHoles: 1};
	const wall = tween(f, W.wall - 10, W.place + LAND, 0, 1, ease.camera);
	const p0 = projectPoint(c, [-26, 70, -7]);
	const p1 = projectPoint(c, [26, 70, -7]);
	const p2 = projectPoint(c, [26, -10, -7]);
	const p3 = projectPoint(c, [-26, -10, -7]);
	const head = interpolate(f, [sf(97), W.delivered], [E.signed, E.delivered], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const ty = (1 - wall) * 900;
	const d = Math.round(rollTo(f, [{frame: W.d41 - 16, value: 0}, {frame: W.d41 + LAND, value: 41}], true));
	return (
		<>
			<Mount x={96} y={84} w={1440} h={700} source="ILLUSTRATION · CABIN SIDEWALL INSTALLED OVER THE PLUG" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} extra={<polygon points={`${p0.x},${p0.y + ty} ${p1.x},${p1.y + ty} ${p2.x},${p2.y + ty} ${p3.x},${p3.y + ty}`} fill="rgba(148,163,184,0.38)" stroke={colors.sub} strokeWidth={2} />} />
				</div>
			</Mount>
			<KeyLine f={f} fps={fps} start={sf(96) - 8} end={sf(97) - 4} x={136} y={140} parts={[
				{t: 'THE CABIN WALL', at: W.cabin},
				{t: 'IN PLACE', at: W.place, tone: colors.amber},
				{t: '· OVER THE PLUG', at: W.over, tone: colors.amber},
			]} />
			<div style={{position: 'absolute', left: 136, top: 130, fontFamily: mono, background: colors.card, border: `1px solid ${colors.border}`, padding: '12px 20px', opacity: on(f, W.d41, 10)}}>
				<div style={{fontSize: 56, fontWeight: 700, color: colors.amber, display: 'inline-block', transform: `scale(${bump(f, fps, W.d41 + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
					{d} <span style={{fontSize: 30, opacity: on(f, W.days, 8)}}>DAYS LATER</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2}}>
					<span style={{opacity: on(f, W.delivered, 8), ...litStyle(f, W.delivered, colors.cyan)}}>DELIVERED</span> <span style={{opacity: on(f, W.alaska, 8), ...litStyle(f, W.alaska, colors.ink)}}>TO ALASKA AIRLINES</span>
				</div>
			</div>
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.shut, label: 'CLOSED · NO BOLTS', tone: 'red', on: a - 100},
				{d: E.delivered, label: 'DELIVERED 31 OCT', tone: 'cyan', on: W.delivered},
			]} />
		</>
	);
};

// ---------- the NTSB did not stop there (framing)
const Fan: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(98) - 10;
	const end = sf(100) + 6;
	const pages = ['pages/p062_sat_entries.jpg', 'pages/p067_qa_signoff.jpg', 'pages/p071_workforce.jpg', 'pages/p076_bpi_50_pages.jpg', 'pages/p134_findings_20_21.jpg'];
	// "It would be easy to stop there": the stack holds closed; "did not stop there": it fans open
	const lifts = [wf(98, 'easy'), wf(98, 'stop'), wf(98, 'missing'), wf(98, 'name'), wf(98, 'give')];
	const spread = tween(f, wf(99, 'did') - 6, wf(99, 'there') + 10, 0.25, 1, ease.arrive);
	return (
		<Fade start={a} end={end}>
			{pages.map((p, i) => (
				<div key={p} style={{position: 'absolute', left: 760 + (i - 2) * 230 * spread, top: 200 - 18 * flash(f, lifts[i], 0), width: 400, height: 518, transform: `rotate(${(i - 2) * 5 * spread}deg)`, boxShadow: '0 20px 50px rgba(0,0,0,0.6)'}}>
					<ImgPage src={p} />
				</div>
			))}
			<KeyLine f={f} fps={fps} start={sf(98) - 6} end={sf(99) - 4} x={560} y={800} parts={[
				{t: 'A MISSING DOCUMENT', at: wf(98, 'document'), tone: colors.amber},
				{t: '· A NAME', at: wf(98, 'name')},
				{t: 'NO ONE CAN GIVE', at: wf(98, 'one')},
			]} />
			<KeyLine f={f} fps={fps} start={sf(99) - 4} end={end} x={620} y={800} parts={[
				{t: 'N', at: wf(99, 'n'), tone: colors.cyan, join: true},
				{t: 'T', at: wf(99, 't'), tone: colors.cyan, join: true},
				{t: 'S', at: wf(99, 's'), tone: colors.cyan, join: true},
				{t: 'B', at: wf(99, 'b'), tone: colors.cyan},
				{t: '· DID NOT STOP THERE', at: wf(99, 'not')},
				{t: '· AIR-25-04', at: wf(99, 'there')},
			]} />
		</Fade>
	);
};
const ImgPage: React.FC<{src: string}> = ({src}) => <Img src={media(src)} style={{width: 400, height: 518}} />;

// ---------- the instruction (C39, C40) and finding 21 (C41)
const Bpi: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const B = {revised: wf(102, 'revised'), eleven: wf(102, 'eleven'), ten: wf(102, 'ten'), sixteen: wf(103, 'sixteen'), regulatory: wf(103, 'regulatory'), eighteen: wf(103, 'eighteen'), come: wf(103, 'come')};
	const rev = Math.round(rollTo(f, [{frame: B.revised, value: 0}, {frame: B.eleven + LAND, value: 11}], true));
	const cases = Math.round(rollTo(f, [{frame: B.come, value: 0}, {frame: B.sixteen + LAND, value: 16}], true));
	return (
		<>
			<ReportPage page={76} start={sf(100) - 8} end={sf(104) + 6} hl={[{key: 'bpi_50', at: wf(100, 'fifty') - 20}, {key: 'bpi_exceptions', at: wf(101, 'exceptions') - 30}, {key: 'bpi_11', at: wf(102, 'eleven') - 16}]} label="EXHIBIT 07" title="BPI “PERFORM PART OR ASSEMBLY REMOVAL”" pushTo={wf(101, 'exceptions')} pad={[120, 260]} />
			<KeyLine f={f} fps={fps} start={sf(100) - 6} end={sf(101) - 4} x={72} y={950} parts={[
				{t: 'THE INSTRUCTION', at: wf(100, 'instruction')},
				{t: 'TOLD WORKERS', at: wf(100, 'workers')},
				{t: 'WHEN A REMOVAL RECORD', at: wf(100, 'removal'), tone: colors.cyan},
				{t: 'WAS NEEDED', at: wf(100, 'needed'), tone: colors.cyan},
				{t: '· RAN TO', at: wf(100, 'ran')},
				{t: '50+ PAGES', at: wf(100, 'fifty'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(101) - 4} end={sf(102) - 4} x={72} y={950} parts={[
				{t: 'NTSB', at: wf(101, 'n'), tone: colors.cyan},
				{t: 'FOUND:', at: wf(101, 'found')},
				{t: 'IT LISTED', at: wf(101, 'listed')},
				{t: 'MORE EXCEPTIONS', at: wf(101, 'exceptions'), tone: colors.amber},
				{t: 'THAN DIRECTIONS', at: wf(101, 'directions'), tone: colors.amber},
			]} />
			<div style={{position: 'absolute', left: 1460, top: 760, width: 400, fontFamily: mono, background: colors.card, border: `1px solid ${colors.border}`, padding: '18px 22px', opacity: envelope(f, sf(102) - 6, sf(104) + 6, 12, 12)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, B.revised, colors.ink)}}>REVISIONS</div>
				<div style={{fontSize: 44, fontWeight: 700, color: colors.amber, display: 'inline-block', transform: `scale(${bump(f, fps, B.eleven + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
					{rev} <span style={{fontSize: 26, opacity: on(f, B.ten, 8)}}>IN 10 YEARS</span>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, marginTop: 10, opacity: on(f, B.regulatory, 10), ...litStyle(f, wf(103, 'cases'), colors.ink)}}>COMPLIANCE CASES</div>
				<div style={{fontSize: 44, fontWeight: 700, color: colors.amber, opacity: on(f, B.come, 10), display: 'inline-block', transform: `scale(${bump(f, fps, B.sixteen + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
					{cases} <span style={{fontSize: 26, opacity: on(f, B.eighteen, 8)}}>SINCE 2018</span>
				</div>
			</div>
		</>
	);
};

const Finding21: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={134} start={sf(104) - 8} end={sf(105) + 6} hl={[{key: 'finding21', at: wf(104, 'ineffective') - 30}]} label="FINDING 21" title="FINDINGS" pushTo={wf(104, 'ineffective') - 20} pad={[140, 220]} />
			<KeyLine f={f} fps={fps} start={sf(104) - 6} end={sf(105) + 4} x={72} y={890} parts={[
				{t: "BOEING'S CORRECTIVE ACTIONS", at: wf(104, 'corrective')},
				{t: 'ACCEPTED', at: wf(104, 'accepted'), tone: colors.cyan},
				{t: 'BY ITS REGULATOR,', at: wf(104, 'regulator')},
				{t: 'THE FAA', at: wf(104, 'f'), tone: colors.cyan},
				{t: '(US)', at: wf(104, 'a', 1)},
				{t: 'FOR AT LEAST', at: wf(104, 'least'), br: true},
				{t: '10 YEARS', at: wf(104, 'ten'), tone: colors.amber},
				{t: '· THE INVESTIGATORS', at: wf(104, 'investigators')},
				{t: 'FOUND:', at: wf(104, 'found')},
				{t: 'THOSE ACTIONS', at: wf(104, 'actions', 1)},
				{t: 'INEFFECTIVE', at: wf(104, 'ineffective'), tone: colors.red},
			]} />
		</>
	);
};

// ---------- the regulator (C48, C49)
const Regulator: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(105) - 10;
	const end = sf(108) + 6;
	const G = {
		faa: wf(105, 'f'),
		five: wf(105, 'five'),
		inspectors: wf(105, 'inspectors'),
		program: wf(105, 'program'),
		fuselage: wf(105, 'fuselage'),
		factory: wf(105, 'factory'),
		twelve: wf(106, 'twelve'),
		build: wf(106, 'build'),
		audits: wf(106, 'audits'),
		logged: wf(106, 'logged'),
		s68: wf(106, 'sixty-eight'),
		alleged: wf(106, 'alleged'),
		one: wf(107, 'one'),
		mentioned: wf(107, 'mentioned'),
		removal: wf(107, 'removal'),
	};
	const n = Math.round(rollTo(f, [{frame: G.logged - 6, value: 0}, {frame: G.s68 + LAND, value: 68}], true));
	const zero = f >= G.one + LAND;
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 180, top: 140, width: 1600, fontFamily: mono}}>
				<div style={{fontSize: 32, letterSpacing: 1.2}}>
					<span style={{opacity: on(f, G.faa, 8), ...litStyle(f, G.faa, colors.cyan)}}>FAA</span> <span style={{opacity: on(f, G.inspectors, 8), ...litStyle(f, G.inspectors, colors.ink)}}>INSPECTORS</span>{' '}
					<span style={{opacity: on(f, wf(105, 'thirty-seven'), 8), ...litStyle(f, wf(105, 'thirty-seven'), colors.ink)}}>ON THE 737</span> <span style={{opacity: on(f, G.program, 8), ...litStyle(f, G.program, colors.ink)}}>PROGRAM</span> <span style={{opacity: on(f, G.fuselage, 8), ...litStyle(f, G.factory, colors.ink)}}>· WHILE THE FUSELAGE WAS AT RENTON</span>
				</div>
				<div style={{display: 'flex', gap: 34, marginTop: 36}}>
					{[0, 1, 2, 3, 4].map((i) => (
						<div key={i} style={{width: 120, height: 160, border: `2px solid ${colors.cyan}`, opacity: on(f, G.five - 20 + i * 6, 8), position: 'relative'}}>
							<div style={{position: 'absolute', left: 38, top: 24, width: 44, height: 44, borderRadius: 22, border: `2px solid ${colors.cyan}`}} />
							<div style={{position: 'absolute', left: 24, top: 82, width: 72, height: 58, borderTopLeftRadius: 36, borderTopRightRadius: 36, border: `2px solid ${colors.cyan}`, borderBottom: 'none'}} />
						</div>
					))}
					<div style={{fontSize: 96, fontWeight: 700, color: colors.ink, marginLeft: 24, alignSelf: 'center'}}>
						<Arrive f={f} fps={fps} on={G.five}>5</Arrive>
					</div>
				</div>
				<div style={{display: 'flex', gap: 80, marginTop: 70}}>
					<div style={{width: 760, opacity: on(f, G.twelve, 10)}}>
						<div style={{fontSize: 30, letterSpacing: 1}}>
							<span style={{opacity: on(f, G.alleged, 8), ...litStyle(f, G.alleged, colors.amber)}}>ALLEGED NONCOMPLIANCES</span> <span style={{opacity: on(f, G.audits, 8), ...litStyle(f, G.audits, colors.ink)}}>· FAA AUDITS · RENTON</span>
						</div>
						<div style={{fontSize: 30, letterSpacing: 1, ...litStyle(f, G.twelve, colors.ink)}}>OCT 2022 – SEP 2023 <span style={{opacity: on(f, G.build, 8), color: colors.sub}}>· TO THE BUILD</span></div>
						<div style={{fontSize: 150, fontWeight: 700, lineHeight: 1.1, color: colors.amber, fontVariantNumeric: 'tabular-nums', display: 'inline-block', transform: `scale(${bump(f, fps, G.s68 + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>{n}</div>
					</div>
					<div style={{width: 760, opacity: on(f, G.one - 10, 10)}}>
						<div style={{fontSize: 30, letterSpacing: 1, ...litStyle(f, G.mentioned, colors.ink)}}>MENTIONING</div>
						<div style={{fontSize: 30, letterSpacing: 1, ...litStyle(f, G.removal, colors.ink)}}>THE REMOVAL INSTRUCTION</div>
						<div style={{fontSize: 150, fontWeight: 700, lineHeight: 1.1, color: zero ? colors.red : colors.ink, display: 'inline-block', transform: `scale(${bump(f, fps, G.one + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>0</div>
					</div>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1, color: colors.sub, marginTop: 24}}>NTSB AIR-25-04</div>
			</div>
		</Fade>
	);
};

// ---------- the people: the production line (C42, C43, C44)
const Line: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(108) - 10;
	const end = sf(115) + 6;
	const L = {
		people: wf(108, 'people'),
		eighteen: wf(109, 'eighteen'),
		t37: wf(109, 'thirty-seven'),
		built: wf(109, 'built'),
		f52: wf(109, 'fifty-two'),
		month: wf(109, 'month'),
		low: wf(112, 'low'),
		built2: wf(112, 'built'),
		ten: wf(112, 'ten'),
		return_: wf(113, 'return'),
		rate: wf(113, 'rate'),
	};
	const bars = [
		{t: 'BEFORE 2018', tAt: L.eighteen, v: 52, from: L.built - 10, to: L.f52 + LAND, tone: colors.cyan, note: 'ABOUT 52'},
		{t: 'PANDEMIC LOW', tAt: L.low, v: 10, from: L.built2 - 10, to: L.ten + LAND, tone: colors.amber, note: 'FEWER THAN 10'},
		{t: 'BEFORE THE ACCIDENT', tAt: L.return_, v: 38, from: L.return_, to: L.rate + LAND, tone: colors.cyan, note: 'ABOUT 30–38'},
	];
	const H = 460;
	return (
		<Fade start={a} end={end}>
			<Mount x={180} y={110} w={1560} h={780} source="NTSB AIR-25-04 · 737 LINE, AIRPLANES PER MONTH" start={a} end={end} lean={1}>
				<div style={{position: 'absolute', left: 60, top: 36, fontFamily: mono, fontSize: 26, letterSpacing: 1.5}}>
					<span style={litStyle(f, L.t37, colors.ink)}>BOEING 737 PRODUCTION</span> <span style={litStyle(f, L.month, colors.ink)}>· AIRPLANES A MONTH</span>
				</div>
				<div style={{position: 'absolute', left: 60, top: 80, fontFamily: sans, fontWeight: 700, fontSize: 44, letterSpacing: 4, color: colors.ink, opacity: envelope(f, L.people - 10, sf(109) + 20, 10, 14)}}>
					<Arrive f={f} fps={fps} on={L.people}>THE PEOPLE</Arrive>
				</div>
				<svg width={1560} height={746} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={120} x2={1440} y1={620} y2={620} stroke={colors.border} strokeWidth={2} />
					{bars.map((b, i) => {
						const k = tween(f, b.from, b.to, 0, 1, ease.camera);
						const h = (b.v / 52) * H * k;
						const x = 220 + i * 420;
						return (
							<g key={b.t} opacity={Math.min(1, k * 3)}>
								<rect x={x} y={620 - h} width={200} height={h} fill={b.tone} opacity={0.85} />
								{i === 2 ? <rect x={x} y={620 - (30 / 52) * H * k} width={200} height={2} fill={colors.void} /> : null}
								<text x={x + 100} y={600 - h} textAnchor="middle" fill={colors.ink} fontFamily="JetBrains Mono" fontWeight={700} fontSize={34} opacity={tween(k, 0.85, 1, 0, 1)}>
									{b.note}
								</text>
							</g>
						);
					})}
					{/* each slot and its label arrive on the label's own words, before the bar rises (forensic review r3b:
					    the chart sat empty for about 5 s before its first bar) */}
					{bars.map((b, i) => {
						const x = 220 + i * 420;
						const o = on(f, b.tAt - 6, 10);
						return (
							<g key={`slot-${b.t}`} opacity={o}>
								<rect x={x} y={612} width={200 * on(f, b.tAt, 14)} height={8} fill={b.tone} opacity={0.5} />
								<text x={x + 100} y={664} textAnchor="middle" fill={f >= b.tAt ? colors.ink : colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1}>
									{b.t}
								</text>
							</g>
						);
					})}
				</svg>
				<KeyLine f={f} fps={fps} start={sf(110) - 10} end={sf(111) + 4} x={560} y={64} w={900} size={26} card={false} parts={[
					{t: '2018–19 ·', at: wf(110, 'two'), tone: colors.amber},
					{t: 'TWO FATAL ACCIDENTS', at: wf(110, 'accidents')},
					{t: '· INVOLVING', at: wf(110, 'involving')},
					{t: 'THE 737', at: wf(110, 'thirty-seven')},
					{t: 'MAX', at: wf(110, 'max')},
					{t: '· BOEING', at: wf(110, 'boeing')},
					{t: 'CUT PRODUCTION', at: wf(110, 'cut'), tone: colors.amber},
					{t: '· STOPPED', at: wf(110, 'stopped'), tone: colors.amber},
					{t: 'HIRING', at: wf(110, 'hiring'), tone: colors.amber},
					{t: '· LEAVERS NOT REPLACED', at: wf(110, 'replace'), tone: colors.amber},
				]} />
				<KeyLine f={f} fps={fps} start={sf(111) - 6} end={sf(113) - 6} x={560} y={64} w={900} size={26} card={false} parts={[
					{t: 'THE PANDEMIC', at: wf(111, 'pandemic'), tone: colors.amber},
					{t: '· MORE LEFT', at: wf(111, 'more')},
					{t: '· PARTICULARLY', at: wf(111, 'particularly')},
					{t: 'THOSE ELIGIBLE TO RETIRE', at: wf(111, 'eligible')},
				]} />
				<KeyLine f={f} fps={fps} start={sf(113) - 6} end={end} x={560} y={64} w={900} size={26} card={false} parts={[
					{t: '2022', at: wf(113, 'twenty-two'), tone: colors.amber},
					{t: '· BOEING SET OUT', at: wf(113, 'boeing')},
					{t: 'TO RETURN TO ITS OLD RATE', at: wf(113, 'return')},
					{t: '· INCREASED HIRING', at: wf(113, 'hired'), tone: colors.amber},
					{t: '· MANY NEW HIRES', at: wf(114, 'hires'), br: true},
					{t: 'HAD NEVER WORKED', at: wf(114, 'never'), tone: colors.amber},
					{t: 'IN MANUFACTURING', at: wf(114, 'manufacturing'), tone: colors.amber},
				]} />
			</Mount>
		</Fade>
	);
};

// ---------- experience (C45) and finding 20 (C46)
const Experience: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(115) - 8;
	const barOn = sf(117) - 10;
	const end = sf(118) + 6;
	const X = {today: wf(117, 'today'), t25: wf(117, 'twenty-five'), t30: wf(117, 'thirty')};
	const v = rollTo(f, [{frame: X.today, value: 50}, {frame: X.t25 + LAND, value: 25}, {frame: X.t30 + LAND, value: 27.5}]);
	return (
		<>
			<ReportPage page={71} start={a} end={barOn + 10} hl={[{key: 'gm_quote', at: wf(116, 'ten') - 15}]} label="EXHIBIT 08" title="WORKFORCE EXPERIENCE · 737 PROGRAM GENERAL MANAGER" pushTo={sf(116)} pad={[120, 200]} />
			<KeyLine f={f} fps={fps} start={sf(115) - 6} end={sf(116) - 4} x={72} y={950} parts={[
				{t: 'THE HEAD', at: wf(115, 'head')},
				{t: 'OF THE 737', at: wf(115, 'thirty-seven'), tone: colors.amber},
				{t: 'PROGRAM', at: wf(115, 'program'), tone: colors.amber},
				{t: '· TO INVESTIGATORS', at: wf(115, 'put')},
			]} />
			<KeyLine f={f} fps={fps} start={sf(116) - 4} end={barOn + 10} x={72} y={950} parts={[
				{t: '10 YEARS AGO', at: wf(116, 'ago'), tone: colors.cyan},
				{t: '· CLOSE TO HALF', at: wf(116, 'half'), tone: colors.cyan},
				{t: 'THE WORKFORCE', at: wf(116, 'workforce')},
				{t: '· MORE THAN 10 YEARS’ EXPERIENCE', at: wf(116, 'ten', 1)},
			]} />
			<Fade start={barOn} end={end}>
				<div style={{position: 'absolute', left: 200, top: 300, fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.ink}}>WORKFORCE WITH MORE THAN 10 YEARS' EXPERIENCE · AS STATED BY THE 737 PROGRAM'S HEAD</div>
					{[
						{t: '10 YEARS AGO', w: 50, txt: '~50%', c: colors.cyan, at: barOn},
						{t: 'TODAY', w: v, txt: '25–30%', c: colors.amber, at: X.today},
					].map((b, i) => (
						<div key={b.t} style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: i ? 28 : 36}}>
							<span style={{width: 240, fontSize: 26, ...litStyle(f, b.at, colors.ink)}}>{b.t}</span>
							<div style={{width: 1200, height: 92, border: `1px solid ${colors.border}`, background: 'rgba(18,24,36,0.8)'}}>
								<div style={{width: `${b.w}%`, height: '100%', background: b.c, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 22, boxSizing: 'border-box'}}>
									<span style={{fontSize: 52, fontWeight: 700, color: colors.void, whiteSpace: 'nowrap', opacity: i ? on(f, X.t25, 8) : 1}}>{b.txt}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</Fade>
		</>
	);
};

const Finding20: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<ReportPage page={134} start={sf(118) - 8} end={sf(120) + 6} hl={[{key: 'finding20', at: wf(119, 'missed') - 20}]} label="FINDING 20" title="FINDINGS" pushTo={wf(119, 'missed') - 20} pad={[160, 260]} />
			<KeyLine f={f} fps={fps} start={sf(118) - 6} end={sf(119) - 4} x={72} y={950} parts={[
				{t: 'BOEING DID NOT ASSESS', at: wf(118, 'assess'), tone: colors.amber},
				{t: 'WHAT THAT LOSS OF EXPERIENCE', at: wf(118, 'loss')},
				{t: 'MIGHT DO', at: wf(118, 'might')},
				{t: 'TO QUALITY', at: wf(118, 'quality'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(119) - 4} end={sf(120) + 4} x={72} y={950} parts={[
				{t: 'NTSB:', at: wf(119, 'n'), tone: colors.cyan},
				{t: 'CALLED IT', at: wf(119, 'called')},
				{t: 'A MISSED OPPORTUNITY', at: wf(119, 'missed'), tone: colors.amber},
			]} />
		</>
	);
};

// ---------- not steel (framing; our reading said as ours)
const NotSteel: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RemovalForm start={sf(120) - 10} end={sf(122) + 4} stamp={wf(121, 'wrote')} x={140} titleAt={wf(121, 'document')} />
			<div style={{position: 'absolute', left: 1220, top: 260, width: 600, fontFamily: sans, fontWeight: 700, fontSize: 46, letterSpacing: 2, color: colors.ink, lineHeight: 1.25, opacity: envelope(f, sf(120), sf(122), 16, 16)}}>
				<WordLine f={f} fps={fps} words={[['THE MARGIN', wf(120, 'margin')], ['THAT RAN OUT', wf(120, 'ran')], ['AT RENTON', wf(120, 'renton')], ['WAS NOT STEEL', wf(120, 'not')]]} />
				<div style={{marginTop: 30, fontSize: 34, color: colors.amber}}>
					<WordLine f={f} fps={fps} words={[['A DOCUMENT', wf(121, 'document')], ['NO ONE WROTE', wf(121, 'one')], ['— AND THE EXPERIENCE', wf(121, 'experience')], ['THAT WOULD HAVE KNOWN', wf(121, 'known')], ['TO WRITE IT', wf(121, 'write')]]} />
				</div>
				<div style={{marginTop: 24, fontFamily: mono, fontWeight: 400, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>OUR READING OF THE RECORD</div>
			</div>
		</>
	);
};

// ---------- the money, read carefully (C56, C57, C83, C84, C47)
const Money: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const end = sf(127) - 6;
	const items = [
		{t: '2018', v: '$9.0 BILLION', s: 'REPURCHASED', on: wf(123, 'nine') - 10, dAt: wf(123, 'eighteen')},
		{t: 'DEC 2018', v: 'UP TO $20 BILLION', s: 'AUTHORIZED BY THE BOARD', on: wf(124, 'twenty') - 10, dAt: wf(124, 'december')},
		{t: '2019', v: '$2.7 BILLION', s: 'REPURCHASED', on: wf(125, 'two') - 10, dAt: wf(125, 'nineteen')},
		{t: 'BY JAN 2020', v: 'SUSPENDED', s: 'PER THE 2019 FORM 10-K', on: wf(126, 'suspended') - 10, dAt: wf(126, 'twenty', 1)},
	];
	return (
		<>
			<RecordDoc doc="boeing_27b" start={sf(122) + 30} end={sf(124) + 6} at={[wf(123, 'nine')]} label="EXHIBIT 09" source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" pushTo={wf(123, 'billion')} />
			<KeyLine f={f} fps={fps} start={sf(122) - 10} end={sf(123) - 4} x={72} y={950} parts={[
				{t: 'ONE', at: wf(122, 'one'), tone: colors.amber},
				{t: 'MORE RECORD', at: wf(122, 'record')},
				{t: '· A FILM LIKE THIS', at: wf(122, 'film')},
				{t: 'HAS TO READ', at: wf(122, 'read')},
				{t: '· CAREFULLY', at: wf(122, 'carefully'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(123) - 4} end={sf(124) - 4} x={72} y={950} parts={[
				{t: '2018', at: wf(123, 'eighteen'), tone: colors.amber},
				{t: '· BOEING', at: wf(123, 'boeing')},
				{t: 'SPENT $9 BILLION', at: wf(123, 'nine'), tone: colors.amber},
				{t: 'BUYING BACK ITS OWN STOCK', at: wf(123, 'buying')},
			]} />
			<RecordDoc doc="boeing_20b" start={sf(124) - 6} end={sf(125) + 30} at={[wf(124, 'twenty'), wf(124, 'more')]} label="EXHIBIT 10" source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" pushTo={wf(124, 'more')} />
			<KeyLine f={f} fps={fps} start={sf(124) - 4} end={sf(125) + 10} x={72} y={950} parts={[
				{t: 'DEC 2018', at: wf(124, 'december'), tone: colors.amber},
				{t: '· THE BOARD', at: wf(124, 'board')},
				{t: 'APPROVED', at: wf(124, 'approved')},
				{t: 'UP TO $20 BILLION MORE', at: wf(124, 'twenty'), tone: colors.amber},
			]} />
			<Fade start={sf(125) + 10} end={end}>
				<Mount x={260} y={160} w={1400} h={640} source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" start={sf(125) + 10} end={end}>
					<div style={{position: 'absolute', left: 60, top: 40, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, ...litStyle(f, wf(126, 'buybacks'), colors.ink)}}>BOEING SHARE REPURCHASES · AS FILED</div>
					{items.map((it, i) => (
						<div key={it.t} style={{position: 'absolute', left: 60, top: 100 + i * 120, display: 'flex', alignItems: 'baseline', gap: 40, fontFamily: mono, opacity: i < 2 ? 1 : on(f, it.dAt, 10)}}>
							<span style={{width: 220, fontSize: 26, ...litStyle(f, it.dAt, colors.ink)}}>{it.t}</span>
							<span style={{fontSize: 52, fontWeight: 700, color: colors.amber, width: 640, opacity: i < 2 ? 1 : on(f, it.on + 10, 8), display: 'inline-block', transform: `scale(${(i < 2 ? 1 : bump(f, fps, it.on + 10 + LAND, 0.05)).toFixed(4)})`, transformOrigin: '0 50%'}}>{it.v}</span>
							<span style={{fontSize: 26, letterSpacing: 1.2, ...(i === 2 ? litStyle(f, wf(125, 'bought'), colors.ink) : {color: colors.sub})}}>{it.s}</span>
						</div>
					))}
				</Mount>
			</Fade>
		</>
	);
};

const NotCause: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = sf(127) - 10;
	const end = ef(130) + 36;
	const N = {report: wf(127, 'report'), mention: wf(127, 'mention')};
	const typed = 'buyback';
	const n = Math.max(0, Math.min(typed.length, Math.floor((f - (N.report - 10)) / 5)));
	return (
		<>
			<Fade start={a} end={sf(128) + 24}>
				<div style={{position: 'absolute', left: 420, top: 330, width: 1080, fontFamily: mono, background: colors.card, border: `1px solid ${colors.border}`, padding: 40, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, ...litStyle(f, wf(127, 'investigation'), colors.ink)}}>OUR SEARCH · NTSB AIR-25-04 · FULL TEXT</div>
					<div style={{marginTop: 14, height: 80, border: `1px solid ${colors.sub}`, background: colors.card, display: 'flex', alignItems: 'center', padding: '0 26px', fontSize: 36, color: colors.ink}}>
						{typed.slice(0, n)}
						<span style={{color: colors.cyan}}>▌</span>
					</div>
					<div style={{marginTop: 20, fontSize: 28, fontWeight: 700, color: colors.amber, opacity: on(f, N.mention, 10), display: 'inline-block', transform: `scale(${bump(f, fps, N.mention + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>0 RESULTS · ALSO “SHARE REPURCHASE”: 0</div>
				</div>
			</Fade>
			<ReportPage page={135} start={sf(128) + 16} end={end} hl={[{key: 'finding27', at: wf(128, 'assess') - 20}]} label="FINDING 27" title="FINDINGS" pushTo={wf(128, 'assess')} pad={[120, 240]} />
			<KeyLine f={f} fps={fps} start={sf(128) - 4} end={sf(129) - 4} x={72} y={950} parts={[
				{t: 'NTSB', at: wf(128, 'n'), tone: colors.cyan},
				{t: 'SAID IT', at: wf(128, 'said')},
				{t: 'COULD NOT ASSESS', at: wf(128, 'assess'), tone: colors.amber},
				{t: 'WHETHER ADVERSE PRESSURE', at: wf(128, 'adverse')},
				{t: 'EXISTED', at: wf(128, 'existed')},
				{t: 'ON THE PRODUCTION LINE', at: wf(128, 'production')},
			]} />
			<KeyLine f={f} fps={fps} start={sf(129) - 4} end={sf(130) - 4} x={72} y={950} parts={[
				{t: 'THE BUYBACKS:', at: wf(129, 'buybacks')},
				{t: 'IN THIS STORY', at: wf(129, 'story')},
				{t: 'AS A FACT', at: wf(129, 'fact'), tone: colors.amber},
				{t: 'ABOUT WHERE THE MONEY WENT', at: wf(129, 'money')},
				{t: '· NOT', at: wf(129, 'not'), tone: colors.amber},
				{t: 'A CAUSE', at: wf(129, 'cause'), tone: colors.amber},
			]} />
			<KeyLine f={f} fps={fps} start={sf(130) - 4} end={end} x={72} y={950} parts={[
				{t: 'THE CAUSE', at: wf(130, 'cause'), tone: colors.red},
				{t: 'THE INVESTIGATORS FOUND', at: wf(130, 'found')},
				{t: 'IS IN THE FACTORY RECORD', at: wf(130, 'factory'), tone: colors.red},
			]} />
		</>
	);
};

const ActIV: React.FC = () => <ActTitle n="IV" title="The Cascade" start={ef(130) + 30} end={sf(131) + 40} sub="154 FLIGHTS" />;

export const act3: SceneDef[] = [
	{id: 'journey', from: sf(49) - 30, to: sf(51) + 20, C: Journey, cues: [{frame: wf(50, 'four'), sfx: 'relay_click', gainDb: -14}]},
	{id: 'spirit', from: sf(51) - 20, to: sf(54) + 20, C: Spirit, cues: [{frame: sf(51) - 12, sfx: 'paper_slide', gainDb: -14}, {frame: wf(52, 'five'), sfx: 'highlighter', gainDb: -16}, {frame: wf(53, 'nearly') - 4, sfx: 'highlighter', gainDb: -16}]},
	{id: 'renton', from: sf(54) - 24, to: sf(59) + 20, C: Renton, cues: [{frame: wf(55, 'five'), sfx: 'pen_scratch', gainDb: -16}]},
	{id: 'record', from: sf(59) - 20, to: sf(61) + 20, C: Record, cues: [{frame: sf(60) - 10, sfx: 'paper_slide', gainDb: -14}]},
	{id: 'ledger', from: sf(61) - 20, to: sf(65) + 16, C: Ledger, cues: [{frame: wf(63, 'painted') - 20, sfx: 'stamp', gainDb: -16}]},
	{id: 'escalation', from: sf(65) - 20, to: sf(66) + 14, C: Escalation, cues: [{frame: sf(65) + 10, sfx: 'relay_click', gainDb: -16}, {frame: sf(65) + 38, sfx: 'relay_click', gainDb: -16}, {frame: sf(65) + 66, sfx: 'relay_click', gainDb: -14}]},
	{id: 'note', from: sf(66) - 16, to: sf(69) + 14, C: Note, cues: [{frame: sf(66) - 8, sfx: 'paper_slide', gainDb: -14}, {frame: wf(66, 'removal'), sfx: 'highlighter', gainDb: -16}, {frame: wf(67, 'opened') - 20, sfx: 'highlighter', gainDb: -16}]},
	{id: 'doorteam', from: sf(69) - 20, to: sf(73) + 14, C: DoorTeam},
	{id: 'norecord', from: sf(73) - 20, to: sf(76) + 16, C: NoRecord, cues: [{frame: wf(74, 'record') - 6, sfx: 'stamp', gainDb: -8}]},
	{id: 'strap', from: sf(76) - 20, to: sf(78) + 20, C: Strap},
	{id: 'closed', from: sf(78) - 20, to: sf(80) + 20, C: Closed, cues: [{frame: wf(79, 'closed'), sfx: 'relay_click', gainDb: -12}]},
	{id: 'texts', from: sf(80) - 20, to: sf(82) + 20, C: Texts},
	{id: 'photograph', from: sf(82) - 16, to: sf(89) + 20, C: Photograph, cues: [{frame: wf(83, 'three') - 10, sfx: 'pen_scratch', gainDb: -14}, {frame: sf(85), sfx: 'stamp', gainDb: -16}, {frame: sf(86), sfx: 'stamp', gainDb: -16}, {frame: sf(87), sfx: 'stamp', gainDb: -16}, {frame: sf(88), sfx: 'stamp', gainDb: -14}]},
	{id: 'video', from: sf(89) - 16, to: sf(92) + 16, C: Video},
	{id: 'signoff', from: sf(92) - 16, to: sf(96) + 16, C: SignOff, cues: [{frame: sf(92) - 8, sfx: 'paper_slide', gainDb: -14}, {frame: wf(93, 'involve') - 20, sfx: 'highlighter', gainDb: -16}]},
	{id: 'wall', from: sf(96) - 20, to: sf(98) + 20, C: Wall, cues: [{frame: sf(96) + 10, sfx: 'whoosh', gainDb: -18}]},
	{id: 'fan', from: sf(98) - 20, to: sf(100) + 16, C: Fan, cues: [{frame: sf(99) - 20, sfx: 'paper_slide', gainDb: -12}]},
	{id: 'bpi', from: sf(100) - 16, to: sf(104) + 16, C: Bpi, cues: [{frame: wf(100, 'fifty') - 20, sfx: 'highlighter', gainDb: -16}, {frame: wf(101, 'exceptions') - 30, sfx: 'highlighter', gainDb: -16}, {frame: wf(102, 'eleven') - 16, sfx: 'highlighter', gainDb: -16}]},
	{id: 'f21', from: sf(104) - 16, to: sf(105) + 16, C: Finding21, cues: [{frame: wf(104, 'ineffective') - 30, sfx: 'highlighter', gainDb: -14}]},
	{id: 'regulator', from: sf(105) - 20, to: sf(108) + 16, C: Regulator, cues: [{frame: sf(107) + 20, sfx: 'relay_click', gainDb: -12}]},
	{id: 'line', from: sf(108) - 20, to: sf(115) + 16, C: Line},
	{id: 'experience', from: sf(115) - 16, to: sf(118) + 16, C: Experience, cues: [{frame: sf(116) - 20, sfx: 'highlighter', gainDb: -16}]},
	{id: 'f20', from: sf(118) - 16, to: sf(120) + 16, C: Finding20, cues: [{frame: wf(119, 'missed') - 20, sfx: 'highlighter', gainDb: -14}]},
	{id: 'notsteel', from: sf(120) - 20, to: sf(122) + 14, C: NotSteel, cues: [{frame: wf(121, 'wrote'), sfx: 'stamp', gainDb: -10}]},
	{id: 'money', from: sf(122) - 20, to: sf(127) + 16, C: Money, cues: [{frame: wf(123, 'nine') - 10, sfx: 'highlighter', gainDb: -16}, {frame: wf(124, 'twenty') - 10, sfx: 'highlighter', gainDb: -16}]},
	{id: 'notcause', from: sf(127) - 20, to: sf(131) + 16, C: NotCause, cues: [{frame: wf(128, 'assess') - 20, sfx: 'highlighter', gainDb: -14}]},
	{id: 'act4title', from: ef(130) + 20, to: sf(131) + 50, C: ActIV, cues: [{frame: ef(130) + 30, sfx: 'whoosh', gainDb: -20}]},
];
