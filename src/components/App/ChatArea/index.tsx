import ChatAreaHeading from "./ChatAreaHeading";
import ChatMsgs from "./ChatMsgs";
import ChatFooter from "./footer";
import PipelineArea from "./PipelineArea";

const ChatArea = () => {
  return (
    <div className="divide-y divide-gray-400 dark:divide-gray-800 flex-1  flex flex-col">
      <ChatAreaHeading />
      <ChatMsgs />
      <ChatFooter />
      {/* <PipelineArea /> */}
    </div>
  );
};
export default ChatArea;
