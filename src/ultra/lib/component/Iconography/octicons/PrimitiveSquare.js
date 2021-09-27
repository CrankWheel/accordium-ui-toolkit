import React from "react";

const SvgPrimitiveSquare = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 8 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M8 12H0V4h8v8z" />
  </svg>
);

export default SvgPrimitiveSquare;
