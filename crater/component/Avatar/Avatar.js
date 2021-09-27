"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Avatar;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _avatarModule = _interopRequireDefault(require("./avatar.module.scss"));

var _util = require("../../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    title,
    small,
    large
  } = _ref,
      other = _objectWithoutProperties(_ref, ["alt", "children", "className", "cover", "icon", "svg", "image", "title", "small", "large"]);

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
      [_avatarModule.default.imageExist]: image && typeof image === 'string',
      [_avatarModule.default.largeAvatar]: large,
      [_avatarModule.default.smallAvatar]: small
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
  title: _propTypes.default.string,
  small: _propTypes.default.bool,
  large: _propTypes.default.bool
};
Avatar.defaultProps = {
  alt: '',
  cover: false,
  small: false,
  large: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0F2YXRhci9BdmF0YXIuanMiXSwibmFtZXMiOlsiQXZhdGFyIiwiYWx0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb3ZlciIsImljb24iLCJzdmciLCJpbWFnZSIsInRpdGxlIiwic21hbGwiLCJsYXJnZSIsIm90aGVyIiwic3R5bGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwicHJvcHMiLCJzdHlsZXMiLCJub3JtYWxpemVkSWNvbiIsImF2YXRhciIsImltYWdlRXhpc3QiLCJsYXJnZUF2YXRhciIsInNtYWxsQXZhdGFyIiwiYmFja2dyb3VuZEltYWdlIiwibGV0dGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImJvb2wiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxNQUFULE9BQXNHO0FBQUE7O0FBQUEsTUFBdEY7QUFBRUMsSUFBQUEsR0FBRjtBQUFPQyxJQUFBQSxRQUFQO0FBQWlCQyxJQUFBQSxTQUFqQjtBQUE0QkMsSUFBQUEsS0FBNUI7QUFBbUNDLElBQUFBLElBQW5DO0FBQXlDQyxJQUFBQSxHQUF6QztBQUE4Q0MsSUFBQUEsS0FBOUM7QUFBcURDLElBQUFBLEtBQXJEO0FBQTREQyxJQUFBQSxLQUE1RDtBQUFtRUMsSUFBQUE7QUFBbkUsR0FBc0Y7QUFBQSxNQUFUQyxLQUFTOztBQUNuSCxRQUFNQyxVQUFVLEdBQUcsb0JBQVEsWUFBTTtBQUFBOztBQUMvQixRQUFJUCxJQUFKLEVBQVU7QUFDUixhQUFPUSxlQUFNQyxZQUFOLENBQW1CVCxJQUFuQixFQUF5QjtBQUM5QkYsUUFBQUEsU0FBUyxFQUFFLHlCQUFHRSxJQUFJLENBQUNVLEtBQUwsQ0FBV1osU0FBZCxFQUF5QmEsc0JBQU9DLGNBQWhDO0FBRG1CLE9BQXpCLENBQVA7QUFHRDs7QUFDRCxXQUFPWixJQUFQO0FBQ0QsR0FQa0IsYUFPaEIsQ0FBQ0EsSUFBRCxDQVBnQixDQUFuQjtBQVNBLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSx5QkFDVFcsc0JBQU9FLE1BREUsRUFFVDtBQUFFLE9BQUNGLHNCQUFPRyxVQUFSLEdBQXFCWixLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFqRDtBQUEyRCxPQUFDUyxzQkFBT0ksV0FBUixHQUFzQlYsS0FBakY7QUFBd0YsT0FBQ00sc0JBQU9LLFdBQVIsR0FBc0JaO0FBQTlHLEtBRlMsRUFHVE4sU0FIUztBQURiLEtBTU1RLEtBTk4sR0FRR1QsUUFSSCxFQVNHRSxLQUFLLElBQUksT0FBT0csS0FBUCxLQUFpQixRQUExQixJQUNDO0FBQU0sa0JBQVlOLEdBQWxCO0FBQXVCLElBQUEsU0FBUyxFQUFFZSxzQkFBT1QsS0FBekM7QUFBZ0QsSUFBQSxLQUFLLEVBQUU7QUFBRWUsTUFBQUEsZUFBZSxFQUFHLE9BQU1mLEtBQU07QUFBaEM7QUFBdkQsSUFWSixFQVlHLENBQUNILEtBQUQsS0FBVyxPQUFPRyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCO0FBQUssSUFBQSxHQUFHLEVBQUVOLEdBQVY7QUFBZSxJQUFBLFNBQVMsRUFBRWUsc0JBQU9ULEtBQWpDO0FBQXdDLElBQUEsR0FBRyxFQUFFQSxLQUE3QztBQUFvRCxJQUFBLEtBQUssRUFBRUM7QUFBM0QsSUFBNUIsR0FBbUdELEtBQTlHLENBWkgsRUFhR0ssVUFiSCxFQWNHTixHQWRILEVBZUdFLEtBQUssR0FBRztBQUFNLElBQUEsU0FBUyxFQUFFUSxzQkFBT087QUFBeEIsS0FBaUMsdUJBQVlmLEtBQVosQ0FBakMsQ0FBSCxHQUFpRSxJQWZ6RSxDQURGO0FBbUJEOztBQUVEUixNQUFNLENBQUN3QixTQUFQLEdBQW1CO0FBQ2pCdkIsRUFBQUEsR0FBRyxFQUFFd0IsbUJBQVVDLE1BREU7QUFFakJ4QixFQUFBQSxRQUFRLEVBQUV1QixtQkFBVUUsSUFGSDtBQUdqQnhCLEVBQUFBLFNBQVMsRUFBRXNCLG1CQUFVQyxNQUhKO0FBSWpCdEIsRUFBQUEsS0FBSyxFQUFFcUIsbUJBQVVHLElBSkE7QUFLakJ2QixFQUFBQSxJQUFJLEVBQUVvQixtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUUsSUFBWCxFQUFpQkYsbUJBQVVLLE9BQTNCLENBQXBCLENBTFc7QUFNakJ2QixFQUFBQSxLQUFLLEVBQUVrQixtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVLLE9BQTdCLENBQXBCLENBTlU7QUFPakJ4QixFQUFBQSxHQUFHLEVBQUVtQixtQkFBVUssT0FQRTtBQVFqQnRCLEVBQUFBLEtBQUssRUFBRWlCLG1CQUFVQyxNQVJBO0FBU2pCakIsRUFBQUEsS0FBSyxFQUFFZ0IsbUJBQVVHLElBVEE7QUFVakJsQixFQUFBQSxLQUFLLEVBQUVlLG1CQUFVRztBQVZBLENBQW5CO0FBYUE1QixNQUFNLENBQUMrQixZQUFQLEdBQXNCO0FBQ3BCOUIsRUFBQUEsR0FBRyxFQUFFLEVBRGU7QUFFcEJHLEVBQUFBLEtBQUssRUFBRSxLQUZhO0FBR3BCSyxFQUFBQSxLQUFLLEVBQUUsS0FIYTtBQUlwQkMsRUFBQUEsS0FBSyxFQUFFO0FBSmEsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXZhdGFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGdldEluaXRpYWxzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcih7IGFsdCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY292ZXIsIGljb24sIHN2ZywgaW1hZ2UsIHRpdGxlLCBzbWFsbCwgbGFyZ2UsIC4uLm90aGVyIH0pIHtcbiAgY29uc3Qgc3R5bGVkSWNvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpY29uKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLm5vcm1hbGl6ZWRJY29uKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbjtcbiAgfSwgW2ljb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHN0eWxlcy5hdmF0YXIsXG4gICAgICAgIHsgW3N0eWxlcy5pbWFnZUV4aXN0XTogaW1hZ2UgJiYgdHlwZW9mIGltYWdlID09PSAnc3RyaW5nJywgW3N0eWxlcy5sYXJnZUF2YXRhcl06IGxhcmdlLCBbc3R5bGVzLnNtYWxsQXZhdGFyXTogc21hbGwgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtjb3ZlciAmJiB0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnICYmIChcbiAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD17YWx0fSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX0gLz5cbiAgICAgICl9XG4gICAgICB7IWNvdmVyICYmICh0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnID8gPGltZyBhbHQ9e2FsdH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IHRpdGxlPXt0aXRsZX0gLz4gOiBpbWFnZSl9XG4gICAgICB7c3R5bGVkSWNvbn1cbiAgICAgIHtzdmd9XG4gICAgICB7dGl0bGUgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sZXR0ZXJ9PntnZXRJbml0aWFscyh0aXRsZSl9PC9zcGFuPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGltYWdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBzdmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5BdmF0YXIuZGVmYXVsdFByb3BzID0ge1xuICBhbHQ6ICcnLFxuICBjb3ZlcjogZmFsc2UsXG4gIHNtYWxsOiBmYWxzZSxcbiAgbGFyZ2U6IGZhbHNlLFxufTtcbiJdfQ==