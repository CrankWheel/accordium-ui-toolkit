import React from 'react';
import cx from 'classnames';
import styles from './Sidebar.module.scss';
import { Button } from '../Button';
import { Icon } from '../Iconography';

export default function MiniTrigger(props) {
  const { className, mini, toggle, ...rest } = props;
  return (
    <Button
      iconOnly
      className={cx(className, styles.miniTrigger, { [styles.miniSidebar]: mini })}
      {...rest}
      onClick={toggle}
      icon={<Icon src="expand" verticalAlign="middle" className={styles.icon} />}
      aria-label={mini ? 'Expand' : 'Collapse'}
    />
  );
}
