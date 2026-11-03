import React from 'react';
import {interpolate, spring} from 'remotion';
import {colors} from './brand';
import {ease} from './motion';

// Word-level kinetic choreography (PLAYBOOK §10.6). Every helper is keyed to a word's MEASURED start frame
// (films' timing wf()), so a beat lands on the syllable: a stroke or highlight begins LEAD frames early and
// completes on the word; a snap, flip or lock lands on the word itself (+ LAND frames).

/** Frames a stroke or highlight starts before its word, so it completes as the word lands (~0.25 s at 60 fps). */
export const LEAD = 15;
/** Frames after the word's start that a snap or lock lands (≈33 ms at 60 fps: inside the 30–100 ms window). */
export const LAND = 2;
/** Frames between staggered parts (Top-L, Top-R, Bottom-L, Bottom-R…): 0.2 s at 60 fps. */
export const STAGGER = 12;

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

/** 0 → 1 over `dur` frames, arriving at 1 exactly on `word` (+LAND). For strokes, highlights, bracket closes. */
export const lead = (f: number, word: number, dur = LEAD): number =>
	interpolate(f, [word + LAND - dur, word + LAND], [0, 1], {...clamp, easing: ease.draw});

/** 0 → 1 starting on `word`, over `dur` frames. For moves that are the verb itself ("closed", "slid", "split"). */
export const beat = (f: number, word: number, dur = 18): number => interpolate(f, [word, word + dur], [0, 1], {...clamp, easing: ease.arrive});

/** The lock bump: 1.00 → 1.08 → 1.00, peaking ~6 frames after `word` on a stiff spring (damping 12, stiffness 220). */
export const bump = (f: number, fps: number, word: number, peak = 0.08): number => {
	if (f < word) return 1;
	const s = spring({frame: f - word, fps, config: {damping: 12, stiffness: 220, mass: 0.6}});
	const decay = interpolate(f, [word, word + 6, word + 24], [0, 1, 0], clamp);
	return 1 + peak * decay * Math.min(1, s * 1.2);
};

/** A brightness flash that guides the eye to a target on its word: 0 → 1 → settles at `rest`. */
export const flash = (f: number, word: number, rest = 0.35): number =>
	interpolate(f, [word - 4, word + LAND, word + 30], [0, 1, rest], {...clamp, easing: ease.arrive});

/**
 * A counter that rolls through `keys` (frame → value) and lands on each value on its word; steps for whole things
 * (bolts, flights), never passing a value the narration contradicts (PLAYBOOK §6.4).
 */
export const rollTo = (f: number, keys: {frame: number; value: number}[], step = false): number => {
	if (keys.length === 1) return keys[0].value;
	const v = interpolate(
		f,
		keys.map((k) => k.frame),
		keys.map((k) => k.value),
		{...clamp, easing: ease.camera},
	);
	return step ? Math.round(v) : v;
};

type Tone = 'cyan' | 'amber' | 'red' | 'ink';
const toneColor = (t: Tone): string => (t === 'ink' ? colors.ink : colors[t]);

/** Four corner brackets that close from `open`× onto a box and lock on `word`, with a flash. SVG; screen px. */
export const BracketLock: React.FC<{f: number; fps: number; word: number; x: number; y: number; w: number; h: number; tone?: Tone; open?: number; arm?: number; until?: number}> = ({
	f,
	fps,
	word,
	x,
	y,
	w,
	h,
	tone = 'cyan',
	open = 1.7,
	arm = 14,
	until,
}) => {
	const k = lead(f, word, 12);
	if (k <= 0) return null;
	const out = until === undefined ? 1 : interpolate(f, [until, until + 14], [1, 0], clamp);
	if (out <= 0) return null;
	const sc = (open + (1 - open) * k) * bump(f, fps, word + LAND, 0.06);
	const cx = x + w / 2;
	const cy = y + h / 2;
	const hw = (w / 2) * sc;
	const hh = (h / 2) * sc;
	const c = toneColor(tone);
	const o = Math.min(k, out);
	const glow = flash(f, word, 0.0);
	const corners: [number, number, number, number][] = [
		[-1, -1, 1, 1],
		[1, -1, -1, 1],
		[-1, 1, 1, -1],
		[1, 1, -1, -1],
	];
	return (
		<g opacity={o}>
			{corners.map(([sx, sy, dx, dy], i) => {
				const px = cx + sx * hw;
				const py = cy + sy * hh;
				return <path key={i} d={`M ${px + dx * arm} ${py} L ${px} ${py} L ${px} ${py + dy * arm}`} fill="none" stroke={c} strokeWidth={3} strokeLinecap="square" />;
			})}
			{glow > 0.01 && <rect x={cx - hw} y={cy - hh} width={hw * 2} height={hh * 2} fill={c} opacity={0.16 * glow} />}
		</g>
	);
};

/** A badge that flips from `from` to `to` on `word` (a vertical card flip), then bumps 1.0 → 1.08 → 1.0. HTML. */
export const StatusFlip: React.FC<{f: number; fps: number; word: number; from: string; to: string; toneFrom?: Tone; toneTo?: Tone; size?: number; style?: React.CSSProperties}> = ({
	f,
	fps,
	word,
	from,
	to,
	toneFrom = 'red',
	toneTo = 'amber',
	size = 26,
	style,
}) => {
	const turn = interpolate(f, [word - 6, word + LAND], [0, 1], {...clamp, easing: ease.draw});
	const showTo = turn >= 0.5;
	const sy = Math.abs(Math.cos(turn * Math.PI));
	const c = toneColor(showTo ? toneTo : toneFrom);
	return (
		<div
			style={{
				display: 'inline-block',
				fontFamily: 'JetBrains Mono',
				fontWeight: 700,
				fontSize: size,
				letterSpacing: 2,
				padding: '6px 12px',
				color: showTo ? colors.void : c,
				background: showTo ? c : 'transparent',
				border: `2px solid ${c}`,
				transform: `scaleY(${Math.max(0.04, sy).toFixed(3)}) scale(${bump(f, fps, word + LAND).toFixed(4)})`,
				...style,
			}}
		>
			{showTo ? to : from}
		</div>
	);
};

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * A date pill (`05 JAN 2024` style) whose day rolls from `fromDay` and lands on `day` on the day's word; the month
 * snaps on its word; the year either shows from the start or rolls from `fromYear` and lands on `yearWord`. Amber pill on the desk: the date the narration says, said and shown together.
 */
export const DatePill: React.FC<{f: number; fps: number; day: number; month: number; year: number; dayWord: number; monthWord?: number; yearWord?: number; fromYear?: number; fromDay?: number; size?: number; style?: React.CSSProperties}> = ({
	f,
	fps,
	day,
	month,
	year,
	dayWord,
	monthWord,
	yearWord,
	fromYear,
	fromDay = 1,
	size = 34,
	style,
}) => {
	const d = Math.round(rollTo(f, [{frame: dayWord - 20, value: fromDay}, {frame: dayWord + LAND, value: day}]));
	const mOn = monthWord ?? dayWord;
	const mShown = f >= mOn ? MONTHS[month - 1] : '···';
	const o = interpolate(f, [dayWord - 24, dayWord - 14], [0, 1], clamp);
	// the year rolls from fromYear and lands on its own word, if one is given
	const yr = yearWord === undefined ? year : Math.round(rollTo(f, [{frame: yearWord - 18, value: fromYear ?? year}, {frame: yearWord + LAND, value: year}]));
	return (
		<div
			style={{
				display: 'inline-flex',
				gap: 12,
				alignItems: 'baseline',
				fontFamily: 'JetBrains Mono',
				fontWeight: 700,
				fontSize: size,
				letterSpacing: 2,
				color: colors.ink,
				padding: '6px 16px',
				border: `2px solid ${colors.amber}`,
				background: `rgba(245, 158, 11, ${(0.12 + 0.2 * flash(f, mOn, 0)).toFixed(3)})`,
				opacity: o,
				transform: `scale(${bump(f, fps, mOn + LAND).toFixed(4)})`,
				transformOrigin: '0 50%',
				...style,
			}}
		>
			<span style={{color: colors.amber}}>{String(d).padStart(2, '0')}</span>
			<span>{mShown}</span>
			<span style={{color: yearWord !== undefined && f >= yearWord + LAND ? colors.ink : yearWord !== undefined ? colors.sub : colors.ink}}>{yr}</span>
		</div>
	);
};
