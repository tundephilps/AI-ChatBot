import React from "react";
import classNames from "classnames";
import { FaTrash, FaPlus } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const MobileSideConversation = ({
  isSuccess,
  conversations,
  handleDeleteConversation,
  showConversation,
  selectedConversationId,
  handleAddConversation,
  isAdding,
}) => {
  return (
    <div className="bg-[#F8F9FA] absolute block lg:hidden  h-[60vh]  w-[50%] top-16 left-0 space-y-3 z-50">
      <div className="bg-[#15ABFF] flex items-center justify-between px-2 h-[58px] mb-2 rounded-md">
        <p className="text-white">Conversations</p>

        <button
          className="text-white text-lg"
          onClick={() => handleAddConversation()}
          disabled={isAdding}
        >
          {isAdding ? <AiOutlineReload className="animate-spin" /> : <FaPlus />}
        </button>
      </div>
      {isSuccess && conversations.length > 0 ? (
        conversations.map((conversation, index) => {
          return (
            <div
              className={classNames(
                `flex items-center justify-between px-2 h-[58px] rounded-md`,
                selectedConversationId == conversation.id
                  ? "bg-[#6D31ED] text-white"
                  : "bg-[#DDF3FF]  text-black"
              )}
              key={index}
              onClick={() => showConversation(conversation.id)}
            >
              <p>Conversation {conversation.id}</p>

              <button onClick={() => handleDeleteConversation(conversation.id)}>
                <FaTrash />
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-xs">Add Conversations to begin chat</p>
      )}
    </div>
  );
};

export default MobileSideConversation;
