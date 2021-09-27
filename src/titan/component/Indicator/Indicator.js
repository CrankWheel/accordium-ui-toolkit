import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Indicator.module.scss';

const Indicator = ({ className, small, large, kind, ...other }) => {
  const classes = cx(
    styles.indicator,
    styles[kind],
    {
      [styles.small]: !!small,
      [styles.large]: !!large,
    },
    className
  );

  return <div className={classes} {...other} />;
};

Indicator.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

Indicator.defaultProps = {
  className: '',
  kind: 'primary',
};

export default Indicator;
