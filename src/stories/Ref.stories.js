/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Ref from '../lib/component/Ref/Ref';
import Button from '../lib/component/Button';
import Container from '../lib/component/Layout/Container';

storiesOf('Ref', module).add('Default', () => {
  class Example extends React.Component {
    constructor() {
      super();
      this.buttonRef = React.createRef();
      this.state = {
        buttonOneWidth: '',
      };
    }

    componentDidMount() {
      // eslint-disable-next-line no-alert
      console.log('button width: ', this.buttonRef.current);
      this.setState({ buttonOneWidth: `${this.buttonRef.current.offsetWidth}px` });
    }

    render() {
      return (
        <Container>
          We provide ref forwarder to every component in this toolkit by wrapping the component with
          {`
          <Ref>
            <Button>Submit</Button>
          </Ref>`}
          <div>-----------------------------------------------</div>
          <Ref innerRef={this.buttonRef}>
            <Button fixedWidth="100px">Submit</Button>
          </Ref>
          <br />
          button Width: {this.state.buttonOneWidth}
        </Container>
      );
    }
  }
  return <Example />;
});
