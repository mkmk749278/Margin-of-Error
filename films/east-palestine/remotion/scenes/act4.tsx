import React from 'react';
import {AbsoluteFill, Img, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {ease, tween} from '../../../../lib/remotion/motion';
import {SfxCue} from '../../../../lib/remotion/sfx';
import {RecordDoc, RecordPage} from '../docs';
import {ActTitle, media, Mount, useFilmFrame} from '../kit';
import {Card, Honesty, lit, mono, offW, onW, Pop} from '../parts';
import {BearingSection} from '../parts2';
import {RealFootage, VerdictCard} from '../parts3';
import {BlindStrip, Chains, erAt, erSec, PlotEvent, TankPlot} from '../parts4';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT IV · THE CASCADE (sentences 112–175). Choreography index: scenes/choreography/act4.md.

const T = (size: number, extra: React.CSSProperties = {}): React.CSSProperties => ({fontFamily: mono, fontSize: size, letterSpacing: 1.5, ...extra});
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// ── 1 · Burn-off: the bearing fails (s112–s116) ──────────────────────────────────────────────────────────────────

const BurnOff: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const heat = Math.max(0.3, lead(f, wf(113, 'heat'), 30));
	const burn = lead(f, wf(114, 'burns'), 30);
	const seals = lead(f, wf(115, 'go'), 16);
	const drop = tween(f, wf(116, 'breaks') - 4, wf(116, 'drops') + 20, 0, 1, ease.arrive);
	return (
		<Mount x={96} y={96} w={1728} h={880} source="BURN-OFF AND SEPARATION · AFTER NTSB RIR-24-05 PP. 46–48, 101" labels={['ILLUSTRATION', 'NOT TO SCALE']} start={sf(112) - 20} end={sf(117) + 14}>
			<div style={{position: 'absolute', left: 0, top: 0, transform: 'scale(0.86)', transformOrigin: '0 0'}}>
				<BearingSection
					f={f}
					x={240}
					y={140}
					axleOn={sf(112) - 30}
					cupOn={wf(113, 'cup') - 20}
					rollersOn={wf(113, 'rollers') - 20}
					sealsOn={sf(112) - 30}
					greaseOn={sf(112) - 30}
					heat={heat}
					outsideHeat={heat * 0.6}
					jitter={lead(f, wf(113, 'grind'), 10) * (1 - drop)}
					spin={(f - sf(112)) / 60}
					burn={burn}
					sealsGone={seals}
					drop={drop}
					labels={[
						{t: 'ROLLERS', at: wf(113, 'rollers'), x: 520, y: 120, tone: colors.ink},
						{t: 'CUP', at: wf(113, 'cup'), x: 860, y: 120, tone: colors.cyan},
						{t: 'GREASE BURNS', at: wf(114, 'grease'), x: 560, y: 520, tone: colors.red},
						{t: 'SEALS GO', at: wf(115, 'seals'), x: 240, y: 560, tone: colors.red},
						{t: 'THE JOURNAL BREAKS AWAY', at: wf(116, 'journal'), x: 360, y: 640, tone: colors.red},
					]}
				/>
			</div>
			<div style={{position: 'absolute', left: 40, top: 30, display: 'flex', gap: 20}}>
				<span style={T(36, {...lit(f, wf(112, 'bearing'), colors.ink)})}>THE L1 BEARING</span>
				<span style={T(36, {color: colors.red, opacity: onW(f, wf(113, 'fails'), 8)})}>FAILING</span>
				<span style={T(36, {color: colors.red, opacity: onW(f, wf(113, 'grind'), 8)})}>GRIND</span>
				<span style={T(36, {color: colors.red, opacity: onW(f, wf(113, 'heat'), 8)})}>HEAT</span>
			</div>
			<Pop f={f} fps={fps} on={wf(116, 'end')} style={{position: 'absolute', right: 40, top: 30}}>
				<div style={T(36, {color: colors.ink})}>
					THE END OF THE AXLE <span style={{opacity: onW(f, wf(116, 'axle'), 6)}}>· AXLE 1</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(116, 'wheelset')} style={{position: 'absolute', right: 40, top: 90}}>
				<div style={T(44, {fontWeight: 700, color: colors.red})}>
					THE WHEELSET <span style={{opacity: onW(f, wf(116, 'drops'), 6)}}>DROPS</span>
				</div>
			</Pop>
		</Mount>
	);
};

// ── 2 · Signature 1: the blind nineteen miles, on the event recorder (s117–s126 and their holds) ────────────────

const Blind: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	// recorder time (s after 20:13:00) on the narration's frames: compressed across the 19 miles, slower at the end
	const keys = [
		{frame: wf(118, 'from'), sec: 0},
		{frame: wf(121, 'milepost'), sec: erSec('20:52:30')},
		{frame: wf(123, 'critical'), sec: erSec('20:53:05')},
		{frame: wf(124, 'slow'), sec: erSec('20:53:30')},
		{frame: wf(125, 'emergency'), sec: erSec('20:54:24')},
		{frame: wf(126, 'stop'), sec: erSec('20:55:02')},
	];
	const sec = interpolate(f, keys.map((k) => k.frame), keys.map((k) => k.sec), clamp);
	const now = erAt(sec);
	const reading = f < wf(122, 'two') - 6 ? null : Math.round(rollTo(f, [{frame: wf(122, 'two') - 6, value: 0}, {frame: wf(122, 'fifty-three') + LAND, value: 253}]));
	const ft = Math.round(rollTo(f, [{frame: wf(126, 'one', 0) - 8, value: 0}, {frame: wf(126, 'thousand') + LAND, value: 1000}, {frame: wf(126, 'one', 1) - 4, value: 1000}, {frame: wf(126, 'sixty') + LAND, value: 1160}]));
	const secs = Math.round(rollTo(f, [{frame: wf(126, 'stop') - 4, value: 0}, {frame: wf(126, 'thirty-eight') + LAND, value: 38}]));
	const emerg = f >= wf(125, 'emergency') - 2;
	return (
		<>
			<Card x={96} y={96} w={1728} h={880}>
				<span />
			</Card>
			<div style={{position: 'absolute', left: 150, top: 130, display: 'flex', gap: 24, alignItems: 'baseline'}}>
				<span style={T(44, {fontWeight: 700, opacity: onW(f, wf(117, 'watch'), 8), ...lit(f, wf(117, 'last'), colors.ink)})}>THE LAST</span>
				<span style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(117, 'nineteen'), 8)})}>19</span>
				<span style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(117, 'miles'), 8)})}>MILES</span>
			</div>
			{/* readouts: one driver (the recorder time) for the strip and every number */}
			<div style={{position: 'absolute', right: 150, top: 120, width: 520, background: colors.void, border: `1px solid ${colors.border}`, padding: '14px 20px', opacity: onW(f, wf(118, 'from'), 10)}}>
				{[
					['CLOCK (EST)', now.clock, colors.cyan],
					['SPEED', `${now.mph} MPH`, colors.cyan],
					['FROM SALEM', `${now.mi.toFixed(1)} MI`, colors.ink],
				].map(([k, v, c]) => (
					<div key={k} style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}>
						<span style={T(26, {color: colors.sub})}>{k}</span>
						<span style={T(36, {fontWeight: 700, color: c})}>{v}</span>
					</div>
				))}
				<div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderTop: `1px solid ${colors.border}`}}>
					<span style={T(26, {color: colors.sub})}>BEARING</span>
					<span style={T(36, {fontWeight: 700, color: reading === null ? colors.sub : colors.red, transform: `scale(${bump(f, fps, wf(122, 'fifty-three') + LAND).toFixed(4)})`, display: 'inline-block'})}>
						{reading === null ? (f >= wf(120, 'nothing') ? 'NO READING' : '—') : `+${reading}°F`}
					</span>
				</div>
			</div>
			<BlindStrip f={f} fps={fps} sec={sec} y={520} darkOn={wf(119, 'between')} nothingOn={wf(119, 'nothing')} epOn={wf(121, 'milepost')} failAt={f >= wf(125, 'separates') - 6 ? wf(125, 'separates') : null} />
			{/* the words of the strip, each on its own row (first the 19 miles, then MP 49.81 onward) */}
			<AbsoluteFill style={{opacity: offW(f, wf(121, 'milepost') - 6, 12)}}>
				<div style={{position: 'absolute', left: 150, top: 210, width: 1060}}>
					<div style={T(36, {opacity: onW(f, wf(118, 'salem'), 8), ...lit(f, wf(118, 'east'), colors.ink)})}>
						FROM SALEM <span style={{opacity: onW(f, wf(118, 'train'), 6)}}>THE TRAIN RUNS EAST</span>{' '}
						<span style={{fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(118, 'between'), 8)}}>
							<span style={{opacity: onW(f, wf(118, 'nineteen'), 6)}}>19</span>–<span style={{opacity: onW(f, wf(118, 'forty-five'), 6)}}>45</span> <span style={{opacity: onW(f, wf(118, 'hour'), 6)}}>MPH</span>
						</span>
					</div>
					<div style={T(36, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(119, 'measures'), 8)})}>NOTHING MEASURES THE BEARING</div>
					<div style={T(36, {fontWeight: 700, color: colors.amber, marginTop: 10, opacity: onW(f, wf(120, 'nineteen'), 8)})}>
						19 MILES <span style={{opacity: onW(f, wf(120, 'track'), 6)}}>OF TRACK</span> <span style={{color: colors.ink, opacity: onW(f, wf(120, 'reads'), 6)}}>· NOTHING READS IT</span>
					</div>
				</div>
			</AbsoluteFill>
			<div style={{position: 'absolute', left: 150, top: 210, width: 1060, opacity: onW(f, wf(121, 'milepost'), 8)}}>
				<div style={T(44, {fontWeight: 700, color: colors.red})}>
					<span style={{opacity: onW(f, wf(121, 'forty-nine'), 6)}}>MP 49.</span>
					<span style={{opacity: onW(f, wf(121, 'eight'), 6)}}>8</span>
					<span style={{opacity: onW(f, wf(121, 'one'), 6)}}>1</span> <span style={{opacity: onW(f, wf(122, 'degrees'), 6)}}>· +253°F ·</span> <span style={{opacity: onW(f, wf(122, 'top'), 6)}}>MAX</span> <span style={{opacity: onW(f, wf(122, 'scale'), 6)}}>OF THE SCALE</span>
				</div>
				<div style={{marginTop: 12, display: 'flex', gap: 20, whiteSpace: 'nowrap', alignItems: 'baseline'}}>
					<span style={T(44, {fontWeight: 700, color: colors.void, background: colors.red, padding: '0 10px', opacity: onW(f, wf(123, 'critical'), 6)})}>
						CRITICAL <span style={{opacity: onW(f, wf(123, 'alarm'), 6)}}>ALARM</span>
					</span>
					<span style={T(36, {color: colors.amber, opacity: onW(f, wf(124, 'crew'), 8)})}>
						CREW <span style={{opacity: onW(f, wf(124, 'slow'), 6)}}>SLOWS · BRAKE {now.db}</span>
					</span>
				</div>
			</div>
			{emerg || f >= wf(125, 'less') - 8 ? (
				<div style={{position: 'absolute', left: 150, top: 780, width: 1620, whiteSpace: 'nowrap'}}>
					<div style={{display: 'flex', gap: 20, alignItems: 'baseline'}}>
						<span style={T(36, {color: colors.ink, opacity: onW(f, wf(125, 'minute'), 6)})}>&lt; 1 MINUTE LATER</span>
						<span style={T(36, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(125, 'axle'), 6)})}>
							THE AXLE <span style={{opacity: onW(f, wf(125, 'separates'), 6)}}>SEPARATES</span>
						</span>
						<span style={T(36, {fontWeight: 700, color: colors.void, background: colors.red, padding: '0 10px', opacity: onW(f, wf(125, 'brakes'), 6)})}>
							BRAKES: <span style={{opacity: onW(f, wf(125, 'emergency'), 6)}}>EMERGENCY</span> <span style={{opacity: onW(f, wf(125, 'own'), 6)}}>· ON THEIR OWN</span>
						</span>
					</div>
					<div style={T(30, {color: colors.ink, marginTop: 12, opacity: onW(f, wf(126, 'emergency'), 6)})}>
						FROM THE EMERGENCY, <span style={{opacity: onW(f, wf(126, 'lead'), 6)}}>THE LEAD LOCOMOTIVES</span> <span style={{opacity: onW(f, wf(126, 'travel'), 6)}}>TRAVEL</span> <span style={{color: colors.cyan}}>{ft.toLocaleString('en-US')} FT</span>{' '}
						<span style={{opacity: onW(f, wf(126, 'stop'), 6)}}>
							· STOP <span style={{color: colors.cyan}}>{secs} S</span> <span style={{opacity: onW(f, wf(126, 'later'), 6)}}>LATER (NTSB P. 8)</span>
						</span>
					</div>
				</div>
			) : null}
			<div style={{position: 'absolute', left: 150, top: 930, ...T(26, {color: colors.ink})}}>NTSB EVENT RECORDER DATA · NS 4178 · RRD23MR005 · TIME COMPRESSED · DISTANCE: OUR CALCULATION</div>
			<div style={{position: 'absolute', right: 150, top: 440, ...T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'})}}>DASHED: INSIDE THE BEARING · ILLUSTRATIVE</div>
		</>
	);
};

// ── 3 · Verdict 2, the grease; why the cause is unknown (s127–s131) ──────────────────────────────────────────────

const Grease2: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const photoO = Math.min(onW(f, sf(130) - 6, 14), offW(f, sf(131) - 6, 14));
	return (
		<>
			<VerdictCard f={f} fps={fps} n={2} start={sf(127) - 14} end={sf(129) - 4} head="THE SIMPLE ANSWER, HELD SINCE ACT II:" headAt={wf(127, 'so')} quote={[['A SKIPPED REPAIR.', wf(127, 'was')], ['NO', wf(127, 'the')], ['GREASE.', wf(127, 'grease')]]} verdict="THE RECORD CAN'T SAY" verdictAt={wf(128, 'say')} record="NTSB RIR-24-05 P. 111" recordAt={wf(128, 'record')} />
			<RecordPage set="rir" start={sf(129) - 10} end={sf(130) + 14} label="NTSB RIR-24-05" title="FAILURE SCENARIOS" hl={[{key: 'C19', at: wf(129, 'root'), ats: [wf(129, 'root'), wf(129, 'unclear')]}]} pushTo={wf(129, 'found')} />
			{photoO > 0 ? (
				<AbsoluteFill style={{opacity: photoO}}>
					<div style={{position: 'absolute', left: 140, top: 150, width: 800, background: colors.paper, padding: 10}}>
						<Img src={media('fig/fig18_bearing_cup.png')} style={{width: 780, height: 488}} />
						<div style={T(26, {color: colors.paper_ink, padding: '6px 4px 0'})}>NTSB FIG. 18 · RECOVERED BEARING CUP</div>
					</div>
					<div style={{position: 'absolute', left: 980, top: 150, width: 800, background: colors.paper, padding: 10}}>
						<Img src={media('fig/fig19_bearing_journal.png')} style={{width: 780, height: 487}} />
						<div style={T(26, {color: colors.paper_ink, padding: '6px 4px 0'})}>NTSB FIG. 19 · RECOVERED JOURNAL</div>
					</div>
					<div style={{position: 'absolute', left: 140, top: 760, display: 'flex', gap: 20, flexWrap: 'wrap', width: 1640}}>
						<span style={T(36, {color: colors.ink, opacity: onW(f, wf(130, 'started'), 6)})}>WHATEVER STARTED IT:</span>
						<span style={T(36, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(130, 'fatigue'), 6)})}>FATIGUE</span>
						<span style={T(36, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(130, 'lubrication'), 6)})}>LOSS OF LUBRICATION</span>
						<span style={T(36, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(130, 'water'), 6)})}>WATER</span>
						<span style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(130, 'erased'), 6)})}>
							ERASED <span style={{opacity: onW(f, wf(130, 'heat'), 6)}}>BY THE HEAT</span> <span style={{opacity: onW(f, wf(130, 'failure'), 6)}}>OF ITS OWN FAILURE · NTSB P. 111</span>
						</span>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={sf(131) - 10} end={ef(131) + 30} label="NTSB RIR-24-05" title="A PATTERN" hl={[{key: 'C129', at: wf(131, 'bearing'), ats: [wf(131, 'bearing'), wf(131, 'destroy')]}]} pushTo={wf(131, 'noted')} />
			<Pop f={f} fps={fps} on={wf(129, 'investigators')} off={sf(130) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					ROOT CAUSE <span style={{opacity: onW(f, wf(129, 'failure'), 6)}}>OF THE FAILURE:</span> <span style={{opacity: onW(f, wf(129, 'unclear'), 6)}}>UNCLEAR</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(131, 'pattern')} off={ef(131) + 24} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					A PATTERN · <span style={{opacity: onW(f, wf(131, 'fails'), 6)}}>FAILS BADLY</span> <span style={{opacity: onW(f, wf(131, 'derail'), 6)}}>ENOUGH TO DERAIL</span> <span style={{opacity: onW(f, wf(131, 'tends'), 6)}}>→ TENDS TO DESTROY</span> <span style={{opacity: onW(f, wf(131, 'evidence'), 6)}}>THE EVIDENCE OF WHY</span>
				</div>
			</Pop>
		</>
	);
};

// ── 4 · Verdict 3, the burn and the evidence (s132–s135) ───────────────────────────────────────────────────────

const Evidence: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const photoO = onW(f, sf(134) - 6, 14);
	return (
		<>
			<VerdictCard f={f} fps={fps} n={3} start={sf(132) - 14} end={sf(134) - 4} head="ANOTHER CLAIM:" headAt={wf(132, 'claim')} quote={[['THE BURN,', wf(132, 'burn')], ['THREE DAYS LATER,', wf(132, 'three')], ['DESTROYED', wf(132, 'destroyed')], ['THE EVIDENCE.', wf(132, 'evidence')]]} verdict="NOT IN THE RECORD" verdictAt={wf(133, 'record')} record="NTSB RIR-24-05 P. 46, P. 101" recordAt={wf(133, 'not')} />
			{photoO > 0 ? (
				<AbsoluteFill style={{opacity: photoO}}>
					<div style={{position: 'absolute', left: 140, top: 140, width: 520, background: colors.paper, padding: 10}}>
						<Img src={media('fig/fig15_l1_journal_as_found.png')} style={{width: 500, height: 667}} />
						<div style={T(26, {color: colors.paper_ink, padding: '6px 4px 0'})}>NTSB FIG. 15 · L1 JOURNAL AS FOUND</div>
					</div>
					<div style={{position: 'absolute', left: 700, top: 140, width: 520, background: colors.paper, padding: 10}}>
						<Img src={media('fig/fig16_l1_components.png')} style={{width: 500, height: 666}} />
						<div style={T(26, {color: colors.paper_ink, padding: '6px 4px 0'})}>NTSB FIG. 16 · L1 BEARING PARTS</div>
					</div>
					<div style={{position: 'absolute', left: 1270, top: 160, width: 520}}>
						<div style={T(36, {color: colors.ink, opacity: onW(f, wf(134, 'recovered'), 6)})}>
							RECOVERED <span style={{opacity: onW(f, wf(134, 'pieces'), 6)}}>THE BEARING'S PIECES</span>
						</div>
						<div style={{marginTop: 20}}>
							<DatePill f={f} fps={fps} day={5} month={2} year={2023} dayWord={wf(134, 'fifth')} monthWord={wf(134, 'february')} size={44} />
						</div>
						<div style={T(36, {fontWeight: 700, color: colors.cyan, marginTop: 20, opacity: onW(f, wf(134, 'west'), 6)})}>
							WEST <span style={{opacity: onW(f, wf(134, 'wreck'), 6)}}>OF THE WRECK</span>
						</div>
						<div style={T(30, {color: colors.ink, marginTop: 10, opacity: onW(f, wf(134, 'fallen'), 6)})}>
							WHERE THEY FELL <span style={{opacity: onW(f, wf(134, 'first'), 6)}}>IN THE FIRST</span> <span style={{opacity: onW(f, wf(134, 'moments'), 6)}}>MOMENTS</span>
						</div>
						<div style={{marginTop: 60, opacity: onW(f, wf(135, 'burn'), 8)}}>
							<div style={T(36, {color: colors.ink})}>THE BURN</div>
							<div style={{marginTop: 10}}>
								<DatePill f={f} fps={fps} day={6} month={2} year={2023} dayWord={wf(135, 'sixth')} fromDay={5} size={44} />
							</div>
							<div style={T(36, {fontWeight: 700, color: colors.amber, marginTop: 14, opacity: onW(f, wf(135, 'five'), 6)})}>
								5 <span style={{opacity: onW(f, wf(135, 'other'), 6)}}>OTHER</span> <span style={{opacity: onW(f, wf(135, 'cars'), 6)}}>CARS</span>
							</div>
						</div>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 5 · The fire, the relief valves, the consist (s136–s141) ──────────────────────────────────────────────────

const Fire: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const fig20 = Math.min(onW(f, sf(137) - 6, 14), offW(f, sf(138) - 6, 14));
	const fig7 = Math.min(onW(f, sf(138) - 6, 14), offW(f, sf(139) - 6, 14));
	const fig8 = Math.min(onW(f, sf(139) - 6, 14), offW(f, sf(140) - 6, 14));
	const noList = Math.min(onW(f, sf(140) - 6, 14), offW(f, sf(141) - 6, 14));
	const photo = (src: string, w: number, h: number, cap: string, o: number, children?: React.ReactNode) =>
		o > 0 ? (
			<AbsoluteFill style={{opacity: o}}>
				<div style={{position: 'absolute', left: 160, top: 120, width: 1600, background: colors.paper, padding: 12}}>
					<Img src={media(src)} style={{width: 1576, height: (1576 * h) / w}} />
					<div style={T(26, {color: colors.paper_ink, padding: '6px 4px 0'})}>{cap}</div>
				</div>
				{children}
			</AbsoluteFill>
		) : null;
	return (
		<>
			<Pop f={f} fps={fps} on={wf(136, 'n')} off={sf(137) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					NTSB: <span style={{opacity: onW(f, wf(136, 'began'), 6)}}>LIKELY BEGAN WITH A TANK CAR</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(136) - 10} end={sf(137) + 14} label="NTSB PROBABLE CAUSE" hl={[{key: 'C130', at: wf(136, 'likely'), ats: [wf(136, 'fire'), wf(136, 'likely'), wf(136, 'tank')]}]} pushTo={wf(136, 'found')} />
			{photo(
				'fig/fig20_head_punctures.png',
				1430,
				1073,
				'NTSB FIG. 20 · LEADING A-END HEAD PUNCTURES · TANK CAR UTLX205907',
				fig20 * 0.999,
				<div style={{position: 'absolute', right: 140, top: 160, textAlign: 'right'}}>
					<div style={T(56, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px', display: 'inline-block'})}>
						<span style={{opacity: onW(f, wf(137, 'd'), 4)}}>D</span>
						<span style={{opacity: onW(f, wf(137, 'o'), 4)}}>O</span>
						<span style={{opacity: onW(f, wf(137, 't'), 4)}}>T</span>
						<span style={{opacity: onW(f, wf(137, 'one'), 4)}}>-1</span>
						<span style={{opacity: onW(f, wf(137, 'eleven'), 4)}}>11</span>
						<span style={{opacity: onW(f, wf(137, 'tank'), 4)}}> TANK CAR</span>
					</div>
					<div style={T(36, {color: colors.ink, background: colors.card, padding: '4px 14px', marginTop: 10, opacity: onW(f, wf(137, 'carrying'), 6)})}>
						<span style={{opacity: onW(f, wf(137, 'carrying'), 6)}}>CARRYING</span> FLAMMABLE <span style={{opacity: onW(f, wf(137, 'liquid'), 6)}}>LIQUID</span>
					</div>
					<div style={T(44, {fontWeight: 700, color: colors.void, background: colors.red, padding: '4px 14px', marginTop: 10, opacity: onW(f, wf(137, 'punctured'), 6), transform: `scale(${bump(f, fps, wf(137, 'punctured') + LAND).toFixed(4)})`, transformOrigin: '100% 50%'})}>
						PUNCTURED <span style={{opacity: onW(f, wf(137, 'contents'), 6)}}>· ITS CONTENTS</span> <span style={{opacity: onW(f, wf(137, 'fed'), 6)}}>FED THE FIRE</span>
					</div>
				</div>,
			)}
			{photo(
				'fig/fig07_pileup_vcm_cars.png',
				1426,
				473,
				'NTSB FIG. 7 · THE PILEUP AND THE VINYL CHLORIDE TANK CARS',
				fig7 * 0.999,
				<div style={{position: 'absolute', left: 160, top: 720}}>
					<div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(138, 'pile'), 6)})}>
						IN THE SAME PILE: <span style={{color: colors.amber, opacity: onW(f, wf(138, 'five'), 6)}}>5</span> <span style={{opacity: onW(f, wf(138, 'pressure'), 6)}}>PRESSURE TANK CARS (DOT-105)</span>
					</div>
					<div style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(138, 'vinyl'), 6)})}>OF VINYL CHLORIDE</div>
				</div>,
			)}
			{photo(
				'fig/fig08_prds_venting.png',
				1430,
				433,
				'NTSB FIG. 8 · PRESSURE RELIEF DEVICES VENTING',
				fig8 * 0.999,
				<div style={{position: 'absolute', left: 160, top: 700, width: 1600}}>
					<div style={T(44, {fontWeight: 700, color: colors.red, opacity: onW(f, wf(139, 'heat'), 6)})}>
						HEAT <span style={{opacity: onW(f, wf(139, 'fire'), 6)}}>FROM THE FIRE</span> <span style={{opacity: onW(f, wf(139, 'relief'), 6), color: colors.ink}}>SET OFF THE RELIEF VALVES</span> <span style={{opacity: onW(f, wf(139, 'four'), 6), color: colors.amber}}>ON 4 OF THEM</span>
					</div>
					<div style={T(36, {color: colors.ink, marginTop: 14, opacity: onW(f, wf(139, 'valves', 1), 6)})}>
						A RELIEF VALVE OPENS <span style={{opacity: onW(f, wf(139, 'pressure'), 6)}}>WHEN THE PRESSURE</span> <span style={{opacity: onW(f, wf(139, 'inside'), 6)}}>INSIDE</span> <span style={{opacity: onW(f, wf(139, 'high'), 6)}}>GETS TOO HIGH · NTSB P. 17</span>
					</div>
				</div>,
			)}
			{noList > 0 ? (
				<AbsoluteFill style={{opacity: noList, alignItems: 'center', justifyContent: 'center'}}>
					<div style={T(44, {color: colors.ink, opacity: onW(f, wf(140, 'responders'), 6)})}>THE RESPONDERS</div>
					<div style={T(72, {fontWeight: 700, color: colors.amber, marginTop: 20, opacity: onW(f, wf(140, 'know'), 6)})}>
						DID NOT YET KNOW <span style={{opacity: onW(f, wf(140, 'train'), 6)}}>WHAT WAS ON THE TRAIN</span>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={sf(141) - 10} end={ef(141) + 30} label="NTSB FINDING 14" hl={[{key: 'C135', at: wf(141, 'delay'), ats: [wf(141, 'delay'), wf(141, 'list'), wf(141, 'longer'), wf(141, 'evacuation')]}]} pushTo={wf(141, 'found')} />
			<Pop f={f} fps={fps} on={wf(141, 'cars')} off={ef(141) + 24} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					THE LIST OF CARS (CONSIST) <span style={{opacity: onW(f, wf(141, 'kept'), 6)}}>· KEPT RESPONDERS</span> <span style={{opacity: onW(f, wf(141, 'fire'), 6)}}>NEAR THE FIRE</span> <span style={{opacity: onW(f, wf(141, 'needed'), 6)}}>LONGER THAN NEEDED</span> <span style={{opacity: onW(f, wf(141, 'delayed'), 6)}}>· EVACUATION DELAYED</span>
				</div>
			</Pop>
		</>
	);
};

// ── 6 · What they feared: polymerization (s142–s145) ──────────────────────────────────────────────────────────

const Fear: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const p = rollTo(f, [{frame: wf(144, 'pressure') - 20, value: 0}, {frame: wf(144, 'fails'), value: 1}]);
	return (
		<>
			<Card x={96} y={96} w={1728} h={880}>
				<span />
			</Card>
			<div style={{position: 'absolute', left: 150, top: 130, display: 'flex', gap: 20, alignItems: 'baseline'}}>
				<span style={T(44, {fontWeight: 700, ...lit(f, wf(142, 'vinyl'), colors.amber)})}>VINYL CHLORIDE</span>
				<span style={T(36, {color: colors.ink, opacity: onW(f, wf(142, 'raw'), 6)})}>
					→ THE RAW MATERIAL OF <span style={{opacity: onW(f, wf(142, 'p'), 4)}}>P</span>
					<span style={{opacity: onW(f, wf(142, 'v'), 4)}}>V</span>
					<span style={{opacity: onW(f, wf(142, 'c'), 4)}}>C</span>
					<span style={{opacity: onW(f, wf(142, 'plastic'), 6)}}>, A PLASTIC</span>
				</span>
			</div>
			<Chains f={f} x={260} y={230} joinAt={wf(143, 'join')} chainAt={wf(143, 'chains')} heatAt={wf(143, 'heat')} />
			<div style={{position: 'absolute', left: 150, top: 600, display: 'flex', gap: 20}}>
				<span style={T(36, {color: colors.cyan, opacity: onW(f, wf(143, 'molecules'), 6)})}>MOLECULES</span>
				<span style={T(36, {color: colors.amber, opacity: onW(f, wf(143, 'long'), 6)})}>JOIN INTO LONG CHAINS</span>
				<span style={T(36, {color: colors.amber, opacity: onW(f, wf(143, 'reaction'), 6)})}>THAT REACTION</span>
				<span style={T(36, {color: colors.red, opacity: onW(f, wf(143, 'gives'), 6)})}>GIVES OFF HEAT</span>
			</div>
			{/* in a closed tank: pressure builds until the tank fails */}
			<svg style={{position: 'absolute', left: 0, top: 0}} width={1920} height={1080}>
				<g opacity={onW(f, wf(144, 'closed'), 10)}>
					<rect x={260} y={700} width={700} height={200} rx={100} fill={colors.card} stroke={p >= 0.99 ? colors.red : colors.amber} strokeWidth={6} />
					<rect x={280} y={720} width={660 * p} height={160} rx={80} fill={colors.red} opacity={0.25 + 0.3 * p} />
					{p >= 0.99 ? <path d="M 610 700 L 630 760 L 600 800 L 640 860 L 615 900" fill="none" stroke={colors.red} strokeWidth={8} /> : null}
				</g>
			</svg>
			<div style={{position: 'absolute', left: 1020, top: 720, width: 760}}>
				<div style={T(36, {color: colors.ink, opacity: onW(f, wf(144, 'closed'), 6)})}>
					IN A CLOSED TANK, <span style={{opacity: onW(f, wf(144, 'runaway'), 6), color: colors.amber}}>A RUNAWAY REACTION</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.red, marginTop: 10, opacity: onW(f, wf(144, 'build'), 6)})}>
					PRESSURE BUILDS <span style={{opacity: onW(f, wf(144, 'tank', 1), 6)}}>UNTIL THE TANK</span> <span style={{opacity: onW(f, wf(144, 'fails'), 6)}}>FAILS</span>
				</div>
				<div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 30, opacity: onW(f, wf(145, 'fear'), 6), transform: `scale(${bump(f, fps, wf(145, 'fear') + LAND).toFixed(4)})`, transformOrigin: '0 50%'})}>THE FEAR</div>
			</div>
			<div style={{position: 'absolute', right: 150, top: 920, ...T(26, {color: colors.amber, border: `1px solid ${colors.amber}`, padding: '2px 8px'})}}>ILLUSTRATION · NTSB P. 18, P. 66</div>
		</>
	);
};

// ── 7 · Signature 3: the second number, on one plot (s146–s161, the plume hold) ──────────────────────────────

const PLUME = hold(160);

/** One beat of the plot's caption panel: in on its first word, out as the next beat comes in. */
const Beat: React.FC<{f: number; from: number; to: number; children: React.ReactNode}> = ({f, from, to, children}) => {
	const o = Math.min(onW(f, from, 10), offW(f, to - 8, 10));
	if (o <= 0) return null;
	return <div style={{position: 'absolute', left: 300, top: 430, width: 600, opacity: o}}>{children}</div>;
};

const Plot: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const upTo = interpolate(
		f,
		[wf(148, 'measured') - 10, wf(148, 'thirty-eight'), wf(149, 'air'), wf(150, 'afternoon'), wf(150, 'twenty-six')],
		[15.9, 17, 25.1, 25.1, 38.6],
		clamp,
	);
	const m13 = Math.round(rollTo(f, [{frame: wf(157, 'thirteen') - 10, value: 0}, {frame: wf(157, 'thirteen') + LAND, value: 13}]));
	const plumeO = Math.min(onW(f, PLUME.from - 4, 10), offW(f, PLUME.from + PLUME.frames - 10, 12));
	const line = (t: string, at: number, size = 30, c: string = colors.ink, extra: React.CSSProperties = {}) => (
		<div style={T(size, {color: c, opacity: onW(f, at, 6), marginTop: 8, ...extra})}>{t}</div>
	);
	return (
		<>
			<Card x={96} y={96} w={1728} h={900}>
				<span />
			</Card>
			<div style={{position: 'absolute', left: 150, top: 120}}>
				<div style={T(44, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(146, 'second'), 6)})}>
					THE SECOND <span style={{opacity: onW(f, wf(146, 'number'), 6)}}>NUMBER</span>
				</div>
				<div style={T(26, {color: colors.ink, marginTop: 6, opacity: onW(f, wf(148, 'hottest'), 6)})}>
					THE HOTTEST CAR, OCPX80370 <span style={{opacity: onW(f, wf(148, 'temperature'), 6)}}>· ITS SHELL TEMPERATURE</span> <span style={{opacity: onW(f, wf(148, 'contractors'), 6)}}>· MEASURED BY NS'S CONTRACTORS</span>
				</div>
			</div>
			<Honesty text="RECONSTRUCTION FROM NTSB TABLE 3" x={1774} y={120} anchor="right" />
			<TankPlot f={f} upTo={upTo} bandAt={wf(155, 'one')} band153={wf(155, 'fifty-three')} band158={wf(155, 'fifty-eight')} axisOn={sf(146) - 10} />
			{/* event lines, short labels at their own heights */}
			<PlotEvent f={f} fps={fps} h={-6} at={wf(147, 'evening')} label="6 P.M. 04 FEB" tone={colors.cyan} y={345} />
			<PlotEvent f={f} fps={fps} h={36.4} at={wf(151, 'incident')} label="06 FEB · MEETING" tone={colors.ink} y={345} anchor="end" />
			<PlotEvent f={f} fps={fps} h={39} at={wf(158, 'three')} label="3:00 P.M." tone={colors.amber} y={395} anchor="end" />
			<PlotEvent f={f} fps={fps} h={40.62} at={wf(160, 'four')} label={f >= wf(160, 'thirty-seven') ? '4:37 P.M. · CHARGES' : '4:··'} tone={colors.red} y={445} anchor="end" />
			{/* the caption panel: one beat at a time */}
			<Beat f={f} from={wf(147, 'evening')} to={wf(148, 'hottest')}>
				<div style={T(36, {fontWeight: 700, color: colors.cyan})}>
					<span style={{opacity: onW(f, wf(147, 'fourth'), 6)}}>04</span> <span style={{opacity: onW(f, wf(147, 'february'), 6)}}>FEB · EVENING</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 8})}>
					<span style={{opacity: onW(f, wf(147, 'shipper'), 6)}}>THE SHIPPER</span> <span style={{opacity: onW(f, wf(147, 'vinyl'), 6)}}>OF THE VINYL CHLORIDE,</span> <span style={{opacity: onW(f, wf(147, 'oxy'), 6), color: colors.cyan}}>OXY VINYLS,</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 8})}>
					<span style={{opacity: onW(f, wf(147, 'told'), 6)}}>TOLD</span> <span style={{opacity: onW(f, wf(147, 'norfolk'), 6)}}>NS</span> <span style={{opacity: onW(f, wf(147, 'contractors'), 6)}}>AND ITS CONTRACTORS</span> <span style={{opacity: onW(f, wf(147, 'saw'), 6)}}>IT SAW</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.cyan, marginTop: 10})}>
					<span style={{opacity: onW(f, wf(147, 'low'), 6)}}>LOW</span> <span style={{opacity: onW(f, wf(147, 'probability'), 6)}}>PROBABILITY</span>
				</div>
				<div style={T(26, {color: colors.ink, marginTop: 8, opacity: onW(f, wf(147, 'reaction'), 6)})}>OF THAT REACTION · NTSB P. 21</div>
			</Beat>
			<Beat f={f} from={wf(148, 'hottest')} to={wf(151, 'afternoon')}>
				<div style={T(56, {fontWeight: 700, color: colors.cyan, opacity: onW(f, wf(148, 'peaked'), 6)})}>
					PEAK ≈ <span style={{opacity: onW(f, wf(148, 'one'), 4)}}>1</span>
					<span style={{opacity: onW(f, wf(148, 'thirty-eight'), 4)}}>38</span>
					<span style={{opacity: onW(f, wf(148, 'fahrenheit'), 4)}}>°F</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 14})}>
					<span style={{opacity: onW(f, wf(149, 'time'), 6)}}>THIS TIME:</span> <span style={{opacity: onW(f, wf(149, 'actual'), 6), color: colors.amber}}>THE ACTUAL</span> <span style={{opacity: onW(f, wf(149, 'temperature'), 6)}}>TEMPERATURE,</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 6, opacity: onW(f, wf(149, 'number'), 6)})}>
					NOT A NUMBER <span style={{opacity: onW(f, wf(149, 'air'), 6)}}>ABOVE THE AIR</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.cyan, marginTop: 20, opacity: onW(f, wf(150, 'afternoon'), 6)})}>
					<span style={{opacity: onW(f, wf(150, 'sixth'), 6)}}>06 FEB:</span> <span style={{opacity: onW(f, wf(150, 'fallen'), 6)}}>FALLEN TO ≈</span>
					<span style={{opacity: onW(f, wf(150, 'one'), 4)}}>1</span>
					<span style={{opacity: onW(f, wf(150, 'twenty-six'), 4)}}>26°F</span>
				</div>
				<div style={T(26, {color: colors.ink, marginTop: 6, opacity: onW(f, wf(150, 'twenty-six'), 6)})}>NTSB P. 28 N. 54 · * 139°F: A SMALL FIRE UNDER THE CAR</div>
			</Beat>
			<Beat f={f} from={wf(151, 'afternoon')} to={wf(155, 'two')}>
				<div style={T(30, {color: colors.ink})}>
					<span style={{opacity: onW(f, wf(151, 'incident'), 6)}}>THE INCIDENT</span> <span style={{opacity: onW(f, wf(151, 'commander'), 6)}}>COMMANDER</span> <span style={{opacity: onW(f, wf(151, 'fire'), 6)}}>(THE VILLAGE FIRE</span> <span style={{opacity: onW(f, wf(151, 'chief'), 6)}}>CHIEF)</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 6})}>
					<span style={{opacity: onW(f, wf(151, 'governors'), 6)}}>THE GOVERNORS OF</span> <span style={{opacity: onW(f, wf(151, 'ohio'), 6)}}>OHIO</span> <span style={{opacity: onW(f, wf(151, 'pennsylvania'), 6)}}>AND PENNSYLVANIA,</span> <span style={{opacity: onW(f, wf(151, 'dozens'), 6)}}>DOZENS OF</span> <span style={{opacity: onW(f, wf(151, 'officials'), 6)}}>OFFICIALS</span>
				</div>
				<div style={T(44, {fontWeight: 700, color: colors.amber, marginTop: 16})}>
					<span style={{opacity: onW(f, wf(152, 'oxy'), 6)}}>OXY VINYLS:</span> <span style={{opacity: onW(f, wf(152, 'not'), 6)}}>NOT</span> <span style={{opacity: onW(f, wf(152, 'invited'), 6)}}>INVITED</span>
				</div>
				<div style={T(26, {color: colors.ink, marginTop: 4})}>
					<span style={{opacity: onW(f, wf(152, 'incident'), 6)}}>THE INCIDENT</span> <span style={{opacity: onW(f, wf(152, 'commander'), 6)}}>COMMANDER</span> <span style={{opacity: onW(f, wf(152, 'told'), 6)}}>TO THE NTSB · P. 27</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 16})}>
					<span style={{opacity: onW(f, wf(153, 'found'), 6)}}>NTSB:</span> <span style={{opacity: onW(f, wf(153, 'evidence'), 6)}}>NO EVIDENCE</span> <span style={{opacity: onW(f, wf(153, 'outside'), 6)}}>ANYONE OUTSIDE</span> <span style={{opacity: onW(f, wf(153, 'norfolk'), 6)}}>NS</span> <span style={{opacity: onW(f, wf(153, 'contractors'), 6)}}>AND ITS CONTRACTORS</span> <span style={{opacity: onW(f, wf(153, 'knew'), 6)}}>KNEW</span> <span style={{opacity: onW(f, wf(153, 'disagreed'), 6)}}>THE SHIPPER DISAGREED</span>
				</div>
				<div style={T(36, {fontWeight: 700, color: colors.ink, marginTop: 16})}>
					<span style={{opacity: onW(f, wf(154, 'smaller'), 6)}}>THEN A SMALLER</span> <span style={{opacity: onW(f, wf(154, 'meeting'), 6)}}>MEETING</span>
				</div>
			</Beat>
			<Beat f={f} from={wf(155, 'two')} to={wf(157, 'incident')}>
				<div style={T(36, {fontWeight: 700, color: colors.amber})}>
					<span style={{opacity: onW(f, wf(155, 'two'), 6)}}>2</span> <span style={{opacity: onW(f, wf(155, 'contractor'), 6)}}>CONTRACTOR</span> <span style={{opacity: onW(f, wf(155, 'firms'), 6)}}>FIRMS (SPSI, SRS)</span> <span style={{opacity: onW(f, wf(155, 'told'), 6)}}>TOLD HIM:</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 8})}>
					<span style={{opacity: onW(f, wf(155, 'reached'), 6)}}>IF A CAR REACHED 153</span> <span style={{opacity: onW(f, wf(155, 'to'), 6)}}>TO 158</span>
					<span style={{opacity: onW(f, wf(155, 'degrees'), 6)}}>°F,</span> <span style={{opacity: onW(f, wf(155, 'reaction'), 6)}}>THE REACTION</span> <span style={{opacity: onW(f, wf(155, 'run'), 6)}}>WOULD RUN OUT OF</span> <span style={{opacity: onW(f, wf(155, 'control'), 6)}}>CONTROL · P. 28</span>
				</div>
				<div style={T(36, {fontWeight: 700, color: colors.ink, marginTop: 20})}>
					<span style={{opacity: onW(f, wf(156, 'find'), 6)}}>NOT FOUND</span> <span style={{opacity: onW(f, wf(156, 'guidance'), 6)}}>IN THE WRITTEN GUIDANCE</span> <span style={{opacity: onW(f, wf(156, 'consulted'), 6)}}>CONSULTED</span> <span style={{opacity: onW(f, wf(156, 'scene'), 6)}}>AT THE SCENE,</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 6})}>
					<span style={{opacity: onW(f, wf(156, "shipper's"), 6)}}>OR IN THE SHIPPER'S</span> <span style={{opacity: onW(f, wf(156, 'messages'), 6)}}>MESSAGES · P. 28 N. 55</span>
				</div>
			</Beat>
			<Beat f={f} from={wf(157, 'incident')} to={wf(158, 'burn')}>
				<div style={T(36, {color: colors.ink})}>
					<span style={{opacity: onW(f, wf(157, 'commander'), 6)}}>THE INCIDENT COMMANDER</span> <span style={{opacity: onW(f, wf(157, 'given'), 6)}}>WAS GIVEN</span>
				</div>
				<div style={T(120, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(157, 'minutes') + LAND).toFixed(4)})`, transformOrigin: '0 60%'})}>{m13} MIN</div>
				<div style={T(44, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(157, 'decide'), 6)})}>TO DECIDE · P. 28</div>
			</Beat>
			<Beat f={f} from={wf(158, 'burn')} to={wf(159, 'incident')}>
				<div style={T(30, {color: colors.ink})}>
					THE BURN, <span style={{opacity: onW(f, wf(158, 'told'), 6)}}>THEY TOLD HIM,</span> <span style={{opacity: onW(f, wf(158, 'start'), 6)}}>MUST START</span>
				</div>
				<div style={T(56, {fontWeight: 700, color: colors.amber})}>
					<span style={{opacity: onW(f, wf(158, 'three'), 6)}}>BEFORE 3:00</span> <span style={{opacity: onW(f, wf(158, 'afternoon'), 6)}}>P.M.</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 10})}>
					<span style={{opacity: onW(f, wf(158, 'finish'), 6)}}>TO FINISH</span> <span style={{opacity: onW(f, wf(158, 'daylight'), 6)}}>IN DAYLIGHT</span> <span style={{opacity: onW(f, wf(158, 'temperature'), 6)}}>AND AVOID A TEMPERATURE</span> <span style={{opacity: onW(f, wf(158, 'inversion'), 6)}}>INVERSION:</span>
				</div>
				<div style={T(30, {color: colors.ink, marginTop: 6})}>
					<span style={{opacity: onW(f, wf(158, 'layer'), 6)}}>A LAYER</span> <span style={{opacity: onW(f, wf(158, 'air'), 6)}}>OF AIR</span> <span style={{opacity: onW(f, wf(158, 'vapor'), 6)}}>THAT KEEPS THE VAPOR CLOUD</span> <span style={{opacity: onW(f, wf(158, 'dispersing'), 6)}}>FROM DISPERSING · P. 154</span>
				</div>
			</Beat>
			<Beat f={f} from={wf(159, 'incident')} to={sf(162) + 30}>
				<div style={T(44, {fontWeight: 700, color: colors.ink, border: `3px solid ${colors.ink}`, padding: '4px 16px', display: 'inline-block', opacity: onW(f, wf(159, 'consented'), 6)})}>THE INCIDENT COMMANDER CONSENTED</div>
				<div style={T(36, {color: colors.red, marginTop: 24})}>
					<span style={{opacity: onW(f, wf(160, 'charges'), 6)}}>THE CHARGES</span> <span style={{opacity: onW(f, wf(160, 'off'), 6)}}>WENT OFF</span> <span style={{opacity: onW(f, wf(160, 'thirty-seven'), 6), fontWeight: 700}}>AT 4:37 P.M.</span>
				</div>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px', marginTop: 24, display: 'inline-block', opacity: onW(f, wf(161, 'three'), 6)})}>
					3:00 <span style={{opacity: onW(f, wf(161, 'afternoon'), 6)}}>P.M.</span> <span style={{opacity: onW(f, wf(161, 'n'), 6)}}>· NTSB</span> <span style={{opacity: onW(f, wf(161, 'noted'), 6)}}>NOTED:</span> <span style={{opacity: onW(f, wf(161, 'not'), 6)}}>NOT</span> <span style={{opacity: onW(f, wf(161, 'hard'), 6)}}>A HARD DEADLINE</span>
				</div>
				{line('NTSB RIR-24-05 P. 154', wf(161, 'hard'), 26)}
			</Beat>
			{/* the hold after s160 (2026-11-06): the county's drone video (rights not cleared) is out; the EPA aircraft's
			    photograph of the next afternoon, labelled with its own date: the cars still smoking */}
			{plumeO > 0 ? (
				<AbsoluteFill style={{opacity: plumeO, background: colors.void}}>
					<RealFootage f={f} start={PLUME.from - 14} end={PLUME.from + PLUME.frames + 14} src="img/epa_aspect_20230207_6262.jpg" date="07 FEB 2023" what="THE NEXT AFTERNOON, STILL SMOKING" source="U.S. EPA AIRCRAFT · PUBLIC DOMAIN" push={0.06} focus={[0.6, 0.5]} box={{x: 160, y: 100, w: 1600, h: 900}} />
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 8 · Two numbers (s162–s164) ────────────────────────────────────────────────────────────────────────────────

const TwoNumbers: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<div style={{position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center', ...T(56, {fontWeight: 700, color: colors.ink, opacity: onW(f, wf(162, 'two'), 6)})}}>
				TWO NUMBERS <span style={{opacity: onW(f, wf(162, 'decided'), 6)}}>DECIDED</span> <span style={{opacity: onW(f, wf(162, 'week'), 6)}}>THIS TOWN'S WEEK</span>
			</div>
			<Card x={160} y={300} w={760} h={520} o={onW(f, wf(163, 'one'), 10)} accent={colors.amber}>
				<div style={{padding: '60px 50px'}}>
					<div style={T(150, {fontWeight: 700, color: colors.amber, transform: `scale(${bump(f, fps, wf(163, 'matched') + LAND, 0.05).toFixed(4)})`, transformOrigin: '0 60%'})}>170°F</div>
					<div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(163, 'definition'), 6)})}>
						MATCHED A DEFINITION <span style={{opacity: onW(f, wf(163, 'written'), 6)}}>WRITTEN</span>
					</div>
					<div style={T(56, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(163, 'billing'), 6)})}>FOR BILLING</div>
				</div>
			</Card>
			<Card x={1000} y={300} w={760} h={520} o={onW(f, wf(164, 'other'), 10)} accent={colors.amber}>
				<div style={{padding: '60px 50px'}}>
					<div style={T(104, {fontWeight: 700, color: colors.amber})}>153–158°F</div>
					<div style={T(36, {color: colors.ink, marginTop: 20, opacity: onW(f, wf(164, 'find'), 6)})}>
						<span style={{opacity: onW(f, wf(164, 'investigators'), 6)}}>INVESTIGATORS</span> COULD NOT FIND IT <span style={{opacity: onW(f, wf(164, 'guidance'), 6)}}>IN THE GUIDANCE</span>
					</div>
					<div style={T(56, {fontWeight: 700, color: colors.amber, opacity: onW(f, wf(164, 'scene'), 6)})}>USED AT THE SCENE</div>
				</div>
			</Card>
		</>
	);
};

// ── 9 · Not necessary; NS's answer; the commander's words (s165–s171) ─────────────────────────────────────────

const NotNecessary: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RecordPage set="rir" start={sf(165) - 10} end={sf(167) + 14} label="NTSB RIR-24-05" title="EXECUTIVE SUMMARY" hl={[{key: 'C95', at: wf(165, 'temperatures'), ats: [wf(165, 'temperatures'), wf(165, 'confirmed')]}, {key: 'C37', at: wf(166, 'vent'), ats: [wf(166, 'vent'), wf(166, 'necessary')]}]} pushTo={wf(165, 'finding')} />
			<Pop f={f} fps={fps} on={wf(165, 'scene')} off={sf(166) - 4} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					<span style={{opacity: onW(f, wf(165, 'scene'), 6)}}>ON SCENE:</span> <span style={{opacity: onW(f, wf(165, 'reaction'), 6)}}>NO REACTION</span> <span style={{opacity: onW(f, wf(165, 'examinations'), 6)}}>· CONFIRMED AFTER</span>
				</div>
			</Pop>
			<Pop f={f} fps={fps} on={wf(166, 'not')} off={sf(167) - 6} style={{position: 'absolute', right: 120, top: 860}}>
				<div style={T(56, {fontWeight: 700, color: colors.ink, border: `4px solid ${colors.ink}`, padding: '4px 18px', background: colors.void})}>NOT NECESSARY</div>
			</Pop>
			<RecordPage set="rir" start={sf(167) - 10} end={sf(168) + 14} label="NTSB FINDING 32" hl={[{key: 'C67', at: wf(167, 'compromised'), ats: [wf(167, 'compromised'), wf(167, 'urgency')]}]} pushTo={wf(167, 'board')} />
			<Pop f={f} fps={fps} on={wf(167, 'norfolk')} off={sf(168) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					NS <span style={{opacity: onW(f, wf(167, 'contractors'), 6)}}>AND ITS CONTRACTORS</span> <span style={{opacity: onW(f, wf(167, 'integrity'), 6)}}>· COMPROMISED THE INTEGRITY</span> <span style={{opacity: onW(f, wf(167, 'decision'), 6)}}>OF THE DECISION</span> <span style={{opacity: onW(f, wf(167, 'creating'), 6)}}>BY CREATING</span> <span style={{opacity: onW(f, wf(167, 'unwarranted'), 6)}}>· UNWARRANTED URGENCY</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(168) - 10} end={sf(169) + 14} label="NTSB FINDING 28" page={184} hl={[{key: 'C146', at: wf(168, 'guide'), ats: [wf(168, 'guide'), wf(168, 'overstated'), wf(168, 'reaction')]}]} pushTo={wf(168, 'found')} />
			<Pop f={f} fps={fps} on={wf(168, 'one')} off={sf(169) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					<span style={{opacity: onW(f, wf(168, 'one'), 6)}}>1</span> INDUSTRY GUIDE <span style={{opacity: onW(f, wf(168, 'consulted'), 6)}}>CONSULTED</span> <span style={{opacity: onW(f, wf(168, 'scene'), 6)}}>AT THE SCENE</span> <span style={{opacity: onW(f, wf(168, 'risk'), 6)}}>· OVERSTATED THE RISK</span>
				</div>
			</Pop>
			<RecordDoc doc="ns_release_motivation" start={sf(169) - 10} end={wf(169, 'incident') + 4} at={[wf(169, 'motivation')]} label="NORFOLK SOUTHERN · 25 JUN 2024" source="NS STATEMENT ON THE NTSB'S FINAL REPORT · INVESTOR ROOM" pushTo={wf(169, 'answer')} />
			<RecordDoc doc="ns_release_20h" start={wf(169, 'incident') - 10} end={sf(170) + 14} at={[wf(169, 'told')]} label="NORFOLK SOUTHERN · 25 JUN 2024" source="NS STATEMENT ON THE NTSB'S FINAL REPORT · INVESTOR ROOM" pushTo={wf(169, 'command')} />
			<div style={{position: 'absolute', right: 120, top: 880, maxWidth: 1400, textAlign: 'right', opacity: Math.min(onW(f, wf(169, 'only'), 6), offW(f, sf(170) - 6, 12)), ...T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}}>
				NS: <span style={{opacity: onW(f, wf(169, 'only'), 6)}}>ONLY MOTIVATION OF</span> <span style={{opacity: onW(f, wf(169, 'company'), 6)}}>THE COMPANY</span> <span style={{opacity: onW(f, wf(169, 'contractors'), 6)}}>AND CONTRACTORS:</span> <span style={{opacity: onW(f, wf(169, 'health'), 6)}}>HEALTH AND SAFETY</span> <span style={{opacity: onW(f, wf(169, 'community'), 6)}}>· COMMUNITY,</span> <span style={{opacity: onW(f, wf(169, 'first'), 6)}}>FIRST</span> <span style={{opacity: onW(f, wf(169, 'responders'), 6)}}>RESPONDERS</span> <span style={{opacity: onW(f, wf(169, 'and', 3), 6)}}>· AND</span> <span style={{opacity: onW(f, wf(169, 'twenty'), 6)}}>· ≈20 HOURS</span> <span style={{opacity: onW(f, wf(169, 'ahead'), 6)}}>AHEAD</span> <span style={{opacity: onW(f, wf(169, 'burn'), 6)}}>A BURN</span> <span style={{opacity: onW(f, wf(169, 'needed'), 6)}}>MIGHT BE NEEDED</span>
			</div>
			<RecordDoc doc="ns_release_withheld" start={sf(170) - 10} end={sf(171) + 14} at={[wf(170, 'agree')]} label="NORFOLK SOUTHERN · 25 JUN 2024" source="NS STATEMENT ON THE NTSB'S FINAL REPORT · INVESTOR ROOM" pushTo={wf(170, 'company')} />
			<Pop f={f} fps={fps} on={wf(170, 'withheld')} off={sf(171) - 6} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.amber, padding: '4px 14px'})}>
					DOES NOT AGREE IT “WITHHELD” <span style={{opacity: onW(f, wf(170, 'views'), 6)}}>THE SHIPPER'S VIEWS</span>
				</div>
			</Pop>
			<RecordPage set="rir" start={sf(171) - 10} end={ef(171) + 30} label="NTSB RIR-24-05" title="THE DECISION" hl={[{key: 'C68', at: wf(171, 'bore'), ats: [wf(171, 'bore'), wf(171, 'responsibility')]}]} pushTo={wf(171, 'told')} />
			<Pop f={f} fps={fps} on={wf(171, 'commander')} off={ef(171) + 24} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					THE INCIDENT COMMANDER <span style={{opacity: onW(f, wf(171, 'investigators'), 6)}}>TO THE NTSB</span>
				</div>
			</Pop>
		</>
	);
};

// ── 10 · Verdict 4, and what the record does hold (s172–s175), then Act V ───────────────────────────────────

const Verdict4: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const listO = Math.min(onW(f, sf(174) - 6, 12), offW(f, sf(175) - 6, 14));
	return (
		<>
			<VerdictCard f={f} fps={fps} n={4} start={sf(172) - 14} end={sf(174) - 4} head="ONE MORE CLAIM" headAt={wf(172, 'one')} head2="YOU WILL OFTEN SEE:" head2At={wf(172, 'see')} quote={[['THEY BURNED IT', wf(172, 'burned')], ['BECAUSE', wf(172, 'because')], ['IT WAS THE CHEAPEST', wf(172, 'cheapest')], ['OPTION.', wf(172, 'option')]]} verdict="NOT IN THE RECORD" verdictAt={wf(173, 'record')} record="NTSB RIR-24-05 · NS STATEMENT 25 JUN 2024" recordAt={wf(173, 'not')} />
			{listO > 0 ? (
				<AbsoluteFill style={{opacity: listO}}>
					<Card x={210} y={200} w={1500} h={660} accent={colors.cyan}>
						<div style={{padding: '50px 60px'}}>
							<div style={T(36, {color: colors.ink, opacity: onW(f, wf(174, 'what'), 6)})}>
								WHAT IS <span style={{...lit(f, wf(174, 'record'), colors.cyan)}}>IN THE RECORD</span>
							</div>
							<div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 40, opacity: onW(f, wf(174, 'urgency'), 6)})}>THE URGENCY</div>
							<div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 16, opacity: onW(f, wf(174, 'information'), 6)})}>
								THE INFORMATION <span style={{opacity: onW(f, wf(174, 'commander'), 6)}}>THE INCIDENT COMMANDER</span> <span style={{opacity: onW(f, wf(174, 'given'), 6)}}>WAS GIVEN</span>
							</div>
							<div style={T(56, {fontWeight: 700, color: colors.ink, marginTop: 16, opacity: onW(f, wf(174, 'reason'), 6)})}>
								THE REASON <span style={{opacity: onW(f, wf(174, 'norfolk'), 6)}}>NORFOLK SOUTHERN</span> <span style={{opacity: onW(f, wf(174, 'gives'), 6)}}>GIVES</span>
							</div>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			<RecordPage set="rir" start={sf(175) - 10} end={ef(175) + 60} label="NTSB RIR-24-05" title="THE COMPANY'S PREFERENCE" hl={[{key: 'C147', at: wf(175, 'determine'), ats: [wf(175, 'determine'), wf(175, 'reason'), wf(175, 'burn')]}]} pushTo={wf(175, 'itself')} />
			<Pop f={f} fps={fps} on={wf(175, 'main')} off={ef(175) + 54} style={{position: 'absolute', right: 120, top: 880}}>
				<div style={T(36, {fontWeight: 700, color: colors.void, background: colors.cyan, padding: '4px 14px'})}>
					THE MAIN REASON: <span style={{opacity: onW(f, wf(175, 'preference'), 6)}}>NOT DETERMINED</span>
				</div>
			</Pop>
			<ActTitle n="V" title="The Verdict" start={ef(175) + 60} end={sf(176) + 24} sub="FINDINGS, COURTS, AND WHAT IS STILL IN SERVICE" />
		</>
	);
};

const cue = (frame: number, sfx: SfxCue['sfx'], gainDb = -18): SfxCue => ({frame, sfx, gainDb});

export const act4: SceneDef[] = [
	{id: 'a4_burnoff', from: sf(112) - 30, to: sf(117) + 14, C: BurnOff, cues: [cue(wf(113, 'grind'), 'metal_snap_sub', -26), cue(wf(114, 'burns'), 'whoosh', -24), cue(wf(116, 'breaks'), 'metal_snap_sub', -16)]},
	{id: 'a4_blind', from: sf(117) - 20, to: sf(127) + 14, C: Blind, cues: [cue(wf(119, 'between'), 'transformer_hum', -26), cue(wf(121, 'milepost'), 'relay_click'), cue(wf(122, 'fifty-three'), 'quartz_tick', -16), cue(wf(123, 'critical'), 'cockpit_chime', -18), cue(wf(125, 'separates'), 'metal_snap_sub', -12), cue(wf(125, 'emergency'), 'pressure_drop', -16)]},
	{id: 'a4_grease', from: sf(127) - 20, to: sf(132) + 14, C: Grease2, cues: [cue(wf(128, 'say'), 'stamp', -14), cue(sf(129) - 10, 'paper_slide'), cue(sf(131) - 10, 'paper_slide')]},
	{id: 'a4_evidence', from: sf(132) - 20, to: sf(136) + 14, C: Evidence, cues: [cue(wf(133, 'record'), 'stamp', -14), cue(wf(134, 'fifth'), 'quartz_tick'), cue(wf(135, 'sixth'), 'quartz_tick')]},
	{id: 'a4_fire', from: sf(136) - 20, to: sf(142) + 14, C: Fire, cues: [cue(sf(136) - 10, 'paper_slide'), cue(wf(137, 'punctured'), 'stamp', -22), cue(wf(139, 'relief'), 'pressure_drop', -22), cue(sf(141) - 10, 'paper_slide')]},
	{id: 'a4_fear', from: sf(142) - 20, to: sf(146) + 14, C: Fear, cues: [cue(wf(143, 'join'), 'relay_click', -24), cue(wf(144, 'fails'), 'metal_snap_sub', -20)]},
	{id: 'a4_plot', from: sf(146) - 20, to: sf(162) + 14, C: Plot, cues: [cue(wf(147, 'evening'), 'relay_click', -22), cue(wf(148, 'thirty-eight'), 'quartz_tick'), cue(wf(150, 'twenty-six'), 'quartz_tick'), cue(wf(152, 'not'), 'relay_click', -24), cue(wf(153, 'evidence'), 'relay_click', -26), cue(wf(154, 'smaller'), 'relay_click', -24), cue(wf(155, 'fifty-three'), 'quartz_tick'), cue(wf(155, 'fifty-eight'), 'quartz_tick'), cue(wf(157, 'thirteen'), 'quartz_tick', -16), cue(wf(158, 'three'), 'relay_click'), cue(wf(160, 'thirty-seven'), 'stamp', -16)]},
	{id: 'a4_two', from: sf(162) - 20, to: sf(165) + 14, C: TwoNumbers, cues: [cue(wf(163, 'billing'), 'relay_click', -22), cue(wf(164, 'scene'), 'relay_click', -22)]},
	{id: 'a4_notnecessary', from: sf(165) - 20, to: sf(172) + 14, C: NotNecessary, cues: [cue(wf(166, 'not'), 'stamp', -16), cue(sf(167) - 10, 'paper_slide'), cue(sf(169) - 10, 'paper_slide')]},
	{id: 'a4_verdict4', from: sf(172) - 20, to: sf(176) + 30, C: Verdict4, cues: [cue(wf(173, 'record'), 'stamp', -14), cue(ef(175) + 60, 'stamp', -22)]},
];

