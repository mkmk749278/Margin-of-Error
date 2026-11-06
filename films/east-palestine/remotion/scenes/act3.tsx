import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo, StatusFlip} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {SfxCue} from '../../../../lib/remotion/sfx';
import {RecordDoc, RecordPage} from '../docs';
import {ActTitle, useFilmFrame} from '../kit';
import {Card, Honesty, lit, mono, offW, onW, Pop, sans} from '../parts';
import {HearingClip, VerdictCard, YearBars} from '../parts3';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM (sentences 67–111, the two hearing clips). Choreography index: scenes/choreography/act3.md.

const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});
const lead16 = (f: number, at: number): number => lead(f, at, 16);

const CLIP1 = hold(71);
const CLIP2 = hold(72);
const clipStart = (h: {from: number; frames: number}, dur: number): number => h.from + Math.round((h.frames - dur * 60) / 2);
const C1 = clipStart(CLIP1, 50.75);
const C2 = clipStart(CLIP2, 37.35);

// ── 1 · The rulebook: Rule 36, the NTSB's reading of it, the hearing (s67–s71) ─────────────────────────────────

const Rulebook: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const introO = offW(f, wf(68, 'defines') - 10, 14);
	return (
		<>
			{introO > 0 ? (
				<AbsoluteFill style={{opacity: introO, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(44, {color: colors.ink, opacity: onW(f, wf(67, 'answer'), 8)})}>
						THE ANSWER IS IN <span style={{opacity: onW(f, wf(67, "industry's"), 6)}}>THE INDUSTRY'S</span> <span style={{...lit(f, wf(67, 'rulebook'), colors.amber)}}>RULEBOOK</span>
					</div>
					<div style={{display: 'flex', gap: 30, marginTop: 40}}>
						{([
							['A', wf(68, 'a', 0)],
							['A', wf(68, 'a', 1)],
							['R', wf(68, 'r')],
						] as const).map(([l, at], i) => (
							<span key={i} style={T(150, {fontWeight: 700, color: colors.amber, opacity: onW(f, at, 6), transform: `scale(${bump(f, fps, at + LAND).toFixed(4)})`, display: 'inline-block'})}>
								{l}
							</span>
						))}
					</div>
					<div style={T(44, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(68, 'association'), 10)})}>
						ASSOCIATION OF <span style={{opacity: onW(f, wf(68, 'american'), 8)}}>AMERICAN RAILROADS</span>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="hearing" start={wf(68, 'defines') - 20} end={sf(69) + 14} label="RULE 36, READ INTO THE RECORD" hl={[{key: 'C25', at: wf(68, 'overheated'), ats: [wf(68, 'overheated'), wf(68, 'seventy')]}]} pushTo={wf(68, 'bearing')} />
			<Pop f={f} fps={fps} on={wf(68, 'one', 0)} off={sf(69) - 6} style={{position: 'absolute', right: 120, top: 860, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(44, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 16px'})}>
					<span style={{opacity: onW(f, wf(68, 'least'), 6)}}>AT LEAST</span> <span style={{opacity: onW(f, wf(68, 'one', 1), 6)}}>{f >= wf(68, 'seventy') ? '170' : '1··'}°F</span> <span style={{opacity: onW(f, wf(68, 'air'), 6)}}>ABOVE THE AIR</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(69) - 10} end={sf(70) + 14} label="NTSB RIR-24-05" title="THE AAR DEFINITION" hl={[{key: 'C23', at: wf(69, 'definition'), ats: [wf(69, 'definition'), wf(69, 'billable'), wf(69, 'owner')]}]} pushTo={wf(69, 'found')} />
			<div style={{position: 'absolute', right: 120, top: 940, ...T(36, {color: colors.ink, background: colors.card, padding: '4px 14px', opacity: Math.min(onW(f, wf(69, 'makes'), 8), offW(f, sf(70) - 6, 12))})}}>
				WHAT MAKES A REPAIR <span style={{opacity: onW(f, wf(69, 'billable'), 6), color: colors.amber}}>BILLABLE</span> <span style={{opacity: onW(f, wf(69, 'owner'), 6)}}>TO THE OWNER</span>
			</div>
			<Pop f={f} fps={fps} on={wf(69, 'b')} off={sf(70) - 6} style={{position: 'absolute', right: 120, top: 860, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>THE NTSB FOUND</div>
			</Pop>
			<RecordPage set="rir" start={sf(70) - 10} end={sf(71) + 14} label="NTSB RIR-24-05" title="FINDINGS ON THE THRESHOLD" hl={[{key: 'C72', at: wf(70, 'billing'), ats: [wf(70, 'billing'), wf(70, 'safety')]}]} pushTo={wf(70, 'relates')} />
			<Pop f={f} fps={fps} on={wf(70, 'board')} off={sf(71) - 6} style={{position: 'absolute', right: 120, top: 860, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>THE BOARD <span style={{opacity: onW(f, wf(70, 'wrote'), 6)}}>WROTE</span></div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(70, 'not')} off={sf(71) - 6} style={{position: 'absolute', right: 120, top: 930, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.ink, border: `3px solid ${colors.ink}`, padding: '4px 14px'})}>NOT DIRECTLY TO SAFETY</div>
			</Pop>
			{/* the hearing */}
			{f >= sf(71) - 10 ? (
				<AbsoluteFill style={{opacity: Math.min(onW(f, sf(71), 12), offW(f, C1 - 10, 14))}}>
					<Card x={200} y={220} w={1520} h={600} accent={colors.amber}>
						<div style={{padding: '50px 60px'}}>
							<div style={{display: 'flex', gap: 24, alignItems: 'baseline'}}>
								<span style={T(56, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(71, 'june'), 8)})}>JUN</span>
								<span style={T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(71, 'twenty-three'), 8)})}>2023</span>
								<span style={T(36, {opacity: onW(f, wf(71, 'public'), 8), ...lit(f, wf(71, 'hearing'), colors.ink)})}>NTSB PUBLIC HEARING</span>
							</div>
							<div style={T(36, {color: colors.ink, marginTop: 16, opacity: onW(f, wf(71, 'east'), 8)})}>EAST PALESTINE HIGH SCHOOL · <span style={{...lit(f, wf(71, 'palestine'), colors.ink)}}>EAST PALESTINE, OHIO</span></div>
							<div style={{marginTop: 70, opacity: onW(f, wf(71, "board's"), 10)}}>
								<div style={T(26, {color: colors.ink})}>ASKED BY</div>
								<div style={T(44, {fontWeight: 700, ...lit(f, wf(71, 'panel'), colors.cyan)})}>THE BOARD'S TECHNICAL PANEL</div>
							</div>
							<div style={{marginTop: 40, opacity: onW(f, wf(71, 'a', 1), 10)}}>
								<div style={T(26, {color: colors.ink})}>ANSWERED BY</div>
								<div style={T(44, {fontWeight: 700, color: colors.amber})}>
									THE AAR'S <span style={{opacity: onW(f, wf(71, 'senior'), 8)}}>SENIOR VICE PRESIDENT</span>
								</div>
								<div style={T(36, {color: colors.ink, opacity: onW(f, wf(71, 'safety'), 8)})}>
									FOR SAFETY <span style={{opacity: onW(f, wf(71, 'operations'), 8)}}>AND OPERATIONS · NTSB P. 44</span>
								</div>
							</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 2 · CLIP 1 (the hold after s71): the witness in his own words ─────────────────────────────────────────────

const Clip1: React.FC = () => {
	const f = useFilmFrame();
	return <HearingClip f={f} clip="clip1" file="hearing_clip1.mp4" start={C1} end={sf(72) + 10} tag="NTSB HEARING · DAY 2 · 23 JUN 2023" role="AAR SENIOR VICE PRESIDENT, SAFETY AND OPERATIONS · NTSB VIDEO, UNALTERED" />;
};

// ── 3 · The question, on the page (s72) ────────────────────────────────────────────────────────────────────────

const Question: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RecordPage set="hearing" start={sf(72) - 10} end={C2 + 10} label="THE QUESTION" hl={[{key: 'C28', at: wf(72, 'thresholds'), ats: [wf(72, 'thresholds'), wf(72, 'limits'), wf(72, 'safe'), wf(72, 'operation'), wf(72, 'all')]}]} pushTo={wf(72, 'asked')} />
			<Pop f={f} fps={fps} on={wf(72, 'member')} off={C2 - 6} style={{position: 'absolute', right: 120, top: 860, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					A MEMBER <span style={{opacity: onW(f, wf(72, 'n'), 6)}}>· NTSB</span> <span style={{opacity: onW(f, wf(72, 'technical'), 6)}}>TECHNICAL PANEL</span> <span style={{opacity: onW(f, wf(72, 'panel'), 6)}}>· TSB CANADA</span>
				</div>
			</Pop>
		</>
	);
};

// ── 4 · CLIP 2 (the hold after s72): "Correct." ───────────────────────────────────────────────────────────────

const Clip2: React.FC = () => {
	const f = useFilmFrame();
	return <HearingClip f={f} clip="clip2" file="hearing_clip2.mp4" start={C2} end={sf(73) + 10} tag="NTSB HEARING · DAY 2 · 23 JUN 2023" role="QUESTION: NTSB TECHNICAL PANEL (TSB CANADA) · ANSWER: AAR SVP · UNALTERED" />;
};

// ── 5 · A billing standard; the industry's point; what the AAR can set (s73–s75) ──────────────────────────────

const Billing: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const chunks: [string, number][] = [
		["it's in the interest", wf(74, 'industry')],
		['of the operating railroad', wf(74, 'point')],
		['not to have derailments', wf(74, 'railroad')],
		['attributable to hot bearings', wf(74, 'derailment')],
	];
	const diag = lead16(f, wf(75, 'association'));
	return (
		<>
			<div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center', opacity: offW(f, wf(75, 'the') - 6, 16)}}>
				<span style={T(110, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(73, 'billing'), 8), display: 'inline-block', transform: `scale(${bump(f, fps, wf(73, 'standard') + LAND).toFixed(4)})`})}>A BILLING STANDARD.</span>
			</div>
			<Card x={260} y={380} w={1400} h={330} o={Math.min(onW(f, wf(74, 'same'), 12), offW(f, wf(75, 'association') - 6, 14))} accent={colors.cyan}>
				<div style={{padding: '34px 44px'}}>
					<div style={T(30, {color: colors.ink, opacity: onW(f, wf(74, 'breath'), 8)})}>IN THE SAME BREATH · HEARING DAY 2 P. 216</div>
					<div style={{fontFamily: sans, fontWeight: 600, fontSize: 54, lineHeight: 1.2, color: colors.ink, marginTop: 18}}>
						{chunks.map(([t, at], i) => (
							<span key={i} style={{opacity: onW(f, at, 8)}}>
								{i === 0 ? '“' : ''}
								{t}
								{i === chunks.length - 1 ? '”' : ' '}
							</span>
						))}
					</div>
				</div>
			</Card>
			{diag > 0 ? (
				<AbsoluteFill style={{opacity: diag}}>
					<div style={{position: 'absolute', left: 140, top: 140, ...T(36, {color: colors.ink})}}>
						THE WITNESS WENT ON <span style={{opacity: onW(f, wf(75, 'explain'), 8)}}>· HEARING DAY 2 PP. 216–17</span>
					</div>
					<Card x={140} y={240} w={800} h={560} accent={colors.cyan}>
						<div style={{padding: '40px 40px'}}>
							<div style={T(36, {color: colors.ink})}>
								THE AAR CAN SET <span style={{...lit(f, wf(75, 'standards'), colors.cyan)}}>STANDARDS</span> <span style={{opacity: onW(f, wf(75, 'only'), 6), color: colors.cyan}}>ONLY</span>
							</div>
							<div style={T(44, {fontWeight: 700, color: colors.cyan, marginTop: 30, opacity: onW(f, wf(75, 'cars'), 8)})}>FOR CARS PASSED</div>
							<div style={T(44, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(75, 'between'), 8)})}>BETWEEN RAILROADS</div>
							<svg width={700} height={160} style={{marginTop: 30}}>
								<rect x={20} y={40} width={250} height={80} fill="none" stroke={colors.sub} strokeWidth={3} />
								<rect x={430} y={40} width={250} height={80} fill="none" stroke={colors.sub} strokeWidth={3} />
								<rect x={20 + 400 * lead(f, wf(75, 'passed'), 40)} y={66} width={70} height={28} fill={colors.cyan} />
							</svg>
						</div>
					</Card>
					<Card x={980} y={240} w={800} h={560} o={onW(f, wf(75, 'not'), 10)} accent={colors.red}>
						<div style={{padding: '40px 40px'}}>
							<div style={T(36, {color: colors.ink})}>NOT FOR WHAT A RAILROAD</div>
							<div style={T(44, {fontWeight: 700, color: colors.ink, marginTop: 30, opacity: onW(f, wf(75, 'does'), 8)})}>DOES ON ITS</div>
							<div style={T(44, {fontWeight: 700, opacity: onW(f, wf(75, 'own'), 8), ...lit(f, wf(75, 'track'), colors.red)})}>OWN TRACK</div>
							<div style={T(30, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(75, 'track'), 8)})}>“IT'S NOT A MANDATORY RULE.”</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 6 · Norfolk Southern's line: 200, then 170; the industry commits to 170 (s76–s80) ─────────────────────────

const NSLine: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const midO = Math.min(onW(f, sf(77) - 6, 12), offW(f, sf(79) - 6, 14));
	const endO = onW(f, sf(80) - 6, 14);
	return (
		<>
			<RecordPage set="rir" start={sf(76) - 10} end={sf(77) + 14} label="NTSB RIR-24-05" title="NORFOLK SOUTHERN'S TESTIMONY" hl={[{key: 'C73', at: wf(76, 'based'), ats: [wf(76, 'based'), wf(76, 'thresholds')]}]} pushTo={wf(76, 'testified')} />
			<Pop f={f} fps={fps} on={wf(76, 'experience')} off={sf(77) - 6} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					OWN EXPERIENCE <span style={{opacity: onW(f, wf(76, 'and'), 6)}}>+</span> <span style={{opacity: onW(f, wf(76, "industry's"), 6)}}>INDUSTRY STANDARDS</span>
				</div>
			</Pop>
			{midO > 0 ? (
				<AbsoluteFill style={{opacity: midO, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(44, {color: colors.ink, ...lit(f, wf(77, 'critical'), colors.red)})}>NORFOLK SOUTHERN · CRITICAL ALARM</div>
					<div style={{display: 'flex', gap: 80, marginTop: 40, alignItems: 'center'}}>
						<div style={{textAlign: 'center'}}>
							<div style={T(36, {color: colors.ink, opacity: onW(f, wf(77, 'before'), 8)})}>BEFORE THE ACCIDENT</div>
							<div style={T(150, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(77, 'two'), 8), transform: `scale(${bump(f, fps, wf(77, 'hundred') + LAND).toFixed(4)})`})}>200°F</div>
						</div>
						<div style={{width: 160 * lead16(f, wf(78, 'after')), height: 6, background: colors.ink}} />
						<div style={{textAlign: 'center', opacity: onW(f, wf(78, 'after'), 10)}}>
							<div style={T(36, {color: colors.ink})}>AFTER IT</div>
							<StatusFlip f={f} fps={fps} word={wf(78, 'seventy')} from="···" to="170°F" toneFrom="amber" toneTo="amber" size={150} />
						</div>
					</div>
					<div style={T(26, {color: colors.ink, marginTop: 40})}>NTSB RIR-24-05 P. 43, TABLE 7 · ABOVE AMBIENT</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="hearing" start={sf(79) - 10} end={sf(80) + 14} label="THE INDUSTRY'S WITNESS" hl={[{key: 'C76', at: wf(79, 'committed'), ats: [wf(79, 'committed'), wf(79, 'seventy')]}]} pushTo={wf(79, 'said')} />
			<Pop f={f} fps={fps} on={wf(79, 'hearing')} off={sf(80) - 6} style={{position: 'absolute', right: 120, top: 810, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px'})}>
					SAME HEARING · <span style={{opacity: onW(f, wf(79, 'witness'), 6)}}>THE INDUSTRY'S WITNESS</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(79, 'now')} off={sf(80) - 6} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					NOW <span style={{opacity: onW(f, wf(79, 'all'), 6)}}>ALL</span> <span style={{opacity: onW(f, wf(79, 'using'), 6)}}>USING 170</span>
				</div>
			</Pop>
			{endO > 0 ? (
				<AbsoluteFill style={{opacity: endO}}>
					<Card x={160} y={260} w={1600} h={520} accent={colors.amber}>
						<div style={{padding: '50px 60px'}}>
							<div style={T(36, {color: colors.ink})}>
								AFTER <span style={{...lit(f, wf(80, 'palestine'), colors.ink)}}>EAST PALESTINE</span> · <span style={{opacity: onW(f, wf(80, 'railroad'), 8)}}>ON NORFOLK SOUTHERN</span>
							</div>
							<div style={{display: 'flex', gap: 30, alignItems: 'center', marginTop: 50}}>
								<div style={{opacity: onW(f, wf(80, 'number'), 8)}}>
									<div style={T(30, {color: colors.ink})}>THE NUMBER IN</div>
									<div style={T(56, {fontWeight: 700, ...lit(f, wf(80, 'billing'), colors.amber)})}>THE BILLING</div>
									<div style={T(56, {fontWeight: 700, opacity: onW(f, wf(80, 'definition'), 8), color: colors.amber})}>DEFINITION</div>
								</div>
								<div style={{width: 200 * lead16(f, wf(80, 'became')), height: 6, background: colors.ink}} />
								<div style={{opacity: onW(f, wf(80, 'line'), 8)}}>
									<div style={T(30, {color: colors.ink})}>BECAME THE LINE AT WHICH A TRAIN</div>
									<div style={T(56, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(80, 'stop'), 8)})}>
										MUST STOP <span style={{opacity: onW(f, wf(80, 'once'), 6)}}>AT ONCE</span>
									</div>
								</div>
							</div>
							<div style={T(150, {fontWeight: 700, color: colors.amber, marginTop: 20, opacity: onW(f, wf(80, 'so'), 8)})}>170°F</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 7 · Every line is a trade (s81–s84) ──────────────────────────────────────────────────────────────────────

const Trade: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	// the line slides low on "low", high on "high"; the side it costs lights
	const lineY = tween(f, wf(82, 'low') - 10, wf(82, 'low') + 20, 0, 1, ease.camera) - 2 * tween(f, wf(83, 'high') - 10, wf(83, 'high') + 20, 0, 1, ease.camera);
	const y = 560 + 150 * lineY;
	const pageAt = wf(84, 'in');
	const o = offW(f, pageAt - 6, 14);
	return (
		<>
			{o > 0 ? (
				<AbsoluteFill style={{opacity: o}}>
					<div style={{position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'center', ...T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(81, 'every'), 8)})}}>
						EVERY LINE <span style={{opacity: onW(f, wf(81, 'trade'), 8), color: colors.amber}}>IS A TRADE</span>
					</div>
					<Card x={160} y={210} w={1600} h={700}>
						<span />
					</Card>
					<div style={{position: 'absolute', left: 200, top: y - 3, width: 1520, height: 6, background: colors.amber, boxShadow: `0 0 ${(20 * Math.max(flash(f, wf(82, 'low'), 0), flash(f, wf(83, 'high'), 0))).toFixed(1)}px ${colors.amber}`}} />
					<div style={{position: 'absolute', left: 220, top: y - 56, ...T(36, {fontWeight: 700, color: colors.amber})}}>THE LINE</div>
					<div style={{position: 'absolute', left: 220, top: 760, opacity: onW(f, wf(82, 'set'), 8)}}>
						<div style={T(36, {color: colors.ink})}>
							SET IT <span style={{opacity: onW(f, wf(82, 'low'), 6), color: colors.cyan}}>TOO LOW</span>
						</div>
						<div style={T(44, {fontWeight: 700, opacity: onW(f, wf(82, 'trains'), 8), ...lit(f, wf(82, 'nothing'), colors.cyan)})}>
							TRAINS STOP <span style={{opacity: onW(f, wf(82, 'nothing'), 6)}}>FOR NOTHING</span>
						</div>
					</div>
					<div style={{position: 'absolute', right: 220, top: 250, textAlign: 'right', opacity: onW(f, wf(83, 'set'), 8)}}>
						<div style={T(36, {color: colors.ink})}>
							SET IT <span style={{opacity: onW(f, wf(83, 'high'), 6), color: colors.red}}>TOO HIGH</span>
						</div>
						<div style={T(44, {fontWeight: 700, opacity: onW(f, wf(83, 'failing'), 8), ...lit(f, wf(83, 'rolling'), colors.red)})}>
							A FAILING BEARING <span style={{opacity: onW(f, wf(83, 'keeps'), 6)}}>KEEPS ROLLING</span>
						</div>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={pageAt - 10} end={ef(84) + 30} label="NTSB RIR-24-05" title="IN THE NTSB'S WORDS" hl={[{key: 'C24', at: wf(84, 'balancing'), ats: [wf(84, 'balancing'), wf(84, 'unnecessary')]}]} pushTo={wf(84, 'words')} />
			<div style={{position: 'absolute', right: 120, top: 950, ...T(36, {color: colors.ink, background: colors.card, padding: '4px 14px', opacity: Math.min(onW(f, wf(84, 'preventing'), 8), offW(f, ef(84) + 20, 12))})}}>
				PREVENTING <span style={{opacity: onW(f, wf(84, 'failures'), 6)}}>BEARING FAILURES</span> <span style={{opacity: onW(f, wf(84, 'avoiding'), 6), color: colors.amber}}>↔ AVOIDING UNNECESSARY STOPS</span>
			</div>
			<Pop f={f} fps={fps} on={wf(84, 'railroads')} off={ef(84) + 20} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					RAILROADS <span style={{opacity: onW(f, wf(84, 'choose'), 6)}}>CHOOSE</span> <span style={{opacity: onW(f, wf(84, 'thresholds'), 6)}}>THRESHOLDS</span>
				</div>
			</Pop>
		</>
	);
};

// ── 8 · Context, not cause; the 2019 plan (s85–s91) ─────────────────────────────────────────────────────────────

const Plan: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const ctxO = Math.min(onW(f, sf(85) - 6, 12), offW(f, wf(87, 'norfolk') - 8, 14));
	const or = rollTo(f, [{frame: wf(89, 'sixty') - 10, value: 65.4}, {frame: wf(89, 'sixty') + LAND, value: 60}]);
	return (
		<>
			{ctxO > 0 ? (
				<AbsoluteFill style={{opacity: ctxO, alignItems: 'center', justifyContent: 'center'}}>
					<Honesty text="CONTEXT, NOT CAUSE" x={760} y={250} />
					<div style={T(44, {fontWeight: 700, color: colors.ink, marginTop: 120, opacity: onW(f, wf(85, 'investigator'), 8)})}>
						NO INVESTIGATOR <span style={{opacity: onW(f, wf(85, 'links'), 6)}}>LINKS WHAT FOLLOWS</span>
					</div>
					<div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(85, 'bearing'), 8)})}>TO THIS BEARING</div>
					<div style={T(36, {color: colors.amber, marginTop: 40, opacity: onW(f, wf(86, 'how'), 8)})}>
						HOW THE RAILROAD <span style={{opacity: onW(f, wf(86, 'run'), 6)}}>WAS BEING RUN</span>
					</div>
					<div style={{marginTop: 50, opacity: onW(f, wf(87, 'february'), 8)}}>
						<DatePill f={f} fps={fps} day={11} month={2} year={2019} dayWord={wf(87, 'february')} yearWord={wf(87, 'nineteen')} fromYear={2019} size={44} />
					</div>
				</AbsoluteFill>
			) : null}
			<RecordDoc doc="ns_8k_psr" start={wf(87, 'norfolk') - 14} end={sf(89) + 14} at={[wf(88, 'precision'), wf(91, 'working')]} label="NS 8-K · 11 FEB 2019" source="NORFOLK SOUTHERN 8-K, EX. 99.1 · SEC EDGAR" pushTo={wf(87, 'investors')} />
			<div style={{position: 'absolute', right: 120, top: 810, ...T(36, {fontWeight: 700, color: colors.amber, background: colors.card, padding: '4px 14px', opacity: Math.min(onW(f, wf(88, 'precision'), 8), offW(f, sf(89) - 6, 12))})}}>
				PRECISION <span style={{opacity: onW(f, wf(88, 'scheduled'), 6)}}>SCHEDULED</span> <span style={{opacity: onW(f, wf(88, 'railroading'), 6)}}>RAILROADING</span>
			</div>
			<Pop f={f} fps={fps} on={wf(87, 'plan')} off={sf(89) - 6} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>TOLD INVESTORS: THE PLAN</div>
			</Pop>
			<RecordDoc doc="ns_8k_or60" start={sf(89) - 10} end={sf(90) + 14} at={[wf(89, 'percent'), wf(89, 'four')]} label="NS 8-K · 11 FEB 2019" source="NORFOLK SOUTHERN 8-K, EX. 99.1 · SEC EDGAR" pushTo={wf(89, 'ratio')} />
			{f >= sf(89) - 10 && f < sf(90) + 14 ? (
				<Card x={1160} y={640} w={640} h={330} o={onW(f, wf(89, 'operating'), 10)} accent={colors.amber}>
					<div style={{padding: '20px 26px'}}>
						<div style={T(26, {color: colors.ink})}>OPERATING RATIO</div>
						<div style={T(26, {color: colors.ink, opacity: onW(f, wf(89, 'share'), 8)})}>
							= SHARE OF REVENUE <span style={{opacity: onW(f, wf(89, 'running'), 6)}}>SPENT RUNNING THE RAILROAD</span>
						</div>
						<div style={T(96, {fontWeight: 700, color: colors.amber, marginTop: 10})}>{or.toFixed(1)}%</div>
						<div style={T(30, {color: colors.ink})}>
							<span style={{opacity: onW(f, wf(89, 'twenty-one'), 6)}}>TARGET BY 2021</span> <span style={{opacity: onW(f, wf(89, 'down'), 6)}}>· DOWN FROM</span> <span style={{opacity: onW(f, wf(89, 'sixty-five'), 6)}}>65.4% (2018)</span>
						</div>
					</div>
				</Card>
			) : null}
			<RecordDoc doc="ns_8k_buyback" start={sf(90) - 10} end={sf(91) + 14} at={[wf(90, 'buybacks')]} label="NS 8-K · 11 FEB 2019" source="NORFOLK SOUTHERN 8-K, EX. 99.1 · SEC EDGAR" pushTo={wf(90, 'share')} />
			<Pop f={f} fps={fps} on={wf(90, 'using')} off={sf(91) - 6} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					<span style={{opacity: onW(f, wf(90, 'free'), 6)}}>FREE CASH FLOW</span> <span style={{opacity: onW(f, wf(90, 'borrowing'), 6)}}>+ BORROWING</span> <span style={{opacity: onW(f, wf(90, 'capacity'), 6)}}>CAPACITY</span>
				</div>
			</Pop>
			<RecordDoc doc="ns_8k_psr" start={sf(91) - 10} end={ef(91) + 30} at={[wf(88, 'precision'), wf(91, 'working')]} label="NS 8-K · 11 FEB 2019" source="NORFOLK SOUTHERN 8-K, EX. 99.1 · SEC EDGAR" pushTo={wf(91, 'principles')} />
			<Pop f={f} fps={fps} on={wf(91, 'five')} off={ef(91) + 20} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					5 PRINCIPLES <span style={{opacity: onW(f, wf(91, 'included'), 6)}}>INCLUDED</span> <span style={{opacity: onW(f, wf(91, 'safely'), 6)}}>· WORKING SAFELY</span>
				</div>
			</Pop>
		</>
	);
};

// ── 9 · What followed, in the filings (s92–s94) ─────────────────────────────────────────────────────────────────

const Filings: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const emp = rollTo(f, [
		{frame: wf(93, 'twenty-six') - 10, value: 0},
		{frame: wf(93, 'thousand', 0) + LAND, value: 26000},
		{frame: wf(93, 'six') - 4, value: 26000},
		{frame: wf(93, 'sixty-two') + LAND, value: 26662},
		{frame: wf(93, 'eighteen', 1) - 10, value: 26662},
		{frame: wf(93, 'hundred', 1) + LAND, value: 18900},
	]);
	const pct = Math.round(rollTo(f, [{frame: wf(93, 'twenty-nine') - 12, value: 0}, {frame: wf(93, 'twenty-nine') + LAND, value: 29}]));
	const total = rollTo(f, [{frame: wf(94, 'ten') - 14, value: 0}, {frame: wf(94, 'billion') + LAND, value: 10.04}]);
	const empO = Math.min(onW(f, wf(93, 'average'), 10), offW(f, sf(94) - 6, 14));
	const bbO = onW(f, sf(94) - 4, 12);
	return (
		<>
			<div style={{position: 'absolute', left: 140, top: 130, ...T(36, {color: colors.ink, opacity: onW(f, wf(92, 'filings'), 8)})}}>
				THE FILINGS <span style={{opacity: onW(f, wf(92, 'followed'), 6)}}>SHOW WHAT FOLLOWED</span>
			</div>
			{empO > 0 ? (
				<Card x={140} y={210} w={1640} h={720} o={empO} accent={colors.amber}>
					<div style={{padding: '40px 50px'}}>
						<div style={T(36, {...lit(f, wf(93, 'employees'), colors.ink)})}>NORFOLK SOUTHERN · AVERAGE EMPLOYEES</div>
						<div style={T(150, {fontWeight: 700, color: colors.ink, marginTop: 30})}>{f < wf(93, 'twenty-six') - 10 ? '—' : Math.round(emp).toLocaleString('en-US')}</div>
						<div style={{display: 'flex', gap: 60, marginTop: 10}}>
							<span style={T(36, {color: colors.ink, opacity: onW(f, wf(93, 'eighteen', 0), 8)})}>2018 · 26,662 <span style={{opacity: onW(f, wf(93, 'before'), 6)}}>(THE YEAR BEFORE</span> <span style={{opacity: onW(f, wf(93, 'plan'), 6)}}>THE PLAN)</span></span>
						</div>
						<div style={T(36, {color: colors.ink, marginTop: 8, opacity: onW(f, wf(93, 'twenty-two'), 8)})}>2022 · 18,900</div>
						<div style={{display: 'flex', gap: 30, alignItems: 'baseline', marginTop: 30, opacity: onW(f, wf(93, 'by'), 8)}}>
							<span style={T(96, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(93, 'percent') + LAND).toFixed(4)})`, display: 'inline-block'})}>−{pct}%</span>
							<span style={T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px', opacity: onW(f, wf(93, 'by'), 6)})}>OUR CALCULATION</span>
						</div>
						<div style={{position: 'absolute', left: 50, bottom: 30, ...T(26, {color: colors.ink})}}>NS 10-K 2019 (2018 COLUMN) · NS 10-K 2022 · SEC EDGAR</div>
					</div>
				</Card>
			) : null}
			{bbO > 0 ? (
				<Card x={140} y={210} w={1640} h={720} o={bbO} accent={colors.amber}>
					<div style={{padding: '40px 50px'}}>
						<div style={T(36, {color: colors.ink})}>
							SHARE BUYBACKS · <span style={{opacity: onW(f, wf(94, 'twenty'), 8)}}>2019</span> <span style={{opacity: onW(f, wf(94, 'twenty-two'), 8)}}>– 2022</span>
						</div>
						<YearBars
							f={f}
							x={50}
							y={130}
							h={460}
							max={3400}
							tone={colors.amber}
							fmt={(v) => `$${(v / 1000).toFixed(1)}B`}
							bars={[
								{label: '2019', value: 2099, at: wf(94, 'nineteen')},
								{label: '2020', value: 1439, at: wf(94, 'nineteen') + 12},
								{label: '2021', value: 3390, at: wf(94, 'twenty', 1)},
								{label: '2022', value: 3110, at: wf(94, 'twenty-two')},
							]}
						/>
						<div style={{position: 'absolute', right: 60, top: 160, textAlign: 'right', opacity: onW(f, wf(94, 'ten'), 8)}}>
							<div style={T(150, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(94, 'dollars') + LAND).toFixed(4)})`, transformOrigin: '100% 60%'})}>${total.toFixed(1)}B</div>
							<div style={T(30, {color: colors.ink, opacity: onW(f, wf(94, 'company'), 8)})}>
								THE COMPANY <span style={{opacity: onW(f, wf(94, 'spent'), 6)}}>SPENT</span>
							</div>
							<div style={T(36, {color: colors.ink, opacity: onW(f, wf(94, 'buying'), 8)})}>
								BUYING BACK <span style={{opacity: onW(f, wf(94, 'shares'), 6)}}>ITS OWN SHARES</span>
							</div>
							<div style={T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px', marginTop: 16, display: 'inline-block'})}>OUR CALCULATION (SUM)</div>
						</div>
						<div style={{position: 'absolute', left: 50, bottom: 30, ...T(26, {color: colors.ink})}}>NS 10-K EQUITY STATEMENTS 2019–2022 · SEC EDGAR</div>
					</div>
				</Card>
			) : null}
		</>
	);
};

// ── 10 · Did that cause this? Where the record stops; whose car (s95–s102) ─────────────────────────────────────

const Car: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const qO = offW(f, sf(97) - 6, 14);
	const stop = lead(f, wf(96, 'stops'), 14);
	const pageAt = sf(102) - 10;
	const carO = Math.min(onW(f, sf(97) - 6, 12), offW(f, pageAt, 14));
	return (
		<>
			{qO > 0 ? (
				<AbsoluteFill style={{opacity: qO, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(72, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(95, 'cause'), 8)})}>
						DID THAT CAUSE <span style={{opacity: onW(f, wf(95, 'derailment'), 6), color: colors.amber}}>THIS DERAILMENT?</span>
					</div>
					<div style={{display: 'flex', alignItems: 'center', marginTop: 80, opacity: onW(f, wf(96, 'here'), 8)}}>
						<span style={T(36, {...lit(f, wf(96, 'record'), colors.ink), marginRight: 24})}>THE RECORD</span>
						<div style={{width: 900, height: 6, background: `linear-gradient(90deg, ${colors.ink} ${(stop * 100).toFixed(0)}%, ${colors.border} ${(stop * 100).toFixed(0)}%)`}} />
						<div style={{width: 10, height: 80 * stop, background: colors.ink}} />
						<span style={T(36, {fontWeight: 700, color: colors.ink, marginLeft: 24, opacity: stop})}>STOPS</span>
					</div>
				</AbsoluteFill>
			) : null}
			{carO > 0 ? (
				<AbsoluteFill style={{opacity: carO}}>
					<div style={{position: 'absolute', left: 140, top: 140, ...T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(97, 'twenty-third'), 8)})}}>
						CAR 23 · GPLX75465 <span style={{color: colors.ink, opacity: onW(f, wf(97, 'not'), 6)}}>· NOT NORFOLK SOUTHERN'S</span>
					</div>
					<Card x={140} y={240} w={500} h={320} o={onW(f, wf(98, 'belonged'), 10)} accent={colors.cyan}>
						<div style={{padding: '30px 30px'}}>
							<div style={T(30, {color: colors.ink})}>OWNER</div>
							<div style={{display: 'flex', gap: 8, marginTop: 10}}>
								{([
									['G', wf(98, 'g')],
									['A', wf(98, 'a')],
									['T', wf(98, 't')],
									['X', wf(98, 'x')],
								] as const).map(([l, at]) => (
									<span key={l} style={T(80, {fontWeight: 700, color: colors.cyan, opacity: onW(f, at, 5), display: 'inline-block', transform: `scale(${bump(f, fps, at + LAND).toFixed(4)})`})}>
										{l}
									</span>
								))}
							</div>
							<div style={T(26, {color: colors.ink, marginTop: 14})}>NTSB P. 45</div>
						</div>
					</Card>
					<Card x={700} y={240} w={500} h={320} o={onW(f, wf(98, 'leased'), 10)} accent={colors.cyan}>
						<div style={{padding: '30px 30px'}}>
							<div style={T(30, {color: colors.ink})}>LEASED TO</div>
							<div style={T(64, {fontWeight: 700, color: colors.cyan, marginTop: 10, opacity: onW(f, wf(98, 'braskem'), 8)})}>BRASKEM</div>
							<div style={T(44, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(98, 'america'), 8)})}>AMERICA</div>
						</div>
					</Card>
					<Card x={1260} y={240} w={520} h={320} o={onW(f, wf(99, 'joined'), 10)} accent={colors.amber}>
						<div style={{padding: '30px 30px'}}>
							<div style={T(30, {color: colors.ink})}>
								JOINED THE TRAIN AT <span style={{opacity: onW(f, wf(99, 'yard'), 6)}}>A YARD</span>
							</div>
							<div style={T(44, {fontWeight: 700, color: colors.amber, marginTop: 10, opacity: onW(f, wf(99, 'illinois'), 8)})}>MADISON, ILLINOIS</div>
							<div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(99, 'terminal'), 8)})}>TERMINAL RAILROAD (TRRA)</div>
							<div style={T(26, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(99, 'part-owned'), 8)})}>
								PART-OWNED BY <span style={{opacity: onW(f, wf(99, 'several'), 6)}}>SEVERAL</span> <span style={{opacity: onW(f, wf(99, 'large'), 6)}}>LARGE RAILROADS,</span> <span style={{opacity: onW(f, wf(99, 'norfolk'), 6)}}>NS</span> <span style={{opacity: onW(f, wf(99, 'among'), 6)}}>AMONG THEM · NTSB P. 3</span>
							</div>
						</div>
					</Card>
					<Card x={140} y={620} w={800} h={260} o={onW(f, wf(100, "railroad's"), 10)} accent={colors.cyan}>
						<div style={{padding: '30px 34px'}}>
							<div style={T(36, {...lit(f, wf(100, 'inspectors'), colors.ink)})}>TRRA INSPECTORS</div>
							<div style={T(72, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(100, 'checked'), 8), transform: `scale(${bump(f, fps, wf(100, 'checked') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>CHECKED IT</div>
						</div>
					</Card>
					<Card x={980} y={620} w={800} h={260} o={onW(f, wf(101, 'norfolk'), 10)} accent={colors.red}>
						<div style={{padding: '30px 34px'}}>
							<div style={T(36, {color: colors.ink, opacity: onW(f, wf(101, 'inspectors'), 6)})}>NS INSPECTORS</div>
							<div style={T(72, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(101, 'did'), 8), transform: `scale(${bump(f, fps, wf(101, 'not') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>DID NOT · NTSB P. 87</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={pageAt} end={ef(102) + 30} label="NTSB FINDING 3" hl={[{key: 'C22', at: wf(102, 'determine')}]} pushTo={wf(102, 'inspection')} />
			<Pop f={f} fps={fps} on={wf(102, 'missed')} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					MISSED ANYTHING? <span style={{opacity: onW(f, wf(102, 'investigators'), 6)}}>THE INVESTIGATORS:</span> <span style={{opacity: onW(f, wf(102, 'not'), 6)}}>NOT DETERMINED</span>
				</div>
			</Pop>
		</>
	);
};

// ── 11 · The other cars, the email, the special investigation (s103–s107) ─────────────────────────────────────

const OtherCars: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const q = Math.round(rollTo(f, [{frame: wf(103, 'quarter') - 14, value: 0}, {frame: wf(103, 'quarter') + LAND, value: 26}]));
	return (
		<>
			<RecordPage set="rir" start={sf(103) - 10} end={sf(105) + 14} label="NTSB RIR-24-05" title="MECHANICAL INSPECTIONS" hl={[{key: 'C30', at: wf(103, 'reportable'), ats: [wf(103, 'reportable'), wf(103, 'quarter')]}, {key: 'C31', at: wf(104, 'appeared'), ats: [wf(104, 'appeared'), wf(104, 'ninety-second')]}]} pushTo={wf(103, 'checked')} />
			<Pop f={f} fps={fps} on={wf(103, 'after')} off={sf(105) - 6} style={{position: 'absolute', right: 120, top: 466, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px'})}>
					AFTER <span style={{opacity: onW(f, wf(103, 'derailment'), 6)}}>THE DERAILMENT</span> <span style={{opacity: onW(f, wf(103, 'n'), 6)}}>· NTSB CHECKS</span>
				</div>
			</Pop>
			<Card x={1160} y={540} w={660} h={470} o={Math.min(onW(f, wf(103, 'found'), 10), offW(f, sf(105) + 4, 14))} accent={colors.amber}>
				<div style={{padding: '20px 26px'}}>
					<div style={T(26, {color: colors.ink})}>
						CARS THAT <span style={{...lit(f, wf(103, 'stayed'), colors.ink)}}>STAYED</span> <span style={{...lit(f, wf(103, 'rails'), colors.ink)}}>ON THE RAILS</span>
					</div>
					<div style={T(96, {fontWeight: 700, color: colors.amber})}>{q}%</div>
					<div style={T(30, {color: colors.ink, opacity: onW(f, wf(103, 'defects'), 6)})}>WITH REPORTABLE DEFECTS</div>
					<div style={T(30, {color: colors.ink, opacity: onW(f, wf(103, 'most'), 6)})}>
						MOST OF THEM <span style={{opacity: onW(f, wf(103, 'minor'), 6)}}>MINOR</span>
					</div>
					<div style={T(30, {color: colors.amber, marginTop: 16, opacity: onW(f, wf(104, 'email'), 8)})}>
						<span style={{opacity: onW(f, wf(104, 'obtained'), 6)}}>OBTAINED:</span> <span style={{opacity: onW(f, wf(104, "foreman's"), 6)}}>AN NS FOREMAN'S</span> <span style={{opacity: onW(f, wf(104, 'email'), 6)}}>EMAIL</span> <span style={{opacity: onW(f, wf(104, 'appeared'), 6)}}>“APPEARED TO”</span>
					</div>
					<div style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(104, 'ninety-second'), 6)})}>
						90 S <span style={{opacity: onW(f, wf(104, 'target'), 6)}}>TARGET</span> <span style={{opacity: onW(f, wf(104, 'inspection'), 6)}}>A CAR</span> <span style={T(26, {color: colors.ink, opacity: onW(f, wf(104, 'norfolk', 1), 6)})}>IN NS'S <span style={{opacity: onW(f, wf(104, 'yards'), 6)}}>OWN YARDS</span></span>
					</div>
				</div>
			</Card>
			{f >= sf(105) - 10 && f < sf(106) + 14 ? (
				<AbsoluteFill style={{opacity: Math.min(onW(f, sf(105) - 4, 12), offW(f, sf(106), 14)), alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(72, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(105, 'car'), 8)})}>
						CAR <span style={{opacity: onW(f, wf(105, 'twenty-three'), 6)}}>23</span>
					</div>
					<div style={T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(105, 'inspected'), 8)})}>
						WAS INSPECTED <span style={{opacity: onW(f, wf(105, 'elsewhere'), 6), color: colors.cyan}}>ELSEWHERE · TRRA</span>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={sf(106) - 10} end={sf(107) + 14} label="NTSB RIR-24-05" title="INSPECTION TIME GOALS" page={118} hl={[{key: 'C32', at: wf(106, 'determine'), ats: [wf(106, 'determine'), wf(106, 'goals'), wf(106, 'unreported')]}]} pushTo={wf(106, 'not')} />
			<Pop f={f} fps={fps} on={wf(106, 'time')} off={sf(107) - 6} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					<span style={{opacity: onW(f, wf(106, 'time'), 6)}}>TIME GOALS</span> <span style={{opacity: onW(f, wf(106, 'contributed'), 6)}}>→</span> <span style={{opacity: onW(f, wf(106, 'defects'), 6)}}>DEFECTS?</span> COULD NOT DETERMINE
				</div>
			</Pop>
			<RecordDoc doc="ntsb_nr_special" start={sf(107) - 10} end={ef(107) + 30} at={[wf(107, 'opened')]} label="NTSB · 07 MAR 2023" source="NTSB NEWS RELEASE · NTSB.GOV" pushTo={wf(107, 'the')} />
			<Pop f={f} fps={fps} on={wf(107, 'march')} off={ef(107) + 20} style={{position: 'absolute', right: 120, top: 880, maxWidth: 1000, textAlign: 'right'}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					MAR <span style={{opacity: onW(f, wf(107, 'twenty-three'), 6)}}>2023</span> <span style={{opacity: onW(f, wf(107, 'n'), 6)}}>· NTSB</span> <span style={{opacity: onW(f, wf(107, 'investigation'), 6)}}>SPECIAL INVESTIGATION:</span> <span style={{opacity: onW(f, wf(107, 'norfolk'), 6)}}>NS</span> <span style={{opacity: onW(f, wf(107, 'culture'), 6)}}>SAFETY CULTURE</span>
				</div>
			</Pop>
		</>
	);
};

// ── 12 · Our reading, and verdict 1 (s108–s111), then Act IV ─────────────────────────────────────────────────

const Reading: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const o = offW(f, sf(110) - 6, 14);
	return (
		<>
			{o > 0 ? (
				<AbsoluteFill style={{opacity: o}}>
					<Honesty text="OUR READING OF THE RECORD" x={160} y={150} o={onW(f, wf(108, 'reading'), 8)} />
					<div style={{position: 'absolute', left: 820, top: 160, ...T(26, {color: colors.ink, opacity: onW(f, wf(108, 'record'), 8)})}}>THE RECORD, AS FILED · NTSB · SEC</div>
					<Card x={160} y={260} w={1600} h={620} accent={colors.amber}>
						<div style={{padding: '44px 54px'}}>
							<div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(108, 'investigator'), 8)})}>
								NO INVESTIGATOR <span style={{opacity: onW(f, wf(108, 'links'), 6)}}>LINKS THE PLAN</span> <span style={{opacity: onW(f, wf(108, 'bearing'), 6)}}>TO THIS BEARING</span>
							</div>
							<div style={T(36, {color: colors.ink, marginTop: 50, opacity: onW(f, wf(109, 'show'), 8)})}>
								WHAT IT SHOWS: <span style={{...lit(f, wf(109, 'stop'), colors.amber)}}>WHERE THE STOP LINE</span> <span style={{opacity: onW(f, wf(109, 'drawn'), 6)}}>WAS DRAWN</span>
							</div>
							<div style={T(64, {fontWeight: 700, color: colors.amber, marginTop: 20, opacity: onW(f, wf(109, 'number'), 8)})}>
								A NUMBER THE INDUSTRY <span style={{opacity: onW(f, wf(109, 'wrote'), 6)}}>WROTE</span> <span style={{opacity: onW(f, wf(109, 'billing'), 6)}}>FOR BILLING</span>
							</div>
							<div style={T(36, {color: colors.ink, marginTop: 40, opacity: onW(f, wf(109, 'norfolk'), 8)})}>
								NORFOLK SOUTHERN <span style={{opacity: onW(f, wf(109, 'says'), 6)}}>SAYS IT COMBINED IT</span> <span style={{opacity: onW(f, wf(109, 'experience'), 6)}}>WITH ITS OWN EXPERIENCE · NTSB P. 106</span>
							</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			<VerdictCard
				f={f}
				fps={fps}
				n={1}
				start={sf(110) - 10}
				end={ef(111) + 110}
				head="A CLAIM YOU WILL FIND"
				headAt={wf(110, 'claim')}
				head2="IN MANY COMMENT SECTIONS"
				head2At={wf(110, 'comment')}
				quote={[
					['COST', wf(110, 'cost')],
					['CUTTING', wf(110, 'cutting')],
					['CAUSED', wf(110, 'caused')],
					['THIS.', wf(110, 'this')],
				]}
				verdict="THE RECORD CAN'T SAY"
				verdictAt={wf(111, 'say')}
				record="NTSB RIR-24-05 FINDING 3 · P. 103 · SPECIAL INVESTIGATION OPEN"
				recordAt={wf(111, 'record')}
			/>
			<ActTitle n="IV" title="The Cascade" start={ef(111) + 110} end={sf(112) + 24} sub="WHAT HAPPENED INSIDE THE BEARING, AND AFTER" />
		</>
	);
};

const cue = (frame: number, sfx: SfxCue['sfx'], gainDb = -18): SfxCue => ({frame, sfx, gainDb});

export const act3: SceneDef[] = [
	{id: 'a3_rulebook', from: sf(67) - 30, to: C1 + 10, C: Rulebook, cues: [cue(wf(68, 'r'), 'stamp', -22), cue(wf(68, 'defines') - 20, 'paper_slide'), cue(wf(68, 'overheated') - 15, 'highlighter', -22), cue(sf(69) - 10, 'paper_slide'), cue(sf(70) - 10, 'paper_slide')]},
	{id: 'a3_clip1', from: C1 - 14, to: sf(72) + 10, C: Clip1},
	{id: 'a3_question', from: sf(72) - 16, to: C2 + 10, C: Question, cues: [cue(sf(72) - 10, 'paper_slide'), cue(wf(72, 'thresholds') - 15, 'highlighter', -22)]},
	{id: 'a3_clip2', from: C2 - 14, to: sf(73) + 10, C: Clip2},
	{id: 'a3_billing', from: sf(73) - 16, to: sf(76) + 14, C: Billing, cues: [cue(wf(73, 'standard'), 'stamp', -20)]},
	{id: 'a3_nsline', from: sf(76) - 20, to: sf(81) + 14, C: NSLine, cues: [cue(wf(77, 'hundred'), 'quartz_tick'), cue(wf(78, 'seventy'), 'relay_click'), cue(wf(80, 'once'), 'stamp', -22)]},
	{id: 'a3_trade', from: sf(81) - 20, to: sf(85) + 14, C: Trade, cues: [cue(wf(82, 'low'), 'relay_click', -22), cue(wf(83, 'high'), 'relay_click', -22), cue(wf(84, 'balancing') - 15, 'highlighter', -22)]},
	{id: 'a3_plan', from: sf(85) - 20, to: sf(92) + 14, C: Plan, cues: [cue(wf(87, 'norfolk') - 14, 'paper_slide'), cue(wf(89, 'sixty'), 'quartz_tick'), cue(wf(90, 'buybacks') - 15, 'highlighter', -22)]},
	{id: 'a3_filings', from: sf(92) - 20, to: sf(95) + 14, C: Filings, cues: [cue(wf(93, 'sixty-two'), 'quartz_tick'), cue(wf(93, 'hundred', 1), 'quartz_tick'), cue(wf(93, 'percent'), 'stamp', -24), cue(wf(94, 'billion'), 'quartz_tick')]},
	{id: 'a3_car', from: sf(95) - 20, to: sf(103) + 14, C: Car, cues: [cue(wf(96, 'stops'), 'stamp', -20), cue(wf(100, 'checked'), 'relay_click'), cue(wf(101, 'not'), 'relay_click')]},
	{id: 'a3_othercars', from: sf(103) - 20, to: sf(108) + 14, C: OtherCars, cues: [cue(wf(103, 'quarter'), 'quartz_tick'), cue(sf(107) - 10, 'paper_slide')]},
	{id: 'a3_reading', from: sf(108) - 20, to: sf(112) + 30, C: Reading, cues: [cue(wf(108, 'reading'), 'stamp', -24), cue(wf(109, 'stop'), 'highlighter', -24), cue(wf(109, 'number'), 'relay_click', -24), cue(wf(110, 'claim'), 'paper_slide', -22), cue(wf(111, 'say'), 'stamp', -14), cue(ef(111) + 110, 'stamp', -22)]},
];

