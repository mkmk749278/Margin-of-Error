// Sourced telemetry for The Four Missing Bolts (owner's calibration directive, 2026-11-03).
// Every value carries its claims.csv id. The two clearance figures measure different things and are never swapped:
//  - 0.5 in is a DESIGN clearance: how far the plug must rise for its stop pins to clear the stop pads (the point at
//    which the upper guide fittings clear their rollers). NTSB AIR-25-04 p. 15, claim C13.
//  - 0.630 in is a MEASURED exterior gap at the plug's lower edge, on the accident airplane's undamaged RIGHT plug with
//    its bolts removed, at the point of stop-pin to stop-pad instability (0.079 in fully down, 0.315 in mid).
//    NTSB p. 32, claim C21. The difference from fully down (0.551 in) is the NTSB's "about half an inch larger" (p. 80).
//  The record has no "total translation at separation" or witness-mark measurement on the accident plug, and does not
//  attribute the separation to "pneumatic pressure"; the labels below say only what was measured.

export type SourcedValue = {value: number; unit: string; label: string; source: string};

export const clearance = {
	stopPadClearance: {
		value: 0.5,
		unit: 'in',
		label: 'CRITICAL CLEARANCE THRESHOLD · STOP PINS CLEAR STOP PADS (DESIGN)',
		source: 'C13',
	},
	gapFullyDown: {value: 0.079, unit: 'in', label: 'LOWER-EDGE GAP · PLUG FULLY DOWN (EXEMPLAR)', source: 'C21'},
	gapMiddle: {value: 0.315, unit: 'in', label: 'LOWER-EDGE GAP · PARTLY RAISED (EXEMPLAR)', source: 'C21'},
	gapAtInstability: {
		value: 0.63,
		unit: 'in',
		label: 'LOWER-EDGE GAP AT STOP-PIN INSTABILITY (EXEMPLAR RIGHT PLUG)',
		source: 'C21',
	},
} as const satisfies Record<string, SourcedValue>;

export const plugLoads = {
	weight: {value: 63, unit: 'lb', label: 'PLUG WEIGHT AT 1 G', source: 'C10'},
	effectiveWeightMin: {value: 25, unit: 'lb', label: 'EFFECTIVE WEIGHT AT 0.40–0.45 G', source: 'C19'},
	liftNoMove: {value: 120, unit: 'lb', label: 'UPWARD PULL · NO MOVEMENT (GROUND, BOLTS OUT)', source: 'C18'},
	liftMoved: {value: 150, unit: 'lb', label: 'ESTIMATED FORCE THAT MOVED IT (TWO PEOPLE)', source: 'C18'},
} as const satisfies Record<string, SourcedValue>;

export const flight = {
	eventAltitude: {value: 14830, unit: 'ft', label: 'ALTITUDE AT DEPRESSURIZATION 17:12:33', source: 'C02'},
	maxAltitude: {value: 16320, unit: 'ft', label: 'MAXIMUM ALTITUDE 17:13:41', source: 'C03'},
	cycles: {value: 154, unit: 'cycles', label: 'CYCLES SINCE DELIVERY', source: 'C22'},
} as const satisfies Record<string, SourcedValue>;

/** Open-loop lock: the 18:39 photograph reveal must land 5:45–6:15 after the line "We will come to it in about six
 * minutes" (owner, 2026-11-03). Both times come from vo/timing.json; checkOpenLoop() fails the build otherwise. */
export const OPEN_LOOP_WINDOW_S = {min: 285, max: 330} as const;

export const checkOpenLoop = (promiseAtS: number, revealAtS: number): void => {
	const gap = revealAtS - promiseAtS;
	if (gap < OPEN_LOOP_WINDOW_S.min || gap > OPEN_LOOP_WINDOW_S.max) {
		throw new Error(`open loop: reveal ${gap.toFixed(1)} s after the promise; must be 285–330 s (about five minutes)`);
	}
};
