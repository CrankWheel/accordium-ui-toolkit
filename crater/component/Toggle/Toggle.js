"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../util/helpers");

var _toggleModule = _interopRequireDefault(require("./toggle.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Toggle extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          {
      children,
      id,
      size,
      className
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["children", "id", "size", "className"]);

    const toggleId = id || (0, _lodash.default)('toggle');
    const inputProps = (0, _helpers.mergeProps)(others, {
      className: _toggleModule.default.toggleSwitch,
      id: toggleId,
      type: 'checkbox'
    });
    return _react.default.createElement("div", {
      className: _toggleModule.default.toggle
    }, _react.default.createElement("input", inputProps), _react.default.createElement("label", {
      htmlFor: toggleId,
      className: (0, _classnames.default)(_toggleModule.default[size], className)
    }, children));
  }

}

exports.default = Toggle;

_defineProperty(Toggle, "propTypes", {
  id: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  type: _propTypes.default.oneOf(['checkbox'])
});

_defineProperty(Toggle, "defaultProps", {
  size: 'medium',
  type: 'checkbox'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1RvZ2dsZS9Ub2dnbGUuanMiXSwibmFtZXMiOlsiVG9nZ2xlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImlkIiwic2l6ZSIsImNsYXNzTmFtZSIsIm90aGVycyIsInRvZ2dsZUlkIiwiaW5wdXRQcm9wcyIsInN0eWxlcyIsInRvZ2dsZVN3aXRjaCIsInR5cGUiLCJ0b2dnbGUiLCJodG1sRm9yIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLE1BQU1BLE1BQU4sU0FBcUJDLGVBQU1DLGFBQTNCLENBQXlDO0FBWXREQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFBcUQsS0FBS0MsS0FBMUQ7QUFBQSxVQUFNO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUEsRUFBWjtBQUFnQkMsTUFBQUEsSUFBaEI7QUFBc0JDLE1BQUFBO0FBQXRCLEtBQU47QUFBQSxVQUEwQ0MsTUFBMUM7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHSixFQUFFLElBQUkscUJBQVMsUUFBVCxDQUF2QjtBQUVBLFVBQU1LLFVBQVUsR0FBRyx5QkFBV0YsTUFBWCxFQUFtQjtBQUNwQ0QsTUFBQUEsU0FBUyxFQUFFSSxzQkFBT0MsWUFEa0I7QUFFcENQLE1BQUFBLEVBQUUsRUFBRUksUUFGZ0M7QUFHcENJLE1BQUFBLElBQUksRUFBRTtBQUg4QixLQUFuQixDQUFuQjtBQU1BLFdBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBRUYsc0JBQU9HO0FBQXZCLE9BQ0Usc0NBQVdKLFVBQVgsQ0FERixFQUVFLHNDQUFXO0FBQUVLLE1BQUFBLE9BQU8sRUFBRU4sUUFBWDtBQUFxQkYsTUFBQUEsU0FBUyxFQUFFLHlCQUFHSSxzQkFBT0wsSUFBUCxDQUFILEVBQWlCQyxTQUFqQjtBQUFoQyxLQUFYLEVBQTJFSCxRQUEzRSxDQUZGLENBREY7QUFNRDs7QUE1QnFEOzs7O2dCQUFuQ0wsTSxlQUNBO0FBQ2pCTSxFQUFBQSxFQUFFLEVBQUVXLG1CQUFVQyxNQURHO0FBRWpCWCxFQUFBQSxJQUFJLEVBQUVVLG1CQUFVRSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FGVztBQUdqQkwsRUFBQUEsSUFBSSxFQUFFRyxtQkFBVUUsS0FBVixDQUFnQixDQUFDLFVBQUQsQ0FBaEI7QUFIVyxDOztnQkFEQW5CLE0sa0JBT0c7QUFDcEJPLEVBQUFBLElBQUksRUFBRSxRQURjO0FBRXBCTyxFQUFBQSxJQUFJLEVBQUU7QUFGYyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdW5pcXVlaWQgZnJvbSAnbG9kYXNoLnVuaXF1ZWlkJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RvZ2dsZS5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydjaGVja2JveCddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6ICdtZWRpdW0nLFxuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlkLCBzaXplLCBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2dnbGVJZCA9IGlkIHx8IHVuaXF1ZWlkKCd0b2dnbGUnKTtcblxuICAgIGNvbnN0IGlucHV0UHJvcHMgPSBtZXJnZVByb3BzKG90aGVycywge1xuICAgICAgY2xhc3NOYW1lOiBzdHlsZXMudG9nZ2xlU3dpdGNoLFxuICAgICAgaWQ6IHRvZ2dsZUlkLFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZX0+XG4gICAgICAgIDxpbnB1dCB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgPGxhYmVsIHsuLi57IGh0bWxGb3I6IHRvZ2dsZUlkLCBjbGFzc05hbWU6IGN4KHN0eWxlc1tzaXplXSwgY2xhc3NOYW1lKSB9fT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==