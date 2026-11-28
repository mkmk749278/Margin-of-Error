import React from 'react';
import {interpolate} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {Cam, COIL, Hero3D, HeroProps, project, Vec3} from '../coil3d';
import {clamp, T} from '../parts';

// A shot on the 3D heroes: the canvas full frame, faded in and out on its own span, 2D overlays above it.

export const HeroShot: React.FC<{f: number; start: number; end: number; cam: Cam; props?: Omit<HeroProps, 'width' | 'height' | 'cam'>; children?: React.ReactNode}> = ({f, start, end, cam, props = {}, children}) => {
	const o = Math.min(start === 0 ? 1 : lead(f, start, 14), 1 - interpolate(f, [end - 14, end], [0, 1], clamp));
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<Hero3D width={1920} height={1080} cam={cam} {...props} />
			{children}
		</div>
	);
};

export const P = (p: Vec3, cam: Cam): {x: number; y: number} => project(p, cam, 1920, 1080);

/** A dimension line across the coil's width at height `y` (scene units), drawn from the centre out on `k` (0..1). */
export const Caliper: React.FC<{cam: Cam; k: number; halfW: number; y?: number; tone: string; label?: React.ReactNode; labelAbove?: boolean; z?: number; o?: number}> = ({cam, k, halfW, y = COIL.ro + 0.9, tone, label, labelAbove = true, z = 0, o = 1}) => {
	if (k <= 0 || o <= 0) return null;
	const a = P([-halfW * k, y, z], cam);
	const b = P([halfW * k, y, z], cam);
	const a0 = P([-halfW, y - 0.7, z], cam);
	const b0 = P([halfW, y - 0.7, z], cam);
	const mid = {x: (a.x + b.x) / 2, y: (a.y + b.y) / 2};
	const ends = k >= 0.98;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, opacity: o}}>
			<line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={tone} strokeWidth={4} />
			{ends ? (
				<>
					<line x1={a.x} y1={a.y - 18} x2={a0.x} y2={a0.y + 6} stroke={tone} strokeWidth={3} />
					<line x1={b.x} y1={b.y - 18} x2={b0.x} y2={b0.y + 6} stroke={tone} strokeWidth={3} />
				</>
			) : null}
			{label ? (
				<foreignObject x={mid.x - 400} y={labelAbove ? mid.y - 96 : mid.y + 14} width={800} height={90}>
					<div style={{display: 'flex', justifyContent: 'center', ...T(44, {color: tone, fontWeight: 700})}}>{label}</div>
				</foreignObject>
			) : null}
		</svg>
	);
};

/** A loupe: a magnified circle at a point, showing the 920 edge and the >932 line beyond it (not to scale outside). */
export const Loupe: React.FC<{x: number; y: number; k: number; o?: number}> = ({x, y, k, o = 1}) => {
	if (k <= 0) return null;
	const R = 150 * k;
	return (
		<div style={{position: 'absolute', left: x - R, top: y - R, width: 2 * R, height: 2 * R, borderRadius: R, overflow: 'hidden', border: `3px solid ${colors.ink}`, background: 'radial-gradient(circle at 40% 40%, #9aa6b2, #4b5563)', opacity: o, boxShadow: '0 20px 60px rgba(0,0,0,0.6)'}}>
			{/* the coil's edge: steel on the left, air on the right */}
			<div style={{position: 'absolute', left: 0, top: 0, width: R * 0.95, height: 2 * R, background: 'repeating-linear-gradient(0deg, #8f9aa6 0px, #8f9aa6 5px, #6b7684 5px, #6b7684 7px)'}} />
			<div style={{position: 'absolute', left: R * 0.95, top: 0, width: 2 * R, height: 2 * R, background: colors.void}} />
			<div style={{position: 'absolute', left: R * 0.95 - 2, top: R * 0.55, width: 4, height: R * 0.9, background: colors.cyan}} />
			<div style={{position: 'absolute', left: R * 0.95 + R * 0.55, top: R * 0.55, width: 4, height: R * 0.9, background: colors.amber}} />
			<div style={{position: 'absolute', left: R * 0.95, top: R * 0.98, width: R * 0.55, height: 3, background: colors.amber}} />
			<div style={{position: 'absolute', left: R * 0.3, top: R * 1.5, ...T(26, {color: colors.amber, fontWeight: 700})}}>12+ MM</div>
		</div>
	);
};
