import { useEffect } from "react";
import useChats from "../../../hooks/useChats";
import ChatAreaHeading from "./ChatAreaHeading";
import ChatMsgs from "./ChatMsgs";
import ChatFooter from "./footer";
import PipelineArea from "./PipelineArea";
import { useSocket } from "../../../hooks/useSocket";
import ChatsLoader from "../Loaders/ChatLoader";

const ChatArea = () => {
  const socket = useSocket();
  const { selectedChat, isChatLoading } = useChats();

  //TODO: SOLVE THIS ERROR
  useEffect(() => {
    const handleMessageReceived = (data) => {
      console.log("Message received:", data);
      // TODO: Process and update chat messages
    };

    if (socket) {
      socket.on("message:receive", handleMessageReceived);

      return () => {
        socket.off("message:receive", handleMessageReceived);
      };
    }
  }, [socket]);

  if (isChatLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-8 flex-1">
        <ChatsLoader />
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-400 dark:divide-gray-800 flex-1 flex flex-col">
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
