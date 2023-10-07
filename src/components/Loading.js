import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
const Loading = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  return (
    <div className="Loading">
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loading;
