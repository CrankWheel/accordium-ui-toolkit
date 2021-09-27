import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './alert.module.scss';
import Icon from '../Iconography/Icon';
import { capitalize } from '../../util';

const Alert = ({ className, message, kind, ...other }) => {
  return (
    <div className={cx(className, styles.alertContainer, styles[`alert${capitalize(kind)}`])} {...other}>
      <div className={cx(styles.icon)}>
        <Icon src={`alert_${kind}`} />
      </div>
      <div className={cx(styles.message)}>{message}</div>
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
  message: '',
};

export default Alert;
