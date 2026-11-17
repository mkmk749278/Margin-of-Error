import React from 'react';
import {OffthreadVideo, Sequence, useVideoConfig} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {lead} from '../../../lib/remotion/Kinetic';
import {media, mono, sans} from './kit';
import timing from '../vo/timing.json';
import words from './data/clip_words.json';
import {Chip, T} from './parts';

// The sworn witnesses in their own voices (PLAYBOOK §10.4, owner 16 NOV 2026): the official U.S. Coast Guard hearing
// video, picture unaltered, the sound laid in by the mix from the same trimmed range. On-screen captions are the
// official transcript (CG 112) verbatim, revealed word by word on the clip's own measured words (faster-whisper,
// remotion/data/clip_words.json), mapped in order onto the transcript's words.

type ClipEntry = (typeof timing.clips)[number];
type W = {w: string; t0: number; t1: number};
const WORDS = words as Record<string, W[]>;

/** The transcript page (as printed) each clip's words sit on. */
export const CLIP_PAGE: Record<string, number> = {
	h_brooks_flashlight: 766,
	h_brooks_decision: 766,
	h_brooks_diveagain: 765,
	h_brooks_linearity: 768,
	h_kramer_time: 953,
	h_brooks_cost: 769,
	h_brooks_safety: 779,
};

export const clipOf = (id: string): ClipEntry => {
	const c = timing.clips.find((x) => x.clip === id);
	if (!c) throw new Error(`no clip ${id}`);
	return c;
};

/** Film frame each transcript word is spoken: the clip's measured words, spread in order over the transcript's. */
const captionTimes = (c: ClipEntry, fps: number): {line: string[]; at: number[]}[] => {
	const ws = WORDS[c.clip] ?? [];
	const lines = c.caption.map((l) => l.split(/\s+/).filter(Boolean));
	const total = lines.reduce((a, l) => a + l.length, 0);
	let k = 0;
	return lines.map((l) => {
		const at = l.map(() => {
			const j = ws.length ? Math.min(ws.length - 1, Math.floor((k * ws.length) / Math.max(1, total))) : 0;
			k += 1;
			const t = ws.length ? ws[j].t0 : 0;
			return c.startFrame + Math.round(t * fps);
		});
		return {line: l, at};
	});
};

/**
 * A hearing clip on the desk: the video in a plate (left), the witness's lower third and the transcript caption on the
 * right. The clip's picture runs from the gap before it to the gap after it (render media: 0.4 s either side).
 */
/** `picture` replaces the video with what the witness is describing (his voice still plays in the mix), for a clip
 * whose own frames would show something else (Kramer: the hearing screen showed the depth slide, forensic 1.1). */
export const HearingClip: React.FC<{f: number; id: string; picture?: React.ReactNode; credit?: string}> = ({f, id, picture, credit}) => {
	const {fps} = useVideoConfig();
	const c = clipOf(id);
	// the panel lives exactly as long as the clip's picture: no empty video box either side
	const from = c.gapStartFrame;
	const to = c.gapEndFrame - 2;
	const o = Math.min(lead(f, from + 10, 10), 1 - lead(f, to, 10));
	if (o <= 0) return null;
	const caps = captionTimes(c, fps);
	const V = {x: 96, y: 120, w: 1120, h: 630};
	const lt = c.lower_third;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: V.x, top: V.y, width: V.w, height: V.h, overflow: 'hidden', background: colors.void, border: `1px solid ${colors.border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
				{picture ?? (
					<Sequence from={c.gapStartFrame} durationInFrames={c.gapEndFrame - c.gapStartFrame + 2} layout="none">
					<OffthreadVideo src={media(`footage/${c.clip}.mp4`)} muted style={{width: V.w, height: V.h}} />
					</Sequence>
				)}
			</div>
			<div style={{position: 'absolute', left: V.x, top: V.y + V.h, width: V.w, height: 58, background: colors.card, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', padding: '0 16px', ...T(26, {color: colors.ink}), whiteSpace: 'nowrap', overflow: 'hidden'}}>
				{credit ?? c.credit.replace('U.S. COAST GUARD · MARINE BOARD OF INVESTIGATION HEARING', 'USCG MARINE BOARD HEARING')} · PUBLIC DOMAIN
			</div>
			{/* lower third */}
			<div style={{position: 'absolute', left: V.x + V.w + 32, top: V.y, width: 1824 - (V.x + V.w + 32)}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 44, letterSpacing: 2, color: colors.ink}}>{lt.name}</div>
				<div style={{marginTop: 8, ...T(26, {color: colors.amber, lineHeight: 1.35})}}>{lt.role}</div>
				<div style={{marginTop: 8, ...T(26, {color: colors.ink})}}>{lt.when}</div>
				<div style={{marginTop: 22}}>
					<Chip text="OWN VOICE · HEARING VIDEO" tone={colors.cyan} size={26} />
				</div>
			</div>
			{/* the transcript caption, word by word as said */}
			<div style={{position: 'absolute', left: V.x, top: V.y + V.h + 78, width: 1824 - V.x, minHeight: 150, background: 'rgba(10,13,18,0.92)', border: `1px solid ${colors.border}`, padding: '16px 24px 40px'}}>
				{caps.map(({line, at}, i) => (
					<div key={i} style={{fontFamily: sans, fontWeight: 600, fontSize: 36, lineHeight: 1.3, color: colors.ink}}>
						{line.map((w, j) => (
							<span key={j} style={{opacity: f >= at[j] - 4 ? 1 : 0.18, color: /^(Q\.|A\.)$/.test(w) ? colors.amber : colors.ink}}>
								{w}{' '}
							</span>
						))}
					</div>
				))}
				<div style={{position: 'absolute', right: 20, bottom: 8, ...T(26, {color: colors.ink})}}>CAPTION: OFFICIAL TRANSCRIPT · CG 112 P. {CLIP_PAGE[c.clip]}</div>
			</div>
		</div>
	);
};

export {mono};
