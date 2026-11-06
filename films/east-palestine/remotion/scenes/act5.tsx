import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {channel, colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {SfxCue} from '../../../../lib/remotion/sfx';
import {RecordDoc, RecordPage} from '../docs';
import {useFilmFrame} from '../kit';
import {Card, lit, mono, offW, onW, Pop, ROUTE, RouteLine, sAtMP, sans} from '../parts';
import {ef, FILM_FRAMES, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT V · THE VERDICT (sentences 176–197) and the outro. Choreography index: scenes/choreography/act5.md.

const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});

// ── 1 · The final report and its probable cause (s176–s177) ───────────────────────────────────────────────────

const Report: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RecordPage set="rir" page={1} start={sf(176) - 20} end={sf(177) + 14} label="NTSB RIR-24-05" title="ADOPTED 25 JUN 2024" hl={[]} focus={{x: 150, y: 200, w: 1570, h: 1500}} pushTo={wf(176, 'report')} />
			<Pop f={f} fps={fps} on={wf(176, 'june')} off={sf(177) - 6} style={{position: 'absolute', right: 120, top: 860}}>
				<div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
					<DatePill f={f} fps={fps} day={25} month={6} year={2024} dayWord={wf(176, 'june')} yearWord={wf(176, 'twenty-four')} fromYear={2024} size={44} />
					<span style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px', opacity: onW(f, wf(176, 'n'), 6)})}>
						NTSB <span style={{opacity: onW(f, wf(176, 'adopted'), 6)}}>ADOPTS</span> <span style={{opacity: onW(f, wf(176, 'final'), 6)}}>ITS FINAL REPORT</span>
					</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(177) - 10} end={sf(178) + 14} label="NTSB PROBABLE CAUSE" hl={[{key: 'C42', at: wf(177, 'failure'), ats: [wf(177, 'failure'), wf(177, 'twenty-third'), wf(177, 'separate')]}]} pushTo={wf(177, 'probable')} />
			<Pop f={f} fps={fps} on={wf(177, 'cause')} off={sf(178) - 6} style={{position: 'absolute', right: 120, top: 810}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>THE PROBABLE CAUSE</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(177, 'bearing')} off={sf(178) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.red, padding: '4px 14px'})}>
					THE L1 BEARING <span style={{opacity: onW(f, wf(177, 'car'), 6)}}>· CAR 23</span> <span style={{opacity: onW(f, wf(177, 'overheated'), 6)}}>· OVERHEATED</span> <span style={{opacity: onW(f, wf(177, 'caused'), 6)}}>· CAUSED</span> <span style={{opacity: onW(f, wf(177, 'axle'), 6)}}>THE AXLE TO SEPARATE</span>
				</div>
			</Pop>
		</>
	);
};

// ── 2 · Who paid: NS's filed numbers, alone (s178–s179) ───────────────────────────────────────────────────────

const Paid: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const y23 = rollTo(f, [{frame: wf(178, 'one', 0) - 12, value: 0}, {frame: wf(178, 'billion') + LAND, value: 1.1}]);
	const y24 = Math.round(rollTo(f, [{frame: wf(178, 'three') - 10, value: 0}, {frame: wf(178, 'twenty-five') + LAND, value: 325}]));
	const y25 = Math.round(rollTo(f, [{frame: wf(179, 'two') - 10, value: 0}, {frame: wf(179, 'fifty-four') + LAND, value: 254}]));
	const row = (yr: string, yrAt: number, val: string, valAt: number, note: string, noteAt: number, tone: string) => (
		<div style={{display: 'flex', alignItems: 'baseline', gap: 30, marginTop: 28, opacity: onW(f, Math.min(yrAt, valAt) - 10, 10)}}>
			<span style={T(44, {fontWeight: 700, color: colors.ink, width: 140, opacity: onW(f, yrAt, 6)})}>{yr}</span>
			<span style={T(96, {fontWeight: 700, color: tone, width: 520})}>{val}</span>
			<span style={T(30, {color: colors.ink, opacity: onW(f, noteAt, 6)})}>{note}</span>
		</div>
	);
	return (
		<Card x={140} y={140} w={1640} h={800} accent={colors.amber}>
			<div style={{padding: '44px 60px'}}>
				<div style={T(36, {color: colors.ink})}>
					<span style={{...lit(f, wf(178, 'norfolk'), colors.ink)}}>NORFOLK SOUTHERN'S</span> <span style={{opacity: onW(f, wf(178, 'annual'), 6)}}>ANNUAL</span> <span style={{opacity: onW(f, wf(178, 'reports'), 6)}}>REPORTS (10-K)</span> <span style={{opacity: onW(f, wf(178, 'net'), 6), color: colors.amber}}>· NET COST</span> <span style={{opacity: onW(f, wf(178, 'derailment'), 6)}}>OF THE DERAILMENT</span>
				</div>
				{row('2023', wf(178, 'twenty-three'), `${f >= wf(178, 'about') ? '≈' : ''}$${y23.toFixed(1)}B`, wf(178, 'one', 0), 'AFTER INSURANCE · 10-K 2023', wf(178, 'insurance'), colors.amber)}
				{row('2024', wf(178, 'twenty-four'), `$${y24}M`, wf(178, 'three'), 'AFTER INSURANCE · 10-K 2025', wf(178, 'million'), colors.amber)}
				{row('2025', wf(179, 'twenty-five'), `−$${y25}M`, wf(179, 'two'), 'RECOVERIES EXCEEDED NEW COSTS · 10-K 2025', wf(179, 'recoveries'), colors.cyan)}
				<div style={T(26, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(179, 'insurance'), 6)})}>
					INSURANCE <span style={{opacity: onW(f, wf(179, 'other'), 6)}}>AND OTHER RECOVERIES</span> <span style={{opacity: onW(f, wf(179, 'larger'), 6)}}>WERE</span> <span style={{opacity: onW(f, wf(179, 'costs'), 6)}}>LARGER THAN NEW COSTS</span> <span style={{opacity: onW(f, wf(179, 'million'), 6)}}>· AS FILED WITH THE SEC</span>
				</div>
			</div>
			<div style={{position: 'absolute', right: 40, top: 40, transform: `scale(${bump(f, fps, wf(179, 'fifty-four') + LAND, 0.04).toFixed(4)})`}}>
				<span style={T(26, {color: colors.ink, border: `1px solid ${colors.border}`, padding: '2px 8px'})}>SEC EDGAR</span>
			</div>
		</Card>
	);
};

// ── 3 · The courts (s180–s184) ─────────────────────────────────────────────────────────────────────────────────

const Courts: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const dismissed = Math.min(onW(f, sf(181) - 6, 12), offW(f, sf(182) - 6, 12));
	return (
		<>
			<RecordPage set="classfund" start={sf(180) - 10} end={sf(181) + 14} label="N.D. OHIO · CLASS ACTION" hl={[{key: 'C99', at: wf(180, 'six'), ats: [wf(180, 'fund')]}]} pushTo={wf(180, 'settlement')} />
			<Pop f={f} fps={fps} on={wf(180, 'class')} off={sf(181) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					CLASS ACTION SETTLEMENT <span style={{opacity: onW(f, wf(180, 'million'), 6)}}>· $600M</span> <span style={{opacity: onW(f, wf(180, 'residents'), 6)}}>· RESIDENTS</span> <span style={{opacity: onW(f, wf(180, 'businesses'), 6)}}>AND BUSINESSES</span>
				</div>
			</Pop>
			{dismissed > 0 ? (
				<AbsoluteFill style={{opacity: dismissed, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(44, {color: colors.ink, opacity: onW(f, wf(181, 'appeals'), 6)})}>
						THE APPEALS <span style={{opacity: onW(f, wf(181, 'settlement'), 6)}}>AGAINST THE SETTLEMENT</span>
					</div>
					<div style={T(96, {fontWeight: 700, color: colors.ink, marginTop: 20, opacity: onW(f, wf(181, 'dismissed'), 6), transform: `scale(${bump(f, fps, wf(181, 'dismissed') + LAND).toFixed(4)})`})}>DISMISSED</div>
					<div style={T(30, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(181, 'dismissed'), 6)})}>SIXTH CIRCUIT · 05 NOV 2025 · SUPREME COURT DENIED REVIEW 02 MAR 2026 · DOC. 1053</div>
				</AbsoluteFill>
			) : null}
			<RecordDoc doc="ns_10q26_appeal" start={sf(182) - 10} end={sf(183) + 14} at={[wf(182, 'pending')]} label="NS 10-Q · 22 OCT 2026" source="NORFOLK SOUTHERN QUARTERLY REPORT · SEC EDGAR" pushTo={wf(182, 'appeal')} />
			<Pop f={f} fps={fps} on={wf(182, 'appeal')} off={sf(183) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					AN APPEAL <span style={{opacity: onW(f, wf(182, 'personal'), 6)}}>OVER PERSONAL-INJURY</span> <span style={{opacity: onW(f, wf(182, 'releases'), 6)}}>RELEASES</span> <span style={{opacity: onW(f, wf(182, 'still'), 6)}}>· STILL PENDING</span> <span style={{opacity: onW(f, wf(182, 'october'), 6)}}>· OCT</span> <span style={{opacity: onW(f, wf(182, 'twenty-six'), 6)}}>2026</span>
				</div>
			</Pop>
			<RecordDoc doc="ns_10q26_decree" start={sf(183) - 10} end={sf(184) + 14} at={[wf(183, 'approval')]} label="NS 10-Q · 22 OCT 2026" source="NORFOLK SOUTHERN QUARTERLY REPORT · SEC EDGAR" pushTo={wf(183, 'settlement')} />
			<Pop f={f} fps={fps} on={wf(183, 'separate')} off={sf(184) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					THE FEDERAL SETTLEMENT <span style={{opacity: onW(f, wf(183, 'government'), 6)}}>(CONSENT DECREE)</span> <span style={{opacity: onW(f, wf(183, 'awaited'), 6)}}>· AWAITING THE COURT</span> <span style={{opacity: onW(f, wf(183, 'date'), 6)}}>· AS OF 22 OCT 2026</span>
				</div>
			</Pop>
			<RecordPage set="decree" start={sf(184) - 10} end={ef(184) + 30} label="N.D. OHIO · 09 MAR 2026" hl={[{key: 'C98', at: wf(184, 'rubber'), ats: [wf(184, 'rubber')]}]} pushTo={wf(184, 'order')} />
			<Pop f={f} fps={fps} on={wf(184, 'march')} off={ef(184) + 24} style={{position: 'absolute', right: 120, top: 810}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px'})}>
					MAR <span style={{opacity: onW(f, wf(184, 'twenty-six'), 6)}}>2026</span> <span style={{opacity: onW(f, wf(184, 'letting'), 6)}}>· LETTING</span> <span style={{opacity: onW(f, wf(184, 'residents'), 6)}}>RESIDENTS JOIN</span> <span style={{opacity: onW(f, wf(184, 'case'), 6)}}>THE CASE</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(184, 'repeated')} off={ef(184) + 24} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					<span style={{opacity: onW(f, wf(184, "judge's"), 6)}}>THE JUDGE,</span> <span style={{opacity: onW(f, wf(184, 'words'), 6)}}>QUOTING</span> <span style={{opacity: onW(f, wf(184, 'earlier'), 6)}}>AN EARLIER</span> <span style={{opacity: onW(f, wf(184, 'hearing'), 6)}}>HEARING:</span> <span style={{opacity: onW(f, wf(184, 'this'), 6)}}>“THIS IS</span> <span style={{opacity: onW(f, wf(184, 'not'), 6)}}>NOT A RUBBER STAMP</span> <span style={{opacity: onW(f, wf(184, 'court'), 6)}}>COURT”</span>
				</div>
			</Pop>
		</>
	);
};

// ── 4 · Could it happen again? (s185–s190) ─────────────────────────────────────────────────────────────────

const Again: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const qO = offW(f, sf(186) - 6, 12);
	return (
		<>
			{qO > 0 ? (
				<AbsoluteFill style={{opacity: qO, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(96, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(185, 'could'), 6)})}>
						COULD IT <span style={{opacity: onW(f, wf(185, 'happen'), 6), color: colors.amber}}>HAPPEN AGAIN?</span>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="crs" start={sf(186) - 10} end={sf(187) + 14} label="CONGRESSIONAL RESEARCH SERVICE" hl={[{key: 'C84', at: wf(186, 'require'), ats: [wf(186, 'require'), wf(186, 'temperature')]}]} pushTo={wf(186, 'federal')} />
			<Pop f={f} fps={fps} on={wf(186, 'july')} off={sf(187) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					AS OF JUL <span style={{opacity: onW(f, wf(186, 'twenty-six'), 6)}}>2026</span> <span style={{opacity: onW(f, wf(186, 'detectors'), 6)}}>· NO FEDERAL DETECTOR RULE</span> <span style={{opacity: onW(f, wf(186, 'all'), 6)}}>AT ALL</span> <span style={{opacity: onW(f, wf(186, 'set'), 6)}}>· NO</span> <span style={{opacity: onW(f, wf(186, 'car'), 6)}}>CAR</span> <span style={{opacity: onW(f, wf(186, 'stopped'), 6)}}>STOP TEMPERATURE</span>
				</div>
			</Pop>
			<RecordPage set="recs" start={sf(187) - 10} end={sf(188) + 14} label="NTSB R-24-003 · TO THE FRA" hl={[{key: 'C87', at: wf(187, 'minimum'), ats: [wf(187, 'minimum'), wf(187, 'thresholds'), wf(187, 'distance')]}, {key: 'R24003_id', at: wf(187, 'recommended')}]} pushTo={wf(187, 'n')} />
			<Pop f={f} fps={fps} on={wf(187, 'f')} off={sf(188) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					FRA <span style={{opacity: onW(f, wf(187, 'federal'), 6)}}>· THE FEDERAL RAILROAD</span> <span style={{opacity: onW(f, wf(187, 'regulator'), 6)}}>REGULATOR</span> <span style={{opacity: onW(f, wf(187, 'requirements'), 6)}}>· MINIMUM REQUIREMENTS:</span> <span style={{opacity: onW(f, wf(187, 'including'), 6)}}>INCLUDING</span> <span style={{opacity: onW(f, wf(187, 'alarm'), 6)}}>ALARM THRESHOLDS,</span> <span style={{opacity: onW(f, wf(187, 'detectors'), 6)}}>SPACING · OPEN</span>
				</div>
			</Pop>
			<RecordDoc doc="ns_release_187" start={sf(188) - 10} end={sf(189) + 14} at={[wf(188, 'installing')]} label="NORFOLK SOUTHERN · 25 JUN 2024" source="NS STATEMENT · INVESTOR ROOM · THE COMPANY'S OWN FIGURES" pushTo={wf(188, 'said')} />
			<Pop f={f} fps={fps} on={wf(188, 'said')} off={sf(189) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					NS SAID <span style={{opacity: onW(f, wf(188, 'twenty-four'), 6)}}>(2024):</span> <span style={{opacity: onW(f, wf(188, 'eighty-seven'), 6)}}>+187</span> <span style={{opacity: onW(f, wf(188, 'detectors'), 6)}}>DETECTORS</span> <span style={{opacity: onW(f, wf(188, 'bring'), 6)}}>· AVERAGE</span> <span style={{opacity: onW(f, wf(188, 'average'), 6)}}>SPACING</span> <span style={{opacity: onW(f, wf(188, 'core'), 6)}}>ON ITS CORE</span> <span style={{opacity: onW(f, wf(188, 'network'), 6)}}>NETWORK:</span> <span style={{opacity: onW(f, wf(188, 'twelve'), 6)}}>≈12</span> <span style={{opacity: onW(f, wf(188, 'miles'), 6)}}>MI</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(189) - 10} end={sf(190) + 14} label="NTSB RIR-24-05" title="TANK CARS" hl={[{key: 'C40', at: wf(189, 'may'), ats: [wf(189, 'may')]}]} pushTo={wf(189, 'legal')} />
			<Pop f={f} fps={fps} on={wf(189, 'tank')} off={sf(190) - 6} style={{position: 'absolute', right: 120, top: 860}}>
				<div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
					<span style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
						DOT-111 <span style={{opacity: onW(f, wf(189, 'investigators'), 6)}}>(THE NTSB:</span> <span style={{opacity: onW(f, wf(189, 'likely'), 6)}}>LIKELY STARTED</span> <span style={{opacity: onW(f, wf(189, 'fire'), 6)}}>THE FIRE)</span> <span style={{opacity: onW(f, wf(189, 'legal'), 6)}}>LEGAL IN</span> <span style={{opacity: onW(f, wf(189, 'flammable'), 6)}}>FLAMMABLE SERVICE</span> <span style={{opacity: onW(f, wf(189, 'until'), 6)}}>UNTIL</span>
					</span>
					<DatePill f={f} fps={fps} day={1} month={5} year={2029} dayWord={wf(189, 'first')} monthWord={wf(189, 'may')} yearWord={wf(189, 'twenty-nine')} fromYear={2029} size={44} />
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(190) - 10} end={ef(190) + 30} label="NTSB FINDING 19" hl={[{key: 'C39', at: wf(190, 'feasible'), ats: [wf(190, 'unlikely'), wf(190, 'disincentives')]}]} pushTo={wf(190, 'found')} />
			<Pop f={f} fps={fps} on={wf(190, 'retiring')} off={ef(190) + 24} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					RETIRING THEM <span style={{opacity: onW(f, wf(190, 'sooner'), 6)}}>SOONER</span> <span style={{opacity: onW(f, wf(190, 'investigators'), 6)}}>(NTSB):</span> <span style={{opacity: onW(f, wf(190, 'feasible'), 6)}}>FEASIBLE,</span> <span style={{opacity: onW(f, wf(190, 'unlikely'), 6)}}>UNLIKELY</span> <span style={{opacity: onW(f, wf(190, 'because'), 6)}}>· BECAUSE OF</span> <span style={{opacity: onW(f, wf(190, 'economic'), 6)}}>ECONOMIC AND BUSINESS DISINCENTIVES</span>
				</div>
			</Pop>
		</>
	);
};

// ── 5 · Verdict 5: two last claims (s191–s193) ───────────────────────────────────────────────────────────────

const Verdict5: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const o = Math.min(onW(f, sf(191) - 6, 12), offW(f, sf(194) - 6, 14));
	if (o <= 0) return null;
	const stamp = (t: string, at: number) => {
		const k = lead(f, at, 8);
		return (
			<div style={T(52, {fontWeight: 700, color: colors.ink, border: `5px solid ${colors.ink}`, padding: '6px 22px', display: 'inline-block', marginTop: 18, opacity: Math.min(1, k * 1.5), transform: `rotate(-3deg) scale(${((1.4 - 0.4 * k) * bump(f, fps, at + LAND, 0.04)).toFixed(4)})`, transformOrigin: '0 50%'})}>{t}</div>
		);
	};
	return (
		<div style={{position: 'absolute', left: 210, top: 150, width: 1500, height: 780, opacity: o, background: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 40px 90px rgba(0,0,0,0.55)'}}>
			<div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: colors.amber}} />
			<div style={{position: 'absolute', left: 60, top: 40, ...T(30, {color: colors.amber, letterSpacing: 3})}}>
				VERDICT 5 OF 5 · <span style={{opacity: onW(f, wf(191, 'two'), 6)}}>TWO</span> <span style={{opacity: onW(f, wf(191, 'last'), 6)}}>LAST</span> <span style={{opacity: onW(f, wf(191, 'claims'), 6)}}>CLAIMS</span>
			</div>
			<div style={{position: 'absolute', left: 60, top: 110, width: 1380}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink, opacity: onW(f, wf(192, 'brake'), 8)}}>
					“THE BRAKE RULE <span style={{opacity: onW(f, wf(192, 'repealed'), 6)}}>REPEALED</span> <span style={{opacity: onW(f, wf(192, 'eighteen'), 6)}}>IN 2018”</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(192, 'applied'), 6)})}>
					IT APPLIED TO <span style={{opacity: onW(f, wf(192, 'different'), 6)}}>A DIFFERENT KIND</span> <span style={{opacity: onW(f, wf(192, 'train'), 6)}}>OF TRAIN</span> <span style={{opacity: onW(f, wf(192, 'this'), 6)}}>(HIGH-HAZARD FLAMMABLE UNIT TRAINS) · CRS R47911</span>
				</div>
				{stamp('DID NOT APPLY TO THIS TRAIN', wf(192, 'qualify'))}
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink, marginTop: 50, opacity: onW(f, wf(193, 'too'), 8)}}>
					“TOO <span style={{opacity: onW(f, wf(193, 'few'), 6)}}>FEW</span> <span style={{opacity: onW(f, wf(193, 'crew'), 6)}}>CREW”</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(193, 'people'), 6)})}>AN ENGINEER, A CONDUCTOR AND A CONDUCTOR TRAINEE · NTSB P. 4</div>
				{stamp('3 PEOPLE IN THE CAB', wf(193, 'three'))}
			</div>
		</div>
	);
};

// ── 6 · The sign-off on the dark route line (s194–s197) and the outro ───────────────────────────────────────

const SignOff: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const sSeb = ROUTE.nodeS[0];
	const sSal = ROUTE.nodeS[1];
	const sEP = ROUTE.nodeS[2];
	const k30 = lead(f, wf(196, 'from'), 60);
	const k19 = lead(f, wf(197, 'two'), 40);
	const stretch = f >= wf(197, 'the') - 4 ? {s0: sSal, s1: sSal + (sEP - sSal) * k19, tone: colors.amber, o: 1} : {s0: sSeb, s1: sSeb + (sAtMP(49.5) - sSeb) * k30, tone: colors.red, o: k30, dash: true};
	const out = offW(f, ef(197) + 120, 60);
	return (
		<AbsoluteFill style={{opacity: out}}>
			<RouteLine f={f} fps={fps} box={{x: 180, y: 380, w: 1560}} draw={1} nodeOn={[sf(194), sf(194), sf(194)]} nodeTone={[colors.sub, colors.sub, colors.sub]} stretch={stretch} labels={f >= wf(196, 'from')} />
			<div style={{position: 'absolute', left: 180, top: 150, width: 1560}}>
				<div style={T(36, {color: colors.ink, opacity: Math.min(onW(f, wf(194, 'july'), 6), offW(f, sf(196) - 6, 12))})}>
					AS OF JUL <span style={{opacity: onW(f, wf(194, 'twenty-six'), 6)}}>2026</span> <span style={{opacity: onW(f, wf(194, 'no'), 6)}}>· NO</span> <span style={{opacity: onW(f, wf(194, 'federal'), 6)}}>FEDERAL RULE</span> <span style={{opacity: onW(f, wf(194, 'temperature'), 6)}}>SETS THE TEMPERATURE</span> <span style={{opacity: onW(f, wf(194, 'train'), 6)}}>AT WHICH A TRAIN</span> <span style={{opacity: onW(f, wf(194, 'stop'), 6)}}>MUST STOP</span>
				</div>
				<div style={T(36, {color: colors.cyan, marginTop: 14, opacity: Math.min(onW(f, wf(195, 'n'), 6), offW(f, sf(196) - 6, 12))})}>
					THE NTSB <span style={{opacity: onW(f, wf(195, 'asked'), 6)}}>HAS ASKED FOR</span> <span style={{opacity: onW(f, wf(195, 'one'), 6)}}>ONE · R-24-003</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.red, opacity: Math.min(onW(f, wf(196, 'below'), 6), offW(f, sf(197) - 6, 12))})}>
					BELOW THE ALERT LINE <span style={{opacity: onW(f, wf(196, 'broken'), 6)}}>→ A BROKEN</span> <span style={{opacity: onW(f, wf(196, 'axle'), 6)}}>AXLE:</span> <span style={{opacity: onW(f, wf(196, 'thirty'), 6)}}>≈30 MILES</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.amber, marginTop: -54, opacity: onW(f, wf(197, 'last'), 6)})}>
					THE LAST TWO DETECTORS <span style={{opacity: onW(f, wf(197, 'nineteen'), 6)}}>· 19 MILES</span> <span style={{opacity: onW(f, wf(197, 'apart'), 6)}}>APART</span>
				</div>
			</div>
		</AbsoluteFill>
	);
};

const Outro: React.FC = () => {
	const f = useFilmFrame();
	const start = ef(197) + 150;
	const o = Math.min(onW(f, start + 20, 30), offW(f, FILM_FRAMES - 30, 30));
	return (
		<AbsoluteFill style={{opacity: o}}>
			<div style={{position: 'absolute', left: 0, right: 0, top: 200, textAlign: 'center'}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 84, letterSpacing: 14, color: colors.ink}}>{channel.name.toUpperCase()}</div>
				<div style={T(30, {color: colors.ink, marginTop: 24})}>SOURCES AND RECORD IDS IN THE DESCRIPTION · CORRECTIONS PINNED IN THE COMMENTS</div>
			</div>
		</AbsoluteFill>
	);
};

const cue = (frame: number, sfx: SfxCue['sfx'], gainDb = -18): SfxCue => ({frame, sfx, gainDb});

export const act5: SceneDef[] = [
	{id: 'a5_report', from: sf(176) - 30, to: sf(178) + 14, C: Report, cues: [cue(sf(176) - 20, 'paper_slide'), cue(wf(177, 'failure') - 15, 'highlighter', -22)]},
	{id: 'a5_paid', from: sf(178) - 20, to: sf(180) + 14, C: Paid, cues: [cue(wf(178, 'billion'), 'quartz_tick'), cue(wf(178, 'twenty-five'), 'quartz_tick'), cue(wf(179, 'fifty-four'), 'quartz_tick')]},
	{id: 'a5_courts', from: sf(180) - 20, to: sf(185) + 14, C: Courts, cues: [cue(sf(180) - 10, 'paper_slide'), cue(wf(181, 'dismissed'), 'stamp', -20), cue(sf(184) - 10, 'paper_slide')]},
	{id: 'a5_again', from: sf(185) - 20, to: sf(191) + 14, C: Again, cues: [cue(sf(186) - 10, 'paper_slide'), cue(sf(187) - 10, 'paper_slide'), cue(sf(189) - 10, 'paper_slide')]},
	{id: 'a5_verdict5', from: sf(191) - 20, to: sf(194) + 14, C: Verdict5, cues: [cue(wf(192, 'qualify'), 'stamp', -14), cue(wf(193, 'three'), 'stamp', -16)]},
	{id: 'a5_signoff', from: sf(194) - 20, to: ef(197) + 200, C: SignOff, cues: [cue(wf(196, 'thirty'), 'transformer_hum', -26), cue(wf(197, 'nineteen'), 'transformer_hum', -26)]},
	{id: 'a5_outro', from: ef(197) + 150, to: FILM_FRAMES, C: Outro},
];
