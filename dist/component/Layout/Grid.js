"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Grid extends _react.Component {
  render() {
    const {
      children,
      className,
      xs,
      sm,
      md,
      lg,
      xl,
      style
    } = this.props;
    const styling = (0, _classNames.default)(className, 'col', `col-${xs}`, sm ? `sm-col sm-col-${sm}` : '', md ? `md-col md-col-${md}` : '', lg ? `lg-col lg-col-${lg}` : '', xl ? `lg-col lg-col-${xl}` : '');
    return _react.default.createElement("div", {
      className: styling,
      style: style
    }, children);
  }

}

exports.default = Grid;

_defineProperty(Grid, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  lg: _propTypes.default.number,
  md: _propTypes.default.number,
  sm: _propTypes.default.number,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  xl: _propTypes.default.number,
  xs: _propTypes.default.number
});

_defineProperty(Grid, "defaultProps", {
  xs: 12
});