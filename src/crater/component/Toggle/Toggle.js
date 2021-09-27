import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import cx from 'classnames';
import { mergeProps } from '../../util/helpers';
import styles from './toggle.module.scss';

export default class Toggle extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf(['checkbox']),
  };

  static defaultProps = {
    size: 'medium',
    type: 'checkbox',
  };

  render() {
    const { children, id, size, className, ...others } = this.props;
    const toggleId = id || uniqueid('toggle');

    const inputProps = mergeProps(others, {
      className: styles.toggleSwitch,
      id: toggleId,
      type: 'checkbox',
    });

    return (
      <div className={styles.toggle}>
        <input {...inputProps} />
        <label {...{ htmlFor: toggleId, className: cx(styles[size], className) }}>{children}</label>
      </div>
    );
  }
}
