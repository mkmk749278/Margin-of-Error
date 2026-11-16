// node: prints every SFX cue of the film (frames on the film clock) as JSON for scripts/mix_film.py
import {allCues} from './Film';
import {FPS, FILM_FRAMES} from './timing';
console.log(JSON.stringify({fps: FPS, frames: FILM_FRAMES, cues: allCues()}));
