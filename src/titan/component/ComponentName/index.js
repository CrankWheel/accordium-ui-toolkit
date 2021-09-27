import React, { useState, useCallback, useEffect, useMemo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './component-name.module.scss';
import generic from '../../scss/module/generic.module.scss';

export default function ComponentName(props) {
  // props will always be the first line in the component
  const { className, style, hide } = props;

  // component's state
  const [name, setName] = useState('');

  // use Callback for all event function (onClick, mouseover, etc)
  const handleClick = useCallback(() => {
    // any process here
    console.log('Handling click...');
    setName(`Last Click on ${new Date()}`);
  }, []); // auto fill with eslint hooks - right click Fix ESlint Problem.

  // React Life Cycle
  useEffect(() => {
    if (name) console.log('Name: ', name);
  }, [name]);

  // cache any heavy compuntation with useMemo. We used to use getter in class component.
  const extraDashName = useMemo(() => `${name}---`, [name]);

  return (
    <div className={cx(className, styles.stylingSample, { [generic.hide]: hide })} style={style}>
      <button onClick={handleClick}>{name || 'Click Here!'}</button>
      <br />
      {extraDashName}
    </div>
  );
}

ComponentName.defaultProps = {
  hide: false,
};

ComponentName.propTypes = {
  className: PropTypes.string,
  hide: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
