import React from 'react';
import {AbsoluteFill, Audio, Img, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, fonts} from './brand';
import {Grid, REEL_W, chunk, clamp, cropAt, cueOf} from './Reel';
import type {Cue, MythsConfig, ReelProps} from './Reel';

// An Instagram reel in the "what you heard vs the report" form (owner, 12 NOV 2026): the real NTSB photos and drone
// video in the window; below it the popular explanations as plain cards (no outlet names: they are our summary of
// what circulated, never a recreated news item), each stamped as the narration says the report does not confirm
// them; then the report itself, then the film. Layout clear of Instagram's UI (top ~160 px, bottom ~420 px).

const PIC_Y = 196;
const PIC_H = 820;
const CAP_Y = 1040;
const LIST_Y = 1150;
const CARD_H = 88;
const CARD_GAP = 12;
const SRC_W = 1920;
const SRC_H = 1080;

// the first reel's set (East Palestine, 12 NOV 2026), used when the props carry no `myths`
const EP_MYTHS: MythsConfig = {
	cover: ['East Palestine', '03 FEB 2023 · THE DERAILMENT'],
	headers: [{at: null, text: 'WHAT CIRCULATED'}],
	cards: [
		{text: 'A SKIPPED REPAIR', at: {s: 2, w: '^skipped'}},
		{text: 'A BEARING WITH NO GREASE', at: {s: 3, w: '^bearing'}},
		{text: 'COST CUTTING', at: {s: 4, w: '^Cost'}},
	],
	stamp: {at: {s: 5, w: '^confirm'}, lines: ['NOT CONFIRMED', 'BY THE REPORT']},
	listOut: {s: 7, w: '^Here'},
	cta: {s: 8, w: '^full'},
};

const TONE = {ink: colors.ink, amber: colors.amber, red: colors.red, sub: colors.sub} as const;

export const ReelMyths: React.FC<ReelProps> = ({pic, mix, segments, words, voEnd, myths}) => {
	const M = myths ?? EP_MYTHS;
	const cue = (c: Cue): number => cueOf(words, c.s, new RegExp(c.w));
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;
	const chunks = React.useMemo(() => chunk(words), [words]);
	const pop = (at: number, stiff = 220) => (t >= at ? spring({frame: frame - Math.round(at * fps), fps, config: {damping: 15, stiffness: stiff, mass: 0.6}}) : 0);

	const claimAt = M.cards.map((c) => cue(c.at) - 0.12);
	const stampCue = M.stamp ? cue(M.stamp.at) : Infinity;
	const stampAt = M.cards.map((_, i) => stampCue - 0.1 + i * 0.16);
	const listOut = cue(M.listOut) - 0.1;
	const ctaAt = cue(M.cta) - 0.15;
	const header = [...M.headers].reverse().find((h) => h.at === null || t >= cue(h.at) - 0.12)?.text ?? '';
	const cols = M.cols ?? 1;
	const cardW = cols === 2 ? (984 - CARD_GAP) / 2 : 984;
	const cardH = cols === 2 ? 110 : CARD_H;
	const listOpacity = interpolate(t, [listOut, listOut + 0.3], [1, 0], clamp);

	const idx = chunks.findIndex((c, i) => t >= c.t0 - 0.05 && t < (chunks[i + 1]?.t0 ?? Infinity) - 0.05 && t <= c.t1 + 0.5);
	const active = idx >= 0 ? chunks[idx] : null;
	const capPop = active ? spring({frame: frame - Math.round((active.t0 - 0.05) * fps), fps, config: {damping: 18, stiffness: 260, mass: 0.6}}) : 0;

	const seg = segments.find((s) => t >= s.t && t < s.t1) ?? segments[segments.length - 1];
	const segIn = interpolate(t, [seg.t, seg.t + 0.12], [0.55, 1], clamp);
	const c = cropAt(seg, t);
	const k = REEL_W / c.w;
	const honesty = /RECONSTRUCTION|ILLUSTRATION/.test(seg.label);

	return (
		<AbsoluteFill style={{backgroundColor: colors.void}}>
			<Grid />
			<Audio src={staticFile(mix)} />
			{/* the record's own pictures */}
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
			{active && t < voEnd + 0.1 ? (
				<div
					style={{
						position: 'absolute',
						left: 48,
						right: 48,
						top: CAP_Y,
						textAlign: 'center',
						fontFamily: fonts.display,
						fontWeight: 700,
						fontSize: 70,
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
			{/* the cover and the first seconds: the case the viewer types */}
			{t < claimAt[0] && t < ctaAt ? (
				<div style={{position: 'absolute', left: 48, right: 48, top: LIST_Y + 20, opacity: 1 - pop(claimAt[0] - 0.2)}}>
					<div style={{fontFamily: fonts.display, fontWeight: 700, fontSize: 88, lineHeight: 1.0, color: colors.ink, textTransform: 'uppercase'}}>{M.cover[0]}</div>
					<div style={{fontFamily: fonts.mono, fontWeight: 700, fontSize: 40, marginTop: 14, color: colors.amber, letterSpacing: 2}}>{M.cover[1]}</div>
				</div>
			) : null}
			{/* what circulated, and the report's answer */}
			{t >= claimAt[0] - 0.2 && listOpacity > 0 ? (
				<div style={{position: 'absolute', left: 48, right: 48, top: LIST_Y, opacity: listOpacity}}>
					<div style={{fontFamily: fonts.mono, fontWeight: 700, fontSize: 28, letterSpacing: 3, color: colors.sub, height: 40}}>{header}</div>
					<div style={{display: 'flex', flexWrap: 'wrap', columnGap: CARD_GAP}}>
					{M.cards.map((cl, i) => {
						const on = pop(claimAt[i]);
						const st = pop(stampAt[i], 320);
						return (
							<div
								key={cl.text}
								style={{
									position: 'relative',
									height: cardH,
									width: cardW,
									boxSizing: 'border-box',
									marginBottom: CARD_GAP,
									backgroundColor: colors.card,
									border: `1px solid ${colors.border}`,
									borderLeft: `6px solid ${st > 0.01 ? colors.red : TONE[cl.tone ?? 'amber']}`,
									display: 'flex',
									alignItems: 'center',
									paddingLeft: 26,
									opacity: on,
									transform: `translateX(${(1 - on) * -40}px)`,
								}}
							>
								<span style={{fontFamily: fonts.display, fontWeight: 700, fontSize: cols === 2 ? 52 : 42, color: st > 0.5 ? colors.sub : cl.tone === 'red' ? colors.red : colors.ink, letterSpacing: 0.5}}>{cl.text}</span>
								{st > 0.01 ? (
									<div
										style={{
											position: 'absolute',
											right: 18,
											top: 10,
											padding: '4px 10px',
											border: `3px solid ${colors.red}`,
											color: colors.red,
											fontFamily: fonts.mono,
											fontWeight: 700,
											fontSize: 26,
											lineHeight: 1.1,
											textAlign: 'center',
											backgroundColor: 'rgba(10,13,18,0.9)',
											transform: `rotate(-3deg) scale(${1.6 - 0.6 * st})`,
											opacity: Math.min(1, st * 1.5),
										}}
									>
										{(M.stamp?.lines ?? []).map((l, j) => (
											<div key={j}>{l}</div>
										))}
									</div>
								) : null}
							</div>
						);
					})}
					</div>
				</div>
			) : null}
			{/* where the rest of the case is */}
			{t >= ctaAt ? (
				<div style={{position: 'absolute', left: 48, right: 48, top: LIST_Y + 60, textAlign: 'center', opacity: pop(ctaAt)}}>
					<div style={{fontFamily: fonts.mono, fontWeight: 700, fontSize: 40, letterSpacing: 2, color: colors.cyan}}>FULL INVESTIGATION ON YOUTUBE</div>
					<div style={{fontFamily: fonts.display, fontWeight: 700, fontSize: 76, marginTop: 12, color: colors.ink, textTransform: 'uppercase', letterSpacing: 1}}>Margin of Error</div>
				</div>
			) : null}
		</AbsoluteFill>
	);
};
