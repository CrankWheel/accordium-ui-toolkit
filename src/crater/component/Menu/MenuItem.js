import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Menu.module.scss';

export default function MenuItem(props) {
  const { className, caption, children, disabled, icon, selected, shortcut, onClick, ...others } = props;
  const listClassName = cx(
    styles.menuItem,
    {
      [styles.selected]: selected,
      [styles.disabled]: disabled,
    },
    className
  );

  const handleClick = useCallback(
    event => {
      if (onClick && !disabled) {
        onClick(event, this);
      }
    },
    [disabled, onClick]
  );

  const injectedIcon = useMemo(() => {
    let tmpInjectedIcon;
    if (icon) {
      tmpInjectedIcon = React.cloneElement(icon, {
        className: cx(icon.props.className, styles.icon),
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }, [icon]);

  return (
    <li data-react-toolbox="menu-item" className={listClassName} onClick={handleClick} {...others}>
      {injectedIcon}
      <span className={styles.caption}>{caption}</span>
      {shortcut ? <small className={styles.shortcut}>{shortcut}</small> : null}
      {children}
    </li>
  );
}

MenuItem.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  shortcut: PropTypes.string,
};

MenuItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
};
