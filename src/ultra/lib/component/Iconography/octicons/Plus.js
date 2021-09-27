import React from "react";

const SvgPlus = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" />
  </svg>
);

export default SvgPlus;
