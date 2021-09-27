import React, { memo } from 'react';

const PlayButtonIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_69" data-name="Group 69" transform="translate(-9208 -7051)">
        <rect id="Rectangle_49" data-name="Rectangle 49" width="100%" height="100%" transform="translate(9208 7051)" fill="none" />
        <path
          id="play"
          d="M13.262,6.74l-11-6.5A1.492,1.492,0,0,0,0,1.528v13a1.5,1.5,0,0,0,2.262,1.291l11-6.5A1.5,1.5,0,0,0,13.262,6.74Z"
          transform="translate(9217 7058.968)"
          fill="#fff"
        />
      </g>
    </svg>
  );
});

const VolumeIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_70" data-name="Group 70" transform="translate(-9246 -7051)">
        <rect id="Rectangle_50" data-name="Rectangle 50" width="100%" height="100%" transform="translate(9246 7051)" fill="none" />
        <path
          id="audio"
          d="M8.063,18.06,4.727,21.4H.9a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,0,.9.9H4.727L8.063,31.93A.9.9,0,0,0,9.6,31.294V18.7A.9.9,0,0,0,8.063,18.06Zm8.749-1.915a.907.907,0,1,0-1,1.517,8.761,8.761,0,0,1,0,14.668.907.907,0,1,0,1,1.517,10.576,10.576,0,0,0,0-17.7ZM18,25a6.924,6.924,0,0,0-3.216-5.859.9.9,0,0,0-1.242.28.911.911,0,0,0,.278,1.251,5.125,5.125,0,0,1,0,8.656.91.91,0,0,0-.278,1.251.9.9,0,0,0,1.242.28A6.923,6.923,0,0,0,18,25Zm-5.316-2.882a.9.9,0,0,0-.868,1.577,1.478,1.478,0,0,1,0,2.611.9.9,0,0,0,.868,1.577,3.279,3.279,0,0,0,0-5.765Z"
          transform="translate(9251 7042.004)"
          fill="#fff"
        />
      </g>
    </svg>
  );
});

const DownloadIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_71" data-name="Group 71" transform="translate(-9283 -7051)">
        <rect id="Rectangle_51" data-name="Rectangle 51" width="100%" height="100%" transform="translate(9283 7051)" fill="none" />
        <path
          id="download"
          d="M14.53,50.082H.969A.966.966,0,0,1,0,49.113v-.969a.966.966,0,0,1,.969-.969H14.53a.966.966,0,0,1,.969.969v.969A.966.966,0,0,1,14.53,50.082ZM11.85,38.761,9.2,41.408v-8.44A.966.966,0,0,0,8.234,32H7.265a.966.966,0,0,0-.969.969v8.44L3.649,38.761a.965.965,0,0,0-1.368,0l-.686.686a.965.965,0,0,0,0,1.368l5.469,5.469a.965.965,0,0,0,1.368,0L13.9,40.815a.965.965,0,0,0,0-1.368l-.686-.686A.96.96,0,0,0,11.85,38.761Z"
          transform="translate(9291 7026)"
          fill="#fff"
        />
      </g>
    </svg>
  );
});

const FullscreenIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_72" data-name="Group 72" transform="translate(-9322 -7051)">
        <rect id="Rectangle_52" data-name="Rectangle 52" width="100%" height="100%" transform="translate(9322 7051)" fill="none" />
        <g id="baseline-fullscreen-24px_1_" data-name="baseline-fullscreen-24px (1)" transform="translate(9322.04 7052.041)">
          <path
            id="Path_7"
            data-name="Path 7"
            d="M7.384,16.571H5V23h5.96V20.429H7.384ZM5,11.429H7.384V7.571H10.96V5H5Zm17.3,9H18.727V23h5.96V16.571H22.3ZM18.727,5V7.571H22.3v3.857h2.384V5Z"
            transform="translate(0.96 0.96)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
});

const MuteIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_74" data-name="Group 74" transform="translate(-9246 -7091)">
        <path
          id="mute"
          d="M17.857,71.431l1.765-1.765a.624.624,0,0,0,0-.883L18.74,67.9a.624.624,0,0,0-.883,0l-1.765,1.765L14.326,67.9a.624.624,0,0,0-.883,0l-.883.883a.624.624,0,0,0,0,.883l1.765,1.765L12.561,73.2a.624.624,0,0,0,0,.883l.883.883a.624.624,0,0,0,.883,0L16.092,73.2l1.765,1.765a.624.624,0,0,0,.883,0l.883-.883a.624.624,0,0,0,0-.883Z"
          transform="translate(9250 7035.996)"
          fill="#fff"
        />
        <g id="Group_73" data-name="Group 73" transform="translate(0 40)">
          <rect id="Rectangle_50" data-name="Rectangle 50" width="100%" height="100%" transform="translate(9246 7051)" fill="none" />
          <path
            id="audio"
            d="M8.063,18.06,4.727,21.4H.9a.9.9,0,0,0-.9.9v5.4a.9.9,0,0,0,.9.9H4.727L8.063,31.93A.9.9,0,0,0,9.6,31.294V18.7A.9.9,0,0,0,8.063,18.06Z"
            transform="translate(9251 7042.004)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
});

const PauseIcon = memo(props => {
  const { style, className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" style={style} className={className}>
      <g id="Group_76" data-name="Group 76" transform="translate(-9158 -7051)">
        <path
          id="pause"
          d="M4.5,45h-3A1.5,1.5,0,0,1,0,43.5v-11A1.5,1.5,0,0,1,1.5,31h3A1.5,1.5,0,0,1,6,32.5v11A1.5,1.5,0,0,1,4.5,45ZM14,43.5v-11A1.5,1.5,0,0,0,12.5,31h-3A1.5,1.5,0,0,0,8,32.5v11A1.5,1.5,0,0,0,9.5,45h3A1.5,1.5,0,0,0,14,43.5Z"
          transform="translate(9166.678 7028.805)"
          fill="#fff"
        />
        <g id="Group_75" data-name="Group 75" transform="translate(-50)">
          <rect id="Rectangle_49" data-name="Rectangle 49" width="32" height="32" transform="translate(9208 7051)" fill="none" />
        </g>
      </g>
    </svg>
  );
});

export { PlayButtonIcon, VolumeIcon, FullscreenIcon, DownloadIcon, MuteIcon, PauseIcon };
