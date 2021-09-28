"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../../etc/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class ActionCard extends _react.PureComponent {
  render() {
    const {
      className,
      style,
      onClick,
      thumbnail,
      title,
      caption
    } = this.props;
    return _react.default.createElement("div", {
      role: "button",
      className: (0, _classNames.default)('clearfix accordium card action-card p1', className),
      style: style,
      onClick: onClick,
      tabIndex: 0
    }, _react.default.createElement("div", {
      className: "card-thumbnail"
    }, thumbnail), _react.default.createElement("div", {
      className: "card-description"
    }, title && _react.default.createElement("div", {
      className: "card-title"
    }, title), caption && _react.default.createElement("div", {
      className: "card-caption"
    }, caption)));
  }

}

exports.default = ActionCard;