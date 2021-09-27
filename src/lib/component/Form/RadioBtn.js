import React, { PureComponent } from 'react';
import classNames from '../../etc/classNames';

class RadioBtn extends PureComponent {
  static defaultProps = {
    className: '',
    name: '',
    tooltip: '',
    readOnly: false,
  };

  state = {
    showTooltip: false,
  };

  showTooltip = () => this.props.tooltip && this.setState({ showTooltip: true });

  hideTooltip = () => this.props.tooltip && this.setState({ showTooltip: false });

  render() {
    const { checked, name, value, label, tooltip, readOnly, onChange } = this.props;
    return (
      <div className="accordium input-field md-radio" onMouseEnter={() => this.showTooltip()} onMouseLeave={() => this.hideTooltip()}>
        <input
          id={`${name}_${value}`}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          readOnly={!!readOnly}
        />
        <label htmlFor={`${name}_${value}`}>{label}</label>
        {this.props.children}
        {tooltip && <div className={classNames('tooltip-top', { show: this.state.showTooltip })}>{tooltip}</div>}
      </div>
    );
  }
}

export default RadioBtn;
