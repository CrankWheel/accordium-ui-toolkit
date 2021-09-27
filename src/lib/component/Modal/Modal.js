import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { animated, Transition } from 'react-spring/renderprops';
import classNames from '../../etc/classNames';
import { sizing } from '../../etc/constant';
import * as noScroll from '../../etc/noScroll';

export default class Modal extends Component {
  static defaultProps = {
    overlayProps: {},
    dialogId: 'react-aria-modal-dialog',
    overlayClickExits: true,
    escapeExits: true,
    scrollDisabled: true,
    show: false,
    size: sizing.MD,
    enableCloseButton: false,
    scrolling: false,
    animationConfig: {
      duration: 100,
    },
    parent: document.body,
  };
  /*
  componentWillMount() {
    if (!this.props.titleText && !this.props.titleId) {
      throw new Error('react-aria-modal instances should have a `titleText` or `titleId`');
    }
  }
  */

  componentDidMount() {
    const { show, onEnter, escapeExits, scrollDisabled, parent } = this.props;
    if (show) {
      const el = parent;
      if (el.classList) el.classList.add('blur');
      else el.className += ' blur';
    }

    if (onEnter) {
      onEnter();
    }

    if (escapeExits) {
      document.addEventListener('keydown', this.checkDocumentKeyDown);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      if (this.props.show) {
        const el = this.props.parent;
        if (el.classList) el.classList.add('blur');
        else el.className += ' blur';
        noScroll.on();
      }
    } else if (prevProps.show && !this.props.show) {
      const el = this.props.parent;
      if (el.classList) el.classList.remove('blur');
      else el.className = el.className.replace(new RegExp(`(^|\\b)${'blur'.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
      noScroll.off();
    }
  }

  componentWillUnmount() {
    const el = this.props.parent;
    if (el.classList) el.classList.remove('blur');
    else el.className = el.className.replace(new RegExp(`(^|\\b)${'blur'.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    noScroll.off();
    document.removeEventListener('keydown', this.checkDocumentKeyDown);
  }

  onOverlayClick = event => {
    if (
      // If the click is on the scrollbar we don't want to close the modal.
      event.pageX > event.target.clientWidth ||
      event.pageY > event.target.clientHeight
    )
      return;
    this.exit();
  };

  checkDocumentKeyDown = event => {
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      this.exit();
    }
  };

  exit = () => {
    const { onExit } = this.props;
    if (onExit) onExit();
  };

  render() {
    const {
      className,
      style,
      overlayClassName,
      overlayStyle,
      children,
      size,
      enableCloseButton,
      scrolling,
      animationConfig,
      parent,
    } = this.props;
    return (
      <Transition items={this.props.show} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }} config={animationConfig}>
        {show =>
          show &&
          (props =>
            ReactDOM.createPortal(
              <animated.div className={classNames('accordium modal-wrapper', { scrolling })} style={props}>
                <div
                  className={classNames('accordium modal-overlay', overlayClassName)}
                  style={overlayStyle}
                  onClick={this.onOverlayClick}
                />
                <div
                  className={classNames('accordium modal small', className, {
                    xs: size === sizing.XS,
                    sm: size === sizing.SM,
                    md: size === sizing.MD,
                    lg: size === sizing.LG || size === sizing.XL,
                  })}
                  style={style}
                >
                  {enableCloseButton && (
                    <button type="button" className="modal-close" onClick={this.exit}>
                      ×
                    </button>
                  )}
                  {children}
                </div>
              </animated.div>,
              parent
            ))
        }
      </Transition>
    );
  }
}
