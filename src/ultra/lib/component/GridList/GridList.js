import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Trail } from 'react-spring/renderprops';
import classNames from '../../etc/classNames';
import Container from '../Layout/Container';
import GridListItem from './GridListItem';

export default class GridList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  };

  render() {
    const { className, style, children, items, onItemClick } = this.props;
    return (
      <div className={classNames('clearfix accordium grid-list', className)} style={style}>
        {items ? (
          <Container>
            <Trail items={items} keys={item => item.id} from={{ opacity: 0 }} to={{ opacity: 1 }} leave={{ opacity: 0 }}>
              {item => props => (
                <GridListItem
                  key={item.id}
                  title={item.title}
                  caption={item.caption}
                  thumbnailSrc={item.thumbnailSrc}
                  thumbnailAlt={item.thumbnailAlt}
                  thumbnailSelected={item.thumbnailSelected}
                  style={props}
                  xs={12}
                  sm={6}
                  md={4}
                  onItemClick={onItemClick}
                />
              )}
            </Trail>
          </Container>
        ) : (
          children
        )}
      </div>
    );
  }
}
