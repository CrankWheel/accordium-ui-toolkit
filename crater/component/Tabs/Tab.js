"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Tab extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleClick", function (event) {
      _newArrowCheck(this, _arrowCheckId);

      if (!_this.props.disabled && _this.props.onClick) {
        _this.props.onClick(event, _this.props.index);
      }
    }.bind(_arrowCheckId));
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.props.onActive) {
      this.props.onActive();
    }
  }

  render() {
    const _this$props = this.props,
          {
      index,
      onActive,
      active,
      activeClassName,
      children,
      className,
      disabled,
      hidden,
      label,
      icon
    } = _this$props,
          other = _objectWithoutProperties(_this$props, ["index", "onActive", "active", "activeClassName", "children", "className", "disabled", "hidden", "label", "icon"]);

    const _className = (0, _classnames.default)(_TabsModule.default.label, {
      [_TabsModule.default.active]: active,
      [_TabsModule.default.hidden]: hidden,
      [_TabsModule.default.withText]: label,
      [_TabsModule.default.withIcon]: icon,
      [_TabsModule.default.disabled]: disabled,
      [activeClassName]: active
    }, className);

    return _react.default.createElement("div", _extends({}, other, {
      "data-react-toolbox": "tab",
      role: "tab",
      tabIndex: "0",
      className: _className,
      onClick: this.handleClick
    }), label, children);
  }

}

_defineProperty(Tab, "propTypes", {
  active: _propTypes.default.bool,
  activeClassName: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  hidden: _propTypes.default.bool,
  icon: _propTypes.default.node,
  index: _propTypes.default.number,
  label: _propTypes.default.node,
  onActive: _propTypes.default.func,
  onClick: _propTypes.default.func
});

_defineProperty(Tab, "defaultProps", {
  active: false,
  className: '',
  disabled: false,
  hidden: false
});

var _default = Tab;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1RhYnMvVGFiLmpzIl0sIm5hbWVzIjpbIlRhYiIsIkNvbXBvbmVudCIsImV2ZW50IiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJpbmRleCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImFjdGl2ZSIsIm9uQWN0aXZlIiwicmVuZGVyIiwiYWN0aXZlQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJoaWRkZW4iLCJsYWJlbCIsImljb24iLCJvdGhlciIsIl9jbGFzc05hbWUiLCJzdHlsZXMiLCJ3aXRoVGV4dCIsIndpdGhJY29uIiwiaGFuZGxlQ2xpY2siLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibm9kZSIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsZ0JBQWxCLENBQTRCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEseUNBNEJaLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNyQixVQUFJLENBQUMsS0FBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVosSUFBd0IsS0FBSSxDQUFDRCxLQUFMLENBQVdFLE9BQXZDLEVBQWdEO0FBQzlDLFFBQUEsS0FBSSxDQUFDRixLQUFMLENBQVdFLE9BQVgsQ0FBbUJILEtBQW5CLEVBQTBCLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRyxLQUFyQztBQUNEO0FBQ0YsS0FoQ3lCO0FBQUE7O0FBc0IxQkMsRUFBQUEsa0JBQWtCLENBQUNDLFNBQUQsRUFBWTtBQUM1QixRQUFJLENBQUNBLFNBQVMsQ0FBQ0MsTUFBWCxJQUFxQixLQUFLTixLQUFMLENBQVdNLE1BQWhDLElBQTBDLEtBQUtOLEtBQUwsQ0FBV08sUUFBekQsRUFBbUU7QUFDakUsV0FBS1AsS0FBTCxDQUFXTyxRQUFYO0FBQ0Q7QUFDRjs7QUFRREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBWUksS0FBS1IsS0FaVDtBQUFBLFVBQU07QUFDSkcsTUFBQUEsS0FESTtBQUVKSSxNQUFBQSxRQUZJO0FBR0pELE1BQUFBLE1BSEk7QUFJSkcsTUFBQUEsZUFKSTtBQUtKQyxNQUFBQSxRQUxJO0FBTUpDLE1BQUFBLFNBTkk7QUFPSlYsTUFBQUEsUUFQSTtBQVFKVyxNQUFBQSxNQVJJO0FBU0pDLE1BQUFBLEtBVEk7QUFVSkMsTUFBQUE7QUFWSSxLQUFOO0FBQUEsVUFXS0MsS0FYTDs7QUFhQSxVQUFNQyxVQUFVLEdBQUcseUJBQ2pCQyxvQkFBT0osS0FEVSxFQUVqQjtBQUNFLE9BQUNJLG9CQUFPWCxNQUFSLEdBQWlCQSxNQURuQjtBQUVFLE9BQUNXLG9CQUFPTCxNQUFSLEdBQWlCQSxNQUZuQjtBQUdFLE9BQUNLLG9CQUFPQyxRQUFSLEdBQW1CTCxLQUhyQjtBQUlFLE9BQUNJLG9CQUFPRSxRQUFSLEdBQW1CTCxJQUpyQjtBQUtFLE9BQUNHLG9CQUFPaEIsUUFBUixHQUFtQkEsUUFMckI7QUFNRSxPQUFDUSxlQUFELEdBQW1CSDtBQU5yQixLQUZpQixFQVVqQkssU0FWaUIsQ0FBbkI7O0FBYUEsV0FDRSxpREFBU0ksS0FBVDtBQUFnQiw0QkFBbUIsS0FBbkM7QUFBeUMsTUFBQSxJQUFJLEVBQUMsS0FBOUM7QUFBb0QsTUFBQSxRQUFRLEVBQUMsR0FBN0Q7QUFBaUUsTUFBQSxTQUFTLEVBQUVDLFVBQTVFO0FBQXdGLE1BQUEsT0FBTyxFQUFFLEtBQUtJO0FBQXRHLFFBRUdQLEtBRkgsRUFHR0gsUUFISCxDQURGO0FBT0Q7O0FBcEV5Qjs7Z0JBQXRCYixHLGVBQ2U7QUFDakJTLEVBQUFBLE1BQU0sRUFBRWUsbUJBQVVDLElBREQ7QUFFakJiLEVBQUFBLGVBQWUsRUFBRVksbUJBQVVFLE1BRlY7QUFHakJiLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVHLElBSEg7QUFJakJiLEVBQUFBLFNBQVMsRUFBRVUsbUJBQVVFLE1BSko7QUFLakJ0QixFQUFBQSxRQUFRLEVBQUVvQixtQkFBVUMsSUFMSDtBQU1qQlYsRUFBQUEsTUFBTSxFQUFFUyxtQkFBVUMsSUFORDtBQU9qQlIsRUFBQUEsSUFBSSxFQUFFTyxtQkFBVUcsSUFQQztBQVFqQnJCLEVBQUFBLEtBQUssRUFBRWtCLG1CQUFVSSxNQVJBO0FBU2pCWixFQUFBQSxLQUFLLEVBQUVRLG1CQUFVRyxJQVRBO0FBVWpCakIsRUFBQUEsUUFBUSxFQUFFYyxtQkFBVUssSUFWSDtBQVdqQnhCLEVBQUFBLE9BQU8sRUFBRW1CLG1CQUFVSztBQVhGLEM7O2dCQURmN0IsRyxrQkFla0I7QUFDcEJTLEVBQUFBLE1BQU0sRUFBRSxLQURZO0FBRXBCSyxFQUFBQSxTQUFTLEVBQUUsRUFGUztBQUdwQlYsRUFBQUEsUUFBUSxFQUFFLEtBSFU7QUFJcEJXLEVBQUFBLE1BQU0sRUFBRTtBQUpZLEM7O2VBd0RUZixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJzLm1vZHVsZS5zY3NzJztcblxuY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGljb246IFByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgICBvbkFjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhpZGRlbjogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLm9uQWN0aXZlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkICYmIHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluZGV4LFxuICAgICAgb25BY3RpdmUsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoaWRkZW4sXG4gICAgICBsYWJlbCxcbiAgICAgIGljb24sXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IF9jbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLmxhYmVsLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGFjdGl2ZSxcbiAgICAgICAgW3N0eWxlcy5oaWRkZW5dOiBoaWRkZW4sXG4gICAgICAgIFtzdHlsZXMud2l0aFRleHRdOiBsYWJlbCxcbiAgICAgICAgW3N0eWxlcy53aXRoSWNvbl06IGljb24sXG4gICAgICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgICAgW2FjdGl2ZUNsYXNzTmFtZV06IGFjdGl2ZSxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgey4uLm90aGVyfSBkYXRhLXJlYWN0LXRvb2xib3g9XCJ0YWJcIiByb2xlPVwidGFiXCIgdGFiSW5kZXg9XCIwXCIgY2xhc3NOYW1lPXtfY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgey8qIHtpY29uICYmIDxGb250SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSB2YWx1ZT17aWNvbn0gLz59ICovfVxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIl19