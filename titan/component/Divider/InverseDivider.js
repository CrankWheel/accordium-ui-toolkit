"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Divider = _interopRequireDefault(require("./Divider"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const defDivider = function defDivider(props) {
  var _class, _temp;

  _newArrowCheck(this, _this);

  return _temp = _class = class extends _react.default.PureComponent {
    render() {
      return _react.default.createElement(_Divider.default, _extends({}, props, this.props));
    }

  }, _defineProperty(_class, "propTypes", {
    inverse: _propTypes.default.bool,
    size: _propTypes.default.oneOf(['large'])
  }), _temp;
}.bind(void 0);

const InverseDivider = defDivider({
  inverse: true
});
var _default = InverseDivider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvRGl2aWRlci9JbnZlcnNlRGl2aWRlci5qcyJdLCJuYW1lcyI6WyJkZWZEaXZpZGVyIiwicHJvcHMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJpbnZlcnNlIiwiUHJvcFR5cGVzIiwiYm9vbCIsInNpemUiLCJvbmVPZiIsIkludmVyc2VEaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLFVBQVUsR0FBRyxvQkFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUE7O0FBQzFCLDBCQUFPLGNBQWNDLGVBQU1DLGFBQXBCLENBQWtDO0FBTXZDQyxJQUFBQSxNQUFNLEdBQUc7QUFDUCxhQUFPLDZCQUFDLGdCQUFELGVBQWFILEtBQWIsRUFBd0IsS0FBS0EsS0FBN0IsRUFBUDtBQUNEOztBQVJzQyxHQUF6Qyx1Q0FDcUI7QUFDakJJLElBQUFBLE9BQU8sRUFBRUMsbUJBQVVDLElBREY7QUFFakJDLElBQUFBLElBQUksRUFBRUYsbUJBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELENBQWhCO0FBRlcsR0FEckI7QUFVRCxDQVhlLGFBQWhCOztBQWFBLE1BQU1DLGNBQWMsR0FBR1YsVUFBVSxDQUFDO0FBQUVLLEVBQUFBLE9BQU8sRUFBRTtBQUFYLENBQUQsQ0FBakM7ZUFFZUssYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcblxuY29uc3QgZGVmRGl2aWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGFyZ2UnXSksXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8RGl2aWRlciB7Li4ucHJvcHN9IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBJbnZlcnNlRGl2aWRlciA9IGRlZkRpdmlkZXIoeyBpbnZlcnNlOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnZlcnNlRGl2aWRlcjtcbiJdfQ==