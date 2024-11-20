import { createContext } from "react";
import { IChatsContext } from "../lib/interfaces";

const ChatsContext = createContext<IChatsContext>({
  status: null,
  name: null,
  selectedChat: null,
  photo: null,
  userId: null,
  isChatLoading: false,
  dataSetter: () => {},
});

export default ChatsContext;
