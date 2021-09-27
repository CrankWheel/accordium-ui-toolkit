import React from "react";

const SvgTriangleUp = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M12 11L6 5l-6 6h12z" />
  </svg>
);

export default SvgTriangleUp;
