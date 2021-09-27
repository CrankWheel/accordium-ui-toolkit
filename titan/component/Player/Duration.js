"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function pad(string) {
  return `0${string}`.slice(-2);
}

function format(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());

  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }

  return `${mm}:${ss}`;
}

const Duration = function Duration({
  className,
  seconds
}) {
  _newArrowCheck(this, _this);

  return _react.default.createElement("time", {
    dateTime: `P${Math.round(seconds)}S`,
    className: className
  }, format(seconds));
}.bind(void 0);

Duration.format = format;
Duration.pad = pad;
var _default = Duration;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUGxheWVyL0R1cmF0aW9uLmpzIl0sIm5hbWVzIjpbInBhZCIsInN0cmluZyIsInNsaWNlIiwiZm9ybWF0Iiwic2Vjb25kcyIsImRhdGUiLCJEYXRlIiwiaGgiLCJnZXRVVENIb3VycyIsIm1tIiwiZ2V0VVRDTWludXRlcyIsInNzIiwiZ2V0VVRDU2Vjb25kcyIsIkR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ25CLFNBQVEsSUFBR0EsTUFBTyxFQUFYLENBQWFDLEtBQWIsQ0FBbUIsQ0FBQyxDQUFwQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDdkIsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsT0FBTyxHQUFHLElBQW5CLENBQWI7QUFDQSxRQUFNRyxFQUFFLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxFQUFYO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSixJQUFJLENBQUNLLGFBQUwsRUFBWDtBQUNBLFFBQU1DLEVBQUUsR0FBR1gsR0FBRyxDQUFDSyxJQUFJLENBQUNPLGFBQUwsRUFBRCxDQUFkOztBQUNBLE1BQUlMLEVBQUosRUFBUTtBQUNOLFdBQVEsR0FBRUEsRUFBRyxJQUFHUCxHQUFHLENBQUNTLEVBQUQsQ0FBSyxJQUFHRSxFQUFHLEVBQTlCO0FBQ0Q7O0FBQ0QsU0FBUSxHQUFFRixFQUFHLElBQUdFLEVBQUcsRUFBbkI7QUFDRDs7QUFFRCxNQUFNRSxRQUFRLEdBQUcsa0JBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhVixFQUFBQTtBQUFiLENBQUQ7QUFBQTs7QUFBQSxTQUNmO0FBQU0sSUFBQSxRQUFRLEVBQUcsSUFBR1csSUFBSSxDQUFDQyxLQUFMLENBQVdaLE9BQVgsQ0FBb0IsR0FBeEM7QUFBNEMsSUFBQSxTQUFTLEVBQUVVO0FBQXZELEtBQ0dYLE1BQU0sQ0FBQ0MsT0FBRCxDQURULENBRGU7QUFBQSxDQUFILGFBQWQ7O0FBTUFTLFFBQVEsQ0FBQ1YsTUFBVCxHQUFrQkEsTUFBbEI7QUFDQVUsUUFBUSxDQUFDYixHQUFULEdBQWVBLEdBQWY7ZUFFZWEsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHBhZChzdHJpbmcpIHtcbiAgcmV0dXJuIGAwJHtzdHJpbmd9YC5zbGljZSgtMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzZWNvbmRzKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzZWNvbmRzICogMTAwMCk7XG4gIGNvbnN0IGhoID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICBjb25zdCBtbSA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuICBjb25zdCBzcyA9IHBhZChkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG4gIGlmIChoaCkge1xuICAgIHJldHVybiBgJHtoaH06JHtwYWQobW0pfToke3NzfWA7XG4gIH1cbiAgcmV0dXJuIGAke21tfToke3NzfWA7XG59XG5cbmNvbnN0IER1cmF0aW9uID0gKHsgY2xhc3NOYW1lLCBzZWNvbmRzIH0pID0+IChcbiAgPHRpbWUgZGF0ZVRpbWU9e2BQJHtNYXRoLnJvdW5kKHNlY29uZHMpfVNgfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAge2Zvcm1hdChzZWNvbmRzKX1cbiAgPC90aW1lPlxuKTtcblxuRHVyYXRpb24uZm9ybWF0ID0gZm9ybWF0O1xuRHVyYXRpb24ucGFkID0gcGFkO1xuXG5leHBvcnQgZGVmYXVsdCBEdXJhdGlvbjtcbiJdfQ==