"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Radio = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _helpers = require("../../util/helpers");

var _RadioContext = require("./RadioContext");

var _radioGroupModule = _interopRequireDefault(require("./radio-group.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Radio = function Radio(props) {
  _newArrowCheck(this, _this);

  const {
    selectedValue,
    name,
    handleChange
  } = (0, _react.useContext)(_RadioContext.RadioContext);

  const {
    children,
    id,
    className,
    value
  } = props,
        others = _objectWithoutProperties(props, ["children", "id", "className", "value"]);

  const radioId = id || (0, _lodash.default)('radio');
  const inputProps = (0, _helpers.mergeProps)(others, {
    className: _radioGroupModule.default.radioButton,
    id: radioId,
    type: 'radio',
    name,
    value
  });
  return _react.default.createElement("div", {
    className: _radioGroupModule.default.radioButtonWrapper
  }, _react.default.createElement("input", _extends({}, inputProps, {
    checked: value === selectedValue,
    onChange: handleChange
  })), _react.default.createElement("label", {
    htmlFor: radioId
  }, _react.default.createElement("span", {
    className: _radioGroupModule.default.customRadio
  }), _react.default.createElement("div", {
    className: _radioGroupModule.default.labelContent
  }, children)));
}.bind(void 0);

exports.Radio = Radio;
var _default = Radio;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JhZGlvR3JvdXAvUmFkaW8uanMiXSwibmFtZXMiOlsiUmFkaW8iLCJwcm9wcyIsInNlbGVjdGVkVmFsdWUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiUmFkaW9Db250ZXh0IiwiY2hpbGRyZW4iLCJpZCIsImNsYXNzTmFtZSIsInZhbHVlIiwib3RoZXJzIiwicmFkaW9JZCIsImlucHV0UHJvcHMiLCJzdHlsZXMiLCJyYWRpb0J1dHRvbiIsInR5cGUiLCJyYWRpb0J1dHRvbldyYXBwZXIiLCJjdXN0b21SYWRpbyIsImxhYmVsQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNQSxLQUFLLEdBQUcsZUFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQzVCLFFBQU07QUFBRUMsSUFBQUEsYUFBRjtBQUFpQkMsSUFBQUEsSUFBakI7QUFBdUJDLElBQUFBO0FBQXZCLE1BQXdDLHVCQUFXQywwQkFBWCxDQUE5Qzs7QUFDQSxRQUFNO0FBQUVDLElBQUFBLFFBQUY7QUFBWUMsSUFBQUEsRUFBWjtBQUFnQkMsSUFBQUEsU0FBaEI7QUFBMkJDLElBQUFBO0FBQTNCLE1BQWdEUixLQUF0RDtBQUFBLFFBQTJDUyxNQUEzQyw0QkFBc0RULEtBQXREOztBQUNBLFFBQU1VLE9BQU8sR0FBR0osRUFBRSxJQUFJLHFCQUFTLE9BQVQsQ0FBdEI7QUFFQSxRQUFNSyxVQUFVLEdBQUcseUJBQVdGLE1BQVgsRUFBbUI7QUFDcENGLElBQUFBLFNBQVMsRUFBRUssMEJBQU9DLFdBRGtCO0FBRXBDUCxJQUFBQSxFQUFFLEVBQUVJLE9BRmdDO0FBR3BDSSxJQUFBQSxJQUFJLEVBQUUsT0FIOEI7QUFJcENaLElBQUFBLElBSm9DO0FBS3BDTSxJQUFBQTtBQUxvQyxHQUFuQixDQUFuQjtBQVFBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUksMEJBQU9HO0FBQXZCLEtBQ0UsbURBQVdKLFVBQVg7QUFBdUIsSUFBQSxPQUFPLEVBQUVILEtBQUssS0FBS1AsYUFBMUM7QUFBeUQsSUFBQSxRQUFRLEVBQUVFO0FBQW5FLEtBREYsRUFFRTtBQUFPLElBQUEsT0FBTyxFQUFFTztBQUFoQixLQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUVFLDBCQUFPSTtBQUF4QixJQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRUosMEJBQU9LO0FBQXZCLEtBQXNDWixRQUF0QyxDQUZGLENBRkYsQ0FERjtBQVNELENBdEJpQixhQUFYOzs7ZUF3QlFOLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bmlxdWVpZCBmcm9tICdsb2Rhc2gudW5pcXVlaWQnO1xuaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycyc7XG5pbXBvcnQgeyBSYWRpb0NvbnRleHQgfSBmcm9tICcuL1JhZGlvQ29udGV4dCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmFkaW8tZ3JvdXAubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgUmFkaW8gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc2VsZWN0ZWRWYWx1ZSwgbmFtZSwgaGFuZGxlQ2hhbmdlIH0gPSB1c2VDb250ZXh0KFJhZGlvQ29udGV4dCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlkLCBjbGFzc05hbWUsIHZhbHVlLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICBjb25zdCByYWRpb0lkID0gaWQgfHwgdW5pcXVlaWQoJ3JhZGlvJyk7XG5cbiAgY29uc3QgaW5wdXRQcm9wcyA9IG1lcmdlUHJvcHMob3RoZXJzLCB7XG4gICAgY2xhc3NOYW1lOiBzdHlsZXMucmFkaW9CdXR0b24sXG4gICAgaWQ6IHJhZGlvSWQsXG4gICAgdHlwZTogJ3JhZGlvJyxcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFkaW9CdXR0b25XcmFwcGVyfT5cbiAgICAgIDxpbnB1dCB7Li4uaW5wdXRQcm9wc30gY2hlY2tlZD17dmFsdWUgPT09IHNlbGVjdGVkVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17cmFkaW9JZH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1c3RvbVJhZGlvfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsQ29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19