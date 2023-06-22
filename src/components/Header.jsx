import React from "react";
import searchimg from "../assets/Search icon.png";
import bellimg from "../assets/Vector.png";
import userimg from "../assets/image 1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <h1 className="text-black font-bold text-[21px] sm:text-[24px]">
        Dashboard
      </h1>
      <div className="flex justify-between items-center sm:px-10 gap-3 sm:gap-6">
        <input
          placeholder="Search..."
          className="rounded-xl w-[120px] sm:w-[180px] h-[30px] font-lato text-[#B0B0B0] text-[14px] px-6"
        />
        <img src={bellimg} alt="bell" className="w-[18px] h-[20px]" />
        <img src={userimg} alt="user" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
