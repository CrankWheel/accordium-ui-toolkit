"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoundedPlayIcon = exports.PauseIcon = exports.MuteIcon = exports.DownloadIcon = exports.FullscreenIcon = exports.VolumeIcon = exports.PlayButtonIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const PlayButtonIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_69",
    "data-name": "Group 69",
    transform: "translate(-9208 -7051)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_49",
    "data-name": "Rectangle 49",
    width: "100%",
    height: "100%",
    transform: "translate(9208 7051)",
    fill: "none"
  }), _react.default.createElement("path", {
    id: "play",
    d: "M13.262,6.74l-11-6.5A1.492,1.492,0,0,0,0,1.528v13a1.5,1.5,0,0,0,2.262,1.291l11-6.5A1.5,1.5,0,0,0,13.262,6.74Z",
    transform: "translate(9217 7058.968)",
    fill: "#fff"
  })));
}.bind(void 0));
exports.PlayButtonIcon = PlayButtonIcon;
const VolumeIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_70",
    "data-name": "Group 70",
    transform: "translate(-9246 -7051)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_50",
    "data-name": "Rectangle 50",
    width: "100%",
    height: "100%",
    transform: "translate(9246 7051)",
    fill: "none"
  }), _react.default.createElement("path", {
    id: "audio",
    d: "M8.063,18.06,4.727,21.4H.9a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,0,.9.9H4.727L8.063,31.93A.9.9,0,0,0,9.6,31.294V18.7A.9.9,0,0,0,8.063,18.06Zm8.749-1.915a.907.907,0,1,0-1,1.517,8.761,8.761,0,0,1,0,14.668.907.907,0,1,0,1,1.517,10.576,10.576,0,0,0,0-17.7ZM18,25a6.924,6.924,0,0,0-3.216-5.859.9.9,0,0,0-1.242.28.911.911,0,0,0,.278,1.251,5.125,5.125,0,0,1,0,8.656.91.91,0,0,0-.278,1.251.9.9,0,0,0,1.242.28A6.923,6.923,0,0,0,18,25Zm-5.316-2.882a.9.9,0,0,0-.868,1.577,1.478,1.478,0,0,1,0,2.611.9.9,0,0,0,.868,1.577,3.279,3.279,0,0,0,0-5.765Z",
    transform: "translate(9251 7042.004)",
    fill: "#fff"
  })));
}.bind(void 0));
exports.VolumeIcon = VolumeIcon;
const DownloadIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_71",
    "data-name": "Group 71",
    transform: "translate(-9283 -7051)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_51",
    "data-name": "Rectangle 51",
    width: "100%",
    height: "100%",
    transform: "translate(9283 7051)",
    fill: "none"
  }), _react.default.createElement("path", {
    id: "download",
    d: "M14.53,50.082H.969A.966.966,0,0,1,0,49.113v-.969a.966.966,0,0,1,.969-.969H14.53a.966.966,0,0,1,.969.969v.969A.966.966,0,0,1,14.53,50.082ZM11.85,38.761,9.2,41.408v-8.44A.966.966,0,0,0,8.234,32H7.265a.966.966,0,0,0-.969.969v8.44L3.649,38.761a.965.965,0,0,0-1.368,0l-.686.686a.965.965,0,0,0,0,1.368l5.469,5.469a.965.965,0,0,0,1.368,0L13.9,40.815a.965.965,0,0,0,0-1.368l-.686-.686A.96.96,0,0,0,11.85,38.761Z",
    transform: "translate(9291 7026)",
    fill: "#fff"
  })));
}.bind(void 0));
exports.DownloadIcon = DownloadIcon;
const FullscreenIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_72",
    "data-name": "Group 72",
    transform: "translate(-9322 -7051)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_52",
    "data-name": "Rectangle 52",
    width: "100%",
    height: "100%",
    transform: "translate(9322 7051)",
    fill: "none"
  }), _react.default.createElement("g", {
    id: "baseline-fullscreen-24px_1_",
    "data-name": "baseline-fullscreen-24px (1)",
    transform: "translate(9322.04 7052.041)"
  }, _react.default.createElement("path", {
    id: "Path_7",
    "data-name": "Path 7",
    d: "M7.384,16.571H5V23h5.96V20.429H7.384ZM5,11.429H7.384V7.571H10.96V5H5Zm17.3,9H18.727V23h5.96V16.571H22.3ZM18.727,5V7.571H22.3v3.857h2.384V5Z",
    transform: "translate(0.96 0.96)",
    fill: "#fff"
  }))));
}.bind(void 0));
exports.FullscreenIcon = FullscreenIcon;
const MuteIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_74",
    "data-name": "Group 74",
    transform: "translate(-9246 -7091)"
  }, _react.default.createElement("path", {
    id: "mute",
    d: "M17.857,71.431l1.765-1.765a.624.624,0,0,0,0-.883L18.74,67.9a.624.624,0,0,0-.883,0l-1.765,1.765L14.326,67.9a.624.624,0,0,0-.883,0l-.883.883a.624.624,0,0,0,0,.883l1.765,1.765L12.561,73.2a.624.624,0,0,0,0,.883l.883.883a.624.624,0,0,0,.883,0L16.092,73.2l1.765,1.765a.624.624,0,0,0,.883,0l.883-.883a.624.624,0,0,0,0-.883Z",
    transform: "translate(9250 7035.996)",
    fill: "#fff"
  }), _react.default.createElement("g", {
    id: "Group_73",
    "data-name": "Group 73",
    transform: "translate(0 40)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_50",
    "data-name": "Rectangle 50",
    width: "100%",
    height: "100%",
    transform: "translate(9246 7051)",
    fill: "none"
  }), _react.default.createElement("path", {
    id: "audio",
    d: "M8.063,18.06,4.727,21.4H.9a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,0,.9.9H4.727L8.063,31.93A.9.9,0,0,0,9.6,31.294V18.7A.9.9,0,0,0,8.063,18.06Z",
    transform: "translate(9251 7042.004)",
    fill: "#fff"
  }))));
}.bind(void 0));
exports.MuteIcon = MuteIcon;
const PauseIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    style: style,
    className: className
  }, _react.default.createElement("g", {
    id: "Group_76",
    "data-name": "Group 76",
    transform: "translate(-9158 -7051)"
  }, _react.default.createElement("path", {
    id: "pause",
    d: "M4.5,45h-3A1.5,1.5,0,0,1,0,43.5v-11A1.5,1.5,0,0,1,1.5,31h3A1.5,1.5,0,0,1,6,32.5v11A1.5,1.5,0,0,1,4.5,45ZM14,43.5v-11A1.5,1.5,0,0,0,12.5,31h-3A1.5,1.5,0,0,0,8,32.5v11A1.5,1.5,0,0,0,9.5,45h3A1.5,1.5,0,0,0,14,43.5Z",
    transform: "translate(9166.678 7028.805)",
    fill: "#fff"
  }), _react.default.createElement("g", {
    id: "Group_75",
    "data-name": "Group 75",
    transform: "translate(-50)"
  }, _react.default.createElement("rect", {
    id: "Rectangle_49",
    "data-name": "Rectangle 49",
    width: "32",
    height: "32",
    transform: "translate(9208 7051)",
    fill: "none"
  }))));
}.bind(void 0));
exports.PauseIcon = PauseIcon;
const RoundedPlayIcon = (0, _react.memo)(function (props) {
  _newArrowCheck(this, _this);

  const {
    style,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["style", "className"]);

  return _react.default.createElement("svg", _extends({
    width: "84px",
    height: "84px",
    viewBox: "0 0 84 84",
    version: "1.1",
    style: style,
    className: className
  }, rest), _react.default.createElement("defs", null, _react.default.createElement("path", {
    d: "M0,2.9386527 C0,2.28519731 0.223131006,1.65038385 0.634115641,1.13457739 C1.6548224,-0.146461115 3.54612826,-0.37723598 4.85846551,0.619127301 L24.0377018,15.1805418 C24.2349507,15.3302987 24.4123298,15.5034474 24.5657455,15.6959919 C25.5864523,16.9770304 25.3500391,18.8232294 24.0377018,19.8195926 L4.85846551,34.3810072 C4.33005669,34.78219 3.67973327,35 3.01031244,35 C1.34776279,35 0,33.6843803 0,32.0614818 L0,2.9386527 Z",
    id: "rounded-play-inner-icon"
  })), _react.default.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "Version-4-:-Test-with-new-input-fields",
    transform: "translate(-674.000000, -263.000000)"
  }, _react.default.createElement("g", {
    id: "Play-Button",
    transform: "translate(674.000000, 263.000000)"
  }, _react.default.createElement("g", {
    id: "Icons-/-1-Primary-/-Media-/-Video-/-01-Play",
    transform: "translate(33.000000, 25.000000)"
  }, _react.default.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, _react.default.createElement("use", {
    xlinkHref: "#rounded-play-inner-icon"
  })), _react.default.createElement("use", {
    id: "fill",
    fill: "#FFFFFF",
    fillRule: "nonzero",
    xlinkHref: "#rounded-play-inner-icon"
  })), _react.default.createElement("circle", {
    id: "Oval",
    fill: "#FFFFFF",
    opacity: "0.251929874",
    cx: "42",
    cy: "42",
    r: "42"
  })))));
}.bind(void 0));
exports.RoundedPlayIcon = RoundedPlayIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1BsYXllci9WaWRlb0NvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIlBsYXlCdXR0b25JY29uIiwicHJvcHMiLCJzdHlsZSIsImNsYXNzTmFtZSIsIlZvbHVtZUljb24iLCJEb3dubG9hZEljb24iLCJGdWxsc2NyZWVuSWNvbiIsIk11dGVJY29uIiwiUGF1c2VJY29uIiwiUm91bmRlZFBsYXlJY29uIiwicmVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLGlCQUFLLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNuQyxRQUFNO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUF1QkYsS0FBN0I7QUFDQSxTQUNFO0FBQUssSUFBQSxLQUFLLEVBQUMsNEJBQVg7QUFBd0MsSUFBQSxLQUFLLEVBQUMsS0FBOUM7QUFBb0QsSUFBQSxNQUFNLEVBQUMsS0FBM0Q7QUFBaUUsSUFBQSxPQUFPLEVBQUMsV0FBekU7QUFBcUYsSUFBQSxLQUFLLEVBQUVDLEtBQTVGO0FBQW1HLElBQUEsU0FBUyxFQUFFQztBQUE5RyxLQUNFO0FBQUcsSUFBQSxFQUFFLEVBQUMsVUFBTjtBQUFpQixpQkFBVSxVQUEzQjtBQUFzQyxJQUFBLFNBQVMsRUFBQztBQUFoRCxLQUNFO0FBQU0sSUFBQSxFQUFFLEVBQUMsY0FBVDtBQUF3QixpQkFBVSxjQUFsQztBQUFpRCxJQUFBLEtBQUssRUFBQyxNQUF2RDtBQUE4RCxJQUFBLE1BQU0sRUFBQyxNQUFyRTtBQUE0RSxJQUFBLFNBQVMsRUFBQyxzQkFBdEY7QUFBNkcsSUFBQSxJQUFJLEVBQUM7QUFBbEgsSUFERixFQUVFO0FBQ0UsSUFBQSxFQUFFLEVBQUMsTUFETDtBQUVFLElBQUEsQ0FBQyxFQUFDLCtHQUZKO0FBR0UsSUFBQSxTQUFTLEVBQUMsMEJBSFo7QUFJRSxJQUFBLElBQUksRUFBQztBQUpQLElBRkYsQ0FE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O0FBQUssSUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLElBQUEsSUFBSSxFQUFDLFNBQXBCO0FBQThCLElBQUEsUUFBUSxFQUFDLFNBQXZDO0FBQWlELElBQUEsU0FBUyxFQUFDO0FBQTNELElBSkYsQ0FERixFQU9FO0FBQVEsSUFBQSxFQUFFLEVBQUMsTUFBWDtBQUFrQixJQUFBLElBQUksRUFBQyxTQUF2QjtBQUFpQyxJQUFBLE9BQU8sRUFBQyxhQUF6QztBQUF1RCxJQUFBLEVBQUUsRUFBQyxJQUExRDtBQUErRCxJQUFBLEVBQUUsRUFBQyxJQUFsRTtBQUF1RSxJQUFBLENBQUMsRUFBQztBQUF6RSxJQVBGLENBREYsQ0FERixDQVBGLENBREY7QUF1QkQsQ0F6QnVCLGNBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBsYXlCdXR0b25JY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzY5XCIgZGF0YS1uYW1lPVwiR3JvdXAgNjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkyMDggLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzQ5XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ5XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjA4IDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwicGxheVwiXG4gICAgICAgICAgZD1cIk0xMy4yNjIsNi43NGwtMTEtNi41QTEuNDkyLDEuNDkyLDAsMCwwLDAsMS41Mjh2MTNhMS41LDEuNSwwLDAsMCwyLjI2MiwxLjI5MWwxMS02LjVBMS41LDEuNSwwLDAsMCwxMy4yNjIsNi43NFpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjE3IDcwNTguOTY4KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IFZvbHVtZUljb24gPSBtZW1vKHByb3BzID0+IHtcbiAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxnIGlkPVwiR3JvdXBfNzBcIiBkYXRhLW5hbWU9XCJHcm91cCA3MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTI0NiAtNzA1MSlcIj5cbiAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNTBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNDYgNzA1MSlcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgaWQ9XCJhdWRpb1wiXG4gICAgICAgICAgZD1cIk04LjA2MywxOC4wNiw0LjcyNywyMS40SC45YS45LjksMCwwLDAtLjkuOXY1LjRhLjkuOSwwLDAsMCwuOS45SDQuNzI3TDguMDYzLDMxLjkzQS45LjksMCwwLDAsOS42LDMxLjI5NFYxOC43QS45LjksMCwwLDAsOC4wNjMsMTguMDZabTguNzQ5LTEuOTE1YS45MDcuOTA3LDAsMSwwLTEsMS41MTcsOC43NjEsOC43NjEsMCwwLDEsMCwxNC42NjguOTA3LjkwNywwLDEsMCwxLDEuNTE3LDEwLjU3NiwxMC41NzYsMCwwLDAsMC0xNy43Wk0xOCwyNWE2LjkyNCw2LjkyNCwwLDAsMC0zLjIxNi01Ljg1OS45LjksMCwwLDAtMS4yNDIuMjguOTExLjkxMSwwLDAsMCwuMjc4LDEuMjUxLDUuMTI1LDUuMTI1LDAsMCwxLDAsOC42NTYuOTEuOTEsMCwwLDAtLjI3OCwxLjI1MS45LjksMCwwLDAsMS4yNDIuMjhBNi45MjMsNi45MjMsMCwwLDAsMTgsMjVabS01LjMxNi0yLjg4MmEuOS45LDAsMCwwLS44NjgsMS41NzcsMS40NzgsMS40NzgsMCwwLDEsMCwyLjYxMS45LjksMCwwLDAsLjg2OCwxLjU3NywzLjI3OSwzLjI3OSwwLDAsMCwwLTUuNzY1WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNTEgNzA0Mi4wMDQpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59KTtcblxuY29uc3QgRG93bmxvYWRJY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzcxXCIgZGF0YS1uYW1lPVwiR3JvdXAgNzFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkyODMgLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzUxXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUxXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjgzIDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwiZG93bmxvYWRcIlxuICAgICAgICAgIGQ9XCJNMTQuNTMsNTAuMDgySC45NjlBLjk2Ni45NjYsMCwwLDEsMCw0OS4xMTN2LS45NjlhLjk2Ni45NjYsMCwwLDEsLjk2OS0uOTY5SDE0LjUzYS45NjYuOTY2LDAsMCwxLC45NjkuOTY5di45NjlBLjk2Ni45NjYsMCwwLDEsMTQuNTMsNTAuMDgyWk0xMS44NSwzOC43NjEsOS4yLDQxLjQwOHYtOC40NEEuOTY2Ljk2NiwwLDAsMCw4LjIzNCwzMkg3LjI2NWEuOTY2Ljk2NiwwLDAsMC0uOTY5Ljk2OXY4LjQ0TDMuNjQ5LDM4Ljc2MWEuOTY1Ljk2NSwwLDAsMC0xLjM2OCwwbC0uNjg2LjY4NmEuOTY1Ljk2NSwwLDAsMCwwLDEuMzY4bDUuNDY5LDUuNDY5YS45NjUuOTY1LDAsMCwwLDEuMzY4LDBMMTMuOSw0MC44MTVhLjk2NS45NjUsMCwwLDAsMC0xLjM2OGwtLjY4Ni0uNjg2QS45Ni45NiwwLDAsMCwxMS44NSwzOC43NjFaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI5MSA3MDI2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IEZ1bGxzY3JlZW5JY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzcyXCIgZGF0YS1uYW1lPVwiR3JvdXAgNzJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkzMjIgLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzUyXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUyXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MzIyIDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8ZyBpZD1cImJhc2VsaW5lLWZ1bGxzY3JlZW4tMjRweF8xX1wiIGRhdGEtbmFtZT1cImJhc2VsaW5lLWZ1bGxzY3JlZW4tMjRweCAoMSlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTMyMi4wNCA3MDUyLjA0MSlcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzdcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3XCJcbiAgICAgICAgICAgIGQ9XCJNNy4zODQsMTYuNTcxSDVWMjNoNS45NlYyMC40MjlINy4zODRaTTUsMTEuNDI5SDcuMzg0VjcuNTcxSDEwLjk2VjVINVptMTcuMyw5SDE4LjcyN1YyM2g1Ljk2VjE2LjU3MUgyMi4zWk0xOC43MjcsNVY3LjU3MUgyMi4zdjMuODU3aDIuMzg0VjVaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjk2IDAuOTYpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59KTtcblxuY29uc3QgTXV0ZUljb24gPSBtZW1vKHByb3BzID0+IHtcbiAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxnIGlkPVwiR3JvdXBfNzRcIiBkYXRhLW5hbWU9XCJHcm91cCA3NFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTI0NiAtNzA5MSlcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD1cIm11dGVcIlxuICAgICAgICAgIGQ9XCJNMTcuODU3LDcxLjQzMWwxLjc2NS0xLjc2NWEuNjI0LjYyNCwwLDAsMCwwLS44ODNMMTguNzQsNjcuOWEuNjI0LjYyNCwwLDAsMC0uODgzLDBsLTEuNzY1LDEuNzY1TDE0LjMyNiw2Ny45YS42MjQuNjI0LDAsMCwwLS44ODMsMGwtLjg4My44ODNhLjYyNC42MjQsMCwwLDAsMCwuODgzbDEuNzY1LDEuNzY1TDEyLjU2MSw3My4yYS42MjQuNjI0LDAsMCwwLDAsLjg4M2wuODgzLjg4M2EuNjI0LjYyNCwwLDAsMCwuODgzLDBMMTYuMDkyLDczLjJsMS43NjUsMS43NjVhLjYyNC42MjQsMCwwLDAsLjg4MywwbC44ODMtLjg4M2EuNjI0LjYyNCwwLDAsMCwwLS44ODNaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI1MCA3MDM1Ljk5NilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGcgaWQ9XCJHcm91cF83M1wiIGRhdGEtbmFtZT1cIkdyb3VwIDczXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNDApXCI+XG4gICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNTBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNDYgNzA1MSlcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgICAgZD1cIk04LjA2MywxOC4wNiw0LjcyNywyMS40SC45YS45LjksMCwwLDAtLjkuOXY1LjRhLjkuOSwwLDAsMCwuOS45SDQuNzI3TDguMDYzLDMxLjkzQS45LjksMCwwLDAsOS42LDMxLjI5NFYxOC43QS45LjksMCwwLDAsOC4wNjMsMTguMDZaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjUxIDcwNDIuMDA0KVwiXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IFBhdXNlSWNvbiA9IG1lbW8ocHJvcHMgPT4ge1xuICBjb25zdCB7IHN0eWxlLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGcgaWQ9XCJHcm91cF83NlwiIGRhdGEtbmFtZT1cIkdyb3VwIDc2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05MTU4IC03MDUxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwicGF1c2VcIlxuICAgICAgICAgIGQ9XCJNNC41LDQ1aC0zQTEuNSwxLjUsMCwwLDEsMCw0My41di0xMUExLjUsMS41LDAsMCwxLDEuNSwzMWgzQTEuNSwxLjUsMCwwLDEsNiwzMi41djExQTEuNSwxLjUsMCwwLDEsNC41LDQ1Wk0xNCw0My41di0xMUExLjUsMS41LDAsMCwwLDEyLjUsMzFoLTNBMS41LDEuNSwwLDAsMCw4LDMyLjV2MTFBMS41LDEuNSwwLDAsMCw5LjUsNDVoM0ExLjUsMS41LDAsMCwwLDE0LDQzLjVaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTE2Ni42NzggNzAyOC44MDUpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxnIGlkPVwiR3JvdXBfNzVcIiBkYXRhLW5hbWU9XCJHcm91cCA3NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTApXCI+XG4gICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDlcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNDlcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTIwOCA3MDUxKVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IFJvdW5kZWRQbGF5SWNvbiA9IG1lbW8ocHJvcHMgPT4ge1xuICBjb25zdCB7IHN0eWxlLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCI4NHB4XCIgaGVpZ2h0PVwiODRweFwiIHZpZXdCb3g9XCIwIDAgODQgODRcIiB2ZXJzaW9uPVwiMS4xXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0wLDIuOTM4NjUyNyBDMCwyLjI4NTE5NzMxIDAuMjIzMTMxMDA2LDEuNjUwMzgzODUgMC42MzQxMTU2NDEsMS4xMzQ1NzczOSBDMS42NTQ4MjI0LC0wLjE0NjQ2MTExNSAzLjU0NjEyODI2LC0wLjM3NzIzNTk4IDQuODU4NDY1NTEsMC42MTkxMjczMDEgTDI0LjAzNzcwMTgsMTUuMTgwNTQxOCBDMjQuMjM0OTUwNywxNS4zMzAyOTg3IDI0LjQxMjMyOTgsMTUuNTAzNDQ3NCAyNC41NjU3NDU1LDE1LjY5NTk5MTkgQzI1LjU4NjQ1MjMsMTYuOTc3MDMwNCAyNS4zNTAwMzkxLDE4LjgyMzIyOTQgMjQuMDM3NzAxOCwxOS44MTk1OTI2IEw0Ljg1ODQ2NTUxLDM0LjM4MTAwNzIgQzQuMzMwMDU2NjksMzQuNzgyMTkgMy42Nzk3MzMyNywzNSAzLjAxMDMxMjQ0LDM1IEMxLjM0Nzc2Mjc5LDM1IDAsMzMuNjg0MzgwMyAwLDMyLjA2MTQ4MTggTDAsMi45Mzg2NTI3IFpcIlxuICAgICAgICAgIGlkPVwicm91bmRlZC1wbGF5LWlubmVyLWljb25cIlxuICAgICAgICAvPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPGcgaWQ9XCJWZXJzaW9uLTQtOi1UZXN0LXdpdGgtbmV3LWlucHV0LWZpZWxkc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNjc0LjAwMDAwMCwgLTI2My4wMDAwMDApXCI+XG4gICAgICAgICAgPGcgaWQ9XCJQbGF5LUJ1dHRvblwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2NzQuMDAwMDAwLCAyNjMuMDAwMDAwKVwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJJY29ucy0vLTEtUHJpbWFyeS0vLU1lZGlhLS8tVmlkZW8tLy0wMS1QbGF5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMzLjAwMDAwMCwgMjUuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2stMlwiIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI3JvdW5kZWQtcGxheS1pbm5lci1pY29uXCIgLz5cbiAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICA8dXNlIGlkPVwiZmlsbFwiIGZpbGw9XCIjRkZGRkZGXCIgZmlsbFJ1bGU9XCJub256ZXJvXCIgeGxpbmtIcmVmPVwiI3JvdW5kZWQtcGxheS1pbm5lci1pY29uXCIgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJPdmFsXCIgZmlsbD1cIiNGRkZGRkZcIiBvcGFjaXR5PVwiMC4yNTE5Mjk4NzRcIiBjeD1cIjQyXCIgY3k9XCI0MlwiIHI9XCI0MlwiIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59KTtcblxuZXhwb3J0IHsgUGxheUJ1dHRvbkljb24sIFZvbHVtZUljb24sIEZ1bGxzY3JlZW5JY29uLCBEb3dubG9hZEljb24sIE11dGVJY29uLCBQYXVzZUljb24sIFJvdW5kZWRQbGF5SWNvbiB9O1xuIl19