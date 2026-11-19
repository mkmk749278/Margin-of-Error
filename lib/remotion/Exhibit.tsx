import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {camera, colors} from './brand';
import {fontStacks} from './fonts';
import {ease, envelope, settle, tween} from './motion';

// An audited exhibit on the investigator's desk (owner's spec §4): a document staged in 2.5D (perspective 1000 px)
// that pulls inward from the full letterhead down to the highlighted line. The page is a real scan (an image in
// public/films/<slug>/, logged in media_manifest.csv) or, for our own transcriptions, children set on the paper.
// Every exhibit names its source: a document id a viewer could look up (NTSB docket, SEC filing, court record).

export type Rect = {x: number; y: number; w: number; h: number};
export type Highlight = Rect & {/** frame the highlighter starts drawing */ start: number; /** frames to draw */ draw?: number};

type ExhibitProps = {
	/** Page size in its own pixels (a scan's pixel size, or the layout box of a transcription). */
	page: {w: number; h: number};
	/** The page content: an <Img> of the scan, or a transcription. */
	children: React.ReactNode;
	/** Frame the exhibit slides onto the desk. */
	start: number;
	/** The pull-in: from the full page to `focus` between these frames. */
	push?: {from: number; to: number; focus: Rect};
	highlights?: Highlight[];
	/** "EXHIBIT 04" */
	label: string;
	/** Where a viewer can find it: "NTSB DOCKET DCA24MA063 · DOC 12". Required: no anonymous paper. */
	source: string;
	/** "TRANSCRIPTION" when the page is set by us, not a scan (PLAYBOOK §9.4). */
	note?: string;
	/**
	 * How the camera reaches the focus. 'zoom' (default, the earlier films): a log zoom from the full page. 'rostrum': a
	 * rostrum camera already at reading distance glides down the page to the line and keeps drifting, the scale almost
	 * constant (owner 19 NOV 2026: documents read like a camera moving over paper, not a zoom).
	 */
	move?: 'zoom' | 'rostrum';
};

const SCREEN = {w: 1920, h: 1080};

export const Exhibit: React.FC<ExhibitProps> = ({page, children, start, push, highlights = [], label, source, note, move = 'zoom'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const arrive = settle(frame, fps, start);
	// full-page fit, then the focus box fills about 78% of the frame
	const s0 = Math.min((SCREEN.w * 0.62) / page.w, (SCREEN.h * 0.84) / page.h);
	const c0 = {x: page.w / 2, y: page.h / 2};
	const t = push ? tween(frame, push.from, push.to, 0, 1, ease.camera) : 0;
	const s1 = push ? Math.min((SCREEN.w * 0.78) / push.focus.w, (SCREEN.h * 0.62) / push.focus.h) : s0;
	const c1 = push ? {x: push.focus.x + push.focus.w / 2, y: push.focus.y + push.focus.h / 2} : c0;
	let s = s0 * Math.pow(s1 / s0, t); // log zoom: constant perceived speed
	let cx = c0.x + (c1.x - c0.x) * t;
	let cy = c0.y + (c1.y - c0.y) * t;
	if (move === 'rostrum') {
		// reading distance from the first frame; the camera travels down and across the paper to the line
		const sr = push ? s1 : Math.min((SCREEN.w * 0.8) / page.w, (SCREEN.h * 1.5) / page.h);
		const g = push ? tween(frame, push.from - 20, push.to, 0, 1, ease.camera) : 0;
		s = sr * (0.95 + 0.05 * g);
		const half = {w: SCREEN.w / 2 / s, h: SCREEN.h / 2 / s};
		const inX = (x: number): number => Math.min(page.w - half.w * 0.6, Math.max(half.w * 0.6, x));
		const inY = (y: number): number => Math.min(page.h - half.h * 0.5, Math.max(half.h * 0.5, y));
		const end = {x: c1.x, y: c1.y};
		const begin = {x: inX(end.x - SCREEN.w * 0.07 / s), y: inY(end.y - SCREEN.h * 0.42 / s)};
		// after the move lands the camera keeps creeping down the page (~11 px a second on screen): never a held frame
		const after = push ? Math.max(0, frame - push.to) : Math.max(0, frame - start);
		const creep = (Math.min(after, 1800) * 0.18) / s;
		cx = begin.x + (end.x - begin.x) * g;
		cy = inY(begin.y + (end.y - begin.y) * g + creep);
	}
	// every document lies on the same table: it never goes fully flat (one tilt, one light, as in the owner's 2026-11-03 note)
	const tilt = 4 + (1 - t) * 5 + (1 - arrive) * 14;
	const yaw = -1.4 + (1 - t) * -0.8;
	const slide = (1 - arrive) * 220;
	const breathe = move === 'rostrum' ? 1 : tween(frame, start, start + 900, 1, 1.02); // never static
	return (
		<AbsoluteFill style={{perspective: camera.perspective, perspectiveOrigin: '50% 40%'}}>
			<AbsoluteFill style={{transform: `translateY(${slide}px) rotateX(${tilt}deg) rotateZ(${yaw}deg) scale(${breathe})`, transformOrigin: '50% 55%', opacity: arrive}}>
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: page.w,
						height: page.h,
						transformOrigin: '0 0',
						transform: `translate(${SCREEN.w / 2 - cx * s}px, ${SCREEN.h / 2 - cy * s}px) scale(${s})`,
						background: colors.paper,
						boxShadow: `0 ${30 / s}px ${80 / s}px rgba(0,0,0,0.55), 0 0 0 ${1 / s}px ${colors.border}`,
						overflow: 'hidden',
					}}
				>
					{children}
					<div style={{position: 'absolute', inset: 0, background: 'linear-gradient(118deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 40%, rgba(15,23,42,0.10) 100%)', pointerEvents: 'none'}} />
					{highlights.map((h, i) => {
						const k = tween(frame, h.start, h.start + (h.draw ?? 36), 0, 1, ease.draw);
						return (
							<div
								key={i}
								style={{position: 'absolute', left: h.x, top: h.y, width: h.w * k, height: h.h, background: colors.highlight, mixBlendMode: 'multiply'}}
							/>
						);
					})}
				</div>
			</AbsoluteFill>
			<ExhibitTag label={label} source={source} note={note} start={start} />
		</AbsoluteFill>
	);
};

const ExhibitTag: React.FC<{label: string; source: string; note?: string; start: number}> = ({label, source, note, start}) => {
	const frame = useCurrentFrame();
	const o = envelope(frame, start + 10, Number.MAX_SAFE_INTEGER, 18, 1);
	return (
		<div
			style={{
				position: 'absolute',
				left: 72,
				top: 84,
				opacity: o,
				fontFamily: fontStacks.mono,
				background: colors.card,
				border: `1px solid ${colors.border}`,
				padding: '12px 18px',
				display: 'flex',
				gap: 18,
				alignItems: 'baseline',
			}}
		>
			<span style={{fontSize: 26, fontWeight: 700, letterSpacing: 1.5, color: colors.amber}}>{label}</span>
			<span style={{fontSize: 26, letterSpacing: 1, color: colors.ink}}>{source}</span>
			{note ? <span style={{fontSize: 26, letterSpacing: 1, color: colors.sub}}>{note}</span> : null}
		</div>
	);
};
