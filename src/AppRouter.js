import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/sign/Login";
import SignUpCheck from "./pages/sign/SignUpCheck";
import SignUp from "./pages/sign/SignUp";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signupcheck" element={<SignUpCheck />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
