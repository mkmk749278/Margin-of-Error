import React from 'react';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import {colors} from '../../../../lib/remotion/brand';
import {bump, DatePill, LAND, lead, rollTo} from '../../../../lib/remotion/Kinetic';
import {RecordPage} from '../docs';
import {ActTitle, Mount, useFilmFrame} from '../kit';
import {Card, Chip, HullLines, HULL, Ledger, lit, RealFootage, sans, span, T, T_EVENT, TimeTrace, vis, Wd} from '../parts';
import {HearingClip, clipOf} from '../parts2';
import {ef, hold, sf, wf} from '../timing';
import {SceneDef} from './types';

// ACT III · THE BOARDROOM, part A (sentences 58–119): the 2018 warning, the first hull, dive 80, the testimony.
// Choreography: scenes/choreography/act3a.md (generated from this file).

/** A note bar under an exhibit: the narration's key words arrive on their words (the page stays the base picture). */
const Note: React.FC<{o: number; children: React.ReactNode; tone?: string; y?: number}> = ({o, children, tone = colors.amber, y = 930}) =>
	o <= 0 ? null : (
		<div style={{position: 'absolute', left: 96, right: 96, bottom: 1080 - y - 70, opacity: o, display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
			<div style={{background: 'rgba(18,24,36,0.96)', border: `1px solid ${colors.border}`, borderLeft: `3px solid ${tone}`, padding: '12px 22px', ...T(36, {color: colors.ink}), lineHeight: 1.35, maxWidth: 1680, textAlign: 'center'}}>{children}</div>
		</div>
	);

// ── 1 · Act title, then the question (hold after s57, s58) ──────────────────────────────────────────────────────

const Opening: React.FC = () => {
	const f = useFilmFrame();
	return (
		<>
			<ActTitle n="III" title="The Boardroom" start={hold(57).from + 4} end={sf(58) - 8} />
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: vis(f, sf(58) - 6, ef(58) + 30)}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink}}>
					<Wd f={f} at={wf(58, 'had')} base={colors.ink}>Had anyone </Wd>
					<Wd f={f} at={wf(58, 'warned')} tone={colors.amber}>warned </Wd>
					<Wd f={f} at={wf(58, 'about')} base={colors.ink}>about this?</Wd>
				</div>
			</AbsoluteFill>
		</>
	);
};

// ── 2 · 18 JAN 2018: the inspection report on the first hull (s59–s62) ─────────────────────────────────────────

const Report2018: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const photoIn = wf(62, 'delamination');
	const backIn = wf(62, 'warned');
	return (
		<>
			<RecordPage set="cg098" start={sf(59) - 20} end={ef(61) + 20} hl={[]} page={2} label="EXHIBIT" title="HULL 1" focus={{x: 120, y: 120, w: 1630, h: 760}} pushTo={wf(60, 'director')} />
			<RecordPage set="cg098" start={sf(62) - 16} end={photoIn + 6} hl={[{key: 'visible', at: wf(62, 'visible')}]} label="EXHIBIT" title="HULL 1" pushTo={wf(62, 'ends')} />
			<RecordPage set="cg098" page={9} start={photoIn} end={backIn + 4} hl={[]} label="EXHIBIT" title="THE CUT-OFF ENDS, PHOTOGRAPHED" focus={{x: 40, y: 200, w: 1700, h: 1100}} pushTo={backIn} />
			<RecordPage set="cg098" start={backIn - 4} end={ef(62) + 30} hl={[{key: 'fatigue', at: wf(62, 'inter-laminar')}]} label="EXHIBIT" title="HULL 1" pushTo={wf(62, 'potential') + 20} />
			<div style={{position: 'absolute', right: 96, top: 84, display: 'flex', gap: 14}}>
				<span style={{opacity: vis(f, wf(59, 'eighteenth') - 4, ef(62) + 20)}}>
					<DatePill f={f} fps={fps} day={18} month={1} year={2018} dayWord={wf(59, 'eighteenth')} monthWord={wf(59, 'january')} yearWord={wf(59, 'eighteen')} fromYear={2018} size={32} />
				</span>
			</div>
			<Note o={vis(f, sf(60), ef(61) + 10)}>
				<Wd f={f} at={wf(60, 'director')} lightAt={wf(60, 'operations')}>DIRECTOR OF MARINE OPERATIONS · </Wd>
				<Wd f={f} at={wf(60, 'inspection')} lightAt={wf(60, 'report')}>INSPECTION REPORT · </Wd>
				<Wd f={f} at={wf(60, 'first')} lightAt={wf(60, 'hull')} tone={colors.cyan}>FIRST HULL · </Wd>
				<span style={{...lit(f, wf(61, 'twenty-six'), colors.amber), fontWeight: 700, display: 'inline-block', transform: `scale(${bump(f, fps, wf(61, 'twenty-six') + LAND).toFixed(4)})`}}>
					{f >= wf(61, 'twenty-six') - 12 ? Math.round(rollTo(f, [{frame: wf(61, 'twenty-six') - 12, value: 1}, {frame: wf(61, 'twenty-six') + LAND, value: 26}])) : ''}
				</span>
				<Wd f={f} at={wf(61, 'items')} lightAt={wf(61, 'action')}> ITEMS NEEDING ACTION</Wd>
			</Note>
			<Note o={vis(f, sf(62) + 10, ef(62) + 20)} tone={colors.red}>
				<Wd f={f} at={wf(62, 'hull')}>ON THE HULL: </Wd>
				<Wd f={f} at={wf(62, 'cut-off')} lightAt={wf(62, 'cylinder')}>THE CUT-OFF ENDS · </Wd>
				<Wd f={f} at={wf(62, 'very')} lightAt={wf(62, 'delamination')} tone={colors.red}>DELAMINATION</Wd>
				<Wd f={f} at={wf(62, 'fatigue')} lightAt={wf(62, 'cycling')} tone={colors.amber}> · FATIGUE FROM PRESSURE CYCLING</Wd>
			</Note>
		</>
	);
};

// ── 3 · The meeting, recorded (s63–s65) ─────────────────────────────────────────────────────────────────────────

const Meeting: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const pageIn = sf(65) - 16;
	return (
		<>
			<Card x={360} y={300} w={1200} o={vis(f, sf(63) - 10, pageIn + 10)} accent={colors.amber} style={{padding: '30px 40px'}}>
				<div style={{display: 'flex', gap: 18, alignItems: 'center'}}>
					<DatePill f={f} fps={fps} day={19} month={1} year={2018} dayWord={wf(63, 'next')} monthWord={wf(63, 'day')} size={34} fromDay={18} />
					<Wd f={f} at={wf(63, 'met')} lightAt={wf(63, 'executive')} style={T(34, {})}>MEETING WITH THE CEO</Wd>
				</div>
				<div style={{marginTop: 22, ...T(36, {}), fontWeight: 700}}>
					<Wd f={f} at={wf(63, 'argued')} tone={colors.amber}>HE ARGUED FOR </Wd>
					<Wd f={f} at={wf(63, 'more')} lightAt={wf(63, 'testing')} tone={colors.amber}>MORE TESTING </Wd>
					<Wd f={f} at={wf(63, 'hull')}>OF THE HULL</Wd>
				</div>
				<div style={{marginTop: 26, display: 'flex', gap: 16, alignItems: 'center'}}>
					<span style={{opacity: lead(f, wf(64, 'recorded'), 8), transform: `scale(${bump(f, fps, wf(64, 'recorded') + LAND, 0.06).toFixed(4)})`, display: 'inline-block'}}>
						<Chip text="● REC" tone={colors.red} size={30} />
					</span>
					<Wd f={f} at={wf(64, 'chief')} lightAt={wf(64, 'meeting')} style={T(30, {})}>THE CEO RECORDED THE MEETING · MBI EXHIBIT CG-100</Wd>
				</div>
			</Card>
			<RecordPage set="cg100" start={pageIn} end={wf(65, 'acoustic') - 8} hl={[{key: 'scraps', at: wf(65, 'scrap')}, {key: 'crap', at: wf(65, 'cut')}, {key: 'cutoff', at: wf(65, 'reason')}]} label="EXHIBIT" title="Q. = MR. RUSH" focus={{x: 120, y: 1290, w: 1660, h: 700}} pushTo={wf(65, 'answered')} />
			<RecordPage set="cg100" start={wf(65, 'acoustic') - 14} end={ef(65) + 30} hl={[{key: 'acoustic', at: wf(65, 'monitoring')}]} label="EXHIBIT" title="Q. = MR. RUSH" focus={{x: 120, y: 820, w: 1660, h: 330}} pushTo={wf(65, 'tell')} />
			<Note o={vis(f, wf(65, 'on'), ef(65) + 20)}>
				<Wd f={f} at={wf(65, 'answered')}>THE CEO: </Wd>
				<Wd f={f} at={wf(65, 'cut-off')} lightAt={wf(65, 'scrap')}>THE CUT-OFF ENDS WERE SCRAP</Wd>
				<Wd f={f} at={wf(65, 'acoustic')} lightAt={wf(65, 'monitoring')} tone={colors.cyan}> · ACOUSTIC MONITORING </Wd>
				<Wd f={f} at={wf(65, 'tell')} lightAt={wf(65, 'failed')} tone={colors.cyan}>WOULD TELL HIM WAY BEFORE</Wd>
			</Note>
		</>
	);
};

// ── 4 · Fired; the letter of twenty; the call (s66–s70) ─────────────────────────────────────────────────────────

const Fired: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const letter = vis(f, sf(68) - 10, ef(70) + 30);
	return (
		<>
			<RecordPage set="roi" start={sf(66) - 16} end={ef(67) + 24} hl={[{key: 'impasse', at: wf(67, 'impasse')}]} label="EXHIBIT" title="QUOTING THE TERMINATION LETTER" pushTo={wf(67, 'termination')} />
			<div style={{position: 'absolute', right: 96, top: 84, opacity: vis(f, wf(66, 'four') - 6, ef(67) + 20), display: 'flex', gap: 14, alignItems: 'center'}}>
				<DatePill f={f} fps={fps} day={23} month={1} year={2018} dayWord={wf(66, 'later')} fromDay={19} size={32} />
				<span style={{opacity: lead(f, wf(66, 'fired'), 8), transform: `scale(${bump(f, fps, wf(66, 'fired') + LAND).toFixed(4)})`, display: 'inline-block'}}>
					<Chip text="FIRED" tone={colors.red} size={32} />
				</span>
			</div>
			<Note o={vis(f, sf(66), ef(67) + 14)}>
				<Wd f={f} at={wf(66, 'director')}>THE DIRECTOR OF MARINE OPERATIONS · </Wd>
				<Wd f={f} at={wf(67, 'letter')} lightAt={wf(67, 'said')}>THE LETTER: </Wd>
				<Wd f={f} at={wf(67, 'two')} lightAt={wf(67, 'impasse')} tone={colors.amber} bold>AN IMPASSE </Wd>
				<Wd f={f} at={wf(67, 'over')} lightAt={wf(67, 'hull')}>OVER THE HULL</Wd>
			</Note>
			{letter > 0 ? (
				<AbsoluteFill style={{opacity: letter}}>
					<Card x={300} y={190} w={1320} o={lead(f, wf(68, 'march') - 8, 10)} accent={colors.cyan} style={{padding: '30px 40px'}}>
						<div style={{display: 'flex', gap: 18, alignItems: 'center'}}>
							<Wd f={f} at={wf(68, 'march')} tone={colors.amber} bold style={T(34, {})}>MARCH 2018</Wd>
							<Wd f={f} at={wf(68, 'signed')} lightAt={wf(68, 'letter')} style={T(30, {})}>A LETTER TO THE CEO</Wd>
						</div>
						<div style={{display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 18}}>
							<span style={{...T(80, {color: f >= wf(68, 'twenty') + LAND ? colors.ink : colors.sub, fontWeight: 700}), display: 'inline-block', transform: `scale(${bump(f, fps, wf(68, 'twenty') + LAND).toFixed(4)})`}}>
								{f >= wf(68, 'twenty') - 14 ? `${Math.round(rollTo(f, [{frame: wf(68, 'twenty') - 14, value: 1}, {frame: wf(68, 'twenty') + LAND, value: 20}]))}+` : ''}
							</span>
							<Wd f={f} at={wf(68, 'submersible')} lightAt={wf(68, 'professionals')} style={T(32, {})}>SUBMERSIBLE PROFESSIONALS SIGNED</Wd>
						</div>
						<div style={{marginTop: 18, ...T(34, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(68, 'urging')}>URGING HIM </Wd>
							<Wd f={f} at={wf(68, 'put')} lightAt={wf(68, 'first')} tone={colors.cyan} bold>TO PUT SAFETY FIRST</Wd>
							<br />
							<Wd f={f} at={wf(68, 'follow')} lightAt={wf(68, "industry's")} tone={colors.cyan}>AND FOLLOW THE INDUSTRY'S </Wd><Wd f={f} at={wf(68, 'established')} lightAt={wf(68, 'practices')} tone={colors.cyan}>ESTABLISHED PRACTICES</Wd>
						</div>
						<div style={{marginTop: 22, display: 'flex', gap: 16, alignItems: 'center'}}>
							<span style={{opacity: lead(f, wf(69, 'never'), 8)}}>
								<Chip text={f >= wf(69, 'formally') ? 'NEVER SENT FORMALLY' : 'NEVER SENT'} tone={colors.amber} size={30} />
							</span>
						</div>
						<div style={{marginTop: 22, ...T(30, {}), lineHeight: 1.5}}>
							<Wd f={f} at={wf(70, 'received')}>HE RECEIVED IT · </Wd>
							<Wd f={f} at={wf(70, 'called')} lightAt={wf(70, 'committee')}>CALLED THE HEAD OF THE INDUSTRY COMMITTEE · </Wd>
							<br />
							<Wd f={f} at={wf(70, 'said')} lightAt={wf(70, 'leaving')} tone={colors.amber}>SAID HE WAS LEAVING </Wd>
							<Wd f={f} at={wf(70, 'association')}>THE ASSOCIATION</Wd>
						</div>
					</Card>
					<div style={{position: 'absolute', left: 300, top: 900, ...T(26, {color: colors.ink})}}>SOURCE: USCG MARINE BOARD · REPORT OF INVESTIGATION</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 5 · The first hull, and the failure mode it named; 2019 (s71–s76) ──────────────────────────────────────────

const FirstHull: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const {cx, cy, r} = HULL;
	const two = lead(f, wf(72, 'second'), 14);
	const word = span(f, wf(72, 'delamination') - 8, wf(72, 'second') + 4);
	const photo = vis(f, sf(73) - 12, ef(76) + 30);
	return (
		<>
			<AbsoluteFill style={{opacity: vis(f, sf(71) - 12, sf(73) + 4)}}>
				<Mount x={140} y={150} w={1640} h={720} start={sf(71) - 12} end={sf(73) + 20} source="HULL 1 (2018–19) AND HULL 2 (2021–23) · NTSB MIR-25-36" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
				<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
					<g transform="translate(150 230) scale(0.42)" opacity={lead(f, wf(71, 'first'), 10)}>
						<HullLines draw={1} tone={f >= wf(72, 'failure') ? colors.amber : colors.cyan} />
					</g>
					<g transform="translate(1010 230) scale(0.42)" opacity={0.25 + 0.75 * two}>
						<HullLines draw={1} tone={two > 0.5 ? colors.red : colors.cyan} />
					</g>
					<text x={150 + cx * 0.42} y={230 + (cy + r + 90) * 0.42} textAnchor="middle" style={T(34, lit(f, wf(71, 'hull'), colors.ink))}>HULL 1</text>
					<text x={1010 + cx * 0.42} y={230 + (cy + r + 90) * 0.42} textAnchor="middle" style={T(34, lit(f, wf(72, 'second'), colors.ink))} opacity={0.4 + 0.6 * two}>HULL 2</text>
					<text x={interpolate(word, [0, 1], [150 + cx * 0.42, 1010 + cx * 0.42])} y={680} textAnchor="middle" style={T(44, {fill: colors.red, fontWeight: 700})} opacity={lead(f, wf(72, 'delamination'), 10)}>
						DELAMINATION
					</text>
				</svg>
				<div style={{position: 'absolute', left: 0, right: 0, top: 200, textAlign: 'center', ...T(30, lit(f, wf(72, 'mode'), colors.amber)), opacity: lead(f, wf(72, 'failure'), 8)}}>THE FAILURE MODE</div>
				<div style={{position: 'absolute', left: 0, right: 0, top: 736, textAlign: 'center', ...T(30, {})}}>
					<Wd f={f} at={wf(72, 'named')} lightAt={wf(72, 'report')}>NAMED IN THE 2018 REPORT · </Wd>
					<Wd f={f} at={wf(72, 'what')} lightAt={wf(72, 'investigators')}>WHAT THE INVESTIGATORS </Wd>
					<Wd f={f} at={wf(72, 'find')} lightAt={wf(72, 'second')} tone={colors.red}>FOUND IN HULL 2</Wd>
				</div>
			</AbsoluteFill>
			{photo > 0 ? (
				<AbsoluteFill style={{opacity: photo}}>
					<RealFootage f={f} start={sf(73) - 12} end={ef(76) + 30} src="photos/hull1_2019.jpg" video={false} date="29 MAY 2019" what="HULL 1 IN STORAGE" source="USCG · DVIDS" push={0.06} focus={[0.6, 0.55]} box={{x: 96, y: 110, w: 760, h: 760}} under />
					<div style={{position: 'absolute', left: 920, top: 120, width: 900}}>
						<div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
							<Wd f={f} at={wf(73, 'twenty')} lightAt={wf(73, 'nineteen')} tone={colors.amber} bold style={T(40, {})}>2019</Wd>
							<span style={{opacity: lead(f, wf(73, 'crack'), 8), transform: `scale(${bump(f, fps, wf(73, 'found') + LAND).toFixed(4)})`, display: 'inline-block'}}>
								<Chip text="CRACK FOUND" tone={colors.red} size={34} />
							</span>
							<Wd f={f} at={wf(73, 'first')} lightAt={wf(73, 'hull')} style={T(34, {})}>IN THE FIRST HULL</Wd>
						</div>
						<Card x={0} y={90} w={900} o={lead(f, wf(74, "company's"), 10)} accent={colors.cyan} style={{padding: '20px 26px'}}>
							<div style={T(26, {})}><Wd f={f} at={wf(74, 'first')} lightAt={wf(74, 'engineering')} tone={colors.cyan}>THE FIRST DIRECTOR OF ENGINEERING · </Wd><Wd f={f} at={wf(74, 'testified')} tone={colors.cyan}>TESTIMONY</Wd></div>
							<div style={{marginTop: 10, ...T(32, {}), lineHeight: 1.45}}>
								<Wd f={f} at={wf(74, 'refused')} tone={colors.amber} bold>REFUSED </Wd><Wd f={f} at={wf(74, 'sign')} lightAt={wf(74, 'off')} tone={colors.amber} bold>TO SIGN IT OFF</Wd>
								<br />
								<Wd f={f} at={wf(74, 'his')} lightAt={wf(74, 'refusal')}>HIS REFUSAL </Wd><Wd f={f} at={wf(74, 'kept')}>KEPT IT FROM </Wd>
								<Wd f={f} at={wf(74, "year's")} lightAt={wf(74, 'expedition')} tone={colors.amber}>THE 2019 EXPEDITION</Wd>
								<br />
								<Wd f={f} at={wf(75, 'angered')} tone={colors.red}>IT ANGERED </Wd><Wd f={f} at={wf(75, 'chief')} lightAt={wf(75, 'executive')} tone={colors.red}>THE CEO · </Wd>
								<Wd f={f} at={wf(75, 'led')} lightAt={wf(75, 'firing')} tone={colors.red}>LED TO HIS FIRING</Wd>
							</div>
						</Card>
						<Card x={0} y={430} w={900} o={lead(f, wf(76, "company's"), 10)} accent={colors.amber} style={{padding: '20px 26px'}}>
							<div style={T(26, lit(f, wf(76, 'letter'), colors.amber))}>THE COMPANY'S LETTER TO HIM</div>
							<div style={{marginTop: 10, ...T(32, {})}}>
								<Wd f={f} at={wf(76, 'cited')}>CITED </Wd>
								<Wd f={f} at={wf(76, 'cancelled')} lightAt={wf(76, 'expedition')} tone={colors.amber} bold>THE CANCELLED EXPEDITION</Wd>
							</div>
						</Card>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 6 · Hull 2's ledger; "Now, dive eighty." (s77–s79) ─────────────────────────────────────────────────────────

const DIVES2 = [75, 76, 77, 78, 79, 80];
const Hull2: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const now = lead(f, wf(79, 'eighty'), 8);
	return (
		<>
			<Mount x={140} y={150} w={1640} h={760} start={sf(77) - 12} end={ef(79) + 30} source="HULL 2'S DIVES · NTSB MIR-25-36, TABLE OF DIVES" labels={[]} lean={3} />
			<div style={{position: 'absolute', left: 220, top: 200, display: 'flex', gap: 18, alignItems: 'baseline', ...T(40, {}), fontWeight: 700}}>
				<Wd f={f} at={wf(77, 'second')} lightAt={wf(77, 'hull')} bold>HULL 2</Wd>
				<Wd f={f} at={wf(77, 'built')} style={T(30, {})}>· BUILT</Wd>
				<Wd f={f} at={wf(77, 'one')} style={T(30, {})}>· THE ONE </Wd><Wd f={f} at={wf(77, 'lost')} lightAt={wf(77, 'twenty-three')} tone={colors.red} style={T(30, {})}>LOST IN 2023</Wd>
			</div>
			<div style={{position: 'absolute', left: 220, top: 270, ...T(34, {})}}>
				<Wd f={f} at={wf(78, 'dives')} lightAt={wf(78, 'numbered')}>DIVES </Wd>
				<Wd f={f} at={wf(78, 'fifty')} tone={colors.cyan} bold>50</Wd>
				<Wd f={f} at={wf(78, 'to')}> → </Wd>
				<Wd f={f} at={wf(78, 'eighty-eight')} tone={colors.cyan} bold>88</Wd>
				<Wd f={f} at={wf(78, 'eighty-eight') + 10} tone={colors.ink} style={T(30, {})}>  · SHOWN HERE: 75 → 80, TO THE WRECK</Wd>
			</div>
			<Ledger
				f={f}
				fps={fps}
				x={220}
				y={360}
				w={1480}
				rowH={70}
				ref3840={lead(f, wf(78, 'eighty-eight'), 12)}
				rows={DIVES2.map((d, i) => ({dive: String(d), depth: 3840, at: wf(78, 'eighty-eight') + 10 + i * 6, tone: d === 80 && now > 0 ? colors.amber : colors.cyan, note: d === 80 && now > 0 ? '15 JUL 2022' : ''}))}
			/>
			<div style={{position: 'absolute', left: 1180, top: 760, opacity: now, transform: `scale(${bump(f, fps, wf(79, 'eighty') + LAND).toFixed(4)})`}}>
				<Chip text="NOW, DIVE 80" tone={colors.amber} size={40} />
			</div>
		</>
	);
};

// ── 7 · Dive 80: up from the wreck, the bang near the surface, the sensors (s80–s85) ────────────────────────────

const Dive80: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const sea = vis(f, sf(80) - 12, ef(83) + 20);
	const panel = vis(f, sf(84) - 12, ef(85) + 40);
	const W = 1600;
	const H = 620;
	// one driver for the AE spike and the strain jump (s84–s85)
	const tEnd = rollTo(f, [{frame: sf(84) - 10, value: 14.6}, {frame: wf(84, 'peaked') + LAND, value: T_EVENT - 0.003}, {frame: wf(85, 'jumped') - 4, value: T_EVENT + 0.003}, {frame: wf(85, 'jumped') + 20, value: 15.65}]);
	const ae = lead(f, wf(84, 'peaked'), 10);
	const jump = lead(f, wf(85, 'jumped'), 8);
	return (
		<>
			{sea > 0 ? (
				<AbsoluteFill style={{opacity: sea}}>
					<RealFootage f={f} start={sf(80) - 12} end={ef(83) + 30} src="footage/atl_surface.mp4" date="" what="THE NORTH ATLANTIC · REFERENCE FOOTAGE, NOT THE DAY" source="REAL NAVIGATION / YOUTUBE · CC BY" push={0.05} />
					<Card x={96} y={96} w={840} o={1} style={{padding: '22px 28px'}}>
						<div style={{display: 'flex', gap: 14, alignItems: 'center'}}>
							<DatePill f={f} fps={fps} day={15} month={7} year={2022} dayWord={wf(80, 'fifteenth')} monthWord={wf(80, 'july')} yearWord={wf(80, 'twenty-two')} fromYear={2022} size={32} />
							<Chip text="DIVE 80" tone={colors.ink} size={32} />
						</div>
						<div style={{marginTop: 14, ...T(32, {})}}>
							<Wd f={f} at={wf(80, 'reached')} lightAt={wf(80, 'titanic')} tone={colors.cyan}>REACHED THE TITANIC · </Wd>
							<Wd f={f} at={wf(80, 'came')} lightAt={wf(80, 'up')}>BACK UP</Wd>
						</div>
						<div style={{marginTop: 10, ...T(32, {})}}>
							<Wd f={f} at={wf(81, 'near')} lightAt={wf(81, 'surface')}>NEAR THE SURFACE: </Wd>
							<Wd f={f} at={wf(81, 'loud')} lightAt={wf(81, 'bang')} tone={colors.red} bold>A LOUD BANG</Wd>
						</div>
						<div style={{marginTop: 10, ...T(28, {})}}>
							<Wd f={f} at={wf(81, 'people')} lightAt={wf(81, 'heard')}>HEARD INSIDE · </Wd>
							<Wd f={f} at={wf(82, 'crew')} lightAt={wf(82, 'boat')}>AND BY A SMALL BOAT'S CREW</Wd>
						</div>
						<div style={{marginTop: 14, ...T(28, {})}}>
							<Wd f={f} at={wf(83, 'records')} lightAt={wf(83, 'differ')} tone={colors.amber}>RECORDS DIFFER </Wd>
							<Wd f={f} at={wf(83, 'exactly')} lightAt={wf(83, 'where')} tone={colors.amber}>ON EXACTLY WHERE · </Wd>
							<Wd f={f} at={wf(83, 'all')} lightAt={wf(83, 'place')}>ALL PLACE IT </Wd>
							<Wd f={f} at={wf(83, 'near')} lightAt={wf(83, 'surface')} tone={colors.cyan}>NEAR THE SURFACE</Wd>
						</div>
					</Card>
				</AbsoluteFill>
			) : null}
			{panel > 0 ? (
				<AbsoluteFill style={{opacity: panel}}>
					<Mount x={160} y={150} w={W} h={H + 58} start={sf(84) - 12} end={ef(85) + 40} source="DIVE 80 STRAIN: NTSB MATERIALS LAB 24-012, FIG. 26 · ACOUSTIC PEAK: USCG MBI" labels={['TRACED']} lean={3}>
						<TimeTrace f={f} w={W} h={H} tEnd={tEnd} ae={ae} jump={jump} showDepth={0} />
					</Mount>
					<div style={{position: 'absolute', left: 660, top: 420, width: 660}}>
						<div style={{opacity: lead(f, wf(84, 'channel'), 8)}}>
							<Chip text={f >= wf(84, 'peaked') ? 'CHANNEL 2 · 25,687 mV' : f >= wf(84, 'two') ? 'CHANNEL 2' : 'CHANNEL'} tone={colors.red} size={30} style={{transform: `scale(${bump(f, fps, wf(84, 'twenty-five') + LAND, 0.06).toFixed(4)})`}} />
						</div>
						<div style={{marginTop: 10, ...T(28, {})}}>
							<Wd f={f} at={wf(84, 'acoustic')} lightAt={wf(84, 'sensor')}>THE ACOUSTIC SENSOR </Wd>
							<Wd f={f} at={wf(84, 'above')} lightAt={wf(84, 'thousand')} tone={colors.red}>PEAKED ABOVE 25,000 </Wd><Wd f={f} at={wf(84, 'millivolts')} tone={colors.red}>mV</Wd>
						</div>
					</div>
					<div style={{position: 'absolute', left: 660, top: 560, width: 660, ...T(30, {})}}>
						<Wd f={f} at={wf(85, 'same')} lightAt={wf(85, 'moment')}>SAME MOMENT: </Wd>
						<Wd f={f} at={wf(85, 'strain')} lightAt={wf(85, 'gauges')}>THE STRAIN GAUGES </Wd>
						<Wd f={f} at={wf(85, 'beside')}>BESIDE IT </Wd>
						<Wd f={f} at={wf(85, 'jumped')} tone={colors.amber} bold>JUMPED</Wd>
					</div>
				</AbsoluteFill>
			) : null}
		</>
	);
};

// ── 8 · Phil Brooks, under oath (s86–s98, clips) ────────────────────────────────────────────────────────────────

const Brooks: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const oath = vis(f, sf(86) - 12, ef(88) + 20);
	const gap = vis(f, sf(90) - 10, clipOf('h_brooks_flashlight').gapStartFrame - 10);
	const beam = span(f, wf(91, 'flashlight') - 6, wf(91, 'hull') + 10);
	return (
		<>
			{oath > 0 ? (
				<AbsoluteFill style={{opacity: oath}}>
					<RealFootage f={f} start={sf(86) - 12} end={ef(88) + 30} src="footage/h_brooks_oath.mp4" date="23 SEP 2024" what="MARINE BOARD HEARING" source="U.S. COAST GUARD · PUBLIC DOMAIN" push={0.04} focus={[0.62, 0.4]} box={{x: 96, y: 110, w: 1120, h: 630}} under />
					<div style={{position: 'absolute', left: 1250, top: 120, width: 574}}>
						<Wd f={f} at={wf(86, 'phil')} lightAt={wf(86, 'brooks')} base={colors.ink} style={{fontFamily: sans, fontWeight: 700, fontSize: 48, letterSpacing: 2}}>PHIL BROOKS</Wd>
						<div style={{marginTop: 12, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(86, 'director')} lightAt={wf(86, 'engineering')} tone={colors.amber} style={{whiteSpace: 'nowrap'}}>DIRECTOR OF ENGINEERING, 2021–23</Wd>
							<br />
							<Wd f={f} at={wf(86, 'promoted')}>PROMOTED FROM </Wd>
							<Wd f={f} at={wf(86, 'software')} lightAt={wf(86, 'engineer')} tone={colors.cyan}>SOFTWARE ENGINEER</Wd>
							<br />
							<Wd f={f} at={wf(86, 'before')} lightAt={wf(86, 'season')}>BEFORE THE 2022 SEASON</Wd>
						</div>
						<div style={{marginTop: 26, ...T(28, {}), lineHeight: 1.45}}>
							<Wd f={f} at={wf(87, 'testified')}>HE TESTIFIED: </Wd>
							<Wd f={f} at={wf(87, 'no')} lightAt={wf(87, 'background')} tone={colors.amber}>NO BACKGROUND IN </Wd>
							<Wd f={f} at={wf(87, 'mechanical')} lightAt={wf(87, 'materials')} tone={colors.amber}>MECHANICAL ENGINEERING OR MATERIALS</Wd>
							<br />
							<Wd f={f} at={wf(87, 'agreement')}>THE AGREEMENT: </Wd>
							<Wd f={f} at={wf(87, 'others')} lightAt={wf(87, 'mainly')}>OTHERS, </Wd>
							<Wd f={f} at={wf(87, 'chief')} lightAt={wf(87, 'executive')} tone={colors.amber}>MAINLY THE CEO, </Wd>
							<Wd f={f} at={wf(87, 'handle')} lightAt={wf(87, 'tasks')}>WOULD HANDLE THOSE TASKS</Wd>
						</div>
						<div style={{marginTop: 26, opacity: lead(f, wf(88, 'oath'), 8)}}>
							<Chip text={f >= wf(88, 'after') ? 'UNDER OATH · WHAT THEY DID AFTER THE BANG' : f >= wf(88, 'described') ? 'UNDER OATH · WHAT THEY DID' : 'UNDER OATH'} tone={colors.cyan} size={26} style={{transform: `scale(${bump(f, fps, wf(88, 'bang') + LAND, 0.05).toFixed(4)})`}} />
						</div>
					</div>
				</AbsoluteFill>
			) : null}
			{/* s89: as best they could */}
			<RecordPage set="cg112" start={sf(89) - 14} end={sf(90) + 6} hl={[{key: 'asbest', at: wf(89, 'best')}]} label="EXHIBIT" pushTo={wf(89, 'hull')} />
			{/* s90–s91: the insert inside, the cover outside, a flashlight down the gap */}
			{gap > 0 ? (
				<AbsoluteFill style={{opacity: gap}}>
					<Mount x={140} y={130} w={1640} h={760} start={sf(90) - 10} end={clipOf('h_brooks_flashlight').gapStartFrame} source="WALL, INSERT, FAIRING · AS BROOKS TESTIFIED, CG 112 P. 765–6" labels={['ILLUSTRATION · NOT TO SCALE']} lean={3} />
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						{/* outer cover (fairing) */}
						<rect x={300} y={300} width={1320} height={60} fill={colors.sub} opacity={0.35 * lead(f, wf(90, 'covered'), 12)} />
						<text x={300} y={290} style={T(28, lit(f, wf(90, 'covered'), colors.ink))} opacity={lead(f, wf(90, 'outside'), 8)}>OUTSIDE: COVERED</text>
						{/* the carbon wall */}
						{Array.from({length: 5}).map((_, i) => (
							<rect key={i} x={300} y={370 + i * 32} width={1320} height={28} fill={colors.cyan} opacity={0.22 + 0.1 * (i % 2)} stroke={colors.cyan} strokeWidth={1} />
						))}
						<text x={1640} y={455} style={T(28, {fill: colors.cyan})}>HULL</text>
						{/* the gap and the insert */}
						<rect x={300} y={548} width={1320} height={16} fill={colors.void} />
						<rect x={300} y={566} width={1320} height={70} fill={colors.ink} opacity={0.32 * lead(f, wf(90, 'insert'), 12)} />
						<text x={300} y={676} style={T(28, lit(f, wf(90, 'insert'), colors.ink))} opacity={lead(f, wf(90, 'inside'), 8)}>INSIDE: LINED BY AN INSERT</text>
						<text x={1640} y={562} style={T(28, lit(f, wf(91, 'gap'), colors.amber))} opacity={lead(f, wf(91, 'small'), 8)}>A SMALL GAP</text>
						{/* the flashlight beam down the gap */}
						<g opacity={lead(f, wf(91, 'flashlight'), 8)}>
							<rect x={210} y={536} width={70} height={40} rx={8} fill={colors.amber} />
							<polygon points={`280,550 ${280 + 1340 * beam},${540} ${280 + 1340 * beam},${572} 280,562`} fill={colors.amber} opacity={0.4} />
						</g>
					</svg>
					<div style={{position: 'absolute', left: 300, top: 760, ...T(32, {})}}>
						<Wd f={f} at={wf(91, 'look')} lightAt={wf(91, 'down')}>LOOK DOWN </Wd>
						<Wd f={f} at={wf(91, 'between')} lightAt={wf(91, 'insert')}>BETWEEN THE INSERT </Wd>
						<Wd f={f} at={wf(91, 'and')} lightAt={wf(91, 'hull')}>AND THE HULL</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<HearingClip f={f} id="h_brooks_flashlight" />
			{/* s93–s94: the insert never removed */}
			<RecordPage set="cg112" start={sf(93) - 16} end={ef(94) + 20} hl={[{key: 'insert', at: wf(93, 'never')}]} label="EXHIBIT" pushTo={wf(93, 'insert')} />
			<Note o={vis(f, sf(93) - 4, ef(94) + 14)} tone={colors.red}>
				<Wd f={f} at={wf(93, 'insert')}>THE INSERT: </Wd>
				<Wd f={f} at={wf(93, 'never')} lightAt={wf(93, 'removed')} tone={colors.red} bold>NEVER REMOVED · </Wd>
				<Wd f={f} at={wf(94, 'never')} lightAt={wf(94, 'done')} tone={colors.red}>NEVER DONE</Wd>
			</Note>
			{/* s95–s98: the data was the check */}
			<RecordPage
				set="cg112"
				start={sf(95) - 16}
				end={ef(98) + 20}
				hl={[
					{key: 'shift', at: wf(96, 'shift')},
					{key: 'concern', at: wf(97, 'concerned')},
					{key: 'expert', at: wf(98, 'expert')},
					{key: 'minor', at: wf(98, 'minor')},
				]}
				label="EXHIBIT"
				pushTo={wf(95, 'data')}
			/>
			<Note o={vis(f, sf(95) - 4, ef(96) + 6)}>
				<Wd f={f} at={wf(95, 'main')} lightAt={wf(95, 'data')} tone={colors.cyan}>THE MAIN CHECK: THE DATA · </Wd>
				<Wd f={f} at={wf(96, 'shift')} lightAt={wf(96, 'level')} tone={colors.amber}>A SHIFT IN LEVEL · </Wd>
				<Wd f={f} at={wf(96, 'two')} lightAt={wf(96, 'sixteen')} tone={colors.amber} bold>2 OF 16 </Wd>
				<Wd f={f} at={wf(96, 'channels')}>CHANNELS</Wd>
			</Note>
			<Note o={vis(f, sf(97) - 4, ef(97) + 6)} tone={colors.red}>
				<Wd f={f} at={wf(97, 'sudden')} lightAt={wf(97, 'shift')} tone={colors.red}>"A SUDDEN SHIFT" </Wd>
				<Wd f={f} at={wf(97, 'said')}>· HE SAID · </Wd>
				<Wd f={f} at={wf(97, 'something')} lightAt={wf(97, 'concerned')} tone={colors.red}>"SOMETHING TO BE CONCERNED ABOUT, </Wd>
				<Wd f={f} at={wf(97, 'sure')} tone={colors.red}>FOR SURE"</Wd>
			</Note>
			<Note o={vis(f, sf(98) - 4, ef(98) + 14)}>
				<Wd f={f} at={wf(98, 'added')}>HE ADDED: </Wd>
				<Wd f={f} at={wf(98, 'not')} lightAt={wf(98, 'expert')}>NOT A STRAIN EXPERT · </Wd>
				<Wd f={f} at={wf(98, 'this')} lightAt={wf(98, 'one')}>THIS ONE LOOKED </Wd>
				<Wd f={f} at={wf(98, 'fairly')} lightAt={wf(98, 'minor')} tone={colors.amber} bold>"FAIRLY MINOR"</Wd>
			</Note>
			<HearingClip f={f} id="h_brooks_decision" />
			<HearingClip f={f} id="h_brooks_diveagain" />
		</>
	);
};

// ── 9 · The theory of the bang; the contractor; the distance (s102–s108) ───────────────────────────────────────

const Theory: React.FC = () => {
	const f = useFilmFrame();
	const q = vis(f, sf(102) - 10, ef(102) + 16);
	const ill = vis(f, sf(103) - 10, ef(105) + 20);
	// down: the hull compresses, the frame does not; up: the frame springs, then snaps back
	const down = span(f, wf(104, 'compresses') - 6, wf(104, 'down') + 12) * (1 - span(f, wf(104, 'up') - 4, wf(104, 'up') + 16));
	const sprung = span(f, wf(104, 'sprung') - 6, wf(104, 'sprung') + 10) * (1 - span(f, wf(104, 'snapped') - 2, wf(104, 'back') + 6));
	const hullScale = 1 - 0.035 * down;
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: q}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 64, color: colors.ink}}>
					<Wd f={f} at={wf(102, 'what')} base={colors.ink}>What did they think </Wd>
					<Wd f={f} at={wf(102, 'bang')} tone={colors.amber}>the bang was?</Wd>
				</div>
			</AbsoluteFill>
			{ill > 0 ? (
				<AbsoluteFill style={{opacity: ill}}>
					<Mount x={140} y={130} w={1640} h={780} start={sf(103) - 10} end={ef(105) + 20} source="THE CEO'S THEORY, AS BROOKS TESTIFIED TO IT · CG 112 P. 785" labels={['ILLUSTRATION OF A THEORY']} lean={3} />
					<div style={{position: 'absolute', left: 220, top: 180, ...T(32, {})}}>
						<Wd f={f} at={wf(103, 'brooks')} lightAt={wf(103, 'testified')}>BROOKS: </Wd>
						<Wd f={f} at={wf(103, 'chief')} lightAt={wf(103, "executive's")}>THE CEO'S </Wd><Wd f={f} at={wf(103, 'theory')}>THEORY WAS </Wd>
						<Wd f={f} at={wf(103, 'frame')} tone={colors.amber} bold>THE FRAME</Wd>
					</div>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
						<g transform={`translate(960 520) scale(${(0.62 * hullScale).toFixed(4)}) translate(-960 -520)`}>
							<HullLines draw={1} tone={down > 0.05 ? colors.amber : colors.cyan} />
						</g>
						{/* the frame, bolted to the rings: a rail under the hull */}
						<g transform={`translate(0 ${(-30 * sprung).toFixed(1)})`}>
							<rect x={560} y={680} width={800} height={26} fill="none" stroke={sprung > 0.1 ? colors.red : colors.ink} strokeWidth={4} />
							{[580, 1320].map((x) => (
								<line key={x} x1={x} x2={x} y1={680} y2={630} stroke={colors.ink} strokeWidth={4} />
							))}
						</g>
						<text x={1380} y={700} style={T(28, lit(f, wf(104, 'frame'), colors.ink))} opacity={lead(f, wf(104, 'frame'), 8)}>FRAME · BOLTED</text>
					</svg>
					<div style={{position: 'absolute', left: 220, top: 740, ...T(30, {}), whiteSpace: 'nowrap'}}>
						<Wd f={f} at={wf(104, 'hull')} lightAt={wf(104, 'compresses')} tone={colors.amber}>DOWN: HULL COMPRESSES, </Wd>
						<Wd f={f} at={wf(104, 'frame')} lightAt={wf(104, 'not')}>FRAME DOES NOT · </Wd>
						<Wd f={f} at={wf(104, 'up')} tone={colors.red}>UP: FRAME </Wd><Wd f={f} at={wf(104, 'may')} lightAt={wf(104, 'sprung')} tone={colors.red}>MAY HAVE SPRUNG, </Wd>
						<Wd f={f} at={wf(104, 'snapped')} lightAt={wf(104, 'shape')}>SNAPS BACK</Wd>
					</div>
					<div style={{position: 'absolute', left: 220, top: 792, ...T(30, {}), whiteSpace: 'nowrap'}}>
						<Wd f={f} at={wf(105, 'brooks')}>BROOKS, </Wd><Wd f={f} at={wf(105, 'without')} lightAt={wf(105, 'qualified')}>NOT A QUALIFIED </Wd><Wd f={f} at={wf(105, 'mechanical')} lightAt={wf(105, 'engineer')}>MECHANICAL ENGINEER: </Wd><Wd f={f} at={wf(105, 'found')}>FOUND IT </Wd>
						<Wd f={f} at={wf(105, 'plausible')} lightAt={wf(105, 'time')} tone={colors.amber} bold>"PLAUSIBLE"</Wd>
					</div>
				</AbsoluteFill>
			) : null}
			<RecordPage set="cg112" start={sf(106) - 16} end={ef(107) + 20} hl={[{key: 'microns', at: wf(107, 'microns')}, {key: 'nexttwo', at: wf(107, 'two')}]} label="EXHIBIT" title="A CONTRACTOR'S TESTIMONY" pushTo={wf(106, 'delamination')} />
			<Note o={vis(f, sf(106) - 4, ef(107) + 14)}>
				<Wd f={f} at={wf(106, 'contractor')} lightAt={wf(106, 'expedition')}>A CONTRACTOR </Wd><Wd f={f} at={wf(106, 'testified')}>TESTIFIED </Wd><Wd f={f} at={wf(106, 'she')} lightAt={wf(106, 'asked')}>SHE ASKED: </Wd>
				<Wd f={f} at={wf(106, 'data')} lightAt={wf(106, 'delamination')} tone={colors.red}>COULD THE DATA SHOW DELAMINATION? · </Wd>
				<Wd f={f} at={wf(107, 'account')} lightAt={wf(107, 'said')}>HE SAID: </Wd><Wd f={f} at={wf(107, 'only')} lightAt={wf(107, 'microns')} tone={colors.amber} bold>"ONLY A FEW MICRONS" · </Wd>
				<Wd f={f} at={wf(107, 'next')} lightAt={wf(107, 'ahead')}>NEXT TWO DIVES AHEAD · </Wd>
				<Wd f={f} at={wf(107, 'visual')} lightAt={wf(107, 'seattle')}>LOOK IN SEATTLE</Wd>
			</Note>
			{/* his own words on the transcript page (CG 112 p. 768): the conversion and the judgement, highlighted as said */}
			<RecordPage set="cg112" start={sf(108) - 14} end={ef(108) + 24} hl={[{key: 'physical', at: wf(108, 'physical')}, {key: 'smallmove', at: wf(108, 'relatively')}]} label="EXHIBIT" title="BROOKS" pushTo={wf(108, 'converted')} />
			<Note o={vis(f, sf(108) + 8, ef(108) + 16)}>
				<Wd f={f} at={wf(108, 'brooks')} lightAt={wf(108, 'testified')} tone={colors.cyan}>BROOKS TESTIFIED: </Wd>
				<Wd f={f} at={wf(108, 'shift')} tone={colors.amber} bold>THE SHIFT </Wd><Wd f={f} at={wf(108, 'converted')}>→ </Wd><Wd f={f} at={wf(108, 'physical')} lightAt={wf(108, 'distance')} tone={colors.amber} bold>A PHYSICAL DISTANCE · </Wd>
				<Wd f={f} at={wf(108, 'judged')}>JUDGED </Wd><Wd f={f} at={wf(108, 'relatively')} lightAt={wf(108, 'movement')} tone={colors.ink} bold>"RELATIVELY SMALL MOVEMENT"</Wd>
			</Note>
		</>
	);
};

// ── 10 · Dive 81 and after: no new jump, one channel, the threshold (s109–s116) ─────────────────────────────────

const After80: React.FC = () => {
	const f = useFilmFrame();
	const {fps} = useVideoConfig();
	const base = vis(f, sf(109) - 12, ef(116) + 30);
	const thrY = 570;
	const ch4 = lead(f, wf(113, 'activity'), 16);
	return (
		<AbsoluteFill style={{opacity: base}}>
			<Mount x={120} y={110} w={1680} h={830} start={sf(109) - 12} end={ef(116) + 30} source="AFTER DIVE 80 · BROOKS, CG 112 P. 765, 801 · NTSB MIR-25-36" labels={['ILLUSTRATIVE VALUES']} lean={3} />
			<div style={{position: 'absolute', left: 200, top: 150, display: 'flex', gap: 18, alignItems: 'center'}}>
				<DatePill f={f} fps={fps} day={19} month={7} year={2022} dayWord={wf(109, 'nineteenth')} monthWord={wf(109, 'july')} fromDay={15} size={32} />
				<span style={{opacity: lead(f, wf(109, 'dived'), 8)}}>
					<Chip text={f >= wf(109, 'again') ? 'DIVE 81 · BACK DOWN' : 'DIVE 81'} tone={colors.amber} size={32} />
				</span>
			</div>
			<div style={{position: 'absolute', left: 200, top: 230, ...T(32, {}), lineHeight: 1.6}}>
				<Wd f={f} at={wf(110, 'brooks')} lightAt={wf(110, 'testified')}>BROOKS: </Wd>
				<Wd f={f} at={wf(110, 'after')} lightAt={wf(110, 'dive')}>AFTER THAT DIVE: </Wd><Wd f={f} at={wf(110, "didn't")} lightAt={wf(110, 'further')} tone={colors.cyan}>NO FURTHER </Wd><Wd f={f} at={wf(110, 'shifts')} lightAt={wf(110, 'data')} tone={colors.cyan}>STRAIN SHIFTS · </Wd>
				<Wd f={f} at={wf(111, 'loud')} lightAt={wf(111, 'bangs')} tone={colors.cyan}>NO LOUD BANGS · </Wd>
				<br />
				<Wd f={f} at={wf(112, 'nothing')} tone={colors.cyan}>NOTHING </Wd><Wd f={f} at={wf(112, 'acoustics')} lightAt={wf(112, 'seemed')} tone={colors.cyan}>IN THE ACOUSTICS </Wd><Wd f={f} at={wf(112, 'out')} lightAt={wf(112, 'ordinary')} tone={colors.cyan}>OUT OF THE ORDINARY</Wd>
			</div>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{/* channel 4 under a threshold line */}
				<line x1={200} x2={1720} y1={thrY} y2={thrY} stroke={colors.amber} strokeWidth={3} strokeDasharray="12 8" opacity={lead(f, wf(115, 'threshold'), 12)} />
				<text x={1720} y={thrY - 14} textAnchor="end" style={T(28, lit(f, wf(115, 'set'), colors.amber))} opacity={lead(f, wf(115, 'threshold'), 8)}>
					THEIR THRESHOLD · 5,000
				</text>
				<path
					d={`M 200 830 ${Array.from({length: 140}).map((_, i) => {
						const k = i / 139;
						const shown = k <= ch4;
						const a = (Math.abs(Math.sin(i * 1.3) * Math.sin(i * 0.21)) * 184 + 40) * (shown ? 1 : 0);
						const near = i === 97 && shown ? 248 + 20 * lead(f, wf(115, 'barely'), 10) : a;
						return `L ${200 + i * 11} ${830 - near}`;
					}).join(' ')}`}
					fill="none"
					stroke={colors.cyan}
					strokeWidth={2.5}
					opacity={lead(f, wf(113, 'acoustic'), 10)}
				/>
				<text x={200} y={868} style={T(28, lit(f, wf(113, 'sensor'), colors.cyan))} opacity={lead(f, wf(113, 'one'), 8)}>
					ONE ACOUSTIC SENSOR (CHANNEL 4) · <tspan style={lit(f, wf(113, 'followed'), colors.cyan)}>THE DIVES THAT FOLLOWED</tspan>
				</text>
			</svg>
			<div style={{position: 'absolute', left: 200, top: 360, width: 1520, ...T(30, {}), lineHeight: 1.55}}>
				<Wd f={f} at={wf(113, 'testified')} lightAt={wf(113, 'show')}>ACTIVITY </Wd><Wd f={f} at={wf(113, 'seen')}>· </Wd><Wd f={f} at={wf(113, 'kind')} lightAt={wf(113, 'concerned')} tone={colors.amber}>"THE KIND OF THING TO BE CONCERNED ABOUT" · </Wd>
				<Wd f={f} at={wf(113, 'twenty')} lightAt={wf(113, 'twenty-one')}>NOT SEEN IN 2021</Wd>
				<br />
				<Wd f={f} at={wf(114, 'raised')} lightAt={wf(114, 'executive')}>RAISED WITH THE CEO · </Wd>
				<Wd f={f} at={wf(115, 'under')} lightAt={wf(115, 'threshold')} tone={colors.amber}>UNDER THE THRESHOLD, </Wd>
				<Wd f={f} at={wf(115, 'maybe')} lightAt={wf(115, 'barely')} tone={colors.red} bold>"OR MAYBE JUST BARELY OVER IT" · </Wd>
				<Wd f={f} at={wf(115, 'never')} lightAt={wf(115, 'worse')}>NEVER GOT WORSE · </Wd>
				<Wd f={f} at={wf(115, 'not')} lightAt={wf(115, 'concern')}>"NOT A CONCERN"</Wd>
			</div>
			<Card x={120} y={954} w={1680} o={lead(f, wf(116, 'n'), 10) * (1 - 0)} accent={colors.cyan} style={{padding: '8px 18px'}}>
				<div style={{...T(28, {}), whiteSpace: 'nowrap'}}>
					<Wd f={f} at={wf(116, 'found')} tone={colors.cyan}>NTSB: </Wd>
					<Wd f={f} at={wf(116, 'never')} lightAt={wf(116, 'signal')}>THE SENSORS NEVER PRODUCED THE KIND OF SIGNAL </Wd>
					<Wd f={f} at={wf(116, 'triggered')} lightAt={wf(116, 'alert')} tone={colors.red}>THAT WOULD HAVE TRIGGERED AN ALERT</Wd>
				</div>
			</Card>
		</AbsoluteFill>
	);
};

// ── 11 · Was the damage in the data? (s117; clips: linearity, Kramer) ───────────────────────────────────────────

const InTheData: React.FC = () => {
	const f = useFilmFrame();
	return (
		<>
			<AbsoluteFill style={{alignItems: 'center', justifyContent: 'center', opacity: vis(f, sf(117) - 8, ef(117) + 20)}}>
				<div style={{fontFamily: sans, fontWeight: 700, fontSize: 72, color: colors.ink}}>
					<Wd f={f} at={wf(117, 'was')} base={colors.ink}>So, was the </Wd>
					<Wd f={f} at={wf(117, 'damage')} tone={colors.red}>damage </Wd>
					<Wd f={f} at={wf(117, 'in')} base={colors.ink}>in the </Wd>
					<Wd f={f} at={wf(117, 'data')} tone={colors.cyan}>data?</Wd>
				</div>
			</AbsoluteFill>
			<HearingClip f={f} id="h_brooks_linearity" />
			<HearingClip
				f={f}
				id="h_kramer_time"
				credit="VOICE: USCG HEARING, 25 SEP 2024 · PICTURE: NTSB 24-012 FIG. 26, TRACED"
				picture={<div style={{position: 'absolute', inset: 0, background: colors.card}}><TimeTrace f={f} w={1120} h={630} tEnd={17.1} showDepth={0} /></div>}
			/>
		</>
	);
};

const kramer = clipOf('h_kramer_time');
export const act3a: SceneDef[] = [
	{id: 'a3-opening', from: hold(57).from, to: ef(58) + 30, C: Opening, cues: [{frame: hold(57).from + 6, sfx: 'whoosh', gainDb: -26}]},
	{
		id: 'a3-report-2018',
		from: sf(59) - 24,
		to: ef(62) + 34,
		C: Report2018,
		cues: [
			{frame: sf(59) - 20, sfx: 'paper_slide', gainDb: -22},
			{frame: wf(61, 'twenty-six'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(62, 'visible') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(62, 'inter-laminar') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-meeting',
		from: sf(63) - 16,
		to: ef(65) + 34,
		C: Meeting,
		cues: [
			{frame: wf(64, 'recorded'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(65, 'scrap') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(65, 'monitoring') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-fired',
		from: sf(66) - 20,
		to: ef(70) + 34,
		C: Fired,
		cues: [
			{frame: wf(66, 'fired'), sfx: 'stamp', gainDb: -22},
			{frame: wf(67, 'impasse') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(68, 'twenty'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(69, 'never'), sfx: 'stamp', gainDb: -26},
		],
	},
	{
		id: 'a3-first-hull',
		from: sf(71) - 16,
		to: ef(76) + 34,
		C: FirstHull,
		cues: [
			{frame: wf(72, 'second'), sfx: 'relay_click', gainDb: -22},
			{frame: wf(73, 'crack'), sfx: 'metal_snap_sub', gainDb: -26},
			{frame: wf(74, 'refused'), sfx: 'stamp', gainDb: -26},
		],
	},
	{id: 'a3-hull2', from: sf(77) - 16, to: ef(79) + 34, C: Hull2, cues: [{frame: wf(79, 'eighty'), sfx: 'stamp', gainDb: -22}]},
	{
		id: 'a3-dive80',
		from: sf(80) - 16,
		to: ef(85) + 44,
		C: Dive80,
		cues: [
			{frame: wf(81, 'bang'), sfx: 'metal_snap_sub', gainDb: -20},
			{frame: wf(84, 'peaked'), sfx: 'relay_click', gainDb: -20},
			{frame: wf(85, 'jumped'), sfx: 'relay_click', gainDb: -20},
		],
	},
	{
		id: 'a3-brooks',
		from: sf(86) - 16,
		to: clipOf('h_brooks_diveagain').gapEndFrame + 30,
		C: Brooks,
		cues: [
			{frame: wf(89, 'best') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(91, 'flashlight'), sfx: 'relay_click', gainDb: -26},
			{frame: wf(93, 'never') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: wf(96, 'shift') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(98, 'minor') - 15, sfx: 'highlighter', gainDb: -24},
		],
	},
	{
		id: 'a3-theory',
		from: sf(102) - 16,
		to: ef(108) + 34,
		C: Theory,
		cues: [
			{frame: wf(104, 'sprung'), sfx: 'metal_snap_sub', gainDb: -28},
			{frame: wf(107, 'microns') - 15, sfx: 'highlighter', gainDb: -22},
			{frame: sf(108) - 14, sfx: 'paper_slide', gainDb: -24},
			{frame: wf(108, 'physical') - 15, sfx: 'highlighter', gainDb: -24},
			{frame: wf(108, 'relatively') - 15, sfx: 'highlighter', gainDb: -22},
		],
	},
	{
		id: 'a3-after80',
		from: sf(109) - 16,
		to: ef(116) + 34,
		C: After80,
		cues: [
			{frame: wf(109, 'nineteenth'), sfx: 'quartz_tick', gainDb: -22},
			{frame: wf(115, 'barely'), sfx: 'cockpit_chime', gainDb: -32},
		],
	},
	{id: 'a3-in-the-data', from: sf(117) - 12, to: kramer.gapEndFrame + 20, C: InTheData, cues: [{frame: wf(117, 'data'), sfx: 'whoosh', gainDb: -26}]},
];

