"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.mergeProps = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmF0ZXIvdXRpbC9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbIm1lcmdlUHJvcHMiLCJyZWFjdEluc3RhbmNlUHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwicmVtYWluaW5nUHJvcHMiLCJkZWZhdWx0Q2xhc3NOYW1lIiwiZGVmYXVsdElkIiwiZGVmYXVsdFN0eWxlIiwicmVtYWluaW5nRGVmYXVsdFByb3BzIiwiZmluZCIsImFyciIsImNiIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ08sTUFBTUEsVUFBVSxHQUFHLG9CQUFDQyxrQkFBRCxFQUFxQkMsWUFBckIsRUFBc0M7QUFBQTs7QUFDOUQsTUFBSTtBQUFDQyxJQUFBQSxTQUFEO0FBQVlDLElBQUFBLEVBQVo7QUFBZ0JDLElBQUFBO0FBQWhCLE1BQTRDSixrQkFBaEQ7QUFBQSxNQUE4QkssY0FBOUIsNEJBQWdETCxrQkFBaEQ7O0FBQ0EsTUFBSTtBQUNGRSxJQUFBQSxTQUFTLEVBQUVJLGdCQURUO0FBRUZILElBQUFBLEVBQUUsRUFBRUksU0FGRjtBQUdGSCxJQUFBQSxLQUFLLEVBQUVJLFlBQVksR0FBQztBQUhsQixNQUtBUCxZQUxKO0FBQUEsTUFJR1EscUJBSkgsNEJBS0lSLFlBTEo7O0FBT0FDLEVBQUFBLFNBQVMsR0FBRyx5QkFBV0ksZ0JBQVgsRUFBNkJKLFNBQTdCLENBQVo7QUFDQUUsRUFBQUEsS0FBSyxxQkFBT0ksWUFBUCxNQUF3QkosS0FBeEIsQ0FBTDtBQUNBRCxFQUFBQSxFQUFFLEdBQUdBLEVBQUUsSUFBSUksU0FBWDtBQUNBRixFQUFBQSxjQUFjLHFCQUFPSSxxQkFBUCxNQUFpQ0osY0FBakMsQ0FBZDtBQUVBO0FBQVFILElBQUFBLFNBQVI7QUFBbUJDLElBQUFBLEVBQW5CO0FBQXVCQyxJQUFBQTtBQUF2QixLQUFpQ0MsY0FBakM7QUFDRCxDQWZzQixhQUFoQjs7OztBQWlCQSxNQUFNSyxJQUFJLEdBQUcsY0FBQ0MsR0FBRCxFQUFNQyxFQUFOLEVBQWE7QUFBQTs7QUFDL0IsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNHLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DLFFBQUlELEVBQUUsQ0FBQ0QsR0FBRyxDQUFDRSxDQUFELENBQUosQ0FBTixFQUFnQixPQUFPRixHQUFHLENBQUNFLENBQUQsQ0FBVjtBQUNqQjtBQUNGLENBSmdCLGFBQVYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLyoqXG4gKiBAY29tcG9uZW50IG1lcmdlUHJvcHNcbiAqIEBkZXNjcmlwdGlvbiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IG1lcmdlcyBkZWZhdWx0IHByb3BzIGFuZCBwcm92aWRlZCBwcm9wc1xuICpcbiAqIEBwYXJhbSByZWFjdEluc3RhbmNlUHJvcHMgcHJvcGVydGllcyBwYXNzZWQgaW50byB0aGUgY29tcG9uZW50LiBUeXBpY2FsbHlcbiAqIGB0aGlzLnByb3BzYFxuICpcbiAqIEBwYXJhbSBkZWZhdWx0UHJvcHMgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSByZWFjdCBjb21wb25lbnRcbiAqXG4gKiBAcmV0dXJuIGEgbWVyZ2VkIGhhc2ggb2YgcHJvcHMsIGdpdmluZyBwcmVjZWRlbmNlIHRvIHRoZSBgcmVhY3RJbnN0YW5jZVByb3BzYC5cbiAqIElmIGBjbGFzc05hbWVgIGlzIGRlZmluZWQgYnkgYm90aCBzZXRzIG9mIHByb3BzLCB0aGUgcmVzdWx0YW50IGBjbGFzc05hbWVgXG4gKiB3aWxsIGJlIGEgY29tYmluYXRpb24gb2YgdGhlIHR3by5cbiAqIElmIGBzdHlsZWAgaXMgZGVmaW5lZCBieSBib3RoLCB0aGUgcmVzdWx0YW50IGBzdHlsZWAgaGFzaCB3aWxsIGJlIGEgbWVyZ2Ugb2ZcbiAqIHRoZSB0d28gc3R5bGUgaGFzaGVzLCB3aXRoIHByZWNlZGVuY2UgZ2l2ZW4gdG8gYHJlYWN0SW5zdGFuY2VQcm9wc2AncyBzdHlsZS5cbiAqXG4gKiBAZXhhbXBsZSBgYGBqc1xuICogaW1wb3J0IHttZXJnZVByb3BzfSBmcm9tICcuLi9oZWxwZXJzJztcbiAqXG4gKiBjbGFzcyBSaWJib24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgY29uc3Qge2NoaWxkcmVuLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcbiAqICAgICBjb25zdCBwcm9wcyA9IG1lcmdlUHJvcHMob3RoZXJzLCB7Y2xhc3NOYW1lOiAncmliYm9uJywgc3R5bGU6IHtoZWlnaHQ6ICc1MHB4JywgY29sb3I6ICdibHVlJ30sIGlkOiAnZGVmYXVsdC1yaWJib24taWQnfSk7XG4gKiAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT57Y2hpbGRyZW59PC9kaXY+O1xuICogICB9XG4gKiB9XG4gKlxuICogUmVhY3RET00ucmVuZGVyKDxSaWJib24gY2xhc3NOYW1lPVwibXktcmliYm9uXCIgc3R5bGU9e3toZWlnaHQ6ICcyNXB4J319IGlkPVwidW5pcXVlLXJpYmJvbi1pZFwiIC8+LCBteU5vZGUpO1xuICogLy8gUmVzdWx0YW50IHByb3BzOiB7Y2xhc3NOYW1lOiAncmliYm9uIG15LXJpYmJvbicsIHN0eWxlOiB7aGVpZ2h0OiAnMjVweCcsIGNvbG9yOiAnYmx1ZSd9LCBpZDogJ3VuaXF1ZS1yaWJib24taWQnfVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGNvbnN0IG1lcmdlUHJvcHMgPSAocmVhY3RJbnN0YW5jZVByb3BzLCBkZWZhdWx0UHJvcHMpID0+IHtcbiAgbGV0IHtjbGFzc05hbWUsIGlkLCBzdHlsZSwgLi4ucmVtYWluaW5nUHJvcHN9ID0gcmVhY3RJbnN0YW5jZVByb3BzO1xuICBsZXQge1xuICAgIGNsYXNzTmFtZTogZGVmYXVsdENsYXNzTmFtZSxcbiAgICBpZDogZGVmYXVsdElkLFxuICAgIHN0eWxlOiBkZWZhdWx0U3R5bGU9e30sXG4gIC4uLnJlbWFpbmluZ0RlZmF1bHRQcm9wc1xuICB9ID0gZGVmYXVsdFByb3BzO1xuXG4gIGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoZGVmYXVsdENsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgc3R5bGUgPSB7Li4uZGVmYXVsdFN0eWxlLCAuLi5zdHlsZX07XG4gIGlkID0gaWQgfHwgZGVmYXVsdElkO1xuICByZW1haW5pbmdQcm9wcyA9IHsuLi5yZW1haW5pbmdEZWZhdWx0UHJvcHMsIC4uLnJlbWFpbmluZ1Byb3BzfTtcblxuICByZXR1cm4ge2NsYXNzTmFtZSwgaWQsIHN0eWxlLCAuLi5yZW1haW5pbmdQcm9wc307XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IChhcnIsIGNiKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNiKGFycltpXSkpIHJldHVybiBhcnJbaV07XG4gIH1cbn07Il19