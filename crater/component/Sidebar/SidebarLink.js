"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTinyPopover = _interopRequireWildcard(require("react-tiny-popover"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

var _buttonModule = _interopRequireDefault(require("../Button/button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SidebarLink(props) {
  var _this = this;

  const {
    component,
    className,
    icon,
    iconOnly,
    iconPosition,
    children,
    onMouseDown,
    active,
    showPopover,
    slim,
    onDark
  } = props,
        rest = _objectWithoutProperties(props, ["component", "className", "icon", "iconOnly", "iconPosition", "children", "onMouseDown", "active", "showPopover", "slim", "onDark"]);

  const buttonRef = _react.default.useRef();

  const [isHover, setHover] = (0, _react.useState)(false);
  const handleMouseEnter = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (!isHover) setHover(true);
  }.bind(this), [isHover]);
  const handleMouseLeave = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (isHover) setHover(false);
  }.bind(this), [isHover]);
  const [rippleData, setRippleData] = (0, _react.useState)({
    show: false,
    top: null,
    left: null,
    width: null
  });
  const handleMouseDown = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (onMouseDown) onMouseDown(event);

    if (!rippleData.show) {
      const {
        pageX,
        pageY,
        currentTarget
      } = event;
      const rect = currentTarget.getBoundingClientRect();
      const left = pageX - (rect.left + window.scrollX);
      const top = pageY - (rect.top + window.scrollY);
      setRippleData({
        show: true,
        left,
        top,
        width: `100px`
      });
    }
  }.bind(this), [onMouseDown, rippleData.show]);
  (0, _react.useEffect)(function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    let timer;

    if (rippleData.show) {
      timer = setTimeout(function () {
        _newArrowCheck(this, _this2);

        setRippleData({
          show: false
        });
      }.bind(this), 500);
    }

    return function () {
      _newArrowCheck(this, _this2);

      return clearTimeout(timer);
    }.bind(this);
  }.bind(this), [rippleData.show]);

  let btnProps = _objectSpread({
    className: (0, _classnames.default)(className, _buttonModule.default.btn, _SidebarModule.default.btn, {
      [_buttonModule.default.btnIconRight]: !!icon && iconPosition === 'right',
      [_buttonModule.default.btnIconOnly]: iconOnly,
      [_SidebarModule.default.btnIconOnly]: iconOnly,
      [_SidebarModule.default.active]: active,
      [_SidebarModule.default.slimLink]: slim,
      [_SidebarModule.default.onDark]: onDark
    }),
    onMouseDown: handleMouseDown
  }, rest);

  const buttonText = Array.isArray(children) ? children.filter(function (child) {
    _newArrowCheck(this, _this);

    return typeof child === 'string';
  }.bind(this)).join(' ') : typeof children === 'string' ? children.toString() : null;
  let btnChildren = children;

  if (buttonText && !iconOnly) {
    btnProps = _objectSpread({
      'aria-label': buttonText
    }, btnProps);
    btnChildren = _react.default.createElement("span", null, children);
  }

  if (iconOnly) btnChildren = null;
  let injectedIcon = icon;

  if (icon) {
    injectedIcon = _react.default.cloneElement(icon, {
      className: (0, _classnames.default)(icon.props.className, _buttonModule.default.iconBtn, _SidebarModule.default.iconBtn)
    });
  }

  const buttonContent = _react.default.createElement(_react.default.Fragment, null, iconPosition === 'right' ? btnChildren : injectedIcon, iconPosition === 'right' ? injectedIcon : btnChildren);

  return _react.default.createElement('div', {
    className: _SidebarModule.default.sidebarLink,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, _react.default.createElement(_reactTinyPopover.default, {
    isOpen: showPopover && isHover,
    position: "right",
    content: _react.default.createElement("div", {
      className: (0, _classnames.default)('text5', _SidebarModule.default.popoverContainer)
    }, buttonText),
    containerStyle: {
      zIndex: 100
    }
  }, _react.default.createElement(component, _objectSpread({
    ref: buttonRef
  }, btnProps), _react.default.createElement(_react.default.Fragment, null, buttonContent, rippleData.show && _react.default.createElement("span", {
    className: _buttonModule.default.ripple,
    style: {
      top: rippleData.top,
      left: rippleData.left,
      width: rippleData.width,
      height: rippleData.width
    }
  })))));
}

var _default = SidebarLink;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1NpZGViYXIvU2lkZWJhckxpbmsuanMiXSwibmFtZXMiOlsiU2lkZWJhckxpbmsiLCJwcm9wcyIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImljb24iLCJpY29uT25seSIsImljb25Qb3NpdGlvbiIsImNoaWxkcmVuIiwib25Nb3VzZURvd24iLCJhY3RpdmUiLCJzaG93UG9wb3ZlciIsInNsaW0iLCJvbkRhcmsiLCJyZXN0IiwiYnV0dG9uUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpc0hvdmVyIiwic2V0SG92ZXIiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInJpcHBsZURhdGEiLCJzZXRSaXBwbGVEYXRhIiwic2hvdyIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50IiwicGFnZVgiLCJwYWdlWSIsImN1cnJlbnRUYXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJidG5Qcm9wcyIsImJ0blN0eWxlcyIsImJ0biIsInN0eWxlcyIsImJ0bkljb25SaWdodCIsImJ0bkljb25Pbmx5Iiwic2xpbUxpbmsiLCJidXR0b25UZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiY2hpbGQiLCJqb2luIiwidG9TdHJpbmciLCJidG5DaGlsZHJlbiIsImluamVjdGVkSWNvbiIsImNsb25lRWxlbWVudCIsImljb25CdG4iLCJidXR0b25Db250ZW50IiwiY3JlYXRlRWxlbWVudCIsInNpZGViYXJMaW5rIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicG9wb3ZlckNvbnRhaW5lciIsInpJbmRleCIsInJlZiIsInJpcHBsZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNB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Q0FBQ0ksSUFBeEM7QUFBOENDLE1BQUFBLEtBQUssRUFBRUwsVUFBVSxDQUFDSyxLQUFoRTtBQUF1RXlDLE1BQUFBLE1BQU0sRUFBRTlDLFVBQVUsQ0FBQ0s7QUFBMUY7QUFGVCxJQUhKLENBTkQsQ0FOSCxDQVBLLENBQVA7QUErQkQ7O2VBRWMxQixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFBvcG92ZXIsIHsgQXJyb3dDb250YWluZXIgfSBmcm9tICdyZWFjdC10aW55LXBvcG92ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGViYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGJ0blN0eWxlcyBmcm9tICcuLi9CdXR0b24vYnV0dG9uLm1vZHVsZS5zY3NzJztcblxuZnVuY3Rpb24gU2lkZWJhckxpbmsocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudCxcbiAgICBjbGFzc05hbWUsXG4gICAgaWNvbixcbiAgICBpY29uT25seSxcbiAgICBpY29uUG9zaXRpb24sXG4gICAgY2hpbGRyZW4sXG4gICAgb25Nb3VzZURvd24sXG4gICAgYWN0aXZlLFxuICAgIHNob3dQb3BvdmVyLFxuICAgIHNsaW0sXG4gICAgb25EYXJrLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGJ1dHRvblJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFpc0hvdmVyKSBzZXRIb3Zlcih0cnVlKTtcbiAgfSwgW2lzSG92ZXJdKTtcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNIb3Zlcikgc2V0SG92ZXIoZmFsc2UpO1xuICB9LCBbaXNIb3Zlcl0pO1xuXG4gIGNvbnN0IFtyaXBwbGVEYXRhLCBzZXRSaXBwbGVEYXRhXSA9IHVzZVN0YXRlKHsgc2hvdzogZmFsc2UsIHRvcDogbnVsbCwgbGVmdDogbnVsbCwgd2lkdGg6IG51bGwgfSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChvbk1vdXNlRG93bikgb25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgaWYgKCFyaXBwbGVEYXRhLnNob3cpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gKHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICAgICAgY29uc3QgdG9wID0gcGFnZVkgLSAocmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAgIHNldFJpcHBsZURhdGEoe1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgd2lkdGg6IGAxMDBweGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uTW91c2VEb3duLCByaXBwbGVEYXRhLnNob3ddXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXI7XG4gICAgaWYgKHJpcHBsZURhdGEuc2hvdykge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UmlwcGxlRGF0YSh7IHNob3c6IGZhbHNlIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtyaXBwbGVEYXRhLnNob3ddKTtcblxuICBsZXQgYnRuUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBjeChjbGFzc05hbWUsIGJ0blN0eWxlcy5idG4sIHN0eWxlcy5idG4sIHtcbiAgICAgIFtidG5TdHlsZXMuYnRuSWNvblJpZ2h0XTogISFpY29uICYmIGljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgIFtidG5TdHlsZXMuYnRuSWNvbk9ubHldOiBpY29uT25seSxcbiAgICAgIFtzdHlsZXMuYnRuSWNvbk9ubHldOiBpY29uT25seSxcbiAgICAgIFtzdHlsZXMuYWN0aXZlXTogYWN0aXZlLFxuICAgICAgW3N0eWxlcy5zbGltTGlua106IHNsaW0sXG4gICAgICBbc3R5bGVzLm9uRGFya106IG9uRGFyayxcbiAgICB9KSxcbiAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duLFxuICAgIC4uLnJlc3QsXG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gIGNvbnN0IGJ1dHRvblRleHQgPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgID8gY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpLmpvaW4oJyAnKVxuICAgIDogdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgID8gY2hpbGRyZW4udG9TdHJpbmcoKVxuICAgIDogbnVsbDtcblxuICBsZXQgYnRuQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICBpZiAoYnV0dG9uVGV4dCAmJiAhaWNvbk9ubHkpIHtcbiAgICBidG5Qcm9wcyA9IHsgJ2FyaWEtbGFiZWwnOiBidXR0b25UZXh0LCAuLi5idG5Qcm9wcyB9O1xuICAgIGJ0bkNoaWxkcmVuID0gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj47XG4gIH1cblxuICBpZiAoaWNvbk9ubHkpIGJ0bkNoaWxkcmVuID0gbnVsbDtcblxuICBsZXQgaW5qZWN0ZWRJY29uID0gaWNvbjtcblxuICBpZiAoaWNvbikge1xuICAgIGluamVjdGVkSWNvbiA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KGljb24ucHJvcHMuY2xhc3NOYW1lLCBidG5TdHlsZXMuaWNvbkJ0biwgc3R5bGVzLmljb25CdG4pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYnV0dG9uQ29udGVudCA9IChcbiAgICA8PlxuICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGJ0bkNoaWxkcmVuIDogaW5qZWN0ZWRJY29ufVxuICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGluamVjdGVkSWNvbiA6IGJ0bkNoaWxkcmVufVxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogc3R5bGVzLnNpZGViYXJMaW5rLFxuICAgICAgb25Nb3VzZUVudGVyOiBoYW5kbGVNb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBoYW5kbGVNb3VzZUxlYXZlLFxuICAgIH0sXG4gICAgPFBvcG92ZXJcbiAgICAgIGlzT3Blbj17c2hvd1BvcG92ZXIgJiYgaXNIb3Zlcn1cbiAgICAgIHBvc2l0aW9uPVwicmlnaHRcIiAvLyBwcmVmZXJyZWQgcG9zaXRpb25cbiAgICAgIGNvbnRlbnQ9ezxkaXYgY2xhc3NOYW1lPXtjeCgndGV4dDUnLCBzdHlsZXMucG9wb3ZlckNvbnRhaW5lcil9PntidXR0b25UZXh0fTwvZGl2Pn1cbiAgICAgIGNvbnRhaW5lclN0eWxlPXt7IHpJbmRleDogMTAwIH19XG4gICAgPlxuICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogYnV0dG9uUmVmLFxuICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICB9LFxuICAgICAgICA8PlxuICAgICAgICAgIHtidXR0b25Db250ZW50fVxuICAgICAgICAgIHtyaXBwbGVEYXRhLnNob3cgJiYgKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidG5TdHlsZXMucmlwcGxlfVxuICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IHJpcHBsZURhdGEudG9wLCBsZWZ0OiByaXBwbGVEYXRhLmxlZnQsIHdpZHRoOiByaXBwbGVEYXRhLndpZHRoLCBoZWlnaHQ6IHJpcHBsZURhdGEud2lkdGggfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wb3Zlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckxpbms7XG4iXX0=