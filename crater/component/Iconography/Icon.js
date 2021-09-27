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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0ljb25vZ3JhcGh5L0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwic3JjIiwidmVydGljYWxBbGlnbiIsImV4dGVybmFsSWNvbkNsYXNzTmFtZSIsIm90aGVycyIsImlzU3Bpbm5lciIsImluZGV4T2YiLCJpY29uUHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJpY29uIiwiaWNvblNyYyIsInJlbmRlcmVkSWNvbiIsIkljb25zIiwiaGVscCIsImNvbnNvbGUiLCJ3YXJuIiwiaWNvbkNsYXNzTmFtZSIsInNwaW5uZXJTdHlsZXMiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImtleSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInNpemUiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2xDLFFBQU07QUFBRUMsSUFBQUEsR0FBRjtBQUFPQyxJQUFBQSxhQUFQO0FBQXNCQyxJQUFBQTtBQUF0QixNQUEyREgsS0FBakU7QUFBQSxRQUFzREksTUFBdEQsNEJBQWlFSixLQUFqRTs7QUFFQSxRQUFNSyxTQUFTLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLFNBQVosTUFBMkIsQ0FBN0M7QUFFQSxRQUFNQyxTQUFTLEdBQUcseUJBQVdILE1BQVgsRUFBbUI7QUFDbkNJLElBQUFBLFNBQVMsRUFBRSx5QkFBR0MsMkJBQU9DLElBQVYsRUFBZ0JELDJCQUFRLE9BQU0sc0JBQVdQLGFBQVgsQ0FBMEIsRUFBeEMsQ0FBaEI7QUFEd0IsR0FBbkIsQ0FBbEI7QUFJQSxNQUFJUyxPQUFPLEdBQUdWLEdBQWQ7QUFDQSxNQUFJVyxZQUFZLEdBQUdDLEtBQUssQ0FBQ0YsT0FBRCxDQUF4Qjs7QUFFQSxNQUFJLENBQUNDLFlBQUwsRUFBbUI7QUFDakJBLElBQUFBLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxJQUFyQjtBQUNBSCxJQUFBQSxPQUFPLEdBQUcsTUFBVjtBQUNBSSxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxTQUFRZixHQUFJLHNCQUExQjtBQUNEOztBQUVELE1BQUlnQixhQUFhLEdBQUdSLDJCQUFRLE9BQU0sc0JBQVcscUJBQVVFLE9BQVYsQ0FBWCxDQUErQixFQUE3QyxDQUFwQjtBQUNBLE1BQUlOLFNBQUosRUFBZVksYUFBYSxHQUFHQyx1QkFBZSxPQUFNLHNCQUFXLHFCQUFVUCxPQUFWLENBQVgsQ0FBK0IsRUFBcEQsQ0FBaEI7QUFDZixNQUFJUixxQkFBSixFQUEyQmMsYUFBYSxJQUFLLElBQUdkLHFCQUFzQixFQUEzQztBQUMzQixTQUFPLG9DQUFTSSxTQUFULEVBQXFCWSxlQUFNQyxZQUFOLENBQW1CUixZQUFuQixFQUFpQztBQUFFSixJQUFBQSxTQUFTLEVBQUVTLGFBQWI7QUFBNEJJLElBQUFBLEdBQUcsRUFBRVY7QUFBakMsR0FBakMsQ0FBckIsQ0FBUDtBQUNEOztBQUVEWixJQUFJLENBQUN1QixTQUFMLEdBQWlCO0FBQ2ZuQixFQUFBQSxxQkFBcUIsRUFBRW9CLG1CQUFVQyxNQURsQjtBQUVmQyxFQUFBQSxJQUFJLEVBQUVGLG1CQUFVQyxNQUZEO0FBR2Z2QixFQUFBQSxHQUFHLEVBQUVzQixtQkFBVUMsTUFBVixDQUFpQkUsVUFIUDtBQUlmeEIsRUFBQUEsYUFBYSxFQUFFcUIsbUJBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUFoQjtBQUpBLENBQWpCO0FBT0E1QixJQUFJLENBQUM2QixZQUFMLEdBQW9CO0FBQ2xCSCxFQUFBQSxJQUFJLEVBQUUsU0FEWTtBQUVsQnZCLEVBQUFBLGFBQWEsRUFBRTtBQUZHLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBtZXJnZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJztcbmltcG9ydCAqIGFzIEljb25zIGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ljb25vZ3JhcGh5Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBzcGlubmVyU3R5bGVzIGZyb20gJy4vc3Bpbm5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbihwcm9wcykge1xuICBjb25zdCB7IHNyYywgdmVydGljYWxBbGlnbiwgZXh0ZXJuYWxJY29uQ2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzU3Bpbm5lciA9IHNyYy5pbmRleE9mKCdzcGlubmVyJykgPT09IDA7XG5cbiAgY29uc3QgaWNvblByb3BzID0gbWVyZ2VQcm9wcyhvdGhlcnMsIHtcbiAgICBjbGFzc05hbWU6IGN4KHN0eWxlcy5pY29uLCBzdHlsZXNbYGljb24ke2NhcGl0YWxpemUodmVydGljYWxBbGlnbil9YF0pLFxuICB9KTtcblxuICBsZXQgaWNvblNyYyA9IHNyYztcbiAgbGV0IHJlbmRlcmVkSWNvbiA9IEljb25zW2ljb25TcmNdO1xuXG4gIGlmICghcmVuZGVyZWRJY29uKSB7XG4gICAgcmVuZGVyZWRJY29uID0gSWNvbnMuaGVscDtcbiAgICBpY29uU3JjID0gJ2hlbHAnO1xuICAgIGNvbnNvbGUud2FybihgSWNvbiBcIiR7c3JjfVwiIGlzIG5vdCByZWNvZ25pemVkLmApO1xuICB9XG5cbiAgbGV0IGljb25DbGFzc05hbWUgPSBzdHlsZXNbYGljb24ke2NhcGl0YWxpemUoY2FtZWxDYXNlKGljb25TcmMpKX1gXTtcbiAgaWYgKGlzU3Bpbm5lcikgaWNvbkNsYXNzTmFtZSA9IHNwaW5uZXJTdHlsZXNbYGljb24ke2NhcGl0YWxpemUoY2FtZWxDYXNlKGljb25TcmMpKX1gXTtcbiAgaWYgKGV4dGVybmFsSWNvbkNsYXNzTmFtZSkgaWNvbkNsYXNzTmFtZSArPSBgICR7ZXh0ZXJuYWxJY29uQ2xhc3NOYW1lfWA7XG4gIHJldHVybiA8ZGl2IHsuLi5pY29uUHJvcHN9PntSZWFjdC5jbG9uZUVsZW1lbnQocmVuZGVyZWRJY29uLCB7IGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZSwga2V5OiBpY29uU3JjIH0pfTwvZGl2Pjtcbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGV4dGVybmFsSWNvbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ21pZGRsZScsICdiYXNlbGluZSddKSxcbn07XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAnaW5oZXJpdCcsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxufTtcbiJdfQ==