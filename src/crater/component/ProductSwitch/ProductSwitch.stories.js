import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductSwitch from './ProductSwitch';
import Icon from '../Iconography/Icon';

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

storiesOf('Components/ProductSwitch Component', module).add('default', () => (
  <div style={bodyStyle}>
    <ProductSwitch products={products} />
  </div>
));
