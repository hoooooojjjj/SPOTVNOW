import React, { useEffect } from "react";

const SignUp = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);
  return <div style={{ color: "white" }}>SignUp</div>;
};

export default SignUp;
