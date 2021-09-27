import React, { PureComponent } from 'react';
import classNames from '../../etc/classNames';

class InputField extends PureComponent {
  static defaultProps = {
    className: '',
    type: 'text',
    name: '',
    tooltip: '',
  };

  state = {
    showTooltip: false,
  };

  showTooltip = () => this.props.tooltip && this.setState({ showTooltip: true });

  hideTooltip = () => this.props.tooltip && this.setState({ showTooltip: false });

  renderCaption = captionText => {
    if (captionText === undefined || captionText === '') return null;
    return <i> {captionText}</i>;
  };

  render() {
    const { className, type, name, value, onChange, readOnly, label, caption, tooltip, error, placeholder } = this.props;
    return (
      <div className={classNames('accordium input-field', className, { error })}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={!!readOnly}
          placeholder={placeholder}
          onFocus={() => this.showTooltip()}
          onBlur={() => this.hideTooltip()}
        />
        <label htmlFor={name} className={classNames({ 'not-empty': value !== '' })}>
          {label}
          {this.renderCaption(caption)}
        </label>
        {tooltip && <div className={classNames('tooltip-top', { show: this.state.showTooltip })}>{tooltip}</div>}
      </div>
    );
  }
}

export default InputField;
