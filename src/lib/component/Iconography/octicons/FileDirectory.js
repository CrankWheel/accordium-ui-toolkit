import React from "react";

const SvgFileDirectory = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 14 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"
    />
  </svg>
);

export default SvgFileDirectory;
