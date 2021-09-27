import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './DropDown.module.scss';

export default function DropDownItem(props) {
  const { className, caption, children, disabled, icon, selected, shortcut, onClick, iconPosition, ...others } = props;
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
  }, [icon]);

  const listContent = (
    <>
      {iconPosition === 'right' ? <span className={styles.caption}>{caption}</span> : injectedIcon}
      {iconPosition === 'right' ? injectedIcon : <span className={styles.caption}>{caption}</span>}
    </>
  );

  return (
    <li data-react-toolbox="menu-item" className={listClassName} onClick={handleClick} {...others}>
      {listContent}
      {shortcut ? <small className={styles.shortcut}>{shortcut}</small> : null}
      {children}
    </li>
  );
}

DropDownItem.propTypes = {
  iconPosition: PropTypes.oneOf(['right', 'left']),
  caption: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  shortcut: PropTypes.string,
};

DropDownItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
  iconPosition: 'left',
};
