import avatar from "../../assets/images/avatar.png";
import { format } from "date-fns";
import avatar2 from "../../assets/images/avatar2.png";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SpinningLoader from "../Loader/SpinningLoader";

const Conversation = ({
  conversation,
  isLoading,
  error,
  chatRef,
  isSuccess,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState(
    format(new Date(), "MMM dd, HH:mm a")
  );

  //console.log(conversation)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(format(new Date(), "MMM dd, HH:mm"));
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 h-[60vh] overflow-y-auto">
      {/* <p className="text-xs text-center mb-4">Jan 28, 21:23PM</p> */}
      <p className="text-xs text-center mb-4">{currentDateTime} </p>
      {isLoading ? <SpinningLoader /> : null}

      {error ? (
        <p className="text-red-400 text-xs">Error: Failed to Loading</p>
      ) : null}

      {isSuccess && conversation.length > 0 ? (
        conversation.map((item, index) => {
          return item.user_id == null ? (
            <div className="flex flex-row gap-3 mt-2" key={index}>
              <img src={avatar} className="rounded-full h-8 w-8" />

              <div className="p-2 bg-[#F0F9FF] rounded-full ">
                <p className="text-xs text-[#15ABFF]">{item.content}</p>
              </div>
            </div>
          ) : (
            <div className=" flex justify-end mt-2" key={index}>
              <div className="flex flex-row gap-3">
                <div className="p-2 bg-[#6D31ED] rounded-full ">
                  <p className="text-xs  text-white">{item.content}</p>
                </div>

                <img src={avatar2} className="rounded-full h-8 w-8" />
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-xs text-center">Chat is Empty</p>
      )}

      <div ref={chatRef}></div>
    </div>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  chatRef: PropTypes.object,
  isSuccess: PropTypes.bool,
};

export default Conversation;
