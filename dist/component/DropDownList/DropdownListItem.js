"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _SVGIcons = require("../Iconography/SVGIcons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DropDownListItem extends _react.PureComponent {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {},
        _arrowCheckId4 = {},
        _arrowCheckId5 = {};

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      selected: false
    });

    _defineProperty(this, "renderLoadingSpinner", function () {
      _newArrowCheck(this, _arrowCheckId);

      return _react.default.createElement("span", {
        role: "img",
        className: "loading-spinner"
      }, _react.default.createElement(_SVGIcons.LoadingSpinner, null), " Loading...");
    }.bind(_arrowCheckId));

    _defineProperty(this, "setSelected", function () {
      _newArrowCheck(this, _arrowCheckId2);

      return _this.setState({
        selected: true
      });
    }.bind(_arrowCheckId2));

    _defineProperty(this, "unsetSelected", function () {
      _newArrowCheck(this, _arrowCheckId3);

      return _this.setState({
        selected: false
      });
    }.bind(_arrowCheckId3));

    _defineProperty(this, "handleOnClick", function () {
      _newArrowCheck(this, _arrowCheckId4);

      const {
        loading,
        onClick
      } = _this.props;
      if (loading) return;
      if (onClick) onClick();
    }.bind(_arrowCheckId4));

    _defineProperty(this, "handleOnKeyDown", function (event) {
      _newArrowCheck(this, _arrowCheckId5);

      if (event.keyCode === 13) {
        _this.handleOnClick();
      }
    }.bind(_arrowCheckId5));
  }

  render() {
    const {
      selected
    } = this.state;
    const {
      className,
      style,
      thumbnail,
      name,
      loading,
      custom,
      children
    } = this.props;
    return _react.default.createElement("li", {
      role: "option",
      "aria-selected": selected,
      onFocus: this.setSelected,
      onBlur: this.unsetSelected
    }, !custom ? _react.default.createElement("div", {
      role: "button",
      className: (0, _classNames.default)('dropdown-list-item p1', className),
      style: style,
      onClick: this.handleOnClick,
      onKeyDown: this.handleOnKeyDown,
      tabIndex: 0
    }, loading ? this.renderLoadingSpinner() : _react.default.createElement(_react.Fragment, null, thumbnail && _react.default.createElement("div", {
      className: "dropdown-list-item-thumbnail"
    }, thumbnail), name && _react.default.createElement("div", {
      className: "dropdown-list-item-title"
    }, name))) : children);
  }

}

exports.default = DropDownListItem;

_defineProperty(DropDownListItem, "defaultProps", {
  custom: false
});