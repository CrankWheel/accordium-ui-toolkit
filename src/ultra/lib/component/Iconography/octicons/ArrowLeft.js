import React from "react";

const SvgArrowLeft = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z" />
  </svg>
);

export default SvgArrowLeft;
