import { ReactNode } from "react";
import ChatsContext from "../contexts/ChatsContext";

const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    status: "online",
    name: "jon doe",
    selectedChat: "hooda",
  };
  return (
    <ChatsContext.Provider value={value}>{children} </ChatsContext.Provider>
  );
};

export default ChatsProvider;
