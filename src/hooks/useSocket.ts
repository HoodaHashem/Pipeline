import { useEffect, useState } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../lib/constants";
import { Socket } from "socket.io-client";
import { useUserData } from "../hooks/useUserData";

const useSocket = () => {
  const [socket, setSocket] = useState<typeof Socket | null>(null);

  const { userData } = useUserData();
  const userId = userData?._id;

  useEffect(() => {
    if (!userId) return;

    const newSocket = io(SOCKET_URL, {
      reconnection: true,
      autoConnect: true,
      reconnectionDelay: 1000,
      timeout: 1000,
      reconnectionAttempts: 10,
      query: { userId },
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userId]);

  return socket;
};

export default useSocket;
