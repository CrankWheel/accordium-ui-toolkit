/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../lib/component/Form/Switch';

storiesOf('Form/Switch', module).add('Default', () => {
  class Example extends React.Component {
    state = {
      firstSwitch: false,
      secondSwitch: false,
    };

    onChange = event => {
      const target = event.target;
      const value = target.checked;
      console.log(value);
      const name = target.name;
      this.setState({ [name]: value });
    };

    render() {
      return (
        <div style={{ width: '300px', padding: '20px' }}>
          <Switch label="Switch with child elements" name="firstSwitch" onChange={this.onChange} isChecked={this.state.firstSwitch}>
            <div className="text-1">Extra text lorem ipsum after chunk asset optimization</div>
          </Switch>
          <Switch
            label="Switch with child elements"
            name="secondSwitch"
            onChange={this.onChange}
            isChecked={this.state.secondSwitch}
            tooltip="When someone requests a callback from a Proposal, they will be prompted to visit this address after supplying their details."
          />
        </div>
      );
    }
  }
  return <Example />;
});
