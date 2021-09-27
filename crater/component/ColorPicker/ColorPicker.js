"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _Input = require("../Input");

var _helpers = require("../../util/helpers");

var _colorpickerModule = _interopRequireDefault(require("./colorpicker.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const INPUT_PATTERN = '#[0-9A-Fa-f]{6}$';
const HEX_PATTERN = /#[0-9A-Fa-f]{6}/;
const DEFAULT_COLOR = '#000000';

const ColorPicker = function ColorPicker(props) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  const {
    id,
    className,
    labelClassName,
    inputClassName,
    colorPickerWrapperClassName,
    colorPickerClassName,
    value,
    label,
    inputPicker = false,
    onChange
  } = props,
        restOfProps = _objectWithoutProperties(props, ["id", "className", "labelClassName", "inputClassName", "colorPickerWrapperClassName", "colorPickerClassName", "value", "label", "inputPicker", "onChange"]);

  const pickerId = id || (0, _lodash.default)('colorpicker');
  const inputProps = (0, _helpers.mergeProps)(restOfProps, {
    id: pickerId,
    type: 'color',
    value,
    onChange
  });

  const handleBlur = function handleBlur(event) {
    _newArrowCheck(this, _this2);

    if (!HEX_PATTERN.test(event.target.value)) {
      onChange({
        target: {
          value: DEFAULT_COLOR
        }
      });
    }
  }.bind(this);

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_colorpickerModule.default.colorPicker, {
      [_colorpickerModule.default.withInput]: inputPicker
    }, className)
  }, inputPicker ? _react.default.createElement(_Input.Input, _extends({
    className: (0, _classnames.default)(_colorpickerModule.default.inputPicker, inputClassName),
    label: label,
    value: value,
    pattern: INPUT_PATTERN,
    maxLength: 7,
    onBlur: handleBlur,
    onChange: onChange
  }, restOfProps)) : _react.default.createElement("label", {
    className: labelClassName,
    htmlFor: pickerId
  }, label), _react.default.createElement("div", {
    className: (0, _classnames.default)(_colorpickerModule.default.colorPickerInputWrapper, {
      [_colorpickerModule.default.overlayedColorPicker]: inputPicker
    }, colorPickerWrapperClassName)
  }, _react.default.createElement("input", _extends({
    className: colorPickerClassName
  }, inputProps))));
}.bind(void 0);

ColorPicker.propTypes = {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  inputPicker: _propTypes.default.bool,
  labelClassName: _propTypes.default.string,
  inputClassName: _propTypes.default.string,
  colorPickerWrapperClassName: _propTypes.default.string,
  colorPickerClassName: _propTypes.default.string
};
var _default = ColorPicker;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NvbG9yUGlja2VyL0NvbG9yUGlja2VyLmpzIl0sIm5hbWVzIjpbIklOUFVUX1BBVFRFUk4iLCJIRVhfUEFUVEVSTiIsIkRFRkFVTFRfQ09MT1IiLCJDb2xvclBpY2tlciIsInByb3BzIiwiaWQiLCJjbGFzc05hbWUiLCJsYWJlbENsYXNzTmFtZSIsImlucHV0Q2xhc3NOYW1lIiwiY29sb3JQaWNrZXJXcmFwcGVyQ2xhc3NOYW1lIiwiY29sb3JQaWNrZXJDbGFzc05hbWUiLCJ2YWx1ZSIsImxhYmVsIiwiaW5wdXRQaWNrZXIiLCJvbkNoYW5nZSIsInJlc3RPZlByb3BzIiwicGlja2VySWQiLCJpbnB1dFByb3BzIiwidHlwZSIsImhhbmRsZUJsdXIiLCJldmVudCIsInRlc3QiLCJ0YXJnZXQiLCJzdHlsZXMiLCJjb2xvclBpY2tlciIsIndpdGhJbnB1dCIsImNvbG9yUGlja2VySW5wdXRXcmFwcGVyIiwib3ZlcmxheWVkQ29sb3JQaWNrZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLGtCQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxpQkFBcEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsU0FBdEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLHFCQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQTs7QUFDM0IsUUFBTTtBQUNKQyxJQUFBQSxFQURJO0FBRUpDLElBQUFBLFNBRkk7QUFHSkMsSUFBQUEsY0FISTtBQUlKQyxJQUFBQSxjQUpJO0FBS0pDLElBQUFBLDJCQUxJO0FBTUpDLElBQUFBLG9CQU5JO0FBT0pDLElBQUFBLEtBUEk7QUFRSkMsSUFBQUEsS0FSSTtBQVNKQyxJQUFBQSxXQUFXLEdBQUcsS0FUVjtBQVVKQyxJQUFBQTtBQVZJLE1BWUZWLEtBWko7QUFBQSxRQVdLVyxXQVhMLDRCQVlJWCxLQVpKOztBQWFBLFFBQU1ZLFFBQVEsR0FBR1gsRUFBRSxJQUFJLHFCQUFTLGFBQVQsQ0FBdkI7QUFFQSxRQUFNWSxVQUFVLEdBQUcseUJBQVdGLFdBQVgsRUFBd0I7QUFDekNWLElBQUFBLEVBQUUsRUFBRVcsUUFEcUM7QUFFekNFLElBQUFBLElBQUksRUFBRSxPQUZtQztBQUd6Q1AsSUFBQUEsS0FIeUM7QUFJekNHLElBQUFBO0FBSnlDLEdBQXhCLENBQW5COztBQU9BLFFBQU1LLFVBQVUsR0FBRyxvQkFBQUMsS0FBSyxFQUFJO0FBQUE7O0FBRTFCLFFBQUksQ0FBQ25CLFdBQVcsQ0FBQ29CLElBQVosQ0FBaUJELEtBQUssQ0FBQ0UsTUFBTixDQUFhWCxLQUE5QixDQUFMLEVBQTJDO0FBQ3pDRyxNQUFBQSxRQUFRLENBQUM7QUFBRVEsUUFBQUEsTUFBTSxFQUFFO0FBQUVYLFVBQUFBLEtBQUssRUFBRVQ7QUFBVDtBQUFWLE9BQUQsQ0FBUjtBQUNEO0FBQ0YsR0FMZSxXQUFoQjs7QUFPQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdxQiwyQkFBT0MsV0FBVixFQUF1QjtBQUFFLE9BQUNELDJCQUFPRSxTQUFSLEdBQW9CWjtBQUF0QixLQUF2QixFQUE0RFAsU0FBNUQ7QUFBaEIsS0FDR08sV0FBVyxHQUNWLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRSx5QkFBR1UsMkJBQU9WLFdBQVYsRUFBdUJMLGNBQXZCLENBRGI7QUFFRSxJQUFBLEtBQUssRUFBRUksS0FGVDtBQUdFLElBQUEsS0FBSyxFQUFFRCxLQUhUO0FBSUUsSUFBQSxPQUFPLEVBQUVYLGFBSlg7QUFLRSxJQUFBLFNBQVMsRUFBRSxDQUxiO0FBTUUsSUFBQSxNQUFNLEVBQUVtQixVQU5WO0FBT0UsSUFBQSxRQUFRLEVBQUVMO0FBUFosS0FRTUMsV0FSTixFQURVLEdBWVY7QUFBTyxJQUFBLFNBQVMsRUFBRVIsY0FBbEI7QUFBa0MsSUFBQSxPQUFPLEVBQUVTO0FBQTNDLEtBQ0dKLEtBREgsQ0FiSixFQWlCRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHVywyQkFBT0csdUJBQVYsRUFBbUM7QUFBRSxPQUFDSCwyQkFBT0ksb0JBQVIsR0FBK0JkO0FBQWpDLEtBQW5DLEVBQW1GSiwyQkFBbkY7QUFBaEIsS0FDRTtBQUFPLElBQUEsU0FBUyxFQUFFQztBQUFsQixLQUE0Q08sVUFBNUMsRUFERixDQWpCRixDQURGO0FBdUJELENBckRnQixhQUFqQjs7QUF1REFkLFdBQVcsQ0FBQ3lCLFNBQVosR0FBd0I7QUFDdEJ2QixFQUFBQSxFQUFFLEVBQUV3QixtQkFBVUMsTUFEUTtBQUV0QnhCLEVBQUFBLFNBQVMsRUFBRXVCLG1CQUFVQyxNQUZDO0FBR3RCbEIsRUFBQUEsS0FBSyxFQUFFaUIsbUJBQVVDLE1BSEs7QUFJdEJuQixFQUFBQSxLQUFLLEVBQUVrQixtQkFBVUMsTUFKSztBQUt0QmpCLEVBQUFBLFdBQVcsRUFBRWdCLG1CQUFVRSxJQUxEO0FBTXRCeEIsRUFBQUEsY0FBYyxFQUFFc0IsbUJBQVVDLE1BTko7QUFPdEJ0QixFQUFBQSxjQUFjLEVBQUVxQixtQkFBVUMsTUFQSjtBQVF0QnJCLEVBQUFBLDJCQUEyQixFQUFFb0IsbUJBQVVDLE1BUmpCO0FBU3RCcEIsRUFBQUEsb0JBQW9CLEVBQUVtQixtQkFBVUM7QUFUVixDQUF4QjtlQVllM0IsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVuaXF1ZWlkIGZyb20gJ2xvZGFzaC51bmlxdWVpZCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL0lucHV0JztcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlsL2hlbHBlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbG9ycGlja2VyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSU5QVVRfUEFUVEVSTiA9ICcjWzAtOUEtRmEtZl17Nn0kJztcbmNvbnN0IEhFWF9QQVRURVJOID0gLyNbMC05QS1GYS1mXXs2fS87XG5jb25zdCBERUZBVUxUX0NPTE9SID0gJyMwMDAwMDAnO1xuXG5jb25zdCBDb2xvclBpY2tlciA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNsYXNzTmFtZSxcbiAgICBsYWJlbENsYXNzTmFtZSxcbiAgICBpbnB1dENsYXNzTmFtZSxcbiAgICBjb2xvclBpY2tlcldyYXBwZXJDbGFzc05hbWUsXG4gICAgY29sb3JQaWNrZXJDbGFzc05hbWUsXG4gICAgdmFsdWUsXG4gICAgbGFiZWwsXG4gICAgaW5wdXRQaWNrZXIgPSBmYWxzZSxcbiAgICBvbkNoYW5nZSxcbiAgICAuLi5yZXN0T2ZQcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHBpY2tlcklkID0gaWQgfHwgdW5pcXVlaWQoJ2NvbG9ycGlja2VyJyk7XG5cbiAgY29uc3QgaW5wdXRQcm9wcyA9IG1lcmdlUHJvcHMocmVzdE9mUHJvcHMsIHtcbiAgICBpZDogcGlja2VySWQsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICAvLyB2ZXJpZnkgaWYgdmFsaWQgaGV4LCBvdGhlcndpc2Ugc2V0IGRlZmF1bHQgdG8gIzAwMDAwMCBhcyBwZXIgY29sb3IgcGlja2VyIHN0YW5kYXJkIGJlaGF2aW91clxuICAgIGlmICghSEVYX1BBVFRFUk4udGVzdChldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICBvbkNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTogREVGQVVMVF9DT0xPUiB9IH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29sb3JQaWNrZXIsIHsgW3N0eWxlcy53aXRoSW5wdXRdOiBpbnB1dFBpY2tlciB9LCBjbGFzc05hbWUpfT5cbiAgICAgIHtpbnB1dFBpY2tlciA/IChcbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuaW5wdXRQaWNrZXIsIGlucHV0Q2xhc3NOYW1lKX1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHBhdHRlcm49e0lOUFVUX1BBVFRFUk59XG4gICAgICAgICAgbWF4TGVuZ3RoPXs3fVxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgey4uLnJlc3RPZlByb3BzfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17bGFiZWxDbGFzc05hbWV9IGh0bWxGb3I9e3BpY2tlcklkfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb2xvclBpY2tlcklucHV0V3JhcHBlciwgeyBbc3R5bGVzLm92ZXJsYXllZENvbG9yUGlja2VyXTogaW5wdXRQaWNrZXIgfSwgY29sb3JQaWNrZXJXcmFwcGVyQ2xhc3NOYW1lKX0+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2NvbG9yUGlja2VyQ2xhc3NOYW1lfSB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29sb3JQaWNrZXIucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0UGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xvclBpY2tlcldyYXBwZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yUGlja2VyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXI7XG4iXX0=