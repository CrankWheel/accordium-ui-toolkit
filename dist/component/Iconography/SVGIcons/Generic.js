"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const SearchIcon = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    className: "search-icon",
    width: "12px",
    height: "12px",
    viewBox: "0 0 12 12"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M8.30769231,5.07692308 C8.30769231,4.1875 7.99158654,3.42668269 7.359375,2.79447115 C6.72716346,2.16225962 5.96634615,1.84615385 5.07692308,1.84615385 C4.1875,1.84615385 3.42668269,2.16225962 2.79447115,2.79447115 C2.16225962,3.42668269 1.84615385,4.1875 1.84615385,5.07692308 C1.84615385,5.96634615 2.16225962,6.72716346 2.79447115,7.359375 C3.42668269,7.99158654 4.1875,8.30769231 5.07692308,8.30769231 C5.96634615,8.30769231 6.72716346,7.99158654 7.359375,7.359375 C7.99158654,6.72716346 8.30769231,5.96634615 8.30769231,5.07692308 Z M12,11.0769231 C12,11.3269231 11.9086538,11.5432692 11.7259615,11.7259615 C11.5432692,11.9086538 11.3269231,12 11.0769231,12 C10.8173077,12 10.6009615,11.9086538 10.4278846,11.7259615 L7.95432692,9.25961538 C7.09375,9.85576923 6.13461538,10.1538462 5.07692308,10.1538462 C4.38942308,10.1538462 3.73197115,10.0204327 3.10456731,9.75360577 C2.47716346,9.48677885 1.93629808,9.12620192 1.48197115,8.671875 C1.02764423,8.21754808 0.667067308,7.67668269 0.400240385,7.04927885 C0.133413462,6.421875 0,5.76442308 0,5.07692308 C0,4.38942308 0.133413462,3.73197115 0.400240385,3.10456731 C0.667067308,2.47716346 1.02764423,1.93629808 1.48197115,1.48197115 C1.93629808,1.02764423 2.47716346,0.667067308 3.10456731,0.400240385 C3.73197115,0.133413462 4.38942308,0 5.07692308,0 C5.76442308,0 6.421875,0.133413462 7.04927885,0.400240385 C7.67668269,0.667067308 8.21754808,1.02764423 8.671875,1.48197115 C9.12620192,1.93629808 9.48677885,2.47716346 9.75360577,3.10456731 C10.0204327,3.73197115 10.1538462,4.38942308 10.1538462,5.07692308 C10.1538462,6.13461538 9.85576923,7.09375 9.25961538,7.95432692 L11.7331731,10.4278846 C11.9110577,10.6057692 12,10.8221154 12,11.0769231 Z",
    fill: "#b1b8c1",
    fillRule: "nonzero"
  })));
}.bind(void 0));
exports.SearchIcon = SearchIcon;