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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvVG9nZ2xlL1RvZ2dsZS5qcyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaWQiLCJzaXplIiwiY2xhc3NOYW1lIiwib3RoZXJzIiwidG9nZ2xlSWQiLCJpbnB1dFByb3BzIiwic3R5bGVzIiwidG9nZ2xlU3dpdGNoIiwidHlwZSIsInRvZ2dsZSIsImh0bWxGb3IiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRWUsTUFBTUEsTUFBTixTQUFxQkMsZUFBTUMsYUFBM0IsQ0FBeUM7QUFZdERDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUFxRCxLQUFLQyxLQUExRDtBQUFBLFVBQU07QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQSxFQUFaO0FBQWdCQyxNQUFBQSxJQUFoQjtBQUFzQkMsTUFBQUE7QUFBdEIsS0FBTjtBQUFBLFVBQTBDQyxNQUExQzs7QUFDQSxVQUFNQyxRQUFRLEdBQUdKLEVBQUUsSUFBSSxxQkFBUyxRQUFULENBQXZCO0FBRUEsVUFBTUssVUFBVSxHQUFHLHlCQUFXRixNQUFYLEVBQW1CO0FBQ3BDRCxNQUFBQSxTQUFTLEVBQUVJLHNCQUFPQyxZQURrQjtBQUVwQ1AsTUFBQUEsRUFBRSxFQUFFSSxRQUZnQztBQUdwQ0ksTUFBQUEsSUFBSSxFQUFFO0FBSDhCLEtBQW5CLENBQW5CO0FBTUEsV0FDRTtBQUFLLE1BQUEsU0FBUyxFQUFFRixzQkFBT0c7QUFBdkIsT0FDRSxzQ0FBV0osVUFBWCxDQURGLEVBRUUsc0NBQVc7QUFBRUssTUFBQUEsT0FBTyxFQUFFTixRQUFYO0FBQXFCRixNQUFBQSxTQUFTLEVBQUUseUJBQUdJLHNCQUFPTCxJQUFQLENBQUgsRUFBaUJDLFNBQWpCO0FBQWhDLEtBQVgsRUFBMkVILFFBQTNFLENBRkYsQ0FERjtBQU1EOztBQTVCcUQ7Ozs7Z0JBQW5DTCxNLGVBQ0E7QUFDakJNLEVBQUFBLEVBQUUsRUFBRVcsbUJBQVVDLE1BREc7QUFFakJYLEVBQUFBLElBQUksRUFBRVUsbUJBQVVFLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUFoQixDQUZXO0FBR2pCTCxFQUFBQSxJQUFJLEVBQUVHLG1CQUFVRSxLQUFWLENBQWdCLENBQUMsVUFBRCxDQUFoQjtBQUhXLEM7O2dCQURBbkIsTSxrQkFPRztBQUNwQk8sRUFBQUEsSUFBSSxFQUFFLFFBRGM7QUFFcEJPLEVBQUFBLElBQUksRUFBRTtBQUZjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1bmlxdWVpZCBmcm9tICdsb2Rhc2gudW5pcXVlaWQnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdG9nZ2xlLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NoZWNrYm94J10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogJ21lZGl1bScsXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaWQsIHNpemUsIGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZ2dsZUlkID0gaWQgfHwgdW5pcXVlaWQoJ3RvZ2dsZScpO1xuXG4gICAgY29uc3QgaW5wdXRQcm9wcyA9IG1lcmdlUHJvcHMob3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IHN0eWxlcy50b2dnbGVTd2l0Y2gsXG4gICAgICBpZDogdG9nZ2xlSWQsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlfT5cbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgICA8bGFiZWwgey4uLnsgaHRtbEZvcjogdG9nZ2xlSWQsIGNsYXNzTmFtZTogY3goc3R5bGVzW3NpemVdLCBjbGFzc05hbWUpIH19PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19