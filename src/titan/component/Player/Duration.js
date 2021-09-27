import React from 'react';

function pad(string) {
  return `0${string}`.slice(-2);
}

function format(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

const Duration = ({ className, seconds }) => (
  <time dateTime={`P${Math.round(seconds)}S`} className={className}>
    {format(seconds)}
  </time>
);

Duration.format = format;
Duration.pad = pad;

export default Duration;
