"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Switch extends _react.Component {
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
      value,
      name,
      label,
      tooltip,
      readOnly,
      onChange,
      min,
      max,
      step,
      className
    } = this.props;
    console.log('value:', `${(value - min) / (max - min) * 100}%`);
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('accordium input-field range', className, {
        readOnly
      }),
      onMouseEnter: function () {
        _newArrowCheck(this, _this2);

        return this.showTooltip();
      }.bind(this),
      onMouseLeave: function () {
        _newArrowCheck(this, _this2);

        return this.hideTooltip();
      }.bind(this)
    }, _react.default.createElement("label", {
      htmlFor: name,
      className: "range-label"
    }, label), _react.default.createElement("div", {
      className: "range-wrap mt2"
    }, _react.default.createElement("div", {
      className: "fill",
      id: "range-fill",
      style: {
        width: `${(value - min) / (max - min) * 100}%`
      }
    }), _react.default.createElement("input", {
      className: "slider",
      min: min,
      max: max,
      step: step,
      name: name,
      type: "range",
      onChange: onChange,
      value: value,
      readOnly: !!readOnly
    })), tooltip && _react.default.createElement("div", {
      className: (0, _classNames.default)('tooltip-top', {
        show: this.state.showTooltip
      })
    }, tooltip));
  }

}

_defineProperty(Switch, "defaultProps", {
  className: '',
  name: '',
  tooltip: '',
  readOnly: false
});

var _default = Switch;
exports.default = _default;