import { useState } from "react";
import AvatarLoader from "../Loaders/avatarLoader";
import TextLoader from "../Loaders/TextLoader";
import { getFriendRequests } from "../../../lib/apiCenter";
import { Navigate } from "react-router-dom";

const FriendRequestsSection = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [requests, setRequests] = useState();

  const getRequests = async () => {
    const result = await getFriendRequests();
    if (result === "Unauthorized") return <Navigate to={"/auth"} replace />;
  };
  return (
    <div className="flex justify-center items-center mt-3 text-text font-medium text-lg">
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
