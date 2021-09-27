import React, { PureComponent } from 'react';
import classNames from '../../../etc/classNames';

export default class Card extends PureComponent {
  render() {
    const { className, style, children, tabIndex, onClick } = this.props;
    const additionalProps = {};
    if (onClick) {
      additionalProps.onClick = onClick;
      additionalProps.role = 'button';
      additionalProps.onKeyDown = event => {
        if (event.keyCode === 13) {
          onClick();
        }
      };
    }
    return (
      <div className={classNames('accordium card', className)} style={style} tabIndex={tabIndex} {...additionalProps}>
        {children}
      </div>
    );
  }
}
