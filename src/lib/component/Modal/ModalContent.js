import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class ModalContent extends Component {
  static defaultProps = { scrolling: false };

  render() {
    const { className, style, children, scrolling } = this.props;
    return (
      <main className={classNames('modal-content', className, { scrolling })} style={style}>
        {children}
      </main>
    );
  }
}
