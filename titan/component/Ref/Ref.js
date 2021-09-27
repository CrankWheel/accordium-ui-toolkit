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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUmVmL1JlZi5qcyJdLCJuYW1lcyI6WyJSZWYiLCJwcm9wcyIsImNoaWxkcmVuIiwiaW5uZXJSZWYiLCJjaGlsZCIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJvbmx5IiwiRWxlbWVudFR5cGUiLCJSZWZGb3J3YXJkIiwiUmVmRmluZE5vZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJvYmplY3QiLCJGaW5kTm9kZSIsIkZvcndhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQU1BLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNsQixRQUFNO0FBQUVDLElBQUFBLFFBQUY7QUFBWUMsSUFBQUE7QUFBWixNQUF5QkYsS0FBL0I7O0FBRUEsUUFBTUcsS0FBSyxHQUFHQyxlQUFNQyxRQUFOLENBQWVDLElBQWYsQ0FBb0JMLFFBQXBCLENBQWQ7O0FBQ0EsUUFBTU0sV0FBVyxHQUFHLDJCQUFhSixLQUFiLElBQXNCSyxtQkFBdEIsR0FBbUNDLG9CQUF2RDtBQUVBLFNBQU8sNkJBQUMsV0FBRDtBQUFhLElBQUEsUUFBUSxFQUFFUDtBQUF2QixLQUFrQ0MsS0FBbEMsQ0FBUDtBQUNEOztBQUVESixHQUFHLENBQUNXLFNBQUosR0FBZ0I7QUFFZFQsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVUMsT0FBVixDQUFrQkMsVUFGZDtBQVNkWCxFQUFBQSxRQUFRLEVBQUVTLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxJQUFYLEVBQWlCSixtQkFBVUssTUFBM0IsQ0FBcEI7QUFUSSxDQUFoQjtBQVlBakIsR0FBRyxDQUFDa0IsUUFBSixHQUFlUixvQkFBZjtBQUNBVixHQUFHLENBQUNtQixPQUFKLEdBQWNWLG1CQUFkO2VBRWVULEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0LWlzJztcblxuaW1wb3J0IFJlZkZpbmROb2RlIGZyb20gJy4vUmVmRmluZE5vZGUnO1xuaW1wb3J0IFJlZkZvcndhcmQgZnJvbSAnLi9SZWZGb3J3YXJkJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBleHBvc2VzIGEgcHJvcCB0aGF0IHN1cHBvcnRzIGZ1bmN0aW9uYWwgYW5kIGNyZWF0ZVJlZigpIEFQSSBhbmQgcmV0dXJucyB0aGUgRE9NXG4gKiBub2RlIG9mIGJvdGggZnVuY3Rpb25hbCBhbmQgY2xhc3MgY29tcG9uZW50IGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBSZWYocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgaW5uZXJSZWYgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gIGNvbnN0IEVsZW1lbnRUeXBlID0gaXNGb3J3YXJkUmVmKGNoaWxkKSA/IFJlZkZvcndhcmQgOiBSZWZGaW5kTm9kZTtcblxuICByZXR1cm4gPEVsZW1lbnRUeXBlIGlubmVyUmVmPXtpbm5lclJlZn0+e2NoaWxkfTwvRWxlbWVudFR5cGU+O1xufVxuXG5SZWYucHJvcFR5cGVzID0ge1xuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBjb21wb25lbnQgd2lsbCBiZSBtb3VudGVkIG9yIHVwZGF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBSZWZlcnJlZCBub2RlLlxuICAgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG59O1xuXG5SZWYuRmluZE5vZGUgPSBSZWZGaW5kTm9kZTtcblJlZi5Gb3J3YXJkID0gUmVmRm9yd2FyZDtcblxuZXhwb3J0IGRlZmF1bHQgUmVmO1xuIl19