import React from "react";

const SvgPrimitiveDot = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 8 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"
    />
  </svg>
);

export default SvgPrimitiveDot;
