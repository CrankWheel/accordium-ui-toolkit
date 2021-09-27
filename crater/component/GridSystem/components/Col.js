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
  compact: _propTypes.default.bool,
  noPadding: _propTypes.default.bool,
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

  if (props.compact) {
    extraClasses.push((0, _classNames.default)('compact'));
  }

  if (props.noPadding) {
    extraClasses.push((0, _classNames.default)('noPadding'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0dyaWRTeXN0ZW0vY29tcG9uZW50cy9Db2wuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwieHMiLCJDb2x1bW5TaXplVHlwZSIsInNtIiwibWQiLCJsZyIsInhsIiwieHNPZmZzZXQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJzbU9mZnNldCIsIm1kT2Zmc2V0IiwibGdPZmZzZXQiLCJ4bE9mZnNldCIsImZpcnN0IiwiVmlld3BvcnRTaXplVHlwZSIsImxhc3QiLCJjb21wYWN0IiwiYm9vbCIsIm5vUGFkZGluZyIsImNsYXNzTmFtZSIsInN0cmluZyIsInRhZ05hbWUiLCJjaGlsZHJlbiIsIm5vZGUiLCJjbGFzc01hcCIsImlzSW50ZWdlciIsInZhbHVlIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJnZXRDb2xDbGFzc05hbWVzIiwicHJvcHMiLCJleHRyYUNsYXNzZXMiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsIm1hcCIsImNvbmNhdCIsImdldENvbHVtblByb3BzIiwiQ29sIiwiY29sdW1uUHJvcHMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEVBQUUsRUFBRUMscUJBRFk7QUFFaEJDLEVBQUFBLEVBQUUsRUFBRUQscUJBRlk7QUFHaEJFLEVBQUFBLEVBQUUsRUFBRUYscUJBSFk7QUFJaEJHLEVBQUFBLEVBQUUsRUFBRUgscUJBSlk7QUFLaEJJLEVBQUFBLEVBQUUsRUFBRUoscUJBTFk7QUFNaEJLLEVBQUFBLFFBQVEsRUFBRUMsbUJBQVVDLE1BTko7QUFPaEJDLEVBQUFBLFFBQVEsRUFBRUYsbUJBQVVDLE1BUEo7QUFRaEJFLEVBQUFBLFFBQVEsRUFBRUgsbUJBQVVDLE1BUko7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QUNDLEtBQUQsQ0FBOUMsQ0FBUDtBQUNEOztBQUVjLFNBQVNVLEdBQVQsQ0FBYVYsS0FBYixFQUFvQjtBQUNqQyxRQUFNO0FBQUVYLElBQUFBO0FBQUYsTUFBOEJXLEtBQXBDO0FBQUEsUUFBb0JXLFdBQXBCLDRCQUFvQ1gsS0FBcEM7O0FBQ0EsU0FBT1ksZUFBTUMsYUFBTixDQUFvQnhCLE9BQU8sSUFBSSxLQUEvQixFQUFzQ29CLGNBQWMsQ0FBQ0UsV0FBRCxDQUFwRCxDQUFQO0FBQ0Q7O0FBRURELEdBQUcsQ0FBQzNDLFNBQUosR0FBZ0JBLFNBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlUHJvcHMgZnJvbSAnLi4vY3JlYXRlUHJvcHMnO1xuaW1wb3J0IGdldENsYXNzIGZyb20gJy4uL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgQ29sdW1uU2l6ZVR5cGUsIFZpZXdwb3J0U2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgeHM6IENvbHVtblNpemVUeXBlLFxuICBzbTogQ29sdW1uU2l6ZVR5cGUsXG4gIG1kOiBDb2x1bW5TaXplVHlwZSxcbiAgbGc6IENvbHVtblNpemVUeXBlLFxuICB4bDogQ29sdW1uU2l6ZVR5cGUsXG4gIHhzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzbU9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWRPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxnT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB4bE9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3Q6IFZpZXdwb3J0U2l6ZVR5cGUsXG4gIGxhc3Q6IFZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNvbXBhY3Q6IFByb3BUeXBlcy5ib29sLFxuICBub1BhZGRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IGNsYXNzTWFwID0ge1xuICB4czogJ2NvbC14cycsXG4gIHNtOiAnY29sLXNtJyxcbiAgbWQ6ICdjb2wtbWQnLFxuICBsZzogJ2NvbC1sZycsXG4gIHhsOiAnY29sLXhsJyxcbiAgeHNPZmZzZXQ6ICdjb2wteHMtb2Zmc2V0JyxcbiAgc21PZmZzZXQ6ICdjb2wtc20tb2Zmc2V0JyxcbiAgbWRPZmZzZXQ6ICdjb2wtbWQtb2Zmc2V0JyxcbiAgbGdPZmZzZXQ6ICdjb2wtbGctb2Zmc2V0JyxcbiAgeGxPZmZzZXQ6ICdjb2wteGwtb2Zmc2V0Jyxcbn07XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykge1xuICBjb25zdCBleHRyYUNsYXNzZXMgPSBbXTtcblxuICBpZiAocHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2gocHJvcHMuY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5maXJzdCkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKGdldENsYXNzKGBmaXJzdC0ke3Byb3BzLmZpcnN0fWApKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5sYXN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goZ2V0Q2xhc3MoYGxhc3QtJHtwcm9wcy5sYXN0fWApKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5jb21wYWN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goZ2V0Q2xhc3MoJ2NvbXBhY3QnKSk7XG4gIH1cblxuICBpZiAocHJvcHMubm9QYWRkaW5nKSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goZ2V0Q2xhc3MoJ25vUGFkZGluZycpKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcylcbiAgICAuZmlsdGVyKGtleSA9PiBjbGFzc01hcFtrZXldKVxuICAgIC5tYXAoa2V5ID0+IGdldENsYXNzKGlzSW50ZWdlcihwcm9wc1trZXldKSA/IGAke2NsYXNzTWFwW2tleV19LSR7cHJvcHNba2V5XX1gIDogY2xhc3NNYXBba2V5XSkpXG4gICAgLmNvbmNhdChleHRyYUNsYXNzZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcHMocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVByb3BzKHByb3BUeXBlcywgcHJvcHMsIGdldENvbENsYXNzTmFtZXMocHJvcHMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sKHByb3BzKSB7XG4gIGNvbnN0IHsgdGFnTmFtZSwgLi4uY29sdW1uUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lIHx8ICdkaXYnLCBnZXRDb2x1bW5Qcm9wcyhjb2x1bW5Qcm9wcykpO1xufVxuXG5Db2wucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuIl19