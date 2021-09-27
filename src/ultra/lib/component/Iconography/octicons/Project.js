import React from "react";

const SvgProject = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 15 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
    />
  </svg>
);

export default SvgProject;
