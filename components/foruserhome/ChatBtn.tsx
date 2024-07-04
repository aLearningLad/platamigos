"use client";

import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const ChatBtn = () => {
  const handleChatBtn = () => {
    alert("Open chat modal here!");
  };

  return (
    <button
      onClick={handleChatBtn}
      className=" w-8/12 h-full lg:w-fit lg:h-fit bg-neutral-900 flex justify-center items-center py-4 md:py-5  xl:py-1 px-2 rounded-lg text-xl lg:text-[12px] text-white"
    >
      <IoChatbubbleEllipsesSharp />{" "}
      <p className=" lg:text-[10px] text-xl text-white">
        Negotiate with <i>Peers</i>{" "}
      </p>
    </button>
  );
};

export default ChatBtn;
