import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {RecordPage} from '../docs';
import {ActTitle, LAMP, media, Mount, Photo, useFilmFrame} from '../kit';
import {beatScale, camAt, dolly, Hull3D} from '../hull3d';
import {Chip, lit, Pop, RealFootage, sans, span, T, T_EVENT, TimeTrace, vis, Wd} from '../parts';
import {HearingClip, clipOf} from '../parts2';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part A (sentences 58–119): the 2018 warning, the first hull, dive 80, the testimony.
// Choreography: scenes/choreography/act3a.md (generated from this file).

/** A note bar under an exhibit: the narration's key words arrive on their words (the page stays the base picture). */
// ── 1 · Act title; the question is asked over the report it answers (hold after s58, s59) ──────────────────────────

const Opening: React.FC = () => <ActTitle n="III" title="The Boardroom" start={hold(58).from + 4} end={sf(59) - 8} />;

// ── 2 · 18 JAN 2018: the inspection report on the first hull (s59–s63); the page carries it, no notes ──────────────

const Report2018: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const photoIn = wf(63, 'delamination');
	const backIn = wf(63, 'warned');
	const bs = beatScale(f, [wf(59, 'warned'), wf(60, 'january'), wf(60, 'twenty'), wf(60, 'eighteen'), wf(61, 'director'), wf(61, 'operations'), wf(61, 'filed'), wf(61, 'report'), wf(61, "titan's"), wf(61, 'first'), wf(61, 'hull'), wf(62, 'twenty-six'), wf(62, 'items'), wf(63, 'wrote'), wf(63, 'ends'), wf(63, 'showed'), wf(63, 'visible'), wf(63, 'delamination'), wf(63, 'and'), wf(63, 'potential'), wf(63, 'inter-laminar'), wf(63, 'fatigue'), wf(63, 'pressure')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<RecordPage set="cg098" start={sf(59) - 14} end={ef(62) + 20} hl={[]} page={2} label="EXHIBIT" title="HULL 1" focus={{x: 120, y: 120, w: 1630, h: 760}} pushTo={wf(62, 'twenty-six')} />
			<RecordPage set="cg098" start={sf(63) - 16} end={photoIn + 6} hl={[{key: 'visible', at: wf(63, 'visible')}]} label="EXHIBIT" title="HULL 1" pushTo={wf(63, 'ends')} />
			<RecordPage set="cg098" page={9} start={photoIn} end={backIn + 4} hl={[]} label="EXHIBIT" title="THE CUT-OFF ENDS, PHOTOGRAPHED" focus={{x: 40, y: 200, w: 1700, h: 1100}} pushTo={backIn} />
			<RecordPage set="cg098" start={backIn - 4} end={ef(63) + 30} hl={[{key: 'fatigue', at: wf(63, 'inter-laminar')}]} label="EXHIBIT" title="HULL 1" pushTo={wf(63, 'potential') + 20} />
			<div style={{position: 'absolute', right: 96, top: 968, display: 'flex', gap: 14}}>
				<span style={{opacity: vis(f, wf(60, 'eighteenth') - 4, ef(63) + 20)}}>
					<DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(60, 'eighteenth')} monthWord={wf(60, 'january')} yearWord={wf(60, 'eighteen')} fromYear={2018} size={32} />
				</span>
				<span style={{opacity: vis(f, wf(61, 'director') - 4, ef(62) + 10)}}>
					<Chip text="DIRECTOR OF MARINE OPERATIONS" tone={colors.ink} size={30} />
				</span>
			</div>
		</AbsoluteFill>
	);
};

// ── 3 · The meeting, recorded (s64–s66): the transcript itself, from the first word ──────────────────────────────

const Meeting: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const bs = beatScale(f, [wf(64, 'next'), wf(64, 'the', 1), wf(64, 'executive'), wf(64, 'argued'), wf(64, 'testing'), wf(65, 'recorded'), wf(66, 'recording'), wf(66, 'answered'), wf(66, 'ends'), wf(66, 'scrap'), wf(66, 'away'), wf(66, 'reason'), wf(66, 'acoustic'), wf(66, 'monitoring'), wf(66, 'tell'), wf(66, 'before')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<RecordPage set="cg100" start={sf(64) - 12} end={wf(66, 'acoustic') - 8} hl={[{key: 'scraps', at: wf(66, 'scrap')}, {key: 'crap', at: wf(66, 'cut')}, {key: 'cutoff', at: wf(66, 'reason')}]} label="EXHIBIT" title="Q. = MR. RUSH" pushTo={wf(66, 'scrap')} />
			<RecordPage set="cg100" start={wf(66, 'acoustic') - 14} end={ef(66) + 30} hl={[{key: 'acoustic', at: wf(66, 'monitoring')}]} label="EXHIBIT" title="Q. = MR. RUSH" focus={{x: 120, y: 820, w: 1660, h: 330}} pushTo={wf(66, 'tell')} />
			<div style={{position: 'absolute', right: 96, top: 968, display: 'flex', gap: 14, alignItems: 'center', opacity: vis(f, sf(64) - 6, ef(66) + 20)}}>
				<DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(64, 'next')} monthWord={wf(64, 'day')} size={32} fromDay={18} />
				<span style={{opacity: lead(f, wf(65, 'recorded'), 8), transform: `scale(${bump(f, fps, wf(65, 'recorded') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
					<Chip text="● RECORDED BY THE CEO" tone={colors.red} size={30} />
				</span>
			</div>
		</AbsoluteFill>
	);
};

// ── 4 · Fired; the letter of twenty, on the board's own page; the call (s67–s71) ────────────────────────────────

const Fired: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const bs = beatScale(f, [wf(67, 'four'), wf(67, 'later'), wf(67, 'director'), wf(67, 'fired'), wf(68, 'letter'), wf(68, 'two'), wf(68, 'them'), wf(68, 'impasse'), wf(68, 'hull'), wf(69, 'more'), wf(69, 'twenty'), wf(69, 'submersible'), wf(69, 'professionals'), wf(69, 'signed'), wf(69, 'urging'), wf(69, 'executive'), wf(69, 'safety'), wf(69, 'first'), wf(69, 'follow'), wf(69, 'established'), wf(69, 'practices'), wf(70, 'formally'), wf(71, 'called'), wf(71, 'industry'), wf(71, 'behind'), wf(71, 'said'), wf(71, 'association')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<RecordPage set="roi" start={sf(67) - 16} end={ef(68) + 24} hl={[{key: 'impasse', at: wf(68, 'impasse')}]} label="EXHIBIT" title="QUOTING THE TERMINATION LETTER" pushTo={wf(68, 'termination')} />
			<RecordPage set="roi" start={sf(69) - 12} end={ef(71) + 30} hl={[{key: 'letter_urging', at: wf(69, 'urging')}, {key: 'letter_twenty', at: wf(69, 'twenty')}, {key: 'letter_notsent', at: wf(70, 'never')}, {key: 'letter_received', at: wf(71, 'received')}]} label="EXHIBIT" title="THE LETTER OF MARCH 2018" pushTo={wf(70, 'never')} />
			<div style={{position: 'absolute', right: 96, top: 968, opacity: vis(f, wf(67, 'four') - 6, ef(68) + 20), display: 'flex', gap: 14, alignItems: 'center'}}>
				<DatePill f={f} fps={fps} day={23} month={1} year={2018} dayWord={wf(67, 'later')} fromDay={19} size={32} />
				<span style={{opacity: lead(f, wf(67, 'fired'), 8), transform: `scale(${bump(f, fps, wf(67, 'fired') + LAND).toFixed(4)})`, display: 'inline-block'}}>
					<Chip text="FIRED" tone={colors.red} size={32} />
				</span>
			</div>
			<div style={{position: 'absolute', right: 96, top: 968, opacity: vis(f, wf(69, 'march') - 6, ef(71) + 20)}}>
				<Chip text="MARCH 2018" tone={colors.amber} size={32} style={{transform: `scale(${bump(f, fps, wf(69, 'march')).toFixed(4)})`}} />
			</div>
		</AbsoluteFill>
	);
};

// ── 5 · The first hull, and the failure mode it named; 2019 (s72–s77): the record's own photographs ─────────────

const FirstHull: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const bs = beatScale(f, [wf(72, 'first'), wf(72, 'hull'), wf(73, 'named'), wf(73, 'report'), wf(73, 'delamination'), wf(73, 'is'), wf(73, 'investigators'), wf(73, 'find'), wf(74, 'twenty'), wf(74, 'nineteen'), wf(74, 'crack'), wf(74, 'found'), wf(74, 'first'), wf(74, 'hull'), wf(75, 'first'), wf(75, 'director'), wf(75, 'engineering'), wf(75, 'testified'), wf(75, 'refused'), wf(75, 'sign'), wf(75, 'his'), wf(75, 'kept'), wf(75, "year's"), wf(76, 'chief'), wf(76, 'executive'), wf(76, 'to'), wf(77, 'letter'), wf(77, 'cited'), wf(77, 'expedition')], 0.02);
	const delam = vis(f, wf(73, 'failure') - 10, sf(74) + 4, 10, 12);
	const photo = vis(f, sf(74) - 12, ef(77) + 30);
	const crack = vis(f, wf(75, 'testified') - 10, ef(77) + 30, 12, 12);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<AbsoluteFill style={{opacity: vis(f, sf(72) - 12, wf(73, 'failure') + 4)}}>
				<RealFootage f={f} start={sf(72) - 12} end={wf(73, 'failure') + 4} src="photos/hull1_2019.jpg" video={false} date="" what="THE FIRST HULL, IN STORAGE · COAST GUARD PHOTO" source="USCG · DVIDS" push={0.08} focus={[0.55, 0.5]} />
			</AbsoluteFill>
			{delam > 0 ? (
				<AbsoluteFill style={{opacity: delam}}>
					<Photo src={media('photos/delam_hull1.jpg')} iw={1950} ih={627} start={wf(73, 'failure') - 10} end={sf(74) + 4} source="DELAMINATION IN A TRIMMED END OF THE FIRST HULL · NTSB MIR-25-36 FIG. 18" from={{x: 0, y: 0, w: 975, h: 627}} to={{x: 40, y: 40, w: 860, h: 560}} box={{x: 150, y: 200, w: 1620, h: 620}} labels={['NTSB PHOTO']} />
					<div style={{position: 'absolute', left: 170, top: 120, opacity: lead(f, wf(73, 'second'), 8)}}>
						<Chip text="DELAMINATION: FOUND IN HULL 2 BY THE NTSB" tone={colors.red} size={30} />
					</div>
				</AbsoluteFill>
			) : null}
			{photo > 0 ? (
				<AbsoluteFill style={{opacity: photo}}>
					<RealFootage f={f} start={sf(74) - 12} end={ef(77) + 30} src="photos/hull1_2019.jpg" video={false} date="" what="THE FIRST HULL, IN STORAGE · COAST GUARD PHOTO" source="USCG · DVIDS" push={0.06} focus={[0.6, 0.55]} box={{x: 96, y: 110, w: 860, h: 640}} under />
					<div style={{position: 'absolute', left: 990, top: 110, opacity: crack}}>
						<Photo src={media('photos/hull1_crack.jpg')} iw={808} ih={342} start={wf(75, 'testified') - 10} end={ef(77) + 30} source="THE FIRST HULL, CRACK GROUND OUT (CIRCLE: MBI) · USCG ROI FIG. 132" from={{x: 0, y: 0, w: 808, h: 342}} to={{x: 300, y: 40, w: 480, h: 260}} box={{x: 0, y: 0, w: 830, h: 460}} labels={['RECORD PHOTO']} />
					</div>
					<div style={{position: 'absolute', left: 96, top: 830, display: 'flex', gap: 14, flexWrap: 'wrap', width: 1720}}>
						<span style={{opacity: lead(f, wf(74, 'crack'), 8), transform: `scale(${bump(f, fps, wf(74, 'found') + LAND).toFixed(4)})`, display: 'inline-block'}}>
							<Chip text="2019 · CRACK FOUND" tone={colors.red} size={34} />
						</span>
						<span style={{opacity: lead(f, wf(75, 'testified'), 8)}}>
							<Chip text="FIRST DIRECTOR OF ENGINEERING · HIS TESTIMONY" tone={colors.cyan} size={30} />
						</span>
						<span style={{opacity: lead(f, wf(77, 'letter'), 8)}}>
							<Chip text="THE COMPANY'S LETTER TO HIM" tone={colors.amber} size={30} />
						</span>
					</div>
				</AbsoluteFill>
			) : null}
		</AbsoluteFill>
	);
};

// ── 6 · Hull 2, on the bench; its dive count rolls; "Now, dive eighty." (s78–s80) ────────────────────────────────

const Hull2: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(78, 'built'), wf(78, 'one'), wf(78, 'lost'), wf(78, 'twenty'), wf(78, 'twenty-three'), wf(79, 'numbered'), wf(79, 'fifty'), wf(79, 'eighty-eight'), wf(80, 'dive')];
	const cam = dolly(camAt(f, [
		{f: sf(78) - 12, cam: {pos: [30, 13, 26], look: [0, -0.8, 0.4], fov: 30}},
		{f: wf(80, 'eighty'), cam: {pos: [14, 13, 16], look: [0, 0.8, 2.8], fov: 30}},
		{f: ef(80) + 30, cam: {pos: [12, 13, 14], look: [0, 1, 3.2], fov: 30}},
	]), f, BEATS);
	const n = Math.round(rollTo(f, [{frame: wf(79, 'fifty') - 4, value: 50}, {frame: wf(79, 'eighty-eight'), value: 88}, {frame: wf(80, 'now'), value: 88}, {frame: wf(80, 'eighty') + 4, value: 80}]));
	const now = lead(f, wf(80, 'eighty'), 8);
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={0.6 * now} g4={now} sensors={0.2} interfaces={0} bench={1} />
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 16, alignItems: 'center'}}>
				<div style={{opacity: lead(f, wf(78, 'second'), 8)}}><Chip text="HULL 2 · 2021–23" tone={colors.ink} size={34} /></div>
				<div style={{opacity: lead(f, wf(78, 'lost'), 8)}}><Chip text="LOST 18 JUN 2023" tone={colors.red} size={30} /></div>
			</div>
			<div style={{position: 'absolute', right: 120, top: 140, textAlign: 'right', opacity: lead(f, wf(79, 'dives'), 8)}}>
				<div style={T(30, {color: colors.cyan})}>DIVE</div>
				<div style={{...T(120, {color: now > 0.5 ? colors.amber : colors.ink, fontWeight: 700}), transform: `scale(${bump(f, fps, wf(80, 'eighty')).toFixed(4)})`, transformOrigin: 'right center'}}>{f >= wf(79, 'fifty') - 4 ? n : ''}</div>
				<div style={T(30, {color: colors.sub})}>{f >= wf(79, 'eighty-eight') ? 'OF 50–88' : ''}</div>
			</div>
			<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · DIVE NUMBERS: NTSB MIR-25-36</div>
		</>
	);
};

// ── 7 · Dive 80 (s81–s86): back up from the wreck on real water; the bang on the hull; its own trace beside it ─────

const fmtM = (v: number): string => Math.round(v).toLocaleString('en-US');
const jolt = (f: number, at: number): number => (f < at ? 0 : 12 * Math.exp(-(f - at) / 2.2) * Math.cos((f - at) * 0.8));
const Dive80: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(81, 'july'), wf(81, 'twenty'), wf(81, 'twenty-two'), wf(81, 'titan'), wf(81, 'titanic'), wf(81, 'came'), wf(82, 'surface'), wf(82, 'people'), wf(82, 'heard'), wf(82, 'bang'), wf(83, 'small'), wf(84, 'exactly'), wf(84, 'happened'), wf(84, 'place'), wf(84, 'surface'), wf(85, 'channel'), wf(85, 'two'), wf(85, 'acoustic'), wf(85, 'peaked'), wf(85, 'twenty-five'), wf(85, 'thousand'), wf(86, 'moment'), wf(86, 'strain'), wf(86, 'beside')];
	const sea = vis(f, sf(81) - 12, ef(81) + 14);
	const tEnd = rollTo(f, [{frame: sf(85) - 10, value: 14.6}, {frame: wf(85, 'peaked') + LAND, value: T_EVENT - 0.003}, {frame: wf(86, 'jumped') - 4, value: T_EVENT + 0.003}, {frame: wf(86, 'jumped') + 30, value: 15.8}]);
	const ae = lead(f, wf(85, 'peaked'), 10);
	const jump = lead(f, wf(86, 'jumped'), 8);
	const depth = rollTo(f, [{frame: wf(81, 'reached') - 6, value: 3840}, {frame: wf(81, 'came'), value: 3840}, {frame: ef(81) + 30, value: 400}, {frame: wf(82, 'surface'), value: 120}]);
	const trace = lead(f, sf(85) - 8, 14);
	const HW = 1920 - 860 * trace;
	const cam = dolly(camAt(f, [
		{f: sf(82) - 14, cam: {pos: [16, 13, 19], look: [0, 0.6, 2.4], fov: 30}},
		{f: wf(82, 'bang'), cam: {pos: [12, 13, 15], look: [0, 1.2, 3.2], fov: 30}},
		{f: sf(85), cam: {pos: [17, 12, 19], look: [0, 0.6, 2.6], fov: 30}},
		{f: ef(86) + 40, cam: {pos: [15, 12, 18], look: [0, 0.8, 2.8], fov: 30}},
	]), f, BEATS);
	const y = jolt(f, wf(82, 'bang'));
	return (
		<>
			<AbsoluteFill style={{transform: `translateY(${y.toFixed(2)}px)`}}>
				<div style={{position: 'absolute', left: 0, top: 0, width: HW, height: 1080}}>
					<Hull3D width={HW} height={1080} cam={cam} cut={0.6} g4={jump} sensors={0.25} aeDark={[0, ae, 0, 0, 0, 0, 0, 0]} interfaces={0} bench={1} />
				</div>
				{trace > 0 ? (
					<div style={{position: 'absolute', left: 1000, top: 170, width: 860, height: 560, opacity: trace, background: 'rgba(10,13,18,0.55)', borderLeft: `2px solid ${colors.cyan}`}}>
						<TimeTrace f={f} w={860} h={560} tEnd={tEnd} ae={ae} jump={jump} showDepth={0} stroke={colors.ink} />
					</div>
				) : null}
				<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center'}}>
					<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(81, 'fifteenth')} monthWord={wf(81, 'july')} yearWord={wf(81, 'twenty-two')} fromYear={2022} size={32} />
					<Chip text="DIVE 80" tone={colors.ink} size={32} />
					{f >= wf(84, 'differ') - 10 && f < sf(85) ? <div style={{opacity: lead(f, wf(84, 'differ'), 8) * (1 - trace)}}><Chip text="EXACT DEPTH: RECORDS DIFFER · ALL: NEAR THE SURFACE" tone={colors.amber} size={28} /></div> : null}
					{f >= wf(85, 'two') - 10 ? <div style={{opacity: lead(f, wf(85, 'two'), 8), transform: `scale(${bump(f, fps, wf(85, 'peaked')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="ACOUSTIC CH 2 · 25,687 mV" tone={colors.red} size={30} /></div> : null}
					{f >= wf(86, 'jumped') - 10 ? <div style={{opacity: jump, transform: `scale(${bump(f, fps, wf(86, 'jumped')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text="STRAIN · GAUGE GROUP 4" tone={colors.amber} size={30} /></div> : null}
				</div>
				<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>{trace > 0.5 ? 'STRAIN: TRACED, NTSB 24-012 FIG. 26 · PEAK: USCG ROI' : 'ILLUSTRATION · HULL FROM NTSB MIR-25-36, USCG ROI'}</div>
			</AbsoluteFill>
			{sea > 0 ? (
				<AbsoluteFill style={{opacity: sea}}>
					<RealFootage f={f} start={sf(81) - 12} end={ef(81) + 14} src="footage/atl_surface.mp4" date="" what="THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY" source="REAL NAVIGATION / YOUTUBE · CC BY" push={0.06} />
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center'}}>
						<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(81, 'fifteenth')} monthWord={wf(81, 'july')} yearWord={wf(81, 'twenty-two')} fromYear={2022} size={32} />
						<Chip text="DIVE 80" tone={colors.ink} size={32} />
					</div>
					<div style={{position: 'absolute', right: 120, top: 140, textAlign: 'right', opacity: lead(f, wf(81, 'reached'), 8)}}>
						<div style={T(30, {color: colors.cyan})}>TITAN · DEPTH</div>
						<div style={{...T(96, {color: colors.ink, fontWeight: 700}), textShadow: '0 4px 20px rgba(0,0,0,0.8)'}}>{fmtM(depth)} <span style={{fontSize: 44}}>M</span></div>
						<div style={T(30, {color: colors.sub})}>ILLUSTRATIVE ASCENT</div>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 8 · Phil Brooks, under oath (s86–s98, clips) ────────────────────────────────────────────────────────────────

const Brooks: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const oath = vis(f, sf(87) - 12, ef(89) + 20);
	const gap = vis(f, sf(91) - 10, clipOf('h_brooks_flashlight').gapStartFrame - 10);
	const beam = span(f, wf(92, 'flashlight') - 6, wf(92, 'hull') + 10);
	const bs = beatScale(f, [wf(87, 'director'), wf(87, 'engineering'), wf(87, 'then'), wf(87, 'promoted'), wf(87, 'software'), wf(87, 'before'), wf(88, 'testified'), wf(88, 'had'), wf(88, 'background'), wf(88, 'mechanical'), wf(88, 'engineering'), wf(88, 'materials'), wf(88, 'and'), wf(88, 'agreement'), wf(88, 'others'), wf(88, 'mainly'), wf(88, 'executive'), wf(88, 'handle'), wf(89, 'described'), wf(89, 'what'), wf(89, 'after'), wf(90, 'hull'), wf(90, 'best'), wf(91, 'lined'), wf(91, 'insert'), wf(91, 'outside'), wf(92, 'flashlight'), wf(92, 'said'), wf(92, 'down'), wf(92, 'between'), wf(92, 'insert'), wf(94, 'insert'), wf(94, 'said'), wf(94, 'removed'), wf(95, 'done'), wf(96, 'check'), wf(97, 'shift'), wf(97, 'level'), wf(97, 'two'), wf(97, 'of'), wf(97, 'sixteen'), wf(97, 'channels'), wf(98, 'shift'), wf(98, 'said'), wf(98, 'something'), wf(98, 'concerned'), wf(98, 'sure'), wf(99, 'added'), wf(99, 'a'), wf(99, 'expert'), wf(99, 'this'), wf(99, 'one'), wf(99, 'minor')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			{oath > 0 ? (
				<AbsoluteFill style={{opacity: oath}}>
					<RealFootage f={f} start={sf(87) - 12} end={ef(89) + 30} src="footage/h_brooks_oath.mp4" date="23 SEP 2024" what="MARINE BOARD HEARING" source="U.S. COAST GUARD · PUBLIC DOMAIN" push={0.04} focus={[0.62, 0.4]} box={{x: 96, y: 110, w: 1120, h: 630}} under />
					<div style={{position: 'absolute', left: 1250, top: 120, width: 574}}>
						<Wd f={f} at={wf(87, 'phil')} lightAt={wf(87, 'brooks')} base={colors.ink} style={{fontFamily: sans, fontWeight: 700, fontSize: 48, letterSpacing: 2}}>PHIL BROOKS</Wd>
						<div style={{marginTop: 12, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(87, 'director')} lightAt={wf(87, 'engineering')} tone={colors.amber} style={{whiteSpace: 'nowrap'}}>DIRECTOR OF ENGINEERING, 2021–23</Wd>
							<br />
							<Wd f={f} at={wf(87, 'promoted')}>PROMOTED FROM </Wd>
							<Wd f={f} at={wf(87, 'software')} lightAt={wf(87, 'engineer')} tone={colors.cyan}>SOFTWARE ENGINEER</Wd>
							<br />
							<Wd f={f} at={wf(87, 'before')} lightAt={wf(87, 'season')}>BEFORE THE 2022 SEASON</Wd>
						</div>
						<div style={{marginTop: 26, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(88, 'testified')}>HE TESTIFIED: </Wd>
							<Wd f={f} at={wf(88, 'no')} lightAt={wf(88, 'background')} tone={colors.amber}>NO BACKGROUND IN </Wd>
							<Wd f={f} at={wf(88, 'mechanical')} lightAt={wf(88, 'materials')} tone={colors.amber}>MECHANICAL ENGINEERING OR MATERIALS</Wd>
							<br />
							<Wd f={f} at={wf(88, 'agreement')}>THE AGREEMENT: </Wd>
							<Wd f={f} at={wf(88, 'others')} lightAt={wf(88, 'mainly')}>OTHERS, </Wd>
							<Wd f={f} at={wf(88, 'chief')} lightAt={wf(88, 'executive')} tone={colors.amber}>MAINLY THE CEO, </Wd>
							<Wd f={f} at={wf(88, 'handle')} lightAt={wf(88, 'tasks')}>WOULD HANDLE THOSE TASKS</Wd>
						</div>
						<div style={{marginTop: 26, opacity: lead(f, wf(89, 'oath'), 8)}}>
							<Chip text={f >= wf(89, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER THE BANG' : f >= wf(89, 'described') ? 'UNDER OATH · WHAT THEY DID' : 'UNDER OATH'} tone={colors.cyan} size={26} style={{transform: `scale(${bump(f, fps, wf(89, 'bang') + LAND, 0.05).toFixed(4)})`}} />
						</div>
					</div>
				</AbsoluteFill>
			) : null}
			{/* s89: as best they could */}
			<RecordPage set="cg112" start={sf(90) - 14} end={sf(91) + 6} hl={[{key: 'asbest', at: wf(90, 'best')}]} label="EXHIBIT" pushTo={wf(90, 'hull')} />
			{/* s90–s91: the insert inside, the cover outside, a flashlight down the gap */}
			{gap > 0 ? (
				<AbsoluteFill style={{opacity: gap}}>
					<Mount x={140} y={130} w={1640} h={760} start={sf(91) - 10} end={clipOf('h_brooks_flashlight').gapStartFrame} source="WALL, INSERT, FAIRING · AS BROOKS TESTIFIED, CG 112 P. 765–6" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* outer cover (fairing) */}
						<rect x={300} y={300} width={1320} height={60} fill={colors.sub} opacity={0.35 * lead(f, wf(91, 'covered'), 12)} />
						<text x={300} y={290} style={T(28, lit(f, wf(91, 'covered'), colors.ink))} opacity={lead(f, wf(91, 'outside'), 8)}>OUTSIDE: COVERED</text>
						{/* the carbon wall */}
						{Array.from({length: 5}).map((_, i) => (
							<rect key={i} x={300} y={370 + i * 32} width={1320} height={28} fill={colors.cyan} opacity={0.22 + 0.1 * (i % 2)} stroke={colors.cyan} strokeWidth={1} />
						))}
						<text x={1640} y={455} style={T(28, {fill: colors.cyan})}>HULL</text>
						{/* the gap and the insert */}
						<rect x={300} y={548} width={1320} height={16} fill={colors.void} />
						<rect x={300} y={566} width={1320} height={70} fill={colors.ink} opacity={0.32 * lead(f, wf(91, 'insert'), 12)} />
						<text x={300} y={676} style={T(28, lit(f, wf(91, 'insert'), colors.ink))} opacity={lead(f, wf(91, 'inside'), 8)}>INSIDE: LINED BY AN INSERT</text>
						<text x={1640} y={562} style={T(28, lit(f, wf(92, 'gap'), colors.amber))} opacity={lead(f, wf(92, 'small'), 8)}>A SMALL GAP</text>
						{/* the flashlight beam down the gap */}
						<g opacity={lead(f, wf(92, 'flashlight'), 8)}>
							<rect x={210} y={536} width={70} height={40} rx={8} fill={colors.amber} />
							<polygon points={`280,550 ${280 + 1340 * beam},${540} ${280 + 1340 * beam},${572} 280,562`} fill={colors.amber} opacity={0.4} />
						</g>
					</svg>
					<div style={{position: 'absolute', left: 300, top: 760, ...T(32, {})}}>
						<Wd f={f} at={wf(92, 'look')} lightAt={wf(92, 'down')}>LOOK DOWN </Wd>
						<Wd f={f} at={wf(92, 'between')} lightAt={wf(92, 'insert')}>BETWEEN THE INSERT </Wd>
						<Wd f={f} at={wf(92, 'and')} lightAt={wf(92, 'hull')}>AND THE HULL</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_flashlight" />
			{/* s93–s94: the insert never removed */}
			<RecordPage set="cg112" start={sf(94) - 16} end={ef(95) + 20} hl={[{key: 'insert', at: wf(94, 'never')}]} label="EXHIBIT" pushTo={wf(94, 'insert')} />
			{/* s95–s98: the data was the check */}
			<RecordPage
				set="cg112"
				start={sf(96) - 16}
				end={ef(99) + 20}
				hl={[
					{key: 'shift', at: wf(97, 'shift')},
					{key: 'concern', at: wf(98, 'concerned')},
					{key: 'expert', at: wf(99, 'expert')},
					{key: 'minor', at: wf(99, 'minor')},
				]}
				label="EXHIBIT"
				pushTo={wf(96, 'data')}
			/>
			<HearingClip f={f} id="h_brooks_decision" />
			<HearingClip f={f} id="h_brooks_diveagain" />
		</AbsoluteFill>
	);
};

// ── 9 · The theory of the bang (s103–s106) on the 3D hull and its frame; the contractor and Brooks on their pages ──

const Theory: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(103, 'bang'), wf(104, 'testified'), wf(104, 'chief'), wf(104, 'theory'), wf(104, 'frame'), wf(105, 'slightly'), wf(105, 'down'), wf(105, 'frame'), wf(105, 'bolted'), wf(105, 'does'), wf(105, 'on', 1), wf(105, 'frame', 1), wf(105, 'may'), wf(105, 'sprung'), wf(105, 'snapped'), wf(105, 'shape'), wf(106, 'without'), wf(106, 'qualified'), wf(106, 'engineer'), wf(106, 'found'), wf(106, 'plausible')];
	const ill = vis(f, sf(103) - 10, ef(106) + 20);
	const down = span(f, wf(105, 'compresses') - 6, wf(105, 'down') + 12) * (1 - span(f, wf(105, 'up') - 4, wf(105, 'up') + 16));
	const sprung = span(f, wf(105, 'sprung') - 6, wf(105, 'sprung') + 10) * (1 - span(f, wf(105, 'snapped') - 2, wf(105, 'back') + 6));
	const cam = dolly(camAt(f, [
		{f: sf(103) - 10, cam: {pos: [30, 10, 22], look: [0, -1.4, 0.4], fov: 30}},
		{f: wf(104, 'frame'), cam: {pos: [22, 5, 18], look: [0, -2.4, 0.6], fov: 30}},
		{f: ef(106) + 20, cam: {pos: [21, 5, 17], look: [0, -2.4, 0.8], fov: 30}},
	]), f, BEATS);
	const bs = beatScale(f, [wf(106, 'without'), wf(106, 'qualified'), wf(106, 'engineer'), wf(106, 'found'), wf(106, 'plausible'), wf(107, 'expedition'), wf(107, 'testified'), wf(107, 'asked'), wf(107, 'data'), wf(107, 'delamination'), wf(108, 'account'), wf(108, 'was'), wf(108, 'microns'), wf(108, 'the'), wf(108, 'two'), wf(108, 'dives'), wf(108, 'ahead'), wf(108, 'visual'), wf(108, 'back'), wf(109, 'testified'), wf(109, 'converted'), wf(109, 'shift'), wf(109, 'physical'), wf(109, 'distance'), wf(109, 'judged'), wf(109, 'relatively'), wf(109, 'movement')], 0.018);
	return (
		<>
			{ill > 0 ? (
				<AbsoluteFill style={{opacity: ill}}>
					<Hull3D width={1920} height={1080} cam={cam} cut={0} g4={0} sensors={0} interfaces={0} frame={lead(f, wf(104, 'frame'), 12)} squeeze={down} sprung={sprung} bench={1} />
					<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14}}>
						<div style={{opacity: lead(f, wf(104, 'brooks'), 8)}}><Chip text="THE CEO'S THEORY, AS BROOKS TESTIFIED · CG 112 P. 785" tone={colors.ink} size={30} /></div>
						<div style={{opacity: lead(f, wf(105, 'compresses'), 8), transform: `scale(${bump(f, fps, wf(105, 'compresses')).toFixed(4)})`, transformOrigin: 'left center'}}><Chip text={sprung > 0.1 ? 'UP: THE FRAME SPRINGS' : 'DOWN: THE HULL COMPRESSES'} tone={sprung > 0.1 ? colors.red : colors.amber} size={30} /></div>
					</div>
					<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION OF A THEORY · MOVEMENT EXAGGERATED</div>
				</AbsoluteFill>
			) : null}
			<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`}}>
				<RecordPage set="cg112" start={wf(106, 'qualified') - 10} end={ef(106) + 16} hl={[{key: 'plausible', at: wf(106, 'plausible')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(106, 'plausible')} />
				<RecordPage set="cg112" start={sf(107) - 16} end={ef(108) + 20} hl={[{key: 'microns', at: wf(108, 'microns')}, {key: 'nexttwo', at: wf(108, 'two')}]} label="EXHIBIT" title="A CONTRACTOR'S TESTIMONY" pushTo={wf(108, 'microns')} />
				<RecordPage set="cg112" start={sf(109) - 14} end={ef(109) + 24} hl={[{key: 'physical', at: wf(109, 'physical')}, {key: 'smallmove', at: wf(109, 'relatively')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(109, 'relatively')} />
			</AbsoluteFill>
		</>
	);
};

// ── 10 · Dive 81 and after (s110–s117): the hull, channel 4 on the bench, the threshold on its mount ───────────────

const After80: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(110, 'again'), wf(110, 'nineteenth'), wf(111, 'testified'), wf(111, 'after'), wf(111, 'dive'), wf(111, "didn't"), wf(111, 'further'), wf(111, 'strain'), wf(112, 'bangs'), wf(113, 'acoustics'), wf(113, 'seemed'), wf(113, 'ordinary'), wf(114, 'one'), wf(114, 'sensor'), wf(114, 'testified'), wf(114, 'did'), wf(114, 'activity'), wf(114, 'dives'), wf(114, 'followed'), wf(114, 'not'), wf(114, 'twenty'), wf(114, 'twenty-one'), wf(114, 'the', 1), wf(114, 'wanted'), wf(114, 'concerned'), wf(115, 'executive'), wf(116, 'threshold'), wf(116, 'set'), wf(116, 'said'), wf(116, 'maybe'), wf(116, 'over'), wf(116, 'never'), wf(116, 'worse'), wf(116, 'did'), wf(116, 'concern'), wf(117, 'found'), wf(117, 'never'), wf(117, 'kind'), wf(117, 'signal'), wf(117, 'triggered')];
	const base = vis(f, sf(110) - 12, ef(117) + 30);
	const ch4 = lead(f, wf(114, 'activity'), 16);
	const pulse = f >= wf(114, 'activity') ? 0.5 + 0.5 * Math.sin(((f - wf(114, 'activity')) / 60) * Math.PI * 2 * 1.2) : 0;
	const cam = dolly(camAt(f, [
		{f: sf(110) - 12, cam: {pos: [28, 13, 24], look: [-2, -0.8, 0.4], fov: 30}},
		{f: wf(114, 'one'), cam: {pos: [14, 14, 14], look: [-2, 0.4, 1], fov: 30}},
		{f: ef(117) + 30, cam: {pos: [20, 13, 20], look: [-2.5, -0.6, 0.6], fov: 30}},
	]), f, BEATS);
	const thrY = 120;
	return (
		<AbsoluteFill style={{opacity: base}}>
			<Hull3D width={1920} height={1080} cam={cam} cut={0.6} g4={0} sensors={0.2} aeOn={0.2 + 0.8 * ch4} crackle={0.35 * ch4 * pulse} interfaces={0} bench={1} />
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center'}}>
				<DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(110, 'nineteenth')} monthWord={wf(110, 'july')} fromDay={15} size={32} />
				<span style={{opacity: lead(f, wf(110, 'dived'), 8)}}><Chip text="DIVE 81" tone={colors.amber} size={32} /></span>
				{f < wf(114, 'one') ? <span style={{opacity: lead(f, wf(111, 'brooks'), 8)}}><Chip text="BROOKS, UNDER OATH · CG 112 P. 801" tone={colors.ink} size={28} /></span> : null}
				{f >= wf(114, 'one') - 10 ? <span style={{opacity: lead(f, wf(114, 'one'), 8)}}><Chip text="ONE ACOUSTIC CHANNEL · LATER DIVES" tone={colors.cyan} size={28} /></span> : null}
			</div>
			<Mount x={960} y={560} w={860} h={360} start={wf(114, 'acoustic') - 10} end={ef(117) + 30} source="CHANNEL 4 · BROOKS, CG 112 P. 801" labels={['ILLUSTRATIVE VALUES']} lean={2}>
				<svg width={860} height={300} style={{position: 'absolute', left: 0, top: 0}}>
					<line x1={20} x2={840} y1={thrY} y2={thrY} stroke={colors.amber} strokeWidth={3} strokeDasharray="12 8" opacity={lead(f, wf(116, 'threshold'), 12)} />
					<text x={840} y={thrY - 14} textAnchor="end" style={T(28, lit(f, wf(116, 'set'), colors.amber))} opacity={lead(f, wf(116, 'threshold'), 8)}>THEIR THRESHOLD · 5,000</text>
					<path d={`M 20 280 ${Array.from({length: 70}).map((_, i) => {
						const k = i / 69;
						const shown = k <= ch4;
						const a = (Math.abs(Math.sin(i * 1.3) * Math.sin(i * 0.21)) * 120 + 20) * (shown ? 1 : 0);
						const near = i === 48 && shown ? 160 + 6 * lead(f, wf(116, 'barely'), 10) : a;
						return `L ${20 + i * 11.7} ${280 - near}`;
					}).join(' ')}`} fill="none" stroke={colors.cyan} strokeWidth={2.5} opacity={lead(f, wf(114, 'acoustic'), 10)} />
				</svg>
			</Mount>
			<AbsoluteFill style={{opacity: vis(f, wf(116, 'under') - 10, wf(116, 'never') + 8, 10, 10)}}>
				<RecordPage set="cg112" start={wf(116, 'under') - 10} end={wf(116, 'never') + 8} hl={[{key: 'barely', at: wf(116, 'barely')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(116, 'barely')} />
			</AbsoluteFill>
			<div style={{position: 'absolute', left: 140, top: 150, opacity: lead(f, wf(117, 'n'), 8)}}>
				<Chip text="NTSB: NO SIGNAL OF THE KIND THAT TRIGGERS AN ALERT" tone={f >= wf(117, 'alert') ? colors.red : colors.cyan} size={30} />
			</div>
			<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · CHANNEL POSITION ILLUSTRATIVE</div>
		</AbsoluteFill>
	);
};

// ── 11 · Was the damage in the data? (s117; clips: linearity, Kramer) ───────────────────────────────────────────

const InTheData: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const s119 = vis(f, kramer.gapEndFrame - 14, ef(120) + 20);
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(118) - 8, ef(118) + 20)}}>
				<Hull3D width={1920} height={1080} cam={dolly(camAt(f, [{f: sf(118) - 8, cam: {pos: [14, 12, 16], look: [0, 1, 2.8], fov: 30}}, {f: ef(118) + 20, cam: {pos: [9, 11, 12], look: [0, 1.6, 3.6], fov: 28}}]), f, [wf(118, 'damage'), wf(118, 'data')])} cut={0.6} g4={lead(f, wf(118, 'data'), 10)} sensors={0.3} interfaces={0.8 * lead(f, wf(118, 'damage'), 10)} bench={1} />
			</AbsoluteFill>
			<HearingClip f={f} id="h_brooks_linearity" />
			<HearingClip
				f={f}
				id="h_kramer_time"
				credit="USCG, 25 SEP 2024 · TRACED: NTSB 24-012 FIG. 26"
				picture={<div style={{position: 'absolute', inset: 0, background: LAMP}}><TimeTrace f={f} w={1120} h={630} tEnd={17.1} showDepth={1} /></div>}
			/>
			{s119 > 0 ? (
				// s119 (fact-check v3): OceanGate's own dive-80 plot carried the depth on the strain chart (NTSB fig. 20);
				// what it lacked was a depth axis: both lines ran against the clock
				<AbsoluteFill style={{opacity: s119}}>
					<Mount x={160} y={110} w={1600} h={800} start={kramer.gapEndFrame - 14} end={ef(120) + 20} source="OCEANGATE'S DIVE 80 PLOT · NTSB MIR-25-36 FIG. 20, 24-012 FIG. 26" labels={['TRACED']} lean={3}>
						<div style={{position: 'absolute', left: 20, top: 30}}>
							<TimeTrace
								f={f}
								w={1560}
								h={680}
								tEnd={17.1}
								showDepth={1}
								stroke={f >= wf(120, 'strain') ? colors.ink : colors.sub}
								axisLabel={
									<text textAnchor="middle" style={T(30, {fill: f >= wf(120, 'clock') ? colors.amber : colors.ink, letterSpacing: 4, fontWeight: f >= wf(120, 'clock') ? 700 : 400})}>
										TIME · NEWFOUNDLAND DAYLIGHT TIME
									</text>
								}
							/>
						</div>
					</Mount>
					<div style={{position: 'absolute', left: 600, top: 470, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start'}}>
						<Pop f={f} fps={fps} at={wf(120, 'depth')}>
							<Chip text="DEPTH" tone={colors.cyan} size={36} />
						</Pop>
						<Pop f={f} fps={fps} at={wf(120, 'same')}>
							<Chip text={f >= wf(120, 'strain') ? 'ON THE SAME CHART AS THE STRAIN' : 'ON THE SAME CHART'} tone={colors.cyan} size={30} />
						</Pop>
						<Pop f={f} fps={fps} at={wf(120, 'both')}>
							<Chip text={f >= wf(120, 'clock') ? 'BOTH AGAINST THE CLOCK' : 'BOTH'} tone={colors.amber} size={36} />
						</Pop>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

const kramer = clipOf('h_kramer_time');
export const act3a: SceneDef[] = [
	{id: 'a3-opening', from: hold(58).from, to: sf(59) + 6, C: Opening, cues: [{frame: hold(58).from + 6, sfx: 'whoosh', gainDb: -26}]},
	{
		id: 'a3-report-2018',
		from: sf(59) - 16,
		to: ef(63) + 34,
		C: Report2018,
		cues: [
			{frame: sf(60) - 20, sfx: 'paper_slide', gainDb: -22},
			{frame: wf(62, 'twenty-six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(63, 'visible') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(63, 'inter-laminar') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-meeting',
		from: sf(64) - 16,
		to: ef(66) + 34,
		C: Meeting,
		cues: [
			{frame: wf(65, 'recorded'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(66, 'scrap') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(66, 'monitoring') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-fired',
		from: sf(67) - 20,
		to: ef(71) + 34,
		C: Fired,
		cues: [
			{frame: wf(67, 'fired'), sfx: 'stamp', gainDb: -22},
			{frame: wf(68, 'impasse') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(69, 'twenty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(70, 'never'), sfx: 'stamp', gainDb: -26},
		],
	},
	{
		id: 'a3-first-hull',
		from: sf(72) - 16,
		to: ef(77) + 34,
		C: FirstHull,
		cues: [
			{frame: wf(73, 'second'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(74, 'crack'), sfx: 'metal_snap_sub', gainDb: -26},
			{frame: wf(75, 'refused'), sfx: 'stamp', gainDb: -26},
		],
	},
	{id: 'a3-hull2', from: sf(78) - 16, to: ef(80) + 34, C: Hull2, cues: [{frame: wf(80, 'eighty'), sfx: 'stamp', gainDb: -22}]},
	{
		id: 'a3-dive80',
		from: sf(81) - 16,
		to: ef(86) + 44,
		C: Dive80,
		cues: [
			{frame: wf(82, 'bang'), sfx: 'metal_snap_sub', gainDb: -20},
			{frame: wf(85, 'peaked'), sfx: 'relay_click', gainDb: -20},
			{frame: wf(86, 'jumped'), sfx: 'relay_click', gainDb: -20},
		],
	},
	{
		id: 'a3-brooks',
		from: sf(87) - 16,
		to: clipOf('h_brooks_diveagain').gapEndFrame + 30,
		C: Brooks,
		cues: [
			{frame: wf(90, 'best') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(92, 'flashlight'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(94, 'never') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(97, 'shift') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(99, 'minor') - 15, sfx: 'highlighter', gainDb: -24},
		],
	},
	{
		id: 'a3-theory',
		from: sf(103) - 16,
		to: ef(109) + 34,
		C: Theory,
		cues: [
			{frame: wf(105, 'sprung'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(108, 'microns') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: sf(109) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(109, 'physical') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(109, 'relatively') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-after80',
		from: sf(110) - 16,
		to: ef(117) + 34,
		C: After80,
		cues: [
			{frame: wf(110, 'nineteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(116, 'barely'), sfx: 'cockpit_chime', gainDb: -32},
		],
	},
	{id: 'a3-in-the-data', from: sf(118) - 12, to: ef(120) + 20, C: InTheData, cues: [{frame: wf(118, 'data'), sfx: 'whoosh', gainDb: -26}, {frame: wf(120, 'depth'), sfx: 'relay_click', gainDb: -24}, {frame: wf(120, 'clock'), sfx: 'quartz_tick', gainDb: -22}]},
];

