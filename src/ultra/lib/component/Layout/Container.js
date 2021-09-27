import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export const textAlignment = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
};

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    textAlign: PropTypes.string,
    fluid: PropTypes.bool,
  };

  render() {
    const { className, style, children, textAlign, fluid } = this.props;
    return (
      <div
        className={classNames('clearfix accordium grid-container', className, {
          'left-align': textAlign === textAlignment.LEFT,
          center: textAlign === textAlignment.CENTER,
          'right-align': textAlign === textAlignment.RIGHT,
          justify: textAlign === textAlignment.JUSTIFY,
          fluid,
        })}
        style={style}
      >
        {children}
      </div>
    );
  }
}
