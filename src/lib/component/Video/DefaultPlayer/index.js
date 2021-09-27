import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import * as screenfull from 'screenfull';
import { findDOMNode } from 'react-dom';
import Slider from 'rc-slider';
import { Transition } from 'react-spring/renderprops';
import classNames from '../../../etc/classNames';
import { PlayButtonIcon, VolumeIcon, FullscreenIcon, DownloadIcon, MuteIcon, SVGIcon, PauseIcon } from '../../Iconography';
import Duration from '../Duration';

const defaultSetting = {
  light: false,
  pip: false,
  playbackRate: 1.0,
  loop: false,
};

function iOS() {
  const iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) {
        return true;
      }
    }
  }

  return false;
}

export default class DefaultPlayer extends Component {
  static defaultProps = { native: false, error: false, errorComponent: null };

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      controls: !!iOS(),
      volume: 0.5,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      hideControls: false,
      showVolumeBar: false,
    };
    this.player = React.createRef();
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    const elem = findDOMNode(this.player.current);
    if (elem && elem.children[0]) {
      elem.children[0].addEventListener('mouseout', this.handleOnMouseLeave);
      elem.children[0].addEventListener('mouseover', this.handleOnMouseOver);
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line react/no-find-dom-node
    const elem = findDOMNode(this.player.current);
    if (elem && elem.children[0]) {
      elem.children[0].removeEventListener('mouseout', this.handleOnMouseLeave);
      elem.children[0].removeEventListener('mouseover', this.handleOnMouseOver);
    }
  }

  keyboardBehaviour = event => {
    console.log('keycode: ', event.keyCode);
    if (event.keyCode === 32) {
      this.playPause();
    }
  };

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  stop = () => {
    this.setState({ playing: false });
  };

  setVolume = value => {
    this.setState({ volume: parseFloat(value) });
  };

  toggleMuted = () => {
    this.setState(prevState => ({ muted: !prevState.muted }));
  };

  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  };

  onSeekChange = value => {
    this.setState({ played: parseFloat(value) });
  };

  onSeekMouseUp = value => {
    this.setState({ seeking: false });
    this.player.current.seekTo(parseFloat(value));
  };

  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onEnded = () => {
    console.log('onEnded');
    this.setState({ playing: this.state.loop });
  };

  onDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  onClickFullscreen = () => {
    // eslint-disable-next-line react/no-find-dom-node
    const elem = findDOMNode(this.player.current);
    if (elem.children[0] && screenfull.enabled) {
      this.setState({ controls: true }, () => {
        screenfull.request(elem.children[0]);
        screenfull.onchange(() => {
          if (!screenfull.isFullscreen) this.setState({ controls: false });
        });
      });
    }
  };

  handleOnMouseOver = () => {
    const { hideControls } = this.state;
    if (hideControls) this.setState({ hideControls: false });
  };

  handleOnMouseLeave = () => {
    const { hideControls } = this.state;
    if (!hideControls) this.setState({ hideControls: true });
  };

  handleOnMouseOverVolume = () => {
    const { showVolumeBar } = this.state;
    if (!showVolumeBar) this.setState({ showVolumeBar: true });
  };

  handleOnMouseLeaveVolume = () => {
    const { showVolumeBar } = this.state;
    if (showVolumeBar) this.setState({ showVolumeBar: false });
  };

  render() {
    const { className, style, src, native, poster, onDownloadVideo, error, errorComponent } = this.props;
    const { light, pip, playbackRate, loop } = defaultSetting;
    const { playing, controls, volume, muted, played, loaded, duration, hideControls, showVolumeBar } = this.state;
    const additionalProps = {};
    if (poster) additionalProps.config = { attributes: { poster } };
    return (
      <div className={classNames('accordium video default-player', className)} style={style} onKeyUp={this.keyboardBehaviour}>
        <div className="player-wrapper">
          {error ? (
            <div className="player-error">{errorComponent}</div>
          ) : (
            <ReactPlayer
              ref={this.player}
              className="player"
              width="100%"
              height="100%"
              url={src}
              pip={pip}
              playing={playing}
              controls={native || controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
              {...additionalProps}
            />
          )}
        </div>
        {!error && (
          <div
            className="video-box"
            role="button"
            onClick={this.playPause}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                this.playPause();
              }
            }}
            title={playing ? 'Pause' : 'Play'}
            tabIndex={0}
            onMouseEnter={this.handleOnMouseOver}
            onMouseLeave={this.handleOnMouseLeave}
          />
        )}
        <div className={classNames('gradient-bg', { hide: native || controls || error, 'fade-out': hideControls && playing })} />
        <div
          className={classNames('controls-box', { hide: native || controls || error, 'fade-out': hideControls && playing })}
          onMouseEnter={this.handleOnMouseOver}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <div className="progress-bar-container px2 mb1">
            <Slider
              className="progress-seek"
              min={0}
              max={1}
              step={0.001}
              onBeforeChange={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onAfterChange={this.onSeekMouseUp}
              value={played}
              included
            />
          </div>
          <div className="bottom-controls px2 mb1">
            <div
              role="button"
              className="control"
              onClick={this.playPause}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  this.playPause();
                }
              }}
              title={playing ? 'Pause' : 'Play'}
              tabIndex={0}
            >
              <SVGIcon size="md">{playing ? <PauseIcon /> : <PlayButtonIcon />}</SVGIcon>
            </div>
            <div
              className="volume-bar-wrapper"
              onMouseEnter={this.handleOnMouseOverVolume}
              onMouseLeave={this.handleOnMouseLeaveVolume}
            >
              <div
                className="control"
                onClick={this.toggleMuted}
                role="button"
                tabIndex={0}
                onKeyDown={event => {
                  if (event.keyCode === 13) this.toggleMuted();
                }}
              >
                <SVGIcon size="md">{muted ? <MuteIcon /> : <VolumeIcon />}</SVGIcon>
              </div>
              <Transition
                items={showVolumeBar}
                from={{ width: 0, opacity: 0 }}
                enter={{ width: 100, opacity: 1 }}
                leave={{ width: 0, opacity: 0 }}
                config={{ duration: 100 }}
              >
                {show =>
                  show &&
                  (props => (
                    <Slider
                      className="control volume-bar"
                      min={0}
                      max={1}
                      step={0.001}
                      onChange={this.setVolume}
                      value={volume}
                      included
                      style={props}
                    />
                  ))
                }
              </Transition>
            </div>
            {Number.isFinite(duration) && (
              <div className="duration text-3">
                <Duration seconds={duration * played} />/<Duration seconds={duration} />
              </div>
            )}
            <div
              role="button"
              className="control fullscreen"
              onClick={this.onClickFullscreen}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  this.playPause();
                }
              }}
              title="fullscreen video"
              tabIndex={0}
            >
              <SVGIcon size="md">
                <FullscreenIcon />
              </SVGIcon>
            </div>
            {onDownloadVideo && (
              <div
                role="button"
                className="control fullscreen"
                onClick={onDownloadVideo}
                onKeyDown={event => {
                  if (event.keyCode === 13) {
                    this.playPause();
                  }
                }}
                title="fullscreen video"
                tabIndex={0}
              >
                <SVGIcon size="md">
                  <DownloadIcon />
                </SVGIcon>
              </div>
            )}
          </div>
          {/* <button type="button" className="control play-pause" onClick={this.playPause} title={playing ? 'Pause' : 'Play'}>
            {playing ? '⏸' : '▶'}
          </button>
          <div className="control volume">
            <div
              className="control mute"
              onClick={this.toggleMuted}
              role="button"
              tabIndex={0}
              onKeyDown={event => {
                if (event.keyCode === 13) this.toggleMuted();
              }}
            >
              {muted ? '🔇' : '🔊'}
            </div>
            <input className="control volume-range" type="range" min={0} max={1} step="any" value={volume} onChange={this.setVolume} />
          </div>
          <div className="control duration text-2">
            <Duration seconds={duration * played} />/<Duration seconds={duration} />
          </div>
          <button type="button" className="control fullscreen" onClick={this.onClickFullscreen}>
            ⛶
          </button> */}
        </div>
      </div>
    );
  }
}
