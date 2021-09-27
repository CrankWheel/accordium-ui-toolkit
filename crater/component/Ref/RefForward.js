"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _react = require("react");

var _handleRef = _interopRequireDefault(require("./handleRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RefForward extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleRefOverride", function (node) {
      _newArrowCheck(this, _arrowCheckId);

      const {
        children,
        innerRef
      } = _this.props;
      (0, _handleRef.default)(children.ref, node);
      (0, _handleRef.default)(innerRef, node);
    }.bind(_arrowCheckId));
  }

  render() {
    const {
      children
    } = this.props;
    return (0, _react.cloneElement)(children, {
      ref: this.handleRefOverride
    });
  }

}

exports.default = RefForward;

_defineProperty(RefForward, "propTypes", {
  children: PropTypes.element.isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JlZi9SZWZGb3J3YXJkLmpzIl0sIm5hbWVzIjpbIlJlZkZvcndhcmQiLCJDb21wb25lbnQiLCJub2RlIiwiY2hpbGRyZW4iLCJpbm5lclJlZiIsInByb3BzIiwicmVmIiwicmVuZGVyIiwiaGFuZGxlUmVmT3ZlcnJpZGUiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRWUsTUFBTUEsVUFBTixTQUF5QkMsZ0JBQXpCLENBQW1DO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsK0NBYTVCLFVBQUFDLElBQUksRUFBSTtBQUFBOztBQUMxQixZQUFNO0FBQUVDLFFBQUFBLFFBQUY7QUFBWUMsUUFBQUE7QUFBWixVQUF5QixLQUFJLENBQUNDLEtBQXBDO0FBRUEsOEJBQVVGLFFBQVEsQ0FBQ0csR0FBbkIsRUFBd0JKLElBQXhCO0FBQ0EsOEJBQVVFLFFBQVYsRUFBb0JGLElBQXBCO0FBQ0QsS0FsQitDO0FBQUE7O0FBb0JoREssRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFSixNQUFBQTtBQUFGLFFBQWUsS0FBS0UsS0FBMUI7QUFFQSxXQUFPLHlCQUFhRixRQUFiLEVBQXVCO0FBQzVCRyxNQUFBQSxHQUFHLEVBQUUsS0FBS0U7QUFEa0IsS0FBdkIsQ0FBUDtBQUdEOztBQTFCK0M7Ozs7Z0JBQTdCUixVLGVBQ0E7QUFFakJHLEVBQUFBLFFBQVEsRUFBRU0sU0FBUyxDQUFDQyxPQUFWLENBQWtCQyxVQUZYO0FBU2pCUCxFQUFBQSxRQUFRLEVBQUVLLFNBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxTQUFTLENBQUNJLElBQVgsRUFBaUJKLFNBQVMsQ0FBQ0ssTUFBM0IsQ0FBcEI7QUFUTyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGFuZGxlUmVmIGZyb20gJy4vaGFuZGxlUmVmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVmRm9yd2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFByaW1hcnkgY29udGVudC4gKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGEgY2hpbGQgY29tcG9uZW50IHdpbGwgYmUgbW91bnRlZCBvciB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFJlZmVycmVkIG5vZGUuXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIH07XG5cbiAgaGFuZGxlUmVmT3ZlcnJpZGUgPSBub2RlID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGhhbmRsZVJlZihjaGlsZHJlbi5yZWYsIG5vZGUpO1xuICAgIGhhbmRsZVJlZihpbm5lclJlZiwgbm9kZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICByZWY6IHRoaXMuaGFuZGxlUmVmT3ZlcnJpZGUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==