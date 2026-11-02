import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {colors} from './brand';
import {fontStacks} from './fonts';
import {tween} from './motion';

// The investigator's desk (owner's spec §4): the cold slate void, a measured coordinate grid at 0.05 opacity, pooled
// light, grain and vignette. Every scene sits on it. The grid drifts with a slow push, so no frame is ever static.

type DeskProps = {
	/** Grid pitch in px at scale 1. Major lines every 5 cells. */
	pitch?: number;
	/** Frames over which the grid drifts (usually the scene length). */
	duration?: number;
	/** Show coordinate labels along the top and left edges. */
	coords?: boolean;
	children?: React.ReactNode;
};

export const Desk: React.FC<DeskProps> = ({pitch = 48, duration = 600, coords = true, children}) => {
	const frame = useCurrentFrame();
	const drift = tween(frame, 0, duration, 0, pitch * 0.6);
	const major = pitch * 5;
	const line = (a: number) => `rgba(226,232,240,${a})`; // colors.grid at the spec's opacities
	return (
		<AbsoluteFill style={{background: colors.void, overflow: 'hidden'}}>
			<AbsoluteFill
				style={{
					background: `radial-gradient(ellipse 70% 60% at 50% 45%, ${colors.card} 0%, ${colors.void} 70%)`,
				}}
			/>
			<AbsoluteFill
				style={{
					backgroundImage: [
						`linear-gradient(${line(0.05)} 1px, transparent 1px)`,
						`linear-gradient(90deg, ${line(0.05)} 1px, transparent 1px)`,
						`linear-gradient(${line(0.035)} 1px, transparent 1px)`,
						`linear-gradient(90deg, ${line(0.035)} 1px, transparent 1px)`,
					].join(','),
					backgroundSize: `${major}px ${major}px, ${major}px ${major}px, ${pitch}px ${pitch}px, ${pitch}px ${pitch}px`,
					backgroundPosition: `${-drift}px ${-drift * 0.5}px`,
				}}
			/>
			{coords ? <Coords pitch={major} drift={drift} /> : null}
			{children}
			<Atmosphere />
		</AbsoluteFill>
	);
};

/** Coordinate anchors along the top and left edges: every schematic sits on a measured grid. */
const Coords: React.FC<{pitch: number; drift: number}> = ({pitch, drift}) => {
	const xs = Array.from({length: Math.ceil(1920 / pitch) + 1}, (_, i) => i);
	const ys = Array.from({length: Math.ceil(1080 / pitch) + 1}, (_, i) => i);
	const style: React.CSSProperties = {position: 'absolute', fontFamily: fontStacks.mono, fontSize: 11, letterSpacing: 1.5, color: colors.muted, opacity: 0.55};
	return (
		<>
			{xs.map((i) => (
				<div key={`x${i}`} style={{...style, top: 14, left: i * pitch - drift + 6}}>
					{String(i * 100).padStart(4, '0')}
				</div>
			))}
			{ys.map((i) => (
				<div key={`y${i}`} style={{...style, left: 14, top: i * pitch - drift * 0.5 + 6}}>
					{String(i * 100).padStart(4, '0')}
				</div>
			))}
		</>
	);
};

export const Grain: React.FC<{opacity?: number}> = ({opacity = 0.06}) => {
	const frame = useCurrentFrame();
	const seed = frame % 8; // eight film-grain plates, cycled: deterministic, never Math.random
	return (
		<AbsoluteFill style={{pointerEvents: 'none', opacity, mixBlendMode: 'overlay'}}>
			<svg width="100%" height="100%">
				<filter id={`grain${seed}`}>
					<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={seed} stitchTiles="stitch" />
					<feColorMatrix type="saturate" values="0" />
				</filter>
				<rect width="100%" height="100%" filter={`url(#grain${seed})`} />
			</svg>
		</AbsoluteFill>
	);
};

export const Vignette: React.FC<{strength?: number}> = ({strength = 0.5}) => (
	<AbsoluteFill
		style={{pointerEvents: 'none', background: `radial-gradient(ellipse 78% 72% at 50% 50%, transparent 55%, rgba(0,0,0,${strength}) 100%)`}}
	/>
);

export const Atmosphere: React.FC<{grain?: number; vignette?: number}> = ({grain = 0.06, vignette = 0.5}) => (
	<>
		<Vignette strength={vignette} />
		<Grain opacity={grain} />
	</>
);
