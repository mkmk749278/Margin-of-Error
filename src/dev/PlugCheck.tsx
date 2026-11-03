import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk} from '../../lib/remotion/Desk';
import {defaultState, PlugSvg} from '../../films/four-missing-bolts/remotion/PlugModel';

// Dev only: the plug model at a few camera angles and states (frames 0, 1, 2, 3).
export const PlugCheck: React.FC = () => {
	const f = useCurrentFrame();
	const cams = [
		{target: [0, 29, -2] as [number, number, number], yaw: 0.0, pitch: 0.05, dist: 150, focal: 1400, cx: 960, cy: 540},
		{target: [0, 29, -2] as [number, number, number], yaw: 0.55, pitch: 0.22, dist: 140, focal: 1400, cx: 960, cy: 540},
		{target: [0, 29, -2] as [number, number, number], yaw: 1.2, pitch: 0.1, dist: 120, focal: 1400, cx: 960, cy: 540},
		{target: [0, 29, -2] as [number, number, number], yaw: 0.8, pitch: 0.25, dist: 140, focal: 1400, cx: 960, cy: 540},
	];
	const states = [
		{...defaultState, stopGlow: 1, boltGlow: 1},
		{...defaultState, stopGlow: 0.6, boltGlow: 1},
		{...defaultState, lift: 3, bolts: {upperFwd: 0, upperAft: 0, lowerFwd: 0, lowerAft: 0}, emptyHoles: 1},
		{...defaultState, lift: 3.2, swing: 0.26, bolts: {upperFwd: 0, upperAft: 0, lowerFwd: 0, lowerAft: 0}},
	];
	return (
		<Desk duration={10}>
			<PlugSvg cam={cams[f % 4]} state={states[f % 4]} />
		</Desk>
	);
};
