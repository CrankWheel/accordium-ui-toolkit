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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    icon,
    name,
    label: labelText,
    maxLength,
    multiline,
    inputRef,
    required,
    role,
    type,
    value,
    onKeyPress,
    rows = 3,
    onChange,
    onDark = false,
    caption
  } = props,
        others = _objectWithoutProperties(props, ["children", "defaultValue", "disabled", "error", "floating", "icon", "name", "label", "maxLength", "multiline", "inputRef", "required", "role", "type", "value", "onKeyPress", "rows", "onChange", "onDark", "caption"]);

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

    const element = inputRef.current;

    if (typeof rows === 'number' && !Number.isNaN(rows)) {
      element.style.height = null;
    } else {
      const style = getComputedStyle(element, null);
      const heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight + heightOffset}px`;
    }
  }.bind(this), [inputRef, rows]);
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
      ref: inputRef,
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
  }.bind(this), [defaultValue, disabled, handleChange, handleKeyPress, inputRef, maxLength, multiline, name, onKeyPress, others, required, role, rows, type, value, valuePresent]);
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
      [_inputModule.default.onLight]: !onDark
    })
  }, multiline ? _react.default.createElement("textarea", inputElementProps) : _react.default.createElement("input", inputElementProps), !!injectedIcon && injectedIcon, _react.default.createElement("div", {
    className: _inputModule.default.metadata
  }, labelText ? _react.default.createElement("label", {
    className: labelClassName
  }, labelText, required ? _react.default.createElement("span", {
    className: _inputModule.default.required
  }, " * ") : null) : _react.default.createElement("div", null), _react.default.createElement("div", {
    className: _inputModule.default.metadataRightContent
  }, maxLength ? _react.default.createElement("span", {
    className: _inputModule.default.counter
  }, `${length}/${maxLength}`) : null, caption ? _react.default.createElement("span", {
    className: (0, _classnames.default)(_inputModule.default.caption, {
      [_inputModule.default.noLength]: !maxLength
    })
  }, caption) : null)), _react.default.createElement("span", {
    className: (0, _classnames.default)(_inputModule.default.error, {
      [_inputModule.default.hide]: !error
    })
  }, error || '_'), children);
}

Input.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  floating: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]),
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  maxLength: _propTypes.default.number,
  multiline: _propTypes.default.bool,

  inputRef(props, propName) {
    if (props.multiline === true && (props[propName] === undefined || typeof props[propName] !== 'function')) {
      return new Error('Please provide an InputRef function!');
    }
  },

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
  disabled: false,
  floating: true,
  multiline: false,
  required: false,
  role: 'input',
  type: 'text'
};
var _default = Input;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0lucHV0L0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0IiwicHJvcHMiLCJjaGlsZHJlbiIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiZXJyb3IiLCJmbG9hdGluZyIsImljb24iLCJuYW1lIiwibGFiZWwiLCJsYWJlbFRleHQiLCJtYXhMZW5ndGgiLCJtdWx0aWxpbmUiLCJpbnB1dFJlZiIsInJlcXVpcmVkIiwicm9sZSIsInR5cGUiLCJ2YWx1ZSIsIm9uS2V5UHJlc3MiLCJyb3dzIiwib25DaGFuZ2UiLCJvbkRhcmsiLCJjYXB0aW9uIiwib3RoZXJzIiwibGVuZ3RoIiwibGFiZWxDbGFzc05hbWUiLCJzdHlsZXMiLCJmaXhlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWVGcm9tRXZlbnQiLCJ0YXJnZXQiLCJoYXZlVG9UcmltIiwic3Vic3RyIiwiaGFuZGxlS2V5UHJlc3MiLCJpc1JlcGxhY2luZyIsInNlbGVjdGlvbkVuZCIsInNlbGVjdGlvblN0YXJ0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmRlZmluZWQiLCJoYW5kbGVBdXRvcmVzaXplIiwiZWxlbWVudCIsImN1cnJlbnQiLCJOdW1iZXIiLCJpc05hTiIsInN0eWxlIiwiaGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodE9mZnNldCIsImJveFNpemluZyIsInBhcnNlRmxvYXQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImlucHV0IiwiZXJyb3JlZCIsImhpZGRlbiIsIndpdGhJY29uIiwidmFsdWVQcmVzZW50IiwiaW5wdXRFbGVtZW50UHJvcHMiLCJlbGVtUHJvcHMiLCJpbnB1dEVsZW1lbnQiLCJmaWxsZWQiLCJyZWYiLCJpbmplY3RlZEljb24iLCJ0bXBJbmplY3RlZEljb24iLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIm9uTGlnaHQiLCJtZXRhZGF0YSIsIm1ldGFkYXRhUmlnaHRDb250ZW50IiwiY291bnRlciIsIm5vTGVuZ3RoIiwiaGlkZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwibnVtYmVyIiwicHJvcE5hbWUiLCJFcnJvciIsIm9uQmx1ciIsImZ1bmMiLCJvbkZvY3VzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ3BCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUVKQyxJQUFBQSxZQUZJO0FBR0pDLElBQUFBLFFBSEk7QUFJSkMsSUFBQUEsS0FKSTtBQUtKQyxJQUFBQSxRQUxJO0FBTUpDLElBQUFBLElBTkk7QUFPSkMsSUFBQUEsSUFQSTtBQVFKQyxJQUFBQSxLQUFLLEVBQUVDLFNBUkg7QUFTSkMsSUFBQUEsU0FUSTtBQVVKQyxJQUFBQSxTQVZJO0FBV0pDLElBQUFBLFFBWEk7QUFZSkMsSUFBQUEsUUFaSTtBQWFKQyxJQUFBQSxJQWJJO0FBY0pDLElBQUFBLElBZEk7QUFlSkMsSUFBQUEsS0FmSTtBQWdCSkMsSUFBQUEsVUFoQkk7QUFpQkpDLElBQUFBLElBQUksR0FBRyxDQWpCSDtBQWtCSkMsSUFBQUEsUUFsQkk7QUFtQkpDLElBQUFBLE1BQU0sR0FBRyxLQW5CTDtBQW9CSkMsSUFBQUE7QUFwQkksTUFzQkZyQixLQXRCSjtBQUFBLFFBcUJLc0IsTUFyQkwsNEJBc0JJdEIsS0F0Qko7O0FBdUJBLFFBQU11QixNQUFNLEdBQUcsb0JBQVE7QUFBQTs7QUFBQSxXQUFPYixTQUFTLElBQUlNLEtB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ZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGlzVmFsdWVQcmVzZW50IH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5wdXQubW9kdWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGRpc2FibGVkLFxuICAgIGVycm9yLFxuICAgIGZsb2F0aW5nLFxuICAgIGljb24sXG4gICAgbmFtZSxcbiAgICBsYWJlbDogbGFiZWxUZXh0LFxuICAgIG1heExlbmd0aCxcbiAgICBtdWx0aWxpbmUsXG4gICAgaW5wdXRSZWYsXG4gICAgcmVxdWlyZWQsXG4gICAgcm9sZSxcbiAgICB0eXBlLFxuICAgIHZhbHVlLFxuICAgIG9uS2V5UHJlc3MsXG4gICAgcm93cyA9IDMsXG4gICAgb25DaGFuZ2UsXG4gICAgb25EYXJrID0gZmFsc2UsXG4gICAgY2FwdGlvbixcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBsZW5ndGggPSB1c2VNZW1vKCgpID0+IChtYXhMZW5ndGggJiYgdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwKSwgW21heExlbmd0aCwgdmFsdWVdKTtcbiAgY29uc3QgbGFiZWxDbGFzc05hbWUgPSB1c2VNZW1vKCgpID0+IGN4KHN0eWxlcy5sYWJlbCwgeyBbc3R5bGVzLmZpeGVkXTogIWZsb2F0aW5nIH0pLCBbZmxvYXRpbmddKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBpZiAob25DaGFuZ2UgJiYgIShtdWx0aWxpbmUgJiYgbWF4TGVuZ3RoKSkge1xuICAgICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZUZyb21FdmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAvLyBUcmltIHZhbHVlIHRvIG1heExlbmd0aCBpZiB0aGF0IGV4aXN0cyAob25seSBvbiBtdWx0aWxpbmUgaW5wdXRzKS5cbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc3RpbGwgcmVxdWlyZWQgZXZlbiB0aG8gd2UgaGF2ZSB0aGUgb25LZXlQcmVzcyBmaWx0ZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgdXNlciBjb3VsZCBwYXN0ZSBzbXQgaW4gdGhlIHRleHRhcmVhLlxuICAgICAgICBjb25zdCBoYXZlVG9UcmltID0gbXVsdGlsaW5lICYmIG1heExlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoO1xuICAgICAgICAvLyBwcm9wYWdhdGUgdG8gdG8gc3RvcmUgYW5kIHRoZXJlZm9yZSB0byB0aGUgaW5wdXRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGhhdmVUb1RyaW0gPyB2YWx1ZUZyb21FdmVudC5zdWJzdHIoMCwgbWF4TGVuZ3RoKSA6IHZhbHVlRnJvbUV2ZW50O1xuICAgICAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFttYXhMZW5ndGgsIG11bHRpbGluZSwgb25DaGFuZ2VdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICAvLyBwcmV2ZW50IGluc2VydGlvbiBvZiBtb3JlIGNoYXJhY3RlcnMgaWYgd2UncmUgYSBtdWx0aWxpbmUgaW5wdXRcbiAgICAgIC8vIGFuZCBtYXhMZW5ndGggZXhpc3RzXG4gICAgICBpZiAobXVsdGlsaW5lICYmIG1heExlbmd0aCkge1xuICAgICAgICAvLyBjaGVjayBpZiBzbXQgaXMgc2VsZWN0ZWQsIGluIHdoaWNoIGNhc2UgdGhlIG5ld2x5IGFkZGVkIGNoYXJjdGVyIHdvdWxkXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIHNlbGVjdGVkIGNoYXJhY3RlcnMsIHNvIHRoZSBsZW5ndGggb2YgdmFsdWUgZG9lc24ndCBhY3R1YWxseVxuICAgICAgICAvLyBpbmNyZWFzZS5cbiAgICAgICAgY29uc3QgaXNSZXBsYWNpbmcgPSBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kIC0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICAgIGlmICghaXNSZXBsYWNpbmcgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvbktleVByZXNzKSBvbktleVByZXNzKGV2ZW50KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBbbWF4TGVuZ3RoLCBtdWx0aWxpbmUsIG9uS2V5UHJlc3NdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQXV0b3Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gaW5wdXRSZWYuY3VycmVudDtcblxuICAgIGlmICh0eXBlb2Ygcm93cyA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc05hTihyb3dzKSkge1xuICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb21wdXRlIHRoZSBoZWlnaHQgZGlmZmVyZW5jZSBiZXR3ZWVuIGlubmVyIGhlaWdodCBhbmQgb3V0ZXIgaGVpZ2h0XG4gICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gICAgICBjb25zdCBoZWlnaHRPZmZzZXQgPVxuICAgICAgICBzdHlsZS5ib3hTaXppbmcgPT09ICdjb250ZW50LWJveCdcbiAgICAgICAgICA/IC0ocGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSkpXG4gICAgICAgICAgOiBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuXG4gICAgICAvLyByZXNpemUgdGhlIGlucHV0IHRvIGl0cyBjb250ZW50IHNpemVcbiAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtlbGVtZW50LnNjcm9sbEhlaWdodCArIGhlaWdodE9mZnNldH1weGA7XG4gICAgfVxuICB9LCBbaW5wdXRSZWYsIHJvd3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtdWx0aWxpbmUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVBdXRvcmVzaXplKTtcbiAgICAgIGhhbmRsZUF1dG9yZXNpemUoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtdWx0aWxpbmUpIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVBdXRvcmVzaXplKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlQXV0b3Jlc2l6ZSwgbXVsdGlsaW5lXSk7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY3goXG4gICAgICAgIHN0eWxlcy5pbnB1dCxcbiAgICAgICAge1xuICAgICAgICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgICAgICAgICBbc3R5bGVzLmVycm9yZWRdOiBlcnJvcixcbiAgICAgICAgICBbc3R5bGVzLmhpZGRlbl06IHR5cGUgPT09ICdoaWRkZW4nLFxuICAgICAgICAgIFtzdHlsZXMud2l0aEljb25dOiBpY29uLFxuICAgICAgICB9LFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50XG4gICAgW2Rpc2FibGVkLCBlcnJvciwgaWNvbiwgcHJvcHMuY2xhc3NOYW1lLCB0eXBlXVxuICApO1xuXG4gIGNvbnN0IHZhbHVlUHJlc2VudCA9IHVzZU1lbW8oKCkgPT4gaXNWYWx1ZVByZXNlbnQodmFsdWUpIHx8IGlzVmFsdWVQcmVzZW50KGRlZmF1bHRWYWx1ZSksIFtkZWZhdWx0VmFsdWUsIHZhbHVlXSk7XG5cbiAgY29uc3QgaW5wdXRFbGVtZW50UHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBlbGVtUHJvcHMgPSB7XG4gICAgICAuLi5vdGhlcnMsXG4gICAgICBjbGFzc05hbWU6IGN4KHN0eWxlcy5pbnB1dEVsZW1lbnQsIHsgW3N0eWxlcy5maWxsZWRdOiB2YWx1ZVByZXNlbnQgfSksXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgIHJvbGUsXG4gICAgICBuYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIHR5cGUsXG4gICAgICB2YWx1ZSxcbiAgICB9O1xuICAgIGlmICghbXVsdGlsaW5lKSB7XG4gICAgICBlbGVtUHJvcHMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgZWxlbVByb3BzLm9uS2V5UHJlc3MgPSBvbktleVByZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtUHJvcHMucm93cyA9IHJvd3M7XG4gICAgICBlbGVtUHJvcHMub25LZXlQcmVzcyA9IGhhbmRsZUtleVByZXNzO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbVByb3BzO1xuICB9LCBbXG4gICAgZGVmYXVsdFZhbHVlLFxuICAgIGRpc2FibGVkLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVLZXlQcmVzcyxcbiAgICBpbnB1dFJlZixcbiAgICBtYXhMZW5ndGgsXG4gICAgbXVsdGlsaW5lLFxuICAgIG5hbWUsXG4gICAgb25LZXlQcmVzcyxcbiAgICBvdGhlcnMsXG4gICAgcmVxdWlyZWQsXG4gICAgcm9sZSxcbiAgICByb3dzLFxuICAgIHR5cGUsXG4gICAgdmFsdWUsXG4gICAgdmFsdWVQcmVzZW50LFxuICBdKTtcblxuICBjb25zdCBpbmplY3RlZEljb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdG1wSW5qZWN0ZWRJY29uO1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0bXBJbmplY3RlZEljb24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6IGN4KGljb24ucHJvcHMuY2xhc3NOYW1lLCBzdHlsZXMuaWNvbiksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0bXBJbmplY3RlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpY29uO1xuICAgIH1cbiAgfSwgW2ljb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHsgW3N0eWxlcy5vbkxpZ2h0XTogIW9uRGFyayB9KX0+XG4gICAgICB7bXVsdGlsaW5lID8gPHRleHRhcmVhIHsuLi5pbnB1dEVsZW1lbnRQcm9wc30gLz4gOiA8aW5wdXQgey4uLmlucHV0RWxlbWVudFByb3BzfSAvPn1cbiAgICAgIHshIWluamVjdGVkSWNvbiAmJiBpbmplY3RlZEljb259XG4gICAgICB7LyogTWV0YWRhdGEgaW5jbHVkZSBsYWJlbCwgY2FwdGlvbnMgYW5kIGNoYXIgbGVuZ3RoIHRoYXQgbW92ZXMgdXAgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCBvciBoYXMgYSB2YWx1ZSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWRhdGF9PlxuICAgICAgICB7bGFiZWxUZXh0ID8gKFxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2xhYmVsQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHtsYWJlbFRleHR9XG4gICAgICAgICAgICB7cmVxdWlyZWQgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5yZXF1aXJlZH0+ICogPC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWRhdGFSaWdodENvbnRlbnR9PlxuICAgICAgICAgIHttYXhMZW5ndGggPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyfT57YCR7bGVuZ3RofS8ke21heExlbmd0aH1gfTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICAgIHtjYXB0aW9uID8gPHNwYW4gY2xhc3NOYW1lPXtjeChzdHlsZXMuY2FwdGlvbiwgeyBbc3R5bGVzLm5vTGVuZ3RoXTogIW1heExlbmd0aCB9KX0+e2NhcHRpb259PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KHN0eWxlcy5lcnJvciwgeyBbc3R5bGVzLmhpZGVdOiAhZXJyb3IgfSl9PntlcnJvciB8fCAnXyd9PC9zcGFuPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGZsb2F0aW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5ub2RlXSksXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBtYXhMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVybixyZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHNcbiAgaW5wdXRSZWYocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKHByb3BzLm11bHRpbGluZSA9PT0gdHJ1ZSAmJiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGFuIElucHV0UmVmIGZ1bmN0aW9uIScpO1xuICAgIH1cbiAgfSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZzogdHJ1ZSxcbiAgbXVsdGlsaW5lOiBmYWxzZSxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICByb2xlOiAnaW5wdXQnLFxuICB0eXBlOiAndGV4dCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==