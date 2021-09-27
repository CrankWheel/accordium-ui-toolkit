import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroup from './RadioGroup';
import { Radio } from './Radio';

storiesOf('Components/RadioGroup Component', module).add('Controlled RadioGroup', () => {
  function ControlledRadio() {
    const [val, setVal] = useState(0);

    const handleChange = e => {
      setVal(parseInt(e.target.value));
    };

    return (
      <div>
        <RadioGroup name="sample_radio" selectedValue={val} handleChange={handleChange}>
          <Radio value={1}>Radio 1</Radio>
          <Radio value={2}>Radio 2</Radio>
          <Radio value={3}>Radio 3</Radio>
        </RadioGroup>
      </div>
    );
  }
  return <ControlledRadio />;
});
