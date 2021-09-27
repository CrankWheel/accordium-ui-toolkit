"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _KeyValueDisplayModule = _interopRequireDefault(require("./KeyValueDisplay.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const KeyValueDisplay = function KeyValueDisplay(_ref) {
  _newArrowCheck(this, _this);

  let {
    className,
    keyWrapperClassName,
    valueWrapperClassName,
    keyText,
    value,
    isInline
  } = _ref,
      other = _objectWithoutProperties(_ref, ["className", "keyWrapperClassName", "valueWrapperClassName", "keyText", "value", "isInline"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(className, _KeyValueDisplayModule.default.KeyValueDisplay, {
      [_KeyValueDisplayModule.default.inline]: isInline
    })
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(keyWrapperClassName, {
      [_KeyValueDisplayModule.default.key]: isInline
    })
  }, keyText), _react.default.createElement("div", {
    className: (0, _classnames.default)(valueWrapperClassName, {
      [_KeyValueDisplayModule.default.value]: !isInline
    })
  }, value));
}.bind(void 0);

KeyValueDisplay.propTypes = {
  className: _propTypes.default.string,
  keyWrapperClassName: _propTypes.default.string,
  valueWrapperClassName: _propTypes.default.string,
  keyText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  isInline: _propTypes.default.bool
};
KeyValueDisplay.defaultProps = {
  className: '',
  keyWrapperClassName: '',
  valueWrapperClassName: '',
  keyText: '',
  value: '',
  isInline: false
};
var _default = KeyValueDisplay;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0tleVZhbHVlRGlzcGxheS9LZXlWYWx1ZURpc3BsYXkuanMiXSwibmFtZXMiOlsiS2V5VmFsdWVEaXNwbGF5IiwiY2xhc3NOYW1lIiwia2V5V3JhcHBlckNsYXNzTmFtZSIsInZhbHVlV3JhcHBlckNsYXNzTmFtZSIsImtleVRleHQiLCJ2YWx1ZSIsImlzSW5saW5lIiwib3RoZXIiLCJzdHlsZXMiLCJpbmxpbmUiLCJrZXkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJlbGVtZW50Iiwibm9kZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsK0JBQW1HO0FBQUE7O0FBQUEsTUFBbEc7QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxtQkFBYjtBQUFrQ0MsSUFBQUEscUJBQWxDO0FBQXlEQyxJQUFBQSxPQUF6RDtBQUFrRUMsSUFBQUEsS0FBbEU7QUFBeUVDLElBQUFBO0FBQXpFLEdBQWtHO0FBQUEsTUFBWkMsS0FBWTs7QUFDekgsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHTixTQUFILEVBQWNPLCtCQUFPUixlQUFyQixFQUFzQztBQUFFLE9BQUNRLCtCQUFPQyxNQUFSLEdBQWlCSDtBQUFuQixLQUF0QztBQUFoQixLQUEwRkMsS0FBMUYsR0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHTCxtQkFBSCxFQUF3QjtBQUFFLE9BQUNNLCtCQUFPRSxHQUFSLEdBQWNKO0FBQWhCLEtBQXhCO0FBQWhCLEtBQXNFRixPQUF0RSxDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0QscUJBQUgsRUFBMEI7QUFBRSxPQUFDSywrQkFBT0gsS0FBUixHQUFnQixDQUFDQztBQUFuQixLQUExQjtBQUFoQixLQUEyRUQsS0FBM0UsQ0FGRixDQURGO0FBTUQsQ0FQb0IsYUFBckI7O0FBU0FMLGVBQWUsQ0FBQ1csU0FBaEIsR0FBNEI7QUFDMUJWLEVBQUFBLFNBQVMsRUFBRVcsbUJBQVVDLE1BREs7QUFFMUJYLEVBQUFBLG1CQUFtQixFQUFFVSxtQkFBVUMsTUFGTDtBQUcxQlYsRUFBQUEscUJBQXFCLEVBQUVTLG1CQUFVQyxNQUhQO0FBSTFCVCxFQUFBQSxPQUFPLEVBQUVRLG1CQUFVRSxTQUFWLENBQW9CLENBQUNGLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUcsT0FBN0IsRUFBc0NILG1CQUFVSSxJQUFoRCxDQUFwQixDQUppQjtBQUsxQlgsRUFBQUEsS0FBSyxFQUFFTyxtQkFBVUUsU0FBVixDQUFvQixDQUFDRixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVHLE9BQTdCLEVBQXNDSCxtQkFBVUksSUFBaEQsQ0FBcEIsQ0FMbUI7QUFNMUJWLEVBQUFBLFFBQVEsRUFBRU0sbUJBQVVLO0FBTk0sQ0FBNUI7QUFTQWpCLGVBQWUsQ0FBQ2tCLFlBQWhCLEdBQStCO0FBQzdCakIsRUFBQUEsU0FBUyxFQUFFLEVBRGtCO0FBRTdCQyxFQUFBQSxtQkFBbUIsRUFBRSxFQUZRO0FBRzdCQyxFQUFBQSxxQkFBcUIsRUFBRSxFQUhNO0FBSTdCQyxFQUFBQSxPQUFPLEVBQUUsRUFKb0I7QUFLN0JDLEVBQUFBLEtBQUssRUFBRSxFQUxzQjtBQU03QkMsRUFBQUEsUUFBUSxFQUFFO0FBTm1CLENBQS9CO2VBU2VOLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9LZXlWYWx1ZURpc3BsYXkubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBLZXlWYWx1ZURpc3BsYXkgPSAoeyBjbGFzc05hbWUsIGtleVdyYXBwZXJDbGFzc05hbWUsIHZhbHVlV3JhcHBlckNsYXNzTmFtZSwga2V5VGV4dCwgdmFsdWUsIGlzSW5saW5lLCAuLi5vdGhlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLktleVZhbHVlRGlzcGxheSwgeyBbc3R5bGVzLmlubGluZV06IGlzSW5saW5lIH0pfSB7Li4ub3RoZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KGtleVdyYXBwZXJDbGFzc05hbWUsIHsgW3N0eWxlcy5rZXldOiBpc0lubGluZSB9KX0+e2tleVRleHR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3godmFsdWVXcmFwcGVyQ2xhc3NOYW1lLCB7IFtzdHlsZXMudmFsdWVdOiAhaXNJbmxpbmUgfSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbktleVZhbHVlRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5V3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWVXcmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBrZXlUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBpc0lubGluZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5LZXlWYWx1ZURpc3BsYXkuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBrZXlXcmFwcGVyQ2xhc3NOYW1lOiAnJyxcbiAgdmFsdWVXcmFwcGVyQ2xhc3NOYW1lOiAnJyxcbiAga2V5VGV4dDogJycsXG4gIHZhbHVlOiAnJyxcbiAgaXNJbmxpbmU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5VmFsdWVEaXNwbGF5O1xuIl19