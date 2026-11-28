import React from 'react';
import {Img, useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {camAt, COIL, CORE_X} from '../coil3d';
import {media} from '../kit';
import {BarChart, Calendar, Chip, Doc, Num, Pop, Strip, T} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {HeroShot, P} from './hero';
import {SceneDef} from './types';

// ACT III · THE TARIFF (S56–S102). Opens on a new exhibit (the company's release), then the gap in the 2018 tariff,
// the imports, the pledges, the finding, the announcement (paid), the calendar (signature 2), both sides on width,
// August 2025. Every cue a literal wf(sentence, 'word').

const Box: React.FC<{children: React.ReactNode}> = ({children}) => <div style={{background: 'rgba(10,13,18,0.88)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>{children}</div>;
const Date_: React.FC<{text: string}> = ({text}) => <Chip text={text} tone={colors.amber} size={40} />;

// ── 1 · The company's release, 02 NOV 2020 (S56–S57) ─────────────────────────────────────────────────────────────
const Release01: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(57);
	return (
		<>
			<Doc doc="cliffs_2020" start={sf(56) - 20} end={h.from + h.frames + 14} hl={[{key: 'c28', at: 0, ats: [wf(57, 'moving') - 14, wf(57, 'action') - 14, wf(57, 'laminations') - 14]}]} label="NEW EXHIBIT" title={f >= wf(57, 'said') ? 'COMPANY STATEMENT' : undefined} />
			<Pop f={f} at={wf(56, 'November')} until={sf(57)} style={{right: 110, top: 900}}>
				<Date_ text="02 NOV 2020" />
			</Pop>
			<Pop f={f} at={wf(56, 'release')} until={sf(57)} style={{left: 96, top: 900}}>
				<Chip text="CLEVELAND-CLIFFS · OWNER OF BUTLER WORKS" tone={colors.ink} size={30} />
			</Pop>
		</>
	);
};

// ── 2 · What Section 232 is (S58) ─────────────────────────────────────────────────────────────────────────────────
const Law02: React.FC = () => (
	<>
		<Doc doc="crs" start={sf(58) - 12} end={ef(58) + 20} hl={[{key: 'c83', at: 0, ats: [wf(58, 'President') - 12, wf(58, 'restrict') - 12, wf(58, 'threaten') - 12]}]} label="EXHIBIT" />
		<Pop f={useCurrentFrame()} at={wf(58, 'law')} until={ef(58) + 10} style={{right: 110, top: 900}}>
			<Chip text="19 U.S.C. § 1862" tone={colors.ink} size={36} />
		</Pop>
	</>
);

// ── 3 · 2018: the coil in, the core out (S59–S62) ────────────────────────────────────────────────────────────────
const Codes03: React.FC = () => {
	const f = useCurrentFrame();
	const from = ef(60) - 10;
	const cam = camAt(f, [
		{f: from, cam: {pos: [CORE_X / 2, 9, 46], look: [CORE_X / 2, 0, 0], fov: 38}},
		{f: wf(61, 'coil'), cam: {pos: [CORE_X / 2 - 3, 8, 44], look: [CORE_X / 2 - 1, 0, 0], fov: 38}},
		{f: wf(62, 'core'), cam: {pos: [CORE_X / 2 + 3, 8, 44], look: [CORE_X / 2 + 1, 0, 0], fov: 38}},
		{f: ef(62) + 40, cam: {pos: [CORE_X / 2 + 4, 8, 43], look: [CORE_X / 2 + 1, 0, 0], fov: 38}},
	]);
	const c = P([0, COIL.ro + 1.5, 0], cam);
	const k = P([CORE_X, 9, 0], cam);
	const inK = lead(f, wf(61, 'in'), 10);
	const outK = lead(f, wf(62, 'not'), 10);
	return (
		<HeroShot f={f} start={from} end={ef(62) + 40} cam={cam} props={{spin: f * 0.0035, core: 1, imported: 0}}>
			<Pop f={f} at={wf(61, 'coil')} style={{left: c.x - 260, top: Math.max(130, c.y - 150), width: 520, textAlign: 'center'}}>
				<Box>
					<div style={T(32, {color: colors.ink, fontWeight: 700})}>HTS 7225.11 · THE COIL</div>
					<div style={{...T(40, {color: colors.amber, fontWeight: 700}), opacity: inK, marginTop: 8}}>25% TARIFF · IN</div>
				</Box>
			</Pop>
			<Pop f={f} at={wf(62, 'core')} style={{left: k.x - 300, top: Math.max(130, k.y - 170), width: 600, textAlign: 'center'}}>
				<Box>
					<div style={T(32, {color: colors.ink, fontWeight: 700})}>HTS 8504.90 · THE CORE</div>
					<div style={T(26, {color: colors.ink, marginTop: 4})}>{f >= wf(62, 'electrical') ? 'ELECTRICAL EQUIPMENT' : ' '}</div>
					<div style={{...T(40, {color: colors.cyan, fontWeight: 700}), opacity: outK, marginTop: 8}}>NOT COVERED</div>
				</Box>
			</Pop>
			<Strip what="RECONSTRUCTION" source="PROCLAMATION 9705 (83 FR 11625) · 232 REPORT P. 239 · DOE 2024 P. 22" />
		</HeroShot>
	);
};
const Procl03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="fr2018" page={1} start={sf(59) - 12} end={sf(60) + 10} label="EXHIBIT" focus={{x: 150, y: 120, w: 1570, h: 700}} />
			<Pop f={f} at={wf(59, 'eighteen')} until={sf(60)} style={{right: 110, top: 900}}>
				<Date_ text="2018" />
			</Pop>
			<Doc doc="fr2018" start={sf(60)} end={ef(60) + 14} hl={[{key: 'c41', at: 0, ats: [wf(60, 'tariff') - 12, wf(60, 'steel') - 12, wf(60, 'defined') - 12, wf(60, 'code') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(60, 'March')} until={ef(60)} style={{right: 110, top: 900}}>
				<Date_ text="08 MAR 2018 · PROCLAMATION 9705" />
			</Pop>
		</>
	);
};

// ── 4 · The gap, in the records' words (S63–S65) ──────────────────────────────────────────────────────────────────
const Gap04: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="doe2024" start={sf(63) - 12} end={ef(63) + 12} hl={[{key: 'c44', at: 0, ats: [wf(63, 'steel') - 12, wf(63, 'exporting') - 12, wf(63, 'laminations') - 12]}]} label="EXHIBIT" />
			<Doc doc="goes232" start={ef(63)} end={ef(64) + 12} hl={[{key: 'c45', at: wf(64, 'zero')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(64, 'zero')} until={ef(64) + 6} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(64, 'duty') - 6, value: 3}, {frame: wf(64, 'zero'), value: 0}]} fmt={(v) => `${v.toFixed(1)}%`} size={88} tone={colors.cyan} />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>ORDINARY (MFN) DUTY ON CORES</div>
				</Box>
			</Pop>
			<Doc doc="fr2019" start={ef(64)} end={ef(65) + 30} hl={[{key: 'c90', at: 0, ats: [wf(65, 'Canada') - 12, wf(65, 'excluded') - 12, wf(65, 'altogether') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(65, 'May')} until={ef(65) + 20} style={{right: 110, top: 900}}>
				<Date_ text="FROM 20 MAY 2019" />
			</Pop>
		</>
	);
};

// ── 5 · The imports (S66–S71) ─────────────────────────────────────────────────────────────────────────────────────
const Imports05: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<BarChart
				f={f}
				start={sf(66) - 12}
				end={ef(68) + 14}
				title="US IMPORTS OF STACKED AND WOUND CORES"
				source="US COMMERCE · SECTION 232 REPORT · 15 OCT 2020 · P. 13"
				max={190}
				bars={[
					{label: '2015', value: 22, at: wf(67, 'twenty-two'), tone: colors.cyan, fmt: (v) => `$${Math.round(v)}M`},
					{label: '2019', value: 167, at: wf(67, 'sixty-seven'), tone: colors.amber, fmt: (v) => `$${Math.round(v)}M`},
				]}
			>
				<Pop f={f} at={wf(66, 'measured')} style={{left: 1200, top: 130}}>
					<span style={T(28, {color: colors.ink})}>COMMERCE DATA</span>
				</Pop>
				<Pop f={f} at={wf(68, 'six')} style={{left: 1180, top: 190}}>
					<Num f={f} keys={[{frame: wf(68, 'six') - 6, value: 0}, {frame: wf(68, 'percent'), value: 650}]} fmt={(v) => `+${Math.round(v)}%`} size={88} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink})}>"A 650 PERCENT INCREASE"</div>
				</Pop>
			</BarChart>
			<Doc doc="goes232" start={ef(68)} end={ef(71) + 30} hl={[{key: 'c14', at: 0, ats: [wf(69, 'supplied') - 12, wf(70, 'forty-five') - 12, wf(71, 'Neither') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(69, 'fifty-two')} until={ef(71) + 20} style={{left: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(69, 'fifty-two') - 10, value: 0}, {frame: wf(69, 'percent'), value: 52}]} fmt={(v) => `CANADA ${Math.round(v)}%`} size={56} tone={colors.amber} step />
				</Box>
			</Pop>
			<Pop f={f} at={wf(70, 'forty-five')} until={ef(71) + 20} style={{left: 600, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(70, 'forty-five') - 10, value: 0}, {frame: wf(70, 'forty-five') + 6, value: 45}]} fmt={(v) => `MEXICO ${Math.round(v)}%`} size={56} tone={colors.amber} step />
				</Box>
			</Pop>
			<Pop f={f} at={wf(71, 'steel')} until={ef(71) + 20} style={{right: 120, top: 880}}>
				<Chip text="GOES MADE IN EITHER: NONE" tone={colors.ink} size={32} />
			</Pop>
		</>
	);
};

// ── 6 · The pledges and the argument (S72–S74) ────────────────────────────────────────────────────────────────────
const Pledge06: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="joint_canada" start={sf(72) - 12} end={ef(72) + 12} hl={[{key: 'c49', at: 0, ats: [wf(72, 'transshipment') - 14, wf(72, 'elsewhere') - 12, wf(72, 'consult') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(72, 'Both')} until={ef(72)} style={{right: 110, top: 760, width: 300, background: colors.paper, padding: 8, boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}>
				<Img src={media('pages/joint_mexico_p001.jpg')} style={{width: 284}} />
				<div style={T(26, {color: colors.paper_ink})}>US–MEXICO · SAME DAY</div>
			</Pop>
			<Pop f={f} at={wf(72, 'May')} until={ef(72)} style={{left: 96, top: 960}}>
				<Date_ text="17 MAY 2019" />
			</Pop>
			<Doc doc="crs" start={ef(72)} end={ef(73) + 12} hl={[{key: 'c98', at: 0, ats: [wf(73, 'Congress') - 12, wf(73, 'avoid') - 12]}]} label="EXHIBIT" />
			<Doc doc="crs" start={ef(73)} end={ef(74) + 30} hl={[{key: 'c48', at: 0, ats: [wf(74, 'contested') - 12, wf(74, 'integrated') - 12, wf(74, 'American') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(74, 'submission')} until={ef(74) + 20} style={{left: 96, top: 960}}>
				<Chip text="CANADA'S POSITION, AS CRS RECORDS IT" tone={colors.ink} size={30} />
			</Pop>
		</>
	);
};

// ── 7 · The finding, the warning, the delivery (S75–S79) ─────────────────────────────────────────────────────────
const Finding07: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="goes232" page={1} start={sf(75) - 12} end={ef(75) + 10} label="EXHIBIT" focus={{x: 150, y: 1500, w: 1570, h: 700}} pushTo={wf(75, 'finding')} />
			<Pop f={f} at={wf(75, 'fifteenth')} until={ef(75)} style={{right: 110, top: 900}}>
				<Date_ text="15 OCT 2020" />
			</Pop>
			<Doc doc="goes232" start={ef(75)} end={ef(76) + 12} hl={[{key: 'finds', at: 0, ats: [wf(76, 'Laminations') - 12, wf(76, 'imported') - 12, wf(76, 'circumstances') - 12, wf(76, 'security') - 12]}]} label="THE FINDING" />
			<Doc doc="goes232" start={ef(76)} end={ef(77) + 12} hl={[{key: 'c88', at: 0, ats: [wf(77, 'profitability') - 12, wf(77, 'invest') - 12]}]} label="EXHIBIT" />
			<Doc doc="goes232" start={ef(77)} end={ef(78) + 12} hl={[{key: 'c24', at: 0, ats: [wf(78, 'warning') - 12, wf(78, 'unprofitable') - 12]}]} label="EXHIBIT" title={f >= wf(78, 'cited') ? "THE COMPANY'S STATEMENT, AS CITED" : undefined} />
			<Doc doc="crs" start={ef(78)} end={ef(79) + 30} hl={[{key: 'c47b', at: wf(79, 'President')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(79, 'next')} until={ef(79) + 20} style={{right: 110, top: 900}}>
				<Date_ text="16 OCT 2020" />
			</Pop>
		</>
	);
};

// ── 8 · The announcement, face up (S80–S85) ──────────────────────────────────────────────────────────────────────
const Announce08: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="ustr_mexico" page={2} start={sf(80) - 12} end={ef(80) + 10} label="NOW FACE UP" focus={{x: 150, y: 240, w: 1570, h: 640}} />
			<Pop f={f} at={wf(80, 'fifth')} until={ef(80)} style={{right: 110, top: 900}}>
				<Date_ text="05 NOV 2020 · 21 DAYS LATER" />
			</Pop>
			<Pop f={f} at={wf(80, 'negotiator')} until={ef(80)} style={{left: 96, top: 900}}>
				<Chip text="USTR" tone={colors.ink} size={36} />
			</Pop>
			<Doc doc="ustr_mexico" start={ef(80)} end={ef(82) + 12} hl={[{key: 'c17', at: 0, ats: [wf(81, 'Mexico') - 12, wf(81, 'subject') - 12, wf(81, 'transformers') - 12]}, {key: 'monitor', at: wf(82, 'monitoring')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(82, 'light')} until={ef(82)} style={{left: 96, top: 960}}>
				<Chip text="MEXICO ONLY" tone={colors.amber} size={36} />
			</Pop>
			<Doc doc="crs" start={ef(82)} end={ef(83) + 12} hl={[{key: 'noother', at: wf(83, 'taken')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(83, 'arm')} until={ef(83)} style={{left: 96, top: 960}}>
				<Chip text="CRS · R45249 · 18 MAY 2021" tone={colors.ink} size={30} />
			</Pop>
			<Tray08 />
		</>
	);
};
/** Two pledges side by side: the same clause; one country's consultations announced, the other's not (S84–S85). */
const Tray08: React.FC = () => {
	const f = useCurrentFrame();
	const o = Math.min(lead(f, ef(83), 14), 1 - lead(f, ef(85) + 30, 14));
	if (o <= 0) return null;
	const lift = lead(f, wf(85, "Mexico's"), 14);
	const drift = tween(f, ef(83), ef(85) + 40, 0, 1, ease.camera);
	const Page: React.FC<{img: string; x: number; tag: string; tone: string; up: number; label?: string; labelOn: number}> = ({img, x, tag, tone, up, label, labelOn}) => (
		<div style={{position: 'absolute', left: x, top: 120 - up * 40, width: 620, height: 802, background: colors.paper, transform: `rotateX(${18 - up * 6}deg)`, boxShadow: `0 ${30 + up * 20}px 80px rgba(0,0,0,0.6)`}}>
			<Img src={media(`pages/${img}.jpg`)} style={{width: 620, height: 802}} />
			<div style={{position: 'absolute', left: 0, right: 0, bottom: -64, textAlign: 'center', ...T(28, {color: colors.ink})}}>{tag}</div>
			{label ? <div style={{position: 'absolute', left: 20, top: 20, opacity: lead(f, labelOn, 10)}}><Chip text={label} tone={tone} size={32} /></div> : null}
		</div>
	);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1100, perspectiveOrigin: '50% 20%'}}>
			<div style={{position: 'absolute', inset: 0, transform: `translateX(${(-20 * drift).toFixed(1)}px) scale(${(1 + 0.03 * drift).toFixed(3)})`}}>
				<Page img="joint_canada_p001" x={240} tag="US–CANADA · 17 MAY 2019" tone={colors.ink} up={0} label="CONTESTED THE CLAIM" labelOn={wf(84, 'contested')} />
				<Page img="joint_mexico_p001" x={1060} tag="US–MEXICO · 17 MAY 2019" tone={colors.amber} up={lift} label="CONSULTATIONS ANNOUNCED" labelOn={wf(85, 'announced')} />
			</div>
			<Pop f={f} at={wf(84, 'pledge')} style={{left: 0, right: 0, top: 980, textAlign: 'center'}}>
				<span style={T(30, {color: colors.ink})}>SAME TRANSSHIPMENT CLAUSE</span>
			</Pop>
		</div>
	);
};

// ── 9 · Signature 2: the calendar (S86–S91), five seconds with no narration ──────────────────────────────────────
const Calendar09: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(89);
	const pages = [
		{date: '15 OCT 2020', what: 'Commerce report: imports of cores threaten national security', src: '232 REPORT · P. 17', at: sf(86) - 70},
		{date: '16 OCT 2020', what: 'Report delivered to the President', src: 'CRS R45249 · P. 27', at: sf(86) - 45},
		{date: '05 NOV 2020', what: 'USTR: Mexico excluded from any action', src: 'USTR STATEMENT', at: sf(86) - 20},
		{date: '18 NOV 2021', what: 'Report published in the Federal Register', src: '86 FR 64606', at: wf(86, 'published')},
		{date: '06 JUN 2022', what: 'Defense Production Act determination: transformers and grid components', src: 'PRESIDENTIAL DETERMINATION · 87 FR', at: wf(87, 'determination')},
		{date: '13 SEP 2023', what: 'DOE: no funds appropriated for that authority', src: 'DOE TESTIMONY · P. 2', at: wf(87, 'necessary')},
		{date: 'AUG 2024', what: 'DOE: $19.07M, phase 1 of the mill upgrade', src: 'DOE OCED FACT SHEET', at: wf(88, 'funded')},
		{date: '04 JUN 2025', what: 'Steel tariff raised to 50%', src: 'PROCLAMATION · 90 FR', at: h.from + 70, tone: colors.amber},
		{date: '18 AUG 2025', what: 'Laminations and cores added to the steel tariff', src: '90 FR 40326 · "EFFECTIVE TODAY"', at: h.from + 200, tone: colors.amber},
	];
	const none = lead(f, wf(89, 'None'), 12);
	return (
		<>
			<Calendar f={f} start={sf(86) - 80} end={ef(91) + 70} pages={pages.map((p) => ({...p, tone: p.tone ?? (none > 0 ? colors.cyan : colors.sub)}))} />
			<Pop f={f} at={wf(89, 'tariff')} until={h.from + 40} style={{left: 0, right: 0, top: 860, textAlign: 'center'}}>
				<span style={T(40, {color: colors.cyan, fontWeight: 700})}>NONE A TARIFF ON CORES</span>
			</Pop>
			<Pop f={f} at={wf(90, 'August')} until={ef(91) + 60} style={{left: 0, right: 0, top: 860, textAlign: 'center'}}>
				<Num f={f} keys={[{frame: wf(90, 'August') - 4, value: 0}, {frame: wf(90, 'twenty-five'), value: 58}]} fmt={(v) => `${Math.round(v)} MONTHS FROM THE FINDING`} size={44} tone={colors.amber} step />
			</Pop>
			<Pop f={f} at={wf(91, 'say')} until={ef(91) + 60} style={{left: 96, top: 96}}>
				<Chip text="NO STATED REASON IN THE RECORDS WE READ" tone={colors.ink} size={30} />
			</Pop>
			<Strip what="THE RECORD, DATE BY DATE" source="EACH PAGE: ITS OWN DOCUMENT" />
		</>
	);
};

// ── 10 · Both sides on width (S92–S97) ────────────────────────────────────────────────────────────────────────────
const Width10: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="cliffs_2020" cropH={1400} start={sf(92) - 12} end={ef(93) + 12} hl={[{key: 'only1400', at: 0, ats: [wf(93, 'market') - 12, wf(93, 'wider') - 12]}]} label="EXHIBIT" title="COMPANY STATEMENT" />
			<Pop f={f} at={wf(92, 'sides')} until={sf(93)} style={{left: 96, top: 960}}>
				<Chip text="SIDE 1 · THE STEELMAKER" tone={colors.cyan} size={30} />
			</Pop>
			<Pop f={f} at={wf(93, 'thousand')} until={ef(93) + 10} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(93, 'one') - 8, value: 0}, {frame: wf(93, 'tons'), value: 1400}]} fmt={(v) => `${Math.round(v).toLocaleString('en-US')} TONS`} size={72} tone={colors.cyan} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>WIDER THAN 920 MM · ITS FIGURE</div>
				</Box>
			</Pop>
			<Doc doc="goes232" start={ef(93)} end={ef(94) + 12} hl={[{key: 'width', at: wf(94, 'thirty-two')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(94, 'transformer')} until={ef(94)} style={{left: 96, top: 960}}>
				<Chip text="SIDE 2 · THE TRANSFORMER MAKERS" tone={colors.amber} size={30} />
			</Pop>
			<Doc doc="howard" start={ef(94)} end={ef(95) + 12} hl={[{key: 'c30', at: wf(95, 'enough')}]} label="EXHIBIT" title="CROPPED TO ITS FINDING" />
			<Pop f={f} at={wf(95, 'twenty-five')} until={ef(95)} style={{right: 110, top: 900}}>
				<Date_ text="21 OCT 2025" />
			</Pop>
			<Pop f={f} at={wf(95, 'opposed')} until={ef(95)} style={{left: 96, top: 960}}>
				<Chip text="HOWARD INDUSTRIES · BUYS THIS STEEL · OPPOSED THE TARIFF ON TRANSFORMERS" tone={colors.ink} size={28} />
			</Pop>
			<Doc doc="cliffs_filing" page={1} start={ef(95)} end={ef(96) + 10} label="EXHIBIT" focus={{x: 150, y: 120, w: 1570, h: 800}} />
			<Pop f={f} at={wf(96, 'asked')} until={ef(96)} style={{left: 96, top: 960}}>
				<Chip text="REQUEST: ADD DISTRIBUTION TRANSFORMERS" tone={colors.ink} size={30} />
			</Pop>
			<Doc doc="cliffs_filing" start={ef(96)} end={ef(97) + 30} hl={[{key: 'c74', at: 0, ats: [wf(97, 'sufficient') - 12, wf(97, 'demand') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(97, 'earlier')} until={ef(97) + 20} style={{right: 110, top: 900}}>
				<Date_ text="29 SEP 2025" />
			</Pop>
		</>
	);
};

// ── 11 · August 2025 and after (S98–S102) ────────────────────────────────────────────────────────────────────────
const Aug11: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(102);
	return (
		<>
			<Doc doc="fr2025" start={sf(98) - 12} end={ef(98) + 12} hl={[{key: 'c51', at: 0, ats: [wf(98, 'added') - 12, wf(98, 'four') - 12, wf(98, 'codes') - 12, wf(98, 'steel') - 12, wf(98, 'tariffs') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(98, 'eighteenth')} until={ef(98)} style={{right: 110, top: 900}}>
				<Date_ text="18 AUG 2025" />
			</Pop>
			<Pop f={f} at={wf(98, 'four')} until={ef(98)} style={{left: 120, top: 880}}>
				<Box>
					<Num f={f} keys={[{frame: wf(98, 'four') - 8, value: 0}, {frame: wf(98, 'seven'), value: 407}]} fmt={(v) => `${Math.round(v)} CODES`} size={64} tone={colors.amber} step />
				</Box>
			</Pop>
			<Doc doc="fr2025jun" start={ef(98)} end={ef(99) + 12} hl={[{key: 'c54', at: wf(99, 'fifty')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(99, 'laminations')} until={ef(99)} style={{left: 96, top: 960}}>
				<Chip text="LAMINATIONS · CORES · LARGE LIQUID-FILLED TRANSFORMERS" tone={colors.ink} size={28} />
			</Pop>
			<Pop f={f} at={wf(99, 'fifty')} until={ef(99)} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(99, 'fifty') - 10, value: 25}, {frame: wf(99, 'percent'), value: 50}]} fmt={(v) => `${Math.round(v)}% ON STEEL CONTENT`} size={56} tone={colors.amber} step />
				</Box>
			</Pop>
			<Doc doc="cliffs_2025" start={ef(99)} end={ef(100) + 10} hl={[{key: 'c18', at: wf(100, 'applauded')}]} label="EXHIBIT" title="COMPANY STATEMENT" />
			<Doc doc="breakthrough" start={ef(100)} end={ef(101) + 12} hl={[{key: 'c33', at: 0, ats: [wf(101, 'opposite') - 12, wf(101, 'investment') - 12]}]} label="EXHIBIT" title="ITS ARGUMENT" />
			<Pop f={f} at={wf(101, 'research')} until={ef(101)} style={{left: 96, top: 960}}>
				<Chip text="BREAKTHROUGH INSTITUTE · RESEARCH GROUP" tone={colors.ink} size={30} />
			</Pop>
			<Doc doc="fr2026apr" start={ef(101)} end={h.from + h.frames + 20} hl={[{key: 'c55', at: 0, ats: [wf(102, 'charge') - 12, wf(102, 'full') - 12]}]} label="EXHIBIT" />
			<Pop f={f} at={wf(102, 'twenty-five')} until={h.from + h.frames} style={{right: 120, top: 860}}>
				<Box>
					<Num f={f} keys={[{frame: wf(102, 'twenty-five') - 10, value: 50}, {frame: wf(102, 'percent'), value: 25}]} fmt={(v) => `${Math.round(v)}% · FULL VALUE`} size={60} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>FROM 06 APR 2026</div>
				</Box>
			</Pop>
		</>
	);
};

export const act3: SceneDef[] = [
	{id: 'release01', from: sf(56) - 20, to: hold(57).from + hold(57).frames + 14, C: Release01},
	{id: 'law02', from: sf(58) - 12, to: ef(58) + 20, C: Law02},
	{id: 'procl03', from: sf(59) - 12, to: ef(60) + 14, C: Procl03},
	{id: 'codes03', from: ef(60) - 10, to: ef(62) + 40, C: Codes03},
	{id: 'gap04', from: sf(63) - 12, to: ef(65) + 30, C: Gap04},
	{id: 'imports05', from: sf(66) - 12, to: ef(71) + 30, C: Imports05},
	{id: 'pledge06', from: sf(72) - 12, to: ef(74) + 30, C: Pledge06},
	{id: 'finding07', from: sf(75) - 12, to: ef(79) + 30, C: Finding07},
	{id: 'announce08', from: sf(80) - 12, to: ef(85) + 44, C: Announce08},
	{id: 'calendar09', from: sf(86) - 80, to: ef(91) + 70, C: Calendar09},
	{id: 'width10', from: sf(92) - 12, to: ef(97) + 30, C: Width10},
	{id: 'aug11', from: sf(98) - 12, to: hold(102).from + hold(102).frames + 20, C: Aug11},
];
