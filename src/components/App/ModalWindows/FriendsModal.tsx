import { useState } from "react";
import FriendsSection from "./FriendsSection";
import FriendRequestsSection from "./FriendRequestsSection";
import OnlineFriendsSection from "./OnlineFriendsSection";

const FriendsModal = () => {
  const [activeItem, setActiveItem] = useState("friends");
  return (
    <div className="p-3 ">
      <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-4 lg:mt-0">
        <li
          className={`relative cursor-pointer  transition-all duration-300 ${activeItem === "friends" ? "border-b-2 border-third text-third pointer-events-none" : " group text-text hover:text-second border-b-2 border-transparent"}`}
          onClick={() => setActiveItem("friends")}
        >
          Friends
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          className={`relative cursor-pointer  transition-all duration-300 ${activeItem === "friendRequests" ? "border-b-2 border-third text-third pointer-events-none" : " group text-text hover:text-second border-b-2 border-transparent"}`}
          onClick={() => setActiveItem("friendRequests")}
        >
          Friend requests
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li
          className={`relative cursor-pointer  transition-all duration-300 ${activeItem === "onlineFriends" ? "border-b-2 border-third text-third pointer-events-none" : " group text-text hover:text-second border-b-2 border-transparent"}`}
          onClick={() => setActiveItem("onlineFriends")}
        >
          Online Friends
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <div className="relative mt-5">
        <div
          className={`transition-opacity duration-300 ${activeItem === "friends" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
        >
          <FriendsSection />
        </div>
        <div
          className={`transition-opacity duration-300 ${activeItem === "friendRequests" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
        >
          <FriendRequestsSection />
        </div>
        <div
          className={`transition-opacity duration-300 ${activeItem === "onlineFriends" ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
        >
          <OnlineFriendsSection />
        </div>
      </div>
    </div>
  );
};
export default FriendsModal;
