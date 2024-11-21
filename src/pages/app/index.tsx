import ChatArea from "../../components/App/ChatArea";
import Chatsbar from "../../components/App/Chatsbar";
import useWindowSize from "../../hooks/useWindowSize";

const App = () => {
  const { width } = useWindowSize();

  if (width < 640) {
    return (
      <div className="flex h-screen flex-1 overflow-hidden">
        <Chatsbar />
        {/* <ChatArea /> */}
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-1 overflow-hidden">
      <Chatsbar />
      <ChatArea />
    </div>
  );
};
export default App;
