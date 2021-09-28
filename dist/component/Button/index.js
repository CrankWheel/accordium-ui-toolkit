"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _constant = require("../../etc/constant");

var _index = require("../Iconography/SVGIcons/index");

var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const type = {
  BUTTON: 'button',
  LINK: 'a',
  SUBMIT: 'submit',
  RESET: 'reset'
};

class Button extends _react.PureComponent {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleClick", function (event) {
      _newArrowCheck(this, _arrowCheckId);

      event.preventDefault();
      const {
        onClick,
        disabled,
        loading
      } = _this.props;
      if (disabled || loading) return;
      if (onClick) onClick();
    }.bind(_arrowCheckId));

    _defineProperty(this, "renderLoadingSpinner", function () {
      _newArrowCheck(this, _arrowCheckId2);

      const {
        customLoader,
        loadingText,
        inverted
      } = _this.props;
      return customLoader || _react.default.createElement(_Spinner.default, {
        inverted: inverted,
        text: loadingText
      });
    }.bind(_arrowCheckId2));
  }

  get color() {
    const {
      color,
      primary,
      secondary,
      positive,
      negative,
      info,
      warning
    } = this.props;
    if (primary) return 'blue';else if (secondary) return 'purple';else if (positive) return 'green';else if (negative) return 'red';else if (info) return 'white';else if (warning) return 'orange';
    return color;
  }

  render() {
    const {
      as,
      className,
      size,
      rounded,
      children,
      disabled,
      style,
      loading,
      href,
      block,
      fixedWidth,
      target,
      referrerpolicy,
      inverted
    } = this.props;
    const styling = (0, _classNames.default)('accordium btn border-none', className, this.color, {
      xs: size === _constant.sizing.XS,
      sm: size === _constant.sizing.SM,
      md: size === _constant.sizing.MD,
      lg: size === _constant.sizing.LG,
      xl: size === _constant.sizing.XL,
      rounded,
      'not-rounded': !rounded,
      disabled,
      loading,
      block,
      inverted
    });
    if (as === type.BUTTON || as === type.SUBMIT) return _react.default.createElement("button", {
      type: as,
      className: styling,
      onClick: this.handleClick,
      style: Object.assign({}, style, {
        width: fixedWidth
      })
    }, !loading ? children : this.renderLoadingSpinner());
    return _react.default.createElement("a", {
      href: href,
      className: styling,
      onClick: this.handleClick,
      style: Object.assign({}, style, {
        width: fixedWidth
      }),
      role: "button",
      target: target,
      referrerpolicy: referrerpolicy
    }, !loading ? children : this.renderLoadingSpinner());
  }

}

_defineProperty(Button, "propTypes", {
  as: _propTypes.default.string,
  block: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  customLoader: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  fixedWidth: _propTypes.default.string,
  href: _propTypes.default.string,
  info: _propTypes.default.bool,
  inverted: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loadingText: _propTypes.default.string,
  negative: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  positive: _propTypes.default.bool,
  primary: _propTypes.default.bool,
  referrerpolicy: _propTypes.default.string,
  rounded: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  size: _propTypes.default.string,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  target: _propTypes.default.string,
  warning: _propTypes.default.bool
});

_defineProperty(Button, "defaultProps", {
  as: type.BUTTON,
  href: '',
  size: _constant.sizing.MD,
  color: 'blue',
  rounded: true,
  loadingText: 'loading',
  inverted: false
});

var _default = Button;
exports.default = _default;