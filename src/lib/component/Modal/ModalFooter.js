import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class ModalFooter extends Component {
  render() {
    const { className, style } = this.props;
    return (
      <footer className={classNames('modal-footer', className)} style={style}>
        {this.props.children}
      </footer>
    );
  }
}
