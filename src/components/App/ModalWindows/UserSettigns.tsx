import Avatar from "../Avatar";
import ModalHeading from "./ModalHeading";
import UserSettingsInput from "../../Ui/UserSettingsInput";
import { FaUserEdit } from "react-icons/fa";
import Button from "../../Ui/Button";
import { useEffect, useRef, useState } from "react";
import { getUserData } from "../../../lib/apiCenter/userService";

interface IUserSettings {
  onClose: () => void;
}
const UserSettings = ({ onClose }: IUserSettings) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<{
    email: string;
    username: string;
    phone: string;
    fullName: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const filterUserData = async () => {
    try {
      setIsLoading(true);
      const user = await getUserData();
      setUserData(user.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    filterUserData();
  }, []);

  return (
    <div className="p-5">
      <ModalHeading headingList={["User Information"]} />
      <div className="container flex flex-col justify-center items-center mt-3 w-96">
        <Avatar
          src="./girl.jpeg"
          alt="girl"
          size="xl"
          icon={<FaUserEdit onClick={handleDivClick} />}
        />
        <input
          type="file"
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
        />
        <UserSettingsInput
          defaultValue={isLoading ? "Loading..." : userData?.fullName}
        />
        <UserSettingsInput
          defaultValue={isLoading ? "Loading..." : userData?.username}
        />
        <UserSettingsInput
          defaultValue={isLoading ? "Loading..." : userData?.phone}
        />
        <UserSettingsInput
          defaultValue={isLoading ? "Loading..." : userData?.email}
        />
        <div className="flex">
          <Button>Edit</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
