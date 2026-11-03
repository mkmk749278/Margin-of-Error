import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from './brand';
import {fontStacks} from './fonts';
import {ease, envelope, tween} from './motion';

// Telemetry readouts (owner's spec §4): sensor counters, pressures, altitudes and clocks interpolate continuously,
// never cut. A number on screen is a claim: every row carries its claims.csv id, or 'ILLUSTRATIVE' and the panel
// says ILLUSTRATIVE VALUES (PLAYBOOK §9.4). Colour = meaning: cyan nominal, amber threshold, red failure.

export type Key = {frame: number; value: number};
export type Tone = 'ink' | 'cyan' | 'amber' | 'red';

export type ReadoutRow = {
	label: string;
	unit: string;
	keys: Key[];
	decimals?: number;
	tone?: Tone;
	/** Thresholds: the value turns amber above `warn`, red above `fail` (same units). */
	warn?: number;
	fail?: number;
	/** claims.csv id, or 'ILLUSTRATIVE'. Required. */
	source: string;
};

const toneColour = (t: Tone = 'ink'): string => (t === 'ink' ? colors.ink : colors[t]);

export const valueAt = (keys: Key[], frame: number): number =>
	keys.length === 1
		? keys[0].value
		: interpolate(
				frame,
				keys.map((k) => k.frame),
				keys.map((k) => k.value),
				{extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease.camera},
			);

export const fmt = (v: number, decimals = 0): string =>
	v.toLocaleString('en-US', {minimumFractionDigits: decimals, maximumFractionDigits: decimals});

type ReadoutProps = {
	title: string;
	rows: ReadoutRow[];
	start: number;
	end: number;
	style?: React.CSSProperties;
	width?: number;
};

export const Readout: React.FC<ReadoutProps> = ({title, rows, start, end, style, width = 420}) => {
	const frame = useCurrentFrame();
	const o = envelope(frame, start, end, 18, 14);
	if (o <= 0) return null;
	const illustrative = rows.some((r) => r.source === 'ILLUSTRATIVE');
	const scan = tween(frame, start, start + 24, 0, 1);
	return (
		<div
			style={{
				position: 'absolute',
				top: 72,
				right: 72,
				width,
				opacity: o,
				fontFamily: fontStacks.mono,
				background: colors.card,
				border: `1px solid ${colors.border}`,
				padding: '14px 20px 12px',
				overflow: 'hidden',
				...style,
			}}
		>
			<div style={{fontSize: 26, letterSpacing: 1.2, color: colors.sub}}>{title}</div>
			<div style={{height: 1, background: colors.border, margin: '10px 0 8px'}} />
			{rows.map((r) => {
				const v = valueAt(r.keys, frame);
				const tone: Tone = r.fail !== undefined && v >= r.fail ? 'red' : r.warn !== undefined && v >= r.warn ? 'amber' : (r.tone ?? 'ink');
				return (
					<div key={r.label} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '5px 0'}}>
						<span style={{fontSize: 26, letterSpacing: 1, color: colors.sub}}>{r.label}</span>
						<span style={{fontSize: 36, fontWeight: 700, color: toneColour(tone), fontVariantNumeric: 'tabular-nums'}}>
							{fmt(v, r.decimals)}
							<span style={{fontSize: 26, fontWeight: 500, color: colors.sub, marginLeft: 8}}>{r.unit}</span>
						</span>
					</div>
				);
			})}
			{illustrative ? <div style={{marginTop: 8, fontSize: 26, letterSpacing: 1, color: colors.amber}}>ILLUSTRATIVE VALUES</div> : null}
			<div style={{position: 'absolute', left: 0, right: 0, top: `${scan * 100}%`, height: 2, background: colors.cyan, opacity: scan < 1 ? 0.45 : 0}} />
		</div>
	);
};

/** A timestamp that runs with the film: "17:14:09.4 PST". `t0` is seconds after midnight at frame `start`. */
export const Clock: React.FC<{t0: number; start: number; fps: number; zone: string; source: string; style?: React.CSSProperties}> = ({
	t0,
	start,
	fps,
	zone,
	source,
	style,
}) => {
	const frame = useCurrentFrame();
	const t = Math.max(0, t0 + (frame - start) / fps);
	const hh = Math.floor(t / 3600) % 24;
	const mm = Math.floor(t / 60) % 60;
	const ss = t % 60;
	const p = (n: number) => String(n).padStart(2, '0');
	return (
		<div
			style={{
				position: 'absolute',
				top: 72,
				left: 72,
				fontFamily: fontStacks.mono,
				color: colors.ink,
				background: colors.card,
				border: `1px solid ${colors.border}`,
				padding: '10px 20px 8px',
				...style,
			}}
		>
			<div style={{fontSize: 44, fontWeight: 700, letterSpacing: 2, fontVariantNumeric: 'tabular-nums'}}>
				{p(hh)}:{p(mm)}:{ss.toFixed(1).padStart(4, '0')}
				<span style={{fontSize: 26, color: colors.sub, marginLeft: 12}}>{zone}</span>
			</div>
			{source === 'ILLUSTRATIVE' ? <div style={{fontSize: 26, letterSpacing: 1, color: colors.amber}}>ILLUSTRATIVE TIME</div> : null}
		</div>
	);
};

export type TimelineEvent = {at: number; label: string; tone?: Tone; source: string};

/** A timeline bar that fills continuously from `from` to `to` (in the event's own units: seconds, days, years). */
export const TimelineBar: React.FC<{
	from: number;
	to: number;
	unit: string;
	events: TimelineEvent[];
	start: number;
	end: number;
	y?: number;
}> = ({from, to, unit, events, start, end, y = 900}) => {
	const frame = useCurrentFrame();
	const o = envelope(frame, start, end, 18, 14);
	const head = tween(frame, start + 10, end - 20, from, to);
	const x = (v: number) => 60 + ((v - from) / (to - from)) * 1600; // inside the 1720 px card
	return (
		<div
			style={{
				position: 'absolute',
				left: 100,
				top: y,
				width: 1720,
				height: 110,
				opacity: o,
				fontFamily: fontStacks.mono,
				background: colors.card,
				border: `1px solid ${colors.border}`,
			}}
		>
			<div style={{position: 'absolute', left: 60, top: 30, width: 1600, height: 2, background: colors.border}} />
			<div style={{position: 'absolute', left: 60, top: 30, width: x(head) - 60, height: 2, background: colors.cyan}} />
			{events.map((e) => {
				const on = head >= e.at;
				return (
					<div key={e.label} style={{position: 'absolute', left: x(e.at), top: 20}}>
						<div style={{width: 2, height: 22, background: on ? toneColour(e.tone ?? 'cyan') : colors.border, marginLeft: -1}} />
						<div style={{marginTop: 10, transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 26, letterSpacing: 1, color: on ? colors.ink : colors.sub}}>
							{e.label}
						</div>
					</div>
				);
			})}
			<div style={{position: 'absolute', right: 16, top: 8, fontSize: 26, letterSpacing: 1, color: colors.sub}}>{unit}</div>
		</div>
	);
};
