import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import Icon from '../Iconography/Icon';
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

storiesOf('Input Component', module)
  .add('with kind props', () => {
    function InputTest() {
      const nameInput = useFormInput('');
      const phoneInput = useFormInput('');
      const multilineInput = useFormInput('');
      const emailInput = useFormInput('');
      const hintInput = useFormInput('');
      const noLabelInput = useFormInput('');
      const errorInput = useFormInput('');

      // to get the value
      // nameInput.value

      return (
        <section>
          <div style={{ background: 'rgb(28, 58, 91)', padding: '20px' }}>
            <Input type="text" label="Name" name="name" {...nameInput} />
            <Input type="text" hint="With Hint, no label" name="name" {...noLabelInput} maxLength={16} />
            <Input type="text" label="Disabled field" disabled />
            <Input type="text" multiline label="Multiline" maxLength={20} {...multilineInput} />
            <Input type="email" label="Email address" icon={<Icon src="account_circle" />} {...emailInput} />
            <Input type="tel" label="Phone" name="phone" icon={<Icon src="account_circle" />} {...phoneInput} />
            <Input type="text" label="Required Field" hint="With Hint" required {...hintInput} icon={<Icon src="account_circle" />} />
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
  .add('on Light: with kind props', () => {
    function InputTest() {
      const nameInput = useFormInput('');
      const phoneInput = useFormInput('');
      const multilineInput = useFormInput('');
      const emailInput = useFormInput('');
      const hintInput = useFormInput('');
      const noLabelInput = useFormInput('');
      const errorInput = useFormInput('');

      // to get the value
      // nameInput.value

      return (
        <section>
          <div style={{ padding: '20px' }}>
            <Input onLight type="text" label="Name" name="name" {...nameInput} />
            <Input onLight type="text" hint="With Hint, no label" name="name" {...noLabelInput} maxLength={16} />
            <Input onLight type="text" hint="With Hint, no label" name="name" {...noLabelInput} caption="mandatory" maxLength={500} />
            <Input onLight type="text" hint="With Hint, no label" name="name" {...noLabelInput} caption="mandatory" />
            <Input onLight type="text" label="Disabled field" disabled />
            <Input onLight type="text" multiline label="Multiline" {...multilineInput} />
            <Input onLight type="email" label="Email address" icon={<Icon src="account_circle" />} {...emailInput} />
            <Input onLight type="tel" label="Phone" name="phone" icon={<Icon src="account_circle" />} {...phoneInput} />
            <Input
              onLight
              type="text"
              label="Required Field"
              hint="With Hint"
              required
              {...hintInput}
              icon={<Icon src="account_circle" />}
            />
            <Input
              onLight
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
      useEffect(() => {}, [debounceInput.value]);

      // to get the value
      // nameInput.value

      return (
        <section>
          <SimpleInput placeholder="Text input" type="text" {...nameInput} />
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
