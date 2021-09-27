/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import SVGIcon from '../lib/component/Iconography/SVGIcon';
import { PlayButtonIcon, VolumeIcon, FullscreenIcon, DownloadIcon, MuteIcon } from '../lib/component/Iconography';

storiesOf('Iconography', module)
  .add('SVG Iconography wrapper', () => (
    <div className="p2">
      <SVGIcon size="xs" className="p1">
        <PlayButtonIcon />
      </SVGIcon>
      <SVGIcon size="sm" className="p1">
        <PlayButtonIcon />
      </SVGIcon>
      <SVGIcon size="md" className="p1">
        <PlayButtonIcon />
      </SVGIcon>
      <SVGIcon size="lg" className="p1">
        <PlayButtonIcon />
      </SVGIcon>
      <SVGIcon size="xl" className="p1">
        <PlayButtonIcon />
      </SVGIcon>
    </div>
  ))
  .add('SVG Icons', () => (
    <div className="p2">
      <span className="inline-block">
        <SVGIcon size="lg" className="m1">
          <PlayButtonIcon />
        </SVGIcon>
      </span>
      <span className="inline-block">
        <SVGIcon size="lg" className="m1">
          <VolumeIcon />
        </SVGIcon>
      </span>
      <span className="inline-block">
        <SVGIcon size="lg" className="m1">
          <FullscreenIcon />
        </SVGIcon>
      </span>
      <span className="inline-block">
        <SVGIcon size="lg" className="m1">
          <DownloadIcon />
        </SVGIcon>
      </span>
      <span className="inline-block">
        <SVGIcon size="lg" className="m1">
          <MuteIcon />
        </SVGIcon>
      </span>
    </div>
  ));
