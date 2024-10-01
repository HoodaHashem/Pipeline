import ListItem from "./ListItem";
import { SIDEBAR_ICON_SIZE } from "../../../lib/constants";
import ThemeToggle from "./ThemeToggle";
import Avatar from "../Avatar";
import { TbLogout2 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosVideocam } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdSettingsPhone } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  return (
    <div className="flex justify-start items-center">
      <div
        className="min-h-screen flex flex-col justify-around items-center space-y-5 py-6 relative"
        onMouseEnter={() => setIsLogoVisible(true)}
        onMouseLeave={() => setIsLogoVisible(false)}
      >
        <div
          className={`  top-6 left-0 flex items-center justify-center rounded-md bg-fifth p-4 transition-all duration-500 ${
            isLogoVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <img src="./icon.png" alt="logo" className="mt-1 w-8 h-8" />
        </div>
        <div className="transition-all duration-500 space-y-16 rounded-md bg-fifth p-2">
          <ul className="gap-3 flex flex-col items-center justify-center">
            <ListItem>
              <FaUserFriends size={SIDEBAR_ICON_SIZE} className="text-second" />
            </ListItem>
            <ListItem>
              <HiMiniUserGroup
                size={SIDEBAR_ICON_SIZE}
                className="text-second"
              />
            </ListItem>
            <ListItem>
              <MdSettingsPhone
                size={SIDEBAR_ICON_SIZE}
                className="text-second"
              />
            </ListItem>
            <ListItem>
              <IoIosVideocam size={SIDEBAR_ICON_SIZE} className="text-second" />
            </ListItem>
            <ListItem>
              <IoSettings size={SIDEBAR_ICON_SIZE} className="text-second" />
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
                <TbLogout2 size={SIDEBAR_ICON_SIZE} className="text-second" />
              </ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
