"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function pad(string) {
  return `0${string}`.slice(-2);
}

function format(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());

  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }

  return `${mm}:${ss}`;
}

const Duration = function Duration({
  className,
  seconds
}) {
  _newArrowCheck(this, _this);

  return _react.default.createElement("time", {
    dateTime: `P${Math.round(seconds)}S`,
    className: className
  }, format(seconds));
}.bind(void 0);

Duration.format = format;
Duration.pad = pad;
var _default = Duration;
exports.default = _default;