import React from "react";

const SvgChevronUp = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"
    />
  </svg>
);

export default SvgChevronUp;
