import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Check from './Check';
import styles from './checkbox.module.scss';

export default class Checkbox extends Component {
  static propTypes = {
    customCheckBoxClassName: PropTypes.string,
    customChecker: PropTypes.node,
    customLabelClassName: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    theme: PropTypes.shape({
      disabled: PropTypes.string,
      field: PropTypes.string,
      input: PropTypes.string,
      ripple: PropTypes.string,
    }),
  };

  static defaultProps = {
    checked: false,
    className: '',
    disabled: false,
  };

  handleToggle = event => {
    if (event.pageX !== 0 && event.pageY !== 0) this.blur();
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, event);
    }
  };

  blur() {
    if (this.inputNode) {
      this.inputNode.blur();
    }
  }

  focus() {
    if (this.inputNode) {
      this.inputNode.focus();
    }
  }

  render() {
    const {
      checked,
      children,
      disabled,
      label,
      name,
      style,
      onChange, // eslint-disable-line
      onMouseEnter,
      onMouseLeave,
      theme,
      customChecker,
      customCheckBoxClassName,
      customLabelClassName,
      ...others
    } = this.props;
    const className = classnames(
      styles.field,
      {
        [styles.disabled]: this.props.disabled,
      },
      this.props.className
    );

    return (
      <label data-react-toolbox="checkbox" className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <input
          {...others}
          checked={checked}
          className={styles.input}
          disabled={disabled}
          name={name}
          onChange={() => {}}
          onClick={this.handleToggle}
          ref={node => {
            this.inputNode = node;
          }}
          type="checkbox"
        />
        <Check
          customCheckBoxClassName={customCheckBoxClassName}
          customChecker={customChecker}
          checked={checked}
          disabled={disabled}
          rippleClassName={styles.ripple}
          style={style}
          theme={theme}
        />
        {label ? <div className={classnames(styles.text, customLabelClassName)}>{label}</div> : null}
      </label>
    );
  }
}
