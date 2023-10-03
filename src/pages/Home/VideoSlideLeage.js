import React from "react";

const VideoSlideLeage = ({ title, VideoSlideImgUrl, logo }) => {
  return (
    <div className="VideoSlide">
      <div className="title">
        <img src={process.env.PUBLIC_URL + `/assets/${logo}_logo.png`} />
        <p>{title}</p>
      </div>
      <div className="slide">
        {VideoSlideImgUrl.map((videoInfo, index) => (
          <div key={index} className="slide_wrap">
            <img src={process.env.PUBLIC_URL + `/assets/${videoInfo.url}`} />
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
