import React, { memo } from 'react';

const LoadingSpinner = memo(() => (
  <svg className="spinner" width="14px" height="14px" viewBox="0 0 16 16">
    <circle className="path" fill="none" strokeWidth="2" strokeLinecap="round" cx="8" cy="8" r="7" />
  </svg>
));

export { LoadingSpinner };
