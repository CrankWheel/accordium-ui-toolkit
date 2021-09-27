import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Menu.module.scss';
import Menu from './Menu';

export default function IconMenu(props) {
  const {
    children,
    className,
    icon,
    iconRipple,
    inverse,
    menuRipple,
    onHide, // eslint-disable-line
    onSelect,
    onShow,
    position,
    selectable,
    selected,
    onClick,
    trigger,
    ...rest
  } = props;

  const [active, setActive] = useState(false);

  const handleButtonClick = useCallback(
    event => {
      setActive(prevActive => {
        return !prevActive;
      });
      if (onClick) onClick(event);
    },
    [onClick]
  );

  const handleMenuHide = useCallback(() => {
    setActive(false);
    if (onHide) onHide();
  }, [onHide]);

  const triggerButton = useMemo(() => {
    return React.cloneElement(trigger, {
      onClick: handleButtonClick,
    });
  }, [handleButtonClick, trigger]);

  return (
    <div {...rest} className={cx(styles.iconMenu, className)}>
      {triggerButton}
      <Menu
        active={!!active}
        onHide={handleMenuHide}
        onSelect={onSelect}
        onShow={onShow}
        position={position}
        ripple={menuRipple}
        selectable={selectable}
        selected={selected}
        setActive={setActive}
      >
        {children}
      </Menu>
    </div>
  );
}

IconMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconRipple: PropTypes.bool,
  inverse: PropTypes.bool,
  menuRipple: PropTypes.bool,
  onClick: PropTypes.func,
  onHide: PropTypes.func,
  onSelect: PropTypes.func,
  onShow: PropTypes.func,
  position: PropTypes.string,
  selectable: PropTypes.bool,
  selected: PropTypes.node,
  trigger: PropTypes.node,
};

IconMenu.defaultProps = {
  className: '',
  iconRipple: true,
  menuRipple: true,
  position: 'auto',
  selectable: false,
};
