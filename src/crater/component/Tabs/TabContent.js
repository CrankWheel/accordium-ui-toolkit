import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Tabs.module.scss';

class TabContent extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    hidden: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
    className: '',
    hidden: true,
  };

  render() {
    const className = classnames(
      styles.tab,
      {
        [styles.active]: this.props.active,
      },
      this.props.className
    );

    return (
      <section className={className} role="tabpanel" aria-expanded={this.props.hidden}>
        {this.props.children}
      </section>
    );
  }
}

export default TabContent;
