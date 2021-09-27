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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aXRhbi91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbImN4IiwiY2xhc3NOYW1lcyIsImNzc01vZHVsZXMiLCJzdHlsZXMiLCJjbGFzc05hbWUiLCJjYXBpdGFsaXplIiwicyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjYW1lbENhc2UiLCJzdHIiLCJyZXBsYWNlIiwiZ3JvdXAiLCJpc1ZhbHVlUHJlc2VudCIsInZhbHVlIiwidW5kZWZpbmVkIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRJbml0aWFscyIsInN0cmluZyIsInNhbml0aXplZFN0cmluZyIsIm5hbWVzIiwic3BsaXQiLCJpbml0aWFscyIsInN1YnN0cmluZyIsImxlbmd0aCIsImdldFZpZXdwb3J0IiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBQ08sTUFBTUEsRUFBRSxHQUFHQyxtQkFBWDs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLG9CQUFDQyxNQUFNLEdBQUcsRUFBVjtBQUFBOztBQUFBOztBQUFBLFNBQWlCLFVBQUFDLFNBQVM7QUFBQTs7QUFBQSxXQUFLRCxNQUFNLENBQUNDLFNBQUQsQ0FBTixHQUFvQkQsTUFBTSxDQUFDQyxTQUFELENBQTFCLEdBQXdDQSxTQUE3QztBQUFBLEdBQTFCO0FBQUEsQ0FBSCxhQUFoQjs7OztBQUNBLE1BQU1DLFVBQVUsR0FBRyxvQkFBQUMsQ0FBQyxFQUFJO0FBQUE7O0FBQzdCLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCLE9BQU8sRUFBUDtBQUMzQixTQUFPQSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEVBQVlDLFdBQVosS0FBNEJGLENBQUMsQ0FBQ0csS0FBRixDQUFRLENBQVIsQ0FBbkM7QUFDRCxDQUhzQixhQUFoQjs7OztBQUlBLE1BQU1DLFNBQVMsR0FBRyxtQkFBQUMsR0FBRztBQUFBOztBQUFBOztBQUFBLFNBQzFCQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxjQUFaLEVBQTRCLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxXQUMvQkEsS0FBSyxDQUNGTCxXQURILEdBRUdJLE9BRkgsQ0FFVyxHQUZYLEVBRWdCLEVBRmhCLEVBR0dBLE9BSEgsQ0FHVyxHQUhYLEVBR2dCLEVBSGhCLENBRCtCO0FBQUEsR0FBakMsWUFEMEI7QUFBQSxDQUFOLGFBQWY7Ozs7QUFPQSxNQUFNRSxjQUFjLEdBQUcsd0JBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUNqQ0EsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBS0MsU0FBNUIsSUFBeUNELEtBQUssS0FBSyxFQUFuRCxJQUF5RCxFQUFFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJFLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLENBQS9CLENBRHhCO0FBQUEsQ0FBUixhQUFwQjs7OztBQUdBLE1BQU1JLFdBQVcsR0FBRyxxQkFBQUMsTUFBTSxFQUFJO0FBQUE7O0FBQ25DLFFBQU1DLGVBQWUsR0FBR0QsTUFBTSxDQUFDUixPQUFQLENBQWUsVUFBZixFQUEyQixFQUEzQixDQUF4QjtBQUNBLFFBQU1VLEtBQUssR0FBR0QsZUFBZSxDQUFDRSxLQUFoQixDQUFzQixHQUF0QixDQUFkO0FBQ0EsTUFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJqQixXQUF6QixFQUFmOztBQUVBLE1BQUljLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCRixJQUFBQSxRQUFRLElBQUlGLEtBQUssQ0FBQ0EsS0FBSyxDQUFDSSxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxDQUF3QkQsU0FBeEIsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsRUFBd0NqQixXQUF4QyxFQUFaO0FBQ0Q7O0FBQ0QsU0FBT2dCLFFBQVA7QUFDRCxDQVR1QixhQUFqQjs7OztBQVdBLE1BQU1HLFdBQVcsR0FBRztBQUFBOztBQUFBLFNBQU87QUFDaENDLElBQUFBLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBRHZCO0FBRWhDQyxJQUFBQSxLQUFLLEVBQUVMLE1BQU0sQ0FBQ00sVUFBUCxJQUFxQkosUUFBUSxDQUFDQyxlQUFULENBQXlCSTtBQUZyQixHQUFQO0FBQUEsQ0FBSCxhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgeyBtZXJnZVByb3BzLCBmaW5kIH0gZnJvbSAnLi9oZWxwZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG9tSGVscGVycyB9IGZyb20gJy4vZG9tX2hlbHBlcnMnO1xuZXhwb3J0IGNvbnN0IGN4ID0gY2xhc3NOYW1lcztcbmV4cG9ydCBjb25zdCBjc3NNb2R1bGVzID0gKHN0eWxlcyA9IHt9KSA9PiBjbGFzc05hbWUgPT4gKHN0eWxlc1tjbGFzc05hbWVdID8gc3R5bGVzW2NsYXNzTmFtZV0gOiBjbGFzc05hbWUpO1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSBzID0+IHtcbiAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnO1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59O1xuZXhwb3J0IGNvbnN0IGNhbWVsQ2FzZSA9IHN0ciA9PlxuICBzdHIucmVwbGFjZSgvKFstX11bYS16XSkvZywgZ3JvdXAgPT5cbiAgICBncm91cFxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKCctJywgJycpXG4gICAgICAucmVwbGFjZSgnXycsICcnKVxuICApO1xuZXhwb3J0IGNvbnN0IGlzVmFsdWVQcmVzZW50ID0gdmFsdWUgPT5cbiAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJycgJiYgISh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE51bWJlci5pc05hTih2YWx1ZSkpO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5pdGlhbHMgPSBzdHJpbmcgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7XG4gIGNvbnN0IG5hbWVzID0gc2FuaXRpemVkU3RyaW5nLnNwbGl0KCcgJyk7XG4gIGxldCBpbml0aWFscyA9IG5hbWVzWzBdLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmIChuYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgaW5pdGlhbHMgKz0gbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIGluaXRpYWxzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdwb3J0ID0gKCkgPT4gKHtcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCxcbn0pO1xuIl19