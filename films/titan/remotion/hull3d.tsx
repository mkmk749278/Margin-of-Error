import React, {useLayoutEffect, useMemo} from 'react';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';

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
				const v = 44 + 34 * band + 16 * n;
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

/** One layer of the wall: an annular sector extruded along the hull's length. */
const layerGeometry = (rIn: number, rOut: number, cut: number): THREE.BufferGeometry => {
	const gap = (cut * 100 * Math.PI) / 180; // the open wedge, centred on top (+Y)
	const a0 = Math.PI / 2 + gap / 2;
	const a1 = Math.PI / 2 - gap / 2 + 2 * Math.PI;
	const s = new THREE.Shape();
	const steps = 96;
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
		scene.environmentIntensity = 0.25;
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

const HullModel: React.FC<Omit<Hull3DProps, 'width' | 'height' | 'cam'>> = ({cut, g4, sensors, aeDark = [], interfaces = 0, ringsLit = 0, domesLit = 0, hullO = 1, aeOn, sgOn, crackle = 0}) => {
	const carbon = useCarbonTexture();
	const layers = useMemo(() => {
		const cq = Math.round(cut * 60) / 60; // geometry rebuilt only when the wedge visibly changes
		return Array.from({length: LAYERS}, (_, i) => {
			const rIn = R_IN + (WALL / LAYERS) * i;
			const rOut = rIn + (WALL / LAYERS) * 0.985; // the adhesive film between layers
			return layerGeometry(rIn, rOut, cq);
		});
	}, [cut]);
	const tones = ['#55606e', '#4d5866', '#58636f', '#4a5461', '#5b6674'];
	return (
		<group>
			{layers.map((g, i) => (
				<mesh key={i} geometry={g} castShadow receiveShadow>
					<meshPhysicalMaterial color={tones[i]} map={carbon} roughness={0.5} metalness={0.2} clearcoat={0.5} clearcoatRoughness={0.35} side={THREE.DoubleSide} transparent={hullO < 1} opacity={hullO} />
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
				<mesh key={`ring${s}`} position={[0, 0, s * (LEN / 2 + RING / 2 - 0.05)]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
					<cylinderGeometry args={[R_OUT + 0.06, R_OUT + 0.06, RING, 128, 1, true]} />
					<meshStandardMaterial color="#a7b0ba" metalness={1} roughness={0.55} side={THREE.DoubleSide} emissive="#38bdf8" emissiveIntensity={0.6 * ringsLit} transparent={hullO < 1} opacity={hullO} />
				</mesh>
			))}
			{/* the domes: 60 in, 3.25 in thick; forward dome carries the viewport */}
			{[1, -1].map((s) => (
				<group key={`dome${s}`} position={[0, 0, s * (LEN / 2 + RING - 0.05)]} rotation={[s > 0 ? Math.PI / 2 : -Math.PI / 2, 0, 0]}>
					<mesh castShadow receiveShadow>
						<sphereGeometry args={[R_OUT + 0.06, 96, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
						<meshStandardMaterial color="#9ea8b3" metalness={1} roughness={0.58} side={THREE.DoubleSide} emissive="#38bdf8" emissiveIntensity={0.12 * domesLit} transparent={hullO < 1} opacity={hullO} />
					</mesh>
					{/* bolt flange */}
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<torusGeometry args={[R_OUT + 0.08, 0.07, 12, 128]} />
						<meshStandardMaterial color="#8d97a2" metalness={1} roughness={0.4} />
					</mesh>
					{s > 0 ? (
						<mesh position={[0, R_OUT + 0.02, 0]}>
							<cylinderGeometry args={[1.15, 1.15, 0.12, 64]} />
							<meshPhysicalMaterial color="#9fc6d8" metalness={0} roughness={0.05} transmission={0.6} transparent opacity={0.55} />
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
		</group>
	);
};

const Bench: React.FC<{bench: number}> = ({bench}) => {
	const brushed = useBrushedTexture();
	return (
		<group>
			{/* a matte steel inspection bench, the hull on two cradles */}
			<mesh position={[0, -R_OUT - 0.9 - 0.25, 0]} receiveShadow>
				<boxGeometry args={[14, 0.5, 22]} />
				<meshStandardMaterial color="#2b3038" metalness={0.75} roughness={0.55} roughnessMap={brushed} envMapIntensity={0.6 * bench} />
			</mesh>
			{[3.2, -3.2].map((z) => (
				<mesh key={z} position={[0, -R_OUT - 0.45, z]} castShadow receiveShadow>
					<boxGeometry args={[4.2, 0.9, 0.6]} />
					<meshStandardMaterial color="#1d2229" metalness={0.6} roughness={0.6} />
				</mesh>
			))}
		</group>
	);
};

const Lights: React.FC<{bench: number}> = ({bench}) => (
	<>
		<ambientLight intensity={0.05 + 0.1 * bench} />
		<directionalLight position={[8, 14, 10]} intensity={0.4 + 2.2 * bench} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} shadow-camera-left={-14} shadow-camera-right={14} shadow-camera-top={14} shadow-camera-bottom={-14} shadow-bias={-0.0004} />
		{/* cold rim light from behind: the hull's silhouette reads even in the dark */}
		<directionalLight position={[-6, 5, -14]} intensity={1.6} color="#9cc9ff" />
		<spotLight position={[-9, 9, 12]} angle={0.5} penumbra={0.8} intensity={60 * bench} distance={40} color="#ffe9cc" />
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
			<mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
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

export const Hull3D: React.FC<Hull3DProps> = ({width, height, cam, cut, g4, sensors, aeDark, interfaces, bench = 1, sphere = 0, ringsLit = 0, domesLit = 0, hullO = 1, models = [], aeOn, sgOn, crackle, frame = 0, squeeze = 0, sprung = 0}) => (
	<ThreeCanvas width={width} height={height} shadows gl={{antialias: true, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace}} camera={{fov: cam.fov, position: cam.pos, near: 0.1, far: 200}} style={{background: 'transparent'}}>
		<CameraRig cam={cam} />
		<Environment />
		<Lights bench={bench} />
		<group scale={[1 - 0.05 * squeeze, 1 - 0.05 * squeeze, 1]}>
		<HullModel cut={cut} g4={g4} sensors={sensors} aeDark={aeDark} interfaces={interfaces} bench={bench} ringsLit={ringsLit} domesLit={domesLit} hullO={hullO} aeOn={aeOn} sgOn={sgOn} crackle={crackle} />
		</group>
		{frame > 0.01 ? (
			<group position={[0, -0.55 * sprung, 0]}>
				{[-1.6, 1.6].map((x) => (
					<mesh key={x} position={[x, -R_OUT - 0.35, 0]} castShadow>
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
		{models.map((m, i) => (m.o > 0.01 ? <ScaleModel key={i} z={4.2 - i * 4.2} o={m.o} fail={m.fail} ghost={m.ghost} /> : null))}
		{sphere > 0.01 ? (
			<mesh position={[0, 0, -16.5]}>
				<sphereGeometry args={[R_OUT * 1.15, 32, 20]} />
				<meshBasicMaterial color="#94a3b8" wireframe transparent opacity={0.45 * sphere} />
			</mesh>
		) : null}
		{bench > 0.01 ? <Bench bench={bench} /> : null}
	</ThreeCanvas>
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

const ease3 = (t: number): number => t * t * (3 - 2 * t);
/** Camera on word-keyed frames, eased between keys (held before the first and after the last). */
export const camAt = (f: number, keys: {f: number; cam: HullCam}[]): HullCam => {
	if (f <= keys[0].f) return keys[0].cam;
	for (let i = 0; i + 1 < keys.length; i++) {
		const a = keys[i];
		const b = keys[i + 1];
		if (f <= b.f) return lerpCam(a.cam, b.cam, ease3((f - a.f) / Math.max(1, b.f - a.f)));
	}
	return keys[keys.length - 1].cam;
};

/** One beat's eased step, 0 → 1 over ~14 frames from just before its word. */
const beatStep = (f: number, at: number): number => ease3(Math.min(1, Math.max(0, (f - at + 6) / 14)));
/** Alternating in/out position of a beat track: +1, −1, +1 … eased between, so the picture moves on every listed word. */
export const beatPos = (f: number, beats: number[]): number => beats.reduce((acc, b, i) => acc + (i % 2 === 0 ? 1 : -1) * beatStep(f, b), 0);
/** The camera dollies `amp` of its distance in and out on each beat word (PLAYBOOK §6.8: motion on the words, not type). */
export const dolly = (cam: HullCam, f: number, beats: number[], amp = 0.035): HullCam => {
	const k = 1 - amp * beatPos(f, beats);
	return {...cam, pos: [0, 1, 2].map((i) => cam.look[i] + (cam.pos[i] - cam.look[i]) * k) as Vec3};
};
/** The same for a photograph or footage: a scale push of `amp` on each beat word. */
export const beatScale = (f: number, beats: number[], amp = 0.03): number => 1 + amp * beatPos(f, beats);
