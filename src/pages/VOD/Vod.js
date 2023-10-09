import React, { useEffect } from "react";
import Navgation from "../../components/Navgation";
import Footer from "../../components/Footer";
import { useSearchParams } from "react-router-dom";

const Vod = () => {
  // 쿼리스트링 가져오기
  const [VodOdj, setVodObj] = useSearchParams();
  const title1 = VodOdj.get("title1");
  const title2 = VodOdj.get("title2");
  const text = VodOdj.get("text");
  const youtubeUrl = VodOdj.get("youtubeUrl");
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);
  return (
    <div className="Vod">
      <header>
        <Navgation />
      </header>
      <main>
        <div className="vod_top">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src={youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
            <p className="text1">{title1}</p>
            <p className="text2">{title2}</p>
          </div>
          <div className="vod_right_wrap">
            <div className="vod_right_top">
              <b>주요 장면 </b> {text}
            </div>
            <div className="vod_right"></div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Vod;
