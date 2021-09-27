import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isValuePresent } from '../../util';
import styles from './input.module.scss';

function Input(props) {
  const {
    children,
    defaultValue,
    disabled,
    error,
    floating,
    hint,
    icon,
    name,
    label: labelText,
    maxLength,
    multiline,
    required,
    role,
    type,
    value,
    onKeyPress,
    rows = 1,
    onChange,
    onLight = false,
    caption,
    ...others
  } = props;
  const inputNode = useRef(null);
  const length = useMemo(() => (maxLength && value ? value.length : 0), [maxLength, value]);
  const labelClassName = useMemo(() => cx(styles.label, { [styles.fixed]: !floating }), [floating]);

  const handleChange = useCallback(
    event => {
      if (onChange && !(multiline && maxLength)) {
        onChange(event);
      } else {
        const valueFromEvent = event.target.value;

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        const haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        // propagate to to store and therefore to the input
        // eslint-disable-next-line no-param-reassign
        event.target.value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;
        if (onChange) onChange(event);
      }
    },
    [maxLength, multiline, onChange]
  );

  const handleKeyPress = useCallback(
    event => {
      // prevent insertion of more characters if we're a multiline input
      // and maxLength exists
      if (multiline && maxLength) {
        // check if smt is selected, in which case the newly added charcter would
        // replace the selected characters, so the length of value doesn't actually
        // increase.
        const isReplacing = event.target.selectionEnd - event.target.selectionStart;

        if (!isReplacing && event.target.value.length === maxLength) {
          event.preventDefault();
          event.stopPropagation();
          return undefined;
        }
      }

      if (onKeyPress) onKeyPress(event);
      return undefined;
    },
    [maxLength, multiline, onKeyPress]
  );

  const handleAutoresize = useCallback(() => {
    const element = inputNode.current;

    if (typeof rows === 'number' && !Number.isNaN(rows)) {
      element.style.height = null;
    } else {
      // compute the height difference between inner height and outer height
      const style = getComputedStyle(element, null);
      const heightOffset =
        style.boxSizing === 'content-box'
          ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom))
          : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

      // resize the input to its content size
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight + heightOffset}px`;
    }
  }, [rows]);

  useEffect(() => {
    if (multiline) {
      window.addEventListener('resize', handleAutoresize);
      handleAutoresize();
    }
    return () => {
      if (multiline) window.removeEventListener('resize', handleAutoresize);
    };
  }, [handleAutoresize, multiline]);

  const className = useMemo(
    () =>
      cx(
        styles.input,
        {
          [styles.disabled]: disabled,
          [styles.errored]: error,
          [styles.hidden]: type === 'hidden',
          [styles.withIcon]: icon,
        },
        // eslint-disable-next-line react/destructuring-assignment
        props.className
      ),
    // eslint-disable-next-line react/destructuring-assignment
    [disabled, error, icon, props.className, type]
  );

  const valuePresent = useMemo(() => isValuePresent(value) || isValuePresent(defaultValue), [defaultValue, value]);

  const inputElementProps = useMemo(() => {
    const elemProps = {
      ...others,
      className: cx(styles.inputElement, { [styles.filled]: valuePresent }),
      onChange: handleChange,
      ref: inputNode,
      role,
      name,
      defaultValue,
      disabled,
      required,
      type,
      value,
    };
    if (!multiline) {
      elemProps.maxLength = maxLength;
      elemProps.onKeyPress = onKeyPress;
    } else {
      elemProps.rows = rows;
      elemProps.onKeyPress = handleKeyPress;
    }
    return elemProps;
  }, [
    defaultValue,
    disabled,
    handleChange,
    handleKeyPress,
    maxLength,
    multiline,
    name,
    onKeyPress,
    others,
    required,
    role,
    rows,
    type,
    value,
    valuePresent,
  ]);

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

  return (
    <div className={cx(className, { [styles.onLight]: onLight })}>
      {React.createElement(multiline ? 'textarea' : 'input', inputElementProps)}
      {!!injectedIcon && injectedIcon}
      <span className={styles.bar} />
      {labelText ? (
        <label className={labelClassName}>
          {labelText}
          {required ? <span className={styles.required}> * </span> : null}
        </label>
      ) : null}
      {hint ? (
        <span hidden={labelText} className={styles.hint}>
          {hint}
        </span>
      ) : null}
      {error ? <span className={styles.error}>{error}</span> : null}
      {maxLength ? <span className={styles.counter}>{`${length}/${maxLength}`}</span> : null}
      {caption ? <span className={cx(styles.caption, { [styles.noLength]: !maxLength })}>{caption}</span> : null}
      {children}
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  floating: PropTypes.bool,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  required: PropTypes.bool,
  role: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
};

Input.defaultProps = {
  className: '',
  hint: '',
  disabled: false,
  floating: true,
  multiline: false,
  required: false,
  role: 'input',
  type: 'text',
};

export default Input;
