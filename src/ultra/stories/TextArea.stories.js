/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '../lib/component/Form/TextArea';

storiesOf('Form/Text Area', module).add('Default', () => {
  class Example extends React.Component {
    state = {
      message: '',
      message2: '',
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
          <TextArea
            rows={5}
            maxLength={400}
            label="Default Text Area"
            name="message"
            value={this.state.message}
            onChange={event => this.onChange(event)}
          />
          <TextArea
            rows={5}
            label="Resizable Text Area"
            name="message2"
            value={this.state.message2}
            onChange={event => this.onChange(event)}
            resizable
          />
        </div>
      );
    }
  }
  return <Example />;
});
