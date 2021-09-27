"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function createProps(propTypes, props, classNames) {
  var _this = this;

  const newProps = {};
  Object.keys(props).filter(function (key) {
    _newArrowCheck(this, _this);

    return key === 'children' || !propTypes[key];
  }.bind(this)).forEach(function (key) {
    _newArrowCheck(this, _this);

    return newProps[key] = props[key];
  }.bind(this));
  const className = classNames.filter(function (cn) {
    _newArrowCheck(this, _this);

    return cn;
  }.bind(this)).join(' ');
  return Object.assign({}, newProps, {
    className
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L0dyaWRTeXN0ZW0vY3JlYXRlUHJvcHMuanMiXSwibmFtZXMiOlsiY3JlYXRlUHJvcHMiLCJwcm9wVHlwZXMiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJuZXdQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwiY24iLCJqb2luIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxTQUFTQSxXQUFULENBQXFCQyxTQUFyQixFQUFnQ0MsS0FBaEMsRUFBdUNDLFVBQXZDLEVBQW1EO0FBQUE7O0FBQ2hFLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUVBQyxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWixFQUNHSyxNQURILENBQ1UsVUFBQUMsR0FBRztBQUFBOztBQUFBLFdBQUlBLEdBQUcsS0FBSyxVQUFSLElBQXNCLENBQUNQLFNBQVMsQ0FBQ08sR0FBRCxDQUFwQztBQUFBLEdBRGIsYUFFR0MsT0FGSCxDQUVXLFVBQUFELEdBQUc7QUFBQTs7QUFBQSxXQUFLSixRQUFRLENBQUNJLEdBQUQsQ0FBUixHQUFnQk4sS0FBSyxDQUFDTSxHQUFELENBQTFCO0FBQUEsR0FGZDtBQUlBLFFBQU1FLFNBQVMsR0FBR1AsVUFBVSxDQUFDSSxNQUFYLENBQWtCLFVBQUFJLEVBQUU7QUFBQTs7QUFBQSxXQUFJQSxFQUFKO0FBQUEsR0FBcEIsYUFBNEJDLElBQTVCLENBQWlDLEdBQWpDLENBQWxCO0FBQ0EsU0FBT1AsTUFBTSxDQUFDUSxNQUFQLENBQWMsRUFBZCxFQUFrQlQsUUFBbEIsRUFBNEI7QUFBRU0sSUFBQUE7QUFBRixHQUE1QixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9wcyhwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSB7XG4gIGNvbnN0IG5ld1Byb3BzID0ge307XG5cbiAgT2JqZWN0LmtleXMocHJvcHMpXG4gICAgLmZpbHRlcihrZXkgPT4ga2V5ID09PSAnY2hpbGRyZW4nIHx8ICFwcm9wVHlwZXNba2V5XSlcbiAgICAuZm9yRWFjaChrZXkgPT4gKG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldKSk7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcy5maWx0ZXIoY24gPT4gY24pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld1Byb3BzLCB7IGNsYXNzTmFtZSB9KTtcbn1cbiJdfQ==