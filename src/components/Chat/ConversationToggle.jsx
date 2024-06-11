import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import classNames from "classnames";

import SpinningLoader from "../../components/Loader/SpinningLoader";

import { AiOutlineReload } from "react-icons/ai";
import {
  useAddConversationMutation,
  useDeleteConversationMutation,
  useGetAllConversationQuery,
  useGetConversationByIdQuery,
  useSendMessageMutation,
} from "../../services/chatApi";
import Modal from "./Modal";

const ConversationToggle = ({}) => {
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
    <div className=" ">
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
                  onClick={() => handleDeleteConversation(conversation.id)}
                >
                  <FaTrash />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center text-xs">Add Conversations to begin chat</p>
        )}
      </div>
      <Modal
        show={isModalVisible}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmAction}
      />
    </div>
  );
};

export default ConversationToggle;
