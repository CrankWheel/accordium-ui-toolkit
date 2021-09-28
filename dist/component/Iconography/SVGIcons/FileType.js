"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveEditorIcon = exports.PDFIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const PDFIcon = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    className: "file-icon",
    width: "71px",
    height: "99px",
    viewBox: "0 0 71 99"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    d: "M52,49.4315972 L52,86.8888889 C52,88.6071081 50.8956357,90 49.5333333,90 L17.4666667,90 C16.1043643,90 15,88.6071081 15,86.8888889 L15,37.1111111 C15,35.3928919 16.1043643,34 17.4666667,34 L42.2183915,34 L52,49.4315972 Z",
    id: "path-1"
  }), _react.default.createElement("filter", {
    x: "-79.7%",
    y: "-67.0%",
    width: "259.5%",
    height: "205.4%",
    filterUnits: "objectBoundingBox",
    id: "filter-2"
  }, _react.default.createElement("feOffset", {
    dx: "0",
    dy: "-8",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), _react.default.createElement("feGaussianBlur", {
    stdDeviation: "8.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), _react.default.createElement("feColorMatrix", {
    values: "0 0 0 0 0.109803922   0 0 0 0 0.184313725   0 0 0 0 0.28627451  0 0 0 0.2 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  }))), _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-184.000000, -50.000000)"
  }, _react.default.createElement("g", {
    transform: "translate(186.000000, 50.000000)"
  }, _react.default.createElement("g", null, _react.default.createElement("g", null, _react.default.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-2)",
    href: "#path-1"
  }), _react.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    href: "#path-1"
  })), _react.default.createElement("path", {
    d: "M69,24.8007813 L69,85 C69,87.7614237 66.9405098,90 64.4,90 L4.6,90 C2.05949015,90 0,87.7614237 0,85 L0,5 C0,2.23857625 2.05949015,0 4.6,0 L50.7586219,0 L69,24.8007813 Z",
    id: "Rectangle-2",
    fill: "#E86A6A"
  }), _react.default.createElement("path", {
    d: "M69,24.8007813 L57.409713,24.9772791 C55.1809162,24.9772791 54.3727006,24.745215 53.5578857,24.3094473 C52.7430709,23.8736796 52.1035995,23.2342081 51.6678318,22.4193933 C51.232064,21.6045785 51,20.7963629 51,18.5675661 L51,0 L69,24.8007813 Z",
    id: "Rectangle-3",
    fill: "#000000",
    opacity: "0.25"
  }), _react.default.createElement("path", {
    d: "M46.9701093,58.9176907 C44.529572,58.9176907 41.4753093,59.3433667 40.4761627,59.493188 C36.340496,55.1746147 35.164016,52.7198147 34.8992827,52.0652013 C35.257952,51.1436507 36.5058467,47.6430147 36.68318,43.1468547 C36.7706383,40.89576 36.2950987,39.2136013 35.2694533,38.1473213 C34.245556,37.0827893 33.0062493,37 32.6507467,37 C31.4046,37 29.3140933,37.6301413 29.3140933,41.8498133 C29.3140933,45.51124 31.0211293,49.3961067 31.4930133,50.4000667 C29.0069267,57.6388133 26.3379333,62.5942667 25.7709733,63.6134267 C15.78128,67.3746667 15,71.0112667 15,72.04208 C15,73.8942507 16.3190813,75 18.5284267,75 C23.89656,75 28.7952667,65.9874133 29.6051733,64.4225733 C33.41784,62.90346 38.5207333,61.9624787 39.8180533,61.738 C43.5390133,65.28264 47.8423867,66.2283333 49.6294,66.2283333 C50.9739667,66.2283333 54.1227733,66.2283333 54.1227733,62.9907333 C54.1228995,59.9844267 50.2695733,58.91764 46.9696533,58.91764 L46.9701093,58.9176907 Z M46.71138,61.0430813 C49.6110333,61.0430813 50.3771133,62.0019733 50.3771133,62.508944 C50.3771133,62.8271053 50.2563367,63.8651387 48.702124,63.8651387 C47.3084613,63.8651387 44.902124,63.059716 42.534724,61.3120453 C43.5220147,61.1823083 44.9829627,61.0431067 46.7111773,61.0431067 L46.71138,61.0430813 Z M32.49862,39.0600813 C32.763024,39.0600813 32.937064,39.1450164 33.080552,39.3440427 C33.9145,40.5012187 33.2420925,44.2822693 32.4236587,47.2412027 C31.6336133,44.7040693 31.040712,40.8113493 31.8749133,39.441576 C32.0379688,39.174284 32.2243613,39.060056 32.49862,39.060056 L32.49862,39.0600813 Z M31.0904413,61.707828 C32.140204,59.5870987 33.3168107,56.4962547 33.957668,54.7482547 C35.2401427,56.8948493 36.964988,58.8879747 37.962868,59.9684413 C34.8564947,60.623308 32.5063213,61.2775667 31.0904413,61.707828 Z M17.0854147,72.325028 C17.0162547,72.2429961 17.0060327,72.0700987 17.0581535,71.862492 C17.1674465,71.427468 18.0026561,69.2711453 24.0435668,66.5688387 C23.1785601,67.9313413 21.8262921,69.878132 20.3408468,71.3325187 C19.2951121,72.311348 18.4808481,72.807704 17.9206268,72.807704 C17.7202148,72.807704 17.4440815,72.7530575 17.0854121,72.325104 L17.0854147,72.325028 Z",
    id: "Shape",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }))))));
}.bind(void 0));
exports.PDFIcon = PDFIcon;
const LiveEditorIcon = (0, _react.memo)(function () {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    className: "acc-icon",
    width: "13px",
    height: "16px",
    viewBox: "0 0 69 90"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", null, _react.default.createElement("g", {
    transform: "translate(15.000000, 34.000000)"
  }, _react.default.createElement("g", {
    fill: "#000000",
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M37,15.4315972 L37,52.8888889 C37,54.6071081 35.8956357,56 34.5333333,56 L2.4666667,56 C1.1043643,56 0,54.6071081 0,52.8888889 L0,3.1111111 C0,1.3928919 1.1043643,0 2.4666667,0 L27.2183915,0 L37,15.4315972 Z"
  })), _react.default.createElement("g", {
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M37,15.4315972 L37,52.8888889 C37,54.6071081 35.8956357,56 34.5333333,56 L2.4666667,56 C1.1043643,56 0,54.6071081 0,52.8888889 L0,3.1111111 C0,1.3928919 1.1043643,0 2.4666667,0 L27.2183915,0 L37,15.4315972 Z"
  }))), _react.default.createElement("path", {
    d: "M69,24.8007813 L69,85 C69,87.7614237 66.9405098,90 64.4,90 L4.6,90 C2.05949015,90 0,87.7614237 0,85 L0,5 C0,2.23857625 2.05949015,0 4.6,0 L50.7586219,0 L69,24.8007813 Z",
    fill: "#17C0F7",
    fillRule: "nonzero"
  }), _react.default.createElement("path", {
    d: "M69,24.8007812 L57.409713,24.9772791 C55.1809162,24.9772791 54.3727006,24.745215 53.5578857,24.3094473 C52.7430709,23.8736796 52.1035995,23.2342081 51.6678318,22.4193933 C51.232064,21.6045785 51,20.7963629 51,18.5675661 L51,0 L69,24.8007812 Z",
    fill: "#000000",
    fillRule: "nonzero",
    opacity: "0.25"
  }), _react.default.createElement("path", {
    d: "M36.8750285,45.3734203 L45.6261673,54.1249314 L26.6234405,73.1284667 L18.821105,73.989809 C17.776601,74.1053382 16.8941045,73.2221206 17.0103125,72.1775721 L17.8784539,64.3694359 L36.8750285,45.3734203 Z M51.0387214,44.0704692 L46.9297466,39.9613195 C45.6480417,38.6795602 43.5692874,38.6795602 42.2875825,39.96131 L38.4219608,43.8271058 L47.1730996,52.5786169 L51.0387214,48.7128307 C52.3204262,47.4303877 52.3204262,45.3522285 51.0387214,44.0704692 Z",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }))));
}.bind(void 0));
exports.LiveEditorIcon = LiveEditorIcon;