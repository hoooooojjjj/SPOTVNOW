import React from "react";
import { useNavigate } from "react-router-dom";

const LiveNow = () => {
  const nav = useNavigate();
  return (
    <div className="LiveNow">
      <div
        className="LiveNow_img_wrap"
        onClick={() => {
          nav("/live/대한민국 vs 바레인");
        }}
      >
        <img
          className="live_now"
          src={process.env.PUBLIC_URL + "/assets/live_now.png"}
          alt="live now"
        />
        <img
          className="live_now_img1"
          src={process.env.PUBLIC_URL + "/assets/live_now_img1.png"}
          alt="대한민국 vs 바레인"
        />
        <div className="live_now_img1_text">
          <img
            className="live"
            src={process.env.PUBLIC_URL + "/assets/live.png"}
            alt="live"
          />
          <p>
            <span>[농구] 대한민국 vs 바레인</span>
            <br />
            농구 | 남자 농구 8강 진출 결정전 | 21:00 ~
          </p>
        </div>
      </div>
      <div className="LiveNow_right">
        <div className="LiveNow_right_ele">
          <img
            className="live_now_img2"
            src={process.env.PUBLIC_URL + "/assets/live_now_img2.png"}
            alt="대한민국 vs 대만"
          />
          <div style={{ display: "block" }}>
            <img
              style={{ marginTop: 10 }}
              className="live"
              src={process.env.PUBLIC_URL + "/assets/live.png"}
              alt="live"
            />
            <p className="LiveNow_right_ele_text">
              [야구] 대한민국 vs 대만 <br />
              <span>야구 | 남자 야구 조별리그 | 19:30 ~</span>
            </p>
          </div>
        </div>
        <div className="LiveNow_right_ele">
          <img
            className="live_now_img3"
            src={process.env.PUBLIC_URL + "/assets/live_now_img3.png"}
            alt="메달 결정전"
          />
          <div style={{ display: "block" }}>
            <img
              className="live"
              style={{ marginTop: 10 }}
              src={process.env.PUBLIC_URL + "/assets/live.png"}
              alt="live"
            />

            <p className="LiveNow_right_ele_text">
              [육상] 메달 결정전 - 여자 멀리뛰기, 장애물 달리기
              <br />
              <span>육상 | 메달 결정전 | 20:00 ~</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNow;
