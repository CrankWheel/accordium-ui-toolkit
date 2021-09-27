import React from "react";

const SvgChevronRight = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 8 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" />
  </svg>
);

export default SvgChevronRight;
