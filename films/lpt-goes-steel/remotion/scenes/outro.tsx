import React from 'react';
import {useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {envelope} from '../../../../lib/remotion/motion';
import {sans, T} from '../parts';
import {FILM_FRAMES} from '../timing';

// The channel name, once, in the outro only (CLAUDE.md format): over the last scene's picture, after the last word.
export const Outro: React.FC = () => {
	const f = useCurrentFrame();
	const from = FILM_FRAMES - 400;
	const o = envelope(f, from, FILM_FRAMES, 30, 40);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: 0, right: 0, top: 430, textAlign: 'center', opacity: o}}>
			<div style={{fontFamily: sans, fontWeight: 700, fontSize: 72, letterSpacing: 14, color: colors.ink, marginRight: -14}}>MARGIN OF ERROR</div>
			<div style={{...T(30, {color: colors.sub, letterSpacing: 4}), marginTop: 18}}>WHERE ACCOUNTING MEETS THE LAWS OF PHYSICS</div>
		</div>
	);
};
