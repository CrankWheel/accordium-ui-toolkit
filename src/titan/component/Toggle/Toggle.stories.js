import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from 'react-highlight';
import Toggle from './Toggle';
import Divider from '../Divider/Divider';

storiesOf('Toggle Component', module)
  .add('Controlled Checkbox', () => {
    function ControlledCheckbox() {
      const [check, setCheck] = useState(false);

      return (
        <div>
          <Toggle checked={check} onChange={() => setCheck(prevCheck => !prevCheck)}>
            Good Toggle
          </Toggle>
          <Highlight className="javascript">{`<Toggle checked={check} onChange={() => setCheck(prevCheck => !prevCheck)}>Controlled Toggle</Toggle>`}</Highlight>
        </div>
      );
    }
    return <ControlledCheckbox />;
  })
  .add('Uncontrolled Checkbox', () => (
    <div>
      <Toggle onChange={() => alert('I have been toggled!')}>Uncontrolled Toggle</Toggle>
      <Highlight className="javascript">{`<Toggle onChange={() => alert('I have been toggled!')}>Uncontrolled Toggle</Toggle>`}</Highlight>
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
      <Highlight className="javascript">{`<Toggle size="small">small Toggle</Toggle>
<Toggle size="medium">medium Toggle</Toggle>
<Toggle size="large">large Toggle</Toggle>`}</Highlight>
    </div>
  ));
