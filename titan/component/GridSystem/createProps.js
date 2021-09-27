"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function createProps(propTypes, props, classNames) {
  var _this = this;

  const newProps = {};
  Object.keys(props).filter(function (key) {
    _newArrowCheck(this, _this);

    return key === 'children' || !propTypes[key];
  }.bind(this)).forEach(function (key) {
    _newArrowCheck(this, _this);

    return newProps[key] = props[key];
  }.bind(this));
  const className = classNames.filter(function (cn) {
    _newArrowCheck(this, _this);

    return cn;
  }.bind(this)).join(' ');
  return Object.assign({}, newProps, {
    className
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvR3JpZFN5c3RlbS9jcmVhdGVQcm9wcy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQcm9wcyIsInByb3BUeXBlcyIsInByb3BzIiwiY2xhc3NOYW1lcyIsIm5ld1Byb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJjbiIsImpvaW4iLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFlLFNBQVNBLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsVUFBdkMsRUFBbUQ7QUFBQTs7QUFDaEUsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixLQUFaLEVBQ0dLLE1BREgsQ0FDVSxVQUFBQyxHQUFHO0FBQUE7O0FBQUEsV0FBSUEsR0FBRyxLQUFLLFVBQVIsSUFBc0IsQ0FBQ1AsU0FBUyxDQUFDTyxHQUFELENBQXBDO0FBQUEsR0FEYixhQUVHQyxPQUZILENBRVcsVUFBQUQsR0FBRztBQUFBOztBQUFBLFdBQUtKLFFBQVEsQ0FBQ0ksR0FBRCxDQUFSLEdBQWdCTixLQUFLLENBQUNNLEdBQUQsQ0FBMUI7QUFBQSxHQUZkO0FBSUEsUUFBTUUsU0FBUyxHQUFHUCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQUksRUFBRTtBQUFBOztBQUFBLFdBQUlBLEVBQUo7QUFBQSxHQUFwQixhQUE0QkMsSUFBNUIsQ0FBaUMsR0FBakMsQ0FBbEI7QUFDQSxTQUFPUCxNQUFNLENBQUNRLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVCxRQUFsQixFQUE0QjtBQUFFTSxJQUFBQTtBQUFGLEdBQTVCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb3BzKHByb3BUeXBlcywgcHJvcHMsIGNsYXNzTmFtZXMpIHtcbiAgY29uc3QgbmV3UHJvcHMgPSB7fTtcblxuICBPYmplY3Qua2V5cyhwcm9wcylcbiAgICAuZmlsdGVyKGtleSA9PiBrZXkgPT09ICdjaGlsZHJlbicgfHwgIXByb3BUeXBlc1trZXldKVxuICAgIC5mb3JFYWNoKGtleSA9PiAobmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV0pKTtcblxuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcihjbiA9PiBjbikuam9pbignICcpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbmV3UHJvcHMsIHsgY2xhc3NOYW1lIH0pO1xufVxuIl19