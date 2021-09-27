import React from "react";

const SvgArrowDown = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M7 7V3H3v4H0l5 6 5-6H7z" />
  </svg>
);

export default SvgArrowDown;
