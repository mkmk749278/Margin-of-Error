import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {ease, envelope, settle, tween} from '../../../../lib/remotion/motion';
import {ReportPage, RecordDoc} from '../docs';
import {Camera, projectPoint} from '../engine3d';
import {ActTitle, Caption, Fade, Label, media, mono, Mount, QuoteCard, sans, Stamp, useFilmFrame} from '../kit';
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

// ---------- the journey (C55, C23)
const Journey: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(49) - 20;
	const end = sf(51) + 10;
	const head = interpolate(f, [a + 20, wf(49, 'march'), wf(50, 'wichita'), wf(50, 'place')], [0, E.made, E.made + 40, E.closed], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const boltsOn = wf(50, 'four');
	return (
		<>
			<div style={{position: 'absolute', left: 200, top: 240, fontFamily: mono, color: colors.ink, opacity: envelope(f, a + 10, end, 16, 16)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>LEFT MID EXIT DOOR PLUG · N704AL</div>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 84, letterSpacing: 5, marginTop: 14, transform: `scale(${tween(f, a, end, 1, 1.05)})`, transformOrigin: '0 50%'}}>THE LIFE OF A PART</div>
				<div style={{display: 'flex', gap: 60, marginTop: 50}}>
					<div style={{opacity: tween(f, wf(49, 'malaysia') - 10, wf(49, 'malaysia') + 10, 0, 1)}}>
						<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>MADE</div>
						<div style={{fontSize: 34, fontWeight: 700, marginTop: 6}}>24 MAR 2023</div>
						<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 4}}>SPIRIT AEROSYSTEMS · MALAYSIA</div>
					</div>
					<div style={{opacity: tween(f, wf(50, 'wichita') - 10, wf(50, 'wichita') + 10, 0, 1)}}>
						<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>FINAL CLOSURE</div>
						<div style={{fontSize: 34, fontWeight: 700, marginTop: 6}}>28 JUL 2023</div>
						<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 4}}>SPIRIT AEROSYSTEMS · WICHITA, KANSAS</div>
						<div style={{display: 'flex', gap: 8, marginTop: 16}}>
							{[0, 1, 2, 3].map((i) => (
								<div key={i} style={{width: 60, height: 16, background: f >= boltsOn + i * 8 ? colors.amber : 'transparent', border: `1px solid ${colors.amber}`}} />
							))}
							<span style={{fontSize: 26, letterSpacing: 1.2, color: colors.amber, marginLeft: 8, opacity: tween(f, boltsOn + 30, boltsOn + 44, 0, 1)}}>4 OF 4 BOLTS</span>
						</div>
					</div>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 40}}>NTSB AIR-25-04 · MANUFACTURING RECORDS</div>
			</div>
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.made, label: 'MADE · MALAYSIA', tone: 'cyan', on: wf(49, 'malaysia')},
				{d: E.closed, label: 'CLOSED · 4 BOLTS · WICHITA', tone: 'amber', on: wf(50, 'place')},
			]} />
		</>
	);
};

// ---------- two companies (C53, C54, C72)
const Spirit: React.FC = () => (
	<>
		<RecordDoc doc="spirit_2005" start={sf(51) - 12} end={sf(53) + 6} at={[wf(52, 'five')]} label="EXHIBIT 03" source="SPIRIT AEROSYSTEMS FORM 10-K, FY 2023 · SEC EDGAR" pushTo={wf(52, 'five')} />
		<RecordDoc doc="spirit_64" start={sf(53) - 30} end={sf(54) + 12} at={[wf(53, 'nearly') - 4]} label="EXHIBIT 04" source="SPIRIT AEROSYSTEMS FORM 10-K, FY 2023 · SEC EDGAR" pushTo={wf(53, 'two')} />
	</>
);

// ---------- Renton: five rivets, and who may open the plug (C24, C25)
const Renton: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(54) - 16;
	const rivOn = wf(55, 'five');
	const ruleOn = sf(57);
	const end = sf(59) + 10;
	const c = cam(0.22, 0.1, 160, 820, 470);
	const state: PlugState = {...defaultState, stopGlow: 0.2, boltGlow: 0.6};
	const rivets = [24, 28, 32, 36, 40].map((y, i) => {
		const p = projectPoint(c, [-(PLUG.w / 2 + 3.8), y, -0.2]);
		const k = tween(f, rivOn + i * 8, rivOn + i * 8 + 12, 0, 1);
		return <circle key={y} cx={p.x} cy={p.y} r={9 * k} fill="rgba(239,68,68,0.25)" stroke={colors.red} strokeWidth={2.5} opacity={k} />;
	});
	const head = interpolate(f, [a, wf(54, 'thirty-first'), rivOn], [E.closed, E.renton, E.rivets], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	return (
		<>
			<Mount x={96} y={84} w={1060} h={700} source="AFTER NTSB AIR-25-04 · RIVET LOCATIONS" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} extra={<>{rivets}</>} />
				</div>
			</Mount>
			<div style={{position: 'absolute', left: 1210, top: 120, width: 620, fontFamily: mono, opacity: envelope(f, a + 20, end, 16, 16)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>BOEING · RENTON, WASHINGTON</div>
				<div style={{fontSize: 30, fontWeight: 700, color: colors.ink, marginTop: 8}}>FUSELAGE ARRIVES 31 AUG 2023</div>
				<div style={{fontSize: 30, fontWeight: 700, letterSpacing: 1.5, color: colors.red, marginTop: 26, opacity: tween(f, rivOn, rivOn + 20, 0, 1)}}>01 SEP · 5 DAMAGED RIVETS</div>
				<div style={{fontSize: 26, letterSpacing: 1.5, color: colors.ink, marginTop: 8, opacity: tween(f, rivOn, rivOn + 20, 0, 1)}}>IN THE EDGE FRAME, JUST FORWARD OF THE PLUG</div>
				<div style={{fontSize: 26, letterSpacing: 1.5, color: colors.ink, marginTop: 26, opacity: tween(f, sf(56), sf(56) + 20, 0, 1)}}>INSTALLED BY ONE OF SPIRIT'S SUPPLIERS</div>
			</div>
			<QuoteCard quote="only Boeing personnel were allowed to perform such work" who="BOEING'S PROCESS" where="AS DESCRIBED IN NTSB AIR-25-04" start={ruleOn} end={end} x={1210} y={474} w={610} size={32} />
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.closed, label: 'CLOSED · WICHITA', tone: 'amber', on: a - 100},
				{d: E.renton, label: 'RENTON 31 AUG', tone: 'cyan', on: wf(54, 'thirty-first')},
				{d: E.rivets, label: '5 RIVETS', tone: 'red', on: rivOn},
			]} />
		</>
	);
};

// ---------- the removal record: what it is (C73) and that none was written (C29)
const RemovalForm: React.FC<{start: number; end: number; stamp?: number; x?: number; y?: number; dimmed?: number; lit?: number[]}> = ({start, end, stamp, x = 420, y = 90, dimmed = 0, lit = []}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = settle(f, fps, start);
	const o = envelope(f, start, end, 14, 16) * (1 - dimmed * 0.6);
	if (o <= 0) return null;
	const rows = ['INSTALLATION DISTURBED', 'STEPS TO RESTORE IT', 'MECHANIC SIGN-OFF', 'QUALITY INSPECTION SIGN-OFF'];
	// round 3: sized for a phone (row labels 30 px, notes 26 px), ink on the paper token only
	return (
		<div style={{position: 'absolute', left: x, top: y + (1 - a) * 40, width: 1000, height: 780, opacity: o, background: colors.paper, boxShadow: '0 30px 80px rgba(0,0,0,0.55)', fontFamily: mono, color: colors.paper_ink}}>
			<div style={{position: 'absolute', left: 50, top: 40, fontSize: 46, fontWeight: 700, letterSpacing: 6}}>REMOVAL RECORD</div>
			<div style={{position: 'absolute', left: 50, top: 104, fontSize: 26, letterSpacing: 1, opacity: 0.75}}>WHAT THE RECORD CONTAINS · PER NTSB AIR-25-04</div>
			<div style={{position: 'absolute', left: 50, right: 50, top: 150, height: 2, background: colors.paper_ink}} />
			{rows.map((r, i) => {
				const on = lit[i] !== undefined && f >= lit[i];
				return (
					<div key={r} style={{position: 'absolute', left: 50, right: 50, top: 184 + i * 128, height: 104, border: `${on ? 4 : 1}px solid ${on ? colors.cyan : colors.sub}`, background: lit[i] !== undefined ? `rgba(56,189,248,${0.16 * tween(f, lit[i], lit[i] + 14, 0, 1)})` : 'transparent', opacity: tween(f, start + 16 + i * 8, start + 30 + i * 8, 0, 1)}}>
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
	return (
		<>
			{/* round 3: each row lights as it is named: "steps to restore" → row 2, "what was disturbed" → row 1, "the quality sign-offs" → rows 3–4 */}
			<RemovalForm start={sf(60) - 10} end={sf(61) + 10} lit={[wf(60, 'disturbed') - 12, wf(60, 'steps') - 12, wf(60, 'quality') - 12, wf(60, 'sign-offs') - 6]} />
			<Caption text="FORCES THE PART BACK · FORCES AN INSPECTION" start={wf(60, 'quality') - 20} end={sf(61) + 6} tone="amber" x={420} y={900} size={28} />
			<Label text="RECONSTRUCTION" style={{position: 'absolute', left: 1460, top: 96, opacity: envelope(f, sf(60), sf(61), 12, 12)}} />
			<div style={{position: 'absolute', left: 0, right: 0, top: 470, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 46, letterSpacing: 3, color: colors.ink, opacity: envelope(f, sf(59) - 10, sf(60) - 10, 14, 14)}}>
				OPENING IT WAS NOT ROUTINE
			</div>
		</>
	);
};

// ---------- back and forth (C26, C85)
const Ledger: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(61) - 10;
	const end = sf(65) + 6;
	const row = (who: string, what: string, on: number, tone: string) => (
		<div style={{display: 'flex', alignItems: 'baseline', gap: 30, padding: '22px 0', borderBottom: `1px solid ${colors.border}`, opacity: tween(f, on, on + 14, 0, 1)}}>
			<span style={{width: 380, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>{who}</span>
			<span style={{fontSize: 36, fontWeight: 700, color: tone}}>{what}</span>
		</div>
	);
	return (
		<>
			<Mount x={200} y={150} w={1520} h={520} source="NTSB AIR-25-04 · RIVET REWORK RECORDS, SEPTEMBER 2023" start={a} end={end} labels={['SUMMARY OF THE RECORD']}>
				<div style={{position: 'absolute', left: 50, top: 40, right: 50, fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>06 SEP 2023 · THE SAME DAY · THE SAME RIVETS</div>
					{row('SPIRIT CONTRACT MECHANIC', 'RECORDED: REPLACED', sf(61) + 40, colors.ink)}
					{row('BOEING QUALITY INSPECTORS', 'RECORDED: “just painted over”', sf(63) + 20, colors.red)}
				</div>
			</Mount>
			<QuoteCard quote="he had confused [the accident] airplane with another airplane he was working on that day" who="SPIRIT AEROSYSTEMS" where="AS REPORTED IN NTSB AIR-25-04" start={sf(64) - 6} end={end} x={200} y={700} w={1520} size={30} />
		</>
	);
};

// ---------- escalation, and the note (C74, C27, C28)
const Escalation: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(65) - 10;
	const end = sf(66) + 4;
	const tiers = [1, 2, 3];
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 660, top: 220, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginBottom: 20}}>REQUEST FOR ACCESS · BOEING SHIPSIDE ACTION TRACKER</div>
				{tiers.map((t, i) => {
					const on = a + 20 + i * 28;
					const k = tween(f, on, on + 16, 0, 1);
					return (
						<div key={t} style={{marginLeft: i * 120, marginTop: 18, width: 360, padding: '20px 24px', border: `1px solid ${i === 2 ? colors.amber : colors.border}`, background: colors.card, opacity: k, fontSize: 26, fontWeight: 700, color: i === 2 ? colors.amber : colors.ink}}>
							TIER {t}
						</div>
					);
				})}
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 30, opacity: tween(f, a + 100, a + 120, 0, 1)}}>ELEVATED TWICE · NTSB AIR-25-04</div>
			</div>
		</Fade>
	);
};

const Note: React.FC = () => (
	<>
		<ReportPage page={62} start={sf(66) - 8} end={sf(69) + 4} hl={[{key: 'removal_first', at: wf(66, 'removal', 0)}, {key: 'opened_by', at: wf(67, 'opened') - 20}]} label="EXHIBIT 05" title="SHIPSIDE ACTION TRACKER ENTRIES, 17–18 SEP 2023" pushTo={wf(66, 'read')} pad={[100, 220]} />
		<NoteCaption />
	</>
);
const NoteCaption: React.FC = () => <Caption text="WHICH MECHANIC: NOT IN THE RECORD" start={sf(68)} end={sf(69) + 4} tone="amber" y={940} />;

// ---------- the door team (C31, C32, C80)
const DoorTeam: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(69) - 10;
	const end = sf(73) + 4;
	const tile = (title: string, lines: string[], on: number, tone: string, x: number) => (
		<div style={{position: 'absolute', left: x, top: 330, width: 560, height: 300, border: `1px solid ${tone}`, background: colors.card, opacity: tween(f, on, on + 16, 0, 1), fontFamily: mono, padding: 30}}>
			<div style={{fontSize: 26, letterSpacing: 1.2, color: tone}}>{title}</div>
			{lines.map((l, i) => (
				<div key={l} style={{fontSize: i === 0 ? 34 : 20, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? colors.ink : colors.sub, marginTop: i === 0 ? 30 : 12, letterSpacing: 1.5}}>
					{l}
				</div>
			))}
		</div>
	);
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 340, top: 230, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>BOEING DOOR TEAM · ONLY THEY COULD WORK ON A PLUG</div>
			{tile('MOST EXPERIENCED MEMBER', ['ABOUT 25 YEARS', 'ON 737 DOORS', 'ON LEAVE 18–19 SEP'], sf(69) + 30, colors.amber, 340)}
			{tile('ON DUTY', ['NONE HAD EVER', 'OPENED A PLUG'], sf(72), colors.red, 1020)}
			<div style={{position: 'absolute', left: 340, top: 680, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: tween(f, sf(70), sf(70) + 20, 0, 1)}}>NTSB AIR-25-04 · INTERVIEWS AND STATEMENTS · NO NAMES</div>
		</Fade>
	);
};

const NoRecord: React.FC = () => {
	const f = useFilmFrame();
	return (
		<>
			<RemovalForm start={sf(73) - 10} end={sf(76) + 6} stamp={wf(74, 'record') - 6} />
			<Caption text="WHO OPENED IT: NO ONE INTERVIEWED SAID THEY KNEW" start={sf(75)} end={sf(76) + 4} tone="amber" x={420} y={900} size={28} />
			<Label text="RECONSTRUCTION" style={{position: 'absolute', left: 1460, top: 96, opacity: envelope(f, sf(73), sf(76), 12, 12)}} />
		</>
	);
};

// ---------- the strap (C33), RECONSTRUCTION
const Strap: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(76) - 10;
	const end = sf(78) + 10;
	const c = cam(0.95, 0.14, 150, 760, 500);
	const swing = tween(f, a, a + 60, 0.22, 0.17, ease.camera);
	const state: PlugState = {...defaultState, bolts: none, lift: 3.2, swing, stopGlow: 0.15};
	const top = anchor(state, c, 'topCentre');
	const hook = projectPoint(c, [0, 70, -6]);
	const k = tween(f, wf(77, 'strap'), wf(77, 'strap') + 24, 0, 1, ease.draw);
	return (
		<>
			<Mount x={96} y={84} w={1060} h={760} source="FROM THE TECHNICIAN'S ACCOUNT · NTSB AIR-25-04" start={a} end={end} labels={['RECONSTRUCTION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} extra={<line x1={hook.x} y1={hook.y} x2={hook.x + (top.x - hook.x) * k} y2={hook.y + (top.y - hook.y) * k} stroke={colors.amber} strokeWidth={4} />} />
				</div>
			</Mount>
			<QuoteCard quote="just strapped it up there and let it hang" who="A TECHNICIAN" where="AS REPORTED IN NTSB AIR-25-04" start={sf(77) - 6} end={end} x={1200} y={300} w={620} size={40} />
			<Caption text="OPEN · ON A STAND · 18 SEP" start={sf(76) + 20} end={end} x={1200} y={200} />
		</>
	);
};

// ---------- closed on the evening shift (C34, C30)
const Closed: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(78) - 10;
	const end = sf(80) + 10;
	const c = cam(0.5, 0.12, 150, 760, 500);
	const close = tween(f, wf(79, 'closed') - 40, wf(79, 'closed') + 10, 1, 0, ease.camera);
	const state: PlugState = {...defaultState, bolts: none, lift: 3.2 * close, swing: 0.17 * close, stopGlow: 0.15};
	// the open / closed record (report Fig. 17's periods, redrawn by us)
	const x0 = 1180;
	const W = 640;
	const t0 = 0; // 18 SEP 00:00
	const tEnd = 48 * 60; // to 20 SEP 00:00, minutes
	const X = (min: number) => x0 + ((min - t0) / (tEnd - t0)) * W;
	// round 3: each bar's label on its own line, left- or right-aligned inside the card (no label crosses another)
	const span = (m0: number, m1: number, col: string, label: string, y: number, side: 'left' | 'right' = 'left', ly = y + 54) => (
		<g>
			<rect x={X(m0)} y={y} width={X(m1) - X(m0)} height={26} fill={col} opacity={0.85} />
			<text x={side === 'left' ? x0 : x0 + W} textAnchor={side === 'left' ? 'start' : 'end'} y={ly} fill={col} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={0.6}>
				{label}
			</text>
		</g>
	);
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
					<text x={40 + W / 2} y={50} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
						19 SEP
					</text>
					<g transform={`translate(${40 - x0}, 0)`}>
						{span(10 * 60 + 53, 24 * 60 + 17 * 60 + 9, colors.amber, 'OPEN · 18 SEP 10:53 → 19 SEP 17:09', 80)}
						{span(24 * 60 + 17 * 60 + 10, 24 * 60 + 18 * 60 + 38, colors.sub, 'UNDETERMINED 17:10–18:38', 180, 'right')}
						{f >= wf(79, 'closed') - 30 ? span(24 * 60 + 18 * 60 + 39, tEnd, colors.cyan, 'CLOSED BY 18:39', 80, 'right', 74) : null}
						{span(24 * 60 + 13 * 60 + 30, 24 * 60 + 23 * 60 + 30, colors.sub, 'SECOND SHIFT · NO DOOR TEAM ON DUTY', 290, 'right')}
					</g>
				</svg>
			</Mount>
			<Caption text="19 SEP · RIVET WORK FINISHED" start={sf(78)} end={sf(79)} x={1110} y={700} />
		</>
	);
};

// ---------- the texts (C35): no real message is shown or invented
const Texts: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(80) - 10;
	const end = sf(82) + 10;
	const o = envelope(f, a, end, 14, 30);
	return (
		<AbsoluteFill style={{opacity: o}}>
			<div style={{position: 'absolute', left: 700, top: 160, width: 520, height: 700, border: `1px solid ${colors.border}`, background: colors.card, borderRadius: 30}}>
				<div style={{position: 'absolute', left: 30, top: 30, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.ink}}>TEXT MESSAGES · BOEING WORKERS</div>
				{[0, 1, 2].map((i) => (
					<div key={i} style={{position: 'absolute', left: i % 2 ? 150 : 30, top: 100 + i * 110, width: 340, height: 74, borderRadius: 18, background: i % 2 ? '#25506f' : '#2b3a52', border: `1px solid ${colors.sub}`, transform: `translateY(${(1 - tween(f, a + 20 + i * 40, a + 34 + i * 40, 0, 1)) * 24}px)`, opacity: tween(f, a + 20 + i * 40, a + 34 + i * 40, 0, 1)}} />
				))}
				<div style={{position: 'absolute', left: 30, top: 440, width: 460, height: 200, borderRadius: 18, border: `2px dashed ${colors.amber}`, opacity: tween(f, wf(81, 'photograph') - 10, wf(81, 'photograph') + 10, 0, 1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.amber}}>
					PHOTOGRAPH · ABOUT 18:39
				</div>
			</div>
			<div style={{position: 'absolute', left: 1260, top: 200, width: 560, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, color: colors.ink, lineHeight: 1.7}}>
				<div>SUBJECT: PUTTING THE CABIN INTERIOR BACK</div>
				<div style={{color: colors.sub, marginTop: 20}}>MESSAGE CONTENT NOT SHOWN · NAMES WITHHELD</div>
				<div style={{color: colors.sub}}>NTSB AIR-25-04</div>
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
	const c = cam(0.0, 0.02, 128, 560, 470, 30);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.1, emptyHoles: 0};
	const k = settle(f, fps, a);
	const circleOn = wf(83, 'three') - 10;
	const pos = ['upperFwd', 'lowerFwd', 'lowerAft'] as const;
	const circles = pos.map((p, i) => {
		const q = anchor(state, c, p);
		const d = tween(f, circleOn + i * 14, circleOn + i * 14 + 26, 0, 1, ease.draw);
		const red = f >= wf(84, 'nothing') - 6;
		return <circle key={p} cx={q.x} cy={q.y} r={44} fill="none" stroke={red ? colors.red : colors.ink} strokeWidth={4} strokeDasharray={`${277 * d} 400`} />;
	});
	const items = [
		{t: 'NO BOLTS', w: 85},
		{t: 'NO WASHERS', w: 86},
		{t: 'NO NUTS', w: 87},
		{t: 'NO PINS', w: 88},
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
			{/* round 3: the honesty line is the size of what it labels (§6.7: 36 px), because only here could a drawing pass
			    for the photograph */}
			<div style={{position: 'absolute', left: 1200, top: 90, width: 640, fontFamily: mono, background: colors.card, border: `2px solid ${colors.amber}`, padding: '16px 20px', fontSize: 36, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0.5, color: colors.amber, opacity: tween(f, a + 10, a + 30, 0, 1)}}>
				RECONSTRUCTION
				<div style={{fontSize: 28, fontWeight: 400, color: colors.ink, marginTop: 8}}>REDRAWN FROM NTSB AIR-25-04 FIG. 18, A BOEING PHOTOGRAPH</div>
			</div>
			<div style={{position: 'absolute', left: 1200, top: 360, width: 640, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1, lineHeight: 1.3, color: colors.sub, opacity: tween(f, a + 30, a + 50, 0, 1)}}>THE PLUG, CLOSED · 3 OF 4 BOLT POSITIONS IN VIEW</div>
				{items.map((it) => {
					const on = sf(it.w);
					return (
						<div key={it.t} style={{fontSize: 56, fontWeight: 700, letterSpacing: 6, color: colors.red, marginTop: 26, opacity: tween(f, on - 4, on + 6, 0, 1)}}>
							{it.t}
						</div>
					);
				})}
			</div>
			<div style={{position: 'absolute', left: 1200, top: 880, fontFamily: mono, fontSize: 28, letterSpacing: 2, color: colors.amber, opacity: tween(f, sf(88) + 40, sf(88) + 70, 0, 1)}}>108 DAYS BEFORE PORTLAND</div>
		</Fade>
	);
};

// ---------- no video (C36, C68)
const Video: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(89) - 6;
	const end = sf(92) + 6;
	const left = Math.round(tween(f, sf(90) + 20, ef(91), 30, 0, ease.camera));
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 300, top: 260, fontFamily: mono}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.amber}}>WHO CLOSED IT</div>
				<div style={{fontSize: 40, fontWeight: 700, color: colors.ink, marginTop: 12}}>NO ONE INTERVIEWED SAID THEY KNEW</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 90, opacity: tween(f, sf(90), sf(90) + 20, 0, 1)}}>FACTORY SECURITY VIDEO · KEPT AS A MATTER OF ROUTINE</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: 20, opacity: tween(f, sf(90), sf(90) + 20, 0, 1)}}>
					<div style={{width: 900, height: 22, border: `1px solid ${colors.border}`}}>
						<div style={{width: `${(left / 30) * 100}%`, height: '100%', background: left > 0 ? colors.cyan : colors.red}} />
					</div>
					<div style={{fontSize: 40, fontWeight: 700, color: left > 0 ? colors.ink : colors.red}}>{left} {left === 1 ? 'DAY' : 'DAYS'}</div>
				</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.red, marginTop: 16, opacity: tween(f, sf(91), sf(91) + 20, 0, 1)}}>THE ACCIDENT CAME 108 DAYS AFTER · NTSB AIR-25-04</div>
			</div>
		</Fade>
	);
};

// ---------- the sign-off (C38, C37)
const SignOff: React.FC = () => (
	<>
		<ReportPage page={67} start={sf(92) - 8} end={sf(96) + 6} hl={[{key: 'no_looking', at: wf(93, 'involve') - 20}]} label="EXHIBIT 06" title="QUALITY SIGN-OFF, 20 SEP 2023" pushTo={wf(93, 'sign-off')} pad={[200, 300]} />
		<Caption text="NO REMOVAL RECORD · NOTHING ON PAPER ABOUT THE PLUG" start={sf(95)} end={sf(96) + 4} tone="amber" y={950} />
	</>
);

// ---------- the wall goes on; 41 days to delivery (C75, C22)
const Wall: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(96) - 10;
	const end = sf(98) + 10;
	const c = cam(0.35, 0.1, 160, 800, 470);
	const state: PlugState = {...defaultState, bolts: none, stopGlow: 0.1, emptyHoles: 1};
	const wall = tween(f, sf(96) + 10, ef(96), 0, 1, ease.camera);
	const p0 = projectPoint(c, [-26, 70, -7]);
	const p1 = projectPoint(c, [26, 70, -7]);
	const p2 = projectPoint(c, [26, -10, -7]);
	const p3 = projectPoint(c, [-26, -10, -7]);
	const head = interpolate(f, [sf(97), wf(97, 'delivered')], [E.signed, E.delivered], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera});
	const ty = (1 - wall) * 900;
	return (
		<>
			<Mount x={96} y={84} w={1440} h={700} source="ILLUSTRATION · CABIN SIDEWALL INSTALLED OVER THE PLUG" start={a} end={end} labels={['ILLUSTRATION']}>
				<div style={{position: 'absolute', left: -96, top: -84, width: 1920, height: 1080}}>
					<PlugSvg cam={c} state={state} extra={<polygon points={`${p0.x},${p0.y + ty} ${p1.x},${p1.y + ty} ${p2.x},${p2.y + ty} ${p3.x},${p3.y + ty}`} fill="rgba(148,163,184,0.38)" stroke={colors.sub} strokeWidth={2} />} />
				</div>
				<Caption text="SIDEWALL ON · PLUG NO LONGER IN VIEW" start={sf(96) + 40} end={end} x={40} y={560} />
			</Mount>
			<LifeLine start={a} end={end} head={head} events={[
				{d: E.shut, label: 'CLOSED · NO BOLTS', tone: 'red', on: a - 100},
				{d: E.delivered, label: 'DELIVERED 31 OCT', tone: 'cyan', on: wf(97, 'delivered')},
			]} />
		</>
	);
};

// ---------- the NTSB did not stop there (framing)
const Fan: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(98) - 10;
	const end = sf(100) + 6;
	const pages = ['pages/p062_sat_entries.jpg', 'pages/p067_qa_signoff.jpg', 'pages/p071_workforce.jpg', 'pages/p076_bpi_50_pages.jpg', 'pages/p134_findings_20_21.jpg'];
	const spread = tween(f, a + 10, sf(99) + 30, 0.25, 1, ease.arrive);
	return (
		<Fade start={a} end={end}>
			{pages.map((p, i) => (
				<div key={p} style={{position: 'absolute', left: 760 + (i - 2) * 230 * spread, top: 200, width: 400, height: 518, transform: `rotate(${(i - 2) * 5 * spread}deg)`, boxShadow: '0 20px 50px rgba(0,0,0,0.6)'}}>
					<ImgPage src={p} />
				</div>
			))}
			<Caption text="NTSB AIR-25-04 · THE FACTUAL RECORD" start={sf(99)} end={end} y={820} x={760} />
		</Fade>
	);
};
const ImgPage: React.FC<{src: string}> = ({src}) => <Img src={media(src)} style={{width: 400, height: 518}} />;

// ---------- the instruction (C39, C40) and finding 21 (C41)
const Bpi: React.FC = () => {
	const f = useFilmFrame();
	return (
		<>
			<ReportPage page={76} start={sf(100) - 8} end={sf(104) + 6} hl={[{key: 'bpi_50', at: wf(100, 'fifty') - 20}, {key: 'bpi_exceptions', at: wf(101, 'exceptions') - 30}, {key: 'bpi_11', at: wf(102, 'eleven') - 16}]} label="EXHIBIT 07" title="BPI “PERFORM PART OR ASSEMBLY REMOVAL”" pushTo={wf(101, 'exceptions')} pad={[120, 260]} />
			<div style={{position: 'absolute', left: 1460, top: 800, width: 400, fontFamily: mono, background: colors.card, border: `1px solid ${colors.border}`, padding: '18px 22px', opacity: envelope(f, sf(102) - 6, sf(104) + 6, 12, 12)}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>REVISIONS 2013–2023</div>
				<div style={{fontSize: 44, fontWeight: 700, color: colors.amber}}>{Math.round(tween(f, sf(102), sf(102) + 50, 0, 11))}</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 10, opacity: tween(f, sf(103), sf(103) + 10, 0, 1)}}>COMPLIANCE ISSUES 2018–2023</div>
				<div style={{fontSize: 44, fontWeight: 700, color: colors.amber, opacity: tween(f, sf(103), sf(103) + 10, 0, 1)}}>{Math.round(tween(f, sf(103), sf(103) + 50, 0, 16))}</div>
			</div>
		</>
	);
};

const Finding21: React.FC = () => <ReportPage page={134} start={sf(104) - 8} end={sf(105) + 6} hl={[{key: 'finding21', at: wf(104, 'ineffective') - 30}]} label="FINDING 21" title="FINDINGS" pushTo={wf(104, 'ineffective') - 20} pad={[140, 220]} />;

// ---------- the regulator (C48, C49)
const Regulator: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(105) - 10;
	const end = sf(108) + 6;
	const n = Math.round(tween(f, sf(106) + 30, ef(106), 0, 68, ease.camera));
	const zero = f >= sf(107) + 20;
	// round 3: laid out at full size across the desk (round 2 scaled a small block by 1.35 into one corner)
	return (
		<Fade start={a} end={end}>
			<div style={{position: 'absolute', left: 180, top: 140, width: 1600, fontFamily: mono}}>
				<div style={{fontSize: 32, letterSpacing: 1.2, color: colors.ink}}>FAA INSPECTORS ON THE 737 PROGRAM · WHILE THE FUSELAGE WAS AT RENTON</div>
				<div style={{display: 'flex', gap: 34, marginTop: 36}}>
					{[0, 1, 2, 3, 4].map((i) => (
						<div key={i} style={{width: 120, height: 160, border: `2px solid ${colors.cyan}`, opacity: tween(f, sf(105) + 30 + i * 10, sf(105) + 44 + i * 10, 0, 1), position: 'relative'}}>
							<div style={{position: 'absolute', left: 38, top: 24, width: 44, height: 44, borderRadius: 22, border: `2px solid ${colors.cyan}`}} />
							<div style={{position: 'absolute', left: 24, top: 82, width: 72, height: 58, borderTopLeftRadius: 36, borderTopRightRadius: 36, border: `2px solid ${colors.cyan}`, borderBottom: 'none'}} />
						</div>
					))}
					<div style={{fontSize: 96, fontWeight: 700, color: colors.ink, marginLeft: 24, alignSelf: 'center'}}>5</div>
				</div>
				<div style={{display: 'flex', gap: 80, marginTop: 70, opacity: tween(f, sf(106), sf(106) + 20, 0, 1)}}>
					<div style={{width: 760}}>
						<div style={{fontSize: 30, letterSpacing: 1, color: colors.sub}}>ALLEGED NONCOMPLIANCES · RENTON</div>
						<div style={{fontSize: 30, letterSpacing: 1, color: colors.sub}}>OCT 2022 – SEP 2023</div>
						<div style={{fontSize: 150, fontWeight: 700, lineHeight: 1.1, color: colors.amber, fontVariantNumeric: 'tabular-nums'}}>{n}</div>
					</div>
					<div style={{width: 760, opacity: tween(f, sf(107), sf(107) + 20, 0, 1)}}>
						<div style={{fontSize: 30, letterSpacing: 1, color: colors.sub}}>REFERENCING THE REMOVAL INSTRUCTION</div>
						<div style={{fontSize: 30, letterSpacing: 1, color: colors.sub}}>&nbsp;</div>
						<div style={{fontSize: 150, fontWeight: 700, lineHeight: 1.1, color: zero ? colors.red : colors.ink}}>0</div>
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
	const a = sf(108) - 10;
	const end = sf(115) + 6;
	const bars = [
		{t: 'BEFORE 2018', v: 52, on: sf(108) + 30, tone: colors.cyan, note: 'ABOUT 52'}, // round 3: rises with the frame (no empty chart)
		{t: 'PANDEMIC LOW', v: 10, on: wf(112, 'ten') - 20, tone: colors.amber, note: 'FEWER THAN 10'},
		{t: 'BEFORE THE ACCIDENT', v: 38, on: sf(113) + 30, tone: colors.cyan, note: 'ABOUT 30–38'},
	];
	const H = 460;
	return (
		<Fade start={a} end={end}>
			<Mount x={180} y={110} w={1560} h={780} source="NTSB AIR-25-04 · 737 LINE, AIRPLANES PER MONTH" start={a} end={end} lean={1}>
				<div style={{position: 'absolute', left: 60, top: 36, fontFamily: mono, fontSize: 26, letterSpacing: 1.5, color: colors.sub}}>BOEING 737 PRODUCTION · AIRPLANES A MONTH</div>
				<svg width={1560} height={746} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={120} x2={1440} y1={620} y2={620} stroke={colors.border} strokeWidth={2} />
					{bars.map((b, i) => {
						const k = i === 0 ? tween(f, b.on, wf(109, 'fifty-two'), 0, 1, ease.camera) : tween(f, b.on, b.on + 40, 0, 1, ease.arrive);
						const h = (b.v / 52) * H * k;
						const x = 220 + i * 420;
						return (
							<g key={b.t} opacity={Math.min(1, k * 3)}>
								<rect x={x} y={620 - h} width={200} height={h} fill={b.tone} opacity={0.85} />
								{i === 2 ? <rect x={x} y={620 - (30 / 52) * H * k} width={200} height={2} fill={colors.void} /> : null}
								<text x={x + 100} y={600 - h} textAnchor="middle" fill={colors.ink} fontFamily="JetBrains Mono" fontWeight={700} fontSize={34} opacity={tween(k, 0.85, 1, 0, 1)}>
									{b.note}
								</text>
								<text x={x + 100} y={664} textAnchor="middle" fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1}>
									{b.t}
								</text>
							</g>
						);
					})}
				</svg>
				<div style={{position: 'absolute', left: 880, top: 90, width: 620, fontFamily: mono, fontSize: 26, letterSpacing: 0.8, color: colors.ink, lineHeight: 1.35, opacity: envelope(f, sf(110), sf(111), 14, 14)}}>
					2018–19 · TWO FATAL 737 MAX ACCIDENTS · PRODUCTION CUT · HIRING STOPPED · LEAVERS NOT REPLACED
				</div>
				<div style={{position: 'absolute', left: 880, top: 90, width: 620, fontFamily: mono, fontSize: 26, letterSpacing: 0.8, color: colors.ink, lineHeight: 1.35, opacity: envelope(f, sf(111) + 10, sf(113), 14, 14)}}>
					THE PANDEMIC · MORE LEFT, PARTICULARLY THOSE ELIGIBLE TO RETIRE
				</div>
				<div style={{position: 'absolute', left: 880, top: 90, width: 620, fontFamily: mono, fontSize: 26, letterSpacing: 0.8, color: colors.amber, lineHeight: 1.35, opacity: envelope(f, sf(113), end, 14, 14)}}>
					2022 · HIRING FAST · MANY NEW HIRES HAD NEVER WORKED IN MANUFACTURING
				</div>
			</Mount>
		</Fade>
	);
};

// ---------- experience (C45) and finding 20 (C46)
const Experience: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(115) - 8;
	const barOn = sf(117) - 10;
	const end = sf(118) + 6;
	const v = tween(f, barOn, barOn + 60, 50, 27.5, ease.camera);
	return (
		<>
			<ReportPage page={71} start={a} end={barOn + 10} hl={[{key: 'gm_quote', at: sf(116) - 20}]} label="EXHIBIT 08" title="WORKFORCE EXPERIENCE · 737 PROGRAM GENERAL MANAGER" pushTo={sf(116)} pad={[120, 200]} />
			<Fade start={barOn} end={end}>
				<div style={{position: 'absolute', left: 200, top: 300, fontFamily: mono}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.ink}}>WORKFORCE WITH MORE THAN 10 YEARS' EXPERIENCE · AS STATED BY THE 737 PROGRAM'S HEAD</div>
					{[
						{t: '10 YEARS AGO', w: 50, txt: '~50%', c: colors.cyan},
						{t: 'TODAY', w: v, txt: '25–30%', c: colors.amber},
					].map((b, i) => (
						<div key={b.t} style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: i ? 28 : 36}}>
							<span style={{width: 240, fontSize: 26, color: colors.ink}}>{b.t}</span>
							<div style={{width: 1200, height: 92, border: `1px solid ${colors.border}`, background: 'rgba(18,24,36,0.8)'}}>
								<div style={{width: `${b.w}%`, height: '100%', background: b.c, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 22, boxSizing: 'border-box'}}>
									<span style={{fontSize: 52, fontWeight: 700, color: colors.void, whiteSpace: 'nowrap'}}>{b.txt}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</Fade>
		</>
	);
};

const Finding20: React.FC = () => <ReportPage page={134} start={sf(118) - 8} end={sf(120) + 6} hl={[{key: 'finding20', at: wf(119, 'missed') - 20}]} label="FINDING 20" title="FINDINGS" pushTo={wf(119, 'missed') - 20} pad={[160, 260]} />;

// ---------- not steel (framing; our reading said as ours)
const NotSteel: React.FC = () => {
	const f = useFilmFrame();
	return (
		<>
			<RemovalForm start={sf(120) - 10} end={sf(122) + 4} stamp={wf(121, 'wrote')} x={140} />
			<div style={{position: 'absolute', left: 1220, top: 320, width: 580, fontFamily: sans, fontWeight: 700, fontSize: 52, letterSpacing: 2, color: colors.ink, lineHeight: 1.25, opacity: envelope(f, sf(120), sf(122), 16, 16)}}>
				THE MARGIN THAT RAN OUT WAS NOT STEEL
			</div>
		</>
	);
};

// ---------- the money, read carefully (C56, C57, C83, C84, C47)
const Money: React.FC = () => {
	const f = useFilmFrame();
	const end = sf(127) - 6;
	const items = [
		{t: '2018', v: '$9.0 BILLION', s: 'REPURCHASED', on: wf(123, 'nine') - 10},
		{t: 'DEC 2018', v: 'UP TO $20 BILLION', s: 'AUTHORIZED BY THE BOARD', on: wf(124, 'twenty') - 10},
		{t: '2019', v: '$2.7 BILLION', s: 'REPURCHASED', on: wf(125, 'two') - 10},
		{t: 'BY JAN 2020', v: 'SUSPENDED', s: 'PER THE 2019 FORM 10-K', on: wf(126, 'suspended') - 20},
	];
	return (
		<>
			<RecordDoc doc="boeing_27b" start={sf(122) + 30} end={sf(124) + 6} at={[wf(123, 'nine')]} label="EXHIBIT 09" source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" pushTo={wf(123, 'billion')} />
			<RecordDoc doc="boeing_20b" start={sf(124) - 6} end={sf(125) + 30} at={[wf(124, 'twenty'), wf(124, 'more')]} label="EXHIBIT 10" source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" pushTo={wf(124, 'more')} />
			<Fade start={sf(125) + 10} end={end}>
				<Mount x={260} y={160} w={1400} h={640} source="BOEING FORM 10-K, FY 2019 · SEC EDGAR" start={sf(125) + 10} end={end}>
					<div style={{position: 'absolute', left: 60, top: 40, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>BOEING SHARE REPURCHASES · AS FILED</div>
					{items.map((it, i) => (
						<div key={it.t} style={{position: 'absolute', left: 60, top: 100 + i * 120, display: 'flex', alignItems: 'baseline', gap: 40, fontFamily: mono, opacity: f >= sf(125) + 10 ? 1 : tween(f, it.on, it.on + 14, 0, 1)}}>
							<span style={{width: 220, fontSize: 26, color: colors.sub}}>{it.t}</span>
							<span style={{fontSize: 52, fontWeight: 700, color: colors.amber, width: 640}}>{it.v}</span>
							<span style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>{it.s}</span>
						</div>
					))}
				</Mount>
			</Fade>
		</>
	);
};

const NotCause: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(127) + 8;
	const end = ef(130) + 36;
	const typed = 'buyback';
	const n = Math.max(0, Math.min(typed.length, Math.floor((f - a - 20) / 5)));
	return (
		<>
			<Fade start={a} end={sf(128) + 24}>
				<div style={{position: 'absolute', left: 420, top: 330, width: 1080, fontFamily: mono, background: colors.card, border: `1px solid ${colors.border}`, padding: 40, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.ink}}>OUR SEARCH · NTSB AIR-25-04 · FULL TEXT</div>
					<div style={{marginTop: 14, height: 80, border: `1px solid ${colors.sub}`, background: colors.card, display: 'flex', alignItems: 'center', padding: '0 26px', fontSize: 36, color: colors.ink}}>
						{typed.slice(0, n)}
						<span style={{color: colors.cyan}}>▌</span>
					</div>
					<div style={{marginTop: 20, fontSize: 28, fontWeight: 700, color: colors.amber, opacity: tween(f, a + 70, a + 84, 0, 1)}}>0 RESULTS · ALSO “SHARE REPURCHASE”: 0</div>
				</div>
			</Fade>
			<ReportPage page={135} start={sf(128) + 16} end={end} hl={[{key: 'finding27', at: wf(128, 'assess') - 20}]} label="FINDING 27" title="FINDINGS" pushTo={wf(128, 'assess')} pad={[120, 240]} />
			<Caption text="A FACT ABOUT WHERE THE MONEY WENT · NOT A CAUSE" start={sf(129)} end={sf(130)} tone="amber" y={950} />
			<Caption text="THE CAUSE IS IN THE FACTORY RECORD" start={sf(130)} end={end} y={950} />
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
