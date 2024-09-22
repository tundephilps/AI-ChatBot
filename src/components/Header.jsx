import React from "react";
import { CiSearch } from "react-icons/ci";
import Wave from "../assets/images/wave.png";

const Header = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:justify-between  ">
        <p className="text-[24px] font-medium flex">
          Hello Evano <img src={Wave} className="h-8 w-8" alt="" />{" "}
        </p>

        <div className="w-[230px] relative p-2 flex flex-row bg-white rounded-lg items-center gap-4 ">
          <CiSearch className="absolute text-2xl" />
          <input
            placeholder="Search "
            className="ml-8 border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
