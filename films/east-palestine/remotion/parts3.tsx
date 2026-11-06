import React from 'react';
import {Img, OffthreadVideo, Sequence, useVideoConfig} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {media} from './kit';
import {mono, sans} from './parts';
import caps from './data/clip_captions.json';

// Act III–V parts: the hearing clips, the verdict card, year bars.

type Cue = {speaker: string; text: string; start: number; end: number};
type ClipKey = 'clip1' | 'clip2';

/**
 * A real NTSB hearing excerpt (PLAYBOOK §9.5): picture unaltered, the live-caption band (y > 860 of 1080) cropped by
 * the frame, our captions from the official transcript, timed on the clip's audio (scripts/clip_align.py). The
 * clip's sound is laid in by the mix (scripts/mix_film.py), so the video plays muted here.
 */
export const HearingClip: React.FC<{f: number; clip: ClipKey; file: string; start: number; end: number; tag: string; role: string}> = ({f, clip, file, start, end, tag, role}) => {
	const {fps} = useVideoConfig();
	const c = caps.clips[clip] as {dur: number; cues: Cue[]};
	const o = Math.min(lead(f, start + 12, 12), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const t = (f - start) / fps;
	const cue = c.cues.find((q) => t >= q.start - 0.05 && t <= q.end + 0.6);
	const prev = [...c.cues].reverse().find((q) => q.end < t);
	const W = 1600;
	const H = Math.round((W * 860) / 1920);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: 160, top: 90, width: W, height: H, overflow: 'hidden', background: colors.void, border: `1px solid ${colors.border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
				<Sequence from={start} durationInFrames={Math.round(c.dur * fps) + 2} layout="none">
					<OffthreadVideo src={media(`excerpts/${file}`)} muted style={{position: 'absolute', left: 0, top: 0, width: W, height: (W * 1080) / 1920}} />
				</Sequence>
			</div>
			<div style={{position: 'absolute', left: 160, top: 90 + H, width: W, height: 58, background: colors.card, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', gap: 16, padding: '0 16px', fontFamily: mono, fontSize: 26, color: colors.ink, whiteSpace: 'nowrap'}}>
				<span style={{color: colors.amber, fontWeight: 700}}>{tag}</span>
				<span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{role}</span>
			</div>
			<div style={{position: 'absolute', left: 160, top: 90 + H + 78, width: W, minHeight: 150, background: 'rgba(10,13,18,0.92)', border: `1px solid ${colors.border}`, padding: '14px 24px'}}>
				{prev && (!cue || cue !== prev) ? <div style={{fontFamily: sans, fontWeight: 600, fontSize: 30, color: colors.sub, lineHeight: 1.25}}>{prev.text}</div> : null}
				{cue ? (
					<div style={{fontFamily: sans, fontWeight: 600, fontSize: 40, color: colors.ink, lineHeight: 1.25}}>
						<span style={{fontFamily: mono, fontSize: 26, color: colors.amber, marginRight: 16}}>{cue.speaker}</span>
						{cue.text}
					</div>
				) : null}
				<div style={{position: 'absolute', right: 20, bottom: 10, fontFamily: mono, fontSize: 26, color: colors.sub}}>CAPTIONS: OFFICIAL TRANSCRIPT</div>
			</div>
		</div>
	);
};

/**
 * The verdict card (one component for all five): a belief in quotes arrives word by word, then the verdict stamps on
 * its word, with the record that decides it. Verdicts state only what the record holds.
 */
export const VerdictCard: React.FC<{
	f: number;
	fps: number;
	n: number;
	quote: [string, number][];
	verdict: string;
	verdictAt: number;
	record: string;
	recordAt: number;
	start: number;
	end: number;
	headAt?: number;
	head?: string;
	head2?: string;
	head2At?: number;
}> = ({f, fps, n, quote, verdict, verdictAt, record, recordAt, start, end, headAt, head = 'IN MANY COMMENT SECTIONS', head2, head2At}) => {
	const o = Math.min(lead(f, start + 10, 12), 1 - lead(f, end, 16));
	if (o <= 0) return null;
	const k = lead(f, verdictAt, 8);
	const s = 1.5 - 0.5 * k;
	return (
		<div style={{position: 'absolute', left: 210, top: 200, width: 1500, height: 660, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 40px 90px rgba(0,0,0,0.55)'}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: colors.amber}} />
			<div style={{position: 'absolute', left: 60, top: 44, fontFamily: mono, fontSize: 30, color: colors.amber, letterSpacing: 3}}>VERDICT {n} OF 5</div>
			<div style={{position: 'absolute', left: 60, top: 96, fontFamily: mono, fontSize: 30, color: colors.ink, opacity: lead(f, headAt ?? start + 10, 10)}}>
				{head}
				{head2 ? <span style={{opacity: lead(f, head2At ?? start + 10, 8)}}> {head2}</span> : null}
			</div>
			<div style={{position: 'absolute', left: 60, top: 170, width: 1380, fontFamily: sans, fontWeight: 700, fontSize: 76, lineHeight: 1.12, color: colors.ink}}>
				{quote.map(([w, at], i) => (
					<span key={i} style={{opacity: lead(f, at, 8)}}>
						{i === 0 ? '“' : ''}
						{w}
						{i === quote.length - 1 ? '”' : ' '}
					</span>
				))}
			</div>
			{k > 0 ? (
				<div
					style={{
						position: 'absolute',
						left: 60,
						top: 430,
						opacity: Math.min(1, k * 1.5),
						transform: `rotate(-3deg) scale(${(s * bump(f, fps, verdictAt + LAND, 0.04)).toFixed(4)})`,
						transformOrigin: '0 50%',
						fontFamily: mono,
						fontWeight: 700,
						fontSize: 64,
						letterSpacing: 4,
						color: colors.ink,
						border: `5px solid ${colors.ink}`,
						padding: '8px 26px',
						boxShadow: `0 0 ${(30 * flash(f, verdictAt, 0)).toFixed(1)}px ${colors.ink}`,
					}}
				>
					{verdict}
				</div>
			) : null}
			<div style={{position: 'absolute', left: 60, bottom: 36, fontFamily: mono, fontSize: 30, color: colors.ink, opacity: lead(f, recordAt, 10)}}>{record}</div>
		</div>
	);
};

/** Year bars that rise on their words (a filing's numbers, one bar each), with a total that lands on its word. */
export const YearBars: React.FC<{f: number; x: number; y: number; h: number; bars: {label: string; value: number; at: number}[]; max: number; tone: string; fmt: (v: number) => string}> = ({f, x, y, h, bars, max, tone, fmt}) => (
	<div style={{position: 'absolute', left: x, top: y, height: h, display: 'flex', alignItems: 'flex-end', gap: 30}}>
		{bars.map((b) => {
			const k = lead(f, b.at, 16);
			return (
				<div key={b.label} style={{width: 150, textAlign: 'center', opacity: Math.min(1, k * 2)}}>
					<div style={{fontFamily: mono, fontWeight: 700, fontSize: 36, color: colors.ink, marginBottom: 8}}>{fmt(b.value * k)}</div>
					<div style={{height: (b.value / max) * (h - 120) * k, background: tone, opacity: 0.85}} />
					<div style={{fontFamily: mono, fontSize: 30, color: colors.ink, marginTop: 10}}>{b.label}</div>
				</div>
			);
		})}
	</div>
);

/**
 * Real federal footage or a real federal photograph of the event (PLAYBOOK §9.5): unaltered (crop and slow push
 * only), credited on a strip with its own date, never relabelled as a moment it does not show. `push` is the slow
 * camera move (scale from 1 to 1 + push over the span) toward `focus` (0–1 of the frame).
 */
export const RealFootage: React.FC<{
	f: number;
	start: number;
	end: number;
	src: string;
	video?: boolean;
	from?: number;
	date: string;
	what: string;
	source: string;
	push?: number;
	focus?: [number, number];
	box?: {x: number; y: number; w: number; h: number};
}> = ({f, start, end, src, video = false, from = 0, date, what, source, push = 0.08, focus = [0.5, 0.5], box = {x: 0, y: 0, w: 1920, h: 1080}}) => {
	const {fps} = useVideoConfig();
	const o = Math.min(lead(f, start, 12), 1 - lead(f, end - 14, 14));
	if (o <= 0) return null;
	const k = Math.min(1, Math.max(0, (f - start) / Math.max(1, end - start)));
	const s = 1 + push * (k * k * (3 - 2 * k));
	const STRIP_H = 58;
	const media_ = video ? (
		<Sequence from={start} durationInFrames={end - start + 2} layout="none">
			<OffthreadVideo src={media(src)} muted startFrom={Math.round(from * fps)} style={{width: box.w, height: box.h, objectFit: 'cover'}} />
		</Sequence>
	) : (
		<Img src={media(src)} style={{width: box.w, height: box.h, objectFit: 'cover'}} />
	);
	return (
		<div style={{position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, overflow: 'hidden', opacity: o, background: colors.void}}>
			<div style={{position: 'absolute', inset: 0, transform: `scale(${s.toFixed(4)})`, transformOrigin: `${(focus[0] * 100).toFixed(1)}% ${(focus[1] * 100).toFixed(1)}%`}}>{media_}</div>
			<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 220, background: 'linear-gradient(to top, rgba(10,13,18,0.92), rgba(10,13,18,0))'}} />
			<div style={{position: 'absolute', left: Math.min(96, box.w * 0.05), right: Math.min(96, box.w * 0.05), bottom: Math.min(54, box.h * 0.05), height: STRIP_H, display: 'flex', alignItems: 'center', gap: 16, fontFamily: mono, fontSize: 26, letterSpacing: 1.5, color: colors.ink, whiteSpace: 'nowrap'}}>
				<span style={{color: colors.amber, fontWeight: 700}}>{date}</span>
				<span>· {what}</span>
				<span style={{marginLeft: 'auto', color: colors.ink, opacity: 0.85}}>{source}</span>
			</div>
		</div>
	);
};
