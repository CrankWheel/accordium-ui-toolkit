"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDownMenu;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropDownModule = _interopRequireDefault(require("./DropDown.module.scss"));

var _DropDown = _interopRequireDefault(require("./DropDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropDownMenu(props) {
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
    className: (0, _classnames.default)(_DropDownModule.default.dropDownMenu, className)
  }), triggerButton, _react.default.createElement(_DropDown.default, {
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

DropDownMenu.propTypes = {
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
DropDownMenu.defaultProps = {
  className: '',
  iconRipple: true,
  menuRipple: true,
  position: 'auto',
  selectable: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0Ryb3BEb3duL0Ryb3BEb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wRG93bk1lbnUiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaWNvbiIsImljb25SaXBwbGUiLCJpbnZlcnNlIiwibWVudVJpcHBsZSIsIm9uSGlkZSIsIm9uU2VsZWN0Iiwib25TaG93IiwicG9zaXRpb24iLCJzZWxlY3RhYmxlIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwidHJpZ2dlciIsInJlc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVCdXR0b25DbGljayIsImV2ZW50IiwicHJldkFjdGl2ZSIsImhhbmRsZU1lbnVIaWRlIiwidHJpZ2dlckJ1dHRvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiZHJvcERvd25NZW51IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxRQUFNO0FBQ0pDLElBQUFBLFFBREk7QUFFSkMsSUFBQUEsU0FGSTtBQUdKQyxJQUFBQSxJQUhJO0FBSUpDLElBQUFBLFVBSkk7QUFLSkMsSUFBQUEsT0FMSTtBQU1KQyxJQUFBQSxVQU5JO0FBT0pDLElBQUFBLE1BUEk7QUFRSkMsSUFBQUEsUUFSSTtBQVNKQyxJQUFBQSxNQVRJO0FBVUpDLElBQUFBLFFBVkk7QUFXSkMsSUFBQUEsVUFYSTtBQVlKQyxJQUFBQSxRQVpJO0FBYUpDLElBQUFBLE9BYkk7QUFjSkMsSUFBQUE7QUFkSSxNQWdCRmQsS0FoQko7QUFBQSxRQWVLZSxJQWZMLDRCQWdCSWYsS0FoQko7O0FBa0JBLFFBQU0sQ0FBQ2dCLE1BQUQsRUFBU0MsU0FBVCxJQUFzQixxQkFBUyxLQUFULENBQTVCO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsd0JBQ3hCLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBOztBQUNQRixJQUFBQSxTQUFTLENBQUMsVUFBQUcsVUFBVSxFQUFJO0FBQUE7O0FBQ3RCLGFBQU8sQ0FBQ0EsVUFBUjtBQUNELEtBRlEsWUFBVDtBQUdBLFFBQUlQLE9BQUosRUFBYUEsT0FBTyxDQUFDTSxLQUFELENBQVA7QUFDZCxHQU51QixhQU94QixDQUFDTixPQUFELENBUHdCLENBQTFCO0FBVUEsUUFBTVEsY0FBYyxHQUFHLHdCQUFZLFlBQU07QUFBQTs7QUFDdkNKLElBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQSxRQUFJVixNQUFKLEVBQVlBLE1BQU07QUFDbkIsR0FIc0IsYUFHcEIsQ0FBQ0EsTUFBRCxDQUhvQixDQUF2QjtBQUtBLFFBQU1lLGFBQWEsR0FBRyxvQkFBUSxZQUFNO0FBQUE7O0FBQ2xDLFdBQU9DLGVBQU1DLFlBQU4sQ0FBbUJWLE9BQW5CLEVBQTRCO0FBQ2pDRCxNQUFBQSxPQUFPLEVBQUVLO0FBRHdCLEtBQTVCLENBQVA7QUFHRCxHQUpxQixhQUluQixDQUFDQSxpQkFBRCxFQUFvQkosT0FBcEIsQ0FKbUIsQ0FBdEI7QUFNQSxTQUNFLGlEQUFTQyxJQUFUO0FBQWUsSUFBQSxTQUFTLEVBQUUseUJBQUdVLHdCQUFPQyxZQUFWLEVBQXdCeEIsU0FBeEI7QUFBMUIsTUFDR29CLGFBREgsRUFFRSw2QkFBQyxpQkFBRDtBQUNFLElBQUEsTUFBTSxFQUFFLENBQUMsQ0FBQ04sTUFEWjtBQUVFLElBQUEsTUFBTSxFQUFFSyxjQUZWO0FBR0UsSUFBQSxRQUFRLEVBQUViLFFBSFo7QUFJRSxJQUFBLE1BQU0sRUFBRUMsTUFKVjtBQUtFLElBQUEsUUFBUSxFQUFFQyxRQUxaO0FBTUUsSUFBQSxNQUFNLEVBQUVKLFVBTlY7QUFPRSxJQUFBLFVBQVUsRUFBRUssVUFQZDtBQVFFLElBQUEsUUFBUSxFQUFFQyxRQVJaO0FBU0UsSUFBQSxTQUFTLEVBQUVLO0FBVGIsS0FXR2hCLFFBWEgsQ0FGRixDQURGO0FBa0JEOztBQUVERixZQUFZLENBQUM0QixTQUFiLEdBQXlCO0FBQ3ZCMUIsRUFBQUEsUUFBUSxFQUFFMkIsbUJBQVVDLElBREc7QUFFdkIzQixFQUFBQSxTQUFTLEVBQUUwQixtQkFBVUUsTUFGRTtBQUd2QjFCLEVBQUFBLFVBQVUsRUFBRXdCLG1CQUFVRyxJQUhDO0FBSXZCMUIsRUFBQUEsT0FBTyxFQUFFdUIsbUJBQVVHLElBSkk7QUFLdkJ6QixFQUFBQSxVQUFVLEVBQUVzQixtQkFBVUcsSUFMQztBQU12QmxCLEVBQUFBLE9BQU8sRUFBRWUsbUJBQVVJLElBTkk7QUFPdkJ6QixFQUFBQSxNQUFNLEVBQUVxQixtQkFBVUksSUFQSztBQVF2QnhCLEVBQUFBLFFBQVEsRUFBRW9CLG1CQUFVSSxJQVJHO0FBU3ZCdkIsRUFBQUEsTUFBTSxFQUFFbUIsbUJBQVVJLElBVEs7QUFVdkJ0QixFQUFBQSxRQUFRLEVBQUVrQixtQkFBVUUsTUFWRztBQVd2Qm5CLEVBQUFBLFVBQVUsRUFBRWlCLG1CQUFVRyxJQVhDO0FBWXZCbkIsRUFBQUEsUUFBUSxFQUFFZ0IsbUJBQVVDLElBWkc7QUFhdkJmLEVBQUFBLE9BQU8sRUFBRWMsbUJBQVVDO0FBYkksQ0FBekI7QUFnQkE5QixZQUFZLENBQUNrQyxZQUFiLEdBQTRCO0FBQzFCL0IsRUFBQUEsU0FBUyxFQUFFLEVBRGU7QUFFMUJFLEVBQUFBLFVBQVUsRUFBRSxJQUZjO0FBRzFCRSxFQUFBQSxVQUFVLEVBQUUsSUFIYztBQUkxQkksRUFBQUEsUUFBUSxFQUFFLE1BSmdCO0FBSzFCQyxFQUFBQSxVQUFVLEVBQUU7QUFMYyxDQUE1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3BEb3duLm1vZHVsZS5zY3NzJztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuL0Ryb3BEb3duJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcERvd25NZW51KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgaWNvbixcbiAgICBpY29uUmlwcGxlLFxuICAgIGludmVyc2UsXG4gICAgbWVudVJpcHBsZSxcbiAgICBvbkhpZGUsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBvblNlbGVjdCxcbiAgICBvblNob3csXG4gICAgcG9zaXRpb24sXG4gICAgc2VsZWN0YWJsZSxcbiAgICBzZWxlY3RlZCxcbiAgICBvbkNsaWNrLFxuICAgIHRyaWdnZXIsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIHNldEFjdGl2ZShwcmV2QWN0aXZlID0+IHtcbiAgICAgICAgcmV0dXJuICFwcmV2QWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBpZiAob25DbGljaykgb25DbGljayhldmVudCk7XG4gICAgfSxcbiAgICBbb25DbGlja11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVNZW51SGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpO1xuICB9LCBbb25IaWRlXSk7XG5cbiAgY29uc3QgdHJpZ2dlckJ1dHRvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodHJpZ2dlciwge1xuICAgICAgb25DbGljazogaGFuZGxlQnV0dG9uQ2xpY2ssXG4gICAgfSk7XG4gIH0sIFtoYW5kbGVCdXR0b25DbGljaywgdHJpZ2dlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjeChzdHlsZXMuZHJvcERvd25NZW51LCBjbGFzc05hbWUpfT5cbiAgICAgIHt0cmlnZ2VyQnV0dG9ufVxuICAgICAgPERyb3BEb3duXG4gICAgICAgIGFjdGl2ZT17ISFhY3RpdmV9XG4gICAgICAgIG9uSGlkZT17aGFuZGxlTWVudUhpZGV9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25TaG93PXtvblNob3d9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgcmlwcGxlPXttZW51UmlwcGxlfVxuICAgICAgICBzZWxlY3RhYmxlPXtzZWxlY3RhYmxlfVxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIHNldEFjdGl2ZT17c2V0QWN0aXZlfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ecm9wRG93bk1lbnUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICBtZW51UmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TaG93OiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm5vZGUsXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuRHJvcERvd25NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWNvblJpcHBsZTogdHJ1ZSxcbiAgbWVudVJpcHBsZTogdHJ1ZSxcbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgc2VsZWN0YWJsZTogZmFsc2UsXG59O1xuIl19