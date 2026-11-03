import fdr from './data/fdr_1282.json';

// The real flight data (NTSB docket DCA24MA063, FDR tabular data, attachment 1; public domain). One sample a
// second from 17:04:00 PST. Every readout in Act I comes from here, interpolated between samples so no number jumps.

export const T0 = 17 * 3600 + 4 * 60; // 17:04:00 PST, seconds after midnight
export const EVENT_T = 513; // 17:12:33, the pressure drop (C02)
export const WARN_T = fdr.events.cabin_alt_warning[1].t; // 513.587
export const CAUTION_T = fdr.events.master_caution[1].t; // 514.447
export const GEAR_AIR_T = fdr.events.gear[1].t;
export const GEAR_GROUND_T = fdr.events.gear[2].t; // 1366.76 → 17:26:46.8 (C04: landed 17:26:46)

const at = (arr: number[], t: number): number => {
	const i = Math.max(0, Math.min(arr.length - 2, Math.floor(t)));
	const k = Math.max(0, Math.min(1, t - i));
	return arr[i] + (arr[i + 1] - arr[i]) * k;
};

export const altFt = (t: number): number => at(fdr.alt_press_ft, t);
export const cabinPsi = (t: number): number => at(fdr.cabin_press_cpc1_psi, t);
export const groundspeedKt = (t: number): number => at(fdr.groundspeed_kt, t);
export const lat = (t: number): number => at(fdr.lat_deg, t);
export const lon = (t: number): number => at(fdr.lon_deg, t);
export const samples = fdr.alt_press_ft.length;
export const latArr: number[] = fdr.lat_deg;
export const lonArr: number[] = fdr.lon_deg;
export const altArr: number[] = fdr.alt_press_ft;
export const psiArr: number[] = fdr.cabin_press_cpc1_psi;

export const clockText = (t: number): string => {
	const s = T0 + t;
	const p = (n: number) => String(Math.floor(n)).padStart(2, '0');
	return `${p(s / 3600)}:${p((s / 60) % 60)}:${(s % 60).toFixed(1).padStart(4, '0')}`;
};
