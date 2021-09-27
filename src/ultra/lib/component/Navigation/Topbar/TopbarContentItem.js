import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class TopbarContentItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  render() {
    const { className, style, children } = this.props;
    return (
      <div className={classNames('topbar-content-item', className)} style={style}>
        {children}
      </div>
    );
  }
}
