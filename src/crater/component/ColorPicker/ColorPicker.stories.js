import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ColorPicker from './ColorPicker';
import { Divider } from '../Divider';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

storiesOf('Components/ColorPicker Component', module)
  .add('simple', () => {
    function TestColorPicker() {
      const buttonColor = useFormInput('#e66465');
      const textColor = useFormInput('#ffffff');

      return (
        <div>
          <ColorPicker label="Button Color" {...buttonColor} />
          <Divider />
          <ColorPicker label="Text Color" {...textColor} />
        </div>
      );
    }

    return <TestColorPicker />;
  })
  .add('with Input', () => {
    function TestColorPicker() {
      const buttonColor = useFormInput('#e66465');
      const textColor = useFormInput('#ffffff');

      return (
        <div>
          <ColorPicker label="Button Color" inputPicker {...buttonColor} />
          <Divider />
          <ColorPicker label="Text Color" inputPicker {...textColor} />
        </div>
      );
    }

    return <TestColorPicker />;
  })
  .add('disabled', () => {
    function TestColorPicker() {
      const buttonColor = useFormInput('#e66465');
      const textColor = useFormInput('#ffffff');

      return (
        <div>
          <ColorPicker label="Button Color" disabled {...buttonColor} />
          <Divider />
          <ColorPicker label="Text Color" disabled {...textColor} />
          <Divider />
          <ColorPicker label="Button Color" disabled inputPicker {...buttonColor} />
          <Divider />
          <ColorPicker label="Text Color" disabled inputPicker {...textColor} />
        </div>
      );
    }

    return <TestColorPicker />;
  });
