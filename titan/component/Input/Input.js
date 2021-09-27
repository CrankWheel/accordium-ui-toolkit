"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("../../util");

var _inputModule = _interopRequireDefault(require("./input.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(props) {
  var _this = this;

  const {
    children,
    defaultValue,
    disabled,
    error,
    floating,
    hint,
    icon,
    name,
    label: labelText,
    maxLength,
    multiline,
    required,
    role,
    type,
    value,
    onKeyPress,
    rows = 1,
    onChange,
    onLight = false,
    caption
  } = props,
        others = _objectWithoutProperties(props, ["children", "defaultValue", "disabled", "error", "floating", "hint", "icon", "name", "label", "maxLength", "multiline", "required", "role", "type", "value", "onKeyPress", "rows", "onChange", "onLight", "caption"]);

  const inputNode = (0, _react.useRef)(null);
  const length = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return maxLength && value ? value.length : 0;
  }.bind(this), [maxLength, value]);
  const labelClassName = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return (0, _classnames.default)(_inputModule.default.label, {
      [_inputModule.default.fixed]: !floating
    });
  }.bind(this), [floating]);
  const handleChange = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (onChange && !(multiline && maxLength)) {
      onChange(event);
    } else {
      const valueFromEvent = event.target.value;
      const haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
      event.target.value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;
      if (onChange) onChange(event);
    }
  }.bind(this), [maxLength, multiline, onChange]);
  const handleKeyPress = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (multiline && maxLength) {
      const isReplacing = event.target.selectionEnd - event.target.selectionStart;

      if (!isReplacing && event.target.value.length === maxLength) {
        event.preventDefault();
        event.stopPropagation();
        return undefined;
      }
    }

    if (onKeyPress) onKeyPress(event);
    return undefined;
  }.bind(this), [maxLength, multiline, onKeyPress]);
  const handleAutoresize = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    const element = inputNode.current;

    if (typeof rows === 'number' && !Number.isNaN(rows)) {
      element.style.height = null;
    } else {
      const style = getComputedStyle(element, null);
      const heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight + heightOffset}px`;
    }
  }.bind(this), [rows]);
  (0, _react.useEffect)(function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    if (multiline) {
      window.addEventListener('resize', handleAutoresize);
      handleAutoresize();
    }

    return function () {
      _newArrowCheck(this, _this2);

      if (multiline) window.removeEventListener('resize', handleAutoresize);
    }.bind(this);
  }.bind(this), [handleAutoresize, multiline]);
  const className = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return (0, _classnames.default)(_inputModule.default.input, {
      [_inputModule.default.disabled]: disabled,
      [_inputModule.default.errored]: error,
      [_inputModule.default.hidden]: type === 'hidden',
      [_inputModule.default.withIcon]: icon
    }, props.className);
  }.bind(this), [disabled, error, icon, props.className, type]);
  const valuePresent = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return (0, _util.isValuePresent)(value) || (0, _util.isValuePresent)(defaultValue);
  }.bind(this), [defaultValue, value]);
  const inputElementProps = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    const elemProps = _objectSpread({}, others, {
      className: (0, _classnames.default)(_inputModule.default.inputElement, {
        [_inputModule.default.filled]: valuePresent
      }),
      onChange: handleChange,
      ref: inputNode,
      role,
      name,
      defaultValue,
      disabled,
      required,
      type,
      value
    });

    if (!multiline) {
      elemProps.maxLength = maxLength;
      elemProps.onKeyPress = onKeyPress;
    } else {
      elemProps.rows = rows;
      elemProps.onKeyPress = handleKeyPress;
    }

    return elemProps;
  }.bind(this), [defaultValue, disabled, handleChange, handleKeyPress, maxLength, multiline, name, onKeyPress, others, required, role, rows, type, value, valuePresent]);
  const injectedIcon = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    let tmpInjectedIcon;

    if (icon) {
      tmpInjectedIcon = _react.default.cloneElement(icon, {
        className: (0, _classnames.default)(icon.props.className, _inputModule.default.icon)
      });
      return tmpInjectedIcon;
    } else {
      return icon;
    }
  }.bind(this), [icon]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, {
      [_inputModule.default.onLight]: onLight
    })
  }, _react.default.createElement(multiline ? 'textarea' : 'input', inputElementProps), !!injectedIcon && injectedIcon, _react.default.createElement("span", {
    className: _inputModule.default.bar
  }), labelText ? _react.default.createElement("label", {
    className: labelClassName
  }, labelText, required ? _react.default.createElement("span", {
    className: _inputModule.default.required
  }, " * ") : null) : null, hint ? _react.default.createElement("span", {
    hidden: labelText,
    className: _inputModule.default.hint
  }, hint) : null, error ? _react.default.createElement("span", {
    className: _inputModule.default.error
  }, error) : null, maxLength ? _react.default.createElement("span", {
    className: _inputModule.default.counter
  }, `${length}/${maxLength}`) : null, caption ? _react.default.createElement("span", {
    className: (0, _classnames.default)(_inputModule.default.caption, {
      [_inputModule.default.noLength]: !maxLength
    })
  }, caption) : null, children);
}

Input.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  floating: _propTypes.default.bool,
  hint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  icon: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]),
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  maxLength: _propTypes.default.number,
  multiline: _propTypes.default.bool,
  name: _propTypes.default.string,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  required: _propTypes.default.bool,
  role: _propTypes.default.string,
  rows: _propTypes.default.number,
  type: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.object, _propTypes.default.string])
};
Input.defaultProps = {
  className: '',
  hint: '',
  disabled: false,
  floating: true,
  multiline: false,
  required: false,
  role: 'input',
  type: 'text'
};
var _default = Input;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvSW5wdXQvSW5wdXQuanMiXSwibmFtZXMiOlsiSW5wdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJlcnJvciIsImZsb2F0aW5nIiwiaGludCIsImljb24iLCJuYW1lIiwibGFiZWwiLCJsYWJlbFRleHQiLCJtYXhMZW5ndGgiLCJtdWx0aWxpbmUiLCJyZXF1aXJlZCIsInJvbGUiLCJ0eXBlIiwidmFsdWUiLCJvbktleVByZXNzIiwicm93cyIsIm9uQ2hhbmdlIiwib25MaWdodCIsImNhcHRpb24iLCJvdGhlcnMiLCJpbnB1dE5vZGUiLCJsZW5ndGgiLCJsYWJlbENsYXNzTmFtZSIsInN0eWxlcyIsImZpeGVkIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZUZyb21FdmVudCIsInRhcmdldCIsImhhdmVUb1RyaW0iLCJzdWJzdHIiLCJoYW5kbGVLZXlQcmVzcyIsImlzUmVwbGFjaW5nIiwic2VsZWN0aW9uRW5kIiwic2VsZWN0aW9uU3RhcnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInVuZGVmaW5lZCIsImhhbmRsZUF1dG9yZXNpemUiLCJlbGVtZW50IiwiY3VycmVudCIsIk51bWJlciIsImlzTmFOIiwic3R5bGUiLCJoZWlnaHQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGVpZ2h0T2Zmc2V0IiwiYm94U2l6aW5nIiwicGFyc2VGbG9hdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsInNjcm9sbEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJlcnJvcmVkIiwiaGlkZGVuIiwid2l0aEljb24iLCJ2YWx1ZVByZXNlbnQiLCJpbnB1dEVsZW1lbnRQcm9wcyIsImVsZW1Qcm9wcyIsImlucHV0RWxlbWVudCIsImZpbGxlZCIsInJlZiIsImluamVjdGVkSWNvbiIsInRtcEluamVjdGVkSWNvbiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImJhciIsImNvdW50ZXIiLCJub0xlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwibnVtYmVyIiwib25CbHVyIiwiZnVuYyIsIm9uRm9jdXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDcEIsUUFBTTtBQUNKQyxJQUFBQSxRQURJO0FBRUpDLElBQUFBLFlBRkk7QUFHSkMsSUFBQUEsUUFISTtBQUlKQyxJQUFBQSxLQUpJO0FBS0pDLElBQUFBLFFBTEk7QUFNSkMsSUFBQUEsSUFOSTtBQU9KQyxJQUFBQSxJQVBJO0FBUUpDLElBQUFBLElBUkk7QUFTSkMsSUFBQUEsS0FBSyxFQUFFQyxTQVRIO0FBVUpDLElBQUFBLFNBVkk7QUFXSkMsSUFBQUEsU0FYSTtBQVlKQyxJQUFBQSxRQVpJO0FBYUpDLElBQUFBLElBYkk7QUFjSkMsSUFBQUEsSUFkSTtBQWVKQyxJQUFBQSxLQWZJO0FBZ0JKQyxJQUFBQSxVQWhCSTtBQWlCSkMsSUFBQUEsSUFBSSxHQUFHLENBakJIO0FBa0JKQyxJQUFBQSxRQWxCSTtBQW1CSkMsSUFBQUEsT0FBTyxHQUFHLEtBbkJOO0FBb0JKQyxJQUFBQTtBQXBCSSxNQXNCRnJCLEtBdEJKO0FBQUEsUUFxQktzQixNQXJCTCw0QkFzQkl0QixLQXRCSjs7QUF1QkEsUUFBTXVCLFNBQVMsR0FBRyxtQkFBTyxJQUFQLENBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLG9CQUFRO0FBQUE7O0FBQUEsV0FBT2IsU0FBUyxJQUFJSyxLQUFi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QUEsSUFBSSxFQUFFd0UsbUJBQVVFLE1BWkE7QUFhaEJJLEVBQUFBLE1BQU0sRUFBRU4sbUJBQVVPLElBYkY7QUFjaEJwRSxFQUFBQSxRQUFRLEVBQUU2RCxtQkFBVU8sSUFkSjtBQWVoQkMsRUFBQUEsT0FBTyxFQUFFUixtQkFBVU8sSUFmSDtBQWdCaEJ0RSxFQUFBQSxVQUFVLEVBQUUrRCxtQkFBVU8sSUFoQk47QUFpQmhCMUUsRUFBQUEsUUFBUSxFQUFFbUUsbUJBQVVHLElBakJKO0FBa0JoQnJFLEVBQUFBLElBQUksRUFBRWtFLG1CQUFVRSxNQWxCQTtBQW1CaEJoRSxFQUFBQSxJQUFJLEVBQUU4RCxtQkFBVUssTUFuQkE7QUFvQmhCdEUsRUFBQUEsSUFBSSxFQUFFaUUsbUJBQVVFLE1BcEJBO0FBcUJoQmxFLEVBQUFBLEtBQUssRUFBRWdFLG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVSyxNQUFYLEVBQW1CTCxtQkFBVVMsTUFBN0IsRUFBcUNULG1CQUFVRSxNQUEvQyxDQUFwQjtBQXJCUyxDQUFsQjtBQXdCQW5GLEtBQUssQ0FBQzJGLFlBQU4sR0FBcUI7QUFDbkI5QixFQUFBQSxTQUFTLEVBQUUsRUFEUTtBQUVuQnRELEVBQUFBLElBQUksRUFBRSxFQUZhO0FBR25CSCxFQUFBQSxRQUFRLEVBQUUsS0FIUztBQUluQkUsRUFBQUEsUUFBUSxFQUFFLElBSlM7QUFLbkJPLEVBQUFBLFNBQVMsRUFBRSxLQUxRO0FBTW5CQyxFQUFBQSxRQUFRLEVBQUUsS0FOUztBQU9uQkMsRUFBQUEsSUFBSSxFQUFFLE9BUGE7QUFRbkJDLEVBQUFBLElBQUksRUFBRTtBQVJhLENBQXJCO2VBV2VoQixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBpc1ZhbHVlUHJlc2VudCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lucHV0Lm1vZHVsZS5zY3NzJztcblxuZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBkaXNhYmxlZCxcbiAgICBlcnJvcixcbiAgICBmbG9hdGluZyxcbiAgICBoaW50LFxuICAgIGljb24sXG4gICAgbmFtZSxcbiAgICBsYWJlbDogbGFiZWxUZXh0LFxuICAgIG1heExlbmd0aCxcbiAgICBtdWx0aWxpbmUsXG4gICAgcmVxdWlyZWQsXG4gICAgcm9sZSxcbiAgICB0eXBlLFxuICAgIHZhbHVlLFxuICAgIG9uS2V5UHJlc3MsXG4gICAgcm93cyA9IDEsXG4gICAgb25DaGFuZ2UsXG4gICAgb25MaWdodCA9IGZhbHNlLFxuICAgIGNhcHRpb24sXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgaW5wdXROb2RlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBsZW5ndGggPSB1c2VNZW1vKCgpID0+IChtYXhMZW5ndGggJiYgdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwKSwgW21heExlbmd0aCwgdmFsdWVdKTtcbiAgY29uc3QgbGFiZWxDbGFzc05hbWUgPSB1c2VNZW1vKCgpID0+IGN4KHN0eWxlcy5sYWJlbCwgeyBbc3R5bGVzLmZpeGVkXTogIWZsb2F0aW5nIH0pLCBbZmxvYXRpbmddKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBpZiAob25DaGFuZ2UgJiYgIShtdWx0aWxpbmUgJiYgbWF4TGVuZ3RoKSkge1xuICAgICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZUZyb21FdmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAvLyBUcmltIHZhbHVlIHRvIG1heExlbmd0aCBpZiB0aGF0IGV4aXN0cyAob25seSBvbiBtdWx0aWxpbmUgaW5wdXRzKS5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc3RpbGwgcmVxdWlyZWQgZXZlbiB0aG8gd2UgaGF2ZSB0aGUgb25LZXlQcmVzcyBmaWx0ZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdXNlciBjb3VsZCBwYXN0ZSBzbXQgaW4gdGhlIHRleHRhcmVhLlxuICAgICAgICBjb25zdCBoYXZlVG9UcmltID0gbXVsdGlsaW5lICYmIG1heExlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoO1xuICAgICAgICAvLyBwcm9wYWdhdGUgdG8gdG8gc3RvcmUgYW5kIHRoZXJlZm9yZSB0byB0aGUgaW5wdXRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGhhdmVUb1RyaW0gPyB2YWx1ZUZyb21FdmVudC5zdWJzdHIoMCwgbWF4TGVuZ3RoKSA6IHZhbHVlRnJvbUV2ZW50O1xuICAgICAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFttYXhMZW5ndGgsIG11bHRpbGluZSwgb25DaGFuZ2VdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICAvLyBwcmV2ZW50IGluc2VydGlvbiBvZiBtb3JlIGNoYXJhY3RlcnMgaWYgd2UncmUgYSBtdWx0aWxpbmUgaW5wdXRcbiAgICAgIC8vIGFuZCBtYXhMZW5ndGggZXhpc3RzXG4gICAgICBpZiAobXVsdGlsaW5lICYmIG1heExlbmd0aCkge1xuICAgICAgICAvLyBjaGVjayBpZiBzbXQgaXMgc2VsZWN0ZWQsIGluIHdoaWNoIGNhc2UgdGhlIG5ld2x5IGFkZGVkIGNoYXJjdGVyIHdvdWxkXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIHNlbGVjdGVkIGNoYXJhY3RlcnMsIHNvIHRoZSBsZW5ndGggb2YgdmFsdWUgZG9lc24ndCBhY3R1YWxseVxuICAgICAgICAvLyBpbmNyZWFzZS5cbiAgICAgICAgY29uc3QgaXNSZXBsYWNpbmcgPSBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kIC0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICAgIGlmICghaXNSZXBsYWNpbmcgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbktleVByZXNzKSBvbktleVByZXNzKGV2ZW50KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBbbWF4TGVuZ3RoLCBtdWx0aWxpbmUsIG9uS2V5UHJlc3NdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQXV0b3Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXROb2RlLmN1cnJlbnQ7XG5cbiAgICBpZiAodHlwZW9mIHJvd3MgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4ocm93cykpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29tcHV0ZSB0aGUgaGVpZ2h0IGRpZmZlcmVuY2UgYmV0d2VlbiBpbm5lciBoZWlnaHQgYW5kIG91dGVyIGhlaWdodFxuICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgY29uc3QgaGVpZ2h0T2Zmc2V0ID1cbiAgICAgICAgc3R5bGUuYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnXG4gICAgICAgICAgPyAtKHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pKVxuICAgICAgICAgIDogcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblxuICAgICAgLy8gcmVzaXplIHRoZSBpbnB1dCB0byBpdHMgY29udGVudCBzaXplXG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBoZWlnaHRPZmZzZXR9cHhgO1xuICAgIH1cbiAgfSwgW3Jvd3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVBdXRvcmVzaXplKTtcbiAgICAgIGhhbmRsZUF1dG9yZXNpemUoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtdWx0aWxpbmUpIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVBdXRvcmVzaXplKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlQXV0b3Jlc2l6ZSwgbXVsdGlsaW5lXSk7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY3goXG4gICAgICAgIHN0eWxlcy5pbnB1dCxcbiAgICAgICAge1xuICAgICAgICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgICAgICBbc3R5bGVzLmVycm9yZWRdOiBlcnJvcixcbiAgICAgICAgICBbc3R5bGVzLmhpZGRlbl06IHR5cGUgPT09ICdoaWRkZW4nLFxuICAgICAgICAgIFtzdHlsZXMud2l0aEljb25dOiBpY29uLFxuICAgICAgICB9LFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50XG4gICAgW2Rpc2FibGVkLCBlcnJvciwgaWNvbiwgcHJvcHMuY2xhc3NOYW1lLCB0eXBlXVxuICApO1xuXG4gIGNvbnN0IHZhbHVlUHJlc2VudCA9IHVzZU1lbW8oKCkgPT4gaXNWYWx1ZVByZXNlbnQodmFsdWUpIHx8IGlzVmFsdWVQcmVzZW50KGRlZmF1bHRWYWx1ZSksIFtkZWZhdWx0VmFsdWUsIHZhbHVlXSk7XG5cbiAgY29uc3QgaW5wdXRFbGVtZW50UHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBlbGVtUHJvcHMgPSB7XG4gICAgICAuLi5vdGhlcnMsXG4gICAgICBjbGFzc05hbWU6IGN4KHN0eWxlcy5pbnB1dEVsZW1lbnQsIHsgW3N0eWxlcy5maWxsZWRdOiB2YWx1ZVByZXNlbnQgfSksXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgcmVmOiBpbnB1dE5vZGUsXG4gICAgICByb2xlLFxuICAgICAgbmFtZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVxdWlyZWQsXG4gICAgICB0eXBlLFxuICAgICAgdmFsdWUsXG4gICAgfTtcbiAgICBpZiAoIW11bHRpbGluZSkge1xuICAgICAgZWxlbVByb3BzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIGVsZW1Qcm9wcy5vbktleVByZXNzID0gb25LZXlQcmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbVByb3BzLnJvd3MgPSByb3dzO1xuICAgICAgZWxlbVByb3BzLm9uS2V5UHJlc3MgPSBoYW5kbGVLZXlQcmVzcztcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1Qcm9wcztcbiAgfSwgW1xuICAgIGRlZmF1bHRWYWx1ZSxcbiAgICBkaXNhYmxlZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlS2V5UHJlc3MsXG4gICAgbWF4TGVuZ3RoLFxuICAgIG11bHRpbGluZSxcbiAgICBuYW1lLFxuICAgIG9uS2V5UHJlc3MsXG4gICAgb3RoZXJzLFxuICAgIHJlcXVpcmVkLFxuICAgIHJvbGUsXG4gICAgcm93cyxcbiAgICB0eXBlLFxuICAgIHZhbHVlLFxuICAgIHZhbHVlUHJlc2VudCxcbiAgXSk7XG5cbiAgY29uc3QgaW5qZWN0ZWRJY29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRtcEluamVjdGVkSWNvbjtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdG1wSW5qZWN0ZWRJY29uID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeChpY29uLnByb3BzLmNsYXNzTmFtZSwgc3R5bGVzLmljb24pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG1wSW5qZWN0ZWRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG4gIH0sIFtpY29uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCB7IFtzdHlsZXMub25MaWdodF06IG9uTGlnaHQgfSl9PlxuICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQobXVsdGlsaW5lID8gJ3RleHRhcmVhJyA6ICdpbnB1dCcsIGlucHV0RWxlbWVudFByb3BzKX1cbiAgICAgIHshIWluamVjdGVkSWNvbiAmJiBpbmplY3RlZEljb259XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9IC8+XG4gICAgICB7bGFiZWxUZXh0ID8gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX0+XG4gICAgICAgICAge2xhYmVsVGV4dH1cbiAgICAgICAgICB7cmVxdWlyZWQgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXF1aXJlZH0+ICogPC9zcGFuPiA6IG51bGx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaW50ID8gKFxuICAgICAgICA8c3BhbiBoaWRkZW49e2xhYmVsVGV4dH0gY2xhc3NOYW1lPXtzdHlsZXMuaGludH0+XG4gICAgICAgICAge2hpbnR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2Vycm9yID8gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L3NwYW4+IDogbnVsbH1cbiAgICAgIHttYXhMZW5ndGggPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyfT57YCR7bGVuZ3RofS8ke21heExlbmd0aH1gfTwvc3Bhbj4gOiBudWxsfVxuICAgICAge2NhcHRpb24gPyA8c3BhbiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jYXB0aW9uLCB7IFtzdHlsZXMubm9MZW5ndGhdOiAhbWF4TGVuZ3RoIH0pfT57Y2FwdGlvbn08L3NwYW4+IDogbnVsbH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBmbG9hdGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGhpbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgbWF4TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBoaW50OiAnJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZzogdHJ1ZSxcbiAgbXVsdGlsaW5lOiBmYWxzZSxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICByb2xlOiAnaW5wdXQnLFxuICB0eXBlOiAndGV4dCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==