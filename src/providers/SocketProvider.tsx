import { ReactNode, useEffect, useState } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../lib/constants";
import SocketContext from "../contexts/SocketContext";
import { Socket } from "socket.io-client";
import { useUserData } from "../hooks/useUserData";

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<typeof Socket | null>(null);
  const { userData } = useUserData();
  const userId = userData?._id;
  useEffect(() => {
    const newSocket = io(SOCKET_URL, {
      reconnection: true,
      autoConnect: true,
      reconnectionDelay: 1000,
      timeout: 1000,
      reconnectionAttempts: 10,
      query: { userId },
    });

    newSocket.on("connect", () => {
      console.log("Socket connected successfully");
    });

    newSocket.on("disconnect", (reason: unknown) => {
      console.log("Socket disconnected:", reason);
    });

    newSocket.on("userInfoError", (error: typeof Error) => {
      console.error("User info error:", error);
    });

    newSocket.on("userInfo", (user: unknown) => {
      console.log(user);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userId]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
