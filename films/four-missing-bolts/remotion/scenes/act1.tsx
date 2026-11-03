import React from 'react';
import {AbsoluteFill, Img, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {Exhibit} from '../../../../lib/remotion/Exhibit';
import {ease, envelope, settle, tween} from '../../../../lib/remotion/motion';
import phrases from '../data/phrases.json';
import {altArr, altFt, cabinPsi, CAUTION_T, clockText, EVENT_T, GEAR_AIR_T, GEAR_GROUND_T, latArr, lonArr, WARN_T} from '../fdr';
import {ActTitle, Caption, Fade, media, mono, Mount, Photo, QuoteCard, sans, TypeOn, useFilmFrame} from '../kit';
import {ef, FPS, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT I · THE INCIDENT (screenplay rows 1–9). Cold open on the record: the real FDR (docket DCA24MA063, attachment 1).

// ---------- the flight clock: real time until the pressure drop, then a quarter-speed replay so each recorded event
// lands on the words that name it (cabin altitude warning +0.6 s, master caution +1.4 s: C02, FDR discretes).
const F_EVENT = sf(2);
const REPLAY = 0.25;
const flightT = (f: number): number => (f < F_EVENT ? EVENT_T - (F_EVENT - f) / FPS : EVENT_T + ((f - F_EVENT) / FPS) * REPLAY);

const Panel: React.FC<{x: number; y: number; w: number; h: number; title: string; children?: React.ReactNode; right?: React.ReactNode}> = ({x, y, w, h, title, children, right}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: 'rgba(10,13,18,0.6)', border: `1px solid ${colors.border}`}}>
		<div style={{display: 'flex', justifyContent: 'space-between', padding: '12px 18px 0', fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>
			<span>{title}</span>
			{right}
		</div>
		{children}
	</div>
);

const Annunciator: React.FC<{label: string; on: number; tone: 'red' | 'amber'; x: number; y: number}> = ({label, on, tone, x, y}) => {
	const f = useFilmFrame();
	const lit = on > 0 ? 0.75 + 0.25 * Math.cos(((f - on) / FPS) * Math.PI * 2 * 1.2) : 0;
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
				fontSize: 26,
				letterSpacing: 3,
				color: on > 0 ? colors.void : colors.sub,
				background: on > 0 ? c : 'transparent',
				opacity: on > 0 ? lit : 1,
				border: `1px solid ${on > 0 ? c : colors.border}`,
				boxShadow: on > 0 ? `0 0 ${30 * lit}px ${c}55` : 'none',
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
	const after = t >= EVENT_T + 0.5;
	// trace: the 60 s before the playhead, sampled at 0.25 s
	const tw = 60;
	const gx = 750;
	const gy = 150;
	const gw = 860;
	const gh = 360;
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
		altPts.push(`${px.toFixed(1)},${(gy + gh - ((altFt(tt) - 13000) / 4000) * gh).toFixed(1)}`);
	}
	if (redPts.length && pts.length) redPts.unshift(pts[pts.length - 1]);
	const draw = tween(f, panelIn + 10, panelIn + 70, 0, 1, ease.draw);
	const dateO = envelope(f, 6, panelIn + 30, 18, 30);
	const rate = f >= F_EVENT ? '×0.25' : '×1.00';
	const warnOn = t >= WARN_T ? Math.round(F_EVENT + ((WARN_T - EVENT_T) / REPLAY) * FPS) : 0;
	const cautOn = t >= CAUTION_T ? Math.round(F_EVENT + ((CAUTION_T - EVENT_T) / REPLAY) * FPS) : 0;
	const shake = f >= F_EVENT ? Math.exp(-((f - F_EVENT) / fps) * 3) * Math.sin(((f - F_EVENT) / fps) * 2 * Math.PI * 9) * 6 : 0;
	return (
		<>
			{/* the date, alone, before anything moves */}
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: dateO}}>
				<div style={{fontFamily: mono, fontSize: 92, fontWeight: 700, letterSpacing: 10, color: colors.ink}}>
					<TypeOn text="05 JAN 2024" start={8} cps={14} />
				</div>
				<div style={{marginTop: 26, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: tween(f, 70, 110, 0, 1)}}>ALASKA AIRLINES FLIGHT 1282 · BOEING 737-9 · N704AL</div>
			</AbsoluteFill>
			<Mount x={110} y={96} w={1700} h={860} source="DISPLAY REDRAWN FROM NTSB DOCKET DCA24MA063 · FDR TABULAR DATA, ATT. 1" tag="FDR" start={panelIn} end={end} lean={2} labels={['RECONSTRUCTION', 'PLAYBACK ' + rate]}>
				<div style={{position: 'absolute', inset: 0, transform: `translateX(${shake}px)`}}>
					{/* clock */}
					<Panel x={40} y={40} w={640} h={180} title="TIME · PST" right={<span>05 JAN 2024</span>}>
						<div style={{position: 'absolute', left: 18, top: 50, fontFamily: mono, fontSize: 84, fontWeight: 700, letterSpacing: 2, color: colors.ink, fontVariantNumeric: 'tabular-nums'}}>{clockText(t)}</div>
					</Panel>
					{/* altitude */}
					<Panel x={40} y={250} w={640} h={300} title="PRESSURE ALTITUDE" right={<span style={{color: colors.cyan}}>CLIMBING</span>}>
						<div style={{position: 'absolute', left: 18, top: 60, fontFamily: mono, fontSize: 132, fontWeight: 700, color: colors.ink, fontVariantNumeric: 'tabular-nums', letterSpacing: -2}}>
							{Math.round(alt).toLocaleString('en-US')}
							<span style={{fontSize: 34, color: colors.sub, marginLeft: 14, letterSpacing: 2}}>FT</span>
						</div>
						<div style={{position: 'absolute', left: 22, top: 222, fontFamily: mono, fontSize: 26, color: colors.sub, fontVariantNumeric: 'tabular-nums', letterSpacing: 1.2}}>
							{Math.round(alt * 0.3048).toLocaleString('en-US')} M
						</div>
					</Panel>
					{/* cabin pressure */}
					<Panel x={720} y={40} w={940} h={510} title="CABIN PRESSURE · CPC1" right={<span style={{color: after ? colors.red : colors.cyan}}>{after ? 'DEPRESSURIZED' : 'NOMINAL'}</span>}>
						<div style={{position: 'absolute', left: 18, top: 44, fontFamily: mono, fontSize: 64, fontWeight: 700, color: after ? colors.red : colors.ink, fontVariantNumeric: 'tabular-nums'}}>
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
									<text x={gx + gw + 10} y={y + 5} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26}>
										{v}
									</text>
								</g>
							);
						})}
						<polyline points={altPts.join(' ')} fill="none" stroke={colors.sub} strokeWidth={2} strokeDasharray="6 5" opacity={0.7} />
						<text x={gx + 8} y={gy + gh - 12} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
							- - ALTITUDE 13,000–17,000 FT
						</text>
						<polyline points={pts.join(' ')} fill="none" stroke={colors.cyan} strokeWidth={3} strokeDasharray={4000} strokeDashoffset={4000 * (1 - draw)} />
						{redPts.length > 1 ? <polyline points={redPts.join(' ')} fill="none" stroke={colors.red} strokeWidth={4} /> : null}
						<line x1={gx + gw} x2={gx + gw} y1={gy - 10} y2={gy + gh + 10} stroke={colors.sub} strokeWidth={1} strokeDasharray="4 6" />
						<text x={gx} y={gy + gh + 34} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
							−60 S
						</text>
						<text x={gx + gw - 40} y={gy + gh + 34} fill={colors.sub} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
							NOW
						</text>
					</svg>
					{/* annunciators: FDR discretes, drawn as plain tiles (not a cockpit panel) */}
					<div style={{position: 'absolute', left: 40, top: 590, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>RECORDED DISCRETES</div>
					<Annunciator label="CABIN ALT WARNING" on={warnOn} tone="red" x={40} y={625} />
					<Annunciator label="MASTER CAUTION" on={cautOn} tone="amber" x={400} y={625} />
					<div style={{position: 'absolute', left: 760, top: 596, width: 900, fontFamily: mono, fontSize: 26, letterSpacing: 1.6, color: colors.ink, lineHeight: 1.6, opacity: tween(f, F_EVENT + 20, F_EVENT + 60, 0, 1)}}>
						<div>17:12:33 · CPC1 14.08 → 9.08 PSI IN 2 S</div>
						<div style={{color: colors.sub}}>NTSB: CLIMBING THROUGH ABOUT 14,830 FT</div>
					</div>
				</div>
			</Mount>
		</>
	);
};

const fdrCues = () => {
	const cues = [];
	for (let k = 0; k < 14; k++) cues.push({frame: sf(1) + k * 60, sfx: 'quartz_tick' as const, gainDb: -16});
	cues.push({frame: F_EVENT, sfx: 'pressure_drop' as const, gainDb: -6});
	cues.push({frame: Math.round(F_EVENT + ((WARN_T - EVENT_T) / REPLAY) * FPS), sfx: 'cockpit_chime' as const, gainDb: -12});
	cues.push({frame: Math.round(F_EVENT + ((CAUTION_T - EVENT_T) / REPLAY) * FPS), sfx: 'cockpit_chime' as const, gainDb: -14});
	return cues;
};

// ---------- the crew's words (C06)
const Crew: React.FC = () => {
	const a = sf(5);
	const end = sf(7) + 6;
	return (
		<>
			<Photo src={media('img/fig09_psu_doors_open.jpg')} iw={1133} ih={879} start={a - 10} end={end} source="NTSB AIR-25-04 · FIG. 9 · THE CABIN AFTER THE FLIGHT" tag="FIG. 9" from={{x: 0, y: 0, w: 1133, h: 879}} to={{x: 120, y: 60, w: 900, h: 700}} />
			<AbsoluteFill style={{background: 'linear-gradient(90deg, rgba(10,13,18,0.82) 0%, rgba(10,13,18,0.55) 55%, rgba(10,13,18,0.15) 100%)', opacity: envelope(useFilmFrame(), a - 10, end, 16, 16)}} />
			<QuoteCard quote="an explosive experience" who="THE CAPTAIN" where="AS REPORTED IN NTSB AIR-25-04" start={a - 4} end={end} x={220} y={300} w={1000} size={70} />
			<QuoteCard quote="it was chaos" who="THE FIRST OFFICER" where="AS REPORTED IN NTSB AIR-25-04" start={sf(6) - 4} end={end} x={220} y={600} w={1000} size={70} />
		</>
	);
};

// ---------- the hole (C70, C09), the empty seats (C08): NTSB photographs, unaltered
const EXT = {w: 3200, h: 2133};
const Hole: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(7) - 10;
	const b = sf(9) - 8;
	const dimOn = wf(8, 'rectangle');
	const k = tween(f, dimOn, dimOn + 50, 0, 1, ease.draw);
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
				from={{x: 300, y: 260, w: 2700, h: 1500}}
				to={{x: 980, y: 430, w: 1300, h: 1120}}
			>
				{({sx, sy}) => {
					const x0 = sx(1455);
					const x1 = sx(1790);
					const y0 = sy(705);
					const y1 = sy(1305);
					return (
						<svg width={1620} height={786} style={{position: 'absolute', left: 0, top: 0, opacity: k}}>
							<rect x={x0} y={y0} width={(x1 - x0) * k} height={y1 - y0} fill="none" stroke={colors.red} strokeWidth={3} />
							<line x1={x0} x2={x0 + (x1 - x0) * k} y1={y0 - 26} y2={y0 - 26} stroke={colors.amber} strokeWidth={2} />
							<line x1={x0 - 26} x2={x0 - 26} y1={y0} y2={y0 + (y1 - y0) * k} stroke={colors.amber} strokeWidth={2} />
							<text x={(x0 + x1) / 2} y={y0 - 40} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26}>
								29 IN · 74 CM
							</text>
							<text x={x0 - 44} y={(y0 + y1) / 2} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26} transform={`rotate(-90 ${x0 - 44} ${(y0 + y1) / 2})`}>
								59 IN · 150 CM
							</text>
						</svg>
					);
				}}
			</Photo>
			<Caption text="LEFT SIDE · BEHIND THE WING" start={sf(7) + 20} end={dimOn - 6} />
			<Caption text="MID EXIT DOOR PLUG · APPROX. OUTLINE" start={dimOn + 10} end={b} tone="amber" />
		</>
	);
};

const Seats: React.FC = () => {
	const a = sf(9) - 14;
	const end = sf(10) + 8;
	return (
		<Photo
			src={media('img/fig01_interior_hole_row26.jpg')}
			iw={1430}
			ih={848}
			start={a}
			end={end}
			source="NTSB AIR-25-04 · FIG. 1 · ROW 26, LEFT SIDE"
			tag="FIG. 1"
			from={{x: 0, y: 0, w: 1430, h: 848}}
			to={{x: 240, y: 40, w: 1000, h: 640}}
		/>
	);
};

// ---------- back on the ground (C04, C05): the real GPS track
const Track: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(10) - 10;
	const end = sf(13) + 6;
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
	const draw = tween(f, a + 20, wf(10, 'ground'), 0, 1, ease.camera);
	const head = Math.round(i0 + (i1 - i0) * draw);
	const path: string[] = [];
	const red: string[] = [];
	for (let i = i0; i <= head; i++) (i <= EVENT_T ? path : red).push(`${px(i).toFixed(1)},${py(i).toFixed(1)}`);
	if (red.length) red.unshift(path[path.length - 1]);
	const t = i0 + (i1 - i0) * draw;
	const landed = t >= GEAR_GROUND_T;
	const injuries = Math.round(tween(f, sf(11), sf(11) + 50, 0, 8, ease.arrive));
	return (
		<Mount x={box.x} y={box.y} w={box.w} h={box.h} source="TRACK DRAWN FROM NTSB DOCKET DCA24MA063 · FDR GPS POSITION, ATT. 1" tag="FDR" start={a} end={end} lean={2} labels={['RECONSTRUCTION']}>
			<svg width={box.w} height={box.h - 34} style={{position: 'absolute', left: 0, top: 0}}>
				<polyline points={path.join(' ')} fill="none" stroke={colors.cyan} strokeWidth={3} />
				{red.length > 1 ? <polyline points={red.join(' ')} fill="none" stroke={colors.amber} strokeWidth={3} /> : null}
				<circle cx={px(i0)} cy={py(i0)} r={7} fill={colors.ink} />
				<text x={px(i0) + 16} y={py(i0) + 6} fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
					PORTLAND INTL · PDX
				</text>
				{head >= EVENT_T ? (
					<g>
						<circle cx={px(EVENT_T)} cy={py(EVENT_T)} r={10} fill="none" stroke={colors.red} strokeWidth={3} />
						<text x={px(EVENT_T) + 18} y={py(EVENT_T) - 12} fill={colors.red} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
							17:12:33 · PLUG SEPARATES
						</text>
					</g>
				) : null}
				<circle cx={px(head)} cy={py(head)} r={6} fill={landed ? colors.ink : colors.amber} />
			</svg>
			<div style={{position: 'absolute', left: 1260, top: 60, width: 400, fontFamily: mono, color: colors.ink}}>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>TIME · PST</div>
				<div style={{fontSize: 52, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>{clockText(Math.min(t, GEAR_GROUND_T + 5))}</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 26}}>PRESSURE ALTITUDE</div>
				<div style={{fontSize: 40, fontWeight: 700, fontVariantNumeric: 'tabular-nums'}}>
					{Math.max(0, Math.round(altArr[Math.min(head, altArr.length - 1)])).toLocaleString('en-US')} <span style={{fontSize: 26, color: colors.sub}}>FT</span>
				</div>
				<div style={{marginTop: 30, fontSize: 26, letterSpacing: 1.2, color: landed ? colors.cyan : colors.muted}}>{landed ? 'LANDED 17:26:46' : 'RETURNING'}</div>
				<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub, marginTop: 6, opacity: landed ? 1 : 0}}>ABOUT 14 MIN AFTER THE PLUG SEPARATED</div>
				<div style={{marginTop: 40, opacity: tween(f, sf(11) - 6, sf(11) + 10, 0, 1)}}>
					<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>INJURIES · NTSB</div>
					<div style={{display: 'flex', gap: 40, marginTop: 8}}>
						<div>
							<div style={{fontSize: 56, fontWeight: 700, color: colors.amber, fontVariantNumeric: 'tabular-nums'}}>{injuries}</div>
							<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>MINOR</div>
						</div>
						<div style={{opacity: tween(f, sf(12), sf(12) + 16, 0, 1)}}>
							<div style={{fontSize: 56, fontWeight: 700, color: colors.ink}}>0</div>
							<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>SERIOUS</div>
						</div>
					</div>
				</div>
			</div>
		</Mount>
	);
};

// ---------- no voices; paper (C07, C82, C51)
const Paper: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(13) - 10;
	const pIn = sf(15) + 30;
	const end = sf(17) + 30;
	const cvrO = envelope(f, a, pIn + 20, 16, 20);
	const flat = tween(f, a + 20, a + 120, 0, 1, ease.draw);
	return (
		<>
			<AbsoluteFill style={{opacity: cvrO}}>
				<div style={{position: 'absolute', left: 360, top: 330, width: 1200, height: 300, background: colors.card, border: `1px solid ${colors.border}`}}>
					<div style={{position: 'absolute', left: 30, top: 24, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>COCKPIT VOICE RECORDER · ACCIDENT FLIGHT</div>
					<svg width={1140} height={120} style={{position: 'absolute', left: 30, top: 70}}>
						<line x1={0} x2={1140 * flat} y1={60} y2={60} stroke={colors.muted} strokeWidth={2} />
						{Array.from({length: 40}, (_, i) => (
							<line key={i} x1={i * 29} x2={i * 29} y1={52} y2={68} stroke={colors.border} strokeWidth={1} />
						))}
					</svg>
					<div style={{position: 'absolute', left: 30, top: 200, fontFamily: mono, fontSize: 34, fontWeight: 700, letterSpacing: 4, color: colors.ink}}>
						<TypeOn text="NO AUDIO FROM THE ACCIDENT FLIGHT" start={sf(13) + 20} cps={30} />
					</div>
					<div style={{position: 'absolute', left: 30, top: 250, fontFamily: mono, fontSize: 26, letterSpacing: 1.2, color: colors.sub, opacity: tween(f, sf(14), sf(14) + 20, 0, 1)}}>
						RECORDING CONTINUED AFTER LANDING · OVERWRITTEN · NTSB AIR-25-04
					</div>
				</div>
			</AbsoluteFill>
			{f >= pIn - 4 ? (
				<Fade start={pIn} end={end}>
					<Exhibit page={{w: 1870, h: 2420}} start={pIn} push={{from: pIn + 50, to: end - 10, focus: {x: 120, y: 200, w: 1300, h: 520}}} highlights={phrases.title_block.rects.map((r) => ({...r, start: pIn + 70}))} label="EXHIBIT 01" source="NTSB AIR-25-04 · ADOPTED 24 JUNE 2025">
						<Img src={media('pages/p001_title.jpg')} style={{width: 1870, height: 2420}} />
					</Exhibit>
				</Fade>
			) : null}
		</>
	);
};

// ---------- the photograph, 108 days earlier (C69, C35): the open loop, named with the minute it lands
export const PendingExhibit: React.FC<{start: number; end: number; small?: boolean}> = ({start, end, small = false}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 18, 18);
	if (o <= 0) return null;
	if (small) {
		// the open loop kept in view, quietly: one line, top right, until the photograph is in evidence
		return (
			// round 3: on a card (it sits over exhibit pages, §6.6), inside the safe area, shorter
			<div style={{position: 'absolute', right: 96, top: 44, opacity: o * 0.95, fontFamily: mono, fontSize: 26, letterSpacing: 0.8, color: colors.ink, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 12, background: colors.card, border: `1px solid ${colors.border}`, padding: '6px 14px 5px'}}>
				<span style={{width: 16, height: 12, border: `1px dashed ${colors.amber}`}} />
				<span style={{color: colors.amber}}>PENDING</span>
				<span>PHOTOGRAPH · 19 SEP 2023</span>
			</div>
		);
	}
	return (
		<div style={{position: 'absolute', left: 660, top: 230, width: 600, opacity: o}}>
			<div style={{width: 600, height: 380, background: '#c9b48a', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.6)', transform: `rotate(${-2 + tween(f, start, end, 0, 1.2)}deg) translateY(${tween(f, start, end, 0, -14)}px)`, overflow: 'hidden'}}>
				<div style={{position: 'absolute', top: 0, bottom: 0, width: 160, left: tween(f, start + 40, end, -200, 760), background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.16), rgba(255,255,255,0))'}} />
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 120, background: '#b9a274', clipPath: 'polygon(0 0, 100% 0, 50% 100%)'}} />
				<div style={{position: 'absolute', left: 40, top: 170, right: 40, fontFamily: mono, color: '#2a2216'}}>{/* floor-ok: ink on the manila envelope (8:1), a material, not a token */}
					<div style={{fontSize: 26, fontWeight: 700, letterSpacing: 1.2}}>EXHIBIT · PHOTOGRAPH</div>
					<div style={{fontSize: 26, letterSpacing: 1.2, marginTop: 14}}>19 SEP 2023 · ABOUT 18:39</div>
					<div style={{fontSize: 26, letterSpacing: 1.2, marginTop: 6}}>BOEING · RENTON, WASHINGTON</div>
					<div style={{fontSize: 26, letterSpacing: 1.2, marginTop: 18, color: '#2a2216'}}>NTSB AIR-25-04 · FIG. 18</div>{/* floor-ok: envelope ink */}
				</div>
			</div>
		</div>
	);
};

const Loop: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(17) + 20;
	const end = sf(20) + 10;
	const bar = tween(f, a + 30, wf(17, 'afternoon'), 0, 1, ease.camera);
	const x0 = 260;
	const x1 = 1660;
	return (
		<>
			<PendingExhibit start={a + 10} end={end} />
			<Fade start={a} end={end}>
				<div style={{position: 'absolute', left: x0 - 20, top: 760, width: x1 - x0 + 40, height: 150, background: colors.card, border: `1px solid ${colors.border}`}} />
				<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={x0} x2={x0 + (x1 - x0) * bar} y1={820} y2={820} stroke={colors.amber} strokeWidth={3} />
					<circle cx={x0} cy={820} r={10} fill={colors.amber} />
					<circle cx={x1} cy={820} r={10} fill={bar >= 1 ? colors.red : colors.border} />
					<text x={x0} y={870} fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
						19 SEP 2023 · RENTON
					</text>
					<text x={x1} y={870} textAnchor="end" fill={colors.ink} fontFamily="JetBrains Mono" fontSize={26} letterSpacing={1.2}>
						05 JAN 2024 · PORTLAND
					</text>
					<text x={(x0 + x1) / 2} y={806} textAnchor="middle" fill={colors.amber} fontFamily="JetBrains Mono" fontWeight={700} fontSize={26} letterSpacing={4} opacity={bar}>
						{Math.round(108 * bar)} DAYS
					</text>
				</svg>
			</Fade>
		</>
	);
};

// ---------- every layer (framing, no new fact)
const Layers: React.FC = () => {
	const f = useFilmFrame();
	const a = sf(20) - 10;
	const qOn = sf(22) - 6;
	const end = ef(22) + 70;
	const titles = ['THE BOLTS', 'THE REMOVAL RECORD', 'THE INSPECTION', 'THE REGULATOR'];
	const thread = tween(f, wf(21, 'failed'), wf(21, 'failed') + 70, 0, 1, ease.draw);
	const o = envelope(f, a, end, 18, 24);
	return (
		<AbsoluteFill style={{opacity: o, perspective: 1400}}>
			<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 760, transformStyle: 'preserve-3d', transform: `rotateY(${-38 + tween(f, a, end, 0, 6)}deg) translateX(${-60}px)`}}>
				{titles.map((t, i) => {
					const inF = a + 14 + i * 16;
					const k = settle(f, 60, inF);
					return (
						<div
							key={t}
							style={{
								position: 'absolute',
								left: 380 + i * 330,
								top: 150,
								width: 290,
								height: 420,
								border: `2px solid ${colors.cyan}`,
								background: 'rgba(18,24,36,0.9)',
								transform: `translateZ(${-i * 40}px) translateY(${(1 - k) * 40}px)`,
								opacity: k,
							}}
						>
							<div style={{position: 'absolute', left: 120, top: 180 + i * 6, width: 64, height: 64, borderRadius: 32, background: colors.void, border: `2px solid ${thread > i / 4 ? colors.red : colors.border}`}} />
							<div style={{position: 'absolute', left: 18, top: 18, right: 14, fontFamily: mono, fontSize: 26, fontWeight: 700, lineHeight: 1.25, letterSpacing: 1.6, color: colors.ink}}>{t}</div>
						</div>
					);
				})}
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
				<line x1={300} x2={300 + 1420 * thread} y1={368} y2={368 + 22 * thread} stroke={colors.red} strokeWidth={3} />
			</svg>
			<div style={{position: 'absolute', left: 0, right: 0, top: 800, textAlign: 'center', fontFamily: sans, fontWeight: 700, fontSize: 58, letterSpacing: 2, color: colors.ink, opacity: tween(f, qOn, qOn + 20, 0, 1)}}>
				<TypeOn text="WHERE DID THE MARGIN OF ERROR RUN OUT?" start={qOn} cps={26} caret={false} />
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
	{id: 'paper', from: sf(13) - 20, to: sf(17) + 40, C: Paper, cues: [{frame: sf(15) + 30, sfx: 'paper_slide', gainDb: -12}, {frame: sf(15) + 100, sfx: 'highlighter', gainDb: -16}]},
	{id: 'loop', from: sf(17) + 10, to: sf(20) + 20, C: Loop, cues: [{frame: sf(17) + 50, sfx: 'pen_scratch', gainDb: -18}]},
	{id: 'layers', from: sf(20) - 20, to: ef(22) + 80, C: Layers, cues: [{frame: wf(21, 'failed'), sfx: 'metal_snap_sub', gainDb: -14}]},
	{id: 'act2title', from: ef(22) + 40, to: sf(23) + 40, C: ActII, cues: [{frame: ef(22) + 50, sfx: 'whoosh', gainDb: -20}]},
];

