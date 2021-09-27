import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from './Divider';
import InverseDivider from './InverseDivider';

storiesOf('Divider Component', module)
  .add('with default props', () => (
    <div>
      <Divider />
      Content
      <Divider size="large" />
    </div>
  ))
  .add('Inverted', () => (
    <div>
      <InverseDivider />
      Content
      <InverseDivider size="large" />
    </div>
  ));
