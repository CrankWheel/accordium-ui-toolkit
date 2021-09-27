import React from "react";

const SvgArrowSmallRight = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M6 8L2 5v2H0v2h2v2l4-3z" />
  </svg>
);

export default SvgArrowSmallRight;
