import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

class SidebarFooter extends PureComponent {
  render() {
    const { className, children } = this.props;
    return <div className={classNames('sidebar-footer', className)}>{children}</div>;
  }
}

export default SidebarFooter;
