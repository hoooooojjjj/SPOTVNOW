import React, { useEffect, useState } from "react";

const Login = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  // 로그인 input state
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // 로그인 입력 상태 변경
  const handleLoginInputChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 폼 submit
  const hanbleLoginSubmit = (e) => {
    e.preventDefault();
    alert();
  };

  return (
    <div className="Login">
      <div className="backgound">
        <img
          className="backgound_img"
          src={process.env.PUBLIC_URL + "assets/Login_backgound.png"}
        ></img>
      </div>
      <div className="right">
        <div className="logo_img">
          <img src={process.env.PUBLIC_URL + "assets/logo.png"}></img>
        </div>
        <form onSubmit={hanbleLoginSubmit} className="Login_form">
          <input
            className="Login_input"
            type="emali"
            name="email"
            value={login.email}
            onChange={handleLoginInputChange}
            placeholder="이메일"
          ></input>
          <input
            className="Login_input"
            name="password"
            type="password"
            value={login.password}
            onChange={handleLoginInputChange}
            placeholder="비밀번호"
            autoComplete="off"
          ></input>
          <button className="Login_btn" type="submit">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
