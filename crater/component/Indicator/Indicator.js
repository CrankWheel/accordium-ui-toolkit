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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0luZGljYXRvci9JbmRpY2F0b3IuanMiXSwibmFtZXMiOlsiSW5kaWNhdG9yIiwiY2xhc3NOYW1lIiwic21hbGwiLCJsYXJnZSIsImtpbmQiLCJvdGhlciIsImNsYXNzZXMiLCJzdHlsZXMiLCJpbmRpY2F0b3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLHlCQUFpRDtBQUFBOztBQUFBLE1BQWhEO0FBQUVDLElBQUFBLFNBQUY7QUFBYUMsSUFBQUEsS0FBYjtBQUFvQkMsSUFBQUEsS0FBcEI7QUFBMkJDLElBQUFBO0FBQTNCLEdBQWdEO0FBQUEsTUFBWkMsS0FBWTs7QUFDakUsUUFBTUMsT0FBTyxHQUFHLHlCQUNkQyx5QkFBT0MsU0FETyxFQUVkRCx5QkFBT0gsSUFBUCxDQUZjLEVBR2Q7QUFDRSxLQUFDRyx5QkFBT0wsS0FBUixHQUFnQixDQUFDLENBQUNBLEtBRHBCO0FBRUUsS0FBQ0sseUJBQU9KLEtBQVIsR0FBZ0IsQ0FBQyxDQUFDQTtBQUZwQixHQUhjLEVBT2RGLFNBUGMsQ0FBaEI7QUFVQSxTQUFPO0FBQUssSUFBQSxTQUFTLEVBQUVLO0FBQWhCLEtBQTZCRCxLQUE3QixFQUFQO0FBQ0QsQ0FaYyxhQUFmOztBQWNBTCxTQUFTLENBQUNTLFNBQVYsR0FBc0I7QUFDcEJSLEVBQUFBLFNBQVMsRUFBRVMsbUJBQVVDLE1BREQ7QUFFcEJQLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLE1BRkk7QUFHcEJSLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVFLElBSEc7QUFJcEJWLEVBQUFBLEtBQUssRUFBRVEsbUJBQVVFO0FBSkcsQ0FBdEI7QUFPQVosU0FBUyxDQUFDYSxZQUFWLEdBQXlCO0FBQ3ZCWixFQUFBQSxTQUFTLEVBQUUsRUFEWTtBQUV2QkcsRUFBQUEsSUFBSSxFQUFFO0FBRmlCLENBQXpCO2VBS2VKLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmRpY2F0b3IubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBJbmRpY2F0b3IgPSAoeyBjbGFzc05hbWUsIHNtYWxsLCBsYXJnZSwga2luZCwgLi4ub3RoZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY3goXG4gICAgc3R5bGVzLmluZGljYXRvcixcbiAgICBzdHlsZXNba2luZF0sXG4gICAge1xuICAgICAgW3N0eWxlcy5zbWFsbF06ICEhc21hbGwsXG4gICAgICBbc3R5bGVzLmxhcmdlXTogISFsYXJnZSxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVyfSAvPjtcbn07XG5cbkluZGljYXRvci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAga2luZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5JbmRpY2F0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBraW5kOiAncHJpbWFyeScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRpY2F0b3I7XG4iXX0=