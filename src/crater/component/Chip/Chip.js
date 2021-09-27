import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Chip.module.scss';

const Chip = ({ children, className, mini, large, kind, bold, icon, iconPosition, ...other }) => {
  const injectedIcon = useMemo(() => {
    let tmpInjectedIcon;
    if (icon) {
      if (iconPosition === 'right') {
        tmpInjectedIcon = React.cloneElement(icon, {
          className: cx(icon.props.className, styles.iconRight),
        });
        return tmpInjectedIcon;
      }
      tmpInjectedIcon = React.cloneElement(icon, {
        className: cx(icon.props.className, styles.icon),
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }, [icon, iconPosition]);

  const classes = cx(
    styles.chip,
    styles[kind],
    {
      [styles.mini]: !!mini,
      [styles.large]: !!large,
      [styles.bold]: !!bold,
    },
    className
  );

  const getContent = useMemo(() => {
    if (icon) {
      if (typeof children === 'string') {
        return (
          <>
            {iconPosition === 'right' ? <span>{children}</span> : injectedIcon}
            {iconPosition === 'right' ? injectedIcon : <span>{children}</span>}
          </>
        );
      }
      return (
        <>
          {iconPosition === 'right' ? children : injectedIcon}
          {iconPosition === 'right' ? injectedIcon : children}
        </>
      );
    }
    return typeof children === 'string' ? <span>{children}</span> : children;
  }, [children, icon, iconPosition, injectedIcon]);

  return (
    <div className={classes} {...other}>
      {getContent}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
};

Chip.defaultProps = {
  className: '',
  iconPosition: 'right',
};

export default Chip;
