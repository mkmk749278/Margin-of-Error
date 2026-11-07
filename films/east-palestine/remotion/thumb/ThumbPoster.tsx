import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {fontStacks} from '../../../../lib/remotion/fonts';
import {Bearing} from './ThumbBearing';

// Thumbnail G (owner's mock-up, 07 NOV 2026, rebuilt in our engine): huge number left, the wheel and the glowing
// bearing right, sparks, leader lines to the three readings. Every word on the record: the hearing exchange (C28):
// asked whether the thresholds "are not absolute limits for safe operating temperatures", the AAR witness: "Correct."
// The bearing and wheel are an ILLUSTRATION, not to scale.

const SLATE = '#0D1117';
const GRIDLINE = 'rgba(56,189,248,0.07)';
const HOT = '#FF7A00';
const CYAN = '#7dd3fc';
const AMBER = '#fbbf24';
const RED = '#ef4444';
const INK = '#f3f4f6';

// deterministic scatter (no Math.random): a small integer hash
const h = (n: number) => {
	let x = (n * 2654435761) % 4294967296;
	x = (x ^ (x >>> 15)) * 2246822519 % 4294967296;
	return ((x ^ (x >>> 13)) >>> 0) / 4294967296;
};

const Sparks: React.FC = () => (
	<>
		{Array.from({length: 70}, (_, i) => {
			const a = -0.5 + h(i) * 1.3; // spray out to the right from the bearing
			const d = 40 + h(i + 99) * 330;
			const x = 1640 + Math.cos(a) * d * 0.8;
			const y = 600 + Math.sin(a) * d * 0.7;
			const len = 6 + h(i + 7) * 22;
			return (
				<div
					key={i}
					style={{
						position: 'absolute', left: x, top: y, width: len, height: 3, borderRadius: 2,
						background: h(i + 3) > 0.5 ? '#ffd28a' : HOT, transform: `rotate(${a}rad)`,
						opacity: 0.35 + h(i + 5) * 0.65, boxShadow: `0 0 8px ${HOT}`,
					}}
				/>
			);
		})}
	</>
);

const Tag: React.FC<{y: number; color: string; text: string}> = ({y, color, text}) => (
	<div
		style={{
			position: 'absolute', right: 40, top: y, width: 640, boxSizing: 'border-box', padding: '8px 18px', background: `${color}22`, borderLeft: `6px solid ${color}`,
			fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 44, color, letterSpacing: 1, whiteSpace: 'nowrap',
		}}
	>
		{text}
	</div>
);

export const ThumbPoster: React.FC = () => (
	<AbsoluteFill style={{background: SLATE}}>
		<AbsoluteFill
			style={{backgroundImage: `linear-gradient(${GRIDLINE} 2px, transparent 2px), linear-gradient(90deg, ${GRIDLINE} 2px, transparent 2px)`, backgroundSize: '64px 64px'}}
		/>
		<div style={{position: 'absolute', left: 980, top: 140, width: 940, height: 760, background: `radial-gradient(closest-side, ${HOT}55, ${HOT}18 55%, transparent)`}} />
		<div style={{position: 'absolute', left: 760, top: 40, width: 1240, height: 1040, filter: `drop-shadow(0 0 24px ${HOT}99)`}}>
			<ThreeCanvas width={1240} height={1040} camera={{position: [0.6, 0.8, 12.5], fov: 42}} gl={{antialias: true}}>
				<ambientLight intensity={0.35} />
				<directionalLight position={[-6, 6, 8]} intensity={1.6} color="#cfe8ff" />
				<directionalLight position={[6, -3, 4]} intensity={0.8} color="#7dd3fc" />
				<pointLight position={[0.6, 0.2, 1.4]} intensity={14} distance={8} color={HOT} />
				<group position={[1.6, -0.2, 0]}>
					<Bearing wheel />
				</group>
			</ThreeCanvas>
		</div>
		<div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>
			<Sparks />
		</div>
		{/* leader lines from the readings to the cup */}
		<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0}}>
			<polyline points="1240,96 1190,96 1330,500" fill="none" stroke={CYAN} strokeWidth={3} />
			<polyline points="1240,186 1210,186 1390,520" fill="none" stroke={AMBER} strokeWidth={3} />
			<polyline points="1240,276 1230,276 1450,540" fill="none" stroke={RED} strokeWidth={3} />
			<circle cx={1330} cy={500} r={8} fill={CYAN} />
			<circle cx={1390} cy={520} r={8} fill={AMBER} />
			<circle cx={1450} cy={540} r={8} fill={RED} />
		</svg>
		<Tag y={64} color={CYAN} text="103°F · SALEM DETECTED" />
		<Tag y={154} color={AMBER} text="170°F · BILLING RULE ⚠" />
		<Tag y={244} color={RED} text="253°F · CRITICAL ALARM" />
		<div style={{position: 'absolute', right: 40, top: 330, fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 24, color: INK, opacity: 0.75, letterSpacing: 2}}>
			ABOVE AMBIENT · NTSB RIR-24-05
		</div>
		{/* the headline */}
		<div style={{position: 'absolute', left: 70, top: 40, width: 900}}>
			<div style={{fontFamily: fontStacks.display, fontWeight: 700, fontSize: 360, lineHeight: 0.95, color: INK, letterSpacing: -4, textShadow: '0 10px 30px rgba(0,0,0,0.9)'}}>170°</div>
			<div style={{fontFamily: fontStacks.display, fontWeight: 700, fontSize: 158, lineHeight: 0.98, color: HOT, letterSpacing: 0, textShadow: '0 10px 30px rgba(0,0,0,0.9)', marginTop: 10}}>
				NOT A<br />SAFETY<br />LIMIT
			</div>
			<div style={{fontFamily: fontStacks.display, fontWeight: 700, fontSize: 84, color: INK, letterSpacing: 2, marginTop: 18, whiteSpace: 'nowrap'}}>THE BILLING RULE</div>
		</div>
		<div style={{position: 'absolute', left: 74, bottom: 34, fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 26, color: INK, opacity: 0.85, letterSpacing: 1}}>
			EAST PALESTINE · AAR WITNESS AT THE NTSB HEARING: “CORRECT.”
		</div>
		<div style={{position: 'absolute', right: 40, bottom: 34, fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 24, color: AMBER, border: `2px solid ${AMBER}`, padding: '4px 12px', letterSpacing: 3}}>
			ILLUSTRATION · NOT TO SCALE
		</div>
	</AbsoluteFill>
);
