import PropTypes from 'prop-types';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import handleRef from './handleRef';

export default class RefFindNode extends Component {
  static propTypes = {
    /** Primary content. */
    children: PropTypes.element.isRequired,

    /**
     * Called when a child component will be mounted or updated.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  };

  componentDidMount() {
    const { innerRef } = this.props;
    // eslint-disable-next-line react/no-find-dom-node
    handleRef(innerRef, findDOMNode(this));
  }

  componentWillUnmount() {
    const { innerRef } = this.props;
    handleRef(innerRef, null);
  }

  render() {
    const { children } = this.props;

    return children;
  }
}
