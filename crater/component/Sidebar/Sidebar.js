"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    logo,
    profile,
    links,
    footer,
    mini,
    miniTrigger,
    hideMiniTrigger,
    disableDecoration = false
  } = props,
        rest = _objectWithoutProperties(props, ["className", "logo", "profile", "links", "footer", "mini", "miniTrigger", "hideMiniTrigger", "disableDecoration"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(_SidebarModule.default.sidebar, className, {
      [_SidebarModule.default.mini]: mini
    })
  }, rest), _react.default.createElement("div", {
    className: _SidebarModule.default.innerWrapper
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.content)
  }, logo && _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.logo)
  }, logo), profile && _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.profile)
  }, profile), links && _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.links)
  }, links)), _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.footer)
  }, footer), !disableDecoration && _react.default.createElement("div", {
    className: _SidebarModule.default.oval
  }, _react.default.createElement(OvalSvg, null)), !hideMiniTrigger && miniTrigger));
}

Sidebar.defaultProps = {};
Sidebar.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1NpZGViYXIvU2lkZWJhci5qcyJdLCJuYW1lcyI6WyJPdmFsU3ZnIiwiU2lkZWJhciIsInByb3BzIiwiY2xhc3NOYW1lIiwibG9nbyIsInByb2ZpbGUiLCJsaW5rcyIsImZvb3RlciIsIm1pbmkiLCJtaW5pVHJpZ2dlciIsImhpZGVNaW5pVHJpZ2dlciIsImRpc2FibGVEZWNvcmF0aW9uIiwicmVzdCIsInN0eWxlcyIsInNpZGViYXIiLCJpbm5lcldyYXBwZXIiLCJjb250ZW50Iiwib3ZhbCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImNoaWxkcmVuIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLE9BQU8sR0FBRztBQUFBOztBQUFBLFNBQ2Q7QUFBSyxJQUFBLEtBQUssRUFBQyxPQUFYO0FBQW1CLElBQUEsTUFBTSxFQUFDLE9BQTFCO0FBQWtDLElBQUEsT0FBTyxFQUFDLGFBQTFDO0FBQXdELElBQUEsT0FBTyxFQUFDLEtBQWhFO0FBQXNFLElBQUEsS0FBSyxFQUFDO0FBQTVFLEtBQ0UsMkNBQ0U7QUFBZ0IsSUFBQSxFQUFFLEVBQUMsS0FBbkI7QUFBeUIsSUFBQSxFQUFFLEVBQUMsSUFBNUI7QUFBaUMsSUFBQSxFQUFFLEVBQUMsS0FBcEM7QUFBMEMsSUFBQSxFQUFFLEVBQUMsYUFBN0M7QUFBMkQsSUFBQSxFQUFFLEVBQUM7QUFBOUQsS0FDRTtBQUFNLElBQUEsU0FBUyxFQUFDLFNBQWhCO0FBQTBCLElBQUEsV0FBVyxFQUFDLGFBQXRDO0FBQW9ELElBQUEsTUFBTSxFQUFDO0FBQTNELElBREYsRUFFRTtBQUFNLElBQUEsU0FBUyxFQUFDLFNBQWhCO0FBQTBCLElBQUEsV0FBVyxFQUFDLEdBQXRDO0FBQTBDLElBQUEsTUFBTSxFQUFDO0FBQWpELElBRkYsQ0FERixDQURGLEVBT0U7QUFBRyxJQUFBLEVBQUUsRUFBQyxVQUFOO0FBQWlCLElBQUEsTUFBTSxFQUFDLE1BQXhCO0FBQStCLElBQUEsV0FBVyxFQUFDLEdBQTNDO0FBQStDLElBQUEsSUFBSSxFQUFDLE1BQXBEO0FBQTJELElBQUEsUUFBUSxFQUFDO0FBQXBFLEtBQ0U7QUFBRyxJQUFBLEVBQUUsRUFBQztBQUFOLEtBQ0U7QUFBUSxJQUFBLEVBQUUsRUFBQyxNQUFYO0FBQWtCLElBQUEsTUFBTSxFQUFDLHdCQUF6QjtBQUFrRCxJQUFBLFdBQVcsRUFBQyxJQUE5RDtBQUFtRSxJQUFBLE9BQU8sRUFBQyxNQUEzRTtBQUFrRixJQUFBLEVBQUUsRUFBQyxPQUFyRjtBQUE2RixJQUFBLEVBQUUsRUFBQyxPQUFoRztBQUF3RyxJQUFBLENBQUMsRUFBQztBQUExRyxJQURGLEVBRUU7QUFBTSxJQUFBLEVBQUUsRUFBQyxXQUFUO0FBQXFCLElBQUEsQ0FBQyxFQUFDLEdBQXZCO0FBQTJCLElBQUEsQ0FBQyxFQUFDLEdBQTdCO0FBQWlDLElBQUEsS0FBSyxFQUFDLEtBQXZDO0FBQTZDLElBQUEsTUFBTSxFQUFDO0FBQXBELElBRkYsQ0FERixDQVBGLENBRGM7QUFBQSxDQUFILGFBQWI7O0FBaUJlLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3JDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxJQUFiO0FBQW1CQyxJQUFBQSxPQUFuQjtBQUE0QkMsSUFBQUEsS0FBNUI7QUFBbUNDLElBQUFBLE1BQW5DO0FBQTJDQyxJQUFBQSxJQUEzQztBQUFpREMsSUFBQUEsV0FBakQ7QUFBOERDLElBQUFBLGVBQTlEO0FBQStFQyxJQUFBQSxpQkFBaUIsR0FBRztBQUFuRyxNQUFzSFQsS0FBNUg7QUFBQSxRQUFtSFUsSUFBbkgsNEJBQTRIVixLQUE1SDs7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdXLHVCQUFPQyxPQUFWLEVBQW1CWCxTQUFuQixFQUE4QjtBQUFFLE9BQUNVLHVCQUFPTCxJQUFSLEdBQWVBO0FBQWpCLEtBQTlCO0FBQWhCLEtBQTRFSSxJQUE1RSxHQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVDLHVCQUFPRTtBQUF2QixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdGLHVCQUFPRyxPQUFWO0FBQWhCLEtBQ0daLElBQUksSUFBSTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHUyx1QkFBT1QsSUFBVjtBQUFoQixLQUFrQ0EsSUFBbEMsQ0FEWCxFQUVHQyxPQUFPLElBQUk7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR1EsdUJBQU9SLE9BQVY7QUFBaEIsS0FBcUNBLE9BQXJDLENBRmQsRUFHR0MsS0FBSyxJQUFJO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdPLHVCQUFPUCxLQUFWO0FBQWhCLEtBQW1DQSxLQUFuQyxDQUhaLENBREYsRUFNRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHTyx1QkFBT04sTUFBVjtBQUFoQixLQUFvQ0EsTUFBcEMsQ0FORixFQU9HLENBQUNJLGlCQUFELElBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBRUUsdUJBQU9JO0FBQXZCLEtBQ0UsNkJBQUMsT0FBRCxPQURGLENBUkosRUFZRyxDQUFDUCxlQUFELElBQW9CRCxXQVp2QixDQURGLENBREY7QUFrQkQ7O0FBRURSLE9BQU8sQ0FBQ2lCLFlBQVIsR0FBdUIsRUFBdkI7QUFFQWpCLE9BQU8sQ0FBQ2tCLFNBQVIsR0FBb0I7QUFDbEJoQixFQUFBQSxTQUFTLEVBQUVpQixtQkFBVUMsTUFESDtBQUVsQkMsRUFBQUEsUUFBUSxFQUFFRixtQkFBVUc7QUFGRixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGViYXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBPdmFsU3ZnID0gKCkgPT4gKFxuICA8c3ZnIHdpZHRoPVwiMzMwcHhcIiBoZWlnaHQ9XCIzMzBweFwiIHZpZXdCb3g9XCIwIDAgMzMwIDMzMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGRlZnM+XG4gICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI1MCVcIiB5MT1cIjAlXCIgeDI9XCI1MCVcIiB5Mj1cIjk5LjExMDUzNjMlXCIgaWQ9XCJsaW5lYXJHcmFkaWVudC0xXCI+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRkZGRkZcIiBzdG9wT3BhY2l0eT1cIjAuOTk3NzYwMDUyXCIgb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkZGRkZGXCIgc3RvcE9wYWNpdHk9XCIwXCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgIDwvZGVmcz5cbiAgICA8ZyBpZD1cIkFydGJvYXJkXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICA8ZyBpZD1cIkdyb3VwLTJcIj5cbiAgICAgICAgPGNpcmNsZSBpZD1cIk92YWxcIiBzdHJva2U9XCJ1cmwoI2xpbmVhckdyYWRpZW50LTEpXCIgc3Ryb2tlV2lkdGg9XCI1N1wiIG9wYWNpdHk9XCIwLjA5XCIgY3g9XCIxNjUuNVwiIGN5PVwiMTY1LjVcIiByPVwiMTIxLjVcIiAvPlxuICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMzMFwiIGhlaWdodD1cIjMzMFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGxvZ28sIHByb2ZpbGUsIGxpbmtzLCBmb290ZXIsIG1pbmksIG1pbmlUcmlnZ2VyLCBoaWRlTWluaVRyaWdnZXIsIGRpc2FibGVEZWNvcmF0aW9uID0gZmFsc2UsIC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5zaWRlYmFyLCBjbGFzc05hbWUsIHsgW3N0eWxlcy5taW5pXTogbWluaSB9KX0gey4uLnJlc3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcldyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRlbnQpfT5cbiAgICAgICAgICB7bG9nbyAmJiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmxvZ28pfT57bG9nb308L2Rpdj59XG4gICAgICAgICAge3Byb2ZpbGUgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5wcm9maWxlKX0+e3Byb2ZpbGV9PC9kaXY+fVxuICAgICAgICAgIHtsaW5rcyAmJiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmxpbmtzKX0+e2xpbmtzfTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuZm9vdGVyKX0+e2Zvb3Rlcn08L2Rpdj5cbiAgICAgICAgeyFkaXNhYmxlRGVjb3JhdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmFsfT5cbiAgICAgICAgICAgIDxPdmFsU3ZnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHshaGlkZU1pbmlUcmlnZ2VyICYmIG1pbmlUcmlnZ2VyfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpZGViYXIuZGVmYXVsdFByb3BzID0ge307XG5cblNpZGViYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=