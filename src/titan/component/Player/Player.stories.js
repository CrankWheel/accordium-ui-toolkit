/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import sampleImage from '../../../ultra/stories/avatar-example.jpg';
import Col from '../GridSystem/components/Col';
import Row from '../GridSystem/components/Row';
import Player from './index';

storiesOf('Video', module)
  .add('Default Player', () => (
    <Row>
      <Col xs={12} sm={6} md={6} className="p2">
        <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          poster={sampleImage}
          onVideoStart={() => console.log('onVideoStart Triggered')}
          onTick={state => console.log(state)}
        />
      </Col>
    </Row>
  ))
  .add('Default Player has error', () => (
    <Row>
      <Col xs={12} sm={6} md={6} className="p2">
        <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          poster={sampleImage}
          onVideoStart={() => console.log('onVideoStart Triggered')}
          error
          errorComponent={<div>error</div>}
        />
      </Col>
    </Row>
  ));
