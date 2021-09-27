import React from 'react';
import { storiesOf } from '@storybook/react';
import IconMenu from './IconMenu';
import MenuDivider from './MenuDivider';
import MenuItem from './MenuItem';
import Icon from '../Iconography/Icon';
import Button from '../Button/Button';

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight',
};

storiesOf('Menu Component', module).add('default', () => (
  <div>
    <IconMenu
      trigger={<Button icon={<Icon src="more_vert" />} iconOnly prime small aria-label="options" />}
      position={POSITION.TOP_LEFT}
    >
      <MenuItem icon={<Icon src="search" />} value="download" caption="Download" />
      <MenuItem icon={<Icon src="search" />} value="help" caption="Favorite" />
      <MenuItem icon={<Icon src="search" />} value="settings" caption="Open in app" />
      <MenuDivider />
      <MenuItem icon={<Icon src="search" />} value="signout" caption="Delete" disabled />
    </IconMenu>
  </div>
));
