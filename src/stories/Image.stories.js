/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import sampleImage from './avatar-example.jpg';
import sampleImage2 from './avatar-example2.png';
import Image from '../lib/component/Image/Image';

storiesOf('Image & Avatar', module)
  .add('Size', () => (
    <div>
      <Image alt="size=xxxxs" src={sampleImage} size="xxxxs" />
      <Image alt="size=xxxs" src={sampleImage} size="xxxs" />
      <Image alt="size=xxs" src={sampleImage} size="xxs" />
      <Image alt="size=xs" src={sampleImage} size="xs" />
      <Image alt="size=sm" src={sampleImage} size="sm" />
      <Image alt="size=md" src={sampleImage} size="md" />
      <Image alt="size=lg" src={sampleImage} size="lg" />
      <Image alt="size=xl" src={sampleImage} size="xl" />
      <Image alt="size=xxl" src={sampleImage} size="xxl" />
      <Image alt="size=xxxl" src={sampleImage} size="xxxl" />
      <Image alt="size=xxxxl" src={sampleImage} size="xxxxl" />
    </div>
  ))
  .add('Avatar', () => <Image alt="avatar" src={sampleImage2} avatar />)
  .add('Image Link', () => <Image src={sampleImage} alt="Image Link" as="a" size="md" href="http://accordium.com" target="_blank" />)
  .add('Hidden', () => <Image alt="Hidden" src={sampleImage} size="lg" hidden />)
  .add('Disabled', () => <Image alt="Disabled" src={sampleImage} size="lg" disabled />)
  .add('Fluid', () => <Image alt="Fluid" src={sampleImage} size="lg" fluid />)
  .add('Rounded', () => <Image alt="Rounded" src={sampleImage} size="lg" rounded />)
  .add('Circular', () => <Image alt="Circular" src={sampleImage2} circular />)
  .add('Bordered', () => <Image alt="Bordered" src={sampleImage} size="lg" bordered />)
  .add('Centered', () => <Image alt="Centered" src={sampleImage} size="lg" centered />)
  .add('Vertical Align Setting', () => (
    <div>
      <Image src={sampleImage} size="md" verticalAlign="top" alt="verticalAlign=top" /> <span>Top Aligned</span>
      <div className="py1 mb2" style={{ borderBottom: 'solid 1px #000' }} />
      <Image src={sampleImage} size="md" verticalAlign="middle" alt="verticalAlign=middle" /> <span>Middle Aligned</span>
      <div className="py1 mb2" style={{ borderBottom: 'solid 1px #000' }} />
      <Image src={sampleImage} size="md" verticalAlign="bottom" alt="verticalAlign=bottom" /> <span>Bottom Aligned</span>
    </div>
  ));
