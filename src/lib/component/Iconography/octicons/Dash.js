import React from "react";

const SvgDash = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 8 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M0 7v2h8V7H0z" />
  </svg>
);

export default SvgDash;
