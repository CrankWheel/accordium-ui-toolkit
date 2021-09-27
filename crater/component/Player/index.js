"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Player;

var _react = _interopRequireWildcard(require("react"));

var _FilePlayer = _interopRequireDefault(require("react-player/lib/players/FilePlayer"));

var screenfull = _interopRequireWildcard(require("screenfull"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Slider = _interopRequireDefault(require("rc-slider/es/Slider"));

var _PlayerModule = _interopRequireDefault(require("./Player.module.scss"));

require("./rc-slider.scss");

var _Ref = _interopRequireDefault(require("../Ref/Ref"));

var _VideoControls = require("./VideoControls");

var _Duration = _interopRequireDefault(require("./Duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

const defaultSetting = {
  light: false,
  pip: false,
  playbackRate: 1.0,
  loop: false
};

function iOS() {
  const iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

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
  playedSeconds: 0
};

function Player(props) {
  var _this = this;

  const {
    styling = {},
    src,
    native,
    poster,
    onDownloadVideo,
    error,
    errorComponent,
    onVideoStart,
    onTick,
    overlay = false,
    overlayContent = null
  } = props;
  const {
    playerWrapperClassName = '',
    playerClassName = ''
  } = styling;
  const [playing, setPlaying] = (0, _react.useState)(false);
  const [controls, setControls] = (0, _react.useState)(!!iOS());
  const [hideControls, setHideControls] = (0, _react.useState)(false);
  const seeking = (0, _react.useRef)(false);
  const [volume, setVolume] = (0, _react.useState)(0.5);
  const [muted, setMuted] = (0, _react.useState)(false);
  const [duration, setDuration] = (0, _react.useState)(0);
  const [showVolumeBar, setShowVolumeBar] = (0, _react.useState)(false);
  const [{
    loaded,
    loadedSeconds,
    played,
    playedSeconds
  }, setVideoProgress] = (0, _react.useState)(initProgress);
  const [started, setStarted] = (0, _react.useState)(false);
  const setProgress = (0, _react.useCallback)(function (newProgress) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    setVideoProgress(function (prevState) {
      _newArrowCheck(this, _this2);

      return _objectSpread({}, prevState, {}, newProgress);
    }.bind(this));
  }.bind(this), []);
  const playerParent = (0, _react.useRef)(null);
  const player = (0, _react.useRef)(null);
  const firstPlay = (0, _react.useRef)(false);
  const onStart = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    setStarted(true);
  }.bind(this), []);
  const playPause = (0, _react.useCallback)(function () {
    var _this3 = this;

    _newArrowCheck(this, _this);

    setPlaying(function (prevState) {
      _newArrowCheck(this, _this3);

      return !prevState;
    }.bind(this));
  }.bind(this), []);
  const keyboardBehaviour = (0, _react.useCallback)(function (event) {
    _newArrowCheck(this, _this);

    if (event.keyCode === 32) playPause();
  }.bind(this), [playPause]);
  const toggleMuted = (0, _react.useCallback)(function () {
    var _this4 = this;

    _newArrowCheck(this, _this);

    setMuted(function (prevState) {
      _newArrowCheck(this, _this4);

      return !prevState;
    }.bind(this));
  }.bind(this), []);
  const onPlay = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    setPlaying(true);

    if (onVideoStart && !firstPlay.current) {
      onVideoStart();
      firstPlay.current = true;
    }
  }.bind(this), [onVideoStart]);
  const onPause = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    console.log('onPause');
    setPlaying(false);
  }.bind(this), []);
  const onSeekMouseDown = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    console.log('onSeekDown');
    seeking.current = true;
  }.bind(this), []);
  const onSeekChange = (0, _react.useCallback)(function (value) {
    _newArrowCheck(this, _this);

    setProgress({
      played: parseFloat(value)
    });
  }.bind(this), [setProgress]);
  const onSeekMouseUp = (0, _react.useCallback)(function (value) {
    _newArrowCheck(this, _this);

    console.log('onSeekDown');
    seeking.current = false;
    player.current.seekTo(parseFloat(value));
  }.bind(this), []);
  const onProgress = (0, _react.useCallback)(function (state) {
    _newArrowCheck(this, _this);

    if (!seeking.current) {
      setProgress(state);
      if (onTick && playing) onTick(state);
    }
  }.bind(this), [seeking, setProgress, onTick, playing]);
  const onEnded = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    console.log('onEnded');
  }.bind(this), []);
  const onDuration = (0, _react.useCallback)(function (dur) {
    _newArrowCheck(this, _this);

    console.log('onDuration', dur);
    setDuration(dur);
  }.bind(this), []);
  const onClickFullscreen = (0, _react.useCallback)(function () {
    var _this5 = this;

    _newArrowCheck(this, _this);

    const elem = playerParent.current;
    console.log(elem);

    if ((elem === null || elem === void 0 ? void 0 : elem.children[0]) && screenfull.isEnabled) {
      setControls(true);
      screenfull.request(elem.children[0]);
      screenfull.onchange(function () {
        _newArrowCheck(this, _this5);

        if (!screenfull.isFullscreen) setControls(false);
      }.bind(this));
    }
  }.bind(this), []);
  const handleOnMouseOver = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (hideControls) setHideControls(false);
  }.bind(this), [hideControls]);
  const handleOnMouseLeave = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (!hideControls) setHideControls(true);
  }.bind(this), [hideControls]);
  const handleOnMouseOverVolume = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (!showVolumeBar) setShowVolumeBar(true);
  }.bind(this), [showVolumeBar]);
  const handleOnMouseLeaveVolume = (0, _react.useCallback)(function () {
    _newArrowCheck(this, _this);

    if (showVolumeBar) setShowVolumeBar(false);
  }.bind(this), [showVolumeBar]);
  (0, _react.useEffect)(function () {
    var _this6 = this;

    _newArrowCheck(this, _this);

    const elem = playerParent.current;

    if (elem === null || elem === void 0 ? void 0 : elem.children[0]) {
      elem.children[0].addEventListener('mouseout', handleOnMouseLeave);
      elem.children[0].addEventListener('mouseover', handleOnMouseOver);
    }

    return function () {
      _newArrowCheck(this, _this6);

      if (elem === null || elem === void 0 ? void 0 : elem.children[0]) {
        elem.children[0].removeEventListener('mouseout', handleOnMouseLeave);
        elem.children[0].removeEventListener('mouseover', handleOnMouseOver);
      }
    }.bind(this);
  }.bind(this), [handleOnMouseLeave, handleOnMouseOver]);
  const additionalProps = (0, _react.useMemo)(function () {
    _newArrowCheck(this, _this);

    if (poster) return {
      config: {
        file: {
          attributes: {
            poster
          }
        }
      }
    };
    return {};
  }.bind(this), [poster]);
  const {
    light,
    pip,
    playbackRate,
    loop
  } = defaultSetting;
  const showOverlay = overlay && !started;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.videoPlayer),
    onKeyUp: keyboardBehaviour
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.playerWrapper, playerWrapperClassName)
  }, !error && _react.default.createElement(_Ref.default, {
    innerRef: playerParent
  }, _react.default.createElement(_FilePlayer.default, _extends({
    className: (0, _classnames.default)(_PlayerModule.default.player, playerClassName),
    ref: player,
    width: "100%",
    height: "100%",
    url: src,
    pip: pip,
    playing: playing,
    controls: native || controls,
    light: light,
    loop: loop,
    playbackRate: playbackRate,
    volume: volume,
    muted: muted,
    onReady: function () {
      _newArrowCheck(this, _this);

      return console.log('onReady');
    }.bind(this),
    onStart: onStart,
    onPlay: onPlay,
    onPause: onPause,
    onBuffer: function () {
      _newArrowCheck(this, _this);

      return console.log('onBuffer');
    }.bind(this),
    onSeek: function (e) {
      _newArrowCheck(this, _this);

      return console.log('onSeek', e);
    }.bind(this),
    onEnded: onEnded,
    onError: function (e) {
      _newArrowCheck(this, _this);

      return console.log('onError', e);
    }.bind(this),
    onProgress: onProgress,
    onDuration: onDuration,
    progressInterval: 450
  }, additionalProps))), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.playerError, {
      [_PlayerModule.default.hide]: !error
    })
  }, errorComponent), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.firstPlayTrigger, {
      [_PlayerModule.default.hide]: error,
      [_PlayerModule.default.playerOverlay]: showOverlay
    }),
    role: "button",
    onClick: playPause,
    onKeyDown: function (event) {
      _newArrowCheck(this, _this);

      if (event.keyCode === 13) playPause();
    }.bind(this),
    title: playing ? 'Pause' : 'Play',
    tabIndex: 0,
    onMouseEnter: handleOnMouseOver,
    onMouseLeave: handleOnMouseLeave
  }, showOverlay ? _react.default.createElement(_VideoControls.RoundedPlayIcon, null) : null, showOverlay && overlayContent ? _react.default.createElement("div", {
    className: _PlayerModule.default.videoMetadata
  }, _react.default.createElement("div", null, overlayContent), _react.default.createElement("div", {
    className: _PlayerModule.default.videoDuration
  }, duration ? _react.default.createElement(_Duration.default, {
    seconds: duration,
    showTimeUnit: true
  }) : 'Calculating duration...')) : null), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.controlsBox, {
      [_PlayerModule.default.hide]: native || controls || error || showOverlay,
      [_PlayerModule.default.fadeOut]: hideControls && playing
    }),
    onMouseEnter: handleOnMouseOver,
    onMouseLeave: handleOnMouseLeave
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.progressBar, 'px2 mb1')
  }, _react.default.createElement(_Slider.default, {
    min: 0,
    max: 1,
    step: 0.001,
    onBeforeChange: onSeekMouseDown,
    onChange: onSeekChange,
    onAfterChange: onSeekMouseUp,
    value: played,
    included: true
  })), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.controls, 'px2 mb1')
  }, _react.default.createElement("div", {
    role: "button",
    className: (0, _classnames.default)(_PlayerModule.default.control),
    onClick: playPause,
    onKeyDown: function (event) {
      _newArrowCheck(this, _this);

      if (event.keyCode === 13) {
        playPause();
      }
    }.bind(this),
    title: playing ? 'Pause' : 'Play',
    tabIndex: 0
  }, playing ? _react.default.createElement(_VideoControls.PauseIcon, null) : _react.default.createElement(_VideoControls.PlayButtonIcon, null)), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.volumeBarWrapper),
    onMouseEnter: handleOnMouseOverVolume,
    onMouseLeave: handleOnMouseLeaveVolume
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.control),
    onClick: toggleMuted,
    role: "button",
    tabIndex: 0,
    onKeyDown: function (event) {
      _newArrowCheck(this, _this);

      if (event.keyCode === 13) toggleMuted();
    }.bind(this)
  }, muted ? _react.default.createElement(_VideoControls.MuteIcon, null) : _react.default.createElement(_VideoControls.VolumeIcon, null)), _react.default.createElement(_Slider.default, {
    className: (0, _classnames.default)(_PlayerModule.default.control, _PlayerModule.default.volumeBar),
    min: 0,
    max: 1,
    step: 0.001,
    onChange: function (value) {
      _newArrowCheck(this, _this);

      return setVolume(parseFloat(value));
    }.bind(this),
    value: volume,
    included: true,
    style: {
      opacity: 1,
      width: '100px'
    }
  })), Number.isFinite(duration) && _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.duration)
  }, _react.default.createElement(_Duration.default, {
    seconds: duration * played
  }), "/", _react.default.createElement(_Duration.default, {
    seconds: duration
  })), _react.default.createElement("div", {
    role: "button",
    className: (0, _classnames.default)(_PlayerModule.default.control, _PlayerModule.default.fullscreen),
    onClick: onClickFullscreen,
    onKeyDown: function (event) {
      _newArrowCheck(this, _this);

      if (event.keyCode === 13) {
        playPause();
      }
    }.bind(this),
    title: "fullscreen video",
    tabIndex: 0
  }, _react.default.createElement(_VideoControls.FullscreenIcon, null)), onDownloadVideo && _react.default.createElement("div", {
    role: "button",
    className: (0, _classnames.default)(_PlayerModule.default.control, _PlayerModule.default.fullscreen),
    onClick: onDownloadVideo,
    onKeyDown: function (event) {
      _newArrowCheck(this, _this);

      if (event.keyCode === 13) {
        onDownloadVideo();
      }
    }.bind(this),
    title: "download video",
    tabIndex: 0
  }, _react.default.createElement(_VideoControls.DownloadIcon, null))))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmF0ZXIvY29tcG9uZW50L1BsYXllci9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0U2V0dGluZyIsImxpZ2h0IiwicGlwIiwicGxheWJhY2tSYXRlIiwibG9vcCIsImlPUyIsImlEZXZpY2VzIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJsZW5ndGgiLCJwb3AiLCJpbml0UHJvZ3Jlc3MiLCJsb2FkZWQiLCJsb2FkZWRTZWNvbmRzIiwicGxheWVkIiwicGxheWVkU2Vjb25kcyIsIlBsYXllciIsInByb3BzIiwic3R5bGluZyIsInNyYyIsIm5hdGl2ZSIsInBvc3RlciIsIm9uRG93bmxvYWRWaWRlbyIsImVycm9yIiwiZXJyb3JDb21wb25lbnQiLCJvblZpZGVvU3RhcnQiLCJvblRpY2siLCJvdmVybGF5Iiwib3ZlcmxheUNvbnRlbnQiLCJwbGF5ZXJXcmFwcGVyQ2xhc3NOYW1lIiwicGxheWVyQ2xhc3NOYW1lIiwicGxheWluZyIsInNldFBsYXlpbmciLCJjb250cm9scyIsInNldENvbnRyb2xzIiwiaGlkZUNvbnRyb2xzIiwic2V0SGlkZUNvbnRyb2xzIiwic2Vla2luZyIsInZvbHVtZSIsInNldFZvbHVtZSIsIm11dGVkIiwic2V0TXV0ZWQiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwic2hvd1ZvbHVtZUJhciIsInNldFNob3dWb2x1bWVCYXIiLCJzZXRWaWRlb1Byb2dyZXNzIiwic3RhcnRlZCIsInNldFN0YXJ0ZWQiLCJzZXRQcm9ncmVzcyIsIm5ld1Byb2dyZXNzIiwicHJldlN0YXRlIiwicGxheWVyUGFyZW50IiwicGxheWVyIiwiZmlyc3RQbGF5Iiwib25TdGFydCIsInBsYXlQYXVzZSIsImtleWJvYXJkQmVoYXZpb3VyIiwiZXZlbnQiLCJrZXlDb2RlIiwidG9nZ2xlTXV0ZWQiLCJvblBsYXkiLCJjdXJyZW50Iiwib25QYXVzZSIsImNvbnNvbGUiLCJsb2ciLCJvblNlZWtNb3VzZURvd24iLCJvblNlZWtDaGFuZ2UiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJvblNlZWtNb3VzZVVwIiwic2Vla1RvIiwib25Qcm9ncmVzcyIsInN0YXRlIiwib25FbmRlZCIsIm9uRHVyYXRpb24iLCJkdXIiLCJvbkNsaWNrRnVsbHNjcmVlbiIsImVsZW0iLCJjaGlsZHJlbiIsInNjcmVlbmZ1bGwiLCJpc0VuYWJsZWQiLCJyZXF1ZXN0Iiwib25jaGFuZ2UiLCJpc0Z1bGxzY3JlZW4iLCJoYW5kbGVPbk1vdXNlT3ZlciIsImhhbmRsZU9uTW91c2VMZWF2ZSIsImhhbmRsZU9uTW91c2VPdmVyVm9sdW1lIiwiaGFuZGxlT25Nb3VzZUxlYXZlVm9sdW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRpdGlvbmFsUHJvcHMiLCJjb25maWciLCJmaWxlIiwiYXR0cmlidXRlcyIsInNob3dPdmVybGF5Iiwic3R5bGVzIiwidmlkZW9QbGF5ZXIiLCJwbGF5ZXJXcmFwcGVyIiwiZSIsInBsYXllckVycm9yIiwiaGlkZSIsImZpcnN0UGxheVRyaWdnZXIiLCJwbGF5ZXJPdmVybGF5IiwidmlkZW9NZXRhZGF0YSIsInZpZGVvRHVyYXRpb24iLCJjb250cm9sc0JveCIsImZhZGVPdXQiLCJwcm9ncmVzc0JhciIsImNvbnRyb2wiLCJ2b2x1bWVCYXJXcmFwcGVyIiwidm9sdW1lQmFyIiwib3BhY2l0eSIsIndpZHRoIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJmdWxsc2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLEtBRGM7QUFFckJDLEVBQUFBLEdBQUcsRUFBRSxLQUZnQjtBQUdyQkMsRUFBQUEsWUFBWSxFQUFFLEdBSE87QUFJckJDLEVBQUFBLElBQUksRUFBRTtBQUplLENBQXZCOztBQU9BLFNB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RSxVQUFBbkIsS0FBSyxFQUFJO0FBQUE7O0FBQ2xCLFVBQUlBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QkgsUUFBQUEsU0FBUztBQUNWO0FBQ0YsS0FKUSxXQUpYO0FBU0UsSUFBQSxLQUFLLEVBQUMsa0JBVFI7QUFVRSxJQUFBLFFBQVEsRUFBRTtBQVZaLEtBWUUsNkJBQUMsNkJBQUQsT0FaRixDQS9DRixFQTZER2xDLGVBQWUsSUFDZDtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSx5QkFBRzBFLHNCQUFPYSxPQUFWLEVBQW1CYixzQkFBT29CLFVBQTFCLENBRmI7QUFHRSxJQUFBLE9BQU8sRUFBRTlGLGVBSFg7QUFJRSxJQUFBLFNBQVMsRUFBRSxVQUFBb0MsS0FBSyxFQUFJO0FBQUE7O0FBQ2xCLFVBQUlBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN4QnJDLFFBQUFBLGVBQWU7QUFDaEI7QUFDRixLQUpRLFdBSlg7QUFTRSxJQUFBLEtBQUssRUFBQyxnQkFUUjtBQVVFLElBQUEsUUFBUSxFQUFFO0FBVlosS0FZRSw2QkFBQywyQkFBRCxPQVpGLENBOURKLENBMUJGLENBdkRGLENBREYsQ0FERjtBQXFLRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1uYW1lZC1kZWZhdWx0XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0UGxheWVyIH0gZnJvbSAncmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL0ZpbGVQbGF5ZXInO1xuaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyL2VzL1NsaWRlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGxheWVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCAnLi9yYy1zbGlkZXIuc2Nzcyc7XG5pbXBvcnQgUmVmIGZyb20gJy4uL1JlZi9SZWYnO1xuaW1wb3J0IHsgRG93bmxvYWRJY29uLCBGdWxsc2NyZWVuSWNvbiwgTXV0ZUljb24sIFBhdXNlSWNvbiwgUGxheUJ1dHRvbkljb24sIFZvbHVtZUljb24sIFJvdW5kZWRQbGF5SWNvbiB9IGZyb20gJy4vVmlkZW9Db250cm9scyc7XG5pbXBvcnQgRHVyYXRpb24gZnJvbSAnLi9EdXJhdGlvbic7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5nID0ge1xuICBsaWdodDogZmFsc2UsXG4gIHBpcDogZmFsc2UsXG4gIHBsYXliYWNrUmF0ZTogMS4wLFxuICBsb29wOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIGlPUygpIHtcbiAgY29uc3QgaURldmljZXMgPSBbJ2lQYWQgU2ltdWxhdG9yJywgJ2lQaG9uZSBTaW11bGF0b3InLCAnaVBvZCBTaW11bGF0b3InLCAnaVBhZCcsICdpUGhvbmUnLCAnaVBvZCddO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgaWYgKCEhbmF2aWdhdG9yLnBsYXRmb3JtKSB7XG4gICAgd2hpbGUgKGlEZXZpY2VzLmxlbmd0aCkge1xuICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gaURldmljZXMucG9wKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBpbml0UHJvZ3Jlc3MgPSB7XG4gIGxvYWRlZDogMCxcbiAgbG9hZGVkU2Vjb25kczogMCxcbiAgcGxheWVkOiAwLFxuICBwbGF5ZWRTZWNvbmRzOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzdHlsaW5nID0ge30sXG4gICAgc3JjLFxuICAgIG5hdGl2ZSxcbiAgICBwb3N0ZXIsXG4gICAgb25Eb3dubG9hZFZpZGVvLFxuICAgIGVycm9yLFxuICAgIGVycm9yQ29tcG9uZW50LFxuICAgIG9uVmlkZW9TdGFydCxcbiAgICBvblRpY2ssXG4gICAgb3ZlcmxheSA9IGZhbHNlLFxuICAgIG92ZXJsYXlDb250ZW50ID0gbnVsbCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IHBsYXllcldyYXBwZXJDbGFzc05hbWUgPSAnJywgcGxheWVyQ2xhc3NOYW1lID0gJycgfSA9IHN0eWxpbmc7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSghIWlPUygpKTtcbiAgY29uc3QgW2hpZGVDb250cm9scywgc2V0SGlkZUNvbnRyb2xzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2Vla2luZyA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICBjb25zdCBbbXV0ZWQsIHNldE11dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3dWb2x1bWVCYXIsIHNldFNob3dWb2x1bWVCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbeyBsb2FkZWQsIGxvYWRlZFNlY29uZHMsIHBsYXllZCwgcGxheWVkU2Vjb25kcyB9LCBzZXRWaWRlb1Byb2dyZXNzXSA9IHVzZVN0YXRlKGluaXRQcm9ncmVzcyk7XG4gIGNvbnN0IFtzdGFydGVkLCBzZXRTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2V0UHJvZ3Jlc3MgPSB1c2VDYWxsYmFjayhuZXdQcm9ncmVzcyA9PiB7XG4gICAgc2V0VmlkZW9Qcm9ncmVzcyhwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCAuLi5uZXdQcm9ncmVzcyB9KSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcGxheWVyUGFyZW50ID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwbGF5ZXIgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGZpcnN0UGxheSA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3Qgb25TdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGFydGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcGxheVBhdXNlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBsYXlpbmcocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qga2V5Ym9hcmRCZWhhdmlvdXIgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHBsYXlQYXVzZSgpO1xuICAgIH0sXG4gICAgW3BsYXlQYXVzZV1cbiAgKTtcblxuICBjb25zdCB0b2dnbGVNdXRlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRNdXRlZChwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblBsYXkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0UGxheWluZyh0cnVlKTtcbiAgICBpZiAob25WaWRlb1N0YXJ0ICYmICFmaXJzdFBsYXkuY3VycmVudCkge1xuICAgICAgb25WaWRlb1N0YXJ0KCk7XG4gICAgICBmaXJzdFBsYXkuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbb25WaWRlb1N0YXJ0XSk7XG5cbiAgY29uc3Qgb25QYXVzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25QYXVzZScpO1xuICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25TZWVrTW91c2VEb3duID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvblNlZWtEb3duJyk7XG4gICAgc2Vla2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2Vla0NoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIHZhbHVlID0+IHtcbiAgICAgIHNldFByb2dyZXNzKHsgcGxheWVkOiBwYXJzZUZsb2F0KHZhbHVlKSB9KTtcbiAgICB9LFxuICAgIFtzZXRQcm9ncmVzc11cbiAgKTtcblxuICBjb25zdCBvblNlZWtNb3VzZVVwID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvblNlZWtEb3duJyk7XG4gICAgc2Vla2luZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgcGxheWVyLmN1cnJlbnQuc2Vla1RvKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uUHJvZ3Jlc3MgPSB1c2VDYWxsYmFjayhcbiAgICBzdGF0ZSA9PiB7XG4gICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gdXBkYXRlIHRpbWUgc2xpZGVyIGlmIHdlIGFyZSBub3QgY3VycmVudGx5IHNlZWtpbmdcbiAgICAgIGlmICghc2Vla2luZy5jdXJyZW50KSB7XG4gICAgICAgIHNldFByb2dyZXNzKHN0YXRlKTtcbiAgICAgICAgaWYgKG9uVGljayAmJiBwbGF5aW5nKSBvblRpY2soc3RhdGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3NlZWtpbmcsIHNldFByb2dyZXNzLCBvblRpY2ssIHBsYXlpbmddXG4gICk7XG5cbiAgY29uc3Qgb25FbmRlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25FbmRlZCcpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25EdXJhdGlvbiA9IHVzZUNhbGxiYWNrKGR1ciA9PiB7XG4gICAgY29uc29sZS5sb2coJ29uRHVyYXRpb24nLCBkdXIpO1xuICAgIHNldER1cmF0aW9uKGR1cik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsaWNrRnVsbHNjcmVlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtID0gcGxheWVyUGFyZW50LmN1cnJlbnQ7XG4gICAgY29uc29sZS5sb2coZWxlbSk7XG4gICAgaWYgKGVsZW0/LmNoaWxkcmVuWzBdICYmIHNjcmVlbmZ1bGwuaXNFbmFibGVkKSB7XG4gICAgICBzZXRDb250cm9scyh0cnVlKTtcbiAgICAgIHNjcmVlbmZ1bGwucmVxdWVzdChlbGVtLmNoaWxkcmVuWzBdKTtcbiAgICAgIHNjcmVlbmZ1bGwub25jaGFuZ2UoKCkgPT4ge1xuICAgICAgICBpZiAoIXNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVuKSBzZXRDb250cm9scyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVPbk1vdXNlT3ZlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaGlkZUNvbnRyb2xzKSBzZXRIaWRlQ29udHJvbHMoZmFsc2UpO1xuICB9LCBbaGlkZUNvbnRyb2xzXSk7XG5cbiAgY29uc3QgaGFuZGxlT25Nb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghaGlkZUNvbnRyb2xzKSBzZXRIaWRlQ29udHJvbHModHJ1ZSk7XG4gIH0sIFtoaWRlQ29udHJvbHNdKTtcblxuICBjb25zdCBoYW5kbGVPbk1vdXNlT3ZlclZvbHVtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXNob3dWb2x1bWVCYXIpIHNldFNob3dWb2x1bWVCYXIodHJ1ZSk7XG4gIH0sIFtzaG93Vm9sdW1lQmFyXSk7XG5cbiAgY29uc3QgaGFuZGxlT25Nb3VzZUxlYXZlVm9sdW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzaG93Vm9sdW1lQmFyKSBzZXRTaG93Vm9sdW1lQmFyKGZhbHNlKTtcbiAgfSwgW3Nob3dWb2x1bWVCYXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBwbGF5ZXJQYXJlbnQuY3VycmVudDtcbiAgICBpZiAoZWxlbT8uY2hpbGRyZW5bMF0pIHtcbiAgICAgIGVsZW0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVPbk1vdXNlTGVhdmUpO1xuICAgICAgZWxlbS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVPbk1vdXNlT3Zlcik7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoZWxlbT8uY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgZWxlbS5jaGlsZHJlblswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU9uTW91c2VMZWF2ZSk7XG4gICAgICAgIGVsZW0uY2hpbGRyZW5bMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlT25Nb3VzZU92ZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtoYW5kbGVPbk1vdXNlTGVhdmUsIGhhbmRsZU9uTW91c2VPdmVyXSk7XG5cbiAgY29uc3QgYWRkaXRpb25hbFByb3BzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHBvc3RlcikgcmV0dXJuIHsgY29uZmlnOiB7IGZpbGU6IHsgYXR0cmlidXRlczogeyBwb3N0ZXIgfSB9IH0gfTtcbiAgICByZXR1cm4ge307XG4gIH0sIFtwb3N0ZXJdKTtcblxuICBjb25zdCB7IGxpZ2h0LCBwaXAsIHBsYXliYWNrUmF0ZSwgbG9vcCB9ID0gZGVmYXVsdFNldHRpbmc7XG5cbiAgY29uc3Qgc2hvd092ZXJsYXkgPSBvdmVybGF5ICYmICFzdGFydGVkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy52aWRlb1BsYXllcil9IG9uS2V5VXA9e2tleWJvYXJkQmVoYXZpb3VyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMucGxheWVyV3JhcHBlciwgcGxheWVyV3JhcHBlckNsYXNzTmFtZSl9PlxuICAgICAgICB7IWVycm9yICYmIChcbiAgICAgICAgICA8UmVmIGlubmVyUmVmPXtwbGF5ZXJQYXJlbnR9PlxuICAgICAgICAgICAgPFJlYWN0UGxheWVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLnBsYXllciwgcGxheWVyQ2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgcmVmPXtwbGF5ZXJ9XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICB1cmw9e3NyY31cbiAgICAgICAgICAgICAgcGlwPXtwaXB9XG4gICAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XG4gICAgICAgICAgICAgIGNvbnRyb2xzPXtuYXRpdmUgfHwgY29udHJvbHN9XG4gICAgICAgICAgICAgIGxpZ2h0PXtsaWdodH1cbiAgICAgICAgICAgICAgbG9vcD17bG9vcH1cbiAgICAgICAgICAgICAgcGxheWJhY2tSYXRlPXtwbGF5YmFja1JhdGV9XG4gICAgICAgICAgICAgIHZvbHVtZT17dm9sdW1lfVxuICAgICAgICAgICAgICBtdXRlZD17bXV0ZWR9XG4gICAgICAgICAgICAgIG9uUmVhZHk9eygpID0+IGNvbnNvbGUubG9nKCdvblJlYWR5Jyl9XG4gICAgICAgICAgICAgIG9uU3RhcnQ9e29uU3RhcnR9XG4gICAgICAgICAgICAgIG9uUGxheT17b25QbGF5fVxuICAgICAgICAgICAgICBvblBhdXNlPXtvblBhdXNlfVxuICAgICAgICAgICAgICBvbkJ1ZmZlcj17KCkgPT4gY29uc29sZS5sb2coJ29uQnVmZmVyJyl9XG4gICAgICAgICAgICAgIG9uU2Vlaz17ZSA9PiBjb25zb2xlLmxvZygnb25TZWVrJywgZSl9XG4gICAgICAgICAgICAgIG9uRW5kZWQ9e29uRW5kZWR9XG4gICAgICAgICAgICAgIG9uRXJyb3I9e2UgPT4gY29uc29sZS5sb2coJ29uRXJyb3InLCBlKX1cbiAgICAgICAgICAgICAgb25Qcm9ncmVzcz17b25Qcm9ncmVzc31cbiAgICAgICAgICAgICAgb25EdXJhdGlvbj17b25EdXJhdGlvbn1cbiAgICAgICAgICAgICAgcHJvZ3Jlc3NJbnRlcnZhbD17NDUwfVxuICAgICAgICAgICAgICB7Li4uYWRkaXRpb25hbFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlZj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5wbGF5ZXJFcnJvciwgeyBbc3R5bGVzLmhpZGVdOiAhZXJyb3IgfSl9PntlcnJvckNvbXBvbmVudH08L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmZpcnN0UGxheVRyaWdnZXIsIHsgW3N0eWxlcy5oaWRlXTogZXJyb3IsIFtzdHlsZXMucGxheWVyT3ZlcmxheV06IHNob3dPdmVybGF5IH0pfVxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3BsYXlQYXVzZX1cbiAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykgcGxheVBhdXNlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB0aXRsZT17cGxheWluZyA/ICdQYXVzZScgOiAnUGxheSd9XG4gICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVPbk1vdXNlT3Zlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU9uTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93T3ZlcmxheSA/IDxSb3VuZGVkUGxheUljb24gLz4gOiBudWxsfVxuICAgICAgICAgIHtzaG93T3ZlcmxheSAmJiBvdmVybGF5Q29udGVudCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9NZXRhZGF0YX0+XG4gICAgICAgICAgICAgIDxkaXY+e292ZXJsYXlDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvRHVyYXRpb259PlxuICAgICAgICAgICAgICAgIHtkdXJhdGlvbiA/IDxEdXJhdGlvbiBzZWNvbmRzPXtkdXJhdGlvbn0gc2hvd1RpbWVVbml0IC8+IDogJ0NhbGN1bGF0aW5nIGR1cmF0aW9uLi4uJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250cm9sc0JveCwge1xuICAgICAgICAgICAgW3N0eWxlcy5oaWRlXTogbmF0aXZlIHx8IGNvbnRyb2xzIHx8IGVycm9yIHx8IHNob3dPdmVybGF5LFxuICAgICAgICAgICAgW3N0eWxlcy5mYWRlT3V0XTogaGlkZUNvbnRyb2xzICYmIHBsYXlpbmcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVPbk1vdXNlT3Zlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU9uTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5ncmFkaWVudEJnLCB7XG4gICAgICAgICAgICAgIFtzdHlsZXMuaGlkZV06IG5hdGl2ZSB8fCBjb250cm9scyB8fCBlcnJvcixcbiAgICAgICAgICAgICAgW3N0eWxlcy5mYWRlT3V0XTogaGlkZUNvbnRyb2xzICYmIHBsYXlpbmcsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnByb2dyZXNzQmFyLCAncHgyIG1iMScpfT5cbiAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDAxfVxuICAgICAgICAgICAgICBvbkJlZm9yZUNoYW5nZT17b25TZWVrTW91c2VEb3dufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWVrQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXtvblNlZWtNb3VzZVVwfVxuICAgICAgICAgICAgICB2YWx1ZT17cGxheWVkfVxuICAgICAgICAgICAgICBpbmNsdWRlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2xzLCAncHgyIG1iMScpfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtwbGF5UGF1c2V9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgcGxheVBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0aXRsZT17cGxheWluZyA/ICdQYXVzZScgOiAnUGxheSd9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGxheWluZyA/IDxQYXVzZUljb24gLz4gOiA8UGxheUJ1dHRvbkljb24gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMudm9sdW1lQmFyV3JhcHBlcil9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlT25Nb3VzZU92ZXJWb2x1bWV9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlT25Nb3VzZUxlYXZlVm9sdW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udHJvbCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTXV0ZWR9XG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHRvZ2dsZU11dGVkKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttdXRlZCA/IDxNdXRlSWNvbiAvPiA6IDxWb2x1bWVJY29uIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wsIHN0eWxlcy52b2x1bWVCYXIpfVxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4wMDF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldFZvbHVtZShwYXJzZUZsb2F0KHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZvbHVtZX1cbiAgICAgICAgICAgICAgICBpbmNsdWRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDEsIHdpZHRoOiAnMTAwcHgnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtOdW1iZXIuaXNGaW5pdGUoZHVyYXRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5kdXJhdGlvbil9PlxuICAgICAgICAgICAgICAgIDxEdXJhdGlvbiBzZWNvbmRzPXtkdXJhdGlvbiAqIHBsYXllZH0gLz4vPER1cmF0aW9uIHNlY29uZHM9e2R1cmF0aW9ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250cm9sLCBzdHlsZXMuZnVsbHNjcmVlbil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tGdWxsc2NyZWVufVxuICAgICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJmdWxsc2NyZWVuIHZpZGVvXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGdWxsc2NyZWVuSWNvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7b25Eb3dubG9hZFZpZGVvICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wsIHN0eWxlcy5mdWxsc2NyZWVuKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRvd25sb2FkVmlkZW99XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3dubG9hZFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0aXRsZT1cImRvd25sb2FkIHZpZGVvXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZEljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19