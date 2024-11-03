import { FaUserXmark } from "react-icons/fa6";
import Avatar from "../Avatar";
import { TiArrowRightThick } from "react-icons/ti";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { MdDoubleArrow } from "react-icons/md";
import { IOutgoingRequests } from "../../../lib/interfaces";

const OutgoingRequestsList = (value: IOutgoingRequests) => {
  return (
    <li key={value._id}>
      <div className="flex items-center space-x-4 p-3">
        <div className="inline-flex items-start mr-3">
          <div className="flex -space-x-3 rtl:space-x-reverse items-center">
            <Avatar
              src={
                value.from.photo
                  ? `${API_PUBLIC_URL}/${value.from.photo}`
                  : "./defaultProfilePhoto.jpg"
              }
              alt="sender"
              size="sm"
            />
            <div className="z-10 h-6 w-6 bg-bg items-center flex justify-center rounded-full">
              <MdDoubleArrow className=" text-red-500 " />
            </div>

            <Avatar
              src={
                value.to.photo
                  ? `${API_PUBLIC_URL}/${value.to.photo}`
                  : "./defaultProfilePhoto.jpg"
              }
              alt="reciever"
              size="sm"
            />
          </div>
        </div>
        <div className="pr-1">
          <div className="leading-snug font-semibold text-text transition-colors duration-500 flex justify-center items-center gap-1">
            <span> {value.from.username} </span>

            <span>
              <TiArrowRightThick className="text-red-500" />
            </span>
            <span>{value.to.username}</span>
          </div>

          <div className="flex justify-between items-center  text-sm font-medium text-second transition-colors duration-500 mt-1">
            {value.acceptance}
            <div className="flex justify-center items-center gap-1 ">
              <button className="p-2 dark:bg-slate-700 rounded-lg dark:hover:bg-slate-200 transition-colors duration-300 hover:text-red-500">
                <FaUserXmark />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OutgoingRequestsList;
