import React from "react";
import dashimg from "../assets/dashboard_icon.png";
import scheduleimg from "../assets/schedule_icon.png";
import settingimg from "../assets/setting_icon.png";
import userimg from "../assets/user_icon.png";
import transactionimg from "../assets/transaction_icon.png";

const Items = () => {
  return (
    <div className="cursor-pointer flex md:gap-6 md:px-2 lg:px-4 flex-col items-start justify-between font-lato">
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={dashimg} className="w-[14px] h-[14px]" />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          DashBoard
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img
          alt="dashboard"
          src={transactionimg}
          className="w-[14px] h-[14px]"
        />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          Transactions
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={scheduleimg} className="w-[14px] h-[14px]" />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          Schedules
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={userimg} className="w-[14px] h-[14px]" />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          Users
        </p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <img alt="dashboard" src={settingimg} className="w-[14px] h-[14px]" />
        <p className="font-semibold md:font-bold text-[16px] md:text-[18px]">
          Settings
        </p>
      </div>
    </div>
  );
};

export default Items;
