"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _reactDom = require("react-dom");

var _handleRef = _interopRequireDefault(require("./handleRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RefFindNode extends _react.Component {
  componentDidMount() {
    const {
      innerRef
    } = this.props;
    (0, _handleRef.default)(innerRef, (0, _reactDom.findDOMNode)(this));
  }

  componentWillUnmount() {
    const {
      innerRef
    } = this.props;
    (0, _handleRef.default)(innerRef, null);
  }

  render() {
    const {
      children
    } = this.props;
    return children;
  }

}

exports.default = RefFindNode;

_defineProperty(RefFindNode, "propTypes", {
  children: _propTypes.default.element.isRequired,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUmVmL1JlZkZpbmROb2RlLmpzIl0sIm5hbWVzIjpbIlJlZkZpbmROb2RlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJpbm5lclJlZiIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFZSxNQUFNQSxXQUFOLFNBQTBCQyxnQkFBMUIsQ0FBb0M7QUFhakRDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFlLEtBQUtDLEtBQTFCO0FBRUEsNEJBQVVELFFBQVYsRUFBb0IsMkJBQVksSUFBWixDQUFwQjtBQUNEOztBQUVERSxFQUFBQSxvQkFBb0IsR0FBRztBQUNyQixVQUFNO0FBQUVGLE1BQUFBO0FBQUYsUUFBZSxLQUFLQyxLQUExQjtBQUNBLDRCQUFVRCxRQUFWLEVBQW9CLElBQXBCO0FBQ0Q7O0FBRURHLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFlLEtBQUtILEtBQTFCO0FBRUEsV0FBT0csUUFBUDtBQUNEOztBQTVCZ0Q7Ozs7Z0JBQTlCUCxXLGVBQ0E7QUFFakJPLEVBQUFBLFFBQVEsRUFBRUMsbUJBQVVDLE9BQVYsQ0FBa0JDLFVBRlg7QUFTakJQLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsbUJBQVVJLElBQVgsRUFBaUJKLG1CQUFVSyxNQUEzQixDQUFwQjtBQVRPLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGhhbmRsZVJlZiBmcm9tICcuL2hhbmRsZVJlZic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZkZpbmROb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBjb21wb25lbnQgd2lsbCBiZSBtb3VudGVkIG9yIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gUmVmZXJyZWQgbm9kZS5cbiAgICAgKi9cbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGlubmVyUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1maW5kLWRvbS1ub2RlXG4gICAgaGFuZGxlUmVmKGlubmVyUmVmLCBmaW5kRE9NTm9kZSh0aGlzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGlubmVyUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGhhbmRsZVJlZihpbm5lclJlZiwgbnVsbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIl19