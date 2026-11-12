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
import {ThumbBearing} from '../films/east-palestine/remotion/thumb/ThumbBearing';
import {ThumbPoster} from '../films/east-palestine/remotion/thumb/ThumbPoster';
import {Short, calcShortMetadata, SHORT_W, SHORT_H} from '../lib/remotion/Short';
import type {ShortProps} from '../lib/remotion/Short';
import {Reel, calcReelMetadata, REEL_W, REEL_H} from '../lib/remotion/Reel';
import type {ReelProps} from '../lib/remotion/Reel';
import {ReelMyths} from '../lib/remotion/ReelMyths';

// Shorts render with --props films/<slug>/shorts/<id>.props.json (scripts/shorts_build.py writes them).
const shortDefaults: ShortProps = {id: 'none', clip: 'shorts/none.mp4', duration: 1, chip: '', hook: [], words: [], sentences: [], cover: 0};

// Reels render with --props films/<slug>/reel/reel.props.json (films/<slug>/reel/build_reel.py writes it).
const reelDefaults: ReelProps = {duration: 1, pic: 'reel/none.mp4', mix: 'reel/none.wav', segments: [], words: [], sentences: [], voEnd: 0};

loadBrandFonts();

// Every film registers its compositions here, inside its own <Folder> (PLAYBOOK §10.1).
export const Root: React.FC = () => (
	<>
		<Folder name="FourMissingBolts">
			<Composition id="FourMissingBolts" component={FourMissingBolts} durationInFrames={FILM_FRAMES} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
		<Folder name="EastPalestine">
			<Composition id="EastPalestine" component={EastPalestine} durationInFrames={EP_FRAMES} fps={video.fps} width={video.width} height={video.height} />
			{/* thumbnails D-F (owner's brief 07 NOV 2026): one still each, 1920x1080, downscaled to 1280x720 */}
			<Composition id="EPThumbD" component={ThumbBearing} durationInFrames={1} fps={video.fps} width={video.width} height={video.height} defaultProps={{headline: ['A BILLING', 'RULE'], accent: 'amber' as const}} />
			<Composition id="EPThumbE" component={ThumbBearing} durationInFrames={1} fps={video.fps} width={video.width} height={video.height} defaultProps={{headline: ['WRITTEN', 'FOR', 'BILLING'], accent: 'amber' as const}} />
			<Composition id="EPThumbG" component={ThumbPoster} durationInFrames={1} fps={video.fps} width={video.width} height={video.height} />
			<Composition id="EPThumbF" component={ThumbBearing} durationInFrames={1} fps={video.fps} width={video.width} height={video.height} defaultProps={{headline: ['CREW', 'NOT', 'TOLD'], accent: 'red' as const}} />
		</Folder>
		<Folder name="Shorts">
			<Composition id="Short" component={Short} durationInFrames={60} fps={video.fps} width={SHORT_W} height={SHORT_H} defaultProps={shortDefaults} calculateMetadata={calcShortMetadata} />
		</Folder>
		<Folder name="Reels">
			<Composition id="Reel" component={Reel} durationInFrames={60} fps={video.fps} width={REEL_W} height={REEL_H} defaultProps={reelDefaults} calculateMetadata={calcReelMetadata} />
			<Composition id="ReelMyths" component={ReelMyths} durationInFrames={60} fps={video.fps} width={REEL_W} height={REEL_H} defaultProps={reelDefaults} calculateMetadata={calcReelMetadata} />
		</Folder>
		<Folder name="Dev">
			<Composition id="PlugCheck" component={PlugCheck} durationInFrames={4} fps={video.fps} width={video.width} height={video.height} />
			<Composition id="EngineCheck" component={EngineCheck} durationInFrames={600} fps={video.fps} width={video.width} height={video.height} />
		</Folder>
	</>
);
