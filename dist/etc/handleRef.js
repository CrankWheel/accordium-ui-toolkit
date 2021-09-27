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