"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createProps = _interopRequireDefault(require("../createProps"));

var _classNames = _interopRequireDefault(require("../classNames"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xl: _types.ColumnSizeType,
  xsOffset: _propTypes.default.number,
  smOffset: _propTypes.default.number,
  mdOffset: _propTypes.default.number,
  lgOffset: _propTypes.default.number,
  xlOffset: _propTypes.default.number,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes.default.string,
  tagName: _propTypes.default.string,
  children: _propTypes.default.node
};
const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function isInteger(value) {
  return typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var _this = this;

  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames.default)(`first-${props.first}`));
  }

  if (props.last) {
    extraClasses.push((0, _classNames.default)(`last-${props.last}`));
  }

  return Object.keys(props).filter(function (key) {
    _newArrowCheck(this, _this);

    return classMap[key];
  }.bind(this)).map(function (key) {
    _newArrowCheck(this, _this);

    return (0, _classNames.default)(isInteger(props[key]) ? `${classMap[key]}-${props[key]}` : classMap[key]);
  }.bind(this)).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  const {
    tagName
  } = props,
        columnProps = _objectWithoutProperties(props, ["tagName"]);

  return _react.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvR3JpZFN5c3RlbS9jb21wb25lbnRzL0NvbC5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJ4cyIsIkNvbHVtblNpemVUeXBlIiwic20iLCJtZCIsImxnIiwieGwiLCJ4c09mZnNldCIsIlByb3BUeXBlcyIsIm51bWJlciIsInNtT2Zmc2V0IiwibWRPZmZzZXQiLCJsZ09mZnNldCIsInhsT2Zmc2V0IiwiZmlyc3QiLCJWaWV3cG9ydFNpemVUeXBlIiwibGFzdCIsImNsYXNzTmFtZSIsInN0cmluZyIsInRhZ05hbWUiLCJjaGlsZHJlbiIsIm5vZGUiLCJjbGFzc01hcCIsImlzSW50ZWdlciIsInZhbHVlIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJnZXRDb2xDbGFzc05hbWVzIiwicHJvcHMiLCJleHRyYUNsYXNzZXMiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsIm1hcCIsImNvbmNhdCIsImdldENvbHVtblByb3BzIiwiQ29sIiwiY29sdW1uUHJvcHMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEVBQUUsRUFBRUMscUJBRFk7QUFFaEJDLEVBQUFBLEVBQUUsRUFBRUQscUJBRlk7QUFHaEJFLEVBQUFBLEVBQUUsRUFBRUYscUJBSFk7QUFJaEJHLEVBQUFBLEVBQUUsRUFBRUgscUJBSlk7QUFLaEJJLEVBQUFBLEVBQUUsRUFBRUoscUJBTFk7QUFNaEJLLEVBQUFBLFFBQVEsRUFBRUMsbUJBQVVDLE1BTko7QUFPaEJDLEVBQUFBLFFBQVEsRUFBRUYsbUJBQVVDLE1BUEo7QUFRaEJFLEVBQUFBLFFBQVEsRUFBRUgsbUJBQVVDLE1BUko7QUFTaEJHLEVBQUFBLFFBQVEsRUFBRUosbUJBQVVD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J3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlUHJvcHMgZnJvbSAnLi4vY3JlYXRlUHJvcHMnO1xuaW1wb3J0IGdldENsYXNzIGZyb20gJy4uL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgQ29sdW1uU2l6ZVR5cGUsIFZpZXdwb3J0U2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgeHM6IENvbHVtblNpemVUeXBlLFxuICBzbTogQ29sdW1uU2l6ZVR5cGUsXG4gIG1kOiBDb2x1bW5TaXplVHlwZSxcbiAgbGc6IENvbHVtblNpemVUeXBlLFxuICB4bDogQ29sdW1uU2l6ZVR5cGUsXG4gIHhzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbU9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB4bE9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3Q6IFZpZXdwb3J0U2l6ZVR5cGUsXG4gIGxhc3Q6IFZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuY29uc3QgY2xhc3NNYXAgPSB7XG4gIHhzOiAnY29sLXhzJyxcbiAgc206ICdjb2wtc20nLFxuICBtZDogJ2NvbC1tZCcsXG4gIGxnOiAnY29sLWxnJyxcbiAgeGw6ICdjb2wteGwnLFxuICB4c09mZnNldDogJ2NvbC14cy1vZmZzZXQnLFxuICBzbU9mZnNldDogJ2NvbC1zbS1vZmZzZXQnLFxuICBtZE9mZnNldDogJ2NvbC1tZC1vZmZzZXQnLFxuICBsZ09mZnNldDogJ2NvbC1sZy1vZmZzZXQnLFxuICB4bE9mZnNldDogJ2NvbC14bC1vZmZzZXQnLFxufTtcblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xDbGFzc05hbWVzKHByb3BzKSB7XG4gIGNvbnN0IGV4dHJhQ2xhc3NlcyA9IFtdO1xuXG4gIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaChwcm9wcy5jbGFzc05hbWUpO1xuICB9XG5cbiAgaWYgKHByb3BzLmZpcnN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goZ2V0Q2xhc3MoYGZpcnN0LSR7cHJvcHMuZmlyc3R9YCkpO1xuICB9XG5cbiAgaWYgKHByb3BzLmxhc3QpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaChnZXRDbGFzcyhgbGFzdC0ke3Byb3BzLmxhc3R9YCkpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKVxuICAgIC5maWx0ZXIoa2V5ID0+IGNsYXNzTWFwW2tleV0pXG4gICAgLm1hcChrZXkgPT4gZ2V0Q2xhc3MoaXNJbnRlZ2VyKHByb3BzW2tleV0pID8gYCR7Y2xhc3NNYXBba2V5XX0tJHtwcm9wc1trZXldfWAgOiBjbGFzc01hcFtrZXldKSlcbiAgICAuY29uY2F0KGV4dHJhQ2xhc3Nlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2x1bW5Qcm9wcyhwcm9wcykge1xuICByZXR1cm4gY3JlYXRlUHJvcHMocHJvcFR5cGVzLCBwcm9wcywgZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2wocHJvcHMpIHtcbiAgY29uc3QgeyB0YWdOYW1lLCAuLi5jb2x1bW5Qcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUgfHwgJ2RpdicsIGdldENvbHVtblByb3BzKGNvbHVtblByb3BzKSk7XG59XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4iXX0=