import React from 'react';
import {AbsoluteFill, Freeze, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CalculateMetadataFunction} from 'remotion';
import {colors, fonts} from './brand';

// A vertical Short cut from an approved film (PLAYBOOK §13.5): the film's own picture and mix, untouched, in the
// middle; the hook above it; the measured words as captions below it. Everything sits clear of the Shorts UI
// (the bottom ~420 px and the right ~140 px carry the title, the related-video link and the buttons).

export type ShortWord = {w: string; s: number; t0: number; t1: number; acr?: boolean};
export type ShortProps = {
	id: string;
	clip: string;
	duration: number;
	chip: string;
	hook: string[][]; // each line: [text] or [text, 'amber' | 'red' | 'cyan']
	words: ShortWord[];
	sentences: string[];
	coverLine?: string[]; // [text] or [text, colour]: the punch line under the picture on the cover frames only
	cover: number; // seconds into the clip: the exhibit held on frame 0, the Short's cover
};

export const SHORT_W = 1080;
export const SHORT_H = 1920;
const PIC_Y = 700;
const PIC_H = (SHORT_W * 1080) / 1920; // 607.5
const CAP_Y = 1350;
const COVER = 18; // frames 0-17 (0.3 s, before the first word) hold the cover exhibit
const TAIL = 66; // 1.1 s after the clip: its last frame held, sound out, the end card up

export const calcShortMetadata: CalculateMetadataFunction<ShortProps> = ({props}) => ({
	durationInFrames: Math.round(props.duration * 60) + TAIL,
	fps: 60,
	width: SHORT_W,
	height: SHORT_H,
});

const tone = (c?: string): string => (c === 'amber' ? colors.amber : c === 'red' ? colors.red : c === 'cyan' ? colors.cyan : colors.ink);

type Chunk = {words: ShortWord[]; t0: number; t1: number};

/** Group the measured words into caption chunks: never across a sentence, at most 3 words or 18 letters. */
const chunk = (words: ShortWord[]): Chunk[] => {
	const out: Chunk[] = [];
	let cur: ShortWord[] = [];
	const flush = () => {
		if (cur.length) out.push({words: cur, t0: cur[0].t0, t1: cur[cur.length - 1].t1});
		cur = [];
	};
	for (const w of words) {
		const len = cur.reduce((n, x) => n + x.w.length + 1, 0) + w.w.length;
		if (cur.length && (cur[0].s !== w.s || cur.length >= 3 || len > 18)) flush();
		cur.push(w);
	}
	flush();
	return out;
};

const Grid: React.FC = () => (
	<svg width={SHORT_W} height={SHORT_H} style={{position: 'absolute', inset: 0}}>
		{Array.from({length: 28}, (_, i) => (
			<line key={`h${i}`} x1={0} x2={SHORT_W} y1={i * 72} y2={i * 72} stroke={colors.grid} strokeOpacity={0.05} />
		))}
		{Array.from({length: 16}, (_, i) => (
			<line key={`v${i}`} y1={0} y2={SHORT_H} x1={i * 72} x2={i * 72} stroke={colors.grid} strokeOpacity={0.05} />
		))}
	</svg>
);

export const Short: React.FC<ShortProps> = ({clip, chip, hook, words: rawWords, cover, coverLine}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const t = frame / fps;
	// the aligner splits a spelled acronym ("N - T - S - B") into letters: join them back for the captions
	const words = React.useMemo(() => {
		const out: ShortWord[] = [];
		for (const w of rawWords) {
			const prev = out[out.length - 1];
			if (prev && prev.acr && /^[A-Z]$/.test(w.w) && prev.s === w.s && w.t0 - prev.t1 < 0.4) {
				out[out.length - 1] = {...prev, w: prev.w + w.w, t1: w.t1};
			} else out.push({...w, acr: /^[A-Z]$/.test(w.w) && w.w !== 'I'});
		}
		return out;
	}, [rawWords]);
	const chunks = React.useMemo(() => chunk(words), [words]);
	// one size for every hook line, fitted to the longest (Inter 700 caps run about 0.66 em a letter)
	const longest = Math.max(...hook.map(([text]) => text.length));
	const hookSize = Math.min(112, Math.floor(860 / (longest * 0.66)));

	// the active chunk: from its first word until the next chunk starts (held at most 0.5 s after its last word)
	const idx = chunks.findIndex((c, i) => t >= c.t0 - 0.05 && t < (chunks[i + 1]?.t0 ?? Infinity) - 0.05 && t <= c.t1 + 0.5);
	const active = idx >= 0 ? chunks[idx] : null;
	const pop = active ? spring({frame: frame - Math.round((active.t0 - 0.05) * fps), fps, config: {damping: 18, stiffness: 260, mass: 0.6}}) : 0;

	const clipFrames = durationInFrames - TAIL;
	const lastWordEnd = Math.round((words[words.length - 1]?.t1 ?? 0) * fps);
	const endAt = Math.max(lastWordEnd + 6, clipFrames - 30);
	const picIn = 1;
	const endFade = interpolate(frame, [durationInFrames - 8, durationInFrames - 1], [1, 0.4], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	// a slow push on the picture so the frame never sits still between the film's own cuts
	const push = interpolate(frame, [0, durationInFrames], [1.0, 1.035]);

	return (
		<AbsoluteFill style={{backgroundColor: colors.void}}>
			<Grid />
			{/* chip */}
			<div
				style={{
					position: 'absolute',
					left: 72,
					top: 150,
					display: 'flex',
					alignItems: 'center',
					gap: 16,
					fontFamily: fonts.mono,
					fontWeight: 500,
					fontSize: 30,
					letterSpacing: 1,
					color: colors.sub,
					opacity: 1,
				}}
			>
				<div style={{width: 8, height: 34, backgroundColor: colors.cyan}} />
				{chip}
			</div>
			{/* hook */}
			<div style={{position: 'absolute', left: 72, right: 140, top: 214}}>
				{hook.map(([text, c], i) => {
					const s = 1; // the cover: every line is up on frame 0
					return (
						<div
							key={i}
							style={{
								fontFamily: fonts.display,
								fontWeight: 700,
								fontSize: hookSize,
								lineHeight: 1.0,
								letterSpacing: -1,
								textTransform: 'uppercase',
								color: tone(c),
								opacity: s,
								transform: `translateY(${(1 - s) * 30}px)`,
								textShadow: '0 4px 24px rgba(0,0,0,0.6)',
							}}
						>
							{text}
						</div>
					);
				})}
			</div>
			{/* the film's own picture and sound */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: PIC_Y,
					width: SHORT_W,
					height: PIC_H,
					overflow: 'hidden',
					borderTop: `1px solid ${colors.border}`,
					borderBottom: `1px solid ${colors.border}`,
					opacity: picIn * endFade,
				}}
			>
				<Sequence durationInFrames={clipFrames} layout="none">
					<OffthreadVideo
						src={staticFile(clip)}
						volume={(f) => interpolate(f, [clipFrames - 18, clipFrames - 1], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
						style={{position: 'absolute', left: 0, top: 0, width: SHORT_W, height: PIC_H, transform: `scale(${push})`, transformOrigin: '50% 50%'}}
					/>
				</Sequence>
				{frame < COVER ? (
					<Freeze frame={Math.round(cover * fps)}>
						<OffthreadVideo src={staticFile(clip)} muted style={{position: 'absolute', left: 0, top: 0, width: SHORT_W, height: PIC_H}} />
					</Freeze>
				) : null}
				{frame >= clipFrames ? (
					<Freeze frame={clipFrames - 2}>
						<OffthreadVideo
							src={staticFile(clip)}
							muted
							style={{width: SHORT_W, height: PIC_H, transform: `scale(${push})`, transformOrigin: '50% 50%'}}
						/>
					</Freeze>
				) : null}
			</div>
			{/* captions: the measured words */}
			{active && frame >= COVER && frame < endAt ? (
				<div
					style={{
						position: 'absolute',
						left: 60,
						right: 140,
						top: CAP_Y,
						textAlign: 'center',
						fontFamily: fonts.display,
						fontWeight: 700,
						fontSize: 76,
						lineHeight: 1.08,
						textTransform: 'uppercase',
						transform: `scale(${0.92 + 0.08 * pop})`,
					}}
				>
					{active.words.map((w, i) => {
						const on = t >= w.t0 - 0.05;
						return (
							<span key={i} style={{color: on ? (t <= w.t1 + 0.08 ? colors.amber : colors.ink) : 'rgba(229,231,235,0.35)', marginRight: 20}}>
								{w.w}
							</span>
						);
					})}
				</div>
			) : null}
			{frame < COVER && coverLine ? (
				<div
					style={{
						position: 'absolute',
						left: 60,
						right: 140,
						top: CAP_Y,
						textAlign: 'center',
						fontFamily: fonts.display,
						fontWeight: 700,
						fontSize: 76,
						lineHeight: 1.08,
						textTransform: 'uppercase',
						color: tone(coverLine[1]),
					}}
				>
					{coverLine[0]}
				</div>
			) : null}
			{/* the last 1.2 s: where the rest of the case is */}
			{frame >= endAt ? (
				<div
					style={{
						position: 'absolute',
						left: 60,
						right: 140,
						top: CAP_Y + 6,
						textAlign: 'center',
						fontFamily: fonts.mono,
						fontWeight: 700,
						fontSize: 40,
						letterSpacing: 2,
						color: colors.cyan,
						opacity: interpolate(frame, [endAt, endAt + 10], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
					}}
				>
					FULL INVESTIGATION · LINKED BELOW
				</div>
			) : null}
		</AbsoluteFill>
	);
};
