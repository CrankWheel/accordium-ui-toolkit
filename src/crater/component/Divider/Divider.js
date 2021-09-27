import React from 'react';
import PropTypes from 'prop-types';
import { mergeProps } from '../../util';
import styles from './dividers.module.scss';

export default class Divider extends React.PureComponent {
  static propTypes = {
    inverse: PropTypes.bool,
    size: PropTypes.oneOf(['large']),
  };

  render() {
    const { inverse, size, ...others } = this.props;
    const dividerClass = {
      [styles.divider1]: inverse && size !== 'large',
      [styles.divider2]: inverse && size === 'large',
      [styles.dividerAlternate1]: !inverse && size !== 'large',
      [styles.dividerAlternate2]: !inverse && size === 'large',
    };

    const props = mergeProps(others, { className: dividerClass });

    return <hr {...props} />;
  }
}
