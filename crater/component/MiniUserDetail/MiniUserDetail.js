"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MiniUserDetailModule = _interopRequireDefault(require("./MiniUserDetail.module.scss"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const MiniUserDetail = function MiniUserDetail(_ref) {
  var _this2 = this;

  _newArrowCheck(this, _this);

  let {
    className,
    avatar,
    keyWrapperClassName,
    valueWrapperClassName,
    name,
    value,
    avatarRight
  } = _ref,
      other = _objectWithoutProperties(_ref, ["className", "avatar", "keyWrapperClassName", "valueWrapperClassName", "name", "value", "avatarRight"]);

  const renderAvatar = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this2);

    if (avatarRight) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: (0, _classnames.default)(_MiniUserDetailModule.default.detailContainer, {
          [_MiniUserDetailModule.default.withAvatar]: avatar,
          [_MiniUserDetailModule.default.leftAvatar]: avatarRight
        })
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(keyWrapperClassName, _MiniUserDetailModule.default.name)
      }, name), _react.default.createElement("div", {
        className: (0, _classnames.default)(valueWrapperClassName, _MiniUserDetailModule.default.details)
      }, value)), avatar);
    }

    return _react.default.createElement(_react.default.Fragment, null, avatar, _react.default.createElement("div", {
      className: (0, _classnames.default)(_MiniUserDetailModule.default.detailContainer, {
        [_MiniUserDetailModule.default.withAvatar]: avatar
      })
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(keyWrapperClassName, _MiniUserDetailModule.default.name)
    }, name), _react.default.createElement("div", {
      className: (0, _classnames.default)(valueWrapperClassName, _MiniUserDetailModule.default.details)
    }, value)));
  }.bind(this), [avatar, avatarRight, keyWrapperClassName, name, value, valueWrapperClassName]);
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(className, _MiniUserDetailModule.default.miniUserDetail)
  }, other), renderAvatar);
}.bind(void 0);

MiniUserDetail.propTypes = {
  className: _propTypes.default.string,
  keyWrapperClassName: _propTypes.default.string,
  valueWrapperClassName: _propTypes.default.string,
  name: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.node]),
  avatarRight: _propTypes.default.bool
};
MiniUserDetail.defaultProps = {
  className: '',
  keyWrapperClassName: '',
  valueWrapperClassName: '',
  name: '',
  value: '',
  avatarRight: false
};
var _default = MiniUserDetail;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L01pbmlVc2VyRGV0YWlsL01pbmlVc2VyRGV0YWlsLmpzIl0sIm5hbWVzIjpbIk1pbmlVc2VyRGV0YWlsIiwiY2xhc3NOYW1lIiwiYXZhdGFyIiwia2V5V3JhcHBlckNsYXNzTmFtZSIsInZhbHVlV3JhcHBlckNsYXNzTmFtZSIsIm5hbWUiLCJ2YWx1ZSIsImF2YXRhclJpZ2h0Iiwib3RoZXIiLCJyZW5kZXJBdmF0YXIiLCJzdHlsZXMiLCJkZXRhaWxDb250YWluZXIiLCJ3aXRoQXZhdGFyIiwibGVmdEF2YXRhciIsImRldGFpbHMiLCJtaW5pVXNlckRldGFpbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJub2RlIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsOEJBQTJHO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUc7QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxNQUFiO0FBQXFCQyxJQUFBQSxtQkFBckI7QUFBMENDLElBQUFBLHFCQUExQztBQUFpRUMsSUFBQUEsSUFBakU7QUFBdUVDLElBQUFBLEtBQXZFO0FBQThFQyxJQUFBQTtBQUE5RSxHQUEwRztBQUFBLE1BQVpDLEtBQVk7O0FBQ2hJLFFBQU1DLFlBQVksR0FBRyxvQkFBUSxZQUFNO0FBQUE7O0FBQ2pDLFFBQUlGLFdBQUosRUFBaUI7QUFDZixhQUNFLDREQUNFO0FBQUssUUFBQSxTQUFTLEVBQUUseUJBQUdHLDhCQUFPQyxlQUFWLEVBQTJCO0FBQUUsV0FBQ0QsOEJBQU9FLFVBQVIsR0FBcUJWLE1BQXZCO0FBQStCLFdBQUNRLDhCQUFPRyxVQUFSLEdBQXFCTjtBQUFwRCxTQUEzQjtBQUFoQixTQUNFO0FBQUssUUFBQSxTQUFTLEVBQUUseUJBQUdKLG1CQUFILEVBQXdCTyw4QkFBT0wsSUFBL0I7QUFBaEIsU0FBdURBLElBQXZELENBREYsRUFFRTtBQUFLLFFBQUEsU0FBUyxFQUFFLHlCQUFHRCxxQkFBSCxFQUEwQk0sOEJBQU9JLE9BQWpDO0FBQWhCLFNBQTREUixLQUE1RCxDQUZGLENBREYsRUFLR0osTUFMSCxDQURGO0FBU0Q7O0FBQ0QsV0FDRSw0REFDR0EsTUFESCxFQUVFO0FBQUssTUFBQSxTQUFTLEVBQUUseUJBQUdRLDhCQUFPQyxlQUFWLEVBQTJCO0FBQUUsU0FBQ0QsOEJBQU9FLFVBQVIsR0FBcUJWO0FBQXZCLE9BQTNCO0FBQWhCLE9BQ0U7QUFBSyxNQUFBLFNBQVMsRUFBRSx5QkFBR0MsbUJBQUgsRUFBd0JPLDhCQUFPTCxJQUEvQjtBQUFoQixPQUF1REEsSUFBdkQsQ0FERixFQUVFO0FBQUssTUFBQSxTQUFTLEVBQUUseUJBQUdELHFCQUFILEVBQTBCTSw4QkFBT0ksT0FBakM7QUFBaEIsT0FBNERSLEtBQTVELENBRkYsQ0FGRixDQURGO0FBU0QsR0FyQm9CLGFBcUJsQixDQUFDSixNQUFELEVBQVNLLFdBQVQsRUFBc0JKLG1CQUF0QixFQUEyQ0UsSUFBM0MsRUFBaURDLEtBQWpELEVBQXdERixxQkFBeEQsQ0FyQmtCLENBQXJCO0FBdUJBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSx5QkFBR0gsU0FBSCxFQUFjUyw4QkFBT0ssY0FBckI7QUFBaEIsS0FBMERQLEtBQTFELEdBQ0dDLFlBREgsQ0FERjtBQUtELENBN0JtQixhQUFwQjs7QUErQkFULGNBQWMsQ0FBQ2dCLFNBQWYsR0FBMkI7QUFDekJmLEVBQUFBLFNBQVMsRUFBRWdCLG1CQUFVQyxNQURJO0FBRXpCZixFQUFBQSxtQkFBbUIsRUFBRWMsbUJBQVVDLE1BRk47QUFHekJkLEVBQUFBLHFCQUFxQixFQUFFYSxtQkFBVUMsTUFIUjtBQUl6QmIsRUFBQUEsSUFBSSxFQUFFWSxtQkFBVUUsU0FBVixDQUFvQixDQUFDRixtQkFBVUMsTUFBWCxFQUFtQkQsbUJBQVVHLE9BQTdCLEVBQXNDSCxtQkFBVUksSUFBaEQsQ0FBcEIsQ0FKbUI7QUFLekJmLEVBQUFBLEtBQUssRUFBRVcsbUJBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0YsbUJBQVVDLE1BQVgsRUFBbUJELG1CQUFVRyxPQUE3QixFQUFzQ0gsbUJBQVVJLElBQWhELENBQXBCLENBTGtCO0FBTXpCZCxFQUFBQSxXQUFXLEVBQUVVLG1CQUFVSztBQU5FLENBQTNCO0FBU0F0QixjQUFjLENBQUN1QixZQUFmLEdBQThCO0FBQzVCdEIsRUFBQUEsU0FBUyxFQUFFLEVBRGlCO0FBRTVCRSxFQUFBQSxtQkFBbUIsRUFBRSxFQUZPO0FBRzVCQyxFQUFBQSxxQkFBcUIsRUFBRSxFQUhLO0FBSTVCQyxFQUFBQSxJQUFJLEVBQUUsRUFKc0I7QUFLNUJDLEVBQUFBLEtBQUssRUFBRSxFQUxxQjtBQU01QkMsRUFBQUEsV0FBVyxFQUFFO0FBTmUsQ0FBOUI7ZUFTZVAsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NaW5pVXNlckRldGFpbC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE1pbmlVc2VyRGV0YWlsID0gKHsgY2xhc3NOYW1lLCBhdmF0YXIsIGtleVdyYXBwZXJDbGFzc05hbWUsIHZhbHVlV3JhcHBlckNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIGF2YXRhclJpZ2h0LCAuLi5vdGhlciB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckF2YXRhciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChhdmF0YXJSaWdodCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmRldGFpbENvbnRhaW5lciwgeyBbc3R5bGVzLndpdGhBdmF0YXJdOiBhdmF0YXIsIFtzdHlsZXMubGVmdEF2YXRhcl06IGF2YXRhclJpZ2h0IH0pfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChrZXlXcmFwcGVyQ2xhc3NOYW1lLCBzdHlsZXMubmFtZSl9PntuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHZhbHVlV3JhcHBlckNsYXNzTmFtZSwgc3R5bGVzLmRldGFpbHMpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2F2YXRhcn1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2F2YXRhcn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5kZXRhaWxDb250YWluZXIsIHsgW3N0eWxlcy53aXRoQXZhdGFyXTogYXZhdGFyIH0pfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goa2V5V3JhcHBlckNsYXNzTmFtZSwgc3R5bGVzLm5hbWUpfT57bmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3godmFsdWVXcmFwcGVyQ2xhc3NOYW1lLCBzdHlsZXMuZGV0YWlscyl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9LCBbYXZhdGFyLCBhdmF0YXJSaWdodCwga2V5V3JhcHBlckNsYXNzTmFtZSwgbmFtZSwgdmFsdWUsIHZhbHVlV3JhcHBlckNsYXNzTmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLm1pbmlVc2VyRGV0YWlsKX0gey4uLm90aGVyfT5cbiAgICAgIHtyZW5kZXJBdmF0YXJ9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5NaW5pVXNlckRldGFpbC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5V3JhcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWVXcmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLm5vZGVdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMubm9kZV0pLFxuICBhdmF0YXJSaWdodDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5NaW5pVXNlckRldGFpbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGtleVdyYXBwZXJDbGFzc05hbWU6ICcnLFxuICB2YWx1ZVdyYXBwZXJDbGFzc05hbWU6ICcnLFxuICBuYW1lOiAnJyxcbiAgdmFsdWU6ICcnLFxuICBhdmF0YXJSaWdodDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW5pVXNlckRldGFpbDtcbiJdfQ==