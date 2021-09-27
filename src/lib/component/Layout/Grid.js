import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    xl: PropTypes.number,
    xs: PropTypes.number,
  };

  static defaultProps = {
    xs: 12,
  };

  render() {
    const { children, className, xs, sm, md, lg, xl, style } = this.props;
    const styling = classNames(
      className,
      'col',
      `col-${xs}`,
      sm ? `sm-col sm-col-${sm}` : '',
      md ? `md-col md-col-${md}` : '',
      lg ? `lg-col lg-col-${lg}` : '',
      xl ? `lg-col lg-col-${xl}` : ''
    );
    return (
      <div className={styling} style={style}>
        {children}
      </div>
    );
  }
}
