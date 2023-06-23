import React, { useDebugValue, useEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  Routes,
  redirect,
  useNavigate,
} from "react-router-dom";
import { data } from "autoprefixer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
