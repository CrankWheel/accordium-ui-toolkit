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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQ29sbGFwc2libGUvQ29sbGFwc2libGUuanMiXSwibmFtZXMiOlsiQ29sbGFwc2libGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZWFzaW5nIiwidHJhbnNpdGlvblRpbWUiLCJzZXRTdGF0ZSIsImhlaWdodCIsImlubmVyUmVmIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInRyYW5zaXRpb24iLCJpc0Nsb3NlZCIsImhhc0JlZW5PcGVuZWQiLCJpblRyYW5zaXRpb24iLCJzaG91bGRPcGVuT25OZXh0Q3ljbGUiLCJldmVudCIsIm9uQ2xvc2luZyIsInRyaWdnZXJEaXNhYmxlZCIsIm9uT3BlbmluZyIsImhhbmRsZVRyaWdnZXJDbGljayIsImhhbmRsZVRyaWdnZXJDbGljazEiLCJhY2NvcmRpb25Qb3NpdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJvcGVuQ29sbGFwc2libGUiLCJjbG9zZUNvbGxhcHNpYmxlIiwib25PcGVuIiwib25DbG9zZSIsIm92ZXJmbG93V2hlbk9wZW4iLCJvdmVyZmxvdyIsInRpbWVvdXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm9wZW4iLCJzaG91bGRTd2l0Y2hBdXRvT25OZXh0Q3ljbGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJjb250aW51ZU9wZW5Db2xsYXBzaWJsZSIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInRyYW5zaXRpb25DbG9zZVRpbWUiLCJyZW5kZXJOb25DbGlja2FibGVUcmlnZ2VyRWxlbWVudCIsInRyaWdnZXJTaWJsaW5nIiwiY2xhc3NQYXJlbnRTdHJpbmciLCJyZW5kZXIiLCJkcm9wZG93blN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsInRvZ2dsZUNsYXNzTmFtZSIsImxhenlSZW5kZXIiLCJjbGFzc05hbWVDbG9zZWQiLCJjaGlsZHJlbiIsImNoaWxkcmVuMSIsInRyaWdnZXJTdHlsZSIsInRyaWdnZXIiLCJ0cmlnZ2VyMSIsInRyaWdnZXJXaGVuT3BlbiIsInRyaWdnZXJPcGVuZWRDbGFzc05hbWUiLCJjb250ZW50T3V0ZXJDbGFzc05hbWUiLCJ0cmlnZ2VyVGFnTmFtZSIsImNsYXNzTmFtZU9wZW4iLCJ0cmlnZ2VyQ2xhc3NOYW1lIiwidGFiSW5kZXgiLCJjb250ZW50SW5uZXJDbGFzc05hbWUiLCJkaXNhYmxlZENsYXNzIiwiVHJpZ2dlckVsZW1lbnQiLCJjbGFzc05hbWUiLCJvcGVuZWRDbGFzc05hbWUiLCJjbG9zZWRDbGFzc05hbWUiLCJ0cmlnZ2VyQ2xhc3NTdHJpbmciLCJvdXRlckNsYXNzU3RyaW5nIiwiaW5uZXJDbGFzc1N0cmluZyIsInRyaW0iLCJrZXkiLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsImVsZW1lbnQiLCJzaGFwZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVlLE1BQU1BLFdBQU4sU0FBMEJDLGdCQUExQixDQUFvQztBQUNqREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDakIsVUFBTUEsS0FBTixDQURpQjtBQUFBOztBQUFBLHFEQWdFTyxZQUFNO0FBQUE7O0FBQzlCLFlBQU07QUFBRUMsUUFBQUEsTUFBRjtBQUFVQyxRQUFBQTtBQUFWLFVBQTZCLEtBQUksQ0FBQ0YsS0FBeEM7O0FBQ0EsTUFBQSxLQUFJLENBQUNHLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxNQUFNLEVBQUUsS0FBSSxDQUFDQyxRQUFMLENBQWNDLE9BQWQsQ0FBc0JDLFlBRGxCO0FBRVpDLFFBQUFBLFVBQVUs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QVYsYUFWZ0I7QUFXekJVLEVBQUFBLE1BQU0sRUFBRSxrQkFBTTtBQUFBO0FBQUUsR0FBVixhQVhtQjtBQVl6QlIsRUFBQUEsU0FBUyxFQUFFLHFCQUFNO0FBQUE7QUFBRSxHQUFWLGFBWmdCO0FBYXpCZ0IsRUFBQUEsSUFBSSxFQUFFLEtBYm1CO0FBY3pCTixFQUFBQSxnQkFBZ0IsRUFBRSxRQWRPO0FBZXpCc0MsRUFBQUEsUUFBUSxFQUFFLElBZmU7QUFnQnpCdEIsRUFBQUEsbUJBQW1CLEVBQUUsSUFoQkk7QUFpQnpCeEMsRUFBQUEsY0FBYyxFQUFFLEdBakJTO0FBa0J6QjZELEVBQUFBLGdCQUFnQixFQUFFLEVBbEJPO0FBbUJ6QmhELEVBQUFBLGVBQWUsRUFBRSxLQW5CUTtBQW9CekI0QyxFQUFBQSxzQkFBc0IsRUFBRSxFQXBCQztBQXFCekJmLEVBQUFBLGNBQWMsRUFBRSxJQXJCUztBQXNCekJXLEVBQUFBLFlBQVksRUFBRSxJQXRCVztBQXVCekJNLEVBQUFBLGNBQWMsRUFBRTtBQXZCUyxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsYXBzaWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlubmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgLy8gRGVmYXVsdHMgdGhlIGRyb3Bkb3duIHRvIGJlIGNsb3NlZFxuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpc0Nsb3NlZDogZmFsc2UsXG4gICAgICAgIHNob3VsZFN3aXRjaEF1dG9Pbk5leHRDeWNsZTogZmFsc2UsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZScsXG4gICAgICAgIGhhc0JlZW5PcGVuZWQ6IHRydWUsXG4gICAgICAgIG92ZXJmbG93OiBwcm9wcy5vdmVyZmxvd1doZW5PcGVuLFxuICAgICAgICBpblRyYW5zaXRpb246IGZhbHNlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaXNDbG9zZWQ6IHRydWUsXG4gICAgICAgIHNob3VsZFN3aXRjaEF1dG9Pbk5leHRDeWNsZTogZmFsc2UsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogYGhlaWdodCAke3Byb3BzLnRyYW5zaXRpb25UaW1lfW1zICR7cHJvcHMuZWFzaW5nfWAsXG4gICAgICAgIGhhc0JlZW5PcGVuZWQ6IGZhbHNlLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGluVHJhbnNpdGlvbjogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgc2hvdWxkT3Blbk9uTmV4dEN5Y2xlLCBzaG91bGRTd2l0Y2hBdXRvT25OZXh0Q3ljbGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNob3VsZE9wZW5Pbk5leHRDeWNsZSkge1xuICAgICAgdGhpcy5jb250aW51ZU9wZW5Db2xsYXBzaWJsZSgpO1xuICAgIH1cblxuICAgIGlmIChwcmV2U3RhdGUuaGVpZ2h0ID09PSAnYXV0bycgJiYgc2hvdWxkU3dpdGNoQXV0b09uTmV4dEN5Y2xlID09PSB0cnVlKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFNldCBzbWFsbCB0aW1lb3V0IHRvIGVuc3VyZSBhIHRydWUgcmUtcmVuZGVyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaXNDbG9zZWQ6IHRydWUsXG4gICAgICAgICAgc2hvdWxkU3dpdGNoQXV0b09uTmV4dEN5Y2xlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaGFzIGJlZW4gYSBjaGFuZ2UgaW4gdGhlIG9wZW4gcHJvcCAoY29udHJvbGxlZCBieSBhY2NvcmRpb24pXG4gICAgY29uc3QgeyBvbkNsb3NpbmcsIG9wZW4sIG9uT3BlbmluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlByb3BzLm9wZW4gIT09IG9wZW4pIHtcbiAgICAgIGlmIChvcGVuID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMub3BlbkNvbGxhcHNpYmxlKCk7XG4gICAgICAgIG9uT3BlbmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZUNvbGxhcHNpYmxlKCk7XG4gICAgICAgIG9uQ2xvc2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIGNvbnRpbnVlT3BlbkNvbGxhcHNpYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZWFzaW5nLCB0cmFuc2l0aW9uVGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhlaWdodDogdGhpcy5pbm5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCxcbiAgICAgIHRyYW5zaXRpb246IGBoZWlnaHQgJHt0cmFuc2l0aW9uVGltZX1tcyAke2Vhc2luZ31gLFxuICAgICAgaXNDbG9zZWQ6IGZhbHNlLFxuICAgICAgaGFzQmVlbk9wZW5lZDogdHJ1ZSxcbiAgICAgIGluVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgIHNob3VsZE9wZW5Pbk5leHRDeWNsZTogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlVHJpZ2dlckNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgb25DbG9zaW5nLCB0cmlnZ2VyRGlzYWJsZWQsIG9uT3BlbmluZywgaGFuZGxlVHJpZ2dlckNsaWNrOiBoYW5kbGVUcmlnZ2VyQ2xpY2sxLCBhY2NvcmRpb25Qb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHJpZ2dlckRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChoYW5kbGVUcmlnZ2VyQ2xpY2sxKSB7XG4gICAgICBoYW5kbGVUcmlnZ2VyQ2xpY2sxKGFjY29yZGlvblBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBpc0Nsb3NlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGlmIChpc0Nsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm9wZW5Db2xsYXBzaWJsZSgpO1xuICAgICAgICBvbk9wZW5pbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VDb2xsYXBzaWJsZSgpO1xuICAgICAgICBvbkNsb3NpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZCA9ICgpID0+IHtcbiAgICAvLyBTd2l0Y2ggdG8gaGVpZ2h0IGF1dG8gdG8gbWFrZSB0aGUgY29udGFpbmVyIHJlc3BvbnNpdmVcbiAgICBjb25zdCB7IGlzQ2xvc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgb25PcGVuLCBvbkNsb3NlLCBvdmVyZmxvd1doZW5PcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoZWlnaHQ6ICdhdXRvJywgb3ZlcmZsb3c6IG92ZXJmbG93V2hlbk9wZW4sIGluVHJhbnNpdGlvbjogZmFsc2UgfSk7XG4gICAgICBvbk9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluVHJhbnNpdGlvbjogZmFsc2UgfSk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNsb3NlQ29sbGFwc2libGUoKSB7XG4gICAgY29uc3QgeyBlYXNpbmcsIHRyYW5zaXRpb25UaW1lLCB0cmFuc2l0aW9uQ2xvc2VUaW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdWxkU3dpdGNoQXV0b09uTmV4dEN5Y2xlOiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmlubmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVubmVlZGVkLXRlcm5hcnlcbiAgICAgIHRyYW5zaXRpb246IGBoZWlnaHQgJHt0cmFuc2l0aW9uQ2xvc2VUaW1lID8gdHJhbnNpdGlvbkNsb3NlVGltZSA6IHRyYW5zaXRpb25UaW1lfW1zICR7ZWFzaW5nfWAsXG4gICAgICBpblRyYW5zaXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBvcGVuQ29sbGFwc2libGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpblRyYW5zaXRpb246IHRydWUsXG4gICAgICBzaG91bGRPcGVuT25OZXh0Q3ljbGU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJOb25DbGlja2FibGVUcmlnZ2VyRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IHRyaWdnZXJTaWJsaW5nLCBjbGFzc1BhcmVudFN0cmluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHJpZ2dlclNpYmxpbmcgJiYgdHlwZW9mIHRyaWdnZXJTaWJsaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17YCR7Y2xhc3NQYXJlbnRTdHJpbmd9X190cmlnZ2VyLXNpYmxpbmdgfT57dHJpZ2dlclNpYmxpbmd9PC9zcGFuPjtcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXJTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gPHRoaXMucHJvcHMudHJpZ2dlclNpYmxpbmcgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpblRyYW5zaXRpb24sIGhlaWdodCwgaXNDbG9zZWQsIHRyYW5zaXRpb24sIG92ZXJmbG93LCBoYXNCZWVuT3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRyb3Bkb3duU3R5bGUgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICAgICAgbXNUcmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIG92ZXJmbG93LFxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc05hbWUgPSBpc0Nsb3NlZCA/ICdpcy1jbG9zZWQnIDogJ2lzLW9wZW4nO1xuICAgIGNvbnN0IHtcbiAgICAgIGxhenlSZW5kZXIsXG4gICAgICBjbGFzc1BhcmVudFN0cmluZyxcbiAgICAgIGNsYXNzTmFtZUNsb3NlZCxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbjEsXG4gICAgICB0cmlnZ2VyU3R5bGUsXG4gICAgICB0cmlnZ2VyOiB0cmlnZ2VyMSxcbiAgICAgIHRyaWdnZXJXaGVuT3BlbixcbiAgICAgIHRyaWdnZXJPcGVuZWRDbGFzc05hbWUsXG4gICAgICB0cmlnZ2VyRGlzYWJsZWQsXG4gICAgICBjb250ZW50T3V0ZXJDbGFzc05hbWUsXG4gICAgICB0cmlnZ2VyVGFnTmFtZSxcbiAgICAgIGNsYXNzTmFtZU9wZW4sXG4gICAgICB0cmlnZ2VyQ2xhc3NOYW1lLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICBjb250ZW50SW5uZXJDbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGlzYWJsZWRDbGFzcyA9IHRyaWdnZXJEaXNhYmxlZCA/ICdpcy1kaXNhYmxlZCcgOiAnJztcblxuICAgIC8vIElmIHVzZXIgd2FudHMgZGlmZmVyZW50IHRleHQgd2hlbiB0cmF5IGlzIG9wZW5cbiAgICBjb25zdCB0cmlnZ2VyID0gaXNDbG9zZWQgPT09IGZhbHNlICYmIHRyaWdnZXJXaGVuT3BlbiAhPT0gdW5kZWZpbmVkID8gdHJpZ2dlcldoZW5PcGVuIDogdHJpZ2dlcjE7XG5cbiAgICAvLyBJZiB1c2VyIHdhbnRzIGEgdHJpZ2dlciB3cmFwcGluZyBlbGVtZW50IGRpZmZlcmVudCB0aGFuICdzcGFuJ1xuICAgIGNvbnN0IFRyaWdnZXJFbGVtZW50ID0gdHJpZ2dlclRhZ05hbWU7XG5cbiAgICAvLyBEb24ndCByZW5kZXIgY2hpbGRyZW4gdW50aWwgdGhlIGZpcnN0IG9wZW5pbmcgb2YgdGhlIENvbGxhcHNpYmxlIGlmIGxhenkgcmVuZGVyaW5nIGlzIGVuYWJsZWRcbiAgICBjb25zdCBjaGlsZHJlbiA9IGxhenlSZW5kZXIgJiYgIWhhc0JlZW5PcGVuZWQgJiYgaXNDbG9zZWQgJiYgIWluVHJhbnNpdGlvbiA/IG51bGwgOiBjaGlsZHJlbjE7XG5cbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcGVuZWRDbGFzc05hbWUgPSBjbGFzc05hbWVPcGVuO1xuICAgIGNvbnN0IGNsb3NlZENsYXNzTmFtZSA9IGNsYXNzTmFtZUNsb3NlZDtcblxuICAgIC8vIENvbnN0cnVjdCBDU1MgY2xhc3NlcyBzdHJpbmdzXG4gICAgY29uc3QgdHJpZ2dlckNsYXNzU3RyaW5nID0gYCR7Y2xhc3NQYXJlbnRTdHJpbmd9X190cmlnZ2VyICR7dG9nZ2xlQ2xhc3NOYW1lfSAke2Rpc2FibGVkQ2xhc3N9ICR7XG4gICAgICBpc0Nsb3NlZCA/IHRyaWdnZXJDbGFzc05hbWUgOiB0cmlnZ2VyT3BlbmVkQ2xhc3NOYW1lXG4gICAgfWA7XG4gICAgY29uc3Qgb3V0ZXJDbGFzc1N0cmluZyA9IGAke2NsYXNzUGFyZW50U3RyaW5nfV9fY29udGVudE91dGVyICR7Y29udGVudE91dGVyQ2xhc3NOYW1lfWA7XG4gICAgY29uc3QgaW5uZXJDbGFzc1N0cmluZyA9IGAke2NsYXNzUGFyZW50U3RyaW5nfV9fY29udGVudElubmVyICR7Y29udGVudElubmVyQ2xhc3NOYW1lfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzUGFyZW50U3RyaW5nfSAke2NsYXNzTmFtZX0gJHtpc0Nsb3NlZCA/IGNsb3NlZENsYXNzTmFtZSA6IG9wZW5lZENsYXNzTmFtZX1gfT5cbiAgICAgICAgPFRyaWdnZXJFbGVtZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0cmlnZ2VyQ2xhc3NTdHJpbmcudHJpbSgpfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHJpZ2dlckNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt0cmlnZ2VyU3R5bGUgJiYgdHJpZ2dlclN0eWxlfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICcgJyB8fCBrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4ICYmIHRhYkluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAge3RyaWdnZXJ9XG4gICAgICAgIDwvVHJpZ2dlckVsZW1lbnQ+XG5cbiAgICAgICAge3RoaXMucmVuZGVyTm9uQ2xpY2thYmxlVHJpZ2dlckVsZW1lbnQoKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3V0ZXJDbGFzc1N0cmluZy50cmltKCl9IHN0eWxlPXtkcm9wZG93blN0eWxlfSBvblRyYW5zaXRpb25FbmQ9e3RoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZH0gcmVmPXt0aGlzLmlubmVyUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5uZXJDbGFzc1N0cmluZy50cmltKCl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvbGxhcHNpYmxlLnByb3BUeXBlcyA9IHtcbiAgYWNjb3JkaW9uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWVDbG9zZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZU9wZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzUGFyZW50U3RyaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZW50SW5uZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRlbnRPdXRlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZWFzaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVUcmlnZ2VyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBsYXp5UmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xvc2luZzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICBvdmVyZmxvd1doZW5PcGVuOiBQcm9wVHlwZXMub25lT2YoWydoaWRkZW4nLCAndmlzaWJsZScsICdhdXRvJywgJ3Njcm9sbCcsICdpbmhlcml0JywgJ2luaXRpYWwnLCAndW5zZXQnXSksXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0cmFuc2l0aW9uQ2xvc2VUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgdHJpZ2dlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpZ2dlckRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJpZ2dlck9wZW5lZENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpZ2dlclNpYmxpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuICB0cmlnZ2VyU3R5bGU6IFByb3BUeXBlcy5zaGFwZSxcbiAgdHJpZ2dlclRhZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyaWdnZXJXaGVuT3BlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbn07XG5cbkNvbGxhcHNpYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgY2xhc3NOYW1lQ2xvc2VkOiAnJyxcbiAgY2xhc3NOYW1lT3BlbjogJycsXG4gIGNsYXNzUGFyZW50U3RyaW5nOiAnQ29sbGFwc2libGUnLFxuICBjb250ZW50SW5uZXJDbGFzc05hbWU6ICcnLFxuICBjb250ZW50T3V0ZXJDbGFzc05hbWU6ICcnLFxuICBlYXNpbmc6ICdsaW5lYXInLFxuICBsYXp5UmVuZGVyOiBmYWxzZSxcbiAgb25DbG9zZTogKCkgPT4ge30sXG4gIG9uQ2xvc2luZzogKCkgPT4ge30sXG4gIG9uT3BlbjogKCkgPT4ge30sXG4gIG9uT3BlbmluZzogKCkgPT4ge30sXG4gIG9wZW46IGZhbHNlLFxuICBvdmVyZmxvd1doZW5PcGVuOiAnaGlkZGVuJyxcbiAgdGFiSW5kZXg6IG51bGwsXG4gIHRyYW5zaXRpb25DbG9zZVRpbWU6IG51bGwsXG4gIHRyYW5zaXRpb25UaW1lOiA0MDAsXG4gIHRyaWdnZXJDbGFzc05hbWU6ICcnLFxuICB0cmlnZ2VyRGlzYWJsZWQ6IGZhbHNlLFxuICB0cmlnZ2VyT3BlbmVkQ2xhc3NOYW1lOiAnJyxcbiAgdHJpZ2dlclNpYmxpbmc6IG51bGwsXG4gIHRyaWdnZXJTdHlsZTogbnVsbCxcbiAgdHJpZ2dlclRhZ05hbWU6ICdzcGFuJyxcbn07XG4iXX0=