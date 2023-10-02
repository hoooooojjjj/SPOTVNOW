import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userObjContext } from "../../App";
import { auth } from "../../myfirebase";
import { signOut } from "firebase/auth";
const Home = () => {
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";
  }, []);

  // navgation
  const nav = useNavigate();

  // 드롭다운 메뉴의 상태를 관리하는 useState 훅 사용
  const [isOpen, setIsOpen] = useState(false);

  // 유저 정보 context
  const userObj = useContext(userObjContext);

  // 드롭다운 메뉴 열기/닫기 함수
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(userObj);
  return (
    <div className="Home">
      <header>
        <nav>
          <ul>
            <span className="nav_left">
              <img
                onClick={() => {
                  nav("/");
                }}
                src={process.env.PUBLIC_URL + "assets/logo.png"}
                alt="로고"
              ></img>

              <li>
                <Link style={{ color: "aquamarine" }}>홈</Link>
              </li>
              <li>
                <Link>일정</Link>
              </li>
              <li>
                <Link>리그</Link>
              </li>
              <li>
                <Link>TV채널</Link>
              </li>
              <li>
                <Link>프로그램</Link>
              </li>
            </span>
            <span className="nav_right">
              <li>
                <Link>&#x1F50D; 검색</Link>
              </li>
              <li>
                <Link>이용권</Link>
              </li>
              <li>
                <Link>고객센터</Link>
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropdown-button" onClick={toggleMenu}>
                    <img src={userObj.photoURL} alt="회원 프로필 사진"></img>
                    {userObj.displayName} <span>⌵</span>
                  </button>
                  {isOpen && (
                    <>
                      <ul className="dropdown-menu">
                        <div>
                          <img
                            src={userObj.photoURL}
                            alt="회원 프로필 사진"
                          ></img>
                        </div>

                        <li>
                          <Link>마이 페이지</Link>
                        </li>
                        <li>
                          <Link>회원 정보</Link>
                        </li>
                        <li
                          onClick={() => {
                            signOut(auth);
                          }}
                        >
                          로그아웃
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </li>
            </span>
          </ul>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
