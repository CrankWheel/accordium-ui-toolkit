"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _renderprops = require("react-spring/renderprops");

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Tabs extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "state", {
      activeIndex: 0
    });

    _defineProperty(this, "handleOnClick", function (selectedIndex) {
      _newArrowCheck(this, _arrowCheckId);

      _this.setState({
        activeIndex: selectedIndex
      });
    }.bind(_arrowCheckId));
  }

  render() {
    var _this2 = this;

    const {
      activeIndex
    } = this.state;
    const {
      className,
      style,
      tabs,
      vertical
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('accordium tabs', className, {
        vertical
      }),
      style: style
    }, _react.default.createElement("div", {
      className: "tabs-wrapper"
    }, tabs.map(function (tab, index) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      return _react.default.createElement(_TabItem.default, {
        key: `item_${tab.id}`,
        selected: index === activeIndex,
        tabName: tab.name,
        tabIcon: tab.icon,
        onClick: function () {
          _newArrowCheck(this, _this3);

          return this.handleOnClick(index);
        }.bind(this)
      });
    }.bind(this))), _react.default.createElement("div", {
      className: "content-wrapper"
    }, tabs.map(function (tab, index) {
      var _this4 = this;

      _newArrowCheck(this, _this2);

      const show = index === activeIndex;
      if (show) return _react.default.createElement(_renderprops.Transition, {
        key: `content_${tab.id}`,
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

          return _react.default.createElement(_renderprops.animated.div, {
            className: "tab-content",
            style: props
          }, tab.content, "\uFE0F");
        }.bind(this);
      }.bind(this));
      return null;
    }.bind(this))));
  }

}

exports.default = Tabs;

_defineProperty(Tabs, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
});

_defineProperty(Tabs, "defaultProps", {
  vertical: false,
  tabs: []
});