import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './KeyValueDisplay.module.scss';

const KeyValueDisplay = ({ className, keyWrapperClassName, valueWrapperClassName, keyText, value, isInline, ...other }) => {
  return (
    <div className={cx(className, styles.KeyValueDisplay, { [styles.inline]: isInline })} {...other}>
      <div className={cx(keyWrapperClassName, { [styles.key]: isInline })}>{keyText}</div>
      <div className={cx(valueWrapperClassName, { [styles.value]: !isInline })}>{value}</div>
    </div>
  );
};

KeyValueDisplay.propTypes = {
  className: PropTypes.string,
  keyWrapperClassName: PropTypes.string,
  valueWrapperClassName: PropTypes.string,
  keyText: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  isInline: PropTypes.bool,
};

KeyValueDisplay.defaultProps = {
  className: '',
  keyWrapperClassName: '',
  valueWrapperClassName: '',
  keyText: '',
  value: '',
  isInline: false,
};

export default KeyValueDisplay;
