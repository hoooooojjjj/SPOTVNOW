import React from "react";
import { useNavigate } from "react-router-dom";

const VideoSlide = ({ title, VideoSlideInfo }) => {
  const nav = useNavigate();
  return (
    <div className="VideoSlide">
      <p className="title">{title}</p>
      <div className="slide">
        {VideoSlideInfo.map((videoInfo, index) => (
          <div
            key={index}
            className="slide_wrap"
            onClick={() => {
              nav(
                `/vod?title1=${videoInfo.text2}&title2=${videoInfo.text3}&text=${videoInfo.text4}&youtubeUrl=${videoInfo.youtubeUrl}`
              );
            }}
          >
            <img
              src={process.env.PUBLIC_URL + `/assets/${videoInfo.url}`}
              alt="비디오"
            />
            <div className="text">
              <p className="text_1">{videoInfo.text1}</p>
              <p className="text_2">{videoInfo.text2}</p>
              <p className="text_3">{videoInfo.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSlide;
