import React, { Component } from 'react';
import classNames from '../../etc/classNames';

class Switch extends Component {
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
    const { value, name, label, tooltip, readOnly, onChange, min, max, step, className } = this.props;
    console.log('value:', `${((value - min) / (max - min)) * 100}%`);
    return (
      <div
        className={classNames('accordium input-field range', className, { readOnly })}
        onMouseEnter={() => this.showTooltip()}
        onMouseLeave={() => this.hideTooltip()}
      >
        <label htmlFor={name} className="range-label">
          {label}
        </label>
        <div className="range-wrap mt2">
          <div className="fill" id="range-fill" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
          <input
            className="slider"
            min={min}
            max={max}
            step={step}
            name={name}
            type="range"
            onChange={onChange}
            value={value}
            readOnly={!!readOnly}
          />
        </div>
        {tooltip && <div className={classNames('tooltip-top', { show: this.state.showTooltip })}>{tooltip}</div>}
      </div>
    );
  }
}

export default Switch;
