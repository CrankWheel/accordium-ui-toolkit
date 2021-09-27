import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Tabs.module.scss';

class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    activeClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    icon: PropTypes.node,
    index: PropTypes.number,
    label: PropTypes.node,
    onActive: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    className: '',
    disabled: false,
    hidden: false,
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active && this.props.onActive) {
      this.props.onActive();
    }
  }

  handleClick = event => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(event, this.props.index);
    }
  };

  render() {
    const {
      index,
      onActive, // eslint-disable-line
      active,
      activeClassName,
      children,
      className,
      disabled,
      hidden,
      label,
      icon,
      ...other
    } = this.props;
    const _className = classnames(
      styles.label,
      {
        [styles.active]: active,
        [styles.hidden]: hidden,
        [styles.withText]: label,
        [styles.withIcon]: icon,
        [styles.disabled]: disabled,
        [activeClassName]: active,
      },
      className
    );

    return (
      <div {...other} data-react-toolbox="tab" role="tab" tabIndex="0" className={_className} onClick={this.handleClick}>
        {/* {icon && <FontIcon className={styles.icon} value={icon} />} */}
        {label}
        {children}
      </div>
    );
  }
}

export default Tab;
