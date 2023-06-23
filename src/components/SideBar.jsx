import React, { useEffect, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import Items from "./Items";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div
      className={`bg-[#0e0e0e] md:h-[944px] text-gray-100 px-4 rounded-[30px]`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold md:mt-10 text-[24px] md:text-[36px]">
          Board.
        </h1>
        <HiMenuAlt3
          size={26}
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Mobile View */}

      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:hidden justify-end pb-2 px-2`}
      >
        <Items />
      </div>

      {/* Default View */}

      <div className="md:flex hidden flex-col justify-between mt-10">
        <Items />
        <div className="flex flex-col cursor-pointer justify-between mt-20 text-[14px] ml-2">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
