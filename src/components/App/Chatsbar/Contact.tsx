import useChats from "../../../hooks/useChats";
import { getFriendData } from "../../../lib/apiCenter";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { getExistingChat } from "../../../lib/apiCenter/chatService";

const Contact = ({
  src = `defaultProfilePhoto.jpg`,
  contactName = "John Doe",
  lastMsg = "Hello there!",
  id = "",
}) => {
  const { dataSetter } = useChats();

  const handleChats = async (toUserId: string) => {
    const checkBeforeCreating = await getExistingChat({ id: toUserId });
    const user = await getFriendData({ id: toUserId });
    if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";

    dataSetter({
      name: user.data.fullName,
      status: user.data.status,
      photo: user.data.photo,
      selectedChat: checkBeforeCreating.data._id,
    });
  };

  return (
    <button
      className="w-full text-left p-3 rounded-lg transition-all duration-200 group"
      onClick={() => handleChats(id)}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12 border-2 border-transparent group-hover:border-indigo-200 transition-all duration-200"
            src={API_PUBLIC_URL + "/" + src}
            alt={contactName}
          />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {contactName}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
            {lastMsg}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Contact;
