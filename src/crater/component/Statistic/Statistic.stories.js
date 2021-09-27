import React from 'react';
import { storiesOf } from '@storybook/react';
import Statistic from './Statistic';
import Indicator from '../Indicator/Indicator';

storiesOf('Components/Statistic Component', module).add('Counters', () => (
  <section>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Statistic value={29} description={<span>Avg. Play Rate</span>} showProgressBar />
      <Statistic
        value="70%"
        description={
          <>
            <span style={{ marginRight: '5px' }}>Total Plays</span>
            <Indicator kind="primary" />
          </>
        }
      />
      <Statistic value={688} description={<span style={{ marginRight: '5px' }}>Total Plays</span>} />
      <Statistic value="2402 People" description="Total Plays" showProgressBar />
      <Statistic value="32.8" description="Total Plays" />
    </div>
  </section>
));
