"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChipModule = _interopRequireDefault(require("./Chip.module.scss"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Chip = function Chip(_ref) {
  _newArrowCheck(this, _this);

  let {
    children,
    className,
    deletable,
    onDeleteClick,
    mini,
    kind,
    bold
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children", "className", "deletable", "onDeleteClick", "mini", "kind", "bold"]);

  let hasAvatar = false;

  if (_react.default.Children.count(children)) {
    const flatChildren = _react.default.Children.toArray(children);

    const firstChild = flatChildren[0];
    hasAvatar = firstChild && firstChild.type && firstChild.type === _Avatar.default;
  }

  const classes = (0, _classnames.default)(_ChipModule.default.chip, _ChipModule.default[kind], {
    [_ChipModule.default.deletable]: !!deletable,
    [_ChipModule.default.avatar]: !!hasAvatar,
    [_ChipModule.default.mini]: !!mini,
    [_ChipModule.default.bold]: !!bold
  }, className);
  return _react.default.createElement("div", _extends({
    className: classes
  }, other), typeof children === 'string' ? _react.default.createElement("span", null, children) : children, deletable ? _react.default.createElement("span", {
    role: "button",
    tabIndex: "0",
    className: _ChipModule.default.delete,
    onClick: onDeleteClick
  }, _react.default.createElement("svg", {
    viewBox: "0 0 40 40",
    className: _ChipModule.default.deleteIcon
  }, _react.default.createElement("path", {
    className: _ChipModule.default.deleteX,
    d: "M 12,12 L 28,28 M 28,12 L 12,28"
  }))) : null);
}.bind(void 0);

Chip.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  deletable: _propTypes.default.bool,
  onDeleteClick: _propTypes.default.func
};
Chip.defaultProps = {
  className: '',
  deletable: false
};
var _default = Chip;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQ2hpcC9DaGlwLmpzIl0sIm5hbWVzIjpbIkNoaXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRlbGV0YWJsZSIsIm9uRGVsZXRlQ2xpY2siLCJtaW5pIiwia2luZCIsImJvbGQiLCJvdGhlciIsImhhc0F2YXRhciIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJjb3VudCIsImZsYXRDaGlsZHJlbiIsInRvQXJyYXkiLCJmaXJzdENoaWxkIiwidHlwZSIsIkF2YXRhciIsImNsYXNzZXMiLCJzdHlsZXMiLCJjaGlwIiwiYXZhdGFyIiwiZGVsZXRlIiwiZGVsZXRlSWNvbiIsImRlbGV0ZVgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsb0JBQW1GO0FBQUE7O0FBQUEsTUFBbEY7QUFBRUMsSUFBQUEsUUFBRjtBQUFZQyxJQUFBQSxTQUFaO0FBQXVCQyxJQUFBQSxTQUF2QjtBQUFrQ0MsSUFBQUEsYUFBbEM7QUFBaURDLElBQUFBLElBQWpEO0FBQXVEQyxJQUFBQSxJQUF2RDtBQUE2REMsSUFBQUE7QUFBN0QsR0FBa0Y7QUFBQSxNQUFaQyxLQUFZOztBQUM5RixNQUFJQyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsTUFBSUMsZUFBTUMsUUFBTixDQUFlQyxLQUFmLENBQXFCWCxRQUFyQixDQUFKLEVBQW9DO0FBQ2xDLFVBQU1ZLFlBQVksR0FBR0gsZUFBTUMsUUFBTixDQUFlRyxPQUFmLENBQXVCYixRQUF2QixDQUFyQjs7QUFDQSxVQUFNYyxVQUFVLEdBQUdGLFlBQVksQ0FBQyxDQUFELENBQS9CO0FBQ0FKLElBQUFBLFNBQVMsR0FBR00sVUFBVSxJQUFJQSxVQUFVLENBQUNDLElBQXpCLElBQWlDRCxVQUFVLENBQUNDLElBQVgsS0FBb0JDLGVBQWpFO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTyxHQUFHLHlCQUNkQyxvQkFBT0MsSUFETyxFQUVkRCxvQkFBT2IsSUFBUCxDQUZjLEVBR2Q7QUFDRSxLQUFDYSxvQkFBT2hCLFNBQVIsR0FBb0IsQ0FBQyxDQUFDQSxTQUR4QjtBQUVFLEtBQUNnQixvQkFBT0UsTUFBUixHQUFpQixDQUFDLENBQUNaLFNBRnJCO0FBR0UsS0FBQ1Usb0JBQU9kLElBQVIsR0FBZSxDQUFDLENBQUNBLElBSG5CO0FBSUUsS0FBQ2Msb0JBQU9aLElBQVIsR0FBZSxDQUFDLENBQUNBO0FBSm5CLEdBSGMsRUFTZEwsU0FUYyxDQUFoQjtBQVlBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRWdCO0FBQWhCLEtBQTZCVixLQUE3QixHQUNHLE9BQU9QLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsMkNBQU9BLFFBQVAsQ0FBL0IsR0FBeURBLFFBRDVELEVBRUdFLFNBQVMsR0FDUjtBQUFNLElBQUEsSUFBSSxFQUFDLFFBQVg7QUFBb0IsSUFBQSxRQUFRLEVBQUMsR0FBN0I7QUFBaUMsSUFBQSxTQUFTLEVBQUVnQixvQkFBT0csTUFBbkQ7QUFBMkQsSUFBQSxPQUFPLEVBQUVsQjtBQUFwRSxLQUNFO0FBQUssSUFBQSxPQUFPLEVBQUMsV0FBYjtBQUF5QixJQUFBLFNBQVMsRUFBRWUsb0JBQU9JO0FBQTNDLEtBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBRUosb0JBQU9LLE9BQXhCO0FBQWlDLElBQUEsQ0FBQyxFQUFDO0FBQW5DLElBREYsQ0FERixDQURRLEdBTU4sSUFSTixDQURGO0FBWUQsQ0FoQ1MsYUFBVjs7QUFrQ0F4QixJQUFJLENBQUN5QixTQUFMLEdBQWlCO0FBQ2Z4QixFQUFBQSxRQUFRLEVBQUV5QixtQkFBVUMsSUFETDtBQUVmekIsRUFBQUEsU0FBUyxFQUFFd0IsbUJBQVVFLE1BRk47QUFHZnpCLEVBQUFBLFNBQVMsRUFBRXVCLG1CQUFVRyxJQUhOO0FBSWZ6QixFQUFBQSxhQUFhLEVBQUVzQixtQkFBVUk7QUFKVixDQUFqQjtBQU9BOUIsSUFBSSxDQUFDK0IsWUFBTCxHQUFvQjtBQUNsQjdCLEVBQUFBLFNBQVMsRUFBRSxFQURPO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUU7QUFGTyxDQUFwQjtlQUtlSCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hpcC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uL0F2YXRhci9BdmF0YXInO1xuXG5jb25zdCBDaGlwID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGVsZXRhYmxlLCBvbkRlbGV0ZUNsaWNrLCBtaW5pLCBraW5kLCBib2xkLCAuLi5vdGhlciB9KSA9PiB7XG4gIGxldCBoYXNBdmF0YXIgPSBmYWxzZTtcbiAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSkge1xuICAgIGNvbnN0IGZsYXRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmbGF0Q2hpbGRyZW5bMF07XG4gICAgaGFzQXZhdGFyID0gZmlyc3RDaGlsZCAmJiBmaXJzdENoaWxkLnR5cGUgJiYgZmlyc3RDaGlsZC50eXBlID09PSBBdmF0YXI7XG4gIH1cblxuICBjb25zdCBjbGFzc2VzID0gY3goXG4gICAgc3R5bGVzLmNoaXAsXG4gICAgc3R5bGVzW2tpbmRdLFxuICAgIHtcbiAgICAgIFtzdHlsZXMuZGVsZXRhYmxlXTogISFkZWxldGFibGUsXG4gICAgICBbc3R5bGVzLmF2YXRhcl06ICEhaGFzQXZhdGFyLFxuICAgICAgW3N0eWxlcy5taW5pXTogISFtaW5pLFxuICAgICAgW3N0eWxlcy5ib2xkXTogISFib2xkLFxuICAgIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVyfT5cbiAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj4gOiBjaGlsZHJlbn1cbiAgICAgIHtkZWxldGFibGUgPyAoXG4gICAgICAgIDxzcGFuIHJvbGU9XCJidXR0b25cIiB0YWJJbmRleD1cIjBcIiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9e29uRGVsZXRlQ2xpY2t9PlxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUljb259PlxuICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlWH0gZD1cIk0gMTIsMTIgTCAyOCwyOCBNIDI4LDEyIEwgMTIsMjhcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNoaXAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVsZXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25EZWxldGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5DaGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVsZXRhYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoaXA7XG4iXX0=