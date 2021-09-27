import React from "react";

const SvgArrowUp = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M5 3L0 9h3v4h4V9h3L5 3z" />
  </svg>
);

export default SvgArrowUp;
