"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const LoadingSpinner = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    className: "spinner",
    width: "14px",
    height: "14px",
    viewBox: "0 0 16 16"
  }, _react.default.createElement("circle", {
    className: "path",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    cx: "8",
    cy: "8",
    r: "7"
  }));
}.bind(void 0));
exports.LoadingSpinner = LoadingSpinner;