import React from "react";

const LiveNow = () => {
  return (
    <div className="LiveNow">
      <div className="LiveNow_img_wrap">
        <img
          className="live_now"
          src={process.env.PUBLIC_URL + "/assets/live_now.png"}
        />
        <img
          className="live_now_img1"
          src={process.env.PUBLIC_URL + "/assets/live_now_img1.png"}
        />
        <div className="live_now_img1_text">
          <img
            className="live"
            src={process.env.PUBLIC_URL + "/assets/live.png"}
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
          />
          <div style={{ display: "block" }}>
            <img
              style={{ marginTop: 10 }}
              className="live"
              src={process.env.PUBLIC_URL + "/assets/live.png"}
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
          />
          <div style={{ display: "block" }}>
            <img
              className="live"
              style={{ marginTop: 10 }}
              src={process.env.PUBLIC_URL + "/assets/live.png"}
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
