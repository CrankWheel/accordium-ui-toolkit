import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class Topbar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  static defaultProps = {
    contentMaxWidth: '100%',
  };

  render() {
    const { className, style, children, contentMaxWidth } = this.props;
    return (
      <div className={classNames('clearfix accordium topbar', className)} style={style}>
        <div className={classNames('topbar-content')} style={{ maxWidth: contentMaxWidth }}>
          {children}
        </div>
      </div>
    );
  }
}
