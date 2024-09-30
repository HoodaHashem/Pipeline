import ListItem from "./ListItem";
import { SIDEBAR_ICON_SIZE } from "../../../lib/constants";
import ThemeToggle from "./ThemeToggle";

import { TbLogout2 } from "react-icons/tb";
import { FaPhone, FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosVideocam } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="h-screen flex justify-start items-center">
      <div className="flex w-16 flex-col items-center space-y-5 py-6">
        <div className="flex items-center justify-center rounded-md bg-white p-4">
          <img src="./icon.png" alt="" className="mt-1" />
        </div>

        <div className="space-y-36 rounded-md bg-white">
          <ul className="gap-3 flex flex-col items-center justify-center">
            <ListItem>
              <FaUserFriends size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <HiMiniUserGroup size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <FaPhone size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <IoIosVideocam size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <IoSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <li className="my-1">
              <ThemeToggle />
            </li>
          </ul>
          <div>
            <ul className="gap-4 flex flex-col items-center justify-center mb-5">
              <li className="cursor-pointer">
                <TbLogout2 size={SIDEBAR_ICON_SIZE} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
