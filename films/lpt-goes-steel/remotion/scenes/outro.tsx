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
		<>
		<div style={{position: 'absolute', inset: 0, opacity: o, background: 'radial-gradient(ellipse 62% 48% at 50% 46%, rgba(10,13,18,0.92) 0%, rgba(10,13,18,0.84) 45%, rgba(10,13,18,0.4) 100%)'}} />
		<div style={{position: 'absolute', left: 0, right: 0, top: 430, textAlign: 'center', opacity: o}}>
			<div style={{fontFamily: sans, fontWeight: 700, fontSize: 72, letterSpacing: 14, color: colors.ink, marginRight: -14}}>MARGIN OF ERROR</div>
			<div style={{...T(30, {color: colors.ink, letterSpacing: 4}), marginTop: 18}}>WHERE ACCOUNTING MEETS THE LAWS OF PHYSICS</div>
		</div>
		{/* footage credits (r03): every CC BY / CC BY-SA clip by name and licence, the federal ones as public domain */}
		<div style={{position: 'absolute', left: 80, right: 80, top: 660, textAlign: 'center', opacity: o, ...T(26, {color: colors.ink, lineHeight: 1.55})}}>
			{CREDITS.map((c) => (
				<div key={c}>{c}</div>
			))}
		</div>
		</>
	);
};

export const CREDITS = [
	'FOOTAGE · PUBLIC DOMAIN: BONNEVILLE POWER ADMINISTRATION · USACE AND US ARMY VIA DVIDS',
	'CC BY 3.0: JASON LEE DAVIS · SAXT PRODUCTIONS · SALZBURG AG · SOUNDS OF CHANGES',
	'CC BY-SA 4.0: GEORG FUCHS, MIKERUN · CC BY 2.0: FERNANDO MOITAL · FULL LIST IN THE DESCRIPTION',
];
