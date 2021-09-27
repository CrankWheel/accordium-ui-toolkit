import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import classNames from '../../../etc/classNames';

export default class RTableHeaderColumn extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  static defaultProps = { xs: 12 };

  render() {
    const { className, style, children, xs, sm, md, lg, xl, ...rest } = this.props;
    const styling = classNames(
      'table-header-column',
      className,
      'col',
      `col-${xs}`,
      sm ? `sm-col sm-col-${sm}` : '',
      md ? `md-col md-col-${md}` : '',
      lg ? `lg-col lg-col-${lg}` : '',
      xl ? `lg-col lg-col-${xl}` : '',
      {}
    );
    return (
      <span role="columnheader" className={styling} style={style} {...rest}>
        {children || <Fragment>&nbsp;</Fragment>}
      </span>
    );
  }
}
