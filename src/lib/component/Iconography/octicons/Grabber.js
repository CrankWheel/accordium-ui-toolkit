import React from "react";

const SvgGrabber = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 8 16" {...props}>
    <title>{title}</title>
    <path fillRule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" />
  </svg>
);

export default SvgGrabber;
