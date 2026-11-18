import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../../lib/remotion/brand';
import {Hull3D, HullCam, lerpCam} from '../../films/titan/remotion/hull3d';

// Dev only: the Titan hull from the opening's camera keys (frames 0, 60, 120, 180, 240).
const KEYS: HullCam[] = [
	{pos: [14, 5.5, 13], look: [0, 0, 1], fov: 30},
	{pos: [6, 7.5, 9], look: [0, 1.5, 3.5], fov: 32},
	{pos: [0, 9, 11], look: [0, 1.8, 4.1], fov: 28},
	{pos: [-15, 4, -6], look: [0, -0.5, 0], fov: 30},
	{pos: [3, 2.2, 16], look: [0, 0.4, 4], fov: 34},
];
export const HullCheck: React.FC = () => {
	const f = useCurrentFrame();
	const k = Math.min(KEYS.length - 2, Math.floor(f / 60));
	const t = interpolate(f - k * 60, [0, 60], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const cam = lerpCam(KEYS[k], KEYS[k + 1], t);
	const cut = interpolate(f, [60, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<AbsoluteFill style={{background: colors.void}}>
			<Hull3D width={1920} height={1080} cam={cam} cut={cut} g4={f > 90 ? 1 : 0} sensors={f > 150 ? 1 : 0.2} interfaces={cut} aeDark={[1, 0, 1, 0, 1, 0, 0, 0]} />
		</AbsoluteFill>
	);
};
