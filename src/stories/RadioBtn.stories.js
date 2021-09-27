/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioBtn from '../lib/component/Form/RadioBtn';

storiesOf('Form/Radio Button', module).add('Default', () => {
  class Example extends React.Component {
    state = {
      selectedRadio: 'avalue',
    };

    onChange = event => {
      const target = event.target;
      const value = target.value;
      console.log(value);
      const name = target.name;
      this.setState({ [name]: value });
    };

    render() {
      return (
        <div style={{ width: '300px', padding: '20px' }}>
          <RadioBtn
            label="Value A"
            name="selectedRadio"
            value="avalue"
            checked={this.state.selectedRadio === 'avalue'}
            onChange={event => this.onChange(event)}
          />
          <RadioBtn
            label="Value B"
            name="selectedRadio"
            value="bvalue"
            checked={this.state.selectedRadio === 'bvalue'}
            onChange={event => this.onChange(event)}
            tooltip="When someone requests a callback from a Proposal, they will be prompted to visit this address after supplying their details."
          />
        </div>
      );
    }
  }
  return <Example />;
});
