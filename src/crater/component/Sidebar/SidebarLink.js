import React, { useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import styles from './Sidebar.module.scss';
import btnStyles from '../Button/button.module.scss';

function SidebarLink(props) {
  const {
    component,
    className,
    icon,
    iconOnly,
    iconPosition,
    children,
    onMouseDown,
    active,
    showPopover,
    slim,
    onDark,
    ...rest
  } = props;

  const buttonRef = React.useRef();

  const [isHover, setHover] = useState(false);
  const handleMouseEnter = useCallback(() => {
    if (!isHover) setHover(true);
  }, [isHover]);
  const handleMouseLeave = useCallback(() => {
    if (isHover) setHover(false);
  }, [isHover]);

  const [rippleData, setRippleData] = useState({ show: false, top: null, left: null, width: null });
  const handleMouseDown = useCallback(
    event => {
      if (onMouseDown) onMouseDown(event);
      if (!rippleData.show) {
        const { pageX, pageY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        const left = pageX - (rect.left + window.scrollX);
        const top = pageY - (rect.top + window.scrollY);
        setRippleData({
          show: true,
          left,
          top,
          width: `100px`,
        });
      }
    },
    [onMouseDown, rippleData.show]
  );

  useEffect(() => {
    let timer;
    if (rippleData.show) {
      timer = setTimeout(() => {
        setRippleData({ show: false });
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [rippleData.show]);

  let btnProps = {
    className: cx(className, btnStyles.btn, styles.btn, {
      [btnStyles.btnIconRight]: !!icon && iconPosition === 'right',
      [btnStyles.btnIconOnly]: iconOnly,
      [styles.btnIconOnly]: iconOnly,
      [styles.active]: active,
      [styles.slimLink]: slim,
      [styles.onDark]: onDark,
    }),
    onMouseDown: handleMouseDown,
    ...rest,
  };

  // eslint-disable-next-line no-nested-ternary
  const buttonText = Array.isArray(children)
    ? children.filter(child => typeof child === 'string').join(' ')
    : typeof children === 'string'
    ? children.toString()
    : null;

  let btnChildren = children;

  if (buttonText && !iconOnly) {
    btnProps = { 'aria-label': buttonText, ...btnProps };
    btnChildren = <span>{children}</span>;
  }

  if (iconOnly) btnChildren = null;

  let injectedIcon = icon;

  if (icon) {
    injectedIcon = React.cloneElement(icon, {
      className: cx(icon.props.className, btnStyles.iconBtn, styles.iconBtn),
    });
  }

  const buttonContent = (
    <>
      {iconPosition === 'right' ? btnChildren : injectedIcon}
      {iconPosition === 'right' ? injectedIcon : btnChildren}
    </>
  );

  return React.createElement(
    'div',
    {
      className: styles.sidebarLink,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    <Popover
      isOpen={showPopover && isHover}
      position="right" // preferred position
      content={<div className={cx('text5', styles.popoverContainer)}>{buttonText}</div>}
      containerStyle={{ zIndex: 100 }}
    >
      {React.createElement(
        component,
        {
          ref: buttonRef,
          ...btnProps,
        },
        <>
          {buttonContent}
          {rippleData.show && (
            <span
              className={btnStyles.ripple}
              style={{ top: rippleData.top, left: rippleData.left, width: rippleData.width, height: rippleData.width }}
            />
          )}
        </>
      )}
    </Popover>
  );
}

export default SidebarLink;
