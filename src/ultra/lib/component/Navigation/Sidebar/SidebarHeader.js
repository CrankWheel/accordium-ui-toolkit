import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

class SidebarHeader extends PureComponent {
  render() {
    const { className, children } = this.props;
    return <div className={classNames('sidebar-header', className)}>{children}</div>;
  }
}

export default SidebarHeader;
