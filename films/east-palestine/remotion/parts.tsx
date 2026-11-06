import React from 'react';
import {interpolate} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {fontStacks} from '../../../lib/remotion/fonts';
import {bump, flash, LAND, lead, rollTo} from '../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../lib/remotion/motion';
import route from './data/route_fig3.json';

// East Palestine picture parts (PLAYBOOK §10.6): each part takes its state from word frames passed in by the scene,
// so a reading lands on its number and a part lights on its noun. Colour = meaning: cyan nominal, amber threshold and
// money, red failure, ink the record.

export const mono = fontStacks.mono;
export const sans = fontStacks.display;
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** °F above ambient → °C difference (a temperature difference, so ×5/9 with no offset), shown beside the record's unit. */
export const dC = (f: number): number => Math.round((f * 5) / 9);

/** An honesty label at the read-now size (PLAYBOOK §6.7: 36 px on anything that could pass as real). */
export const Honesty: React.FC<{text: string; x: number; y: number; o?: number; anchor?: 'left' | 'right'}> = ({text, x, y, o = 1, anchor = 'left'}) => (
	<div
		style={{
			position: 'absolute',
			top: y,
			...(anchor === 'left' ? {left: x} : {right: 1920 - x}),
			opacity: o,
			fontFamily: mono,
			fontWeight: 700,
			fontSize: 36,
			letterSpacing: 2,
			color: colors.amber,
			background: 'rgba(10,13,18,0.9)',
			border: `2px solid ${colors.amber}`,
			padding: '6px 14px 4px',
			whiteSpace: 'nowrap',
		}}
	>
		{text}
	</div>
);

/** A card on the desk (nothing floats on the void). */
export const Card: React.FC<{x: number; y: number; w: number; h?: number; o?: number; children: React.ReactNode; style?: React.CSSProperties; accent?: string}> = ({x, y, w, h, o = 1, children, style, accent}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 24px 60px rgba(0,0,0,0.45)', ...style}}>
			{accent ? <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent}} /> : null}
			{children}
		</div>
	);

/** Text that lights on its word: sub before, tone after, with a glow (eye-trace, §10.6 law 2). */
export const lit = (f: number, on: number, tone: string = colors.ink): React.CSSProperties => ({
	color: f >= on ? tone : colors.sub,
	textShadow: `0 0 ${(18 * flash(f, on, 0)).toFixed(1)}px ${tone}`,
});

/** Opacity that completes on its word. */
export const onW = (f: number, w: number, dur = 10): number => lead(f, w, dur);
/** Opacity that fades out from `w`. */
export const offW = (f: number, w: number, dur = 14): number => 1 - interpolate(f, [w, w + dur], [0, 1], clamp);

/** A word or chip that arrives on its word and bumps. */
export const Pop: React.FC<{f: number; fps: number; on: number; children: React.ReactNode; style?: React.CSSProperties}> = ({f, fps, on, children, style}) => {
	const k = lead(f, on, 8);
	if (k <= 0) return null;
	return <div style={{opacity: k, transform: `translateY(${((1 - k) * 12).toFixed(1)}px) scale(${bump(f, fps, on + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 60%', ...style}}>{children}</div>;
};

// ── The dateline ─────────────────────────────────────────────────────────────────────────────────────────────────

/** Time and place as the record gives them, each part on its own word. */
export const Dateline: React.FC<{f: number; fps: number; day: number; month: number; yearA: number; year: number; clock: number; clockMin: number; place: number; state: number; o: number}> = ({
	f,
	fps,
	day,
	month,
	yearA,
	year,
	clock,
	clockMin,
	place,
	state,
	o,
}) => {
	if (o <= 0) return null;
	const d = Math.round(rollTo(f, [{frame: day - 20, value: 1}, {frame: day + LAND, value: 3}]));
	// the year is said in two words: '20' on 'twenty', '23' on 'twenty-three'; it never rolls through other years
	const yr = f >= year ? '2023' : f >= yearA ? '20··' : '····';
	const big: React.CSSProperties = {fontFamily: mono, fontWeight: 700, fontSize: 104, letterSpacing: 4, lineHeight: 1.1};
	return (
		<div style={{position: 'absolute', left: 200, top: 250, opacity: o}}>
			<div style={{...big, display: 'flex', gap: 26, opacity: onW(f, day, 12)}}>
				<span style={{color: colors.amber, transform: `scale(${bump(f, fps, day + LAND).toFixed(4)})`, display: 'inline-block'}}>{String(d).padStart(2, '0')}</span>
				<span style={lit(f, month)}>{f >= month ? 'FEB' : '···'}</span>
				<span style={{color: f >= year ? colors.ink : colors.sub, display: 'inline-block', transform: `scale(${bump(f, fps, year + LAND, 0.05).toFixed(4)})`}}>{yr}</span>
			</div>
			<div style={{...big, marginTop: 18, opacity: onW(f, clock, 10), color: colors.cyan, transform: `scale(${bump(f, fps, clockMin + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>
				{f >= clock ? '8' : ' '}:{f >= clockMin ? '13' : '00'} <span style={{fontSize: 56, color: colors.ink}}>P.M. EST</span>
			</div>
			<div style={{marginTop: 22, display: 'flex', gap: 22, alignItems: 'baseline'}}>
				<span style={{...big, fontSize: 80, opacity: onW(f, place, 10), ...lit(f, place)}}>SALEM,</span>
				<span style={{...big, fontSize: 80, opacity: onW(f, state, 10), ...lit(f, state)}}>OHIO</span>
				<span style={{fontFamily: mono, fontSize: 44, color: colors.cyan, opacity: onW(f, state + 20, 12)}}>MP 69.01</span>
			</div>
		</div>
	);
};

// ── The route (traced from NTSB fig. 3) ───────────────────────────────────────────────────────────────────────────

type Pt = [number, number];
const RP = route.pts as Pt[];
const cum: number[] = RP.reduce<number[]>((a, p, i) => (i === 0 ? [0] : [...a, a[i - 1] + Math.hypot(p[0] - RP[i - 1][0], p[1] - RP[i - 1][1])]), []);
const LEN = cum[cum.length - 1];
const nodes = route.nodes;
/** Arc length (figure px) of the route at figure x. */
const sAtX = (x: number): number => {
	const i = Math.max(1, RP.findIndex((p) => p[0] >= x));
	const t = (x - RP[i - 1][0]) / Math.max(1, RP[i][0] - RP[i - 1][0]);
	return cum[i - 1] + t * (cum[i] - cum[i - 1]);
};
const nodeS = nodes.map((n) => sAtX(n.x));
/** Point on the route at arc length s. */
export const ptAtS = (s: number): Pt => {
	const c = Math.max(0, Math.min(LEN, s));
	const i = Math.max(1, cum.findIndex((v) => v >= c));
	const t = (c - cum[i - 1]) / Math.max(1e-6, cum[i] - cum[i - 1]);
	return [RP[i - 1][0] + t * (RP[i][0] - RP[i - 1][0]), RP[i - 1][1] + t * (RP[i][1] - RP[i - 1][1])];
};
/** Arc length at a milepost (mileposts fall eastbound: 79.8 Sebring → 49.81 East Palestine), piecewise between detectors. */
export const sAtMP = (mp: number): number => {
	const m = nodes.map((n) => n.mp);
	if (mp >= m[1]) return interpolate(mp, [m[1], m[0]], [nodeS[1], nodeS[0]], clamp);
	return interpolate(mp, [m[2], m[1]], [nodeS[2], nodeS[1]], {extrapolateLeft: 'extend', extrapolateRight: 'clamp'});
};
const pathD = (s0: number, s1: number): string => {
	const pts: Pt[] = [ptAtS(s0), ...RP.filter((_, i) => cum[i] > s0 && cum[i] < s1), ptAtS(s1)];
	return pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
};
export const ROUTE = {w: route.w, h: route.h, nodes, nodeS, LEN};
/** Label placement per detector (screen px offsets): Sebring above, Salem below-left (the line falls away east of it), East Palestine below, flush right. */
const LBL: {dx: number; dy: number; anchor: 'start' | 'middle' | 'end'}[] = [
	{dx: -20, dy: -36, anchor: 'start'},
	{dx: -20, dy: 72, anchor: 'end'},
	{dx: 20, dy: 72, anchor: 'end'},
];

/**
 * The route line, drawn in figure coordinates (1955 × 905) and placed by `box` (screen px). `draw` 0→1 draws it west
 * to east; `lit` lights a stretch (arc s0..s1) in a tone; nodes appear on their frames; `head` is the train's head
 * as a milepost.
 */
export const RouteLine: React.FC<{
	f: number;
	fps: number;
	box: {x: number; y: number; w: number};
	draw: number;
	nodeOn: (number | null)[];
	nodeTone?: string[];
	head?: number | null;
	stretch?: {s0: number; s1: number; tone: string; o: number; dash?: boolean} | null;
	labels?: boolean;
	children?: React.ReactNode;
}> = ({f, fps, box, draw, nodeOn, nodeTone, head, stretch, labels = true, children}) => {
	const k = box.w / route.w;
	const h = route.h * k;
	const sw = 6 / k;
	// label width in figure units: 36 px mono ≈ 0.6 em a character
	const lw = (n: {name: string; mp: number}): number => ((`${n.name} · MP ${n.mp}`.length * 36 * 0.6) / k);
	return (
		<svg style={{position: 'absolute', left: box.x, top: box.y, overflow: 'visible'}} width={box.w} height={h} viewBox={`0 0 ${route.w} ${route.h}`}>
			<path d={pathD(0, LEN)} fill="none" stroke={colors.border} strokeWidth={sw} />
			{draw > 0 ? <path d={pathD(0, LEN * draw)} fill="none" stroke={colors.cyan} strokeWidth={sw} strokeLinecap="round" opacity={0.85} /> : null}
			{stretch && stretch.o > 0 ? (
				<path d={pathD(stretch.s0, stretch.s1)} fill="none" stroke={stretch.tone} strokeWidth={sw * 2.2} strokeLinecap="round" opacity={stretch.o} strokeDasharray={stretch.dash ? `${sw * 3} ${sw * 2.4}` : undefined} />
			) : null}
			{nodes.map((n, i) => {
				const at = nodeOn[i];
				if (at === null || at === undefined || f < at - 12) return null;
				const o = lead(f, at, 12);
				const tone = nodeTone?.[i] ?? colors.cyan;
				const sc = bump(f, fps, at + LAND, 0.25);
				return (
					<g key={n.name} opacity={o} transform={`translate(${n.x} ${n.y}) scale(${sc})`}>
						<circle r={16 / k} fill={colors.void} stroke={tone} strokeWidth={4 / k} />
						<circle r={6 / k} fill={tone} />
					</g>
				);
			})}
			{head !== null && head !== undefined ? (
				(() => {
					const [hx, hy] = ptAtS(sAtMP(head));
					return (
						<g transform={`translate(${hx} ${hy})`}>
							<circle r={22 / k} fill={colors.amber} opacity={0.25} />
							<circle r={9 / k} fill={colors.amber} />
						</g>
					);
				})()
			) : null}
			{labels
				? nodes.map((n, i) => {
						const at = nodeOn[i];
						if (at === null || at === undefined || f < at - 10) return null;
						return (
							<g key={n.name} opacity={lead(f, at, 10)}>
								<rect x={n.x + LBL[i].dx / k - (LBL[i].anchor === 'end' ? lw(n) : LBL[i].anchor === 'middle' ? lw(n) / 2 : 0) - 8 / k} y={n.y + LBL[i].dy / k - 34 / k} width={lw(n) + 16 / k} height={46 / k} fill={colors.void} opacity={0.85} />
								<text x={n.x + LBL[i].dx / k} y={n.y + LBL[i].dy / k} textAnchor={LBL[i].anchor} fontFamily={mono} fontSize={36 / k} fill={colors.ink} letterSpacing={1}>
									{n.name} · MP {n.mp}
								</text>
							</g>
						);
					})
				: null}
			{children}
		</svg>
	);
};

// ── The temperature gauge (°F above ambient) ─────────────────────────────────────────────────────────────────────

/**
 * A vertical gauge 0–260 °F above ambient: the reading's bar and its number share one driver (§10.3). The stop line
 * draws on its word; a "MAX" lock at the detector's ceiling.
 */
export const Gauge: React.FC<{
	f: number;
	fps: number;
	x: number;
	y: number;
	h?: number;
	keys: {frame: number; value: number}[];
	on: number;
	stopLine?: number | null;
	stopNum?: number | null;
	/** the stop line's number rolls on these words instead (frame → value) */
	stopKeys?: {frame: number; value: number}[];
	maxAt?: number | null;
	higherAt?: number | null;
	alertLine?: number | null;
	o?: number;
	source: string;
	/** the unit lights on 'Fahrenheit', the ambient line on 'above the air' */
	unitAt?: number | null;
	subAt?: number | null;
}> = ({f, fps, x, y, h = 620, keys, on, stopLine, stopNum, maxAt, higherAt, o = 1, source, unitAt, subAt, stopKeys}) => {
	const op = Math.min(o, lead(f, on, 14));
	if (op <= 0) return null;
	const v = rollTo(f, keys);
	const V = 260;
	const yOf = (t: number): number => h - (t / V) * h;
	const over = v >= 170;
	const tone = v >= 200 ? colors.red : over ? colors.red : colors.amber;
	const stopK = stopLine ? lead(f, stopLine, 16) : 0;
	const shownStop = stopKeys ? Math.round(rollTo(f, stopKeys)) : stopNum ? Math.round(rollTo(f, [{frame: stopNum - 18, value: 100}, {frame: stopNum + LAND, value: 170}])) : 170;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 600, height: h + 140, opacity: op}}>
			<Card x={0} y={-30} w={600} h={h + 170} o={1}>
				<span />
			</Card>
			{[0, 50, 100, 150, 200, 250].map((t) => (
				<div key={t} style={{position: 'absolute', left: 20, width: 90, textAlign: 'right', top: yOf(t) - 15, fontFamily: mono, fontSize: 26, color: colors.sub}}>
					{t}
				</div>
			))}
			<div style={{position: 'absolute', left: 124, top: 0, width: 70, height: h, background: colors.void, border: `1px solid ${colors.border}`}}>
				<div style={{position: 'absolute', left: 6, right: 6, bottom: 0, height: Math.max(0, (v / V) * h), background: tone, opacity: 0.9}} />
			</div>
			{stopK > 0 ? (
				<div style={{position: 'absolute', left: 110, top: yOf(170) - 2, width: 470 * stopK, height: 4, background: colors.amber, boxShadow: `0 0 ${(20 * flash(f, stopLine ?? 0, 0.3)).toFixed(1)}px ${colors.amber}`}} />
			) : null}
			{stopK > 0 ? (
				<div style={{position: 'absolute', left: 226, top: v >= 170 ? yOf(170) + 14 : yOf(170) - 52, opacity: stopK, fontFamily: mono, fontSize: 36, fontWeight: 700, color: colors.amber, letterSpacing: 1.5}}>
					STOP LINE {shownStop}°F
				</div>
			) : null}
			<div style={{position: 'absolute', left: 226, top: v < 170 ? yOf(170) + 70 : 20, fontFamily: mono, fontWeight: 700, fontSize: 72, color: tone, letterSpacing: 1}}>
				{f < keys[0].frame ? '—' : `+${Math.round(v)}`}
				<span style={{textShadow: unitAt ? `0 0 ${(18 * flash(f, unitAt, 0)).toFixed(1)}px ${tone}` : undefined}}>°F</span>
				<div style={{fontSize: 26, fontWeight: 400, letterSpacing: 1.5, whiteSpace: 'nowrap', ...(subAt ? lit(f, subAt) : {color: colors.ink})}}>ABOVE AMBIENT{f < keys[0].frame ? '' : ` · Δ${dC(Math.round(v))}°C`}</div>
			</div>
			{maxAt && f >= maxAt - 8 ? (
				<div style={{position: 'absolute', left: 226, top: yOf(170) + 76, opacity: lead(f, maxAt, 8), transform: `scale(${bump(f, fps, maxAt + LAND).toFixed(4)})`, transformOrigin: '0 50%', fontFamily: mono, fontWeight: 700, fontSize: 36, color: colors.void, background: colors.red, padding: '4px 12px'}}>
					MAX READING
				</div>
			) : null}
			{higherAt && f >= higherAt - 12 ? (
				<div style={{position: 'absolute', left: 226, top: yOf(170) + 146, opacity: lead(f, higherAt, 14), fontFamily: mono, fontSize: 36, color: colors.red, lineHeight: 1.25}}>
					▲ ACTUAL MAY
					<br />
					HAVE BEEN HIGHER
				</div>
			) : null}
			<div style={{position: 'absolute', left: 24, top: h + 64, fontFamily: mono, fontSize: 26, color: colors.sub, whiteSpace: 'nowrap'}}>{source}</div>
		</div>
	);
};

// ── A railcar in side elevation (after NTSB fig. 4: axles 1–4, the L1 bearing on the leading axle) ────────────────

/** A covered hopper in side view, wheels on the rail at `y`; `lightWheel` lights the leading wheelset; `fire` glows it. */
export const Hopper: React.FC<{x: number; y: number; w?: number; tone?: string; lightWheel?: number; fire?: number; stroke?: number}> = ({x, y, w = 300, tone = colors.sub, lightWheel = 0, fire = 0, stroke = 3}) => {
	const h = w * 0.36;
	const wr = w * 0.045;
	const lead1 = x + w * 0.86;
	return (
		<g>
			<path d={`M ${x + w * 0.04} ${y - wr * 2.4} L ${x + w * 0.1} ${y - h} L ${x + w * 0.9} ${y - h} L ${x + w * 0.96} ${y - wr * 2.4} Z`} fill={colors.card} stroke={tone} strokeWidth={stroke} />
			{[0.3, 0.5, 0.7].map((p) => (
				<path key={p} d={`M ${x + w * (p - 0.07)} ${y - wr * 2.4} L ${x + w * p} ${y - wr * 1.2} L ${x + w * (p + 0.07)} ${y - wr * 2.4}`} fill="none" stroke={tone} strokeWidth={stroke * 0.8} />
			))}
			{[0.1, 0.2, 0.8, 0.9].map((p, i) => {
				const cx = x + w * (p === 0.9 ? 0.86 : p === 0.8 ? 0.76 : p === 0.2 ? 0.24 : 0.14);
				const isLead = i === 3;
				return <circle key={p} cx={cx} cy={y - wr} r={wr} fill={colors.void} stroke={isLead && lightWheel > 0 ? colors.amber : tone} strokeWidth={stroke * (isLead && lightWheel > 0 ? 1.6 : 1)} />;
			})}
			{fire > 0 ? (
				<g opacity={fire}>
					<circle cx={lead1} cy={y - wr} r={wr * 2.6} fill={colors.red} opacity={0.22} />
					<circle cx={lead1} cy={y - wr} r={wr * 1.5} fill={colors.amber} opacity={0.5} />
					<path d={`M ${lead1 - wr} ${y - wr} Q ${lead1 - wr * 0.4} ${y - wr * 4.4} ${lead1 + wr * 0.2} ${y - wr * 2.2} Q ${lead1 + wr * 0.8} ${y - wr * 3.8} ${lead1 + wr} ${y - wr}`} fill={colors.amber} opacity={0.75} />
				</g>
			) : null}
		</g>
	);
};

/** A blocky locomotive in side view. */
export const Loco: React.FC<{x: number; y: number; w?: number; tone?: string}> = ({x, y, w = 300, tone = colors.sub}) => {
	const h = w * 0.34;
	const wr = w * 0.04;
	return (
		<g>
			<rect x={x + w * 0.03} y={y - h} width={w * 0.94} height={h - wr * 2.2} fill={colors.card} stroke={tone} strokeWidth={3} />
			<rect x={x + w * 0.74} y={y - h * 1.18} width={w * 0.22} height={h * 0.2} fill={colors.card} stroke={tone} strokeWidth={3} />
			{[0.12, 0.24, 0.36, 0.64, 0.76, 0.88].map((p) => (
				<circle key={p} cx={x + w * p} cy={y - wr} r={wr} fill={colors.void} stroke={tone} strokeWidth={3} />
			))}
		</g>
	);
};

/** 0..1 eased between two frames (camera moves, slides). */
export const span = (f: number, a: number, b: number): number => tween(f, a, b, 0, 1, ease.camera);
