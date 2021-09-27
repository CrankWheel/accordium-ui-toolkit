"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _constant = require("../../etc/constant");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const imageSize = Object.assign({}, _constant.sizing, {
  XXXXS: 'xxxxs',
  XXXS: 'xxxs',
  XXS: 'xxs',
  XXL: 'xxl',
  XXXL: 'xxxl',
  XXXXL: 'xxxxl'
});
const componentType = {
  IMAGE: 'image',
  ANCHOR_LINK: 'a'
};
const valign = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom'
};

class Image extends _react.Component {
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
      verticalAlign
    } = this.props;
    const styling = (0, _classNames.default)('accordium image', className, {
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
      'bottom aligned': verticalAlign === valign.BOTTOM
    });
    if (as === componentType.IMAGE) return _react.default.createElement("img", {
      src: src,
      className: styling,
      style: style,
      alt: alt
    });
    return _react.default.createElement("a", {
      className: styling,
      style: style,
      href: href,
      target: target
    }, _react.default.createElement("img", {
      src: src,
      alt: alt
    }));
  }

}

exports.default = Image;

_defineProperty(Image, "propTypes", {
  alt: _propTypes.default.string.isRequired,
  as: _propTypes.default.string,
  avatar: _propTypes.default.bool,
  bordered: _propTypes.default.bool,
  centered: _propTypes.default.bool,
  circular: _propTypes.default.bool,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  fluid: _propTypes.default.bool,
  hidden: _propTypes.default.bool,
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  inline: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  size: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  verticalAlign: _propTypes.default.string
});

_defineProperty(Image, "defaultProps", {
  as: componentType.IMAGE,
  disabled: false,
  size: imageSize.MD
});