"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttonModule = _interopRequireDefault(require("./button.module.scss"));

var _util = require("../../util");

var _spinnerModule = _interopRequireDefault(require("../Iconography/spinner.module.scss"));

var _Icon = _interopRequireDefault(require("../Iconography/Icon"));

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

function Button(props) {
  var _this = this;

  const {
    alt,
    className,
    flat,
    fullWidth,
    icon,
    iconPosition,
    iconOnly,
    kind,
    largest,
    large,
    onDark,
    small,
    smallest,
    children,
    loading,
    loadingText,
    onMouseDown,
    prime,
    thinText,
    noBorder,
    custom
  } = props,
        others = _objectWithoutProperties(props, ["alt", "className", "flat", "fullWidth", "icon", "iconPosition", "iconOnly", "kind", "largest", "large", "onDark", "small", "smallest", "children", "loading", "loadingText", "onMouseDown", "prime", "thinText", "noBorder", "custom"]);

  const buttonRef = _react.default.useRef();

  if (iconOnly && !others['aria-label'] && process.env.NODE_ENV === 'development') {
    console.error('Icon-only buttons should have an accessible title set via the "aria-label" prop.');
  }

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
    className: (0, _classnames.default)(className, _buttonModule.default.btn, _buttonModule.default.feedback, _buttonModule.default[`btn${(0, _util.capitalize)(kind)}`], {
      [_buttonModule.default.btnAlt]: alt,
      [_buttonModule.default.btnFlat]: flat,
      [_buttonModule.default.btnFull]: fullWidth,
      [_buttonModule.default.btnIconOnly]: iconOnly,
      [_buttonModule.default.btnIconRight]: !!icon && iconPosition === 'right',
      [_buttonModule.default.btnXl]: largest,
      [_buttonModule.default.btnLg]: large,
      [_buttonModule.default.btnOnDark]: onDark,
      [_buttonModule.default.btnSm]: small,
      [_buttonModule.default.btnXs]: smallest,
      [_buttonModule.default.prime]: prime,
      [_buttonModule.default.btnThinText]: thinText,
      [_buttonModule.default.btnNoBorder]: noBorder,
      [_buttonModule.default.btnCustom]: custom
    }),
    onMouseDown: handleMouseDown
  }, others);

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
    if (loading) btnChildren = _react.default.createElement("span", null, loadingText);
  }

  let injectedIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    let tmpInjectedIcon;

    if (icon) {
      const iconSrc = icon.props.src;
      const isSpinner = iconSrc.indexOf('spinner') === 0;
      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _buttonModule.default.iconBtn, {
          [_spinnerModule.default[`icon${(0, _util.capitalize)((0, _util.camelCase)(iconSrc))}Btn`]]: isSpinner
        })
      });
      return tmpInjectedIcon;
    } else {
      return null;
    }
  }.bind(this), [icon]);

  if (loading) {
    let loadingIconStyle = {
      fontSize: '16px'
    };
    if (small) loadingIconStyle = {
      fontSize: '8px'
    };else if (large) loadingIconStyle = {
      fontSize: '24px'
    };

    const loadingIcon = _react.default.createElement(_Icon.default, {
      style: loadingIconStyle,
      src: "spinner_md"
    });

    const loadingIconSrc = loadingIcon.props.src;
    injectedIcon = _react.default.cloneElement(loadingIcon, {
      className: (0, _classnames.default)(loadingIcon.props.className, _buttonModule.default.iconBtn),
      externalIconClassName: _buttonModule.default[`icon${(0, _util.capitalize)((0, _util.camelCase)(loadingIconSrc))}Btn`]
    });
  }

  const buttonContent = _react.default.createElement(_react.Fragment, null, iconPosition === 'right' ? btnChildren : injectedIcon, iconPosition === 'right' ? injectedIcon : btnChildren);

  const {
    href
  } = props;
  return href ? _react.default.createElement("a", btnProps, buttonContent, rippleData.show && _react.default.createElement("span", {
    className: _buttonModule.default.ripple,
    style: {
      top: rippleData.top,
      left: rippleData.left,
      width: rippleData.width,
      height: rippleData.width
    }
  })) : _react.default.createElement("button", _extends({
    type: "button",
    ref: buttonRef
  }, btnProps), buttonContent, rippleData.show && _react.default.createElement("span", {
    className: _buttonModule.default.ripple,
    style: {
      top: rippleData.top,
      left: rippleData.left,
      width: rippleData.width,
      height: rippleData.width
    }
  }));
}

Button.propTypes = {
  alt: _propTypes.default.bool,
  flat: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object]),
  iconPosition: _propTypes.default.oneOf(['left', 'right']),
  iconOnly: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['default', 'danger', 'primary', 'brand', 'success']),
  large: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loadingText: _propTypes.default.string,
  onDark: _propTypes.default.bool,
  small: _propTypes.default.bool,
  thinText: _propTypes.default.bool,
  noBorder: _propTypes.default.bool,
  custom: _propTypes.default.bool
};
Button.defaultProps = {
  kind: 'default',
  iconPosition: 'left',
  loading: false,
  loadingText: 'loading',
  thinText: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0J1dHRvbi9CdXR0b24uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJhbHQiLCJjbGFzc05hbWUiLCJmbGF0IiwiZnVsbFdpZHRoIiwiaWNvbiIsImljb25Qb3NpdGlvbiIsImljb25Pbmx5Iiwia2luZCIsImxhcmdlc3QiLCJsYXJnZSIsIm9uRGFyayIsInNtYWxsIiwic21hbGxlc3QiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJsb2FkaW5nVGV4dCIsIm9uTW91c2VEb3duIiwicHJpbWUiLCJ0aGluVGV4dCIsIm5vQm9yZGVyIiwiY3VzdG9tIiwib3RoZXJzIiwiYnV0dG9uUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25zb2xlIiwiZXJyb3IiLCJyaXBwbGVEYXRhIiwic2V0UmlwcGxlRGF0YSIsInNob3ciLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJjdXJyZW50VGFyZ2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYnRuUHJvcHMiLCJzdHlsZXMiLCJidG4iLCJmZWVkYmFjayIsImJ0bkFsdCIsImJ0bkZsYXQiLCJidG5GdWxsIiwiYnRuSWNvbk9ubHkiLCJidG5JY29uUmlnaHQiLCJidG5YbCIsImJ0bkxnIiwiYnRuT25EYXJrIiwiYnRuU20iLCJidG5YcyIsImJ0blRoaW5UZXh0IiwiYnRuTm9Cb3JkZXIiLCJidG5DdXN0b20iLCJidXR0b25UZXh0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiY2hpbGQiLCJqb2luIiwidG9TdHJpbmciLCJidG5DaGlsZHJlbiIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsImljb25TcmMiLCJzcmMiLCJpc1NwaW5uZXIiLCJpbmRleE9mIiwiY2xvbmVFbGVtZW50IiwiaWNvbkJ0biIsInNwaW5uZXJTdHlsZXMiLCJsb2FkaW5nSWNvblN0eWxlIiwiZm9udFNpemUiLCJsb2FkaW5nSWNvbiIsImxvYWRpbmdJY29uU3JjIiwiZXh0ZXJuYWxJY29uQ2xhc3NOYW1lIiwiYnV0dG9uQ29udGVudCIsImhyZWYiLCJyaXBwbGUiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibm9kZSIsIm9iamVjdCIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNwQyxRQUFNO0FBQ0pDLElBQUFBLEdBREk7QUFFSkMsSUFBQUEsU0FGSTtBQUdKQyxJQUFBQSxJQUhJO0FBSUpDLElBQUFBLFNBSkk7QUFLSkMsSUFBQUEsSUFMSTtBQU1KQyxJQUFBQSxZQU5JO0FBT0pDLElBQUFBLFFBUEk7QUFRSkMsSUFBQUEsSUFSSTtBQVNKQyxJQUFBQSxPQVRJO0FBVUpDLElBQUFBLEtBVkk7QUFXSkMsSUFBQUEsTUFYSTtBQVlKQyxJQUFBQSxLQVpJO0FBYUpDLElBQUFBLFFBYkk7QUFjSkMsSUFBQUEsUUFkSTtBQWVKQyxJQUFBQSxPQWZJO0FBZ0JKQyxJQUFBQSxXQWhCSTtBQWlCSkMsSUFBQUEsV0FqQkk7QUFrQkpDLElBQUFBLEtBbEJJO0FBbUJKQyxJQUFBQSxRQW5CSTtBQW9CSkMsSUFBQUEsUUFwQkk7QUFxQkpDLElBQUFBO0FBckJJLE1BdUJGckIsS0F2Qko7QUFBQSxRQXNCS3NCLE1BdEJMLDRCQXVCSXRCLEtBdkJKOztBQXlCQSxRQUFNdUIsU0FBUyxHQUFHQyxlQUFNQyxNQUFOLEVBQWxCOztBQUVBLE1BQUlsQixR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RUFBQUEsV0FBVyxFQUFFLFNBSk87QUFLcEJHLEVBQUFBLFFBQVEsRUFBRTtBQUxVLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGNhbWVsQ2FzZSwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHNwaW5uZXJTdHlsZXMgZnJvbSAnLi4vSWNvbm9ncmFwaHkvc3Bpbm5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29ub2dyYXBoeS9JY29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbHQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZsYXQsXG4gICAgZnVsbFdpZHRoLFxuICAgIGljb24sXG4gICAgaWNvblBvc2l0aW9uLFxuICAgIGljb25Pbmx5LFxuICAgIGtpbmQsXG4gICAgbGFyZ2VzdCxcbiAgICBsYXJnZSxcbiAgICBvbkRhcmssXG4gICAgc21hbGwsXG4gICAgc21hbGxlc3QsXG4gICAgY2hpbGRyZW4sXG4gICAgbG9hZGluZyxcbiAgICBsb2FkaW5nVGV4dCxcbiAgICBvbk1vdXNlRG93bixcbiAgICBwcmltZSxcbiAgICB0aGluVGV4dCxcbiAgICBub0JvcmRlcixcbiAgICBjdXN0b20sXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBidXR0b25SZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaWNvbk9ubHkgJiYgIW90aGVyc1snYXJpYS1sYWJlbCddICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc29sZS5lcnJvcignSWNvbi1vbmx5IGJ1dHRvbnMgc2hvdWxkIGhhdmUgYW4gYWNjZXNzaWJsZSB0aXRsZSBzZXQgdmlhIHRoZSBcImFyaWEtbGFiZWxcIiBwcm9wLicpO1xuICB9XG4gIGNvbnN0IFtyaXBwbGVEYXRhLCBzZXRSaXBwbGVEYXRhXSA9IHVzZVN0YXRlKHsgc2hvdzogZmFsc2UsIHRvcDogbnVsbCwgbGVmdDogbnVsbCwgd2lkdGg6IG51bGwgfSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChvbk1vdXNlRG93bikgb25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgaWYgKCFyaXBwbGVEYXRhLnNob3cpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gKHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICAgICAgY29uc3QgdG9wID0gcGFnZVkgLSAocmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAgIHNldFJpcHBsZURhdGEoe1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgd2lkdGg6IGAxMDBweGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uTW91c2VEb3duLCByaXBwbGVEYXRhLnNob3ddXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGlmIChyaXBwbGVEYXRhLnNob3cpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFJpcHBsZURhdGEoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbcmlwcGxlRGF0YS5zaG93XSk7XG5cbiAgbGV0IGJ0blByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCBzdHlsZXMuYnRuLCBzdHlsZXMuZmVlZGJhY2ssIHN0eWxlc1tgYnRuJHtjYXBpdGFsaXplKGtpbmQpfWBdLCB7XG4gICAgICBbc3R5bGVzLmJ0bkFsdF06IGFsdCxcbiAgICAgIFtzdHlsZXMuYnRuRmxhdF06IGZsYXQsXG4gICAgICBbc3R5bGVzLmJ0bkZ1bGxdOiBmdWxsV2lkdGgsXG4gICAgICBbc3R5bGVzLmJ0bkljb25Pbmx5XTogaWNvbk9ubHksXG4gICAgICBbc3R5bGVzLmJ0bkljb25SaWdodF06ICEhaWNvbiAmJiBpY29uUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICBbc3R5bGVzLmJ0blhsXTogbGFyZ2VzdCxcbiAgICAgIFtzdHlsZXMuYnRuTGddOiBsYXJnZSxcbiAgICAgIFtzdHlsZXMuYnRuT25EYXJrXTogb25EYXJrLFxuICAgICAgW3N0eWxlcy5idG5TbV06IHNtYWxsLFxuICAgICAgW3N0eWxlcy5idG5Yc106IHNtYWxsZXN0LFxuICAgICAgW3N0eWxlcy5wcmltZV06IHByaW1lLFxuICAgICAgW3N0eWxlcy5idG5UaGluVGV4dF06IHRoaW5UZXh0LFxuICAgICAgW3N0eWxlcy5idG5Ob0JvcmRlcl06IG5vQm9yZGVyLFxuICAgICAgW3N0eWxlcy5idG5DdXN0b21dOiBjdXN0b20sXG4gICAgfSksXG4gICAgb25Nb3VzZURvd246IGhhbmRsZU1vdXNlRG93bixcbiAgICAuLi5vdGhlcnMsXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uVGV4dCA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pXG4gICAgPyBjaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gdHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykuam9pbignICcpXG4gICAgOiB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgPyBjaGlsZHJlbi50b1N0cmluZygpXG4gICAgOiBudWxsO1xuXG4gIGxldCBidG5DaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gIGlmIChidXR0b25UZXh0ICYmICFpY29uT25seSkge1xuICAgIGJ0blByb3BzID0geyAnYXJpYS1sYWJlbCc6IGJ1dHRvblRleHQsIC4uLmJ0blByb3BzIH07XG4gICAgYnRuQ2hpbGRyZW4gPSA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcbiAgICBpZiAobG9hZGluZykgYnRuQ2hpbGRyZW4gPSA8c3Bhbj57bG9hZGluZ1RleHR9PC9zcGFuPjtcbiAgfVxuXG4gIGxldCBpbmplY3RlZEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdG1wSW5qZWN0ZWRJY29uO1xuICAgIGlmIChpY29uKSB7XG4gICAgICBjb25zdCBpY29uU3JjID0gaWNvbi5wcm9wcy5zcmM7XG4gICAgICBjb25zdCBpc1NwaW5uZXIgPSBpY29uU3JjLmluZGV4T2YoJ3NwaW5uZXInKSA9PT0gMDtcbiAgICAgIHRtcEluamVjdGVkSWNvbiA9IFJlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goaWNvbi5wcm9wcy5jbGFzc05hbWUsIHN0eWxlcy5pY29uQnRuLCB7XG4gICAgICAgICAgW3NwaW5uZXJTdHlsZXNbYGljb24ke2NhcGl0YWxpemUoY2FtZWxDYXNlKGljb25TcmMpKX1CdG5gXV06IGlzU3Bpbm5lcixcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXBJbmplY3RlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwgW2ljb25dKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIGxldCBsb2FkaW5nSWNvblN0eWxlID0geyBmb250U2l6ZTogJzE2cHgnIH07XG4gICAgaWYgKHNtYWxsKSBsb2FkaW5nSWNvblN0eWxlID0geyBmb250U2l6ZTogJzhweCcgfTtcbiAgICBlbHNlIGlmIChsYXJnZSkgbG9hZGluZ0ljb25TdHlsZSA9IHsgZm9udFNpemU6ICcyNHB4JyB9O1xuICAgIGNvbnN0IGxvYWRpbmdJY29uID0gPEljb24gc3R5bGU9e2xvYWRpbmdJY29uU3R5bGV9IHNyYz1cInNwaW5uZXJfbWRcIiAvPjtcbiAgICBjb25zdCBsb2FkaW5nSWNvblNyYyA9IGxvYWRpbmdJY29uLnByb3BzLnNyYztcbiAgICBpbmplY3RlZEljb24gPSBSZWFjdC5jbG9uZUVsZW1lbnQobG9hZGluZ0ljb24sIHtcbiAgICAgIGNsYXNzTmFtZTogY3gobG9hZGluZ0ljb24ucHJvcHMuY2xhc3NOYW1lLCBzdHlsZXMuaWNvbkJ0biksXG4gICAgICBleHRlcm5hbEljb25DbGFzc05hbWU6IHN0eWxlc1tgaWNvbiR7Y2FwaXRhbGl6ZShjYW1lbENhc2UobG9hZGluZ0ljb25TcmMpKX1CdG5gXSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGJ1dHRvbkNvbnRlbnQgPSAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGJ0bkNoaWxkcmVuIDogaW5qZWN0ZWRJY29ufVxuICAgICAge2ljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IGluamVjdGVkSWNvbiA6IGJ0bkNoaWxkcmVufVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG5cbiAgY29uc3QgeyBocmVmIH0gPSBwcm9wcztcblxuICByZXR1cm4gaHJlZiA/IChcbiAgICA8YSB7Li4uYnRuUHJvcHN9PlxuICAgICAge2J1dHRvbkNvbnRlbnR9XG4gICAgICB7cmlwcGxlRGF0YS5zaG93ICYmIChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yaXBwbGV9XG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiByaXBwbGVEYXRhLnRvcCwgbGVmdDogcmlwcGxlRGF0YS5sZWZ0LCB3aWR0aDogcmlwcGxlRGF0YS53aWR0aCwgaGVpZ2h0OiByaXBwbGVEYXRhLndpZHRoIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvYT5cbiAgKSA6IChcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByZWY9e2J1dHRvblJlZn0gey4uLmJ0blByb3BzfT5cbiAgICAgIHtidXR0b25Db250ZW50fVxuICAgICAge3JpcHBsZURhdGEuc2hvdyAmJiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmlwcGxlfVxuICAgICAgICAgIHN0eWxlPXt7IHRvcDogcmlwcGxlRGF0YS50b3AsIGxlZnQ6IHJpcHBsZURhdGEubGVmdCwgd2lkdGg6IHJpcHBsZURhdGEud2lkdGgsIGhlaWdodDogcmlwcGxlRGF0YS53aWR0aCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbi8qIGhhbmRsZU1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICBpZiAodGhpcy5wcm9wcy5vbk1vdXNlRG93bikgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gIGlmICh0aGlzLmRvUmlwcGxlKCkpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50cy5nZXRNb3VzZVBvc2l0aW9uKGV2ZW50KTtcbiAgICB0aGlzLmFuaW1hdGVSaXBwbGUoeCwgeSwgZmFsc2UpO1xuICB9XG59O1xuXG5oYW5kbGVUb3VjaFN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gIGlmICh0aGlzLnByb3BzLm9uVG91Y2hTdGFydCkgdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICBpZiAodGhpcy5kb1JpcHBsZSgpKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBldmVudHMuZ2V0VG91Y2hQb3NpdGlvbihldmVudCk7XG4gICAgdGhpcy5hbmltYXRlUmlwcGxlKHgsIHksIHRydWUpO1xuICB9XG59OyAqL1xuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWx0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZmxhdDogUHJvcFR5cGVzLmJvb2wsXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGljb25Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgaWNvbk9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2RhbmdlcicsICdwcmltYXJ5JywgJ2JyYW5kJywgJ3N1Y2Nlc3MnXSksXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkRhcms6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIHRoaW5UZXh0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbm9Cb3JkZXI6IFByb3BUeXBlcy5ib29sLFxuICBjdXN0b206IFByb3BUeXBlcy5ib29sXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBraW5kOiAnZGVmYXVsdCcsXG4gIGljb25Qb3NpdGlvbjogJ2xlZnQnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgbG9hZGluZ1RleHQ6ICdsb2FkaW5nJyxcbiAgdGhpblRleHQ6IGZhbHNlLFxufTtcbiJdfQ==