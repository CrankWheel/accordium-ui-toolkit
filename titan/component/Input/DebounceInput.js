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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  }

  componentWillMount() {
    this.createNotifier(this.props.debounceTimeout);
  }

  componentWillReceiveProps({
    value,
    debounceTimeout
  }) {
    if (this.isDebouncing) {
      return;
    }

    if (typeof value !== 'undefined' && this.state.value !== value) {
      this.setState({
        value
      });
    }

    if (debounceTimeout !== this.props.debounceTimeout) {
      this.createNotifier(debounceTimeout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvSW5wdXQvRGVib3VuY2VJbnB1dC5qcyJdLCJuYW1lcyI6WyJEZWJvdW5jZUlucHV0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV2ZW50IiwicGVyc2lzdCIsIm9sZFZhbHVlIiwic3RhdGUiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibGVuZ3RoIiwibWluTGVuZ3RoIiwibm90aWZ5Iiwib25LZXlEb3duIiwia2V5IiwiZm9yY2VOb3RpZnkiLCJvbkJsdXIiLCJkZWJvdW5jZVRpbWVvdXQiLCJkb05vdGlmeSIsImRlYm91bmNlZENoYW5nZUZ1bmMiLCJpc0RlYm91bmNpbmciLCJmbHVzaCIsImNhbmNlbCIsImFyZ3MiLCJvbkNoYW5nZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNyZWF0ZU5vdGlmaWVyIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZWxlbWVudCIsIl9vbkNoYW5nZSIsIl92YWx1ZSIsIl9taW5MZW5ndGgiLCJfZGVib3VuY2VUaW1lb3V0IiwiZm9yY2VOb3RpZnlCeUVudGVyIiwiZm9yY2VOb3RpZnlPbkJsdXIiLCJpbnB1dFJlZiIsIm1heWJlT25LZXlEb3duIiwibWF5YmVPbkJsdXIiLCJtYXliZVJlZiIsInJlZiIsImNyZWF0ZUVsZW1lbnQiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJmdW5jIiwidHlwZSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJib29sIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyxlQUFNQyxhQUFsQyxDQUFnRDtBQTRCN0RDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QmhDLEVBQUFBLGVBQWUsRUFBRTBCLG1CQUFVTSxNQVJWO0FBU2pCZCxFQUFBQSxrQkFBa0IsRUFBRVEsbUJBQVVPLElBVGI7QUFVakJkLEVBQUFBLGlCQUFpQixFQUFFTyxtQkFBVU8sSUFWWjtBQVdqQmIsRUFBQUEsUUFBUSxFQUFFTSxtQkFBVUc7QUFYSCxDOztnQkFEQWhELGEsa0JBZUc7QUFDcEJnQyxFQUFBQSxPQUFPLEVBQUUsT0FEVztBQUVwQmlCLEVBQUFBLElBQUksRUFBRSxNQUZjO0FBR3BCbEMsRUFBQUEsU0FBUyxFQUFFc0MsU0FIUztBQUlwQm5DLEVBQUFBLE1BQU0sRUFBRW1DLFNBSlk7QUFLcEI1QyxFQUFBQSxLQUFLLEVBQUU0QyxTQUxhO0FBTXBCeEMsRUFBQUEsU0FBUyxFQUFFLENBTlM7QUFPcEJNLEVBQUFBLGVBQWUsRUFBRSxHQVBHO0FBUXBCa0IsRUFBQUEsa0JBQWtCLEVBQUUsSUFSQTtBQVNwQkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFUQztBQVVwQkMsRUFBQUEsUUFBUSxFQUFFYztBQVZVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJvdW5jZUlucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZWxlbWVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIG1pbkxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkZWJvdW5jZVRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9yY2VOb3RpZnlCeUVudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb3JjZU5vdGlmeU9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWxlbWVudDogJ2lucHV0JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgb25LZXlEb3duOiB1bmRlZmluZWQsXG4gICAgb25CbHVyOiB1bmRlZmluZWQsXG4gICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICBtaW5MZW5ndGg6IDAsXG4gICAgZGVib3VuY2VUaW1lb3V0OiAxMDAsXG4gICAgZm9yY2VOb3RpZnlCeUVudGVyOiB0cnVlLFxuICAgIGZvcmNlTm90aWZ5T25CbHVyOiB0cnVlLFxuICAgIGlucHV0UmVmOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8ICcnLFxuICAgIH07XG5cbiAgICB0aGlzLmlzRGVib3VuY2luZyA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY3JlYXRlTm90aWZpZXIodGhpcy5wcm9wcy5kZWJvdW5jZVRpbWVvdXQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHZhbHVlLCBkZWJvdW5jZVRpbWVvdXQgfSkge1xuICAgIGlmICh0aGlzLmlzRGVib3VuY2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoZGVib3VuY2VUaW1lb3V0ICE9PSB0aGlzLnByb3BzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgdGhpcy5jcmVhdGVOb3RpZmllcihkZWJvdW5jZVRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmZsdXNoKSB7XG4gICAgICB0aGlzLmZsdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuXG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1pbkxlbmd0aCkge1xuICAgICAgICB0aGlzLm5vdGlmeShldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXNlciBoaXRzIGJhY2tzcGFjZSBhbmQgZ29lcyBiZWxvdyBtaW5MZW5ndGggY29uc2lkZXIgaXQgY2xlYW5pbmcgdGhlIHZhbHVlXG4gICAgICBpZiAob2xkVmFsdWUubGVuZ3RoID4gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubm90aWZ5KHsgLi4uZXZlbnQsIHRhcmdldDogeyAuLi5ldmVudC50YXJnZXQsIHZhbHVlOiAnJyB9IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIG9uS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IG9uS2V5RG93biB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZm9yY2VOb3RpZnkoZXZlbnQpO1xuICAgIH1cbiAgICAvLyBJbnZva2Ugb3JpZ2luYWwgb25LZXlEb3duIGlmIHByZXNlbnRcbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBvbkJsdXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmZvcmNlTm90aWZ5KGV2ZW50KTtcbiAgICAvLyBJbnZva2Ugb3JpZ2luYWwgb25CbHVyIGlmIHByZXNlbnRcbiAgICBpZiAob25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVOb3RpZmllciA9IGRlYm91bmNlVGltZW91dCA9PiB7XG4gICAgaWYgKGRlYm91bmNlVGltZW91dCA8IDApIHtcbiAgICAgIHRoaXMubm90aWZ5ID0gKCkgPT4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRlYm91bmNlVGltZW91dCA9PT0gMCkge1xuICAgICAgdGhpcy5ub3RpZnkgPSB0aGlzLmRvTm90aWZ5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWJvdW5jZWRDaGFuZ2VGdW5jID0gZGVib3VuY2UoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmlzRGVib3VuY2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvTm90aWZ5KGV2ZW50KTtcbiAgICAgIH0sIGRlYm91bmNlVGltZW91dCk7XG5cbiAgICAgIHRoaXMubm90aWZ5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLmlzRGVib3VuY2luZyA9IHRydWU7XG4gICAgICAgIGRlYm91bmNlZENoYW5nZUZ1bmMoZXZlbnQpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5mbHVzaCA9ICgpID0+IGRlYm91bmNlZENoYW5nZUZ1bmMuZmx1c2goKTtcblxuICAgICAgdGhpcy5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZWJvdW5jaW5nID0gZmFsc2U7XG4gICAgICAgIGRlYm91bmNlZENoYW5nZUZ1bmMuY2FuY2VsKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBkb05vdGlmeSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQ2hhbmdlKC4uLmFyZ3MpO1xuICB9O1xuXG4gIGZvcmNlTm90aWZ5ID0gZXZlbnQgPT4ge1xuICAgIGlmICghdGhpcy5pc0RlYm91bmNpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5jZWwpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1pbkxlbmd0aCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gbWluTGVuZ3RoKSB7XG4gICAgICB0aGlzLmRvTm90aWZ5KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb05vdGlmeSh7IC4uLmV2ZW50LCB0YXJnZXQ6IHsgLi4uZXZlbnQudGFyZ2V0LCB2YWx1ZSB9IH0pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxlbWVudCxcbiAgICAgIG9uQ2hhbmdlOiBfb25DaGFuZ2UsXG4gICAgICB2YWx1ZTogX3ZhbHVlLFxuICAgICAgbWluTGVuZ3RoOiBfbWluTGVuZ3RoLFxuICAgICAgZGVib3VuY2VUaW1lb3V0OiBfZGVib3VuY2VUaW1lb3V0LFxuICAgICAgZm9yY2VOb3RpZnlCeUVudGVyLFxuICAgICAgZm9yY2VOb3RpZnlPbkJsdXIsXG4gICAgICBvbktleURvd24sXG4gICAgICBvbkJsdXIsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbWF5YmVPbktleURvd247XG4gICAgaWYgKGZvcmNlTm90aWZ5QnlFbnRlcikge1xuICAgICAgbWF5YmVPbktleURvd24gPSB7IG9uS2V5RG93bjogdGhpcy5vbktleURvd24gfTtcbiAgICB9IGVsc2UgaWYgKG9uS2V5RG93bikge1xuICAgICAgbWF5YmVPbktleURvd24gPSB7IG9uS2V5RG93biB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXliZU9uS2V5RG93biA9IHt9O1xuICAgIH1cblxuICAgIGxldCBtYXliZU9uQmx1cjtcbiAgICBpZiAoZm9yY2VOb3RpZnlPbkJsdXIpIHtcbiAgICAgIG1heWJlT25CbHVyID0geyBvbkJsdXI6IHRoaXMub25CbHVyIH07XG4gICAgfSBlbHNlIGlmIChvbkJsdXIpIHtcbiAgICAgIG1heWJlT25CbHVyID0geyBvbkJsdXIgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF5YmVPbkJsdXIgPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXliZVJlZiA9IGlucHV0UmVmID8geyByZWY6IGlucHV0UmVmIH0gOiB7fTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgIC4uLm1heWJlT25LZXlEb3duLFxuICAgICAgLi4ubWF5YmVPbkJsdXIsXG4gICAgICAuLi5tYXliZVJlZixcbiAgICB9KTtcbiAgfVxufVxuIl19