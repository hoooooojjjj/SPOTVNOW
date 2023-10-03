import React, { useEffect } from "react";
import Navgation from "../../components/Navgation";
import LiveNow from "./LiveNow";
import VideoSlide from "./VideoSlide";

import { today, gold, today_VOD, prim, cham } from "../../util/VideoSlideInfo";
import VideoSlideLeage from "./VideoSlideLeage";

const Home = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  return (
    <div className="Home">
      <header>
        <Navgation />
      </header>
      <main>
        <div className="home_element_wrap">
          <LiveNow />
          <VideoSlide
            title={"[항저우 NOW] 오늘의 아시안게임"}
            VideoSlideImgUrl={today}
          />
          <VideoSlide
            title={"[항저우 NOW] 금빛으로 물든 순간들✨"}
            VideoSlideImgUrl={gold}
          />
          <VideoSlide title={"오늘의 추천 VOD"} VideoSlideImgUrl={today_VOD} />
          <VideoSlideLeage
            title={"프리미어리그"}
            VideoSlideImgUrl={prim}
            logo={"prim"}
          />
          <VideoSlideLeage
            title={"챔피언스리그"}
            VideoSlideImgUrl={cham}
            logo={"cham"}
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
