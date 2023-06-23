import React from "react";
import down from "../assets/downarrow.png";
import green from "../assets/line_chart_1.png";
import pink from "../assets/line_chart_2.png";
import Chart1 from "./Chart1";

const Chart = () => {
  return (
    <div className="px-10 py-5 bg-white w-full h-[359px] rounded-2xl text-black">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <h2 className="text-[18px] font-bold">Activities</h2>
            <p className="flex items-center gap-2 text-[14px] text-[#858585]">
              May-June 2021{" "}
              <img src={down} className="w-[8px] h-[5px]" alt="down" />
            </p>
          </div>

          <div className="flex justify-between items-center gap-3 sm:gap-8">
            <div className="flex justify-between items-center gap-5">
              <div className="rounded-full bg-[#E9A0A0] h-[10px] w-[10px]" />
              <p>Guest</p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="rounded-full bg-[#9BDD7C] h-[10px] w-[10px]" />
              <p>User</p>
            </div>
          </div>
        </div>
        {/* <div className="absolute flex w-[70%] bg-black"> */}
        <Chart1 />
        {/* </div> */}
        {/* <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#858585] font-lato text-[14px]">500</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
          <div className="flex justify-between items-center gap-3">
            <p className="text-[#858585] font-lato text-[14px]">400</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#858585] font-lato text-[14px]">300</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#858585] font-lato text-[14px]">200</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#858585] font-lato text-[14px]">100</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-[#858585] ml-4 font-lato text-[14px]">0</p>
            <div className="w-full h-[1px] bg-[#858585]" />
          </div>
        </div>

        <div className="flex justify-between -mt-[24px] items-center px-16 sm:px-28 text-[#858585] text-[11px] sm:text-[14px] font-lato">
          <p>Week 1</p>
          <p>Week 2</p>
          <p>Week 3</p>
          <p>Week 4</p>
        </div> */}
      </div>
    </div>
  );
};

export default Chart;
