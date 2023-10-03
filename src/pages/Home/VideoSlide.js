import React from "react";

const VideoSlide = ({ title, VideoSlideImgUrl }) => {
  return (
    <div className="VideoSlide">
      <p className="title">{title}</p>
      <div className="slide">
        {VideoSlideImgUrl.map((videoInfo, index) => (
          <div key={index} className="slide_wrap">
            <img src={process.env.PUBLIC_URL + `/assets/${videoInfo.url}`} />
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
