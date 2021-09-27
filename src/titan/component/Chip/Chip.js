import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Chip.module.scss';
import Avatar from '../Avatar/Avatar';

const Chip = ({ children, className, deletable, onDeleteClick, mini, kind, bold, ...other }) => {
  let hasAvatar = false;
  if (React.Children.count(children)) {
    const flatChildren = React.Children.toArray(children);
    const firstChild = flatChildren[0];
    hasAvatar = firstChild && firstChild.type && firstChild.type === Avatar;
  }

  const classes = cx(
    styles.chip,
    styles[kind],
    {
      [styles.deletable]: !!deletable,
      [styles.avatar]: !!hasAvatar,
      [styles.mini]: !!mini,
      [styles.bold]: !!bold,
    },
    className
  );

  return (
    <div className={classes} {...other}>
      {typeof children === 'string' ? <span>{children}</span> : children}
      {deletable ? (
        <span role="button" tabIndex="0" className={styles.delete} onClick={onDeleteClick}>
          <svg viewBox="0 0 40 40" className={styles.deleteIcon}>
            <path className={styles.deleteX} d="M 12,12 L 28,28 M 28,12 L 12,28" />
          </svg>
        </span>
      ) : null}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  deletable: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

Chip.defaultProps = {
  className: '',
  deletable: false,
};

export default Chip;
