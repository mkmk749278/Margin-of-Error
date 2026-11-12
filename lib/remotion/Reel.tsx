import React from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import type {CalculateMetadataFunction} from 'remotion';
import {colors, fonts} from './brand';

// A vertical Instagram reel with its own narration over a film's own picture (owner, 12 NOV 2026). The picture is
// the approved master's segments, butted on the reel's timeline (public/reel/*_pic.mp4), each one cropped to the
// readout or the document line the narration points to, with a push that runs the length of the segment. Above it,
// a ledger of the reel's two numbers that fills in on their words; below it, the measured words as captions.
// Everything sits clear of the Instagram UI (top ~160 px, bottom ~420 px, right ~140 px in the lower half).

export type ReelWord = {w: string; s: number; t0: number; t1: number};
export type ReelSegment = {t: number; t1: number; c0: number[]; c1: number[]; label: string; image?: string | null};
export type ReelProps = {
	duration: number;
	pic: string;
	mix: string;
	segments: ReelSegment[];
	words: ReelWord[];
	sentences: string[];
	voEnd: number;
	myths?: MythsConfig; // ReelMyths only; without it, the first reel's East Palestine set
};

/** a cue: the first word in sentence `s` matching the regex source `w` */
export type Cue = {s: number; w: string};
export type MythsConfig = {
	cover: [string, string]; // the case the viewer types, and its date line
	headers: {at: Cue | null; text: string}[]; // the label over the cards, changing on its cue
	cards: {text: string; at: Cue; tone?: 'ink' | 'amber' | 'red' | 'sub'}[];
	cols?: number; // 1 (stacked) or 2 (a 2x2 grid)
	stamp?: {at: Cue; lines: string[]} | null; // stamped on every card in turn from its cue
	listOut: Cue; // the cards leave
	cta: Cue; // FULL INVESTIGATION ON YOUTUBE comes up
};

export const REEL_W = 1080;
export const REEL_H = 1920;
const PIC_Y = 540;
const PIC_H = 820;
const CAP_Y = 1392;
const SRC_W = 1920; // crops are in the master's 1920x1080 space
const SRC_H = 1080;

export const calcReelMetadata: CalculateMetadataFunction<ReelProps> = ({props}) => ({
	durationInFrames: Math.round(props.duration * 60),
	fps: 60,
	width: REEL_W,
	height: REEL_H,
});

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** the time of the first word matching `re` in sentence `s` (the cue for a ledger change) */
export const cueOf = (words: ReelWord[], s: number, re: RegExp, which: 't0' | 't1' = 't0'): number => {
	const w = words.find((x) => x.s === s && re.test(x.w));
	return w ? w[which] : Infinity;
};

export type Chunk = {words: ReelWord[]; t0: number; t1: number};

/** caption chunks: never across a sentence, at most 3 words or 18 letters */
export const chunk = (words: ReelWord[]): Chunk[] => {
	const out: Chunk[] = [];
	let cur: ReelWord[] = [];
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

export const Grid: React.FC = () => (
	<svg width={REEL_W} height={REEL_H} style={{position: 'absolute', inset: 0}}>
		{Array.from({length: 28}, (_, i) => (
			<line key={`h${i}`} x1={0} x2={REEL_W} y1={i * 72} y2={i * 72} stroke={colors.grid} strokeOpacity={0.05} />
		))}
		{Array.from({length: 16}, (_, i) => (
			<line key={`v${i}`} y1={0} y2={REEL_H} x1={i * 72} x2={i * 72} stroke={colors.grid} strokeOpacity={0.05} />
		))}
	</svg>
);

/** the crop at time t inside a segment, eased, kept inside the source frame */
export const cropAt = (seg: ReelSegment, t: number): {x: number; y: number; w: number} => {
	const p = interpolate(t, [seg.t, seg.t1], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
	const w = seg.c0[2] + (seg.c1[2] - seg.c0[2]) * p;
	const h = (w * PIC_H) / REEL_W;
	const x = Math.min(Math.max(0, seg.c0[0] + (seg.c1[0] - seg.c0[0]) * p), SRC_W - w);
	const y = Math.min(Math.max(0, seg.c0[1] + (seg.c1[1] - seg.c0[1]) * p), Math.max(0, SRC_H - h));
	return {x, y, w};
};

const LedgerCard: React.FC<{
	left: number;
	title: string;
	value: string;
	valueOn: number; // 0..1, the value landing
	tag: string;
	tagOn: number;
	tone: string;
}> = ({left, title, value, valueOn, tag, tagOn, tone}) => (
	<div
		style={{
			position: 'absolute',
			left,
			top: 312,
			width: 468,
			height: 196,
			backgroundColor: colors.card,
			border: `1px solid ${colors.border}`,
			borderLeft: `6px solid ${valueOn > 0.01 ? tone : colors.border}`,
			padding: '18px 26px',
			boxSizing: 'border-box',
		}}
	>
		<div style={{fontFamily: fonts.mono, fontWeight: 500, fontSize: 27, letterSpacing: 1, color: colors.sub, whiteSpace: 'nowrap'}}>{title}</div>
		<div
			style={{
				fontFamily: fonts.mono,
				fontWeight: 700,
				fontSize: value.length > 6 ? 60 : 76,
				lineHeight: 1.1,
				height: 84,
				whiteSpace: 'nowrap',
				marginTop: 6,
				color: valueOn > 0.01 ? tone : colors.sub,
				transform: `translateY(${(1 - valueOn) * 12}px)`,
			}}
		>
			{value}
		</div>
		<div style={{fontFamily: fonts.mono, fontWeight: 700, fontSize: 27, letterSpacing: 1, marginTop: 4, color: tone, opacity: tagOn}}>{tag}</div>
	</div>
);

export const Reel: React.FC<ReelProps> = ({pic, mix, segments, words, voEnd}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const chunks = React.useMemo(() => chunk(words), [words]);

	// the ledger's cues, on the measured words
	const n1 = cueOf(words, 2, /^170/); // "The first: one hundred and seventy"
	const n1End = cueOf(words, 2, /^170/, 't1');
	const bill = cueOf(words, 7, /^billing/);
	const n2 = cueOf(words, 10, /^number/);
	const n2Val = cueOf(words, 11, /^reached/);
	const notFound = cueOf(words, 14, /^find/);
	const roll = interpolate(t, [n1 - 0.25, n1End], [0, 170], clamp); // the number rolls and lands as it is said
	const pop = (at: number) => spring({frame: frame - Math.round(at * fps), fps, config: {damping: 16, stiffness: 220, mass: 0.6}});
	const v1On = t >= n1 - 0.25 ? 1 : 0;
	const v2On = t >= n2Val - 0.25 ? pop(n2Val - 0.25) : 0;
	const v2Ask = t >= n2 - 0.25 ? pop(n2 - 0.25) : 0;

	// the active caption: from its first word until the next chunk starts (held at most 0.5 s after its last word)
	const idx = chunks.findIndex((c, i) => t >= c.t0 - 0.05 && t < (chunks[i + 1]?.t0 ?? Infinity) - 0.05 && t <= c.t1 + 0.5);
	const active = idx >= 0 ? chunks[idx] : null;
	const capPop = active ? spring({frame: frame - Math.round((active.t0 - 0.05) * fps), fps, config: {damping: 18, stiffness: 260, mass: 0.6}}) : 0;

	const seg = segments.find((s) => t >= s.t && t < s.t1) ?? segments[segments.length - 1];
	const segIn = interpolate(t, [seg.t, seg.t + 0.12], [0.55, 1], clamp); // a short dip on each cut, never black
	const c = cropAt(seg, t);
	const k = REEL_W / c.w;
	const ctaAt = voEnd + 0.1;
	const ctaOn = interpolate(t, [ctaAt, ctaAt + 0.25], [0, 1], clamp);
	const honesty = /RECONSTRUCTION|ILLUSTRATION/.test(seg.label);

	return (
		<AbsoluteFill style={{backgroundColor: colors.void}}>
			<Grid />
			<Audio src={staticFile(mix)} />
			{/* chip */}
			<div style={{position: 'absolute', left: 48, top: 170, display: 'flex', alignItems: 'center', gap: 16, fontFamily: fonts.mono, fontWeight: 500, fontSize: 30, letterSpacing: 1, color: colors.sub}}>
				<div style={{width: 8, height: 34, backgroundColor: colors.cyan}} />
				EAST PALESTINE, OHIO · NTSB RIR-24-05
			</div>
			<div style={{position: 'absolute', left: 48, top: 224, fontFamily: fonts.display, fontWeight: 700, fontSize: 64, letterSpacing: 1, color: colors.ink, textTransform: 'uppercase'}}>
				Two numbers
			</div>
			{/* the ledger: the two numbers fill in on their words */}
			<LedgerCard
				left={48}
				title="NUMBER 1 · CREW LINE"
				value={v1On ? `${Math.round(roll)}°F` : '???'}
				valueOn={v1On}
				tag={t >= bill - 0.15 ? 'MATCHES A BILLING RULE' : 'ABOVE THE AIR'}
				tagOn={t >= bill - 0.15 ? pop(bill - 0.15) : v1On ? interpolate(t, [n1End, n1End + 0.3], [0, 1], clamp) : 0}
				tone={colors.amber}
			/>
			<LedgerCard
				left={564}
				title="NUMBER 2 · +3 DAYS"
				value={v2On > 0 ? '153–158°F' : '???'}
				valueOn={v2On > 0 ? v2On : 0}
				tag={t >= notFound - 0.15 ? 'NOT IN THE GUIDANCE' : 'A TANK CAR TEMPERATURE'}
				tagOn={t >= notFound - 0.15 ? pop(notFound - 0.15) : v2Ask}
				tone={t >= notFound - 0.15 ? colors.red : colors.amber}
			/>
			{/* the film's own picture, cropped to what the words point to */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: PIC_Y,
					width: REEL_W,
					height: PIC_H,
					overflow: 'hidden',
					borderTop: `1px solid ${colors.border}`,
					borderBottom: `1px solid ${colors.border}`,
					backgroundColor: colors.void,
				}}
			>
				<Sequence durationInFrames={Math.round(segments[segments.length - 1].t * fps)} layout="none">
					<OffthreadVideo
						src={staticFile(pic)}
						muted
						style={{
							position: 'absolute',
							left: 0,
							top: 0,
							width: SRC_W * k,
							height: SRC_H * k,
							transform: `translate(${-c.x * k}px, ${-c.y * k}px)`,
							transformOrigin: '0 0',
							opacity: segIn,
						}}
					/>
				</Sequence>
				{seg.image ? (
					<Img
						src={staticFile(seg.image)}
						style={{
							position: 'absolute',
							left: 0,
							top: (PIC_H - (REEL_W * 1080) / 1920) / 2,
							width: REEL_W,
							height: (REEL_W * 1080) / 1920,
							transform: `scale(${interpolate(t, [seg.t, seg.t1], [1.0, 1.08], clamp)})`,
							opacity: interpolate(t, [seg.t, seg.t + 0.3], [0, 1], clamp),
						}}
					/>
				) : null}
				{seg.label ? (
					<div
						style={{
							position: 'absolute',
							left: 24,
							bottom: 22,
							padding: '6px 14px',
							fontFamily: fonts.mono,
							fontWeight: 700,
							fontSize: 36,
							color: honesty ? colors.amber : colors.ink,
							backgroundColor: 'rgba(10,13,18,0.86)',
							border: `1px solid ${honesty ? colors.amber : colors.border}`,
						}}
					>
						{seg.label}
					</div>
				) : null}
			</div>
			{/* captions: the measured words */}
			{active && t < ctaAt ? (
				<div
					style={{
						position: 'absolute',
						left: 48,
						right: 48,
						top: CAP_Y,
						textAlign: 'center',
						fontFamily: fonts.display,
						fontWeight: 700,
						fontSize: 72,
						lineHeight: 1.08,
						textTransform: 'uppercase',
						transform: `scale(${0.92 + 0.08 * capPop})`,
					}}
				>
					{active.words.map((w, i) => {
						const on = t >= w.t0 - 0.05;
						return (
							<span key={i} style={{color: on ? (t <= w.t1 + 0.08 ? colors.amber : colors.ink) : 'rgba(229,231,235,0.35)', marginRight: 18}}>
								{w.w}
							</span>
						);
					})}
				</div>
			) : null}
			{/* after the last word: where the rest of the case is */}
			{t >= ctaAt ? (
				<div style={{position: 'absolute', left: 48, right: 48, top: CAP_Y - 6, textAlign: 'center', opacity: ctaOn}}>
					<div style={{fontFamily: fonts.mono, fontWeight: 700, fontSize: 40, letterSpacing: 2, color: colors.cyan}}>FULL INVESTIGATION ON YOUTUBE</div>
					<div style={{fontFamily: fonts.display, fontWeight: 700, fontSize: 64, marginTop: 8, color: colors.ink, textTransform: 'uppercase', letterSpacing: 1}}>Margin of Error</div>
				</div>
			) : null}
		</AbsoluteFill>
	);
};
