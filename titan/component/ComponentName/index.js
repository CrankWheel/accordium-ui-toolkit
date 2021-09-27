"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComponentName;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentNameModule = _interopRequireDefault(require("./component-name.module.scss"));

var _genericModule = _interopRequireDefault(require("../../scss/module/generic.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function ComponentName(props) {
  var _this = this;

  const {
    className,
    style,
    hide
  } = props;
  const [name, setName] = (0, _react.useState)('');
  const handleClick = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    console.log('Handling click...');
    setName(`Last Click on ${new Date()}`);
  }.bind(this), []);
  (0, _react.useEffect)(function () {
    _newArrowCheck(this, _this);

    if (name) console.log('Name: ', name);
  }.bind(this), [name]);
  const extraDashName = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    return `${name}---`;
  }.bind(this), [name]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, _componentNameModule.default.stylingSample, {
      [_genericModule.default.hide]: hide
    }),
    style: style
  }, _react.default.createElement("button", {
    onClick: handleClick
  }, name || 'Click Here!'), _react.default.createElement("br", null), extraDashName);
}

ComponentName.defaultProps = {
  hide: false
};
ComponentName.propTypes = {
  className: _propTypes.default.string,
  hide: _propTypes.default.bool,
  style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvQ29tcG9uZW50TmFtZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnROYW1lIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhpZGUiLCJuYW1lIiwic2V0TmFtZSIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJleHRyYURhc2hOYW1lIiwic3R5bGVzIiwic3R5bGluZ1NhbXBsZSIsImdlbmVyaWMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib2JqZWN0T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBRTNDLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxLQUFiO0FBQW9CQyxJQUFBQTtBQUFwQixNQUE2QkgsS0FBbkM7QUFHQSxRQUFNLENBQUNJLElBQUQsRUFBT0MsT0FBUCxJQUFrQixxQkFBUyxFQUFULENBQXhCO0FBR0EsUUFBTUMsV0FBVyxHQUFHLHdCQUFZLFlBQU07QUFBQTs7QUFFcENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FILElBQUFBLE9BQU8sQ0FBRSxpQkFBZ0IsSUFBSUksSUFBSixFQUFXLEVBQTdCLENBQVA7QUFDRCxHQUptQixhQUlqQixFQUppQixDQUFwQjtBQU9BLHdCQUFVLFlBQU07QUFBQTs7QUFDZCxRQUFJTCxJQUFKLEVBQVVHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLElBQXRCO0FBQ1gsR0FGRCxhQUVHLENBQUNBLElBQUQsQ0FGSDtBQUtBLFFBQU1NLGFBQWEsR0FBRyxvQkFBUTtBQUFBOztBQUFBLFdBQU8sR0FBRU4sSUFBSyxLQUFkO0FBQUEsR0FBUixhQUE0QixDQUFDQSxJQUFELENBQTVCLENBQXRCO0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFLHlCQUFHSCxTQUFILEVBQWNVLDZCQUFPQyxhQUFyQixFQUFvQztBQUFFLE9BQUNDLHVCQUFRVixJQUFULEdBQWdCQTtBQUFsQixLQUFwQyxDQUFoQjtBQUErRSxJQUFBLEtBQUssRUFBRUQ7QUFBdEYsS0FDRTtBQUFRLElBQUEsT0FBTyxFQUFFSTtBQUFqQixLQUErQkYsSUFBSSxJQUFJLGFBQXZDLENBREYsRUFFRSx3Q0FGRixFQUdHTSxhQUhILENBREY7QUFPRDs7QUFFRFgsYUFBYSxDQUFDZSxZQUFkLEdBQTZCO0FBQzNCWCxFQUFBQSxJQUFJLEVBQUU7QUFEcUIsQ0FBN0I7QUFJQUosYUFBYSxDQUFDZ0IsU0FBZCxHQUEwQjtBQUN4QmQsRUFBQUEsU0FBUyxFQUFFZSxtQkFBVUMsTUFERztBQUV4QmQsRUFBQUEsSUFBSSxFQUFFYSxtQkFBVUUsSUFGUTtBQUd4QmhCLEVBQUFBLEtBQUssRUFBRWMsbUJBQVVHLFFBQVYsQ0FBbUJILG1CQUFVSSxTQUFWLENBQW9CLENBQUNKLG1CQUFVQyxNQUFYLEVBQW1CRCxtQkFBVUssTUFBN0IsQ0FBcEIsQ0FBbkI7QUFIaUIsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbXBvbmVudC1uYW1lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBnZW5lcmljIGZyb20gJy4uLy4uL3Njc3MvbW9kdWxlL2dlbmVyaWMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnROYW1lKHByb3BzKSB7XG4gIC8vIHByb3BzIHdpbGwgYWx3YXlzIGJlIHRoZSBmaXJzdCBsaW5lIGluIHRoZSBjb21wb25lbnRcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBoaWRlIH0gPSBwcm9wcztcblxuICAvLyBjb21wb25lbnQncyBzdGF0ZVxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gdXNlIENhbGxiYWNrIGZvciBhbGwgZXZlbnQgZnVuY3Rpb24gKG9uQ2xpY2ssIG1vdXNlb3ZlciwgZXRjKVxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBhbnkgcHJvY2VzcyBoZXJlXG4gICAgY29uc29sZS5sb2coJ0hhbmRsaW5nIGNsaWNrLi4uJyk7XG4gICAgc2V0TmFtZShgTGFzdCBDbGljayBvbiAke25ldyBEYXRlKCl9YCk7XG4gIH0sIFtdKTsgLy8gYXV0byBmaWxsIHdpdGggZXNsaW50IGhvb2tzIC0gcmlnaHQgY2xpY2sgRml4IEVTbGludCBQcm9ibGVtLlxuXG4gIC8vIFJlYWN0IExpZmUgQ3ljbGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmFtZSkgY29uc29sZS5sb2coJ05hbWU6ICcsIG5hbWUpO1xuICB9LCBbbmFtZV0pO1xuXG4gIC8vIGNhY2hlIGFueSBoZWF2eSBjb21wdW50YXRpb24gd2l0aCB1c2VNZW1vLiBXZSB1c2VkIHRvIHVzZSBnZXR0ZXIgaW4gY2xhc3MgY29tcG9uZW50LlxuICBjb25zdCBleHRyYURhc2hOYW1lID0gdXNlTWVtbygoKSA9PiBgJHtuYW1lfS0tLWAsIFtuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMuc3R5bGluZ1NhbXBsZSwgeyBbZ2VuZXJpYy5oaWRlXTogaGlkZSB9KX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PntuYW1lIHx8ICdDbGljayBIZXJlISd9PC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIHtleHRyYURhc2hOYW1lfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Db21wb25lbnROYW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGlkZTogZmFsc2UsXG59O1xuXG5Db21wb25lbnROYW1lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpLFxufTtcbiJdfQ==