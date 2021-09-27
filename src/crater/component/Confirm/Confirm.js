import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Confirm.module.scss';

const Confirm = ({ containerClassName, title, content, footer, ...other }) => {
  return (
    <div className={cx(containerClassName, styles.confirmContainer)} {...other}>
      <div className={cx('h4', styles.title)}>{title}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
};

Confirm.propTypes = {
  containerClassName: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
};

Confirm.defaultProps = {
  containerClassName: '',
  title: '',
  content: '',
  footer: '',
};

export default Confirm;
