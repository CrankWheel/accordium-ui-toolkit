import React from 'react';
import { storiesOf } from '@storybook/react';
import Pulse from './Pulse';
import { Divider } from '../Divider';
import styles from './pulse.module.scss';

const cssStyles = {
  position: 'relative',
  background: '#ffffff',
  height: '100px',
  border: '1px solid #dddddd',
  padding: '15px',
};

storiesOf('Components/Pulse Component', module)
  .add('default', () => {
    function TestPulse() {
      return (
        <div>
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="top" />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="right" />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="bottom" />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="left" />
          </div>
        </div>
      );
    }

    return <TestPulse />;
  })
  .add('error pulses', () => {
    function TestPulse() {
      return (
        <div>
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="top" error />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="right" error />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="bottom" error />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse position="left" error />
          </div>
        </div>
      );
    }

    return <TestPulse />;
  })
  .add('custom position', () => {
    function TestPulse() {
      return (
        <div>
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse className={styles.customPulse} />
          </div>
          <Divider />
          <div style={cssStyles}>
            Lorem ipsum dolor amet venmo lomo 3 wolf moon williamsburg semiotics fam lumbersexual taxidermy tofu green juice fashion
            axe hella humblebrag man bun. Ethical cronut hoodie copper mug swag, selvage food truck poutine retro bushwick viral.
            <Pulse error className={styles.customPulse} />
          </div>
        </div>
      );
    }

    return <TestPulse />;
  });
