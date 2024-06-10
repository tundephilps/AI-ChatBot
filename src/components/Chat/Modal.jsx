import React from "react";

const Modal = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="bg-[#6D31ED] h-[251px] w-[556px] rounded-3xl p-8">
        <h1 className="text-3xl text-white">
          Are you sure you want to delete conversation 1?
        </h1>

        <div className="flex flex-row items-center justify-between mt-[40px]">
          <div className="bg-[#DDF3FF] h-[44px] w-[116px] rounded-3xl items-center justify-center flex cursor-pointer">
            No
          </div>
          <div className="bg-[#FF0000] h-[44px] w-[116px] rounded-3xl items-center justify-center flex text-white cursor-pointer">
            Yes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
