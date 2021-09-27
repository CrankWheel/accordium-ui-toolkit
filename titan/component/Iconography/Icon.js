"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icon;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../util/helpers");

var Icons = _interopRequireWildcard(require("./icons"));

var _iconographyModule = _interopRequireDefault(require("./iconography.module.scss"));

var _spinnerModule = _interopRequireDefault(require("./spinner.module.scss"));

var _util = require("../../util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Icon(props) {
  const {
    src,
    verticalAlign,
    externalIconClassName
  } = props,
        others = _objectWithoutProperties(props, ["src", "verticalAlign", "externalIconClassName"]);

  const isSpinner = src.indexOf('spinner') === 0;
  const iconProps = (0, _helpers.mergeProps)(others, {
    className: (0, _classnames.default)(_iconographyModule.default.icon, _iconographyModule.default[`icon${(0, _util.capitalize)(verticalAlign)}`])
  });
  let iconSrc = src;
  let renderedIcon = Icons[iconSrc];

  if (!renderedIcon) {
    renderedIcon = Icons.help;
    iconSrc = 'help';
    console.warn(`Icon "${src}" is not recognized.`);
  }

  let iconClassName = _iconographyModule.default[`icon${(0, _util.capitalize)((0, _util.camelCase)(iconSrc))}`];
  if (isSpinner) iconClassName = _spinnerModule.default[`icon${(0, _util.capitalize)((0, _util.camelCase)(iconSrc))}`];
  if (externalIconClassName) iconClassName += ` ${externalIconClassName}`;
  return _react.default.createElement("div", iconProps, _react.default.cloneElement(renderedIcon, {
    className: iconClassName,
    key: iconSrc
  }));
}

Icon.propTypes = {
  externalIconClassName: _propTypes.default.string,
  size: _propTypes.default.string,
  src: _propTypes.default.string.isRequired,
  verticalAlign: _propTypes.default.oneOf(['middle', 'baseline'])
};
Icon.defaultProps = {
  size: 'inherit',
  verticalAlign: 'middle'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvSWNvbm9ncmFwaHkvSWNvbi5qcyJdLCJuYW1lcyI6WyJJY29uIiwicHJvcHMiLCJzcmMiLCJ2ZXJ0aWNhbEFsaWduIiwiZXh0ZXJuYWxJY29uQ2xhc3NOYW1lIiwib3RoZXJzIiwiaXNTcGlubmVyIiwiaW5kZXhPZiIsImljb25Qcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlcyIsImljb24iLCJpY29uU3JjIiwicmVuZGVyZWRJY29uIiwiSWNvbnMiLCJoZWxwIiwiY29uc29sZSIsIndhcm4iLCJpY29uQ2xhc3NOYW1lIiwic3Bpbm5lclN0eWxlcyIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwia2V5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwic2l6ZSIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbEMsUUFBTTtBQUFFQyxJQUFBQSxHQUFGO0FBQU9DLElBQUFBLGFBQVA7QUFBc0JDLElBQUFBO0FBQXRCLE1BQTJESCxLQUFqRTtBQUFBLFFBQXNESSxNQUF0RCw0QkFBaUVKLEtBQWpFOztBQUVBLFFBQU1LLFNBQVMsR0FBR0osR0FBRyxDQUFDSyxPQUFKLENBQVksU0FBWixNQUEyQixDQUE3QztBQUVBLFFBQU1DLFNBQVMsR0FBRyx5QkFBV0gsTUFBWCxFQUFtQjtBQUNuQ0ksSUFBQUEsU0FBUyxFQUFFLHlCQUFHQywyQkFBT0MsSUFBVixFQUFnQkQsMkJBQVEsT0FBTSxzQkFBV1AsYUFBWCxDQUEwQixFQUF4QyxDQUFoQjtBQUR3QixHQUFuQixDQUFsQjtBQUlBLE1BQUlTLE9BQU8sR0FBR1YsR0FBZDtBQUNBLE1BQUlXLFlBQVksR0FBR0MsS0FBSyxDQUFDRixPQUFELENBQXhCOztBQUVBLE1BQUksQ0FBQ0MsWUFBTCxFQUFtQjtBQUNqQkEsSUFBQUEsWUFBWSxHQUFHQyxLQUFLLENBQUNDLElBQXJCO0FBQ0FILElBQUFBLE9BQU8sR0FBRyxNQUFWO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLFNBQVFmLEdBQUksc0JBQTFCO0FBQ0Q7O0FBRUQsTUFBSWdCLGFBQWEsR0FBR1IsMkJBQVEsT0FBTSxzQkFBVyxxQkFBVUUsT0FBVixDQUFYLENBQStCLEVBQTdDLENBQXBCO0FBQ0EsTUFBSU4sU0FBSixFQUFlWSxhQUFhLEdBQUdDLHVCQUFlLE9BQU0sc0JBQVcscUJBQVVQLE9BQVYsQ0FBWCxDQUErQixFQUFwRCxDQUFoQjtBQUNmLE1BQUlSLHFCQUFKLEVBQTJCYyxhQUFhLElBQUssSUFBR2QscUJBQXNCLEVBQTNDO0FBQzNCLFNBQU8sb0NBQVNJLFNBQVQsRUFBcUJZLGVBQU1DLFlBQU4sQ0FBbUJSLFlBQW5CLEVBQWlDO0FBQUVKLElBQUFBLFNBQVMsRUFBRVMsYUFBYjtBQUE0QkksSUFBQUEsR0FBRyxFQUFFVjtBQUFqQyxHQUFqQyxDQUFyQixDQUFQO0FBQ0Q7O0FBRURaLElBQUksQ0FBQ3VCLFNBQUwsR0FBaUI7QUFDZm5CLEVBQUFBLHFCQUFxQixFQUFFb0IsbUJBQVVDLE1BRGxCO0FBRWZDLEVBQUFBLElBQUksRUFBRUYsbUJBQVVDLE1BRkQ7QUFHZnZCLEVBQUFBLEdBQUcsRUFBRXNCLG1CQUFVQyxNQUFWLENBQWlCRSxVQUhQO0FBSWZ4QixFQUFBQSxhQUFhLEVBQUVxQixtQkFBVUksS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxVQUFYLENBQWhCO0FBSkEsQ0FBakI7QUFPQTVCLElBQUksQ0FBQzZCLFlBQUwsR0FBb0I7QUFDbEJILEVBQUFBLElBQUksRUFBRSxTQURZO0FBRWxCdkIsRUFBQUEsYUFBYSxFQUFFO0FBRkcsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaWNvbm9ncmFwaHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHNwaW5uZXJTdHlsZXMgZnJvbSAnLi9zcGlubmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGNhbWVsQ2FzZSwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHByb3BzKSB7XG4gIGNvbnN0IHsgc3JjLCB2ZXJ0aWNhbEFsaWduLCBleHRlcm5hbEljb25DbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNTcGlubmVyID0gc3JjLmluZGV4T2YoJ3NwaW5uZXInKSA9PT0gMDtcblxuICBjb25zdCBpY29uUHJvcHMgPSBtZXJnZVByb3BzKG90aGVycywge1xuICAgIGNsYXNzTmFtZTogY3goc3R5bGVzLmljb24sIHN0eWxlc1tgaWNvbiR7Y2FwaXRhbGl6ZSh2ZXJ0aWNhbEFsaWduKX1gXSksXG4gIH0pO1xuXG4gIGxldCBpY29uU3JjID0gc3JjO1xuICBsZXQgcmVuZGVyZWRJY29uID0gSWNvbnNbaWNvblNyY107XG5cbiAgaWYgKCFyZW5kZXJlZEljb24pIHtcbiAgICByZW5kZXJlZEljb24gPSBJY29ucy5oZWxwO1xuICAgIGljb25TcmMgPSAnaGVscCc7XG4gICAgY29uc29sZS53YXJuKGBJY29uIFwiJHtzcmN9XCIgaXMgbm90IHJlY29nbml6ZWQuYCk7XG4gIH1cblxuICBsZXQgaWNvbkNsYXNzTmFtZSA9IHN0eWxlc1tgaWNvbiR7Y2FwaXRhbGl6ZShjYW1lbENhc2UoaWNvblNyYykpfWBdO1xuICBpZiAoaXNTcGlubmVyKSBpY29uQ2xhc3NOYW1lID0gc3Bpbm5lclN0eWxlc1tgaWNvbiR7Y2FwaXRhbGl6ZShjYW1lbENhc2UoaWNvblNyYykpfWBdO1xuICBpZiAoZXh0ZXJuYWxJY29uQ2xhc3NOYW1lKSBpY29uQ2xhc3NOYW1lICs9IGAgJHtleHRlcm5hbEljb25DbGFzc05hbWV9YDtcbiAgcmV0dXJuIDxkaXYgey4uLmljb25Qcm9wc30+e1JlYWN0LmNsb25lRWxlbWVudChyZW5kZXJlZEljb24sIHsgY2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lLCBrZXk6IGljb25TcmMgfSl9PC9kaXY+O1xufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgZXh0ZXJuYWxJY29uQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbWlkZGxlJywgJ2Jhc2VsaW5lJ10pLFxufTtcblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6ICdpbmhlcml0JyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG59O1xuIl19