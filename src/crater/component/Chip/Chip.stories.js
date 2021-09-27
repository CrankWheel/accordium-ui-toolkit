import React from 'react';
import Chip from './Chip';
import { Icon } from '../Iconography';

export default {
  component: [Chip],
  title: 'Components/Chip Component',
};

export const ChipDefault = () => (
  <div>
    <Chip kind="primary">CALLBACK</Chip>
    <Chip kind="brand" icon={<Icon src="lightning" />}>
      Best performing
    </Chip>
    <Chip kind="danger" icon={<Icon src="lightning" />} iconPosition="left">
      Best performing
    </Chip>
    <Chip kind="default">CALLBACK</Chip>
    <Chip kind="success">CALLBACK</Chip>
    <Chip kind="bland" large bold>
      N/A
    </Chip>
  </div>
);
