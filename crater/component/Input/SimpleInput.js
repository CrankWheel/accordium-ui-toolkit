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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    wrapperClassName,
    debounce,
    debounceConfig,
    pill,
    alwaysHighlight,
    error,
    caption
  } = props,
        rest = _objectWithoutProperties(props, ["size", "icon", "innerRef", "className", "wrapperClassName", "debounce", "debounceConfig", "pill", "alwaysHighlight", "error", "caption"]);

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
        [_SimpleInputModule.default.pill]: !!pill,
        [_SimpleInputModule.default.alwaysHighlight]: !error && !!alwaysHighlight,
        [_SimpleInputModule.default.error]: !!error
      })
    }));

    if (debounce) return _react.default.createElement(_DebounceInput.default, _extends({}, inputProps, debounceConfig));
    return _react.default.createElement("input", inputProps);
  }.bind(this), [alwaysHighlight, className, debounce, debounceConfig, error, innerRef, pill, rest, size]);
  if (!icon && !caption) return input;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapperClassName, _SimpleInputModule.default.inputContainer, {
      [_SimpleInputModule.default.inputIconContainer]: !!icon
    })
  }, input, injectedIcon, caption && _react.default.createElement("span", {
    className: (0, _classnames.default)(_SimpleInputModule.default.caption)
  }, caption));
}

SimpleInput.propTypes = {
  className: _propTypes.default.string,
  debounce: _propTypes.default.bool,
  debounceConfig: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  icon: _propTypes.default.node,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  pill: _propTypes.default.bool,
  size: _propTypes.default.string,
  alwaysHighlight: _propTypes.default.bool
};
SimpleInput.defaultProps = {
  debounce: false,
  debounceConfig: {
    debounceTimeout: 300
  },
  pill: false,
  alwaysHighlight: false,
  error: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0lucHV0L1NpbXBsZUlucHV0LmpzIl0sIm5hbWVzIjpbIlNpbXBsZUlucHV0IiwicHJvcHMiLCJzaXplIiwiaWNvbiIsImlubmVyUmVmIiwiY2xhc3NOYW1lIiwid3JhcHBlckNsYXNzTmFtZSIsImRlYm91bmNlIiwiZGVib3VuY2VDb25maWciLCJwaWxsIiwiYWx3YXlzSGlnaGxpZ2h0IiwiZXJyb3IiLCJjYXB0aW9uIiwicmVzdCIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwiaW5wdXQiLCJpbnB1dFByb3BzIiwicmVmIiwic2ltcGxlSW5wdXQiLCJpbmRleE9mIiwiaW5wdXRDb250YWluZXIiLCJpbnB1dEljb25Db250YWluZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib2JqZWN0T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJub2RlIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImRlYm91bmNlVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDekMsUUFBTTtBQUNKQyxJQUFBQSxJQURJO0FBRUpDLElBQUFBLElBRkk7QUFHSkMsSUFBQUEsUUFISTtBQUlKQyxJQUFBQSxTQUpJO0FBS0pDLElBQUFBLGdCQUxJO0FBTUpDLElBQUFBLFFBTkk7QUFPSkMsSUFBQUEsY0FQSTtBQVFKQyxJQUFBQSxJQVJJO0FBU0pDLElBQUFBLGVBVEk7QUFVSkMsSUFBQUEsS0FWSTtBQVdKQyxJQUFBQTtBQVhJLE1BYUZYLEtBYko7QUFBQSxRQVlLWSxJQVpMLDRCQWFJWixLQWJKOztBQWVBLFFBQU1hLFlBQVksR0FBRyxvQkFB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QWUsRUFBRWlCLG1CQUFVRTtBQVJMLENBQXhCO0FBV0E3QixXQUFXLENBQUNvQyxZQUFaLEdBQTJCO0FBQ3pCN0IsRUFBQUEsUUFBUSxFQUFFLEtBRGU7QUFFekJDLEVBQUFBLGNBQWMsRUFBRTtBQUNkNkIsSUFBQUEsZUFBZSxFQUFFO0FBREgsR0FGUztBQUt6QjVCLEVBQUFBLElBQUksRUFBRSxLQUxtQjtBQU16QkMsRUFBQUEsZUFBZSxFQUFFLEtBTlE7QUFPekJDLEVBQUFBLEtBQUssRUFBRTtBQVBrQixDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaW1wbGVJbnB1dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRGVib3VuY2VJbnB1dCBmcm9tICcuL0RlYm91bmNlSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVJbnB1dChwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2l6ZSxcbiAgICBpY29uLFxuICAgIGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZSxcbiAgICB3cmFwcGVyQ2xhc3NOYW1lLFxuICAgIGRlYm91bmNlLFxuICAgIGRlYm91bmNlQ29uZmlnLFxuICAgIHBpbGwsXG4gICAgYWx3YXlzSGlnaGxpZ2h0LFxuICAgIGVycm9yLFxuICAgIGNhcHRpb24sXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaW5qZWN0ZWRJY29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRtcEluamVjdGVkSWNvbjtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdG1wSW5qZWN0ZWRJY29uID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb24pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wSW5qZWN0ZWRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG4gIH0sIFtpY29uXSk7XG5cbiAgY29uc3QgaW5wdXQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgLi4ue1xuICAgICAgICAuLi5yZXN0LFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICBjbGFzc05hbWU6IGN4KGNsYXNzTmFtZSwgc3R5bGVzLnNpbXBsZUlucHV0LCB7XG4gICAgICAgICAgW3N0eWxlc1snaW5wdXQtc20nXV06IFsnc20nLCAnc21hbGwnXS5pbmRleE9mKHNpemUpICE9PSAtMSxcbiAgICAgICAgICBbc3R5bGVzWydpbnB1dC1sZyddXTogWydsZycsICdsYXJnZSddLmluZGV4T2Yoc2l6ZSkgIT09IC0xLFxuICAgICAgICAgIFtzdHlsZXMucGlsbF06ICEhcGlsbCxcbiAgICAgICAgICBbc3R5bGVzLmFsd2F5c0hpZ2hsaWdodF06ICFlcnJvciAmJiAhIWFsd2F5c0hpZ2hsaWdodCxcbiAgICAgICAgICBbc3R5bGVzLmVycm9yXTogISFlcnJvcixcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGRlYm91bmNlKSByZXR1cm4gPERlYm91bmNlSW5wdXQgey4uLmlucHV0UHJvcHN9IHsuLi5kZWJvdW5jZUNvbmZpZ30gLz47XG4gICAgcmV0dXJuIDxpbnB1dCB7Li4uaW5wdXRQcm9wc30gLz47XG4gIH0sIFthbHdheXNIaWdobGlnaHQsIGNsYXNzTmFtZSwgZGVib3VuY2UsIGRlYm91bmNlQ29uZmlnLCBlcnJvciwgaW5uZXJSZWYsIHBpbGwsIHJlc3QsIHNpemVdKTtcblxuICBpZiAoIWljb24gJiYgIWNhcHRpb24pIHJldHVybiBpbnB1dDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCh3cmFwcGVyQ2xhc3NOYW1lLCBzdHlsZXMuaW5wdXRDb250YWluZXIsIHsgW3N0eWxlcy5pbnB1dEljb25Db250YWluZXJdOiAhIWljb24gfSl9PlxuICAgICAge2lucHV0fVxuICAgICAge2luamVjdGVkSWNvbn1cbiAgICAgIHtjYXB0aW9uICYmIDxzcGFuIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNhcHRpb24pfT57Y2FwdGlvbn08L3NwYW4+fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TaW1wbGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVib3VuY2U6IFByb3BUeXBlcy5ib29sLFxuICBkZWJvdW5jZUNvbmZpZzogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgcGlsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsd2F5c0hpZ2hsaWdodDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5TaW1wbGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlYm91bmNlOiBmYWxzZSxcbiAgZGVib3VuY2VDb25maWc6IHtcbiAgICBkZWJvdW5jZVRpbWVvdXQ6IDMwMCxcbiAgfSxcbiAgcGlsbDogZmFsc2UsXG4gIGFsd2F5c0hpZ2hsaWdodDogZmFsc2UsXG4gIGVycm9yOiBmYWxzZSxcbn07XG4iXX0=