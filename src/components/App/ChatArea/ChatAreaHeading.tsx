import { MdLocalPhone } from "react-icons/md";
import { ICON_SIZE } from "../../../lib/constants";
import { IoIosVideocam } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import Avatar from "../Avatar";
import useUpcomingFeature from "../../../hooks/useUpcomingFeature";
import useChats from "../../../hooks/useChats";

const ChatAreaHeading = () => {
  const { setIsOpen } = useUpcomingFeature();
  const { name, status } = useChats();

  return (
    <header className="flex justify-between transition-colors duration-500 bg-bg p-4 py-2 mx-3 text-gray-700 items-center">
      <div className="flex items-center gap-3">
        <Avatar src="./girl.jpeg" alt="girl" size="sm" />
        <div className="flex  justify-start flex-col">
          <h1 className=" transition-colors duration-500 text-2xl font-semibold text-text">
            {name}
          </h1>
          <p>{status}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <MdLocalPhone
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />

        <IoIosVideocam
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />

        <HiDotsHorizontal
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </header>
  );
};

export default ChatAreaHeading;
