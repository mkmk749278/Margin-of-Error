import {Easing, interpolate, spring} from 'remotion';
import {exhibitSpring} from './brand';

// Shared motion vocabulary (PLAYBOOK §6.4; owner's spec §4 Motion). Numbers and exhibits never jump: counters,
// pressures and timeline bars interpolate; documents settle on a spring. Camera and type use eased curves.

export const ease = {
	/** Slow, cinematic in-out: camera pushes, pans. */
	camera: Easing.bezier(0.45, 0, 0.2, 1),
	/** Fast start, long settle: things arriving. */
	arrive: Easing.bezier(0.16, 1, 0.3, 1),
	/** Gentle out: things leaving. */
	leave: Easing.bezier(0.7, 0, 0.84, 0),
	/** A pen drawing a line. */
	draw: Easing.bezier(0.65, 0, 0.35, 1),
} as const;

/** Clamped, eased interpolation from frame a to b. */
export const tween = (
	frame: number,
	a: number,
	b: number,
	from: number,
	to: number,
	easing: (t: number) => number = ease.camera,
): number => interpolate(frame, [a, b], [from, to], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing});

/** 0 → 1 → 0: fade in over `fadeIn` frames from `start`, out over `fadeOut` frames before `end`. */
export const envelope = (frame: number, start: number, end: number, fadeIn = 12, fadeOut = 12): number =>
	Math.min(tween(frame, start, start + fadeIn, 0, 1, ease.arrive), tween(frame, end - fadeOut, end, 1, 0, ease.leave));

/** The channel's settle spring (config/brand.yaml `spring`), starting at `start`. */
export const settle = (frame: number, fps: number, start: number, config: Partial<{mass: number; damping: number; stiffness: number}> = {}): number =>
	spring({frame: frame - start, fps, config: {...exhibitSpring, ...config}});

/** A slow 1.02 → 1.05 push across a shot, so no frame is ever static. */
export const microPush = (frame: number, duration: number, from = 1.02, to = 1.05): number =>
	tween(frame, 0, duration, from, to, ease.camera);

/** Damped oscillation after an impulse at `start`: the elastic shudder of a jammed or struck part. */
export const shudder = (frame: number, fps: number, start: number, amplitude: number, hz = 7, decay = 5.5): number => {
	const t = (frame - start) / fps;
	if (t < 0) return 0;
	return amplitude * Math.exp(-decay * t) * Math.sin(2 * Math.PI * hz * t);
};

/**
 * A camera move's progress, 0 → 1 between `from` and `to`: eases in over the first fifth, travels at a constant speed,
 * eases out over the last fifth (a real camera on a track or head, not a spring). Clamped outside the span.
 */
export const glide = (f: number, from: number, to: number): number => {
	const t = Math.min(1, Math.max(0, (f - from) / Math.max(1, to - from)));
	const a = 0.2;
	const v = 1 / (1 - a); // peak speed so the curve ends at 1
	if (t < a) return (v * t * t) / (2 * a);
	if (t > 1 - a) return 1 - (v * (1 - t) * (1 - t)) / (2 * a);
	return v * (t - a / 2);
};
