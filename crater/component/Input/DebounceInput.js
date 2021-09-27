"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DebounceInput extends _react.default.PureComponent {
  constructor(props) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {},
        _arrowCheckId4 = {},
        _arrowCheckId5 = {},
        _arrowCheckId6 = {};

    super(props);
    _this = this;

    _defineProperty(this, "onChange", function (event) {
      var _this2 = this;

      _newArrowCheck(this, _arrowCheckId);

      event.persist();
      const oldValue = _this.state.value;

      _this.setState({
        value: event.target.value
      }, function () {
        _newArrowCheck(this, _this2);

        const {
          value
        } = _this.state;

        if (value.length >= _this.props.minLength) {
          _this.notify(event);

          return;
        }

        if (oldValue.length > value.length) {
          _this.notify(_objectSpread({}, event, {
            target: _objectSpread({}, event.target, {
              value: ''
            })
          }));
        }
      }.bind(this));
    }.bind(_arrowCheckId));

    _defineProperty(this, "onKeyDown", function (event) {
      _newArrowCheck(this, _arrowCheckId2);

      const {
        onKeyDown
      } = _this.props;

      if (event.key === 'Enter') {
        _this.forceNotify(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }.bind(_arrowCheckId2));

    _defineProperty(this, "onBlur", function (event) {
      _newArrowCheck(this, _arrowCheckId3);

      const {
        onBlur
      } = _this.props;

      _this.forceNotify(event);

      if (onBlur) {
        onBlur(event);
      }
    }.bind(_arrowCheckId3));

    _defineProperty(this, "createNotifier", function (debounceTimeout) {
      var _this3 = this;

      _newArrowCheck(this, _arrowCheckId4);

      if (debounceTimeout < 0) {
        _this.notify = function () {
          _newArrowCheck(this, _this3);

          return null;
        }.bind(this);
      } else if (debounceTimeout === 0) {
        _this.notify = _this.doNotify;
      } else {
        const debouncedChangeFunc = (0, _lodash.default)(function (event) {
          _newArrowCheck(this, _this3);

          _this.isDebouncing = false;

          _this.doNotify(event);
        }.bind(this), debounceTimeout);

        _this.notify = function (event) {
          _newArrowCheck(this, _this3);

          _this.isDebouncing = true;
          debouncedChangeFunc(event);
        }.bind(this);

        _this.flush = function () {
          _newArrowCheck(this, _this3);

          return debouncedChangeFunc.flush();
        }.bind(this);

        _this.cancel = function () {
          _newArrowCheck(this, _this3);

          _this.isDebouncing = false;
          debouncedChangeFunc.cancel();
        }.bind(this);
      }
    }.bind(_arrowCheckId4));

    _defineProperty(this, "doNotify", function (...args) {
      _newArrowCheck(this, _arrowCheckId5);

      const {
        onChange
      } = _this.props;
      onChange(...args);
    }.bind(_arrowCheckId5));

    _defineProperty(this, "forceNotify", function (event) {
      _newArrowCheck(this, _arrowCheckId6);

      if (!_this.isDebouncing) {
        return;
      }

      if (_this.cancel) {
        _this.cancel();
      }

      const {
        value
      } = _this.state;
      const {
        minLength
      } = _this.props;

      if (value.length >= minLength) {
        _this.doNotify(event);
      } else {
        _this.doNotify(_objectSpread({}, event, {
          target: _objectSpread({}, event.target, {
            value
          })
        }));
      }
    }.bind(_arrowCheckId6));

    this.state = {
      value: props.value || ''
    };
    this.isDebouncing = false;
    this.createNotifier(props.debounceTimeout);
  }

  componentDidMount() {
    this.createNotifier(this.props.debounceTimeout);
  }

  componentDidUpdate(prevProps) {
    if (!this.isDebouncing) {
      if (prevProps.debounceTimeout !== this.props.debounceTimeout) {
        this.createNotifier(this.props.debounceTimeout);
      }
    }
  }

  componentWillUnmount() {
    if (this.flush) {
      this.flush();
    }
  }

  render() {
    const _this$props = this.props,
          {
      element,
      onChange: _onChange,
      value: _value,
      minLength: _minLength,
      debounceTimeout: _debounceTimeout,
      forceNotifyByEnter,
      forceNotifyOnBlur,
      onKeyDown,
      onBlur,
      inputRef
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["element", "onChange", "value", "minLength", "debounceTimeout", "forceNotifyByEnter", "forceNotifyOnBlur", "onKeyDown", "onBlur", "inputRef"]);

    let maybeOnKeyDown;

    if (forceNotifyByEnter) {
      maybeOnKeyDown = {
        onKeyDown: this.onKeyDown
      };
    } else if (onKeyDown) {
      maybeOnKeyDown = {
        onKeyDown
      };
    } else {
      maybeOnKeyDown = {};
    }

    let maybeOnBlur;

    if (forceNotifyOnBlur) {
      maybeOnBlur = {
        onBlur: this.onBlur
      };
    } else if (onBlur) {
      maybeOnBlur = {
        onBlur
      };
    } else {
      maybeOnBlur = {};
    }

    const maybeRef = inputRef ? {
      ref: inputRef
    } : {};
    return _react.default.createElement(element, _objectSpread({}, props, {
      onChange: this.onChange,
      value: this.state.value
    }, maybeOnKeyDown, {}, maybeOnBlur, {}, maybeRef));
  }

}

exports.default = DebounceInput;

_defineProperty(DebounceInput, "propTypes", {
  element: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  type: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  onKeyDown: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  minLength: _propTypes.default.number,
  debounceTimeout: _propTypes.default.number,
  forceNotifyByEnter: _propTypes.default.bool,
  forceNotifyOnBlur: _propTypes.default.bool,
  inputRef: _propTypes.default.func
});

_defineProperty(DebounceInput, "defaultProps", {
  element: 'input',
  type: 'text',
  onKeyDown: undefined,
  onBlur: undefined,
  value: undefined,
  minLength: 0,
  debounceTimeout: 100,
  forceNotifyByEnter: true,
  forceNotifyOnBlur: true,
  inputRef: undefined
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0lucHV0L0RlYm91bmNlSW5wdXQuanMiXSwibmFtZXMiOlsiRGVib3VuY2VJbnB1dCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJldmVudCIsInBlcnNpc3QiLCJvbGRWYWx1ZSIsInN0YXRlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImxlbmd0aCIsIm1pbkxlbmd0aCIsIm5vdGlmeSIsIm9uS2V5RG93biIsImtleSIsImZvcmNlTm90aWZ5Iiwib25CbHVyIiwiZGVib3VuY2VUaW1lb3V0IiwiZG9Ob3RpZnkiLCJkZWJvdW5jZWRDaGFuZ2VGdW5jIiwiaXNEZWJvdW5jaW5nIiwiZmx1c2giLCJjYW5jZWwiLCJhcmdzIiwib25DaGFuZ2UiLCJjcmVhdGVOb3RpZmllciIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJlbGVtZW50IiwiX29uQ2hhbmdlIiwiX3ZhbHVlIiwiX21pbkxlbmd0aCIsIl9kZWJvdW5jZVRpbWVvdXQiLCJmb3JjZU5vdGlmeUJ5RW50ZXIiLCJmb3JjZU5vdGlmeU9uQmx1ciIsImlucHV0UmVmIiwibWF5YmVPbktleURvd24iLCJtYXliZU9uQmx1ciIsIm1heWJlUmVmIiwicmVmIiwiY3JlYXRlRWxlbWVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImZ1bmMiLCJ0eXBlIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLE1BQU1BLGFBQU4sU0FBNEJDLGVBQU1DLGFBQWxDLENBQWdEO0FBNEI3REMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFBQTtBQUFBO0FBQUE7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LEVBQUVPLG1CQUFVTyxJQVZaO0FBV2pCYixFQUFBQSxRQUFRLEVBQUVNLG1CQUFVRztBQVhILEM7O2dCQURBakQsYSxrQkFlRztBQUNwQmlDLEVBQUFBLE9BQU8sRUFBRSxPQURXO0FBRXBCaUIsRUFBQUEsSUFBSSxFQUFFLE1BRmM7QUFHcEJuQyxFQUFBQSxTQUFTLEVBQUV1QyxTQUhTO0FBSXBCcEMsRUFBQUEsTUFBTSxFQUFFb0MsU0FKWTtBQUtwQjdDLEVBQUFBLEtBQUssRUFBRTZDLFNBTGE7QUFNcEJ6QyxFQUFBQSxTQUFTLEVBQUUsQ0FOUztBQU9wQk0sRUFBQUEsZUFBZSxFQUFFLEdBUEc7QUFRcEJtQixFQUFBQSxrQkFBa0IsRUFBRSxJQVJBO0FBU3BCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQVRDO0FBVXBCQyxFQUFBQSxRQUFRLEVBQUVjO0FBVlUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYm91bmNlSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBlbGVtZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgbWluTGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRlYm91bmNlVGltZW91dDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBmb3JjZU5vdGlmeUJ5RW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvcmNlTm90aWZ5T25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlbGVtZW50OiAnaW5wdXQnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBvbktleURvd246IHVuZGVmaW5lZCxcbiAgICBvbkJsdXI6IHVuZGVmaW5lZCxcbiAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIG1pbkxlbmd0aDogMCxcbiAgICBkZWJvdW5jZVRpbWVvdXQ6IDEwMCxcbiAgICBmb3JjZU5vdGlmeUJ5RW50ZXI6IHRydWUsXG4gICAgZm9yY2VOb3RpZnlPbkJsdXI6IHRydWUsXG4gICAgaW5wdXRSZWY6IHVuZGVmaW5lZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgJycsXG4gICAgfTtcblxuICAgIHRoaXMuaXNEZWJvdW5jaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jcmVhdGVOb3RpZmllcihwcm9wcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jcmVhdGVOb3RpZmllcih0aGlzLnByb3BzLmRlYm91bmNlVGltZW91dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVib3VuY2luZykge1xuICAgICAgaWYgKHByZXZQcm9wcy5kZWJvdW5jZVRpbWVvdXQgIT09IHRoaXMucHJvcHMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY3JlYXRlTm90aWZpZXIodGhpcy5wcm9wcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmZsdXNoKSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuXG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLm5vdGlmeShldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXNlciBoaXRzIGJhY2tzcGFjZSBhbmQgZ29lcyBiZWxvdyBtaW5MZW5ndGggY29uc2lkZXIgaXQgY2xlYW5pbmcgdGhlIHZhbHVlXG4gICAgICBpZiAob2xkVmFsdWUubGVuZ3RoID4gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5KHsgLi4uZXZlbnQsIHRhcmdldDogeyAuLi5ldmVudC50YXJnZXQsIHZhbHVlOiAnJyB9IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIG9uS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IG9uS2V5RG93biB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZm9yY2VOb3RpZnkoZXZlbnQpO1xuICAgIH1cbiAgICAvLyBJbnZva2Ugb3JpZ2luYWwgb25LZXlEb3duIGlmIHByZXNlbnRcbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBvbkJsdXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmZvcmNlTm90aWZ5KGV2ZW50KTtcbiAgICAvLyBJbnZva2Ugb3JpZ2luYWwgb25CbHVyIGlmIHByZXNlbnRcbiAgICBpZiAob25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVOb3RpZmllciA9IGRlYm91bmNlVGltZW91dCA9PiB7XG4gICAgaWYgKGRlYm91bmNlVGltZW91dCA8IDApIHtcbiAgICAgIHRoaXMubm90aWZ5ID0gKCkgPT4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRlYm91bmNlVGltZW91dCA9PT0gMCkge1xuICAgICAgdGhpcy5ub3RpZnkgPSB0aGlzLmRvTm90aWZ5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWJvdW5jZWRDaGFuZ2VGdW5jID0gZGVib3VuY2UoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmlzRGVib3VuY2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvTm90aWZ5KGV2ZW50KTtcbiAgICAgIH0sIGRlYm91bmNlVGltZW91dCk7XG5cbiAgICAgIHRoaXMubm90aWZ5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmlzRGVib3VuY2luZyA9IHRydWU7XG4gICAgICAgIGRlYm91bmNlZENoYW5nZUZ1bmMoZXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5mbHVzaCA9ICgpID0+IGRlYm91bmNlZENoYW5nZUZ1bmMuZmx1c2goKTtcblxuICAgICAgdGhpcy5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZWJvdW5jaW5nID0gZmFsc2U7XG4gICAgICAgIGRlYm91bmNlZENoYW5nZUZ1bmMuY2FuY2VsKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBkb05vdGlmeSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQ2hhbmdlKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGZvcmNlTm90aWZ5ID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5pc0RlYm91bmNpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5jZWwpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1pbkxlbmd0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLmRvTm90aWZ5KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb05vdGlmeSh7IC4uLmV2ZW50LCB0YXJnZXQ6IHsgLi4uZXZlbnQudGFyZ2V0LCB2YWx1ZSB9IH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxlbWVudCxcbiAgICAgIG9uQ2hhbmdlOiBfb25DaGFuZ2UsXG4gICAgICB2YWx1ZTogX3ZhbHVlLFxuICAgICAgbWluTGVuZ3RoOiBfbWluTGVuZ3RoLFxuICAgICAgZGVib3VuY2VUaW1lb3V0OiBfZGVib3VuY2VUaW1lb3V0LFxuICAgICAgZm9yY2VOb3RpZnlCeUVudGVyLFxuICAgICAgZm9yY2VOb3RpZnlPbkJsdXIsXG4gICAgICBvbktleURvd24sXG4gICAgICBvbkJsdXIsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbWF5YmVPbktleURvd247XG4gICAgaWYgKGZvcmNlTm90aWZ5QnlFbnRlcikge1xuICAgICAgbWF5YmVPbktleURvd24gPSB7IG9uS2V5RG93bjogdGhpcy5vbktleURvd24gfTtcbiAgICB9IGVsc2UgaWYgKG9uS2V5RG93bikge1xuICAgICAgbWF5YmVPbktleURvd24gPSB7IG9uS2V5RG93biB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXliZU9uS2V5RG93biA9IHt9O1xuICAgIH1cblxuICAgIGxldCBtYXliZU9uQmx1cjtcbiAgICBpZiAoZm9yY2VOb3RpZnlPbkJsdXIpIHtcbiAgICAgIG1heWJlT25CbHVyID0geyBvbkJsdXI6IHRoaXMub25CbHVyIH07XG4gICAgfSBlbHNlIGlmIChvbkJsdXIpIHtcbiAgICAgIG1heWJlT25CbHVyID0geyBvbkJsdXIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF5YmVPbkJsdXIgPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXliZVJlZiA9IGlucHV0UmVmID8geyByZWY6IGlucHV0UmVmIH0gOiB7fTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgIC4uLm1heWJlT25LZXlEb3duLFxuICAgICAgLi4ubWF5YmVPbkJsdXIsXG4gICAgICAuLi5tYXliZVJlZixcbiAgICB9KTtcbiAgfVxufVxuIl19