import React from "react";

const SvgGraph = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"
    />
  </svg>
);

export default SvgGraph;
