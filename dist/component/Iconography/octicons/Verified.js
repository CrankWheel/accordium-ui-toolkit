"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const SvgVerified = function SvgVerified(_ref) {
  _newArrowCheck(this, _this);

  let {
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title"]);

  return _react.default.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 17 17"
  }, props), _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M16.65 7.507l-1.147-1.423a1.595 1.595 0 0 1-.33-.817l-.201-1.805a1.603 1.603 0 0 0-1.412-1.413l-1.806-.201a1.617 1.617 0 0 1-.828-.35L9.503.35a1.597 1.597 0 0 0-1.996 0L6.084 1.497c-.233.18-.51.297-.817.33l-1.805.201A1.603 1.603 0 0 0 2.049 3.44l-.201 1.805c-.032.319-.17.595-.35.829L.35 7.497a1.597 1.597 0 0 0 0 1.996l1.147 1.423c.18.233.297.51.33.817l.201 1.805a1.603 1.603 0 0 0 1.412 1.413l1.805.201c.319.032.595.17.829.35l1.423 1.148a1.597 1.597 0 0 0 1.996 0l1.423-1.147c.233-.18.51-.297.817-.33l1.805-.201a1.603 1.603 0 0 0 1.413-1.412l.201-1.806c.032-.318.17-.594.35-.828l1.148-1.423a1.597 1.597 0 0 0 0-1.996zm-9.737 5.246L3.196 9.036 4.79 7.443l2.124 2.124 5.309-5.309 1.593 1.646-6.902 6.849z"
  }));
}.bind(void 0);

var _default = SvgVerified;
exports.default = _default;