"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MenuItem(props) {
  var _this = this;

  const {
    className,
    caption,
    children,
    disabled,
    icon,
    selected,
    shortcut,
    onClick
  } = props,
        others = _objectWithoutProperties(props, ["className", "caption", "children", "disabled", "icon", "selected", "shortcut", "onClick"]);

  const listClassName = (0, _classnames.default)(_MenuModule.default.menuItem, {
    [_MenuModule.default.selected]: selected,
    [_MenuModule.default.disabled]: disabled
  }, className);
  const handleClick = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (onClick && !disabled) {
      onClick(event, this);
    }
  }.bind(this), [disabled, onClick]);
  const injectedIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    let tmpInjectedIcon;

    if (icon) {
      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _MenuModule.default.icon)
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }.bind(this), [icon]);
  return _react.default.createElement("li", _extends({
    "data-react-toolbox": "menu-item",
    className: listClassName,
    onClick: handleClick
  }, others), injectedIcon, _react.default.createElement("span", {
    className: _MenuModule.default.caption
  }, caption), shortcut ? _react.default.createElement("small", {
    className: _MenuModule.default.shortcut
  }, shortcut) : null, children);
}

MenuItem.propTypes = {
  caption: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onClick: _propTypes.default.func,
  selected: _propTypes.default.bool,
  shortcut: _propTypes.default.string
};
MenuItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvTWVudS9NZW51SXRlbS5qcyJdLCJuYW1lcyI6WyJNZW51SXRlbSIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2FwdGlvbiIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJpY29uIiwic2VsZWN0ZWQiLCJzaG9ydGN1dCIsIm9uQ2xpY2siLCJvdGhlcnMiLCJsaXN0Q2xhc3NOYW1lIiwic3R5bGVzIiwibWVudUl0ZW0iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiaW5qZWN0ZWRJY29uIiwidG1wSW5qZWN0ZWRJY29uIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN0QyxRQUFNO0FBQUVDLElBQUFBLFNBQUY7QUFBYUMsSUFBQUEsT0FBYjtBQUFzQkMsSUFBQUEsUUFBdEI7QUFBZ0NDLElBQUFBLFFBQWhDO0FBQTBDQyxJQUFBQSxJQUExQztBQUFnREMsSUFBQUEsUUFBaEQ7QUFBMERDLElBQUFBLFFBQTFEO0FBQW9FQyxJQUFBQTtBQUFwRSxNQUEyRlIsS0FBakc7QUFBQSxRQUFzRlMsTUFBdEYsNEJBQWlHVCxLQUFqRzs7QUFDQSxRQUFNVSxhQUFhLEdBQUcseUJBQ3BCQyxvQkFBT0MsUUFEYSxFQUVwQjtBQUNFLEtBQUNELG9CQUFPTCxRQUFSLEdBQW1CQSxRQURyQjtBQUVFLEtBQUNLLG9CQUFPUCxRQUFSLEdBQW1CQTtBQUZyQixHQUZvQixFQU1wQkgsU0FOb0IsQ0FBdEI7QUFTQSxRQUFNWSxXQUFXLEdBQUcsd0JBQ2xCLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNQLFFBQUlOLE9BQU8sSUFBSSxDQUFDSixRQUFoQixFQUEwQjtBQUN4QkksTUFBQUEsT0FBTyxDQUFDTSxLQUFELEVBQVEsSUFBUixDQUFQO0FBQ0Q7QUFDRixHQUxpQixhQU1sQixDQUFDVixRQUFELEVBQVdJLE9BQVgsQ0FOa0IsQ0FBcEI7QUFTQSxRQUFNTyxZQUFZLEdBQUcsb0JBQVEsWUFBTTtBQUFBOztBQUNqQyxRQUFJQyxlQUFKOztBQUNBLFFBQUlYLElBQUosRUFBVTtBQUNSVyxNQUFBQSxlQUFlLEdBQUdDLGVBQU1DLFlBQU4sQ0FBbUJiLElBQW5CLEVBQXlCO0FBQ3pDSixRQUFBQSxTQUFTLEVBQUUseUJBQUdJLElBQUksQ0FBQ0wsS0FBTCxDQUFXQyxTQUFkLEVBQXlCVSxvQkFBT04sSUFBaEM7QUFEOEIsT0FBekIsQ0FBbEI7QUFHQSxhQUFPVyxlQUFQO0FBQ0QsS0FMRCxNQUtPO0FBQ0wsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVZvQixhQVVsQixDQUFDWCxJQUFELENBVmtCLENBQXJCO0FBWUEsU0FDRTtBQUFJLDBCQUFtQixXQUF2QjtBQUFtQyxJQUFBLFNBQVMsRUFBRUssYUFBOUM7QUFBNkQsSUFBQSxPQUFPLEVBQUVHO0FBQXRFLEtBQXVGSixNQUF2RixHQUNHTSxZQURILEVBRUU7QUFBTSxJQUFBLFNBQVMsRUFBRUosb0JBQU9UO0FBQXhCLEtBQWtDQSxPQUFsQyxDQUZGLEVBR0dLLFFBQVEsR0FBRztBQUFPLElBQUEsU0FBUyxFQUFFSSxvQkFBT0o7QUFBekIsS0FBb0NBLFFBQXBDLENBQUgsR0FBMkQsSUFIdEUsRUFJR0osUUFKSCxDQURGO0FBUUQ7O0FBRURKLFFBQVEsQ0FBQ29CLFNBQVQsR0FBcUI7QUFDbkJqQixFQUFBQSxPQUFPLEVBQUVrQixtQkFBVUMsTUFEQTtBQUVuQmxCLEVBQUFBLFFBQVEsRUFBRWlCLG1CQUFVRSxJQUZEO0FBR25CckIsRUFBQUEsU0FBUyxFQUFFbUIsbUJBQVVDLE1BSEY7QUFJbkJqQixFQUFBQSxRQUFRLEVBQUVnQixtQkFBVUcsSUFKRDtBQUtuQmxCLEVBQUFBLElBQUksRUFBRWUsbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSyxPQUE3QixDQUFwQixDQUxhO0FBTW5CakIsRUFBQUEsT0FBTyxFQUFFWSxtQkFBVU0sSUFOQTtBQU9uQnBCLEVBQUFBLFFBQVEsRUFBRWMsbUJBQVVHLElBUEQ7QUFRbkJoQixFQUFBQSxRQUFRLEVBQUVhLG1CQUFVQztBQVJELENBQXJCO0FBV0F0QixRQUFRLENBQUM0QixZQUFULEdBQXdCO0FBQ3RCMUIsRUFBQUEsU0FBUyxFQUFFLEVBRFc7QUFFdEJHLEVBQUFBLFFBQVEsRUFBRSxLQUZZO0FBR3RCRSxFQUFBQSxRQUFRLEVBQUU7QUFIWSxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVudS5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjYXB0aW9uLCBjaGlsZHJlbiwgZGlzYWJsZWQsIGljb24sIHNlbGVjdGVkLCBzaG9ydGN1dCwgb25DbGljaywgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgY29uc3QgbGlzdENsYXNzTmFtZSA9IGN4KFxuICAgIHN0eWxlcy5tZW51SXRlbSxcbiAgICB7XG4gICAgICBbc3R5bGVzLnNlbGVjdGVkXTogc2VsZWN0ZWQsXG4gICAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgfSxcbiAgICBjbGFzc05hbWVcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChvbkNsaWNrICYmICFkaXNhYmxlZCkge1xuICAgICAgICBvbkNsaWNrKGV2ZW50LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaXNhYmxlZCwgb25DbGlja11cbiAgKTtcblxuICBjb25zdCBpbmplY3RlZEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdG1wSW5qZWN0ZWRJY29uO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0bXBJbmplY3RlZEljb24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6IGN4KGljb24ucHJvcHMuY2xhc3NOYW1lLCBzdHlsZXMuaWNvbiksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXBJbmplY3RlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwgW2ljb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBkYXRhLXJlYWN0LXRvb2xib3g9XCJtZW51LWl0ZW1cIiBjbGFzc05hbWU9e2xpc3RDbGFzc05hbWV9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB7Li4ub3RoZXJzfT5cbiAgICAgIHtpbmplY3RlZEljb259XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT57Y2FwdGlvbn08L3NwYW4+XG4gICAgICB7c2hvcnRjdXQgPyA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcnRjdXR9PntzaG9ydGN1dH08L3NtYWxsPiA6IG51bGx9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKTtcbn1cblxuTWVudUl0ZW0ucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzaG9ydGN1dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzZWxlY3RlZDogZmFsc2UsXG59O1xuIl19