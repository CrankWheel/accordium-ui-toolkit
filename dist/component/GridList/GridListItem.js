"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _index = _interopRequireDefault(require("../Card/Card/index"));

var _Image = _interopRequireDefault(require("../Image/Image"));

var _CardContent = _interopRequireDefault(require("../Card/Card/CardContent"));

var _CardContentHeader = _interopRequireDefault(require("../Card/Card/CardContentHeader"));

var _CardContentCaption = _interopRequireDefault(require("../Card/Card/CardContentCaption"));

var _Grid = _interopRequireDefault(require("../Layout/Grid"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GridListItem extends _react.Component {
  render() {
    const {
      className,
      style,
      thumbnailSrc,
      thumbnailAlt,
      thumbnailSelected,
      title,
      caption,
      xs,
      sm,
      md,
      lg,
      xl,
      onItemClick,
      thumbnailClassName,
      descClassName,
      thumbnailRatio
    } = this.props;
    const additionalProps = {};

    if (onItemClick) {
      additionalProps.onClick = onItemClick;
    }

    const styling = (0, _classNames.default)('grid-list-item p1', className);
    return _react.default.createElement(_Grid.default, {
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      className: styling,
      style: style
    }, _react.default.createElement(_index.default, _extends({
      className: "grid-list-item-card",
      tabIndex: 0
    }, additionalProps), _react.default.createElement("div", {
      className: (0, _classNames.default)('grid-list-item-card-thumbnail', thumbnailClassName, {
        'ratio-16-9': thumbnailRatio === '16:9',
        'ratio-4-3': thumbnailRatio === '4:3',
        'ratio-1-1': thumbnailRatio === '1:1',
        'thumbnail-selected': !!thumbnailSelected
      })
    }, thumbnailRatio ? _react.default.createElement("div", {
      className: "ratio-wrapper"
    }, _react.default.createElement(_Image.default, {
      src: thumbnailSrc,
      alt: thumbnailAlt || `image of ${title}`
    })) : _react.default.createElement(_Image.default, {
      src: thumbnailSrc,
      fluid: true,
      alt: thumbnailAlt || `image of ${title}`
    })), _react.default.createElement(_CardContent.default, {
      className: (0, _classNames.default)('grid-list-item-content', descClassName)
    }, _react.default.createElement(_CardContentHeader.default, {
      className: "text-2"
    }, title), _react.default.createElement(_CardContentCaption.default, {
      className: "text-1"
    }, caption))));
  }

}

exports.default = GridListItem;

_defineProperty(GridListItem, "propTypes", {
  caption: _propTypes.default.string,
  className: _propTypes.default.string,
  descClassName: _propTypes.default.string,
  lg: _propTypes.default.number,
  md: _propTypes.default.number,
  onItemClick: _propTypes.default.func,
  sm: _propTypes.default.number,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  thumbnailAlt: _propTypes.default.string,
  thumbnailClassName: _propTypes.default.string,
  thumbnailSelected: _propTypes.default.bool,
  thumbnailSrc: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  xl: _propTypes.default.number,
  xs: _propTypes.default.number
});

_defineProperty(GridListItem, "defaultProps", {
  caption: '',
  thumbnailSelected: false,
  xs: 12
});