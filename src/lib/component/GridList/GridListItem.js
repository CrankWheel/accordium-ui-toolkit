import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from '../../etc/classNames';
import Card from '../Card/Card/index';
import Image from '../Image/Image';
import CardContent from '../Card/Card/CardContent';
import CardContentHeader from '../Card/Card/CardContentHeader';
import CardContentCaption from '../Card/Card/CardContentCaption';
import Grid from '../Layout/Grid';

export default class GridListItem extends Component {
  static propTypes = {
    caption: PropTypes.string,
    className: PropTypes.string,
    descClassName: PropTypes.string,
    lg: PropTypes.number,
    md: PropTypes.number,
    onItemClick: PropTypes.func,
    sm: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    thumbnailAlt: PropTypes.string,
    thumbnailClassName: PropTypes.string,
    thumbnailSelected: PropTypes.bool,
    thumbnailSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    xl: PropTypes.number,
    xs: PropTypes.number,
  };

  static defaultProps = {
    caption: '',
    thumbnailSelected: false,
    xs: 12,
  };

  render() {
    const {
      className,
      style,
      thumbnailSrc,
      thumbnailAlt,
      thumbnailSelected,
      title,
      caption,
      xs,
      sm,
      md,
      lg,
      xl,
      onItemClick,
      thumbnailClassName,
      descClassName,
      thumbnailRatio,
    } = this.props;
    const additionalProps = {};
    if (onItemClick) {
      additionalProps.onClick = onItemClick;
    }
    const styling = classNames('grid-list-item p1', className);
    return (
      <Grid xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={styling} style={style}>
        <Card className="grid-list-item-card" tabIndex={0} {...additionalProps}>
          <div
            className={classNames('grid-list-item-card-thumbnail', thumbnailClassName, {
              'ratio-16-9': thumbnailRatio === '16:9',
              'ratio-4-3': thumbnailRatio === '4:3',
              'ratio-1-1': thumbnailRatio === '1:1',
              'thumbnail-selected': !!thumbnailSelected,
            })}
          >
            {thumbnailRatio ? (
              <div className="ratio-wrapper">
                <Image src={thumbnailSrc} alt={thumbnailAlt || `image of ${title}`} />
              </div>
            ) : (
              <Image src={thumbnailSrc} fluid alt={thumbnailAlt || `image of ${title}`} />
            )}
          </div>
          <CardContent className={classNames('grid-list-item-content', descClassName)}>
            <CardContentHeader className="text-2">{title}</CardContentHeader>
            <CardContentCaption className="text-1">{caption}</CardContentCaption>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
