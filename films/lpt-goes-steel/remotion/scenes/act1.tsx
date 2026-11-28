import React from 'react';
import {Img, interpolate, useCurrentFrame} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {lead} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {camAt, COIL} from '../coil3d';
import {media} from '../kit';
import {BarChart, Chip, clamp, Doc, Excerpt, HearingClip, Num, Pop, Strip, T, clipOf} from '../parts';
import {ef, sf, wf} from '../timing';
import {Caliper, HeroShot} from './hero';
import {Backdrop, Footage, TitleCard} from '../footage';
import {SceneDef} from './types';

// ACT I · THE WAIT (S0–S22, clip01). Opening per script/opening.md: the coil (frame 0 in motion), the 232 page, the
// core the steel goes into, the official on hearing video, the finding, the face-down announcement, the five years,
// the method; then the wait, the counts, the wall, the question. Every cue is a literal wf(sentence, 'word').

const W920 = COIL.w / 2; // 460 mm either side of the centre
const W932 = 9.32 / 2;

// ── 1 · The cold open (S0–S2), r03 (owner, 28 NOV 2026): real footage from frame 0. A US 500 kV transformer moving
//    on rails (BPA) under the first two sentences, 920 MM landing on its words; a hard cut on "a Commerce Department
//    report" to molten steel under the film's title; then the report's own lines, cropped, on "larger cores". ──────
const CUT = wf(2, 'a'); // the hard cut: transformer → steel
const Open01: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Footage f={f} start={0} end={CUT} clip="bpa" from={0} hard>
				<Pop f={f} at={wf(0, 'one')} until={CUT} style={{left: 96, top: 84}}>
					<Chip text="SOLE US GOES PRODUCER · DOE OCED FACT SHEET · AUG 2024" tone={colors.cyan} />
				</Pop>
				<Pop f={f} at={wf(0, 'steel')} until={wf(1, 'widest')} style={{left: 96, top: 164}}>
					<Chip text="GRAIN-ORIENTED ELECTRICAL STEEL (GOES)" tone={colors.ink} size={30} />
				</Pop>
				<Pop f={f} at={wf(0, 'transformer')} until={wf(1, 'widest')} style={{left: 96, top: 236}}>
					<Chip text="→ TRANSFORMER CORES" tone={colors.cyan} size={30} />
				</Pop>
				<Pop f={f} at={wf(0, 'America')} until={CUT} style={{right: 96, top: 84}}>
					<Chip text="USA" tone={colors.ink} size={30} />
				</Pop>
				<Pop f={f} at={wf(1, 'widest')} until={CUT} style={{left: 96, top: 640}}>
					<div style={{background: 'rgba(10,13,18,0.82)', border: `1px solid ${colors.cyan}`, padding: '16px 26px'}}>
						<div style={T(28, {color: colors.ink})}>WIDEST US GOES MASTER COIL</div>
						<Num f={f} keys={[{frame: wf(1, 'nine') - 6, value: 0}, {frame: wf(1, 'nine'), value: 900}, {frame: wf(1, 'twenty'), value: 920}]} fmt={(x) => `${Math.round(x)} MM`} size={96} tone={colors.cyan} step />
						<span style={{...T(34, {color: colors.ink}), marginLeft: 16, opacity: lead(f, wf(1, 'millimeters'), 8)}}>(36.22 IN)</span>
						<div style={T(26, {color: colors.ink, marginTop: 4})}>TRAN-COR H DATASHEET · OCT 2024 · TABLE 7</div>
					</div>
				</Pop>
			</Footage>
			<Footage f={f} start={CUT} end={wf(2, 'larger') - 6} clip="furnace" from={1.2} hard push={[1.04, 1.1]} focus={[0.42, 0.62]}>
				<TitleCard f={f} at={CUT + 4} until={wf(2, 'larger') - 6} title={['AMERICA HAS ONE', 'TRANSFORMER STEEL MILL']} kicker={<span>ITS COILS STOP AT 920 MM</span>} />
				<Pop f={f} at={wf(2, 'report')} until={wf(2, 'larger') - 6} style={{left: 96, top: 84}}>
					<Chip text="US COMMERCE · SECTION 232 REPORT · 15 OCT 2020" tone={colors.amber} />
				</Pop>
				<Pop f={f} at={wf(2, 'recorded')} until={wf(2, 'larger') - 6} style={{left: 96, top: 156}}>
					<Chip text="SECTION VII · RECORDED, NOT FOUND" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} at={wf(2, 'makers')} until={wf(2, 'larger') - 6} style={{left: 96, top: 222}}>
					<Chip text="SOURCE: TRANSFORMER MAKERS" tone={colors.ink} size={28} />
				</Pop>
			</Footage>
			<Excerpt f={f} doc="goes232" start={wf(2, 'larger') - 8} end={ef(2) + 12} bg="furnace" bgFrom={6} hl={[{key: 'concern', at: wf(2, 'larger') + 6}, {key: 'width', at: wf(2, 'thirty-two')}]} title="SECTION VII" y={200} />
			<Pop f={f} at={wf(2, 'thirty-two')} until={ef(2)} style={{right: 120, top: 800}}>
				<span style={{...T(64, {color: colors.amber, fontWeight: 700}), background: 'rgba(10,13,18,0.9)', padding: '6px 18px', border: `2px solid ${colors.amber}`}}>&gt;932 MM</span>
			</Pop>
		</>
	);
};

// ── 3 · The stakes on real footage (S3–S4): a large power transformer set on its pad (USACE, Fort Randall Dam) ─────
const Core03: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Footage f={f} start={ef(2) - 10} end={clipOf('clip01').gapStartFrame + 20} clip="fortRandall" from={0} focus={[0.55, 0.45]}>
			<Pop f={f} at={wf(3, 'ninety')} until={ef(4) + 30} style={{left: 120, top: 120}}>
				<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '18px 26px'}}>
					<Num f={f} keys={[{frame: wf(3, 'ninety') - 12, value: 0}, {frame: wf(3, 'percent'), value: 90}]} fmt={(x) => `${Math.round(x)}%`} size={120} tone={colors.cyan} step />
					<div style={T(28, {color: colors.ink, marginTop: 4})}>
						<span style={{opacity: 0.35 + 0.65 * lead(f, wf(3, 'electricity'), 8)}}>OF US ELECTRICITY </span>
						<span style={{opacity: 0.35 + 0.65 * lead(f, wf(3, 'passes'), 8)}}>PASSES THROUGH AN LPT</span>
					</div>
					<div style={T(26, {color: colors.ink, marginTop: 4})}>DOE ESTIMATE · EXEC-2022-001242 · P. 8</div>
				</div>
			</Pop>
			<Pop f={f} at={wf(3, 'Energy')} until={wf(3, 'ninety')} style={{left: 120, top: 120}}>
				<Chip text="US DEPARTMENT OF ENERGY" tone={colors.ink} size={30} />
			</Pop>
			<Pop f={f} at={wf(3, 'estimate')} until={wf(3, 'ninety')} style={{left: 120, top: 186}}>
				<Chip text="ITS ESTIMATE" tone={colors.amber} size={30} />
			</Pop>
			<Pop f={f} at={wf(3, 'transformers')} until={ef(4) + 30} style={{right: 120, top: 120}}>
				<Chip text="A LARGE POWER TRANSFORMER (LPT)" tone={colors.ink} size={30} />
			</Pop>
			<Pop f={f} at={wf(4, 'imported')} until={ef(4) + 30} style={{left: 120, top: 470}}>
				<Chip text="GOES: PRIMARILY IMPORTED FROM JAPAN AND SOUTH KOREA · DOE 2024, P. 22" tone={colors.amber} size={28} />
			</Pop>
		</Footage>
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
			{/* r03: "the large ones" on a real one (no empty mount before the first number), then the chart enters on
			    "Commerce" over moving line work, its axis and grid already drawn, the 617 bar rising on "six hundred" */}
			<Footage f={f} start={sf(14) - 10} end={wf(15, 'Commerce') + 4} clip="fortRandall" from={13.2} focus={[0.5, 0.4]}>
				<Pop f={f} at={wf(15, 'nineteen')} style={{left: 120, top: 120}}>
					<Chip text="2019" tone={colors.amber} size={36} />
				</Pop>
			</Footage>
			<Backdrop f={f} start={wf(15, 'Commerce') - 12} end={sf(17) + 10} clip="lines" opacity={0.14} blur={4} />
			<BarChart
				f={f}
				start={wf(15, 'Commerce') - 12}
				end={sf(17) + 10}
				grid
				title="LARGE POWER TRANSFORMERS FOR US USE, 2019"
				source="COMMERCE ESTIMATE, CITED IN DOE · LPT RESILIENCE · JUL 2024 · P. 20"
				max={700}
				bars={[
					{label: 'IMPORTED', value: 617, at: wf(15, 'seventeen'), from: wf(15, 'six') - 4, tone: colors.amber},
					{label: 'BUILT IN THE US', value: 137, at: wf(16, 'thirty-seven'), from: wf(16, 'One') - 4, tone: colors.cyan},
				]}
			>
				<Chip text="2019" tone={colors.amber} size={36} style={{position: 'absolute', left: 1300, top: 150}} />
				<Pop f={f} at={wf(16, 'here')} style={{left: 1220, top: 230}}>
					<span style={T(30, {color: colors.ink})}>US SHARE 18%</span>
				</Pop>
			</BarChart>
			<Footage f={f} start={sf(17) - 6} end={ef(17) + 30} clip="substation" from={0} focus={[0.5, 0.6]}>
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
			</Footage>
		</>
	);
};
const comma0 = (v: number): string => Math.round(v).toLocaleString('en-US');

// ── 11 · The physical wall (S18–S20) ──────────────────────────────────────────────────────────────────────────────
const Rail11: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Footage f={f} start={sf(18) - 10} end={wf(20, 'rail') + 2} clip="bpa" from={RAIL.bpa} focus={[0.5, 0.5]}>
				<Pop f={f} at={wf(19, 'weighs')} style={{left: 120, top: 110}}>
					<div style={{background: 'rgba(10,13,18,0.86)', border: `1px solid ${colors.border}`, padding: '16px 24px'}}>
						<Num f={f} keys={[{frame: wf(19, 'one') - 8, value: 0}, {frame: wf(19, 'fifty'), value: 150}, {frame: wf(19, 'four'), value: 400}]} fmt={(v) => (v <= 150 ? `${Math.round(v)} TONS` : `150–${Math.round(v)} TONS`)} size={80} tone={colors.amber} step />
						<div style={T(26, {color: colors.ink, marginTop: 6})}>TYPICAL LPT WEIGHT · DOE 2024, P. 8</div>
					</div>
				</Pop>
			</Footage>
			<Footage f={f} start={wf(20, 'rail') - 2} end={ef(20) + 30} clip="schnabelNs" from={RAIL.ns} hard focus={[0.6, 0.5]}>
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
			</Footage>
		</>
	);
};
/** Where each Schnabel clip's best pass starts (seconds into the trimmed clip), set after looking at every frame. */
export const RAIL = {bpa: 29, ns: 11, tx: 0};

// ── 12 · The act question (S21–S22): back to the coil, into the steel ─────────────────────────────────────────────
const Question12: React.FC = () => {
	const f = useCurrentFrame();
	const cam = camAt(f, [
		{f: sf(21) - 20, cam: {pos: [9, 6.2, 23], look: [0, 2.6, 0], fov: 36}},
		{f: wf(21, 'margin'), cam: {pos: [5, 5.2, 21], look: [0, 2.8, 0], fov: 34}},
		{f: wf(22, 'steel'), cam: {pos: [9.5, 3.7, 8.5], look: [W920, 2.5, 0], fov: 30}},
		{f: sf(23) - 10, cam: {pos: [7.2, 3.2, 6.4], look: [W920, 2.2, 0], fov: 26}},
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
	{id: 'open01', from: 0, to: ef(2) + 12, C: Open01},
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
