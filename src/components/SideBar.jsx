import React from "react";
import dashimg from "../assets/dashboard_icon.png";
import scheduleimg from "../assets/schedule_icon.png";
import settingimg from "../assets/setting_icon.png";
import userimg from "../assets/user_icon.png";
import transactionimg from "../assets/transaction_icon.png";

const SideBar = () => {
  return (
    <div className="lg:flex flex-col hidden justify-between py-10 items-center text-white w-[25%] bg-black  rounded-[30px]">
      <div className="flex flex-col justify-between gap-10">
        <h1 className="font-bold text-[36px]">Board.</h1>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-start gap-10 items-center">
            <img src={dashimg} alt="dashboard" className="h-[18px] w-[18px]" />
            <h2 className="text-[18px] font-bold items-start">Dashboard</h2>
          </div>
          <div className="flex justify-start gap-10 items-center">
            <img
              src={transactionimg}
              alt="dashboard"
              className="h-[18px] w-[18px]"
            />
            <h2 className="text-[18px] font-bold items-start">Transactions</h2>
          </div>
          <div className="flex justify-start gap-10 items-center">
            <img
              src={scheduleimg}
              alt="dashboard"
              className="h-[18px] w-[18px]"
            />
            <h2 className="text-[18px] font-bold">Schedules</h2>
          </div>
          <div className="flex justify-start gap-10 items-center">
            <img src={userimg} alt="dashboard" className="h-[18px] w-[18px]" />
            <h2 className="text-[18px] font-bold">Users</h2>
          </div>
          <div className="flex justify-start gap-10 items-center">
            <img
              src={settingimg}
              alt="dashboard"
              className="h-[18px] w-[18px]"
            />
            <h2 className="text-[18px] font-bold">Settings</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p>Help</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default SideBar;
