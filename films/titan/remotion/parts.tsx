import React from 'react';
import {Img, interpolate, OffthreadVideo, Sequence, useVideoConfig} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../lib/remotion/motion';
import {media, mono, sans} from './kit';
import d80 from './data/dive80_time.json';

// Titan's shared parts: the dive 80 time trace (NTSB 24-012 fig. 26d), the hull schematic, the dive ledger, the
// message log, real footage on the desk. Every beat keys to measured word frames (timing.ts wf()).

export {mono, sans};
export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});
/** 0→1 between two frames, eased (a span of motion that is not a word landing). */
export const span = (f: number, a: number, b: number): number => tween(f, a, b, 0, 1, ease.camera);
/** Visible from `a` (arrives on it) until `b` (leaves after it). */
export const vis = (f: number, a: number, b: number, inF = 12, outF = 14): number => Math.min(lead(f, a, inF), 1 - interpolate(f, [b, b + outF], [0, 1], clamp));
/** Text takes the light on its word. */
export const lit = (f: number, on: number, tone: string = colors.ink, base: string = colors.sub): React.CSSProperties => ({
	color: f >= on ? tone : base,
	fill: f >= on ? tone : base,
	textShadow: `0 0 ${(16 * flash(f, on, 0)).toFixed(1)}px ${tone}`,
});

/** A chip of honesty (PLAYBOOK §9.4) or a source, on the desk. */
export const Chip: React.FC<{text: string; tone?: string; size?: number; style?: React.CSSProperties; o?: number}> = ({text, tone = colors.amber, size = 26, style, o = 1}) => (
	<span style={{display: 'inline-block', fontFamily: mono, fontSize: size, letterSpacing: 1.2, color: tone, border: `1px solid ${tone}`, background: 'rgba(10,13,18,0.88)', padding: '4px 10px 3px', whiteSpace: 'nowrap', opacity: o, ...style}}>{text}</span>
);

/** A word-arriving card: the card holds the sentence; its content changes on the words. */
export const Card: React.FC<{x: number; y: number; w: number; h?: number; o: number; children: React.ReactNode; accent?: string; style?: React.CSSProperties}> = ({x, y, w, h, o, children, accent, style}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 26px 70px rgba(0,0,0,0.5)', ...style}}>
			{accent ? <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent}} /> : null}
			{children}
		</div>
	);

/** Pop: arrives on its word (rise + fade, completes on the word), then bumps. */
export const Pop: React.FC<{f: number; fps: number; at: number; children: React.ReactNode; style?: React.CSSProperties; dur?: number}> = ({f, fps, at, children, style, dur = 9}) => {
	const k = lead(f, at, dur);
	return <div style={{opacity: k, transform: `translateY(${((1 - k) * 14).toFixed(1)}px) scale(${bump(f, fps, at + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 60%', ...style}}>{children}</div>;
};

// ── The dive 80 time trace (NTSB Materials Laboratory 24-012, fig. 26d: group 4 hoop strain vs time, NDT) ───────

type Row = number[];
const HOOP = d80.fig26d.hoop as Row[];
const DEPTH = d80.fig26d.depth as Row[];
export const T0 = 6.74;
export const T1 = 17.14;
/** 15:26:45 NDT (C08). */
export const T_EVENT = 15 + 26 / 60 + 45 / 3600;

export const hhmm = (h: number): string => {
	const m = Math.max(0, Math.round(h * 60));
	return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};

/**
 * The strain trace against time, as OceanGate plotted it. `tEnd` (hours, NDT) is the one driver: the trace, the
 * depth line and the clock all read it. `axis` morphs the x label TIME→DEPTH (0..1) for the tease.
 */
export const TimeTrace: React.FC<{
	f: number;
	w: number;
	h: number;
	tEnd: number;
	stroke?: string;
	showDepth?: number;
	ae?: number;
	jump?: number;
	axisLabel?: React.ReactNode;
	dim?: number;
}> = ({w, h, tEnd, stroke = colors.sub, showDepth = 1, ae = 0, jump = 0, axisLabel, dim = 0}) => {
	const L = 120;
	const R = 40;
	const TOP = 40;
	const B = 92;
	const pw = w - L - R;
	const ph = h - TOP - B;
	const X = (t: number) => L + ((t - T0) / (T1 - T0)) * pw;
	const MV0 = 2350;
	const MV1 = 3250;
	const Y = (mv: number) => TOP + ph - ((mv - MV0) / (MV1 - MV0)) * ph;
	const YD = (d: number) => TOP + (d / 4500) * ph;
	const pts = HOOP.filter((r) => r[0] <= tEnd);
	const path = pts.map((r, i) => `${i ? 'L' : 'M'}${X(r[0]).toFixed(1)} ${Y(r[1]).toFixed(1)}`).join(' ');
	const band = pts.length > 1 ? `M${pts.map((r) => `${X(r[0]).toFixed(1)} ${Y(r[2]).toFixed(1)}`).join(' L')} L${[...pts].reverse().map((r) => `${X(r[0]).toFixed(1)} ${Y(r[3]).toFixed(1)}`).join(' L')} Z` : '';
	const dp = DEPTH.filter((r) => r[0] <= tEnd);
	const dpath = dp.map((r, i) => `${i ? 'L' : 'M'}${X(r[0]).toFixed(1)} ${YD(r[1]).toFixed(1)}`).join(' ');
	const head = pts.length ? pts[pts.length - 1] : null;
	const hours = [7, 9, 11, 13, 15, 17];
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, opacity: 1 - 0.55 * dim}}>
			{[2400, 2600, 2800, 3000, 3200].map((mv) => (
				<g key={mv}>
					<line x1={L} x2={L + pw} y1={Y(mv)} y2={Y(mv)} stroke={colors.border} strokeWidth={1} />
					<text x={L - 14} y={Y(mv) + 9} textAnchor="end" style={T(26, {fill: colors.sub})}>{mv}</text>
				</g>
			))}
			{hours.map((hh) => (
				<g key={hh}>
					<line x1={X(hh)} x2={X(hh)} y1={TOP} y2={TOP + ph} stroke={colors.border} strokeWidth={1} />
					<text x={X(hh)} y={TOP + ph + 36} textAnchor="middle" style={T(26, {fill: colors.sub})}>{`${String(hh).padStart(2, '0')}:00`}</text>
				</g>
			))}
			<text x={L} y={TOP - 12} style={T(26, {fill: colors.ink})}>STRAIN · GAUGE GROUP 4, HOOP · mV</text>
			{showDepth > 0 && dpath ? <path d={dpath} fill="none" stroke={colors.cyan} strokeWidth={2} strokeDasharray="6 6" opacity={0.75 * showDepth} /> : null}
			{showDepth > 0 && dp.length > 40 ? (
				<text x={X(9.2)} y={YD(1500)} style={T(26, {fill: colors.cyan})} opacity={showDepth}>DEPTH</text>
			) : null}
			{band ? <path d={band} fill={stroke} opacity={0.18} /> : null}
			<path d={path} fill="none" stroke={stroke} strokeWidth={3} strokeLinejoin="round" />
			{head ? <circle cx={X(head[0])} cy={Y(head[1])} r={6} fill={colors.ink} /> : null}
			{ae > 0 ? (
				<g opacity={ae}>
					<line x1={X(T_EVENT)} x2={X(T_EVENT)} y1={TOP + ph} y2={TOP + ph - ph * ae} stroke={colors.red} strokeWidth={4} />
				</g>
			) : null}
			{jump > 0 ? <rect x={X(T_EVENT) - 34} y={Y(2560)} width={68} height={Y(2400) - Y(2560)} fill="none" stroke={colors.amber} strokeWidth={3} opacity={jump} /> : null}
			<g transform={`translate(${L + pw / 2} ${TOP + ph + 78})`}>{axisLabel ?? <text textAnchor="middle" style={T(26, {fill: colors.ink, letterSpacing: 4})}>TIME · NEWFOUNDLAND DAYLIGHT TIME</text>}</g>
		</svg>
	);
};
/** Screen x of a time on a TimeTrace of width w (same layout constants). */
export const traceX = (w: number, t: number): number => 120 + ((t - T0) / (T1 - T0)) * (w - 160);

// ── Real footage on the desk (PLAYBOOK §9.5, §11): unaltered, a slow push, a strip with date, what and credit ─────

export const RealFootage: React.FC<{
	f: number;
	start: number;
	end: number;
	src: string;
	video?: boolean;
	from?: number;
	date: string;
	what: string;
	source: string;
	push?: number;
	focus?: [number, number];
	box?: {x: number; y: number; w: number; h: number};
	label?: string;
	rate?: number;
	/** credit strip under the picture (keeps a record's own burned-in overlay clear) */
	under?: boolean;
}> = ({f, start, end, src, video = true, from = 0, date, what, source, push = 0.08, focus = [0.5, 0.5], box = {x: 0, y: 0, w: 1920, h: 1080}, label, rate = 1, under = false}) => {
	const {fps} = useVideoConfig();
	const o = Math.min(lead(f, start, 12), 1 - lead(f, end - 14, 14));
	if (o <= 0) return null;
	const k = Math.min(1, Math.max(0, (f - start) / Math.max(1, end - start)));
	const s = 1 + push * (k * k * (3 - 2 * k));
	const m = video ? (
		<Sequence from={start - 12} durationInFrames={end - start + 26} layout="none">
			<OffthreadVideo src={media(src)} muted startFrom={Math.round(from * fps)} playbackRate={rate} style={{width: box.w, height: box.h, objectFit: 'cover'}} />
		</Sequence>
	) : (
		<Img src={media(src)} style={{width: box.w, height: box.h, objectFit: 'cover'}} />
	);
	const strip = (
		<div style={under ? {position: 'absolute', left: box.x, width: box.w, top: box.y + box.h, height: 58, display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px', background: colors.card, border: `1px solid ${colors.border}`, fontFamily: mono, fontSize: 26, letterSpacing: 1.5, color: colors.ink, whiteSpace: 'nowrap', opacity: o} : {position: 'absolute', left: 96, right: 96, bottom: 54, height: 58, display: 'flex', alignItems: 'center', gap: 16, fontFamily: mono, fontSize: 26, letterSpacing: 1.5, color: colors.ink, whiteSpace: 'nowrap'}}>
			{date ? <span style={{color: colors.amber, fontWeight: 700}}>{date}</span> : null}
			<span>{date ? '· ' : ''}{what}</span>
			<span style={{marginLeft: 'auto', paddingLeft: 24}}>{source}</span>
		</div>
	);
	return (
		<>
		<div style={{position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, overflow: 'hidden', opacity: o, background: colors.void, border: under ? `1px solid ${colors.border}` : undefined}}>
			<div style={{position: 'absolute', inset: 0, transform: `scale(${s.toFixed(4)})`, transformOrigin: `${(focus[0] * 100).toFixed(1)}% ${(focus[1] * 100).toFixed(1)}%`}}>{m}</div>
			{under ? null : <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 220, background: 'linear-gradient(to top, rgba(10,13,18,0.92), rgba(10,13,18,0))'}} />}
			{under ? null : strip}
			{label ? <div style={{position: 'absolute', right: 96, top: 54}}><Chip text={label} /></div> : null}
		</div>
		{under ? strip : null}
		</>
	);
};
// ── The hull, as a line drawing (ILLUSTRATION · NOT TO SCALE): cylinder, two titanium rings, two domes ───────────

export const HULL = {cx: 960, cy: 520, len: 980, r: 200, ring: 46, dome: 150};
/** Sensor positions along the hull (ILLUSTRATION: the record gives counts, C36; positions are schematic). */
export const AE_POS: [number, number][] = [
	[-0.42, -1], [-0.14, -1], [0.14, -1], [0.42, -1], [-0.42, 1], [-0.14, 1], [0.14, 1], [0.42, 1],
];
export const SG_POS: [number, number][] = [
	[-0.34, -0.55], [-0.06, -0.55], [0.22, -0.55], [0.48, -0.55], [-0.48, 0.55], [-0.22, 0.55], [0.06, 0.55], [0.34, 0.55],
];

export const HullLines: React.FC<{draw: number; ringsLit?: number; domesLit?: number; tone?: string; wall?: number}> = ({draw, ringsLit = 0, domesLit = 0, tone = colors.cyan, wall = 0}) => {
	const {cx, cy, len, r, ring, dome} = HULL;
	const x0 = cx - len / 2;
	const x1 = cx + len / 2;
	const per = 2 * (len + 2 * r);
	const d = `M ${x0} ${cy - r} L ${x1} ${cy - r} L ${x1} ${cy + r} L ${x0} ${cy + r} Z`;
	return (
		<g fill="none" strokeLinejoin="round">
			<path d={d} stroke={tone} strokeWidth={3} strokeDasharray={per} strokeDashoffset={per * (1 - draw)} />
			{wall > 0 ? <path d={`M ${x0 + 6} ${cy - r + 14} L ${x1 - 6} ${cy - r + 14} M ${x0 + 6} ${cy + r - 14} L ${x1 - 6} ${cy + r - 14}`} stroke={tone} strokeWidth={1.5} opacity={0.6 * wall} /> : null}
			{[x0 - ring, x1].map((x) => (
				<rect key={x} x={x} y={cy - r - 10} width={ring} height={2 * r + 20} stroke={ringsLit > 0 ? colors.ink : tone} strokeWidth={2.5} opacity={Math.max(0.35 * draw, ringsLit)} />
			))}
			<path d={`M ${x0 - ring} ${cy - r} A ${dome} ${r} 0 0 0 ${x0 - ring} ${cy + r}`} stroke={domesLit > 0 ? colors.ink : tone} strokeWidth={2.5} opacity={Math.max(0.35 * draw, domesLit)} />
			<path d={`M ${x1 + ring} ${cy - r} A ${dome} ${r} 0 0 1 ${x1 + ring} ${cy + r}`} stroke={domesLit > 0 ? colors.ink : tone} strokeWidth={2.5} opacity={Math.max(0.35 * draw, domesLit)} />
		</g>
	);
};

// ── The dive ledger: one row per dive, a depth bar, the date ─────────────────────────────────────────────────────

export type LedgerRow = {dive: string; depth: number; date?: string; tone?: string; at: number; note?: string};
export const Ledger: React.FC<{f: number; fps: number; rows: LedgerRow[]; x: number; y: number; w: number; rowH?: number; maxDepth?: number; o?: number; ref3840?: number}> = ({f, fps, rows, x, y, w, rowH = 44, maxDepth = 4000, o = 1, ref3840 = 0}) => {
	const barX = 170;
	const barW = w - barX - 220;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o}}>
			{ref3840 > 0 ? <div style={{position: 'absolute', left: barX + (3840 / maxDepth) * barW, top: -40, height: rows.length * rowH + 50, borderLeft: `2px dashed ${colors.cyan}`, opacity: ref3840}}><div style={{...T(26, {color: colors.cyan}), position: 'absolute', left: 8, top: -6, whiteSpace: 'nowrap'}}>3,840 M · THE WRECK</div></div> : null}
			{rows.map((r, i) => {
				const k = lead(f, r.at, 16);
				const grow = interpolate(f, [r.at - 6, r.at + 20], [0, 1], {...clamp, easing: ease.arrive});
				return (
					<div key={r.dive + i} style={{position: 'absolute', left: 0, top: i * rowH, height: rowH - 8, width: w, opacity: k, display: 'flex', alignItems: 'center'}}>
						<div style={{width: barX, ...T(26, {color: r.tone ?? colors.ink}), transform: `scale(${bump(f, fps, r.at + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>DIVE {r.dive}</div>
						<div style={{position: 'relative', width: barW, height: 14, background: colors.border}}>
							<div style={{position: 'absolute', left: 0, top: 0, height: 14, width: barW * (r.depth / maxDepth) * grow, background: r.tone ?? colors.cyan}} />
						</div>
						<div style={{marginLeft: 16, ...T(26, {color: colors.ink}), whiteSpace: 'nowrap'}}>{r.note ?? r.date ?? ''}</div>
					</div>
				);
			})}
		</div>
	);
};

/** A word on screen that arrives and takes the light on its spoken word (`at`); `lightAt` lights it later if given. */
export const Wd: React.FC<{f: number; at: number; tone?: string; base?: string; lightAt?: number; bold?: boolean; children: React.ReactNode; style?: React.CSSProperties}> = ({f, at, tone = colors.ink, base = colors.sub, lightAt, bold, children, style}) => (
	<span style={{opacity: lead(f, at, 8), ...lit(f, lightAt ?? at, tone, base), fontWeight: bold ? 700 : undefined, ...style}}>{children}</span>
);
