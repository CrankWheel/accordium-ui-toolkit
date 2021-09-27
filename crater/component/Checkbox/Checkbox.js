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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NoZWNrYm94L0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiQ29tcG9uZW50IiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwiYmx1ciIsInByb3BzIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbnB1dE5vZGUiLCJmb2N1cyIsInJlbmRlciIsImNoaWxkcmVuIiwibGFiZWwiLCJuYW1lIiwic3R5bGUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0aGVtZSIsImN1c3RvbUNoZWNrZXIiLCJjdXN0b21DaGVja0JveENsYXNzTmFtZSIsImN1c3RvbUxhYmVsQ2xhc3NOYW1lIiwib3RoZXJzIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiZmllbGQiLCJpbnB1dCIsImhhbmRsZVRvZ2dsZSIsIm5vZGUiLCJyaXBwbGUiLCJ0ZXh0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxRQUFOLFNBQXVCQyxnQkFBdkIsQ0FBaUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSwwQ0E0Qi9CLFVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUN0QixVQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsQ0FBaEIsSUFBcUJELEtBQUssQ0FBQ0UsS0FBTixLQUFnQixDQUF6QyxFQUE0QyxLQUFJLENBQUNDLElBQUw7O0FBQzVDLFVBQUksQ0FBQyxLQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBWixJQUF3QixLQUFJLENBQUNELEtBQUwsQ0FBV0UsUUFBdkMsRUFBaUQ7QUFDL0MsUUFBQSxLQUFJLENBQUNGLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixDQUFDLEtBQUksQ0FBQ0YsS0FBTCxDQUFXRyxPQUFoQyxFQUF5Q1AsS0FBekM7QUFDRDtBQUNGLEtBakM2QztBQUFBOztBQW1DOUNHLEVBQUFBLElBQUksR0FBRztBQUNMLFFBQUksS0FBS0ssU0FBVCxFQUFvQjtBQUNsQixXQUFLQSxTQUFMLENBQWVMLElBQWY7QUFDRDtBQUNGOztBQUVETSxFQUFBQSxLQUFLLEdBQUc7QUFDTixRQUFJLEtBQUtELFNBQVQsRUFBb0I7QUFDbEIsV0FBS0EsU0FBTCxDQUFlQyxLQUFmO0FBQ0Q7QUFDRjs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQUE7O0FBQ1Asd0JBZUksS0FBS04sS0FmVDtBQUFBLFVBQU07QUFDSkcsTUFBQUEsT0FESTtBQUVKSSxNQUFBQSxRQUZJO0FBR0pOLE1BQUFBLFFBSEk7QUFJSk8sTUFBQUEsS0FKSTtBQUtKQyxNQUFBQSxJQUxJO0FBTUpDLE1BQUFBLEtBTkk7QUFPSlIsTUFBQUEsUUFQSTtBQVFKUyxNQUFBQSxZQVJJO0FBU0pDLE1BQUFBLFlBVEk7QUFVSkMsTUFBQUEsS0FWSTtBQVdKQyxNQUFBQSxhQVhJO0FBWUpDLE1BQUFBLHVCQVpJO0FBYUpDLE1BQUFBO0FBYkksS0FBTjtBQUFBLFVBY0tDLE1BZEw7O0FBZ0JBLFVBQU1DLFNBQVMsR0FBRyx5QkFDaEJDLHdCQUFPQyxLQURTLEVBRWhCO0FBQ0UsT0FBQ0Qsd0JBQU9sQixRQUFSLEdBQW1CLEtBQUtELEtBQUwsQ0FBV0M7QUFEaEMsS0FGZ0IsRUFLaEIsS0FBS0QsS0FBTCxDQUFXa0IsU0FMSyxDQUFsQjtBQVFBLFdBQ0U7QUFBTyw0QkFBbUIsVUFBMUI7QUFBcUMsTUFBQSxTQUFTLEVBQUVBLFNBQWhEO0FBQTJELE1BQUEsWUFBWSxFQUFFUCxZQUF6RTtBQUF1RixNQUFBLFlBQVksRUFBRUM7QUFBckcsT0FDRSxtREFDTUssTUFETjtBQUVFLE1BQUEsT0FBTyxFQUFFZCxPQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUVnQix3QkFBT0UsS0FIcEI7QUFJRSxNQUFBLFFBQVEsRUFBRXBCLFFBSlo7QUFLRSxNQUFBLElBQUksRUFBRVEsSUFMUjtBQU1FLE1BQUEsUUFBUSxFQUFFLFlBQU07QUFBQTtBQUFFLE9BQVYsV0FOVjtBQU9FLE1BQUEsT0FBTyxFQUFFLEtBQUthLFlBUGhCO0FBUUUsTUFBQSxHQUFHLEVBQUUsVUFBQUMsSUFBSSxFQUFJO0FBQUE7O0FBQ1gsYUFBS25CLFNBQUwsR0FBaUJtQixJQUFqQjtBQUNELE9BRkUsV0FSTDtBQVdFLE1BQUEsSUFBSSxFQUFDO0FBWFAsT0FERixFQWNFLDZCQUFDLGNBQUQ7QUFDRSxNQUFBLHVCQUF1QixFQUFFUix1QkFEM0I7QUFFRSxNQUFBLGFBQWEsRUFBRUQsYUFGakI7QUFHRSxNQUFBLE9BQU8sRUFBRVgsT0FIWDtBQUlFLE1BQUEsUUFBUSxFQUFFRixRQUpaO0FBS0UsTUFBQSxlQUFlLEVBQUVrQix3QkFBT0ssTUFMMUI7QUFNRSxNQUFBLEtBQUssRUFBRWQsS0FOVDtBQU9FLE1BQUEsS0FBSyxFQUFFRztBQVBULE1BZEYsRUF1QkdMLEtBQUssR0FBRztBQUFLLE1BQUEsU0FBUyxFQUFFLHlCQUFXVyx3QkFBT00sSUFBbEIsRUFBd0JULG9CQUF4QjtBQUFoQixPQUFnRVIsS0FBaEUsQ0FBSCxHQUFrRixJQXZCMUYsQ0FERjtBQTJCRDs7QUFuRzZDOzs7O2dCQUEzQmQsUSxlQUNBO0FBQ2pCcUIsRUFBQUEsdUJBQXVCLEVBQUVXLG1CQUFVQyxNQURsQjtBQUVqQmIsRUFBQUEsYUFBYSxFQUFFWSxtQkFBVUgsSUFGUjtBQUdqQlAsRUFBQUEsb0JBQW9CLEVBQUVVLG1CQUFVQyxNQUhmO0FBSWpCeEIsRUFBQUEsT0FBTyxFQUFFdUIsbUJBQVVFLElBSkY7QUFLakJyQixFQUFBQSxRQUFRLEVBQUVtQixtQkFBVUgsSUFMSDtBQU1qQkwsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUMsTUFOSjtBQU9qQjFCLEVBQUFBLFFBQVEsRUFBRXlCLG1CQUFVRSxJQVBIO0FBUWpCcEIsRUFBQUEsS0FBSyxFQUFFa0IsbUJBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVSCxJQUE3QixDQUFwQixDQVJVO0FBU2pCZCxFQUFBQSxJQUFJLEVBQUVpQixtQkFBVUMsTUFUQztBQVVqQnpCLEVBQUFBLFFBQVEsRUFBRXdCLG1CQUFVSSxJQVZIO0FBV2pCbkIsRUFBQUEsWUFBWSxFQUFFZSxtQkFBVUksSUFYUDtBQVlqQmxCLEVBQUFBLFlBQVksRUFBRWMsbUJBQVVJLElBWlA7QUFhakJqQixFQUFBQSxLQUFLLEVBQUVhLG1CQUFVSyxLQUFWLENBQWdCO0FBQ3JCOUIsSUFBQUEsUUFBUSxFQUFFeUIsbUJBQVVDLE1BREM7QUFFckJQLElBQUFBLEtBQUssRUFBRU0sbUJBQVVDLE1BRkk7QUFHckJOLElBQUFBLEtBQUssRUFBRUssbUJBQVVDLE1BSEk7QUFJckJILElBQUFBLE1BQU0sRUFBRUUsbUJBQVVDO0FBSkcsR0FBaEI7QUFiVSxDOztnQkFEQWpDLFEsa0JBc0JHO0FBQ3BCUyxFQUFBQSxPQUFPLEVBQUUsS0FEVztBQUVwQmUsRUFBQUEsU0FBUyxFQUFFLEVBRlM7QUFHcEJqQixFQUFBQSxRQUFRLEVBQUU7QUFIVSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jaGVja2JveC5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdXN0b21DaGVja0JveENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXN0b21DaGVja2VyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjdXN0b21MYWJlbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGhlbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByaXBwbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVUb2dnbGUgPSBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnBhZ2VYICE9PSAwICYmIGV2ZW50LnBhZ2VZICE9PSAwKSB0aGlzLmJsdXIoKTtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSghdGhpcy5wcm9wcy5jaGVja2VkLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGJsdXIoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXROb2RlKSB7XG4gICAgICB0aGlzLmlucHV0Tm9kZS5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXROb2RlKSB7XG4gICAgICB0aGlzLmlucHV0Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGxhYmVsLFxuICAgICAgbmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgb25DaGFuZ2UsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgIHRoZW1lLFxuICAgICAgY3VzdG9tQ2hlY2tlcixcbiAgICAgIGN1c3RvbUNoZWNrQm94Q2xhc3NOYW1lLFxuICAgICAgY3VzdG9tTGFiZWxDbGFzc05hbWUsXG4gICAgICAuLi5vdGhlcnNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgc3R5bGVzLmZpZWxkLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmRpc2FibGVkXTogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIH0sXG4gICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGRhdGEtcmVhY3QtdG9vbGJveD1cImNoZWNrYm94XCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9XG4gICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXROb2RlID0gbm9kZTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxDaGVja1xuICAgICAgICAgIGN1c3RvbUNoZWNrQm94Q2xhc3NOYW1lPXtjdXN0b21DaGVja0JveENsYXNzTmFtZX1cbiAgICAgICAgICBjdXN0b21DaGVja2VyPXtjdXN0b21DaGVja2VyfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJpcHBsZUNsYXNzTmFtZT17c3R5bGVzLnJpcHBsZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAvPlxuICAgICAgICB7bGFiZWwgPyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMudGV4dCwgY3VzdG9tTGFiZWxDbGFzc05hbWUpfT57bGFiZWx9PC9kaXY+IDogbnVsbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxufVxuIl19