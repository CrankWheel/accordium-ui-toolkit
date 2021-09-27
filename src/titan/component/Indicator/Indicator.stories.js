import React from 'react';
import { storiesOf } from '@storybook/react';
import Indicator from './Indicator';

storiesOf('Indicator Component', module)
  .add('color', () => (
    <div>
      <Indicator kind="primary" />
      <Indicator kind="brand" />
      <Indicator kind="danger" />
      <Indicator kind="default" />
      <Indicator kind="accent1" />
      <Indicator kind="accent2" />
      <Indicator kind="accent3" />
    </div>
  ))
  .add('small', () => (
    <div>
      <Indicator small kind="primary" />
      <Indicator small kind="brand" />
      <Indicator small kind="danger" />
      <Indicator small kind="default" />
      <Indicator small kind="accent1" />
      <Indicator small kind="accent2" />
      <Indicator small kind="accent3" />
    </div>
  ))
  .add('large', () => (
    <div>
      <Indicator large kind="primary" />
      <Indicator large kind="brand" />
      <Indicator large kind="danger" />
      <Indicator large kind="default" />
      <Indicator large kind="accent1" />
      <Indicator large kind="accent2" />
      <Indicator large kind="accent3" />
    </div>
  ));
