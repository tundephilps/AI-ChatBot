import { useState, useRef, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { MdMenu } from "react-icons/md";
import Modal from "../components/Chat/Modal";
import classNames from "classnames";

import Conversation from "../components/Chat/Conversation";
import {
  useGetAllConversationQuery,
  useGetConversationByIdQuery,
  useSendMessageMutation,
  useAddConversationMutation,
  useDeleteConversationMutation,
} from "../services/chatApi";
import SpinningLoader from "../components/Loader/SpinningLoader";
import { useNavigate } from "react-router-dom";

import { AiOutlineReload } from "react-icons/ai";
import ConversationToggle from "../components/Chat/ConversationToggle";

const Chat = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const {
    data: conversations,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllConversationQuery();

  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [deleteSelectedConversation, setSelectedDeleteConversation] =
    useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [sending, setSending] = useState(false);

  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const {
    data: conversation,
    error: conversationError,
    isLoading: conversationLoading,
    isSuccess: conversationSuccess,
  } = useGetConversationByIdQuery(selectedConversationId, {
    skip: !selectedConversationId, // Skip query if no conversation is selected
    forceRefetch: true,
  });

  const [sendMessage] = useSendMessageMutation();
  const [addConversation] = useAddConversationMutation();
  const [deleteConversation] = useDeleteConversationMutation();

  const handleCloseModal = () => setModalVisible(false);

  useEffect(() => {
    //if (chatContainerRef.current) {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    //}
  }, [conversation]);

  const showConversation = async (conversation_id) => {
    setSelectedConversationId(conversation_id);
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    // redirect to logout page
    navigate("/");
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (userInput.trim() !== "" && selectedConversationId) {
      setSending(true);
      try {
        await sendMessage({
          conversation_id: selectedConversationId,
          message: userInput,
        }).unwrap();
        setUserInput(""); // Clear the input field after sending the message
        setSending(false);
      } catch (error) {
        console.error("Failed to send message:", error);
        setSending(false);
      }
    } else {
      console.error("Cannot send an empty message or no conversation selected");
    }
  };

  const handleAddConversation = async () => {
    //console.log("Add conversation");
    setIsAdding(true);
    try {
      const response = await addConversation().unwrap();
      console.log(response);
      setSelectedConversationId(response.id);
      showConversation(response.id);
      setIsAdding(false);
    } catch (error) {
      setIsAdding(false);
      console.error("Failed to add conversation:", error);
    }
  };

  const handleDeleteConversation = async (id) => {
    setModalVisible(true);
    setSelectedDeleteConversation(id);
  };

  const handleConfirmAction = async () => {
    if (deleteSelectedConversation) {
      const id = deleteSelectedConversation;
      try {
        console.log(id);
        const response = await deleteConversation(id).unwrap();
        console.log(response);
        setModalVisible(false);
        setSelectedDeleteConversation(null);
      } catch (error) {
        console.error("Failed to delete conversation:", error);
        setModalVisible(false);
        setSelectedDeleteConversation(null);
      }
    }
  };

  return (
    <div>
      <Modal
        show={isModalVisible}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmAction}
      />

      <div className="flex items-center justify-between p-2 bg-[white] shadow-b-sm border-2">
        <img src={logo} />

        <button
          className="bg-[#6D31ED] px-5 py-2 rounded-md flex items-center justify-center text-white"
          onClick={() => handleLogout()}
        >
          Log out
        </button>
      </div>
      <div className="p-2 ">
        {/* Add Conversation Area */}
        <div className="lg:grid lg:grid-cols-8 lg:gap-6  ">
          <div className="col-span-2  h-[100%] lg:block hidden ">
            <div className="bg-[#15ABFF] flex items-center justify-between px-2 h-[58px] mb-2 rounded-md">
              <p className="text-white">Conversations</p>

              <button
                className="text-white text-lg"
                onClick={() => handleAddConversation()}
                disabled={isAdding}
              >
                {isAdding ? (
                  <AiOutlineReload className="animate-spin" />
                ) : (
                  <FaPlus />
                )}
              </button>
            </div>
            <div className=" bg-[#F8F9FA] w-full min-h-[70vh] flex flex-col gap-2 ">
              {isLoading ? <SpinningLoader /> : null}
              {isError ? (
                <p className="text-red-400 text-xs">Error: Failed to Loading</p>
              ) : null}

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

                      <button
                        onClick={() =>
                          handleDeleteConversation(conversation.id)
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-xs">
                  Add Conversations to begin chat
                </p>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-6  flex flex-col justify-between lg:h-[80vh]">
            <div className="shadow-md  lg:h-[68vh]">
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

                {openMenu && (
                  <div className="absolute top-24 left-0 z-30 w-[50%] lg:hidden block">
                    <ConversationToggle
                      conversation={conversation}
                      isLoading={conversationLoading}
                      error={conversationError}
                      chatRef={chatContainerRef}
                      isSuccess={conversationSuccess}
                    />
                  </div>
                )}
              </div>
              {/* Conversation */}
              {
                <Conversation
                  conversation={conversation}
                  isLoading={conversationLoading}
                  error={conversationError}
                  chatRef={chatContainerRef}
                  isSuccess={conversationSuccess}
                />
              }
            </div>

            <form onSubmit={handleSend}>
              <div className="w-full bg-white shadow-md relative flex flex-row justify-between rounded-full p-2 focus-within:border-2 focus-within:border-[#6D31ED]">
                <input
                  placeholder="Reply to Chatbot"
                  className="ml-4 mt-2 w-full outline-none "
                  name="message"
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />

                <button
                  className="rounded-full bg-[#6D31ED] p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={sending}
                >
                  {sending ? (
                    <AiOutlineReload className="animate-spin" />
                  ) : (
                    <FiSend />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
