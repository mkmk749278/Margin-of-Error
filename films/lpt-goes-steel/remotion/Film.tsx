import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {Desk} from '../../../lib/remotion/Desk';
import {envelope, glide} from '../../../lib/remotion/motion';
import {SfxCue} from '../../../lib/remotion/sfx';
import {mono} from './kit';
import {Outro} from './scenes/outro';
import {act1} from './scenes/act1';
import {act2} from './scenes/act2';
import {act3} from './scenes/act3';
import {act4} from './scenes/act4';
import {act5} from './scenes/act5';
import {SceneDef} from './scenes/types';

import timing from '../vo/timing.json';
import {FILM_FRAMES, s2f} from './timing';

// TRANSFORMER STEEL: the whole film on one clock (vo/timing.json). Each scene mounts on absolute frames; scenes fade
// themselves, and neighbours overlap so a cut is always a dissolve on the desk.

export const scenes: SceneDef[] = [...act1, ...act2, ...act3, ...act4, ...act5];

const chapters = timing.chapters.map((c, i, all) => ({title: c.title, from: s2f(c.start), to: i + 1 < all.length ? s2f(all[i + 1].start) : FILM_FRAMES}));

const ActChip: React.FC = () => {
	const f = useCurrentFrame();
	const c = chapters.find((x) => f >= x.from && f < x.to);
	if (!c) return null;
	// on for five seconds after each act opens, then gone: the act title and YouTube's chapters carry the rest
	const o = envelope(f, c.from + 240, Math.min(c.from + 540, c.to, FILM_FRAMES - 14 * 60), 30, 30) * 0.9;
	const [n, t] = c.title.split(' · ');
	// the chip rides on the newest scene's camera, so the chips a scene sets under it keep their gap (no overlap)
	const live = timed.map((s, i) => ({s, i})).filter(({s}) => f >= s.from && f < s.to);
	const top = live.length ? live[live.length - 1] : null;
	return (
		<AbsoluteFill style={{transform: top ? shotCam(f, top.s, top.i) : undefined, transformOrigin: CAM_ORIGIN}}>
			<div style={{position: 'absolute', left: 96, top: 54, opacity: o, fontFamily: mono, fontSize: 20, letterSpacing: 2.4, color: colors.sub, whiteSpace: 'nowrap'}}>{/* floor-ok: the act chip is navigation, the act title carries it */}
				<span style={{color: colors.amber}}>ACT {n}</span>
				<span style={{marginLeft: 14}}>{t.toUpperCase()}</span>
			</div>
		</AbsoluteFill>
	);
};

const XF = 14;
const timed = [...scenes].sort((a, b) => a.from - b.from).map((s, i, all) => ({...s, to: i + 1 < all.length ? Math.max(s.to, all[i + 1].from + XF) : s.to}));

/** One camera move per shot (owner 19 NOV 2026: no zoom in and out, move like a real camera): a steady lateral track in
 * a direction that turns scene by scene, eased only at its ends, plus a slow circular float, at a fixed 3% overscan so no edge shows (travel stays inside the 29 px margin). */
const shotCam = (f: number, s: {from: number; to: number}, i: number): string => {
	const g = glide(f, s.from, s.to);
	const ang = (i * 2.399963) % (2 * Math.PI);
	const A = 24; // px across the whole shot
	// and a slow circular float (16 px, one turn in 20 s, ~5 px/s): a long shot never holds still, never zooms
	const t = (f - s.from) / 60;
	const ph = (2 * Math.PI * t) / 20 + ang;
	const dx = Math.cos(ang) * A * (g - 0.5) + 16 * Math.cos(ph);
	const dy = Math.sin(ang) * A * 0.45 * (g - 0.5) + 10 * Math.sin(ph);
	return `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(1.03)`;
};
const CAM_ORIGIN = '50% 48%';

const Scenes: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			{timed
				.map((s, i) => ({s, i}))
				.filter(({s}) => f >= s.from && f < s.to)
				.map(({s, i}) => {
					// the film's first frame is already the picture (PLAYBOOK §5.1 picture test): no fade up from black at 0
					const o = Math.min(1, s.from === 0 ? 1 : (f - s.from + 1) / XF, (s.to - f) / XF);
					return (
						<AbsoluteFill key={s.id} style={{opacity: o, transform: shotCam(f, s, i), transformOrigin: CAM_ORIGIN}}>
							<s.C />
						</AbsoluteFill>
					);
				})}
		</>
	);
};

export const LptSteel: React.FC = () => (
	<AbsoluteFill style={{background: colors.void}}>
		<Desk duration={FILM_FRAMES} coords>
			<Scenes />
			<ActChip />
			<Outro />
		</Desk>
	</AbsoluteFill>
);

/** Every hand-placed sound cue of the film, in film frames. */
export const allCues = (): SfxCue[] => scenes.flatMap((s) => s.cues ?? []).filter((c) => c.frame >= 0 && c.frame < FILM_FRAMES).sort((a, b) => a.frame - b.frame);
