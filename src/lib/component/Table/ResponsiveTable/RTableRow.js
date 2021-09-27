import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class RTableRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  static defaultProps = {};

  render() {
    const { className, style, children, ...rest } = this.props;
    const styling = classNames('table-content-row', className, {});
    return (
      <div role="row" className={styling} style={style} {...rest}>
        {children}
      </div>
    );
  }
}
