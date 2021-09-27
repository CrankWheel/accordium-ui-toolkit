"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDownItem;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropDownModule = _interopRequireDefault(require("./DropDown.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropDownItem(props) {
  var _this = this;

  const {
    className,
    caption,
    children,
    disabled,
    icon,
    selected,
    shortcut,
    onClick,
    iconPosition
  } = props,
        others = _objectWithoutProperties(props, ["className", "caption", "children", "disabled", "icon", "selected", "shortcut", "onClick", "iconPosition"]);

  const listClassName = (0, _classnames.default)(_DropDownModule.default.menuItem, {
    [_DropDownModule.default.selected]: selected,
    [_DropDownModule.default.disabled]: disabled
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
      if (iconPosition === 'right') {
        tmpInjectedIcon = _react.default.cloneElement(icon, {
          className: (0, _classnames.default)(icon.props.className, _DropDownModule.default.iconRight)
        });
        return tmpInjectedIcon;
      }

      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _DropDownModule.default.icon)
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }.bind(this), [icon]);

  const listContent = _react.default.createElement(_react.default.Fragment, null, iconPosition === 'right' ? _react.default.createElement("span", {
    className: _DropDownModule.default.caption
  }, caption) : injectedIcon, iconPosition === 'right' ? injectedIcon : _react.default.createElement("span", {
    className: _DropDownModule.default.caption
  }, caption));

  return _react.default.createElement("li", _extends({
    "data-react-toolbox": "menu-item",
    className: listClassName,
    onClick: handleClick
  }, others), listContent, shortcut ? _react.default.createElement("small", {
    className: _DropDownModule.default.shortcut
  }, shortcut) : null, children);
}

DropDownItem.propTypes = {
  iconPosition: _propTypes.default.oneOf(['right', 'left']),
  caption: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onClick: _propTypes.default.func,
  selected: _propTypes.default.bool,
  shortcut: _propTypes.default.string
};
DropDownItem.defaultProps = {
  className: '',
  disabled: false,
  selected: false,
  iconPosition: 'left'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0Ryb3BEb3duL0Ryb3BEb3duSXRlbS5qcyJdLCJuYW1lcyI6WyJEcm9wRG93bkl0ZW0iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNhcHRpb24iLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiaWNvbiIsInNlbGVjdGVkIiwic2hvcnRjdXQiLCJvbkNsaWNrIiwiaWNvblBvc2l0aW9uIiwib3RoZXJzIiwibGlzdENsYXNzTmFtZSIsInN0eWxlcyIsIm1lbnVJdGVtIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiaWNvblJpZ2h0IiwibGlzdENvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsIm5vZGUiLCJib29sIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQzFDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxPQUFiO0FBQXNCQyxJQUFBQSxRQUF0QjtBQUFnQ0MsSUFBQUEsUUFBaEM7QUFBMENDLElBQUFBLElBQTFDO0FBQWdEQyxJQUFBQSxRQUFoRDtBQUEwREMsSUFBQUEsUUFBMUQ7QUFBb0VDLElBQUFBLE9BQXBFO0FBQTZFQyxJQUFBQTtBQUE3RSxNQUF5R1QsS0FBL0c7QUFBQSxRQUFvR1UsTUFBcEcsNEJBQStHVixLQUEvRzs7QUFDQSxRQUFNVyxhQUFhLEdBQUcseUJBQ3BCQyx3QkFBT0MsUUFEYSxFQUVwQjtBQUNFLEtBQUNELHdCQUFPTixRQUFSLEdBQW1CQSxRQURyQjtBQUVFLEtBQUNNLHdCQUFPUixRQUFSLEdBQW1CQTtBQUZy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bnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wRG93bi5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3BEb3duSXRlbShwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2FwdGlvbiwgY2hpbGRyZW4sIGRpc2FibGVkLCBpY29uLCBzZWxlY3RlZCwgc2hvcnRjdXQsIG9uQ2xpY2ssIGljb25Qb3NpdGlvbiwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgY29uc3QgbGlzdENsYXNzTmFtZSA9IGN4KFxuICAgIHN0eWxlcy5tZW51SXRlbSxcbiAgICB7XG4gICAgICBbc3R5bGVzLnNlbGVjdGVkXTogc2VsZWN0ZWQsXG4gICAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQsXG4gICAgfSxcbiAgICBjbGFzc05hbWVcbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChvbkNsaWNrICYmICFkaXNhYmxlZCkge1xuICAgICAgICBvbkNsaWNrKGV2ZW50LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaXNhYmxlZCwgb25DbGlja11cbiAgKTtcblxuICBjb25zdCBpbmplY3RlZEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdG1wSW5qZWN0ZWRJY29uO1xuICAgIGlmIChpY29uKSB7XG4gICAgICBpZiAoaWNvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRtcEluamVjdGVkSWNvbiA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb25SaWdodCksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG1wSW5qZWN0ZWRJY29uO1xuICAgICAgfVxuICAgICAgdG1wSW5qZWN0ZWRJY29uID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb24pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wSW5qZWN0ZWRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIFtpY29uXSk7XG5cbiAgY29uc3QgbGlzdENvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIHtpY29uUG9zaXRpb24gPT09ICdyaWdodCcgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT57Y2FwdGlvbn08L3NwYW4+IDogaW5qZWN0ZWRJY29ufVxuICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGluamVjdGVkSWNvbiA6IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNhcHRpb259PntjYXB0aW9ufTwvc3Bhbj59XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgZGF0YS1yZWFjdC10b29sYm94PVwibWVudS1pdGVtXCIgY2xhc3NOYW1lPXtsaXN0Q2xhc3NOYW1lfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gey4uLm90aGVyc30+XG4gICAgICB7bGlzdENvbnRlbnR9XG4gICAgICB7c2hvcnRjdXQgPyA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcnRjdXR9PntzaG9ydGN1dH08L3NtYWxsPiA6IG51bGx9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKTtcbn1cblxuRHJvcERvd25JdGVtLnByb3BUeXBlcyA9IHtcbiAgaWNvblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydyaWdodCcsICdsZWZ0J10pLFxuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzaG9ydGN1dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkRyb3BEb3duSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxuICBpY29uUG9zaXRpb246ICdsZWZ0Jyxcbn07XG4iXX0=