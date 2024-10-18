import Avatar from "../Avatar";
import ModalHeading from "./ModalHeading";
import UserSettingsInput from "../../Ui/UserSettingsInput";
import Button from "../../Ui/Button";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  deleteProfilePicture,
  getUserData,
  updateProfilePicture,
} from "../../../lib/apiCenter/userService";
import useInternalServerError from "../../../hooks/useInternalServerError";
import { IUserData } from "../../../lib/interfaces";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import AvatarLoader from "../Loaders/avatarLoader";

interface IUserSettings {
  onClose: () => void;
}
const UserSettings = ({ onClose }: IUserSettings) => {
  const { setIsInternalServerError } = useInternalServerError();
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const filterUserData = async () => {
    try {
      setIsLoading(true);
      const user = await getUserData();
      if (user.status === "error") {
        setIsInternalServerError(true);
      }
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";
      setUserData(user.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProfilePic = async () => {
    try {
      setIsLoading(true);
      const result = await deleteProfilePicture();
      if (result.status === "error") {
        setIsInternalServerError(true);
      }
      const user = await getUserData();
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";

      if (user.status === "error") {
        setIsInternalServerError(true);
      }
      setUserData(user.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      try {
        setIsLoading(true);
        const result = await updateProfilePicture(file);
        if (result.status === "error") {
          setIsInternalServerError(true);
        }
        const user = await getUserData();
        if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";

        if (user.status === "error") {
          setIsInternalServerError(true);
        }
        setUserData(user.data);
      } catch (err) {
        console.error(err);
      } finally {
        e.target.value = "";
        setIsLoading(false);
        window.location.reload();
      }
    }
  };
  useEffect(() => {
    filterUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = () => {};
  return (
    <div className="p-5">
      <ModalHeading headingList={["User Information"]} />
      <div className="container flex flex-col justify-center items-center mt-3 w-96">
        <div
          className={`flex justify-center items-center gap-5 ${isLoading ? "animate-pulse" : ""}`}
        >
          <button
            className="gap-1 flex items-center justify-center p-2 bg-slate-500 text-text font-medium rounded-md tracking-wider active:scale-95 transition-all hover:bg-slate-600 duration-300"
            onClick={handleButtonClick}
          >
            <IoCloudUpload />
            Update
          </button>

          {isLoading ? (
            <AvatarLoader size="xl" />
          ) : (
            <Avatar
              src={`${API_PUBLIC_URL + "/" + userData?.photo}`}
              size="xl"
              alt="Profile picture"
            />
          )}

          <button
            className="gap-1 flex items-center justify-center p-2 bg-red-600 text-text font-medium rounded-md tracking-wider active:scale-95 transition-all hover:bg-red-700 duration-300"
            onClick={deleteProfilePic}
          >
            <FaRegTrashAlt />
            Delete
          </button>
        </div>
        <input
          type="file"
          name="avatar"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />
        <form onSubmit={handleEdit}>
          <UserSettingsInput
            defaultValue={isLoading ? "Loading..." : (userData?.fullName ?? "")}
            isLoading={isLoading}
            name="fullName"
            value=""
          />
          <UserSettingsInput
            defaultValue={isLoading ? "Loading..." : (userData?.username ?? "")}
            isLoading={isLoading}
            name="username"
            value=""
          />
          <UserSettingsInput
            defaultValue={isLoading ? "Loading..." : (userData?.phone ?? "")}
            isLoading={isLoading}
            name="phone"
            value={formData.fullName}
          />
          <UserSettingsInput
            defaultValue={isLoading ? "Loading..." : (userData?.email ?? "")}
            isLoading={isLoading}
            name="email"
            value=""
          />
          <div className={`flex ${isLoading ? "animate-pulse " : ""}`}>
            <Button disabled={isLoading}>Edit</Button>
            <Button onClick={onClose} disabled={isLoading}>
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
