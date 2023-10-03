import React, { useEffect } from "react";
import Navgation from "../../components/Navgation";
import LiveNow from "./LiveNow";

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
        <div className="LiveNow_wrap">
          <LiveNow />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
