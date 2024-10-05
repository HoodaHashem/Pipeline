import ChatArea from "../../components/App/ChatArea";
import Chatsbar from "../../components/App/Chatsbar";

const app = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Chatsbar />
      <ChatArea />
    </div>
  );
};
export default app;
