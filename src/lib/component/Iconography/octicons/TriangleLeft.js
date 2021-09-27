import React from "react";

const SvgTriangleLeft = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M6 2L0 8l6 6V2z" />
  </svg>
);

export default SvgTriangleLeft;
