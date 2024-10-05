import ListItem from "./ListItem";
import { ICON_SIZE } from "../../../lib/constants";
import ThemeToggle from "./ThemeToggle";
import Avatar from "../Avatar";
import { TbLogout2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosVideocam } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdSettingsPhone } from "react-icons/md";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX <= 10) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-screen z-20"
        onMouseEnter={() => setIsVisible(true)}
      />
      <div
        className="fixed top-0 left-0 flex justify-start items-center z-10"
        onMouseLeave={() => setIsVisible(false)}
      >
        <div
          className={`backdrop-blur-lg transition-all duration-500 min-h-screen flex flex-col justify-around items-center space-y-5 py-6 relative ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="space-y-16 rounded-md   p-2">
            <ul className="gap-3 flex flex-col items-center justify-center">
              <ListItem>
                <FaUserFriends size={ICON_SIZE} className="text-second" />
              </ListItem>
              <ListItem>
                <HiMiniUserGroup size={ICON_SIZE} className="text-second" />
              </ListItem>
              <ListItem>
                <MdSettingsPhone size={ICON_SIZE} className="text-second" />
              </ListItem>
              <ListItem>
                <IoIosVideocam size={ICON_SIZE} className="text-second" />
              </ListItem>
              <ListItem>
                <IoSettings size={ICON_SIZE} className="text-second" />
              </ListItem>
              <li className="my-1">
                <ThemeToggle />
              </li>
            </ul>
            <div>
              <ul className="flex flex-col items-center justify-center mb-5">
                <li className="mb-3">
                  <Avatar src="./girl.jpeg" alt="User avatar" size="sm" />
                </li>
                <ListItem>
                  <TbLogout2 size={ICON_SIZE} className="text-second" />
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
