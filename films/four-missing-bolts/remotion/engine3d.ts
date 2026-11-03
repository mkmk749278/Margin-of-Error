// A small, deterministic 3D line-and-face renderer for technical illustration (PLAYBOOK §6.4: real geometry and
// real kinematics). Geometry in inches; the camera orbits a target; faces are painter-sorted and flat-shaded, so
// the result reads like a CAD cutaway drawn on the desk. Pure functions of the inputs: safe at any frame.

export type V3 = [number, number, number];

export const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
export const dot = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const norm = (a: V3): V3 => {
	const l = Math.hypot(a[0], a[1], a[2]) || 1;
	return [a[0] / l, a[1] / l, a[2] / l];
};

/** Rotate p about the axis through `o` along x by `ang` radians (the plug's lower hinge line). */
export const rotX = (p: V3, o: V3, ang: number): V3 => {
	const y = p[1] - o[1];
	const z = p[2] - o[2];
	const c = Math.cos(ang);
	const s = Math.sin(ang);
	return [p[0], o[1] + y * c - z * s, o[2] + y * s + z * c];
};

export type Camera = {target: V3; yaw: number; pitch: number; dist: number; focal: number; cx: number; cy: number};

export type Projected = {x: number; y: number; d: number};

export const makeProjector = (cam: Camera) => {
	const cp = Math.cos(cam.pitch);
	// yaw 0: the camera sits on the cabin side (−z), looking outboard (+z)
	const eye: V3 = add(cam.target, [Math.sin(cam.yaw) * cp * cam.dist, Math.sin(cam.pitch) * cam.dist, -Math.cos(cam.yaw) * cp * cam.dist]);
	const fwd = norm(sub(cam.target, eye));
	const right = norm(cross(fwd, [0, 1, 0]));
	const up = cross(right, fwd);
	const project = (p: V3): Projected => {
		const v = sub(p, eye);
		const d = dot(v, fwd);
		const k = cam.focal / Math.max(1, d);
		return {x: cam.cx - dot(v, right) * k, y: cam.cy - dot(v, up) * k, d};
	};
	return {project, eye, fwd};
};

export type Face = {
	pts: V3[];
	holes?: V3[][];
	fill: string;
	stroke: string;
	strokeWidth?: number;
	opacity?: number;
	/** layer bias: higher draws later at equal depth */
	bias?: number;
	group?: string;
};

export type Line = {a: V3; b: V3; stroke: string; width?: number; dash?: string; opacity?: number; bias?: number};

/** An axis-aligned box as 6 faces. */
export const box = (min: V3, max: V3, fill: string, stroke: string, extra: Partial<Face> = {}): Face[] => {
	const [x0, y0, z0] = min;
	const [x1, y1, z1] = max;
	const q = (a: V3, b: V3, c: V3, d: V3): Face => ({pts: [a, b, c, d], fill, stroke, ...extra});
	return [
		q([x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0]),
		q([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]),
		q([x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [x0, y0, z1]),
		q([x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]),
		q([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]),
		q([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]),
	];
};

/** A rounded rectangle outline in the x–y plane at depth z (n points per corner). */
export const roundedRect = (cx: number, cy: number, w: number, h: number, r: number, z: number, n = 6): V3[] => {
	const pts: V3[] = [];
	const corners: [number, number, number][] = [
		[cx + w / 2 - r, cy + h / 2 - r, 0],
		[cx - w / 2 + r, cy + h / 2 - r, Math.PI / 2],
		[cx - w / 2 + r, cy - h / 2 + r, Math.PI],
		[cx + w / 2 - r, cy - h / 2 + r, (3 * Math.PI) / 2],
	];
	for (const [x, y, a0] of corners) {
		for (let i = 0; i <= n; i++) {
			const a = a0 + (i / n) * (Math.PI / 2);
			pts.push([x + r * Math.cos(a), y + r * Math.sin(a), z]);
		}
	}
	return pts;
};

/** Extrude a closed outline between z0 and z1: two caps and the side walls. */
export const extrude = (outline: (z: number) => V3[], z0: number, z1: number, fill: string, stroke: string, holes: ((z: number) => V3[])[] = [], extra: Partial<Face> = {}): Face[] => {
	const a = outline(z0);
	const b = outline(z1);
	const faces: Face[] = [
		{pts: a, holes: holes.map((h) => h(z0)), fill, stroke, ...extra},
		{pts: b, holes: holes.map((h) => h(z1)), fill, stroke, ...extra},
	];
	for (let i = 0; i < a.length; i++) {
		const j = (i + 1) % a.length;
		faces.push({pts: [a[i], a[j], b[j], b[i]], fill, stroke: 'none', ...extra});
	}
	for (const h of holes) {
		const ha = h(z0);
		const hb = h(z1);
		for (let i = 0; i < ha.length; i++) {
			const j = (i + 1) % ha.length;
			faces.push({pts: [ha[i], ha[j], hb[j], hb[i]], fill, stroke: 'none', ...extra});
		}
	}
	return faces;
};

/** A cylinder along the x axis (bolts, pins, rollers), as a prism of n sides. */
export const cylX = (x0: number, x1: number, cy: number, cz: number, r: number, fill: string, stroke: string, n = 10, extra: Partial<Face> = {}): Face[] => {
	const ring = (x: number): V3[] => Array.from({length: n}, (_, i) => [x, cy + r * Math.cos((2 * Math.PI * i) / n), cz + r * Math.sin((2 * Math.PI * i) / n)] as V3);
	const a = ring(x0);
	const b = ring(x1);
	const faces: Face[] = [
		{pts: a, fill, stroke, ...extra},
		{pts: b, fill, stroke, ...extra},
	];
	for (let i = 0; i < n; i++) {
		const j = (i + 1) % n;
		faces.push({pts: [a[i], a[j], b[j], b[i]], fill, stroke: 'none', ...extra});
	}
	return faces;
};

export const mapFaces = (faces: Face[], fn: (p: V3) => V3): Face[] => faces.map((f) => ({...f, pts: f.pts.map(fn), holes: f.holes?.map((h) => h.map(fn))}));

const hexToRgb = (hex: string): [number, number, number] => {
	const h = hex.replace('#', '');
	return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
};

/** Flat shading: a face lit from the cabin-side upper left, never fully dark. */
export const shade = (fill: string, n: V3, light: V3 = norm([-0.4, 0.7, -0.6])): string => {
	if (!fill.startsWith('#')) return fill;
	const k = 0.62 + 0.38 * Math.abs(dot(n, light));
	const [r, g, b] = hexToRgb(fill);
	return `rgb(${Math.round(r * k)},${Math.round(g * k)},${Math.round(b * k)})`;
};

export type Drawn = {key: string; d: string; fill: string; stroke: string; strokeWidth: number; opacity: number; dash?: string; depth: number};

/** Project, cull nothing (thin parts must stay visible), painter-sort far → near. */
export const render = (cam: Camera, faces: Face[], lines: Line[] = []): Drawn[] => {
	const {project, eye} = makeProjector(cam);
	const out: Drawn[] = [];
	faces.forEach((f, i) => {
		const pp = f.pts.map(project);
		if (pp.some((p) => p.d <= 1)) return;
		const path = (ps: Projected[]) => `M${ps.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join('L')}Z`;
		let d = path(pp);
		for (const h of f.holes ?? []) d += path(h.map(project));
		const c = f.pts.reduce<V3>((acc, p) => add(acc, p), [0, 0, 0]);
		const centre = mul(c, 1 / f.pts.length);
		const nrm = norm(cross(sub(f.pts[1], f.pts[0]), sub(f.pts[2], f.pts[0])));
		const depth = Math.hypot(...sub(centre, eye)) - (f.bias ?? 0);
		out.push({key: `f${i}`, d, fill: shade(f.fill, nrm), stroke: f.stroke, strokeWidth: f.strokeWidth ?? 1.2, opacity: f.opacity ?? 1, depth});
	});
	lines.forEach((l, i) => {
		const a = project(l.a);
		const b = project(l.b);
		if (a.d <= 1 || b.d <= 1) return;
		const mid = mul(add(l.a, l.b), 0.5);
		out.push({key: `l${i}`, d: `M${a.x.toFixed(1)},${a.y.toFixed(1)}L${b.x.toFixed(1)},${b.y.toFixed(1)}`, fill: 'none', stroke: l.stroke, strokeWidth: l.width ?? 1.4, opacity: l.opacity ?? 1, dash: l.dash, depth: Math.hypot(...sub(mid, eye)) - (l.bias ?? 0)});
	});
	return out.sort((p, q) => q.depth - p.depth);
};

export const projectPoint = (cam: Camera, p: V3): Projected => makeProjector(cam).project(p);
