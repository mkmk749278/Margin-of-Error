import React from 'react';
import {interpolate} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {ease, tween} from '../../../lib/remotion/motion';
import {clamp, T} from './parts';
import data from './data/replot.json';

// THE RE-PLOT (signature 2): the NTSB's own plotted points (Materials Laboratory 24-012, figs. 29–31, read from the
// PDF's vector paths), moved — never redrawn — from strain in recorded order to strain against depth.
// `m` 0 → 1 morphs the axes; `z` 0 → 1 zooms from the whole dive (0–4,000 m) to the first 1,000 m (fig. 31).

type Pt = [number, number];
const FULL = data.full as unknown as Record<string, Pt[]>;
const F31 = data.fig31 as unknown as Record<string, {descent: Pt[]; ascent: Pt[]}>;

export const DIVE_TONE: Record<string, string> = {'75': colors.cyan, '80': '#7dd3fc', '81': colors.amber, '82': '#fb923c', '83': colors.red};

export type ReplotProps = {
	/** 0: each dive in its own panel, strain in recorded order; 1: all dives, strain (x) against depth (y) */
	m: number;
	/** 0: whole dive; 1: first 1,000 m, fig. 31 descent points */
	z: number;
	/** per-dive visibility 0..1 */
	show: Record<string, number>;
	/** per-dive emphasis 0..1 (thicker, brighter) */
	hi: Record<string, number>;
	/** shallow band 0–500 m, 0..1 */
	band?: number;
	/** fit band 15–150 m and fitted lines, 0..1 */
	fit?: number;
	/** deep-end emphasis (the curves still match at depth), 0..1 */
	deep?: number;
	/** the dive-80 event marker (end of dive 80), 0..1 */
	event?: number;
	box: {x: number; y: number; w: number; h: number};
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** NTSB slopes (C41), m of depth per mV, fitted 15–150 m on the descent. */
export const SLOPES: Record<string, number> = {'75': 5.0, '80': 4.74, '81': 8.76, '82': 8.09, '83': 8.77};

export const Replot: React.FC<ReplotProps> = ({m, z, show, hi, band = 0, fit = 0, deep = 0, event = 0, box}) => {
	const L = 110;
	const B = 70;
	const pw = box.w - L - 30;
	const ph = box.h - B - 30;
	// axis ranges ease from the whole dive to the first 1,000 m
	const mv0 = 2400;
	const mv1 = lerp(3200, 2700, z);
	const d1 = lerp(4000, 1000, z);
	const X = (mv: number) => L + ((mv - mv0) / (mv1 - mv0)) * pw;
	const Y = (d: number) => 30 + ph - (d / d1) * ph;
	// time mode: three panels side by side (75 · 80 · 81), strain up the y axis
	const order = ['75', '80', '81'];
	const panelW = pw / 3;
	const tX = (k: number, i: number, n: number) => L + k * panelW + 10 + (i / Math.max(1, n - 1)) * (panelW - 20);
	const tY = (mv: number) => 30 + ph - ((mv - 2400) / 800) * ph;
	const dots: React.ReactNode[] = [];
	// whole-dive series (morphing), fading out as the zoom takes over
	const fullO = 1 - z;
	if (fullO > 0.01) {
		order.forEach((d, k) => {
			const o = (show[d] ?? 0) * fullO;
			if (o <= 0.01) return;
			const pts = FULL[d];
			const n = pts.length;
			const r = 2.2 + 1.6 * (hi[d] ?? 0);
			for (let i = 0; i < n; i += 2) {
				const [mv, dep] = pts[i];
				const x = lerp(tX(k, i, n), X(mv), m);
				const y = lerp(tY(mv), Y(dep), m);
				if (x < L - 4 || y > 30 + ph + 4) continue;
				dots.push(<circle key={`f${d}-${i}`} cx={x} cy={y} r={r} fill={DIVE_TONE[d]} opacity={o * (0.55 + 0.45 * (hi[d] ?? 0))} />);
			}
		});
	}
	// fig. 31 descent points (the first 1,000 m), arriving with the zoom
	if (z > 0.01) {
		['75', '80', '81', '82', '83'].forEach((d) => {
			const o = (show[d] ?? 0) * z;
			if (o <= 0.01) return;
			const r = 2.4 + 1.8 * (hi[d] ?? 0);
			F31[d].descent.forEach(([mv, dep], i) => {
				const x = X(mv);
				const y = Y(dep);
				if (x < L - 4 || x > L + pw + 4 || y < 26) return;
				dots.push(<circle key={`z${d}-${i}`} cx={x} cy={y} r={r} fill={DIVE_TONE[d]} opacity={o * (0.5 + 0.5 * (hi[d] ?? 0))} />);
			});
		});
	}
	const ticksX = z < 0.5 ? [2400, 2600, 2800, 3000, 3200] : [2400, 2500, 2600, 2700];
	const ticksY = z < 0.5 ? [0, 1000, 2000, 3000, 4000] : [0, 250, 500, 750, 1000];
	const axisO = m;
	// fitted lines (15–150 m) with the NTSB slopes, anchored at each dive's own 15–150 m points
	const fits = ['75', '80', '81', '82', '83'].map((d) => {
		const pts = F31[d].descent.filter(([, dep]) => dep >= 15 && dep <= 150);
		if (!pts.length) return null;
		const mx = pts.reduce((a, p) => a + p[0], 0) / pts.length;
		const my = pts.reduce((a, p) => a + p[1], 0) / pts.length;
		const s = SLOPES[d];
		const a = [mx + (0 - my) / s, 0] as Pt;
		const b = [mx + (300 - my) / s, 300] as Pt;
		return {d, a, b};
	});
	return (
		<svg width={box.w} height={box.h} style={{position: 'absolute', left: box.x, top: box.y, overflow: 'visible'}}>
			{/* panels of the time view */}
			{order.map((d, k) => (
				<g key={`p${d}`} opacity={(1 - m) * (show[d] ?? 0)}>
					<rect x={L + k * panelW + 4} y={30} width={panelW - 8} height={ph} fill="none" stroke={colors.border} strokeWidth={1.5} />
					<text x={L + k * panelW + 18} y={62} style={T(28, {fill: DIVE_TONE[d], fontWeight: 700})}>DIVE {d}</text>
				</g>
			))}
			<g opacity={1 - m}>
				<text x={L + pw / 2} y={30 + ph + 52} textAnchor="middle" style={T(30, {fill: colors.amber, letterSpacing: 4, fontWeight: 700})}>
					STRAIN, POINT BY POINT, AS RECORDED THROUGH EACH DIVE
				</text>
			</g>
			{/* depth-view grid and axes */}
			<g opacity={axisO}>
				{ticksY.map((d) => (
					<g key={`y${d}`}>
						<line x1={L} x2={L + pw} y1={Y(d)} y2={Y(d)} stroke={colors.border} strokeWidth={1} />
						<text x={L - 12} y={Y(d) + 9} textAnchor="end" style={T(26, {fill: colors.ink})}>{d.toLocaleString('en-US')}</text>
					</g>
				))}
				{ticksX.map((mv) => (
					<g key={`x${mv}`}>
						<line x1={X(mv)} x2={X(mv)} y1={30} y2={30 + ph} stroke={colors.border} strokeWidth={1} />
						<text x={X(mv)} y={30 + ph + 34} textAnchor="middle" style={T(26, {fill: colors.ink})}>{mv}</text>
					</g>
				))}
				<text x={L - 86} y={30 + ph / 2} transform={`rotate(-90 ${L - 86} ${30 + ph / 2})`} textAnchor="middle" style={T(28, {fill: colors.cyan, letterSpacing: 4, fontWeight: 700})}>
					DEPTH · M
				</text>
				<text x={L + pw / 2} y={30 + ph + 66} textAnchor="middle" style={T(26, {fill: colors.ink, letterSpacing: 2})}>
					STRAIN · GAUGE GROUP 4, HOOP · mV
				</text>
			</g>
			{/* the shallow band: the first 500 m */}
			{band > 0 ? <rect x={L} y={Y(500)} width={pw} height={Y(0) - Y(500)} fill={colors.amber} opacity={0.1 * band} /> : null}
			{band > 0 ? (
				<text x={L + pw - 12} y={Y(500) - 12} textAnchor="end" style={T(28, {fill: colors.amber, fontWeight: 700})} opacity={band}>
					FIRST 500 M
				</text>
			) : null}
			{/* the fit band: 15–150 m */}
			{fit > 0 ? <rect x={L} y={Y(150)} width={pw} height={Y(15) - Y(150)} fill={colors.cyan} opacity={0.12 * fit} /> : null}
			{dots}
			{fit > 0
				? fits.map((ft) =>
						ft && (show[ft.d] ?? 0) > 0.5 ? (
							<line
								key={`fit${ft.d}`}
								x1={X(ft.a[0])}
								y1={Y(ft.a[1])}
								x2={lerp(X(ft.a[0]), X(ft.b[0]), fit)}
								y2={lerp(Y(ft.a[1]), Y(ft.b[1]), fit)}
								stroke={DIVE_TONE[ft.d]}
								strokeWidth={4}
								opacity={0.95}
							/>
						) : null,
					)
				: null}
			{deep > 0 ? <rect x={L} y={30} width={pw} height={Y(3000) - 30} fill="none" stroke={colors.cyan} strokeWidth={3} opacity={deep} strokeDasharray="10 8" /> : null}
			{event > 0 && z < 0.5 ? <circle cx={X(FULL['80'][FULL['80'].length - 2][0])} cy={Y(FULL['80'][FULL['80'].length - 2][1])} r={16 * event} fill="none" stroke={colors.red} strokeWidth={4} opacity={event} /> : null}
		</svg>
	);
};

/** A smoothed 0→1 between two frames (the camera's ease). */
export const ramp = (f: number, a: number, b: number): number => tween(f, a, b, 0, 1, ease.camera);
export const fade = (f: number, a: number, b: number): number => interpolate(f, [a, b], [0, 1], clamp);
