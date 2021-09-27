"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TabItem extends _react.Component {
  render() {
    var _this = this;

    const {
      className,
      style,
      children,
      selected,
      tabName,
      tabIcon,
      onClick
    } = this.props;
    return _react.default.createElement("div", {
      role: "button",
      className: (0, _classNames.default)('tab-item', className, {
        selected
      }),
      style: style,
      onClick: onClick,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this);

        if (event.keyCode === 13) {
          onClick();
        }
      }.bind(this),
      tabIndex: 0
    }, tabIcon && tabIcon, tabName && tabName);
  }

}

exports.default = TabItem;

_defineProperty(TabItem, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
});