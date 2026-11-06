#!/usr/bin/env node
// Shoot the real filing / release text as an exhibit image (PLAYBOOK §9.5: real documents shown as they are, never
// retyped). Each spec entry opens a local copy of the record (SEC EDGAR .htm, FAA release .html), finds the phrases
// with the browser's own text search, and saves a crop around them plus the phrase rectangles for the highlighter.
//   node scripts/doc_shots.mjs SPEC.json OUT_DIR    (writes OUT_DIR/<key>.png and OUT_DIR/docs.json)
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const {chromium} = require('playwright');
import fs from 'node:fs';
import path from 'node:path';

const [specPath, outDir] = process.argv.slice(2);
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const browser = await chromium.launch();
const out = {};
for (const [key, s] of Object.entries(spec)) {
	const page = await browser.newPage({viewport: {width: s.width ?? 1000, height: 1200}, deviceScaleFactor: 2, javaScriptEnabled: false});
	await page.goto('file://' + path.resolve(s.file), {waitUntil: 'domcontentloaded', timeout: 120000});
	await page.evaluate((css) => {
		const st = document.createElement('style');
		st.textContent = 'body{background:#fff !important; margin:40px 48px !important;} img,svg,nav,header,footer{display:none !important;}' + (css || '');
		document.head.appendChild(st);
	}, s.css ?? '');
	// non-breaking spaces (iXBRL filings put one between a number and "million") defeat window.find; they render the
	// same as a space, so the words shown are unchanged
	await page.evaluate(() => {
		const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
		for (let n = w.nextNode(); n; n = w.nextNode()) if (n.nodeValue.includes('\u00a0')) n.nodeValue = n.nodeValue.replace(/\u00a0/g, ' ');
	});
	const rects = [];
	for (const phrase of s.phrases) {
		const r = await page.evaluate((p) => {
			window.getSelection().removeAllRanges();
			if (!window.find(p, true, false, true)) return null;
			const rg = window.getSelection().getRangeAt(0);
			const sx = window.scrollX, sy = window.scrollY;
			return Array.from(rg.getClientRects()).map((c) => ({x: c.x + sx, y: c.y + sy, w: c.width, h: c.height}));
		}, phrase);
		if (!r || !r.length) throw new Error(`${key}: phrase not found: ${phrase}`);
		rects.push(r);
	}
	await page.evaluate(() => window.getSelection().removeAllRanges());
	const all = rects.flat();
	const top = Math.max(0, Math.min(...all.map((r) => r.y)) - (s.above ?? 260));
	const bottom = Math.max(...all.map((r) => r.y + r.h)) + (s.below ?? 260);
	const W = s.width ?? 1000;
	const H = Math.round(bottom - top);
	// scroll the crop to the top of a viewport exactly its size: no full-page screenshot of a 5 MB filing
	await page.setViewportSize({width: W, height: Math.min(4000, H)});
	await page.evaluate((y) => window.scrollTo(0, y), top);
	const sy = await page.evaluate(() => window.scrollY);
	const clip = {x: 0, y: top - sy, width: W, height: Math.min(4000, H)};
	const file = path.join(outDir, `${key}.png`);
	await page.screenshot({path: file, clip, timeout: 120000, animations: 'disabled', caret: 'hide'});
	const shift = sy;
	// merge rects per line (same y), in clip pixels at deviceScaleFactor 2
	out[key] = {
		file: `${key}.png`, w: W * 2, h: Math.round(clip.height * 2),
		highlights: rects.map((rs) => rs.filter((r) => r.w > 2).map((r) => ({x: Math.round(r.x * 2) - 4, y: Math.round((r.y - top) * 2) - 3 + 0 * shift, w: Math.round(r.w * 2) + 8, h: Math.round(r.h * 2) + 6}))),
	};
	await page.close();
	console.log(key, out[key].w, out[key].h, rects.length);
}
fs.writeFileSync(path.join(outDir, 'docs.json'), JSON.stringify(out, null, 1));
await browser.close();
