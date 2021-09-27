"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIs = require("react-is");

var _RefFindNode = _interopRequireDefault(require("./RefFindNode"));

var _RefForward = _interopRequireDefault(require("./RefForward"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ref(props) {
  const {
    children,
    innerRef
  } = props;

  const child = _react.default.Children.only(children);

  const ElementType = (0, _reactIs.isForwardRef)(child) ? _RefForward.default : _RefFindNode.default;
  return _react.default.createElement(ElementType, {
    innerRef: innerRef
  }, child);
}

Ref.propTypes = {
  children: _propTypes.default.element.isRequired,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
};
Ref.FindNode = _RefFindNode.default;
Ref.Forward = _RefForward.default;
var _default = Ref;
exports.default = _default;