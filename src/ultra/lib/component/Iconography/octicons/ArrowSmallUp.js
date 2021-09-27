import React from "react";

const SvgArrowSmallUp = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M3 5L0 9h2v2h2V9h2L3 5z" />
  </svg>
);

export default SvgArrowSmallUp;
