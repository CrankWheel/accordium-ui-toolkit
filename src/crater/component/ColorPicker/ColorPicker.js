import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uniqueid from 'lodash.uniqueid';
import { Input } from '../Input';
import { mergeProps } from '../../util/helpers';
import styles from './colorpicker.module.scss';

const INPUT_PATTERN = '#[0-9A-Fa-f]{6}$';
const HEX_PATTERN = /#[0-9A-Fa-f]{6}/;
const DEFAULT_COLOR = '#000000';

const ColorPicker = props => {
  const {
    id,
    className,
    labelClassName,
    inputClassName,
    colorPickerWrapperClassName,
    colorPickerClassName,
    value,
    label,
    inputPicker = false,
    onChange,
    ...restOfProps
  } = props;
  const pickerId = id || uniqueid('colorpicker');

  const inputProps = mergeProps(restOfProps, {
    id: pickerId,
    type: 'color',
    value,
    onChange,
  });

  const handleBlur = event => {
    // verify if valid hex, otherwise set default to #000000 as per color picker standard behaviour
    if (!HEX_PATTERN.test(event.target.value)) {
      onChange({ target: { value: DEFAULT_COLOR } });
    }
  };

  return (
    <div className={cx(styles.colorPicker, { [styles.withInput]: inputPicker }, className)}>
      {inputPicker ? (
        <Input
          className={cx(styles.inputPicker, inputClassName)}
          label={label}
          value={value}
          pattern={INPUT_PATTERN}
          maxLength={7}
          onBlur={handleBlur}
          onChange={onChange}
          {...restOfProps}
        />
      ) : (
        <label className={labelClassName} htmlFor={pickerId}>
          {label}
        </label>
      )}
      <div className={cx(styles.colorPickerInputWrapper, { [styles.overlayedColorPicker]: inputPicker }, colorPickerWrapperClassName)}>
        <input className={colorPickerClassName} {...inputProps} />
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  inputPicker: PropTypes.bool,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  colorPickerWrapperClassName: PropTypes.string,
  colorPickerClassName: PropTypes.string,
};

export default ColorPicker;
