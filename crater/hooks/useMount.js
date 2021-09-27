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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmF0ZXIvaG9va3MvdXNlTW91bnQuanMiXSwibmFtZXMiOlsidXNlTW91bnQiLCJmbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUFBOztBQUNuQyw4QkFBYyxZQUFNO0FBQUE7O0FBQ2xCLFFBQUlBLEVBQUosRUFBUUEsRUFBRTtBQUNYLEdBRkQ7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VFZmZlY3RPbmNlIGZyb20gJy4vdXNlRWZmZWN0T25jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vdW50KGZuKSB7XG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIGlmIChmbikgZm4oKTtcbiAgfSk7XG59XG4iXX0=