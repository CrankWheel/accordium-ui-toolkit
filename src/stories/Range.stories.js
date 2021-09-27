/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../lib/component/Form/Switch';
import Range from '../lib/component/Form/Range';

storiesOf('Form/Range', module).add('Default', () => {
  class Example extends React.Component {
    state = {
      min: 0,
      max: 1,
      step: 0.01,
      firstValue: 0.5,
      secondValue: 0.5,
    };

    onChange = event => {
      const target = event.target;
      const value = parseFloat(target.value);
      const name = target.name;
      this.setState({ [name]: value }, () => console.log(this.state.firstValue));
    };

    render() {
      return (
        <div style={{ width: '300px', padding: '20px' }}>
          <Range
            label="Default Range"
            name="firstValue"
            onChange={this.onChange}
            value={this.state.firstValue}
            min={this.state.min}
            max={this.state.max}
            step={this.state.step}
          />
          {/* <Range
            label="Range with Tooltip"
            name="secondValue"
            onChange={this.onChange}
            value={this.state.secondValue}
            tooltip="When someone requests a callback from a Proposal, they will be prompted to visit this address after supplying their details."
            min={this.state.min}
            max={this.state.max}
            step={this.state.step}
          /> */}
        </div>
      );
    }
  }
  return <Example />;
});
