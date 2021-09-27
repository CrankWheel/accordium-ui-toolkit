"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioContext = require("./RadioContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RadioGroup extends _react.default.PureComponent {
  render() {
    const {
      selectedValue,
      name,
      handleChange
    } = this.props;
    return _react.default.createElement(_RadioContext.RadioContext.Provider, {
      value: {
        selectedValue,
        name,
        handleChange
      }
    }, this.props.children);
  }

}

exports.default = RadioGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1JhZGlvR3JvdXAvUmFkaW9Hcm91cC5qcyJdLCJuYW1lcyI6WyJSYWRpb0dyb3VwIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwic2VsZWN0ZWRWYWx1ZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQyxlQUFNQyxhQUEvQixDQUE2QztBQUMxREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxNQUFBQSxhQUFGO0FBQWlCQyxNQUFBQSxJQUFqQjtBQUF1QkMsTUFBQUE7QUFBdkIsUUFBd0MsS0FBS0MsS0FBbkQ7QUFDQSxXQUFPLDZCQUFDLDBCQUFELENBQWMsUUFBZDtBQUF1QixNQUFBLEtBQUssRUFBRTtBQUFFSCxRQUFBQSxhQUFGO0FBQWlCQyxRQUFBQSxJQUFqQjtBQUF1QkMsUUFBQUE7QUFBdkI7QUFBOUIsT0FBc0UsS0FBS0MsS0FBTCxDQUFXQyxRQUFqRixDQUFQO0FBQ0Q7O0FBSnlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJhZGlvQ29udGV4dCB9IGZyb20gJy4vUmFkaW9Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZFZhbHVlLCBuYW1lLCBoYW5kbGVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxSYWRpb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2VsZWN0ZWRWYWx1ZSwgbmFtZSwgaGFuZGxlQ2hhbmdlIH19Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvUmFkaW9Db250ZXh0LlByb3ZpZGVyPjtcbiAgfVxufVxuIl19