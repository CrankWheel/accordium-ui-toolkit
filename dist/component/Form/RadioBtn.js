"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RadioBtn extends _react.PureComponent {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {};

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      showTooltip: false
    });

    _defineProperty(this, "showTooltip", function () {
      _newArrowCheck(this, _arrowCheckId);

      return _this.props.tooltip && _this.setState({
        showTooltip: true
      });
    }.bind(_arrowCheckId));

    _defineProperty(this, "hideTooltip", function () {
      _newArrowCheck(this, _arrowCheckId2);

      return _this.props.tooltip && _this.setState({
        showTooltip: false
      });
    }.bind(_arrowCheckId2));
  }

  render() {
    var _this2 = this;

    const {
      checked,
      name,
      value,
      label,
      tooltip,
      readOnly,
      onChange
    } = this.props;
    return _react.default.createElement("div", {
      className: "accordium input-field md-radio",
      onMouseEnter: function () {
        _newArrowCheck(this, _this2);

        return this.showTooltip();
      }.bind(this),
      onMouseLeave: function () {
        _newArrowCheck(this, _this2);

        return this.hideTooltip();
      }.bind(this)
    }, _react.default.createElement("input", {
      id: `${name}_${value}`,
      type: "radio",
      name: name,
      value: value,
      checked: checked,
      onChange: onChange,
      readOnly: !!readOnly
    }), _react.default.createElement("label", {
      htmlFor: `${name}_${value}`
    }, label), this.props.children, tooltip && _react.default.createElement("div", {
      className: (0, _classNames.default)('tooltip-top', {
        show: this.state.showTooltip
      })
    }, tooltip));
  }

}

_defineProperty(RadioBtn, "defaultProps", {
  className: '',
  name: '',
  tooltip: '',
  readOnly: false
});

var _default = RadioBtn;
exports.default = _default;