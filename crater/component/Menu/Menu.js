"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _events = _interopRequireDefault(require("../../util/events"));

var _util = require("../../util");

var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _this5 = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight'
};

function Menu(props) {
  var _this = this;

  const {
    className,
    active,
    position,
    outline,
    children,
    selectable,
    selected,
    setActive,
    onSelect,
    onHide,
    onShow
  } = props;
  const [dimension, setDimension] = (0, _react.useState)({
    width: 0,
    height: 0
  });
  const menuNode = (0, _react.useRef)(null);
  const rootRef = (0, _react.useRef)(null);
  const outlineStyle = {
    width: dimension.width,
    height: dimension.height
  };
  const menuClassName = (0, _classnames.default)([_MenuModule.default.menu, _MenuModule.default[position]], {
    [_MenuModule.default.active]: active
  }, className);
  const menuStyle = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    const {
      width,
      height
    } = dimension;

    if (position !== POSITION.STATIC) {
      if (active) return {
        clip: `rect(0 ${width}px ${height}px 0)`
      };
      if (position === POSITION.TOP_RIGHT) return {
        clip: `rect(0 ${width}px 0 ${width}px)`
      };
      if (position === POSITION.BOTTOM_RIGHT) return {
        clip: `rect(${height}px ${width}px ${height}px ${width}px)`
      };
      if (position === POSITION.BOTTOM_LEFT) return {
        clip: `rect(${height}px 0 ${height}px 0)`
      };
      if (position === POSITION.TOP_LEFT) return {
        clip: 'rect(0 0 0 0)'
      };
    }

    return undefined;
  }.bind(this), [active, dimension, position]);
  const rootStyle = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return position !== POSITION.STATIC ? {
      width: dimension.width,
      height: dimension.height
    } : undefined;
  }.bind(this), [dimension.height, dimension.width, position]);
  const handleSelect = (0, _react.useCallback)(function (item, event) {
    _newArrowCheck(this, _this);

    const {
      value,
      onClick
    } = item.props;
    if (onClick) event.persist();
    setActive(false);
    if (onClick) onClick(event);
    if (onSelect) onSelect(value);
  }.bind(this), [onSelect, setActive]);
  const positionTimeoutHandle = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    var _this2 = this;

    _newArrowCheck(this, _this);

    positionTimeoutHandle.current = setTimeout(function () {
      _newArrowCheck(this, _this2);

      const {
        width,
        height
      } = menuNode.current.getBoundingClientRect();
      setDimension({
        width,
        height
      });
    }.bind(this));
  }.bind(this), []);
  const handleDocumentClick = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (active && !_events.default.targetIsDescendant(event, rootRef.current)) {
      setActive(false);
    }
  }.bind(this), [active, setActive]);
  const show = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    const {
      width,
      height
    } = menuNode.current.getBoundingClientRect();
    setDimension({
      width,
      height
    });
    setActive(true);
  }.bind(this), [setActive]);
  const hide = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    setActive(false);
  }.bind(this), [setActive]);
  const calculatePosition = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    const parentNode = rootRef.current;
    if (!parentNode) return undefined;
    const {
      top,
      left,
      height,
      width
    } = parentNode.getBoundingClientRect();
    const {
      height: wh,
      width: ww
    } = (0, _util.getViewport)();
    const toTop = top < wh / 2 - height / 2;
    const toLeft = left < ww / 2 - width / 2;
    return `${toTop ? 'top' : 'bottom'}${toLeft ? 'Left' : 'Right'}`;
  }.bind(this), []);
  const activateTimeoutHandle = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    var _this3 = this;

    _newArrowCheck(this, _this);

    if (!active) {
      if (onHide) onHide();

      _events.default.removeEventsFromDocument({
        click: handleDocumentClick,
        touchstart: handleDocumentClick
      });

      hide();
    } else if (active) {
      if (onShow) onShow();

      _events.default.addEventsToDocument({
        click: handleDocumentClick,
        touchstart: handleDocumentClick
      });

      if (position === POSITION.AUTO) {
        if (position !== calculatePosition) {
          setActive(false);
          activateTimeoutHandle.current = setTimeout(function () {
            _newArrowCheck(this, _this3);

            show();
          }.bind(this), 20);
        } else {
          show();
        }
      } else {
        show();
      }
    }

    return function () {
      _newArrowCheck(this, _this3);

      if (active) {
        _events.default.removeEventsFromDocument({
          click: handleDocumentClick,
          touchstart: handleDocumentClick
        });
      }

      clearTimeout(positionTimeoutHandle.current);
      clearTimeout(activateTimeoutHandle.current);
    }.bind(this);
  }.bind(this), [active, calculatePosition, handleDocumentClick, hide, onHide, onShow, position, setActive, show]);
  return _react.default.createElement("div", {
    "data-react-toolbox": "menu",
    className: menuClassName,
    style: rootStyle,
    ref: rootRef
  }, outline ? _react.default.createElement("div", {
    className: _MenuModule.default.outline,
    style: outlineStyle
  }) : null, _react.default.createElement("ul", {
    ref: menuNode,
    className: _MenuModule.default.menuInner,
    style: menuStyle
  }, _react.default.Children.map(children, function (item) {
    var _this4 = this;

    _newArrowCheck(this, _this);

    if (!item) return item;

    if (item.type === _MenuItem.default) {
      return _react.default.cloneElement(item, {
        selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
        onClick: function onClick(event) {
          _newArrowCheck(this, _this4);

          return handleSelect(item, event);
        }.bind(this)
      });
    }

    return _react.default.cloneElement(item);
  }.bind(this))));
}

Menu.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  onHide: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onShow: _propTypes.default.func,
  outline: _propTypes.default.bool,
  position: _propTypes.default.oneOf(Object.keys(POSITION).map(function (key) {
    _newArrowCheck(this, _this5);

    return POSITION[key];
  }.bind(void 0))),
  selectable: _propTypes.default.bool,
  selected: _propTypes.default.node,
  setActive: _propTypes.default.func
};
Menu.defaultProps = {
  active: false,
  outline: true,
  position: POSITION.STATIC,
  selectable: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L01lbnUvTWVudS5qcyJdLCJuYW1lcyI6WyJQT1NJVElPTiIsIkFVVE8iLCJTVEFUSUMiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTWVudSIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwicG9zaXRpb24iLCJvdXRsaW5lIiwiY2hpbGRyZW4iLCJzZWxlY3RhYmxlIiwic2VsZWN0ZWQiLCJzZXRBY3RpdmUiLCJvblNlbGVjdCIsIm9uSGlkZSIsIm9uU2hvdyIsImRpbWVuc2lvbiIsInNldERpbWVuc2lvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWVudU5vZGUiLCJyb290UmVmIiwib3V0bGluZVN0eWxlIiwibWVudUNsYXNzTmFtZSIsInN0eWxlcyIsIm1lbnUiLCJtZW51U3R5bGUiLCJjbGlwIiwidW5kZWZpbmVkIiwicm9vdFN0eWxlIiwiaGFuZGxlU2VsZWN0IiwiaXRlbSIsImV2ZW50IiwidmFsdWUiLCJvbkNsaWNrIiwicGVyc2lzdCIsInBvc2l0aW9uVGltZW91dEhhbmRsZSIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImV2ZW50cyIsInRhcmdldElzRGVzY2VuZGFudCIsInNob3ciLCJoaWRlIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJwYXJlbnROb2RlIiwidG9wIiwibGVmdCIsIndoIiwid3ciLCJ0b1RvcCIsInRvTGVmdCIsImFjdGl2YXRlVGltZW91dEhhbmRsZSIsInJlbW92ZUV2ZW50c0Zyb21Eb2N1bWVudCIsImNsaWNrIiwidG91Y2hzdGFydCIsImFkZEV2ZW50c1RvRG9jdW1lbnQiLCJjbGVhclRpbWVvdXQiLCJtZW51SW5uZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwidHlwZSIsIk1lbnVJdGVtIiwiY2xvbmVFbGVtZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJzdHJpbmciLCJmdW5jIiwib25lT2YiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxJQUFJLEVBQUUsTUFEUztBQUVmQyxFQUFBQSxNQUFNLEVBQUUsUUFGTztBQUdmQyxFQUFBQSxRQUFRLEVBQUUsU0FISztBQUlmQyxFQUFBQSxTQUFTLEVBQUUsVUFKSTtBQUtmQyxFQUFBQSxXQUFXLEVBQUUsWUFMRTtBQU1mQyxFQUFBQSxZQUFZLEVBQUU7QUFOQyxDQUFqQjs7QUFjZSxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDbEMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLE1BQWI7QUFBcUJDLElBQUFBLFFBQXJCO0FBQStCQyxJQUFBQSxPQUEvQjtBQUF3Q0MsSUFBQUEsUUFBeEM7QUFBa0RDLElBQUFBLFVBQWxEO0FBQThEQyxJQUFBQSxRQUE5RDtBQUF3RUMsSUFBQUEsU0FBeEU7QUFBbUZDLElBQUFBLFFBQW5GO0FBQTZGQyxJQUFBQSxNQUE3RjtBQUFxR0MsSUFBQUE7QUFBckcsTUFBZ0hYLEtBQXRIO0FBQ0EsUUFBTSxDQUFDWSxTQUFELEVBQVlDLFlBQVosSUFBNEIscUJBQVM7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsSUFBQUEsTUFBTSxFQUFFO0FBQXBCLEdBQVQsQ0FBbEM7QUFFQSxRQUFNQyxRQUFRLEdBQUcsbUJBQU8sSUFBUCxDQUFqQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxtQkFBTyxJQUFQLENBQWhCO0FBRUEsUUFBTUMsWUFBWSxHQUFHO0FBQUVKLElBQUFBLEtBQUssRUFBRUYsU0FBUyxDQUFDRSxLQUFuQjtBQUEwQkMsSUFBQUEsTUFBTSxFQUFFSCxTQUFTLENB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Y0FBaEIsQ0FSSztBQVNmakUsRUFBQUEsVUFBVSxFQUFFeUQsbUJBQVVDLElBVFA7QUFVZnpELEVBQUFBLFFBQVEsRUFBRXdELG1CQUFVRSxJQVZMO0FBV2Z6RCxFQUFBQSxTQUFTLEVBQUV1RCxtQkFBVUk7QUFYTixDQUFqQjtBQWNBcEUsSUFBSSxDQUFDeUUsWUFBTCxHQUFvQjtBQUNsQnRFLEVBQUFBLE1BQU0sRUFBRSxLQURVO0FBRWxCRSxFQUFBQSxPQUFPLEVBQUUsSUFGUztBQUdsQkQsRUFBQUEsUUFBUSxFQUFFWCxRQUFRLENBQUNFLE1BSEQ7QUFJbEJZLEVBQUFBLFVBQVUsRUFBRTtBQUpNLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi8uLi91dGlsL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRWaWV3cG9ydCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuXG5jb25zdCBQT1NJVElPTiA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBTVEFUSUM6ICdzdGF0aWMnLFxuICBUT1BfTEVGVDogJ3RvcExlZnQnLFxuICBUT1BfUklHSFQ6ICd0b3BSaWdodCcsXG4gIEJPVFRPTV9MRUZUOiAnYm90dG9tTGVmdCcsXG4gIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0Jyxcbn07XG5cbi8qXG4qXG5QT1NJVElPTiBBVVRPIElTIFNUSUxMIEJSRUFLSU5HXG4qIFRPRE86IEZpeCFcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBhY3RpdmUsIHBvc2l0aW9uLCBvdXRsaW5lLCBjaGlsZHJlbiwgc2VsZWN0YWJsZSwgc2VsZWN0ZWQsIHNldEFjdGl2ZSwgb25TZWxlY3QsIG9uSGlkZSwgb25TaG93IH0gPSBwcm9wcztcbiAgY29uc3QgW2RpbWVuc2lvbiwgc2V0RGltZW5zaW9uXSA9IHVzZVN0YXRlKHsgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcblxuICBjb25zdCBtZW51Tm9kZSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgcm9vdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvdXRsaW5lU3R5bGUgPSB7IHdpZHRoOiBkaW1lbnNpb24ud2lkdGgsIGhlaWdodDogZGltZW5zaW9uLmhlaWdodCB9O1xuICBjb25zdCBtZW51Q2xhc3NOYW1lID0gY3goXG4gICAgW3N0eWxlcy5tZW51LCBzdHlsZXNbcG9zaXRpb25dXSxcbiAgICB7XG4gICAgICBbc3R5bGVzLmFjdGl2ZV06IGFjdGl2ZSxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuXG4gIGNvbnN0IG1lbnVTdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZGltZW5zaW9uO1xuICAgIGlmIChwb3NpdGlvbiAhPT0gUE9TSVRJT04uU1RBVElDKSB7XG4gICAgICBpZiAoYWN0aXZlKSByZXR1cm4geyBjbGlwOiBgcmVjdCgwICR7d2lkdGh9cHggJHtoZWlnaHR9cHggMClgIH07XG4gICAgICBpZiAocG9zaXRpb24gPT09IFBPU0lUSU9OLlRPUF9SSUdIVCkgcmV0dXJuIHsgY2xpcDogYHJlY3QoMCAke3dpZHRofXB4IDAgJHt3aWR0aH1weClgIH07XG4gICAgICBpZiAocG9zaXRpb24gPT09IFBPU0lUSU9OLkJPVFRPTV9SSUdIVCkgcmV0dXJuIHsgY2xpcDogYHJlY3QoJHtoZWlnaHR9cHggJHt3aWR0aH1weCAke2hlaWdodH1weCAke3dpZHRofXB4KWAgfTtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gUE9TSVRJT04uQk9UVE9NX0xFRlQpIHJldHVybiB7IGNsaXA6IGByZWN0KCR7aGVpZ2h0fXB4IDAgJHtoZWlnaHR9cHggMClgIH07XG4gICAgICBpZiAocG9zaXRpb24gPT09IFBPU0lUSU9OLlRPUF9MRUZUKSByZXR1cm4geyBjbGlwOiAncmVjdCgwIDAgMCAwKScgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2FjdGl2ZSwgZGltZW5zaW9uLCBwb3NpdGlvbl0pO1xuXG4gIGNvbnN0IHJvb3RTdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBwb3NpdGlvbiAhPT0gUE9TSVRJT04uU1RBVElDID8geyB3aWR0aDogZGltZW5zaW9uLndpZHRoLCBoZWlnaHQ6IGRpbWVuc2lvbi5oZWlnaHQgfSA6IHVuZGVmaW5lZDtcbiAgfSwgW2RpbWVuc2lvbi5oZWlnaHQsIGRpbWVuc2lvbi53aWR0aCwgcG9zaXRpb25dKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbSwgZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2xpY2sgfSA9IGl0ZW0ucHJvcHM7XG4gICAgICBpZiAob25DbGljaykgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3QodmFsdWUpO1xuICAgIH0sXG4gICAgW29uU2VsZWN0LCBzZXRBY3RpdmVdXG4gICk7XG5cbiAgY29uc3QgcG9zaXRpb25UaW1lb3V0SGFuZGxlID0gdXNlUmVmKDApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvc2l0aW9uVGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lbnVOb2RlLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzZXREaW1lbnNpb24oeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChhY3RpdmUgJiYgIWV2ZW50cy50YXJnZXRJc0Rlc2NlbmRhbnQoZXZlbnQsIHJvb3RSZWYuY3VycmVudCkpIHtcbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFthY3RpdmUsIHNldEFjdGl2ZV1cbiAgKTtcblxuICBjb25zdCBzaG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gbWVudU5vZGUuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBzZXREaW1lbnNpb24oeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgfSwgW3NldEFjdGl2ZV0pO1xuXG4gIGNvbnN0IGhpZGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgfSwgW3NldEFjdGl2ZV0pO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVBvc2l0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJvb3RSZWYuY3VycmVudDtcbiAgICBpZiAoIXBhcmVudE5vZGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIGhlaWdodCwgd2lkdGggfSA9IHBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBoZWlnaHQ6IHdoLCB3aWR0aDogd3cgfSA9IGdldFZpZXdwb3J0KCk7XG4gICAgY29uc3QgdG9Ub3AgPSB0b3AgPCB3aCAvIDIgLSBoZWlnaHQgLyAyO1xuICAgIGNvbnN0IHRvTGVmdCA9IGxlZnQgPCB3dyAvIDIgLSB3aWR0aCAvIDI7XG4gICAgcmV0dXJuIGAke3RvVG9wID8gJ3RvcCcgOiAnYm90dG9tJ30ke3RvTGVmdCA/ICdMZWZ0JyA6ICdSaWdodCd9YDtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFjdGl2YXRlVGltZW91dEhhbmRsZSA9IHVzZVJlZigwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICBpZiAob25IaWRlKSBvbkhpZGUoKTtcbiAgICAgIGV2ZW50cy5yZW1vdmVFdmVudHNGcm9tRG9jdW1lbnQoe1xuICAgICAgICBjbGljazogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgICAgdG91Y2hzdGFydDogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgIH0pO1xuICAgICAgaGlkZSgpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlKSB7XG4gICAgICBpZiAob25TaG93KSBvblNob3coKTtcbiAgICAgIGV2ZW50cy5hZGRFdmVudHNUb0RvY3VtZW50KHtcbiAgICAgICAgY2xpY2s6IGhhbmRsZURvY3VtZW50Q2xpY2ssXG4gICAgICAgIHRvdWNoc3RhcnQ6IGhhbmRsZURvY3VtZW50Q2xpY2ssXG4gICAgICB9KTtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gUE9TSVRJT04uQVVUTykge1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IGNhbGN1bGF0ZVBvc2l0aW9uKSB7XG4gICAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICBhY3RpdmF0ZVRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgZXZlbnRzLnJlbW92ZUV2ZW50c0Zyb21Eb2N1bWVudCh7XG4gICAgICAgICAgY2xpY2s6IGhhbmRsZURvY3VtZW50Q2xpY2ssXG4gICAgICAgICAgdG91Y2hzdGFydDogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQocG9zaXRpb25UaW1lb3V0SGFuZGxlLmN1cnJlbnQpO1xuICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2YXRlVGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbYWN0aXZlLCBjYWxjdWxhdGVQb3NpdGlvbiwgaGFuZGxlRG9jdW1lbnRDbGljaywgaGlkZSwgb25IaWRlLCBvblNob3csIHBvc2l0aW9uLCBzZXRBY3RpdmUsIHNob3ddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1yZWFjdC10b29sYm94PVwibWVudVwiIGNsYXNzTmFtZT17bWVudUNsYXNzTmFtZX0gc3R5bGU9e3Jvb3RTdHlsZX0gcmVmPXtyb290UmVmfT5cbiAgICAgIHtvdXRsaW5lID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRsaW5lfSBzdHlsZT17b3V0bGluZVN0eWxlfSAvPiA6IG51bGx9XG4gICAgICA8dWwgcmVmPXttZW51Tm9kZX0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUlubmVyfSBzdHlsZT17bWVudVN0eWxlfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gaXRlbTtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBNZW51SXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiB0eXBlb2YgaXRlbS5wcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZWN0YWJsZSAmJiBpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgLy8gVE9ETzogZG91YmxlIGNoZWNrXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGV2ZW50ID0+IGhhbmRsZVNlbGVjdChpdGVtLCBldmVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TaG93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb3V0bGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoUE9TSVRJT04pLm1hcChrZXkgPT4gUE9TSVRJT05ba2V5XSkpLFxuICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ub2RlLFxuICBzZXRBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIG91dGxpbmU6IHRydWUsXG4gIHBvc2l0aW9uOiBQT1NJVElPTi5TVEFUSUMsXG4gIHNlbGVjdGFibGU6IHRydWUsXG59O1xuIl19