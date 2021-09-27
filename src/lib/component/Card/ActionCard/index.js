import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

export default class ActionCard extends PureComponent {
  render() {
    const { className, style, onClick, thumbnail, title, caption } = this.props;

    return (
      <div
        role="button"
        className={classNames('clearfix accordium card action-card p1', className)}
        style={style}
        onClick={onClick}
        tabIndex={0}
      >
        <div className="card-thumbnail">{thumbnail}</div>
        <div className="card-description">
          {title && <div className="card-title">{title}</div>}
          {caption && <div className="card-caption">{caption}</div>}
        </div>
      </div>
    );
  }
}
