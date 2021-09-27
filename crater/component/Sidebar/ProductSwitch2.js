"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProductSwitch2(props) {
  const {
    title,
    children,
    mini
  } = props,
        rest = _objectWithoutProperties(props, ["title", "children", "mini"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(_SidebarModule.default.productSwitch2)
  }, rest), _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.title, {
      [_SidebarModule.default.collapsed]: mini
    })
  }, _react.default.createElement("span", {
    className: "h4"
  }, title)), _react.default.createElement("div", {
    className: (0, _classnames.default)(_SidebarModule.default.content)
  }, children));
}

var _default = ProductSwitch2;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1NpZGViYXIvUHJvZHVjdFN3aXRjaDIuanMiXSwibmFtZXMiOlsiUHJvZHVjdFN3aXRjaDIiLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJtaW5pIiwicmVzdCIsInN0eWxlcyIsInByb2R1Y3RTd2l0Y2gyIiwiY29sbGFwc2VkIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsUUFBTTtBQUFFQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBLFFBQVQ7QUFBbUJDLElBQUFBO0FBQW5CLE1BQXFDSCxLQUEzQztBQUFBLFFBQWtDSSxJQUFsQyw0QkFBMkNKLEtBQTNDOztBQUNBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0ssdUJBQU9DLGNBQVY7QUFBaEIsS0FBK0NGLElBQS9DLEdBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0MsdUJBQU9KLEtBQVYsRUFBaUI7QUFBRSxPQUFDSSx1QkFBT0UsU0FBUixHQUFvQko7QUFBdEIsS0FBakI7QUFBaEIsS0FDRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQXNCRixLQUF0QixDQURGLENBREYsRUFJRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHSSx1QkFBT0csT0FBVjtBQUFoQixLQUFxQ04sUUFBckMsQ0FKRixDQURGO0FBUUQ7O2VBRWNILGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGViYXIubW9kdWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBQcm9kdWN0U3dpdGNoMihwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiwgbWluaSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5wcm9kdWN0U3dpdGNoMil9IHsuLi5yZXN0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudGl0bGUsIHsgW3N0eWxlcy5jb2xsYXBzZWRdOiBtaW5pIH0pfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDRcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRlbnQpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTd2l0Y2gyO1xuIl19