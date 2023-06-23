import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  if (!authenticated && !check) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="flex flex-col sm:flex-row justify-between gap-10 px-3 sm:px-[30px] py-[30px] bg-[#F5F5F5] w-full">
        <SideBar />
        <Hero />
      </div>
    );
  }
};

export default Home;
