import React, { useState, useCallback, useEffect, useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.scss';

const OvalSvg = () => (
  <svg width="330px" height="330px" viewBox="0 0 330 330" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.1105363%" id="linearGradient-1">
        <stop stopColor="#FFFFFF" stopOpacity="0.997760052" offset="0%" />
        <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
      </linearGradient>
    </defs>
    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-2">
        <circle id="Oval" stroke="url(#linearGradient-1)" strokeWidth="57" opacity="0.09" cx="165.5" cy="165.5" r="121.5" />
        <rect id="Rectangle" x="0" y="0" width="330" height="330" />
      </g>
    </g>
  </svg>
);

export default function Sidebar(props) {
  const { className, children } = props;

  return (
    <div className={cx(styles.sidebar, className)}>
      <div className={cx(styles.content)}>{children}</div>
      <div className={styles.oval}>
        <OvalSvg />
      </div>
    </div>
  );
}

Sidebar.defaultProps = {};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
