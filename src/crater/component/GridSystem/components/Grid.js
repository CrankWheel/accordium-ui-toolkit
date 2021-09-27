import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../createProps';
import getClass from '../classNames';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.node,
};

export default function Grid(props) {
  const { fluid, className, tagName } = props;
  const containerClass = getClass(fluid ? 'container-fluid' : 'container');
  const classNames = [className, containerClass];

  return React.createElement(tagName || 'div', createProps(propTypes, props, classNames));
}

Grid.propTypes = propTypes;
