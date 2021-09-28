"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowJourney = exports.QuickSignJourney = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const QuickSignJourney = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    width: "125",
    height: "82",
    viewBox: "0 0 125 82",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    x1: "1.763%",
    y1: "50%",
    x2: "94.075%",
    y2: "50%",
    id: "linearGradient-1"
  }, _react.default.createElement("stop", {
    stopColor: "#FFF",
    offset: "0%"
  }), _react.default.createElement("stop", {
    stopColor: "#17C0F7",
    offset: "100%"
  })), _react.default.createElement("linearGradient", {
    x1: "-17.489%",
    y1: "2.825%",
    y2: "100%",
    id: "linearGradient-2"
  }, _react.default.createElement("stop", {
    stopColor: "#17C0F7",
    offset: "0%"
  }), _react.default.createElement("stop", {
    stopColor: "#0083B0",
    offset: "100%"
  }))), _react.default.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "Artboard-3",
    transform: "translate(-232 -255)"
  }, _react.default.createElement("g", {
    id: "Group-4",
    transform: "translate(232 236)"
  }, _react.default.createElement("g", {
    id: "Group"
  }, _react.default.createElement("polygon", {
    id: "Rectangle-2",
    fill: "url(#linearGradient-1)",
    opacity: "0.331",
    points: "106.432944 20.0488812 106.432944 27.4282743 13.8723372 24.7575758"
  }), _react.default.createElement("path", {
    d: "M83.6969722,62.1896966 L83.6969722,62.1896966 C83.6969722,64.1395465 82.1163065,65.7202122 80.1664566,65.7202122 C80.1145724,65.7202122 80.0626945,65.7190685 80.0108607,65.7167819 L0,62.1871363 L80.0108508,58.6623862 C81.9589305,58.5765667 83.6077316,60.0862268 83.6935512,62.0343066 C83.6958316,62.0860719 83.6969722,62.1378811 83.6969722,62.1896966 Z",
    id: "Rectangle-2",
    fill: "url(#linearGradient-1)",
    opacity: "0.26"
  }), _react.default.createElement("path", {
    d: "M123.09961,49.3365549 L123.09961,49.3365549 C123.09961,51.294652 121.512259,52.8820033 119.554162,52.8820033 C119.507042,52.8820033 119.459928,52.881064 119.412846,52.8791859 L30.5390039,49.3339947 L119.412838,45.7937203 C121.369491,45.7157774 123.018857,47.2387732 123.0968,49.1954267 C123.098673,49.2424461 123.09961,49.2894982 123.09961,49.3365549 Z",
    id: "Rectangle-2",
    fill: "url(#linearGradient-1)",
    opacity: "0.26"
  }), _react.default.createElement("path", {
    d: "M19.9624319,96.4417413 L93.3920325,92.907105 C94.4263688,92.8573158 95.3052261,93.6554488 95.3550153,94.6897851 C95.3564608,94.7198138 95.3571839,94.749873 95.3571839,94.7799365 L95.3571839,98.2229371 C95.3571839,99.258471 94.5177178,100.097937 93.4821839,100.097937 C93.4516322,100.097937 93.421085,100.09719 93.3905698,100.095698 L19.9624308,96.5036488 C19.9459173,96.5028409 19.9329433,96.4892167 19.9329433,96.4726835 L19.9329433,96.4726835 C19.9329433,96.4561538 19.9459213,96.442536 19.9624319,96.4417413 Z",
    id: "Rectangle-2",
    fill: "url(#linearGradient-1)",
    opacity: "0.427"
  }), _react.default.createElement("path", {
    d: "M96.62042,65.5701505 C96.3605294,65.6267909 96.0918687,65.6564281 95.8178167,65.6564281 L78.1019382,65.6564281 C75.9703702,65.6564281 74.2424242,63.8822661 74.2424242,61.6936869 C74.2424242,60.8585353 74.4994106,60.0446907 74.9767231,59.368432 L101.819327,21.3347682 C103.07008,19.5625871 105.483208,19.1669607 107.209121,20.451167 C108.481356,21.3977258 109.067784,23.0416362 108.691901,24.6079739 L103.724082,45.3106343 C103.971829,45.259386 104.227329,45.232628 104.487788,45.232628 L120.38291,45.232628 C122.514478,45.232628 124.242424,47.0067899 124.242424,49.1953691 C124.242424,49.9062652 124.056177,50.6040451 123.703184,51.2155796 L96.668181,98.0568814 C95.5815146,99.9396666 93.2140096,100.56148 91.3800613,99.4457493 C89.9187112,98.5565805 89.195362,96.7909306 89.598306,95.0965899 L96.6206286,65.5696954 L96.62042,65.5701505 Z",
    id: "Shape",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero"
  }))))));
}.bind(void 0));
exports.QuickSignJourney = QuickSignJourney;
const FlowJourney = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    width: "58",
    height: "80",
    viewBox: "0 0 58 80",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    x1: "-17.489%",
    y1: "2.825%",
    y2: "100%",
    id: "linearGradient-1531"
  }, _react.default.createElement("stop", {
    stopColor: "#17C0F7",
    offset: "0%"
  }), _react.default.createElement("stop", {
    stopColor: "#0083B0",
    offset: "100%"
  }))), _react.default.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "Artboard-3",
    transform: "translate(-591 -257)",
    fillRule: "nonzero"
  }, _react.default.createElement("g", {
    id: "Group-4",
    transform: "translate(590 256)"
  }, _react.default.createElement("g", {
    id: "Group",
    fill: "url(#linearGradient-1531)"
  }, _react.default.createElement("g", {
    id: "globe",
    transform: "translate(.697 .962)"
  }, _react.default.createElement("path", {
    d: "M57.5885707,22.3490101 C57.5885707,15.5275186 52.2944859,10.0024192 45.7582136,10.0024192 C39.2219413,10.0024192 33.9278564,15.5275186 33.9278564,22.3490101 C33.9278564,28.3988397 38.0980573,33.4300754 43.6139614,34.4949689 C43.4956578,37.149486 42.874564,39.1866735 41.7358922,40.6682644 C39.1480015,44.0327104 33.8834926,44.5574405 28.3232247,45.0976039 C24.1530239,45.4988681 19.8349435,45.9309987 16.4337158,47.7058212 C15.9309256,47.9681862 15.4429234,48.2614178 14.999285,48.5855158 L14.999285,24.5713965 C20.3968855,23.4293368 24.4635707,18.4444007 24.4635707,12.4717374 C24.4635707,5.6502459 19.1694859,0.125146472 12.6332136,0.125146472 C6.09694127,0.125146472 0.802856445,5.6502459 0.802856445,12.4717374 C0.802856445,18.4444007 4.86954171,23.4293368 10.2671422,24.5713965 L10.2671422,54.6970783 C4.86954171,55.8391379 0.802856445,60.824074 0.802856445,66.7967374 C0.802856445,73.6182289 6.09694127,79.1433283 12.6332136,79.1433283 C19.1694859,79.1433283 24.4635707,73.6182289 24.4635707,66.7967374 C24.4635707,61.1018723 20.7813721,56.3175683 15.7534703,54.8822772 C16.4928676,53.4006862 17.5723877,52.6290243 18.5631801,52.1042942 C21.1510707,50.7461692 24.8480573,50.3757715 28.7520752,49.9899405 C35.0517404,49.372611 41.5732247,48.7398482 45.4180908,43.7394789 C47.2517962,41.3473269 48.2278006,38.2606791 48.3461042,34.371503 C53.640189,33.1522772 57.5885707,28.229074 57.5885707,22.3490101 Z M5.5349993,12.4717374 C5.5349993,8.38192914 8.71440778,5.06378284 12.6332136,5.06378284 C16.5520194,5.06378284 19.7314279,8.38192914 19.7314279,12.4717374 C19.7314279,16.5615456 16.5520194,19.8796919 12.6332136,19.8796919 C8.71440778,19.8796919 5.5349993,16.5615456 5.5349993,12.4717374 Z M47.5031913,29.5254661 L45.7582136,29.7569647 C41.8394078,29.7569647 38.6599993,26.4388183 38.6599993,22.3490101 C38.6599993,18.2592019 41.8394078,14.9410556 45.7582136,14.9410556 C49.6770194,14.9410556 52.8564279,18.2592019 52.8564279,22.3490101 C52.8564279,25.8060556 50.5790841,28.7075044 47.5031913,29.5254661 Z",
    id: "Shape"
  }))), _react.default.createElement("path", {
    d: "M18.5318962,64.2293233 C18.8247894,63.9364301 19.2996632,63.9364301 19.5925564,64.2293233 C19.8854496,64.5222165 19.8854496,64.9970902 19.5925564,65.2899834 L11.6842321,73.1983078 C11.3913388,73.491201 10.9164651,73.491201 10.6235719,73.1983078 L6.7974528,69.3721887 C6.50455958,69.0792955 6.50455958,68.6044217 6.7974528,68.3115285 C7.09034602,68.0186353 7.56521975,68.0186353 7.85811297,68.3115285 L11.153902,71.6073175 L18.5318962,64.2293233 Z",
    id: "Path-5",
    fill: "#FFF"
  })))));
}.bind(void 0));
exports.FlowJourney = FlowJourney;