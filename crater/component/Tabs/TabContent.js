"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TabContent extends _react.Component {
  render() {
    const className = (0, _classnames.default)(_TabsModule.default.tab, {
      [_TabsModule.default.active]: this.props.active
    }, this.props.className);
    return _react.default.createElement("section", {
      className: className,
      role: "tabpanel",
      "aria-expanded": this.props.hidden
    }, this.props.children);
  }

}

_defineProperty(TabContent, "propTypes", {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  hidden: _propTypes.default.bool
});

_defineProperty(TabContent, "defaultProps", {
  active: false,
  className: '',
  hidden: true
});

var _default = TabContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1RhYnMvVGFiQ29udGVudC5qcyJdLCJuYW1lcyI6WyJUYWJDb250ZW50IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwidGFiIiwiYWN0aXZlIiwicHJvcHMiLCJoaWRkZW4iLCJjaGlsZHJlbiIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQyxnQkFBekIsQ0FBbUM7QUFlakNDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU1DLFNBQVMsR0FBRyx5QkFDaEJDLG9CQUFPQyxHQURTLEVBRWhCO0FBQ0UsT0FBQ0Qsb0JBQU9FLE1BQVIsR0FBaUIsS0FBS0MsS0FBTCxDQUFXRDtBQUQ5QixLQUZnQixFQUtoQixLQUFLQyxLQUFMLENBQVdKLFNBTEssQ0FBbEI7QUFRQSxXQUNFO0FBQVMsTUFBQSxTQUFTLEVBQUVBLFNBQXBCO0FBQStCLE1BQUEsSUFBSSxFQUFDLFVBQXBDO0FBQStDLHVCQUFlLEtBQUtJLEtBQUwsQ0FBV0M7QUFBekUsT0FDRyxLQUFLRCxLQUFMLENBQVdFLFFBRGQsQ0FERjtBQUtEOztBQTdCZ0M7O2dCQUE3QlQsVSxlQUVlO0FBQ2pCTSxFQUFBQSxNQUFNLEVBQUVJLG1CQUFVQyxJQUREO0FBRWpCRixFQUFBQSxRQUFRLEVBQUVDLG1CQUFVRSxJQUZIO0FBR2pCVCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRyxNQUhKO0FBSWpCTCxFQUFBQSxNQUFNLEVBQUVFLG1CQUFVQztBQUpELEM7O2dCQUZmWCxVLGtCQVNrQjtBQUNwQk0sRUFBQUEsTUFBTSxFQUFFLEtBRFk7QUFFcEJILEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCSyxFQUFBQSxNQUFNLEVBQUU7QUFIWSxDOztlQXVCVFIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFicy5tb2R1bGUuc2Nzcyc7XG5cbmNsYXNzIFRhYkNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudGFiLFxuICAgICAge1xuICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IHRoaXMucHJvcHMuYWN0aXZlLFxuICAgICAgfSxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1leHBhbmRlZD17dGhpcy5wcm9wcy5oaWRkZW59PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRlbnQ7XG4iXX0=