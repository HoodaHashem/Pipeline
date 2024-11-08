import { createContext } from "react";
import { IChatsContext } from "../lib/interfaces";

const ChatsContext = createContext<IChatsContext>({
  status: "online",
  name: "jon doe",
  selectedChat: "hooda",
  // setSelectedChat: () => {},
  // setName: () => {},
  // setStatus: () => {},
});

export default ChatsContext;
