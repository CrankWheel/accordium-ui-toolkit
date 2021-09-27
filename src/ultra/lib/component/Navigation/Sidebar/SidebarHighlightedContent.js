import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

class SidebarHighlightedContent extends PureComponent {
  render() {
    const { className, children } = this.props;
    return <div className={classNames('highlighted-content', className)}>{children}</div>;
  }
}

export default SidebarHighlightedContent;
