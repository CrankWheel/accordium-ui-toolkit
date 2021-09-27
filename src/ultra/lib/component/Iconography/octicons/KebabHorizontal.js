import React from "react";

const SvgKebabHorizontal = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 13 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
    />
  </svg>
);

export default SvgKebabHorizontal;
