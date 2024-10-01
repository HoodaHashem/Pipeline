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

const Sidebar = () => {
  return (
    <div className=" flex justify-start items-center ">
      <div className="min-h-screen flex w-16 flex-col justify-around items-center space-y-5 py-6">
        <div className="flex items-center justify-center rounded-md bg-white p-4">
          <img src="./icon.png" alt="logo" className="mt-1" />
        </div>

        <div className="space-y-16 rounded-md bg-white">
          <ul className="gap-3 flex flex-col items-center justify-center">
            <ListItem>
              <FaUserFriends size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <HiMiniUserGroup size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <MdSettingsPhone size={SIDEBAR_ICON_SIZE} />
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
            <ul className=" flex flex-col items-center justify-center mb-5">
              <li>
                <Avatar src="./girl.jpeg" alt="User avatar" size="sm" />
              </li>
              <ListItem>
                <TbLogout2 size={SIDEBAR_ICON_SIZE} />
              </ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
