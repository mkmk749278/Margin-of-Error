import React, {useLayoutEffect, useMemo} from 'react';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';
import {glide} from '../../../lib/remotion/motion';

// TITAN'S PRESSURE HULL IN 3D (PLAYBOOK §6.8 rule 4): the film's hero object, built from the record.
// Units: 1 scene unit = 10 inches. The record's numbers:
//   wall: five co-bonded, nominally 1-inch-thick carbon fibre layers, 5 in in all (NTSB MIR-25-36 1.3.3.2, C03)
//   titanium end segments glued to the cylinder in a C-channel about 5.01 in wide (USCG ROI 4.16.3)
//   two 60-inch-diameter, 3.25-inch-thick titanium hemispherical domes bolted to the segments; forward dome hinged,
//   with a 23-inch acrylic viewport (USCG ROI 4.29.1.2-3)
//   8 acoustic sensors, 8 hoop and 8 longitudinal strain gauges on the inside (NTSB 1.3.4, C36); gauge group 4 near the
//   forward end of the cylinder (C82, C87)
// Not in the record for the final hull: its length (the first hull was 100 in long, USCG ROI 4.14.3) and the exact
// sensor positions. The scene says ILLUSTRATION and the source strip says what is measured and what is not.
// Forward is +Z. Every value is a pure function of the props, which the scene drives from the frame.

export const R_OUT = 3.0; // 60 in dome; the cylinder's outer face meets it
export const WALL = 0.5; // 5 in
export const R_IN = R_OUT - WALL;
export const LEN = 10.0; // 100 in (first hull's length: proportion only)
export const RING = 0.75; // titanium end segment, visible length
export const LAYERS = 5;

export type Vec3 = [number, number, number];
export type HullCam = {pos: Vec3; look: Vec3; fov: number};

export type Hull3DProps = {
	width: number;
	height: number;
	cam: HullCam;
	/** 0: the wall closed; 1: a 100° wedge cut away on top, the five layers in section */
	cut: number;
	/** 0..1: gauge group 4 (forward end, top) glows cyan */
	g4: number;
	/** 0..1: all sensors visible, faint cyan */
	sensors: number;
	/** 0..1 per acoustic channel (8), red when dark (channels 1, 3, 5 in 2022) */
	aeDark?: number[];
	/** 0..1: the layer interfaces show (thin amber lines at the cut) */
	interfaces?: number;
	/** 0..1: bench and lights up (0 = the hull alone in the dark, lit only by its rim) */
	bench?: number;
	/** 0..1: a wireframe sphere beside the hull (the usual deep-submersible hull) */
	sphere?: number;
	/** 0..1: the titanium end segments glow cyan */
	ringsLit?: number;
	/** 0..1: the titanium domes glow cyan */
	domesLit?: number;
	/** 0..1: the hull's own visibility (fade it for a sphere-only beat) */
	hullO?: number;
	/** 0..1: acoustic sensors / strain gauges shown separately (default: `sensors`) */
	aeOn?: number;
	sgOn?: number;
	/** 0..1: the sensors flash amber (the crackle the monitor was meant to hear) */
	crackle?: number;
	/** 0..1: a second gauge, centre top of the cylinder (the one Canada's TSB measured), glows amber */
	gTop?: number;
	/** 0..1: at sea on its launch platform (water and platform replace the bench) */
	sea?: number;
	/** degrees: the platform and hull tipping bow-down (+) */
	tilt?: number;
	/** 0..1: the landing frame bolted under the hull (the CEO's theory of the bang, as testified) */
	frame?: number;
	/** 0..1: the hull squeezed (exaggerated ×10 for the eye; ILLUSTRATION) */
	squeeze?: number;
	/** 0..1: the frame sprung away from the hull */
	sprung?: number;
	/** one-third-scale models on the bench: [first (1 = imploded), second (1 = stopped), never built (ghost)], each 0..1 visible */
	models?: {o: number; fail: number; ghost?: boolean}[];
};

// deterministic hash (no Math.random: PLAYBOOK §10)
const hash = (x: number, y: number): number => {
	const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
	return s - Math.floor(s);
};

/** Carbon tow texture: 0.5-inch tows wound mostly in the hoop direction (two hoop plies to one longitudinal). */
const useCarbonTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const W = 256;
		const H = 256;
		const data = new Uint8Array(W * H * 4);
		for (let y = 0; y < H; y++) {
			for (let x = 0; x < W; x++) {
				const tow = Math.floor(y / 8); // a hoop tow band
				const band = 0.5 + 0.5 * Math.sin((y % 8) / 8 * Math.PI); // the tow's own curvature catches light
				const n = hash(tow, Math.floor(x / 64));
				const v = 78 + 70 * band + 24 * n; // dark grey carbon, its tows legible under the lamp
				const i = (y * W + x) * 4;
				data[i] = v;
				data[i + 1] = v + 2;
				data[i + 2] = v + 6;
				data[i + 3] = 255;
			}
		}
		const t = new THREE.DataTexture(data, W, H);
		t.wrapS = THREE.RepeatWrapping;
		t.wrapT = THREE.RepeatWrapping;
		t.repeat.set(1, 6);
		t.colorSpace = THREE.SRGBColorSpace;
		// mipmapped and anisotropic: a lit weave under no MSAA otherwise shimmers into moiré
		t.generateMipmaps = true;
		t.minFilter = THREE.LinearMipmapLinearFilter;
		t.magFilter = THREE.LinearFilter;
		t.anisotropy = 8;
		t.needsUpdate = true;
		return t;
	}, []);

/** Brushed steel for the bench: long streaks along X. */
const useBrushedTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const W = 512;
		const H = 64;
		const data = new Uint8Array(W * H * 4);
		for (let y = 0; y < H; y++) {
			const row = hash(y, 3.1);
			for (let x = 0; x < W; x++) {
				const v = 150 + 60 * row + 30 * hash(Math.floor(x / 37), y);
				const i = (y * W + x) * 4;
				data[i] = v;
				data[i + 1] = v;
				data[i + 2] = v;
				data[i + 3] = 255;
			}
		}
		const t = new THREE.DataTexture(data, W, H);
		t.wrapS = THREE.RepeatWrapping;
		t.wrapT = THREE.RepeatWrapping;
		t.repeat.set(2, 18);
		t.needsUpdate = true;
		return t;
	}, []);

/** The lab floor under the lamp: a lit pool that falls off into the void at its edge (alpha), so the desk stays the desk. */
const useFloorTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const N = 256;
		const data = new Uint8Array(N * N * 4);
		for (let y = 0; y < N; y++) {
			for (let x = 0; x < N; x++) {
				const dx = (x - N / 2) / (N / 2);
				const dy = (y - N / 2) / (N / 2);
				const r = Math.min(1, Math.sqrt(dx * dx + dy * dy));
				const fall = Math.pow(1 - r, 0.9); // bright under the lamp, gone at the rim
				const grit = 6 * hash(Math.floor(x / 2), Math.floor(y / 2)); // sealed-concrete speckle
				const i = (y * N + x) * 4;
				data[i] = 96 + grit;
				data[i + 1] = 104 + grit;
				data[i + 2] = 116 + grit;
				data[i + 3] = Math.round(255 * fall);
			}
		}
		const t = new THREE.DataTexture(data, N, N);
		t.colorSpace = THREE.SRGBColorSpace;
		t.needsUpdate = true;
		return t;
	}, []);

/** One layer of the wall: an annular sector extruded along the hull's length. */
const layerGeometry = (rIn: number, rOut: number, cut: number): THREE.BufferGeometry => {
	const gap = (cut * 100 * Math.PI) / 180; // the open wedge, centred on top (+Y)
	const a0 = Math.PI / 2 + gap / 2;
	const a1 = Math.PI / 2 - gap / 2 + 2 * Math.PI;
	const s = new THREE.Shape();
	const steps = 48;
	for (let i = 0; i <= steps; i++) {
		const a = a0 + ((a1 - a0) * i) / steps;
		const p = [Math.cos(a) * rOut, Math.sin(a) * rOut] as const;
		if (i === 0) s.moveTo(p[0], p[1]);
		else s.lineTo(p[0], p[1]);
	}
	for (let i = steps; i >= 0; i--) {
		const a = a0 + ((a1 - a0) * i) / steps;
		s.lineTo(Math.cos(a) * rIn, Math.sin(a) * rIn);
	}
	const g = new THREE.ExtrudeGeometry(s, {depth: LEN, bevelEnabled: false, curveSegments: 4, steps: 1});
	g.translate(0, 0, -LEN / 2);
	return g;
};

const CameraRig: React.FC<{cam: HullCam}> = ({cam}) => {
	const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
	useLayoutEffect(() => {
		camera.position.set(...cam.pos);
		camera.fov = cam.fov;
		camera.near = 0.1;
		camera.far = 200;
		camera.lookAt(...cam.look);
		camera.updateProjectionMatrix();
	}, [camera, cam]);
	return null;
};

const Environment: React.FC = () => {
	const gl = useThree((s) => s.gl);
	const scene = useThree((s) => s.scene);
	useLayoutEffect(() => {
		const pmrem = new THREE.PMREMGenerator(gl);
		const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
		scene.environment = env;
		scene.environmentIntensity = 0.38; // studio reflections: what makes resin and titanium read as real materials
		return () => {
			env.dispose();
			pmrem.dispose();
		};
	}, [gl, scene]);
	return null;
};

/** Sensor positions on the inside wall (illustrative; the count is the record's). Angles from top, Z along the hull. */
export const SENSORS: {kind: 'ae' | 'sg'; ch: number; a: number; z: number}[] = (() => {
	const out: {kind: 'ae' | 'sg'; ch: number; a: number; z: number}[] = [];
	const zs = [3.6, 1.2, -1.2, -3.6];
	// illustrative positions on the upper wall, where the cutaway shows them (the count is the record's)
	for (let i = 0; i < 8; i++) out.push({kind: 'ae', ch: i + 1, a: i % 2 === 0 ? 0.62 : -0.62, z: zs[Math.floor(i / 2)]});
	for (let i = 0; i < 8; i++) out.push({kind: 'sg', ch: i + 1, a: i % 2 === 0 ? 0.25 : -0.25, z: zs[Math.floor(i / 2)] + 0.5});
	return out;
})();
/** Gauge group 4: top of the cylinder, near the forward end (C82, C87). */
export const G4: Vec3 = [0, R_IN - 0.02, LEN / 2 - 0.9];
/** The gauge Canada's TSB plotted: centre top of the carbon fibre cylinder (C123, C131). */
export const GTOP: Vec3 = [0, R_IN - 0.02, 0];

/** A ring of hex bolt heads on a flange: one instanced mesh, cheap to draw. */
const Bolts: React.FC<{r: number; n?: number}> = ({r, n = 36}) => {
	const geo = useMemo(() => new THREE.CylinderGeometry(0.075, 0.075, 0.07, 6), []);
	const mats = useMemo(() => {
		const m = new THREE.Object3D();
		return Array.from({length: n}, (_, i) => {
			const a = (i / n) * Math.PI * 2;
			m.position.set(Math.cos(a) * r, 0.05, Math.sin(a) * r);
			m.rotation.set(0, -a, 0);
			m.updateMatrix();
			return m.matrix.clone();
		});
	}, [r, n]);
	return (
		<instancedMesh args={[geo, undefined, n]} ref={(im) => {
			if (!im) return;
			mats.forEach((mx, i) => im.setMatrixAt(i, mx));
			im.instanceMatrix.needsUpdate = true;
		}}>
			<meshStandardMaterial color="#c3cad1" metalness={1} roughness={0.28} envMapIntensity={1.4} />
		</instancedMesh>
	);
};

const HullModel: React.FC<Omit<Hull3DProps, 'width' | 'height' | 'cam'>> = ({gTop = 0, cut, g4, sensors, aeDark = [], interfaces = 0, ringsLit = 0, domesLit = 0, hullO = 1, aeOn, sgOn, crackle = 0}) => {
	const carbon = useCarbonTexture();
	const layers = useMemo(() => {
		const cq = Math.round(cut * 60) / 60; // geometry rebuilt only when the wedge visibly changes
		return Array.from({length: LAYERS}, (_, i) => {
			const rIn = R_IN + (WALL / LAYERS) * i;
			const rOut = rIn + (WALL / LAYERS) * 0.985; // the adhesive film between layers
			return layerGeometry(rIn, rOut, cq);
		});
	}, [cut]);
	const tones = ['#5a6370', '#545d6a', '#5e6774', '#515a67', '#606976']; // dark resin carbon; the weave and clearcoat carry the light
	return (
		<group>
			{layers.map((g, i) => (
				<mesh key={i} geometry={g}>
					<meshPhysicalMaterial color={tones[i]} map={carbon} bumpMap={carbon} bumpScale={1.4} roughness={0.55} metalness={0.1} clearcoat={0.6} clearcoatRoughness={0.3} envMapIntensity={0.9} side={THREE.DoubleSide} transparent={hullO < 1} opacity={hullO} />
				</mesh>
			))}
			{/* the adhesive interfaces, seen in section on both faces of the cut: a thin amber line along the hull at each */}
			{interfaces > 0.01 && cut > 0.05
				? Array.from({length: LAYERS - 1}, (_, i) => {
						const r = R_IN + (WALL / LAYERS) * (i + 1) - 0.004;
						const gap = (Math.round(cut * 60) / 60) * ((100 * Math.PI) / 180);
						return [Math.PI / 2 + gap / 2, Math.PI / 2 - gap / 2].map((a, k) => (
							<mesh key={`if${i}-${k}`} position={[Math.cos(a) * r, Math.sin(a) * r, 0]}>
								<boxGeometry args={[0.022, 0.022, LEN - 0.02]} />
								<meshBasicMaterial color="#f59e0b" transparent opacity={interfaces} />
							</mesh>
						));
					})
				: null}
			{/* titanium end segments (rings) */}
			{[1, -1].map((s) => (
				<mesh key={`ring${s}`} position={[0, 0, s * (LEN / 2 + RING / 2 - 0.05)]} rotation={[Math.PI / 2, 0, 0]}>
					<cylinderGeometry args={[R_OUT + 0.06, R_OUT + 0.06, RING, 64, 1, true]} />
					<meshStandardMaterial color="#8e97a1" metalness={1} roughness={0.45} envMapIntensity={0.8} side={THREE.DoubleSide} emissive="#38bdf8" emissiveIntensity={0.6 * ringsLit} transparent={hullO < 1} opacity={hullO} />
				</mesh>
			))}
			{/* the domes: 60 in, 3.25 in thick; forward dome carries the viewport */}
			{[1, -1].map((s) => (
				<group key={`dome${s}`} position={[0, 0, s * (LEN / 2 + RING - 0.05)]} rotation={[s > 0 ? Math.PI / 2 : -Math.PI / 2, 0, 0]}>
					<mesh>
						<sphereGeometry args={[R_OUT + 0.06, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
						<meshStandardMaterial color="#959ea8" metalness={1} roughness={0.48} envMapIntensity={0.8} side={THREE.DoubleSide} emissive="#38bdf8" emissiveIntensity={0.12 * domesLit} transparent={hullO < 1} opacity={hullO} />
					</mesh>
					{/* bolt flange */}
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<torusGeometry args={[R_OUT + 0.08, 0.07, 8, 64]} />
						<meshStandardMaterial color="#8d97a2" metalness={1} roughness={0.35} envMapIntensity={1.2} />
					</mesh>
					{/* the dome's bolt circle (the record photographs the forward dome's bolts; count illustrative) */}
					<Bolts r={R_OUT + 0.1} />
					{s > 0 ? (
						<mesh position={[0, R_OUT + 0.02, 0]}>
							<cylinderGeometry args={[1.15, 1.15, 0.12, 64]} />
							<meshStandardMaterial color="#9fc6d8" metalness={0} roughness={0.05} transparent opacity={0.55} />
						</mesh>
					) : null}
				</group>
			))}
			{/* sensors on the inner wall */}
			{SENSORS.map((x, i) => {
				const dark = x.kind === 'ae' ? aeDark[x.ch - 1] ?? 0 : 0;
				const on = x.kind === 'ae' ? (aeOn ?? sensors) : (sgOn ?? sensors);
				const r = R_IN - 0.03;
				const ang = Math.PI / 2 - x.a;
				const col = dark > 0.5 ? '#ef4444' : crackle > 0.3 && x.kind === 'ae' ? '#f59e0b' : '#38bdf8';
				return (
					<mesh key={`s${i}`} position={[Math.cos(ang) * r, Math.sin(ang) * r, x.z]} rotation={[0, 0, ang - Math.PI / 2]}>
						<boxGeometry args={x.kind === 'ae' ? [0.34, 0.08, 0.34] : [0.12, 0.05, 0.4]} />
						<meshStandardMaterial color={col} emissive={col} emissiveIntensity={1.5 * on + 2 * crackle * (x.kind === 'ae' ? 1 : 0)} transparent opacity={0.25 + 0.75 * on} />
					</mesh>
				);
			})}
			{/* gauge group 4: forward end, top */}
			<mesh position={G4}>
				<boxGeometry args={[0.18, 0.05, 0.42]} />
				<meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={4 * g4} transparent opacity={g4} />
			</mesh>
			<pointLight position={[G4[0], G4[1] - 0.25, G4[2]]} color="#38bdf8" intensity={6 * g4} distance={3} decay={2} />
			<mesh position={GTOP}>
				<boxGeometry args={[0.18, 0.05, 0.42]} />
				<meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={4 * gTop} transparent opacity={gTop} />
			</mesh>
			<pointLight position={[GTOP[0], GTOP[1] - 0.25, GTOP[2]]} color="#f59e0b" intensity={6 * gTop} distance={3} decay={2} />
		</group>
	);
};

const Bench: React.FC<{bench: number}> = ({bench}) => {
	const brushed = useBrushedTexture();
	const floor = useFloorTexture();
	return (
		<group>
			<mesh position={[0, -R_OUT - 1.42, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<circleGeometry args={[34, 64]} />
				<meshBasicMaterial map={floor} transparent opacity={bench} depthWrite={false} toneMapped={false} />
			</mesh>
			<mesh position={[0, -R_OUT - 0.89, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.6, 1]}>
				<circleGeometry args={[3.4, 48]} />
				<meshBasicMaterial color="#000000" transparent opacity={0.45 * bench} />
			</mesh>
			{/* a matte steel inspection bench, the hull on two cradles */}
			<mesh position={[0, -R_OUT - 0.9 - 0.25, 0]}>
				<boxGeometry args={[14, 0.5, 22]} />
				<meshStandardMaterial color="#5a636e" metalness={0.6} roughness={0.55} roughnessMap={brushed} envMapIntensity={0.6 * bench} />
			</mesh>
			{[3.2, -3.2].map((z) => (
				<mesh key={z} position={[0, -R_OUT - 0.45, z]}>
					<boxGeometry args={[4.2, 0.9, 0.6]} />
					<meshStandardMaterial color="#3a424c" metalness={0.6} roughness={0.6} />
				</mesh>
			))}
		</group>
	);
};

const Lights: React.FC<{bench: number}> = ({bench}) => (
	<>
		<ambientLight intensity={0.12 + 0.35 * bench} />
		<directionalLight position={[8, 14, 10]} intensity={0.6 + 2.8 * bench} />
		{/* soft fill from the camera side: the weave reads on the shadow side too */}
		<directionalLight position={[10, 4, 14]} intensity={0.9 * bench} color="#dfe8f2" />
		{/* cold rim light from behind: the hull's silhouette reads even in the dark */}
		<directionalLight position={[-6, 5, -14]} intensity={1.6} color="#9cc9ff" />
		<spotLight position={[-9, 9, 12]} angle={0.5} penumbra={0.8} intensity={60 * bench} distance={40} color="#ffe9cc" />
		{/* a second, cooler rim from the far side: a bright edge separates the hull from the floor (a three-point setup) */}
		<directionalLight position={[9, 6, -12]} intensity={1.2 * bench} color="#bcd8ff" />
	</>
);

/** The hull in its own canvas. Place it in an AbsoluteFill; overlays (traces, labels) go above it in 2D. */
const ScaleModel: React.FC<{z: number; o: number; fail: number; ghost?: boolean}> = ({z, o, fail, ghost}) => {
	// one-third scale (ILLUSTRATION): a carbon cylinder with titanium ends; a failure crushes it and turns it red
	const r = R_OUT / 3;
	const len = LEN / 3;
	const sq = 1 - 0.45 * fail;
	const col = new THREE.Color('#4a5461').lerp(new THREE.Color('#ef4444'), fail);
	return (
		<group position={[5.6, -R_OUT - 0.9 + r * sq, z]} scale={[1, sq, 1]}>
			<mesh rotation={[Math.PI / 2, 0, 0]}>
				<cylinderGeometry args={[r, r, len, 48, 1]} />
				{ghost ? <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.5 * o} /> : <meshStandardMaterial color={col} metalness={0.2} roughness={0.5} transparent opacity={o} emissive="#ef4444" emissiveIntensity={0.4 * fail} />}
			</mesh>
			{[1, -1].map((s2) => (
				<mesh key={s2} position={[0, 0, s2 * (len / 2)]} rotation={[s2 > 0 ? Math.PI / 2 : -Math.PI / 2, 0, 0]}>
					<sphereGeometry args={[r, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
					{ghost ? <meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.5 * o} /> : <meshStandardMaterial color="#9ea8b3" metalness={1} roughness={0.5} transparent opacity={o} />}
				</mesh>
			))}
		</group>
	);
};

export const Hull3D: React.FC<Hull3DProps> = ({width, height, cam, cut, g4, sensors, aeDark, interfaces, bench = 1, sphere = 0, ringsLit = 0, domesLit = 0, hullO = 1, models = [], aeOn, sgOn, crackle, frame = 0, squeeze = 0, sprung = 0, gTop = 0, sea = 0, tilt = 0}) => (
	<>
	<ThreeCanvas width={Math.round(width)} height={Math.round(height)} gl={{antialias: false, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace}} camera={{fov: cam.fov, position: cam.pos, near: 0.1, far: 200}} style={{background: 'transparent'}}>
		<CameraRig cam={cam} />
		<Environment />
		<Lights bench={bench} />
		<group rotation={[(tilt * Math.PI) / 180, 0, 0]} position={[0, -0.8 * sea, 0]}>
		{sea > 0.01 ? (
			<mesh position={[0, -R_OUT - 0.7, 0]}>
				<boxGeometry args={[8, 0.6, LEN + 2 * RING + 4]} />
				<meshStandardMaterial color="#f59e0b" metalness={0.3} roughness={0.6} transparent opacity={sea} />
			</mesh>
		) : null}
		<group scale={[1 - 0.05 * squeeze, 1 - 0.05 * squeeze, 1]}>
		<HullModel cut={cut} g4={g4} sensors={sensors} aeDark={aeDark} interfaces={interfaces} bench={bench} ringsLit={ringsLit} domesLit={domesLit} hullO={hullO} aeOn={aeOn} sgOn={sgOn} crackle={crackle} gTop={gTop} />
		</group>
		{frame > 0.01 ? (
			<group position={[0, -0.55 * sprung, 0]}>
				{[-1.6, 1.6].map((x) => (
					<mesh key={x} position={[x, -R_OUT - 0.35, 0]}>
						<boxGeometry args={[0.28, 0.28, LEN + 2 * RING + 1.2]} />
						<meshStandardMaterial color={sprung > 0.2 ? '#ef4444' : '#cbd5e1'} emissive={sprung > 0.2 ? '#ef4444' : '#000000'} emissiveIntensity={0.5 * sprung} metalness={0.6} roughness={0.4} transparent opacity={frame} />
					</mesh>
				))}
				{[1, -1].flatMap((sz) => [-1.6, 1.6].map((x) => (
					<mesh key={`${sz}${x}`} position={[x * 0.8, -R_OUT + 0.15, sz * (LEN / 2 + RING / 2)]}>
						<boxGeometry args={[0.2, 1.0, 0.2]} />
						<meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.4} transparent opacity={frame} />
					</mesh>
				)))}
			</group>
		) : null}
		</group>
		{sea > 0.01 ? (
			<mesh position={[0, -R_OUT - 0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[200, 200]} />
				<meshStandardMaterial color="#0b3147" metalness={0.2} roughness={0.25} transparent opacity={0.88 * sea} />
			</mesh>
		) : null}
		{models.map((m, i) => (m.o > 0.01 ? <ScaleModel key={i} z={4.2 - i * 4.2} o={m.o} fail={m.fail} ghost={m.ghost} /> : null))}
		{sphere > 0.01 ? (
			<mesh position={[0, 0, -16.5]}>
				<sphereGeometry args={[R_OUT * 1.15, 32, 20]} />
				<meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.45 * sphere} />
			</mesh>
		) : null}
		{bench > 0.01 && sea < 0.5 ? <Bench bench={bench} /> : null}
	</ThreeCanvas>
	{/* the lens: a soft vignette over the 3D picture only (overlays drawn after the hull stay untouched) */}
	<div style={{position: 'absolute', left: 0, top: 0, width: Math.round(width), height: Math.round(height), pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 65% at 50% 50%, rgba(10,13,18,0) 55%, rgba(10,13,18,0.45) 100%)'}} />
	</>
);

/** Screen position (px) of a world point for a camera, so 2D overlays can start exactly at a 3D part. */
export const project = (p: Vec3, cam: HullCam, width: number, height: number): {x: number; y: number} => {
	const c = new THREE.PerspectiveCamera(cam.fov, width / height, 0.1, 200);
	c.position.set(...cam.pos);
	c.lookAt(...cam.look);
	c.updateMatrixWorld(true);
	c.updateProjectionMatrix();
	const v = new THREE.Vector3(...p).project(c);
	return {x: ((v.x + 1) / 2) * width, y: ((1 - v.y) / 2) * height};
};

/** Linear interpolation of camera keys on a 0..1 progress (eased by the caller). */
export const lerpCam = (a: HullCam, b: HullCam, t: number): HullCam => ({
	pos: [0, 1, 2].map((i) => a.pos[i] + (b.pos[i] - a.pos[i]) * t) as Vec3,
	look: [0, 1, 2].map((i) => a.look[i] + (b.look[i] - a.look[i]) * t) as Vec3,
	fov: a.fov + (b.fov - a.fov) * t,
});

const clamp01 = (t: number): number => Math.min(1, Math.max(0, t));

/** Hermite on one axis: a camera that passes through each key with a continuous velocity. */
const herm = (p0: number, p1: number, m0: number, m1: number, t: number, dt: number): number => {
	const t2 = t * t;
	const t3 = t2 * t;
	return (2 * t3 - 3 * t2 + 1) * p0 + (t3 - 2 * t2 + t) * m0 * dt + (-2 * t3 + 3 * t2) * p1 + (t3 - t2) * m1 * dt;
};

/**
 * Camera on word-keyed frames: one continuous move through every key (non-uniform Catmull-Rom), easing in at the first
 * key and out at the last, never stopping between them (owner 19 NOV 2026: "smooth, like a real camera moving").
 * Held before the first key and after the last.
 */
export const camAt = (f: number, keys: {f: number; cam: HullCam}[]): HullCam => {
	if (f <= keys[0].f) return keys[0].cam;
	const n = keys.length;
	if (f >= keys[n - 1].f) return keys[n - 1].cam;
	const vec = (c: HullCam): number[] => [...c.pos, ...c.look, c.fov];
	const vs = keys.map((k) => vec(k.cam));
	// velocity at each key: zero at the ends (ease in, ease out), the neighbours' chord in between
	const vel = (i: number): number[] =>
		i === 0 || i === n - 1 ? vs[i].map(() => 0) : vs[i].map((_, d) => (vs[i + 1][d] - vs[i - 1][d]) / Math.max(1, keys[i + 1].f - keys[i - 1].f));
	let i = 0;
	while (i + 2 < n && f > keys[i + 1].f) i++;
	const dt = Math.max(1, keys[i + 1].f - keys[i].f);
	const t = clamp01((f - keys[i].f) / dt);
	const m0 = vel(i);
	const m1 = vel(i + 1);
	const v = vs[i].map((_, d) => herm(vs[i][d], vs[i + 1][d], m0[d], m1[d], t, dt));
	return {pos: [v[0], v[1], v[2]], look: [v[3], v[4], v[5]], fov: v[6]};
};

/** Kept for the word lists the scenes pass: progress through the span of the listed words (monotonic, no pumping). */
export const beatPos = (f: number, beats: number[]): number => (beats.length ? glide(f, Math.min(...beats) - 30, Math.max(...beats) + 45) : 0);

/**
 * A real camera move across the listed words: a slow arc around the subject (yaw) with a slight crane down and a small
 * push, always forward through the shot, never in and out on a word (owner 19 NOV 2026). `amp` sets the size of the move.
 */
export const dolly = (cam: HullCam, f: number, beats: number[], amp = 0.035): HullCam => {
	const p = beatPos(f, beats);
	const yaw = (amp * 3.2) * (p - 0.5); // radians: about 6.4° across the shot at the default
	const off = [0, 1, 2].map((i) => cam.pos[i] - cam.look[i]);
	const c = Math.cos(yaw);
	const s = Math.sin(yaw);
	const x = off[0] * c - off[2] * s;
	const z = off[0] * s + off[2] * c;
	const k = 1 - amp * 0.8 * p; // a small push in as the arc travels
	const y = off[1] * (1 - amp * 1.2 * p); // the camera cranes down a touch
	return {...cam, pos: [cam.look[0] + x * k, cam.look[1] + y * k, cam.look[2] + z * k]};
};
/** No more scale pumping on photos and footage: the scene's camera does the moving (Film.tsx). */
export const beatScale = (_f: number, _beats: number[], _amp = 0.03): number => 1;
