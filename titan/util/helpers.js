"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.mergeProps = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const mergeProps = function mergeProps(reactInstanceProps, defaultProps) {
  _newArrowCheck(this, _this);

  let {
    className,
    id,
    style
  } = reactInstanceProps,
      remainingProps = _objectWithoutProperties(reactInstanceProps, ["className", "id", "style"]);

  let {
    className: defaultClassName,
    id: defaultId,
    style: defaultStyle = {}
  } = defaultProps,
      remainingDefaultProps = _objectWithoutProperties(defaultProps, ["className", "id", "style"]);

  className = (0, _classnames.default)(defaultClassName, className);
  style = _objectSpread({}, defaultStyle, {}, style);
  id = id || defaultId;
  remainingProps = _objectSpread({}, remainingDefaultProps, {}, remainingProps);
  return _objectSpread({
    className,
    id,
    style
  }, remainingProps);
}.bind(void 0);

exports.mergeProps = mergeProps;

const find = function find(arr, cb) {
  _newArrowCheck(this, _this);

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return arr[i];
  }
}.bind(void 0);

exports.find = find;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aXRhbi91dGlsL2hlbHBlcnMuanMiXSwibmFtZXMiOlsibWVyZ2VQcm9wcyIsInJlYWN0SW5zdGFuY2VQcm9wcyIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJyZW1haW5pbmdQcm9wcyIsImRlZmF1bHRDbGFzc05hbWUiLCJkZWZhdWx0SWQiLCJkZWZhdWx0U3R5bGUiLCJyZW1haW5pbmdEZWZhdWx0UHJvcHMiLCJmaW5kIiwiYXJyIiwiY2IiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDTyxNQUFNQSxVQUFVLEdBQUcsb0JBQUNDLGtCQUFELEVBQXFCQyxZQUFyQixFQUFzQztBQUFBOztBQUM5RCxNQUFJO0FBQUNDLElBQUFBLFNBQUQ7QUFBWUMsSUFBQUEsRUFBWjtBQUFnQkMsSUFBQUE7QUFBaEIsTUFBNENKLGtCQUFoRDtBQUFBLE1BQThCSyxjQUE5Qiw0QkFBZ0RMLGtCQUFoRDs7QUFDQSxNQUFJO0FBQ0ZFLElBQUFBLFNBQVMsRUFBRUksZ0JBRFQ7QUFFRkgsSUFBQUEsRUFBRSxFQUFFSSxTQUZGO0FBR0ZILElBQUFBLEtBQUssRUFBRUksWUFBWSxHQUFDO0FBSGxCLE1BS0FQLFlBTEo7QUFBQSxNQUlHUSxxQkFKSCw0QkFLSVIsWUFMSjs7QUFPQUMsRUFBQUEsU0FBUyxHQUFHLHlCQUFXSSxnQkFBWCxFQUE2QkosU0FBN0IsQ0FBWjtBQUNBRSxFQUFBQSxLQUFLLHFCQUFPSSxZQUFQLE1BQXdCSixLQUF4QixDQUFMO0FBQ0FELEVBQUFBLEVBQUUsR0FBR0EsRUFBRSxJQUFJSSxTQUFYO0FBQ0FGLEVBQUFBLGNBQWMscUJBQU9JLHFCQUFQLE1BQWlDSixjQUFqQyxDQUFkO0FBRUE7QUFBUUgsSUFBQUEsU0FBUjtBQUFtQkMsSUFBQUEsRUFBbkI7QUFBdUJDLElBQUFBO0FBQXZCLEtBQWlDQyxjQUFqQztBQUNELENBZnNCLGFBQWhCOzs7O0FBaUJBLE1BQU1LLElBQUksR0FBRyxjQUFDQyxHQUFELEVBQU1DLEVBQU4sRUFBYTtBQUFBOztBQUMvQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDbkMsUUFBSUQsRUFBRSxDQUFDRCxHQUFHLENBQUNFLENBQUQsQ0FBSixDQUFOLEVBQWdCLE9BQU9GLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFWO0FBQ2pCO0FBQ0YsQ0FKZ0IsYUFBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vKipcbiAqIEBjb21wb25lbnQgbWVyZ2VQcm9wc1xuICogQGRlc2NyaXB0aW9uIEEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIGRlZmF1bHQgcHJvcHMgYW5kIHByb3ZpZGVkIHByb3BzXG4gKlxuICogQHBhcmFtIHJlYWN0SW5zdGFuY2VQcm9wcyBwcm9wZXJ0aWVzIHBhc3NlZCBpbnRvIHRoZSBjb21wb25lbnQuIFR5cGljYWxseVxuICogYHRoaXMucHJvcHNgXG4gKlxuICogQHBhcmFtIGRlZmF1bHRQcm9wcyBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIHJlYWN0IGNvbXBvbmVudFxuICpcbiAqIEByZXR1cm4gYSBtZXJnZWQgaGFzaCBvZiBwcm9wcywgZ2l2aW5nIHByZWNlZGVuY2UgdG8gdGhlIGByZWFjdEluc3RhbmNlUHJvcHNgLlxuICogSWYgYGNsYXNzTmFtZWAgaXMgZGVmaW5lZCBieSBib3RoIHNldHMgb2YgcHJvcHMsIHRoZSByZXN1bHRhbnQgYGNsYXNzTmFtZWBcbiAqIHdpbGwgYmUgYSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLlxuICogSWYgYHN0eWxlYCBpcyBkZWZpbmVkIGJ5IGJvdGgsIHRoZSByZXN1bHRhbnQgYHN0eWxlYCBoYXNoIHdpbGwgYmUgYSBtZXJnZSBvZlxuICogdGhlIHR3byBzdHlsZSBoYXNoZXMsIHdpdGggcHJlY2VkZW5jZSBnaXZlbiB0byBgcmVhY3RJbnN0YW5jZVByb3BzYCdzIHN0eWxlLlxuICpcbiAqIEBleGFtcGxlIGBgYGpzXG4gKiBpbXBvcnQge21lcmdlUHJvcHN9IGZyb20gJy4uL2hlbHBlcnMnO1xuICpcbiAqIGNsYXNzIFJpYmJvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICBjb25zdCB7Y2hpbGRyZW4sIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuICogICAgIGNvbnN0IHByb3BzID0gbWVyZ2VQcm9wcyhvdGhlcnMsIHtjbGFzc05hbWU6ICdyaWJib24nLCBzdHlsZToge2hlaWdodDogJzUwcHgnLCBjb2xvcjogJ2JsdWUnfSwgaWQ6ICdkZWZhdWx0LXJpYmJvbi1pZCd9KTtcbiAqICAgICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2Rpdj47XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBSZWFjdERPTS5yZW5kZXIoPFJpYmJvbiBjbGFzc05hbWU9XCJteS1yaWJib25cIiBzdHlsZT17e2hlaWdodDogJzI1cHgnfX0gaWQ9XCJ1bmlxdWUtcmliYm9uLWlkXCIgLz4sIG15Tm9kZSk7XG4gKiAvLyBSZXN1bHRhbnQgcHJvcHM6IHtjbGFzc05hbWU6ICdyaWJib24gbXktcmliYm9uJywgc3R5bGU6IHtoZWlnaHQ6ICcyNXB4JywgY29sb3I6ICdibHVlJ30sIGlkOiAndW5pcXVlLXJpYmJvbi1pZCd9XG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgY29uc3QgbWVyZ2VQcm9wcyA9IChyZWFjdEluc3RhbmNlUHJvcHMsIGRlZmF1bHRQcm9wcykgPT4ge1xuICBsZXQge2NsYXNzTmFtZSwgaWQsIHN0eWxlLCAuLi5yZW1haW5pbmdQcm9wc30gPSByZWFjdEluc3RhbmNlUHJvcHM7XG4gIGxldCB7XG4gICAgY2xhc3NOYW1lOiBkZWZhdWx0Q2xhc3NOYW1lLFxuICAgIGlkOiBkZWZhdWx0SWQsXG4gICAgc3R5bGU6IGRlZmF1bHRTdHlsZT17fSxcbiAgLi4ucmVtYWluaW5nRGVmYXVsdFByb3BzXG4gIH0gPSBkZWZhdWx0UHJvcHM7XG5cbiAgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyhkZWZhdWx0Q2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICBzdHlsZSA9IHsuLi5kZWZhdWx0U3R5bGUsIC4uLnN0eWxlfTtcbiAgaWQgPSBpZCB8fCBkZWZhdWx0SWQ7XG4gIHJlbWFpbmluZ1Byb3BzID0gey4uLnJlbWFpbmluZ0RlZmF1bHRQcm9wcywgLi4ucmVtYWluaW5nUHJvcHN9O1xuXG4gIHJldHVybiB7Y2xhc3NOYW1lLCBpZCwgc3R5bGUsIC4uLnJlbWFpbmluZ1Byb3BzfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKGFyciwgY2IpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2IoYXJyW2ldKSkgcmV0dXJuIGFycltpXTtcbiAgfVxufTsiXX0=