import React from "react";

const SvgArchive = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 14 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M13 2H1v2h12V2zM0 4a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z"
    />
  </svg>
);

export default SvgArchive;
