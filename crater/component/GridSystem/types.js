"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ColumnSizeType = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]);

exports.ColumnSizeType = ColumnSizeType;

const ViewportSizeType = _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

exports.ViewportSizeType = ViewportSizeType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0dyaWRTeXN0ZW0vdHlwZXMuanMiXSwibmFtZXMiOlsiQ29sdW1uU2l6ZVR5cGUiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJib29sIiwiVmlld3BvcnRTaXplVHlwZSIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxNQUFNQSxjQUFjLEdBQUdDLG1CQUFVQyxTQUFWLENBQW9CLENBQUNELG1CQUFVRSxNQUFYLEVBQW1CRixtQkFBVUcsSUFBN0IsQ0FBcEIsQ0FBdkI7Ozs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0osbUJBQVVLLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsQ0FBaEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ29sdW1uU2l6ZVR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbF0pO1xuZXhwb3J0IGNvbnN0IFZpZXdwb3J0U2l6ZVR5cGUgPSBQcm9wVHlwZXMub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddKTtcbiJdfQ==