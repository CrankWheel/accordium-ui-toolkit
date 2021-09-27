import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../../etc/classNames';

export default class ResponsiveTable extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    tableDesc: PropTypes.string,
    tableLabel: PropTypes.string.isRequired,
  };

  render() {
    const { className, style, children, tableLabel, tableDesc, ...rest } = this.props;
    const additionalProps = {};
    if (tableDesc) additionalProps.ariaDescribedby = 'table_desc';
    return (
      <div
        role="table"
        aria-label={tableLabel}
        aria-describedby="table_desc"
        className={classNames('clearfix accordium table responsive', className)}
        style={style}
        {...additionalProps}
        {...rest}
      >
        {tableDesc && <div id="table_desc">{tableDesc}</div>}
        {children}
      </div>
    );
  }
}
