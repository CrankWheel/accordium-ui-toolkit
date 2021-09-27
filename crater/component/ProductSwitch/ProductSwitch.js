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

var _Button = require("../Button");

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

    return _react.default.createElement(_Button.Button, {
      key: (0, _lodash.default)(name),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1Byb2R1Y3RTd2l0Y2gvUHJvZHVjdFN3aXRjaC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0U3dpdGNoIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInByb2R1Y3RzIiwicmVzdCIsInN0eWxlcyIsImJhciIsInByb2R1Y3RTd2l0Y2hlcyIsIm1hcCIsIm5hbWUiLCJhY3RpdmUiLCJpY29uIiwiaHJlZiIsInBDbGFzc05hbWUiLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJvYmplY3RPZiIsIm9uZU9mVHlwZSIsImJvb2wiLCJub2RlIiwiZWxlbWVudCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUMzQyxRQUFNO0FBQUVDLElBQUFBLFNBQUY7QUFBYUMsSUFBQUEsS0FBYjtBQUFvQkMsSUFBQUE7QUFBcEIsTUFBMENILEtBQWhEO0FBQUEsUUFBdUNJLElBQXZDLDRCQUFnREosS0FBaEQ7O0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHQyxTQUFILEVBQWNJLDZCQUFPQyxHQUFyQixDQUFoQjtBQUEyQyxJQUFBLEtBQUssRUFBRUo7QUFBbEQsS0FBNkRFLElBQTdELEdBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUMsNkJBQU9FO0FBQXZCLEtBQ0dKLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUM7QUFBRUMsSUFBQUEsSUFBRjtBQUFRQyxJQUFBQSxNQUFSO0FBQWdCQyxJQUFBQSxJQUFoQjtBQUFzQkMsSUFBQUEsSUFBdEI7QUFBNEJYLElBQUFBLFNBQVMsRUFBRVk7QUFBdkMsR0FBRCxFQUFzREMsS0FBdEQ7QUFBQTs7QUFBQSxXQUNaLDZCQUFDLGNBQUQ7QUFDRSxNQUFBLEdBQUcsRUFBRSxxQkFBU0wsSUFBVCxDQURQO0FBRUUsTUFBQSxJQUFJLEVBQUVFLElBRlI7QUFHRSxNQUFBLFNBQVMsRUFBRSx5QkFBR04sNkJBQVEsVUFBU1MsS0FBSyxHQUFHLENBQUUsRUFBM0IsQ0FBSCxFQUFrQztBQUFFLFNBQUNULDZCQUFPSyxNQUFSLEdBQWlCQTtBQUFuQixPQUFsQyxFQUErREcsVUFBL0QsQ0FIYjtBQUlFLE1BQUEsSUFBSSxFQUFFRDtBQUpSLE9BTUdILElBTkgsQ0FEWTtBQUFBLEdBQWIsWUFESCxDQURGLENBREY7QUFnQkQ7O0FBRURWLGFBQWEsQ0FBQ2dCLFlBQWQsR0FBNkI7QUFBRVosRUFBQUEsUUFBUSxFQUFFO0FBQVosQ0FBN0I7QUFFQUosYUFBYSxDQUFDaUIsU0FBZCxHQUEwQjtBQUN4QmYsRUFBQUEsU0FBUyxFQUFFZ0IsbUJBQVVDLE1BREc7QUFFeEJmLEVBQUFBLFFBQVEsRUFBRWMsbUJBQVVFLE9BQVYsQ0FDUkYsbUJBQVVHLFFBQVYsQ0FBbUJILG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVSyxJQUFYLEVBQWlCTCxtQkFBVUMsTUFBM0IsRUFBbUNELG1CQUFVTSxJQUE3QyxFQUFtRE4sbUJBQVVPLE9BQTdELENBQXBCLENBQW5CLENBRFEsQ0FGYztBQUt4QnRCLEVBQUFBLEtBQUssRUFBRWUsbUJBQVVHLFFBQVYsQ0FBbUJILG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVVEsTUFBN0IsQ0FBcEIsQ0FBbkI7QUFMaUIsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gudW5pcXVlaWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Byb2R1Y3RTd2l0Y2gubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFN3aXRjaChwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIHByb2R1Y3RzLCAuLi5yZXN0IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHN0eWxlcy5iYXIpfSBzdHlsZT17c3R5bGV9IHsuLi5yZXN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFN3aXRjaGVzfT5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgoeyBuYW1lLCBhY3RpdmUsIGljb24sIGhyZWYsIGNsYXNzTmFtZTogcENsYXNzTmFtZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17dW5pcXVlSWQobmFtZSl9XG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXNbYHByb2R1Y3Qke2luZGV4ICsgMX1gXSwgeyBbc3R5bGVzLmFjdGl2ZV06IGFjdGl2ZSB9LCBwQ2xhc3NOYW1lKX1cbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblByb2R1Y3RTd2l0Y2guZGVmYXVsdFByb3BzID0geyBwcm9kdWN0czogW10gfTtcblxuUHJvZHVjdFN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5lbGVtZW50XSkpXG4gICksXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKSxcbn07XG4iXX0=