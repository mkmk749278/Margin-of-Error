import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {Desk} from '../../../lib/remotion/Desk';
import {envelope} from '../../../lib/remotion/motion';
import {mono} from './kit';
import {act1, PendingExhibit} from './scenes/act1';
import {act2} from './scenes/act2';
import {act3} from './scenes/act3';
import {act4} from './scenes/act4';
import {act5} from './scenes/act5';
import {SceneDef} from './scenes/types';
import timing from '../vo/timing.json';
import {FILM_FRAMES, s2f, sf} from './timing';

// THE FOUR MISSING BOLTS: the whole film on one clock (vo/timing.json). Each scene is a Sequence on absolute
// frames; scenes fade themselves, and neighbours overlap so a cut is always a dissolve on the desk.

export const scenes: SceneDef[] = [...act1, ...act2, ...act3, ...act4, ...act5];

const chapters = timing.chapters.map((c, i, all) => ({title: c.title, from: s2f(c.start), to: i + 1 < all.length ? s2f(all[i + 1].start) : FILM_FRAMES}));

const ActChip: React.FC = () => {
	const f = useCurrentFrame();
	const c = chapters.find((x) => f >= x.from && f < x.to);
	if (!c) return null;
	const o = envelope(f, c.from + 120, Math.min(c.to, FILM_FRAMES - 14 * 60), 30, 30) * 0.9;
	const [n, t] = c.title.split(' · ');
	return (
		<div style={{position: 'absolute', left: 72, top: 40, opacity: o, fontFamily: mono, fontSize: 14, letterSpacing: 3.2, color: colors.muted, whiteSpace: 'nowrap'}}>
			<span style={{color: colors.amber}}>ACT {n}</span>
			<span style={{marginLeft: 14}}>{t.toUpperCase()}</span>
		</div>
	);
};

// Scenes mount on absolute frames (no Sequence offset), so every component, ours or the shared library's, reads the
// film's own clock from useCurrentFrame().
const Scenes: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			{scenes
				.map((s, i) => ({s, i}))
				.filter(({s}) => f >= s.from && f < s.to)
				.map(({s, i}) => {
					// the camera never stops: a slow push (1.000 → 1.035) and a drift whose direction turns scene by scene
					const p = Math.min(1, Math.max(0, (f - s.from) / Math.max(1, s.to - s.from)));
					const e = p * p * (3 - 2 * p);
					const ang = (i * 2.399963) % (2 * Math.PI);
					const k = 1 + 0.035 * e;
					const t = (f - s.from) / 60;
					// plus a slow, time-based drift (a few px a second, whatever the scene's length)
					const dx = Math.cos(ang) * 16 * (e - 0.5) + 11 * Math.sin((2 * Math.PI * t) / 11 + i);
					const dy = Math.sin(ang) * 10 * (e - 0.5) + 7 * Math.sin((2 * Math.PI * t) / 14 + 2 * i);
					return (
						<AbsoluteFill key={s.id} style={{transform: `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${k.toFixed(5)})`, transformOrigin: '50% 48%'}}>
							<s.C />
						</AbsoluteFill>
					);
				})}
		</>
	);
};

export const FourMissingBolts: React.FC = () => (
	<AbsoluteFill style={{background: colors.void}}>
		<Desk duration={FILM_FRAMES} coords>
			<Scenes />
			<PendingExhibit start={sf(23)} end={sf(81)} small />
			<ActChip />
		</Desk>
	</AbsoluteFill>
);

export const allCues = () => scenes.flatMap((s) => s.cues ?? []).sort((a, b) => a.frame - b.frame);
