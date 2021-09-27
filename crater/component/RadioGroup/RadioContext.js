"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const RadioContext = _react.default.createContext({
  selectedValue: null,
  name: '',
  handleChange: function handleChange() {
    _newArrowCheck(this, _this);
  }.bind(void 0)
});

exports.RadioContext = RadioContext;
var _default = RadioContext;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JhZGlvR3JvdXAvUmFkaW9Db250ZXh0LmpzIl0sIm5hbWVzIjpbIlJhZGlvQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInNlbGVjdGVkVmFsdWUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRU8sTUFBTUEsWUFBWSxHQUFHQyxlQUFNQyxhQUFOLENBQW9CO0FBQzlDQyxFQUFBQSxhQUFhLEVBQUUsSUFEK0I7QUFFOUNDLEVBQUFBLElBQUksRUFBRSxFQUZ3QztBQUc5Q0MsRUFBQUEsWUFBWSxFQUFFLHdCQUFNO0FBQUE7QUFBRSxHQUFWO0FBSGtDLENBQXBCLENBQXJCOzs7ZUFNUUwsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSYWRpb0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgc2VsZWN0ZWRWYWx1ZTogbnVsbCxcbiAgbmFtZTogJycsXG4gIGhhbmRsZUNoYW5nZTogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9Db250ZXh0O1xuIl19