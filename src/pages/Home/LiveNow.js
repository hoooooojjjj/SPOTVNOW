import React from "react";

const LiveNow = () => {
  return (
    <div className="LiveNow">
      <div
        className="LiveNow_img_wrap"
        onClick={() => {
          const newWindow = window.open(
            "/live?title1=[농구] 대한민국 vs 바레인&title2=농구 | 남자 농구 8강 진출 결정전 | 21:00 ~&url=https://www.youtube.com/embed/1DiJyPYtyuo?si=v9_XsQ3YNgeOMg5C"
          );
          if (newWindow) {
            // 새 창이 열린 경우에만 title 변경
            newWindow.onload = function () {
              newWindow.document.title = "SPOTV NOW(스포티비 나우)";
            };
          }
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
        <div
          className="LiveNow_right_ele"
          onClick={() => {
            const newWindow1 = window.open(
              "/live?title1=[야구] 대한민국 vs 대만&title2=야구 | 남자 야구 조별리그 | 19:30 ~&url=https://www.youtube.com/embed/lDnnAfqD-nA?si=iufhRs2tvE0wvqaC"
            );
            if (newWindow1) {
              // 새 창이 열린 경우에만 title 변경
              newWindow1.onload = function () {
                newWindow1.document.title = "SPOTV NOW(스포티비 나우)";
              };
            }
          }}
        >
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
        <div
          className="LiveNow_right_ele"
          onClick={() => {
            const newWindow2 = window.open(
              "/live?title1=[육상] 메달 결정전 - 여자 멀리뛰기, 장애물 달리기&title2=육상 | 메달 결정전 | 20:00 ~&url=https://www.youtube.com/embed/I3EeibEEHNo?si=bq6QfVBOzsL7tDoj"
            );
            if (newWindow2) {
              // 새 창이 열린 경우에만 title 변경
              newWindow2.onload = function () {
                newWindow2.document.title = "SPOTV NOW(스포티비 나우)";
              };
            }
          }}
        >
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
