"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

var _isComponentOfType = _interopRequireDefault(require("../../util/is-component-of-type"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const isTab = function isTab(child) {
  _newArrowCheck(this, _this);

  return (0, _isComponentOfType.default)(_Tab.default, child);
}.bind(void 0);

const isTabContent = function isTabContent(child) {
  _newArrowCheck(this, _this);

  return (0, _isComponentOfType.default)(_TabContent.default, child);
}.bind(void 0);

class Tabs extends _react.Component {
  constructor(...args) {
    var _this2,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {},
        _arrowCheckId4 = {},
        _arrowCheckId5 = {},
        _arrowCheckId6 = {},
        _arrowCheckId7 = {};

    super(...args);
    _this2 = this;

    _defineProperty(this, "state", {
      pointer: {},
      arrows: {}
    });

    _defineProperty(this, "handleHeaderClick", function (idx) {
      _newArrowCheck(this, _arrowCheckId);

      if (_this2.props.onChange) {
        _this2.props.onChange(idx);
      }
    }.bind(_arrowCheckId));

    _defineProperty(this, "handleResize", function () {
      var _this3 = this;

      _newArrowCheck(this, _arrowCheckId2);

      if (_this2.resizeTimeout) clearTimeout(_this2.resizeTimeout);
      _this2.resizeTimeout = setTimeout(function () {
        _newArrowCheck(this, _this3);

        _this2.updatePointer(_this2.props.index);

        _this2.updateArrows();
      }.bind(this), 100);
    }.bind(_arrowCheckId2));

    _defineProperty(this, "updatePointer", function (idx) {
      var _this4 = this;

      _newArrowCheck(this, _arrowCheckId3);

      if (_this2.navigationNode && _this2.navigationNode.children[idx]) {
        _this2.updatePointerAnimationFrame = window.requestAnimationFrame(function () {
          _newArrowCheck(this, _this4);

          const nav = _this2.navigationNode.getBoundingClientRect();

          const label = _this2.navigationNode.children[idx].getBoundingClientRect();

          const {
            scrollLeft
          } = _this2.navigationNode;

          _this2.setState({
            pointer: {
              top: `${nav.height}px`,
              left: `${label.left + scrollLeft - nav.left + 1}px`,
              width: `${label.width - 2}px`
            }
          });
        }.bind(this));
      }
    }.bind(_arrowCheckId3));

    _defineProperty(this, "updateArrows", function () {
      _newArrowCheck(this, _arrowCheckId4);

      const idx = _this2.navigationNode.children.length - 2;

      if (idx >= 0) {
        const {
          scrollLeft
        } = _this2.navigationNode;

        const nav = _this2.navigationNode.getBoundingClientRect();

        const lastLabel = _this2.navigationNode.children[idx].getBoundingClientRect();

        _this2.setState({
          arrows: {
            left: scrollLeft > 0,
            right: nav.right < lastLabel.right - 5
          }
        });
      }
    }.bind(_arrowCheckId4));

    _defineProperty(this, "scrollNavigation", function (factor) {
      _newArrowCheck(this, _arrowCheckId5);

      const oldScrollLeft = _this2.navigationNode.scrollLeft;
      _this2.navigationNode.scrollLeft += factor * _this2.navigationNode.clientWidth;

      if (_this2.navigationNode.scrollLeft !== oldScrollLeft) {
        _this2.updateArrows();
      }
    }.bind(_arrowCheckId5));

    _defineProperty(this, "scrollRight", function () {
      _newArrowCheck(this, _arrowCheckId6);

      return _this2.scrollNavigation(-1);
    }.bind(_arrowCheckId6));

    _defineProperty(this, "scrollLeft", function () {
      _newArrowCheck(this, _arrowCheckId7);

      return _this2.scrollNavigation(+1);
    }.bind(_arrowCheckId7));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentDidUpdate(prevProps) {
    const {
      index,
      children
    } = this.props;
    const {
      index: prevIndex,
      children: prevChildren
    } = prevProps;

    if (index !== prevIndex || children !== prevChildren) {
      this.updatePointer(index);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    clearTimeout(this.resizeTimeout);
    if (this.updatePointerAnimationFrame) cancelAnimationFrame(this.updatePointerAnimationFrame);
  }

  parseChildren() {
    var _this5 = this;

    const headers = [];
    const contents = [];

    _react.default.Children.forEach(this.props.children, function (item) {
      _newArrowCheck(this, _this5);

      if (isTab(item)) {
        headers.push(item);

        if (item.props.children) {
          contents.push(_react.default.createElement(_TabContent.default, {
            theme: this.props.theme
          }, item.props.children));
        }
      } else if (isTabContent(item)) {
        contents.push(item);
      }
    }.bind(this));

    return {
      headers,
      contents
    };
  }

  renderHeaders(headers) {
    var _this6 = this;

    return headers.map(function (item, idx) {
      var _this7 = this;

      _newArrowCheck(this, _this6);

      return _react.default.cloneElement(item, {
        children: null,
        key: idx,
        index: idx,
        theme: this.props.theme,
        active: this.props.index === idx,
        onClick: function onClick(event, index) {
          _newArrowCheck(this, _this7);

          this.handleHeaderClick(index);
          if (item.props.onClick) item.props.onClick(event);
        }.bind(this)
      });
    }.bind(this));
  }

  renderContents(contents) {
    var _this8 = this;

    const contentElements = contents.map(function (item, idx) {
      _newArrowCheck(this, _this8);

      return _react.default.cloneElement(item, {
        key: idx,
        theme: this.props.theme,
        active: this.props.index === idx,
        hidden: this.props.index !== idx && this.props.hideMode === 'display',
        tabIndex: idx
      });
    }.bind(this));
    return this.props.hideMode === 'display' ? contentElements : contentElements.filter(function (item, idx) {
      _newArrowCheck(this, _this8);

      return idx === this.props.index;
    }.bind(this));
  }

  render() {
    var _this9 = this;

    const {
      className,
      disableAnimatedBottomBorder,
      fixed,
      inverse,
      material,
      navigationClassName
    } = this.props;
    const {
      left: hasLeftArrow,
      right: hasRightArrow
    } = this.state.arrows;
    const {
      headers,
      contents
    } = this.parseChildren();
    const classNamePointer = (0, _classnames.default)(_TabsModule.default.pointer, {
      [_TabsModule.default.disableAnimation]: disableAnimatedBottomBorder
    });
    const classNames = (0, _classnames.default)(_TabsModule.default.tabs, {
      [_TabsModule.default.fixed]: fixed,
      [_TabsModule.default.inverse]: inverse,
      [_TabsModule.default.material]: material
    }, className);
    return _react.default.createElement("div", {
      "data-react-toolbox": "tabs",
      className: classNames
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(_TabsModule.default.navigationContainer, navigationClassName)
    }, _react.default.createElement("div", {
      className: _TabsModule.default.navigation,
      role: "tablist",
      ref: function (node) {
        _newArrowCheck(this, _this9);

        this.navigationNode = node;
      }.bind(this)
    }, this.renderHeaders(headers), _react.default.createElement("span", {
      className: classNamePointer,
      style: this.state.pointer
    }))), this.renderContents(contents));
  }

}

_defineProperty(Tabs, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  navigationClassName: _propTypes.default.string,
  disableAnimatedBottomBorder: _propTypes.default.bool,
  fixed: _propTypes.default.bool,
  hideMode: _propTypes.default.oneOf(['display', 'unmounted']),
  index: _propTypes.default.number,
  inverse: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  material: _propTypes.default.bool
});

_defineProperty(Tabs, "defaultProps", {
  index: 0,
  fixed: false,
  inverse: false,
  hideMode: 'unmounted',
  material: false
});

var _default = Tabs;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1RhYnMvVGFicy5qcyJdLCJuYW1lcyI6WyJpc1RhYiIsImNoaWxkIiwiVGFiIiwiaXNUYWJDb250ZW50IiwiVGFiQ29udGVudCIsIlRhYnMiLCJDb21wb25lbnQiLCJwb2ludGVyIiwiYXJyb3dzIiwiaWR4IiwicHJvcHMiLCJvbkNoYW5nZSIsInJlc2l6ZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXBkYXRlUG9pbnRlciIsImluZGV4IiwidXBkYXRlQXJyb3dzIiwibmF2aWdhdGlvbk5vZGUiLCJjaGlsZHJlbiIsInVwZGF0ZVBvaW50ZXJBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5hdiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhYmVsIiwic2Nyb2xsTGVmdCIsInNldFN0YXRlIiwidG9wIiwiaGVpZ2h0IiwibGVmdCIsIndpZHRoIiwibGVuZ3RoIiwibGFzdExhYmVsIiwicmlnaHQiLCJmYWN0b3IiLCJvbGRTY3JvbGxMZWZ0IiwiY2xpZW50V2lkdGgiLCJzY3JvbGxOYXZpZ2F0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldkluZGV4IiwicHJldkNoaWxkcmVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwYXJzZUNoaWxkcmVuIiwiaGVhZGVycyIsImNvbnRlbnRzIiwiUmVhY3QiLCJDaGlsZHJlbiIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInRoZW1lIiwicmVuZGVySGVhZGVycyIsIm1hcCIsImNsb25lRWxlbWVudCIsImtleSIsImFjdGl2ZSIsIm9uQ2xpY2siLCJldmVudCIsImhhbmRsZUhlYWRlckNsaWNrIiwicmVuZGVyQ29udGVudHMiLCJjb250ZW50RWxlbWVudHMiLCJoaWRkZW4iLCJoaWRlTW9kZSIsInRhYkluZGV4IiwiZmlsdGVyIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiZGlzYWJsZUFuaW1hdGVkQm90dG9tQm9yZGVyIiwiZml4ZWQiLCJpbnZlcnNlIiwibWF0ZXJpYWwiLCJuYXZpZ2F0aW9uQ2xhc3NOYW1lIiwiaGFzTGVmdEFycm93IiwiaGFzUmlnaHRBcnJvdyIsInN0YXRlIiwiY2xhc3NOYW1lUG9pbnRlciIsInN0eWxlcyIsImRpc2FibGVBbmltYXRpb24iLCJjbGFzc05hbWVzIiwidGFicyIsIm5hdmlnYXRpb25Db250YWluZXIiLCJuYXZpZ2F0aW9uIiwibm9kZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJvbmVPZiIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsZUFBQUMsS0FBSztBQUFBOztBQUFBLFNBQUksZ0NBQWtCQyxZQUFsQixFQUF1QkQsS0FBdkIsQ0FBSjtBQUFBLENBQVIsYUFBWDs7QUFDQSxNQUFNRSxZQUFZLEdBQUcsc0JBQUFGLEtBQUs7QUFBQTs7QUFBQSxTQUFJLGdDQUFrQkcsbUJBQWxCLEVBQThCSCxLQUE5QixDQUFKO0FBQUEsQ0FBUixhQUFsQjs7QUFFQSxNQUFNSSxJQUFOLFNBQW1CQyxnQkFBbkIsQ0FBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxtQ0FzQm5CO0FBQ05DLE1BQUFBLE9BQU8sRUFBRSxFQURIO0FBRU5DLE1BQUFBLE1BQU0sRUFBRTtBQUZGLEtBdEJtQjs7QUFBQSwrQ0ErQ1AsVUFBQUMsR0FBRyxFQUFJO0FBQUE7O0FBQ3pCLFVBQUksTUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFD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S0QsS0FBTCxDQUFXMUU7QUFBckQsTUFSRixDQU5GLENBREYsRUF1QkcsS0FBSzJELGNBQUwsQ0FBb0JmLFFBQXBCLENBdkJILENBREY7QUEyQkQ7O0FBeE0wQjs7Z0JBQXZCOUMsSSxlQUNlO0FBQ2pCYyxFQUFBQSxRQUFRLEVBQUV1RSxtQkFBVUQsSUFESDtBQUVqQmhCLEVBQUFBLFNBQVMsRUFBRWlCLG1CQUFVQyxNQUZKO0FBR2pCYixFQUFBQSxtQkFBbUIsRUFBRVksbUJBQVVDLE1BSGQ7QUFJakJqQixFQUFBQSwyQkFBMkIsRUFBRWdCLG1CQUFVRSxJQUp0QjtBQUtqQmpCLEVBQUFBLEtBQUssRUFBRWUsbUJBQVVFLElBTEE7QUFNakJ2QixFQUFBQSxRQUFRLEVBQUVxQixtQkFBVUcsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxXQUFaLENBQWhCLENBTk87QUFPakI3RSxFQUFBQSxLQUFLLEVBQUUwRSxtQkFBVUksTUFQQTtBQVFqQmxCLEVBQUFBLE9BQU8sRUFBRWMsbUJBQVVFLElBUkY7QUFTakJqRixFQUFBQSxRQUFRLEVBQUUrRSxtQkFBVUssSUFUSDtBQVVqQmxCLEVBQUFBLFFBQVEsRUFBRWEsbUJBQVVFO0FBVkgsQzs7Z0JBRGZ2RixJLGtCQWNrQjtBQUNwQlcsRUFBQUEsS0FBSyxFQUFFLENBRGE7QUFFcEIyRCxFQUFBQSxLQUFLLEVBQUUsS0FGYTtBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLEtBSFc7QUFJcEJQLEVBQUFBLFFBQVEsRUFBRSxXQUpVO0FBS3BCUSxFQUFBQSxRQUFRLEVBQUU7QUFMVSxDOztlQTRMVHhFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGlzQ29tcG9uZW50T2ZUeXBlIGZyb20gJy4uLy4uL3V0aWwvaXMtY29tcG9uZW50LW9mLXR5cGUnO1xuaW1wb3J0IFRhYiBmcm9tICcuL1RhYic7XG5pbXBvcnQgVGFiQ29udGVudCBmcm9tICcuL1RhYkNvbnRlbnQnO1xuXG5jb25zdCBpc1RhYiA9IGNoaWxkID0+IGlzQ29tcG9uZW50T2ZUeXBlKFRhYiwgY2hpbGQpO1xuY29uc3QgaXNUYWJDb250ZW50ID0gY2hpbGQgPT4gaXNDb21wb25lbnRPZlR5cGUoVGFiQ29udGVudCwgY2hpbGQpO1xuXG5jbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hdmlnYXRpb25DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZUFuaW1hdGVkQm90dG9tQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGlkZU1vZGU6IFByb3BUeXBlcy5vbmVPZihbJ2Rpc3BsYXknLCAndW5tb3VudGVkJ10pLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBtYXRlcmlhbDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbmRleDogMCxcbiAgICBmaXhlZDogZmFsc2UsXG4gICAgaW52ZXJzZTogZmFsc2UsXG4gICAgaGlkZU1vZGU6ICd1bm1vdW50ZWQnLFxuICAgIG1hdGVyaWFsOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBwb2ludGVyOiB7fSxcbiAgICBhcnJvd3M6IHt9LFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IGluZGV4LCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGluZGV4OiBwcmV2SW5kZXgsIGNoaWxkcmVuOiBwcmV2Q2hpbGRyZW4gfSA9IHByZXZQcm9wcztcblxuICAgIGlmIChpbmRleCAhPT0gcHJldkluZGV4IHx8IGNoaWxkcmVuICE9PSBwcmV2Q2hpbGRyZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlUG9pbnRlcihpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICBpZiAodGhpcy51cGRhdGVQb2ludGVyQW5pbWF0aW9uRnJhbWUpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUG9pbnRlckFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGhhbmRsZUhlYWRlckNsaWNrID0gaWR4ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpZHgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVzaXplVGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG4gICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVBvaW50ZXIodGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICB0aGlzLnVwZGF0ZUFycm93cygpO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgdXBkYXRlUG9pbnRlciA9IGlkeCA9PiB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGlvbk5vZGUgJiYgdGhpcy5uYXZpZ2F0aW9uTm9kZS5jaGlsZHJlbltpZHhdKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvaW50ZXJBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXYgPSB0aGlzLm5hdmlnYXRpb25Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubmF2aWdhdGlvbk5vZGUuY2hpbGRyZW5baWR4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSB0aGlzLm5hdmlnYXRpb25Ob2RlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgICB0b3A6IGAke25hdi5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgbGVmdDogYCR7bGFiZWwubGVmdCArIHNjcm9sbExlZnQgLSBuYXYubGVmdCArIDF9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGAke2xhYmVsLndpZHRoIC0gMn1weGAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlQXJyb3dzID0gKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMubmF2aWdhdGlvbk5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSB0aGlzLm5hdmlnYXRpb25Ob2RlO1xuICAgICAgY29uc3QgbmF2ID0gdGhpcy5uYXZpZ2F0aW9uTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGxhc3RMYWJlbCA9IHRoaXMubmF2aWdhdGlvbk5vZGUuY2hpbGRyZW5baWR4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFycm93czoge1xuICAgICAgICAgIGxlZnQ6IHNjcm9sbExlZnQgPiAwLFxuICAgICAgICAgIHJpZ2h0OiBuYXYucmlnaHQgPCBsYXN0TGFiZWwucmlnaHQgLSA1LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHNjcm9sbE5hdmlnYXRpb24gPSBmYWN0b3IgPT4ge1xuICAgIGNvbnN0IG9sZFNjcm9sbExlZnQgPSB0aGlzLm5hdmlnYXRpb25Ob2RlLnNjcm9sbExlZnQ7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTm9kZS5zY3JvbGxMZWZ0ICs9IGZhY3RvciAqIHRoaXMubmF2aWdhdGlvbk5vZGUuY2xpZW50V2lkdGg7XG4gICAgaWYgKHRoaXMubmF2aWdhdGlvbk5vZGUuc2Nyb2xsTGVmdCAhPT0gb2xkU2Nyb2xsTGVmdCkge1xuICAgICAgdGhpcy51cGRhdGVBcnJvd3MoKTtcbiAgICB9XG4gIH07XG5cbiAgc2Nyb2xsUmlnaHQgPSAoKSA9PiB0aGlzLnNjcm9sbE5hdmlnYXRpb24oLTEpO1xuXG4gIHNjcm9sbExlZnQgPSAoKSA9PiB0aGlzLnNjcm9sbE5hdmlnYXRpb24oKzEpO1xuXG4gIHBhcnNlQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IFtdO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGl0ZW0gPT4ge1xuICAgICAgaWYgKGlzVGFiKGl0ZW0pKSB7XG4gICAgICAgIGhlYWRlcnMucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjb250ZW50cy5wdXNoKDxUYWJDb250ZW50IHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfT57aXRlbS5wcm9wcy5jaGlsZHJlbn08L1RhYkNvbnRlbnQ+KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1RhYkNvbnRlbnQoaXRlbSkpIHtcbiAgICAgICAgY29udGVudHMucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7IGhlYWRlcnMsIGNvbnRlbnRzIH07XG4gIH1cblxuICByZW5kZXJIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICByZXR1cm4gaGVhZGVycy5tYXAoKGl0ZW0sIGlkeCkgPT5cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgICAgICBrZXk6IGlkeCwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpbmRleDogaWR4LFxuICAgICAgICB0aGVtZTogdGhpcy5wcm9wcy50aGVtZSxcbiAgICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmluZGV4ID09PSBpZHgsXG4gICAgICAgIG9uQ2xpY2s6IChldmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUhlYWRlckNsaWNrKGluZGV4KTtcbiAgICAgICAgICBpZiAoaXRlbS5wcm9wcy5vbkNsaWNrKSBpdGVtLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudHMoY29udGVudHMpIHtcbiAgICBjb25zdCBjb250ZW50RWxlbWVudHMgPSBjb250ZW50cy5tYXAoKGl0ZW0sIGlkeCkgPT5cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgIGtleTogaWR4LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIHRoZW1lOiB0aGlzLnByb3BzLnRoZW1lLFxuICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuaW5kZXggPT09IGlkeCxcbiAgICAgICAgaGlkZGVuOiB0aGlzLnByb3BzLmluZGV4ICE9PSBpZHggJiYgdGhpcy5wcm9wcy5oaWRlTW9kZSA9PT0gJ2Rpc3BsYXknLFxuICAgICAgICB0YWJJbmRleDogaWR4LFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaGlkZU1vZGUgPT09ICdkaXNwbGF5JyA/IGNvbnRlbnRFbGVtZW50cyA6IGNvbnRlbnRFbGVtZW50cy5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4gaWR4ID09PSB0aGlzLnByb3BzLmluZGV4KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZGlzYWJsZUFuaW1hdGVkQm90dG9tQm9yZGVyLCBmaXhlZCwgaW52ZXJzZSwgbWF0ZXJpYWwsIG5hdmlnYXRpb25DbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsZWZ0OiBoYXNMZWZ0QXJyb3csIHJpZ2h0OiBoYXNSaWdodEFycm93IH0gPSB0aGlzLnN0YXRlLmFycm93cztcbiAgICBjb25zdCB7IGhlYWRlcnMsIGNvbnRlbnRzIH0gPSB0aGlzLnBhcnNlQ2hpbGRyZW4oKTtcbiAgICBjb25zdCBjbGFzc05hbWVQb2ludGVyID0gY2xhc3NuYW1lcyhzdHlsZXMucG9pbnRlciwge1xuICAgICAgW3N0eWxlcy5kaXNhYmxlQW5pbWF0aW9uXTogZGlzYWJsZUFuaW1hdGVkQm90dG9tQm9yZGVyLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBzdHlsZXMudGFicyxcbiAgICAgIHtcbiAgICAgICAgW3N0eWxlcy5maXhlZF06IGZpeGVkLFxuICAgICAgICBbc3R5bGVzLmludmVyc2VdOiBpbnZlcnNlLFxuICAgICAgICBbc3R5bGVzLm1hdGVyaWFsXTogbWF0ZXJpYWwsXG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGRhdGEtcmVhY3QtdG9vbGJveD1cInRhYnNcIiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubmF2aWdhdGlvbkNvbnRhaW5lciwgbmF2aWdhdGlvbkNsYXNzTmFtZSl9PlxuICAgICAgICAgIHsvKiAgICAgICAgICB7aGFzTGVmdEFycm93ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dDb250YWluZXJ9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsUmlnaHR9PlxuICAgICAgICAgICAgICA8Rm9udEljb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9IHZhbHVlPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfSAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufVxuICAgICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckhlYWRlcnMoaGVhZGVycyl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZVBvaW50ZXJ9IHN0eWxlPXt0aGlzLnN0YXRlLnBvaW50ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qICAgICAgICAgIHtoYXNSaWdodEFycm93ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3dDb250YWluZXJ9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsTGVmdH0+XG4gICAgICAgICAgICAgIDxGb250SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gdmFsdWU9XCJrZXlib2FyZF9hcnJvd19yaWdodFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckNvbnRlbnRzKGNvbnRlbnRzKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iXX0=