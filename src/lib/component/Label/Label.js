import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import classNames from '../../etc/classNames';
import Image from '../Image/Image';
import { sizing } from '../../etc/constant';

export default class Label extends Component {
  static defaultProps = {
    size: sizing.MD,
  };

  get avatarSize() {
    const { size } = this.props;
    if (size === sizing.XS) return 'xxxxs';
    else if (size === sizing.SM) return 'xxxs';
    else if (size === sizing.MD) return 'xxs';
    else if (size === sizing.LG) return 'xs';
    else return 'sm';
  }

  render() {
    const { className, style, src, size, title, caption, transparent, circular } = this.props;
    const styling = classNames('accordium label p1', className, {
      'text-2': size === sizing.XS,
      'text-3': size === sizing.SM,
      'text-4': size === sizing.MD,
      'text-5': size === sizing.LG,
      'text-6': size === sizing.XL,
      transparent,
      circular,
    });

    return (
      <div className={styling} style={style}>
        <Image alt="avatar" src={src} avatar size={this.avatarSize} />
        {(title || caption) && (
          <div className="label-description px2">
            {title && <div className="label-title bold">{title}</div>}
            {caption && <div className="label-caption">{caption}</div>}
          </div>
        )}
      </div>
    );
  }
}
