import timing from '../vo/timing.json';

// The film's clock (PLAYBOOK §10.4): every scene and every visual event is placed on the recorded narration.
// vo/timing.json comes from scripts/vo_timing.py (sentences and words on the joined takes, no speech recognition)
// and scripts/film_timing.py (the edit holds from script/holds.json and the outro tail).

export const FPS = timing.fps;
export const FILM_FRAMES = timing.durationInFrames;

type Sentence = {id: number; text: string; startFrame: number; endFrame: number};
type Word = {s: number; w: string; startFrame: number; endFrame: number};

const sentences: Sentence[] = timing.sentences;
const words: Word[] = timing.words;

const bySentence = new Map<number, Word[]>();
for (const w of words) {
	const list = bySentence.get(w.s) ?? [];
	// "wrote—and" is one spoken run in the timing; split it so each word can be a cue
	const parts = w.w.split('—').filter(Boolean);
	const step = (w.endFrame - w.startFrame) / parts.length;
	parts.forEach((p, i) => list.push({s: w.s, w: p, startFrame: Math.round(w.startFrame + i * step), endFrame: Math.round(w.startFrame + (i + 1) * step)}));
	bySentence.set(w.s, list);
}

const clean = (w: string): string => w.toLowerCase().replace(/[^a-z0-9']/g, '');

/** Sentence start frame. */
export const sf = (id: number): number => sentences[id].startFrame;
/** Sentence end frame. */
export const ef = (id: number): number => sentences[id].endFrame;
/** Frame of the n-th occurrence (0-based) of `word` in sentence `id`. Throws if absent: a cue never drifts silently. */
export const wf = (id: number, word: string, nth = 0): number => {
	const hits = (bySentence.get(id) ?? []).filter((x) => clean(x.w) === clean(word));
	if (!hits[nth]) throw new Error(`timing: word "${word}" #${nth} not in sentence ${id}: ${sentences[id]?.text}`);
	return hits[nth].startFrame;
};
/** End frame of a word. */
export const wef = (id: number, word: string, nth = 0): number => {
	const hits = (bySentence.get(id) ?? []).filter((x) => clean(x.w) === clean(word));
	if (!hits[nth]) throw new Error(`timing: word "${word}" #${nth} not in sentence ${id}`);
	return hits[nth].endFrame;
};
export const sentenceText = (id: number): string => sentences[id].text;
export const s2f = (s: number): number => Math.round(s * FPS);
export const OPEN_LOOP = timing.openLoop;
