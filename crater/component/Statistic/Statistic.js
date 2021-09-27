"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _StatisticModule = _interopRequireDefault(require("./Statistic.module.scss"));

var _js = _interopRequireDefault(require("../../token/js"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function isValueNumber(number) {
  return typeof number === 'number';
}

function processValue(value, isShowProgress) {
  if (isShowProgress && typeof value === 'number') {
    return `${value}%`;
  }

  return value;
}

function getProgressStyle(value, showProgressBar) {
  if (!showProgressBar) return {};
  if (typeof value !== 'number') return {};

  if (value >= 0 && value < 30) {
    return {
      width: `${value}%`,
      background: _js.default.color.DANGER
    };
  } else if (value >= 30 && value < 70) {
    return {
      width: `${value}%`,
      background: _js.default.color.BRAND
    };
  } else {
    return {
      width: `${value}%`,
      background: _js.default.color.PRIMARY
    };
  }
}

const Statistic = function Statistic(_ref) {
  _newArrowCheck(this, _this);

  let {
    className,
    value,
    description,
    showProgressBar
  } = _ref,
      other = _objectWithoutProperties(_ref, ["className", "value", "description", "showProgressBar"]);

  return _react.default.createElement("div", _extends({
    className: _StatisticModule.default.statsCounter
  }, other), _react.default.createElement("div", {
    className: "text1Bold"
  }, processValue(value, showProgressBar)), _react.default.createElement("div", {
    className: (0, _classnames.default)('text4', _StatisticModule.default.counterDescription)
  }, description), _react.default.createElement("div", {
    className: (0, _classnames.default)(_StatisticModule.default.progressBar, {
      [_StatisticModule.default.hidden]: !showProgressBar || !isValueNumber(value)
    })
  }, _react.default.createElement("div", {
    className: _StatisticModule.default.progress,
    style: getProgressStyle(value, showProgressBar)
  })));
}.bind(void 0);

Statistic.propTypes = {
  className: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  showProgressBar: _propTypes.default.bool
};
Statistic.defaultProps = {
  className: '',
  description: '',
  showProgressBar: false
};
var _default = Statistic;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1N0YXRpc3RpYy9TdGF0aXN0aWMuanMiXSwibmFtZXMiOlsiaXNWYWx1ZU51bWJlciIsIm51bWJlciIsInByb2Nlc3NWYWx1ZSIsInZhbHVlIiwiaXNTaG93UHJvZ3Jlc3MiLCJnZXRQcm9ncmVzc1N0eWxlIiwic2hvd1Byb2dyZXNzQmFyIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwidG9rZW4iLCJjb2xvciIsIkRBTkdFUiIsIkJSQU5EIiwiUFJJTUFSWSIsIlN0YXRpc3RpYyIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwib3RoZXIiLCJzdHlsZXMiLCJzdGF0c0NvdW50ZXIiLCJjb3VudGVyRGVzY3JpcHRpb24iLCJwcm9ncmVzc0JhciIsImhpZGRlbiIsInByb2dyZXNzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJub2RlIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBQzdCLFNBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUF6QjtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxjQUE3QixFQUE2QztBQUMzQyxNQUFJQSxjQUFjLElBQUksT0FBT0QsS0FBUCxLQUFpQixRQUF2QyxFQUFpRDtBQUMvQyxXQUFRLEdBQUVBLEtBQU0sR0FBaEI7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsZ0JBQVQsQ0FBMEJGLEtBQTFCLEVBQWlDRyxlQUFqQyxFQUFrRDtBQUNoRCxNQUFJLENBQUNBLGVBQUwsRUFBc0IsT0FBTyxFQUFQO0FBQ3RCLE1BQUksT0FBT0gsS0FBUCxLQUFpQixRQUFyQixFQUErQixPQUFPLEVBQVA7O0FBQy9CLE1BQUlBLEtBQUssSUFBSSxDQUFULElBQWNBLEtBQUssR0FBRyxFQUExQixFQUE4QjtBQUM1QixXQUFPO0FBQUVJLE1BQUFBLEtBQUssRUFBRyxHQUFFSixLQUFNLEdBQWxCO0FBQXNCSyxNQUFBQSxVQUFVLEVBQUVDLFlBQU1DLEtBQU4sQ0FBWUM7QUFBOUMsS0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJUixLQUFLLElBQUksRUFBVCxJQUFlQSxLQUFLLEdBQUcsRUFBM0IsRUFBK0I7QUFDcEMsV0FBTztBQUFFSSxNQUFBQSxLQUFLLEVBQUcsR0FBRUosS0FBTSxHQUFsQjtBQUFzQkssTUFBQUEsVUFBVSxFQUFFQyxZQUFNQyxLQUFOLENBQVlFO0FBQTlDLEtBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPO0FBQUVMLE1BQUFBLEtBQUssRUFBRyxHQUFFSixLQUFNLEdBQWxCO0FBQXNCSyxNQUFBQSxVQUFVLEVBQUVDLFlBQU1DLEtBQU4sQ0FBWUc7QUFBOUMsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTUMsU0FBUyxHQUFHLHlCQUFrRTtBQUFBOztBQUFBLE1BQWpFO0FBQUVDLElBQUFBLFNBQUY7QUFBYVosSUFBQUEsS0FBYjtBQUFvQmEsSUFBQUEsV0FBcEI7QUFBaUNWLElBQUFBO0FBQWpDLEdBQWlFO0FBQUEsTUFBWlcsS0FBWTs7QUFDbEYsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFQyx5QkFBT0M7QUFBdkIsS0FBeUNGLEtBQXpDLEdBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTRCZixZQUFZLENBQUNDLEtBQUQsRUFBUUcsZUFBUixDQUF4QyxDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBRyxPQUFILEVBQVlZLHlCQUFPRSxrQkFBbkI7QUFBaEIsS0FBeURKLFdBQXpELENBRkYsRUFHRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHRSx5QkFBT0csV0FBVixFQUF1QjtBQUFFLE9BQUNILHlCQUFPSSxNQUFSLEdBQWlCLENBQUNoQixlQUFELElBQW9CLENBQUNOLGFBQWEsQ0FBQ0csS0FBRDtBQUFyRCxLQUF2QjtBQUFoQixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVlLHlCQUFPSyxRQUF2QjtBQUFpQyxJQUFBLEtBQUssRUFBRWxCLGdCQUFnQixDQUFDRixLQUFELEVBQVFHLGVBQVI7QUFBeEQsSUFERixDQUhGLENBREY7QUFTRCxDQVZjLGFBQWY7O0FBWUFRLFNBQVMsQ0FBQ1UsU0FBVixHQUFzQjtBQUNwQlQsRUFBQUEsU0FBUyxFQUFFVSxtQkFBVUMsTUFERDtBQUVwQnZCLEVBQUFBLEtBQUssRUFBRXNCLG1CQUFVRSxTQUFWLENBQW9CLENBQUNGLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVXhCLE1BQTdCLENBQXBCLEVBQTBEMkIsVUFGN0M7QUFHcEJaLEVBQUFBLFdBQVcsRUFBRVMsbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSSxPQUE3QixFQUFzQ0osbUJBQVVLLElBQWhELENBQXBCLENBSE87QUFJcEJ4QixFQUFBQSxlQUFlLEVBQUVtQixtQkFBVU07QUFKUCxDQUF0QjtBQU9BakIsU0FBUyxDQUFDa0IsWUFBVixHQUF5QjtBQUN2QmpCLEVBQUFBLFNBQVMsRUFBRSxFQURZO0FBRXZCQyxFQUFBQSxXQUFXLEVBQUUsRUFGVTtBQUd2QlYsRUFBQUEsZUFBZSxFQUFFO0FBSE0sQ0FBekI7ZUFNZVEsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N0YXRpc3RpYy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdG9rZW4gZnJvbSAnLi4vLi4vdG9rZW4vanMnO1xuXG5mdW5jdGlvbiBpc1ZhbHVlTnVtYmVyKG51bWJlcikge1xuICByZXR1cm4gdHlwZW9mIG51bWJlciA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NWYWx1ZSh2YWx1ZSwgaXNTaG93UHJvZ3Jlc3MpIHtcbiAgaWYgKGlzU2hvd1Byb2dyZXNzICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYCR7dmFsdWV9JWA7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc1N0eWxlKHZhbHVlLCBzaG93UHJvZ3Jlc3NCYXIpIHtcbiAgaWYgKCFzaG93UHJvZ3Jlc3NCYXIpIHJldHVybiB7fTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHJldHVybiB7fTtcbiAgaWYgKHZhbHVlID49IDAgJiYgdmFsdWUgPCAzMCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBgJHt2YWx1ZX0lYCwgYmFja2dyb3VuZDogdG9rZW4uY29sb3IuREFOR0VSIH07XG4gIH0gZWxzZSBpZiAodmFsdWUgPj0gMzAgJiYgdmFsdWUgPCA3MCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBgJHt2YWx1ZX0lYCwgYmFja2dyb3VuZDogdG9rZW4uY29sb3IuQlJBTkQgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB3aWR0aDogYCR7dmFsdWV9JWAsIGJhY2tncm91bmQ6IHRva2VuLmNvbG9yLlBSSU1BUlkgfTtcbiAgfVxufVxuXG5jb25zdCBTdGF0aXN0aWMgPSAoeyBjbGFzc05hbWUsIHZhbHVlLCBkZXNjcmlwdGlvbiwgc2hvd1Byb2dyZXNzQmFyLCAuLi5vdGhlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0NvdW50ZXJ9IHsuLi5vdGhlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQxQm9sZFwiPntwcm9jZXNzVmFsdWUodmFsdWUsIHNob3dQcm9ncmVzc0Jhcil9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3RleHQ0Jywgc3R5bGVzLmNvdW50ZXJEZXNjcmlwdGlvbil9PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMucHJvZ3Jlc3NCYXIsIHsgW3N0eWxlcy5oaWRkZW5dOiAhc2hvd1Byb2dyZXNzQmFyIHx8ICFpc1ZhbHVlTnVtYmVyKHZhbHVlKSB9KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9IHN0eWxlPXtnZXRQcm9ncmVzc1N0eWxlKHZhbHVlLCBzaG93UHJvZ3Jlc3NCYXIpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TdGF0aXN0aWMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBzaG93UHJvZ3Jlc3NCYXI6IFByb3BUeXBlcy5ib29sLFxufTtcblxuU3RhdGlzdGljLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuICBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljO1xuIl19