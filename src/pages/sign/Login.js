import React, { useEffect, useState } from "react";
import { auth } from "../../myfirebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

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

  // navgation
  const nav = useNavigate();

  // 로그인 에러 메세지
  const [loginerr, setLoginerr] = useState("");

  // 로그인 입력 상태 변경
  const handleLoginInputChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 폼 submit -> 로그인 구현
  const hanbleLoginSubmit = (e) => {
    e.preventDefault();
    if (login.email.length > 1 && login.password.length > 1) {
      signInWithEmailAndPassword(auth, login.email, login.password)
        .then((userCredential) => {
          nav("/");
        })
        .catch((error) => {
          setLoginerr(error.message);
        });
    } else {
    }
  };

  // 구글 로그인 구현
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
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
          <div className="loginerr">{loginerr && loginerr}</div>
        </form>
        <div className="socialLogin">
          <p>소셜 계정으로 로그인하기</p>
          <img
            src={process.env.PUBLIC_URL + "assets/google_login.png"}
            onClick={googleLogin}
          ></img>
        </div>
        <div className="findEmailPassword">
          <Link style={{ textDecoration: "none" }}>비밀번호 찾기</Link>
          <p>
            아직 회원이 아니신가요? <Link to={"/signupcheck"}>회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
