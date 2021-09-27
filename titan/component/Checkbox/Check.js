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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQ2hlY2tib3gvQ2hlY2suanMiXSwibmFtZXMiOlsiQ2hlY2siLCJjdXN0b21DaGVja2VyIiwiY2hlY2tlZCIsInRoZW1lIiwiY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWUiLCJyZXN0Iiwic3R5bGVzIiwiY2hlY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYm9vbCIsImNoaWxkcmVuIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUcscUJBQXlFO0FBQUE7O0FBQUEsTUFBeEU7QUFBRUMsSUFBQUEsYUFBRjtBQUFpQkMsSUFBQUEsT0FBakI7QUFBMEJDLElBQUFBLEtBQTFCO0FBQWlDQyxJQUFBQTtBQUFqQyxHQUF3RTtBQUFBLE1BQVhDLElBQVc7O0FBQ3JGLE1BQUlKLGFBQUosRUFBbUI7QUFDakIsV0FDRTtBQUFLLE1BQUEsU0FBUyxFQUFFLHlCQUFHRyx1QkFBSDtBQUFoQixPQUFpREMsSUFBakQsR0FDR0gsT0FBTyxJQUFJRCxhQURkLENBREY7QUFLRDs7QUFDRCxTQUFPO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdLLHdCQUFPQyxLQUFWLEVBQWlCO0FBQUUsT0FBQ0Qsd0JBQU9KLE9BQVIsR0FBa0JBO0FBQXBCLEtBQWpCO0FBQWhCLEtBQXFFRyxJQUFyRSxFQUFQO0FBQ0QsQ0FUVSxhQUFYOztBQVdBTCxLQUFLLENBQUNRLFNBQU4sR0FBa0I7QUFDaEJKLEVBQUFBLHVCQUF1QixFQUFFSyxtQkFBVUMsTUFEbkI7QUFFaEJULEVBQUFBLGFBQWEsRUFBRVEsbUJBQVVFLElBRlQ7QUFHaEJULEVBQUFBLE9BQU8sRUFBRU8sbUJBQVVHLElBSEg7QUFJaEJDLEVBQUFBLFFBQVEsRUFBRUosbUJBQVVFLElBSko7QUFLaEJSLEVBQUFBLEtBQUssRUFBRU0sbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDckJQLElBQUFBLEtBQUssRUFBRUUsbUJBQVVDLE1BREk7QUFFckJSLElBQUFBLE9BQU8sRUFBRU8sbUJBQVVDO0FBRkUsR0FBaEI7QUFMUyxDQUFsQjtlQVdlVixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2hlY2tib3gubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDaGVjayA9ICh7IGN1c3RvbUNoZWNrZXIsIGNoZWNrZWQsIHRoZW1lLCBjdXN0b21DaGVja0JveENsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGlmIChjdXN0b21DaGVja2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjdXN0b21DaGVja0JveENsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoZWNrZWQgJiYgY3VzdG9tQ2hlY2tlcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY2hlY2ssIHsgW3N0eWxlcy5jaGVja2VkXTogY2hlY2tlZCB9KX0gey4uLnJlc3R9IC8+O1xufTtcblxuQ2hlY2sucHJvcFR5cGVzID0ge1xuICBjdXN0b21DaGVja0JveENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3VzdG9tQ2hlY2tlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRoZW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNoZWNrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2s7XG4iXX0=