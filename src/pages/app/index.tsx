import ChatArea from "../../components/App/ChatArea";
import Chatsbar from "../../components/App/Chatsbar";
import useWindowSize from "../../hooks/useWindowSize";

const App = () => {
  const { width } = useWindowSize();

  if (width <= 600) {
    return (
      <div className="flex h-screen flex-1 overflow-hidden">
        <Chatsbar />
        {/* <ChatArea /> */}
      </div>
    );
  }
  if (width > 600 && width <= 1024) {
    return <h1>tablet</h1>;
  } else
    return (
      <div className="flex h-screen flex-1 overflow-hidden">
        <Chatsbar />
        <ChatArea />
      </div>
    );
};
export default App;
