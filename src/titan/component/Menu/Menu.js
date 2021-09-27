import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import events from '../../util/events';
import { getViewport } from '../../util';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'topLeft',
  TOP_RIGHT: 'topRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_RIGHT: 'bottomRight',
};

/*
*
POSITION AUTO IS STILL BREAKING
* TODO: Fix!
*/
export default function Menu(props) {
  const { className, active, position, outline, children, selectable, selected, setActive, onSelect, onHide, onShow } = props;
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const menuNode = useRef(null);
  const rootRef = useRef(null);

  const outlineStyle = { width: dimension.width, height: dimension.height };
  const menuClassName = cx(
    [styles.menu, styles[position]],
    {
      [styles.active]: active,
    },
    className
  );

  const menuStyle = useMemo(() => {
    const { width, height } = dimension;
    if (position !== POSITION.STATIC) {
      if (active) return { clip: `rect(0 ${width}px ${height}px 0)` };
      if (position === POSITION.TOP_RIGHT) return { clip: `rect(0 ${width}px 0 ${width}px)` };
      if (position === POSITION.BOTTOM_RIGHT) return { clip: `rect(${height}px ${width}px ${height}px ${width}px)` };
      if (position === POSITION.BOTTOM_LEFT) return { clip: `rect(${height}px 0 ${height}px 0)` };
      if (position === POSITION.TOP_LEFT) return { clip: 'rect(0 0 0 0)' };
    }
    return undefined;
  }, [active, dimension, position]);

  const rootStyle = useMemo(() => {
    return position !== POSITION.STATIC ? { width: dimension.width, height: dimension.height } : undefined;
  }, [dimension.height, dimension.width, position]);

  const handleSelect = useCallback(
    (item, event) => {
      const { value, onClick } = item.props;
      if (onClick) event.persist();
      setActive(false);
      if (onClick) onClick(event);
      if (onSelect) onSelect(value);
    },
    [onSelect, setActive]
  );

  const positionTimeoutHandle = useRef(0);
  useEffect(() => {
    positionTimeoutHandle.current = setTimeout(() => {
      const { width, height } = menuNode.current.getBoundingClientRect();
      setDimension({ width, height });
    });
  }, []);

  const handleDocumentClick = useCallback(
    event => {
      if (active && !events.targetIsDescendant(event, rootRef.current)) {
        setActive(false);
      }
    },
    [active, setActive]
  );

  const show = useCallback(() => {
    const { width, height } = menuNode.current.getBoundingClientRect();
    setDimension({ width, height });
    setActive(true);
  }, [setActive]);

  const hide = useCallback(() => {
    setActive(false);
  }, [setActive]);

  const calculatePosition = useMemo(() => {
    const parentNode = rootRef.current;
    if (!parentNode) return undefined;
    const { top, left, height, width } = parentNode.getBoundingClientRect();
    const { height: wh, width: ww } = getViewport();
    const toTop = top < wh / 2 - height / 2;
    const toLeft = left < ww / 2 - width / 2;
    return `${toTop ? 'top' : 'bottom'}${toLeft ? 'Left' : 'Right'}`;
  }, []);

  const activateTimeoutHandle = useRef(0);

  useEffect(() => {
    if (!active) {
      if (onHide) onHide();
      events.removeEventsFromDocument({
        click: handleDocumentClick,
        touchstart: handleDocumentClick,
      });
      hide();
    } else if (active) {
      if (onShow) onShow();
      events.addEventsToDocument({
        click: handleDocumentClick,
        touchstart: handleDocumentClick,
      });
      if (position === POSITION.AUTO) {
        if (position !== calculatePosition) {
          setActive(false);
          activateTimeoutHandle.current = setTimeout(() => {
            show();
          }, 20);
        } else {
          show();
        }
      } else {
        show();
      }
    }
    return () => {
      if (active) {
        events.removeEventsFromDocument({
          click: handleDocumentClick,
          touchstart: handleDocumentClick,
        });
      }
      clearTimeout(positionTimeoutHandle.current);
      clearTimeout(activateTimeoutHandle.current);
    };
  }, [active, calculatePosition, handleDocumentClick, hide, onHide, onShow, position, setActive, show]);

  return (
    <div data-react-toolbox="menu" className={menuClassName} style={rootStyle} ref={rootRef}>
      {outline ? <div className={styles.outline} style={outlineStyle} /> : null}
      <ul ref={menuNode} className={styles.menuInner} style={menuStyle}>
        {React.Children.map(children, item => {
          if (!item) return item;
          if (item.type === MenuItem) {
            return React.cloneElement(item, {
              selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
              // TODO: double check
              onClick: event => handleSelect(item, event),
            });
          }
          return React.cloneElement(item);
        })}
      </ul>
    </div>
  );
}

Menu.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onSelect: PropTypes.func,
  onShow: PropTypes.func,
  outline: PropTypes.bool,
  position: PropTypes.oneOf(Object.keys(POSITION).map(key => POSITION[key])),
  selectable: PropTypes.bool,
  selected: PropTypes.node,
  setActive: PropTypes.func,
};

Menu.defaultProps = {
  active: false,
  outline: true,
  position: POSITION.STATIC,
  selectable: true,
};
