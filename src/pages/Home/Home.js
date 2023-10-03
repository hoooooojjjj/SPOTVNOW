import React, { useEffect } from "react";
import Navgation from "../../components/Navgation";
import LiveNow from "./LiveNow";
import VideoSlide from "./VideoSlide";

import { today } from "../../util/VideoSlideImgUrl";

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
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
