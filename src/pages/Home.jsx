import React from "react";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex justify-between gap-10 px-[30px] py-[30px] bg-[#F5F5F5] w-full min-h-screen">
      <SideBar />
      <Hero />
    </div>
  );
};

export default Home;
