"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactDom = require("react-dom");

var _handleRef = _interopRequireDefault(require("../../etc/handleRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RefFindNode extends _react.Component {
  componentDidMount() {
    const {
      innerRef
    } = this.props;
    (0, _handleRef.default)(innerRef, (0, _reactDom.findDOMNode)(this));
  }

  componentWillUnmount() {
    const {
      innerRef
    } = this.props;
    (0, _handleRef.default)(innerRef, null);
  }

  render() {
    const {
      children
    } = this.props;
    return children;
  }

}

exports.default = RefFindNode;

_defineProperty(RefFindNode, "propTypes", {
  children: _propTypes.default.element.isRequired,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
});