import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class CardListItem extends Component {
  render() {
    const { className, style, thumbnail, title, caption, extra } = this.props;
    return (
      <div className={classNames('clearfix accordium card-list item p2', className)} style={style}>
        {thumbnail && <div className="card-list-thumbnail">{thumbnail}</div>}
        {thumbnail && <div className="card-list-separator" />}
        <div className="card-list-item-description">
          {title && <div className="card-list-item-title">{title}</div>}
          {caption && <div className="card-list-item-caption">{caption}</div>}
        </div>
        <div className="card-list-item-extra">{extra}</div>
      </div>
    );
  }
}
