import React from "react";

const SvgItalic = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 6 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"
    />
  </svg>
);

export default SvgItalic;
