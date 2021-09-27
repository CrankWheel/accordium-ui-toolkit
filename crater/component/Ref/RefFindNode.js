"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactDom = require("react-dom");

var _handleRef = _interopRequireDefault(require("./handleRef"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JlZi9SZWZGaW5kTm9kZS5qcyJdLCJuYW1lcyI6WyJSZWZGaW5kTm9kZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwiaW5uZXJSZWYiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsV0FBTixTQUEwQkMsZ0JBQTFCLENBQW9DO0FBYWpEQyxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBZSxLQUFLQyxLQUExQjtBQUVBLDRCQUFVRCxRQUFWLEVBQW9CLDJCQUFZLElBQVosQ0FBcEI7QUFDRDs7QUFFREUsRUFBQUEsb0JBQW9CLEdBQUc7QUFDckIsVUFBTTtBQUFFRixNQUFBQTtBQUFGLFFBQWUsS0FBS0MsS0FBMUI7QUFDQSw0QkFBVUQsUUFBVixFQUFvQixJQUFwQjtBQUNEOztBQUVERyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBZSxLQUFLSCxLQUExQjtBQUVBLFdBQU9HLFFBQVA7QUFDRDs7QUE1QmdEOzs7O2dCQUE5QlAsVyxlQUNBO0FBRWpCTyxFQUFBQSxRQUFRLEVBQUVDLG1CQUFVQyxPQUFWLENBQWtCQyxVQUZYO0FBU2pCUCxFQUFBQSxRQUFRLEVBQUVLLG1CQUFVRyxTQUFWLENBQW9CLENBQUNILG1CQUFVSSxJQUFYLEVBQWlCSixtQkFBVUssTUFBM0IsQ0FBcEI7QUFUTyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBoYW5kbGVSZWYgZnJvbSAnLi9oYW5kbGVSZWYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZGaW5kTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgY2hpbGQgY29tcG9uZW50IHdpbGwgYmUgbW91bnRlZCBvciB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFJlZmVycmVkIG5vZGUuXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZmluZC1kb20tbm9kZVxuICAgIGhhbmRsZVJlZihpbm5lclJlZiwgZmluZERPTU5vZGUodGhpcykpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVSZWYoaW5uZXJSZWYsIG51bGwpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdfQ==