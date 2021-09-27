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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JlZi9SZWYuanMiXSwibmFtZXMiOlsiUmVmIiwicHJvcHMiLCJjaGlsZHJlbiIsImlubmVyUmVmIiwiY2hpbGQiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsIkVsZW1lbnRUeXBlIiwiUmVmRm9yd2FyZCIsIlJlZkZpbmROb2RlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJmdW5jIiwib2JqZWN0IiwiRmluZE5vZGUiLCJGb3J3YXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFNQSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFDbEIsUUFBTTtBQUFFQyxJQUFBQSxRQUFGO0FBQVlDLElBQUFBO0FBQVosTUFBeUJGLEtBQS9COztBQUVBLFFBQU1HLEtBQUssR0FBR0MsZUFBTUMsUUFBTixDQUFlQyxJQUFmLENBQW9CTCxRQUFwQixDQUFkOztBQUNBLFFBQU1NLFdBQVcsR0FBRywyQkFBYUosS0FBYixJQUFzQkssbUJBQXRCLEdBQW1DQyxvQkFBdkQ7QUFFQSxTQUFPLDZCQUFDLFdBQUQ7QUFBYSxJQUFBLFFBQVEsRUFBRVA7QUFBdkIsS0FBa0NDLEtBQWxDLENBQVA7QUFDRDs7QUFFREosR0FBRyxDQUFDVyxTQUFKLEdBQWdCO0FBRWRULEVBQUFBLFFBQVEsRUFBRVUsbUJBQVVDLE9BQVYsQ0FBa0JDLFVBRmQ7QUFTZFgsRUFBQUEsUUFBUSxFQUFFUyxtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUksSUFBWCxFQUFpQkosbUJBQVVLLE1BQTNCLENBQXBCO0FBVEksQ0FBaEI7QUFZQWpCLEdBQUcsQ0FBQ2tCLFFBQUosR0FBZVIsb0JBQWY7QUFDQVYsR0FBRyxDQUFDbUIsT0FBSixHQUFjVixtQkFBZDtlQUVlVCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZvcndhcmRSZWYgfSBmcm9tICdyZWFjdC1pcyc7XG5cbmltcG9ydCBSZWZGaW5kTm9kZSBmcm9tICcuL1JlZkZpbmROb2RlJztcbmltcG9ydCBSZWZGb3J3YXJkIGZyb20gJy4vUmVmRm9yd2FyZCc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZXhwb3NlcyBhIHByb3AgdGhhdCBzdXBwb3J0cyBmdW5jdGlvbmFsIGFuZCBjcmVhdGVSZWYoKSBBUEkgYW5kIHJldHVybnMgdGhlIERPTVxuICogbm9kZSBvZiBib3RoIGZ1bmN0aW9uYWwgYW5kIGNsYXNzIGNvbXBvbmVudCBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gUmVmKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUmVmIH0gPSBwcm9wcztcblxuICBjb25zdCBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICBjb25zdCBFbGVtZW50VHlwZSA9IGlzRm9yd2FyZFJlZihjaGlsZCkgPyBSZWZGb3J3YXJkIDogUmVmRmluZE5vZGU7XG5cbiAgcmV0dXJuIDxFbGVtZW50VHlwZSBpbm5lclJlZj17aW5uZXJSZWZ9PntjaGlsZH08L0VsZW1lbnRUeXBlPjtcbn1cblxuUmVmLnByb3BUeXBlcyA9IHtcbiAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgY2hpbGQgY29tcG9uZW50IHdpbGwgYmUgbW91bnRlZCBvciB1cGRhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gUmVmZXJyZWQgbm9kZS5cbiAgICovXG4gIGlubmVyUmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLFxufTtcblxuUmVmLkZpbmROb2RlID0gUmVmRmluZE5vZGU7XG5SZWYuRm9yd2FyZCA9IFJlZkZvcndhcmQ7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZjtcbiJdfQ==