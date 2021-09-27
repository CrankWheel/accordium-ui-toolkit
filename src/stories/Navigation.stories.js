/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../lib/component/Button';
import Topbar from '../lib/component/Navigation/Topbar/Topbar';
import TopbarContentItem from '../lib/component/Navigation/Topbar/TopbarContentItem';

storiesOf('Navigation', module).add('Topbar', () => (
  <Topbar contentMaxWidth="1024px">
    <TopbarContentItem>
      <div className="ml1">This is icon</div>
    </TopbarContentItem>
    <TopbarContentItem>
      <Button info size="md" className="mr1" onClick={action('button-click')}>
        Save Draft
      </Button>
      <Button positive size="md" className="ml1 mr1" onClick={action('button-click')}>
        Send
      </Button>
    </TopbarContentItem>
  </Topbar>
));
