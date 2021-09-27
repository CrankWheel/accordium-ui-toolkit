import React, { useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './SimpleInput.module.scss';
import DebounceInput from './DebounceInput';

export default function SimpleInput(props) {
  const { size, icon, innerRef, className, debounce, debounceConfig, pill, ...rest } = props;

  const injectedIcon = useMemo(() => {
    let tmpInjectedIcon;
    if (icon) {
      tmpInjectedIcon = React.cloneElement(icon, {
        className: cx(icon.props.className, styles.icon),
      });
      return tmpInjectedIcon;
    } else {
      return icon;
    }
  }, [icon]);

  const input = useMemo(() => {
    const inputProps = {
      ...{
        ...rest,
        ref: innerRef,
        className: cx(className, styles.simpleInput, {
          [styles['input-sm']]: ['sm', 'small'].indexOf(size) !== -1,
          [styles['input-lg']]: ['lg', 'large'].indexOf(size) !== -1,
          [styles.pill]: !!pill,
        }),
      },
    };
    if (debounce) return <DebounceInput {...inputProps} {...debounceConfig} />;
    return <input {...inputProps} />;
  }, [className, debounce, debounceConfig, innerRef, pill, rest, size]);

  if (!icon) return input;

  return (
    <div className={cx(styles.inputIconContainer)}>
      {input}
      {injectedIcon}
    </div>
  );
}

SimpleInput.propTypes = {
  className: PropTypes.string,
  debounce: PropTypes.bool,
  debounceConfig: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  icon: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  pill: PropTypes.bool,
  size: PropTypes.string,
};

SimpleInput.defaultProps = {
  debounce: false,
  debounceConfig: {
    debounceTimeout: 300,
  },
  pill: false,
};
