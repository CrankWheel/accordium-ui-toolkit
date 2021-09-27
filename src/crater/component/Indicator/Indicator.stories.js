import React from 'react';
import { storiesOf } from '@storybook/react';
import Indicator from './Indicator';

storiesOf('Components/Indicator Component', module)
  .add('default', () => (
    <div>
      <Indicator kind="primary" />
      <Indicator kind="brand" />
      <Indicator kind="danger" />
      <Indicator kind="default" />
      <Indicator kind="success" />
    </div>
  ))
  .add('small', () => (
    <div>
      <Indicator small kind="primary" />
      <Indicator small kind="brand" />
      <Indicator small kind="danger" />
      <Indicator small kind="default" />
      <Indicator small kind="success" />
    </div>
  ))
  .add('large', () => (
    <div>
      <Indicator large kind="primary" />
      <Indicator large kind="brand" />
      <Indicator large kind="danger" />
      <Indicator large kind="default" />
      <Indicator large kind="success" />
    </div>
  ));
