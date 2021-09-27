import React from "react";

const SvgPlusSmall = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 7 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" />
  </svg>
);

export default SvgPlusSmall;
