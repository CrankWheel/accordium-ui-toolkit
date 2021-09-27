import React, { useContext } from 'react';
import uniqueid from 'lodash.uniqueid';
import { mergeProps } from '../../util/helpers';
import { RadioContext } from './RadioContext';
import styles from './radio-group.module.scss';

export const Radio = props => {
  const { selectedValue, name, handleChange } = useContext(RadioContext);
  const { children, id, className, value, ...others } = props;
  const radioId = id || uniqueid('radio');

  const inputProps = mergeProps(others, {
    className: styles.radioButton,
    id: radioId,
    type: 'radio',
    name,
    value,
  });

  return (
    <div className={styles.radioButtonWrapper}>
      <input {...inputProps} checked={value === selectedValue} onChange={handleChange} />
      <label htmlFor={radioId}>
        <span className={styles.customRadio} />
        <div className={styles.labelContent}>{children}</div>
      </label>
    </div>
  );
};

export default Radio;
