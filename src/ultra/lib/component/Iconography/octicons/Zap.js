import React from "react";

const SvgZap = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z" />
  </svg>
);

export default SvgZap;
