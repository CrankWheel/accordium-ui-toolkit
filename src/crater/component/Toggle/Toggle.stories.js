import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from './Toggle';
import { Divider } from '../Divider';

storiesOf('Components/Toggle Component', module)
  .add('Controlled Checkbox', () => {
    function ControlledCheckbox() {
      const [check, setCheck] = useState(false);

      return (
        <div>
          <Toggle checked={check} onChange={() => setCheck(prevCheck => !prevCheck)}>
            Good Toggle
          </Toggle>
        </div>
      );
    }
    return <ControlledCheckbox />;
  })
  .add('Uncontrolled Checkbox', () => (
    <div>
      <Toggle onChange={() => alert('I have been toggled!')}>Uncontrolled Toggle</Toggle>
    </div>
  ))
  .add('Sizing', () => (
    <div>
      <Toggle size="small">Small Toggle</Toggle>
      <Divider />
      <Toggle size="medium">Medium Toggle</Toggle>
      <Divider />
      <Toggle size="large">Large Toggle</Toggle>
      <Divider />
    </div>
  ));
