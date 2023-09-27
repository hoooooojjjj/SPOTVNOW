import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
