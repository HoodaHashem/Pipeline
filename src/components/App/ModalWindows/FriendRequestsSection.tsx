import { useEffect, useState } from "react";
import AvatarLoader from "../Loaders/avatarLoader";
import TextLoader from "../Loaders/TextLoader";
import { getFriendRequests } from "../../../lib/apiCenter";

const FriendRequestsSection = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [incomingRequests, setIcomingRequests] = useState<[]>();
  const [outgoingRequests, setOutgoingRequests] = useState<[]>();

  const getRequests = async () => {
    setLoadingState(true);
    const result = await getFriendRequests();
    setIcomingRequests(result.incomingRequests);
    setOutgoingRequests(result.outgoingRequests);
    setLoadingState(false);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-3 text-text font-medium text-lg">
      {incomingRequests && incomingRequests.length > 0 && (
        <h1 className="text-text text-md ">
          You have{" "}
          <span className="text-second font-mono font-semibold">{`${incomingRequests.length}`}</span>{" "}
          new requests
        </h1>
      )}
      <ul
        className="transition-all duration-300
        overflow-y-auto
        rounded-xl shadow-lg
        mt-2
        no-scrollbar
        h-60 "
      >
        {loadingState && (
          <>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 p-3">
                <div className="inline-flex items-start mr-3">
                  <AvatarLoader size="md" />
                </div>
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold text-text transition-colors duration-500">
                    <TextLoader w="w-48" h="h-4" />
                  </h2>

                  <div className="flex items-center  text-sm font-medium text-second transition-colors duration-500">
                    <TextLoader w="w-20" h="h-3" />
                    <TextLoader w="w-3" h="h-3" />
                  </div>
                </div>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default FriendRequestsSection;
