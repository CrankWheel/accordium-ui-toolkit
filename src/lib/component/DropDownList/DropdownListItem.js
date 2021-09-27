import React, { PureComponent, Fragment } from 'react';
import classNames from '../../etc/classNames';
import { LoadingSpinner } from '../Iconography/SVGIcons/index';

export default class DropDownListItem extends PureComponent {
  static defaultProps = {
    custom: false,
  };

  state = { selected: false };

  renderLoadingSpinner = () => (
    <span role="img" className="loading-spinner">
      <LoadingSpinner /> Loading...
    </span>
  );

  setSelected = () => this.setState({ selected: true });

  unsetSelected = () => this.setState({ selected: false });

  handleOnClick = () => {
    const { loading, onClick } = this.props;
    if (loading) return;
    if (onClick) onClick();
  };

  handleOnKeyDown = event => {
    if (event.keyCode === 13) {
      this.handleOnClick();
    }
  };

  render() {
    const { selected } = this.state;
    const { className, style, thumbnail, name, loading, custom, children } = this.props;
    return (
      <li role="option" aria-selected={selected} onFocus={this.setSelected} onBlur={this.unsetSelected}>
        {!custom ? (
          <div
            role="button"
            className={classNames('dropdown-list-item p1', className)}
            style={style}
            onClick={this.handleOnClick}
            onKeyDown={this.handleOnKeyDown}
            tabIndex={0}
          >
            {loading ? (
              this.renderLoadingSpinner()
            ) : (
              <Fragment>
                {thumbnail && <div className="dropdown-list-item-thumbnail">{thumbnail}</div>}
                {name && <div className="dropdown-list-item-title">{name}</div>}
              </Fragment>
            )}
          </div>
        ) : (
          children
        )}
      </li>
    );
  }
}
