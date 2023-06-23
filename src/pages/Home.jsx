import React from "react";
import SideBar from "../components/SideBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 px-3 sm:px-[30px] py-[30px] bg-[#F5F5F5] w-full ">
      <SideBar />
      <Hero />
    </div>
  );
};

export default Home;
