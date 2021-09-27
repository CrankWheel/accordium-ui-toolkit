import React from "react";

const SvgArrowRight = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z" />
  </svg>
);

export default SvgArrowRight;
