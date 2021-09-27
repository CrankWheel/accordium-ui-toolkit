import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import DropDownMenu from './DropDownMenu';
import DropDownItem from './DropDownItem';
import { Icon } from '../Iconography';
import { Button } from '../Button';

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight',
};

storiesOf('Components/Drop Down Component', module).add('default', () => {
  function DropDownTest() {
    const [selected, onSelect] = useState('--Select Sort--');
    return (
      <div style={{ width: '150px' }}>
        <DropDownMenu
          trigger={
            <Button onDark icon={<Icon src="angel_down" />} iconPosition="right" aria-label="options" fullWidth small>
              {selected}
            </Button>
          }
          position={POSITION.BOTTOM_LEFT}
          onSelect={onSelect}
        >
          <DropDownItem value="Most Played" caption="Most Played" />
          <DropDownItem value="Most Clicks" caption="Most Clicks" />
          <DropDownItem value="Latest Videos" caption="Latest Videos" />
          <DropDownItem value="Oldest Videos" caption="Oldest Videos" />
        </DropDownMenu>
      </div>
    );
  }
  return <DropDownTest />;
});
