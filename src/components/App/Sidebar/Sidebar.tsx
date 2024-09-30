import { TbLogout2 } from "react-icons/tb";
import ListItem from "./ListItem";
import { GrUserSettings } from "react-icons/gr";
import { SIDEBAR_ICON_SIZE } from "../../../lib/constants";

const Sidebar = () => {
  return (
    <div className="h-screen flex justify-start items-center">
      <div className="flex w-16 flex-col items-center space-y-10 py-6">
        <div className="flex items-center justify-center rounded-md bg-white p-4">
          <img src="./icon.png" alt="" className="mt-1" />
        </div>

        <div className="space-y-48 rounded-md bg-white">
          <ul>
            <ListItem>
              <GrUserSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <GrUserSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <GrUserSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <GrUserSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
            <ListItem>
              <GrUserSettings size={SIDEBAR_ICON_SIZE} />
            </ListItem>
          </ul>
          <div className="cursor-pointer flex items-center justify-center pb-5">
            <TbLogout2 size={SIDEBAR_ICON_SIZE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
