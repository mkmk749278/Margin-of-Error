import React from 'react';
import {interpolate} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {mono} from './parts';
import er from './data/er_ns4178.json';
import t3 from './data/table3_ocpx80370.json';

// Act IV parts: the blind nineteen miles on the event recorder's own data; the hottest tank car over two days.

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const ER = er as {t: number[]; clock: string[]; mph: number[]; db: string[]; emergency: boolean[]; dist_mi: number[]};

/** Event-recorder sample at `sec` seconds after 20:13:00 EST (1 s resolution, nearest earlier sample). */
export const erAt = (sec: number): {clock: string; mph: number; db: string; emergency: boolean; mi: number} => {
	let lo = 0;
	let hi = ER.t.length - 1;
	while (lo < hi) {
		const mid = (lo + hi + 1) >> 1;
		if (ER.t[mid] <= sec) lo = mid;
		else hi = mid - 1;
	}
	return {clock: ER.clock[lo], mph: ER.mph[lo], db: ER.db[lo], emergency: ER.emergency[lo], mi: ER.dist_mi[lo]};
};
/** Seconds after 20:13:00 for a recorder clock 'HH:MM:SS'. */
export const erSec = (clock: string): number => {
	const [h, m, s] = clock.split(':').map(Number);
	return h * 3600 + m * 60 + s - (20 * 3600 + 13 * 60);
};

const X0 = 170;
const X1 = 1750;
const MI_MAX = 21.4;
const xOf = (mi: number): number => X0 + (mi / MI_MAX) * (X1 - X0);
const EP_MI = 69.01 - 49.81; // detectors by milepost: 19.2 mi

/**
 * The blind strip: miles from the Salem detector along the bottom, the two detectors as ticks, the dark span between
 * them where nothing measures the bearing, the train's head driven by the recorder's distance, a speed trace drawn
 * behind it, and an ILLUSTRATIVE band for the inside of the bearing.
 */
export const BlindStrip: React.FC<{f: number; fps: number; sec: number; y: number; darkOn: number; nothingOn: number; epOn: number; failAt: number | null}> = ({f, fps, sec, y, darkOn, nothingOn, epOn, failAt}) => {
	const now = erAt(sec);
	const dark = lead(f, darkOn, 20);
	const trace: string[] = [];
	for (let i = 0; i < ER.t.length; i += 4) {
		if (ER.t[i] < 0) continue;
		if (ER.t[i] > sec) break;
		trace.push(`${trace.length ? 'L' : 'M'} ${xOf(ER.dist_mi[i]).toFixed(1)} ${(y + 250 - ER.mph[i] * 1.6).toFixed(1)}`);
	}
	const hx = xOf(now.mi);
	const failK = failAt === null ? 0 : lead(f, failAt, 6);
	const insideK = interpolate(now.mi, [0, EP_MI, 21.2], [0.2, 0.75, 1], clamp);
	return (
		<svg style={{position: 'absolute', left: 0, top: 0}} width={1920} height={1080}>
			{/* the dark span: no detector */}
			<rect x={xOf(0)} y={y} width={(xOf(EP_MI) - xOf(0)) * dark} height={90} fill={colors.void} stroke={colors.border} strokeWidth={2} />
			<text x={(xOf(0) + xOf(EP_MI)) / 2} y={y + 58} textAnchor="middle" fontFamily={mono} fontSize={36} fill={colors.ink} opacity={lead(f, nothingOn, 12)} letterSpacing={3}>
				NO DETECTOR · NOTHING READS THE BEARING
			</text>
			{/* the track and the train's head */}
			<line x1={X0} y1={y + 120} x2={X1} y2={y + 120} stroke={colors.sub} strokeWidth={5} />
			{[0, 5, 10, 15, 20].map((m) => (
				<g key={m}>
					<line x1={xOf(m)} y1={y + 112} x2={xOf(m)} y2={y + 128} stroke={colors.sub} strokeWidth={3} />
					<text x={xOf(m)} y={y + 160} textAnchor="middle" fontFamily={mono} fontSize={26} fill={colors.sub}>
						{m} MI
					</text>
				</g>
			))}
			{/* detectors */}
			{[
				{mi: 0, name: 'SALEM · MP 69.01', on: darkOn - 30, tone: colors.amber},
				{mi: EP_MI, name: 'EAST PALESTINE · MP 49.81', on: epOn, tone: colors.red},
			].map((d) => (
				<g key={d.name} opacity={lead(f, d.on, 12)} transform={`translate(${xOf(d.mi)} ${y + 120}) scale(${bump(f, fps, d.on + LAND, 0.2)})`}>
					<rect x={-14} y={-8} width={28} height={22} fill={d.tone} />
					<text x={d.mi === 0 ? -14 : 14} y={-28} textAnchor={d.mi === 0 ? 'start' : 'end'} fontFamily={mono} fontSize={36} fill={d.tone}>
						{d.name}
					</text>
				</g>
			))}
			{/* speed trace (the recorder's own speed, mph) */}
			<path d={trace.join(' ')} fill="none" stroke={colors.cyan} strokeWidth={4} opacity={0.9} />
			<text x={X0 + 70} y={y + 250 - 50 * 1.6 - 8} textAnchor="start" fontFamily={mono} fontSize={26} fill={colors.cyan}>SPEED (RECORDER)</text>
			{/* inside the bearing: unknown, illustrative */}
			<line x1={xOf(0)} y1={y - 40} x2={hx} y2={y - 40 - 90 * insideK} stroke={colors.amber} strokeWidth={4} strokeDasharray="12 10" opacity={0.8} />
			<g transform={`translate(${hx} ${y + 120})`}>
				<circle r={30 + 40 * failK} fill={failK > 0 ? colors.red : colors.amber} opacity={0.25 + 0.3 * flash(f, failAt ?? 0, 0) * failK} />
				<circle r={12} fill={failK > 0 ? colors.red : colors.amber} />
			</g>
		</svg>
	);
};

// ── The one plot: the hottest vinyl chloride car (Table 3) and the band ──────────────────────────────────────────

type P3 = {date: string; time: string; h: number; f: number; star: boolean};
const PTS = t3.points as P3[];
const H0 = -8; // 16:00 on 04 FEB (hours from 00:00 05 FEB)
const H1 = 42.5; // 18:30 on 06 FEB
const PX0 = 200;
const PX1 = 1720;
const PY0 = 900; // 110 °F
const PY1 = 330; // 165 °F
export const plotX = (h: number): number => PX0 + ((h - H0) / (H1 - H0)) * (PX1 - PX0);
export const plotY = (v: number): number => PY0 + ((v - 110) / (165 - 110)) * (PY1 - PY0);

/** The plot: axes, measured points revealed up to hour `upTo` (the 2–4 a.m. gap left empty), the band from `bandAt`. */
export const TankPlot: React.FC<{f: number; upTo: number; bandAt: number | null; band153: number | null; band158: number | null; axisOn: number}> = ({f, upTo, bandAt, band153, band158, axisOn}) => {
	const ax = lead(f, axisOn, 20);
	const shown = PTS.filter((p) => p.h <= upTo);
	const segs: P3[][] = [];
	shown.forEach((p, i) => {
		if (i === 0 || p.h - shown[i - 1].h > 3) segs.push([p]);
		else segs[segs.length - 1].push(p);
	});
	const bk = bandAt === null ? 0 : lead(f, bandAt, 24);
	return (
		<svg style={{position: 'absolute', left: 0, top: 0}} width={1920} height={1080}>
			<g opacity={ax}>
				<line x1={PX0} y1={PY0} x2={PX1} y2={PY0} stroke={colors.sub} strokeWidth={2} />
				<line x1={PX0} y1={PY0} x2={PX0} y2={PY1} stroke={colors.sub} strokeWidth={2} />
				{[110, 120, 130, 140, 150, 160].map((v) => (
					<g key={v}>
						<line x1={PX0} y1={plotY(v)} x2={PX1} y2={plotY(v)} stroke={colors.border} strokeWidth={1} />
						<text x={PX0 - 14} y={plotY(v) + 9} textAnchor="end" fontFamily={mono} fontSize={26} fill={colors.sub}>
							{v}°F
						</text>
					</g>
				))}
				{[
					{h: 0, t: '05 FEB'},
					{h: 24, t: '06 FEB'},
				].map((d) => (
					<g key={d.t}>
						<line x1={plotX(d.h)} y1={PY0} x2={plotX(d.h)} y2={PY0 + 14} stroke={colors.sub} strokeWidth={2} />
						<text x={plotX(d.h) + 8} y={PY0 + 44} fontFamily={mono} fontSize={26} fill={colors.ink}>
							{d.t}
						</text>
					</g>
				))}
			</g>
			{bk > 0 ? (
				<g>
					<rect x={PX0} y={plotY(158)} width={(PX1 - PX0) * bk} height={plotY(153) - plotY(158)} fill={colors.amber} opacity={0.28 + 0.2 * flash(f, bandAt ?? 0, 0)} />
					<text x={1200} y={plotY(153) - 14} textAnchor="end" fontFamily={mono} fontSize={36} fontWeight={700} fill={colors.amber} opacity={bk}>
						<tspan opacity={band153 === null ? 1 : lead(f, band153, 6)}>153</tspan>
						<tspan opacity={band158 === null ? 1 : lead(f, band158, 6)}>–158°F</tspan>
					</text>
				</g>
			) : null}
			{segs.map((sg, i) => (
				<path key={i} d={sg.map((p, k) => `${k ? 'L' : 'M'} ${plotX(p.h).toFixed(1)} ${plotY(p.f).toFixed(1)}`).join(' ')} fill="none" stroke={colors.cyan} strokeWidth={5} />
			))}
			{shown.map((p) => (
				<g key={p.h}>
					<circle cx={plotX(p.h)} cy={plotY(p.f)} r={7} fill={colors.cyan} />
					{p.star ? (
						<text x={plotX(p.h) + 10} y={plotY(p.f) - 12} fontFamily={mono} fontSize={26} fill={colors.ink}>
							*
						</text>
					) : null}
				</g>
			))}
			{shown.length ? (
				<text x={plotX(shown[shown.length - 1].h) + 14} y={plotY(shown[shown.length - 1].f) + 46} fontFamily={mono} fontSize={36} fontWeight={700} fill={colors.cyan}>
					{shown[shown.length - 1].f}°F
				</text>
			) : null}
			<text x={PX0} y={PY0 + 90} fontFamily={mono} fontSize={26} fill={colors.ink} opacity={ax}>
				OCPX80370 · SPSI MEASUREMENTS · NTSB RIR-24-05 TABLE 3 · * A SMALL FIRE UNDER THE CAR (FOOTNOTE)
			</text>
		</svg>
	);
};

/** A vertical event marker on the plot at hour `h`, its label arriving on its word. */
export const PlotEvent: React.FC<{f: number; fps: number; h: number; at: number; label: string; tone: string; y?: number; anchor?: 'start' | 'end'}> = ({f, fps, h, at, label, tone, y = 360, anchor = 'start'}) => {
	const k = lead(f, at, 14);
	if (k <= 0) return null;
	const x = plotX(h);
	return (
		<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: k}}>
			<div style={{position: 'absolute', left: x - 2, top: PY1 - 10, width: 4, height: (PY0 - PY1 + 10) * k, background: tone}} />
			<div
				style={{
					position: 'absolute',
					top: y,
					...(anchor === 'start' ? {left: x + 12} : {right: 1920 - x + 12}),
					fontFamily: mono,
					fontSize: 30,
					fontWeight: 700,
					color: colors.void,
					background: tone,
					padding: '4px 12px',
					whiteSpace: 'nowrap',
					transform: `scale(${bump(f, fps, at + LAND, 0.05).toFixed(4)})`,
					transformOrigin: anchor === 'start' ? '0 50%' : '100% 50%',
				}}
			>
				{label}
			</div>
		</div>
	);
};

/** Vinyl chloride molecules joining into chains (polymerization), heat given off: an ILLUSTRATION. */
export const Chains: React.FC<{f: number; x: number; y: number; joinAt: number; chainAt: number; heatAt: number}> = ({f, x, y, joinAt, chainAt, heatAt}) => {
	const j = lead(f, joinAt, 30);
	const c = lead(f, chainAt, 40);
	const h = lead(f, heatAt, 20);
	const N = 14;
	return (
		<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={1400} height={360}>
			{h > 0 ? <ellipse cx={700} cy={180} rx={700} ry={180} fill={colors.red} opacity={0.12 * h + 0.1 * flash(f, heatAt, 0)} /> : null}
			{Array.from({length: N}, (_, i) => {
				const free = {x: 60 + ((i * 97) % 1280), y: 60 + ((i * 53) % 240)};
				const chained = {x: 120 + i * 85, y: 180 + Math.sin(i * 0.9) * 40};
				const px = free.x + (chained.x - free.x) * j;
				const py = free.y + (chained.y - free.y) * j;
				return (
					<g key={i}>
						{i > 0 && c > 0 ? <line x1={120 + (i - 1) * 85} y1={180 + Math.sin((i - 1) * 0.9) * 40} x2={px} y2={py} stroke={colors.amber} strokeWidth={5} opacity={c} /> : null}
						<circle cx={px} cy={py} r={22} fill={colors.card} stroke={colors.cyan} strokeWidth={4} />
					</g>
				);
			})}
		</svg>
	);
};
