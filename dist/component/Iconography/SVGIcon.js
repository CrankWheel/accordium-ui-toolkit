"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _constant = require("../../etc/constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class SVGIcon extends _react.Component {
  render() {
    const {
      className,
      style,
      size
    } = this.props;
    const styling = (0, _classNames.default)('accordium svg-icon', className, this.color, {
      xs: size === _constant.sizing.XS,
      sm: size === _constant.sizing.SM,
      md: size === _constant.sizing.MD,
      lg: size === _constant.sizing.LG,
      xl: size === _constant.sizing.XL
    });
    return _react.default.createElement("div", {
      className: styling,
      style: style
    }, this.props.children);
  }

}

exports.default = SVGIcon;