import React from "react";

const SvgHorizontalRule = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 10 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z"
    />
  </svg>
);

export default SvgHorizontalRule;
