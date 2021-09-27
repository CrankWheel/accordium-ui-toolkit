"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const OvalSvg = function OvalSvg() {
  _newArrowCheck(this, _this);

  return _react.default.createElement("svg", {
    width: "330px",
    height: "330px",
    viewBox: "0 0 330 330",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "99.1105363%",
    id: "linearGradient-1"
  }, _react.default.createElement("stop", {
    stopColor: "#FFFFFF",
    stopOpacity: "0.997760052",
    offset: "0%"
  }), _react.default.createElement("stop", {
    stopColor: "#FFFFFF",
    stopOpacity: "0",
    offset: "100%"
  }))), _react.default.createElement("g", {
    id: "Artboard",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    id: "Group-2"
  }, _react.default.createElement("circle", {
    id: "Oval",
    stroke: "url(#linearGradient-1)",
    strokeWidth: "57",
    opacity: "0.09",
    cx: "165.5",
    cy: "165.5",
    r: "121.5"
  }), _react.default.createElement("rect", {
    id: "Rectangle",
    x: "0",
    y: "0",
    width: "330",
    height: "330"
  }))));
}.bind(void 0);

function Sidebar(props) {
  const {
    className,
    children
  } = props;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.sidebar, className)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.content)
  }, children), _react.default.createElement("div", {
    className: _SidebarModule.default.oval
  }, _react.default.createElement(OvalSvg, null)));
}

Sidebar.defaultProps = {};
Sidebar.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvU2lkZWJhci9TaWRlYmFyLmpzIl0sIm5hbWVzIjpbIk92YWxTdmciLCJTaWRlYmFyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInN0eWxlcyIsInNpZGViYXIiLCJjb250ZW50Iiwib3ZhbCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsT0FBTyxHQUFHO0FBQUE7O0FBQUEsU0FDZDtBQUFLLElBQUEsS0FBSyxFQUFDLE9BQVg7QUFBbUIsSUFBQSxNQUFNLEVBQUMsT0FBMUI7QUFBa0MsSUFBQSxPQUFPLEVBQUMsYUFBMUM7QUFBd0QsSUFBQSxPQUFPLEVBQUMsS0FBaEU7QUFBc0UsSUFBQSxLQUFLLEVBQUM7QUFBNUUsS0FDRSwyQ0FDRTtBQUFnQixJQUFBLEVBQUUsRUFBQyxLQUFuQjtBQUF5QixJQUFBLEVBQUUsRUFBQyxJQUE1QjtBQUFpQyxJQUFBLEVBQUUsRUFBQyxLQUFwQztBQUEwQyxJQUFBLEVBQUUsRUFBQyxhQUE3QztBQUEyRCxJQUFBLEVBQUUsRUFBQztBQUE5RCxLQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUMsU0FBaEI7QUFBMEIsSUFBQSxXQUFXLEVBQUMsYUFBdEM7QUFBb0QsSUFBQSxNQUFNLEVBQUM7QUFBM0QsSUFERixFQUVFO0FBQU0sSUFBQSxTQUFTLEVBQUMsU0FBaEI7QUFBMEIsSUFBQSxXQUFXLEVBQUMsR0FBdEM7QUFBMEMsSUFBQSxNQUFNLEVBQUM7QUFBakQsSUFGRixDQURGLENBREYsRUFPRTtBQUFHLElBQUEsRUFBRSxFQUFDLFVBQU47QUFBaUIsSUFBQSxNQUFNLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxXQUFXLEVBQUMsR0FBM0M7QUFBK0MsSUFBQSxJQUFJLEVBQUMsTUFBcEQ7QUFBMkQsSUFBQSxRQUFRLEVBQUM7QUFBcEUsS0FDRTtBQUFHLElBQUEsRUFBRSxFQUFDO0FBQU4sS0FDRTtBQUFRLElBQUEsRUFBRSxFQUFDLE1BQVg7QUFBa0IsSUFBQSxNQUFNLEVBQUMsd0JBQXpCO0FBQWtELElBQUEsV0FBVyxFQUFDLElBQTlEO0FBQW1FLElBQUEsT0FBTyxFQUFDLE1BQTNFO0FBQWtGLElBQUEsRUFBRSxFQUFDLE9BQXJGO0FBQTZGLElBQUEsRUFBRSxFQUFDLE9BQWhHO0FBQXdHLElBQUEsQ0FBQyxFQUFDO0FBQTFHLElBREYsRUFFRTtBQUFNLElBQUEsRUFBRSxFQUFDLFdBQVQ7QUFBcUIsSUFBQSxDQUFDLEVBQUMsR0FBdkI7QUFBMkIsSUFBQSxDQUFDLEVBQUMsR0FBN0I7QUFBaUMsSUFBQSxLQUFLLEVBQUMsS0FBdkM7QUFBNkMsSUFBQSxNQUFNLEVBQUM7QUFBcEQsSUFGRixDQURGLENBUEYsQ0FEYztBQUFBLENBQUgsYUFBYjs7QUFpQmUsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBO0FBQWIsTUFBMEJGLEtBQWhDO0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHRyx1QkFBT0MsT0FBVixFQUFtQkgsU0FBbkI7QUFBaEIsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHRSx1QkFBT0UsT0FBVjtBQUFoQixLQUFxQ0gsUUFBckMsQ0FERixFQUVFO0FBQUssSUFBQSxTQUFTLEVBQUVDLHVCQUFPRztBQUF2QixLQUNFLDZCQUFDLE9BQUQsT0FERixDQUZGLENBREY7QUFRRDs7QUFFRFAsT0FBTyxDQUFDUSxZQUFSLEdBQXVCLEVBQXZCO0FBRUFSLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQjtBQUNsQlAsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUMsTUFESDtBQUVsQlIsRUFBQUEsUUFBUSxFQUFFTyxtQkFBVUU7QUFGRixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZWJhci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE92YWxTdmcgPSAoKSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIzMzBweFwiIGhlaWdodD1cIjMzMHB4XCIgdmlld0JveD1cIjAgMCAzMzAgMzMwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8ZGVmcz5cbiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjUwJVwiIHkxPVwiMCVcIiB4Mj1cIjUwJVwiIHkyPVwiOTkuMTEwNTM2MyVcIiBpZD1cImxpbmVhckdyYWRpZW50LTFcIj5cbiAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0ZGRkZGRlwiIHN0b3BPcGFjaXR5PVwiMC45OTc3NjAwNTJcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRkZGRkZcIiBzdG9wT3BhY2l0eT1cIjBcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgPC9kZWZzPlxuICAgIDxnIGlkPVwiQXJ0Ym9hcmRcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgIDxnIGlkPVwiR3JvdXAtMlwiPlxuICAgICAgICA8Y2lyY2xlIGlkPVwiT3ZhbFwiIHN0cm9rZT1cInVybCgjbGluZWFyR3JhZGllbnQtMSlcIiBzdHJva2VXaWR0aD1cIjU3XCIgb3BhY2l0eT1cIjAuMDlcIiBjeD1cIjE2NS41XCIgY3k9XCIxNjUuNVwiIHI9XCIxMjEuNVwiIC8+XG4gICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMzMwXCIgaGVpZ2h0PVwiMzMwXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5zaWRlYmFyLCBjbGFzc05hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGVudCl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZhbH0+XG4gICAgICAgIDxPdmFsU3ZnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuU2lkZWJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==