import React, { useEffect } from "react";

const Loading = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  return <div className="Loading">Loading...</div>;
};

export default Loading;
