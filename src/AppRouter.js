import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/sign/Login";
import SignUpCheck from "./pages/sign/SignUpCheck";
import SignUp from "./pages/sign/SignUp";
import Home from "./pages/Home/Home";
import FindPassword from "./pages/sign/FindPassword";
import { userIsLoginContext } from "./App";
import Loading from "./components/Loading";
import Live from "./pages/Live/Live";

const AppRouter = ({ isLoading }) => {
  const isLogin = useContext(userIsLoginContext);

  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          {isLoading ? (
            <Route path="/" element={<Loading />} />
          ) : isLogin ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/findpassword" element={<FindPassword />} />
          <Route path="/signupcheck" element={<SignUpCheck />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default React.memo(AppRouter);
