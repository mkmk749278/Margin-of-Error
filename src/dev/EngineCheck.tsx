import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {colors} from '../../lib/remotion/brand';
import {Desk} from '../../lib/remotion/Desk';
import {Exhibit} from '../../lib/remotion/Exhibit';
import {fontStacks} from '../../lib/remotion/fonts';
import {envelope} from '../../lib/remotion/motion';
import {Clock, Readout, TimelineBar} from '../../lib/remotion/Telemetry';

// Engine check (dev only, never published): every shared piece on one desk. The page is a SPECIMEN set by us,
// every value ILLUSTRATIVE, so nothing here can be mistaken for a real record.

const PAGE = {w: 1275, h: 1650}; // US Letter at 150 dpi, the size of a typical docket scan

const SpecimenPage: React.FC = () => {
	const p: React.CSSProperties = {position: 'absolute', left: 120, fontFamily: "'Courier New', monospace", color: colors.paper_ink};
	const lines = [
		'1.  The operator reported the component was inspected',
		'    at the scheduled interval and found serviceable.',
		'2.  No record of the removal was entered in the',
		'    tracking system before the unit was closed.',
		'3.  Retention hardware was not installed when the',
		'    assembly left the station.',
		'4.  The work order was closed at shift change.',
	];
	return (
		<>
			<div style={{...p, top: 110, fontSize: 30, fontWeight: 700, letterSpacing: 4}}>SPECIMEN — NOT A REAL DOCUMENT</div>
			<div style={{...p, top: 160, fontSize: 22, letterSpacing: 2}}>ENGINE CHECK · EXHIBIT LAYOUT TEST</div>
			<div style={{position: 'absolute', left: 120, right: 120, top: 210, height: 3, background: colors.paper_ink}} />
			<div style={{...p, top: 260, fontSize: 24, fontWeight: 700}}>FINDINGS</div>
			{lines.map((l, i) => (
				<div key={i} style={{...p, top: 320 + i * 52, fontSize: 26, whiteSpace: 'pre'}}>
					{l}
				</div>
			))}
			{Array.from({length: 12}, (_, i) => (
				<div key={`f${i}`} style={{position: 'absolute', left: 120, top: 760 + i * 52, width: 1035 - (i % 3) * 140, height: 14, background: '#d1d5db'}} />
			))}
		</>
	);
};

export const EngineCheck: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Desk duration={600}>
			<Exhibit
				page={PAGE}
				start={0}
				push={{from: 60, to: 240, focus: {x: 110, y: 410, w: 1060, h: 200}}}
				highlights={[{x: 112, y: 418, w: 1000, h: 92, start: 270}]}
				label="EXHIBIT 00"
				source="SPECIMEN · ENGINE CHECK"
				note="NOT A REAL DOCUMENT"
			>
				<SpecimenPage />
			</Exhibit>
			<Clock t0={17 * 3600 + 13 * 60 + 52} start={0} fps={60} zone="LOCAL" source="ILLUSTRATIVE" />
			<Readout
				title="SENSOR 2 // CABIN"
				start={20}
				end={590}
				rows={[
					{label: 'ALTITUDE', unit: 'ft', keys: [{frame: 0, value: 14800}, {frame: 420, value: 16000}], source: 'ILLUSTRATIVE', tone: 'cyan'},
					{label: 'CABIN Δp', unit: 'psi', keys: [{frame: 0, value: 6.2}, {frame: 330, value: 6.4}, {frame: 380, value: 0.4}], decimals: 1, source: 'ILLUSTRATIVE', tone: 'cyan'},
					{label: 'BEARING ΔT', unit: '°F', keys: [{frame: 0, value: 38}, {frame: 560, value: 230}], warn: 120, fail: 170, source: 'ILLUSTRATIVE'},
				]}
			/>
			<TimelineBar
				from={0}
				to={60}
				unit="MIN"
				start={30}
				end={590}
				y={950}
				events={[
					{at: 6, label: 'T+06 WORK ORDER', source: 'ILLUSTRATIVE'},
					{at: 28, label: 'T+28 CLOSED', tone: 'amber', source: 'ILLUSTRATIVE'},
					{at: 52, label: 'T+52 FAILURE', tone: 'red', source: 'ILLUSTRATIVE'},
				]}
			/>
			<AbsoluteFill style={{opacity: envelope(frame, 420, 600, 30, 10)}}>
				<div
					style={{
						position: 'absolute',
						right: 72,
						bottom: 180,
						background: colors.card,
						border: `1px solid ${colors.border}`,
						padding: '14px 28px',
						fontFamily: fontStacks.display,
						fontWeight: 800,
						fontSize: 64,
						letterSpacing: 10,
						color: colors.ink,
						textTransform: 'uppercase',
					}}
				>
					Where did the margin run out?
				</div>
			</AbsoluteFill>
		</Desk>
	);
};
