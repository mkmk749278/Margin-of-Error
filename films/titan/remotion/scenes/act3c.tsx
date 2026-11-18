import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';

const flashOn = (f: number, at: number): number => flash(f, at, 0);
import {RecordPage} from '../docs';
import {Mount, useFilmFrame} from '../kit';
import {Card, Chip, lit, RealFootage, sans, span, T, vis, Wd} from '../parts';
import {HearingClip, clipOf} from '../parts2';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part C (sentences 159–199): the winter in St. John's, the money, the regulator.
// Choreography: scenes/choreography/act3c.md (generated from this file).

const Note: React.FC<{o: number; children: React.ReactNode; tone?: string; y?: number}> = ({o, children, tone = colors.amber, y = 930}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: 96, right: 96, bottom: 1080 - y - 70, opacity: o, display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
			<div style={{background: 'rgba(18,24,36,0.96)', border: `1px solid ${colors.border}`, borderLeft: `3px solid ${tone}`, padding: '12px 22px', ...T(36, {color: colors.ink}), lineHeight: 1.35, maxWidth: 1680, textAlign: 'center'}}>{children}</div>
		</div>
	);

// ── 1 · The winter: St. John's, the parking lot, the cover never bought (s159–s168, clip: cost) ─────────────────

const Winter: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const harbour = vis(f, sf(160) - 12, ef(162) + 16);
	const page = vis(f, sf(163) - 12, ef(167) + 20);
	const cold = vis(f, sf(168) - 12, ef(169) + 20);
	const lowF = rollTo(f, [{frame: wf(168, 'one') - 12, value: 40}, {frame: wf(168, 'four') + LAND, value: 1.4}]);
	const highF = rollTo(f, [{frame: wf(168, 'eighty-four') - 12, value: 40}, {frame: wf(168, 'two') + LAND, value: 84.2}]);
	const cad = Math.round(rollTo(f, [{frame: wf(163, 'one') - 10, value: 0}, {frame: wf(163, 'thousand') + LAND, value: 1000}, {frame: wf(163, 'seven') + LAND, value: 1700}, {frame: wf(163, 'fifty') + LAND, value: 1750}]));
	return (
		<>
			{harbour > 0 ? (
				<AbsoluteFill style={{opacity: harbour}}>
					<RealFootage f={f} start={sf(160) - 12} end={ef(162) + 26} src="footage/stj_narrows.mp4" date="" what="ST. JOHN'S HARBOUR · REFERENCE, NOT THE BASE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.06} />
					<Card x={96} y={96} w={900} o={lead(f, wf(160, 'spend') - 8, 10)} style={{padding: '22px 28px'}}>
						<div style={{...T(34, {}), fontWeight: 700}}>
							<Wd f={f} at={wf(160, 'spend')} lightAt={wf(160, 'winter')} tone={colors.amber} bold>THE WINTER: </Wd>
							<Wd f={f} at={wf(160, 'somewhere')}>SOMEWHERE</Wd>
						</div>
						<div style={{marginTop: 14, display: 'flex', gap: 14, alignItems: 'center'}}>
							<DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(161, 'twenty-sixth')} monthWord={wf(161, 'july')} fromDay={15} size={30} />
							<Wd f={f} at={wf(161, 'titan')} lightAt={wf(161, 'set')} style={T(30, {})}>TITAN, SET DOWN</Wd>
						</div>
						<div style={{marginTop: 12, ...T(30, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(161, 'parking')} lightAt={wf(161, 'lot')} tone={colors.amber} bold>IN A PARKING LOT · </Wd>
							<Wd f={f} at={wf(161, 'marine')} lightAt={wf(161, 'base')}>A MARINE BASE · </Wd>
							<Wd f={f} at={wf(161, 'saint')} lightAt={wf(161, 'newfoundland')}>ST. JOHN'S</Wd>
						</div>
						<div style={{marginTop: 14, opacity: lead(f, wf(162, 'uncovered'), 8), transform: `scale(${bump(f, fps, wf(162, 'uncovered') + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
							<Chip text="UNCOVERED" tone={colors.red} size={40} />
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			{page > 0 ? (
				<AbsoluteFill style={{opacity: page}}>
					<RecordPage set="roi" start={sf(163) - 12} end={ef(167) + 20} page={322} hl={[{key: 'cover', at: wf(163, 'quote')}, {key: 'noreply', at: wf(164, 'never')}]} label="EXHIBIT" title="STORAGE" pushTo={wf(163, 'protective')} />
					<div style={{position: 'absolute', right: 96, top: 84, display: 'flex', gap: 14, alignItems: 'center', opacity: lead(f, wf(163, 'two'), 8)}}>
						<DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(163, 'later')} fromDay={26} size={30} />
						<span style={{...T(44, {color: f >= wf(163, 'fifty') + LAND ? colors.amber : colors.sub, fontWeight: 700}), background: colors.card, border: `1px solid ${colors.border}`, padding: '2px 12px', opacity: lead(f, wf(163, 'one'), 8), display: 'inline-block', transform: `scale(${bump(f, fps, wf(163, 'fifty') + LAND).toFixed(4)})`}}>
							CA${cad.toLocaleString('en-US')}
						</span>
					</div>
					<Note o={vis(f, sf(163), ef(167) + 10)}>
						{f < sf(165) - 6 ? (
							<>
								<Wd f={f} at={wf(163, 'base')} lightAt={wf(163, 'passed')}>THE BASE PASSED ON </Wd>
								<Wd f={f} at={wf(163, 'quote')} lightAt={wf(163, 'cover')} tone={colors.amber}>A QUOTE FOR A COVER: </Wd>
								<Wd f={f} at={wf(163, 'canadian')} lightAt={wf(163, 'dollars')} tone={colors.amber} bold>CA$1,750 · </Wd>
								<Wd f={f} at={wf(164, 'told')} lightAt={wf(164, 'board')}>IT TOLD THE BOARD: </Wd>
								<Wd f={f} at={wf(164, 'oceangate')} lightAt={wf(164, 'answered')} tone={colors.red}>NEVER ANSWERED</Wd>
								<Wd f={f} at={wf(164, 'email')}> THAT EMAIL</Wd>
							</>
						) : (
							<>
								<Wd f={f} at={wf(165, 'september')} tone={colors.amber} bold>SEPTEMBER: </Wd>
								<Wd f={f} at={wf(165, 'wrote')} lightAt={wf(165, 'again')}>THE BASE WROTE AGAIN · </Wd>
								<Wd f={f} at={wf(165, 'still')} lightAt={wf(165, 'covered')} tone={colors.red}>STILL NOT COVERED · </Wd>
								<Wd f={f} at={wf(166, "oceangate's")} lightAt={wf(166, 'director')}>LOGISTICS DIRECTOR: </Wd>
								<Wd f={f} at={wf(166, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </Wd>
								<Wd f={f} at={wf(167, 'board')} lightAt={wf(167, 'found')}>THE BOARD: </Wd>
								<Wd f={f} at={wf(167, 'no')} lightAt={wf(167, 'followed')} tone={colors.red} bold>NO ACTION FOLLOWED</Wd>
							</>
						)}
					</Note>
				</AbsoluteFill>
			) : null}
			{cold > 0 ? (
				<AbsoluteFill style={{opacity: cold}}>
					<RealFootage f={f} start={sf(168) - 12} end={wf(168, 'freezing') + 4} src="footage/stj_ice.mp4" date="" what="ST. JOHN'S HARBOUR IN WINTER · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<RealFootage f={f} start={wf(168, 'freezing') - 10} end={ef(169) + 30} src="footage/stj_snow.mp4" date="" what="ST. JOHN'S AFTER SNOWFALL · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<Card x={96} y={96} w={820} o={lead(f, wf(168, 'stayed') - 8, 10)} style={{padding: '22px 28px'}}>
						<div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
							<Wd f={f} at={wf(168, 'stayed')} lightAt={wf(168, 'outside')} tone={colors.red} bold style={T(32, {})}>OUTSIDE UNTIL </Wd>
							<DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(168, 'sixth')} monthWord={wf(168, 'february')} size={30} />
						</div>
						<div style={{marginTop: 16, display: 'flex', gap: 18, alignItems: 'baseline'}}>
							<Wd f={f} at={wf(168, 'temperatures')} style={T(28, {})}>TEMPERATURES </Wd>
							<span style={{...T(56, {color: f >= wf(168, 'four') + LAND ? colors.cyan : colors.sub, fontWeight: 700}), opacity: lead(f, wf(168, 'one'), 8)}}>{lowF.toFixed(1)}°F</span>
							<span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(168, 'to'), 8)}}>→</span>
							<span style={{...T(56, {color: f >= wf(168, 'two') + LAND ? colors.amber : colors.sub, fontWeight: 700}), opacity: lead(f, wf(168, 'eighty-four'), 8), textShadow: `0 0 ${(14 * flashOn(f, wf(168, 'fahrenheit'))).toFixed(1)}px ${colors.amber}`}}>{highF.toFixed(1)}°F</span>
						</div>
						<div style={{marginTop: 6, ...T(30, {})}}>
							<Wd f={f} at={wf(168, 'minus')} lightAt={wf(168, 'seventeen')} tone={colors.cyan}>−17°C </Wd>
							<Wd f={f} at={wf(168, 'twenty-nine')} lightAt={wf(168, 'celsius')} tone={colors.amber}>→ 29°C</Wd>
						</div>
						<div style={{marginTop: 14, ...T(32, {}), fontWeight: 700}}>
							<Wd f={f} at={wf(168, 'freezing')} lightAt={wf(168, 'rain')} tone={colors.cyan} bold>FREEZING RAIN · </Wd>
							<Wd f={f} at={wf(168, 'sleet')} tone={colors.cyan} bold>SLEET · </Wd>
							<Wd f={f} at={wf(168, 'snow')} tone={colors.cyan} bold>SNOW</Wd>
						</div>
						<div style={{marginTop: 18, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(169, 'brooks')} lightAt={wf(169, 'testified')}>BROOKS: </Wd>
							<Wd f={f} at={wf(169, 'what')} lightAt={wf(169, 'really')}>WHAT THEY REALLY </Wd><Wd f={f} at={wf(169, 'wanted')} lightAt={wf(169, 'bring')}>WANTED: BRING IT </Wd>
							<Wd f={f} at={wf(169, 'back')} lightAt={wf(169, 'everett')} tone={colors.cyan}>BACK TO EVERETT, </Wd>
							<Wd f={f} at={wf(169, 'pull')} lightAt={wf(169, 'insert')}>PULL THE INSERT, </Wd>
							<Wd f={f} at={wf(169, 'look')} lightAt={wf(169, 'cracks')} tone={colors.amber}>LOOK INSIDE FOR CRACKS</Wd>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_cost" />
		</>
	);
};

// ── 2 · Money (s170–s186, clip: safety) ─────────────────────────────────────────────────────────────────────────

const Money: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const q = vis(f, sf(171) - 8, ef(171) + 14);
	const m185 = rollTo(f, [{frame: wf(174, 'one') - 10, value: 0}, {frame: wf(174, 'eight') + LAND, value: 1.8}, {frame: wf(174, 'five') + LAND, value: 1.85}]);
	const ships = vis(f, sf(176) - 10, ef(177) + 20);
	const pp = span(f, wf(177, 'smaller') - 10, wf(177, 'ship') + 10);
	const tow = span(f, wf(177, 'towed') - 4, wf(177, 'site') + 20);
	const leave = vis(f, sf(178) - 10, clipOf('h_brooks_safety').gapStartFrame);
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink}}>
					<Wd f={f} at={wf(171, 'was')} base={colors.ink}>Was </Wd>
					<Wd f={f} at={wf(171, 'money')} tone={colors.amber}>money </Wd>
					<Wd f={f} at={wf(171, 'behind')} lightAt={wf(171, 'decisions')} base={colors.ink}>behind these decisions?</Wd>
				</div>
			</AbsoluteFill>
			<RecordPage set="roi" start={sf(172) - 14} end={ef(173) + 20} hl={[{key: 'troubling', at: wf(172, 'troubling')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(172, 'words')} />
			<Note o={vis(f, sf(172), ef(173) + 10)}>
				<Wd f={f} at={wf(172, 'coast')} lightAt={wf(172, 'board')}>THE COAST GUARD BOARD: </Wd>
				<Wd f={f} at={wf(172, 'says')} lightAt={wf(172, 'was')} tone={colors.amber} bold>YES · </Wd>
				<Wd f={f} at={wf(172, 'troubling')} lightAt={wf(172, 'prioritization')} tone={colors.amber}>"A TROUBLING PRIORITIZATION OF </Wd>
				<Wd f={f} at={wf(172, 'cost')} lightAt={wf(172, 'measures')} tone={colors.amber}>COST AND TIME-SAVING MEASURES </Wd>
				<Wd f={f} at={wf(172, 'over')} lightAt={wf(172, 'safety')} tone={colors.red}>OVER SAFETY" · </Wd>
				<Wd f={f} at={wf(173, 'n')} lightAt={wf(173, 'findings')} tone={colors.cyan}>THE NTSB'S FINDINGS: </Wd>
				<Wd f={f} at={wf(173, 'not')} lightAt={wf(173, 'money')} tone={colors.cyan}>DO NOT ADDRESS MONEY</Wd>
			</Note>
			<RecordPage set="roi" start={sf(174) - 14} end={ef(174) + 14} hl={[{key: 'advanced', at: wf(174, 'advanced')}]} label="EXHIBIT" title="FINANCES" pushTo={wf(174, 'chief')} />
			<RecordPage set="roi" start={sf(175) - 14} end={ef(175) + 20} hl={[{key: 'forgo', at: wf(175, 'forgo')}]} label="EXHIBIT" title="FINANCES" pushTo={wf(175, 'asked')} />
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(174, 'june') - 6, ef(175) + 14), display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10}}>
				<div style={{...T(30, {}), whiteSpace: 'nowrap', background: colors.card, border: `1px solid ${colors.border}`, padding: '6px 12px'}}>
					<Wd f={f} at={wf(174, 'june')} lightAt={wf(174, 'twenty-two')} tone={colors.ink}>JUN 2022 </Wd>
					<Wd f={f} at={wf(174, 'may')} lightAt={wf(174, 'twenty-three')} tone={colors.ink}>→ MAY 2023</Wd>
				</div>
				<span style={{...T(64, {color: colors.amber, fontWeight: 700}), opacity: lead(f, wf(174, 'one'), 8), background: colors.card, border: `1px solid ${colors.border}`, padding: '4px 14px', display: 'inline-block', transform: `scale(${bump(f, fps, wf(174, 'million') + LAND).toFixed(4)})`, transformOrigin: '100% 50%'}}>
					${m185.toFixed(2)}{f >= wf(174, 'million') - 4 ? 'M' : ''}
				</span>
			</div>
			<Note o={vis(f, sf(174), ef(175) + 10)}>
				<Wd f={f} at={wf(174, 'board')} lightAt={wf(174, 'found')}>THE BOARD FOUND: </Wd>
				<Wd f={f} at={wf(174, 'chief')} lightAt={wf(174, 'advanced')} tone={colors.amber}>THE CEO ADVANCED THE COMPANY </Wd>
				<Wd f={f} at={wf(174, 'one')} lightAt={wf(174, 'dollars')} tone={colors.amber} bold>$1.85 MILLION</Wd>
				{f >= sf(175) - 6 ? (
					<>
						<Wd f={f} at={wf(175, 'employees')}> · EMPLOYEES </Wd>
						<Wd f={f} at={wf(175, 'asked')} lightAt={wf(175, 'forgo')} tone={colors.red}>ASKED TO FORGO </Wd><Wd f={f} at={wf(175, 'salaries')} tone={colors.red}>SALARIES · </Wd>
						<Wd f={f} at={wf(175, 'promise')} lightAt={wf(175, 'pay')}>BACK PAY PROMISED · </Wd>
						<Wd f={f} at={wf(175, 'pay')} tone={colors.ink}>BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779</Wd>
					</>
				) : null}
			</Note>
			{ships > 0 ? (
				<AbsoluteFill style={{opacity: ships}}>
					<Mount x={140} y={150} w={1640} h={720} start={sf(176) - 10} end={ef(177) + 20} source="SHIPS AND THE TOW: USCG MBI REPORT · LENGTHS: NTSB MIR-25-36, TABLE E-2" labels={['LENGTHS TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* Horizon Arctic 93.6 m vs Polar Prince 67.2 m, 12 px per metre */}
						<g opacity={lead(f, wf(176, 'ship'), 10)}>
							<rect x={260} y={330} width={93.6 * 12} height={56} fill={colors.cyan} opacity={f >= wf(176, 'unavailable') ? 0.25 : 0.8} />
							<text x={260} y={316} style={T(30, {fill: colors.ink})}>HORIZON ARCTIC · 93.6 M</text>
							{f >= wf(176, 'unavailable') ? <text x={260 + 93.6 * 12 + 20} y={368} style={T(30, {fill: colors.red, fontWeight: 700})}>UNAVAILABLE 2023</text> : null}
						</g>
						<g opacity={pp}>
							<rect x={260} y={520} width={67.2 * 12 * pp} height={56} fill={colors.amber} opacity={0.85} />
							<text x={260} y={506} style={T(30, {fill: colors.ink})}>POLAR PRINCE · 67.2 M</text>
						</g>
						{/* the platform on a towline behind the smaller ship */}
						<g opacity={tow}>
							<line x1={260 + 67.2 * 12} x2={260 + 67.2 * 12 + 360 * tow} y1={548} y2={548} stroke={colors.ink} strokeWidth={3} strokeDasharray="10 8" />
							<rect x={260 + 67.2 * 12 + 360 * tow} y={530} width={140} height={36} fill="none" stroke={colors.amber} strokeWidth={3} />
							<text x={260 + 67.2 * 12 + 360 * tow} y={612} style={T(28, {fill: colors.amber})}>LAUNCH PLATFORM, TOWED</text>
						</g>
					</svg>
					<div style={{position: 'absolute', left: 260, top: 700, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(176, 'ship')} lightAt={wf(176, 'carried')}>THE SHIP THAT HAD CARRIED TITAN: </Wd>
						<Wd f={f} at={wf(176, 'unavailable')} lightAt={wf(176, 'twenty-three')} tone={colors.red}>UNAVAILABLE FOR 2023</Wd>
						<Wd f={f} at={wf(176, 'board')} lightAt={wf(176, 'found')}> · THE BOARD</Wd>
						<br />
						<Wd f={f} at={wf(177, 'towed')} lightAt={wf(177, 'site')} tone={colors.amber}>TOWED TO THE SITE </Wd>
						<Wd f={f} at={wf(177, 'launch')} lightAt={wf(177, 'platform')}>ON ITS LAUNCH PLATFORM, </Wd>
						<Wd f={f} at={wf(177, 'behind')} lightAt={wf(177, 'ship')} tone={colors.amber}>BEHIND A SMALLER SHIP</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{leave > 0 ? (
				<AbsoluteFill style={{opacity: leave}}>
					<RealFootage f={f} start={sf(178) - 10} end={clipOf('h_brooks_safety').gapStartFrame + 10} src="footage/h_brooks_oath.mp4" from={20} date="23 SEP 2024" what="MARINE BOARD HEARING" source="USCG · PUBLIC DOMAIN" push={0.04} focus={[0.62, 0.4]} box={{x: 96, y: 110, w: 1120, h: 630}} under />
					<div style={{position: 'absolute', left: 1250, top: 120, width: 574, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(178, 'early')} lightAt={wf(178, 'twenty-three')} tone={colors.amber} bold>EARLY 2023: </Wd>
						<Wd f={f} at={wf(178, 'brooks')} lightAt={wf(178, 'left')} tone={colors.red} bold>BROOKS LEFT</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(179, 'under')} lightAt={wf(179, 'oath')} tone={colors.cyan}>UNDER OATH · </Wd>
						<Wd f={f} at={wf(179, 'main')} lightAt={wf(179, 'reason')}>HIS MAIN REASON: </Wd>
						<br />
						<Wd f={f} at={wf(179, 'plan')} lightAt={wf(179, 'tow')} tone={colors.amber}>THE PLAN TO TOW TITAN · </Wd>
						<Wd f={f} at={wf(179, 'which')} lightAt={wf(179, 'meant')}>MEANING: </Wd><Wd f={f} at={wf(179, 'working')} lightAt={wf(179, 'platform')}>WORKING ON ITS PLATFORM </Wd>
						<Wd f={f} at={wf(179, 'open')} lightAt={wf(179, 'seas')} tone={colors.amber}>IN OPEN SEAS</Wd>
						<br />
						<Wd f={f} at={wf(179, 'reasons')} lightAt={wf(179, 'economic')} tone={colors.red} bold>THE REASONS: "ECONOMIC"</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_safety" />
			<RecordPage set="cg112" start={sf(182) - 14} end={ef(182) + 20} hl={[{key: 'paid', at: wf(182, 'paid')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(182, 'told')} />
			<Note o={vis(f, sf(182), ef(182) + 10)}>
				<Wd f={f} at={wf(182, 'suggested')} lightAt={wf(182, 'go')}>HE SUGGESTED THEY NOT GO · </Wd>
				<Wd f={f} at={wf(182, 'told')} lightAt={wf(182, 'possible')} tone={colors.red}>"WASN'T POSSIBLE" · </Wd>
				<Wd f={f} at={wf(182, 'people')} lightAt={wf(182, 'paid')} tone={colors.amber} bold>"THEY HAD PEOPLE THAT PAID"</Wd>
			</Note>
			<RecordPage set="roi" start={sf(183) - 14} end={ef(185) + 20} hl={[{key: 'unhindered', at: wf(183, 'unhindered')}, {key: 'removedpossibility', at: wf(185, 'removed')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(183, 'vacant')} />
			<Note o={vis(f, sf(183), ef(185) + 10)}>
				{f < sf(184) - 6 ? (
					<>
						<Wd f={f} at={wf(183, 'board')} lightAt={wf(183, 'found')}>THE BOARD: </Wd>
						<Wd f={f} at={wf(183, 'chief')} lightAt={wf(183, 'executive')}>THE CEO LEFT </Wd>
						<Wd f={f} at={wf(183, 'director')} lightAt={wf(183, 'post')} tone={colors.amber}>THE DIRECTOR OF ENGINEERING POST </Wd>
						<Wd f={f} at={wf(183, 'vacant')} tone={colors.red} bold>VACANT · </Wd>
						<Wd f={f} at={wf(183, 'words')}>IN ITS WORDS: </Wd><Wd f={f} at={wf(183, 'ensure')} lightAt={wf(183, 'twenty-three')}>"TO ENSURE THE 2023 </Wd><Wd f={f} at={wf(183, 'expedition')}>EXPEDITION </Wd>
						<Wd f={f} at={wf(183, 'proceeded')} lightAt={wf(183, 'unhindered')} tone={colors.amber}>PROCEEDED UNHINDERED"</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(184, 'drew')} lightAt={wf(184, 'line')}>THE LINE BACK TO </Wd>
						<Wd f={f} at={wf(184, 'twenty')} lightAt={wf(184, 'nineteen')} tone={colors.amber} bold>2019: </Wd>
						<Wd f={f} at={wf(184, 'by')} lightAt={wf(184, 'own')}>BY HIS OWN TESTIMONY, </Wd><Wd f={f} at={wf(184, 'first')} lightAt={wf(184, 'engineering')}>THE FIRST DIRECTOR OF ENGINEERING </Wd>
						<Wd f={f} at={wf(184, 'kept')} tone={colors.cyan}>KEPT </Wd><Wd f={f} at={wf(184, 'damaged')} lightAt={wf(184, 'hull')} tone={colors.cyan}>A DAMAGED HULL </Wd><Wd f={f} at={wf(184, 'expedition')} tone={colors.cyan}>FROM AN EXPEDITION · </Wd>
						<Wd f={f} at={wf(185, 'leaving')} lightAt={wf(185, 'empty')} tone={colors.red}>THE EMPTY POST </Wd>
						<Wd f={f} at={wf(185, 'removed')} lightAt={wf(185, 'possibility')} tone={colors.red}>REMOVED THE POSSIBILITY </Wd>
						<Wd f={f} at={wf(185, 'replacement')} lightAt={wf(185, 'blocking')}>OF A REPLACEMENT BLOCKING IT</Wd>
					</>
				)}
			</Note>
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(184, 'testimony') - 6, ef(185) + 10)}}>
				<Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28} style={{transform: `scale(${bump(f, fps, wf(184, 'testimony') + LAND, 0.05).toFixed(4)})`}} />
			</div>
		</>
	);
};

// ── 3 · The tow, the platform tipping (s185–s186) ───────────────────────────────────────────────────────────────

const Tipping: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const tilt = span(f, wf(186, 'tipped') - 4, wf(186, 'tipped') + 18) * (1 - span(f, wf(186, 'once') + 10, wf(187, 'once') + 10));
	const under = span(f, wf(187, 'under') - 6, wf(187, 'water') + 12);
	const lost = lead(f, wf(187, 'lost'), 8);
	const angle = -9 * tilt - 14 * under;
	return (
		<>
			<Mount x={140} y={130} w={1640} h={780} start={sf(186) - 10} end={ef(187) + 30} source="PLATFORM UPSETS, SPRING 2023 · USCG MBI REPORT" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{/* the sea line */}
				<path d={`M 200 ${560} ${Array.from({length: 30}).map((_, i) => `Q ${215 + i * 50} ${548 + (i % 2 ? 10 : -10)} ${240 + i * 50} 560`).join(' ')}`} fill="none" stroke={colors.cyan} strokeWidth={3} />
				<g transform={`translate(960 560) rotate(${angle.toFixed(2)})`}>
					{/* platform */}
					<rect x={-330} y={-10} width={660} height={36} fill="none" stroke={colors.amber} strokeWidth={4} />
					{/* Titan on the platform: hull, tail cone */}
					<rect x={-230} y={-96} width={380} height={86} rx={40} fill="none" stroke={colors.ink} strokeWidth={3} />
					<path d={`M 150 -86 L 250 -53 L 150 -20 Z`} fill="none" stroke={lost > 0.5 ? colors.red : colors.ink} strokeWidth={3} opacity={1 - 0.8 * lost} strokeDasharray={lost > 0.5 ? '6 6' : undefined} />
				</g>
				{lost > 0 ? (
					<text x={1240} y={420} style={T(34, {fill: colors.red, fontWeight: 700})} opacity={lost}>
						TAIL CONE LOST
					</text>
				) : null}
			</svg>
			<div style={{position: 'absolute', left: 220, top: 190, ...T(32, {}), lineHeight: 1.5}}>
				<Wd f={f} at={wf(186, 'spring')} lightAt={wf(186, 'spring')} tone={colors.amber} bold>SPRING 2023 · </Wd>
				<Wd f={f} at={wf(186, 'sea')}>AT SEA </Wd>
				<Wd f={f} at={wf(186, 'port')}>AND IN PORT: </Wd>
				<Wd f={f} at={wf(186, 'platform')} lightAt={wf(186, 'tipped')} tone={colors.red}>THE PLATFORM TIPPED </Wd>
				<Wd f={f} at={wf(186, 'more')} lightAt={wf(186, 'once')}>MORE THAN ONCE</Wd>
			</div>
			<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 16, alignItems: 'center'}}>
				<span style={{opacity: lead(f, wf(187, 'may'), 8)}}>
					<DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(187, 'may')} fromDay={1} size={30} />
				</span>
				<Wd f={f} at={wf(187, 'bow')} lightAt={wf(187, 'water')} tone={colors.red} style={T(32, {})}>ITS BOW PARTLY UNDER WATER · </Wd>
				<Wd f={f} at={wf(187, "titan's")} lightAt={wf(187, 'cone')} style={T(32, {})}>TITAN'S TAIL CONE: </Wd>
				<span style={{opacity: lost, transform: `scale(${bump(f, fps, wf(187, 'lost') + LAND).toFixed(4)})`, display: 'inline-block'}}>
					<Chip text="LOST" tone={colors.red} size={34} />
				</span>
			</div>
		</>
	);
};

// ── 4 · How was it allowed? The law, the words, the guidance, the rescue (s187–s199) ───────────────────────────

const Law: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const q = vis(f, sf(188) - 8, ef(188) + 14);
	const law = vis(f, sf(189) - 10, ef(189) + 14);
	const timeline = vis(f, sf(193) - 10, ef(197) + 20);
	const rescue = vis(f, sf(198) - 10, ef(199) + 20);
	const X = (y: number) => 300 + (y - 1993) * 42;
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 60, color: colors.ink}}>
					<Wd f={f} at={wf(188, 'how')} base={colors.ink}>How was a hull like this </Wd>
					<Wd f={f} at={wf(188, 'allowed')} tone={colors.amber}>allowed </Wd>
					<Wd f={f} at={wf(188, 'carry')} lightAt={wf(188, 'passengers')} tone={colors.amber}>to carry passengers?</Wd>
				</div>
			</AbsoluteFill>
			{law > 0 ? (
				<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: law}}>
					<div style={{fontFamily: sans, fontWeight: 700, fontSize: 56, color: colors.ink, textAlign: 'center', lineHeight: 1.3}}>
						<Wd f={f} at={wf(189, 'n')} lightAt={wf(189, 'reading')} base={colors.ink} tone={colors.cyan}>By the NTSB's reading </Wd>
						<Wd f={f} at={wf(189, 'law')} base={colors.ink} tone={colors.cyan}>of the law,</Wd>
						<br />
						<Wd f={f} at={wf(189, 'not')} base={colors.ink} tone={colors.red}>it was not.</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{/* the law in the NTSB's own words (forensic v2, idea 1): the page, highlighted on the sentence that says it */}
			<RecordPage set="mir" start={sf(190) - 14} end={ef(191) + 20} page={68} hl={[{key: 'pvsa', at: wf(190, 'submersible')}]} label="EXHIBIT" title="2.6 · OVERSIGHT" pushTo={wf(190, 'submersible')} />
			<Note o={vis(f, sf(190) + 10, ef(191) + 10)} tone={colors.cyan}>
				{f < sf(191) - 4 ? (
					<>
						<Wd f={f} at={wf(190, 'u')} lightAt={wf(190, 'law')}>U.S. LAW, </Wd><Wd f={f} at={wf(190, 'n')} lightAt={wf(190, 'notes')} tone={colors.cyan}>THE NTSB NOTES: </Wd>
						<Wd f={f} at={wf(190, 'submersible')} lightAt={wf(190, 'carrying')}>A SUBMERSIBLE CARRYING </Wd>
						<br />
						<Wd f={f} at={wf(190, 'even')} lightAt={wf(190, 'one')} tone={colors.amber} bold>EVEN ONE </Wd>
						<Wd f={f} at={wf(190, 'passenger')} lightAt={wf(190, 'hire')} tone={colors.amber}>PASSENGER FOR HIRE </Wd>
						<Wd f={f} at={wf(190, 'is')} lightAt={wf(190, 'vessel')}>IS A SMALL PASSENGER VESSEL</Wd>
						<br />
						<Wd f={f} at={wf(190, 'must')} lightAt={wf(190, 'inspected')} tone={colors.cyan} bold>MUST BE INSPECTED </Wd>
						<Wd f={f} at={wf(190, 'by')} lightAt={wf(190, 'guard')} tone={colors.cyan}>BY THE COAST GUARD</Wd>
					</>
				) : (
					<span style={{display: 'inline-flex', gap: 18, alignItems: 'center'}}>
						<Wd f={f} at={wf(191, 'oceangate')} lightAt={wf(191, 'titan')}>OCEANGATE · TITAN: </Wd>
						<span style={{opacity: lead(f, wf(191, 'registered'), 8), transform: `scale(${bump(f, fps, wf(191, 'registered') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
							<Chip text="NEVER REGISTERED" tone={colors.red} size={34} />
						</span>
						<span style={{opacity: lead(f, wf(191, 'inspection'), 8), transform: `scale(${bump(f, fps, wf(191, 'inspection') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
							<Chip text={f >= wf(191, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION'} tone={colors.red} size={34} />
						</span>
					</span>
				)}
			</Note>
			<RecordPage set="roi" start={sf(192) - 14} end={ef(192) + 20} hl={[{key: 'c53', at: wf(192, 'conceal')}]} label="EXHIBIT" title="SEC. 5.18" pushTo={wf(192, 'mission')} />
			<Note o={vis(f, sf(192), ef(192) + 10)}>
				<Wd f={f} at={wf(192, 'board')} lightAt={wf(192, 'found')}>THE BOARD FOUND: </Wd>
				<Wd f={f} at={wf(192, 'oceangate')} lightAt={wf(192, 'described')}>OCEANGATE DESCRIBED </Wd><Wd f={f} at={wf(192, 'paying')} lightAt={wf(192, 'passengers')}>PAYING PASSENGERS AS </Wd>
				<Wd f={f} at={wf(192, 'mission')} lightAt={wf(192, 'specialists')} tone={colors.amber} bold>"MISSION SPECIALISTS" </Wd>
				<Wd f={f} at={wf(192, 'mandatory')} lightAt={wf(192, 'duties')}>WITH MANDATORY DUTIES · </Wd>
				<Wd f={f} at={wf(192, 'conceal')} tone={colors.red}>TO CONCEAL </Wd><Wd f={f} at={wf(192, 'they')} lightAt={wf(192, 'passengers', 1)} tone={colors.red}>THAT THEY WERE PAYING PASSENGERS</Wd>
			</Note>
			{timeline > 0 ? (
				<AbsoluteFill style={{opacity: timeline}}>
					<Mount x={140} y={150} w={1640} h={760} start={sf(193) - 10} end={ef(197) + 20} source="NVIC 05-93 AND THE 1993 LAW: NTSB MIR-25-36 · USCG MBI REPORT" labels={[]} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 200, ...T(34, {}), fontWeight: 700}}>
						<Wd f={f} at={wf(193, "regulator's")} lightAt={wf(193, 'guidance')} tone={colors.cyan}>THE REGULATOR'S OWN GUIDANCE: </Wd>
						<Wd f={f} at={wf(193, 'same')} lightAt={wf(193, 'scrutiny')}>THE SAME SCRUTINY</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(196, 'october') - 30, wf(196, 'twenty-five') + 10)} y1={520} y2={520} stroke={colors.sub} strokeWidth={3} />
						<line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={colors.sub} strokeWidth={3} opacity={lead(f, wf(194, 'july'), 8)} />
						{/* JUL 1993 guidance; DEC 1993 the law changes */}
						<g opacity={lead(f, wf(194, 'coast'), 8)}>
							<circle cx={X(1993)} cy={520} r={16} fill={colors.cyan} />
							<text x={X(1993) - 20} y={420} style={T(30, lit(f, wf(194, 'ninety-three'), colors.cyan))}>JUL <tspan style={lit(f, wf(194, 'nineteen'), colors.cyan)}>1993</tspan></text>
							<text x={X(1993) - 20} y={590} style={T(28, lit(f, wf(194, 'voluntary'), colors.ink))}>VOLUNTARY GUIDANCE</text>
							<text x={X(1993) - 20} y={626} style={T(28, lit(f, wf(194, 'passenger'), colors.ink))}>NVIC 05-93 · <tspan style={lit(f, wf(194, 'submersibles'), colors.ink)}>PASSENGER SUBMERSIBLES</tspan></text>
							<text x={X(1993) - 20} y={662} style={T(26, lit(f, wf(194, 'published'), colors.cyan))} opacity={lead(f, wf(194, 'published'), 8)}>PUBLISHED</text>
						</g>
						<g opacity={lead(f, wf(195, 'december'), 8)}>
							<circle cx={X(1993) + 64} cy={520} r={16} fill={colors.amber} />
							<text x={X(1993) + 120} y={470} style={T(30, {fill: colors.amber, fontWeight: 700})}>DEC 1993 · <tspan style={lit(f, wf(195, 'law'), colors.amber, colors.ink)}>A NEW LAW</tspan> <tspan style={lit(f, wf(195, 'definition'), colors.amber, colors.ink)}>CHANGES THE DEFINITION</tspan></text>
							<text x={X(1993) + 120} y={720} style={T(28, lit(f, wf(195, 'one'), colors.amber, colors.ink))} opacity={lead(f, wf(195, 'cover'), 8)}>ANY <tspan style={lit(f, wf(195, 'submersible'), colors.amber, colors.ink)}>SUBMERSIBLE</tspan>, ONE PASSENGER FOR HIRE</text>
						</g>
						<g opacity={lead(f, wf(196, 'october'), 8)}>
							<circle cx={X(2025)} cy={520} r={16} fill={colors.red} />
							<text x={X(2025)} y={470} textAnchor="end" style={T(30, {fill: colors.red, fontWeight: 700})}>OCT 2025</text>
							<text x={X(2025)} y={590} textAnchor="end" style={T(30, lit(f, wf(196, 'never'), colors.red))}>GUIDANCE NEVER UPDATED</text>
						</g>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 760, width: 1480, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(196, 'n')} lightAt={wf(196, 'found')} tone={colors.cyan}>NTSB · </Wd>
						<Wd f={f} at={wf(196, 'updated')} lightAt={wf(196, 'match')}>NOT UPDATED TO MATCH · </Wd>
						<Wd f={f} at={wf(197, 'coast')} lightAt={wf(197, 'found')}>THE COAST GUARD: </Wd><Wd f={f} at={wf(197, 'no')} lightAt={wf(197, 'specific')} tone={colors.red}>NO SPECIFIC </Wd><Wd f={f} at={wf(197, 'inspection')} lightAt={wf(197, 'standards')} tone={colors.red}>INSPECTION STANDARDS </Wd><Wd f={f} at={wf(197, 'how')}>· </Wd>
						<Wd f={f} at={wf(197, 'designed')} lightAt={wf(197, 'built')}>FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{rescue > 0 ? (
				<AbsoluteFill style={{opacity: rescue}}>
					<Mount x={140} y={130} w={1640} h={800} start={sf(198) - 10} end={ef(199) + 20} source="NVIC 05-93 RECOMMENDATION · NTSB MIR-25-36" labels={['DEPTHS TO SCALE']} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 170, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(198, 'guidance')} lightAt={wf(198, 'recommended')}>THE GUIDANCE RECOMMENDED: </Wd>
						<Wd f={f} at={wf(198, 'submersible')} lightAt={wf(198, 'dive')} tone={colors.cyan}>DIVE </Wd><Wd f={f} at={wf(198, 'deeper')} lightAt={wf(198, 'reach')} tone={colors.cyan}>NO DEEPER THAN RESCUE CAN REACH</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* to scale: 0–4,000 m over 560 px */}
						<line x1={300} x2={1700} y1={340} y2={340} stroke={colors.sub} strokeWidth={2} />
						<rect x={420} y={340} width={70} height={(45 / 4000) * 480 * lead(f, wf(198, 'rescue'), 14) + 3} fill={colors.cyan} />
						<text x={510} y={370} style={T(28, {fill: colors.cyan})} opacity={lead(f, wf(198, 'rescue'), 10)}>45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93)</text>
						<rect x={1560} y={340} width={70} height={480 * span(f, wf(199, 'regularly') - 6, wf(199, 'titanic') + 10) * (3840 / 4000)} fill={colors.amber} />
						<text x={1540} y={340 + 480 * 0.96} textAnchor="end" style={T(30, {fill: colors.amber, fontWeight: 700})} opacity={lead(f, wf(199, 'titanic'), 8)}>3,840 M · THE TITANIC</text>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 240, ...T(30, {})}}>
						<Wd f={f} at={wf(199, 'n')} lightAt={wf(199, 'found')} tone={colors.cyan}>NTSB: </Wd>
						<Wd f={f} at={wf(199, 'titan')} lightAt={wf(199, 'dived')}>TITAN REGULARLY DIVED THERE </Wd>
						<Wd f={f} at={wf(199, 'no')} lightAt={wf(199, 'rescue')} tone={colors.red}>WITH NO RESCUE </Wd>
						<Wd f={f} at={wf(199, 'standing')} lightAt={wf(199, 'reach')} tone={colors.red}>STANDING BY THAT COULD REACH IT</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(200) - 14} end={hold(200).from + hold(200).frames + 10} hl={[{key: 'insufficient_es', at: wf(200, 'insufficient')}]} label="FINDING" title="CONTRIBUTING" pushTo={wf(200, 'guidance')} />
			<Note o={vis(f, sf(200), hold(200).from + hold(200).frames)}>
				<Wd f={f} at={wf(200, 'n')} lightAt={wf(200, 'found')} tone={colors.cyan}>NTSB: </Wd>
				<Wd f={f} at={wf(200, 'voluntary')} lightAt={wf(200, 'guidance')}>VOLUNTARY GUIDANCE </Wd>
				<Wd f={f} at={wf(200, 'rules')} lightAt={wf(200, 'vessels')}>AND SMALL-PASSENGER-VESSEL RULES </Wd>
				<Wd f={f} at={wf(200, 'insufficient')} tone={colors.red} bold>INSUFFICIENT </Wd>
				<Wd f={f} at={wf(200, 'make')} lightAt={wf(200, 'oceangate')}>TO MAKE OCEANGATE </Wd>
				<Wd f={f} at={wf(200, 'follow')} lightAt={wf(200, "industry's")} tone={colors.amber}>FOLLOW THE INDUSTRY'S </Wd><Wd f={f} at={wf(200, 'established')} lightAt={wf(200, 'standards')} tone={colors.amber}>STANDARDS</Wd>
			</Note>
		</>
	);
};

export const act3c: SceneDef[] = [
	{
		id: 'a3-winter',
		from: sf(160) - 16,
		to: clipOf('h_brooks_cost').gapEndFrame + 24,
		C: Winter,
		cues: [
			{frame: wf(162, 'uncovered'), sfx: 'stamp', gainDb: -22},
			{frame: wf(163, 'quote') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(163, 'fifty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(167, 'no'), sfx: 'stamp', gainDb: -26},
			{frame: wf(168, 'four'), sfx: 'quartz_tick', gainDb: -24},
		],
	},
	{
		id: 'a3-money',
		from: sf(171) - 14,
		to: ef(185) + 30,
		C: Money,
		cues: [
			{frame: wf(172, 'troubling') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(174, 'million'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(177, 'towed'), sfx: 'whoosh', gainDb: -28},
			{frame: wf(178, 'left'), sfx: 'stamp', gainDb: -26},
			{frame: wf(183, 'vacant'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-tipping',
		from: sf(186) - 14,
		to: ef(187) + 34,
		C: Tipping,
		cues: [
			{frame: wf(186, 'tipped'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(187, 'lost'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-law',
		from: sf(188) - 14,
		to: hold(200).from + hold(200).frames + 14,
		C: Law,
		cues: [
			{frame: wf(189, 'not'), sfx: 'stamp', gainDb: -24},
			{frame: sf(190) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(190, 'submersible') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(191, 'registered'), sfx: 'stamp', gainDb: -26},
			{frame: wf(192, 'conceal') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(195, 'december'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(200, 'insufficient') - 15, sfx: 'highlighter', gainDb: -20},
		],
	},
];
