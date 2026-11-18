import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, flash, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {ease} from '../../../../lib/remotion/motion';
import {media, Mount, Photo, useFilmFrame} from '../kit';
import {beatScale} from '../hull3d';
import {Chip, clamp, lit, Pop, RealFootage, span, T, vis} from '../parts';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT I · THE INCIDENT (sentences 11–22; the opening, 0–10, is scenes/open2.tsx). Choreography table: scenes/choreography/act1.md. Every cue is a literal
// wf(sentence, 'word') on the measured narration (vo/timing.json, scripts/word_align.py).


// ── 4 · 18 JUN 2023: the last dive's log (s10–s16) ──────────────────────────────────────────────────────────────

type Msg = {t: string; text: string; who: 'TITAN' | 'POLAR PRINCE'; at: number; tone?: string; note?: string};
const LastDive: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const sea = vis(f, sf(11) - 20, ef(13) + 20);
	// one driver for the clock and the depth (§10.3): both roll from the 09:00 release and land together on
	// "forty-seven" (10:47, ≈3,350 m, C37/C50); the narration then confirms the depth
	const drive = rollTo(f, [{frame: wf(14, 'at') - 16, value: 0}, {frame: wf(14, 'forty-seven') + LAND, value: 1}]);
	const depth = 10 + 3340 * drive;
	const clockMin = Math.round(9 * 60 + 107 * drive);
	const log = vis(f, wf(14, 'at') - 16, ef(17) + 40);
	const msgs: Msg[] = [
		{t: '10:47', text: 'DROPPED TWO WTS', who: 'TITAN', at: wf(14, 'dropping'), tone: colors.ink},
		{t: '10:48', text: 'ACKNOWLEDGED', who: 'POLAR PRINCE', at: wf(16, 'acknowledged'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(16, 'sending'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(16, 'messages'), tone: colors.cyan},
		{t: '', text: 'MESSAGE SENT', who: 'POLAR PRINCE', at: wf(16, 'hours'), tone: colors.cyan},
	];
	const noReply = lead(f, wf(17, 'reply'), 10);
	const last = lead(f, wf(15, 'last'), 10);
	return (
		<>
			{/* s10: the date, alone */}
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: vis(f, sf(11) - 20, wf(12, 'at') + 6), zIndex: 2}}>
				<DatePill f={f} fps={fps} day={18} month={6} year={2023} dayWord={wf(11, 'eighteenth')} monthWord={wf(11, 'june')} yearWord={wf(11, 'twenty-three')} fromYear={2023} fromDay={1} size={64} />
			</AbsoluteFill>
			{sea > 0 ? (
				<AbsoluteFill style={{opacity: sea, transform: `scale(${beatScale(f, [wf(11, 'june'), wf(11, 'twenty'), wf(11, 'twenty-three'), wf(12, 'nine'), wf(12, 'morning'), wf(12, 'titan'), wf(12, 'released'), wf(12, 'platform'), wf(13, 'first'), wf(13, 'dive'), wf(13, 'expedition'), wf(13, 'deeper'), wf(13, 'ten'), wf(13, 'metres')], 0.025).toFixed(4)})`}}>
					<RealFootage f={f} start={sf(11) - 20} end={ef(13) + 30} src="footage/atl_swell.mp4" date="" what="THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY" source="SAGA47SWAN / YOUTUBE · CC BY" push={0.06} />
					<div style={{position: 'absolute', left: 96, top: 110, display: 'flex', gap: 12, flexWrap: 'wrap', width: 1700}}>
						{f >= wf(12, 'nine') - 10 ? <Chip text="≈ 09:00 · DIVE 88 · RELEASED FROM THE PLATFORM" tone={colors.ink} size={32} style={{transform: `scale(${bump(f, fps, wf(12, 'released')).toFixed(4)})`}} /> : null}
						{f >= wf(13, 'first') - 10 ? <Chip text="FIRST 2023 DIVE BELOW 10 M" tone={colors.cyan} size={32} style={{transform: `scale(${bump(f, fps, wf(13, 'ten')).toFixed(4)})`}} /> : null}
					</div>
				</AbsoluteFill>
			) : null}
			{log > 0 ? (
				<AbsoluteFill style={{opacity: log}}>
					<Mount x={150} y={110} w={1620} h={820} start={wf(14, 'at') - 16} end={ef(17) + 40} source="DIVE 88 TEXT LOG · TIMES AND WORDING: NTSB MIR-25-36 · USCG MBI REPORT" labels={['RECONSTRUCTION']} lean={3}>
						<div style={{position: 'absolute', left: 60, top: 50, ...T(26, {color: colors.sub, letterSpacing: 3})}}>DEPTH</div>
						<div style={{position: 'absolute', left: 60, top: 86, ...T(84, {color: colors.ink, fontWeight: 700})}}>
							<span style={{textShadow: `0 0 ${(18 * Math.max(flash(f, wf(14, 'ten'), 0), flash(f, wf(14, 'three'), 0), flash(f, wf(14, 'hundred'), 0), flash(f, wf(14, 'fifty'), 0))).toFixed(1)}px ${colors.cyan}`}}>{Math.round(depth).toLocaleString('en-US')}</span>
							<span style={{fontSize: 40, color: colors.sub}}> M</span>
						</div>
						<div style={{position: 'absolute', left: 60, top: 196, ...T(30, {color: colors.ink}), opacity: lead(f, wf(14, 'at') - 16, 8)}}>
							CLOCK <span style={{fontWeight: 700, ...lit(f, wf(16, 'later'), colors.cyan, colors.ink)}}>{f >= wf(16, 'later') ? '10:48' : `${String(Math.floor(clockMin / 60)).padStart(2, '0')}:${String(clockMin % 60).padStart(2, '0')}`}</span>
						</div>
						<div style={{position: 'absolute', left: 60, top: 290, width: 420, ...T(28, {color: colors.ink, lineHeight: 1.45}), opacity: lead(f, wf(14, 'standard'), 8)}}>
							<span style={lit(f, wf(14, 'standard'), colors.cyan)}>STANDARD</span> <span style={{opacity: lead(f, wf(14, 'depth'), 8), ...lit(f, wf(14, 'depth'), colors.cyan)}}>AT THAT DEPTH</span>
							<br />
							<span style={{opacity: lead(f, wf(14, 'slow'), 8)}}>TO SLOW THE DESCENT</span>
						</div>
						<div style={{position: 'absolute', left: 560, top: 50, right: 50, bottom: 40, borderLeft: `1px solid ${colors.border}`, paddingLeft: 40}}>
							{msgs.map((m, i) => {
								const k = lead(f, i === 0 ? wf(14, 'titan') : m.at, 10);
								const kText = lead(f, m.at, 8);
								const isTitan = m.who === 'TITAN';
								return (
									<div key={i} style={{display: 'flex', gap: 22, alignItems: 'baseline', marginBottom: 26, opacity: k, transform: `translateY(${((1 - k) * 16).toFixed(1)}px)`}}>
										<span style={{...T(30, {color: colors.ink}), width: 100}}>{m.t}</span>
										<span style={{...T(26, {color: isTitan ? colors.amber : colors.cyan}), width: 230}}>{m.who}</span>
										<span style={{...T(34, {color: m.tone, fontWeight: 700}), opacity: kText, whiteSpace: 'nowrap'}}>{isTitan ? <>“dropped <span style={lit(f, wf(14, 'two'), colors.amber, colors.ink)}>two</span> <span style={lit(f, wf(14, 'weights'), colors.amber, colors.ink)}>wts</span>”</> : m.text}</span>
										{isTitan ? <span style={{opacity: lead(f, wf(14, 'routine'), 8) * (1 - lead(f, wf(14, 'dropping'), 8))}}><Chip text={f >= wf(14, 'message') ? 'ROUTINE MESSAGE' : 'ROUTINE'} tone={colors.ink} size={26} /></span> : null}
										{!isTitan && i > 1 ? <span style={{...T(28, {color: colors.red}), opacity: noReply}}>NO REPLY</span> : null}
									</div>
								);
							})}
							<div style={{marginTop: 4, opacity: last, boxShadow: `0 0 ${(30 * flash(f, wf(15, 'sent'), 0)).toFixed(0)}px rgba(245,158,11,0.6)`, display: 'inline-block'}}>
								<Chip text="THE LAST MESSAGE TITAN SENT" tone={colors.amber} size={28} style={{transform: `scale(${bump(f, fps, wf(15, 'last') + LAND, 0.06).toFixed(4)})`}} />
							</div>
							<div style={{marginTop: 18, opacity: lead(f, wf(16, 'hours'), 8), ...T(30, lit(f, wf(16, 'hours')))}}>… FOR HOURS</div>
						</div>
					</Mount>
				</AbsoluteFill>
			) : null}
			<AbsoluteFill style={{opacity: vis(f, wf(16, 'kept') - 10, ef(17) + 30, 10, 12)}}>
				<Photo src={media('photos/pp_log_0618.jpg')} iw={1002} ih={203} start={wf(16, 'kept') - 10} end={ef(17) + 30} source="POLAR PRINCE DECK LOG · 18 JUN 2023, 0600–1200 WATCH · PHOTO BY THE MBI · USCG ROI FIG. 37" from={{x: 0, y: 0, w: 1002, h: 203}} to={{x: 0, y: 0, w: 1002, h: 203}} box={{x: 150, y: 330, w: 1620, h: 390}} labels={['RECORD PHOTO']} />
			</AbsoluteFill>
		</>
	);
};

// ── 5 · Four days later: the ROV finds the tail cone (s17) ─────────────────────────────────────────────────────

const Rov: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	return (
		<>
			<RealFootage f={f} start={sf(18) - 14} end={ef(18) + 30} src="footage/rov_tailcone.mp4" date="22 JUN 2023" what="ROV VIDEO · TAIL CONE ON THE SEA FLOOR" source="USCG MBI · DVIDS" push={0.03} focus={[0.6, 0.5]} box={{x: 96, y: 96, w: 1300, h: 731}} under />
			<div style={{position: 'absolute', left: 1420, top: 120, width: 400, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Pop f={f} fps={fps} at={wf(18, 'four')}>
					<Chip text={f >= wf(18, 'later') ? 'FOUR DAYS LATER' : 'FOUR DAYS'} tone={colors.amber} size={34} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'operated')}>
					<Chip text="REMOTE VEHICLE (ROV)" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'found')}>
					<div style={{...T(30, lit(f, wf(18, 'found')))}}>FOUND:</div>
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'tail')}>
					<Chip text="TAIL CONE" tone={colors.cyan} size={30} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'both')}>
					<Chip text={f >= wf(18, 'domes') ? 'BOTH TITANIUM DOMES' : 'BOTH TITANIUM'} tone={colors.cyan} size={30} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'sea')}>
					<Chip text="ON THE SEA FLOOR" tone={colors.ink} size={28} />
				</Pop>
				<Pop f={f} fps={fps} at={wf(18, 'hundred')}>
					<Chip text="A FEW HUNDRED M" tone={colors.ink} size={28} />
					<div style={{...T(28, lit(f, wf(18, 'bow'))), marginTop: 8, opacity: lead(f, wf(18, "titanic's"), 8)}}>FROM THE TITANIC'S BOW</div>
				</Pop>
			</div>
		</>
	);
};

// ── 6 · Thirteen times to the wreck, and the last dive short (s18–s21) ──────────────────────────────────────────

const Thirteen: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const X0 = 370;
	const DX = 78;
	const Y0 = 270;
	const H = 500;
	const yOf = (m: number) => Y0 + (m / 4000) * H;
	const ref = lead(f, wf(19, 'wreck'), 14);
	const firstDrop = wf(19, 'three') - 10;
	const lastDrop = wf(19, 'thirteen');
	const dropAt = (i: number) => firstDrop + ((lastDrop - firstDrop) * i) / 12;
	// the count is the bars that have landed: picture and number share one driver
	const n = Array.from({length: 13}).filter((_, i) => f >= dropAt(i) + 4).length;
	const d88 = span(f, wf(20, 'last') - 4, wf(20, 'failed') + LAND);
	const stop = lead(f, wf(20, 'failed'), 6);
	const gap = lead(f, wf(20, 'five'), 14);
	const margin = flash(f, wf(21, 'margin'), 0.45);
	const x88 = X0 + DX * 12 + 120;
	const back = lead(f, wf(22, 'start'), 14);
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(19) - 14, hold(22).from + hold(22).frames + 20, 12, 14)}}>
				<RealFootage f={f} start={sf(19) - 14} end={hold(22).from + hold(22).frames + 20} src="footage/noaa_bow.mp4" date="2004" what="THE TITANIC'S BOW · NOAA" source="PUBLIC DOMAIN" push={0.05} focus={[0.4, 0.5]} />
			</AbsoluteFill>
			<Mount glass x={150} y={110} w={1620} h={820} start={sf(19) - 14} end={hold(22).from + hold(22).frames + 20} source="TITAN'S DIVE LOG, USCG MBI REPORT · DIVE 88: NTSB MIR-25-36" labels={['DEPTHS TO SCALE']} lean={3} />
			<div style={{position: 'absolute', left: 230, top: 150, ...T(30, lit(f, wf(19, 'log'))), opacity: lead(f, wf(19, 'dive'), 8)}}><span style={lit(f, wf(19, 'titan'), colors.cyan, colors.ink)}>TITAN'S</span> DIVE LOG</div>
			<div style={{position: 'absolute', left: 620, top: 132, display: 'flex', alignItems: 'baseline', gap: 14}}>
				<span style={{...T(84, {color: colors.ink, fontWeight: 700}), transform: `scale(${bump(f, fps, lastDrop + LAND, 0.08).toFixed(4)})`, display: 'inline-block'}}>{n}</span>
				<span style={{...T(30, lit(f, wf(19, 'times')))}}>× TO THE WRECK</span>
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<line x1={X0 - 60} x2={x88 + 80} y1={Y0} y2={Y0} stroke={colors.sub} strokeWidth={2} />
				<text x={X0 - 70} y={Y0 + 9} textAnchor="end" style={T(26, {fill: colors.ink})}>0 M</text>
				<line x1={X0 - 60} x2={x88 + 80} y1={yOf(3840)} y2={yOf(3840)} stroke={colors.cyan} strokeWidth={2} strokeDasharray="8 8" opacity={ref} />
				<text x={X0 - 70} y={yOf(3840) + 9} textAnchor="end" style={T(30, lit(f, wf(19, 'forty'), colors.cyan))} opacity={lead(f, wf(19, 'three'), 10)}>{Math.round(rollTo(f, [{frame: wf(19, 'three'), value: 3000}, {frame: wf(19, 'eight') + LAND, value: 3800}, {frame: wf(19, 'forty') + LAND, value: 3840}])).toLocaleString('en-US')} M</text>
				<text x={X0 - 70} y={yOf(3840) + 44} textAnchor="end" style={T(26, lit(f, wf(19, 'wreck'), colors.cyan))} opacity={ref}>THE WRECK</text>
				{Array.from({length: 13}).map((_, i) => {
					const k = interpolate(f, [dropAt(i) - 14, dropAt(i) + 4], [0, 1], {...clamp, easing: ease.arrive});
					return k > 0 ? <rect key={i} x={X0 + i * DX - 11} y={Y0} width={22} height={(yOf(3840) - Y0) * k} fill={colors.cyan} opacity={0.85 - 0.45 * back} /> : null;
				})}
				{d88 > 0 ? <rect x={x88 - 12} y={Y0} width={24} height={(yOf(3363) - Y0) * d88} fill={colors.ink} /> : null}
				<line x1={x88 - 30} x2={x88 + 30} y1={yOf(3363)} y2={yOf(3363)} stroke={colors.red} strokeWidth={5} opacity={stop} />
				<text x={x88} y={Y0 - 22} textAnchor="middle" style={T(28, lit(f, wf(20, 'last'), colors.ink))} opacity={lead(f, wf(20, 'last'), 8)}>DIVE 88</text>
				{gap > 0 ? (
					<g opacity={gap}>
						<line x1={x88 + 60} x2={x88 + 60} y1={yOf(3363)} y2={yOf(3363) + (yOf(3840) - yOf(3363)) * gap} stroke={colors.amber} strokeWidth={3} />
						<line x1={x88 + 48} x2={x88 + 72} y1={yOf(3363)} y2={yOf(3363)} stroke={colors.amber} strokeWidth={3} />
						<line x1={x88 + 48} x2={x88 + 72} y1={yOf(3840)} y2={yOf(3840)} stroke={colors.amber} strokeWidth={3} />
						<rect x={x88 - 30} y={yOf(3363)} width={90} height={yOf(3840) - yOf(3363)} fill={colors.amber} opacity={0.18 * margin} />
					</g>
				) : null}
			</svg>
			<div style={{position: 'absolute', left: x88 + 84, top: yOf(3600) - 22, opacity: gap, transform: `scale(${bump(f, fps, wf(20, 'hundred') + LAND, 0.06).toFixed(4)})`, transformOrigin: '0 50%'}}>
				<Chip text="≈ 500 M SHALLOWER" size={28} />
			</div>
			<div style={{position: 'absolute', left: X0 - 11, width: DX * 12 + 22, top: yOf(3840) + 26, textAlign: 'center', ...T(28, {color: colors.ink}), opacity: lead(f, wf(19, 'thirteen'), 10) * (1 - back)}}>2021–2022</div>
			{/* s21: back to where it began: dive 80 */}
			<div style={{position: 'absolute', left: X0 - 11, top: yOf(3840) + 16, display: 'flex', gap: 16, alignItems: 'center', opacity: back}}>
				<Chip text="DIVE 80 · 15 JUL 2022" tone={colors.ink} size={30} style={{transform: `scale(${bump(f, fps, wf(22, 'start') + LAND, 0.06).toFixed(4)})`}} />
				<span style={{...T(30, lit(f, wf(22, 'go')))}}>WHEN DID THE HULL START TO GO?</span>
			</div>
		</>
	);
};

export const act1: SceneDef[] = [
	{
		id: 'a1-last-dive',
		from: sf(11) - 30,
		to: sf(18) - 2,
		C: LastDive,
		cues: [
			{frame: wf(11, 'eighteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(14, 'forty-seven'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(14, 'dropping'), sfx: 'relay_click', gainDb: -24},
			{frame: wf(16, 'acknowledged'), sfx: 'relay_click', gainDb: -26},
		],
	},
	{id: 'a1-rov', from: sf(18) - 16, to: ef(18) + 30, C: Rov, cues: [{frame: wf(18, 'tail'), sfx: 'relay_click', gainDb: -26}]},
	{
		id: 'a1-thirteen',
		from: sf(19) - 16,
		to: hold(22).from + hold(22).frames + 30,
		C: Thirteen,
		cues: [
			{frame: wf(19, 'thirteen'), sfx: 'stamp', gainDb: -24},
			{frame: wf(20, 'failed'), sfx: 'relay_click', gainDb: -24},
		],
	},
];
