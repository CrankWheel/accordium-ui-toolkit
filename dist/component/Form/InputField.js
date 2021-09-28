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

class InputField extends _react.PureComponent {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {};

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

    _defineProperty(this, "renderCaption", function (captionText) {
      _newArrowCheck(this, _arrowCheckId3);

      if (captionText === undefined || captionText === '') return null;
      return _react.default.createElement("i", null, " ", captionText);
    }.bind(_arrowCheckId3));
  }

  render() {
    var _this2 = this;

    const {
      className,
      type,
      name,
      value,
      onChange,
      readOnly,
      label,
      caption,
      tooltip,
      error,
      placeholder
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('accordium input-field', className, {
        error
      })
    }, _react.default.createElement("input", {
      type: type,
      name: name,
      value: value,
      onChange: onChange,
      readOnly: !!readOnly,
      placeholder: placeholder,
      onFocus: function () {
        _newArrowCheck(this, _this2);

        return this.showTooltip();
      }.bind(this),
      onBlur: function () {
        _newArrowCheck(this, _this2);

        return this.hideTooltip();
      }.bind(this)
    }), _react.default.createElement("label", {
      htmlFor: name,
      className: (0, _classNames.default)({
        'not-empty': value !== ''
      })
    }, label, this.renderCaption(caption)), tooltip && _react.default.createElement("div", {
      className: (0, _classNames.default)('tooltip-top', {
        show: this.state.showTooltip
      })
    }, tooltip));
  }

}

_defineProperty(InputField, "defaultProps", {
  className: '',
  type: 'text',
  name: '',
  tooltip: ''
});

var _default = InputField;
exports.default = _default;