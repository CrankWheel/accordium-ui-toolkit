import React from "react";

const SvgArrowSmallDown = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M4 7V5H2v2H0l3 4 3-4H4z" />
  </svg>
);

export default SvgArrowSmallDown;
