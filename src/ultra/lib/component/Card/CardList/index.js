import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class CardList extends Component {
  render() {
    const { className, style } = this.props;
    return (
      <div className={classNames('clearfix accordium card card-list', className)} style={style}>
        {this.props.children}
      </div>
    );
  }
}
