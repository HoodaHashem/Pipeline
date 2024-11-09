import { ReactNode, useState } from "react";
import ChatsContext from "../contexts/ChatsContext";
import { TChatsState } from "../lib/types";

const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TChatsState>({
    status: null,
    name: null,
    selectedChat: null,
    photo: null,
  });

  const value = {
    status: data.status,
    name: data.name,
    photo: data.photo,
    selectedChat: data.selectedChat,
    dataSetter: setData,
  };
  return (
    <ChatsContext.Provider value={value}>{children} </ChatsContext.Provider>
  );
};

export default ChatsProvider;
