import React, { Fragment, useCallback, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import styles from './button.module.scss';
import { camelCase, capitalize } from '../../util';
import spinnerStyles from '../Iconography/spinner.module.scss';
import Icon from '../Iconography/Icon';
import events from '../../util/events';

export default function Button(props) {
  const {
    alt,
    className,
    flat,
    fullWidth,
    icon,
    iconPosition,
    iconOnly,
    kind,
    large,
    onDark,
    small,
    children,
    loading,
    loadingText,
    onMouseDown,
    prime,
    ...others
  } = props;

  const buttonRef = React.useRef();

  if (iconOnly && !others['aria-label'] && process.env.NODE_ENV === 'development') {
    console.error('Icon-only buttons should have an accessible title set via the "aria-label" prop.');
  }
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
    className: cx(className, styles.btn, styles.feedback, styles[`btn${capitalize(kind)}`], {
      [styles.btnAlt]: alt,
      [styles.btnFlat]: flat,
      [styles.btnFull]: fullWidth,
      [styles.btnIconOnly]: iconOnly,
      [styles.btnIconRight]: !!icon && iconPosition === 'right',
      [styles.btnLg]: large,
      [styles.btnOnDark]: onDark,
      [styles.btnSm]: small,
      [styles.prime]: prime,
    }),
    onMouseDown: handleMouseDown,
    ...others,
  };

  const buttonText = Array.isArray(children)
    ? children.filter(child => typeof child === 'string').join(' ')
    : typeof children === 'string'
    ? children.toString()
    : null;

  let btnChildren = children;

  if (buttonText && !iconOnly) {
    btnProps = { 'aria-label': buttonText, ...btnProps };
    btnChildren = <span>{children}</span>;
    if (loading) btnChildren = <span>{loadingText}</span>;
  }

  let injectedIcon = useMemo(() => {
    let tmpInjectedIcon;
    if (icon) {
      const iconSrc = icon.props.src;
      const isSpinner = iconSrc.indexOf('spinner') === 0;
      tmpInjectedIcon = React.cloneElement(icon, {
        className: cx(icon.props.className, styles.iconBtn, {
          [spinnerStyles[`icon${capitalize(camelCase(iconSrc))}Btn`]]: isSpinner,
        }),
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }, [icon]);

  if (loading) {
    let loadingIconStyle = { fontSize: '16px' };
    if (small) loadingIconStyle = { fontSize: '8px' };
    else if (large) loadingIconStyle = { fontSize: '24px' };
    const loadingIcon = <Icon style={loadingIconStyle} src="spinner_md" />;
    const loadingIconSrc = loadingIcon.props.src;
    injectedIcon = React.cloneElement(loadingIcon, {
      className: cx(loadingIcon.props.className, styles.iconBtn),
      externalIconClassName: styles[`icon${capitalize(camelCase(loadingIconSrc))}Btn`],
    });
  }

  const buttonContent = (
    <Fragment>
      {iconPosition === 'right' ? btnChildren : injectedIcon}
      {iconPosition === 'right' ? injectedIcon : btnChildren}
    </Fragment>
  );

  const { href } = props;

  return href ? (
    <a {...btnProps}>
      {buttonContent}
      {rippleData.show && (
        <span
          className={styles.ripple}
          style={{ top: rippleData.top, left: rippleData.left, width: rippleData.width, height: rippleData.width }}
        />
      )}
    </a>
  ) : (
    <button type="button" ref={buttonRef} {...btnProps}>
      {buttonContent}
      {rippleData.show && (
        <span
          className={styles.ripple}
          style={{ top: rippleData.top, left: rippleData.left, width: rippleData.width, height: rippleData.width }}
        />
      )}
    </button>
  );
}
/* handleMouseDown = (event) => {
  if (this.props.onMouseDown) this.props.onMouseDown(event);
  if (this.doRipple()) {
    const { x, y } = events.getMousePosition(event);
    this.animateRipple(x, y, false);
  }
};

handleTouchStart = (event) => {
  if (this.props.onTouchStart) this.props.onTouchStart(event);
  if (this.doRipple()) {
    const { x, y } = events.getTouchPosition(event);
    this.animateRipple(x, y, true);
  }
}; */
Button.propTypes = {
  alt: PropTypes.bool,
  flat: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconOnly: PropTypes.bool,
  kind: PropTypes.oneOf(['default', 'danger', 'primary', 'brand']),
  large: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  onDark: PropTypes.bool,
  small: PropTypes.bool,
};

Button.defaultProps = {
  kind: 'default',
  iconPosition: 'left',
  loading: false,
  loadingText: 'loading',
};
