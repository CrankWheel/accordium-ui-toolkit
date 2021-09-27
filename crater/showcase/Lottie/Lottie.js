"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lottieWeb = _interopRequireDefault(require("lottie-web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Lottie extends _react.default.Component {
  constructor(...args) {
    var _this,
        _arrowCheckId = {};

    super(...args);
    _this = this;

    _defineProperty(this, "handleClickToPause", function () {
      _newArrowCheck(this, _arrowCheckId);

      if (_this.anim.isPaused) {
        _this.anim.play();
      } else {
        _this.anim.pause();
      }
    }.bind(_arrowCheckId));
  }

  componentDidMount() {
    const {
      options,
      eventListeners
    } = this.props;
    const {
      loop,
      autoplay,
      animationData,
      rendererSettings,
      segments
    } = options;
    this.options = {
      container: this.el,
      renderer: 'svg',
      loop: loop !== false,
      autoplay: autoplay !== false,
      segments: segments !== false,
      animationData,
      rendererSettings
    };
    this.options = _objectSpread({}, this.options, {}, options);
    this.anim = _lottieWeb.default.loadAnimation(this.options);
    this.registerEvents(eventListeners);
  }

  componentWillUpdate(nextProps) {
    if (this.options.animationData !== nextProps.options.animationData) {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options = _objectSpread({}, this.options, {}, nextProps.options);
      this.anim = _lottieWeb.default.loadAnimation(this.options);
      this.registerEvents(nextProps.eventListeners);
    }
  }

  componentDidUpdate() {
    if (this.props.isStopped) {
      this.stop();
    } else if (this.props.segments) {
      this.playSegments();
    } else {
      this.play();
    }

    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;
    this.anim = null;
  }

  setSpeed() {
    this.anim.setSpeed(this.props.speed);
  }

  setDirection() {
    this.anim.setDirection(this.props.direction);
  }

  play() {
    this.anim.play();
  }

  playSegments() {
    this.anim.playSegments(this.props.segments);
  }

  stop() {
    this.anim.stop();
  }

  pause() {
    if (this.props.isPaused && !this.anim.isPaused) {
      this.anim.pause();
    } else if (!this.props.isPaused && this.anim.isPaused) {
      this.anim.pause();
    }
  }

  destroy() {
    this.anim.destroy();
  }

  registerEvents(eventListeners) {
    var _this2 = this;

    eventListeners.forEach(function (eventListener) {
      _newArrowCheck(this, _this2);

      this.anim.addEventListener(eventListener.eventName, eventListener.callback);
    }.bind(this));
  }

  deRegisterEvents(eventListeners) {
    var _this3 = this;

    eventListeners.forEach(function (eventListener) {
      _newArrowCheck(this, _this3);

      this.anim.removeEventListener(eventListener.eventName, eventListener.callback);
    }.bind(this));
  }

  render() {
    var _this4 = this;

    const {
      width,
      height,
      ariaRole,
      ariaLabel,
      isClickToPauseDisabled,
      title
    } = this.props;

    const getSize = function getSize(initial) {
      _newArrowCheck(this, _this4);

      let size;

      if (typeof initial === 'number') {
        size = `${initial}px`;
      } else {
        size = initial || '100%';
      }

      return size;
    }.bind(this);

    const lottieStyles = _objectSpread({
      width: getSize(width),
      height: getSize(height),
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none'
    }, this.props.style);

    const onClickHandler = isClickToPauseDisabled ? function () {
      _newArrowCheck(this, _this4);

      return null;
    }.bind(this) : this.handleClickToPause;
    return _react.default.createElement("div", {
      ref: function (c) {
        _newArrowCheck(this, _this4);

        this.el = c;
      }.bind(this),
      style: lottieStyles,
      onClick: onClickHandler,
      title: title,
      role: ariaRole,
      "aria-label": ariaLabel,
      tabIndex: "0"
    });
  }

}

exports.default = Lottie;
Lottie.propTypes = {
  eventListeners: _propTypes.default.arrayOf(_propTypes.default.object),
  options: _propTypes.default.object.isRequired,
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  isStopped: _propTypes.default.bool,
  isPaused: _propTypes.default.bool,
  speed: _propTypes.default.number,
  segments: _propTypes.default.arrayOf(_propTypes.default.number),
  direction: _propTypes.default.number,
  ariaRole: _propTypes.default.string,
  ariaLabel: _propTypes.default.string,
  isClickToPauseDisabled: _propTypes.default.bool,
  title: _propTypes.default.string,
  style: _propTypes.default.string
};
Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: ''
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvc2hvd2Nhc2UvTG90dGllL0xvdHRpZS5qcyJdLCJuYW1lcyI6WyJMb3R0aWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImFuaW0iLCJpc1BhdXNlZCIsInBsYXkiLCJwYXVzZSIsImNvbXBvbmVudERpZE1vdW50Iiwib3B0aW9ucyIsImV2ZW50TGlzdGVuZXJzIiwicHJvcHMiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwicmVuZGVyZXJTZXR0aW5ncyIsInNlZ21lbnRzIiwiY29udGFpbmVyIiwiZWwiLCJyZW5kZXJlciIsImxvdHRpZSIsImxvYWRBbmltYXRpb24iLCJyZWdpc3RlckV2ZW50cyIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0UHJvcHMiLCJkZVJlZ2lzdGVyRXZlbnRzIiwiZGVzdHJveSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImlzU3RvcHBlZCIsInN0b3AiLCJwbGF5U2VnbWVudHMiLCJzZXRTcGVlZCIsInNldERpcmVjdGlvbiIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3BlZWQiLCJkaXJlY3Rpb24iLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsImFyaWFSb2xlIiwiYXJpYUxhYmVsIiwiaXNDbGlja1RvUGF1c2VEaXNhYmxlZCIsInRpdGxlIiwiZ2V0U2l6ZSIsImluaXRpYWwiLCJzaXplIiwibG90dGllU3R5bGVzIiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJvdXRsaW5lIiwic3R5bGUiLCJvbkNsaWNrSGFuZGxlciIsImhhbmRsZUNsaWNrVG9QYXVzZSIsImMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIs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U0FBUyxFQUFFLEtBRlM7QUFHcEJ2QixFQUFBQSxRQUFRLEVBQUUsS0FIVTtBQUlwQjZCLEVBQUFBLEtBQUssRUFBRSxDQUphO0FBS3BCVyxFQUFBQSxRQUFRLEVBQUUsUUFMVTtBQU1wQkMsRUFBQUEsU0FBUyxFQUFFLFdBTlM7QUFPcEJDLEVBQUFBLHNCQUFzQixFQUFFLEtBUEo7QUFRcEJDLEVBQUFBLEtBQUssRUFBRTtBQVJhLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3R0aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIGV2ZW50TGlzdGVuZXJzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBsb29wLCBhdXRvcGxheSwgYW5pbWF0aW9uRGF0YSwgcmVuZGVyZXJTZXR0aW5ncywgc2VnbWVudHMgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgICBsb29wOiBsb29wICE9PSBmYWxzZSxcbiAgICAgIGF1dG9wbGF5OiBhdXRvcGxheSAhPT0gZmFsc2UsXG4gICAgICBzZWdtZW50czogc2VnbWVudHMgIT09IGZhbHNlLFxuICAgICAgYW5pbWF0aW9uRGF0YSxcbiAgICAgIHJlbmRlcmVyU2V0dGluZ3MsXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zIH07XG5cbiAgICB0aGlzLmFuaW0gPSBsb3R0aWUubG9hZEFuaW1hdGlvbih0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoZXZlbnRMaXN0ZW5lcnMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMgLyogLCBuZXh0U3RhdGUgKi8pIHtcbiAgICAvKiBSZWNyZWF0ZSB0aGUgYW5pbWF0aW9uIGhhbmRsZSBpZiB0aGUgZGF0YSBpcyBjaGFuZ2VkICovXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb25EYXRhICE9PSBuZXh0UHJvcHMub3B0aW9ucy5hbmltYXRpb25EYXRhKSB7XG4gICAgICB0aGlzLmRlUmVnaXN0ZXJFdmVudHModGhpcy5wcm9wcy5ldmVudExpc3RlbmVycyk7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5uZXh0UHJvcHMub3B0aW9ucyB9O1xuICAgICAgdGhpcy5hbmltID0gbG90dGllLmxvYWRBbmltYXRpb24odGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMobmV4dFByb3BzLmV2ZW50TGlzdGVuZXJzKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNTdG9wcGVkKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VnbWVudHMpIHtcbiAgICAgIHRoaXMucGxheVNlZ21lbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIHRoaXMucGF1c2UoKTtcbiAgICB0aGlzLnNldFNwZWVkKCk7XG4gICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGVSZWdpc3RlckV2ZW50cyh0aGlzLnByb3BzLmV2ZW50TGlzdGVuZXJzKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRGF0YSA9IG51bGw7XG4gICAgdGhpcy5hbmltID0gbnVsbDtcbiAgfVxuXG4gIHNldFNwZWVkKCkge1xuICAgIHRoaXMuYW5pbS5zZXRTcGVlZCh0aGlzLnByb3BzLnNwZWVkKTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbigpIHtcbiAgICB0aGlzLmFuaW0uc2V0RGlyZWN0aW9uKHRoaXMucHJvcHMuZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5hbmltLnBsYXkoKTtcbiAgfVxuXG4gIHBsYXlTZWdtZW50cygpIHtcbiAgICB0aGlzLmFuaW0ucGxheVNlZ21lbnRzKHRoaXMucHJvcHMuc2VnbWVudHMpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmFuaW0uc3RvcCgpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNQYXVzZWQgJiYgIXRoaXMuYW5pbS5pc1BhdXNlZCkge1xuICAgICAgdGhpcy5hbmltLnBhdXNlKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5pc1BhdXNlZCAmJiB0aGlzLmFuaW0uaXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuYW5pbS5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hbmltLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHJlZ2lzdGVyRXZlbnRzKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChldmVudExpc3RlbmVyID0+IHtcbiAgICAgIHRoaXMuYW5pbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIuZXZlbnROYW1lLCBldmVudExpc3RlbmVyLmNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlUmVnaXN0ZXJFdmVudHMoZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGV2ZW50TGlzdGVuZXIgPT4ge1xuICAgICAgdGhpcy5hbmltLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lci5ldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIuY2FsbGJhY2spO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2tUb1BhdXNlID0gKCkgPT4ge1xuICAgIC8vIFRoZSBwYXVzZSgpIG1ldGhvZCBpcyBmb3IgaGFuZGxpbmcgcGF1c2luZyBieSBwYXNzaW5nIGEgcHJvcCBpc1BhdXNlZFxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGZvciBoYW5kbGluZyB0aGUgYWJpbGl0eSB0byBwYXVzZSBieSBjbGlja2luZyBvbiB0aGUgYW5pbWF0aW9uXG4gICAgaWYgKHRoaXMuYW5pbS5pc1BhdXNlZCkge1xuICAgICAgdGhpcy5hbmltLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbmltLnBhdXNlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGFyaWFSb2xlLCBhcmlhTGFiZWwsIGlzQ2xpY2tUb1BhdXNlRGlzYWJsZWQsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZ2V0U2l6ZSA9IGluaXRpYWwgPT4ge1xuICAgICAgbGV0IHNpemU7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5pdGlhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2l6ZSA9IGAke2luaXRpYWx9cHhgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l6ZSA9IGluaXRpYWwgfHwgJzEwMCUnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG90dGllU3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGdldFNpemUod2lkdGgpLFxuICAgICAgaGVpZ2h0OiBnZXRTaXplKGhlaWdodCksXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgLi4udGhpcy5wcm9wcy5zdHlsZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSBpc0NsaWNrVG9QYXVzZURpc2FibGVkID8gKCkgPT4gbnVsbCA6IHRoaXMuaGFuZGxlQ2xpY2tUb1BhdXNlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIEJ1ZyB3aXRoIGVzbGludCBydWxlcyBodHRwczovL2dpdGh1Yi5jb20vYWlyYm5iL2phdmFzY3JpcHQvaXNzdWVzLzEzNzRcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnNcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjID0+IHtcbiAgICAgICAgICB0aGlzLmVsID0gYztcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e2xvdHRpZVN0eWxlc31cbiAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgcm9sZT17YXJpYVJvbGV9XG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Mb3R0aWUucHJvcFR5cGVzID0ge1xuICBldmVudExpc3RlbmVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGlzU3RvcHBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzUGF1c2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlZ21lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBhcmlhUm9sZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0NsaWNrVG9QYXVzZURpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTG90dGllLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXZlbnRMaXN0ZW5lcnM6IFtdLFxuICBpc1N0b3BwZWQ6IGZhbHNlLFxuICBpc1BhdXNlZDogZmFsc2UsXG4gIHNwZWVkOiAxLFxuICBhcmlhUm9sZTogJ2J1dHRvbicsXG4gIGFyaWFMYWJlbDogJ2FuaW1hdGlvbicsXG4gIGlzQ2xpY2tUb1BhdXNlRGlzYWJsZWQ6IGZhbHNlLFxuICB0aXRsZTogJycsXG59O1xuIl19