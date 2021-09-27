/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from '../lib/component/Form/InputField';

storiesOf('Form/Input Field', module).add('Default', () => {
  class Example extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      inputWithTooltip: '',
    };

    onChange = event => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(name, value);
      this.setState({ [name]: value });
    };

    render() {
      return (
        <div style={{ width: '300px', padding: '20px' }}>
          <InputField label="First Name" name="firstName" value={this.state.firstName} onChange={event => this.onChange(event)} />
          <InputField
            label="Input with Error"
            name="lastName"
            value={this.state.lastName}
            onChange={event => this.onChange(event)}
            error
          />
          <InputField
            label="Input with Tooltip"
            name="inputWithTooltip"
            value={this.state.inputWithTooltip}
            onChange={event => this.onChange(event)}
            tooltip="When someone requests a callback from a Proposal, they will be prompted to visit this address after supplying their details."
          />
        </div>
      );
    }
  }
  return <Example />;
});
