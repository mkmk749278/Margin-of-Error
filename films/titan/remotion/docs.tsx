import React from 'react';
import {Img} from 'remotion';
import {Exhibit, Rect} from '../../../lib/remotion/Exhibit';
import cg098 from './data/cg098_phrases.json';
import cg100 from './data/cg100_phrases.json';
import cg112 from './data/cg112_phrases.json';
import roi from './data/roi_phrases.json';
import mir from './data/mir_phrases.json';
import {Fade, media} from './kit';

// Real documents as exhibits (PLAYBOOK §9.5): record pages rendered 1870 px wide (1870 × 2420). Highlights land on
// located words (scripts/page_phrases.py, specs beside the phrase files), never on guessed boxes.

type Phrase = {page: number; rects: Rect[]};
type PhraseSet = Record<string, Phrase>;

const SETS = {
	cg098: {phrases: cg098 as PhraseSet, file: (p: number) => `cg098_p${String(p).padStart(3, '0')}`, source: (p: number) => `MBI EXHIBIT CG-098 · QUALITY INSPECTION REPORT · P. ${p}`},
	cg100: {phrases: cg100 as PhraseSet, file: (p: number) => `cg100_p${String(p).padStart(3, '0')}`, source: (p: number) => `MBI EXHIBIT CG-100 · TRANSCRIPT OF THE RECORDED 19 JAN 2018 MEETING · P. ${p}`},
	// CG 112: the printed page number is the PDF page minus one
	cg112: {phrases: cg112 as PhraseSet, file: (p: number) => `cg112_p${String(p).padStart(4, '0')}`, source: (p: number) => `MBI EXHIBIT CG 112 · HEARING TRANSCRIPT · P. ${p - 1}`},
	roi: {phrases: roi as PhraseSet, file: (p: number) => `roi_p${String(p).padStart(3, '0')}`, source: (p: number) => `USCG MARINE BOARD · REPORT OF INVESTIGATION · P. ${p - 8}`},
	mir: {phrases: mir as PhraseSet, file: (p: number) => `mir_p${String(p).padStart(3, '0')}`, source: (p: number) => `NTSB MIR-25-36 · P. ${p - 8}`},
} as const;
export type DocSet = keyof typeof SETS;

const union = (rs: Rect[], padX: number, padY: number): Rect => {
	const x0 = Math.min(...rs.map((r) => r.x)) - padX;
	const y0 = Math.min(...rs.map((r) => r.y)) - padY;
	const x1 = Math.max(...rs.map((r) => r.x + r.w)) + padX;
	const y1 = Math.max(...rs.map((r) => r.y + r.h)) + padY;
	return {x: x0, y: y0, w: x1 - x0, h: y1 - y0};
};

/** A highlighted phrase: its line rects draw in turn from `at` (completing near the word), or each on its own frame in `ats`. */
export type HL = {key: string; at: number; ats?: number[]};

export const phraseOf = (set: DocSet, key: string): Phrase => {
	const p = SETS[set].phrases[key];
	if (!p) throw new Error(`docs: no phrase ${key} in ${set}`);
	return p;
};

/**
 * A record page: slides on at `start`, pulls in to the union of its highlighted phrases (or `focus`), draws them on
 * their words. `title` follows the page id on the source strip.
 */
export const RecordPage: React.FC<{set: DocSet; start: number; end: number; hl: HL[]; label: string; title?: string; page?: number; pushTo?: number; pad?: [number, number]; focus?: Rect}> = ({
	set,
	start,
	end,
	hl,
	label,
	title,
	page,
	pushTo,
	pad = [120, 160],
	focus,
}) => {
	const S = SETS[set];
	const pg = page ?? (hl.length ? phraseOf(set, hl[0].key).page : 1);
	const rects = hl.flatMap((h) => phraseOf(set, h.key).rects);
	const u = rects.length ? union(rects, pad[0], pad[1]) : {x: 150, y: 200, w: 1570, h: 900};
	const highlights = hl.flatMap((h) => phraseOf(set, h.key).rects.map((r, i) => ({...r, start: h.ats?.[i] ?? h.at - 15 + i * 22, draw: 26})));
	const source = title ? `${S.source(pg)} · ${title}` : S.source(pg);
	const fc = focus ?? {x: 150, w: 1570, y: u.y, h: Math.max(u.h, 420)};
	return (
		<Fade start={start} end={end}>
			<Exhibit page={{w: 1870, h: 2420}} start={start} push={{from: start + 12, to: pushTo ?? start + 110, focus: fc}} highlights={highlights} label={label} source={source}>
				<Img src={media(`pages/${S.file(pg)}.jpg`)} style={{width: 1870, height: 2420}} />
			</Exhibit>
		</Fade>
	);
};
