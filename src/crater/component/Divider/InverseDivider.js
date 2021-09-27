import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';

const defDivider = props => {
  return class extends React.PureComponent {
    static propTypes = {
      inverse: PropTypes.bool,
      size: PropTypes.oneOf(['large']),
    };

    render() {
      return <Divider {...props} {...this.props} />;
    }
  };
};

const InverseDivider = defDivider({ inverse: true });
export default InverseDivider;
