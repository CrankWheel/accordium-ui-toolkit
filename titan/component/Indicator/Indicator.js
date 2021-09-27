"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IndicatorModule = _interopRequireDefault(require("./Indicator.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Indicator = function Indicator(_ref) {
  _newArrowCheck(this, _this);

  let {
    className,
    small,
    large,
    kind
  } = _ref,
      other = _objectWithoutProperties(_ref, ["className", "small", "large", "kind"]);

  const classes = (0, _classnames.default)(_IndicatorModule.default.indicator, _IndicatorModule.default[kind], {
    [_IndicatorModule.default.small]: !!small,
    [_IndicatorModule.default.large]: !!large
  }, className);
  return _react.default.createElement("div", _extends({
    className: classes
  }, other));
}.bind(void 0);

Indicator.propTypes = {
  className: _propTypes.default.string,
  kind: _propTypes.default.string,
  large: _propTypes.default.bool,
  small: _propTypes.default.bool
};
Indicator.defaultProps = {
  className: '',
  kind: 'primary'
};
var _default = Indicator;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvSW5kaWNhdG9yL0luZGljYXRvci5qcyJdLCJuYW1lcyI6WyJJbmRpY2F0b3IiLCJjbGFzc05hbWUiLCJzbWFsbCIsImxhcmdlIiwia2luZCIsIm90aGVyIiwiY2xhc3NlcyIsInN0eWxlcyIsImluZGljYXRvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxTQUFTLEdBQUcseUJBQWlEO0FBQUE7O0FBQUEsTUFBaEQ7QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxLQUFiO0FBQW9CQyxJQUFBQSxLQUFwQjtBQUEyQkMsSUFBQUE7QUFBM0IsR0FBZ0Q7QUFBQSxNQUFaQyxLQUFZOztBQUNqRSxRQUFNQyxPQUFPLEdBQUcseUJBQ2RDLHlCQUFPQyxTQURPLEVBRWRELHlCQUFPSCxJQUFQLENBRmMsRUFHZDtBQUNFLEtBQUNHLHlCQUFPTCxLQUFSLEdBQWdCLENBQUMsQ0FBQ0EsS0FEcEI7QUFFRSxLQUFDSyx5QkFBT0osS0FBUixHQUFnQixDQUFDLENBQUNBO0FBRnBCLEdBSGMsRUFPZEYsU0FQYyxDQUFoQjtBQVVBLFNBQU87QUFBSyxJQUFBLFNBQVMsRUFBRUs7QUFBaEIsS0FBNkJELEtBQTdCLEVBQVA7QUFDRCxDQVpjLGFBQWY7O0FBY0FMLFNBQVMsQ0FBQ1MsU0FBVixHQUFzQjtBQUNwQlIsRUFBQUEsU0FBUyxFQUFFUyxtQkFBVUMsTUFERDtBQUVwQlAsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUMsTUFGSTtBQUdwQlIsRUFBQUEsS0FBSyxFQUFFTyxtQkFBVUUsSUFIRztBQUlwQlYsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUU7QUFKRyxDQUF0QjtBQU9BWixTQUFTLENBQUNhLFlBQVYsR0FBeUI7QUFDdkJaLEVBQUFBLFNBQVMsRUFBRSxFQURZO0FBRXZCRyxFQUFBQSxJQUFJLEVBQUU7QUFGaUIsQ0FBekI7ZUFLZUosUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luZGljYXRvci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEluZGljYXRvciA9ICh7IGNsYXNzTmFtZSwgc21hbGwsIGxhcmdlLCBraW5kLCAuLi5vdGhlciB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjeChcbiAgICBzdHlsZXMuaW5kaWNhdG9yLFxuICAgIHN0eWxlc1traW5kXSxcbiAgICB7XG4gICAgICBbc3R5bGVzLnNtYWxsXTogISFzbWFsbCxcbiAgICAgIFtzdHlsZXMubGFyZ2VdOiAhIWxhcmdlLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJ9IC8+O1xufTtcblxuSW5kaWNhdG9yLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBraW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkluZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGtpbmQ6ICdwcmltYXJ5Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGljYXRvcjtcbiJdfQ==