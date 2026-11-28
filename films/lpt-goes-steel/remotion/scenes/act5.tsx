import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {camAt, COIL, CORE_X} from '../coil3d';
import {Chip, clamp, Doc, Num, Pop, Strip, T, Tray} from '../parts';
import {ef, FILM_FRAMES, hold, sf, wf} from '../timing';
import {Caliper, HeroShot, P} from './hero';
import {SceneDef} from './types';

// ACT V · THE VERDICT (S132–S154). What is being done; the plants; the faster lever; the question answered; the
// sign-off on the coil. Every cue a literal wf(sentence, 'word').

const W920 = COIL.w / 2;
const W932 = 9.32 / 2;
const Box: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{background: 'rgba(10,13,18,0.88)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>{children}</div>;

// ── 1 · The mill's project (S132–S136) ────────────────────────────────────────────────────────────────────────────
const Mill01: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="cliffs_2026" start={sf(132) - 16} end={wf(133, 'furnaces') - 20} hl={[{key: 'c11', at: 0, ats: [wf(133, 'showcased') - 12, wf(133, 'project') - 12]}]} label="EXHIBIT" title="COMPANY RELEASE" />
			<Pop f={f} at={wf(133, 'October')} until={wf(133, 'furnaces') - 20} style={{right: 110, top: 900}}>
				<Chip text="OCT 2026" tone={colors.amber} size={40} />
			</Pop>
			<Pop f={f} at={wf(133, 'two-hundred-million-dollar')} until={ef(133)} style={{left: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(133, 'two-hundred-million-dollar') - 10, value: 0}, {frame: wf(133, 'project'), value: 200}]} fmt={(v) => `$${Math.round(v)}M`} size={72} tone={colors.amber} step />
				</Box>
			</Pop>
			<Doc doc="cliffs_2026" start={wf(133, 'furnaces') - 24} end={ef(133) + 10} hl={[{key: 'c38', at: 0, ats: [wf(133, 'furnaces') - 12, wf(133, 'Warren') - 12, wf(133, 'twenty-five') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(133, 'twenty-five')} until={ef(133)} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(133, 'twenty-five') - 10, value: 0}, {frame: wf(133, 'percent'), value: 25}]} fmt={(v) => `UP TO +${Math.round(v)}% GOES`} size={56} tone={colors.cyan} step />
					<div style={{...T(26, {color: colors.ink, marginTop: 6}), opacity: lead(f, wf(133, 'early'), 8)}}>EXPECTED EARLY 2028 · COMPANY'S ESTIMATE</div>
				</Box>
			</Pop>
			<Doc doc="doe_oced" start={ef(133)} end={ef(134) + 10} hl={[{key: 'c60', at: 0, ats: [wf(134, 'begun') - 12, wf(134, 'seventy-five') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(134, 'seventy-five')} until={ef(134)} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(134, 'seventy-five') - 10, value: 0}, {frame: wf(134, 'dollars'), value: 75}]} fmt={(v) => `UP TO $${Math.round(v)}M`} size={60} tone={colors.amber} step />
					<div style={{...T(26, {color: colors.ink, marginTop: 6}), opacity: lead(f, wf(134, 'phases'), 8)}}>PHASE 1: $19.07M · AUG 2024</div>
				</Box>
			</Pop>
			<Doc doc="cliffs_2026" start={ef(134)} end={ef(135) + 8} hl={[{key: 'quality', at: wf(135, 'quality')}]} label="EXHIBIT" title="THE COMPANY'S CLAIM" />
			<Release01b />
		</>
	);
};
/** S136: what the release does not mention: the coil, its width unchanged, beside the release. */
const Release01b: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: ef(135) - 10, cam: {pos: [6, 4.5, 21], look: [0, 0.9, 0], fov: 36}},
		{f: ef(136) + 30, cam: {pos: [2, 4, 20], look: [0, 1.2, 0], fov: 35}},
	]);
	return (
		<HeroShot f={f} start={ef(135) - 10} end={ef(136) + 30} cam={cam} props={{spin: f * 0.0035}}>
			<Caliper cam={cam} k={lead(f, wf(136, 'wider'), 12)} halfW={W920} tone={colors.cyan} label={<span>920 MM</span>} />
			<Pop f={f} at={wf(136, 'coil')} style={{left: 120, top: 120}}>
				<Chip text="WIDER COIL: NOT IN THE RELEASE" tone={colors.ink} size={32} />
			</Pop>
			<Pop f={f} at={wf(136, 'refine')} style={{left: 120, top: 200}}>
				<Chip text="NEW REFINING PROCESS: NOT IN THE RELEASE" tone={colors.ink} size={32} />
			</Pop>
			<Strip what="RECONSTRUCTION" source="OUR READING OF THE OCT 2026 RELEASE · TRAN-COR H TABLE 7" />
		</HeroShot>
	);
};

// ── 2 · The plants (S137–S141): three announcements, each on its own page ────────────────────────────────────────
const Plants02: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Tray
				f={f}
				start={sf(137) - 14}
				end={ef(141) + 30}
				w={420}
				pages={[
					{img: 'hitachi_p002', tag: 'HITACHI ENERGY · SOUTH BOSTON, VA', at: wf(138, 'Hitachi'), mark: '$457M', markAt: wf(138, 'fifty-seven')},
					{img: 'siemens_p001', tag: 'SIEMENS ENERGY · CHARLOTTE, NC', at: wf(139, 'Siemens'), mark: '$150M', markAt: wf(139, 'fifty')},
					{img: 'hdhyundai_p002', tag: 'HD HYUNDAI ELECTRIC · MONTGOMERY, AL', at: wf(140, 'Hyundai'), mark: '$200M', markAt: wf(140, 'hundred')},
				]}
			/>
			<Pop f={f} at={wf(137, 'building')} until={ef(141) + 20} style={{left: 96, top: 60}}>
				<Chip text="COMPANY ANNOUNCEMENTS · LARGE-TRANSFORMER PLANTS" tone={colors.ink} size={30} />
			</Pop>
			<Pop f={f} at={wf(138, 'Virginia')} style={{left: 96, top: 960}}>
				<Chip text="VIRGINIA" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(139, 'Carolina')} style={{left: 300, top: 960}}>
				<Chip text="NORTH CAROLINA" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(140, 'Alabama')} style={{left: 600, top: 960}}>
				<Chip text="ALABAMA" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(141, 'steel')} style={{right: 96, top: 960}}>
				<Chip text="CORE-STEEL SOURCE: NOT STATED IN ANY OF THE THREE" tone={colors.amber} size={30} />
			</Pop>
		</>
	);
};

// ── 3 · The faster lever (S142–S144): sensors on the core, its real limit ────────────────────────────────────────
const Lever03: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(142) - 20, cam: {pos: [CORE_X + 10, 5, 23], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(143, 'sensors'), cam: {pos: [CORE_X + 6, 4, 20], look: [CORE_X, 0.8, 0], fov: 35}},
		{f: wf(143, 'closer'), cam: {pos: [CORE_X + 2, 3.5, 18], look: [CORE_X, 0.6, 0], fov: 35}},
		{f: ef(143) + 30, cam: {pos: [CORE_X + 1, 3.4, 17.6], look: [CORE_X, 0.6, 0], fov: 35}},
	]);
	const load = interpolate(f, [wf(143, 'run') - 10, wf(143, 'closer'), wf(143, 'limit')], [0.55, 0.75, 0.9], {...clamp, easing: ease.camera});
	const s = P([CORE_X, 5.5, 1.6], cam);
	const meter = (label: string, v: number, line: number, on: number, tone: string) => (
		<div style={{marginTop: 14, opacity: lead(f, on, 10)}}>
			<div style={T(26, {color: colors.ink})}>{label}</div>
			<div style={{position: 'relative', width: 520, height: 26, background: colors.card, border: `1px solid ${colors.border}`, marginTop: 6}}>
				<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 520 * v, background: tone}} />
				<div style={{position: 'absolute', left: 520 * line - 2, top: -8, bottom: -8, width: 4, background: colors.amber}} />
			</div>
		</div>
	);
	return (
		<HeroShot f={f} start={sf(142) - 20} end={ef(143) + 30} cam={cam} props={{coil: 0, core: 1, heat: 0.25 + 0.4 * load, flux: 0.4}}>
			<div style={{position: 'absolute', left: s.x - 12, top: s.y - 12, width: 24, height: 24, borderRadius: 12, background: colors.cyan, opacity: lead(f, wf(143, 'sensors'), 10), boxShadow: `0 0 24px ${colors.cyan}`}} />
			<div style={{position: 'absolute', left: 120, top: 120}}>
				<Box>
					<div style={T(30, {color: colors.ink, fontWeight: 700})}>{f >= wf(143, 'instead') ? 'DYNAMIC RATING' : 'FIXED RATING'}</div>
					{meter('TEMPERATURE', 0.4 + 0.35 * load, f >= wf(143, 'true') ? 0.92 : 0.7, wf(143, 'temperature'), colors.cyan)}
					{meter('LOAD', load, f >= wf(143, 'true') ? 0.92 : 0.7, wf(143, 'load'), colors.cyan)}
					<div style={{...T(26, {color: colors.amber, marginTop: 12}), opacity: lead(f, wf(143, 'conservative'), 10)}}>{f >= wf(143, 'true') ? 'LINE: TRUE LIMIT' : 'LINE: CONSERVATIVE FIXED RATING'}</div>
				</Box>
			</div>
			<Pop f={f} at={wf(142, 'lever')} style={{right: 120, top: 120}}>
				<Chip text="JOHNS HOPKINS MODEL" tone={colors.ink} size={30} />
			</Pop>
			<Strip what="ILLUSTRATIVE VALUES" source="MECHANISM AS THE JOHNS HOPKINS PAPER DESCRIBES IT · NOT A MEASURED UNIT" />
		</HeroShot>
	);
};
const Dtr04: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="jhu_paper" start={ef(143)} end={ef(144) + 20} hl={[{key: 'dtr', at: 0, ats: [wf(144, 'fourteen') - 12, wf(144, 'five', 1) - 12]}]} label="EXHIBIT" title="THE MODEL" />
			<Pop f={f} at={wf(144, 'fourteen')} until={ef(144) + 12} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(144, 'fourteen') - 10, value: 0}, {frame: wf(144, 'percent'), value: 14.5}, {frame: wf(144, 'five', 1), value: 5}]} fmt={(v) => `2030 GAP ${v.toFixed(1)}%`} size={60} tone={colors.amber} />
				</Box>
			</Pop>
		</>
	);
};

// ── 5 · The question from the start (S145–S149) ─────────────────────────────────────────────────────────────────
const Answer05: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(149);
	const cam = camAt(f, [
		{f: sf(145) - 20, cam: {pos: [5, 4, 20], look: [0, 1.2, 0], fov: 35}},
		{f: wf(146, 'wider'), cam: {pos: [0, 3.4, 18], look: [0, 1.3, 0], fov: 33}},
		{f: ef(146) + 30, cam: {pos: [-1, 3.4, 18], look: [0, 1.3, 0], fov: 33}},
	]);
	const reach = interpolate(f, [wf(146, 'roll') - 6, wf(146, 'wider'), wf(146, 'wider') + 24], [W920, W932, W920], {...clamp, easing: ease.camera});
	return (
		<>
			<HeroShot f={f} start={sf(145) - 20} end={ef(146) + 30} cam={cam} props={{spin: f * 0.0035}}>
				<Caliper cam={cam} k={lead(f, wf(145, 'question'), 10)} halfW={W920} tone={colors.cyan} label={<span>920 MM</span>} />
				<Caliper cam={cam} k={lead(f, wf(146, 'roll'), 8)} halfW={reach} y={COIL.ro + 2.2} tone={colors.amber} label={<span>WIDER?</span>} />
			</HeroShot>
			<Tray
				f={f}
				start={ef(146)}
				end={ef(147) + 14}
				pages={[
					{img: 'trancorh_p002', tag: 'DATASHEET · 920 MM', at: wf(147, 'records')},
					{img: 'goes232_p104', tag: '232 REPORT · WIDTH', at: wf(147, 'examined')},
					{img: 'doe2024_p021', tag: 'DOE 2024 · GOES', at: wf(147, 'engineering')},
				]}
			/>
			<Pop f={f} at={wf(147, 'reason')} until={ef(147) + 10} style={{left: 0, right: 0, top: 940, textAlign: 'center'}}>
				<Chip text="OUR READING OF THESE RECORDS" tone={colors.ink} size={32} />
			</Pop>
			<Doc doc="goes232" start={ef(147)} end={ef(148) + 12} hl={[{key: 'c88', at: 0, ats: [wf(148, 'profitability') - 12, wf(148, 'investment') - 12]}]} label="EXHIBIT" />
			<Doc doc="breakthrough" start={ef(148)} end={h.from + h.frames + 16} hl={[{key: 'c79', at: wf(149, 'retrofit')}]} label="EXHIBIT" title="ITS ESTIMATE" />
			<Pop f={f} at={wf(149, 'one', 1)} until={h.from + h.frames} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(149, 'one', 1) - 10, value: 0}, {frame: wf(149, 'one', 1) + 6, value: 1}, {frame: wf(149, 'two'), value: 2}]} fmt={(v) => (v < 1.5 ? `$${Math.round(v)}B` : `$1–${Math.round(v)}B`)} size={72} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>RETROFIT OR NEW MILL · BREAKTHROUGH INSTITUTE</div>
				</Box>
			</Pop>
		</>
	);
};

// ── 6 · Sign-off (S150–S154): the coil, the two numbers, the gap ─────────────────────────────────────────────────
const Signoff06: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(150) - 30, cam: {pos: [12, 5, 22], look: [0, 0.6, 0], fov: 36}},
		{f: wf(151, 'millimeters'), cam: {pos: [4, 4, 21], look: [0, 1.2, 0], fov: 35}},
		{f: wf(153, 'thirty-two'), cam: {pos: [1, 4, 20], look: [0, 1.6, 0], fov: 34}},
		{f: wf(154, 'abroad'), cam: {pos: [0, 5, 23], look: [0, 1.4, 0], fov: 35}},
		{f: FILM_FRAMES, cam: {pos: [-2, 6, 27], look: [0, 1.2, 0], fov: 36}},
	]);
	const cy = lead(f, wf(152, 'nine'), 12);
	const am = lead(f, wf(153, 'thirty-two'), 12);
	const dim = interpolate(f, [FILM_FRAMES - 420, FILM_FRAMES - 360], [1, 0.25], clamp);
	return (
		<HeroShot f={f} start={sf(150) - 30} end={FILM_FRAMES + 30} cam={cam} props={{spin: f * 0.0035, lamp: 0.6 + 0.4 * dim}}>
			<div style={{position: 'absolute', inset: 0, opacity: dim}}>
				<Caliper cam={cam} k={cy} halfW={W920} tone={colors.cyan} label={<span>920 MM · THE ONE MILL AT HOME</span>} />
				<Caliper cam={cam} k={am} halfW={W932} y={COIL.ro + 2.4} tone={colors.amber} label={<span>&gt;932 MM · THE LARGER CORES</span>} />
				<Pop f={f} at={wf(150, 'forty')} until={wf(152, 'nine')} style={{left: 120, top: 120}}>
					<Chip text="DESIGN LIFE ~40 YEARS · DOE 2024 P. 11" tone={colors.ink} size={30} />
				</Pop>
				<Pop f={f} at={wf(154, 'meet')} style={{left: 120, top: 120}}>
					<Chip text="12+ MM APART" tone={colors.amber} size={40} />
				</Pop>
				<Pop f={f} at={wf(154, 'abroad')} style={{left: 120, top: 200}}>
					<Chip text="MOST CORE STEEL: IMPORTED · DOE 2024 P. 22" tone={colors.amber} size={30} />
				</Pop>
				<Strip what="RECONSTRUCTION" source="TRAN-COR H DATASHEET TABLE 7 · 232 REPORT P. 104" />
			</div>
		</HeroShot>
	);
};

export const act5: SceneDef[] = [
	{id: 'mill01', from: sf(132) - 16, to: ef(136) + 30, C: Mill01},
	{id: 'plants02', from: sf(137) - 14, to: ef(141) + 30, C: Plants02},
	{id: 'lever03', from: sf(142) - 20, to: ef(143) + 30, C: Lever03},
	{id: 'dtr04', from: ef(143), to: ef(144) + 20, C: Dtr04},
	{id: 'answer05', from: sf(145) - 20, to: hold(149).from + hold(149).frames + 16, C: Answer05},
	{id: 'signoff06', from: sf(150) - 30, to: FILM_FRAMES, C: Signoff06},
];
