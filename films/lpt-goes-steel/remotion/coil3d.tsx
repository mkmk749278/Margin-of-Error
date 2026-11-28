import React, {useLayoutEffect, useMemo} from 'react';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/examples/jsm/environments/RoomEnvironment.js';

// THE FILM'S HEROES IN 3D (PLAYBOOK §6.8 rule 4), built from the record. 1 scene unit = 100 mm.
// H1 the coil: TRAN-COR H master coil, 920 mm wide (C07), 508 mm inside diameter for a coil that is not slit, about
//    600 kg per 100 mm of width (datasheet Table 7, p. 8). At GOES's density (~7.65 t/m³, an engineering constant)
//    600 kg per 100 mm gives an outside diameter of about 1,120 mm. RECONSTRUCTION.
// H2 the stacked core: three legs and two yokes of stacked laminations (232 report pp. 41–42, C65, C71); proportions
//    illustrative. RECONSTRUCTION.
// H2b the wound core: a strip wound into a closed loop (C65). RECONSTRUCTION.
// Sets sit apart on one floor: the coil at the origin, the stacked core at +X, the wound core beyond it. The coil's
// axis is X (its width runs left–right on screen). Every value is a pure function of the props.

export type Vec3 = [number, number, number];
export type Cam = {pos: Vec3; look: Vec3; fov: number};

export const COIL = {w: 9.2, ri: 2.54, ro: 5.6};
export const CORE_X = 26; // the stacked core's set
export const WOUND_X = 44; // the wound core's set
export const FLOOR_Y = -COIL.ro - 0.9;

export type HeroProps = {
	width: number;
	height: number;
	cam: Cam;
	/** coil rotation about its axis, radians */
	spin?: number;
	/** 0..1 coil visible */
	coil?: number;
	/** 0..1: a bright glint sweeping across the outer wrap (0 = left edge, 1 = right edge); <0 off */
	glint?: number;
	/** 0..1: the work light's strength */
	lamp?: number;
	/** 0..1: the stacked core visible */
	core?: number;
	/** 0..1: stacked core built (legs rise, yokes close) */
	build?: number;
	/** -1..1: magnetic flux through the core (sign = direction); drives the cyan glow */
	flux?: number;
	/** 0..1: heat in the core (amber glow), a little lost on every reversal */
	heat?: number;
	/** 0..1: share of the core's lamination packets tinted amber (imported) */
	imported?: number;
	/** 0..1: the laminations spread apart (a peel to show the sheets) */
	peel?: number;
	/** 0..1: the wound core visible */
	wound?: number;
	/** 0..1: the wound core's anneal glow */
	anneal?: number;
	/** 0..1: a ghost wireframe of a stacked core beside the coil (the coil's purpose) */
	ghost?: number;
};

const hash = (x: number, y: number): number => {
	const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
	return s - Math.floor(s);
};

/** The coil's end face: hundreds of wraps of strip, each a thin ring catching the light differently. */
const useWrapTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const N = 512;
		const data = new Uint8Array(N * N * 4);
		for (let y = 0; y < N; y++) {
			for (let x = 0; x < N; x++) {
				const dx = (x - N / 2) / (N / 2);
				const dy = (y - N / 2) / (N / 2);
				const r = Math.sqrt(dx * dx + dy * dy);
				const wrap = Math.floor(r * 230);
				const v = 118 + 46 * hash(wrap, 1.7) + 18 * Math.sin(r * 1440);
				const i = (y * N + x) * 4;
				data[i] = v;
				data[i + 1] = v + 4;
				data[i + 2] = v + 12;
				data[i + 3] = 255;
			}
		}
		const t = new THREE.DataTexture(data, N, N);
		t.colorSpace = THREE.SRGBColorSpace;
		t.generateMipmaps = true;
		t.minFilter = THREE.LinearMipmapLinearFilter;
		t.magFilter = THREE.LinearFilter;
		t.anisotropy = 8;
		t.needsUpdate = true;
		return t;
	}, []);

/** The outer wrap: the strip's grey insulating coating, streaked along the rolling direction. */
const useStripTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const W = 64;
		const H = 512;
		const data = new Uint8Array(W * H * 4);
		for (let y = 0; y < H; y++) {
			for (let x = 0; x < W; x++) {
				const v = 140 + 40 * hash(x, 9.3) + 14 * hash(Math.floor(y / 23), x);
				const i = (y * W + x) * 4;
				data[i] = v;
				data[i + 1] = v + 3;
				data[i + 2] = v + 8;
				data[i + 3] = 255;
			}
		}
		const t = new THREE.DataTexture(data, W, H);
		t.wrapS = THREE.RepeatWrapping;
		t.wrapT = THREE.RepeatWrapping;
		t.repeat.set(1, 3);
		t.colorSpace = THREE.SRGBColorSpace;
		t.generateMipmaps = true;
		t.minFilter = THREE.LinearMipmapLinearFilter;
		t.needsUpdate = true;
		return t;
	}, []);

/** A lamination stack seen edge-on: fine parallel sheets. */
const useStackTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const W = 256;
		const H = 16;
		const data = new Uint8Array(W * H * 4);
		for (let y = 0; y < H; y++) {
			for (let x = 0; x < W; x++) {
				const v = x % 4 === 0 ? 70 : 150 + 30 * hash(x, 2.2);
				const i = (y * W + x) * 4;
				data[i] = v;
				data[i + 1] = v + 3;
				data[i + 2] = v + 10;
				data[i + 3] = 255;
			}
		}
		const t = new THREE.DataTexture(data, W, H);
		t.wrapS = THREE.RepeatWrapping;
		t.wrapT = THREE.RepeatWrapping;
		t.repeat.set(3, 1);
		t.colorSpace = THREE.SRGBColorSpace;
		t.generateMipmaps = true;
		t.minFilter = THREE.LinearMipmapLinearFilter;
		t.needsUpdate = true;
		return t;
	}, []);

const useFloorTexture = (): THREE.DataTexture =>
	useMemo(() => {
		const N = 256;
		const data = new Uint8Array(N * N * 4);
		for (let y = 0; y < N; y++) {
			for (let x = 0; x < N; x++) {
				const dx = (x - N / 2) / (N / 2);
				const dy = (y - N / 2) / (N / 2);
				const r = Math.min(1, Math.sqrt(dx * dx + dy * dy));
				const fall = Math.pow(1 - r, 0.8);
				const grit = 7 * hash(Math.floor(x / 2), Math.floor(y / 2));
				const i = (y * N + x) * 4;
				data[i] = 88 + grit;
				data[i + 1] = 95 + grit;
				data[i + 2] = 106 + grit;
				data[i + 3] = Math.round(255 * fall);
			}
		}
		const t = new THREE.DataTexture(data, N, N);
		t.colorSpace = THREE.SRGBColorSpace;
		t.needsUpdate = true;
		return t;
	}, []);

const CameraRig: React.FC<{cam: Cam}> = ({cam}) => {
	const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
	useLayoutEffect(() => {
		camera.position.set(...cam.pos);
		camera.fov = cam.fov;
		camera.near = 0.1;
		camera.far = 400;
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
		scene.environmentIntensity = 0.42;
		return () => {
			env.dispose();
			pmrem.dispose();
		};
	}, [gl, scene]);
	return null;
};

const Coil: React.FC<{o: number; spin: number; glint: number}> = ({o, spin, glint}) => {
	const wrap = useWrapTexture();
	const strip = useStripTexture();
	const {w, ri, ro} = COIL;
	return (
		<group rotation={[spin, 0, 0]}>
			{/* the outer wrap (cylinder along X) */}
			<mesh rotation={[0, 0, Math.PI / 2]}>
				<cylinderGeometry args={[ro, ro, w, 96, 1, true]} />
				<meshStandardMaterial map={strip} color="#b9c3cf" metalness={0.75} roughness={0.38} transparent opacity={o} side={THREE.DoubleSide} />
			</mesh>
			{/* the bore */}
			<mesh rotation={[0, 0, Math.PI / 2]}>
				<cylinderGeometry args={[ri, ri, w, 64, 1, true]} />
				<meshStandardMaterial color="#3b434d" metalness={0.6} roughness={0.55} side={THREE.BackSide} transparent opacity={o} />
			</mesh>
			{/* the two end faces: the cut edges of every wrap */}
			{[1, -1].map((s) => (
				<mesh key={s} position={[(s * w) / 2, 0, 0]} rotation={[0, (s * Math.PI) / 2, 0]}>
					<ringGeometry args={[ri, ro, 128, 1]} />
					<meshStandardMaterial map={wrap} color="#d6dde6" metalness={0.85} roughness={0.3} transparent opacity={o} side={THREE.DoubleSide} />
				</mesh>
			))}
			{/* the glint: a thin bright band sweeping across the wrap's width */}
			{glint >= 0 && glint <= 1 ? (
				<mesh position={[-w / 2 + glint * w, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
					<cylinderGeometry args={[ro + 0.03, ro + 0.03, 0.35, 96, 1, true]} />
					<meshBasicMaterial color="#cfe8ff" transparent opacity={0.3 * o * Math.sin(Math.PI * glint)} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.FrontSide} />
				</mesh>
			) : null}
		</group>
	);
};

/** The V-saddle the coil rests on, eye horizontal. */
const Saddle: React.FC<{o: number}> = ({o}) => (
	<group position={[0, FLOOR_Y + 0.45, 0]}>
		{[1, -1].map((s) => (
			<mesh key={s} position={[0, 0.2, s * 2.6]} rotation={[s * 0.5, 0, 0]}>
				<boxGeometry args={[COIL.w + 1.6, 0.5, 2.2]} />
				<meshStandardMaterial color="#4b5563" metalness={0.5} roughness={0.6} transparent opacity={o} />
			</mesh>
		))}
		<mesh position={[0, -0.25, 0]}>
			<boxGeometry args={[COIL.w + 2.2, 0.4, 7.4]} />
			<meshStandardMaterial color="#374151" metalness={0.5} roughness={0.7} transparent opacity={o} />
		</mesh>
	</group>
);

/** A stacked three-leg core: legs and yokes as lamination packets; flux glows cyan, heat amber, imports amber. */
const StackedCore: React.FC<{o: number; build: number; flux: number; heat: number; imported: number; peel: number; ghost?: boolean}> = ({o, build, flux, heat, imported, peel, ghost}) => {
	const stack = useStackTexture();
	const LEG = {w: 2.4, h: 9, d: 2.8};
	const SPAN = 4.6; // leg centres
	const YOKE = {w: 2 * SPAN + LEG.w, h: 2.4};
	const PACKETS = 5; // lamination packets across the depth (the peel spreads them)
	const cyan = new THREE.Color('#38bdf8');
	const amber = new THREE.Color('#f59e0b');
	const rise = Math.min(1, build * 1.4);
	const close = Math.max(0, Math.min(1, (build - 0.5) * 2));
	const packets = Array.from({length: PACKETS}, (_, k) => k);
	const mat = (k: number, part: number) => {
		const imp = k + 1 <= Math.round(imported * PACKETS) ? 1 : 0;
		const base = new THREE.Color('#9aa6b2').lerp(amber, 0.55 * imp);
		const glowCol = heat > Math.abs(flux) * 0.6 ? amber : cyan;
		const glow = Math.max(Math.abs(flux) * (part === 1 ? 1 : 0.8), heat);
		if (ghost) return <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.35 * o} />;
		return <meshStandardMaterial map={stack} color={base} metalness={0.7} roughness={0.4} emissive={glowCol} emissiveIntensity={0.32 * glow} transparent opacity={o} />;
	};
	const pd = LEG.d / PACKETS;
	const spread = (k: number) => (k - (PACKETS - 1) / 2) * (pd + peel * 0.9);
	return (
		<group>
			{packets.map((k) => (
				<group key={k} position={[0, 0, spread(k)]}>
					{[-SPAN, 0, SPAN].map((x, j) => (
						<mesh key={x} position={[x, -LEG.h / 2 + (LEG.h * rise) / 2, 0]} scale={[1, Math.max(0.001, rise), 1]}>
							<boxGeometry args={[LEG.w, LEG.h, pd * 0.94]} />
							{mat(k, j === 1 ? 1 : 0)}
						</mesh>
					))}
					{[1, -1].map((s) => (
						<mesh key={s} position={[0, s * (LEG.h / 2 + YOKE.h / 2) + s * (1 - close) * 3, 0]}>
							<boxGeometry args={[YOKE.w, YOKE.h, pd * 0.94]} />
							{mat(k, 0)}
						</mesh>
					))}
				</group>
			))}
		</group>
	);
};

/** A wound core: one continuous strip wrapped into a rounded loop (window in the middle). */
const WoundCore: React.FC<{o: number; anneal: number}> = ({o, anneal}) => {
	const geo = useMemo(() => {
		const rr = (w: number, h: number, r: number): THREE.Shape => {
			const s = new THREE.Shape();
			s.moveTo(-w / 2 + r, -h / 2);
			s.lineTo(w / 2 - r, -h / 2);
			s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
			s.lineTo(w / 2, h / 2 - r);
			s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
			s.lineTo(-w / 2 + r, h / 2);
			s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
			s.lineTo(-w / 2, -h / 2 + r);
			s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
			return s;
		};
		const outer = rr(7, 9, 2.2);
		const inner = rr(3.4, 5.4, 0.9);
		outer.holes.push(inner as unknown as THREE.Path);
		const g = new THREE.ExtrudeGeometry(outer, {depth: 3, bevelEnabled: false, curveSegments: 24});
		g.translate(0, 0, -1.5);
		return g;
	}, []);
	const wrap = useWrapTexture();
	const glow = new THREE.Color('#f59e0b');
	return (
		<mesh geometry={geo}>
			<meshStandardMaterial map={wrap} color="#c8d0da" metalness={0.75} roughness={0.35} emissive={glow} emissiveIntensity={0.7 * anneal} transparent opacity={o} />
		</mesh>
	);
};

const Floor: React.FC = () => {
	const floor = useFloorTexture();
	return (
		<>
			{[0, CORE_X, WOUND_X].map((x) => (
				<mesh key={x} position={[x, FLOOR_Y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
					<circleGeometry args={[16, 64]} />
					<meshBasicMaterial map={floor} transparent depthWrite={false} toneMapped={false} />
				</mesh>
			))}
		</>
	);
};

export const Hero3D: React.FC<HeroProps> = ({width, height, cam, spin = 0, coil = 1, glint = -1, lamp = 1, core = 0, build = 1, flux = 0, heat = 0, imported = 0, peel = 0, wound = 0, anneal = 0, ghost = 0}) => (
	<>
		<ThreeCanvas width={Math.round(width)} height={Math.round(height)} gl={{antialias: false, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace}} camera={{fov: cam.fov, position: cam.pos, near: 0.1, far: 400}} style={{background: 'transparent'}}>
			<CameraRig cam={cam} />
			<Environment />
			<ambientLight intensity={0.18 + 0.2 * lamp} />
			<directionalLight position={[10, 16, 12]} intensity={0.8 + 2.4 * lamp} />
			<directionalLight position={[14, 4, 16]} intensity={0.8 * lamp} color="#dfe8f2" />
			<directionalLight position={[-8, 6, -14]} intensity={1.5} color="#9cc9ff" />
			<spotLight position={[-6, 14, 12]} angle={0.55} penumbra={0.8} intensity={70 * lamp} distance={50} color="#ffe9cc" />
			<spotLight position={[CORE_X - 6, 14, 12]} angle={0.6} penumbra={0.8} intensity={60} distance={50} color="#ffe9cc" />
			<spotLight position={[WOUND_X - 6, 14, 12]} angle={0.6} penumbra={0.8} intensity={60} distance={50} color="#ffe9cc" />
			<Floor />
			{coil > 0.01 ? (
				<>
					<Coil o={coil} spin={spin} glint={glint} />
					<Saddle o={coil} />
				</>
			) : null}
			{ghost > 0.01 ? (
				<group position={[14, 1, -6]} scale={0.8}>
					<StackedCore o={ghost} build={1} flux={0} heat={0} imported={0} peel={0} ghost />
				</group>
			) : null}
			{core > 0.01 ? (
				<group position={[CORE_X, FLOOR_Y + 7.3, 0]}>
					<StackedCore o={core} build={build} flux={flux} heat={heat} imported={imported} peel={peel} />
				</group>
			) : null}
			{wound > 0.01 ? (
				<group position={[WOUND_X, FLOOR_Y + 4.6, 0]}>
					<WoundCore o={wound} anneal={anneal} />
				</group>
			) : null}
		</ThreeCanvas>
		<div style={{position: 'absolute', left: 0, top: 0, width: Math.round(width), height: Math.round(height), pointerEvents: 'none', background: 'radial-gradient(ellipse 72% 66% at 50% 50%, rgba(10,13,18,0) 55%, rgba(10,13,18,0.5) 100%)'}} />
	</>
);

/** Screen position (px) of a world point, so 2D overlays (caliper, labels) sit exactly on a 3D part. */
export const project = (p: Vec3, cam: Cam, width: number, height: number): {x: number; y: number} => {
	const c = new THREE.PerspectiveCamera(cam.fov, width / height, 0.1, 400);
	c.position.set(...cam.pos);
	c.lookAt(...cam.look);
	c.updateMatrixWorld(true);
	c.updateProjectionMatrix();
	const v = new THREE.Vector3(...p).project(c);
	return {x: ((v.x + 1) / 2) * width, y: ((1 - v.y) / 2) * height};
};

const herm = (p0: number, p1: number, m0: number, m1: number, t: number, dt: number): number => {
	const t2 = t * t;
	const t3 = t2 * t;
	return (2 * t3 - 3 * t2 + 1) * p0 + (t3 - 2 * t2 + t) * m0 * dt + (-2 * t3 + 3 * t2) * p1 + (t3 - t2) * m1 * dt;
};

/** Camera through word-keyed frames: one continuous move, easing in at the first key and out at the last. */
export const camAt = (f: number, keys: {f: number; cam: Cam}[]): Cam => {
	if (f <= keys[0].f) return keys[0].cam;
	const n = keys.length;
	if (f >= keys[n - 1].f) return keys[n - 1].cam;
	const vec = (c: Cam): number[] => [...c.pos, ...c.look, c.fov];
	const vs = keys.map((k) => vec(k.cam));
	const vel = (i: number): number[] => (i === 0 || i === n - 1 ? vs[i].map(() => 0) : vs[i].map((_, d) => (vs[i + 1][d] - vs[i - 1][d]) / Math.max(1, keys[i + 1].f - keys[i - 1].f)));
	let i = 0;
	while (i + 2 < n && f > keys[i + 1].f) i++;
	const dt = Math.max(1, keys[i + 1].f - keys[i].f);
	const t = Math.min(1, Math.max(0, (f - keys[i].f) / dt));
	const m0 = vel(i);
	const m1 = vel(i + 1);
	const v = vs[i].map((_, d) => herm(vs[i][d], vs[i + 1][d], m0[d], m1[d], t, dt));
	return {pos: [v[0], v[1], v[2]], look: [v[3], v[4], v[5]], fov: v[6]};
};
