import React, { PureComponent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import classNames from '../../etc/classNames';

class TextArea extends PureComponent {
  static defaultProps = {
    className: '',
    name: '',
    tooltip: '',
    resizable: false,
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
    const {
      className,
      name,
      value,
      onChange,
      readOnly,
      label,
      caption,
      tooltip,
      error,
      resizable,
      placeholder,
      rows,
      maxLength,
    } = this.props;
    return (
      <div className={classNames('accordium input-field textarea', className, { error })}>
        {resizable ? (
          <TextareaAutosize
            maxLength={maxLength}
            minRows={rows}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            readOnly={!!readOnly}
          />
        ) : (
          <textarea
            maxLength={maxLength}
            rows={rows}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            readOnly={!!readOnly}
          />
        )}

        <label htmlFor={name} className={classNames('textarea-label', { 'not-empty': value !== '' })}>
          {label}
          {this.renderCaption(caption)}
        </label>
        {tooltip && <div className={classNames('tooltip-top', { show: this.state.showTooltip })}>{tooltip}</div>}
      </div>
    );
  }
}

export default TextArea;
