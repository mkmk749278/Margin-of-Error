import React from 'react';
import {interpolate} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {mono} from './parts';

// Act II parts: the bearing in section, NS's three lines as a ladder, the inside/outside heat lag.
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/**
 * A tapered roller bearing at the end of an axle, in section (after NTSB RIR-24-05 fig. 17, SKF's cutaway, used as a
 * reference only; p. 46 n. 75): the axle's journal inside two cones, two rows of tapered rollers, the outer cup,
 * seals at each end, grease between. Drawn in its own 1200 × 600 box. `heat` 0..1 glows from the inside out;
 * `spin` turns the rollers' marks; `scanAt` shows the detector's spot on the cup's inner edge (NTSB fig. 14).
 */
export const BearingSection: React.FC<{
	f: number;
	x: number;
	y: number;
	scale?: number;
	axleOn: number;
	cupOn: number;
	rollersOn: number;
	sealsOn: number;
	greaseOn: number;
	heat?: number;
	outsideHeat?: number;
	spin?: number;
	jitter?: number;
	scanOn?: number | null;
	/** burn-off (Act IV): grease burned 0..1, seals gone 0..1, the journal broken away and dropping 0..1 */
	burn?: number;
	sealsGone?: number;
	drop?: number;
	labels?: {t: string; at: number; x: number; y: number; tone?: string}[];
}> = ({f, x, y, scale = 1, axleOn, cupOn, rollersOn, sealsOn, greaseOn, heat = 0, outsideHeat = 0, spin = 0, jitter = 0, scanOn, burn = 0, sealsGone = 0, drop = 0, labels = []}) => {
	const L = (at: number, d = 14): number => lead(f, at, d);
	const cupX = 360;
	const cupW = 640;
	const cupY = 150;
	const cupH = 300;
	const jy = Math.sin(f * 1.9) * jitter * 3;
	const rollers = [0, 1].flatMap((row) =>
		[0, 1, 2].map((k) => ({row, k, cx: cupX + 120 + row * 340 + k * 60, top: row === 0})),
	);
	return (
		<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={1200 * scale} height={600 * scale} viewBox="0 0 1200 600">
			<defs>
				<radialGradient id="bheat" cx="50%" cy="50%" r="55%">
					<stop offset="0%" stopColor={colors.red} stopOpacity={0.85} />
					<stop offset="60%" stopColor={colors.amber} stopOpacity={0.35} />
					<stop offset="100%" stopColor={colors.amber} stopOpacity={0} />
				</radialGradient>
			</defs>
			{/* the axle's journal */}
			<g opacity={L(axleOn, 18)}>
				{/* the wheelset side drops when the journal breaks away (Act IV) */}
				<g transform={`translate(${(-40 * drop).toFixed(1)} ${(200 * drop * drop).toFixed(1)}) rotate(${(10 * drop).toFixed(2)} 330 300)`}>
					<rect x={0} y={250} width={330} height={100} fill={colors.card} stroke={drop > 0 ? colors.red : colors.sub} strokeWidth={3} />
					<rect x={0} y={230} width={300} height={140} fill={colors.card} stroke={drop > 0 ? colors.red : colors.sub} strokeWidth={3} />
				</g>
				<rect x={330} y={250} width={770} height={100} fill={colors.card} stroke={colors.sub} strokeWidth={3} />
				{drop > 0 ? <path d="M 330 240 L 345 270 L 322 300 L 345 330 L 330 360" fill="none" stroke={colors.red} strokeWidth={6} /> : null}
			</g>
			{/* grease fills the space between cup and cones */}
			{greaseOn ? <rect x={cupX + 20} y={cupY + 30} width={cupW - 40} height={cupH - 60} fill={burn > 0.5 ? colors.red : colors.amber} opacity={0.16 * L(greaseOn, 20) * (1 - burn) + 0.3 * burn * (1 - burn) * 4 * 0.25} /> : null}
			{/* heat from the inside */}
			{heat > 0 ? <ellipse cx={cupX + cupW / 2} cy={300} rx={420 * (0.6 + 0.4 * heat)} ry={200 * (0.6 + 0.4 * heat)} fill="url(#bheat)" opacity={heat} /> : null}
			{/* the outer cup */}
			<g opacity={L(cupOn, 16)} transform={`translate(0 ${jy})`}>
				<rect x={cupX} y={cupY} width={cupW} height={40} fill={colors.card} stroke={outsideHeat > 0.5 ? colors.red : colors.cyan} strokeWidth={4} />
				<rect x={cupX} y={cupY + cupH - 40} width={cupW} height={40} fill={colors.card} stroke={outsideHeat > 0.5 ? colors.red : colors.cyan} strokeWidth={4} />
				{outsideHeat > 0 ? <rect x={cupX} y={cupY + cupH - 40} width={cupW} height={40} fill={colors.red} opacity={0.4 * outsideHeat} /> : null}
			</g>
			{/* two rows of tapered rollers, top and bottom */}
			<g opacity={L(rollersOn, 16)} transform={`translate(0 ${jy})`}>
				{rollers.map(({row, k, cx}) =>
					[cupY + 50, cupY + cupH - 100].map((ry, side) => {
						const taper = row === 0 ? 1 : -1;
						const mark = ((spin * 60 + k * 20) % 50) - 25;
						return (
							<g key={`${row}${k}${side}`}>
								<path d={`M ${cx - 24} ${ry} L ${cx + 24} ${ry + taper * 8} L ${cx + 24} ${ry + 50 - taper * 8} L ${cx - 24} ${ry + 50} Z`} fill={colors.void} stroke={colors.ink} strokeWidth={3} />
								<line x1={cx + mark * 0.6} y1={ry + 6} x2={cx + mark * 0.6} y2={ry + 44} stroke={colors.sub} strokeWidth={2} />
							</g>
						);
					}),
				)}
			</g>
			{/* seals at each end */}
			<g opacity={L(sealsOn, 12) * (1 - sealsGone)}>
				{[cupX - 20, cupX + cupW].map((sx) => (
					<g key={sx}>
						<rect x={sx} y={cupY + 40} width={20} height={70} fill={colors.amber} />
						<rect x={sx} y={cupY + cupH - 110} width={20} height={70} fill={colors.amber} />
					</g>
				))}
			</g>
			{/* the detector's spot: the inner edge of the outer cup, from below (fig. 14) */}
			{scanOn ? (
				<g opacity={L(scanOn, 14)}>
					<polygon points={`${cupX + 40},600 ${cupX + 10},${cupY + cupH} ${cupX + 70},${cupY + cupH}`} fill={colors.cyan} opacity={0.3 + 0.4 * flash(f, scanOn, 0)} />
					<circle cx={cupX + 40} cy={cupY + cupH} r={14} fill="none" stroke={colors.cyan} strokeWidth={4} />
				</g>
			) : null}
			{labels.map((l) => (
				<text key={l.t} x={l.x} y={l.y} fontFamily={mono} fontSize={36} fill={l.tone ?? colors.ink} opacity={L(l.at, 10)} letterSpacing={1.5}>
					{l.t}
				</text>
			))}
		</svg>
	);
};

export type Rung = {at: number; value: number; cardDy?: number; tone: string; title: string; titleAt?: number; title2?: string; title2At?: number; sub?: string; subAt?: number; subOff?: number; noNum?: boolean; lines: {t: string; at: number}[]; dashed?: boolean};

/**
 * NS's three lines as a ladder, °F above ambient on a vertical scale (0–260): each rung draws on its number's word,
 * its action lines arrive on their words; a reading marker (one driver for marker and number) and an optional
 * hypothetical lowered line.
 */
export const Ladder: React.FC<{
	f: number;
	fps: number;
	x: number;
	y: number;
	h: number;
	rungs: Rung[];
	reading?: {at: number; value: number; label: string} | null;
	litRung?: {value: number; at: number}[];
	axisOn: number;
	axisFlash?: number;
}> = ({f, fps, x, y, h, rungs, reading, litRung = [], axisOn, axisFlash}) => {
	const V = 260;
	const yOf = (v: number): number => h - (v / V) * h;
	const ax = lead(f, axisOn, 18);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 1600, height: h}}>
			<div style={{position: 'absolute', left: 120, top: 0, width: 4, height: h * ax, background: colors.sub, transformOrigin: 'bottom', boxShadow: axisFlash ? `0 0 ${(20 * flash(f, axisFlash, 0)).toFixed(1)}px ${colors.ink}` : undefined}} />
			{[0, 100, 200].map((t) => (
				<div key={t} style={{position: 'absolute', left: 0, width: 100, textAlign: 'right', top: yOf(t) - 16, fontFamily: mono, fontSize: 26, color: colors.sub, opacity: ax}}>
					{t}°
				</div>
			))}
			{rungs.map((r) => {
				const k = lead(f, r.at, 16);
				if (k <= 0) return null;
				const glow = Math.max(...litRung.filter((l) => l.value === r.value).map((l) => flash(f, l.at, 0)), 0);
				return (
					<div key={r.value + r.title}>
						<div style={{position: 'absolute', left: 110, top: yOf(r.value) - 2, width: 360 * k, height: 0, borderTop: `${r.dashed ? 4 : 5}px ${r.dashed ? 'dashed' : 'solid'} ${r.tone}`, boxShadow: glow > 0 ? `0 0 ${(24 * glow).toFixed(1)}px ${r.tone}` : undefined}} />
						{r.cardDy ? <div style={{position: 'absolute', left: 470, top: Math.min(yOf(r.value), yOf(r.value) + r.cardDy), width: 50 * k, height: Math.abs(r.cardDy), borderLeft: `2px solid ${r.tone}`, opacity: 0.6 * k}} /> : null}
						<div style={{position: 'absolute', left: 150, top: yOf(r.value) - 62, fontFamily: mono, fontWeight: 700, fontSize: 44, color: r.tone, transform: `scale(${bump(f, fps, r.at + LAND).toFixed(4)})`, transformOrigin: '0 100%', opacity: r.noNum ? 0 : k}}>
							{r.value}°F
							{r.sub ? <span style={{fontSize: 26, fontWeight: 400, color: colors.ink, marginLeft: 12, opacity: Math.min(lead(f, r.subAt ?? r.at, 8), r.subOff ? 1 - lead(f, r.subOff, 10) : 1)}}>{r.sub}</span> : null}
						</div>
						<div style={{position: 'absolute', left: 520, top: yOf(r.value) - 46 + (r.cardDy ?? 0), width: 1060, opacity: lead(f, r.titleAt ?? r.at, 10), background: colors.card, border: `1px solid ${colors.border}`, padding: '8px 18px', boxShadow: glow > 0 ? `0 0 ${(30 * glow).toFixed(1)}px ${r.tone}` : undefined}}>
							<div style={{fontFamily: mono, fontWeight: 700, fontSize: 36, color: r.tone, letterSpacing: 1.5}}>
								{r.title}
								{r.title2 ? <span style={{opacity: lead(f, r.title2At ?? r.at, 8)}}> {r.title2}</span> : null}
							</div>
							<div style={{display: 'flex', gap: 18, flexWrap: 'wrap'}}>
								{r.lines.map((l) => (
									<span key={l.t} style={{fontFamily: mono, fontSize: 30, color: colors.ink, opacity: lead(f, l.at, 8)}}>
										{l.t}
									</span>
								))}
							</div>
						</div>
					</div>
				);
			})}
			{reading ? (
				(() => {
					const k = lead(f, reading.at, 18);
					if (k <= 0) return null;
					const v = interpolate(k, [0, 1], [0, reading.value], clamp);
					return (
						<div style={{position: 'absolute', left: 60, top: yOf(v) - 22, opacity: Math.min(1, k * 3), display: 'flex', alignItems: 'center', gap: 10}}>
							<div style={{width: 0, height: 0, borderTop: '22px solid transparent', borderBottom: '22px solid transparent', borderLeft: `40px solid ${colors.amber}`}} />
							<span style={{fontFamily: mono, fontWeight: 700, fontSize: 36, color: colors.void, background: colors.amber, padding: '2px 10px', transform: `scale(${bump(f, fps, reading.at + LAND).toFixed(4)})`, display: 'inline-block'}}>
								{reading.label} +{Math.round(v)}°F
							</span>
						</div>
					);
				})()
			) : null}
		</div>
	);
};

/** Inside vs outside of a failing bearing over time (ILLUSTRATIVE VALUES): the outside lags; a detector reads the outside. */
export const LagChart: React.FC<{f: number; x: number; y: number; w: number; h: number; insideAt: number; outsideAt: number; gapAt: number}> = ({f, x, y, w, h, insideAt, outsideAt, gapAt}) => {
	const N = 60;
	const inside = (t: number): number => Math.pow(t, 2.2);
	const outside = (t: number): number => Math.pow(Math.max(0, t - 0.22), 2.2) * 0.75;
	const path = (fn: (t: number) => number, k: number): string =>
		Array.from({length: Math.max(2, Math.round(N * k))}, (_, i) => {
			const t = i / N;
			return `${i ? 'L' : 'M'} ${(t * w).toFixed(1)} ${(h - fn(t) * h * 0.9).toFixed(1)}`;
		}).join(' ');
	const ki = lead(f, insideAt, 40);
	const ko = lead(f, outsideAt, 40);
	const g = lead(f, gapAt, 14);
	return (
		<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={w} height={h}>
			<line x1={0} y1={h} x2={w} y2={h} stroke={colors.sub} strokeWidth={2} />
			<line x1={0} y1={0} x2={0} y2={h} stroke={colors.sub} strokeWidth={2} />
			{ki > 0 ? <path d={path(inside, ki)} fill="none" stroke={colors.red} strokeWidth={6} /> : null}
			{ko > 0 ? <path d={path(outside, ko)} fill="none" stroke={colors.cyan} strokeWidth={6} /> : null}
			{g > 0 ? <line x1={w * 0.75} y1={h - inside(0.75) * h * 0.9} x2={w * 0.75} y2={h - outside(0.75) * h * 0.9} stroke={colors.amber} strokeWidth={4} strokeDasharray="10 8" opacity={g} /> : null}
			<text x={w - 10} y={h - inside(0.98) * h * 0.9 + 50} textAnchor="end" fontFamily={mono} fontSize={36} fill={colors.red} opacity={ki}>INSIDE</text>
			<text x={w - 10} y={h - outside(0.98) * h * 0.9 + 50} textAnchor="end" fontFamily={mono} fontSize={36} fill={colors.cyan} opacity={ko}>OUTSIDE (WHAT THE DETECTOR SEES)</text>
			<text x={w * 0.75 + 16} y={h - (inside(0.75) + outside(0.75)) * h * 0.45} fontFamily={mono} fontSize={36} fill={colors.amber} opacity={g}>LAG</text>
			<text x={0} y={h + 40} fontFamily={mono} fontSize={26} fill={colors.sub}>TIME →</text>
		</svg>
	);
};
