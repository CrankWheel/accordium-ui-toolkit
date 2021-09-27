import React, { useCallback, useEffect, useMemo } from 'react';
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
    icon,
    name,
    label: labelText,
    maxLength,
    multiline,
    inputRef,
    required,
    role,
    type,
    value,
    onKeyPress,
    rows = 3,
    onChange,
    onDark = false,
    caption,
    ...others
  } = props;
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
    const element = inputRef.current;

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
  }, [inputRef, rows]);

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
      ref: inputRef,
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
    inputRef,
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
    <div className={cx(className, { [styles.onLight]: !onDark })}>
      {multiline ? <textarea {...inputElementProps} /> : <input {...inputElementProps} />}
      {!!injectedIcon && injectedIcon}
      {/* Metadata include label, captions and char length that moves up when the input is focused or has a value */}
      <div className={styles.metadata}>
        {labelText ? (
          <label className={labelClassName}>
            {labelText}
            {required ? <span className={styles.required}> * </span> : null}
          </label>
        ) : (
          <div />
        )}
        <div className={styles.metadataRightContent}>
          {maxLength ? <span className={styles.counter}>{`${length}/${maxLength}`}</span> : null}
          {caption ? <span className={cx(styles.caption, { [styles.noLength]: !maxLength })}>{caption}</span> : null}
        </div>
      </div>
      <span className={cx(styles.error, { [styles.hide]: !error })}>{error || '_'}</span>
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
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  // eslint-disable-next-line consistent-return,react/require-default-props
  inputRef(props, propName) {
    if (props.multiline === true && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Please provide an InputRef function!');
    }
  },
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
  disabled: false,
  floating: true,
  multiline: false,
  required: false,
  role: 'input',
  type: 'text',
};

export default Input;
