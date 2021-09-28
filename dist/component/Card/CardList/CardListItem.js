"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CardListItem extends _react.Component {
  render() {
    const {
      className,
      style,
      thumbnail,
      title,
      caption,
      extra
    } = this.props;
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('clearfix accordium card-list item p2', className),
      style: style
    }, thumbnail && _react.default.createElement("div", {
      className: "card-list-thumbnail"
    }, thumbnail), thumbnail && _react.default.createElement("div", {
      className: "card-list-separator"
    }), _react.default.createElement("div", {
      className: "card-list-item-description"
    }, title && _react.default.createElement("div", {
      className: "card-list-item-title"
    }, title), caption && _react.default.createElement("div", {
      className: "card-list-item-caption"
    }, caption)), _react.default.createElement("div", {
      className: "card-list-item-extra"
    }, extra));
  }

}

exports.default = CardListItem;