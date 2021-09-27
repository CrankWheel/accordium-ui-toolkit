import React, { PureComponent } from 'react';
import CardContent from './CardContent';

export default class CardExtraContent extends PureComponent {
  render() {
    const { className, style, children, rest } = this.props;
    return (
      <CardContent className={className} style={style} extra {...rest}>
        {children}
      </CardContent>
    );
  }
}
