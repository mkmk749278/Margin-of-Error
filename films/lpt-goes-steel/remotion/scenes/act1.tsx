import React from 'react';
import {Img, interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {camAt, COIL, CORE_X} from '../coil3d';
import {media} from '../kit';
import {BarChart, Chip, clamp, Doc, HearingClip, Num, Photo, Pop, Strip, T, clipOf} from '../parts';
import {ef, sf, wf} from '../timing';
import {Caliper, HeroShot, Loupe, P} from './hero';
import {SceneDef} from './types';

// ACT I · THE WAIT (S0–S22, clip01). Opening per script/opening.md: the coil (frame 0 in motion), the 232 page, the
// core the steel goes into, the official on hearing video, the finding, the face-down announcement, the five years,
// the method; then the wait, the counts, the wall, the question. Every cue is a literal wf(sentence, 'word').

const W920 = COIL.w / 2; // 460 mm either side of the centre
const W932 = 9.32 / 2;

// ── 1 · The coil (S0–S1) ──────────────────────────────────────────────────────────────────────────────────────────
const Coil01: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: 0, cam: {pos: [15, 4.5, 17], look: [0, -0.4, 0], fov: 36}},
		{f: wf(0, 'steel'), cam: {pos: [10, 4, 19], look: [0, -0.2, 0], fov: 36}},
		{f: wf(1, 'widest'), cam: {pos: [3, 3.6, 21], look: [0, 0.6, 0], fov: 36}},
		{f: wf(1, 'nine'), cam: {pos: [0.6, 3.4, 21.5], look: [0, 1.4, 0], fov: 36}},
		{f: ef(1) + 60, cam: {pos: [-0.6, 3.3, 21], look: [0, 1.5, 0], fov: 35}},
	]);
	const spin = f * 0.0035;
	const lamp = interpolate(f, [wf(0, 'makes') - 10, wf(0, 'makes') + 20], [0.6, 1], {...clamp, easing: ease.arrive});
	const glint = interpolate(f, [wf(0, 'steel') - 10, wf(0, 'steel') + 40], [0, 1], clamp);
	const ghost = Math.min(lead(f, wf(0, 'cores'), 14), 1 - lead(f, wf(1, 'widest'), 20)) * 0.7;
	const cal = lead(f, wf(1, 'nine'), 14);
	const v = (
		<span>
			<Num f={f} keys={[{frame: wf(1, 'nine') - 6, value: 0}, {frame: wf(1, 'nine'), value: 900}, {frame: wf(1, 'twenty'), value: 920}]} fmt={(x) => String(Math.round(x))} size={56} tone={colors.cyan} step />
			<span style={{opacity: lead(f, wf(1, 'millimeters'), 8)}}> MM (36.22 IN)</span>
		</span>
	);
	return (
		<HeroShot f={f} start={0} end={sf(2) + 30} cam={cam} props={{spin, lamp, glint: f < wf(0, 'steel') - 10 ? -1 : glint, ghost}}>
			<Caliper cam={cam} k={cal} halfW={W920} tone={colors.cyan} label={cal > 0.2 ? v : null} />
			<Pop f={f} at={wf(0, 'one')} until={wf(1, 'widest')} style={{left: 96, top: 84}}>
				<Chip text="SOLE US GOES PRODUCER · DOE OCED FACT SHEET · AUG 2024" tone={colors.cyan} />
			</Pop>
			<Strip what="RECONSTRUCTION" source={f >= wf(1, 'coil') ? 'TRAN-COR H DATASHEET · OCT 2024 · TABLE 7: 920 MM, 508 MM BORE, 600 KG PER 100 MM' : 'A MASTER COIL OF GRAIN-ORIENTED ELECTRICAL STEEL'} />
		</HeroShot>
	);
};

// ── 2 · The report and its line (S2) ────────────────────────────────────────────────────────────────────────────────
const Report02: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="goes232" page={1} start={wf(2, 'twenty') - 8} end={wf(2, 'report') + 26} label="COVER" focus={{x: 150, y: 1700, w: 1570, h: 600}} pushTo={wf(2, 'report')} />
			<Doc doc="goes232" start={wf(2, 'report')} end={ef(2) + 12} hl={[{key: 'concern', at: wf(2, 'transformer')}, {key: 'width', at: wf(2, 'thirty-two')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(2, 'larger')} until={ef(2)} style={{left: 96, top: 960}}>
				<Chip text="SECTION VII · WHAT TRANSFORMER MAKERS TOLD COMMERCE" tone={colors.ink} />
			</Pop>
			<Pop f={f} at={wf(2, 'thirty-two')} until={ef(2)} style={{right: 120, top: 860}}>
				<span style={{...T(64, {color: colors.amber, fontWeight: 700}), background: 'rgba(10,13,18,0.9)', padding: '6px 18px', border: `2px solid ${colors.amber}`}}>&gt;932 MM</span>
			</Pop>
		</>
	);
};

// ── 3 · Back to the coil: >932 lands; the core it is for; 90 % (S3–S4) ─────────────────────────────────────────────
const Core03: React.FC = () => {
	const f = useCurrentFrame();
	const from = ef(2);
	const cam = camAt(f, [
		{f: from, cam: {pos: [-0.6, 3.3, 21], look: [0, 1.5, 0], fov: 35}},
		{f: wf(3, 'estimate'), cam: {pos: [3, 3.6, 23], look: [1.5, 1.3, 0], fov: 35}},
		{f: wf(3, 'ninety'), cam: {pos: [CORE_X + 6, 4, 26], look: [CORE_X - 1, 1, 0], fov: 36}},
		{f: wf(3, 'transformers'), cam: {pos: [CORE_X + 9, 4.5, 23], look: [CORE_X, 1, 0], fov: 36}},
		{f: wf(4, 'imported'), cam: {pos: [CORE_X + 10, 3.6, 20], look: [CORE_X, 0.6, 0], fov: 36}},
		{f: ef(4) + 40, cam: {pos: [CORE_X + 10.4, 3.5, 19.4], look: [CORE_X, 0.6, 0], fov: 36}},
	]);
	const amber = lead(f, from + 14, 16);
	const lines = 1 - lead(f, wf(3, 'ninety') - 20, 16);
	const edge = P([W920, COIL.ro, 0], cam);
	const loupe = Math.min(lead(f, from + 24, 14), lines);
	const build = interpolate(f, [wf(3, 'electricity') - 20, wf(3, 'large')], [0, 1], {...clamp, easing: ease.arrive});
	const flux = f < wf(3, 'electricity') ? 0 : Math.sin(((f - wf(3, 'electricity')) / 60) * Math.PI * 2 * 0.5) * lead(f, wf(3, 'passes'), 20);
	const imported = interpolate(f, [wf(4, 'imported') - 12, wf(4, 'imported') + 10], [0, 0.8], {...clamp, easing: ease.arrive});
	return (
		<HeroShot f={f} start={from - 10} end={clipOf('clip01').gapStartFrame + 20} cam={cam} props={{spin: f * 0.0035, core: lead(f, wf(3, 'estimate'), 20), build, flux, imported, peel: 0.15 * lead(f, wf(4, 'core'), 14)}}>
			<Caliper cam={cam} k={1} halfW={W920} tone={colors.cyan} o={lines} label={<span>920 MM</span>} />
			<Caliper cam={cam} k={amber} halfW={W932} y={COIL.ro + 2.2} tone={colors.amber} o={lines} label={<span>&gt;932 MM · LARGER CORES</span>} />
			<Loupe x={edge.x + 40} y={edge.y + 160} k={loupe} />
			<Pop f={f} at={wf(3, 'ninety')} until={ef(4) + 30} style={{left: 120, top: 150}}>
				<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '18px 26px'}}>
					<Num f={f} keys={[{frame: wf(3, 'ninety') - 12, value: 0}, {frame: wf(3, 'percent'), value: 90}]} fmt={(x) => `${Math.round(x)}%`} size={120} tone={colors.cyan} step />
					<div style={T(28, {color: colors.ink, marginTop: 4})}>OF US ELECTRICITY PASSES THROUGH AN LPT</div>
					<div style={T(26, {color: colors.sub, marginTop: 4})}>DOE ESTIMATE · EXEC-2022-001242 · P. 8</div>
				</div>
			</Pop>
			<Pop f={f} at={wf(4, 'imported')} until={ef(4) + 30} style={{left: 120, top: 520}}>
				<Chip text="GOES: PRIMARILY IMPORTED FROM JAPAN AND SOUTH KOREA · DOE 2024, P. 22" tone={colors.amber} size={28} />
			</Pop>
			<Strip what="RECONSTRUCTION" source={f < wf(3, 'ninety') - 20 ? 'TRAN-COR H 920 MM · 232 REPORT P. 104: >932 MM' : 'A STACKED THREE-LEG CORE · LAMINATIONS OF GRAIN-ORIENTED STEEL'} />
		</HeroShot>
	);
};

// ── 4 · The official, in his own voice (clip01) ─────────────────────────────────────────────────────────────────────
const Clip01: React.FC = () => <HearingClip f={useCurrentFrame()} id="clip01" />;

// ── 5 · The finding (S5) ───────────────────────────────────────────────────────────────────────────────────────────
const Finding05: React.FC = () => (
	<Doc doc="goes232" start={sf(5) - 16} end={ef(5) + 30} hl={[{key: 'dependence', at: wf(5, 'dependence')}, {key: 'finds', at: 0, ats: [wf(5, 'imported') - 15, wf(5, 'cores') - 12, wf(5, 'threatened') - 15, wf(5, 'security') - 12]}]} label="THE FINDING" />
);

// ── 6 · The announcement, face down (S6) ──────────────────────────────────────────────────────────────────────────
const FaceDown06: React.FC = () => {
	const f = useCurrentFrame();
	const o = Math.min(lead(f, sf(6) - 10, 14), 1 - lead(f, ef(6) + 30, 14));
	if (o <= 0) return null;
	const land = tween(f, sf(6) - 10, sf(6) + 20, 1, 0, ease.arrive);
	const lift = interpolate(f, [wf(6, 'announcement') - 6, wf(6, 'announcement') + 14, wf(6, 'cores'), wf(6, 'cores') + 12], [0, 1, 1, 0], clamp);
	const drift = tween(f, sf(6), ef(6) + 40, 0, 1, ease.camera);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1000, perspectiveOrigin: '50% 30%'}}>
			<div style={{position: 'absolute', left: 560, top: 150 - land * 200 + drift * 20, width: 800, height: 1035, transform: `rotateX(${32 - drift * 4}deg) rotateZ(${-4 + drift * 2}deg) scale(${0.92 + drift * 0.04})`, transformOrigin: '50% 30%', boxShadow: '0 40px 90px rgba(0,0,0,0.6)'}}>
				{/* the back of the sheet: the page's own text shows through, mirrored and faint */}
				<div style={{position: 'absolute', inset: 0, background: colors.paper, overflow: 'hidden'}}>
					<Img src={media('pages/ustr_mexico_p001.jpg')} style={{width: 800, height: 1035, transform: 'scaleX(-1)', opacity: 0.1}} />
				</div>
				{/* the corner that lifts on "announcement" */}
				<div style={{position: 'absolute', right: 0, bottom: 0, width: 180, height: 180, background: `linear-gradient(135deg, ${colors.paper} 50%, #d1d5db 50%)`, transform: `rotate3d(1,-1,0,${(lift * 38).toFixed(1)}deg)`, transformOrigin: '0% 0%', boxShadow: lift > 0.05 ? '-10px -10px 30px rgba(0,0,0,0.25)' : undefined}} />
				<div style={{position: 'absolute', left: 30, top: 30, ...T(30, {color: colors.paper_ink, fontWeight: 700})}}>05 NOV 2020</div>
			</div>
			<Pop f={f} at={wf(6, 'Trade')} until={ef(6) + 30} style={{left: 120, top: 200}}>
				<Chip text="USTR · THE PRESIDENT'S TRADE NEGOTIATOR" tone={colors.ink} />
			</Pop>
			<Pop f={f} at={wf(6, 'Three')} until={ef(6) + 30} style={{right: 140, top: 200}}>
				<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px', textAlign: 'right'}}>
					<Num f={f} keys={[{frame: wf(6, 'Three') - 4, value: 0}, {frame: wf(6, 'weeks') + 4, value: 21}]} fmt={(x) => `${Math.round(x)} DAYS`} size={88} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>15 OCT → 05 NOV 2020</div>
				</div>
			</Pop>
		</div>
	);
};

// ── 7 · Almost five years: the calendar riffles once (S7) ───────────────────────────────────────────────────────────
const Riffle07: React.FC = () => {
	const f = useCurrentFrame();
	const a = sf(7) - 10;
	const b = wf(7, 'years');
	const o = Math.min(lead(f, a, 12), 1 - lead(f, ef(7) + 26, 12));
	if (o <= 0) return null;
	// one month a step, OCT 2020 → AUG 2025 (58 months), the last page landing on "years"
	const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	const k = interpolate(f, [a + 6, b], [0, 58], {...clamp, easing: ease.camera});
	const m = 9 + Math.floor(k);
	const label = `${months[m % 12]} ${2020 + Math.floor(m / 12)}`;
	const flip = k - Math.floor(k);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1000, perspectiveOrigin: '50% 30%'}}>
			<div style={{position: 'absolute', left: 610, top: 180, width: 700, height: 560, background: colors.paper, transform: 'rotateX(16deg) rotateZ(-1.5deg)', boxShadow: '0 40px 90px rgba(0,0,0,0.6)'}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 150, background: f >= b ? colors.amber : colors.sub}} />
				<div style={{position: 'absolute', left: 0, right: 0, top: 200, textAlign: 'center', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 96, color: colors.paper_ink}}>{label}</div>
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 560, background: colors.paper, transform: `rotateX(${(flip * 120).toFixed(1)}deg)`, transformOrigin: '50% 0%', opacity: f < b ? 0.85 * (1 - flip) : 0}} />
			</div>
			<Pop f={f} at={wf(7, 'years')} until={ef(7) + 26} style={{left: 0, right: 0, top: 800, textAlign: 'center'}}>
				<span style={T(64, {color: colors.amber, fontWeight: 700})}>4 YRS 10 MOS</span>
			</Pop>
			<Strip what="15 OCT 2020 → 18 AUG 2025" source="232 REPORT DATE · 90 FR 40326 EFFECTIVE DATE" />
		</div>
	);
};

// ── 8 · The method: the records land, one per noun (S8) ─────────────────────────────────────────────────────────────
const RECS = [
	{img: 'goes232_p001', tag: 'COMMERCE · 232 REPORT · 2020', w: 'report'},
	{img: 'doe2024_p001', tag: 'DOE · LPT RESILIENCE · 2024', w: 'Energy'},
	{img: 'doe2014_p001', tag: 'DOE · LPT STUDY · 2014', w: 'studies'},
	{img: 'trancorh_p001', tag: 'CLIFFS · TRAN-COR H · 2024', w: 'datasheets'},
] as const;
const Method08: React.FC = () => {
	const f = useCurrentFrame();
	const o = Math.min(lead(f, sf(8) - 12, 12), 1 - lead(f, sf(9) - 10, 14));
	if (o <= 0) return null;
	const at = [wf(8, 'report'), wf(8, 'Energy'), wf(8, 'studies'), wf(8, 'datasheets')];
	const drift = tween(f, sf(8), sf(9), 0, 1, ease.camera);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, perspective: 1100, perspectiveOrigin: '50% 20%'}}>
			<div style={{position: 'absolute', inset: 0, transform: `rotateX(28deg) translateY(${(-30 * drift).toFixed(1)}px) scale(${(1 + 0.05 * drift).toFixed(3)})`, transformOrigin: '50% 60%'}}>
				{RECS.map((r, i) => {
					const k = interpolate(f, [at[i] - 16, at[i] + 4], [0, 1], {...clamp, easing: ease.arrive});
					if (k <= 0) return null;
					const x = 150 + i * 420;
					return (
						<div key={r.img} style={{position: 'absolute', left: x, top: 120 - (1 - k) * 260, width: 380, height: 492, opacity: Math.min(1, k * 1.5), transform: `rotateZ(${(-6 + i * 4).toFixed(1)}deg)`, boxShadow: '0 30px 70px rgba(0,0,0,0.6)', background: colors.paper}}>
							<Img src={media(`pages/${r.img}.jpg`)} style={{width: 380, height: 492}} />
							<div style={{position: 'absolute', left: 0, right: 0, bottom: -64, ...T(26, {color: colors.ink, textAlign: 'center'})}}>{r.tag}</div>
						</div>
					);
				})}
			</div>
			<Strip what="THE RECORDS" source="EVERY FINDING IN THIS FILM IS ATTRIBUTED TO ITS RECORD" />
		</div>
	);
};

// ── 9 · The wait, small units (S9–S13): the testimony, then the two waits as bars ──────────────────────────────────
const Wait09: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Doc doc="testimony" page={1} start={sf(9) - 14} end={wf(11, 'two') + 10} hl={[{key: 'c34', at: wf(11, 'Orders')}]} label="EXHIBIT" title={f >= wf(10, 'September') ? 'GENE RODRIGUES' : undefined} />
			<Pop f={f} at={wf(10, 'September')} until={wf(11, 'two')} style={{right: 110, top: 880}}>
				<Chip text="13 SEP 2023" tone={colors.amber} size={36} />
			</Pop>
			<Pop f={f} at={wf(11, 'poles')} until={wf(11, 'two')} style={{right: 110, top: 960}}>
				<Chip text="DISTRIBUTION TRANSFORMERS: POLE AND PAD" tone={colors.ink} />
			</Pop>
			<BarChart
				f={f}
				start={wf(11, 'two') - 12}
				end={sf(13) + 6}
				title="DISTRIBUTION TRANSFORMER LEAD TIME, MONTHS"
				source="DOE WRITTEN TESTIMONY · HOUSE ENERGY & COMMERCE · 13 SEP 2023"
				max={26}
				bars={[
					{label: '2019', value: 4, at: wf(12, 'months'), tone: colors.cyan, fmt: (v) => (v < 3.9 ? `${Math.round(v)}` : '2–4')},
					{label: '2023', value: 24, at: wf(11, 'years'), tone: colors.amber, fmt: (v) => `UP TO ${Math.round(v)}`},
				]}
			>
				<Pop f={f} at={wf(12, 'nineteen')} style={{left: 1180, top: 160}}>
					<span style={T(30, {color: colors.ink})}>2019 → 2023</span>
				</Pop>
			</BarChart>
			<Doc doc="testimony" start={sf(13) - 8} end={ef(13) + 30} hl={[{key: 'c59', at: wf(13, 'three')}]} label="EXHIBIT" />
			<Pop f={f} at={wf(13, 'labor')} until={ef(13) + 20} style={{left: 150, top: 820}}><Chip text="1" tone={colors.amber} size={44} /></Pop>
			<Pop f={f} at={wf(13, 'demand')} until={ef(13) + 20} style={{left: 230, top: 820}}><Chip text="2" tone={colors.amber} size={44} /></Pop>
			<Pop f={f} at={wf(13, 'materials')} until={ef(13) + 20} style={{left: 310, top: 820}}><Chip text="3" tone={colors.amber} size={44} /></Pop>
		</>
	);
};

// ── 10 · The large ones (S14–S17) ─────────────────────────────────────────────────────────────────────────────────
const Large10: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<BarChart
				f={f}
				start={sf(14) - 10}
				end={sf(17) + 10}
				title="LARGE POWER TRANSFORMERS FOR US USE, 2019"
				source="COMMERCE ESTIMATE, CITED IN DOE · LPT RESILIENCE · JUL 2024 · P. 20"
				max={700}
				bars={[
					{label: 'IMPORTED', value: 617, at: wf(15, 'seventeen'), tone: colors.amber},
					{label: 'BUILT IN THE US', value: 137, at: wf(16, 'thirty-seven'), tone: colors.cyan},
				]}
			>
				<Pop f={f} at={wf(15, 'nineteen')} style={{left: 1300, top: 150}}>
					<Chip text="2019" tone={colors.amber} size={36} />
				</Pop>
				<Pop f={f} at={wf(16, 'here')} style={{left: 1220, top: 230}}>
					<span style={T(30, {color: colors.ink})}>US SHARE 18%</span>
				</Pop>
			</BarChart>
			<Photo f={f} start={sf(17) - 6} end={ef(17) + 30} src="photos/us_virginia_manassas_substation_ccbysa4.jpg" what="A UTILITY SUBSTATION · MANASSAS PARK, VIRGINIA, 2016" source="PHOTO: FAMARTIN · CC BY-SA 4.0" focus={[0.45, 0.55]} dir={-1}>
				<Pop f={f} at={wf(17, 'four')} style={{left: 120, top: 110}}>
					<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>
						<Num f={f} keys={[{frame: wf(17, 'four') - 10, value: 0}, {frame: wf(17, 'nine'), value: 4900}, {frame: wf(17, 'seven'), value: 6799}]} fmt={(v) => (v < 4900 ? comma0(v) : `4,900–${comma0(v)}`)} size={80} tone={colors.cyan} step />
						<div style={T(26, {color: colors.ink, marginTop: 6})}>LPTS IN SERVICE · DOE ESTIMATE 2022 · DOE 2024, P. 10</div>
					</div>
				</Pop>
				<Pop f={f} at={wf(17, 'sixty')} style={{left: 120, top: 330}}>
					<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>
						<Num f={f} keys={[{frame: wf(17, 'sixty') - 12, value: 0}, {frame: wf(17, 'months'), value: 60}]} fmt={(v) => `UP TO ${Math.round(v)} MONTHS`} size={80} tone={colors.amber} step />
						<div style={T(26, {color: colors.ink, marginTop: 6})}>WAIT FOR A NEW LPT · DOE 2024, P. 8</div>
					</div>
				</Pop>
			</Photo>
		</>
	);
};
const comma0 = (v: number): string => Math.round(v).toLocaleString('en-US');

// ── 11 · The physical wall (S18–S20) ──────────────────────────────────────────────────────────────────────────────
const Rail11: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
		<Photo f={f} start={sf(18) - 10} end={wf(20, 'rail') + 4} src="photos/schnabel_rail_16x9_ccbysa4.jpg" what="A TRANSFORMER ON A SCHNABEL CAR · KRAUTHAUSEN, GERMANY, 10 OCT 2017" source="PHOTO: KLAUSMINIWOLF · CC BY-SA 4.0" focus={[0.55, 0.5]}>
			<Pop f={f} at={wf(19, 'weighs')} style={{left: 120, top: 110}}>
				<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>
					<Num f={f} keys={[{frame: wf(19, 'one') - 8, value: 0}, {frame: wf(19, 'fifty'), value: 150}, {frame: wf(19, 'four'), value: 400}]} fmt={(v) => (v <= 150 ? `${Math.round(v)} TONS` : `150–${Math.round(v)} TONS`)} size={80} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>TYPICAL LPT WEIGHT · DOE 2024, P. 8</div>
				</div>
			</Pop>
		</Photo>
		<Photo f={f} start={wf(20, 'rail') - 10} end={ef(20) + 30} src="photos/us_norfolk_southern_schnabel_pa_ccby2.jpg" what="AN EMPTY SCHNABEL CAR · ROCKVILLE BRIDGE, PENNSYLVANIA, 24 MAY 2014" source="PHOTO: DAVID WILSON · CC BY 2.0" focus={[0.6, 0.4]} dir={-1}>
			<Pop f={f} at={wf(20, 'specialized')} until={wf(20, 'nine') - 6} style={{right: 120, top: 110, width: 760, background: colors.paper, padding: 10, border: `1px solid ${colors.border}`}}>
				<Img src={media('photos/us_schnabel_patent_US4041879_pd.jpg')} style={{width: 740}} />
				<div style={T(26, {color: colors.paper_ink, marginTop: 4})}>US PATENT 4,041,879 · 1977 · PUBLIC DOMAIN</div>
			</Pop>
			<Pop f={f} at={wf(20, 'nine')} style={{left: 120, top: 110}}>
				<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>
					<Num f={f} keys={[{frame: wf(20, 'nine') - 10, value: 0}, {frame: wf(20, 'months'), value: 9}]} fmt={(v) => `${Math.round(v)} MONTHS`} size={80} tone={colors.amber} step />
					<div style={T(26, {color: colors.ink, marginTop: 6})}>ROUTE CLEARANCE, UP TO · DOE 2024, P. 25</div>
				</div>
			</Pop>
		</Photo>
		</>
	);
};

// ── 12 · The act question (S21–S22): back to the coil, into the steel ─────────────────────────────────────────────
const Question12: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(21) - 20, cam: {pos: [9, 4, 20], look: [0, 0.6, 0], fov: 36}},
		{f: wf(21, 'margin'), cam: {pos: [5, 3, 18], look: [0, 0.8, 0], fov: 34}},
		{f: wf(22, 'steel'), cam: {pos: [9.5, 1.5, 5.5], look: [W920, 0.5, 0], fov: 30}},
		{f: sf(23) - 10, cam: {pos: [7.2, 1.0, 3.4], look: [W920, 0.2, 0], fov: 26}},
	]);
	const k = lead(f, wf(21, 'margin'), 14);
	const o = 1 - lead(f, wf(22, 'steel'), 20);
	return (
		<HeroShot f={f} start={sf(21) - 20} end={sf(23) + 10} cam={cam} props={{spin: f * 0.0035}}>
			<Caliper cam={cam} k={lead(f, wf(21, 'where'), 12)} halfW={W920} tone={colors.cyan} o={o} label={<span>920 MM</span>} />
			<Caliper cam={cam} k={k} halfW={W932} y={COIL.ro + 2.2} tone={colors.amber} o={o} label={<span>&gt;932 MM</span>} />
			<Strip what="RECONSTRUCTION" source="TRAN-COR H DATASHEET TABLE 7 · 232 REPORT P. 104" o={o} />
		</HeroShot>
	);
};

export const act1: SceneDef[] = [
	{id: 'coil01', from: 0, to: sf(2) + 30, C: Coil01},
	{id: 'report02', from: wf(2, 'twenty') - 10, to: ef(2) + 12, C: Report02},
	{id: 'core03', from: ef(2) - 10, to: clipOf('clip01').gapStartFrame + 20, C: Core03},
	{id: 'clip01', from: clipOf('clip01').gapStartFrame, to: clipOf('clip01').gapEndFrame + 16, C: Clip01},
	{id: 'finding05', from: sf(5) - 16, to: ef(5) + 30, C: Finding05},
	{id: 'facedown06', from: sf(6) - 10, to: ef(6) + 44, C: FaceDown06},
	{id: 'riffle07', from: sf(7) - 10, to: ef(7) + 40, C: Riffle07},
	{id: 'method08', from: sf(8) - 12, to: sf(9) + 4, C: Method08},
	{id: 'wait09', from: sf(9) - 14, to: ef(13) + 30, C: Wait09},
	{id: 'large10', from: sf(14) - 10, to: ef(17) + 30, C: Large10},
	{id: 'rail11', from: sf(18) - 10, to: ef(20) + 30, C: Rail11},
	{id: 'question12', from: sf(21) - 20, to: sf(23) + 10, C: Question12},
];
