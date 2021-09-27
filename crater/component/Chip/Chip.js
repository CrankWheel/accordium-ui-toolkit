"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChipModule = _interopRequireDefault(require("./Chip.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Chip = function Chip(_ref) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  let {
    children,
    className,
    mini,
    large,
    kind,
    bold,
    icon,
    iconPosition
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children", "className", "mini", "large", "kind", "bold", "icon", "iconPosition"]);

  const injectedIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this2);

    let tmpInjectedIcon;

    if (icon) {
      if (iconPosition === 'right') {
        tmpInjectedIcon = _react.default.cloneElement(icon, {
          className: (0, _classnames.default)(icon.props.className, _ChipModule.default.iconRight)
        });
        return tmpInjectedIcon;
      }

      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _ChipModule.default.icon)
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }.bind(this), [icon, iconPosition]);
  const classes = (0, _classnames.default)(_ChipModule.default.chip, _ChipModule.default[kind], {
    [_ChipModule.default.mini]: !!mini,
    [_ChipModule.default.large]: !!large,
    [_ChipModule.default.bold]: !!bold
  }, className);
  const getContent = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this2);

    if (icon) {
      if (typeof children === 'string') {
        return _react.default.createElement(_react.default.Fragment, null, iconPosition === 'right' ? _react.default.createElement("span", null, children) : injectedIcon, iconPosition === 'right' ? injectedIcon : _react.default.createElement("span", null, children));
      }

      return _react.default.createElement(_react.default.Fragment, null, iconPosition === 'right' ? children : injectedIcon, iconPosition === 'right' ? injectedIcon : children);
    }

    return typeof children === 'string' ? _react.default.createElement("span", null, children) : children;
  }.bind(this), [children, icon, iconPosition, injectedIcon]);
  return _react.default.createElement("div", _extends({
    className: classes
  }, other), getContent);
}.bind(void 0);

Chip.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  icon: _propTypes.default.node,
  iconPosition: _propTypes.default.string
};
Chip.defaultProps = {
  className: '',
  iconPosition: 'right'
};
var _default = Chip;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NoaXAvQ2hpcC5qcyJdLCJuYW1lcyI6WyJDaGlwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJtaW5pIiwibGFyZ2UiLCJraW5kIiwiYm9sZCIsImljb24iLCJpY29uUG9zaXRpb24iLCJvdGhlciIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwicHJvcHMiLCJzdHlsZXMiLCJpY29uUmlnaHQiLCJjbGFzc2VzIiwiY2hpcCIsImdldENvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLElBQUksR0FBRyxvQkFBb0Y7QUFBQTs7QUFBQTs7QUFBQSxNQUFuRjtBQUFFQyxJQUFBQSxRQUFGO0FBQVlDLElBQUFBLFNBQVo7QUFBdUJDLElBQUFBLElBQXZCO0FBQTZCQyxJQUFBQSxLQUE3QjtBQUFvQ0MsSUFBQUEsSUFBcEM7QUFBMENDLElBQUFBLElBQTFDO0FBQWdEQyxJQUFBQSxJQUFoRDtBQUFzREMsSUFBQUE7QUFBdEQsR0FBbUY7QUFBQSxNQUFaQyxLQUFZOztBQUMvRixRQUFNQyxZQUFZLEdBQUcsb0JBQVEsWUFBTTtBQUFBOztBQUNqQyxRQUFJQyxlQUFKOztBQUNBLFFBQUlKLElBQUosRUFBVTtBQUNSLFVBQUlDLFlBQVksS0FBSyxPQUFyQixFQUE4QjtBQUM1QkcsUUFBQUEsZUFBZSxHQUFHQyxlQUFNQyxZQUFOLENBQW1CTixJQUFuQixFQUF5QjtBQUN6Q0wsVUFBQUEsU0FBUyxFQUFFLHlCQUFHSyxJQUFJLENBQUNPLEtBQUwsQ0FBV1osU0FBZCxFQUF5QmEsb0JBQU9DLFNBQWhDO0FBRDhCLFNBQXpCLENBQWxCO0FBR0EsZUFBT0wsZUFBUDtBQUNEOztBQUNEQSxNQUFBQSxlQUFlLEdBQUdDLGVBQU1DLFlBQU4sQ0FBbUJOLElBQW5CLEVBQXlCO0FBQ3pDTCxRQUFBQSxTQUFTLEVBQUUseUJBQUdLLElBQUksQ0FBQ08sS0FBTCxDQUFXWixTQUFkLEVBQXlCYSxvQkFBT1IsSUFBaEM7QUFEOEIsT0FBekIsQ0FBbEI7QUFHQSxhQUFPSSxlQUFQO0FBQ0QsS0FYRCxNQVdPO0FBQ0wsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQWhCb0IsYUFnQmxCLENBQUNKLElBQUQsRUFBT0MsWUFBUCxDQWhCa0IsQ0FBckI7QUFrQkEsUUFBTVMsT0FBTyxHQUFHLHlCQUNkRixvQkFBT0csSUFETyxFQUVkSCxvQkFBT1YsSUFBUCxDQUZjLEVBR2Q7QUFDRSxLQUFDVSxvQkFBT1osSUFBUixHQUFlLENBQUMsQ0FBQ0EsSUFEbkI7QUFFRSxLQUFDWSxvQkFBT1gsS0FBUixHQUFnQixDQUFDLENBQUNBLEtBRnBCO0FBR0UsS0FBQ1csb0JBQU9ULElBQVIsR0FBZSxDQUFDLENBQUNBO0FBSG5CLEdBSGMsRUFRZEosU0FSYyxDQUFoQjtBQVdBLFFBQU1pQixVQUFVLEdBQUcsb0JBQVEsWUFBTTtBQUFBOztBQUMvQixRQUFJWixJQUFKLEVBQVU7QUFDUixVQUFJLE9BQU9OLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsZUFDRSw0REFDR08sWUFBWSxLQUFLLE9BQWpCLEdBQTJCLDJDQUFPUCxRQUFQLENBQTNCLEdBQXFEUyxZQUR4RCxFQUVHRixZQUFZLEtBQUssT0FBakIsR0FBMkJFLFlBQTNCLEdBQTBDLDJDQUFPVCxRQUFQLENBRjdDLENBREY7QUFNRDs7QUFDRCxhQUNFLDREQUNHTyxZQUFZLEtBQUssT0FBakIsR0FBMkJQLFFBQTNCLEdBQXNDUyxZQUR6QyxFQUVHRixZQUFZLEtBQUssT0FBakIsR0FBMkJFLFlBQTNCLEdBQTBDVCxRQUY3QyxDQURGO0FBTUQ7O0FBQ0QsV0FBTyxPQUFPQSxRQUFQLEtBQW9CLFFBQXBCLEdBQStCLDJDQUFPQSxRQUFQLENBQS9CLEdBQXlEQSxRQUFoRTtBQUNELEdBbEJrQixhQWtCaEIsQ0FBQ0EsUUFBRCxFQUFXTSxJQUFYLEVBQWlCQyxZQUFqQixFQUErQkUsWUFBL0IsQ0FsQmdCLENBQW5CO0FBb0JBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRU87QUFBaEIsS0FBNkJSLEtBQTdCLEdBQ0dVLFVBREgsQ0FERjtBQUtELENBdkRTLGFBQVY7O0FBeURBbkIsSUFBSSxDQUFDb0IsU0FBTCxHQUFpQjtBQUNmbkIsRUFBQUEsUUFBUSxFQUFFb0IsbUJBQVVDLElBREw7QUFFZnBCLEVBQUFBLFNBQVMsRUFBRW1CLG1CQUFVRSxNQUZOO0FBR2ZoQixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVQyxJQUhEO0FBSWZkLEVBQUFBLFlBQVksRUFBRWEsbUJBQVVFO0FBSlQsQ0FBakI7QUFPQXZCLElBQUksQ0FBQ3dCLFlBQUwsR0FBb0I7QUFDbEJ0QixFQUFBQSxTQUFTLEVBQUUsRUFETztBQUVsQk0sRUFBQUEsWUFBWSxFQUFFO0FBRkksQ0FBcEI7ZUFLZVIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGlwLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2hpcCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG1pbmksIGxhcmdlLCBraW5kLCBib2xkLCBpY29uLCBpY29uUG9zaXRpb24sIC4uLm90aGVyIH0pID0+IHtcbiAgY29uc3QgaW5qZWN0ZWRJY29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRtcEluamVjdGVkSWNvbjtcbiAgICBpZiAoaWNvbikge1xuICAgICAgaWYgKGljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0bXBJbmplY3RlZEljb24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3goaWNvbi5wcm9wcy5jbGFzc05hbWUsIHN0eWxlcy5pY29uUmlnaHQpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRtcEluamVjdGVkSWNvbjtcbiAgICAgIH1cbiAgICAgIHRtcEluamVjdGVkSWNvbiA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goaWNvbi5wcm9wcy5jbGFzc05hbWUsIHN0eWxlcy5pY29uKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRtcEluamVjdGVkSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCBbaWNvbiwgaWNvblBvc2l0aW9uXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IGN4KFxuICAgIHN0eWxlcy5jaGlwLFxuICAgIHN0eWxlc1traW5kXSxcbiAgICB7XG4gICAgICBbc3R5bGVzLm1pbmldOiAhIW1pbmksXG4gICAgICBbc3R5bGVzLmxhcmdlXTogISFsYXJnZSxcbiAgICAgIFtzdHlsZXMuYm9sZF06ICEhYm9sZCxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuXG4gIGNvbnN0IGdldENvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaWNvbikge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IDxzcGFuPntjaGlsZHJlbn08L3NwYW4+IDogaW5qZWN0ZWRJY29ufVxuICAgICAgICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGluamVjdGVkSWNvbiA6IDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aWNvblBvc2l0aW9uID09PSAncmlnaHQnID8gY2hpbGRyZW4gOiBpbmplY3RlZEljb259XG4gICAgICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGluamVjdGVkSWNvbiA6IGNoaWxkcmVufVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj4gOiBjaGlsZHJlbjtcbiAgfSwgW2NoaWxkcmVuLCBpY29uLCBpY29uUG9zaXRpb24sIGluamVjdGVkSWNvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcn0+XG4gICAgICB7Z2V0Q29udGVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNoaXAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIGljb25Qb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNoaXAuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBpY29uUG9zaXRpb246ICdyaWdodCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGlwO1xuIl19