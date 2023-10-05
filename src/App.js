import "./components/components.css";
import "./pages/sign/sign.css";
import "./pages/Home/Home.css";

import AppRouter from "./AppRouter";

import { auth } from "./myfirebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export const userIsLoginContext = React.createContext();
export const userObjContext = React.createContext();

function App() {
  // 사용자가 로그인 되어있는지 확인하는 상태
  const [isLogin, setIsLogin] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading((args) => false);
        setIsLogin((args) => true);
        setUserObj((args) => user);
      } else {
        setIsLoading((args) => false);
        setIsLogin((args) => false);
      }
    });
  }, [isLogin, userObj]);
  console.log(isLogin);
  return (
    <div className="App">
      <userIsLoginContext.Provider value={isLogin}>
        <userObjContext.Provider value={userObj}>
          <AppRouter isLoading={isLoading} />
        </userObjContext.Provider>
      </userIsLoginContext.Provider>
    </div>
  );
}

export default App;
