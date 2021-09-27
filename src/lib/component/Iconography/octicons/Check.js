import React from "react";

const SvgCheck = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
  </svg>
);

export default SvgCheck;
