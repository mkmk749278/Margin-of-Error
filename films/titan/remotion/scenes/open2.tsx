import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {G4, Hull3D, HullCam, lerpCam, project} from '../hull3d';
import {media, Mount, useFilmFrame} from '../kit';
import {Chip, clamp, hhmm, RealFootage, span, T, T_EVENT, TimeTrace} from '../parts';
import {HearingClip, clipOf} from '../parts2';
import {Replot} from '../replot';
import {ef, sf, wf} from '../timing';
import {SceneDef} from './types';

// OPENING v2 (owner, 18 NOV 2026; script/opening_v2.md): sentences 0–10 and Brooks's own voice. No text cards: every
// shot is the 3D hull built from the record, real footage, a real recording or a record chart on its mount
// (PLAYBOOK §6.8, §5.1 picture test). Every cue is a literal wf(sentence, 'word') on the measured narration.

const ease3 = (t: number): number => t * t * (3 - 2 * t);
const camAt = (f: number, keys: {f: number; cam: HullCam}[]): HullCam => {
	if (f <= keys[0].f) return keys[0].cam;
	for (let i = 0; i + 1 < keys.length; i++) {
		const a = keys[i];
		const b = keys[i + 1];
		if (f <= b.f) return lerpCam(a.cam, b.cam, ease3((f - a.f) / Math.max(1, b.f - a.f)));
	}
	return keys[keys.length - 1].cam;
};
/** "bang": one sharp 12 px drop, recovered on a damped spring over a few frames (outside review, 18 NOV 2026). */
const jolt = (f: number, at: number): number => (f < at ? 0 : 12 * Math.exp(-(f - at) / 2.2) * Math.cos((f - at) * 0.8));

const Strip: React.FC<{left: string; right: string; o?: number}> = ({left, right, o = 1}) => (
	<div style={{position: 'absolute', left: 96, right: 96, bottom: 54, height: 58, display: 'flex', alignItems: 'center', gap: 16, opacity: o, ...T(26, {color: colors.ink}), whiteSpace: 'nowrap'}}>
		<span style={{color: colors.amber, fontWeight: 700}}>{left}</span>
		<span style={{marginLeft: 'auto'}}>{right}</span>
	</div>
);

// ── 1 · The hull and its own strain (s0–s2): the line draws out of gauge group 4; the bang; the jump ───────────────

const HW = 1060; // the hull's canvas (left); the trace takes the right of the frame
const OpenHull: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const cam = camAt(f, [
		{f: 0, cam: {pos: [27, 13, 29], look: [0, -0.6, 0.4], fov: 30}},
		{f: wf(0, 'hull'), cam: {pos: [23, 13, 26], look: [0, -0.2, 1.2], fov: 30}},
		{f: wf(1, 'inside'), cam: {pos: [19, 13, 22.5], look: [0, 0.1, 1.9], fov: 30}},
		{f: wf(1, 'bang') - 10, cam: {pos: [16, 13, 20], look: [0, 0.4, 2.4], fov: 30}},
		{f: ef(2) + 60, cam: {pos: [14, 13, 18.5], look: [0, 0.6, 2.8], fov: 30}},
	]);
	const cut = interpolate(f, [wf(0, 'hull') - 10, wf(0, 'hull') + 40], [0, 0.6], {...clamp, easing: ease.camera});
	const g4 = Math.max(lead(f, wf(0, 'this'), 10) * 0.6, lead(f, wf(0, 'strain'), 12));
	const bench = interpolate(f, [0, 40], [0.7, 1], clamp);
	// one driver for the trace and its clock (hours, NDT)
	const tEnd = rollTo(f, [
		{frame: 0, value: 6.74},
		{frame: wf(0, 'strain'), value: 7.0},
		{frame: wf(0, 'twenty-two') + 20, value: 14.2},
		{frame: wf(1, 'bang'), value: T_EVENT - 0.004},
		{frame: wf(2, 'jumped') - 4, value: T_EVENT - 0.002},
		{frame: wf(2, 'jumped') + 6, value: T_EVENT + 0.006},
		{frame: ef(2) + 70, value: 16.2},
	]);
	const ae = lead(f, wf(1, 'bang'), 6);
	const jump = lead(f, wf(2, 'jumped'), 8);
	const y = jolt(f, wf(1, 'bang'));
	const gp = project(G4, cam, HW, 1080);
	const TR = {x: 1000, y: 170, w: 860, h: 560};
	const traceO = interpolate(f, [0, 8], [0.6, 1], clamp);
	return (
		<AbsoluteFill style={{transform: `translateY(${y.toFixed(2)}px)`}}>
			<div style={{position: 'absolute', left: 0, top: 0, width: HW, height: 1080}}>
				<Hull3D width={HW} height={1080} cam={cam} cut={cut} g4={g4} sensors={0.25 * g4 + 0.6 * lead(f, wf(1, 'heard'), 8)} aeDark={[0, lead(f, wf(1, 'heard'), 8), 0, 0, 0, 0, 0, 0]} interfaces={0} bench={bench} />
			</div>
			{/* the leader: from the gauge to where its line begins */}
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: traceO}}>
				<line x1={gp.x} y1={gp.y} x2={TR.x + 120} y2={TR.y + 40 + (TR.h - 132) * 0.83} stroke={colors.cyan} strokeWidth={2} strokeDasharray="6 8" opacity={0.8} />
				<circle cx={gp.x} cy={gp.y} r={9} fill="none" stroke={colors.cyan} strokeWidth={3} />
			</svg>
			<div style={{position: 'absolute', left: TR.x, top: TR.y, width: TR.w, height: TR.h, opacity: traceO, background: 'rgba(10,13,18,0.55)', borderLeft: `2px solid ${colors.cyan}`}}>
				<TimeTrace f={f} w={TR.w} h={TR.h} tEnd={tEnd} ae={ae} jump={jump} showDepth={0} stroke={colors.ink} />
			</div>
			<div style={{position: 'absolute', left: TR.x + TR.w - 250, top: TR.y - 62, opacity: traceO, ...T(40, {color: colors.ink, fontWeight: 700})}}>
				<span style={{color: f >= wf(1, 'afternoon') ? colors.amber : colors.ink}}>{hhmm(tEnd)}</span> <span style={{fontSize: 26, color: colors.sub}}>NDT</span>
			</div>
			<div style={{position: 'absolute', left: TR.x + 20, top: TR.y + TR.h + 18, opacity: lead(f, wf(1, 'four'), 8), transform: `scale(${bump(f, fps, wf(1, 'four')).toFixed(4)})`, transformOrigin: 'left center'}}>
				<Chip text="4 ABOARD · USCG ROI 4.34.8" tone={colors.ink} size={30} />
			</div>
			<div style={{position: 'absolute', left: TR.x + 380, top: TR.y + 70, opacity: lead(f, wf(1, 'bang'), 6)}}>
				<Chip text="ACOUSTIC CH 2 · 25,687 mV" tone={colors.red} size={30} style={{transform: `scale(${bump(f, fps, wf(1, 'bang'), 0.08).toFixed(4)})`}} />
			</div>
			<div style={{position: 'absolute', left: TR.x + 300, top: TR.y + TR.h - 190, opacity: lead(f, wf(2, 'jumped'), 8)}}>
				<Chip text="STRAIN SHIFT · 15:26:45" tone={colors.amber} size={30} style={{transform: `scale(${bump(f, fps, wf(2, 'jumped'), 0.08).toFixed(4)})`}} />
			</div>
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 16, alignItems: 'center'}}>
				<div style={{opacity: lead(f, wf(0, 'dive'), 8), transform: `scale(${bump(f, fps, wf(0, 'eighty')).toFixed(4)})`}}>
					<Chip text="DIVE 80" tone={colors.ink} size={36} />
				</div>
				<div style={{opacity: lead(f, wf(0, 'fifteenth'), 8)}}>
					<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(0, 'fifteenth')} monthWord={wf(0, 'july')} yearWord={wf(0, 'twenty-two')} fromYear={2022} fromDay={1} size={36} />
				</div>
				<div style={{opacity: g4}}>
					<Chip text="GAUGE GROUP 4 · FORWARD END" tone={colors.cyan} size={30} />
				</div>
			</div>
			<Strip left="ILLUSTRATION · HULL: NTSB, USCG" right="STRAIN: OCEANGATE DATA · TRACED, NTSB 24-012 FIG. 26" />
		</AbsoluteFill>
	);
};

// ── 2 · Under oath (s3), then his own voice (the clip) ───────────────────────────────────────────────────────────

const Oath: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const clip = clipOf('h_brooks_diveagain_open');
	const end = clip.gapStartFrame + 12;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.03 * span(f, wf(3, 'later'), wf(3, 'wanted')) + 0.04 * span(f, wf(3, 'wanted'), wf(3, 'diving') + 20)).toFixed(4)})`, transformOrigin: '70% 40%'}}>
			<RealFootage f={f} start={sf(3) - 14} end={end} src="footage/h_brooks_oath.mp4" date="23 SEP 2024" what="MARINE BOARD HEARING" source="U.S. COAST GUARD · PUBLIC DOMAIN" push={0.06} focus={[0.62, 0.4]} />
			</div>
			<div style={{position: 'absolute', left: 96, top: 110, width: 760, padding: '22px 28px', background: 'rgba(10,13,18,0.78)', borderLeft: `3px solid ${colors.amber}`, opacity: Math.min(lead(f, wf(3, 'director'), 10), 1 - lead(f, end, 10))}}>
				<div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 48, letterSpacing: 2, color: colors.ink, textShadow: '0 2px 12px rgba(0,0,0,0.8)'}}>PHIL BROOKS</div>
				<div style={{marginTop: 8, ...T(30, {color: colors.amber, textShadow: '0 2px 10px rgba(0,0,0,0.9)'})}}>OCEANGATE DIRECTOR OF ENGINEERING 2021–23</div>
				<div style={{marginTop: 14, opacity: lead(f, wf(3, 'testified'), 8), transform: `scale(${bump(f, fps, wf(3, 'testified'), 0.06).toFixed(4)})`, transformOrigin: 'left center'}}>
					<Chip text="SWORN · 23 SEP 2024" tone={colors.ink} size={30} />
				</div>
				<div style={{marginTop: 18, opacity: lead(f, wf(3, 'stockton'), 8)}}>
					<Chip text="ON STOCKTON RUSH, OCEANGATE CEO" tone={f >= wf(3, 'executive') ? colors.amber : colors.cyan} size={30} style={{transform: `scale(${bump(f, fps, wf(3, 'executive'), 0.06).toFixed(4)})`, transformOrigin: 'left center'}} />
				</div>
			</div>
			<HearingClip f={f} id="h_brooks_diveagain_open" />
		</>
	);
};

// ── 3 · Twice more to the Titanic (s4): the wreck itself, the depth rolled out twice ─────────────────────────────

const Twice: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const a = wf(4, 'dived');
	const b = wf(4, 'twice');
	const c = wf(4, 'more');
	const d = rollTo(f, [
		{frame: a - 10, value: 0},
		{frame: b + 10, value: 3840},
	]);
	return (
		<>
			<RealFootage f={f} start={sf(4) - 14} end={ef(4) + 26} src="footage/noaa_bow.mp4" date="2004" what="THE TITANIC'S BOW · 3,840 M DOWN" source="NOAA · PUBLIC DOMAIN" push={0.07} focus={[0.4, 0.5]} />
			<div style={{position: 'absolute', right: 120, top: 140, textAlign: 'right', opacity: lead(f, a, 10)}}>
				<div style={T(30, {color: colors.cyan})}>TITAN · DEPTH</div>
				<div style={{...T(96, {color: colors.ink, fontWeight: 700}), textShadow: '0 4px 20px rgba(0,0,0,0.8)'}}>
					{Math.round(d).toLocaleString('en-US')} <span style={{fontSize: 44}}>M</span>
				</div>
				<div style={T(30, {color: colors.sub})}>{Math.round(d * 3.28084).toLocaleString('en-US')} FT</div>
				<div style={{marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end'}}>
					<div style={{opacity: lead(f, b, 8), transform: `scale(${bump(f, fps, b).toFixed(4)})`, transformOrigin: 'right center'}}>
						<Chip text="DIVE 81 · 19 JUL 2022" tone={colors.amber} size={36} />
					</div>
					<div style={{opacity: lead(f, c, 8), transform: `scale(${bump(f, fps, c).toFixed(4)})`, transformOrigin: 'right center'}}>
						<Chip text="DIVE 82 · 22 JUL 2022" tone={colors.amber} size={36} />
					</div>
				</div>
			</div>
		</>
	);
};

// ── 4 · Eleven months later (s5): the tail cone on the sea floor; the picture quiets on "five people" ─────────────

const Seabed: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const quiet = interpolate(f, [wf(5, 'all'), wf(5, 'five') + 10, wf(5, 'died'), wf(5, 'died') + 40], [0, 0.2, 0.3, 0.55], clamp);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, transform: `scale(${(1 + 0.035 * span(f, wf(5, 'hull'), wf(5, 'failed') + 30)).toFixed(4)})`, transformOrigin: '52% 40%'}}>
			<RealFootage f={f} start={sf(5) - 14} end={sf(6) + 8} src="footage/rov_tailcone.mp4" date="22 JUN 2023" what="ROV VIDEO · TITAN'S TAIL CONE ON THE SEA FLOOR" source="USCG MBI · DVIDS · PUBLIC DOMAIN" push={0.05} focus={[0.5, 0.45]} />
			</div>
			<AbsoluteFill style={{background: colors.void, opacity: quiet}} />
			<div style={{position: 'absolute', right: 96, top: 86, display: 'flex', gap: 16, alignItems: 'center', opacity: Math.min(lead(f, wf(5, 'eleven'), 8), 1 - interpolate(f, [ef(5) + 10, ef(5) + 40], [0, 1], clamp))}}>
				<StatusFlip f={f} fps={fps} word={wf(5, 'twenty-three')} from="15 JUL 2022" to="18 JUN 2023" toneFrom="amber" toneTo="amber" size={36} />
				<div style={{opacity: lead(f, wf(5, 'first'), 8), transform: `scale(${bump(f, fps, wf(5, 'first')).toFixed(4)})`}}>
					<Chip text="DIVE 88" tone={colors.ink} size={36} />
				</div>
				<div style={{opacity: lead(f, wf(5, 'failed'), 6)}}>
					<Chip text="HULL FAILED · ABOUT 3,363 M" tone={colors.red} size={36} />
				</div>
			</div>
		</>
	);
};

// ── 5 · The record (s6–s7): the hull and its monitor; the two reports land on the bench ───────────────────────────

const Cover: React.FC<{f: number; at: number; src: string; x: number; rot: number; label: string}> = ({f, at, src, x, rot, label}) => {
	const k = interpolate(f, [at - 6, at + 16], [0, 1], {...clamp, easing: ease.arrive});
	if (k <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: 400 - 260 * (1 - k), width: 330, perspective: '1000px', opacity: k}}>
			<div style={{transform: `rotateX(${(28 - 6 * k).toFixed(2)}deg) rotateZ(${rot}deg)`, transformOrigin: '50% 100%', boxShadow: `0 ${(40 * k).toFixed(0)}px 50px rgba(0,0,0,0.7)`, background: '#f3f4f6'}}>
				<Img src={media(src)} style={{width: 330, display: 'block'}} />
			</div>
			<div style={{marginTop: 18, ...T(26, {color: colors.ink, textShadow: '0 2px 8px rgba(0,0,0,0.9)'})}}>{label}</div>
		</div>
	);
};

const Record: React.FC = () => {
	const f = useFilmFrame();
	const cam = camAt(f, [
		{f: sf(6) - 14, cam: {pos: [17, 9, 18], look: [-3.5, -0.6, 0], fov: 32}},
		{f: wf(6, 'often'), cam: {pos: [16, 9, 17], look: [-3.5, -0.6, 0], fov: 32}},
		{f: wf(6, 'ignored'), cam: {pos: [15, 9.5, 17], look: [-3.8, -0.9, 0.2], fov: 32}},
		{f: ef(7) + 30, cam: {pos: [14, 10, 17], look: [-4.2, -1.2, 0.5], fov: 32}},
	]);
	const warn = lead(f, wf(6, 'warning'), 10);
	const rec = wf(7, 'record');
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={warn} sensors={warn} interfaces={0} bench={1} />
			<Cover f={f} at={rec} src="pages/mir_cover.jpg" x={150} rot={-5} label="NTSB · MIR-25-36 · 2025" />
			<Cover f={f} at={wf(7, 'complicated')} src="pages/roi_cover.jpg" x={530} rot={3} label="USCG MARINE BOARD · 04 AUG 2025" />
			<div style={{position: 'absolute', left: 140, top: 86, opacity: warn}}>
				<Chip text="HULL MONITOR · 8 ACOUSTIC SENSORS · 16 STRAIN GAUGES" tone={colors.cyan} size={30} />
			</div>
			<Strip left="ILLUSTRATION · SENSOR COUNT: NTSB MIR-25-36" right="REPORT COVERS: NTSB · U.S. COAST GUARD" />
		</>
	);
};

// ── 6 · OceanGate's own plot (s8): strain and depth beside it, both against the clock ─────────────────────────────

const OgPlot: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const timeOn = f >= wf(8, 'against');
	return (
		<>
			<Mount x={160} y={130} w={1600} h={780} start={sf(8) - 14} end={sf(9) + 10} source="OCEANGATE'S DIVE 80 PLOT · NTSB MIR-25-36 FIG. 20 · TRACE: NTSB 24-012 FIG. 26" labels={['TRACED']} lean={3}>
				<div style={{position: 'absolute', left: 20, top: 30}}>
					<TimeTrace
						f={f}
						w={1560}
						h={660}
						tEnd={17.1}
						showDepth={0.4 * lead(f, wf(8, 'depth'), 10) + 0.6 * lead(f, wf(8, 'beside'), 12)}
						stroke={f >= wf(8, 'plotted') ? colors.ink : colors.sub}
						axisLabel={<text textAnchor="middle" style={T(30, {fill: timeOn ? colors.amber : colors.ink, letterSpacing: 4, fontWeight: timeOn ? 700 : 400})}>TIME · NEWFOUNDLAND DAYLIGHT TIME</text>}
					/>
				</div>
			</Mount>
			<div style={{position: 'absolute', left: 200, top: 64, opacity: lead(f, wf(8, 'oceangate'), 8), transform: `scale(${bump(f, fps, wf(8, 'oceangate'), 0.05).toFixed(4)})`, transformOrigin: 'left center'}}>
				<Chip text="OCEANGATE'S OWN DIVE 80 PLOT" tone={f >= wf(8, 'strain') ? colors.amber : colors.ink} size={30} />
			</div>
			<div style={{position: 'absolute', left: 640, top: 600, display: 'flex', gap: 18}}>
				<div style={{opacity: lead(f, wf(8, 'depth'), 8), transform: `scale(${bump(f, fps, wf(8, 'depth')).toFixed(4)})`}}>
					<Chip text="DEPTH, BESIDE IT" tone={colors.cyan} size={36} />
				</div>
				<div style={{opacity: lead(f, wf(8, 'time'), 8), transform: `scale(${bump(f, fps, wf(8, 'time')).toFixed(4)})`}}>
					<Chip text="BOTH AGAINST TIME" tone={colors.amber} size={36} />
				</div>
			</div>
		</>
	);
};

// ── 7 · The turn (s9): the same dive-80 points swing from time to depth; the cut lands as the depth axis locks ────

const Turn: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const m = span(f, wf(9, 'plotted') - 6, wf(9, 'depth') + 14);
	const rot = Math.sin(Math.PI * m) * 38;
	const box = {x: 0, y: 0, w: 1560, h: 700};
	return (
		<>
			<div style={{position: 'absolute', left: 140, top: 86, opacity: lead(f, wf(9, 'n'), 8), transform: `scale(${bump(f, fps, wf(9, 'n')).toFixed(4)})`, transformOrigin: 'left center'}}>
				<Chip text="NTSB · U.S. NATIONAL TRANSPORTATION SAFETY BOARD" tone={f >= wf(9, 'investigator') ? colors.cyan : colors.ink} size={36} style={{transform: `scale(${bump(f, fps, wf(9, "america's"), 0.05).toFixed(4)})`, transformOrigin: 'left center'}} />
			</div>
			<div style={{position: 'absolute', left: 180, top: 170, width: 1560, height: 760, perspective: '1000px'}}>
				<div style={{position: 'absolute', inset: 0, transform: `translateY(${(30 * (1 - lead(f, wf(9, 'implosion'), 14))).toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${(1 - 0.06 * Math.sin(Math.PI * m)).toFixed(4)})`, transformOrigin: '50% 50%', background: 'rgba(18,24,36,0.9)', border: `1px solid ${colors.border}`, boxShadow: '0 40px 90px rgba(0,0,0,0.6)'}}>
					<div style={{position: 'absolute', left: 0, top: 20}}>
						<svg width={box.w} height={box.h}>
							<Replot m={m} z={0} show={{'80': 1}} hi={{'80': lead(f, wf(9, 'same'), 10)}} box={box} />
						</svg>
					</div>
				</div>
			</div>
			<div style={{position: 'absolute', left: 1180, top: 210, opacity: lead(f, wf(9, 'depth'), 8)}}>
				<Chip text="DIVE 80 · STRAIN AGAINST DEPTH" tone={colors.cyan} size={36} />
			</div>
			<Strip left="RECONSTRUCTION · DIGITISED FROM NTSB FIGURES" right="NTSB MATERIALS LAB REPORT 24-012, FIGS. 29–31" />
		</>
	);
};

// ── 8 · The question (s10): a slow push into the forward end, where the gauge sat ────────────────────────────────

const Push: React.FC = () => {
	const f = useFilmFrame();
	const cam = camAt(f, [
		{f: sf(10) - 14, cam: {pos: [10, 8.5, 14], look: [0, 0.6, 2.2], fov: 30}},
		{f: wf(10, 'draw'), cam: {pos: [9, 8.6, 13], look: [0, 0.8, 2.5], fov: 30}},
		{f: wf(10, 'numbers'), cam: {pos: [8.2, 8.7, 12.4], look: [0, 0.9, 2.7], fov: 30}},
		{f: wf(10, 'why'), cam: {pos: [7.4, 8.8, 11.8], look: [0, 1, 2.9], fov: 29}},
		{f: wf(10, 'company'), cam: {pos: [6.5, 9, 11], look: [0, 1.1, 3.1], fov: 29}},
		{f: ef(10) + 30, cam: {pos: [3.2, 9.5, 8.2], look: [0, 1.6, 3.8], fov: 28}},
	]);
	const g = lead(f, wf(10, 'eighty'), 10);
	const dmg = lead(f, wf(10, 'damaged'), 10);
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0.5 + 0.5 * g} sensors={0.3 + 0.4 * lead(f, wf(10, 'read'), 10) + 0.2 * lead(f, wf(10, 'data'), 8) * (1 - 0.7 * lead(f, wf(10, 'know'), 12))} interfaces={0.9 * dmg} bench={1} />
			<AbsoluteFill style={{background: colors.void, opacity: 0.25 * lead(f, wf(10, 'not'), 10) * (1 - dmg)}} />
			<div style={{position: 'absolute', left: 140, top: 86, opacity: g}}>
				<Chip text="GAUGE GROUP 4 · DIVE 80" tone={colors.amber} size={36} />
			</div>
			<Strip left="ILLUSTRATION · FIVE 1-INCH LAYERS: NTSB MIR-25-36" right="GAUGE AT THE FORWARD END: NTSB MIR-25-36" />
		</>
	);
};

export const open2: SceneDef[] = [
	{
		id: 'o2-hull',
		from: 0,
		to: sf(3) - 4,
		C: OpenHull,
		cues: [
			{frame: wf(0, 'strain'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(0, 'fifteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(1, 'bang'), sfx: 'metal_snap_sub', gainDb: -16},
			{frame: wf(2, 'jumped'), sfx: 'relay_click', gainDb: -20},
		],
	},
	{
		id: 'o2-oath',
		from: sf(3) - 14,
		to: clipOf('h_brooks_diveagain_open').gapEndFrame,
		C: Oath,
		cues: [{frame: wf(3, 'testified'), sfx: 'paper_slide', gainDb: -28}],
	},
	{id: 'o2-twice', from: sf(4) - 14, to: ef(4) + 26, C: Twice, cues: [{frame: wf(4, 'twice'), sfx: 'quartz_tick', gainDb: -24}, {frame: wf(4, 'more'), sfx: 'quartz_tick', gainDb: -24}]},
	{id: 'o2-seabed', from: sf(5) - 14, to: sf(6) + 8, C: Seabed, cues: [{frame: wf(5, 'later'), sfx: 'quartz_tick', gainDb: -22}, {frame: wf(5, 'failed'), sfx: 'pressure_drop', gainDb: -26}]},
	{id: 'o2-record', from: sf(6) - 14, to: sf(8) - 4, C: Record, cues: [{frame: wf(6, 'warning'), sfx: 'cockpit_chime', gainDb: -30}, {frame: wf(7, 'record'), sfx: 'paper_slide', gainDb: -22}]},
	{id: 'o2-ogplot', from: sf(8) - 14, to: sf(9) + 12, C: OgPlot, cues: [{frame: wf(8, 'time'), sfx: 'relay_click', gainDb: -24}]},
	{id: 'o2-turn', from: sf(9) - 10, to: wf(9, 'depth') + 16, C: Turn, cues: [{frame: wf(9, 'depth'), sfx: 'whoosh', gainDb: -26}]},
	{id: 'o2-push', from: wf(9, 'depth') + 14, to: sf(11) - 16, C: Push, cues: [{frame: wf(10, 'damaged'), sfx: 'relay_click', gainDb: -26}]},
];
