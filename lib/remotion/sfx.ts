// Every visual event exposes a sound cue (PLAYBOOK §10.2, §12). Systems return cues in their own local frames;
// a film shifts them into its cues.ts, and the mix reads the same list, so picture and sound never drift.

export type SfxName =
	| 'relay_click' // a grid or schematic locking into place
	| 'pen_scratch' // a schematic line drawing itself
	| 'quartz_tick' // telemetry ticks, counters, timestamps
	| 'paper_slide' // an exhibit sliding onto the desk
	| 'stamp' // an exhibit number or a finding stamped
	| 'highlighter' // the yellow highlight drawn across a line of a document
	| 'cockpit_chime' // a master caution or detector alarm (synthesised, never a real recording passed as one)
	| 'pressure_drop' // decompression, flow loss (filtered noise sweep)
	| 'metal_snap_sub' // fracture: dry snap, shear, 45 Hz boom
	| 'transformer_hum' // 60 Hz hum and its harmonics: the grid
	| 'whoosh';

export type SfxCue = {frame: number; sfx: SfxName; gainDb: number; pan?: number};

export const shiftCues = (cues: SfxCue[], offset: number): SfxCue[] => cues.map((c) => ({...c, frame: c.frame + offset}));
