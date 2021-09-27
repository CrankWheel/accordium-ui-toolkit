"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pulseModule = _interopRequireDefault(require("./pulse.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Pulse = function Pulse(props) {
  _newArrowCheck(this, _this);

  const {
    className,
    show = true,
    error = false,
    position = ''
  } = props;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_pulseModule.default.pulse, className, _pulseModule.default[position], {
      [_pulseModule.default.show]: show,
      [_pulseModule.default.error]: error
    }, className)
  });
}.bind(void 0);

Pulse.propTypes = {
  className: _propTypes.default.string,
  show: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  error: _propTypes.default.bool
};
var _default = Pulse;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1B1bHNlL1B1bHNlLmpzIl0sIm5hbWVzIjpbIlB1bHNlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzaG93IiwiZXJyb3IiLCJwb3NpdGlvbiIsInN0eWxlcyIsInB1bHNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLGVBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNyQixRQUFNO0FBQUVDLElBQUFBLFNBQUY7QUFBYUMsSUFBQUEsSUFBSSxHQUFHLElBQXBCO0FBQTBCQyxJQUFBQSxLQUFLLEdBQUcsS0FBbEM7QUFBeUNDLElBQUFBLFFBQVEsR0FBRztBQUFwRCxNQUEyREosS0FBakU7QUFDQSxTQUFPO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdLLHFCQUFPQyxLQUFWLEVBQWlCTCxTQUFqQixFQUE0QkkscUJBQU9ELFFBQVAsQ0FBNUIsRUFBOEM7QUFBRSxPQUFDQyxxQkFBT0gsSUFBUixHQUFlQSxJQUFqQjtBQUF1QixPQUFDRyxxQkFBT0YsS0FBUixHQUFnQkE7QUFBdkMsS0FBOUMsRUFBOEZGLFNBQTlGO0FBQWhCLElBQVA7QUFDRCxDQUhVLGFBQVg7O0FBS0FGLEtBQUssQ0FBQ1EsU0FBTixHQUFrQjtBQUNoQk4sRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUMsTUFETDtBQUVoQlAsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUUsSUFGQTtBQUdoQk4sRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUcsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQWhCLENBSE07QUFJaEJSLEVBQUFBLEtBQUssRUFBRUssbUJBQVVFO0FBSkQsQ0FBbEI7ZUFPZVgsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3B1bHNlLm1vZHVsZS5zY3NzJztcblxuY29uc3QgUHVsc2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzaG93ID0gdHJ1ZSwgZXJyb3IgPSBmYWxzZSwgcG9zaXRpb24gPSAnJyB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnB1bHNlLCBjbGFzc05hbWUsIHN0eWxlc1twb3NpdGlvbl0sIHsgW3N0eWxlcy5zaG93XTogc2hvdywgW3N0eWxlcy5lcnJvcl06IGVycm9yIH0sIGNsYXNzTmFtZSl9IC8+O1xufTtcblxuUHVsc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10pLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWxzZTtcbiJdfQ==