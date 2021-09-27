import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './avatar.module.scss';
import { getInitials } from '../../util';

export default function Avatar({ alt, children, className, cover, icon, svg, image, title, small, large, ...other }) {
  const styledIcon = useMemo(() => {
    if (icon) {
      return React.cloneElement(icon, {
        className: cx(icon.props.className, styles.normalizedIcon),
      });
    }
    return icon;
  }, [icon]);

  return (
    <div
      className={cx(
        styles.avatar,
        { [styles.imageExist]: image && typeof image === 'string', [styles.largeAvatar]: large, [styles.smallAvatar]: small },
        className
      )}
      {...other}
    >
      {children}
      {cover && typeof image === 'string' && (
        <span aria-label={alt} className={styles.image} style={{ backgroundImage: `url(${image})` }} />
      )}
      {!cover && (typeof image === 'string' ? <img alt={alt} className={styles.image} src={image} title={title} /> : image)}
      {styledIcon}
      {svg}
      {title ? <span className={styles.letter}>{getInitials(title)}</span> : null}
    </div>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cover: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  svg: PropTypes.element,
  title: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
};

Avatar.defaultProps = {
  alt: '',
  cover: false,
  small: false,
  large: false,
};
