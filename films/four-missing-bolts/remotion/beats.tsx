import React from 'react';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {fontStacks} from '../../../lib/remotion/fonts';

// Shared word-level beats for the film (PLAYBOOK §10.6), on measured word frames from timing.ts wf().

/** Text that takes the light on its word: `sub` before, `tone` after, with a glow that guides the eye. */
export const litStyle = (f: number, on: number, tone: string = colors.ink): React.CSSProperties => ({
	color: f >= on ? tone : colors.sub,
	textShadow: `0 0 ${(18 * flash(f, on, 0)).toFixed(1)}px ${tone}`,
});

/** A word or figure that arrives on its own syllable: rises 12 px and fades in, completing on the word, then bumps. */
export const Arrive: React.FC<{f: number; fps: number; on: number; children: React.ReactNode; style?: React.CSSProperties; dur?: number}> = ({f, fps, on, children, style, dur = 8}) => {
	const k = lead(f, on, dur);
	return <span style={{display: 'inline-block', opacity: k, transform: `translateY(${((1 - k) * 12).toFixed(2)}px) scale(${bump(f, fps, on + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 70%', ...style}}>{children}</span>;
};

/** A line built word by word: each [text, frame] arrives on its frame; the layout never reflows (unspoken words hold their space). */
export const WordLine: React.FC<{f: number; fps: number; words: [string, number][]; style?: React.CSSProperties; tone?: (i: number) => string | undefined}> = ({f, fps, words, style, tone}) => (
	<span style={style}>
		{words.map(([t, at], i) => (
			<Arrive key={i} f={f} fps={fps} on={at} style={{marginRight: i < words.length - 1 ? '0.3em' : 0, color: tone?.(i)}}>
				{t}
			</Arrive>
		))}
	</span>
);

/** Opacity that arrives on a word (fade completes on the word). */
export const on = (f: number, w: number, dur = 10): number => lead(f, w, dur);

export type Part = {t: string; at: number; tone?: string; br?: boolean; big?: boolean; join?: boolean};

/**
 * A key-phrase line on a card: each part arrives and takes the light on its own spoken word (parts keep their space,
 * so the line never reflows). `br` starts a new line. Facts only from the narration and claims.csv.
 */
export const KeyLine: React.FC<{f: number; fps: number; parts: Part[]; start: number; end: number; x: number; y: number; size?: number; w?: number; card?: boolean; align?: 'left' | 'center'}> = ({
	f,
	fps,
	parts,
	start,
	end,
	x,
	y,
	size = 28,
	w,
	card = true,
	align = 'left',
}) => {
	const o = Math.min(lead(f, start + 10, 10), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	return (
		<div
			style={{
				position: 'absolute',
				left: x,
				top: y,
				width: w,
				maxWidth: 1824 - x,
				opacity: o,
				fontFamily: fontStacks.mono,
				fontSize: size,
				letterSpacing: 1.2,
				lineHeight: 1.45,
				textAlign: align,
				background: card ? colors.card : undefined,
				border: card ? `1px solid ${colors.border}` : undefined,
				padding: card ? '10px 18px 8px' : 0,
				whiteSpace: 'normal',
			}}
		>
			{parts.map((p, i) => (
				<React.Fragment key={i}>
					{p.br ? <br /> : null}
					<span style={{opacity: lead(f, p.at, 8), fontWeight: p.big ? 700 : 400, fontSize: p.big ? size * 1.5 : size, display: 'inline-block', whiteSpace: 'nowrap', marginRight: i < parts.length - 1 && !parts[i + 1].br && !p.join ? '0.6em' : 0, transform: `scale(${bump(f, fps, p.at + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 70%', ...litStyle(f, p.at, p.tone ?? colors.ink)}}>
						{p.t}
					</span>
				</React.Fragment>
			))}
		</div>
	);
};

/** A real quote on a card, revealed chunk by chunk as the narration reaches each part; attribution on its words. */
export const ChunkQuote: React.FC<{f: number; fps: number; chunks: [string, number][]; who: string; whoAt: number; where: string; whereAt: number; start: number; end: number; x: number; y: number; w: number; size?: number}> = ({
	f,
	fps,
	chunks,
	who,
	whoAt,
	where,
	whereAt,
	start,
	end,
	x,
	y,
	w,
	size = 40,
}) => {
	const o = Math.min(lead(f, start + 12, 12), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '30px 36px 24px'}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: colors.amber, transform: `scaleY(${lead(f, whoAt, 14).toFixed(3)})`, transformOrigin: '50% 0'}} />
			<div style={{fontFamily: fontStacks.display, fontWeight: 600, fontSize: size, lineHeight: 1.25, color: colors.ink}}>
				{chunks.map(([t, at], i) => (
					<span key={i} style={{opacity: lead(f, at, 10)}}>
						{i === 0 ? '“' : ''}
						{t}
						{i === chunks.length - 1 ? '”' : ' '}
					</span>
				))}
			</div>
			<div style={{marginTop: 18, fontFamily: fontStacks.mono, fontSize: 26, letterSpacing: 1.2}}>
				<span style={{opacity: lead(f, whoAt, 10), ...litStyle(f, whoAt, colors.amber), display: 'inline-block', transform: `scale(${bump(f, fps, whoAt + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 50%'}}>{who}</span>
				<span style={{marginLeft: 16, opacity: lead(f, whereAt, 10), color: colors.sub}}>{where}</span>
			</div>
		</div>
	);
};
