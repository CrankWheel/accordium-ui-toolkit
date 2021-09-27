"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Check = _interopRequireDefault(require("./Check"));

var _checkboxModule = _interopRequireDefault(require("./checkbox.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Checkbox extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleToggle", function (event) {
      _newArrowCheck(this, _arrowCheckId);

      if (event.pageX !== 0 && event.pageY !== 0) _this.blur();

      if (!_this.props.disabled && _this.props.onChange) {
        _this.props.onChange(!_this.props.checked, event);
      }
    }.bind(_arrowCheckId));
  }

  blur() {
    if (this.inputNode) {
      this.inputNode.blur();
    }
  }

  focus() {
    if (this.inputNode) {
      this.inputNode.focus();
    }
  }

  render() {
    var _this2 = this;

    const _this$props = this.props,
          {
      checked,
      children,
      disabled,
      label,
      name,
      style,
      onChange,
      onMouseEnter,
      onMouseLeave,
      theme,
      customChecker,
      customCheckBoxClassName,
      customLabelClassName
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["checked", "children", "disabled", "label", "name", "style", "onChange", "onMouseEnter", "onMouseLeave", "theme", "customChecker", "customCheckBoxClassName", "customLabelClassName"]);

    const className = (0, _classnames.default)(_checkboxModule.default.field, {
      [_checkboxModule.default.disabled]: this.props.disabled
    }, this.props.className);
    return _react.default.createElement("label", {
      "data-react-toolbox": "checkbox",
      className: className,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, _react.default.createElement("input", _extends({}, others, {
      checked: checked,
      className: _checkboxModule.default.input,
      disabled: disabled,
      name: name,
      onChange: function () {
        _newArrowCheck(this, _this2);
      }.bind(this),
      onClick: this.handleToggle,
      ref: function (node) {
        _newArrowCheck(this, _this2);

        this.inputNode = node;
      }.bind(this),
      type: "checkbox"
    })), _react.default.createElement(_Check.default, {
      customCheckBoxClassName: customCheckBoxClassName,
      customChecker: customChecker,
      checked: checked,
      disabled: disabled,
      rippleClassName: _checkboxModule.default.ripple,
      style: style,
      theme: theme
    }), label ? _react.default.createElement("div", {
      className: (0, _classnames.default)(_checkboxModule.default.text, customLabelClassName)
    }, label) : null);
  }

}

exports.default = Checkbox;

_defineProperty(Checkbox, "propTypes", {
  customCheckBoxClassName: _propTypes.default.string,
  customChecker: _propTypes.default.node,
  customLabelClassName: _propTypes.default.string,
  checked: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  theme: _propTypes.default.shape({
    disabled: _propTypes.default.string,
    field: _propTypes.default.string,
    input: _propTypes.default.string,
    ripple: _propTypes.default.string
  })
});

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  className: '',
  disabled: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQ2hlY2tib3gvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiQ2hlY2tib3giLCJDb21wb25lbnQiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJibHVyIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImlucHV0Tm9kZSIsImZvY3VzIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJsYWJlbCIsIm5hbWUiLCJzdHlsZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRoZW1lIiwiY3VzdG9tQ2hlY2tlciIsImN1c3RvbUNoZWNrQm94Q2xhc3NOYW1lIiwiY3VzdG9tTGFiZWxDbGFzc05hbWUiLCJvdGhlcnMiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJmaWVsZCIsImlucHV0IiwiaGFuZGxlVG9nZ2xlIiwibm9kZSIsInJpcHBsZSIsInRleHQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwiZnVuYyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLE1BQU1BLFFBQU4sU0FBdUJDLGdCQUF2QixDQUFpQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLDBDQTRCL0IsVUFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ3RCLFVBQUlBLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixDQUFoQixJQUFxQkQsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLENBQXpDLEVBQTRDLEtBQUksQ0FBQ0MsSUFBTDs7QUFDNUMsVUFBSSxDQUFDLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFaLElBQXdCLEtBQUksQ0FBQ0QsS0FBTCxDQUFXRSxRQUF2QyxFQUFpRDtBQUMvQyxRQUFBLEtBQUksQ0FBQ0YsS0FBTCxDQUFXRSxRQUFYLENBQW9CLENBQUMsS0FBSSxDQUFDRixLQUFMLENBQVdHLE9BQWhDLEVBQXlDUCxLQUF6QztBQUNEO0FBQ0YsS0FqQzZDO0FBQUE7O0FBbUM5Q0csRUFBQUEsSUFBSSxHQUFHO0FBQ0wsUUFBSSxLQUFLSyxTQUFULEVBQW9CO0FBQ2xCLFdBQUtBLFNBQUwsQ0FBZUwsSUFBZjtBQUNEO0FBQ0Y7O0FBRURNLEVBQUFBLEtBQUssR0FBRztBQUNOLFFBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQixXQUFLQSxTQUFMLENBQWVDLEtBQWY7QUFDRDtBQUNGOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFBQTs7QUFDUCx3QkFlSSxLQUFLTixLQWZUO0FBQUEsVUFBTTtBQUNKRyxNQUFBQSxPQURJO0FBRUpJLE1BQUFBLFFBRkk7QUFHSk4sTUFBQUEsUUFISTtBQUlKTyxNQUFBQSxLQUpJO0FBS0pDLE1BQUFBLElBTEk7QUFNSkMsTUFBQUEsS0FOSTtBQU9KUixNQUFBQSxRQVBJO0FBUUpTLE1BQUFBLFlBUkk7QUFTSkMsTUFBQUEsWUFUSTtBQVVKQyxNQUFBQSxLQVZJO0FBV0pDLE1BQUFBLGFBWEk7QUFZSkMsTUFBQUEsdUJBWkk7QUFhSkMsTUFBQUE7QUFiSSxLQUFOO0FBQUEsVUFjS0MsTUFkTDs7QUFnQkEsVUFBTUMsU0FBUyxHQUFHLHlCQUNoQkMsd0JBQU9DLEtBRFMsRUFFaEI7QUFDRSxPQUFDRCx3QkFBT2xCLFFBQVIsR0FBbUIsS0FBS0QsS0FBTCxDQUFXQztBQURoQyxLQUZnQixFQUtoQixLQUFLRCxLQUFMLENBQVdrQixTQUxLLENBQWxCO0FBUUEsV0FDRTtBQUFPLDRCQUFtQixVQUExQjtBQUFxQyxNQUFBLFNBQVMsRUFBRUEsU0FBaEQ7QUFBMkQsTUFBQSxZQUFZLEVBQUVQLFlBQXpFO0FBQXVGLE1BQUEsWUFBWSxFQUFFQztBQUFyRyxPQUNFLG1EQUNNSyxNQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVkLE9BRlg7QUFHRSxNQUFBLFNBQVMsRUFBRWdCLHdCQUFPRSxLQUhwQjtBQUlFLE1BQUEsUUFBUSxFQUFFcEIsUUFKWjtBQUtFLE1BQUEsSUFBSSxFQUFFUSxJQUxSO0FBTUUsTUFBQSxRQUFRLEVBQUUsWUFBTTtBQUFBO0FBQUUsT0FBVixXQU5WO0FBT0UsTUFBQSxPQUFPLEVBQUUsS0FBS2EsWUFQaEI7QUFRRSxNQUFBLEdBQUcsRUFBRSxVQUFBQyxJQUFJLEVBQUk7QUFBQTs7QUFDWCxhQUFLbkIsU0FBTCxHQUFpQm1CLElBQWpCO0FBQ0QsT0FGRSxXQVJMO0FBV0UsTUFBQSxJQUFJLEVBQUM7QUFYUCxPQURGLEVBY0UsNkJBQUMsY0FBRDtBQUNFLE1BQUEsdUJBQXVCLEVBQUVSLHVCQUQzQjtBQUVFLE1BQUEsYUFBYSxFQUFFRCxhQUZqQjtBQUdFLE1BQUEsT0FBTyxFQUFFWCxPQUhYO0FBSUUsTUFBQSxRQUFRLEVBQUVGLFFBSlo7QUFLRSxNQUFBLGVBQWUsRUFBRWtCLHdCQUFPSyxNQUwxQjtBQU1FLE1BQUEsS0FBSyxFQUFFZCxLQU5UO0FBT0UsTUFBQSxLQUFLLEVBQUVHO0FBUFQsTUFkRixFQXVCR0wsS0FBSyxHQUFHO0FBQUssTUFBQSxTQUFTLEVBQUUseUJBQVdXLHdCQUFPTSxJQUFsQixFQUF3QlQsb0JBQXhCO0FBQWhCLE9BQWdFUixLQUFoRSxDQUFILEdBQWtGLElBdkIxRixDQURGO0FBMkJEOztBQW5HNkM7Ozs7Z0JBQTNCZCxRLGVBQ0E7QUFDakJxQixFQUFBQSx1QkFBdUIsRUFBRVcsbUJBQVVDLE1BRGxCO0FBRWpCYixFQUFBQSxhQUFhLEVBQUVZLG1CQUFVSCxJQUZSO0FBR2pCUCxFQUFBQSxvQkFBb0IsRUFBRVUsbUJBQVVDLE1BSGY7QUFJakJ4QixFQUFBQSxPQUFPLEVBQUV1QixtQkFBVUUsSUFKRjtBQUtqQnJCLEVBQUFBLFFBQVEsRUFBRW1CLG1CQUFVSCxJQUxIO0FBTWpCTCxFQUFBQSxTQUFTLEVBQUVRLG1CQUFVQyxNQU5KO0FBT2pCMUIsRUFBQUEsUUFBUSxFQUFFeUIsbUJBQVVFLElBUEg7QUFRakJwQixFQUFBQSxLQUFLLEVBQUVrQixtQkFBVUcsU0FBVixDQUFvQixDQUFDSCxtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVILElBQTdCLENBQXBCLENBUlU7QUFTakJkLEVBQUFBLElBQUksRUFBRWlCLG1CQUFVQyxNQVRDO0FBVWpCekIsRUFBQUEsUUFBUSxFQUFFd0IsbUJBQVVJLElBVkg7QUFXakJuQixFQUFBQSxZQUFZLEVBQUVlLG1CQUFVSSxJQVhQO0FBWWpCbEIsRUFBQUEsWUFBWSxFQUFFYyxtQkFBVUksSUFaUDtBQWFqQmpCLEVBQUFBLEtBQUssRUFBRWEsbUJBQVVLLEtBQVYsQ0FBZ0I7QUFDckI5QixJQUFBQSxRQUFRLEVBQUV5QixtQkFBVUMsTUFEQztBQUVyQlAsSUFBQUEsS0FBSyxFQUFFTSxtQkFBVUMsTUFGSTtBQUdyQk4sSUFBQUEsS0FBSyxFQUFFSyxtQkFBVUMsTUFISTtBQUlyQkgsSUFBQUEsTUFBTSxFQUFFRSxtQkFBVUM7QUFKRyxHQUFoQjtBQWJVLEM7O2dCQURBakMsUSxrQkFzQkc7QUFDcEJTLEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCZSxFQUFBQSxTQUFTLEVBQUUsRUFGUztBQUdwQmpCLEVBQUFBLFFBQVEsRUFBRTtBQUhVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4vQ2hlY2snO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NoZWNrYm94Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGN1c3RvbUNoZWNrQm94Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbUNoZWNrZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGN1c3RvbUxhYmVsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aGVtZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpbnB1dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJpcHBsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQucGFnZVggIT09IDAgJiYgZXZlbnQucGFnZVkgIT09IDApIHRoaXMuYmx1cigpO1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCF0aGlzLnByb3BzLmNoZWNrZWQsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgYmx1cigpIHtcbiAgICBpZiAodGhpcy5pbnB1dE5vZGUpIHtcbiAgICAgIHRoaXMuaW5wdXROb2RlLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5pbnB1dE5vZGUpIHtcbiAgICAgIHRoaXMuaW5wdXROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWwsXG4gICAgICBuYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBvbkNoYW5nZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgb25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlLFxuICAgICAgdGhlbWUsXG4gICAgICBjdXN0b21DaGVja2VyLFxuICAgICAgY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWUsXG4gICAgICBjdXN0b21MYWJlbENsYXNzTmFtZSxcbiAgICAgIC4uLm90aGVyc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMuZmllbGQsXG4gICAgICB7XG4gICAgICAgIFtzdHlsZXMuZGlzYWJsZWRdOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgfSxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgZGF0YS1yZWFjdC10b29sYm94PVwiY2hlY2tib3hcIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9IG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX1cbiAgICAgICAgICByZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnB1dE5vZGUgPSBub2RlO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgLz5cbiAgICAgICAgPENoZWNrXG4gICAgICAgICAgY3VzdG9tQ2hlY2tCb3hDbGFzc05hbWU9e2N1c3RvbUNoZWNrQm94Q2xhc3NOYW1lfVxuICAgICAgICAgIGN1c3RvbUNoZWNrZXI9e2N1c3RvbUNoZWNrZXJ9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcmlwcGxlQ2xhc3NOYW1lPXtzdHlsZXMucmlwcGxlfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIC8+XG4gICAgICAgIHtsYWJlbCA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy50ZXh0LCBjdXN0b21MYWJlbENsYXNzTmFtZSl9PntsYWJlbH08L2Rpdj4gOiBudWxsfVxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG59XG4iXX0=