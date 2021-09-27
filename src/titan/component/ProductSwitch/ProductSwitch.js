import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import styles from './ProductSwitch.module.scss';
import Button from '../Button/Button';

export default function ProductSwitch(props) {
  const { className, style, products, ...rest } = props;

  return (
    <div className={cx(className, styles.bar)} style={style} {...rest}>
      <div className={styles.productSwitches}>
        {products.map(({ name, active, icon, href, className: pClassName }, index) => (
          <Button
            key={uniqueId(name)}
            flat
            icon={icon}
            className={cx(styles[`product${index + 1}`], { [styles.active]: active }, pClassName)}
            href={href}
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}

ProductSwitch.defaultProps = { products: [] };

ProductSwitch.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.node, PropTypes.element]))
  ),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};
