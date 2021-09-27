import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';

export default class TabItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  render() {
    const { className, style, children, selected, tabName, tabIcon, onClick } = this.props;
    return (
      <div
        role="button"
        className={classNames('tab-item', className, { selected })}
        style={style}
        onClick={onClick}
        onKeyDown={event => {
          if (event.keyCode === 13) {
            onClick();
          }
        }}
        tabIndex={0}
      >
        {tabIcon && tabIcon}
        {tabName && tabName}
      </div>
    );
  }
}
