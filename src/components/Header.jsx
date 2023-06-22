import React from "react";
import searchimg from "../assets/Search icon.png";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-black font-bold text-[24px]">Dashboard</h1>
      <div className="flex justify-between items-center px-10 gap-6">
        <input
          placeholder="Search..."
          className="rounded-xl w-[180px] h-[30px] font-lato text-[#B0B0B0] text-[14px] px-6"
        />
        <img src={bellimg} alt="bell" className="w-[18px] h-[20px]" />
        <img src={userimg} alt="user" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
