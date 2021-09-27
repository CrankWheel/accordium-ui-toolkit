import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.timeout = undefined;
    this.innerRef = React.createRef();
    // Defaults the dropdown to be closed
    if (props.open) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false,
      };
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { shouldOpenOnNextCycle, shouldSwitchAutoOnNextCycle } = this.state;
    if (shouldOpenOnNextCycle) {
      this.continueOpenCollapsible();
    }

    if (prevState.height === 'auto' && shouldSwitchAutoOnNextCycle === true) {
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        // Set small timeout to ensure a true re-render
        this.setState({
          height: 0,
          overflow: 'hidden',
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
        });
      }, 50);
    }

    // If there has been a change in the open prop (controlled by accordion)
    const { onClosing, open, onOpening } = this.props;
    if (prevProps.open !== open) {
      if (open === true) {
        this.openCollapsible();
        onOpening();
      } else {
        this.closeCollapsible();
        onClosing();
      }
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  continueOpenCollapsible = () => {
    const { easing, transitionTime } = this.props;
    this.setState({
      height: this.innerRef.current.scrollHeight,
      transition: `height ${transitionTime}ms ${easing}`,
      isClosed: false,
      hasBeenOpened: true,
      inTransition: true,
      shouldOpenOnNextCycle: false,
    });
  };

  handleTriggerClick = event => {
    const { onClosing, triggerDisabled, onOpening, handleTriggerClick: handleTriggerClick1, accordionPosition } = this.props;
    if (triggerDisabled) {
      return;
    }

    event.preventDefault();

    if (handleTriggerClick1) {
      handleTriggerClick1(accordionPosition);
    } else {
      const { isClosed } = this.state;
      if (isClosed === true) {
        this.openCollapsible();
        onOpening();
      } else {
        this.closeCollapsible();
        onClosing();
      }
    }
  };

  handleTransitionEnd = () => {
    // Switch to height auto to make the container responsive
    const { isClosed } = this.state;
    const { onOpen, onClose, overflowWhenOpen } = this.props;
    if (!isClosed) {
      this.setState({ height: 'auto', overflow: overflowWhenOpen, inTransition: false });
      onOpen();
    } else {
      this.setState({ inTransition: false });
      onClose();
    }
  };

  closeCollapsible() {
    const { easing, transitionTime, transitionCloseTime } = this.props;
    this.setState({
      shouldSwitchAutoOnNextCycle: true,
      height: this.innerRef.current.scrollHeight,
      // eslint-disable-next-line no-unneeded-ternary
      transition: `height ${transitionCloseTime ? transitionCloseTime : transitionTime}ms ${easing}`,
      inTransition: true,
    });
  }

  openCollapsible() {
    this.setState({
      inTransition: true,
      shouldOpenOnNextCycle: true,
    });
  }

  renderNonClickableTriggerElement() {
    const { triggerSibling, classParentString } = this.props;
    if (triggerSibling && typeof triggerSibling === 'string') {
      return <span className={`${classParentString}__trigger-sibling`}>{triggerSibling}</span>;
    } else if (triggerSibling) {
      return <this.props.triggerSibling />;
    }

    return null;
  }

  render() {
    const { inTransition, height, isClosed, transition, overflow, hasBeenOpened } = this.state;
    const dropdownStyle = {
      height,
      WebkitTransition: transition,
      msTransition: transition,
      transition,
      overflow,
    };

    const toggleClassName = isClosed ? 'is-closed' : 'is-open';
    const {
      lazyRender,
      classParentString,
      classNameClosed,
      children: children1,
      triggerStyle,
      trigger: trigger1,
      triggerWhenOpen,
      triggerOpenedClassName,
      triggerDisabled,
      contentOuterClassName,
      triggerTagName,
      classNameOpen,
      triggerClassName,
      tabIndex,
      contentInnerClassName,
    } = this.props;
    const disabledClass = triggerDisabled ? 'is-disabled' : '';

    // If user wants different text when tray is open
    const trigger = isClosed === false && triggerWhenOpen !== undefined ? triggerWhenOpen : trigger1;

    // If user wants a trigger wrapping element different than 'span'
    const TriggerElement = triggerTagName;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    const children = lazyRender && !hasBeenOpened && isClosed && !inTransition ? null : children1;

    const { className } = this.props;
    const openedClassName = classNameOpen;
    const closedClassName = classNameClosed;

    // Construct CSS classes strings
    const triggerClassString = `${classParentString}__trigger ${toggleClassName} ${disabledClass} ${
      isClosed ? triggerClassName : triggerOpenedClassName
    }`;
    const outerClassString = `${classParentString}__contentOuter ${contentOuterClassName}`;
    const innerClassString = `${classParentString}__contentInner ${contentInnerClassName}`;

    return (
      <div className={`${classParentString} ${className} ${isClosed ? closedClassName : openedClassName}`}>
        <TriggerElement
          className={triggerClassString.trim()}
          onClick={this.handleTriggerClick}
          style={triggerStyle && triggerStyle}
          onKeyPress={event => {
            const { key } = event;
            if (key === ' ' || key === 'Enter') {
              this.handleTriggerClick(event);
            }
          }}
          tabIndex={tabIndex && tabIndex}
        >
          {trigger}
        </TriggerElement>

        {this.renderNonClickableTriggerElement()}

        <div className={outerClassString.trim()} style={dropdownStyle} onTransitionEnd={this.handleTransitionEnd} ref={this.innerRef}>
          <div className={innerClassString.trim()}>{children}</div>
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  accordionPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  classNameClosed: PropTypes.string,
  classNameOpen: PropTypes.string,
  classParentString: PropTypes.string,
  contentInnerClassName: PropTypes.string,
  contentOuterClassName: PropTypes.string,
  easing: PropTypes.string,
  handleTriggerClick: PropTypes.func,
  lazyRender: PropTypes.bool,
  onClose: PropTypes.func,
  onClosing: PropTypes.func,
  onOpen: PropTypes.func,
  onOpening: PropTypes.func,
  open: PropTypes.bool,
  overflowWhenOpen: PropTypes.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
  tabIndex: PropTypes.number,
  transitionCloseTime: PropTypes.number,
  transitionTime: PropTypes.number,
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  triggerClassName: PropTypes.string,
  triggerDisabled: PropTypes.bool,
  triggerOpenedClassName: PropTypes.string,
  triggerSibling: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  triggerStyle: PropTypes.shape,
  triggerTagName: PropTypes.string,
  triggerWhenOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Collapsible.defaultProps = {
  className: '',
  classNameClosed: '',
  classNameOpen: '',
  classParentString: 'Collapsible',
  contentInnerClassName: '',
  contentOuterClassName: '',
  easing: 'linear',
  lazyRender: false,
  onClose: () => {},
  onClosing: () => {},
  onOpen: () => {},
  onOpening: () => {},
  open: false,
  overflowWhenOpen: 'hidden',
  tabIndex: null,
  transitionCloseTime: null,
  transitionTime: 400,
  triggerClassName: '',
  triggerDisabled: false,
  triggerOpenedClassName: '',
  triggerSibling: null,
  triggerStyle: null,
  triggerTagName: 'span',
};
