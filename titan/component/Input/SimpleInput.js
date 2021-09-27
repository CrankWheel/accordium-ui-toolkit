"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleInput;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SimpleInputModule = _interopRequireDefault(require("./SimpleInput.module.scss"));

var _DebounceInput = _interopRequireDefault(require("./DebounceInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SimpleInput(props) {
  var _this = this;

  const {
    size,
    icon,
    innerRef,
    className,
    debounce,
    debounceConfig,
    pill
  } = props,
        rest = _objectWithoutProperties(props, ["size", "icon", "innerRef", "className", "debounce", "debounceConfig", "pill"]);

  const injectedIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    let tmpInjectedIcon;

    if (icon) {
      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _SimpleInputModule.default.icon)
      });
      return tmpInjectedIcon;
    } else {
      return icon;
    }
  }.bind(this), [icon]);
  const input = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    const inputProps = _objectSpread({}, _objectSpread({}, rest, {
      ref: innerRef,
      className: (0, _classnames.default)(className, _SimpleInputModule.default.simpleInput, {
        [_SimpleInputModule.default['input-sm']]: ['sm', 'small'].indexOf(size) !== -1,
        [_SimpleInputModule.default['input-lg']]: ['lg', 'large'].indexOf(size) !== -1,
        [_SimpleInputModule.default.pill]: !!pill
      })
    }));

    if (debounce) return _react.default.createElement(_DebounceInput.default, _extends({}, inputProps, debounceConfig));
    return _react.default.createElement("input", inputProps);
  }.bind(this), [className, debounce, debounceConfig, innerRef, pill, rest, size]);
  if (!icon) return input;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_SimpleInputModule.default.inputIconContainer)
  }, input, injectedIcon);
}

SimpleInput.propTypes = {
  className: _propTypes.default.string,
  debounce: _propTypes.default.bool,
  debounceConfig: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  icon: _propTypes.default.string,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  pill: _propTypes.default.bool,
  size: _propTypes.default.string
};
SimpleInput.defaultProps = {
  debounce: false,
  debounceConfig: {
    debounceTimeout: 300
  },
  pill: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvSW5wdXQvU2ltcGxlSW5wdXQuanMiXSwibmFtZXMiOlsiU2ltcGxlSW5wdXQiLCJwcm9wcyIsInNpemUiLCJpY29uIiwiaW5uZXJSZWYiLCJjbGFzc05hbWUiLCJkZWJvdW5jZSIsImRlYm91bmNlQ29uZmlnIiwicGlsbCIsInJlc3QiLCJpbmplY3RlZEljb24iLCJ0bXBJbmplY3RlZEljb24iLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInN0eWxlcyIsImlucHV0IiwiaW5wdXRQcm9wcyIsInJlZiIsInNpbXBsZUlucHV0IiwiaW5kZXhPZiIsImlucHV0SWNvbkNvbnRhaW5lciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJvYmplY3RPZiIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJkZWJvdW5jZVRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDLFFBQU07QUFBRUMsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQSxJQUFSO0FBQWNDLElBQUFBLFFBQWQ7QUFBd0JDLElBQUFBLFNBQXhCO0FBQW1DQyxJQUFBQSxRQUFuQztBQUE2Q0MsSUFBQUEsY0FBN0M7QUFBNkRDLElBQUFBO0FBQTdELE1BQStFUCxLQUFyRjtBQUFBLFFBQTRFUSxJQUE1RSw0QkFBcUZSLEtBQXJGOztBQUVBLFFBQU1TLFlBQVksR0FBRyxvQkFBUSxZQUFNO0FBQUE7O0FBQ2pDLFFBQUlDLGVBQUo7O0FBQ0EsUUFBSVIsSUFBSixFQUFVO0FBQ1JRLE1BQUFBLGVBQWUsR0FBR0MsZUFBTUMsWUFBTixDQUFtQlYsSUFBbkIsRUFBeUI7QUFDekNFLFFBQUFBLFNBQVMsRUFBRSx5QkFBR0YsSUFBSSxDQUFDRixLQUFMLENBQVdJLFNBQWQsRUFBeUJTLDJCQUFPWCxJQUFoQztBQUQ4QixPQUF6QixDQUFsQjtBQUdBLGFBQU9RLGVBQVA7QUFDRCxLQUxELE1BS087QUFDTCxhQUFPUixJQUFQO0FBQ0Q7QUFDRixHQVZvQixhQVVsQixDQUFDQSxJQUFELENBVmtCLENBQXJCO0FBWUEsUUFBTVksS0FBSyxHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDMUIsVUFBTUMsVUFBVSx1Q0FFVFAsSUFGUztBQUdaUSxNQUFBQSxHQUFHLEVBQUViLFFBSE87QUFJWkMsTUFBQUEsU0FBUyxFQUFFLHlCQUFHQSxTQUFILEVBQWNTLDJCQUFPSSxXQUFyQixFQUFrQztBQUMzQyxTQUFDSiwyQkFBTyxVQUFQLENBQUQsR0FBc0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQkssT0FBaEIsQ0FBd0JqQixJQUF4QixNQUFrQyxDQUFDLENBRGQ7QUFFM0MsU0FBQ1ksMkJBQU8sVUFBUCxDQUFELEdBQXNCLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0JLLE9BQWhCLENBQXdCakIsSUFBeEIsTUFBa0MsQ0FBQyxDQUZkO0FBRzNDLFNBQUNZLDJCQUFPTixJQUFSLEdBQWUsQ0FBQyxDQUFDQTtBQUgwQixPQUFsQztBQUpDLE9BQWhCOztBQVdBLFFBQUlGLFFBQUosRUFBYyxPQUFPLDZCQUFDLHNCQUFELGVBQW1CVSxVQUFuQixFQUFtQ1QsY0FBbkMsRUFBUDtBQUNkLFdBQU8sc0NBQVdTLFVBQVgsQ0FBUDtBQUNELEdBZGEsYUFjWCxDQUFDWCxTQUFELEVBQVlDLFFBQVosRUFBc0JDLGNBQXRCLEVBQXNDSCxRQUF0QyxFQUFnREksSUFBaEQsRUFBc0RDLElBQXRELEVBQTREUCxJQUE1RCxDQWRXLENBQWQ7QUFnQkEsTUFBSSxDQUFDQyxJQUFMLEVBQVcsT0FBT1ksS0FBUDtBQUVYLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0QsMkJBQU9NLGtCQUFWO0FBQWhCLEtBQ0dMLEtBREgsRUFFR0wsWUFGSCxDQURGO0FBTUQ7O0FBRURWLFdBQVcsQ0FBQ3FCLFNBQVosR0FBd0I7QUFDdEJoQixFQUFBQSxTQUFTLEVBQUVpQixtQkFBVUMsTUFEQztBQUV0QmpCLEVBQUFBLFFBQVEsRUFBRWdCLG1CQUFVRSxJQUZFO0FBR3RCakIsRUFBQUEsY0FBYyxFQUFFZSxtQkFBVUcsUUFBVixDQUFtQkgsbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSyxNQUE3QixDQUFwQixDQUFuQixDQUhNO0FBSXRCeEIsRUFBQUEsSUFBSSxFQUFFbUIsbUJBQVVDLE1BSk07QUFLdEJuQixFQUFBQSxRQUFRLEVBQUVrQixtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVU0sSUFBWCxFQUFpQk4sbUJBQVVPLE1BQTNCLENBQXBCLENBTFk7QUFNdEJyQixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVRSxJQU5NO0FBT3RCdEIsRUFBQUEsSUFBSSxFQUFFb0IsbUJBQVVDO0FBUE0sQ0FBeEI7QUFVQXZCLFdBQVcsQ0FBQzhCLFlBQVosR0FBMkI7QUFDekJ4QixFQUFBQSxRQUFRLEVBQUUsS0FEZTtBQUV6QkMsRUFBQUEsY0FBYyxFQUFFO0FBQ2R3QixJQUFBQSxlQUFlLEVBQUU7QUFESCxHQUZTO0FBS3pCdkIsRUFBQUEsSUFBSSxFQUFFO0FBTG1CLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpbXBsZUlucHV0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBEZWJvdW5jZUlucHV0IGZyb20gJy4vRGVib3VuY2VJbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZUlucHV0KHByb3BzKSB7XG4gIGNvbnN0IHsgc2l6ZSwgaWNvbiwgaW5uZXJSZWYsIGNsYXNzTmFtZSwgZGVib3VuY2UsIGRlYm91bmNlQ29uZmlnLCBwaWxsLCAuLi5yZXN0IH0gPSBwcm9wcztcblxuICBjb25zdCBpbmplY3RlZEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdG1wSW5qZWN0ZWRJY29uO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0bXBJbmplY3RlZEljb24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6IGN4KGljb24ucHJvcHMuY2xhc3NOYW1lLCBzdHlsZXMuaWNvbiksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXBJbmplY3RlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpY29uO1xuICAgIH1cbiAgfSwgW2ljb25dKTtcblxuICBjb25zdCBpbnB1dCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7XG4gICAgICAuLi57XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCBzdHlsZXMuc2ltcGxlSW5wdXQsIHtcbiAgICAgICAgICBbc3R5bGVzWydpbnB1dC1zbSddXTogWydzbScsICdzbWFsbCddLmluZGV4T2Yoc2l6ZSkgIT09IC0xLFxuICAgICAgICAgIFtzdHlsZXNbJ2lucHV0LWxnJ11dOiBbJ2xnJywgJ2xhcmdlJ10uaW5kZXhPZihzaXplKSAhPT0gLTEsXG4gICAgICAgICAgW3N0eWxlcy5waWxsXTogISFwaWxsLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoZGVib3VuY2UpIHJldHVybiA8RGVib3VuY2VJbnB1dCB7Li4uaW5wdXRQcm9wc30gey4uLmRlYm91bmNlQ29uZmlnfSAvPjtcbiAgICByZXR1cm4gPGlucHV0IHsuLi5pbnB1dFByb3BzfSAvPjtcbiAgfSwgW2NsYXNzTmFtZSwgZGVib3VuY2UsIGRlYm91bmNlQ29uZmlnLCBpbm5lclJlZiwgcGlsbCwgcmVzdCwgc2l6ZV0pO1xuXG4gIGlmICghaWNvbikgcmV0dXJuIGlucHV0O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5pbnB1dEljb25Db250YWluZXIpfT5cbiAgICAgIHtpbnB1dH1cbiAgICAgIHtpbmplY3RlZEljb259XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpbXBsZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWJvdW5jZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRlYm91bmNlQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKSxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHBpbGw6IFByb3BUeXBlcy5ib29sLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuU2ltcGxlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBkZWJvdW5jZTogZmFsc2UsXG4gIGRlYm91bmNlQ29uZmlnOiB7XG4gICAgZGVib3VuY2VUaW1lb3V0OiAzMDAsXG4gIH0sXG4gIHBpbGw6IGZhbHNlLFxufTtcbiJdfQ==