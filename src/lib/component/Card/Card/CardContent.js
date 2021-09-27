import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

export default class CardContent extends PureComponent {
  render() {
    const { className, style, children, extra, rest } = this.props;
    return (
      <div className={classNames('content', className, { extra })} style={style} {...rest}>
        {children}
      </div>
    );
  }
}
