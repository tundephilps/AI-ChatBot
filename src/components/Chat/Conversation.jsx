import React from "react";
import avatar from "../../assets/images/avatar.png";

import avatar2 from "../../assets/images/avatar2.png";

const Conversation = () => {
  return (
    <div className="w-full p-4 h-[80vh]">
      <p className="text-xs text-center mb-4">Jan 28, 21:23PM</p>
      <div className="flex flex-row gap-3 mt-2">
        <img src={avatar} className="rounded-full h-8 w-8" />

        <div className="p-2 bg-[#F0F9FF] rounded-full ">
          <p className="text-xs text-[#15ABFF]">How can i help you today</p>
        </div>
      </div>

      <div className=" flex justify-end mt-2">
        <div className="flex flex-row gap-3">
          <div className="p-2 bg-[#6D31ED] rounded-full ">
            <p className="text-xs  text-white">
              i am a user and i am typing a response
            </p>
          </div>

          <img src={avatar2} className="rounded-full h-8 w-8" />
        </div>
      </div>

      <div className="flex flex-row gap-3 mt-2">
        <img src={avatar} className="rounded-full h-8 w-8" />

        <div className="p-2 bg-[#F0F9FF] rounded-full ">
          <p className="text-xs text-[#15ABFF]">
            This is an AI generated response
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
