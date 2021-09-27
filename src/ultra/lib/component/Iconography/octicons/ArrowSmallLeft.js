import React from "react";

const SvgArrowSmallLeft = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M4 7V5L0 8l4 3V9h2V7H4z" />
  </svg>
);

export default SvgArrowSmallLeft;
