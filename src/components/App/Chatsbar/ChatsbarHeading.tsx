import { IoSettingsSharp } from "react-icons/io5";
import Avatar from "../Avatar";
import { cutLongSentence } from "../../../lib/helpers/app";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { useState } from "react";
import ModalWindow from "../ModalWindows";

const ChatsbarHeading = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const username = "username";

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(username);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className="pt-6 pb-4 px-5 border-b border-gray-400 dark:border-gray-800 transition-all duration-500">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="inline-flex items-start mr-3">
            <Avatar src="./girl.jpeg" size="md" alt="Lauren Marsano" />
          </div>
          <div className="pr-1">
            <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
              {cutLongSentence("Mahmoud Hashem", 15)}
            </h2>

            <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
              <p className="text-second text-sm transition-colors duration-500 font-bold">
                @
              </p>

              {cutLongSentence("long username as fuck", 15)}

              {isCopied ? (
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
            <IoSettingsSharp
              onClick={() => {
                setIsModalOpen(true);
                setModalType("userSettings");
              }}
              className="text-second cursor-pointer transition-all duration-500 hover:text-third"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-1  items-center text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">
          <p className="text-second text-sm transition-colors duration-500 font-bold">
            @
          </p>

          {cutLongSentence("mahmoudhashem335@gmail.com", 15)}
        </div>

        <div className="flex gap-1 items-center text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">
          <p className="text-second text-sm transition-colors duration-500 font-bold">
            @
          </p>

          {cutLongSentence("01276556853", 11)}
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
