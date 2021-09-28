"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _renderprops = require("react-spring/renderprops");

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DropDownList extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {};

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      show: false
    });

    _defineProperty(this, "toggle", function (event) {
      var _this2 = this;

      _newArrowCheck(this, _arrowCheckId);

      event.stopPropagation();
      event.preventDefault();

      _this.setState(function (prevState) {
        _newArrowCheck(this, _this2);

        return {
          show: !prevState.show
        };
      }.bind(this), function () {
        _newArrowCheck(this, _this2);

        const {
          show
        } = _this.state;
        if (show) document.addEventListener('click', _this.closeDropDown);else document.removeEventListener('click', _this.closeDropDown);
      }.bind(this));
    }.bind(_arrowCheckId));

    _defineProperty(this, "closeDropDown", function () {
      var _this3 = this;

      _newArrowCheck(this, _arrowCheckId2);

      if (_this._isMounted) _this.setState({
        show: false
      }, function () {
        _newArrowCheck(this, _this3);

        document.removeEventListener('click', _this.closeDropDown);
      }.bind(this));
    }.bind(_arrowCheckId2));
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    var _this4 = this;

    const {
      show
    } = this.state;
    const {
      className,
      style,
      triggerClassName,
      trigger,
      children
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('clearfix accordium dropdown-list', className),
      style: style
    }, _react.default.createElement("button", {
      onClick: function (event) {
        _newArrowCheck(this, _this4);

        return this.toggle(event);
      }.bind(this),
      className: (0, _classNames.default)('dropdown-list-trigger', triggerClassName),
      "aria-expanded": show,
      "aria-haspopup": "listbox"
    }, trigger), _react.default.createElement(_renderprops.Transition, {
      native: true,
      items: show,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }, function (show) {
      var _this5 = this;

      _newArrowCheck(this, _this4);

      return show && function (props) {
        _newArrowCheck(this, _this5);

        return _react.default.createElement(_renderprops.animated.ul, {
          className: "dropdown-list-items p0 m0",
          style: props,
          role: "listbox",
          tabIndex: "-1"
        }, children, "\uFE0F");
      }.bind(this);
    }.bind(this)));
  }

}

exports.default = DropDownList;

_defineProperty(DropDownList, "defaultProps", {
  trigger: _react.default.createElement("svg", {
    width: "27",
    height: "5.684",
    viewBox: "0 0 27 5.684"
  }, _react.default.createElement("path", {
    id: "dots-icon",
    d: "M24.342,226.842A2.842,2.842,0,1,1,21.5,224,2.839,2.839,0,0,1,24.342,226.842ZM32.158,224A2.842,2.842,0,1,0,35,226.842,2.839,2.839,0,0,0,32.158,224Zm-21.316,0a2.842,2.842,0,1,0,2.842,2.842A2.839,2.839,0,0,0,10.842,224Z",
    transform: "translate(-8 -224)",
    className: "color"
  }))
});