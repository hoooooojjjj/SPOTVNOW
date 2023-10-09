import React from "react";
import { useNavigate } from "react-router-dom";

const VideoSlideLeage = ({ title, VideoSlideInfo, logo }) => {
  const nav = useNavigate();
  return (
    <div className="VideoSlide">
      <div className="title">
        <img
          src={process.env.PUBLIC_URL + `/assets/${logo}_logo.png`}
          alt="리그 로고"
        />
        <p>{title}</p>
      </div>
      <div className="slide">
        {VideoSlideInfo.map((videoInfo, index) => (
          <div key={index} className="slide_wrap">
            <img
              src={process.env.PUBLIC_URL + `/assets/${videoInfo.url}`}
              alt="비디오"
              onClick={() => {
                nav(
                  `/vod?title1=${videoInfo.text2}&title2=${videoInfo.text3}&text=${videoInfo.text4}&youtubeUrl=${videoInfo.youtubeUrl}`
                );
              }}
            />
            <div className="text">
              <p className="text_11">{videoInfo.text1}</p>
              <p className="text_22">{videoInfo.text2}</p>
              <p className="text_3">{videoInfo.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlideLeage;
