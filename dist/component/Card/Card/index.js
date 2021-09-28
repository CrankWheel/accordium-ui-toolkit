"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

class Card extends _react.PureComponent {
  render() {
    var _this = this;

    const {
      className,
      style,
      children,
      tabIndex,
      onClick
    } = this.props;
    const additionalProps = {};

    if (onClick) {
      additionalProps.onClick = onClick;
      additionalProps.role = 'button';

      additionalProps.onKeyDown = function (event) {
        _newArrowCheck(this, _this);

        if (event.keyCode === 13) {
          onClick();
        }
      }.bind(this);
    }

    return _react.default.createElement("div", _extends({
      className: (0, _classNames.default)('accordium card', className),
      style: style,
      tabIndex: tabIndex
    }, additionalProps), children);
  }

}

exports.default = Card;