import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../etc/classNames';
import { sizing } from '../../etc/constant';
import { LoadingSpinner } from '../Iconography/SVGIcons';
import Spinner from '../Spinner/Spinner';

const type = {
  BUTTON: 'button',
  LINK: 'a',
  SUBMIT: 'submit',
  RESET: 'reset',
};

class Button extends PureComponent {
  static propTypes = {
    /** 'button', 'a', 'submit', 'reset' */
    as: PropTypes.string,
    /** 'full width button */
    block: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    customLoader: PropTypes.node,
    disabled: PropTypes.bool,
    fixedWidth: PropTypes.string,
    href: PropTypes.string,
    info: PropTypes.bool,
    inverted: PropTypes.bool,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    negative: PropTypes.bool,
    onClick: PropTypes.func,
    positive: PropTypes.bool,
    primary: PropTypes.bool,
    referrerpolicy: PropTypes.string,
    rounded: PropTypes.bool,
    secondary: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    target: PropTypes.string,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    as: type.BUTTON,
    href: '',
    size: sizing.MD,
    color: 'blue',
    rounded: true,
    loadingText: 'loading',
    inverted: false,
  };

  get color() {
    const { color, primary, secondary, positive, negative, info, warning } = this.props;
    if (primary) return 'blue';
    else if (secondary) return 'purple';
    else if (positive) return 'green';
    else if (negative) return 'red';
    else if (info) return 'white';
    else if (warning) return 'orange';
    return color;
  }

  handleClick = event => {
    event.preventDefault();
    const { onClick, disabled, loading } = this.props;
    if (disabled || loading) return;
    if (onClick) onClick();
  };

  renderLoadingSpinner = () => {
    const { customLoader, loadingText, inverted } = this.props;
    return customLoader || <Spinner inverted={inverted} text={loadingText} />;
  };

  render() {
    const {
      as,
      className,
      size,
      rounded,
      children,
      disabled,
      style,
      loading,
      href,
      block,
      fixedWidth,
      target,
      referrerpolicy,
      inverted,
    } = this.props;
    const styling = classNames('accordium btn border-none', className, this.color, {
      xs: size === sizing.XS,
      sm: size === sizing.SM,
      md: size === sizing.MD,
      lg: size === sizing.LG,
      xl: size === sizing.XL,
      rounded,
      'not-rounded': !rounded,
      disabled,
      loading,
      block,
      inverted,
    });
    if (as === type.BUTTON || as === type.SUBMIT)
      return (
        // eslint-disable-next-line react/button-has-type
        <button type={as} className={styling} onClick={this.handleClick} style={Object.assign({}, style, { width: fixedWidth })}>
          {!loading ? children : this.renderLoadingSpinner()}
        </button>
      );
    return (
      <a
        href={href}
        className={styling}
        onClick={this.handleClick}
        style={Object.assign({}, style, { width: fixedWidth })}
        role="button"
        target={target}
        referrerpolicy={referrerpolicy}
      >
        {!loading ? children : this.renderLoadingSpinner()}
      </a>
    );
  }
}

export default Button;
