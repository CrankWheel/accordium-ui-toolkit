import React from "react";

const SvgTriangleDown = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M0 5l6 6 6-6H0z" />
  </svg>
);

export default SvgTriangleDown;
