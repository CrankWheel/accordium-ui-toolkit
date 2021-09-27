import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';
import { sizing } from '../../etc/constant';

const imageSize = Object.assign({}, sizing, {
  XXXXS: 'xxxxs',
  XXXS: 'xxxs',
  XXS: 'xxs',
  XXL: 'xxl',
  XXXL: 'xxxl',
  XXXXL: 'xxxxl',
});

const componentType = {
  IMAGE: 'image',
  ANCHOR_LINK: 'a',
};

const valign = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
};

export default class Image extends Component {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    as: PropTypes.string,
    avatar: PropTypes.bool,
    bordered: PropTypes.bool,
    centered: PropTypes.bool,
    circular: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    hidden: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    inline: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    src: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    verticalAlign: PropTypes.string,
  };

  static defaultProps = {
    as: componentType.IMAGE,
    disabled: false,
    size: imageSize.MD,
  };

  render() {
    const {
      as,
      src,
      alt,
      className,
      style,
      size,
      avatar,
      bordered,
      circular,
      centered,
      disabled,
      fluid,
      hidden,
      inline,
      rounded,
      href,
      target,
      verticalAlign,
    } = this.props;
    const styling = classNames('accordium image', className, {
      xxxxs: size === imageSize.XXXXS,
      xxxs: size === imageSize.XXXS,
      xxs: size === imageSize.XXS,
      xs: size === imageSize.XS,
      sm: size === imageSize.SM,
      md: size === imageSize.MD,
      lg: size === imageSize.LG,
      xl: size === imageSize.XL,
      xxl: size === imageSize.XXL,
      xxxl: size === imageSize.XXXL,
      xxxxl: size === imageSize.XXXXL,
      avatar,
      bordered,
      circular,
      centered,
      disabled,
      fluid,
      hidden,
      inline,
      rounded,
      'top aligned': verticalAlign === valign.TOP,
      'middle aligned': verticalAlign === valign.MIDDLE,
      'bottom aligned': verticalAlign === valign.BOTTOM,
    });
    if (as === componentType.IMAGE) return <img src={src} className={styling} style={style} alt={alt} />;
    return (
      <a className={styling} style={style} href={href} target={target}>
        <img src={src} alt={alt} />
      </a>
    );
  }
}
