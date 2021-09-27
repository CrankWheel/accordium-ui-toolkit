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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiTWVudUl0ZW0iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNhcHRpb24iLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiaWNvbiIsInNlbGVjdGVkIiwic2hvcnRjdXQiLCJvbkNsaWNrIiwib3RoZXJzIiwibGlzdENsYXNzTmFtZSIsInN0eWxlcyIsIm1lbnVJdGVtIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImJvb2wiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLE9BQWI7QUFBc0JDLElBQUFBLFFBQXRCO0FBQWdDQyxJQUFBQSxRQUFoQztBQUEwQ0MsSUFBQUEsSUFBMUM7QUFBZ0RDLElBQUFBLFFBQWhEO0FBQTBEQyxJQUFBQSxRQUExRDtBQUFvRUMsSUFBQUE7QUFBcEUsTUFBMkZSLEtBQWpHO0FBQUEsUUFBc0ZTLE1BQXRGLDRCQUFpR1QsS0FBakc7O0FBQ0EsUUFBTVUsYUFBYSxHQUFHLHlCQUNwQkMsb0JBQU9DLFFBRGEsRUFFcEI7QUFDRSxLQUFDRCxvQkFBT0wsUUFBUixHQUFtQkEsUUFEckI7QUFFRSxLQUFDSyxvQkFBT1AsUUFBUixHQUFtQkE7QUFGckIsR0FGb0IsRUFNcEJILFNBTm9CLENBQXRCO0FBU0EsUUFBTVksV0FBVyxHQUFHLHdCQUNsQixVQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDUCxRQUFJTixPQUFPLElBQUksQ0FBQ0osUUFBaEIsRUFBMEI7QUFDeEJJLE1BQUFBLE9BQU8sQ0FBQ00sS0FBRCxFQUFRLElBQVIsQ0FBUDtBQUNEO0FBQ0YsR0FMaUIsYUFNbEIsQ0FBQ1YsUUFBRCxFQUFXSSxPQUFYLENBTmtCLENBQXBCO0FBU0EsUUFBTU8sWUFBWSxHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDakMsUUFBSUMsZUFBSjs7QUFDQSxRQUFJWCxJQUFKLEVBQVU7QUFDUlcsTUFBQUEsZUFBZSxHQUFHQyxlQUFNQyxZQUFOLENBQW1CYixJQUFuQixFQUF5QjtBQUN6Q0osUUFBQUEsU0FBUyxFQUFFLHlCQUFHSSxJQUFJLENBQUNMLEtBQUwsQ0FBV0MsU0FBZCxFQUF5QlUsb0JBQU9OLElBQWhDO0FBRDhCLE9BQXpCLENBQWxCO0FBR0EsYUFBT1csZUFBUDtBQUNELEtBTEQsTUFLTztBQUNMLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FWb0IsYUFVbEIsQ0FBQ1gsSUFBRCxDQVZrQixDQUFyQjtBQVlBLFNBQ0U7QUFBSSwwQkFBbUIsV0FBdkI7QUFBbUMsSUFBQSxTQUFTLEVBQUVLLGFBQTlDO0FBQTZELElBQUEsT0FBTyxFQUFFRztBQUF0RSxLQUF1RkosTUFBdkYsR0FDR00sWUFESCxFQUVFO0FBQU0sSUFBQSxTQUFTLEVBQUVKLG9CQUFPVDtBQUF4QixLQUFrQ0EsT0FBbEMsQ0FGRixFQUdHSyxRQUFRLEdBQUc7QUFBTyxJQUFBLFNBQVMsRUFBRUksb0JBQU9KO0FBQXpCLEtBQW9DQSxRQUFwQyxDQUFILEdBQTJELElBSHRFLEVBSUdKLFFBSkgsQ0FERjtBQVFEOztBQUVESixRQUFRLENBQUNvQixTQUFULEdBQXFCO0FBQ25CakIsRUFBQUEsT0FBTyxFQUFFa0IsbUJBQVVDLE1BREE7QUFFbkJsQixFQUFBQSxRQUFRLEVBQUVpQixtQkFBVUUsSUFGRDtBQUduQnJCLEVBQUFBLFNBQVMsRUFBRW1CLG1CQUFVQyxNQUhGO0FBSW5CakIsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVHLElBSkQ7QUFLbkJsQixFQUFBQSxJQUFJLEVBQUVlLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUssT0FBN0IsQ0FBcEIsQ0FMYTtBQU1uQmpCLEVBQUFBLE9BQU8sRUFBRVksbUJBQVVNLElBTkE7QUFPbkJwQixFQUFBQSxRQUFRLEVBQUVjLG1CQUFVRyxJQVBEO0FBUW5CaEIsRUFBQUEsUUFBUSxFQUFFYSxtQkFBVUM7QUFSRCxDQUFyQjtBQVdBdEIsUUFBUSxDQUFDNEIsWUFBVCxHQUF3QjtBQUN0QjFCLEVBQUFBLFNBQVMsRUFBRSxFQURXO0FBRXRCRyxFQUFBQSxRQUFRLEVBQUUsS0FGWTtBQUd0QkUsRUFBQUEsUUFBUSxFQUFFO0FBSFksQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51SXRlbShwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2FwdGlvbiwgY2hpbGRyZW4sIGRpc2FibGVkLCBpY29uLCBzZWxlY3RlZCwgc2hvcnRjdXQsIG9uQ2xpY2ssIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gIGNvbnN0IGxpc3RDbGFzc05hbWUgPSBjeChcbiAgICBzdHlsZXMubWVudUl0ZW0sXG4gICAge1xuICAgICAgW3N0eWxlcy5zZWxlY3RlZF06IHNlbGVjdGVkLFxuICAgICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBpZiAob25DbGljayAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgb25DbGljayhldmVudCwgdGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGlzYWJsZWQsIG9uQ2xpY2tdXG4gICk7XG5cbiAgY29uc3QgaW5qZWN0ZWRJY29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRtcEluamVjdGVkSWNvbjtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdG1wSW5qZWN0ZWRJY29uID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb24pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wSW5qZWN0ZWRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIFtpY29uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgZGF0YS1yZWFjdC10b29sYm94PVwibWVudS1pdGVtXCIgY2xhc3NOYW1lPXtsaXN0Q2xhc3NOYW1lfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gey4uLm90aGVyc30+XG4gICAgICB7aW5qZWN0ZWRJY29ufVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbn0+e2NhcHRpb259PC9zcGFuPlxuICAgICAge3Nob3J0Y3V0ID8gPHNtYWxsIGNsYXNzTmFtZT17c3R5bGVzLnNob3J0Y3V0fT57c2hvcnRjdXR9PC9zbWFsbD4gOiBudWxsfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gICk7XG59XG5cbk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvcnRjdXQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxufTtcbiJdfQ==