import React from 'react';
import cx from 'classnames';
import styles from './Sidebar.module.scss';

function ProductSwitch2(props) {
  const { title, children, mini, ...rest } = props;
  return (
    <div className={cx(styles.productSwitch2)} {...rest}>
      <div className={cx(styles.title, { [styles.collapsed]: mini })}>
        <span className="h4">{title}</span>
      </div>
      <div className={cx(styles.content)}>{children}</div>
    </div>
  );
}

export default ProductSwitch2;
