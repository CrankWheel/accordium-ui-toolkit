import React from "react";

const SvgSignOut = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 16 17" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"
    />
  </svg>
);

export default SvgSignOut;