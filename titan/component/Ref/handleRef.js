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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUmVmL2hhbmRsZVJlZi5qcyJdLCJuYW1lcyI6WyJoYW5kbGVSZWYiLCJyZWYiLCJub2RlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiRXJyb3IiLCJqb2luIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQSxNQUFNQSxTQUFTLEdBQUcsbUJBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQUE7O0FBQy9CLE1BQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLFFBQUksT0FBT0osR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSUssS0FBSixDQUNKLENBQ0UsNEZBREYsRUFFRSxzQ0FGRixFQUdFQyxJQUhGLENBR08sR0FIUCxDQURJLENBQU47QUFNRDtBQUNGOztBQUVELE1BQUksT0FBT04sR0FBUCxLQUFlLFVBQW5CLEVBQStCO0FBQzdCQSxJQUFBQSxHQUFHLENBQUNDLElBQUQsQ0FBSDtBQUNBO0FBQ0Q7O0FBRUQsTUFBSUQsR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQW5DLEVBQTZDO0FBRzNDQSxJQUFBQSxHQUFHLENBQUNPLE9BQUosR0FBY04sSUFBZDtBQUNEO0FBQ0YsQ0F0QmMsYUFBZjs7ZUF3QmVGLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IGNvcnJlY3RseSBoYW5kbGVzIHBhc3NpbmcgcmVmcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gcmVmIEFuIHJlZiBvYmplY3Qgb3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgQSBub2RlIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBieSByZWZcbiAqL1xuY29uc3QgaGFuZGxlUmVmID0gKHJlZiwgbm9kZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBbXG4gICAgICAgICAgJ1dlIGRvIG5vdCBzdXBwb3J0IHJlZnMgYXMgc3RyaW5nLCB0aGlzIGlzIGEgbGVnYWN5IEFQSSBhbmQgd2lsbCBiZSBsaWtlbHkgdG8gYmUgcmVtb3ZlZCBpbicsXG4gICAgICAgICAgJ29uZSBvZiB0aGUgZnV0dXJlIHJlbGVhc2VzIG9mIFJlYWN0LicsXG4gICAgICAgIF0uam9pbignICcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmVmKG5vZGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChyZWYgIT09IG51bGwgJiYgdHlwZW9mIHJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBUaGUgYGN1cnJlbnRgIHByb3BlcnR5IGlzIGRlZmluZWQgYXMgcmVhZG9ubHksIGhvd2V2ZXIgaXQncyBhIHZhbGlkIHdheSBiZWNhdXNlIGByZWZgIGlzIGEgbXV0YWJsZSBvYmplY3RcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlZjtcbiJdfQ==