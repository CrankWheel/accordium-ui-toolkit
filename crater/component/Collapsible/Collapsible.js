"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this4 = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Collapsible extends _react.Component {
  constructor(props) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {};

    super(props);
    _this = this;

    _defineProperty(this, "continueOpenCollapsible", function () {
      _newArrowCheck(this, _arrowCheckId);

      const {
        easing,
        transitionTime
      } = _this.props;

      _this.setState({
        height: _this.innerRef.current.scrollHeight,
        transition: `height ${transitionTime}ms ${easing}`,
        isClosed: false,
        hasBeenOpened: true,
        inTransition: true,
        shouldOpenOnNextCycle: false
      });
    }.bind(_arrowCheckId));

    _defineProperty(this, "handleTriggerClick", function (event) {
      _newArrowCheck(this, _arrowCheckId2);

      const {
        onClosing,
        triggerDisabled,
        onOpening,
        handleTriggerClick: handleTriggerClick1,
        accordionPosition
      } = _this.props;

      if (triggerDisabled) {
        return;
      }

      event.preventDefault();

      if (handleTriggerClick1) {
        handleTriggerClick1(accordionPosition);
      } else {
        const {
          isClosed
        } = _this.state;

        if (isClosed === true) {
          _this.openCollapsible();

          onOpening();
        } else {
          _this.closeCollapsible();

          onClosing();
        }
      }
    }.bind(_arrowCheckId2));

    _defineProperty(this, "handleTransitionEnd", function () {
      _newArrowCheck(this, _arrowCheckId3);

      const {
        isClosed
      } = _this.state;
      const {
        onOpen,
        onClose,
        overflowWhenOpen
      } = _this.props;

      if (!isClosed) {
        _this.setState({
          height: 'auto',
          overflow: overflowWhenOpen,
          inTransition: false
        });

        onOpen();
      } else {
        _this.setState({
          inTransition: false
        });

        onClose();
      }
    }.bind(_arrowCheckId3));

    this.timeout = undefined;
    this.innerRef = _react.default.createRef();

    if (props.open) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false
      };
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    const {
      shouldOpenOnNextCycle,
      shouldSwitchAutoOnNextCycle
    } = this.state;

    if (shouldOpenOnNextCycle) {
      this.continueOpenCollapsible();
    }

    if (prevState.height === 'auto' && shouldSwitchAutoOnNextCycle === true) {
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(function () {
        _newArrowCheck(this, _this2);

        this.setState({
          height: 0,
          overflow: 'hidden',
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false
        });
      }.bind(this), 50);
    }

    const {
      onClosing,
      open,
      onOpening
    } = this.props;

    if (prevProps.open !== open) {
      if (open === true) {
        this.openCollapsible();
        onOpening();
      } else {
        this.closeCollapsible();
        onClosing();
      }
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  closeCollapsible() {
    const {
      easing,
      transitionTime,
      transitionCloseTime
    } = this.props;
    this.setState({
      shouldSwitchAutoOnNextCycle: true,
      height: this.innerRef.current.scrollHeight,
      transition: `height ${transitionCloseTime ? transitionCloseTime : transitionTime}ms ${easing}`,
      inTransition: true
    });
  }

  openCollapsible() {
    this.setState({
      inTransition: true,
      shouldOpenOnNextCycle: true
    });
  }

  renderNonClickableTriggerElement() {
    const {
      triggerSibling,
      classParentString
    } = this.props;

    if (triggerSibling && typeof triggerSibling === 'string') {
      return _react.default.createElement("span", {
        className: `${classParentString}__trigger-sibling`
      }, triggerSibling);
    } else if (triggerSibling) {
      return _react.default.createElement(this.props.triggerSibling, null);
    }

    return null;
  }

  render() {
    var _this3 = this;

    const {
      inTransition,
      height,
      isClosed,
      transition,
      overflow,
      hasBeenOpened
    } = this.state;
    const dropdownStyle = {
      height,
      WebkitTransition: transition,
      msTransition: transition,
      transition,
      overflow
    };
    const toggleClassName = isClosed ? 'is-closed' : 'is-open';
    const {
      lazyRender,
      classParentString,
      classNameClosed,
      children: children1,
      triggerStyle,
      trigger: trigger1,
      triggerWhenOpen,
      triggerOpenedClassName,
      triggerDisabled,
      contentOuterClassName,
      triggerTagName,
      classNameOpen,
      triggerClassName,
      tabIndex,
      contentInnerClassName
    } = this.props;
    const disabledClass = triggerDisabled ? 'is-disabled' : '';
    const trigger = isClosed === false && triggerWhenOpen !== undefined ? triggerWhenOpen : trigger1;
    const TriggerElement = triggerTagName;
    const children = lazyRender && !hasBeenOpened && isClosed && !inTransition ? null : children1;
    const {
      className
    } = this.props;
    const openedClassName = classNameOpen;
    const closedClassName = classNameClosed;
    const triggerClassString = `${classParentString}__trigger ${toggleClassName} ${disabledClass} ${isClosed ? triggerClassName : triggerOpenedClassName}`;
    const outerClassString = `${classParentString}__contentOuter ${contentOuterClassName}`;
    const innerClassString = `${classParentString}__contentInner ${contentInnerClassName}`;
    return _react.default.createElement("div", {
      className: `${classParentString} ${className} ${isClosed ? closedClassName : openedClassName}`
    }, _react.default.createElement(TriggerElement, {
      className: triggerClassString.trim(),
      onClick: this.handleTriggerClick,
      style: triggerStyle && triggerStyle,
      onKeyPress: function (event) {
        _newArrowCheck(this, _this3);

        const {
          key
        } = event;

        if (key === ' ' || key === 'Enter') {
          this.handleTriggerClick(event);
        }
      }.bind(this),
      tabIndex: tabIndex && tabIndex
    }, trigger), this.renderNonClickableTriggerElement(), _react.default.createElement("div", {
      className: outerClassString.trim(),
      style: dropdownStyle,
      onTransitionEnd: this.handleTransitionEnd,
      ref: this.innerRef
    }, _react.default.createElement("div", {
      className: innerClassString.trim()
    }, children)));
  }

}

exports.default = Collapsible;
Collapsible.propTypes = {
  accordionPosition: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string,
  classNameClosed: _propTypes.default.string,
  classNameOpen: _propTypes.default.string,
  classParentString: _propTypes.default.string,
  contentInnerClassName: _propTypes.default.string,
  contentOuterClassName: _propTypes.default.string,
  easing: _propTypes.default.string,
  handleTriggerClick: _propTypes.default.func,
  lazyRender: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  onClosing: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onOpening: _propTypes.default.func,
  open: _propTypes.default.bool,
  overflowWhenOpen: _propTypes.default.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
  tabIndex: _propTypes.default.number,
  transitionCloseTime: _propTypes.default.number,
  transitionTime: _propTypes.default.number,
  trigger: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  triggerClassName: _propTypes.default.string,
  triggerDisabled: _propTypes.default.bool,
  triggerOpenedClassName: _propTypes.default.string,
  triggerSibling: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),
  triggerStyle: _propTypes.default.shape,
  triggerTagName: _propTypes.default.string,
  triggerWhenOpen: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
};
Collapsible.defaultProps = {
  className: '',
  classNameClosed: '',
  classNameOpen: '',
  classParentString: 'Collapsible',
  contentInnerClassName: '',
  contentOuterClassName: '',
  easing: 'linear',
  lazyRender: false,
  onClose: function onClose() {
    _newArrowCheck(this, _this4);
  }.bind(void 0),
  onClosing: function onClosing() {
    _newArrowCheck(this, _this4);
  }.bind(void 0),
  onOpen: function onOpen() {
    _newArrowCheck(this, _this4);
  }.bind(void 0),
  onOpening: function onOpening() {
    _newArrowCheck(this, _this4);
  }.bind(void 0),
  open: false,
  overflowWhenOpen: 'hidden',
  tabIndex: null,
  transitionCloseTime: null,
  transitionTime: 400,
  triggerClassName: '',
  triggerDisabled: false,
  triggerOpenedClassName: '',
  triggerSibling: null,
  triggerStyle: null,
  triggerTagName: 'span'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0NvbGxhcHNpYmxlL0NvbGxhcHNpYmxlLmpzIl0sIm5hbWVzIjpbIkNvbGxhcHNpYmxlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVhc2luZyIsInRyYW5zaXRpb25UaW1lIiwic2V0U3RhdGUiLCJoZWlnaHQiLCJpbm5lclJlZiIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJ0cmFuc2l0aW9uIiwiaXNDbG9zZWQiLCJoYXNCZWVuT3BlbmVkIiwiaW5UcmFuc2l0aW9uIiwic2hvdWxkT3Blbk9uTmV4dEN5Y2xlIiwiZXZlbnQiLCJvbkNsb3NpbmciLCJ0cmlnZ2VyRGlzYWJsZWQiLCJvbk9wZW5pbmciLCJoYW5kbGVUcmlnZ2VyQ2xpY2siLCJoYW5kbGVUcmlnZ2VyQ2xpY2sxIiwiYWNjb3JkaW9uUG9zaXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwib3BlbkNvbGxhcHNpYmxlIiwiY2xvc2VDb2xsYXBzaWJsZSIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJvdmVyZmxvd1doZW5PcGVuIiwib3ZlcmZsb3ciLCJ0aW1lb3V0IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJvcGVuIiwic2hvdWxkU3dpdGNoQXV0b09uTmV4dEN5Y2xlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiY29udGludWVPcGVuQ29sbGFwc2libGUiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ0cmFuc2l0aW9uQ2xvc2VUaW1lIiwicmVuZGVyTm9uQ2xpY2thYmxlVHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VyU2libGluZyIsImNsYXNzUGFyZW50U3RyaW5nIiwicmVuZGVyIiwiZHJvcGRvd25TdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJ0b2dnbGVDbGFzc05hbWUiLCJsYXp5UmVuZGVyIiwiY2xhc3NOYW1lQ2xvc2VkIiwiY2hpbGRyZW4iLCJjaGlsZHJlbjEiLCJ0cmlnZ2VyU3R5bGUiLCJ0cmlnZ2VyIiwidHJpZ2dlcjEiLCJ0cmlnZ2VyV2hlbk9wZW4iLCJ0cmlnZ2VyT3BlbmVkQ2xhc3NOYW1lIiwiY29udGVudE91dGVyQ2xhc3NOYW1lIiwidHJpZ2dlclRhZ05hbWUiLCJjbGFzc05hbWVPcGVuIiwidHJpZ2dlckNsYXNzTmFtZSIsInRhYkluZGV4IiwiY29udGVudElubmVyQ2xhc3NOYW1lIiwiZGlzYWJsZWRDbGFzcyIsIlRyaWdnZXJFbGVtZW50IiwiY2xhc3NOYW1lIiwib3BlbmVkQ2xhc3NOYW1lIiwiY2xvc2VkQ2xhc3NOYW1lIiwidHJpZ2dlckNsYXNzU3RyaW5nIiwib3V0ZXJDbGFzc1N0cmluZyIsImlubmVyQ2xhc3NTdHJpbmciLCJ0cmltIiwia2V5IiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJib29sIiwib25lT2YiLCJlbGVtZW50Iiwic2hhcGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFZSxNQUFNQSxXQUFOLFNBQTBCQyxnQkFBMUIsQ0FBb0M7QUFDakRDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ2pCLFVBQU1BLEtBQU4sQ0FEaUI7QUFBQTs7QUFBQSxxREFnRU8sWUFBTTtBQUFBOztBQUM5QixZQUFNO0FBQUVDLFFBQUFBLE1BQUY7QUFBVUMsUUFBQUE7QUFBVixVQUE2QixLQUFJLENBQUNGLEtBQXhDOztBQUNBLE1BQUEsS0FBSSxDQUFDRyxRQUFMLENBQWM7QUFDWkMsUUFBQUEsTUFBTSxFQUFFLEtBQUksQ0FBQ0MsUUFBTCxDQUFjQyxPQUFkLENBQXNCQyxZQURsQjtBQUVaQyxRQUFBQSxVQUFV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QUFWLGFBVmdCO0FBV3pCVSxFQUFBQSxNQUFNLEVBQUUsa0JBQU07QUFBQTtBQUFFLEdBQVYsYUFYbUI7QUFZekJSLEVBQUFBLFNBQVMsRUFBRSxxQkFBTTtBQUFBO0FBQUUsR0FBVixhQVpnQjtBQWF6QmdCLEVBQUFBLElBQUksRUFBRSxLQWJtQjtBQWN6Qk4sRUFBQUEsZ0JBQWdCLEVBQUUsUUFkTztBQWV6QnNDLEVBQUFBLFFBQVEsRUFBRSxJQWZlO0FBZ0J6QnRCLEVBQUFBLG1CQUFtQixFQUFFLElBaEJJO0FBaUJ6QnhDLEVBQUFBLGNBQWMsRUFBRSxHQWpCUztBQWtCekI2RCxFQUFBQSxnQkFBZ0IsRUFBRSxFQWxCTztBQW1CekJoRCxFQUFBQSxlQUFlLEVBQUUsS0FuQlE7QUFvQnpCNEMsRUFBQUEsc0JBQXNCLEVBQUUsRUFwQkM7QUFxQnpCZixFQUFBQSxjQUFjLEVBQUUsSUFyQlM7QUFzQnpCVyxFQUFBQSxZQUFZLEVBQUUsSUF0Qlc7QUF1QnpCTSxFQUFBQSxjQUFjLEVBQUU7QUF2QlMsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2libGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbm5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIC8vIERlZmF1bHRzIHRoZSBkcm9wZG93biB0byBiZSBjbG9zZWRcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaXNDbG9zZWQ6IGZhbHNlLFxuICAgICAgICBzaG91bGRTd2l0Y2hBdXRvT25OZXh0Q3ljbGU6IGZhbHNlLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnLFxuICAgICAgICBoYXNCZWVuT3BlbmVkOiB0cnVlLFxuICAgICAgICBvdmVyZmxvdzogcHJvcHMub3ZlcmZsb3dXaGVuT3BlbixcbiAgICAgICAgaW5UcmFuc2l0aW9uOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlzQ2xvc2VkOiB0cnVlLFxuICAgICAgICBzaG91bGRTd2l0Y2hBdXRvT25OZXh0Q3ljbGU6IGZhbHNlLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IGBoZWlnaHQgJHtwcm9wcy50cmFuc2l0aW9uVGltZX1tcyAke3Byb3BzLmVhc2luZ31gLFxuICAgICAgICBoYXNCZWVuT3BlbmVkOiBmYWxzZSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBpblRyYW5zaXRpb246IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IHNob3VsZE9wZW5Pbk5leHRDeWNsZSwgc2hvdWxkU3dpdGNoQXV0b09uTmV4dEN5Y2xlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChzaG91bGRPcGVuT25OZXh0Q3ljbGUpIHtcbiAgICAgIHRoaXMuY29udGludWVPcGVuQ29sbGFwc2libGUoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlN0YXRlLmhlaWdodCA9PT0gJ2F1dG8nICYmIHNob3VsZFN3aXRjaEF1dG9Pbk5leHRDeWNsZSA9PT0gdHJ1ZSkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBTZXQgc21hbGwgdGltZW91dCB0byBlbnN1cmUgYSB0cnVlIHJlLXJlbmRlclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGlzQ2xvc2VkOiB0cnVlLFxuICAgICAgICAgIHNob3VsZFN3aXRjaEF1dG9Pbk5leHRDeWNsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGhhcyBiZWVuIGEgY2hhbmdlIGluIHRoZSBvcGVuIHByb3AgKGNvbnRyb2xsZWQgYnkgYWNjb3JkaW9uKVxuICAgIGNvbnN0IHsgb25DbG9zaW5nLCBvcGVuLCBvbk9wZW5pbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByZXZQcm9wcy5vcGVuICE9PSBvcGVuKSB7XG4gICAgICBpZiAob3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9wZW5Db2xsYXBzaWJsZSgpO1xuICAgICAgICBvbk9wZW5pbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VDb2xsYXBzaWJsZSgpO1xuICAgICAgICBvbkNsb3NpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICBjb250aW51ZU9wZW5Db2xsYXBzaWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVhc2luZywgdHJhbnNpdGlvblRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoZWlnaHQ6IHRoaXMuaW5uZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICB0cmFuc2l0aW9uOiBgaGVpZ2h0ICR7dHJhbnNpdGlvblRpbWV9bXMgJHtlYXNpbmd9YCxcbiAgICAgIGlzQ2xvc2VkOiBmYWxzZSxcbiAgICAgIGhhc0JlZW5PcGVuZWQ6IHRydWUsXG4gICAgICBpblRyYW5zaXRpb246IHRydWUsXG4gICAgICBzaG91bGRPcGVuT25OZXh0Q3ljbGU6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRyaWdnZXJDbGljayA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2luZywgdHJpZ2dlckRpc2FibGVkLCBvbk9wZW5pbmcsIGhhbmRsZVRyaWdnZXJDbGljazogaGFuZGxlVHJpZ2dlckNsaWNrMSwgYWNjb3JkaW9uUG9zaXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRyaWdnZXJEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoaGFuZGxlVHJpZ2dlckNsaWNrMSkge1xuICAgICAgaGFuZGxlVHJpZ2dlckNsaWNrMShhY2NvcmRpb25Qb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgaXNDbG9zZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoaXNDbG9zZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5vcGVuQ29sbGFwc2libGUoKTtcbiAgICAgICAgb25PcGVuaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlQ29sbGFwc2libGUoKTtcbiAgICAgICAgb25DbG9zaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQgPSAoKSA9PiB7XG4gICAgLy8gU3dpdGNoIHRvIGhlaWdodCBhdXRvIHRvIG1ha2UgdGhlIGNvbnRhaW5lciByZXNwb25zaXZlXG4gICAgY29uc3QgeyBpc0Nsb3NlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uT3Blbiwgb25DbG9zZSwgb3ZlcmZsb3dXaGVuT3BlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWlzQ2xvc2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiAnYXV0bycsIG92ZXJmbG93OiBvdmVyZmxvd1doZW5PcGVuLCBpblRyYW5zaXRpb246IGZhbHNlIH0pO1xuICAgICAgb25PcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpblRyYW5zaXRpb246IGZhbHNlIH0pO1xuICAgICAgb25DbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBjbG9zZUNvbGxhcHNpYmxlKCkge1xuICAgIGNvbnN0IHsgZWFzaW5nLCB0cmFuc2l0aW9uVGltZSwgdHJhbnNpdGlvbkNsb3NlVGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3VsZFN3aXRjaEF1dG9Pbk5leHRDeWNsZTogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5pbm5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm5lZWRlZC10ZXJuYXJ5XG4gICAgICB0cmFuc2l0aW9uOiBgaGVpZ2h0ICR7dHJhbnNpdGlvbkNsb3NlVGltZSA/IHRyYW5zaXRpb25DbG9zZVRpbWUgOiB0cmFuc2l0aW9uVGltZX1tcyAke2Vhc2luZ31gLFxuICAgICAgaW5UcmFuc2l0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkNvbGxhcHNpYmxlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5UcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgc2hvdWxkT3Blbk9uTmV4dEN5Y2xlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTm9uQ2xpY2thYmxlVHJpZ2dlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyB0cmlnZ2VyU2libGluZywgY2xhc3NQYXJlbnRTdHJpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRyaWdnZXJTaWJsaW5nICYmIHR5cGVvZiB0cmlnZ2VyU2libGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzUGFyZW50U3RyaW5nfV9fdHJpZ2dlci1zaWJsaW5nYH0+e3RyaWdnZXJTaWJsaW5nfTwvc3Bhbj47XG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyU2libGluZykge1xuICAgICAgcmV0dXJuIDx0aGlzLnByb3BzLnRyaWdnZXJTaWJsaW5nIC8+O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5UcmFuc2l0aW9uLCBoZWlnaHQsIGlzQ2xvc2VkLCB0cmFuc2l0aW9uLCBvdmVyZmxvdywgaGFzQmVlbk9wZW5lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkcm9wZG93blN0eWxlID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgICAgIG1zVHJhbnNpdGlvbjogdHJhbnNpdGlvbixcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBvdmVyZmxvdyxcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NOYW1lID0gaXNDbG9zZWQgPyAnaXMtY2xvc2VkJyA6ICdpcy1vcGVuJztcbiAgICBjb25zdCB7XG4gICAgICBsYXp5UmVuZGVyLFxuICAgICAgY2xhc3NQYXJlbnRTdHJpbmcsXG4gICAgICBjbGFzc05hbWVDbG9zZWQsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4xLFxuICAgICAgdHJpZ2dlclN0eWxlLFxuICAgICAgdHJpZ2dlcjogdHJpZ2dlcjEsXG4gICAgICB0cmlnZ2VyV2hlbk9wZW4sXG4gICAgICB0cmlnZ2VyT3BlbmVkQ2xhc3NOYW1lLFxuICAgICAgdHJpZ2dlckRpc2FibGVkLFxuICAgICAgY29udGVudE91dGVyQ2xhc3NOYW1lLFxuICAgICAgdHJpZ2dlclRhZ05hbWUsXG4gICAgICBjbGFzc05hbWVPcGVuLFxuICAgICAgdHJpZ2dlckNsYXNzTmFtZSxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgY29udGVudElubmVyQ2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3MgPSB0cmlnZ2VyRGlzYWJsZWQgPyAnaXMtZGlzYWJsZWQnIDogJyc7XG5cbiAgICAvLyBJZiB1c2VyIHdhbnRzIGRpZmZlcmVudCB0ZXh0IHdoZW4gdHJheSBpcyBvcGVuXG4gICAgY29uc3QgdHJpZ2dlciA9IGlzQ2xvc2VkID09PSBmYWxzZSAmJiB0cmlnZ2VyV2hlbk9wZW4gIT09IHVuZGVmaW5lZCA/IHRyaWdnZXJXaGVuT3BlbiA6IHRyaWdnZXIxO1xuXG4gICAgLy8gSWYgdXNlciB3YW50cyBhIHRyaWdnZXIgd3JhcHBpbmcgZWxlbWVudCBkaWZmZXJlbnQgdGhhbiAnc3BhbidcbiAgICBjb25zdCBUcmlnZ2VyRWxlbWVudCA9IHRyaWdnZXJUYWdOYW1lO1xuXG4gICAgLy8gRG9uJ3QgcmVuZGVyIGNoaWxkcmVuIHVudGlsIHRoZSBmaXJzdCBvcGVuaW5nIG9mIHRoZSBDb2xsYXBzaWJsZSBpZiBsYXp5IHJlbmRlcmluZyBpcyBlbmFibGVkXG4gICAgY29uc3QgY2hpbGRyZW4gPSBsYXp5UmVuZGVyICYmICFoYXNCZWVuT3BlbmVkICYmIGlzQ2xvc2VkICYmICFpblRyYW5zaXRpb24gPyBudWxsIDogY2hpbGRyZW4xO1xuXG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3BlbmVkQ2xhc3NOYW1lID0gY2xhc3NOYW1lT3BlbjtcbiAgICBjb25zdCBjbG9zZWRDbGFzc05hbWUgPSBjbGFzc05hbWVDbG9zZWQ7XG5cbiAgICAvLyBDb25zdHJ1Y3QgQ1NTIGNsYXNzZXMgc3RyaW5nc1xuICAgIGNvbnN0IHRyaWdnZXJDbGFzc1N0cmluZyA9IGAke2NsYXNzUGFyZW50U3RyaW5nfV9fdHJpZ2dlciAke3RvZ2dsZUNsYXNzTmFtZX0gJHtkaXNhYmxlZENsYXNzfSAke1xuICAgICAgaXNDbG9zZWQgPyB0cmlnZ2VyQ2xhc3NOYW1lIDogdHJpZ2dlck9wZW5lZENsYXNzTmFtZVxuICAgIH1gO1xuICAgIGNvbnN0IG91dGVyQ2xhc3NTdHJpbmcgPSBgJHtjbGFzc1BhcmVudFN0cmluZ31fX2NvbnRlbnRPdXRlciAke2NvbnRlbnRPdXRlckNsYXNzTmFtZX1gO1xuICAgIGNvbnN0IGlubmVyQ2xhc3NTdHJpbmcgPSBgJHtjbGFzc1BhcmVudFN0cmluZ31fX2NvbnRlbnRJbm5lciAke2NvbnRlbnRJbm5lckNsYXNzTmFtZX1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc1BhcmVudFN0cmluZ30gJHtjbGFzc05hbWV9ICR7aXNDbG9zZWQgPyBjbG9zZWRDbGFzc05hbWUgOiBvcGVuZWRDbGFzc05hbWV9YH0+XG4gICAgICAgIDxUcmlnZ2VyRWxlbWVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dHJpZ2dlckNsYXNzU3RyaW5nLnRyaW0oKX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRyaWdnZXJDbGlja31cbiAgICAgICAgICBzdHlsZT17dHJpZ2dlclN0eWxlICYmIHRyaWdnZXJTdHlsZX1cbiAgICAgICAgICBvbktleVByZXNzPXtldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnICcgfHwga2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCAmJiB0YWJJbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0cmlnZ2VyfVxuICAgICAgICA8L1RyaWdnZXJFbGVtZW50PlxuXG4gICAgICAgIHt0aGlzLnJlbmRlck5vbkNsaWNrYWJsZVRyaWdnZXJFbGVtZW50KCl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e291dGVyQ2xhc3NTdHJpbmcudHJpbSgpfSBzdHlsZT17ZHJvcGRvd25TdHlsZX0gb25UcmFuc2l0aW9uRW5kPXt0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmR9IHJlZj17dGhpcy5pbm5lclJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lubmVyQ2xhc3NTdHJpbmcudHJpbSgpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db2xsYXBzaWJsZS5wcm9wVHlwZXMgPSB7XG4gIGFjY29yZGlvblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lQ2xvc2VkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWVPcGVuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc1BhcmVudFN0cmluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudElubmVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZW50T3V0ZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVhc2luZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlVHJpZ2dlckNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGF6eVJlbmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3Npbmc6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5pbmc6IFByb3BUeXBlcy5mdW5jLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3ZlcmZsb3dXaGVuT3BlbjogUHJvcFR5cGVzLm9uZU9mKFsnaGlkZGVuJywgJ3Zpc2libGUnLCAnYXV0bycsICdzY3JvbGwnLCAnaW5oZXJpdCcsICdpbml0aWFsJywgJ3Vuc2V0J10pLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgdHJhbnNpdGlvbkNsb3NlVGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHRyaWdnZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyaWdnZXJEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRyaWdnZXJPcGVuZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyaWdnZXJTaWJsaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgdHJpZ2dlclN0eWxlOiBQcm9wVHlwZXMuc2hhcGUsXG4gIHRyaWdnZXJUYWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmlnZ2VyV2hlbk9wZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db2xsYXBzaWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIGNsYXNzTmFtZUNsb3NlZDogJycsXG4gIGNsYXNzTmFtZU9wZW46ICcnLFxuICBjbGFzc1BhcmVudFN0cmluZzogJ0NvbGxhcHNpYmxlJyxcbiAgY29udGVudElubmVyQ2xhc3NOYW1lOiAnJyxcbiAgY29udGVudE91dGVyQ2xhc3NOYW1lOiAnJyxcbiAgZWFzaW5nOiAnbGluZWFyJyxcbiAgbGF6eVJlbmRlcjogZmFsc2UsXG4gIG9uQ2xvc2U6ICgpID0+IHt9LFxuICBvbkNsb3Npbmc6ICgpID0+IHt9LFxuICBvbk9wZW46ICgpID0+IHt9LFxuICBvbk9wZW5pbmc6ICgpID0+IHt9LFxuICBvcGVuOiBmYWxzZSxcbiAgb3ZlcmZsb3dXaGVuT3BlbjogJ2hpZGRlbicsXG4gIHRhYkluZGV4OiBudWxsLFxuICB0cmFuc2l0aW9uQ2xvc2VUaW1lOiBudWxsLFxuICB0cmFuc2l0aW9uVGltZTogNDAwLFxuICB0cmlnZ2VyQ2xhc3NOYW1lOiAnJyxcbiAgdHJpZ2dlckRpc2FibGVkOiBmYWxzZSxcbiAgdHJpZ2dlck9wZW5lZENsYXNzTmFtZTogJycsXG4gIHRyaWdnZXJTaWJsaW5nOiBudWxsLFxuICB0cmlnZ2VyU3R5bGU6IG51bGwsXG4gIHRyaWdnZXJUYWdOYW1lOiAnc3BhbicsXG59O1xuIl19