/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import DefaultPlayer from '../lib/component/Video/DefaultPlayer';
import Grid from '../lib/component/Layout/Grid';
import Container from '../lib/component/Layout/Container';
import sampleImage from './avatar-example.jpg';

storiesOf('Video', module)
  .add('Default Player', () => (
    <Container>
      <Grid xs={12} sm={6} md={6} className="p2">
        <DefaultPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" poster={sampleImage} />
      </Grid>
    </Container>
  ))
  .add('Default Player has error', () => (
    <Container>
      <Grid xs={12} sm={6} md={6} className="p2">
        <DefaultPlayer
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          poster={sampleImage}
          error
          errorComponent={<div>error</div>}
        />
      </Grid>
    </Container>
  ));
