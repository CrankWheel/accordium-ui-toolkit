"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    onTick
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
      if (onTick) onTick(state);
    }
  }.bind(this), [seeking, onTick, setProgress]);
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
    onStart: function () {
      _newArrowCheck(this, _this);

      return console.log('onStart');
    }.bind(this),
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
    onDuration: onDuration
  }, additionalProps))), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.playerError, {
      [_PlayerModule.default.hide]: !error
    })
  }, errorComponent), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.firstPlayTrigger, {
      [_PlayerModule.default.hide]: error
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
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(_PlayerModule.default.controlsBox, {
      [_PlayerModule.default.hide]: native || controls || error,
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

var _default = Player;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aXRhbi9jb21wb25lbnQvUGxheWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRTZXR0aW5nIiwibGlnaHQiLCJwaXAiLCJwbGF5YmFja1JhdGUiLCJsb29wIiwiaU9TIiwiaURldmljZXMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsImxlbmd0aCIsInBvcCIsImluaXRQcm9ncmVzcyIsImxvYWRlZCIsImxvYWRlZFNlY29uZHMiLCJwbGF5ZWQiLCJwbGF5ZWRTZWNvbmRzIiwiUGxheWVyIiwicHJvcHMiLCJzdHlsaW5nIiwic3JjIiwibmF0aXZlIiwicG9zdGVyIiwib25Eb3dubG9hZFZpZGVvIiwiZXJyb3IiLCJlcnJvckNvbXBvbmVudCIsIm9uVmlkZW9TdGFydCIsIm9uVGljayIsInBsYXllcldyYXBwZXJDbGFzc05hbWUiLCJwbGF5ZXJDbGFzc05hbWUiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImNvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoaWRlQ29udHJvbHMiLCJzZXRIaWRlQ29udHJvbHMiLCJzZWVraW5nIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwibXV0ZWQiLCJzZXRNdXRlZCIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJzaG93Vm9sdW1lQmFyIiwic2V0U2hvd1ZvbHVtZUJhciIsInNldFZpZGVvUHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsIm5ld1Byb2dyZXNzIiwicHJldlN0YXRlIiwicGxheWVyUGFyZW50IiwicGxheWVyIiwiZmlyc3RQbGF5IiwicGxheVBhdXNlIiwia2V5Ym9hcmRCZWhhdmlvdXIiLCJldmVudCIsImtleUNvZGUiLCJ0b2dnbGVNdXRlZCIsIm9uUGxheSIsImN1cnJlbnQiLCJvblBhdXNlIiwiY29uc29sZSIsImxvZyIsIm9uU2Vla01vdXNlRG93biIsIm9uU2Vla0NoYW5nZSIsInZhbHVlIiwicGFyc2VGbG9hdCIsIm9uU2Vla01vdXNlVXAiLCJzZWVrVG8iLCJvblByb2dyZXNzIiwic3RhdGUiLCJvbkVuZGVkIiwib25EdXJhdGlvbiIsImR1ciIsIm9uQ2xpY2tGdWxsc2NyZWVuIiwiZWxlbSIsImNoaWxkcmVuIiwic2NyZWVuZnVsbCIsImlzRW5hYmxlZCIsInJlcXVlc3QiLCJvbmNoYW5nZSIsImlzRnVsbHNjcmVlbiIsImhhbmRsZU9uTW91c2VPdmVyIiwiaGFuZGxlT25Nb3VzZUxlYXZlIiwiaGFuZGxlT25Nb3VzZU92ZXJWb2x1bWUiLCJoYW5kbGVPbk1vdXNlTGVhdmVWb2x1bWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZGl0aW9uYWxQcm9wcyIsImNvbmZpZyIsImZpbGUiLCJhdHRyaWJ1dGVzIiwic3R5bGVzIiwidmlkZW9QbGF5ZXIiLCJwbGF5ZXJXcmFwcGVyIiwiZSIsInBsYXllckVycm9yIiwiaGlkZSIsImZpcnN0UGxheVRyaWdnZXIiLCJjb250cm9sc0JveCIsImZhZGVPdXQiLCJwcm9ncmVzc0JhciIsImNvbnRyb2wiLCJ2b2x1bWVCYXJXcmFwcGVyIiwidm9sdW1lQmFyIiwib3BhY2l0eSIsIndpZHRoIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJmdWxsc2NyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLGNBQWMsR0FBRztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLEtBRGM7QUFFckJDLEVBQUFBLEdBQUcsRUFBRSxLQUZnQjtBQUdyQkMsRUFBQUEsWUFBWSxFQUFFLEdBSE87QUFJckJDLEVBQUFBLElBQUksRUFBRTtBQUplLENBQXZCOztBQU9BLFNBQVNDLEdBQVQsR0FBZTtBQUNiLFFBQU1DLFFBQVEsR0FBRyxDQUFDLGdCQUFELEVBQW1CLGtCQUFuQixFQUF1QyxnQkFBdkMsRUFBeUQsTUFBekQsRUFBaUUsUUFBakUsRUFBMkUsTUFBM0UsQ0FBakI7O0FBR0EsTUFB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RixPQUMyQyw2QkFBQyxpQkFBRDtBQUFVLElBQUEsT0FBTyxFQUFFMEI7QUFBbkIsSUFEM0MsQ0EzQ0osRUErQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBRUUsSUFBQSxTQUFTLEVBQUUseUJBQUdrRCxzQkFBT1UsT0FBVixFQUFtQlYsc0JBQU9pQixVQUExQixDQUZiO0FBR0UsSUFBQSxPQUFPLEVBQUVuQyxpQkFIWDtBQUlFLElBQUEsU0FBUyxFQUFFLFVBQUFuQixLQUFLLEVBQUk7QUFBQTs7QUFDbEIsVUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCSCxRQUFBQSxTQUFTO0FBQ1Y7QUFDRixLQUpRLFdBSlg7QUFTRSxJQUFBLEtBQUssRUFBQyxrQkFUUjtBQVVFLElBQUEsUUFBUSxFQUFFO0FBVlosS0FZRSw2QkFBQyw2QkFBRCxPQVpGLENBL0NGLEVBNkRHN0IsZUFBZSxJQUNkO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLHlCQUFHb0Usc0JBQU9VLE9BQVYsRUFBbUJWLHNCQUFPaUIsVUFBMUIsQ0FGYjtBQUdFLElBQUEsT0FBTyxFQUFFckYsZUFIWDtBQUlFLElBQUEsU0FBUyxFQUFFLFVBQUErQixLQUFLLEVBQUk7QUFBQTs7QUFDbEIsVUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO0FBQ3hCaEMsUUFBQUEsZUFBZTtBQUNoQjtBQUNGLEtBSlEsV0FKWDtBQVNFLElBQUEsS0FBSyxFQUFDLGdCQVRSO0FBVUUsSUFBQSxRQUFRLEVBQUU7QUFWWixLQVlFLDZCQUFDLDJCQUFELE9BWkYsQ0E5REosQ0ExQkYsQ0E1Q0YsQ0FERixDQURGO0FBMEpEOztlQUVjTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW5hbWVkLWRlZmF1bHRcbmltcG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RQbGF5ZXIgfSBmcm9tICdyZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRmlsZVBsYXllcic7XG5pbXBvcnQgKiBhcyBzY3JlZW5mdWxsIGZyb20gJ3NjcmVlbmZ1bGwnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXIvZXMvU2xpZGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QbGF5ZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICcuL3JjLXNsaWRlci5zY3NzJztcbmltcG9ydCBSZWYgZnJvbSAnLi4vUmVmL1JlZic7XG5pbXBvcnQgeyBEb3dubG9hZEljb24sIEZ1bGxzY3JlZW5JY29uLCBNdXRlSWNvbiwgUGF1c2VJY29uLCBQbGF5QnV0dG9uSWNvbiwgVm9sdW1lSWNvbiB9IGZyb20gJy4vVmlkZW9Db250cm9scyc7XG5pbXBvcnQgRHVyYXRpb24gZnJvbSAnLi9EdXJhdGlvbic7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5nID0ge1xuICBsaWdodDogZmFsc2UsXG4gIHBpcDogZmFsc2UsXG4gIHBsYXliYWNrUmF0ZTogMS4wLFxuICBsb29wOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIGlPUygpIHtcbiAgY29uc3QgaURldmljZXMgPSBbJ2lQYWQgU2ltdWxhdG9yJywgJ2lQaG9uZSBTaW11bGF0b3InLCAnaVBvZCBTaW11bGF0b3InLCAnaVBhZCcsICdpUGhvbmUnLCAnaVBvZCddO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgaWYgKCEhbmF2aWdhdG9yLnBsYXRmb3JtKSB7XG4gICAgd2hpbGUgKGlEZXZpY2VzLmxlbmd0aCkge1xuICAgICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gaURldmljZXMucG9wKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBpbml0UHJvZ3Jlc3MgPSB7XG4gIGxvYWRlZDogMCxcbiAgbG9hZGVkU2Vjb25kczogMCxcbiAgcGxheWVkOiAwLFxuICBwbGF5ZWRTZWNvbmRzOiAwLFxufTtcblxuZnVuY3Rpb24gUGxheWVyKHByb3BzKSB7XG4gIGNvbnN0IHsgc3R5bGluZyA9IHt9LCBzcmMsIG5hdGl2ZSwgcG9zdGVyLCBvbkRvd25sb2FkVmlkZW8sIGVycm9yLCBlcnJvckNvbXBvbmVudCwgb25WaWRlb1N0YXJ0LCBvblRpY2sgfSA9IHByb3BzO1xuICBjb25zdCB7IHBsYXllcldyYXBwZXJDbGFzc05hbWUgPSAnJywgcGxheWVyQ2xhc3NOYW1lID0gJycgfSA9IHN0eWxpbmc7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSghIWlPUygpKTtcbiAgY29uc3QgW2hpZGVDb250cm9scywgc2V0SGlkZUNvbnRyb2xzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2Vla2luZyA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICBjb25zdCBbbXV0ZWQsIHNldE11dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3dWb2x1bWVCYXIsIHNldFNob3dWb2x1bWVCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbeyBsb2FkZWQsIGxvYWRlZFNlY29uZHMsIHBsYXllZCwgcGxheWVkU2Vjb25kcyB9LCBzZXRWaWRlb1Byb2dyZXNzXSA9IHVzZVN0YXRlKGluaXRQcm9ncmVzcyk7XG4gIGNvbnN0IHNldFByb2dyZXNzID0gdXNlQ2FsbGJhY2sobmV3UHJvZ3Jlc3MgPT4ge1xuICAgIHNldFZpZGVvUHJvZ3Jlc3MocHJldlN0YXRlID0+ICh7IC4uLnByZXZTdGF0ZSwgLi4ubmV3UHJvZ3Jlc3MgfSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHBsYXllclBhcmVudCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcGxheWVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBmaXJzdFBsYXkgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IHBsYXlQYXVzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRQbGF5aW5nKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGtleWJvYXJkQmVoYXZpb3VyID0gdXNlQ2FsbGJhY2soXG4gICAgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSBwbGF5UGF1c2UoKTtcbiAgICB9LFxuICAgIFtwbGF5UGF1c2VdXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlTXV0ZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TXV0ZWQocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25QbGF5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFBsYXlpbmcodHJ1ZSk7XG4gICAgaWYgKG9uVmlkZW9TdGFydCAmJiAhZmlyc3RQbGF5LmN1cnJlbnQpIHtcbiAgICAgIG9uVmlkZW9TdGFydCgpO1xuICAgICAgZmlyc3RQbGF5LmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cbiAgfSwgW29uVmlkZW9TdGFydF0pO1xuXG4gIGNvbnN0IG9uUGF1c2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29uUGF1c2UnKTtcbiAgICBzZXRQbGF5aW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uU2Vla01vdXNlRG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25TZWVrRG93bicpO1xuICAgIHNlZWtpbmcuY3VycmVudCA9IHRydWU7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblNlZWtDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICB2YWx1ZSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcyh7IHBsYXllZDogcGFyc2VGbG9hdCh2YWx1ZSkgfSk7XG4gICAgfSxcbiAgICBbc2V0UHJvZ3Jlc3NdXG4gICk7XG5cbiAgY29uc3Qgb25TZWVrTW91c2VVcCA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25TZWVrRG93bicpO1xuICAgIHNlZWtpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgIHBsYXllci5jdXJyZW50LnNlZWtUbyhwYXJzZUZsb2F0KHZhbHVlKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblByb2dyZXNzID0gdXNlQ2FsbGJhY2soXG4gICAgc3RhdGUgPT4ge1xuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHVwZGF0ZSB0aW1lIHNsaWRlciBpZiB3ZSBhcmUgbm90IGN1cnJlbnRseSBzZWVraW5nXG4gICAgICBpZiAoIXNlZWtpbmcuY3VycmVudCkge1xuICAgICAgICBzZXRQcm9ncmVzcyhzdGF0ZSk7XG4gICAgICAgIGlmIChvblRpY2spIG9uVGljayhzdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbc2Vla2luZywgb25UaWNrLCBzZXRQcm9ncmVzc11cbiAgKTtcblxuICBjb25zdCBvbkVuZGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvbkVuZGVkJyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkR1cmF0aW9uID0gdXNlQ2FsbGJhY2soZHVyID0+IHtcbiAgICBjb25zb2xlLmxvZygnb25EdXJhdGlvbicsIGR1cik7XG4gICAgc2V0RHVyYXRpb24oZHVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2xpY2tGdWxsc2NyZWVuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBwbGF5ZXJQYXJlbnQuY3VycmVudDtcbiAgICBjb25zb2xlLmxvZyhlbGVtKTtcbiAgICBpZiAoZWxlbT8uY2hpbGRyZW5bMF0gJiYgc2NyZWVuZnVsbC5pc0VuYWJsZWQpIHtcbiAgICAgIHNldENvbnRyb2xzKHRydWUpO1xuICAgICAgc2NyZWVuZnVsbC5yZXF1ZXN0KGVsZW0uY2hpbGRyZW5bMF0pO1xuICAgICAgc2NyZWVuZnVsbC5vbmNoYW5nZSgoKSA9PiB7XG4gICAgICAgIGlmICghc2NyZWVuZnVsbC5pc0Z1bGxzY3JlZW4pIHNldENvbnRyb2xzKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU9uTW91c2VPdmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChoaWRlQ29udHJvbHMpIHNldEhpZGVDb250cm9scyhmYWxzZSk7XG4gIH0sIFtoaWRlQ29udHJvbHNdKTtcblxuICBjb25zdCBoYW5kbGVPbk1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFoaWRlQ29udHJvbHMpIHNldEhpZGVDb250cm9scyh0cnVlKTtcbiAgfSwgW2hpZGVDb250cm9sc10pO1xuXG4gIGNvbnN0IGhhbmRsZU9uTW91c2VPdmVyVm9sdW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2hvd1ZvbHVtZUJhcikgc2V0U2hvd1ZvbHVtZUJhcih0cnVlKTtcbiAgfSwgW3Nob3dWb2x1bWVCYXJdKTtcblxuICBjb25zdCBoYW5kbGVPbk1vdXNlTGVhdmVWb2x1bWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHNob3dWb2x1bWVCYXIpIHNldFNob3dWb2x1bWVCYXIoZmFsc2UpO1xuICB9LCBbc2hvd1ZvbHVtZUJhcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHBsYXllclBhcmVudC5jdXJyZW50O1xuICAgIGlmIChlbGVtPy5jaGlsZHJlblswXSkge1xuICAgICAgZWxlbS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZU9uTW91c2VMZWF2ZSk7XG4gICAgICBlbGVtLmNoaWxkcmVuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZU9uTW91c2VPdmVyKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChlbGVtPy5jaGlsZHJlblswXSkge1xuICAgICAgICBlbGVtLmNoaWxkcmVuWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlT25Nb3VzZUxlYXZlKTtcbiAgICAgICAgZWxlbS5jaGlsZHJlblswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVPbk1vdXNlT3Zlcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2hhbmRsZU9uTW91c2VMZWF2ZSwgaGFuZGxlT25Nb3VzZU92ZXJdKTtcblxuICBjb25zdCBhZGRpdGlvbmFsUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAocG9zdGVyKSByZXR1cm4geyBjb25maWc6IHsgZmlsZTogeyBhdHRyaWJ1dGVzOiB7IHBvc3RlciB9IH0gfSB9O1xuICAgIHJldHVybiB7fTtcbiAgfSwgW3Bvc3Rlcl0pO1xuXG4gIGNvbnN0IHsgbGlnaHQsIHBpcCwgcGxheWJhY2tSYXRlLCBsb29wIH0gPSBkZWZhdWx0U2V0dGluZztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudmlkZW9QbGF5ZXIpfSBvbktleVVwPXtrZXlib2FyZEJlaGF2aW91cn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnBsYXllcldyYXBwZXIsIHBsYXllcldyYXBwZXJDbGFzc05hbWUpfT5cbiAgICAgICAgeyFlcnJvciAmJiAoXG4gICAgICAgICAgPFJlZiBpbm5lclJlZj17cGxheWVyUGFyZW50fT5cbiAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5wbGF5ZXIsIHBsYXllckNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHJlZj17cGxheWVyfVxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgdXJsPXtzcmN9XG4gICAgICAgICAgICAgIHBpcD17cGlwfVxuICAgICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgICBjb250cm9scz17bmF0aXZlIHx8IGNvbnRyb2xzfVxuICAgICAgICAgICAgICBsaWdodD17bGlnaHR9XG4gICAgICAgICAgICAgIGxvb3A9e2xvb3B9XG4gICAgICAgICAgICAgIHBsYXliYWNrUmF0ZT17cGxheWJhY2tSYXRlfVxuICAgICAgICAgICAgICB2b2x1bWU9e3ZvbHVtZX1cbiAgICAgICAgICAgICAgbXV0ZWQ9e211dGVkfVxuICAgICAgICAgICAgICBvblJlYWR5PXsoKSA9PiBjb25zb2xlLmxvZygnb25SZWFkeScpfVxuICAgICAgICAgICAgICBvblN0YXJ0PXsoKSA9PiBjb25zb2xlLmxvZygnb25TdGFydCcpfVxuICAgICAgICAgICAgICBvblBsYXk9e29uUGxheX1cbiAgICAgICAgICAgICAgb25QYXVzZT17b25QYXVzZX1cbiAgICAgICAgICAgICAgb25CdWZmZXI9eygpID0+IGNvbnNvbGUubG9nKCdvbkJ1ZmZlcicpfVxuICAgICAgICAgICAgICBvblNlZWs9e2UgPT4gY29uc29sZS5sb2coJ29uU2VlaycsIGUpfVxuICAgICAgICAgICAgICBvbkVuZGVkPXtvbkVuZGVkfVxuICAgICAgICAgICAgICBvbkVycm9yPXtlID0+IGNvbnNvbGUubG9nKCdvbkVycm9yJywgZSl9XG4gICAgICAgICAgICAgIG9uUHJvZ3Jlc3M9e29uUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgIG9uRHVyYXRpb249e29uRHVyYXRpb259XG4gICAgICAgICAgICAgIHsuLi5hZGRpdGlvbmFsUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVmPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnBsYXllckVycm9yLCB7IFtzdHlsZXMuaGlkZV06ICFlcnJvciB9KX0+e2Vycm9yQ29tcG9uZW50fTwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuZmlyc3RQbGF5VHJpZ2dlciwgeyBbc3R5bGVzLmhpZGVdOiBlcnJvciB9KX1cbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtwbGF5UGF1c2V9XG4gICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHBsYXlQYXVzZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdGl0bGU9e3BsYXlpbmcgPyAnUGF1c2UnIDogJ1BsYXknfVxuICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlT25Nb3VzZU92ZXJ9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVPbk1vdXNlTGVhdmV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250cm9sc0JveCwge1xuICAgICAgICAgICAgW3N0eWxlcy5oaWRlXTogbmF0aXZlIHx8IGNvbnRyb2xzIHx8IGVycm9yLFxuICAgICAgICAgICAgW3N0eWxlcy5mYWRlT3V0XTogaGlkZUNvbnRyb2xzICYmIHBsYXlpbmcsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVPbk1vdXNlT3Zlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU9uTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5ncmFkaWVudEJnLCB7XG4gICAgICAgICAgICAgIFtzdHlsZXMuaGlkZV06IG5hdGl2ZSB8fCBjb250cm9scyB8fCBlcnJvcixcbiAgICAgICAgICAgICAgW3N0eWxlcy5mYWRlT3V0XTogaGlkZUNvbnRyb2xzICYmIHBsYXlpbmcsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnByb2dyZXNzQmFyLCAncHgyIG1iMScpfT5cbiAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDAxfVxuICAgICAgICAgICAgICBvbkJlZm9yZUNoYW5nZT17b25TZWVrTW91c2VEb3dufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWVrQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkFmdGVyQ2hhbmdlPXtvblNlZWtNb3VzZVVwfVxuICAgICAgICAgICAgICB2YWx1ZT17cGxheWVkfVxuICAgICAgICAgICAgICBpbmNsdWRlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2xzLCAncHgyIG1iMScpfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtwbGF5UGF1c2V9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgcGxheVBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB0aXRsZT17cGxheWluZyA/ICdQYXVzZScgOiAnUGxheSd9XG4gICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGxheWluZyA/IDxQYXVzZUljb24gLz4gOiA8UGxheUJ1dHRvbkljb24gLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMudm9sdW1lQmFyV3JhcHBlcil9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlT25Nb3VzZU92ZXJWb2x1bWV9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlT25Nb3VzZUxlYXZlVm9sdW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udHJvbCl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTXV0ZWR9XG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHRvZ2dsZU11dGVkKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttdXRlZCA/IDxNdXRlSWNvbiAvPiA6IDxWb2x1bWVJY29uIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wsIHN0eWxlcy52b2x1bWVCYXIpfVxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4wMDF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldFZvbHVtZShwYXJzZUZsb2F0KHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZvbHVtZX1cbiAgICAgICAgICAgICAgICBpbmNsdWRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IDEsIHdpZHRoOiAnMTAwcHgnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtOdW1iZXIuaXNGaW5pdGUoZHVyYXRpb24pICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5kdXJhdGlvbil9PlxuICAgICAgICAgICAgICAgIDxEdXJhdGlvbiBzZWNvbmRzPXtkdXJhdGlvbiAqIHBsYXllZH0gLz4vPER1cmF0aW9uIHNlY29uZHM9e2R1cmF0aW9ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250cm9sLCBzdHlsZXMuZnVsbHNjcmVlbil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tGdWxsc2NyZWVufVxuICAgICAgICAgICAgICBvbktleURvd249e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJmdWxsc2NyZWVuIHZpZGVvXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGdWxsc2NyZWVuSWNvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7b25Eb3dubG9hZFZpZGVvICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRyb2wsIHN0eWxlcy5mdWxsc2NyZWVuKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRvd25sb2FkVmlkZW99XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Eb3dubG9hZFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0aXRsZT1cImRvd25sb2FkIHZpZGVvXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZEljb24gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXX0=