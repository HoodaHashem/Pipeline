import { HiChatAlt2 } from "react-icons/hi";
import { API_PUBLIC_URL } from "../../lib/apiCenter/apiConfig";
import useChats from "../../hooks/useChats";
import { useState } from "react";
import {
  createNewChat,
  getExistingChat,
} from "../../lib/apiCenter/chatService";
import SecondaryLoader from "./SecondaryLoader";
import { getFriendData } from "../../lib/apiCenter";
import useModal from "../../hooks/useModal";

const FriendsList = ({
  src = `defaultProfilePhoto.jpg`,
  username = "username",
  contactName = "John Doe",
  id = "",
}) => {
  const { dataSetter } = useChats();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsModalOpen } = useModal();

  const handleChats = async (toUserId: string) => {
    setIsLoading(true);
    const checkBeforeCreating = await getExistingChat({ id: toUserId });
    if (checkBeforeCreating.data !== null) {
      const user = await getFriendData({ id: toUserId });
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";

      dataSetter({
        name: user.data.fullName,
        status: user.data.status,
        photo: user.data.photo,
        selectedChat: checkBeforeCreating.data._id,
      });

      setIsLoading(false);
      setIsModalOpen(false);
    } else {
      const response = await createNewChat({ receiverId: toUserId });
      const user = await getFriendData({ id: toUserId });
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";
      dataSetter({
        name: user.data.fullName,
        status: user.data.status,
        photo: user.data.photo,
        selectedChat: response.data._id,
      });

      setIsLoading(false);
      setIsModalOpen(false);
    }
  };
  return (
    <div className="w-96 text-left p-3 rounded-lg ">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12"
            src={API_PUBLIC_URL + "/" + src}
            alt={contactName}
          />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {contactName}
          </h4>
          <p className="text-sm text-gray-500 truncate">{username}</p>
        </div>
        <button
          className="p-2 bg-fifth rounded-lg"
          onClick={() => handleChats(id)}
        >
          {isLoading ? (
            <SecondaryLoader />
          ) : (
            <HiChatAlt2 size={"23"} className="text-second" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FriendsList;
