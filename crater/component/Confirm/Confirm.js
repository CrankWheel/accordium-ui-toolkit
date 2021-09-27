"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ConfirmModule = _interopRequireDefault(require("./Confirm.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const Confirm = function Confirm(_ref) {
  _newArrowCheck(this, _this);

  let {
    containerClassName,
    title,
    content,
    footer
  } = _ref,
      other = _objectWithoutProperties(_ref, ["containerClassName", "title", "content", "footer"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(containerClassName, _ConfirmModule.default.confirmContainer)
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)('h4', _ConfirmModule.default.title)
  }, title), _react.default.createElement("div", {
    className: _ConfirmModule.default.content
  }, content), _react.default.createElement("div", {
    className: _ConfirmModule.default.footer
  }, footer));
}.bind(void 0);

Confirm.propTypes = {
  containerClassName: _propTypes.default.string,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  footer: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node])
};
Confirm.defaultProps = {
  containerClassName: '',
  title: '',
  content: '',
  footer: ''
};
var _default = Confirm;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NvbmZpcm0vQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJDb25maXJtIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwidGl0bGUiLCJjb250ZW50IiwiZm9vdGVyIiwib3RoZXIiLCJzdHlsZXMiLCJjb25maXJtQ29udGFpbmVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsdUJBQThEO0FBQUE7O0FBQUEsTUFBN0Q7QUFBRUMsSUFBQUEsa0JBQUY7QUFBc0JDLElBQUFBLEtBQXRCO0FBQTZCQyxJQUFBQSxPQUE3QjtBQUFzQ0MsSUFBQUE7QUFBdEMsR0FBNkQ7QUFBQSxNQUFaQyxLQUFZOztBQUM1RSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUdKLGtCQUFILEVBQXVCSyx1QkFBT0MsZ0JBQTlCO0FBQWhCLEtBQXFFRixLQUFyRSxHQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUseUJBQUcsSUFBSCxFQUFTQyx1QkFBT0osS0FBaEI7QUFBaEIsS0FBeUNBLEtBQXpDLENBREYsRUFFRTtBQUFLLElBQUEsU0FBUyxFQUFFSSx1QkFBT0g7QUFBdkIsS0FBaUNBLE9BQWpDLENBRkYsRUFHRTtBQUFLLElBQUEsU0FBUyxFQUFFRyx1QkFBT0Y7QUFBdkIsS0FBZ0NBLE1BQWhDLENBSEYsQ0FERjtBQU9ELENBUlksYUFBYjs7QUFVQUosT0FBTyxDQUFDUSxTQUFSLEdBQW9CO0FBQ2xCUCxFQUFBQSxrQkFBa0IsRUFBRVEsbUJBQVVDLE1BRFo7QUFFbEJSLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVRyxPQUE3QixFQUFzQ0gsbUJBQVVJLElBQWhELENBQXBCLENBRlc7QUFHbEJWLEVBQUFBLE9BQU8sRUFBRU0sbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVRyxPQUE3QixFQUFzQ0gsbUJBQVVJLElBQWhELENBQXBCLENBSFM7QUFJbEJULEVBQUFBLE1BQU0sRUFBRUssbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVRyxPQUE3QixFQUFzQ0gsbUJBQVVJLElBQWhELENBQXBCO0FBSlUsQ0FBcEI7QUFPQWIsT0FBTyxDQUFDYyxZQUFSLEdBQXVCO0FBQ3JCYixFQUFBQSxrQkFBa0IsRUFBRSxFQURDO0FBRXJCQyxFQUFBQSxLQUFLLEVBQUUsRUFGYztBQUdyQkMsRUFBQUEsT0FBTyxFQUFFLEVBSFk7QUFJckJDLEVBQUFBLE1BQU0sRUFBRTtBQUphLENBQXZCO2VBT2VKLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db25maXJtLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ29uZmlybSA9ICh7IGNvbnRhaW5lckNsYXNzTmFtZSwgdGl0bGUsIGNvbnRlbnQsIGZvb3RlciwgLi4ub3RoZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjb250YWluZXJDbGFzc05hbWUsIHN0eWxlcy5jb25maXJtQ29udGFpbmVyKX0gey4uLm90aGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaDQnLCBzdHlsZXMudGl0bGUpfT57dGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pntjb250ZW50fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9Pntmb290ZXJ9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db25maXJtLnByb3BUeXBlcyA9IHtcbiAgY29udGFpbmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5ub2RlXSksXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBmb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxufTtcblxuQ29uZmlybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lckNsYXNzTmFtZTogJycsXG4gIHRpdGxlOiAnJyxcbiAgY29udGVudDogJycsXG4gIGZvb3RlcjogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtO1xuIl19