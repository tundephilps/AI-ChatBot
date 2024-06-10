import React, { useState } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { MdMenu } from "react-icons/md";
import avatar2 from "../assets/images/avatar2.png";
import Conversation from "../components/Chat/Conversation";
import AddConversation from "../components/Chat/AddConversation";

const Chat = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
            <AddConversation />
          </div>

          {/* Chat Area */}
          <div className="col-span-6  flex flex-col justify-between lg:h-[80vh]">
            <div className="shadow-md bg-white h-[406px] relative">
              {/* Chat Header */}
              <div className="flex flex-row items-center justify-between bg-[#15ABFF] p-2 ">
                <div className=" flex items-center  rounded-md">
                  <img src={avatar} />
                  <p className="text-white ml-3">Chat Bot</p>
                </div>

                <MdMenu
                  onClick={toggleMenu}
                  className="text-white lg:hidden block text-2xl cursor-pointer"
                />
              </div>

              {openMenu && (
                <div className="absolute top-0 left-0 z-30 w-[50%] lg:hidden block">
                  <AddConversation />
                </div>
              )}
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
