import { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../../Ui/SearchBar";
import Avatar from "../Avatar";
import useDebounce from "../../../hooks/useDebounce";
import { searchForFriend } from "../../../lib/apiCenter";

const FriendsSection = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const debouncedSearch = useDebounce(searchText);

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
  }, [debouncedSearch]);

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
          <div className="flex items-center gap-4">
            <Avatar src="./girl.jpeg" alt="girl" size="sm" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <Avatar src="./girl.jpeg" alt="girl" size="sm" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <Avatar src="./girl.jpeg" alt="girl" size="sm" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined in August 2014
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FriendsSection;
