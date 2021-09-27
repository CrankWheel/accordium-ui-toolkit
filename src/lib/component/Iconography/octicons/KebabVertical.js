import React from "react";

const SvgKebabVertical = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 3 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    />
  </svg>
);

export default SvgKebabVertical;
