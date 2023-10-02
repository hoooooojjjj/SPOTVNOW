import React, { useEffect, useState } from "react";
import { auth } from "../../myfirebase";
import {
  sendPasswordResetEmail,
  //   fetchSignInMethodsForEmail,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const SignUpCheck = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  // 이메일 입력
  const [email, setEmail] = useState("");

  // navgation
  const nav = useNavigate();

  // 비밀번호 찾기 - 비밀번호 재설정 이메일 보내기
  const findPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("비밀번호 재설정 메일이 발송되었습니다");
      })
      .catch((error) => {});
  };

  return (
    <div className="SignUpCheck">
      <header>
        <div className="header">
          <img
            onClick={() => {
              nav("/");
            }}
            src={process.env.PUBLIC_URL + "assets/logo.png"}
            alt="로고"
          ></img>
        </div>
      </header>
      <main>
        <div className="text_wrap">
          <p className="text1">비밀번호 찾기</p>
          <p className="text2">이메일 계정으로 찾기</p>
          <p className="text2">
            이메일 계정의 주소로 비밀번호 재설정 메일이 발송됩니다.
          </p>
        </div>
        <div className="SignUpCheck_input">
          <form onSubmit={findPassword}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일 입력"
            />
            <br />
            <button>발송</button>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default SignUpCheck;
