"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconMenu;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  className: '',
  iconRipple: true,
  menuRipple: true,
  position: 'auto',
  selectable: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L01lbnUvSWNvbk1lbnUuanMiXSwibmFtZXMiOlsiSWNvbk1lbnUiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaWNvbiIsImljb25SaXBwbGUiLCJpbnZlcnNlIiwibWVudVJpcHBsZSIsIm9uSGlkZSIsIm9uU2VsZWN0Iiwib25TaG93IiwicG9zaXRpb24iLCJzZWxlY3RhYmxlIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwidHJpZ2dlciIsInJlc3QiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVCdXR0b25DbGljayIsImV2ZW50IiwicHJldkFjdGl2ZSIsImhhbmRsZU1lbnVIaWRlIiwidHJpZ2dlckJ1dHRvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiaWNvbk1lbnUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3RDLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUVKQyxJQUFBQSxTQUZJO0FBR0pDLElBQUFBLElBSEk7QUFJSkMsSUFBQUEsVUFKSTtBQUtKQyxJQUFBQSxPQUxJO0FBTUpDLElBQUFBLFVBTkk7QUFPSkMsSUFBQUEsTUFQSTtBQVFKQyxJQUFBQSxRQVJJO0FBU0pDLElBQUFBLE1BVEk7QUFVSkMsSUFBQUEsUUFWSTtBQVdKQyxJQUFBQSxVQVhJO0FBWUpDLElBQUFBLFFBWkk7QUFhSkMsSUFBQUEsT0FiSTtBQWNKQyxJQUFBQTtBQWRJLE1BZ0JGZCxLQWhCSjtBQUFBLFFBZUtlLElBZkwsNEJBZ0JJZixLQWhCSjs7QUFrQkEsUUFBTSxDQUFDZ0IsTUFBRCxFQUFTQyxTQUFULElBQXNCLHFCQUFTLEtBQVQsQ0FBNUI7QUFFQSxRQUFNQyxpQkFBaUIsR0FBRyx3QkFDeEIsVUFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUE7O0FBQ1BGLElBQUFBLFNBQVMsQ0FBQyxVQUFBRyxVQUFVLEVBQUk7QUFBQTs7QUFDdEIsYUFBTyxDQUFDQSxVQUFSO0FBQ0QsS0FGUSxZQUFUO0FBR0EsUUFBSVAsT0FBSixFQUFhQSxPQUFPLENBQUNNLEtBQUQsQ0FBUDtBQUNkLEdBTnVCLGFBT3hCLENBQUNOLE9BQUQsQ0FQd0IsQ0FBMUI7QUFVQSxRQUFNUSxjQUFjLEdBQUcsd0JBQVksWUFBTTtBQUFBOztBQUN2Q0osSUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBLFFBQUlWLE1BQUosRUFBWUEsTUFBTTtBQUNuQixHQUhzQixhQUdwQixDQUFDQSxNQUFELENBSG9CLENBQXZCO0FBS0EsUUFBTWUsYUFBYSxHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDbEMsV0FBT0MsZUFBTUMsWUFBTixDQUFtQlYsT0FBbkIsRUFBNEI7QUFDakNELE1BQUFBLE9BQU8sRUFBRUs7QUFEd0IsS0FBNUIsQ0FBUDtBQUdELEdBSnFCLGFBSW5CLENBQUNBLGlCQUFELEVBQW9CSixPQUFwQixDQUptQixDQUF0QjtBQU1BLFNBQ0UsaURBQVNDLElBQVQ7QUFBZSxJQUFBLFNBQVMsRUFBRSx5QkFBR1Usb0JBQU9DLFFBQVYsRUFBb0J4QixTQUFwQjtBQUExQixNQUNHb0IsYUFESCxFQUVFLDZCQUFDLGFBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBRSxDQUFDLENBQUNOLE1BRFo7QUFFRSxJQUFBLE1BQU0sRUFBRUssY0FGVjtBQUdFLElBQUEsUUFBUSxFQUFFYixRQUhaO0FBSUUsSUFBQSxNQUFNLEVBQUVDLE1BSlY7QUFLRSxJQUFBLFFBQVEsRUFBRUMsUUFMWjtBQU1FLElBQUEsTUFBTSxFQUFFSixVQU5WO0FBT0UsSUFBQSxVQUFVLEVBQUVLLFVBUGQ7QUFRRSxJQUFBLFFBQVEsRUFBRUMsUUFSWjtBQVNFLElBQUEsU0FBUyxFQUFFSztBQVRiLEtBV0doQixRQVhILENBRkYsQ0FERjtBQWtCRDs7QUFFREYsUUFBUSxDQUFDNEIsU0FBVCxHQUFxQjtBQUNuQjFCLEVBQUFBLFFBQVEsRUFBRTJCLG1CQUFVQyxJQUREO0FBRW5CM0IsRUFBQUEsU0FBUyxFQUFFMEIsbUJBQVVFLE1BRkY7QUFHbkIxQixFQUFBQSxVQUFVLEVBQUV3QixtQkFBVUcsSUFISDtBQUluQjFCLEVBQUFBLE9BQU8sRUFBRXVCLG1CQUFVRyxJQUpBO0FBS25CekIsRUFBQUEsVUFBVSxFQUFFc0IsbUJBQVVHLElBTEg7QUFNbkJsQixFQUFBQSxPQUFPLEVBQUVlLG1CQUFVSSxJQU5BO0FBT25CekIsRUFBQUEsTUFBTSxFQUFFcUIsbUJBQVVJLElBUEM7QUFRbkJ4QixFQUFBQSxRQUFRLEVBQUVvQixtQkFBVUksSUFSRDtBQVNuQnZCLEVBQUFBLE1BQU0sRUFBRW1CLG1CQUFVSSxJQVRDO0FBVW5CdEIsRUFBQUEsUUFBUSxFQUFFa0IsbUJBQVVFLE1BVkQ7QUFXbkJuQixFQUFBQSxVQUFVLEVBQUVpQixtQkFBVUcsSUFYSDtBQVluQm5CLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVQyxJQVpEO0FBYW5CZixFQUFBQSxPQUFPLEVBQUVjLG1CQUFVQztBQWJBLENBQXJCO0FBZ0JBOUIsUUFBUSxDQUFDa0MsWUFBVCxHQUF3QjtBQUN0Qi9CLEVBQUFBLFNBQVMsRUFBRSxFQURXO0FBRXRCRSxFQUFBQSxVQUFVLEVBQUUsSUFGVTtBQUd0QkUsRUFBQUEsVUFBVSxFQUFFLElBSFU7QUFJdEJJLEVBQUFBLFFBQVEsRUFBRSxNQUpZO0FBS3RCQyxFQUFBQSxVQUFVLEVBQUU7QUFMVSxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbk1lbnUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICBpY29uLFxuICAgIGljb25SaXBwbGUsXG4gICAgaW52ZXJzZSxcbiAgICBtZW51UmlwcGxlLFxuICAgIG9uSGlkZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIG9uU2VsZWN0LFxuICAgIG9uU2hvdyxcbiAgICBwb3NpdGlvbixcbiAgICBzZWxlY3RhYmxlLFxuICAgIHNlbGVjdGVkLFxuICAgIG9uQ2xpY2ssXG4gICAgdHJpZ2dlcixcbiAgICAuLi5yZXN0XG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgc2V0QWN0aXZlKHByZXZBY3RpdmUgPT4ge1xuICAgICAgICByZXR1cm4gIXByZXZBY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICB9LFxuICAgIFtvbkNsaWNrXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVIaWRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgaWYgKG9uSGlkZSkgb25IaWRlKCk7XG4gIH0sIFtvbkhpZGVdKTtcblxuICBjb25zdCB0cmlnZ2VyQnV0dG9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0cmlnZ2VyLCB7XG4gICAgICBvbkNsaWNrOiBoYW5kbGVCdXR0b25DbGljayxcbiAgICB9KTtcbiAgfSwgW2hhbmRsZUJ1dHRvbkNsaWNrLCB0cmlnZ2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5yZXN0fSBjbGFzc05hbWU9e2N4KHN0eWxlcy5pY29uTWVudSwgY2xhc3NOYW1lKX0+XG4gICAgICB7dHJpZ2dlckJ1dHRvbn1cbiAgICAgIDxNZW51XG4gICAgICAgIGFjdGl2ZT17ISFhY3RpdmV9XG4gICAgICAgIG9uSGlkZT17aGFuZGxlTWVudUhpZGV9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25TaG93PXtvblNob3d9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgcmlwcGxlPXttZW51UmlwcGxlfVxuICAgICAgICBzZWxlY3RhYmxlPXtzZWxlY3RhYmxlfVxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIHNldEFjdGl2ZT17c2V0QWN0aXZlfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkljb25NZW51LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25SaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVudVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ub2RlLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkljb25NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWNvblJpcHBsZTogdHJ1ZSxcbiAgbWVudVJpcHBsZTogdHJ1ZSxcbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgc2VsZWN0YWJsZTogZmFsc2UsXG59O1xuIl19