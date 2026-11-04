#!/usr/bin/env node
// Channel art, code-built (PLAYBOOK §6.2): avatar, banner, watermark and logo lockup for each mark concept.
//   node scripts/brand_art.mjs [OUT_DIR]        (default assets/brand)
// Colours from config/brand.yaml via lib/remotion/brand.ts tokens (kept in sync by hand here: one table below).
// Fonts are the vendored OFL files in public/fonts. Rendered with the pre-installed Chromium (Playwright).
// YouTube specs (Help Center, 2026): profile 800x800 shown as a circle down to ~36 px; banner 2560x1440, safe area
// 1546x423 centred, under 6 MB; watermark 150x150 PNG under 1 MB.
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const require = createRequire(import.meta.url);
const {chromium} = require('playwright'); // pre-installed in the cloud image (resolved globally)
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.resolve(process.argv[2] ?? path.join(ROOT, 'assets/brand'));
fs.mkdirSync(OUT, {recursive: true});

const C = {void: '#0a0d12', card: '#121824', border: '#1e293b', grid: '#e2e8f0', ink: '#e5e7eb', sub: '#94a3b8',
	cyan: '#38bdf8', amber: '#f59e0b', red: '#ef4444'};
const font = (f) => `file://${ROOT}/public/fonts/${f}`;
const CSS = `
@font-face{font-family:Inter;font-weight:700;src:url(${font('Inter-700.woff2')})}
@font-face{font-family:Inter;font-weight:600;src:url(${font('Inter-600.woff2')})}
@font-face{font-family:JBM;font-weight:500;src:url(${font('JetBrainsMono-500.woff2')})}
@font-face{font-family:JBM;font-weight:700;src:url(${font('JetBrainsMono-700.woff2')})}
html,body{margin:0;padding:0;background:transparent}svg{display:block}`;

// ---- the three marks, each drawn in a 0..800 box ---------------------------------------------------------------
const polar = (cx, cy, r, deg) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)];
const arc = (cx, cy, r, a0, a1) => {
	const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
	return `M${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

// A, REDLINE: a gauge whose needle sits in the last amber band before the red. The margin is the gap you can see.
const markRedline = () => {
	const cx = 400, cy = 462, r = 268, w = 62;
	const ticks = [];
	for (let a = -120; a <= 120; a += 20) {
		const [x0, y0] = polar(cx, cy, r - w / 2 - 22, a), [x1, y1] = polar(cx, cy, r - w / 2 - 50, a);
		ticks.push(`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="${C.sub}" stroke-width="10" stroke-linecap="butt"/>`);
	}
	const [nx, ny] = polar(cx, cy, r - 18, 66);
	const [bx, by] = polar(cx, cy, 70, 66 + 180);
	return `
	<path d="${arc(cx, cy, r, -120, 40)}" stroke="${C.cyan}" stroke-width="${w}" fill="none"/>
	<path d="${arc(cx, cy, r, 43, 78)}" stroke="${C.amber}" stroke-width="${w}" fill="none"/>
	<path d="${arc(cx, cy, r, 81, 120)}" stroke="${C.red}" stroke-width="${w}" fill="none"/>
	${ticks.join('')}
	<line x1="${bx}" y1="${by}" x2="${nx}" y2="${ny}" stroke="${C.ink}" stroke-width="24" stroke-linecap="round"/>
	<circle cx="${cx}" cy="${cy}" r="46" fill="${C.ink}"/><circle cx="${cx}" cy="${cy}" r="18" fill="${C.void}"/>`;
};

// B, TRACE: the letter M drawn as a load trace under a dashed limit. The first peak stops short of the limit (the
// margin you can see); the second goes through it, and what is past the limit is red.
const markTrace = () => {
	const lim = 232, w = 66;
	const d = 'M150 676 L272 304 L400 530 L528 120 L650 676';
	return `
	<defs><clipPath id="past"><rect x="0" y="0" width="800" height="${lim}"/></clipPath></defs>
	<path d="${d}" stroke="${C.cyan}" stroke-width="${w}" fill="none" stroke-linejoin="round"/>
	<path d="${d}" stroke="${C.red}" stroke-width="${w}" fill="none" stroke-linejoin="round" clip-path="url(#past)"/>
	<line x1="90" y1="${lim}" x2="710" y2="${lim}" stroke="${C.amber}" stroke-width="16" stroke-dasharray="34 20"/>`;
};

// C, TOLERANCE: the plus-minus sign of a margin of error and an engineering tolerance; the minus bar has fractured.
const markTolerance = () => {
	const bw = 78, xL = 190, xR = 610, py = 300, arm = 210;
	const y0 = 600, y1 = y0 + bw;
	const crack = [[412, y0], [386, y0 + 20], [420, y0 + 40], [394, y0 + 60], [414, y1]];
	const left = `M${xL} ${y0} L${crack.map((p) => p.join(' ')).join(' L')} L${xL} ${y1} Z`;
	const dx = 30, dy = 22;
	const right = `M${crack.map(([x, y]) => `${x + dx} ${y + dy}`).join(' L')} L${xR + dx} ${y1 + dy} L${xR + dx} ${y0 + dy} Z`;
	return `<g transform="translate(-10 -40)">
	<rect x="${xL}" y="${py - bw / 2}" width="${xR - xL}" height="${bw}" fill="${C.cyan}"/>
	<rect x="${400 - bw / 2}" y="${py - arm}" width="${bw}" height="${2 * arm}" fill="${C.cyan}"/>
	<path d="${left}" fill="${C.red}"/><path d="${right}" fill="${C.red}"/></g>`;
};
const MARKS = {
	a_redline: {name: 'REDLINE', draw: markRedline},
	b_trace: {name: 'TRACE', draw: markTrace},
	c_tolerance: {name: 'TOLERANCE', draw: markTolerance},
};

const grid = (w, h, step, op = 0.05, ox = 0, oy = 0) => {
	let s = '';
	for (let x = ox; x <= w; x += step) s += `<line x1="${x}" y1="0" x2="${x}" y2="${h}"/>`;
	for (let y = oy; y <= h; y += step) s += `<line x1="0" y1="${y}" x2="${w}" y2="${y}"/>`;
	return `<g stroke="${C.grid}" stroke-opacity="${op}" stroke-width="2">${s}</g>`;
};
const pool = (id, cx, cy, r) => `<defs><radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" gradientUnits="userSpaceOnUse">
	<stop offset="0" stop-color="${C.card}"/><stop offset="1" stop-color="${C.void}"/></radialGradient></defs>`;

// ---- assets -----------------------------------------------------------------------------------------------------
const avatar = (m) => `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
	${pool('p', 400, 400, 520)}<rect width="800" height="800" fill="url(#p)"/>${grid(800, 800, 80, 0.05)}
	<g transform="translate(400 400) scale(0.78) translate(-400 -400)">${m.draw()}</g></svg>`;

const watermark = (m) => `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 800 800">
	<rect x="10" y="10" width="780" height="780" rx="90" fill="${C.void}" fill-opacity="0.82" stroke="${C.border}" stroke-width="14"/>
	<g transform="translate(400 400) scale(0.80) translate(-400 -400)">${m.draw()}</g></svg>`;

const lockup = (m) => `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="600" viewBox="0 0 2400 600">
	<g transform="translate(40 50) scale(0.625)">${m.draw()}</g>
	<text x="620" y="318" font-family="Inter" font-weight="700" font-size="150" letter-spacing="13" fill="${C.ink}">MARGIN OF ERROR</text>
	<text x="626" y="420" font-family="JBM" font-weight="500" font-size="50" letter-spacing="1" fill="${C.sub}">Where accounting meets the laws of physics.</text></svg>`;

const banner = (m) => {
	const W = 2560, H = 1440, sx = (W - 1546) / 2, sy = (H - 423) / 2; // safe area 507..2053 x 508..931
	// The trace runs the full width along the bottom of the visible strip: nominal, drifting, through the limit, cut
	// off at the safe area's right edge so every device sees the whole story.
	const lim = 862, base = 908, end = 2010;
	const pts = [];
	for (let x = 0; x <= end; x += 8) {
		const drift = x < 1150 ? 0 : Math.pow((x - 1150) / (end - 1150), 2) * 74;
		const wob = 5 * Math.sin(x / 41) + 3 * Math.sin(x / 14.3) + 1.6 * Math.sin(x / 5.3);
		pts.push([x, base - drift + wob * (1 + drift / 50)]);
	}
	const cross = pts.findIndex(([, y]) => y < lim);
	const amb = pts.findIndex(([x]) => x >= 1450);
	const seg = (i, j) => 'M' + pts.slice(i, j).map(([x, y]) => `${x} ${y.toFixed(1)}`).join(' L');
	const [ex, ey] = pts[pts.length - 1];
	const gx = 555, tx = gx + 250; // mark, then the type
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
	${pool('p', 1280, 700, 1500)}<rect width="${W}" height="${H}" fill="url(#p)"/>${grid(W, H, 80, 0.05)}
	<line x1="0" y1="${lim}" x2="${W}" y2="${lim}" stroke="${C.amber}" stroke-width="3" stroke-dasharray="18 12"/>
	<text x="${sx + 8}" y="${lim - 14}" font-family="JBM" font-weight="700" font-size="26" letter-spacing="3" fill="${C.amber}">LIMIT</text>
	<path d="${seg(0, amb + 1)}" stroke="${C.cyan}" stroke-width="5" fill="none" stroke-linejoin="round"/>
	<path d="${seg(amb, cross + 1)}" stroke="${C.amber}" stroke-width="5" fill="none" stroke-linejoin="round"/>
	<path d="${seg(cross, pts.length)}" stroke="${C.red}" stroke-width="5" fill="none" stroke-linejoin="round"/>
	<circle cx="${ex}" cy="${ey.toFixed(1)}" r="9" fill="${C.red}"/>
	<line x1="${ex + 22}" y1="${ey - 30}" x2="${ex + 22}" y2="${ey + 30}" stroke="${C.red}" stroke-width="5"/>
	<g transform="translate(${gx} ${sy + 12}) scale(0.27)">${m.draw()}</g>
	<text x="${tx}" y="${sy + 74}" font-family="JBM" font-weight="700" font-size="27" letter-spacing="4" fill="${C.cyan}">FORENSIC INVESTIGATIONS OF ENGINEERING FAILURES</text>
	<text x="${tx - 6}" y="${sy + 192}" font-family="Inter" font-weight="700" font-size="116" letter-spacing="7" fill="${C.ink}">MARGIN OF ERROR</text>
	<text x="${tx}" y="${sy + 262}" font-family="JBM" font-weight="500" font-size="42" fill="${C.sub}">Where accounting meets the laws of physics.</text>
	</svg>`;
};

// ---- render -----------------------------------------------------------------------------------------------------
const browser = await chromium.launch();
const page = await browser.newPage();
const shoot = async (svg, w, h, file, transparent = false) => {
	await page.setViewportSize({width: w, height: h});
	const html = path.join(OUT, '_page.html');
	fs.writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>${CSS}</style>${svg}`);
	await page.goto('file://' + html);
	await page.evaluate(() => document.fonts.ready);
	await page.screenshot({path: path.join(OUT, file), omitBackground: transparent, type: file.endsWith('.jpg') ? 'jpeg' : 'png', quality: file.endsWith('.jpg') ? 95 : undefined});
};
for (const [key, m] of Object.entries(MARKS)) {
	await shoot(avatar(m), 800, 800, `${key}_avatar_800.png`);
	await shoot(watermark(m), 150, 150, `${key}_watermark_150.png`, true);
	await shoot(lockup(m), 2400, 600, `${key}_logo_lockup.png`, true);
	await shoot(banner(m), 2560, 1440, `${key}_banner_2560x1440.jpg`);
}
fs.rmSync(path.join(OUT, '_page.html'));
await browser.close();
console.log('wrote', OUT);
