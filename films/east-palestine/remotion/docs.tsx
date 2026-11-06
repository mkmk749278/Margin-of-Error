import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {Exhibit, Rect} from '../../../lib/remotion/Exhibit';
import rir from './data/rir_phrases.json';
import hearing from './data/hearing_phrases.json';
import rule from './data/rule_phrases.json';
import er from './data/er_phrases.json';
import crs from './data/crs_phrases.json';
import recs from './data/recs_phrases.json';
import decree from './data/decree_phrases.json';
import classfund from './data/classfund_phrases.json';
import docs from './data/docs.json';
import {Fade, media} from './kit';

// Real documents as exhibits (PLAYBOOK §9.5): record pages rendered at 220 dpi (1870 × 2420) and filings shot from
// their own HTML. Highlights land on the located words (scripts/page_phrases.py, scripts/doc_shots.mjs), keyed by
// claims.csv id, never on guessed boxes.

type Phrase = {page: number; rects: Rect[]};
type PhraseSet = Record<string, Phrase>;

const roman = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv'];

/** Each record: its page images, its phrases, and how a pdf page becomes the page number printed on it. */
const SETS = {
	rir: {
		phrases: rir as PhraseSet,
		prefix: 'rir',
		source: (p: number) => `NTSB RIR-24-05 · ${p === 1 ? 'COVER' : p - 15 > 0 ? `P. ${p - 15}` : `P. ${roman[p - 1] ?? p}`.toUpperCase()}`,
	},
	hearing: {phrases: hearing as PhraseSet, prefix: 'hearing', source: (p: number) => `NTSB HEARING TRANSCRIPT · DAY 2 · 23 JUN 2023 · P. ${p + 174}`},
	rule: {phrases: rule as PhraseSet, prefix: 'rule', source: () => 'NS OPERATING RULE 147 · NTSB DOCKET ITEM 68'},
	er: {phrases: er as PhraseSet, prefix: 'er', source: (p: number) => `NTSB EVENT RECORDERS FACTUAL REPORT · P. ${p}`},
	crs: {phrases: crs as PhraseSet, prefix: 'crs', source: (p: number) => `CRS R47911 · 24 JUL 2026 · P. ${p - 3}`},
	recs: {phrases: recs as PhraseSet, prefix: 'recs', source: () => 'NTSB RECOMMENDATION STATUS · 03 FEB 2025'},
	decree: {phrases: decree as PhraseSet, prefix: 'decree', source: (p: number) => `N.D. OHIO 4:23-CV-517 · DOC. 301 · P. ${p}`},
	classfund: {phrases: classfund as PhraseSet, prefix: 'classfund', source: (p: number) => `N.D. OHIO 4:23-CV-242 · DOC. 1053 · P. ${p}`},
} as const;
export type DocSet = keyof typeof SETS;

const union = (rs: Rect[], padX: number, padY: number): Rect => {
	const x0 = Math.min(...rs.map((r) => r.x)) - padX;
	const y0 = Math.min(...rs.map((r) => r.y)) - padY;
	const x1 = Math.max(...rs.map((r) => r.x + r.w)) + padX;
	const y1 = Math.max(...rs.map((r) => r.y + r.h)) + padY;
	return {x: x0, y: y0, w: x1 - x0, h: y1 - y0};
};

/** A highlighted phrase (claims.csv id): its line rects draw in turn from `at`, or each on its own word frame in `ats`. */
export type HL = {key: string; at: number; ats?: number[]};

export const phraseOf = (set: DocSet, key: string): Phrase => {
	const p = SETS[set].phrases[key];
	if (!p) throw new Error(`docs: no phrase ${key} in ${set}`);
	return p;
};

/**
 * A record page: slides on at `start`, pushes in to the union of its highlighted phrases, draws them on their words.
 * `page` defaults to the first highlight's page. `title` follows the page number on the source strip.
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
				<Img src={media(`pages/${S.prefix}_p${String(pg).padStart(3, '0')}.jpg`)} style={{width: 1870, height: 2420}} />
			</Exhibit>
		</Fade>
	);
};

type DocKey = keyof typeof docs;

/** A filing or release, rendered from the record's own HTML, on the same desk pose as the scans. */
export const RecordDoc: React.FC<{doc: DocKey; start: number; end: number; at: number[]; label: string; source: string; pushTo?: number}> = ({doc, start, end, at, label, source, pushTo}) => {
	const d = docs[doc];
	const rects = d.highlights.flat();
	const u = union(rects, 0, 200);
	const focus = {x: 30, w: d.w - 60, y: u.y, h: Math.max(u.h, 400)};
	const highlights = d.highlights.flatMap((hs, k) => hs.map((r, i) => ({...r, start: (at[k] ?? at[0]) - 15 + i * 20, draw: 28})));
	return (
		<Fade start={start} end={end}>
			<Exhibit page={{w: d.w, h: d.h}} start={start} push={{from: start + 12, to: pushTo ?? start + 110, focus}} highlights={highlights} label={label} source={source}>
				<div style={{width: d.w, height: d.h, background: colors.paper, position: 'relative'}}>
					<Img src={media(`docs/${d.file}`)} style={{width: d.w, height: d.h, mixBlendMode: 'multiply'}} />
				</div>
			</Exhibit>
		</Fade>
	);
};

/** A dark scrim over the desk, for an exhibit that sits behind a readout. */
export const Scrim: React.FC<{o?: number}> = ({o = 0.7}) => <AbsoluteFill style={{background: `rgba(10,13,18,${o})`}} />;
