import React from 'react';
import {Composition, Folder} from 'remotion';
import {video} from '../lib/remotion/brand';
import {loadBrandFonts} from '../lib/remotion/fonts';
import {EngineCheck} from './dev/EngineCheck';

loadBrandFonts();

// Every film registers its compositions here, inside its own <Folder> (PLAYBOOK §10.1).
export const Root: React.FC = () => (
	<>
		<Folder name="Dev">
			<Composition id="EngineCheck" component={EngineCheck} durationInFrames={600} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
	</>
);
