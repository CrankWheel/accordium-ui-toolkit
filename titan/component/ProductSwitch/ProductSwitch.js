"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductSwitch;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

var _ProductSwitchModule = _interopRequireDefault(require("./ProductSwitch.module.scss"));

var _Button = _interopRequireDefault(require("../Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProductSwitch(props) {
  var _this = this;

  const {
    className,
    style,
    products
  } = props,
        rest = _objectWithoutProperties(props, ["className", "style", "products"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(className, _ProductSwitchModule.default.bar),
    style: style
  }, rest), _react.default.createElement("div", {
    className: _ProductSwitchModule.default.productSwitches
  }, products.map(function ({
    name,
    active,
    icon,
    href,
    className: pClassName
  }, index) {
    _newArrowCheck(this, _this);

    return _react.default.createElement(_Button.default, {
      key: (0, _lodash.default)(name),
      flat: true,
      icon: icon,
      className: (0, _classnames.default)(_ProductSwitchModule.default[`product${index + 1}`], {
        [_ProductSwitchModule.default.active]: active
      }, pClassName),
      href: href
    }, name);
  }.bind(this))));
}

ProductSwitch.defaultProps = {
  products: []
};
ProductSwitch.propTypes = {
  className: _propTypes.default.string,
  products: _propTypes.default.arrayOf(_propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.node, _propTypes.default.element]))),
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUHJvZHVjdFN3aXRjaC9Qcm9kdWN0U3dpdGNoLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTd2l0Y2giLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwicHJvZHVjdHMiLCJyZXN0Iiwic3R5bGVzIiwiYmFyIiwicHJvZHVjdFN3aXRjaGVzIiwibWFwIiwibmFtZSIsImFjdGl2ZSIsImljb24iLCJocmVmIiwicENsYXNzTmFtZSIsImluZGV4IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9iamVjdE9mIiwib25lT2ZUeXBlIiwiYm9vbCIsIm5vZGUiLCJlbGVtZW50IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQzNDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxLQUFiO0FBQW9CQyxJQUFBQTtBQUFwQixNQUEwQ0gsS0FBaEQ7QUFBQSxRQUF1Q0ksSUFBdkMsNEJBQWdESixLQUFoRDs7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdDLFNBQUgsRUFBY0ksNkJBQU9DLEdBQXJCLENBQWhCO0FBQTJDLElBQUEsS0FBSyxFQUFFSjtBQUFsRCxLQUE2REUsSUFBN0QsR0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFQyw2QkFBT0U7QUFBdkIsS0FDR0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQztBQUFFQyxJQUFBQSxJQUFGO0FBQVFDLElBQUFBLE1BQVI7QUFBZ0JDLElBQUFBLElBQWhCO0FBQXNCQyxJQUFBQSxJQUF0QjtBQUE0QlgsSUFBQUEsU0FBUyxFQUFFWTtBQUF2QyxHQUFELEVBQXNEQyxLQUF0RDtBQUFBOztBQUFBLFdBQ1osNkJBQUMsZUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFLHFCQUFTTCxJQUFULENBRFA7QUFFRSxNQUFBLElBQUksTUFGTjtBQUdFLE1BQUEsSUFBSSxFQUFFRSxJQUhSO0FBSUUsTUFBQSxTQUFTLEVBQUUseUJBQUdOLDZCQUFRLFVBQVNTLEtBQUssR0FBRyxDQUFFLEVBQTNCLENBQUgsRUFBa0M7QUFBRSxTQUFDVCw2QkFBT0ssTUFBUixHQUFpQkE7QUFBbkIsT0FBbEMsRUFBK0RHLFVBQS9ELENBSmI7QUFLRSxNQUFBLElBQUksRUFBRUQ7QUFMUixPQU9HSCxJQVBILENBRFk7QUFBQSxHQUFiLFlBREgsQ0FERixDQURGO0FBaUJEOztBQUVEVixhQUFhLENBQUNnQixZQUFkLEdBQTZCO0FBQUVaLEVBQUFBLFFBQVEsRUFBRTtBQUFaLENBQTdCO0FBRUFKLGFBQWEsQ0FBQ2lCLFNBQWQsR0FBMEI7QUFDeEJmLEVBQUFBLFNBQVMsRUFBRWdCLG1CQUFVQyxNQURHO0FBRXhCZixFQUFBQSxRQUFRLEVBQUVjLG1CQUFVRSxPQUFWLENBQ1JGLG1CQUFVRyxRQUFWLENBQW1CSCxtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUssSUFBWCxFQUFpQkwsbUJBQVVDLE1BQTNCLEVBQW1DRCxtQkFBVU0sSUFBN0MsRUFBbUROLG1CQUFVTyxPQUE3RCxDQUFwQixDQUFuQixDQURRLENBRmM7QUFLeEJ0QixFQUFBQSxLQUFLLEVBQUVlLG1CQUFVRyxRQUFWLENBQW1CSCxtQkFBVUksU0FBVixDQUFvQixDQUFDSixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVRLE1BQTdCLENBQXBCLENBQW5CO0FBTGlCLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnbG9kYXNoLnVuaXF1ZWlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9kdWN0U3dpdGNoLm1vZHVsZS5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RTd2l0Y2gocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBwcm9kdWN0cywgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMuYmFyKX0gc3R5bGU9e3N0eWxlfSB7Li4ucmVzdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RTd2l0Y2hlc30+XG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHsgbmFtZSwgYWN0aXZlLCBpY29uLCBocmVmLCBjbGFzc05hbWU6IHBDbGFzc05hbWUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBrZXk9e3VuaXF1ZUlkKG5hbWUpfVxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzW2Bwcm9kdWN0JHtpbmRleCArIDF9YF0sIHsgW3N0eWxlcy5hY3RpdmVdOiBhY3RpdmUgfSwgcENsYXNzTmFtZSl9XG4gICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Qcm9kdWN0U3dpdGNoLmRlZmF1bHRQcm9wcyA9IHsgcHJvZHVjdHM6IFtdIH07XG5cblByb2R1Y3RTd2l0Y2gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByb2R1Y3RzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZWxlbWVudF0pKVxuICApLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSksXG59O1xuIl19