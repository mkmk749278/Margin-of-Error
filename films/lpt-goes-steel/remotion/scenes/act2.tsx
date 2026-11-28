import React from 'react';
import {Img, interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {camAt, COIL, CORE_X, WOUND_X} from '../coil3d';
import {media} from '../kit';
import {BarChart, Chip, clamp, Doc, Excerpt, Num, Pop, Strip, Surface, T} from '../parts';
import {Backdrop, Footage} from '../footage';
import {ef, hold, sf, wf} from '../timing';
import {Caliper, HeroShot, P} from './hero';
import {SceneDef} from './types';

// ACT II · THE STEEL (S23–S55). What the core does, what the steel is, the width (signature 1), the heat (signature 3),
// the grades and where they come from. Every cue a literal wf(sentence, 'word').

const W920 = COIL.w / 2;
const W932 = 9.32 / 2;
const amberChip = (text: string) => <Chip text={text} tone={colors.amber} size={30} />;
const Box: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>{children}</div>;

// ── 1 · Alternating current through the core (S23–S25): the flux flips on each "reverse" ─────────────────────────────
const Ac01: React.FC = () => {
	const f = useCurrentFrame();
	const from = sf(23) - 30;
	const cam = camAt(f, [
		{f: from, cam: {pos: [CORE_X + 12, 6, 24], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(23, 'alternating'), cam: {pos: [CORE_X + 9, 4.5, 21], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(24, 'grid'), cam: {pos: [CORE_X + 5, 3.5, 19], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(25, 'magnetic'), cam: {pos: [CORE_X + 1, 3, 18], look: [CORE_X, 0.6, 0], fov: 35}},
		{f: wf(25, 'heat'), cam: {pos: [CORE_X - 3, 3, 17.5], look: [CORE_X, 0.4, 0], fov: 34}},
		{f: ef(25) + 40, cam: {pos: [CORE_X - 4, 3, 17], look: [CORE_X, 0.4, 0], fov: 34}},
	]);
	// slowed for the eye: the field flips on each word that says it does
	const flips = [wf(23, 'alternating'), wf(24, 'reversing'), wf(24, 'twice'), wf(25, 'reverses'), wf(25, 'reverses', 1)];
	const n = flips.filter((x) => f >= x).length;
	const sign = n % 2 === 0 ? 1 : -1;
	const last = Math.max(0, ...flips.filter((x) => f >= x));
	const flux = sign * Math.min(1, (f - last) / 10) * lead(f, wf(23, 'current'), 12);
	const heat = interpolate(f, [wf(25, 'energy') - 10, wf(25, 'heat') + 6], [0, 0.9], {...clamp, easing: ease.arrive});
	return (
		<HeroShot f={f} start={from} end={ef(25) + 40} cam={cam} props={{coil: 0, core: 1, flux, heat}}>
			<Pop f={f} at={wf(24, 'sixty')} style={{left: 120, top: 110}}>
				<Box>
					<Num f={f} keys={[{frame: wf(24, 'sixty') - 10, value: 0}, {frame: wf(24, 'cycles'), value: 60}]} fmt={(v) => `${Math.round(v)} HZ`} size={96} tone={colors.cyan} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>US GRID FREQUENCY · EIA</div>
				</Box>
			</Pop>
			<Pop f={f} at={wf(24, 'twice')} style={{left: 120, top: 330}}>
				<Chip text={`FIELD REVERSALS: ${Math.min(2, Math.max(1, flips.slice(1, 3).filter((x) => f >= x).length))} PER CYCLE`} tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(25, 'heat')} style={{left: 120, top: 410}}>
				{amberChip('LOSS AS HEAT IN THE CORE')}
			</Pop>
			<Strip what="RECONSTRUCTION" source="SLOWED: THE REAL FIELD REVERSES 120 TIMES A SECOND · 232 REPORT PP. 41–42" />
		</HeroShot>
	);
};

// ── 2 · Thin sheets (S26): the core peels; a real lamination stack beside it ───────────────────────────────────────
const Sheets02: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(26) - 20, cam: {pos: [CORE_X - 4, 3, 17], look: [CORE_X, 0.4, 0], fov: 34}},
		{f: wf(26, 'sheets'), cam: {pos: [CORE_X - 9, 2, 12], look: [CORE_X - 1, 0.4, 0], fov: 34}},
		{f: wf(26, 'silicon'), cam: {pos: [CORE_X - 11, 1.6, 9], look: [CORE_X - 2, 0.4, 0], fov: 34}},
	]);
	const peel = interpolate(f, [wf(26, 'built') - 10, wf(26, 'sheets') + 8], [0, 1], {...clamp, easing: ease.arrive});
	return (
		<HeroShot f={f} start={sf(26) - 20} end={ef(26) + 30} cam={cam} props={{coil: 0, core: 1, peel, heat: 0.2 * (1 - peel)}}>
			<Pop f={f} at={wf(26, 'thin')} style={{right: 96, top: 96, width: 820, background: colors.void, border: `1px solid ${colors.border}`}}>
				<Img src={media('photos/us_core_interleaved_flux_4k_cc0.jpg')} style={{width: 820, display: 'block'}} />
				<div style={T(26, {color: colors.ink, padding: '8px 12px'})}>REAL CORE LAMINATIONS, INTERLEAVED · WIKIMEDIA COMMONS · CC0</div>
			</Pop>
			<Pop f={f} at={wf(26, 'quarter')} style={{left: 120, top: 110}}>
				<Box>
					<Num f={f} keys={[{frame: wf(26, 'quarter') - 10, value: 1}, {frame: wf(26, 'millimeter'), value: 0.23}]} fmt={(v) => (v > 0.24 ? `${v.toFixed(2)} MM` : '0.23–0.30 MM')} size={80} tone={colors.cyan} />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>TRAN-COR H GAUGES · DATASHEET P. 2</div>
				</Box>
			</Pop>
			<Pop f={f} at={wf(26, 'three')} style={{left: 120, top: 330}}>
				<Box>
					<Num f={f} keys={[{frame: wf(26, 'three') - 8, value: 0}, {frame: wf(26, 'percent'), value: 3.2}]} fmt={(v) => `≈${v.toFixed(1)}% SILICON`} size={64} tone={colors.cyan} />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>232 REPORT P. 45</div>
				</Box>
			</Pop>
			<Strip what="RECONSTRUCTION" source="THE CORE SPREAD APART TO SHOW ITS SHEETS" />
		</HeroShot>
	);
};

// ── 3 · The grain lined up on purpose (S27–S28) ────────────────────────────────────────────────────────────────────
const Grain03: React.FC = () => {
	const f = useCurrentFrame();
	const align = interpolate(f, [wf(27, 'grain'), wf(27, 'lined'), wf(28, 'Rolled'), wf(28, 'annealed'), wf(28, 'strip')], [0, 0.45, 0.6, 0.8, 1], {...clamp, easing: ease.camera});
	return (
		<>
			<Surface f={f} start={sf(27) - 20} end={ef(28) + 30} align={align} laser={0} heat={interpolate(f, [wf(28, 'annealed') - 10, wf(28, 'annealed') + 20, wf(28, 'crystals') + 20], [0, 0.6, 0], clamp)} erase={0} />
			<Pop f={f} at={wf(28, 'strip')} style={{left: 120, top: 110}}>
				<Chip text="ROLLING DIRECTION →" tone={colors.cyan} size={36} />
			</Pop>
			<Pop f={f} at={wf(28, 'less')} style={{left: 120, top: 190}}>
				<Chip text="LOWER CORE LOSS ALONG THE STRIP" tone={colors.cyan} size={30} />
			</Pop>
			<Strip what="ILLUSTRATION" source="GRAINS ALIGN IN ROLLING AND ANNEALING · 232 REPORT P. 45" />
		</>
	);
};

// ── 4 · Who can make it (S29–S30) ──────────────────────────────────────────────────────────────────────────────────
const Make04: React.FC = () => (
	<>
		<Doc doc="goes232" start={sf(29) - 12} end={ef(29) + 14} hl={[{key: 'c68', at: 0, ats: [wf(29, 'dedicated') - 12, wf(29, 'know-how') - 12]}]} label="EXHIBIT" />
		<Doc doc="doe2024" start={ef(29)} end={ef(30) + 40} hl={[{key: 'c69', at: 0, ats: [wf(30, 'capability') - 14, wf(30, 'different') - 14]}]} label="EXHIBIT" />
		<Pop f={useCurrentFrame()} at={wf(30, 'twenty-four')} until={ef(30) + 30} style={{left: 96, top: 960}}>
			<Chip text="DOE · JUL 2024" tone={colors.amber} size={30} />
		</Pop>
		<Pop f={useCurrentFrame()} at={wf(30, 'electrical')} until={ef(30) + 30} style={{right: 96, top: 960}}>
			<Chip text="NON-GRAIN-ORIENTED STEEL" tone={colors.ink} size={30} />
		</Pop>
	</>
);

// ── 5 · The width (S31–S34): the lamination is cut from the coil, so the coil limits it ─────────────────────────────
const Width05: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(31) - 30, cam: {pos: [6, 7.2, 25], look: [0, 2.8, 0], fov: 36}},
		{f: wf(31, 'width'), cam: {pos: [1, 6.2, 24.5], look: [0, 3.2, 0], fov: 36}},
		{f: wf(32, 'limits'), cam: {pos: [-1, 6.7, 23], look: [0, 3.4, 0], fov: 35}},
		{f: ef(32) + 40, cam: {pos: [-1.5, 6.7, 22.6], look: [0, 3.4, 0], fov: 35}},
	]);
	const cut = interpolate(f, [wf(32, 'cut') - 8, wf(32, 'coil') + 10], [0, 1], {...clamp, easing: ease.arrive});
	const a = P([-W920, COIL.ro + 0.2, 1.2], cam);
	const b = P([W920, COIL.ro + 0.2, 1.2], cam);
	const lift = cut * 120;
	return (
		<HeroShot f={f} start={sf(31) - 30} end={ef(32) + 40} cam={cam} props={{spin: f * 0.0035}}>
			<Caliper cam={cam} k={lead(f, wf(31, 'width'), 12)} halfW={W920} tone={colors.cyan} label={<span>920 MM</span>} />
			{cut > 0 ? (
				<div style={{position: 'absolute', left: a.x, top: a.y - 40 - lift, width: Math.max(0, b.x - a.x) * cut, height: 34, background: 'rgba(56,189,248,0.25)', border: `2px solid ${colors.cyan}`, boxShadow: f >= wf(32, 'limits') ? `0 0 18px ${colors.cyan}` : undefined}} />
			) : null}
			<Pop f={f} at={wf(32, 'Laminations')} style={{left: 120, top: 120}}>
				<Chip text="A LAMINATION, CUT ACROSS THE STRIP" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(32, 'limits')} style={{left: 120, top: 200}}>
				<Chip text="LAMINATION ≤ COIL WIDTH" tone={colors.amber} size={30} />
			</Pop>
			<Strip what="RECONSTRUCTION" source="TRAN-COR H DATASHEET · OCT 2024 · TABLE 7" />
		</HeroShot>
	);
};
const Mill06: React.FC = () => {
	const f = useCurrentFrame();
	// r03: the white-page streak broken. Molten steel full frame on "that one mill", then the two records as cropped
	// excerpts over the same furnace, seen through glass.
	return (
		<>
			<Footage f={f} start={sf(33) - 12} end={wf(33, 'Butler') - 4} clip="furnace" from={3} push={[1.02, 1.08]} focus={[0.42, 0.6]}>
				<Pop f={f} at={wf(33, 'Cleveland-Cliffs')} style={{left: 96, top: 110}}>
					<Chip text="CLEVELAND-CLIFFS" tone={colors.cyan} size={36} />
				</Pop>
			</Footage>
			<Excerpt f={f} doc="doe_oced" start={wf(33, 'Butler') - 8} end={ef(33) + 10} bg="furnace" bgFrom={8} hl={[{key: 'c10', at: 0, ats: [wf(33, 'Butler') + 4, wf(33, 'Pennsylvania')]}]} y={250} />
			<Pop f={f} at={wf(33, 'Pennsylvania')} until={ef(33) + 10} style={{left: 96, top: 110}}>
				<Chip text="BUTLER WORKS · LYNDORA, PENNSYLVANIA" tone={colors.cyan} size={30} />
			</Pop>
			<Excerpt f={f} doc="trancorh" start={ef(33)} end={ef(34) + 30} bg="anneal" bgFrom={2} hl={[{key: 'c07', at: wf(34, 'twenty')}]} y={220} />
			<Pop f={f} at={wf(34, 'fourteen')} until={ef(34) + 24} style={{right: 120, top: 800}}>
				<Box>
					<Num f={f} keys={[{frame: wf(34, 'nine') - 8, value: 0}, {frame: wf(34, 'fourteen'), value: 914}, {frame: wf(34, 'twenty'), value: 920}]} fmt={(v) => (v < 915 ? `${Math.round(v)} MM` : `914 · ${Math.round(v)} MM`)} size={64} tone={colors.cyan} step />
				</Box>
			</Pop>
		</>
	);
};

// ── 7 · Signature 1: the larger core's leg pattern overhangs the coil; two strips joined (S35–S37) ──────────────────
const Overhang07: React.FC = () => {
	const f = useCurrentFrame();
	const from = sf(35) - 20;
	const h = hold(35);
	const cam = camAt(f, [
		{f: from, cam: {pos: [-1.5, 6.7, 22.6], look: [0, 3.4, 0], fov: 35}},
		{f: wf(35, 'larger'), cam: {pos: [2, 7.2, 21], look: [2.5, 3.6, 0], fov: 33}},
		{f: wf(35, 'thirty-two'), cam: {pos: [7, 7.5, 13], look: [W920, 4.6, 0], fov: 30}},
		{f: h.from + h.frames, cam: {pos: [7.4, 7.4, 12], look: [W920, 4.6, 0], fov: 29}},
		{f: wf(36, 'joined'), cam: {pos: [2, 8.2, 20], look: [0, 3.6, 0], fov: 34}},
		{f: ef(36) + 30, cam: {pos: [1.5, 8.2, 20.2], look: [0, 3.6, 0], fov: 34}},
	]);
	const pat = interpolate(f, [wf(35, 'larger') - 10, wf(35, 'cores') + 10], [0, 1], {...clamp, easing: ease.arrive});
	const over = lead(f, wf(35, 'thirty-two'), 14);
	const joined = lead(f, wf(36, 'joined'), 14);
	const y = COIL.ro + 0.3;
	const a = P([-W920, y, 1.5], cam);
	const b920 = P([W920, y, 1.5], cam);
	const b932 = P([W932 + 0.12, y, 1.5], cam);
	const mid = P([0, y, 1.5], cam);
	const strip = joined > 0;
	return (
		<HeroShot f={f} start={from} end={ef(36) + 30} cam={cam} props={{spin: f * 0.0035}}>
			<Caliper cam={cam} k={1} halfW={W920} tone={colors.cyan} label={<span>920 MM</span>} o={1 - joined} />
			{/* the leg pattern of a larger core, laid across the coil: wider than the steel */}
			{pat > 0 && !strip ? (
				<div style={{position: 'absolute', left: a.x, top: a.y - 46, width: (b932.x - a.x) * pat, height: 40, border: `3px dashed ${colors.ink}`, background: 'rgba(229,231,235,0.08)'}} />
			) : null}
			{over > 0 && !strip ? (
				<div style={{position: 'absolute', left: b920.x, top: b920.y - 52, width: Math.max(6, b932.x - b920.x), height: 52, background: colors.amber, opacity: 0.9 * over, boxShadow: `0 0 26px ${colors.amber}`}} />
			) : null}
			{strip ? (
				<>
					<div style={{position: 'absolute', left: a.x, top: a.y - 46, width: mid.x - a.x, height: 40, background: 'rgba(56,189,248,0.22)', border: `2px solid ${colors.cyan}`, opacity: joined}} />
					<div style={{position: 'absolute', left: mid.x + 4, top: a.y - 46, width: b932.x - mid.x - 4, height: 40, background: 'rgba(56,189,248,0.22)', border: `2px solid ${colors.cyan}`, opacity: joined}} />
					<div style={{position: 'absolute', left: mid.x - 2, top: a.y - 70, width: 6, height: 88, background: colors.amber, opacity: joined, boxShadow: `0 0 18px ${colors.amber}`}} />
				</>
			) : null}
			<Pop f={f} at={wf(35, 'thirty-two')} until={wf(36, 'Two')} style={{right: 120, top: 560}}>
				<Box>
					<span style={T(72, {color: colors.amber, fontWeight: 700})}>12+ MM SHORT</span>
					<div style={T(26, {color: colors.ink, marginTop: 6})}>&gt;932 MM NEEDED · 920 MM MADE</div>
				</Box>
			</Pop>
			<Pop f={f} at={wf(36, 'strips')} style={{left: 120, top: 120}}>
				<Chip text="TWO STRIPS, ONE SEAM" tone={colors.amber} size={36} />
			</Pop>
			<Strip what="RECONSTRUCTION · GAP NOT TO SCALE" source="232 REPORT P. 104 · TRAN-COR H TABLE 7" />
		</HeroShot>
	);
};
const Patch08: React.FC = () => (
	<Excerpt f={useCurrentFrame()} doc="goes232" start={sf(37) - 12} end={ef(37) + 30} bg="machining" bgFrom={2} hl={[{key: 'patch', at: 0, ats: [wf(37, 'increased') - 14, wf(37, 'efficiencies') - 14]}]} title={useCurrentFrame() >= wf(37, 'citing') ? 'CITING THE TRANSFORMER MAKERS (FN. 66)' : undefined} />
);

// ── 9 · The question (S38–S40): the line tries to reach 932 and falls back ────────────────────────────────────────────
const Question09: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(38) - 20, cam: {pos: [5, 6.2, 23], look: [0, 3.2, 0], fov: 35}},
		{f: wf(38, 'obvious'), cam: {pos: [2, 5.8, 22], look: [0, 3.2, 0], fov: 34}},
		{f: wf(39, 'wider'), cam: {pos: [0, 5.6, 21], look: [0, 3.3, 0], fov: 33}},
		{f: wf(40, 'record'), cam: {pos: [-2, 5.8, 21.5], look: [0, 3.2, 0], fov: 33}},
	]);
	const reach = interpolate(f, [wf(39, 'roll') - 6, wf(39, 'wider'), wf(39, 'wider') + 30, wf(40, 'back')], [W920, W932, W932, W920], {...clamp, easing: ease.camera});
	return (
		<HeroShot f={f} start={sf(38) - 20} end={ef(40) + 40} cam={cam} props={{spin: f * 0.0035, lamp: 0.9}}>
			<Caliper cam={cam} k={1} halfW={W920} tone={colors.cyan} label={<span>920 MM</span>} />
			<Caliper cam={cam} k={1} halfW={reach} y={COIL.ro + 2.2} tone={colors.amber} o={lead(f, wf(38, 'question'), 12)} label={<span>{reach > W920 + 0.05 ? '>932 MM?' : 'WIDER?'}</span>} />
			<Pop f={f} at={wf(40, 'record')} style={{left: 120, top: 120}}>
				<Chip text={`THE RECORD, AT ${Math.floor(sf(145) / 3600)}:${String(Math.floor((sf(145) / 60) % 60)).padStart(2, '0')}`} tone={colors.ink} size={30} />
			</Pop>
			<Strip what="RECONSTRUCTION" source="TRAN-COR H TABLE 7 · 232 REPORT P. 104" />
		</HeroShot>
	);
};

// ── 10 · Two limits: width for stacked cores, heat for wound cores (S41–S43) ─────────────────────────────────────────
const Limits10: React.FC = () => {
	const f = useCurrentFrame();
	const from = sf(41) - 20;
	const cam = camAt(f, [
		{f: from, cam: {pos: [CORE_X + 6, 5, 24], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(41, 'width'), cam: {pos: [CORE_X + 2, 4, 22], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(42, 'wound'), cam: {pos: [(CORE_X + WOUND_X) / 2, 6, 34], look: [(CORE_X + WOUND_X) / 2, 0, 0], fov: 38}},
		{f: wf(42, 'heat'), cam: {pos: [WOUND_X + 5, 4, 20], look: [WOUND_X, -0.5, 0], fov: 36}},
		{f: wf(43, 'wrapped'), cam: {pos: [WOUND_X + 3, 3, 17], look: [WOUND_X, -0.5, 0], fov: 35}},
		{f: wf(43, 'heated'), cam: {pos: [WOUND_X + 1, 2.6, 15], look: [WOUND_X, -0.5, 0], fov: 34}},
		{f: ef(43) + 40, cam: {pos: [WOUND_X, 2.5, 14.5], look: [WOUND_X, -0.5, 0], fov: 34}},
	]);
	const glowW = lead(f, wf(41, 'width'), 12) * (1 - lead(f, wf(42, 'wound'), 16));
	const anneal = Math.max(lead(f, wf(42, 'heat'), 14) * 0.5, interpolate(f, [wf(43, 'annealed') - 10, wf(43, 'heated') + 10, ef(43) + 20], [0.3, 1, 0.4], clamp) * (f >= wf(43, 'annealed') - 10 ? 1 : 0));
	return (
		<>
		<HeroShot f={f} start={wf(42, 'For') - 14} end={wf(43, 'annealed') + 10} cam={cam} props={{coil: 0, core: 1, wound: lead(f, wf(42, 'wound'), 16), anneal, flux: 0.6 * glowW}}>
			<Pop f={f} at={wf(42, 'smaller')} style={{left: 120, top: 120}}>
				<Chip text="WOUND CORE · SMALLER TRANSFORMERS" tone={colors.cyan} size={32} />
			</Pop>
			<Pop f={f} at={wf(42, 'heat')} style={{left: 120, top: 200}}>
				<Chip text="LIMIT: HEAT" tone={colors.amber} size={32} />
			</Pop>
			<Strip what="RECONSTRUCTION" source="CORE TYPES: 232 REPORT PP. 41–42" />
		</HeroShot>
		{/* r03: a real large core and windings on "the larger stacked cores" (Salzburg AG; the burned-in source line cropped out) */}
		<Footage f={f} start={from} end={wf(42, 'For') + 2} clip="coreLift" from={20} focus={[0.4, 0.3]} crop={1.1}>
			<Pop f={f} at={wf(41, 'stacked')} style={{left: 120, top: 120}}>
				<Chip text="STACKED CORE · LIMIT: WIDTH" tone={colors.cyan} size={32} />
			</Pop>
		</Footage>
		{/* r03: "annealed: heated" on a real annealing furnace, full frame, into the domain sequence */}
		<Footage f={f} start={wf(43, 'annealed') - 6} end={ef(43) + 40} clip="anneal" from={0} push={[1.02, 1.07]}>
			<Pop f={f} at={wf(43, 'stress')} style={{left: 120, top: 120}}>
				<Chip text="STRESS-RELIEF ANNEAL" tone={colors.amber} size={32} />
			</Pop>
		</Footage>
		</>
	);
};

// ── The magnetic domains as a vector overlay on a real annealing furnace (r03; ILLUSTRATION): bands magnetised along
//    the rolling direction, alternating; the laser lines cross the strip and the bands narrow ("refine"); above 600 °C
//    the lines fade and the bands widen back. Replaces r02's flat grey ovals. ─────────────────────────────────────────
const DomainHud: React.FC<{f: number; start: number; end: number; laser: number; heat: number; erase: number; from: number}> = ({f, start, end, laser, heat, erase, from}) => {
	const o = Math.min(lead(f, start, 14), 1 - interpolate(f, [end - 14, end], [0, 1], clamp));
	if (o <= 0) return null;
	const refine = laser * (1 - erase);
	const X0 = 200;
	const X1 = 1720;
	const Y0 = 220;
	const Y1 = 860;
	const flow = ((f - start) / 60) * 40;
	const bands = (n: number, op: number) =>
		Array.from({length: n}, (_, i) => {
			const h = (Y1 - Y0) / n;
			const y = Y0 + i * h + h / 2;
			const dir = i % 2 === 0 ? 1 : -1;
			const arrows = Array.from({length: 9}, (_, j) => {
				const x = X0 + 80 + ((j * 170 + dir * flow) % 1520 + 1520) % 1520;
				const len = Math.min(110, h * 1.4);
				const x1 = dir > 0 ? x : x + len;
				const x2 = dir > 0 ? x + len : x;
				return (
					<g key={j}>
						<line x1={x1} y1={y} x2={x2} y2={y} stroke={colors.cyan} strokeWidth={2} />
						<polyline points={`${x2 - dir * 14},${y - 8} ${x2},${y} ${x2 - dir * 14},${y + 8}`} fill="none" stroke={colors.cyan} strokeWidth={2} />
					</g>
				);
			});
			return (
				<g key={i} opacity={op}>
					{i > 0 ? <line x1={X0} y1={Y0 + i * h} x2={X1} y2={Y0 + i * h} stroke={colors.cyan} strokeWidth={1} strokeDasharray="4 8" opacity={0.6} /> : null}
					{arrows}
				</g>
			);
		});
	const scribes = Array.from({length: 9}, (_, i) => X0 + 90 + i * 170);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<Footage f={f} start={start} end={end} clip="anneal" from={from} strip={false} push={[1.04, 1.09]}>
				<div style={{position: 'absolute', inset: 0, background: `rgba(10,13,18,${(0.65 - 0.4 * heat).toFixed(3)})`}} />
			</Footage>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, filter: `drop-shadow(0 0 6px ${colors.cyan})`}}>
				<rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} fill="none" stroke={colors.cyan} strokeWidth={2} opacity={0.8} />
				{bands(4, 1 - refine)}
				{bands(8, refine)}
				{scribes.map((x, i) => (
					<line key={i} x1={x} y1={Y0} x2={x} y2={Y0 + (Y1 - Y0) * Math.min(1, laser * 1.3)} stroke={colors.amber} strokeWidth={3} opacity={laser * (1 - erase)} />
				))}
			</svg>
			<div style={{position: 'absolute', left: X0, top: Y1 + 16, ...T(28, {color: colors.cyan})}}>ROLLING DIRECTION →</div>
			<div style={{position: 'absolute', right: 1920 - X1, top: Y1 + 16, ...T(28, {color: refine > 0.5 ? colors.cyan : colors.ink})}}>{refine > 0.5 ? 'DOMAINS REFINED' : 'MAGNETIC DOMAINS'}</div>
		</div>
	);
};

// ── 11 · Signature 3: the laser lines, the furnace, 600 °C (S44–S47) ─────────────────────────────────────────────────
const Laser11: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(47);
	const laser = interpolate(f, [wf(44, 'scribing') - 10, wf(44, 'lines') + 10], [0, 1], {...clamp, easing: ease.arrive});
	const heat = interpolate(f, [wf(46, 'furnace') - 10, wf(47, 'annealing'), wf(47, 'Celsius') + 10], [0, 0.5, 1], {...clamp, easing: ease.camera});
	const erase = interpolate(f, [wf(47, 'eradicated') - 6, wf(47, 'hundred'), h.from + h.frames], [0, 0.35, 1], {...clamp, easing: ease.camera});
	const temp = interpolate(f, [wf(46, 'furnace'), wf(47, 'annealing'), wf(47, 'six'), wf(47, 'Celsius')], [20, 380, 560, 600], {...clamp, easing: ease.camera});
	return (
		<>
			<DomainHud f={f} start={sf(44) - 20} end={sf(46) + 4} laser={laser} heat={0} erase={0} from={2} />
			<Doc doc="trancorh" start={sf(46) - 10} end={wf(47, 'six') - 10} bg="anneal" hl={[{key: 'erad', at: 0, ats: [wf(47, 'eradicated') - 14, wf(47, 'temperatures') - 14]}]} label="EXHIBIT" />
			<DomainHud f={f} start={wf(47, 'six') - 24} end={h.from + h.frames + 20} laser={1} heat={heat} erase={erase} from={9} />
			<Pop f={f} at={wf(44, 'domains')} until={sf(46)} style={{left: 120, top: 120}}>
				<Chip text="DOMAIN REFINEMENT" tone={colors.cyan} size={32} />
			</Pop>
			<Pop f={f} at={wf(45, 'laser')} until={sf(46)} style={{left: 120, top: 200}}>
				<Chip text="LASER-SCRIBED · CLEVELAND-CLIFFS DR GRADES" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(47, 'six')} until={h.from + h.frames + 10} style={{left: 120, top: 120}}>
				<Box>
					<Num f={f} keys={[{frame: wf(47, 'six') - 20, value: 560}, {frame: wf(47, 'Celsius'), value: Math.round(temp)}]} fmt={(v) => `${Math.round(v)} °C (${Math.round((v * 9) / 5 + 32)} °F)`} size={80} tone={colors.amber} step />
				</Box>
			</Pop>
			{f < sf(46) ? <Strip what="ILLUSTRATION" source="LASER LINES ACROSS THE STRIP · 232 REPORT P. 47" /> : null}
			{f >= wf(47, 'six') - 10 ? <Strip what="ILLUSTRATION" source="ABOVE 600 °C THE LASER EFFECT IS ERADICATED · TRAN-COR H DATASHEET P. 3" /> : null}
		</>
	);
};

// ── 12 · The company's own framing; the heat-proof kind (S48–S50) ─────────────────────────────────────────────────
const Grades12: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Excerpt f={f} doc="trancorh" start={sf(48) - 16} end={ef(48) + 12} bg="coreLift" bgFrom={18} hl={[{key: 'c67', at: 0, ats: [wf(48, 'presents') - 12, wf(48, 'transformers') - 12, wf(48, 'stress-relief') - 12, wf(48, 'other') - 12]}]} title="THE COMPANY'S OWN WORDS" />
			{/* r03: the loss figure on a real laminated core under load (a teaching model, cropped to the core) */}
			<Footage f={f} start={ef(48)} end={ef(49) + 16} clip="coreArc" from={2} focus={[0.42, 0.12]} crop={1.6}>
				<Pop f={f} at={wf(49, 'refined')} style={{left: 120, top: 120}}>
					<Chip text="TRAN-COR H DATASHEET · TABLE: TYPICAL CORE LOSS" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} at={wf(49, 'one')} style={{right: 120, top: 560}}>
					<Box>
						<Num f={f} keys={[{frame: wf(49, 'one') - 10, value: 0}, {frame: wf(49, 'zero'), value: 1}, {frame: wf(49, 'watts'), value: 1.01}]} fmt={(v) => `${v.toFixed(2)} W/KG`} size={88} tone={colors.amber} />
						<div style={T(28, {color: colors.ink, marginTop: 6})}>LOST AS HEAT · H-0 DR · 0.23 MM · 1.7 T, 60 HZ</div>
					</Box>
				</Pop>
			</Footage>
			<Excerpt f={f} doc="goes232" start={ef(49)} end={ef(50) + 30} bg="coreLift" bgFrom={22} hl={[{key: 'noknown', at: 0, ats: [wf(50, 'known') - 12, wf(50, 'survives') - 12]}]} y={240} />
			<Pop f={f} at={wf(50, 'wound')} until={ef(50) + 20} style={{left: 96, top: 960}}>
				<Chip text="WOUND CORES MUST BE ANNEALED" tone={colors.amber} size={30} />
			</Pop>
		</>
	);
};

// ── 13 · Imports by core type, 2019 (S51) ─────────────────────────────────────────────────────────────────────────
const Share13: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
		<Backdrop f={f} start={sf(51) - 12} end={ef(51) + 30} clip="coreLift" from={24} opacity={0.3} blur={5} />
		<BarChart
			grid
			f={f}
			start={sf(51) - 12}
			end={ef(51) + 30}
			title="IMPORTED SHARE OF CORE PURCHASES, 2019 (COMMERCE SURVEY)"
			source="US COMMERCE · SECTION 232 REPORT · 15 OCT 2020 · P. 12"
			max={100}
			bars={[
				{label: 'WOUND CORES', value: 75, at: wf(51, 'seventy-five'), tone: colors.amber, fmt: (v) => `${Math.round(v)}%`},
				{label: 'STACKED CORES', value: 54, at: wf(51, 'fifty-four'), tone: colors.amber, fmt: (v) => `${Math.round(v)}%`},
			]}
		>
			<Pop f={f} at={wf(51, 'nineteen')} style={{left: 1300, top: 140}}>
				<Chip text="2019" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(51, 'imported')} style={{left: 1220, top: 220}}>
				<span style={T(30, {color: colors.ink})}>IMPORTED</span>
			</Pop>
		</BarChart>
		</>
	);
};

// ── 14 · The top grade (S52–S53) ─────────────────────────────────────────────────────────────────────────────────────
const Top14: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="doe2024" start={sf(52) - 12} end={ef(52) + 12} hl={[{key: 'notmade', at: wf(52, 'manufactured')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(52, 'twenty-four')} until={ef(52)} style={{left: 96, top: 960}}>
				<Chip text="DOE · JUL 2024 · HIGHEST GRADE: PDR" tone={colors.amber} size={30} />
			</Pop>
			<Doc doc="goes232" start={ef(52)} end={ef(53) + 30} hl={[{key: 'c39', at: 0, ats: [wf(53, 'limited') - 12, wf(53, 'Japan') - 12, wf(53, 'high-permeability') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(53, 'Japan')} until={ef(53) + 20} style={{left: 96, top: 960}}>
				<Chip text="JAPAN" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(53, 'Korea')} until={ef(53) + 20} style={{left: 280, top: 960}}>
				<Chip text="SOUTH KOREA" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(53, 'standards')} until={ef(53) + 20} style={{right: 96, top: 960}}>
				<Chip text="DOE EFFICIENCY STANDARDS" tone={colors.ink} size={30} />
			</Pop>
		</>
	);
};

// ── 15 · From abroad (S54–S55): the core turns amber, then the turn to Act III ─────────────────────────────────────
const Abroad15: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(55);
	const cam = camAt(f, [
		{f: sf(54) - 20, cam: {pos: [CORE_X + 10, 4, 22], look: [CORE_X, 0.8, 0], fov: 36}},
		{f: wf(54, 'abroad'), cam: {pos: [CORE_X + 6, 3.5, 19], look: [CORE_X, 0.6, 0], fov: 35}},
		{f: wf(55, 'cores'), cam: {pos: [CORE_X + 2, 3, 17], look: [CORE_X, 0.6, 0], fov: 34}},
		{f: h.from + h.frames, cam: {pos: [CORE_X + 1, 3, 16.4], look: [CORE_X, 0.6, 0], fov: 34}},
	]);
	const imported = interpolate(f, [wf(54, 'highest') - 10, wf(54, 'steel'), wf(54, 'abroad') + 8], [0, 0.4, 1], {...clamp, easing: ease.arrive});
	return (
		<HeroShot f={f} start={sf(54) - 20} end={h.from + h.frames + 20} cam={cam} props={{coil: 0, core: 1, imported, peel: 0.3 * lead(f, wf(55, 'cores'), 16)}}>
			<Pop f={f} at={wf(54, 'abroad')} style={{left: 120, top: 120}}>
				<Chip text="STEEL: IMPORTED" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(55, 'cores')} style={{left: 120, top: 200}}>
				<Chip text="CORES: ?" tone={colors.ink} size={36} />
			</Pop>
			<Strip what="RECONSTRUCTION" source="DOE 2024 P. 22 · 232 REPORT P. 69" />
		</HeroShot>
	);
};

export const act2: SceneDef[] = [
	{id: 'ac01', from: sf(23) - 30, to: ef(25) + 40, C: Ac01},
	{id: 'sheets02', from: sf(26) - 20, to: ef(26) + 30, C: Sheets02},
	{id: 'grain03', from: sf(27) - 20, to: ef(28) + 30, C: Grain03},
	{id: 'make04', from: sf(29) - 12, to: ef(30) + 40, C: Make04},
	{id: 'width05', from: sf(31) - 30, to: ef(32) + 40, C: Width05},
	{id: 'mill06', from: sf(33) - 12, to: ef(34) + 30, C: Mill06},
	{id: 'overhang07', from: sf(35) - 20, to: ef(36) + 30, C: Overhang07},
	{id: 'patch08', from: sf(37) - 12, to: ef(37) + 30, C: Patch08},
	{id: 'question09', from: sf(38) - 20, to: ef(40) + 40, C: Question09},
	{id: 'limits10', from: sf(41) - 20, to: ef(43) + 40, C: Limits10},
	{id: 'laser11', from: sf(44) - 20, to: hold(47).from + hold(47).frames + 20, C: Laser11},
	{id: 'grades12', from: sf(48) - 16, to: ef(50) + 30, C: Grades12},
	{id: 'share13', from: sf(51) - 12, to: ef(51) + 30, C: Share13},
	{id: 'top14', from: sf(52) - 12, to: ef(53) + 30, C: Top14},
	{id: 'abroad15', from: sf(54) - 20, to: hold(55).from + hold(55).frames + 20, C: Abroad15},
];
