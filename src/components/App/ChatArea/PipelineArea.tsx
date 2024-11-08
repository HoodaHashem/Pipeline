import { FaUserFriends } from "react-icons/fa";

const PipelineArea = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 text-center animate-pulse">
      <img src="./logo.svg" alt="logo" className="w-1/3 mb-6 " />
      <div className="text-2xl font-semibold text-gray-800 flex items-center space-x-4">
        <p>Select a chat to start messaging and connect with others!</p>
        <FaUserFriends className="text-second w-8 h-8 " />
      </div>
    </div>
  );
};

export default PipelineArea;
