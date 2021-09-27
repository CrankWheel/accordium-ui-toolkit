"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _renderprops = require("react-spring/renderprops");

var _classNames = _interopRequireDefault(require("../../etc/classNames"));

var _constant = require("../../etc/constant");

var noScroll = _interopRequireWildcard(require("../../etc/noScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Modal extends _react.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {};

    super(...args);
    _this = this;

    _defineProperty(this, "onOverlayClick", function (event) {
      _newArrowCheck(this, _arrowCheckId);

      if (event.pageX > event.target.clientWidth || event.pageY > event.target.clientHeight) return;

      _this.exit();
    }.bind(_arrowCheckId));

    _defineProperty(this, "checkDocumentKeyDown", function (event) {
      _newArrowCheck(this, _arrowCheckId2);

      if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        _this.exit();
      }
    }.bind(_arrowCheckId2));

    _defineProperty(this, "exit", function () {
      _newArrowCheck(this, _arrowCheckId3);

      const {
        onExit
      } = _this.props;
      if (onExit) onExit();
    }.bind(_arrowCheckId3));
  }

  componentDidMount() {
    const {
      show,
      onEnter,
      escapeExits,
      scrollDisabled,
      parent
    } = this.props;

    if (show) {
      const el = parent;
      if (el.classList) el.classList.add('blur');else el.className += ' blur';
    }

    if (onEnter) {
      onEnter();
    }

    if (escapeExits) {
      document.addEventListener('keydown', this.checkDocumentKeyDown);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      if (this.props.show) {
        const el = this.props.parent;
        if (el.classList) el.classList.add('blur');else el.className += ' blur';
        noScroll.on();
      }
    } else if (prevProps.show && !this.props.show) {
      const el = this.props.parent;
      if (el.classList) el.classList.remove('blur');else el.className = el.className.replace(new RegExp(`(^|\\b)${'blur'.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
      noScroll.off();
    }
  }

  componentWillUnmount() {
    const el = this.props.parent;
    if (el.classList) el.classList.remove('blur');else el.className = el.className.replace(new RegExp(`(^|\\b)${'blur'.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    noScroll.off();
    document.removeEventListener('keydown', this.checkDocumentKeyDown);
  }

  render() {
    var _this2 = this;

    const {
      className,
      style,
      overlayClassName,
      overlayStyle,
      children,
      size,
      enableCloseButton,
      scrolling,
      animationConfig,
      parent
    } = this.props;
    return _react.default.createElement(_renderprops.Transition, {
      items: this.props.show,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      config: animationConfig
    }, function (show) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      return show && function (props) {
        _newArrowCheck(this, _this3);

        return _reactDom.default.createPortal(_react.default.createElement(_renderprops.animated.div, {
          className: (0, _classNames.default)('accordium modal-wrapper', {
            scrolling
          }),
          style: props
        }, _react.default.createElement("div", {
          className: (0, _classNames.default)('accordium modal-overlay', overlayClassName),
          style: overlayStyle,
          onClick: this.onOverlayClick
        }), _react.default.createElement("div", {
          className: (0, _classNames.default)('accordium modal small', className, {
            xs: size === _constant.sizing.XS,
            sm: size === _constant.sizing.SM,
            md: size === _constant.sizing.MD,
            lg: size === _constant.sizing.LG || size === _constant.sizing.XL
          }),
          style: style
        }, enableCloseButton && _react.default.createElement("button", {
          type: "button",
          className: "modal-close",
          onClick: this.exit
        }, "\xD7"), children)), parent);
      }.bind(this);
    }.bind(this));
  }

}

exports.default = Modal;

_defineProperty(Modal, "defaultProps", {
  overlayProps: {},
  dialogId: 'react-aria-modal-dialog',
  overlayClickExits: true,
  escapeExits: true,
  scrollDisabled: true,
  show: false,
  size: _constant.sizing.MD,
  enableCloseButton: false,
  scrolling: false,
  animationConfig: {
    duration: 100
  },
  parent: document.body
});