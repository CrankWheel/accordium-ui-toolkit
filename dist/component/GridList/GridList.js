"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _renderprops = require("react-spring/renderprops");

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _Container = _interopRequireDefault(require("../Layout/Container"));

var _GridListItem = _interopRequireDefault(require("./GridListItem"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GridList extends _react.Component {
  render() {
    var _this = this;

    const {
      className,
      style,
      children,
      items,
      onItemClick
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('clearfix accordium grid-list', className),
      style: style
    }, items ? _react.default.createElement(_Container.default, null, _react.default.createElement(_renderprops.Trail, {
      items: items,
      keys: function (item) {
        _newArrowCheck(this, _this);

        return item.id;
      }.bind(this),
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }, function (item) {
      var _this2 = this;

      _newArrowCheck(this, _this);

      return function (props) {
        _newArrowCheck(this, _this2);

        return _react.default.createElement(_GridListItem.default, {
          key: item.id,
          title: item.title,
          caption: item.caption,
          thumbnailSrc: item.thumbnailSrc,
          thumbnailAlt: item.thumbnailAlt,
          thumbnailSelected: item.thumbnailSelected,
          style: props,
          xs: 12,
          sm: 6,
          md: 4,
          onItemClick: onItemClick
        });
      }.bind(this);
    }.bind(this))) : children);
  }

}

exports.default = GridList;

_defineProperty(GridList, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
});