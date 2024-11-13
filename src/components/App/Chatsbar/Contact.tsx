import useChats from "../../../hooks/useChats";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { IContact } from "../../../lib/interfaces";

const Contact = ({
  src = `defaultProfilePhoto.jpg`,
  contactName = "John Doe",
  lastMessage,
  chatId,
  status,
  selectedChatId,
  setSelectedChatId,
}: IContact) => {
  const { dataSetter } = useChats();

  const handleChats = async () => {
    dataSetter({
      name: contactName,
      status,
      photo: src,
      selectedChat: chatId,
    });
    setSelectedChatId(chatId);
  };

  return (
    <button
      className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
        selectedChatId === chatId
          ? "bg-indigo-100 dark:bg-indigo-900 dark:text-white"
          : ""
      } hover:bg-fifth  dark:hover:text-white`}
      onClick={handleChats}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12 border-2 border-transparent group-hover:border-gray-200 transition-all duration-200"
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
            {lastMessage}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Contact;
