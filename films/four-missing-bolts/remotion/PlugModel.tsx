import React from 'react';
import {colors} from '../../../lib/remotion/brand';
import {box, Camera, cylX, extrude, Face, Line, mapFaces, projectPoint, render, rotX, roundedRect, V3} from './engine3d';

// The left mid exit door plug of a 737-9, redrawn by us from NTSB AIR-25-04 Figs 3–6 and the Structures Factual
// (scenes/design-reference.md). Dimensions in inches. x: forward (+), y: up, z: outboard (+); the outer skin is z = 0.
// The plug is 29 × 59 in (C09). 12 stop fittings, 6 per vertical side, sit inboard of 12 stop pads on the fuselage
// frames (C11, C87). 2 upper guide fittings run on rollers; 2 lower hinges carry the pivot (C88). 4 bolts (C12):
// an upper guide track bolt through each upper guide fitting below its roller, and a vertical movement arrestor
// bolt through each lower hinge. Shown as ILLUSTRATION; the lift is exaggerated (NOT TO SCALE).

export const PLUG = {w: 29, h: 59, r: 6, t: 2.6} as const;
/** How far up the stop pins clear the pads, in TRUE inches (C13: "about half an inch"). */
export const CLEAR_TRUE_IN = 0.5;
/** Visual exaggeration of vertical motion so half an inch reads on screen (labelled NOT TO SCALE). */
export const LIFT_EXAG = 6;
/** Stop heights from the bottom edge, numbered 1 (top) to 6 (bottom). */
export const STOP_Y = [54, 45, 36, 27, 18, 9] as const;
const HALF = PLUG.w / 2;
const PIN_H = 1.0;
// pad top sits so the pin's bottom clears it after exactly CLEAR_TRUE_IN × LIFT_EXAG of visual lift
const PAD_TOP = CLEAR_TRUE_IN * LIFT_EXAG - PIN_H / 2;
export const HINGE_AXIS: V3 = [0, 0.6, -2.2];
export const UPPER_GUIDE_Y = 52.5;
export const BOLT_IDS = ['upperFwd', 'upperAft', 'lowerFwd', 'lowerAft'] as const;
export type BoltId = (typeof BOLT_IDS)[number];

export type PlugState = {
	/** visual lift, in exaggerated inches (true inches × LIFT_EXAG) */
	lift: number;
	/** outboard swing about the lower hinge line, radians */
	swing: number;
	/** 0 = removed (slid out and gone), 1 = installed */
	bolts: Record<BoltId, number>;
	/** emphasis 0..1 */
	stopGlow: number;
	boltGlow: number;
	guideGlow: number;
	/** frame, skin and cabin context opacity */
	context: number;
	/** red rings on the empty bolt holes 0..1 */
	emptyHoles: number;
	/** plug face fill alpha (lets the inner structure show) */
	plugAlpha: number;
	/** the stops lit in sequence: how many of the 12 (0..12) */
	stopsLit: number;
	/** all bolts fade together (vanish in place, no slide) */
	boltOpacity?: number;
};

export const defaultState: PlugState = {
	lift: 0,
	swing: 0,
	bolts: {upperFwd: 1, upperAft: 1, lowerFwd: 1, lowerAft: 1},
	stopGlow: 0,
	boltGlow: 0,
	guideGlow: 0,
	context: 1,
	emptyHoles: 0,
	plugAlpha: 1,
	stopsLit: 12,
};

const mix = (a: string, b: string, t: number): string => {
	const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
	const [r1, g1, b1] = p(a);
	const [r2, g2, b2] = p(b);
	const k = Math.max(0, Math.min(1, t));
	const h = (v: number) => Math.round(v).toString(16).padStart(2, '0');
	return `#${h(r1 + (r2 - r1) * k)}${h(g1 + (g2 - g1) * k)}${h(b1 + (b2 - b1) * k)}`;
};

const PLUG_FILL = '#22304a';
const PLUG_EDGE = '#8496b0';
const FRAME_FILL = '#172030';
const FRAME_EDGE = '#4a5a70';
const STOP_FILL = '#16324a';

/** Places a point on the plug (lift, then swing about the hinge line). */
export const plugXf = (s: PlugState) => (p: V3): V3 => rotX([p[0], p[1] + s.lift, p[2]], [HINGE_AXIS[0], HINGE_AXIS[1] + s.lift, HINGE_AXIS[2]], s.swing);

export const buildScene = (s: PlugState): {faces: Face[]; lines: Line[]} => {
	const faces: Face[] = [];
	const lines: Line[] = [];
	const ctx = s.context;
	// --- fixed structure: the two edge frames, sill and header, stop pads, rollers, hinge guide fittings
	if (ctx > 0.01) {
		for (const sx of [-1, 1]) {
			const x0 = sx * (HALF + 2.4);
			const x1 = sx * (HALF + 5.2);
			faces.push(...box([Math.min(x0, x1), -8, -4.5], [Math.max(x0, x1), 67, -0.2], FRAME_FILL, FRAME_EDGE, {opacity: ctx * 0.42}));
			// skin strip beyond the frame
			faces.push({pts: [[sx * (HALF + 0.8), -10, 0.05], [sx * (HALF + 14), -10, 0.05], [sx * (HALF + 14), 69, 0.05], [sx * (HALF + 0.8), 69, 0.05]], fill: '#0f141d', stroke: FRAME_EDGE, opacity: 0.85 * ctx, bias: -40});
			for (let i = 0; i < 6; i++) {
				const y = STOP_Y[i];
				const lit = Math.max(0, Math.min(1, s.stopsLit - i * 2 - (sx > 0 ? 0 : 1)));
				const g = s.stopGlow * lit;
				faces.push(
					...box([Math.min(sx * (HALF + 0.9), sx * (HALF + 2.6)), y - 1.6, -0.9], [Math.max(sx * (HALF + 0.9), sx * (HALF + 2.6)), y + PAD_TOP, 0], mix(STOP_FILL, '#38bdf8', g * 0.55), mix(FRAME_EDGE, '#38bdf8', g), {opacity: ctx, bias: 2}),
				);
			}
			// upper guide roller (on the frame)
			faces.push(...cylX(Math.min(sx * (HALF + 0.3), sx * (HALF + 2.6)), Math.max(sx * (HALF + 0.3), sx * (HALF + 2.6)), UPPER_GUIDE_Y + 4.2, -2.0, 1.0, mix('#1b2a3d', '#38bdf8', s.guideGlow * 0.5), mix(FRAME_EDGE, '#38bdf8', s.guideGlow), 12, {opacity: ctx, bias: 3}));
		}
		faces.push(...box([-HALF - 5.2, -8, -4.5], [HALF + 5.2, -3.4, -0.2], FRAME_FILL, FRAME_EDGE, {opacity: ctx * 0.5}));
		faces.push(...box([-HALF - 5.2, 62.4, -4.5], [HALF + 5.2, 67, -0.2], FRAME_FILL, FRAME_EDGE, {opacity: ctx * 0.5}));
		// lower hinge guide fittings on the sill
		for (const sx of [-1, 1]) {
			const cx = sx * 9;
			faces.push(...box([cx - 1.9, -3.6, -4.2], [cx + 1.9, 1.2, -2.9], '#1b2433', FRAME_EDGE, {opacity: ctx, bias: 2}));
		}
	}
	// --- the plug (moves)
	const P: Face[] = [];
	const outline = (z: number) => roundedRect(0, PLUG.h / 2, PLUG.w, PLUG.h, PLUG.r, z, 6);
	const windowHole = (z: number) => roundedRect(0, 41, 10, 15.5, 4.4, z, 6);
	P.push(...extrude(outline, -PLUG.t, 0, PLUG_FILL, PLUG_EDGE, [windowHole], {opacity: s.plugAlpha, strokeWidth: 1.6}));
	// stiffeners on the inner face
	for (const y of [12, 24, 31]) P.push(...box([-HALF + 2, y - 0.6, -PLUG.t - 1.4], [HALF - 2, y + 0.6, -PLUG.t], '#202b3c', PLUG_EDGE, {opacity: s.plugAlpha}));
	for (const sx of [-1, 1]) P.push(...box([Math.min(sx * (HALF - 3.2), sx * (HALF - 1.6)), 3, -PLUG.t - 1.4], [Math.max(sx * (HALF - 3.2), sx * (HALF - 1.6)), 56, -PLUG.t], '#202b3c', PLUG_EDGE, {opacity: s.plugAlpha}));
	// stop fittings and pins (on the plug): pins bear on the pads' inboard faces
	for (const sx of [-1, 1]) {
		for (let i = 0; i < 6; i++) {
			const y = STOP_Y[i];
			const lit = Math.max(0, Math.min(1, s.stopsLit - i * 2 - (sx > 0 ? 0 : 1)));
			const g = s.stopGlow * lit;
			P.push(...box([Math.min(sx * (HALF - 1.4), sx * (HALF + 0.6)), y - 1.8, -2.6], [Math.max(sx * (HALF - 1.4), sx * (HALF + 0.6)), y + 1.8, -1.0], mix('#203247', '#38bdf8', g * 0.5), mix(PLUG_EDGE, '#38bdf8', g), {bias: 4}));
			P.push(...box([Math.min(sx * (HALF + 0.6), sx * (HALF + 2.2)), y - PIN_H / 2, -1.0], [Math.max(sx * (HALF + 0.6), sx * (HALF + 2.2)), y + PIN_H / 2, -0.9], mix('#2a4560', '#7dd3fc', g), mix(PLUG_EDGE, '#38bdf8', g), {bias: 5}));
		}
		// upper guide fitting with its track
		const gx0 = Math.min(sx * (HALF - 2.2), sx * (HALF + 0.2));
		const gx1 = Math.max(sx * (HALF - 2.2), sx * (HALF + 0.2));
		P.push(...box([gx0, UPPER_GUIDE_Y - 2.4, -3.4], [gx1, UPPER_GUIDE_Y + 5.6, -0.8], mix('#22324a', '#38bdf8', s.guideGlow * 0.4), mix(PLUG_EDGE, '#38bdf8', s.guideGlow), {bias: 4}));
		// lower hinge fitting
		P.push(...box([sx * 9 - 1.4, -0.4, -4.0], [sx * 9 + 1.4, 3.6, -2.6], '#22324a', PLUG_EDGE, {bias: 4}));
	}
	faces.push(...mapFaces(P, plugXf(s)).map((f) => ({...f, opacity: Math.min(f.opacity ?? 1, s.plugAlpha)})));
	// --- bolts (amber), with the plug; removal slides each out along its axis
	const boltFaces: Face[] = [];
	const boltAt = (id: BoltId): {x0: number; x1: number; y: number; z: number; dir: number} => {
		switch (id) {
			case 'upperFwd':
				return {x0: HALF - 3.0, x1: HALF + 1.0, y: UPPER_GUIDE_Y + 1.2, z: -2.1, dir: 1};
			case 'upperAft':
				return {x0: -HALF - 1.0, x1: -HALF + 3.0, y: UPPER_GUIDE_Y + 1.2, z: -2.1, dir: -1};
			case 'lowerFwd':
				return {x0: 9 - 2.6, x1: 9 + 2.6, y: 0.4, z: -3.4, dir: 1};
			case 'lowerAft':
				return {x0: -9 - 2.6, x1: -9 + 2.6, y: 0.4, z: -3.4, dir: -1};
		}
	};
	for (const id of BOLT_IDS) {
		const b = boltAt(id);
		const present = s.bolts[id];
		const bo = s.boltOpacity ?? 1;
		const out = (1 - present) * 9 * b.dir;
		const glowCol = mix('#7a4e08', '#f59e0b', 0.55 + 0.45 * s.boltGlow);
		if (present > 0.02) {
			boltFaces.push(...cylX(b.x0 + out, b.x1 + out, b.y, b.z, 0.42, glowCol, '#fbbf24', 10, {opacity: Math.min(1, present * 1.5) * bo, bias: 8}));
			// castle nut on the outer end
			const nx = b.dir > 0 ? b.x1 + out : b.x0 + out;
			boltFaces.push(...cylX(nx - 0.45, nx + 0.45, b.y, b.z, 0.78, glowCol, '#fbbf24', 6, {opacity: Math.min(1, present * 1.5) * bo, bias: 9}));
		}
		if (s.emptyHoles > 0.01 && (present < 0.5 || bo < 0.5)) {
			// a red ring where the bolt should be
			const ring: V3[] = Array.from({length: 16}, (_, i) => [b.dir > 0 ? b.x1 - 0.6 : b.x0 + 0.6, b.y + 1.1 * Math.cos((i / 16) * 2 * Math.PI), b.z + 1.1 * Math.sin((i / 16) * 2 * Math.PI)] as V3);
			boltFaces.push({pts: ring, fill: 'rgba(239,68,68,0.18)', stroke: '#ef4444', strokeWidth: 2.4, opacity: s.emptyHoles, bias: 12});
		}
	}
	faces.push(...mapFaces(boltFaces, plugXf(s)).map((f) => ({...f, opacity: (f.opacity ?? 1) * Math.min(1, s.plugAlpha * 1.2)})));
	return {faces, lines};
};

/** Named anchor points (for callouts), placed with the plug's motion where they belong to it. */
export const anchor = (s: PlugState, cam: Camera, name: string): {x: number; y: number} => {
	const xf = plugXf(s);
	const pts: Record<string, V3> = {
		upperFwd: xf([HALF + 1.0, UPPER_GUIDE_Y + 1.2, -2.1]),
		upperAft: xf([-HALF - 1.0, UPPER_GUIDE_Y + 1.2, -2.1]),
		lowerFwd: xf([9 + 2.6, 0.4, -3.4]),
		lowerAft: xf([-9 - 2.6, 0.4, -3.4]),
		topCentre: xf([0, PLUG.h, -1]),
		bottomCentre: xf([0, 0, -1]),
		centre: xf([0, PLUG.h / 2, -PLUG.t]),
		stopTopFwd: xf([HALF + 2.2, STOP_Y[0], -1]),
		stopBotFwd: xf([HALF + 2.2, STOP_Y[5], -1]),
		padTopFwd: [HALF + 1.7, STOP_Y[0] + PAD_TOP, -0.5],
		window: xf([0, 41, 0]),
		leftEdgeMid: xf([-HALF, PLUG.h / 2, -1]),
		rightEdgeMid: xf([HALF, PLUG.h / 2, -1]),
		hinge: [0, HINGE_AXIS[1], HINGE_AXIS[2]],
	};
	const p = pts[name];
	if (!p) throw new Error(`plug anchor ${name}`);
	const q = projectPoint(cam, p);
	return {x: q.x, y: q.y};
};

export const PlugSvg: React.FC<{cam: Camera; state: PlugState; w?: number; h?: number; extra?: React.ReactNode}> = ({cam, state, w = 1920, h = 1080, extra}) => {
	const {faces, lines} = buildScene(state);
	const drawn = render(cam, faces, lines);
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: 0, top: 0}}>
			{drawn.map((d) => (
				<path key={d.key} d={d.d} fill={d.fill} fillRule="evenodd" stroke={d.stroke} strokeWidth={d.strokeWidth} strokeDasharray={d.dash} opacity={d.opacity} strokeLinejoin="round" />
			))}
			{extra}
		</svg>
	);
};

export const brandColors = colors;
