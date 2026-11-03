import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {Exhibit, Rect} from '../../../lib/remotion/Exhibit';
import docs from './data/docs.json';
import phrases from './data/phrases.json';
import {Fade, media} from './kit';

// Real documents as exhibits (PLAYBOOK §9.5): NTSB report pages (rendered from AIR2504.pdf at 220 dpi) and the
// filings / release (rendered from their own HTML). Highlights land on the located words (scripts/page_phrases.py,
// scripts/doc_shots.mjs), never on guessed boxes.

type PhraseKey = keyof typeof phrases;
type DocKey = keyof typeof docs;

const PAGE_FILES: Record<number, string> = {
	1: 'pages/p001_title.jpg',
	47: 'pages/p047_design_capability.jpg',
	62: 'pages/p062_sat_entries.jpg',
	66: 'pages/p066_fn60_briefing.jpg',
	67: 'pages/p067_qa_signoff.jpg',
	71: 'pages/p071_workforce.jpg',
	76: 'pages/p076_bpi_50_pages.jpg',
	134: 'pages/p134_findings_20_21.jpg',
	135: 'pages/p135_finding_27.jpg',
	136: 'pages/p136_probable_cause.jpg',
};
/** printed report page number = pdf page − 14 */
export const reportPage = (pdf: number): number => pdf - 14;

const union = (rs: Rect[], padX: number, padY: number): Rect => {
	const x0 = Math.min(...rs.map((r) => r.x)) - padX;
	const y0 = Math.min(...rs.map((r) => r.y)) - padY;
	const x1 = Math.max(...rs.map((r) => r.x + r.w)) + padX;
	const y1 = Math.max(...rs.map((r) => r.y + r.h)) + padY;
	return {x: x0, y: y0, w: x1 - x0, h: y1 - y0};
};

export type HL = {key: PhraseKey; at: number};

/** An NTSB report page: slides on at `start`, pushes in to the union of the highlighted phrases, draws them in turn. */
export const ReportPage: React.FC<{page: number; start: number; end: number; hl: HL[]; label: string; title: string; pushTo?: number; pad?: [number, number]; dim?: boolean}> = ({page, start, end, hl, label, title, pushTo, pad = [120, 160], dim = false}) => {
	const rects = hl.flatMap((h) => phrases[h.key].rects);
	const u = union(rects, pad[0], pad[1]);
	// always the full text column: a push never cuts a line mid-word
	const focus = {x: 150, w: 1570, y: u.y, h: Math.max(u.h, 420)};
	const highlights = hl.flatMap((h) => phrases[h.key].rects.map((r, i) => ({...r, start: h.at + i * 22, draw: 26})));
	return (
		<Fade start={start} end={end}>
			{dim ? <AbsoluteFill style={{background: 'rgba(10,13,18,0.7)'}} /> : null}
			<Exhibit page={{w: 1870, h: 2420}} start={start} push={{from: start + 12, to: pushTo ?? start + 110, focus}} highlights={highlights} label={label} source={`NTSB AIR-25-04 · P. ${reportPage(page)} · ${title}`}>
				<Img src={media(PAGE_FILES[page])} style={{width: 1870, height: 2420}} />
			</Exhibit>
		</Fade>
	);
};

/** A filing or release, rendered from the record's own HTML. */
export const RecordDoc: React.FC<{doc: DocKey; start: number; end: number; at: number[]; label: string; source: string; pushTo?: number}> = ({doc, start, end, at, label, source, pushTo}) => {
	const d = docs[doc];
	const rects = d.highlights.flat();
	const u = union(rects, 0, 200);
	const focus = {x: 30, w: d.w - 60, y: u.y, h: Math.max(u.h, 400)};
	const highlights = d.highlights.flatMap((hs, k) => hs.map((r, i) => ({...r, start: (at[k] ?? at[0]) + i * 20, draw: 28})));
	return (
		<Fade start={start} end={end}>
			<Exhibit page={{w: d.w, h: d.h}} start={start} push={{from: start + 12, to: pushTo ?? start + 110, focus}} highlights={highlights} label={label} source={source}>
				<div style={{width: d.w, height: d.h, background: '#fff'}}>
					<Img src={media(`docs/${d.file}`)} style={{width: d.w, height: d.h}} />
				</div>
			</Exhibit>
		</Fade>
	);
};

export const paperInk = colors.paper_ink;
