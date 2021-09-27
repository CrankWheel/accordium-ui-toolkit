import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class ContentPage extends Component {
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
      <div className={classNames('clearfix accordium page-layout', className)} style={style}>
        <div className={classNames('page-content')} style={{ maxWidth: contentMaxWidth }}>
          {children}
        </div>
      </div>
    );
  }
}
