import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class ModalHeader extends Component {
  render() {
    const { className, style } = this.props;
    return (
      <header className={classNames('modal-header', className)} style={style}>
        {this.props.children}
      </header>
    );
  }
}
