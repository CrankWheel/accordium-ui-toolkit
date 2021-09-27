import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

class SidebarContent extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={classNames('sidebar-content', className)}>{children}</div>;
  }
}

export default SidebarContent;
