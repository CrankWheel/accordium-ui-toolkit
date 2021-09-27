import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// eslint-disable-next-line import/no-named-default
import { default as ReactPlayer } from 'react-player/lib/players/FilePlayer';
import * as screenfull from 'screenfull';
import cx from 'classnames';
import Slider from 'rc-slider/es/Slider';
import styles from './Player.module.scss';
import './rc-slider.scss';
import Ref from '../Ref/Ref';
import { DownloadIcon, FullscreenIcon, MuteIcon, PauseIcon, PlayButtonIcon, VolumeIcon } from './VideoControls';
import Duration from './Duration';

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

const initProgress = {
  loaded: 0,
  loadedSeconds: 0,
  played: 0,
  playedSeconds: 0,
};

function Player(props) {
  const { styling = {}, src, native, poster, onDownloadVideo, error, errorComponent, onVideoStart, onTick } = props;
  const { playerWrapperClassName = '', playerClassName = '' } = styling;
  const [playing, setPlaying] = useState(false);
  const [controls, setControls] = useState(!!iOS());
  const [hideControls, setHideControls] = useState(false);
  const seeking = useRef(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [{ loaded, loadedSeconds, played, playedSeconds }, setVideoProgress] = useState(initProgress);
  const setProgress = useCallback(newProgress => {
    setVideoProgress(prevState => ({ ...prevState, ...newProgress }));
  }, []);
  const playerParent = useRef(null);
  const player = useRef(null);
  const firstPlay = useRef(false);

  const playPause = useCallback(() => {
    setPlaying(prevState => !prevState);
  }, []);

  const keyboardBehaviour = useCallback(
    event => {
      if (event.keyCode === 32) playPause();
    },
    [playPause]
  );

  const toggleMuted = useCallback(() => {
    setMuted(prevState => !prevState);
  }, []);

  const onPlay = useCallback(() => {
    setPlaying(true);
    if (onVideoStart && !firstPlay.current) {
      onVideoStart();
      firstPlay.current = true;
    }
  }, [onVideoStart]);

  const onPause = useCallback(() => {
    console.log('onPause');
    setPlaying(false);
  }, []);

  const onSeekMouseDown = useCallback(() => {
    console.log('onSeekDown');
    seeking.current = true;
  }, []);

  const onSeekChange = useCallback(
    value => {
      setProgress({ played: parseFloat(value) });
    },
    [setProgress]
  );

  const onSeekMouseUp = useCallback(value => {
    console.log('onSeekDown');
    seeking.current = false;
    player.current.seekTo(parseFloat(value));
  }, []);

  const onProgress = useCallback(
    state => {
      // We only want to update time slider if we are not currently seeking
      if (!seeking.current) {
        setProgress(state);
        if (onTick) onTick(state);
      }
    },
    [seeking, onTick, setProgress]
  );

  const onEnded = useCallback(() => {
    console.log('onEnded');
  }, []);

  const onDuration = useCallback(dur => {
    console.log('onDuration', dur);
    setDuration(dur);
  }, []);

  const onClickFullscreen = useCallback(() => {
    const elem = playerParent.current;
    console.log(elem);
    if (elem?.children[0] && screenfull.isEnabled) {
      setControls(true);
      screenfull.request(elem.children[0]);
      screenfull.onchange(() => {
        if (!screenfull.isFullscreen) setControls(false);
      });
    }
  }, []);

  const handleOnMouseOver = useCallback(() => {
    if (hideControls) setHideControls(false);
  }, [hideControls]);

  const handleOnMouseLeave = useCallback(() => {
    if (!hideControls) setHideControls(true);
  }, [hideControls]);

  const handleOnMouseOverVolume = useCallback(() => {
    if (!showVolumeBar) setShowVolumeBar(true);
  }, [showVolumeBar]);

  const handleOnMouseLeaveVolume = useCallback(() => {
    if (showVolumeBar) setShowVolumeBar(false);
  }, [showVolumeBar]);

  useEffect(() => {
    const elem = playerParent.current;
    if (elem?.children[0]) {
      elem.children[0].addEventListener('mouseout', handleOnMouseLeave);
      elem.children[0].addEventListener('mouseover', handleOnMouseOver);
    }
    return () => {
      if (elem?.children[0]) {
        elem.children[0].removeEventListener('mouseout', handleOnMouseLeave);
        elem.children[0].removeEventListener('mouseover', handleOnMouseOver);
      }
    };
  }, [handleOnMouseLeave, handleOnMouseOver]);

  const additionalProps = useMemo(() => {
    if (poster) return { config: { file: { attributes: { poster } } } };
    return {};
  }, [poster]);

  const { light, pip, playbackRate, loop } = defaultSetting;

  return (
    <div className={cx(styles.videoPlayer)} onKeyUp={keyboardBehaviour}>
      <div className={cx(styles.playerWrapper, playerWrapperClassName)}>
        {!error && (
          <Ref innerRef={playerParent}>
            <ReactPlayer
              className={cx(styles.player, playerClassName)}
              ref={player}
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
              onPlay={onPlay}
              onPause={onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={onEnded}
              onError={e => console.log('onError', e)}
              onProgress={onProgress}
              onDuration={onDuration}
              {...additionalProps}
            />
          </Ref>
        )}
        <div className={cx(styles.playerError, { [styles.hide]: !error })}>{errorComponent}</div>
        <div
          className={cx(styles.firstPlayTrigger, { [styles.hide]: error })}
          role="button"
          onClick={playPause}
          onKeyDown={event => {
            if (event.keyCode === 13) playPause();
          }}
          title={playing ? 'Pause' : 'Play'}
          tabIndex={0}
          onMouseEnter={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        />
        <div
          className={cx(styles.controlsBox, {
            [styles.hide]: native || controls || error,
            [styles.fadeOut]: hideControls && playing,
          })}
          onMouseEnter={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        >
          {/*          <div
            className={cx(styles.gradientBg, {
              [styles.hide]: native || controls || error,
              [styles.fadeOut]: hideControls && playing,
            })}
          /> */}
          <div className={cx(styles.progressBar, 'px2 mb1')}>
            <Slider
              min={0}
              max={1}
              step={0.001}
              onBeforeChange={onSeekMouseDown}
              onChange={onSeekChange}
              onAfterChange={onSeekMouseUp}
              value={played}
              included
            />
          </div>
          <div className={cx(styles.controls, 'px2 mb1')}>
            <div
              role="button"
              className={cx(styles.control)}
              onClick={playPause}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  playPause();
                }
              }}
              title={playing ? 'Pause' : 'Play'}
              tabIndex={0}
            >
              {playing ? <PauseIcon /> : <PlayButtonIcon />}
            </div>
            <div
              className={cx(styles.volumeBarWrapper)}
              onMouseEnter={handleOnMouseOverVolume}
              onMouseLeave={handleOnMouseLeaveVolume}
            >
              <div
                className={cx(styles.control)}
                onClick={toggleMuted}
                role="button"
                tabIndex={0}
                onKeyDown={event => {
                  if (event.keyCode === 13) toggleMuted();
                }}
              >
                {muted ? <MuteIcon /> : <VolumeIcon />}
              </div>
              <Slider
                className={cx(styles.control, styles.volumeBar)}
                min={0}
                max={1}
                step={0.001}
                onChange={value => setVolume(parseFloat(value))}
                value={volume}
                included
                style={{ opacity: 1, width: '100px' }}
              />
            </div>
            {Number.isFinite(duration) && (
              <div className={cx(styles.duration)}>
                <Duration seconds={duration * played} />/<Duration seconds={duration} />
              </div>
            )}
            <div
              role="button"
              className={cx(styles.control, styles.fullscreen)}
              onClick={onClickFullscreen}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  playPause();
                }
              }}
              title="fullscreen video"
              tabIndex={0}
            >
              <FullscreenIcon />
            </div>
            {onDownloadVideo && (
              <div
                role="button"
                className={cx(styles.control, styles.fullscreen)}
                onClick={onDownloadVideo}
                onKeyDown={event => {
                  if (event.keyCode === 13) {
                    onDownloadVideo();
                  }
                }}
                title="download video"
                tabIndex={0}
              >
                <DownloadIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
