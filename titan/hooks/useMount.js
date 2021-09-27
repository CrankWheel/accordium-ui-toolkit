"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMount;

var _useEffectOnce = _interopRequireDefault(require("./useEffectOnce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function useMount(fn) {
  var _this = this;

  (0, _useEffectOnce.default)(function () {
    _newArrowCheck(this, _this);

    if (fn) fn();
  }.bind(this));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aXRhbi9ob29rcy91c2VNb3VudC5qcyJdLCJuYW1lcyI6WyJ1c2VNb3VudCIsImZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQUE7O0FBQ25DLDhCQUFjLFlBQU07QUFBQTs7QUFDbEIsUUFBSUEsRUFBSixFQUFRQSxFQUFFO0FBQ1gsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnQoZm4pIHtcbiAgdXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgaWYgKGZuKSBmbigpO1xuICB9KTtcbn1cbiJdfQ==