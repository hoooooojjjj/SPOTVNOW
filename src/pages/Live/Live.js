import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Live = () => {
  const { id } = useParams();

  // live 채팅, live now toggle state
  const [isLiveNow, setisLiveNow] = useState(true);

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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1DiJyPYtyuo?si=8cGeaqh0pAj2uXVX"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          allowFullScreen
        ></iframe>
        <p className="text1">[농구] 대한민국 vs 바레인</p>
        <p className="text2">농구 | 남자 농구 8강 진출 결정전 | 21:00 ~</p>
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
              <p>야구</p>
            </div>
            <div className="live_now_text">
              <p>[야구] 대한민국 vs 대만</p>
            </div>
            <div className="live_now_title">
              <p>육상</p>
            </div>
            <div className="live_now_text">
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
