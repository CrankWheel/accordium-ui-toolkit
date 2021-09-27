import React, { Component } from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classNames from '../../etc/classNames';

export default class DropDownList extends Component {
  static defaultProps = {
    trigger: (
      <svg width="27" height="5.684" viewBox="0 0 27 5.684">
        <path
          id="dots-icon"
          d="M24.342,226.842A2.842,2.842,0,1,1,21.5,224,2.839,2.839,0,0,1,24.342,226.842ZM32.158,224A2.842,2.842,0,1,0,35,226.842,2.839,2.839,0,0,0,32.158,224Zm-21.316,0a2.842,2.842,0,1,0,2.842,2.842A2.839,2.839,0,0,0,10.842,224Z"
          transform="translate(-8 -224)"
          className="color"
        />
      </svg>
    ),
  };

  state = { show: false };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle = event => {
    event.stopPropagation();
    event.preventDefault();
    this.setState(
      prevState => ({ show: !prevState.show }),
      () => {
        const { show } = this.state;
        if (show) document.addEventListener('click', this.closeDropDown);
        else document.removeEventListener('click', this.closeDropDown);
      }
    );
  };

  closeDropDown = () => {
    if (this._isMounted)
      this.setState({ show: false }, () => {
        document.removeEventListener('click', this.closeDropDown);
      });
  };

  render() {
    const { show } = this.state;
    const { className, style, triggerClassName, trigger, children } = this.props;
    return (
      <div className={classNames('clearfix accordium dropdown-list', className)} style={style}>
        <button
          onClick={event => this.toggle(event)}
          className={classNames('dropdown-list-trigger', triggerClassName)}
          aria-expanded={show}
          aria-haspopup="listbox"
        >
          {trigger}
        </button>
        <Transition native items={show} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
          {show =>
            show &&
            (props => (
              <animated.ul className="dropdown-list-items p0 m0" style={props} role="listbox" tabIndex="-1">
                {children}️
              </animated.ul>
            ))
          }
        </Transition>
      </div>
    );
  }
}
