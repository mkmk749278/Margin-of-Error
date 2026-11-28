import React from 'react';
import {useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {camAt, COIL} from '../coil3d';
import {BarChart, Chip, clipOf, Doc, HearingClip, Num, Photo, Pop, Strip, Surface, T, Tray} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {Caliper, HeroShot} from './hero';
import {SceneDef} from './types';

// ACT IV · THE COST (S103–S131, clip02). The import line, a utility in its own voice, the 2030 model, the 40-year
// footnote, the line. Every cue a literal wf(sentence, 'word').

const Box: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{background: 'rgba(10,13,18,0.88)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>{children}</div>;

// ── 1 · How much came in (S103–S109) ──────────────────────────────────────────────────────────────────────────────
const Came01: React.FC = () => {
	const f = useCurrentFrame();
	const bars = [
		{label: '2018', value: 126, at: wf(105, 'twenty-six'), tone: colors.cyan, fmt: (v: number) => `$${Math.round(v)}M`},
		{label: '2025', value: 524, at: wf(106, 'twenty-four'), tone: colors.amber, fmt: (v: number) => `$${Math.round(v)}M`},
	];
	return (
		<>
			<BarChart f={f} start={sf(103) - 14} end={ef(107) + 12} title="US IMPORTS OF LAMINATIONS AND CORES" source="BREAKTHROUGH INSTITUTE · ANALYSIS · AUG 2026 · ITS FIGURES" max={600} bars={bars}>
				<Pop f={f} at={wf(104, 'together')} style={{left: 1180, top: 130}}>
					<span style={T(28, {color: colors.ink})}>LAMINATIONS + CORES</span>
				</Pop>
				<Pop f={f} at={wf(107, 'quadrupled')} style={{left: 1180, top: 190}}>
					<Num f={f} keys={[{frame: wf(107, 'More') - 4, value: 1}, {frame: wf(107, 'quadrupled'), value: 4.2}]} fmt={(v) => `×${v.toFixed(1)}`} size={96} tone={colors.amber} />
				</Pop>
			</BarChart>
			<Doc doc="breakthrough" start={ef(107)} end={ef(108) + 12} hl={[{key: 'c21', at: wf(108, 'rise')}, {key: 'causes', at: 0, ats: [wf(108, 'tariff') - 12, wf(108, 'demand') - 12]}]} label="EXHIBIT" title="ITS TWO CAUSES" />
			<BarChart f={f} start={ef(108)} end={ef(109) + 30} title="US IMPORTS OF LAMINATIONS AND CORES" source="BREAKTHROUGH INSTITUTE · AUG 2026 · NO RECORD MODELS AN EARLIER TARIFF" max={600} bars={bars.map((b) => ({...b, at: ef(108) - 30}))}>
				<Pop f={f} at={wf(109, 'earlier')} style={{left: 1180, top: 130, width: 300, height: 420, border: `3px dashed ${colors.sub}`}}>
					<div style={{...T(30, {color: colors.ink}), padding: 16}}>AN EARLIER TARIFF?</div>
				</Pop>
				<Pop f={f} at={wf(109, 'say')} style={{left: 1200, top: 300}}>
					<Chip text="NOT IN ANY RECORD WE READ" tone={colors.ink} size={26} />
				</Pop>
			</BarChart>
		</>
	);
};

// ── 2 · The utilities waited (S110–S111, clip02) ──────────────────────────────────────────────────────────────────
const Waited02: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Photo f={f} start={sf(110) - 14} end={clipOf('clip02').gapStartFrame + 16} src="photos/us_virginia_manassas_substation_ccbysa4.jpg" what="A COOPERATIVE'S SUBSTATION · MANASSAS PARK, VIRGINIA, 2016" source="PHOTO: FAMARTIN · CC BY-SA 4.0" focus={[0.55, 0.6]}>
			<Pop f={f} at={wf(111, 'September')} style={{left: 120, top: 110}}>
				<Chip text="HOUSE HEARING · 13 SEP 2023" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(111, 'Carolina')} style={{left: 120, top: 190}}>
				<Chip text="MID-CAROLINA ELECTRIC COOPERATIVE · SOUTH CAROLINA" tone={colors.ink} size={30} />
			</Pop>
		</Photo>
	);
};
const Clip02: React.FC = () => <HearingClip f={useCurrentFrame()} id="clip02" />;

// ── 3 · The 2030 model (S112–S120) ────────────────────────────────────────────────────────────────────────────────
const Model03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="jhu_hub" start={sf(112) - 14} end={ef(113) + 10} hl={[{key: 'c81', at: 0, ats: [wf(113, 'modeled') - 12, wf(113, 'thirty') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(113, 'November')} until={ef(113)} style={{right: 110, top: 900}}>
				<Chip text="17 NOV 2026" tone={colors.amber} size={40} />
			</Pop>
			<Doc doc="jhu_paper" start={ef(113)} end={ef(114) + 10} hl={[{key: 'c22', at: 0, ats: [wf(114, 'growth') - 12, wf(114, 'fourteen') - 12, wf(114, 'unmet') - 12]}]} label="EXHIBIT" title="THE MODEL" />
			<Pop f={f} at={wf(114, 'fourteen')} until={ef(115) + 10} style={{right: 120, top: 840}}>
				<Box>
					<Num f={f} keys={[{frame: wf(114, 'fourteen') - 10, value: 0}, {frame: wf(114, 'percent'), value: 14.5}, {frame: wf(115, 'twenty-five') - 4, value: 14.5}, {frame: wf(115, 'percent'), value: 25}]} fmt={(v) => `${v.toFixed(1)}% UNMET IN 2030`} size={60} tone={colors.amber} />
				</Box>
			</Pop>
			<Doc doc="jhu_paper" start={ef(114)} end={ef(115) + 10} hl={[{key: 'trade25', at: wf(115, 'twenty-five')}]} label="EXHIBIT" title="TRADE DISRUPTION" />
			<Doc doc="jhu_paper" start={ef(115)} end={ef(117) + 10} hl={[{key: 'c80', at: wf(116, 'copper')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(116, 'copper')} until={ef(117)} style={{left: 96, top: 960}}>
				<Chip text="1 COPPER" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(116, 'bulk')} until={ef(117)} style={{left: 330, top: 960}}>
				<Chip text="2 BULK STEEL" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(117, 'modeled')} until={ef(117)} style={{right: 96, top: 960}}>
				<Chip text="GOES: NOT A SEPARATE INPUT IN THE MODEL" tone={colors.ink} size={30} />
			</Pop>
			<Doc doc="jhu_hub" start={ef(117)} end={ef(119) + 10} hl={[{key: 'c32', at: 0, ats: [wf(119, 'delivered') - 12, wf(119, 'premium') - 12]}]} label="EXHIBIT" title={f >= wf(118, 'Dvorkin') ? 'YURY DVORKIN, CO-AUTHOR' : undefined} />
			<Doc doc="jhu_hub" start={ef(119)} end={ef(120) + 30} hl={[{key: 'c82', at: 0, ats: [wf(120, 'two-thirds') - 12, wf(120, 'centers') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(120, 'two-thirds')} until={ef(120) + 20} style={{right: 120, top: 860}}>
				<Box>
					<span style={T(64, {color: colors.amber, fontWeight: 700})}>UP TO 2/3</span>
					<div style={T(26, {color: colors.ink, marginTop: 6})}>OF EXPECTED SHORTAGES · DATA CENTERS · THE RESEARCHERS' FIGURE</div>
				</Box>
			</Pop>
		</>
	);
};

// ── 4 · The footnote (S121–S128) ──────────────────────────────────────────────────────────────────────────────────
const Footnote04: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(128);
	return (
		<>
			<Doc doc="doe2022" start={sf(121) - 14} end={ef(122) + 10} hl={[{key: 'c85', at: wf(122, 'thirty-eight')}]} label="EXHIBIT" title="ONE OF THE REPEATS" />
			<Pop f={f} at={wf(121, 'number')} until={ef(122)} style={{left: 96, top: 960}}>
				<Chip text="THE NUMBER" tone={colors.ink} size={32} />
			</Pop>
			<Pop f={f} at={wf(122, 'thirty-eight')} until={ef(122)} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(122, 'thirty-eight') - 10, value: 0}, {frame: wf(122, 'thirty-eight') + 8, value: 38}, {frame: wf(122, 'forty'), value: 40}]} fmt={(v) => (v < 39 ? `${Math.round(v)} YEARS` : `38–${Math.round(v)} YEARS`)} size={72} tone={colors.amber} step />
				</Box>
			</Pop>
			<Doc doc="doe2014" page={1} start={ef(122)} end={ef(123) + 8} label="EXHIBIT" focus={{x: 150, y: 1300, w: 1570, h: 900}} pushTo={wf(123, 'study')} />
			<Pop f={f} at={wf(123, 'fourteen')} until={ef(123)} style={{right: 110, top: 900}}>
				<Chip text="APR 2014" tone={colors.amber} size={40} />
			</Pop>
			<Doc doc="doe2014" start={ef(123)} end={ef(125) + 10} hl={[{key: 'c06', at: 0, ats: [wf(124, 'hedged') - 12, wf(124, 'sources') - 12, wf(124, 'estimated') - 12]}, {key: 'fn95', at: wf(125, 'Korea')}]} label="EXHIBIT" title="THE BODY · P. 35" />
			<Pop f={f} at={wf(125, 'footnote')} until={ef(125)} style={{left: 96, top: 960}}>
				<Chip text="FN. 95 → USITC 731-TA-1189 · 04 AUG 2011" tone={colors.amber} size={30} />
			</Pop>
			<Doc doc="doe2014" start={ef(125)} end={ef(126) + 10} hl={[{key: 'c84', at: 0, ats: [wf(126, 'summary') - 12, wf(126, 'hedge') - 12]}]} label="EXHIBIT" title="EXECUTIVE SUMMARY" />
			<Tray
				f={f}
				start={ef(126)}
				end={h.from + h.frames + 20}
				pages={[
					{img: 'doe2014_p035', tag: 'DOE 2014 · BODY', at: ef(126) + 6, mark: 'ESTIMATED', markAt: wf(127, 'repeat'), tone: colors.cyan},
					{img: 'doe2014_p006', tag: 'DOE 2014 · SUMMARY', at: ef(126) + 18, mark: '38–40', markAt: wf(127, 'repeat')},
					{img: 'doe2022_p028', tag: 'DOE 2022', at: wf(127, 'twenty-two'), mark: '38–40', markAt: wf(127, 'repeat')},
					{img: 'doe2024_p011', tag: 'DOE 2024', at: wf(127, 'twenty-four'), mark: '38–40', markAt: wf(127, 'repeat')},
				]}
			/>
			<Pop f={f} at={wf(128, 'suggest')} until={h.from + h.frames + 10} style={{left: 0, right: 0, top: 900, textAlign: 'center'}}>
				<Chip text="OUR READING OF THESE PAGES" tone={colors.ink} size={36} />
			</Pop>
			<Pop f={f} at={wf(128, 'measured')} until={h.from + h.frames + 10} style={{left: 0, right: 0, top: 970, textAlign: 'center'}}>
				<span style={T(30, {color: colors.amber})}>AN ESTIMATE · REPEATED</span>
			</Pop>
		</>
	);
};

// ── 5 · The line (S129–S131): the coil, the anneal, the queue; all on file ───────────────────────────────────────
const Line05: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(131);
	const cam = camAt(f, [
		{f: sf(129) - 20, cam: {pos: [10, 4.5, 19], look: [0, 0.4, 0], fov: 36}},
		{f: wf(129, 'anneal'), cam: {pos: [8, 4, 18], look: [0, 0.4, 0], fov: 35}},
	]);
	return (
		<>
			<HeroShot f={f} start={sf(129) - 20} end={wf(129, 'anneal') + 4} cam={cam} props={{spin: f * 0.0035}}>
				<Caliper cam={cam} k={lead(f, wf(129, 'coil'), 10)} halfW={COIL.w / 2} tone={colors.cyan} label={<span>920 MM</span>} />
			</HeroShot>
			<Surface f={f} start={wf(129, 'anneal') - 8} end={wf(129, 'queue') + 4} align={1} laser={1} heat={0.8} erase={0.7} />
			<Photo f={f} start={wf(129, 'queue') - 8} end={wf(131, 'All') + 4} src="photos/schnabel_rail_16x9_ccbysa4.jpg" what="A TRANSFORMER ON A SCHNABEL CAR · KRAUTHAUSEN, GERMANY" source="PHOTO: KLAUSMINIWOLF · CC BY-SA 4.0" focus={[0.5, 0.5]} dir={-1}>
				<Pop f={f} at={wf(130, 'wreckage')} style={{left: 120, top: 110}}>
					<Chip text="NO WRECKAGE" tone={colors.ink} size={36} />
				</Pop>
			</Photo>
			<Tray
				f={f}
				start={wf(131, 'All') - 10}
				end={h.from + h.frames + 20}
				pages={[
					{img: 'goes232_p001', tag: 'COMMERCE 2020', at: wf(131, 'All')},
					{img: 'doe2024_p001', tag: 'DOE 2024', at: wf(131, 'All') + 6},
					{img: 'trancorh_p001', tag: 'TRAN-COR H', at: wf(131, 'file') - 6},
					{img: 'fr2025_p001', tag: '90 FR 40326', at: wf(131, 'file')},
				]}
			/>
			{f >= wf(131, 'All') - 10 ? <Strip what="ON FILE" source="PUBLIC RECORDS · LINKED IN THE DESCRIPTION" /> : null}
		</>
	);
};

export const act4: SceneDef[] = [
	{id: 'came01', from: sf(103) - 14, to: ef(109) + 30, C: Came01},
	{id: 'waited02', from: sf(110) - 14, to: clipOf('clip02').gapStartFrame + 16, C: Waited02},
	{id: 'clip02', from: clipOf('clip02').gapStartFrame, to: clipOf('clip02').gapEndFrame + 16, C: Clip02},
	{id: 'model03', from: sf(112) - 14, to: ef(120) + 30, C: Model03},
	{id: 'footnote04', from: sf(121) - 14, to: hold(128).from + hold(128).frames + 20, C: Footnote04},
	{id: 'line05', from: sf(129) - 20, to: hold(131).from + hold(131).frames + 20, C: Line05},
];
