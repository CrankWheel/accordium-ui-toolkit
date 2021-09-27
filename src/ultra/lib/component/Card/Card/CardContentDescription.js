import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

export default class CardContentDescription extends PureComponent {
  render() {
    const { className, style, children, ...rest } = this.props;
    return (
      <div className={classNames('description', className)} style={style} {...rest}>
        {children}
      </div>
    );
  }
}
