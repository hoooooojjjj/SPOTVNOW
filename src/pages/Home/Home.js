import React, { useEffect } from "react";
import Navigation from "../../components/Navgation";

const Home = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  return (
    <div className="Home">
      <header>
        <Navigation />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
