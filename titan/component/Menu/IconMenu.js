"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconMenu;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));

var _spinnerModule = _interopRequireDefault(require("../Iconography/spinner.module.scss"));

var _util = require("../../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconMenu(props) {
  var _this = this;

  const {
    children,
    className,
    icon,
    iconRipple,
    inverse,
    menuRipple,
    onHide,
    onSelect,
    onShow,
    position,
    selectable,
    selected,
    onClick,
    trigger
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className", "icon", "iconRipple", "inverse", "menuRipple", "onHide", "onSelect", "onShow", "position", "selectable", "selected", "onClick", "trigger"]);

  const [active, setActive] = (0, _react.useState)(false);
  const handleButtonClick = (0, _react.useCallback)(function (event) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    setActive(function (prevActive) {
      _newArrowCheck(this, _this2);

      return !prevActive;
    }.bind(this));
    if (onClick) onClick(event);
  }.bind(this), [onClick]);
  const handleMenuHide = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    setActive(false);
    if (onHide) onHide();
  }.bind(this), [onHide]);
  const triggerButton = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return _react.default.cloneElement(trigger, {
      onClick: handleButtonClick
    });
  }.bind(this), [handleButtonClick, trigger]);
  return _react.default.createElement("div", _extends({}, rest, {
    className: (0, _classnames.default)(_MenuModule.default.iconMenu, className)
  }), triggerButton, _react.default.createElement(_Menu.default, {
    active: !!active,
    onHide: handleMenuHide,
    onSelect: onSelect,
    onShow: onShow,
    position: position,
    ripple: menuRipple,
    selectable: selectable,
    selected: selected,
    setActive: setActive
  }, children));
}

IconMenu.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  iconRipple: _propTypes.default.bool,
  inverse: _propTypes.default.bool,
  menuRipple: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onHide: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onShow: _propTypes.default.func,
  position: _propTypes.default.string,
  selectable: _propTypes.default.bool,
  selected: _propTypes.default.node,
  trigger: _propTypes.default.node
};
IconMenu.defaultProps = {
  active: false,
  className: '',
  iconRipple: true,
  menuRipple: true,
  position: 'auto',
  selectable: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvTWVudS9JY29uTWVudS5qcyJdLCJuYW1lcyI6WyJJY29uTWVudSIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpY29uIiwiaWNvblJpcHBsZSIsImludmVyc2UiLCJtZW51UmlwcGxlIiwib25IaWRlIiwib25TZWxlY3QiLCJvblNob3ciLCJwb3NpdGlvbiIsInNlbGVjdGFibGUiLCJzZWxlY3RlZCIsIm9uQ2xpY2siLCJ0cmlnZ2VyIiwicmVzdCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJwcmV2QWN0aXZlIiwiaGFuZGxlTWVudUhpZGUiLCJ0cmlnZ2VyQnV0dG9uIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZXMiLCJpY29uTWVudSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsUUFBTTtBQUNKQyxJQUFBQSxRQURJO0FBRUpDLElBQUFBLFNBRkk7QUFHSkMsSUFBQUEsSUFISTtBQUlKQyxJQUFBQSxVQUpJO0FBS0pDLElBQUFBLE9BTEk7QUFNSkMsSUFBQUEsVUFOSTtBQU9KQyxJQUFBQSxNQVBJO0FBUUpDLElBQUFBLFFBUkk7QUFTSkMsSUFBQUEsTUFUSTtBQVVKQyxJQUFBQSxRQVZJO0FBV0pDLElBQUFBLFVBWEk7QUFZSkMsSUFBQUEsUUFaSTtBQWFKQyxJQUFBQSxPQWJJO0FBY0pDLElBQUFBO0FBZEksTUFnQkZkLEtBaEJKO0FBQUEsUUFlS2UsSUFmTCw0QkFnQklmLEtBaEJKOztBQWtCQSxRQUFNLENBQUNnQixNQUFELEVBQVNDLFNBQVQsSUFBc0IscUJBQVMsS0FBVCxDQUE1QjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHLHdCQUN4QixVQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQTs7QUFDUEYsSUFBQUEsU0FBUyxDQUFDLFVBQUFHLFVBQVUsRUFBSTtBQUFBOztBQUN0QixhQUFPLENBQUNBLFVBQVI7QUFDRCxLQUZRLFlBQVQ7QUFHQSxRQUFJUCxPQUFKLEVBQWFBLE9BQU8sQ0FBQ00sS0FBRCxDQUFQO0FBQ2QsR0FOdUIsYUFPeEIsQ0FBQ04sT0FBRCxDQVB3QixDQUExQjtBQVVBLFFBQU1RLGNBQWMsR0FBRyx3QkFBWSxZQUFNO0FBQUE7O0FBQ3ZDSixJQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0EsUUFBSVYsTUFBSixFQUFZQSxNQUFNO0FBQ25CLEdBSHNCLGFBR3BCLENBQUNBLE1BQUQsQ0FIb0IsQ0FBdkI7QUFLQSxRQUFNZSxhQUFhLEdBQUcsb0JBQVEsWUFBTTtBQUFBOztBQUNsQyxXQUFPQyxlQUFNQyxZQUFOLENBQW1CVixPQUFuQixFQUE0QjtBQUNqQ0QsTUFBQUEsT0FBTyxFQUFFSztBQUR3QixLQUE1QixDQUFQO0FBR0QsR0FKcUIsYUFJbkIsQ0FBQ0EsaUJBQUQsRUFBb0JKLE9BQXBCLENBSm1CLENBQXRCO0FBTUEsU0FDRSxpREFBU0MsSUFBVDtBQUFlLElBQUEsU0FBUyxFQUFFLHlCQUFHVSxvQkFBT0MsUUFBVixFQUFvQnhCLFNBQXBCO0FBQTFCLE1BQ0dvQixhQURILEVBRUUsNkJBQUMsYUFBRDtBQUNFLElBQUEsTUFBTSxFQUFFLENBQUMsQ0FBQ04sTUFEWjtBQUVFLElBQUEsTUFBTSxFQUFFSyxjQUZWO0FBR0UsSUFBQSxRQUFRLEVBQUViLFFBSFo7QUFJRSxJQUFBLE1BQU0sRUFBRUMsTUFKVjtBQUtFLElBQUEsUUFBUSxFQUFFQyxRQUxaO0FBTUUsSUFBQSxNQUFNLEVBQUVKLFVBTlY7QUFPRSxJQUFBLFVBQVUsRUFBRUssVUFQZDtBQVFFLElBQUEsUUFBUSxFQUFFQyxRQVJaO0FBU0UsSUFBQSxTQUFTLEVBQUVLO0FBVGIsS0FXR2hCLFFBWEgsQ0FGRixDQURGO0FBa0JEOztBQUVERixRQUFRLENBQUM0QixTQUFULEdBQXFCO0FBQ25CWCxFQUFBQSxNQUFNLEVBQUVZLG1CQUFVQyxJQURDO0FBRW5CNUIsRUFBQUEsUUFBUSxFQUFFMkIsbUJBQVVFLElBRkQ7QUFHbkI1QixFQUFBQSxTQUFTLEVBQUUwQixtQkFBVUcsTUFIRjtBQUluQjNCLEVBQUFBLFVBQVUsRUFBRXdCLG1CQUFVQyxJQUpIO0FBS25CeEIsRUFBQUEsT0FBTyxFQUFFdUIsbUJBQVVDLElBTEE7QUFNbkJ2QixFQUFBQSxVQUFVLEVBQUVzQixtQkFBVUMsSUFOSDtBQU9uQmhCLEVBQUFBLE9BQU8sRUFBRWUsbUJBQVVJLElBUEE7QUFRbkJ6QixFQUFBQSxNQUFNLEVBQUVxQixtQkFBVUksSUFSQztBQVNuQnhCLEVBQUFBLFFBQVEsRUFBRW9CLG1CQUFVSSxJQVREO0FBVW5CdkIsRUFBQUEsTUFBTSxFQUFFbUIsbUJBQVVJLElBVkM7QUFXbkJ0QixFQUFBQSxRQUFRLEVBQUVrQixtQkFBVUcsTUFYRDtBQVluQnBCLEVBQUFBLFVBQVUsRUFBRWlCLG1CQUFVQyxJQVpIO0FBYW5CakIsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVFLElBYkQ7QUFjbkJoQixFQUFBQSxPQUFPLEVBQUVjLG1CQUFVRTtBQWRBLENBQXJCO0FBaUJBL0IsUUFBUSxDQUFDa0MsWUFBVCxHQUF3QjtBQUN0QmpCLEVBQUFBLE1BQU0sRUFBRSxLQURjO0FBRXRCZCxFQUFBQSxTQUFTLEVBQUUsRUFGVztBQUd0QkUsRUFBQUEsVUFBVSxFQUFFLElBSFU7QUFJdEJFLEVBQUFBLFVBQVUsRUFBRSxJQUpVO0FBS3RCSSxFQUFBQSxRQUFRLEVBQUUsTUFMWTtBQU10QkMsRUFBQUEsVUFBVSxFQUFFO0FBTlUsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHNwaW5uZXJTdHlsZXMgZnJvbSAnLi4vSWNvbm9ncmFwaHkvc3Bpbm5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbk1lbnUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBpY29uLFxuICAgIGljb25SaXBwbGUsXG4gICAgaW52ZXJzZSxcbiAgICBtZW51UmlwcGxlLFxuICAgIG9uSGlkZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIG9uU2VsZWN0LFxuICAgIG9uU2hvdyxcbiAgICBwb3NpdGlvbixcbiAgICBzZWxlY3RhYmxlLFxuICAgIHNlbGVjdGVkLFxuICAgIG9uQ2xpY2ssXG4gICAgdHJpZ2dlcixcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgc2V0QWN0aXZlKHByZXZBY3RpdmUgPT4ge1xuICAgICAgICByZXR1cm4gIXByZXZBY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICB9LFxuICAgIFtvbkNsaWNrXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVIaWRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgaWYgKG9uSGlkZSkgb25IaWRlKCk7XG4gIH0sIFtvbkhpZGVdKTtcblxuICBjb25zdCB0cmlnZ2VyQnV0dG9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0cmlnZ2VyLCB7XG4gICAgICBvbkNsaWNrOiBoYW5kbGVCdXR0b25DbGljayxcbiAgICB9KTtcbiAgfSwgW2hhbmRsZUJ1dHRvbkNsaWNrLCB0cmlnZ2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5yZXN0fSBjbGFzc05hbWU9e2N4KHN0eWxlcy5pY29uTWVudSwgY2xhc3NOYW1lKX0+XG4gICAgICB7dHJpZ2dlckJ1dHRvbn1cbiAgICAgIDxNZW51XG4gICAgICAgIGFjdGl2ZT17ISFhY3RpdmV9XG4gICAgICAgIG9uSGlkZT17aGFuZGxlTWVudUhpZGV9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25TaG93PXtvblNob3d9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgcmlwcGxlPXttZW51UmlwcGxlfVxuICAgICAgICBzZWxlY3RhYmxlPXtzZWxlY3RhYmxlfVxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIHNldEFjdGl2ZT17c2V0QWN0aXZlfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkljb25NZW51LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25SaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVudVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ub2RlLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkljb25NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWNvblJpcHBsZTogdHJ1ZSxcbiAgbWVudVJpcHBsZTogdHJ1ZSxcbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgc2VsZWN0YWJsZTogZmFsc2UsXG59O1xuIl19