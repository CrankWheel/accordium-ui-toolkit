import React, { Component } from 'react';
import classNames from '../../etc/classNames';
import { sizing } from '../../etc/constant';

export default class SVGIcon extends Component {
  render() {
    const { className, style, size } = this.props;
    const styling = classNames('accordium svg-icon', className, this.color, {
      xs: size === sizing.XS,
      sm: size === sizing.SM,
      md: size === sizing.MD,
      lg: size === sizing.LG,
      xl: size === sizing.XL,
    });
    return (
      <div className={styling} style={style}>
        {this.props.children}
      </div>
    );
  }
}
