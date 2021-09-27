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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0RpdmlkZXIvSW52ZXJzZURpdmlkZXIuanMiXSwibmFtZXMiOlsiZGVmRGl2aWRlciIsInByb3BzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwiaW52ZXJzZSIsIlByb3BUeXBlcyIsImJvb2wiLCJzaXplIiwib25lT2YiLCJJbnZlcnNlRGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsb0JBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBOztBQUMxQiwwQkFBTyxjQUFjQyxlQUFNQyxhQUFwQixDQUFrQztBQU12Q0MsSUFBQUEsTUFBTSxHQUFHO0FBQ1AsYUFBTyw2QkFBQyxnQkFBRCxlQUFhSCxLQUFiLEVBQXdCLEtBQUtBLEtBQTdCLEVBQVA7QUFDRDs7QUFSc0MsR0FBekMsdUNBQ3FCO0FBQ2pCSSxJQUFBQSxPQUFPLEVBQUVDLG1CQUFVQyxJQURGO0FBRWpCQyxJQUFBQSxJQUFJLEVBQUVGLG1CQUFVRyxLQUFWLENBQWdCLENBQUMsT0FBRCxDQUFoQjtBQUZXLEdBRHJCO0FBVUQsQ0FYZSxhQUFoQjs7QUFhQSxNQUFNQyxjQUFjLEdBQUdWLFVBQVUsQ0FBQztBQUFFSyxFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUFELENBQWpDO2VBQ2VLLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcic7XG5cbmNvbnN0IGRlZkRpdmlkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2xhcmdlJ10pLFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPERpdmlkZXIgey4uLnByb3BzfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgSW52ZXJzZURpdmlkZXIgPSBkZWZEaXZpZGVyKHsgaW52ZXJzZTogdHJ1ZSB9KTtcbmV4cG9ydCBkZWZhdWx0IEludmVyc2VEaXZpZGVyO1xuIl19