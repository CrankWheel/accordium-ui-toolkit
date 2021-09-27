"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PauseIcon = exports.MuteIcon = exports.DownloadIcon = exports.FullscreenIcon = exports.VolumeIcon = exports.PlayButtonIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUGxheWVyL1ZpZGVvQ29udHJvbHMuanMiXSwibmFtZXMiOlsiUGxheUJ1dHRvbkljb24iLCJwcm9wcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiVm9sdW1lSWNvbiIsIkRvd25sb2FkSWNvbiIsIkZ1bGxzY3JlZW5JY29uIiwiTXV0ZUljb24iLCJQYXVzZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBLE1BQU1BLGNBQWMsR0FBRyxpQkFBSyxVQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDbkMsUUFBTTtBQUFFQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBdUJGLEtBQTdCO0FBQ0EsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFDLDRCQUFYO0FBQXdDLElBQUEsS0FBSyxFQUFDLEtBQTlDO0FBQW9ELElBQUEsTUFBTSxFQUFDLEtBQTNEO0FBQWlFLElBQUEsT0FBTyxFQUFDLFdBQXpFO0FBQXFGLElBQUEsS0FBSyxFQUFFQyxLQUE1RjtBQUFtRyxJQUFBLFNBQVMsRUFBRUM7QUFBOUcsS0FDRTtBQUFHLElBQUEsRUFBRSxFQUFDLFVBQU47QUFBaUIsaUJBQVUsVUFBM0I7QUFBc0MsSUFBQSxTQUFTLEVBQUM7QUFBaEQsS0FDRTtBQUFNLElBQUEsRUFBRSxFQUFDLGNBQVQ7QUFBd0IsaUJBQVUsY0FBbEM7QUFBaUQsSUFBQSxLQUFLLEVBQUMsTUFBdkQ7QUFBOEQsSUFBQSxNQUFNLEVBQUMsTUFBckU7QUFBNEUsSUFBQSxTQUFTLEVBQUMsc0JBQXRGO0FBQTZHLElBQUEsSUFBSSxFQUFDO0FBQWxILElBREYsRUFFRTtBQUNFLElBQUEsRUFBRSxFQUFDLE1BREw7QUFFRSxJQUFBLENBQUMsRUFBQywrR0FGSjtBQUdFLElBQUEsU0FBUyxFQUFDLDBCQUhaO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxJQUZGLENBREYsQ0FERjtBQWFELENBZnNCLGNBQXZCOztBQWlCQSxN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QUFBLElBQUksRUFBQztBQUE5RyxJQURGLENBUEYsQ0FERixDQURGO0FBZUQsQ0FqQmlCLGNBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBsYXlCdXR0b25JY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzY5XCIgZGF0YS1uYW1lPVwiR3JvdXAgNjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkyMDggLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzQ5XCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQ5XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjA4IDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwicGxheVwiXG4gICAgICAgICAgZD1cIk0xMy4yNjIsNi43NGwtMTEtNi41QTEuNDkyLDEuNDkyLDAsMCwwLDAsMS41Mjh2MTNhMS41LDEuNSwwLDAsMCwyLjI2MiwxLjI5MWwxMS02LjVBMS41LDEuNSwwLDAsMCwxMy4yNjIsNi43NFpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjE3IDcwNTguOTY4KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IFZvbHVtZUljb24gPSBtZW1vKHByb3BzID0+IHtcbiAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxnIGlkPVwiR3JvdXBfNzBcIiBkYXRhLW5hbWU9XCJHcm91cCA3MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTI0NiAtNzA1MSlcIj5cbiAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNTBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNDYgNzA1MSlcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgaWQ9XCJhdWRpb1wiXG4gICAgICAgICAgZD1cIk04LjA2MywxOC4wNiw0LjcyNywyMS40SC45YS45LjksMCwwLDAtLjkuOXY1LjRhLjkuOSwwLDAsMCwuOS45SDQuNzI3TDguMDYzLDMxLjkzQS45LjksMCwwLDAsOS42LDMxLjI5NFYxOC43QS45LjksMCwwLDAsOC4wNjMsMTguMDZabTguNzQ5LTEuOTE1YS45MDcuOTA3LDAsMSwwLTEsMS41MTcsOC43NjEsOC43NjEsMCwwLDEsMCwxNC42NjguOTA3LjkwNywwLDEsMCwxLDEuNTE3LDEwLjU3NiwxMC41NzYsMCwwLDAsMC0xNy43Wk0xOCwyNWE2LjkyNCw2LjkyNCwwLDAsMC0zLjIxNi01Ljg1OS45LjksMCwwLDAtMS4yNDIuMjguOTExLjkxMSwwLDAsMCwuMjc4LDEuMjUxLDUuMTI1LDUuMTI1LDAsMCwxLDAsOC42NTYuOTEuOTEsMCwwLDAtLjI3OCwxLjI1MS45LjksMCwwLDAsMS4yNDIuMjhBNi45MjMsNi45MjMsMCwwLDAsMTgsMjVabS01LjMxNi0yLjg4MmEuOS45LDAsMCwwLS44NjgsMS41NzcsMS40NzgsMS40NzgsMCwwLDEsMCwyLjYxMS45LjksMCwwLDAsLjg2OCwxLjU3NywzLjI3OSwzLjI3OSwwLDAsMCwwLTUuNzY1WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNTEgNzA0Mi4wMDQpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59KTtcblxuY29uc3QgRG93bmxvYWRJY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzcxXCIgZGF0YS1uYW1lPVwiR3JvdXAgNzFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkyODMgLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzUxXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUxXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjgzIDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwiZG93bmxvYWRcIlxuICAgICAgICAgIGQ9XCJNMTQuNTMsNTAuMDgySC45NjlBLjk2Ni45NjYsMCwwLDEsMCw0OS4xMTN2LS45NjlhLjk2Ni45NjYsMCwwLDEsLjk2OS0uOTY5SDE0LjUzYS45NjYuOTY2LDAsMCwxLC45NjkuOTY5di45NjlBLjk2Ni45NjYsMCwwLDEsMTQuNTMsNTAuMDgyWk0xMS44NSwzOC43NjEsOS4yLDQxLjQwOHYtOC40NEEuOTY2Ljk2NiwwLDAsMCw4LjIzNCwzMkg3LjI2NWEuOTY2Ljk2NiwwLDAsMC0uOTY5Ljk2OXY4LjQ0TDMuNjQ5LDM4Ljc2MWEuOTY1Ljk2NSwwLDAsMC0xLjM2OCwwbC0uNjg2LjY4NmEuOTY1Ljk2NSwwLDAsMCwwLDEuMzY4bDUuNDY5LDUuNDY5YS45NjUuOTY1LDAsMCwwLDEuMzY4LDBMMTMuOSw0MC44MTVhLjk2NS45NjUsMCwwLDAsMC0xLjM2OGwtLjY4Ni0uNjg2QS45Ni45NiwwLDAsMCwxMS44NSwzOC43NjFaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI5MSA3MDI2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IEZ1bGxzY3JlZW5JY29uID0gbWVtbyhwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzcyXCIgZGF0YS1uYW1lPVwiR3JvdXAgNzJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkzMjIgLTcwNTEpXCI+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXzUyXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDUyXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MzIyIDcwNTEpXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8ZyBpZD1cImJhc2VsaW5lLWZ1bGxzY3JlZW4tMjRweF8xX1wiIGRhdGEtbmFtZT1cImJhc2VsaW5lLWZ1bGxzY3JlZW4tMjRweCAoMSlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTMyMi4wNCA3MDUyLjA0MSlcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzdcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCA3XCJcbiAgICAgICAgICAgIGQ9XCJNNy4zODQsMTYuNTcxSDVWMjNoNS45NlYyMC40MjlINy4zODRaTTUsMTEuNDI5SDcuMzg0VjcuNTcxSDEwLjk2VjVINVptMTcuMyw5SDE4LjcyN1YyM2g1Ljk2VjE2LjU3MUgyMi4zWk0xOC43MjcsNVY3LjU3MUgyMi4zdjMuODU3aDIuMzg0VjVaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjk2IDAuOTYpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59KTtcblxuY29uc3QgTXV0ZUljb24gPSBtZW1vKHByb3BzID0+IHtcbiAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxnIGlkPVwiR3JvdXBfNzRcIiBkYXRhLW5hbWU9XCJHcm91cCA3NFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtOTI0NiAtNzA5MSlcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBpZD1cIm11dGVcIlxuICAgICAgICAgIGQ9XCJNMTcuODU3LDcxLjQzMWwxLjc2NS0xLjc2NWEuNjI0LjYyNCwwLDAsMCwwLS44ODNMMTguNzQsNjcuOWEuNjI0LjYyNCwwLDAsMC0uODgzLDBsLTEuNzY1LDEuNzY1TDE0LjMyNiw2Ny45YS42MjQuNjI0LDAsMCwwLS44ODMsMGwtLjg4My44ODNhLjYyNC42MjQsMCwwLDAsMCwuODgzbDEuNzY1LDEuNzY1TDEyLjU2MSw3My4yYS42MjQuNjI0LDAsMCwwLDAsLjg4M2wuODgzLjg4M2EuNjI0LjYyNCwwLDAsMCwuODgzLDBMMTYuMDkyLDczLjJsMS43NjUsMS43NjVhLjYyNC42MjQsMCwwLDAsLjg4MywwbC44ODMtLjg4M2EuNjI0LjYyNCwwLDAsMCwwLS44ODNaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI1MCA3MDM1Ljk5NilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGcgaWQ9XCJHcm91cF83M1wiIGRhdGEtbmFtZT1cIkdyb3VwIDczXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNDApXCI+XG4gICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNTBcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNTBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkyNDYgNzA1MSlcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwiYXVkaW9cIlxuICAgICAgICAgICAgZD1cIk04LjA2MywxOC4wNiw0LjcyNywyMS40SC45YS45LjksMCwwLDAtLjkuOXY1LjRhLjkuOSwwLDAsMCwuOS45SDQuNzI3TDguMDYzLDMxLjkzQS45LjksMCwwLDAsOS42LDMxLjI5NFYxOC43QS45LjksMCwwLDAsOC4wNjMsMTguMDZaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MjUxIDcwNDIuMDA0KVwiXG4gICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmNvbnN0IFBhdXNlSWNvbiA9IG1lbW8ocHJvcHMgPT4ge1xuICBjb25zdCB7IHN0eWxlLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGcgaWQ9XCJHcm91cF83NlwiIGRhdGEtbmFtZT1cIkdyb3VwIDc2XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05MTU4IC03MDUxKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwicGF1c2VcIlxuICAgICAgICAgIGQ9XCJNNC41LDQ1aC0zQTEuNSwxLjUsMCwwLDEsMCw0My41di0xMUExLjUsMS41LDAsMCwxLDEuNSwzMWgzQTEuNSwxLjUsMCwwLDEsNiwzMi41djExQTEuNSwxLjUsMCwwLDEsNC41LDQ1Wk0xNCw0My41di0xMUExLjUsMS41LDAsMCwwLDEyLjUsMzFoLTNBMS41LDEuNSwwLDAsMCw4LDMyLjV2MTFBMS41LDEuNSwwLDAsMCw5LjUsNDVoM0ExLjUsMS41LDAsMCwwLDE0LDQzLjVaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTE2Ni42NzggNzAyOC44MDUpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxnIGlkPVwiR3JvdXBfNzVcIiBkYXRhLW5hbWU9XCJHcm91cCA3NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTApXCI+XG4gICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVfNDlcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNDlcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTIwOCA3MDUxKVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufSk7XG5cbmV4cG9ydCB7IFBsYXlCdXR0b25JY29uLCBWb2x1bWVJY29uLCBGdWxsc2NyZWVuSWNvbiwgRG93bmxvYWRJY29uLCBNdXRlSWNvbiwgUGF1c2VJY29uIH07XG4iXX0=