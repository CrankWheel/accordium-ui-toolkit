import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';
import { LoadingSpinner } from '../Iconography/SVGIcons';

export default class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    inverted: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    text: PropTypes.string,
  };

  static defaultProps = {
    inverted: false,
  };

  render() {
    const { className, style, text, inverted, ...rest } = this.props;
    const styling = classNames('accordium loading-spinner', className, { inverted });
    return (
      <div className={styling} style={style} {...rest}>
        <span role="img" className={styling} style={style} {...rest}>
          <LoadingSpinner />
          {text && ` ${text}`}
        </span>
      </div>
    );
  }
}
