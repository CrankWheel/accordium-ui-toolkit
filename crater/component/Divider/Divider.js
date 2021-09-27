"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _util = require("../../util");

var _dividersModule = _interopRequireDefault(require("./dividers.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Divider extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          {
      inverse,
      size
    } = _this$props,
          others = _objectWithoutProperties(_this$props, ["inverse", "size"]);

    const dividerClass = {
      [_dividersModule.default.divider1]: inverse && size !== 'large',
      [_dividersModule.default.divider2]: inverse && size === 'large',
      [_dividersModule.default.dividerAlternate1]: !inverse && size !== 'large',
      [_dividersModule.default.dividerAlternate2]: !inverse && size === 'large'
    };
    const props = (0, _util.mergeProps)(others, {
      className: dividerClass
    });
    return _react.default.createElement("hr", props);
  }

}

exports.default = Divider;

_defineProperty(Divider, "propTypes", {
  inverse: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['large'])
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0RpdmlkZXIvRGl2aWRlci5qcyJdLCJuYW1lcyI6WyJEaXZpZGVyIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJpbnZlcnNlIiwic2l6ZSIsIm90aGVycyIsImRpdmlkZXJDbGFzcyIsInN0eWxlcyIsImRpdmlkZXIxIiwiZGl2aWRlcjIiLCJkaXZpZGVyQWx0ZXJuYXRlMSIsImRpdmlkZXJBbHRlcm5hdGUyIiwiY2xhc3NOYW1lIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxPQUFOLFNBQXNCQyxlQUFNQyxhQUE1QixDQUEwQztBQU12REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQXFDLEtBQUtDLEtBQTFDO0FBQUEsVUFBTTtBQUFFQyxNQUFBQSxPQUFGO0FBQVdDLE1BQUFBO0FBQVgsS0FBTjtBQUFBLFVBQTBCQyxNQUExQjs7QUFDQSxVQUFNQyxZQUFZLEdBQUc7QUFDbkIsT0FBQ0Msd0JBQU9DLFFBQVIsR0FBbUJMLE9BQU8sSUFBSUMsSUFBSSxLQUFLLE9BRHBCO0FBRW5CLE9BQUNHLHdCQUFPRSxRQUFSLEdBQW1CTixPQUFPLElBQUlDLElBQUksS0FBSyxPQUZwQjtBQUduQixPQUFDRyx3QkFBT0csaUJBQVIsR0FBNEIsQ0FBQ1AsT0FBRCxJQUFZQyxJQUFJLEtBQUssT0FIOUI7QUFJbkIsT0FBQ0csd0JBQU9JLGlCQUFSLEdBQTRCLENBQUNSLE9BQUQsSUFBWUMsSUFBSSxLQUFLO0FBSjlCLEtBQXJCO0FBT0EsVUFBTUYsS0FBSyxHQUFHLHNCQUFXRyxNQUFYLEVBQW1CO0FBQUVPLE1BQUFBLFNBQVMsRUFBRU47QUFBYixLQUFuQixDQUFkO0FBRUEsV0FBTyxtQ0FBUUosS0FBUixDQUFQO0FBQ0Q7O0FBbEJzRDs7OztnQkFBcENKLE8sZUFDQTtBQUNqQkssRUFBQUEsT0FBTyxFQUFFVSxtQkFBVUMsSUFERjtBQUVqQlYsRUFBQUEsSUFBSSxFQUFFUyxtQkFBVUUsS0FBVixDQUFnQixDQUFDLE9BQUQsQ0FBaEI7QUFGVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtZXJnZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZGl2aWRlcnMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGFyZ2UnXSksXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW52ZXJzZSwgc2l6ZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRpdmlkZXJDbGFzcyA9IHtcbiAgICAgIFtzdHlsZXMuZGl2aWRlcjFdOiBpbnZlcnNlICYmIHNpemUgIT09ICdsYXJnZScsXG4gICAgICBbc3R5bGVzLmRpdmlkZXIyXTogaW52ZXJzZSAmJiBzaXplID09PSAnbGFyZ2UnLFxuICAgICAgW3N0eWxlcy5kaXZpZGVyQWx0ZXJuYXRlMV06ICFpbnZlcnNlICYmIHNpemUgIT09ICdsYXJnZScsXG4gICAgICBbc3R5bGVzLmRpdmlkZXJBbHRlcm5hdGUyXTogIWludmVyc2UgJiYgc2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvcHMgPSBtZXJnZVByb3BzKG90aGVycywgeyBjbGFzc05hbWU6IGRpdmlkZXJDbGFzcyB9KTtcblxuICAgIHJldHVybiA8aHIgey4uLnByb3BzfSAvPjtcbiAgfVxufVxuIl19