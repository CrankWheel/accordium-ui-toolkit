"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPlayer = _interopRequireDefault(require("react-player"));

var screenfull = _interopRequireWildcard(require("screenfull"));

var _reactDom = require("react-dom");

var _rcSlider = _interopRequireDefault(require("rc-slider"));

var _renderprops = require("react-spring/renderprops");

var _classNames = _interopRequireDefault(require("../../../etc/classNames"));

var _Iconography = require("../../Iconography");

var _Duration = _interopRequireDefault(require("../Duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

class DefaultPlayer extends _react.Component {
  constructor(props) {
    var _this,
        _arrowCheckId = {},
        _arrowCheckId2 = {},
        _arrowCheckId3 = {},
        _arrowCheckId4 = {},
        _arrowCheckId5 = {},
        _arrowCheckId6 = {},
        _arrowCheckId7 = {},
        _arrowCheckId8 = {},
        _arrowCheckId9 = {},
        _arrowCheckId10 = {},
        _arrowCheckId11 = {},
        _arrowCheckId12 = {},
        _arrowCheckId13 = {},
        _arrowCheckId14 = {},
        _arrowCheckId15 = {},
        _arrowCheckId16 = {},
        _arrowCheckId17 = {},
        _arrowCheckId18 = {};

    super(props);
    _this = this;

    _defineProperty(this, "keyboardBehaviour", function (event) {
      _newArrowCheck(this, _arrowCheckId);

      console.log('keycode: ', event.keyCode);

      if (event.keyCode === 32) {
        _this.playPause();
      }
    }.bind(_arrowCheckId));

    _defineProperty(this, "playPause", function () {
      _newArrowCheck(this, _arrowCheckId2);

      _this.setState({
        playing: !_this.state.playing
      });
    }.bind(_arrowCheckId2));

    _defineProperty(this, "stop", function () {
      _newArrowCheck(this, _arrowCheckId3);

      _this.setState({
        playing: false
      });
    }.bind(_arrowCheckId3));

    _defineProperty(this, "setVolume", function (value) {
      _newArrowCheck(this, _arrowCheckId4);

      _this.setState({
        volume: parseFloat(value)
      });
    }.bind(_arrowCheckId4));

    _defineProperty(this, "toggleMuted", function () {
      var _this2 = this;

      _newArrowCheck(this, _arrowCheckId5);

      _this.setState(function (prevState) {
        _newArrowCheck(this, _this2);

        return {
          muted: !prevState.muted
        };
      }.bind(this));
    }.bind(_arrowCheckId5));

    _defineProperty(this, "onPlay", function () {
      _newArrowCheck(this, _arrowCheckId6);

      console.log('onPlay');

      _this.setState({
        playing: true
      });

      if (_this.props.onVideoStart && !_this.firstPlay) {
        _this.props.onVideoStart();

        _this.firstPlay = true;
      }
    }.bind(_arrowCheckId6));

    _defineProperty(this, "onPause", function () {
      _newArrowCheck(this, _arrowCheckId7);

      console.log('onPause');

      _this.setState({
        playing: false
      });
    }.bind(_arrowCheckId7));

    _defineProperty(this, "onSeekMouseDown", function () {
      _newArrowCheck(this, _arrowCheckId8);

      _this.setState({
        seeking: true
      });
    }.bind(_arrowCheckId8));

    _defineProperty(this, "onSeekChange", function (value) {
      _newArrowCheck(this, _arrowCheckId9);

      _this.setState({
        played: parseFloat(value)
      });
    }.bind(_arrowCheckId9));

    _defineProperty(this, "onSeekMouseUp", function (value) {
      _newArrowCheck(this, _arrowCheckId10);

      _this.setState({
        seeking: false
      });

      _this.player.current.seekTo(parseFloat(value));
    }.bind(_arrowCheckId10));

    _defineProperty(this, "onProgress", function (state) {
      _newArrowCheck(this, _arrowCheckId11);

      if (!_this.state.seeking) {
        _this.setState(state);
      }
    }.bind(_arrowCheckId11));

    _defineProperty(this, "onEnded", function () {
      _newArrowCheck(this, _arrowCheckId12);

      console.log('onEnded');

      _this.setState({
        playing: _this.state.loop
      });
    }.bind(_arrowCheckId12));

    _defineProperty(this, "onDuration", function (duration) {
      _newArrowCheck(this, _arrowCheckId13);

      console.log('onDuration', duration);

      _this.setState({
        duration
      });
    }.bind(_arrowCheckId13));

    _defineProperty(this, "onClickFullscreen", function () {
      var _this3 = this;

      _newArrowCheck(this, _arrowCheckId14);

      const elem = (0, _reactDom.findDOMNode)(_this.player.current);

      if (elem.children[0] && screenfull.isEnabled) {
        _this.setState({
          controls: true
        }, function () {
          var _this4 = this;

          _newArrowCheck(this, _this3);

          screenfull.request(elem.children[0]);
          screenfull.onchange(function () {
            _newArrowCheck(this, _this4);

            if (!screenfull.isFullscreen) _this.setState({
              controls: false
            });
          }.bind(this));
        }.bind(this));
      }
    }.bind(_arrowCheckId14));

    _defineProperty(this, "handleOnMouseOver", function () {
      _newArrowCheck(this, _arrowCheckId15);

      const {
        hideControls
      } = _this.state;
      if (hideControls) _this.setState({
        hideControls: false
      });
    }.bind(_arrowCheckId15));

    _defineProperty(this, "handleOnMouseLeave", function () {
      _newArrowCheck(this, _arrowCheckId16);

      const {
        hideControls
      } = _this.state;
      if (!hideControls) _this.setState({
        hideControls: true
      });
    }.bind(_arrowCheckId16));

    _defineProperty(this, "handleOnMouseOverVolume", function () {
      _newArrowCheck(this, _arrowCheckId17);

      const {
        showVolumeBar
      } = _this.state;
      if (!showVolumeBar) _this.setState({
        showVolumeBar: true
      });
    }.bind(_arrowCheckId17));

    _defineProperty(this, "handleOnMouseLeaveVolume", function () {
      _newArrowCheck(this, _arrowCheckId18);

      const {
        showVolumeBar
      } = _this.state;
      if (showVolumeBar) _this.setState({
        showVolumeBar: false
      });
    }.bind(_arrowCheckId18));

    this.state = {
      playing: false,
      controls: !!iOS(),
      volume: 0.5,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      hideControls: false,
      showVolumeBar: false
    };
    this.player = _react.default.createRef();
    this.firstPlay = false;
  }

  componentDidMount() {
    const elem = (0, _reactDom.findDOMNode)(this.player.current);

    if (elem && elem.children[0]) {
      elem.children[0].addEventListener('mouseout', this.handleOnMouseLeave);
      elem.children[0].addEventListener('mouseover', this.handleOnMouseOver);
    }
  }

  componentWillUnmount() {
    const elem = (0, _reactDom.findDOMNode)(this.player.current);

    if (elem && elem.children[0]) {
      elem.children[0].removeEventListener('mouseout', this.handleOnMouseLeave);
      elem.children[0].removeEventListener('mouseover', this.handleOnMouseOver);
    }
  }

  render() {
    var _this5 = this;

    const {
      className,
      style,
      src,
      native,
      poster,
      onDownloadVideo,
      error,
      errorComponent
    } = this.props;
    const {
      light,
      pip,
      playbackRate,
      loop
    } = defaultSetting;
    const {
      playing,
      controls,
      volume,
      muted,
      played,
      loaded,
      duration,
      hideControls,
      showVolumeBar
    } = this.state;
    const additionalProps = {};
    if (poster) additionalProps.config = {
      attributes: {
        poster
      }
    };
    return _react.default.createElement("div", {
      className: (0, _classNames.default)('accordium video default-player', className),
      style: style,
      onKeyUp: this.keyboardBehaviour
    }, _react.default.createElement("div", {
      className: "player-wrapper"
    }, error ? _react.default.createElement("div", {
      className: "player-error"
    }, errorComponent) : _react.default.createElement(_reactPlayer.default, _extends({
      ref: this.player,
      className: "player",
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
        _newArrowCheck(this, _this5);

        return console.log('onReady');
      }.bind(this),
      onStart: function () {
        _newArrowCheck(this, _this5);

        return console.log('onStart');
      }.bind(this),
      onPlay: this.onPlay,
      onPause: this.onPause,
      onBuffer: function () {
        _newArrowCheck(this, _this5);

        return console.log('onBuffer');
      }.bind(this),
      onSeek: function (e) {
        _newArrowCheck(this, _this5);

        return console.log('onSeek', e);
      }.bind(this),
      onEnded: this.onEnded,
      onError: function (e) {
        _newArrowCheck(this, _this5);

        return console.log('onError', e);
      }.bind(this),
      onProgress: this.onProgress,
      onDuration: this.onDuration
    }, additionalProps))), !error && _react.default.createElement("div", {
      className: "video-box",
      role: "button",
      onClick: this.playPause,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this5);

        if (event.keyCode === 13) {
          this.playPause();
        }
      }.bind(this),
      title: playing ? 'Pause' : 'Play',
      tabIndex: 0,
      onMouseEnter: this.handleOnMouseOver,
      onMouseLeave: this.handleOnMouseLeave
    }), _react.default.createElement("div", {
      className: (0, _classNames.default)('gradient-bg', {
        hide: native || controls || error,
        'fade-out': hideControls && playing
      })
    }), _react.default.createElement("div", {
      className: (0, _classNames.default)('controls-box', {
        hide: native || controls || error,
        'fade-out': hideControls && playing
      }),
      onMouseEnter: this.handleOnMouseOver,
      onMouseLeave: this.handleOnMouseLeave
    }, _react.default.createElement("div", {
      className: "progress-bar-container px2 mb1"
    }, _react.default.createElement(_rcSlider.default, {
      className: "progress-seek",
      min: 0,
      max: 1,
      step: 0.001,
      onBeforeChange: this.onSeekMouseDown,
      onChange: this.onSeekChange,
      onAfterChange: this.onSeekMouseUp,
      value: played,
      included: true
    })), _react.default.createElement("div", {
      className: "bottom-controls px2 mb1"
    }, _react.default.createElement("div", {
      role: "button",
      className: "control",
      onClick: this.playPause,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this5);

        if (event.keyCode === 13) {
          this.playPause();
        }
      }.bind(this),
      title: playing ? 'Pause' : 'Play',
      tabIndex: 0
    }, _react.default.createElement(_Iconography.SVGIcon, {
      size: "md"
    }, playing ? _react.default.createElement(_Iconography.PauseIcon, null) : _react.default.createElement(_Iconography.PlayButtonIcon, null))), _react.default.createElement("div", {
      className: "volume-bar-wrapper",
      onMouseEnter: this.handleOnMouseOverVolume,
      onMouseLeave: this.handleOnMouseLeaveVolume
    }, _react.default.createElement("div", {
      className: "control",
      onClick: this.toggleMuted,
      role: "button",
      tabIndex: 0,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this5);

        if (event.keyCode === 13) this.toggleMuted();
      }.bind(this)
    }, _react.default.createElement(_Iconography.SVGIcon, {
      size: "md"
    }, muted ? _react.default.createElement(_Iconography.MuteIcon, null) : _react.default.createElement(_Iconography.VolumeIcon, null))), _react.default.createElement(_renderprops.Transition, {
      items: showVolumeBar,
      from: {
        width: 0,
        opacity: 0
      },
      enter: {
        width: 100,
        opacity: 1
      },
      leave: {
        width: 0,
        opacity: 0
      },
      config: {
        duration: 100
      }
    }, function (show) {
      var _this6 = this;

      _newArrowCheck(this, _this5);

      return show && function (props) {
        _newArrowCheck(this, _this6);

        return _react.default.createElement(_rcSlider.default, {
          className: "control volume-bar",
          min: 0,
          max: 1,
          step: 0.001,
          onChange: this.setVolume,
          value: volume,
          included: true,
          style: props
        });
      }.bind(this);
    }.bind(this))), Number.isFinite(duration) && _react.default.createElement("div", {
      className: "duration text-3"
    }, _react.default.createElement(_Duration.default, {
      seconds: duration * played
    }), "/", _react.default.createElement(_Duration.default, {
      seconds: duration
    })), _react.default.createElement("div", {
      role: "button",
      className: "control fullscreen",
      onClick: this.onClickFullscreen,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this5);

        if (event.keyCode === 13) {
          this.playPause();
        }
      }.bind(this),
      title: "fullscreen video",
      tabIndex: 0
    }, _react.default.createElement(_Iconography.SVGIcon, {
      size: "md"
    }, _react.default.createElement(_Iconography.FullscreenIcon, null))), onDownloadVideo && _react.default.createElement("div", {
      role: "button",
      className: "control fullscreen",
      onClick: onDownloadVideo,
      onKeyDown: function (event) {
        _newArrowCheck(this, _this5);

        if (event.keyCode === 13) {
          this.playPause();
        }
      }.bind(this),
      title: "fullscreen video",
      tabIndex: 0
    }, _react.default.createElement(_Iconography.SVGIcon, {
      size: "md"
    }, _react.default.createElement(_Iconography.DownloadIcon, null))))));
  }

}

exports.default = DefaultPlayer;

_defineProperty(DefaultPlayer, "defaultProps", {
  native: false,
  error: false,
  errorComponent: null
});