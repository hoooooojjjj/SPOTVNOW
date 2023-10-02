import "./components/components.css";
import "./pages/sign/sign.css";
import "./pages/Home/Home.css";

import AppRouter from "./AppRouter";

import { auth } from "./myfirebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userIsLoginContext = React.createContext();
export const userObjContext = React.createContext();

function App() {
  // 사용자가 로그인 되어있는지 확인하는 상태
  const [isLogin, setIsLogin] = useState(false);
  const [userObj, setUserObj] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj(user);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <userIsLoginContext.Provider value={isLogin}>
        <userObjContext.Provider value={userObj}>
          <AppRouter />
        </userObjContext.Provider>
      </userIsLoginContext.Provider>
    </div>
  );
}

export default App;
