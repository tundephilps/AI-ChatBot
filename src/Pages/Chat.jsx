import React from "react";
import { FaBrain, FaSeedling, FaTrash, FaPlus } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { MdMenu } from "react-icons/md";
import avatar2 from "../assets/images/avatar2.png";
import Conversation from "../components/Chat/Conversation";

const Chat = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-2 bg-[white] shadow-b-sm border-2">
        <img src={logo} />
        <div className="bg-[#6D31ED] w-[98px] h-[36px] rounded-md flex items-center justify-center text-white">
          Log out
        </div>
      </div>
      <div className="p-2 ">
        {/* Add Conversation Area */}
        <div className="lg:grid lg:grid-cols-8 lg:gap-6  ">
          <div className="col-span-2  h-[100%] lg:block hidden ">
            <div className="bg-[#15ABFF] flex items-center justify-between px-2 h-[58px] mb-2 rounded-md">
              <p className="text-white">Conversations</p>
              <FaPlus className="text-white" />
            </div>
            <div className=" bg-[#F8F9FA] w-full min-h-[70vh] flex flex-col gap-2 ">
              <div className="bg-[#DDF3FF] flex items-center justify-between px-2 h-[58px] rounded-md">
                <p className="text-black">Conversation 1</p>
                <FaTrash className="text-black" />
              </div>
              <div className="bg-[#6D31ED] flex items-center justify-between px-2 h-[58px] rounded-md">
                <p className="text-white">Conversation 2</p>
                <FaTrash className="text-white" />
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-6  flex flex-col justify-between lg:h-[80vh]">
            <div className="shadow-md bg-white h-[406px]">
              {/* Chat Header */}
              <div className="flex flex-row items-center justify-between bg-[#15ABFF] p-2 ">
                <div className=" flex items-center  rounded-md">
                  <img src={avatar} />
                  <p className="text-white ml-3">Chat Bot</p>
                </div>

                <MdMenu className="text-white lg:hidden block text-2xl cursor-pointer" />
              </div>
              {/* Conversation */}
              <Conversation />
            </div>
            <div className="w-full bg-white shadow-md relative flex flex-row justify-between rounded-full p-2">
              <input
                placeholder="Reply to Chatbot"
                className="ml-4 mt-2 w-full outline-none"
              />
              <div className="bg-[#6D31ED] p-3 rounded-full">
                <FiSend className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
