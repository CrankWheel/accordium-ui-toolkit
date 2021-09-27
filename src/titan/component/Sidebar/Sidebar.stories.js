import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../Iconography/Icon';
import Sidebar from './Sidebar';
import ProductSwitch from '../ProductSwitch/ProductSwitch';

const bodyStyle = {
  width: '100%',
  height: '100vh',
};

const products = [
  {
    name: 'Engage',
    active: true,
    icon: <Icon src="exit_to_app" verticalAlign="middle" style={{ fontSize: '24px', color: '#CC9EDE' }} />,
    href: 'https://accordium.com',
  },
  {
    name: 'eSignature',
    active: false,
    icon: <Icon src="exit_to_app" verticalAlign="middle" style={{ fontSize: '24px', color: '#CC9EDE' }} />,
    href: 'https://accordium.com',
  },
];

storiesOf('Sidebar Component', module).add('Controlled Checkbox', () => (
  <div style={bodyStyle}>
    <ProductSwitch products={products} />
    <Sidebar />
  </div>
));
