import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { Divider } from '../Divider';
import styles from './checkbox.module.scss';

storiesOf('Components/Checkbox Component', module).add('with kind props', () => {
  class TestCheckbox extends React.Component {
    state = {
      check1: true,
      check2: false,
      check3: false,
      check4: true,
      check5: false,
    };

    handleChange = (field, value) => {
      this.setState({ [field]: value });
    };

    render() {
      return (
        <div>
          <Checkbox checked={this.state.check1} label="Default Checked Checkbox" onChange={this.handleChange.bind(this, 'check1')} />
          <Divider />
          <Checkbox checked={this.state.check2} label="Default Unchecked Checkbox" onChange={this.handleChange.bind(this, 'check2')} />
          <Divider />
          <Checkbox checked disabled label="Disabled checkbox" />
          <Divider />
          <Checkbox
            checked={this.state.check3}
            label="Custom Checkbox with Default Text Label"
            onChange={this.handleChange.bind(this, 'check3')}
            customChecker={<span className={styles.checkDone} />}
            customCheckBoxClassName={styles.customChecker}
          />
          <Divider />
          <Checkbox
            checked={this.state.check4}
            label="Custom Checkbox with Custom Text Label"
            onChange={this.handleChange.bind(this, 'check4')}
            customChecker={<span className={styles.checkDone} />}
            customCheckBoxClassName={styles.customChecker}
            customLabelClassName={styles.customLabel}
          />
          <Divider />
          <div className={styles.customContainer}>
            <Checkbox
              checked={this.state.check5}
              label="Custom Checkbox with Custom Text Label with word wrap on a fix container size"
              onChange={this.handleChange.bind(this, 'check5')}
              customChecker={<span className={styles.checkDone} />}
              customCheckBoxClassName={styles.customChecker}
              customLabelClassName={styles.customLabelLong}
            />
          </div>
          <Divider />
        </div>
      );
    }
  }

  return <TestCheckbox />;
});
