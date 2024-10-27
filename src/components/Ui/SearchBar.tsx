import { IoMdSearch } from "react-icons/io";
import { ISearchbar } from "../../lib/interfaces";
import AvatarLoader from "../App/Loaders/avatarLoader";
import Avatar from "../App/Avatar";
import { API_PUBLIC_URL } from "../../lib/apiCenter/apiConfig";
import HighlightText from "./HighlightText";
import TextLoader from "../App/Loaders/TextLoader";
import { FaPhoneAlt } from "react-icons/fa";
import AddFriend from "./AddFriend";
import { useState } from "react";
import SecondaryLoader from "./SecondaryLoader";

const SearchBar = ({
  input,
  handleChange,
  loadingState,
  users,
  debouncedSearch,
}: ISearchbar) => {
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  return (
    <div>
      <div className="relative w-[400px] bg-transparent rounded-2xl shadow-md p-1.5 mt-2  border-gray-300 dark:border-gray-800 border">
        <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-text">
          <IoMdSearch size={"25"} />
        </div>
        <input
          type="text"
          id="friendsSearchbar"
          value={input}
          onChange={handleChange}
          className="peer w-full pl-9  py-[5px] text-base text-gray-600 dark:text-gray-400 bg-transparent rounded-lg focus:outline-none"
        />
        <label
          htmlFor="friendsSearchbar"
          className={`peer-focus:top-[-11px] peer-focus:left-[18px] peer-focus:scale-90 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-third cursor-text absolute top-3 left-10 text-text bg-bg transition-all duration-300 ${input ? "scale-90 top-[-11px] left-[18px] text-sm font-semibold text-third" : ""} `}
        >
          Search
        </label>
      </div>

      <ul
        className={`
        ${debouncedSearch ? "opacity-100" : "opacity-0"}
        transition-all duration-300
        max-h-72 overflow-y-auto
        backdrop-blur-xl
        rounded-xl shadow-lg
        mt-2
        divide-y divide-gray-200/10
        bg-white/10
        no-scrollbar
        h-60
      `}
      >
        {loadingState ? (
          <>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
          </>
        ) : (
          users.map((ele, index) => (
            <li
              key={index}
              className="hover:bg-gray-500/5 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4 p-3">
                <Avatar
                  src={
                    ele.photo
                      ? `${API_PUBLIC_URL}/${ele.photo}`
                      : `${API_PUBLIC_URL}/defaultProfilePhoto.jpg`
                  }
                  size="md"
                  alt="Profile picture"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
                    <HighlightText text={ele.fullName} highlight={input} />
                  </div>

                  <div className="text-xs text-gray-500 truncate flex">
                    <p className="text-second text-xs transition-colors duration-500 font-bold">
                      @
                    </p>

                    <HighlightText text={ele.username} highlight={input} />
                  </div>

                  {ele.phone && (
                    <div className="text-xs text-gray-500 truncate flex items-center gap-1">
                      <FaPhoneAlt size={"10"} className="text-second" />

                      <HighlightText text={ele.phone} highlight={input} />
                    </div>
                  )}
                </div>
                {loadingUserId === ele.username ? (
                  <div className="bg-third p-3 rounded-lg text-text border-none outline-none">
                    <SecondaryLoader />
                  </div>
                ) : !ele.isFrind ? (
                  <AddFriend
                    userId={ele.username}
                    setIsLoading={(loading) => {
                      if (loading) {
                        setLoadingUserId(ele.username);
                      } else {
                        setLoadingUserId(null);
                      }
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </li>
          ))
        )}

        {!loadingState && users.length === 0 && input && debouncedSearch && (
          <li className=" py-6 text-center text-gray-500 items-center">
            No users found !
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
