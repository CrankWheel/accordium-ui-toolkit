/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../lib/component/Label/Label';
import sampleImage2 from './avatar-example2.png';

storiesOf('Label', module)
  .add('Size', () => (
    <Fragment>
      <div className="m1 left" style={{ width: '100%' }}>
        <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" size="xs" />
      </div>
      <div className="m1 left" style={{ width: '100%' }}>
        <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" size="sm" />
      </div>
      <div className="m1 left" style={{ width: '100%' }}>
        <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" size="md" />
      </div>
      <div className="m1 left" style={{ width: '100%' }}>
        <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" size="lg" />
      </div>
      <div className="m1 left" style={{ width: '100%' }}>
        <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" size="xl" />
      </div>
    </Fragment>
  ))
  .add('Circular', () => (
    <Fragment>
      <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" circular size="xs" />
    </Fragment>
  ))
  .add('Transparent', () => (
    <Fragment>
      <Label src={sampleImage2} title="Marco Simic" caption="m.simic@accordium.com" transparent size="sm" />
    </Fragment>
  ));
