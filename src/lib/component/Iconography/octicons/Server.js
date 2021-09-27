import React from 'react';

const SvgServer = ({ title, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      d="M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z"
    />
  </svg>
);

export default SvgServer;
