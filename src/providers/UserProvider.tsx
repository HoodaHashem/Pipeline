import { ReactNode, useEffect, useState } from "react";
import { IUserData } from "../lib/interfaces";
import { getUserData } from "../lib/apiCenter";
import UserContext from "../contexts/UserContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  const filterUserData = async () => {
    try {
      const user = await getUserData();
      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";
      if (user.status === "success") {
        setUserData(user.data);
      }
    } catch (err) {
      console.error(err);
      setUserData(null);
    }
  };

  useEffect(() => {
    filterUserData();
  }, []);

  const refetchUserData = async () => {
    await filterUserData();
  };

  const value = {
    userData,
    setUserData,
    refetchUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
