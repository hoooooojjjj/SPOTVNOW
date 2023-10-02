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

  // 이메일 확인 메세지
  const [checkEmail, setcheckEmail] = useState("");

  // navgation
  const nav = useNavigate();

  // 이메일 확인
  const emailCheck = (e) => {
    e.preventDefault();
    // fetchSignInMethodsForEmail(auth, email)
    //   .then((signInMethods) => {
    //     console.log(email);
    //     console.log(signInMethods);
    //     if (signInMethods.includes("password")) {
    //       // 이메일 주소와 연결된 사용자가 있을 때만 비밀번호 재설정 이메일을 보냅니다.
    if (email.length > 1) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // 이메일 전송 성공
          setcheckEmail(
            "해당 이메일로 메일을 전송했습니다. 비밀번호를 재설정해주세요"
          );
        })
        .catch(() => {
          // 이메일 전송 실패
          setcheckEmail("비밀번호 재설정 이메일을 보낼 수 없습니다.");
        });
    }
    //       } else {
    //       }
    //     } else {
    //       // 이메일 주소와 연결된 사용자가 없을 경우 메시지 표시
    //       setcheckEmail("해당 이메일로 가입된 계정이 없습니다");
    //     }
    //   })
    //   .catch((error) => {
    //     // 오류 처리
    //     console.error(error);
    //   });
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
          <p className="text1">회원가입 여부 확인</p>
          <p className="text2">
            기존 계정에 등록하신 이메일을 정확하게 입력하셔야
            <br /> 가입하신 계정을 확인할 수 있습니다
          </p>
        </div>
        <div className="SignUpCheck_input">
          <form onSubmit={emailCheck}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="이메일 입력"
            />
            <br />
            <button>확인하기</button>
            <div className="SignUpCheck_checkEmail">{checkEmail}</div>
          </form>
        </div>
        <footer>
          <p>
            가입된 계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SignUpCheck;
