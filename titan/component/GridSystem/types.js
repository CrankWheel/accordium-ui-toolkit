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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvR3JpZFN5c3RlbS90eXBlcy5qcyJdLCJuYW1lcyI6WyJDb2x1bW5TaXplVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiLCJWaWV3cG9ydFNpemVUeXBlIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLGNBQWMsR0FBR0MsbUJBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QsbUJBQVVFLE1BQVgsRUFBbUJGLG1CQUFVRyxJQUE3QixDQUFwQixDQUF2Qjs7OztBQUNBLE1BQU1DLGdCQUFnQixHQUFHSixtQkFBVUssS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixDQUFoQixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDb2x1bW5TaXplVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sXSk7XG5leHBvcnQgY29uc3QgVmlld3BvcnRTaXplVHlwZSA9IFByb3BUeXBlcy5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ10pO1xuIl19