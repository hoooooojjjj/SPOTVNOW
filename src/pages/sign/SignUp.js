import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../myfirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  const [signup, setsignup] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  // navigation
  const nav = useNavigate();

  // 회원가입 입력 상태 변경
  const handlesignUpInputChange = (e) => {
    setsignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입 submit
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signup.password === signup.passwordCheck) {
      createUserWithEmailAndPassword(auth, signup.email, signup.password)
        .then((userCredential) => {
          alert("회원가입이 완료되었습니다");
          nav("/", { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
        });
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <div className="SignUp">
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
          <p className="text1" style={{ marginBottom: 0 }}>
            통합회원가입
          </p>
          <img
            src={process.env.PUBLIC_URL + "assets/signup.png"}
            alt="로고"
          ></img>
          <p className="text2">
            통합회원 계정으로 사용하실 회원정보를 입력해주세요.
          </p>
        </div>
        <form className="SignUp_form" onSubmit={handleSignUpSubmit}>
          <input
            type="email"
            name="email"
            value={signup.email}
            onChange={handlesignUpInputChange}
            placeholder="이메일"
          />
          <input
            type="password"
            name="password"
            value={signup.password}
            onChange={handlesignUpInputChange}
            placeholder="비밀번호"
          />
          <input
            type="password"
            name="passwordCheck"
            value={signup.passwordCheck}
            onChange={handlesignUpInputChange}
            placeholder="비밀번호 확인"
          />
          <select placeholder="선호종목">
            <option>축구</option>
            <option>야구</option>
            <option>농구</option>
            <option>테니스</option>
            <option>종합격투기</option>
            <option>배구</option>
            <option>골프</option>
            <option>기타</option>
          </select>
          <br />
          <button style={{ marginTop: 30 }}>가입완료</button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
