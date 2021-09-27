import React from "react";

const SvgDeviceCameraVideo = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z"
    />
  </svg>
);

export default SvgDeviceCameraVideo;
