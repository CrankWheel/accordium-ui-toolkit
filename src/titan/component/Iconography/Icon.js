import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { mergeProps } from '../../util/helpers';
import * as Icons from './icons';
import styles from './iconography.module.scss';
import spinnerStyles from './spinner.module.scss';
import { camelCase, capitalize } from '../../util';

export default function Icon(props) {
  const { src, verticalAlign, externalIconClassName, ...others } = props;

  const isSpinner = src.indexOf('spinner') === 0;

  const iconProps = mergeProps(others, {
    className: cx(styles.icon, styles[`icon${capitalize(verticalAlign)}`]),
  });

  let iconSrc = src;
  let renderedIcon = Icons[iconSrc];

  if (!renderedIcon) {
    renderedIcon = Icons.help;
    iconSrc = 'help';
    console.warn(`Icon "${src}" is not recognized.`);
  }

  let iconClassName = styles[`icon${capitalize(camelCase(iconSrc))}`];
  if (isSpinner) iconClassName = spinnerStyles[`icon${capitalize(camelCase(iconSrc))}`];
  if (externalIconClassName) iconClassName += ` ${externalIconClassName}`;
  return <div {...iconProps}>{React.cloneElement(renderedIcon, { className: iconClassName, key: iconSrc })}</div>;
}

Icon.propTypes = {
  externalIconClassName: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
  verticalAlign: PropTypes.oneOf(['middle', 'baseline']),
};

Icon.defaultProps = {
  size: 'inherit',
  verticalAlign: 'middle',
};
