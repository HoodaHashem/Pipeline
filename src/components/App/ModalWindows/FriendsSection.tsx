import { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../../Ui/SearchBar";
import useDebounce from "../../../hooks/useDebounce";
import { searchForFriend } from "../../../lib/apiCenter";
import { useSocket } from "../../../hooks/useSocket";
import { TContacts } from "../../../lib/types";
import { IContact } from "../../../lib/interfaces";
import FriendsList from "../../Ui/FriendsList";

const FriendsSection = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const debouncedSearch = useDebounce(searchText);
  const [contacts, setContacts] = useState<TContacts | null>(null);
  const socket = useSocket();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const users = await searchForFriend({ search: debouncedSearch });
      setUsers(users.users);
      setIsLoading(false);
    };
    if (debouncedSearch) loadUsers();
    if (!debouncedSearch) setUsers([]);

    if (!socket) return;

    const handleContacts = (data: TContacts) => {
      setContacts(data);
    };

    socket.emit("getContacts");

    socket.on("contactsUpdate", handleContacts);

    return () => {
      socket.off("contactsUpdate");
    };
  }, [socket, debouncedSearch]);

  return (
    <div className="relative transition-all duration-500 container my-2 flex flex-col justify-center items-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <SearchBar
          input={searchText}
          handleChange={handleChange}
          loadingState={isLoading}
          users={users}
          debouncedSearch={debouncedSearch}
        />
      </div>
      <ul className="pt-20">
        <li>
          {contacts && contacts.length > 0 ? (
            <div className="divide-y divide-gray-300 dark:divide-gray-800 ">
              {contacts?.map((ele: IContact, idx) => {
                if (!ele.photo) ele.photo = "defaultProfilePhoto.jpg";

                return (
                  <FriendsList
                    key={idx}
                    src={ele.photo}
                    contactName={ele.fullName}
                    username={ele.username}
                    id={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <h3 className="uppercase text-center transition-colors duration-500 text-sm font-semibold  text-gray-400 dark:text-gray-600 mb-1">
              There Is No Friends
            </h3>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FriendsSection;
