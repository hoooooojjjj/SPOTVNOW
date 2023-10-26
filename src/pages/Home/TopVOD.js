import React from "react";
import { useNavigate } from "react-router-dom";

const TopVOD = ({ title, VideoSlideInfo }) => {
  const nav = useNavigate();
  return (
    <div className="TopVOD">
      <p className="title">{title}</p>
      <div className="slide_wrap">
        <div className="firSlide">
          <div
            className="slide_wrap1"
            onClick={() => {
              nav(
                `/vod?title1=[PL] 7R 토트넘 vs 리버풀 하이라이트&title2=프리미어리그 | 2023.10.01
                &text=토트넘 vs 리버풀&youtubeUrl=https://www.youtube.com/embed/hvWhYCl7Gs8?si=FLWyf4KZgQ0yKPX9`
              );
            }}
          >
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
          {VideoSlideInfo.map((videoInfo, index) => (
            <div
              key={index}
              className="slide_wrap2"
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
                <p className="text_1111">{videoInfo.text1}</p>
                <p className="text_2222">{videoInfo.text2}</p>
                <p className="text_3333">{videoInfo.text3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopVOD;
