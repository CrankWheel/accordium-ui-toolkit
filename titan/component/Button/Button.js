"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _buttonModule = _interopRequireDefault(require("./button.module.scss"));

var _util = require("../../util");

var _spinnerModule = _interopRequireDefault(require("../Iconography/spinner.module.scss"));

var _Icon = _interopRequireDefault(require("../Iconography/Icon"));

var _events = _interopRequireDefault(require("../../util/events"));

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
    large,
    onDark,
    small,
    children,
    loading,
    loadingText,
    onMouseDown,
    prime
  } = props,
        others = _objectWithoutProperties(props, ["alt", "className", "flat", "fullWidth", "icon", "iconPosition", "iconOnly", "kind", "large", "onDark", "small", "children", "loading", "loadingText", "onMouseDown", "prime"]);

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
      [_buttonModule.default.btnLg]: large,
      [_buttonModule.default.btnOnDark]: onDark,
      [_buttonModule.default.btnSm]: small,
      [_buttonModule.default.prime]: prime
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
  kind: _propTypes.default.oneOf(['default', 'danger', 'primary', 'brand']),
  large: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loadingText: _propTypes.default.string,
  onDark: _propTypes.default.bool,
  small: _propTypes.default.bool
};
Button.defaultProps = {
  kind: 'default',
  iconPosition: 'left',
  loading: false,
  loadingText: 'loading'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQnV0dG9uL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImFsdCIsImNsYXNzTmFtZSIsImZsYXQiLCJmdWxsV2lkdGgiLCJpY29uIiwiaWNvblBvc2l0aW9uIiwiaWNvbk9ubHkiLCJraW5kIiwibGFyZ2UiLCJvbkRhcmsiLCJzbWFsbCIsImNoaWxkcmVuIiwibG9hZGluZyIsImxvYWRpbmdUZXh0Iiwib25Nb3VzZURvd24iLCJwcmltZSIsIm90aGVycyIsImJ1dHRvblJlZiIsIlJlYWN0IiwidXNlUmVmIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uc29sZSIsImVycm9yIiwicmlwcGxlRGF0YSIsInNldFJpcHBsZURhdGEiLCJzaG93IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGFuZGxlTW91c2VEb3duIiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiY3VycmVudFRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxYIiwic2Nyb2xsWSIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImJ0blByb3BzIiwic3R5bGVzIiwiYnRuIiwiZmVlZGJhY2siLCJidG5BbHQiLCJidG5GbGF0IiwiYnRuRnVsbCIsImJ0bkljb25Pbmx5IiwiYnRuSWNvblJpZ2h0IiwiYnRuTGciLCJidG5PbkRhcmsiLCJidG5TbSIsImJ1dHRvblRleHQiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXIiLCJjaGlsZCIsImpvaW4iLCJ0b1N0cmluZyIsImJ0bkNoaWxkcmVuIiwiaW5qZWN0ZWRJY29uIiwidG1wSW5qZWN0ZWRJY29uIiwiaWNvblNyYyIsInNyYyIsImlzU3Bpbm5lciIsImluZGV4T2YiLCJjbG9uZUVsZW1lbnQiLCJpY29uQnRuIiwic3Bpbm5lclN0eWxlcyIsImxvYWRpbmdJY29uU3R5bGUiLCJmb250U2l6ZSIsImxvYWRpbmdJY29uIiwibG9hZGluZ0ljb25TcmMiLCJleHRlcm5hbEljb25DbGFzc05hbWUiLCJidXR0b25Db250ZW50IiwiaHJlZiIsInJpcHBsZSIsImhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJub2RlIiwib2JqZWN0Iiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3BDLFFBQU07QUFDSkMsSUFBQUEsR0FESTtBQUVKQyxJQUFBQSxTQUZJO0FBR0pDLElBQUFBLElBSEk7QUFJSkMsSUFBQUEsU0FKSTtBQUtKQyxJQUFBQSxJQUxJO0FBTUpDLElBQUFBLFlBTkk7QUFPSkMsSUFBQUEsUUFQSTtBQVFKQyxJQUFBQSxJQVJJO0FBU0pDLElBQUFBLEtBVEk7QUFVSkMsSUFBQUEsTUFWSTtBQVdKQyxJQUFBQSxLQVhJO0FBWUpDLElBQUFBLFFBWkk7QUFhSkMsSUFBQUEsT0FiSTtBQWNKQyxJQUFBQSxXQWRJO0FBZUpDLElBQUFBLFdBZkk7QUFnQkpDLElBQUFBO0FBaEJJLE1Ba0JGaEIsS0FsQko7QUFBQSxRQWlCS2lCLE1BakJMLDRCQWtCSWpCLEtBbEJKOztBQW9CQSxRQUFNa0IsU0FBUyxHQUFHQyxlQUFNQyxNQUFOLEVBQWxCOztBQUVBLE1BQUliLFFBQVEsSUFBSSxDQUFDVSxNQUFNLENBQUMsWUFBRCxDQUFuQixJQUFxQ0ksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBbEUsRUFBaUY7QUFDL0VDLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLGtGQUFkO0FBQ0Q7O0FBQ0QsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEIscUJBQVM7QUFBRUMsSUFBQUEsSUFB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QWdCLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsT0FBakMsQ0FBaEIsQ0FSVztBQVNqQmpGLEVBQUFBLEtBQUssRUFBRTJFLG1CQUFVQyxJQVRBO0FBVWpCeEUsRUFBQUEsT0FBTyxFQUFFdUUsbUJBQVVDLElBVkY7QUFXakJ2RSxFQUFBQSxXQUFXLEVBQUVzRSxtQkFBVUUsTUFYTjtBQVlqQjVFLEVBQUFBLE1BQU0sRUFBRTBFLG1CQUFVQyxJQVpEO0FBYWpCMUUsRUFBQUEsS0FBSyxFQUFFeUUsbUJBQVVDO0FBYkEsQ0FBbkI7QUFnQkF0RixNQUFNLENBQUM0RixZQUFQLEdBQXNCO0FBQ3BCbkYsRUFBQUEsSUFBSSxFQUFFLFNBRGM7QUFFcEJGLEVBQUFBLFlBQVksRUFBRSxNQUZNO0FBR3BCTyxFQUFBQSxPQUFPLEVBQUUsS0FIVztBQUlwQkMsRUFBQUEsV0FBVyxFQUFFO0FBSk8sQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBjYW1lbENhc2UsIGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCBzcGlubmVyU3R5bGVzIGZyb20gJy4uL0ljb25vZ3JhcGh5L3NwaW5uZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbm9ncmFwaHkvSWNvbic7XG5pbXBvcnQgZXZlbnRzIGZyb20gJy4uLy4uL3V0aWwvZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBhbHQsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZsYXQsXG4gICAgZnVsbFdpZHRoLFxuICAgIGljb24sXG4gICAgaWNvblBvc2l0aW9uLFxuICAgIGljb25Pbmx5LFxuICAgIGtpbmQsXG4gICAgbGFyZ2UsXG4gICAgb25EYXJrLFxuICAgIHNtYWxsLFxuICAgIGNoaWxkcmVuLFxuICAgIGxvYWRpbmcsXG4gICAgbG9hZGluZ1RleHQsXG4gICAgb25Nb3VzZURvd24sXG4gICAgcHJpbWUsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBidXR0b25SZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaWNvbk9ubHkgJiYgIW90aGVyc1snYXJpYS1sYWJlbCddICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc29sZS5lcnJvcignSWNvbi1vbmx5IGJ1dHRvbnMgc2hvdWxkIGhhdmUgYW4gYWNjZXNzaWJsZSB0aXRsZSBzZXQgdmlhIHRoZSBcImFyaWEtbGFiZWxcIiBwcm9wLicpO1xuICB9XG4gIGNvbnN0IFtyaXBwbGVEYXRhLCBzZXRSaXBwbGVEYXRhXSA9IHVzZVN0YXRlKHsgc2hvdzogZmFsc2UsIHRvcDogbnVsbCwgbGVmdDogbnVsbCwgd2lkdGg6IG51bGwgfSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChvbk1vdXNlRG93bikgb25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgaWYgKCFyaXBwbGVEYXRhLnNob3cpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHBhZ2VYIC0gKHJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICAgICAgY29uc3QgdG9wID0gcGFnZVkgLSAocmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAgIHNldFJpcHBsZURhdGEoe1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgd2lkdGg6IGAxMDBweGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uTW91c2VEb3duLCByaXBwbGVEYXRhLnNob3ddXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyO1xuICAgIGlmIChyaXBwbGVEYXRhLnNob3cpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFJpcHBsZURhdGEoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbcmlwcGxlRGF0YS5zaG93XSk7XG5cbiAgbGV0IGJ0blByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogY3goY2xhc3NOYW1lLCBzdHlsZXMuYnRuLCBzdHlsZXMuZmVlZGJhY2ssIHN0eWxlc1tgYnRuJHtjYXBpdGFsaXplKGtpbmQpfWBdLCB7XG4gICAgICBbc3R5bGVzLmJ0bkFsdF06IGFsdCxcbiAgICAgIFtzdHlsZXMuYnRuRmxhdF06IGZsYXQsXG4gICAgICBbc3R5bGVzLmJ0bkZ1bGxdOiBmdWxsV2lkdGgsXG4gICAgICBbc3R5bGVzLmJ0bkljb25Pbmx5XTogaWNvbk9ubHksXG4gICAgICBbc3R5bGVzLmJ0bkljb25SaWdodF06ICEhaWNvbiAmJiBpY29uUG9zaXRpb24gPT09ICdyaWdodCcsXG4gICAgICBbc3R5bGVzLmJ0bkxnXTogbGFyZ2UsXG4gICAgICBbc3R5bGVzLmJ0bk9uRGFya106IG9uRGFyayxcbiAgICAgIFtzdHlsZXMuYnRuU21dOiBzbWFsbCxcbiAgICAgIFtzdHlsZXMucHJpbWVdOiBwcmltZSxcbiAgICB9KSxcbiAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duLFxuICAgIC4uLm90aGVycyxcbiAgfTtcblxuICBjb25zdCBidXR0b25UZXh0ID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICA/IGNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiB0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKS5qb2luKCcgJylcbiAgICA6IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICA/IGNoaWxkcmVuLnRvU3RyaW5nKClcbiAgICA6IG51bGw7XG5cbiAgbGV0IGJ0bkNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgaWYgKGJ1dHRvblRleHQgJiYgIWljb25Pbmx5KSB7XG4gICAgYnRuUHJvcHMgPSB7ICdhcmlhLWxhYmVsJzogYnV0dG9uVGV4dCwgLi4uYnRuUHJvcHMgfTtcbiAgICBidG5DaGlsZHJlbiA9IDxzcGFuPntjaGlsZHJlbn08L3NwYW4+O1xuICAgIGlmIChsb2FkaW5nKSBidG5DaGlsZHJlbiA9IDxzcGFuPntsb2FkaW5nVGV4dH08L3NwYW4+O1xuICB9XG5cbiAgbGV0IGluamVjdGVkSWNvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCB0bXBJbmplY3RlZEljb247XG4gICAgaWYgKGljb24pIHtcbiAgICAgIGNvbnN0IGljb25TcmMgPSBpY29uLnByb3BzLnNyYztcbiAgICAgIGNvbnN0IGlzU3Bpbm5lciA9IGljb25TcmMuaW5kZXhPZignc3Bpbm5lcicpID09PSAwO1xuICAgICAgdG1wSW5qZWN0ZWRJY29uID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb25CdG4sIHtcbiAgICAgICAgICBbc3Bpbm5lclN0eWxlc1tgaWNvbiR7Y2FwaXRhbGl6ZShjYW1lbENhc2UoaWNvblNyYykpfUJ0bmBdXTogaXNTcGlubmVyLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRtcEluamVjdGVkSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCBbaWNvbl0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgbGV0IGxvYWRpbmdJY29uU3R5bGUgPSB7IGZvbnRTaXplOiAnMTZweCcgfTtcbiAgICBpZiAoc21hbGwpIGxvYWRpbmdJY29uU3R5bGUgPSB7IGZvbnRTaXplOiAnOHB4JyB9O1xuICAgIGVsc2UgaWYgKGxhcmdlKSBsb2FkaW5nSWNvblN0eWxlID0geyBmb250U2l6ZTogJzI0cHgnIH07XG4gICAgY29uc3QgbG9hZGluZ0ljb24gPSA8SWNvbiBzdHlsZT17bG9hZGluZ0ljb25TdHlsZX0gc3JjPVwic3Bpbm5lcl9tZFwiIC8+O1xuICAgIGNvbnN0IGxvYWRpbmdJY29uU3JjID0gbG9hZGluZ0ljb24ucHJvcHMuc3JjO1xuICAgIGluamVjdGVkSWNvbiA9IFJlYWN0LmNsb25lRWxlbWVudChsb2FkaW5nSWNvbiwge1xuICAgICAgY2xhc3NOYW1lOiBjeChsb2FkaW5nSWNvbi5wcm9wcy5jbGFzc05hbWUsIHN0eWxlcy5pY29uQnRuKSxcbiAgICAgIGV4dGVybmFsSWNvbkNsYXNzTmFtZTogc3R5bGVzW2BpY29uJHtjYXBpdGFsaXplKGNhbWVsQ2FzZShsb2FkaW5nSWNvblNyYykpfUJ0bmBdLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYnV0dG9uQ29udGVudCA9IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7aWNvblBvc2l0aW9uID09PSAncmlnaHQnID8gYnRuQ2hpbGRyZW4gOiBpbmplY3RlZEljb259XG4gICAgICB7aWNvblBvc2l0aW9uID09PSAncmlnaHQnID8gaW5qZWN0ZWRJY29uIDogYnRuQ2hpbGRyZW59XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcblxuICBjb25zdCB7IGhyZWYgfSA9IHByb3BzO1xuXG4gIHJldHVybiBocmVmID8gKFxuICAgIDxhIHsuLi5idG5Qcm9wc30+XG4gICAgICB7YnV0dG9uQ29udGVudH1cbiAgICAgIHtyaXBwbGVEYXRhLnNob3cgJiYgKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJpcHBsZX1cbiAgICAgICAgICBzdHlsZT17eyB0b3A6IHJpcHBsZURhdGEudG9wLCBsZWZ0OiByaXBwbGVEYXRhLmxlZnQsIHdpZHRoOiByaXBwbGVEYXRhLndpZHRoLCBoZWlnaHQ6IHJpcHBsZURhdGEud2lkdGggfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9hPlxuICApIDogKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJlZj17YnV0dG9uUmVmfSB7Li4uYnRuUHJvcHN9PlxuICAgICAge2J1dHRvbkNvbnRlbnR9XG4gICAgICB7cmlwcGxlRGF0YS5zaG93ICYmIChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yaXBwbGV9XG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiByaXBwbGVEYXRhLnRvcCwgbGVmdDogcmlwcGxlRGF0YS5sZWZ0LCB3aWR0aDogcmlwcGxlRGF0YS53aWR0aCwgaGVpZ2h0OiByaXBwbGVEYXRhLndpZHRoIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuLyogaGFuZGxlTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gIGlmICh0aGlzLnByb3BzLm9uTW91c2VEb3duKSB0aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgaWYgKHRoaXMuZG9SaXBwbGUoKSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnRzLmdldE1vdXNlUG9zaXRpb24oZXZlbnQpO1xuICAgIHRoaXMuYW5pbWF0ZVJpcHBsZSh4LCB5LCBmYWxzZSk7XG4gIH1cbn07XG5cbmhhbmRsZVRvdWNoU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgaWYgKHRoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB0aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gIGlmICh0aGlzLmRvUmlwcGxlKCkpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGV2ZW50cy5nZXRUb3VjaFBvc2l0aW9uKGV2ZW50KTtcbiAgICB0aGlzLmFuaW1hdGVSaXBwbGUoeCwgeSwgdHJ1ZSk7XG4gIH1cbn07ICovXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhbHQ6IFByb3BUeXBlcy5ib29sLFxuICBmbGF0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgaWNvblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICBpY29uT25seTogUHJvcFR5cGVzLmJvb2wsXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnZGFuZ2VyJywgJ3ByaW1hcnknLCAnYnJhbmQnXSksXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkRhcms6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBraW5kOiAnZGVmYXVsdCcsXG4gIGljb25Qb3NpdGlvbjogJ2xlZnQnLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgbG9hZGluZ1RleHQ6ICdsb2FkaW5nJyxcbn07XG4iXX0=