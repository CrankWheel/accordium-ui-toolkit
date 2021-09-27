import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './pulse.module.scss';

const Pulse = props => {
  const { className, show = true, error = false, position = '' } = props;
  return <div className={cx(styles.pulse, className, styles[position], { [styles.show]: show, [styles.error]: error }, className)} />;
};

Pulse.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  error: PropTypes.bool,
};

export default Pulse;
