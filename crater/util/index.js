"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mergeProps", {
  enumerable: true,
  get: function () {
    return _helpers.mergeProps;
  }
});
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function () {
    return _helpers.find;
  }
});
Object.defineProperty(exports, "DomHelpers", {
  enumerable: true,
  get: function () {
    return _dom_helpers.default;
  }
});
exports.getViewport = exports.getInitials = exports.isValuePresent = exports.camelCase = exports.capitalize = exports.cssModules = exports.cx = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("./helpers");

var _dom_helpers = _interopRequireDefault(require("./dom_helpers"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const cx = _classnames.default;
exports.cx = cx;

const cssModules = function cssModules(styles = {}) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  return function (className) {
    _newArrowCheck(this, _this2);

    return styles[className] ? styles[className] : className;
  }.bind(this);
}.bind(void 0);

exports.cssModules = cssModules;

const capitalize = function capitalize(s) {
  _newArrowCheck(this, _this);

  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}.bind(void 0);

exports.capitalize = capitalize;

const camelCase = function camelCase(str) {
  var _this3 = this;

  _newArrowCheck(this, _this);

  return str.replace(/([-_][a-z])/g, function (group) {
    _newArrowCheck(this, _this3);

    return group.toUpperCase().replace('-', '').replace('_', '');
  }.bind(this));
}.bind(void 0);

exports.camelCase = camelCase;

const isValuePresent = function isValuePresent(value) {
  _newArrowCheck(this, _this);

  return value !== null && value !== undefined && value !== '' && !(typeof value === 'number' && Number.isNaN(value));
}.bind(void 0);

exports.isValuePresent = isValuePresent;

const getInitials = function getInitials(string) {
  _newArrowCheck(this, _this);

  const sanitizedString = string.replace(/ +(?= )/g, '');
  const names = sanitizedString.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
}.bind(void 0);

exports.getInitials = getInitials;

const getViewport = function getViewport() {
  _newArrowCheck(this, _this);

  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  };
}.bind(void 0);

exports.getViewport = getViewport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmF0ZXIvdXRpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjeCIsImNsYXNzTmFtZXMiLCJjc3NNb2R1bGVzIiwic3R5bGVzIiwiY2xhc3NOYW1lIiwiY2FwaXRhbGl6ZSIsInMiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2FtZWxDYXNlIiwic3RyIiwicmVwbGFjZSIsImdyb3VwIiwiaXNWYWx1ZVByZXNlbnQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIk51bWJlciIsImlzTmFOIiwiZ2V0SW5pdGlhbHMiLCJzdHJpbmciLCJzYW5pdGl6ZWRTdHJpbmciLCJuYW1lcyIsInNwbGl0IiwiaW5pdGlhbHMiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJnZXRWaWV3cG9ydCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7OztBQUNPLE1BQU1BLEVBQUUsR0FBR0MsbUJBQVg7OztBQUNBLE1BQU1DLFVBQVUsR0FBRyxvQkFBQ0MsTUFBTSxHQUFHLEVBQVY7QUFBQTs7QUFBQTs7QUFBQSxTQUFpQixVQUFBQyxTQUFTO0FBQUE7O0FBQUEsV0FBS0QsTUFBTSxDQUFDQyxTQUFELENBQU4sR0FBb0JELE1BQU0sQ0FBQ0MsU0FBRCxDQUExQixHQUF3Q0EsU0FBN0M7QUFBQSxHQUExQjtBQUFBLENBQUgsYUFBaEI7Ozs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsb0JBQUFDLENBQUMsRUFBSTtBQUFBOztBQUM3QixNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQixPQUFPLEVBQVA7QUFDM0IsU0FBT0EsQ0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFZQyxXQUFaLEtBQTRCRixDQUFDLENBQUNHLEtBQUYsQ0FBUSxDQUFSLENBQW5DO0FBQ0QsQ0FIc0IsYUFBaEI7Ozs7QUFJQSxNQUFNQyxTQUFTLEdBQUcsbUJBQUFDLEdBQUc7QUFBQTs7QUFBQTs7QUFBQSxTQUMxQkEsR0FBRyxDQUFDQyxPQUFKLENBQVksY0FBWixFQUE0QixVQUFBQyxLQUFLO0FBQUE7O0FBQUEsV0FDL0JBLEtBQUssQ0FDRkwsV0FESCxHQUVHSSxPQUZILENBRVcsR0FGWCxFQUVnQixFQUZoQixFQUdHQSxPQUhILENBR1csR0FIWCxFQUdnQixFQUhoQixDQUQrQjtBQUFBLEdBQWpDLFlBRDBCO0FBQUEsQ0FBTixhQUFmOzs7O0FBT0EsTUFBTUUsY0FBYyxHQUFHLHdCQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FDakNBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUtDLFNBQTVCLElBQXlDRCxLQUFLLEtBQUssRUFBbkQsSUFBeUQsRUFBRSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBYixDQUEvQixDQUR4QjtBQUFBLENBQVIsYUFBcEI7Ozs7QUFHQSxNQUFNSSxXQUFXLEdBQUcscUJBQUFDLE1BQU0sRUFBSTtBQUFBOztBQUNuQyxRQUFNQyxlQUFlLEdBQUdELE1BQU0sQ0FBQ1IsT0FBUCxDQUFlLFVBQWYsRUFBMkIsRUFBM0IsQ0FBeEI7QUFDQSxRQUFNVSxLQUFLLEdBQUdELGVBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBR0YsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCakIsV0FBekIsRUFBZjs7QUFFQSxNQUFJYyxLQUFLLENBQUNJLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQkYsSUFBQUEsUUFBUSxJQUFJRixLQUFLLENBQUNBLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQWhCLENBQUwsQ0FBd0JELFNBQXhCLENBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDakIsV0FBeEMsRUFBWjtBQUNEOztBQUNELFNBQU9nQixRQUFQO0FBQ0QsQ0FUdUIsYUFBakI7Ozs7QUFXQSxNQUFNRyxXQUFXLEdBQUc7QUFBQTs7QUFBQSxTQUFPO0FBQ2hDQyxJQUFBQSxNQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUR2QjtBQUVoQ0MsSUFBQUEsS0FBSyxFQUFFTCxNQUFNLENBQUNNLFVBQVAsSUFBcUJKLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5Qkk7QUFGckIsR0FBUDtBQUFBLENBQUgsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IHsgbWVyZ2VQcm9wcywgZmluZCB9IGZyb20gJy4vaGVscGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERvbUhlbHBlcnMgfSBmcm9tICcuL2RvbV9oZWxwZXJzJztcbmV4cG9ydCBjb25zdCBjeCA9IGNsYXNzTmFtZXM7XG5leHBvcnQgY29uc3QgY3NzTW9kdWxlcyA9IChzdHlsZXMgPSB7fSkgPT4gY2xhc3NOYW1lID0+IChzdHlsZXNbY2xhc3NOYW1lXSA/IHN0eWxlc1tjbGFzc05hbWVdIDogY2xhc3NOYW1lKTtcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gcyA9PiB7XG4gIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufTtcbmV4cG9ydCBjb25zdCBjYW1lbENhc2UgPSBzdHIgPT5cbiAgc3RyLnJlcGxhY2UoLyhbLV9dW2Etel0pL2csIGdyb3VwID0+XG4gICAgZ3JvdXBcbiAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgnLScsICcnKVxuICAgICAgLnJlcGxhY2UoJ18nLCAnJylcbiAgKTtcbmV4cG9ydCBjb25zdCBpc1ZhbHVlUHJlc2VudCA9IHZhbHVlID0+XG4gIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICcnICYmICEodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBOdW1iZXIuaXNOYU4odmFsdWUpKTtcblxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxzID0gc3RyaW5nID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyArKD89ICkvZywgJycpO1xuICBjb25zdCBuYW1lcyA9IHNhbml0aXplZFN0cmluZy5zcGxpdCgnICcpO1xuICBsZXQgaW5pdGlhbHMgPSBuYW1lc1swXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKTtcblxuICBpZiAobmFtZXMubGVuZ3RoID4gMSkge1xuICAgIGluaXRpYWxzICs9IG5hbWVzW25hbWVzLmxlbmd0aCAtIDFdLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBpbml0aWFscztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3cG9ydCA9ICgpID0+ICh7XG4gIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsXG59KTtcbiJdfQ==