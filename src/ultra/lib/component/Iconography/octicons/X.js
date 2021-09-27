import React from "react";

const SvgX = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
    />
  </svg>
);

export default SvgX;
