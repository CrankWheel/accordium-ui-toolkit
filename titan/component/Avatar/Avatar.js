"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _avatarModule = _interopRequireDefault(require("./avatar.module.scss"));

var _util = require("../../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Avatar(_ref) {
  var _this = this;

  let {
    alt,
    children,
    className,
    cover,
    icon,
    svg,
    image,
    title
  } = _ref,
      other = _objectWithoutProperties(_ref, ["alt", "children", "className", "cover", "icon", "svg", "image", "title"]);

  const styledIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    if (icon) {
      return _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _avatarModule.default.normalizedIcon)
      });
    }

    return icon;
  }.bind(this), [icon]);
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(_avatarModule.default.avatar, {
      [_avatarModule.default.imageExist]: image && typeof image === 'string'
    }, className)
  }, other), children, cover && typeof image === 'string' && _react.default.createElement("span", {
    "aria-label": alt,
    className: _avatarModule.default.image,
    style: {
      backgroundImage: `url(${image})`
    }
  }), !cover && (typeof image === 'string' ? _react.default.createElement("img", {
    alt: alt,
    className: _avatarModule.default.image,
    src: image,
    title: title
  }) : image), styledIcon, svg, title ? _react.default.createElement("span", {
    className: _avatarModule.default.letter
  }, (0, _util.getInitials)(title)) : null);
}

Avatar.propTypes = {
  alt: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  cover: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element]),
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  svg: _propTypes.default.element,
  title: _propTypes.default.string
};
Avatar.defaultProps = {
  alt: '',
  cover: false
};
var _default = Avatar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQXZhdGFyL0F2YXRhci5qcyJdLCJuYW1lcyI6WyJBdmF0YXIiLCJhbHQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvdmVyIiwiaWNvbiIsInN2ZyIsImltYWdlIiwidGl0bGUiLCJvdGhlciIsInN0eWxlZEljb24iLCJSZWFjdCIsImNsb25lRWxlbWVudCIsInByb3BzIiwic3R5bGVzIiwibm9ybWFsaXplZEljb24iLCJhdmF0YXIiLCJpbWFnZUV4aXN0IiwiYmFja2dyb3VuZEltYWdlIiwibGV0dGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImJvb2wiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxNQUFULE9BQXdGO0FBQUE7O0FBQUEsTUFBeEU7QUFBRUMsSUFBQUEsR0FBRjtBQUFPQyxJQUFBQSxRQUFQO0FBQWlCQyxJQUFBQSxTQUFqQjtBQUE0QkMsSUFBQUEsS0FBNUI7QUFBbUNDLElBQUFBLElBQW5DO0FBQXlDQyxJQUFBQSxHQUF6QztBQUE4Q0MsSUFBQUEsS0FBOUM7QUFBcURDLElBQUFBO0FBQXJELEdBQXdFO0FBQUEsTUFBVEMsS0FBUzs7QUFDdEYsUUFBTUMsVUFBVSxHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDL0IsUUFBSUwsSUFBSixFQUFVO0FBQ1IsYUFBT00sZUFBTUMsWUFBTixDQUFtQlAsSUFBbkIsRUFBeUI7QUFDOUJGLFFBQUFBLFNBQVMsRUFBRSx5QkFBR0UsSUFBSSxDQUFDUSxLQUFMLENBQVdWLFNBQWQsRUFBeUJXLHNCQUFPQyxjQUFoQztBQURtQixPQUF6QixDQUFQO0FBR0Q7O0FBQ0QsV0FBT1YsSUFBUDtBQUNELEdBUGtCLGFBT2hCLENBQUNBLElBQUQsQ0FQZ0IsQ0FBbkI7QUFTQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdTLHNCQUFPRSxNQUFWLEVBQWtCO0FBQUUsT0FBQ0Ysc0JBQU9HLFVBQVIsR0FBcUJWLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCO0FBQWpELEtBQWxCLEVBQStFSixTQUEvRTtBQUFoQixLQUErR00sS0FBL0csR0FDR1AsUUFESCxFQUVHRSxLQUFLLElBQUksT0FBT0csS0FBUCxLQUFpQixRQUExQixJQUNDO0FBQU0sa0JBQVlOLEdBQWxCO0FBQXVCLElBQUEsU0FBUyxFQUFFYSxzQkFBT1AsS0FBekM7QUFBZ0QsSUFBQSxLQUFLLEVBQUU7QUFBRVcsTUFBQUEsZUFBZSxFQUFHLE9BQU1YLEtBQU07QUFBaEM7QUFBdkQsSUFISixFQUtHLENBQUNILEtBQUQsS0FBVyxPQUFPRyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCO0FBQUssSUFBQSxHQUFHLEVBQUVOLEdBQVY7QUFBZSxJQUFBLFNBQVMsRUFBRWEsc0JBQU9QLEtBQWpDO0FBQXdDLElBQUEsR0FBRyxFQUFFQSxLQUE3QztBQUFvRCxJQUFBLEtBQUssRUFBRUM7QUFBM0QsSUFBNUIsR0FBbUdELEtBQTlHLENBTEgsRUFNR0csVUFOSCxFQU9HSixHQVBILEVBUUdFLEtBQUssR0FBRztBQUFNLElBQUEsU0FBUyxFQUFFTSxzQkFBT0s7QUFBeEIsS0FBaUMsdUJBQVlYLEtBQVosQ0FBakMsQ0FBSCxHQUFpRSxJQVJ6RSxDQURGO0FBWUQ7O0FBRURSLE1BQU0sQ0FBQ29CLFNBQVAsR0FBbUI7QUFDakJuQixFQUFBQSxHQUFHLEVBQUVvQixtQkFBVUMsTUFERTtBQUVqQnBCLEVBQUFBLFFBQVEsRUFBRW1CLG1CQUFVRSxJQUZIO0FBR2pCcEIsRUFBQUEsU0FBUyxFQUFFa0IsbUJBQVVDLE1BSEo7QUFJakJsQixFQUFBQSxLQUFLLEVBQUVpQixtQkFBVUcsSUFKQTtBQUtqQm5CLEVBQUFBLElBQUksRUFBRWdCLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVRSxJQUFYLEVBQWlCRixtQkFBVUssT0FBM0IsQ0FBcEIsQ0FMVztBQU1qQm5CLEVBQUFBLEtBQUssRUFBRWMsbUJBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSyxPQUE3QixDQUFwQixDQU5VO0FBT2pCcEIsRUFBQUEsR0FBRyxFQUFFZSxtQkFBVUssT0FQRTtBQVFqQmxCLEVBQUFBLEtBQUssRUFBRWEsbUJBQVVDO0FBUkEsQ0FBbkI7QUFXQXRCLE1BQU0sQ0FBQzJCLFlBQVAsR0FBc0I7QUFDcEIxQixFQUFBQSxHQUFHLEVBQUUsRUFEZTtBQUVwQkcsRUFBQUEsS0FBSyxFQUFFO0FBRmEsQ0FBdEI7ZUFLZUosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdmF0YXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbHMgfSBmcm9tICcuLi8uLi91dGlsJztcblxuZnVuY3Rpb24gQXZhdGFyKHsgYWx0LCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjb3ZlciwgaWNvbiwgc3ZnLCBpbWFnZSwgdGl0bGUsIC4uLm90aGVyIH0pIHtcbiAgY29uc3Qgc3R5bGVkSWNvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpY29uKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLm5vcm1hbGl6ZWRJY29uKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbjtcbiAgfSwgW2ljb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYXZhdGFyLCB7IFtzdHlsZXMuaW1hZ2VFeGlzdF06IGltYWdlICYmIHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycgfSwgY2xhc3NOYW1lKX0gey4uLm90aGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtjb3ZlciAmJiB0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnICYmIChcbiAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD17YWx0fSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX0gLz5cbiAgICAgICl9XG4gICAgICB7IWNvdmVyICYmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnID8gPGltZyBhbHQ9e2FsdH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IHRpdGxlPXt0aXRsZX0gLz4gOiBpbWFnZSl9XG4gICAgICB7c3R5bGVkSWNvbn1cbiAgICAgIHtzdmd9XG4gICAgICB7dGl0bGUgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sZXR0ZXJ9PntnZXRJbml0aWFscyh0aXRsZSl9PC9zcGFuPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGltYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBzdmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkF2YXRhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGNvdmVyOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdfQ==