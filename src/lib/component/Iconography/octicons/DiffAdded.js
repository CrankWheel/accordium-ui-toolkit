import React from "react";

const SvgDiffAdded = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 14 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z"
    />
  </svg>
);

export default SvgDiffAdded;
