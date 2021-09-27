import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

class Sidebar extends Component {
  render() {
    const { className, children } = this.props;
    return <nav className={classNames('accordium sidebar', className)}>{children}</nav>;
  }
}

export default Sidebar;
