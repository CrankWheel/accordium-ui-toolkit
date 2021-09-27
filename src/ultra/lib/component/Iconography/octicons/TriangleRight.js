import React from "react";

const SvgTriangleRight = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M0 14l6-6-6-6v12z" />
  </svg>
);

export default SvgTriangleRight;
