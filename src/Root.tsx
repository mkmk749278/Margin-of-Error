import React from 'react';
import {Composition, Folder} from 'remotion';
import {video} from '../lib/remotion/brand';
import {loadBrandFonts} from '../lib/remotion/fonts';
import {EngineCheck} from './dev/EngineCheck';
import {PlugCheck} from './dev/PlugCheck';
import {FourMissingBolts} from '../films/four-missing-bolts/remotion/Film';
import {FILM_FRAMES} from '../films/four-missing-bolts/remotion/timing';
import {EastPalestine} from '../films/east-palestine/remotion/Film';
import {FILM_FRAMES as EP_FRAMES} from '../films/east-palestine/remotion/timing';

loadBrandFonts();

// Every film registers its compositions here, inside its own <Folder> (PLAYBOOK §10.1).
export const Root: React.FC = () => (
	<>
		<Folder name="FourMissingBolts">
			<Composition id="FourMissingBolts" component={FourMissingBolts} durationInFrames={FILM_FRAMES} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
		<Folder name="EastPalestine">
			<Composition id="EastPalestine" component={EastPalestine} durationInFrames={EP_FRAMES} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
		<Folder name="Dev">
			<Composition id="PlugCheck" component={PlugCheck} durationInFrames={4} fps={video.fps} width={video.width} height={video.height} />
			<Composition id="EngineCheck" component={EngineCheck} durationInFrames={600} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
	</>
);
