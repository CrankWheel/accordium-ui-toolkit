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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUmVmL1JlZkZvcndhcmQuanMiXSwibmFtZXMiOlsiUmVmRm9yd2FyZCIsIkNvbXBvbmVudCIsIm5vZGUiLCJjaGlsZHJlbiIsImlubmVyUmVmIiwicHJvcHMiLCJyZWYiLCJyZW5kZXIiLCJoYW5kbGVSZWZPdmVycmlkZSIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxnQkFBekIsQ0FBbUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSwrQ0FhNUIsVUFBQUMsSUFBSSxFQUFJO0FBQUE7O0FBQzFCLFlBQU07QUFBRUMsUUFBQUEsUUFBRjtBQUFZQyxRQUFBQTtBQUFaLFVBQXlCLEtBQUksQ0FBQ0MsS0FBcEM7QUFFQSw4QkFBVUYsUUFBUSxDQUFDRyxHQUFuQixFQUF3QkosSUFBeEI7QUFDQSw4QkFBVUUsUUFBVixFQUFvQkYsSUFBcEI7QUFDRCxLQWxCK0M7QUFBQTs7QUFvQmhESyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVKLE1BQUFBO0FBQUYsUUFBZSxLQUFLRSxLQUExQjtBQUVBLFdBQU8seUJBQWFGLFFBQWIsRUFBdUI7QUFDNUJHLE1BQUFBLEdBQUcsRUFBRSxLQUFLRTtBQURrQixLQUF2QixDQUFQO0FBR0Q7O0FBMUIrQzs7OztnQkFBN0JSLFUsZUFDQTtBQUVqQkcsRUFBQUEsUUFBUSxFQUFFTSxTQUFTLENBQUNDLE9BQVYsQ0FBa0JDLFVBRlg7QUFTakJQLEVBQUFBLFFBQVEsRUFBRUssU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksSUFBWCxFQUFpQkosU0FBUyxDQUFDSyxNQUEzQixDQUFwQjtBQVRPLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBoYW5kbGVSZWYgZnJvbSAnLi9oYW5kbGVSZWYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZGb3J3YXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBjb21wb25lbnQgd2lsbCBiZSBtb3VudGVkIG9yIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gUmVmZXJyZWQgbm9kZS5cbiAgICAgKi9cbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgfTtcblxuICBoYW5kbGVSZWZPdmVycmlkZSA9IG5vZGUgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUmVmIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaGFuZGxlUmVmKGNoaWxkcmVuLnJlZiwgbm9kZSk7XG4gICAgaGFuZGxlUmVmKGlubmVyUmVmLCBub2RlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZPdmVycmlkZSxcbiAgICB9KTtcbiAgfVxufVxuIl19