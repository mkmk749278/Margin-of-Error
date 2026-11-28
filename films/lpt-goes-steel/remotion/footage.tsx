import React from 'react';
import {interpolate, OffthreadVideo, Sequence, staticFile, useVideoConfig} from 'remotion';
import {colors} from '../../../lib/remotion/brand';
import {lead} from '../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../lib/remotion/motion';
import {mono, sans} from './kit';

// r03 (owner, 28 NOV 2026): real moving footage under the story. Every clip is muted H.264 in public/broll/, logged in
// media_manifest.csv, credited on its strip when it is the picture, and in the description and the end credits.
// A clip seen through glass behind a record (Backdrop) is texture, never evidence: it carries no claim.

export type BrollId = keyof typeof BROLL;
type Clip = {file: string; secs: number; what: string; source: string; illustration?: boolean};
export const BROLL = {
	bpa: {file: 'hero_01_bpa_500kv_transformer_pd', secs: 39, what: 'A 500 KV TRANSFORMER MOVED ON RAILS · WASHINGTON, 2014', source: 'VIDEO: BPA (US DOE) · PUBLIC DOMAIN'},
	schnabelTx: {file: 'hero_02_tx_schnabel_ptdx202_ccby', secs: 20, what: 'SCHNABEL CAR PTDX 202 · MOUNT PLEASANT, TEXAS, 30 MAR 2012', source: 'VIDEO: JASON LEE DAVIS · CC BY 3.0'},
	schnabelNs: {file: 'hero_03_ns_schnabel_wecx800_ccby', secs: 35, what: 'SCHNABEL CAR WECX 800 · LOAD: A NUCLEAR STEAM GENERATOR', source: 'VIDEO: SAXT PRODUCTIONS · CC BY 3.0'},
	coreLift: {file: 'hero_04_lpt_core_factory_ccby', secs: 40, what: "AN LPT'S CORE AND WINDINGS, LIFTED FROM ITS TANK · AUSTRIA", source: 'VIDEO: SALZBURG AG · CC BY 3.0'},
	fortRandall: {file: 'us_fort_randall_lpt_install_pd', secs: 23.5, what: 'AN LPT INSTALLED · FORT RANDALL DAM, S. DAKOTA, 2023', source: 'VIDEO: USACE · DVIDS · PUBLIC DOMAIN'},
	substation: {file: 'us_broll_04_us_substation_transformer_pd', secs: 13, what: 'A SUBSTATION · FORT CARSON, COLORADO, 2023', source: 'VIDEO: US ARMY · DVIDS · PUBLIC DOMAIN'},
	insulators: {file: 'us_broll_05_us_substation_insulators_pd', secs: 7.8, what: 'SUBSTATION INSULATORS · FORT CARSON, COLORADO, 2023', source: 'VIDEO: US ARMY · DVIDS · PUBLIC DOMAIN'},
	switchyard: {file: 'us_broll_06_us_doe_switchyard_pd', secs: 12, what: 'A FEDERAL SWITCHYARD (SWPA) · OKLAHOMA, 2026', source: 'VIDEO: USACE · DVIDS · PUBLIC DOMAIN'},
	furnace: {file: 'broll_03_uhp_steel_furnace_ccby3', secs: 18, what: 'ILLUSTRATION · AN ELECTRIC ARC FURNACE, SLOVENIA', source: 'VIDEO: SOUNDS OF CHANGES · CC BY 3.0', illustration: true},
	anneal: {file: 'broll_04_annealing_furnace_ccby3', secs: 18, what: 'ILLUSTRATION · AN ANNEALING FURNACE, SLOVENIA', source: 'VIDEO: SOUNDS OF CHANGES · CC BY 3.0', illustration: true},
	coreArc: {file: 'broll_05_transformer_core_arc_ccbysa4', secs: 18, what: 'ILLUSTRATION · A LAMINATED CORE, TEACHING MODEL', source: 'VIDEO: GEORG FUCHS, MIKERUN · CC BY-SA 4.0', illustration: true},
	lines: {file: 'broll_07_hv_transmission_linemen_ccby2', secs: 7.9, what: 'OVERHEAD LINE WORK · PORTUGAL, 2018', source: 'VIDEO: FERNANDO MOITAL · CC BY 2.0'},
	machining: {file: 'broll_08_steel_plant_machining_ccby3', secs: 16, what: 'ILLUSTRATION · GRINDING IN A STEEL PLANT, SLOVENIA', source: 'VIDEO: SOUNDS OF CHANGES · CC BY 3.0', illustration: true},
} satisfies Record<string, Clip>;

const src = (id: BrollId): string => staticFile(`films/lpt-goes-steel/broll/${BROLL[id].file}.mp4`);

/** Playback rate so a clip covers its beat without running out: real time when it fits, slowed (never below 0.5) when not. */
const rateFor = (id: BrollId, from: number, frames: number, fps: number, rate?: number): number => {
	if (rate) return rate;
	const room = BROLL[id].secs - from - 0.2;
	return Math.max(0.5, Math.min(1, room / (frames / fps)));
};

/** The documentary grade (r03 spec §2): dark, slightly desaturated, a slow push, a scrim top and bottom. */
const GRADE = 'contrast(1.12) saturate(0.82) brightness(0.72)';
const SCRIM = 'linear-gradient(180deg, rgba(10,13,18,0.55) 0%, rgba(10,13,18,0.25) 45%, rgba(10,13,18,0.82) 100%)';

/** A clip as the picture, full bleed, on its own clock from `start`. `from` = seconds into the clip. */
export const Footage: React.FC<{
	f: number;
	start: number;
	end: number;
	clip: BrollId;
	from?: number;
	rate?: number;
	/** where the push is anchored, 0–1 (also crops a corner out of frame) */
	focus?: [number, number];
	/** zoom past the push, to crop (a teaching model's badge, a corner bug) */
	crop?: number;
	strip?: boolean;
	hard?: boolean;
	push?: [number, number];
	children?: React.ReactNode;
}> = ({f, start, end, clip, from = 0, rate, focus = [0.5, 0.5], crop = 1, strip = true, hard = false, push = [1.0, 1.045], children}) => {
	const {fps} = useVideoConfig();
	const o = hard ? (f >= start && f < end ? 1 : 0) : Math.min(lead(f, start, 10), 1 - interpolate(f, [end - 12, end], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
	if (o <= 0) return null;
	const s = tween(f, start, end, push[0], push[1], ease.camera) * crop;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, overflow: 'hidden', background: colors.void}}>
			<Sequence from={start} durationInFrames={end - start + 2} layout="none">
				<OffthreadVideo
					src={src(clip)}
					muted
					trimBefore={Math.round(from * fps)}
					playbackRate={rateFor(clip, from, end - start, fps, rate)}
					style={{position: 'absolute', inset: 0, width: 1920, height: 1080, objectFit: 'cover', filter: GRADE, transform: `scale(${s.toFixed(4)})`, transformOrigin: `${focus[0] * 100}% ${focus[1] * 100}%`}}
				/>
			</Sequence>
			<div style={{position: 'absolute', inset: 0, background: SCRIM}} />
			{children}
			{strip ? <FootStrip clip={clip} /> : null}
		</div>
	);
};

/** The credit strip of a clip: what it is (honesty first), where it comes from. */
export const FootStrip: React.FC<{clip: BrollId; o?: number}> = ({clip, o = 1}) => {
	const c: Clip = BROLL[clip];
	const [label, rest] = c.illustration ? ['ILLUSTRATION', c.what.replace(/^ILLUSTRATION · /, '')] : [null, c.what];
	return (
		<div style={{position: 'absolute', left: 96, right: 96, bottom: 54, height: 58, display: 'flex', alignItems: 'center', gap: 16, opacity: o, fontFamily: mono, fontSize: 26, letterSpacing: 1.5, color: colors.ink, whiteSpace: 'nowrap', textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
			{label ? <span style={{fontSize: 36, fontWeight: 700}}>{label}</span> : null}
			<span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{rest}</span>
			<span style={{marginLeft: 'auto', paddingLeft: 24}}>{c.source}</span>
		</div>
	);
};

/** A clip seen through glass behind a record or a chart: blurred, dim, moving (r03 spec §2: no page on a bare void). */
export const Backdrop: React.FC<{f: number; start: number; end: number; clip: BrollId; from?: number; opacity?: number; blur?: number}> = ({f, start, end, clip, from = 0, opacity = 0.28, blur = 6}) => {
	const {fps} = useVideoConfig();
	const o = Math.min(lead(f, start, 14), 1 - interpolate(f, [end - 14, end], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
	if (o <= 0) return null;
	const s = tween(f, start, end, 1.06, 1.1, ease.camera);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o * opacity, overflow: 'hidden'}}>
			<Sequence from={start} durationInFrames={end - start + 2} layout="none">
				<OffthreadVideo src={src(clip)} muted trimBefore={Math.round(from * fps)} playbackRate={rateFor(clip, from, end - start, fps)} style={{position: 'absolute', inset: 0, width: 1920, height: 1080, objectFit: 'cover', filter: `blur(${blur}px) ${GRADE}`, transform: `scale(${s.toFixed(4)})`}} />
			</Sequence>
		</div>
	);
};

/** The backdrop a record gets by default, by act: the grid in I, the melt shop in II, the mill and the rail in III, the grid again in IV–V. */
export const backdropFor = (frame: number): {clip: BrollId; from: number} => {
	const t = frame / 60;
	const pick = (list: BrollId[]): {clip: BrollId; from: number} => {
		const i = Math.floor(frame / 1500) % list.length;
		const clip = list[i];
		return {clip, from: Math.min(BROLL[clip].secs * 0.4, (frame % 900) / 300)};
	};
	if (t < 125) return pick(['substation', 'fortRandall', 'switchyard']);
	if (t < 313) return pick(['furnace', 'anneal', 'furnace']);
	if (t < 606) return pick(['machining', 'furnace', 'substation']);
	return pick(['substation', 'switchyard', 'insulators']);
};

/** A bold title over the cold open's footage: the film's promise in its own title words, the readout under it. */
export const TitleCard: React.FC<{f: number; at: number; until: number; title: string[]; kicker: React.ReactNode}> = ({f, at, until, title, kicker}) => {
	const k = Math.min(lead(f, at, 12), 1 - interpolate(f, [until - 10, until], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
	if (k <= 0) return null;
	const track = interpolate(f, [at, until], [10, 14], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', opacity: k}}>
			{title.map((line, i) => (
				<div key={i} style={{fontFamily: sans, fontWeight: 800, fontSize: 104, lineHeight: 1.08, letterSpacing: track, color: colors.ink, textTransform: 'uppercase', textShadow: '0 6px 40px rgba(0,0,0,0.85)', opacity: Math.min(1, lead(f, at + i * 8, 10))}}>
					{line}
				</div>
			))}
			<div style={{marginTop: 34, display: 'inline-block', fontFamily: mono, fontSize: 40, letterSpacing: 3, color: colors.cyan, background: 'rgba(10,13,18,0.78)', border: `1px solid ${colors.cyan}`, padding: '10px 22px 8px', opacity: lead(f, at + 18, 10)}}>{kicker}</div>
		</div>
	);
};
