"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const handleRef = function handleRef(ref, node) {
  _newArrowCheck(this, _this);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof ref === 'string') {
      throw new Error(['We do not support refs as string, this is a legacy API and will be likely to be removed in', 'one of the future releases of React.'].join(' '));
    }
  }

  if (typeof ref === 'function') {
    ref(node);
    return;
  }

  if (ref !== null && typeof ref === 'object') {
    ref.current = node;
  }
}.bind(void 0);

var _default = handleRef;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JlZi9oYW5kbGVSZWYuanMiXSwibmFtZXMiOlsiaGFuZGxlUmVmIiwicmVmIiwibm9kZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIkVycm9yIiwiam9pbiIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUEsTUFBTUEsU0FBUyxHQUFHLG1CQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUFBOztBQUMvQixNQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxRQUFJLE9BQU9KLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtBQUMzQixZQUFNLElBQUlLLEtBQUosQ0FDSixDQUNFLDRGQURGLEVBRUUsc0NBRkYsRUFHRUMsSUFIRixDQUdPLEdBSFAsQ0FESSxDQUFOO0FBTUQ7QUFDRjs7QUFFRCxNQUFJLE9BQU9OLEdBQVAsS0FBZSxVQUFuQixFQUErQjtBQUM3QkEsSUFBQUEsR0FBRyxDQUFDQyxJQUFELENBQUg7QUFDQTtBQUNEOztBQUVELE1BQUlELEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztBQUczQ0EsSUFBQUEsR0FBRyxDQUFDTyxPQUFKLEdBQWNOLElBQWQ7QUFDRDtBQUNGLENBdEJjLGFBQWY7O2VBd0JlRixTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBjb3JyZWN0bHkgaGFuZGxlcyBwYXNzaW5nIHJlZnMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IHJlZiBBbiByZWYgb2JqZWN0IG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIEEgbm9kZSB0aGF0IHNob3VsZCBiZSBwYXNzZWQgYnkgcmVmXG4gKi9cbmNvbnN0IGhhbmRsZVJlZiA9IChyZWYsIG5vZGUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgW1xuICAgICAgICAgICdXZSBkbyBub3Qgc3VwcG9ydCByZWZzIGFzIHN0cmluZywgdGhpcyBpcyBhIGxlZ2FjeSBBUEkgYW5kIHdpbGwgYmUgbGlrZWx5IHRvIGJlIHJlbW92ZWQgaW4nLFxuICAgICAgICAgICdvbmUgb2YgdGhlIGZ1dHVyZSByZWxlYXNlcyBvZiBSZWFjdC4nLFxuICAgICAgICBdLmpvaW4oJyAnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZihub2RlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocmVmICE9PSBudWxsICYmIHR5cGVvZiByZWYgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gVGhlIGBjdXJyZW50YCBwcm9wZXJ0eSBpcyBkZWZpbmVkIGFzIHJlYWRvbmx5LCBob3dldmVyIGl0J3MgYSB2YWxpZCB3YXkgYmVjYXVzZSBgcmVmYCBpcyBhIG11dGFibGUgb2JqZWN0XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVSZWY7XG4iXX0=