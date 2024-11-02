import { IoMdPersonAdd } from "react-icons/io";
import { IAddFriend } from "../../lib/interfaces";
import { useSocket } from "../../hooks/useSocket";

const AddFriend = ({ userId, setIsLoading }: IAddFriend) => {
  const socket = useSocket();

  const sendFrindRequest = (userId: string) => {
    if (socket) {
      socket.emit("sendFriendRequest", userId);
    }
  };
  return (
    <button
      className="bg-third p-3 rounded-lg text-text border-none outline-none"
      onClick={async () => {
        setIsLoading(true);
        sendFrindRequest(userId);
        setIsLoading(false);
      }}
    >
      <IoMdPersonAdd />
    </button>
  );
};

export default AddFriend;
