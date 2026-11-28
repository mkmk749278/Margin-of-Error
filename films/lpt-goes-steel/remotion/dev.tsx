import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {CORE_X, Hero3D, WOUND_X} from './coil3d';

// Hero check (dev only): frame 0 the coil, 1 the stacked core, 2 the core peeled and imported, 3 the wound core annealing.
export const HeroCheck: React.FC = () => {
	const f = useCurrentFrame();
	const cams = [
		{pos: [11, 6, 16] as [number, number, number], look: [0, -0.5, 0] as [number, number, number], fov: 34},
		{pos: [CORE_X + 10, 4, 18] as [number, number, number], look: [CORE_X, 0.6, 0] as [number, number, number], fov: 34},
		{pos: [CORE_X + 10, 4, 18] as [number, number, number], look: [CORE_X, 0.6, 0] as [number, number, number], fov: 34},
		{pos: [WOUND_X + 8, 3, 15] as [number, number, number], look: [WOUND_X, -1, 0] as [number, number, number], fov: 34},
	];
	return (
		<AbsoluteFill style={{background: colors.void}}>
			<Hero3D width={1920} height={1080} cam={cams[f]} spin={0.3} glint={f === 0 ? 0.4 : -1} core={f >= 1 ? 1 : 0} flux={f === 1 ? 0.8 : 0} imported={f === 2 ? 0.8 : 0} peel={f === 2 ? 1 : 0} wound={f === 3 ? 1 : 0} anneal={f === 3 ? 0.6 : 0} ghost={f === 0 ? 0.6 : 0} />
		</AbsoluteFill>
	);
};
