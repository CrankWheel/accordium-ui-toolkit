"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _Image = _interopRequireDefault(require("../Image/Image"));

var _constant = require("../../etc/constant");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Label extends _react.Component {
  get avatarSize() {
    const {
      size
    } = this.props;
    if (size === _constant.sizing.XS) return 'xxxxs';else if (size === _constant.sizing.SM) return 'xxxs';else if (size === _constant.sizing.MD) return 'xxs';else if (size === _constant.sizing.LG) return 'xs';else return 'sm';
  }

  render() {
    const {
      className,
      style,
      src,
      size,
      title,
      caption,
      transparent,
      circular
    } = this.props;
    const styling = (0, _classNames.default)('accordium label p1', className, {
      'text-2': size === _constant.sizing.XS,
      'text-3': size === _constant.sizing.SM,
      'text-4': size === _constant.sizing.MD,
      'text-5': size === _constant.sizing.LG,
      'text-6': size === _constant.sizing.XL,
      transparent,
      circular
    });
    return _react.default.createElement("div", {
      className: styling,
      style: style
    }, _react.default.createElement(_Image.default, {
      alt: "avatar",
      src: src,
      avatar: true,
      size: this.avatarSize
    }), (title || caption) && _react.default.createElement("div", {
      className: "label-description px2"
    }, title && _react.default.createElement("div", {
      className: "label-title bold"
    }, title), caption && _react.default.createElement("div", {
      className: "label-caption"
    }, caption)));
  }

}

exports.default = Label;

_defineProperty(Label, "defaultProps", {
  size: _constant.sizing.MD
});