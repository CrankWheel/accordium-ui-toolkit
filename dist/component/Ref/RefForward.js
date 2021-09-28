"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _react = require("react");

var _handleRef = _interopRequireDefault(require("../../etc/handleRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RefForward extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleRefOverride", function (node) {
      _newArrowCheck(this, _arrowCheckId);

      const {
        children,
        innerRef
      } = _this.props;
      (0, _handleRef.default)(children.ref, node);
      (0, _handleRef.default)(innerRef, node);
    }.bind(_arrowCheckId));
  }

  render() {
    const {
      children
    } = this.props;
    return (0, _react.cloneElement)(children, {
      ref: this.handleRefOverride
    });
  }

}

exports.default = RefForward;

_defineProperty(RefForward, "propTypes", {
  children: PropTypes.element.isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
});