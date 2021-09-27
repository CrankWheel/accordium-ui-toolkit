import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { animated, Transition } from 'react-spring/renderprops';
import classNames from '../../etc/classNames';
import TabItem from './TabItem';
import TabContent from './TabContent';

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  static defaultProps = { vertical: false, tabs: [] };

  state = {
    activeIndex: 0,
  };

  handleOnClick = selectedIndex => {
    this.setState({ activeIndex: selectedIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { className, style, tabs, vertical } = this.props;
    return (
      <div className={classNames('accordium tabs', className, { vertical })} style={style}>
        <div className="tabs-wrapper">
          {tabs.map((tab, index) => (
            <TabItem
              key={`item_${tab.id}`}
              selected={index === activeIndex}
              tabName={tab.name}
              tabIcon={tab.icon}
              onClick={() => this.handleOnClick(index)}
            />
          ))}
        </div>
        <div className="content-wrapper">
          {tabs.map((tab, index) => {
            const show = index === activeIndex;
            if (show)
              return (
                <Transition
                  key={`content_${tab.id}`}
                  native
                  items={show}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {show =>
                    show &&
                    (props => (
                      <animated.div className="tab-content" style={props}>
                        {tab.content}️
                      </animated.div>
                    ))
                  }
                </Transition>
              );

            return null;
          })}
        </div>
      </div>
    );
  }
}
