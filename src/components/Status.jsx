import React from "react";

import Stats1 from "../assets/images/Stats1.png";

import Stats2 from "../assets/images/Stats2.png";
import Stats3 from "../assets/images/Stats3.png";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="lg:h-[151px] py-6 w-full bg-white rounded-3xl flex gap-8 lg:flex-row flex-col px-12 items-center lg:justify-between   mt-8 ">
      <div className="flex flex-row items-center gap-3 ">
        <img src={Stats1} />
        <div>
          <p className="text-[#acacac]">Total Users</p>
          <p className="text-[#333333] font-semibold text-[32px]">5,423</p>
          <p className="flex items-center gap-2  ">
            <span className="text-[#00ac4f] flex items-center ">
              <FaArrowUp /> 16%{" "}
            </span>{" "}
            this month
          </p>
        </div>
      </div>
      <div className="h-[60%] w-[0.2px] bg-gray-300 lg:flex hidden" />
      <div className="flex flex-row items-center gap-3">
        <img src={Stats2} />
        <div>
          <p className="text-[#acacac]">Members</p>
          <p className="text-[#333333] font-semibold text-[32px]">1,893</p>
          <p className="flex items-center gap-2  ">
            <span className="text-[#d0004b] flex items-center ">
              <FaArrowDown /> 1%{" "}
            </span>{" "}
            this month
          </p>
        </div>
      </div>

      <div className="h-[60%] w-[0.2px] bg-gray-300 lg:flex hidden" />
      <div className="flex flex-row items-center gap-3">
        <img src={Stats3} />
        <div>
          <p className="text-[#acacac]">Active Now</p>
          <p className="text-[#333333] font-semibold text-[32px]">189</p>
          <div className="lg:flex hidden items-center -space-x-2 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/86.jpg"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
