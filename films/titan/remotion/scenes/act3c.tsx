import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';

const flashOn = (f: number, at: number): number => flash(f, at, 0);
import {RecordPage} from '../docs';
import {Mount, useFilmFrame} from '../kit';
import {beatScale, camAt, dolly, Hull3D} from '../hull3d';
import {Chip, lit, RealFootage, sans, span, T, vis, Wd} from '../parts';
import {HearingClip, clipOf} from '../parts2';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part C (sentences 159–199): the winter in St. John's, the money, the regulator.
// Choreography: scenes/choreography/act3c.md (generated from this file).

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
	const bs = beatScale(f, [wf(160, 'spend'), wf(160, 'somewhere'), wf(161, 'july'), wf(161, 'titan'), wf(161, 'down'), wf(161, 'parking'), wf(161, 'marine'), wf(161, 'saint'), wf(161, 'newfoundland'), wf(163, 'two'), wf(163, 'later'), wf(163, 'passed'), wf(163, 'quote'), wf(163, 'protective'), wf(163, 'cover'), wf(163, 'one'), wf(163, 'thousand'), wf(163, 'seven'), wf(163, 'hundred'), wf(163, 'fifty'), wf(163, 'canadian'), wf(164, 'guard'), wf(164, 'oceangate'), wf(164, 'answered'), wf(165, 'september'), wf(165, 'base'), wf(165, 'again'), wf(165, 'titan'), wf(165, 'still'), wf(165, 'covered'), wf(166, 'logistics'), wf(166, 'director'), wf(166, 'would'), wf(167, 'found'), wf(167, 'followed'), wf(168, 'until'), wf(168, 'february'), wf(168, 'temperatures'), wf(168, 'one'), wf(168, 'point'), wf(168, 'four'), wf(168, 'eighty-four'), wf(168, 'two'), wf(168, 'degrees'), wf(168, 'fahrenheit'), wf(168, 'about'), wf(168, 'seventeen'), wf(168, 'twenty-nine'), wf(168, 'celsius'), wf(168, 'through', 1), wf(168, 'rain'), wf(168, 'sleet'), wf(169, 'testified'), wf(169, 'what'), wf(169, 'wanted'), wf(169, 'titan'), wf(169, 'everett'), wf(169, 'insert'), wf(169, 'inside'), wf(169, 'cracks')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			{harbour > 0 ? (
				<AbsoluteFill style={{opacity: harbour}}>
					<RealFootage f={f} start={sf(160) - 12} end={ef(162) + 26} src="footage/stj_narrows.mp4" date="" what="ST. JOHN'S HARBOUR · REFERENCE, NOT THE BASE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.06} />
					<div style={{position: 'absolute', left: 96, top: 110, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', width: 1700}}>
						{f >= wf(161, 'twenty-sixth') - 10 ? <DatePill f={f} fps={fps} day={26} month={7} year={2022} dayWord={wf(161, 'twenty-sixth')} monthWord={wf(161, 'july')} fromDay={15} size={34} /> : null}
						{f >= wf(161, 'parking') - 10 ? <Chip text="A PARKING LOT · MARINE BASE, ST. JOHN'S" tone={colors.ink} size={32} style={{transform: `scale(${bump(f, fps, wf(161, 'parking')).toFixed(4)})`}} /> : null}
						{f >= wf(162, 'uncovered') - 10 ? <Chip text="UNCOVERED" tone={colors.red} size={40} style={{transform: `scale(${bump(f, fps, wf(162, 'uncovered') + LAND).toFixed(4)})`}} /> : null}
					</div>
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
				</AbsoluteFill>
			) : null}
			{cold > 0 ? (
				<AbsoluteFill style={{opacity: cold}}>
					<RealFootage f={f} start={sf(168) - 12} end={wf(168, 'freezing') + 4} src="footage/stj_ice.mp4" date="" what="ST. JOHN'S HARBOUR IN WINTER · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<RealFootage f={f} start={wf(168, 'freezing') - 10} end={ef(169) + 30} src="footage/stj_snow.mp4" date="" what="ST. JOHN'S AFTER SNOWFALL · REFERENCE FOOTAGE" source="ALICK TSUI / YOUTUBE · CC BY" push={0.05} />
					<div style={{position: 'absolute', left: 96, top: 110, padding: '18px 26px', background: 'rgba(10,13,18,0.78)', borderLeft: `3px solid ${colors.red}`, opacity: Math.min(lead(f, wf(168, 'stayed') - 8, 10), 1 - lead(f, sf(169) - 6, 10))}}>
						<div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
							<Chip text="UNCOVERED UNTIL" tone={colors.red} size={30} />
							<DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(168, 'sixth')} monthWord={wf(168, 'february')} size={30} />
						</div>
						<div style={{marginTop: 16, display: 'flex', gap: 18, alignItems: 'baseline'}}>
							
							<span style={{...T(56, {color: f >= wf(168, 'four') + LAND ? colors.cyan : colors.sub, fontWeight: 700}), opacity: lead(f, wf(168, 'one'), 8)}}>{lowF.toFixed(1)}°F</span>
							<span style={{...T(40, {color: colors.ink}), opacity: lead(f, wf(168, 'to'), 8)}}>→</span>
							<span style={{...T(56, {color: f >= wf(168, 'two') + LAND ? colors.amber : colors.sub, fontWeight: 700}), opacity: lead(f, wf(168, 'eighty-four'), 8), textShadow: `0 0 ${(14 * flashOn(f, wf(168, 'fahrenheit'))).toFixed(1)}px ${colors.amber}`}}>{highF.toFixed(1)}°F</span>
						</div>
						<div style={{marginTop: 6, ...T(30, {})}}>
							<Wd f={f} at={wf(168, 'minus')} lightAt={wf(168, 'seventeen')} tone={colors.cyan}>−17°C </Wd>
							<Wd f={f} at={wf(168, 'twenty-nine')} lightAt={wf(168, 'celsius')} tone={colors.amber}>→ 29°C</Wd>
						</div>
						
					</div>
					<AbsoluteFill style={{opacity: vis(f, sf(169) - 10, ef(169) + 20, 10, 12)}}>
						<RealFootage f={f} start={sf(169) - 10} end={ef(169) + 30} src="footage/h_brooks_oath.mp4" from={26} date="23 SEP 2024" what="MARINE BOARD HEARING" source="U.S. COAST GUARD · PUBLIC DOMAIN" push={0.06} focus={[0.6, 0.4]} />
						<div style={{position: 'absolute', left: 96, top: 110, padding: '18px 24px', background: 'rgba(10,13,18,0.8)', borderLeft: `3px solid ${colors.amber}`}}>
							<div style={{fontFamily: sans, fontWeight: 700, fontSize: 44, color: colors.ink}}>PHIL BROOKS</div>
							<div style={{marginTop: 6, ...T(28, {color: colors.amber})}}>DIRECTOR OF ENGINEERING 2021–23</div>
							<div style={{marginTop: 12, opacity: lead(f, wf(169, 'everett'), 8)}}><Chip text="PLAN: BACK TO EVERETT · INSERT OUT · LOOK FOR CRACKS" tone={colors.cyan} size={28} /></div>
						</div>
					</AbsoluteFill>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_cost" />
		</AbsoluteFill>
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
	const bs = beatScale(f, [wf(171, 'decisions'), wf(172, 'says'), wf(172, 'in'), wf(172, 'words'), wf(172, 'troubling'), wf(172, 'prioritization'), wf(172, 'of'), wf(172, 'time-saving'), wf(172, 'measures'), wf(172, 'safety'), wf(173, 'findings'), wf(173, 'not'), wf(174, 'june'), wf(174, 'twenty'), wf(174, 'twenty-two'), wf(174, 'may'), wf(174, 'twenty', 1), wf(174, 'twenty-three'), wf(174, 'the'), wf(174, 'found'), wf(174, 'chief'), wf(174, 'advanced'), wf(174, 'company'), wf(174, 'one'), wf(174, 'point'), wf(174, 'eight'), wf(174, 'five'), wf(174, 'million'), wf(175, 'employees'), wf(175, 'asked'), wf(175, 'temporarily'), wf(175, 'forgo'), wf(175, 'salaries'), wf(175, 'promise'), wf(175, 'back'), wf(176, 'titan'), wf(176, 'unavailable'), wf(176, 'twenty'), wf(176, 'twenty-three'), wf(176, 'board'), wf(177, 'towed'), wf(177, 'site'), wf(177, 'platform'), wf(177, 'behind'), wf(177, 'ship'), wf(178, 'twenty'), wf(178, 'twenty-three'), wf(178, 'brooks'), wf(179, 'oath'), wf(179, 'his'), wf(179, 'reason'), wf(179, 'plan'), wf(179, 'titan'), wf(179, 'meant'), wf(179, 'platform'), wf(179, 'open'), wf(179, 'seas'), wf(179, 'the'), wf(179, 'reasons'), wf(179, 'economic'), wf(182, 'suggested'), wf(182, 'go'), wf(182, 'told'), wf(182, 'possible'), wf(182, 'had'), wf(182, 'paid'), wf(183, 'chief'), wf(183, 'executive'), wf(183, 'left'), wf(183, 'engineering'), wf(183, 'vacant'), wf(183, 'words'), wf(183, 'ensure'), wf(183, 'twenty'), wf(183, 'twenty-three'), wf(183, 'expedition'), wf(183, 'proceeded'), wf(183, 'unhindered'), wf(184, 'line'), wf(184, 'twenty'), wf(184, 'nineteen'), wf(184, 'when'), wf(184, 'testimony'), wf(184, 'the', 2), wf(184, 'first'), wf(184, 'engineering'), wf(184, 'kept'), wf(184, 'hull'), wf(184, 'expedition'), wf(185, 'empty'), wf(185, 'wrote'), wf(185, 'removed'), wf(185, 'possibility'), wf(185, 'replacement'), wf(185, 'director'), wf(185, 'blocking'), wf(185, 'expedition')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink}}>
					<Wd f={f} at={wf(171, 'was')} base={colors.ink}>Was </Wd>
					<Wd f={f} at={wf(171, 'money')} tone={colors.amber}>money </Wd>
					<Wd f={f} at={wf(171, 'behind')} lightAt={wf(171, 'decisions')} base={colors.ink}>behind these decisions?</Wd>
				</div>
			</AbsoluteFill>
			<RecordPage set="roi" start={sf(172) - 14} end={ef(173) + 20} hl={[{key: 'troubling', at: wf(172, 'troubling')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(172, 'words')} />
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
			<RecordPage set="roi" start={sf(183) - 14} end={ef(185) + 20} hl={[{key: 'unhindered', at: wf(183, 'unhindered')}, {key: 'removedpossibility', at: wf(185, 'removed')}]} label="EXHIBIT" title="ANALYSIS" pushTo={wf(183, 'vacant')} />
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(184, 'testimony') - 6, ef(185) + 10)}}>
				<Chip text="BY HIS OWN TESTIMONY (2019)" tone={colors.cyan} size={28} style={{transform: `scale(${bump(f, fps, wf(184, 'testimony') + LAND, 0.05).toFixed(4)})`}} />
			</div>
		</AbsoluteFill>
	);
};

// ── 3 · The tow, the platform tipping (s185–s186) ───────────────────────────────────────────────────────────────

const Tipping: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const BEATS = [wf(186, 'spring'), wf(186, 'sea'), wf(186, 'port'), wf(186, 'platform'), wf(186, 'more'), wf(187, 'may'), wf(187, 'bow'), wf(187, 'under'), wf(187, "titan's"), wf(187, 'cone')];
	const tilt = span(f, wf(186, 'tipped') - 4, wf(186, 'tipped') + 18) * (1 - span(f, wf(186, 'once') + 10, wf(187, 'once') + 10));
	const under = span(f, wf(187, 'under') - 6, wf(187, 'water') + 12);
	const lost = lead(f, wf(187, 'lost'), 8);
	const cam = dolly(camAt(f, [
		{f: sf(186) - 10, cam: {pos: [30, 9, 6], look: [0, -2, 0], fov: 32}},
		{f: ef(187) + 30, cam: {pos: [27, 7, 12], look: [0, -2.4, 1.5], fov: 32}},
	]), f, BEATS);
	return (
		<>
			<Hull3D width={1920} height={1080} cam={cam} cut={0} g4={0} sensors={0} interfaces={0} sea={1} tilt={9 * tilt + 15 * under} bench={1} />
			<div style={{position: 'absolute', left: 140, top: 86, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', width: 1640}}>
				<Chip text="SPRING 2023 · THE PLATFORM, AT SEA AND IN PORT" tone={colors.amber} size={30} />
				{f >= wf(187, 'may') - 10 ? <DatePill f={f} fps={fps} day={24} month={5} year={2023} dayWord={wf(187, 'may')} fromDay={1} size={30} /> : null}
				{f >= wf(187, 'lost') - 10 ? <Chip text="TAIL CONE LOST" tone={colors.red} size={34} style={{opacity: lost, transform: `scale(${bump(f, fps, wf(187, 'lost') + LAND).toFixed(4)})`}} /> : null}
			</div>
			<div style={{position: 'absolute', left: 140, bottom: 54, ...T(26, {color: colors.amber, fontWeight: 700})}}>ILLUSTRATION · UPSETS: USCG ROI 4.38 · ANGLES ILLUSTRATIVE</div>
		</>
	);
};

// ── 4 · How was it allowed? The law, the words, the guidance, the rescue (s187–s199) ───────────────────────────

const Law: React.FC = () => {
	const f = useFilmFrame();
	const q = vis(f, sf(188) - 8, ef(188) + 14);
	const law = vis(f, sf(189) - 10, ef(189) + 14);
	const timeline = vis(f, sf(193) - 10, ef(197) + 20);
	const rescue = vis(f, sf(198) - 10, ef(199) + 20);
	const X = (y: number) => 300 + (y - 1993) * 42;
	const bs = beatScale(f, [wf(188, 'like'), wf(188, 'allowed'), wf(188, 'passengers'), wf(189, 's'), wf(189, 'reading'), wf(189, 'law'), wf(189, 'not'), wf(190, 'law'), wf(190, 't'), wf(190, 'notes'), wf(190, 'submersible'), wf(190, 'carrying'), wf(190, 'even'), wf(190, 'one'), wf(190, 'passenger'), wf(190, 'hire'), wf(190, 'small'), wf(190, 'vessel'), wf(190, 'must'), wf(190, 'inspected'), wf(190, 'guard'), wf(191, 'registered'), wf(191, 'titan'), wf(191, 'never', 1), wf(191, 'inspection'), wf(192, 'found'), wf(192, 'described'), wf(192, 'paying'), wf(192, 'passengers'), wf(192, 'as'), wf(192, 'specialists'), wf(192, 'mandatory'), wf(192, 'duties'), wf(192, 'conceal'), wf(192, 'paying', 1), wf(193, 'guidance'), wf(193, 'same'), wf(194, 'voluntary'), wf(194, 'guidance'), wf(194, 'passenger'), wf(194, 'submersibles'), wf(194, 'published'), wf(194, 'july'), wf(194, 'nineteen'), wf(195, 'december'), wf(195, 'new'), wf(195, 'definition'), wf(195, 'cover'), wf(195, 'submersible'), wf(195, 'one'), wf(195, 'hire'), wf(196, 'october'), wf(196, 'twenty'), wf(196, 'twenty-five'), wf(196, 'the'), wf(196, 'found'), wf(196, 'guidance'), wf(196, 'never'), wf(196, 'updated'), wf(197, 'found'), wf(197, 'specific'), wf(197, 'inspection'), wf(197, 'standards'), wf(197, 'submersible'), wf(197, 'designed'), wf(198, 'guidance'), wf(198, 'recommended'), wf(198, 'submersible'), wf(198, 'dive'), wf(198, 'deeper'), wf(198, 'rescue'), wf(199, 'b'), wf(199, 'titan'), wf(199, 'regularly'), wf(199, 'dived'), wf(199, 'titanic'), wf(199, 'no'), wf(199, 'standing'), wf(199, 'could'), wf(200, 'b'), wf(200, 'voluntary'), wf(200, 'guidance'), wf(200, 'rules'), wf(200, 'passenger'), wf(200, 'vessels'), wf(200, 'insufficient'), wf(200, 'make'), wf(200, 'follow'), wf(200, 'established'), wf(200, 'standards')], 0.018);
	return (
		<AbsoluteFill style={{transform: `scale(${bs.toFixed(4)})`, transformOrigin: '50% 45%'}}>
			<AbsoluteFill style={{opacity: q}}>
				<RealFootage f={f} start={sf(188) - 8} end={ef(188) + 14} src="photos/hearing_room.jpg" video={false} date="SEP 2024" what="THE MARINE BOARD'S PUBLIC HEARING" source="U.S. COAST GUARD · DVIDS" push={0.06} focus={[0.5, 0.45]} />
			</AbsoluteFill>
			{law > 0 ? (
				<AbsoluteFill style={{opacity: law}}>
					<RecordPage set="mir" start={sf(189) - 10} end={ef(189) + 14} page={68} hl={[]} label="EXHIBIT" title="2.6 · OVERSIGHT" pushTo={wf(189, 'not')} />
				</AbsoluteFill>
			) : null}
			{/* the law in the NTSB's own words (forensic v2, idea 1): the page, highlighted on the sentence that says it */}
			<RecordPage set="mir" start={sf(190) - 14} end={ef(191) + 20} page={68} hl={[{key: 'pvsa', at: wf(190, 'submersible')}]} label="EXHIBIT" title="2.6 · OVERSIGHT" pushTo={wf(190, 'submersible')} />
			<RecordPage set="roi" start={sf(192) - 14} end={ef(192) + 20} hl={[{key: 'c53', at: wf(192, 'conceal')}]} label="EXHIBIT" title="SEC. 5.18" pushTo={wf(192, 'mission')} />
			{timeline > 0 ? (
				<AbsoluteFill style={{opacity: timeline}}>
					<Mount x={140} y={150} w={1640} h={760} start={sf(193) - 10} end={ef(197) + 20} source="NVIC 05-93 AND THE 1993 LAW: NTSB MIR-25-36 · USCG MBI REPORT" labels={[]} lean={3} />

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
					<div style={{position: 'absolute', left: 220, top: 760, display: 'flex', gap: 14}}>
						{f >= wf(196, 'n') - 10 ? <Chip text="NTSB: NEVER UPDATED TO MATCH" tone={colors.red} size={30} /> : null}
					</div>
				</AbsoluteFill>
			) : null}
			<AbsoluteFill style={{opacity: Math.max(vis(f, sf(193) - 10, wf(194, 'voluntary') - 4, 10, 10), vis(f, sf(197) - 10, ef(197) + 16, 10, 10))}}>
				<RealFootage f={f} start={sf(193) - 10} end={ef(197) + 16} src="photos/board.jpg" video={false} date="SEP 2024" what="THE COAST GUARD'S MARINE BOARD" source="U.S. COAST GUARD · DVIDS" push={0.08} focus={[0.5, 0.45]} />
				<div style={{position: 'absolute', left: 140, top: 110, opacity: lead(f, wf(197, 'standards'), 8)}}><Chip text="COAST GUARD: NO SPECIFIC DESIGN OR BUILD STANDARDS · NTSB" tone={colors.red} size={30} /></div>
			</AbsoluteFill>
			{rescue > 0 ? (
				<AbsoluteFill style={{opacity: rescue}}>
					<Mount x={140} y={130} w={1640} h={800} start={sf(198) - 10} end={ef(199) + 20} source="NVIC 05-93 RECOMMENDATION · NTSB MIR-25-36" labels={['DEPTHS TO SCALE']} lean={3} />

					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* to scale: 0–4,000 m over 560 px */}
						<line x1={300} x2={1700} y1={340} y2={340} stroke={colors.sub} strokeWidth={2} />
						<rect x={420} y={340} width={70} height={(45 / 4000) * 480 * lead(f, wf(198, 'rescue'), 14) + 3} fill={colors.cyan} />
						<text x={510} y={370} style={T(28, {fill: colors.cyan})} opacity={lead(f, wf(198, 'rescue'), 10)}>45 M · WHERE ITS RESCUE IS EFFECTIVE (NVIC 05-93)</text>
						<rect x={1560} y={340} width={70} height={480 * span(f, wf(199, 'regularly') - 6, wf(199, 'titanic') + 10) * (3840 / 4000)} fill={colors.amber} />
						<text x={1540} y={340 + 480 * 0.96} textAnchor="end" style={T(30, {fill: colors.amber, fontWeight: 700})} opacity={lead(f, wf(199, 'titanic'), 8)}>3,840 M · THE TITANIC</text>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 200, opacity: lead(f, wf(199, 'n'), 8)}}><Chip text="NTSB: NO RESCUE STANDING BY THAT COULD REACH IT" tone={colors.red} size={30} /></div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="mir" start={sf(200) - 14} end={hold(200).from + hold(200).frames + 10} hl={[{key: 'insufficient_es', at: wf(200, 'insufficient')}]} label="FINDING" title="CONTRIBUTING" pushTo={wf(200, 'guidance')} />
		</AbsoluteFill>
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
