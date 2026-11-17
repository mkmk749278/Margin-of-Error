import React from 'react';
import {SfxCue} from '../../../../lib/remotion/sfx';

/** One scene on the film's clock: [from, to) in absolute film frames, its picture and its sound cues. */
export type SceneDef = {id: string; from: number; to: number; C: React.FC; cues?: SfxCue[]};
