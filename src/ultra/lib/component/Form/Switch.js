import React, { PureComponent } from 'react';
import classNames from '../../etc/classNames';

class Switch extends PureComponent {
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
    const { isChecked, name, label, tooltip, readOnly, onChange } = this.props;
    return (
      <div className="accordium input-field switch" onMouseEnter={() => this.showTooltip()} onMouseLeave={() => this.hideTooltip()}>
        <div className="switch">
          <label>
            {label}
            <input type="checkbox" name={name} checked={isChecked} onChange={onChange} readOnly={!!readOnly} />
            <span className="lever" />
          </label>
        </div>
        {this.props.children}
        {tooltip && <div className={classNames('tooltip-top', { show: this.state.showTooltip })}>{tooltip}</div>}
      </div>
    );
  }
}

export default Switch;
