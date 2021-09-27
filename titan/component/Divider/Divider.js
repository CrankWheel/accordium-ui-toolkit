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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvRGl2aWRlci9EaXZpZGVyLmpzIl0sIm5hbWVzIjpbIkRpdmlkZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImludmVyc2UiLCJzaXplIiwib3RoZXJzIiwiZGl2aWRlckNsYXNzIiwic3R5bGVzIiwiZGl2aWRlcjEiLCJkaXZpZGVyMiIsImRpdmlkZXJBbHRlcm5hdGUxIiwiZGl2aWRlckFsdGVybmF0ZTIiLCJjbGFzc05hbWUiLCJQcm9wVHlwZXMiLCJib29sIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLE1BQU1BLE9BQU4sU0FBc0JDLGVBQU1DLGFBQTVCLENBQTBDO0FBTXZEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFBcUMsS0FBS0MsS0FBMUM7QUFBQSxVQUFNO0FBQUVDLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUE7QUFBWCxLQUFOO0FBQUEsVUFBMEJDLE1BQTFCOztBQUNBLFVBQU1DLFlBQVksR0FBRztBQUNuQixPQUFDQyx3QkFBT0MsUUFBUixHQUFtQkwsT0FBTyxJQUFJQyxJQUFJLEtBQUssT0FEcEI7QUFFbkIsT0FBQ0csd0JBQU9FLFFBQVIsR0FBbUJOLE9BQU8sSUFBSUMsSUFBSSxLQUFLLE9BRnBCO0FBR25CLE9BQUNHLHdCQUFPRyxpQkFBUixHQUE0QixDQUFDUCxPQUFELElBQVlDLElBQUksS0FBSyxPQUg5QjtBQUluQixPQUFDRyx3QkFBT0ksaUJBQVIsR0FBNEIsQ0FBQ1IsT0FBRCxJQUFZQyxJQUFJLEtBQUs7QUFKOUIsS0FBckI7QUFPQSxVQUFNRixLQUFLLEdBQUcsc0JBQVdHLE1BQVgsRUFBbUI7QUFBRU8sTUFBQUEsU0FBUyxFQUFFTjtBQUFiLEtBQW5CLENBQWQ7QUFFQSxXQUFPLG1DQUFRSixLQUFSLENBQVA7QUFDRDs7QUFsQnNEOzs7O2dCQUFwQ0osTyxlQUNBO0FBQ2pCSyxFQUFBQSxPQUFPLEVBQUVVLG1CQUFVQyxJQURGO0FBRWpCVixFQUFBQSxJQUFJLEVBQUVTLG1CQUFVRSxLQUFWLENBQWdCLENBQUMsT0FBRCxDQUFoQjtBQUZXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9kaXZpZGVycy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydsYXJnZSddKSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnZlcnNlLCBzaXplLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGl2aWRlckNsYXNzID0ge1xuICAgICAgW3N0eWxlcy5kaXZpZGVyMV06IGludmVyc2UgJiYgc2l6ZSAhPT0gJ2xhcmdlJyxcbiAgICAgIFtzdHlsZXMuZGl2aWRlcjJdOiBpbnZlcnNlICYmIHNpemUgPT09ICdsYXJnZScsXG4gICAgICBbc3R5bGVzLmRpdmlkZXJBbHRlcm5hdGUxXTogIWludmVyc2UgJiYgc2l6ZSAhPT0gJ2xhcmdlJyxcbiAgICAgIFtzdHlsZXMuZGl2aWRlckFsdGVybmF0ZTJdOiAhaW52ZXJzZSAmJiBzaXplID09PSAnbGFyZ2UnLFxuICAgIH07XG5cbiAgICBjb25zdCBwcm9wcyA9IG1lcmdlUHJvcHMob3RoZXJzLCB7IGNsYXNzTmFtZTogZGl2aWRlckNsYXNzIH0pO1xuXG4gICAgcmV0dXJuIDxociB7Li4ucHJvcHN9IC8+O1xuICB9XG59XG4iXX0=