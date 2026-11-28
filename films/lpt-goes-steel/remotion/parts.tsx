import React from 'react';
import {Img, interpolate, OffthreadVideo, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {bump, flash, LAND, lead} from '../../../lib/remotion/Kinetic';
import {Exhibit, Rect} from '../../../lib/remotion/Exhibit';
import {ease, glide, tween} from '../../../lib/remotion/motion';
import {LAMP, media, mono, sans} from './kit';
import pages from './data/pages.json';
import timing from '../vo/timing.json';
import clipWords from './data/clip_words.json';
import {Backdrop, backdropFor, BrollId} from './footage';

// The transformer-steel film's shared parts. Scenes use ABSOLUTE film frames (timing.ts wf()); every component takes
// `f` (the frame) or reads useCurrentFrame() directly: scenes are not wrapped in Sequences.

export {mono, sans};
export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});
/** 0→1 between two frames, eased (a span of motion that is not a word landing). */
export const span = (f: number, a: number, b: number): number => tween(f, a, b, 0, 1, ease.camera);
/** Visible from `a` (arrives on it) until `b` (leaves after it). */
export const vis = (f: number, a: number, b: number, inF = 12, outF = 14): number => Math.min(lead(f, a, inF), 1 - interpolate(f, [b, b + outF], [0, 1], clamp));
/** Text takes the light on its word. */
export const lit = (f: number, on: number, tone: string = colors.ink, base: string = colors.sub): React.CSSProperties => ({
	color: f >= on ? tone : base,
	textShadow: `0 0 ${(16 * flash(f, on, 0)).toFixed(1)}px ${tone}`,
});

/** A chip of honesty (PLAYBOOK §9.4) or a source. */
export const Chip: React.FC<{text: string; tone?: string; size?: number; style?: React.CSSProperties; o?: number}> = ({text, tone = colors.amber, size = 26, style, o = 1}) => (
	<span style={{display: 'inline-block', fontFamily: mono, fontSize: size, letterSpacing: 1.2, color: tone, border: `1px solid ${tone}`, background: 'rgba(10,13,18,0.88)', padding: '4px 10px 3px', whiteSpace: 'nowrap', opacity: o, ...style}}>{text}</span>
);

/** Pop: arrives on its word (rise + fade, completes on the word), then bumps. */
export const Pop: React.FC<{f: number; at: number; children: React.ReactNode; style?: React.CSSProperties; dur?: number; until?: number}> = ({f, at, children, style, dur = 9, until}) => {
	const {fps} = useVideoConfig();
	const k = Math.min(lead(f, at, dur), until === undefined ? 1 : 1 - interpolate(f, [until, until + 12], [0, 1], clamp));
	if (k <= 0) return null;
	return <div style={{position: 'absolute', opacity: k, transform: `translateY(${((1 - Math.min(1, k)) * 14).toFixed(1)}px) scale(${bump(f, fps, at + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 60%', ...style}}>{children}</div>;
};

/** A number that is the evidence: rolls through its keys and lands on its word (never jumps, PLAYBOOK §6.4). */
export const Num: React.FC<{f: number; keys: {frame: number; value: number}[]; fmt: (v: number) => string; size?: number; tone?: string; style?: React.CSSProperties; step?: boolean}> = ({f, keys, fmt, size = 96, tone = colors.ink, style, step}) => {
	const v = keys.length === 1 ? keys[0].value : interpolate(f, keys.map((k) => k.frame), keys.map((k) => k.value), {...clamp, easing: ease.camera});
	const landed = keys.findIndex((k, i) => i > 0 && f >= k.frame && f < k.frame + 24);
	const glow = landed > 0 ? flash(f, keys[landed].frame, 0) : 0;
	return <span style={{fontFamily: mono, fontWeight: 700, fontSize: size, color: tone, letterSpacing: 1, textShadow: `0 0 ${(22 * glow).toFixed(1)}px ${tone}`, fontVariantNumeric: 'tabular-nums', ...style}}>{fmt(step ? Math.round(v) : v)}</span>;
};
export const comma = (v: number): string => Math.round(v).toLocaleString('en-US');

/** The source strip along the bottom of a full-frame picture: date (amber), what it is, where it comes from. */
export const Strip: React.FC<{left?: string; what: string; source: string; o?: number}> = ({left, what, source, o = 1}) => (
	<div style={{position: 'absolute', left: 96, right: 96, bottom: 54, height: 58, display: 'flex', alignItems: 'center', gap: 16, opacity: o, ...T(26, {color: colors.ink}), whiteSpace: 'nowrap'}}>
		{left ? <span style={{color: colors.amber, fontWeight: 700}}>{left}</span> : null}
		<span style={/RECONSTRUCTION|ILLUSTRATION|ILLUSTRATIVE/.test(what) ? {fontSize: 36, fontWeight: 700} : undefined}>{what}</span>
		<span style={{marginLeft: 'auto', paddingLeft: 24}}>{source}</span>
	</div>
);

/** The fade at the bottom of a full-frame picture, so the strip reads on any image. */
export const BottomShade: React.FC<{o?: number}> = ({o = 1}) => <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 260, opacity: o, background: 'linear-gradient(to top, rgba(10,13,18,0.94), rgba(10,13,18,0))'}} />;

// ── Real documents (PLAYBOOK §9.5): every page rendered 1870 px wide from the record's own PDF; highlights on located
//    words (scripts/page_phrases.py), never guessed boxes ──────────────────────────────────────────────────────────────

import doe2024 from './data/doe2024_phrases.json';
import doe2014 from './data/doe2014_phrases.json';
import doe2022 from './data/doe2022_phrases.json';
import trancorh from './data/trancorh_phrases.json';
import doeOced from './data/doe_oced_phrases.json';
import cliffs2026 from './data/cliffs_2026_phrases.json';
import cliffs2025 from './data/cliffs_2025_phrases.json';
import cliffs2020 from './data/cliffs_2020_phrases.json';
import goes232 from './data/goes232_phrases.json';
import ustrMexico from './data/ustr_mexico_phrases.json';
import breakthrough from './data/breakthrough_phrases.json';
import jhuPaper from './data/jhu_paper_phrases.json';
import jhuHub from './data/jhu_hub_phrases.json';
import testimony from './data/testimony_phrases.json';
import fr2018 from './data/fr2018_phrases.json';
import fr2019 from './data/fr2019_phrases.json';
import fr2021 from './data/fr2021_phrases.json';
import fr2022 from './data/fr2022_phrases.json';
import fr2025 from './data/fr2025_phrases.json';
import fr2025jun from './data/fr2025jun_phrases.json';
import fr2026apr from './data/fr2026apr_phrases.json';
import crs from './data/crs_phrases.json';
import jointCanada from './data/joint_canada_phrases.json';
import hitachi from './data/hitachi_phrases.json';
import siemens from './data/siemens_phrases.json';
import hdhyundai from './data/hdhyundai_phrases.json';
import howard from './data/howard_phrases.json';
import cliffsFiling from './data/cliffs_filing_phrases.json';
import jointMexico from './data/joint_mexico_phrases.json';

type Phrase = {page: number; rects: Rect[]};
type PhraseSet = Record<string, Phrase>;
const DOCS = {
	doe2024: {p: doe2024 as PhraseSet, src: 'DOE · LARGE POWER TRANSFORMER RESILIENCE · REPORT TO CONGRESS · JUL 2024'},
	doe2014: {p: doe2014 as PhraseSet, src: 'DOE · LARGE POWER TRANSFORMERS AND THE U.S. ELECTRIC GRID · APR 2014'},
	doe2022: {p: doe2022 as PhraseSet, src: 'DOE · ELECTRIC GRID SUPPLY CHAIN REVIEW · FEB 2022'},
	trancorh: {p: trancorh as PhraseSet, src: 'CLEVELAND-CLIFFS · TRAN-COR H DATASHEET · OCT 2024'},
	doe_oced: {p: doeOced as PhraseSet, src: 'DOE OCED · BUTLER WORKS PROJECT FACT SHEET · AUG 2024'},
	cliffs_2026: {p: cliffs2026 as PhraseSet, src: 'CLEVELAND-CLIFFS · NEWS RELEASE · OCT 2026'},
	cliffs_2025: {p: cliffs2025 as PhraseSet, src: 'CLEVELAND-CLIFFS · NEWS RELEASE · 18 AUG 2025'},
	cliffs_2020: {p: cliffs2020 as PhraseSet, src: 'CLEVELAND-CLIFFS · NEWS RELEASE · 02 NOV 2020'},
	goes232: {p: goes232 as PhraseSet, src: 'US COMMERCE · SECTION 232 REPORT ON TRANSFORMERS · 15 OCT 2020'},
	ustr_mexico: {p: ustrMexico as PhraseSet, src: 'USTR · STATEMENT · 05 NOV 2020'},
	breakthrough: {p: breakthrough as PhraseSet, src: 'BREAKTHROUGH INSTITUTE · ANALYSIS · AUG 2026'},
	jhu_paper: {p: jhuPaper as PhraseSet, src: 'JOHNS HOPKINS · GRID EQUIPMENT SUPPLY MODEL · 2026'},
	jhu_hub: {p: jhuHub as PhraseSet, src: 'JOHNS HOPKINS HUB · 17 NOV 2026'},
	testimony: {p: testimony as PhraseSet, src: 'DOE · WRITTEN TESTIMONY · HOUSE ENERGY & COMMERCE · 13 SEP 2023'},
	fr2018: {p: fr2018 as PhraseSet, src: 'FEDERAL REGISTER · PROCLAMATION 9705 · 15 MAR 2018'},
	fr2019: {p: fr2019 as PhraseSet, src: 'FEDERAL REGISTER · PROCLAMATION 9894 · 23 MAY 2019'},
	fr2021: {p: fr2021 as PhraseSet, src: 'FEDERAL REGISTER · 86 FR 64606 · 18 NOV 2021'},
	fr2022: {p: fr2022 as PhraseSet, src: 'FEDERAL REGISTER · PRESIDENTIAL DETERMINATION · 09 JUN 2022'},
	fr2025: {p: fr2025 as PhraseSet, src: 'FEDERAL REGISTER · 90 FR 40326 · 19 AUG 2025'},
	fr2025jun: {p: fr2025jun as PhraseSet, src: 'FEDERAL REGISTER · PROCLAMATION · 09 JUN 2025'},
	fr2026apr: {p: fr2026apr as PhraseSet, src: 'FEDERAL REGISTER · 09 APR 2026'},
	crs: {p: crs as PhraseSet, src: 'CONGRESSIONAL RESEARCH SERVICE · R45249'},
	joint_canada: {p: jointCanada as PhraseSet, src: 'USTR · JOINT STATEMENT, US AND CANADA · 17 MAY 2019'},
	hitachi: {p: hitachi as PhraseSet, src: 'HITACHI · NEWS RELEASE · 05 SEP 2025'},
	siemens: {p: siemens as PhraseSet, src: 'SIEMENS ENERGY · PRESS RELEASE'},
	hdhyundai: {p: hdhyundai as PhraseSet, src: 'HD HYUNDAI ELECTRIC · PRESS RELEASE'},
	howard: {p: howard as PhraseSet, src: 'HOWARD INDUSTRIES · BIS-2025-0023-0784 · 21 OCT 2025'},
	cliffs_filing: {p: cliffsFiling as PhraseSet, src: 'CLEVELAND-CLIFFS · FILING, DOCKET BIS-2025-0023-0647 · 29 SEP 2025'},
	joint_mexico: {p: jointMexico as PhraseSet, src: 'USTR · JOINT STATEMENT, US AND MEXICO · 17 MAY 2019'},
} as const;
export type DocId = keyof typeof DOCS;
const PAGES = pages as Record<string, number[]>;

const union = (rs: Rect[], padX: number, padY: number): Rect => {
	const x0 = Math.min(...rs.map((r) => r.x)) - padX;
	const y0 = Math.min(...rs.map((r) => r.y)) - padY;
	const x1 = Math.max(...rs.map((r) => r.x + r.w)) + padX;
	const y1 = Math.max(...rs.map((r) => r.y + r.h)) + padY;
	return {x: x0, y: y0, w: x1 - x0, h: y1 - y0};
};
export const phraseOf = (doc: DocId, key: string): Phrase => {
	const p = DOCS[doc].p[key];
	if (!p) throw new Error(`docs: no phrase ${key} in ${doc}`);
	return p;
};
/** A highlighted phrase: its line rects draw in turn, completing on `at` (the word), or each line on its own frame in `ats`. */
export type HL = {key: string; at: number; ats?: number[]};

/**
 * A record page on the desk: slides on at `start`, a rostrum camera glides to the union of its highlighted phrases
 * (or `focus`), the highlights draw on their words. `page` overrides the page (a cover: page 1).
 */
export const Doc: React.FC<{doc: DocId; start: number; end: number; hl?: HL[]; label?: string; title?: string; page?: number; pushTo?: number; focus?: Rect; move?: 'zoom' | 'rostrum'; cropH?: number; bg?: BrollId | null}> = ({doc, start, end, hl = [], label, title, page, pushTo, focus, move = 'rostrum', cropH, bg}) => {
	const f = useCurrentFrame();
	const o = Math.min(lead(f, start, 14), 1 - interpolate(f, [end - 14, end], [0, 1], clamp));
	if (o <= 0) return null;
	const pg = page ?? (hl.length ? phraseOf(doc, hl[0].key).page : 1);
	const file = `${doc}_p${String(pg).padStart(3, '0')}`;
	const size = PAGES[file];
	if (!size) throw new Error(`docs: page ${file} not rendered`);
	const rects = hl.filter((h) => phraseOf(doc, h.key).page === pg).flatMap((h) => phraseOf(doc, h.key).rects);
	const u = rects.length ? union(rects, 110, 150) : {x: 150, y: 160, w: 1570, h: 900};
	const highlights = hl
		.filter((h) => phraseOf(doc, h.key).page === pg)
		.flatMap((h) => {
			const rs = phraseOf(doc, h.key).rects;
			return rs.map((r, i) => ({...r, start: h.ats?.[i] ?? h.at - 15 - (rs.length - 1 - i) * 18, draw: h.ats ? 22 : 20}));
		});
	const fc = focus ?? {x: 150, w: 1570, y: u.y, h: Math.max(u.h, 420)};
	const source = `${DOCS[doc].src} · P. ${pg}${title ? ` · ${title}` : ''}`;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{bg !== null ? <Backdrop f={f} start={start} end={end} clip={bg ?? backdropFor(start).clip} from={bg ? 0 : backdropFor(start).from} /> : null}
			<Exhibit page={{w: size[0], h: cropH ?? size[1]}} start={start} push={{from: start + 10, to: pushTo ?? start + 100, focus: fc}} highlights={highlights} label={label ?? 'RECORD'} source={source} move={move}>
				<Img src={media(`pages/${file}.jpg`)} style={{width: size[0], height: size[1]}} />
			</Exhibit>
		</div>
	);
};

// ── Real pictures ────────────────────────────────────────────────────────────────────────────────────────────────

/** A real photograph, full frame, unaltered (crop and a slow lateral move only, PLAYBOOK §9.5), credited on the strip. */
export const Photo: React.FC<{f: number; start: number; end: number; src: string; what: string; source: string; left?: string; focus?: [number, number]; dir?: 1 | -1; children?: React.ReactNode}> = ({f, start, end, src, what, source, left, focus = [0.5, 0.5], dir = 1, children}) => {
	const o = Math.min(lead(f, start, 12), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const g = glide(f, start, end);
	const s = 1.08;
	const tx = dir * 1920 * (s - 1) * 0.45 * (1 - 2 * g);
	const ty = 1080 * (s - 1) * (focus[1] - 0.5) * 0.9 * g;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, overflow: 'hidden', background: colors.void}}>
			<div style={{position: 'absolute', inset: 0, transform: `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) scale(${s})`}}>
				<Img src={media(src)} style={{width: 1920, height: 1080, objectFit: 'cover', objectPosition: `${focus[0] * 100}% ${focus[1] * 100}%`}} />
			</div>
			{children}
			<BottomShade />
			<Strip left={left} what={what} source={source} />
		</div>
	);
};

// ── The witnesses in their own voices (House E&C subcommittee hearing, 13 SEP 2023, a public record) ──────────────

type ClipEntry = (typeof timing.clips)[number];
type CW = {w: string; t0: number; t1: number};
const CWORDS = clipWords as Record<string, CW[]>;
export const clipOf = (id: string): ClipEntry => {
	const c = timing.clips.find((x) => x.clip === id);
	if (!c) throw new Error(`no clip ${id}`);
	return c;
};

/** The hearing video in a plate (left), the lower third (right), the words as heard beneath, lit as each is said. */
export const HearingClip: React.FC<{f: number; id: string}> = ({f, id}) => {
	const {fps} = useVideoConfig();
	const c = clipOf(id);
	const from = c.gapStartFrame;
	const to = c.gapEndFrame;
	const o = Math.min(lead(f, from + 8, 8), 1 - lead(f, to + 4, 10));
	if (o <= 0) return null;
	const ws = CWORDS[c.clip] ?? [];
	const V = {x: 96, y: 96, w: 1180, h: 664};
	const lt = c.lower_third;
	// the clip's own picture starts at the gap's start: render media cut from (in - pre) (render_media.sh)
	const push = tween(f, from, to, 1.0, 1.06, ease.camera);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: V.x, top: V.y, width: V.w, height: V.h, overflow: 'hidden', background: colors.void, border: `1px solid ${colors.border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
				<Sequence from={from} durationInFrames={to - from + 20} layout="none">
					<OffthreadVideo src={media(`footage/${c.clip}.mp4`)} muted style={{width: V.w, height: V.h, transform: `scale(${push.toFixed(4)})`, transformOrigin: '60% 40%'}} />
				</Sequence>
			</div>
			<div style={{position: 'absolute', left: V.x, top: V.y + V.h, width: V.w, height: 58, background: colors.card, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', padding: '0 16px', ...T(26, {color: colors.ink}), whiteSpace: 'nowrap', overflow: 'hidden'}}>
				{c.credit} · PUBLIC RECORD
			</div>
			<div style={{position: 'absolute', left: V.x + V.w + 36, top: V.y + 8, width: 1824 - (V.x + V.w + 36)}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 44, letterSpacing: 2, color: colors.ink, lineHeight: 1.1}}>{lt.name}</div>
				<div style={{marginTop: 12, ...T(26, {color: colors.amber, lineHeight: 1.35})}}>{lt.role}</div>
				<div style={{marginTop: 10, ...T(26, {color: colors.ink})}}>{lt.when}</div>
				<div style={{marginTop: 24}}>
					<Chip text="OWN VOICE · HEARING VIDEO" tone={colors.cyan} size={26} />
				</div>
			</div>
			<div style={{position: 'absolute', left: V.x, top: V.y + V.h + 78, width: 1824 - V.x, minHeight: 150, background: 'rgba(10,13,18,0.92)', border: `1px solid ${colors.border}`, padding: '16px 24px 44px'}}>
				<div style={{fontFamily: sans, fontWeight: 600, fontSize: 36, lineHeight: 1.3, color: colors.ink}}>
					{ws.map((w, j) => (
						<span key={j} style={{opacity: f >= c.startFrame + Math.round(w.t0 * fps) - 4 ? 1 : 0.18}}>
							{w.w}{' '}
						</span>
					))}
				</div>
				<div style={{position: 'absolute', right: 20, bottom: 8, ...T(26, {color: colors.ink})}}>CAPTION: HIS WORDS AS HEARD · CHECKED BY EAR</div>
			</div>
		</div>
	);
};

// ── A record chart on a lit mount (PLAYBOOK §6.8): bars that grow as their numbers are said ─────────────────────────

export type Bar = {label: string; value: number; at: number; from?: number; tone?: string; fmt?: (v: number) => string};
export const BarChart: React.FC<{f: number; start: number; end: number; bars: Bar[]; max: number; title: string; source: string; unit?: string; x?: number; y?: number; w?: number; h?: number; grid?: boolean; children?: React.ReactNode}> = ({f, start, end, bars, max, title, source, x = 150, y = 120, w = 1620, h = 800, grid = false, children}) => {
	const o = Math.min(lead(f, start, 14), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const rise = tween(f, start, start + 30, 40, 0, ease.arrive);
	const plotH = h - 260;
	const bw = Math.min(260, (w - 200) / bars.length - 60);
	return (
		<div style={{position: 'absolute', left: x, top: y + rise, width: w, height: h, opacity: o, background: LAMP, border: `1px solid ${colors.border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.55)'}}>
			<div style={{position: 'absolute', left: 40, top: 30, ...T(30, {color: colors.ink, fontWeight: 700})}}>{title}</div>
			{grid ? [0.25, 0.5, 0.75, 1].map((g) => <div key={g} style={{position: 'absolute', left: 80, right: 60, top: 110 + plotH * (1 - g), height: 1, background: colors.border, transform: `scaleX(${lead(f, start + g * 10, 14).toFixed(3)})`, transformOrigin: '0 50%'}} />) : null}
			{/* the axis */}
			<div style={{position: 'absolute', left: 80, right: 60, top: 110 + plotH, height: 2, background: colors.sub}} />
			{bars.map((b, i) => {
				const k = interpolate(f, [b.from ?? b.at - 24, b.at + 4], [0, 1], {...clamp, easing: ease.arrive});
				const bh = (b.value / max) * plotH * k;
				const bx = 120 + i * ((w - 200) / bars.length);
				const tone = b.tone ?? colors.cyan;
				return (
					<div key={i}>
						<div style={{position: 'absolute', left: bx, top: 110 + plotH - bh, width: bw, height: bh, background: tone, opacity: 0.85, boxShadow: k > 0 ? `0 0 ${(24 * flash(f, b.at, 0)).toFixed(1)}px ${tone}` : undefined}} />
						<div style={{position: 'absolute', left: bx - 40, width: bw + 80, top: 110 + plotH - bh - 64, textAlign: 'center', opacity: k}}>
							<span style={{fontFamily: mono, fontWeight: 700, fontSize: 44, color: colors.ink}}>{(b.fmt ?? comma)(b.value * k)}</span>
						</div>
						<div style={{position: 'absolute', left: bx - 40, width: bw + 80, top: 126 + plotH, textAlign: 'center', ...T(28, {color: colors.ink})}}>{b.label}</div>
					</div>
				);
			})}
			{children}
			<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 58, borderTop: `1px solid ${colors.border}`, background: colors.card, display: 'flex', alignItems: 'center', padding: '0 16px', ...T(26, {color: colors.ink})}}>{source}</div>
		</div>
	);
};

// ── The calendar (signature 2): one page per dated document, in the desk pose ─────────────────────────────────────

export type CalPage = {date: string; what: string; src: string; at: number; tone?: string};
export const Calendar: React.FC<{f: number; start: number; end: number; pages: CalPage[]; riffle?: boolean}> = ({f, start, end, pages: ps, riffle}) => {
	const o = Math.min(lead(f, start, 14), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const cur = ps.reduce((a, p, i) => (f >= p.at - 8 ? i : a), -1);
	const W = 980;
	const H = 640;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1000, perspectiveOrigin: '50% 40%'}}>
			{/* the timeline strip: every date as a tick, the current one lit */}
			<div style={{position: 'absolute', left: 120, right: 120, top: 930, height: 2, background: colors.sub}} />
			{ps.map((p, i) => {
				const x = 120 + (i / Math.max(1, ps.length - 1)) * (1920 - 240);
				const on = i <= cur;
				return (
					<div key={i} style={{position: 'absolute', left: x - 7, top: 923, width: 14, height: 14, borderRadius: 7, background: on ? p.tone ?? colors.amber : colors.card, border: `1px solid ${colors.sub}`, boxShadow: i === cur ? `0 0 18px ${p.tone ?? colors.amber}` : undefined}} />
				);
			})}
			{ps.map((p, i) => {
				if (i < cur - 2 || i > cur) return null;
				const k = interpolate(f, [p.at - 18, p.at + 6], [0, 1], {...clamp, easing: ease.arrive});
				const depth = cur - i; // 0 = the top page
				const flip = riffle ? 0 : depth;
				const tilt = 12 + (1 - k) * 30;
				return (
					<div key={i} style={{position: 'absolute', left: (1920 - W) / 2 + flip * -34, top: 150 + flip * 22 - (1 - k) * 120, width: W, height: H, background: colors.paper, opacity: Math.min(1, k * 1.4) * (depth > 0 ? 0.75 : 1), transform: `rotateX(${tilt}deg) rotateZ(${-1.4 + depth * 1.2}deg)`, transformOrigin: '50% 0%', boxShadow: '0 30px 80px rgba(0,0,0,0.55)', border: `1px solid ${colors.border}`}}>
						<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 120, background: p.tone ?? colors.amber}} />
						<div style={{position: 'absolute', left: 48, top: 26, fontFamily: mono, fontWeight: 700, fontSize: 64, color: colors.void, letterSpacing: 2}}>{p.date}</div>
						<div style={{position: 'absolute', left: 48, right: 48, top: 170, fontFamily: sans, fontWeight: 700, fontSize: 54, lineHeight: 1.15, color: colors.paper_ink}}>{p.what}</div>
						<div style={{position: 'absolute', left: 48, right: 48, bottom: 40, fontFamily: mono, fontSize: 28, color: colors.paper_ink}}>{p.src}</div>
					</div>
				);
			})}
		</div>
	);
};

// ── The steel's surface under magnification (H3, ILLUSTRATION): grains along the strip, laser lines across it ─────

export const Surface: React.FC<{f: number; start: number; end: number; align: number; laser: number; heat: number; erase: number; second?: number}> = ({f, start, end, align, laser, heat, erase, second = 0}) => {
	const o = Math.min(lead(f, start, 14), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const drift = (f - start) * 0.25;
	// grains: irregular cells that line up with the rolling direction as `align` goes 0 → 1
	const grains = Array.from({length: 60}, (_, i) => {
		const r = (n: number) => {
			const s = Math.sin(i * 91.7 + n * 13.3) * 43758.5453;
			return s - Math.floor(s);
		};
		const ang = (1 - align) * (r(1) - 0.5) * 140;
		return {x: r(2) * 1920, y: r(3) * 1080, w: 160 + r(4) * 260 + align * 180, h: 70 + r(5) * 120 - align * 30, ang, shade: 0.55 + r(6) * 0.35};
	});
	const lines = Array.from({length: 22}, (_, i) => 60 + i * 88);
	const lineO = laser * (1 - erase);
	const furnace = heat;
	const panel = (w: number, offX: number, lo: number) => (
		<div style={{position: 'absolute', left: offX, top: 0, width: w, height: 1080, overflow: 'hidden', background: '#7d8794'}}>
			{grains.map((g, i) => (
				<div key={i} style={{position: 'absolute', left: ((g.x + drift) % 2100) - 160 - offX, top: g.y - 60, width: g.w, height: g.h, background: `rgba(${Math.round(150 * g.shade)},${Math.round(160 * g.shade)},${Math.round(175 * g.shade)},0.9)`, borderRadius: '40% 55% 45% 50%', transform: `rotate(${g.ang}deg)`, border: '1px solid rgba(30,41,59,0.6)'}} />
			))}
			{lines.map((x, i) => (
				<div key={i} style={{position: 'absolute', left: x - offX * 0, top: 0, width: 4, height: 1080, background: colors.cyan, opacity: lo * (0.55 + 0.25 * Math.sin(i)), boxShadow: `0 0 10px ${colors.cyan}`, transform: `scaleY(${Math.min(1, laser * 1.2)})`, transformOrigin: '50% 0%'}} />
			))}
			<div style={{position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 120%, rgba(245,158,11,${(0.55 * furnace).toFixed(3)}) 0%, rgba(239,68,68,${(0.25 * furnace).toFixed(3)}) 45%, rgba(0,0,0,0) 80%)`, mixBlendMode: 'screen'}} />
		</div>
	);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{second > 0.01 ? (
				<>
					{panel(956, 0, lineO)}
					<div style={{position: 'absolute', left: 958, top: 0, width: 962, height: 1080, overflow: 'hidden', opacity: second}}>
						<div style={{position: 'absolute', left: -958, top: 0, width: 1920, height: 1080}}>{panel(1920, 0, laser)}</div>
					</div>
					<div style={{position: 'absolute', left: 955, top: 0, width: 4, height: 1080, background: colors.void}} />
				</>
			) : (
				panel(1920, 0, lineO)
			)}
		</div>
	);
};

// ── A tray of record pages on the desk, each landing on its word, each tagged with its record ─────────────────────

export type TrayPage = {img: string; tag: string; at: number; mark?: string; markAt?: number; tone?: string};
export const Tray: React.FC<{f: number; start: number; end: number; pages: TrayPage[]; w?: number}> = ({f, start, end, pages: ps, w = 380}) => {
	const o = Math.min(lead(f, start, 12), 1 - lead(f, end, 14));
	if (o <= 0) return null;
	const drift = tween(f, start, end, 0, 1, ease.camera);
	const gap = Math.min(w + 60, (1920 - 240) / ps.length);
	const x0 = (1920 - gap * (ps.length - 1) - w) / 2;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1100, perspectiveOrigin: '50% 20%'}}>
			<div style={{position: 'absolute', inset: 0, transform: `rotateX(24deg) translateY(${(-24 * drift).toFixed(1)}px) scale(${(1 + 0.04 * drift).toFixed(3)})`, transformOrigin: '50% 60%'}}>
				{ps.map((p, i) => {
					const k = interpolate(f, [p.at - 16, p.at + 4], [0, 1], {...clamp, easing: ease.arrive});
					if (k <= 0) return null;
					const size = PAGES[p.img] ?? [1870, 2420];
					const h = (w * size[1]) / size[0];
					return (
						<div key={p.img + i} style={{position: 'absolute', left: x0 + i * gap, top: 130 - (1 - k) * 240, width: w, height: h, opacity: Math.min(1, k * 1.5), transform: `rotateZ(${(-5 + i * 3.5).toFixed(1)}deg)`, boxShadow: '0 30px 70px rgba(0,0,0,0.6)', background: colors.paper}}>
							<Img src={media(`pages/${p.img}.jpg`)} style={{width: w, height: h}} />
							<div style={{position: 'absolute', left: -20, right: -20, top: h + 18, ...T(26, {color: colors.ink, textAlign: 'center'})}}>{p.tag}</div>
							{p.mark ? (
								<div style={{position: 'absolute', left: 12, top: 12, opacity: lead(f, p.markAt ?? p.at, 10)}}>
									<Chip text={p.mark} tone={p.tone ?? colors.amber} size={28} />
								</div>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
};

// ── A record excerpt (r03): the highlighted lines cut from the real page, a tight plate over moving footage ──────────

/**
 * The located phrase(s) of a record page, cropped with a margin and shown on a paper plate in the desk pose, over a
 * blurred clip; the highlight draws on its words. The page itself is unaltered: this is a crop, never a retyping.
 */
export const Excerpt: React.FC<{f: number; doc: DocId; start: number; end: number; hl: HL[]; bg?: BrollId | null; bgFrom?: number; label?: string; title?: string; x?: number; y?: number; w?: number; pad?: [number, number]; maxH?: number}> = ({f, doc, start, end, hl, bg, bgFrom = 0, label = 'EXHIBIT', title, x = 210, y, w = 1500, pad = [70, 14], maxH = 560}) => {
	const o = Math.min(lead(f, start, 12), 1 - interpolate(f, [end - 14, end], [0, 1], clamp));
	if (o <= 0) return null;
	const pg = phraseOf(doc, hl[0].key).page;
	const file = `${doc}_p${String(pg).padStart(3, '0')}`;
	const size = PAGES[file];
	if (!size) throw new Error(`docs: page ${file} not rendered`);
	const all = hl.filter((h) => phraseOf(doc, h.key).page === pg);
	const u = union(all.flatMap((h) => phraseOf(doc, h.key).rects), pad[0], pad[1]);
	const ux = Math.max(0, u.x);
	const uw = Math.min(size[0] - ux, u.w);
	const k = Math.min(w / uw, maxH / u.h);
	const pw = uw * k;
	const ph = u.h * k;
	const px = x + (w - pw) / 2;
	const py = y ?? (1080 - ph) / 2 - 50;
	const settle = tween(f, start, start + 26, 0, 1, ease.arrive);
	const push = tween(f, start, end, 1, 1.035, ease.camera);
	const lines = all.flatMap((h) => {
		const rs = phraseOf(doc, h.key).rects;
		return rs.map((r, i) => ({...r, from: h.ats?.[i] ?? h.at - 15 - (rs.length - 1 - i) * 18}));
	});
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{bg !== null ? <Backdrop f={f} start={start} end={end} clip={bg ?? backdropFor(start).clip} from={bg ? bgFrom : backdropFor(start).from} opacity={0.34} /> : null}
			<div style={{position: 'absolute', inset: 0, perspective: 1000, perspectiveOrigin: '50% 40%'}}>
				<div style={{position: 'absolute', left: px, top: py + (1 - settle) * 40, width: pw, height: ph, transform: `rotateX(${(8 * (1 - settle) + 2).toFixed(2)}deg) rotateZ(${(-0.8 + 0.4 * settle).toFixed(2)}deg) scale(${push.toFixed(4)})`, transformOrigin: '50% 60%', background: colors.paper, overflow: 'hidden', border: `1px solid ${colors.border}`, boxShadow: '0 24px 60px rgba(0,0,0,0.65)'}}>
					<div style={{position: 'absolute', left: -ux * k, top: -u.y * k, width: size[0] * k, height: size[1] * k}}>
						<Img src={media(`pages/${file}.jpg`)} style={{width: size[0] * k, height: size[1] * k}} />
						{lines.map((r, i) => {
							const d = interpolate(f, [r.from, r.from + 20], [0, 1], {...clamp, easing: ease.arrive});
							return d > 0 ? <div key={i} style={{position: 'absolute', left: r.x * k, top: r.y * k, width: r.w * k * d, height: r.h * k, background: colors.highlight, mixBlendMode: 'multiply'}} /> : null;
						})}
					</div>
					<div style={{position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${colors.paper} 0%, rgba(243,244,246,0) 9%, rgba(243,244,246,0) 91%, ${colors.paper} 100%)`}} />
				</div>
				<div style={{position: 'absolute', left: px, top: py - 50 + (1 - settle) * 40, ...T(26, {color: colors.amber, fontWeight: 700}), opacity: settle}}>{label}</div>
				<div style={{position: 'absolute', left: px, width: Math.max(pw, 1100), top: py + ph + 18 + (1 - settle) * 40, ...T(26, {color: colors.ink, lineHeight: 1.4}), opacity: settle}}>{`${DOCS[doc].src} · P. ${pg}${title ? ` · ${title}` : ''}`}</div>
			</div>
		</div>
	);
};
