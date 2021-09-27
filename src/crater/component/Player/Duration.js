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

function getTimeUnit(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return hh > 1 ? 'hours' : 'hour';
  }
  if (mm) {
    return mm > 1 ? 'minutes' : 'minute';
  }
  return ss > 1 ? 'seconds' : 'second';
}

const Duration = ({ className, seconds, showTimeUnit = false }) => (
  <>
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
    {showTimeUnit ? <span>&nbsp;{getTimeUnit(seconds)}</span> : null}
  </>
);

Duration.format = format;
Duration.pad = pad;

export default Duration;
