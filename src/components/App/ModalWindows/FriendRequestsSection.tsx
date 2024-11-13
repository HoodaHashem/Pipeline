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
  const [incomingRequestsCount, setIncomingRequestsCount] = useState(0);

  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleFriendRequests = (data: IFriendRequests) => {
      setTimeout(() => {
        setIncomingRequests(data.incomingRequests);
        setOutgoingRequests(data.outgoingRequests);

        const pendingCount = Array.isArray(data.incomingRequests)
          ? data.incomingRequests.filter(
              (req: IIncomingRequests) => req.status === "pending",
            ).length
          : 0;

        setIncomingRequestsCount(pendingCount);
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
      {incomingRequestsCount > 0 && (
        <h1 className="text-text text-md">
          You have{" "}
          <span className="text-second font-mono font-semibold ">{`${incomingRequestsCount}`}</span>{" "}
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
        {incomingRequests && incomingRequests?.length > 0 ? (
          incomingRequests?.map((value: IIncomingRequests) => {
            return <IncomingRequestsList {...value} key={value._id} />;
          })
        ) : (
          <h3 className="text-center transition-colors duration-500 text-sm font-semibold uppercase text-second mb-1">
            There is no incoming Requests!
          </h3>
        )}
        <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
          Outgoing Requests
        </h3>

        {outgoingRequests && outgoingRequests?.length > 0 ? (
          outgoingRequests?.map((value: IOutgoingRequests) => {
            return <OutgoingRequestsList {...value} key={value._id} />;
          })
        ) : (
          <h3 className="text-center transition-colors duration-500 text-sm font-semibold uppercase text-second mb-1">
            There is no outgoing Requests!
          </h3>
        )}
      </ul>
    </div>
  );
};

export default FriendRequestsSection;
