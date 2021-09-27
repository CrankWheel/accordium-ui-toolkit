import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './checkbox.module.scss';

const Check = ({ customChecker, checked, theme, customCheckBoxClassName, ...rest }) => {
  if (customChecker) {
    return (
      <div className={cx(customCheckBoxClassName)} {...rest}>
        {checked && customChecker}
      </div>
    );
  }
  return <div className={cx(styles.check, { [styles.checked]: checked })} {...rest} />;
};

Check.propTypes = {
  customCheckBoxClassName: PropTypes.string,
  customChecker: PropTypes.node,
  checked: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.shape({
    check: PropTypes.string,
    checked: PropTypes.string,
  }),
};

export default Check;
