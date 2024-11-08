import { IoSettingsSharp } from "react-icons/io5";
import Avatar from "../Avatar";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import ModalWindow from "../ModalWindows";
import { IUserData } from "../../../lib/interfaces";
import { getUserData } from "../../../lib/apiCenter/userService";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import AvatarLoader from "../Loaders/avatarLoader";
import TextLoader from "../Loaders/TextLoader";

const ChatsbarHeading = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filterUserData = async () => {
    try {
      setIsLoading(true);
      const user = await getUserData();
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";
      setUserData(user.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    filterUserData();
  }, []);

  const handleCopy = () => {
    try {
      if (!isLoading && userData) {
        navigator.clipboard.writeText(userData?.username ?? "");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header
      className={`pt-6 pb-4 px-5 border-b border-gray-400 dark:border-gray-800 transition-all duration-500 ${isLoading ? "animate-pulse" : ""}`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="inline-flex items-start mr-3">
            {isLoading ? (
              <AvatarLoader size="md" />
            ) : (
              <Avatar
                src={`${API_PUBLIC_URL + "/" + userData?.photo}`}
                size="md"
                alt="Profile picture"
              />
            )}
          </div>
          <div className="pr-1">
            <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
              {isLoading ? <TextLoader w="w-48" h="h-4" /> : userData?.fullName}
            </h2>

            <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
              {isLoading ? (
                ""
              ) : (
                <p className="text-second text-sm transition-colors duration-500 font-bold">
                  @
                </p>
              )}

              {isLoading ? <TextLoader w="w-20" h="h-3" /> : userData?.username}

              {isLoading ? (
                <TextLoader w="w-3" h="h-3" />
              ) : isCopied ? (
                <FaClipboardCheck className=" ml-4 text-second transition-colors duration-500 cursor-pointer" />
              ) : (
                <FaClipboard
                  className=" ml-4  text-second transition-colors duration-500 cursor-pointer"
                  onClick={handleCopy}
                />
              )}
            </div>
          </div>
        </div>
        <div className="relative inline-flex flex-shrink-0">
          <button className="transition-all duration-150 text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
            {isLoading ? (
              <TextLoader w="w-5" h="h-5" />
            ) : (
              <IoSettingsSharp
                onClick={() => {
                  setIsModalOpen(true);
                  setModalType("userSettings");
                }}
                className="text-second cursor-pointer transition-all duration-500 hover:text-third"
              />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex  items-center text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">
          {isLoading ? (
            ""
          ) : (
            <p className="text-second text-sm transition-colors duration-500 font-bold">
              @
            </p>
          )}

          {isLoading ? "" : userData?.email}
        </div>

        <div className="flex  items-center text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">
          {isLoading ? (
            ""
          ) : (
            <p className="text-second text-sm transition-colors duration-500 font-bold">
              @
            </p>
          )}

          {isLoading ? "" : userData?.phone}
        </div>
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        type={modalType}
      />
    </header>
  );
};

export default ChatsbarHeading;
