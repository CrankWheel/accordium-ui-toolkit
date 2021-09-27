"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MiniTrigger;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

var _Button = require("../Button");

var _Iconography = require("../Iconography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MiniTrigger(props) {
  const {
    className,
    mini,
    toggle
  } = props,
        rest = _objectWithoutProperties(props, ["className", "mini", "toggle"]);

  return _react.default.createElement(_Button.Button, _extends({
    iconOnly: true,
    className: (0, _classnames.default)(className, _SidebarModule.default.miniTrigger, {
      [_SidebarModule.default.miniSidebar]: mini
    })
  }, rest, {
    onClick: toggle,
    icon: _react.default.createElement(_Iconography.Icon, {
      src: "expand",
      verticalAlign: "middle",
      className: _SidebarModule.default.icon
    }),
    "aria-label": mini ? 'Expand' : 'Collapse'
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1NpZGViYXIvTWluaVRyaWdnZXIuanMiXSwibmFtZXMiOlsiTWluaVRyaWdnZXIiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm1pbmkiLCJ0b2dnbGUiLCJyZXN0Iiwic3R5bGVzIiwibWluaVRyaWdnZXIiLCJtaW5pU2lkZWJhciIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3pDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxJQUFiO0FBQW1CQyxJQUFBQTtBQUFuQixNQUF1Q0gsS0FBN0M7QUFBQSxRQUFvQ0ksSUFBcEMsNEJBQTZDSixLQUE3Qzs7QUFDQSxTQUNFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLFFBQVEsTUFEVjtBQUVFLElBQUEsU0FBUyxFQUFFLHlCQUFHQyxTQUFILEVBQWNJLHVCQUFPQyxXQUFyQixFQUFrQztBQUFFLE9BQUNELHVCQUFPRSxXQUFSLEdBQXNCTDtBQUF4QixLQUFsQztBQUZiLEtBR01FLElBSE47QUFJRSxJQUFBLE9BQU8sRUFBRUQsTUFKWDtBQUtFLElBQUEsSUFBSSxFQUFFLDZCQUFDLGlCQUFEO0FBQU0sTUFBQSxHQUFHLEVBQUMsUUFBVjtBQUFtQixNQUFBLGFBQWEsRUFBQyxRQUFqQztBQUEwQyxNQUFBLFNBQVMsRUFBRUUsdUJBQU9HO0FBQTVELE1BTFI7QUFNRSxrQkFBWU4sSUFBSSxHQUFHLFFBQUgsR0FBYztBQU5oQyxLQURGO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGViYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9JY29ub2dyYXBoeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pbmlUcmlnZ2VyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBtaW5pLCB0b2dnbGUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGljb25Pbmx5XG4gICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLm1pbmlUcmlnZ2VyLCB7IFtzdHlsZXMubWluaVNpZGViYXJdOiBtaW5pIH0pfVxuICAgICAgey4uLnJlc3R9XG4gICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICBpY29uPXs8SWNvbiBzcmM9XCJleHBhbmRcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz59XG4gICAgICBhcmlhLWxhYmVsPXttaW5pID8gJ0V4cGFuZCcgOiAnQ29sbGFwc2UnfVxuICAgIC8+XG4gICk7XG59XG4iXX0=