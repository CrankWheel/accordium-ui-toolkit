import React from "react";

const SvgArrowBoth = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 20 16" {...props}>
    <title>{title}</title>
    <path d="M0 8l6-5v3h8V3l6 5-6 5v-3H6v3L0 8z" />
  </svg>
);

export default SvgArrowBoth;
