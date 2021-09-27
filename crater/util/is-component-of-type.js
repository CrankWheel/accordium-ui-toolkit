"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overrideComponentTypeChecker = overrideComponentTypeChecker;
exports.defaultChecker = defaultChecker;
exports.default = isComponentOfType;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let customChecker;

function overrideComponentTypeChecker(providedChecker) {
  customChecker = providedChecker;
}

function defaultChecker(classType, reactElement) {
  if (process.env.NODE_ENV !== 'production') {
    classType = _react.default.createElement(classType).type;
  }

  return reactElement && reactElement.type === classType;
}

function isComponentOfType(classType, reactElement) {
  return customChecker ? customChecker(classType, reactElement) : defaultChecker(classType, reactElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmF0ZXIvdXRpbC9pcy1jb21wb25lbnQtb2YtdHlwZS5qcyJdLCJuYW1lcyI6WyJjdXN0b21DaGVja2VyIiwib3ZlcnJpZGVDb21wb25lbnRUeXBlQ2hlY2tlciIsInByb3ZpZGVkQ2hlY2tlciIsImRlZmF1bHRDaGVja2VyIiwiY2xhc3NUeXBlIiwicmVhY3RFbGVtZW50IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlzQ29tcG9uZW50T2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQUlBLGFBQUo7O0FBT08sU0FBU0MsNEJBQVQsQ0FBc0NDLGVBQXRDLEVBQXVEO0FBQzVERixFQUFBQSxhQUFhLEdBQUdFLGVBQWhCO0FBQ0Q7O0FBUU0sU0FBU0MsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUNDLFlBQW5DLEVBQWlEO0FBQ3RELE1BQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBRXpDSixJQUFBQSxTQUFTLEdBQUdLLGVBQU1DLGFBQU4sQ0FBb0JOLFNBQXBCLEVBQStCTyxJQUEzQztBQUNEOztBQUNELFNBQU9OLFlBQVksSUFBSUEsWUFBWSxDQUFDTSxJQUFiLEtBQXNCUCxTQUE3QztBQUNEOztBQVFjLFNBQVNRLGlCQUFULENBQTJCUixTQUEzQixFQUFzQ0MsWUFBdEMsRUFBb0Q7QUFDakUsU0FBT0wsYUFBYSxHQUFHQSxhQUFhLENBQUNJLFNBQUQsRUFBWUMsWUFBWixDQUFoQixHQUE0Q0YsY0FBYyxDQUFDQyxTQUFELEVBQVlDLFlBQVosQ0FBOUU7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBjdXN0b21DaGVja2VyO1xuXG4vKipcbiAqICBTZXRzIGN1c3RvbUNoZWNrZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gcHJvdmlkZWRDaGVja2VyIHtGdW5jdGlvbn0gLSBDaGVja2VyIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZUNvbXBvbmVudFR5cGVDaGVja2VyKHByb3ZpZGVkQ2hlY2tlcikge1xuICBjdXN0b21DaGVja2VyID0gcHJvdmlkZWRDaGVja2VyO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGNvbXBvbmVudCBvZiB0aGUgcHJvdmlkZWQgdHlwZS5cbiAqXG4gKiBAcGFyYW0gY2xhc3NUeXBlIHtSZWFjdEVsZW1lbnQgY2xhc3N9IC0gdGhlIGNsYXNzIG9mIGEgUmVhY3QgRWxlbWVudFxuICogQHBhcmFtIHJlYWN0RWxlbWVudCB7UmVhY3RFbGVtZW50fSAtIGFueSBSZWFjdCBFbGVtZW50IChub3QgYSByZWFsIERPTSBub2RlKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdENoZWNrZXIoY2xhc3NUeXBlLCByZWFjdEVsZW1lbnQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2FlYXJvbi9yZWFjdC1ob3QtbG9hZGVyL2Jsb2IvdjMuMC4wLWJldGEuNy9kb2NzL0tub3duJTIwTGltaXRhdGlvbnMubWQjY2hlY2tpbmctZWxlbWVudC10eXBlc1xuICAgIGNsYXNzVHlwZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2xhc3NUeXBlKS50eXBlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIH1cbiAgcmV0dXJuIHJlYWN0RWxlbWVudCAmJiByZWFjdEVsZW1lbnQudHlwZSA9PT0gY2xhc3NUeXBlO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIGN1c3RvbUNoZWNrZXIgaWYgaXQncyBzZXQgb3IgZGVmYXVsdENoZWNrZXIuXG4gKlxuICogQHBhcmFtIGNsYXNzVHlwZSB7UmVhY3RFbGVtZW50IGNsYXNzfSAtIHRoZSBjbGFzcyBvZiBhIFJlYWN0IEVsZW1lbnRcbiAqIEBwYXJhbSByZWFjdEVsZW1lbnQge1JlYWN0RWxlbWVudH0gLSBhbnkgUmVhY3QgRWxlbWVudCAobm90IGEgcmVhbCBET00gbm9kZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDb21wb25lbnRPZlR5cGUoY2xhc3NUeXBlLCByZWFjdEVsZW1lbnQpIHtcbiAgcmV0dXJuIGN1c3RvbUNoZWNrZXIgPyBjdXN0b21DaGVja2VyKGNsYXNzVHlwZSwgcmVhY3RFbGVtZW50KSA6IGRlZmF1bHRDaGVja2VyKGNsYXNzVHlwZSwgcmVhY3RFbGVtZW50KTtcbn1cbiJdfQ==