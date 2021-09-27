import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './MiniUserDetail.module.scss';

const MiniUserDetail = ({ className, avatar, keyWrapperClassName, valueWrapperClassName, name, value, avatarRight, ...other }) => {
  const renderAvatar = useMemo(() => {
    if (avatarRight) {
      return (
        <>
          <div className={cx(styles.detailContainer, { [styles.withAvatar]: avatar, [styles.leftAvatar]: avatarRight })}>
            <div className={cx(keyWrapperClassName, styles.name)}>{name}</div>
            <div className={cx(valueWrapperClassName, styles.details)}>{value}</div>
          </div>
          {avatar}
        </>
      );
    }
    return (
      <>
        {avatar}
        <div className={cx(styles.detailContainer, { [styles.withAvatar]: avatar })}>
          <div className={cx(keyWrapperClassName, styles.name)}>{name}</div>
          <div className={cx(valueWrapperClassName, styles.details)}>{value}</div>
        </div>
      </>
    );
  }, [avatar, avatarRight, keyWrapperClassName, name, value, valueWrapperClassName]);

  return (
    <div className={cx(className, styles.miniUserDetail)} {...other}>
      {renderAvatar}
    </div>
  );
};

MiniUserDetail.propTypes = {
  className: PropTypes.string,
  keyWrapperClassName: PropTypes.string,
  valueWrapperClassName: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
  avatarRight: PropTypes.bool,
};

MiniUserDetail.defaultProps = {
  className: '',
  keyWrapperClassName: '',
  valueWrapperClassName: '',
  name: '',
  value: '',
  avatarRight: false,
};

export default MiniUserDetail;
