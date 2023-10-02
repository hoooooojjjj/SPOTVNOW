import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/sign/Login";
import SignUpCheck from "./pages/sign/SignUpCheck";
import SignUp from "./pages/sign/SignUp";
import Home from "./pages/Home/Home";
import { userIsLoginContext } from "./App";

const AppRouter = () => {
  const isLogin = useContext(userIsLoginContext);
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}

          <Route path="/signupcheck" element={<SignUpCheck />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
