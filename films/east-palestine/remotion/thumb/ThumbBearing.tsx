import React, {useMemo} from 'react';
import {AbsoluteFill} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import * as THREE from 'three';
import {fontStacks} from '../../../../lib/remotion/fonts';

// Thumbnail D (owner's brief, 07 NOV 2026): a cut-away tapered roller bearing on the axle journal, the rollers glowing,
// beside the three readings of the record (NTSB RIR-24-05: Salem 103°F, the 170°F line, East Palestine 253°F, all
// above ambient). The bearing is an ILLUSTRATION (the film's own bearing is after NTSB pp. 46-48); labelled so.
// Owner's palette for this thumbnail: slate #0D1117, thermal orange #FF7A00.

const SLATE = '#0D1117';
const GRIDLINE = 'rgba(56,189,248,0.07)';
const HOT = '#FF7A00';
const CYAN = '#7dd3fc';
const AMBER = '#fbbf24';
const RED = '#ef4444';
const INK = '#e5e7eb';

export type ThumbProps = {headline: string[]; accent: 'amber' | 'red'};

const lathe = (pts: [number, number][], phiStart: number, phiLength: number) =>
	new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), 96, phiStart, phiLength);

// Cut-away quarter: everything turned about the bearing axis (local Y) leaves out the quarter facing the camera.
const PHI0 = Math.PI * 0.5;
const PHIL = Math.PI * 1.5;

export const Bearing: React.FC<{wheel?: boolean}> = ({wheel = false}) => {
	const steel = useMemo(() => new THREE.MeshStandardMaterial({color: '#8b95a5', metalness: 0.85, roughness: 0.32, side: THREE.DoubleSide}), []);
	const darkSteel = useMemo(() => new THREE.MeshStandardMaterial({color: '#4b5563', metalness: 0.8, roughness: 0.4, side: THREE.DoubleSide}), []);
	const hotSteel = useMemo(
		() => new THREE.MeshStandardMaterial({color: '#6b7280', emissive: HOT, emissiveIntensity: 0.22, metalness: 0.75, roughness: 0.3, side: THREE.DoubleSide}),
		[],
	);
	const roller = useMemo(() => new THREE.MeshStandardMaterial({color: '#ffb066', emissive: HOT, emissiveIntensity: 2.2, metalness: 0.3, roughness: 0.3}), []);
	const seal = useMemo(() => new THREE.MeshStandardMaterial({color: '#1f2937', metalness: 0.2, roughness: 0.8, side: THREE.DoubleSide}), []);

	// cup (outer ring): two tapered raceways meeting in the middle
	const cup = useMemo(
		() =>
			lathe(
				[
					[1.62, -1.75], [1.62, 1.75], [1.3, 1.75], [1.18, 0.15], [1.18, -0.15], [1.3, -1.75], [1.62, -1.75],
				],
				PHI0,
				PHIL,
			),
		[],
	);
	// the two cones (inner rings) on the journal
	const cone = (dir: 1 | -1) =>
		lathe(
			dir === 1
				? [[0.8, 0.1], [0.92, 0.1], [1.02, 1.55], [0.8, 1.6]]
				: [[0.8, -1.6], [1.02, -1.55], [0.92, -0.1], [0.8, -0.1]],
			PHI0,
			PHIL,
		);
	const cones = useMemo(() => [cone(1), cone(-1)], []);
	const journal = useMemo(() => new THREE.CylinderGeometry(0.8, 0.8, 6.4, 64, 1, false), []);
	const axle = useMemo(() => new THREE.CylinderGeometry(1.05, 1.05, 3.2, 64), []);
	const endCap = useMemo(() => new THREE.CylinderGeometry(1.2, 1.2, 0.35, 64), []);
	const bolt = useMemo(() => new THREE.CylinderGeometry(0.16, 0.16, 0.18, 6), []);
	const sealRing = useMemo(() => lathe([[0.82, 0], [1.55, 0], [1.55, 0.22], [0.82, 0.22]], PHI0, PHIL), []);
	const rollerGeo = useMemo(() => new THREE.CylinderGeometry(0.15, 0.2, 1.3, 32), []);
	// a freight-car wheel, inboard of the bearing on the axle (profile: hub, plate, rim with flange), cut away like the rest
	const wheelGeo = useMemo(
		() =>
			lathe(
				[
					[1.05, -0.9], [1.9, -0.9], [2.1, -0.45], [4.6, -0.3], [4.85, -0.75], [5.0, -0.75], [5.45, -0.55],
					[5.5, -0.35], [5.0, 0.0], [5.0, 0.55], [4.6, 0.55], [4.4, 0.25], [2.1, 0.3], [1.9, 0.9], [1.05, 0.9],
				],
				PHI0,
				PHIL,
			),
		[],
	);

	// rollers: two rows of 16, sitting between cone and cup, tilted to the raceway taper
	const rollers: {pos: [number, number, number]; rot: [number, number, number]}[] = [];
	for (const row of [1, -1] as const) {
		for (let i = 0; i < 16; i++) {
			const a = (i / 16) * Math.PI * 2;
			const r = 1.1;
			rollers.push({
				pos: [Math.cos(a) * r, row * 0.88, Math.sin(a) * r],
				rot: [0, -a, row * 0.09],
			});
		}
	}

	return (
		<group rotation={[0.18, -0.62, -Math.PI / 2]}>
			<group rotation={[0, -Math.PI / 2, 0]}>
			{/* axle body (inboard, left after the turn) and the journal through the bearing */}
			<mesh geometry={axle} material={darkSteel} position={[0, -4.4, 0]} />
			{wheel ? <mesh geometry={wheelGeo} material={darkSteel} position={[0, -4.6, 0]} /> : null}
			<mesh geometry={journal} material={steel} position={[0, -0.2, 0]} />
			<mesh geometry={cup} material={hotSteel} />
			{cones.map((g, i) => (
				<mesh key={i} geometry={g} material={steel} />
			))}
			{rollers.map((r, i) => (
				<group key={i} position={r.pos} rotation={[0, r.rot[1], 0]}>
					<mesh geometry={rollerGeo} material={roller} rotation={[0, 0, r.rot[2]]} />
				</group>
			))}
			<mesh geometry={sealRing} material={seal} position={[0, 1.75, 0]} />
			<mesh geometry={sealRing} material={seal} position={[0, -1.97, 0]} />
			{/* end cap and its three cap screws, outboard */}
			<mesh geometry={endCap} material={darkSteel} position={[0, 3.12, 0]} />
			{[0, 1, 2].map((k) => {
				const a = (k / 3) * Math.PI * 2 + 0.4;
				return <mesh key={k} geometry={bolt} material={steel} position={[Math.cos(a) * 0.62, 3.36, Math.sin(a) * 0.62]} />;
			})}
			</group>
		</group>
	);
};

const Reading: React.FC<{v: string; label: string; color: string; y: number; big?: boolean}> = ({v, label, color, y}) => (
	<div style={{position: 'absolute', left: 0, top: y, display: 'flex', alignItems: 'baseline', gap: 22, whiteSpace: 'nowrap'}}>
		<span style={{fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 74, color, letterSpacing: 1, textShadow: `0 0 18px ${color}55`}}>{v}</span>
		<span style={{fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 40, color, letterSpacing: 2}}>// {label}</span>
	</div>
);

export const ThumbBearing: React.FC<ThumbProps> = ({headline, accent}) => {
	const hl = accent === 'red' ? RED : AMBER;
	return (
		<AbsoluteFill style={{background: SLATE}}>
			{/* blueprint grid */}
			<AbsoluteFill
				style={{
					backgroundImage: `linear-gradient(${GRIDLINE} 2px, transparent 2px), linear-gradient(90deg, ${GRIDLINE} 2px, transparent 2px)`,
					backgroundSize: '64px 64px',
				}}
			/>
			{/* heat bloom behind the bearing */}
			<div style={{position: 'absolute', left: 820, top: 70, width: 1100, height: 760, background: `radial-gradient(closest-side, ${HOT}66, ${HOT}22 55%, transparent)`}} />
			<div style={{position: 'absolute', left: 700, top: -40, width: 1260, height: 900, filter: `drop-shadow(0 0 26px ${HOT}aa)`}}>
				<ThreeCanvas width={1260} height={900} camera={{position: [0, 0.6, 9.6], fov: 40}} gl={{antialias: true}}>
					<ambientLight intensity={0.35} />
					<directionalLight position={[-6, 6, 8]} intensity={1.6} color="#cfe8ff" />
					<directionalLight position={[6, -3, 4]} intensity={0.8} color="#7dd3fc" />
					<pointLight position={[0.6, 0.2, 1.4]} intensity={14} distance={8} color={HOT} />
					<Bearing />
				</ThreeCanvas>
			</div>
			{/* headline, left 40% */}
			<div style={{position: 'absolute', left: 84, top: 120, width: 760}}>
				<div style={{fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 44, color: INK, letterSpacing: 6}}>EAST PALESTINE</div>
				<div style={{width: 120, height: 8, background: hl, margin: '26px 0 30px'}} />
				{headline.map((l, i) => (
					<div
						key={i}
						style={{
							fontFamily: fontStacks.display,
							fontWeight: 700,
							fontSize: 150,
							lineHeight: 1.0,
							letterSpacing: 2,
							color: i === headline.length - 1 ? hl : INK,
							textShadow: '0 6px 24px rgba(0,0,0,0.9)',
						}}
					>
						{l}
					</div>
				))}
			</div>
			{/* the three readings (degrees above ambient, NTSB RIR-24-05) */}
			<div style={{position: 'absolute', left: 1060, top: 760, width: 820, height: 280, background: 'rgba(13,17,23,0.82)', border: '2px solid #1e293b', padding: '18px 28px'}}>
				<div style={{position: 'relative', height: 260}}>
					<Reading v="103°F" label="DETECTED" color={CYAN} y={-6} />
					<Reading v="170°F" label="BILLING RULE" color={AMBER} y={78} />
					<Reading v="253°F" label="CRITICAL ALARM" color={RED} y={162} />
				</div>
			</div>
			<div style={{position: 'absolute', left: 1088, top: 716, fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 28, color: INK, letterSpacing: 3, opacity: 0.85}}>
				ABOVE AMBIENT · NTSB
			</div>
			<div style={{position: 'absolute', right: 40, top: 36, fontFamily: fontStacks.mono, fontWeight: 700, fontSize: 26, color: AMBER, border: `2px solid ${AMBER}`, padding: '4px 12px', letterSpacing: 3}}>
				ILLUSTRATION
			</div>
		</AbsoluteFill>
	);
};
