import { useEffect } from "react";
import useChats from "../../../hooks/useChats";
import ChatAreaHeading from "./ChatAreaHeading";
import ChatMsgs from "./ChatMsgs";
import ChatFooter from "./footer";
import PipelineArea from "./PipelineArea";
import { useSocket } from "../../../hooks/useSocket";

const ChatArea = () => {
  const socket = useSocket();
  const { selectedChat } = useChats();
  useEffect(() => {
    const handleReceiveMsgs = (data) => {
      console.log(data);
    };
    if (socket) {
      socket.on("message:receive", handleReceiveMsgs);
      return () => {
        socket.off("message:receive");
      };
    }
  }, [socket]);
  return (
    <div className="divide-y divide-gray-400 dark:divide-gray-800 flex-1  flex flex-col">
      {selectedChat ? (
        <>
          <ChatAreaHeading />
          <ChatMsgs />
          <ChatFooter />
        </>
      ) : (
        <PipelineArea />
      )}
    </div>
  );
};
export default ChatArea;
