#!/usr/bin/env node
// Render many stills of one composition from a single bundle (PLAYBOOK §10 loop: stills at key frames → look →
// fix). Usage: node scripts/stills.mjs COMP OUT_DIR FRAME[,FRAME…] [--scale 0.5]
// Uses the pre-installed headless shell (Remotion's own browser download is blocked in the session).
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const req = createRequire(path.resolve('package.json'));
const {bundle} = req('@remotion/bundler');
const {selectComposition, renderStill, openBrowser} = req('@remotion/renderer');
const [comp, out, list, ...rest] = process.argv.slice(2);
const scale = rest.includes('--scale') ? Number(rest[rest.indexOf('--scale') + 1]) : 0.5;
const exe = process.env.REMOTION_BROWSER ?? '/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell';
fs.mkdirSync(out, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts'), webpackOverride: (c) => c});
const browser = await openBrowser('chrome', {browserExecutable: exe, chromiumOptions: {gl: 'swangle'}});
const composition = await selectComposition({serveUrl, id: comp, puppeteerInstance: browser});
const failed = [];
for (const fr of list.split(',').map(Number)) {
	const file = path.join(out, `f${String(fr).padStart(6, '0')}.jpg`);
	try {
		await renderStill({composition, serveUrl, frame: fr, output: file, scale, imageFormat: 'jpeg', jpegQuality: 85, puppeteerInstance: browser});
		process.stdout.write(`${fr} `);
	} catch (e) {
		// keep going: one broken scene must not hide the others (the list of failures is the point of a sweep)
		failed.push(`${fr}: ${String(e?.message ?? e).split('\n')[0]}`);
	}
}
if (failed.length) console.log(`\nFAILED ${failed.length}:\n${failed.join('\n')}`);
await browser.close({silent: true});
console.log('done');
if (failed.length) process.exit(1);
