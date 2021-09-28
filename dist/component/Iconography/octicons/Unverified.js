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

const SvgUnverified = function SvgUnverified(_ref) {
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
    d: "M16.65 7.507l-1.147-1.423a1.595 1.595 0 0 1-.33-.817l-.201-1.805a1.603 1.603 0 0 0-1.412-1.413l-1.806-.201a1.617 1.617 0 0 1-.828-.35L9.503.35a1.597 1.597 0 0 0-1.996 0L6.084 1.497c-.233.18-.51.297-.817.33l-1.805.201A1.603 1.603 0 0 0 2.049 3.44l-.201 1.805c-.032.319-.17.595-.35.829L.35 7.497a1.597 1.597 0 0 0 0 1.996l1.147 1.423c.18.233.297.51.33.817l.201 1.805a1.603 1.603 0 0 0 1.412 1.413l1.805.201c.319.032.595.17.829.35l1.423 1.148a1.597 1.597 0 0 0 1.996 0l1.423-1.147c.233-.18.51-.297.817-.33l1.805-.201a1.603 1.603 0 0 0 1.413-1.412l.201-1.806c.032-.318.17-.594.35-.828l1.148-1.423a1.597 1.597 0 0 0 0-1.996zm-7.083 4.715c0 .297-.233.53-.53.53H7.973a.532.532 0 0 1-.53-.53V11.16c0-.297.244-.531.53-.531h1.062c.298 0 .531.234.531.53v1.063zm1.657-5.193c-.064.18-.18.35-.319.5-.138.17-.149.201-.35.403a3.5 3.5 0 0 1-.553.478c-.116.095-.212.201-.297.286-.085.085-.148.18-.202.287a1.63 1.63 0 0 0-.116.319c-.032.116-.032.138-.032.265H7.582c0-.233 0-.329.031-.51.032-.201.085-.382.149-.552.064-.148.149-.297.265-.446.117-.138.245-.265.436-.403.287-.202.382-.319.51-.552.127-.234.212-.404.212-.627 0-.287-.064-.478-.212-.616-.139-.138-.33-.201-.616-.201-.096 0-.202.02-.319.053-.117.032-.18.095-.265.17-.085.074-.149.116-.213.212a.435.435 0 0 0-.095.297H5.34c0-.403.138-.594.287-.881.17-.287.382-.531.647-.712.266-.18.584-.318.935-.403a4.94 4.94 0 0 1 1.157-.138c.467 0 .882.053 1.243.138.36.096.669.234.934.414.244.18.435.404.584.67.138.265.202.583.202.933 0 .234 0 .446-.085.627l-.021-.01z"
  }));
}.bind(void 0);

var _default = SvgUnverified;
exports.default = _default;