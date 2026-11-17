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
	const harbour = vis(f, sf(159) - 12, ef(161) + 16);
	const page = vis(f, sf(162) - 12, ef(166) + 20);
	const cold = vis(f, sf(167) - 12, ef(168) + 20);
	const lowF = rollTo(f, [{frame: wf(167, 'one') - 12, value: 40}, {frame: wf(167, 'four') + LAND, value: 1.4}]);
	const highF = rollTo(f, [{frame: wf(167, 'eighty-four') - 12, value: 40}, {frame: wf(167, 'two') + LAND, value: 84.2}]);
	const cad = Math.round(rollTo(f, [{frame: wf(162, 'one') - 10, value: 0}, {frame: wf(162, 'thousand') + LAND, value: 1000}, {frame: wf(162, 'seven') + LAND, value: 1700}, {frame: wf(162, 'fifty') + LAND, value: 1750}]));
	return (
		<>
			{harbour > 0 ? (
				<AbsoluteFill style={{opacity: harbour}}>
					<RealFootage f={f} start={sf(159) - 12} end={ef(161) + 26} src="footage/stj_narrows.mp4" date="" what="ST. JOHN'S HARBOUR · REFERENCE, NOT THE BASE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.06} />
					<Card x={96} y={96} w={900} o={lead(f, wf(159, 'spend') - 8, 10)} style={{padding: '22px 28px'}}>
						<div style={{...T(34, {}), fontWeight: 700}}>
							<Wd f={f} at={wf(159, 'spend')} lightAt={wf(159, 'winter')} tone={colors.amber} bold>THE WINTER: </Wd>
							<Wd f={f} at={wf(159, 'somewhere')}>SOMEWHERE</Wd>
						</div>
						<div style={{marginTop: 14, display: 'flex', gap: 14, alignItems: 'center'}}>
							<DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(160, 'twenty-sixth')} monthWord={wf(160, 'july')} fromDay={15} size={30} />
							<Wd f={f} at={wf(160, 'titan')} lightAt={wf(160, 'set')} style={T(30, {})}>TITAN, SET DOWN</Wd>
						</div>
						<div style={{marginTop: 12, ...T(30, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(160, 'parking')} lightAt={wf(160, 'lot')} tone={colors.amber} bold>IN A PARKING LOT · </Wd>
							<Wd f={f} at={wf(160, 'marine')} lightAt={wf(160, 'base')}>A MARINE BASE · </Wd>
							<Wd f={f} at={wf(160, 'saint')} lightAt={wf(160, 'newfoundland')}>ST. JOHN'S</Wd>
						</div>
						<div style={{marginTop: 14, opacity: lead(f, wf(161, 'uncovered'), 8), transform: `scale(${bump(f, fps, wf(161, 'uncovered') + LAND).toFixed(4)})`, transformOrigin: '0 50%'}}>
							<Chip text="UNCOVERED" tone={colors.red} size={40} />
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			{page > 0 ? (
				<AbsoluteFill style={{opacity: page}}>
					<RecordPage set="roi" start={sf(162) - 12} end={ef(166) + 20} page={322} hl={[{key: 'cover', at: wf(162, 'quote')}, {key: 'noreply', at: wf(163, 'never')}]} label="EXHIBIT" title="STORAGE" pushTo={wf(162, 'protective')} />
					<div style={{position: 'absolute', right: 96, top: 84, display: 'flex', gap: 14, alignItems: 'center', opacity: lead(f, wf(162, 'two'), 8)}}>
						<DatePill f={f} fps={fps} day={28} month={7} year={2022} dayWord={wf(162, 'later')} fromDay={26} size={30} />
						<span style={{...T(44, {color: f >= wf(162, 'fifty') + LAND ? colors.amber : colors.sub, fontWeight: 700}), background: colors.card, border: `1px solid ${colors.border}`, padding: '2px 12px', opacity: lead(f, wf(162, 'one'), 8), display: 'inline-block', transform: `scale(${bump(f, fps, wf(162, 'fifty') + LAND).toFixed(4)})`}}>
							CA${cad.toLocaleString('en-US')}
						</span>
					</div>
					<Note o={vis(f, sf(162), ef(166) + 10)}>
						{f < sf(164) - 6 ? (
							<>
								<Wd f={f} at={wf(162, 'base')} lightAt={wf(162, 'passed')}>THE BASE PASSED ON </Wd>
								<Wd f={f} at={wf(162, 'quote')} lightAt={wf(162, 'cover')} tone={colors.amber}>A QUOTE FOR A COVER: </Wd>
								<Wd f={f} at={wf(162, 'canadian')} lightAt={wf(162, 'dollars')} tone={colors.amber} bold>CA$1,750 · </Wd>
								<Wd f={f} at={wf(163, 'told')} lightAt={wf(163, 'board')}>IT TOLD THE BOARD: </Wd>
								<Wd f={f} at={wf(163, 'oceangate')} lightAt={wf(163, 'answered')} tone={colors.red}>NEVER ANSWERED</Wd>
								<Wd f={f} at={wf(163, 'email')}> THAT EMAIL</Wd>
							</>
						) : (
							<>
								<Wd f={f} at={wf(164, 'september')} tone={colors.amber} bold>SEPTEMBER: </Wd>
								<Wd f={f} at={wf(164, 'wrote')} lightAt={wf(164, 'again')}>THE BASE WROTE AGAIN · </Wd>
								<Wd f={f} at={wf(164, 'still')} lightAt={wf(164, 'covered')} tone={colors.red}>STILL NOT COVERED · </Wd>
								<Wd f={f} at={wf(165, "oceangate's")} lightAt={wf(165, 'director')}>LOGISTICS DIRECTOR: </Wd>
								<Wd f={f} at={wf(165, 'discussed')} tone={colors.amber}>"WILL BE DISCUSSED" · </Wd>
								<Wd f={f} at={wf(166, 'board')} lightAt={wf(166, 'found')}>THE BOARD: </Wd>
								<Wd f={f} at={wf(166, 'no')} lightAt={wf(166, 'followed')} tone={colors.red} bold>NO ACTION FOLLOWED</Wd>
							</>
						)}
					</Note>
				</AbsoluteFill>
			) : null}
			{cold > 0 ? (
				<AbsoluteFill style={{opacity: cold}}>
					<RealFootage f={f} start={sf(167) - 12} end={wf(167, 'freezing') + 4} src="footage/stj_ice.mp4" date="" what="ST. JOHN'S HARBOUR IN WINTER · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<RealFootage f={f} start={wf(167, 'freezing') - 10} end={ef(168) + 30} src="footage/stj_snow.mp4" date="" what="ST. JOHN'S AFTER SNOWFALL · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<Card x={96} y={96} w={820} o={lead(f, wf(167, 'stayed') - 8, 10)} style={{padding: '22px 28px'}}>
						<div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
							<Wd f={f} at={wf(167, 'stayed')} lightAt={wf(167, 'outside')} tone={colors.red} bold style={T(32, {})}>OUTSIDE UNTIL </Wd>
							<DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(167, 'sixth')} monthWord={wf(167, 'february')} size={30} />
						</div>
						<div style={{marginTop: 16, display: 'flex', gap: 18, alignItems: 'baseline'}}>
							<Wd f={f} at={wf(167, 'temperatures')} style={T(28, {})}>TEMPERATURES </Wd>
							<span style={{...T(56, {color: f >= wf(167, 'four') + LAND ? colors.cyan : colors.sub, fontWeight: 700}), opacity: lead(f, wf(167, 'one'), 8)}}>{lowF.toFixed(1)}°F</span>
							<span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(167, 'to'), 8)}}>→</span>
							<span style={{...T(56, {color: f >= wf(167, 'two') + LAND ? colors.amber : colors.sub, fontWeight: 700}), opacity: lead(f, wf(167, 'eighty-four'), 8), textShadow: `0 0 ${(14 * flashOn(f, wf(167, 'fahrenheit'))).toFixed(1)}px ${colors.amber}`}}>{highF.toFixed(1)}°F</span>
						</div>
						<div style={{marginTop: 6, ...T(30, {})}}>
							<Wd f={f} at={wf(167, 'minus')} lightAt={wf(167, 'seventeen')} tone={colors.cyan}>−17°C </Wd>
							<Wd f={f} at={wf(167, 'twenty-nine')} lightAt={wf(167, 'celsius')} tone={colors.amber}>→ 29°C</Wd>
						</div>
						<div style={{marginTop: 14, ...T(32, {}), fontWeight: 700}}>
							<Wd f={f} at={wf(167, 'freezing')} lightAt={wf(167, 'rain')} tone={colors.cyan} bold>FREEZING RAIN · </Wd>
							<Wd f={f} at={wf(167, 'sleet')} tone={colors.cyan} bold>SLEET · </Wd>
							<Wd f={f} at={wf(167, 'snow')} tone={colors.cyan} bold>SNOW</Wd>
						</div>
						<div style={{marginTop: 18, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(168, 'brooks')} lightAt={wf(168, 'testified')}>BROOKS: </Wd>
							<Wd f={f} at={wf(168, 'what')} lightAt={wf(168, 'really')}>WHAT THEY REALLY </Wd><Wd f={f} at={wf(168, 'wanted')} lightAt={wf(168, 'bring')}>WANTED: BRING IT </Wd>
							<Wd f={f} at={wf(168, 'back')} lightAt={wf(168, 'everett')} tone={colors.cyan}>BACK TO EVERETT, </Wd>
							<Wd f={f} at={wf(168, 'pull')} lightAt={wf(168, 'insert')}>PULL THE INSERT, </Wd>
							<Wd f={f} at={wf(168, 'look')} lightAt={wf(168, 'cracks')} tone={colors.amber}>LOOK INSIDE FOR CRACKS</Wd>
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
	const q = vis(f, sf(170) - 8, ef(170) + 14);
	const m185 = rollTo(f, [{frame: wf(173, 'one') - 10, value: 0}, {frame: wf(173, 'eight') + LAND, value: 1.8}, {frame: wf(173, 'five') + LAND, value: 1.85}]);
	const ships = vis(f, sf(175) - 10, ef(176) + 20);
	const pp = span(f, wf(176, 'smaller') - 10, wf(176, 'ship') + 10);
	const tow = span(f, wf(176, 'towed') - 4, wf(176, 'site') + 20);
	const leave = vis(f, sf(177) - 10, clipOf('h_brooks_safety').gapStartFrame);
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink}}>
					<Wd f={f} at={wf(170, 'was')} base={colors.ink}>Was </Wd>
					<Wd f={f} at={wf(170, 'money')} tone={colors.amber}>money </Wd>
					<Wd f={f} at={wf(170, 'behind')} lightAt={wf(170, 'decisions')} base={colors.ink}>behind these decisions?</Wd>
				</div>
			</AbsoluteFill>
			<RecordPage set="roi" start={sf(171) - 14} end={ef(172) + 20} hl={[{key: 'troubling', at: wf(171, 'troubling')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(171, 'words')} />
			<Note o={vis(f, sf(171), ef(172) + 10)}>
				<Wd f={f} at={wf(171, 'coast')} lightAt={wf(171, 'board')}>THE COAST GUARD BOARD: </Wd>
				<Wd f={f} at={wf(171, 'says')} lightAt={wf(171, 'was')} tone={colors.amber} bold>YES · </Wd>
				<Wd f={f} at={wf(171, 'troubling')} lightAt={wf(171, 'prioritization')} tone={colors.amber}>"A TROUBLING PRIORITIZATION OF </Wd>
				<Wd f={f} at={wf(171, 'cost')} lightAt={wf(171, 'measures')} tone={colors.amber}>COST AND TIME-SAVING MEASURES </Wd>
				<Wd f={f} at={wf(171, 'over')} lightAt={wf(171, 'safety')} tone={colors.red}>OVER SAFETY" · </Wd>
				<Wd f={f} at={wf(172, 'n')} lightAt={wf(172, 'findings')} tone={colors.cyan}>THE N-T-S-B'S FINDINGS: </Wd>
				<Wd f={f} at={wf(172, 'not')} lightAt={wf(172, 'money')} tone={colors.cyan}>DO NOT ADDRESS MONEY</Wd>
			</Note>
			<RecordPage set="roi" start={sf(173) - 14} end={ef(173) + 14} hl={[{key: 'advanced', at: wf(173, 'advanced')}]} label="EXHIBIT" title="FINANCES" pushTo={wf(173, 'chief')} />
			<RecordPage set="roi" start={sf(174) - 14} end={ef(174) + 20} hl={[{key: 'forgo', at: wf(174, 'forgo')}]} label="EXHIBIT" title="FINANCES" pushTo={wf(174, 'asked')} />
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(173, 'june') - 6, ef(174) + 14), display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10}}>
				<div style={{...T(30, {}), whiteSpace: 'nowrap', background: colors.card, border: `1px solid ${colors.border}`, padding: '6px 12px'}}>
					<Wd f={f} at={wf(173, 'june')} lightAt={wf(173, 'twenty-two')} tone={colors.ink}>JUN 2022 </Wd>
					<Wd f={f} at={wf(173, 'may')} lightAt={wf(173, 'twenty-three')} tone={colors.ink}>→ MAY 2023</Wd>
				</div>
				<span style={{...T(64, {color: colors.amber, fontWeight: 700}), opacity: lead(f, wf(173, 'one'), 8), background: colors.card, border: `1px solid ${colors.border}`, padding: '4px 14px', display: 'inline-block', transform: `scale(${bump(f, fps, wf(173, 'million') + LAND).toFixed(4)})`, transformOrigin: '100% 50%'}}>
					${m185.toFixed(2)}{f >= wf(173, 'million') - 4 ? 'M' : ''}
				</span>
			</div>
			<Note o={vis(f, sf(173), ef(174) + 10)}>
				<Wd f={f} at={wf(173, 'board')} lightAt={wf(173, 'found')}>THE BOARD FOUND: </Wd>
				<Wd f={f} at={wf(173, 'chief')} lightAt={wf(173, 'advanced')} tone={colors.amber}>THE CEO ADVANCED THE COMPANY </Wd>
				<Wd f={f} at={wf(173, 'one')} lightAt={wf(173, 'dollars')} tone={colors.amber} bold>$1.85 MILLION</Wd>
				{f >= sf(174) - 6 ? (
					<>
						<Wd f={f} at={wf(174, 'employees')}> · EMPLOYEES </Wd>
						<Wd f={f} at={wf(174, 'asked')} lightAt={wf(174, 'forgo')} tone={colors.red}>ASKED TO FORGO </Wd><Wd f={f} at={wf(174, 'salaries')} tone={colors.red}>SALARIES · </Wd>
						<Wd f={f} at={wf(174, 'promise')} lightAt={wf(174, 'pay')}>BACK PAY PROMISED · </Wd>
						<Wd f={f} at={wf(174, 'pay')} tone={colors.ink}>BROOKS: "THEY ASKED FOR VOLUNTEERS" · CG 112 P. 779</Wd>
					</>
				) : null}
			</Note>
			{ships > 0 ? (
				<AbsoluteFill style={{opacity: ships}}>
					<Mount x={140} y={150} w={1640} h={720} start={sf(175) - 10} end={ef(176) + 20} source="SHIPS AND THE TOW: USCG MBI REPORT · LENGTHS: NTSB MIR-25-36, TABLE E-2" labels={['LENGTHS TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* Horizon Arctic 93.6 m vs Polar Prince 67.2 m, 12 px per metre */}
						<g opacity={lead(f, wf(175, 'ship'), 10)}>
							<rect x={260} y={330} width={93.6 * 12} height={56} fill={colors.cyan} opacity={f >= wf(175, 'unavailable') ? 0.25 : 0.8} />
							<text x={260} y={316} style={T(30, {fill: colors.ink})}>HORIZON ARCTIC · 93.6 M</text>
							{f >= wf(175, 'unavailable') ? <text x={260 + 93.6 * 12 + 20} y={368} style={T(30, {fill: colors.red, fontWeight: 700})}>UNAVAILABLE 2023</text> : null}
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
						<Wd f={f} at={wf(175, 'ship')} lightAt={wf(175, 'carried')}>THE SHIP THAT HAD CARRIED TITAN: </Wd>
						<Wd f={f} at={wf(175, 'unavailable')} lightAt={wf(175, 'twenty-three')} tone={colors.red}>UNAVAILABLE FOR 2023</Wd>
						<Wd f={f} at={wf(175, 'board')} lightAt={wf(175, 'found')}> · THE BOARD</Wd>
						<br />
						<Wd f={f} at={wf(176, 'towed')} lightAt={wf(176, 'site')} tone={colors.amber}>TOWED TO THE SITE </Wd>
						<Wd f={f} at={wf(176, 'launch')} lightAt={wf(176, 'platform')}>ON ITS LAUNCH PLATFORM, </Wd>
						<Wd f={f} at={wf(176, 'behind')} lightAt={wf(176, 'ship')} tone={colors.amber}>BEHIND A SMALLER SHIP</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{leave > 0 ? (
				<AbsoluteFill style={{opacity: leave}}>
					<RealFootage f={f} start={sf(177) - 10} end={clipOf('h_brooks_safety').gapStartFrame + 10} src="footage/h_brooks_oath.mp4" from={20} date="23 SEP 2024" what="MARINE BOARD HEARING" source="USCG · PUBLIC DOMAIN" push={0.04} focus={[0.62, 0.4]} box={{x: 96, y: 110, w: 1120, h: 630}} under />
					<div style={{position: 'absolute', left: 1250, top: 120, width: 574, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(177, 'early')} lightAt={wf(177, 'twenty-three')} tone={colors.amber} bold>EARLY 2023: </Wd>
						<Wd f={f} at={wf(177, 'brooks')} lightAt={wf(177, 'left')} tone={colors.red} bold>BROOKS LEFT</Wd>
						<br />
						<br />
						<Wd f={f} at={wf(178, 'under')} lightAt={wf(178, 'oath')} tone={colors.cyan}>UNDER OATH · </Wd>
						<Wd f={f} at={wf(178, 'main')} lightAt={wf(178, 'reason')}>HIS MAIN REASON: </Wd>
						<br />
						<Wd f={f} at={wf(178, 'plan')} lightAt={wf(178, 'tow')} tone={colors.amber}>THE PLAN TO TOW TITAN · </Wd>
						<Wd f={f} at={wf(178, 'which')} lightAt={wf(178, 'meant')}>MEANING: </Wd><Wd f={f} at={wf(178, 'working')} lightAt={wf(178, 'platform')}>WORKING ON ITS PLATFORM </Wd>
						<Wd f={f} at={wf(178, 'open')} lightAt={wf(178, 'seas')} tone={colors.amber}>IN OPEN SEAS</Wd>
						<br />
						<Wd f={f} at={wf(178, 'reasons')} lightAt={wf(178, 'economic')} tone={colors.red} bold>THE REASONS: "ECONOMIC"</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_safety" />
			<RecordPage set="cg112" start={sf(181) - 14} end={ef(181) + 20} hl={[{key: 'paid', at: wf(181, 'paid')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(181, 'told')} />
			<Note o={vis(f, sf(181), ef(181) + 10)}>
				<Wd f={f} at={wf(181, 'suggested')} lightAt={wf(181, 'go')}>HE SUGGESTED THEY NOT GO · </Wd>
				<Wd f={f} at={wf(181, 'told')} lightAt={wf(181, 'possible')} tone={colors.red}>"WASN'T POSSIBLE" · </Wd>
				<Wd f={f} at={wf(181, 'people')} lightAt={wf(181, 'paid')} tone={colors.amber} bold>"THEY HAD PEOPLE THAT PAID"</Wd>
			</Note>
			<RecordPage set="roi" start={sf(182) - 14} end={ef(184) + 20} hl={[{key: 'unhindered', at: wf(182, 'unhindered')}, {key: 'removedpossibility', at: wf(184, 'removed')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(182, 'vacant')} />
			<Note o={vis(f, sf(182), ef(184) + 10)}>
				{f < sf(183) - 6 ? (
					<>
						<Wd f={f} at={wf(182, 'board')} lightAt={wf(182, 'found')}>THE BOARD: </Wd>
						<Wd f={f} at={wf(182, 'chief')} lightAt={wf(182, 'executive')}>THE CEO LEFT </Wd>
						<Wd f={f} at={wf(182, 'director')} lightAt={wf(182, 'post')} tone={colors.amber}>THE DIRECTOR OF ENGINEERING POST </Wd>
						<Wd f={f} at={wf(182, 'vacant')} tone={colors.red} bold>VACANT · </Wd>
						<Wd f={f} at={wf(182, 'words')}>IN ITS WORDS: </Wd><Wd f={f} at={wf(182, 'ensure')} lightAt={wf(182, 'twenty-three')}>"TO ENSURE THE 2023 </Wd><Wd f={f} at={wf(182, 'expedition')}>EXPEDITION </Wd>
						<Wd f={f} at={wf(182, 'proceeded')} lightAt={wf(182, 'unhindered')} tone={colors.amber}>PROCEEDED UNHINDERED"</Wd>
					</>
				) : (
					<>
						<Wd f={f} at={wf(183, 'drew')} lightAt={wf(183, 'line')}>THE LINE BACK TO </Wd>
						<Wd f={f} at={wf(183, 'twenty')} lightAt={wf(183, 'nineteen')} tone={colors.amber} bold>2019: </Wd>
						<Wd f={f} at={wf(183, 'by')} lightAt={wf(183, 'own')}>BY HIS OWN TESTIMONY, </Wd><Wd f={f} at={wf(183, 'first')} lightAt={wf(183, 'engineering')}>THE FIRST DIRECTOR OF ENGINEERING </Wd>
						<Wd f={f} at={wf(183, 'kept')} tone={colors.cyan}>KEPT </Wd><Wd f={f} at={wf(183, 'damaged')} lightAt={wf(183, 'hull')} tone={colors.cyan}>A DAMAGED HULL </Wd><Wd f={f} at={wf(183, 'expedition')} tone={colors.cyan}>FROM AN EXPEDITION · </Wd>
						<Wd f={f} at={wf(184, 'leaving')} lightAt={wf(184, 'empty')} tone={colors.red}>THE EMPTY POST </Wd>
						<Wd f={f} at={wf(184, 'removed')} lightAt={wf(184, 'possibility')} tone={colors.red}>REMOVED THE POSSIBILITY </Wd>
						<Wd f={f} at={wf(184, 'replacement')} lightAt={wf(184, 'blocking')}>OF A REPLACEMENT BLOCKING IT</Wd>
					</>
				)}
			</Note>
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(183, 'testimony') - 6, ef(184) + 10)}}>
				<Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28} style={{transform: `scale(${bump(f, fps, wf(183, 'testimony') + LAND, 0.05).toFixed(4)})`}} />
			</div>
		</>
	);
};

// ── 3 · The tow, the platform tipping (s185–s186) ───────────────────────────────────────────────────────────────

const Tipping: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const tilt = span(f, wf(185, 'tipped') - 4, wf(185, 'tipped') + 18) * (1 - span(f, wf(185, 'once') + 10, wf(186, 'once') + 10));
	const under = span(f, wf(186, 'under') - 6, wf(186, 'water') + 12);
	const lost = lead(f, wf(186, 'lost'), 8);
	const angle = -9 * tilt - 14 * under;
	return (
		<>
			<Mount x={140} y={130} w={1640} h={780} start={sf(185) - 10} end={ef(186) + 30} source="PLATFORM UPSETS, SPRING 2023 · USCG MBI REPORT" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
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
				<Wd f={f} at={wf(185, 'spring')} lightAt={wf(185, 'spring')} tone={colors.amber} bold>SPRING 2023 · </Wd>
				<Wd f={f} at={wf(185, 'sea')}>AT SEA </Wd>
				<Wd f={f} at={wf(185, 'port')}>AND IN PORT: </Wd>
				<Wd f={f} at={wf(185, 'platform')} lightAt={wf(185, 'tipped')} tone={colors.red}>THE PLATFORM TIPPED </Wd>
				<Wd f={f} at={wf(185, 'more')} lightAt={wf(185, 'once')}>MORE THAN ONCE</Wd>
			</div>
			<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 16, alignItems: 'center'}}>
				<span style={{opacity: lead(f, wf(186, 'may'), 8)}}>
					<DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(186, 'may')} fromDay={1} size={30} />
				</span>
				<Wd f={f} at={wf(186, 'bow')} lightAt={wf(186, 'water')} tone={colors.red} style={T(32, {})}>ITS BOW PARTLY UNDER WATER · </Wd>
				<Wd f={f} at={wf(186, "titan's")} lightAt={wf(186, 'cone')} style={T(32, {})}>TITAN'S TAIL CONE: </Wd>
				<span style={{opacity: lost, transform: `scale(${bump(f, fps, wf(186, 'lost') + LAND).toFixed(4)})`, display: 'inline-block'}}>
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
	const q = vis(f, sf(187) - 8, ef(187) + 14);
	const law = vis(f, sf(188) - 10, ef(188) + 14);
	const timeline = vis(f, sf(192) - 10, ef(196) + 20);
	const rescue = vis(f, sf(197) - 10, ef(198) + 20);
	const X = (y: number) => 300 + (y - 1993) * 42;
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 60, color: colors.ink}}>
					<Wd f={f} at={wf(187, 'how')} base={colors.ink}>How was a hull like this </Wd>
					<Wd f={f} at={wf(187, 'allowed')} tone={colors.amber}>allowed </Wd>
					<Wd f={f} at={wf(187, 'carry')} lightAt={wf(187, 'passengers')} tone={colors.amber}>to carry passengers?</Wd>
				</div>
			</AbsoluteFill>
			{law > 0 ? (
				<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: law}}>
					<div style={{fontFamily: sans, fontWeight: 700, fontSize: 56, color: colors.ink, textAlign: 'center', lineHeight: 1.3}}>
						<Wd f={f} at={wf(188, 'n')} lightAt={wf(188, 'reading')} base={colors.ink} tone={colors.cyan}>By the NTSB's reading </Wd>
						<Wd f={f} at={wf(188, 'law')} base={colors.ink} tone={colors.cyan}>of the law,</Wd>
						<br />
						<Wd f={f} at={wf(188, 'not')} base={colors.ink} tone={colors.red}>it was not.</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{/* the law in the NTSB's own words (forensic v2, idea 1): the page, highlighted on the sentence that says it */}
			<RecordPage set="mir" start={sf(189) - 14} end={ef(190) + 20} page={68} hl={[{key: 'pvsa', at: wf(189, 'submersible')}]} label="EXHIBIT" title="2.6 · OVERSIGHT" pushTo={wf(189, 'submersible')} />
			<Note o={vis(f, sf(189) + 10, ef(190) + 10)} tone={colors.cyan}>
				{f < sf(190) - 4 ? (
					<>
						<Wd f={f} at={wf(189, 'u')} lightAt={wf(189, 'law')}>U.S. LAW, </Wd><Wd f={f} at={wf(189, 'n')} lightAt={wf(189, 'notes')} tone={colors.cyan}>THE NTSB NOTES: </Wd>
						<Wd f={f} at={wf(189, 'submersible')} lightAt={wf(189, 'carrying')}>A SUBMERSIBLE CARRYING </Wd>
						<br />
						<Wd f={f} at={wf(189, 'even')} lightAt={wf(189, 'one')} tone={colors.amber} bold>EVEN ONE </Wd>
						<Wd f={f} at={wf(189, 'passenger')} lightAt={wf(189, 'hire')} tone={colors.amber}>PASSENGER FOR HIRE </Wd>
						<Wd f={f} at={wf(189, 'is')} lightAt={wf(189, 'vessel')}>IS A SMALL PASSENGER VESSEL</Wd>
						<br />
						<Wd f={f} at={wf(189, 'must')} lightAt={wf(189, 'inspected')} tone={colors.cyan} bold>MUST BE INSPECTED </Wd>
						<Wd f={f} at={wf(189, 'by')} lightAt={wf(189, 'guard')} tone={colors.cyan}>BY THE COAST GUARD</Wd>
					</>
				) : (
					<span style={{display: 'inline-flex', gap: 18, alignItems: 'center'}}>
						<Wd f={f} at={wf(190, 'oceangate')} lightAt={wf(190, 'titan')}>OCEANGATE · TITAN: </Wd>
						<span style={{opacity: lead(f, wf(190, 'registered'), 8), transform: `scale(${bump(f, fps, wf(190, 'registered') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
							<Chip text="NEVER REGISTERED" tone={colors.red} size={34} />
						</span>
						<span style={{opacity: lead(f, wf(190, 'inspection'), 8), transform: `scale(${bump(f, fps, wf(190, 'inspection') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
							<Chip text={f >= wf(190, 'arranged') ? 'NO INSPECTION ARRANGED' : 'NO INSPECTION'} tone={colors.red} size={34} />
						</span>
					</span>
				)}
			</Note>
			<RecordPage set="roi" start={sf(191) - 14} end={ef(191) + 20} hl={[{key: 'c53', at: wf(191, 'conceal')}]} label="EXHIBIT" title="SEC. 5.18" pushTo={wf(191, 'mission')} />
			<Note o={vis(f, sf(191), ef(191) + 10)}>
				<Wd f={f} at={wf(191, 'board')} lightAt={wf(191, 'found')}>THE BOARD FOUND: </Wd>
				<Wd f={f} at={wf(191, 'oceangate')} lightAt={wf(191, 'described')}>OCEANGATE DESCRIBED </Wd><Wd f={f} at={wf(191, 'paying')} lightAt={wf(191, 'passengers')}>PAYING PASSENGERS AS </Wd>
				<Wd f={f} at={wf(191, 'mission')} lightAt={wf(191, 'specialists')} tone={colors.amber} bold>"MISSION SPECIALISTS" </Wd>
				<Wd f={f} at={wf(191, 'mandatory')} lightAt={wf(191, 'duties')}>WITH MANDATORY DUTIES · </Wd>
				<Wd f={f} at={wf(191, 'conceal')} tone={colors.red}>TO CONCEAL </Wd><Wd f={f} at={wf(191, 'they')} lightAt={wf(191, 'passengers', 1)} tone={colors.red}>THAT THEY WERE PAYING PASSENGERS</Wd>
			</Note>
			{timeline > 0 ? (
				<AbsoluteFill style={{opacity: timeline}}>
					<Mount x={140} y={150} w={1640} h={760} start={sf(192) - 10} end={ef(196) + 20} source="NVIC 05-93 AND THE 1993 LAW: NTSB MIR-25-36 · USCG MBI REPORT" labels={[]} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 200, ...T(34, {}), fontWeight: 700}}>
						<Wd f={f} at={wf(192, "regulator's")} lightAt={wf(192, 'guidance')} tone={colors.cyan}>THE REGULATOR'S OWN GUIDANCE: </Wd>
						<Wd f={f} at={wf(192, 'same')} lightAt={wf(192, 'scrutiny')}>THE SAME SCRUTINY</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<line x1={X(1993)} x2={X(1993) + (X(2025) - X(1993)) * span(f, wf(195, 'october') - 30, wf(195, 'twenty-five') + 10)} y1={520} y2={520} stroke={colors.sub} strokeWidth={3} />
						<line x1={X(1993) - 20} x2={X(1993) + 60} y1={520} y2={520} stroke={colors.sub} strokeWidth={3} opacity={lead(f, wf(193, 'july'), 8)} />
						{/* JUL 1993 guidance; DEC 1993 the law changes */}
						<g opacity={lead(f, wf(193, 'coast'), 8)}>
							<circle cx={X(1993)} cy={520} r={16} fill={colors.cyan} />
							<text x={X(1993) - 20} y={420} style={T(30, lit(f, wf(193, 'ninety-three'), colors.cyan))}>JUL <tspan style={lit(f, wf(193, 'nineteen'), colors.cyan)}>1993</tspan></text>
							<text x={X(1993) - 20} y={590} style={T(28, lit(f, wf(193, 'voluntary'), colors.ink))}>VOLUNTARY GUIDANCE</text>
							<text x={X(1993) - 20} y={626} style={T(28, lit(f, wf(193, 'passenger'), colors.ink))}>NVIC 05-93 · <tspan style={lit(f, wf(193, 'submersibles'), colors.ink)}>PASSENGER SUBMERSIBLES</tspan></text>
							<text x={X(1993) - 20} y={662} style={T(26, lit(f, wf(193, 'published'), colors.cyan))} opacity={lead(f, wf(193, 'published'), 8)}>PUBLISHED</text>
						</g>
						<g opacity={lead(f, wf(194, 'december'), 8)}>
							<circle cx={X(1993) + 64} cy={520} r={16} fill={colors.amber} />
							<text x={X(1993) + 120} y={470} style={T(30, {fill: colors.amber, fontWeight: 700})}>DEC 1993 · <tspan style={lit(f, wf(194, 'law'), colors.amber, colors.ink)}>A NEW LAW</tspan> <tspan style={lit(f, wf(194, 'definition'), colors.amber, colors.ink)}>CHANGES THE DEFINITION</tspan></text>
							<text x={X(1993) + 120} y={720} style={T(28, lit(f, wf(194, 'one'), colors.amber, colors.ink))} opacity={lead(f, wf(194, 'cover'), 8)}>ANY <tspan style={lit(f, wf(194, 'submersible'), colors.amber, colors.ink)}>SUBMERSIBLE</tspan>, ONE PASSENGER FOR HIRE</text>
						</g>
						<g opacity={lead(f, wf(195, 'october'), 8)}>
							<circle cx={X(2025)} cy={520} r={16} fill={colors.red} />
							<text x={X(2025)} y={470} textAnchor="end" style={T(30, {fill: colors.red, fontWeight: 700})}>OCT 2025</text>
							<text x={X(2025)} y={590} textAnchor="end" style={T(30, lit(f, wf(195, 'never'), colors.red))}>GUIDANCE NEVER UPDATED</text>
						</g>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 760, width: 1480, ...T(30, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(195, 'n')} lightAt={wf(195, 'found')} tone={colors.cyan}>N-T-S-B · </Wd>
						<Wd f={f} at={wf(195, 'updated')} lightAt={wf(195, 'match')}>NOT UPDATED TO MATCH · </Wd>
						<Wd f={f} at={wf(196, 'coast')} lightAt={wf(196, 'found')}>THE COAST GUARD: </Wd><Wd f={f} at={wf(196, 'no')} lightAt={wf(196, 'specific')} tone={colors.red}>NO SPECIFIC </Wd><Wd f={f} at={wf(196, 'inspection')} lightAt={wf(196, 'standards')} tone={colors.red}>INSPECTION STANDARDS </Wd><Wd f={f} at={wf(196, 'how')}>· </Wd>
						<Wd f={f} at={wf(196, 'designed')} lightAt={wf(196, 'built')}>FOR HOW A SUBMERSIBLE IS DESIGNED OR BUILT</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			{rescue > 0 ? (
				<AbsoluteFill style={{opacity: rescue}}>
					<Mount x={140} y={130} w={1640} h={800} start={sf(197) - 10} end={ef(198) + 20} source="NVIC 05-93 RECOMMENDATION · NTSB MIR-25-36" labels={['DEPTHS TO SCALE']} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 170, ...T(32, {}), lineHeight: 1.5}}>
						<Wd f={f} at={wf(197, 'guidance')} lightAt={wf(197, 'recommended')}>THE GUIDANCE RECOMMENDED: </Wd>
						<Wd f={f} at={wf(197, 'submersible')} lightAt={wf(197, 'dive')} tone={colors.cyan}>DIVE </Wd><Wd f={f} at={wf(197, 'deeper')} lightAt={wf(197, 'reach')} tone={colors.cyan}>NO DEEPER THAN RESCUE CAN REACH</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* to scale: 0–4,000 m over 560 px */}
						<line x1={300} x2={1700} y1={340} y2={340} stroke={colors.sub} strokeWidth={2} />
						<rect x={420} y={340} width={70} height={(45 / 4000) * 480 * lead(f, wf(197, 'rescue'), 14) + 3} fill={colors.cyan} />
						<text x={510} y={370} style={T(28, {fill: colors.cyan})} opacity={lead(f, wf(197, 'rescue'), 10)}>45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93)</text>
						<rect x={1560} y={340} width={70} height={480 * span(f, wf(198, 'regularly') - 6, wf(198, 'titanic') + 10) * (3840 / 4000)} fill={colors.amber} />
						<text x={1540} y={340 + 480 * 0.96} textAnchor="end" style={T(30, {fill: colors.amber, fontWeight: 700})} opacity={lead(f, wf(198, 'titanic'), 8)}>3,840 M · THE TITANIC</text>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 240, ...T(30, {})}}>
						<Wd f={f} at={wf(198, 'n')} lightAt={wf(198, 'found')} tone={colors.cyan}>N-T-S-B: </Wd>
						<Wd f={f} at={wf(198, 'titan')} lightAt={wf(198, 'dived')}>TITAN REGULARLY DIVED THERE </Wd>
						<Wd f={f} at={wf(198, 'no')} lightAt={wf(198, 'rescue')} tone={colors.red}>WITH NO RESCUE </Wd>
						<Wd f={f} at={wf(198, 'standing')} lightAt={wf(198, 'reach')} tone={colors.red}>STANDING BY THAT COULD REACH IT</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(199) - 14} end={hold(199).from + hold(199).frames + 10} hl={[{key: 'insufficient_es', at: wf(199, 'insufficient')}]} label="FINDING" title="CONTRIBUTING" pushTo={wf(199, 'guidance')} />
			<Note o={vis(f, sf(199), hold(199).from + hold(199).frames)}>
				<Wd f={f} at={wf(199, 'n')} lightAt={wf(199, 'found')} tone={colors.cyan}>N-T-S-B: </Wd>
				<Wd f={f} at={wf(199, 'voluntary')} lightAt={wf(199, 'guidance')}>VOLUNTARY GUIDANCE </Wd>
				<Wd f={f} at={wf(199, 'rules')} lightAt={wf(199, 'vessels')}>AND SMALL-PASSENGER-VESSEL RULES </Wd>
				<Wd f={f} at={wf(199, 'insufficient')} tone={colors.red} bold>INSUFFICIENT </Wd>
				<Wd f={f} at={wf(199, 'make')} lightAt={wf(199, 'oceangate')}>TO MAKE OCEANGATE </Wd>
				<Wd f={f} at={wf(199, 'follow')} lightAt={wf(199, "industry's")} tone={colors.amber}>FOLLOW THE INDUSTRY'S </Wd><Wd f={f} at={wf(199, 'established')} lightAt={wf(199, 'standards')} tone={colors.amber}>STANDARDS</Wd>
			</Note>
		</>
	);
};

export const act3c: SceneDef[] = [
	{
		id: 'a3-winter',
		from: sf(159) - 16,
		to: clipOf('h_brooks_cost').gapEndFrame + 24,
		C: Winter,
		cues: [
			{frame: wf(161, 'uncovered'), sfx: 'stamp', gainDb: -22},
			{frame: wf(162, 'quote') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(162, 'fifty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(166, 'no'), sfx: 'stamp', gainDb: -26},
			{frame: wf(167, 'four'), sfx: 'quartz_tick', gainDb: -24},
		],
	},
	{
		id: 'a3-money',
		from: sf(170) - 14,
		to: ef(184) + 30,
		C: Money,
		cues: [
			{frame: wf(171, 'troubling') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(173, 'million'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(176, 'towed'), sfx: 'whoosh', gainDb: -28},
			{frame: wf(177, 'left'), sfx: 'stamp', gainDb: -26},
			{frame: wf(182, 'vacant'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-tipping',
		from: sf(185) - 14,
		to: ef(186) + 34,
		C: Tipping,
		cues: [
			{frame: wf(185, 'tipped'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(186, 'lost'), sfx: 'stamp', gainDb: -24},
		],
	},
	{
		id: 'a3-law',
		from: sf(187) - 14,
		to: hold(199).from + hold(199).frames + 14,
		C: Law,
		cues: [
			{frame: wf(188, 'not'), sfx: 'stamp', gainDb: -24},
			{frame: sf(189) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(189, 'submersible') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(190, 'registered'), sfx: 'stamp', gainDb: -26},
			{frame: wf(191, 'conceal') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(194, 'december'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(199, 'insufficient') - 15, sfx: 'highlighter', gainDb: -20},
		],
	},
];
