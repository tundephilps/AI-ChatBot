import React from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

const AddConversation = () => {
  return (
    <div>
      <div className="bg-[#15ABFF] flex items-center justify-between px-2 h-[58px] mb-2 rounded-md">
        <p className="text-white">Conversations</p>
        <FaPlus className="text-white" />
      </div>
      <div className=" bg-[#F8F9FA] w-full min-h-[70vh] flex flex-col gap-2 ">
        <div className="bg-[#DDF3FF] flex items-center justify-between px-2 h-[58px] rounded-md">
          <p className="text-black">Conversation 1</p>
          <FaRegTrashAlt className="text-black" />
        </div>
        <div className="bg-[#6D31ED] flex items-center justify-between px-2 h-[58px] rounded-md">
          <p className="text-white">Conversation 2</p>
          <FaRegTrashAlt className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default AddConversation;
