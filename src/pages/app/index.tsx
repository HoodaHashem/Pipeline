import ChatArea from "../../components/App/ChatArea";
import Chatsbar from "../../components/App/Chatsbar";

const App = () => {
  return (
    <div className="flex h-screen flex-1 overflow-hidden">
      <Chatsbar />
      <ChatArea />
    </div>
  );
};
export default App;
