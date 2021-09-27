import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Statistic.module.scss';
import token from '../../token/js';

function isValueNumber(number) {
  return typeof number === 'number';
}

function processValue(value, isShowProgress) {
  if (isShowProgress && typeof value === 'number') {
    return `${value}%`;
  }
  return value;
}

function getProgressStyle(value, showProgressBar) {
  if (!showProgressBar) return {};
  if (typeof value !== 'number') return {};
  if (value >= 0 && value < 30) {
    return { width: `${value}%`, background: token.color.DANGER };
  } else if (value >= 30 && value < 70) {
    return { width: `${value}%`, background: token.color.BRAND };
  } else {
    return { width: `${value}%`, background: token.color.PRIMARY };
  }
}

const Statistic = ({ className, value, description, showProgressBar, ...other }) => {
  return (
    <div className={styles.statsCounter} {...other}>
      <div className="text1Bold">{processValue(value, showProgressBar)}</div>
      <div className={cx('text4', styles.counterDescription)}>{description}</div>
      <div className={cx(styles.progressBar, { [styles.hidden]: !showProgressBar || !isValueNumber(value) })}>
        <div className={styles.progress} style={getProgressStyle(value, showProgressBar)} />
      </div>
    </div>
  );
};

Statistic.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  showProgressBar: PropTypes.bool,
};

Statistic.defaultProps = {
  className: '',
  description: '',
  showProgressBar: false,
};

export default Statistic;
