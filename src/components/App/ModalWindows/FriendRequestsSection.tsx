import { useEffect, useState } from "react";
import { useSocket } from "../../../hooks/useSocket";
import ContactLoader from "./ContactLoader";
import {
  IFriendRequests,
  IIncomingRequests,
  IOutgoingRequests,
} from "../../../lib/interfaces";
import OutgoingRequestsList from "./OutgoingRequestsList";
import IncomingRequestsList from "./IncomingRequestsList";

const FriendRequestsSection = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [incomingRequests, setIncomingRequests] = useState<[]>();
  const [outgoingRequests, setOutgoingRequests] = useState<[]>();
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleFriendRequests = (data: IFriendRequests) => {
      setTimeout(() => {
        setIncomingRequests(data.incomingRequests);
        setOutgoingRequests(data.outgoingRequests);
        setLoadingState(false);
      }, 3000);
    };

    setLoadingState(true);
    socket.emit("requestFriendRequests");

    socket.on("getFriendRequests", handleFriendRequests);

    return () => {
      socket.off("getFriendRequests", handleFriendRequests);
    };
  }, [socket]);

  return (
    <div className="flex flex-col justify-center items-center mt-3 text-text font-medium text-lg">
      {incomingRequests && incomingRequests.length > 0 && (
        <h1 className="text-text text-md">
          You have{" "}
          <span className="text-second font-mono font-semibold ">{`${incomingRequests.length}`}</span>{" "}
          new requests
        </h1>
      )}
      <ul
        className="transition-all duration-300
        overflow-y-auto
                mt-2
        no-scrollbar
        h-60 "
      >
        {loadingState && (
          <>
            <ContactLoader />
            <ContactLoader />
            <ContactLoader />
          </>
        )}

        <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
          Incoming Requests
        </h3>
        {incomingRequests?.map((value: IIncomingRequests) => {
          return <IncomingRequestsList {...value} />;
        })}
        <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
          Outgoing Requests
        </h3>

        {outgoingRequests?.map((value: IOutgoingRequests) => {
          return <OutgoingRequestsList {...value} />;
        })}
      </ul>
    </div>
  );
};

export default FriendRequestsSection;
