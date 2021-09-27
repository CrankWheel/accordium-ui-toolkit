"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.textAlignment = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const textAlignment = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify'
};
exports.textAlignment = textAlignment;

class Container extends _react.Component {
  render() {
    const {
      className,
      style,
      children,
      textAlign,
      fluid
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('clearfix accordium grid-container', className, {
        'left-align': textAlign === textAlignment.LEFT,
        center: textAlign === textAlignment.CENTER,
        'right-align': textAlign === textAlignment.RIGHT,
        justify: textAlign === textAlignment.JUSTIFY,
        fluid
      }),
      style: style
    }, children);
  }

}

exports.default = Container;

_defineProperty(Container, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  textAlign: _propTypes.default.string,
  fluid: _propTypes.default.bool
});