"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkboxModule = _interopRequireDefault(require("./checkbox.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Check = function Check(_ref) {
  _newArrowCheck(this, _this);

  let {
    customChecker,
    checked,
    theme,
    customCheckBoxClassName
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["customChecker", "checked", "theme", "customCheckBoxClassName"]);

  if (customChecker) {
    return _react.default.createElement("div", _extends({
      className: (0, _classnames.default)(customCheckBoxClassName)
    }, rest), checked && customChecker);
  }

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(_checkboxModule.default.check, {
      [_checkboxModule.default.checked]: checked
    })
  }, rest));
}.bind(void 0);

Check.propTypes = {
  customCheckBoxClassName: _propTypes.default.string,
  customChecker: _propTypes.default.node,
  checked: _propTypes.default.bool,
  children: _propTypes.default.node,
  theme: _propTypes.default.shape({
    check: _propTypes.default.string,
    checked: _propTypes.default.string
  })
};
var _default = Check;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NoZWNrYm94L0NoZWNrLmpzIl0sIm5hbWVzIjpbIkNoZWNrIiwiY3VzdG9tQ2hlY2tlciIsImNoZWNrZWQiLCJ0aGVtZSIsImN1c3RvbUNoZWNrQm94Q2xhc3NOYW1lIiwicmVzdCIsInN0eWxlcyIsImNoZWNrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImJvb2wiLCJjaGlsZHJlbiIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLHFCQUF5RTtBQUFBOztBQUFBLE1BQXhFO0FBQUVDLElBQUFBLGFBQUY7QUFBaUJDLElBQUFBLE9BQWpCO0FBQTBCQyxJQUFBQSxLQUExQjtBQUFpQ0MsSUFBQUE7QUFBakMsR0FBd0U7QUFBQSxNQUFYQyxJQUFXOztBQUNyRixNQUFJSixhQUFKLEVBQW1CO0FBQ2pCLFdBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBRSx5QkFBR0csdUJBQUg7QUFBaEIsT0FBaURDLElBQWpELEdBQ0dILE9BQU8sSUFBSUQsYUFEZCxDQURGO0FBS0Q7O0FBQ0QsU0FBTztBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHSyx3QkFBT0MsS0FBVixFQUFpQjtBQUFFLE9BQUNELHdCQUFPSixPQUFSLEdBQWtCQTtBQUFwQixLQUFqQjtBQUFoQixLQUFxRUcsSUFBckUsRUFBUDtBQUNELENBVFUsYUFBWDs7QUFXQUwsS0FBSyxDQUFDUSxTQUFOLEdBQWtCO0FBQ2hCSixFQUFBQSx1QkFBdUIsRUFBRUssbUJBQVVDLE1BRG5CO0FBRWhCVCxFQUFBQSxhQUFhLEVBQUVRLG1CQUFVRSxJQUZUO0FBR2hCVCxFQUFBQSxPQUFPLEVBQUVPLG1CQUFVRyxJQUhIO0FBSWhCQyxFQUFBQSxRQUFRLEVBQUVKLG1CQUFVRSxJQUpKO0FBS2hCUixFQUFBQSxLQUFLLEVBQUVNLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3JCUCxJQUFBQSxLQUFLLEVBQUVFLG1CQUFVQyxNQURJO0FBRXJCUixJQUFBQSxPQUFPLEVBQUVPLG1CQUFVQztBQUZFLEdBQWhCO0FBTFMsQ0FBbEI7ZUFXZVYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NoZWNrYm94Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2hlY2sgPSAoeyBjdXN0b21DaGVja2VyLCBjaGVja2VkLCB0aGVtZSwgY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4ge1xuICBpZiAoY3VzdG9tQ2hlY2tlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICAgIHtjaGVja2VkICYmIGN1c3RvbUNoZWNrZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNoZWNrLCB7IFtzdHlsZXMuY2hlY2tlZF06IGNoZWNrZWQgfSl9IHsuLi5yZXN0fSAvPjtcbn07XG5cbkNoZWNrLnByb3BUeXBlcyA9IHtcbiAgY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGN1c3RvbUNoZWNrZXI6IFByb3BUeXBlcy5ub2RlLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjaGVjazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrO1xuIl19