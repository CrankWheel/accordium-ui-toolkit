import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

export default class CardContentCaption extends PureComponent {
  render() {
    const { className, style, children, rest } = this.props;
    return (
      <div className={classNames('caption', className)} style={style} {...rest}>
        {children}
      </div>
    );
  }
}
