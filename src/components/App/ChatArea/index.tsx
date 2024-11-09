import useChats from "../../../hooks/useChats";
import ChatAreaHeading from "./ChatAreaHeading";
import ChatMsgs from "./ChatMsgs";
import ChatFooter from "./footer";
import PipelineArea from "./PipelineArea";

const ChatArea = () => {
  const { selectedChat } = useChats();
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
