"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropDown;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _events = _interopRequireDefault(require("../../util/events"));

var _util = require("../../util");

var _DropDownModule = _interopRequireDefault(require("./DropDown.module.scss"));

var _DropDownItem = _interopRequireDefault(require("./DropDownItem"));

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

function DropDown(props) {
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
  const dropDownNode = (0, _react.useRef)(null);
  const rootRef = (0, _react.useRef)(null);
  const outlineStyle = {
    width: dimension.width,
    height: dimension.height
  };
  const dropDownClassName = (0, _classnames.default)([_DropDownModule.default.menu, _DropDownModule.default[position]], {
    [_DropDownModule.default.active]: active
  }, className);
  const dropDownStyle = (0, _react.useMemo)(function () {
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
      width: '100%',
      height: dimension.height
    } : undefined;
  }.bind(this), [dimension.height, position]);
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
      } = dropDownNode.current.getBoundingClientRect();
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
    } = rootRef.current.getBoundingClientRect();
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
    className: dropDownClassName,
    style: rootStyle,
    ref: rootRef
  }, outline ? _react.default.createElement("div", {
    className: _DropDownModule.default.outline,
    style: outlineStyle
  }) : null, _react.default.createElement("ul", {
    ref: dropDownNode,
    className: _DropDownModule.default.menuInner,
    style: dropDownStyle
  }, _react.default.Children.map(children, function (item) {
    var _this4 = this;

    _newArrowCheck(this, _this);

    if (!item) return item;

    if (item.type === _DropDownItem.default) {
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

DropDown.propTypes = {
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
DropDown.defaultProps = {
  active: false,
  outline: true,
  position: POSITION.STATIC,
  selectable: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0Ryb3BEb3duL0Ryb3BEb3duLmpzIl0sIm5hbWVzIjpbIlBPU0lUSU9OIiwiQVVUTyIsIlNUQVRJQyIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJEcm9wRG93biIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwicG9zaXRpb24iLCJvdXRsaW5lIiwiY2hpbGRyZW4iLCJzZWxlY3RhYmxlIiwic2VsZWN0ZWQiLCJzZXRBY3RpdmUiLCJvblNlbGVjdCIsIm9uSGlkZSIsIm9uU2hvdyIsImRpbWVuc2lvbiIsInNldERpbWVuc2lvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZHJvcERvd25Ob2RlIiwicm9vdFJlZiIsIm91dGxpbmVTdHlsZSIsImRyb3BEb3duQ2xhc3NOYW1lIiwic3R5bGVzIiwibWVudSIsImRyb3BEb3duU3R5bGUiLCJjbGlwIiwidW5kZWZpbmVkIiwicm9vdFN0eWxlIiwiaGFuZGxlU2VsZWN0IiwiaXRlbSIsImV2ZW50IiwidmFsdWUiLCJvbkNsaWNrIiwicGVyc2lzdCIsInBvc2l0aW9uVGltZW91dEhhbmRsZSIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlRG9jdW1lbnRDbGljayIsImV2ZW50cyIsInRhcmdldElzRGVzY2VuZGFudCIsInNob3ciLCJoaWRlIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJwYXJlbnROb2RlIiwidG9wIiwibGVmdCIsIndoIiwid3ciLCJ0b1RvcCIsInRvTGVmdCIsImFjdGl2YXRlVGltZW91dEhhbmRsZSIsInJlbW92ZUV2ZW50c0Zyb21Eb2N1bWVudCIsImNsaWNrIiwidG91Y2hzdGFydCIsImFkZEV2ZW50c1RvRG9jdW1lbnQiLCJjbGVhclRpbWVvdXQiLCJtZW51SW5uZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwidHlwZSIsIkRyb3BEb3duSXRlbSIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwiZnVuYyIsIm9uZU9mIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLE1BRFM7QUFFZkMsRUFBQUEsTUFBTSxFQUFFLFFBRk87QUFHZkMsRUFBQUEsUUFBUSxFQUFFLFNBSEs7QUFJZkMsRUFBQUEsU0FBUyxFQUFFLFVBSkk7QUFLZkMsRUFBQUEsV0FBVyxFQUFFLFlBTEU7QUFNZkMsRUFBQUEsWUFBWSxFQUFFO0FBTkMsQ0FBakI7O0FBY2UsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLE1BQWI7QUFBcUJDLElBQUFBLFFBQXJCO0FBQStCQyxJQUFBQSxPQUEvQjtBQUF3Q0MsSUFBQUEsUUFBeEM7QUFBa0RDLElBQUFBLFVBQWxEO0FBQThEQyxJQUFBQSxRQUE5RDtBQUF3RUMsSUFBQUEsU0FBeEU7QUFBbUZDLElBQUFBLFFBQW5GO0FBQTZGQyxJQUFBQSxNQUE3RjtBQUFxR0MsSUFBQUE7QUFBckcsTUFBZ0hYLEtBQXRIO0FBQ0EsUUFBTSxDQUFDWSxTQUFELEVBQVlDLFlBQVosSUFBNEIscUJBQVM7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsSUFBQUEsTUFBTSxFQUFFO0FBQXBCLEdBQVQsQ0FBbEM7QUFFQSxRQUFNQyxZQUFZLEdBQUcsbUJBQU8sSUFBUCxDQUFyQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxtQkFBTyxJQUFQLENBQWhCO0FBRUEsUUFBTUMsWUFBWSxHQUFHO0FBQUVKLElBQUFBLEtBQUssRUFBRUYsU0FBUyxDQUFDRSxLQUFuQjtBQUEwQkMsSUFBQUEsTUFBTSxFQUFFSCxTQUFTLENBQUNHO0FBQTVDLEdBQXJCO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUcseUJBQ3hCLENBQUNDLHdCQUFPQyxJQUFSLEVBQWNELHdCQUFPakIsUUFBUCxDQUFkLENBRHdCLEVBRXhCO0FBQ0UsS0FBQ2lCLHdCQUFPbEIsTUFBUixHQUFpQkE7QUFEbkIsR0FGd0IsRUFLeEJELFNBTHdCLENBQTFCO0FBUUEsUUFBTXFCLGFBQWEsR0FBRyxvQkFBUSxZQUFNO0FBQUE7O0FBQ2xDLFVBQU07QUFBRVIsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQW9CSCxTQUExQjs7QUFDQSxRQUFJVCxRQUFRLEtBQUtYLFFBQVEsQ0FBQ0UsTUFBMUIsRUFBa0M7QUFDaEMsVUFBSVEsTUFBSixFQUFZLE9BQU87QUFBRXFCLFFBQUFBLElBQUksRUFBRyxVQUFTVCxLQUFNLE1BQUtDLE1BQU87QUFBcEMsT0FBUDtBQUNaLFVBQUlaLFFBQVEsS0FBS1gsUUFBUSxDQUFDSSxTQUExQixFQUFxQyxPQUFPO0FBQUUyQixRQUFBQSxJQUFJLEVBQUcsVUFBU1QsS0FBTSxRQUFPQSxLQUFNO0FBQXJDLE9BQVA7QUFDckMsVUFBSVgsUUFBUSxLQUFLWCxRQUFRLENBQUNNLFlBQTFCLEVBQXdDLE9BQU87QUFBRXlCLFFBQUFBLElBQUksRUFBRyxRQUFPUixNQUFPLE1BQUtELEtBQU0sTUFBS0MsTUFBTyxNQUFLRCxLQUFNO0FBQXpELE9BQVA7QUFDeEMsVUFBSVgsUUFBUSxLQUFLWCxRQUFRLENBQUNLLFdBQTFCLEVBQXVDLE9BQU87QUFBRTBCLFFBQUFBLElBQUksRUFBRyxRQUFPUixNQUFPLFFBQU9BLE1BQU87QUFBckMsT0FBUDtBQUN2QyxVQUFJWixRQUFRLEtBQUtYLFFBQVEsQ0FBQ0csUUFBMUIsRUFBb0MsT0FBTztBQUFFNEIsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBUDtBQUNyQzs7QUFDRCxXQUFPQyxTQUFQO0FBQ0QsR0FWcUIsYUFVbkIsQ0FBQ3RCLE1BQUQsRUFBU1UsU0FBVCxFQUFvQlQsUUFBcEIsQ0FWbUIsQ0FBdEI7QUFZQSxRQUFNc0IsU0FBUyxHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDOUIsV0FBT3RCLFFBQVEsS0FBS1gsUUFBUSxDQUFDRSxNQUF0QixHQUErQjtBQUFFb0IsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFBLE1BQU0sRUFBRUgsU0FBUyxDQUFDRztBQUFuQyxLQUEvQixHQUE2RVMsU0FBcEY7QUFDRCxHQUZpQixhQUVmLENBQUNaLFNBQVMsQ0FBQ0csTUFBWCxFQUFtQlosUUFBbkIsQ0FGZSxDQUFsQjtBQUlBLFFBQU11QixZQUFZLEdBQUcsd0JBQ25CLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUFBOztBQUNmLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQXFCSCxJQUFJLENBQUMzQixLQUFoQztBQUNBLFFBQUk4QixPQUFKLEVBQWFGLEtBQUssQ0FBQ0csT0FBTjtBQUNidkIsSUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBLFFBQUlzQixPQUFKLEVBQWFBLE9BQU8sQ0FBQ0YsS0FBRCxDQUFQO0FBQ2IsUUFBSW5CLFFBQUosRUFBY0EsUUFBUSxDQUFDb0IsS0FBRCxDQUFSO0FBQ2YsR0FQa0IsYUFRbkIsQ0FBQ3BCLFFBQUQsRUFBV0QsU0FBWCxDQVJtQixDQUFyQjtBQVdBLFFBQU13QixxQkFBcUIsR0FBRyxtQkFBTyxDQUFQLENBQTlCO0FBQ0Esd0JBQVUsWUFBTTtBQUFBOztBQUFBOztBQUNkQSxJQUFBQSxxQkFBcUIsQ0FBQ0MsT0FBdEIsR0FBZ0NDLFVBQVUsQ0FBQyxZQUFNO0FBQUE7O0FBQy9DLFlBQU07QUFBRXBCLFFBQUFBLEtBQUY7QUFBU0MsUUFBQUE7QUFBVCxVQUFvQkMsWUFBWSxDQUFDaUIsT0FBYixDQUFxQkUscUJBQXJCLEVBQTFCO0FBQ0F0QixNQUFBQSxZQUFZLENBQUM7QUFBRUMsUUFBQUEsS0FBRjtBQUFTQyxRQUFBQTtBQUFULE9BQUQsQ0FBWjtBQUNELEtBSHlDLFlBQTFDO0FBSUQsR0FMRCxhQUtHLEVBTEg7QUFPQSxRQUFNcUIsbUJBQW1CLEdBQUcsd0JBQzFCLFVBQUFSLEtBQUssRUFBSTtBQUFBOztBQUNQLFFBQUkxQixNQUFNLElBQUksQ0FBQ21DLGdCQUFPQyxrQkFBUCxDQUEwQlYsS0FBMUIsRUFBaUNYLE9BQU8sQ0FBQ2dCLE9BQXpDLENBQWYsRUFBa0U7QUFDaEV6QixNQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQUx5QixhQU0xQixDQUFDTixNQUFELEVBQVNNLFNBQVQsQ0FOMEIsQ0FBNUI7QUFTQSxRQUFNK0IsSUFBSSxHQUFHLHdCQUFZLFlBQU07QUFBQTs7QUFDN0IsVUFBTTtBQUFFekIsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQW9CRSxPQUFPLENBQUNnQixPQUFSLENBQWdCRSxxQkFBaEIsRUFBMUI7QUFDQXRCLElBQUFBLFlBQVksQ0FBQztBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBO0FBQVQsS0FBRCxDQUFaO0FBQ0FQLElBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxHQUpZLGFBSVYsQ0FBQ0EsU0FBRCxDQUpVLENBQWI7QUFNQSxRQUFNZ0MsSUFBSSxHQUFHLHdCQUFZLFlBQU07QUFBQTs7QUFDN0JoQyxJQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0QsR0FGWSxhQUVWLENBQUNBLFNBQUQsQ0FGVSxDQUFiO0FBSUEsUUFBTWlDLGlCQUFpQixHQUFHLG9CQUFRLFlBQU07QUFBQTs7QUFDdEMsVUFBTUMsVUFBVSxHQUFHekIsT0FBTyxDQUFDZ0IsT0FBM0I7QUFDQSxRQUFJLENBQUNTLFVBQUwsRUFBaUIsT0FBT2xCLFNBQVA7QUFDakIsVUFBTTtBQUFFbUIsTUFBQUEsR0FBRjtBQUFPQyxNQUFBQSxJQUFQO0FBQWE3QixNQUFBQSxNQUFiO0FBQXFCRCxNQUFBQTtBQUFyQixRQUErQjRCLFVBQVUsQ0FBQ1AscUJBQVgsRUFBckM7QUFDQSxVQUFNO0FBQUVwQixNQUFBQSxNQUFNLEVBQUU4QixFQUFWO0FBQWMvQixNQUFBQSxLQUFLLEVBQUVnQztBQUFyQixRQUE0Qix3QkFBbEM7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLEdBQUcsR0FBR0UsRUFBRSxHQUFHLENBQUwsR0FBUzlCLE1BQU0sR0FBRyxDQUF0QztBQUNBLFVBQU1pQyxNQUFNLEdBQUdKLElBQUksR0FBR0UsRUFBRSxHQUFHLENBQUwsR0FBU2hDLEtBQUssR0FBRyxDQUF2QztBQUNBLFdBQVEsR0FBRWlDLEtBQUssR0FBRyxLQUFILEdBQVcsUUFBUyxHQUFFQyxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BQVEsRUFBL0Q7QUFDRCxHQVJ5QixhQVF2QixFQVJ1QixDQUExQjtBQVVBLFFBQU1DLHFCQUFxQixHQUFHLG1CQUFPLENBQVAsQ0FBOUI7QUFFQSx3QkFBVSxZQUFNO0FBQUE7O0FBQUE7O0FBQ2QsUUFBSSxDQUFDL0MsTUFBTCxFQUFhO0FBQ1gsVUFBSVEsTUFBSixFQUFZQSxNQUFNOztBQUNsQjJCLHNCQUFPYSx3QkFBUCxDQUFnQztBQUM5QkMsUUFBQUEsS0FBSyxFQUFFZixtQkFEdUI7QUFFOUJnQixRQUFBQSxVQUFVLEVBQUVoQjtBQUZrQixPQUFoQzs7QUFJQUksTUFBQUEsSUFBSTtBQUNMLEtBUEQsTUFPTyxJQUFJdEMsTUFBSixFQUFZO0FBQ2pCLFVBQUlTLE1BQUosRUFBWUEsTUFBTTs7QUFDbEIwQixzQkFBT2dCLG1CQUFQLENBQTJCO0FBQ3pCRixRQUFBQSxLQUFLLEVBQUVmLG1CQURrQjtBQUV6QmdCLFFBQUFBLFVBQVUsRUFBRWhCO0FBRmEsT0FBM0I7O0FBSUEsVUFBSWpDLFFBQVEsS0FBS1gsUUFBUSxDQUFDQyxJQUExQixFQUFnQztBQUM5QixZQUFJVSxRQUFRLEtBQUtzQyxpQkFBakIsRUFBb0M7QUFDbENqQyxVQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0F5QyxVQUFBQSxxQkFBcUIsQ0FBQ2hCLE9BQXRCLEdBQWdDQyxVQUFVLENBQUMsWUFBTTtBQUFBOztBQUMvQ0ssWUFBQUEsSUFBSTtBQUNMLFdBRnlDLGFBRXZDLEVBRnVDLENBQTFDO0FBR0QsU0FMRCxNQUtPO0FBQ0xBLFVBQUFBLElBQUk7QUFDTDtBQUNGLE9BVEQsTUFTTztBQUNMQSxRQUFBQSxJQUFJO0FBQ0w7QUFDRjs7QUFDRCxXQUFPLFlBQU07QUFBQTs7QUFDWCxVQUFJckMsTUFBSixFQUFZO0FBQ1ZtQyx3QkFBT2Esd0JBQVAsQ0FBZ0M7QUFDOUJDLFVBQUFBLEtBQUssRUFBRWYsbUJBRHVCO0FBRTlCZ0IsVUFBQUEsVUFBVSxFQUFFaEI7QUFGa0IsU0FBaEM7QUFJRDs7QUFDRGtCLE1BQUFBLFlBQVksQ0FBQ3RCLHFCQUFxQixDQUFDQyxPQUF2QixDQUFaO0FBQ0FxQixNQUFBQSxZQUFZLENBQUNMLHFCQUFxQixDQUFDaEIsT0FBdkIsQ0FBWjtBQUNELEtBVEQ7QUFVRCxHQXJDRCxhQXFDRyxDQUFDL0IsTUFBRCxFQUFTdUMsaUJBQVQsRUFBNEJMLG1CQUE1QixFQUFpREksSUFBakQsRUFBdUQ5QixNQUF2RCxFQUErREMsTUFBL0QsRUFBdUVSLFFBQXZFLEVBQWlGSyxTQUFqRixFQUE0RitCLElBQTVGLENBckNIO0FBdUNBLFNBQ0U7QUFBSywwQkFBbUIsTUFBeEI7QUFBK0IsSUFBQSxTQUFTLEVBQUVwQixpQkFBMUM7QUFBNkQsSUFBQSxLQUFLLEVBQUVNLFNBQXBFO0FBQStFLElBQUEsR0FBRyxFQUFFUjtBQUFwRixLQUNHYixPQUFPLEdBQUc7QUFBSyxJQUFBLFNBQVMsRUFBRWdCLHdCQUFPaEIsT0FBdkI7QUFBZ0MsSUFBQSxLQUFLLEVBQUVjO0FBQXZDLElBQUgsR0FBNkQsSUFEdkUsRUFFRTtBQUFJLElBQUEsR0FBRyxFQUFFRixZQUFUO0FBQXVCLElBQUEsU0FBUyxFQUFFSSx3QkFBT21DLFNBQXpDO0FBQW9ELElBQUEsS0FBSyxFQUFFakM7QUFBM0QsS0FDR2tDLGVBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQnJELFFBQW5CLEVBQTZCLFVBQUFzQixJQUFJLEVBQUk7QUFBQTs7QUFBQTs7QUFDcEMsUUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBT0EsSUFBUDs7QUFDWCxRQUFJQSxJQUFJLENBQUNnQyxJQUFMLEtBQWNDLHFCQUFsQixFQUFnQztBQUM5QixhQUFPSixlQUFNSyxZQUFOLENBQW1CbEMsSUFBbkIsRUFBeUI7QUFDOUJwQixRQUFBQSxRQUFRLEVBQUUsT0FBT29CLElBQUksQ0FBQzNCLEtBQUwsQ0FBVzZCLEtBQWxCLEtBQTRCLFdBQTVCLElBQTJDdkIsVUFBM0MsSUFBeURxQixJQUFJLENBQUMzQixLQUFMLENBQVc2QixLQUFYLEtBQXFCdEIsUUFEMUQ7QUFHOUJ1QixRQUFBQSxPQUFPLEVBQUUsaUJBQUFGLEtBQUs7QUFBQTs7QUFBQSxpQkFBSUYsWUFBWSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsQ0FBaEI7QUFBQSxTQUFQO0FBSHVCLE9BQXpCLENBQVA7QUFLRDs7QUFDRCxXQUFPNEIsZUFBTUssWUFBTixDQUFtQmxDLElBQW5CLENBQVA7QUFDRCxHQVZBLFlBREgsQ0FGRixDQURGO0FBa0JEOztBQUVENUIsUUFBUSxDQUFDK0QsU0FBVCxHQUFxQjtBQUNuQjVELEVBQUFBLE1BQU0sRUFBRTZELG1CQUFVQyxJQURDO0FBRW5CM0QsRUFBQUEsUUFBUSxFQUFFMEQsbUJBQVVFLElBRkQ7QUFHbkJoRSxFQUFBQSxTQUFTLEVBQUU4RCxtQkFBVUcsTUFIRjtBQUluQnhELEVBQUFBLE1BQU0sRUFBRXFELG1CQUFVSSxJQUpDO0FBS25CMUQsRUFBQUEsUUFBUSxFQUFFc0QsbUJBQVVJLElBTEQ7QUFNbkJ4RCxFQUFBQSxNQUFNLEVBQUVvRCxtQkFBVUksSUFOQztBQU9uQi9ELEVBQUFBLE9BQU8sRUFBRTJELG1CQUFVQyxJQVBBO0FBUW5CN0QsRUFBQUEsUUFBUSxFQUFFNEQsbUJBQVVLLEtBQVYsQ0FBZ0JDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUUsUUFBWixFQUFzQmtFLEdBQXRCLENBQTBCLFVBQUFhLEdBQUc7QUFBQTs7QUFBQSxXQUFJL0UsUUFBUSxDQUFDK0UsR0FBRCxDQUFaO0FBQUEsR0FBN0IsY0FBaEIsQ0FSUztBQVNuQmpFLEVBQUFBLFVBQVUsRUFBRXlELG1CQUFVQyxJQVRIO0FBVW5CekQsRUFBQUEsUUFBUSxFQUFFd0QsbUJBQVVFLElBVkQ7QUFXbkJ6RCxFQUFBQSxTQUFTLEVBQUV1RCxtQkFBVUk7QUFYRixDQUFyQjtBQWNBcEUsUUFBUSxDQUFDeUUsWUFBVCxHQUF3QjtBQUN0QnRFLEVBQUFBLE1BQU0sRUFBRSxLQURjO0FBRXRCRSxFQUFBQSxPQUFPLEVBQUUsSUFGYTtBQUd0QkQsRUFBQUEsUUFBUSxFQUFFWCxRQUFRLENBQUNFLE1BSEc7QUFJdEJZLEVBQUFBLFVBQVUsRUFBRTtBQUpVLENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi8uLi91dGlsL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRWaWV3cG9ydCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3BEb3duLm1vZHVsZS5zY3NzJztcbmltcG9ydCBEcm9wRG93bkl0ZW0gZnJvbSAnLi9Ecm9wRG93bkl0ZW0nO1xuXG5jb25zdCBQT1NJVElPTiA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBTVEFUSUM6ICdzdGF0aWMnLFxuICBUT1BfTEVGVDogJ3RvcExlZnQnLFxuICBUT1BfUklHSFQ6ICd0b3BSaWdodCcsXG4gIEJPVFRPTV9MRUZUOiAnYm90dG9tTGVmdCcsXG4gIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0Jyxcbn07XG5cbi8qXG4qXG5QT1NJVElPTiBBVVRPIElTIFNUSUxMIEJSRUFLSU5HXG4qIFRPRE86IEZpeCFcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wRG93bihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgYWN0aXZlLCBwb3NpdGlvbiwgb3V0bGluZSwgY2hpbGRyZW4sIHNlbGVjdGFibGUsIHNlbGVjdGVkLCBzZXRBY3RpdmUsIG9uU2VsZWN0LCBvbkhpZGUsIG9uU2hvdyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtkaW1lbnNpb24sIHNldERpbWVuc2lvbl0gPSB1c2VTdGF0ZSh7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XG5cbiAgY29uc3QgZHJvcERvd25Ob2RlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCByb290UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG91dGxpbmVTdHlsZSA9IHsgd2lkdGg6IGRpbWVuc2lvbi53aWR0aCwgaGVpZ2h0OiBkaW1lbnNpb24uaGVpZ2h0IH07XG4gIGNvbnN0IGRyb3BEb3duQ2xhc3NOYW1lID0gY3goXG4gICAgW3N0eWxlcy5tZW51LCBzdHlsZXNbcG9zaXRpb25dXSxcbiAgICB7XG4gICAgICBbc3R5bGVzLmFjdGl2ZV06IGFjdGl2ZSxcbiAgICB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuXG4gIGNvbnN0IGRyb3BEb3duU3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGRpbWVuc2lvbjtcbiAgICBpZiAocG9zaXRpb24gIT09IFBPU0lUSU9OLlNUQVRJQykge1xuICAgICAgaWYgKGFjdGl2ZSkgcmV0dXJuIHsgY2xpcDogYHJlY3QoMCAke3dpZHRofXB4ICR7aGVpZ2h0fXB4IDApYCB9O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBQT1NJVElPTi5UT1BfUklHSFQpIHJldHVybiB7IGNsaXA6IGByZWN0KDAgJHt3aWR0aH1weCAwICR7d2lkdGh9cHgpYCB9O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBQT1NJVElPTi5CT1RUT01fUklHSFQpIHJldHVybiB7IGNsaXA6IGByZWN0KCR7aGVpZ2h0fXB4ICR7d2lkdGh9cHggJHtoZWlnaHR9cHggJHt3aWR0aH1weClgIH07XG4gICAgICBpZiAocG9zaXRpb24gPT09IFBPU0lUSU9OLkJPVFRPTV9MRUZUKSByZXR1cm4geyBjbGlwOiBgcmVjdCgke2hlaWdodH1weCAwICR7aGVpZ2h0fXB4IDApYCB9O1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBQT1NJVElPTi5UT1BfTEVGVCkgcmV0dXJuIHsgY2xpcDogJ3JlY3QoMCAwIDAgMCknIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFthY3RpdmUsIGRpbWVuc2lvbiwgcG9zaXRpb25dKTtcblxuICBjb25zdCByb290U3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gcG9zaXRpb24gIT09IFBPU0lUSU9OLlNUQVRJQyA/IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBkaW1lbnNpb24uaGVpZ2h0IH0gOiB1bmRlZmluZWQ7XG4gIH0sIFtkaW1lbnNpb24uaGVpZ2h0LCBwb3NpdGlvbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtLCBldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb25DbGljayB9ID0gaXRlbS5wcm9wcztcbiAgICAgIGlmIChvbkNsaWNrKSBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgaWYgKG9uU2VsZWN0KSBvblNlbGVjdCh2YWx1ZSk7XG4gICAgfSxcbiAgICBbb25TZWxlY3QsIHNldEFjdGl2ZV1cbiAgKTtcblxuICBjb25zdCBwb3NpdGlvblRpbWVvdXRIYW5kbGUgPSB1c2VSZWYoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcG9zaXRpb25UaW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZHJvcERvd25Ob2RlLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzZXREaW1lbnNpb24oeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRG9jdW1lbnRDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGlmIChhY3RpdmUgJiYgIWV2ZW50cy50YXJnZXRJc0Rlc2NlbmRhbnQoZXZlbnQsIHJvb3RSZWYuY3VycmVudCkpIHtcbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFthY3RpdmUsIHNldEFjdGl2ZV1cbiAgKTtcblxuICBjb25zdCBzaG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gcm9vdFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHNldERpbWVuc2lvbih7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgc2V0QWN0aXZlKHRydWUpO1xuICB9LCBbc2V0QWN0aXZlXSk7XG5cbiAgY29uc3QgaGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICB9LCBbc2V0QWN0aXZlXSk7XG5cbiAgY29uc3QgY2FsY3VsYXRlUG9zaXRpb24gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gcm9vdFJlZi5jdXJyZW50O1xuICAgIGlmICghcGFyZW50Tm9kZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgaGVpZ2h0LCB3aWR0aCB9ID0gcGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IGhlaWdodDogd2gsIHdpZHRoOiB3dyB9ID0gZ2V0Vmlld3BvcnQoKTtcbiAgICBjb25zdCB0b1RvcCA9IHRvcCA8IHdoIC8gMiAtIGhlaWdodCAvIDI7XG4gICAgY29uc3QgdG9MZWZ0ID0gbGVmdCA8IHd3IC8gMiAtIHdpZHRoIC8gMjtcbiAgICByZXR1cm4gYCR7dG9Ub3AgPyAndG9wJyA6ICdib3R0b20nfSR7dG9MZWZ0ID8gJ0xlZnQnIDogJ1JpZ2h0J31gO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYWN0aXZhdGVUaW1lb3V0SGFuZGxlID0gdXNlUmVmKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpO1xuICAgICAgZXZlbnRzLnJlbW92ZUV2ZW50c0Zyb21Eb2N1bWVudCh7XG4gICAgICAgIGNsaWNrOiBoYW5kbGVEb2N1bWVudENsaWNrLFxuICAgICAgICB0b3VjaHN0YXJ0OiBoYW5kbGVEb2N1bWVudENsaWNrLFxuICAgICAgfSk7XG4gICAgICBoaWRlKCk7XG4gICAgfSBlbHNlIGlmIChhY3RpdmUpIHtcbiAgICAgIGlmIChvblNob3cpIG9uU2hvdygpO1xuICAgICAgZXZlbnRzLmFkZEV2ZW50c1RvRG9jdW1lbnQoe1xuICAgICAgICBjbGljazogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgICAgdG91Y2hzdGFydDogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgIH0pO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBQT1NJVElPTi5BVVRPKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gY2FsY3VsYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgIGFjdGl2YXRlVGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzaG93KCk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvdygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBldmVudHMucmVtb3ZlRXZlbnRzRnJvbURvY3VtZW50KHtcbiAgICAgICAgICBjbGljazogaGFuZGxlRG9jdW1lbnRDbGljayxcbiAgICAgICAgICB0b3VjaHN0YXJ0OiBoYW5kbGVEb2N1bWVudENsaWNrLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dChwb3NpdGlvblRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG4gICAgICBjbGVhclRpbWVvdXQoYWN0aXZhdGVUaW1lb3V0SGFuZGxlLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFthY3RpdmUsIGNhbGN1bGF0ZVBvc2l0aW9uLCBoYW5kbGVEb2N1bWVudENsaWNrLCBoaWRlLCBvbkhpZGUsIG9uU2hvdywgcG9zaXRpb24sIHNldEFjdGl2ZSwgc2hvd10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXJlYWN0LXRvb2xib3g9XCJtZW51XCIgY2xhc3NOYW1lPXtkcm9wRG93bkNsYXNzTmFtZX0gc3R5bGU9e3Jvb3RTdHlsZX0gcmVmPXtyb290UmVmfT5cbiAgICAgIHtvdXRsaW5lID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRsaW5lfSBzdHlsZT17b3V0bGluZVN0eWxlfSAvPiA6IG51bGx9XG4gICAgICA8dWwgcmVmPXtkcm9wRG93bk5vZGV9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJbm5lcn0gc3R5bGU9e2Ryb3BEb3duU3R5bGV9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBpdGVtID0+IHtcbiAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBpdGVtO1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IERyb3BEb3duSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiB0eXBlb2YgaXRlbS5wcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZWN0YWJsZSAmJiBpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgLy8gVE9ETzogZG91YmxlIGNoZWNrXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGV2ZW50ID0+IGhhbmRsZVNlbGVjdChpdGVtLCBldmVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ecm9wRG93bi5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIG91dGxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKFBPU0lUSU9OKS5tYXAoa2V5ID0+IFBPU0lUSU9OW2tleV0pKSxcbiAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMubm9kZSxcbiAgc2V0QWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkRyb3BEb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgb3V0bGluZTogdHJ1ZSxcbiAgcG9zaXRpb246IFBPU0lUSU9OLlNUQVRJQyxcbiAgc2VsZWN0YWJsZTogdHJ1ZSxcbn07XG4iXX0=