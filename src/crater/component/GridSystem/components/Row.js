/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import getClass from '../classNames';
import createProps from '../createProps';
import { ViewportSizeType } from '../types';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const propTypes = {
  reverse: PropTypes.bool,
  compact: PropTypes.bool,
  noGutterCompensation: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
};

function getRowClassNames(props) {
  const modificators = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modificators.push(getClass('reverse'));
  }

  if (props.compact) {
    modificators.push(getClass('compact'));
  }

  if (props.noGutterCompensation) {
    modificators.push(getClass('noGutterCompensation'));
  }

  return modificators;
}

export function getRowProps(props) {
  return createProps(propTypes, props, getRowClassNames(props));
}

export default function Row(props) {
  const { tagName } = props;
  return React.createElement(tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;
