import React, { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Live = () => {
  // 쿼리 스트링으로 URL DB 활용
  const [liveOdj, setliveOdj] = useSearchParams();
  const title1 = liveOdj.get("title1");
  const title2 = liveOdj.get("title2");
  const url = liveOdj.get("url");

  // live 채팅, live now toggle state
  const [isLiveNow, setisLiveNow] = useState(true);

  // navigate
  const nav = useNavigate();
  // 요소 가져오기
  const LiveNow = useRef();
  const LiveChat = useRef();
  // live 채팅, live now toggle 함수
  const isLiveNowToggle = () => {
    setisLiveNow(true);
    LiveNow.current.style.backgroundColor = "rgb(23, 23, 23)";
    LiveChat.current.style.backgroundColor = "rgb(35, 35, 35)";
  };
  const isLiveChatToggle = () => {
    setisLiveNow(false);
    LiveChat.current.style.backgroundColor = "rgb(23, 23, 23)";
    LiveNow.current.style.backgroundColor = "rgb(35, 35, 35)";
  };
  return (
    <div className="Live">
      <div className="video">
        <iframe
          className="youtube_video"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          allowFullScreen
        ></iframe>
        <p className="text1">{title1}</p>
        <p className="text2">{title2}</p>
      </div>
      <div className="live_right">
        <div className="live_right_top">
          <div className="live_chat" ref={LiveNow} onClick={isLiveChatToggle}>
            Live 채팅
          </div>
          <div className="live_now" ref={LiveChat} onClick={isLiveNowToggle}>
            Live NOW
          </div>
        </div>
        {isLiveNow ? (
          <div className="live_now_wrap">
            <div className="live_now_title">
              <p>농구</p>
            </div>
            <div
              className="live_now_text"
              onClick={() => {
                nav(
                  "/live?title1=[농구] 대한민국 vs 바레인&title2=농구 | 남자 농구 8강 진출 결정전 | 21:00 ~&url=https://www.youtube.com/embed/1DiJyPYtyuo?si=v9_XsQ3YNgeOMg5C"
                );
              }}
            >
              <p>[농구] 대한민국 vs 바레인</p>
            </div>
            <div className="live_now_title">
              <p>야구</p>
            </div>
            <div
              className="live_now_text"
              onClick={() => {
                nav(
                  "/live?title1=[야구] 대한민국 vs 대만&title2=야구 | 남자 야구 조별리그 | 19:30 ~&url=https://www.youtube.com/embed/lDnnAfqD-nA?si=iufhRs2tvE0wvqaC"
                );
              }}
            >
              <p>[야구] 대한민국 vs 대만</p>
            </div>
            <div className="live_now_title">
              <p>육상</p>
            </div>
            <div
              className="live_now_text"
              onClick={() => {
                nav(
                  "/live?title1=[육상] 메달 결정전 - 여자 멀리뛰기, 장애물 달리기&title2=육상 | 메달 결정전 | 20:00 ~&url=https://www.youtube.com/embed/I3EeibEEHNo?si=bq6QfVBOzsL7tDoj"
                );
              }}
            >
              <p>[육상] 메달 결정전 - 여자 멀리뛰기, 장애물 달리기</p>
            </div>
          </div>
        ) : (
          <div className="live_chat_wrap">
            <p>
              채팅으로 함께 즐기면
              <br /> 더 재미있게 경기를 시청할 수 있습니다.
            </p>
            <button>입장하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Live;
