import React from "react";

const TopVOD = ({ title, VideoSlideInfo }) => {
  return (
    <div className="TopVOD">
      <p className="title">{title}</p>
      <div className="slide_wrap">
        <div className="firSlide">
          <div className="slide_wrap1">
            <img
              src={process.env.PUBLIC_URL + `/assets/TopVOD_img1.png`}
              alt="비디오"
            />
            <div className="text">
              <p className="text_111">하이라이트</p>
              <p className="text_222">[PL] 7R 토트넘 vs 리버풀 하이라이트</p>
              <p className="text_333">프리미어리그 | 2023.10.01</p>
            </div>
          </div>
        </div>
        <div className="slide">
          {VideoSlideInfo.map((videoInfo, index) =>
            index !== 0 ? (
              <div key={index} className="slide_wrap2">
                <img
                  src={process.env.PUBLIC_URL + `/assets/${videoInfo.url}`}
                  alt="비디오"
                />
                <div className="text">
                  <p className="text_1111">{videoInfo.text1}</p>
                  <p className="text_2222">{videoInfo.text2}</p>
                  <p className="text_3333">{videoInfo.text3}</p>
                </div>
              </div>
            ) : (
              <div key={index}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopVOD;
