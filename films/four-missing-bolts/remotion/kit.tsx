import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {camera, colors} from '../../../lib/remotion/brand';
import {fontStacks} from '../../../lib/remotion/fonts';
import {ease, envelope, settle, tween} from '../../../lib/remotion/motion';

// Film kit for The Four Missing Bolts. Scenes use ABSOLUTE film frames (timing.ts): each scene is mounted in a
// <Sequence from={start}> and reads `useFilmFrame()`, so every cue is written against the narration's own clock.

export const FilmFrameContext = React.createContext(0);
/** The absolute film frame inside a scene (the Sequence offset added back). */
export const useFilmFrame = (): number => useCurrentFrame() + React.useContext(FilmFrameContext);

export const media = (p: string): string => staticFile(`films/four-missing-bolts/${p}`);

export const mono = fontStacks.mono;
export const sans = fontStacks.display;

/** Honesty label chip (PLAYBOOK §9.4): RECONSTRUCTION, ILLUSTRATION, ILLUSTRATIVE VALUES, NOT TO SCALE, TRANSCRIPTION. */
export const Label: React.FC<{text: string; tone?: 'muted' | 'amber' | 'cyan'; style?: React.CSSProperties}> = ({text, tone = 'muted', style}) => (
	<span
		style={{
			fontFamily: mono,
			fontSize: 18,
			letterSpacing: 2.4,
			color: tone === 'muted' ? colors.ink : colors[tone],
			border: `1px solid ${tone === 'muted' ? colors.border : colors[tone]}`,
			background: 'rgba(10,13,18,0.85)',
			padding: '4px 9px 3px',
			whiteSpace: 'nowrap',
			...style,
		}}
	>
		{text}
	</span>
);

type MountProps = {
	x: number;
	y: number;
	w: number;
	h: number;
	/** Exhibit number, e.g. "EXHIBIT 03". */
	tag?: string;
	/** What it is and where it comes from (PLAYBOOK §6.5a), always shown. */
	source: string;
	labels?: string[];
	start: number;
	end: number;
	children?: React.ReactNode;
	/** slight 2.5D lean that flattens as it settles */
	lean?: number;
	paper?: boolean;
};

/** A desk plate: nothing floats on the void (owner, 2026-11-03). Card, 1 px border, registration corners, source strip. */
export const Mount: React.FC<MountProps> = ({x, y, w, h, tag, source, labels = [], start, end, children, lean = 6, paper = false}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = settle(f, fps, start);
	const o = envelope(f, start, end, 14, 16);
	if (o <= 0) return null;
	const tilt = (1 - a) * 12 + lean * (1 - tween(f, start, start + 240, 0, 1));
	const corner = (cx: number, cy: number, sx: number, sy: number) => (
		<div key={`${cx}${cy}`} style={{position: 'absolute', left: cx, top: cy, width: 18, height: 18, borderLeft: sx > 0 ? `1px solid ${colors.sub}` : undefined, borderRight: sx < 0 ? `1px solid ${colors.sub}` : undefined, borderTop: sy > 0 ? `1px solid ${colors.sub}` : undefined, borderBottom: sy < 0 ? `1px solid ${colors.sub}` : undefined, opacity: 0.6}} />
	);
	return (
		<AbsoluteFill style={{perspective: camera.perspective, perspectiveOrigin: `${x + w / 2}px ${y + h / 2}px`, opacity: o}}>
			<div
				style={{
					position: 'absolute',
					left: x,
					top: y,
					width: w,
					height: h,
					transform: `translateY(${(1 - a) * 60}px) rotateX(${tilt}deg)`,
					transformOrigin: '50% 60%',
					background: paper ? colors.paper : colors.card,
					border: `1px solid ${colors.border}`,
					boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
				}}
			>
				<div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>{children}</div>
				{corner(10, 10, 1, 1)}
				{corner(w - 28, 10, -1, 1)}
				{corner(10, h - 28 - 44, 1, -1)}
				{corner(w - 28, h - 28 - 44, -1, -1)}
				<div
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 0,
						height: 44,
						borderTop: `1px solid ${colors.border}`,
						background: colors.card,
						display: 'flex',
						alignItems: 'center',
						gap: 14,
						padding: '0 16px',
						fontFamily: mono,
						fontSize: 17,
						letterSpacing: 2,
						color: colors.ink,
						whiteSpace: 'nowrap',
					}}
				>
					{tag ? <span style={{color: colors.amber, fontWeight: 700}}>{tag}</span> : null}
					<span>{source}</span>
					<span style={{flex: 1}} />
					{labels.map((l) => (
						<span key={l} style={{color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'}}>
							{l}
						</span>
					))}
				</div>
			</div>
		</AbsoluteFill>
	);
};

type PhotoProps = {
	src: string;
	/** image pixel size */
	iw: number;
	ih: number;
	start: number;
	end: number;
	source: string;
	tag?: string;
	/** Ken Burns: focus rectangles in image pixels, from → to over the shot */
	from: {x: number; y: number; w: number; h: number};
	to: {x: number; y: number; w: number; h: number};
	/** frame box on screen */
	box?: {x: number; y: number; w: number; h: number};
	children?: (k: {sx: (px: number) => number; sy: (py: number) => number; scale: number}) => React.ReactNode;
	labels?: string[];
};

/** A real photograph on a desk plate, unaltered (crop and slow push only, PLAYBOOK §9.5), credited on the strip. */
export const Photo: React.FC<PhotoProps> = ({src, iw, ih, start, end, source, tag, from, to, box = {x: 150, y: 110, w: 1620, h: 820}, children, labels}) => {
	const f = useFilmFrame();
	const t = tween(f, start, end, 0, 1, ease.camera);
	const r = {
		x: interpolate(t, [0, 1], [from.x, to.x]),
		y: interpolate(t, [0, 1], [from.y, to.y]),
		w: from.w * Math.pow(to.w / from.w, t),
		h: from.h * Math.pow(to.h / from.h, t),
	};
	const innerH = box.h - 44;
	const scale = Math.max(box.w / r.w, innerH / r.h);
	const cx = r.x + r.w / 2;
	const cy = r.y + r.h / 2;
	const ox = box.w / 2 - cx * scale;
	const oy = innerH / 2 - cy * scale;
	return (
		<Mount x={box.x} y={box.y} w={box.w} h={box.h} source={source} tag={tag} start={start} end={end} lean={3} labels={labels}>
			<div style={{position: 'absolute', left: 0, top: 0, width: box.w, height: innerH, overflow: 'hidden', background: '#000'}}>
				<Img src={src} style={{position: 'absolute', left: ox, top: oy, width: iw * scale, height: ih * scale}} />
				{children ? children({sx: (px) => ox + px * scale, sy: (py) => oy + py * scale, scale}) : null}
			</div>
		</Mount>
	);
};

/** Words that type on at reading pace from `start` (a record's own words: never paraphrased into something stronger). */
export const TypeOn: React.FC<{text: string; start: number; cps?: number; style?: React.CSSProperties; caret?: boolean}> = ({text, start, cps = 38, style, caret = true}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const n = Math.max(0, Math.min(text.length, Math.floor(((f - start) / fps) * cps)));
	const done = n >= text.length;
	return (
		<span style={style}>
			{text.slice(0, n)}
			<span style={{opacity: 0}}>{text.slice(n)}</span>
			{caret && !done && f >= start ? <span style={{position: 'relative', marginLeft: -0.4 + 'em', color: colors.cyan}}>▌</span> : null}
		</span>
	);
};

/** A quote on a card, attributed (PLAYBOOK §9.6). */
export const QuoteCard: React.FC<{quote: string; who: string; where: string; start: number; end: number; x: number; y: number; w: number; size?: number}> = ({
	quote,
	who,
	where,
	start,
	end,
	x,
	y,
	w,
	size = 46,
}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const o = envelope(f, start, end, 16, 16);
	const a = settle(f, fps, start);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y + (1 - a) * 30, width: w, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, padding: '34px 40px 28px'}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: colors.amber}} />
			<div style={{fontFamily: sans, fontWeight: 600, fontSize: size, lineHeight: 1.22, color: colors.ink, letterSpacing: -0.3}}>
				<TypeOn text={`“${quote}”`} start={start + 8} cps={30} caret={false} />
			</div>
			<div style={{marginTop: 22, fontFamily: mono, fontSize: 15, letterSpacing: 2.6, color: colors.sub}}>
				<span style={{color: colors.amber}}>{who}</span>
				<span style={{marginLeft: 16}}>{where}</span>
			</div>
		</div>
	);
};

/** A rubber stamp that lands on the settle spring (sfx: stamp). */
export const Stamp: React.FC<{text: string; start: number; x: number; y: number; rot?: number; tone?: 'red' | 'amber'; size?: number}> = ({text, start, x, y, rot = -8, tone = 'red', size = 54}) => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	if (f < start) return null;
	const a = settle(f, fps, start, {damping: 14, stiffness: 260});
	const s = interpolate(a, [0, 1], [1.6, 1]);
	return (
		<div
			style={{
				position: 'absolute',
				left: x,
				top: y,
				transform: `translate(-50%,-50%) rotate(${rot}deg) scale(${s})`,
				opacity: Math.min(1, a * 1.6),
				fontFamily: mono,
				fontWeight: 700,
				fontSize: size,
				letterSpacing: size * 0.12,
				color: colors[tone],
				border: `4px solid ${colors[tone]}`,
				padding: `${size * 0.12}px ${size * 0.35}px`,
				whiteSpace: 'nowrap',
				mixBlendMode: 'normal',
			}}
		>
			{text}
		</div>
	);
};

/** Act title: structural type, Inter bold tracked uppercase; the act number in mono. */
export const ActTitle: React.FC<{n: string; title: string; start: number; end: number; sub?: string}> = ({n, title, start, end, sub}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 20, 24);
	if (o <= 0) return null;
	const line = tween(f, start + 6, start + 60, 0, 1, ease.draw);
	const track = tween(f, start, end, 14, 18);
	return (
		<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: o}}>
			<div style={{fontFamily: mono, fontSize: 20, letterSpacing: 8, color: colors.amber, marginBottom: 22}}>ACT {n}</div>
			<div style={{fontFamily: sans, fontWeight: 700, fontSize: 78, letterSpacing: track, color: colors.ink, textTransform: 'uppercase', marginRight: -track}}>{title}</div>
			<div style={{width: 760 * line, height: 1, background: colors.sub, marginTop: 30, opacity: 0.7}} />
			{sub ? <div style={{fontFamily: mono, fontSize: 16, letterSpacing: 4, color: colors.muted, marginTop: 20}}>{sub}</div> : null}
		</AbsoluteFill>
	);
};

/** Small lower-left caption on a card (2–4 words, PLAYBOOK §6.6). */
export const Caption: React.FC<{text: string; start: number; end: number; tone?: 'ink' | 'amber' | 'red' | 'cyan'; x?: number; y?: number; size?: number}> = ({
	text,
	start,
	end,
	tone = 'ink',
	x = 72,
	y = 960,
	size = 22,
}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 12, 14);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: mono, fontSize: size, letterSpacing: 3, color: colors[tone], background: colors.card, border: `1px solid ${colors.border}`, padding: '10px 16px 8px', whiteSpace: 'nowrap'}}>
			{text}
		</div>
	);
};

/** The case file strip in the top-left corner: a reference a viewer could look up. */
export const CaseStrip: React.FC<{start: number; end: number; text?: string}> = ({start, end, text = 'NTSB DCA24MA063 · N704AL · AIR-25-04'}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, 20, 20) * 0.85;
	if (o <= 0) return null;
	return <div style={{position: 'absolute', right: 72, bottom: 36, opacity: o, fontFamily: mono, fontSize: 13, letterSpacing: 3, color: colors.muted}}>{text}</div>;
};

/** A soft scene envelope for content that should fade together. */
export const Fade: React.FC<{start: number; end: number; children: React.ReactNode; inF?: number; outF?: number}> = ({start, end, children, inF = 16, outF = 16}) => {
	const f = useFilmFrame();
	const o = envelope(f, start, end, inF, outF);
	if (o <= 0) return null;
	return <AbsoluteFill style={{opacity: o}}>{children}</AbsoluteFill>;
};
