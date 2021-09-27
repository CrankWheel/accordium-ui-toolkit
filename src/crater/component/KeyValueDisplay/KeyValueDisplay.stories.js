import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyValueDisplay from './KeyValueDisplay';

storiesOf('Components/KeyValueDisplay Component', module)
  .add('Default', () => (
    <section>
      <KeyValueDisplay
        keyText={<span className="h4">CREATED ON</span>}
        value={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>13th Sep 2019, 10:31pm</span>
            <span>27 days ago</span>
          </div>
        }
      />
    </section>
  ))
  .add('inline', () => (
    <section>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <KeyValueDisplay
          isInline
          keyText={<span style={{ opacity: '0.7', color: '#1A2B4A', fontWeight: '400' }}>Opens</span>}
          value={<span className="text4Bold">112</span>}
        />
        <KeyValueDisplay keyText="Clicks" value="540" isInline />
        <KeyValueDisplay keyText={<span className="h4">Plays</span>} value="40" isInline />
      </div>
    </section>
  ));
