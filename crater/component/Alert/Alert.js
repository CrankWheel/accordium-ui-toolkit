"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _alertModule = _interopRequireDefault(require("./alert.module.scss"));

var _Icon = _interopRequireDefault(require("../Iconography/Icon"));

var _util = require("../../util");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Alert = function Alert(_ref) {
  _newArrowCheck(this, _this);

  let {
    className,
    message,
    kind
  } = _ref,
      other = _objectWithoutProperties(_ref, ["className", "message", "kind"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(className, _alertModule.default.alertContainer, _alertModule.default[`alert${(0, _util.capitalize)(kind)}`])
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(_alertModule.default.icon)
  }, _react.default.createElement(_Icon.default, {
    src: `alert_${kind}`
  })), _react.default.createElement("div", {
    className: (0, _classnames.default)(_alertModule.default.message)
  }, message));
}.bind(void 0);

Alert.propTypes = {
  className: _propTypes.default.string,
  message: _propTypes.default.string
};
Alert.defaultProps = {
  className: '',
  message: ''
};
var _default = Alert;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0FsZXJ0L0FsZXJ0LmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsImtpbmQiLCJvdGhlciIsInN0eWxlcyIsImFsZXJ0Q29udGFpbmVyIiwiaWNvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUcscUJBQTRDO0FBQUE7O0FBQUEsTUFBM0M7QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxPQUFiO0FBQXNCQyxJQUFBQTtBQUF0QixHQUEyQztBQUFBLE1BQVpDLEtBQVk7O0FBQ3hELFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0gsU0FBSCxFQUFjSSxxQkFBT0MsY0FBckIsRUFBcUNELHFCQUFRLFFBQU8sc0JBQVdGLElBQVgsQ0FBaUIsRUFBaEMsQ0FBckM7QUFBaEIsS0FBOEZDLEtBQTlGLEdBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0MscUJBQU9FLElBQVY7QUFBaEIsS0FDRSw2QkFBQyxhQUFEO0FBQU0sSUFBQSxHQUFHLEVBQUcsU0FBUUosSUFBSztBQUF6QixJQURGLENBREYsRUFJRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHRSxxQkFBT0gsT0FBVjtBQUFoQixLQUFxQ0EsT0FBckMsQ0FKRixDQURGO0FBUUQsQ0FUVSxhQUFYOztBQVdBRixLQUFLLENBQUNRLFNBQU4sR0FBa0I7QUFDaEJQLEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDLE1BREw7QUFFaEJSLEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVDO0FBRkgsQ0FBbEI7QUFLQVYsS0FBSyxDQUFDVyxZQUFOLEdBQXFCO0FBQ25CVixFQUFBQSxTQUFTLEVBQUUsRUFEUTtBQUVuQkMsRUFBQUEsT0FBTyxFQUFFO0FBRlUsQ0FBckI7ZUFLZUYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hbGVydC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29ub2dyYXBoeS9JY29uJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlsJztcblxuY29uc3QgQWxlcnQgPSAoeyBjbGFzc05hbWUsIG1lc3NhZ2UsIGtpbmQsIC4uLm90aGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMuYWxlcnRDb250YWluZXIsIHN0eWxlc1tgYWxlcnQke2NhcGl0YWxpemUoa2luZCl9YF0pfSB7Li4ub3RoZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5pY29uKX0+XG4gICAgICAgIDxJY29uIHNyYz17YGFsZXJ0XyR7a2luZH1gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLm1lc3NhZ2UpfT57bWVzc2FnZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBtZXNzYWdlOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIl19