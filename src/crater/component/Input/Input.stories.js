import React, { useState, useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import { Divider } from '../Divider';
import { Icon } from '../Iconography';
import SimpleInput from './SimpleInput';

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

storiesOf('Components/Input Component', module)
  .add('with onDark props', () => {
    function InputTest() {
      const nameInput = useFormInput('');
      const phoneInput = useFormInput('');
      const multilineInput = useFormInput('');
      const multilineInputRef = useRef(null);
      const emailInput = useFormInput('');
      const hintInput = useFormInput('');
      const noLabelInput = useFormInput('');
      const errorInput = useFormInput('');
      const disabledInput = useFormInput("I have a value but I'm disabled");

      // to get the value
      // nameInput.value

      return (
        <section>
          <div style={{ background: 'rgb(28, 58, 91)', padding: '20px' }}>
            <Input onDark type="text" label="Name" name="name" {...nameInput} />
            <Divider />
            <Input onDark type="text" name="name" {...noLabelInput} maxLength={16} />
            <Divider />
            <Input onDark type="text" label="Disabled field" disabled />
            <Divider />
            <Input onDark type="text" label="Disabled field with value" {...disabledInput} caption="Mandatory" maxLength={500} disabled />
            <Divider />
            <Input onDark type="text" multiline inputRef={multilineInputRef} label="Multiline" maxLength={20} {...multilineInput} />
            <Divider />
            <Input onDark type="email" label="Email address" icon={<Icon src="account_circle" />} {...emailInput} />
            <Divider />
            <Input onDark type="tel" label="Phone" name="phone" icon={<Icon src="account_circle" />} {...phoneInput} />
            <Divider />
            <Input onDark type="text" label="Required Field" required {...hintInput} icon={<Icon src="account_circle" />} />
            <Divider />
            <Input
              onDark
              type="text"
              label="error"
              error={
                <span>
                  Error!!{' '}
                  <a
                    href="#!"
                    onClick={e => {
                      e.preventDefault();
                      console.log('some help');
                    }}
                  >
                    ?
                  </a>
                </span>
              }
              {...errorInput}
            />
            <Divider />
          </div>
        </section>
      );
    }

    return <InputTest />;
  })
  .add('default', () => {
    function InputTest() {
      const nameInput = useFormInput('');
      const readOnly = useFormInput('For your eyes only');
      const phoneInput = useFormInput('');
      const multilineInput = useFormInput('');
      const multilineInputRef = useRef(null);
      const emailInput = useFormInput('');
      const hintInput = useFormInput('');
      const noLabelInput = useFormInput('test');
      const errorInput = useFormInput('');
      const disabledInput = useFormInput("I have a value but I'm disabled");

      // to get the value
      // nameInput.value

      return (
        <section>
          <div style={{ padding: '20px' }}>
            <Input type="text" label="Name" name="name" {...nameInput} />
            <Input type="text" label="Read-only field" name="name" {...readOnly} readOnly />
            <Input type="text" label="With maxlength" name="name" {...noLabelInput} maxLength={16} />
            <Input type="text" label="Caption and length" name="name" {...noLabelInput} caption="Mandatory" maxLength={500} />
            <Input type="text" label="Caption" name="name" {...noLabelInput} caption="Optional" />
            <Input type="text" label="Disabled field" caption="Mandatory" maxLength={500} disabled />
            <Input type="text" label="Disabled field with value" {...disabledInput} caption="Mandatory" maxLength={500} disabled />
            <Input type="text" multiline inputRef={multilineInputRef} label="Multiline" {...multilineInput} />
            <Input type="email" label="Email address" icon={<Icon src="account_circle" />} {...emailInput} />
            <Input type="tel" label="Phone" name="phone" icon={<Icon src="account_circle" />} {...phoneInput} />
            <Input type="text" label="Required Field" required {...hintInput} icon={<Icon src="account_circle" />} />
            <Input
              type="text"
              label="error"
              error={
                <span>
                  Error!!{' '}
                  <a
                    href="#!"
                    onClick={e => {
                      e.preventDefault();
                      console.log('some help');
                    }}
                  >
                    ?
                  </a>
                </span>
              }
              {...errorInput}
            />
          </div>
        </section>
      );
    }

    return <InputTest />;
  })
  .add('Simple Input', () => {
    function InputTest() {
      const nameInput = useFormInput('');
      const phoneInput = useFormInput('');
      const hintInput = useFormInput('');
      const passwordInput = useFormInput('');
      const sizeInput = useFormInput('');
      const debounceInput = useFormInput('');
      useEffect(() => {
        console.log(debounceInput.value);
      }, [debounceInput.value]);

      // to get the value
      // nameInput.value

      return (
        <section>
          <SimpleInput error caption="optional" placeholder="Text input" type="text" {...nameInput} />
          <br />
          <SimpleInput placeholder="Text input" type="text" {...nameInput} alwaysHighlight />
          <br />
          <SimpleInput placeholder="Password" type="password" {...passwordInput} />
          <br />
          <SimpleInput placeholder="Date" type="date" size="small" {...sizeInput} />
          <br />
          <SimpleInput placeholder="Date" type="date" size="large" {...sizeInput} />
          <br />
          <SimpleInput placeholder="Search" icon={<Icon src="search" />} {...phoneInput} />
          <br />
          <SimpleInput placeholder="Success" icon={<Icon src="check" />} {...hintInput} />
          <br />
          <SimpleInput debounce pill placeholder="Search" icon={<Icon src="search" />} {...debounceInput} />
          <br />
        </section>
      );
    }

    return <InputTest />;
  });
